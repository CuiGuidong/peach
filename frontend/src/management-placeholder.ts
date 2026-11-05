/* The management pages' (playlists page included) loading state has one definition: the shell lays it on deep-link cold start,
 * and the route tree's page elements lay it on mount too. Written separately, a full refresh would play two animations back to
 * back: first a generic large-layout skeleton, then each page's own loading state. Taking one copy means the `data-skeleton`
 * keys match, and the later layer recognizes the same skeleton and skips re-laying it (`paintManagementPlaceholder`).
 *
 * Beyond the pages `boardPageSkeleton` draws, data management, review, diagnostics and collection sources each have one, and
 * other paths fall to the generic panel. */
import { esc } from '@peach/legacy/core';
import { fitSkeleton, skeletonHtml } from '@peach/legacy/ui';

import { boardPageSkeleton } from './board-skeleton';
import { cleanupSkeletonHtml, repairCardSkeletonHtml } from './management';

export interface PageSkeletonOptions {
  cards?: boolean;
  className?: string;
  variant?: string;
  count?: number;
  fill?: boolean;
  cardRatio?: number;
  gridClass?: string;
  gridSize?: string;
}

/** Full-page skeleton: `cards` renders a card grid, otherwise a panel; only the given items are passed down, and the rest fall back to `skeletonHtml`'s own defaults. */
export const pageSkeletonHtml = (
  label: string,
  { cards = false, className = '', variant = '', count, fill, cardRatio, gridClass = '', gridSize = '' }: PageSkeletonOptions = {},
): string => skeletonHtml(label, {
  variant: variant || (cards ? 'cards' : 'panel'), className, gridClass, gridSize,
  ...(count ? { count } : {}), ...(fill === undefined ? {} : { fill }), ...(cardRatio ? { cardRatio } : {}),
});

/* Category names are static copy written straight into the skeleton; the order is the tab order, matching the review page's list. */
const REVIEW_LABELS = ['Metadata fields', 'Creator tags', 'Label logo', 'Performer avatars', 'Western identity backfill', 'Code directory questionable', 'FC2 comment marks', 'FC2 cross-code similarity', 'End credits / source evidence'];
/* The review page is categories in a column on the left with a toolbar and Fieldsets cell by cell on the right, so the
   skeleton uses the final containers' class names; column split, column widths and card heights all come from the page's own
   rules, so finishing is only swapping placeholders for content and not one cell of layout moves.
   The category names and "Review categories" are data-independent and written out directly; what waits is how many each
   category holds, so only the count is a placeholder. The three toolbar pieces, grouping, category filter and select all on
   this page, need the queue back to know options and counts, three placeholders matched one to one. */
const reviewSkeletonHtml = (label = 'Reading the review queue'): string => `<div class="review review-workspace review-skeleton" data-skeleton="review" aria-busy="true" aria-label="${esc(label)}">
  <div class="reviewcontrols" data-section-nav><h2 class="review-category-title">Review categories</h2>
    <div class="reviewtabs" data-section-items>${REVIEW_LABELS.map((text, i) =>
      `<button type="button" disabled aria-selected="${i === 0}">${esc(text)}<span class="skeleton reviewcountskeleton" aria-hidden="true"></span></button>`).join('')}</div></div>
  <div class="reviewbulkbar reviewbulktoolbar" aria-hidden="true">${'<span class="skeleton reviewtoolskeleton"></span>'.repeat(3)}</div>
  <section class="reviewsection"><div class="reviewlist">${
    '<div class="skeletoncard" aria-hidden="true"><i></i><b></b><em></em></div>'.repeat(6)}</div></section></div>`;

const PLACEHOLDERS: Record<string, () => string> = {
  '/data-cleanup': () => cleanupSkeletonHtml(),
  '/data-cleanup/media-repair': () => `<div class="peach-react" data-skeleton="cleanup/media-repair" aria-busy="true" role="status" aria-label="正在读取媒体修复状态"><div aria-hidden="true" inert class="mx-auto flex w-full max-w-board flex-col gap-8">${repairCardSkeletonHtml()}</div></div>`,
  // /resource-sync 只是数据管理页上的一个锚点，占位也该是数据管理那张。
  '/resource-sync': () => cleanupSkeletonHtml(),
  '/review': () => reviewSkeletonHtml(),
  /* The collection sources are a stack of equal-width Fieldsets in the 812px narrow column: one hi-res cover plus six sources. The skeleton draws four,
     the number the first screen fits; the explainer sentence is static copy, independent of data, and shows immediately. */
  '/sources': () => `<div class="scraping-page"><p>HD images may need a proxy to download; check the connection first.</p>
    ${pageSkeletonHtml('Loading scraping sources', { cards: true, count: 4, fill: false, className: 'cleanup-skeleton' })}</div>`,
};

/** The follows-management skeleton draws in the view this browser chose last time, with the sort box and direction key matching the URL's tier: if the wait draws
 *  as cards and the table only appears once data lands, the layout flips wholesale within a single visit. */
export interface FollowSkeletonState {
  followLayout: string;
  followSort: string;
  followDir: string;
}

/** This page's loading-state HTML. */
export function managementSkeletonHtml(path: string, { followLayout, followSort, followDir }: FollowSkeletonState): string {
  return boardPageSkeleton(path, { followLayout, ...(path === '/subscriptions' ? { followSort, followDir } : {}) })
    || (PLACEHOLDERS[path] ?? (() => pageSkeletonHtml('Loading page')))();
}

/** The skeleton's key: the same key means the same skeleton, no redraw needed. */
export const skeletonKeyOf = (html: string): string => String(html).match(/data-skeleton="([^"]*)"/)?.[1] || '';

/** Lays the loading state into the container. If the same skeleton is already inside, leave it: swapping new nodes via innerHTML replays the shimmer from the top,
 *  and a full page refresh would show the same animation flash twice. */
export function paintManagementPlaceholder(container: HTMLElement, placeholder: string): void {
  const painted = container.querySelector<HTMLElement>('[data-skeleton]')?.dataset.skeleton || '';
  const next = skeletonKeyOf(placeholder);
  if (!next || next !== painted) {
    container.innerHTML = placeholder;
    fitSkeleton(container);
  }
}
