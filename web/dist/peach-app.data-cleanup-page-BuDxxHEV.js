(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "af7b8afc-91bf-4bbe-9af5-bc9fe4f35a5c", e._sentryDebugIdIdentifier = "sentry-dbid-af7b8afc-91bf-4bbe-9af5-bc9fe4f35a5c");
	} catch {}
})();
import { AnimatedNumber as e, BATCH_DELETE_TEXT as t, BC as n, Button as r, ButtonLink as i, CLEANUP_ENTRY as a, CLEANUP_ENTRY_GRID as o, CLEANUP_HASH_REDIRECTS as s, CLEANUP_TOOLS as c, Chip as l, ColumnFilterAvatar as u, DIRECTORY_TEMPLATE_ERROR as d, DUPLICATES_KEY as f, DataTable as p, Fieldset as m, FieldsetTitle as h, IDLE_REPAIR as g, IconButton as _, ImageWithFallback as v, IndexSearch as y, Input as b, JUNK_KEY as x, LEGACY_AVATAR_IMG as S, LINKS_KEY as ee, LINK_CHECK_KEY as C, LINK_KINDS as w, LINK_PRUNE_KEY as te, LOC as T, LibraryLabel as ne, LibraryProcessingCard as E, M6 as D, MEDIA_REPAIR_KEY as O, MEDIA_REPAIR_URL as k, MEDIA_SOURCES_KEY as re, MEDIA_SOURCE_ICONS as A, Note as j, ORGANIZE_KEY as ie, ORGANIZE_PARAMETER_HINT as ae, ORGANIZE_SCOPE_HINT as M, ORGANIZE_TEXT as oe, ORPHAN_RECORDS_KEY as se, ORPHAN_RECORDS_TEXT as N, PERFORMER_DELETE_KEY as P, PLAIN_STAT_STRIP as F, PlainStat as I, Progress as ce, QUALITY_GOALS_KEY as L, RECORD_LABELS as le, REPAIR_CARD_TEXT as ue, REPAIR_LIBRARIES_KEY as de, RESOURCE_APPLY_KEY as fe, RESOURCE_SCAN_KEY as pe, RESOURCE_SYNC_TEXT as me, RESULT_PANEL as he, RESULT_SECTION as R, REVIEW_COUNTS_KEY as ge, SOURCE_LABELS as z, SectionHeading as B, Select as _e, SelectItem as ve, SiteMark as ye, SourceLabel as be, SourceMark as xe, StatusLabel as Se, TRASH_KEY as Ce, TaskProgress as V, Wt as we, __toESM as Te, activityKind as H, apiSend as Ee, applyConfirmText as De, applyLeftovers as Oe, applyPlanText as ke, applyText as Ae, attachOrphan as je, baseName as Me, busyProps as U, candidateText as Ne, checkLine as Pe, cleanupToolSkeletonHtml as Fe, codedText as Ie, confirmModal as Le, cx as Re, dZ as ze, deletePerformerVideos as Be, entityDisplayName as Ve, entityFaceImg as He, entityPath as Ue, errorMessage as W, esc as We, fetchDeletePerformers as Ge, fetchDeletePlan as Ke, fetchDuplicates as qe, fetchJunkSummary as Je, fetchLinkCheck as Ye, fetchLinkPrune as Xe, fetchLinkStats as Ze, fetchMediaRepair as Qe, fetchMediaSources as $e, fetchOrganize as et, fetchOrganizeExample as tt, fetchOrphanRecords as nt, fetchQualityGoals as rt, fetchRepairLibraries as it, fetchResourceApply as at, fetchResourceScan as ot, fetchReviewCounts as st, fetchTrashSummary as ct, firstGrapheme as lt, fmtSize as G, hasChanges as ut, hasResourceRoots as dt, jobText as K, junkBreakdown as ft, ks as pt, linkLabel as mt, missingToolText as ht, organizeOutcome as gt, peachHistory$1 as _t, pickOrganizeFolder as vt, plainStatClass as q, planSummary as yt, previewOrganize as bt, pruneText as xt, purgeCount as St, purgeOrphan as Ct, queryClient as J, recordsText as wt, rememberTemplates as Tt, require_jsx_runtime as Et, require_react as Dt, reviewSummary as Ot, runBulkAction as kt, scanLine as At, serverLabel as jt, sourceMeta as Mt, spriteGlyph as Y, stageText as Nt, startLinkCheck as Pt, startLinkPrune as Ft, startOrganize as It, startResourceApply as Lt, startResourceScan as Rt, statusLine as zt, t as X, useAction as Bt, useBackgroundJob as Vt, useEntityNames as Ht, useMutation as Ut, useOrderedLibraries as Wt, useQuery as Z, withOrganizeJob as Gt } from "./peach-app.js";
import { Page as Kt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as qt } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { FolderSearchIcon as Jt } from "./peach-app.folder-rows-C3hhF_90.js";
import { ConnectionStatus as Yt } from "./peach-app.connection-status-BrXhLGSm.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ Te(Dt(), 1), $ = Et(), Xt = Y("chevron-right");
function Zt({ label: e, icon: t, summary: n, detail: r, state: i, attributes: o, onOpen: s }) {
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
						className: Re(a.summary, i === "error" && "text-text-error-primary"),
						children: n
					}),
					r ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: a.detail,
						children: r
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(Xt, {
				"aria-hidden": !0,
				className: a.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Qt = (e) => A[e] || e, $t = (e) => J.setQueryData(O, e);
function en({ toast: e = () => {} }) {
	let t = Vt({
		queryKey: O,
		queryFn: ({ signal: e }) => Qe(e),
		start: (e) => Ee(k, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? X("cleanup:mediaRepair.repaired", { count: t.repaired }) : X("cleanup:mediaRepair.nothingToRepair"));
		}
	}), n = Z({
		queryKey: de,
		queryFn: ({ signal: e }) => it(e)
	}), [i, a] = (0, Q.useState)(""), o = Bt(), s = t.job ?? g, c = Wt(n.data ?? [], (e) => e.id), l = s.status === "running", u = c.find((e) => e.id === (l ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], d = () => {
		u && Le({
			title: X("cleanup:mediaRepair.confirmTitle", { name: u.name }),
			body: [X("cleanup:mediaRepair.body"), ...u.metered ? [X("cleanup:mediaRepair.meteredWarning")] : []].join(X("cleanup:shared.sentenceGap")),
			confirmLabel: X("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await t.start.mutateAsync(u.id);
			}
		});
	}, f = () => void o.run("stop", (e) => Ee(k, { stop: !0 }, "POST", e), $t), p = t.outcome, _ = zt(l ? s : p ?? g), v = o.error || K(p, "error") || (t.query.error ? X("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(m, {
			layout: "split",
			label: X("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(_e, {
				"aria-label": X("cleanup:mediaRepair.library"),
				prefix: X("cleanup:mediaRepair.library"),
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
					children: /* @__PURE__ */ (0, $.jsx)(ne, { library: {
						id: e.id,
						name: e.name,
						icon: Qt(e.icon)
					} })
				}, e.id))
			}), l ? /* @__PURE__ */ (0, $.jsx)(r, {
				onClick: f,
				...U(o.busy === "stop"),
				children: X("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(r, {
				onClick: d,
				disabled: !u,
				children: X("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(h, { children: X("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: ue
					}),
					l && s.total ? /* @__PURE__ */ (0, $.jsx)(ce, {
						label: X("cleanup:mediaRepair.progress"),
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
					title: X("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "ghost",
						size: "small",
						onClick: t.dismiss,
						children: X("cleanup:mediaRepair.dismiss")
					}),
					children: ht(p)
				}) : null,
				n.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					children: X("cleanup:mediaRepair.librariesUnavailable")
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
function tn({ className: e }) {
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
var nn = Y("rotate-cw"), rn = X("cleanup:links.goneHint"), an = X("cleanup:links.unclearHint"), on = X("cleanup:links.pruneHint"), sn = X("cleanup:shared.reconnecting"), cn = (e) => Number(e || 0).toLocaleString();
function ln({ label: e, value: t, note: n }) {
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
function un({ title: e, items: t, hint: r, picked: i, onPick: a, actions: o, controls: s, retry: c, retrying: l, footer: d, confirmed: f = !1 }) {
	if (!t.length) return null;
	let m = [
		{
			id: "entity",
			label: X("cleanup:links.columnEntry"),
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
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary",
				"data-inline-action": e.entity_id && e.entity_kind ? "" : void 0,
				href: e.entity_id && e.entity_kind ? Ue(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium text-text-primary ${S}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${We(lt(e.entity))}</span>` + He({
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
			label: X("cleanup:shared.type"),
			width: 128,
			value: (e) => w[e.link_kind] || e.link_kind,
			filter: {
				values: (e) => e.link_kind,
				option: (e) => ({ label: w[e] || e })
			},
			render: (e) => w[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: X("cleanup:links.columnName"),
			min: 128,
			value: (e) => mt(e.label),
			filter: {
				values: (e) => mt(e.label) || new URL(e.url).hostname,
				option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, $.jsx)(ye, { linkId: t.id }) })
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
			label: X("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			filter: { values: (e) => jt(e.note_code ?? "", e.note, e.note_params) },
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "min-w-0 w-full",
				"data-link-result": f ? "gone" : "unclear",
				children: [/^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, $.jsx)(Se, {
					tone: f || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(Se, {
						tone: f ? "error" : "warning",
						children: X(f ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(qt, {
						text: jt(e.note_code ?? "", e.note, e.note_params),
						className: "tabular-nums text-text-secondary"
					})]
				}), !f && e.temporary && e.attempts ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-rechecked": "",
					className: "mt-1 block text-body-2-regular text-text-secondary",
					children: X("cleanup:links.rechecked", { count: e.attempts })
				}) : null]
			})
		},
		{
			id: "url",
			label: X("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			filter: {
				values: (e) => new URL(e.url).hostname,
				option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, $.jsx)(ye, { linkId: t.id }) })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)(ye, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						"data-external-link-label": "",
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(we, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: R,
		"data-link-results": f ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(p, {
			preferenceId: f ? "links-dead" : "links-unreached",
			label: e,
			items: t,
			columns: m,
			rowId: (e) => String(e.id),
			description: r,
			unit: X("cleanup:links.unit"),
			panel: !1,
			footerActions: d,
			rowLabel: (e) => X("cleanup:links.rowLabel", {
				entity: e.entity,
				link: mt(e.label) || e.url
			}),
			selected: i.map(String),
			onSelected: (e) => a(e.map(Number)),
			contextOperations: (e) => [{
				id: "copy",
				label: X("cleanup:links.copyLink"),
				icon: n,
				run: () => navigator.clipboard.writeText(e.url)
			}, ...c ? [{
				id: "retry",
				label: X("manage:shared.retryNow"),
				icon: ze,
				disabled: l,
				run: () => c(e.id)
			}] : []],
			actions: (e) => o?.(e) ?? [],
			controls: () => s
		})
	});
}
function dn() {
	let t = Z({
		queryKey: ee,
		queryFn: ({ signal: e }) => Ze(e)
	}), [n, i] = (0, Q.useState)([]), [a, o] = (0, Q.useState)([]), s = Vt({
		queryKey: te,
		queryFn: ({ signal: e }) => Xe(e),
		start: Ft,
		onFinish: () => {
			J.invalidateQueries({
				queryKey: ee,
				exact: !0
			}), J.invalidateQueries({
				queryKey: C,
				exact: !0
			});
		}
	}), c = Vt({
		queryKey: C,
		queryFn: ({ signal: e }) => Ye(e),
		start: Pt,
		onStarted: () => {
			s.dismiss(), i([]), o([]);
		}
	}), u = c.job, d = u?.check_id ?? "";
	(0, Q.useEffect)(() => {
		i([]), o([]);
	}, [d]);
	let f = c.running || c.start.isPending, p = s.running || s.start.isPending, g = s.running ? s.job : void 0, _ = !!c.job && !!s.job, v = u?.status === "complete", y = u?.gone ?? [], b = u?.unclear ?? [], x = v ? b : [], S = x.filter((e) => n.includes(e.id)).map((e) => e.id), T = t.data, ne = (T?.top_hosts ?? []).slice(0, 3), E = (e) => {
		!_ || f || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: d
		} : {});
	}, O = (e, t = !1) => ({
		key: t ? "prune-all" : "prune",
		label: e,
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: X("cleanup:links.deleteDead"),
			danger: !0,
			body: X("cleanup:links.deleteDeadBody", { count: e.length })
		}),
		run: async (e) => {
			await s.start.mutateAsync({
				checkId: d,
				ids: t ? void 0 : e.map((e) => e.id)
			});
		},
		receipt: () => ""
	}), k = { receipt: () => {} }, re = () => {
		_ && !p && y.length && kt(O(X("cleanup:links.deleteDead"), !0), y, k);
	}, A = p || s.start.isError ? null : s.outcome, ie = c.start.error ?? s.start.error, ae = null, M = null;
	if (A?.status === "failed") M = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:links.pruneIncomplete"),
		children: K(A, "error") || X("cleanup:links.checkTaskLog")
	});
	else if (A && !y.length && !b.length) M = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "success",
		title: X("cleanup:links.pruneDone"),
		children: xt(A)
	});
	else if (ie) M = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:links.checkFailed"),
		children: W(ie)
	});
	else if (c.query.isError && u) M = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: X("cleanup:shared.taskStatus"),
		children: sn
	});
	else if (u?.status === "failed") M = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:links.checkFailed"),
		children: K(u, "error") || X("cleanup:links.checkFailed")
	});
	else if (u && u.status !== "idle") {
		let t = Pe(u);
		ae = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [u.status === "running" ? /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("link-check"),
			label: t,
			labelContent: u.total ? /* @__PURE__ */ (0, $.jsx)(e, { value: t }) : t,
			value: Math.min(u.checked || 0, u.total || 0),
			total: u.total
		}) : null, p ? /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("link-prune"),
			label: K(g) || X("cleanup:links.pruning"),
			value: g?.checked,
			total: g?.total
		}) : null] });
		let s = X("cleanup:links.retrySelected", { count: S.length });
		M = v || y.length || b.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: he,
			children: [
				A?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "success",
					title: X("cleanup:links.pruneDone"),
					children: xt(A)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(un, {
					title: X("cleanup:links.dead"),
					items: y,
					hint: rn,
					picked: a,
					onPick: o,
					confirmed: !0,
					footer: v && y.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: on
					}), /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "danger",
						...U(p),
						onClick: re,
						children: X("cleanup:links.deleteDeadCount", { count: y.length })
					})] }) : null,
					actions: (e) => [{
						action: O(X("cleanup:links.deleteSelected", { count: e.length })),
						items: e,
						host: k,
						disabled: !v || p,
						rowAction: {
							label: X("cleanup:links.deleteDead"),
							icon: D
						}
					}]
				}),
				/* @__PURE__ */ (0, $.jsx)(un, {
					title: X("cleanup:links.unreached"),
					items: b,
					hint: an,
					picked: n,
					onPick: i,
					retry: v ? (e) => E([e]) : void 0,
					retrying: f,
					footer: x.length ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "primary",
						leadingIcon: nn,
						...U(f),
						onClick: () => E(x.map((e) => e.id)),
						children: X("cleanup:links.retryAll", { count: x.length })
					}) : null,
					controls: x.length ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						leadingIcon: nn,
						disabled: !S.length,
						...U(f),
						onClick: () => E(S),
						children: s
					}) : null
				}),
				v && !y.length && !b.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${R} text-body-regular text-notification-success-foreground`,
					children: X("cleanup:links.allReachable")
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
				leadingIcon: tn,
				disabled: !_,
				...U(f),
				onClick: () => E(),
				children: X(f ? "cleanup:links.checking" : v ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(h, {
					id: "link-manager-title",
					gap: "small",
					children: X("cleanup:tools.links")
				}),
				t.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: X("cleanup:links.statsLoadFailed"),
					children: W(t.error)
				}) : T ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(ln, {
						label: X("cleanup:links.totalLinks"),
						value: cn(T.total),
						note: X("cleanup:links.entitySpread", { count: Number(T.entities || 0) })
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(ln, {
						label: w[e] || e,
						value: cn(t)
					}, e))]
				}), ne.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: X("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: ne.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(ye, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(we, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(l, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: cn(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: ae
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: M
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var fn = (e, t) => t ? X("cleanup:organize.applyBodyPath", {
	name: e,
	path: t
}) : X("cleanup:organize.applyBodyAll", { name: e }), pn = X("cleanup:organize.rollbackBody"), mn = 8;
function hn({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, mn).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: Me(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: Me(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > mn ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: X("cleanup:organize.planTruncated")
	}) : null] });
}
function gn({ toast: e, failure: t }) {
	let n = Z({
		queryKey: ie,
		queryFn: ({ signal: e }) => et(e)
	}), i = n.data, a = i?.locations ?? [], [o, s] = (0, Q.useState)(""), c = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", l = i?.templates?.[c], [u, f] = (0, Q.useState)(null), p = u?.location === c ? u : {
		location: c,
		file: l?.file ?? "",
		dir: l?.dir ?? ""
	}, g = (e) => {
		f({
			...p,
			...e
		}), N.reset();
	}, [v, y] = (0, Q.useState)({
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
	let [ee, C] = (0, Q.useState)(null), w = (0, Q.useRef)(null), te = (0, Q.useRef)(null), ne = (0, Q.useRef)(null), E = Z({
		queryKey: [
			"organize-example",
			p.file,
			p.dir
		],
		queryFn: ({ signal: e }) => tt(p.file, p.dir, e),
		enabled: !!i
	}), [D, O] = (0, Q.useState)("file"), k = (0, Q.useRef)(!1), re = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = re.current;
		if (!e) return;
		re.current = null;
		let t = (e.field === "file" ? w : te).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let se = () => ({
		location: c,
		path: x.trim(),
		file_template: p.file.trim(),
		dir_template: p.dir.trim()
	}), N = Ut({
		mutationFn: bt,
		onError: (e) => {
			let t = /整理路径/.test(W(e)) ? "path" : d.test(W(e)) ? "dir" : "file";
			C(t), (t === "path" ? ne : t === "dir" ? te : w).current?.focus();
		}
	}), P = Ut({
		mutationFn: ({ initial: e }) => vt(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (y({
				location: t.location,
				path: e.path
			}), C(null), N.reset(), ne.current?.focus());
		}
	}), F = Vt({
		queryKey: ie,
		queryFn: ({ signal: e }) => et(e),
		start: It,
		jobOf: (e) => e,
		withJob: Gt,
		onStarted: () => N.reset(),
		onFinish: (n) => {
			if (J.invalidateQueries({
				queryKey: ie,
				exact: !0
			}), n.status !== "complete") return;
			let { text: r, failed: i } = gt(n);
			i ? t(X("cleanup:tools.organize"), Error(X("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), I = F.running || F.start.isPending, ce = JSON.stringify(N.variables) === JSON.stringify(se()), L = ce ? N.data : void 0, le = Number(L?.counts?.change || 0), ue = T[c] || c, de = (e) => {
		g(e), C(null), N.reset();
	}, fe = (e) => {
		let t = (D === "file" ? w : te).current, n = p[D], r = k.current ? t?.selectionStart ?? n.length : n.length, i = k.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		re.current = {
			field: D,
			caret: r + a.length
		}, de({ [D]: n.slice(0, r) + a + n.slice(i) });
	}, pe = () => {
		N.isPending || I || !c || (F.dismiss(), F.start.reset(), C(null), N.mutate(se()));
	}, me = () => {
		let e = N.variables;
		e && L && le && Le({
			title: X("cleanup:tools.organize"),
			body: fn(ue, e.path),
			confirmLabel: X("cleanup:tools.organize"),
			onConfirm: async () => {
				await F.start.mutateAsync({
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
	}, he = () => void Le({
		title: X("cleanup:organize.rollbackTitle"),
		body: pn,
		confirmLabel: X("cleanup:organize.rollbackConfirm"),
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), R = null, ge = !!le && !I && !F.outcome, z = F.job, B = F.outcome;
	if (z?.status === "running") {
		let e = K(z) || Nt(z) || X("cleanup:organize.running");
		R = /* @__PURE__ */ (0, $.jsx)(V, {
			embedded: !0,
			kind: H("organize", z.stage_code),
			label: e,
			value: Math.min(z.checked || 0, z.total || 0),
			total: z.total
		});
	} else if (B?.status === "failed") R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:organize.incomplete"),
		children: K(B, "error") || X("cleanup:shared.checkTaskLogFiles")
	});
	else if (B) {
		let { text: e, failed: t } = gt(B);
		R = /* @__PURE__ */ (0, $.jsx)(j, {
			tone: t ? "warning" : "success",
			title: X(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else F.start.isError ? R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:organize.failed"),
		children: W(F.start.error)
	}) : N.isPending ? R = /* @__PURE__ */ (0, $.jsx)(V, {
		embedded: !0,
		kind: H("organize", "organize.checkingPlan"),
		label: X("cleanup:organize.checkingPlan")
	}) : N.isError && ce ? R = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:organize.previewFailed"),
		children: W(N.error)
	}) : L && (R = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: X("cleanup:organize.previewResult"),
		children: yt(L)
	}), le ? /* @__PURE__ */ (0, $.jsx)(hn, { plan: L }) : null] }));
	return /* @__PURE__ */ (0, $.jsxs)(m, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				...U(I),
				onClick: he,
				children: X("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: ge ? "secondary" : "primary",
				disabled: !a.length || I,
				...U(N.isPending),
				onClick: pe,
				children: X("cleanup:organize.preview")
			}),
			ge ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "primary",
				onClick: me,
				children: X("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(h, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: X("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: oe
			}),
			n.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: X("cleanup:organize.settingsLoadFailed"),
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
							"aria-label": X("cleanup:organize.storageLabel"),
							prefix: X("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: c || null,
							onSelectionChange: (e) => {
								e !== null && (s(String(e)), y({
									location: String(e),
									path: ""
								}), C(null), N.reset(), P.reset(), k.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(ve, {
								id: e.location,
								textValue: T[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(xe, { mark: A[e.location] || "database" }), T[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(b, {
								"aria-label": X("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: X("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: ne,
								isInvalid: ee === "path",
								onChange: (e) => {
									y({
										location: c,
										path: e
									}), C(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(_, {
								icon: Jt,
								"aria-label": X("cleanup:organize.choosePath"),
								...U(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === c)?.roots[0] || "",
									location: c,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: M
					}),
					P.isError ? /* @__PURE__ */ (0, $.jsxs)(j, {
						tone: "error",
						title: X("cleanup:organize.pickerFailed"),
						children: [W(P.error), X("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(b, {
						label: X("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: p.file,
						ref: w,
						spellCheck: "false",
						isInvalid: ee === "file",
						onFocus: () => {
							O("file"), k.current = !0;
						},
						onChange: (e) => de({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(b, {
						label: X("cleanup:organize.dirTemplate"),
						placeholder: X("cleanup:organize.dirTemplatePlaceholder"),
						value: p.dir,
						ref: te,
						spellCheck: "false",
						isInvalid: ee === "dir",
						onFocus: () => {
							O("dir"), k.current = !0;
						},
						onChange: (e) => de({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: X("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => {
								let t = Ie(e, "label");
								return /* @__PURE__ */ (0, $.jsx)(r, {
									variant: "secondary",
									size: "small",
									title: e.example || t,
									className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
									onClick: () => {
										de({
											file: e.file,
											dir: e.dir
										}), k.current = !1;
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
						"aria-busy": E.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [X("cleanup:organize.examplePath"), /* @__PURE__ */ (0, $.jsx)("code", {
							className: "wrap-anywhere",
							children: E.data?.example || E.data?.error || (E.isError ? W(E.error) : X("cleanup:organize.previewLoading"))
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ (0, $.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, $.jsx)("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: X("cleanup:organize.insertParameter")
							}), X("cleanup:organize.insertTarget", { target: X(D === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
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
						children: ae
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
var _n = Y("play"), vn = Object.fromEntries([
	...le,
	["rating", X("catalog:shared.rating")],
	["play_count", X("catalog:catalogList.plays")],
	["last_played", X("catalog:catalogList.lastWatched")],
	["o_count", X("catalog:catalogList.climaxCount")]
]), yn = () => J.invalidateQueries({
	queryKey: se,
	exact: !0
});
function bn(e, t) {
	return Le({
		title: X("cleanup:orphans.deleteRecord"),
		holdToConfirm: !0,
		body: wt(e.records) ? X("cleanup:orphans.deleteBodyWithActivity", {
			name: e.name,
			records: wt(e.records)
		}) : X("cleanup:orphans.deleteBody", { name: e.name }),
		confirmLabel: X("cleanup:orphans.deleteRecord"),
		danger: !0,
		onConfirm: t
	});
}
async function xn(e, t) {
	t((await Ct(e.id)).blocked.length ? X("cleanup:orphans.fileRestored", { name: e.name }) : X("cleanup:orphans.recordDeleted", { name: e.name })), yn();
}
function Sn({ item: e, toast: t }) {
	let [n, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = Ut({
		mutationFn: () => je(e.id, Number(n)),
		onSuccess: () => {
			let r = e.candidates.find((e) => e.id === n);
			t(X("cleanup:orphans.attached", {
				name: e.name,
				target: r?.name ?? X("cleanup:orphans.selectedFile")
			})), yn();
		},
		onError: (e) => t(W(e))
	}), o = Ut({ mutationFn: () => xn(e, t) }), s = () => {
		bn(e, () => o.mutateAsync());
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "danger",
				size: "small",
				...U(c),
				onClick: s,
				children: X("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(_e, {
				"data-orphan-target": "",
				"aria-label": X("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: X("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(ve, {
					id: e.id,
					textValue: Ne(e),
					children: Ne(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "primary",
				size: "small",
				disabled: n === null,
				...U(c),
				onClick: () => a.mutate(),
				children: X("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function Cn({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-media-placeholder text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(_n, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, $.jsx)(v, {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
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
					e.location ? /* @__PURE__ */ (0, $.jsx)(be, {
						source: e.location,
						label: T[e.location] || e.location
					}) : null
				]
			})]
		})]
	});
}
function wn({ toast: e }) {
	let [t, n] = (0, Q.useState)([]), r = Z({
		queryKey: se,
		queryFn: ({ signal: e }) => nt(e)
	}), i = r.data?.items ?? [], a = { receipt: e }, o = (t) => {
		let n = [{
			id: "delete",
			label: X("cleanup:orphans.deleteRecord"),
			icon: D,
			danger: !0,
			run: () => {
				bn(t, () => xn(t, e));
			}
		}];
		return t.candidates.length && n.unshift({
			id: "target",
			label: X("cleanup:orphans.targetLabel", { name: t.name }),
			icon: pt,
			run: (e) => {
				e.querySelector("[data-orphan-target] button")?.click();
			}
		}), n;
	}, s = (e) => {
		let t = null;
		return {
			key: "purge",
			label: X("cleanup:orphans.deleteSelectedCount", { count: e }),
			reversal: "irreversible",
			danger: !0,
			holdToConfirm: !0,
			confirm: (e) => ({
				title: X("cleanup:orphans.deleteSelectedTitle"),
				danger: !0,
				body: X("cleanup:orphans.deleteSelectedBody", { count: e.length }),
				items: e.map((e) => e.name)
			}),
			run: async (e) => {
				t = await Ct(e.map((e) => e.id));
			},
			receipt: () => t ? X("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? X("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "") : ""
		};
	}, c = [
		{
			id: "item",
			label: X("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(Cn, { item: e })
		},
		{
			id: "records",
			label: X("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => wt(e.records),
			filter: {
				values: (e) => Object.keys(e.records).filter((t) => e.records[t]),
				option: (e) => ({ label: vn[e] || e })
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: wt(e.records) || X("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: X("cleanup:shared.actions"),
			width: i.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(Sn, {
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
				children: X("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: X("cleanup:orphans.loadFailed"),
				children: W(r.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(p, {
			preferenceId: "orphan-records",
			label: X("cleanup:orphans.tableLabel"),
			items: i,
			columns: c,
			contextOperations: o,
			title: X("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: X("cleanup:orphans.unit"),
			description: N,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: t,
			onSelected: n,
			actions: (e) => [{
				items: e,
				host: a,
				action: s(e.length),
				done: () => {
					n([]), yn();
				}
			}]
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function Tn({ person: e }) {
	let t = Ve("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: Ue("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: Re("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium", S),
			dangerouslySetInnerHTML: { __html: `<span>${We(lt(t))}</span>` + He({
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
function En(e, t, n) {
	let r = (e) => e.slice(0, 5).join(X("cleanup:shared.listSeparator")), i = e.length > 5 ? X("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? X("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		X("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: G(n.bytes)
		}),
		X("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [X("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		X("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(X("cleanup:shared.sentenceGap"));
}
function Dn({ toast: e }) {
	Ht();
	let n = Z({
		queryKey: P,
		queryFn: ({ signal: e }) => Ge(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, l] = (0, Q.useState)(null), [d, f] = (0, Q.useState)(""), g = {
		receipt: e,
		failure: (e) => f(W(e))
	}, _ = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: X("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			filter: {
				values: (e) => e.k,
				option: (e, t) => ({
					label: Ve("performer", e, t?.entity_id),
					searchTerms: t?.aliases,
					leading: t && /* @__PURE__ */ (0, $.jsx)(u, { person: {
						...t,
						id: t.entity_id,
						name: e
					} })
				})
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)(Tn, { person: e })
		},
		{
			id: "works",
			label: X("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			filter: {
				range: "count",
				value: (e) => e.n
			},
			render: (e) => X("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: X("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			filter: {
				range: "count",
				value: (e) => e.file_count
			},
			render: (e) => X("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: X("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			filter: {
				range: "size",
				value: (e) => e.bytes
			},
			render: (e) => G(e.bytes)
		}
	], []), v = o.toLocaleLowerCase(), b = (n.data?.items || []).filter((e) => !v || [
		e.k,
		Ve("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(v))), x = () => {
		let e = null, t = null;
		return {
			key: "performer-delete",
			label: X("cleanup:performerDelete.deleteSelected"),
			reversal: "irreversible",
			danger: !0,
			holdToConfirm: !0,
			confirm: async (t) => {
				f("");
				let n = await Ke(t.map((e) => e.entity_id));
				if (!n.total) throw Error(X("cleanup:performerDelete.nothingToDelete"));
				e = n;
				let r = n.performers.map((e) => Ve("performer", e.name, e.id)), i = [...new Set(n.items.map((e) => e.code || e.name || `#${e.id}`))];
				return {
					title: X("cleanup:performerDelete.confirmTitle"),
					confirmLabel: X("cleanup:performerDelete.confirm"),
					danger: !0,
					body: En(r, i, n)
				};
			},
			run: async () => {
				t = await Be(e), l(t), await Promise.all([J.invalidateQueries({
					queryKey: P,
					exact: !0
				}), J.invalidateQueries({
					queryKey: Ce,
					exact: !0
				})]);
			},
			receipt: () => t ? X("cleanup:performerDelete.purged", { count: t.purged }) + (t.blocked.length ? X("cleanup:performerDelete.doneBlocked", { count: t.blocked.length }) : "") : ""
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
		"aria-label": X("cleanup:tools.bulkDelete"),
		children: [
			n.isPending ? /* @__PURE__ */ (0, $.jsx)("div", { dangerouslySetInnerHTML: { __html: Fe("batch-delete") } }) : n.isError ? /* @__PURE__ */ (0, $.jsxs)(m, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(h, {
					id: "batch-delete-title",
					children: X("cleanup:tools.bulkDelete")
				}), /* @__PURE__ */ (0, $.jsx)(j, {
					tone: "error",
					title: X("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						size: "small",
						onClick: () => void n.refetch(),
						children: X("cleanup:shared.retry")
					}),
					children: W(n.error)
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(p, {
				preferenceId: "performer-delete",
				label: X("cleanup:performerDelete.tableLabel"),
				title: X("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: X("cleanup:performerDelete.unit"),
				description: t,
				items: b,
				columns: _,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Ve("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(y, {
					label: X("cleanup:performerDelete.search"),
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
						label: X("cleanup:performerDelete.deleteVideosForRow"),
						icon: D
					}
				}]
			}),
			d ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: X("cleanup:performerDelete.planFailed"),
				children: d
			}) : null,
			c ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: S.length ? "warning" : "info",
				title: X("cleanup:performerDelete.purged", { count: c.purged }),
				extra: S.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: S.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsx)("p", { children: X("shell:format.withNote", {
						text: e.path,
						note: e.reason
					}) }, t))
				}) : null,
				children: S.length ? X("cleanup:performerDelete.partialFailure", {
					count: c.blocked.length,
					quarantined: c.cleanup_pending.length,
					cacheFiles: c.cache_blocked.length
				}) : X("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var On = Y("git-compare"), kn = Y("rotate-cw"), An = X("cleanup:shared.reconnecting"), jn = X("cleanup:resourceSync.cleanUpDead"), Mn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", Nn = (e) => Number(e || 0).toLocaleString();
function Pn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: Mn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: q(),
			children: [/* @__PURE__ */ (0, $.jsx)(I, {
				label: z[e.location] || X("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(xe, { mark: A[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(Yt, {
					online: e.online,
					children: e.online ? X("cleanup:resourceSync.online") : X("cleanup:resourceSync.offline")
				}),
				figure: e.online ? X("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? Mt(e) : X("cleanup:resourceSync.skipped", { summary: Mt(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(Se, {
					tone: "warning",
					children: [
						Nn(e.unreadable),
						" ",
						X("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Mn,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: X("cleanup:resourceSync.toPurge"),
					figure: X("cleanup:resourceSync.purgeCount", { count: Number(St(e) || 0) }),
					meta: X("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: X("cleanup:resourceSync.toVanish"),
					figure: X("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: X("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: X("cleanup:resourceSync.emptyDirs"),
					figure: X("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: X("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					label: X("cleanup:resourceSync.cache"),
					figure: X("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? G(n.bytes) : ""
				})
			})
		]
	})] });
}
function Fn({ toast: t, writeAccess: n }) {
	let a = Vt({
		queryKey: fe,
		queryFn: ({ signal: e }) => at(e),
		start: Lt,
		onFinish: (e) => {
			if (J.invalidateQueries({
				queryKey: Ce,
				exact: !0
			}), J.invalidateQueries({
				queryKey: pe,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = Oe(e);
			r ? t(X("cleanup:resourceSync.applyLeftovers", {
				done: Nn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : t(X("cleanup:resourceSync.cleaned"));
		}
	}), o = Vt({
		queryKey: pe,
		queryFn: ({ signal: e }) => ot(e),
		start: Rt,
		onStarted: () => a.dismiss()
	}), s = o.start.isPending ? void 0 : o.job, c = o.running || o.start.isPending, l = a.running || a.start.isPending, u = !!o.job && !!a.job, d = u && n?.readOnly === !1, f = s?.status === "complete" || s?.status === "failed", p = X(c ? "cleanup:resourceSync.scanning" : f ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), g = (e) => void Le({
		holdToConfirm: !0,
		title: jn,
		body: De(e),
		confirmLabel: jn,
		danger: !0,
		onConfirm: () => a.start.mutateAsync(e.scan_id || "")
	}), _ = o.start.isPending || o.start.isError ? null : a.outcome, v = (e) => {
		let t = Oe(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(j, {
			tone: t ? "warning" : "success",
			title: X(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: Ae(e, G)
		});
	}, y = null, b = null;
	if (_?.status === "failed") b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:resourceSync.cleanupIncomplete"),
		children: K(_, "error") || X("cleanup:shared.checkTaskLogFiles")
	});
	else if (_) b = v(_);
	else if (a.running) y = /* @__PURE__ */ (0, $.jsx)(V, {
		embedded: !0,
		kind: H("resource-apply"),
		label: K(a.job) || X("cleanup:resourceSync.applying")
	});
	else if (o.start.isError) b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:resourceSync.scanFailed"),
		children: W(o.start.error)
	});
	else if (o.query.isError && s) b = /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: X("cleanup:shared.taskStatus"),
		children: An
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
		}), s.sources?.length && (b = /* @__PURE__ */ (0, $.jsx)(Pn, {
			scan: s,
			partial: !0
		}));
	} else if (s?.status === "failed") b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s.sources?.length ? /* @__PURE__ */ (0, $.jsx)(Pn, {
		scan: s,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:resourceSync.scanFailed"),
		children: K(s, "error") || X("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (s?.status === "complete" && s.applied) b = a.job?.status === "complete" ? v(a.job) : /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "neutral",
		title: X("cleanup:resourceSync.cleanupResult"),
		children: X("cleanup:resourceSync.alreadyCleaned")
	});
	else if (s?.status === "complete") {
		let e = ut(s);
		b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Pn, { scan: s }), e ? /* @__PURE__ */ (0, $.jsx)(j, {
			tone: "neutral",
			title: X("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "danger",
				disabled: !d,
				...U(l),
				onClick: () => {
					d && g(s);
				},
				children: l ? X("cleanup:resourceSync.applyingButton") : jn
			}),
			children: ke(s)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: X("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return a.start.isError && !_ && (b = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [b, /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:resourceSync.cleanupFailed"),
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
						children: X("cleanup:resourceSync.goToPrimary")
					})
				}) : void 0,
				children: n.readOnlyMessage
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(m, {
				layout: "split",
				labelledBy: "resource-sync-title",
				footer: /* @__PURE__ */ (0, $.jsx)(r, {
					"data-resource-scan": !0,
					leadingIcon: f && !c ? kn : On,
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
						children: X("cleanup:tools.resourceSync")
					}),
					o.query.isPending || a.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
						role: "status",
						"aria-label": X("cleanup:resourceSync.statusLoading"),
						"data-skeleton": "",
						className: "skeleton-sheen h-6 rounded-md"
					}) : null,
					!o.job && o.query.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
						tone: "error",
						children: X("cleanup:resourceSync.scanStatusUnavailable")
					}) : null,
					!a.job && a.query.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
						tone: "error",
						children: X("cleanup:resourceSync.applyStatusUnavailable")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
						children: me
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
function In({ toast: e, writeAccess: t }) {
	let n = Z({
		queryKey: re,
		queryFn: ({ signal: e }) => $e(e)
	});
	return n.isError ? /* @__PURE__ */ (0, $.jsx)(j, {
		tone: "error",
		title: X("cleanup:resourceSync.storageLoadFailed"),
		children: W(n.error)
	}) : n.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: X("cleanup:resourceSync.storageLoading")
	}) : dt(n.data) ? /* @__PURE__ */ (0, $.jsx)(Fn, {
		toast: e,
		writeAccess: t
	}) : /* @__PURE__ */ (0, $.jsxs)(m, {
		layout: "stack",
		label: X("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(h, { children: X("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: X("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: X("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function Ln({ tool: e, toast: t, failure: n, writeAccess: r }) {
	let i = (e) => t(e), a;
	switch (e) {
		case "organize":
			a = /* @__PURE__ */ (0, $.jsx)(gn, {
				toast: i,
				failure: n
			});
			break;
		case "resource-sync":
			a = /* @__PURE__ */ (0, $.jsx)(In, {
				toast: t,
				writeAccess: r
			});
			break;
		case "orphan-records":
			a = /* @__PURE__ */ (0, $.jsx)(wn, { toast: i });
			break;
		case "media-repair":
			a = /* @__PURE__ */ (0, $.jsx)(en, { toast: i });
			break;
		case "links":
			a = /* @__PURE__ */ (0, $.jsx)(dn, {});
			break;
		case "batch-delete": a = /* @__PURE__ */ (0, $.jsx)(Dn, { toast: i });
	}
	return /* @__PURE__ */ (0, $.jsx)(Kt, { children: a });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Rn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: X("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: X("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function zn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: q({ interactive: !0 }),
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
function Bn({ tool: e, navigate: t }) {
	let n = Y(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(Zt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var Vn = Y("square-check-big"), Hn = Y("sparkles"), Un = Y("file-stack"), Wn = Y("file-archive"), Gn = Y("trash"), Kn = () => {
	for (let e of [
		ge,
		L,
		f,
		x
	]) J.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function qn({ toast: e, open: t, navigate: n }) {
	let r = Z({
		queryKey: ge,
		queryFn: ({ signal: e }) => st(e)
	}), i = Z({
		queryKey: L,
		queryFn: ({ signal: e }) => rt(e)
	}), a = Z({
		queryKey: f,
		queryFn: ({ signal: e }) => qe(e)
	}), l = Z({
		queryKey: x,
		queryFn: ({ signal: e }) => Je(e)
	}), u = Z({
		queryKey: Ce,
		queryFn: ({ signal: e }) => ct(e)
	});
	return (0, Q.useEffect)(() => {
		let e = s[location.hash];
		e && _t.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(Kt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(B, {
				id: "cleanup-pending",
				children: X("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: F,
				children: [
					/* @__PURE__ */ (0, $.jsx)(zn, {
						section: "review",
						label: X("cleanup:overview.review"),
						icon: Vn,
						open: t,
						value: Rn(r, Ot)
					}),
					/* @__PURE__ */ (0, $.jsx)(zn, {
						section: "duplicates",
						label: X("cleanup:overview.duplicates"),
						icon: Un,
						open: t,
						value: Rn(a, (e) => Number(e.total || 0) ? {
							figure: X("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: X("cleanup:overview.reclaimable", { size: G(e.reclaimable || 0) })
						} : { figure: X("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(zn, {
						section: "ads",
						label: X("cleanup:overview.junkFiles"),
						icon: Wn,
						open: t,
						value: Rn(l, (e) => ({
							figure: X("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: ft(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(zn, {
						section: "quality",
						label: X("cleanup:overview.hdUpgrades"),
						icon: Hn,
						open: t,
						value: Rn(i, (e) => ({ figure: X("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(zn, {
						section: "trash",
						label: X("cleanup:overview.trash"),
						icon: Gn,
						open: t,
						value: Rn(u, (e) => ({
							figure: X("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? X("cleanup:overview.trashSize", { size: G(e.bytes || 0) }) : X("cleanup:overview.trashEmptyHint")
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
				onComplete: Kn
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(B, {
				id: "cleanup-maintenance",
				children: X("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: o,
				children: c.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Bn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(B, {
				id: "cleanup-deletion",
				children: X("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: o,
				children: c.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Bn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { qn as DataCleanupPage, Ln as DataCleanupToolPage };

//# debugId=af7b8afc-91bf-4bbe-9af5-bc9fe4f35a5c