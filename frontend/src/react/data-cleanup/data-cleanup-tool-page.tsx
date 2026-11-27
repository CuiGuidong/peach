import { useQuery } from '@tanstack/react-query';
import type { CleanupToolKey } from '../../cleanup-tools';
import type { DataCleanupProps } from '../bundle';
import type { WriterAccess } from '../router/shell-actions';
import { Page } from '../components/page';
import { Fieldset, FieldsetTitle } from '../components/fieldset';
import { QueryErrorNote } from '../components/query-error-note';
import { MediaRepairCard } from '../media-repair/media-repair-card';
import { fetchMediaSources, MEDIA_SOURCES_KEY } from '../media-sources';
import { LinkManager } from './link-manager';
import { OrganizeCard } from './organize-card';
import { OrphanRecordsCard } from './orphan-records-card';
import { PerformerDeleteCard } from './performer-delete-card';
import { hasResourceRoots } from './resource-sync';
import { ResourceSyncCard } from './resource-sync-card';
import { t } from '../../i18n';

function ResourceSyncPage({ toast, writeAccess }: Pick<DataCleanupProps, 'toast'> & { writeAccess?: WriterAccess }) {
  const sources = useQuery({ queryKey: MEDIA_SOURCES_KEY, queryFn: ({ signal }) => fetchMediaSources(signal) });
  if (sources.isError) return <QueryErrorNote titleKey="cleanup:resourceSync.storageLoadFailed" query={sources} />;
  if (sources.isPending) return <p role="status">{t('cleanup:resourceSync.storageLoading')}</p>;
  return hasResourceRoots(sources.data) ? <ResourceSyncCard toast={toast} writeAccess={writeAccess} />
    : <Fieldset layout="stack" label={t('cleanup:tools.resourceSync')}><FieldsetTitle>{t('cleanup:tools.resourceSync')}</FieldsetTitle>
        <p className="text-body-regular text-text-secondary">{t('cleanup:resourceSync.noDirectories')}</p>
        <a href="/settings/library" className="text-body-medium text-accent-600 underline">{t('cleanup:resourceSync.setUpLibrary')}</a>
      </Fieldset>;
}

export function DataCleanupToolPage({ tool, toast, failure, writeAccess }: {
  tool: CleanupToolKey;
  writeAccess?: WriterAccess;
} & Pick<DataCleanupProps, 'toast' | 'failure'>) {
  const notify = (message: string) => toast(message);
  let content;
  switch (tool) {
    case 'organize': content = <OrganizeCard toast={notify} failure={failure} />; break;
    case 'resource-sync': content = <ResourceSyncPage toast={toast} writeAccess={writeAccess} />; break;
    case 'orphan-records': content = <OrphanRecordsCard toast={notify} />; break;
    case 'media-repair': content = <MediaRepairCard toast={notify} />; break;
    case 'links': content = <LinkManager />; break;
    case 'batch-delete': content = <PerformerDeleteCard toast={notify} />; break;
  }
  return <Page>{content}</Page>;
}
