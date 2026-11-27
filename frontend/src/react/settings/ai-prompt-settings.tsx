import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Textarea } from '@/components/base/textarea/textarea';
import { apiGet, apiSend, errorMessage } from '../../api';
import { interfaceLanguage, t } from '../../i18n';
import { Note } from '../components/note';
import { Help, Stack } from './section';

const URL = '/api/ai-library/prompts?lang=' + interfaceLanguage;
const QUERY = ['ai-library-prompts', interfaceLanguage];
export const promptCopy = (key: string) => t('settings:aiLibrary.prompts.' + key);
export const AI_PROMPT_SCOPES = ['system', 'translate', 'tags', 'vision', 'timeline', 'official', 'search', 'metadata', 'organize'] as const;
export type AIPromptScope = typeof AI_PROMPT_SCOPES[number];
type PromptSettings = { defaults: Record<string, string>; overrides: Partial<Record<string, string>>; limit: number };

export function useAIPromptSettings(scope: AIPromptScope, active: boolean) {
  const client = useQueryClient();
  const query = useQuery({ queryKey: QUERY, queryFn: ({ signal }) => apiGet<PromptSettings>(URL, signal), enabled: active });
  const [drafts, setDrafts] = useState<Partial<Record<AIPromptScope, string>>>({});
  const base = query.data?.defaults[scope] ?? '';
  const override = query.data?.overrides[scope];
  const persisted = override ?? base;
  const value = drafts[scope] ?? persisted;
  const dirty = Boolean(query.data) && (value.trim() || base) !== persisted;
  const save = async (signal: AbortSignal, reset = false) => {
    const next = await apiSend<PromptSettings>(URL, { scope, text: reset ? '' : value }, 'POST', signal);
    client.setQueryData(QUERY, next);
    setDrafts(current => ({ ...current, [scope]: undefined }));
  };
  return { value, dirty, save, limit: query.data?.limit, error: query.error, resettable: Boolean(override) || dirty,
    onChange: (text: string) => setDrafts(current => ({ ...current, [scope]: text })) };
}

export function AIPromptEditor({ scope, prompt, busy, divided, readOnly }: {
  scope: AIPromptScope; prompt: ReturnType<typeof useAIPromptSettings>; busy: boolean; divided: boolean; readOnly: boolean;
}) {
  const label = promptCopy('scopes.' + scope);
  return <Stack divided={divided}>
    {scope === 'system' ? <Help><span data-copy-key="settings.aiLibrary.prompts.help">{promptCopy('help')}</span></Help> : null}
    {!readOnly && prompt.error ? <Note tone="error">{errorMessage(prompt.error)}</Note> : null}
    {readOnly ? <>
      <Help><span data-copy-key="settings.aiLibrary.prompts.builtinReadOnly">{promptCopy('builtinReadOnly')}</span></Help>
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="text-body-medium text-text-primary" data-copy-key={'settings.aiLibrary.prompts.scopes.' + scope}>{label}</span>
        <div role="region" aria-label={label} tabIndex={0}
          className="h-44 select-none overflow-y-auto rounded-2lg bg-background-tertiary-default px-3 py-2 text-body-regular text-text-secondary whitespace-pre-wrap wrap-anywhere">
          {promptCopy('defaults.' + scope)}
        </div>
      </div>
    </> : prompt.limit === undefined ? (prompt.error ? null : <Help role="status">{promptCopy('loading')}</Help>) : <>
      <Help><span data-copy-key={'settings.aiLibrary.prompts.descriptions.' + scope}>{promptCopy('descriptions.' + scope)}</span></Help>
      <Textarea label={label} value={prompt.value} onChange={prompt.onChange} isDisabled={busy}
        rows={8} maxLength={prompt.limit} showCount resize="vertical" />
    </>}
  </Stack>;
}
