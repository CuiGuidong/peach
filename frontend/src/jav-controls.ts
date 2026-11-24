/** JAV 卡片页的壳入口；选择集由当前页面持有，不混入馆藏资产 ID。 */
export const JAV_SELECTION_EVENT = 'peach:jav-selection';
let pendingTab = '';
const tabOf = (search: string) => new URLSearchParams(search).get('tab') || '';

export function requestJavSelection(search: string) {
  const tab = tabOf(search);
  if (window.dispatchEvent(new CustomEvent(JAV_SELECTION_EVENT, { cancelable: true, detail: tab }))) {
    pendingTab = pendingTab === tab ? '' : tab;
  }
}

export function takeJavSelection(search: string) {
  const requested = !!pendingTab && pendingTab === tabOf(search);
  pendingTab = '';
  return requested;
}

export function syncJavSelection(path: string, search: string) {
  if (path !== '/jav' || pendingTab !== tabOf(search)) pendingTab = '';
}
export function javCardPage(path: string, search: string) {
  return path === '/jav' && ['releases', 'discover'].includes(tabOf(search));
}

/** 右上角多选开关在哪几个 JAV 页签上生效：卡片两页之外，「想要」也是浏览页，进多选模式后才显示勾选。 */
export function javSelectPage(path: string, search: string) {
  return path === '/jav' && ['releases', 'discover', 'wants'].includes(tabOf(search));
}
