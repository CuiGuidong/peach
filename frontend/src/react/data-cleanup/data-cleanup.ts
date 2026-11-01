/* The data management page's data contract.
 *
 * This page is the only entry for "what to do with what is already in the library". The top row of readouts is each content
 * type's journey in the library: first make it clear (manual review, quality upgrades), then pick out what should not stay
 * (duplicates, junk files), and finally where deleted things still are (trash).
 *
 * Two of the five readouts are not owned here: quality upgrades read `QUALITY_GOALS_KEY` and duplicates read
 * `DUPLICATES_KEY`, so the same number is the same copy on both pages. This module declares only the review count, junk files
 * and trash. The review count does not read `REVIEW_KEY`: that one is the whole queue, and here only the `?counts=1` numbers
 * are needed; the response shape differs, making it a different resource.
 *
 * Each card fails and computes on its own: the review endpoint failing must not turn the trash card into "read failed" too,
 * so these are five `useQuery` calls, not one `Promise.all`. */
import type { QueryKey } from '@tanstack/react-query';

import { apiGet } from '../../api';
import { DUPLICATES_KEY, fetchDuplicates } from '../duplicates/duplicates';
import { prefetchLibraryProcessing } from '../library-processing/library-processing';
import { prefetchMediaRepair } from '../media-repair/media-repair';
import { prefetchMediaSources } from '../media-sources';
import { fetchQualityGoals, QUALITY_GOALS_KEY } from '../quality-goals/quality-goals';
import { queryClient } from '../query';
import { REVIEW_LABELS, type ReviewCategory } from '../review/review';
import {
  fetchLinkCheck, fetchLinkPrune, fetchLinkStats, LINK_CHECK_KEY, LINK_PRUNE_KEY, LINKS_KEY,
} from './links';
import { prefetchOrganize } from './organize';
import { fetchOrphanRecords, ORPHAN_RECORDS_KEY } from './orphan-records';
import { prefetchResourceSync } from './resource-sync';

export const REVIEW_COUNTS_URL = '/api/review?counts=1';
export const REVIEW_COUNTS_KEY = ['review', 'counts'] as const;

/** Junk files: only the pending-judgment total and breakdown are needed; not a single record has to be fetched. */
export const JUNK_URL = '/api/ads?limit=1';
export const JUNK_KEY = ['junk-summary'] as const;

/** Trash: the same endpoint as the catalog grid, pinned to `state=trash` only to fetch the total count and disk usage. */
export const TRASH_URL = '/api/items?state=trash&limit=1';
export const TRASH_KEY = ['trash-summary'] as const;

/** Junk classifications and their on-screen names. The order matches the breakdown row (legacy `JUNK_KIND_OPTIONS`). */
export const JUNK_KINDS: [string, string][] = [
  ['video', 'Videos'], ['image', 'Images'], ['archive', 'Archives'],
  ['audio', 'Audio'], ['url', 'URL'], ['other', 'Other'],
];

export interface ReviewCounts { counts: Partial<Record<ReviewCategory, number>> }

export interface JunkSummary {
  pending_total: number;
  dismissed_total: number;
  counts: Record<string, number>;
}

export interface TrashSummary { total: number; bytes: number }

export const fetchReviewCounts = (signal?: AbortSignal) => apiGet<ReviewCounts>(REVIEW_COUNTS_URL, signal);
export const fetchJunkSummary = (signal?: AbortSignal) => apiGet<JunkSummary>(JUNK_URL, signal);
/** The trash count follows the library selected in the sidebar, same scope as the catalog grid: the legacy `api()` adds `library=` when fetching `/api/items`,
 *  `apiGet` does not, so this adds it itself. */
export const fetchTrashSummary = (signal?: AbortSignal) => {
  const library = sessionStorage.getItem('peach.library');
  const url = library ? `${TRASH_URL}&library=${encodeURIComponent(library)}` : TRASH_URL;
  return apiGet<TrashSummary>(url, signal);
};

const count = (value: number | undefined) => Number(value || 0).toLocaleString();

/** The review card: total plus the top three categories, the rest merged into "other N". The card is an entry point, not the review queue itself. */
export function reviewSummary(data: ReviewCounts | undefined): { figure: string; meta: string } {
  const labels = REVIEW_LABELS as Record<string, string>;
  const counts = Object.entries(data?.counts ?? {})
    .map(([key, value]) => [labels[key] || key, Number(value) || 0] as const)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1]);
  const total = counts.reduce((sum, [, value]) => sum + value, 0);
  const top = counts.slice(0, 3).map(([label, value]) => `${label} ${value.toLocaleString()}`);
  const rest = counts.slice(3).reduce((sum, [, value]) => sum + value, 0);
  if (rest) top.push(`${rest.toLocaleString()} more`);
  return { figure: `${total.toLocaleString()} items to review`, meta: top.join(' · ') };
}

/** The junk files card's breakdown: only categories that actually have items, with ignored ones appended after. */
export function junkBreakdown(summary: JunkSummary | undefined): string {
  if (!summary) return '';
  const parts = JUNK_KINDS
    .filter(([key]) => Number(summary.counts?.[key]) > 0)
    .map(([key, label]) => `${label} ${count(summary.counts[key])}`);
  if (Number(summary.dismissed_total) > 0) parts.push(`Dismissed ${count(summary.dismissed_total)}`);
  return parts.join(' · ');
}

/** The fetches the first screen does not wait for: each `useQuery` fetches on mount. */
const LAZY_QUERIES: [QueryKey, (context: { signal: AbortSignal }) => Promise<unknown>][] = [
  [REVIEW_COUNTS_KEY, ({ signal }) => fetchReviewCounts(signal)],
  [QUALITY_GOALS_KEY, ({ signal }) => fetchQualityGoals(signal)],
  [TRASH_KEY, ({ signal }) => fetchTrashSummary(signal)],
  [LINKS_KEY, ({ signal }) => fetchLinkStats(signal)],
  [LINK_CHECK_KEY, ({ signal }) => fetchLinkCheck(signal)],
  [LINK_PRUNE_KEY, ({ signal }) => fetchLinkPrune(signal)],
  [ORPHAN_RECORDS_KEY, ({ signal }) => fetchOrphanRecords(signal)],
];

/** First screen: the top row of readouts, which sources this run will scan, plus the two background-job cards, the organize
 *  card and resource sync.
 *
 *  What it waits for is only what the first screen needs to render: the legacy shell has already laid a skeleton, and the page
 *  spinning again would be two wait states in one visit. The review and quality-upgrade numbers and the link stats each read
 *  their own source, and when slow they must not hold the page, so they are not waited on.
 *
 *  When those unwaited pieces already have a copy in cache (another visit to this page) they must refetch: the shared
 *  `queryClient` does not refetch cached keys on mount, and without a push here the readouts would freeze at the last visit's
 *  look. On the first visit they have no cache and are fetched by their own `useQuery` on mount.
 *
 *  Anchor positioning waits for readouts, link management and orphan records to be ready, so scrolling uses post-landing
 *  coordinates. */
export async function prefetchDataCleanup(signal: AbortSignal): Promise<void> {
  const anchored = !!location.hash;
  const lazy = LAZY_QUERIES.map(([queryKey, queryFn]) => {
    if (anchored) return queryClient.fetchQuery({ queryKey, queryFn: () => queryFn({ signal }) }).catch(() => undefined);
    if (queryClient.getQueryState(queryKey)) void queryClient.prefetchQuery({ queryKey, queryFn });
    return undefined;
  });
  await Promise.all([
    ...lazy,
    queryClient.fetchQuery({ queryKey: JUNK_KEY, queryFn: () => fetchJunkSummary(signal) }),
    queryClient.fetchQuery({ queryKey: DUPLICATES_KEY, queryFn: () => fetchDuplicates(signal) }),
    prefetchMediaSources(signal).then(() => prefetchResourceSync(signal)),
    prefetchLibraryProcessing(signal),
    prefetchMediaRepair(signal),
    prefetchOrganize(signal),
  ]);
}
