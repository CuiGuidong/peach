/* Login page: one Auth Card, an access password box, "Stay signed in" and "Sign in".
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

import { AuthCard } from '../auth-card';
import type { PageData } from '../page-data';

/** The line under the field when the passphrase is wrong. Rate-limit and bad-parameter reasons come from the server. */
export const WRONG_PASSWORD = 'Access password is incorrect';

export function LoginPage({ data }: { data: PageData }) {
  const [reason, setReason] = useState(data.error || (data.invalid === 'true' ? WRONG_PASSWORD : ''));
  return (
    <AuthCard title="Peach">
      <form method="post" action="/login" aria-labelledby="auth-card-title" className="flex flex-col gap-6">
        <Input id="login-token" label="Access password" name="token" type="password" maxLength={256}
          autoComplete="current-password" autoFocus isRequired
          isInvalid={reason ? true : undefined} onChange={() => setReason('')}
          hint={reason ? <span role="alert">{reason}</span> : undefined} />
        <input type="hidden" name="next" value={data.next || '/'} />
        <Checkbox name="days" value="30" defaultSelected>Keep me signed in</Checkbox>
        <Button type="submit" className="w-full">Sign in</Button>
      </form>
    </AuthCard>
  );
}
