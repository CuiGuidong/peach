(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dfd6c3fa-7ef9-4ad2-8bfe-a07b0a468c47", e._sentryDebugIdIdentifier = "sentry-dbid-dfd6c3fa-7ef9-4ad2-8bfe-a07b0a468c47");
	} catch {}
})();
import { $ea3928288112382f$export$439d29a4e110a164 as e, $fe21c36db05242bb$export$a98f0dcb43a68a25 as t, $fe21c36db05242bb$export$d7b12c4107be0d61 as n, Button as r, ButtonLink as i, Checkbox as a, CheckboxGlyph as o, Chip as s, CollapseChevron as c, CollapseRegion as l, DEFAULT_CATEGORY as u, DataTable as d, DataTableFooter as ee, ENTITY_REVIEW_KINDS as te, Ea as f, EmptyState as ne, ExternalLink as re, FIELDSET_FOOT as p, FilterGlassRows as m, FilterSearch as h, Gg as g, InputBase as _, LEGACY_AVATAR_IMG as ie, LinkButton as v, Note as y, REVIEW_CATEGORIES as b, REVIEW_DECISION_LABELS as x, REVIEW_KEY as S, REVIEW_LABELS as C, REVIEW_QUEUES as w, REVIEW_QUEUE_LABELS as T, Select as E, SelectItem as D, SelectionActions as O, SelectionDock as ae, SortableBoardTabs as oe, TextField as k, Wt as A, Xf as j, Yt as se, __toESM as ce, apiGet as M, apiSend as le, avatarInner as N, b1 as ue, busyProps as P, canApprove as de, cardClass as fe, codedText as F, commonReviewSources as I, composingKey as pe, currentReviewRow as me, cx as L, decisionPayload as he, decisionReceipt as ge, defaultChoice as _e, enterPageSelection as ve, errorMessage as R, exitPageSelection as ye, fetchReview as be, filterReviewRows as xe, gB as z, groupReviewRows as Se, isReviewCategory as Ce, joinList as we, l7 as Te, localTime as Ee, m7 as De, mirrorText as Oe, pendingGenres as B, queryClient as ke, quoted as V, recordGenre as H, reloadReview as Ae, require_jsx_runtime as je, require_react as Me, reviewGroupingOptions as Ne, reviewQueueData as Pe, reviewQueueOf as Fe, reviewWindow as Ie, rowEvidence as Le, rowFieldName as Re, rowSelectionOperation as U, rowSubject as ze, rowTags as W, rowTitle as Be, s7 as Ve, selectReviewRange as He, serverLabel as G, serverLabelList as Ue, settleReviewRows as We, submitDecision as Ge, t as K, useMutation as Ke, useNavigationOrder as qe, useOverlayScrollbar as Je, usePageSelection as Ye, useQuery as Xe, useRectangleSelection as Ze, useViewGlide as Qe, useWorkContextMenu as $e } from "./peach-app.js";
import { Page as et } from "./peach-app.page-QAncjzM1.js";
import { ComparisonText as q } from "./peach-app.comparison-text-DmxgbX8f.js";
// src/react/review/auto-landings.ts
var J = /* @__PURE__ */ ce(Me(), 1), tt = "/api/review/auto-landings", nt = "/api/review/auto-landings/revert", Y = ["review", "auto-landings"], X = (e) => G(e.field_code ?? "", e.field), rt = (e) => G(e.label_code ?? "", e.label), it = (e) => M(tt, e), at = (e) => M(`${tt}?items=${encodeURIComponent(e.join("\n"))}`), ot = (e, t) => le(nt, {
	items: e,
	token: t
}), st = (e) => e.at === null ? "" : Ee((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), Z = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : K("manage:autoLandings.unknownVideo")), Q = (e) => e ? V(e) : K("manage:autoLandings.emptyValue"), ct = (e) => e.tags.length ? we(e.tags) : e.value, lt = (e) => e.tags.length ? K("manage:autoLandings.existingTagsKept") : K("manage:autoLandings.previousValue", { value: e.previous.length ? we(e.previous.map(Q)) : K("manage:autoLandings.emptyValue") });
function ut(e) {
	return [
		...e.restores.map((e) => K("manage:autoLandings.previewRestore", {
			video: Z(e),
			field: X(e),
			current: Q(e.current),
			previous: Q(e.previous)
		})),
		...e.tags.map((e) => K("manage:autoLandings.previewRemoveTag", {
			video: Z(e),
			tag: e.tag
		})),
		...e.changed.map((e) => e.gone ? K("manage:autoLandings.previewGone", {
			video: Z(e),
			field: X(e)
		}) : K("manage:autoLandings.previewEdited", {
			video: Z(e),
			field: X(e)
		}))
	];
}
function dt(e) {
	let t = [e.restores.length ? K("manage:autoLandings.previewRestoreCount", { count: e.restores.length }) : "", e.tags.length ? K("manage:autoLandings.previewRemoveTags", { count: e.tags.length }) : ""].filter(Boolean);
	return [
		t.length ? K("manage:autoLandings.previewRevert", {
			count: e.decisions,
			details: t.join(K("shell:format.clauseSeparator"))
		}) : K("manage:autoLandings.previewRevertNothing", { count: e.decisions }),
		e.changed.length ? K("manage:autoLandings.previewUnchanged", { count: e.changed.length }) : "",
		K("manage:autoLandings.revertBackupNote")
	].filter(Boolean).join(K("shell:format.sentenceGap"));
}
function ft(e) {
	let t = [e.restored ? K("manage:autoLandings.resultRestoreCount", { count: e.restored }) : "", e.removed_tags ? K("manage:autoLandings.resultRemovedTags", { count: e.removed_tags }) : ""].filter(Boolean);
	return t.length ? K("manage:autoLandings.resultSummaryDetails", {
		count: e.decisions,
		details: t.join(K("shell:format.clauseSeparator"))
	}) : K("manage:autoLandings.resultSummary", { count: e.decisions });
}
// src/react/review/auto-landings-card.tsx
var $ = je(), pt = K("manage:autoLandings.description");
function mt({ item: t, openItem: n }) {
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
				children: K("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: K("manage:autoLandings.openVideo", { name: Z(t) }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsxs)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [Z(t), t.assets > 1 ? /* @__PURE__ */ (0, $.jsx)("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: K("manage:autoLandings.fileCount", { count: t.assets })
				}) : null]
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				title: t.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: t.gone ? K("manage:autoLandings.videoGone") : t.name
			})]
		})]
	});
}
function ht({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			title: ct(e),
			className: "truncate text-body-regular text-text-primary",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-text-secondary",
				children: K("shell:format.labelPrefix", { label: X(e) })
			}), ct(e)]
		}), /* @__PURE__ */ (0, $.jsx)("small", {
			title: lt(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: lt(e)
		})]
	});
}
function gt({ locked: e, openItem: t, toast: n }) {
	let [r, i] = (0, J.useState)([]), [a, o] = (0, J.useState)(null), s = Xe({
		queryKey: Y,
		queryFn: ({ signal: e }) => it(e)
	}), c = s.data?.items ?? [], l = (e) => {
		let t = null, n = null;
		return {
			key: "revert",
			label: K("manage:autoLandings.revertSelected", { count: e }),
			reversal: "irreversible",
			confirm: async (e) => (t = await at(e.map((e) => e.item_key)), {
				title: K("manage:autoLandings.revertTitle"),
				body: dt(t),
				items: ut(t),
				confirmLabel: K("manage:shared.revert")
			}),
			run: async () => {
				n = await ot(t.items, t.token), o(n), ke.invalidateQueries({ queryKey: S });
			},
			receipt: () => n ? ft(n) : ""
		};
	}, u = {
		receipt: n,
		failure: (e) => n(R(e))
	};
	if (!c.length && !a && !s.isError) return null;
	let ee = [
		{
			id: "work",
			label: K("manage:shared.video"),
			width: 300,
			min: 240,
			value: (e) => Z(e),
			render: (e) => /* @__PURE__ */ (0, $.jsx)(mt, {
				item: e,
				openItem: t
			})
		},
		{
			id: "written",
			label: K("manage:autoLandings.columnWritten"),
			width: 320,
			min: 220,
			value: (e) => `${X(e)}${ct(e)}`,
			filter: { values: X },
			render: (e) => /* @__PURE__ */ (0, $.jsx)(ht, { item: e })
		},
		{
			id: "rule",
			label: K("manage:autoLandings.columnRule"),
			width: 142,
			min: 100,
			value: rt,
			filter: { values: rt },
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				title: rt(e),
				className: "block truncate text-body-2-regular text-text-secondary",
				children: rt(e)
			})
		},
		{
			id: "at",
			label: K("manage:autoLandings.columnTime"),
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
				children: st(e) || K("manage:autoLandings.timeUnknown")
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [a ? /* @__PURE__ */ (0, $.jsxs)(y, {
			tone: "success",
			title: ft(a),
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular",
				children: K("manage:autoLandings.backupDone", { path: a.backup })
			}), a.changed.length ? /* @__PURE__ */ (0, $.jsxs)("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [K("manage:autoLandings.leftUnchanged", { count: a.changed.length }), a.changed.map((e) => e.gone ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-text-secondary",
					children: K("manage:autoLandings.deletedAsset", { id: e.asset_id })
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ (0, $.jsx)(v, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: Z(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, s.isError ? /* @__PURE__ */ (0, $.jsx)(y, {
			tone: "error",
			title: K("manage:autoLandings.loadFailed"),
			children: R(s.error)
		}) : c.length ? /* @__PURE__ */ (0, $.jsx)(d, {
			preferenceId: "auto-landings",
			label: K("manage:autoLandings.title"),
			items: c,
			columns: ee,
			title: K("manage:autoLandings.title"),
			titleId: "auto-landings-title",
			unit: K("manage:autoLandings.unit"),
			description: pt,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${Z(e)} ${X(e)}`,
			selected: r,
			onSelected: i,
			contextOperations: ({ asset_id: e, gone: n }) => e && !n ? [{
				id: "open",
				label: K("catalog:mediaActions.open"),
				icon: g,
				run: () => t(e)
			}] : [],
			actions: (t, n) => [{
				action: l(t.length),
				items: t,
				host: u,
				disabled: e,
				done: n,
				rowAction: {
					label: K("manage:shared.revert"),
					icon: ue
				}
			}]
		}) : null]
	});
}
// src/react/review/bulk-toolbar.tsx
function _t(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: i, groups: a, filter: o, onFilter: s, pageKeys: c, allKeys: l = c, selected: u, onSelected: d, selectedRows: ee, metadata: te, busy: f, feedback: ne, onUnifySource: re, actions: p, queueView: g = "pending", queueCounts: _, onQueueChange: ie, locked: v, fields: y, fieldFilter: b, onFieldFilter: x, search: S = "", onSearch: C } = e, O = c.length > 0 || !!C && !!S, oe = c.filter((e) => u.has(e)), k = oe.length > 0 && oe.length === c.length, A = l.length > c.length && l.every((e) => u.has(e)), j = I(ee), se = te && ee.some((e) => (e.candidates?.length || 0) > 1), ce = j.length ? K("manage:reviewToolbar.sourceForAll") : K("manage:reviewToolbar.noCommonSource"), M = (0, J.useRef)(null), le = (0, J.useRef)(null), N = (0, J.useRef)(null), [ue, P] = (0, J.useState)(!1), de = Qe(M, le, "[data-entity-state][aria-pressed=\"true\"]", g);
	return (0, J.useLayoutEffect)(() => {
		let e = le.current, t = N.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => P(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
		label: K("manage:reviewToolbar.filters"),
		topLabel: K("manage:reviewToolbar.processingStatus"),
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: O ? "min-h-12 max-w-full flex-none [&>*]:shrink-0" : "hidden",
		bottomRef: N,
		panes: /* @__PURE__ */ (0, $.jsx)("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ (0, $.jsxs)("div", {
			ref: le,
			role: "group",
			"aria-label": K("manage:reviewToolbar.reviewStatus"),
			"data-entity-states": "",
			onPointerLeave: de.leave,
			children: [w.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: f,
				"aria-pressed": g === e,
				onPointerEnter: de.hover,
				onClick: () => {
					e !== g && ie(e);
				},
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `review.queue.${e}`,
						children: T[e]
					}),
					" ",
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: _ ? _[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: ue ? void 0 : "invisible"
			})]
		}),
		bottom: O ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [C ? /* @__PURE__ */ (0, $.jsx)(h, {
			label: K("manage:reviewPage.search"),
			value: S,
			onQuery: C
		}) : null, c.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			te && y.length ? /* @__PURE__ */ (0, $.jsxs)(E, {
				"aria-label": K("manage:reviewToolbar.filterField"),
				size: "sm",
				prefix: /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: K("manage:reviewToolbar.field")
				}),
				selectedKey: b || "*",
				isDisabled: f,
				onSelectionChange: (e) => {
					e !== null && x(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(D, {
					id: "*",
					children: K("manage:shared.all")
				}), y.map((e) => /* @__PURE__ */ (0, $.jsx)(D, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(E, {
				"aria-label": K("manage:reviewToolbar.groupBy"),
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(D, {
					id: e,
					children: t
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ (0, $.jsxs)(E, {
				"aria-label": K(n === "field" ? "manage:reviewToolbar.filterFieldGroup" : "manage:reviewToolbar.filterGroup"),
				size: "sm",
				prefix: K("manage:reviewToolbar.group"),
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(D, {
					id: "*",
					children: K("manage:shared.all")
				}), a.map((e) => /* @__PURE__ */ (0, $.jsx)(D, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			v ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: Te,
				"aria-pressed": k,
				disabled: f,
				onClick: () => {
					let e = new Set(u);
					for (let t of c) k ? e.delete(t) : e.add(t);
					d(e);
				},
				children: K(k ? "manage:reviewToolbar.clearSelection" : o ? "manage:reviewToolbar.selectGroup" : "manage:reviewToolbar.selectPage")
			}),
			v || l.length <= c.length || A ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: f,
				onClick: () => d(/* @__PURE__ */ new Set([...u, ...l])),
				children: K("manage:reviewToolbar.selectAll", { count: l.length })
			})
		] }) : null] }) : null
	}), /* @__PURE__ */ (0, $.jsxs)(ae, {
		label: K("manage:reviewToolbar.selectedDock"),
		visible: !v && u.size > 0,
		count: K("manage:reviewToolbar.selectedCount", { count: u.size }),
		actions: p,
		leading: se && g !== "ignored" ? /* @__PURE__ */ (0, $.jsxs)(E, {
			"aria-label": K("manage:reviewToolbar.sourceForAll"),
			size: "sm",
			selectedKey: "",
			isDisabled: f || !j.length,
			onSelectionChange: (e) => {
				e !== null && e !== "" && re(String(e));
			},
			children: [/* @__PURE__ */ (0, $.jsx)(D, {
				id: "",
				children: ce
			}), j.map((e) => /* @__PURE__ */ (0, $.jsx)(D, {
				id: e,
				children: e
			}, e))]
		}) : null,
		children: [/* @__PURE__ */ (0, $.jsx)(r, {
			variant: "ghost",
			size: "small",
			disabled: f,
			onClick: ye,
			children: K("manage:reviewToolbar.deselect")
		}), ne ? /* @__PURE__ */ (0, $.jsx)("p", {
			role: "status",
			className: "w-full text-body-2-regular text-text-secondary",
			children: ne
		}) : null]
	})] });
}
// src/react/boardui/components/base/radio/radio.tsx
var vt = {
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
function yt({ selected: e = !1, size: t = "sm", focusVisible: n = !1, className: r }) {
	let i = vt[t];
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"aria-hidden": !0,
		className: L("relative flex shrink-0 items-center justify-center rounded-full", i.dot, n && "ring-2 ring-border-focus-ring ring-offset-2", r),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute inset-0 rounded-full border-border-checkbox-default bg-background-primary-default shadow-xs", "transition-opacity duration-200 ease", i.border, e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute inset-0 rounded-full", "transition-opacity duration-200 ease", i.selected, !e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-control-indicator-background", "transition-[scale,opacity] duration-200 ease", i.inner, e ? "scale-100 opacity-100" : "scale-0 opacity-0") })
		]
	});
}
function bt({ className: e, children: n, ref: r, ...i }) {
	return /* @__PURE__ */ (0, $.jsx)(t, {
		ref: r,
		...i,
		className: (t) => L("flex flex-col gap-2", typeof e == "function" ? e(t) : e),
		children: n
	});
}
// src/react/boardui/components/base/radio/radio-card.tsx
function xt({ className: e, title: t, description: r, ref: i, ...a }) {
	return /* @__PURE__ */ (0, $.jsx)(n, {
		ref: i,
		...a,
		className: (t) => L("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
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
			children: /* @__PURE__ */ (0, $.jsx)(yt, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// src/react/review/candidate-form.tsx
var St = {
	title: K("manage:shared.title"),
	original_title: K("manage:reviewCandidate.originalTitle"),
	runtime: K("manage:reviewCandidate.sourceRuntime"),
	director: K("manage:reviewCandidate.director"),
	label: "Label",
	poster_url: K("manage:reviewCandidate.poster"),
	cover_url: K("manage:shared.cover"),
	screenshot_urls: K("manage:reviewCandidate.screenshots"),
	trailer_url: K("manage:reviewCandidate.trailer")
}, Ct = "reviewgenretags";
function wt({ tags: e }) {
	return e.length ? /* @__PURE__ */ (0, $.jsx)("datalist", {
		id: Ct,
		children: e.map((e) => /* @__PURE__ */ (0, $.jsx)("option", { value: e }, e))
	}) : null;
}
function Tt({ candidate: e, row: t }) {
	let [n, i] = (0, J.useState)(!1), a = (0, J.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, $.jsxs)(r, {
			variant: "secondary",
			size: "small",
			leadingIcon: c,
			"aria-expanded": n,
			"aria-controls": a,
			"aria-label": K(n ? "manage:reviewCandidate.collapseEvidence" : "manage:reviewCandidate.expandEvidence", { source: e.source || K("manage:reviewCandidate.thisSource") }),
			onClick: () => i(!n),
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": "review.card.source_evidence",
				children: K("manage:reviewCandidate.sourceEvidence")
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
							children: St[n] || n
						}),
						/* @__PURE__ */ (0, $.jsx)("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ (0, $.jsx)(q, {
								value: F(r, "display_value"),
								reference: n === t.field && t.current_value ? t.current_value : F(t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n], "display_value")
							})
						}),
						Ue(r.warnings, r.warning_codes, r.warning_params).map((e) => /* @__PURE__ */ (0, $.jsx)("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function Et(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || K("manage:reviewQueue.unspecifiedSource")}${e.official ? ` · ${K("manage:reviewCandidate.officialFirst")}` : ""}${t ? ` · ID ${t}` : ""}`;
}
function Dt({ candidate: e, reference: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ (0, $.jsx)(q, {
				value: e.display_value || "",
				reference: t
			})
		}), Ue(e.warnings, e.warning_codes, e.warning_params).map((e) => /* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function Ot({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-medium text-text-primary",
				children: Et(a[0])
			}), /* @__PURE__ */ (0, $.jsx)(Dt, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ (0, $.jsx)(Tt, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ (0, $.jsx)(bt, {
		"aria-label": K("manage:reviewCandidate.sourceFor", { field: t || K("manage:scanFetch.slowWhatMetadata") }),
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, $.jsx)(xt, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ (0, $.jsx)("span", {
						title: Et(t),
						children: Et(t)
					}),
					description: /* @__PURE__ */ (0, $.jsx)(Dt, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ (0, $.jsx)(Tt, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function kt({ genre: e, tags: t, locked: n, toast: i }) {
	let [a, o] = (0, J.useState)(""), [s, c] = (0, J.useState)(""), l = Ke({
		mutationFn: (t) => H(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (i(n ? K("manage:reviewCandidate.mapped", {
				genre: e,
				tag: n
			}) : K("manage:reviewCandidate.markedNonContent", { genre: e })), await Ae()) : c(t.error || K("manage:reviewCandidate.mapRejected"));
		},
		onError: (e) => c(R(e))
	}), u = () => {
		let e = a.trim();
		e ? (c(""), l.mutate(e)) : c(K("manage:reviewCandidate.tagRequired"));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)(k, {
				"aria-label": K("manage:reviewCandidate.tagFor", { genre: e }),
				value: a,
				onChange: o,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, $.jsx)(_, {
					size: "small",
					list: t.length ? Ct : void 0,
					autoComplete: "off",
					placeholder: K("manage:reviewCandidate.tagPlaceholder"),
					onKeyDown: (e) => {
						e.key !== "Enter" || pe(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: K("manage:reviewCandidate.map")
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: K("manage:reviewCandidate.notContent")
			}),
			s ? /* @__PURE__ */ (0, $.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function At({ row: e, tags: t, locked: n, toast: r }) {
	let i = B(e);
	return i.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		role: "group",
		"aria-label": K("manage:reviewCandidate.unmappedGenres"),
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ (0, $.jsx)("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: K("manage:reviewCandidate.unmappedGenresCount", { count: i.length })
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ (0, $.jsx)("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ (0, $.jsx)(kt, {
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
var jt = (e = "") => /^https?:\/\//i.test(e) ? e : "", Mt = (e = "") => jt(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function Nt({ url: e }) {
	let t = Mt(e || "");
	return /* @__PURE__ */ (0, $.jsx)(Pt, { source: t }, t);
}
function Pt({ source: e }) {
	let [t, n] = (0, J.useState)("idle");
	return (0, J.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ (0, $.jsx)("span", {
			role: "status",
			"aria-busy": "true",
			"aria-label": K("manage:reviewEvidence.loadingImage"),
			"data-skeleton": "",
			className: "absolute inset-0 skeleton-sheen"
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e,
			alt: K("manage:reviewEvidence.candidateImageAlt"),
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: K("manage:reviewEvidence.imageNotFound")
			}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? K("manage:reviewEvidence.retryImage") : void 0,
				onClick: () => n("loading"),
				children: K(t === "failed" ? "manage:shared.retryNow" : "manage:reviewEvidence.viewImage")
			})]
		}) : /* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-2-regular text-text-secondary",
			children: K("manage:reviewEvidence.imageNotFound")
		})]
	});
}
function Ft({ asset: t, openItem: n }) {
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
				children: K("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: K("manage:reviewEvidence.openOriginalNamed", { name: i }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ (0, $.jsx)("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: t.code || i || K("manage:reviewEvidence.originalVideo")
			}), /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: g,
				onClick: () => n(t.id),
				children: K("manage:reviewEvidence.openOriginal")
			})]
		})]
	});
}
function It({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			"aria-label": K("manage:reviewEvidence.openCreator", { name: t }),
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${ie}`,
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
				children: K("manage:reviewEvidence.videoCount", { count: n })
			}) : null]
		})]
	});
}
function Lt({ row: e, openItem: t, openEntity: n, onReveal: a, revealing: o, note: s }) {
	let c = jt(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: K("manage:reviewEvidence.pendingPerson", { name: e.babepedia_name || K("manage:reviewEvidence.unlabeled") })
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, $.jsx)(i, {
					variant: "secondary",
					size: "small",
					trailingIcon: A,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: K("manage:reviewEvidence.sourceProfile")
				}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: K("manage:reviewEvidence.viewAllVideos", { count: u })
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Nt, { url: e.preview_url }),
			l.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: K("manage:reviewEvidence.localSamples")
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
						"aria-label": K("manage:reviewEvidence.revealNamed", { name: e.name }),
						...P(o === e.id),
						onClick: () => a(e.id),
						children: K("manage:reviewEvidence.fileLocation")
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: K("manage:reviewEvidence.noLocalSamples")
			}),
			s ? /* @__PURE__ */ (0, $.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Rt({ assets: t, picked: n, onPicked: r, locked: i }) {
	let [a, s] = (0, J.useState)(null), c = new Set(n), l = (e, n) => {
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
		children: [/* @__PURE__ */ (0, $.jsx)(O, {
			prefix: /* @__PURE__ */ (0, $.jsx)("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: K("manage:reviewEvidence.selectedOfTotal", {
					count: c.size,
					total: t.length
				})
			}),
			actions: [{
				label: K("manage:shared.selectAll"),
				disabled: i,
				onPress: () => r(t.map((e) => e.id))
			}, {
				label: K("manage:reviewEvidence.clearSelection"),
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
						/* @__PURE__ */ (0, $.jsx)(e, { children: K(r ? "manage:reviewEvidence.assetSelected" : "manage:reviewEvidence.assetUnselected", { name: t.name || t.id }) })
					]
				}, t.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var zt = fe({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), Bt = "flex min-h-6 min-w-0 items-center", Vt = 2, Ht = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function Ut(e) {
	let { category: t, row: n, choice: i, onChoice: o, selected: c, onSelect: l, locked: u, busy: d, problem: ee, genreTags: re, onDecide: m, handlers: h, queueView: _ = "pending" } = e, ie = (0, J.useRef)(!1), y = Je(), b = t === "metadata_fields", S = te[t] || "", C = String(n.creator || "").trim(), w = !!S && !!C, T = Be(t, n), E = Re(t, n), D = ze(t, n), O = Le(n), ae = W(n), oe = de(t, n), k = n.comparison_assets || [], A = n.preview_assets || [], ce = x[n.decision || ""], M = k.length > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [k.slice(0, Vt).map((e) => /* @__PURE__ */ (0, $.jsx)(Ft, {
			asset: e,
			openItem: h.openItem
		}, e.id)), k.length > Vt ? /* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: K("manage:reviewCard.moreComparison", { count: k.length - Vt })
		}) : null]
	}) : w ? /* @__PURE__ */ (0, $.jsx)(It, {
		kind: S,
		name: C,
		works: Number(n.video_count || n.videos || 0),
		openEntity: h.openEntity,
		avatar: N(C, n.entity_id ? {
			id: n.entity_id,
			has_image: !!n.has_image,
			image_version: n.image_version,
			avatar_focus: n.avatar_focus
		} : null, null, S)
	}) : n.asset_id ? /* @__PURE__ */ (0, $.jsx)(Ft, {
		openItem: h.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, le = b ? /* @__PURE__ */ (0, $.jsx)(Ot, {
		row: n,
		fieldName: E,
		value: i.candidateKey,
		onChange: (e) => o({
			...i,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? A.length ? /* @__PURE__ */ (0, $.jsx)(Rt, {
		assets: A,
		picked: i.assets,
		locked: u,
		onPicked: (e) => o({
			...i,
			assets: e
		})
	}) : /* @__PURE__ */ (0, $.jsx)(ne, {
		size: "compact",
		icon: f,
		title: K("manage:reviewCard.noFramesTitle"),
		children: n.video_count ? K("manage:reviewCard.noFramesBody", { count: n.video_count }) : K("manage:reviewCard.noFramesBodyUncounted")
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ (0, $.jsx)(Lt, {
		row: n,
		openItem: h.openItem,
		openEntity: h.openEntity,
		onReveal: h.onReveal,
		revealing: h.revealing,
		note: h.revealNote
	}) : /* @__PURE__ */ (0, $.jsx)(Nt, { url: n.preview_url }), fe = w ? M : E ? /* @__PURE__ */ (0, $.jsxs)("h4", {
		className: L(Bt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			title: E,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ (0, $.jsx)(s, {
				variant: "caption",
				color: "neutral",
				children: E
			})
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})]
	}) : /* @__PURE__ */ (0, $.jsx)("h4", {
		className: Bt,
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})
	}), F = $e(), I = [];
	if (k.length <= 1) {
		if (w) I.push({
			id: "entity",
			label: C,
			icon: j,
			run: () => h.openEntity(S, C)
		});
		else if (n.asset_id) {
			let e = n.asset_id;
			I.push({
				id: "open",
				label: K("catalog:mediaActions.open"),
				icon: g,
				run: () => h.openItem(e)
			});
		}
	}
	u || (I.push(U(c, () => l(!1, !c))), _ !== "ignored" && I.push({
		id: "approve",
		label: K("manage:reviewDecision.approve"),
		icon: Ve,
		disabled: d || !oe,
		run: () => m("approved")
	}), I.push(_ === "pending" ? {
		id: "later",
		label: K("manage:reviewDecision.later"),
		icon: z,
		disabled: d,
		run: () => m("skipped")
	} : {
		id: "restore",
		label: K("manage:reviewDecision.moveToPending"),
		icon: ue,
		disabled: d,
		run: () => m("restore")
	}), _ !== "ignored" && I.push({
		id: "ignore",
		label: K("manage:shared.ignore"),
		icon: se,
		disabled: d,
		run: () => m("rejected")
	}));
	let pe = {
		key: n.item_key,
		operations: I
	};
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": T,
		"data-review-key": n.item_key,
		"data-rectangle-key": n.item_key,
		tabIndex: -1,
		className: L(zt, Ht(t)),
		onContextMenu: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || F.onContextMenu(e, pe);
		},
		onKeyDown: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || F.onKeyDown(e, pe);
		},
		children: [
			F.menu,
			/* @__PURE__ */ (0, $.jsxs)("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ (0, $.jsx)("span", {
						className: L(Bt, "shrink-0"),
						onPointerDownCapture: (e) => {
							ie.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							ie.current = e.shiftKey;
						},
						children: /* @__PURE__ */ (0, $.jsx)(a, {
							isSelected: c,
							"aria-label": K("manage:reviewCard.selectItem", { title: T }),
							onChange: (e) => l(ie.current, e)
						})
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "min-w-0 flex-1",
						children: fe
					}),
					ce ? /* @__PURE__ */ (0, $.jsx)(s, {
						variant: "caption",
						color: "neutral",
						children: ce
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: y,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: K("manage:reviewCard.sourceSpelling", { name: n.source_name })
						}) : null,
						!w && (n.board || n.assets) ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: K("manage:reviewCard.comparisonFiles", { count: Number(n.video_count || n.assets || 0) })
						}) : null,
						!w && M ? M : null,
						b && (O || n.current_value !== void 0) ? /* @__PURE__ */ (0, $.jsxs)("div", {
							role: "region",
							"aria-label": K("manage:reviewCard.currentInfo"),
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: K("manage:reviewCard.currentValue")
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ (0, $.jsx)(s, {
										variant: "caption",
										color: "neutral",
										children: K("manage:reviewCard.manuallyConfirmed")
									}) : null]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? O : n.current_value ? /* @__PURE__ */ (0, $.jsx)(q, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === i.candidateKey) || n.candidates?.[0])?.display_value
									}) : K("manage:reviewCard.noMetadata")
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: K(n.asset_path ? "manage:reviewCard.matchingFiles" : "manage:reviewCard.sameCodeFiles", { count: Number(n.videos) })
								})
							]
						}) : null,
						ae.length || t === "creator_tags" ? /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: ae.length ? ae.map((e) => /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ (0, $.jsx)("small", {
								className: "text-body-2-regular text-text-secondary",
								children: K("manage:reviewCard.noPendingTags")
							})
						}) : null,
						b ? /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, $.jsxs)("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ (0, $.jsx)("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: K("manage:reviewCard.candidateSources")
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? K("manage:reviewCard.comparedToCurrent") : K("manage:reviewCard.sourceDifferences")
							}) : null]
						}) : null,
						le,
						/* @__PURE__ */ (0, $.jsx)(At, {
							row: n,
							tags: re,
							locked: u,
							toast: h.toast
						}),
						!b && O ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("footer", {
				className: L(p.stack, "shrink-0"),
				children: [
					_ === "ignored" ? null : /* @__PURE__ */ (0, $.jsx)(v, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...P(d),
						onClick: () => m("rejected"),
						children: K("manage:shared.ignore")
					}),
					_ === "pending" ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => m("skipped"),
						children: K("manage:reviewDecision.later")
					}) : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: _ === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => m("restore"),
						children: K("manage:reviewDecision.moveToPending")
					}),
					_ === "ignored" ? null : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "primary",
						size: "small",
						disabled: u || !oe,
						...P(d),
						title: oe ? void 0 : K("manage:reviewCard.cannotApproveHint"),
						onClick: () => m("approved"),
						children: K(oe ? "manage:reviewDecision.approve" : "manage:reviewCard.cannotApprove")
					}),
					ee ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: ee
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Wt = "flex cursor-pointer items-center justify-between gap-2";
function Gt(e) {
	let t = qe("review").keys.filter(Ce), [n, i] = (0, J.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, J.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => i(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: a, openItem: o, openEntity: s, revealSource: c, toast: l, readOnly: d, readOnlyMessage: te, writerUrl: f } = e, [p, m] = (0, J.useState)(Ce(e.category) ? e.category : u), [h, g] = (0, J.useState)(() => Fe(e.queue)), [_, ie] = (0, J.useState)("candidates"), [v, x] = (0, J.useState)(""), [T, E] = (0, J.useState)(""), [D, O] = (0, J.useState)(1), [ae, k] = (0, J.useState)(20), [A, j] = (0, J.useState)(/* @__PURE__ */ new Set()), se = Ye(() => j(/* @__PURE__ */ new Set()));
	(0, J.useEffect)(() => {
		A.size && ve();
	}, [A]);
	let [ce, M] = (0, J.useState)(/* @__PURE__ */ new Map()), [le, N] = (0, J.useState)(/* @__PURE__ */ new Map()), [ue, P] = (0, J.useState)(""), fe = (0, J.useRef)(null), [F, I] = (0, J.useState)(0), [pe, L] = (0, J.useState)(""), ye = (0, J.useRef)(!0);
	(0, J.useEffect)(() => () => {
		ye.current = !1;
	}, []);
	let z = Xe({
		queryKey: S,
		queryFn: ({ signal: e }) => be(e)
	}), we = z.data || {
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
	}, Te = Pe(we, h), Ee = z.data ? Object.fromEntries(w.map((e) => [e, b.reduce((t, n) => t + Number(Pe(we, e).counts[n] || 0), 0)])) : void 0, B = Te.sections[p] || [], V = p === "metadata_fields", H = d;
	(0, J.useEffect)(() => {
		let e = new Set(B.map((e) => e.item_key));
		j((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), M((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), N((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [B]);
	let [Ae, je] = (0, J.useState)(""), Me = (0, J.useMemo)(() => {
		let e = Ae.toLocaleLowerCase();
		return e ? B.filter((t) => Object.values(t).some((t) => typeof t == "string" && t.toLocaleLowerCase().includes(e))) : B;
	}, [B, Ae]), Le = (0, J.useMemo)(() => V ? Se(Me, "field") : [], [Me, V]), Re = Le.some((e) => e.key === T) ? T : "", U = (0, J.useMemo)(() => V ? xe(Me, "field", Re) : Me, [
		Me,
		V,
		Re
	]), ze = (0, J.useMemo)(() => Ne(U, V), [U, V]), W = ze.some(([e]) => e === _) ? _ : "candidates", Be = (0, J.useMemo)(() => Se(U, W), [U, W]), Ve = Be.some((e) => e.key === v) ? v : "", G = (0, J.useMemo)(() => xe(U, W, Ve), [
		U,
		W,
		Ve
	]), Ue = (0, J.useMemo)(() => Ie(G, D, ae), [
		G,
		D,
		ae
	]), Je = Ue.rows.map((e) => e.item_key), Qe = new Set(Je), $e = Be.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Qe.has(e.item_key))
	})).filter((e) => e.rows.length), q = (0, J.useRef)(null), tt = (0, J.useRef)(null), nt = Ze(H ? void 0 : (e, t) => j((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])), {
		selecting: se,
		items: "[data-review-key]",
		start: ".review-grid"
	});
	(0, J.useLayoutEffect)(() => {
		let e = tt.current;
		if (!e || e.card.isConnected || (tt.current = null, document.activeElement !== document.body)) return;
		let t = [...q.current?.querySelectorAll("[data-review-key]") ?? []];
		(e.following.map((e) => t.find((t) => t.dataset.reviewKey === e)).find(Boolean) ?? t[0] ?? q.current)?.focus();
	});
	let Y = (e) => ce.get(e.item_key) || _e(e), X = (0, J.useMemo)(() => B.filter((e) => A.has(e.item_key)), [B, A]), rt = (e) => {
		let t = new Set(e);
		j((e) => new Set([...e].filter((e) => !t.has(e)))), M((e) => new Map([...e].filter(([e]) => !t.has(e)))), N((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, it = (e, t) => N((n) => new Map(n).set(e, t)), at = () => {
		tt.current = null, ie("candidates"), x(""), E(""), O(1), j(/* @__PURE__ */ new Set()), M(/* @__PURE__ */ new Map()), N(/* @__PURE__ */ new Map()), P(""), fe.current = null;
	}, ot = (e) => {
		m(e), at(), a({
			category: e === "metadata_fields" ? "" : e,
			queue: h === "pending" ? "" : h
		});
	}, st = (e) => {
		g(e), at(), a({
			category: p === "metadata_fields" ? "" : p,
			queue: e === "pending" ? "" : e
		});
	}, Z = Ke({
		mutationFn: ({ row: e, status: t, category: n }) => Ge(he(n, me(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			if (!e.ok) {
				it(t.item_key, e.error || K("manage:reviewPage.decisionRejected"));
				return;
			}
			let i = document.activeElement?.closest("[data-review-key]");
			if (i?.dataset.reviewKey === t.item_key && q.current?.contains(i)) {
				let e = [...q.current.querySelectorAll("[data-review-key]")], t = e.indexOf(i), n = [...e.slice(t + 1), ...e.slice(0, t).reverse()].map((e) => e.dataset.reviewKey);
				tt.current = {
					card: i,
					following: n
				};
			}
			We(r, [t.item_key], n), rt([t.item_key]), l(ge(n));
		},
		onError: (e, { row: t }) => it(t.item_key, R(e))
	}), Q = Ke({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!ye.current) break;
				P(K("manage:reviewPage.processingProgress", {
					current: a,
					total: n.length
				}));
				try {
					let n = await Ge(he(t, me(t, o), e, Y(o)));
					if (!n.ok) throw Error(n.error || K("manage:reviewPage.itemNotAccepted"));
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, R(e)]);
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
			We(t, n, e), rt(n), r.forEach(([e, t]) => it(e, t)), P("");
		},
		onError: (e) => {
			P(R(e));
		}
	}), ct = {
		receipt: l,
		failure: (e) => P(R(e))
	}, lt = {
		ignored: "rejected",
		later: "skipped"
	}, ut = (e, t) => {
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
				if (e === "approved" && V && n.some((e) => !Y(e).candidateKey)) throw Error(K("manage:reviewPage.chooseSourceFirst"));
				return P(""), {
					title: t,
					body: K(`manage:reviewPage.confirm.${e}`, { count: n.length })
				};
			},
			run: async (t) => {
				n = await Q.mutateAsync({
					status: e,
					category: p,
					rows: [...t]
				});
				let { done: r } = n;
				if (e === "approved") return;
				let i = p, a = t.filter((e) => r.includes(e.item_key)), o = e === "restore" ? lt[h] : "restore";
				return async () => {
					for (let e of a) await Ge(he(i, me(i, e), o, Y(e)));
					await ke.invalidateQueries({ queryKey: S });
				};
			},
			receipt: () => K({
				approved: "manage:reviewPage.approvedCount",
				rejected: "manage:reviewPage.ignoredCount",
				skipped: "manage:reviewPage.laterCount",
				restore: "manage:reviewPage.pendingCount"
			}[e], { count: n.done.length }) + (n.failures.length ? K("manage:reviewPage.notCompletedSuffix", { count: n.failures.length }) : "")
		};
	}, dt = X.every((e) => de(p, e)), ft = [
		...h === "ignored" ? [] : [ut("rejected", K("manage:reviewToolbar.ignoreSelected"))],
		h === "pending" ? ut("skipped", K("manage:reviewToolbar.laterSelected")) : ut("restore", K("manage:reviewToolbar.restoreSelected")),
		...h === "ignored" ? [] : [ut("approved", K("manage:reviewToolbar.approveSelected"))]
	].map((e) => ({
		action: e,
		items: X,
		host: ct,
		variant: e.key === "approved" || h === "ignored" && e.key === "restore" ? "primary" : void 0,
		disabled: Q.isPending || Z.isPending || e.key === "approved" && !dt
	})), pt = (e) => {
		M((t) => {
			let n = new Map(t);
			for (let t of X) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Y(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), P(K("manage:reviewPage.sourceChosen", { source: e }));
	}, mt = async (e) => {
		if (F) return;
		I(e), L("");
		let t = await c(e);
		ye.current && (I(0), L(t));
	}, ht = Oe(we.mirror, te), vt = we.genre_tags || [], yt = {
		openItem: o,
		openEntity: s,
		onReveal: mt,
		revealing: F,
		revealNote: pe,
		toast: l
	};
	return /* @__PURE__ */ (0, $.jsx)(et, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			H ? /* @__PURE__ */ (0, $.jsx)(y, {
				tone: "warning",
				title: K("manage:reviewPage.readOnly"),
				extra: f ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ (0, $.jsx)(re, {
						href: f,
						children: K("manage:reviewPage.goToPrimary")
					})
				}) : void 0,
				children: ht
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(wt, { tags: vt }),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ (0, $.jsx)("h2", {
						id: "reviewcategories",
						children: K("manage:reviewPage.categories")
					}), /* @__PURE__ */ (0, $.jsx)(oe, {
						group: "review",
						label: K("manage:reviewPage.categories"),
						value: p,
						onChange: ot,
						orientation: n ? "horizontal" : "vertical",
						panelPrefix: "review",
						sectionItems: !0,
						className: "",
						itemClassName: Wt,
						disabled: Z.isPending || Q.isPending,
						tabs: b.map((e) => {
							let t = Number(Te.counts[e] || 0);
							return {
								value: e,
								label: C[e],
								badge: t ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: t.toLocaleString()
								}) : null
							};
						})
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: q,
					role: "tabpanel",
					id: `review-panel-${p}`,
					"aria-labelledby": `review-tab-${p}`,
					tabIndex: -1,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, $.jsx)(_t, {
							search: Ae,
							onSearch: (e) => {
								je(e), x(""), O(1);
							},
							queueView: h,
							queueCounts: Ee,
							onQueueChange: st,
							locked: H,
							fields: Le,
							fieldFilter: Re,
							onFieldFilter: (e) => {
								E(e), x(""), O(1);
							},
							groupOptions: ze,
							groupBy: W,
							onGroupBy: (e) => {
								ie(e), x(""), O(1);
							},
							groups: Be,
							filter: Ve,
							onFilter: (e) => {
								x(e), O(1);
							},
							pageKeys: Je,
							allKeys: G.map((e) => e.item_key),
							selected: A,
							onSelected: j,
							selectedRows: X,
							metadata: V,
							busy: Q.isPending || Z.isPending,
							feedback: ue,
							onUnifySource: pt,
							actions: ft
						}),
						Ue.rows.length ? /* @__PURE__ */ (0, $.jsx)("div", {
							"data-rectangle-gutter": "",
							...nt,
							className: "flex flex-col gap-5",
							children: $e.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
								"data-rectangle-gap": "",
								className: "flex flex-col gap-3",
								children: [$e.length > 1 || W !== "candidates" ? /* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)("h3", {
										className: "text-body-medium text-text-primary",
										children: `${e.title} · ${e.rows.length}`
									}), H ? null : /* @__PURE__ */ (0, $.jsx)(r, {
										variant: "ghost",
										size: "small",
										onClick: () => {
											let t = e.rows.map((e) => e.item_key), n = t.every((e) => A.has(e)), r = new Set(A);
											for (let e of t) n ? r.delete(e) : r.add(e);
											j(r);
										},
										children: e.rows.every((e) => A.has(e.item_key)) ? K("manage:reviewPage.clearGroup") : K("manage:reviewPage.selectGroup")
									})]
								}) : null, /* @__PURE__ */ (0, $.jsx)("div", {
									className: "review-grid gap-5",
									children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Ut, {
										category: p,
										row: e,
										queueView: h,
										choice: Y(e),
										onChoice: (t) => M((n) => new Map(n).set(e.item_key, t)),
										selected: A.has(e.item_key),
										onSelect: (t, n) => j((r) => {
											let i = new Set(r);
											return fe.current = He(i, Je, fe.current, e.item_key, t, n), i;
										}),
										locked: H,
										busy: Q.isPending || Z.isPending && Z.variables?.row.item_key === e.item_key,
										problem: le.get(e.item_key) || "",
										genreTags: vt,
										onDecide: (t) => {
											Z.isPending || Q.isPending || (N((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Z.mutate({
												row: e,
												status: t,
												category: p
											}));
										},
										handlers: yt
									}, e.item_key))
								})]
							}, e.key))
						}) : z.isError && !z.data ? /* @__PURE__ */ (0, $.jsx)(y, {
							tone: "error",
							title: K("manage:reviewPage.queueLoadFailed"),
							action: /* @__PURE__ */ (0, $.jsx)(r, {
								variant: "secondary",
								size: "small",
								disabled: z.isFetching,
								onClick: () => void z.refetch(),
								children: K("manage:shared.retryNow")
							}),
							children: R(z.error)
						}) : /* @__PURE__ */ (0, $.jsx)(ne, {
							icon: De,
							title: K({
								pending: "manage:reviewPage.emptyPending",
								later: "manage:reviewPage.emptyLater",
								ignored: "manage:reviewPage.emptyIgnored"
							}[h]),
							actions: b.some((e) => e !== p && Number(Te.counts[e] || 0) > 0) ? /* @__PURE__ */ (0, $.jsx)(r, {
								size: "small",
								onClick: () => {
									let e = t.find((e) => e !== p && Number(Te.counts[e] || 0) > 0);
									e && ot(e);
								},
								children: K("manage:reviewPage.viewOtherCategories")
							}) : void 0,
							children: K(h === "pending" ? "manage:reviewPage.switchCategoryHint" : h === "later" ? "manage:reviewPage.laterKeptHint" : "manage:reviewPage.ignoredKeptHint")
						}),
						G.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
							label: K("manage:reviewPage.footerLabel"),
							total: G.length,
							pagination: {
								pageIndex: Ue.page - 1,
								pageSize: ae
							},
							onChange: (e) => {
								O(e.pageIndex + 1), k(e.pageSize);
							}
						}) : null,
						V && h === "pending" ? /* @__PURE__ */ (0, $.jsx)(gt, {
							locked: H,
							openItem: o,
							toast: l
						}) : null
					]
				})]
			})
		]
	}) });
}
export { Gt as ReviewPage };

//# debugId=dfd6c3fa-7ef9-4ad2-8bfe-a07b0a468c47