import { useEffect } from 'react';
import { ButtonLink } from '@/components/base/buttons/button';
import { CHATGPT_SETTINGS_PATH } from '../../history/settings-route';
import { t } from '../../i18n';
import { AuthCard } from './auth-card';
import type { PageData } from './page-data';
import { chatgptAuthorizationIssue } from '../settings/chatgpt-authorization';

const RETURN_DELAY_MS = 4000;

export function AIAuthorizationPage({ data }: { data: PageData }) {
  const outcome = data.status === 'connected' ? 'connected'
    : data.status === 'permission_required' ? 'permission' : 'error';
  const titleKey = 'shell.aiAuthorization.' + outcome + 'Title';
  const title = t('shell:aiAuthorization.' + outcome + 'Title');
  const issue = outcome === 'connected' ? null : chatgptAuthorizationIssue(data.errorCode || data.status);
  useEffect(() => {
    document.title = `Peach · ${title}`;
  }, [title]);
  useEffect(() => {
    if (data.editing === 'true' || outcome !== 'connected') return;
    const timer = window.setTimeout(() => window.location.replace(CHATGPT_SETTINGS_PATH), RETURN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [data.editing, outcome]);
  return <AuthCard title={<span data-copy-key={titleKey}>{title}</span>}
    lede={issue ? <span data-copy-key={issue.copyKey}>{issue.message}</span>
      : <span data-copy-key="shell.aiAuthorization.connectedHelp">{t('shell:aiAuthorization.connectedHelp')}</span>}>
    <ButtonLink href={CHATGPT_SETTINGS_PATH} className="self-start">
      <span data-copy-key="shell.aiAuthorization.return">{t('shell:aiAuthorization.return')}</span>
    </ButtonLink>
  </AuthCard>;
}
