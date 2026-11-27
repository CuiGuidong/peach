import { Button } from '@/components/base/buttons/button';
import { errorMessage } from '../../api';
import { t } from '../../i18n';
import { busyProps } from '../settings/busy-props';
import { Note } from './note';

export function QueryErrorNote({ titleKey, query, reason, className }: {
  titleKey: `${string}:${string}`;
  query: { error: unknown; isFetching: boolean; refetch(options?: { cancelRefetch: boolean }): Promise<unknown> };
  reason?: string;
  className?: string;
}) {
  return <Note tone="error" className={className} title={<span data-copy-key={titleKey.replace(':', '.')}>{t(titleKey)}</span>} action={
    <Button size="small" {...busyProps(query.isFetching)}
      onClick={() => { if (!query.isFetching) void query.refetch({ cancelRefetch: false }) }}>
      <span data-copy-key="shell.shared.retry">{t('shell:shared.retry')}</span>
    </Button>
  }>{reason ?? errorMessage(query.error)}</Note>;
}
