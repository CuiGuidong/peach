import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import { interfaceLanguage, t } from '../../i18n';

export const ACCOUNT_DASHBOARDS: Record<string, string> = {
  'openai': 'https://platform.openai.com/usage',
  'openai-oauth': 'https://chatgpt.com/settings/usage',
  'anthropic': 'https://platform.claude.com/usage',
  'deepseek': 'https://platform.deepseek.com/usage',
};

type UnavailableReason = 'timeout' | 'status' | 'connection' | 'credentials' | 'incomplete' | 'unsupported' | 'custom_endpoint';
type AccountUsage = { kind: 'organization'; tokens: number }
  | { kind: 'balance'; balances: { amount: string; currency: string }[] }
  | { kind: 'admin_required' | 'unconfigured' | 'subscription' | 'denied' | 'custom' }
  | { kind: 'unavailable'; reason?: UnavailableReason; status?: number };

const notes = {
  organization: 'organizationHelp', balance: 'balanceHelp', admin_required: 'adminKeyRequired',
  unconfigured: 'accountDisconnected', subscription: 'subscriptionHelp', denied: 'accountDenied', unavailable: 'accountFailed',
  custom: 'accountCustom',
} as const;
const problems = {
  timeout: 'accountTimeout', status: 'accountStatus', connection: 'accountConnection',
  credentials: 'accountCredentials', incomplete: 'accountIncomplete', unsupported: 'accountUnsupported', custom_endpoint: 'accountEndpoint',
} as const;

export function useAccountUsage(provider: string, days: number, enabled: boolean) {
  const query = useQuery({
    queryKey: ['ai-library-account-usage', provider, provider === 'deepseek' ? null : days],
    queryFn: ({ signal }) => apiGet<AccountUsage>('/api/ai-library/account-usage?' + new URLSearchParams({ provider, days: String(days) }), signal),
    enabled: enabled && Boolean(provider),
    retry: false,
    staleTime: 60_000,
  });
  const data = query.isError ? undefined : query.data;
  const unavailable = data?.kind === 'unavailable' ? data : undefined;
  const reason = unavailable?.reason;
  const messageKey = reason && problems[reason];
  return {
    organization: data?.kind === 'organization' ? data.tokens : null,
    balance: data?.kind === 'balance' ? data.balances.map(row =>
      new Intl.NumberFormat(interfaceLanguage, { style: 'currency', currency: row.currency, maximumFractionDigits: 8 }).format(Number(row.amount))).join(' · ') : '',
    note: data ? notes[data.kind] : query.isError ? 'accountFailed' : 'accountLoading',
    query,
    problem: unavailable ? messageKey ? t('settings:aiLibrary.usage.' + messageKey, { status: unavailable.status })
      : t('shell:requestError.fallback') : undefined,
    canRetry: Boolean(query.error || (unavailable && reason !== 'unsupported' && reason !== 'custom_endpoint')),
  };
}
