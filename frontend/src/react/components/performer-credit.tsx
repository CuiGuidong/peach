import { entityPath } from '@peach/legacy/core';
import type { CastPerson } from './cast-popover';

export function performerProfileHref(person: CastPerson): string | undefined {
  return person.id ? entityPath('performer', person.name, person.id) : person.source_url;
}

export function PerformerCredit({ name, title, href, external, icon, onFilter }: {
  name: string;
  title?: string;
  href?: string;
  external?: boolean;
  icon?: boolean;
  onFilter?(): void;
}) {
  const label = <>
    {icon ? <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-user-round" /></svg> : null}
    <span data-external-link-label={external && !onFilter ? '' : undefined}>{name}</span>
  </>;
  if (onFilter) return <button type="button" data-media-who="" data-inline-action="" title={title} onClick={onFilter}>{label}</button>;
  if (href) return <a data-media-who="" data-inline-action="" href={href} title={title}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>;
  return <span data-media-who="" title={title}>{label}</span>;
}
