import { useMemo, type MouseEvent, type ReactNode } from 'react';
import { columnOrderingFeature, columnVisibilityFeature, createColumnHelper, flexRender, rowSelectionFeature,
  rowSortingFeature, tableFeatures, useTable } from '@tanstack/react-table';
import { RiExternalLinkLine } from '@remixicon/react';
import { fmtDur } from '@peach/legacy/core';
import { Checkbox } from '@/components/base/checkbox/checkbox';
import { LinkButton } from '@/components/base/buttons/link-button';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@/components/base/table/table';
import { ChevronSortDown } from '@/components/foundations/icons/chevrons';
import { relayoutCovers } from '../../card-art/framing';
import { catalogListSkeletonCellHtml } from '../../catalog-content-skeleton';
import { CastPopover, castPersonName, discoveryCast } from '../components/cast-popover';
import { ListCredits } from '../components/list-credits';
import { textLang } from '../../core/text-lang';
import { t } from '../../i18n';
import { hasSelectionModifier } from '../../selection';
import { ArtSlot } from '../components/art-slot';
import { DataTableFrame } from '../components/data-table-frame';
import { SiteLabel } from '../components/source-label';
import { TableColumnControls, TableColumnResizer } from '../components/table-column-controls';
import { useTablePreferences } from '../components/table-column-preferences';
import { TableToolbar } from '../components/table-toolbar';
import { DiscoveryFaces, DiscoveryPerformerName, type DiscoveryPerson } from './discovery-faces';
import { StudioListLabel } from './jav-facets';
import { useJavSelection } from './jav-selection';
import { ONLINE_SORTS, ONLINE_TABLE_ID, ONLINE_TABLE_KEYS, onlineColumns, type OnlineSortKey } from './online-catalog-layout';
import type { CatalogItem } from './online-catalog';
import { discoveryArtwork } from './jav';
import '../catalog-grid/catalog-list.css';

const features = tableFeatures({ rowSortingFeature, rowSelectionFeature, columnVisibilityFeature, columnOrderingFeature });
const columns = [{ id: 'select', label: t('catalog:javReleases.selectVideos'), width: 44, min: 44, max: 44, required: true }, ...onlineColumns];
const label = t('catalog:javTabs.online');

export function OnlineCatalogTable({ items, waiting, javImage, maker, genres, sorting, headers, empty, onSort, onFilter, onStudio, onTag }: {
  items: CatalogItem[]; waiting: boolean; javImage: unknown; maker: string; genres: string[];
  sorting: { sort: OnlineSortKey; dir: 'asc' | 'desc' }; headers: Record<string, ReactNode>; empty: ReactNode;
  onSort(key: OnlineSortKey, dir: 'asc' | 'desc'): void; onFilter(person: DiscoveryPerson): void;
  onStudio(id: string): void; onTag(id: string): void;
}) {
  const selection = useJavSelection();
  const selecting = Boolean(selection?.mode);
  const selectable = !waiting && items.some(item => item.code);
  const preferences = useTablePreferences(ONLINE_TABLE_ID, columns, ONLINE_TABLE_KEYS);
  const definitions = useMemo(() => {
    const helper = createColumnHelper<typeof features, CatalogItem>();
    return helper.columns(columns.map(column => helper.accessor(item => {
      switch (column.id) {
        case 'release': return item.release_date;
        case 'dur': return item.duration;
        case 'code': return item.code;
        default: return undefined;
      }
    }, { id: column.id, header: column.label, enableSorting: ONLINE_SORTS.some(([key]) => key === column.id) })));
  }, []);
  const table = useTable({
    features, columns: definitions, data: items, getRowId: item => item.catalogId, manualSorting: true,
    state: {
      sorting: [{ id: sorting.sort, desc: sorting.dir === 'desc' }],
      rowSelection: Object.fromEntries(items.filter(item => item.code && selection?.selected.has(item.code)).map(item => [item.catalogId, true])),
      columnOrder: preferences.columnOrder, columnVisibility: { ...preferences.visibility, select: selecting },
    },
    onSortingChange: updater => {
      const previous = [{ id: sorting.sort, desc: sorting.dir === 'desc' }];
      const [next] = typeof updater === 'function' ? updater(previous) : updater;
      const key = ONLINE_SORTS.find(([key]) => key === next?.id)?.[0];
      if (key && next) onSort(key, next.desc ? 'desc' : 'asc');
    },
  });
  const shown = table.getHeaderGroups()[0]!.headers;

  const renderCell = (id: string, item: CatalogItem) => {
    switch (id) {
      case 'select':
        return item.code ? <Checkbox slot={null} aria-label={t('catalog:javDiscovery.select', { code: item.code })}
          isSelected={selection?.selected.has(item.code)} onChange={() => selection?.toggle(item)} /> : null;
      case 'name': {
        const artwork = discoveryArtwork(item, 'small', javImage);
        const href = item.code ? `/works/${encodeURIComponent(item.code)}` : item.link;
        const target = item.code ? {} : { target: '_blank', rel: 'noopener noreferrer' };
        const pickLink = (event: MouseEvent<HTMLAnchorElement>) => {
          if (!item.code || !selection || (!selecting && !hasSelectionModifier(event))) return;
          event.preventDefault();
          selection.toggle(item, event.shiftKey);
        };
        return <div data-list-identity="">
          <a data-list-open="" href={href} onClick={pickLink} tabIndex={-1} aria-hidden {...target}>
            <span data-list-picture="">{artwork
              ? <ArtSlot artwork={{ kind: 'cover', html: artwork }} relayout={node => relayoutCovers(node, 'small')} />
              : <span>{t('catalog:shared.noCover')}</span>}</span>
          </a>
          <span data-list-text=""><a data-list-work-link="" href={href} onClick={pickLink}
            title={item.code ? `${item.code} · ${item.title}` : item.title} {...target}>
            {item.code ? <span data-list-code="" className="text-body-2-regular text-text-primary">{item.code}</span> : null}
            <span data-list-name="" data-external-link-label={item.code ? undefined : ''} lang={textLang(item.title)}>{item.title}</span>
          </a></span>
        </div>;
      }
      case 'people': {
        const people = discoveryCast(item.performer_refs, item.performers);
        const lead = people[0];
        if (!lead) return '—';
        const name = castPersonName(lead);
        return <ListCredits avatar={<DiscoveryFaces item={item} />}
          cast={<CastPopover people={people} code={item.code} subscribe onFilter={onFilter} />}>
          <DiscoveryPerformerName person={lead} name={name} title={lead.name} onFilter={onFilter} />
        </ListCredits>;
      }
      case 'studio': {
        const studio = item.studioOption;
        return studio ? <button type="button" data-inline-action="" className="max-w-full cursor-pointer"
          aria-pressed={maker === studio.id} onClick={() => onStudio(studio.id)}>
          <StudioListLabel name={item.studio} studio={studio} />
        </button> : '—';
      }
      case 'tags':
        return item.tagOptions.length ? <div data-media-tags="" data-list-tags="">
          {item.tagOptions.map(tag => <button type="button" key={tag.id} data-media-tag=""
            aria-pressed={genres.includes(tag.id)} onClick={() => onTag(tag.id)}>{tag.source_name}</button>)}
        </div> : '—';
      case 'release':
        return <div className="flex flex-col gap-1">
          {item.release_date ? <time dateTime={item.release_date}>{item.release_date}</time> : '—'}
          {item.preOrder ? <span className="text-caption-1-regular text-text-secondary">{t('catalog:javOnline.preOrder')}</span> : null}
        </div>;
      case 'dur': return fmtDur(item.duration) || '—';
      case 'code': return item.code || '—';
      default: return <LinkButton href={item.link} target="_blank" rel="noopener noreferrer" title={item.link}
        size="small" trailingIcon={RiExternalLinkLine}><SiteLabel site="dmm" label="DMM" /></LinkButton>;
    }
  };
  return <div data-catalog-view-mode="list" data-catalog-table="" data-release-table="" data-online-catalog-table=""
    className="flex min-w-0 flex-col gap-4">
    <TableToolbar className="flex flex-wrap justify-end gap-2" label={t('shell:dataTable.toolbar', { label })}>
      <div data-toolbar-actions=""><TableColumnControls preferences={preferences} label={label} /></div>
    </TableToolbar>
    <DataTableFrame follow preferences={preferences} rectangleSelecting={selecting}
      onRectangle={selectable ? selection?.selectRectangle : undefined} onRowClick={selectable && selection ? (key, event) => {
        if (!selecting && !hasSelectionModifier(event)) return;
        const item = table.getRow(key)?.original;
        if (item?.code) selection.toggle(item, event.shiftKey);
      } : undefined}>
      <Table size="sm" aria-label={label}
        sortDescriptor={{ column: sorting.sort, direction: sorting.dir === 'asc' ? 'ascending' : 'descending' }}
        onSortChange={next => table.setSorting([{ id: String(next.column), desc: next.direction === 'descending' }])}>
        <TableHeader>{shown.map(header => {
          const id = header.id;
          if (id === 'select') return <TableColumn key={id} id={id} aria-label={t('catalog:javReleases.selectVideos')} {...preferences.columnProps(id)}>
            <Checkbox slot={null} aria-label={t('catalog:catalogList.selectAllOnPage')} isSelected={selection?.all}
              isIndeterminate={selection?.mixed} isDisabled={!selectable} onChange={selection?.selectPage} />
          </TableColumn>;
          return <TableColumn key={id} id={id} isRowHeader={id === 'name'} allowsSorting={header.column.getCanSort()} {...preferences.columnProps(id)}>
            {({ sortDirection }) => <>
              <span className="flex items-center gap-0.5">
                {headers[id] ?? flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getCanSort() ? <span data-sort-indicator data-direction={sortDirection || undefined}><ChevronSortDown /></span> : null}
              </span>
              <TableColumnResizer preferences={preferences} id={id} />
            </>}
          </TableColumn>;
        })}
          <TableColumn id="remaining-space" aria-label={t('catalog:catalogList.rowSpacer')} data-table-space="" width={preferences.spaceWidth} minWidth={0} />
        </TableHeader>
        <TableBody renderEmptyState={() => empty}>
          {waiting ? Array.from({ length: 6 }, (_, index) => <TableRow key={index} id={`skeleton-${index}`} data-list-skeleton-row="" aria-hidden="true">
            {shown.map(header => <TableCell key={header.id}>{header.id === 'select' ? null
              : <span dangerouslySetInnerHTML={{ __html: catalogListSkeletonCellHtml(header.id, true) }} />}</TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>) : table.getRowModel().rows.map(row => <TableRow key={row.id} id={row.id} data-catalog-row="" data-release-row=""
            data-rectangle-key={row.original.code || undefined} data-rectangle-disabled={!row.original.code || undefined}
            data-board-selected={row.getIsSelected() || undefined}>
            {row.getVisibleCells().map(cell => <TableCell key={cell.id}>{renderCell(cell.column.id, row.original)}</TableCell>)}
            <TableCell data-table-space="" />
          </TableRow>)}
        </TableBody>
      </Table>
    </DataTableFrame>
  </div>;
}
