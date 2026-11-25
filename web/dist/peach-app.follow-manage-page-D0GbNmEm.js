(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1b170e98-9395-480f-bdad-6a7daa68ccc2", e._sentryDebugIdIdentifier = "sentry-dbid-1b170e98-9395-480f-bdad-6a7daa68ccc2");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, ActivityStatus as l, Button as u, ButtonLink as d, Bx as f, COLUMN_SORT as p, Checkbox as m, ChevronSortDown as h, Chip as g, CollapseChevron as _, CollapseRegion as v, ColumnFilterAvatar as y, ColumnFilterChips as b, Ct as x, DataTableFooter as ee, DataTableFrame as S, DataTableSort as C, EmptyFocusButton as w, EmptyState as T, ErrorText as te, ExternalLink as E, FEEDS_KEY as D, FOLLOW_CHECK_KEY as ne, FOLLOW_CHECK_TASK as O, FOLLOW_CREDENTIALS_KEY$1 as re, FOLLOW_MANAGE_KEY as k, FOLLOW_MANAGE_NAV as A, FOLLOW_RESOLVE_KEY as j, FieldLabel as M, Gg as N, H7 as ie, Help as P, Input as F, InputBase as ae, LAYOUTS as I, LEGACY_AVATAR_IMG as L, LinkButton as R, M6 as oe, MENU_ITEM as z, MENU_ITEM_INTERACTIVE as se, MENU_POPOVER_SURFACE as ce, ModalFrame as B, Note as V, OV as H, P7 as U, SORT_DEFAULT_DIR as le, SORT_OPTIONS as ue, STAT_STRIP_SIX as W, Select as de, SelectItem as fe, SelectionDock as pe, SelectionPopover as me, SiteIcon as he, SiteLabel as ge, SortDirectionIcon as _e, SortableBoardTabs as ve, Switch as G, Table as ye, TableColumnControls as be, TableColumnResizer as xe, TableSelectionHeader as Se, TaskProgress as Ce, Un as we, Wt as K, Xf as Te, __toESM as Ee, activityKind as De, addAlias as Oe, addSource as ke, apiGet as Ae, authorGroups as je, authorName as Me, avatarInner as Ne, busyProps as q, cardClass as Pe, checkEvidenceGap as Fe, checkFailures as Ie, checkFeeds as Le, checkReceipt as Re, checkSummary as ze, checkedText as Be, clickedBlank as Ve, codedText as He, columnOrderingFeature as Ue, columnVisibilityFeature as We, composingKey as Ge, confirmModal as Ke, createColumnHelper as qe, createPaginatedRowModel as J, createSortedRowModel as Je, credentialDone as Ye, cx as Xe, dZ as Ze, dropSources as Qe, du as $e, enterPageSelection as et, errorHeadline as tt, errorMessage as Y, exitPageSelection as nt, feedIntervalText as rt, fetchCheckJob as it, fetchCredentials as at, fetchFeeds as ot, fetchFollow as st, fetchResolveJob as ct, fetchSuggestions as lt, flexRender as ut, followFeedPages as dt, groupByAuthor as ft, isBroken as pt, isLayout as mt, jobText as ht, joinList as gt, keepSelected as _t, l7 as vt, localTime as yt, lookupFeedActor as bt, mapLimit as xt, markAllPending as St, pageSizeOf as Ct, pageWindow as wt, patchSource as Tt, pv as Et, queryClient as Dt, quoted as Ot, reloadFollowManage as kt, removeAlias as At, removeFeed as jt, removeSource as Mt, renameAliasGroup as Nt, require_jsx_runtime as Pt, require_react as Ft, resolveFollowSort as It, rowPaginationFeature as Lt, rowSelectionFeature as Rt, rowSelectionOperation as zt, rowSortingFeature as Bt, runBulkAction as Vt, selectionState as Ht, serverLabel as Ut, setFeedEnabled as Wt, setSourceEnabled as Gt, skeletonHtml as Kt, sortLabel as qt, startCheck as Jt, startResolve as Yt, statusText as Xt, suggestFeedActors as Zt, t as X, tableFeatures as Qt, tableRows as $t, th as en, toggleGroup as tn, unmarkItems as nn, useAction as rn, useBackgroundJob as an, useMutation as on, usePageSelection as sn, useQuery as cn, useRectangleSelection as ln, useRememberedPageSize as un, useRememberedPagination as dn, useRowWorkContext as fn, useTable as pn, useTableFilters as mn, useTablePreferences as hn, useTableSelection as gn, useWorkContextMenu as _n, utcDate as vn } from "./peach-app.js";
import { Page as yn } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as bn, ErrorLine as xn, FeedPageAlias as Sn, SourceIcon as Cn, SourceLink as wn, StatusBadge as Tn } from "./peach-app.source-view-D-Xir163.js";
// src/react/follow-manage/follow-search.tsx
var Z = /* @__PURE__ */ Ee(Ft(), 1), Q = Pt(), En = Xe(z, se, "text-body-2-medium"), Dn = (e, t) => `${e}-${encodeURIComponent(JSON.stringify([t.group, t.value]))}`;
function On({ field: e, menu: n, id: r, options: i, active: a, busy: o, failed: s, label: c, kind: u, onPick: d, onClose: f }) {
	return (0, Z.useEffect)(() => {
		let e = n.current, t = a && document.getElementById(a);
		if (!e || !t) return;
		let r = e.getBoundingClientRect(), i = t.getBoundingClientRect();
		i.top < r.top ? e.scrollTop += i.top - r.top : i.bottom > r.bottom && (e.scrollTop += i.bottom - r.bottom);
	}, [n, a]), /* @__PURE__ */ (0, Q.jsxs)(t, {
		ref: n,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		"data-follow-suggest-popover": "",
		onOpenChange: (e) => {
			e || f();
		},
		shouldCloseOnInteractOutside: (e) => !e.closest("[data-copy-editor]"),
		placement: "bottom start",
		offset: 4,
		className: Xe(ce, "w-(--trigger-width) overscroll-contain"),
		children: [i.length ? null : o ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			"data-copy-key": "follow.addCreatorSource.findingSuggestions",
			children: /* @__PURE__ */ (0, Q.jsx)(l, {
				kind: "radar",
				label: X("follow:addCreatorSource.findingSuggestions")
			})
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			role: "status",
			className: "px-2 py-1.5 text-caption-1-regular text-text-tertiary",
			"data-copy-key": s ? "follow.addCreatorSource.suggestionsFailed" : "follow.addCreatorSource.noSuggestions",
			children: X(s ? "follow:addCreatorSource.suggestionsFailed" : "follow:addCreatorSource.noSuggestions")
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			id: r,
			role: "listbox",
			"aria-label": c,
			"aria-busy": o || void 0,
			className: "flex flex-col gap-1",
			children: i.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group && e.group !== i[t - 1]?.group ? /* @__PURE__ */ (0, Q.jsx)("div", {
				role: "presentation",
				className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
				children: e.group
			}) : null, /* @__PURE__ */ (0, Q.jsxs)("button", {
				type: "button",
				id: Dn(r, e),
				role: "option",
				tabIndex: -1,
				"data-copy-interact": "",
				"aria-selected": Dn(r, e) === a,
				className: Dn(r, e) === a ? Xe(En, "bg-background-secondary-default") : En,
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => d(e.value),
				children: [
					e.portrait ? /* @__PURE__ */ (0, Q.jsx)(y, {
						kind: u,
						person: {
							...e.portrait,
							name: e.value
						}
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 grow truncate text-left",
						children: e.value
					}),
					e.matched ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "shrink-0 text-caption-1-regular text-text-tertiary",
						children: e.matched
					}) : null,
					e.n ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
						children: e.n.toLocaleString()
					}) : null
				]
			})] }, Dn(r, e)))
		})]
	});
}
function kn({ label: e, placeholder: t, suggestionsLabel: n, value: r, setValue: i, search: a, suggest: o, kind: s, readOnly: c, busy: l, actions: d, suggestOnline: f }) {
	let [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(!1), [_, v] = (0, Z.useState)(null), [y, b] = (0, Z.useState)(), [x, ee] = (0, Z.useState)(""), S = (0, Z.useId)(), C = (0, Z.useRef)(null), w = (0, Z.useRef)(null), T = r.trim();
	(0, Z.useEffect)(() => {
		if (p || !T || T.includes("/")) {
			ee("");
			return;
		}
		let e = setTimeout(() => ee(T), 250);
		return () => clearTimeout(e);
	}, [T, p]);
	let te = !!T && !T.includes("/") && !p && !l && !c, E = te && x === T, D = te && h && _ !== r, ne = cn({
		queryKey: [
			"follow-manage",
			"search-suggestions",
			s,
			x
		],
		queryFn: ({ signal: e }) => o(x, e),
		enabled: E && D,
		retry: !1
	}), O = cn({
		queryKey: [
			"follow-manage",
			"online-performers",
			x
		],
		queryFn: ({ signal: e }) => f(x, e),
		enabled: !!f && E && D && x.length >= (/^[ -~]+$/.test(x) ? 3 : 2),
		staleTime: 3e5,
		retry: !1
	}), re = E ? ne.data ?? [] : [], k = new Set(re.map((e) => e.value.toLocaleLowerCase())), A = E ? [...re, ...(O.data ?? []).filter((e) => !k.has(e.value.toLocaleLowerCase()))] : [], j = !E || ne.isFetching || O.isFetching, M = D ? A.findIndex((e) => Dn(S, e) === y) : -1, N = A[M], ie = () => {
		b(void 0), v(r);
	}, P = (e) => {
		let t = e.trim();
		!t || c || l || p || (b(void 0), v(t), i(t), a(t));
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-busy": l || void 0,
		className: "flex flex-wrap items-end gap-2",
		onSubmit: (e) => {
			e.preventDefault(), P(r);
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				ref: C,
				className: "min-w-0 flex-1 basis-64",
				onFocus: () => g(!0),
				onBlur: (e) => {
					let t = e.relatedTarget;
					e.currentTarget.contains(t) || w.current?.contains(t) || t?.closest("[data-copy-editor]") || (g(!1), b(void 0));
				},
				children: [/* @__PURE__ */ (0, Q.jsx)(ae, {
					role: "combobox",
					"aria-label": e,
					"aria-autocomplete": "list",
					"aria-expanded": D,
					"aria-controls": D ? S : void 0,
					"aria-activedescendant": N ? y : void 0,
					placeholder: t,
					value: r,
					leadingIcon: Et,
					enterKeyHint: "search",
					disabled: c,
					onChange: (e) => {
						b(void 0), v(null), i(e.currentTarget.value);
					},
					onCompositionStart: () => {
						m(!0), b(void 0);
					},
					onCompositionEnd: (e) => {
						m(!1), i(e.currentTarget.value);
					},
					onKeyDown: (e) => {
						if (!(p || Ge(e.nativeEvent))) {
							if (e.key === "Escape" && D) e.preventDefault(), e.stopPropagation(), ie();
							else {
								if ((e.key === "ArrowDown" || e.key === "ArrowUp") && te) {
									if (e.preventDefault(), v(null), !D || !A.length) return;
									let t = M + (e.key === "ArrowDown" ? 1 : -1), n = A[t < 0 ? A.length - 1 : t % A.length];
									b(Dn(S, n));
								}
								e.key === "Enter" && (e.preventDefault(), P(N?.value || r));
							}
						}
					}
				}), D ? /* @__PURE__ */ (0, Q.jsx)(On, {
					field: C,
					menu: w,
					id: S,
					options: A,
					active: y,
					busy: j,
					failed: ne.isError || O.isError,
					label: n,
					kind: s,
					onPick: P,
					onClose: ie
				}) : null]
			}),
			d,
			/* @__PURE__ */ (0, Q.jsx)(u, {
				type: "submit",
				variant: "primary",
				disabled: c || !T,
				...q(l),
				children: X("follow:shared.search")
			})
		]
	});
}
// src/react/follow-manage/search-results.tsx
var An = Qt({ rowSelectionFeature: Rt }), jn = qe(), Mn = jn.columns([
	jn.display({
		id: "select",
		cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(m, {
			slot: null,
			"aria-label": X("follow:shared.selectNamed", { name: `${e.original.providerLabel} · ${e.original.selectionName ?? e.original.name}` }),
			isSelected: e.getIsSelected(),
			isDisabled: !e.getCanSelect(),
			onChange: (t) => e.toggleSelected(t)
		})
	}),
	jn.display({
		id: "name",
		header: () => X("follow:searchResults.name"),
		cell: ({ row: { original: e } }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(y, {
				size: "medium",
				person: {
					...e.portrait,
					name: e.name,
					source_avatar_url: e.avatar ?? void 0
				}
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-medium wrap-anywhere text-text-primary",
					children: e.name
				}), e.details ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "text-caption-1-regular wrap-anywhere text-text-secondary",
					children: e.details
				}) : null]
			})]
		})
	}),
	jn.display({
		id: "provider",
		header: () => X("follow:searchResults.source"),
		cell: ({ row: { original: e } }) => /* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 whitespace-nowrap",
			children: [e.provider === "javdb" || e.provider === "dmm" ? /* @__PURE__ */ (0, Q.jsx)(he, { site: e.provider }) : /* @__PURE__ */ (0, Q.jsx)(Cn, { provider: e.provider }), e.providerLabel]
		})
	}),
	jn.display({
		id: "address",
		header: () => X("follow:searchResults.address"),
		cell: ({ row: { original: { url: e } } }) => /* @__PURE__ */ (0, Q.jsx)(R, {
			href: e,
			target: "_blank",
			rel: "noopener noreferrer",
			size: "small",
			trailingIcon: K,
			title: e,
			"aria-label": e,
			className: "min-w-0 justify-start [&>span]:min-w-0",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-middle-truncate": "",
				className: "block truncate",
				children: e.replace(/^https?:\/\//, "")
			})
		})
	})
]);
function Nn({ label: e, items: t, onPick: s }) {
	let c = Object.fromEntries(t.filter((e) => e.picked).map((e) => [e.id, !0])), l = pn({
		features: An,
		data: t,
		columns: Mn,
		getRowId: (e) => e.id,
		state: { rowSelection: c },
		enableRowSelection: (e) => e.original.selectable !== !1,
		onRowSelectionChange: (e) => {
			let n = typeof e == "function" ? e(c) : e;
			for (let e of t) {
				let t = !!n[e.id];
				e.selectable !== !1 && t !== !!c[e.id] && s?.(e.id, t);
			}
		}
	}), u = t.some((e) => e.selectable !== !1);
	return /* @__PURE__ */ (0, Q.jsx)(S, {
		follow: !0,
		onRowClick: s ? (e) => l.getRow(e).toggleSelected() : void 0,
		onRectangle: s && u ? (e, t) => l.setRowSelection({
			...t ? c : {},
			...Object.fromEntries(e.map((e) => [e, !0]))
		}) : void 0,
		children: /* @__PURE__ */ (0, Q.jsxs)(ye, {
			"aria-label": e,
			size: "sm",
			className: "min-w-144 table-fixed",
			children: [/* @__PURE__ */ (0, Q.jsx)(o, { children: l.getHeaderGroups()[0].headers.filter((e) => s || e.id !== "select").map((t) => /* @__PURE__ */ (0, Q.jsx)(r, {
				id: t.id,
				isRowHeader: t.id === "name",
				className: t.id === "select" ? "w-12" : t.id === "provider" ? "w-36" : t.id === "address" ? "w-52" : void 0,
				children: t.id === "select" ? /* @__PURE__ */ (0, Q.jsx)(Se, {
					table: l,
					label: X("shell:dataTable.selectAll", { label: e }),
					disabled: !u
				}) : /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-semibold",
					children: ut(t.column.columnDef.header, t.getContext())
				})
			}, t.id)) }), /* @__PURE__ */ (0, Q.jsx)(n, { children: l.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(i, {
				id: e.id,
				"data-board-selected": e.getIsSelected() || void 0,
				"data-rectangle-disabled": !e.getCanSelect() || void 0,
				children: e.getAllCells().filter((e) => s || e.column.id !== "select").map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: ut(e.column.columnDef.cell, e.getContext()) }, e.id))
			}, e.id)) })]
		})
	});
}
// src/react/follow-manage/add-source.tsx
var Pn = X("follow:addCreatorSource.placeholder"), Fn = X("follow:addCreatorSource.title"), In = X("follow:addCreatorSource.searchingByName"), Ln = X("follow:addCreatorSource.recognizing"), Rn = X("follow:addCreatorSource.noSourceFound"), zn = "/settings/subscriptions", Bn = (e, t) => `${e}:${t.url}`;
async function Vn(e, t) {
	let { groups: n } = await lt(e, t);
	return n.flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: Ut(t.matched_code ?? "", t.matched || ""),
		n: t.n,
		group: Ut(e.label_code ?? "", e.label),
		portrait: e.kind === "tag" ? void 0 : { source_avatar_url: t.avatar_url ?? void 0 }
	})));
}
function Hn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider)).length, a = i === r.length ? X("follow:addCreatorSource.allSources") : X("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Q.jsx)(me, {
		label: X("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: c,
		empty: X("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider,
			selected: !t.has(e.provider),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(Cn, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: X("follow:shared.selectAll"),
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: X("follow:shared.selectNone"),
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider)))
			},
			{
				label: X("follow:addCreatorSource.credentialSettings"),
				href: zn
			}
		]
	});
}
function Un({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(V, {
		tone: "error",
		title: e.line,
		children: ht(e, "error") || X("follow:addCreatorSource.searchFailed")
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider)), o = (e.external_searches || []).filter((e) => !n.has(e.provider)), s = Object.entries(e.failures || {}), c = s.filter(([e]) => !n.has(e) && !o.some((t) => t.provider === e)), l = e.candidates?.length || e.external_searches?.length || s.length, u = (t, n) => Ut(e.failure_codes?.[t]?.code ?? "", n, e.failure_codes?.[t]?.params);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? /* @__PURE__ */ (0, Q.jsx)(Nn, {
				label: X("follow:addCreatorSource.results"),
				items: a.map((e) => {
					let n = Bn(t, e);
					return {
						id: n,
						name: He(e, "label"),
						provider: e.provider,
						providerLabel: e.provider_label,
						url: e.url,
						avatar: e.avatar_url,
						selectable: !e.known,
						picked: !e.known && !r.has(n),
						details: e.known ? X("follow:addCreatorSource.alreadyFollowing") : He(e, "evidence")
					};
				}),
				onPick: i
			}) : null,
			!a.length && !o.length && !c.length ? /* @__PURE__ */ (0, Q.jsx)(P, { children: l ? X("follow:searchResults.hiddenByFilter") : Rn }) : null,
			o.map((t) => {
				let n = e.failures?.[t.provider];
				return /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: n ? u(t.provider, n) : He(t, "evidence") }), /* @__PURE__ */ (0, Q.jsx)(E, {
						href: t.url,
						children: X("follow:shared.labeled", {
							label: He(t, "label"),
							value: t.query
						})
					})]
				}, t.url);
			}),
			c.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(P, { children: X("follow:shared.labeled", {
				label: e,
				value: u(e, t)
			}) }, e))
		]
	});
}
function Wn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(/* @__PURE__ */ new Set()), [d, f] = (0, Z.useState)(/* @__PURE__ */ new Set()), [p, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(0), { job: _, running: v, outcome: y, start: b, dismiss: x } = an({
		queryKey: j,
		queryFn: ({ signal: e }) => ct(e),
		start: (e) => Yt([e]),
		onStarted: () => f(/* @__PURE__ */ new Set()),
		onError: (e) => m(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && m(ht(e, "error") || X("follow:addCreatorSource.searchFailed"));
		}
	}), ee = (e) => {
		n || v || b.isPending || (m(""), s(e), a(e), b.mutate(e));
	}, S = y?.results || [], C = S.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !c.has(e.provider)).map((e) => ({
		candidate: e,
		key: Bn(t, e)
	})).filter((e) => !d.has(e.key))), w = on({
		mutationFn: async (e) => {
			let t = [], n = [];
			g(0);
			for (let r of e) {
				try {
					let e = await ke(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(X("follow:shared.labeled", {
						label: r.candidate.label,
						value: Y(e)
					}));
				}
				g((e) => e + 1);
			}
			if (n.length) try {
				await Jt(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			kt(), e.failures.length ? m(gt(e.failures)) : (m(""), x(), r(X("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => m(Y(e))
	}), T = e.suggestions || [], te = !o.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Fn,
		className: Pe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Fn
			}),
			/* @__PURE__ */ (0, Q.jsx)(kn, {
				label: X("follow:addCreatorSource.inputLabel"),
				placeholder: Pn,
				suggestionsLabel: X("follow:addCreatorSource.suggestions"),
				value: i,
				setValue: a,
				search: ee,
				kind: "creator",
				suggest: Vn,
				readOnly: n,
				busy: v || b.isPending,
				actions: /* @__PURE__ */ (0, Q.jsx)(Hn, {
					credentials: t,
					hidden: c,
					onHidden: l
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [v || b.isPending ? /* @__PURE__ */ (0, Q.jsx)(Ce, {
					embedded: !0,
					kind: De("follow-resolve"),
					label: ht(_) || (_?.total ? X("follow:addCreatorSource.searchProgress", {
						checked: _.checked || 0,
						count: _.total
					}) : te ? In : Ln),
					value: _?.checked,
					total: _?.total
				}) : null, p ? /* @__PURE__ */ (0, Q.jsx)(V, {
					tone: "error",
					title: X("follow:addJavFeed.notCompleted"),
					children: p
				}) : null]
			}),
			S.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:addCreatorSource.results") }),
					S.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(Un, {
						row: e,
						at: t,
						hidden: c,
						unpicked: d,
						onPick: (e, t) => f((n) => {
							let r = new Set(n);
							return t ? r.delete(e) : r.add(e), r;
						})
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(u, {
								variant: "secondary",
								size: "small",
								onClick: () => x(),
								children: X("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Q.jsx)(u, {
								variant: "primary",
								size: "small",
								disabled: n || !C.length,
								...q(w.isPending),
								onClick: () => w.mutate(C),
								children: X("follow:addCreatorSource.addSelected", { count: C.length })
							}),
							w.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: X("follow:addCreatorSource.addingProgress", {
									added: h,
									count: C.length
								})
							}) : null
						]
					})
				]
			}) : null,
			T.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: X("follow:addCreatorSource.suggested")
				}), T.map((e) => /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? X("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : X("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => ee(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Gn = X("follow:addJavFeed.placeholder"), Kn = X("follow:addJavFeed.title");
function qn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let { owner: e } of t) e && n.set(e.id, e.name);
	if (n.size > 1) return {
		text: X("follow:addJavFeed.cardsSplitAcrossPeople", { names: gt([...n.values()]) }),
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: X("follow:addJavFeed.willAddUnder", { name: r }),
		blocked: !1
	} : e.known ? {
		text: X("follow:addJavFeed.willAddUnderKnown", { name: e.known.name }),
		blocked: !1
	} : {
		text: X("follow:addJavFeed.willCreate", { name: e.q }),
		blocked: !1
	};
}
async function Jn(e, t) {
	let n = new URLSearchParams({
		q: e,
		kind: "performer",
		limit: "8"
	}), { groups: r } = await Ae(`/api/suggest?${n}`, t);
	return r.flatMap((e) => e.items.map((e) => ({
		group: X("follow:addJavFeed.librarySuggestions"),
		value: e.value,
		matched: e.matched,
		portrait: {
			...e,
			id: e.entity_id
		}
	})));
}
async function Yn(e, t) {
	let { items: n } = await Zt(e, t);
	return n.map((e) => ({
		group: X("follow:addJavFeed.onlineSuggestions"),
		value: e.name,
		matched: e.provider,
		portrait: {
			source_avatar_url: e.avatar_url,
			name: e.name
		}
	}));
}
function Xn({ name: e, names: t, record: n, subscription: r }) {
	let i = t.filter((t) => t !== e), a = X(r === "enabled" ? "follow:addJavFeed.sourceSubscribed" : r === "paused" ? "follow:shared.paused" : "follow:addJavFeed.sourceNotSubscribed");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-x-2 gap-y-1",
		children: [
			i.length ? /* @__PURE__ */ (0, Q.jsx)(Sn, { name: gt(i) }) : null,
			n ? /* @__PURE__ */ (0, Q.jsx)(g, {
				variant: "caption",
				color: "neutral",
				children: n
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(g, {
				variant: "caption",
				color: r === "enabled" ? "lime" : "neutral",
				children: a
			})
		]
	});
}
function Zn(e, t) {
	let n = e.known, r = new Map((n?.sources || []).map((e) => [e.url, e])), i = [], a = [], o = [...e.candidates.map((e) => ({
		...e,
		provider: "javdb",
		providerLabel: "JavDB"
	})), ...(e.dmm_candidates ?? []).map((e) => ({
		...e,
		provider: "dmm",
		providerLabel: "DMM",
		record: ""
	}))];
	for (let e of o) {
		let o = `${e.provider}:${e.id}`, s = e.held_by?.name || e.names[0] || e.id, c = e.names.length ? e.names : r.get(e.url)?.names || [];
		(r.delete(e.url) || n && e.held_by?.id === n.id ? i : a).push({
			id: o,
			sourceId: e.id,
			owner: e.held_by ?? void 0,
			name: s,
			selectionName: [c[0] || s, e.record].filter(Boolean).join(" · "),
			provider: e.provider,
			providerLabel: e.providerLabel,
			url: e.url,
			avatar: e.avatar_url,
			portrait: e.portrait ?? void 0,
			selectable: e.subscription !== "enabled",
			picked: e.subscription === "enabled" || t.has(o),
			details: /* @__PURE__ */ (0, Q.jsx)(Xn, {
				name: s,
				names: c,
				record: e.record,
				subscription: e.subscription
			})
		});
	}
	if (n) for (let e of r.values()) {
		let r = `${e.provider}:${e.id}`;
		i.push({
			...e,
			id: r,
			sourceId: e.id,
			owner: n,
			name: n.name,
			selectionName: e.names[0] || e.id,
			portrait: n.portrait,
			providerLabel: e.provider === "dmm" ? "DMM" : "JavDB",
			selectable: e.subscription !== "enabled",
			picked: e.subscription === "enabled" || t.has(r),
			details: /* @__PURE__ */ (0, Q.jsx)(Xn, {
				name: n.name,
				names: e.names,
				subscription: e.subscription
			})
		});
	}
	return [...i, ...a];
}
function Qn({ readOnly: e, toast: t, onAdded: n, initialName: r = "" }) {
	let [i, a] = (0, Z.useState)(r), [o, s] = (0, Z.useState)(null), [c, l] = (0, Z.useState)(/* @__PURE__ */ new Set()), d = rn(), f = (0, Z.useRef)(null), p = (0, Z.useRef)(""), m = (e) => {
		s(null), l(/* @__PURE__ */ new Set()), d.run("lookup", (t) => bt(e, t), (e) => {
			s(e);
			let t = new Set(e.suggested), n = e.known?.sources.filter((e) => e.provider === "javdb") ?? [];
			l(new Set(e.candidates.filter((r) => r.subscription !== "enabled" && t.has(r.id) && (!n.length || r.held_by?.id === e.known?.id || n.some((e) => e.url === r.url))).map((e) => `javdb:${e.id}`)));
		});
	}, h = () => {
		s(null), l(/* @__PURE__ */ new Set()), d.setError("");
	};
	(0, Z.useEffect)(() => {
		r && p.current !== r && (p.current = r, f.current?.scrollIntoView({ block: "start" }), a(r), m(r));
	}, [r]);
	let g = () => {
		if (!o || !y || y.blocked) return;
		let e = v.filter((e) => e.provider === "javdb").map((e) => e.sourceId), r = v.filter((e) => e.provider === "dmm").map((e) => e.sourceId);
		d.run("follow", (t) => dt(o.q, e, r, o.dmm_selection, t), (e) => {
			t(e.created ? X("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : X("follow:addJavFeed.subscribed", { name: e.entity_name })), a(""), h(), n();
		});
	}, _ = o ? Zn(o, c) : [], v = _.filter((e) => e.selectable && e.picked), y = o && v.length ? qn(o, v) : null, b = _.some((e) => e.selectable);
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "add-jav-subscription",
		ref: f,
		"aria-label": Kn,
		className: Pe({
			padding: "none",
			className: "flex scroll-mt-24 flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Kn
			}),
			/* @__PURE__ */ (0, Q.jsx)(kn, {
				label: X("follow:addJavFeed.actressName"),
				placeholder: Gn,
				suggestionsLabel: X("follow:addJavFeed.suggestions"),
				value: i,
				setValue: a,
				search: m,
				kind: "performer",
				suggest: Jn,
				suggestOnline: Yn,
				readOnly: e,
				busy: !!d.busy
			}),
			d.busy === "lookup" ? /* @__PURE__ */ (0, Q.jsx)(Ce, {
				embedded: !0,
				kind: "radar",
				label: X("follow:addJavFeed.searching")
			}) : null,
			d.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				tone: "error",
				title: X("follow:addJavFeed.notCompleted"),
				children: d.error
			}) : null,
			o ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					o.unavailable ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "warning",
						title: X("follow:addJavFeed.javdbSearchFailed"),
						children: Ut(o.unavailable_code ?? "", o.unavailable, o.unavailable_params)
					}) : null,
					o.dmm_unavailable ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "warning",
						title: X("follow:addJavFeed.dmmSearchFailed"),
						children: Ut(o.dmm_unavailable.error_code ?? "", o.dmm_unavailable.error, o.dmm_unavailable.error_params)
					}) : null,
					_.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:addCreatorSource.results") }), /* @__PURE__ */ (0, Q.jsx)(Nn, {
						label: X("follow:addJavFeed.searchResults"),
						items: _,
						onPick: (e, t) => l((n) => {
							let r = new Set(n);
							return t ? r.add(e) : r.delete(e), r;
						})
					})] }) : !o.unavailable && !o.dmm_unavailable ? /* @__PURE__ */ (0, Q.jsx)(P, { children: X("follow:addJavFeed.noMatch") }) : null,
					b ? /* @__PURE__ */ (0, Q.jsx)(P, {
						role: "status",
						children: y?.text ?? X("follow:addJavFeed.pickCardsHint")
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							onClick: h,
							children: X("follow:shared.close")
						}), b ? /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "primary",
							size: "small",
							disabled: e || !y || y.blocked,
							...q(d.busy === "follow"),
							onClick: g,
							children: X("follow:addJavFeed.subscribePicked", { count: v.length })
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function $n({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(B, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: X("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Q.jsx)(er, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function er({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, Z.useState)(t.canonical_name), o = rn();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => Nt(t.canonical_key, i.trim(), e), () => {
				kt(), r(X("follow:creatorAliases.renamed", { name: i.trim() })), n();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(e, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: X("follow:creatorAliases.rename")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: [X("follow:creatorAliases.currentName"), t.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(F, {
				"aria-label": X("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: X("follow:creatorAliases.renameHint")
			}),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "secondary",
					onClick: n,
					children: X("follow:shared.cancel")
				}), /* @__PURE__ */ (0, Q.jsx)(u, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...q(!!o.busy),
					children: X("follow:creatorAliases.rename")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var tr = (e) => X("follow:creatorAliases.removeBody", { alias: e }), nr = Qt({
	rowSelectionFeature: Rt,
	rowSortingFeature: Bt,
	rowPaginationFeature: Lt,
	columnVisibilityFeature: We,
	columnOrderingFeature: Ue,
	sortedRowModel: Je(),
	paginatedRowModel: J()
}), rr = nr, ir = {
	id: "select",
	label: X("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, ar = {
	id: "canonical",
	label: X("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, or = [
	ir,
	ar,
	{
		id: "alias",
		label: X("follow:creatorAliases.platformAlias"),
		width: 240
	},
	{
		id: "evidence",
		label: X("follow:creatorAliases.evidence"),
		width: 320
	},
	{
		id: "actions",
		label: X("follow:shared.actions"),
		width: 112
	}
], sr = [
	ir,
	ar,
	{
		id: "aliases",
		label: X("follow:creatorAliases.platformAlias"),
		width: 400
	},
	{
		id: "actions",
		label: X("follow:shared.actions"),
		width: 184,
		min: 168
	}
], cr = (e) => e.alias;
function lr(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function ur({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(bn, {
			group: lr(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function dr({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: l }) {
	let d = hn("alias-suggestions", or), f = hn("alias-saved", sr), [p, g] = (0, Z.useState)(null), [_, v] = (0, Z.useState)({}), [y, b] = (0, Z.useState)({}), E = sn(() => {
		v({}), b({});
	});
	(0, Z.useEffect)(() => {
		(Object.values(_).some(Boolean) || Object.values(y).some(Boolean)) && et();
	}, [_, y]);
	let D = gn(() => v({})), ne = gn(() => b({})), [O, re] = (0, Z.useState)([]), [k, A] = (0, Z.useState)([]), [j, N] = dn("alias-suggestions"), [ie, P] = dn("alias-saved"), ae = (0, Z.useRef)(null), I = (0, Z.useRef)(null), L = mn(t, {
		canonical: {
			values: (e) => e.canonical,
			option: (e) => ({ leading: () => /* @__PURE__ */ (0, Q.jsx)(bn, {
				group: lr(s, e),
				name: e,
				small: !0
			}) })
		},
		alias: {
			values: (e) => e.alias,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Q.jsx)(bn, {
				group: lr(s, t?.canonical ?? e),
				name: e,
				small: !0
			}) })
		},
		evidence: { values: (e) => Ut(e.evidence_code ?? "", e.evidence, e.evidence_params) }
	}, () => N((e) => ({
		...e,
		pageIndex: 0
	}))), R = mn(e, {
		canonical: {
			values: (e) => e.canonical_name,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Q.jsx)(bn, {
				group: lr(s, e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		},
		aliases: {
			values: (e) => e.aliases.map((e) => e.name),
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Q.jsx)(bn, {
				group: lr(s, t?.canonical_name ?? e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		}
	}, () => P((e) => ({
		...e,
		pageIndex: 0
	}))), z = {
		...j,
		pageIndex: Math.min(j.pageIndex, Math.max(0, Math.ceil(L.items.length / j.pageSize) - 1))
	}, se = {
		...ie,
		pageIndex: Math.min(ie.pageIndex, Math.max(0, Math.ceil(R.items.length / ie.pageSize) - 1))
	}, [ce, B] = (0, Z.useState)(""), [V, H] = (0, Z.useState)(""), [le, ue] = (0, Z.useState)(""), W = on({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await Oe(n.canonical, n.alias);
				} catch (n) {
					throw t && kt(), Error(X("follow:creatorAliases.mergePartialError", {
						error: Y(n),
						count: e.length - t
					}));
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: () => {
			B(""), v({}), kt();
		},
		onError: (e) => B(Y(e))
	}), de = on({
		mutationFn: (e) => Oe(e.canonical, e.alias),
		onSuccess: () => {
			B(""), H(""), ue(""), kt(), l(X("follow:creatorAliases.saved"));
		},
		onError: (e) => B(Y(e))
	}), fe = on({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await At(e), n += 1;
			} catch (e) {
				throw Error(X("follow:creatorAliases.removePartialError", {
					error: Y(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				kt();
			}
		},
		onSuccess: (e, t) => {
			B(""), b({}), typeof t == "string" && l(X("follow:creatorAliases.removed"));
		},
		onError: (e) => B(Y(e))
	}), me = {
		receipt: l,
		failure: (e) => B(Y(e))
	}, he = (e, t) => ({
		key: e ? "merge-all" : "merge",
		reversal: "undo",
		label: X(e ? "follow:creatorAliases.mergeAllCount" : "follow:creatorAliases.mergeSelectedCount", { count: t }),
		confirm: (t) => ({
			title: X(e ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: X("follow:creatorAliases.mergeBody", {
				count: t.length,
				pairs: gt(t.map((e) => X("follow:creatorAliases.mergePair", {
					alias: Ot(e.alias),
					canonical: Ot(e.canonical)
				})))
			}),
			confirmLabel: X(e ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm")
		}),
		run: async (e) => {
			let { done: t } = await W.mutateAsync([...e]);
			return async () => {
				for (let n of e.slice(0, t)) await At(n.alias);
				await kt();
			};
		},
		receipt: (e) => X("follow:creatorAliases.merged", { count: e.length })
	}), ge = (e, t) => {
		e.length && Vt(he(t, e.length), e, me).catch(me.failure);
	}, _e = {
		key: "remove",
		reversal: "undo",
		label: X("follow:creatorAliases.removeSelectedCount", { count: 0 }),
		confirm: (e) => ({
			title: X("follow:creatorAliases.removeSelectedTitle"),
			body: X("follow:creatorAliases.removeSelectedBody", { count: e.length }),
			items: e.map((e) => e.name),
			confirmLabel: X("follow:creatorAliases.removeSelectedConfirm")
		}),
		run: async (e) => (await fe.mutateAsync(e.map((e) => e.name)), async () => {
			for (let t of e) await Oe(t.canonical, t.name);
			await kt();
		}),
		receipt: () => X("follow:creatorAliases.removed")
	}, ve = (e) => void Ke({
		title: X("follow:creatorAliases.removeTitle"),
		body: tr(e),
		confirmLabel: X("follow:creatorAliases.removeTitle"),
		onConfirm: () => fe.mutateAsync(e)
	}), G = (0, Z.useRef)({
		sources: s,
		readOnly: c,
		merging: W.isPending,
		removing: fe.isPending,
		merge: ge,
		remove: ve,
		rename: g
	});
	G.current = {
		sources: s,
		readOnly: c,
		merging: W.isPending,
		removing: fe.isPending,
		merge: ge,
		remove: ve,
		rename: g
	};
	let Ce = (0, Z.useMemo)(() => {
		let e = qe();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(Se, {
					table: e.table,
					label: X("follow:creatorAliases.selectAllPending")
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(m, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": X("follow:creatorAliases.selectPendingRow", {
						alias: e.row.original.alias,
						name: e.row.original.canonical
					}),
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: X("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(ur, {
					sources: G.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: X("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Ut(e.evidence_code ?? "", e.evidence, e.evidence_params), {
				id: "evidence",
				header: X("follow:creatorAliases.evidence"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: X("follow:shared.actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					...q(G.current.merging),
					onClick: () => G.current.merge([e.row.original], !1),
					children: X("follow:shared.merge")
				})
			})
		]);
	}, []), we = (0, Z.useMemo)(() => {
		let e = qe();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(Se, {
					table: e,
					label: X("follow:creatorAliases.selectAllSaved")
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(m, {
					slot: null,
					"aria-label": X("follow:creatorAliases.selectSavedRow", { name: e.original.canonical_name }),
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: X("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(ur, {
					sources: G.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: X("follow:creatorAliases.platformAlias"),
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: U,
							"aria-label": X("follow:creatorAliases.removeAliasNamed", { name: e.name }),
							disabled: G.current.readOnly,
							...q(G.current.removing),
							onClick: () => G.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: X("follow:shared.actions"),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					"aria-label": X("follow:creatorAliases.renameRowLabel", { name: e.original.canonical_name }),
					onClick: () => G.current.rename(e.original),
					children: X("follow:creatorAliases.rename")
				})
			})
		]);
	}, []), K = pn({
		features: nr,
		data: L.items,
		columns: Ce,
		getRowId: cr,
		state: {
			rowSelection: _,
			sorting: O,
			pagination: z,
			columnOrder: d.columnOrder,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			D(), v(e);
		},
		onSortingChange: (e) => {
			re(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), Ee = pn({
		features: rr,
		data: R.items,
		columns: we,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
			sorting: k,
			pagination: se,
			columnOrder: f.columnOrder,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			ne(), b(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			A(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P
	}), De = t.filter((e) => _[cr(e)]), ke = e.filter((e) => y[e.canonical_key]).flatMap((e) => e.aliases.map((t) => ({
		name: t.name,
		canonical: e.canonical_name
	}))), Ae = fn((e) => t.find((t) => cr(t) === e), (e) => {
		let t = K.getRow(cr(e));
		return [zt(t.getIsSelected(), () => t.toggleSelected()), {
			id: "merge",
			label: X("follow:shared.merge"),
			icon: en,
			disabled: c || W.isPending,
			run: () => ge([e], !1)
		}];
	}), je = fn((t) => e.find((e) => e.canonical_key === t), (e) => {
		let t = Ee.getRow(e.canonical_key), n = e.aliases.map((t) => ({
			name: t.name,
			canonical: e.canonical_name
		}));
		return [
			{
				id: "rename",
				label: X("follow:creatorAliases.rename"),
				icon: x,
				disabled: c,
				run: () => g(e)
			},
			zt(t.getIsSelected(), () => t.toggleSelected()),
			{
				id: "remove",
				label: X("follow:creatorAliases.removeRowAliases", { count: n.length }),
				icon: oe,
				danger: !0,
				disabled: c || fe.isPending || !n.length,
				run: async () => {
					await Vt(_e, n, me);
				}
			}
		];
	}), Me = q(W.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Pe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: X("follow:creatorAliases.title")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(F, {
							"aria-label": X("follow:creatorAliases.displayName"),
							placeholder: X("follow:creatorAliases.displayNamePlaceholder"),
							value: V,
							onChange: H,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(F, {
							"aria-label": X("follow:creatorAliases.platformAlias"),
							placeholder: X("follow:creatorAliases.platformAlias"),
							value: le,
							onChange: ue,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "primary",
							disabled: c || !V.trim() || !le.trim(),
							...q(de.isPending),
							onClick: () => de.mutate({
								canonical: V.trim(),
								alias: le.trim()
							}),
							children: X("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			ce ? /* @__PURE__ */ (0, Q.jsx)(te, { children: ce }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: Ae.onKeyDown,
				children: [
					Ae.menu,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: X("follow:creatorAliases.groupCount", { count: L.items.length })
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(u, {
									variant: "primary",
									size: "small",
									disabled: c,
									...Me,
									onClick: () => ge(L.items, !0),
									children: X("follow:creatorAliases.mergeAllCount", { count: L.items.length })
								}),
								/* @__PURE__ */ (0, Q.jsx)(C, {
									label: X("follow:creatorAliases.pendingTable"),
									sorting: O,
									options: [
										{
											id: "canonical",
											label: X("follow:creatorAliases.displayName")
										},
										{
											id: "alias",
											label: X("follow:creatorAliases.platformAlias")
										},
										{
											id: "evidence",
											label: X("follow:creatorAliases.evidence")
										}
									],
									onChange: (e) => {
										re(e), N((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(be, {
									preferences: d,
									label: X("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(pe, {
						label: X("follow:creatorAliases.pendingBulkActions"),
						visible: De.length > 0,
						count: X("follow:creatorAliases.groupsSelected", { count: De.length }),
						actions: [{
							action: he(!1, De.length),
							items: De,
							host: me,
							disabled: c || W.isPending
						}],
						children: /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "ghost",
							size: "small",
							onClick: nt,
							children: X("follow:shared.clearSelection")
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(S, {
						ref: ae,
						follow: !0,
						preferences: d,
						onRowClick: (e) => K.getRow(e)?.toggleSelected(),
						rectangleSelecting: E,
						onRectangle: W.isPending ? void 0 : (e, t) => K.setRowSelection({
							...t ? _ : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Q.jsxs)(ye, {
							"aria-label": X("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => K.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [K.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [L.header(e.id, String(e.column.columnDef.header)) ?? ut(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(xe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(r, {
								id: "remaining-space",
								"aria-label": X("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(n, {
								renderEmptyState: () => X("shell:dataTable.empty"),
								children: K.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => Ae.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: ut(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(ee, {
						label: X("follow:creatorAliases.pendingTable"),
						unit: X("follow:creatorAliases.groupUnit"),
						total: L.items.length,
						pagination: z,
						onChange: N,
						scrollTarget: ae
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: je.onKeyDown,
				children: [
					je.menu,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: X("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: X("follow:creatorAliases.groupCount", { count: R.items.length })
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(C, {
								label: X("follow:creatorAliases.saved"),
								sorting: k,
								options: [{
									id: "canonical",
									label: X("follow:creatorAliases.displayName")
								}, {
									id: "aliases",
									label: X("follow:creatorAliases.platformAlias")
								}],
								onChange: (e) => {
									A(e), P((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(be, {
								preferences: f,
								label: X("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(pe, {
						label: X("follow:creatorAliases.savedBulkActions"),
						visible: ke.length > 0,
						count: X("follow:creatorAliases.aliasesSelected", { count: ke.length }),
						actions: [{
							action: {
								..._e,
								label: X("follow:creatorAliases.removeSelectedCount", { count: ke.length })
							},
							items: ke,
							host: me,
							disabled: c || fe.isPending
						}],
						children: /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "ghost",
							size: "small",
							onClick: nt,
							children: X("follow:shared.clearSelection")
						})
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(S, {
						ref: I,
						follow: !0,
						preferences: f,
						onRowClick: (e) => Ee.getRow(e)?.toggleSelected(),
						rectangleSelecting: E,
						onRectangle: fe.isPending ? void 0 : (e, t) => Ee.setRowSelection({
							...t ? y : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Q.jsxs)(ye, {
							"aria-label": X("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Ee.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [Ee.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [R.header(e.id, String(e.column.columnDef.header)) ?? ut(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(xe, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(r, {
								id: "remaining-space",
								"aria-label": X("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(n, {
								renderEmptyState: () => X("shell:dataTable.empty"),
								children: Ee.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => je.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: ut(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(ee, {
						label: X("follow:creatorAliases.saved"),
						unit: X("follow:creatorAliases.groupUnit"),
						total: R.items.length,
						pagination: se,
						onChange: P,
						scrollTarget: I
					})] }) : /* @__PURE__ */ (0, Q.jsx)(T, {
						size: "compact",
						icon: Te,
						title: X("follow:creatorAliases.emptyTitle"),
						actions: c ? void 0 : /* @__PURE__ */ (0, Q.jsx)(w, {
							target: `input[aria-label="${X("follow:creatorAliases.displayName")}"]`,
							children: X("follow:creatorAliases.addAlias")
						}),
						children: X("follow:creatorAliases.emptyBody")
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)($n, {
				group: p,
				close: () => g(null),
				receipt: l
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var fr = Qt({
	rowPaginationFeature: Lt,
	rowSelectionFeature: Rt,
	rowSortingFeature: Bt,
	columnVisibilityFeature: We,
	columnOrderingFeature: Ue,
	sortedRowModel: Je(),
	paginatedRowModel: J()
}), pr = {
	select: X("follow:shared.select"),
	name: X("follow:shared.name"),
	kind: X("follow:shared.type"),
	origin: X("follow:followFeed.filterKindSource"),
	status: X("follow:shared.status"),
	interval: X("follow:feedSources.colInterval"),
	fetched: X("follow:feedSources.colLastFetched"),
	fresh: X("follow:feedSources.colLastAdded"),
	actions: X("follow:shared.actions")
}, mr = Object.entries(pr).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), hr = () => Dt.invalidateQueries({
	queryKey: D,
	exact: !0
}), $ = (e) => e.name || e.url, gr = (e) => e.kind.startsWith("javdb") ? "javdb" : e.kind.startsWith("dmm") ? "dmm" : _r(e.url);
function _r(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function vr({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(g, {
		variant: "caption",
		color: "rose",
		children: X("follow:feedSources.fetchFailed")
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(g, {
		variant: "caption",
		color: "lime",
		children: X("follow:shared.ok")
	}) : /* @__PURE__ */ (0, Q.jsx)(g, {
		variant: "caption",
		color: "gray",
		children: X("follow:feedSources.notChecked")
	}) : /* @__PURE__ */ (0, Q.jsx)(g, {
		variant: "caption",
		color: "gray",
		children: X("follow:shared.paused")
	});
}
function yr({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-semibold text-text-secondary ${L}`,
		dangerouslySetInnerHTML: { __html: Ne($(e), t, null, "performer") }
	});
}
var br = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function xr(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Sr(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Ke({
		title: n ? X("follow:feedSources.removeOne") : X("follow:feedSources.removeMany", { count: e.length }),
		body: n ? X("follow:feedSources.removeOneBody", { name: $(n) }) : X("follow:feedSources.removeManyBody"),
		confirmLabel: X(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: t
	});
}
function Cr({ readOnly: e, toast: t, selection: s }) {
	let c = cn({
		queryKey: D,
		queryFn: ({ signal: e }) => ot(e)
	}), l = rn(), d = hn("jav-feeds", mr), f = c.data, p = (0, Z.useMemo)(() => f?.sources ?? [], [f]), [g, _] = (0, Z.useState)(/* @__PURE__ */ new Set()), v = s?.ids ?? g, b = s?.onChange ?? _, [x, w] = (0, Z.useState)(1), [T, E] = un("jav-feeds"), [ne, O] = (0, Z.useState)([]), re = mn(p, {
		name: {
			values: $,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Q.jsx)(y, { person: {
				...t,
				id: t.entity_id,
				name: e
			} }) })
		},
		kind: {
			values: (e) => He(e, "kind_label"),
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Q.jsx)(he, { site: gr(t) }) })
		},
		origin: {
			values: (e) => _r(e.url),
			option: (e, t) => ({ leading: /* @__PURE__ */ (0, Q.jsx)(he, { site: t ? gr(t) : e }) })
		},
		status: { values: (e) => e.enabled ? e.last_error ? X("follow:feedSources.fetchFailed") : e.last_fetched_at ? X("follow:shared.ok") : X("follow:feedSources.notChecked") : X("follow:shared.paused") },
		interval: { values: (e) => rt(e.interval_minutes) },
		fetched: {
			range: "timestamp",
			value: (e) => e.last_fetched_at ? vn(e.last_fetched_at).getTime() / 1e3 : null
		},
		fresh: {
			range: "count",
			value: (e) => e.last_new_count
		}
	}, () => w(1)), k = wt(re.items.length, T, x);
	(0, Z.useEffect)(() => {
		w((e) => Math.min(e, k.pages));
	}, [k.pages]), (0, Z.useEffect)(() => {
		b((e) => {
			let t = new Set(p.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [p, b]);
	let A = on({
		mutationFn: async (e) => {
			let t = await xt(e.ids, 4, async (t) => {
				e.action === "remove" ? await jt(t) : await Wt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let t = e.results.filter((e) => !e.ok);
			if (b(/* @__PURE__ */ new Set()), hr(), t.length) {
				let e = t[0];
				l.setError(X("follow:feedSources.writeFailed", {
					count: t.length,
					error: e.ok ? "" : Y(e.error)
				}));
			}
		},
		onError: (e) => l.setError(Y(e))
	}), j = {
		receipt: t,
		failure: (e) => l.setError(Y(e))
	}, M = (e) => ({
		key: e ? "enable" : "pause",
		label: X(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: X(e ? "follow:feedSources.enableMany" : "follow:feedSources.pauseMany"),
			body: X(e ? "follow:feedSources.enableManyBody" : "follow:feedSources.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => t.enabled !== e), { results: r } = await A.mutateAsync({
				ids: n.map((e) => e.id),
				action: e ? "enabled" : "paused"
			}), i = n.filter((e, t) => r[t]?.ok);
			return async () => {
				await xt(i.map((e) => e.id), 4, (t) => Wt(t, !e)), await hr();
			};
		},
		receipt: (t) => X(e ? "follow:feedSources.enabledMany" : "follow:feedSources.pausedMany", { count: t.length })
	}), P = {
		key: "remove",
		label: X("follow:shared.remove"),
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: X("follow:feedSources.removeMany", { count: e.length }),
			danger: !0,
			body: X("follow:feedSources.removeManyBody"),
			confirmLabel: X("follow:feedSources.removeSelected")
		}),
		run: async (e) => {
			await A.mutateAsync({
				ids: e.map((e) => e.id),
				action: "remove"
			});
		},
		receipt: (e) => X("follow:feedSources.removedMany", { count: e.length })
	}, F = (0, Z.useMemo)(() => xr(p), [p]), ae = (0, Z.useRef)(null), I = (0, Z.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: F,
		busy: l.busy,
		toggle: (e, t) => void l.run(`enabled-${e.id}`, (n) => Wt(e.id, t, n), () => void hr()),
		fetch: (e) => void l.run(`check-${e.id}`, (t) => Le(t, [e.id]), () => void hr()),
		remove: (e) => void Sr([e], async () => {
			await jt(e.id), t(X("follow:feedSources.removedOne", { name: $(e) })), hr();
		})
	};
	let L = (0, Z.useMemo)(() => {
		let e = qe(), t = (e) => () => pr[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(Se, {
					table: e.table,
					label: X("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(m, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": X("follow:shared.selectNamed", { name: $(e.row.original) })
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = br(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(yr, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)(Sn, { name: t }) : null
						]
					});
				}
			}),
			e.accessor((e) => He(e, "kind_label"), {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: X("follow:followDetail.viewOnSite"),
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(ge, {
						site: gr(e.row.original),
						label: _r(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(K, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? X("follow:feedSources.fetchFailed") : e.enabled ? X("follow:shared.enabled") : X("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(vr, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: rt(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? yt(e.row.original.last_fetched_at) : X("follow:feedSources.neverFetched")
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: X("follow:feedSources.itemCount", { count: e.getValue() })
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(G, {
							"aria-label": X("follow:shared.enableNamed", { name: $(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ze,
							"aria-label": X("follow:feedSources.fetchNamed", { name: $(e.row.original) }),
							disabled: I.current.readOnly,
							...q(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: oe,
							"aria-label": X("follow:shared.removeNamed", { name: $(e.row.original) }),
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), R = (0, Z.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), z = pn({
		features: fr,
		data: re.items,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: R,
			sorting: ne,
			pagination: {
				pageIndex: k.page - 1,
				pageSize: T
			},
			columnOrder: d.columnOrder,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			O(e), w(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(R) : e, n = new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e)));
			n.size && s?.onActivate(), b(n);
		}
	}), se = () => void l.run("check", (e) => Le(e), () => void hr()), ce = (e) => {
		s?.onActivate(), b((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, B = p.filter((e) => v.has(e.id)), U = p.filter((e) => e.last_error), le = fn((e) => p.find((t) => String(t.id) === e), (t) => {
		let n = [{
			id: "select",
			label: X(v.has(t.id) ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: $(t) }),
			icon: ie,
			run: () => ce(t.id)
		}];
		return t.url && n.unshift({
			id: "open",
			label: X("follow:sourceView.openSource"),
			icon: K,
			run: () => {
				window.open(t.url, "_blank", "noopener,noreferrer");
			}
		}), e || n.push({
			id: "fetch",
			label: X("follow:feedSources.fetchNamed", { name: $(t) }),
			icon: Ze,
			disabled: !!l.busy,
			run: () => I.current.fetch(t)
		}, {
			id: "enabled",
			label: X(t.enabled ? "follow:shared.pause" : "follow:shared.enable"),
			icon: t.enabled ? H : N,
			disabled: !!l.busy,
			run: () => I.current.toggle(t, !t.enabled)
		}, {
			id: "remove",
			label: X("follow:shared.removeNamed", { name: $(t) }),
			icon: oe,
			danger: !0,
			run: () => I.current.remove(t)
		}), n;
	});
	return f ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": X("follow:feedSources.listLabel"),
			className: Pe({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			onKeyDown: le.onKeyDown,
			children: [
				le.menu,
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: X("follow:feedSources.title")
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: X("follow:feedSources.summary", {
								count: p.length,
								unread: Number(f.unread) || 0
							})
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(u, {
								onClick: se,
								disabled: e,
								...q(l.busy === "check"),
								children: X("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Q.jsx)(be, {
								preferences: d,
								label: X("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Q.jsx)(C, {
								label: X("follow:feedSources.title"),
								sorting: ne,
								onChange: (e) => {
									O(e), w(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: pr[e]
								}))
							})
						]
					})]
				}),
				U.length || l.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [U.length ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "error",
						title: X("follow:feedSources.failedTitle", { count: U.length }),
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: U.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: He(e, "last_error"),
								children: X("follow:shared.labeled", {
									label: $(e),
									value: tt(He(e, "last_error")) || X("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: X("follow:feedSources.failedBody")
					}) : null, l.error ? /* @__PURE__ */ (0, Q.jsx)(te, { children: l.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(pe, {
					visible: B.length > 0,
					label: X("follow:feedSources.bulkActions"),
					count: X("follow:feedSources.selectedCount", { count: B.length }),
					actions: [
						M(!0),
						M(!1),
						P
					].map((t) => ({
						action: t,
						items: B,
						host: j,
						disabled: e || A.isPending
					})),
					children: /* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "ghost",
						size: "small",
						onClick: nt,
						children: X("follow:shared.clearSelection")
					})
				}),
				p.length ? /* @__PURE__ */ (0, Q.jsx)(S, {
					ref: ae,
					follow: !0,
					preferences: d,
					onRowClick: (e) => ce(Number(e)),
					rectangleSelecting: v.size > 0,
					onRectangle: A.isPending ? void 0 : (e, t) => z.setRowSelection({
						...t ? R : {},
						...Object.fromEntries(e.map((e) => [e, !0]))
					}),
					children: /* @__PURE__ */ (0, Q.jsxs)(ye, {
						"aria-label": X("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: ne[0] ? {
							column: ne[0].id,
							direction: ne[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => z.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [z.getHeaderGroups()[0].headers.map((e) => {
							let t = ut(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [re.header(e.id, pr[e.id] || e.id) ?? t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(xe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(r, {
							id: "remaining-space",
							"aria-label": X("follow:shared.rowSpacer"),
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(n, {
							renderEmptyState: () => X("shell:dataTable.empty"),
							children: z.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
								id: e.id,
								"data-follow-selected": e.getIsSelected() || void 0,
								"data-work-context-row": e.id,
								onContextMenu: (t) => le.onContextMenu?.(t, e.original, e.id),
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: ut(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
							}, e.id))
						})]
					})
				}) : null,
				p.length ? /* @__PURE__ */ (0, Q.jsx)(ee, {
					label: X("follow:feedSources.footerLabel"),
					total: k.total,
					unit: X("follow:feedSources.unit"),
					pagination: {
						pageIndex: k.page - 1,
						pageSize: T
					},
					scrollTarget: ae,
					onChange: (e) => {
						E(e.pageSize), w(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: X("follow:feedSources.footerSummary", {
							unread: Number(f.unread) || 0,
							enabled: p.filter((e) => e.enabled).length,
							total: p.length
						})
					})
				})
			]
		})
	}) : c.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
		tone: "error",
		title: X("follow:feedSources.loadFailed"),
		children: Y(c.error)
	}) : /* @__PURE__ */ (0, Q.jsx)("div", { dangerouslySetInnerHTML: { __html: Kt(X("follow:feedSources.loading"), { fill: !1 }) } });
}
// src/react/follow-manage/source-list.tsx
var wr = Qt({
	rowPaginationFeature: Lt,
	rowSelectionFeature: Rt,
	rowSortingFeature: Bt,
	columnVisibilityFeature: We,
	columnOrderingFeature: Ue,
	paginatedRowModel: J()
}), Tr = Object.fromEntries(Object.entries(p).map(([e, t]) => [t, e])), Er = 740;
function Dr() {
	let [e, t] = (0, Z.useState)(!1), n = (0, Z.useRef)(null), r = (0, Z.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Er));
		r.observe(e), n.current = r, t(e.clientWidth < Er);
	}, []);
	return (0, Z.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Or = {
	select: X("follow:shared.select"),
	author: X("follow:shared.creator"),
	source: X("follow:followFeed.filterKindSource"),
	provider: X("follow:shared.site"),
	status: X("follow:shared.status"),
	checked: X("follow:sourceList.colLastChecked"),
	actions: X("follow:shared.actions")
}, kr = Object.entries(Or).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
})), Ar = "timestamp", jr = Object.entries(Or).map(([e, t]) => ({
	id: e,
	label: t,
	range: e === "checked" ? Ar : void 0
}));
function Mr(e, t, n, r) {
	let i = [{
		id: "select",
		label: X(t ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: e.label }),
		icon: vt,
		run: () => n(!t)
	}];
	return e.url && i.unshift({
		id: "open",
		label: X("follow:sourceView.openSource"),
		icon: K,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}), r.readOnly || i.push({
		id: "check",
		label: X("follow:sourceList.checkNamed", { name: e.label }),
		icon: Ze,
		disabled: !e.enabled || r.busy,
		run: () => r.check([e.id])
	}, {
		id: "enabled",
		label: X(e.enabled ? "follow:shared.pause" : "follow:shared.enable"),
		icon: e.enabled ? H : N,
		run: () => r.toggle(e, !e.enabled)
	}, {
		id: "remove",
		label: X("follow:sourceList.unfollow"),
		icon: oe,
		danger: !0,
		run: () => r.remove(e)
	}), i;
}
function Nr({ source: e, selected: t, onToggle: n, handlers: r }) {
	let i = _n(), a = () => ({
		key: e.id,
		operations: Mr(e, t, n, r)
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		"data-rectangle-key": e.id,
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onContextMenu: (e) => i.onContextMenu(e, a()),
		onKeyDown: (e) => {
			(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && i.onKeyDown(e, a());
		},
		onClick: (e) => {
			Ve(e, e.currentTarget) && n(!t);
		},
		children: [
			i.menu,
			/* @__PURE__ */ (0, Q.jsx)(m, {
				isSelected: t,
				onChange: n,
				"aria-label": X("follow:shared.selectNamed", { name: e.label })
			}),
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Q.jsx)(Cn, { provider: e.provider })
				}), /* @__PURE__ */ (0, Q.jsx)(wn, { source: e })]
			}),
			/* @__PURE__ */ (0, Q.jsx)(s, { children: e.provider_label }),
			/* @__PURE__ */ (0, Q.jsx)(Tn, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, Q.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, Q.jsx)(xn, { text: He(e, "last_error") })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Be(e)
					}),
					/* @__PURE__ */ (0, Q.jsx)(G, {
						"aria-label": X("follow:shared.enableNamed", { name: e.label }),
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ze,
							"aria-label": X("follow:sourceList.checkNamed", { name: e.label }),
							disabled: !e.enabled || r.readOnly,
							...q(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: oe,
							"aria-label": X("follow:shared.removeNamed", { name: e.label }),
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function Pr({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let l = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(pt).length, p = gt([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = Ht(r, l);
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": X("follow:sourceList.groupLabel", { name: t }),
		className: Pe({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(bn, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, Q.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Q.jsx)(Cn, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Q.jsx)(s, { children: X("follow:sourceList.providers", { providers: p }) }),
							f ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: X("follow:shared.failedCount", { count: f })
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Ze,
						"aria-label": X("follow:sourceList.checkGroup", { name: t }),
						disabled: !d.length || i.readOnly,
						...q(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							leadingIcon: vt,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": X(h.all ? "follow:sourceList.deselectGroup" : "follow:sourceList.selectGroup", { name: t }),
							onClick: () => o(!h.all),
							children: h.all ? X("follow:shared.deselectAll") : X("follow:shared.selectAll")
						}), /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: _,
							"aria-label": X(n ? "follow:sourceList.collapseGroup" : "follow:sourceList.expandGroup", { name: t }),
							onClick: () => a(!n),
							children: X(n ? "follow:shared.collapse" : "follow:shared.expand")
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)(v, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Q.jsx)(Nr, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function Fr(e) {
	let { data: t, sort: s, dir: c, page: l, layout: d, pageSize: g, selected: v, readOnly: y, onSort: x, onPage: C, onLayout: w, onPageSize: te, onSelected: E, toast: D, openFollow: re } = e, k = (e, t) => E(/* @__PURE__ */ new Set([...t ? v : [], ...e.map(Number)])), A = ln(k, {
		selecting: e.selecting,
		start: "[data-source-divider]"
	}), j = t.sources, M = (0, Z.useMemo)(() => t.author_aliases || [], [t.author_aliases]), N = t.counts || {}, [ie, P] = (0, Z.useState)(/* @__PURE__ */ new Set()), F = (0, Z.useRef)(null), [ae, L] = Dr(), [R, z] = (0, Z.useState)(""), se = (0, Z.useMemo)(() => je(j, s, c, M), [
		j,
		s,
		c,
		M
	]), ce = (0, Z.useMemo)(() => $t(se, s, c, M), [
		se,
		s,
		c,
		M
	]), B = mn(ce, {
		author: {
			values: (e) => e.author,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Q.jsx)(bn, {
				group: t.group,
				name: e,
				small: !0
			}) })
		},
		source: {
			values: (e) => e.source.label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Q.jsx)(Cn, { provider: t.source.provider }) })
		},
		provider: {
			values: (e) => e.source.provider_label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Q.jsx)(Cn, { provider: t.source.provider }) })
		},
		status: { values: (e) => Xt(e.source) },
		checked: {
			range: Ar,
			value: (e) => e.source.last_checked_at ? vn(e.source.last_checked_at).getTime() / 1e3 : null
		}
	}, () => C(1)), H = (0, Z.useMemo)(() => {
		let e = new Set(B.items.map((e) => e.source.id));
		return se.flatMap((t) => {
			let n = t.filter((t) => e.has(t.id));
			return n.length ? [{
				key: String(t[0].author_key || t[0].id),
				name: Me(t, M),
				sources: n
			}] : [];
		});
	}, [
		M,
		B.items,
		se
	]), { job: U, running: W, outcome: me, start: he } = an({
		queryKey: ne,
		taskKey: O,
		queryFn: ({ signal: e }) => it(e),
		start: (e) => Jt(e),
		onError: (e) => z(Y(e)),
		onFinish: (e) => {
			kt(), D(e.status === "failed" ? ht(e, "error") || X("follow:followCheck.checkFailed") : Re(e));
		}
	}), ge = (e) => {
		W || he.isPending || (z(""), he.mutate(e));
	}, ve = (e, t) => E(tn(v, [e], t)), K = (e, t) => E(tn(v, e, t)), Te = on({
		mutationFn: (e) => Mt(e),
		onSuccess: (e, t) => {
			Qe([t]), E(tn(v, [t], !1)), D(X("follow:sourceList.unfollowed"));
		},
		onError: (e) => z(Y(e))
	}), Ee = on({
		mutationFn: (e) => Gt(e.id, e.enabled),
		onSuccess: (e, t) => {
			Tt(t.id, { enabled: t.enabled }), z("");
		},
		onError: (e) => z(Y(e))
	}), Oe = (e) => void Ke({
		title: X("follow:sourceList.unfollow"),
		body: X("follow:sourceList.unfollowBody"),
		confirmLabel: X("follow:sourceList.unfollow"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: () => Te.mutateAsync(e.id)
	}), ke = on({
		mutationFn: async (e) => {
			let t = await xt(e.ids, 4, async (t) => {
				e.action === "remove" ? await Mt(t) : await Gt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Qe(e.done);
			else for (let t of e.done) Tt(t, { enabled: e.action === "enabled" });
			E(tn(v, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			t.length ? z(X("follow:sourceList.bulkPartialFail", {
				failed: t.length,
				total: e.ids.length,
				error: Y(t[0]?.error)
			})) : z("");
		},
		onError: (e) => z(Y(e))
	}), Ae = on({
		mutationFn: St,
		onSuccess: (e) => {
			kt(), e.failed ? z(X("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: Y(e.error)
			})) : z("");
		},
		onError: (e) => z(Y(e))
	}), Ne = {
		receipt: D,
		failure: (e) => z(Y(e))
	}, Le = (e) => ({
		key: e ? "enable" : "pause",
		label: X(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: X(e ? "follow:sourceList.enableMany" : "follow:sourceList.pauseMany"),
			body: X(e ? "follow:sourceList.enableManyBody" : "follow:sourceList.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => j.find((e) => e.id === t)?.enabled !== e), { done: r } = await ke.mutateAsync({
				ids: n,
				action: e ? "enabled" : "paused"
			});
			return async () => {
				await xt(r, 4, (t) => Gt(t, !e));
				for (let t of r) Tt(t, { enabled: !e });
			};
		},
		receipt: (t) => X(e ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused", { count: t.length })
	}), Ve = {
		key: "delete",
		label: X("follow:shared.delete"),
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: X("follow:sourceList.deleteManyTitle", { count: e.length }),
			danger: !0,
			body: X("follow:sourceList.deleteManyBody"),
			confirmLabel: X("follow:sourceList.deleteSelected")
		}),
		run: async (e) => {
			await ke.mutateAsync({
				ids: [...e],
				action: "remove"
			});
		},
		receipt: (e) => X("follow:sourceList.bulkDeleted", { count: e.length })
	}, Ue = (e) => {
		let t = [];
		return {
			key: `mark-${e}`,
			label: X(e === "seen" ? "follow:sourceList.markAllWatched" : "follow:sourceList.ignoreAll"),
			reversal: "undo",
			confirm: ([t]) => e === "seen" ? {
				title: X("follow:followDetail.markSeen"),
				body: X("follow:sourceList.markWatchedBody", { count: t })
			} : {
				title: X("follow:sourceList.markIgnored"),
				body: X("follow:sourceList.markIgnoredBody", { count: t }),
				recovery: X("shell:batchFollow.ignoreRecovery")
			},
			run: async () => (t = (await Ae.mutateAsync(e)).marked, async () => {
				await nn(t), await kt();
			}),
			receipt: () => X("follow:sourceList.bulkMarked", { count: t.length })
		};
	}, We = (e, t) => Ee.mutate({
		id: e.id,
		enabled: t
	}), Ge = (0, Z.useRef)({
		check: ge,
		toggle: We,
		remove: Oe,
		busy: !1,
		readOnly: y
	});
	Ge.current = {
		check: ge,
		toggle: We,
		remove: Oe,
		busy: W || he.isPending,
		readOnly: y
	};
	let J = Ge.current, Je = fn((e) => j.find((t) => String(t.id) === e), (e) => Mr(e, v.has(e.id), (t) => ve(e.id, t), J)), Ye = (0, Z.useMemo)(() => {
		let e = qe(), t = (e) => () => Or[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(Se, {
					table: e.table,
					label: X("follow:sourceList.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(m, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": X("follow:shared.selectNamed", { name: e.row.original.source.label })
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(bn, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(wn, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Q.jsx)(xn, { text: He(e.row.original.source, "last_error") }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(Cn, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Tn, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Be(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(G, {
							"aria-label": X("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: J.readOnly,
							onChange: (t) => Ge.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ze,
							"aria-label": X("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || J.readOnly,
							...q(J.busy),
							onClick: () => Ge.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: oe,
							"aria-label": X("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: J.readOnly,
							onClick: () => Ge.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [J]), Xe = (0, Z.useMemo)(() => {
		let e = Tr[s];
		return e ? [{
			id: e,
			desc: c === "desc"
		}] : [];
	}, [s, c]), et = (0, Z.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), rt = d === "table", at = hn("follow-sources", kr), ot = wt(rt ? B.items.length : H.length, g, l), st = pn({
		features: wr,
		data: B.items,
		columns: Ye,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Xe,
			rowSelection: et,
			pagination: {
				pageIndex: ot.page - 1,
				pageSize: g
			},
			columnOrder: at.columnOrder,
			columnVisibility: at.visibility
		},
		onColumnVisibilityChange: at.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Xe) : e)[0];
			if (!t) return;
			let n = p[t.id];
			n && x(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(et) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: ot.page - 1,
				pageSize: g
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === g ? n.pageIndex !== t.pageIndex && C(n.pageIndex + 1) : te(n.pageSize);
		}
	}), ct = st.getRowModel().rows, lt = rt ? ct.map((e) => e.original.source.id) : H.slice(ot.start, ot.end).flatMap(({ sources: e }) => e.map((e) => e.id)), dt = Ht(v, lt), ft = [...v], pt = Ie(me), mt = j.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), gt = Fe(me), _t = H.length > 0 && H.every(({ key: e }) => ie.has(e));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Pe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		onKeyDown: Je.onKeyDown,
		children: [
			Je.menu,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				ref: ae,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: X("follow:followManageNav.list")
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: N.new ? X("follow:sourceList.sourceCountUnseen", {
							count: j.length,
							unseen: Number(N.new) || 0
						}) : X("follow:sourceList.sourceCount", { count: j.length })
					})]
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						mt.length ? /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							disabled: y,
							...q(J.busy),
							onClick: () => ge(mt),
							children: X("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "primary",
							leadingIcon: Ze,
							disabled: y,
							"aria-label": X("follow:sourceList.checkAll"),
							iconOnly: L,
							...q(J.busy),
							onClick: () => ge([]),
							children: X("follow:sourceList.checkAll")
						}),
						/* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, Q.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": X("follow:sourceList.layout"),
									children: [/* @__PURE__ */ (0, Q.jsx)(u, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: we,
										"aria-label": I[0][1],
										"aria-pressed": !rt,
										onClick: () => w("default")
									}), /* @__PURE__ */ (0, Q.jsx)(u, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: $e,
										"aria-label": I[1][1],
										"aria-pressed": rt,
										onClick: () => w("table")
									})]
								}),
								rt ? /* @__PURE__ */ (0, Q.jsx)(be, {
									preferences: at,
									label: X("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Q.jsx)(de, {
										"aria-label": X("follow:sourceList.sortLabel"),
										prefix: X("follow:shared.sort"),
										selectedKey: s,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											x(t, le[t]);
										},
										children: ue.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(fe, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Q.jsx)(u, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: _e,
										"data-icon-state": c === "asc" ? "a" : "b",
										"aria-label": qt(s, c),
										onClick: () => x(s, c === "asc" ? "desc" : "asc")
									})]
								}),
								rt ? null : /* @__PURE__ */ (0, Q.jsx)(u, {
									variant: "secondary",
									iconOnly: L,
									leadingIcon: _,
									"aria-expanded": !_t,
									"aria-label": X(_t ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => P(_t ? /* @__PURE__ */ new Set() : new Set(H.map(({ key: e }) => e))),
									children: X(_t ? "follow:shared.expandAll" : "follow:shared.collapseAll")
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					W ? /* @__PURE__ */ (0, Q.jsx)(Ce, {
						embedded: !0,
						kind: U?.older ? De("feed-scrape") : De("follow-check"),
						label: ht(U) || (U?.total ? X(U.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: U.checked || 0,
							count: U.total
						}) : X("follow:sourceList.preparingCheck")),
						value: U?.checked,
						total: U?.total
					}) : null,
					R ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "error",
						title: X("follow:shared.actionFailed"),
						children: R
					}) : null,
					!W && me?.results?.length ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "neutral",
						title: X("follow:followFeed.checkResults"),
						children: ze(me)
					}) : null,
					pt.length ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "error",
						title: X("follow:sourceList.failedTitle", { count: pt.length }),
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: pt.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("li", { children: X("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: tt(e.error || "") || X("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: X("follow:sourceList.failedBody")
					}) : null,
					gt ? /* @__PURE__ */ (0, Q.jsx)(V, {
						tone: "warning",
						children: X("follow:sourceList.evidenceGap", { error: gt })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(pe, {
				label: X("follow:sourceList.bulkActions"),
				visible: ft.length > 0,
				count: X("follow:sourceList.selectedCount", { count: ft.length }),
				actions: [
					Le(!0),
					Le(!1),
					Ve
				].map((e) => ({
					action: e,
					items: ft,
					host: Ne,
					disabled: y || ke.isPending
				})),
				leading: /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: y,
					...q(J.busy),
					onClick: () => ge(ft),
					children: X("follow:sourceList.checkSelected")
				}),
				children: /* @__PURE__ */ (0, Q.jsx)(u, {
					variant: "ghost",
					size: "small",
					onClick: nt,
					children: X("follow:shared.clearSelection")
				})
			}),
			rt ? /* @__PURE__ */ (0, Q.jsx)(S, {
				ref: F,
				follow: !0,
				preferences: at,
				onRowClick: (e) => ve(Number(e), !v.has(Number(e))),
				rectangleSelecting: e.selecting,
				onRectangle: k,
				children: /* @__PURE__ */ (0, Q.jsxs)(ye, {
					"aria-label": X("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: Xe[0] ? {
						column: Xe[0].id,
						direction: Xe[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => st.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Q.jsxs)(o, { children: [st.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in p, n = ut(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Q.jsx)(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...at.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Q.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [B.header(e.id, Or[e.id] || e.id) ?? n, /* @__PURE__ */ (0, Q.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Q.jsx)(h, {})
								})]
							}) : B.header(e.id, Or[e.id] || e.id) ?? n, /* @__PURE__ */ (0, Q.jsx)(xe, {
								preferences: at,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Q.jsx)(r, {
						id: "remaining-space",
						"aria-label": X("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: at.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Q.jsx)(n, {
						renderEmptyState: () => X("follow:sourceList.pageEmpty"),
						children: ct.map((e) => /* @__PURE__ */ (0, Q.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							"data-work-context-row": e.original.source.id,
							onContextMenu: (t) => Je.onContextMenu?.(t, e.original.source, String(e.original.source.id)),
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(a, { children: ut(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)(b, {
					filters: B.values,
					columns: jr,
					onRemove: B.clear,
					valueLabel: (e, t) => t || X("cleanup:shared.none")
				}),
				lt.length ? /* @__PURE__ */ (0, Q.jsx)(m, {
					isSelected: dt.all,
					isIndeterminate: dt.some,
					onChange: (e) => K(lt, e),
					"aria-label": X("follow:sourceList.selectPage"),
					children: X("follow:sourceList.selectPageShort")
				}) : null,
				H.length ? null : /* @__PURE__ */ (0, Q.jsx)(T, {
					icon: f,
					title: X("follow:sourceList.pageEmpty"),
					children: null
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"data-rectangle-gutter": H.length ? "" : void 0,
					className: "flex flex-col gap-3",
					...A,
					children: H.slice(ot.start, ot.end).map(({ key: e, name: t, sources: n }) => /* @__PURE__ */ (0, Q.jsx)(Pr, {
						group: n,
						name: t,
						handlers: J,
						selected: v,
						open: !ie.has(e),
						onOpen: (t) => {
							let n = new Set(ie);
							t ? n.delete(e) : n.add(e), P(n);
						},
						onToggleGroup: (e) => K(n.map((e) => e.id), e),
						onToggle: ve
					}, e))
				})
			] }),
			/* @__PURE__ */ (0, Q.jsx)(ee, {
				label: X("follow:followManageNav.list"),
				total: ot.total,
				pagination: {
					pageIndex: ot.page - 1,
					pageSize: g
				},
				scrollTarget: rt ? F : void 0,
				unit: X(rt ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: X(rt ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === g ? st.setPageIndex(e.pageIndex) : st.setPageSize(e.pageSize);
				}
			}),
			N.new ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: X("follow:sourceList.markSummary", {
							unwatched: Number(N.new) || 0,
							watched: Number(N.seen) || 0,
							saved: Number(N.saved) || 0,
							ignored: Number(N.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(u, {
						variant: "secondary",
						size: "small",
						onClick: re,
						children: X("follow:sourceList.seeUpdates")
					}),
					["seen", "ignored"].map((e) => {
						let t = Ue(e);
						return /* @__PURE__ */ (0, Q.jsx)(u, {
							variant: "secondary",
							size: "small",
							disabled: y,
							...q(Ae.isPending),
							onClick: () => void Vt(t, [Number(N.new) || 0], Ne).catch(Ne.failure),
							children: t.label
						}, e);
					})
				]
			}) : null
		]
	});
}
// node_modules/skullet/dist/index.mjs
var Ir = "skullet-reveal", Lr = "skullet-pane", Rr = "skullet-loading", zr = "skullet-ghost", Br = "skullet-snapshot", Vr = "skullet-layer", Hr = "skullet-rect", Ur = "skullet-bar", Wr = "skullet-inactive", Gr = "skullet-exiting", Kr = "skullet-covered", qr = "skullet-own", Jr = "skullet-block", Yr = Symbol.for("skullet.ghost"), Xr = Symbol.for("skullet.uncover"), Zr = "skullet-status", Qr = "skullet-xray", $r = "var(--skullet-base, rgb(128 128 128 / 0.2))", ei = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", ti = 280, ni = 1e4, ri = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, ii = [
	"a",
	"b",
	"code",
	"dd",
	"dt",
	"em",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"i",
	"label",
	"li",
	"p",
	"small",
	"span",
	"strong",
	"td",
	"th",
	"time"
], ai = [
	"audio",
	"canvas",
	"embed",
	"iframe",
	"img",
	"input",
	"object",
	"picture",
	"select",
	"svg",
	"textarea",
	"video"
], oi = ai.join(", "), si = `
[${Ir}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Lr}] {
  display: block;
}

[${Rr}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${Wr}] {
  display: none !important;
}

[${Vr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${Ur}] {
  display: block;
  background-color: ${$r};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Rr}]) to ([${qr}], [${Vr}]) {
  :scope,
  :scope * {
    color: transparent !important;
    -webkit-text-fill-color: transparent !important;
    text-shadow: none !important;
    text-decoration-color: transparent !important;
  }

  :scope ::placeholder {
    color: transparent !important;
  }

  /* A line to measure in empty text; content only, never a size, or a dot-sized span would grow round it */
  :scope :is(${ii.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${oi}, [${Kr}], [${Jr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${$r} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${oi}, [${Jr}]):not(svg *) {
      visibility: visible !important;
      background: ${$r} !important;
    }

    :scope svg * {
      fill: transparent !important;
      stroke: transparent !important;
    }

    :scope :is(img, video) {
      object-position: -100vw 0;
    }
  }
}

/* Read by screen readers in the skeleton's place, never seen */
[${Zr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${Qr}] [${Rr}] [${zr}],
[${Qr}] [${Rr}] [${zr}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, ci = null, li = 0, ui;
function di() {
	li++, !ci && (ui ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !ui && (ci = document.createElement("style"), ci.dataset.skullet = "true", ci.textContent = si, document.head.appendChild(ci)));
}
function fi() {
	li--, !(li > 0 || !ci) && (ci.remove(), ci = null);
}
var pi = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", mi = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...mi });
function hi(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? mi[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var gi = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function _i({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = hi(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${gi(o)} }`), a === "system") {
		let t = hi({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${gi(t)} } }`);
	}
	return s.join("\n");
}
var vi = /* @__PURE__ */ new Map(), yi, bi = null, xi = 0;
function Si() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Ci = () => yi ??= typeof window < "u" && Si(), wi = (e) => Ci() || !!e?.closest("[skullet-debug]");
function Ti(e) {
	yi = e, e ? Ai() : ji();
}
function Ei(e, t) {
	!e || !wi(e) || (vi.set(e, {
		state: "loading",
		source: t
	}), Oi());
}
function Di(e, t) {
	!e || !wi(e) || (vi.set(e, {
		...vi.get(e),
		state: "shown",
		moved: t
	}), Oi());
}
function Oi() {
	Ai(), cancelAnimationFrame(xi), Ni();
}
var ki = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Ai() {
	if (typeof document > "u") return;
	if (!bi?.isConnected) {
		bi = document.createElement("div"), bi.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = bi.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${ki}</style><div class="boxes"></div>`, document.body.append(bi);
	}
	let e = bi.shadowRoot;
	if (yi && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(Qr, e.target.checked);
		}), e.append(t);
	}
	xi ||= requestAnimationFrame(Ni);
}
function ji() {
	bi?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(Qr), ![...vi.keys()].some((e) => wi(e)) && (cancelAnimationFrame(xi), xi = 0, bi?.remove(), bi = null);
}
var Mi = ({ state: e, source: t, moved: n }) => {
	let r = t ? ` \xB7 ${t}` : "";
	return e === "loading" ? {
		kind: "loading",
		text: `skeleton${r}`
	} : !n || n.width === 0 && n.height === 0 ? {
		kind: "still",
		text: `\u2713 no movement${r}`
	} : {
		kind: "moved",
		text: `\u2717 moved ${n.width}\xD7${n.height}px${r}`
	};
};
function Ni() {
	if (xi = 0, !bi?.shadowRoot) return;
	let e = bi.shadowRoot.querySelector(".boxes");
	for (let e of vi.keys()) e.isConnected && wi(e) || vi.delete(e);
	let t = [...vi];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Mi(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (yi || vi.size) && (xi = requestAnimationFrame(Ni));
}
var Pi, Fi = () => Pi ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Ii = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Li = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Ri = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function zi(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function Bi(e, t, n) {
	let r = Ii(e, t), i = zi(n, t), a = e ? Li(e) : [], o = Li(t), s = Li(r).map((t, n) => Ri(t, o[n]) ? i[n] : e && Ri(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function Vi(e, t, n, r) {
	if (!e) return n;
	let i = Li(e), a = Li(t).map((t, n) => e.corners[n] > 0 && Ri(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = zi(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var Hi = (e, t) => {
	let n = Ii(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, Ui = {
	top: "ascender",
	bottom: "descender"
}, Wi = /* @__PURE__ */ new Map(), Gi = (e) => [...e.getClientRects?.() ?? []];
function Ki(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (Wi.has(t)) return Wi.get(t);
	let n = Fi(), r = null;
	if (n) {
		n.font = t;
		let e = n.measureText("H"), i = (e) => n.measureText(e).actualBoundingBoxAscent;
		r = {
			ascent: e.fontBoundingBoxAscent,
			descent: e.fontBoundingBoxDescent,
			ascender: i("bdfhkl"),
			capHeight: e.actualBoundingBoxAscent,
			xHeight: i("xz"),
			descender: n.measureText("gjpqy").actualBoundingBoxDescent
		};
	}
	return Wi.set(t, r), r;
}
var qi = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, Ji = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function Yi(e, t, n) {
	let r = Ki(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = Ji(t, "--skullet-text-top", Object.keys(qi), Ui.top), a = Ji(t, "--skullet-text-bottom", ["baseline", "descender"], Ui.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[qi[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var Xi = new Set(ai), Zi = new Set(ii), Qi = .4, $i = /[,/]\s*0\)$/, ea = (e, t) => e !== "" && e !== t, ta = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], na = (e) => ta.every((t) => ea(e[`border${t}Style`], "none") && ea(e[`border${t}Width`], "0px")), ra = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, ia = (e) => ea(e, "none") && !e.split(/,(?![^(]*\))/).every(ra), aa = (e) => ea(e.backgroundColor, "transparent") && !$i.test(e.backgroundColor) || ea(e.backgroundImage, "none") || ia(e.boxShadow) || na(e), oa = (e) => Xi.has(e.localName), sa = (e) => Zi.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), ca = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(Gi(n).filter((e) => e.width || e.height));
		} else sa(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * Qi, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, la = (e, t) => e.hasAttribute("skullet-block") || oa(e) || aa(t) && ca(e) <= 1;
function ua(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function da(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * Qi;
		});
		e ? (e.left = Math.min(e.left, n.left), e.right = Math.max(e.right, n.right), e.top = Math.min(e.top, n.top), e.bottom = Math.max(e.bottom, n.bottom), e.fontSize = Math.max(e.fontSize, n.fontSize), e.barTop = Math.min(e.barTop, n.barTop), e.barBottom = Math.max(e.barBottom, n.barBottom)) : t.push({ ...n });
	}
	return t.map((e) => {
		let t = e.barBottom - e.barTop;
		return {
			x: e.left,
			y: e.barTop,
			width: e.right - e.left,
			height: t,
			radius: e.radius || `${Math.round(t / 3)}px`
		};
	});
}
function fa(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = Hi(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...Yi(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of Gi(d)) f(e, r, t);
	}, m = (e, t) => {
		for (let n of e.childNodes) {
			if (n.nodeType === Node.TEXT_NODE) {
				p(n, t);
				continue;
			}
			if (n.nodeType !== Node.ELEMENT_NODE) continue;
			let e = n;
			if (e.hasAttribute("skullet-ignore") || e.hasAttribute("skullet-own")) continue;
			let r = getComputedStyle(e);
			if (r.display === "none") continue;
			if (la(e, r)) {
				let n = Hi(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: Vi(t, n, ua(e, r), r)
					});
				}
				oa(e) || u.add(e);
				continue;
			}
			if (sa(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? Bi(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...da(l)];
	for (let t of e.querySelectorAll(`[${Kr}]`)) u.has(t) || t.removeAttribute(Kr);
	for (let e of u) e.hasAttribute(Kr) || e.setAttribute(Kr, "");
	return [...c, ...da(l)];
}
var pa = (e) => typeof matchMedia < "u" && matchMedia(e).matches, ma = () => typeof Element < "u" && typeof Element.prototype.animate == "function", ha = () => !ma() || pa("(prefers-reduced-motion: reduce)"), ga = () => pa("(prefers-reduced-transparency: reduce)"), _a = (e) => e.getAnimations?.() ?? [], va = .7, ya = 1280, ba = 320, xa = 2.5, Sa = .45, Ca = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function wa(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Ca, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: ri[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Ta = 20, Ea = Math.sin(Ta * Math.PI / 180), Da = Math.cos(Ta * Math.PI / 180), Oa = Ea / Da, ka = Da, Aa = `${90 + Ta}deg`, ja = .85, Ma = 12, Na = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Pa(e) {
	let t = e * xa, n = (t, n) => `color-mix(in srgb, ${ei} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= Ma; e++) r.push(n(e / Ma * ja, Na(e / Ma)));
	for (let e = 1; e <= Ma; e++) r.push(n(ja + e / Ma * (1 - ja), Na(1 - e / Ma)));
	return {
		width: t / Da,
		image: `repeating-linear-gradient(${Aa}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Fa(e, t, n = wa(e)) {
	for (let t of _a(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", ha() || typeof e.animate != "function" || n.animation === "none") return;
	let r = {
		duration: n.duration,
		iterations: 1 / 0
	};
	if (n.animation === "pulse") {
		e.animate([
			{
				opacity: 1,
				easing: "ease-in-out"
			},
			{
				opacity: Sa,
				easing: "ease-in-out"
			},
			{ opacity: 1 }
		], r).startTime = 0;
		return;
	}
	let i = e.getBoundingClientRect(), a = i.left + scrollX, o = n.animation === "group-shimmer" ? t ?? {
		left: a,
		top: i.top,
		width: i.width,
		height: i.height
	} : {
		left: 0,
		top: 0,
		width: document.documentElement.clientWidth || innerWidth
	}, { width: s, image: c } = Pa(Math.min(Math.max(o.width * .4, 80), ba)), l = a - o.left + (i.top - o.top) * Oa, u = n.duration * va / (ya + ba);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Ia(e) {
	if (ha()) return null;
	let t = wa(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * va / (ya + ba);
}
var La = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Ra = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function za(e, t) {
	let n = La(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = wa(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${$r};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Fa(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Ba = 120, Va = 72, Ha = 3, Ua = 60, Wa = 150, Ga = 400, Ka = 1.5, qa = 1e3, Ja = 1e3, Ya = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), Xa = -1 / 0, Za = !1;
function Qa() {
	if (!(Za || typeof addEventListener > "u")) {
		Za = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => Xa = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var $a = /* @__PURE__ */ new WeakMap();
function eo(e, { served: t, refetch: n }) {
	Qa();
	let r = $a.get(e)?.since ?? performance.now();
	$a.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function to(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function no(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var ro = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function io(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${Gr}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var ao = (e, t) => Math.min(Math.max(e, 0), t), oo = -1 / 0;
function so(e, t, n, r, i) {
	let a = performance.now();
	a - oo > Wa && (oo = a);
	let o = a - oo, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of to(e)) {
		let n = no(t, e), r = c.get(n);
		r || (r = {
			rect: n.getBoundingClientRect(),
			size: 0
		}, c.set(n, r));
		let i = u(t);
		r.size = Math.max(r.size, i), l.set(t, {
			unit: r,
			size: i
		});
	}
	let d = (e) => {
		let t = n(e);
		return t === null ? null : ao(t, qa) + Math.max(r.delay ?? 0, 0);
	};
	return {
		kind: "sequence",
		duration: i,
		enter: r.enter,
		pieceDelay: (e) => {
			let t = l.get(e);
			return t ? d({
				rect: e.getBoundingClientRect(),
				unit: t.unit.rect,
				secondary: t.size < t.unit.size,
				reveal: s,
				late: o
			}) : null;
		},
		boneDelay: (e) => {
			let t = [...c.values()].find((t) => ro(t.rect, e));
			return d({
				rect: e,
				unit: t?.rect ?? null,
				secondary: !!t && e.height < t.size * .8,
				reveal: s,
				late: o
			});
		}
	};
}
function co(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) Ya.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function lo(e, t, n, r = () => {}) {
	let i = $a.get(t);
	$a.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - Xa < Ga,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: to(e).length
			})
		};
	}
	let o = ao(a.duration ?? 200, Ja);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, qa)
	}, !o) return { kind: "instant" };
	let s = co(a.enter, r);
	if (a.wipe) {
		let e = io(t);
		if (e.width * e.height <= innerWidth * innerHeight * Ka) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return so(e, t, a.order, {
		...a,
		enter: s
	}, o);
	return {
		kind: "together",
		delay: Math.max(a.delay ?? 0, 0),
		duration: o,
		enter: s
	};
}
var uo = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return ao(n * .8 + r * .2, 1) * 320;
}, fo = (e) => e.bottom > 0 && e.top < innerHeight, po = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return fo(e) ? 0 : null;
	if (!fo(t)) return null;
	let i = ao(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? Ua : 0);
}, mo = { duration: 0 }, ho = { order: "together" }, go = { order: uo }, _o = (e) => e.input || e.waited < 150 ? mo : e.refetch ? {
	order: "together",
	duration: Ba
} : null, vo = (e) => e.height < Va || e.pieces <= Ha ? ho : { order: po }, yo = {
	hold: 150,
	choose: (e) => _o(e) ?? vo(e)
}, bo = new Set(ai), xo = "script, noscript, template, base, meta, link", So = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Co = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"sizes",
	"poster",
	"data",
	"srcdoc",
	"action",
	"formaction",
	"value",
	"alt",
	Kr
]), wo = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function To(e, t) {
	let n = wo(t.data);
	t.data = n;
	let r = e.parentElement, i = Fi();
	if (!r || !i || !n.trim()) return;
	let a = getComputedStyle(r);
	i.font = `${a.fontStyle} ${a.fontWeight} ${a.fontSize} ${a.fontFamily}`;
	let o = (e) => {
		let t = e.replace(/\s+/g, " ");
		return a.textTransform === "uppercase" ? t.toUpperCase() : a.textTransform === "lowercase" ? t.toLowerCase() : t;
	}, s = (i.measureText(o(e.data)).width - i.measureText(o(n)).width) / o(n).length;
	if (Math.abs(s) < .01) return;
	let c = document.createElement("span");
	c.style.letterSpacing = `${(parseFloat(a.letterSpacing) || 0) + s}px`, t.replaceWith(c), c.append(t);
}
function Eo(e) {
	for (let t of e.querySelectorAll(xo)) t.remove();
	for (let t of e.querySelectorAll("*")) if (So.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Co.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Do(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (bo.has(e.localName) || So.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) To(e, t);
	return Eo(n), n.innerHTML;
}
function Oo(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, Eo(t.content), t.content;
}
var ko = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${ko(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Ao = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function jo(e) {
	let t = ko(e, 2);
	return t ? `${location.pathname}|${Ao(t)}` : null;
}
var Mo = !1;
try {
	Mo = !1;
} catch {
	Mo = !1;
}
var No = Mo, Po = /* @__PURE__ */ new Set();
function Fo(e, t) {
	!No || Po.has(e) || (Po.add(e), console.warn(`[skullet] ${t}`));
}
var Io = /^(https?:|\/|data:|blob:)/;
function Lo(e) {
	return typeof e == "string" ? Io.test(e) ? "" : wo(e) : Array.isArray(e) ? e.map(Lo) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Lo(t)])) : e;
}
var Ro = "skullet:shapes", zo = 2, Bo = 50, Vo = 2e4, Ho = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map();
function Wo(e, t) {
	return Uo.has(e) || Uo.set(e, /* @__PURE__ */ new Set()), Uo.get(e).add(t), () => Uo.get(e)?.delete(t);
}
function Go(e) {
	for (let t of Uo.get(e) ?? []) t();
}
function Ko() {
	try {
		let e = JSON.parse(localStorage.getItem(Ro) ?? "null");
		return e?.v === zo ? e.shapes : {};
	} catch {
		return {};
	}
}
function qo(e) {
	try {
		localStorage.setItem(Ro, JSON.stringify({
			v: zo,
			shapes: e
		}));
	} catch {}
}
function Jo(e, t) {
	Ho.set(e, Do(t, !1));
	let n = Do(t, !0);
	if (n.length > Vo) return;
	let r = Ko();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Bo)) delete r[e];
	qo(r);
}
function Yo(e) {
	return Ho.get(e) ?? Ko()[e] ?? null;
}
var Xo = [
	100,
	90,
	60
].map((e) => `<div ${Jr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), Zo = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Rr}]`)), Qo = /* @__PURE__ */ new WeakMap();
function $o(e) {
	if (!e) return;
	let t = Qo.get(e);
	return Qo.delete(e), t;
}
function es(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var ts = (e) => !!e.firstElementChild || !!e.textContent?.trim(), ns = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, di(), e[Yr] = !0, e.setAttribute(Rr, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = es(e, zr), this.snapshot = es(e, Br), this.layer = es(e, Vr), this.hadContent = ts(this.ghost);
		let n = e.closest(`[${Ir}]`);
		n && eo(n, {
			served: Zo.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[Xr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0), addEventListener("resize", this.schedule), document.fonts?.ready.then(this.schedule);
	}
	root;
	options;
	ghost;
	snapshot;
	layer;
	source = null;
	hadContent = !1;
	frame = 0;
	mutations;
	resize;
	schedule = () => {
		this.root.closest(`[${Gr}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = ts(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || Zo.has(this.root), r = !!this.ghost.querySelector(`[${qr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? jo(this.ghost);
			n && (Go(n), t = Yo(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Oo(t)) : e === "fallback" ? (this.snapshot.innerHTML = Xo, Fo(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(Wr, e !== "ghost"), this.snapshot.toggleAttribute(Wr, e === "ghost"), this.source = e, Ei(this.root.closest(`[${Ir}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : Zo.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		za(this.layer, fa(e, this.layer));
		let t = this.root.closest(`[${Ir}]`);
		t && Qo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), fi();
	}
}, rs = 250, is = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? jo(e), this.untrack = this.key ? Wo(this.key, () => this.save()) : () => {}, (No || wi(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0);
	}
	element;
	options;
	key;
	timer;
	mutations;
	resize;
	untrack;
	schedule = () => {
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), rs);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && Jo(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Ir}]`), o = $o(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Fo(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Lo(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Di(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Fo(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Fo(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, as = () => {}, os = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, ss = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !os(e));
function cs(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(as, as), new Promise((e) => setTimeout(e, ni))]);
}
var ls = 360, us = 2, ds = 600, fs = 40, ps = fs / ka, ms = 320, hs = 120, gs = .45, _s = (e) => e.left + e.top * Oa, vs = (e) => e.width + e.height * Oa, ys = (e, t) => _s(t) - ps + (vs(t) + 2 * ps) * e, bs = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function xs(e) {
	let t = e.querySelector(`:scope > [${Gr}] [${Vr}]`), n = t && Ia(t);
	if (!n) return null;
	let r = io(e);
	if (r.width * r.height > innerWidth * innerHeight * Ka) return null;
	let i = _s(r), a = i + vs(r), o = performance.now(), s = o - bs.start;
	s <= Wa && (i - bs.origin) / bs.speed >= s && (a - bs.origin) / bs.speed - s <= ds || (bs = {
		start: o,
		origin: i,
		speed: Math.max(us / n, (a - i) / ls)
	});
	let { start: c, origin: l, speed: u } = bs;
	return {
		delay: (i - ps - l) / u - (o - c),
		duration: (a - i + 2 * ps) / u
	};
}
var Ss = (e) => (t, { rect: n, reveal: r }) => {
	let i = (ys(t, r) - _s(n)) * ka;
	return `linear-gradient(${Aa}, ${Array.from({ length: Ma + 1 }, (t, n) => {
		let r = e ? 1 - Na(n / Ma) : Na(n / Ma), a = -fs + 2 * fs * n / Ma;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Cs = "http://www.w3.org/2000/svg", ws = null, Ts = 0;
function Es() {
	return ws?.isConnected || (ws = document.createElementNS(Cs, "svg"), ws.setAttribute("aria-hidden", "true"), ws.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(ws)), ws;
}
var Ds = (e, t) => {
	let n = document.createElementNS(Cs, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Os = {
	mask: Ss(!0),
	out: Ss(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ga()) return;
		let i = _s(t), a = vs(t), o = ms / 2 / ka, s = () => ys(r(), n) - i - hs / ka;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Oa, l = c / 2, u = t.height / 2, d = ms / 2 * ka, f = ms / 2 * Oa * ka, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= Ma; e++) {
			let t = e / Ma;
			h.addColorStop(t, `rgb(255 255 255 / ${Na(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Ts}`, _ = Ds("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Ds("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Ds(`feFunc${e}`, {
			type: "linear",
			slope: 1 - gs,
			intercept: gs
		}));
		let y = Ds("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Ds("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Ds("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Es().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Oa) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, ks = {
	together: ho,
	sequence: go,
	smart: yo,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = _o(e);
			if (t) return t;
			let n = xs(e.reveal);
			return n ? {
				wipe: Os,
				...n
			} : vo(e);
		}
	}
}, As = (e = "smart") => typeof e == "string" ? ks[e] : e, js = () => {}, Ms = (e) => e.finished.then(js, js), Ns = /* @__PURE__ */ new WeakMap();
function Ps(e, t = 0, n = 200, r = 0, i) {
	return ha() ? Promise.resolve() : Ms(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Fs = (e) => !!e.querySelector(`[${Vr}], [${zr}], :scope > [${qr}]`), Is = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Ls = /* @__PURE__ */ new WeakMap();
function Rs(e) {
	for (let t of Ls.get(e) ?? []) t.remove();
	Ls.delete(e);
}
function zs(e, t) {
	let n = ss(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Fs(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${Gr}] [${Vr}]`)].flatMap(Ra), a = Ls.get(t) ?? /* @__PURE__ */ new Set();
			Ls.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Is(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(Hr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: $r,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Fa(c), cs(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Ps(e), ha()) return c.remove();
						Ms(c.animate([{ opacity: 1 }, { opacity: 0 }], {
							duration: 200,
							easing: "ease",
							fill: "forwards"
						})).then(() => c.remove());
					}
				});
			}
		});
	}
}
function Bs(e, t) {
	return ha() ? Promise.resolve() : Promise.all(to(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Ps(e, n, t.duration, 0, t.enter);
	})).then(js);
}
function Vs(e) {
	for (let t of e.querySelectorAll(`:scope > [${Gr}]`)) {
		for (let e of _a(t)) e.finish();
		t.style.opacity = "0";
	}
}
function Hs(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${Gr}]`)) if (!Fs(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of _a(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function Us(e, t = "smart", { initial: n = !1 } = {}) {
	let r = Ws.get(e);
	return r || (r = Gs(e, t, n), Ws.set(e, r)), r;
}
var Ws = /* @__PURE__ */ new WeakMap();
function Gs(e, t, n) {
	let r = e.parentElement, i = As(t);
	if (Fs(e)) {
		r && Rs(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Ns.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Ps(e, t)) : (r && Ns.delete(r), n ? Promise.resolve() : Ps(e));
	}
	if (n || !r) return Promise.resolve();
	let a = Hs(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Ns.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Ps(e, 0, t, a);
	}
	zs(e, r);
	let o = lo(e, r, i, (e) => Fo(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Ns.set(r, o), o.kind === "instant" ? (Vs(r), Promise.resolve()) : o.kind === "sequence" ? Bs(e, o) : o.kind === "wipe" ? ic(e, o, !0) : Ps(e, o.delay, o.duration, 0, o.enter);
}
function Ks(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function qs(e, t = Ks(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(Gr, ""), t;
}
var Js = /* @__PURE__ */ new WeakMap();
function Ys(e, t) {
	let n = e.querySelector(`:scope > [${Lr}]:not([${Gr}])`);
	if (!n) return;
	let r = Js.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && Xs(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: ti,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	Js.set(e, u), Ms(l).then(() => {
		Js.get(e) === u && Xs(e, u);
	});
}
function Xs(e, { overflow: t, boxSizing: n }) {
	Js.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function Zs(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of _a(e)) t.cancel();
	rc(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Fs(e) && Rs(i);
	let a = qs(e, t), o = (t, n) => ma() ? Ms(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Ns.get(i), n = ha() || t?.kind === "instant";
		if (i && !n && Ys(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Fs(e) ? Qs(e, t) : t?.kind === "wipe" && Fs(e) ? ic(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function Qs(e, t) {
	for (let t of e.querySelectorAll(`[${zr}], [${Br}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${zr}] [${qr}]`)].filter((e) => !e.parentElement?.closest(`[${qr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${Vr}]`)].flatMap(Ra), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Ms(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(js);
}
var $s = 100, ec = /* @__PURE__ */ new WeakMap();
function tc(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function nc(e, t) {
	tc(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function rc(e) {
	ec.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function ic(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? tc(e, i(t, r)) : a ? tc(e, a(t, r)) : nc(e, i(t, r));
	}, s = () => (performance.now() - t.start) / t.duration;
	return s() >= 1 ? (n || (e.style.opacity = "0"), Promise.resolve()) : (n && (t.wipe.effect?.(e, {
		...r,
		progress: s
	}), t.enter && e.animate([t.enter, {}], {
		duration: t.duration,
		delay: Math.max(t.start - performance.now(), 0),
		easing: "ease",
		fill: "backwards"
	})), new Promise((n) => {
		let r = 0, i = performance.now(), a = 0, c = () => {
			let e = performance.now();
			if (e - i > $s && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), ec.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + $s);
		ec.set(e, l), c();
	}).then((t) => {
		if (rc(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Ps(e, 0, r, t) : Ms(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var ac = Z.createContext({}), oc = Z.createContext(null), sc = () => Z.useContext(ac), cc = () => Z.useContext(oc), lc = () => sc().reveal;
function uc({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = _i({
		theme: r,
		mode: i,
		text: a
	}), [c] = Z.useState(() => ({ sent: !1 }));
	return Z.useEffect(() => {
		n !== void 0 && Ti(n);
	}, [n]), (0, Q.jsx)(ac.Provider, {
		value: t,
		children: (0, Q.jsxs)(oc.Provider, {
			value: c,
			children: [s && (0, Q.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var dc = typeof window > "u" ? Z.useEffect : Z.useLayoutEffect, fc = () => Z.useInsertionEffect(() => (di(), fi), []), pc = Number("19.3.1".split(".")[0]) >= 19, mc = () => {
	let { nonce: e } = sc();
	return pc ? (0, Q.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: si
	}) : null;
}, hc = pc ? { inert: !0 } : { inert: "" }, gc = (e) => Z.Children.map(e, (e) => {
	if (!Z.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Q.jsx)("span", {
		[qr]: "",
		children: (0, Q.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? Z.cloneElement(e, void 0, gc(e.props.children)) : e;
}), _c = () => () => {}, vc = () => Z.useSyncExternalStore(_c, () => !1, () => !0), yc = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = Z.useRef(null), { nonce: o } = sc(), s = cc(), c = vc(), l = pi;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), dc(() => {
		if (!a.current) return;
		let e = new ns(a.current, {
			id: t,
			exact: n,
			refetch: r
		});
		return () => e.destroy();
	}, [
		t,
		n,
		r
	]), (0, Q.jsxs)(Q.Fragment, { children: [
		i && (0, Q.jsx)("span", {
			"skullet-status": "",
			children: i
		}),
		(0, Q.jsxs)("div", {
			ref: a,
			[Rr]: "",
			"aria-hidden": !0,
			...hc,
			children: [
				(0, Q.jsx)("div", {
					[zr]: "",
					children: gc(e)
				}),
				(0, Q.jsx)("div", { [Br]: "" }),
				(0, Q.jsx)("div", { [Vr]: "" })
			]
		}),
		c && (0, Q.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, bc = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = Z.useRef(null), l = lc();
	return dc(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), Us(c.current, l, { initial: !r }).then(s), o && (e.memory = new is(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), dc(() => {
		!i || !c.current || Zs(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Q.jsx)("div", {
		ref: c,
		[Lr]: "",
		children: e
	});
}, xc = class extends Z.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = Ks(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Sc(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	fc();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = Z.useRef(null);
	dc(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Q.jsx)("div", {
			[qr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Q.jsx)(yc, {
			id: t,
			exact: i != null,
			refetch: u != null,
			label: n,
			children: m(i ?? d)
		});
	} else o ? (g = "error", _ = o) : i ? (g = "empty", _ = a ?? m(u)) : (g = "content", _ = m(u), v = {
		id: t,
		data: u,
		rendered: !!l,
		sample: d !== void 0
	});
	let [y, b] = Z.useState({
		id: 0,
		key: g
	}), [x, ee] = Z.useState([]), S = Z.useRef(/* @__PURE__ */ new Map()).current, C = Z.useRef(_);
	if (dc(() => {
		C.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: C.current
		};
		ee((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), b({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let w = Z.useRef(e.onReveal);
	dc(() => {
		w.current = e.onReveal;
	});
	let T = y.key === "content" && y.from === "skeleton" ? () => w.current?.() : void 0, te = (e) => ee((t) => t.filter((t) => t.id !== e)), E = [...x.map((e) => (0, Q.jsx)(bc, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => te(e.id),
		children: e.node
	}, e.id)), (0, Q.jsx)(bc, {
		id: y.id,
		registry: S,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: T,
		children: _
	}, y.id)];
	return (0, Q.jsxs)("div", {
		[Ir]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Q.jsx)(mc, {}), (0, Q.jsx)(xc, {
			exiting: x.map((e) => e.id),
			registry: S,
			children: E
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Cc = {
	creators: [X("follow:followOverview.creators"), X("follow:followOverview.creatorUnit")],
	enabled: [X("follow:followOverview.enabledSources"), ""],
	failed: [X("follow:followCheck.checkFailed"), X("follow:followOverview.sourceUnit")],
	updates: [X("follow:followOverview.unwatchedUpdates"), X("follow:followOverview.itemUnit")],
	subscriptions: [X("follow:feedSources.footerLabel"), X("follow:followOverview.actressUnit")],
	releases: [X("follow:followOverview.unwatchedReleases"), X("follow:followOverview.itemUnit")]
}, wc = {
	duration: 0,
	delay: 0,
	hold: 150
}, Tc;
function Ec() {
	return Tc || (Tc = new CSSStyleSheet(), Tc.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Tc;
}
function Dc({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Q.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Oc({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Cc[e], o = (0, Z.useRef)(null);
	return (0, Z.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Ec();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: Pe({
			padding: "none",
			className: "flex flex-col justify-between gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ (0, Q.jsx)("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: X("follow:shared.notFound")
		}) : /* @__PURE__ */ (0, Q.jsx)(uc, {
			reveal: wc,
			children: /* @__PURE__ */ (0, Q.jsx)(Sc, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: X("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Q.jsx)(Dc, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var kc = (e) => A.some(([t]) => t === e);
function Ac(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Z.useState)(kc(e.tab) ? e.tab : "list"), [p, m] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, g] = (0, Z.useState)(() => It(e.sort, e.dir).sort), [_, v] = (0, Z.useState)(() => It(e.sort, e.dir).dir), [y, b] = (0, Z.useState)(mt(e.layout) ? e.layout : "default"), [x, ee] = (0, Z.useState)(Ct(e.pageSize)), [S, C] = (0, Z.useState)(/* @__PURE__ */ new Set()), [w, te] = (0, Z.useState)(/* @__PURE__ */ new Set()), ne = sn(() => {
		C(/* @__PURE__ */ new Set()), te(/* @__PURE__ */ new Set());
	});
	(0, Z.useEffect)(() => {
		(S.size || w.size) && et();
	}, [S, w]);
	let O = cn({
		queryKey: k,
		queryFn: ({ signal: e }) => st(e)
	}), j = cn({
		queryKey: re,
		queryFn: ({ signal: e }) => at(e)
	}), M = cn({
		queryKey: D,
		queryFn: ({ signal: e }) => ot(e)
	}), N = O.data || { sources: [] }, ie = j.data || {
		root: "",
		providers: []
	}, P = N.sources;
	(0, Z.useEffect)(() => {
		C((e) => {
			let t = _t(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let n = e.sort ?? h, r = e.dir ?? _;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === le[n] ? "" : r
		});
	}, ae = ft(P), I = P.filter(pt).length, L = P.filter((e) => e.enabled).length, R = (ie.providers || []).filter((e) => e.requirement === "required" && !Ye(e)).length, oe = new Set((M.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size, z = !(!O.data || !M.data || P.length || oe);
	return /* @__PURE__ */ (0, Q.jsxs)(yn, { children: [
		a ? /* @__PURE__ */ (0, Q.jsx)(V, {
			tone: "warning",
			title: X("follow:followManagePage.readOnly"),
			extra: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					href: s,
					children: X("follow:followManagePage.goToPrimary")
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: W,
			"aria-label": X("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "creators",
					figure: O.data ? ae.length : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "enabled",
					figure: O.data ? L : void 0,
					total: P.length,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "failed",
					figure: O.data ? I : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "updates",
					figure: O.data ? N.counts?.new || 0 : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "subscriptions",
					figure: M.data ? oe : void 0,
					failed: M.isError
				}),
				/* @__PURE__ */ (0, Q.jsx)(Oc, {
					field: "releases",
					figure: M.data ? M.data.unread || 0 : void 0,
					failed: M.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Q.jsx)(ve, {
						group: "follow",
						label: X("follow:followManagePage.sectionTabs"),
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: A.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							C(/* @__PURE__ */ new Set()), te(/* @__PURE__ */ new Set()), l(e), F({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [
						z ? /* @__PURE__ */ (0, Q.jsx)(T, {
							icon: f,
							title: X("follow:sourceList.empty"),
							actions: a ? void 0 : /* @__PURE__ */ (0, Q.jsx)(u, {
								variant: "primary",
								size: "small",
								onClick: () => {
									l("add"), F({ tab: "add" });
								},
								children: X("follow:followFeed.addFollow")
							}),
							children: X("follow:followManagePage.emptyBody")
						}) : null,
						!z && (!M.data || oe > 0) ? /* @__PURE__ */ (0, Q.jsx)(Cr, {
							readOnly: a,
							toast: r,
							selection: {
								ids: w,
								onChange: te,
								onActivate: () => C(/* @__PURE__ */ new Set())
							}
						}) : null,
						O.data ? P.length > 0 && /* @__PURE__ */ (0, Q.jsx)(Fr, {
							data: N,
							sort: h,
							dir: _,
							page: p,
							layout: y,
							pageSize: x,
							selected: S,
							selecting: ne,
							readOnly: a,
							toast: r,
							openFollow: i,
							onSort: (e, t) => {
								g(e), v(t), m(1), F({
									sort: e,
									dir: t,
									page: 1
								});
							},
							onPage: (e) => {
								m(e), F({ page: e });
							},
							onSelected: (e) => {
								C(e), te(/* @__PURE__ */ new Set());
							},
							onLayout: (e) => {
								b(e), m(1), n({ layout: e }), F({ page: 1 });
							},
							onPageSize: (e) => {
								ee(e), m(1), n({ pageSize: e }), F({ page: 1 });
							}
						}) : O.isError ? /* @__PURE__ */ (0, Q.jsx)(V, {
							tone: "error",
							children: X("follow:followManagePage.listFailed")
						}) : /* @__PURE__ */ (0, Q.jsx)("div", {
							role: "status",
							"aria-label": X("follow:followManagePage.listLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						})
					]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						j.data && O.data ? /* @__PURE__ */ (0, Q.jsx)(Wn, {
							data: N,
							credentials: ie,
							readOnly: a,
							toast: r
						}) : j.isError || O.isError ? /* @__PURE__ */ (0, Q.jsx)(V, {
							tone: "error",
							children: X("follow:followManagePage.credentialsFailed")
						}) : /* @__PURE__ */ (0, Q.jsx)("div", {
							role: "status",
							"aria-label": X("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Q.jsx)(Qn, {
							readOnly: a,
							toast: r,
							initialName: new URLSearchParams(location.search).get("performer") || "",
							onAdded: () => {
								M.refetch(), l("list"), F({ tab: "list" });
							}
						}),
						O.data ? /* @__PURE__ */ (0, Q.jsx)(dr, {
							groups: N.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: N.alias_suggestions || [],
							sources: N.sources
						}) : null
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(d, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: R ? X("follow:followManagePage.feedSettingsPending", { count: R }) : X("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { Ac as FollowManagePage };

//# debugId=1b170e98-9395-480f-bdad-6a7daa68ccc2