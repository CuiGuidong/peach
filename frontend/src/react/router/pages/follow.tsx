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
 * The follows page does not key by generation: "going back" and "re-entering" both open the same element again and hand the
 * shell the address to re-read the filters (`refresh`):
 * - If the follows page is still rendered in `#stats` (the shell only hides it when the profile page stacks over) it spreads it
 *   open, pushing filters, the sample seed and a new refresh generation in place: the list refetches and scrolls back to the
 *   top, while the header, both tiers and the glass pane stay.
 * - Only when not rendered does it open the whole page: lay the skeleton, fetch the first screen, then scroll back to the
 *   position recorded when leaving (`followScrollY`), or the top if none was recorded. With the refresh generation unchanged,
 *   the first screen hits cache and the list does not refetch.
 * Re-entering (already on the follows page, clicking the sidebar again, or after checking updates) is decided by the shell:
 * reroll the sample seed, reset scroll, return to a clean `/follow`, then ask for a reopen. Closing a follow detail back to the
 * list has the shell claim the address write and only push filters; the element does nothing. Deep links straight into a follow
 * detail leave the page group without a background, so this element does not mount and the list waits until details close.
 * When back/forward lands on a follow detail stacked over the list while the list is not rendered (other pages were visited in
 * between), hand the shell the yielding of `#stats` (`ShellActions.follow.ground`) and do not render the list.
 *
 * The playlists page reopens fully on every open and fetches the newest copy. While on the page, when the shell asks for a
 * reread (the top bar's "Shuffle"), write a new refresh generation (`playlistsRevision`) that the element pushes to the
 * rendered page; the page refetches without remounting.
 *
 * Neither element tears its page down on unmount: switching to management or the index page lets those claim the surface and
 * tear it down; when the profile page stacks over, the shell only hides `#stats` and it is still needed on return. */
import { useContext, useEffect, useRef, useSyncExternalStore } from 'react';

import { managedEntry, openManagedRoute, peachHistory, updateManagedRoute } from '@peach/history';
import { revealSkeleton } from '@peach/legacy/ui';
import { followScrollY, playlistsRevision, subscribeShell } from '@peach/shell';

import { managementSkeletonHtml, paintManagementPlaceholder } from '../../../management-placeholder';
import { ShellActionsContext, useOpenEpoch } from '../router';
import type { ShellActions } from '../shell-actions';
import { usePageOpen } from './index-entity';

const statsHost = () => document.getElementById('stats');
const readPlaylistsRevision = () => playlistsRevision;

/* When the first screen is ready, the skeleton is not cleared at once: it lifts into a layer and fades while the new hosts come into focus from blur, same as the catalog grid. Once a host is in place the page
   paints into it immediately, still within the same task, so no empty frame sits between skeleton and full page. */
function reveal(container: Element): HTMLElement {
  const host = document.createElement('div');
  host.className = 'peach-react';
  revealSkeleton(container, () => { container.textContent = ''; container.append(host) });
  return host;
}

/* ── Follows ── */

async function openFollow(actions: ShellActions, live: () => boolean) {
  const stats = statsHost();
  const shell = actions.follow;
  if (!stats || !shell) return;
  if (shell.refresh()) return;
  const restoreY = followScrollY;
  actions.surfaceChanged('follow', '/follow');
  paintManagementPlaceholder(stats, shell.skeleton());
  await openManagedRoute('/follow', shell.props(), { container: stats, isCurrent: live, place: reveal });
  if (live()) window.scrollTo(restoreY ? { top: restoreY, behavior: 'instant' } : { top: 0, behavior: 'smooth' });
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
  await openManagedRoute('/playlists', { revision: playlistsRevision }, { container: stats, isCurrent: live });
  if (live()) window.scrollTo({ top: 0, behavior: 'smooth' });
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
