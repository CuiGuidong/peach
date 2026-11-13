/* 小空间里的确定进度：16px 环形，按比例画弧（`peach-web-ui`）。
 *
 * 放在一行状态文字前当前导图标（页面顶部的更新横幅），和图标同尺寸；整行宽的进度用 `./progress` 的 `Progress`。
 * 没有确定百分比时不用它，改用 `./loading-dots`。弧长随数值平滑过渡，减少动效时全局规则关掉过渡。
 * 用 SVG 属性画，不写内联样式；颜色与 `Progress` 一致：轨道是文字色的浅一层，填充是强调色。 */
export function ProgressRing({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  const total = max > 0 ? max : 1;
  const done = Math.min(Math.max(Number.isFinite(value) ? value : 0, 0), total);
  const share = (done / total) * 100;
  return (
    <svg role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}
      viewBox="0 0 16 16" className="size-4 shrink-0 -rotate-90">
      <circle cx="8" cy="8" r="6.5" pathLength={100} strokeWidth={2} className="fill-none stroke-text-primary/15" />
      <circle cx="8" cy="8" r="6.5" pathLength={100} strokeWidth={2} strokeLinecap="round"
        strokeDasharray={`${share} ${100 - share}`}
        className="fill-none stroke-border-focus-ring transition-all duration-300" />
    </svg>
  );
}
