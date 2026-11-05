/* The "Scan and collect" card on the data management page.
 *
 * The card describes what that button is doing right now (progress or waiting dots); results and failures describe the run's
 * outcome and hang outside the card, written the same way as the link management and resource sync blocks.
 *
 * Writes are `useMutation`: the server returns this run's new snapshot, swapped into cache with `setQueryData`, then this key
 * rereads once immediately to join the polling rhythm. An old terminal state read on first screen does not masquerade as a
 * new result: jobs keep running after the page closes, and the state lies around holding the last run's receipt; criteria in
 * `use-library-processing.ts`. */
import { useEffect } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/base/buttons/button';
import { LinkButton } from '@/components/base/buttons/link-button';
import { Chip } from '@/components/base/badges/chip';

import { apiSend, errorMessage } from '../../api';
import { SCAN_CARD_TEXT } from '../../management';
import type { LibraryProcessingProps } from '../bundle';
import { Fieldset, FieldsetTitle } from '../components/fieldset';
import { Note } from '../components/note';
import { StatusLabel } from '../components/status-label';
import { useOverlayScrollbar } from '../components/overlay-scrollbar';
import { PathLine } from '../components/path-line';
import { Disclosure } from '../settings/section';
import { queryClient } from '../query';
import {
  ALL_CONTENT_URL, DISCONNECTED_TEXT, issueDetails, LIBRARY_PROCESSING_KEY, LIBRARY_PROCESSING_URL, PARTIAL_RESULT_TEXT,
  notesLine, processingActive, processingHasPartialResult, remainingTime, slowItem, type LibraryProcessingCommand, type LibraryProcessingData,
} from './library-processing';
import { SlowItemNote } from './slow-item';
import { useLibraryProcessingJob } from './use-library-processing';
import { setProcessingNoticeVisible, useProcessingNoticeVisibility } from './processing-notice-visibility';
import { ProcessingActions } from './processing-actions';
import { ProcessingProgress } from './processing-line';
import { TrafficProgress } from './processing-traffic';
import { ProcessingControls } from './processing-controls';
import { downloadIssueList, exportProcessingIssues } from './issue-export';
import { busyProps, useAction } from '../settings/use-action';

/* Body text is kept in constants: text wrapped across JSX lines picks up an extra space at the seam, which shows in Chinese sentences.
   The card body and the first-screen skeleton share `SCAN_CARD_TEXT` (`management.ts`). */
const STALLED_TEXT = 'This one takes a while and has no fresh progress yet. After the task ends you can retry the unfinished parts.';
/* Filling in performer profiles is a step after database entry, and a run often has nothing to fill; in that case this line does not appear:
   with all four readouts at 0, a line like "0 aliases" leaves readers unable to tell whether there was nothing to fill or the step never ran. */
const profileText = (state: LibraryProcessingData) => {
  const aliases = state.performer_aliases || 0;
  const avatars = state.performer_avatars || 0;
  const conflicts = state.performer_profile_conflicts || 0;
  const failed = state.performer_profile_failed || 0;
  if (!aliases && !avatars && !conflicts && !failed) return '';
  const parts = [`Fill in performer profiles: ${aliases} aliases, ${avatars} avatars`];
  if (conflicts) parts.push(`${conflicts} ${conflicts === 1 ? 'profile shares a name and needs' : 'profiles share a name and need'} confirmation they are the same person`);
  if (failed) parts.push(`${failed} avatars could not be fetched`);
  return `${parts.join(', ')}.`;
};

const receiptText = (state: LibraryProcessingData) => {
  if (state.requested_stage === 'previews') return `Generated ${state.previews || 0} video previews.`;
  const profile = profileText(state);
  return `Scanned ${state.scanned || 0} files, identified ${state.identified || 0} codes, `
    + `fetched ${state.candidates || 0} sets of video details, auto-saved ${state.auto_applied || 0}.`
    + (state.previews ? ` Generated previews for ${state.previews} videos.` : '')
    + (profile ? ` ${profile}` : '');
};

/** The block outside the card: what happened in this run. Per-item details load on expand; the full list is in the log file the status names. */
function Outcome(
  { state, problem, settled, onRetry, toast }:
  {
    state: LibraryProcessingData; problem: string;
    settled: LibraryProcessingData | null; onRetry(): void; toast(message: string): void;
  },
) {
  const details = issueDetails(state);
  const exporter = useAction();
  const archive = useAction();
  const retryable = state.status === 'failed' && !!state.retryable_asset_ids?.length;
  const notes = notesLine(state.notes || {});
  const failed = !!problem || (!state.archived && state.status === 'failed');
  const partial = !problem && !state.archived && processingHasPartialResult(state);
  /* The same log prints in one place only: while the failure prompt carries a problem list it belongs to the list; once the run ends with only "do not ask again for 7 days" left, it belongs to that prompt. */
  const logInList = failed && !!details?.log;
  const slow = slowItem(state);
  /* The manifest is the only self-scrolling block on this page, so its native scrollbar is just a plain system-gray column. */
  const list = useOverlayScrollbar<HTMLUListElement>();
  return (
    /* Collapse the whole block when empty: the `aria-live` container would otherwise leave an empty track and add a phantom gap under the card. */
    <div aria-live="polite" className="flex flex-col gap-4 empty:hidden">
      {slow
        ? <SlowItemNote state={state} slow={slow} />
        : state.status === 'running' && state.stalled
        ? <Note tone="warning" title="Processing slowly">{STALLED_TEXT}</Note>
        : null}
      {failed
        ? <Note tone={partial ? 'warning' : 'error'} className="gap-0 p-3"
            title={partial ? 'Processing ended, some items still need work' : 'Processing unfinished'}
            action={<div className="flex flex-wrap items-center gap-2">
              {partial ? <LinkButton href={ALL_CONTENT_URL} size="small" trailingIcon={RiArrowRightLine}>View all content</LinkButton> : null}
              {retryable ? <Button variant="secondary" size="small" aria-label="Retry unfinished items" onClick={onRetry}>Retry now</Button> : null}
            </div>}
            extra={details
              /* Three layers stacked in one notice: one conclusion sentence, one list, one log address. Between each runs
                 a hairline in its own color, so the reader can see where each segment ends; with spacing alone,
                 dozens of similarly sized detail lines would run together. */
              ? <div className="mt-3 border-t border-current/20 pt-3">
                  <Disclosure summary={details.label} contentClassName="gap-0">
                    {/* The track is a sibling of the scroll container, so it needs a positioned ancestor wrapping only the manifest to anchor to. */}
                    <div className="relative">
                      {/* Inter-row lines are painted on each row itself, not with `divide-y`: that family's selectors are wrapped in
                          `:where()` with zero specificity and cannot beat the island's trailing `@scope` preflight that zeroes every element's
                          borders, so the lines silently disappear. */}
                      <ul ref={list} className="max-h-96 overflow-y-auto pr-3">
                        {details.items.map((item) => (
                          <li key={item.key}
                            className="flex flex-col gap-1 border-b border-current/15 py-2 wrap-anywhere first:pt-0 last:border-b-0 last:pb-0">
                            {item.href
                              ? <a href={item.href} className="text-body-2-medium underline-offset-4 hover:underline">{item.label}</a>
                              : <span className="text-body-2-medium">{item.label}</span>}
                            <span className="text-caption-1-regular">{item.note}</span>
                            {item.hint ? <code className="text-caption-1-regular break-all">{item.hint}</code> : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {details.log
                      /* The log address and dividers use the secondary text color. */
                      ? <div className="mt-3 border-t border-current/20 pt-3 text-text-secondary">
                          <PathLine path={details.log} prefix="Full log: " className="text-caption-1-regular"
                            onRevealed={toast} />
                        </div>
                      : null}
                  </Disclosure>
                </div>
              : null}>
            {problem || state.error || 'Processing not completed, please retry'}
            {partial ? `\n${PARTIAL_RESULT_TEXT}` : null}
          </Note>
        : null}
      {settled?.status === 'complete'
        ? <Note tone="success" title="Processing finished">{receiptText(settled)}</Note>
        : null}
      {settled?.status === 'cancelled' ? <Note tone="neutral" title="Task stopped">
        Profiles and previews already fetched are kept; this run will not continue automatically.
      </Note> : null}
      {state.archived ? <Note tone="neutral">The previous run's issue notes were archived; history is kept.</Note> : null}
      {!processingActive(state) && (state.issue_count || state.status === 'failed') ? <div className="flex flex-wrap items-center gap-2">
        {state.issue_count ? <Button variant="secondary" size="small" {...busyProps(!!exporter.busy)} onClick={() => void exporter.run('export',
          signal => exportProcessingIssues(state,signal), contents => {
            downloadIssueList(state.job_id!,contents); toast('Issue list exported');
          })}>Export the full issue list</Button> : null}
        {!state.archived ? <Button variant="secondary" size="small" {...busyProps(!!archive.busy)}
          onClick={() => void archive.run('archive',signal => apiSend<LibraryProcessingData>(LIBRARY_PROCESSING_URL,
            {action:'archive',job_id:state.job_id},'POST',signal), next => {
              queryClient.setQueryData(LIBRARY_PROCESSING_KEY,next); toast('Issue notice archived');
            })}>Archive note</Button> : null}
      </div> : null}
      {exporter.error || archive.error ? <Note tone="warning">{exporter.error || archive.error}</Note> : null}
      {!processingActive(state) && notes
        /* Padding and divider rhythm match the failure notice above: the two often appear stacked, and mismatched whitespace shows at a glance. */
        ? <Note tone="neutral" className="gap-0 p-3"
            extra={state.issues_log && !logInList
              /* Neutral hint dividers follow the secondary text color. */
              ? <div className="mt-3 border-t border-current/20 pt-3 text-text-secondary">
                  <PathLine path={state.issues_log} prefix="Full log: " className="text-caption-1-regular"
                    onRevealed={toast} />
                </div>
              : null}>
            {notes}
          </Note>
        : null}
    </div>
  );
}

export function LibraryProcessingCard(props: LibraryProcessingProps) {
  const { toast, onComplete } = props;
  const { job, settled, forget } = useLibraryProcessingJob(props);
  const start = useMutation({
    mutationFn: (command: LibraryProcessingCommand) =>
      apiSend<LibraryProcessingData>(LIBRARY_PROCESSING_URL, command),
    onSuccess: (next) => {
      forget();
      // The response is this round's fresh snapshot, just swap it into the cache; the cadence belongs to this key, so have it refetch once immediately to catch up.
      queryClient.setQueryData(LIBRARY_PROCESSING_KEY, next);
      void queryClient.invalidateQueries({ queryKey: LIBRARY_PROCESSING_KEY });
    },
  });
  // When this run finishes, have the legacy layer repaint the data management page counters: the review and candidate readings change with it.
  useEffect(() => { if (settled) onComplete?.() }, [settled, onComplete]);

  const state = job.data ?? { status: 'idle' };
  const noticeKey = state.job_id || 'unavailable';
  const { hidden } = useProcessingNoticeVisibility(noticeKey);
  const problem = start.error ? errorMessage(start.error)
    : job.isError ? (job.data ? DISCONNECTED_TEXT : errorMessage(job.error))
    : '';
  const busy = start.isPending || processingActive(state);

  const run = async (command: LibraryProcessingCommand) => {
    if (busy) return;
    start.reset();
    await start.mutateAsync(command);
  };
  const retry = () => {
    if (!state.job_id || !state.retryable_asset_ids?.length) return;
    void run({ job_id: state.job_id, retry: state.retryable_asset_ids }).catch(() => {});
  };

  return (
    <div className="flex flex-col gap-4">
      <Fieldset layout="stack" label="Scan and scrape" footer={
        <>
          <LinkButton href="/sources" size="small" trailingIcon={RiArrowRightLine}>Sources and credentials</LinkButton>
          <LinkButton href="/settings/diagnostics" size="small" trailingIcon={RiArrowRightLine}>Diagnostics and logs</LinkButton>
          {state.candidates
            ? <LinkButton href="/review" size="small" trailingIcon={RiArrowRightLine}>Review details</LinkButton>
            : null}
          {/* Daily sync keeps its own entry; the original task's targeted retry handles only that task's failed items. */}
          <ProcessingActions scan busy={busy} metadataOnly={state?.metadata_only} speedMode={state.speed_mode}
            pendingCount={state.new_asset_count} onRun={run} />
        </>
      }>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <FieldsetTitle>Scan and collect</FieldsetTitle>
              {state.new_asset_count ? <Chip variant="caption" color="blue">
                <span className="tabular-nums">{state.new_asset_count.toLocaleString()} videos to complete</span>
              </Chip> : null}
            </div>
            {hidden && (processingActive(state) || state.status === 'failed' || job.isError)
              ? <Button variant="secondary" size="small" onClick={() => setProcessingNoticeVisible(noticeKey, true)}>
                  Show progress window
                </Button> : null}
          </div>
          <p className="text-body-2-regular text-text-secondary">{SCAN_CARD_TEXT}</p>
          {state.status === 'paused' && !state.total
            ? <span className="self-start"><StatusLabel>Paused</StatusLabel></span>
            : processingActive(state)
            ? <ProcessingProgress state={state} />
            : null}
          {processingActive(state) ? <p className="text-body-2-regular text-text-secondary tabular-nums" data-processing-eta="">
            {remainingTime(state)}
          </p> : null}
          {processingActive(state) ? <TrafficProgress traffic={state.traffic} /> : null}
          {processingActive(state) ? <ProcessingControls state={state} /> : null}
        </div>
      </Fieldset>
      <Outcome state={state} problem={problem} settled={settled} onRetry={retry} toast={toast} />
    </div>
  );
}
