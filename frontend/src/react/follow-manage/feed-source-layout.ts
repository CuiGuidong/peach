import { t } from '../../i18n';

export const FEED_SOURCE_TABLE = 'jav-feeds';
export const FEED_SOURCE_CARD = 'flex flex-col gap-4 px-6 py-5 max-sm:px-4';
export const FEED_SOURCE_FOOTER = '-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4';

export const FEED_SOURCE_COLUMN_LABELS: Record<string, string> = {
  select: t('follow:shared.select'),
  name: t('follow:shared.name'),
  kind: t('follow:shared.type'),
  origin: t('follow:followFeed.filterKindSource'),
  status: t('follow:shared.status'),
  interval: t('follow:feedSources.colInterval'),
  fetched: t('follow:feedSources.colLastFetched'),
  fresh: t('follow:feedSources.colLastAdded'),
  actions: t('follow:shared.actions'),
};

export const FEED_SOURCE_COLUMNS = Object.entries(FEED_SOURCE_COLUMN_LABELS).map(([id, label]) => ({
  id, label,
  width: id === 'select' ? 48 : id === 'name' ? 300 : id === 'actions' ? 208 : id === 'fetched' ? 200
    : id === 'origin' ? 184 : 160,
  min: id === 'select' ? 48 : id === 'actions' ? 200 : id === 'name' ? 300 : 112,
  max: id === 'select' ? 48 : id === 'name' ? 2000 : 800,
  flex: id === 'name',
  required: id === 'select' || id === 'name',
}));

const SHAPE_KEY = 'peach.follow.feed-source-count.v1';

export function rememberedFeedSourceCount(): number | undefined {
  try {
    const value = localStorage.getItem(SHAPE_KEY);
    if (value !== null && /^\d+$/.test(value) && Number.isSafeInteger(Number(value))) return Number(value);
  } catch { /* 读不到上次结构时先画短表。 */ }
}

export function rememberFeedSourceCount(count: number): void {
  try {
    const value = String(count);
    if (localStorage.getItem(SHAPE_KEY) !== value) localStorage.setItem(SHAPE_KEY, value);
  } catch { /* 持久化失败时仍使用当前接口数据。 */ }
}
