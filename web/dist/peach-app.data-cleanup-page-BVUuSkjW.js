(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d19021ae-2825-426e-9580-e31846871a81", e._sentryDebugIdIdentifier = "sentry-dbid-d19021ae-2825-426e-9580-e31846871a81");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryLabel as b, LibraryProcessingCard as x, MEDIA_REPAIR_KEY as S, MEDIA_REPAIR_URL as C, MEDIA_SOURCES_KEY as w, MEDIA_SOURCE_ICONS as T, Note as E, ORGANIZE_KEY as te, ORGANIZE_PARAMETER_HINT as ne, ORGANIZE_SCOPE_HINT as re, ORGANIZE_TEXT as D, ORPHAN_RECORDS_KEY as O, ORPHAN_RECORDS_TEXT as k, PERFORMER_DELETE_KEY as A, PLAIN_STAT_STRIP as ie, PlainStat as j, Progress as ae, QUALITY_GOALS_KEY as M, REPAIR_CARD_TEXT as oe, REPAIR_LIBRARIES_KEY as se, RESOURCE_APPLY_KEY as N, RESOURCE_SCAN_KEY as P, RESOURCE_SYNC_TEXT as F, RESULT_PANEL as ce, RESULT_SECTION as le, REVIEW_COUNTS_KEY as I, SOURCE_LABELS as ue, SectionHeading as de, Select as fe, SelectItem as pe, SourceLabel as me, SourceMark as he, StatusLabel as ge, TRASH_KEY as _e, TaskProgress as L, Wt as ve, __toESM as ye, activityKind as R, apiSend as z, applyConfirmText as be, applyLeftovers as B, applyPlanText as xe, applyText as Se, attachOrphan as Ce, baseName as we, busyProps as V, candidateText as Te, checkLine as Ee, codedText as De, confirmModal as H, cx as Oe, deletePerformerVideos as ke, entityDisplayName as Ae, entityFaceImg as je, entityPath as Me, errorMessage as U, esc as Ne, fetchDeletePerformers as Pe, fetchDeletePlan as Fe, fetchDuplicates as Ie, fetchJunkSummary as Le, fetchLinkCheck as Re, fetchLinkPrune as ze, fetchLinkStats as Be, fetchMediaRepair as Ve, fetchMediaSources as He, fetchOrganize as Ue, fetchOrganizeExample as We, fetchOrphanRecords as Ge, fetchQualityGoals as Ke, fetchRepairLibraries as qe, fetchResourceApply as Je, fetchResourceScan as Ye, fetchReviewCounts as Xe, fetchTrashSummary as Ze, firstGrapheme as Qe, fmtSize as W, hasChanges as $e, hasResourceRoots as et, jobText as G, junkBreakdown as tt, missingToolText as nt, organizeOutcome as rt, peachHistory$1 as it, pickOrganizeFolder as at, plainStatClass as K, planSummary as ot, previewOrganize as st, pruneText as ct, purgeCount as lt, purgeOrphan as ut, queryClient as q, recordsText as dt, rememberTemplates as ft, require_jsx_runtime as pt, require_react as mt, reviewSummary as ht, scanLine as gt, serverLabel as _t, sourceMeta as vt, spriteGlyph as J, stageText as yt, startLinkCheck as bt, startLinkPrune as xt, startOrganize as St, startResourceApply as Ct, startResourceScan as wt, statusLine as Tt, t as Y, useAction as Et, useBackgroundJob as X, useEntityNames as Dt, useMutation as Ot, useOrderedLibraries as kt, useQuery as Z, withOrganizeJob as At } from "./peach-app.js";
import { Page as jt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Mt } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { DataTable as Nt } from "./peach-app.data-table-C4egVbd2.js";
import { SiteMark as Pt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as Ft } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as It } from "./peach-app.folder-rows-C3hhF_90.js";
import { ConnectionStatus as Lt } from "./peach-app.connection-status-BrXhLGSm.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ ye(mt(), 1), $ = pt(), Rt = J("chevron-right");
function zt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, $.jsxs)("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ (0, $.jsx)(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: Oe(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(Rt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Bt = (e) => T[e] || e, Vt = (e) => q.setQueryData(S, e);
function Ht({ toast: e = () => {} }) {
	let n = X({
		queryKey: S,
		queryFn: ({ signal: e }) => Ve(e),
		start: (e) => z(C, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? Y("cleanup:mediaRepair.repaired", { count: t.repaired }) : Y("cleanup:mediaRepair.nothingToRepair"));
		}
	}), r = Z({
		queryKey: se,
		queryFn: ({ signal: e }) => qe(e)
	}), [i, a] = (0, Q.useState)(""), o = Et(), s = n.job ?? d, c = kt(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && H({
			title: Y("cleanup:mediaRepair.confirmTitle", { name: p.name }),
			body: [Y("cleanup:mediaRepair.body"), ...p.metered ? [Y("cleanup:mediaRepair.meteredWarning")] : []].join(Y("cleanup:shared.sentenceGap")),
			confirmLabel: Y("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => z(C, { stop: !0 }, "POST", e), Vt), g = n.outcome, _ = Tt(f ? s : g ?? d), v = o.error || G(g, "error") || (n.query.error ? Y("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(l, {
			layout: "split",
			label: Y("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(fe, {
				"aria-label": Y("cleanup:mediaRepair.library"),
				prefix: Y("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(pe, {
					id: e.id,
					textValue: e.name,
					children: /* @__PURE__ */ (0, $.jsx)(b, { library: {
						id: e.id,
						name: e.name,
						icon: Bt(e.icon)
					} })
				}, e.id))
			}), f ? /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: h,
				...V(o.busy === "stop"),
				children: Y("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: m,
				disabled: !p,
				children: Y("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: oe
					}),
					f && s.total ? /* @__PURE__ */ (0, $.jsx)(ae, {
						label: Y("cleanup:mediaRepair.progress"),
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "warning",
					title: Y("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: Y("cleanup:mediaRepair.dismiss")
					}),
					children: nt(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Ut({ className: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("svg", {
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
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, $.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var Wt = J("rotate-cw"), Gt = Y("cleanup:links.goneHint"), Kt = Y("cleanup:links.unclearHint"), qt = Y("cleanup:links.pruneHint"), Jt = Y("cleanup:shared.reconnecting"), Yt = (e) => Number(e || 0).toLocaleString();
function Xt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, $.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Zt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	if (!t.length) return null;
	let c = [
		{
			id: "entity",
			label: Y("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? Me(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${Ft}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${Ne(Qe(e.entity))}</span>` + je({
						kind: e.entity_kind,
						id: e.entity_id,
						hasImage: e.face?.has_image,
						version: e.face?.image_version,
						focus: e.face?.avatar_focus,
						thumb: !0,
						mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
					}) }
				}), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.entity
				})]
			})
		},
		{
			id: "kind",
			label: Y("cleanup:shared.type"),
			width: 128,
			value: (e) => v[e.link_kind] || e.link_kind,
			render: (e) => v[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: Y("cleanup:links.columnName"),
			min: 128,
			value: (e) => e.label || "",
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.label || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: Y("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			render: (e) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 w-full",
				"data-link-result": s ? "gone" : "unclear",
				children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, $.jsx)(ge, {
					tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(ge, {
						tone: s ? "error" : "warning",
						children: Y(s ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(Mt, {
						text: _t(e.note_code ?? "", e.note, e.note_params),
						className: "tabular-nums text-text-secondary"
					})]
				})
			})
		},
		{
			id: "url",
			label: Y("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)(Pt, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(ve, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: le,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(Nt, {
			label: e,
			items: t,
			columns: c,
			rowId: (e) => String(e.id),
			description: n,
			unit: Y("cleanup:links.unit"),
			panel: !1,
			footerActions: o,
			rowLabel: (e) => Y("cleanup:links.rowLabel", {
				entity: e.entity,
				link: e.label || e.url
			}),
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	});
}
function Qt() {
	let e = Z({
		queryKey: g,
		queryFn: ({ signal: e }) => Be(e)
	}), [n, r] = (0, Q.useState)([]), [i, a] = (0, Q.useState)([]), s = X({
		queryKey: ee,
		queryFn: ({ signal: e }) => ze(e),
		start: xt,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: g,
				exact: !0
			}), q.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = X({
		queryKey: _,
		queryFn: ({ signal: e }) => Re(e),
		start: bt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], C = b.filter((e) => i.includes(e.id)).map((e) => e.id), w = S.filter((e) => n.includes(e.id)).map((e) => e.id), T = e.data, te = (T?.top_hosts ?? []).slice(0, 3), ne = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, re = (e) => {
		h && !m && b.length && H({
			title: Y("cleanup:links.deleteDead"),
			body: Y("cleanup:links.deleteDeadBody", { count: e?.length ?? b.length }),
			confirmLabel: Y("cleanup:links.deleteDead"),
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, D = s.outcome, O = c.start.error ?? s.start.error, k = null, A = null;
	if (D?.status === "failed") A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.pruneIncomplete"),
		children: G(D, "error") || Y("cleanup:links.checkTaskLog")
	});
	else if (D && !b.length && !x.length) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "success",
		title: Y("cleanup:links.pruneDone"),
		children: ct(D)
	});
	else if (O) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: U(O)
	});
	else if (c.query.isError && d) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: Jt
	});
	else if (d?.status === "failed") A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: G(d, "error") || Y("cleanup:links.checkFailed")
	});
	else if (d && d.status !== "idle") {
		k = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, $.jsx)(L, {
			embedded: !0,
			kind: R("link-check"),
			label: Ee(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, $.jsx)(L, {
			embedded: !0,
			kind: R("link-prune"),
			label: G(s.job) || Y("cleanup:links.pruning"),
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = Y("cleanup:links.retrySelected", { count: w.length });
		A = y || b.length || x.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: ce,
			children: [
				D?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "success",
					title: Y("cleanup:links.pruneDone"),
					children: ct(D)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(Zt, {
					title: Y("cleanup:links.dead"),
					items: b,
					hint: Gt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: qt
					}), /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						...V(m),
						onClick: () => re(),
						children: Y("cleanup:links.deleteDeadCount", { count: b.length })
					})] }) : null,
					children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !C.length,
						...V(m),
						onClick: () => re(C),
						children: Y("cleanup:links.deleteSelected", { count: C.length })
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(Zt, {
					title: Y("cleanup:links.unreached"),
					items: x,
					hint: Kt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "primary",
						leadingIcon: Wt,
						...V(p),
						onClick: () => ne(S.map((e) => e.id)),
						children: Y("cleanup:links.retryAll", { count: S.length })
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						leadingIcon: Wt,
						disabled: !w.length,
						...V(p),
						onClick: () => ne(w),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${le} text-body-regular text-notification-success-foreground`,
					children: Y("cleanup:links.allReachable")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-link-check": "",
				leadingIcon: Ut,
				disabled: !h,
				...V(p),
				onClick: () => ne(),
				children: Y(p ? "cleanup:links.checking" : y ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: Y("cleanup:tools.links")
				}),
				e.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:links.statsLoadFailed"),
					children: U(e.error)
				}) : T ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(Xt, {
						label: Y("cleanup:links.totalLinks"),
						value: Yt(T.total),
						note: Y("cleanup:links.entitySpread", { count: Number(T.entities || 0) })
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(Xt, {
						label: v[e] || e,
						value: Yt(t)
					}, e))]
				}), te.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: te.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(Pt, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(ve, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: Yt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: k
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: A
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var $t = (e, t) => t ? Y("cleanup:organize.applyBodyPath", {
	name: e,
	path: t
}) : Y("cleanup:organize.applyBodyAll", { name: e }), en = Y("cleanup:organize.rollbackBody"), tn = 8;
function nn({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, tn).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: we(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: we(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > tn ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: Y("cleanup:organize.planTruncated")
	}) : null] });
}
function rn({ toast: e, failure: n }) {
	let r = Z({
		queryKey: te,
		queryFn: ({ signal: e }) => Ue(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Q.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Q.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), N.reset();
	}, [ee, b] = (0, Q.useState)({
		location: "",
		path: ""
	}), x = ee.location === d ? ee.path : "", S = (0, Q.useRef)({
		location: d,
		path: x
	});
	S.current = {
		location: d,
		path: x
	};
	let [C, w] = (0, Q.useState)(null), O = (0, Q.useRef)(null), k = (0, Q.useRef)(null), A = (0, Q.useRef)(null), ie = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => We(_.file, _.dir, e),
		enabled: !!i
	}), [j, ae] = (0, Q.useState)("file"), M = (0, Q.useRef)(!1), oe = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = oe.current;
		if (!e) return;
		oe.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let se = () => ({
		location: d,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = Ot({
		mutationFn: st,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : s.test(U(e)) ? "dir" : "file";
			w(t), (t === "path" ? A : t === "dir" ? k : O).current?.focus();
		}
	}), P = Ot({
		mutationFn: ({ initial: e }) => at(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), w(null), N.reset(), A.current?.focus());
		}
	}), F = X({
		queryKey: te,
		queryFn: ({ signal: e }) => Ue(e),
		start: St,
		jobOf: (e) => e,
		withJob: At,
		onStarted: () => N.reset(),
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: te,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = rt(t);
			i ? n(Y("cleanup:tools.organize"), Error(Y("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), ce = F.running || F.start.isPending, le = JSON.stringify(N.variables) === JSON.stringify(se()), I = le ? N.data : void 0, ue = Number(I?.counts?.change || 0), de = y[d] || d, me = (e) => {
		v(e), w(null), N.reset();
	}, ge = (e) => {
		let t = (j === "file" ? O : k).current, n = _[j], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		oe.current = {
			field: j,
			caret: r + a.length
		}, me({ [j]: n.slice(0, r) + a + n.slice(i) });
	}, _e = () => {
		N.isPending || ce || !d || (F.dismiss(), F.start.reset(), w(null), N.mutate(se()));
	}, ve = () => {
		let e = N.variables;
		e && I && ue && H({
			title: Y("cleanup:tools.organize"),
			body: $t(de, e.path),
			confirmLabel: Y("cleanup:tools.organize"),
			onConfirm: async () => {
				await F.start.mutateAsync({
					kind: "apply",
					request: e
				}), ft({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, ye = () => void H({
		title: Y("cleanup:organize.rollbackTitle"),
		body: en,
		confirmLabel: Y("cleanup:organize.rollbackConfirm"),
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), z = null, be = !!ue && !ce && !F.outcome, B = F.job, xe = F.outcome;
	if (B?.status === "running") {
		let e = G(B) || yt(B) || Y("cleanup:organize.running");
		z = /* @__PURE__ */ (0, $.jsx)(L, {
			embedded: !0,
			kind: R("organize", B.stage_code),
			label: e,
			value: Math.min(B.checked || 0, B.total || 0),
			total: B.total
		});
	} else if (xe?.status === "failed") z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.incomplete"),
		children: G(xe, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (xe) {
		let { text: e, failed: t } = rt(xe);
		z = /* @__PURE__ */ (0, $.jsx)(E, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else F.start.isError ? z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.failed"),
		children: U(F.start.error)
	}) : N.isPending ? z = /* @__PURE__ */ (0, $.jsx)(L, {
		embedded: !0,
		kind: R("organize", "organize.checkingPlan"),
		label: Y("cleanup:organize.checkingPlan")
	}) : N.isError && le ? z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.previewFailed"),
		children: U(N.error)
	}) : I && (z = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:organize.previewResult"),
		children: ot(I)
	}), ue ? /* @__PURE__ */ (0, $.jsx)(nn, { plan: I }) : null] }));
	return /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "secondary",
				...V(ce),
				onClick: ye,
				children: Y("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: be ? "secondary" : "primary",
				disabled: !a.length || ce,
				...V(N.isPending),
				onClick: _e,
				children: Y("cleanup:organize.preview")
			}),
			be ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				onClick: ve,
				children: Y("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: Y("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: D
			}),
			r.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:organize.settingsLoadFailed"),
					children: U(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, $.jsx)(fe, {
							"aria-label": Y("cleanup:organize.storageLabel"),
							prefix: Y("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), w(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(pe, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(he, { mark: T[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(m, {
								"aria-label": Y("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: Y("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: A,
								isInvalid: C === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), w(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(f, {
								icon: It,
								"aria-label": Y("cleanup:organize.choosePath"),
								...V(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: re
					}),
					P.isError ? /* @__PURE__ */ (0, $.jsxs)(E, {
						tone: "error",
						title: Y("cleanup:organize.pickerFailed"),
						children: [U(P.error), Y("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: C === "file",
						onFocus: () => {
							ae("file"), M.current = !0;
						},
						onChange: (e) => me({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.dirTemplate"),
						placeholder: Y("cleanup:organize.dirTemplatePlaceholder"),
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: C === "dir",
						onFocus: () => {
							ae("dir"), M.current = !0;
						},
						onChange: (e) => me({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: Y("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => {
								let n = De(e, "label");
								return /* @__PURE__ */ (0, $.jsx)(t, {
									variant: "secondary",
									size: "small",
									title: e.example || n,
									className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
									onClick: () => {
										me({
											file: e.file,
											dir: e.dir
										}), M.current = !1;
									},
									children: /* @__PURE__ */ (0, $.jsx)("span", {
										className: "truncate",
										children: n
									})
								}, e.id || e.label);
							})
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": ie.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [Y("cleanup:organize.examplePath"), /* @__PURE__ */ (0, $.jsx)("code", {
							className: "wrap-anywhere",
							children: ie.data?.example || ie.data?.error || (ie.isError ? U(ie.error) : Y("cleanup:organize.previewLoading"))
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ (0, $.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, $.jsx)("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: Y("cleanup:organize.insertParameter")
							}), Y("cleanup:organize.insertTarget", { target: Y(j === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => {
								let n = _t(`labels.organizeTemplates.placeholder.${e.key}`, e.label);
								return /* @__PURE__ */ (0, $.jsx)(t, {
									variant: "ghost",
									size: "small",
									"aria-label": `${n} {${e.key}}`,
									onClick: () => ge(e.key),
									children: /* @__PURE__ */ (0, $.jsxs)("span", {
										className: "inline-flex flex-wrap items-center gap-x-1.5",
										children: [/* @__PURE__ */ (0, $.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, $.jsx)("span", {
											className: "text-text-secondary",
											children: n
										})]
									})
								}, e.key);
							})
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: ne
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: z
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var an = J("play"), on = () => q.invalidateQueries({
	queryKey: O,
	exact: !0
});
function sn({ item: e, toast: n }) {
	let [r, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = Ot({
		mutationFn: () => Ce(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(Y("cleanup:orphans.attached", {
				name: e.name,
				target: t?.name ?? Y("cleanup:orphans.selectedFile")
			})), on();
		},
		onError: (e) => n(U(e))
	}), o = Ot({
		mutationFn: () => ut(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? Y("cleanup:orphans.fileRestored", { name: e.name }) : Y("cleanup:orphans.recordDeleted", { name: e.name })), on();
		}
	}), s = () => {
		H({
			title: Y("cleanup:orphans.deleteRecord"),
			body: dt(e.records) ? Y("cleanup:orphans.deleteBodyWithActivity", {
				name: e.name,
				records: dt(e.records)
			}) : Y("cleanup:orphans.deleteBody", { name: e.name }),
			confirmLabel: Y("cleanup:orphans.deleteRecord"),
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				...V(c),
				onClick: s,
				children: Y("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(fe, {
				"aria-label": Y("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: Y("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(pe, {
					id: e.id,
					textValue: Te(e),
					children: Te(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...V(c),
				onClick: () => a.mutate(),
				children: Y("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function cn({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(an, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, $.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, $.jsxs)("small", {
				className: "flex min-w-0 items-center gap-1.5 text-caption-1-regular text-text-secondary",
				children: [
					e.code ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: "shrink-0",
						children: e.code
					}) : null,
					e.code && e.location ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": "true",
						children: "·"
					}) : null,
					e.location ? /* @__PURE__ */ (0, $.jsx)(me, {
						source: e.location,
						label: y[e.location] || e.location
					}) : null
				]
			})]
		})]
	});
}
function ln({ toast: e }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: O,
		queryFn: ({ signal: e }) => Ge(e)
	}), a = i.data?.items ?? [], o = Ot({
		mutationFn: (e) => ut(e),
		onSuccess: (t) => {
			e(Y("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? Y("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "")), r([]), on();
		}
	}), s = (e) => void H({
		title: Y("cleanup:orphans.deleteSelectedTitle"),
		body: Y("cleanup:orphans.deleteSelectedBody", { count: e.length }),
		items: e.map((e) => e.name),
		confirmLabel: Y("cleanup:orphans.deleteSelectedTitle"),
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: Y("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(cn, { item: e })
		},
		{
			id: "records",
			label: Y("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => dt(e.records),
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: dt(e.records) || Y("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: Y("cleanup:shared.actions"),
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(sn, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, $.jsx)(u, {
				id: "orphan-records-title",
				children: Y("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(E, {
				tone: "error",
				title: Y("cleanup:orphans.loadFailed"),
				children: U(i.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(Nt, {
			label: Y("cleanup:orphans.tableLabel"),
			items: a,
			columns: c,
			title: Y("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: Y("cleanup:orphans.unit"),
			description: k,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...V(o.isPending),
				onClick: () => s(e),
				children: Y("cleanup:orphans.deleteSelectedCount", { count: e.length })
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function un({ person: e }) {
	let t = Ae("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: Me("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: Oe("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", Ft),
			dangerouslySetInnerHTML: { __html: `<span>${Ne(Qe(t))}</span>` + je({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function dn(e, t, n) {
	let r = (e) => e.slice(0, 5).join(Y("cleanup:shared.listSeparator")), i = e.length > 5 ? Y("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? Y("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		Y("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: W(n.bytes)
		}),
		Y("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [Y("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		Y("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(Y("cleanup:shared.sentenceGap"));
}
function fn({ toast: n }) {
	Dt();
	let r = Z({
		queryKey: A,
		queryFn: ({ signal: e }) => Pe(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, d] = (0, Q.useState)(!1), [f, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(""), _ = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: Y("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(un, { person: e })
		},
		{
			id: "works",
			label: Y("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => Y("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: Y("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => Y("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: Y("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => W(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		Ae("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await Fe(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n(Y("cleanup:performerDelete.nothingToDelete"));
				return;
			}
			let a = i.performers.map((e) => Ae("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await H({
				title: Y("cleanup:performerDelete.confirmTitle"),
				body: dn(a, o, i),
				confirmLabel: Y("cleanup:performerDelete.confirm"),
				danger: !0,
				onConfirm: () => ke(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([q.invalidateQueries({
				queryKey: A,
				exact: !0
			}), q.invalidateQueries({
				queryKey: _e,
				exact: !0
			})]), n(Y("cleanup:performerDelete.purged", { count: c.purged }) + (c.blocked.length ? Y("cleanup:performerDelete.doneBlocked", { count: c.blocked.length }) : ""));
		} catch (e) {
			r.signal.aborted || g(U(e));
		} finally {
			r.signal.aborted || d(!1);
		}
	}, x = f ? [
		...f.blocked.map((e) => ({
			path: e.path,
			reason: _t(e.reason_code ?? "", e.reason, e.reason_params)
		})),
		...f.cleanup_pending,
		...f.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": Y("cleanup:tools.bulkDelete"),
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					id: "batch-delete-title",
					children: Y("cleanup:tools.bulkDelete")
				}), r.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: Y("cleanup:shared.retry")
					}),
					children: U(r.error)
				}) : /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: Y("cleanup:performerDelete.loading")
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(Nt, {
				label: Y("cleanup:performerDelete.tableLabel"),
				title: Y("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: Y("cleanup:performerDelete.unit"),
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Ae("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(p, {
					label: Y("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ (0, $.jsx)(t, {
					variant: "danger",
					size: "small",
					...V(c),
					onClick: () => void b(e, n),
					children: Y("cleanup:performerDelete.deleteSelected")
				})
			}),
			h ? /* @__PURE__ */ (0, $.jsx)(E, {
				tone: "error",
				title: Y("cleanup:performerDelete.planFailed"),
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, $.jsx)(E, {
				tone: x.length ? "warning" : "info",
				title: Y("cleanup:performerDelete.purged", { count: f.purged }),
				extra: x.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsx)("p", { children: Y("shell:format.withNote", {
						text: e.path,
						note: e.reason
					}) }, t))
				}) : null,
				children: x.length ? Y("cleanup:performerDelete.partialFailure", {
					count: f.blocked.length,
					quarantined: f.cleanup_pending.length,
					cacheFiles: f.cache_blocked.length
				}) : Y("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var pn = J("git-compare"), mn = J("rotate-cw"), hn = Y("cleanup:shared.reconnecting"), gn = Y("cleanup:resourceSync.cleanUpDead"), _n = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", vn = (e) => Number(e || 0).toLocaleString();
function yn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: _n,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: K(),
			children: [/* @__PURE__ */ (0, $.jsx)(j, {
				label: ue[e.location] || Y("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(he, { mark: T[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(Lt, {
					online: e.online,
					children: e.online ? Y("cleanup:resourceSync.online") : Y("cleanup:resourceSync.offline")
				}),
				figure: e.online ? Y("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? vt(e) : Y("cleanup:resourceSync.skipped", { summary: vt(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(ge, {
					tone: "warning",
					children: [
						vn(e.unreadable),
						" ",
						Y("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: _n,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					label: Y("cleanup:resourceSync.toPurge"),
					figure: Y("cleanup:resourceSync.purgeCount", { count: Number(lt(e) || 0) }),
					meta: Y("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					label: Y("cleanup:resourceSync.toVanish"),
					figure: Y("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: Y("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					label: Y("cleanup:resourceSync.emptyDirs"),
					figure: Y("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: Y("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					label: Y("cleanup:resourceSync.cache"),
					figure: Y("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? W(n.bytes) : ""
				})
			})
		]
	})] });
}
function bn({ toast: e }) {
	let n = X({
		queryKey: N,
		queryFn: ({ signal: e }) => Je(e),
		start: Ct,
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: _e,
				exact: !0
			}), q.invalidateQueries({
				queryKey: P,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = B(t);
			r ? e(Y("cleanup:resourceSync.applyLeftovers", {
				done: vn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : e(Y("cleanup:resourceSync.cleaned"));
		}
	}), r = X({
		queryKey: P,
		queryFn: ({ signal: e }) => Ye(e),
		start: wt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = Y(a ? "cleanup:resourceSync.scanning" : c ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), f = (e) => void H({
		title: gn,
		body: be(e),
		confirmLabel: gn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = B(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(E, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: Se(e, W)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupIncomplete"),
		children: G(p, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, $.jsx)(L, {
		embedded: !0,
		kind: R("resource-apply"),
		label: G(n.job) || Y("cleanup:resourceSync.applying")
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: U(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: hn
	});
	else if (i?.status === "running") {
		let e = gt(i);
		h = /* @__PURE__ */ (0, $.jsx)(L, {
			embedded: !0,
			kind: R("resource-scan"),
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, $.jsx)(yn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, $.jsx)(yn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: G(i, "error") || Y("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:resourceSync.cleanupResult"),
		children: Y("cleanup:resourceSync.alreadyCleaned")
	});
	else if (i?.status === "complete") {
		let e = $e(i);
		g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(yn, { scan: i }), e ? /* @__PURE__ */ (0, $.jsx)(E, {
			tone: "neutral",
			title: Y("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...V(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? Y("cleanup:resourceSync.applyingButton") : gn
			}),
			children: xe(i)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: Y("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g, /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupFailed"),
		children: U(n.start.error)
	})] })), /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? mn : pn,
				disabled: !s,
				...V(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "resource-sync-title",
					gap: "small",
					children: Y("cleanup:tools.resourceSync")
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
					role: "status",
					"aria-label": Y("cleanup:resourceSync.statusLoading"),
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:resourceSync.scanStatusUnavailable")
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:resourceSync.applyStatusUnavailable")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: F
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function xn({ toast: e }) {
	let t = Z({
		queryKey: w,
		queryFn: ({ signal: e }) => He(e)
	});
	return t.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.storageLoadFailed"),
		children: U(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: Y("cleanup:resourceSync.storageLoading")
	}) : et(t.data) ? /* @__PURE__ */ (0, $.jsx)(bn, { toast: e }) : /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		label: Y("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: Y("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: Y("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function Sn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, $.jsx)(rn, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, $.jsx)(xn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, $.jsx)(ln, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, $.jsx)(Ht, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, $.jsx)(Qt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, $.jsx)(fn, { toast: r });
	}
	return /* @__PURE__ */ (0, $.jsx)(jt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Cn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: Y("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: Y("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function wn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: K({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, $.jsx)(j, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function Tn({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(zt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var En = J("square-check-big"), Dn = J("sparkles"), On = J("file-stack"), kn = J("file-archive"), An = J("trash"), jn = () => {
	for (let e of [
		I,
		M,
		c,
		h
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Mn({ toast: e, open: t, navigate: n }) {
	let o = Z({
		queryKey: I,
		queryFn: ({ signal: e }) => Xe(e)
	}), s = Z({
		queryKey: M,
		queryFn: ({ signal: e }) => Ke(e)
	}), l = Z({
		queryKey: c,
		queryFn: ({ signal: e }) => Ie(e)
	}), u = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => Le(e)
	}), d = Z({
		queryKey: _e,
		queryFn: ({ signal: e }) => Ze(e)
	});
	return (0, Q.useEffect)(() => {
		let e = i[location.hash];
		e && it.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(jt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(de, {
				id: "cleanup-pending",
				children: Y("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: ie,
				children: [
					/* @__PURE__ */ (0, $.jsx)(wn, {
						section: "review",
						label: Y("cleanup:overview.review"),
						icon: En,
						open: t,
						value: Cn(o, ht)
					}),
					/* @__PURE__ */ (0, $.jsx)(wn, {
						section: "duplicates",
						label: Y("cleanup:overview.duplicates"),
						icon: On,
						open: t,
						value: Cn(l, (e) => Number(e.total || 0) ? {
							figure: Y("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: Y("cleanup:overview.reclaimable", { size: W(e.reclaimable || 0) })
						} : { figure: Y("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(wn, {
						section: "ads",
						label: Y("cleanup:overview.junkFiles"),
						icon: kn,
						open: t,
						value: Cn(u, (e) => ({
							figure: Y("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: tt(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(wn, {
						section: "quality",
						label: Y("cleanup:overview.hdUpgrades"),
						icon: Dn,
						open: t,
						value: Cn(s, (e) => ({ figure: Y("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(wn, {
						section: "trash",
						label: Y("cleanup:overview.trash"),
						icon: An,
						open: t,
						value: Cn(d, (e) => ({
							figure: Y("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? Y("cleanup:overview.trashSize", { size: W(e.bytes || 0) }) : Y("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, $.jsx)(x, {
				toast: (t) => e(t),
				onComplete: jn
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(de, {
				id: "cleanup-maintenance",
				children: Y("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Tn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(de, {
				id: "cleanup-deletion",
				children: Y("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Tn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Mn as DataCleanupPage, Sn as DataCleanupToolPage };

//# debugId=d19021ae-2825-426e-9580-e31846871a81