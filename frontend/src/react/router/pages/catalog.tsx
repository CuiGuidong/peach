/* The catalog's route element (ADR-0031, "the catalog is opened by the route tree on match"): mounts when the page group matches
 * `CATALOG_PATHS` (home, the three filter states, trash and junk files), rebuilds the catalog filters from the address
 * (`state` in `@peach/shell`), and hands the rest to the shell: search box, sidebar and top bar, the three top tiers, and
 * fetching (`ShellActions.catalog`).
 *
 * The element is keyed by page: home, the three filter states and the trash draw the same grid and share
 * one element; junk files are a separate page. Works with no backdrop and queue addresses (deep links,
 * refresh) also mount on this element. Changing filters, back/forward and a shell-requested reopen do not
 * re-mount; after each round of changes the element decides, in a microtask, which of the following to do,
 * in order:
 * - Details is stacked on top: if the entry recorded a backdrop (the page group matches on the backdrop) it
 *   does nothing and the page below keeps drawing; with no backdrop it fills in the catalog grid once
 *   (`ShellActions.catalog.fill`), leaving no skeleton forever loading beneath the details.
 * - The shell asks for a full reopen from the current address (`pageOpens` increments: startup, a deep-linked
 *   details closed and the page it came from filled back in, entering the trash from the admin bar): open the
 *   whole page.
 * - It receives a new page-open sequence number (back/forward, navigation the shell did not claim): open the
 *   whole page; on history navigation it reuses the filters and seed the entry saved, and rebuilds from the
 *   address when nothing is recorded. If the address carries `seed`, that is used.
 * - The shell claimed the written address (filter change, sort change, next batch, back to home): the shell
 *   already wrote the filters into `state`, so only refetch; when closing the details returns to the address
 *   it was covering and the filters did not change, do not refetch. If this page has never been opened (a
 *   back landing on details stacked over something else, so it was covered at mount time), open the whole
 *   page.
 * When `pageOpens` is still 0 the shell has not started routing and the element just sits mounted. At the
 * moment of mounting, depending on whether that history change was claimed, it counts as one of the latter
 * two; if the route root is mounted only after the shell has started routing, the moment of mounting counts
 * as the first kind.
 *
 * When `?state=ads` lands on home it does not open there; it is rewritten to the junk-files address (no entry
 * added) and the junk files page's element opens it from there. The target page immediately shows a waiting
 * state for the changing area; stable controls are not re-mounted. The decisions and rewrites run in a
 * microtask, avoiding the route root's commit phase. */
import { useContext, useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';

import { appSettingsStore } from '@peach/appearance';
import { isOverlayPath, navigationBackground, overlayTarget, peachHistory, shellNavigate } from '@peach/history';
import { cleanTagFilter, isCatalogPath, newSeed, ROUTE_STATES } from '@peach/legacy/core';
import { pageOpens, state, subscribeShell, writeShell, type CatalogFilters } from '@peach/shell';

import { junkPath, junkRoute } from '../../../junk-queue';
import { sortFromAddress } from '../../../sort-preferences';
import { pageNavigationReady, rememberPageState, restoredPageState, restoringPage } from '../../../history/page-navigation';
import { ShellActionsContext, useOpenEpoch } from '../router';
import type { CatalogShell, ShellActions } from '../shell-actions';
import { JavLibraryHeader } from '../../jav/jav-header';
import { CatalogFolders } from '../../catalog-folders/catalog-folders-page';
import { removeWallBootSkeleton } from '../../video-wall/wall-boot';

const readOpens = () => pageOpens;

/* Whether each history change was claimed, and which path it was on before the change. Listening starts at module load, ahead of the route root: what the route root's synchronous commit reads
   is already this change. `initialSeq` is the sequence number at load; if the mounted sequence number still equals it, the route root mounted this very page on attach. */
const initialSeq = peachHistory.navigation.seq;
let epoch = peachHistory.navigation.openEpoch;
let here = peachHistory.navigation.location.pathname;
let last = { seq: initialSeq, claimed: true, from: here };
peachHistory.listen((navigation) => {
  last = { seq: navigation.seq, claimed: navigation.openEpoch === epoch, from: here };
  epoch = navigation.openEpoch;
  here = navigation.location.pathname;
});

/* The moment the home page's `?state=ads` is rewritten into the junk files URL: taken away when the junk files page's element mounts, opening the full page. */
let junkRedirect = false;

/** Where the element last got to: its index, page-open sequence, reopen count, whether details was pressed over it at that moment, which address and which filter set the page group rendered,
 *  and whether this page had been opened. */
interface Seen {
  seq: number;
  epoch: number;
  opens: number;
  covered: boolean;
  address: string;
  filters: string;
  opened: boolean;
}

function seen(opened: boolean): Seen {
  const { seq, openEpoch, location } = peachHistory.navigation;
  const covered = isOverlayPath(location.pathname);
  const shown = navigationBackground() ?? location;
  const filters = state ?? {};
  return {
    seq, epoch: openEpoch, opens: pageOpens, covered, address: `${shown.pathname}${shown.search}`,
    filters: JSON.stringify(filters, Object.keys(filters).sort()), opened,
  };
}

/** Catalog filters rebuilt from the URL, written the same way as the shell's startup copy; the trash pins the status only and clears the other filters. Origin and thumbnails are not refetched from the URL. */
function filtersAt(pathname: string, search: string, entering: boolean, shell: CatalogShell): CatalogFilters {
  const previous: CatalogFilters = { ...state };
  const restored = restoredPageState<CatalogFilters>('catalog');
  if (restored) return { ...restored };
  if (pathname === '/trash') return { ...previous, creator: '', studio: '', tag: '', orient: '', state: 'trash', q: '' };
  const params = new URLSearchParams(search);
  const { defaultSort, defaultSortDirection } = appSettingsStore().value;
  return {
    ...previous,
    loc: params.get('loc') ?? shell.defaultLoc(),
    creator: params.get('creator') || '', studio: params.get('studio') || '',
    owner: params.get('owner') === 'none' ? 'none' : '',
    tag: cleanTagFilter(params.get('tag')), tag_match: params.get('tag_match') === 'any' ? 'any' : 'all',
    len: params.get('len') || '', dur_min: params.get('dur_min') || '', dur_max: params.get('dur_max') || '',
    orient: params.get('orient') || '',
    state: ROUTE_STATES[pathname] || params.get('state') || '',
    ...sortFromAddress(params.get('sort'), params.get('dir'), defaultSort, defaultSortDirection),
    seed: params.get('seed') || (entering ? newSeed() : previous.seed || newSeed()),
    q: params.get('q') || '', jav: params.get('jav') || '',
    performer: params.get('performer') || '', series: params.get('series') || '',
    browse: params.get('browse') === 'folders' || params.get('folder') ? 'folders' : '',
    folder: params.get('folder') || '', folder_recursive: params.get('folder_recursive') === '0' ? '0' : '',
  };
}

/** After clicking, first show the target skeleton and position by page; for history restoration, position after the loaded pagination lands. */
function openCatalog(load: () => void | Promise<void>): void {
  const seq = peachHistory.navigation.seq;
  rememberPageState('catalog', { ...state });
  const loading = load();
  const current = () => peachHistory.navigation.seq === seq;
  const results = () => document.querySelector('#grid');
  void pageNavigationReady(current, results(), { pending: true });
  void Promise.resolve(loading).then(() => pageNavigationReady(current, results()));
}

/** Which one this judgment round performs, and it performs it; `mark` becomes this moment. */
function settle(mark: Seen, actions: ShellActions): void {
  const was = { ...mark };
  const now = seen(was.opened);
  Object.assign(mark, now);
  const shell = actions.catalog;
  if (!shell || now.opens === 0) return;
  if (now.covered) {
    if (!navigationBackground()) shell.fill();
    return;
  }
  let entering = false;
  if (now.opens === was.opens) {
    if (now.epoch === was.epoch && was.opened) {
      if (now.seq === was.seq || (was.covered && now.address === was.address && now.filters === was.filters)) return;
      openCatalog(() => shell.load());
      return;
    }
    if (now.epoch !== was.epoch) entering = peachHistory.navigation.action === 'POP' && last.from !== '/';
  }
  const { pathname, search } = peachHistory.navigation.location;
  if (pathname === '/' && new URLSearchParams(search).get('state') === 'ads') {
    const { kind, view } = junkRoute(search);
    junkRedirect = true;
    shellNavigate(junkPath(kind, view), { replace: true });
    return;
  }
  const retitle = junkRedirect;
  junkRedirect = false;
  entering &&= pathname === '/' && !restoringPage();
  mark.opened = true;
  writeShell({ state: filtersAt(pathname, search, entering, shell) });
  openCatalog(() => shell.open(pathname, { entering, retitle }));
}

function CatalogOpen() {
  const actions = useContext(ShellActionsContext);
  const openEpoch = useOpenEpoch();
  const opens = useSyncExternalStore(subscribeShell, readOpens);
  const location = useLocation();
  const mark = useRef<Seen | null>(null);
  const live = useRef({ mounted: true, queued: false });
  useEffect(() => {
    const own = live.current;
    own.mounted = true;
    const now = seen(!isOverlayPath(peachHistory.navigation.location.pathname));
    /* Record at mount time: if the shell then asks for a reopen in the same round (`pageOpens` incremented), a microtask comparison can tell the two apart. */
    if (!now.covered && now.opens > 0) {
      if (junkRedirect || last.seq === initialSeq) now.opens = -1;
      else if (!last.claimed) now.epoch = -1;
      else now.seq = -1;
    }
    mark.current = now;
    return () => {
      own.mounted = false;
    };
    // Registers once per mount; later changes are queued into a microtask by the cell below.
  }, []);
  useEffect(() => {
    const own = live.current;
    if (own.queued || !actions) return;
    own.queued = true;
    queueMicrotask(() => {
      own.queued = false;
      if (own.mounted && mark.current) settle(mark.current, actions);
    });
  }, [openEpoch, opens, location, actions]);
  return null;
}

/** The element shared by the catalog's six paths: home, three filtered states, and trash share one key; junk files gets another; when the page group matches by background it takes the background's page.
 *  When the address-override parameter is not numeric (`/assets/abc`), nothing mounts: that is not a details entry, and nothing is painted beneath either. */
export function CatalogMatch() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (pathname !== '/wall') return;
    document.body.setAttribute('data-wall-open', '');
    document.documentElement.removeAttribute('data-wall-entry');
    const chrome = Array.from(document.querySelectorAll<HTMLElement>('header.top,#drawer,#main,#catalogFilter,#count,#javLibraryHeader,#feedNew'));
    const inert = chrome.map(node => node.inert);
    chrome.forEach(node => { node.inert = true });
    return () => {
      document.body.removeAttribute('data-wall-open');
      removeWallBootSkeleton();
      chrome.forEach((node, index) => { node.inert = inert[index] || false });
    };
  }, [pathname]);
  if (isOverlayPath(pathname) && !overlayTarget(pathname)) return null;
  return <>
    <CatalogOpen key={pathname === '/junk-files' ? '/junk-files' : '/'} />
    {isCatalogPath(pathname) ? <CatalogFolders /> : null}
  </>;
}

/** The JAV header is persistent; the shell toggles its visibility when the target content commits, and the old header isn't torn down during routing fetches. */
export function CatalogChrome() {
  const actions = useContext(ShellActionsContext);
  const host = document.getElementById('javLibraryHeader');
  return host && actions ? createPortal(<JavLibraryHeader navigate={actions.navigate}
    receipt={message => actions.receipt(message)} />, host) : null;
}
