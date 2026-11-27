import { useQuery } from '@tanstack/react-query';
import { RiExternalLinkLine, RiFilter3Line, RiRssLine, RiUserLine } from '@remixicon/react';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { entityPath, registerEntityLink } from '@peach/legacy/core';
import type { FaceRef } from '../../card-art/markup';
import { entityDisplayName } from '../../core/entity-names';
import { errorMessage } from '../../api';
import { t } from '../../i18n';
import { useEntityNames } from '../use-entity-names';
import { fetchItem, identityGroups, itemKey } from '../item-detail/item-detail';
import { javSubscriptionPath } from '../follow-manage/jav-subscription-path';
import { ColumnFilterAvatar } from './column-filter-avatar';
import { ColumnFilterPopover } from './table-column-filter';
import { FilterMenuScroll } from './filter-menu-scroll';
import { MenuDialog } from './menu-dialog';

export interface CastPerson extends FaceRef {
  name: string;
  dmm_id?: string;
  source_actor_id?: string;
  source_avatar?: boolean;
  source_url?: string;
  avatar_code?: string;
}

// DMM 的来源名可能在末尾附上同一人的别名。筛选、链接和订阅仍使用完整来源名。
export function dmmPerformerName(name: string): string {
  return name.replace(/\s*(?:（[^（）]+）|\([^()]+\))\s*$/u, '').trim() || name;
}

export function castPersonName(person: CastPerson): string {
  return entityDisplayName('performer', person.dmm_id ? dmmPerformerName(person.name) : person.name, person.id);
}

export function discoveryCast(people: CastPerson[] | undefined, names: string): CastPerson[] {
  return people?.length ? people
    : [...new Set((names || '').split(/[,，、;/](?![^（(]*[）)])/u).map(name => name.trim()).filter(Boolean))].map(name => ({ name }));
}

interface CastPopoverProps {
  people: CastPerson[];
  total?: number;
  label?: string;
  triggerButton?: boolean;
  assetId?: number;
  code?: string;
  subscribe?: boolean;
  onFilter?(person: CastPerson): void;
  onOpenPerson?(person: CastPerson): void;
}

export function CastPopover({ total, label, triggerButton, ...props }: CastPopoverProps) {
  const count = total ?? props.people.length;
  if (count < 2) return null;
  const title = t('catalog:shared.performers');
  const buttonLabel = label ?? t('shell:mediaCard.performerTotal', { count });
  return <span data-cast-trigger="">
    <ColumnFilterPopover id="cast" label={buttonLabel} triggerLabel={`${title} · ${buttonLabel}`} triggerButton={triggerButton} active={false}>
      {close => <MenuDialog aria-label={title} className="py-2 outline-none">
        <CastPeople {...props} assetId={count > props.people.length ? props.assetId : undefined} close={close} />
      </MenuDialog>}
    </ColumnFilterPopover>
  </span>;
}

function CastPeople({ people, assetId, code, subscribe, onFilter, onOpenPerson, close }: CastPopoverProps & { close(): void }) {
  useEntityNames();
  const result = useQuery({
    queryKey: itemKey(assetId ?? 0),
    queryFn: ({ signal }) => fetchItem(assetId!, signal),
    enabled: assetId != null,
  });
  const cast = result.data ? identityGroups(result.data).cast : people;
  return <div data-cast-popover="" onClick={event => event.stopPropagation()}>
    <FilterMenuScroll>
      <ul className="flex flex-col gap-1">
        {cast.map((person: CastPerson) => {
          const name = castPersonName(person);
          const profile = t('shell:mediaCard.openPerformerNamed', { name });
          return <li key={person.dmm_id || person.id || person.name} className="flex min-w-0 items-center gap-2 px-1">
            <ColumnFilterAvatar person={{ ...person, avatar_code: person.avatar_code || code }} />
            <span className="min-w-0 flex-1 truncate text-body-2-medium" title={name !== person.name ? person.name : undefined}>{name}</span>
            {onFilter ? <Button variant="ghost" size="small" iconOnly leadingIcon={RiFilter3Line}
              aria-label={t('catalog:javOnline.filterPerformer', { name })} onClick={() => { onFilter(person); close() }} />
              : onOpenPerson ? <Button variant="ghost" size="small" iconOnly leadingIcon={RiUserLine}
                aria-label={profile} onClick={() => {
                  if (person.id) registerEntityLink('performer', person.name, person.id);
                  onOpenPerson(person);
                  close();
                }} />
                : person.id || !subscribe ? <ButtonLink href={entityPath('performer', person.name, person.id)}
                  variant="ghost" size="small" iconOnly leadingIcon={RiUserLine} aria-label={profile} /> : null}
            {subscribe ? <ButtonLink href={javSubscriptionPath(person.name)} variant="ghost" size="small" iconOnly leadingIcon={RiRssLine}
              aria-label={`${t('catalog:entityHero.subscribeNewReleases')} · ${name}`} /> : null}
            {person.source_url ? <ButtonLink data-button-link="" href={person.source_url} target="_blank" rel="noopener noreferrer"
              variant="ghost" size="small" iconOnly leadingIcon={RiExternalLinkLine}
              aria-label={t('catalog:javDiscovery.openActress', { name })} /> : null}
          </li>;
        })}
      </ul>
      {assetId != null && result.isLoading ? <p role="status" className="px-2">{t('shell:shared.processing')}</p> : null}
      {result.isError ? <div role="alert" className="flex items-center gap-2 px-2">
        <span>{errorMessage(result.error)}</span>
        <Button variant="ghost" size="small" onClick={() => void result.refetch()}>{t('shell:shared.retry')}</Button>
      </div> : null}
    </FilterMenuScroll>
  </div>;
}
