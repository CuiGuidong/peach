/* The creator profile page's online view (ADR-0096): updates bound to this person in follows, not yet added to the library,
 * with cards and the photo wall being the follows page's copies.
 *
 * Fetching and filtering (status, source, tags, sort, video/image) belong to the profile page (`entity-page-view.tsx`); the filter overlay and this cell
 * read the same one; here it only draws the group for the current media tier. The query key is the same family as the follows page: when status changes in the detail or Check updates finishes,
 * invalidate and rewrite the cache by the `['follow-feed']` prefix, and this screen follows along. When switching filters, keep the host; the content and skeleton cross-fade in place. */
import type { UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query';
import { useMemo } from 'react';
import { requestErrorMessage } from '@peach/legacy/core';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { EmptyState } from '../components/empty-state';
import { spriteGlyph } from '../components/sprite-glyph';
import { FollowCheckButton } from '../follow-feed/follow-check-button';
import { entityCheckSources } from '../follow-feed/follow-check';

import { LoadMore } from '../catalog-grid/catalog-grid-page';
import { RetryNote } from '../components/grid-reveal';
import { SkeletonContent } from '../components/skeleton-content';
import { FollowCard } from '../follow-feed/follow-card';
import {
  itemForMedia, type FollowContext, type FollowFeedActions, type FollowFeedHelpers, type FollowGroup, type FollowMedia,
  type FollowPage, type FollowSource, type FollowView,
} from '../follow-feed/follow-feed';
import { useFollowWrite } from '../follow-feed/follow-feed-page';
import type { PhotoLayout, PhotoSize } from './entity-body';

export interface EntityOnlineProps {
  view: FollowView;
  media: FollowMedia;
  result: UseInfiniteQueryResult<InfiniteData<FollowPage>>;
  /** The merged pages, and the visible groups within this media tier. */
  data: FollowPage | null;
  visible: readonly FollowGroup[];
  context: FollowContext;
  photoSize: PhotoSize;
  photoLayout: PhotoLayout;
  imagesOnly: boolean;
  helpers: FollowFeedHelpers;
  actions: FollowFeedActions;
  canLoadMore?: () => boolean;
  clearFilters(): void;
}

export function EntityOnline(props: EntityOnlineProps) {
  const { result, data, media, helpers } = props;
  /* When filters change, the previous data is kept around (`keepPreviousData`), but that copy must not be rendered as the new one. */
  const pending = result.isPending || result.isPlaceholderData;
  if (!data && result.isError) {
    return <RetryNote message={requestErrorMessage(result.error)} onRetry={() => { void result.refetch() }} />;
  }
  return (
    <div data-follow-list-body="" data-entity-online="">
      <SkeletonContent pending={pending} skeletonHtml={() => helpers.listSkeletonHtml(media)}>
      {pending || !data ? null : <Cards {...props} data={data} />}
      {!pending && data?.has_more ? (
        <LoadMore key={result.data?.pages.length} entity enabled={() => props.canLoadMore?.() !== false}
          load={async () => { await result.fetchNextPage({ throwOnError: true }) }} />
      ) : null}
      </SkeletonContent>
    </div>
  );
}

function Cards({ view, media, data, visible, context, photoSize, photoLayout, imagesOnly, actions, clearFilters }:
  EntityOnlineProps & { data: FollowPage }) {
  const write = useFollowWrite({ view, revision: 0, actions });
  const sources = useMemo(() => {
    const byId = new Map((data.sources || []).map((source) => [source.id, source]));
    const byAuthor = new Map<string, FollowSource[]>();
    (data.sources || []).forEach((source) => {
      if (!source.author_key) return;
      if (!byAuthor.has(source.author_key)) byAuthor.set(source.author_key, []);
      byAuthor.get(source.author_key)!.push(source);
    });
    return { byId, byAuthor };
  }, [data.sources]);
  const images = media === 'images';
  const wall = images ? { 'data-size': photoSize, 'data-layout': photoLayout, 'data-images-only': String(imagesOnly) } : {};
  const body = visible.length ? visible.map((group) => {
    const id = itemForMedia(group, media).id;
    const authorKey = sources.byId.get(group.primary?.source_id as number)?.author_key;
    return (
      <FollowCard key={`${group.primary.id}:${media}`} group={group}
        authorSources={(authorKey && sources.byAuthor.get(authorKey)) || []} media={media} context={context}
        selected={false} selectMode={false} busy={write.busy.get(id) || ''} failure={write.failures.get(id) || ''}
        actions={actions} onStatus={write.status} onSave={write.save} />
    );
  }) : <Empty searched={!!(data.groups || []).length || !!(view.status || view.provider || view.tags.length || view.durMin || view.durMax)}
    clear={clearFilters} actions={actions} sources={entityCheckSources(data.sources || [], view.author)} />;
  return <div data-follow-list="" data-follow-wall={images ? '' : undefined} {...wall}>{body}</div>;
}

function Empty({ searched, clear, actions, sources }: {
  searched: boolean; clear(): void; actions: FollowFeedActions; sources: number[];
}) {
  return <div data-follow-empty="" className="contents"><EmptyState
    icon={spriteGlyph(searched ? 'search-x' : 'rss')} title={searched ? 'No updates under the current filter' : 'No updates fetched yet'}
    actions={searched ? <Button size="small" onClick={clear}>Clear filters</Button>
      : sources.length ? <FollowCheckButton sources={sources} report={actions.checkReport} />
      : <ButtonLink size="small" href="/subscriptions?tab=add">Add follows</ButtonLink>}>
    {searched ? 'Try again after switching media type, state, source, or tags.' : 'After checking source updates, this creator\'s new content will appear here.'}
  </EmptyState></div>;
}
