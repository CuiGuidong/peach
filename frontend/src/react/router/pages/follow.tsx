/* The follows and playlists route elements (ADR-0031): mount when the page group matches these two `BROWSE_ROUTES` entries,
 * open that page by address, and render into `#stats`. The elements render nothing themselves: pages register into `#stats`
 * via `openManagedRoute` and are rendered by `ManagedSurface`.
 *
 * When they open, same as the index page (`usePageOpen`): once each on mount, on taking a page-open epoch (back/forward and
 * unclaimed jumps), and on the shell asking for a reopen at the current address (`pageOpens` +1 in `@peach/shell`); while
 * `pageOpens` is still 0 the shell has not started routing and the element only mounts; if details are stacked on it at that
 * moment (the page group matches on background) nothing happens, and when details close, the page opens only if it is not
 * already rendered.
 *
 * The follows page doesn't key by generation; when it comes back, the shell restores the filter, sampling seed, and refresh generation (`refresh`) by address:
 * - If the follows page is still rendered in `#stats`, restore it in place and push props, without bumping the refresh generation just for entering the page.
 * - If it's not rendered, commit cached content as-is without spreading the loading skeleton; only the first fetch spreads the skeleton. Loaded pagination reuses the cache within the same tab,
 *   and the shared navigation entry smoothly restores the saved position; the first entry returns to the top.
 * Only a deliberate re-entry causes the shell to swap the seed and refresh generation. Closing follows details to return to the list is claimed by the shell, which writes the address and pushes only the filter, with the element staying put. When a deep link goes directly into follows details, the page group has no background, so this
 * element isn't mounted, and the list only opens after details is closed. When back/forward lands on follows details stacked on the list but the list isn't rendered (another page was visited in between), hand off to the shell to yield
 * `#stats` (`ShellActions.follow.ground`), and don't draw the list.
 *
 * The playlists page reopens fully on every open and fetches the newest copy. While on the page, when the shell asks for a
 * reread (the top bar's "Shuffle"), write a new refresh generation (`playlistsRevision`) that the element pushes to the
 * rendered page; the page refetches without remounting.
 *
 * Neither element tears its page down on unmount: switching to management or the index page lets those claim the surface and
 * tear it down; when the profile page stacks over, the shell only hides `#stats` and it is still needed on return. */
import { useContext, useEffect, useRef, useSyncExternalStore } from 'react';

import { managedEntry, openManagedRoute, peachHistory, updateManagedRoute } from '@peach/history';
import { playlistsRevision, subscribeShell } from '@peach/shell';
import { pageNavigationReady, rememberPageState, restoredPageState } from '../../../history/page-navigation';
import { followFeedQuery, type FollowFeedProps } from '../../follow-feed/follow-feed';
import { queryClient } from '../../query';
import { managementSkeletonHtml, paintManagementPlaceholder } from '../../../management-placeholder';

import { ShellActionsContext, useOpenEpoch } from '../router';
import type { ShellActions } from '../shell-actions';
import { usePageOpen } from './index-entity';

const statsHost = () => document.getElementById('stats');
const readPlaylistsRevision = () => playlistsRevision;

/* ── Follows ── */

async function openFollow(actions: ShellActions, live: () => boolean) {
  const stats = statsHost();
  const shell = actions.follow;
  if (!stats || !shell) return;
  const restored = restoredPageState<Pick<FollowFeedProps, 'view' | 'seed' | 'revision'>>('follow');
  const shown = shell.refresh(restored);
  const props = shell.props();
  rememberPageState('follow', { view: props.view, seed: props.seed, revision: props.revision });
  if (shown) return;
  const cached = queryClient.getQueryData(followFeedQuery(props.view, props.revision).queryKey) !== undefined;
  if (!cached) {
    actions.surfaceChanged('follow', '/follow');
    paintManagementPlaceholder(stats, shell.skeleton());
    void pageNavigationReady(live, stats, { pending: true });
  }
  await openManagedRoute('/follow', props, { container: stats, isCurrent: live,
    beforePlace: cached ? () => actions.surfaceChanged('follow', '/follow') : undefined });
  if (live()) void pageNavigationReady(live, stats.querySelector('[data-filter-frame]'));
}

/* What is drawn and shown inside `#stats` is the follows page. */
function followShown(): boolean {
  const stats = statsHost();
  const entry = stats ? managedEntry(stats) : null;
  return !!stats && !stats.hidden && !!entry && entry.path === '/follow' && entry.host.isConnected;
}

/** The follows page elements. */
export function FollowMatch() {
  const actions = useContext(ShellActionsContext);
  usePageOpen(useOpenEpoch(), (_fresh, live) => {
    if (actions) void openFollow(actions, live);
  }, {
    shown: followShown,
    onCovered: () => {
      if (peachHistory.navigation.location.pathname.startsWith('/posts/')) actions?.follow?.ground();
    },
  });
  return null;
}

/* ── Playlist ── */

/* What is drawn inside `#stats` is the playlist page. */
function playlistsShown(stats: HTMLElement | null): stats is HTMLElement {
  const entry = stats ? managedEntry(stats) : null;
  return !!entry && entry.path === '/playlists' && entry.host.isConnected;
}

async function openPlaylists(actions: ShellActions, live: () => boolean) {
  const stats = statsHost();
  if (!stats) return;
  actions.surfaceChanged('playlists', '/playlists');
  paintManagementPlaceholder(stats, managementSkeletonHtml('/playlists', { followLayout: '', followSort: '', followDir: '' }));
  void pageNavigationReady(live, stats, { pending: true });
  await openManagedRoute('/playlists', { revision: playlistsRevision }, { container: stats, isCurrent: live });
  if (live()) void pageNavigationReady(live);
}

/** The playlist page elements. */
export function PlaylistsMatch() {
  const actions = useContext(ShellActionsContext);
  const revision = useSyncExternalStore(subscribeShell, readPlaylistsRevision);
  const last = useRef(revision);
  useEffect(() => {
    if (last.current === revision) return;
    last.current = revision;
    const stats = statsHost();
    if (playlistsShown(stats)) updateManagedRoute(stats, { revision });
  }, [revision]);
  usePageOpen(useOpenEpoch(), (_fresh, live) => {
    if (actions) void openPlaylists(actions, live);
  }, { shown: () => { const stats = statsHost(); return playlistsShown(stats) && !stats.hidden } });
  return null;
}
