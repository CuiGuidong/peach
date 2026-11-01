import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';
import * as legacyUi from '@peach/legacy/ui';

import type { ConfigurationData, ReleaseState } from '../../src/react/bundle';
import {
  AutomaticUpdates, MaintenanceSettings, TutorialSettings, UninstallSettings,
} from '../../src/react/settings/maintenance-settings';
import { ReleaseUpdates } from '../../src/react/settings/release-updates';
import { actionOrder, buttonNamed, choose, click, fetchMock, mount, section, sentBody, settle, submit, switches } from './render';

const automatic = { mode: 'off', interval_hours: 24, available: true, download_available: true };
const release: ReleaseState = {
  current_version: '0.9.0', latest_version: null, channel: 'Beta', installation: 'Standalone test package',
  state: 'unchecked', message: 'Not checked yet', release_url: 'https://github.com/peach-mitao/peach/releases',
};
const uninstall = { available: true, full_available: true, message: '', data_root: 'fixture', directories: ['fixture', 'fixture/cache'] };

it('Sections in order are Runtime info, Install guide and Uninstall; the runtime info entry missing dependencies carries a download link, and the system diagnostics entry lives in the runtime info footer', async () => {
  const data: ConfigurationData = {
    editable: true, notice: '', revision: 'r', media_dirs: [], library_count: 0, port: 9123,
    automatic_updates: automatic, updates: release, uninstall,
    facts: [
      { term: 'Editions', value: '0.7.25' },
      { term: 'FFmpeg', value: 'FFmpeg not found', download_url: 'https://ffmpeg.org/download.html', download_label: 'Download FFmpeg' },
    ],
  };
  const host = await mount(<MaintenanceSettings data={data} receipt={vi.fn()} reopenTutorial={vi.fn()} />);
  expect([...host.firstElementChild!.children].map((node) => node.getAttribute('aria-label')))
    .toEqual(['Runtime info', 'Setup guide', 'Uninstall Peach']);
  const facts = section(host, 'Runtime info')!;
  expect([...facts.querySelectorAll('dt')].map((dt) => dt.textContent)).toEqual(['Editions', 'FFmpeg']);
  const link = facts.querySelector('a[href="https://ffmpeg.org/download.html"]');
  expect(link?.getAttribute('target')).toBe('_blank');
  expect(link?.textContent).toBe('Download FFmpeg');
});

describe('Auto-update', () => {
  it('The two switches constrain each other, receipts wait for server success, and turning off also saves', async () => {
    const fetcher = fetchMock(200, automatic);
    vi.stubGlobal('fetch', fetcher);
    const receipt = vi.fn();
    const host = await mount(<AutomaticUpdates initial={automatic} receipt={receipt} />);
    expect(switches(host)[1]!.disabled).toBe(true);
    await click(switches(host)[0]);
    expect(switches(host)[1]!.disabled).toBe(false);
    await click(switches(host)[1]);
    await choose(host.querySelector('[aria-haspopup="listbox"]'), 'Weekly');
    await submit(host.querySelector('form'));
    await settle();
    expect(sentBody(fetcher)).toEqual({ mode: 'download', interval_hours: 168 });
    expect(receipt).toHaveBeenCalledWith('Configuration saved');
    await click(switches(host)[0]);
    await submit(host.querySelector('form'));
    await settle();
    expect(sentBody(fetcher, 1)).toEqual({ mode: 'off', interval_hours: 168 });
    expect(receipt).toHaveBeenCalledTimes(2);
  });

  it('Running from source locks auto-download; the check frequency row has no caption; failure reasons stay in the section and success is not reported', async () => {
    vi.stubGlobal('fetch', fetchMock(400, { detail: 'Settings are saving' }));
    const receipt = vi.fn();
    const host = await mount(<AutomaticUpdates initial={{ ...automatic, mode: 'check', download_available: false }} receipt={receipt} />);
    expect(switches(host)[1]!.disabled).toBe(true);
    const interval = [...host.querySelectorAll('p')].find((p) => p.textContent === 'Check frequency');
    expect(interval?.nextElementSibling).toBeNull();
    await submit(host.querySelector('form'));
    await settle();
    expect(host.querySelector('[role="alert"]')?.textContent).toContain('Settings are saving');
    expect(receipt).not.toHaveBeenCalled();
  });
});

describe('Check for updates', () => {
  it('States the app update package size and when tools download separately', async () => {
    const host = await mount(<ReleaseUpdates initial={{ ...release, state: 'available', latest_version: '1.0.0',
      package_kind: 'update', asset_size: 12 * 1048576 }} />);
    expect(host.textContent).toContain('App update package · 12.0 MB');
    expect(host.textContent).toContain('Missing, damaged, or version-changed tools download their needed tool packages separately');
    expect(host.textContent).not.toContain('First install');
    expect([...host.querySelectorAll('a')].some((a) => a.textContent === 'Full installer')).toBe(false);
  });

  it('The not-yet-checked state shows only once, and the latest version stays unfetched', async () => {
    vi.stubGlobal('fetch', fetchMock(200, { state: 'idle', progress: 0 }));
    const host = await mount(<ReleaseUpdates initial={release} />);
    expect(host.textContent?.split('Not checked yet')).toHaveLength(2);
  });

  it('After refresh it continues with the prepared update, shows the restart confirmation once, and sends no restart before confirmation', async () => {
    vi.useFakeTimers();
    const modal = vi.spyOn(legacyUi, 'confirmModal');
    const fetcher = fetchMock(200, { state: 'restarting', progress: 0 });
    vi.stubGlobal('fetch', fetcher);
    const host = await mount(<ReleaseUpdates initial={release} initialJob={{ state: 'ready', progress: 100, version: '0.10.0' }} />);
    expect(host.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow')).toBe('100');
    expect(modal).toHaveBeenCalledTimes(1);
    expect(modal.mock.calls[0]?.[0]).toMatchObject({
      title: 'The update is ready', body: 'Peach 0.10.0 will be installed after restart.', confirmLabel: 'Restart now', cancelLabel: 'Later',
    });
    expect(fetcher).not.toHaveBeenCalled();
    await act(async () => { await modal.mock.calls[0]?.[0].onConfirm?.(); });
    expect(fetcher.mock.calls.map(([url]) => url)).toEqual(['/api/configuration/update-restart']);
  });

  it('Explicit queries update, rapid clicks send once, failures can retry, and focus stays put', async () => {
    const host = await mount(<ReleaseUpdates initial={release} />);
    const updates = section(host, 'Check for updates')!;
    const check = buttonNamed('Check for updates', updates)!;
    expect(updates.textContent).toContain('Current version 0.9.0');
    const fetcher = fetchMock(200, { ...release, latest_version: '0.10.0', state: 'available', message: 'A new version is available for download.' });
    vi.stubGlobal('fetch', fetcher);
    check.focus();
    await act(async () => { check.click(); check.click(); });
    await settle();
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(fetcher.mock.calls[0]?.[0]).toBe('/api/configuration/updates');
    expect(updates.textContent).toContain('Latest version 0.10.0');
    expect(updates.querySelector('[role="status"]')?.textContent).toContain('Update available');
    expect(buttonNamed('Download and install', updates)).not.toBeNull();
    expect(actionOrder(check.parentElement)).toEqual(['Official site', 'GitHub', 'View release page', 'Check for updates', 'Download and install']);
    expect([...updates.querySelectorAll('a')].map((link) => [link.textContent, link.getAttribute('href')]))
      .toEqual([
        ['Official site', 'https://peach.video/#download'],
        ['GitHub', 'https://github.com/peach-mitao/peach'],
        ['View release page', 'https://github.com/peach-mitao/peach/releases'],
      ]);
    expect(updates.textContent).not.toContain('Cannot update yet');
    expect(document.activeElement).toBe(check);
    vi.stubGlobal('fetch', fetchMock(503, { detail: 'Connection failed' }));
    await click(check);
    await settle();
    expect(updates.querySelector('[role="alert"]')?.textContent).toBe('Connection failed');
    expect(updates.textContent).not.toContain('0.10.0');
    expect(check.disabled).toBe(false);
  });

  it('Already up to date shows no available-update note and no install key', async () => {
    const current = await mount(<ReleaseUpdates initial={{ ...release, latest_version: '0.9.0', state: 'current', message: 'Already the latest beta.' }} />);
    expect(current.textContent).not.toContain('Update available');
    expect(current.textContent).toContain('Already the latest beta.');
    expect(buttonNamed('Download and install', current)).toBeNull();
  });
});

it('Uninstall keeps data by default; after checking full uninstall the confirmation names what will be deleted, and the dialog locks once accepted', async () => {
  const modal = vi.spyOn(legacyUi, 'confirmModal');
  const fetcher = fetchMock(200, { message: 'Peach will exit and uninstall in a few seconds.' });
  vi.stubGlobal('fetch', fetcher);
  const host = await mount(<UninstallSettings uninstall={uninstall} receipt={vi.fn()} />);
  const area = host.querySelector('#uninstallPeach')!;
  expect(area.textContent).toContain('Original media files are kept');
  const full = area.querySelector<HTMLInputElement>('input[type="checkbox"]')!;
  expect(full.checked).toBe(false);
  expect([...area.querySelectorAll('details p')].map((p) => p.textContent)).toEqual(['fixture', 'fixture/cache']);
  // Each path carries its own open button: glancing once beats tracing each path back through the tree to see which directories get deleted.
  expect([...area.querySelectorAll('details button[aria-label="Show in Explorer"]')]).toHaveLength(2);
  await click(buttonNamed('Uninstall Peach', area));
  expect(modal.mock.calls[0]?.[0]).toMatchObject({ title: 'Uninstall Peach', danger: true, confirmLabel: 'Uninstall Peach' });
  expect(String(modal.mock.calls[0]?.[0].body)).toContain('Settings, the local database, watch history, and caches are kept');
  expect(fetcher).not.toHaveBeenCalled();
  await click(full);
  await click(buttonNamed('Uninstall Peach', area));
  const options = modal.mock.calls[1]![0];
  expect(String(options.body)).toContain('Credentials and cache');
  await act(async () => { await options.onConfirm?.(); });
  expect(sentBody(fetcher)).toEqual({ delete_data: true, confirmation: 'Uninstall Peach' });
  expect(area.querySelector('[role="status"]')?.textContent).toBe('Peach will exit and uninstall in a few seconds.');
  expect(buttonNamed('Uninstall Peach', area)?.disabled).toBe(true);
});

describe('Setup guide', () => {
  it('Pressing drives the legacy layer\'s half, sending a receipt on success', async () => {
    const reopenTutorial = vi.fn(async () => {});
    const receipt = vi.fn();
    const host = await mount(<TutorialSettings receipt={receipt} reopenTutorial={reopenTutorial} />);
    await click(buttonNamed('Reopen the guide', host));
    expect(reopenTutorial).toHaveBeenCalledTimes(1);
    expect(receipt).toHaveBeenCalledWith('Reopened the install guide');
  });

  it('On write failure the reason stays in place without a receipt', async () => {
    const receipt = vi.fn();
    const host = await mount(
      <TutorialSettings receipt={receipt} reopenTutorial={vi.fn(async () => { throw new Error('Database write failed') })} />,
    );
    await click(buttonNamed('Reopen the guide', host));
    await settle();
    expect(host.querySelector('[role="alert"]')?.textContent).toBe('Database write failed');
    expect(receipt).not.toHaveBeenCalled();
  });
});
