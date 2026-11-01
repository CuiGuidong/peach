/* The site-wide single TanStack Query client (ADR-0031).
 * @peach/query resolves straight to shared source; Application's fetchQuery, page prefetch, and Providers use the same instance.
 * First-screen prefetch and components read the same cache, avoiding duplicate requests after mount or writes that only update some readers. */
import { QueryClient } from '@tanstack/query-core';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /* Requests all hit the local `/api/...`. The browser's online flag speaks of the external network, and losing it flips false,
         so Query suspends local requests as paused too; the page then sits on stale data saying nothing. */
      networkMode: 'always',
      /* No retry. The failure is the service not up, a read-only database, or a migration not yet run; asking three more times in the same second returns the same answer,
         so it is only deferred a few seconds before display; the real retry is the page's own polling, one round away. */
      retry: 0,
      /* Refocus does not auto-refetch: pages needing fresh data set their own polling rhythm by content (activity page: 2s/10s),
         and adding a focus trigger would give the same data two rhythms. Collection and update checks against external sources are always explicitly triggered,
         and must certainly not fire just because the tab was switched back to. Pages wanting instant refresh opt in themselves via `useQuery`. */
      refetchOnWindowFocus: false,
      /* Mount does not refetch and errors do not retry: every page entry has the route element `prefetch` first and then mount (the page-open contract in `history/managed.ts`), so the cache copy at mount time is freshly fetched. Defaults would immediately fire the same request again within the same entry;
         the failed one would fail again, with the error displayed one round trip later. */
      refetchOnMount: false,
      retryOnMount: false,
    },
  },
});
