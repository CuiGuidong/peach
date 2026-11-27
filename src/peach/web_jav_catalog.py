"""DMM 在线作品目录。查找不需要订阅和馆藏作品。"""
from datetime import date
import logging
import re
import secrets
import time
from urllib.parse import urlencode

from httpx import TransportError
from itsdangerous import BadData, URLSafeTimedSerializer

from . import entities, feeds, seed_catalog, web_catalog, web_feeds
from .catalog_rules import canonical_tag_name
from .genre_decisions import load_genre_decisions
from .genre_taxonomy import resolve_genre
from .profiles import read_settings
from .sources.base import Session
from .sources.dmm import ACTRESS_ID, CATALOG_MAX_OFFSET, DmmSource, PRE_ORDER, release_date
from .user_messages import UserValueError


PAGE_SIZE = 24
MAX_PAGES = CATALOG_MAX_OFFSET // PAGE_SIZE + 1
_LOG = logging.getLogger(__name__)
_COVER = URLSafeTimedSerializer(secrets.token_urlsafe(32), salt="peach-dmm-catalog-cover")
_DMM_COVER = re.compile(
    r"https://(?:awsimgsrc|pics)\.dmm\.co\.jp/(?:pics_dig/|dig/)?"
    r"(?:digital/(?:video|amateur)|mono/movie/adult)/([a-z0-9_]+)/\1p[ls]\.jpg"
)


def catalog_cover_target(token: str) -> str:
    if len(token) > 1024:
        return ""
    try:
        return _COVER.loads(token, max_age=24 * 60 * 60)
    except BadData:
        return ""


def _cover_url(row: dict) -> str:
    image = row.get("packageImage")
    if isinstance(image, dict):
        for source in (image.get("largeUrl"), image.get("mediumUrl")):
            match = _DMM_COVER.fullmatch(source) if isinstance(source, str) else None
            if match and match[1] == row["id"]:
                return "/cover-image?" + urlencode({"catalog": _COVER.dumps(source)})
    return ""


def _cast(row: dict) -> dict[str, str]:
    return {person["id"]: person["name"] for person in (row.get("actresses") or [])
            if isinstance(person, dict) and isinstance(person.get("id"), str)
            and ACTRESS_ID.fullmatch(person["id"]) and isinstance(person.get("name"), str) and person["name"]}


def _facet(value: object) -> dict[str, str]:
    if not isinstance(value, dict):
        return {}
    number, name = value.get("id"), value.get("name")
    if isinstance(number, str) and ACTRESS_ID.fullmatch(number) and isinstance(name, str) and name.strip():
        return {"id": number, "name": name.strip()}
    return {}


def _genres(connection, detail: dict, decisions: dict, names: dict[str, str | None]) -> list[dict]:
    tags = []
    for value in detail.get("genres") or []:
        if genre := _facet(value):
            mapped = resolve_genre(genre["name"], decisions)
            if mapped is not None:
                name = canonical_tag_name(mapped or genre["name"])
                if name not in names:
                    entity = entities.resolve_entity(connection, "tag", name)
                    canonical = entity["canonical_name"] if entity is not None else name
                    visible = connection.execute(
                        "SELECT " + web_catalog.tag_not_hidden("NULL", "?"),
                        (entities.normalize_entity_name(canonical),),
                    ).fetchone()[0]
                    names[name] = canonical if visible else None
                if label := names[name]:
                    tags.append({**genre, "name": label, "source_name": genre["name"]})
    return tags


def _studios(contract, connection, rows) -> dict[str, dict]:
    makers = {item["id"]: item["name"] for row in rows if (item := _facet(row.get("maker")))}
    studios = {}
    for number, written in makers.items():
        entity = entities.resolve_entity(connection, "studio", written)
        name = entity["canonical_name"] if entity is not None else written
        studios[number] = {"id": number, "name": name, "source_name": written,
                           "entity_id": entity["id"] if entity is not None else None,
                           "has_logo": contract.has_logo(name), "logo_version": contract.logo_version(name)}
    return studios


def _portraits(contract, numbers: set[str]) -> dict[str, dict]:
    if not numbers:
        return {}
    marks = ",".join("?" for _ in numbers)
    with contract.database.read_connection() as connection:
        rows = connection.execute(
            "SELECT r.external_id,e.id,e.canonical_name FROM entity_external_ref r JOIN entity e ON e.id=r.entity_id"
            " WHERE e.kind='performer' AND r.external_kind='performer' AND r.provider IN ('dmm','r18dev')"
            f" AND r.external_id IN ({marks}) GROUP BY r.external_id HAVING count(DISTINCT e.id)=1", tuple(numbers))
        return {number: web_catalog.entity_ref(contract, "performer", entity_id, name)
                for number, entity_id, name in rows}


def _reviewed_names(state_root) -> dict[tuple[str, str], str]:
    names = {}
    for (provider, kind, number), facts in seed_catalog.indexes()[0].items():
        if (provider, kind) == ("dmm", "performer"):
            for fact in facts:
                if fact.claim.language == "zh-CN":
                    names[number, fact.claim.original] = fact.claim.value
    try:
        pack = seed_catalog.load(state_root / "dmm-performer-names.json")
    except FileNotFoundError:
        return names
    except (OSError, ValueError) as error:
        _LOG.warning("Could not load reviewed DMM performer names: %s", error)
        return names
    for fact in pack.facts.values():
        claim = fact.claim
        if fact.preferred and claim.field == "chinese-name" and claim.language == "zh-CN":
            for ref in claim.refs:
                if (ref.provider, ref.kind) == ("dmm", "performer"):
                    names[ref.id, claim.original] = claim.value
    return names


def q_jav_catalog(contract, args):
    name = str(args.get("performer") or "").strip()[:120]
    number = str(args.get("actress") or "")
    if number and not ACTRESS_ID.fullmatch(number):
        raise UserValueError("errors.feeds.dmmActressIdDigits")
    maker = str(args.get("maker") or "")
    raw_genres = str(args.get("genre") or "")
    genres = tuple(dict.fromkeys(raw_genres.split(","))) if raw_genres else ()
    if ((maker and not ACTRESS_ID.fullmatch(maker)) or len(genres) > 24
            or any(not ACTRESS_ID.fullmatch(value) for value in genres)):
        raise UserValueError("api.feeds.catalogFacetInvalid")
    day = str(args.get("date") or "")
    if day:
        try:
            valid_day = date.fromisoformat(day).isoformat() == day
        except ValueError:
            valid_day = False
        if not valid_day:
            raise UserValueError("api.feeds.catalogDateInvalid")
    try:
        page = min(MAX_PAGES, max(1, int(args.get("page") or 1)))
    except (ValueError, TypeError):
        page = 1
    catalog = contract.cached_lru(("jav-catalog", name, number, day, page, maker, genres),
                                  lambda: _catalog(contract, name, number, day, page, maker, genres), ttl=5 * 60)
    with contract.database.read_connection() as connection:
        original_tags = read_settings(connection).get("sourceTagsOriginal") is True
    if not original_tags:
        return catalog
    return {**catalog, "items": [
        {**row, "tags": [{**tag, "name": tag["source_name"]} for tag in row["tags"]]}
        for row in catalog["items"]
    ]}


def _catalog_actor_options(contract, name: str) -> tuple[list[dict], dict | None]:
    lookup = web_feeds.q_feed_lookup(contract, {"q": name})
    return ([{"id": candidate["id"], "name": candidate["names"][0], "avatar_url": candidate.get("avatar_url")}
             for candidate in lookup["dmm_candidates"]],
            lookup.get("dmm_unavailable"))


def _catalog(contract, name: str, number: str, day: str, page: int, maker: str, genres: tuple[str, ...]) -> dict:
    options, failure = contract.cached_lru(
        ("jav-catalog-artists", name), lambda: _catalog_actor_options(contract, name), ttl=5 * 60,
    ) if name else ([], None)
    if name and not number and not options:
        if failure:
            raise UserValueError("api.feeds.catalogUnavailable", {"error": failure["error"]})
        return {"items": [], "total": 0, "page": 1, "pages": 1, "size": PAGE_SIZE, "performer_options": []}
    selected = number or (options[0]["id"] if options else "")
    source = DmmSource()
    session = Session(web_feeds._transport(contract), deadline=time.monotonic() + web_feeds.LOOKUP_TIMEOUT)
    def listed(page_number):
        return source.catalog_page(session=session, limit=PAGE_SIZE, offset=(page_number - 1) * PAGE_SIZE,
                                   actress_id=selected, delivery_date=day, maker_id=maker, genre_ids=genres)

    try:
        with source.holding(session):
            rows, total, _ = listed(page)
            pages = min(MAX_PAGES, max(1, (total + PAGE_SIZE - 1) // PAGE_SIZE))
            if page > pages:
                page = pages
                if total:
                    rows, total, _ = listed(page)
            details = source.catalog_details([str(row["id"]) for row in rows], session=session)
    except (OSError, TransportError) as error:
        raise UserValueError("api.feeds.catalogUnavailable", {"error": str(error)}) from error
    casts = [_cast(row) for row in rows]
    portraits = _portraits(contract, {number for cast in casts for number in cast} | {option["id"] for option in options})
    reviewed = _reviewed_names(contract.follow_state_root)

    def performer(number, written):
        return {"name": written, **portraits.get(number, {}), "source_name": written,
                "source_zh_cn": reviewed.get((number, written.strip()))}

    avatars = {option["id"]: option["avatar_url"] for option in options if option["avatar_url"]}
    with contract.database.read_connection() as connection:
        decisions = load_genre_decisions(connection)
        tag_names = {}
        tags_by_work = {cid: _genres(connection, detail, decisions, tag_names) for cid, detail in details.items()}
        studios = _studios(contract, connection, rows)
    items = []
    for row, cast in zip(rows, casts):
        cid = str(row["id"])
        detail = details.get(cid, {})
        duration = detail.get("duration")
        items.append({
            "id": cid, "code": str(detail.get("makerContentId") or "").strip(),
            "title": str(row.get("title") or ""), "date": release_date(row.get("deliveryStartAt")),
            "pre_order": row.get("releaseStatus") == PRE_ORDER, "url": source.content_url(cid),
            "cover_url": _cover_url(row), "studio": studios.get(_facet(row.get("maker")).get("id")),
            "tags": tags_by_work.get(cid, []),
            "duration": duration if type(duration) is int and duration > 0 else None,
            "people": [{
                **performer(number, written), "dmm_id": number,
                "source_url": feeds.dmm_actress_url(number),
                **({"source_avatar_url": avatars[number]} if number in avatars else {}),
            } for number, written in cast.items()],
        })
    performer_options = []
    for option in options:
        number = option["id"]
        display = performer(number, option["name"])
        performer_options.append({**option, **display, "id": number, "entity_id": display.get("id")})
    return {"total": total, "page": page, "pages": pages, "size": PAGE_SIZE, "performer_options": performer_options,
            "selected_actress": selected, "items": items}
