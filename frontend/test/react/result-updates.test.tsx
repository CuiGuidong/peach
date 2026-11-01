import { act } from 'react';
import { QueryClientProvider, notifyManager, useQuery } from '@tanstack/react-query';
import { afterEach, expect, it, vi } from 'vitest';

import { createResultRefresher, ResultUpdates } from '../../src/react/result-updates';
import { TASKS_KEY } from '../../src/react/activity/tasks';
import { queryClient } from '../../src/react/query';
import { mount, pending, settle } from './render';

notifyManager.setScheduler(notify => notify());
afterEach(() => queryClient.clear());

it('Background prefetches for unshown pages keep reading without blocking the current page\'s revision handling', async () => {
  const old = pending<string>();
  const prefetched = queryClient.fetchQuery({ queryKey: ['item', 3], queryFn: () => old.answer });
  await createResultRefresher()({ catalog: '1' }, { catalog: '2' });
  expect(queryClient.getQueryState(['item', 3])?.fetchStatus).toBe('fetching');
  await old.release('Prefetched content');
  expect(await prefetched).toBe('Prefetched content');
});

it('The list updates when a running task publishes confirmation results; status and credential queries keep their original values', async () => {
  const data = { available: true, running: [{ id: 1, status: 'running' }], finished: [], skipped: [],
    result_versions: { follow: '1' } };
  queryClient.setQueryData(TASKS_KEY, data);
  queryClient.setQueryData(['follow-feed'], 'First entry');
  queryClient.setQueryData(['follow-manage', 'check'], 'running');
  queryClient.setQueryData(['follow-manage', 'credentials'], 'Credentials');
  queryClient.setQueryData(['catalog-grid'], 'Library');
  queryClient.setQueryData(['index', 'performers'], 'Old roster');
  let current = 'First entry';
  const read = vi.fn(async () => current);
  function Feed() {
    const feed = useQuery({ queryKey: ['follow-feed'], queryFn: read });
    return <p>{feed.data}</p>;
  }
  const host = await mount(<QueryClientProvider client={queryClient}><ResultUpdates /><Feed /></QueryClientProvider>);
  await settle();
  expect(read).not.toHaveBeenCalled();
  await act(async () => {
    current = 'First item, second item';
    queryClient.setQueryData(TASKS_KEY, { ...data, result_versions: { follow: '2' } });
  });
  await settle();
  expect(host.textContent).toBe('First item, second item');
  expect(read).toHaveBeenCalledTimes(1);
  expect(queryClient.getQueryState(['follow-manage', 'check'])?.isInvalidated).toBe(false);
  expect(queryClient.getQueryState(['follow-manage', 'credentials'])?.isInvalidated).toBe(false);
  expect(queryClient.getQueryState(['catalog-grid'])?.isInvalidated).toBe(false);
  expect(queryClient.getQueryState(['index', 'performers'])?.isInvalidated).toBe(true);
});

it('When follows results change, stats and taste refetch too: the server caches of both pages read from the follows source', async () => {
  // The page-to-version-key mapping matches `ResultVersionTablesTests` in `tests/test_ledger_revision.py`.
  for (const key of [['stats'], ['taste', 'all'], ['catalog-grid']]) queryClient.setQueryData(key, 'old');
  await createResultRefresher()({ follow: '1' }, { follow: '2' });
  expect(queryClient.getQueryState(['stats'])?.isInvalidated).toBe(true);
  expect(queryClient.getQueryState(['taste', 'all'])?.isInvalidated).toBe(true);
  expect(queryClient.getQueryState(['catalog-grid'])?.isInvalidated).toBe(false);
});

it('Reads issued before the edition arrives are rechecked once they finish; a stale response must not cover the confirmed result', async () => {
  const old = pending<string>();
  let reads = 0;
  function Item() {
    const item = useQuery({ queryKey: ['item', 2], queryFn: () => ++reads === 1 ? old.answer : Promise.resolve('Confirmed result') });
    return <p>{item.data}</p>;
  }
  const host = await mount(<QueryClientProvider client={queryClient}><Item /></QueryClientProvider>);
  const refresh = createResultRefresher();
  const completed = refresh({ catalog: '1' }, { catalog: '2' });
  await old.release('Old response');
  await act(async () => { await completed; });
  expect(reads).toBe(2);
  expect(host.textContent).toBe('Confirmed result');
});

it('While a slow read runs, next-item results queue up to refresh without canceling the read or dropping new values', async () => {
  const first = pending<string>();
  let reads = 0;
  queryClient.setQueryData(['item', 1], 'Old title');
  function Item() {
    const item = useQuery({ queryKey: ['item', 1], queryFn: () => ++reads === 1 ? first.answer : Promise.resolve('Final title') });
    return <p>{item.data}</p>;
  }
  const host = await mount(<QueryClientProvider client={queryClient}><Item /></QueryClientProvider>);
  const refresh = createResultRefresher();
  let completed: Promise<void>;
  await act(async () => {
    completed = refresh({ catalog: '1' }, { catalog: '2' });
    void refresh({ catalog: '2' }, { catalog: '3' });
  });
  expect(host.textContent).toBe('Old title');
  await first.release('Intermediate title');
  await act(async () => { await completed!; });
  expect(reads).toBe(2);
  expect(host.textContent).toBe('Final title');
});
