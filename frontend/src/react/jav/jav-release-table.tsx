/* 新作与发现共用作品行、列设置、排序反馈和批量选择。筛选条件及排序由各分区管理。 */
import type { MouseEvent, ReactNode, RefObject } from 'react';
import { hasSelectionModifier } from '../../selection';
import { Button } from '@/components/base/buttons/button';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { useJavSelection } from './jav-selection';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/base/table/table';
import { ChevronSortDown } from '@/components/foundations/icons/chevrons';
import { fmtDur } from '@peach/legacy/core';
import { COVER_STATE_TITLE, coverReason } from '@peach/card-art';
import { relayoutCovers } from '../../card-art/framing';
import { catalogListSkeletonCellHtml } from '../../catalog-content-skeleton';
import { textLang } from '../../core/text-lang';
import { ArtSlot } from '../components/art-slot';
import { DataTableFrame } from '../components/data-table-frame';
import { useTablePreferences } from '../components/table-column-preferences';
import { TableColumnControls, TableColumnResizer } from '../components/table-column-controls';
import { TableColumnFilter, type ColumnFilterPage } from '../components/table-column-filter';
import { TableColumnRange } from '../components/table-column-range';
import { ColumnFilterAvatar } from '../components/column-filter-avatar';
import { CastPopover, castPersonName, discoveryCast } from '../components/cast-popover';
import { ListCredits } from '../components/list-credits';
import { busyProps } from '../settings/use-action';
import { DiscoveryFaces, DiscoveryPerformerName } from './discovery-faces';
import { StudioListLabel } from './jav-facets';
import { discoveryScore, type DiscoveryDirection, type DiscoverySort, type ReleaseSort } from './discovery-sorts';
import { discoveryArtwork, fetchReleaseColumn, releaseDateQuery, setReleaseColumn, releaseColumnValues, releaseColumnSelection, type Discovery, type ReleaseFacetPerformer, type ReleaseFacetStudio, type ReleaseFilters, type ReleaseResult } from './jav';
import { columnRangeKinds, readColumnFilters, type ColumnRange, type ColumnSelection } from '../../column-filters';
import { entityWriting } from '../../core/entity-names';
import { DISCOVERY_TABLE_ID, DISCOVERY_TABLE_KEYS, discoveryColumns, RELEASE_COLUMN_VISIBILITY_KEY, RELEASE_COLUMN_WIDTHS_KEY, RELEASE_SORT_COLUMNS, releaseColumns } from './release-table-columns';
import { t } from '../../i18n';
import { useWorkContextMenu } from '../components/work-context-menu';
import { discoveryContext } from './discovery-context';
import '../catalog-grid/catalog-list.css';

const KEYS = { widths: RELEASE_COLUMN_WIDTHS_KEY, visibility: RELEASE_COLUMN_VISIBILITY_KEY };
const DISCOVERY_SORT_COLUMNS: Record<string, ReleaseSort> = { ...RELEASE_SORT_COLUMNS, taste: 'taste' };

function ReleaseColumnFilter({ column, label, filters, onChange }: {
  column: 'people' | 'studio' | 'tags'; label: string; filters: ReleaseFilters;
  onChange(facet: 'performer' | 'studio' | 'tag', values: ColumnSelection | undefined): void;
}) {
  const facet = column === 'people' ? 'performer' : column === 'tags' ? 'tag' : 'studio';
  const scope = setReleaseColumn(filters, facet, undefined);
  const load = async (signal: AbortSignal, search: string, offset: number): Promise<ColumnFilterPage> => {
    const data = await fetchReleaseColumn(scope, column, search, offset, signal);
    return { items: data.items.map(row => {
      const person = column === 'people' ? row as ReleaseFacetPerformer : null;
      const writing = person && entityWriting('performer', person.name, person.id);
      return { id: row.name, label: row.name, count: row.count,
        searchTerms: [...(person?.aliases || []), ...[writing?.ja, writing?.zh_cn].filter((value): value is string => !!value)],
        leading: person ? <ColumnFilterAvatar person={person} /> : undefined };
    }), nextOffset: data.next_offset ?? undefined };
  };
  return <TableColumnFilter id={column} label={label} values={releaseColumnSelection(filters, facet)} load={load}
    queryKey={['jav-release-column', column, scope.performer, scope.studio, scope.tag, scope.column_filters || '', scope.q, scope.code || '']}
    onChange={next => onChange(facet, next)} />;
}

export type ReleaseRangeKey = 'release' | 'dur' | 'score' | 'taste';

export function ReleaseTable({ items, waiting, filters, discovery, studios = [], facets, javImage, readOnly, navigate, onTag, onFilter, onRange, onSort, wanting, onWant, onResource, selecting = true, tableTop }: {
  selecting?: boolean;
  tableTop?: RefObject<HTMLDivElement | null>;
  items: Discovery[]; waiting: boolean; studios?: ReleaseFacetStudio[]; javImage: unknown; readOnly: boolean;
  facets?: ReleaseResult['facets']; onFilter?(facet: 'performer' | 'studio' | 'tag', values: ColumnSelection | undefined): void;
  onRange?(column: ReleaseRangeKey, value: ColumnRange | undefined): void;
  navigate(path: string): void; onTag(tag: string): void; onSort(key: ReleaseSort, dir: DiscoveryDirection): void;
  wanting(item: Discovery): boolean; onWant(item: Discovery): void; onResource(item: Discovery): void;
} & ({ filters: ReleaseFilters; discovery?: never } | { filters?: never; discovery: {
  sort: DiscoverySort; dir: DiscoveryDirection; tag: string; headers: Record<string, ReactNode>;
} })) {
  const selection = useJavSelection();
  const context = useWorkContextMenu();
  const menuContext = (item: Discovery) => discoveryContext(item, { selection, readOnly, wanting: wanting(item), navigate,
    onWant: () => onWant(item), onResource: () => onResource(item) });
  const preferences = useTablePreferences(discovery ? DISCOVERY_TABLE_ID : 'jav-releases',
    discovery ? discoveryColumns : releaseColumns, discovery ? DISCOVERY_TABLE_KEYS : KEYS);
  const shown = preferences.columns.filter(column => column.required || preferences.visibility[column.id] !== false);
  const sortColumns = discovery ? DISCOVERY_SORT_COLUMNS : RELEASE_SORT_COLUMNS;
  const active = Object.entries(sortColumns).find(([, key]) => key === (discovery?.sort ?? filters?.sort))?.[0];
  const direction = discovery?.dir ?? filters?.dir;
  const columnFilters = readColumnFilters(filters?.column_filters);
  const selectedTags = filters ? releaseColumnValues(filters, 'tag') : discovery?.tag ? [discovery.tag] : [];
  const label = t(discovery ? 'catalog:javTabs.discover' : 'catalog:javReleases.list');
  const logos = new Map(studios.map(studio => [studio.name, studio]));
  const open = (item: Discovery) => (event: MouseEvent) => {
    event.preventDefault();
    if (selection?.mode || hasSelectionModifier(event)) selection?.toggle(item, event.shiftKey);
    else navigate(item.asset_id ? `/assets/${item.asset_id}` : `/works/${encodeURIComponent(item.code)}`);
  };
  const cell = (id: string, item: Discovery) => {
    switch (id) {
      case 'name': {
        const artwork = discoveryArtwork(item, 'small', javImage);
        return <div data-list-identity="">
          <button type="button" data-list-open="" tabIndex={-1} aria-hidden="true" onClick={open(item)}>
            <span data-list-picture="">{artwork
              ? <ArtSlot artwork={{ kind: 'cover', html: artwork }} relayout={root => relayoutCovers(root, 'small')} />
              // 缩略格只放得下状态字，原因放进悬停说明；当场取的键在卡片模式与分区顶上那条提示里。
              : <span title={coverReason(item) || undefined}>{item.cover_state ? COVER_STATE_TITLE[item.cover_state] : t('catalog:shared.noCover')}</span>}</span>
          </button>
          <span data-list-text="">
            <button type="button" data-list-name="" title={`${item.code} · ${item.title || t('catalog:javDiscovery.titleNotFound')}`} aria-label={t('catalog:javDiscovery.viewDetails', { code: item.code })}
              onClick={open(item)}><b>{item.code}</b> {item.title ? <span lang={textLang(item.title)}>{item.title}</span> : t('catalog:javDiscovery.titleNotFound')}</button>
          </span>
        </div>;
      }
      case 'people': {
        const people = discoveryCast(item.performer_refs, item.performers);
        const lead = people[0];
        return lead ? <ListCredits avatar={<DiscoveryFaces item={item} />}
          cast={<CastPopover people={people} total={item.performer_total} assetId={item.asset_id ?? undefined} code={item.code} subscribe />}>
          <DiscoveryPerformerName person={lead} name={castPersonName(lead)} title={lead.name} />
        </ListCredits> : '—';
      }
      case 'studio':
        return item.studio ? <StudioListLabel name={item.studio} studio={item.studio_ref || logos.get(item.studio)} /> : '—';
      case 'tags':
        return item.tags?.length ? <div data-media-tags="" data-list-tags="">
          {item.tags.map(tag => <button key={tag} type="button" data-media-tag="" aria-pressed={selectedTags.includes(tag)}
            onClick={() => onTag(tag)}>{tag}</button>)}
        </div> : '—';
      case 'code': return item.code;
      case 'dur': return fmtDur(item.duration) || '—';
      case 'score': return item.source_score != null ? `${item.source_score.toFixed(2)} / 5` : '—';
      case 'taste': return discoveryScore(item.taste_score ?? item.score);
      case 'release': return item.release_date || '—';
      default:
        /* 行里只放两个动作；作品来源链接在详情页。 */
        return <div data-release-actions="" className="flex gap-2">
          <Button size="small" variant="ghost" disabled={readOnly || item.wanted || !!item.asset_id} {...busyProps(wanting(item))}
            onClick={() => onWant(item)}>{item.asset_id ? t('catalog:javWant.imported') : item.wanted ? t('catalog:javWant.wanted') : t('catalog:javWant.want')}</Button>
          <Button size="small" variant="secondary" onClick={() => onResource(item)}>{t('catalog:shared.searchTorrents')}</Button>
        </div>;
    }
  };
  return <div data-catalog-table="" data-catalog-view-mode="list" data-release-table="" data-discover-table={discovery ? '' : undefined}
    className="flex min-w-0 flex-col gap-4" onKeyDown={event => {
    const row = (event.target as HTMLElement).closest<HTMLElement>('[data-release-row]');
    const item = row && items.find(item => String(item.id) === row.dataset.releaseId);
    if (item && !waiting) context.onKeyDown(event, menuContext(item), row);
  }}>
    {context.menu}
    <div className="flex flex-wrap justify-end gap-2" role="group" aria-label={discovery ? label : t('catalog:javReleases.toolbar')}>
      <div data-toolbar-actions=""><TableColumnControls preferences={preferences} label={label} /></div>
    </div>
    <DataTableFrame ref={tableTop} follow preferences={preferences} rectangleSelecting={Boolean(selection?.mode)}
      onRectangle={selecting && !waiting && items.length ? selection?.selectRectangle : undefined}
      onRowClick={selecting && !waiting && selection?.mode ? key => {
        const item = items.find(row => String(row.id) === key);
        if (item) selection.toggle(item);
      } : undefined}>
      <Table aria-label={label} size="sm"
        sortDescriptor={active ? { column: active, direction: direction === 'asc' ? 'ascending' : 'descending' } : undefined}
        onSortChange={next => { const key = sortColumns[String(next.column)]; if (key) onSort(key, next.direction === 'ascending' ? 'asc' : 'desc') }}>
        <TableHeader>{selection?.mode ? <TableColumn id="selection" width={44} aria-label={t('catalog:javReleases.selectVideos')}>
          <Checkbox slot={null} aria-label={t('catalog:catalogList.selectAllOnPage')} isSelected={selection.all} isIndeterminate={selection.mixed}
            isDisabled={waiting || !items.length} onChange={selection.selectPage} />
        </TableColumn> : null}{shown.map(column => <TableColumn key={column.id} id={column.id} isRowHeader={column.id === 'name'}
          allowsSorting={column.id in sortColumns} {...preferences.columnProps(column.id)}>
          {({ sortDirection }) => <>
            <span className="flex items-center gap-0.5">{discovery?.headers[column.id] ?? (filters && onRange && (column.id === 'release' || column.id === 'dur' || column.id === 'score')
              ? <TableColumnRange id={column.id} label={column.label} kind={columnRangeKinds[column.id]} value={columnFilters[column.id]}
                  rangeQuery={column.id === 'release' ? releaseDateQuery(filters) : undefined}
                  onChange={value => onRange(column.id as ReleaseRangeKey, value)} />
              : filters && facets && onFilter && ['people', 'studio', 'tags'].includes(column.id)
              ? <ReleaseColumnFilter column={column.id as 'people' | 'studio' | 'tags'} label={column.label}
                  filters={filters} onChange={onFilter} />
              : column.label)}
              {column.id in sortColumns ? <span data-sort-indicator data-direction={sortDirection || undefined}><ChevronSortDown /></span> : null}</span>
            <TableColumnResizer preferences={preferences} id={column.id} />
          </>}
        </TableColumn>)}
          <TableColumn id="remaining-space" aria-label={t('catalog:catalogList.rowSpacer')} data-table-space="" width={preferences.spaceWidth} minWidth={0} />
        </TableHeader>
        <TableBody renderEmptyState={() => t('catalog:javReleases.noMatches')}>
          {/* 等数据时在真实表格里画骨架行，格子与路由骨架同一份。 */}
          {waiting ? Array.from({ length: 6 }, (_, index) => <TableRow key={`skeleton-${index}`} id={`skeleton-${index}`} data-list-skeleton-row="" aria-hidden="true">
            {selection?.mode ? <TableCell /> : null}
            {shown.map(column => <TableCell key={column.id}><span dangerouslySetInnerHTML={{ __html: catalogListSkeletonCellHtml(column.id) }} /></TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>) : items.map(item => <TableRow key={item.id} id={String(item.id)} data-catalog-row="" data-release-row="" data-release-id={item.id}
            data-rectangle-key={item.code} data-board-selected={selection?.selected.has(item.code) || undefined}
            onContextMenu={event => context.onContextMenu(event, menuContext(item))}>
            {selection?.mode ? <TableCell><Checkbox slot={null} aria-label={t('catalog:javDiscovery.select', { code: item.code })}
              isSelected={selection.selected.has(item.code)} onChange={() => selection.toggle(item)} /></TableCell> : null}
            {shown.map(column => <TableCell key={column.id}>{cell(column.id, item)}</TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>)}
        </TableBody>
      </Table>
    </DataTableFrame>
  </div>;
}
