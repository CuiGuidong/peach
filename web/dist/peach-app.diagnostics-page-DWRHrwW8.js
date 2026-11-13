(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c4d51946-e2c8-4456-a75a-ab188e907845", e._sentryDebugIdIdentifier = "sentry-dbid-c4d51946-e2c8-4456-a75a-ab188e907845");
	} catch {}
})();
import { ApiError as e, Button as t, ButtonLink as n, Chip as r, DIAGNOSTICS_KEY as i, Disclosure as a, EmptyState as o, Fact as s, FactList as c, Fieldset as l, FieldsetTitle as u, Input as d, ItemLibrary as f, LOC as p, LinkButton as m, Note as h, Section as g, SettingsCard as _, SettingsSectionLabel as v, Stack as y, TaskProgress as b, __toESM as x, apiGet as ee, apiSend as S, busyProps as C, checkText$1 as w, codedText as T, configurationSection as E, cx as D, diagnosticHeaders as O, diagnosticsSkeleton as te, errorMessage as k, fetchDiagnostics as ne, fmtDur as re, fmtSize as ie, interfaceLanguage as ae, queryClient as oe, require_jsx_runtime as se, require_react as A, settingsPath as j, stageText as M, t as N, tl as P, useAction as F, useLibraryTints as I, useQuery as L } from "./peach-app.js";
import { ErrorExcerpt as R } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { SiteMark as z } from "./peach-app.site-mark-D_VlIyJz.js";
import { DataTable as B } from "./peach-app.data-table-C4egVbd2.js";
// src/react/diagnostics/health-list.tsx
var V = /* @__PURE__ */ x(A(), 1), H = se(), U = (e) => e.title || e.name || e.code || N("manage:healthList.videoFallback", { id: e.id }), W = (e, t) => [[
	N("manage:shared.video"),
	N("manage:shared.code"),
	N("manage:shared.fileName"),
	N("manage:shared.library"),
	N("manage:shared.path"),
	N("manage:healthList.durationSeconds"),
	N("manage:healthList.sizeBytes")
], ...e.map((e) => [
	U(e),
	e.code ?? "",
	e.name,
	t(e),
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function G({ group: e, openItem: n, receipt: r }) {
	let i = F(), s = T(e, "label"), [c, l] = (0, V.useState)([]), u = I({ names: !0 }), d = (e) => u.get(e.library_id || "")?.name || p[e.location] || e.location, g = (e) => void i.run("copy", () => navigator.clipboard.writeText(W(e, d)), () => r(N("manage:healthList.copied"))), _ = [
		{
			id: "title",
			label: N("manage:shared.video"),
			value: U,
			render: (e) => /* @__PURE__ */ (0, H.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, H.jsx)(m, {
					variant: "primary",
					title: U(e),
					"data-health-title": "",
					className: "max-w-full justify-start whitespace-normal text-left",
					onClick: () => n(e.id),
					children: /* @__PURE__ */ (0, H.jsx)("span", {
						className: "line-clamp-2 wrap-anywhere",
						children: U(e)
					})
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
			label: N("manage:shared.code"),
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				className: "whitespace-nowrap",
				children: e.code || N("manage:shared.unrecognized")
			})
		},
		{
			id: "location",
			label: N("manage:shared.library"),
			width: 160,
			value: d,
			render: (e) => /* @__PURE__ */ (0, H.jsx)(f, {
				libraryId: e.library_id,
				location: e.location,
				fallback: N("manage:shared.notFound")
			})
		},
		{
			id: "path",
			label: N("manage:healthList.filePath"),
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || N("manage:shared.notFound")
			})
		},
		{
			id: "duration",
			label: N("manage:shared.duration"),
			width: 112,
			value: (e) => e.duration ?? 0,
			render: (e) => e.duration && e.duration > 0 ? re(e.duration) : N("manage:shared.notFound")
		},
		{
			id: "size",
			label: N("manage:shared.size"),
			width: 112,
			value: (e) => e.size ?? 0,
			render: (e) => e.size === null ? N("manage:shared.notFound") : ie(e.size)
		}
	];
	return /* @__PURE__ */ (0, H.jsx)(a, {
		summary: e.count === null ? `${s} · ${N("manage:shared.notFound")}` : N("manage:healthList.groupSummary", {
			label: s,
			count: e.count
		}),
		children: e.count === null ? /* @__PURE__ */ (0, H.jsx)(h, {
			tone: "neutral",
			children: N("manage:healthList.listNotFound")
		}) : e.items.length ? /* @__PURE__ */ (0, H.jsxs)(y, { children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [e.truncated ? /* @__PURE__ */ (0, H.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: N("manage:healthList.loadedCount", {
						loaded: e.items.length,
						count: e.count
					})
				}) : null, /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => g(e.items),
					children: N("manage:healthList.copyList")
				})]
			}),
			i.error ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				children: i.error
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(B, {
				label: s,
				title: N("manage:healthList.tableTitle"),
				unit: N("manage:healthList.tableUnit"),
				panel: !1,
				items: e.items,
				columns: _,
				rowId: (e) => String(e.id),
				rowLabel: U,
				selected: c,
				onSelected: l,
				actions: (e) => /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => g(e),
					children: N("manage:healthList.copySelected")
				})
			})
		] }) : /* @__PURE__ */ (0, H.jsx)(o, {
			icon: P,
			title: N("manage:healthList.emptyTitle"),
			size: "compact",
			children: N("manage:healthList.emptyBody")
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var K = "/api/diagnostics/exports", q = ["diagnostic-export"];
function J({ kind: r, codes: i = "", children: a }) {
	let o = F(), s = L({
		queryKey: q,
		queryFn: ({ signal: e }) => ee(K, e),
		refetchInterval: (e) => ["running", "cancelling"].includes(e.state.data?.status || "") ? 1e3 : !1
	}), c = s.data, l = c?.kind === r, u = c?.status === "running" || c?.status === "cancelling", d = N(r === "support" ? "manage:diagnosticsExport.downloadReport" : "manage:diagnosticsExport.exportFetchLog"), f = (e) => {
		oe.setQueryData(q, e);
	}, p = () => void o.run("start", async (t) => {
		let n = await fetch(K, {
			method: "POST",
			signal: t,
			credentials: "same-origin",
			headers: {
				...await O(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: r,
				codes: i
			})
		}), a = await n.json().catch(() => null);
		if (!n.ok) throw new e(a?.detail || a?.error || N("manage:diagnosticsExport.startFailed"), n.status, a);
		if (!a || !a.job_id) throw Error(N("manage:diagnosticsExport.statusNotFound"));
		return a;
	}, f), m = () => void o.run("cancel", (e) => S(`${K}/${c.job_id}/cancel`, {}, "POST", e), f);
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
						...C(o.busy === "start"),
						onClick: p,
						children: d
					}),
					l && u ? /* @__PURE__ */ (0, H.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: c.status === "cancelling",
						...C(o.busy === "cancel"),
						onClick: m,
						children: N("manage:diagnosticsExport.cancelExport")
					}) : null,
					l && c.status === "complete" && c.download_url ? /* @__PURE__ */ (0, H.jsx)(n, {
						variant: "secondary",
						href: c.download_url,
						children: N("manage:diagnosticsExport.downloadFile")
					}) : null,
					a
				]
			}),
			l && u ? /* @__PURE__ */ (0, H.jsx)(b, {
				embedded: r === "scraping",
				value: c.done || 0,
				total: c.total,
				label: c.total ? N("manage:diagnosticsExport.progress", {
					stage: M(c),
					done: c.done || 0,
					count: c.total
				}) : [
					M(c) || N("manage:diagnosticsExport.preparing"),
					c.rows ? N("manage:diagnosticsExport.candidateCount", { count: c.rows }) : "",
					c.files ? N("manage:diagnosticsExport.fileCount", { count: c.files }) : ""
				].filter(Boolean).join(" · ")
			}) : null,
			l && c.status === "complete" ? /* @__PURE__ */ (0, H.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: N("manage:diagnosticsExport.completedSize", { size: ((c.bytes || 0) / 1024 / 1024).toFixed(2) })
			}) : null,
			l && c.status === "cancelled" ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "neutral",
				children: N("manage:diagnosticsExport.canceled")
			}) : null,
			s.isError ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					type: "button",
					variant: "secondary",
					...C(s.isFetching),
					onClick: () => {
						s.refetch();
					},
					children: N("manage:diagnosticsExport.reload")
				}),
				children: N("manage:diagnosticsExport.progressNotFound")
			}) : null,
			o.error || l && c.status === "failed" ? /* @__PURE__ */ (0, H.jsx)(h, {
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
			"aria-label": N("manage:diagnosticsExport.exportFetchLog"),
			children: [
				/* @__PURE__ */ (0, H.jsx)(u, {
					id: "scraping-export-title",
					children: N("manage:diagnosticsExport.fetchLogTitle")
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: N("manage:diagnosticsExport.fetchLogHint")
				}),
				/* @__PURE__ */ (0, H.jsx)(d, {
					label: N("manage:diagnosticsExport.codesLabel"),
					name: "scraping-codes",
					value: e,
					onChange: t,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: N("manage:diagnosticsExport.codesPlaceholder"),
					hint: N("manage:diagnosticsExport.codesHint")
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var ce = {
	ok: N("manage:diagnostics.statusOk"),
	warning: N("manage:diagnostics.statusWarning"),
	failed: N("manage:diagnostics.statusFailed"),
	unknown: N("manage:shared.notFound"),
	disabled: N("manage:diagnostics.statusDisabled"),
	stale: N("manage:diagnostics.statusStale"),
	unchecked: N("manage:diagnostics.statusUnchecked")
}, le = { "/tasks": N("manage:diagnostics.viewTasks") }, ue = [
	[N("manage:diagnostics.groupLibraries"), ["media_mounts", "data_root"]],
	[N("manage:diagnostics.groupDatabase"), ["database", "schema"]],
	[N("manage:diagnostics.groupTools"), ["ffmpeg"]],
	[N("manage:diagnostics.groupConfig"), [
		"configured",
		"security",
		"port",
		"version"
	]],
	[N("manage:diagnostics.groupTasks"), ["tasks"]]
], X = (e) => new Date(e).toLocaleString(ae);
function Z({ status: e }) {
	return /* @__PURE__ */ (0, H.jsx)(r, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: ce[e] ?? N("manage:shared.notFound")
	});
}
function Q() {
	return /* @__PURE__ */ (0, H.jsx)(J, { kind: "support" });
}
function $({ name: e, check: t, compact: r = !1 }) {
	let i = t.target === "/settings/library" && (e === "security" || e === "port") ? j("network") : t.target, a = r ? "h4" : "h3", o = w(t);
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		"data-diagnostic-check": e,
		className: D("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", r ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, H.jsxs)("div", {
			className: D("flex min-w-0 flex-1 flex-col", r ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, H.jsx)(a, {
						className: D("text-text-primary", r ? "text-body-2-medium" : "text-body-medium"),
						children: o.label
					}), /* @__PURE__ */ (0, H.jsx)(Z, { status: t.status })]
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					"data-check-reason": !0,
					className: D("text-body-2-regular break-words", r ? "text-text-secondary" : "text-text-primary"),
					children: o.reason
				}),
				o.action ? /* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: N("manage:diagnostics.suggestedFixText", { action: o.action })
				}) : null
			]
		}), i ? /* @__PURE__ */ (0, H.jsx)("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ (0, H.jsx)(n, {
				size: "small",
				variant: "secondary",
				href: i,
				children: i.startsWith("/settings/") ? N("manage:diagnostics.openSection", { section: E(i) }) : le[i] ?? N("manage:diagnostics.openRelated")
			})
		}) : null]
	});
}
function de(e) {
	let r = L({
		queryKey: i,
		queryFn: ({ signal: e }) => ne(e),
		staleTime: 1e4
	}), o = F(), [l, u] = (0, V.useState)(""), d = () => void o.run("refresh", async () => {
		let e = await r.refetch();
		if (e.error) throw e.error;
		return e.data;
	}, () => u(""), (e) => u(k(e))), f = r.data;
	if (!f && r.isPending) return /* @__PURE__ */ (0, H.jsx)("div", {
		role: "status",
		"aria-label": N("manage:diagnostics.loading"),
		dangerouslySetInnerHTML: { __html: te() }
	});
	if (!f) return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "ui-configpage",
		children: [
			/* @__PURE__ */ (0, H.jsx)(Q, {}),
			/* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				title: N("manage:diagnostics.loadFailed"),
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					variant: "secondary",
					onClick: d,
					...C(o.busy === "refresh"),
					children: N("manage:diagnostics.checkAgain")
				}),
				children: r.error ? k(r.error) : N("manage:diagnostics.reportNotFound")
			}),
			/* @__PURE__ */ (0, H.jsx)(Y, {})
		]
	});
	let p = Object.entries(f.checks).filter(([, e]) => [
		"warning",
		"failed",
		"unknown"
	].includes(e.status)), m = Object.entries(f.checks).filter(([, e]) => ![
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
						...C(o.busy === "refresh"),
						children: N("manage:diagnostics.checkAgain")
					})
				})
			}),
			l ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				children: l
			}) : null,
			p.length ? /* @__PURE__ */ (0, H.jsx)(g, {
				guide: "attention",
				title: N("manage:diagnostics.attentionTitle", { count: p.length }),
				children: p.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(g, {
				guide: "health",
				title: N("manage:diagnostics.collectionHealth"),
				children: /* @__PURE__ */ (0, H.jsxs)(y, { children: [f.library.issue_at ? /* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: N("manage:diagnostics.healthRecordedAtTime", { time: X(f.library.issue_at) })
				}) : null, Object.entries(f.library.groups).map(([t, n]) => /* @__PURE__ */ (0, H.jsx)(G, {
					group: n,
					...e
				}, t))] })
			}),
			m.length ? /* @__PURE__ */ (0, H.jsx)("section", {
				"aria-label": N("manage:diagnostics.systemChecks"),
				children: /* @__PURE__ */ (0, H.jsx)(a, {
					summary: N("manage:diagnostics.otherChecks", { count: m.length }),
					contentClassName: "gap-5",
					children: ue.map(([e, t]) => {
						let n = m.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ (0, H.jsxs)("section", {
							"aria-label": e,
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [e, /* @__PURE__ */ (0, H.jsx)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: N("manage:diagnostics.groupCount", { count: n.length })
								})]
							}), /* @__PURE__ */ (0, H.jsx)(_, { children: n.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
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
				"aria-label": N("manage:diagnostics.sourceSessions"),
				className: "flex min-w-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, H.jsx)(v, { children: N("manage:diagnostics.sourceSessions") }),
					f.sources.map((e) => /* @__PURE__ */ (0, H.jsx)("article", {
						"data-diagnostic-source": e.source,
						children: /* @__PURE__ */ (0, H.jsx)(_, { children: /* @__PURE__ */ (0, H.jsxs)(y, { children: [
							/* @__PURE__ */ (0, H.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
									className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
									children: [/* @__PURE__ */ (0, H.jsx)(z, { source: e.source }), e.label]
								}), /* @__PURE__ */ (0, H.jsx)(Z, { status: e.status })]
							}),
							/* @__PURE__ */ (0, H.jsx)(R, {
								text: T(e, "reason"),
								className: "text-body-regular text-text-primary"
							}),
							/* @__PURE__ */ (0, H.jsxs)(c, { children: [
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: N("manage:diagnostics.lastSuccess"),
									children: e.last_success_at ? X(e.last_success_at) : N("manage:diagnostics.noSuccessYet")
								}),
								e.last_check_at ? /* @__PURE__ */ (0, H.jsxs)(s, {
									term: N("manage:diagnostics.lastChecked"),
									children: [X(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? N("manage:diagnostics.checkDuration", { seconds: e.elapsed_s.toFixed(2) }) : ""]
								}) : null,
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: N("manage:diagnostics.pausedUntil"),
									children: e.cooldown_until ? X(e.cooldown_until) : N("manage:diagnostics.notPaused")
								})
							] })
						] }) })
					}, e.source)),
					/* @__PURE__ */ (0, H.jsx)("div", { children: /* @__PURE__ */ (0, H.jsx)(n, {
						size: "small",
						variant: "secondary",
						href: "/sources",
						children: N("manage:diagnostics.openSources")
					}) })
				]
			})
		]
	});
}
export { de as DiagnosticsPage };

//# debugId=c4d51946-e2c8-4456-a75a-ab188e907845