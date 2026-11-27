import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { VisuallyHidden } from 'react-aria-components';
import { RiCompassLine } from '@remixicon/react';
import { appSettingsStore, cardRatio, gridLayout, javLayout, JAV_LAYOUTS, storeJavLayout } from '@peach/appearance';
import { Chip } from '@/components/base/badges/chip';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { apiGet, errorMessage } from '../../api';
import { JAV_CATALOG_TIERS, JAV_RECOMMENDATION_GRID, JAV_TAG_STRIP_SKELETON, javFacetTiersHtml, javTagPlaceholdersHtml, onlineCatalogCardsHtml } from '../../jav-skeleton';
import { JavGlassSearch } from './jav-header';
import { castPersonName, dmmPerformerName } from '../components/cast-popover';
import { t } from '../../i18n';
import { columnRangeKinds, readColumnFilters, withinColumnRange, writeColumnFilters, type ColumnRange } from '../../column-filters';
import { CatalogDisplayControls } from '../catalog-grid/catalog-view-toggle';
import { useCatalogView } from '../catalog-grid/catalog-view';
import { EmptyState } from '../components/empty-state';
import { ColumnFilterAvatar, ColumnFilterStudioAvatar } from '../components/column-filter-avatar';
import { FilterChoiceList, FilterDropdown } from '../components/filter-dropdown';
import { FilterGlassRows, FilterTagStrip, FilterToolbarControls, useFilterScope } from '../components/filter-glass';
import { MenuDialog } from '../components/menu-dialog';
import { Note } from '../components/note';
import { Select, SelectItem } from '../components/select';
import { ColumnFilterPopover } from '../components/table-column-filter';
import { columnRangeSummary, outsideTableDateBound, TableColumnRange, TableRangeFields } from '../components/table-column-range';
import { Pagination } from '../components/table-pagination';
import { useHorizontalScroller } from '../components/use-horizontal-scroller';
import { useViewGlide } from '../components/use-view-glide';
import { Combo, Segments, SortKeys } from '../entity-filter/entity-filter-page';
import type { EntityComboItem } from '../entity-filter/entity-filter';
import { useEntityNames } from '../use-entity-names';
import { DiscoveryCard } from './discovery-card';
import { type DiscoveryPerson } from './discovery-faces';
import { countJavFacets, PerformerFacet, StudioFacet } from './jav-facets';
import { JavCodeFilter, matchesJavCode } from './jav-code-filter';
import { useJavRectangle, useVisibleJavWorks } from './jav-selection';
import { ONLINE_SORTS, ONLINE_STATUS,
  onlineSorting, onlineStatus, type OnlineSortKey, type OnlineStatus } from './online-catalog-layout';
import { writeJavQuery, type Discovery, type ReleaseFacetStudio } from './jav';
import { OnlineCatalogTable } from './online-catalog-table';
import { useDatalistSuggest } from '../search/datalist-suggest';
import { librarySuggest } from '../search/library-suggest';

const PERFORMER_SUGGEST = librarySuggest(['performer']);

interface CatalogTag { id: string; name: string; source_name: string }
type CatalogStudio = CatalogTag & Omit<ReleaseFacetStudio, 'count'> & { entity_id?: number | null };
type CatalogPerson = DiscoveryPerson & { dmm_id: string; source_url: string };
type CatalogPerformerOption = Omit<DiscoveryPerson, 'id'> & { id: string; entity_id?: number | null };

interface CatalogWork {
  id: string; code: string; title: string; date: string; pre_order: boolean; url: string; cover_url: string;
  people: CatalogPerson[]; studio: CatalogStudio | null; tags: CatalogTag[]; duration: number | null;
}
const EMPTY_WORKS: CatalogWork[] = [];

interface CatalogPage {
  items: CatalogWork[]; total: number; page: number; pages: number; size: number;
  performer_options: CatalogPerformerOption[]; selected_actress?: string;
  coverUnverified?: boolean;
  coverOmitted?: boolean;
}

async function withAvailableCovers(page: CatalogPage, signal: AbortSignal): Promise<CatalogPage> {
  let coverUnverified = false;
  const items = await Promise.all(page.items.map(async work => {
    if (!work.cover_url) return null;
    try {
      const response = await fetch(work.cover_url, { method: 'HEAD', signal });
      if (response.ok && response.headers.get('content-type')?.startsWith('image/')) return work;
      if (response.status === 404 || response.status === 410) return null;
    } catch (error) {
      if (signal.aborted) throw error;
    }
    coverUnverified = true;
    return null;
  }));
  const covered = items.filter((work): work is CatalogWork => work !== null);
  return { ...page, items: covered, coverUnverified, coverOmitted: covered.length < page.items.length };
}

function catalogFilters() {
  const params = new URLSearchParams(location.search);
  return { performer: params.get('performer') || '', actress: params.get('actress') || '', date: params.get('date') || '',
    maker: params.get('maker') || '', genre: params.get('genre') || '',
    page: Math.max(1, Math.floor(Number(params.get('page'))) || 1) };
}

type Filters = ReturnType<typeof catalogFilters>;
export type CatalogItem = Discovery & { catalogId: string; preOrder: boolean; studioOption: CatalogStudio | null; tagOptions: CatalogTag[] };

const RANGE_FIELDS = ['release', 'dur'] as const;
type RangeKey = typeof RANGE_FIELDS[number];
type SortState = ReturnType<typeof onlineSorting>;
const codeOrder = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

function sortCatalogPage(works: CatalogWork[], { sort, dir }: SortState) {
  if (sort === 'release' && dir === 'desc') return works;
  const value = (work: CatalogWork) => sort === 'dur' ? work.duration : sort === 'code' ? work.code : work.date;
  return [...works].sort((a, b) => {
    const left = value(a), right = value(b);
    if (!left || !right) return Number(!left) - Number(!right);
    const comparison = typeof left === 'number' && typeof right === 'number'
      ? left - right : codeOrder.compare(String(left), String(right));
    return dir === 'asc' ? comparison : -comparison;
  });
}

function genresFromAddress(genre: string): string[] {
  return genre ? genre.split(',') : [];
}

function visibleTags(tags: CatalogTag[], selected: string[]): CatalogTag[] {
  const byName = new Map<string, CatalogTag>();
  for (const tag of tags) {
    const current = byName.get(tag.name);
    if (!current || (!selected.includes(current.id) && selected.includes(tag.id))) byName.set(tag.name, tag);
  }
  return [...byName.values()];
}

type Facet<T> = ReturnType<typeof countJavFacets<CatalogWork, T>>[number];

function CatalogPerformerFilter({ filters, data, people, selected, personLabel, pending, error, go, close }: {
  filters: Filters; data?: CatalogPage; people: Facet<CatalogPerson>[]; selected: string; go(next: Filters): void; close(): void;
  personLabel: string; pending: boolean; error: unknown;
}) {
  const [name, setName] = useState(personLabel);
  // 敲名字时给馆藏里的女优候选（名字与别名都认），提交方式不变。
  const suggestions = useDatalistSuggest('online-performer', name, PERFORMER_SUGGEST);
  const choose = (performer: string, actress: string) => {
    go({ ...filters, performer, actress, page: 1 });
    close();
  };
  return <MenuDialog aria-label={t('follow:addJavFeed.actressName')} className="py-3 outline-none">
    <form className="flex flex-col gap-3 px-3" onSubmit={event => {
      event.preventDefault();
      const performer = name.trim();
      if (performer === personLabel) choose(filters.performer, selected);
      else choose(performer, '');
    }} data-copy-interact="">
      <Input size="small" label={t('follow:addJavFeed.actressName')} value={name} onChange={setName} maxLength={120} ref={suggestions.bind} />
      {suggestions.list}
      {!pending && data && data.performer_options.length > 1 ? <Select size="sm" aria-label={t('catalog:javOnline.performerPage')}
        prefix={t('catalog:javOnline.performerPage')} selectedKey={data.selected_actress}
        onSelectionChange={key => { if (key !== null) choose(filters.performer, String(key)) }}>
        {data.performer_options.map(option => <SelectItem key={option.id} id={option.id}>
          {castPersonName({ ...option, id: option.entity_id, dmm_id: option.id })}
        </SelectItem>)}
      </Select> : null}
      <div className="flex justify-end gap-2">
        {filters.performer || filters.actress ? <Button size="small" variant="ghost" type="button"
          onClick={() => choose('', '')}>{t('catalog:rangeFilter.clear')}</Button> : null}
        <Button size="small" type="submit">{t('follow:shared.search')}</Button>
      </div>
    </form>
    {pending || people.length ? <div className="mt-2">
      <p className="mb-1 px-3 text-caption-1-regular text-text-secondary">{t('catalog:javOnline.facetScope')}</p>
      <FilterChoiceList pending={pending} withAvatar choices={people.map(({ id, value, count }) => ({
        id, count, label: castPersonName(value), searchTerms: [value.name, value.source_name || '', value.source_zh_cn || ''], selected: id === selected,
        leading: <ColumnFilterAvatar person={value} />,
      }))} onSelect={id => {
        const person = people.find(option => option.id === id)?.value;
        if (person) choose(id === selected ? '' : person.source_name || person.name, id === selected ? '' : id);
      }} />
    </div> : error ? <div className="px-3 pt-2"><Note tone="error">{errorMessage(error)}</Note></div> : null}
  </MenuDialog>;
}

export function OnlineCatalog({ navigate, query: keyword = '' }: { navigate(path: string): void; query?: string }) {
  const namesVersion = useEntityNames();
  const [filters, setFilters] = useState(catalogFilters);
  const [sorting, setSorting] = useState(onlineSorting);
  const [code, setCode] = useState(() => new URLSearchParams(location.search).get('code') || '');
  const [ranges, setRanges] = useState(() => {
    const { release, dur } = readColumnFilters(new URLSearchParams(location.search).get('column_filters') || undefined);
    return { release, dur };
  });
  const [status, setStatus] = useState(onlineStatus);
  const [conditionNames, setConditionNames] = useState<Record<string, string>>({});
  const [openFacet, setOpenFacet] = useState('');
  const settings = appSettingsStore();
  useSyncExternalStore(settings.subscribe, settings.version, settings.version);
  const view = useCatalogView();
  const layout = javLayout();
  const ratio = cardRatio(gridLayout({ active: true, home: false, portrait: false }));
  const label = t('catalog:javTabs.online');
  const performerLabel = t('catalog:shared.performers');
  const studioLabel = t('catalog:shared.label');
  const tagsLabel = t('catalog:shared.tags');
  const dateLabel = t('catalog:catalogList.releaseDate');
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['jav-catalog', filters], retry: false, refetchOnWindowFocus: false, staleTime: 300_000,
    placeholderData: keepPreviousData,
    queryFn: async ({ signal }) => withAvailableCovers(
      await apiGet<CatalogPage>(`/api/jav/catalog?${new URLSearchParams({ ...filters, page: String(filters.page) })}`, signal), signal),
  });
  const waiting = query.isPending || query.isPlaceholderData;
  const initialLoading = query.isPending;
  const facetError = query.data ? undefined : query.error;
  useEffect(() => {
    const data = query.data;
    if (waiting || !data || data.page === filters.page) return;
    const next = { ...filters, page: data.page };
    queryClient.setQueryData(['jav-catalog', next], data);
    setFilters(next);
    writeJavQuery({ page: data.page > 1 ? String(data.page) : '' });
  }, [filters, query.data, queryClient, waiting]);
  const go = (next: Filters, query: Record<string, string> = {}) => {
    setFilters(next);
    writeJavQuery({ ...next, ...query, page: next.page > 1 ? String(next.page) : '' });
  };
  const sortBy = (sort: OnlineSortKey, dir: SortState['dir']) => {
    setSorting({ sort, dir });
    writeJavQuery({ sort: sort === 'release' ? '' : sort, dir: dir === 'asc' ? 'asc' : '' });
  };
  const peopleRef = useHorizontalScroller<HTMLDivElement>();
  const studiosRef = useHorizontalScroller<HTMLDivElement>();
  const scrollRef = useHorizontalScroller<HTMLDivElement>();
  const viewRow = useRef<HTMLSpanElement>(null);
  const viewPane = useRef<HTMLSpanElement>(null);
  const scope = useFilterScope(status);
  const chooseStatus = (next: OnlineStatus) => {
    setStatus(next);
    writeJavQuery({ status: next === 'all' ? '' : next });
  };
  const hasPerformer = !!(filters.performer || filters.actress);
  const activeFacet = hasPerformer ? 'online-performer'
    : filters.maker ? 'online-studio' : filters.genre ? 'online-tags' : '';
  const anchor = openFacet || activeFacet;
  const glide = useViewGlide(viewPane, viewRow, '[data-glide-anchor]', anchor);
  const viewTrigger = (id: string) => ({
    anchor: anchor === id, onPointerEnter: glide.hover,
    onOpenChange: (open: boolean) => setOpenFacet(current => open ? id : current === id ? '' : current),
  });
  const actress = filters.actress || (waiting ? '' : query.data?.selected_actress || '');
  /* 目录站自己不认关键词：页头那个框只在取回的这一页里按番号、片名、女优、厂牌与标签筛。 */
  const fetched = query.data?.items ?? EMPTY_WORKS;
  const works = useMemo(() => {
    const needle = keyword.toLocaleLowerCase();
    return needle ? fetched.filter(work => [work.code, work.title, work.studio?.name, work.studio?.source_name,
      ...work.people.flatMap(person => [person.name, person.source_name, person.source_zh_cn, castPersonName(person)]),
      ...work.tags.flatMap(tag => [tag.name, tag.source_name])].join(' ').toLocaleLowerCase().includes(needle)) : fetched;
  }, [fetched, keyword, namesVersion]);
  const genres = genresFromAddress(filters.genre);
  const people = countJavFacets(works, work => work.people, person => person.dmm_id, [actress]);
  const studios = countJavFacets(works, work => work.studio ? [work.studio] : [], studio => studio.id, [filters.maker]);
  const tags = countJavFacets(works, work => work.tags, tag => tag.id, genres);
  const tagVariants = new Map<string, number>();
  for (const { value } of tags) tagVariants.set(value.name, (tagVariants.get(value.name) || 0) + 1);
  const tagChoices = tags.map(({ id, value, count }) => ({
    id, label: value.name, searchTerms: [value.source_name], count, selected: genres.includes(id),
    content: (tagVariants.get(value.name) || 0) > 1 && value.source_name !== value.name
      ? <>{value.name}<span className="ml-2 text-caption-1-regular text-text-secondary">{value.source_name}</span></>
      : undefined,
  }));
  // 快捷条每个规范标签只占一格。下拉仍可选各来源编号，因为 DMM 同传两个编号会取交集。
  const quickTagIds = new Set(visibleTags(tags.map(({ value }) => value), genres).map(tag => tag.id));
  const quickTags = tagChoices.filter(choice => quickTagIds.has(choice.id));
  const activePerson = people.find(option => option.id === actress)?.value;
  const activeOption = query.data?.performer_options.find(option => option.id === actress);
  const personLabel = activePerson ? castPersonName(activePerson)
    : activeOption ? castPersonName({ ...activeOption, id: activeOption.entity_id, dmm_id: activeOption.id })
      : dmmPerformerName(filters.performer || actress);
  const studioName = studios.find(option => option.id === filters.maker)?.value.name
    || conditionNames[`studio:${filters.maker}`] || filters.maker;
  const genreName = (id: string) =>
    tags.find(option => option.id === id)?.value.name || conditionNames[`tag:${id}`] || id;
  const choosePerson = (person: DiscoveryPerson) => {
    const active = person.dmm_id === actress;
    go({ ...filters, performer: active ? '' : person.source_name || person.name, actress: active ? '' : person.dmm_id || '', page: 1 });
  };
  const chooseStudio = (id: string) => {
    const value = studios.find(option => option.id === id)?.value;
    if (value) setConditionNames(current => ({ ...current, [`studio:${id}`]: value.name }));
    go({ ...filters, maker: id === filters.maker ? '' : id, page: 1 });
  };
  const chooseTag = (id: string) => {
    const selected = genres.includes(id);
    if (id && !selected) setConditionNames(current => ({ ...current, [`tag:${id}`]: genreName(id) }));
    const next = !id ? [] : selected ? genres.filter(value => value !== id) : [...genres, id];
    go({ ...filters, genre: next.join(','), page: 1 });
  };
  const dateRange = filters.date ? { range: { min: filters.date, max: filters.date } } : ranges.release;
  const changeRanges = (next: typeof ranges, nextFilters?: Filters) => {
    setRanges(next);
    const query = { column_filters: writeColumnFilters({ release: next.release }, 'dur', next.dur) };
    if (nextFilters) go(nextFilters, query);
    else writeJavQuery(query);
  };
  const changeRange = (key: RangeKey, value: ColumnRange | undefined) => {
    const exactDate = key === 'release' && value?.range.min === value?.range.max ? String(value?.range.min || '') : '';
    changeRanges({ ...ranges, [key]: exactDate ? undefined : value },
      key === 'release' && exactDate !== filters.date ? { ...filters, date: exactDate, page: 1 } : undefined);
  };
  const changeCode = (value: string) => { setCode(value); writeJavQuery({ code: value }) };
  const performerFilter = (id: string, toolbar: boolean) => <ColumnFilterPopover id={id} orderKey="performer"
    label={performerLabel} active={hasPerformer} toolbar={toolbar} view={toolbar ? viewTrigger(id) : undefined}>
    {close => <CatalogPerformerFilter filters={filters} data={query.data} people={people} selected={actress} personLabel={personLabel} pending={waiting} error={facetError} go={go} close={close} />}
  </ColumnFilterPopover>;
  const studioFilter = (id: string, toolbar: boolean) => <FilterDropdown id={id} orderKey="studio" toolbar={toolbar}
    view={toolbar ? viewTrigger(id) : undefined} label={studioLabel} active={!!filters.maker}
    hint={t('catalog:javOnline.facetScope')} onSelect={chooseStudio} onClear={filters.maker ? () => chooseStudio('') : undefined}
    pending={waiting} error={facetError} withAvatar choices={studios.map(({ id, value, count }) => ({ id, label: value.name, searchTerms: [value.source_name],
      count, selected: id === filters.maker, leading: <ColumnFilterStudioAvatar studio={value} /> }))} />;
  const tagsFilter = (id: string, toolbar: boolean) => <FilterDropdown id={id} orderKey="tags" toolbar={toolbar}
    view={toolbar ? viewTrigger(id) : undefined} label={tagsLabel} active={!!filters.genre}
    hint={t('catalog:javOnline.facetScope')} onSelect={chooseTag} onClear={genres.length ? () => chooseTag('') : undefined}
    pending={waiting} error={facetError} choices={tagChoices} />;
  const clearFilter = (key: string) => {
    if (key === 'performer') go({ ...filters, performer: '', actress: '', page: 1 });
    else if (key === 'maker') go({ ...filters, maker: '', page: 1 });
    else if (key === 'release' || key === 'dur') changeRange(key, undefined);
    else if (key === 'code') changeCode('');
  };
  const combo: EntityComboItem[] = [];
  if (hasPerformer) combo.push({ kind: 'clear', key: 'performer', label: `${performerLabel} ${personLabel}` });
  if (filters.maker) combo.push({ kind: 'clear', key: 'maker', label: `${studioLabel} ${studioName}` });
  for (const key of RANGE_FIELDS) {
    const range = key === 'release' ? dateRange : ranges.dur;
    if (range) combo.push({ kind: 'clear', key,
      label: `${key === 'release' ? dateLabel : t('catalog:catalogList.duration')} ${columnRangeSummary(columnRangeKinds[key], range.range)}` });
  }
  if (code) combo.push({ kind: 'clear', key: 'code', label: `${t('catalog:shared.code')} ${code}` });
  for (const id of genres) combo.push({ kind: 'untag', key: id, label: genreName(id) });
  const pageFiltered = status !== 'all' || !!(code || ranges.dur || (!filters.date && ranges.release));
  const items = useMemo<CatalogItem[]>(() => {
    if (waiting) return [];
    const showing = pageFiltered ? works.filter(work => (status === 'all' || work.pre_order === (status === 'preOrder'))
      && (!code || matchesJavCode(work.code, code))
      && (filters.date || !ranges.release || withinColumnRange('date', ranges.release.range, work.date))
      && (!ranges.dur || withinColumnRange('duration', ranges.dur.range, work.duration))) : works;
    return sortCatalogPage(showing, sorting).map((work, index) => {
      const tagOptions = visibleTags(work.tags, genresFromAddress(filters.genre));
      return {
        id: index + 1, catalogId: work.id, code: work.code, title: work.title, performer_refs: work.people,
        performers: '', studio: work.studio?.name || '', studio_ref: work.studio || undefined, studioOption: work.studio,
        tagOptions, tags: tagOptions.map(tag => tag.name), duration: work.duration,
        release_date: work.date, link: work.url, cover_url: work.cover_url,
        online_cover_url: work.cover_url, has_cover: false, wanted: false, preOrder: work.pre_order,
      };
    });
  }, [waiting, pageFiltered, works, status, code, filters.date, filters.genre, ranges.release, ranges.dur, sorting]);
  const selectable = useMemo(() => items.filter(item => item.code), [items]);
  useVisibleJavWorks(selectable);
  const rectangle = useJavRectangle(!waiting && selectable.length > 0);
  const localOrder = sorting.sort !== 'release' || sorting.dir === 'asc';
  const showTable = view === 'list' && (waiting || Boolean(query.data));
  const empty = query.data && !waiting && !items.length && !query.error && !query.data.coverUnverified
    ? <EmptyState icon={RiCompassLine}
        title={t(works.length ? 'catalog:javOnline.noPageMatches'
          : query.data.total ? 'catalog:javOnline.noCoveredWorks' : 'catalog:javOnline.noMatches')}
        actions={works.length ? <Button size="small" onClick={() => {
          setStatus('all'); setCode(''); setRanges({ release: undefined, dur: undefined });
          writeJavQuery({ status: '', code: '', column_filters: '' });
        }}>{t('catalog:shared.clearFilters')}</Button> : null}>{null}</EmptyState> : null;
  return <section aria-label={label} aria-busy={waiting} className="flex min-w-0 flex-col gap-4">
    {initialLoading ? <div className="contents" dangerouslySetInnerHTML={{ __html: javFacetTiersHtml() }} />
      : people.length || studios.length ? <div data-catalog-tiers="" className={JAV_CATALOG_TIERS}>
      {people.length ? <div ref={peopleRef} data-catalog-tier="performers" role="group" aria-label={t('catalog:javReleases.filterByActress')}>
        {people.map(({ id, value, count }) => <PerformerFacet key={id} person={value} count={count}
          pressed={id === actress} onClick={() => choosePerson(value)} />)}
      </div> : null}
      {studios.length ? <div ref={studiosRef} data-catalog-tier="studios" role="group" aria-label={t('catalog:javReleases.filterByLabel')}>
        {studios.map(({ id, value, count }) => <StudioFacet key={id} studio={value} count={count}
          pressed={id === filters.maker} onClick={() => chooseStudio(id)} showCount={false} />)}
      </div> : null}
    </div> : null}
    <FilterGlassRows label={t('catalog:catalogFilter.filterAndSort')} topLabel={t('catalog:catalogFilter.viewsAndTags')}
      attrs={{ 'data-filter-frame': '', 'data-jav-filter': '', 'data-catalog-frame': '' }}
      topClassName="gap-1.5 overflow-visible" bottomClassName="min-h-12"
      busy={waiting}
      panes={<>{scope.pane}<span ref={viewPane} data-view-glide="" aria-hidden="true" /></>}
      top={<div ref={scrollRef} data-catalog-scroll="">
        {scope.choices(t('catalog:javOnline.pageStatus'), ONLINE_STATUS.map(([key, label]) =>
          ({ key, label: t(label), attrs: { 'data-online-status': key } })), chooseStatus)}
        {initialLoading ? <div data-filter-tag-strip="" data-skeleton={JAV_TAG_STRIP_SKELETON} data-loading="" aria-hidden
          dangerouslySetInnerHTML={{ __html: javTagPlaceholdersHtml() }} />
          : <FilterTagStrip choices={quickTags} onSelect={chooseTag} />}
      </div>} bottom={<>
        <span data-catalog-summary=""><span data-catalog-readout="">{waiting ? <span data-skeleton="count" aria-hidden
          className="skeleton-sheen inline-block h-3.5 w-28 rounded-md" /> : query.data && (query.data.coverOmitted || pageFiltered)
          ? t('catalog:javOnline.coveredCount', { shown: items.length, total: query.data.total })
          : t('catalog:countLabel.works', { count: query.data?.total || 0 })}</span>
        {localOrder ? <span className="whitespace-nowrap text-caption-1-regular text-text-secondary">{t('catalog:javOnline.localSort')}</span> : null}
        {pageFiltered ? <span className="whitespace-nowrap text-caption-1-regular text-text-secondary">{t('catalog:javOnline.pageFilters')}</span> : null}
        <JavGlassSearch tab="online" />
        </span>
        <FilterToolbarControls tools={<>
          <CatalogDisplayControls cardLayout={<Segments label={t('catalog:entityFilter.javCardLayout')} value={layout} options={JAV_LAYOUTS} onChange={storeJavLayout} />} />
        </>} fieldGroup={{ ref: viewRow, role: 'group', 'aria-label': t('catalog:javDiscover.filtersLabel'), onPointerLeave: glide.leave }}
          fields={<>
            {performerFilter('online-performer', true)}
            {studioFilter('online-studio', true)}
            {tagsFilter('online-tags', true)}
          </>} sorts={<SortKeys group="javOnline" sorts={ONLINE_SORTS.map(([key, label]) => ({
            key, label: t(label), ariaLabel: t(label), pressed: sorting.sort === key, dir: sorting.dir,
          }))} onSort={(key, dir) => sortBy(key as OnlineSortKey, dir)}
            filters={{
              release: { active: !!dateRange, required: true, shouldCloseOnInteractOutside: outsideTableDateBound,
                render: close => <TableRangeFields label={dateLabel} kind="date" value={dateRange}
                  rangeValues={works.map(work => work.date)}
                  onChange={value => { changeRange('release', value); close() }} /> },
              dur: { active: !!ranges.dur,
                render: close => <TableRangeFields label={t('catalog:catalogList.duration')} kind="duration" value={ranges.dur}
                  onChange={value => { changeRange('dur', value); close() }} /> },
              code: { active: !!code, render: close => <JavCodeFilter value={code}
                onChange={value => { changeCode(value); close() }} /> },
            }} />} />
      </>} />
    {combo.length ? <Combo items={combo} hidden={false}
      actions={{ toggleTag: chooseTag, clearFilter,
        clearAll: () => {
          setCode('');
          setRanges({ release: undefined, dur: undefined });
          go({ performer: '', actress: '', maker: '', genre: '', date: '', page: 1 }, { code: '', column_filters: '' });
        } }} /> : null}
    {waiting ? <VisuallyHidden role="status">{t('catalog:javOnline.loading')}</VisuallyHidden> : null}
    {query.error ? <Note tone="error" title={t('catalog:javOnline.failed')}
      action={<Button variant="secondary" onClick={() => void query.refetch()}>{t('catalog:shared.retryNow')}</Button>}>
      {errorMessage(query.error)}
    </Note> : null}
    {query.data?.coverUnverified && !waiting ? <Note tone="neutral"
      action={<Button variant="secondary" onClick={() => void query.refetch()}>{t('catalog:shared.retryNow')}</Button>}>
      {t('catalog:javOnline.coverUnverified')}
    </Note> : null}
    {showTable ? <OnlineCatalogTable items={items} waiting={waiting} javImage={settings.value.javImage} empty={empty}
      maker={filters.maker} genres={genres} sorting={sorting} onSort={sortBy}
      headers={{
        people: performerFilter('online-column-performer', false),
        studio: studioFilter('online-column-studio', false),
        tags: tagsFilter('online-column-tags', false),
        release: <TableColumnRange id="online-column-release" label={dateLabel} kind="date" value={dateRange}
          rangeValues={works.map(work => work.date)} onChange={value => changeRange('release', value)} />,
        dur: <TableColumnRange id="online-column-duration" label={t('catalog:catalogList.duration')} kind="duration"
          value={ranges.dur} onChange={value => changeRange('dur', value)} />,
        code: <ColumnFilterPopover id="online-column-code" label={t('catalog:shared.code')} active={!!code}>
          {close => <JavCodeFilter value={code} onChange={value => { changeCode(value); close() }} />}
        </ColumnFilterPopover>,
      }}
      onFilter={choosePerson} onStudio={chooseStudio} onTag={chooseTag} /> : empty}
    {view === 'cards' && waiting ? <div className="contents" dangerouslySetInnerHTML={{ __html: onlineCatalogCardsHtml(ratio) }} /> : null}
    {view === 'cards' && items.length > 0 ? <div data-media-grid="" className={JAV_RECOMMENDATION_GRID} style={{ '--card-ratio': ratio } as CSSProperties} {...rectangle}>
        {items.map(item => <DiscoveryCard key={item.catalogId} item={item} layout={layout} javImage={settings.value.javImage}
          readOnly navigate={navigate} onFilterPerson={choosePerson} tag={genres.map(genreName)}
          onTag={name => {
            const option = item.tagOptions.find(option => option.name === name);
            if (!name || option) chooseTag(option?.id || '');
          }}
          studioFilter={item.studioOption
            ? { selected: filters.maker === item.studioOption.id, onPress: () => chooseStudio(item.studioOption!.id),
              entityId: item.studioOption.entity_id }
            : undefined}
          badge={item.preOrder ? <Chip variant="caption" color="neutral">{t('catalog:javOnline.preOrder')}</Chip> : undefined} />)}
      </div> : null}
    {query.data && !waiting && query.data.pages > 1 ? <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
      {query.data.total > query.data.pages * query.data.size ? <span data-copy-key="jav.online.pageLimit"
        className="text-caption-1-regular text-text-secondary">
        {t('catalog:javOnline.pageLimit', { count: query.data.pages })}
      </span> : null}
      <Pagination label={label} page={query.data.page} pages={query.data.pages}
        onPage={page => go({ ...filters, page })} />
    </div> : null}
  </section>;
}
