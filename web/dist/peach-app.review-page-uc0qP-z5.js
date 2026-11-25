(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bb5260d6-1149-4743-9248-9c0a94c23daf", e._sentryDebugIdIdentifier = "sentry-dbid-bb5260d6-1149-4743-9248-9c0a94c23daf");
	} catch {}
})();
import { $ea3928288112382f$export$439d29a4e110a164 as e, $fe21c36db05242bb$export$a98f0dcb43a68a25 as t, $fe21c36db05242bb$export$d7b12c4107be0d61 as n, Button as r, ButtonLink as i, Checkbox as a, CheckboxGlyph as o, Chip as s, CollapseChevron as c, CollapseRegion as l, DEFAULT_CATEGORY as u, DataTable as d, DataTableFooter as ee, ENTITY_REVIEW_KINDS as te, Ea as f, EmptyState as ne, ExternalLink as re, FIELDSET_FOOT as p, FilterGlassRows as m, Gg as h, InputBase as g, LEGACY_AVATAR_IMG as _, LinkButton as v, Note as y, REVIEW_CATEGORIES as ie, REVIEW_DECISION_LABELS as ae, REVIEW_KEY as b, REVIEW_LABELS as x, REVIEW_QUEUES as S, REVIEW_QUEUE_LABELS as C, Select as w, SelectItem as T, SelectionActions as oe, SelectionDock as E, SortableBoardTabs as D, TextField as O, Wt as k, Xf as A, Yt as j, __toESM as se, apiGet as ce, apiSend as M, avatarInner as le, b1 as N, busyProps as P, canApprove as ue, cardClass as F, codedText as de, commonReviewSources as fe, composingKey as I, currentReviewRow as pe, cx as L, decisionPayload as me, decisionReceipt as he, defaultChoice as ge, enterPageSelection as _e, errorMessage as R, exitPageSelection as ve, fetchReview as ye, filterReviewRows as be, gB as xe, groupReviewRows as Se, isReviewCategory as Ce, joinList as z, l7 as we, localTime as Te, m7 as Ee, mirrorText as De, pendingGenres as Oe, queryClient as ke, quoted as B, recordGenre as V, reloadReview as H, require_jsx_runtime as Ae, require_react as je, reviewGroupingOptions as Me, reviewQueueData as Ne, reviewQueueOf as Pe, reviewWindow as Fe, rowEvidence as U, rowFieldName as Ie, rowSelectionOperation as W, rowSubject as Le, rowTags as Re, rowTitle as ze, s7 as Be, selectReviewRange as Ve, serverLabel as He, serverLabelList as Ue, settleReviewRows as We, submitDecision as Ge, t as G, useMutation as Ke, useNavigationOrder as qe, useOverlayScrollbar as Je, usePageSelection as Ye, useQuery as Xe, useRectangleSelection as Ze, useViewGlide as Qe, useWorkContextMenu as $e } from "./peach-app.js";
import { Page as et } from "./peach-app.page-QAncjzM1.js";
import { ComparisonText as tt } from "./peach-app.comparison-text-DmxgbX8f.js";
// src/react/review/auto-landings.ts
var K = /* @__PURE__ */ se(je(), 1), q = "/api/review/auto-landings", nt = "/api/review/auto-landings/revert", rt = ["review", "auto-landings"], J = (e) => He(e.field_code ?? "", e.field), it = (e) => He(e.label_code ?? "", e.label), at = (e) => ce(q, e), ot = (e) => ce(`${q}?items=${encodeURIComponent(e.join("\n"))}`), Y = (e, t) => M(nt, {
	items: e,
	token: t
}), X = (e) => e.at === null ? "" : Te((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), Z = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : G("manage:autoLandings.unknownVideo")), st = (e) => e ? B(e) : G("manage:autoLandings.emptyValue"), Q = (e) => e.tags.length ? z(e.tags) : e.value, ct = (e) => e.tags.length ? G("manage:autoLandings.existingTagsKept") : G("manage:autoLandings.previousValue", { value: e.previous.length ? z(e.previous.map(st)) : G("manage:autoLandings.emptyValue") });
function lt(e) {
	return [
		...e.restores.map((e) => G("manage:autoLandings.previewRestore", {
			video: Z(e),
			field: J(e),
			current: st(e.current),
			previous: st(e.previous)
		})),
		...e.tags.map((e) => G("manage:autoLandings.previewRemoveTag", {
			video: Z(e),
			tag: e.tag
		})),
		...e.changed.map((e) => e.gone ? G("manage:autoLandings.previewGone", {
			video: Z(e),
			field: J(e)
		}) : G("manage:autoLandings.previewEdited", {
			video: Z(e),
			field: J(e)
		}))
	];
}
function ut(e) {
	let t = [e.restores.length ? G("manage:autoLandings.previewRestoreCount", { count: e.restores.length }) : "", e.tags.length ? G("manage:autoLandings.previewRemoveTags", { count: e.tags.length }) : ""].filter(Boolean);
	return [
		t.length ? G("manage:autoLandings.previewRevert", {
			count: e.decisions,
			details: t.join(G("shell:format.clauseSeparator"))
		}) : G("manage:autoLandings.previewRevertNothing", { count: e.decisions }),
		e.changed.length ? G("manage:autoLandings.previewUnchanged", { count: e.changed.length }) : "",
		G("manage:autoLandings.revertBackupNote")
	].filter(Boolean).join(G("shell:format.sentenceGap"));
}
function dt(e) {
	let t = [e.restored ? G("manage:autoLandings.resultRestoreCount", { count: e.restored }) : "", e.removed_tags ? G("manage:autoLandings.resultRemovedTags", { count: e.removed_tags }) : ""].filter(Boolean);
	return t.length ? G("manage:autoLandings.resultSummaryDetails", {
		count: e.decisions,
		details: t.join(G("shell:format.clauseSeparator"))
	}) : G("manage:autoLandings.resultSummary", { count: e.decisions });
}
// src/react/review/auto-landings-card.tsx
var $ = Ae(), ft = G("manage:autoLandings.description");
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
				children: G("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: G("manage:autoLandings.openVideo", { name: Z(t) }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsxs)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [Z(t), t.assets > 1 ? /* @__PURE__ */ (0, $.jsx)("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: G("manage:autoLandings.fileCount", { count: t.assets })
				}) : null]
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				title: t.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: t.gone ? G("manage:autoLandings.videoGone") : t.name
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
				children: G("shell:format.labelPrefix", { label: J(e) })
			}), Q(e)]
		}), /* @__PURE__ */ (0, $.jsx)("small", {
			title: ct(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: ct(e)
		})]
	});
}
function ht({ locked: e, openItem: t, toast: n }) {
	let [r, i] = (0, K.useState)([]), [a, o] = (0, K.useState)(null), s = Xe({
		queryKey: rt,
		queryFn: ({ signal: e }) => at(e)
	}), c = s.data?.items ?? [], l = (e) => {
		let t = null, n = null;
		return {
			key: "revert",
			label: G("manage:autoLandings.revertSelected", { count: e }),
			reversal: "irreversible",
			confirm: async (e) => (t = await ot(e.map((e) => e.item_key)), {
				title: G("manage:autoLandings.revertTitle"),
				body: ut(t),
				items: lt(t),
				confirmLabel: G("manage:shared.revert")
			}),
			run: async () => {
				n = await Y(t.items, t.token), o(n), ke.invalidateQueries({ queryKey: b });
			},
			receipt: () => n ? dt(n) : ""
		};
	}, u = {
		receipt: n,
		failure: (e) => n(R(e))
	};
	if (!c.length && !a && !s.isError) return null;
	let ee = [
		{
			id: "work",
			label: G("manage:shared.video"),
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
			label: G("manage:autoLandings.columnWritten"),
			width: 320,
			min: 220,
			value: (e) => `${J(e)}${Q(e)}`,
			filter: { values: J },
			render: (e) => /* @__PURE__ */ (0, $.jsx)(mt, { item: e })
		},
		{
			id: "rule",
			label: G("manage:autoLandings.columnRule"),
			width: 142,
			min: 100,
			value: it,
			filter: { values: it },
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				title: it(e),
				className: "block truncate text-body-2-regular text-text-secondary",
				children: it(e)
			})
		},
		{
			id: "at",
			label: G("manage:autoLandings.columnTime"),
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
				children: X(e) || G("manage:autoLandings.timeUnknown")
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [a ? /* @__PURE__ */ (0, $.jsxs)(y, {
			tone: "success",
			title: dt(a),
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular",
				children: G("manage:autoLandings.backupDone", { path: a.backup })
			}), a.changed.length ? /* @__PURE__ */ (0, $.jsxs)("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [G("manage:autoLandings.leftUnchanged", { count: a.changed.length }), a.changed.map((e) => e.gone ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-text-secondary",
					children: G("manage:autoLandings.deletedAsset", { id: e.asset_id })
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ (0, $.jsx)(v, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: Z(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, s.isError ? /* @__PURE__ */ (0, $.jsx)(y, {
			tone: "error",
			title: G("manage:autoLandings.loadFailed"),
			children: R(s.error)
		}) : c.length ? /* @__PURE__ */ (0, $.jsx)(d, {
			preferenceId: "auto-landings",
			label: G("manage:autoLandings.title"),
			items: c,
			columns: ee,
			title: G("manage:autoLandings.title"),
			titleId: "auto-landings-title",
			unit: G("manage:autoLandings.unit"),
			description: ft,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${Z(e)} ${J(e)}`,
			selected: r,
			onSelected: i,
			contextOperations: ({ asset_id: e, gone: n }) => e && !n ? [{
				id: "open",
				label: G("catalog:mediaActions.open"),
				icon: h,
				run: () => t(e)
			}] : [],
			actions: (t, n) => [{
				action: l(t.length),
				items: t,
				host: u,
				disabled: e,
				done: n,
				rowAction: {
					label: G("manage:shared.revert"),
					icon: N
				}
			}]
		}) : null]
	});
}
// src/react/review/bulk-toolbar.tsx
function gt(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: i, groups: a, filter: o, onFilter: s, pageKeys: c, allKeys: l = c, selected: u, onSelected: d, selectedRows: ee, metadata: te, busy: f, feedback: ne, onUnifySource: re, actions: p, queueView: h = "pending", queueCounts: g, onQueueChange: _, locked: v, fields: y, fieldFilter: ie, onFieldFilter: ae } = e, b = c.filter((e) => u.has(e)), x = b.length > 0 && b.length === c.length, oe = l.length > c.length && l.every((e) => u.has(e)), D = fe(ee), O = te && ee.some((e) => (e.candidates?.length || 0) > 1), k = D.length ? G("manage:reviewToolbar.sourceForAll") : G("manage:reviewToolbar.noCommonSource"), A = (0, K.useRef)(null), j = (0, K.useRef)(null), se = (0, K.useRef)(null), [ce, M] = (0, K.useState)(!1), le = Qe(A, j, "[data-entity-state][aria-pressed=\"true\"]", h);
	return (0, K.useLayoutEffect)(() => {
		let e = j.current, t = se.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => M(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
		label: G("manage:reviewToolbar.filters"),
		topLabel: G("manage:reviewToolbar.processingStatus"),
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none [&>*]:shrink-0" : "hidden",
		bottomRef: se,
		panes: /* @__PURE__ */ (0, $.jsx)("span", {
			ref: A,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ (0, $.jsxs)("div", {
			ref: j,
			role: "group",
			"aria-label": G("manage:reviewToolbar.reviewStatus"),
			"data-entity-states": "",
			onPointerLeave: le.leave,
			children: [S.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: f,
				"aria-pressed": h === e,
				onPointerEnter: le.hover,
				onClick: () => {
					e !== h && _(e);
				},
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `review.queue.${e}`,
						children: C[e]
					}),
					" ",
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: g ? g[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: ce ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			te && y.length ? /* @__PURE__ */ (0, $.jsxs)(w, {
				"aria-label": G("manage:reviewToolbar.filterField"),
				size: "sm",
				prefix: /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: G("manage:reviewToolbar.field")
				}),
				selectedKey: ie || "*",
				isDisabled: f,
				onSelectionChange: (e) => {
					e !== null && ae(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(T, {
					id: "*",
					children: G("manage:shared.all")
				}), y.map((e) => /* @__PURE__ */ (0, $.jsx)(T, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(w, {
				"aria-label": G("manage:reviewToolbar.groupBy"),
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(T, {
					id: e,
					children: t
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ (0, $.jsxs)(w, {
				"aria-label": G(n === "field" ? "manage:reviewToolbar.filterFieldGroup" : "manage:reviewToolbar.filterGroup"),
				size: "sm",
				prefix: G("manage:reviewToolbar.group"),
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, $.jsx)(T, {
					id: "*",
					children: G("manage:shared.all")
				}), a.map((e) => /* @__PURE__ */ (0, $.jsx)(T, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			v ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: we,
				"aria-pressed": x,
				disabled: f,
				onClick: () => {
					let e = new Set(u);
					for (let t of c) x ? e.delete(t) : e.add(t);
					d(e);
				},
				children: G(x ? "manage:reviewToolbar.clearSelection" : o ? "manage:reviewToolbar.selectGroup" : "manage:reviewToolbar.selectPage")
			}),
			v || l.length <= c.length || oe ? null : /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: f,
				onClick: () => d(/* @__PURE__ */ new Set([...u, ...l])),
				children: G("manage:reviewToolbar.selectAll", { count: l.length })
			})
		] }) : null
	}), /* @__PURE__ */ (0, $.jsxs)(E, {
		label: G("manage:reviewToolbar.selectedDock"),
		visible: !v && u.size > 0,
		count: G("manage:reviewToolbar.selectedCount", { count: u.size }),
		actions: p,
		leading: O && h !== "ignored" ? /* @__PURE__ */ (0, $.jsxs)(w, {
			"aria-label": G("manage:reviewToolbar.sourceForAll"),
			size: "sm",
			selectedKey: "",
			isDisabled: f || !D.length,
			onSelectionChange: (e) => {
				e !== null && e !== "" && re(String(e));
			},
			children: [/* @__PURE__ */ (0, $.jsx)(T, {
				id: "",
				children: k
			}), D.map((e) => /* @__PURE__ */ (0, $.jsx)(T, {
				id: e,
				children: e
			}, e))]
		}) : null,
		children: [/* @__PURE__ */ (0, $.jsx)(r, {
			variant: "ghost",
			size: "small",
			disabled: f,
			onClick: ve,
			children: G("manage:reviewToolbar.deselect")
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
		className: L("relative flex shrink-0 items-center justify-center rounded-full", i.dot, n && "ring-2 ring-border-focus-ring ring-offset-2", r),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute inset-0 rounded-full border-border-checkbox-default bg-background-primary-default shadow-xs", "transition-opacity duration-200 ease", i.border, e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute inset-0 rounded-full", "transition-opacity duration-200 ease", i.selected, !e && "opacity-0") }),
			/* @__PURE__ */ (0, $.jsx)("span", { className: L("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-control-indicator-background", "transition-[scale,opacity] duration-200 ease", i.inner, e ? "scale-100 opacity-100" : "scale-0 opacity-0") })
		]
	});
}
function yt({ className: e, children: n, ref: r, ...i }) {
	return /* @__PURE__ */ (0, $.jsx)(t, {
		ref: r,
		...i,
		className: (t) => L("flex flex-col gap-2", typeof e == "function" ? e(t) : e),
		children: n
	});
}
// src/react/boardui/components/base/radio/radio-card.tsx
function bt({ className: e, title: t, description: r, ref: i, ...a }) {
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
	title: G("manage:shared.title"),
	original_title: G("manage:reviewCandidate.originalTitle"),
	runtime: G("manage:reviewCandidate.sourceRuntime"),
	director: G("manage:reviewCandidate.director"),
	label: "Label",
	poster_url: G("manage:reviewCandidate.poster"),
	cover_url: G("manage:shared.cover"),
	screenshot_urls: G("manage:reviewCandidate.screenshots"),
	trailer_url: G("manage:reviewCandidate.trailer")
}, St = "reviewgenretags";
function Ct({ tags: e }) {
	return e.length ? /* @__PURE__ */ (0, $.jsx)("datalist", {
		id: St,
		children: e.map((e) => /* @__PURE__ */ (0, $.jsx)("option", { value: e }, e))
	}) : null;
}
function wt({ candidate: e, row: t }) {
	let [n, i] = (0, K.useState)(!1), a = (0, K.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, $.jsxs)(r, {
			variant: "secondary",
			size: "small",
			leadingIcon: c,
			"aria-expanded": n,
			"aria-controls": a,
			"aria-label": G(n ? "manage:reviewCandidate.collapseEvidence" : "manage:reviewCandidate.expandEvidence", { source: e.source || G("manage:reviewCandidate.thisSource") }),
			onClick: () => i(!n),
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": "review.card.source_evidence",
				children: G("manage:reviewCandidate.sourceEvidence")
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
							children: /* @__PURE__ */ (0, $.jsx)(tt, {
								value: de(r, "display_value"),
								reference: n === t.field && t.current_value ? t.current_value : de(t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n], "display_value")
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
function Tt(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || G("manage:reviewQueue.unspecifiedSource")}${e.official ? ` · ${G("manage:reviewCandidate.officialFirst")}` : ""}${t ? ` · ID ${t}` : ""}`;
}
function Et({ candidate: e, reference: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ (0, $.jsx)(tt, {
				value: e.display_value || "",
				reference: t
			})
		}), Ue(e.warnings, e.warning_codes, e.warning_params).map((e) => /* @__PURE__ */ (0, $.jsx)("span", {
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
		"aria-label": G("manage:reviewCandidate.sourceFor", { field: t || G("manage:scanFetch.slowWhatMetadata") }),
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
	let [a, o] = (0, K.useState)(""), [s, c] = (0, K.useState)(""), l = Ke({
		mutationFn: (t) => V(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (i(n ? G("manage:reviewCandidate.mapped", {
				genre: e,
				tag: n
			}) : G("manage:reviewCandidate.markedNonContent", { genre: e })), await H()) : c(t.error || G("manage:reviewCandidate.mapRejected"));
		},
		onError: (e) => c(R(e))
	}), u = () => {
		let e = a.trim();
		e ? (c(""), l.mutate(e)) : c(G("manage:reviewCandidate.tagRequired"));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)(O, {
				"aria-label": G("manage:reviewCandidate.tagFor", { genre: e }),
				value: a,
				onChange: o,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, $.jsx)(g, {
					size: "small",
					list: t.length ? St : void 0,
					autoComplete: "off",
					placeholder: G("manage:reviewCandidate.tagPlaceholder"),
					onKeyDown: (e) => {
						e.key !== "Enter" || I(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: G("manage:reviewCandidate.map")
			}),
			/* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: G("manage:reviewCandidate.notContent")
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
	let i = Oe(e);
	return i.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		role: "group",
		"aria-label": G("manage:reviewCandidate.unmappedGenres"),
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ (0, $.jsx)("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: G("manage:reviewCandidate.unmappedGenresCount", { count: i.length })
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
	let [t, n] = (0, K.useState)("idle");
	return (0, K.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ (0, $.jsx)("span", {
			role: "status",
			"aria-busy": "true",
			"aria-label": G("manage:reviewEvidence.loadingImage"),
			"data-skeleton": "",
			className: "absolute inset-0 skeleton-sheen"
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e,
			alt: G("manage:reviewEvidence.candidateImageAlt"),
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: G("manage:reviewEvidence.imageNotFound")
			}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? G("manage:reviewEvidence.retryImage") : void 0,
				onClick: () => n("loading"),
				children: G(t === "failed" ? "manage:shared.retryNow" : "manage:reviewEvidence.viewImage")
			})]
		}) : /* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-2-regular text-text-secondary",
			children: G("manage:reviewEvidence.imageNotFound")
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
				children: G("manage:shared.noCover")
			}), /* @__PURE__ */ (0, $.jsx)(e, { children: G("manage:reviewEvidence.openOriginalNamed", { name: i }) })]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ (0, $.jsx)("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: t.code || i || G("manage:reviewEvidence.originalVideo")
			}), /* @__PURE__ */ (0, $.jsx)(r, {
				variant: "secondary",
				size: "small",
				leadingIcon: h,
				onClick: () => n(t.id),
				children: G("manage:reviewEvidence.openOriginal")
			})]
		})]
	});
}
function Ft({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("button", {
			type: "button",
			"aria-label": G("manage:reviewEvidence.openCreator", { name: t }),
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${_}`,
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
				children: G("manage:reviewEvidence.videoCount", { count: n })
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
				children: G("manage:reviewEvidence.pendingPerson", { name: e.babepedia_name || G("manage:reviewEvidence.unlabeled") })
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, $.jsx)(i, {
					variant: "secondary",
					size: "small",
					trailingIcon: k,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: G("manage:reviewEvidence.sourceProfile")
				}) : null, /* @__PURE__ */ (0, $.jsx)(r, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: G("manage:reviewEvidence.viewAllVideos", { count: u })
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Mt, { url: e.preview_url }),
			l.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: G("manage:reviewEvidence.localSamples")
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
						"aria-label": G("manage:reviewEvidence.revealNamed", { name: e.name }),
						...P(o === e.id),
						onClick: () => a(e.id),
						children: G("manage:reviewEvidence.fileLocation")
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: G("manage:reviewEvidence.noLocalSamples")
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
	let [a, s] = (0, K.useState)(null), c = new Set(n), l = (e, n) => {
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
		children: [/* @__PURE__ */ (0, $.jsx)(oe, {
			prefix: /* @__PURE__ */ (0, $.jsx)("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: G("manage:reviewEvidence.selectedOfTotal", {
					count: c.size,
					total: t.length
				})
			}),
			actions: [{
				label: G("manage:shared.selectAll"),
				disabled: i,
				onPress: () => r(t.map((e) => e.id))
			}, {
				label: G("manage:reviewEvidence.clearSelection"),
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
						/* @__PURE__ */ (0, $.jsx)(e, { children: G(r ? "manage:reviewEvidence.assetSelected" : "manage:reviewEvidence.assetUnselected", { name: t.name || t.id }) })
					]
				}, t.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var Rt = F({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), zt = "flex min-h-6 min-w-0 items-center", Bt = 2, Vt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function Ht(e) {
	let { category: t, row: n, choice: i, onChoice: o, selected: c, onSelect: l, locked: u, busy: d, problem: ee, genreTags: re, onDecide: m, handlers: g, queueView: _ = "pending" } = e, y = (0, K.useRef)(!1), ie = Je(), b = t === "metadata_fields", x = te[t] || "", S = String(n.creator || "").trim(), C = !!x && !!S, w = ze(t, n), T = Ie(t, n), oe = Le(t, n), E = U(n), D = Re(n), O = ue(t, n), k = n.comparison_assets || [], se = n.preview_assets || [], ce = ae[n.decision || ""], M = k.length > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [k.slice(0, Bt).map((e) => /* @__PURE__ */ (0, $.jsx)(Pt, {
			asset: e,
			openItem: g.openItem
		}, e.id)), k.length > Bt ? /* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: G("manage:reviewCard.moreComparison", { count: k.length - Bt })
		}) : null]
	}) : C ? /* @__PURE__ */ (0, $.jsx)(Ft, {
		kind: x,
		name: S,
		works: Number(n.video_count || n.videos || 0),
		openEntity: g.openEntity,
		avatar: le(S, n.entity_id ? {
			id: n.entity_id,
			has_image: !!n.has_image,
			image_version: n.image_version,
			avatar_focus: n.avatar_focus
		} : null, null, x)
	}) : n.asset_id ? /* @__PURE__ */ (0, $.jsx)(Pt, {
		openItem: g.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, F = b ? /* @__PURE__ */ (0, $.jsx)(Dt, {
		row: n,
		fieldName: T,
		value: i.candidateKey,
		onChange: (e) => o({
			...i,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? se.length ? /* @__PURE__ */ (0, $.jsx)(Lt, {
		assets: se,
		picked: i.assets,
		locked: u,
		onPicked: (e) => o({
			...i,
			assets: e
		})
	}) : /* @__PURE__ */ (0, $.jsx)(ne, {
		size: "compact",
		icon: f,
		title: G("manage:reviewCard.noFramesTitle"),
		children: n.video_count ? G("manage:reviewCard.noFramesBody", { count: n.video_count }) : G("manage:reviewCard.noFramesBodyUncounted")
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ (0, $.jsx)(It, {
		row: n,
		openItem: g.openItem,
		openEntity: g.openEntity,
		onReveal: g.onReveal,
		revealing: g.revealing,
		note: g.revealNote
	}) : /* @__PURE__ */ (0, $.jsx)(Mt, { url: n.preview_url }), de = C ? M : T ? /* @__PURE__ */ (0, $.jsxs)("h4", {
		className: L(zt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			title: T,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ (0, $.jsx)(s, {
				variant: "caption",
				color: "neutral",
				children: T
			})
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			title: oe,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: oe
		})]
	}) : /* @__PURE__ */ (0, $.jsx)("h4", {
		className: zt,
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			title: w,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: w
		})
	}), fe = $e(), I = [];
	if (k.length <= 1) {
		if (C) I.push({
			id: "entity",
			label: S,
			icon: A,
			run: () => g.openEntity(x, S)
		});
		else if (n.asset_id) {
			let e = n.asset_id;
			I.push({
				id: "open",
				label: G("catalog:mediaActions.open"),
				icon: h,
				run: () => g.openItem(e)
			});
		}
	}
	u || (I.push(W(c, () => l(!1, !c))), _ !== "ignored" && I.push({
		id: "approve",
		label: G("manage:reviewDecision.approve"),
		icon: Be,
		disabled: d || !O,
		run: () => m("approved")
	}), I.push(_ === "pending" ? {
		id: "later",
		label: G("manage:reviewDecision.later"),
		icon: xe,
		disabled: d,
		run: () => m("skipped")
	} : {
		id: "restore",
		label: G("manage:reviewDecision.moveToPending"),
		icon: N,
		disabled: d,
		run: () => m("restore")
	}), _ !== "ignored" && I.push({
		id: "ignore",
		label: G("manage:shared.ignore"),
		icon: j,
		disabled: d,
		run: () => m("rejected")
	}));
	let pe = {
		key: n.item_key,
		operations: I
	};
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": w,
		"data-review-key": n.item_key,
		"data-rectangle-key": n.item_key,
		tabIndex: -1,
		className: L(Rt, Vt(t)),
		onContextMenu: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || fe.onContextMenu(e, pe);
		},
		onKeyDown: (e) => {
			e.target.closest("input, textarea, select, [contenteditable]") || fe.onKeyDown(e, pe);
		},
		children: [
			fe.menu,
			/* @__PURE__ */ (0, $.jsxs)("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ (0, $.jsx)("span", {
						className: L(zt, "shrink-0"),
						onPointerDownCapture: (e) => {
							y.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							y.current = e.shiftKey;
						},
						children: /* @__PURE__ */ (0, $.jsx)(a, {
							isSelected: c,
							"aria-label": G("manage:reviewCard.selectItem", { title: w }),
							onChange: (e) => l(y.current, e)
						})
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "min-w-0 flex-1",
						children: de
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
					ref: ie,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: G("manage:reviewCard.sourceSpelling", { name: n.source_name })
						}) : null,
						!C && (n.board || n.assets) ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: G("manage:reviewCard.comparisonFiles", { count: Number(n.video_count || n.assets || 0) })
						}) : null,
						!C && M ? M : null,
						b && (E || n.current_value !== void 0) ? /* @__PURE__ */ (0, $.jsxs)("div", {
							role: "region",
							"aria-label": G("manage:reviewCard.currentInfo"),
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: G("manage:reviewCard.currentValue")
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ (0, $.jsx)(s, {
										variant: "caption",
										color: "neutral",
										children: G("manage:reviewCard.manuallyConfirmed")
									}) : null]
								}),
								/* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? E : n.current_value ? /* @__PURE__ */ (0, $.jsx)(tt, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === i.candidateKey) || n.candidates?.[0])?.display_value
									}) : G("manage:reviewCard.noMetadata")
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ (0, $.jsx)("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: G(n.asset_path ? "manage:reviewCard.matchingFiles" : "manage:reviewCard.sameCodeFiles", { count: Number(n.videos) })
								})
							]
						}) : null,
						D.length || t === "creator_tags" ? /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: D.length ? D.map((e) => /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ (0, $.jsx)("small", {
								className: "text-body-2-regular text-text-secondary",
								children: G("manage:reviewCard.noPendingTags")
							})
						}) : null,
						b ? /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, $.jsxs)("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ (0, $.jsx)("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: G("manage:reviewCard.candidateSources")
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? G("manage:reviewCard.comparedToCurrent") : G("manage:reviewCard.sourceDifferences")
							}) : null]
						}) : null,
						F,
						/* @__PURE__ */ (0, $.jsx)(kt, {
							row: n,
							tags: re,
							locked: u,
							toast: g.toast
						}),
						!b && E ? /* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: E
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
						children: G("manage:shared.ignore")
					}),
					_ === "pending" ? /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => m("skipped"),
						children: G("manage:reviewDecision.later")
					}) : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: _ === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => m("restore"),
						children: G("manage:reviewDecision.moveToPending")
					}),
					_ === "ignored" ? null : /* @__PURE__ */ (0, $.jsx)(r, {
						variant: "primary",
						size: "small",
						disabled: u || !O,
						...P(d),
						title: O ? void 0 : G("manage:reviewCard.cannotApproveHint"),
						onClick: () => m("approved"),
						children: G(O ? "manage:reviewDecision.approve" : "manage:reviewCard.cannotApprove")
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
var Ut = "flex cursor-pointer items-center justify-between gap-2";
function Wt(e) {
	let t = qe("review").keys.filter(Ce), [n, i] = (0, K.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, K.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => i(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: a, openItem: o, openEntity: s, revealSource: c, toast: l, readOnly: d, readOnlyMessage: te, writerUrl: f } = e, [p, m] = (0, K.useState)(Ce(e.category) ? e.category : u), [h, g] = (0, K.useState)(() => Pe(e.queue)), [_, v] = (0, K.useState)("candidates"), [ae, C] = (0, K.useState)(""), [w, T] = (0, K.useState)(""), [oe, E] = (0, K.useState)(1), [O, k] = (0, K.useState)(20), [A, j] = (0, K.useState)(/* @__PURE__ */ new Set()), se = Ye(() => j(/* @__PURE__ */ new Set()));
	(0, K.useEffect)(() => {
		A.size && _e();
	}, [A]);
	let [ce, M] = (0, K.useState)(/* @__PURE__ */ new Map()), [le, N] = (0, K.useState)(/* @__PURE__ */ new Map()), [P, F] = (0, K.useState)(""), de = (0, K.useRef)(null), [fe, I] = (0, K.useState)(0), [L, ve] = (0, K.useState)(""), xe = (0, K.useRef)(!0);
	(0, K.useEffect)(() => () => {
		xe.current = !1;
	}, []);
	let z = Xe({
		queryKey: b,
		queryFn: ({ signal: e }) => ye(e)
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
	}, Te = Ne(we, h), Oe = z.data ? Object.fromEntries(S.map((e) => [e, ie.reduce((t, n) => t + Number(Ne(we, e).counts[n] || 0), 0)])) : void 0, B = Te.sections[p] || [], V = p === "metadata_fields", H = d;
	(0, K.useEffect)(() => {
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
	let Ae = (0, K.useMemo)(() => V ? Se(B, "field") : [], [B, V]), je = Ae.some((e) => e.key === w) ? w : "", U = (0, K.useMemo)(() => V ? be(B, "field", je) : B, [
		B,
		V,
		je
	]), Ie = (0, K.useMemo)(() => Me(U, V), [U, V]), W = Ie.some(([e]) => e === _) ? _ : "candidates", Le = (0, K.useMemo)(() => Se(U, W), [U, W]), Re = Le.some((e) => e.key === ae) ? ae : "", ze = (0, K.useMemo)(() => be(U, W, Re), [
		U,
		W,
		Re
	]), Be = (0, K.useMemo)(() => Fe(ze, oe, O), [
		ze,
		oe,
		O
	]), He = Be.rows.map((e) => e.item_key), Ue = new Set(He), Je = Le.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ue.has(e.item_key))
	})).filter((e) => e.rows.length), Qe = (0, K.useRef)(null), $e = (0, K.useRef)(null), tt = Ze(H ? void 0 : (e, t) => j((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])), {
		selecting: se,
		items: "[data-review-key]",
		start: ".review-grid"
	});
	(0, K.useLayoutEffect)(() => {
		let e = $e.current;
		if (!e || e.card.isConnected || ($e.current = null, document.activeElement !== document.body)) return;
		let t = [...Qe.current?.querySelectorAll("[data-review-key]") ?? []];
		(e.following.map((e) => t.find((t) => t.dataset.reviewKey === e)).find(Boolean) ?? t[0] ?? Qe.current)?.focus();
	});
	let q = (e) => ce.get(e.item_key) || ge(e), nt = (0, K.useMemo)(() => B.filter((e) => A.has(e.item_key)), [B, A]), rt = (e) => {
		let t = new Set(e);
		j((e) => new Set([...e].filter((e) => !t.has(e)))), M((e) => new Map([...e].filter(([e]) => !t.has(e)))), N((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, J = (e, t) => N((n) => new Map(n).set(e, t)), it = () => {
		$e.current = null, v("candidates"), C(""), T(""), E(1), j(/* @__PURE__ */ new Set()), M(/* @__PURE__ */ new Map()), N(/* @__PURE__ */ new Map()), F(""), de.current = null;
	}, at = (e) => {
		m(e), it(), a({
			category: e === "metadata_fields" ? "" : e,
			queue: h === "pending" ? "" : h
		});
	}, ot = (e) => {
		g(e), it(), a({
			category: p === "metadata_fields" ? "" : p,
			queue: e === "pending" ? "" : e
		});
	}, Y = Ke({
		mutationFn: ({ row: e, status: t, category: n }) => Ge(me(n, pe(n, e), t, q(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			if (!e.ok) {
				J(t.item_key, e.error || G("manage:reviewPage.decisionRejected"));
				return;
			}
			let i = document.activeElement?.closest("[data-review-key]");
			if (i?.dataset.reviewKey === t.item_key && Qe.current?.contains(i)) {
				let e = [...Qe.current.querySelectorAll("[data-review-key]")], t = e.indexOf(i), n = [...e.slice(t + 1), ...e.slice(0, t).reverse()].map((e) => e.dataset.reviewKey);
				$e.current = {
					card: i,
					following: n
				};
			}
			We(r, [t.item_key], n), rt([t.item_key]), l(he(n));
		},
		onError: (e, { row: t }) => J(t.item_key, R(e))
	}), X = Ke({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!xe.current) break;
				F(G("manage:reviewPage.processingProgress", {
					current: a,
					total: n.length
				}));
				try {
					let n = await Ge(me(t, pe(t, o), e, q(o)));
					if (!n.ok) throw Error(n.error || G("manage:reviewPage.itemNotAccepted"));
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
			We(t, n, e), rt(n), r.forEach(([e, t]) => J(e, t)), F("");
		},
		onError: (e) => {
			F(R(e));
		}
	}), Z = {
		receipt: l,
		failure: (e) => F(R(e))
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
				if (e === "approved" && V && n.some((e) => !q(e).candidateKey)) throw Error(G("manage:reviewPage.chooseSourceFirst"));
				return F(""), {
					title: t,
					body: G(`manage:reviewPage.confirm.${e}`, { count: n.length })
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
				let i = p, a = t.filter((e) => r.includes(e.item_key)), o = e === "restore" ? st[h] : "restore";
				return async () => {
					for (let e of a) await Ge(me(i, pe(i, e), o, q(e)));
					await ke.invalidateQueries({ queryKey: b });
				};
			},
			receipt: () => G({
				approved: "manage:reviewPage.approvedCount",
				rejected: "manage:reviewPage.ignoredCount",
				skipped: "manage:reviewPage.laterCount",
				restore: "manage:reviewPage.pendingCount"
			}[e], { count: n.done.length }) + (n.failures.length ? G("manage:reviewPage.notCompletedSuffix", { count: n.failures.length }) : "")
		};
	}, ct = nt.every((e) => ue(p, e)), lt = [
		...h === "ignored" ? [] : [Q("rejected", G("manage:reviewToolbar.ignoreSelected"))],
		h === "pending" ? Q("skipped", G("manage:reviewToolbar.laterSelected")) : Q("restore", G("manage:reviewToolbar.restoreSelected")),
		...h === "ignored" ? [] : [Q("approved", G("manage:reviewToolbar.approveSelected"))]
	].map((e) => ({
		action: e,
		items: nt,
		host: Z,
		variant: e.key === "approved" || h === "ignored" && e.key === "restore" ? "primary" : void 0,
		disabled: X.isPending || Y.isPending || e.key === "approved" && !ct
	})), ut = (e) => {
		M((t) => {
			let n = new Map(t);
			for (let t of nt) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...q(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), F(G("manage:reviewPage.sourceChosen", { source: e }));
	}, dt = async (e) => {
		if (fe) return;
		I(e), ve("");
		let t = await c(e);
		xe.current && (I(0), ve(t));
	}, ft = De(we.mirror, te), pt = we.genre_tags || [], mt = {
		openItem: o,
		openEntity: s,
		onReveal: dt,
		revealing: fe,
		revealNote: L,
		toast: l
	};
	return /* @__PURE__ */ (0, $.jsx)(et, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			H ? /* @__PURE__ */ (0, $.jsx)(y, {
				tone: "warning",
				title: G("manage:reviewPage.readOnly"),
				extra: f ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ (0, $.jsx)(re, {
						href: f,
						children: G("manage:reviewPage.goToPrimary")
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
						children: G("manage:reviewPage.categories")
					}), /* @__PURE__ */ (0, $.jsx)(D, {
						group: "review",
						label: G("manage:reviewPage.categories"),
						value: p,
						onChange: at,
						orientation: n ? "horizontal" : "vertical",
						panelPrefix: "review",
						sectionItems: !0,
						className: "",
						itemClassName: Ut,
						disabled: Y.isPending || X.isPending,
						tabs: ie.map((e) => {
							let t = Number(Te.counts[e] || 0);
							return {
								value: e,
								label: x[e],
								badge: t ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: t.toLocaleString()
								}) : null
							};
						})
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: Qe,
					role: "tabpanel",
					id: `review-panel-${p}`,
					"aria-labelledby": `review-tab-${p}`,
					tabIndex: -1,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, $.jsx)(gt, {
							queueView: h,
							queueCounts: Oe,
							onQueueChange: ot,
							locked: H,
							fields: Ae,
							fieldFilter: je,
							onFieldFilter: (e) => {
								T(e), C(""), E(1);
							},
							groupOptions: Ie,
							groupBy: W,
							onGroupBy: (e) => {
								v(e), C(""), E(1);
							},
							groups: Le,
							filter: Re,
							onFilter: (e) => {
								C(e), E(1);
							},
							pageKeys: He,
							allKeys: ze.map((e) => e.item_key),
							selected: A,
							onSelected: j,
							selectedRows: nt,
							metadata: V,
							busy: X.isPending || Y.isPending,
							feedback: P,
							onUnifySource: ut,
							actions: lt
						}),
						Be.rows.length ? /* @__PURE__ */ (0, $.jsx)("div", {
							"data-rectangle-gutter": "",
							...tt,
							className: "flex flex-col gap-5",
							children: Je.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
								"data-rectangle-gap": "",
								className: "flex flex-col gap-3",
								children: [Je.length > 1 || W !== "candidates" ? /* @__PURE__ */ (0, $.jsxs)("div", {
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
										children: e.rows.every((e) => A.has(e.item_key)) ? G("manage:reviewPage.clearGroup") : G("manage:reviewPage.selectGroup")
									})]
								}) : null, /* @__PURE__ */ (0, $.jsx)("div", {
									className: "review-grid gap-5",
									children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Ht, {
										category: p,
										row: e,
										queueView: h,
										choice: q(e),
										onChoice: (t) => M((n) => new Map(n).set(e.item_key, t)),
										selected: A.has(e.item_key),
										onSelect: (t, n) => j((r) => {
											let i = new Set(r);
											return de.current = Ve(i, He, de.current, e.item_key, t, n), i;
										}),
										locked: H,
										busy: X.isPending || Y.isPending && Y.variables?.row.item_key === e.item_key,
										problem: le.get(e.item_key) || "",
										genreTags: pt,
										onDecide: (t) => {
											Y.isPending || X.isPending || (N((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Y.mutate({
												row: e,
												status: t,
												category: p
											}));
										},
										handlers: mt
									}, e.item_key))
								})]
							}, e.key))
						}) : z.isError && !z.data ? /* @__PURE__ */ (0, $.jsx)(y, {
							tone: "error",
							title: G("manage:reviewPage.queueLoadFailed"),
							action: /* @__PURE__ */ (0, $.jsx)(r, {
								variant: "secondary",
								size: "small",
								disabled: z.isFetching,
								onClick: () => void z.refetch(),
								children: G("manage:shared.retryNow")
							}),
							children: R(z.error)
						}) : /* @__PURE__ */ (0, $.jsx)(ne, {
							icon: Ee,
							title: G({
								pending: "manage:reviewPage.emptyPending",
								later: "manage:reviewPage.emptyLater",
								ignored: "manage:reviewPage.emptyIgnored"
							}[h]),
							actions: ie.some((e) => e !== p && Number(Te.counts[e] || 0) > 0) ? /* @__PURE__ */ (0, $.jsx)(r, {
								size: "small",
								onClick: () => {
									let e = t.find((e) => e !== p && Number(Te.counts[e] || 0) > 0);
									e && at(e);
								},
								children: G("manage:reviewPage.viewOtherCategories")
							}) : void 0,
							children: G(h === "pending" ? "manage:reviewPage.switchCategoryHint" : h === "later" ? "manage:reviewPage.laterKeptHint" : "manage:reviewPage.ignoredKeptHint")
						}),
						ze.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
							label: G("manage:reviewPage.footerLabel"),
							total: ze.length,
							pagination: {
								pageIndex: Be.page - 1,
								pageSize: O
							},
							onChange: (e) => {
								E(e.pageIndex + 1), k(e.pageSize);
							}
						}) : null,
						V && h === "pending" ? /* @__PURE__ */ (0, $.jsx)(ht, {
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
export { Wt as ReviewPage };

//# debugId=bb5260d6-1149-4743-9248-9c0a94c23daf