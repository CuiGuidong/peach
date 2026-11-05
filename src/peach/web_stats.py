"""ๆ•ฐๆฎ้ขๆฟ๏ผๅบ“ๅญ็ป่ฎกใ€ๅญๅจๅทใ€ๅฃๅ‘ณ็ช—ๅฃใ€ๆ็ดขๅๅฒไธ็”ป่ดจ็ฎๆ ใ€

่ฟไธ€ๅ็่พ“ๅบๅ…จๆฏ่ๅๆ•ฐ๏ผๆฒกๆไธ€ๆกๆฏ็็ธๅญ—ๆฎต๏ผๅฎไปฌ่ฆไนๆฅ่ช `COUNT`/`SUM`๏ผ่ฆไนๆฅ่ช
ๆต่งๅๅฒๅๆไบงๅบ็ JSONใ€ๅ ๆญค่ฟ้็ๅฝๆ•ฐ้ฝๅฏไปฅ่ตฐ `contract.cached()`๏ผไน้ฝๅฟ…้กป่ฝๅจ
็ผ“ๅญ่ขซ `cache_bust()` ๆธ…ๆๆ—ถๅฎๅ…จไธขๅผ็ป“ๆโ€”โ€”ๅฃๅพ่ง `web_state.WebContract.cached`ใ€

ๅญๅจๅทไธ€่่ฏป็ๆฏ็ๅฎๆ่ฝฝ็น๏ผไธๅจ็บฟ็ๆฅๆบ่ฆๆพ็คบๆใ€ๆชๆ่ฝฝใ€่€ไธๆฏ 0 ๅญ—่๏ผ
ๅฆๅ้ขๆฟไผๆไธ€ๆ•ดๅ—ๅค–็ฝฎ็ๆฅๅ‘ๆใ€็ฉบ็ใ€ใ€
"""
from __future__ import annotations

import json
import re
import shutil
import threading
import time

from datetime import UTC, datetime, timedelta

from .catalog_rules import tag_cat
from . import media_libraries, settings_file
from .config import LOCATION_ROOT_DECLARATIONS
from .fsutil import atomic_write_text
from .platform import is_unmapped, root_online, system_volume, translate_ledger_path
from .taste_history import (
    analyze_history,
    build_taste_dashboard,
    refresh_history,
    remove_history_source,
    store_version,
    utc_offset_label,
    write_manifest,
)
from .web_activity import DEFAULT_PROFILE_ID
from .web_catalog import attach_avatar_availability, tag_is_not_a_performer_name, tag_not_hidden
from .media_sources import cost_for
from .web_state import CACHE_TTL, WebContract, path_version
from .taste_browsers import browser_sources, configure_browser, enabled_history_sources, enabled_bookmark_sources
from .taste_bookmarks import refresh_bookmarks


def q_search_history(contract: WebContract, limit: int = 10):
    with contract.read_connection() as connection:
        rows = connection.execute(
            "SELECT query FROM search_history ORDER BY last_used_at DESC, query LIMIT ?",
            (max(1, min(limit, 50)),),
        ).fetchall()
    return {"items": [row["query"] for row in rows]}


TASTE_WINDOWS = {"all": None, "7d": 7, "30d": 30, "90d": 90, "365d": 365}


def _taste_since(window: str) -> str | None:
    if window not in TASTE_WINDOWS:
        raise ValueError("invalid taste window")
    days = TASTE_WINDOWS[window]
    return (datetime.now(UTC) - timedelta(days=days)).isoformat() if days else None


def taste_inputs(contract: WebContract, window: str) -> tuple:
    """`q_taste` ่ฏปๅฐ็่ดฆๆฌไนๅค–็ไธ่ฅฟ็็ๆฌ๏ผไธ่ดฆๆฌ็ๆฌๅทไธ€่ตทๆๆ็ๆฟๅฟซ็…ง็็ๆฌใ€

    ๆต่งๅๅฒๅบ“ใ€ๅๆๆธ…ๅ•ไธๅฏผๅ…ฅ็ฎๅฝ•็”ฑ `scripts/taste_history.py` ๅจ่ฟ็จๅค–ๅ๏ผๆฆๅ•ไธ็
    ๅๅคดๅ่ฏปๅคดๅ็ฎๅฝ•ใ€ๆๆ—ถ้—ด็ช—็่งๅพ่ตท็นๆฏๅคฉๆป‘ไธ€ๆ ผ๏ผๆๆ—ฅๆ้็ฎ—ไธ€ๆฌกใ€
    """
    return (store_version(contract.taste_history_store),
            path_version(contract.taste_history_manifest),
            path_version(contract.taste_history_import_root),
            path_version(contract.avatar_root),
            (_taste_since(window) or "")[:10])


#: ็ๆฟ้็ฎ—ๆ€ๅค็ญ่ฟไนไน…ใ€่ดฆๆฌ้ไธๅฃๅ‘ณๆ— ๅ…ณ็ๅๅ…ฅ๏ผๆ’ญๆ”พใ€ๅ…ณๆณจๆฃ€ๆฅ๏ผไนๅ้็ฎ—ไธๅฐไธ€็ง’๏ผ
#: ็…งๅธธ็ญๆ–ฐ็ป“ๆ๏ผ่บซไปฝ่พ“ๅ…ฅๅไบๆ–่ฟ็จๅ่ตทๆ—ถ่ฆๅๅ ็ง’๏ผๅฐฑๅ…ๅไธไธ€ไปฝๅนถๆ  `stale`๏ผๅๅฐ
#: ็ฎ—ๅฎๅๆข๏ผไธ่ฎฉไธ€ไธช้กต้ขๅ ไฝๆ•ดไธชๆๅกใ€
TASTE_FRESH_WAIT = 1.0


#: ้็ฎ—ๅคฑ่ดฅๅ๏ผๅไธ€ไปฝ่พ“ๅ…ฅๅจ่ฟๆฎตๆ—ถ้—ดๅ…ไธๅ้็ฎ—๏ผๅคฑ่ดฅๅคๅๆฏ็กฎๅฎๆ€ง็๏ผๅบ“ๆๅใ€ไปฃ็ ้”่ฏฏ๏ผ๏ผ
#: ้กต้ขๆฏไธค็ง’ไธ€้—ฎๅฐฑๆฏไธค็ง’่ตทไธ€่ถๅฟ…็ถๅคฑ่ดฅ็่ฎก็ฎ—ใ€่พ“ๅ…ฅๅไบใ€ๆ–้กต้ข็นใ€็ซๅณ้่ฏ•ใ€็…งๅธธ้็ฎ—ใ€
TASTE_RETRY_AFTER = 300.0

#: ๅฃๅ‘ณ็ๆฟๅฎ้…่ฏปๅฐ็่ดฆๆฌ่กจ๏ผ`test_ledger_revision.DeclaredTablesTests` ็”จ SQLite ๆๆๅ่ฐ
#: ๅฎๆตๆ ธๅฏนใ€้•ฟไปปๅกๅๅซ็่กจ๏ผๅ…ณๆณจๆฃ€ๆฅใ€่ตๆ–ๅค็็็ถๆ€ไธไปปๅกๅฟ่ทณ๏ผไธ่ฎฉ็ๆฟ้็ฎ—ใ€
TASTE_TABLES = ("asset", "asset_entity", "asset_preference", "entity", "entity_alias",
                "entity_classification", "entity_link", "follow_source")


class _TasteSnapshot:
    """ไธ€ไธช่ๅดๆ€่ฟ‘็ฎ—ๅบ็็ๆฟใ€ๅฎๅฏนๅบ”็่พ“ๅ…ฅ็ๆฌใ€ๆญฃๅจๅๅฐ้็ฎ—็้ฃไธ€่ถ๏ผไปฅๅๆ€่ฟ‘ไธ€ๆฌกๅคฑ่ดฅใ€"""

    def __init__(self):
        self.version = None
        self.payload: dict | None = None
        self.computed_at: str | None = None
        self.worker: threading.Thread | None = None
        self.error: Exception | None = None
        #: ๆ€่ฟ‘ไธ€ๆฌกๅคฑ่ดฅๅฏนๅบ”็่พ“ๅ…ฅ็ๆฌไธๆ—ถๅป๏ผ`time.monotonic()`๏ผใ€
        self.failed_version = None
        self.failed_at = 0.0


_TASTE_SNAPSHOTS: dict[tuple[str, str, str], _TasteSnapshot] = {}
_TASTE_LOCK = threading.Lock()


def _taste_version(contract: WebContract, window: str):
    """ๅฃๅ‘ณไพ่ต–่กจ็็ๆฌๅทใ€ไปฃ็ ๆ็บนๅ  `taste_inputs`๏ผ่ฝฌๆ JSON ๅ่ฏปๅ๏ผๅ…ๅญไธ็ฃ็ไธ็
    ็ๆฌๆ่ฝ็ดๆฅๆฏ”ใ€ไปฃ็ ๆ็บนๅซ็ๆฌๅทไธๅฃๅ‘ณๅๆจกๅ—็ๆบ็ ๏ผๅ็บงๅ่ฝ็็ๆ—งๅฟซ็…งไธ็ฎ—ๆ–ฐ้ฒใ€"""
    from .taste_preferences import _policy_fingerprint
    revision = contract.ledger_revision(TASTE_TABLES)
    if revision is None:
        # ่ดฆๆฌ่ฟๆฒกๆ็ๆฌๅทๆ—ถๆ็ผ“ๅญๆ—ถๆ•ๅๆฎต๏ผๅ `cached_until_changed` ็้€€่ทฏใ€
        revision = f"ttl:{int(time.time() // CACHE_TTL)}"
    return json.loads(json.dumps([revision, _policy_fingerprint(), *taste_inputs(contract, window)],
                                 default=str))


def _taste_snapshot_path(contract: WebContract, window: str):
    return contract.taste_history_store.with_name(f"dashboard-cache-{window}.json")


def _load_taste_snapshot(contract: WebContract, window: str, snapshot: _TasteSnapshot) -> None:
    """่ฟ็จ้ๅฏๅๅ…ๆฅไธไธ€ๆฌก็็ๆฟ๏ผ่พ“ๅ…ฅๆฒกๅๅฐฑๆฏ็ฐๆ็ป“ๆ๏ผๅไบไนๆไธ€ไปฝๅฏไปฅๅ…ๆพ็คบใ€"""
    try:
        saved = json.loads(_taste_snapshot_path(contract, window).read_text(encoding="utf-8"))
        snapshot.version, snapshot.payload, snapshot.computed_at = (
            saved["version"], saved["payload"], saved["computed_at"])
    except (OSError, ValueError, KeyError, TypeError):
        pass


def _compute_taste_snapshot(contract: WebContract, window: str, version, snapshot: _TasteSnapshot) -> None:
    try:
        payload = q_taste(contract, {"window": window})
    except Exception as error:  # ๆฒกๆๆ—ง็ป“ๆๆ—ถ่ฏทๆฑ็บฟ็จๅๆ ทๆ็ป่ฐ็”จๆ–น๏ผๆๆ—ง็ป“ๆๆ—ถ้ stale ไธๅ‘
        with _TASTE_LOCK:
            snapshot.error, snapshot.failed_version, snapshot.failed_at = (
                error, version, time.monotonic())
        return
    computed_at = datetime.now(UTC).isoformat()
    with _TASTE_LOCK:
        snapshot.version, snapshot.payload, snapshot.computed_at = version, payload, computed_at
        snapshot.error, snapshot.failed_version = None, None
    if contract.taste_history_store.parent.is_dir():
        try:
            atomic_write_text(_taste_snapshot_path(contract, window), json.dumps(
                {"version": version, "computed_at": computed_at, "payload": payload},
                ensure_ascii=False, default=str), mode=0o600)
        except OSError:
            pass


def taste_snapshot(contract: WebContract, window: str, *, retry: bool = False) -> dict:
    """`/api/taste`๏ผ่พ“ๅ…ฅ็ๆฌๆฒกๅๅฐฑๅ็ฐๆ็็ๆฟ๏ผๅไบๅฐฑๅจๅๅฐ้็ฎ—ใ€

    ้็ฎ—ๅจ `TASTE_FRESH_WAIT` ๅ…ๅฎๆๅฐฑๅๆ–ฐ็ป“ๆ๏ผๆฒกๅฎๆๅ…ๅไธไธ€ไปฝ๏ผๅธฆไธ `stale` ไธ
    `computed_at`๏ผ้กต้ขๆฎๆญคๆ ๅบๆ•ฐๆฎๆ—ถ้—ดๅนถ็จๅๅ้—ฎใ€ไธ€ไปฝ้ฝๆฒกๆๆ—ถ็ญๅฐ็ฎ—ๅฎใ€ๅไธ€่ๅดๅๆ—ถ
    ๅชๆไธ€่ถๅจ็ฎ—ใ€

    ๅไธ€ไปฝ่พ“ๅ…ฅ็ฎ—ๅคฑ่ดฅๅ๏ผ`TASTE_RETRY_AFTER` ๅ…ไธๅ้็ฎ—๏ผๆๆ—ง็ป“ๆๆ—ถๅๆ—ง็ป“ๆๅนถๅธฆ `error`๏ผ
    ้กต้ขๆฎๆญคๅๆญข่ฝฎ่ฏขใ€็ปๅบ้่ฏ•ๅ…ฅๅฃ๏ผๆฒกๆๆ—ง็ป“ๆๆ—ถๆๅบ้ฃๆฌก็้”่ฏฏใ€`retry` ่ทณ่ฟ่ฟๆฎต็ญๅพ…ใ€
    """
    _taste_since(window)
    version = _taste_version(contract, window)
    key = (str(contract.db_path), str(contract.taste_history_store), window)
    with _TASTE_LOCK:
        snapshot = _TASTE_SNAPSHOTS.get(key)
        if snapshot is None:
            snapshot = _TASTE_SNAPSHOTS[key] = _TasteSnapshot()
            _load_taste_snapshot(contract, window, snapshot)
        if retry:
            snapshot.failed_version = None
        failed = (snapshot.failed_version == version
                  and time.monotonic() - snapshot.failed_at < TASTE_RETRY_AFTER)
        waiting = snapshot.version != version and not failed
        if waiting and not (snapshot.worker and snapshot.worker.is_alive()):
            snapshot.worker = threading.Thread(
                target=_compute_taste_snapshot, args=(contract, window, version, snapshot),
                name=f"peach-taste-{window}", daemon=True)
            snapshot.worker.start()
        worker, empty = snapshot.worker, snapshot.payload is None
    if waiting:
        worker.join(None if empty else TASTE_FRESH_WAIT)
    with _TASTE_LOCK:
        if snapshot.payload is None:
            raise snapshot.error or RuntimeError("ๅฃๅ‘ณๅๆๆชๅ–ๅพ—")
        stale = snapshot.version != version
        result = {**snapshot.payload, "computed_at": snapshot.computed_at, "stale": stale}
        if stale and snapshot.failed_version == version and snapshot.error is not None:
            result["error"] = str(snapshot.error) or type(snapshot.error).__name__
        return result


#: ๅฃๅ‘ณๆฆ้ไผๅบๅๅคดๅ็ไธคๆ’๏ผไปฅๅ้กต้ขไธ่ฏปๅพ—ๅฐๅฎไปฌ็้ฃๅ ไธชๆฆๅ•้”ฎใ€ๆ ็ญพๆฆๅ’็ฝ‘็ซๆฆ
#: ไธๅบ่ธ๏ผๅๅ้ฃๆ’ๅบ็ๆฏ็ซ็น favicon๏ผ้ฝไธๅจ่ฟ้ใ€
TASTE_FACE_RANKINGS = {
    "creator": ("creators", "browser_creators", "peach_creators"),
    "performer": ("performers", "browser_performers", "peach_performers"),
}


def _attach_taste_face_availability(contract: WebContract, rankings: dict) -> None:
    """็ปๅฃๅ‘ณๆฆ็ไบบๅ่กๆ ไธใ€ๅฎไฝ“ๅพๅ’ไปฃ่กจไฝๅคดๅๅ–ไธๅ–ๅพ—ๅฐใ€ใ€

    ๆฆ่กๅ’ๅซๅค็่บซไปฝๅผ•็”จๅฝข็ถไธไธ€ๆ ท๏ผ`entity_id` ไธ `representative_asset_id` ๆฏ่ก
    ่ชๅทฑ็ๅ—๏ผไธๆฏๅตๅจ `entity_ref` ้๏ผ๏ผไฝๅคๆฎๆฏๅไธ€ๅฏน๏ผ`has_entity_image()` ๅ 
    `has_avatar()`ใ€็ผบไบๆ ๅฟ—่ฟไธคๆ’ๅฐฑๅช่ฝๆ— ๆกไปถๅบๅพใ€็ญ 404 ๅๆๅพๆ‘ๆใ€

    ๅไธ€ไธช dict ไผๅๆ—ถๅบ็ฐๅจๅคไธชๆฆๅ•้๏ผ`peach_creators` ๆฏ `creators` ่ฟๆปคๅบๆฅ็
    ๅญ้๏ผไธๆฏๅฏๆฌ๏ผ๏ผๆ€ไปฅๆๅฏน่ฑก่บซไปฝๅป้ๅๆ ไธ€ๆฌกโ€”โ€”ๅฆๅไปฃ่กจไฝ้ฃๆฌกๆน้ๆฅ่ฏข่ฆๆๆฆๅ•
    ๆ•ฐ้้ๅค่ท‘ใ€
    """
    for kind, keys in TASTE_FACE_RANKINGS.items():
        rows = list({id(row): row for key in keys
                     for row in rankings.get(key) or ()}.values())
        if not rows:
            continue
        for row in rows:
            row["has_image"] = contract.has_entity_image(kind, row.get("entity_id"))
            row["image_version"] = contract.entity_image_version(kind, row.get("entity_id"))
            #: ๆฆไธ้ฃ้ข— 30 px ็ๅๅคดๅๅ’ๅซๅคๅไธ€ไปฝ sidecarใ€ๅไธ€ไธชๆข็ฎ—ใ€ๆก่ถๅฐ๏ผๅ ไฝ•
            #: ๅฑ…ไธญๅๆ่ธ็ไปฃไปท่ถๅคงโ€”โ€”่ฟไธ€ๆ ผ้คไบ่ธๆฒกๆๅซ็ไธ่ฅฟ่ฝ่ฎคไบบใ€
            row["avatar_focus"] = contract.avatar_focus(kind, row.get("entity_id"))
        attach_avatar_availability(contract, rows, key="representative_asset_id")


def q_taste(contract: WebContract, args=None):
    args = args or {}
    window = str(args.get("window") or "all")
    with contract.read_connection() as connection:
        payload = build_taste_dashboard(
            contract.taste_history_store,
            connection,
            since=_taste_since(window),
        )
    # ๅ–ๅพๅฏ็”จๆ€งๅจๅบ“่ฟๆฅไนๅค–ๅค๏ผๅฎ่ฏป็ๆฏๅคดๅ็ฎๅฝ•็็ดขๅผ•๏ผไธๆฏ่ดฆๆฌใ€
    _attach_taste_face_availability(contract, payload.get("rankings") or {})
    updated_at = None
    try:
        manifest = json.loads(contract.taste_history_manifest.read_text(encoding="utf-8"))
        updated_at = manifest.get("updated_at")
    except (OSError, ValueError, TypeError):
        pass
    export_count = export_bytes = 0
    try:
        for path in contract.taste_history_import_root.iterdir():
            if path.is_file() and not path.name.endswith(".part"):
                export_count += 1
                export_bytes += path.stat().st_size
    except OSError:
        pass
    payload.update({
        "window": window,
        "updated_at": updated_at,
        "storage": {"exports": export_count, "bytes": export_bytes},
        "browsers": browser_sources(contract.taste_history_store),
    })
    return payload


def w_taste_refresh(contract: WebContract, body, *, progress=None, checkpoint=None, resume_state=None):
    if body.get("background"):
        job = contract.taste_refresh_job
        def work(job_id):
            result = w_taste_refresh(contract, {**body, "background": False},
                progress=lambda **fields: job.update(job_id, **fields),
                checkpoint=lambda **fields: job.checkpoint(job_id, **fields), resume_state=job.snapshot())
            job.update(job_id, **result, status="complete", message="Completed with warnings" if result["warnings"] else "Refresh complete", completed_at=time.time())
        return job.start(work, restart=True, initial={
            "stage": "discovering", "message": "Scanning Peach profiles for browsing history"},
            recovery={'background': True, 'window': body.get('window') or 'all'})
    window = str(body.get("window") or "all")
    sources = enabled_history_sources(contract.taste_history_store)
    results = list((resume_state or {}).get('refresh_results') or [])
    completed = set((resume_state or {}).get('completed_profiles') or [])
    plans = (
            ('history', sources, refresh_history),
            ('bookmarks', enabled_bookmark_sources(contract.taste_history_store), refresh_bookmarks))
    profile_keys = (resume_state or {}).get('profile_keys')
    if profile_keys is None:
        profile_keys = [f'{kind}:{source.browser}:{source.profile}:{source.path}'
                        for kind, selected, _refresh in plans for source in selected]
        if checkpoint and not checkpoint(profile_keys=profile_keys):
            raise InterruptedError('ๅฃๅ‘ณ่ฏปๅ–ๅทฒๅๆญข')
    def profile_progress(**fields):
        if progress:
            progress(**{**fields, 'checked': len(completed), 'total': len(profile_keys)})
    for kind, selected, refresh in plans:
        for source in selected:
            key = f'{kind}:{source.browser}:{source.profile}:{source.path}'
            if key in completed or key not in profile_keys:
                continue
            rows = refresh([source], contract.taste_history_store, progress=profile_progress)
            results.extend(rows)
            if rows and all(row.get('status') != 'failed' for row in rows):
                completed.add(key)
            if checkpoint and not checkpoint(refresh_results=results.copy(), completed_profiles=sorted(completed),
                                              checked=len(completed), total=len(profile_keys)):
                raise InterruptedError('ๅฃๅ‘ณ่ฏปๅ–ๅทฒๅๆญข')
    if contract.taste_history_store.is_file():
        analysis = analyze_history(contract.taste_history_store, contract.taste_history_root, progress=progress)
        write_manifest(contract.taste_history_manifest, results, analysis)
    contract.cache_bust()
    if progress:
        progress(stage="dashboard", checked=0, total=None, message="Generating dashboard and insights")
    return {"refresh": results, "warnings": [f"{row['browser']} - {row['profile']} - {row['error']}"
            for row in results if row.get("status") == "failed"], "dashboard": q_taste(contract, {"window": window})}


def w_taste_source(contract: WebContract, body):
    if body.get("operation") in ("add", "disable", "enable", "delete_browser"):
        configure_browser(contract.taste_history_store, body["operation"], body)
        if body["operation"] == "delete_browser":
            analysis = analyze_history(contract.taste_history_store, contract.taste_history_root)
            write_manifest(contract.taste_history_manifest, [], analysis)
        contract.cache_bust()
        return {"dashboard": q_taste(contract, {"window": str(body.get("window") or "all")})}
    if body.get("operation") != "remove":
        raise ValueError("invalid taste source operation")
    source_key = str(body.get("source_key") or "")
    if not re.fullmatch(r"[0-9a-f]{64}", source_key):
        raise ValueError("invalid taste source key")
    removed = remove_history_source(contract.taste_history_store, source_key)
    analysis = analyze_history(contract.taste_history_store, contract.taste_history_root)
    write_manifest(contract.taste_history_manifest, [{"removed": removed}], analysis)
    contract.cache_bust()
    return {
        "removed": removed,
        "dashboard": q_taste(contract, {"window": str(body.get("window") or "all")}),
    }


def w_search_history(contract: WebContract, body):
    operation = body.get("operation", "remember")
    query = str(body.get("query", "")).strip()
    if operation == "remove":
        if not query:
            raise ValueError("query is required")
        with contract.write_transaction() as connection:
            connection.execute("DELETE FROM search_history WHERE query=?", (query,))
        return {"ok": True, "operation": operation}
    if operation != "remember" or not query or len(query) > 200:
        raise ValueError("invalid search history request")
    with contract.write_transaction() as connection:
        connection.execute(
            "INSERT INTO search_history(query,used_count,last_used_at) VALUES(?,1,datetime('now')) "
            "ON CONFLICT(query) DO UPDATE SET used_count=used_count+1,last_used_at=excluded.last_used_at",
            (query,),
        )
    return {"ok": True, "operation": operation}

_STORAGE_LABELS = {
    "system": "System",
    "local": "Local",
    "115": "115 Cloud",
    "pikpak": "PikPak Cloud",
}


def _storage_volumes() -> list[dict[str, object]]:
    """่ฟ”ๅๅฝ“ๅไธปๆบๅฏ้ช่ฏ็็ณป็ปๅทใ€่ตๆบ็ๅ’็ฝ‘็ๅฎน้ใ€"""
    declarations = [("system", _STORAGE_LABELS["system"], system_volume(), True)] + [
        # ไธ€ไธชๆฅๆบๆๅ ไธชๆ นๅฐฑๅ ่ก๏ผๅๅๆฅๆบ็”จๅบๅทๅบๅ๏ผๅ•ๆ นไธๅ ใ€
        (location,
         _STORAGE_LABELS.get(location, location) + (f" {index + 1}" if len(roots) > 1 else ""),
         translate_ledger_path(root), False)
        for location, roots in LOCATION_ROOT_DECLARATIONS.items()
        for index, root in enumerate(roots)
    ]
    volumes: list[dict[str, object]] = []
    for kind, label, root, is_system in declarations:
        mounted = not is_unmapped(root) and (is_system or root_online(root))
        row: dict[str, object] = {
            "kind": kind,
            "label": label,
            "root": str(root) if not is_unmapped(root) else None,
            "online": mounted,
            "free": None,
            "used": None,
            "total": None,
        }
        if mounted:
            try:
                usage = shutil.disk_usage(root)
                row.update(
                    free=usage.free,
                    used=max(usage.total - usage.free, 0),
                    total=usage.total,
                )
            except OSError:
                pass
        volumes.append(row)
    return volumes


#: ๅบ“ๅญไธ€่ๅชๆ•ฐ็ไธ่ฟๅจ็๏ผๆ ใ€ๅทฒๆถๅคฑใ€็่ก็•็€ๅชไธบไธชไบบ่ฎฐๅฝ•๏ผADR-0087๏ผ๏ผไธ็ฎ—ๅบ“ๅญใ€
#: ๅๆ”ถ็ซ้็็…งๆ—ง็ฎ—่ฟๆฅใ€ๆ’ญๆ”พไธๆถ่ดนไธ€่ๆฏไธชไบบ่ฎฐๅฝ•ๆฌ่บซ๏ผไธๅฅ—่ฟไธ€ๆกใ€
PRESENT = "COALESCE(disposal,'')<>'vanished' AND NOT peach_is_local_extra(name,path)"
PRESENT_A = "COALESCE(a.disposal,'')<>'vanished' AND NOT peach_is_local_extra(a.name,a.path)"


#: ่ง้ข‘็ๆ—ถ้•ฟไธ็”ป่ดจๅๆกฃ๏ผ้กบๅบๅ `media_probe.context_fields` ็ๅคๆฎ๏ผ็”ฑ็ญๅฐ้•ฟใ€็”ฑ้ซๅฐไฝใ€
LENGTH_BANDS = ("้€้ฃ", "็ญ", "ไธญ", "้•ฟ")
QUALITY_BANDS = ("4K", "2K", "1080P", "720P", "ไฝ็”ป่ดจ")


def _bands(c, column: str, order: tuple[str, ...]) -> list[dict[str, object]]:
    """ไธ€ๅ—ๅๆกฃ็่ง้ข‘ๆ•ฐใ€ๅคๆฎ้็ๆกฃไฝๆ้กบๅบๅ…จๅ—ๅบๆฅ๏ผๆฒกๆ่ง้ข‘็่ฏป 0๏ผ่ดฆๆฌ้ๅคๅบ็ๆกฃๆ’ๅจๅ้ขใ€"""
    counts = {row[0]: row[1] for row in c.execute(
        f"SELECT {column},count(*) FROM asset WHERE medium='video' AND {column} IS NOT NULL "
        f"AND {PRESENT} GROUP BY {column}")}
    extra = sorted(key for key in counts if key not in order)
    return [{"k": key, "n": counts.get(key, 0)} for key in (*order, *extra)]


#: ๅจ็บฟ่ฟฝๆด็ไธ€ๆกๆ’ญๆ”พไธ็ฎ—่ฟๆฅ็ๆกไปถ๏ผๅฎๅ…ณ่”็้ฆ่—่ง้ข‘่ชๅทฑๅทฒ็ปๆ่ฟไธ€้กนใ€ๅ’ `online_played`
#: ๅไธ€ไธชๅป้๏ผไธ€ไธชไฝๅ“ๅจไธค่พน้ฝๆ’ญ่ฟๅช็ฎ—ไธ€ๆฌกใ€
_ONLINE_ONLY = ("(fi.asset_id IS NULL OR NOT EXISTS(SELECT 1 FROM asset a "
                "WHERE a.id=fi.asset_id AND {}))")


def _play_activity(c, has_follow: bool) -> dict[str, object]:
    """ๆฏไธชไฝๅ“ๆ€่ฟ‘ไธ€ๆฌกๆ’ญๆ”พ่ฝๅจๅ“ชไธ€ๅคฉใ€ๆๆๅ ็ๅ“ชไธช้’็น๏ผๆๆฌๆบๆ—ถๅบ็ฎ—ใ€

    ๅฝข็ถๅๅฃๅ‘ณ้กต็ `activity`๏ผ`days`ใ€`hours`ใ€`timezone`๏ผ๏ผๅ็ซฏไธคๅคๅ…ฑ็”จไธ€ๅผ ็ญๅๅกใ€
    ่ดฆๆฌๆฏไธชไฝๅ“ๅช่ฎฐๆ€่ฟ‘ไธ€ๆฌกๆ’ญๆ”พ็ๆ—ถ้—ด๏ผๆ€ไปฅไธ€ไธชไฝๅ“ๅชๅ ไธ€ๆ ผใ€"""
    stamps = [row[0] for row in c.execute(
        "SELECT CAST(last_played AS REAL) FROM asset WHERE last_played IS NOT NULL")]
    if has_follow:
        stamps += [row[0] for row in c.execute(
            "SELECT CAST(fp.last_played AS REAL) FROM follow_playback fp "
            "JOIN follow_item fi ON fi.id=fp.follow_item_id WHERE fp.last_played IS NOT NULL AND "
            + _ONLINE_ONLY.format("a.last_played IS NOT NULL"))]
    days: dict[str, int] = {}
    hours: dict[tuple[int, int], int] = {}
    for stamp in stamps:
        if not stamp or stamp <= 0:
            continue
        try:
            moment = datetime.fromtimestamp(stamp).astimezone()
        except (OverflowError, OSError, ValueError):
            continue
        day = moment.date().isoformat()
        days[day] = days.get(day, 0) + 1
        slot = (moment.weekday(), moment.hour)
        hours[slot] = hours.get(slot, 0) + 1
    return {
        "timezone": utc_offset_label(datetime.now().astimezone()),
        "days": [{"date": day, "count": count} for day, count in sorted(days.items())],
        "hours": [{"weekday": weekday, "hour": hour, "count": count}
                  for (weekday, hour), count in sorted(hours.items())],
    }


def _replays(c, has_follow: bool) -> list[dict[str, int]]:
    """ๆ’ญๆ”พๆฌกๆ•ฐ็ๅๅธ๏ผๆ’ญ่ฟ k ๆฌก็ไฝๅ“ๆๅ ไธชใ€ๅ่ฎกไธ `consumption.played` ็ธๅใ€"""
    counts: dict[int, int] = {}
    rows = list(c.execute("SELECT play_count,count(*) FROM asset WHERE play_count>0 GROUP BY play_count"))
    if has_follow:
        rows += c.execute(
            "SELECT fp.play_count,count(*) FROM follow_playback fp JOIN follow_item fi "
            "ON fi.id=fp.follow_item_id WHERE fp.play_count>0 AND "
            + _ONLINE_ONLY.format("a.play_count>0") + " GROUP BY fp.play_count").fetchall()
    for plays, n in rows:
        counts[int(plays)] = counts.get(int(plays), 0) + n
    return [{"k": plays, "n": n} for plays, n in sorted(counts.items())]


#: ็ป่ฎก้กต่ดฆๆฌ้ฃไธ€ๆฎต่ฏปๅฐ็่กจใ€`tag_not_hidden` ่ฏปๆ ็ญพๅๅฅฝไธๆ ็ญพๅฎไฝ“็ๅซๅ๏ผ
#: `tag_is_not_a_performer_name` ่ฏปๅฎไฝ“๏ผๅจ็บฟๆ’ญๆ”พ่ฏปๅ…ณๆณจไธๅผ ่กจใ€
STATS_TABLES = ("asset", "asset_entity", "entity", "entity_alias", "asset_tag", "asset_tag_preference",
                "asset_preference", "follow_playback", "follow_item", "follow_source")


def q_stats(contract: WebContract):
    """็ป่ฎก้กต๏ผๅบ“ๅญ / ๅฝ’ๅฑ / ๆ ็ญพ / ๆฌๅฐไธๅจ็บฟๆ’ญๆ”พ / ๅๅญๅจๅทใ€

    ่ดฆๆฌ้ฃไธ€ๆฎตไธๅๅคๆก่ๅ SQL ๅ่ฎกไธ€็ง’ๅค๏ผๆ `STATS_TABLES` ็็ๆฌ็ผ“ๅญ๏ผๅช’ไฝ“ๅบ“ๅ’ๅๅ–่ช่ฎพ็ฝฎ๏ผ
    ็ญๅๅพๆๆฌๆบๆ—ถๅบๅๆกถ๏ผไธคๆ ทไฝไธบ่พ“ๅ…ฅ่ฟ็ๆฌใ€ๅญๅจๅท่ฏป็ๆฏ็ฃ็ไฝ้๏ผไธ่ดฆๆฌๆ— ๅ…ณ๏ผๆๆ—ถ้—ด่ฟๆใ€
    """
    config = settings_file.active()
    libraries = [(library, media_libraries.predicate(config, library["id"]))
                 for library in media_libraries.libraries(config)]
    out = dict(contract.cached_until_changed(
        "stats-ledger", lambda: _ledger_stats(contract, libraries),
        repr(libraries), utc_offset_label(datetime.now().astimezone()), tables=STATS_TABLES))
    # ๅคๅฎๅจ็บฟ่ฆ่ฏปไธ€ๆฌกๅๆ่ฝฝๆ น็้ฆ–ๆก็ฎๅฝ•้กน๏ผ็ฝ‘็ๆ่ฝฝไธไธไพฟๅฎ๏ผๆฒฟ็”จ TTL ็ผ“ๅญใ€
    out.update(contract.cached("stats-storage", _storage_stats))
    return out


def _ledger_stats(contract: WebContract, libraries) -> dict:
    with contract.read_connection() as c:
        out = {}
        out["by_loc"] = [dict(r) for r in c.execute(
            "SELECT location k, count(*) n, COALESCE(sum(size),0) bytes, "
            "SUM(CASE WHEN medium='video' THEN 1 ELSE 0 END) videos "
            f"FROM asset WHERE {PRESENT} GROUP BY location ORDER BY bytes DESC")]
        out["by_medium"] = [dict(r) for r in c.execute(
            "SELECT medium k, count(*) n, COALESCE(sum(size),0) bytes "
            f"FROM asset WHERE {PRESENT} GROUP BY medium ORDER BY bytes DESC")]
        out["by_length"] = _bands(c, "ctx_length", LENGTH_BANDS)
        out["by_quality"] = _bands(c, "ctx_quality", QUALITY_BANDS)
        out["by_library"] = []
        for library, (clause, params) in libraries:
            counts = c.execute(
                "SELECT count(*) videos,COALESCE(sum(a.size),0) bytes FROM asset a "
                f"WHERE a.medium='video' AND {PRESENT_A} AND " + clause, params,
            ).fetchone()
            out["by_library"].append({"k": library["id"], "name": library["name"],
                                      "icon": library["icon"], **dict(counts)})
        v = c.execute(f"SELECT count(*) FROM asset WHERE medium='video' AND {PRESENT}").fetchone()[0]
        def one(sql, *a):
            r = c.execute(sql, a).fetchone()
            return r[0] if r else 0
        out["attribution"] = {
            "videos": v,
            "creator": one("SELECT count(DISTINCT ae.asset_id) FROM asset_entity ae "
                           "JOIN entity e ON e.id=ae.entity_id JOIN asset a ON a.id=ae.asset_id "
                           f"WHERE a.medium='video' AND {PRESENT_A} AND e.kind='creator'"),
            "code": one(f"SELECT count(*) FROM asset WHERE medium='video' AND {PRESENT} "
                        "AND code IS NOT NULL AND code<>''"),
            "studio": one("SELECT count(DISTINCT ae.asset_id) FROM asset_entity ae "
                          "JOIN entity e ON e.id=ae.entity_id JOIN asset a ON a.id=ae.asset_id "
                          f"WHERE a.medium='video' AND {PRESENT_A} AND e.kind='studio'"),
            "thumb": one(f"SELECT count(*) FROM asset WHERE medium='video' AND {PRESENT} "
                         "AND snapshot_path IS NOT NULL"),
            "duration": one(f"SELECT count(*) FROM asset WHERE medium='video' AND {PRESENT} "
                            "AND duration IS NOT NULL"),
        }
        out["tag_source"] = [dict(r) for r in c.execute(
            "SELECT source k, count(*) n, count(DISTINCT asset_id) assets "
            "FROM asset_tag GROUP BY source ORDER BY n DESC")]
        out["tag_cov"] = one("SELECT count(DISTINCT asset_id) FROM asset_tag "
                             f"WHERE asset_id IN (SELECT id FROM asset WHERE {PRESENT}) "
                             "AND source IN ('name','r18','vision','vision-creator',"
                             "'vision_creator','vision_creator_review')")
        out["top_tags"] = [dict(r, cat=tag_cat(r["k"])) for r in c.execute(
            "SELECT t.tag k, count(*) n FROM asset_tag t JOIN asset a ON a.id=t.asset_id "
            f"WHERE a.medium='video' AND {PRESENT_A} AND t.source IN ('name','r18','vision','vision-creator',"
            "'vision_creator','vision_creator_review') "
            "AND " + tag_is_not_a_performer_name("peach_normalize(t.tag)") + " "
            "AND " + tag_not_hidden('t.asset_id', 'peach_normalize(t.tag)') + ' ' +
            "GROUP BY t.tag ORDER BY n DESC LIMIT 30")]
        tables = {row[0] for row in c.execute(
            "SELECT name FROM sqlite_schema WHERE type='table'"
        )}
        library_played = one("SELECT count(*) FROM asset WHERE play_count>0")
        library_seconds = one("SELECT COALESCE(sum(play_seconds),0) FROM asset")
        online_played = 0
        online_seconds = 0
        has_follow = "follow_playback" in tables
        if has_follow:
            online_played = one(
                "SELECT count(*) FROM follow_playback fp JOIN follow_item fi "
                "ON fi.id=fp.follow_item_id WHERE fp.play_count>0 AND "
                + _ONLINE_ONLY.format("a.play_count>0")
            )
            online_seconds = one(
                "SELECT COALESCE(sum(play_seconds),0) FROM follow_playback"
            )
        out["consumption"] = {
            "played": library_played + online_played,
            "library_played": library_played,
            "online_played": online_played,
            "play_seconds": library_seconds + online_seconds,
            "library_play_seconds": library_seconds,
            "online_play_seconds": online_seconds,
            "o_total": one("SELECT COALESCE(sum(o_count),0) FROM asset"),
            "liked": one("SELECT count(*) FROM asset_preference WHERE profile_id=? AND liked=1",
                         DEFAULT_PROFILE_ID) if "asset_preference" in tables else 0,
            "dislike": one("SELECT count(*) FROM asset WHERE feedback='dislike'"),
            "seen": one("SELECT count(*) FROM asset WHERE feedback='seen'"),
            "trash": one("SELECT count(*) FROM asset WHERE disposal='trash'"),
            "skimmed": one("SELECT count(*) FROM asset WHERE duration>0 AND play_seconds>0 "
                           "AND max_reached>0.6 AND play_seconds/duration < max_reached-0.25"),
        }
        recent = [dict(r, kind="library") for r in c.execute(
            "SELECT id,name,creator,play_seconds,duration,max_reached,leave_ratio,o_count,"
            "CAST(last_played AS REAL) last_played FROM asset WHERE last_played IS NOT NULL "
            "ORDER BY CAST(last_played AS REAL) DESC LIMIT 12")]
        if "follow_playback" in tables:
            recent.extend(dict(r, kind="online", leave_ratio=None, o_count=0) for r in c.execute(
                "SELECT fi.id,fi.title name,fs.label creator,fp.play_seconds,fi.duration,"
                "fp.max_reached,fp.last_played FROM follow_playback fp "
                "JOIN follow_item fi ON fi.id=fp.follow_item_id "
                "JOIN follow_source fs ON fs.id=fi.source_id WHERE fp.last_played IS NOT NULL "
                "ORDER BY fp.last_played DESC LIMIT 12"
            ))
        out["recent"] = sorted(
            recent, key=lambda row: float(row.get("last_played") or 0), reverse=True,
        )[:12]
        out["play_activity"] = _play_activity(c, has_follow)
        out["replays"] = _replays(c, has_follow)
    return out


def _storage_stats() -> dict:
    out = {"storage_volumes": _storage_volumes()}
    measured = [row for row in out["storage_volumes"] if row["total"] is not None]
    out["storage_summary"] = {
        "volumes": len(out["storage_volumes"]),
        "online": sum(1 for row in out["storage_volumes"] if row["online"]),
        "measured": len(measured),
        "free": sum(int(row["free"]) for row in measured),
        "used": sum(int(row["used"]) for row in measured),
        "total": sum(int(row["total"]) for row in measured),
    }
    system = next((row for row in out["storage_volumes"] if row["kind"] == "system"), None)
    out["system_disk"] = (
        {"root": system["root"], "free": system["free"], "total": system["total"]}
        if system and system["total"] is not None else None
    )
    out["disk_c"] = out["system_disk"]  # 0.6.x ๅฎขๆท็ซฏๅ…ผๅฎนๅซๅ
    return out


def q_quality_goals(contract: WebContract, args):
    """List explicit better-version targets for the management surface."""
    limit = min(max(int(args.get("limit", "60")), 1), 200)
    offset = max(int(args.get("offset", "0")), 0)
    with contract.read_connection() as connection:
        total = connection.execute(
            "SELECT count(*) FROM asset_quality_goal WHERE profile_id=? AND wanted=1",
            (DEFAULT_PROFILE_ID,),
        ).fetchone()[0]
        rows = [dict(row) for row in connection.execute(
            "SELECT a.id,a.name,a.code,a.location,a.path,a.size,a.duration,a.snapshot_path,"
            "g.reason,g.updated_at FROM asset_quality_goal g "
            "JOIN asset a ON a.id=g.asset_id "
            "WHERE g.profile_id=? AND g.wanted=1 "
            "ORDER BY g.updated_at DESC,a.id DESC LIMIT ? OFFSET ?",
            (DEFAULT_PROFILE_ID, limit, offset),
        )]
    for row in rows:
        row["cost"] = cost_for(row['location'], row.pop('path', None))
        row["has_thumb"] = contract.has_snapshot(row["snapshot_path"])
        row["has_cover"] = contract.has_cover(row.get("code"))
        row["cover_version"] = contract.cover_version(row.get("code"))
        row.pop("snapshot_path", None)
    return {"total": total, "items": rows, "offset": offset,
            "has_more": offset + len(rows) < total}
