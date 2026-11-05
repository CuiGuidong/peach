/* The two aggregates read by the home filter bar and the sidebar: `/api/facets` (the sidebar's groups and tag bar) and
 * `/api/tops` (the performer and label rows). They live in the site's one `QueryClient` (`@peach/query`); the shell fetches
 * at startup without waiting for the React bundle.
 *
 * Two keys; the parameter strings are computed by the shell for the current context and passed in, and the query functions
 * never read the shell's variables:
 * - `['facets', basis string, generation]`: the basis is the JAV, profile or details scope, the status page, and that group of
 *   filters.
 * - `['tops', param string, basis string, generation]`: the param string is the one the requester passed (count, seed, JAV,
 *   status page); after falling back to the library-wide basis the key is unchanged. The key also carries the basis string:
 *   the two are a pair, and when the basis changes both refetch together, so refreshing the sidebar's counts refetches those
 *   two rows once as well.
 * - `['tops', param string, generation]`: continuation pages (param string with `page`). The response is decided only by the
 *   param string, and both rows asking for the same page send one request.
 *
 * Within one tab the same basis is reused, and the same entry sends only one request. Write operations and
 * explicit batch changes go through the shell calling `dropBars()`: the generation increments, and the next
 * fetch will really send a request; the one already in flight is still handed to the caller waiting for it. */
import { api } from '@peach/legacy/core';

import { queryClient } from './query';

/** Keep the aggregate within the same tab; writes and manual refreshes invalidate it by generation. */
export const BARS_STALE_MS = Infinity;

let revision = 0;

export const facetsKey = (scope: string, generation = revision) => ['facets', scope, generation] as const;
export const topsKey = (params: string, scope: string, generation = revision) =>
  ['tops', params, scope, generation] as const;
export const topsPageKey = (params: string, generation = revision) => ['tops', params, generation] as const;

export interface TopsData { performers: unknown[]; studios: unknown[]; [field: string]: unknown }
export type FacetsData = Record<string, unknown>;

/* Status pages narrow the top two rows to this page's basis, so as not to list people and labels with not one video here.
   But when the set narrows until the aggregate is empty ("Marked" often holds only a few entries), narrowing takes the whole
   row with it: switching one cell on the same filter bar would suddenly remove two layers from the page top, reading as having
   jumped to another page rather than changed a filter. When empty it falls back to the library-wide basis. This row's clicks
   open entity pages, which already means leaving the current status; what it answers was never "who is on this page" but
   "who to look at next". Continuation pages (the shell's `moreTops`) also go through here. */
export async function loadTops(params: string | URLSearchParams): Promise<TopsData> {
  const query = String(params);
  const scoped = await api(`/api/tops?${query}`) as TopsData;
  const wide = new URLSearchParams(query);
  if (scoped.performers.length || scoped.studios.length || !wide.has('state')) return scoped;
  wide.delete('state');
  return await api(`/api/tops?${wide}`) as TopsData;
}

/** Both are fetched together, each hitting its own cache; the shell waits for both and paints once. */
export function fetchBars(scope: string, topsParams: string): Promise<[FacetsData, TopsData]> {
  return Promise.all([
    queryClient.fetchQuery({
      queryKey: facetsKey(scope),
      queryFn: () => api(`/api/facets${scope ? `?${scope}` : ''}`) as Promise<FacetsData>,
      staleTime: BARS_STALE_MS,
    }),
    queryClient.fetchQuery({
      queryKey: topsKey(topsParams, scope),
      queryFn: () => loadTops(topsParams),
      staleTime: BARS_STALE_MS,
    }),
  ]);
}

/** The next page of the top row. Both rows keep their own page numbers; landing on the same page produces identical query strings and shares one request. */
export function fetchTopsPage(params: string): Promise<TopsData> {
  return queryClient.fetchQuery({
    queryKey: topsPageKey(params),
    queryFn: () => loadTops(params),
    staleTime: BARS_STALE_MS,
  });
}

/** Invalidate everything already fetched in both families: the generation increments, and the next `fetchBars` changes keys
 *  and refetches.
 *
 *  Neither family is removed wholesale: removal would silently cancel the trip in flight and hand its waiter a
 *  `CancelledError`. `invalidateQueries` is not used either: after invalidating a query with no observers, the trip in flight
 *  gets reused by the next `fetchQuery`, so a manual refresh would not really send. Settled entries of old generations are
 *  removed as a courtesy; nobody reads them once they return, and `gcTime` reclaims them. */
export function dropBars(): void {
  revision += 1;
  const settled = (query: { state: { fetchStatus: string } }) => query.state.fetchStatus === 'idle';
  queryClient.removeQueries({ queryKey: ['facets'], predicate: settled });
  queryClient.removeQueries({ queryKey: ['tops'], predicate: settled });
}
