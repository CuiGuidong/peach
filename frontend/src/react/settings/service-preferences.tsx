/* The collection tier and source-update preferences in Peach's config; reads and writes reuse the settings API and the query cache. */
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useQuery } from '@tanstack/react-query';

import { appSettingsStore } from '@peach/appearance';
import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Select, SelectItem } from '@/components/base/select/select';
import { Switch } from '@/components/base/switch/switch';
import { Input } from '@/components/base/input/input';
import { Button } from '@/components/base/buttons/button';

import { FOLLOW_INITIAL_RANGE_OPTIONS } from '../../application/initial-follow-ranges';
import { errorMessage } from '../../api';
import { boundedPreference } from '../../number-setting';
import { momentText } from '../activity/tasks';
import { Note } from '../components/note';
import {
  FEED_SCHEDULE_KEY, FOLLOW_SCHEDULE_KEY, SCHEDULE_RUNS, SETTINGS_KEY, THUMBNAIL_JOBS_KEY, fetchFeedSchedule,
  fetchFollowSchedule, fetchSettings, fetchThumbnailJobs, schedulePollInterval, useRunSchedule,
  useSaveFollowSchedule, useSaveSettings, useSaveThumbnailMode, type FollowScheduleStatus,
} from '../settings-panel/settings-data';
import { ErrorText, Help, Rows, Section, Stack, TaskCenterLink } from './section';
import { busyProps } from './use-action';

const THUMBNAIL_OPTIONS = [['off', 'Off'], ['precise', 'One per 10 seconds'], ['coarse', 'One per 30 seconds']] as const;

export function VideoThumbnailRow({ epoch = 0 }: { epoch?: number }) {
  return <Section guide="timeline" title="时间轴缩略图"><VideoThumbnailControls epoch={epoch} /></Section>;
}

export function VideoThumbnailControls({ epoch = 0, disabled = false }: { epoch?: number; disabled?: boolean }) {
  const status = useQuery({ queryKey: THUMBNAIL_JOBS_KEY, queryFn: ({ signal }) => fetchThumbnailJobs(signal), refetchOnMount: 'always' });
  const save = useSaveThumbnailMode();
  const reset = save.reset;
  useEffect(() => { reset() }, [epoch, reset]);
  const data = status.data;
  const error = save.error || status.error;
  return (
    <>
      <Rows>
        <SettingsRow label="Timeline preview" description="Extract frames at the chosen interval, processing only videos on local disks.">
          <div id="videoThumbnailSetting">
            <Select aria-label="Thumbnail capture interval" selectedKey={data?.mode || 'off'}
              isDisabled={disabled || !data || status.isFetching || save.isPending}
              onSelectionChange={(key) => { if (key !== null) save.mutate(String(key)) }}>
              {THUMBNAIL_OPTIONS.map(([key, label]) => <SelectItem key={key} id={key}>{label}</SelectItem>)}
            </Select>
          </div>
        </SettingsRow>
      </Rows>
      {save.isPending || data?.status === 'running'
        ? <Stack divided>
            <Help role="status">{save.isPending ? 'Saving…' : 'Scraping.'}</Help>
            {save.isPending ? null : <TaskCenterLink />}
          </Stack>
        : null}
      {error ? <Stack divided><ErrorText>{errorMessage(error)}</ErrorText></Stack> : null}
    </>
  );
}

export function FollowPreferenceRows({ receipt }: { receipt(message: string): void }) {
  const store = appSettingsStore();
  useSyncExternalStore(store.subscribe, store.version);
  const settings = useQuery({ queryKey: SETTINGS_KEY, queryFn: ({ signal }) => fetchSettings(signal), refetchOnMount: 'always' });
  const initial = useSaveSettings();
  const initialDays = settings.data?.followInitialDays ?? store.value.followInitialDays;
  const error = initial.error || settings.error;
  return (
    <Section guide="follow-options" title="关注采集">
      <Rows>
        <FollowScheduleRow />
        <FeedScheduleRow />
        <SettingsRow label="First scrape scope">
          <div id="followInitialDaysSetting">
            <Select aria-label="First scrape scope" selectedKey={String(initialDays)}
              isDisabled={settings.isFetching || initial.isPending}
              onSelectionChange={(key) => {
                if (key === null) return;
                initial.mutate({ followInitialDays: Number(key) }, { onSuccess: (saved) => {
                  if (typeof saved.followInitialDays === 'number') store.value.followInitialDays = saved.followInitialDays;
                  store.save();
                  receipt('Initial collection scope saved');
                } });
              }}>
              {FOLLOW_INITIAL_RANGE_OPTIONS.map(([key, label]) => <SelectItem key={key} id={key}>{label}</SelectItem>)}
            </Select>
          </div>
        </SettingsRow>
        <SettingsRow label="Avatar refresh">Every 3 months</SettingsRow>
        <SettingsRow label="Favicon refresh">Yearly</SettingsRow>
      </Rows>
      {error ? <Stack divided><ErrorText>{errorMessage(error)}</ErrorText></Stack> : null}
    </Section>
  );
}

function FollowScheduleRow() {
  const status = useQuery({ queryKey: FOLLOW_SCHEDULE_KEY, queryFn: ({ signal }) => fetchFollowSchedule(signal),
    refetchOnMount: 'always', refetchInterval: (query) => schedulePollInterval(query.state.data) });
  const save = useSaveFollowSchedule();
  const data = status.data;
  const remembered = useRef(boundedPreference(Number(localStorage.getItem('peach.number.followScheduleSetting')), 15, 10080, 60));
  const [draft, setDraft] = useState('60');
  const [invalid, setInvalid] = useState(false);
  useEffect(() => {
    if (data?.enabled) {
      remembered.current = data.interval_minutes;
      setDraft(String(data.interval_minutes));
    }
  }, [data]);
  const blocked = !data?.available || status.isFetching || save.isPending;
  const commit = () => {
    const minutes = Number(draft);
    if (!Number.isInteger(minutes) || minutes < 15 || minutes > 10080) { setInvalid(true); return }
    setInvalid(false);
    if (!data?.enabled || blocked || minutes === data.interval_minutes) return;
    remembered.current = minutes;
    localStorage.setItem('peach.number.followScheduleSetting', String(minutes));
    save.mutate(minutes);
  };
  const error = save.error || status.error;
  return (
    <>
      <SettingsRow label="Automatically check for updates">
        {/* The spacing box only exists while the toggle is on; this row reserves the with-box height, so the rows below do not shift when the state is read back. */}
        <div id="followScheduleSetting" className="flex min-h-9 min-w-0 flex-wrap items-center justify-end gap-2">
          <Switch aria-label="Automatically check for updates" isSelected={data?.enabled === true} isDisabled={blocked}
            onChange={(on) => {
              localStorage.setItem('peach.number.followScheduleSetting', String(remembered.current));
              save.mutate(on ? remembered.current : 0);
            }} />
          {data?.enabled ? <div className="flex items-center gap-2">
            <Input type="number" inputMode="numeric" name="follow-interval" autoComplete="off"
              aria-label="Auto-check interval" className="w-24"
              value={draft} onChange={(value) => { setDraft(value); setInvalid(false) }} onBlur={commit}
              onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); commit() } }}
              isDisabled={blocked} isInvalid={invalid} />
            <span className="text-body-2-regular text-text-secondary">min</span>
          </div> : null}
        </div>
      </SettingsRow>
      {invalid ? <Stack><ErrorText>Enter a whole number from 15 to 10080 (minutes).</ErrorText></Stack> : null}
      {save.isPending || data?.running
        ? <Stack><Help role="status">{save.isPending ? 'Saving…' : 'Checking source updates…'}</Help></Stack> : null}
      <ScheduleFailure kind="follow" status={data} title="The last auto-check failed" />
      {error ? <Stack><ErrorText>{errorMessage(error)}</ErrorText></Stack> : null}
    </>
  );
}

/* Subscription polling has no adjustable tier; this row only reads out the interval and the last round's failure. */
function FeedScheduleRow() {
  const status = useQuery({ queryKey: FEED_SCHEDULE_KEY, queryFn: ({ signal }) => fetchFeedSchedule(signal),
    refetchOnMount: 'always', refetchInterval: (query) => schedulePollInterval(query.state.data) });
  const data = status.data;
  /* On first read, hold this line open: fill in the text once the numbers arrive so the rows below do not jump down. */
  if (!data) {
    return status.isPending ? <SettingsRow label="Follow source fetching">
      <span data-skeleton aria-busy="true" aria-label="Reading the follow source fetch interval"
        className="block h-4 w-16 rounded-2lg bg-background-tertiary-default" />
    </SettingsRow> : null;
  }
  const minutes = data.interval_minutes;
  const interval = minutes % 60 ? `Every ${minutes} minutes` : `Every ${minutes / 60} hours`;
  return (
    <>
      <SettingsRow label="Follow source fetching">
        <span id="feedScheduleSetting">{!data.available ? 'Only available on the writer instance' : data.enabled ? interval : 'Closed'}</span>
      </SettingsRow>
      {data.running ? <Stack><Help role="status">Fetching follow sources…</Help></Stack> : null}
      <ScheduleFailure kind="feed" status={data} title="The last auto-fetch failed" />
    </>
  );
}

/* 每轮开始时服务端Clear上一轮的原因，所以正在跑的那一轮不显示；下一轮成功同样Clear.
   「Retry now」让调度自己提前跑一轮: 手动检查不经过调度，跑完了这条原因也不会消失. */
function ScheduleFailure({ kind, status, title }: {
  kind: keyof typeof SCHEDULE_RUNS; status: FollowScheduleStatus | undefined; title: string;
}) {
  const run = useRunSchedule(kind);
  if (!status?.enabled || status.running || !status.last_error) return null;
  const failures = status.consecutive_failures ?? 0;
  const next = momentText(status.next_run_at);
  const detail = [failures > 1 ? `Failed ${failures} times in a row` : '', next ? `Next round ${next}` : '']
    .filter(Boolean).join(', ');
  const reason = [status.last_error, detail, run.error ? `No retry: ${errorMessage(run.error)}` : '']
    .filter(Boolean).join('\n');
  return (
    <Stack>
      <Note tone="error" title={title} action={<Button variant="secondary" size="small"
        disabled={!status.available} {...busyProps(run.isPending)} onClick={() => run.mutate()}>Retry now</Button>}>
        {reason}
      </Note>
    </Stack>
  );
}
