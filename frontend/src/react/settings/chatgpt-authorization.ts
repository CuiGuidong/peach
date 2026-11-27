import { t } from '../../i18n';

export function chatgptAuthorizationIssue(code?: string) {
  const key = code === 'permission_required' ? 'oauthPermissionRequired'
    : code === 'expired' ? 'oauthExpired'
    : code === 'network' ? 'oauthNetwork'
    : 'oauthError';
  return { copyKey: 'settings.aiLibrary.' + key, message: t('settings:aiLibrary.' + key) };
}
