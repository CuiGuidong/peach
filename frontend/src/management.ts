import { islandButton, islandGlyph, islandSelect } from './island-skeleton';
import { FIELDSET_FACE, FIELDSET_BODY, FIELDSET_FOOT, fieldsetClass, type FieldsetLayout } from './react/components/fieldset-layout';

/* Body copy for the "Scan and collect" and "Media repair" cards. The card body is rendered by React, and the skeleton and the legacy layer's fetch placeholder
   draw the same passage: with two copies, the skeleton's sentence would run shorter than the real card and the whole card would jump at takeover. */
export const SCAN_CARD_TEXT = 'New files found; fetch profiles and previews for new and unfinished videos. Use full library maintenance to check every video.';
export const REPAIR_CARD_TEXT = 'Some video files may stutter or fail to open; fixes missing timestamp tables and missing indexes.';

const bar = '<span class="skeleton skeleton-text" aria-hidden="true"></span>';
/* Keys that need data to execute are genuinely unpressable: native `disabled` blocks click and focus, and `data-skeleton-action`
   gives each tier's keys a unified disabled face in the skeleton (`board.css`), at the final tier's size, so data's arrival only swaps colors. */

/* The skeletons of the two React cards live in the same `.peach-react` layer; keys and dropdowns are drawn to Board UI dimensions (see
   `island-skeleton.ts`). The card layer's structure copies the two React cards: an outer column with `gap-4`, title and body
   sharing one pair of text styles. The dropdown holds only a placeholder bar, not a control; `aria-disabled` is enough. */
const waitingAction = 'disabled data-skeleton-action';
const unavailable = 'aria-disabled="true"';
const island = (card: string) => `<div class="peach-react"><div class="flex flex-col gap-4">${card}</div></div>`;
const cardText = (title: string, text: string, layout: FieldsetLayout) => `<div class="${FIELDSET_BODY[layout]}"><div class="flex flex-col gap-2">
          <h3 class="text-title-2-medium text-text-primary">${title}</h3>
          <p class="text-body-2-regular text-text-secondary">${text}</p></div></div>`;

/** The "Scan and collect" card: the same container, body copy and keys as the React `LibraryProcessingCard`.
 *  "Review profiles" only appears when candidates exist and is not pre-drawn here. */
export function scanCardSkeletonHtml(): string {
  return island(`<section aria-label="Scan and collect" class="${fieldsetClass('stack')}" data-cleanup-task data-cleanup-processing>
        ${cardText('Scan and collect', SCAN_CARD_TEXT, 'stack')}
        <footer class="${FIELDSET_FOOT.stack}"><a href="/sources" class="inline-flex items-center justify-center gap-1 whitespace-nowrap font-sans rounded-sm text-body-medium text-accent-600"><span>Sources and credentials</span>${islandGlyph('arrow-up', 'size-(--icon-inline) shrink-0 rotate-90')}</a><span data-button-group data-split-button data-variant="primary">${islandButton({ label: 'Sync new files', attrs: waitingAction })}${islandButton({ glyph: 'chevron-down', attrs: `${waitingAction} aria-label="More ways to sync"` })}</span></footer>
      </section>`);
}

/** The "Media repair" card: the footer's library select is drawn at final size first, with the library name waiting on data; "Start repair" waits for a chosen
 *  library, so the skeleton shows it disabled. */
export function repairCardSkeletonHtml(): string {
  return island(`<section aria-label="Media repair" class="${fieldsetClass('split')}" data-cleanup-task data-cleanup-processing>
        ${cardText('Media repair', REPAIR_CARD_TEXT, 'split')}
        <footer class="${FIELDSET_FOOT.split}">${islandSelect(bar, { className: 'w-48', attrs: unavailable })}${islandButton({ label: 'Start repair', attrs: waitingAction })}</footer>
      </section>`);
}

/** The first screen reuses the final containers of the stat cards, the three task cards, link management, and resource sync; static headings, body text, and keys render immediately. */
export function cleanupSkeletonHtml(): string {
  const stats = [['Manual review', 'square-check-big'], ['HD version', 'sparkles'], ['Duplicates', 'file-stack'], ['Junk files', 'file-archive'], ['Trash', 'trash']];
  const face = FIELDSET_FACE;
  const body = FIELDSET_BODY.stack;
  const title = (label: string, gap = 'mb-2') => `<h3 class="text-title-2-medium text-text-primary ${gap}">${label}</h3>`;
  const footer = (label: string) => `<footer class="${FIELDSET_FOOT.stack}">${islandButton({ label, attrs: waitingAction })}</footer>`;
  const input = (label: string) => `<div class="flex flex-col gap-1.5"><span class="text-body-medium text-text-primary">${label}</span><span class="skeleton ui-configuration-skeleton-input"></span></div>`;
  return `<div class="peach-react" data-skeleton="cleanup" aria-busy="true" role="status" aria-label="Loading data management status"><div aria-hidden="true" inert class="mx-auto flex w-full max-w-board flex-col gap-8">
    <div class="inline-grid w-full grid-cols-5 gap-4 max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1">${stats.map(([label, glyph]) => `<div class="min-w-0 bg-background-secondary-default rounded-2xl flex min-h-33 flex-col gap-2 p-4 text-left"><span class="flex min-w-0 items-center gap-2 text-body-medium text-text-secondary"><i class="flex size-8 shrink-0 items-center justify-center rounded-md bg-background-primary-default text-text-primary">${islandGlyph(glyph!, 'size-4')}</i>${label}</span><strong class="text-title-1-medium">${bar}</strong><span class="text-caption-1-regular">${bar}</span></div>`).join('')}</div>
    <div class="flex flex-col gap-4 max-cleanup-tight:gap-3">
      <div id="libraryProcessing">${scanCardSkeletonHtml()}</div><div id="mediaRepair">${repairCardSkeletonHtml()}</div>
      <section id="organize" class="${face} flex flex-col" data-cleanup-organize><div class="${body}">${title('Organize', 'mb-3')}<p class="text-body-regular text-text-secondary">Cleans special characters and mojibake out of file names, renames by template, and sorts files into directories. Preview first, run after confirming; a batch that has run can be reverted as a whole.</p>
        <div class="mt-3 flex flex-col gap-3"><div class="flex min-w-0 flex-wrap items-start gap-2">${islandSelect(bar)}<span class="skeleton ui-configuration-skeleton-input min-w-0 basis-64 flex-1"></span></div><p class="text-caption-1-regular text-text-secondary">When a path is set, its subdirectories are included and directory templates start from that path. With both templates left empty, only file names are cleaned.</p>${input('File name template')}${input('Directory template')}<div class="flex flex-wrap gap-2">${Array.from({ length: 3 }, () => islandButton({ variant: 'secondary', label: bar, attrs: waitingAction })).join('')}</div></div></div>${footer('Preview')}</section>
    </div>
    <section id="link-manager" class="flex scroll-mt-20 flex-col gap-4"><div class="${face} flex flex-col"><div class="${body}">${title('Link management')}<div class="link-stat-grid mt-4 gap-x-8 gap-y-3">${['Total links', 'Official site / agency', 'Social accounts', 'Video info sites'].map(label => `<div class="flex min-w-0 flex-col gap-0.5"><span class="text-caption-1-regular text-text-secondary">${label}</span><b class="text-title-2-semibold">${bar}</b></div>`).join('')}</div><div class="mt-4 flex flex-col gap-0.5"><span class="text-caption-1-regular text-text-secondary">Main sites</span>${bar}</div></div>${footer('Check dead links')}</div></section>
    </div></div>`;
}
