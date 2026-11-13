import { describe, it, expect, vi, afterEach } from 'vitest';
import { queryClient } from '@peach/query';
import { watchJob, followJobProgress, jobActivityHtml } from '../src/jobs';
import { RESULT_UPDATES_KEY } from '../src/running-tasks';

afterEach(() => {
  vi.useRealTimers(); sessionStorage.clear(); document.body.innerHTML = ''; queryClient.clear();
  Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
});

/** 全站那一处（`/api/result-updates`）报出的在跑任务，写进同一份缓存。 */
const reportRunning = (...keys: string[]) => queryClient.setQueryData(RESULT_UPDATES_KEY,
  { running_tasks: keys.map((task_key, index) => ({ task_key, run_id: index + 1, status: 'running' })) });

describe('后台任务状态恢复', () => {
  it('默认任务面板展示真实进度，失败原因持续可见', async () => {
    reportRunning('follow-check');
    vi.useFakeTimers();const host=document.createElement('div');document.body.append(host);const complete=vi.fn();
    let state={status:'running',job_id:'default',checked:2,total:5,error:''};
    followJobProgress({host,active:()=>true,read:async()=>state,busy:()=>{},complete});
    await vi.advanceTimersByTimeAsync(0);
    expect(host.querySelector('[data-geist-fieldset]')).not.toBeNull();
    expect(host.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow')).toBe('2');
    state={...state,status:'failed',error:'来源不可用'};await vi.advanceTimersByTimeAsync(4000);
    expect(host.hidden).toBe(false);expect(host.textContent).toContain('来源不可用');expect(complete).toHaveBeenCalledOnce();
    expect(jobActivityHtml('正在扫描')).not.toContain('role="progressbar"');
  });
  it('后台阶段说明随轮询更新并保留真实计数', async () => {
    reportRunning('follow-check');
    vi.useFakeTimers();
    const host=document.createElement('div');document.body.append(host);
    let state={status:'running',job_id:'taste',checked:0,total:3,message:'分析浏览记录：已处理 0 / 3 条'};
    followJobProgress({host,active:()=>true,read:async()=>state,busy:()=>{},complete:()=>{},
      title:'读取浏览记录',note:text=>text,loading:text=>text,progress:(value,max,label)=>`${label} ${value}/${max}`});
    await vi.advanceTimersByTimeAsync(0);
    expect(host.textContent).toContain(state.message);
    state={...state,checked:2,message:'分析浏览记录：已处理 2 / 3 条'};
    await vi.advanceTimersByTimeAsync(4000);
    expect(host.textContent).toContain(state.message);
    expect(host.textContent).toContain('2/3');
  });
  it('页面重建后恢复来源进度并只接收一次完成回执', async () => {
    reportRunning('follow-check');
    vi.useFakeTimers();
    const host = document.createElement('div'); document.body.append(host);
    const complete = vi.fn();
    let state = {status: 'running', job_id: 'same', checked: 1, total: 3,
      current: {label: '演示来源', attempt: 3, max_attempts: 5, retry_in: 2}};
    const mount = (element: HTMLElement) => followJobProgress({host: element,
      active: () => true, read: async () => state, busy: () => {}, complete,
      note: text => text, loading: text => text, progress: (_value,_max,label) => label||'',
      container: content => `<section data-geist-fieldset>${content}</section>`});
    mount(host); await vi.advanceTimersByTimeAsync(0);
    expect(host.textContent).toContain('1/3');
    expect(host.querySelector('[data-geist-fieldset]')).not.toBeNull();
    expect(host.textContent).toContain('第 3/5 次尝试');
    host.remove();
    const fresh = document.createElement('div'); document.body.append(fresh);
    mount(fresh); await vi.advanceTimersByTimeAsync(0);
    expect(fresh.textContent).toContain('演示来源');
    state = {...state, status: 'complete', checked: 3};
    await vi.advanceTimersByTimeAsync(4000);
    expect(complete).toHaveBeenCalledTimes(1);
    expect(sessionStorage.getItem('peach-follow-job')).toBeNull();
  });
  it('连接中断后继续读取相同任务直至终态', async () => {
    const states: string[] = [], waits: number[] = [];
    let calls = 0, failures = 0;
    await watchJob({ active: () => true,
      read: async () => { calls++; if (calls === 2) throw new Error('offline');
        return { status: calls < 3 ? 'running' : 'complete', job_id: 'one' }; },
      render: state => states.push(state.status),
      disconnected: () => { failures++; }, pause: async ms => { waits.push(ms); },
    });
    expect(states).toEqual(['running', 'complete']);
    expect(failures).toBe(1);
    expect(waits).toEqual([2000, 4000]);
  });
  it('离开页面后丢弃在途响应', async () => {
    let active = true, rendered = false;
    await watchJob({ active: () => active,
      read: async () => { active = false; return { status: 'running' }; },
      render: () => { rendered = true; }, disconnected: () => {},
    });
    expect(rendered).toBe(false);
  });
  it('首读恢复只交接一次运行任务', async () => {
    let calls = 0;
    await watchJob({ active: () => true, once: true,
      read: async () => { calls++; return { status: 'running' }; },
      render: () => {}, disconnected: () => {},
    });
    expect(calls).toBe(1);
  });
});

describe('任务进度那一格：闲着不读，有事才跟', () => {
  const panel = (read: () => Promise<{ status: string; job_id?: string }>, complete = vi.fn()) => {
    const host = document.createElement('div'); document.body.append(host);
    followJobProgress({ host, active: () => true, read, busy: () => {}, complete,
      note: text => text, loading: text => text });
    return host;
  };

  it('没有记着的任务、全站那一处也没报追更检查时一次也不读；报出后开始跟，跟到终态就停', async () => {
    vi.useFakeTimers();
    let state = { status: 'idle', job_id: 'old' };
    const read = vi.fn(async () => state);
    const complete = vi.fn();
    const host = panel(read, complete);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(read, '闲着的时候不该读').not.toHaveBeenCalled();
    // 别处起的检查不归这一格：全站那一处报出来才开始。
    reportRunning('feed-check');
    await vi.advanceTimersByTimeAsync(10_000);
    expect(read).not.toHaveBeenCalled();
    state = { status: 'running', job_id: 'new' };
    reportRunning('follow-check');
    await vi.advanceTimersByTimeAsync(0);
    expect(read).toHaveBeenCalledTimes(1);
    expect(host.hidden).toBe(false);
    await vi.advanceTimersByTimeAsync(2000);
    expect(read).toHaveBeenCalledTimes(2);
    state = { status: 'complete', job_id: 'new' };
    await vi.advanceTimersByTimeAsync(2000);
    expect(complete).toHaveBeenCalledTimes(1);
    const settled = read.mock.calls.length;
    await vi.advanceTimersByTimeAsync(60_000);
    expect(read, '跟完就停').toHaveBeenCalledTimes(settled);
  });

  it('本页刚发起的那一趟还没出现在状态里时接着读，直到它跑起来', async () => {
    vi.useFakeTimers();
    sessionStorage.setItem('peach-follow-job', 'mine');
    let state = { status: 'complete', job_id: 'earlier' };
    const read = vi.fn(async () => state);
    panel(read);
    await vi.advanceTimersByTimeAsync(0);
    expect(read).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(2000);
    expect(read).toHaveBeenCalledTimes(2);
    state = { status: 'running', job_id: 'mine' };
    await vi.advanceTimersByTimeAsync(2000);
    expect(read).toHaveBeenCalledTimes(3);
  });

  it('页面隐藏时暂停，回到前台再接着读', async () => {
    vi.useFakeTimers();
    let visibility = 'visible';
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => visibility });
    const read = vi.fn(async () => ({ status: 'running', job_id: 'one' }));
    reportRunning('follow-check');
    panel(read);
    await vi.advanceTimersByTimeAsync(0);
    expect(read).toHaveBeenCalledTimes(1);
    visibility = 'hidden';
    await vi.advanceTimersByTimeAsync(60_000);
    expect(read, '隐藏期间不读').toHaveBeenCalledTimes(1);
    visibility = 'visible';
    document.dispatchEvent(new Event('visibilitychange'));
    await vi.advanceTimersByTimeAsync(0);
    expect(read).toHaveBeenCalledTimes(2);
  });
});
