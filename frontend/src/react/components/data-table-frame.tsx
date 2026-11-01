import { useEffect, useRef, type MouseEvent, type PropsWithChildren } from 'react';
import { attachOverlayScrollbar } from '@peach/legacy/ui';
import { wireTableScroller } from '../../ui-kit/scroll';
import { ResizableTableContainer } from 'react-aria-components';
import type { TablePreferences } from './table-column-preferences';
import './table-column-controls.css';

import { clickedBlank } from './row-click';

export interface DataTableFrameProps extends PropsWithChildren {
  /** The follows source table needs extra sort-icon rules; the outer frame and row states stay with this shared component. */
  follow?: boolean;
  preferences?: TablePreferences;
  /** When set, the whole row is selectable: a click on a row's empty space calls back with that row's `data-key` (the row id React Aria writes on the `tr`);
   *  clicks on a row's checkbox, buttons or links do not count. */
  onRowClick?(key: string): void;
}

/** The Data Table frame of BoardUI Table: main surface, full border, rounded corners, and selected-row feedback. */
export function DataTableFrame({ children, follow = false, onRowClick, preferences }: DataTableFrameProps) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const viewport = host.current?.querySelector<HTMLElement>('.overflow-x-auto') ?? null;
    attachOverlayScrollbar(viewport);
    wireTableScroller(viewport);
  });
  const click = onRowClick ? (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const row = target.closest<HTMLElement>('[role="row"][data-key]');
    if (row && clickedBlank(event, row)) onRowClick(row.dataset.key!);
  } : undefined;
  return (
    <div ref={host} data-board-data-table data-resizable-table={preferences ? '' : undefined} data-follow-table={follow || undefined} onClick={click}>
      {preferences ? <ResizableTableContainer className="relative min-w-0" onResize={preferences.resize} onResizeEnd={preferences.save}>
        {children}
      </ResizableTableContainer> : children}
    </div>
  );
}
