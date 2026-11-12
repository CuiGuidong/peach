/* 服务端发来的界面文字（ADR-0156 第三条）。
 *
 * 一句话由三样组成：同一层的原文（成功在 `message`，失败在 `error`，FastAPI 默认的 `detail` 也认）、
 * 稳定的 `message_code` 与插值参数 `message_params`。有 code 且 `server` 命名空间里有这条译文就用译文，
 * 否则显示原文。还没迁移的接口只给原文，照样能显示。 */
import { hasTranslation, t } from '../i18n';

type Params = Record<string, unknown>;

/** 显示表里按 id 取的一项：`server:<键>` 有译文用译文，没有就用服务端给的原文。 */
export function serverLabel(key: string, fallback: string, params?: Params): string {
  const full = `server:${key}`;
  return key && hasTranslation(full) ? t(full, params ?? {}) : fallback;
}

/** 后台任务此刻的阶段：`stage_code` 有译文用译文，否则显示服务端的 `stage` 原文。 */
export function stageText(state: { stage?: string | null; stage_code?: string | null } | null | undefined): string {
  return serverLabel(state?.stage_code ? `stage.${state.stage_code}` : '', state?.stage || '');
}

/** 结果摘要里按段存的一句（ADR-0159）：每段是 `server:outcome.<code>`，参数里嵌着的段落一并渲染。 */
export interface OutcomePart { code: string; params?: Params }

const isParts = (value: unknown): value is OutcomePart[] =>
  Array.isArray(value) && value.every((item) => item && typeof item === 'object' && typeof item.code === 'string');

/** 把段落拼成当前语言的一句；有一段缺译文就整句用服务端渲染好的 `fallback`。`adjust` 改写每段的参数（如站点显示名）。 */
export function partsText(parts: unknown, fallback: string, adjust: (params: Params) => Params = (params) => params): string {
  if (!isParts(parts)) return fallback;
  const render = (items: OutcomePart[]): string | null => {
    let text = '';
    for (const item of items) {
      const key = `server:outcome.${item.code}`;
      if (!hasTranslation(key)) return null;
      const params: Params = {};
      for (const [name, value] of Object.entries(adjust(item.params ?? {}))) {
        const nested = isParts(value) ? render(value) : value;
        if (nested === null) return null;
        params[name] = nested;
      }
      text += t(key, params);
    }
    return text;
  };
  return render(parts) ?? fallback;
}

/** 一组按 id 取的显示名：`ids` 与服务端给的 `labels` 一一对应，缺 id 或缺译文的项用原文。 */
export function serverLabels(prefix: string, ids: readonly string[] | undefined, labels: readonly string[]): string[] {
  return labels.map((label, index) => serverLabel(ids?.[index] ? `${prefix}.${ids[index]}` : '', label));
}

/** 响应体里那句给人看的话；没有就是空串，由调用方按状态码给通用句。
 *
 *  没带 code 的原文只有中文才是给人看的话：服务端的界面文字以中文为源文，
 *  英文的是 `not found`、`unavailable` 这类协议值，不直接给人看。 */
export function serverText(payload: unknown): string {
  if (!payload || typeof payload !== 'object') return '';
  const body = payload as Record<string, unknown>;
  const found = ['message', 'detail', 'error'].map((key) => body[key]).find((value) => typeof value === 'string' && value);
  const original = typeof found === 'string' ? found : '';
  const code = typeof body.message_code === 'string' ? body.message_code : '';
  const params = body.message_params && typeof body.message_params === 'object' ? body.message_params as Params : {};
  return serverLabel(code, code || /[㐀-鿿]/.test(original) ? original : '', params);
}
