/* The top-bar search's dropdown and keyboard (`search` island).
 *
 * State lives in a mutable bin that lives with the component; native events on the input mutate it and re-render: `#q` is the
 * shell's node, events can only attach via `addEventListener`, and the handlers must read this moment's value, not the one in
 * the closure from attach time. Keystrokes during IME composition read the native event's `isComposing`: arrows are picking
 * candidates and Enter is committing a character, none of which belong to this menu.
 *
 * BoardUI's registry has no Combobox or Command (`https://www.boardui.com/r/registry.json`, 2026-10-01), and React Aria's
 * ComboBox would require drawing the input itself with options as listbox options: the delete-record keys inside options, the
 * recent-covers key, and the row of tabs at the top would not fit. So this follows the legacy layer's behavior item by item:
 * wrap-around selection with up/down, Enter submits, Escape closes the dropdown before clearing text, and Enter on empty
 * input uses the suggested word in the placeholder. */
import { useLayoutEffect, useReducer, useRef, type MouseEvent, type ReactNode } from 'react';
import { avatarInner } from '@peach/card-art';

import { apiGet, apiSend } from '../../api';
import { entityDisplayName } from '../../core/entity-names';
import { useEntityNames } from '../use-entity-names';
import { TabCount } from '../components/board-tabs';
import { PillTabList } from '../components/pill-tabs';
import {
  menuModel, shufflePicks, SUGGEST_DEBOUNCE, SUGGEST_EACH, SUGGEST_ONE_KIND, SUGGEST_PROFILE_KINDS, fold,
  type MenuModel, type MenuSection, type SearchApi, type SearchOption, type SearchProps, type SuggestCard,
  type SuggestGroup, type SuggestItem, type SuggestResponse, type SuggestTab,
} from './search';

interface Store {
  dismissed: boolean;
  history: string[];
  pool: string[];
  poolRequest: number;
  recommendations: SuggestGroup[];
  recommendationRequest: number;
  /** The word in the input box and the shuffled recommendations at the moment of rendering. */
  query: string;
  picks: string[];
  suggestFor: string;
  groups: SuggestGroup[];
  tabs: SuggestTab[];
  suggestRequest: number;
  /** The term from the most recent untyped completion request: late-arriving data on focus is not re-requested while the box still holds that term. */
  asked: string;
  timer: number;
  kind: string;
  active: number;
  /** This selection was moved with the keyboard: after rendering, scroll that row into view. */
  reveal: boolean;
  /** Picked a category: after rendering, scroll the dropdown back to the top. */
  rewind: boolean;
}

const emptyStore = (): Store => ({
  dismissed: false, history: [], pool: [], poolRequest: 0, recommendations: [], recommendationRequest: 0, query: '', picks: [], suggestFor: '', groups: [], tabs: [],
  suggestRequest: 0, asked: '', timer: 0, kind: '', active: -1, reveal: false, rewind: false,
});

const modelOf = (s: Store): MenuModel => menuModel({
  query: s.query, history: s.history, picks: s.picks, suggestFor: s.suggestFor, groups: s.groups, tabs: s.tabs,
  kind: s.kind,
  recommendations: s.recommendations,
});
const hasContent = (m: MenuModel) => !!(m.tabs || m.recent || m.left.length || m.right.length || m.empty);

const Sprite = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><use href={`#i-${name}`} /></svg>
);

export function SearchPage(props: SearchProps) {
  const latest = useRef(props);
  latest.current = props;
  const store = useRef<Store | null>(null);
  store.current ??= emptyStore();
  const s = store.current;
  const root = useRef<HTMLDivElement>(null);
  const [, bump] = useReducer((n: number) => n + 1, 0);

  /* The handler is built once and attached to the input; it reads `latest` and the store's values at this moment. */
  const ops = useRef<ReturnType<typeof createOps> | null>(null);
  ops.current ??= createOps(() => latest.current, s, () => root.current?.closest<HTMLElement>('[data-search-menu]') ?? null, bump);
  const op = ops.current;

  useLayoutEffect(() => {
    const { input } = latest.current;
    const onInput = (event: Event) => op.input(event as InputEvent);
    const onStart = () => latest.current.helpers.composing();
    const onKey = (event: KeyboardEvent) => op.key(event);
    const onFocus = () => op.focus();
    const onClick = () => { if (s.dismissed) op.focus() };
    input.addEventListener('input', onInput);
    input.addEventListener('compositionend', onInput);
    input.addEventListener('compositionstart', onStart);
    input.addEventListener('keydown', onKey);
    input.addEventListener('focus', onFocus);
    input.addEventListener('click', onClick);
    const api: SearchApi = { close: op.close };
    latest.current.expose(api);
    return () => {
      input.removeEventListener('input', onInput);
      input.removeEventListener('compositionend', onInput);
      input.removeEventListener('compositionstart', onStart);
      input.removeEventListener('keydown', onKey);
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('click', onClick);
      clearTimeout(s.timer);
      s.recommendationRequest++;
      latest.current.expose(null);
    };
  }, [op, s]);

  useLayoutEffect(() => {
    const menu = root.current?.closest<HTMLElement>('[data-search-menu]');
    if (s.rewind && menu) menu.scrollTop = 0;
    s.rewind = false;
    if (s.reveal) root.current?.querySelector('[data-search-option][data-active]')?.scrollIntoView({ block: 'nearest' });
    s.reveal = false;
  });

  const model = modelOf(s);
  const limit = props.historyLimit;
  const option = (entry: SearchOption): ReactNode => (
    <Row key={`${entry.type}:${entry.value}:${entry.index}`} entry={entry} active={entry.index === s.active}
      helpers={props.helpers} onPick={op.pick} onPeek={op.peek} onRemove={op.remove} />
  );
  const section = (group: MenuSection) => (
    <section key={group.kind ?? group.label} data-search-group="" data-kind={group.kind}>
      <h3>{group.label}{group.href ? (
        <a href={group.href} onMouseDown={keep} onClick={event => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
          event.preventDefault(); op.openPath(group.href!);
        }}>{group.action || 'View all'}</a>
      ) : null}</h3>
      {group.kind ? <div data-search-items="">{group.options.map(option)}</div> : group.options.map(option)}
      {group.more ? option(group.more) : null}
    </section>
  );
  const columns = (left: MenuSection[], right: MenuSection[]) => (left.length || right.length ? (
    <div data-search-results="" data-split={left.length && right.length ? '' : undefined}>
      {left.length ? <div data-search-col="">{left.map(section)}</div> : null}
      {right.length ? <div data-search-col="">{right.map(section)}</div> : null}
    </div>
  ) : null);
  return (
    <div ref={root} data-search-root="" data-search-recommendations={!s.query && s.recommendations.length ? '' : undefined} data-history-limit={limit}>
      {model.tabs ? <Tabs tabs={model.tabs} kind={s.kind} onPick={op.pickKind} wire={props.helpers.wireScroller} /> : null}
      {s.query && model.recent ? section(model.recent) : null}
      {columns(model.left, model.right)}
      {!s.query && model.recent ? section(model.recent) : null}
      {model.empty ? <p data-search-empty="" role="status">Nothing found</p> : null}
    </div>
  );
}

function createOps(props: () => SearchProps, s: Store, menu: () => HTMLElement | null, bump: () => void) {
  const input = () => props().input;
  const focused = () => document.activeElement === input();
  const readHistory = () => s.history.slice(0, props().historyLimit);
  const writeHistory = (list: string[]) => { s.history = list.slice(0, props().historyLimit) };

  const loadHistory = async () => {
    const limit = props().historyLimit;
    if (!limit) { s.history = []; return }
    try {
      const data = await apiGet<{ items?: unknown }>(`/api/search-history?limit=${limit}`);
      s.history = Array.isArray(data.items) ? data.items.map(String) : [];
    } catch {
      // If the record cannot be read, use the copy on hand: search itself is unaffected.
    }
  };
  /* Search itself is read-only; while the database is temporarily read-only, history degrades to this page's memory, and a failed write never blocks searching. */
  const rememberSearch = (query: string) => {
    if (!query || !props().historyLimit) return;
    writeHistory([query, ...readHistory().filter((value) => fold(value) !== fold(query))]);
    void apiSend('/api/search-history', { query }).catch(() => null);
  };
  const loadPool = async () => {
    const request = ++s.poolRequest;
    s.pool = [];
    const field = input();
    field.dataset.suggestion = '';
    field.placeholder = 'Search the library';
    try {
      const names = await props().helpers.pool();
      if (request !== s.poolRequest) return;
      s.pool = names;
      const pick = names[Math.floor(Math.random() * names.length)] || '';
      field.dataset.suggestion = pick;
      field.placeholder = pick || 'Search the library';
    } catch {
      // When recommendations are unavailable, typing a search still works.
    }
  };
  const loadRecommendations = async () => {
    if (!props().helpers.recommendations) return;
    const request = ++s.recommendationRequest;
    try {
      const groups = await props().helpers.recommendations!();
      if (request !== s.recommendationRequest) return;
      s.recommendations = groups;
      if (focused() && !input().value.trim()) paint();
    } catch {
      // If reading recommendations fails, search still works; keep the recommendations already in hand.
    }
  };
  /* Group order and each group's name come from `/api/suggest`; copy them verbatim. Slow stale responses must not overwrite newer ones: when typing two characters in a row,
     the earlier request can easily return later. */
  const loadSuggestions = async (query: string, kind = '') => {
    const request = ++s.suggestRequest;
    if (!kind) s.asked = query;
    try {
      const data = await apiGet<SuggestResponse>(`/api/suggest?q=${encodeURIComponent(query)}`
        + (kind ? `&kind=${kind}` : '') + `&limit=${SUGGEST_ONE_KIND}`);
      if (request !== s.suggestRequest) return;
      s.suggestFor = data.q || '';
      s.groups = data.groups || [];
      if (!kind && s.groups.length > 1) {
        s.groups = s.groups.map((group) => ({ ...group, items: group.items.slice(0, SUGGEST_EACH) }));
      }
      if (!kind) s.tabs = s.groups.map(({ kind: k, label, total }) => ({ kind: k, label, total }));
    } catch {
      if (request === s.suggestRequest) { s.suggestFor = query; s.groups = [] }
    }
  };

  const isOpen = () => { const el = menu(); return !!el && !el.hidden };
  const close = () => {
    s.dismissed = true;
    s.recommendationRequest++;
    const el = menu();
    if (el) props().helpers.dismiss(el);
    s.active = -1;
    bump();
  };
  /** Paints from the current input and the data on hand: opens when there is something, collapses when there is not. Reshuffling on every paint is recommended. */
  const paint = () => {
    if (s.dismissed) return;
    s.query = input().value.trim();
    s.picks = s.query ? [] : shufflePicks(s.pool, readHistory());
    s.active = -1;
    const el = menu();
    if (el) {
      if (hasContent(modelOf(s))) props().helpers.present(el);
      else props().helpers.dismiss(el);
    }
    bump();
  };
  /* Schedule completion on every keystroke, but send only one request. First repaint from what is already in hand; when the request returns, check focus,
     and stop opening suggestions after a page click or a move to another control. */
  const refresh = () => {
    s.active = -1;
    // A new term resets to "All": the category picked for the previous term may have no hits under this one.
    s.kind = '';
    clearTimeout(s.timer);
    const query = input().value.trim();
    if (!query) { s.suggestFor = ''; s.groups = [] }
    if (isOpen()) paint();
    if (!query) return;
    s.timer = window.setTimeout(() => void loadSuggestions(query).then(() => { if (focused()) paint() }), SUGGEST_DEBOUNCE);
  };
  const pickKind = (kind: string) => {
    const query = input().value.trim();
    if (!query || kind === s.kind) return;
    s.kind = kind;
    clearTimeout(s.timer);
    paint();
    s.rewind = true;
    void loadSuggestions(query, kind).then(() => { if (focused() && s.kind === kind) paint() });
  };
  const options = () => (isOpen() ? modelOf(s).options : []);
  const move = (step: number) => {
    const list = options();
    if (!list.length) return false;
    s.active = (s.active + step + list.length) % list.length;
    s.reveal = true;
    bump();
    return true;
  };
  const runSearch = (useSuggestion: boolean, committed: boolean) => {
    const field = input();
    let query = field.value.trim();
    if (useSuggestion && !query) { query = field.dataset.suggestion || ''; field.value = query }
    if (committed) rememberSearch(query);
    props().actions.search(query);
  };
  /* People, companies, and series open straight into the profile page, no detour through search: searching by name yields a screen of videos, but the user clicked "this person".
     The name is what gets recorded in search history, so it can be found again the next time focus lands. */
  const openEntity = (kind: string, name: string) => {
    input().blur();
    rememberSearch(name);
    props().actions.openEntity(kind, name);
  };
  /** Selects a row; clicking it and pressing Enter land in the same place. Videos open detail, those with a profile page open the profile, the rest search this term. */
  const choose = (entry: SearchOption) => {
    if (entry.type === 'suggest' && entry.item.followMedia && entry.item.id && props().actions.openFollow) {
      input().blur();
      props().actions.openFollow!(entry.item.id, entry.item.followMedia, entry.item.mediaIndex ?? null);
      return;
    }
    if (entry.type === 'suggest' && entry.item.href) { openPath(entry.item.href); return }
    if (entry.type === 'more') { runSearch(false, true); input().blur(); return }
    if (entry.type === 'suggest' && entry.kind === 'asset' && entry.item.id != null) {
      input().blur();
      props().actions.openItem(entry.item.id);
      return;
    }
    if (entry.type === 'suggest' && SUGGEST_PROFILE_KINDS.has(entry.kind)) { openEntity(entry.kind, entry.value); return }
    input().value = entry.value;
    runSearch(false, true);
  };
  const openPath = (path: string) => { close(); input().blur(); props().actions.openPath?.(path) };
  const pick = (entry: SearchOption) => { close(); choose(entry) };
  const peek = (card: SuggestCard) => { close(); input().blur(); props().actions.openItem(card.id) };
  const remove = async (value: string) => {
    await apiSend('/api/search-history', { operation: 'remove', query: value }).catch(() => null);
    writeHistory(readHistory().filter((row) => fold(row) !== fold(value)));
    // With the rows gone, the keyboard selection index can no longer point back at the same item, so reset to zero. Recommendations do not reshuffle: deleting one record while a different batch of recommendations appears looks like the list jumped on its own.
    s.active = -1;
    bump();
  };

  const key = (event: KeyboardEvent) => {
    if (event.isComposing) return;
    const field = input();
    if (event.key === 'Escape') {
      if (isOpen()) { close(); event.preventDefault(); return }
      if (field.value) {
        props().helpers.clearField(field);
        s.active = -1;
        event.preventDefault();
        refresh();
        return;
      }
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (move(event.key === 'ArrowDown' ? 1 : -1)) event.preventDefault();
      return;
    }
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const picked = options()[s.active];
    close();
    // When an item is selected, search with it verbatim; only with no selection does it fall back to 'empty input plus Enter uses the suggested term'.
    if (picked) {
      choose(picked);
      if (picked.type !== 'suggest' || picked.kind !== 'asset') field.blur();
      return;
    }
    runSearch(true, true);
    field.blur();
  };
  const onInput = (event: InputEvent) => {
    if (event.isComposing) return;
    s.dismissed = false;
    props().helpers.typed(input());
    refresh();
  };
  const focus = () => {
    s.dismissed = false;
    void loadRecommendations();
    void Promise.all([loadHistory(), loadPool()]).then(() => {
      if (!focused()) return;
      // When arriving with `?q=` and focusing back into the input, the field already holds a word and completions should follow it. Until these two pieces of data arrive
      // The user may have finished typing and that word's completion was already asked; the same word is never asked twice.
      paint();
      if (input().value.trim() !== s.asked) refresh();
    });
  };
  return { input: onInput, key, focus, close, pick, peek, remove, pickKind, openPath };
}

function Tabs({ tabs, kind, onPick, wire }: {
  tabs: SuggestTab[]; kind: string; onPick(kind: string): void; wire(row: Element | null): void;
}) {
  const row = useRef<HTMLDivElement>(null);
  // When tabs overflow on narrow screens the right edge fades, showing there is more to swipe to.
  useLayoutEffect(() => { wire(row.current) }, [wire, tabs]);
  const tab = (k: string, label: string, total?: number) => (
    <button key={k || 'all'} type="button" role="tab" data-suggest-kind={k} aria-selected={kind === k}
      data-pill-selected={kind === k ? '' : undefined} data-pill-variant="gray"
      // Tab selection keeps input focus, so typing and arrow keys keep working.
      onMouseDown={(event) => event.preventDefault()} onClick={() => onPick(k)}>
      {label}{total ? <TabCount value={total} /> : null}
    </button>
  );
  return (
    <PillTabList ref={row} data-search-tabs="" data-pill-nav="" role="tablist" aria-label="Completion by kind">
      {tab('', 'All')}
      {tabs.map((t) => tab(t.kind, t.label, t.total))}
    </PillTabList>
  );
}

const keep = (event: MouseEvent) => event.preventDefault();

function Row({ entry, active, helpers, onPick, onPeek, onRemove }: {
  entry: SearchOption; active: boolean; helpers: SearchProps['helpers'];
  onPick(entry: SearchOption): void; onPeek(card: SuggestCard): void; onRemove(value: string): Promise<void>;
}) {
  useEntityNames();
  const shared = {
    'data-search-value': entry.value, 'data-active': active ? '' : undefined,
    onClick: (event: MouseEvent) => {
      if ((event.target as Element).closest('[data-remove-history]')) return;
      onPick(entry);
    },
  };
  if (entry.type === 'more') {
    return (
      <button type="button" data-search-option="more" {...shared} onMouseDown={keep}>
        View all {entry.total.toLocaleString()} videos
        <Sprite name="chevron-right" />
      </button>
    );
  }
  if (entry.type !== 'suggest') {
    return (
      <div data-search-option="" {...shared}>
        <Sprite name={entry.type === 'history' ? 'history' : 'sparkles'} />
        <span>{entry.value}</span>
        {entry.type === 'history' ? (
          /* preventDefault on press so the delete key does not steal focus from the input: stealing triggers `#q`'s blur, whose handler
             collapses the whole dropdown 140ms later, so "delete one history entry" effectively equals "close the whole dropdown". */
          <button type="button" data-remove-history={entry.value} aria-label={`Delete history ${entry.value}`}
            onMouseDown={keep} onClick={(event) => { event.stopPropagation(); void onRemove(entry.value) }}>
            <Sprite name="x" />
          </button>
        ) : null}
      </div>
    );
  }
  const { item, kind } = entry;
  const opens = SUGGEST_PROFILE_KINDS.has(kind) ? kind : undefined;
  if (['asset', 'jav', 'post', 'photo', 'release'].includes(kind)) {
    /* Opening a video is a detail, not a search term: the whole title goes back into the search box, and the next search falls through because any single
       character fails to match. */
    const byline = [item.who, item.code ? item.title : ''].filter(Boolean).join(' · ');
    return (
      <button type="button" data-search-option="work" data-open-item={kind === 'asset' ? item.id : undefined} {...shared} onMouseDown={keep}>
        <Cover card={item.card} helpers={helpers} />
        <span data-search-meta=""><span data-search-name=""><span>{item.value}</span></span><span data-search-sub="">{byline}</span></span>
      </button>
    );
  }
  const matched = item.matched ? <span data-search-matched="">{item.matched}</span> : null;
  if (kind === 'performer' || kind === 'creator' || kind === 'author') {
    // Fit as many recent videos as the row allows; in a narrow dropdown the whole row collapses and the data is still provided.
    const works = item.works ?? [];
    const sub = item.subtitle || [`${(item.n ?? 0).toLocaleString()} videos`, item.agency].filter(Boolean).join(' · ');
    return (
      <div data-search-option="person" data-open-entity={opens} {...shared} onMouseDown={keep}>
        <Face item={item} kind={kind} />
        <button type="button" data-search-person="" data-search-meta="" aria-label={`View ${entityDisplayName(kind, item.value)}`}>
          <span data-search-name=""><span>{entityDisplayName(kind, item.value)}</span>{matched}</span>
          <span data-search-sub="">{sub}</span>
        </button>
        {works.length ? (
          <span data-search-peeks="">
            {works.map((card) => (
              <button key={card.id} type="button" data-open-work={card.id} aria-label={`Open ${card.code || item.value}`}
                onMouseDown={keep} onClick={(event) => { event.stopPropagation(); onPeek(card) }}>
                <Cover card={card} helpers={helpers} />
              </button>
            ))}
          </span>
        ) : null}
      </div>
    );
  }
  return (
    <div data-search-option="" data-open-entity={opens} {...shared}>
      {kind === 'studio' || kind === 'agency' ? <Face item={item} kind={kind} /> : null}
      <span>{item.value}</span>
      {matched}
      {item.n ? <span data-search-n="">{item.n.toLocaleString()}</span> : null}
    </div>
  );
}

/** Small images and cards share one framing setup: the card cell (`.pic`) and the image inside it both belong to the legacy layer; this only decides its width. */
function Cover({ card, helpers }: { card: SuggestCard | null | undefined; helpers: SearchProps['helpers'] }) {
  return <span data-search-pic="" dangerouslySetInnerHTML={{ __html: helpers.coverHtml(card) }} />;
}

/** Facades are always round chips, following the index page's same fallback chain: people use entity image → representative video avatar; labels use the logo; agencies use the
 *  official site's round favicon; failing all that, the initial letter. Dozens per screen, so use derived assets. */
function Face({ item, kind }: { item: SuggestItem; kind: string }) {
  if (item.avatarHtml) return <span data-search-face="" dangerouslySetInnerHTML={{ __html: item.avatarHtml }} />;
  const ref = { id: item.entity_id as number | null | undefined, has_image: item.has_image as boolean | undefined,
    image_version: item.image_version as string | undefined, avatar_focus: item.avatar_focus,
    avatar_stand_in: item.avatar_stand_in as boolean | undefined };
  const html = avatarInner(item.value, ref, (item.rep as number | null | undefined) || null, kind,
    (item.mark as number | null | undefined) || null, item.has_logo ? item.value : '', 'icon', undefined, true);
  return <span data-search-face="" data-kind={kind} dangerouslySetInnerHTML={{ __html: html }} />;
}
