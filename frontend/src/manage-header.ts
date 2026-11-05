/* Management header: the view model and startup skeleton for the manage bar, breadcrumbs, page title and trash explainer row.
 *
 * The header belongs to the resident component `manage-header` (`react/manage-header/`). At startup the shell synchronously
 * writes the skeleton here into the host `[data-manage-header]`, and the moment the React bundle loads and the route tree
 * renders this surface it is swapped wholesale; the skeleton and the component render the same structure, and the criteria
 * (which name the title takes, which pages show breadcrumbs, which tier the title collapses to on narrow screens) are written
 * once here and shared by both.
 *
 * Which management section is current, what the menu lists, and the trash readout are computed by the shell and pushed in:
 * the route table, `/healthz`'s `configurable` and the catalog counts all still live in the shell. */

/** `[key, name, glyph]`, same as the shell's `MANAGE_SECTIONS`. */
import { CLEANUP_CRUMB_PAGES } from './cleanup-tools';

export type ManageEntry = readonly [key: string, label: string, glyph: string];

/** The trash explainer row's count: reported once per page the catalog grid appends. */
export interface TrashCount {
  total: number;
  shown: number;
}

export interface ManageHeaderProps {
  /** The current admin section; an empty string renders no page header at all (home, catalog, follows pages). */
  section: string;
  /** The decoded `location.pathname`. */
  path: string;
  /** All admin sections, titled from here by `section`. */
  sections: readonly ManageEntry[];
  /** The items listed on the manage bar (the shell's `manageMenuSections()`; "configuration" is listed only on the local machine). */
  menu: readonly ManageEntry[];
  /** The trash's most recent readout since this page entry; null until read, in which case the description row lays a same-shaped placeholder. */
  trash: TrashCount | null;
}

/* 数据管理那几张卡通往的子页（vercel.com/geist/breadcrumbs：有上一级页面的子页才画面包屑）。
   人工复核、回收站、高清版保留侧栏快捷入口；维护工具各有独立二级页。
   子页标题取这里的名字，「数据管理」显示在面包屑的上一级。 */
export const MANAGE_CRUMB_PAGES: Readonly<Record<string, string>> = {
  ...CLEANUP_CRUMB_PAGES,
  '/junk-files': 'Junk files',
  '/duplicates': 'Duplicates',
  '/review': 'Manual review',
  '/trash': 'Trash',
  '/quality-goals': 'HD version',
  '/sources': 'Sources and credentials',
};

/* Pages whose title steps down to 22px on narrow screens (≤760px): the data management hub, sources and credentials, and the configuration page, whose body is an 812px narrow column.
   The other managed pages follow the site-wide page title at 24px. */
const COMPACT_TITLE_PATHS = new Set(['/data-cleanup', '/sources']);

/** Which item on the manage bar is pressed. Subpages reached through the data management cards enter via data management, so the pressed item is "Data management";
 *  other pages press their own manage area, and when the bar has no such item there is no pressed item. */
export function pressedManageKey(props: Pick<ManageHeaderProps, 'section' | 'path' | 'menu'>): string {
  const key = MANAGE_CRUMB_PAGES[props.path] ? 'cleanup' : props.section;
  return props.menu.some(([entry]) => entry === key) ? key : '';
}

export interface ManageHeaderView {
  title: string;
  /** The item pressed on the admin bar; an empty string means nothing is pressed. */
  pressed: string;
  /** The name of the breadcrumb's current item; an empty string means no breadcrumb. */
  crumb: string;
  compact: boolean;
  /** Only trash has a description line. */
  lede: { kind: 'none' } | { kind: 'skeleton' } | { kind: 'count'; text: string; total: number };
}

export const trashLedeText = ({ total, shown }: TrashCount) =>
  `${total.toLocaleString()} matches · showing ${shown.toLocaleString()}`;

/** What the page header renders in this spot; null outside the admin area. */
export function manageHeaderView(props: ManageHeaderProps): ManageHeaderView | null {
  const entry = props.sections.find(([key]) => key === props.section);
  if (!entry) return null;
  const crumb = MANAGE_CRUMB_PAGES[props.path] ?? '';
  return {
    title: (props.section === 'cleanup' && crumb) || entry[1],
    pressed: pressedManageKey(props),
    crumb,
    compact: COMPACT_TITLE_PATHS.has(props.path) || props.section === 'configuration',
    lede: props.section !== 'trash' ? { kind: 'none' }
      : props.trash ? { kind: 'count', text: trashLedeText(props.trash), total: props.trash.total }
        : { kind: 'skeleton' },
  };
}

const escape = (value: string) => value.replace(/[&<>"']/g, (char) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
const glyph = (name: string) => `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${escape(name)}"/></svg>`;

/** The trash explainer row's same-shaped placeholder until the readout arrives: the left cell sized to the readout, the right end sized to the "Empty trash" key.
 *  The skeleton and the island share this piece, and the sweep animation follows the site-wide `.skeleton`. */
export const TRASH_LEDE_SKELETON_HTML = '<span class="skeleton" data-trash-lede-skeleton="text" aria-hidden="true"></span>'
  + '<span class="skeleton" data-trash-lede-skeleton="action" aria-hidden="true"></span>';

/** The startup skeleton: same structure as the island, swapped out wholesale when the island takes over. */
export function manageHeaderSkeletonHtml(props: ManageHeaderProps): string {
  const view = manageHeaderView(props);
  if (!view) return '';
  const menu = props.menu.map(([key, label, mark]) => {
    const on = key === view.pressed;
    return `<button type="button" data-manage="${escape(key)}" data-pill-variant="gray" aria-pressed="${on}"${on ? ' aria-current="page" data-pill-selected=""' : ''}>`
      + `${glyph(mark)}<span>${escape(label)}</span></button>`;
  }).join('');
  const crumb = view.crumb
    ? `<nav data-manage-crumb="" aria-label="Breadcrumb"><ol><li><a href="/data-cleanup">Data management</a>${glyph('chevron-right')}</li>`
      + `<li aria-current="true"><span>${escape(view.crumb)}</span></li></ol></nav>`
    : '';
  const lede = view.lede.kind === 'none' ? ''
    : `<p class="mono" data-manage-lede="">${view.lede.kind === 'skeleton' ? TRASH_LEDE_SKELETON_HTML
      : `<span data-lede-text="">${escape(view.lede.text)}</span>${view.lede.total ? EMPTY_TRASH_HTML : ''}`}</p>`;
  return `<nav data-manage-bar="" aria-label="Manage"><div data-manage-menu="" data-pill-nav="" role="group">${menu}</div></nav>`
    + crumb
    + `<h2 data-manage-title=""${view.compact ? ' data-compact=""' : ''}>${escape(view.title)}</h2>`
    + lede;
}

const EMPTY_TRASH_HTML = '<button type="button" data-empty-trash="" title="Permanently delete trash contents">Empty trash</button>';
