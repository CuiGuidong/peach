/* 任务中心顶部「需要处理」：后台服务此刻存在的问题，每项一行。
 *
 * 这些是持续状态（调度连续失败、公网入口断开、网络不通），不是跑过的一轮，所以不进任务表；
 * 数据来自 `/api/background-issues`，服务端每次现读各服务的快照，问题消失这一行就不在了。
 * 一行只写是什么、从什么时候开始，加一个写明去处的链接（文案由服务端给）；原因只在链接
 * 指向的那个设置位置讲，这里不复述。原地重跑就可能修好的（网络、调度、amane 桥）多给一个
 * 「立即重试」；要改设置、填凭据的只有链接。链接在左、重试在右：原地修好的那个动作是这一行
 * 的主动作，和分区底部操作条一样排在最右；没有重试的行，链接也落在同一个位置。
 *
 * 时间分两种：服务自己记下的起点写「自 … 起」；服务不记失败时刻的，写这一次运行里第一次
 * 读到它的时刻「发现于 …」，两者不混用。只有确认没有问题才隐藏整段。 */
import { useId } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RiArrowRightLine } from '@remixicon/react';

import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';

import { apiSend, errorMessage } from '../../api';
import { withBackoff } from '../../polling';
import { codedText } from '../../core/server-text';
import { Note } from '../components/note';
import { QueryErrorNote } from '../components/query-error-note';
import { busyProps } from '../settings/use-action';
import { BACKGROUND_ISSUES_KEY, fetchBackgroundIssues, momentText, type BackgroundIssue } from './tasks';
import { t } from '../../i18n';

export { BACKGROUND_ISSUES_URL, type BackgroundIssue } from './tasks';
/** 后台问题每 30 秒读一次；读失败按连续失败次数退避。 */
export const backgroundIssuesInterval = withBackoff<{ issues: BackgroundIssue[] }>(() => 30_000);

export function BackgroundIssues() {
  const id = useId();
  const query = useQuery({
    queryKey: BACKGROUND_ISSUES_KEY,
    queryFn: ({ signal }) => fetchBackgroundIssues(signal),
    refetchInterval: backgroundIssuesInterval,
  });
  const issues = query.data?.issues || [];
  if (!issues.length && !query.error) return null;
  return (
    <section aria-labelledby={id} className="flex min-w-0 flex-col gap-3">
      <h3 id={id} className="text-title-2-medium text-text-primary">{t('manage:backgroundIssues.title')}</h3>
      {query.error ? <QueryErrorNote titleKey="manage:backgroundIssues.loadFailed" query={query} /> : null}
      {issues.length ? <ul className="flex min-w-0 flex-col gap-3">
        {issues.map((issue) => <li key={issue.key}><IssueRow issue={issue} /></li>)}
      </ul> : null}
    </section>
  );
}

function IssueRow({ issue }: { issue: BackgroundIssue }) {
  const client = useQueryClient();
  const retry = useMutation({
    mutationFn: () => apiSend(issue.retry!, {}),
    onSuccess: () => { void client.invalidateQueries({ queryKey: BACKGROUND_ISSUES_KEY }) },
  });
  const moment = issue.since ? t('manage:backgroundIssues.since', { time: momentText(issue.since) }) : t('manage:backgroundIssues.detectedAt', { time: momentText(issue.noticed_at) });
  return (
    <Note tone="error" title={codedText(issue, 'title')} action={
      <div className="flex flex-wrap items-center gap-2">
        <LinkButton href={issue.href} size="small" trailingIcon={RiArrowRightLine}>{codedText(issue, 'link_label')}</LinkButton>
        {issue.retry
          ? <Button variant="secondary" size="small" disabled={!issue.retry_available}
              {...busyProps(retry.isPending)} onClick={() => retry.mutate()}>{t('manage:shared.retryNow')}</Button>
          : null}
      </div>
    }>
      {retry.error ? t('manage:backgroundIssues.retryFailed', { moment, error: errorMessage(retry.error) }) : moment}
    </Note>
  );
}
