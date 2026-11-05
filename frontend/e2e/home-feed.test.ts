/* The homepage's row of new releases (the `feed-new` island): two keys on the card, collapse to hide the whole block, filters persist when switched, and toggling the collection switch refetches.
 *
 * Where the skeleton appears and on which pages is in `home-loading.test.ts` and `smoke.test.ts`; cover framing in
 * `feed-cover.test.ts`; the profile page's row shares this component, with fetching and "just subscribed, wait for the round
 * to finish then refetch" in `test/react/entity-page.test.tsx`. */
import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';

import type { Browser, Page } from 'playwright-core';

import { expectBody, launch, settle, visit, VIEWPORTS, type Visit } from './harness.ts';
import { openPanel, stubServer, type Server } from './settings-fixture.ts';

const DESKTOP = VIEWPORTS.find((viewport) => !viewport.mobile)!;

const item = (id: number) => ({
  id, code: `EXM-${String(id).padStart(3, '0')}`, title: `Example new release ${id}`, link: null, cover_url: null,
  has_cover: false, cover_frame: null, poster_box: null, release_date: '2026-09-30',
  studio: null, performers: null, read: false, ignored: false, scrape_error: null,
});

interface Feed { reads: string[]; writes: Record<string, unknown>[]; items: number[] }

/** A stub for each of the discovery list's and the two buttons' write endpoints; after mounting the stubs the home page reloads once, so it is caught from the very first fetch. */
async function openHome(browser: Browser): Promise<Visit & { feed: Feed; server: Server }> {
  const opened = await visit(browser, '/', DESKTOP);
  const { page } = opened;
  const feed: Feed = { reads: [], writes: [], items: [1, 2] };
  await page.route(/\/api\/feeds\/discoveries\?/, (route) => {
    feed.reads.push(new URL(route.request().url()).search);
    return route.fulfill({ json: { ok: true, more: false, items: feed.items.map(item) } });
  });
  await page.route((url) => url.pathname === '/api/feeds/discovery', (route) => {
    feed.writes.push(JSON.parse(route.request().postData() || '{}'));
    return route.fulfill({ json: { ok: true } });
  });
  const server = await stubServer(page);
  await page.reload({ waitUntil: 'load' });
  await expectBody(page, '/', [page.locator('#feedNew [data-feed-id="2"]')]);
  await settle(page);
  return { ...opened, feed, server };
}

/** The card's two buttons hide in the hover toolbar: hover first, then click. */
async function press(page: Page, id: number, action: string): Promise<void> {
  const card = page.locator(`#feedNew [data-feed-id="${id}"]`);
  await card.hover();
  await card.locator(`[data-feed-action="${action}"]`).click();
}

async function until(page: Page, condition: () => boolean, message: string): Promise<void> {
  for (let tries = 0; tries < 100 && !condition(); tries += 1) await page.waitForTimeout(50);
  assert.ok(condition(), message);
}

describe('Home\'s new releases row', () => {
  let browser: Browser;
  before(async () => { browser = await launch() });
  after(async () => { await browser?.close() });

  it('Marking as watched keeps the card in place and fades it, hiding removes it on the spot, and dismissing the whole block hides it; the request body carries only that one item', { timeout: 60_000 }, async () => {
    const opened = await openHome(browser);
    const { page, feed } = opened;
    try {
      // During page entry the catalog may paint twice (settings and the library list arriving late), and each pass may trigger another fetch; only which copy was fetched is measured.
      assert.ok(feed.reads.length >= 1, 'The home row does not fetch data');
      assert.deepEqual(new Set(feed.reads), new Set(['?limit=12']), 'The home row is not split per person and only carries counts');
      await press(page, 2, 'read');
      await page.locator('#feedNew [data-feed-id="2"].isread').waitFor({ timeout: 5_000 });
      await press(page, 1, 'ignore');
      await page.locator('#feedNew [data-feed-id="1"]').waitFor({ state: 'detached', timeout: 5_000 });
      assert.equal(await page.locator('#feedNew').isHidden(), false, 'Should not hide with one image left');
      assert.deepEqual(feed.writes, [{ action: 'read', ids: [2] }, { action: 'ignore', ids: [1] }]);
      await press(page, 2, 'ignore');
      await page.locator('#feedNew').waitFor({ state: 'hidden', timeout: 5_000 });
      assert.equal(await page.locator('#feedNew [data-feed-id]').count(), 0);
      assert.deepEqual(opened.problems, []);
    } finally {
      await opened.close();
    }
  });

  it('Changing filters on the catalog page keeps the new releases and the host; toggling the collection switch in settings refetches exactly once', { timeout: 60_000 }, async () => {
    const opened = await openHome(browser);
    const { page, feed, server } = opened;
    try {
      const host = await page.locator('#feedNew').elementHandle();
      const booted = feed.reads.length;
      feed.items = [1, 2, 3];
      await page.evaluate(() => {
        history.pushState({}, '', '/?state=fresh');
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
      await settle(page);
      assert.equal(feed.reads.length, booted, 'Catalog filters never change the new-releases scope');
      assert.deepEqual(await page.locator('#feedNew [data-feed-id]').evaluateAll(nodes =>
        nodes.map(node => node.getAttribute('data-feed-id'))), ['1', '2']);
      assert.equal(await page.locator('#feedNew .feednewskeleton').count(), 0, 'No skeleton should be laid again while already on the catalog page');
      assert.equal(await host!.evaluate((node) => node.isConnected && node.id === 'feedNew'), true);

      feed.items = [4];
      await openPanel(page, 'JAV & new releases');
      const toggle = page.locator('#feedHideGroupSetting');
      const was = await toggle.isChecked();
      await toggle.click();
      await until(page, () => server.posts.some((post) => post.path === '/api/settings'
        && post.body.feedHideGroupCompilations === !was), 'The compilation switch never wrote back to the server');
      await until(page, () => feed.reads.length === booted + 1,
        `Toggling the collection switch should trigger exactly one refetch, got ${feed.reads.length - booted}`);
      await page.locator('#feedNew [data-feed-id="4"]').waitFor({ state: 'attached', timeout: 5_000 });
      assert.equal(await page.locator('#feedNew [data-feed-id]').count(), 1);
      assert.deepEqual(opened.problems, []);
    } finally {
      await opened.close();
    }
  });
});
