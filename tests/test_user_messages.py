"""发给界面的文字带 `message_code`（ADR-0156 第三条）：信封字段、统一出口、code 都有译文、后端中文只减不增。"""
from __future__ import annotations

import importlib.util
import json
import re
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from support.ledger import fresh_ledger

from peach import (data_storage, downloads, entity_classification, ledger_backups, release_notices, release_updates,
                   repair_center, task_runs, task_stages)
from peach.jobs import BackgroundJob
from peach import interface_text
from peach.user_messages import UserFacingError, error_fields, message_fields

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import check_backend_copy as checker  # noqa: E402

HAS_DEPS = all(importlib.util.find_spec(name) for name in ("fastapi", "httpx"))
LOCALES = ROOT / "resources" / "locales"


class EnvelopeTests(unittest.TestCase):
    def test_coded_text_is_rendered_from_the_resources_beside_its_code(self):
        self.assertEqual(message_fields("release.message.imagePending", {"version": "1.0"}),
                         {"message": "Peach 1.0 的镜像尚未发布，请稍后再检查。", "message_code": "release.message.imagePending",
                          "message_params": {"version": "1.0"}})

    def test_user_facing_errors_keep_their_code_and_other_errors_keep_their_text(self):
        error = UserFacingError("javBrowser.notQueued", status_code=409)
        self.assertEqual(error.status_code, 409)
        self.assertEqual(error_fields(error), {"error": "这个番号不在排队中", "message_code": "javBrowser.notQueued",
                                               "message_params": {}})
        self.assertEqual(error_fields(ValueError("old message")), {"error": "old message"})


def registered_keys() -> set[str]:
    """后端登记表里能枚举出来的全部 `server` 键（ADR-0159）：不靠扫描拼接出来的字符串。"""
    keys = {f"task.{key}" for key in task_runs.TASK_KEYS}
    keys |= {f"taskRun.progress.{key}" for key in task_runs.PROGRESS_KEYS}
    keys |= {f"taskRun.error.{key}" for key in task_runs.ERROR_KEYS}
    keys |= {f"stage.{code}" for code in task_stages.STAGE_CODES}
    keys |= {f"batchOperation.{key}" for key in task_stages.BATCH_OPERATIONS}
    keys |= {f"release.installation.{key}" for key in release_updates.INSTALLATIONS}
    keys |= {f"release.channel.{key}" for key in release_updates.CHANNELS}
    keys |= {f"release.message.{key}" for key in release_updates.MESSAGES}
    keys |= {f"release.dockerStep.{step}" for step, _ in release_updates.DOCKER_STEPS}
    keys |= {f"repairCenter.items.{key}.{field}" for key, _ in repair_center.ITEMS for field in ("title", "summary")}
    keys |= {f"repairCenter.history.{prefix.rstrip('-')}" for prefix, _ in repair_center.RULES}
    keys |= {f"download.state.{key}" for key in downloads.STATES}
    keys |= {f"download.postprocess.{key}" for key in downloads.POSTPROCESS_STATES}
    keys |= {f"download.failure.{key}" for key in downloads.FAILURE_KINDS}
    keys |= {f"storage.category.{item.key}.{field}" for item in data_storage.CATEGORIES
             for field in ("label", "description", "note")}
    keys |= {f"ledgerBackup.purpose.{key}" for key in ledger_backups.PURPOSES}
    keys |= {f"identity.category.{key}" for key in entity_classification.CATEGORIES}
    for version, notice in release_notices.NOTICES.items():
        base = "releaseNotes.v" + version.replace(".", "-")
        keys.add(f"{base}.headline")
        keys |= {f"{base}.items.{item['id']}.{field}" for group in ("features", "automatic", "attention")
                 for item in notice.get(group, []) for field in ("title", "body")}
    return keys


class TranslationCoverageTests(unittest.TestCase):
    def test_every_code_written_in_the_backend_has_both_languages(self):
        used = checker.used_codes() | registered_keys()
        self.assertTrue(used)
        for language in ("zh-CN", "en"):
            with self.subTest(language):
                self.assertEqual(sorted(used - checker.server_keys(language)), [],
                                 "新的 code 要在 resources/locales/<语言>/server.json 里同时写中文和英文")

    def test_the_waiting_stage_and_the_waiting_progress_say_the_same_thing(self):
        # 后台任务等安装完成那一句，阶段名与任务中心的进度说明是同一句话，两个键要一起改。
        self.assertEqual(task_stages.text("job.waitingForUpdate"),
                         interface_text.text("server:taskRun.progress.waitingForUpdate"))


class StageCodeTests(unittest.TestCase):
    def test_a_stage_without_its_code_is_not_translated_as_the_previous_one(self):
        job = BackgroundJob("stage-code-test")
        job.state = {job.id_key: "j", "status": "running", **task_stages.stage("library.scanFiles")}
        self.assertEqual(BackgroundJob._progress_label(job.state),
                         {"label": "扫描文件", "code": "stage.library.scanFiles", "params": {}})
        job.update("j", stage="某个还没登记的阶段")
        self.assertEqual(job.state["stage_code"], "")
        self.assertEqual(BackgroundJob._progress_label(job.state)["code"], None)
        # 升级前留下的检查点只有中文，按表认回 code，续跑时的判断不变。
        self.assertEqual(task_stages.stage_code({"stage": "处理结束"}), "library.finished")
        self.assertEqual(task_stages.stage_code({"stage": "处理结束", "stage_code": "library.scanFiles"}), "")

    def test_stage_names_are_written_through_the_table(self):
        # 阶段名只在 `task_stages` 里写中文；别处写 `stage="中文"` 界面就译不出来。
        pattern = re.compile(r"""(['"]stage['"]\s*:\s*|\bstage\s*=\s*)f?(['"])([^'"]*)\2""")
        found = [f"{path.name}:{number}" for path in sorted((ROOT / "src" / "peach").rglob("*.py"))
                 if path.name != "task_stages.py"
                 for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1)
                 for match in pattern.finditer(line) if re.search("[\u4e00-\u9fff]", match.group(3))]
        self.assertEqual(found, [], "阶段名加进 peach/task_stages.py，写入时用 stage(code) 展开")


class InterfaceTextTests(unittest.TestCase):
    """后端读界面文字（ADR-0159）：与前端同一份 `resources/locales/`。"""

    def test_renders_from_the_shared_resources_and_falls_back_to_the_source_language(self):
        self.assertEqual(interface_text.text("server:task.library-processing"), "扫描与采集")
        self.assertEqual(interface_text.text("server:task.library-processing", language="en"), "Scan & fetch")
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            for language, body in (("zh-CN", {"a": {"b": "第 {{n}} 轮，{{who}}"}}), ("en", {})):
                (root / language).mkdir()
                (root / language / "server.json").write_text(json.dumps(body, ensure_ascii=False), encoding="utf-8")
            self.assertEqual(interface_text.text("server:a.b", {"n": 3}, "en", root=root), "第 3 轮，{{who}}")
            with self.assertRaises(KeyError):
                interface_text.text("server:a.missing", root=root)
            interface_text.ensure_available(root)
            with self.assertRaises(interface_text.InterfaceTextMissing):
                interface_text.ensure_available(root / "nowhere")

    def test_server_texts_use_only_what_the_backend_renderer_understands(self):
        # 后端渲染器只认 `{{name}}` 与点号嵌套：复数后缀与 `{{count, number}}` 这类格式选项只给前端用。
        for language in ("zh-CN", "en"):
            with self.subTest(language):
                keys = checker.server_keys(language)
                self.assertEqual([key for key in keys if key.rsplit("_", 1)[-1] in ("zero", "one", "two", "few", "many", "other")], [])
                options = [key for key in keys if re.search(r"\{\{[^}]*,", interface_text.template(f"server:{key}", language))]
                self.assertEqual(options, [])


class BackendCopyRatchetTests(unittest.TestCase):
    def test_no_module_has_more_chinese_strings_than_its_baseline(self):
        baseline = json.loads(checker.BASELINE.read_text(encoding="utf-8"))
        raised = [f"{name}: {count}（基线 {baseline.get(name, 0)}）"
                  for name, count in checker.scan().items() if count > baseline.get(name, 0)]
        self.assertEqual(raised, [], "界面文字写进 resources/locales/<语言>/*.json，后端只写 code；日志与命令行用英文。"
                                     "抽走后跑 python scripts/check_backend_copy.py --write 收紧基线")

    def test_every_chinese_string_counts_except_docstrings_and_content_files(self):
        source = "\n".join([
            '"""模块说明不算。"""',
            'import logging',
            'LOGGER = logging.getLogger(__name__)',
            'TITLE = "界面标题"',
            'def handler(value):',
            '    LOGGER.warning("日志不算")',
            '    if value == "比较不算":',
            '        print("命令行不算")',
            '    if value:',
            '        raise ValueError(f"报错 {value}")',
            '    raise UserFacingError("带 code 的不算", code="x.y")',
            '    return {"error": "回执", "message_code": "x.z"} or message_fields("也不算", "x.w")',
        ])
        # 界面文字只在语言资源里，日志与命令行用英文（ADR-0159）：除 docstring 外每一句都算。
        self.assertEqual(checker.count_literals("routes_sample.py", source), 8)
        self.assertEqual(checker.count_literals("sample.py", source), 8)
        self.assertEqual(checker.count_literals("genre_taxonomy.py", source), 0)

    def test_codes_are_found_wherever_the_backend_writes_them(self):
        source = "\n".join([
            'SAMPLE_CODE = "sample.constant"',
            'def handler():',
            '    message_fields("sample.positional")',
            '    raise UserFacingError("sample.first")',
            '    raise SampleError("sample.subclass")',
            '    raise SomeError(code="sample.keyword")',
            '    return {"message": "原文", "message_code": "sample.dict"}',
            'class SampleError(UserFacingError, ValueError):',
            '    pass',
        ])
        self.assertEqual(checker.codes_in(source), {"sample.constant", "sample.positional", "sample.first",
                                                    "sample.subclass", "sample.keyword", "sample.dict"})


@unittest.skipUnless(HAS_DEPS, "fastapi/httpx not installed")
class ResponseExitTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        import httpx
        from peach.api import create_app
        from peach.config import PeachSettings
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        root = Path(tmp.name).resolve()
        app = create_app(PeachSettings(configured=True, db_path=fresh_ledger(root), follow_state_root=root / "state"))
        self.addCleanup(app.state.http_transport.close)

        def refuse():
            raise UserFacingError("release.message.imagePending", {"version": "1.0"}, status_code=409)

        def crash():
            raise RuntimeError("boom")
        # 插到路由表最前面：应用末尾有兜底路由，追加在后面的路由永远匹配不到。
        for path, endpoint in (("/api/sample-refusal", refuse), ("/sample-refusal", refuse), ("/api/sample-crash", crash)):
            app.add_api_route(path, endpoint)
            app.router.routes.insert(0, app.router.routes.pop())
        self.client = httpx.AsyncClient(transport=httpx.ASGITransport(app=app, raise_app_exceptions=False),
                                        base_url="http://testserver")
        self.addAsyncCleanup(self.client.aclose)

    async def test_user_facing_errors_leave_through_one_exit(self):
        response = await self.client.get("/api/sample-refusal")
        self.assertEqual(response.status_code, 409)
        self.assertEqual(response.json(), {"error": "Peach 1.0 的镜像尚未发布，请稍后再检查。",
                                           "message_code": "release.message.imagePending",
                                           "message_params": {"version": "1.0"}})
        page = await self.client.get("/sample-refusal", headers={"Accept": "text/html"})
        self.assertEqual(page.status_code, 409)
        self.assertIn('data-detail="Peach 1.0 的镜像尚未发布，请稍后再检查。"', page.text)

    async def test_starlette_and_unexpected_errors_carry_codes(self):
        missing = await self.client.get("/dist/no-such.js")
        self.assertEqual(missing.json()["message_code"], "http.notFound")
        wrong = await self.client.delete("/healthz")
        self.assertEqual(wrong.json()["message_code"], "http.methodNotAllowed")
        with patch("peach.api._server_error_headers", return_value={"X-Peach-Error-ID": "test"}):
            crashed = await self.client.get("/api/sample-crash")
        self.assertEqual(crashed.status_code, 500)
        self.assertEqual(crashed.json(), {"error": "服务处理失败，请导出诊断报告", "message_code": "http.serverError",
                                          "message_params": {}, "error_id": "test"})


if __name__ == "__main__":
    unittest.main()
