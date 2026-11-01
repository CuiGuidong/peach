/* Top bar search (the `search` island): what goes in the dropdown panel (`menuModel`/`shufflePicks`), plus several behaviors visible only in timing;
 * placeholder suggestions, Enter on empty input, opening details from a video item, a slow stale completion, a completion that returns after blur. Arrow keys,
 * composition, Escape, and history removal are verified in a real browser; see `e2e/search.test.ts`. */
import { act } from 'react';
import { describe, expect, it, vi, type Mock } from 'vitest';

import { SearchPage } from '../../src/react/search/search-page';
import {
  PICKS, SUGGEST_DEBOUNCE, menuModel, shufflePicks, type SearchApi, type SearchProps, type SuggestResponse, type SuggestGroup,
} from '../../src/react/search/search';

import { mount, pending, settle } from './render';

const performer = { kind: 'performer', label: 'Performers', total: 1, items: [{ value: '七海ひな', n: 12 }] };
const tag = { kind: 'tag', label: 'Tags', total: 1, items: [{ value: '七海の夏', n: 3 }] };
const asset = { kind: 'asset', label: 'Videos', total: 1, items: [{ value: 'ABW-101', id: 7, code: 'ABW-101', who: '七海ひな' }] };

describe('What goes in the dropdown', () => {
  const base = { history: [], picks: [], suggestFor: '', groups: [], tabs: [], kind: '' };

  it('With input, search history filters by that word after folding width and case', () => {
    const model = menuModel({ ...base, query: 'studio', history: ['ＳＴＵＤＩＯ Ａ', '七海ひな'] });
    expect(model.recent?.options.map((o) => o.value)).toEqual(['ＳＴＵＤＩＯ Ａ']);
  });

  it('Completion honors only this word\'s own copy, and search history steps aside once a category is picked', () => {
    const groups = [performer, tag];
    const tabs = groups.map(({ kind, label, total }) => ({ kind, label, total }));
    const stale = menuModel({ ...base, query: '七海', history: ['七海'], suggestFor: 'seven', groups, tabs });
    expect([stale.left, stale.right, stale.tabs]).toEqual([[], [], null]);

    const fresh = menuModel({ ...base, query: '七海', history: ['七海'], suggestFor: '七海', groups, tabs });
    expect(fresh.tabs?.map((t) => t.kind)).toEqual(['performer', 'tag']);
    expect(fresh.options.map((o) => o.value)).toEqual(['七海', '七海ひな', '七海の夏']);

    const one = menuModel({ ...base, query: '七海', history: ['七海'], suggestFor: '七海', groups, tabs, kind: 'tag' });
    expect(one.recent).toBeNull();
    expect(one.options.map((o) => o.value)).toEqual(['七海の夏']);
  });

  it('Only when the completions for this term have returned empty does it count as "no results"; ones still in flight do not count', () => {
    expect(menuModel({ ...base, query: 'zzz', suggestFor: 'zzz' }).empty).toBe(true);
    expect(menuModel({ ...base, query: 'zzz', suggestFor: 'zz' }).empty).toBe(false);
    expect(menuModel({ ...base, query: '七海', suggestFor: '七海', groups: [performer] }).empty).toBe(false);
    expect(menuModel({ ...base, query: '' }).empty).toBe(false);
  });

  it('The video category sits alone in the right column; with only one category hit there are no tabs', () => {
    const model = menuModel({ ...base, query: 'ABW', suggestFor: 'ABW', groups: [asset], tabs: [asset] });
    expect([model.left.length, model.right[0]?.kind, model.tabs]).toEqual([0, 'asset', null]);
  });

  it('When the video count exceeds the preview, the full results entry sorts after videos and joins keyboard selection', () => {
    const group = { ...asset, total: 53 };
    const model = menuModel({ ...base, query: 'ABW', suggestFor: 'ABW', groups: [group], tabs: [group] });
    expect(model.right[0]?.more).toEqual({ index: 1, type: 'more', value: 'ABW', total: 53 });
    expect(model.options.map((o) => o.type)).toEqual(['suggest', 'more']);
  });

  it('Recommendations never re-suggest searched words, a few at a time', () => {
    const pool = ['Drama', 'Single videos', 'High quality', 'Creampie', 'Big breasts', 'Beautiful girl', 'Exclusive'];
    const picks = shufflePicks(pool, ['High quality'], () => 0.5);
    expect(picks).toHaveLength(PICKS);
    expect(picks).not.toContain('High quality');
  });
});

interface Stage {
  input: HTMLInputElement;
  menu: HTMLElement;
  actions: { [K in keyof SearchProps['actions']]: Mock<NonNullable<SearchProps['actions'][K]>> };
  posts: unknown[];
  api: SearchApi | null;
  key(key: string): Promise<void>;
  typeInto(value: string): Promise<void>;
}

/** The shell side: a static input and a panel carrying `data-search-menu`, with the island mounted inside the panel. */
async function stage({ pool = ['Drama'], loadPool = async () => pool,
  recommendations = undefined as (() => Promise<SuggestGroup[]>) | undefined,
  suggest = async (q: string): Promise<SuggestResponse> => ({ q, groups: [] }) } = {}): Promise<Stage> {
  const posts: unknown[] = [];
  vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
    const path = new URL(url, 'http://peach.test');
    let body: unknown = { ok: true };
    if (path.pathname === '/api/search-history' && init?.method === 'POST') posts.push(JSON.parse(String(init.body)));
    else if (path.pathname === '/api/search-history') body = { items: [] };
    else if (path.pathname === '/api/suggest') body = await suggest(path.searchParams.get('q') || '');
    return { ok: true, status: 200, json: async () => body };
  }));
  const input = document.createElement('input');
  const menu = document.createElement('div');
  menu.dataset.searchMenu = '';
  menu.hidden = true;
  document.body.append(input, menu);
  const actions: Stage['actions'] = {
    search: vi.fn<SearchProps['actions']['search']>(),
    openItem: vi.fn<SearchProps['actions']['openItem']>(),
    openEntity: vi.fn<SearchProps['actions']['openEntity']>(),
    openPath: vi.fn<NonNullable<SearchProps['actions']['openPath']>>(),
    openFollow: vi.fn<NonNullable<SearchProps['actions']['openFollow']>>(),
  };
  const out: Stage = {
    input, menu, actions, posts, api: null,
    key: (key) => act(async () => {
      input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
    }),
    typeInto: (value) => act(async () => {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }),
  };
  const helpers: SearchProps['helpers'] = {
    pool: loadPool, recommendations, coverHtml: card => `<span class="pic"><img src="/cover?code=${card?.code || ''}" alt=""></span>`,
    present: (el) => { el.hidden = false }, dismiss: (el) => { el.hidden = true },
    wireScroller: () => {}, typed: () => {}, composing: () => {}, clearField: (el) => { el.value = '' },
  };
  const host = await mount(<SearchPage input={input} historyLimit={10} actions={actions} helpers={helpers}
    expose={(api) => { out.api = api }} />);
  menu.append(host);
  return out;
}

const debounce = () => act(async () => { vi.advanceTimersByTime(SUGGEST_DEBOUNCE) });

describe('Timing on the input field', () => {
  it('Empty search suggestions show covers; keyboard-selecting a new release opens video details', async () => {
    const s = await stage({ recommendations: async () => [{ kind: 'release', label: 'Subscribe to new releases',
      items: [{ value: 'ABW-101', href: '/works/ABW-101', card: { id: 88, code: 'ABW-101' } }],
      href: '/subscriptions', action: 'Manage subscriptions',
    }] });
    await act(async () => s.input.focus());
    await settle();
    expect(s.menu.querySelector('[data-search-option="work"] img')).not.toBeNull();
    expect(s.menu.querySelector('h3 a')?.getAttribute('href')).toBe('/subscriptions');
    await s.key('ArrowDown');
    await s.key('Enter');
    expect(s.actions.openPath).toHaveBeenCalledWith('/works/ABW-101');
    expect(s.actions.openItem).not.toHaveBeenCalled();
    expect(s.actions.search).not.toHaveBeenCalled();
  });

  it('Image suggestions arriving after the menu closed never reopen it', async () => {
    const answer = pending<SuggestGroup[]>();
    const s = await stage({ recommendations: () => answer.answer });
    await act(async () => s.input.focus());
    await settle();
    await act(async () => s.api?.close());
    await answer.release([{ kind: 'asset', label: 'Video recommendations', items: [{ value: 'Videos', id: 11 }] }]);
    await settle();
    expect(s.menu.hidden).toBe(true);
  });

  it('Completions arriving after the menu closed stay collapsed, and further typing can reveal them', async () => {
    vi.useFakeTimers();
    const answer = pending<SuggestResponse>();
    const s = await stage({ suggest: (q) => q === 'seven' ? answer.answer
      : Promise.resolve({ q, groups: [performer] }) });
    await act(async () => s.input.focus());
    await settle();
    await s.typeInto('seven');
    await debounce();
    await act(async () => s.api?.close());
    await answer.release({ q: 'seven', groups: [tag] });
    await settle();
    expect(s.menu.hidden).toBe(true);
    await s.typeInto('七海');
    await debounce();
    await settle();
    expect(s.menu.hidden).toBe(false);
  });

  it('After Escape closes it, a late-arriving recommendation pool stays collapsed; refocusing shows suggestions again', async () => {
    vi.useFakeTimers();
    const answer = pending<string[]>();
    const s = await stage({ loadPool: () => answer.answer,
      suggest: async (q) => ({ q, groups: [performer] }) });
    await act(async () => s.input.focus());
    await s.typeInto('七海');
    await debounce();
    await settle();
    expect(s.menu.hidden).toBe(false);
    await s.key('Escape');
    expect(s.menu.hidden).toBe(true);
    await answer.release(['Drama']);
    await settle();
    expect(s.menu.hidden).toBe(true);
    await act(async () => { s.input.blur(); s.input.focus() });
    await settle();
    expect(s.menu.hidden).toBe(false);
    await s.key('Escape');
    await act(async () => s.input.click());
    await settle();
    expect(s.menu.hidden).toBe(false);
  });
  it('Picking a follow image enters image details with that attachment', async () => {
    const s = await stage({ recommendations: async () => [{ kind: 'photo', label: 'Followed images',
      items: [{ value: 'Image videos', id: 88, href: '/posts/88', followMedia: 'images', mediaIndex: 2,
        card: { id: 88, thumb_url: '/image-thumb' } }],
    }] });
    await act(async () => s.input.focus());
    await settle();
    await s.key('ArrowDown');
    await s.key('Enter');
    expect(s.actions.openFollow).toHaveBeenCalledWith(88, 'images', 2);
    expect(s.actions.openPath).not.toHaveBeenCalled();
  });

  it('Single-kind video previews request twenty entries, and the full-results entry carries the current search term', async () => {
    vi.useFakeTimers();
    const s = await stage({ suggest: async (q) => ({ q, groups: [{ ...asset, total: 53 }] }) });
    await act(async () => s.input.focus());
    await settle();
    await s.typeInto('ABW');
    await debounce();
    await settle();
    const requests = vi.mocked(fetch).mock.calls.map(([url]) => String(url));
    expect(requests.some((url) => url.includes('/api/suggest?q=ABW&limit=20'))).toBe(true);
    await act(async () => s.menu.querySelector<HTMLButtonElement>('[data-search-option="more"]')!.click());
    expect(s.actions.search).toHaveBeenCalledWith('ABW');
    expect(s.actions.openItem).not.toHaveBeenCalled();
    expect(s.menu.hidden).toBe(true);
  });
  it('On focus the placeholder becomes a word that actually returns results; pressing Enter on empty input searches it and records it in search history', async () => {
    const s = await stage({ pool: ['Hot spring trip'] });
    await act(async () => s.input.focus());
    await settle();
    expect([s.input.placeholder, s.input.dataset.suggestion]).toEqual(['Hot spring trip', 'Hot spring trip']);
    expect(s.menu.hidden).toBe(false);
    await s.key('Enter');
    await settle();
    expect(s.actions.search).toHaveBeenCalledWith('Hot spring trip');
    expect(s.input.value).toBe('Hot spring trip');
    expect(s.posts).toEqual([{ query: 'Hot spring trip' }]);
    expect(s.menu.hidden).toBe(true);
  });

  it('With a video selected, Enter opens it instead of searching the whole title', async () => {
    vi.useFakeTimers();
    const s = await stage({ suggest: async (q) => ({ q, groups: [asset] }) });
    await act(async () => s.input.focus());
    await settle();
    await s.typeInto('ABW');
    await debounce();
    await settle();
    await s.key('ArrowDown');
    await s.key('Enter');
    expect(s.actions.openItem).toHaveBeenCalledWith(7);
    expect([s.actions.search, s.actions.openEntity].map((fn) => fn.mock.calls.length)).toEqual([0, 0]);
    expect(s.input.value).toBe('ABW');
  });

  it('When typing two characters quickly, the earlier request returning late does not overwrite the later one', async () => {
    vi.useFakeTimers();
    const answers = new Map<string, ReturnType<typeof pending<SuggestResponse>>>();
    const s = await stage({ suggest: (q) => { const p = pending<SuggestResponse>(); answers.set(q, p); return p.answer } });
    await act(async () => s.input.focus());
    await settle();
    await s.typeInto('seven');
    await debounce();
    await s.typeInto('七海');
    await debounce();
    await answers.get('七海')!.release({ q: '七海', groups: [performer, tag] });
    await settle();
    await answers.get('seven')!.release({ q: 'seven', groups: [tag] });
    await settle();
    const values = [...s.menu.querySelectorAll('[data-search-option]')].map((row) => row.getAttribute('data-search-value'));
    expect(values).toEqual(['七海ひな', '七海の夏']);
  });

  it('The focus-time suggestion pool returns later than typing, and never re-asks for the same word again', async () => {
    vi.useFakeTimers();
    const asked: string[] = [];
    const slowPool = pending<string[]>();
    const s = await stage({ loadPool: () => slowPool.answer,
      suggest: async (q) => { asked.push(q); return { q, groups: [performer] } } });
    await act(async () => s.input.focus());
    await s.typeInto('七海');
    await debounce();
    await settle();
    expect(asked).toEqual(['七海']);
    await slowPool.release(['Drama']);
    await debounce();
    await settle();
    expect(asked).toEqual(['七海']);
    expect(s.menu.hidden).toBe(false);
  });

  it('Input during composition does not query completions; it queries only after composition, since a half-typed pinyin would search a word that does not exist', async () => {
    vi.useFakeTimers();
    const asked: string[] = [];
    const s = await stage({ suggest: async (q) => { asked.push(q); return { q, groups: [] } } });
    await act(async () => s.input.focus());
    await settle();
    await act(async () => {
      s.input.value = 'zhon';
      s.input.dispatchEvent(new InputEvent('input', { bubbles: true, isComposing: true }));
    });
    await debounce();
    await settle();
    expect(asked).toEqual([]);
    await act(async () => {
      s.input.value = 'medium';
      s.input.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, data: 'medium' }));
    });
    await debounce();
    await settle();
    expect(asked).toEqual(['medium']);
  });

  it('By the time completion returns focus has moved on, and the dropdown never reopens', async () => {
    vi.useFakeTimers();
    const answer = pending<SuggestResponse>();
    const s = await stage({ suggest: () => answer.answer });
    await act(async () => s.input.focus());
    await settle();
    await s.typeInto('七海');
    await debounce();
    await act(async () => { s.input.blur(); s.api?.close() });
    await answer.release({ q: '七海', groups: [performer] });
    await settle();
    expect(s.menu.hidden).toBe(true);
  });
});
