import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import type { Browser } from 'playwright-core';
import { launch, VIEWPORTS } from './harness.ts';
import { openItemPage } from './item-fixture.ts';

describe('The shared note\'s text and anchor', () => {
  let browser: Browser;
  before(async () => { browser = await launch() });
  after(async () => { await browser.close() });
  for (const viewport of VIEWPORTS) {
    it(`${viewport.name} saved filter names read directly on hover`, async () => {
      const opened = await openItemPage(browser, '/', viewport, { ready: '[data-catalog-frame]' });
      try {
        await opened.page.route('**/api/library-shortcuts', route => route.fulfill({ json: {
          favorites: [], filters: [{ id: 'clear', name: 'HD library', href: '/?quality=hd' }],
        } }));
        await opened.page.locator('[data-shortcuts-trigger]').click();
        await opened.page.getByRole('tab', { name: 'Saved filters', exact: true }).click();
        const saved = opened.page.getByRole('link', { name: 'HD library', exact: true });
        await saved.hover();
        await opened.page.waitForTimeout(500);
        assert.equal(await saved.getAttribute('title'), null);
        assert.equal(await opened.page.locator('#board-control-tooltip:visible').count(), 0);
      } finally { await opened.close() }
    });
    it(`${viewport.name} full text needs no tooltip and truncated text offers the original`, async () => {
      const opened = await openItemPage(browser, '/', viewport, { ready: '[data-catalog-frame]' });
      try {
        await opened.page.evaluate(() => {
          const probe = document.createElement('div');
          probe.style.cssText = 'position:fixed;left:30px;top:200px;z-index:9999;background:white;display:grid;gap:20px;width:280px';
          probe.innerHTML = '<a id="tip-readable" href="#" title="HD library">HD library</a><a id="tip-clipped" href="#" title="This library filter needs the full name to be readable" style="display:block;width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">This library filter needs the full name to be readable</a>';
          document.body.append(probe);
        });
        await opened.page.locator('#tip-readable').focus();
        await opened.page.waitForTimeout(100);
        assert.equal(await opened.page.locator('#board-control-tooltip:visible').count(), 0);
        assert.equal(await opened.page.locator('#tip-readable').getAttribute('title'), null);
        assert.equal(await opened.page.locator('#tip-readable').getAttribute('aria-describedby'), null);
        await opened.page.locator('#tip-clipped').focus();
        await opened.page.locator('#board-control-tooltip').waitFor({ state: 'visible' });
        assert.equal(await opened.page.locator('#board-control-tooltip').textContent(), 'This is a favorite filter that needs the full name visible');
        assert.equal(await opened.page.locator('#tip-readable').getAttribute('title'), 'HD library');
      } finally { await opened.close() }
    });
    it(`${viewport.name} nested-control tooltips follow the mouse target`, async () => {
      const opened = await openItemPage(browser, '/', viewport, { ready: '[data-catalog-frame]' });
      try {
        await opened.page.evaluate(() => {
          const probe = document.createElement('div');
          probe.title = 'Parent note';
          probe.style.cssText = 'position:fixed;left:30px;top:200px;z-index:9999;background:white;display:flex;gap:20px';
          probe.innerHTML = '<button id="tip-parent">Outer</button><button id="tip-child" title="Child description">Inner</button>';
          document.body.append(probe);
        });
        await opened.page.locator('#tip-parent').focus();
        await opened.page.locator('#board-control-tooltip').waitFor({ state: 'visible' });
        await opened.page.locator('#tip-child').hover();
        await opened.page.waitForFunction(() => document.querySelector('#board-control-tooltip')?.textContent === 'Child note');
        assert.equal(await opened.page.locator('#tip-parent').getAttribute('aria-label'), null);
      } finally { await opened.close() }
    });
    it(`${viewport.name} dialog icon tooltips follow the visible anchor`, async () => {
      const opened = await openItemPage(browser, '/', viewport, { ready: '[data-catalog-frame]' });
      try {
        await opened.page.evaluate(() => {
          const modal = document.createElement('dialog');
          modal.id = 'tip-modal';
          modal.style.cssText = 'width:300px;height:200px;padding:40px;transform:translateY(20px)';
          modal.innerHTML = '<span id="tip-contents" title="Filter video sources" style="display:contents"><button id="tip-icon" aria-label="Sources" style="width:40px;height:40px"><svg width="20" height="20"><circle cx="10" cy="10" r="8"/></svg></button></span>';
          document.body.append(modal); modal.showModal();
        });
        await opened.page.locator('#tip-icon').focus();
        await opened.page.locator('#board-control-tooltip').waitFor({ state: 'visible' });
        const geometry = await opened.page.evaluate(() => {
          const tip = document.querySelector('#board-control-tooltip')!.getBoundingClientRect();
          const icon = document.querySelector('#tip-icon')!.getBoundingClientRect();
          return { tip: { x: tip.x, y: tip.y, w: tip.width, h: tip.height }, icon: { x: icon.x, y: icon.y, w: icon.width, h: icon.height }, inModal: !!document.querySelector('#tip-modal #board-control-tooltip') };
        });
        assert(geometry.inModal);
        assert(Math.abs(geometry.tip.x + geometry.tip.w / 2 - geometry.icon.x - geometry.icon.w / 2) <= 1, JSON.stringify(geometry));
        assert(Math.abs(geometry.tip.y + geometry.tip.h + 8 - geometry.icon.y) <= 1, JSON.stringify(geometry));
      } finally { await opened.close() }
    });
  }
});
