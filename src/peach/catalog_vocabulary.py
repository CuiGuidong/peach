"""账本与复核产物里的约定取值（ADR-0159 第四条：内容数据）。

这里的中文是数据本身，不是界面文字：写进账本的标签前缀与取值、候选 CSV 的结论取值、写进
`review_decision.note` 的用户决定备注。改写法等于改数据格式，旧行就对不上了；界面上要翻译的地方
在前端按取值映射，或由读出方另给 code，不改这里。
"""
from __future__ import annotations

#: `asset_tag` 里出演者标记的前缀：`演员:<名字>` 是出演者投影，不是内容标签。
PERFORMER_TAG_PREFIX = "演员:"

#: `asset.ctx_orient` 的竖屏与横屏取值，由 `media_probe.context_fields` 写入。
PORTRAIT = "竖屏"
LANDSCAPE = "横屏"

#: 版次 id（`catalog_rules.jav_edition_badges` 给出），界面按 `labels.catalogEdition.<id>` 显示。
#: 没有任何版次证据的正片按有码算。
CENSORED = "censored"
CHINESE_SUBTITLES = "chinese-subtitles"
UNCENSORED = "uncensored"
UNCENSORED_LEAK = "uncensored-leak"
UNCENSORED_CRACK = "uncensored-crack"
#: 版次的展示次序：正片在前，处理过的在后。这不是偏好排序，只是要一个稳定的锚点——卡片标题取
#: 第一个，次序一变卡片就换名字。
EDITION_ORDER = (CENSORED, CHINESE_SUBTITLES, UNCENSORED, UNCENSORED_LEAK, UNCENSORED_CRACK)

#: 版次的显示名 code 前缀，后接上面的 id。
EDITION_LABEL_CODE_PREFIX = "labels.catalogEdition."

#: FC2 合集的卷 id（`catalog_rules.fc2_collection_label`）：本篇是 `main`，特典是 `bonus-<n>`，数字卷是数字本身。
FC2_MAIN_PART = "main"
FC2_BONUS_PREFIX = "bonus-"

#: 文件名里的后期处理标记，按子串认，认到的原样当版本说明。
PROCESSING_MARKERS = ("修复", "美颜")

#: 想要清单资源（`cache/want-resources.json` 与 `/api/jav/resources`）的取值：评论区链接的 `source`，
#: 以及 `attributes` 里的中字、高清标记。界面按 `source_code` 与属性 id 显示。中字与版次 id 同一个。
RESOURCE_COMMENT_SOURCE = "javdb-comments"
RESOURCE_CHINESE_SUBTITLES = CHINESE_SUBTITLES
RESOURCE_HD = "high-definition"

#: 西方身份候选 CSV（`babepedia-candidates.csv`）`verdict` 列的取值：命中、命中但要人看、站上确认没有档案、
#: 被限流没查成。由 `scripts/match_babepedia_creators.py` 写，复核页与两个取图脚本读。
WESTERN_IDENTITY_MATCHED = "matched"
WESTERN_IDENTITY_NEEDS_REVIEW = "needs-review"
WESTERN_IDENTITY_NO_PROFILE = "no-profile"
WESTERN_IDENTITY_RATE_LIMITED = "rate-limited"
#: 其中要人看的两种取值。
WESTERN_IDENTITY_REVIEW_VERDICTS = (WESTERN_IDENTITY_MATCHED, WESTERN_IDENTITY_NEEDS_REVIEW)
#: 旧版候选 CSV 写的中文取值，读入时先按它归一。
LEGACY_WESTERN_IDENTITY_VERDICTS = {
    "命中": WESTERN_IDENTITY_MATCHED, "需人工确认": WESTERN_IDENTITY_NEEDS_REVIEW,
    "确认无档案": WESTERN_IDENTITY_NO_PROFILE, "未取得:限流": WESTERN_IDENTITY_RATE_LIMITED,
}
#: 封面来源候选 CSV（批量封面日志）`result` 里「已取得」的取值，读入时先经 `fetch_result` 归一。
COVER_FETCHED = "found"

#: 写进 `review_decision.note` 的用户决定备注：垃圾队列里点「不是垃圾」、重复组里点「都保留」。
NOT_JUNK_NOTE = "用户确认不是垃圾"
KEEP_DUPLICATES_NOTE = "用户确认这组都保留"

#: 视频的时长与画质分档，顺序同 `media_probe.context_fields` 的判据：由短到长、由高到低。档名是账本
#: `ctx_length`、`ctx_quality` 的取值；时长档的显示名由前端按取值给。
LENGTH_BANDS = ("速食", "短", "中", "长")
QUALITY_BANDS = ("4K", "2K", "1080P", "720P", "低画质")

#: 素人发行的内容标签名（`asset_tag.tag` 与标签实体的规范名）。
AMATEUR_TAG = "素人"


# ── 旧版文件取值（ADR-0161）──────────────────────────────────────────────
#: 批量封面日志与 FC2 候选日志 `result` 列的英文 id。旧文件里写的是中文，读入时用 `fetch_result` 换成 id。
FETCH_FOUND, FETCH_MISSED = COVER_FETCHED, "missed"
_LEGACY_FETCH_RESULTS = {"取得": FETCH_FOUND, "未取得": FETCH_MISSED}


def fetch_result(value: object) -> str:
    """日志 `result` 列的取值：旧中文值换成英文 id，其余原样。"""
    text = str(value or "")
    return _LEGACY_FETCH_RESULTS.get(text, text)


#: 想要清单资源缓存里旧版写的中文取值。读缓存时经 `resource_item` 换成 id。
_LEGACY_RESOURCE_SOURCES = {"JavDB 评论": RESOURCE_COMMENT_SOURCE}
_LEGACY_RESOURCE_ATTRIBUTES = {"中字": RESOURCE_CHINESE_SUBTITLES, "高清": RESOURCE_HD}


def _legacy_resource_value(table: dict[str, str], value: object) -> object:
    return table.get(value, value) if isinstance(value, str) else value


def resource_item(item: dict) -> dict:
    """资源缓存里的一条：旧版的来源与属性中文值换成 id，其余原样。"""
    attributes = item.get("attributes")
    source = _legacy_resource_value(_LEGACY_RESOURCE_SOURCES, item.get("source"))
    if isinstance(attributes, list):
        attributes = list(dict.fromkeys(
            _legacy_resource_value(_LEGACY_RESOURCE_ATTRIBUTES, value) for value in attributes))
    if source == item.get("source") and attributes == item.get("attributes"):
        return item
    return {**item, "source": source, "attributes": attributes}
