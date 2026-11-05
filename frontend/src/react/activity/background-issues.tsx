/* Task center顶部「Needs attention」: 后台服务此刻存在的问题，每项一行.
 *
 * 这些是持续状态（调度连续失败、公网入口断开、网络不通），不是跑过的一轮，所以不进任务表；
 * 数据来自 `/api/background-issues`，服务端每次现读各服务的快照，问题消失这一行就不在了.
 * 一行只写是什么、从什么时候开始，加一个写明去处的链接（文案由服务端给）；原因只在链接
 * 指向的那个Settings位置讲，这里不复述.原地重跑就可能修好的（网络、调度、amane 桥）多给一个
 * 「Retry now」；要改Settings、填凭据的只有链接.链接在左、Retry在右: 原地修好的那个动作是这一行
 * 的主动作，和分区底部操作条一样排在最右；没有Retry的行，链接也落在同一个位置.
 *
 * 时间分两种: 服务自己记下的起点写「自 … 起」；服务不记失败时刻的，写这一次运行里第一次
 * 读到它的时刻「发现于 …」，两者不混用.没有问题时整段不画，取数失败也不画: 服务连不上时
 * 页面顶上已经有一条读取失败. */
import { useId } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RiArrowRightLine } from '@remixicon/react';

import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';

import { apiGet, apiSend, errorMessage } from '../../api';
import { Note } from '../components/note';
import { busyProps } from '../settings/use-action';
import { momentText } from './tasks';

export const BACKGROUND_ISSUES_URL = '/api/background-issues';
export const BACKGROUND_ISSUES_KEY = ['background-issues'] as const;

export interface BackgroundIssue {
  key: string;
  title: string;
  href: string;
  /** Link copy naming a concrete destination, such as "Open notification settings". */
  link_label: string;
  /** The starting point each service records itself; null for services that do not record one. */
  since: string | null;
  /** The moment this item was first read in this run. */
  noticed_at: string;
  retry: string | null;
  retry_available: boolean;
}

export function BackgroundIssues() {
  const id = useId();
  const query = useQuery({
    queryKey: BACKGROUND_ISSUES_KEY,
    queryFn: ({ signal }) => apiGet<{ issues: BackgroundIssue[] }>(BACKGROUND_ISSUES_URL, signal),
    refetchInterval: 30_000,
  });
  const issues = query.data?.issues || [];
  if (!issues.length) return null;
  return (
    <section aria-labelledby={id} className="flex min-w-0 flex-col gap-3">
      <h3 id={id} className="text-title-2-medium text-text-primary">Needs attention</h3>
      <ul className="flex min-w-0 flex-col gap-3">
        {issues.map((issue) => <li key={issue.key}><IssueRow issue={issue} /></li>)}
      </ul>
    </section>
  );
}

function IssueRow({ issue }: { issue: BackgroundIssue }) {
  const client = useQueryClient();
  const retry = useMutation({
    mutationFn: () => apiSend(issue.retry!, {}),
    onSuccess: () => { void client.invalidateQueries({ queryKey: BACKGROUND_ISSUES_KEY }) },
  });
  const moment = issue.since ? `Since ${momentText(issue.since)}` : `Noticed at ${momentText(issue.noticed_at)}`;
  return (
    <Note tone="error" title={issue.title} action={
      <div className="flex flex-wrap items-center gap-2">
        <LinkButton href={issue.href} size="small" trailingIcon={RiArrowRightLine}>{issue.link_label}</LinkButton>
        {issue.retry
          ? <Button variant="secondary" size="small" disabled={!issue.retry_available}
              {...busyProps(retry.isPending)} onClick={() => retry.mutate()}>Retry now</Button>
          : null}
      </div>
    }>
      {retry.error ? `${moment}\nNot retried: ${errorMessage(retry.error)}` : moment}
    </Note>
  );
}
