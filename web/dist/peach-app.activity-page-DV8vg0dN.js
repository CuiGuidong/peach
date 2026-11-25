(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bf618972-b59d-47b6-aa94-646404e8a9af", e._sentryDebugIdIdentifier = "sentry-dbid-bf618972-b59d-47b6-aa94-646404e8a9af");
	} catch {}
})();
import { AnimatedNumber as e, Button as t, Bx as n, Chip as r, DataTableFooter as i, Disclosure as a, DownloadsPanel as o, EmptyState as s, Gg as c, HN as l, IssueRow as u, LinkButton as d, Lo as f, Ma as p, NameLink as m, Note as h, OV as g, Pf as _, ProcessingMode as v, RB as y, RUNNING_POLL_MS as b, Rk as x, Su as S, TASKS_KEY as C, TRIGGER_LABELS as w, TaskProgress as T, TaskStage as E, Xl as ee, __toESM as te, activityKind as D, apiGet as O, apiSend as k, busyProps as A, cardClass as ne, codedText as j, confirmModal as re, controlTask as ie, cx as ae, elapsedText as M, errorMessage as N, fetchTasks as oe, fmtSize as se, foldByKind as ce, foldRoutine as le, followupDetail as ue, followupTally as P, groupFollowups as de, hasResultProblems as F, i2 as fe, interfaceLanguage as pe, isActive as I, isRoutine as me, latestOfKind as he, momentText as L, oe as ge, pollInterval as _e, problemDestination as ve, progressLabel as ye, progressText as R, readableErrorHeadline as z, require_jsx_runtime as be, require_react as xe, runError as B, setTaskSpeed as Se, statusLabel as Ce, summaryItems as we, t as V, taskIssues as Te, taskName as H, taskSubject as U, um as Ee, uo as De, useMutation as W, useMutationState as Oe, useQuery as G, useQueryClient as ke, vl as Ae, withBackoff as K } from "./peach-app.js";
import { CodeBlock as je } from "./peach-app.code-block-BdQewVJ0.js";
import { Page as Me } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as Ne, ErrorExcerpt as Pe } from "./peach-app.error-excerpt-Ugft6I5o.js";
// src/react/activity/background-issues.tsx
var q = /* @__PURE__ */ te(xe(), 1), J = be(), Fe = ["background-issues"], Ie = K(() => 3e4);
function Le() {
	let e = (0, q.useId)(), t = G({
		queryKey: Fe,
		queryFn: ({ signal: e }) => O("/api/background-issues", e),
		refetchInterval: Ie
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, J.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: V("manage:backgroundIssues.title")
		}), /* @__PURE__ */ (0, J.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, J.jsx)("li", { children: /* @__PURE__ */ (0, J.jsx)(Re, { issue: e }) }, e.key))
		})]
	}) : null;
}
function Re({ issue: e }) {
	let n = ke(), r = W({
		mutationFn: () => k(e.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: Fe });
		}
	}), i = e.since ? V("manage:backgroundIssues.since", { time: L(e.since) }) : V("manage:backgroundIssues.detectedAt", { time: L(e.noticed_at) });
	return /* @__PURE__ */ (0, J.jsx)(h, {
		tone: "error",
		title: j(e, "title"),
		action: /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, J.jsx)(d, {
				href: e.href,
				size: "small",
				trailingIcon: fe,
				children: j(e, "link_label")
			}), e.retry ? /* @__PURE__ */ (0, J.jsx)(t, {
				variant: "secondary",
				size: "small",
				disabled: !e.retry_available,
				...A(r.isPending),
				onClick: () => r.mutate(),
				children: V("manage:shared.retryNow")
			}) : null]
		}),
		children: r.error ? V("manage:backgroundIssues.retryFailed", {
			moment: i,
			error: N(r.error)
		}) : i
	});
}
// src/react/activity/task-controls.tsx
var Y = ["task-control"], ze = {
	pause: g,
	resume: c,
	cancel: l
}, Be = {
	pause: V("manage:shared.pause"),
	resume: V("manage:shared.resume"),
	cancel: V("manage:taskControls.cancelTask")
}, Ve = {
	pause: V("manage:taskControls.pauseFollowups"),
	resume: V("manage:taskControls.resumeFollowups"),
	cancel: V("manage:taskControls.cancelFollowups")
};
function He() {
	let e = Oe({
		filters: { mutationKey: Y },
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
	return n.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ (0, J.jsx)(h, {
			tone: "error",
			title: V("manage:taskControls.actionFailed", {
				task: e.label,
				action: (e.followups ? Ve : Be)[e.action]
			}),
			children: N(t)
		}, e.id))
	}) : null;
}
function Ue({ run: e, runs: n = [e] }) {
	let r = ke(), i = (0, q.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), a = () => {
		r.invalidateQueries({ queryKey: C });
	}, o = async (e) => {
		let t = null;
		for (let r of n) try {
			await ie(r.id, e.action);
		} catch (e) {
			t ??= e;
		}
		if (t !== null) throw t;
	}, s = W({
		mutationKey: [
			...Y,
			e.id,
			"change"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.change = !1, a();
		}
	}), c = W({
		mutationKey: [
			...Y,
			e.id,
			"cancel"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.cancel = !1, a();
		}
	}), l = W({
		mutationFn: async (e) => {
			let t = (await Promise.allSettled(n.map((t) => Se(t.id, e)))).find((e) => e.status === "rejected");
			if (t?.status === "rejected") throw t.reason;
		},
		onSettled: a
	}), u = (e.control?.actions || []).filter((e) => e !== "set_speed"), d = !!(e.control?.actions.includes("set_speed") && e.control.speed_mode), f = !I(e), p = c.isPending || c.isSuccess;
	if (!u.length && !d) return null;
	let m = (t) => {
		let r = {
			id: e.id,
			label: H(e),
			action: t,
			followups: f
		};
		if (t === "cancel") {
			if (i.current.cancel || i.current.confirmation || c.isSuccess) return;
			i.current.confirmation = !0, re({
				title: V(f ? "manage:taskControls.cancelFollowupsTitle" : "manage:taskControls.cancelTaskTitle", { task: H(e) }),
				body: f ? n.length > 1 ? V("manage:taskControls.cancelBatchFollowupsBody", { count: n.length }) : V("manage:taskControls.cancelFollowupsBody") : V("manage:taskControls.cancelTaskBody"),
				confirmLabel: V(f ? "manage:taskControls.cancelFollowups" : "manage:shared.cancelTask"),
				danger: !0,
				onConfirm: async () => (i.current.cancel = !0, await c.mutateAsync(r))
			}).finally(() => {
				i.current.confirmation = !1;
			});
		} else {
			if (i.current.change || i.current.cancel || p) return;
			i.current.change = !0, s.mutate(r);
		}
	};
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "ml-auto min-w-0",
		"data-task-controls": e.id,
		children: [/* @__PURE__ */ (0, J.jsxs)("div", {
			role: "group",
			"aria-label": V(f ? "manage:taskControls.followupsGroupLabel" : "manage:taskControls.groupLabel", { task: H(e) }),
			className: "flex flex-wrap items-center justify-end gap-2",
			children: [d ? /* @__PURE__ */ (0, J.jsx)(v, {
				value: e.control.speed_mode,
				busy: l.isPending || p,
				animate: e.control?.state === "running",
				onChange: (e) => l.mutate(e)
			}) : null, u.map((e) => {
				let n = (f ? Ve : Be)[e], r = e === "cancel" ? c.isPending : s.isPending && s.variables?.action === e, i = e === "cancel" ? p : s.isPending || p;
				return /* @__PURE__ */ (0, J.jsx)(t, {
					type: "button",
					variant: "secondary",
					size: "small",
					leadingIcon: ze[e],
					"aria-label": n,
					title: n,
					...A(r),
					"aria-disabled": i || void 0,
					onClick: () => m(e),
					children: /* @__PURE__ */ (0, J.jsx)("span", {
						"data-copy-key": `tasks.control.action.${f ? "followups." : ""}${e}`,
						children: n
					})
				}, e);
			})]
		}), l.error ? /* @__PURE__ */ (0, J.jsx)(h, {
			tone: "error",
			children: N(l.error)
		}) : null]
	});
}
// src/react/activity/task-icon.tsx
var We = new Map([
	[n, [
		"follow-check",
		"follow-resolve",
		"follow-creator",
		"follow-evidence-reclaim",
		"follow-backfill",
		"feed-check",
		"feed-scrape",
		"feed-cover"
	]],
	[x, [
		"library-processing",
		"organize",
		"batch",
		"resource-scan",
		"resource-apply",
		"seed-import"
	]],
	[Ae, [
		"scrape-codes",
		"jav-discovery-metadata",
		"want-scrape",
		"upgrade-library"
	]],
	[p, [
		"scraping-cover",
		"jav-covers",
		"code-samples",
		"timeline-thumbnails",
		"entity-avatar",
		"cover-artwork-repair"
	]],
	[_, [
		"performer-profile",
		"performer-alias",
		"creator-identity",
		"studio-mark"
	]],
	[ee, ["media-repair", "mp4-header-repair"]],
	[Ee, [
		"link-check",
		"link-prune",
		"source-check"
	]],
	[ge, ["download-postprocess", "want-search"]],
	[f, ["taste-refresh"]],
	[y, [
		"upgrade-repairs",
		"diagnostic-export",
		"amane-bridge",
		"face-models",
		"ledger-backup",
		"ledger-restore"
	]]
].flatMap(([e, t]) => t.map((t) => [t, e])));
function Ge({ taskKey: e, className: t }) {
	let n = We.get(e) ?? S;
	return /* @__PURE__ */ (0, J.jsx)(n, {
		className: t,
		"aria-hidden": !0
	});
}
// src/react/activity/resource-chip.tsx
var Ke = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function qe({ color: e, high: t, ...n }) {
	return t ? /* @__PURE__ */ (0, J.jsx)("span", {
		...n,
		className: ae("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", Ke[e])
	}) : /* @__PURE__ */ (0, J.jsx)(r, {
		variant: "caption",
		color: e,
		...n
	});
}
// src/react/activity/task-resources.tsx
var Je = {
	cpu: {
		name: "CPU",
		color: "blue"
	},
	gpu: {
		name: "GPU",
		color: "purple"
	},
	network: {
		name: V("manage:taskResources.network"),
		color: "cyan"
	}
};
function Ye(e) {
	return e.state === "sampling" ? V("manage:taskResources.sampling") : e.via === "cloud" ? V("manage:taskResources.viaCloudDrive") : V("manage:taskResources.unavailable");
}
function Xe(e, t) {
	return t === 0 ? V("manage:taskResources.idle") : e === "network" ? `${se(t)}/s` : `${t.toLocaleString(pe, { maximumFractionDigits: 1 })}%`;
}
function Ze({ run: t, active: n = I(t) || !!t.control }) {
	if (!n || !t.resources) return null;
	let r = t.resources;
	return /* @__PURE__ */ (0, J.jsx)("div", {
		"data-task-resources": t.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((t) => {
			let n = r[t], i = Je[t], a = t === "network" ? r.network.bytes_per_second : r[t].percent, o = n.state === "ready" && a !== null, s = o && n.high, c = o ? Xe(t, a) : Ye(n), l = [n.reason ? j(n, "reason") : "", s ? V("manage:taskResources.highUsage") : ""].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, J.jsx)(qe, {
				color: i.color,
				high: s,
				tabIndex: l ? 0 : void 0,
				title: l || void 0,
				"data-task-resource": t,
				"data-resource-state": n.state,
				"data-resource-via": n.via,
				"data-resource-high": s || void 0,
				"data-resource-idle": o && a === 0 || void 0,
				"data-copy-ignore": "",
				children: /* @__PURE__ */ (0, J.jsxs)("span", {
					className: "inline-flex items-baseline gap-1",
					children: [
						/* @__PURE__ */ (0, J.jsx)("span", { children: i.name }),
						" ",
						o && a !== 0 ? /* @__PURE__ */ (0, J.jsx)(e, { value: c }) : /* @__PURE__ */ (0, J.jsx)("span", { children: c })
					]
				})
			}, t);
		})
	});
}
// src/react/activity/activity-page.tsx
var Qe = K(_e), $e = (e) => K(() => e ? b : !1), et = /* @__PURE__ */ new Set(["upgrade-repairs"]), tt = /* @__PURE__ */ new Set(["asset_id", "name"]), nt = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, rt = {
	running: V("manage:taskStatus.running"),
	pausing: V("manage:taskStatus.pausing"),
	paused: V("manage:taskStatus.paused"),
	cancelling: V("manage:taskStatus.canceling")
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !I(e))) return /* @__PURE__ */ (0, J.jsx)(r, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, J.jsx)("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: rt[t]
		})
	});
	let n = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = n || e.status === "succeeded" && F(e);
	return /* @__PURE__ */ (0, J.jsx)(r, {
		color: i ? "yellow" : nt[e.status] ?? "neutral",
		children: n ? V("manage:taskStatus.partial") : i ? V("manage:taskStatus.issuesFound") : Ce(e.status)
	});
}
function it({ rows: e }) {
	let [t, n] = (0, q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), { pageSize: r } = t, o = Math.min(t.pageIndex, Math.max(0, Math.ceil(e.length / r) - 1));
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.slice(o * r, (o + 1) * r).map((e) => {
			let t = ue(e);
			return /* @__PURE__ */ (0, J.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border py-2.5 pr-10 pl-5",
				children: [
					/* @__PURE__ */ (0, J.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-40 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, J.jsx)(Ge, {
									taskKey: e.task_key,
									className: "size-4 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: H(e)
								}),
								/* @__PURE__ */ (0, J.jsx)(X, { run: e }),
								t ? /* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ (0, J.jsx)(Ue, { run: e })]
					}),
					/* @__PURE__ */ (0, J.jsx)(Ze, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, J.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, J.jsx)(a, {
							findable: !0,
							summary: V("manage:taskCenter.technicalDetails"),
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, J.jsx)(je, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: V("manage:taskCenter.taskTechnicalDetails", { task: H(e) })
							})
						})
					}) : null
				]
			}, e.id);
		})
	}), /* @__PURE__ */ (0, J.jsx)(i, {
		label: V("manage:taskCenter.taskDetails"),
		total: e.length,
		pagination: {
			...t,
			pageIndex: o
		},
		onChange: n
	})] });
}
function Z({ run: e, meta: t, progress: n, children: r, error: i, issues: o, followups: s, followupTotal: c = 0, badge: l, resourceActive: u, controlled: d }) {
	let [f, p] = (0, q.useState)(!!s?.some(I)), g = (d || [e]).map((e) => e.id), _ = c > (s?.length || 0), v = G({
		queryKey: [
			...C,
			"followups",
			g
		],
		enabled: f && _,
		queryFn: async ({ signal: e }) => (await Promise.all(g.map((t) => O(`/api/tasks/${t}`, e)))).flatMap((e) => e.followups),
		refetchInterval: $e(u)
	}), y = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), b = [...(_ ? v.data : void 0) || s || []].sort((e, t) => y(t) - y(e) || t.id - e.id), x = b.length, S = Math.max(s?.length || 0, c), w = U(e), T = String(i || "").trim(), E = z(T);
	return /* @__PURE__ */ (0, J.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: ne({
			padding: "none",
			bordered: e.status === "failed" ? "error" : void 0,
			className: "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, J.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-48 flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, J.jsx)(Ge, {
									taskKey: e.task_key,
									className: "size-5 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, J.jsx)("strong", {
									className: "min-w-0 break-words text-title-3-medium text-text-primary",
									children: H(e)
								}),
								l ?? /* @__PURE__ */ (0, J.jsx)(X, { run: e })
							]
						}), /* @__PURE__ */ (0, J.jsx)(Ue, {
							run: e,
							runs: d
						})]
					}),
					n,
					/* @__PURE__ */ (0, J.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ (0, J.jsx)(Ze, {
						run: e,
						active: u
					}),
					w ? /* @__PURE__ */ (0, J.jsx)(m, {
						href: w.href,
						"data-task-subject": e.id,
						title: w.label,
						className: "min-w-0 max-w-full self-start truncate text-text-primary",
						children: w.label
					}) : null,
					E ? /* @__PURE__ */ (0, J.jsx)("p", {
						"data-task-error": "",
						className: "text-caption-1-regular text-text-secondary wrap-anywhere",
						children: E
					}) : null,
					r
				]
			}),
			o ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: o
			}) : null,
			E && T !== E ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsx)(a, {
					row: !0,
					findable: !0,
					summary: V("manage:taskCenter.errorDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, J.jsx)(Ne, {
						label: V("manage:taskCenter.taskErrorDetails", { task: H(e) }),
						children: T
					})
				})
			}) : null,
			S ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsxs)(a, {
					row: !0,
					summary: V("manage:taskCenter.taskDetailsCount", { count: S }),
					contentClassName: "pb-5",
					isOpen: f,
					onOpenChange: p,
					children: [
						v.error ? /* @__PURE__ */ (0, J.jsx)(h, {
							tone: "error",
							children: N(v.error)
						}) : null,
						x < S ? /* @__PURE__ */ (0, J.jsx)("p", {
							className: "text-caption-1-regular text-text-secondary",
							children: V("manage:taskCenter.showingCount", { count: x })
						}) : null,
						/* @__PURE__ */ (0, J.jsx)(it, { rows: b })
					]
				})
			}) : null,
			Object.keys(e.result_summary || {}).some((e) => !(w && tt.has(e))) ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsx)(a, {
					row: !0,
					findable: !0,
					summary: V("manage:taskCenter.technicalDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, J.jsx)(je, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: V("manage:taskCenter.taskTechnicalDetails", { task: H(e) })
					})
				})
			}) : null
		]
	});
}
function at({ run: t, followups: n, followupTotal: r }) {
	let i = t.progress_total || 0, a = t.progress_current || 0, o = t.control?.state, s = o && o !== "running", c = s ? rt[o] : ye(t) || V("manage:taskCenter.inProgress"), l = i > 0 ? V("manage:taskCenter.progressItems", { progress: R(a, i) }) : "", u = `${o || t.status}:${t.progress_params?.stage || t.progress_code || ""}`, d = /* @__PURE__ */ (0, J.jsx)(E, {
		phase: u,
		children: c
	}), f = M(t.elapsed_seconds), p = [w[t.trigger] || t.trigger, f && V("manage:taskCenter.runningFor", { elapsed: f })].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: t,
		meta: p,
		followups: n,
		followupTotal: r,
		progress: s && !(i > 0) ? /* @__PURE__ */ (0, J.jsx)("p", {
			"data-copy-key": `tasks.control.state.${o}`,
			className: "text-caption-1-regular text-text-secondary",
			children: c
		}) : /* @__PURE__ */ (0, J.jsx)(T, {
			embedded: !0,
			kind: D(t.task_key, String(t.progress_params?.stage || "") || null),
			label: l ? `${c} · ${l}` : c,
			labelContent: l ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
				d,
				" · ",
				/* @__PURE__ */ (0, J.jsx)(e, { value: l })
			] }) : d,
			value: Math.min(a, i),
			total: i
		})
	});
}
function ot({ run: e, followups: t, runs: n, latest: i, followupTotal: o, followupFailed: s = 0, followupCancelled: c = 0 }) {
	let l = !!(n && n.length > 1 && o), f = l ? [V("manage:taskCenter.processedTotal", { count: o }), s ? V("manage:taskCenter.failedCount", { count: s }) : ""].filter(Boolean) : we(U(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== B(e) && t !== z(B(e))), p = Te(e), m = ve(e, i), h = M(e.elapsed_seconds), g = n && n.length > 1 ? n[n.length - 1] : void 0, _ = (g ? [
		w[e.trigger] || e.trigger,
		V("manage:taskCenter.lastRuns", { count: n.length }),
		`${L(g.finished_at)} – ${L(e.finished_at)}`
	] : [
		w[e.trigger] || e.trigger,
		L(e.finished_at),
		h && V("manage:taskCenter.took", { elapsed: h })
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsxs)(Z, {
		run: e,
		meta: _,
		error: B(e),
		followups: t,
		followupTotal: o,
		controlled: n,
		issues: p.length ? /* @__PURE__ */ (0, J.jsx)(a, {
			row: !0,
			findable: !0,
			summary: V("manage:taskCenter.issueDetailsCount", { count: p.length }),
			contentClassName: "pb-5",
			children: /* @__PURE__ */ (0, J.jsx)(Ne, {
				label: V("manage:taskCenter.issueDetails"),
				children: /* @__PURE__ */ (0, J.jsx)("ul", {
					className: "flex min-w-0 flex-col whitespace-normal",
					"data-task-issues": "",
					children: p.map((e, t) => /* @__PURE__ */ (0, J.jsx)(u, {
						title: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [e.label, e.provider || e.kind ? /* @__PURE__ */ (0, J.jsxs)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: [" · ", [e.provider, e.kind].filter(Boolean).join(" · ")]
						}) : null] }),
						children: /* @__PURE__ */ (0, J.jsx)(Pe, {
							text: e.error,
							className: "text-caption-1-regular text-text-secondary"
						})
					}, `${e.source}-${t}`))
				})
			})
		}) : void 0,
		badge: c && e.status === "succeeded" ? /* @__PURE__ */ (0, J.jsx)(r, {
			color: "rose",
			children: /* @__PURE__ */ (0, J.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${c === o ? "all" : "partial"}`,
				children: V(c === o ? "manage:taskCenter.followupsCanceled" : "manage:taskCenter.someFollowupsCanceled")
			})
		}) : l && s ? /* @__PURE__ */ (0, J.jsx)(r, {
			color: "yellow",
			children: V("manage:taskStatus.issuesFound")
		}) : void 0,
		children: [
			c ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: V("manage:taskCenter.followupsCanceledCount", { count: c })
			}) : null,
			f.length === 1 ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f[0]
			}) : f.length ? /* @__PURE__ */ (0, J.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f.map((e, t) => /* @__PURE__ */ (0, J.jsx)("li", { children: e }, t))
			}) : null,
			!p.length && F(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: V("manage:taskCenter.noIssueDetails")
			}) : null,
			m ? /* @__PURE__ */ (0, J.jsx)(d, {
				href: m.href,
				size: "small",
				trailingIcon: fe,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function st({ runs: t, followups: n, counts: i }) {
	let a = t[0], o = t[t.length - 1], s = P(i, t), c = Math.max(s.total, n.length), l = s.total ? s.settled : n.filter((e) => !I(e)).length, u = s.total ? s.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, d = V("manage:taskCenter.processedProgress", { progress: R(l, c) }), f = u ? V("manage:taskCenter.failedSuffix", { count: u }) : "", p = [
		w[a.trigger] || a.trigger,
		t.length > 1 ? V("manage:taskCenter.batches", { count: t.length }) : "",
		V("manage:taskCenter.startedAt", { time: L(o.started_at || o.finished_at) })
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: a,
		meta: p,
		followups: n,
		followupTotal: c,
		resourceActive: !0,
		controlled: t,
		badge: a.control ? /* @__PURE__ */ (0, J.jsx)(X, { run: a }) : /* @__PURE__ */ (0, J.jsx)(r, {
			color: "blue",
			children: V("manage:taskStatus.running")
		}),
		progress: /* @__PURE__ */ (0, J.jsx)(T, {
			embedded: !0,
			kind: D(a.task_key),
			value: l,
			total: c,
			label: d + f,
			labelContent: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(e, { value: d }), f] })
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, q.useId)();
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, J.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, paginate: t = !0, children: n }) {
	let [r, a] = (0, q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), o = q.Children.toArray(n), { pageSize: s } = r, c = Math.min(r.pageIndex, Math.max(0, Math.ceil(o.length / s) - 1));
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t ? o.slice(c * s, (c + 1) * s) : o
	}), t ? /* @__PURE__ */ (0, J.jsx)(i, {
		label: V("manage:taskCenter.taskList"),
		total: o.length,
		pagination: {
			...r,
			pageIndex: c
		},
		onChange: a
	}) : null] });
}
function ct() {
	let [e, t] = (0, q.useState)(1), [n, r] = (0, q.useState)(20), a = G({
		queryKey: e === 1 && n === 20 ? C : [
			...C,
			"page",
			e,
			n
		],
		queryFn: ({ signal: t }) => oe(t, e, n),
		refetchInterval: Qe,
		placeholderData: (e) => e
	}), [c, l] = (0, q.useState)(a.data);
	a.data && a.data !== c && l(a.data);
	let u = a.data || c, d = a.error ? N(a.error) : "";
	if (!u) return /* @__PURE__ */ (0, J.jsx)(Me, { children: /* @__PURE__ */ (0, J.jsx)(h, {
		tone: "error",
		children: d || V("manage:taskCenter.loadFailed")
	}) });
	let f = u.finished || [], p = u.working_parents || [], m = [
		...u.running || [],
		...u.skipped || [],
		...f,
		...p
	], g = de(m), _ = new Set(m.map((e) => e.id)), v = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && _.has(e.parent_run_id))), y = v(f), b = u.followup_counts || {}, x = (e) => e.flatMap((e) => g.get(e.id) || []), S = [...y, ...v(p)].filter((e) => P(b, [e]).active > 0 || g.get(e.id)?.some(I)).sort((e, t) => t.id - e.id), w = v(u.running || []), T = v(u.skipped || []), E = y.filter((e) => !S.includes(e) && !T.some((t) => t.id === e.id)), ee = (e) => (g.get(e.id) || []).every((e) => e.status === "succeeded" && !F(e)) && P(b, [e]).failed === 0, te = le(E, (e) => me(e) && (ee(e) || et.has(e.task_key))), D = ce(S, (e) => e.control?.state || "").sort((e, t) => t.run.id - e.run.id), O = he(m), k = !w.length && !S.length && !T.length && !E.length;
	return /* @__PURE__ */ (0, J.jsxs)(Me, { children: [
		d ? /* @__PURE__ */ (0, J.jsx)(h, {
			tone: "error",
			children: d
		}) : null,
		/* @__PURE__ */ (0, J.jsx)(He, {}),
		u.available === !1 ? /* @__PURE__ */ (0, J.jsx)(h, {
			tone: "warning",
			children: u.message || V("manage:taskCenter.tableNotReady")
		}) : null,
		/* @__PURE__ */ (0, J.jsx)(Le, {}),
		k ? /* @__PURE__ */ (0, J.jsx)(s, {
			icon: De,
			title: V("manage:taskCenter.emptyTitle"),
			children: V("manage:taskCenter.emptyText")
		}) : /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
			/* @__PURE__ */ (0, J.jsx)(Q, {
				title: V("manage:taskCenter.inProgress"),
				children: w.length || S.length ? /* @__PURE__ */ (0, J.jsxs)($, {
					live: !0,
					children: [w.map((e) => /* @__PURE__ */ (0, J.jsx)(at, {
						run: e,
						followups: g.get(e.id),
						followupTotal: P(b, [e]).total
					}, e.id)), D.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, J.jsx)(st, {
						runs: t,
						followups: x(t),
						counts: b
					}, e.id))]
				}) : /* @__PURE__ */ (0, J.jsx)(h, {
					tone: "neutral",
					children: V("manage:taskCenter.noneRunning")
				})
			}),
			T.length ? /* @__PURE__ */ (0, J.jsx)(Q, {
				title: V("manage:taskCenter.skipped"),
				children: /* @__PURE__ */ (0, J.jsx)($, { children: T.map((e) => /* @__PURE__ */ (0, J.jsx)(ot, {
					run: e,
					latest: O.has(e.id),
					followups: g.get(e.id)
				}, e.id)) })
			}) : null,
			E.length || u.finished_total ? /* @__PURE__ */ (0, J.jsxs)(Q, {
				title: V("manage:taskCenter.recentlyCompleted"),
				children: [E.length ? /* @__PURE__ */ (0, J.jsx)($, {
					paginate: !1,
					children: te.map(({ run: e, runs: t }) => {
						let n = P(b, t);
						return /* @__PURE__ */ (0, J.jsx)(ot, {
							run: e,
							runs: t,
							latest: O.has(e.id),
							followups: x(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					})
				}) : null, /* @__PURE__ */ (0, J.jsx)(i, {
					label: V("manage:taskCenter.recentlyCompleted"),
					total: u.finished_total ?? y.length,
					unit: V("manage:taskCenter.footerUnit"),
					pageUnit: V("manage:taskCenter.footerPageUnit"),
					pagination: {
						pageIndex: (u.finished_page || e) - 1,
						pageSize: n
					},
					onChange: (i) => {
						i.pageIndex + 1 === e && i.pageSize === n ? a.refetch() : (t(i.pageIndex + 1), r(i.pageSize));
					}
				})]
			}) : null
		] }),
		/* @__PURE__ */ (0, J.jsx)(o, {})
	] });
}
export { ct as ActivityPage };

//# debugId=bf618972-b59d-47b6-aa94-646404e8a9af