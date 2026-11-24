(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8c541879-f307-43e4-b9b2-913711d76176", e._sentryDebugIdIdentifier = "sentry-dbid-8c541879-f307-43e4-b9b2-913711d76176");
	} catch {}
})();
import { ApiError as e, BC as t, Button as n, ButtonLink as r, Chip as i, DIAGNOSTICS_KEY as a, Disclosure as o, EmptyState as s, Fact as c, FactList as l, Fieldset as u, FieldsetTitle as d, Gg as f, Input as p, ItemLibrary as m, LOC as h, LinkButton as g, Note as _, Section as v, SettingsCard as y, SettingsSectionLabel as b, SiteMark as x, Stack as S, TaskProgress as C, __toESM as w, activityKind as T, apiGet as E, apiSend as D, busyProps as O, checkText$1 as k, codedText as A, configurationSection as ee, cx as j, diagnosticHeaders as te, diagnosticsSkeleton as ne, errorMessage as M, fetchDiagnostics as N, fmtDur as P, fmtSize as re, interfaceLanguage as ie, queryClient as ae, require_jsx_runtime as oe, require_react as se, settingsPath as ce, stageText as F, t as I, tl as le, useAction as L, useLibraryFilterOptions as ue, useLibraryTints as de, useQuery as R, withBackoff as z } from "./peach-app.js";
import { ErrorExcerpt as B } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { SectionToc as V } from "./peach-app.section-toc-hXoSYkI6.js";
import { useCheckReceipt as fe } from "./peach-app.use-check-receipt-CVw_ZYdx.js";
import { DataTable as pe } from "./peach-app.data-table-Dpm5jEso.js";
// src/react/diagnostics/health-list.tsx
var H = /* @__PURE__ */ w(se(), 1), U = oe(), W = (e) => e.title || e.name || e.code || I("manage:healthList.videoFallback", { id: e.id }), me = (e, t) => [[
	I("manage:shared.video"),
	I("manage:shared.code"),
	I("manage:shared.fileName"),
	I("manage:shared.library"),
	I("manage:shared.path"),
	I("manage:healthList.durationSeconds"),
	I("manage:healthList.sizeBytes")
], ...e.map((e) => [
	W(e),
	e.code ?? "",
	e.name,
	t(e),
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function he({ group: e, groupKey: r, openItem: i, receipt: a }) {
	let [c, l] = (0, H.useState)({}), u = JSON.stringify(c), d = R({
		queryKey: [
			"diagnostics-library",
			r,
			u,
			e
		],
		enabled: u !== "{}",
		queryFn: ({ signal: e }) => E(`/api/diagnostics/library?${new URLSearchParams({
			group: r,
			column_filters: u
		})}`, e),
		placeholderData: (e) => e
	}), p = u === "{}" ? e : d.data ?? e, v = ue(), y = L(), b = A(p, "label"), [x, C] = (0, H.useState)([]), w = de({ names: !0 }), T = (e) => w.get(e.library_id || "")?.name || h[e.location] || e.location, D = (e) => void y.run("copy", () => navigator.clipboard.writeText(me(e, T)), () => a(I("manage:healthList.copied"))), k = [
		{
			id: "title",
			label: I("manage:shared.video"),
			value: W,
			render: (e) => /* @__PURE__ */ (0, U.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, U.jsx)(g, {
					variant: "primary",
					title: W(e),
					"data-health-title": "",
					className: "max-w-full justify-start whitespace-normal text-left",
					onClick: () => i(e.id),
					children: /* @__PURE__ */ (0, U.jsx)("span", {
						className: "line-clamp-2 wrap-anywhere",
						children: W(e)
					})
				}), e.name && e.name !== W(e) ? /* @__PURE__ */ (0, U.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.name,
					className: "block min-w-0 text-caption-1-regular text-text-secondary",
					children: e.name
				}) : null]
			})
		},
		{
			id: "code",
			label: I("manage:shared.code"),
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ (0, U.jsx)("span", {
				className: "whitespace-nowrap",
				children: e.code || I("manage:shared.unrecognized")
			})
		},
		{
			id: "location",
			label: I("manage:shared.library"),
			width: 160,
			value: T,
			filter: {
				values: (e) => e.library_id || "none",
				option: (e) => v.get(e) ?? { label: e === "none" ? I("cleanup:shared.none") : e }
			},
			render: (e) => /* @__PURE__ */ (0, U.jsx)(m, {
				libraryId: e.library_id,
				location: e.location,
				fallback: I("manage:shared.notFound")
			})
		},
		{
			id: "path",
			label: I("manage:healthList.filePath"),
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ (0, U.jsx)("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || I("manage:shared.notFound")
			})
		},
		{
			id: "duration",
			label: I("manage:shared.duration"),
			width: 112,
			value: (e) => e.duration ?? 0,
			filter: {
				range: "duration",
				value: (e) => e.duration || null
			},
			render: (e) => e.duration && e.duration > 0 ? P(e.duration) : I("manage:shared.notFound")
		},
		{
			id: "size",
			label: I("manage:shared.size"),
			width: 112,
			value: (e) => e.size ?? 0,
			filter: {
				range: "size",
				value: (e) => e.size
			},
			render: (e) => e.size === null ? I("manage:shared.notFound") : re(e.size)
		}
	];
	return /* @__PURE__ */ (0, U.jsx)(o, {
		summary: p.count === null ? `${b} · ${I("manage:shared.notFound")}` : I("manage:healthList.groupSummary", {
			label: b,
			count: p.count
		}),
		children: p.count === null ? /* @__PURE__ */ (0, U.jsx)(_, {
			tone: "neutral",
			children: I("manage:healthList.listNotFound")
		}) : e.items.length ? /* @__PURE__ */ (0, U.jsxs)(S, { children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [p.truncated ? /* @__PURE__ */ (0, U.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: I("manage:healthList.loadedCount", {
						loaded: p.items.length,
						count: p.count
					})
				}) : null, /* @__PURE__ */ (0, U.jsx)(n, {
					size: "small",
					variant: "secondary",
					...O(y.busy === "copy"),
					onClick: () => D(p.items),
					children: I("manage:healthList.copyList")
				})]
			}),
			y.error ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				children: y.error
			}) : null,
			d.isError ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				children: String(d.error)
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(pe, {
				label: b,
				title: I("manage:healthList.tableTitle"),
				unit: I("manage:healthList.tableUnit"),
				panel: !1,
				busy: d.isFetching,
				filters: {
					values: c,
					facets: p.column_facets ?? {},
					onChange: l
				},
				items: p.items,
				columns: k,
				rowId: (e) => String(e.id),
				rowLabel: W,
				selected: x,
				onSelected: C,
				contextOperations: (e) => [{
					id: "open",
					label: I("catalog:mediaActions.open"),
					icon: f,
					run: () => i(e.id)
				}, {
					id: "copy",
					label: I("manage:healthList.copyRow"),
					icon: t,
					disabled: y.busy === "copy",
					run: () => D([e])
				}],
				actions: () => [],
				controls: (e) => /* @__PURE__ */ (0, U.jsx)(n, {
					size: "small",
					variant: "secondary",
					...O(y.busy === "copy"),
					onClick: () => D(e),
					children: I("manage:healthList.copySelected")
				})
			})
		] }) : /* @__PURE__ */ (0, U.jsx)(s, {
			icon: le,
			title: I("manage:healthList.emptyTitle"),
			size: "compact",
			children: I("manage:healthList.emptyBody")
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var G = "/api/diagnostics/exports", K = ["diagnostic-export"], ge = z((e) => ["running", "cancelling"].includes(e?.status || "") ? 1e3 : !1);
function q({ kind: t, codes: i = "", children: a }) {
	let o = L(), s = R({
		queryKey: K,
		queryFn: ({ signal: e }) => E(G, e),
		refetchInterval: ge
	}), c = s.data, l = c?.kind === t, u = c?.status === "running" || c?.status === "cancelling", d = I(t === "support" ? "manage:diagnosticsExport.downloadReport" : "manage:diagnosticsExport.exportFetchLog"), f = (e) => {
		ae.setQueryData(K, e);
	}, p = () => void o.run("start", async (n) => {
		let r = await fetch(G, {
			method: "POST",
			signal: n,
			credentials: "same-origin",
			headers: {
				...await te(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: t,
				codes: i
			})
		}), a = await r.json().catch(() => null);
		if (!r.ok) throw new e(a?.detail || a?.error || I("manage:diagnosticsExport.startFailed"), r.status, a);
		if (!a || !a.job_id) throw Error(I("manage:diagnosticsExport.statusNotFound"));
		return a;
	}, f), m = () => void o.run("cancel", (e) => D(`${G}/${c.job_id}/cancel`, {}, "POST", e), f);
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: t === "support" ? "flex flex-wrap justify-end gap-2" : "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, U.jsx)(n, {
						type: "button",
						variant: "secondary",
						disabled: u,
						...O(o.busy === "start"),
						onClick: p,
						children: d
					}),
					l && u ? /* @__PURE__ */ (0, U.jsx)(n, {
						type: "button",
						variant: "secondary",
						disabled: c.status === "cancelling",
						...O(o.busy === "cancel"),
						onClick: m,
						children: I("manage:diagnosticsExport.cancelExport")
					}) : null,
					l && c.status === "complete" && c.download_url ? /* @__PURE__ */ (0, U.jsx)(r, {
						variant: "secondary",
						href: c.download_url,
						children: I("manage:diagnosticsExport.downloadFile")
					}) : null,
					a
				]
			}),
			l && u ? /* @__PURE__ */ (0, U.jsx)(C, {
				embedded: t === "scraping",
				kind: T("diagnostic-export", c.stage_code),
				value: c.done || 0,
				total: c.total,
				label: c.total ? I("manage:diagnosticsExport.progress", {
					stage: F(c),
					done: c.done || 0,
					count: c.total
				}) : [
					F(c) || I("manage:diagnosticsExport.preparing"),
					c.rows ? I("manage:diagnosticsExport.candidateCount", { count: c.rows }) : "",
					c.files ? I("manage:diagnosticsExport.fileCount", { count: c.files }) : ""
				].filter(Boolean).join(" · ")
			}) : null,
			l && c.status === "complete" ? /* @__PURE__ */ (0, U.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: I("manage:diagnosticsExport.completedSize", { size: ((c.bytes || 0) / 1024 / 1024).toFixed(2) })
			}) : null,
			l && c.status === "cancelled" ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "neutral",
				children: I("manage:diagnosticsExport.canceled")
			}) : null,
			s.isError ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				action: /* @__PURE__ */ (0, U.jsx)(n, {
					type: "button",
					variant: "secondary",
					...O(s.isFetching),
					onClick: () => {
						s.refetch();
					},
					children: I("manage:diagnosticsExport.reload")
				}),
				children: I("manage:diagnosticsExport.progressNotFound")
			}) : null,
			o.error || l && c.status === "failed" ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				children: o.error || c?.error
			}) : null
		]
	});
}
function _e() {
	let [e, t] = (0, H.useState)("");
	return /* @__PURE__ */ (0, U.jsx)(u, {
		layout: "stack",
		labelledBy: "scraping-export-title",
		footer: /* @__PURE__ */ (0, U.jsx)(q, {
			kind: "scraping",
			codes: e
		}),
		children: /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			"aria-label": I("manage:diagnosticsExport.exportFetchLog"),
			children: [
				/* @__PURE__ */ (0, U.jsx)(d, {
					id: "scraping-export-title",
					children: I("manage:diagnosticsExport.fetchLogTitle")
				}),
				/* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: I("manage:diagnosticsExport.fetchLogHint")
				}),
				/* @__PURE__ */ (0, U.jsx)(p, {
					label: I("manage:diagnosticsExport.codesLabel"),
					name: "scraping-codes",
					value: e,
					onChange: t,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: I("manage:diagnosticsExport.codesPlaceholder"),
					hint: I("manage:diagnosticsExport.codesHint")
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var ve = {
	ok: I("manage:diagnostics.statusOk"),
	warning: I("manage:diagnostics.statusWarning"),
	failed: I("manage:diagnostics.statusFailed"),
	unknown: I("manage:shared.notFound"),
	disabled: I("manage:diagnostics.statusDisabled"),
	stale: I("manage:diagnostics.statusStale"),
	unchecked: I("manage:diagnostics.statusUnchecked")
}, J = { "/tasks": I("manage:diagnostics.viewTasks") }, ye = [
	[I("manage:diagnostics.groupLibraries"), ["media_mounts", "data_root"]],
	[I("manage:diagnostics.groupDatabase"), ["database", "schema"]],
	[I("manage:diagnostics.groupTools"), ["ffmpeg"]],
	[I("manage:diagnostics.groupConfig"), [
		"configured",
		"security",
		"port",
		"version"
	]],
	[I("manage:diagnostics.groupTasks"), ["tasks"]]
], Y = (e) => new Date(e).toLocaleString(ie), X = /* @__PURE__ */ new Set([
	"warning",
	"failed",
	"unknown"
]);
function Z({ status: e }) {
	return /* @__PURE__ */ (0, U.jsx)(i, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: ve[e] ?? I("manage:shared.notFound")
	});
}
function Q({ name: e, check: t, compact: n = !1 }) {
	let i = t.target === "/settings/library" && (e === "security" || e === "port") ? ce("network") : t.target, a = n ? "h4" : "h3", o = k(t);
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		"data-diagnostic-check": e,
		className: j("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", n ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, U.jsxs)("div", {
			className: j("flex min-w-0 flex-1 flex-col", n ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ (0, U.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, U.jsx)(a, {
						className: j("text-text-primary", n ? "text-body-2-medium" : "text-body-medium"),
						children: o.label
					}), /* @__PURE__ */ (0, U.jsx)(Z, { status: t.status })]
				}),
				/* @__PURE__ */ (0, U.jsx)("p", {
					"data-check-reason": !0,
					className: j("text-body-2-regular break-words", n ? "text-text-secondary" : "text-text-primary"),
					children: o.reason
				}),
				o.action ? /* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: I("manage:diagnostics.suggestedFixText", { action: o.action })
				}) : null
			]
		}), i ? /* @__PURE__ */ (0, U.jsx)("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ (0, U.jsx)(r, {
				size: "small",
				variant: "secondary",
				href: i,
				children: i.startsWith("/settings/") ? I("manage:diagnostics.openSection", { section: ee(i) }) : J[i] ?? I("manage:diagnostics.openRelated")
			})
		}) : null]
	});
}
function $({ source: e }) {
	return /* @__PURE__ */ (0, U.jsx)("article", {
		"data-diagnostic-source": e.source,
		children: /* @__PURE__ */ (0, U.jsx)(y, { children: /* @__PURE__ */ (0, U.jsxs)(S, { children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, U.jsxs)("h3", {
					className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
					children: [/* @__PURE__ */ (0, U.jsx)(x, { source: e.source }), e.label]
				}), /* @__PURE__ */ (0, U.jsx)(Z, { status: e.status })]
			}),
			/* @__PURE__ */ (0, U.jsx)(B, {
				text: A(e, "reason"),
				className: "text-body-regular text-text-primary"
			}),
			/* @__PURE__ */ (0, U.jsxs)(l, { children: [
				/* @__PURE__ */ (0, U.jsx)(c, {
					term: I("manage:diagnostics.lastSuccess"),
					children: e.last_success_at ? Y(e.last_success_at) : I("manage:diagnostics.noSuccessYet")
				}),
				e.last_check_at ? /* @__PURE__ */ (0, U.jsxs)(c, {
					term: I("manage:diagnostics.lastChecked"),
					children: [Y(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? I("manage:diagnostics.checkDuration", { seconds: e.elapsed_s.toFixed(2) }) : ""]
				}) : null,
				/* @__PURE__ */ (0, U.jsx)(c, {
					term: I("manage:diagnostics.pausedUntil"),
					children: e.cooldown_until ? Y(e.cooldown_until) : I("manage:diagnostics.notPaused")
				})
			] })
		] }) })
	});
}
function be({ sources: e }) {
	let t = e.filter((e) => e.status === "ok" || e.status === "unchecked" || e.status === "disabled"), n = e.filter((e) => !t.includes(e));
	return /* @__PURE__ */ (0, U.jsxs)("section", {
		id: "diagnostics-sessions",
		"data-guide-target": "sessions",
		"aria-label": I("manage:diagnostics.sourceSessions"),
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, U.jsx)(b, { children: I("manage:diagnostics.sourceSessions") }),
			n.map((e) => /* @__PURE__ */ (0, U.jsx)($, { source: e }, e.source)),
			t.length ? /* @__PURE__ */ (0, U.jsx)(o, {
				summary: I("manage:diagnostics.otherSources", { count: t.length }),
				contentClassName: "gap-3",
				children: t.map((e) => /* @__PURE__ */ (0, U.jsx)($, { source: e }, e.source))
			}) : null,
			/* @__PURE__ */ (0, U.jsx)("div", { children: /* @__PURE__ */ (0, U.jsx)(r, {
				size: "small",
				variant: "secondary",
				href: "/sources",
				children: I("manage:diagnostics.openSources")
			}) })
		]
	});
}
function xe(e) {
	let t = R({
		queryKey: a,
		queryFn: ({ signal: e }) => N(e),
		staleTime: 1e4
	}), r = L(), { checked: i, checkFailed: s } = fe(), [c, l] = (0, H.useState)(""), u = /* @__PURE__ */ (0, U.jsx)("div", {
		id: "diagnostics-report",
		"data-guide-target": "report",
		children: /* @__PURE__ */ (0, U.jsx)(q, {
			kind: "support",
			children: /* @__PURE__ */ (0, U.jsx)(n, {
				variant: "secondary",
				onClick: () => void r.run("refresh", async () => {
					let e = await t.refetch();
					if (e.error) throw e.error;
				}, () => {
					l(""), i(I("manage:diagnostics.reportRefreshed"));
				}, (e) => {
					let t = M(e);
					l(t), s(I("manage:diagnostics.checkAgain"), t);
				}),
				...O(r.busy === "refresh"),
				children: I("manage:diagnostics.checkAgain")
			})
		})
	}), d = {
		id: "diagnostics-report",
		label: I("manage:diagnosticsExport.reportTitle")
	}, f = {
		id: "diagnostics-scraping",
		label: I("manage:diagnosticsExport.fetchLogTitle")
	}, p = /* @__PURE__ */ (0, U.jsx)("div", {
		id: f.id,
		children: /* @__PURE__ */ (0, U.jsx)(_e, {})
	}), m = t.data;
	if (!m && t.isPending) return /* @__PURE__ */ (0, U.jsx)("div", {
		role: "status",
		"aria-label": I("manage:diagnostics.loading"),
		dangerouslySetInnerHTML: { __html: ne() }
	});
	if (!m) return /* @__PURE__ */ (0, U.jsxs)(V, {
		inline: !0,
		label: I("settings:configurationPage.contents"),
		entries: [d, f],
		children: [
			u,
			/* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				title: I("manage:diagnostics.loadFailed"),
				children: c || (t.error ? M(t.error) : I("manage:diagnostics.reportNotFound"))
			}),
			p
		]
	});
	let h = Object.entries(m.checks).filter(([, e]) => X.has(e.status)), g = Object.entries(m.checks).filter(([, e]) => !X.has(e.status)), b = [
		d,
		...h.length ? [{
			id: "diagnostics-attention",
			label: I("manage:diagnostics.attention")
		}] : [],
		{
			id: "diagnostics-health",
			label: I("manage:diagnostics.collectionHealth")
		},
		...g.length ? [{
			id: "diagnostics-checks",
			label: I("manage:diagnostics.systemChecks")
		}] : [],
		f,
		{
			id: "diagnostics-sessions",
			label: I("manage:diagnostics.sourceSessions")
		}
	];
	return /* @__PURE__ */ (0, U.jsxs)(V, {
		inline: !0,
		label: I("settings:configurationPage.contents"),
		entries: b,
		children: [
			u,
			c ? /* @__PURE__ */ (0, U.jsx)(_, {
				tone: "error",
				children: c
			}) : null,
			h.length ? /* @__PURE__ */ (0, U.jsx)(v, {
				id: "diagnostics-attention",
				guide: "attention",
				title: I("manage:diagnostics.attentionTitle", { count: h.length }),
				children: h.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(Q, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(v, {
				id: "diagnostics-health",
				guide: "health",
				title: I("manage:diagnostics.collectionHealth"),
				children: /* @__PURE__ */ (0, U.jsxs)(S, { children: [m.library.issue_at ? /* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: I("manage:diagnostics.healthRecordedAtTime", { time: Y(m.library.issue_at) })
				}) : null, Object.entries(m.library.groups).map(([t, n]) => /* @__PURE__ */ (0, U.jsx)(he, {
					groupKey: t,
					group: n,
					...e
				}, t))] })
			}),
			g.length ? /* @__PURE__ */ (0, U.jsx)("section", {
				id: "diagnostics-checks",
				"aria-label": I("manage:diagnostics.systemChecks"),
				children: /* @__PURE__ */ (0, U.jsx)(o, {
					summary: I("manage:diagnostics.otherChecks", { count: g.length }),
					contentClassName: "gap-5",
					children: ye.map(([e, t]) => {
						let n = g.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ (0, U.jsxs)("section", {
							"aria-label": e,
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, U.jsxs)("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [e, /* @__PURE__ */ (0, U.jsx)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: I("manage:diagnostics.groupCount", { count: n.length })
								})]
							}), /* @__PURE__ */ (0, U.jsx)(y, { children: n.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(Q, {
								name: e,
								check: t,
								compact: !0
							}, e)) })]
						}, e) : null;
					})
				})
			}) : null,
			p,
			/* @__PURE__ */ (0, U.jsx)(be, { sources: m.sources })
		]
	});
}
export { xe as DiagnosticsPage };

//# debugId=8c541879-f307-43e4-b9b2-913711d76176