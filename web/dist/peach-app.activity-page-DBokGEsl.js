(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f411d9a3-5c76-496f-8bc3-3f3da79b6fc2", e._sentryDebugIdIdentifier = "sentry-dbid-f411d9a3-5c76-496f-8bc3-3f3da79b6fc2");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, Gg as a, HN as o, LinkButton as s, LoadingDots as c, Note as l, OV as u, Progress as d, TASKS_KEY as f, TRIGGER_LABELS as p, __toESM as m, apiGet as h, apiSend as g, busyProps as _, cardClass as v, confirmModal as y, controlTask as b, cx as x, elapsedText as S, errorMessage as C, f1 as ee, fetchEarlier as te, fetchTasks as ne, fmtSize as re, foldByKind as ie, foldRoutine as ae, followupDetail as w, followupTally as T, groupFollowups as oe, hasResultProblems as E, i2 as D, isActive as O, isRoutine as se, latestOfKind as ce, mergeFinished as k, momentText as A, notifyManager as j, pollInterval as le, problemDestination as ue, progressText as M, replaceEqualDeep as N, require_jsx_runtime as P, require_react as F, statusLabel as I, summaryItems as L, taskIssues as R, uo as de, useMutation as z, useQuery as fe, useQueryClient as B } from "./peach-app.js";
import { CodeBlock as V } from "./peach-app.code-block-6TfoDGLR.js";
import { Page as pe } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as H, ErrorExcerpt as U } from "./peach-app.error-excerpt-CigKESNN.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var W = /* @__PURE__ */ m(F(), 1);
function me() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = N(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function he(e = {}, t) {
	let n = B(t).getMutationCache(), [r] = W.useState(() => me()), i = r(n, e);
	return W.useSyncExternalStore(W.useCallback((e) => n.subscribe(j.batchCalls(e)), [n]), i, i);
}
// src/react/activity/background-issues.tsx
var G = P(), K = ["background-issues"];
function ge() {
	let e = (0, W.useId)(), t = fe({
		queryKey: K,
		queryFn: ({ signal: e }) => h("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, G.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, G.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "Needs attention"
		}), /* @__PURE__ */ (0, G.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, G.jsx)("li", { children: /* @__PURE__ */ (0, G.jsx)(_e, { issue: e }) }, e.key))
		})]
	}) : null;
}
function _e({ issue: t }) {
	let n = B(), r = z({
		mutationFn: () => g(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: K });
		}
	}), i = t.since ? `Since ${A(t.since)}` : `Noticed at ${A(t.noticed_at)}`;
	return /* @__PURE__ */ (0, G.jsx)(l, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, G.jsx)(s, {
				href: t.href,
				size: "small",
				trailingIcon: D,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ (0, G.jsx)(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				..._(r.isPending),
				onClick: () => r.mutate(),
				children: "Retry now"
			}) : null]
		}),
		children: r.error ? `${i}\nNot retried: ${C(r.error)}` : i
	});
}
// src/react/activity/task-controls.tsx
var q = ["task-control"], ve = {
	pause: u,
	resume: a,
	cancel: o
}, J = {
	pause: "Paused",
	resume: "Continue",
	cancel: "Cancel"
}, ye = {
	pause: "Pause follow-up tasks",
	resume: "Resume follow-up tasks",
	cancel: "Cancel follow-up tasks"
};
function be() {
	let e = he({
		filters: { mutationKey: q },
		select: (e) => ({
			id: e.mutationId,
			command: e.state.variables,
			status: e.state.status,
			error: e.state.error
		})
	}), t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.command;
		if (!e) continue;
		let r = t.get(e.id);
		(!r || r.id < n.id) && t.set(e.id, {
			...n,
			command: e
		});
	}
	let n = [...t.values()].filter((e) => e.status === "error");
	return n.length ? /* @__PURE__ */ (0, G.jsx)("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ (0, G.jsx)(l, {
			tone: "error",
			title: `${e.label}: ${(e.followups ? ye : J)[e.action]} not finished`,
			children: C(t)
		}, e.id))
	}) : null;
}
function xe({ run: t }) {
	let n = B(), r = (0, W.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), i = () => {
		n.invalidateQueries({ queryKey: f });
	}, a = (e) => b(e.id, e.action), o = z({
		mutationKey: [
			...q,
			t.id,
			"change"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.change = !1, i();
		}
	}), s = z({
		mutationKey: [
			...q,
			t.id,
			"cancel"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.cancel = !1, i();
		}
	}), c = t.control?.actions || [], l = !O(t), u = s.isPending || s.isSuccess;
	if (!c.length) return null;
	let d = (e) => {
		let n = {
			id: t.id,
			label: t.task_label,
			action: e,
			followups: l
		};
		if (e === "cancel") {
			if (r.current.cancel || r.current.confirmation || s.isSuccess) return;
			r.current.confirmation = !0, y({
				title: l ? `Cancel every follow-up of "${t.task_label}"` : `Cancel task "${t.task_label}"`,
				body: l ? "This stops every follow-up task dispatched this round, including running and queued items. Saved details and results are kept.Once this batch of follow-ups is cancelled it cannot continue; start it again when needed." : "This stops the rest of this round's processing and its follow-up tasks. Saved details and results are kept.Once this round is cancelled it cannot continue; start it again when needed.",
				confirmLabel: l ? "Cancel follow-up tasks" : "Cancel task",
				danger: !0,
				onConfirm: async () => (r.current.cancel = !0, await s.mutateAsync(n))
			}).finally(() => {
				r.current.confirmation = !1;
			});
		} else {
			if (r.current.change || r.current.cancel || u) return;
			r.current.change = !0, o.mutate(n);
		}
	};
	return /* @__PURE__ */ (0, G.jsx)("div", {
		className: "ml-auto shrink-0",
		"data-task-controls": t.id,
		children: /* @__PURE__ */ (0, G.jsx)("div", {
			role: "group",
			"aria-label": `${t.task_label} ${l ? "follow-up" : "task"} controls`,
			className: "flex items-center justify-end gap-2",
			children: c.map((t) => {
				let n = (l ? ye : J)[t], r = t === "cancel" ? s.isPending : o.isPending && o.variables?.action === t, i = t === "cancel" ? u : o.isPending || u;
				return /* @__PURE__ */ (0, G.jsx)(e, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: ve[t],
					"aria-label": n,
					title: n,
					..._(r),
					"aria-disabled": i || void 0,
					onClick: () => d(t),
					"data-tooltip-copy-key": `tasks.control.action.${l ? "followups." : ""}${t}`
				}, t);
			})
		})
	});
}
// src/react/activity/resource-chip.tsx
var Se = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function Ce({ color: e, high: n, ...r }) {
	return n ? /* @__PURE__ */ (0, G.jsx)("span", {
		...r,
		className: x("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", Se[e])
	}) : /* @__PURE__ */ (0, G.jsx)(t, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var we = {
	cpu: {
		name: "CPU",
		color: "blue",
		description: "CPU usage treats the runner's available capacity as 100%; containers use their visible CPU quota. Emphasized from 50%."
	},
	gpu: {
		name: "GPU",
		color: "purple",
		description: "GPU usage shows that task's busiest GPU engine. Emphasized from 50%."
	},
	network: {
		name: "Network",
		color: "cyan",
		description: "Network rate shows the download speed observed for that task, emphasized from 10 MiB/s. Mounted drives or transfers that cannot be attributed show Not obtained."
	}
};
function Te(e) {
	return e === "sampling" ? "Sampling" : "Not fetched";
}
function Y({ run: e, active: t = O(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ (0, G.jsx)("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = we[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? e === "network" ? `${re(i)}/s` : `${i.toLocaleString(void 0, { maximumFractionDigits: 1 })}%` : Te(t.state), c = [
				t.reason,
				o ? "Currently under heavy use." : "",
				r.description,
				n.detail
			].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, G.jsxs)(Ce, {
				color: r.color,
				high: o,
				tabIndex: 0,
				title: c,
				"data-task-resource": e,
				"data-resource-state": t.state,
				"data-resource-high": o || void 0,
				"data-copy-ignore": "",
				"data-tooltip-copy-key": !t.reason && !n.detail && !o ? `tasks.resources.${e}.description` : void 0,
				children: [
					r.name,
					" ",
					s
				]
			}, e);
		})
	});
}
// src/react/activity/activity-page.tsx
var Ee = 50, De = /* @__PURE__ */ new Set(["upgrade-repairs"]), Oe = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, ke = {
	running: "In progress",
	pausing: "Pausing",
	paused: "Paused",
	cancelling: "Cancelling"
};
function X({ run: e }) {
	let n = e.control?.state;
	if (n && (n !== "running" || !O(e))) return /* @__PURE__ */ (0, G.jsx)(t, {
		color: n === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, G.jsx)("span", {
			"data-copy-key": `tasks.control.state.${n}`,
			children: ke[n]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && E(e);
	return /* @__PURE__ */ (0, G.jsx)(t, {
		color: i ? "yellow" : Oe[e.status] ?? "neutral",
		children: r ? "Some items need handling" : i ? "Issues found" : I(e.status)
	});
}
function Ae({ rows: e }) {
	return /* @__PURE__ */ (0, G.jsx)("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = w(e);
			return /* @__PURE__ */ (0, G.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ (0, G.jsxs)("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, G.jsxs)("div", {
							className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, G.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: e.task_label
								}),
								/* @__PURE__ */ (0, G.jsx)(X, { run: e }),
								t ? /* @__PURE__ */ (0, G.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ (0, G.jsx)(xe, { run: e })]
					}),
					/* @__PURE__ */ (0, G.jsx)(Y, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, G.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, G.jsx)(n, {
							summary: "Technical details",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, G.jsx)(V, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: `${e.task_label} technical details`
							})
						})
					}) : null
				]
			}, e.id);
		})
	});
}
function Z({ run: e, meta: t, children: r, footer: i, followups: a, followupTotal: o = 0, badge: s, resourceActive: c }) {
	let l = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), u = a ? [...a].sort((e, t) => l(t) - l(e) || t.id - e.id).slice(0, Ee) : [], d = u.length, f = Math.max(a?.length || 0, o);
	return /* @__PURE__ */ (0, G.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: v({
			padding: "none",
			bordered: "line",
			className: e.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, G.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, G.jsxs)("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, G.jsxs)("div", {
							className: "flex min-w-0 flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, G.jsx)("strong", {
								className: "min-w-0 break-words text-title-3-medium text-text-primary",
								children: e.task_label
							}), s ?? /* @__PURE__ */ (0, G.jsx)(X, { run: e })]
						}), /* @__PURE__ */ (0, G.jsx)(xe, { run: e })]
					}),
					/* @__PURE__ */ (0, G.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ (0, G.jsx)(Y, {
						run: e,
						active: c
					}),
					r
				]
			}),
			d ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, G.jsxs)(n, {
					summary: `Task details · ${f.toLocaleString()} ${f === 1 ? "item" : "items"}`,
					contentClassName: "pb-2.5",
					defaultOpen: u.some((e) => O(e)),
					children: [d < f ? /* @__PURE__ */ (0, G.jsxs)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"Listing ",
							d.toLocaleString(),
							" ",
							d === 1 ? "item" : "items",
							", in-progress first"
						]
					}) : null, /* @__PURE__ */ (0, G.jsx)(Ae, { rows: u })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, G.jsx)(n, {
					summary: "Technical details",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ (0, G.jsx)(V, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label} technical details`
					})
				})
			}) : null,
			i ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ (0, G.jsx)(U, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function je({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.control?.state, a = i && i !== "running", o = a ? ke[i] : e.progress_label || "Running", s = S(e.elapsed_seconds), l = [p[e.trigger] || e.trigger, s && `Ran for ${s}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsx)(Z, {
		run: e,
		meta: l,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, G.jsx)(d, {
				label: o,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ (0, G.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					o,
					" · ",
					M(r, n),
					" items"
				]
			})]
		}) : a ? /* @__PURE__ */ (0, G.jsx)("p", {
			"data-copy-key": `tasks.control.state.${i}`,
			className: "text-caption-1-regular text-text-secondary",
			children: o
		}) : /* @__PURE__ */ (0, G.jsx)(c, { label: o })
	});
}
function Me({ run: e, followups: r, runs: i, latest: a, followupTotal: o, followupFailed: c = 0, followupCancelled: l = 0 }) {
	let u = !!(i && i.length > 1 && o), d = u ? [`Processed ${o.toLocaleString()} items in total`, c ? `${c.toLocaleString()} of them failed` : ""].filter(Boolean) : L(e.result_summary).filter((t) => t !== e.error), f = R(e), m = ue(e, a), h = S(e.elapsed_seconds), g = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (g ? [
		p[e.trigger] || e.trigger,
		`Last ${i.length} rounds`,
		`${A(g.finished_at)} – ${A(e.finished_at)}`
	] : [
		p[e.trigger] || e.trigger,
		A(e.finished_at),
		h && `Took ${h}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsxs)(Z, {
		run: e,
		meta: _,
		footer: e.error,
		followups: r,
		followupTotal: o,
		badge: l && e.status === "succeeded" ? /* @__PURE__ */ (0, G.jsx)(t, {
			color: "rose",
			children: /* @__PURE__ */ (0, G.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${l === o ? "all" : "partial"}`,
				children: l === o ? "Follow-up tasks cancelled" : "Some follow-up tasks were cancelled"
			})
		}) : u && c ? /* @__PURE__ */ (0, G.jsx)(t, {
			color: "yellow",
			children: "Issues found"
		}) : void 0,
		children: [
			l ? /* @__PURE__ */ (0, G.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"Follow-up tasks cancelled ",
					l.toLocaleString(),
					" items"
				]
			}) : null,
			d.length === 1 ? /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d[0]
			}) : d.length ? /* @__PURE__ */ (0, G.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d.map((e, t) => /* @__PURE__ */ (0, G.jsx)("li", { children: e }, t))
			}) : null,
			f.length ? /* @__PURE__ */ (0, G.jsx)(n, {
				summary: `Issue details · ${f.length} items`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ (0, G.jsx)(H, {
					label: "Task issue details",
					children: /* @__PURE__ */ (0, G.jsx)("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: f.map((e, t) => /* @__PURE__ */ (0, G.jsxs)("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ (0, G.jsx)("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ (0, G.jsx)(U, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : E(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "Per-item details for this round were not fetched; check results are available in the source list."
			}) : null,
			m ? /* @__PURE__ */ (0, G.jsx)(s, {
				href: m.href,
				size: "small",
				trailingIcon: D,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function Ne({ runs: e, followups: n, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = T(r, e), s = Math.max(o.total, n.length), c = o.total ? o.settled : n.filter((e) => !O(e)).length, l = o.total ? o.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		p[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} batches` : "",
		`Started ${A(a.started_at || a.finished_at)}`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsx)(Z, {
		run: i,
		meta: u,
		followups: n,
		followupTotal: s,
		resourceActive: !0,
		badge: i.control ? /* @__PURE__ */ (0, G.jsx)(X, { run: i }) : /* @__PURE__ */ (0, G.jsx)(t, {
			color: "blue",
			children: "Running"
		}),
		children: /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, G.jsx)(d, {
				label: `${i.task_label} progress`,
				value: c,
				max: s
			}), /* @__PURE__ */ (0, G.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"Processed ",
					M(c, s),
					" items",
					l ? ` · ${l.toLocaleString()} of them failed` : ""
				]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, W.useId)();
	return /* @__PURE__ */ (0, G.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, G.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ (0, G.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function Pe() {
	let t = fe({
		queryKey: f,
		queryFn: ({ signal: e }) => ne(e),
		refetchInterval: (e) => le(e.state.data)
	}), n = t.data, a = n?.finished, [o, s] = (0, W.useState)([]), [c, u] = (0, W.useState)(!1), [d, p] = (0, W.useState)({}), [m, h] = (0, W.useState)(a);
	a !== m && (h(a), o.length && m && s(k(o, m)));
	let g = z({
		mutationFn: ({ oldest: e }) => te(e),
		onSuccess: (e, { shown: t }) => {
			s((n) => k(n, t, e.finished || [])), u(!!e.finished_has_more), p((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), v = t.error ? C(t.error) : "";
	if (!n) return /* @__PURE__ */ (0, G.jsx)(pe, { children: /* @__PURE__ */ (0, G.jsx)(l, {
		tone: "error",
		children: v || "Reading the task center failed"
	}) });
	let y = k(n.finished || [], o), b = n.working_parents || [], x = [
		...n.running || [],
		...n.skipped || [],
		...y,
		...b
	], S = oe(x), re = new Set(x.map((e) => e.id)), w = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && re.has(e.parent_run_id))), D = w(y), A = D[D.length - 1], j = !!A && (o.length ? c : !!n.finished_has_more), ue = () => {
		!g.isPending && A && g.mutate({
			oldest: A,
			shown: y
		});
	}, M = {
		...d,
		...n.followup_counts
	}, N = (e) => e.flatMap((e) => S.get(e.id) || []), P = [...D, ...w(b)].filter((e) => T(M, [e]).active > 0 || S.get(e.id)?.some(O)).sort((e, t) => t.id - e.id), F = w(n.running || []), I = w(n.skipped || []), L = D.filter((e) => !P.includes(e) && !I.some((t) => t.id === e.id)), R = (e) => (S.get(e.id) || []).every((e) => e.status === "succeeded" && !E(e)) && T(M, [e]).failed === 0, B = ae(L, (e) => se(e) && (R(e) || De.has(e.task_key))), V = [...ie(P.filter((e) => !e.control)), ...P.filter((e) => e.control).map((e) => ({
		run: e,
		runs: [e]
	}))].sort((e, t) => t.run.id - e.run.id), H = ce(x), U = !F.length && !P.length && !I.length && !L.length;
	return /* @__PURE__ */ (0, G.jsxs)(pe, { children: [
		v ? /* @__PURE__ */ (0, G.jsx)(l, {
			tone: "error",
			children: v
		}) : null,
		/* @__PURE__ */ (0, G.jsx)(be, {}),
		n.available === !1 ? /* @__PURE__ */ (0, G.jsx)(l, {
			tone: "warning",
			children: n.message || "The database has not set up the task records table yet"
		}) : null,
		/* @__PURE__ */ (0, G.jsx)(ge, {}),
		U ? /* @__PURE__ */ (0, G.jsx)(i, {
			icon: de,
			title: "No task records yet",
			children: "Once scans, update checks, bulk actions, and command-line batches run, their progress and results show up here."
		}) : /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
			/* @__PURE__ */ (0, G.jsx)(Q, {
				title: "Running",
				children: F.length || P.length ? /* @__PURE__ */ (0, G.jsxs)($, {
					live: !0,
					children: [F.map((e) => /* @__PURE__ */ (0, G.jsx)(je, {
						run: e,
						followups: S.get(e.id)
					}, e.id)), V.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, G.jsx)(Ne, {
						runs: t,
						followups: N(t),
						counts: M
					}, e.id))]
				}) : /* @__PURE__ */ (0, G.jsx)(l, {
					tone: "neutral",
					children: "No tasks running."
				})
			}),
			I.length ? /* @__PURE__ */ (0, G.jsx)(Q, {
				title: "Not executed this time",
				children: /* @__PURE__ */ (0, G.jsx)($, { children: I.map((e) => /* @__PURE__ */ (0, G.jsx)(Me, {
					run: e,
					latest: H.has(e.id),
					followups: S.get(e.id)
				}, e.id)) })
			}) : null,
			L.length || j ? /* @__PURE__ */ (0, G.jsxs)(Q, {
				title: "Recently completed",
				children: [
					L.length ? /* @__PURE__ */ (0, G.jsx)($, { children: B.map(({ run: e, runs: t }) => {
						let n = T(M, t);
						return /* @__PURE__ */ (0, G.jsx)(Me, {
							run: e,
							runs: t,
							latest: H.has(e.id),
							followups: N(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					}) }) : null,
					g.error ? /* @__PURE__ */ (0, G.jsx)(l, {
						tone: "error",
						children: C(g.error)
					}) : null,
					j ? /* @__PURE__ */ (0, G.jsx)(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: ee,
						className: "self-start",
						..._(g.isPending),
						onClick: ue,
						children: "Load earlier"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ (0, G.jsx)(r, {})
	] });
}
export { Pe as ActivityPage };

//# debugId=f411d9a3-5c76-496f-8bc3-3f3da79b6fc2