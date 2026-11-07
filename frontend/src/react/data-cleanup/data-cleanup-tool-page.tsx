import { useQuery } from '@tanstack/react-query';
import { errorMessage } from '../../api';
import type { CleanupToolKey } from '../../cleanup-tools';
import type { DataCleanupProps } from '../bundle';
import { Page } from '../components/page';
import { Fieldset, FieldsetTitle } from '../components/fieldset';
import { Note } from '../components/note';
import { MediaRepairCard } from '../media-repair/media-repair-card';
import { fetchMediaSources, MEDIA_SOURCES_KEY } from '../media-sources';
import { LinkManager } from './link-manager';
import { OrganizeCard } from './organize-card';
import { OrphanRecordsCard } from './orphan-records-card';
import { PerformerDeleteCard } from './performer-delete-card';
import { hasResourceRoots } from './resource-sync';
import { ResourceSyncCard } from './resource-sync-card';

function ResourceSyncPage({ toast }: Pick<DataCleanupProps, 'toast'>) {
  const sources = useQuery({ queryKey: MEDIA_SOURCES_KEY, queryFn: ({ signal }) => fetchMediaSources(signal) });
  if (sources.isError) return <Note tone="error" title="Failed to read media sources">{errorMessage(sources.error)}</Note>;
  if (sources.isPending) return <p role="status">Reading media sources…</p>;
  return hasResourceRoots(sources.data) ? <ResourceSyncCard toast={toast} />
    : <Fieldset layout="stack" label="Resource sync"><FieldsetTitle>Resource sync</FieldsetTitle>
        <p className="text-body-regular text-text-secondary">No media directory is configured to check yet.</p>
        <a href="/settings/library" className="text-body-medium text-accent-600 underline">Configure libraries</a>
      </Fieldset>;
}

export function DataCleanupToolPage({ tool, toast, failure }: {
  tool: CleanupToolKey;
} & Pick<DataCleanupProps, 'toast' | 'failure'>) {
  const notify = (message: string) => toast(message);
  let content;
  switch (tool) {
    case 'organize': content = <OrganizeCard toast={notify} failure={failure} />; break;
    case 'resource-sync': content = <ResourceSyncPage toast={toast} />; break;
    case 'orphan-records': content = <OrphanRecordsCard toast={notify} />; break;
    case 'media-repair': content = <MediaRepairCard toast={notify} />; break;
    case 'links': content = <LinkManager />; break;
    case 'batch-delete': content = <PerformerDeleteCard toast={notify} />; break;
  }
  return <Page>{content}</Page>;
}
