"""发给界面的一句话：稳定的 `message_code` 与插值参数 `message_params`（ADR-0156 第三条、ADR-0159）。

文字只在 `resources/locales/<语言>/server.json` 的 `<message_code>`。前端按它取当前界面语言的译文；
同一层的 `message`（成功）或 `error`（失败）是按 zh-CN 渲染的一句，给还不认 code 的调用方兜底。
不用 `code` 这个名字：响应里的 `code` 已普遍表示番号。
"""
from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from . import interface_text


class UserFacingError(Exception):
    """给人看的错误。`api.py` 统一转成 `{"error", "message_code", "message_params"}`。

    `code` 是 `server` 命名空间里的键，写进去就不再改；`params` 填进文字里的 `{{名字}}`。
    领域异常可以继承它，同时继承原来的 `ValueError` 等基类，让还按旧基类捕获的调用方不受影响。
    """

    status_code = 400

    def __init__(self, code: str, params: Mapping[str, Any] | None = None, *,
                 status_code: int | None = None) -> None:
        self.code = code
        self.params = dict(params or {})
        self.message = interface_text.text(f"server:{code}", self.params)
        super().__init__(self.message)
        if status_code is not None:
            self.status_code = status_code


class UserValueError(UserFacingError, ValueError):
    """输入或状态不对、要告诉用户的错误。仍是 `ValueError`：按 `except ValueError` 捕获的调用方照旧接得住，
    再用 `error_fields` 或 `error_detail` 把 code 带进响应。"""


def message_fields(code: str, params: Mapping[str, Any] | None = None, *, key: str = "message") -> dict[str, Any]:
    """一句界面文字的响应字段。`key` 是兜底原文所在的键：成功用 `message`，失败用 `error`。"""
    values = dict(params or {})
    return {key: interface_text.text(f"server:{code}", values), "message_code": code, "message_params": values}


def error_fields(error: BaseException) -> dict[str, Any]:
    """把异常写成失败响应的字段：`UserFacingError` 带上 code，别的异常照旧只给原文。"""
    if isinstance(error, UserFacingError):
        return message_fields(error.code, error.params, key="error")
    return {"error": str(error)}


def failure_fields(error: BaseException) -> dict[str, Any]:
    """任务失败时写进任务行的报错：带 code 的写原句与 `error_code`／`error_params`，
    别的异常照旧写「类名: 原文」，排查时看得出是哪一类故障。展开给 `finish(...)`。"""
    if isinstance(error, UserFacingError):
        return {"error": error.message, "error_code": error.code, "error_params": dict(error.params)}
    return {"error": f"{type(error).__name__}: {error}"}


def error_detail(error: BaseException) -> str | dict[str, Any]:
    """`HTTPException(status, error_detail(error))`：带 code 的异常写成 `api.py` 认得的字典明细
    （`message` 是兜底原文，code 与参数原样带给页面），别的异常照旧只给原文。"""
    if isinstance(error, UserFacingError):
        return message_fields(error.code, error.params)
    return str(error)
