import { Button } from '@/components/base/buttons/button';
import { GUIDE_CHAPTERS, sectionGuide } from '../../onboarding/guide-catalog';
import { openGuide } from '../../onboarding/guide-state';
import { Disclosure } from '../settings/section';

export function GuideFieldDetails({ details }: { details?: readonly [string, string][] }) {
  return details?.length ? <dl className="flex flex-col gap-3">{details.map(([title, body]) => <div key={title} className="flex flex-col gap-1"><dt className="text-body-2-medium text-text-primary">{title}</dt><dd className="text-body-2-regular text-text-secondary">{body}</dd></div>)}</dl> : null;
}

/** 设置说明与导览共用内容，不接管设置的保存行为。 */
export function GuideHelp({ chapter, section }: { chapter?: string; section?: string }) {
  const item = section ? sectionGuide(section) : undefined;
  const group = GUIDE_CHAPTERS.find(row => row.id === chapter);
  if (!item && !group) return null;
  return <div data-guide-help="" className="text-body-2-regular text-text-secondary">
    <Disclosure summary={section ? 'Settings guide' : 'Learn these settings'}>
      {item ? <><p>{item.body}</p><GuideFieldDetails details={item.details} /><p>{item.scope}</p></> : <>
        <p>{group!.summary}</p>
        <div><Button variant="secondary" size="small" onClick={() => openGuide({ chapter })}>Walk this section step by step</Button></div>
      </>}
    </Disclosure>
  </div>;
}
