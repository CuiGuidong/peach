import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RiCompassLine } from '@remixicon/react';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Chip } from '@/components/base/badges/chip';
import { appSettingsStore, javLayout, storeJavLayout, JAV_LAYOUTS, cardRatio, gridLayout } from '@peach/appearance';
import { wireHorizontalScroller } from '../../ui-kit/scroll';
import { javContentSkeleton, javFacetTiersHtml, javTagPlaceholdersHtml, JAV_CATALOG_TIERS, JAV_PAGE_BODY, JAV_RECOMMENDATION_GRID, JAV_TAG_STRIP_SKELETON } from '../../jav-skeleton';
import { discoveryCast } from '../components/cast-popover';
import { CloudDownloadDialog, type DownloadPrefill } from '../activity/cloud-download-dialog';
import { Note } from '../components/note';
import { QueryErrorNote } from '../components/query-error-note';
import { EmptyState } from '../components/empty-state';
import { WantList } from '../wants/want-list';
import { JavSelectionProvider, useJavRectangle, useVisibleJavWorks } from './jav-selection';
import { addWant, invalidateWants } from '../wants/wants';
import { busyProps, useAction } from '../settings/use-action';
import { controlDiscoveryMetadata, DISCOVERY_METADATA_KEY, discoveryKey, fetchDiscoveries, fetchDiscoveryMetadata, javTab, metadataInterval, useJavAddress, writeJavQuery,
  type Discovery, type DiscoveryMetadataJob, type DiscoveryScope } from './jav';
import { queryClient } from '../query';
import { DiscoveryCard, resourcePrefill } from './discovery-card';
import type { DiscoveryPerson } from './discovery-faces';
import { Releases } from './jav-releases';
import { OnlineCatalog } from './online-catalog';
import { spriteGlyph } from '../components/sprite-glyph';
import { FilterGlassRows, FilterIconButton, FilterActionButton, FilterTagStrip, FilterToolbarControls } from '../components/filter-glass';
import { ColumnFilterAvatar, ColumnFilterStudioAvatar } from '../components/column-filter-avatar';
import { FilterDropdown } from '../components/filter-dropdown';
import { LibraryShortcuts } from '../library-shortcuts/shortcut-controls';
import { Segments, SortKeys } from '../entity-filter/entity-filter-page';
import { outsideTableDateBound, TableRangeFields } from '../components/table-column-range';
import { useViewGlide } from '../components/use-view-glide';
import { useHorizontalScroller } from '../components/use-horizontal-scroller';
import { TaskProgress } from '../components/task-progress';
import { activityKind } from '../../activity-kinds';
import { DISCOVERY_SORTS, discoveryOrder, discoveryScore, recommendationScore, type DiscoverySort } from './discovery-sorts';
import { jobText, serverLabelList } from '../../core/server-text';
import { JavGlassSearch } from './jav-header';
import { t } from '../../i18n';
import { entityDisplayName } from '../../core/entity-names';
import { columnRangeKinds, readColumnFilters, withinColumnRange, writeColumnFilters, type ColumnRange, type ColumnFilters } from '../../column-filters';
import { JavCodeFilter, matchesJavCode } from './jav-code-filter';
import { countJavFacets, PerformerFacet, StudioFacet } from './jav-facets';
import type { Receipt } from '../components/bulk-action';
import { CatalogDisplayControls } from '../catalog-grid/catalog-view-toggle';
import { useCatalogView } from '../catalog-grid/catalog-view';
import { ColumnFilterPopover } from '../components/table-column-filter';
import { useRememberedPagination } from '../components/page-size-preferences';
import { DataTableFooter } from '../components/table-controls';
import { ReleaseTable } from './jav-release-table';
import { DISCOVERY_TABLE_ID } from './release-table-columns';

const MetadataStopGlyph = spriteGlyph('x');
const MetadataRefreshGlyph = spriteGlyph('refresh-cw');
/** 分区正文。标题、页签与筛选框在常驻页头（`JavPageHeader`）里，筛选词经地址里的 `q` 传到这里。
 *  地址已经换到别的分区或别的页、这一页还没撤下时，沿用最后一次属于它的词，不拿别人的地址重查。 */
export function JavPage({ tab, readOnly, navigate, receipt }: {
  tab: string; readOnly: boolean; navigate(path: string): void; receipt: Receipt;
}) {
  const [download, setDownload] = useState<DownloadPrefill | null>(null);
  const shown = useJavAddress();
  const params = new URLSearchParams(shown.search);
  const own = useRef('');
  if (shown.pathname === '/jav' && javTab(params.get('tab')) === tab) own.current = params.get('q') || '';
  const text = own.current;
  const setText = (value: string) => writeJavQuery({ q: value });
  return <JavSelectionProvider key={tab} readOnly={readOnly} receipt={receipt} dock={tab !== 'wants'}><div className={JAV_PAGE_BODY}>
    {tab === 'releases'
      ? <Releases readOnly={readOnly} receipt={receipt} resource={setDownload} query={text.trim()} navigate={navigate} clearText={() => setText('')} />
      : tab === 'discover'
      ? <Discover readOnly={readOnly} receipt={receipt} resource={setDownload} query={text.trim()} navigate={navigate} clearText={() => setText('')} />
      : tab === 'online' ? <OnlineCatalog navigate={navigate} query={text.trim()} />
      : <WantList readOnly={readOnly} toast={receipt} query={text.trim()} clearQuery={() => setText('')} />}
    <CloudDownloadDialog prefill={download} close={() => setDownload(null)} receipt={receipt} />
  </div></JavSelectionProvider>;
}

const DISCOVERY_RANGES = { release: 'release_date', dur: 'duration', score: 'source_score', taste: 'taste_score' } as const;
type DiscoveryRange = keyof typeof DISCOVERY_RANGES;
const DISCOVERY_TIER_LIMIT = 24;

function discoverPeople(work: Discovery): (DiscoveryPerson & { avatar_code?: string })[] {
  return discoveryCast(work.performer_refs, work.performers).map(person => ({ ...person, avatar_code: work.code }));
}

function Discover({ readOnly, receipt, resource, query, navigate, clearText }: {
  readOnly: boolean; receipt(message: string): void; resource(work: DownloadPrefill): void; query: string;
  navigate(path: string): void; clearText(): void;
}) {
  const params = new URLSearchParams(location.search);
  const [scope, changeScope] = useState<DiscoveryScope>(() => params.get('scope') === 'library' ? 'library' : 'external');
  const [tag, changeTag] = useState(() => params.get('tag') || '');
  const [performer, changePerformer] = useState(() => params.get('performer') || '');
  const [code, changeCode] = useState(() => params.get('code') || '');
  const [studio, changeStudio] = useState(() => params.get('studio') || '');
  const [ranges, setRanges] = useState<ColumnFilters>(() => readColumnFilters(params.get('column_filters') || undefined));
  const [sort, changeSort] = useState(() => discoveryOrder(params).sort);
  const [ascending, changeAscending] = useState(() => discoveryOrder(params).direction === 'asc');
  const resetFacets = (patch: Record<string, string> = {}) => {
    changeTag(''); changePerformer(''); changeStudio(''); changeCode(''); setRanges({});
    writeJavQuery({ tag: '', performer: '', studio: '', code: '', column_filters: '', ...patch });
  };
  const setScope = (value: DiscoveryScope) => {
    if (value === scope) return;
    changeScope(value);
    resetFacets({ scope: value === 'external' ? '' : value });
  };
  const setTag = (value: string) => { changeTag(value); writeJavQuery({ tag: value }) };
  const setPerformer = (value: string) => { changePerformer(value); writeJavQuery({ performer: value }) };
  const setStudio = (value: string) => { changeStudio(value); writeJavQuery({ studio: value }) };
  const setCode = (value: string) => { changeCode(value); writeJavQuery({ code: value }) };
  const setRange = (key: DiscoveryRange, value: ColumnRange | undefined) => {
    const encoded = writeColumnFilters(ranges, key, value);
    setRanges(readColumnFilters(encoded));
    writeJavQuery({ column_filters: encoded });
  };
  const setSort = (value: DiscoverySort, dir: 'asc' | 'desc') => {
    changeSort(value);
    changeAscending(dir === 'asc');
    writeJavQuery({ sort: value === 'taste' ? '' : value, dir: dir === 'asc' ? dir : '' });
  };
  const scopePane = useRef<HTMLSpanElement>(null);
  const scopeRow = useRef<HTMLDivElement>(null);
  const peopleRow = useHorizontalScroller<HTMLDivElement>();
  const studioRow = useHorizontalScroller<HTMLDivElement>();
  const scopeGlide = useViewGlide(scopePane, scopeRow, '[aria-pressed="true"]', scope);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const rows = section.current?.querySelectorAll('[data-catalog-scroll],[data-filter-row="bottom"]');
    const scrollers = [...(rows || [])].map(row => wireHorizontalScroller(row, { drag: true }));
    return () => scrollers.forEach(scroller => scroller.destroy());
  }, []);
  const settings = appSettingsStore();
  useSyncExternalStore(settings.subscribe, settings.version, settings.version);
  const layout = javLayout();
  const view = useCatalogView();
  const tableTop = useRef<HTMLDivElement>(null);
  const [listPosition, changeListPosition] = useRememberedPagination(DISCOVERY_TABLE_ID);
  const ratio = cardRatio(gridLayout({ active: true, home: false, portrait: false }));
  const direction = ascending ? 'asc' : 'desc';
  /* 推荐列表只读，自己不轮询。资料读取进行中时进度单独轮询；读到的标签与评分由全站那一处的
     `discoveries` 版本作废列表带上来，读完再取一次。 */
  const discoveries = useQuery({ queryKey: discoveryKey(scope, sort, direction), retry: false, refetchOnWindowFocus: false,
    queryFn: ({ signal }) => fetchDiscoveries(scope, signal, { sort, direction }),
  });
  const listedJob = discoveries.data?.metadata_job;
  const listedRunning = useRef(false);
  listedRunning.current = listedJob?.status === 'running';
  const progress = useQuery({ queryKey: DISCOVERY_METADATA_KEY, retry: false, refetchOnWindowFocus: false,
    enabled: scope === 'external',
    queryFn: ({ signal }) => fetchDiscoveryMetadata(signal),
    refetchInterval: metadataInterval(() => listedRunning.current),
  });
  // 两处谁新用谁：进度轮询与起停的回执写在进度那份里，列表重取时也带回当前任务。
  const metadata = progress.data && progress.dataUpdatedAt >= discoveries.dataUpdatedAt
    ? progress.data.metadata_job : listedJob;
  const jobState = (job: DiscoveryMetadataJob | null | undefined) => (job ? `${job.job_id}:${job.status}` : '');
  const answered = useRef('');
  const seen = useRef('');
  const polled = progress.data?.metadata_job;
  useEffect(() => {
    // 轮询看到这一轮从进行中到结束：列表再取一次。起停按钮自己的回执不算，它已经取过。
    const state = jobState(polled);
    const ended = seen.current.endsWith(':running') && polled && polled.status !== 'running';
    seen.current = state;
    if (ended && state !== answered.current) void discoveries.refetch();
  }, [jobState(polled)]); // eslint-disable-line react-hooks/exhaustive-deps
  const action = useAction();
  const metadataAction = useAction();
  const metadataCommand = useRef<'start' | 'stop' | 'update' | 'retry'>('start');
  const control = async (kind: 'start' | 'refresh' | 'cancel', signal?: AbortSignal) => {
    const result = await controlDiscoveryMetadata(kind, { sort, direction, jobId: metadata?.job_id }, signal);
    if (kind !== 'start') await discoveries.refetch({ cancelRefetch: true, throwOnError: true });
    // 起停之前发出的进度请求晚回来会盖掉这份回执（比如挂载时那次），先取消。
    await queryClient.cancelQueries({ queryKey: DISCOVERY_METADATA_KEY });
    answered.current = jobState(result.metadata_job);
    queryClient.setQueryData(DISCOVERY_METADATA_KEY, result);
  };
  const updateMetadata = (key: 'start' | 'stop' | 'update' | 'retry') => {
    if (metadataAction.busy) return;
    metadataCommand.current = key;
    void metadataAction.run(key, signal => control(key === 'start' ? 'start' : key === 'stop' ? 'cancel' : 'refresh', signal), () => {});
  };
  // 打开页面时补读从没读过或已过期的那几部（停下、失败的那一轮由服务端留着，不重启）；
  // 每次挂载只问一次。
  const autoStarted = useRef(false);
  const unread = scope === 'external' && metadata?.status !== 'running' && (discoveries.data?.items || [])
    .some(item => item.metadata_state === 'pending' || item.metadata_state === 'stale');
  useEffect(() => {
    if (!unread || autoStarted.current) return;
    autoStarted.current = true;
    updateMetadata('start');
  }, [unread]); // eslint-disable-line react-hooks/exhaustive-deps
  const all = discoveries.data?.items || [];
  const tagChoices = countJavFacets(all, item => item.tags || [], name => name, [tag])
    .map(({ id, count }) => ({ id, label: id, count, selected: tag === id }));
  const people = countJavFacets(all, discoverPeople, person => person.name, [performer]);
  const studios = countJavFacets(all, item => item.studio_ref ? [item.studio_ref] : item.studio ? [{ name: item.studio, has_logo: false }] : [],
    studio => studio.name, [studio]);
  const toggleTag = (name: string) => setTag(tag === name ? '' : name);
  const togglePerformer = (name: string) => setPerformer(performer === name ? '' : name);
  const toggleStudio = (name: string) => setStudio(studio === name ? '' : name);
  const filtered = !!(query || tag || performer || studio || code || ranges.release || ranges.dur || ranges.score || ranges.taste);
  const clearFilters = () => { resetFacets(); if (query) clearText() };
  const items = all.filter(item => (!tag || item.tags?.includes(tag)) &&
    (!code || matchesJavCode(item.code, code)) && (!performer || discoverPeople(item).some(person => person.name === performer)) &&
    (!studio || (item.studio_ref?.name || item.studio) === studio) &&
    (Object.keys(DISCOVERY_RANGES) as DiscoveryRange[]).every(key => {
      const filter = ranges[key];
      const value = key === 'taste' ? item.taste_score ?? item.score : item[DISCOVERY_RANGES[key]];
      return !filter || withinColumnRange(columnRangeKinds[key], filter.range, value);
    }) && (!query || [item.code, item.title, item.performers, item.studio, ...(item.tags || []), ...(item.performer_refs || []).map(ref => ref.name)].join(' ').toLocaleLowerCase().includes(query.toLocaleLowerCase())));
  const rangeMenu = (key: DiscoveryRange, label: string) => ({
    active: !!ranges[key], shouldCloseOnInteractOutside: key === 'release' ? outsideTableDateBound : undefined,
    render: (close: () => void) => <TableRangeFields label={label} kind={columnRangeKinds[key]} value={ranges[key]}
      rangeValues={key === 'release' ? all.map(item => item.release_date) : undefined}
      onChange={value => { setRange(key, value); close() }} />,
  });
  const rangeHeader = (key: DiscoveryRange, label: string) => {
    const menu = rangeMenu(key, label);
    return <ColumnFilterPopover id={`discover-column-${key}`} label={label} active={menu.active}
      shouldCloseOnInteractOutside={menu.shouldCloseOnInteractOutside}>{menu.render}</ColumnFilterPopover>;
  };
  const codeMenu = (close: () => void) => <JavCodeFilter value={code} onChange={value => { setCode(value); close() }} />;
  const waiting = discoveries.isPending;
  const tagsPending = waiting || (scope === 'external' && !tagChoices.length && metadata?.status === 'running');
  const facetError = discoveries.data ? undefined : discoveries.error;
  const facetMenus = (toolbar: boolean) => {
    const prefix = toolbar ? 'jav-discover' : 'discover-column';
    return {
      people: <FilterDropdown id={`${prefix}-performers`} orderKey="performer" toolbar={toolbar} label={t('catalog:shared.performers')} active={!!performer}
        pending={waiting} error={facetError} withAvatar choices={people.map(({ id, value, count }) => ({ id, count, label: entityDisplayName('performer', value.name, value.id),
          searchTerms: [value.name], selected: performer === id, leading: <ColumnFilterAvatar person={value} /> }))}
        onSelect={name => setPerformer(performer === name ? '' : name)} onClear={performer ? () => setPerformer('') : undefined} />,
      studio: <FilterDropdown id={`${prefix}-studios`} orderKey="studio" toolbar={toolbar} label={t('catalog:shared.label')} active={!!studio}
        pending={waiting} error={facetError} withAvatar choices={studios.map(({ id, value, count }) => ({ id, count, label: value.name, selected: studio === id,
          leading: <ColumnFilterStudioAvatar studio={value} /> }))}
        onSelect={name => setStudio(studio === name ? '' : name)} onClear={studio ? () => setStudio('') : undefined} />,
      tags: <FilterDropdown id={`${prefix}-tags`} orderKey="tags" toolbar={toolbar} label={t('catalog:shared.tags')} active={!!tag}
        pending={tagsPending} error={facetError} choices={tagChoices} onSelect={toggleTag} onClear={tag ? () => setTag('') : undefined} />,
    };
  };
  const toolbarFacets = facetMenus(true);
  const want = (item: Discovery) => {
    void action.run(String(item.id), signal => addWant({ code: item.code }, signal), () => {
      receipt(t('catalog:javWant.added')); void invalidateWants(); void discoveries.refetch();
    });
  };
  const lastPage = Math.max(0, Math.ceil(items.length / listPosition.pageSize) - 1);
  const listPage = Math.min(listPosition.pageIndex, lastPage);
  const start = listPage * listPosition.pageSize;
  const shown = view === 'list' ? items.slice(start, start + listPosition.pageSize) : items;
  useVisibleJavWorks(shown);
  const rectangle = useJavRectangle(!waiting);
  return <section ref={section} aria-label={t('catalog:shared.recommendedForYou')} aria-busy={waiting} className="flex min-w-0 flex-col gap-4">
    {waiting ? <div className="contents" dangerouslySetInnerHTML={{ __html: javFacetTiersHtml() }} />
      : people.length || studios.length ? <div data-catalog-tiers="" data-discover-tiers="" className={JAV_CATALOG_TIERS}>
        {people.length ? <div ref={peopleRow} data-catalog-tier="performers" role="group" aria-label={t('catalog:javReleases.filterByActress')}>
          {people.slice(0, DISCOVERY_TIER_LIMIT).map(({ id, value, count }) => <PerformerFacet key={id}
            person={value} count={count} pressed={performer === id} onClick={() => togglePerformer(id)} />)}
        </div> : null}
        {studios.length ? <div ref={studioRow} data-catalog-tier="studios" role="group" aria-label={t('catalog:javReleases.filterByLabel')}>
          {studios.slice(0, DISCOVERY_TIER_LIMIT).map(({ id, value, count }) => <StudioFacet key={id}
            studio={value} count={count} pressed={studio === id} onClick={() => toggleStudio(id)} />)}
        </div> : null}
      </div> : null}
    <FilterGlassRows label={t('catalog:javDiscover.filtersLabel')} topLabel={t('catalog:javDiscover.scopeLabel')} attrs={{ 'data-filter-frame': '', 'data-jav-filter': '', 'data-catalog-frame': '' }}
      busy={waiting} topClassName="gap-1.5 overflow-visible" bottomClassName="min-h-12"
      panes={<span ref={scopePane} data-view-glide="" aria-hidden="true" />}
      top={<div data-catalog-scroll="">
        <div ref={scopeRow} role="group" aria-label={t('catalog:javDiscover.scopeLabel')} data-catalog-views="" onPointerLeave={scopeGlide.leave}>
          {([['external', t('catalog:javDiscover.external')], ['library', t('catalog:javDiscover.library')]] as const).map(([key, label]) =>
            <button key={key} type="button" data-catalog-view={key} data-entity-press=""
              aria-pressed={scope === key} onPointerEnter={scopeGlide.hover} onClick={() => setScope(key)}>{label}</button>)}
          {tagsPending || tagChoices.length ? <span data-entity-sep="" aria-hidden="true" /> : null}
        </div>
        {tagsPending ? <div data-filter-tag-strip="" data-skeleton={JAV_TAG_STRIP_SKELETON} data-loading="" aria-hidden
          dangerouslySetInnerHTML={{ __html: javTagPlaceholdersHtml() }} />
          : <FilterTagStrip choices={tagChoices} onSelect={toggleTag} />}
      </div>} bottom={<>
        <span data-catalog-summary="">
          <span data-catalog-readout="">{waiting ? <span data-skeleton="count" aria-hidden className="relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen" /> : t('catalog:countLabel.works', { count: items.length })}</span>
          <LibraryShortcuts currentHref={() => location.pathname + location.search} />
        </span>
        <JavGlassSearch tab="discover" />
        {filtered ? <FilterActionButton onPress={clearFilters}>{t('catalog:shared.clearFilters')}</FilterActionButton> : null}
        <FilterToolbarControls tools={<>
        {scope === 'external' ? <FilterIconButton data-entity-batch="" data-jav-metadata-update=""
          label={metadata?.status === 'running' ? t('catalog:javDiscover.stopUpdating') : t('catalog:javDiscover.updateMetadata')}
          disabled={waiting} data-skeleton-action={waiting ? '' : undefined} busy={!!metadataAction.busy}
          icon={metadata?.status === 'running' ? MetadataStopGlyph : MetadataRefreshGlyph}
          onPress={() => updateMetadata(metadata?.status === 'running' ? 'stop' : 'update')} /> : null}
        <CatalogDisplayControls cardLayout={<Segments label={t('catalog:entityFilter.javCardLayout')} value={layout} options={JAV_LAYOUTS} onChange={storeJavLayout} />} />
        </>} fields={<>
          {toolbarFacets.people}{toolbarFacets.studio}{toolbarFacets.tags}
        </>} sorts={<SortKeys group="discover" sorts={DISCOVERY_SORTS.map(([key, label, ariaLabel]) => ({ key, label, ariaLabel,
          pressed: key === sort, dir: direction }))} onSort={(key, dir) => setSort(key as DiscoverySort, dir)} filters={{
            release_date: rangeMenu('release', t('catalog:catalogList.releaseDate')),
            duration: rangeMenu('dur', t('catalog:catalogList.duration')),
            source_score: rangeMenu('score', t('catalog:javSort.siteRating')),
            taste: rangeMenu('taste', t('catalog:javSort.taste')),
            code: { active: !!code, render: codeMenu },
          }} />} />
      </>} />
    {waiting && view === 'cards' ? <div role="status" aria-label={t('catalog:javDiscover.loading')} dangerouslySetInnerHTML={{ __html: javContentSkeleton('discover', layout) }} /> : null}
    {discoveries.error ? <QueryErrorNote titleKey="catalog:javDiscover.failed" query={discoveries} /> : null}
    {scope === 'external' && metadata?.status === 'running' ? <div data-jav-metadata="" className="min-w-0"><TaskProgress kind={activityKind('jav-discovery-metadata')}
        label={t('catalog:javMetadata.loadingProgress', { completed: metadata.completed, count: metadata.total })} value={metadata.completed} total={metadata.total} /></div> : null}
    {metadata && metadata.status !== 'running' && (metadata.status !== 'complete' || metadata.failed > 0)
      ? <Note tone="neutral" action={<Button variant="secondary" {...busyProps(metadataAction.busy === 'retry')}
        aria-label={t('catalog:javMetadata.retry')} onClick={() => updateMetadata('retry')}>{t('catalog:shared.retryNow')}</Button>}>{jobText(metadata) || t('catalog:javMetadata.progress', { completed: metadata.completed, count: metadata.total })}</Note> : null}
    {scope === 'external' && metadataAction.error ? <Note tone="error"
      title={<span data-copy-key="catalog.javMetadata.requestFailed">{t('catalog:javMetadata.requestFailed')}</span>} action={
      <Button variant="secondary" size="small" disabled={!!metadataAction.busy}
        onClick={() => updateMetadata(metadataCommand.current)}>{t('catalog:shared.retryNow')}</Button>
    }>{metadataAction.error}</Note> : null}
    {!waiting && !discoveries.error && !items.length ? <EmptyState icon={RiCompassLine} title={filtered ? t('catalog:javDiscover.noMatches') : t('catalog:javDiscover.noTasteMatches')}
      actions={<><ButtonLink size="small" href="/taste" variant="secondary">{t('catalog:javDiscover.viewTaste')}</ButtonLink>
        {filtered ? <Button variant="primary" size="small" onClick={clearFilters}>{t('catalog:shared.clearFilters')}</Button>
        : scope === 'library' ? <ButtonLink variant="primary" size="small" href="/">{t('catalog:entityPage.browseCollection')}</ButtonLink>
        : <ButtonLink variant="primary" size="small" href="/jav?tab=online">{t('catalog:javTabs.online')}</ButtonLink>}</>}>
      {filtered ? t('catalog:javDiscover.clearFiltersHint') : scope === 'library' ? t('catalog:javDiscover.libraryEmptyHint') : t('catalog:javDiscover.externalEmptyHint')}
    </EmptyState> : null}
    {action.error ? <Note tone="error">{action.error}</Note> : null}
    {view === 'list' ? waiting || items.length > 0 ? <><ReleaseTable items={shown} waiting={waiting} tableTop={tableTop}
      discovery={{ sort, dir: direction, tag, headers: {
        ...facetMenus(false),
        release: rangeHeader('release', t('catalog:catalogList.releaseDate')),
        dur: rangeHeader('dur', t('catalog:catalogList.duration')),
        score: rangeHeader('score', t('catalog:javSort.siteRating')),
        taste: rangeHeader('taste', t('catalog:javSort.taste')),
        code: <ColumnFilterPopover id="discover-column-code" label={t('catalog:shared.code')} active={!!code}>{codeMenu}</ColumnFilterPopover>,
      } }} javImage={settings.value.javImage} readOnly={readOnly} navigate={navigate}
      onTag={toggleTag} onSort={(key, dir) => { if (key !== 'random') setSort(key, dir) }}
      wanting={item => action.busy === String(item.id)} onWant={want} onResource={item => resource(resourcePrefill(item))} />
      {!waiting ? <DataTableFooter label={t('catalog:javTabs.discover')} total={items.length}
        pagination={{ pageIndex: listPage, pageSize: listPosition.pageSize }} onChange={changeListPosition} scrollTarget={tableTop}
        stickyHeader={() => section.current?.querySelector<HTMLElement>('[data-filter-frame]') ?? null}
        unit={t('catalog:catalogList.footerUnit')} pageUnit={t('catalog:catalogList.footerPageUnit')} /> : null}</> : null
    : <div data-media-grid="" className={JAV_RECOMMENDATION_GRID} style={{ '--card-ratio': ratio } as CSSProperties} {...rectangle}>
      {items.map(item => {
        const recommendation = recommendationScore(item.taste_score ?? item.score);
        const scoreDetails = [recommendation.label, t('catalog:javScore.taste', { score: discoveryScore(item.taste_score ?? item.score) }),
          discoveries.data?.ranking_method === 'mmr' && item.ranking_score != null ? t('catalog:javScore.ranking', { score: discoveryScore(item.ranking_score) }) : '',
          item.source_score != null ? t('catalog:javScore.siteRating', { rating: item.source_score.toFixed(1) }) : '', ...serverLabelList(item.reasons, item.reason_codes, item.reason_params)].filter(Boolean).join(' · ');
        return <DiscoveryCard key={item.id} item={item} layout={layout} javImage={settings.value.javImage} readOnly={readOnly}
          navigate={navigate} tag={tag} onTag={setTag} wanting={action.busy === String(item.id)}
          onWant={() => want(item)}
          onResource={() => resource(resourcePrefill(item))}
          badge={<button data-jav-taste-score="" type="button" title={scoreDetails} aria-label={t('catalog:javScore.badgeLabel', { score: recommendation.score, label: recommendation.label })}
            className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring">
            <Chip color={recommendation.color}>{recommendation.label}</Chip>
          </button>} />;
      })}
    </div>}
  </section>;
}
