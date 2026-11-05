/** 数据管理的维护工具；首页入口、二级页和面包屑共用名称与地址。 */
export const CLEANUP_TOOLS = [
  { key: 'organize', path: '/data-cleanup/organize', title: 'Organize files', icon: 'folder-cog',
    description: 'Cleans filenames, renaming and filing by template; preview first, and a whole batch can be reverted after running.' },
  { key: 'resource-sync', path: '/data-cleanup/resource-sync', title: 'Resource sync', icon: 'git-compare',
    description: 'Reconciles files against library records, checking dead entries, empty folders, and the cache.' },
  { key: 'orphan-records', path: '/data-cleanup/orphan-records', title: 'Records whose files have gone missing', icon: 'file-stack',
    description: 'Pick a replacement version for lost files, moving or clearing the personal records you kept.' },
  { key: 'media-repair', path: '/data-cleanup/media-repair', title: 'Media repair', icon: 'wrench',
    description: 'Fixes videos that stutter or refuse to open by repairing timestamp tables and indexes.' },
  { key: 'links', path: '/data-cleanup/links', title: 'Link management', icon: 'link',
    description: 'Check official sites, social accounts, and details-site links; review and clean dead addresses.' },
  { key: 'batch-delete', path: '/data-cleanup/batch-delete', title: 'Batch delete', icon: 'trash',
    description: 'Check performers to permanently delete their tied titles; confirm the scope and impact before running.' },
] as const;

export type CleanupTool = typeof CLEANUP_TOOLS[number];
export type CleanupToolKey = CleanupTool['key'];
export type CleanupToolPath = CleanupTool['path'];

export const CLEANUP_CRUMB_PAGES = Object.fromEntries(CLEANUP_TOOLS.map(tool => [tool.path, tool.title]));

/** 已分享的锚点仍能进入对应工具；扫描与采集继续留在首页。 */
export const CLEANUP_HASH_REDIRECTS: Readonly<Record<string, CleanupToolPath>> = {
  '#organize': '/data-cleanup/organize',
  '#mediaRepair': '/data-cleanup/media-repair',
  '#link-manager': '/data-cleanup/links',
  '#resource-sync': '/data-cleanup/resource-sync',
  '#orphan-records': '/data-cleanup/orphan-records',
  '#batch-delete': '/data-cleanup/batch-delete',
};
