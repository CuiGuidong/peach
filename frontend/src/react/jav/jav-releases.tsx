/* JAV page "New releases" section: everything discovered through follows that hasn't been added to the library yet, paginated by release date descending.
 * The actress and label rows and the tag strip list only what appears in this batch of new releases (facets from `/api/jav/releases`); clicking filters within this section,
 * no navigation to the entity page; both the filter and the page number are written to the address bar. */
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { RiRssLine } from '@remixicon/react';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { appSettingsStore, javLayout, storeJavLayout, JAV_LAYOUTS, cardRatio, gridLayout } from '@peach/appearance';
import { entityFaceImg, facePos, logoUrl } from '@peach/card-art';
import { wireHorizontalScroller } from '../../ui-kit/scroll';
import { javContentSkeleton, javTagSkeleton, JAV_RECOMMENDATION_GRID } from '../../jav-skeleton';
import { tierPlaceholdersHtml } from '../../catalog-filter-skeleton';
import { errorMessage } from '../../api';
import { entityDisplayName } from '../../core/entity-names';
import type { DownloadPrefill } from '../activity/cloud-download-dialog';
import { Note } from '../components/note';
import { TaskProgress } from '../components/task-progress';
import { EmptyState } from '../components/empty-state';
import { Pagination } from '../components/table-pagination';
import { FilterGlassRows, FilterPill, GlassPill } from '../components/filter-glass';
import { Segments, Shuffle, SortKeys } from '../entity-filter/entity-filter-page';
import { Chip } from '@/components/base/badges/chip';
import { recommendationScore, RELEASE_SORTS, type DiscoveryDirection, type ReleaseSort } from './discovery-sorts';
import { addWant, invalidateWants } from '../wants/wants';
import { useAction } from '../settings/use-action';
import { useEntityNames } from '../use-entity-names';
import { DiscoveryCard, resourcePrefill } from './discovery-card';
import { fetchReleases, releaseFilters, releaseKey, RELEASE_PAGE_SIZE, type Discovery, type ReleaseFacetPerformer, type ReleaseFacetStudio,
  type ReleaseFilters, writeJavQuery } from './jav';
import { ReleaseTable } from './jav-release-table';
import { CatalogViewToggle } from '../catalog-grid/catalog-view-toggle';
import { useCatalogView } from '../catalog-grid/catalog-view';

type Facet = 'performer' | 'studio' | 'tag';
/* The placeholder of two rows of avatars while waiting for data, the same copy as the route skeleton (releasesFilterSkeleton). */
const TIER_PLACEHOLDERS = `<div data-catalog-tier="performers" data-skeleton="tiers">${tierPlaceholdersHtml('performer')}</div><div data-catalog-tier="studios">${tierPlaceholdersHtml('studio')}</div>`;

const performerRing = (person: ReleaseFacetPerformer) => entityFaceImg({
  id: person.id, hasImage: person.has_image, version: person.image_version, style: facePos(person.avatar_focus),
  focus: person.avatar_focus, standIn: person.avatar_stand_in });

/** When sorted by taste, that recommendation tier on the card uses the same tiers as “Discover”. */
function TasteChip({ value }: { value?: number | null }) {
  const recommendation = recommendationScore(value);
  return <span data-jav-taste-score="" title={`Taste ${recommendation.score}`}><Chip color={recommendation.color}>{recommendation.label}</Chip></span>;
}

function StudioMark({ studio }: { studio: ReleaseFacetStudio }) {
  const [broken, setBroken] = useState(false);
  return <span data-tier-mark="">
    {studio.has_logo && !broken ? <img src={logoUrl(studio.name, 'icon', studio.logo_version)} alt="" width={28} height={28}
      loading="lazy" decoding="async" onError={() => setBroken(true)} /> : null}
  </span>;
}

export function Releases({ readOnly, receipt, resource, query, navigate, clearText }: {
  readOnly: boolean; receipt(message: string): void; resource(work: DownloadPrefill): void; query: string;
  navigate(path: string): void; clearText(): void;
}) {
  useEntityNames();
  const [filters, setFilters] = useState<ReleaseFilters>(() => releaseFilters(location.search));
  /* The page header's IndexSearch waits 300 ms of idle before emitting text; here when it changes, return to page 1 and ask the server again. */
  useEffect(() => {
    if (query === filters.q) return;
    setFilters(current => ({ ...current, q: query, page: 1 }));
    writeJavQuery({ page: '' });
  }, [query, filters.q]);
  const choose = (facet: Facet, value: string) => {
    const next = filters[facet] === value ? '' : value;
    setFilters(current => ({ ...current, [facet]: next, page: 1 }));
    writeJavQuery({ [facet]: next, page: '' });
  };
  const section = useRef<HTMLElement>(null);
  const goPage = (page: number) => {
    setFilters(current => ({ ...current, page }));
    writeJavQuery({ page: page > 1 ? String(page) : '' });
    section.current?.scrollIntoView({ block: 'start' });
  };
  const clear = () => {
    setFilters(current => ({ ...current, performer: '', studio: '', tag: '', q: '', page: 1 }));
    writeJavQuery({ performer: '', studio: '', tag: '', page: '' });
    clearText();
  };
  /* Clicking the selected one flips its direction; switching to a different one defaults the code to ascending and the rest to descending (same as “Discover”). */
  const sortBy = (key: ReleaseSort) =>
    setSort(key, key === filters.sort ? (filters.dir === 'asc' ? 'desc' : 'asc') : key === 'code' ? 'asc' : 'desc');
  /* In list mode, the table header states the sort direction directly. */
  const setSort = (key: ReleaseSort, dir: DiscoveryDirection) => {
    setFilters(current => ({ ...current, sort: key, dir, seed: '', page: 1 }));
    writeJavQuery({ sort: key === 'release_date' ? '' : key, dir: dir === 'asc' ? 'asc' : '', seed: '', page: '' });
  };
  /* New batch: the same batch of new releases is reshuffled with a new seed, and the order stays the same when paging; the sort keys are no longer pressed. */
  const reshuffle = () => {
    const seed = Math.random().toString(36).slice(2, 10);
    setFilters(current => ({ ...current, sort: 'random', dir: 'desc', seed, page: 1 }));
    writeJavQuery({ sort: 'random', dir: '', seed, page: '' });
  };
  useEffect(() => {
    const rows = section.current?.querySelectorAll('[data-catalog-tier],[data-catalog-tags],[data-filter-row="bottom"]');
    const scrollers = [...(rows || [])].map(row => wireHorizontalScroller(row, { drag: true }));
    return () => scrollers.forEach(scroller => scroller.destroy());
  }, []);
  const settings = appSettingsStore();
  useSyncExternalStore(settings.subscribe, settings.version, settings.version);
  const layout = javLayout();
  /* Card / list uses the same toggle as the library (peach.catalog-view.v1): the JAV page's library and new releases switch together. */
  const view = useCatalogView();
  const ratio = cardRatio(gridLayout({ active: true, home: false, portrait: false }));
  /* The few not yet read from the source are kicked off by a server-side read round: while running, poll at its given interval, fetch once more when done, and tags and filter options are completed. */
  const metadataJob = useRef('');
  const releases = useQuery({ queryKey: releaseKey(filters), queryFn: ({ signal }) => fetchReleases(filters, signal, metadataJob.current),
    placeholderData: keepPreviousData, retry: false, refetchOnWindowFocus: false,
    refetchInterval: current => current.state.data?.metadata_job?.status === 'running'
      ? Math.max(1000, current.state.data.poll_after_ms || 3000) : false });
  const metadata = releases.data?.metadata_job;
  const reading = metadata?.status === 'running';
  const wasReading = useRef(false);
  useEffect(() => { if (metadata?.job_id) metadataJob.current = metadata.job_id }, [metadata?.job_id]);
  useEffect(() => {
    if (wasReading.current && !reading) void releases.refetch();
    wasReading.current = reading;
  }, [reading, releases]);
  const action = useAction();
  const want = (item: Discovery) => { void action.run(String(item.id), signal => addWant({ code: item.code }, signal), () => {
    receipt('Added to wants'); void invalidateWants(); void releases.refetch();
  }) };
  const data = releases.data;
  const waiting = releases.isPending;
  const filtered = !!(filters.performer || filters.studio || filters.tag || filters.q);
  const pages = Math.max(1, Math.ceil((data?.total || 0) / RELEASE_PAGE_SIZE));
  return <section ref={section} aria-label="Subscribe to new releases" aria-busy={waiting || releases.isFetching} className="flex min-w-0 scroll-mt-24 flex-col gap-4">
    {waiting ? <div data-catalog-tiers="" aria-busy="true" dangerouslySetInnerHTML={{ __html: TIER_PLACEHOLDERS }} /> : null}
    {data && (data.facets.performers.length || data.facets.studios.length) ? <div data-catalog-tiers="" data-release-tiers="">
      {data.facets.performers.length ? <div data-catalog-tier="performers" role="group" aria-label="Filter by performer">
        {data.facets.performers.map(person => <button key={person.name} type="button" data-tier-performer=""
          aria-pressed={filters.performer === person.name} title={`${entityDisplayName('performer', person.name, person.id)} · ${person.count} titles`}
          onClick={() => choose('performer', person.name)}>
          <span data-tier-ring="" dangerouslySetInnerHTML={{ __html: performerRing(person) }} />
          <span data-tier-name="">{entityDisplayName('performer', person.name, person.id)}</span>
        </button>)}
      </div> : null}
      {data.facets.studios.length ? <div data-catalog-tier="studios" role="group" aria-label="Filter by studio">
        {data.facets.studios.map(studio => <button key={studio.name} type="button" data-tier-studio=""
          aria-pressed={filters.studio === studio.name} title={`${studio.name} · ${studio.count} works`} onClick={() => choose('studio', studio.name)}>
          <StudioMark studio={studio} />{studio.name}{' '}<span data-count-badge="">{studio.count}</span>
        </button>)}
      </div> : null}
    </div> : null}
    <FilterGlassRows label="New work filter" topLabel="New work tag" attrs={{ 'data-filter-frame': '', 'data-jav-filter': '', 'data-catalog-frame': '' }}
      busy={waiting} topClassName="gap-1.5 overflow-visible" bottomClassName="min-h-12" top={<div data-catalog-scroll="">
        <div data-catalog-tags="" dangerouslySetInnerHTML={waiting ? { __html: javTagSkeleton() } : undefined}>
          {waiting ? null : data?.facets.tags.map(row => <FilterPill key={row.name} data-catalog-tag={row.name} data-entity-press=""
            pressed={filters.tag === row.name} onPress={() => choose('tag', row.name)}>
            {row.name}{' '}<span data-count-badge="">{row.count}</span>
          </FilterPill>)}
        </div></div>} bottom={<>
        <span data-catalog-readout="">{waiting ? <span data-skeleton="count" aria-hidden className="relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen" />
          : filtered ? `${data?.total || 0} / ${data?.candidate_total || 0} works` : `${data?.total || 0} works`}</span>
        {filtered ? <GlassPill onPress={clear}>Clear filters</GlassPill> : null}
        <span data-entity-sorts="">
          <Shuffle onPress={reshuffle} busy={filters.sort === 'random' && releases.isFetching} />
          {view === 'cards' ? <Segments label="JAV card layout" value={layout} options={JAV_LAYOUTS} onChange={storeJavLayout} /> : null}
          <CatalogViewToggle />
          <SortKeys sorts={RELEASE_SORTS.map(([key, label, ariaLabel]) => ({ key, label, ariaLabel, pressed: key === filters.sort, dir: filters.dir }))}
            onSort={key => sortBy(key as ReleaseSort)} />
        </span>
      </>} />
    {waiting && view === 'cards' ? <div role="status" aria-label="Loading new works" dangerouslySetInnerHTML={{ __html: javContentSkeleton('discover', layout) }} /> : null}
    {releases.error ? <Note tone="error" title="New work unavailable">{errorMessage(releases.error)}</Note> : null}
    {reading && metadata ? <div data-jav-metadata="" className="min-w-0"><TaskProgress
      label={`Reading video details · ${metadata.completed} / ${metadata.total}`} value={metadata.completed} total={metadata.total} /></div> : null}
    {!waiting && !releases.error && !data?.items.length ? <EmptyState icon={RiRssLine} title={filtered ? 'No new works match the filter' : 'No new works not yet indexed'}
      actions={filtered ? <Button size="small" onClick={clear}>Clear filters</Button>
        : <ButtonLink size="small" href="/subscriptions?tab=add">Add subscription</ButtonLink>}>
      {filtered ? 'Clear filters to view all new releases.' : 'After following a performer or studio, new works not yet indexed appear here.'}
    </EmptyState> : null}
    {action.error ? <Note tone="error">{action.error}</Note> : null}
    {view === 'list' ? waiting || data?.items.length ? <ReleaseTable items={data?.items || []} waiting={waiting} filters={filters}
      studios={data?.facets.studios || []} javImage={settings.value.javImage} readOnly={readOnly} navigate={navigate}
      onTag={value => choose('tag', value || filters.tag)} onSort={setSort} wanting={item => action.busy === String(item.id)}
      onWant={want} onResource={item => resource(resourcePrefill(item))} /> : null
    : <div data-media-grid="" className={JAV_RECOMMENDATION_GRID} style={{ '--card-ratio': ratio } as CSSProperties}>
      {(data?.items || []).map(item => <DiscoveryCard key={item.id} item={item} layout={layout} javImage={settings.value.javImage}
        readOnly={readOnly} navigate={navigate} tag={filters.tag} onTag={value => choose('tag', value || filters.tag)}
        wanting={action.busy === String(item.id)} onWant={() => want(item)}
        onResource={() => resource(resourcePrefill(item))} badge={filters.sort === 'taste' ? <TasteChip value={item.taste_score} /> : undefined} />)}
    </div>}
    <div className="flex justify-center"><Pagination page={filters.page} pages={pages} onPage={goPage} label="New Releases pagination" /></div>
  </section>;
}
