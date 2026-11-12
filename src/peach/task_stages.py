"""后台任务的阶段名（ADR-0156 第三条）：中文原文与 code 的唯一来源。

各域的状态字典里 `stage` 照旧存中文，旁边的 `stage_code` 存 `<域>.<名>`。界面按 `server:stage.<code>`
取译文，任务中心的进度说明直接用这个键。`server.json` 的 `stage` 与这张表一致，测试核对。

这个模块不依赖 `jobs`、`task_runs`，各域都能直接引用。
"""
from __future__ import annotations

STAGES = {
    "library": {
        "scanFiles": "扫描文件",
        "checkCompanions": "检查配套文件",
        "probeMedia": "读取时长与分辨率",
        "checkNetwork": "检查外网连接",
        "checkJunk": "检查垃圾文件",
        "recheckJunk": "复查垃圾文件",
        "prepareImages": "准备读取配套图片",
        "readImages": "读取配套图片",
        "preparePreviews": "准备生成预览",
        "makePreviews": "生成预览图",
        "prepareMetadata": "准备采集外部资料",
        "prepareSources": "准备采集工具",
        "fetchMetadata": "采集缺失资料",
        "saveCandidates": "保存待确认资料",
        "fetchCovers": "采集缺失封面",
        "collectResults": "整理采集结果",
        "finished": "处理结束",
    },
    "backup": {
        "prepareBackup": "准备备份",
        "copyLedger": "复制账本",
        "checkIntegrity": "检查备份完整性",
        "backupDone": "备份完成",
        "prepareRestore": "准备恢复",
        "copyBackup": "复制备份",
        "migrateBackup": "把备份迁到当前结构",
        "saveCurrent": "另存当前账本",
        "writeLedger": "写入账本",
        "restoreDone": "恢复完成",
    },
    "diagnostics": {
        "prepare": "准备导出",
        "readSystem": "读取系统诊断",
        "collectLogs": "整理诊断日志",
        "collectEvidence": "整理刮削证据",
        "readCandidates": "读取字段候选",
        "collectSnapshots": "整理来源快照",
        "scrapingDone": "刮削记录已生成",
        "cancelling": "正在取消导出",
        "done": "导出已完成",
        "cancelled": "导出已取消",
    },
    "mediaRepair": {"scan": "扫描", "repair": "修复", "done": "完成", "readTimestamps": "读取帧时间戳"},
    "organize": {"checkingPlan": "正在核对计划", "running": "正在整理", "rollingBack": "正在回滚上一批"},
    "thumbnails": {"fetch": "采集缩略图"},
    "download": {
        "isolateExtras": "隔离推广附件",
        "probeMedia": "读取下载媒体属性",
        "fetchMetadata": "采集作品资料",
        "organizeFiles": "按模板整理文件",
    },
    "upgrade": {
        "updateMetadata": "更新影片资料",
        "displayDimensions": "补测显示尺寸",
        "displayDimensionsAll": "补测视频显示尺寸",
    },
    "job": {"waitingForUpdate": "等待安装完成后继续", "cancelled": "已取消", "stopped": "已停止"},
}

_REVERSE = {text: f"{domain}.{name}" for domain, names in STAGES.items() for name, text in names.items()}


def text(code: str) -> str:
    domain, _, name = code.partition(".")
    return STAGES[domain][name]


def stage(code: str) -> dict:
    """写进状态字典的两项：`stage` 中文原文、`stage_code`。用 `update(job_id, **stage(...))` 展开。"""
    return {"stage": text(code), "stage_code": code}


def stage_code(state: dict) -> str:
    """状态此刻所在阶段的 code。

    `stage_code` 与 `stage` 对不上（某处只改了中文）就不认，免得界面把这一步译成上一步。
    升级前留下的检查点只有中文，按表认回 code，续跑时的判断与升级前一致。
    """
    current = str(state.get("stage") or "")
    code = str(state.get("stage_code") or "")
    if code and _REVERSE.get(current) == code:
        return code
    return _REVERSE.get(current, "") if not code else ""


def stage_progress(state: dict, fallback: str = "") -> dict:
    """把状态的阶段写成任务中心的进度说明：`label`、`code`、`params`。没有阶段时用 `fallback` 原文。"""
    label = str(state.get("stage") or fallback)
    code = stage_code(state) if state.get("stage") else ""
    return {"label": label, "code": f"stage.{code}" if code else None, "params": {}}


def stage_label(code: str) -> dict:
    """直接报一个阶段的进度说明，展开给 `handle.progress`。"""
    return stage_progress(stage(code))


#: 批量操作在活动页上的名字。表里存 `operation`，人看的是这一列；`server.json` 的 `batchOperation`
#: 与它一致（测试核对）。按女优删除影片走自己的入口，名字也登记在这里。
BATCH_LABELS = {
    "like": "批量标记喜欢", "seen": "批量标记看过", "later": "批量加入稍后看",
    "dispose": "批量移入回收站", "restore": "批量还原", "delete": "批量永久删除",
    "dismiss-junk": "批量确认不是垃圾", "reconsider-junk": "批量重新判定垃圾",
    "keep-duplicates": "重复组标记都保留", "reconsider-duplicates": "重复组重新列出",
    "region": "批量判定产地", "performer-delete": "按女优永久删除影片",
}


def batch_progress(operation: str) -> dict:
    """批量操作写进任务中心的进度说明：认得的操作带 `batchOperation.<operation>`，认不得的照原样。"""
    if operation not in BATCH_LABELS:
        return {"label": operation, "code": None, "params": {}}
    return {"label": BATCH_LABELS[operation], "code": f"batchOperation.{operation}", "params": {}}
