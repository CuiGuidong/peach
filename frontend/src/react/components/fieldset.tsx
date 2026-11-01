/* The management area's "one thing to do on this page" card: filled base plus an outline, 16px radius, one contact shadow,
 * with the body and a button-bearing footer inside.
 *
 * In the legacy stylesheet the data management page's blocks (`.cleanupfieldset`, `[data-cleanup-processing]`,
 * `.resourcesyncbox`) were already the same card face (`web/board.css` merges them into one rule), differing only in layout:
 * - `split`: description left, buttons right, two vertically centered columns, body and footer each 24px padding; below
 *   1000px the buttons drop under the description, the footer goes left and loses its top padding. Media repair, empty
 *   folders and resource sync.
 * - `stack`: body on top, footer below, body `20px 20px 16px`, minimum 120px; the footer is a band slightly darker than the
 *   card (`--board-card-foot`), one line on top, `12px 20px`, minimum 56px. Scan and collect, organize and link management.
 *
 * It is not the same card as `../settings/section.tsx`'s `Section`: that one groups sections inside the settings overlay,
 * borderless with the title outside the card; this one has a border and the title is a Title 2 inside the card. */
import type { ReactNode } from 'react';

import { cardClass } from './card';
import { FIELDSET_BODY, FIELDSET_FOOT, fieldsetClass, type FieldsetLayout } from './fieldset-layout';

/** The results panel below the card: the same filled base, one outline, 14px radius, no elevation.
 *  Link check and resource sync lay a background task's conclusions here, section stacked on section with a hairline between them. */
export const RESULT_PANEL = cardClass({
  padding: 'none', radius: 'surface', bordered: 'line', className: 'overflow-hidden',
});

/** A section in the result panel: 16px padding, with a top border on every section except the first. */
export const RESULT_SECTION = 'border-t border-border-button-default p-4 first:border-t-0';

/** The section title row outside the cards (link management, resource sync), Title 2, 16px from the card below.
 *
 *  This page hangs in `#stats`, and the legacy sheet's `.stats h2` gives all second-level headings 24px and a 4px bottom margin.
 *  It is not in a layer, so utilities cannot win; hence the `!` on both the type and margin groups. */
export function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={id} className="text-title-2-medium! m-0! text-text-primary">{children}</h2>;
}

/** The card's title. `gap` is the distance to the paragraph below: 12px for Organize and Empty folders, 8px for Links and Resource sync;
 *  the scan-and-collect pair's body is itself a column with 8px spacing, so the title reserves nothing extra. */
export function FieldsetTitle(
  { id, gap = 'none', children }: { id?: string; gap?: 'none' | 'small' | 'medium'; children: ReactNode },
) {
  const margin = gap === 'medium' ? 'mb-3' : gap === 'small' ? 'mb-2' : '';
  return <h3 id={id} className={`text-title-2-medium text-text-primary ${margin}`}>{children}</h3>;
}

export function Fieldset(
  { layout, label, labelledBy, id, footer, children, attributes }:
  {
    layout: FieldsetLayout;
    /** Use it when there is no visible heading to point at (the scan-and-collect cards keep their titles in the body column). */
    label?: string;
    labelledBy?: string;
    id?: string;
    footer?: ReactNode;
    children: ReactNode;
    /** The `data-*` attributes smoke and appearance tests use to find cards. Class names cannot do it: generated names would collide with the legacy stylesheet. */
    attributes?: Record<`data-${string}`, string>;
  },
) {
  return (
    <section id={id} aria-label={label} aria-labelledby={labelledBy} {...attributes}
      className={fieldsetClass(layout)}>
      <div className={FIELDSET_BODY[layout]}>{children}</div>
      {footer ? <footer className={FIELDSET_FOOT[layout]}>{footer}</footer> : null}
    </section>
  );
}
