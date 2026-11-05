import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { entityFaceImg } from '@peach/card-art';
import { entityPath, esc, firstGrapheme, fmtSize } from '@peach/legacy/core';
import { confirmModal } from '@peach/legacy/ui';
import { Button } from '@/components/base/buttons/button';
import { cx } from '@/utils/cx';

import { errorMessage } from '../../api';
import { entityDisplayName, nameFallback } from '../../core/entity-names';
import { DataTable, type DataColumn } from '../components/data-table';
import { Fieldset, FieldsetTitle } from '../components/fieldset';
import { LEGACY_AVATAR_IMG } from '../components/legacy-avatar';
import { Note } from '../components/note';
import { IndexSearch } from '../index/index-search';
import { queryClient } from '../query';
import { busyProps } from '../settings/busy-props';
import { useEntityNames } from '../use-entity-names';
import { TRASH_KEY } from './data-cleanup';
import {
  deletePerformerVideos, fetchDeletePerformers, fetchDeletePlan, PERFORMER_DELETE_KEY,
  type DeletePerformer, type PerformerDeleteResult,
} from './performer-delete';

const DESCRIPTION = 'Check performers to permanently delete their video files, details, and watch history across all sources, including titles in the trash. Performer profiles and photos are kept. A shared file with co-stars is deleted only once.';

function PerformerName({ person }: { person: DeletePerformer }) {
  const name = entityDisplayName('performer', person.k, person.entity_id);
  const fallback = nameFallback('performer', person.k, person.entity_id);
  return <a href={entityPath('performer', person.k, person.entity_id)} title={fallback || name}
    className="flex min-w-0 items-center gap-3 text-text-primary">
    <span aria-hidden className={cx('relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium', LEGACY_AVATAR_IMG)}
      dangerouslySetInnerHTML={{ __html: `<span>${esc(firstGrapheme(name))}</span>` + entityFaceImg({
        kind: 'performer', id: person.entity_id, hasImage: person.has_image, version: person.image_version,
        focus: person.avatar_focus, thumb: true,
      }) }} />
    <span className="min-w-0 wrap-anywhere">{name}</span>
  </a>;
}

export function PerformerDeleteCard({ toast }: { toast(message: string): void }) {
  useEntityNames();
  const query = useQuery({ queryKey: PERFORMER_DELETE_KEY, queryFn: ({ signal }) => fetchDeletePerformers(signal) });
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<PerformerDeleteResult | null>(null);
  const [error, setError] = useState('');
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => request.current?.abort(), []);

  const columns = useMemo<DataColumn<DeletePerformer>[]>(() => [
    { id: 'name', label: 'Performers', width: 280, min: 160, value: person => person.k,
      render: person => <PerformerName person={person} /> },
    { id: 'works', label: 'Movie', width: 104, min: 80, value: person => person.n,
      render: person => `${person.n.toLocaleString()} titles` },
    { id: 'files', label: 'Files', width: 104, min: 80, value: person => person.file_count,
      render: person => `${person.file_count.toLocaleString()} titles` },
    { id: 'bytes', label: 'Registered size', width: 136, min: 104, value: person => person.bytes,
      render: person => fmtSize(person.bytes) },
  ], []);
  const needle = search.toLocaleLowerCase();
  const items = (query.data?.items || []).filter(person => !needle || [person.k,
    entityDisplayName('performer', person.k, person.entity_id), ...person.aliases,
  ].some(name => name.toLocaleLowerCase().includes(needle)));

  const remove = async (chosen: DeletePerformer[], clear: () => void) => {
    if (busy) return;
    setBusy(true);
    setError('');
    const controller = new AbortController();
    request.current = controller;
    try {
      const plan = await fetchDeletePlan(chosen.map(person => person.entity_id), controller.signal);
      controller.signal.throwIfAborted();
      if (!plan.total) { toast('The selected performers have no deletable titles'); return }
      const names = plan.performers.map(person => entityDisplayName('performer', person.name, person.id));
      const examples = [...new Set(plan.items.map(item => item.code || item.name || `#${item.id}`))];
      const done = await confirmModal({
        title: 'Delete every title of the selected performers',
        body: `Permanently deletes ${plan.total} video files tied to ${names.slice(0, 5).join(', ')}${names.length > 5 ? ` and ${names.length} more performers` : ''} (registered size ${fmtSize(plan.bytes)}).`
          + 'The scope covers every source and the trash regardless of the current search, sort, or page. Files, details, and watch history are permanently deleted and cannot be recovered; performer profiles and photos are kept.'
          + (plan.shared ? `${plan.shared} of these files also belong to unchecked performers and will vanish from their titles once deleted.` : '')
          + `Involves: ${examples.slice(0, 5).join(', ')}${examples.length > 5 ? ` and ${examples.length} more titles` : ''}.`,
        confirmLabel: 'Permanently delete titles', danger: true,
        onConfirm: () => deletePerformerVideos(plan),
      });
      if (!done.confirmed) return;
      const outcome = done.result as PerformerDeleteResult;
      setResult(outcome);
      clear();
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: PERFORMER_DELETE_KEY, exact: true }),
        queryClient.invalidateQueries({ queryKey: TRASH_KEY, exact: true }),
      ]);
      toast(`Permanently deleted ${outcome.purged} video files${outcome.blocked.length ? `; ${outcome.blocked.length} were not deleted` : ''}`);
    } catch (cause) {
      if (!controller.signal.aborted) setError(errorMessage(cause));
    } finally {
      if (!controller.signal.aborted) setBusy(false);
    }
  };

  const failures = result ? [
    ...result.blocked, ...result.cleanup_pending,
    ...result.cache_blocked.map(item => ({ path: item.name, reason: item.reason })),
  ] : [];
  return <section id="batch-delete" className="flex min-w-0 scroll-mt-20 flex-col gap-3" aria-label="Batch delete">
    {query.isPending || query.isError ? <Fieldset layout="stack" labelledBy="batch-delete-title">
      <FieldsetTitle id="batch-delete-title">Batch delete</FieldsetTitle>
      {query.isError ? <Note tone="error" title="Failed to read the performer list"
        action={<Button variant="secondary" size="small" onClick={() => void query.refetch()}>Retry</Button>}>
        {errorMessage(query.error)}</Note> : <p role="status" className="text-body-regular text-text-secondary">Reading the performer list…</p>}
    </Fieldset> : <DataTable label="Performer titles" title="Batch delete" titleId="batch-delete-title" unit=" performers"
      description={DESCRIPTION} items={items} columns={columns}
      rowId={person => String(person.entity_id)} rowLabel={person => entityDisplayName('performer', person.k, person.entity_id)}
      selected={selected} onSelected={setSelected}
      toolbarActions={<IndexSearch label="Search a performer's name or alias" value={search} onQuery={value => { setSearch(value); setSelected([]) }} />}
      actions={(chosen, clear) => <Button variant="danger" size="small" {...busyProps(busy)}
        onClick={() => void remove(chosen, clear)}>Delete the selected performers' titles</Button>} />}
    {error ? <Note tone="error" title="Could not read the deletion list">{error}</Note> : null}
    {result ? <Note tone={failures.length ? 'warning' : 'info'} title={`Permanently deleted ${result.purged} video files`}
      extra={failures.length ? <div className="flex flex-col gap-2 text-body-2-regular wrap-anywhere">
        {failures.slice(0, 5).map((item, index) => <p key={index}>{item.path}（{item.reason}）</p>)}
      </div> : null}>
      {failures.length
        ? `${result.blocked.length} files could not be deleted and their library records remain; ${result.cleanup_pending.length} quarantined files and ${result.cache_blocked.length} cache files await cleanup.`
        : 'The selected titles and their linked records are deleted; performer profiles and photos are kept.'}
    </Note> : null}
  </section>;
}
