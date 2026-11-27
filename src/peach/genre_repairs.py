"""用来源原词修正已自动入库的 JAV 标签。"""

import json
from pathlib import Path

from .entities import normalize_entity_name, upsert_asset_entity
from .genre_decisions import load_genre_decisions
from .genre_taxonomy import PREVIOUS_SOURCE_TAG_BY_GENRE, REPAIRED_SOURCE_TAGS, normalise_genre, resolve_genre


def snapshot_genres(path: str) -> list | None:
    try:
        snapshot = json.loads(Path(path).read_text(encoding="utf-8"))
    except (ValueError, OSError):
        return None
    if not isinstance(snapshot, dict):
        return None
    payload = snapshot.get("result")
    genres = (payload if isinstance(payload, dict) else snapshot).get("genres")
    return genres if isinstance(genres, list) else None


def find_source_tag_updates(connection) -> list[dict]:
    """只采用自动投影中有原始快照、能复原旧结果的标签。"""
    decisions = load_genre_decisions(connection)
    tag_rows = {}
    for asset_id, tag, score, source in connection.execute(
        "SELECT asset_id,tag,confidence,source FROM asset_tag WHERE tag IN "
        f"({','.join('?' * len(REPAIRED_SOURCE_TAGS))})",
        REPAIRED_SOURCE_TAGS,
    ):
        tag_rows.setdefault(asset_id, {})[tag] = (source, score)
    hidden = {tuple(row) for row in connection.execute(
        "SELECT asset_id,normalized_tag FROM asset_tag_preference WHERE hidden=1")}
    snapshots = {}
    groups = {}
    for asset_id, source, score, metadata_json, tag in connection.execute(
        "SELECT ae.asset_id,ae.source,ae.confidence,ae.metadata_json,e.canonical_name FROM asset_entity ae "
        "JOIN entity e ON e.id=ae.entity_id "
        "LEFT JOIN review_decision rd ON rd.category='metadata_fields' "
        "AND rd.item_key=json_extract(ae.metadata_json,'$.review_item') "
        "WHERE ae.role='tag' AND json_extract(ae.metadata_json,'$.raw_snapshot')<>'' "
        "AND COALESCE(json_extract(ae.metadata_json,'$.source_tags_original'),0)=0 "
        "AND (ae.source LIKE 'auto:metadata-tags@%' OR (ae.source LIKE 'javinizer:%:tag' "
        "AND rd.status='approved' AND CASE WHEN json_valid(rd.note) "
        "THEN json_extract(rd.note,'$.auto_applied')=1 END)) "
        "ORDER BY ae.asset_id,ae.source,ae.metadata_json,e.canonical_name"
    ):
        groups.setdefault((asset_id, source, metadata_json), (score, set()))[1].add(tag)
    updates = []
    for (asset_id, source, metadata_json), (score, projected_tags) in groups.items():
        metadata = json.loads(metadata_json)
        path = metadata["raw_snapshot"]
        if path not in snapshots:
            snapshots[path] = snapshot_genres(path) or []
        genres = snapshots[path]
        old_tags, current_tags, hidden_replacements = set(), set(), set()
        for raw in genres:
            current = resolve_genre(raw, decisions)
            key = normalise_genre(raw)
            previous = current
            if key in PREVIOUS_SOURCE_TAG_BY_GENRE and current == resolve_genre(raw):
                previous = PREVIOUS_SOURCE_TAG_BY_GENRE[key]
            if previous and (asset_id, normalize_entity_name(previous)) in hidden:
                hidden_replacements.add(current)
            current_tags.add(current)
            old_tags.add(previous)
        rows = tag_rows.get(asset_id, {})
        remove = {tag for tag in (old_tags - current_tags) & projected_tags
                  if tag in rows and rows[tag][0] == source}
        add = {
            tag for tag in current_tags - old_tags - hidden_replacements if tag and tag not in rows
            and (asset_id, normalize_entity_name(tag)) not in hidden
        }
        if add or remove:
            updates.append({"asset_id": asset_id, "source": source, "confidence": score,
                            "metadata": metadata, "remove": {tag: rows[tag][1] for tag in sorted(remove)},
                            "add": sorted(add)})
    return updates


def apply_source_tag_updates(connection, updates: list[dict], now: str) -> dict:
    changes = []
    for row in updates:
        asset_id, source = row["asset_id"], row["source"]
        for tag in row["add"]:
            inserted = connection.execute(
                "INSERT OR IGNORE INTO asset_tag(asset_id,tag,confidence,source) VALUES(?,?,?,?)",
                (asset_id, tag, row["confidence"], source),
            ).rowcount
            if inserted:
                upsert_asset_entity(connection, kind="tag", name=tag, asset_id=asset_id, role="tag",
                                    source=source, confidence=row["confidence"], metadata=row["metadata"],
                                    now=now, update_entity_metadata=False)
                changes.append({"asset_id": asset_id, "source": source, "added": tag})
        for tag, score in row["remove"].items():
            removed = connection.execute("DELETE FROM asset_tag WHERE asset_id=? AND tag=? AND source=?",
                                         (asset_id, tag, source)).rowcount
            if removed:
                connection.execute(
                    "DELETE FROM asset_entity WHERE asset_id=? AND role='tag' AND source=? AND entity_id IN "
                    "(SELECT id FROM entity WHERE kind='tag' AND normalized_name=?)",
                    (asset_id, source, normalize_entity_name(tag)),
                )
                changes.append({"asset_id": asset_id, "source": source, "removed": tag, "confidence": score})
    return {"changed": len(changes), "source_tags": changes}
