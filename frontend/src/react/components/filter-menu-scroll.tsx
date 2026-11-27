import type { ComponentProps } from 'react';
import { cx } from '@/utils/cx';
import { MENU_ITEM } from '@/components/base/dropdown/menu-styles';
import { t } from '../../i18n';
import { useOverlayScrollbar } from './overlay-scrollbar';
import './filter-menu.css';

/** 筛选列表占满弹层宽度，内容留内边距，覆盖式轨道固定在弹层边缘。 */
export function FilterMenuScroll({ className, ...props }: ComponentProps<'div'>) {
  const scroll = useOverlayScrollbar<HTMLDivElement>();
  return <div data-filter-menu-scroll-host="">
    <div {...props} data-filter-menu-scroll="" ref={scroll} className={cx('min-w-0', className)} />
  </div>;
}

export function FilterOptionSkeleton({ leading, compact = false }: {
  leading?: 'checkbox' | 'avatar'; compact?: boolean;
}) {
  return <div data-skeleton="filter-options" role="status" aria-label={t('shell:spinner.loading')}>
    {['w-28', 'w-40', 'w-24', 'w-32', 'w-36'].map(width =>
      <div key={width} aria-hidden="true" className={cx(MENU_ITEM, compact ? 'min-h-8 py-0.5' : 'min-h-9')}>
        {leading ? <span className={cx('skeleton-sheen shrink-0',
          leading === 'checkbox' ? 'size-4 rounded-sm' : 'size-6 rounded-full')} /> : null}
        <span className={cx('skeleton-sheen h-3 rounded-sm', width)} />
        <span className="skeleton-sheen ml-auto h-2.5 w-6 rounded-sm" />
      </div>)}
  </div>;
}
