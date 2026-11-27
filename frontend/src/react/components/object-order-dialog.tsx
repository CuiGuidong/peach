import { useState, type ReactNode } from 'react';
import { Heading } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { errorMessage } from '../../api';
import { ModalFrame } from './modal-frame';
import { NavigationOrderRows } from './navigation-order';
import { Note } from './note';
import { busyProps } from '../settings/use-action';
import { t } from '../../i18n';

/** 对象顺序先在弹层内调整，保存时由对象自己的端点一次写入。 */
export function ObjectOrderDialog({ title, items, save, close, dropOnRow, pending, loadFailure }: {
  title: string; items: { id: string; name: string }[];
  save(keys: string[]): Promise<void>; close(): void; dropOnRow?: boolean; pending?: boolean; loadFailure?: ReactNode;
}) {
  const [editedKeys, setKeys] = useState<string[]>();
  const keys = editedKeys ?? items.map(row => row.id);
  const [saving, setSaving] = useState(false);
  const [problem, setProblem] = useState('');
  const submit = async () => {
    setSaving(true);
    setProblem('');
    try { await save(keys); close() }
    catch (cause) { setProblem(errorMessage(cause)); setSaving(false) }
  };
  return <ModalFrame isOpen onOpenChange={open => { if (!open && !saving) close() }} width="form" label={title}>
    <div className="flex min-h-0 flex-col">
      <Heading slot="title" className="p-5 text-title-2-semibold text-text-primary">{title}</Heading>
      <div className="min-h-0 overflow-y-auto px-5 pb-5" inert={saving}>
        {pending ? <div data-skeleton="object-order" role="status" aria-label={t('shell:spinner.loading')} className="flex flex-col gap-2">
          {['w-36', 'w-44', 'w-28', 'w-40'].map(width => <div key={width} className="flex h-10 items-center gap-3 px-3" aria-hidden="true">
            <span className="skeleton-sheen size-4 rounded-sm" /><span className={`skeleton-sheen h-3.5 rounded-sm ${width}`} />
          </div>)}
        </div> : loadFailure || <NavigationOrderRows reset={false} dropOnRow={dropOnRow} order={{ label: title, keys, defaults: [], commit: setKeys }}
          labels={Object.fromEntries(items.map(row => [row.id, row.name]))} />}
      </div>
      {problem ? <Note tone="error">{problem}</Note> : null}
      <div className="flex justify-between gap-4 p-3">
        <Button variant="secondary" disabled={saving} onClick={close}>{t('shell:shared.cancel')}</Button>
        <Button disabled={pending || Boolean(loadFailure)} {...busyProps(saving)} onClick={() => void submit()}>{t('shell:objectOrder.save')}</Button>
      </div>
    </div>
  </ModalFrame>;
}
