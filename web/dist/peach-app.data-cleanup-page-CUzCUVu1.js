(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "871cd976-0c1d-4c6a-b493-9a7441905ebf", e._sentryDebugIdIdentifier = "sentry-dbid-871cd976-0c1d-4c6a-b493-9a7441905ebf");
	} catch {}
})();
import { AnimatedNumber as e, BATCH_DELETE_TEXT as t, BC as n, Button as r, ButtonLink as i, CLEANUP_ENTRY as a, CLEANUP_ENTRY_GRID as o, CLEANUP_HASH_REDIRECTS as s, CLEANUP_TOOLS as c, Chip as l, ColumnFilterAvatar as u, DIRECTORY_TEMPLATE_ERROR as d, DUPLICATES_KEY as f, DataTable as p, Fieldset as m, FieldsetTitle as h, IDLE_REPAIR as g, IconButton as _, IndexSearch as v, Input as y, JUNK_KEY as b, LEGACY_AVATAR_IMG as x, LINKS_KEY as S, LINK_CHECK_KEY as ee, LINK_KINDS as C, LINK_PRUNE_KEY as te, LOC as w, LibraryLabel as T, LibraryProcessingCard as E, M6 as D, MEDIA_REPAIR_KEY as O, MEDIA_REPAIR_URL as k, MEDIA_SOURCES_KEY as A, MEDIA_SOURCE_ICONS as ne, Note as j, ORGANIZE_KEY as M, ORGANIZE_PARAMETER_HINT as re, ORGANIZE_SCOPE_HINT as ie, ORGANIZE_TEXT as N, ORPHAN_RECORDS_KEY as ae, ORPHAN_RECORDS_TEXT as oe, PERFORMER_DELETE_KEY as P, PLAIN_STAT_STRIP as F, PlainStat as I, Progress as se, QUALITY_GOALS_KEY as ce, RECORD_LABELS as L, REPAIR_CARD_TEXT as le, REPAIR_LIBRARIES_KEY as ue, RESOURCE_APPLY_KEY as de, RESOURCE_SCAN_KEY as fe, RESOURCE_SYNC_TEXT as pe, RESULT_PANEL as me, RESULT_SECTION as he, REVIEW_COUNTS_KEY as R, SOURCE_LABELS as ge, SectionHeading as z, Select as _e, SelectItem as ve, SiteMark as B, SourceLabel as ye, SourceMark as be, StatusLabel as xe, TRASH_KEY as Se, TaskProgress as V, Wt as Ce, __toESM as we, activityKind as H, apiSend as Te, applyConfirmText as Ee, applyLeftovers as De, applyPlanText as Oe, applyText as ke, attachOrphan as Ae, baseName as je, busyProps as U, candidateText as Me, checkLine as Ne, cleanupToolSkeletonHtml as Pe, codedText as Fe, confirmModal as Ie, cx as Le, dZ as Re, deletePerformerVideos as ze, entityDisplayName as Be, entityFaceImg as Ve, entityPath as He, errorMessage as W, esc as Ue, fetchDeletePerformers as We, fetchDeletePlan as Ge, fetchDuplicates as Ke, fetchJunkSummary as qe, fetchLinkCheck as Je, fetchLinkPrune as Ye, fetchLinkStats as Xe, fetchMediaRepair as Ze, fetchMediaSources as Qe, fetchOrganize as $e, fetchOrganizeExample as et, fetchOrphanRecords as tt, fetchQualityGoals as nt, fetchRepairLibraries as rt, fetchResourceApply as it, fetchResourceScan as at, fetchReviewCounts as ot, fetchTrashSummary as st, firstGrapheme as ct, fmtSize as lt, hasChanges as ut, hasResourceRoots as dt, jobText as G, junkBreakdown as ft, ks as pt, linkLabel as mt, missingToolText as ht, organizeOutcome as gt, peachHistory$1 as _t, pickOrganizeFolder as vt, plainStatClass as K, planSummary as yt, previewOrganize as bt, pruneText as xt, purgeCount as St, purgeOrphan as Ct, queryClient as q, recordsText as wt, rememberTemplates as Tt, require_jsx_runtime as Et, require_react as Dt, reviewSummary as Ot, runBulkAction as kt, scanLine as At, serverLabel as jt, sourceMeta as Mt, spriteGlyph as J, stageText as Nt, startLinkCheck as Pt, startLinkPrune as Ft, startOrganize as It, startResourceApply as Lt, startResourceScan as Rt, statusLine as zt, t as Y, useAction as Bt, useBackgroundJob as X, useEntityNames as Vt, useMutation as Ht, useOrderedLibraries as Ut, useQuery as Z, withOrganizeJob as Wt } from "./peach-app.js";
import { Page as Gt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Kt } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { FolderSearchIcon as qt } from "./peach-app.folder-rows-C3hhF_90.js";
import { ConnectionStatus as Jt } from "./peach-app.connection-status-BrXhLGSm.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ we(Dt(), 1), $ = Et(), Yt = J("chevron-right");
function Xt({ label: e, icon: t, summary: n, detail: r, state: i, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, $.jsxs)("button", {
		type: "button",
		...o,
		className: a.face,
		onClick: s,
		"data-entry-state": i,
		"aria-busy": i === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: a.icon,
				children: /* @__PURE__ */ (0, $.jsx)(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: a.body,
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: a.title,
						children: e
					}),
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: Le(a.summary, i === "error" && "text-text-error-primary"),
						children: n
					}),
					r ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: a.detail,
						children: r
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(Yt, {
				"aria-hidden": !0,
				className: a.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Zt = (e) => ne[e] || e, Qt = (e) => q.setQueryData(O, e);
function $t({ toast: e = () => {} }) {
	let t = X({
		queryKey: O,
		queryFn: ({ signal: e }) => Ze(e),
		start: (e) => Te(k, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? Y("cleanup:mediaRepair.repaired", { count: t.repaired }) : Y("cleanup:mediaRepair.nothingToRepair"));
		}
	}), n = Z({
		queryKey: ue,
		queryFn: ({ signal: e }) => rt(e)
	}), [i, a] = (0, Q.useState)(""), o = Bt(), s = t.job ?? g, c = Ut(n.data ?? [], (e) => e.id), l = s.status === "running", u = c.find((e) => e.id === (l ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], d = () => {
		u && Ie({
			title: Y("cleanup:mediaRepair.confirmTitle", { name: u.name }),
			body: [Y("cleanup:mediaRepair.body"), ...u.metered ? [Y("cleanup:mediaRepair.meteredWarning")] : []].join(Y("cleanup:shared.sentenceGap")),
			confirmLabel: Y("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await t.start.mutateAsync(u.id);
			}
		});
	}, f = () => void o.run("stop", (e) => Te(k, { stop: !0 }, "POST", e), Qt), p = t.outcome, _ = zt(l ? s : p ?? g), v = o.error || G(p, "error") || (t.query.error ? Y("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(m, {
			layout: "split",
			label: Y("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(_e, {
				"aria-label": Y("cleanup:mediaRepair.library"),
				prefix: Y("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: u?.id ?? null,
				isDisabled: l || !c.length,
				"aria-busy": n.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(ve, {
					id: e.id,
					textValue: e.name,
					children: /* @__PURE__ */ (0, $.jsx)(T, { library: {
						id: e.id,
						name: e.name,
						icon: Zt(e.icon)
					} })
				}, e.id))
			}), l ? /* @__PURE__ */ (0, $.jsx)(r, {
				onClick: f,
				...U(o.busy === "stop"),
				children: Y("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(r, {
				onClick: d,
				disabled: !u,
				children: Y("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(h, { children: Y("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: le
					}),
					l && s.total ? /* @__PURE__ */ (0, $.jsx)(se, {
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
				p?.status === "complete" && p.missing_tool ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "warning",
					title: Y("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "ghost",
						size: "small",
						onClick: t.dismiss,
						children: Y("cleanup:mediaRepair.dismiss")
					}),
					children: ht(p)
				}) : null,
				n.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					children: Y("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function en({ className: e }) {
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
var tn = J("rotate-cw"), nn = Y("cleanup:links.goneHint"), rn = Y("cleanup:links.unclearHint"), an = Y("cleanup:links.pruneHint"), on = Y("cleanup:shared.reconnecting"), sn = (e) => Number(e || 0).toLocaleString();
function cn({ label: e, value: t, note: n }) {
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
function ln({ title: e, items: t, hint: r, picked: i, onPick: a, actions: o, controls: s, retry: c, retrying: l, footer: d, confirmed: f = !1 }) {
	if (!t.length) return null;
	let m = [
		{
			id: "entity",
			label: Y("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			filter: {
				values: (e) => e.entity,
				option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, $.jsx)(u, {
					person: {
						...t.face,
						id: t.entity_id,
						name: e
					},
					kind: t.entity_kind,
					markId: t.entity_kind === "studio" || t.entity_kind === "agency" ? t.id : null
				}) })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? He(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium text-text-primary ${x}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${Ue(ct(e.entity))}</span>` + Ve({
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
			value: (e) => C[e.link_kind] || e.link_kind,
			filter: {
				values: (e) => e.link_kind,
				option: (e) => ({ label: C[e] || e })
			},
			render: (e) => C[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: Y("cleanup:links.columnName"),
			min: 128,
			value: (e) => mt(e.label),
			filter: {
				values: (e) => mt(e.label) || new URL(e.url).hostname,
				option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, $.jsx)(B, { linkId: t.id }) })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: mt(e.label) || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: Y("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			filter: { values: (e) => jt(e.note_code ?? "", e.note, e.note_params) },
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "min-w-0 w-full",
				"data-link-result": f ? "gone" : "unclear",
				children: [/^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, $.jsx)(xe, {
					tone: f || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(xe, {
						tone: f ? "error" : "warning",
						children: Y(f ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(Kt, {
						text: jt(e.note_code ?? "", e.note, e.note_params),
						className: "tabular-nums text-text-secondary"
					})]
				}), !f && e.temporary && e.attempts ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-rechecked": "",
					className: "mt-1 block text-body-2-regular text-text-secondary",
					children: Y("cleanup:links.rechecked", { count: e.attempts })
				}) : null]
			})
		},
		{
			id: "url",
			label: Y("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			filter: {
				values: (e) => new URL(e.url).hostname,
				option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, $.jsx)(B, { linkId: t.id }) })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)(B, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(Ce, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: he,
		"data-link-results": f ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(p, {
			preferenceId: f ? "links-dead" : "links-unreached",
			label: e,
			items: t,
			columns: m,
			rowId: (e) => String(e.id),
			description: r,
			unit: Y("cleanup:links.unit"),
			panel: !1,
			footerActions: d,
			rowLabel: (e) => Y("cleanup:links.rowLabel", {
				entity: e.entity,
				link: mt(e.label) || e.url
			}),
			selected: i.map(String),
			onSelected: (e) => a(e.map(Number)),
			contextOperations: (e) => [{
				id: "copy",
				label: Y("cleanup:links.copyLink"),
				icon: n,
				run: () => navigator.clipboard.writeText(e.url)
			}, ...c ? [{
				id: "retry",
				label: Y("manage:shared.retryNow"),
				icon: Re,
				disabled: l,
				run: () => c(e.id)
			}] : []],
			actions: (e) => o?.(e) ?? [],
			controls: () => s
		})
	});
}
function un() {
	let t = Z({
		queryKey: S,
		queryFn: ({ signal: e }) => Xe(e)
	}), [n, i] = (0, Q.useState)([]), [a, o] = (0, Q.useState)([]), s = X({
		queryKey: te,
		queryFn: ({ signal: e }) => Ye(e),
		start: Ft,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: S,
				exact: !0
			}), q.invalidateQueries({
				queryKey: ee,
				exact: !0
			});
		}
	}), c = X({
		queryKey: ee,
		queryFn: ({ signal: e }) => Je(e),
		start: Pt,
		onStarted: () => {
			s.dismiss(), i([]), o([]);
		}
	}), u = c.job, d = u?.check_id ?? "";
	(0, Q.useEffect)(() => {
		i([]), o([]);
	}, [d]);
	let f = c.running || c.start.isPending, p = s.running || s.start.isPending, g = s.running ? s.job : void 0, _ = !!c.job && !!s.job, v = u?.status === "complete", y = u?.gone ?? [], b = u?.unclear ?? [], x = v ? b : [], w = x.filter((e) => n.includes(e.id)).map((e) => e.id), T = t.data, E = (T?.top_hosts ?? []).slice(0, 3), O = (e) => {
		!_ || f || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: d
		} : {});
	}, k = (e, t = !1) => ({
		key: t ? "prune-all" : "prune",
		label: e,
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: Y("cleanup:links.deleteDead"),
			danger: !0,
			body: Y("cleanup:links.deleteDeadBody", { count: e.length })
		}),
		run: async (e) => {
			await s.start.mutateAsync({
				checkId: d,
				ids: t ? void 0 : e.map((e) => e.id)
			});
		},
		receipt: () => ""
	}), A = { receipt: () => {} }, ne = () => {
		_ && !p && y.length && kt(k(Y("cleanup:links.deleteDead"), !0), y, A);
	}, M = p || s.start.isError ? null : s.outcome, re = c.start.error ?? s.start.error, ie = null, N = null;
	if (M?.status === "failed") N = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:links.pruneIncomplete"),
		children: G(M, "error") || Y("cleanup:links.checkTaskLog")
	});
	else if (M && !y.length && !b.length) N = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "success",
		title: Y("cleanup:links.pruneDone"),
		children: xt(M)
	});
	else if (re) N = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: W(re)
	});
	else if (c.query.isError && u) N = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: on
	});
	else if (u?.status === "failed") N = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: G(u, "error") || Y("cleanup:links.checkFailed")
	});
	else if (u && u.status !== "idle") {
		let t = Ne(u);
		ie = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [u.status === "running" ? /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("link-check"),
			label: t,
			labelContent: u.total ? /* @__PURE__ */ (0, $.jsx)(e, { value: t }) : t,
			value: Math.min(u.checked || 0, u.total || 0),
			total: u.total
		}) : null, p ? /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("link-prune"),
			label: G(g) || Y("cleanup:links.pruning"),
			value: g?.checked,
			total: g?.total
		}) : null] });
		let s = Y("cleanup:links.retrySelected", { count: w.length });
		N = v || y.length || b.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: me,
			children: [
				M?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "success",
					title: Y("cleanup:links.pruneDone"),
					children: xt(M)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(ln, {
					title: Y("cleanup:links.dead"),
					items: y,
					hint: nn,
					picked: a,
					onPick: o,
					confirmed: !0,
					footer: v && y.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: an
					}), /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "danger",
						...U(p),
						onClick: ne,
						children: Y("cleanup:links.deleteDeadCount", { count: y.length })
					})] }) : null,
					actions: (e) => [{
						action: k(Y("cleanup:links.deleteSelected", { count: e.length })),
						items: e,
						host: A,
						disabled: !v || p,
						rowAction: {
							label: Y("cleanup:links.deleteDead"),
							icon: D
						}
					}]
				}),
				/* @__PURE__ */ (0, $.jsx)(ln, {
					title: Y("cleanup:links.unreached"),
					items: b,
					hint: rn,
					picked: n,
					onPick: i,
					retry: v ? (e) => O([e]) : void 0,
					retrying: f,
					footer: x.length ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "primary",
						leadingIcon: tn,
						...U(f),
						onClick: () => O(x.map((e) => e.id)),
						children: Y("cleanup:links.retryAll", { count: x.length })
					}) : null,
					controls: x.length ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						leadingIcon: tn,
						disabled: !w.length,
						...U(f),
						onClick: () => O(w),
						children: s
					}) : null
				}),
				v && !y.length && !b.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${he} text-body-regular text-notification-success-foreground`,
					children: Y("cleanup:links.allReachable")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(m, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, $.jsx)(r, {
				"data-link-check": "",
				leadingIcon: en,
				disabled: !_,
				...U(f),
				onClick: () => O(),
				children: Y(f ? "cleanup:links.checking" : v ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(h, {
					id: "link-manager-title",
					gap: "small",
					children: Y("cleanup:tools.links")
				}),
				t.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: Y("cleanup:links.statsLoadFailed"),
					children: W(t.error)
				}) : T ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(cn, {
						label: Y("cleanup:links.totalLinks"),
						value: sn(T.total),
						note: Y("cleanup:links.entitySpread", { count: Number(T.entities || 0) })
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(cn, {
						label: C[e] || e,
						value: sn(t)
					}, e))]
				}), E.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: E.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(B, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(Ce, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(l, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: sn(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: ie
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: N
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var dn = (e, t) => t ? Y("cleanup:organize.applyBodyPath", {
	name: e,
	path: t
}) : Y("cleanup:organize.applyBodyAll", { name: e }), fn = Y("cleanup:organize.rollbackBody"), pn = 8;
function mn({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, pn).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: je(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: je(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > pn ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: Y("cleanup:organize.planTruncated")
	}) : null] });
}
function hn({ toast: e, failure: t }) {
	let n = Z({
		queryKey: M,
		queryFn: ({ signal: e }) => $e(e)
	}), i = n.data, a = i?.locations ?? [], [o, s] = (0, Q.useState)(""), c = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", l = i?.templates?.[c], [u, f] = (0, Q.useState)(null), p = u?.location === c ? u : {
		location: c,
		file: l?.file ?? "",
		dir: l?.dir ?? ""
	}, g = (e) => {
		f({
			...p,
			...e
		}), P.reset();
	}, [v, b] = (0, Q.useState)({
		location: "",
		path: ""
	}), x = v.location === c ? v.path : "", S = (0, Q.useRef)({
		location: c,
		path: x
	});
	S.current = {
		location: c,
		path: x
	};
	let [ee, C] = (0, Q.useState)(null), te = (0, Q.useRef)(null), T = (0, Q.useRef)(null), E = (0, Q.useRef)(null), D = Z({
		queryKey: [
			"organize-example",
			p.file,
			p.dir
		],
		queryFn: ({ signal: e }) => et(p.file, p.dir, e),
		enabled: !!i
	}), [O, k] = (0, Q.useState)("file"), A = (0, Q.useRef)(!1), ae = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = ae.current;
		if (!e) return;
		ae.current = null;
		let t = (e.field === "file" ? te : T).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let oe = () => ({
		location: c,
		path: x.trim(),
		file_template: p.file.trim(),
		dir_template: p.dir.trim()
	}), P = Ht({
		mutationFn: bt,
		onError: (e) => {
			let t = /整理路径/.test(W(e)) ? "path" : d.test(W(e)) ? "dir" : "file";
			C(t), (t === "path" ? E : t === "dir" ? T : te).current?.focus();
		}
	}), F = Ht({
		mutationFn: ({ initial: e }) => vt(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), C(null), P.reset(), E.current?.focus());
		}
	}), I = X({
		queryKey: M,
		queryFn: ({ signal: e }) => $e(e),
		start: It,
		jobOf: (e) => e,
		withJob: Wt,
		onStarted: () => P.reset(),
		onFinish: (n) => {
			if (q.invalidateQueries({
				queryKey: M,
				exact: !0
			}), n.status !== "complete") return;
			let { text: r, failed: i } = gt(n);
			i ? t(Y("cleanup:tools.organize"), Error(Y("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), se = I.running || I.start.isPending, ce = JSON.stringify(P.variables) === JSON.stringify(oe()), L = ce ? P.data : void 0, le = Number(L?.counts?.change || 0), ue = w[c] || c, de = (e) => {
		g(e), C(null), P.reset();
	}, fe = (e) => {
		let t = (O === "file" ? te : T).current, n = p[O], r = A.current ? t?.selectionStart ?? n.length : n.length, i = A.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ae.current = {
			field: O,
			caret: r + a.length
		}, de({ [O]: n.slice(0, r) + a + n.slice(i) });
	}, pe = () => {
		P.isPending || se || !c || (I.dismiss(), I.start.reset(), C(null), P.mutate(oe()));
	}, me = () => {
		let e = P.variables;
		e && L && le && Ie({
			title: Y("cleanup:tools.organize"),
			body: dn(ue, e.path),
			confirmLabel: Y("cleanup:tools.organize"),
			onConfirm: async () => {
				await I.start.mutateAsync({
					kind: "apply",
					request: e
				}), Tt({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, he = () => void Ie({
		title: Y("cleanup:organize.rollbackTitle"),
		body: fn,
		confirmLabel: Y("cleanup:organize.rollbackConfirm"),
		onConfirm: () => I.start.mutateAsync({ kind: "rollback" })
	}), R = null, ge = !!le && !se && !I.outcome, z = I.job, B = I.outcome;
	if (z?.status === "running") {
		let e = G(z) || Nt(z) || Y("cleanup:organize.running");
		R = /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("organize", z.stage_code),
			label: e,
			value: Math.min(z.checked || 0, z.total || 0),
			total: z.total
		});
	} else if (B?.status === "failed") R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:organize.incomplete"),
		children: G(B, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (B) {
		let { text: e, failed: t } = gt(B);
		R = /* @__PURE__ */ (0, $.jsx)(j, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else I.start.isError ? R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:organize.failed"),
		children: W(I.start.error)
	}) : P.isPending ? R = /* @__PURE__ */ (0, $.jsx)(V, {
		embedded: !0,
		kind: H("organize", "organize.checkingPlan"),
		label: Y("cleanup:organize.checkingPlan")
	}) : P.isError && ce ? R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:organize.previewFailed"),
		children: W(P.error)
	}) : L && (R = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: Y("cleanup:organize.previewResult"),
		children: yt(L)
	}), le ? /* @__PURE__ */ (0, $.jsx)(mn, { plan: L }) : null] }));
	return /* @__PURE__ */ (0, $.jsxs)(m, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				...U(se),
				onClick: he,
				children: Y("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: ge ? "secondary" : "primary",
				disabled: !a.length || se,
				...U(P.isPending),
				onClick: pe,
				children: Y("cleanup:organize.preview")
			}),
			ge ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "primary",
				onClick: me,
				children: Y("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(h, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: Y("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: N
			}),
			n.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: Y("cleanup:organize.settingsLoadFailed"),
					children: W(n.error)
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, $.jsx)(_e, {
							"aria-label": Y("cleanup:organize.storageLabel"),
							prefix: Y("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: c || null,
							onSelectionChange: (e) => {
								e !== null && (s(String(e)), b({
									location: String(e),
									path: ""
								}), C(null), P.reset(), F.reset(), A.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(ve, {
								id: e.location,
								textValue: w[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(be, { mark: ne[e.location] || "database" }), w[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(y, {
								"aria-label": Y("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: Y("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: E,
								isInvalid: ee === "path",
								onChange: (e) => {
									b({
										location: c,
										path: e
									}), C(null), P.reset(), F.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(_, {
								icon: qt,
								"aria-label": Y("cleanup:organize.choosePath"),
								...U(F.isPending),
								onClick: () => F.mutate({
									initial: x || a.find((e) => e.location === c)?.roots[0] || "",
									location: c,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: ie
					}),
					F.isError ? /* @__PURE__ */ (0, $.jsxs)(j, {
						tone: "error",
						title: Y("cleanup:organize.pickerFailed"),
						children: [W(F.error), Y("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(y, {
						label: Y("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: p.file,
						ref: te,
						spellCheck: "false",
						isInvalid: ee === "file",
						onFocus: () => {
							k("file"), A.current = !0;
						},
						onChange: (e) => de({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(y, {
						label: Y("cleanup:organize.dirTemplate"),
						placeholder: Y("cleanup:organize.dirTemplatePlaceholder"),
						value: p.dir,
						ref: T,
						spellCheck: "false",
						isInvalid: ee === "dir",
						onFocus: () => {
							k("dir"), A.current = !0;
						},
						onChange: (e) => de({ dir: e })
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
								let t = Fe(e, "label");
								return /* @__PURE__ */ (0, $.jsx)(r, {
									variant: "secondary",
									size: "small",
									title: e.example || t,
									className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
									onClick: () => {
										de({
											file: e.file,
											dir: e.dir
										}), A.current = !1;
									},
									children: /* @__PURE__ */ (0, $.jsx)("span", {
										className: "truncate",
										children: t
									})
								}, e.id || e.label);
							})
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": D.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [Y("cleanup:organize.examplePath"), /* @__PURE__ */ (0, $.jsx)("code", {
							className: "wrap-anywhere",
							children: D.data?.example || D.data?.error || (D.isError ? W(D.error) : Y("cleanup:organize.previewLoading"))
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
							}), Y("cleanup:organize.insertTarget", { target: Y(O === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => {
								let t = jt(`labels.organizeTemplates.placeholder.${e.key}`, e.label);
								return /* @__PURE__ */ (0, $.jsx)(r, {
									variant: "ghost",
									size: "small",
									"aria-label": `${t} {${e.key}}`,
									onClick: () => fe(e.key),
									children: /* @__PURE__ */ (0, $.jsxs)("span", {
										className: "inline-flex flex-wrap items-center gap-x-1.5",
										children: [/* @__PURE__ */ (0, $.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, $.jsx)("span", {
											className: "text-text-secondary",
											children: t
										})]
									})
								}, e.key);
							})
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: re
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: R
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var gn = J("play"), _n = Object.fromEntries([
	...L,
	["rating", Y("catalog:shared.rating")],
	["play_count", Y("catalog:catalogList.plays")],
	["last_played", Y("catalog:catalogList.lastWatched")],
	["o_count", Y("catalog:catalogList.climaxCount")]
]), vn = () => q.invalidateQueries({
	queryKey: ae,
	exact: !0
});
function yn(e, t) {
	return Ie({
		title: Y("cleanup:orphans.deleteRecord"),
		holdToConfirm: !0,
		body: wt(e.records) ? Y("cleanup:orphans.deleteBodyWithActivity", {
			name: e.name,
			records: wt(e.records)
		}) : Y("cleanup:orphans.deleteBody", { name: e.name }),
		confirmLabel: Y("cleanup:orphans.deleteRecord"),
		danger: !0,
		onConfirm: t
	});
}
async function bn(e, t) {
	t((await Ct(e.id)).blocked.length ? Y("cleanup:orphans.fileRestored", { name: e.name }) : Y("cleanup:orphans.recordDeleted", { name: e.name })), vn();
}
function xn({ item: e, toast: t }) {
	let [n, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = Ht({
		mutationFn: () => Ae(e.id, Number(n)),
		onSuccess: () => {
			let r = e.candidates.find((e) => e.id === n);
			t(Y("cleanup:orphans.attached", {
				name: e.name,
				target: r?.name ?? Y("cleanup:orphans.selectedFile")
			})), vn();
		},
		onError: (e) => t(W(e))
	}), o = Ht({ mutationFn: () => bn(e, t) }), s = () => {
		yn(e, () => o.mutateAsync());
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "danger",
				size: "small",
				...U(c),
				onClick: s,
				children: Y("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(_e, {
				"data-orphan-target": "",
				"aria-label": Y("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: Y("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(ve, {
					id: e.id,
					textValue: Me(e),
					children: Me(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "primary",
				size: "small",
				disabled: n === null,
				...U(c),
				onClick: () => a.mutate(),
				children: Y("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function Sn({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-media-placeholder text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(gn, {
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
					e.location ? /* @__PURE__ */ (0, $.jsx)(ye, {
						source: e.location,
						label: w[e.location] || e.location
					}) : null
				]
			})]
		})]
	});
}
function Cn({ toast: e }) {
	let [t, n] = (0, Q.useState)([]), r = Z({
		queryKey: ae,
		queryFn: ({ signal: e }) => tt(e)
	}), i = r.data?.items ?? [], a = { receipt: e }, o = (t) => {
		let n = [{
			id: "delete",
			label: Y("cleanup:orphans.deleteRecord"),
			icon: D,
			danger: !0,
			run: () => {
				yn(t, () => bn(t, e));
			}
		}];
		return t.candidates.length && n.unshift({
			id: "target",
			label: Y("cleanup:orphans.targetLabel", { name: t.name }),
			icon: pt,
			run: (e) => {
				e.querySelector("[data-orphan-target] button")?.click();
			}
		}), n;
	}, s = (e) => {
		let t = null;
		return {
			key: "purge",
			label: Y("cleanup:orphans.deleteSelectedCount", { count: e }),
			reversal: "irreversible",
			danger: !0,
			holdToConfirm: !0,
			confirm: (e) => ({
				title: Y("cleanup:orphans.deleteSelectedTitle"),
				danger: !0,
				body: Y("cleanup:orphans.deleteSelectedBody", { count: e.length }),
				items: e.map((e) => e.name)
			}),
			run: async (e) => {
				t = await Ct(e.map((e) => e.id));
			},
			receipt: () => t ? Y("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? Y("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "") : ""
		};
	}, c = [
		{
			id: "item",
			label: Y("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(Sn, { item: e })
		},
		{
			id: "records",
			label: Y("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => wt(e.records),
			filter: {
				values: (e) => Object.keys(e.records).filter((t) => e.records[t]),
				option: (e) => ({ label: _n[e] || e })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: wt(e.records) || Y("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: Y("cleanup:shared.actions"),
			width: i.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(xn, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: r.isError ? /* @__PURE__ */ (0, $.jsxs)(m, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, $.jsx)(h, {
				id: "orphan-records-title",
				children: Y("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: Y("cleanup:orphans.loadFailed"),
				children: W(r.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(p, {
			preferenceId: "orphan-records",
			label: Y("cleanup:orphans.tableLabel"),
			items: i,
			columns: c,
			contextOperations: o,
			title: Y("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: Y("cleanup:orphans.unit"),
			description: oe,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: t,
			onSelected: n,
			actions: (e) => [{
				items: e,
				host: a,
				action: s(e.length),
				done: () => {
					n([]), vn();
				}
			}]
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function wn({ person: e }) {
	let t = Be("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: He("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: Le("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium", x),
			dangerouslySetInnerHTML: { __html: `<span>${Ue(ct(t))}</span>` + Ve({
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
function Tn(e, t, n) {
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
			size: lt(n.bytes)
		}),
		Y("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [Y("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		Y("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(Y("cleanup:shared.sentenceGap"));
}
function En({ toast: e }) {
	Vt();
	let n = Z({
		queryKey: P,
		queryFn: ({ signal: e }) => We(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, l] = (0, Q.useState)(null), [d, f] = (0, Q.useState)(""), g = {
		receipt: e,
		failure: (e) => f(W(e))
	}, _ = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: Y("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			filter: {
				values: (e) => e.k,
				option: (e, t) => ({
					label: Be("performer", e, t?.entity_id),
					searchTerms: t?.aliases,
					leading: t && /* @__PURE__ */ (0, $.jsx)(u, { person: {
						...t,
						id: t.entity_id,
						name: e
					} })
				})
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)(wn, { person: e })
		},
		{
			id: "works",
			label: Y("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			filter: {
				range: "count",
				value: (e) => e.n
			},
			render: (e) => Y("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: Y("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			filter: {
				range: "count",
				value: (e) => e.file_count
			},
			render: (e) => Y("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: Y("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			filter: {
				range: "size",
				value: (e) => e.bytes
			},
			render: (e) => lt(e.bytes)
		}
	], []), y = o.toLocaleLowerCase(), b = (n.data?.items || []).filter((e) => !y || [
		e.k,
		Be("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(y))), x = () => {
		let e = null, t = null;
		return {
			key: "performer-delete",
			label: Y("cleanup:performerDelete.deleteSelected"),
			reversal: "irreversible",
			danger: !0,
			holdToConfirm: !0,
			confirm: async (t) => {
				f("");
				let n = await Ge(t.map((e) => e.entity_id));
				if (!n.total) throw Error(Y("cleanup:performerDelete.nothingToDelete"));
				e = n;
				let r = n.performers.map((e) => Be("performer", e.name, e.id)), i = [...new Set(n.items.map((e) => e.code || e.name || `#${e.id}`))];
				return {
					title: Y("cleanup:performerDelete.confirmTitle"),
					confirmLabel: Y("cleanup:performerDelete.confirm"),
					danger: !0,
					body: Tn(r, i, n)
				};
			},
			run: async () => {
				t = await ze(e), l(t), await Promise.all([q.invalidateQueries({
					queryKey: P,
					exact: !0
				}), q.invalidateQueries({
					queryKey: Se,
					exact: !0
				})]);
			},
			receipt: () => t ? Y("cleanup:performerDelete.purged", { count: t.purged }) + (t.blocked.length ? Y("cleanup:performerDelete.doneBlocked", { count: t.blocked.length }) : "") : ""
		};
	}, S = c ? [
		...c.blocked.map((e) => ({
			path: e.path,
			reason: jt(e.reason_code ?? "", e.reason, e.reason_params)
		})),
		...c.cleanup_pending,
		...c.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": Y("cleanup:tools.bulkDelete"),
		children: [
			n.isPending ? /* @__PURE__ */ (0, $.jsx)("div", { dangerouslySetInnerHTML: { __html: Pe("batch-delete") } }) : n.isError ? /* @__PURE__ */ (0, $.jsxs)(m, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(h, {
					id: "batch-delete-title",
					children: Y("cleanup:tools.bulkDelete")
				}), /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: Y("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						size: "small",
						onClick: () => void n.refetch(),
						children: Y("cleanup:shared.retry")
					}),
					children: W(n.error)
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(p, {
				preferenceId: "performer-delete",
				label: Y("cleanup:performerDelete.tableLabel"),
				title: Y("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: Y("cleanup:performerDelete.unit"),
				description: t,
				items: b,
				columns: _,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Be("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(v, {
					label: Y("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, t) => [{
					action: x(),
					items: e,
					host: g,
					done: t,
					rowAction: {
						label: Y("cleanup:performerDelete.deleteVideosForRow"),
						icon: D
					}
				}]
			}),
			d ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: Y("cleanup:performerDelete.planFailed"),
				children: d
			}) : null,
			c ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: S.length ? "warning" : "info",
				title: Y("cleanup:performerDelete.purged", { count: c.purged }),
				extra: S.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: S.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsx)("p", { children: Y("shell:format.withNote", {
						text: e.path,
						note: e.reason
					}) }, t))
				}) : null,
				children: S.length ? Y("cleanup:performerDelete.partialFailure", {
					count: c.blocked.length,
					quarantined: c.cleanup_pending.length,
					cacheFiles: c.cache_blocked.length
				}) : Y("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var Dn = J("git-compare"), On = J("rotate-cw"), kn = Y("cleanup:shared.reconnecting"), An = Y("cleanup:resourceSync.cleanUpDead"), jn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", Mn = (e) => Number(e || 0).toLocaleString();
function Nn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: jn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: K(),
			children: [/* @__PURE__ */ (0, $.jsx)(I, {
				label: ge[e.location] || Y("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(be, { mark: ne[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(Jt, {
					online: e.online,
					children: e.online ? Y("cleanup:resourceSync.online") : Y("cleanup:resourceSync.offline")
				}),
				figure: e.online ? Y("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? Mt(e) : Y("cleanup:resourceSync.skipped", { summary: Mt(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(xe, {
					tone: "warning",
					children: [
						Mn(e.unreadable),
						" ",
						Y("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: jn,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: Y("cleanup:resourceSync.toPurge"),
					figure: Y("cleanup:resourceSync.purgeCount", { count: Number(St(e) || 0) }),
					meta: Y("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: Y("cleanup:resourceSync.toVanish"),
					figure: Y("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: Y("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: Y("cleanup:resourceSync.emptyDirs"),
					figure: Y("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: Y("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: Y("cleanup:resourceSync.cache"),
					figure: Y("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? lt(n.bytes) : ""
				})
			})
		]
	})] });
}
function Pn({ toast: t, writeAccess: n }) {
	let a = X({
		queryKey: de,
		queryFn: ({ signal: e }) => it(e),
		start: Lt,
		onFinish: (e) => {
			if (q.invalidateQueries({
				queryKey: Se,
				exact: !0
			}), q.invalidateQueries({
				queryKey: fe,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = De(e);
			r ? t(Y("cleanup:resourceSync.applyLeftovers", {
				done: Mn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : t(Y("cleanup:resourceSync.cleaned"));
		}
	}), o = X({
		queryKey: fe,
		queryFn: ({ signal: e }) => at(e),
		start: Rt,
		onStarted: () => a.dismiss()
	}), s = o.start.isPending ? void 0 : o.job, c = o.running || o.start.isPending, l = a.running || a.start.isPending, u = !!o.job && !!a.job, d = u && n?.readOnly === !1, f = s?.status === "complete" || s?.status === "failed", p = Y(c ? "cleanup:resourceSync.scanning" : f ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), g = (e) => void Ie({
		holdToConfirm: !0,
		title: An,
		body: Ee(e),
		confirmLabel: An,
		danger: !0,
		onConfirm: () => a.start.mutateAsync(e.scan_id || "")
	}), _ = o.start.isPending || o.start.isError ? null : a.outcome, v = (e) => {
		let t = De(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(j, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: ke(e, lt)
		});
	}, y = null, b = null;
	if (_?.status === "failed") b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupIncomplete"),
		children: G(_, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (_) b = v(_);
	else if (a.running) y = /* @__PURE__ */ (0, $.jsx)(V, {
		embedded: !0,
		kind: H("resource-apply"),
		label: G(a.job) || Y("cleanup:resourceSync.applying")
	});
	else if (o.start.isError) b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: W(o.start.error)
	});
	else if (o.query.isError && s) b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: kn
	});
	else if (s?.status === "running") {
		let t = At(s);
		y = /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("resource-scan"),
			label: t,
			labelContent: s.total_sources ? /* @__PURE__ */ (0, $.jsx)(e, { value: t }) : t,
			value: s.completed_sources,
			total: s.total_sources
		}), s.sources?.length && (b = /* @__PURE__ */ (0, $.jsx)(Nn, {
			scan: s,
			partial: !0
		}));
	} else if (s?.status === "failed") b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s.sources?.length ? /* @__PURE__ */ (0, $.jsx)(Nn, {
		scan: s,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: G(s, "error") || Y("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (s?.status === "complete" && s.applied) b = a.job?.status === "complete" ? v(a.job) : /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: Y("cleanup:resourceSync.cleanupResult"),
		children: Y("cleanup:resourceSync.alreadyCleaned")
	});
	else if (s?.status === "complete") {
		let e = ut(s);
		b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Nn, { scan: s }), e ? /* @__PURE__ */ (0, $.jsx)(j, {
			tone: "neutral",
			title: Y("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "danger",
				disabled: !d,
				...U(l),
				onClick: () => {
					d && g(s);
				},
				children: l ? Y("cleanup:resourceSync.applyingButton") : An
			}),
			children: Oe(s)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: Y("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return a.start.isError && !_ && (b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [b, /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupFailed"),
		children: W(a.start.error)
	})] })), /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [
			n?.readOnly ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "warning",
				action: n.writerUrl ? /* @__PURE__ */ (0, $.jsx)(i, {
					variant: "secondary",
					size: "small",
					href: n.writerUrl,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": "cleanup.resourceSync.goToPrimary",
						children: Y("cleanup:resourceSync.goToPrimary")
					})
				}) : void 0,
				children: n.readOnlyMessage
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(m, {
				layout: "split",
				labelledBy: "resource-sync-title",
				footer: /* @__PURE__ */ (0, $.jsx)(r, {
					"data-resource-scan": !0,
					leadingIcon: f && !c ? On : Dn,
					disabled: !u,
					...U(c),
					onClick: () => {
						u && !c && o.start.mutate();
					},
					children: p
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)(h, {
						id: "resource-sync-title",
						gap: "small",
						children: Y("cleanup:tools.resourceSync")
					}),
					o.query.isPending || a.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
						role: "status",
						"aria-label": Y("cleanup:resourceSync.statusLoading"),
						"data-skeleton": "",
						className: "skeleton-sheen h-6 rounded-md"
					}) : null,
					!o.job && o.query.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
						tone: "error",
						children: Y("cleanup:resourceSync.scanStatusUnavailable")
					}) : null,
					!a.job && a.query.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
						tone: "error",
						children: Y("cleanup:resourceSync.applyStatusUnavailable")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
						children: pe
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						"aria-live": "polite",
						className: "mt-4 empty:hidden",
						children: y
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-4 empty:hidden",
				children: b
			})
		]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function Fn({ toast: e, writeAccess: t }) {
	let n = Z({
		queryKey: A,
		queryFn: ({ signal: e }) => Qe(e)
	});
	return n.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: Y("cleanup:resourceSync.storageLoadFailed"),
		children: W(n.error)
	}) : n.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: Y("cleanup:resourceSync.storageLoading")
	}) : dt(n.data) ? /* @__PURE__ */ (0, $.jsx)(Pn, {
		toast: e,
		writeAccess: t
	}) : /* @__PURE__ */ (0, $.jsxs)(m, {
		layout: "stack",
		label: Y("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(h, { children: Y("cleanup:tools.resourceSync") }),
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
function In({ tool: e, toast: t, failure: n, writeAccess: r }) {
	let i = (e) => t(e), a;
	switch (e) {
		case "organize":
			a = /* @__PURE__ */ (0, $.jsx)(hn, {
				toast: i,
				failure: n
			});
			break;
		case "resource-sync":
			a = /* @__PURE__ */ (0, $.jsx)(Fn, {
				toast: t,
				writeAccess: r
			});
			break;
		case "orphan-records":
			a = /* @__PURE__ */ (0, $.jsx)(Cn, { toast: i });
			break;
		case "media-repair":
			a = /* @__PURE__ */ (0, $.jsx)($t, { toast: i });
			break;
		case "links":
			a = /* @__PURE__ */ (0, $.jsx)(un, {});
			break;
		case "batch-delete": a = /* @__PURE__ */ (0, $.jsx)(En, { toast: i });
	}
	return /* @__PURE__ */ (0, $.jsx)(Gt, { children: a });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Ln(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: Y("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: Y("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function Rn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: K({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, $.jsx)(I, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function zn({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(Xt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var Bn = J("square-check-big"), Vn = J("sparkles"), Hn = J("file-stack"), Un = J("file-archive"), Wn = J("trash"), Gn = () => {
	for (let e of [
		R,
		ce,
		f,
		b
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Kn({ toast: e, open: t, navigate: n }) {
	let r = Z({
		queryKey: R,
		queryFn: ({ signal: e }) => ot(e)
	}), i = Z({
		queryKey: ce,
		queryFn: ({ signal: e }) => nt(e)
	}), a = Z({
		queryKey: f,
		queryFn: ({ signal: e }) => Ke(e)
	}), l = Z({
		queryKey: b,
		queryFn: ({ signal: e }) => qe(e)
	}), u = Z({
		queryKey: Se,
		queryFn: ({ signal: e }) => st(e)
	});
	return (0, Q.useEffect)(() => {
		let e = s[location.hash];
		e && _t.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(Gt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(z, {
				id: "cleanup-pending",
				children: Y("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: F,
				children: [
					/* @__PURE__ */ (0, $.jsx)(Rn, {
						section: "review",
						label: Y("cleanup:overview.review"),
						icon: Bn,
						open: t,
						value: Ln(r, Ot)
					}),
					/* @__PURE__ */ (0, $.jsx)(Rn, {
						section: "duplicates",
						label: Y("cleanup:overview.duplicates"),
						icon: Hn,
						open: t,
						value: Ln(a, (e) => Number(e.total || 0) ? {
							figure: Y("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: Y("cleanup:overview.reclaimable", { size: lt(e.reclaimable || 0) })
						} : { figure: Y("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(Rn, {
						section: "ads",
						label: Y("cleanup:overview.junkFiles"),
						icon: Un,
						open: t,
						value: Ln(l, (e) => ({
							figure: Y("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: ft(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(Rn, {
						section: "quality",
						label: Y("cleanup:overview.hdUpgrades"),
						icon: Vn,
						open: t,
						value: Ln(i, (e) => ({ figure: Y("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(Rn, {
						section: "trash",
						label: Y("cleanup:overview.trash"),
						icon: Wn,
						open: t,
						value: Ln(u, (e) => ({
							figure: Y("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? Y("cleanup:overview.trashSize", { size: lt(e.bytes || 0) }) : Y("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, $.jsx)(E, {
				toast: (t) => e(t),
				onComplete: Gn
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(z, {
				id: "cleanup-maintenance",
				children: Y("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: o,
				children: c.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(zn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(z, {
				id: "cleanup-deletion",
				children: Y("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: o,
				children: c.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(zn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Kn as DataCleanupPage, In as DataCleanupToolPage };

//# debugId=871cd976-0c1d-4c6a-b493-9a7441905ebf