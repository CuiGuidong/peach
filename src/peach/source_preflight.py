"""安装后的资料源检查；不扫描影片，不改变来源配置。"""
from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import time

from .scraping_access import SOURCES
from .source_checks import check_source


def check_sources(secrets_root: Path, sources: list[str] | None = None) -> dict:
    selected = list(dict.fromkeys(sources if sources is not None else
                                  (source for source in SOURCES if source != "instagram")))
    if not selected or any(source not in SOURCES for source in selected):
        raise ValueError("请选择已登记的资料源 ID")

    def check(source):
        result = check_source(secrets_root, source, preflight=True)
        return {"source": source, "label": SOURCES[source]["label"],
                "results": result["results"], "session_verified": False}

    started = time.monotonic()
    with ThreadPoolExecutor(max_workers=4, thread_name_prefix="source-check") as pool:
        results = list(pool.map(check, selected))
    return {"ok": all(target["ok"] or target.get("reason") == "needs_code"
                      for source in results for target in source["results"]),
            "sources": results, "elapsed_s": round(time.monotonic() - started, 2)}
