/* 每轮任务的实测读数。高占用仅改变 Chip 强调程度，不调整任务资源使用。 */
import { fmtSize } from '@peach/legacy/core';
import { ResourceChip } from './resource-chip';

import { isActive, type TaskResourceState, type TaskRunPayload } from './tasks';

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
    description: 'Network rate shows the download speed observed for that task, emphasized from 10 MiB/s. Mounted drives or transfers that cannot be attributed show Not obtained.',
  },
} as const;

function unavailable(state: TaskResourceState) {
  return state === 'sampling' ? 'Sampling' : 'Not fetched';
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
      const label = ready
        ? key === 'network' ? `${fmtSize(value)}/s` : `${value.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`
        : unavailable(metric.state);
      const explanation = [metric.reason, high ? 'Currently under heavy use.' : '', appearance.description, resources.detail]
        .filter(Boolean).join('\n');
      return <ResourceChip key={key} color={appearance.color} high={high}
        tabIndex={0} title={explanation}
        data-task-resource={key} data-resource-state={metric.state} data-resource-high={high || undefined}
        data-copy-ignore=""
        data-tooltip-copy-key={!metric.reason && !resources.detail && !high ? `tasks.resources.${key}.description` : undefined}>
        {appearance.name} {label}
      </ResourceChip>;
    })}
  </div>;
}
