import { esc } from '@peach/legacy/core';
import { noteHtml, loadingDotsHtml } from '@peach/legacy/ui';
import { t } from './i18n';
import { jobText } from './core/server-text';
import { backoffMs, visiblePause } from './polling';
import { FOLLOW_CHECK_TASK, onTaskChange, runningTask } from './running-tasks';

/** 任务那枚环形进度。口味页与统计页归 React 之后只剩这一个读者，所以留在它身边。 */
function jobProgressHtml(label: string, value: number, max: number): string {
  if (!Number.isFinite(max) || max <= 0) return '';
  const done = Math.max(0, Math.min(max, Number.isFinite(value) ? value : 0));
  const percent = done / max * 100;
  return `<div class="ui-board-job-progress" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${done}"><svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true"><circle class="ui-board-job-track" cx="18" cy="18" r="15"/><circle class="ui-board-job-fill" cx="18" cy="18" r="15" pathLength="100" stroke-dasharray="${percent} ${100 - percent}" transform="rotate(-90 18 18)"/></svg><span>${esc(label)}<small>${Math.round(percent)}%</small></span></div>`;
}

/** 后台任务查询只重试读状态；启动和写入请求由调用方单次提交。 */
export interface JobState {
  status: string;
  job_id?: string;
  checked?: number;
  total?: number;
  older?: boolean;
  error?: string;
  message?: string;
  /** `message` 与 `error` 的 code 和参数（ADR-0159）；有译文时显示译文。 */
  message_code?: string;
  message_params?: Record<string, unknown>;
  error_code?: string;
  error_params?: Record<string, unknown>;
  current?: { label?: string; provider?: string; attempt?: number;
    max_attempts?: number; retry_in?: number };
}

/** 正在推进的任务用真实计数；总量未取得时显示状态文字。 */
export function jobActivityHtml(label: string, value = 0, total = 0): string {
  return total > 0 ? jobProgressHtml(label, value, total) : loadingDotsHtml(label);
}

/** 任务在跑时多久读一次状态。 */
export const JOB_WATCH_MS = 2000;

/** 跟一趟任务到终态：在跑时每 `JOB_WATCH_MS` 读一次，读失败按 4、8、16、30 秒退避，页面不可见时暂停。
 *  `keepWatching` 为真（或按这一份状态返回真）时不在跑也接着读。 */
export async function watchJob<T extends JobState>(options: {
  read: (signal: AbortSignal) => Promise<T>;
  active: () => boolean;
  render: (state: T) => void;
  disconnected: (error: unknown) => void;
  keepWatching?: boolean | ((state: T) => boolean);
  once?: boolean;
  pause?: (ms: number) => Promise<void>;
}): Promise<void> {
  const pause = options.pause || (ms => visiblePause(ms));
  const keep = (state: T) => (typeof options.keepWatching === 'function'
    ? options.keepWatching(state) : !!options.keepWatching);
  let failures = 0;
  while (options.active()) {
    let state: T;
    try {
      state = await options.read(AbortSignal.timeout(15000));
    } catch (error) {
      if (!options.active()) return;
      failures++;
      options.disconnected(error);
      await pause(backoffMs(failures));
      continue;
    }
    if (!options.active()) return;
    failures = 0;
    options.render(state);
    if (options.once) return;
    if (state.status !== 'running' && !keep(state)) return;
    await pause(JOB_WATCH_MS);
  }
}

/** 页面上那一格任务进度。闲着不读：本页发起过（`sessionStorage` 里记着在跟的任务号），或全站那一处
 *  （`/api/result-updates` 的 `running_tasks`）报出 `taskKey` 在排在跑时才开始跟，跟到终态就停。 */
export function followJobProgress(options: {
  host: HTMLElement;
  active: () => boolean;
  read: (signal: AbortSignal) => Promise<JobState>;
  busy: (running: boolean) => void;
  complete: (state: JobState) => void;
  note?: (text: string) => string;
  loading?: (text: string) => string;
  progress?: (value: number, max: number, label?: string) => string;
  container?: (content: string) => string;
  storageKey?: string;
  title?: string;
  /** 任务中心登记这种任务用的 `task_key`，默认是追更检查。 */
  taskKey?: string;
}): void {
  const note=options.note || (text=>noteHtml(text,{label:t('manage:jobProgress.status'),variant:'error'}));
  const loading=options.loading || loadingDotsHtml;
  const progress=options.progress || ((value,max,label)=>jobActivityHtml(label||t('manage:jobProgress.processed', { done: value, total: max }),value,max));
  const container=options.container || (content=>`<section class="followtask" data-geist-fieldset aria-label="${t('manage:jobProgress.progressLabel')}"><div class="geist-fieldset-content">${content}</div></section>`);
  const panel = document.createElement('div');
  options.host.hidden = true;
  panel.dataset.followJob = '';
  panel.setAttribute('aria-live', 'polite');
  options.host.prepend(panel);
  const storageKey = options.storageKey || 'peach-follow-job';
  let tracked: string | undefined = sessionStorage.getItem(storageKey) || undefined;
  let settled = false;
  let watching = false;
  const taskKey = options.taskKey || FOLLOW_CHECK_TASK;
  const alive = () => !settled && options.active() && panel.isConnected;
  const follow = () => {
    if (watching || !alive()) return;
    watching = true;
    void watchJob({ read: options.read, active: alive, render, disconnected,
      // 记着的那一趟还没出现在状态里（刚起、还在排）时接着读，等它跑起来或过期。
      keepWatching: () => !!tracked })
      .finally(() => { watching = false });
  };
  const stop = onTaskChange([taskKey], (tasks) => {
    if (!alive()) { stop(); return }
    if (runningTask(taskKey, tasks)) follow();
  });
  if (tracked || runningTask(taskKey)) follow();
  function render(state: JobState) {
    const running = state.status === 'running';
    options.host.hidden = !running;
    options.busy(running);
    if (running) {
      tracked = state.job_id;
      if (tracked) sessionStorage.setItem(storageKey, tracked);
      const current = state.current;
      const attempt = (current?.attempt || 1) > 1
        ? ` · ${current?.retry_in
          ? t('manage:jobProgress.attemptRetry', { attempt: current?.attempt, max: current?.max_attempts, count: current.retry_in })
          : t('manage:jobProgress.attempt', { attempt: current?.attempt, max: current?.max_attempts })}` : '';
      const titled = options.title && (state.total
        ? t('manage:jobProgress.titledProgress', { title: options.title, checked: state.checked || 0, total: state.total }) : options.title);
      const text = (jobText(state) || titled || (state.total
        ? t(state.older ? 'manage:jobProgress.historySources' : 'manage:jobProgress.updateSources', { checked: state.checked || 0, count: state.total })
        : t('manage:jobProgress.preparing')))
        + (current ? ` · ${current.label || current.provider || ''}${attempt}` : '');
      const content = (state.total || 0) > 0
        ? progress(state.checked || 0, state.total!, text) : loading(text);
      panel.innerHTML = container(content);
    } else if (tracked && tracked === state.job_id) {
      tracked = undefined;
      settled = true;
      stop();
      options.host.hidden = state.status !== 'failed';
      sessionStorage.removeItem(storageKey);
      panel.innerHTML = state.status === 'failed' ? note(jobText(state, 'error') || t('manage:jobProgress.checkFailed')) : '';
      options.complete(state);
    } else {
      if (tracked && state.status === 'idle') {
        options.host.hidden = false;
        panel.innerHTML = note(t('manage:jobProgress.stateExpired'));
        sessionStorage.removeItem(storageKey);
        tracked = undefined;
        settled = true;
        stop();
        return;
      }
      panel.innerHTML = '';
    }
  }
  function disconnected() {
    options.host.hidden = false;
    panel.innerHTML = note(t('manage:jobProgress.reconnecting'));
  }
}
