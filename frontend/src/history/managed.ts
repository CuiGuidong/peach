/* The pages rendered by the router and the in-page components inside them (ADR-0031, "pages and the in-page components inside
 * pages are rendered only by the router tree"): the shell decides when to open and when to tear down, the React route tree renders.
 *
 * Pages render into three containers of the shell: the management body `#stats`, the `#index` shared by the index and profile
 * pages, and the `#grid` shared by the catalog grid and the junk queue. In-page components have their own containers: home
 * filter bar `#catalogFilter`, home new-releases row `#feedNew`, top-bar search dropdown `#searchMenu`. A container holds one
 * page (or surface) at a time and each container keeps its own state: when the profile page renders into `#index`, the
 * management page is merely hidden by the shell and stays alive (pages with polling keep fetching on their original cadence);
 * only when the shell next claims a surface (`claimSurface`) are `#stats` and `#index` taken down together. `#grid` is not part
 * of that: changing filters inside the catalog also claims the surface, because the grid must stay rendered. In-page components
 * are taken down by the shell per their own route criteria; the search dropdown is never taken down. A page follows the entry
 * registered here, not address matching: when the details stage stacks on a page the address is `/assets/:id`, and the page
 * must stay.
 *
 * Resident components (batch bar, color card, management header, immersive mode, settings panel, sidebar, stage) are not tied
 * to a page and open through `openResidentSurface`: no first-screen fetch, always counting as the current page, the host being
 * that resident node itself. They are never torn down; only an error boundary unmounts their component, and only the component,
 * not the host.
 *
 * The registration key is the "surface": pages use paths (`/stats`, `/performers/*`, `/`), in-page and resident components use
 * names (`search`, `batch-dock`); the two never overlap, and the route tree looks the same group of tables up by key
 * (`react/router/managed-routes.tsx`).
 *
 * One open: after the shell lays the skeleton it calls `openManagedRoute`; this first tears down the previous page in the same
 * container, then fetches the first screen; once fetched and the shell is still on this page, the skeleton is swapped for the
 * host in the same task and the route tree renders the full page in sync. When the route tree is not connected yet, opening
 * waits for it before fetching (the search dropdown opens during the shell's module evaluation, before `loadRouter`). Every open
 * takes a new generation; pages remount and refetch by generation. After opening, the shell's toggles (selection mode, filter
 * change, layout change) merge into the same page's props via `updateManagedRoute`: generation unchanged, the page re-renders
 * in place without remounting or refetching. */

/** The page (or panel) rendered inside some container. `host` is the `.peach-react` host the page portals into. */
export interface ManagedEntry {
  /** The registration key: the page's path, or a component's name within the page. */
  path: string;
  props: object;
  revision: number;
  /** The shell's container (`#stats`, `#index`, `#grid`, or a component container inside a page). */
  container: Element;
  host: HTMLElement;
  /** A resident component: the host is the shell's node, and on collapse or error only the component unmounts while the host stays. */
  resident: boolean;
}

/** The first-screen fetch the route tree hands here: fetches by registered key and throws `AbortError` once aborted. */
export type ManagedPrefetch = (path: string, props: object, signal: AbortSignal) => Promise<void>;

export interface ManagedOpenOptions {
  /** The container the page renders into. */
  container: Element;
  /** The shell's page-change rule: if the user walked away during the fetch, do not render. */
  isCurrent: () => boolean;
  /** The frame the shell lays itself: at the moment the first screen is fetched it swaps the frame into the container and
 *  returns the host the page renders into. When not given, it empties the container and puts in a new `.peach-react`. The
 *  profile page needs this: the overlay's stickiness requires its parent box to be `#index`, and the new-releases row is a
 *  legacy-layer card outside `.peach-react`, so the shell lays the frame's four blocks and the page takes one, portaling into
 *  the other three. */
  place?: (container: Element) => HTMLElement;
  /** Resident components (the ones opened via `openResidentSurface`): the host belongs to the shell; on collapse or throw only the component unmounts and the host stays. */
  resident?: boolean;
}

/** Subscribers receive what the containers hold at that moment. With `sync` true it must finish rendering on the spot: the shell just swapped or removed hosts within the same task,
 *  and being a beat late means a blank frame. With false it updates in place and queues into the next render as usual. */
type ManagedListener = (entries: readonly ManagedEntry[], sync: boolean) => void;

interface Pending { revision: number; controller: AbortController }

/* Before the route tree is wired to fetching, opens wait here; if the wired copy fails to load, the waiting opens fail with it. */
let connect: (ready: Promise<ManagedPrefetch>) => void = () => {};
const prefetcher = new Promise<ManagedPrefetch>((resolve) => { connect = resolve });
prefetcher.catch(() => {});
/* On first open, call the app's registered ready hook so the search dropdown and the first-screen filter bar wait for the route tree to connect before fetching.
 * Page code is already in the main bundle, and the ready hook is called only once. */
let preload: (() => void) | null = null;
export function preloadManagedRoutes(load: () => void): void {
  preload = load;
}
const entries = new Map<Element, ManagedEntry>();
const pending = new Map<Element, Pending>();
let revision = 0;
const listeners = new Set<ManagedListener>();

/** Hooks up fetching when the route tree loads. Only the first time counts. */
export function connectManagedRoutes(ready: Promise<ManagedPrefetch>): void {
  connect(ready);
}

/** The page currently rendered in this container; null while the first screen is still loading or after it is collapsed. */
export function managedEntry(container: Element): ManagedEntry | null {
  return entries.get(container) ?? null;
}
/** This container belongs to the router tree: either already rendered or first screen still loading. The shell uses that to decide whether to open again: opening while in flight aborts that request
 *  and refetches; opening while rendered tears it down and redraws, and when the content has not changed that is nothing but a wasted layout collapse. */
export function managedTaken(container: Element | null): boolean {
  return !!container && (entries.has(container) || pending.has(container));
}
/** Every page being drawn right now; the route tree renders portals from it. */
export const managedEntries = (): readonly ManagedEntry[] => [...entries.values()];

/** The route tree subscription: every page change, collapse or in-place update notifies synchronously. */
export function listenManagedEntry(listener: ManagedListener): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener) };
}

function notify(sync: boolean): void {
  const shown = managedEntries();
  for (const listener of [...listeners]) listener(shown, sync);
}

/** Open a page and wait for its first screen to land. Returns true once painted; false if it was collapsed, reopened, or the shell switched pages meanwhile. */
export async function openManagedRoute(path: string, props: object, options: ManagedOpenOptions): Promise<boolean> {
  const { container } = options;
  releaseManagedRoute(container);
  if (!options.isCurrent()) return false;
  revision += 1;
  const mine: Pending = { revision, controller: new AbortController() };
  pending.set(container, mine);
  const load = preload;
  preload = null;
  load?.();
  const prefetch = await prefetcher;
  if (pending.get(container) !== mine) return false;
  try {
    await prefetch(path, props, mine.controller.signal);
  } catch {
    // Aborting means the user has walked away. Other failures render as usual: the reason and retry cadence stay in the page's hands.
    if (mine.controller.signal.aborted) return false;
  }
  if (pending.get(container) !== mine) return false;
  pending.delete(container);
  if (!options.isCurrent()) return false;
  const host = options.place ? options.place(container) : defaultHost(container);
  entries.set(container, { path, props, revision: mine.revision, container, host, resident: !!options.resident });
  notify(true);
  return true;
}

/** Opens a resident component (a name in the resident table `RESIDENT_ROUTES`): it always counts as the current page, the host
 *  is the node the shell hands over itself, and the component renders directly as its child, so the DOM matches what the
 *  surface would have built with its own root. No first-screen fetch; it renders as soon as the route tree connects; returns
 *  true once rendered.
 *
 *  `place` hands the host to the route tree in the same task as the first frame, and must return that node itself; when not
 *  given, hand it back unchanged. When the shell's startup skeleton is already inside the host (management header, sidebar),
 *  `place` clears it: the skeleton survives until the first frame renders, with no blank frame in between. When the host is a
 *  new node not yet in the document (immersive mode, settings panel), `place` mounts it into the document so node and first
 *  frame appear together.
 *
 *  Each opens once, at shell startup (or first use). After that the shell pushes content through its imperative handle and the
 *  component subscribes to its own store; after a thrown error the boundary unmounts only the component, the surface stays
 *  empty until refresh, and the handle remains callable without throwing. */
export function openResidentSurface(
  name: string, container: HTMLElement, place: (container: HTMLElement) => HTMLElement = () => container,
): Promise<boolean> {
  return openManagedRoute(name, {}, { container, isCurrent: () => true, place: () => place(container), resident: true });
}

/* Token, Preflight, and focus rules all act on `.peach-react`; the container belongs to the shell, so build another one and remove it together with the collapse. */
function defaultHost(container: Element): HTMLElement {
  const host = container.ownerDocument.createElement('div');
  host.className = 'peach-react';
  container.textContent = '';
  container.append(host);
  return host;
}

/** Folds the shell's toggle into the page currently on screen: the generation is unchanged, the page rerenders in place, no remount, no refetch. When that container has not rendered yet
 *  (first screen still loading or already collapsed) it is a no-op, and the copy handed in on open still stands. */
export function updateManagedRoute(container: Element | null, patch: object): void {
  const shown = container ? entries.get(container) : undefined;
  if (!shown) return;
  entries.set(shown.container, { ...shown, props: { ...shown.props, ...patch } });
  notify(false);
}

/** Tears down the pages in these containers: aborts first-screen fetches in flight, unmounts pages and withdraws hosts, one
 *  notification. Containers with no page are a no-op.
 *  Containers are named one by one, with no "collapse all": when the shell claims a surface on page change it tears down
 *  `#stats` and `#index`, `#grid` keeps rendering across the catalog's paths and trash and is torn down only on leaving the
 *  catalog, and in-page components are torn down by the shell per their own route criteria. Resident components' hosts are
 *  the shell's nodes, so only the component unmounts and the host is not withdrawn. */
export function releaseManagedRoute(container: Element, ...more: Element[]): void {
  const removed: ManagedEntry[] = [];
  for (const target of new Set([container, ...more])) {
    const inflight = pending.get(target);
    if (inflight) {
      inflight.controller.abort();
      pending.delete(target);
    }
    const shown = entries.get(target);
    if (shown) {
      entries.delete(target);
      removed.push(shown);
    }
  }
  if (!removed.length) return;
  notify(true);
  for (const shown of removed) if (!shown.resident) shown.host.remove();
}

/** Unmounting the app collapses every registration and aborts first-screen requests that never became a page. */
export function releaseAllManagedRoutes(): void {
  const [first, ...rest] = new Set([...entries.keys(), ...pending.keys()]);
  if (first) releaseManagedRoute(first, ...rest);
}

/** Called after a surface's render threw and the route tree's error boundary caught it: withdraws only that surface's
 *  registration and host, leaving other surfaces rendering. Afterwards `managedTaken` returns false and `updateManagedRoute`
 *  is a no-op for it, and the shell's next open reopens. A generation mismatch (the cell already torn down or reopened) is a
 *  no-op: an expired surface must not withdraw the new one the shell just opened. Resident components' hosts are the shell's
 *  nodes; only the component unmounts, not the host; the shell will not open it again, and the surface stays empty until
 *  refresh.
 *
 *  Deleting the registration and withdrawing the host happen on the spot, and notification waits for a microtask: this runs
 *  inside React's commit phase (the error boundary's `componentDidCatch`), and notifying would re-render the route tree. When
 *  the throw happens on an open's first frame, open still returns true, only the registration is already withdrawn by the time
 *  it returns, and the patch the shell pushes next is a no-op. */
export function failManagedRoute(container: Element, failed: number): void {
  const shown = entries.get(container);
  if (shown?.revision !== failed) return;
  entries.delete(container);
  if (!shown.resident) shown.host.remove();
  queueMicrotask(() => { notify(false) });
}
