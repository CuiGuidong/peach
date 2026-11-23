(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "95a3f2ac-f8b2-419f-b4f7-f3dd2f100482", e._sentryDebugIdIdentifier = "sentry-dbid-95a3f2ac-f8b2-419f-b4f7-f3dd2f100482");
	} catch {}
})();
import { $ea3928288112382f$export$439d29a4e110a164 as e, $fe21c36db05242bb$export$a98f0dcb43a68a25 as t, $fe21c36db05242bb$export$d7b12c4107be0d61 as n, Button as r, ButtonLink as i, Checkbox as a, CheckboxGlyph as o, Chip as s, CollapseChevron as c, CollapseRegion as l, DEFAULT_CATEGORY as u, DataTableFooter as d, ENTITY_REVIEW_KINDS as ee, Ea as te, EmptyState as f, ExternalLink as ne, FIELDSET_FOOT as re, FilterGlassRows as p, Gg as ie, InputBase as m, LEGACY_AVATAR_IMG as h, LinkButton as ae, Note as g, REVIEW_CATEGORIES as _, REVIEW_DECISION_LABELS as oe, REVIEW_KEY as se, REVIEW_LABELS as v, REVIEW_QUEUES as y, REVIEW_QUEUE_LABELS as b, Select as x, SelectItem as S, SelectionActions as C, SelectionDock as ce, SortableBoardTabs as w, TextField as T, Wt as E, Xf as le, Yt as D, __toESM as O, apiGet as k, apiSend as ue, avatarInner as A, b1 as de, busyProps as j, canApprove as fe, cardClass as pe, codedText as M, commonReviewSources as me, composingKey as he, currentReviewRow as N, cx as P, decisionPayload as ge, decisionReceipt as _e, defaultChoice as ve, enterPageSelection as ye, errorMessage as F, exitPageSelection as be, fetchReview as xe, filterReviewRows as Se, gB as Ce, groupReviewRows as we, isReviewCategory as Te, joinList as Ee, l7 as I, localTime as De, m7 as Oe, mirrorText as ke, pendingGenres as Ae, queryClient as je, quoted as Me, recordGenre as L, reloadReview as R, require_jsx_runtime as z, require_react as Ne, reviewGroupingOptions as Pe, reviewQueueData as Fe, reviewQueueOf as Ie, reviewWindow as Le, rowEvidence as Re, rowFieldName as B, rowSelectionOperation as ze, rowSubject as V, rowTags as Be, rowTitle as Ve, s7 as H, selectReviewRange as He, serverLabel as Ue, serverLabelList as We, settleReviewRows as Ge, submitDecision as Ke, t as U, useMutation as qe, useNavigationOrder as Je, useOverlayScrollbar as Ye, usePageSelection as Xe, useQuery as Ze, useRectangleSelection as Qe, useViewGlide as $e, useWorkContextMenu as W } from "./peach-app.js";
import { Page as et } from "./peach-app.page-QAncjzM1.js";
import { DataTable as tt } from "./peach-app.data-table-CPoQx0_S.js";
import { ComparisonText as nt } from "./peach-app.comparison-text-d2N41j2E.js";
// src/react/review/auto-landings.ts
var G = /* @__PURE__ */ O(Ne(), 1), K = "/api/review/auto-landings", rt = "/api/review/auto-landings/revert", it = ["review", "auto-landings"], q = (e) => Ue(e.field_code ?? "", e.field), J = (e) => Ue(e.label_code ?? "", e.label), at = (e) => k(K, e), ot = (e) => k(`${K}?items=${encodeURIComponent(e.join("\n"))}`), Y = (e, t) => ue(rt, {
	items: e,
	token: t
}), X = (e) => e.at === null ? "" : De((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), Z = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : U("manage:autoLandings.unknownVideo")), st = (e) => e ? Me(e) : U("manage:autoLandings.emptyValue"), Q = (e) => e.tags.length ? Ee(e.tags) : e.value, ct = (e) => e.tags.length ? U("manage:autoLandings.existingTagsKept") : U("manage:autoLandings.previousValue", { value: e.previous.length ? Ee(e.previous.map(st)) : U("manage:autoLandings.emptyValue") });
function lt(e) {
	return [
		...e.restores.map((e) => U("manage:autoLandings.previewRestore", {
			video: Z(e),
			field: q(e),
			current: st(e.current),
			previous: st(e.previous)
		})),
		...e.tags.map((e) => U("manage:autoLandings.previewRemoveTag", {
			video: Z(e),
			tag: e.tag
		})),
		...e.changed.map((e) => e.gone ? U("manage:autoLandings.previewGone", {
			video: Z(e),
			field: q(e)
		}) : U("manage:autoLandings.previewEdited", {
			video: Z(e),
			field: q(e)
		}))
	];
}
function ut(e) {
	let t = [e.restores.length ? U("manage:autoLandings.previewRestoreCount", { count: e.restores.length }) : "", e.tags.length ? U("manage:autoLandings.previewRemoveTags", { count: e.tags.length }) : ""].filter(Boolean);
	return [
		t.length ? U("manage:autoLandings.previewRevert", {
			count: e.decisions,
			details: t.join(U("shell:format.clauseSeparator"))
		}) : U("manage:autoLandings.previewRevertNothing", { count: e.decisions }),
		e.changed.length ? U("manage:autoLandings.previewUnchanged", { count: e.changed.length }) : "",
		U("manage:autoLandings.revertBackupNote")
	].filter(Boolean).join(U("shell:format.sentenceGap"));
}
function dt(e) {
	let t = [e.restored ? U("manage:autoLandings.resultRestoreCount", { count: e.restored }) : "", e.removed_tags ? U("manage:autoLandings.resultRemovedTags", { count: e.removed_tags }) : ""].filter(Boolean);
	return t.length ? U("manage:autoLandings.resultSummaryDetails", {
		count: e.decisions,
		details: t.join(U("shell:format.clauseSeparator"))
	}) : U("manage:autoLandings.resultSummary", { count: e.decisions });
}
// src/react/review/auto-landings-card.tsx
var $ = z(), ft = U("manage:autoLandings.description");
function pt({ item: t, openItem: n }) {
	let r = t.asset_id && !t.gone ? () => n(t.asset_id) : void 0;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("button", {
			type: "button",
			disabled: !r,
			onClick: r,
			className: "flex aspect-card-cover w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-media-placeholder outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring disabled:cursor-default",
			children: [t.preview_url ? /* @__PURE__ */ (0, $.jsx)("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: U("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: U("manage:autoLandings.openVideo", { name: Z(t) }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsxs)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [Z(t), t.assets > 1 ? /* @__PURE__ */ (0, $.jsx)("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: U("manage:autoLandings.fileCount", { count: t.assets })
				}) : null]
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				title: t.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: t.gone ? U("manage:autoLandings.videoGone") : t.name
			})]
		})]
	});
}
function mt({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			title: Q(e),
			className: "truncate text-body-regular text-text-primary",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-text-secondary",
				children: U("shell:format.labelPrefix", { label: q(e) })
			}), Q(e)]
		}), /* @__PURE__ */ (0, $.jsx)("small", {
			title: ct(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: ct(e)
		})]
	});
}
function ht({ locked: e, openItem: t, toast: n }) {
	let [r, i] = (0, G.useState)([]), [a, o] = (0, G.useState)(null), s = Ze({
		queryKey: it,
		queryFn: ({ signal: e }) => at(e)
	}), c = s.data?.items ?? [], l = (e) => {
		let t = null, n = null;
		return {
			key: "revert",
			label: U("manage:autoLandings.revertSelected", { count: e }),
			reversal: "irreversible",
			confirm: async (e) => (t = await ot(e.map((e) => e.item_key)), {
				title: U("manage:autoLandings.revertTitle"),
				body: ut(t),
				items: lt(t),
				confirmLabel: U("manage:shared.revert")
			}),
			run: async () => {
				n = await Y(t.items, t.token), o(n), je.invalidateQueries({ queryKey: se });
			},
			receipt: () => n ? dt(n) : ""
		};
	}, u = {
		receipt: n,
		failure: (e) => n(F(e))
	};
	if (!c.length && !a && !s.isError) return null;
	let d = [
		{
			id: "work",
			label: U("manage:shared.video"),
			width: 300,
			min: 240,
			value: (e) => Z(e),
			render: (e) => /* @__PURE__ */ (0, $.jsx)(pt, {
				item: e,
				openItem: t
			})
		},
		{
			id: "written",
			label: U("manage:autoLandings.columnWritten"),
			width: 320,
			min: 220,
			value: (e) => `${q(e)}${Q(e)}`,
			filter: { values: q },
			render: (e) => /* @__PURE__ */ (0, $.jsx)(mt, { item: e })
		},
		{
			id: "rule",
			label: U("manage:autoLandings.columnRule"),
			width: 142,
			min: 100,
			value: J,
			filter: { values: J },
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				title: J(e),
				className: "block truncate text-body-2-regular text-text-secondary",
				children: J(e)
			})
		},
		{
			id: "at",
			label: U("manage:autoLandings.columnTime"),
			width: 152,
			min: 132,
			value: (e) => e.at ?? 0,
			filter: {
				range: "timestamp",
				value: (e) => e.at
			},
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				title: e.batch,
				className: "whitespace-nowrap tabular-nums text-caption-1-regular text-text-secondary",
				children: X(e) || U("manage:autoLandings.timeUnknown")
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [a ? /* @__PURE__ */ (0, $.jsxs)(g, {
			tone: "success",
			title: dt(a),
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular",
				children: U("manage:autoLandings.backupDone", { path: a.backup })
			}), a.changed.length ? /* @__PURE__ */ (0, $.jsxs)("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [U("manage:autoLandings.leftUnchanged", { count: a.changed.length }), a.changed.map((e) => e.gone ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-text-secondary",
					children: U("manage:autoLandings.deletedAsset", { id: e.asset_id })
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ (0, $.jsx)(ae, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: Z(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, s.isError ? /* @__PURE__ */ (0, $.jsx)(g, {
			tone: "error",
			title: U("manage:autoLandings.loadFailed"),
			children: F(s.error)
		}) : c.length ? /* @__PURE__ */ (0, $.jsx)(tt, {
			label: U("manage:autoLandings.title"),
			items: c,
			columns: d,
			title: U("manage:autoLandings.title"),
			titleId: "auto-landings-title",
			unit: U("manage:autoLandings.unit"),
			description: ft,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${Z(e)} ${q(e)}`,
			selected: r,
			onSelected: i,
			contextOperations: ({ asset_id: e, gone: n }) => e && !n ? [{
				id: "open",
				label: U("catalog:mediaActions.open"),
				icon: ie,
				run: () => t(e)
			}] : [],
			actions: (t, n) => [{
				action: l(t.length),
				items: t,
				host: u,
				disabled: e,
				done: n,
				rowAction: {
					label: U("manage:shared.revert"),
					icon: de
				}
			}]
		}) : null]
	});
}
// src/react/review/bulk-toolbar.tsx
function gt(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: i, groups: a, filter: o, onFilter: s, pageKeys: c, allKeys: l = c, selected: u, onSelected: d, selectedRows: ee, metadata: te, busy: f, feedback: ne, onUnifySource: re, actions: ie, queueView: m = "pending", queueCounts: h, onQueueChange: ae, locked: g, fields: _, fieldFilter: oe, onFieldFilter: se } = e, v = c.filter((e) => u.has(e)), C = v.length > 0 && v.length === c.length, w = l.length > c.length && l.every((e) => u.has(e)), T = me(ee), E = te && ee.some((e) => (e.candidates?.length || 0) > 1), le = T.length ? U("manage:reviewToolbar.sourceForAll") : U("manage:reviewToolbar.noCommonSource"), D = (0, G.useRef)(null), O = (0, G.useRef)(null), k = (0, G.useRef)(null), [ue, A] = (0, G.useState)(!1), de = $e(D, O, "[data-entity-state][aria-pressed=\"true\"]", m);
	return (0, G.useLayoutEffect)(() => {
		let e = O.current, t = k.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => A(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(p, {
		label: U("manage:reviewToolbar.filters"),
		topLabel: U("manage:reviewToolbar.processingStatus"),
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: k,
		panes: /* @__PURE__ */ (0, $.jsx)("span", {
			ref: D,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ (0, $.jsxs)("div", {
			ref: O,
			role: "group",
			"aria-label": U("manage:reviewToolbar.reviewStatus"),
			"data-entity-states": "",
			onPointerLeave: de.leave,
			children: [y.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: f,
				"aria-pressed": m === e,
				onPointerEnter: de.hover,
				onClick: () => {
					e !== m && ae(e);
				},
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `review.queue.${e}`,
						children: b[e]
					}),
					" ",
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: h ? h[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: ue ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			te && _.length ? /* @__PURE__ */ (0, $.jsxs)(x, {
				"aria-label": U("manage:reviewToolbar.filterField"),
				size: "sm",
				prefix: /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: U("manage:reviewToolbar.field")
				}),
				selectedKey: oe || "*",
				isDisabled: f,
				onSelectionChange: (e) => {
					e !== null && se(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(S, {
					id: "*",
					children: U("manage:shared.all")
				}), _.map((e) => /* @__PURE__ */ (0, $.jsx)(S, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(x, {
				"aria-label": U("manage:reviewToolbar.groupBy"),
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(S, {
					id: e,
					children: t
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ (0, $.jsxs)(x, {
				"aria-label": U(n === "field" ? "manage:reviewToolbar.filterFieldGroup" : "manage:reviewToolbar.filterGroup"),
				size: "sm",
				prefix: U("manage:reviewToolbar.group"),
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(S, {
					id: "*",
					children: U("manage:shared.all")
				}), a.map((e) => /* @__PURE__ */ (0, $.jsx)(S, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			g ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: I,
				"aria-pressed": C,
				disabled: f,
				onClick: () => {
					let e = new Set(u);
					for (let t of c) C ? e.delete(t) : e.add(t);
					d(e);
				},
				children: U(C ? "manage:reviewToolbar.clearSelection" : o ? "manage:reviewToolbar.selectGroup" : "manage:reviewToolbar.selectPage")
			}),
			g || l.length <= c.length || w ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: f,
				onClick: () => d(/* @__PURE__ */ new Set([...u, ...l])),
				children: U("manage:reviewToolbar.selectAll", { count: l.length })
			})
		] }) : null
	}), /* @__PURE__ */ (0, $.jsxs)(ce, {
		label: U("manage:reviewToolbar.selectedDock"),
		visible: !g && u.size > 0,
		count: U("manage:reviewToolbar.selectedCount", { count: u.size }),
		actions: ie,
		leading: E && m !== "ignored" ? /* @__PURE__ */ (0, $.jsxs)(x, {
			"aria-label": U("manage:reviewToolbar.sourceForAll"),
			size: "sm",
			selectedKey: "",
			isDisabled: f || !T.length,
			onSelectionChange: (e) => {
				e !== null && e !== "" && re(String(e));
			},
			children: [/* @__PURE__ */ (0, $.jsx)(S, {
				id: "",
				children: le
			}), T.map((e) => /* @__PURE__ */ (0, $.jsx)(S, {
				id: e,
				children: e
			}, e))]
		}) : null,
		children: [/* @__PURE__ */ (0, $.jsx)(r, {
			variant: "ghost",
			size: "small",
			disabled: f,
			onClick: be,
			children: U("manage:reviewToolbar.deselect")
		}), ne ? /* @__PURE__ */ (0, $.jsx)("p", {
			role: "status",
			className: "w-full text-body-2-regular text-text-secondary",
			children: ne
		}) : null]
	})] });
}
// src/react/boardui/components/base/radio/radio.tsx
var _t = {
	sm: {
		dot: "size-3.5",
		inner: "size-[5px]",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_0.875px_var(--color-accent-500),inset_0px_1.75px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border-[0.875px]",
		gap: "gap-2",
		label: "text-body-2-medium"
	},
	md: {
		dot: "size-4",
		inner: "size-1.5",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_1px_var(--color-accent-500),inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border",
		gap: "gap-2",
		label: "text-body-medium"
	}
};
function vt({ selected: e = !1, size: t = "sm", focusVisible: n = !1, className: r }) {
	let i = _t[t];
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"aria-hidden": !0,
		className: P("relative flex shrink-0 items-center justify-center rounded-full", i.dot, n && "ring-2 ring-border-focus-ring ring-offset-2", r),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", { className: P("absolute inset-0 rounded-full border-border-checkbox-default bg-background-primary-default shadow-xs", "transition-opacity duration-200 ease", i.border, e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: P("absolute inset-0 rounded-full", "transition-opacity duration-200 ease", i.selected, !e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: P("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-control-indicator-background", "transition-[scale,opacity] duration-200 ease", i.inner, e ? "scale-100 opacity-100" : "scale-0 opacity-0") })
		]
	});
}
function yt({ className: e, children: n, ref: r, ...i }) {
	return /* @__PURE__ */ (0, $.jsx)(t, {
		ref: r,
		...i,
		className: (t) => P("flex flex-col gap-2", typeof e == "function" ? e(t) : e),
		children: n
	});
}
// src/react/boardui/components/base/radio/radio-card.tsx
function bt({ className: e, title: t, description: r, ref: i, ...a }) {
	return /* @__PURE__ */ (0, $.jsx)(n, {
		ref: i,
		...a,
		className: (t) => P("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: t
			}), r != null && /* @__PURE__ */ (0, $.jsx)("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: r
			})]
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ (0, $.jsx)(vt, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// src/react/review/candidate-form.tsx
var xt = {
	title: U("manage:shared.title"),
	original_title: U("manage:reviewCandidate.originalTitle"),
	runtime: U("manage:reviewCandidate.sourceRuntime"),
	director: U("manage:reviewCandidate.director"),
	label: "Label",
	poster_url: U("manage:reviewCandidate.poster"),
	cover_url: U("manage:shared.cover"),
	screenshot_urls: U("manage:reviewCandidate.screenshots"),
	trailer_url: U("manage:reviewCandidate.trailer")
}, St = "reviewgenretags";
function Ct({ tags: e }) {
	return e.length ? /* @__PURE__ */ (0, $.jsx)("datalist", {
		id: St,
		children: e.map((e) => /* @__PURE__ */ (0, $.jsx)("option", { value: e }, e))
	}) : null;
}
function wt({ candidate: e, row: t }) {
	let [n, i] = (0, G.useState)(!1), a = (0, G.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, $.jsxs)(r, {
			variant: "secondary",
			size: "small",
			leadingIcon: c,
			"aria-expanded": n,
			"aria-controls": a,
			"aria-label": U(n ? "manage:reviewCandidate.collapseEvidence" : "manage:reviewCandidate.expandEvidence", { source: e.source || U("manage:reviewCandidate.thisSource") }),
			onClick: () => i(!n),
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": "review.card.source_evidence",
				children: U("manage:reviewCandidate.sourceEvidence")
			}), ` · ${o.length}`]
		}), /* @__PURE__ */ (0, $.jsx)(l, {
			id: a,
			open: n,
			children: /* @__PURE__ */ (0, $.jsx)("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: o.map(([n, r]) => /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ (0, $.jsx)("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: xt[n] || n
						}),
						/* @__PURE__ */ (0, $.jsx)("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ (0, $.jsx)(nt, {
								value: M(r, "display_value"),
								reference: n === t.field && t.current_value ? t.current_value : M(t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n], "display_value")
							})
						}),
						We(r.warnings, r.warning_codes, r.warning_params).map((e) => /* @__PURE__ */ (0, $.jsx)("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function Tt(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || U("manage:reviewQueue.unspecifiedSource")}${e.official ? ` · ${U("manage:reviewCandidate.officialFirst")}` : ""}${t ? ` · ID ${t}` : ""}`;
}
function Et({ candidate: e, reference: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ (0, $.jsx)(nt, {
				value: e.display_value || "",
				reference: t
			})
		}), We(e.warnings, e.warning_codes, e.warning_params).map((e) => /* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function Dt({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-medium text-text-primary",
				children: Tt(a[0])
			}), /* @__PURE__ */ (0, $.jsx)(Et, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ (0, $.jsx)(wt, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ (0, $.jsx)(yt, {
		"aria-label": U("manage:reviewCandidate.sourceFor", { field: t || U("manage:scanFetch.slowWhatMetadata") }),
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, $.jsx)(bt, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ (0, $.jsx)("span", {
						title: Tt(t),
						children: Tt(t)
					}),
					description: /* @__PURE__ */ (0, $.jsx)(Et, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ (0, $.jsx)(wt, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function Ot({ genre: e, tags: t, locked: n, toast: i }) {
	let [a, o] = (0, G.useState)(""), [s, c] = (0, G.useState)(""), l = qe({
		mutationFn: (t) => L(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (i(n ? U("manage:reviewCandidate.mapped", {
				genre: e,
				tag: n
			}) : U("manage:reviewCandidate.markedNonContent", { genre: e })), await R()) : c(t.error || U("manage:reviewCandidate.mapRejected"));
		},
		onError: (e) => c(F(e))
	}), u = () => {
		let e = a.trim();
		e ? (c(""), l.mutate(e)) : c(U("manage:reviewCandidate.tagRequired"));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)(T, {
				"aria-label": U("manage:reviewCandidate.tagFor", { genre: e }),
				value: a,
				onChange: o,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					size: "small",
					list: t.length ? St : void 0,
					autoComplete: "off",
					placeholder: U("manage:reviewCandidate.tagPlaceholder"),
					onKeyDown: (e) => {
						e.key !== "Enter" || he(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: U("manage:reviewCandidate.map")
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: U("manage:reviewCandidate.notContent")
			}),
			s ? /* @__PURE__ */ (0, $.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function kt({ row: e, tags: t, locked: n, toast: r }) {
	let i = Ae(e);
	return i.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		role: "group",
		"aria-label": U("manage:reviewCandidate.unmappedGenres"),
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ (0, $.jsx)("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: U("manage:reviewCandidate.unmappedGenresCount", { count: i.length })
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ (0, $.jsx)("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ (0, $.jsx)(Ot, {
					genre: e,
					tags: t,
					locked: n,
					toast: r
				})
			}, e))
		})]
	}) : null;
}
// src/react/review/review-evidence.tsx
var At = (e = "") => /^https?:\/\//i.test(e) ? e : "", jt = (e = "") => At(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function Mt({ url: e }) {
	let t = jt(e || "");
	return /* @__PURE__ */ (0, $.jsx)(Nt, { source: t }, t);
}
function Nt({ source: e }) {
	let [t, n] = (0, G.useState)("idle");
	return (0, G.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ (0, $.jsx)("span", {
			role: "status",
			"aria-busy": "true",
			"aria-label": U("manage:reviewEvidence.loadingImage"),
			"data-skeleton": "",
			className: "absolute inset-0 skeleton-sheen"
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e,
			alt: U("manage:reviewEvidence.candidateImageAlt"),
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: U("manage:reviewEvidence.imageNotFound")
			}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? U("manage:reviewEvidence.retryImage") : void 0,
				onClick: () => n("loading"),
				children: U(t === "failed" ? "manage:shared.retryNow" : "manage:reviewEvidence.viewImage")
			})]
		}) : /* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-2-regular text-text-secondary",
			children: U("manage:reviewEvidence.imageNotFound")
		})]
	});
}
function Pt({ asset: t, openItem: n }) {
	let i = t.name || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("button", {
			type: "button",
			onClick: () => n(t.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-media-placeholder outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [t.preview_url ? /* @__PURE__ */ (0, $.jsx)("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: U("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: U("manage:reviewEvidence.openOriginalNamed", { name: i }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ (0, $.jsx)("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: t.code || i || U("manage:reviewEvidence.originalVideo")
			}), /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: ie,
				onClick: () => n(t.id),
				children: U("manage:reviewEvidence.openOriginal")
			})]
		})]
	});
}
function Ft({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			"aria-label": U("manage:reviewEvidence.openCreator", { name: t }),
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${h}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ (0, $.jsx)("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: U("manage:reviewEvidence.videoCount", { count: n })
			}) : null]
		})]
	});
}
function It({ row: e, openItem: t, openEntity: n, onReveal: a, revealing: o, note: s }) {
	let c = At(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: U("manage:reviewEvidence.pendingPerson", { name: e.babepedia_name || U("manage:reviewEvidence.unlabeled") })
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, $.jsx)(i, {
					variant: "secondary",
					size: "small",
					trailingIcon: E,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: U("manage:reviewEvidence.sourceProfile")
				}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: U("manage:reviewEvidence.viewAllVideos", { count: u })
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Mt, { url: e.preview_url }),
			l.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: U("manage:reviewEvidence.localSamples")
			}), /* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(r, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "ghost",
						size: "small",
						"aria-label": U("manage:reviewEvidence.revealNamed", { name: e.name }),
						...j(o === e.id),
						onClick: () => a(e.id),
						children: U("manage:reviewEvidence.fileLocation")
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: U("manage:reviewEvidence.noLocalSamples")
			}),
			s ? /* @__PURE__ */ (0, $.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Lt({ assets: t, picked: n, onPicked: r, locked: i }) {
	let [a, s] = (0, G.useState)(null), c = new Set(n), l = (e, n) => {
		if (i) return;
		let o = new Set(c);
		if (n && a !== null) {
			let [n, r] = [Math.min(a, e), Math.max(a, e)];
			for (let e = n; e <= r; e++) o.add(t[e].id);
		} else {
			let n = t[e].id;
			o.has(n) ? o.delete(n) : o.add(n);
		}
		s(e), r(t.filter((e) => o.has(e.id)).map((e) => e.id));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(C, {
			prefix: /* @__PURE__ */ (0, $.jsx)("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: U("manage:reviewEvidence.selectedOfTotal", {
					count: c.size,
					total: t.length
				})
			}),
			actions: [{
				label: U("manage:shared.selectAll"),
				disabled: i,
				onPress: () => r(t.map((e) => e.id))
			}, {
				label: U("manage:reviewEvidence.clearSelection"),
				disabled: i,
				onPress: () => r([])
			}]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: "review-asset-grid gap-1.5",
			children: t.map((t, n) => {
				let r = c.has(t.id);
				return /* @__PURE__ */ (0, $.jsxs)("button", {
					type: "button",
					"aria-pressed": r,
					title: t.name,
					onClick: (e) => l(n, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-media-placeholder outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${r ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ (0, $.jsx)("img", {
							src: `/poster?id=${t.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, $.jsx)("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ (0, $.jsx)(o, {
								size: "sm",
								state: {
									isSelected: r,
									isIndeterminate: !1,
									isFocusVisible: !1,
									isDisabled: i,
									isHovered: !1
								}
							})
						}),
						/* @__PURE__ */ (0, $.jsx)(e, { children: U(r ? "manage:reviewEvidence.assetSelected" : "manage:reviewEvidence.assetUnselected", { name: t.name || t.id }) })
					]
				}, t.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var Rt = pe({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), zt = "flex min-h-6 min-w-0 items-center", Bt = 2, Vt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function Ht(e) {
	let { category: t, row: n, choice: i, onChoice: o, selected: c, onSelect: l, locked: u, busy: d, problem: ne, genreTags: p, onDecide: m, handlers: h, queueView: g = "pending" } = e, _ = (0, G.useRef)(!1), se = Ye(), v = t === "metadata_fields", y = ee[t] || "", b = String(n.creator || "").trim(), x = !!y && !!b, S = Ve(t, n), C = B(t, n), ce = V(t, n), w = Re(n), T = Be(n), E = fe(t, n), O = n.comparison_assets || [], k = n.preview_assets || [], ue = oe[n.decision || ""], pe = O.length > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [O.slice(0, Bt).map((e) => /* @__PURE__ */ (0, $.jsx)(Pt, {
			asset: e,
			openItem: h.openItem
		}, e.id)), O.length > Bt ? /* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: U("manage:reviewCard.moreComparison", { count: O.length - Bt })
		}) : null]
	}) : x ? /* @__PURE__ */ (0, $.jsx)(Ft, {
		kind: y,
		name: b,
		works: Number(n.video_count || n.videos || 0),
		openEntity: h.openEntity,
		avatar: A(b, n.entity_id ? {
			id: n.entity_id,
			has_image: !!n.has_image,
			image_version: n.image_version,
			avatar_focus: n.avatar_focus
		} : null, null, y)
	}) : n.asset_id ? /* @__PURE__ */ (0, $.jsx)(Pt, {
		openItem: h.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, M = v ? /* @__PURE__ */ (0, $.jsx)(Dt, {
		row: n,
		fieldName: C,
		value: i.candidateKey,
		onChange: (e) => o({
			...i,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? k.length ? /* @__PURE__ */ (0, $.jsx)(Lt, {
		assets: k,
		picked: i.assets,
		locked: u,
		onPicked: (e) => o({
			...i,
			assets: e
		})
	}) : /* @__PURE__ */ (0, $.jsx)(f, {
		size: "compact",
		icon: te,
		title: U("manage:reviewCard.noFramesTitle"),
		children: n.video_count ? U("manage:reviewCard.noFramesBody", { count: n.video_count }) : U("manage:reviewCard.noFramesBodyUncounted")
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ (0, $.jsx)(It, {
		row: n,
		openItem: h.openItem,
		openEntity: h.openEntity,
		onReveal: h.onReveal,
		revealing: h.revealing,
		note: h.revealNote
	}) : /* @__PURE__ */ (0, $.jsx)(Mt, { url: n.preview_url }), me = x ? pe : C ? /* @__PURE__ */ (0, $.jsxs)("h4", {
		className: P(zt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			title: C,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ (0, $.jsx)(s, {
				variant: "caption",
				color: "neutral",
				children: C
			})
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			title: ce,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: ce
		})]
	}) : /* @__PURE__ */ (0, $.jsx)("h4", {
		className: zt,
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			title: S,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: S
		})
	}), he = W(), N = [];
	if (O.length <= 1) {
		if (x) N.push({
			id: "entity",
			label: b,
			icon: le,
			run: () => h.openEntity(y, b)
		});
		else if (n.asset_id) {
			let e = n.asset_id;
			N.push({
				id: "open",
				label: U("catalog:mediaActions.open"),
				icon: ie,
				run: () => h.openItem(e)
			});
		}
	}
	u || (N.push(ze(c, () => l(!1, !c))), g !== "ignored" && N.push({
		id: "approve",
		label: U("manage:reviewDecision.approve"),
		icon: H,
		disabled: d || !E,
		run: () => m("approved")
	}), N.push(g === "pending" ? {
		id: "later",
		label: U("manage:reviewDecision.later"),
		icon: Ce,
		disabled: d,
		run: () => m("skipped")
	} : {
		id: "restore",
		label: U("manage:reviewDecision.moveToPending"),
		icon: de,
		disabled: d,
		run: () => m("restore")
	}), g !== "ignored" && N.push({
		id: "ignore",
		label: U("manage:shared.ignore"),
		icon: D,
		disabled: d,
		run: () => m("rejected")
	}));
	let ge = {
		key: n.item_key,
		operations: N
	};
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": S,
		"data-review-key": n.item_key,
		"data-rectangle-key": n.item_key,
		tabIndex: -1,
		className: P(Rt, Vt(t)),
		onContextMenu: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || he.onContextMenu(e, ge);
		},
		onKeyDown: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || he.onKeyDown(e, ge);
		},
		children: [
			he.menu,
			/* @__PURE__ */ (0, $.jsxs)("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ (0, $.jsx)("span", {
						className: P(zt, "shrink-0"),
						onPointerDownCapture: (e) => {
							_.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							_.current = e.shiftKey;
						},
						children: /* @__PURE__ */ (0, $.jsx)(a, {
							isSelected: c,
							"aria-label": U("manage:reviewCard.selectItem", { title: S }),
							onChange: (e) => l(_.current, e)
						})
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "min-w-0 flex-1",
						children: me
					}),
					ue ? /* @__PURE__ */ (0, $.jsx)(s, {
						variant: "caption",
						color: "neutral",
						children: ue
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: se,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: U("manage:reviewCard.sourceSpelling", { name: n.source_name })
						}) : null,
						!x && (n.board || n.assets) ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: U("manage:reviewCard.comparisonFiles", { count: Number(n.video_count || n.assets || 0) })
						}) : null,
						!x && pe ? pe : null,
						v && (w || n.current_value !== void 0) ? /* @__PURE__ */ (0, $.jsxs)("div", {
							role: "region",
							"aria-label": U("manage:reviewCard.currentInfo"),
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: U("manage:reviewCard.currentValue")
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ (0, $.jsx)(s, {
										variant: "caption",
										color: "neutral",
										children: U("manage:reviewCard.manuallyConfirmed")
									}) : null]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? w : n.current_value ? /* @__PURE__ */ (0, $.jsx)(nt, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === i.candidateKey) || n.candidates?.[0])?.display_value
									}) : U("manage:reviewCard.noMetadata")
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: U(n.asset_path ? "manage:reviewCard.matchingFiles" : "manage:reviewCard.sameCodeFiles", { count: Number(n.videos) })
								})
							]
						}) : null,
						T.length || t === "creator_tags" ? /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: T.length ? T.map((e) => /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ (0, $.jsx)("small", {
								className: "text-body-2-regular text-text-secondary",
								children: U("manage:reviewCard.noPendingTags")
							})
						}) : null,
						v ? /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, $.jsxs)("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ (0, $.jsx)("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: U("manage:reviewCard.candidateSources")
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? U("manage:reviewCard.comparedToCurrent") : U("manage:reviewCard.sourceDifferences")
							}) : null]
						}) : null,
						M,
						/* @__PURE__ */ (0, $.jsx)(kt, {
							row: n,
							tags: p,
							locked: u,
							toast: h.toast
						}),
						!v && w ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: w
						}) : null
					]
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("footer", {
				className: P(re.stack, "shrink-0"),
				children: [
					g === "ignored" ? null : /* @__PURE__ */ (0, $.jsx)(ae, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...j(d),
						onClick: () => m("rejected"),
						children: U("manage:shared.ignore")
					}),
					g === "pending" ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...j(d),
						onClick: () => m("skipped"),
						children: U("manage:reviewDecision.later")
					}) : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: g === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...j(d),
						onClick: () => m("restore"),
						children: U("manage:reviewDecision.moveToPending")
					}),
					g === "ignored" ? null : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "primary",
						size: "small",
						disabled: u || !E,
						...j(d),
						title: E ? void 0 : U("manage:reviewCard.cannotApproveHint"),
						onClick: () => m("approved"),
						children: U(E ? "manage:reviewDecision.approve" : "manage:reviewCard.cannotApprove")
					}),
					ne ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: ne
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Ut = "flex cursor-pointer items-center justify-between gap-2";
function Wt(e) {
	let t = Je("review").keys.filter(Te), [n, i] = (0, G.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, G.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => i(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: a, openItem: o, openEntity: s, revealSource: c, toast: l, readOnly: ee, readOnlyMessage: te, writerUrl: re } = e, [p, ie] = (0, G.useState)(Te(e.category) ? e.category : u), [m, h] = (0, G.useState)(() => Ie(e.queue)), [ae, oe] = (0, G.useState)("candidates"), [b, x] = (0, G.useState)(""), [S, C] = (0, G.useState)(""), [ce, T] = (0, G.useState)(1), [E, le] = (0, G.useState)(20), [D, O] = (0, G.useState)(/* @__PURE__ */ new Set()), k = Xe(() => O(/* @__PURE__ */ new Set()));
	(0, G.useEffect)(() => {
		D.size && ye();
	}, [D]);
	let [ue, A] = (0, G.useState)(/* @__PURE__ */ new Map()), [de, j] = (0, G.useState)(/* @__PURE__ */ new Map()), [pe, M] = (0, G.useState)(""), me = (0, G.useRef)(null), [he, P] = (0, G.useState)(0), [be, Ce] = (0, G.useState)(""), Ee = (0, G.useRef)(!0);
	(0, G.useEffect)(() => () => {
		Ee.current = !1;
	}, []);
	let I = Ze({
		queryKey: se,
		queryFn: ({ signal: e }) => xe(e)
	}), De = I.data || {
		sections: {},
		counts: {},
		queues: {
			later: {
				sections: {},
				counts: {}
			},
			ignored: {
				sections: {},
				counts: {}
			}
		}
	}, Ae = Fe(De, m), Me = I.data ? Object.fromEntries(y.map((e) => [e, _.reduce((t, n) => t + Number(Fe(De, e).counts[n] || 0), 0)])) : void 0, L = Ae.sections[p] || [], R = p === "metadata_fields", z = ee;
	(0, G.useEffect)(() => {
		let e = new Set(L.map((e) => e.item_key));
		O((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), A((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), j((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [L]);
	let Ne = (0, G.useMemo)(() => R ? we(L, "field") : [], [L, R]), Re = Ne.some((e) => e.key === S) ? S : "", B = (0, G.useMemo)(() => R ? Se(L, "field", Re) : L, [
		L,
		R,
		Re
	]), ze = (0, G.useMemo)(() => Pe(B, R), [B, R]), V = ze.some(([e]) => e === ae) ? ae : "candidates", Be = (0, G.useMemo)(() => we(B, V), [B, V]), Ve = Be.some((e) => e.key === b) ? b : "", H = (0, G.useMemo)(() => Se(B, V, Ve), [
		B,
		V,
		Ve
	]), Ue = (0, G.useMemo)(() => Le(H, ce, E), [
		H,
		ce,
		E
	]), We = Ue.rows.map((e) => e.item_key), Ye = new Set(We), $e = Be.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ye.has(e.item_key))
	})).filter((e) => e.rows.length), W = (0, G.useRef)(null), tt = (0, G.useRef)(null), nt = Qe(k && !z ? (e, t) => O((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])) : void 0, "[data-review-key]", ".review-grid");
	(0, G.useLayoutEffect)(() => {
		let e = tt.current;
		if (!e || e.card.isConnected || (tt.current = null, document.activeElement !== document.body)) return;
		let t = [...W.current?.querySelectorAll("[data-review-key]") ?? []];
		(e.following.map((e) => t.find((t) => t.dataset.reviewKey === e)).find(Boolean) ?? t[0] ?? W.current)?.focus();
	});
	let K = (e) => ue.get(e.item_key) || ve(e), rt = (0, G.useMemo)(() => L.filter((e) => D.has(e.item_key)), [L, D]), it = (e) => {
		let t = new Set(e);
		O((e) => new Set([...e].filter((e) => !t.has(e)))), A((e) => new Map([...e].filter(([e]) => !t.has(e)))), j((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, q = (e, t) => j((n) => new Map(n).set(e, t)), J = () => {
		tt.current = null, oe("candidates"), x(""), C(""), T(1), O(/* @__PURE__ */ new Set()), A(/* @__PURE__ */ new Map()), j(/* @__PURE__ */ new Map()), M(""), me.current = null;
	}, at = (e) => {
		ie(e), J(), a({
			category: e === "metadata_fields" ? "" : e,
			queue: m === "pending" ? "" : m
		});
	}, ot = (e) => {
		h(e), J(), a({
			category: p === "metadata_fields" ? "" : p,
			queue: e === "pending" ? "" : e
		});
	}, Y = qe({
		mutationFn: ({ row: e, status: t, category: n }) => Ke(ge(n, N(n, e), t, K(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			if (!e.ok) {
				q(t.item_key, e.error || U("manage:reviewPage.decisionRejected"));
				return;
			}
			let i = document.activeElement?.closest("[data-review-key]");
			if (i?.dataset.reviewKey === t.item_key && W.current?.contains(i)) {
				let e = [...W.current.querySelectorAll("[data-review-key]")], t = e.indexOf(i), n = [...e.slice(t + 1), ...e.slice(0, t).reverse()].map((e) => e.dataset.reviewKey);
				tt.current = {
					card: i,
					following: n
				};
			}
			Ge(r, [t.item_key], n), it([t.item_key]), l(_e(n));
		},
		onError: (e, { row: t }) => q(t.item_key, F(e))
	}), X = qe({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!Ee.current) break;
				M(U("manage:reviewPage.processingProgress", {
					current: a,
					total: n.length
				}));
				try {
					let n = await Ke(ge(t, N(t, o), e, K(o)));
					if (!n.ok) throw Error(n.error || U("manage:reviewPage.itemNotAccepted"));
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, F(e)]);
				}
			}
			return {
				status: e,
				category: t,
				done: r,
				failures: i
			};
		},
		onSuccess: ({ status: e, category: t, done: n, failures: r }) => {
			Ge(t, n, e), it(n), r.forEach(([e, t]) => q(e, t)), M("");
		},
		onError: (e) => {
			M(F(e));
		}
	}), Z = {
		receipt: l,
		failure: (e) => M(F(e))
	}, st = {
		ignored: "rejected",
		later: "skipped"
	}, Q = (e, t) => {
		let n = {
			done: [],
			failures: []
		};
		return {
			key: e,
			label: t,
			reversal: e === "approved" ? "irreversible" : "undo",
			danger: !1,
			confirm: (n) => {
				if (e === "approved" && R && n.some((e) => !K(e).candidateKey)) throw Error(U("manage:reviewPage.chooseSourceFirst"));
				return M(""), {
					title: t,
					body: U(`manage:reviewPage.confirm.${e}`, { count: n.length })
				};
			},
			run: async (t) => {
				n = await X.mutateAsync({
					status: e,
					category: p,
					rows: [...t]
				});
				let { done: r } = n;
				if (e === "approved") return;
				let i = p, a = t.filter((e) => r.includes(e.item_key)), o = e === "restore" ? st[m] : "restore";
				return async () => {
					for (let e of a) await Ke(ge(i, N(i, e), o, K(e)));
					await je.invalidateQueries({ queryKey: se });
				};
			},
			receipt: () => U({
				approved: "manage:reviewPage.approvedCount",
				rejected: "manage:reviewPage.ignoredCount",
				skipped: "manage:reviewPage.laterCount",
				restore: "manage:reviewPage.pendingCount"
			}[e], { count: n.done.length }) + (n.failures.length ? U("manage:reviewPage.notCompletedSuffix", { count: n.failures.length }) : "")
		};
	}, ct = rt.every((e) => fe(p, e)), lt = [
		...m === "ignored" ? [] : [Q("rejected", U("manage:reviewToolbar.ignoreSelected"))],
		m === "pending" ? Q("skipped", U("manage:reviewToolbar.laterSelected")) : Q("restore", U("manage:reviewToolbar.restoreSelected")),
		...m === "ignored" ? [] : [Q("approved", U("manage:reviewToolbar.approveSelected"))]
	].map((e) => ({
		action: e,
		items: rt,
		host: Z,
		variant: e.key === "approved" || m === "ignored" && e.key === "restore" ? "primary" : void 0,
		disabled: X.isPending || Y.isPending || e.key === "approved" && !ct
	})), ut = (e) => {
		A((t) => {
			let n = new Map(t);
			for (let t of rt) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...K(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), M(U("manage:reviewPage.sourceChosen", { source: e }));
	}, dt = async (e) => {
		if (he) return;
		P(e), Ce("");
		let t = await c(e);
		Ee.current && (P(0), Ce(t));
	}, ft = ke(De.mirror, te), pt = De.genre_tags || [], mt = {
		openItem: o,
		openEntity: s,
		onReveal: dt,
		revealing: he,
		revealNote: be,
		toast: l
	};
	return /* @__PURE__ */ (0, $.jsx)(et, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			z ? /* @__PURE__ */ (0, $.jsx)(g, {
				tone: "warning",
				title: U("manage:reviewPage.readOnly"),
				extra: re ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ (0, $.jsx)(ne, {
						href: re,
						children: U("manage:reviewPage.goToPrimary")
					})
				}) : void 0,
				children: ft
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(Ct, { tags: pt }),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ (0, $.jsx)("h2", {
						id: "reviewcategories",
						children: U("manage:reviewPage.categories")
					}), /* @__PURE__ */ (0, $.jsx)(w, {
						group: "review",
						label: U("manage:reviewPage.categories"),
						value: p,
						onChange: at,
						orientation: n ? "horizontal" : "vertical",
						panelPrefix: "review",
						sectionItems: !0,
						className: "",
						itemClassName: Ut,
						disabled: Y.isPending || X.isPending,
						tabs: _.map((e) => {
							let t = Number(Ae.counts[e] || 0);
							return {
								value: e,
								label: v[e],
								badge: t ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: t.toLocaleString()
								}) : null
							};
						})
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: W,
					role: "tabpanel",
					id: `review-panel-${p}`,
					"aria-labelledby": `review-tab-${p}`,
					tabIndex: -1,
					...nt,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, $.jsx)(gt, {
							queueView: m,
							queueCounts: Me,
							onQueueChange: ot,
							locked: z,
							fields: Ne,
							fieldFilter: Re,
							onFieldFilter: (e) => {
								C(e), x(""), T(1);
							},
							groupOptions: ze,
							groupBy: V,
							onGroupBy: (e) => {
								oe(e), x(""), T(1);
							},
							groups: Be,
							filter: Ve,
							onFilter: (e) => {
								x(e), T(1);
							},
							pageKeys: We,
							allKeys: H.map((e) => e.item_key),
							selected: D,
							onSelected: O,
							selectedRows: rt,
							metadata: R,
							busy: X.isPending || Y.isPending,
							feedback: pe,
							onUnifySource: ut,
							actions: lt
						}),
						Ue.rows.length ? $e.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
							className: "flex flex-col gap-3",
							children: [$e.length > 1 || V !== "candidates" ? /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, $.jsx)("h3", {
									className: "text-body-medium text-text-primary",
									children: `${e.title} · ${e.rows.length}`
								}), z ? null : /* @__PURE__ */ (0, $.jsx)(r, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => D.has(e)), r = new Set(D);
										for (let e of t) n ? r.delete(e) : r.add(e);
										O(r);
									},
									children: e.rows.every((e) => D.has(e.item_key)) ? U("manage:reviewPage.clearGroup") : U("manage:reviewPage.selectGroup")
								})]
							}) : null, /* @__PURE__ */ (0, $.jsx)("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Ht, {
									category: p,
									row: e,
									queueView: m,
									choice: K(e),
									onChoice: (t) => A((n) => new Map(n).set(e.item_key, t)),
									selected: D.has(e.item_key),
									onSelect: (t, n) => O((r) => {
										let i = new Set(r);
										return me.current = He(i, We, me.current, e.item_key, t, n), i;
									}),
									locked: z,
									busy: X.isPending || Y.isPending && Y.variables?.row.item_key === e.item_key,
									problem: de.get(e.item_key) || "",
									genreTags: pt,
									onDecide: (t) => {
										Y.isPending || X.isPending || (j((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Y.mutate({
											row: e,
											status: t,
											category: p
										}));
									},
									handlers: mt
								}, e.item_key))
							})]
						}, e.key)) : I.isError && !I.data ? /* @__PURE__ */ (0, $.jsx)(g, {
							tone: "error",
							title: U("manage:reviewPage.queueLoadFailed"),
							action: /* @__PURE__ */ (0, $.jsx)(r, {
								variant: "secondary",
								size: "small",
								disabled: I.isFetching,
								onClick: () => void I.refetch(),
								children: U("manage:shared.retryNow")
							}),
							children: F(I.error)
						}) : /* @__PURE__ */ (0, $.jsx)(f, {
							icon: Oe,
							title: U({
								pending: "manage:reviewPage.emptyPending",
								later: "manage:reviewPage.emptyLater",
								ignored: "manage:reviewPage.emptyIgnored"
							}[m]),
							actions: _.some((e) => e !== p && Number(Ae.counts[e] || 0) > 0) ? /* @__PURE__ */ (0, $.jsx)(r, {
								size: "small",
								onClick: () => {
									let e = t.find((e) => e !== p && Number(Ae.counts[e] || 0) > 0);
									e && at(e);
								},
								children: U("manage:reviewPage.viewOtherCategories")
							}) : void 0,
							children: U(m === "pending" ? "manage:reviewPage.switchCategoryHint" : m === "later" ? "manage:reviewPage.laterKeptHint" : "manage:reviewPage.ignoredKeptHint")
						}),
						H.length ? /* @__PURE__ */ (0, $.jsx)(d, {
							label: U("manage:reviewPage.footerLabel"),
							total: H.length,
							pagination: {
								pageIndex: Ue.page - 1,
								pageSize: E
							},
							onChange: (e) => {
								T(e.pageIndex + 1), le(e.pageSize);
							}
						}) : null,
						R && m === "pending" ? /* @__PURE__ */ (0, $.jsx)(ht, {
							locked: z,
							openItem: o,
							toast: l
						}) : null
					]
				})]
			})
		]
	}) });
}
export { Wt as ReviewPage };

//# debugId=95a3f2ac-f8b2-419f-b4f7-f3dd2f100482