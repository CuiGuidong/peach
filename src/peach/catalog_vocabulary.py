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

#: 版次标签的取值（`catalog_rules.jav_edition_badges` 给出）。没有任何版次证据的正片按有码算。
CENSORED = "有码"
CHINESE_SUBTITLES = "中字"
UNCENSORED = "无码"
UNCENSORED_LEAK = "无码流出"
UNCENSORED_CRACK = "无码破解"
#: 版次的展示次序：正片在前，处理过的在后。这不是偏好排序，只是要一个稳定的锚点——卡片标题取
#: 第一个，次序一变卡片就换名字。
EDITION_ORDER = (CENSORED, CHINESE_SUBTITLES, UNCENSORED, UNCENSORED_LEAK, UNCENSORED_CRACK)

#: FC2 合集里特典那一卷的卷标前缀（`catalog_rules.fc2_collection_label` 写作 `特典 <n>`）。
FC2_BONUS_PREFIX = "特典 "

#: 文件名里的后期处理标记，按子串认，认到的原样当版本说明。
PROCESSING_MARKERS = ("修复", "美颜")

#: 西方身份候选 CSV 的 `verdict` 里要人看的两种取值。
WESTERN_IDENTITY_REVIEW_VERDICTS = ("命中", "需人工确认")
#: 封面来源候选 CSV 的 `result` 里「已取得」的取值。
COVER_FETCHED = "取得"

#: 写进 `review_decision.note` 的用户决定备注：垃圾队列里点「不是垃圾」、重复组里点「都保留」。
NOT_JUNK_NOTE = "用户确认不是垃圾"
KEEP_DUPLICATES_NOTE = "用户确认这组都保留"

#: 视频的时长与画质分档，顺序同 `media_probe.context_fields` 的判据：由短到长、由高到低。档名是账本
#: `ctx_length`、`ctx_quality` 的取值；时长档的显示名由前端按取值给。
LENGTH_BANDS = ("速食", "短", "中", "长")
QUALITY_BANDS = ("4K", "2K", "1080P", "720P", "低画质")

#: 素人发行的内容标签名（`asset_tag.tag` 与标签实体的规范名）。
AMATEUR_TAG = "素人"
