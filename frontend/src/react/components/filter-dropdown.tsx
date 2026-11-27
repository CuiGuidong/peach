import { useState, type ReactNode } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { MENU_ITEM, MENU_ITEM_ACTIVE, MENU_ITEM_INTERACTIVE } from '@/components/base/dropdown/menu-styles';
import { cx } from '@/utils/cx';
import { t } from '../../i18n';
import { errorMessage } from '../../api';
import { FilterMenuScroll, FilterOptionSkeleton } from './filter-menu-scroll';
import { MenuDialog } from './menu-dialog';
import { Note } from './note';
import { spriteGlyph } from './sprite-glyph';
import { ColumnFilterPopover } from './table-column-filter';

export interface FilterChoice {
  id: string;
  label: string;
  count?: number | null;
  selected?: boolean;
  leading?: ReactNode;
  content?: ReactNode;
  searchTerms?: readonly string[];
}

const CHOICE_BATCH = 48;
const SearchGlyph = spriteGlyph('search');
const searchKey = (text: string) => text.trim().normalize('NFKC').toLocaleLowerCase();

export function FilterChoiceList({ choices, onSelect, pending, withAvatar }: {
  choices: readonly FilterChoice[]; onSelect(id: string): void; pending?: boolean; withAvatar?: boolean;
}) {
  const [visible, setVisible] = useState(CHOICE_BATCH);
  return <FilterMenuScroll onScroll={event => {
    const node = event.currentTarget;
    if (visible < choices.length && node.scrollHeight - node.scrollTop - node.clientHeight < 80)
      setVisible(current => current + CHOICE_BATCH);
  }}>
    {pending ? <FilterOptionSkeleton leading={withAvatar ? 'avatar' : undefined} />
      : choices.slice(0, visible).map(choice => <button type="button" key={choice.id} aria-pressed={!!choice.selected}
      data-filter-option={choice.id}
      className={cx(MENU_ITEM, MENU_ITEM_INTERACTIVE, 'text-body-regular', choice.selected && MENU_ITEM_ACTIVE)}
      onClick={() => onSelect(choice.id)}>
      {choice.leading}
      <span className="min-w-0 flex-1 truncate">{choice.content ?? choice.label}</span>
      {choice.count != null ? <span data-count-badge="" className="shrink-0 text-caption-1-regular tabular-nums text-text-tertiary">{choice.count.toLocaleString()}</span> : null}
    </button>)}
    {!pending && visible < choices.length ? <Button size="small" variant="ghost" className="w-full"
      onClick={() => setVisible(current => current + CHOICE_BATCH)}>{t('catalog:shared.loadMore')}</Button> : null}
  </FilterMenuScroll>;
}

interface ChoiceMenuProps {
  label: string; choices: readonly FilterChoice[]; onSelect(id: string): void;
  hint?: string; searchable?: boolean; pending?: boolean; withAvatar?: boolean; error?: unknown; onClear?(): void;
}

function FilterChoiceMenu({ label, choices, onSelect, hint, searchable = true, pending, withAvatar, error, onClear }: ChoiceMenuProps) {
  const [search, setSearch] = useState('');
  const term = searchKey(search);
  const searchLabel = t('catalog:columnFilter.search', { column: label });
  const shown = term ? choices.filter(choice => [choice.label, ...(choice.searchTerms || [])].some(name => searchKey(name).includes(term))) : choices;
  return <MenuDialog aria-label={label} className="flex min-h-0 flex-col gap-2 py-3 outline-none">
    {searchable ? <div className="px-3" data-filter-popover-search=""><Input size="small"
      aria-label={searchLabel} placeholder={searchLabel} leadingIcon={SearchGlyph}
      value={search} onChange={setSearch} /></div> : null}
    {hint ? <p className="px-3 text-caption-1-regular text-text-secondary">{hint}</p> : null}
    {pending || shown.length ? <FilterChoiceList key={term} choices={shown} onSelect={onSelect} pending={pending} withAvatar={withAvatar} />
      : error ? <div className="px-3"><Note tone="error">{errorMessage(error)}</Note></div>
      : <span role="status" className="px-3 text-caption-1-regular text-text-secondary">{t('catalog:columnFilter.noOptions')}</span>}
    {onClear ? <div className="flex justify-end px-3"><Button size="small" variant="ghost"
      onClick={onClear}>{t('catalog:rangeFilter.clear')}</Button></div> : null}
  </MenuDialog>;
}

export function FilterDropdown({ id, active, view, orderKey, toolbar = true, ...menu }: ChoiceMenuProps & {
  id: string; active?: boolean; orderKey?: string; toolbar?: boolean; view?: Parameters<typeof ColumnFilterPopover>[0]['view'];
}) {
  return <ColumnFilterPopover id={id} orderKey={orderKey} label={menu.label} active={active ?? menu.choices.some(choice => choice.selected)} toolbar={toolbar} view={view}>
    {close => <FilterChoiceMenu {...menu}
      onSelect={id => { menu.onSelect(id); close() }}
      onClear={menu.onClear ? () => { menu.onClear?.(); close() } : undefined} />}
  </ColumnFilterPopover>;
}
