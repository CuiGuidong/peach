(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ff3d9f41-392e-4239-9c96-f4110755988b", e._sentryDebugIdIdentifier = "sentry-dbid-ff3d9f41-392e-4239-9c96-f4110755988b");
	} catch {}
})();
import { Button as e, CLEANUP_ENTRY as t, CLEANUP_ENTRY_GRID as n, CLEANUP_HASH_REDIRECTS as r, CLEANUP_TOOLS as i, Chip as a, DIRECTORY_TEMPLATE_ERROR as o, DUPLICATES_KEY as s, Fieldset as c, FieldsetTitle as l, IDLE_REPAIR as u, IconButton as d, IndexSearch as f, Input as p, JUNK_KEY as m, LINKS_KEY as h, LINK_CHECK_KEY as g, LINK_KINDS as _, LINK_PRUNE_KEY as ee, LOC as v, LibraryProcessingCard as y, MEDIA_REPAIR_KEY as b, MEDIA_REPAIR_URL as x, MEDIA_SOURCES_KEY as S, MEDIA_SOURCE_ICONS as C, Note as w, ORGANIZE_KEY as T, ORPHAN_RECORDS_KEY as E, PERFORMER_DELETE_KEY as D, PLAIN_STAT_STRIP as O, PlainStat as k, Progress as te, QUALITY_GOALS_KEY as A, REPAIR_CARD_TEXT as j, REPAIR_LIBRARIES_KEY as ne, RESOURCE_APPLY_KEY as M, RESOURCE_SCAN_KEY as re, RESULT_PANEL as ie, RESULT_SECTION as N, REVIEW_COUNTS_KEY as P, SOURCE_LABELS as F, SectionHeading as I, Select as ae, SelectItem as oe, SourceMark as se, StatusLabel as ce, TRASH_KEY as L, TaskProgress as R, Wt as le, __toESM as ue, apiSend as z, applyConfirmText as de, applyLeftovers as fe, applyPlanText as pe, applyText as me, attachOrphan as B, baseName as he, busyProps as V, candidateText as H, checkLine as ge, confirmModal as U, cx as _e, deletePerformerVideos as ve, entityDisplayName as ye, entityFaceImg as be, entityPath as xe, errorMessage as W, esc as Se, fetchDeletePerformers as Ce, fetchDeletePlan as we, fetchDuplicates as Te, fetchJunkSummary as Ee, fetchLinkCheck as De, fetchLinkPrune as Oe, fetchLinkStats as ke, fetchMediaRepair as Ae, fetchMediaSources as je, fetchOrganize as Me, fetchOrganizeExample as Ne, fetchOrphanRecords as Pe, fetchQualityGoals as Fe, fetchRepairLibraries as Ie, fetchResourceApply as Le, fetchResourceScan as Re, fetchReviewCounts as ze, fetchTrashSummary as Be, firstGrapheme as Ve, fmtSize as G, hasChanges as He, hasResourceRoots as Ue, junkBreakdown as We, missingToolText as Ge, nameFallback as Ke, organizeOutcome as qe, pickOrganizeFolder as Je, plainStatClass as K, planSummary as Ye, previewOrganize as Xe, pruneText as Ze, purgeCount as Qe, purgeOrphan as $e, queryClient as q, recordsText as et, rememberTemplates as tt, require_jsx_runtime as nt, require_react as rt, reviewSummary as it, scanLine as at, shellNavigate as ot, sourceMeta as st, spriteGlyph as J, startLinkCheck as ct, startLinkPrune as lt, startOrganize as ut, startResourceApply as dt, startResourceScan as ft, statusLine as pt, useAction as mt, useBackgroundJob as Y, useEntityNames as ht, useMutation as gt, useQuery as X, withOrganizeJob as _t } from "./peach-app.js";
import { Page as vt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as yt } from "./peach-app.error-excerpt-CigKESNN.js";
import { DataTable as bt } from "./peach-app.data-table-CkfCxzLR.js";
import { SiteMark as xt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as St } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as Ct } from "./peach-app.folder-rows-c6xBdYCX.js";
import { ConnectionStatus as wt } from "./peach-app.connection-status-B0tSnjj0.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Z = /* @__PURE__ */ ue(rt(), 1), Q = nt(), Tt = J("chevron-right");
function Et({ label: e, icon: n, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, Q.jsxs)("button", {
		type: "button",
		...o,
		className: t.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: t.icon,
				children: /* @__PURE__ */ (0, Q.jsx)(n, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				className: t.body,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: t.title,
						children: e
					}),
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: _e(t.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: t.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Tt, {
				"aria-hidden": !0,
				className: t.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Dt = (e) => C[e] || e, Ot = (e) => q.setQueryData(b, e);
function kt({ toast: t = () => {} }) {
	let n = Y({
		queryKey: b,
		queryFn: ({ signal: e }) => Ae(e),
		start: (e) => z(x, {
			library: e,
			restart: !0
		}),
		onFinish: (e) => {
			e.status === "complete" && !e.failed && !e.missing_tool && t(e.repaired ? `Repaired ${e.repaired.toLocaleString()} videos` : "Library checked; no videos need repair");
		}
	}), r = X({
		queryKey: ne,
		queryFn: ({ signal: e }) => Ie(e)
	}), [i, a] = (0, Z.useState)(""), o = mt(), s = n.job ?? u, d = r.data ?? [], f = s.status === "running", p = d.find((e) => e.id === (f ? s.library : i)) ?? d.find((e) => e.id === s.library) ?? d[0], m = () => {
		p && U({
			title: `Repair library "${p.name}"`,
			body: "Videos missing a timestamp table get a repaired header saved as a copy, leaving the original untouched; videos missing an index have it rebuilt to replace the original. Broken originals are renamed to a hidden file in the same directory (.filename.peach-original) and kept. " + (p.metered ? "This library sits on a metered source, and every repair pulls the whole video down again." : ""),
			confirmLabel: "Repair library",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => z(x, { stop: !0 }, "POST", e), Ot), g = n.outcome, _ = pt(f ? s : g ?? u), ee = o.error || g?.error || (n.query.error ? "The media repair state cannot be read" : "");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsx)(c, {
			layout: "split",
			label: "Media repair",
			footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ae, {
				"aria-label": "Media library",
				prefix: "Media library",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !d.length,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: d.map((e) => /* @__PURE__ */ (0, Q.jsxs)(oe, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, Q.jsx)(se, { mark: Dt(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: h,
				...V(o.busy === "stop"),
				children: "Stop"
			}) : /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: m,
				disabled: !p,
				children: "Start repair"
			})] }),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(l, { children: "Media repair" }),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: j
					}),
					f && s.total ? /* @__PURE__ */ (0, Q.jsx)(te, {
						label: "Repair progress",
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "warning",
				title: "untrunc is missing",
				action: /* @__PURE__ */ (0, Q.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: n.dismiss,
					children: "Dismiss the note"
				}),
				children: Ge(g)
			}) : null, ee ? /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "error",
				children: ee
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function At({ className: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, Q.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var jt = J("rotate-cw"), Mt = "The site returned 404 or 410, confirming this address does not exist.", Nt = "Sites refusing programmatic access or a one-off glitch land here. Links are kept; select and retry individually.", Pt = "Each entry is re-verified once before deletion; this cannot be undone.", Ft = "Progress could not be read for the moment; reconnecting…", It = (e) => Number(e || 0).toLocaleString();
function Lt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Rt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: N,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, Q.jsx)(bt, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach profile",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? xe(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${St}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${Se(Ve(e.entity))}</span>` + be({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.entity
						})]
					})
				},
				{
					id: "kind",
					label: "Kind",
					width: 128,
					value: (e) => _[e.link_kind] || e.link_kind,
					render: (e) => _[e.link_kind] || e.link_kind
				},
				{
					id: "label",
					label: "Link name",
					min: 128,
					value: (e) => e.label || "",
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.label || new URL(e.url).hostname
						})
					})
				},
				{
					id: "note",
					label: "Results",
					width: 320,
					min: 192,
					value: (e) => e.note,
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, Q.jsx)(ce, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Q.jsx)(ce, {
								tone: s ? "error" : "warning",
								children: s ? "The address no longer works" : "Verdict not fetched"
							}), /* @__PURE__ */ (0, Q.jsx)(yt, {
								text: e.note,
								className: "tabular-nums text-text-secondary"
							})]
						})
					})
				},
				{
					id: "url",
					label: "Address",
					width: 360,
					min: 180,
					value: (e) => e.url,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(xt, { linkId: e.id }),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ (0, Q.jsx)(le, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})
						]
					})
				}
			],
			rowId: (e) => String(e.id),
			description: n,
			unit: "links",
			panel: !1,
			footerActions: o,
			rowLabel: (e) => `${e.label || e.url} of ${e.entity}`,
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	}) : null;
}
function zt() {
	let t = X({
		queryKey: h,
		queryFn: ({ signal: e }) => ke(e)
	}), [n, r] = (0, Z.useState)([]), [i, o] = (0, Z.useState)([]), s = Y({
		queryKey: ee,
		queryFn: ({ signal: e }) => Oe(e),
		start: lt,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: h,
				exact: !0
			}), q.invalidateQueries({
				queryKey: g,
				exact: !0
			});
		}
	}), u = Y({
		queryKey: g,
		queryFn: ({ signal: e }) => De(e),
		start: ct,
		onStarted: () => {
			s.dismiss(), r([]), o([]);
		}
	}), d = u.job, f = d?.check_id ?? "";
	(0, Z.useEffect)(() => {
		r([]), o([]);
	}, [f]);
	let p = u.running || u.start.isPending, m = s.running || s.start.isPending, v = d?.status === "complete", y = d?.gone ?? [], b = d?.unclear ?? [], x = v ? b : [], S = y.filter((e) => i.includes(e.id)).map((e) => e.id), C = x.filter((e) => n.includes(e.id)).map((e) => e.id), T = t.data, E = (T?.top_hosts ?? []).slice(0, 3), D = (e) => {
		p || e && !e.length || u.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, O = (e) => {
		!m && y.length && U({
			title: "Delete dead links",
			body: `This deletes ${e?.length ?? y.length} dead link${(e?.length ?? y.length) === 1 ? "" : "s"}. ${(e?.length ?? y.length) === 1 ? "It is checked once more before deletion, and deletion cannot be undone." : "They are checked once more before deletion, and deletion cannot be undone."}`,
			confirmLabel: "Delete dead links",
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, k = s.outcome, te = u.start.error ?? s.start.error, A = null, j = null;
	if (k?.status === "failed") j = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Link cleanup did not finish",
		children: k.error || "Check the task records to verify the processed links."
	});
	else if (k && !y.length && !b.length) j = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "success",
		title: "Done",
		children: Ze(k)
	});
	else if (te) j = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Check failed",
		children: W(te)
	});
	else if (u.query.isError && d) j = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "Task state",
		children: Ft
	});
	else if (d?.status === "failed") j = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Check failed",
		children: d.error || "Check failed"
	});
	else if (d && d.status !== "idle") {
		A = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, Q.jsx)(R, {
			embedded: !0,
			label: ge(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, Q.jsx)(R, {
			embedded: !0,
			label: s.job?.message || "Re-verifying and deleting dead links",
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let t = `Retry selected now (${C.length})`;
		j = v || y.length || b.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: ie,
			children: [
				k?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "success",
					title: "Done",
					children: Ze(k)
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(Rt, {
					title: "Address expired",
					items: y,
					hint: Mt,
					picked: i,
					onPick: o,
					confirmed: !0,
					footer: v && y.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Pt
					}), /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						...V(m),
						onClick: () => O(),
						children: `Delete ${y.length} dead link${y.length === 1 ? "" : "s"}`
					})] }) : null,
					children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						size: "small",
						disabled: !v || !S.length,
						...V(m),
						onClick: () => O(S),
						children: `Delete selected (${S.length})`
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(Rt, {
					title: "This visit did not succeed",
					items: b,
					hint: Nt,
					picked: n,
					onPick: r,
					footer: x.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "primary",
						leadingIcon: jt,
						...V(p),
						onClick: () => D(x.map((e) => e.id)),
						children: `Retry all now (${x.length})`
					}) : null,
					children: x.length ? /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "secondary",
						leadingIcon: jt,
						disabled: !C.length,
						...V(p),
						onClick: () => D(C),
						children: t
					}) }) : null
				}),
				v && !y.length && !b.length ? /* @__PURE__ */ (0, Q.jsx)("p", {
					className: `${N} text-body-regular text-notification-success-foreground`,
					children: "Every link is reachable."
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(c, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-link-check": "",
				leadingIcon: At,
				...V(p),
				onClick: () => D(),
				children: p ? "Checking" : v ? "Check again" : "Check dead links"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(l, {
					id: "link-manager-title",
					gap: "small",
					children: "Link management"
				}),
				t.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "Reading link statistics failed",
					children: W(t.error)
				}) : T ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, Q.jsx)(Lt, {
						label: "Total links",
						value: It(T.total),
						note: `Spread across ${It(T.entities)} performers, studios, and series`
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Lt, {
						label: _[e] || e,
						value: It(t)
					}, e))]
				}), E.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "Main sites"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: E.map(([e, t]) => /* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(xt, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, Q.jsx)(le, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, Q.jsx)(a, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "tabular-nums",
									children: It(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: A
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: j
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Bt = (e, t) => `Organize ${e}${t ? ` in ${t} and its subdirectories` : "'s file names and directories"}: clean up special symbols and garbled characters, and rename or move per the filled-in template. Rows whose target already exists are skipped whole. This batch can be reverted whole via "Roll back previous batch".`, Vt = "This moves the files the last organize run touched back to their earlier names and locations, and the database paths follow. After reverting, this batch no longer appears here.", Ht = 8;
function Ut({ plan: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Ht).map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: he(e.current_path)
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: he(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Ht ? /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "Only the first 8 rows are listed; the full plan is in the plan CSV."
	}) : null] });
}
function Wt({ toast: t, failure: n }) {
	let r = X({
		queryKey: T,
		queryFn: ({ signal: e }) => Me(e)
	}), i = r.data, a = i?.locations ?? [], [s, u] = (0, Z.useState)(""), f = a.some((e) => e.location === s) ? s : a[0]?.location ?? "", m = i?.templates?.[f], [h, g] = (0, Z.useState)(null), _ = h?.location === f ? h : {
		location: f,
		file: m?.file ?? "",
		dir: m?.dir ?? ""
	}, ee = (e) => {
		g({
			..._,
			...e
		}), N.reset();
	}, [y, b] = (0, Z.useState)({
		location: "",
		path: ""
	}), x = y.location === f ? y.path : "", S = (0, Z.useRef)({
		location: f,
		path: x
	});
	S.current = {
		location: f,
		path: x
	};
	let [E, D] = (0, Z.useState)(null), O = (0, Z.useRef)(null), k = (0, Z.useRef)(null), te = (0, Z.useRef)(null), A = X({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Ne(_.file, _.dir, e),
		enabled: !!i
	}), [j, ne] = (0, Z.useState)("file"), M = (0, Z.useRef)(!1), re = (0, Z.useRef)(null);
	(0, Z.useLayoutEffect)(() => {
		let e = re.current;
		if (!e) return;
		re.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let ie = () => ({
		location: f,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = gt({
		mutationFn: Xe,
		onError: (e) => {
			let t = /Organize路径/.test(W(e)) ? "path" : o.test(W(e)) ? "dir" : "file";
			D(t), (t === "path" ? te : t === "dir" ? k : O).current?.focus();
		}
	}), P = gt({
		mutationFn: ({ initial: e }) => Je(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), D(null), N.reset(), te.current?.focus());
		}
	}), F = Y({
		queryKey: T,
		queryFn: ({ signal: e }) => Me(e),
		start: ut,
		jobOf: (e) => e,
		withJob: _t,
		onStarted: () => N.reset(),
		onFinish: (e) => {
			if (q.invalidateQueries({
				queryKey: T,
				exact: !0
			}), e.status !== "complete") return;
			let { text: r, failed: i } = qe(e);
			i ? n("Organize files", /* @__PURE__ */ Error(`${i} rows could not be processed`)) : t(r.replace(/.$/, ""));
		}
	}), I = F.running || F.start.isPending, ce = JSON.stringify(N.variables) === JSON.stringify(ie()), L = ce ? N.data : void 0, le = Number(L?.counts?.change || 0), ue = v[f] || f, z = (e) => {
		ee(e), D(null), N.reset();
	}, de = (e) => {
		let t = (j === "file" ? O : k).current, n = _[j], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		re.current = {
			field: j,
			caret: r + a.length
		}, z({ [j]: n.slice(0, r) + a + n.slice(i) });
	}, fe = () => {
		N.isPending || I || !f || (F.dismiss(), F.start.reset(), D(null), N.mutate(ie()));
	}, pe = () => {
		let e = N.variables;
		e && L && le && U({
			title: "Organize files",
			body: Bt(ue, e.path),
			confirmLabel: "Organize files",
			onConfirm: async () => {
				await F.start.mutateAsync({
					kind: "apply",
					request: e
				}), tt({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, me = () => void U({
		title: "Roll back the previous organize batch",
		body: Vt,
		confirmLabel: "Roll back organizing",
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), B = null, he = !!le && !I && !F.outcome, H = F.job, ge = F.outcome;
	if (H?.status === "running") {
		let e = H.message || H.stage || "Organizing files";
		B = /* @__PURE__ */ (0, Q.jsx)(R, {
			embedded: !0,
			label: e,
			value: Math.min(H.checked || 0, H.total || 0),
			total: H.total
		});
	} else if (ge?.status === "failed") B = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "File organizing did not finish",
		children: ge.error || "Check the task records to verify the processed files."
	});
	else if (ge) {
		let { text: e, failed: t } = qe(ge);
		B = /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: t ? "warning" : "success",
			title: t ? "Partially finished" : "Organize results",
			children: e
		});
	} else F.start.isError ? B = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Organizing failed",
		children: W(F.start.error)
	}) : N.isPending ? B = /* @__PURE__ */ (0, Q.jsx)(R, {
		embedded: !0,
		label: "Verifying the organize plan"
	}) : N.isError && ce ? B = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Organize preview failed",
		children: W(N.error)
	}) : L && (B = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "Preview results",
		children: Ye(L)
	}), le ? /* @__PURE__ */ (0, Q.jsx)(Ut, { plan: L }) : null] }));
	return /* @__PURE__ */ (0, Q.jsxs)(c, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "secondary",
				...V(I),
				onClick: me,
				children: "Roll back last batch"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: he ? "secondary" : "primary",
				disabled: !a.length || I,
				...V(N.isPending),
				onClick: fe,
				children: "Preview"
			}),
			he ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				onClick: pe,
				children: "Run organizing"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(l, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "Organize"
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: "Clean special symbols and mojibake out of file names, optionally rename by template and file into folders. Preview first, run after confirming; an executed batch can be reverted as a whole."
			}),
			r.isError ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "Reading organize configuration failed",
					children: W(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, Q.jsx)(ae, {
							"aria-label": "Which source to organize",
							prefix: "Source",
							className: "w-fit min-w-25",
							selectedKey: f || null,
							onSelectionChange: (e) => {
								e !== null && (u(String(e)), b({
									location: String(e),
									path: ""
								}), D(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, Q.jsxs)(oe, {
								id: e.location,
								textValue: v[e.location] || e.location,
								children: [/* @__PURE__ */ (0, Q.jsx)(se, { mark: C[e.location] || "database" }), v[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, Q.jsx)(p, {
								"aria-label": "Organize path",
								className: "min-w-0 flex-1",
								placeholder: "Leave empty to organize the whole source",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: te,
								isInvalid: E === "path",
								onChange: (e) => {
									b({
										location: f,
										path: e
									}), D(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ (0, Q.jsx)(d, {
								icon: Ct,
								"aria-label": "Choose the organize path",
								...V(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === f)?.roots[0] || "",
									location: f,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: "When a path is given, subdirectories are included and folder templates start from that path. With all templates left empty only file names are cleaned."
					}),
					P.isError ? /* @__PURE__ */ (0, Q.jsxs)(w, {
						tone: "error",
						title: "Choosing the folder failed",
						children: [W(P.error), "; you can also type a path directly."]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(p, {
						label: "Filename template",
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: E === "file",
						onFocus: () => {
							ne("file"), M.current = !0;
						},
						onChange: (e) => z({ file: e })
					}),
					/* @__PURE__ */ (0, Q.jsx)(p, {
						label: "Folder template",
						placeholder: "Leave empty to rename in place",
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: E === "dir",
						onFocus: () => {
							ne("dir"), M.current = !0;
						},
						onChange: (e) => z({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "Apply template",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: "Apply template"
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "secondary",
								size: "small",
								title: t.example || t.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									z({
										file: t.file,
										dir: t.dir
									}), M.current = !1;
								},
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "truncate",
									children: t.label
								})
							}, t.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": A.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: ["Path example:", /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "wrap-anywhere",
							children: A.data?.example || A.data?.error || (A.isError ? W(A.error) : "Previewing…")
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "Insert parameters",
						children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: "Insert parameters"
								}),
								" (into ",
								j === "file" ? "File name template" : "Folder template",
								"）"
							]
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "ghost",
								size: "small",
								"aria-label": `${t.label} {${t.key}}`,
								onClick: () => de(t.key),
								children: /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, Q.jsx)("code", { children: `{${t.key}}` }), /* @__PURE__ */ (0, Q.jsx)("span", {
										className: "text-text-secondary",
										children: t.label
									})]
								})
							}, t.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: "Click a parameter to insert it at the cursor; selected text gets replaced. Content in square brackets is omitted entirely when the field is empty."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: B
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var Gt = J("play"), Kt = () => q.invalidateQueries({
	queryKey: E,
	exact: !0
});
function qt({ item: t, toast: n }) {
	let [r, i] = (0, Z.useState)(t.candidates[0]?.id ?? null), a = gt({
		mutationFn: () => B(t.id, Number(r)),
		onSuccess: () => {
			let e = t.candidates.find((e) => e.id === r);
			n(`Moved the personal records of "${t.name}" to "${e?.name ?? "the selected files"}"`), Kt();
		},
		onError: (e) => n(W(e))
	}), o = gt({
		mutationFn: () => $e(t.id),
		onSuccess: (e) => {
			n(e.blocked.length ? `Files of "${t.name}" were restored, records not deleted; the next scan returns them to in-library status` : `Deleted the video record and personal records of "${t.name}"`), Kt();
		}
	}), s = () => {
		U({
			title: "Delete records",
			body: `Will delete the video records of "${t.name}"${et(t.records) ? ` and their personal records (${et(t.records)})` : ""}. This cannot be undone.`,
			confirmLabel: "Delete records",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				...V(c),
				onClick: s,
				children: "Delete records"
			}),
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(ae, {
				"aria-label": `Choose the file to receive ${t.name}'s personal records`,
				prefix: "Receive",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: t.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(oe, {
					id: e.id,
					textValue: H(e),
					children: H(e)
				}, e.id))
			}) : null,
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...V(c),
				onClick: () => a.mutate(),
				children: "Move records"
			}) : null
		]
	});
}
function Jt({ item: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, Q.jsx)(Gt, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, Q.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, v[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function Yt({ toast: t }) {
	let [n, r] = (0, Z.useState)([]), i = X({
		queryKey: E,
		queryFn: ({ signal: e }) => Pe(e)
	}), a = i.data?.items ?? [], o = gt({
		mutationFn: (e) => $e(e),
		onSuccess: (e) => {
			t(`Deleted ${e.purged} video ${e.purged === 1 ? "record" : "records"} and ${e.purged === 1 ? "its" : "their"} personal records${e.blocked.length ? `; ${e.blocked.length} file${e.blocked.length === 1 ? " was" : "s were"} restored, records not deleted` : ""}`), r([]), Kt();
		}
	}), s = (e) => void U({
		title: "Delete selected records",
		body: `Will delete the following ${e.length} video records and all their personal records. This cannot be undone.`,
		items: e.map((e) => e.name),
		confirmLabel: "Delete selected records",
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), u = [
		{
			id: "item",
			label: "Videos",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(Jt, { item: e })
		},
		{
			id: "records",
			label: "Personal records",
			width: 176,
			min: 144,
			value: (e) => et(e.records),
			render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: et(e.records) || "none"
			})
		},
		{
			id: "target",
			label: "Actions",
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(qt, {
				item: e,
				toast: t
			})
		}
	];
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ (0, Q.jsxs)(c, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, Q.jsx)(l, {
				id: "orphan-records-title",
				children: "Records with missing files"
			}), /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "error",
				title: "Failed to read records whose files are lost",
				children: W(i.error)
			})]
		}) : /* @__PURE__ */ (0, Q.jsx)(bt, {
			label: "Videos whose files disappeared",
			items: a,
			columns: u,
			title: "Records with missing files",
			titleId: "orphan-records-title",
			unit: "videos",
			description: "The source files of these videos have been deleted; likes, Watch later, playlists, and watch history are kept. After choosing a replacement file, these records transfer to it and the old video records are removed.",
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (t) => /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				disabled: !t.length,
				...V(o.isPending),
				onClick: () => s(t),
				children: `Delete selected records (${t.length})`
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
var Xt = "Check performers to permanently delete their video files, details, and watch history across all sources, including titles in the trash. Performer profiles and photos are kept. A shared file with co-stars is deleted only once.";
function Zt({ person: e }) {
	let t = ye("performer", e.k, e.entity_id), n = Ke("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, Q.jsxs)("a", {
		href: xe("performer", e.k, e.entity_id),
		title: n || t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			"aria-hidden": !0,
			className: _e("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", St),
			dangerouslySetInnerHTML: { __html: `<span>${Se(Ve(t))}</span>` + be({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function Qt({ toast: t }) {
	ht();
	let n = X({
		queryKey: D,
		queryFn: ({ signal: e }) => Ce(e)
	}), [r, i] = (0, Z.useState)([]), [a, o] = (0, Z.useState)(""), [s, u] = (0, Z.useState)(!1), [d, p] = (0, Z.useState)(null), [m, h] = (0, Z.useState)(""), g = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => () => g.current?.abort(), []);
	let _ = (0, Z.useMemo)(() => [
		{
			id: "name",
			label: "Performers",
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(Zt, { person: e })
		},
		{
			id: "works",
			label: "Movie",
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => `${e.n.toLocaleString()} titles`
		},
		{
			id: "files",
			label: "Files",
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => `${e.file_count.toLocaleString()} titles`
		},
		{
			id: "bytes",
			label: "Registered size",
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => G(e.bytes)
		}
	], []), ee = a.toLocaleLowerCase(), v = (n.data?.items || []).filter((e) => !ee || [
		e.k,
		ye("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), y = async (e, n) => {
		if (s) return;
		u(!0), h("");
		let r = new AbortController();
		g.current = r;
		try {
			let i = await we(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				t("The selected performers have no deletable titles");
				return;
			}
			let a = i.performers.map((e) => ye("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await U({
				title: "Delete every title of the selected performers",
				body: `Permanently deletes ${i.total} video files tied to ${a.slice(0, 5).join(", ")}${a.length > 5 ? ` and ${a.length} more performers` : ""} (registered size ${G(i.bytes)}).The scope covers every source and the trash regardless of the current search, sort, or page. Files, details, and watch history are permanently deleted and cannot be recovered; performer profiles and photos are kept.` + (i.shared ? `${i.shared} of these files also belong to unchecked performers and will vanish from their titles once deleted.` : "") + `Involves: ${o.slice(0, 5).join(", ")}${o.length > 5 ? ` and ${o.length} more titles` : ""}.`,
				confirmLabel: "Permanently delete titles",
				danger: !0,
				onConfirm: () => ve(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			p(c), n(), await Promise.all([q.invalidateQueries({
				queryKey: D,
				exact: !0
			}), q.invalidateQueries({
				queryKey: L,
				exact: !0
			})]), t(`Permanently deleted ${c.purged} video files${c.blocked.length ? `; ${c.blocked.length} were not deleted` : ""}`);
		} catch (e) {
			r.signal.aborted || h(W(e));
		} finally {
			r.signal.aborted || u(!1);
		}
	}, b = d ? [
		...d.blocked,
		...d.cleanup_pending,
		...d.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": "Batch delete",
		children: [
			n.isPending || n.isError ? /* @__PURE__ */ (0, Q.jsxs)(c, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, Q.jsx)(l, {
					id: "batch-delete-title",
					children: "Batch delete"
				}), n.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "Failed to read the performer list",
					action: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "secondary",
						size: "small",
						onClick: () => void n.refetch(),
						children: "Retry"
					}),
					children: W(n.error)
				}) : /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: "Reading the performer list…"
				})]
			}) : /* @__PURE__ */ (0, Q.jsx)(bt, {
				label: "Performer titles",
				title: "Batch delete",
				titleId: "batch-delete-title",
				unit: " performers",
				description: Xt,
				items: v,
				columns: _,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => ye("performer", e.k, e.entity_id),
				selected: r,
				onSelected: i,
				toolbarActions: /* @__PURE__ */ (0, Q.jsx)(f, {
					label: "Search a performer's name or alias",
					value: a,
					onQuery: (e) => {
						o(e), i([]);
					}
				}),
				actions: (t, n) => /* @__PURE__ */ (0, Q.jsx)(e, {
					variant: "danger",
					size: "small",
					...V(s),
					onClick: () => void y(t, n),
					children: "Delete the selected performers' titles"
				})
			}),
			m ? /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "error",
				title: "Could not read the deletion list",
				children: m
			}) : null,
			d ? /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: b.length ? "warning" : "info",
				title: `Permanently deleted ${d.purged} video files`,
				extra: b.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: b.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
						e.path,
						"（",
						e.reason,
						"）"
					] }, t))
				}) : null,
				children: b.length ? `${d.blocked.length} files could not be deleted and their library records remain; ${d.cleanup_pending.length} quarantined files and ${d.cache_blocked.length} cache files await cleanup.` : "The selected titles and their linked records are deleted; performer profiles and photos are kept."
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var $t = J("git-compare"), en = J("rotate-cw"), tn = "Progress could not be read for the moment; reconnecting…", nn = "Clean up stale entries", rn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function an({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: rn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: K(),
			children: [/* @__PURE__ */ (0, Q.jsx)(k, {
				label: F[e.location] || "Media sources",
				mark: /* @__PURE__ */ (0, Q.jsx)(se, { mark: C[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, Q.jsx)(wt, {
					online: e.online,
					children: e.online ? "Accessible" : "Offline"
				}),
				figure: e.online ? `${$(e.missing)} items` : "—",
				meta: e.online ? st(e) : `${st(e)} · skipped this run`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsxs)(ce, {
					tone: "warning",
					children: [$(e.unreadable), " directories not read"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: rn,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					label: "Pending permanent deletion",
					figure: `${$(Qe(e))} items`,
					meta: "Files no longer on disk, trash included"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					label: "Will be marked as vanished",
					figure: `${$(e.vanish)} items`,
					meta: "Carries personal records; the records stay"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					label: "Empty folders",
					figure: `${$(e.empty)} items`,
					meta: "Keep source roots"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					label: "Cleanable caches",
					figure: `${$(n.files)} items`,
					meta: n.files ? G(n.bytes) : ""
				})
			})
		]
	})] });
}
function on({ toast: t }) {
	let n = Y({
		queryKey: M,
		queryFn: ({ signal: e }) => Le(e),
		start: dt,
		onFinish: (e) => {
			if (q.invalidateQueries({
				queryKey: L,
				exact: !0
			}), q.invalidateQueries({
				queryKey: re,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = fe(e);
			r ? t(`Completed ${$(n)} items, ${$(r)} items not processed`, { warning: !0 }) : t("Cleaned dead entries");
		}
	}), r = Y({
		queryKey: re,
		queryFn: ({ signal: e }) => Re(e),
		start: ft,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = i?.status === "complete" || i?.status === "failed", u = a ? "Scanning" : s ? "Rescan" : "Check files", d = (e) => void U({
		title: nn,
		body: de(e),
		confirmLabel: nn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), f = n.outcome, p = (e) => {
		let t = fe(e).left > 0;
		return /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: t ? "warning" : "success",
			title: t ? "Partially finished" : "Cleanup results",
			children: me(e, G)
		});
	}, m = null, h = null;
	if (f?.status === "failed") h = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Resource cleanup did not finish",
		children: f.error || "Check the task records to verify the processed files."
	});
	else if (f) h = p(f);
	else if (n.running) m = /* @__PURE__ */ (0, Q.jsx)(R, {
		embedded: !0,
		label: n.job?.message || "Reviewing and cleaning dead entries"
	});
	else if (r.start.isError) h = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Scan failed",
		children: W(r.start.error)
	});
	else if (r.query.isError && i) h = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "Task state",
		children: tn
	});
	else if (i?.status === "running") {
		let e = at(i);
		m = /* @__PURE__ */ (0, Q.jsx)(R, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (h = /* @__PURE__ */ (0, Q.jsx)(an, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, Q.jsx)(an, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Scan failed",
		children: i.error || "The background scan failed"
	})] });
	else if (i?.status === "complete" && i.applied) h = n.job?.status === "complete" ? p(n.job) : /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "Cleanup results",
		children: "This check's results have been cleaned up; rescanning re-checks them."
	});
	else if (i?.status === "complete") {
		let t = He(i);
		h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(an, { scan: i }), t ? /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: "neutral",
			title: "Clean content",
			action: /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				...V(o),
				onClick: () => d(i),
				children: o ? "Reviewing and cleaning…" : nn
			}),
			children: pe(i)
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "Reachable sources checked; no records, empty folders, or caches waiting for cleanup."
		})] });
	}
	return n.start.isError && !f && (h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [h, /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Cleanup failed",
		children: W(n.start.error)
	})] })), /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(c, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-resource-scan": !0,
				leadingIcon: s && !a ? en : $t,
				...V(a),
				onClick: () => {
					a || r.start.mutate();
				},
				children: u
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(l, {
					id: "resource-sync-title",
					gap: "small",
					children: "Resource sync"
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: "Checks files on local disks and cloud drives against library records one by one, listing records whose files no longer exist, empty folders, and caches no longer referenced."
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: m
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: h
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function sn({ toast: e }) {
	let t = X({
		queryKey: S,
		queryFn: ({ signal: e }) => je(e)
	});
	return t.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "Failed to read media sources",
		children: W(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, Q.jsx)("p", {
		role: "status",
		children: "Reading media sources…"
	}) : Ue(t.data) ? /* @__PURE__ */ (0, Q.jsx)(on, { toast: e }) : /* @__PURE__ */ (0, Q.jsxs)(c, {
		layout: "stack",
		label: "Resource sync",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(l, { children: "Resource sync" }),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: "No media directory is configured to check yet."
			}),
			/* @__PURE__ */ (0, Q.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: "Configure libraries"
			})
		]
	});
}
function cn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, Q.jsx)(Wt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, Q.jsx)(sn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, Q.jsx)(Yt, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, Q.jsx)(kt, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, Q.jsx)(zt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, Q.jsx)(Qt, { toast: r });
	}
	return /* @__PURE__ */ (0, Q.jsx)(vt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function ln(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: "Load failed",
		state: "error"
	} : {
		figure: "Reading…",
		state: "loading"
	} : t(e.data);
}
function un({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: K({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, Q.jsx)(k, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function dn({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, Q.jsx)(Et, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var fn = J("square-check-big"), pn = J("sparkles"), mn = J("file-stack"), hn = J("file-archive"), gn = J("trash"), _n = () => {
	for (let e of [
		P,
		A,
		s,
		m
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function vn({ toast: e, open: t, navigate: a }) {
	let o = X({
		queryKey: P,
		queryFn: ({ signal: e }) => ze(e)
	}), c = X({
		queryKey: A,
		queryFn: ({ signal: e }) => Fe(e)
	}), l = X({
		queryKey: s,
		queryFn: ({ signal: e }) => Te(e)
	}), u = X({
		queryKey: m,
		queryFn: ({ signal: e }) => Ee(e)
	}), d = X({
		queryKey: L,
		queryFn: ({ signal: e }) => Be(e)
	});
	return (0, Z.useEffect)(() => {
		let e = r[location.hash];
		e && ot(e + location.search, { replace: !0 });
	}, []), /* @__PURE__ */ (0, Q.jsxs)(vt, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(I, {
				id: "cleanup-pending",
				children: "Pending review"
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: O,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(un, {
						section: "review",
						label: "Manual review",
						icon: fn,
						open: t,
						value: ln(o, it)
					}),
					/* @__PURE__ */ (0, Q.jsx)(un, {
						section: "duplicates",
						label: "Duplicates",
						icon: mn,
						open: t,
						value: ln(l, (e) => Number(e.total || 0) ? {
							figure: `${Number(e.total).toLocaleString()} groups - ${Number(e.files || 0).toLocaleString()} files`,
							meta: `Reclaimable ${G(e.reclaimable || 0)}`
						} : { figure: "No duplicate content" })
					}),
					/* @__PURE__ */ (0, Q.jsx)(un, {
						section: "ads",
						label: "Junk files",
						icon: hn,
						open: t,
						value: ln(u, (e) => ({
							figure: `${Number(e.pending_total || 0).toLocaleString()} awaiting review`,
							meta: We(e)
						}))
					}),
					/* @__PURE__ */ (0, Q.jsx)(un, {
						section: "quality",
						label: "HD version",
						icon: pn,
						open: t,
						value: ln(c, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} pending upgrade` }))
					}),
					/* @__PURE__ */ (0, Q.jsx)(un, {
						section: "trash",
						label: "Trash",
						icon: gn,
						open: t,
						value: ln(d, (e) => ({
							figure: `${Number(e.total || 0).toLocaleString()} items in trash`,
							meta: e.total ? `Using ${G(e.bytes || 0)}` : "Review and restore content moved to the trash"
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, Q.jsx)(y, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: _n
			})
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(I, {
				id: "cleanup-maintenance",
				children: "Organize and maintain"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: n,
				children: i.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(dn, {
					tool: e,
					navigate: a
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(I, {
				id: "cleanup-deletion",
				children: "Clean up and delete"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: n,
				children: i.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(dn, {
					tool: e,
					navigate: a
				}, e.key))
			})]
		})
	] });
}
export { vn as DataCleanupPage, cn as DataCleanupToolPage };

//# debugId=ff3d9f41-392e-4239-9c96-f4110755988b