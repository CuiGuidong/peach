/* The setup guide's state layer. The card still renders in the legacy layer, but "how far along" is this module's call,
 *  so the four behaviors (skip, collapse, persist across pages, and no redraw while the signature is unchanged) are verified by behavior, not by reading app.js source. */
import { beforeEach, describe, expect, it } from 'vitest';

import {
  POST_SETUP_TUTORIAL_COLLAPSED_KEY,
  POST_SETUP_TUTORIAL_KEY,
  POST_SETUP_TUTORIAL_SKIPPED_KEY,
  isCurrentPostSetupTutorialRequest,
  nextPostSetupTutorialRequest,
  postSetupTutorialCollapsed,
  postSetupTutorialErrorHtml,
  postSetupTutorialMarker,
  postSetupTutorialSignature,
  postSetupTutorialSkipped,
  resetPostSetupTutorialState,
  setPostSetupTutorialCollapsed,
  setPostSetupTutorialMarker,
  setPostSetupTutorialSkipped,
} from '../src/onboarding/post-setup-tutorial';

const task = (key: string, done = false) =>
  ({ key, done, label: `Do ${key}`, description: 'Not started yet.', href: `/${key}` });

beforeEach(() => {
  localStorage.clear();
});

describe('Setup guide state', () => {
  it('With no keys ever written it is a clean not-started state', () => {
    expect(postSetupTutorialMarker()).toBe('');
    expect(postSetupTutorialCollapsed()).toBe(false);
    expect([...postSetupTutorialSkipped()]).toEqual([]);
  });

  it('Skipped items accumulate one by one, and undo removes only that one', () => {
    const skipped = postSetupTutorialSkipped();
    skipped.add('history');
    skipped.add('follow');
    setPostSetupTutorialSkipped(skipped);
    expect([...postSetupTutorialSkipped()].sort()).toEqual(['follow', 'history']);
    const restored = postSetupTutorialSkipped();
    restored.delete('history');
    setPostSetupTutorialSkipped(restored);
    expect([...postSetupTutorialSkipped()]).toEqual(['follow']);
  });

  it('A broken skip list is treated as nothing skipped, so the tutorial never fails as a whole', () => {
    localStorage.setItem(POST_SETUP_TUTORIAL_SKIPPED_KEY, '{not an array');
    expect([...postSetupTutorialSkipped()]).toEqual([]);
    localStorage.setItem(POST_SETUP_TUTORIAL_SKIPPED_KEY, '{"history":true}');
    expect([...postSetupTutorialSkipped()]).toEqual([]);
  });

  it('Collapse state persists locally, and the next page reads the same value', () => {
    setPostSetupTutorialCollapsed(true);
    expect(localStorage.getItem(POST_SETUP_TUTORIAL_COLLAPSED_KEY)).toBe('1');
    expect(postSetupTutorialCollapsed()).toBe(true);
    setPostSetupTutorialCollapsed(false);
    expect(postSetupTutorialCollapsed()).toBe(false);
  });

  it('The unfinished mark ignores the current page and holds across pages', () => {
    setPostSetupTutorialMarker('pending');
    expect(localStorage.getItem(POST_SETUP_TUTORIAL_KEY)).toBe('pending');
    for (const path of ['/', '/taste', '/subscriptions', '/review']) {
      history.replaceState({}, '', path);
      expect(postSetupTutorialMarker()).toBe('pending');
    }
    setPostSetupTutorialMarker('complete');
    expect(postSetupTutorialMarker()).toBe('complete');
  });

  it('The signature matches while the list content is unchanged; any single change alters the signature', () => {
    const tasks = [task('library', true), task('history')];
    expect(postSetupTutorialSignature(tasks)).toBe(postSetupTutorialSignature([...tasks]));
    expect(postSetupTutorialSignature([task('library', true), task('history', true)]))
      .not.toBe(postSetupTutorialSignature(tasks));
    expect(postSetupTutorialSignature([task('library', true)]))
      .not.toBe(postSetupTutorialSignature(tasks));
    const renamed = [task('library', true), { ...task('history'), description: 'Imported 3.' }];
    expect(postSetupTutorialSignature(renamed)).not.toBe(postSetupTutorialSignature(tasks));
  });

  it('Only the last-issued fetch counts', () => {
    const first = nextPostSetupTutorialRequest();
    const second = nextPostSetupTutorialRequest();
    expect(isCurrentPostSetupTutorialRequest(first)).toBe(false);
    expect(isCurrentPostSetupTutorialRequest(second)).toBe(true);
  });

  it('Reopening clears skips and folds, returning the mark to unfinished', () => {
    setPostSetupTutorialMarker('complete');
    setPostSetupTutorialCollapsed(true);
    setPostSetupTutorialSkipped(new Set(['history']));
    resetPostSetupTutorialState();
    expect(postSetupTutorialMarker()).toBe('pending');
    expect(postSetupTutorialCollapsed()).toBe(false);
    expect([...postSetupTutorialSkipped()]).toEqual([]);
  });
});

it('When the list cannot load, close sits left and retry-now right', () => {
  const host = document.createElement('div');
  host.innerHTML = postSetupTutorialErrorHtml('');
  expect([...host.querySelectorAll('.post-setup-error-actions button')].map((button) => button.textContent))
    .toEqual(['Off', 'Retry now']);
});
