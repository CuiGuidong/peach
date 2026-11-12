(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2cc0c983-cae4-481f-9155-2aa3256a30a6", e._sentryDebugIdIdentifier = "sentry-dbid-2cc0c983-cae4-481f-9155-2aa3256a30a6");
	} catch {}
})();
import { ApiError as e, Button as t, ButtonLink as n, Chip as r, DIAGNOSTICS_KEY as i, Disclosure as a, EmptyState as o, Fact as s, FactList as c, Fieldset as l, FieldsetTitle as u, Input as d, LOC as f, LinkButton as p, Note as m, Section as h, SettingsCard as g, SettingsSectionLabel as _, Stack as v, TaskProgress as y, __toESM as b, apiGet as x, apiSend as ee, busyProps as S, configurationSection as C, cx as w, diagnosticHeaders as T, diagnosticsSkeleton as E, errorMessage as D, fetchDiagnostics as O, fmtDur as k, fmtSize as A, interfaceLanguage as j, queryClient as M, require_jsx_runtime as N, require_react as te, settingsPath as ne, t as P, tl as F, useAction as I, useQuery as L } from "./peach-app.js";
import { ErrorExcerpt as R } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { SiteMark as z } from "./peach-app.site-mark-D_VlIyJz.js";
import { DataTable as B } from "./peach-app.data-table-C4egVbd2.js";
// src/react/diagnostics/health-list.tsx
var V = /* @__PURE__ */ b(te(), 1), H = N(), U = (e) => e.title || e.name || e.code || P("manage:healthList.videoFallback", { id: e.id }), W = (e) => [[
	P("manage:shared.video"),
	P("manage:shared.code"),
	P("manage:shared.fileName"),
	P("manage:shared.library"),
	P("manage:shared.path"),
	P("manage:healthList.durationSeconds"),
	P("manage:healthList.sizeBytes")
], ...e.map((e) => [
	U(e),
	e.code ?? "",
	e.name,
	f[e.location] || e.location,
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function G({ group: e, openItem: n, receipt: r }) {
	let i = I(), [s, c] = (0, V.useState)([]), l = (e) => void i.run("copy", () => navigator.clipboard.writeText(W(e)), () => r(P("manage:healthList.copied"))), u = [
		{
			id: "title",
			label: P("manage:shared.video"),
			value: U,
			render: (e) => /* @__PURE__ */ (0, H.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, H.jsx)(p, {
					variant: "primary",
					className: "justify-start whitespace-normal text-left",
					onClick: () => n(e.id),
					children: U(e)
				}), e.name && e.name !== U(e) ? /* @__PURE__ */ (0, H.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.name,
					className: "block min-w-0 text-caption-1-regular text-text-secondary",
					children: e.name
				}) : null]
			})
		},
		{
			id: "code",
			label: P("manage:shared.code"),
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				className: "whitespace-nowrap",
				children: e.code || P("manage:shared.unrecognized")
			})
		},
		{
			id: "location",
			label: P("manage:shared.library"),
			width: 128,
			value: (e) => f[e.location] || e.location,
			render: (e) => f[e.location] || e.location || P("manage:shared.notFound")
		},
		{
			id: "path",
			label: P("manage:healthList.filePath"),
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || P("manage:shared.notFound")
			})
		},
		{
			id: "duration",
			label: P("manage:shared.duration"),
			width: 112,
			value: (e) => e.duration ?? 0,
			render: (e) => e.duration && e.duration > 0 ? k(e.duration) : P("manage:shared.notFound")
		},
		{
			id: "size",
			label: P("manage:shared.size"),
			width: 112,
			value: (e) => e.size ?? 0,
			render: (e) => e.size === null ? P("manage:shared.notFound") : A(e.size)
		}
	];
	return /* @__PURE__ */ (0, H.jsx)(a, {
		summary: e.count === null ? `${e.label} · ${P("manage:shared.notFound")}` : P("manage:healthList.groupSummary", {
			label: e.label,
			count: e.count
		}),
		children: e.count === null ? /* @__PURE__ */ (0, H.jsx)(m, {
			tone: "neutral",
			children: P("manage:healthList.listNotFound")
		}) : e.items.length ? /* @__PURE__ */ (0, H.jsxs)(v, { children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [e.truncated ? /* @__PURE__ */ (0, H.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: P("manage:healthList.loadedCount", {
						loaded: e.items.length,
						count: e.count
					})
				}) : null, /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...S(i.busy === "copy"),
					onClick: () => l(e.items),
					children: P("manage:healthList.copyList")
				})]
			}),
			i.error ? /* @__PURE__ */ (0, H.jsx)(m, {
				tone: "error",
				children: i.error
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(B, {
				label: e.label,
				title: P("manage:healthList.tableTitle"),
				unit: P("manage:healthList.tableUnit"),
				panel: !1,
				items: e.items,
				columns: u,
				rowId: (e) => String(e.id),
				rowLabel: U,
				selected: s,
				onSelected: c,
				actions: (e) => /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...S(i.busy === "copy"),
					onClick: () => l(e),
					children: P("manage:healthList.copySelected")
				})
			})
		] }) : /* @__PURE__ */ (0, H.jsx)(o, {
			icon: F,
			title: P("manage:healthList.emptyTitle"),
			size: "compact",
			children: P("manage:healthList.emptyBody")
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var K = "/api/diagnostics/exports", q = ["diagnostic-export"];
function J({ kind: r, codes: i = "", children: a }) {
	let o = I(), s = L({
		queryKey: q,
		queryFn: ({ signal: e }) => x(K, e),
		refetchInterval: (e) => ["running", "cancelling"].includes(e.state.data?.status || "") ? 1e3 : !1
	}), c = s.data, l = c?.kind === r, u = c?.status === "running" || c?.status === "cancelling", d = P(r === "support" ? "manage:diagnosticsExport.downloadReport" : "manage:diagnosticsExport.exportFetchLog"), f = (e) => {
		M.setQueryData(q, e);
	}, p = () => void o.run("start", async (t) => {
		let n = await fetch(K, {
			method: "POST",
			signal: t,
			credentials: "same-origin",
			headers: {
				...await T(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: r,
				codes: i
			})
		}), a = await n.json().catch(() => null);
		if (!n.ok) throw new e(a?.detail || a?.error || P("manage:diagnosticsExport.startFailed"), n.status, a);
		if (!a || !a.job_id) throw Error(P("manage:diagnosticsExport.statusNotFound"));
		return a;
	}, f), h = () => void o.run("cancel", (e) => ee(`${K}/${c.job_id}/cancel`, {}, "POST", e), f);
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: r === "support" ? "flex flex-wrap justify-end gap-2" : "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, H.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: u,
						...S(o.busy === "start"),
						onClick: p,
						children: d
					}),
					l && u ? /* @__PURE__ */ (0, H.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: c.status === "cancelling",
						...S(o.busy === "cancel"),
						onClick: h,
						children: P("manage:diagnosticsExport.cancelExport")
					}) : null,
					l && c.status === "complete" && c.download_url ? /* @__PURE__ */ (0, H.jsx)(n, {
						variant: "secondary",
						href: c.download_url,
						children: P("manage:diagnosticsExport.downloadFile")
					}) : null,
					a
				]
			}),
			l && u ? /* @__PURE__ */ (0, H.jsx)(y, {
				embedded: r === "scraping",
				value: c.done || 0,
				total: c.total,
				label: c.total ? P("manage:diagnosticsExport.progress", {
					stage: c.stage,
					done: c.done || 0,
					count: c.total
				}) : [
					c.stage || P("manage:diagnosticsExport.preparing"),
					c.rows ? P("manage:diagnosticsExport.candidateCount", { count: c.rows }) : "",
					c.files ? P("manage:diagnosticsExport.fileCount", { count: c.files }) : ""
				].filter(Boolean).join(" · ")
			}) : null,
			l && c.status === "complete" ? /* @__PURE__ */ (0, H.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: P("manage:diagnosticsExport.completedSize", { size: ((c.bytes || 0) / 1024 / 1024).toFixed(2) })
			}) : null,
			l && c.status === "cancelled" ? /* @__PURE__ */ (0, H.jsx)(m, {
				tone: "neutral",
				children: P("manage:diagnosticsExport.canceled")
			}) : null,
			s.isError ? /* @__PURE__ */ (0, H.jsx)(m, {
				tone: "error",
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					type: "button",
					variant: "secondary",
					...S(s.isFetching),
					onClick: () => {
						s.refetch();
					},
					children: P("manage:diagnosticsExport.reload")
				}),
				children: P("manage:diagnosticsExport.progressNotFound")
			}) : null,
			o.error || l && c.status === "failed" ? /* @__PURE__ */ (0, H.jsx)(m, {
				tone: "error",
				children: o.error || c?.error
			}) : null
		]
	});
}
function Y() {
	let [e, t] = (0, V.useState)("");
	return /* @__PURE__ */ (0, H.jsx)(l, {
		layout: "stack",
		labelledBy: "scraping-export-title",
		footer: /* @__PURE__ */ (0, H.jsx)(J, {
			kind: "scraping",
			codes: e
		}),
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			"aria-label": P("manage:diagnosticsExport.exportFetchLog"),
			children: [
				/* @__PURE__ */ (0, H.jsx)(u, {
					id: "scraping-export-title",
					children: P("manage:diagnosticsExport.fetchLogTitle")
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: P("manage:diagnosticsExport.fetchLogHint")
				}),
				/* @__PURE__ */ (0, H.jsx)(d, {
					label: P("manage:diagnosticsExport.codesLabel"),
					name: "scraping-codes",
					value: e,
					onChange: t,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: P("manage:diagnosticsExport.codesPlaceholder"),
					hint: P("manage:diagnosticsExport.codesHint")
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var X = {
	ok: P("manage:diagnostics.statusOk"),
	warning: P("manage:diagnostics.statusWarning"),
	failed: P("manage:diagnostics.statusFailed"),
	unknown: P("manage:shared.notFound"),
	disabled: P("manage:diagnostics.statusDisabled"),
	stale: P("manage:diagnostics.statusStale"),
	unchecked: P("manage:diagnostics.statusUnchecked")
}, re = { "/tasks": P("manage:diagnostics.viewTasks") }, ie = [
	[P("manage:diagnostics.groupLibraries"), ["media_mounts", "data_root"]],
	[P("manage:diagnostics.groupDatabase"), ["database", "schema"]],
	[P("manage:diagnostics.groupTools"), ["ffmpeg"]],
	[P("manage:diagnostics.groupConfig"), [
		"configured",
		"security",
		"port",
		"version"
	]],
	[P("manage:diagnostics.groupTasks"), ["tasks"]]
], Z = (e) => new Date(e).toLocaleString(j);
function Q({ status: e }) {
	return /* @__PURE__ */ (0, H.jsx)(r, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: X[e] ?? P("manage:shared.notFound")
	});
}
function ae() {
	return /* @__PURE__ */ (0, H.jsx)(J, { kind: "support" });
}
function $({ name: e, check: t, compact: r = !1 }) {
	let i = t.target === "/settings/library" && (e === "security" || e === "port") ? ne("network") : t.target, a = r ? "h4" : "h3";
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		"data-diagnostic-check": e,
		className: w("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", r ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, H.jsxs)("div", {
			className: w("flex min-w-0 flex-1 flex-col", r ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, H.jsx)(a, {
						className: w("text-text-primary", r ? "text-body-2-medium" : "text-body-medium"),
						children: t.label
					}), /* @__PURE__ */ (0, H.jsx)(Q, { status: t.status })]
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					"data-check-reason": !0,
					className: w("text-body-2-regular break-words", r ? "text-text-secondary" : "text-text-primary"),
					children: t.reason
				}),
				t.action ? /* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: P("manage:diagnostics.suggestedFixText", { action: t.action })
				}) : null
			]
		}), i ? /* @__PURE__ */ (0, H.jsx)("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ (0, H.jsx)(n, {
				size: "small",
				variant: "secondary",
				href: i,
				children: i.startsWith("/settings/") ? P("manage:diagnostics.openSection", { section: C(i) }) : re[i] ?? P("manage:diagnostics.openRelated")
			})
		}) : null]
	});
}
function oe(e) {
	let r = L({
		queryKey: i,
		queryFn: ({ signal: e }) => O(e),
		staleTime: 1e4
	}), o = I(), [l, u] = (0, V.useState)(""), d = () => void o.run("refresh", async () => {
		let e = await r.refetch();
		if (e.error) throw e.error;
		return e.data;
	}, () => u(""), (e) => u(D(e))), f = r.data;
	if (!f && r.isPending) return /* @__PURE__ */ (0, H.jsx)("div", {
		role: "status",
		"aria-label": P("manage:diagnostics.loading"),
		dangerouslySetInnerHTML: { __html: E() }
	});
	if (!f) return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "ui-configpage",
		children: [
			/* @__PURE__ */ (0, H.jsx)(ae, {}),
			/* @__PURE__ */ (0, H.jsx)(m, {
				tone: "error",
				title: P("manage:diagnostics.loadFailed"),
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					variant: "secondary",
					onClick: d,
					...S(o.busy === "refresh"),
					children: P("manage:diagnostics.checkAgain")
				}),
				children: r.error ? D(r.error) : P("manage:diagnostics.reportNotFound")
			}),
			/* @__PURE__ */ (0, H.jsx)(Y, {})
		]
	});
	let p = Object.entries(f.checks).filter(([, e]) => [
		"warning",
		"failed",
		"unknown"
	].includes(e.status)), y = Object.entries(f.checks).filter(([, e]) => ![
		"warning",
		"failed",
		"unknown"
	].includes(e.status));
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, H.jsx)("div", {
				"data-guide-target": "report",
				children: /* @__PURE__ */ (0, H.jsx)(J, {
					kind: "support",
					children: /* @__PURE__ */ (0, H.jsx)(t, {
						variant: "secondary",
						onClick: d,
						...S(o.busy === "refresh"),
						children: P("manage:diagnostics.checkAgain")
					})
				})
			}),
			l ? /* @__PURE__ */ (0, H.jsx)(m, {
				tone: "error",
				children: l
			}) : null,
			p.length ? /* @__PURE__ */ (0, H.jsx)(h, {
				guide: "attention",
				title: P("manage:diagnostics.attentionTitle", { count: p.length }),
				children: p.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(h, {
				guide: "health",
				title: P("manage:diagnostics.collectionHealth"),
				children: /* @__PURE__ */ (0, H.jsxs)(v, { children: [f.library.issue_at ? /* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: P("manage:diagnostics.healthRecordedAtTime", { time: Z(f.library.issue_at) })
				}) : null, Object.entries(f.library.groups).map(([t, n]) => /* @__PURE__ */ (0, H.jsx)(G, {
					group: n,
					...e
				}, t))] })
			}),
			y.length ? /* @__PURE__ */ (0, H.jsx)("section", {
				"aria-label": P("manage:diagnostics.systemChecks"),
				children: /* @__PURE__ */ (0, H.jsx)(a, {
					summary: P("manage:diagnostics.otherChecks", { count: y.length }),
					contentClassName: "gap-5",
					children: ie.map(([e, t]) => {
						let n = y.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ (0, H.jsxs)("section", {
							"aria-label": e,
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [e, /* @__PURE__ */ (0, H.jsx)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: P("manage:diagnostics.groupCount", { count: n.length })
								})]
							}), /* @__PURE__ */ (0, H.jsx)(g, { children: n.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
								name: e,
								check: t,
								compact: !0
							}, e)) })]
						}, e) : null;
					})
				})
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(Y, {}),
			/* @__PURE__ */ (0, H.jsxs)("section", {
				"data-guide-target": "sessions",
				"aria-label": P("manage:diagnostics.sourceSessions"),
				className: "flex min-w-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, H.jsx)(_, { children: P("manage:diagnostics.sourceSessions") }),
					f.sources.map((e) => /* @__PURE__ */ (0, H.jsx)("article", {
						"data-diagnostic-source": e.source,
						children: /* @__PURE__ */ (0, H.jsx)(g, { children: /* @__PURE__ */ (0, H.jsxs)(v, { children: [
							/* @__PURE__ */ (0, H.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
									className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
									children: [/* @__PURE__ */ (0, H.jsx)(z, { source: e.source }), e.label]
								}), /* @__PURE__ */ (0, H.jsx)(Q, { status: e.status })]
							}),
							/* @__PURE__ */ (0, H.jsx)(R, {
								text: e.reason,
								className: "text-body-regular text-text-primary"
							}),
							/* @__PURE__ */ (0, H.jsxs)(c, { children: [
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: P("manage:diagnostics.lastSuccess"),
									children: e.last_success_at ? Z(e.last_success_at) : P("manage:diagnostics.noSuccessYet")
								}),
								e.last_check_at ? /* @__PURE__ */ (0, H.jsxs)(s, {
									term: P("manage:diagnostics.lastChecked"),
									children: [Z(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? P("manage:diagnostics.checkDuration", { seconds: e.elapsed_s.toFixed(2) }) : ""]
								}) : null,
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: P("manage:diagnostics.pausedUntil"),
									children: e.cooldown_until ? Z(e.cooldown_until) : P("manage:diagnostics.notPaused")
								})
							] })
						] }) })
					}, e.source)),
					/* @__PURE__ */ (0, H.jsx)("div", { children: /* @__PURE__ */ (0, H.jsx)(n, {
						size: "small",
						variant: "secondary",
						href: "/sources",
						children: P("manage:diagnostics.openSources")
					}) })
				]
			})
		]
	});
}
export { oe as DiagnosticsPage };

//# debugId=2cc0c983-cae4-481f-9155-2aa3256a30a6