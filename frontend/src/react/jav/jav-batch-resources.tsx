import { Heading } from 'react-aria-components';
import { useQuery } from '@tanstack/react-query';
import { CloseButton } from '@/components/base/buttons/close-button';
import { apiGet } from '../../api';
import { entityDisplayName } from '../../core/entity-names';
import { ImageWithFallback } from '../components/image-with-fallback';
import { ModalFrame } from '../components/modal-frame';
import { QueryErrorNote } from '../components/query-error-note';
import { WantMagnets } from '../wants/want-magnets';
import { DOWNLOADS_KEY, DOWNLOADS_URL } from '../activity/downloads-panel';
import type { DownloadsSnapshot } from '../bundle';
import type { Discovery } from './jav';
import { joinList, t } from '../../i18n';
import { useEntityNames } from '../use-entity-names';

export interface BatchResourceWork {
  id: number;
  code: string;
  title: string;
  cover?: string | null;
  performers?: string | null;
  performerRefs?: Discovery['performer_refs'];
  studio?: string | null;
  release_date?: string | null;
}

function ResourceWorkIdentity({ item }: { item: BatchResourceWork }) {
  useEntityNames();
  const performers = item.performerRefs?.length
    ? joinList(item.performerRefs.map(person => entityDisplayName('performer', person.name, person.id)))
    : item.performers;
  const studio = item.studio ? entityDisplayName('studio', item.studio) : '';
  return <div className="flex min-w-0 items-start gap-3 sm:gap-4">
    <div className="relative flex aspect-card-cover w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-media-placeholder sm:w-32">
      <span className="text-caption-1-regular text-text-secondary">{t('catalog:shared.noCover')}</span>
      {item.cover ? <ImageWithFallback src={item.cover} alt="" loading="lazy" referrerPolicy="no-referrer"
        className="absolute inset-0 size-full object-cover" /> : null}
    </div>
    <div className="flex min-w-0 flex-col gap-1">
      <h3 className="text-headline-medium text-text-primary wrap-anywhere">{item.code}</h3>
      {item.title ? <p className="line-clamp-2 text-body-2-regular text-text-primary" title={item.title}>{item.title}</p> : null}
      {performers ? <p className="text-body-2-medium text-text-primary wrap-anywhere">{performers}</p> : null}
      {studio || item.release_date ? <p className="text-caption-1-regular text-text-secondary wrap-anywhere">
        {[studio, item.release_date].filter(Boolean).join(' · ')}
      </p> : null}
    </div>
  </div>;
}

export function JavBatchResources({ items, close, readOnly, receipt }: {
  items: BatchResourceWork[] | null; close(): void; readOnly: boolean; receipt(message: string): void;
}) {
  const downloads = useQuery({ queryKey: DOWNLOADS_KEY,
    queryFn: ({ signal }) => apiGet<DownloadsSnapshot>(`${DOWNLOADS_URL}?limit=50`, signal), enabled: Boolean(items) });
  const provider = downloads.data?.providers.find(row => row.configured)?.key || '';
  return <ModalFrame isOpen={Boolean(items)} onOpenChange={open => { if (!open) close() }} width="collections">
    <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background-full px-5 pt-4 pb-3">
      <Heading slot="title" className="text-title-2-medium text-text-primary"><span data-copy-key="jav.resources.title">{t('catalog:javBatch.title')}</span> · {t('catalog:countLabel.works', { count: items?.length || 0 })}</Heading>
      <CloseButton size="sm" aria-label={t('catalog:javBatch.close')} onClick={close} />
    </div>
    <div className="flex min-w-0 flex-col gap-4 px-3 pb-5 sm:px-5">
      {downloads.error ? <QueryErrorNote titleKey="manage:cloudDownloadDialog.settingsLoadFailed" query={downloads} /> : null}
      {items?.map(item => <section key={item.id + ':' + item.code} aria-label={item.code}
        className="flex min-w-0 flex-col gap-4 rounded-2xl bg-background-secondary-default p-3 sm:p-4">
        <ResourceWorkIdentity item={item} />
        <WantMagnets want={{ id: item.id, code: item.code, title: item.title, release_date: item.release_date || null }}
          queryUrl={`/api/jav/resources?code=${encodeURIComponent(item.code)}`} eager compact
          readOnly={readOnly} downloads={downloads.data} provider={provider} toast={receipt} />
      </section>)}
    </div>
  </ModalFrame>;
}
