import { t } from '../../i18n';
import { columnSizes, tableSnapshot, type TableSnapshot } from '../catalog-grid/catalog-table-columns';
import { legacyTableKeys } from '../../table-column-order';

export const ONLINE_TABLE_ID = 'jav-online';
export const ONLINE_TABLE_KEYS = legacyTableKeys(ONLINE_TABLE_ID);
export const onlineColumns = [
  { id: 'name', label: t('catalog:shared.video'), ...columnSizes.name!, visible: true },
  { id: 'people', label: t('catalog:shared.performers'), ...columnSizes.people!, visible: true },
  { id: 'studio', label: t('catalog:shared.label'), width: 128, min: 112, max: 320, visible: true },
  { id: 'tags', label: t('catalog:shared.tags'), ...columnSizes.tags!, visible: true },
  { id: 'release', label: t('catalog:catalogList.releaseDate'), ...columnSizes.release!, visible: true },
  { id: 'dur', label: t('catalog:catalogList.duration'), ...columnSizes.dur!, visible: true },
  { id: 'source', label: t('follow:searchResults.source'), width: 112, min: 112, max: 240, visible: true },
  { id: 'code', label: t('catalog:shared.code'), ...columnSizes.code!, visible: false },
].map(column => ({ ...column, flex: column.id === 'name', required: column.id === 'name' }));

export function onlineTableSnapshot(): TableSnapshot {
  return tableSnapshot(onlineColumns, ONLINE_TABLE_KEYS.widths, ONLINE_TABLE_KEYS.visibility, ONLINE_TABLE_ID);
}

export const ONLINE_SORTS = [
  ['release', 'settings:sortOrder.releaseDate'],
  ['dur', 'catalog:catalogList.duration'],
  ['code', 'catalog:shared.code'],
] as const;
export type OnlineSortKey = typeof ONLINE_SORTS[number][0];

export function onlineSorting(params = new URLSearchParams(location.search)): { sort: OnlineSortKey; dir: 'asc' | 'desc' } {
  return { sort: ONLINE_SORTS.find(([key]) => key === params.get('sort'))?.[0] || 'release',
    dir: params.get('dir') === 'asc' ? 'asc' : 'desc' };
}

export const ONLINE_STATUS = [
  ['all', 'catalog:shared.all'],
  ['released', 'catalog:javOnline.released'],
  ['preOrder', 'catalog:javOnline.preOrder'],
] as const;
export type OnlineStatus = typeof ONLINE_STATUS[number][0];

export function onlineStatus(params = new URLSearchParams(location.search)): OnlineStatus {
  return ONLINE_STATUS.find(([key]) => key === params.get('status'))?.[0] || 'all';
}
