import { describe, expect, it } from 'vitest';

import { ErrorPage } from '../../src/react/pages/error/error-page';
import { LoginPage, WRONG_PASSWORD } from '../../src/react/pages/login/login-page';
import { click, mount, type } from './render';

const tokenInput = (root: ParentNode) => root.querySelector<HTMLInputElement>('input[name="token"]');
const alerts = (root: ParentNode) => [...root.querySelectorAll('[role="alert"]')];
const entries = (root: ParentNode) => [...new FormData(root.querySelector('form')!).entries()];

describe('Login page', () => {
  it('The native form submits token, next, and days=30 when checked', async () => {
    const host = await mount(<LoginPage data={{ next: '/stats?x=1' }} />);
    const form = host.querySelector('form')!;
    expect(form.getAttribute('method')).toBe('post');
    expect(form.getAttribute('action')).toBe('/login');
    const input = tokenInput(host)!;
    expect(input.type).toBe('password');
    expect(input.required).toBe(true);
    expect(input.maxLength).toBe(256);
    expect(input.getAttribute('autocomplete')).toBe('current-password');
    expect(document.activeElement).toBe(input);
    expect(input.getAttribute('aria-invalid')).toBeNull();
    expect(alerts(host)).toHaveLength(0);
    await type(input, 'secret');
    expect(entries(host)).toEqual([['token', 'secret'], ['next', '/stats?x=1'], ['days', '30']]);
    await click(host.querySelector('input[name="days"]'));
    expect(entries(host)).toEqual([['token', 'secret'], ['next', '/stats?x=1']]);
    expect(form.checkValidity()).toBe(true);
  });

  it('Fall back to home when next is absent', async () => {
    const host = await mount(<LoginPage data={{}} />);
    expect(entries(host)).toContainEqual(['next', '/']);
  });

  it('With a wrong passphrase the field is marked invalid, the reason is announced to screen readers, focus lands in the field, and editing clears it', async () => {
    const host = await mount(<LoginPage data={{ next: '/', invalid: 'true' }} />);
    const input = tokenInput(host)!;
    expect(document.activeElement).toBe(input);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    const [alert] = alerts(host);
    expect(alert?.textContent).toBe(WRONG_PASSWORD);
    const described = (input.getAttribute('aria-describedby') ?? '').split(' ');
    expect(described.some((id) => document.getElementById(id)?.contains(alert!))).toBe(true);
    await type(input, 'again');
    expect(input.getAttribute('aria-invalid')).toBeNull();
    expect(alerts(host)).toHaveLength(0);
    expect(host.querySelector('form')!.checkValidity()).toBe(true);
  });

  it('Rate-limit and bad-param reasons write to the same place', async () => {
    for (const reason of ['Too many attempts; retry in a minute', 'Pick a valid stay signed in duration']) {
      const host = await mount(<LoginPage data={{ next: '/', error: reason }} />);
      const input = tokenInput(host)!;
      expect(input.getAttribute('aria-invalid')).toBe('true');
      expect(alerts(host).map((node) => node.textContent)).toEqual([reason]);
      host.remove();
    }
  });
});

describe('Error page', () => {
  const cases = [
    { status: '403', title: 'Cannot open here', lede: 'Open the configuration on the computer running Peach' },
    { status: '404', title: '404', lede: null },
    { status: '409', title: 'Can\'t do that right now', lede: 'Finish first-time setup first' },
    { status: '500', title: 'Something went wrong', lede: 'The service errored' },
  ];
  for (const { status, title, lede } of cases) {
    it(`${status}'s title and note`, async () => {
      const detail = lede ?? 'No page at this address.';
      const host = await mount(<ErrorPage data={{ status, detail }} />);
      expect(host.querySelector('h1')?.textContent).toBe(title);
      expect(document.title).toBe(`Peach · ${title}`);
      expect(host.textContent?.includes(detail)).toBe(lede !== null);
      const home = host.querySelector('a');
      expect(home?.getAttribute('href')).toBe('/');
      expect(home?.textContent).toBe('Back to home');
    });
  }
});
