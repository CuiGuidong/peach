import { describe, expect, it } from 'vitest';
import { cleanupSkeletonHtml, REPAIR_CARD_TEXT, SCAN_CARD_TEXT } from '../src/management';

describe('Data management first screen', () => {
  const skeleton = () => {
    const root = document.createElement('div');
    root.innerHTML = cleanupSkeletonHtml();
    return root;
  };
  it('Stat cards reuse the final layout with name and icon immediate, and only the count paints a placeholder', () => {
    const stats = skeleton().querySelectorAll('[inert] > div:first-child > div');
    expect([...stats].map(card => card.querySelector('i use')?.getAttribute('href')))
      .toEqual(['#i-square-check-big', '#i-sparkles', '#i-file-stack', '#i-file-archive', '#i-trash']);
    expect([...stats].map(card => card.firstElementChild?.textContent))
      .toEqual(['Manual review', 'HD version', 'Duplicates', 'Junk files', 'Trash']);
    for (const card of stats) {
      expect(card.querySelector('strong > .skeleton-text')).not.toBeNull();
      expect(card.lastElementChild?.querySelector('.skeleton-text')).not.toBeNull();
    }
  });
  it('Task cards are ordered by the final sequence: the scan-and-fetch and media repair island cards, then organize', () => {
    const grid = skeleton().querySelector('[inert] > div:nth-child(2)')!;
    expect([...grid.children].map(card => card.id))
      .toEqual(['libraryProcessing', 'mediaRepair', 'organize']);
    for (const card of grid.querySelectorAll(':scope > #libraryProcessing, :scope > #mediaRepair')) {
      expect(card.firstElementChild?.classList.contains('peach-react')).toBe(true);
    }
    const scan = grid.querySelector('#libraryProcessing')!;
    expect(scan.querySelector('p')?.textContent).toBe(SCAN_CARD_TEXT);
    expect(scan.querySelector('.skeleton')).toBeNull();
    expect(scan.querySelector('footer > a')?.getAttribute('href')).toBe('/sources');
    expect(grid.querySelector('#mediaRepair p')?.textContent).toBe(REPAIR_CARD_TEXT);
  });
  it('Buttons that need data before running keep their final variant and size, are blocked with native disabled, and are marked as skeleton action buttons', () => {
    const root = skeleton();
    const split = root.querySelector('#libraryProcessing [data-split-button]')!;
    expect(split.getAttribute('data-variant')).toBe('primary');
    expect([...split.querySelectorAll('button')].map(button => button.classList.contains('bg-button-primary')))
      .toEqual([true, true]);
    expect(split.querySelector('button:first-child svg')).toBeNull();
    expect(split.querySelector('button:last-child use')?.getAttribute('href')).toBe('#i-chevron-down');
    const repair = root.querySelector('#mediaRepair footer > button')!;
    expect(repair.textContent).toBe('Start repair');
    expect(repair.classList.contains('bg-button-primary')).toBe(true);
    expect(repair.hasAttribute('data-skeleton-action')).toBe(true);
    const actions = root.querySelectorAll('button:not([aria-haspopup="listbox"])');
    for (const button of actions) {
      expect(button.hasAttribute('disabled')).toBe(true);
      expect(button.hasAttribute('data-skeleton-action')).toBe(true);
    }
  });
  it('Link management title and count render immediately while the conditions panel waits for real state', () => {
    const root = skeleton();
    expect(root.querySelector('#link-manager h3')?.textContent).toBe('Link management');
    expect([...root.querySelectorAll('.link-stat-grid > div > span')].map(term => term.textContent))
      .toEqual(['Total links', 'Official site/agency', 'Social accounts', 'Video profile sites']);
    expect(root.querySelector('#resource-sync')).toBeNull();
  });
});
