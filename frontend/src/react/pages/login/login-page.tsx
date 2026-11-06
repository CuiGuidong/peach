/* 登录页：一张 Auth Card，一个密码框、「保持登录」与「登录」。
 *
 * 画哪一种由服务端判定后经 `data-mode` 交进来，页面不自己猜：没有这个键是有访问策略的部署，框里填
 * 访问密码；`legacy` 是还没有访问策略的非 Docker 部署，框里填自动生成的访问口令，下面一句说用
 * `peach token` 查看；`setup` 是 Docker 还没有访问策略、来源是本机或局域网，换成访问设置；`denied`
 * 是同样情况但来源不满足，先说去哪里打开，再给访问口令登录（ADR-0149）。
 *
 * The form submits natively: `POST /login` receives `token` and `next`, carries `days=30` when "Stay signed in" is checked,
 * and the session cookie is set by its 303; the page sends no requests through script. On wrong password (401), too many
 * attempts (429) or an invalid stay-signed-in duration (400), the server returns the same shell with the reason handed in via
 * `data-invalid` or `data-error` under the password box: the box is marked `aria-invalid`, the reason is announced by
 * `role="alert"`, and focus lands in the box. Editing the box's contents clears the reason: BoardUI's Input uses native
 * validation, and a form marked with an error cannot submit. */
import { useState } from 'react';

import { Button } from '@/components/base/buttons/button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { Input } from '@/components/base/input/input';

import { Note } from '../../components/note';
import { AuthCard } from '../auth-card';
import type { PageData } from '../page-data';
import { FIRST_ACCESS_DENIED } from '../first-access';
import { AccessSetup } from './access-setup';

/** 口令不对时框下那句话。限流与参数错误的原因由服务端给。 */
export const WRONG_PASSWORD = '访问密码不正确';
export const WRONG_TOKEN = '访问口令不正确';

const tokenHint = (docker: boolean) => (
  <>在{docker ? '宿主机' : '运行 Peach 的环境中'}执行 <code className="wrap-anywhere">{docker ? 'docker compose exec peach peach token' : 'peach token'}</code> 查看。</>
);

export function LoginPage({ data }: { data: PageData }) {
  if (data.mode === 'setup') return <AccessSetup data={data} />;
  return <LoginForm data={data} />;
}

function LoginForm({ data }: { data: PageData }) {
  const token = data.mode === 'legacy' || data.mode === 'denied';
  const [reason, setReason] = useState(data.error || (data.invalid === 'true' ? (token ? WRONG_TOKEN : WRONG_PASSWORD) : ''));
  return (
    <AuthCard title="Peach">
      {data.mode === 'denied' ? <Note tone="warning">{FIRST_ACCESS_DENIED}</Note> : null}
      <form method="post" action="/login" aria-labelledby="auth-card-title" className="flex flex-col gap-6">
        <Input id="login-token" label={token ? '访问口令' : '访问密码'} name="token" type="password" maxLength={256}
          autoComplete="current-password" autoFocus={data.mode !== 'denied'} isRequired
          isInvalid={reason ? true : undefined} onChange={() => setReason('')}
          hint={reason ? <span role="alert">{reason}</span> : token ? tokenHint(data.mode === 'denied') : undefined} />
        <input type="hidden" name="next" value={data.next || '/'} />
        <Checkbox name="days" value="30" defaultSelected>Keep me signed in</Checkbox>
        <Button type="submit" className="w-full">Sign in</Button>
      </form>
    </AuthCard>
  );
}
