import type { CSSProperties } from 'react';
import { avatarInner } from '../../card-art/markup';
import { PerformerCredit, performerProfileHref } from '../components/performer-credit';
import { SourceAvatar } from '../components/source-avatar';
import { useEntityNames } from '../use-entity-names';
import type { Discovery } from './jav';
import { javSubscriptionPath } from '../follow-manage/jav-subscription-path';
import { RiRssLine } from '@remixicon/react';
import { castPersonName, discoveryCast, type CastPerson } from '../components/cast-popover';
import { t } from '../../i18n';

export type DiscoveryPerson = CastPerson;

function performerHref(person: DiscoveryPerson): string {
  return performerProfileHref(person) || javSubscriptionPath(person.name);
}

export function DiscoveryPerformerName({ person, name, title, icon, onFilter }: {
  person?: DiscoveryPerson; name: string; title?: string; icon?: boolean; onFilter?(person: DiscoveryPerson): void;
}) {
  if (!name) return null;
  const label = t('catalog:entityHero.subscribeNewReleases');
  return <>
    <PerformerCredit name={name} title={title} href={performerHref(person ?? { name })} icon={icon}
      external={!!person?.source_url && !person.id} onFilter={onFilter && person ? () => onFilter(person) : undefined} />
    {person?.source_url && (!person.id || onFilter) ? <a href={javSubscriptionPath(person.name)} data-media-credit-action="" data-inline-action=""
      className="inline-flex shrink-0" aria-label={`${label} · ${name}`} title={label}>
      <RiRssLine className="size-4" aria-hidden />
    </a> : null}
  </>;
}

/** 发现人物使用馆藏的共演头像几何与悬停动作。 */
export function DiscoveryFaces({ item, limit = 5 }: { item: Discovery; limit?: number }) {
  useEntityNames();
  const people = discoveryCast(item.performer_refs, item.performers);
  const faces = people.slice(0, limit).map((person, index) => {
    const style = { '--media-avatar-index': index } as CSSProperties;
    const face = person.source_avatar && person.source_actor_id && !person.has_image && !person.has_avatar
      ? { children: <SourceAvatar code={item.code} person={person} /> }
      : { dangerouslySetInnerHTML: { __html: avatarInner(person.name, person, null) } };
    const label = t('catalog:javDiscovery.openActress', { name: castPersonName(person) });
    return <a key={person.dmm_id || person.name} data-media-avatar="" style={style} href={performerHref(person)} aria-label={label}
      {...(person.source_url && !person.id ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...face} />;
  });
  return faces.length > 1 ? <div data-media-avatars="" style={{ '--media-avatar-count': faces.length } as CSSProperties}>{faces}</div> : faces[0] || null;
}
