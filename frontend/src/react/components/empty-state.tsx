/* Empty state when there is no data or result: icon, title and description in one component (`peach-web-ui`).
 *
 * The registry has no empty-state entry. The title is a real heading element, and smoke cases identify page bodies by it: a
 * blank screen and "rendered but no content" look identical under other assertions. The root's `data-empty-state` is a hook
 * for smoke and look cases, with no styling role. The standard and compact tiers share icon, font, background and border. */
import type { ComponentType, ReactNode } from 'react';
import { Button } from '@/components/base/buttons/button';

type Glyph = ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;

const SIZE = {
  standard: 'min-h-80 px-6 py-12',
  compact: 'min-h-60 px-4 py-6',
} as const;

/** Wires the empty state's add entry to the page's existing form. */
export function EmptyFocusButton({ target, children }: { target: string; children: ReactNode }) {
  return <Button size="small" variant="secondary" onClick={() => document.querySelector<HTMLElement>(target)?.focus()}>{children}</Button>;
}

export function EmptyState(
  { icon: Icon, title, actions, children, size = 'standard' }:
  { icon: Glyph; title: string; actions?: ReactNode; children: ReactNode;
    size?: keyof typeof SIZE },
) {
  return (
    <div data-empty-state="" data-empty-size={size} className={`flex min-w-0 max-w-full flex-col items-center justify-center gap-2 rounded-floating border border-separator-border bg-background-secondary-default text-center ${SIZE[size]}`}>
      <span aria-hidden className="mb-2 flex size-empty-glyph shrink-0 items-center justify-center rounded-floating border border-text-primary/15 p-2.5 text-text-secondary">
        <Icon aria-hidden className="size-8 shrink-0" />
      </span>
      <h3 className="text-body-semibold text-pretty text-text-primary">{title}</h3>
      {children != null ? <p className="max-w-empty-copy text-body-2-regular leading-empty-copy text-text-secondary">{children}</p> : null}
      {/* The destination belongs to this block and does not sit outside the frame: when "No content yet" and a button of unknown ownership sit apart,
          the reader must first connect the two to know what pressing does. */}
      {actions ? <div className="mt-2 flex flex-wrap justify-center gap-2">{actions}</div> : null}
    </div>
  );
}
