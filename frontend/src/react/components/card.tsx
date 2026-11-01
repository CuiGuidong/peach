/* The card face for Board. This is the only source of truth.
 *
 * Cards in the legacy stylesheet come in two families, each page has its own baseline, and they cannot all be drawn one way:
 *
 * - **Filled**: `background:var(--ground);border:0`, 16px radius (20px for chart cards), with a 1px contact shadow underneath.
 *   The readout cards `.metricstrip>button`, taste readouts `.tastesummary`, panels `.insightpanel`, sections
 *   `.followmanage .fmain>.fsec`, and chart cards `.board-radial-card` are this family. `--ground` maps to
 *   `--color-background-secondary-default` (the `:root` mapping in `web/board.css`), and the shadow is the upstream
 *   `--shadow-card` for the same purpose ("1px contact shadow used on white cards sitting on the secondary background").
 * - **Outlined**: `border:1px solid var(--line-soft);background:var(--color-background-primary-default)`. The review page's
 *   `body[data-surface="/review"] .reviewitem` is this family. The card floats on the page background, finished with a hairline
 *   border instead of a background change.
 *
 * A third group is "filled plus an outline": the activity page's `.cleanupfieldset` is a `--ground` base with `--line`, and the
 * quality page's `.qualityitem` is a `--ground` base with a lighter `--line-soft`. So the outline is an optional tier on top of
 * filled (`bordered`), not its opposite.
 *
 * During migration each page assembled its own `rounded-2xl border border-separator-border`, the same card grew twenty kinds of
 * outlined hollow shells across ten files, and whole pages lost a layer of background. Card faces live here precisely so that
 * does not happen again. */

/** Radii: metric cards, panels, and sections are 16px; chart cards one tier larger at 20px, matching the old `.board-radial-card`;
 *  outlined cards use Board's non-elevated surface tier `--surface-radius` (14px), which `outlined` takes by default. */
export type CardRadius = 'default' | 'chart' | 'surface' | 'plain';

/** Padding: `none` leaves the card's own header, body, and footer to arrange themselves; `default` is the 20px of the legacy chart card and panel body. */
export type CardPadding = 'none' | 'default';

/** The card face itself. Which tier is decided by that page's baseline CSS, not by "looks better".
 *
 *  - `filled`: `--ground` fill, no border. Board management's workhorse card.
 *  - `outlined`: `--color-background-primary-default` base plus one `--line-soft`. The review page's entry cards.
 *  - `raised`: primary base, no border. A card floating on another (the per-author group card in follow management). */
export type CardVariant = 'filled' | 'outlined' | 'raised';

export type CardOptions = {
  variant?: CardVariant;
  radius?: CardRadius;
  padding?: CardPadding;
  /** The card itself is clickable (the stat card doubling as a tab, the source card): add hover fill, focus ring, and cursor. */
  interactive?: boolean;
  /** Cards carry an exclusive selected state: when selected, the face switches to the overlay tier, the touch shadow drops away, and a 2px ring in focus ring color is pressed onto the top layer. */
  selectable?: boolean;
  /** The stroke added on top of the fill: the active page's Fieldset uses `--line`, hi-dpi entries use `--line-soft`.
   *  `outlined` already has a stroke and needs none. */
  bordered?: 'line' | 'soft';
  className?: string;
};

const FACE = 'min-w-0';

const VARIANT: Record<CardVariant, string> = {
  filled: 'bg-background-secondary-default',
  outlined: 'border border-separator-border bg-background-primary-default',
  raised: 'bg-background-primary-default',
};

/* Radius and shadow are one thing: the only shadow in the old stylesheet is the metric card tier (`0 1px 2px #00000008`),
 * and the chart cards `.board-radial-card` / `.board-heat-card` / `.board-sankey-card` are all plain-faced. */
const RADIUS: Record<CardRadius, string> = {
  default: 'rounded-2xl shadow-card',
  chart: 'rounded-2-5xl',
  surface: 'rounded-surface',
  /* The data management row of plain-face count cards (legacy `.board-plain-stat`): the same 16px, but without the pressed shadow. */
  plain: 'rounded-2xl',
};

const BORDER = {
  line: 'border border-border-button-default',
  soft: 'border border-separator-border',
};

const PADDING: Record<CardPadding, string> = {
  none: '',
  default: 'p-5',
};

/* Hover lifts the fill only when not selected: in the legacy rules the selected-state rule came after hover and beat it. Utility ordering is Tailwind's own,
 *  not the written order, so "not selected" goes into the variant instead of relying on order. */
const INTERACTIVE = 'cursor-pointer outline-none not-data-selected:hover:bg-card-hover'
  + ' focus-visible:ring-2 focus-visible:ring-border-focus-ring focus-visible:ring-offset-3';

/* The selection ring is painted on `::after`, stacked on top, without an inset box-shadow: an inner shadow paints beneath child elements,
 * and the metric card's footnote strip carries a background that covers the ring's lower half, leaving only the top three sides. The old
 * `.metricstrip>button[aria-selected=true]::after` was a 2px-stroke overlay, with the card's radius. */
const SELECTABLE = 'relative data-selected:bg-background-primary-default data-selected:shadow-none'
  + ' data-selected:after:pointer-events-none data-selected:after:absolute data-selected:after:inset-0'
  + ' data-selected:after:z-1 data-selected:after:rounded-[inherit]'
  + ' data-selected:after:border-2 data-selected:after:border-border-focus-ring';

/** The card face's class name. The host may be a `section`, `li`, React Aria's `Tab` or `Modal`, so only a class name is given. */
export function cardClass(options: CardOptions = {}) {
  const {
    variant = 'filled', padding = 'default', interactive, selectable, bordered, className,
  } = options;
  /* Radius follows the variant: the filled family is 16px plus a contact shadow, the outlined family a clean 14px face.
     The legacy stylesheet already binds these two together; splitting them would make every caller remember which pairs with which. */
  const radius = options.radius ?? (variant === 'outlined' ? 'surface' : 'default');
  return [
    FACE,
    VARIANT[variant],
    RADIUS[radius],
    PADDING[padding],
    bordered ? BORDER[bordered] : '',
    interactive ? INTERACTIVE : '',
    selectable ? SELECTABLE : '',
    className ?? '',
  ].filter(Boolean).join(' ');
}
