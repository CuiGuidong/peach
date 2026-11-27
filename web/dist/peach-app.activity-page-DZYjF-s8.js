(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "607dd8de-5c90-4d4a-8196-b6f5f35281bd", e._sentryDebugIdIdentifier = "sentry-dbid-607dd8de-5c90-4d4a-8196-b6f5f35281bd");
	} catch {}
})();
import { ActionSpinner as e, AnimatedNumber as t, BACKGROUND_ISSUES_KEY as n, Button as r, Bx as i, Chip as a, DataTableFooter as o, Disclosure as s, DownloadsPanel as c, EmptyState as l, Gg as u, HN as d, IndexSearch as f, IssueRow as p, LinkButton as m, Lo as h, Ma as g, NameLink as _, Note as v, OV as y, Pf as b, ProcessingMode as x, QueryErrorNote as S, RB as C, RUNNING_POLL_MS as w, Rk as T, Su as E, TASKS_KEY as D, TRIGGER_LABELS as O, TaskProgress as k, TaskStage as ee, Xl as te, __toESM as A, activityKind as j, apiGet as ne, apiSend as re, busyProps as M, cardClass as ie, codedText as N, confirmModal as ae, controlTask as oe, cx as se, elapsedText as ce, errorMessage as P, fetchBackgroundIssues as le, fetchTasks as ue, fmtSize as de, foldByKind as fe, foldRoutine as pe, followupDetail as me, followupTally as F, groupFollowups as he, hasResultProblems as I, i2 as L, interfaceLanguage as ge, isActive as R, isRoutine as _e, latestOfKind as ve, momentText as z, oe as ye, pollInterval as be, problemDestination as xe, progressLabel as Se, progressText as Ce, readableErrorHeadline as B, require_jsx_runtime as we, require_react as Te, runError as V, setTaskSpeed as Ee, statusLabel as De, summaryItems as Oe, t as H, taskIssues as ke, taskName as U, taskRunSectionsSkeleton as Ae, taskSubject as je, um as Me, uo as Ne, useMutation as W, useMutationState as Pe, useQuery as G, useQueryClient as Fe, vl as Ie, withBackoff as K } from "./peach-app.js";
import { CodeBlock as Le } from "./peach-app.code-block-BdQewVJ0.js";
import { Page as Re } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as ze, ErrorExcerpt as Be } from "./peach-app.error-excerpt-Ugft6I5o.js";
// src/react/activity/background-issues.tsx
var q = /* @__PURE__ */ A(Te(), 1), J = we(), Ve = K(() => 3e4);
function He() {
	let e = (0, q.useId)(), t = G({
		queryKey: n,
		queryFn: ({ signal: e }) => le(e),
		refetchInterval: Ve
	}), r = t.data?.issues || [];
	return !r.length && !t.error ? null : /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, J.jsx)("h3", {
				id: e,
				className: "text-title-2-medium text-text-primary",
				children: H("manage:backgroundIssues.title")
			}),
			t.error ? /* @__PURE__ */ (0, J.jsx)(S, {
				titleKey: "manage:backgroundIssues.loadFailed",
				query: t
			}) : null,
			r.length ? /* @__PURE__ */ (0, J.jsx)("ul", {
				className: "flex min-w-0 flex-col gap-3",
				children: r.map((e) => /* @__PURE__ */ (0, J.jsx)("li", { children: /* @__PURE__ */ (0, J.jsx)(Ue, { issue: e }) }, e.key))
			}) : null
		]
	});
}
function Ue({ issue: e }) {
	let t = Fe(), i = W({
		mutationFn: () => re(e.retry, {}),
		onSuccess: () => {
			t.invalidateQueries({ queryKey: n });
		}
	}), a = e.since ? H("manage:backgroundIssues.since", { time: z(e.since) }) : H("manage:backgroundIssues.detectedAt", { time: z(e.noticed_at) });
	return /* @__PURE__ */ (0, J.jsx)(v, {
		tone: "error",
		title: N(e, "title"),
		action: /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, J.jsx)(m, {
				href: e.href,
				size: "small",
				trailingIcon: L,
				children: N(e, "link_label")
			}), e.retry ? /* @__PURE__ */ (0, J.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: !e.retry_available,
				...M(i.isPending),
				onClick: () => i.mutate(),
				children: H("manage:shared.retryNow")
			}) : null]
		}),
		children: i.error ? H("manage:backgroundIssues.retryFailed", {
			moment: a,
			error: P(i.error)
		}) : a
	});
}
// src/react/activity/task-controls.tsx
var Y = ["task-control"], We = {
	pause: y,
	resume: u,
	cancel: d
}, Ge = {
	pause: H("manage:shared.pause"),
	resume: H("manage:shared.resume"),
	cancel: H("manage:taskControls.cancelTask")
}, Ke = {
	pause: H("manage:taskControls.pauseFollowups"),
	resume: H("manage:taskControls.resumeFollowups"),
	cancel: H("manage:taskControls.cancelFollowups")
}, qe = (0, q.createContext)(null);
function Je({ command: e, error: t, className: n }) {
	let r = (e.followups ? Ke : Ge)[e.action];
	return /* @__PURE__ */ (0, J.jsx)(v, {
		tone: "error",
		className: n,
		title: H("manage:taskControls.actionFailed", {
			task: e.label,
			action: r
		}),
		children: P(t)
	});
}
function Ye({ children: e }) {
	let [t, n] = (0, q.useState)(() => /* @__PURE__ */ new Set()), r = (0, q.useCallback)((e) => (n((t) => new Set(t).add(e)), () => n((t) => {
		let n = new Set(t);
		return n.delete(e), n;
	})), []), i = Pe({
		filters: { mutationKey: Y },
		select: (e) => ({
			id: e.mutationId,
			command: e.state.variables,
			status: e.state.status,
			error: e.state.error
		})
	}), a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = e.command;
		if (!t) continue;
		let n = a.get(t.id);
		(!n || n.id < e.id) && a.set(t.id, {
			...e,
			command: t
		});
	}
	let o = new Map([...a].filter(([, e]) => e.status === "error")), s = [...o.values()].filter(({ command: e }) => e.action === "cancel" || !t.has(e.id));
	return /* @__PURE__ */ (0, J.jsxs)(qe.Provider, {
		value: {
			failed: o,
			registerInline: r
		},
		children: [s.length ? /* @__PURE__ */ (0, J.jsx)("div", {
			"data-task-control-feedback": "",
			className: "flex min-w-0 flex-col gap-2",
			children: s.map((e) => /* @__PURE__ */ (0, J.jsx)(Je, { ...e }, e.command.id))
		}) : null, e]
	});
}
function Xe({ run: t, runs: n = [t], visible: i = !0 }) {
	let a = (0, q.useContext)(qe), o = Fe(), s = (0, q.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), c = () => {
		o.invalidateQueries({ queryKey: D });
	}, l = async (e) => {
		let t = null;
		for (let r of n) try {
			await oe(r.id, e.action);
		} catch (e) {
			t ??= e;
		}
		if (t !== null) throw t;
	}, u = W({
		mutationKey: [
			...Y,
			t.id,
			"change"
		],
		mutationFn: l,
		onSettled: () => {
			s.current.change = !1, c();
		}
	}), d = W({
		mutationKey: [
			...Y,
			t.id,
			"cancel"
		],
		mutationFn: l,
		onSettled: () => {
			s.current.cancel = !1, c();
		}
	}), f = W({
		mutationFn: async (e) => {
			let t = (await Promise.allSettled(n.map((t) => Ee(t.id, e)))).find((e) => e.status === "rejected");
			if (t?.status === "rejected") throw t.reason;
		},
		onSettled: c
	}), p = (t.control?.actions || []).filter((e) => e !== "set_speed"), m = !!(t.control?.actions.includes("set_speed") && t.control.speed_mode), h = !R(t), g = d.isPending || d.isSuccess, _ = !!p.length || m, y = a?.failed.get(t.id), b = i && _, S = a?.registerInline;
	if ((0, q.useLayoutEffect)(() => {
		if (b) return S?.(t.id);
	}, [
		b,
		S,
		t.id
	]), !_) return null;
	let C = (e) => {
		let r = {
			id: t.id,
			label: U(t),
			action: e,
			followups: h
		};
		if (e === "cancel") {
			if (s.current.cancel || s.current.confirmation || d.isSuccess) return;
			s.current.confirmation = !0, ae({
				title: H(h ? "manage:taskControls.cancelFollowupsTitle" : "manage:taskControls.cancelTaskTitle", { task: U(t) }),
				body: h ? n.length > 1 ? H("manage:taskControls.cancelBatchFollowupsBody", { count: n.length }) : H("manage:taskControls.cancelFollowupsBody") : H("manage:taskControls.cancelTaskBody"),
				confirmLabel: H(h ? "manage:taskControls.cancelFollowups" : "manage:shared.cancelTask"),
				danger: !0,
				onConfirm: async () => (s.current.cancel = !0, await d.mutateAsync(r))
			}).finally(() => {
				s.current.confirmation = !1;
			});
		} else {
			if (s.current.change || s.current.cancel || g) return;
			s.current.change = !0, u.mutate(r);
		}
	};
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "ml-auto min-w-0",
		"data-task-controls": t.id,
		children: [
			/* @__PURE__ */ (0, J.jsxs)("div", {
				role: "group",
				"aria-label": H(h ? "manage:taskControls.followupsGroupLabel" : "manage:taskControls.groupLabel", { task: U(t) }),
				className: "flex flex-wrap items-center justify-end gap-2",
				children: [m ? /* @__PURE__ */ (0, J.jsx)(x, {
					value: t.control.speed_mode,
					busy: f.isPending || g,
					animate: t.control?.state === "running",
					onChange: (e) => f.mutate(e)
				}) : null, p.map((t) => {
					let n = (h ? Ke : Ge)[t], i = t === "cancel" ? d.isPending : u.isPending && u.variables?.action === t, a = t === "cancel" ? g : u.isPending || g;
					return /* @__PURE__ */ (0, J.jsx)(r, {
						type: "button",
						variant: "secondary",
						size: "small",
						leadingIcon: i ? e : We[t],
						"aria-label": n,
						title: n,
						...M(i),
						"aria-disabled": a || void 0,
						onClick: () => C(t),
						children: /* @__PURE__ */ (0, J.jsx)("span", {
							"data-copy-key": `tasks.control.action.${h ? "followups." : ""}${t}`,
							children: n
						})
					}, t);
				})]
			}),
			b && y && y.command.action !== "cancel" ? /* @__PURE__ */ (0, J.jsx)(Je, {
				...y,
				className: "mt-2"
			}) : null,
			f.error ? /* @__PURE__ */ (0, J.jsx)(v, {
				tone: "error",
				children: P(f.error)
			}) : null
		]
	});
}
// src/react/activity/task-icon.tsx
var Ze = new Map([
	[i, [
		"follow-check",
		"follow-resolve",
		"follow-creator",
		"follow-evidence-reclaim",
		"follow-backfill",
		"feed-check",
		"feed-scrape",
		"feed-cover"
	]],
	[T, [
		"library-processing",
		"organize",
		"batch",
		"resource-scan",
		"resource-apply",
		"seed-import"
	]],
	[Ie, [
		"scrape-codes",
		"jav-discovery-metadata",
		"want-scrape",
		"upgrade-library"
	]],
	[g, [
		"scraping-cover",
		"jav-covers",
		"code-samples",
		"timeline-thumbnails",
		"entity-avatar",
		"cover-artwork-repair"
	]],
	[b, [
		"performer-profile",
		"performer-alias",
		"creator-identity",
		"studio-mark"
	]],
	[te, ["media-repair", "mp4-header-repair"]],
	[Me, [
		"link-check",
		"link-prune",
		"source-check"
	]],
	[ye, ["download-postprocess", "want-search"]],
	[h, ["taste-refresh"]],
	[C, [
		"upgrade-repairs",
		"diagnostic-export",
		"amane-bridge",
		"face-models",
		"ledger-backup",
		"ledger-restore"
	]]
].flatMap(([e, t]) => t.map((t) => [t, e])));
function Qe({ taskKey: e, className: t }) {
	let n = Ze.get(e) ?? E;
	return /* @__PURE__ */ (0, J.jsx)(n, {
		className: t,
		"aria-hidden": !0
	});
}
// src/react/activity/resource-chip.tsx
var $e = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function et({ color: e, high: t, ...n }) {
	return t ? /* @__PURE__ */ (0, J.jsx)("span", {
		...n,
		className: se("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", $e[e])
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		variant: "caption",
		color: e,
		...n
	});
}
// src/react/activity/task-resources.tsx
var tt = {
	cpu: {
		name: "CPU",
		color: "blue"
	},
	gpu: {
		name: "GPU",
		color: "purple"
	},
	network: {
		name: H("manage:taskResources.network"),
		color: "cyan"
	}
};
function nt(e) {
	return e.state === "sampling" ? H("manage:taskResources.sampling") : e.via === "cloud" ? H("manage:taskResources.viaCloudDrive") : H("manage:taskResources.unavailable");
}
function rt(e, t) {
	return t === 0 ? H("manage:taskResources.idle") : e === "network" ? `${de(t)}/s` : `${t.toLocaleString(ge, { maximumFractionDigits: 1 })}%`;
}
function it({ run: e, active: n = R(e) || !!e.control }) {
	if (!n || !e.resources) return null;
	let r = e.resources;
	return /* @__PURE__ */ (0, J.jsx)("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let n = r[e], i = tt[e], a = e === "network" ? r.network.bytes_per_second : r[e].percent, o = n.state === "ready" && a !== null, s = o && n.high, c = o ? rt(e, a) : nt(n), l = [n.reason ? N(n, "reason") : "", s ? H("manage:taskResources.highUsage") : ""].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, J.jsx)(et, {
				color: i.color,
				high: s,
				tabIndex: l ? 0 : void 0,
				title: l || void 0,
				"data-task-resource": e,
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
						o && a !== 0 ? /* @__PURE__ */ (0, J.jsx)(t, { value: c }) : /* @__PURE__ */ (0, J.jsx)("span", { children: c })
					]
				})
			}, e);
		})
	});
}
// src/react/activity/activity-page.tsx
var at = K(be), ot = (e) => K(() => e ? w : !1), st = /* @__PURE__ */ new Set(["upgrade-repairs"]), ct = /* @__PURE__ */ new Set(["asset_id", "name"]), lt = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, ut = {
	running: H("manage:taskStatus.running"),
	pausing: H("manage:taskStatus.pausing"),
	paused: H("manage:taskStatus.paused"),
	cancelling: H("manage:taskStatus.canceling")
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !R(e))) return /* @__PURE__ */ (0, J.jsx)(a, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, J.jsx)("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: ut[t]
		})
	});
	let n = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", r = n || e.status === "succeeded" && I(e);
	return /* @__PURE__ */ (0, J.jsx)(a, {
		color: r ? "yellow" : lt[e.status] ?? "neutral",
		children: n ? H("manage:taskStatus.partial") : r ? H("manage:taskStatus.issuesFound") : De(e.status)
	});
}
function dt({ rows: e, visible: t }) {
	let [n, r] = (0, q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), { pageSize: i } = n, a = Math.min(n.pageIndex, Math.max(0, Math.ceil(e.length / i) - 1));
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.slice(a * i, (a + 1) * i).map((e) => {
			let n = me(e);
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
								/* @__PURE__ */ (0, J.jsx)(Qe, {
									taskKey: e.task_key,
									className: "size-4 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: U(e)
								}),
								/* @__PURE__ */ (0, J.jsx)(X, { run: e }),
								n ? /* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: n
								}) : null
							]
						}), /* @__PURE__ */ (0, J.jsx)(Xe, {
							run: e,
							visible: t
						})]
					}),
					/* @__PURE__ */ (0, J.jsx)(it, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, J.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, J.jsx)(s, {
							findable: !0,
							summary: H("manage:taskCenter.technicalDetails"),
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, J.jsx)(Le, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: H("manage:taskCenter.taskTechnicalDetails", { task: U(e) })
							})
						})
					}) : null
				]
			}, e.id);
		})
	}), /* @__PURE__ */ (0, J.jsx)(o, {
		label: H("manage:taskCenter.taskDetails"),
		total: e.length,
		pagination: {
			...n,
			pageIndex: a
		},
		onChange: r
	})] });
}
function Z({ run: e, meta: t, progress: n, children: r, error: i, issues: a, followups: o, followupTotal: c = 0, badge: l, resourceActive: u, controlled: d }) {
	let [f, p] = (0, q.useState)(!!o?.some(R)), m = (d || [e]).map((e) => e.id), h = c > (o?.length || 0), g = G({
		queryKey: [
			...D,
			"followups",
			m
		],
		enabled: f && h,
		queryFn: async ({ signal: e }) => (await Promise.all(m.map((t) => ne(`/api/tasks/${t}`, e)))).flatMap((e) => e.followups),
		refetchInterval: ot(u)
	}), v = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), y = [...(h ? g.data : void 0) || o || []].sort((e, t) => v(t) - v(e) || t.id - e.id), b = y.length, x = Math.max(o?.length || 0, c), C = je(e), w = String(i || "").trim(), T = B(w);
	return /* @__PURE__ */ (0, J.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: ie({
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
								/* @__PURE__ */ (0, J.jsx)(Qe, {
									taskKey: e.task_key,
									className: "size-5 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, J.jsx)("strong", {
									className: "min-w-0 break-words text-title-3-medium text-text-primary",
									children: U(e)
								}),
								l ?? /* @__PURE__ */ (0, J.jsx)(X, { run: e })
							]
						}), /* @__PURE__ */ (0, J.jsx)(Xe, {
							run: e,
							runs: d
						})]
					}),
					n,
					/* @__PURE__ */ (0, J.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ (0, J.jsx)(it, {
						run: e,
						active: u
					}),
					C ? /* @__PURE__ */ (0, J.jsx)(_, {
						href: C.href,
						"data-task-subject": e.id,
						title: C.label,
						className: "min-w-0 max-w-full self-start truncate text-text-primary",
						children: C.label
					}) : null,
					T ? /* @__PURE__ */ (0, J.jsx)("p", {
						"data-task-error": "",
						className: "text-caption-1-regular text-text-secondary wrap-anywhere",
						children: T
					}) : null,
					r
				]
			}),
			a ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: a
			}) : null,
			T && w !== T ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsx)(s, {
					row: !0,
					findable: !0,
					summary: H("manage:taskCenter.errorDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, J.jsx)(ze, {
						label: H("manage:taskCenter.taskErrorDetails", { task: U(e) }),
						children: w
					})
				})
			}) : null,
			x ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsxs)(s, {
					row: !0,
					summary: H("manage:taskCenter.taskDetailsCount", { count: x }),
					contentClassName: "pb-5",
					isOpen: f,
					onOpenChange: p,
					children: [
						g.error ? /* @__PURE__ */ (0, J.jsx)(S, {
							titleKey: "manage:taskCenter.detailLoadFailed",
							query: g
						}) : null,
						b < x ? /* @__PURE__ */ (0, J.jsx)("p", {
							className: "text-caption-1-regular text-text-secondary",
							children: H("manage:taskCenter.showingCount", { count: b })
						}) : null,
						/* @__PURE__ */ (0, J.jsx)(dt, {
							rows: y,
							visible: f
						})
					]
				})
			}) : null,
			Object.keys(e.result_summary || {}).some((e) => !(C && ct.has(e))) ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, J.jsx)(s, {
					row: !0,
					findable: !0,
					summary: H("manage:taskCenter.technicalDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, J.jsx)(Le, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: H("manage:taskCenter.taskTechnicalDetails", { task: U(e) })
					})
				})
			}) : null
		]
	});
}
function ft({ run: e, followups: n, followupTotal: r }) {
	let i = e.progress_total || 0, a = e.progress_current || 0, o = e.control?.state, s = o && o !== "running", c = s ? ut[o] : Se(e) || H("manage:taskCenter.inProgress"), l = i > 0 ? H("manage:taskCenter.progressItems", { progress: Ce(a, i) }) : "", u = `${o || e.status}:${e.progress_params?.stage || e.progress_code || ""}`, d = /* @__PURE__ */ (0, J.jsx)(ee, {
		phase: u,
		children: c
	}), f = ce(e.elapsed_seconds), p = [O[e.trigger] || e.trigger, f && H("manage:taskCenter.runningFor", { elapsed: f })].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: e,
		meta: p,
		followups: n,
		followupTotal: r,
		progress: s && !(i > 0) ? /* @__PURE__ */ (0, J.jsx)("p", {
			"data-copy-key": `tasks.control.state.${o}`,
			className: "text-caption-1-regular text-text-secondary",
			children: c
		}) : /* @__PURE__ */ (0, J.jsx)(k, {
			embedded: !0,
			kind: j(e.task_key, String(e.progress_params?.stage || "") || null),
			label: l ? `${c} · ${l}` : c,
			labelContent: l ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
				d,
				" · ",
				/* @__PURE__ */ (0, J.jsx)(t, { value: l })
			] }) : d,
			value: Math.min(a, i),
			total: i
		})
	});
}
function pt({ run: e, followups: t, runs: n, latest: r, followupTotal: i, followupFailed: o = 0, followupCancelled: c = 0 }) {
	let l = !!(n && n.length > 1 && i), u = l ? [H("manage:taskCenter.processedTotal", { count: i }), o ? H("manage:taskCenter.failedCount", { count: o }) : ""].filter(Boolean) : Oe(je(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== V(e) && t !== B(V(e))), d = ke(e), f = xe(e, r), h = ce(e.elapsed_seconds), g = n && n.length > 1 ? n[n.length - 1] : void 0, _ = (g ? [
		O[e.trigger] || e.trigger,
		H("manage:taskCenter.lastRuns", { count: n.length }),
		`${z(g.finished_at)} – ${z(e.finished_at)}`
	] : [
		O[e.trigger] || e.trigger,
		z(e.finished_at),
		h && H("manage:taskCenter.took", { elapsed: h })
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsxs)(Z, {
		run: e,
		meta: _,
		error: V(e),
		followups: t,
		followupTotal: i,
		controlled: n,
		issues: d.length ? /* @__PURE__ */ (0, J.jsx)(s, {
			row: !0,
			findable: !0,
			summary: H("manage:taskCenter.issueDetailsCount", { count: d.length }),
			contentClassName: "pb-5",
			children: /* @__PURE__ */ (0, J.jsx)(ze, {
				label: H("manage:taskCenter.issueDetails"),
				children: /* @__PURE__ */ (0, J.jsx)("ul", {
					className: "flex min-w-0 flex-col whitespace-normal",
					"data-task-issues": "",
					children: d.map((e, t) => /* @__PURE__ */ (0, J.jsx)(p, {
						title: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [e.label, e.provider || e.kind ? /* @__PURE__ */ (0, J.jsxs)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: [" · ", [e.provider, e.kind].filter(Boolean).join(" · ")]
						}) : null] }),
						children: /* @__PURE__ */ (0, J.jsx)(Be, {
							text: e.error,
							className: "text-caption-1-regular text-text-secondary"
						})
					}, `${e.source}-${t}`))
				})
			})
		}) : void 0,
		badge: c && e.status === "succeeded" ? /* @__PURE__ */ (0, J.jsx)(a, {
			color: "rose",
			children: /* @__PURE__ */ (0, J.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${c === i ? "all" : "partial"}`,
				children: H(c === i ? "manage:taskCenter.followupsCanceled" : "manage:taskCenter.someFollowupsCanceled")
			})
		}) : l && o ? /* @__PURE__ */ (0, J.jsx)(a, {
			color: "yellow",
			children: H("manage:taskStatus.issuesFound")
		}) : void 0,
		children: [
			c ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: H("manage:taskCenter.followupsCanceledCount", { count: c })
			}) : null,
			u.length === 1 ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: u[0]
			}) : u.length ? /* @__PURE__ */ (0, J.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: u.map((e, t) => /* @__PURE__ */ (0, J.jsx)("li", { children: e }, t))
			}) : null,
			!d.length && I(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: H("manage:taskCenter.noIssueDetails")
			}) : null,
			f ? /* @__PURE__ */ (0, J.jsx)(m, {
				href: f.href,
				size: "small",
				trailingIcon: L,
				className: "self-start",
				children: f.label
			}) : null
		]
	});
}
function mt({ runs: e, followups: n, counts: r }) {
	let i = e[0], o = e[e.length - 1], s = F(r, e), c = Math.max(s.total, n.length), l = s.total ? s.settled : n.filter((e) => !R(e)).length, u = s.total ? s.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, d = H("manage:taskCenter.processedProgress", { progress: Ce(l, c) }), f = u ? H("manage:taskCenter.failedSuffix", { count: u }) : "", p = [
		O[i.trigger] || i.trigger,
		e.length > 1 ? H("manage:taskCenter.batches", { count: e.length }) : "",
		H("manage:taskCenter.startedAt", { time: z(o.started_at || o.finished_at) })
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: i,
		meta: p,
		followups: n,
		followupTotal: c,
		resourceActive: !0,
		controlled: e,
		badge: i.control ? /* @__PURE__ */ (0, J.jsx)(X, { run: i }) : /* @__PURE__ */ (0, J.jsx)(a, {
			color: "blue",
			children: H("manage:taskStatus.running")
		}),
		progress: /* @__PURE__ */ (0, J.jsx)(k, {
			embedded: !0,
			kind: j(i.task_key),
			value: l,
			total: c,
			label: d + f,
			labelContent: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(t, { value: d }), f] })
		})
	});
}
function Q({ title: e, action: t, children: n }) {
	let r = (0, q.useId)();
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": r,
		className: "flex min-w-0 flex-col gap-3",
		children: [t ? /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, J.jsx)("h3", {
				id: r,
				className: "text-title-2-medium text-text-primary",
				children: e
			}), t]
		}) : /* @__PURE__ */ (0, J.jsx)("h3", {
			id: r,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), n]
	});
}
function $({ live: e = !1, paginate: t = !0, children: n }) {
	let [r, i] = (0, q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), a = q.Children.toArray(n), { pageSize: s } = r, c = Math.min(r.pageIndex, Math.max(0, Math.ceil(a.length / s) - 1));
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t ? a.slice(c * s, (c + 1) * s) : a
	}), t ? /* @__PURE__ */ (0, J.jsx)(o, {
		label: H("manage:taskCenter.taskList"),
		total: a.length,
		pagination: {
			...r,
			pageIndex: c
		},
		onChange: i
	}) : null] });
}
function ht() {
	return /* @__PURE__ */ (0, J.jsx)(Re, { children: /* @__PURE__ */ (0, J.jsxs)(Ye, { children: [
		/* @__PURE__ */ (0, J.jsx)(He, {}),
		/* @__PURE__ */ (0, J.jsx)(gt, {}),
		/* @__PURE__ */ (0, J.jsx)(c, {})
	] }) });
}
function gt() {
	let [e, t] = (0, q.useState)(1), [n, r] = (0, q.useState)(20), [i, a] = (0, q.useState)(""), s = G({
		queryKey: e === 1 && n === 20 && !i ? D : [
			...D,
			"page",
			e,
			n,
			i
		],
		queryFn: ({ signal: t }) => ue(t, e, n, i),
		refetchInterval: at,
		placeholderData: (e) => e
	}), [c, u] = (0, q.useState)(s.data);
	s.data && s.data !== c && u(s.data);
	let d = s.data || c;
	if (!d) return s.error ? /* @__PURE__ */ (0, J.jsx)(S, {
		titleKey: "manage:taskCenter.loadFailed",
		query: s
	}) : /* @__PURE__ */ (0, J.jsx)("div", {
		role: "status",
		"aria-label": H("manage:manageSkeleton.loadingPage"),
		"data-skeleton": "",
		children: /* @__PURE__ */ (0, J.jsx)("div", {
			className: "flex flex-col gap-8",
			inert: !0,
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: Ae() }
		})
	});
	let p = d.finished || [], m = d.working_parents || [], h = [
		...d.running || [],
		...d.skipped || [],
		...p,
		...m
	], g = he(h), _ = new Set(h.map((e) => e.id)), y = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && _.has(e.parent_run_id))), b = y(p), x = d.followup_counts || {}, C = (e) => e.flatMap((e) => g.get(e.id) || []), w = [...b, ...y(m)].filter((e) => F(x, [e]).active > 0 || g.get(e.id)?.some(R)).sort((e, t) => t.id - e.id), T = y(d.running || []), E = y(d.skipped || []), O = b.filter((e) => !w.includes(e) && !E.some((t) => t.id === e.id)), k = (e) => (g.get(e.id) || []).every((e) => e.status === "succeeded" && !I(e)) && F(x, [e]).failed === 0, ee = pe(O, (e) => _e(e) && (k(e) || st.has(e.task_key))), te = fe(w, (e) => e.control?.state || "").sort((e, t) => t.run.id - e.run.id), A = ve(h), j = !T.length && !w.length && !E.length && !O.length && !i;
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
		s.error ? /* @__PURE__ */ (0, J.jsx)(S, {
			titleKey: "manage:taskCenter.loadFailed",
			query: s
		}) : null,
		d.available === !1 ? /* @__PURE__ */ (0, J.jsx)(v, {
			tone: "warning",
			children: d.message || H("manage:taskCenter.tableNotReady")
		}) : null,
		j ? /* @__PURE__ */ (0, J.jsx)(l, {
			icon: Ne,
			title: H("manage:taskCenter.emptyTitle"),
			children: H("manage:taskCenter.emptyText")
		}) : /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
			/* @__PURE__ */ (0, J.jsx)(Q, {
				title: H("manage:taskCenter.inProgress"),
				children: T.length || w.length ? /* @__PURE__ */ (0, J.jsxs)($, {
					live: !0,
					children: [T.map((e) => /* @__PURE__ */ (0, J.jsx)(ft, {
						run: e,
						followups: g.get(e.id),
						followupTotal: F(x, [e]).total
					}, e.id)), te.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, J.jsx)(mt, {
						runs: t,
						followups: C(t),
						counts: x
					}, e.id))]
				}) : /* @__PURE__ */ (0, J.jsx)(v, {
					tone: "neutral",
					children: H("manage:taskCenter.noneRunning")
				})
			}),
			E.length ? /* @__PURE__ */ (0, J.jsx)(Q, {
				title: H("manage:taskCenter.skipped"),
				children: /* @__PURE__ */ (0, J.jsx)($, { children: E.map((e) => /* @__PURE__ */ (0, J.jsx)(pt, {
					run: e,
					latest: A.has(e.id),
					followups: g.get(e.id)
				}, e.id)) })
			}) : null,
			O.length || d.finished_total || i ? /* @__PURE__ */ (0, J.jsxs)(Q, {
				title: H("manage:taskCenter.recentlyCompleted"),
				action: /* @__PURE__ */ (0, J.jsx)(f, {
					label: H("manage:taskCenter.search"),
					value: i,
					onQuery: (e) => {
						a(e), t(1);
					}
				}),
				children: [
					i && !d.finished_total ? /* @__PURE__ */ (0, J.jsx)(v, {
						tone: "neutral",
						children: H("manage:taskCenter.noMatches")
					}) : null,
					O.length ? /* @__PURE__ */ (0, J.jsx)($, {
						paginate: !1,
						children: ee.map(({ run: e, runs: t }) => {
							let n = F(x, t);
							return /* @__PURE__ */ (0, J.jsx)(pt, {
								run: e,
								runs: t,
								latest: A.has(e.id),
								followups: C(t),
								followupTotal: n.total,
								followupFailed: n.failed,
								followupCancelled: n.cancelled
							}, e.id);
						})
					}) : null,
					/* @__PURE__ */ (0, J.jsx)(o, {
						label: H("manage:taskCenter.recentlyCompleted"),
						total: d.finished_total ?? b.length,
						unit: H("manage:taskCenter.footerUnit"),
						pageUnit: H("manage:taskCenter.footerPageUnit"),
						pagination: {
							pageIndex: (d.finished_page || e) - 1,
							pageSize: n
						},
						onChange: (i) => {
							i.pageIndex + 1 === e && i.pageSize === n ? s.refetch() : (t(i.pageIndex + 1), r(i.pageSize));
						}
					})
				]
			}) : null
		] })
	] });
}
export { ht as ActivityPage };

//# debugId=607dd8de-5c90-4d4a-8196-b6f5f35281bd