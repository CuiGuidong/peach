/* Data management page: how to clean up what is already in the library.
 *
 * Laid out after Board's dashboard template: a row of metric cards up top, each one covering a piece of content's history in the library and doubling as that page's entry point;
 * below is a column of the things done on this page (scan and collect, media repair, organize), then link
 * management, orphan records that only appear when videos have missing files, and finally
 * resource sync that only appears when at least one source has a root configured. */
import { useQuery } from '@tanstack/react-query';
import { fmtSize } from '@peach/legacy/core';

import type { DataCleanupProps, DataCleanupSection } from '../bundle';
import { Page } from '../components/page';
import { spriteGlyph, type Glyph } from '../components/sprite-glyph';
import { PLAIN_STAT_STRIP, PlainStat, plainStatClass } from '../components/stat-card';
import { DUPLICATES_KEY, fetchDuplicates } from '../duplicates/duplicates';
import { LibraryProcessingCard } from '../library-processing/library-processing-card';
import { MediaRepairCard } from '../media-repair/media-repair-card';
import { fetchMediaSources, MEDIA_SOURCES_KEY } from '../media-sources';
import { fetchQualityGoals, QUALITY_GOALS_KEY } from '../quality-goals/quality-goals';
import { queryClient } from '../query';
import {
  fetchJunkSummary, fetchReviewCounts, fetchTrashSummary, JUNK_KEY, junkBreakdown,
  REVIEW_COUNTS_KEY, reviewSummary, TRASH_KEY,
} from './data-cleanup';
import { LinkManager } from './link-manager';
import { OrganizeCard } from './organize-card';
import { OrphanRecordsCard } from './orphan-records-card';
import { hasResourceRoots } from './resource-sync';
import { ResourceSyncCard } from './resource-sync-card';

interface Reading { figure: string; meta?: string }

/** A readout card's three outcomes: still fetching, fetched, unfetchable. Each card fails on its own terms. */
function reading<T>(
  query: { data: T | undefined; isError: boolean }, read: (data: T) => Reading,
): Reading {
  if (query.data !== undefined) return read(query.data);
  return { figure: query.isError ? 'Load failed' : '—' };
}

function EntryCard(
  { section, label, icon, value, open }:
  { section: DataCleanupSection; label: string; icon: Glyph; value: Reading; open(section: DataCleanupSection): void },
) {
  return (
    <button type="button" className={plainStatClass({ interactive: true })} data-cleanup-go={section}
      onClick={() => open(section)}>
      <PlainStat label={label} icon={icon} figure={value.figure} meta={value.meta} />
    </button>
  );
}

const REVIEW = spriteGlyph('square-check-big');
const QUALITY = spriteGlyph('sparkles');
const DUPLICATES = spriteGlyph('file-stack');
const JUNK = spriteGlyph('file-archive');
const TRASH = spriteGlyph('trash');

/* After a scan-and-collect run, whatever the library gained lands in these three readouts: review, HD editions and duplicate files. */
const PROCESSING_READINGS = [REVIEW_COUNTS_KEY, QUALITY_GOALS_KEY, DUPLICATES_KEY];
const refreshReadings = () => {
  for (const queryKey of PROCESSING_READINGS) void queryClient.invalidateQueries({ queryKey, exact: true });
};

export function DataCleanupPage({ toast, failure, open }: DataCleanupProps) {
  const review = useQuery({ queryKey: REVIEW_COUNTS_KEY, queryFn: ({ signal }) => fetchReviewCounts(signal) });
  const quality = useQuery({ queryKey: QUALITY_GOALS_KEY, queryFn: ({ signal }) => fetchQualityGoals(signal) });
  const duplicates = useQuery({ queryKey: DUPLICATES_KEY, queryFn: ({ signal }) => fetchDuplicates(signal) });
  const junk = useQuery({ queryKey: JUNK_KEY, queryFn: ({ signal }) => fetchJunkSummary(signal) });
  const trash = useQuery({ queryKey: TRASH_KEY, queryFn: ({ signal }) => fetchTrashSummary(signal) });
  const sources = useQuery({ queryKey: MEDIA_SOURCES_KEY, queryFn: ({ signal }) => fetchMediaSources(signal) });
  const notify = (message: string) => toast(message);

  return (
    <Page>
      <div className={PLAIN_STAT_STRIP}>
        <EntryCard section="review" label="Manual review" icon={REVIEW} open={open}
          value={reading(review, reviewSummary)} />
        <EntryCard section="quality" label="HD version" icon={QUALITY} open={open}
          value={reading(quality, (data) => ({ figure: `${Number(data.total || 0).toLocaleString()} pending upgrade` }))} />
        <EntryCard section="duplicates" label="Duplicates" icon={DUPLICATES} open={open}
          value={reading(duplicates, (data) => (Number(data.total || 0)
            ? {
                figure: `${Number(data.total).toLocaleString()} groups - ${Number(data.files || 0).toLocaleString()} files`,
                meta: `Reclaimable ${fmtSize(data.reclaimable || 0)}`,
              }
            : { figure: 'No duplicate content' }))} />
        <EntryCard section="ads" label="Junk files" icon={JUNK} open={open}
          value={reading(junk, (data) => ({
            figure: `${Number(data.pending_total || 0).toLocaleString()} awaiting review`, meta: junkBreakdown(data),
          }))} />
        <EntryCard section="trash" label="Trash" icon={TRASH} open={open}
          value={reading(trash, (data) => ({
            figure: `${Number(data.total || 0).toLocaleString()} items in trash`,
            meta: data.total ? `Using ${fmtSize(data.bytes || 0)}` : '',
          }))} />
      </div>
      <div className="flex flex-col gap-4 max-cleanup-tight:gap-3">
        {/* The card and its hint are two things, and the hint hangs outside the card: `#libraryProcessing` is the cell itself,
            scroll here when the address bar arrives carrying it. */}
        <div id="libraryProcessing" className="scroll-mt-20">
          <LibraryProcessingCard toast={notify} monitor onComplete={refreshReadings} />
        </div>
        <div id="mediaRepair"><MediaRepairCard toast={notify} /></div>
        <OrganizeCard toast={notify} failure={failure} />
      </div>
      <LinkManager />
      <OrphanRecordsCard toast={notify} />
      {hasResourceRoots(sources.data) ? <ResourceSyncCard toast={toast} /> : null}
    </Page>
  );
}
