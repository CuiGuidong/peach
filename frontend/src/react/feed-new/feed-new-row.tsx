/* The new-releases row's card area, shared by home and the profile page: rendered into the shell's reserved
 * `section.feednew` host, with cards from the shell's template (`feedNewCardHtml`). The ignored entry vanishes on the spot,
 * the watched one stays in place only dimmed, and the want key swaps to a filled star when pressed; all three mutate this
 * row's nodes directly instead of re-rendering the row, since a re-render would send the horizontal scroll position and
 * auto-scroll back to the start. With not one entry the whole block does not appear. */
import { useContext, useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { ShellActionsContext } from '../router/router';
import { SourceAvatar } from '../components/source-avatar';

import type { FeedNew } from './feed-new';

export function FeedNewRow({ feedNew, host, wire, act, settled }: {
  feedNew: FeedNew | null;
  host: HTMLElement;
  /** Drag, wheel, and auto-scroll wired up per settings. */
  wire(row: Element | null): void;
  /** Write operations for the three buttons on the card. */
  act(feedId: number, action: string): Promise<void>;
  /** Whether a card exists: reports once when one renders or when the last one is dismissed. */
  settled?(hasItems: boolean): void;
}) {
  const actions = useContext(ShellActionsContext);
  const box = useRef<HTMLDivElement>(null);
  const [sourceFaces, setSourceFaces] = useState<HTMLElement[]>([]);
  const html = feedNew?.items.length ? feedNew.html : '';
  useLayoutEffect(() => {
    host.removeAttribute('aria-busy');
    host.hidden = !html;
    if (feedNew) settled?.(!!html);
  }, [host, html, feedNew, settled]);
  useEffect(() => {
    if (html) wire(box.current?.querySelector('.feednewrow') ?? null);
    setSourceFaces([...box.current?.querySelectorAll<HTMLElement>('[data-feed-source-avatar]') ?? []]);
  }, [wire, html]);
  const click = async (event: MouseEvent<HTMLDivElement>) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a.feednewopen');
    if (link && actions && !event.button && !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey) {
      event.preventDefault(); actions.navigate(link.getAttribute('href')!); return;
    }
    const button = (event.target as Element).closest<HTMLElement>('[data-feed-action]');
    const card = button?.closest<HTMLElement>('[data-feed-id]');
    if (!button || !card) return;
    const action = button.dataset.feedAction || '';
    await act(Number(card.dataset.feedId), action);
    if (action === 'want' || action === 'unwant') {
      // Want is a toggle: the same key flips to the other end, and the card neither collapses nor fades.
      const wanted = action === 'want';
      button.dataset.feedAction = wanted ? 'unwant' : 'want';
      button.setAttribute('aria-pressed', String(wanted));
      button.title = wanted ? 'Remove from wants' : 'Want';
      return;
    }
    if (action === 'ignore') card.remove();
    else card.classList.add('isread');
    if (!box.current?.querySelector('[data-feed-id]')) {
      host.hidden = true;
      settled?.(false);
    }
  };
  return html ? <><div ref={box} className="contents" onClick={(event) => { void click(event) }}
    dangerouslySetInnerHTML={{ __html: html }} />{sourceFaces.map((face, index) => createPortal(
      <SourceAvatar code={face.dataset.code!} person={{ name: face.dataset.name!, source_actor_id: face.dataset.actor! }} />,
      face, `${html.length}:${index}`))}</> : null;
}
