import { fmtSize } from '@peach/legacy/core';

/** A source's byte counts display under the library capacity terms; other sources keep their own units. */
export function resourceSize(value: string): string {
  const bytes = /^([\d,]+)\s*B$/i.exec(value.trim());
  if (/^[\d,.]+$/.test(value.trim())) return 'Unknown size';
  return bytes ? fmtSize(Number(bytes[1].replaceAll(',', ''))) : value || 'Unknown size';
}

/** A cached source limit only describes what this fetch covered and never infers account permissions. */
export function resourceNotice(value: string): string {
  return /^More comments.*(?:VIP|官方 App)/.test(value)
    ? 'The source returned only part of the comments; resource links may be incomplete.'
    : value;
}
