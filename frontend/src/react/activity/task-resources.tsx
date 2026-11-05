/* Measured readings per task round. High usage only changes the Chip's emphasis level, not the task's resource usage. */
import { fmtSize } from '@peach/legacy/core';
import { ResourceChip } from './resource-chip';

import { isActive, type TaskResourceMetric, type TaskRunPayload } from './tasks';

const METRICS = {
  cpu: {
    name: 'CPU', color: 'blue',
    description: 'CPU usage treats the runner\'s available capacity as 100%; containers use their visible CPU quota. Emphasized from 50%.',
  },
  gpu: {
    name: 'GPU', color: 'purple',
    description: 'GPU usage shows that task\'s busiest GPU engine. Emphasized from 50%.',
  },
  network: {
    name: 'Network', color: 'cyan',
    description: 'The network rate shows the download speed observed for that task; at 10 MiB/s it deepens. Reads from a cloud-drive mount show cloud-drive reads; SMB or transfers that cannot be attributed precisely show not obtained.',
  },
} as const;

function unavailable(metric: TaskResourceMetric) {
  if (metric.state === 'sampling') return 'Sampling';
  return metric.via === 'cloud' ? 'cloud drive read' : 'Not fetched';
}

/* A reading of 0 means this round didn't use that resource; write “Unused” directly rather than making people read a 0. */
function reading(key: 'cpu' | 'gpu' | 'network', value: number) {
  if (value === 0) return 'not used';
  return key === 'network' ? `${fmtSize(value)}/s` : `${value.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`;
}

export function TaskResources({ run, active = isActive(run) || Boolean(run.control) }: {
  run: TaskRunPayload; active?: boolean;
}) {
  if (!active || !run.resources) return null;
  const resources = run.resources;
  return <div data-task-resources={run.id} className="flex min-w-0 flex-wrap items-center gap-2">
    {(['cpu', 'gpu', 'network'] as const).map((key) => {
      const metric = resources[key];
      const appearance = METRICS[key];
      const value = key === 'network' ? resources.network.bytes_per_second : resources[key].percent;
      const ready = metric.state === 'ready' && value !== null;
      const high = ready && metric.high;
      const label = ready ? reading(key, value) : unavailable(metric);
      const explanation = [metric.reason, high ? 'Currently under heavy use.' : '', appearance.description, resources.detail]
        .filter(Boolean).join('\n');
      return <ResourceChip key={key} color={appearance.color} high={high}
        tabIndex={0} title={explanation}
        data-task-resource={key} data-resource-state={metric.state} data-resource-via={metric.via} data-resource-high={high || undefined}
        data-resource-idle={ready && value === 0 || undefined} data-copy-ignore=""
        data-tooltip-copy-key={!metric.reason && !resources.detail && !high ? `tasks.resources.${key}.description` : undefined}>
        {appearance.name} {label}
      </ResourceChip>;
    })}
  </div>;
}
