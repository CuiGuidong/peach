(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4eca726e-712b-406c-b036-405445b2b803", e._sentryDebugIdIdentifier = "sentry-dbid-4eca726e-712b-406c-b036-405445b2b803");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as a, $ea3928288112382f$export$439d29a4e110a164 as o, $l as s, ActionSpinner as c, Button as l, ButtonLink as u, Bx as d, COLUMN_SORT as f, Checkbox as p, ChevronSortDown as m, Chip as h, CollapseChevron as g, CollapseRegion as _, ColumnFilterAvatar as v, ColumnFilterChips as y, Ct as b, DataTableFooter as x, DataTableFrame as S, DataTableSort as C, EmptyFocusButton as w, EmptyState as T, ErrorText as ee, ExternalLink as E, FEEDS_KEY as D, FEED_SOURCE_CARD as te, FEED_SOURCE_COLUMNS as ne, FEED_SOURCE_COLUMN_LABELS as O, FEED_SOURCE_FOOTER as re, FEED_SOURCE_TABLE as k, FOLLOW_CHECK_KEY as ie, FOLLOW_CHECK_TASK as ae, FOLLOW_CREDENTIALS_KEY$1 as A, FOLLOW_MANAGE_KEY as j, FOLLOW_MANAGE_NAV as M, FOLLOW_RESOLVE_KEY as N, FieldLabel as P, FollowSearch as oe, Gg as F, H7 as se, Help as I, IndexSearch as ce, Input as le, LAYOUTS as ue, LEGACY_AVATAR_IMG as L, LinkButton as de, M6 as fe, ModalFrame as pe, Note as R, OV as me, P7 as z, QueryErrorNote as B, SORT_DEFAULT_DIR as he, SORT_OPTIONS as V, STAT_STRIP_SIX as H, Select as ge, SelectItem as _e, SelectionDock as ve, SelectionPopover as ye, SiteIcon as be, SiteLabel as U, SortDirectionIcon as xe, SortableBoardTabs as Se, Switch as Ce, Table as we, TableColumnControls as Te, TableColumnResizer as Ee, TableSelectionHeader as De, TaskProgress as Oe, Un as ke, Wt as W, Xf as Ae, __toESM as je, activityKind as Me, addAlias as Ne, addSource as Pe, apiGet as Fe, authorGroups as Ie, authorName as Le, avatarInner as Re, busyProps as G, cardClass as ze, checkEvidenceGap as Be, checkFailures as Ve, checkFeeds as He, checkReceipt as Ue, checkSummary as We, checkedText as Ge, clickedBlank as Ke, codedText as qe, columnOrderingFeature as Je, columnVisibilityFeature as Ye, confirmModal as Xe, createColumnHelper as Ze, createPaginatedRowModel as Qe, createSortedRowModel as $e, credentialDone as K, dZ as et, dropSources as tt, du as nt, enterPageSelection as rt, errorHeadline as it, errorMessage as q, exitPageSelection as at, feedIntervalText as ot, feedSourcesSkeleton as st, fetchCheckJob as ct, fetchCredentials as lt, fetchFeeds as J, fetchFollow as ut, fetchResolveJob as dt, fetchSuggestions as ft, flexRender as pt, followFeedPages as mt, followListSurfaceSkeleton as ht, groupByAuthor as gt, isBroken as _t, isLayout as vt, jobText as yt, joinList as bt, keepSelected as xt, l7 as St, localTime as Ct, lookupFeedActor as wt, mapLimit as Tt, markAllPending as Et, pageSizeOf as Dt, pageWindow as Ot, patchSource as kt, queryClient as At, quoted as jt, reloadFollowManage as Mt, removeAlias as Nt, removeFeed as Pt, removeSource as Ft, renameAliasGroup as It, require_jsx_runtime as Lt, require_react as Rt, resolveFollowSort as zt, rowPaginationFeature as Bt, rowSelectionFeature as Vt, rowSelectionOperation as Ht, rowSortingFeature as Ut, runBulkAction as Wt, selectionState as Gt, serverLabel as Kt, setFeedEnabled as qt, setSourceEnabled as Jt, sortLabel as Yt, startCheck as Xt, startResolve as Zt, statusText as Qt, suggestFeedActors as $t, t as Y, tableFeatures as en, tableRows as tn, th as nn, toggleGroup as rn, unmarkItems as an, useAction as on, useBackgroundJob as sn, useMutation as cn, usePageSelection as ln, useQuery as un, useRectangleSelection as dn, useRememberedPageSize as fn, useRememberedPagination as pn, useRowWorkContext as mn, useTable as hn, useTableFilters as gn, useTablePreferences as _n, useTableSelection as vn, useWorkContextMenu as yn, utcDate as bn } from "./peach-app.js";
import { Page as xn } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as Sn, ErrorLine as Cn, FeedPageAlias as wn, SourceIcon as Tn, SourceLink as En, StatusBadge as Dn } from "./peach-app.source-view-CqeSCcU2.js";
// src/react/follow-manage/search-results.tsx
var X = /* @__PURE__ */ je(Rt(), 1), Z = Lt(), On = en({ rowSelectionFeature: Vt }), kn = Ze(), An = kn.columns([
	kn.display({
		id: "select",
		cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(p, {
			slot: null,
			"aria-label": Y("follow:shared.selectNamed", { name: `${e.original.providerLabel} · ${e.original.selectionName ?? e.original.name}` }),
			isSelected: e.getIsSelected(),
			isDisabled: !e.getCanSelect(),
			onChange: (t) => e.toggleSelected(t)
		})
	}),
	kn.display({
		id: "name",
		header: () => Y("follow:searchResults.name"),
		cell: ({ row: { original: e } }) => /* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, Z.jsx)(v, {
				size: "medium",
				person: {
					...e.portrait,
					name: e.name,
					source_avatar_url: e.avatar ?? void 0
				}
			}), /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-medium wrap-anywhere text-text-primary",
					children: e.name
				}), e.details ? /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "text-caption-1-regular wrap-anywhere text-text-secondary",
					children: e.details
				}) : null]
			})]
		})
	}),
	kn.display({
		id: "provider",
		header: () => Y("follow:searchResults.source"),
		cell: ({ row: { original: e } }) => /* @__PURE__ */ (0, Z.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 whitespace-nowrap",
			children: [e.provider === "javdb" || e.provider === "dmm" ? /* @__PURE__ */ (0, Z.jsx)(be, { site: e.provider }) : /* @__PURE__ */ (0, Z.jsx)(Tn, { provider: e.provider }), e.providerLabel]
		})
	}),
	kn.display({
		id: "address",
		header: () => Y("follow:searchResults.address"),
		cell: ({ row: { original: { url: e } } }) => /* @__PURE__ */ (0, Z.jsx)(de, {
			href: e,
			target: "_blank",
			rel: "noopener noreferrer",
			size: "small",
			trailingIcon: W,
			title: e,
			"aria-label": e,
			className: "min-w-0 justify-start [&>span]:min-w-0",
			children: /* @__PURE__ */ (0, Z.jsx)("span", {
				"data-middle-truncate": "",
				"data-external-link-label": "",
				className: "block truncate",
				children: e.replace(/^https?:\/\//, "")
			})
		})
	})
]);
function jn({ label: e, items: o, onPick: s }) {
	let c = Object.fromEntries(o.filter((e) => e.picked).map((e) => [e.id, !0])), l = hn({
		features: On,
		data: o,
		columns: An,
		getRowId: (e) => e.id,
		state: { rowSelection: c },
		enableRowSelection: (e) => e.original.selectable !== !1,
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(c) : e;
			for (let e of o) {
				let n = !!t[e.id];
				e.selectable !== !1 && n !== !!c[e.id] && s?.(e.id, n);
			}
		}
	}), u = o.some((e) => e.selectable !== !1);
	return /* @__PURE__ */ (0, Z.jsx)(S, {
		follow: !0,
		onRowClick: s ? (e) => l.getRow(e).toggleSelected() : void 0,
		onRectangle: s && u ? (e, t) => l.setRowSelection({
			...t ? c : {},
			...Object.fromEntries(e.map((e) => [e, !0]))
		}) : void 0,
		children: /* @__PURE__ */ (0, Z.jsxs)(we, {
			"aria-label": e,
			size: "sm",
			className: "min-w-144 table-fixed",
			children: [/* @__PURE__ */ (0, Z.jsx)(a, { children: l.getHeaderGroups()[0].headers.filter((e) => s || e.id !== "select").map((t) => /* @__PURE__ */ (0, Z.jsx)(n, {
				id: t.id,
				isRowHeader: t.id === "name",
				className: t.id === "select" ? "w-12" : t.id === "provider" ? "w-36" : t.id === "address" ? "w-52" : void 0,
				children: t.id === "select" ? /* @__PURE__ */ (0, Z.jsx)(De, {
					table: l,
					label: Y("shell:dataTable.selectAll", { label: e }),
					disabled: !u
				}) : /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-semibold",
					children: pt(t.column.columnDef.header, t.getContext())
				})
			}, t.id)) }), /* @__PURE__ */ (0, Z.jsx)(t, { children: l.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
				id: e.id,
				"data-board-selected": e.getIsSelected() || void 0,
				"data-rectangle-disabled": !e.getCanSelect() || void 0,
				children: e.getAllCells().filter((e) => s || e.column.id !== "select").map((e) => /* @__PURE__ */ (0, Z.jsx)(i, { children: pt(e.column.columnDef.cell, e.getContext()) }, e.id))
			}, e.id)) })]
		})
	});
}
// src/react/follow-manage/add-source.tsx
var Mn = Y("follow:addCreatorSource.placeholder"), Nn = Y("follow:addCreatorSource.title"), Pn = Y("follow:addCreatorSource.searchingByName"), Fn = Y("follow:addCreatorSource.recognizing"), In = Y("follow:addCreatorSource.noSourceFound"), Ln = "/settings/subscriptions", Rn = (e, t) => `${e}:${t.url}`;
async function zn(e, t) {
	let { groups: n } = await ft(e, t);
	return n.flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: Kt(t.matched_code ?? "", t.matched || ""),
		n: t.n,
		group: Kt(e.label_code ?? "", e.label),
		portrait: e.kind === "tag" ? void 0 : { source_avatar_url: t.avatar_url ?? void 0 }
	})));
}
function Bn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider)).length, a = i === r.length ? Y("follow:addCreatorSource.allSources") : Y("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Z.jsx)(ye, {
		label: Y("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: s,
		empty: Y("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider,
			selected: !t.has(e.provider),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(Tn, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: Y("follow:shared.selectAll"),
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: Y("follow:shared.selectNone"),
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider)))
			},
			{
				label: Y("follow:addCreatorSource.credentialSettings"),
				href: Ln
			}
		]
	});
}
function Vn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(R, {
		tone: "error",
		title: e.line,
		children: yt(e, "error") || Y("follow:addCreatorSource.searchFailed")
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider)), o = (e.external_searches || []).filter((e) => !n.has(e.provider)), s = Object.entries(e.failures || {}), c = s.filter(([e]) => !n.has(e) && !o.some((t) => t.provider === e)), l = e.candidates?.length || e.external_searches?.length || s.length, u = (t, n) => Kt(e.failure_codes?.[t]?.code ?? "", n, e.failure_codes?.[t]?.params);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, Z.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? /* @__PURE__ */ (0, Z.jsx)(jn, {
				label: Y("follow:addCreatorSource.results"),
				items: a.map((e) => {
					let n = Rn(t, e);
					return {
						id: n,
						name: qe(e, "label"),
						provider: e.provider,
						providerLabel: e.provider_label,
						url: e.url,
						avatar: e.avatar_url,
						selectable: !e.known,
						picked: !e.known && !r.has(n),
						details: e.known ? Y("follow:addCreatorSource.alreadyFollowing") : qe(e, "evidence")
					};
				}),
				onPick: i
			}) : null,
			!a.length && !o.length && !c.length ? /* @__PURE__ */ (0, Z.jsx)(I, { children: l ? Y("follow:searchResults.hiddenByFilter") : In }) : null,
			o.map((t) => {
				let n = e.failures?.[t.provider];
				return /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, Z.jsx)(I, { children: n ? u(t.provider, n) : qe(t, "evidence") }), /* @__PURE__ */ (0, Z.jsx)(E, {
						href: t.url,
						children: Y("follow:shared.labeled", {
							label: qe(t, "label"),
							value: t.query
						})
					})]
				}, t.url);
			}),
			c.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(I, { children: Y("follow:shared.labeled", {
				label: e,
				value: u(e, t)
			}) }, e))
		]
	});
}
function Hn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(""), [c, u] = (0, X.useState)(/* @__PURE__ */ new Set()), [d, f] = (0, X.useState)(/* @__PURE__ */ new Set()), [p, m] = (0, X.useState)(""), [h, g] = (0, X.useState)(0), { job: _, running: v, outcome: y, start: b, dismiss: x } = sn({
		queryKey: N,
		queryFn: ({ signal: e }) => dt(e),
		start: (e) => Zt([e]),
		onStarted: () => f(/* @__PURE__ */ new Set()),
		onError: (e) => m(q(e)),
		onFinish: (e) => {
			e.status === "failed" && m(yt(e, "error") || Y("follow:addCreatorSource.searchFailed"));
		}
	}), S = (e) => {
		n || v || b.isPending || (m(""), s(e), a(e), b.mutate(e));
	}, C = y?.results || [], w = C.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !c.has(e.provider)).map((e) => ({
		candidate: e,
		key: Rn(t, e)
	})).filter((e) => !d.has(e.key))), T = cn({
		mutationFn: async (e) => {
			let t = [], n = [];
			g(0);
			for (let r of e) {
				try {
					let e = await Pe(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(Y("follow:shared.labeled", {
						label: r.candidate.label,
						value: q(e)
					}));
				}
				g((e) => e + 1);
			}
			if (n.length) try {
				await Xt(n);
			} catch (e) {
				t.push(q(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Mt(), e.failures.length ? m(bt(e.failures)) : (m(""), x(), r(Y("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => m(q(e))
	}), ee = e.suggestions || [], E = !o.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Nn,
		className: ze({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Nn
			}),
			/* @__PURE__ */ (0, Z.jsx)(oe, {
				label: Y("follow:addCreatorSource.inputLabel"),
				placeholder: Mn,
				suggestionsLabel: Y("follow:addCreatorSource.suggestions"),
				value: i,
				setValue: a,
				search: S,
				kind: "creator",
				suggest: zn,
				readOnly: n,
				busy: v || b.isPending,
				actions: /* @__PURE__ */ (0, Z.jsx)(Bn, {
					credentials: t,
					hidden: c,
					onHidden: u
				})
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [v || b.isPending ? /* @__PURE__ */ (0, Z.jsx)(Oe, {
					embedded: !0,
					kind: Me("follow-resolve"),
					label: yt(_) || (_?.total ? Y("follow:addCreatorSource.searchProgress", {
						checked: _.checked || 0,
						count: _.total
					}) : E ? Pn : Fn),
					value: _?.checked,
					total: _?.total
				}) : null, p ? /* @__PURE__ */ (0, Z.jsx)(R, {
					tone: "error",
					title: Y("follow:addJavFeed.notCompleted"),
					children: p
				}) : null]
			}),
			C.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:addCreatorSource.results") }),
					C.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(Vn, {
						row: e,
						at: t,
						hidden: c,
						unpicked: d,
						onPick: (e, t) => f((n) => {
							let r = new Set(n);
							return t ? r.delete(e) : r.add(e), r;
						})
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => x(),
								children: Y("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: n || !w.length,
								...G(T.isPending),
								onClick: () => T.mutate(w),
								children: Y("follow:addCreatorSource.addSelected", { count: w.length })
							}),
							T.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:addCreatorSource.addingProgress", {
									added: h,
									count: w.length
								})
							}) : null
						]
					})
				]
			}) : null,
			ee.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: Y("follow:addCreatorSource.suggested")
				}), ee.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? Y("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : Y("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => S(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Un = Y("follow:addJavFeed.placeholder"), Wn = Y("follow:addJavFeed.title");
function Gn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let { owner: e } of t) e && n.set(e.id, e.name);
	if (n.size > 1) return {
		text: Y("follow:addJavFeed.cardsSplitAcrossPeople", { names: bt([...n.values()]) }),
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: Y("follow:addJavFeed.willAddUnder", { name: r }),
		blocked: !1
	} : e.known ? {
		text: Y("follow:addJavFeed.willAddUnderKnown", { name: e.known.name }),
		blocked: !1
	} : {
		text: Y("follow:addJavFeed.willCreate", { name: e.q }),
		blocked: !1
	};
}
async function Kn(e, t) {
	let n = new URLSearchParams({
		q: e,
		kind: "performer",
		limit: "8"
	}), { groups: r } = await Fe(`/api/suggest?${n}`, t);
	return r.flatMap((e) => e.items.map((e) => ({
		group: Y("follow:addJavFeed.librarySuggestions"),
		value: e.value,
		matched: e.matched,
		portrait: {
			...e,
			id: e.entity_id
		}
	})));
}
async function qn(e, t) {
	let { items: n } = await $t(e, t);
	return n.map((e) => ({
		group: Y("follow:addJavFeed.onlineSuggestions"),
		value: e.name,
		matched: e.provider,
		portrait: {
			source_avatar_url: e.avatar_url,
			name: e.name
		}
	}));
}
function Jn({ name: e, names: t, record: n, subscription: r }) {
	let i = t.filter((t) => t !== e), a = Y(r === "enabled" ? "follow:addJavFeed.sourceSubscribed" : r === "paused" ? "follow:shared.paused" : "follow:addJavFeed.sourceNotSubscribed");
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-x-2 gap-y-1",
		children: [
			i.length ? /* @__PURE__ */ (0, Z.jsx)(wn, { name: bt(i) }) : null,
			n ? /* @__PURE__ */ (0, Z.jsx)(h, {
				variant: "caption",
				color: "neutral",
				children: n
			}) : null,
			/* @__PURE__ */ (0, Z.jsx)(h, {
				variant: "caption",
				color: r === "enabled" ? "lime" : "neutral",
				children: a
			})
		]
	});
}
function Yn(e, t) {
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
			details: /* @__PURE__ */ (0, Z.jsx)(Jn, {
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
			details: /* @__PURE__ */ (0, Z.jsx)(Jn, {
				name: n.name,
				names: e.names,
				subscription: e.subscription
			})
		});
	}
	return [...i, ...a];
}
function Xn({ readOnly: e, toast: t, onAdded: n, initialName: r = "" }) {
	let [i, a] = (0, X.useState)(r), [o, s] = (0, X.useState)(null), [u, d] = (0, X.useState)(/* @__PURE__ */ new Set()), f = on(), p = (0, X.useRef)(null), m = (0, X.useRef)(""), h = (e) => {
		s(null), d(/* @__PURE__ */ new Set()), f.run("lookup", (t) => wt(e, t), (e) => {
			s(e);
			let t = new Set(e.suggested), n = e.known?.sources.filter((e) => e.provider === "javdb") ?? [];
			d(new Set(e.candidates.filter((r) => r.subscription !== "enabled" && t.has(r.id) && (!n.length || r.held_by?.id === e.known?.id || n.some((e) => e.url === r.url))).map((e) => `javdb:${e.id}`)));
		});
	}, g = () => {
		s(null), d(/* @__PURE__ */ new Set()), f.setError("");
	};
	(0, X.useEffect)(() => {
		r && m.current !== r && (m.current = r, p.current?.scrollIntoView({ block: "start" }), a(r), h(r));
	}, [r]);
	let _ = () => {
		if (!o || !b || b.blocked) return;
		let e = y.filter((e) => e.provider === "javdb").map((e) => e.sourceId), r = y.filter((e) => e.provider === "dmm").map((e) => e.sourceId);
		f.run("follow", (t) => mt(o.q, e, r, o.dmm_selection, t), (e) => {
			t(e.created ? Y("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : Y("follow:addJavFeed.subscribed", { name: e.entity_name })), a(""), g(), n();
		});
	}, v = o ? Yn(o, u) : [], y = v.filter((e) => e.selectable && e.picked), b = o && y.length ? Gn(o, y) : null, x = v.some((e) => e.selectable), S = f.busy === "follow";
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		id: "add-jav-subscription",
		ref: p,
		"aria-label": Wn,
		className: ze({
			padding: "none",
			className: "flex scroll-mt-24 flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: /* @__PURE__ */ (0, Z.jsx)("span", {
					"data-copy-key": "follow.addJavFeed.title",
					children: Wn
				})
			}),
			/* @__PURE__ */ (0, Z.jsx)(oe, {
				label: Y("follow:addJavFeed.actressName"),
				placeholder: Un,
				suggestionsLabel: Y("follow:addJavFeed.suggestions"),
				value: i,
				setValue: a,
				search: h,
				kind: "performer",
				suggest: Kn,
				suggestOnline: qn,
				readOnly: e,
				busy: !!f.busy,
				lookup: { pending: f.busy === "lookup" }
			}),
			f.busy === "lookup" ? /* @__PURE__ */ (0, Z.jsx)(I, {
				role: "status",
				children: Y("follow:addJavFeed.searching")
			}) : null,
			f.error ? /* @__PURE__ */ (0, Z.jsx)(R, {
				tone: "error",
				title: Y("follow:addJavFeed.notCompleted"),
				children: f.error
			}) : null,
			o ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					o.unavailable ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "warning",
						title: Y("follow:addJavFeed.javdbSearchFailed"),
						children: Kt(o.unavailable_code ?? "", o.unavailable, o.unavailable_params)
					}) : null,
					o.dmm_unavailable ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "warning",
						title: Y("follow:addJavFeed.dmmSearchFailed"),
						children: Kt(o.dmm_unavailable.error_code ?? "", o.dmm_unavailable.error, o.dmm_unavailable.error_params)
					}) : null,
					v.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:addCreatorSource.results") }), /* @__PURE__ */ (0, Z.jsx)(jn, {
						label: Y("follow:addJavFeed.searchResults"),
						items: S ? v.map((e) => ({
							...e,
							selectable: !1
						})) : v,
						onPick: (e, t) => d((n) => {
							let r = new Set(n);
							return t ? r.add(e) : r.delete(e), r;
						})
					})] }) : !o.unavailable && !o.dmm_unavailable ? /* @__PURE__ */ (0, Z.jsx)(I, { children: Y("follow:addJavFeed.noMatch") }) : null,
					x ? /* @__PURE__ */ (0, Z.jsx)(I, {
						role: "status",
						children: b?.text ?? Y("follow:addJavFeed.pickCardsHint")
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: S,
							onClick: g,
							children: Y("follow:shared.close")
						}), x ? /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							size: "small",
							disabled: e || !b || b.blocked,
							leadingIcon: S ? c : void 0,
							...G(S),
							onClick: _,
							children: Y("follow:addJavFeed.subscribePicked", { count: y.length })
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function Zn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(pe, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: Y("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Z.jsx)(Qn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Qn({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = on();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => It(t.canonical_key, i.trim(), e), () => {
				Mt(), r(Y("follow:creatorAliases.renamed", { name: i.trim() })), n();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Z.jsx)(e, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: Y("follow:creatorAliases.rename")
			}),
			/* @__PURE__ */ (0, Z.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: [Y("follow:creatorAliases.currentName"), t.canonical_name]
			}),
			/* @__PURE__ */ (0, Z.jsx)(le, {
				"aria-label": Y("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: Y("follow:creatorAliases.renameHint")
			}),
			o.error ? /* @__PURE__ */ (0, Z.jsx)(R, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					onClick: n,
					children: Y("follow:shared.cancel")
				}), /* @__PURE__ */ (0, Z.jsx)(l, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...G(!!o.busy),
					children: Y("follow:creatorAliases.rename")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var $n = (e) => Y("follow:creatorAliases.removeBody", { alias: e }), er = en({
	rowSelectionFeature: Vt,
	rowSortingFeature: Ut,
	rowPaginationFeature: Bt,
	columnVisibilityFeature: Ye,
	columnOrderingFeature: Je,
	sortedRowModel: $e(),
	paginatedRowModel: Qe()
}), tr = er, nr = {
	id: "select",
	label: Y("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, rr = {
	id: "canonical",
	label: Y("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, ir = [
	nr,
	rr,
	{
		id: "alias",
		label: Y("follow:creatorAliases.platformAlias"),
		width: 240
	},
	{
		id: "evidence",
		label: Y("follow:creatorAliases.evidence"),
		width: 320
	},
	{
		id: "actions",
		label: Y("follow:shared.actions"),
		width: 112
	}
], ar = [
	nr,
	rr,
	{
		id: "aliases",
		label: Y("follow:creatorAliases.platformAlias"),
		width: 400
	},
	{
		id: "actions",
		label: Y("follow:shared.actions"),
		width: 184,
		min: 168
	}
], or = (e) => e.alias;
function sr(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function cr({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Sn, {
			group: sr(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function lr({ groups: e, suggestions: o, sources: s = [], readOnly: c, toast: u }) {
	let d = _n("alias-suggestions", ir), f = _n("alias-saved", ar), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)({}), [y, E] = (0, X.useState)({}), D = ln(() => {
		v({}), E({});
	});
	(0, X.useEffect)(() => {
		(Object.values(_).some(Boolean) || Object.values(y).some(Boolean)) && rt();
	}, [_, y]);
	let te = vn(() => v({})), ne = vn(() => E({})), [O, re] = (0, X.useState)([]), [k, ie] = (0, X.useState)([]), [ae, A] = pn("alias-suggestions"), [j, M] = pn("alias-saved"), N = (0, X.useRef)(null), oe = (0, X.useRef)(null), F = gn(o, {
		canonical: {
			values: (e) => e.canonical,
			option: (e) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(Sn, {
				group: sr(s, e),
				name: e,
				small: !0
			}) })
		},
		alias: {
			values: (e) => e.alias,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(Sn, {
				group: sr(s, t?.canonical ?? e),
				name: e,
				small: !0
			}) })
		},
		evidence: { values: (e) => Kt(e.evidence_code ?? "", e.evidence, e.evidence_params) }
	}, () => A((e) => ({
		...e,
		pageIndex: 0
	}))), se = gn(e, {
		canonical: {
			values: (e) => e.canonical_name,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(Sn, {
				group: sr(s, e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		},
		aliases: {
			values: (e) => e.aliases.map((e) => e.name),
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(Sn, {
				group: sr(s, t?.canonical_name ?? e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		}
	}, () => M((e) => ({
		...e,
		pageIndex: 0
	}))), I = {
		...ae,
		pageIndex: Math.min(ae.pageIndex, Math.max(0, Math.ceil(F.items.length / ae.pageSize) - 1))
	}, ce = {
		...j,
		pageIndex: Math.min(j.pageIndex, Math.max(0, Math.ceil(se.items.length / j.pageSize) - 1))
	}, [ue, L] = (0, X.useState)(""), [de, pe] = (0, X.useState)(""), [R, me] = (0, X.useState)(""), B = cn({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await Ne(n.canonical, n.alias);
				} catch (n) {
					throw t && Mt(), Error(Y("follow:creatorAliases.mergePartialError", {
						error: q(n),
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
			L(""), v({}), Mt();
		},
		onError: (e) => L(q(e))
	}), he = cn({
		mutationFn: (e) => Ne(e.canonical, e.alias),
		onSuccess: () => {
			L(""), pe(""), me(""), Mt(), u(Y("follow:creatorAliases.saved"));
		},
		onError: (e) => L(q(e))
	}), V = cn({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await Nt(e), n += 1;
			} catch (e) {
				throw Error(Y("follow:creatorAliases.removePartialError", {
					error: q(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				Mt();
			}
		},
		onSuccess: (e, t) => {
			L(""), E({}), typeof t == "string" && u(Y("follow:creatorAliases.removed"));
		},
		onError: (e) => L(q(e))
	}), H = {
		receipt: u,
		failure: (e) => L(q(e))
	}, ge = (e, t) => ({
		key: e ? "merge-all" : "merge",
		reversal: "undo",
		label: Y(e ? "follow:creatorAliases.mergeAllCount" : "follow:creatorAliases.mergeSelectedCount", { count: t }),
		confirm: (t) => ({
			title: Y(e ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: Y("follow:creatorAliases.mergeBody", {
				count: t.length,
				pairs: bt(t.map((e) => Y("follow:creatorAliases.mergePair", {
					alias: jt(e.alias),
					canonical: jt(e.canonical)
				})))
			}),
			confirmLabel: Y(e ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm")
		}),
		run: async (e) => {
			let { done: t } = await B.mutateAsync([...e]);
			return async () => {
				for (let n of e.slice(0, t)) await Nt(n.alias);
				await Mt();
			};
		},
		receipt: (e) => Y("follow:creatorAliases.merged", { count: e.length })
	}), _e = (e, t) => {
		e.length && Wt(ge(t, e.length), e, H).catch(H.failure);
	}, ye = {
		key: "remove",
		reversal: "undo",
		label: Y("follow:creatorAliases.removeSelectedCount", { count: 0 }),
		confirm: (e) => ({
			title: Y("follow:creatorAliases.removeSelectedTitle"),
			body: Y("follow:creatorAliases.removeSelectedBody", { count: e.length }),
			items: e.map((e) => e.name),
			confirmLabel: Y("follow:creatorAliases.removeSelectedConfirm")
		}),
		run: async (e) => (await V.mutateAsync(e.map((e) => e.name)), async () => {
			for (let t of e) await Ne(t.canonical, t.name);
			await Mt();
		}),
		receipt: () => Y("follow:creatorAliases.removed")
	}, be = (e) => void Xe({
		title: Y("follow:creatorAliases.removeTitle"),
		body: $n(e),
		confirmLabel: Y("follow:creatorAliases.removeTitle"),
		onConfirm: () => V.mutateAsync(e)
	}), U = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: B.isPending,
		removing: V.isPending,
		merge: _e,
		remove: be,
		rename: g
	});
	U.current = {
		sources: s,
		readOnly: c,
		merging: B.isPending,
		removing: V.isPending,
		merge: _e,
		remove: be,
		rename: g
	};
	let xe = (0, X.useMemo)(() => {
		let e = Ze();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(De, {
					table: e.table,
					label: Y("follow:creatorAliases.selectAllPending")
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": Y("follow:creatorAliases.selectPendingRow", {
						alias: e.row.original.alias,
						name: e.row.original.canonical
					}),
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: Y("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(cr, {
					sources: U.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: Y("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Kt(e.evidence_code ?? "", e.evidence, e.evidence_params), {
				id: "evidence",
				header: Y("follow:creatorAliases.evidence"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: Y("follow:shared.actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: U.current.readOnly,
					...G(U.current.merging),
					onClick: () => U.current.merge([e.row.original], !1),
					children: Y("follow:shared.merge")
				})
			})
		]);
	}, []), Se = (0, X.useMemo)(() => {
		let e = Ze();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(De, {
					table: e,
					label: Y("follow:creatorAliases.selectAllSaved")
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					"aria-label": Y("follow:creatorAliases.selectSavedRow", { name: e.original.canonical_name }),
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: Y("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(cr, {
					sources: U.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: Y("follow:creatorAliases.platformAlias"),
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: z,
							"aria-label": Y("follow:creatorAliases.removeAliasNamed", { name: e.name }),
							disabled: U.current.readOnly,
							...G(U.current.removing),
							onClick: () => U.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: Y("follow:shared.actions"),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: U.current.readOnly,
					"aria-label": Y("follow:creatorAliases.renameRowLabel", { name: e.original.canonical_name }),
					onClick: () => U.current.rename(e.original),
					children: Y("follow:creatorAliases.rename")
				})
			})
		]);
	}, []), Ce = hn({
		features: er,
		data: F.items,
		columns: xe,
		getRowId: or,
		state: {
			rowSelection: _,
			sorting: O,
			pagination: I,
			columnOrder: d.columnOrder,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			te(), v(e);
		},
		onSortingChange: (e) => {
			re(e), A((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: A,
		enableRowSelection: !0
	}), Oe = hn({
		features: tr,
		data: se.items,
		columns: Se,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
			sorting: k,
			pagination: ce,
			columnOrder: f.columnOrder,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			ne(), E(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			ie(e), M((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: M
	}), ke = o.filter((e) => _[or(e)]), W = e.filter((e) => y[e.canonical_key]).flatMap((e) => e.aliases.map((t) => ({
		name: t.name,
		canonical: e.canonical_name
	}))), je = mn((e) => o.find((t) => or(t) === e), (e) => {
		let t = Ce.getRow(or(e));
		return [Ht(t.getIsSelected(), () => t.toggleSelected()), {
			id: "merge",
			label: Y("follow:shared.merge"),
			icon: nn,
			disabled: c || B.isPending,
			run: () => _e([e], !1)
		}];
	}), Me = mn((t) => e.find((e) => e.canonical_key === t), (e) => {
		let t = Oe.getRow(e.canonical_key), n = e.aliases.map((t) => ({
			name: t.name,
			canonical: e.canonical_name
		}));
		return [
			{
				id: "rename",
				label: Y("follow:creatorAliases.rename"),
				icon: b,
				disabled: c,
				run: () => g(e)
			},
			Ht(t.getIsSelected(), () => t.toggleSelected()),
			{
				id: "remove",
				label: Y("follow:creatorAliases.removeRowAliases", { count: n.length }),
				icon: fe,
				danger: !0,
				disabled: c || V.isPending || !n.length,
				run: async () => {
					await Wt(ye, n, H);
				}
			}
		];
	}), Pe = G(B.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: ze({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Y("follow:creatorAliases.title")
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": Y("follow:creatorAliases.displayName"),
							placeholder: Y("follow:creatorAliases.displayNamePlaceholder"),
							value: de,
							onChange: pe,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": Y("follow:creatorAliases.platformAlias"),
							placeholder: Y("follow:creatorAliases.platformAlias"),
							value: R,
							onChange: me,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							disabled: c || !de.trim() || !R.trim(),
							...G(he.isPending),
							onClick: () => he.mutate({
								canonical: de.trim(),
								alias: R.trim()
							}),
							children: Y("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			ue ? /* @__PURE__ */ (0, Z.jsx)(ee, { children: ue }) : null,
			o.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: je.onKeyDown,
				children: [
					je.menu,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: F.items.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "primary",
									size: "small",
									disabled: c,
									...Pe,
									onClick: () => _e(F.items, !0),
									children: Y("follow:creatorAliases.mergeAllCount", { count: F.items.length })
								}),
								/* @__PURE__ */ (0, Z.jsx)(C, {
									label: Y("follow:creatorAliases.pendingTable"),
									sorting: O,
									options: [
										{
											id: "canonical",
											label: Y("follow:creatorAliases.displayName")
										},
										{
											id: "alias",
											label: Y("follow:creatorAliases.platformAlias")
										},
										{
											id: "evidence",
											label: Y("follow:creatorAliases.evidence")
										}
									],
									onChange: (e) => {
										re(e), A((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(Te, {
									preferences: d,
									label: Y("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(ve, {
						label: Y("follow:creatorAliases.pendingBulkActions"),
						visible: ke.length > 0,
						count: Y("follow:creatorAliases.groupsSelected", { count: ke.length }),
						actions: [{
							action: ge(!1, ke.length),
							items: ke,
							host: H,
							disabled: c || B.isPending
						}],
						children: /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: at,
							children: Y("follow:shared.clearSelection")
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(S, {
						ref: N,
						follow: !0,
						preferences: d,
						onRowClick: (e) => Ce.getRow(e)?.toggleSelected(),
						rectangleSelecting: D,
						onRectangle: B.isPending ? void 0 : (e, t) => Ce.setRowSelection({
							...t ? _ : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Z.jsxs)(we, {
							"aria-label": Y("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Ce.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(a, { children: [Ce.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(n, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [F.header(e.id, String(e.column.columnDef.header)) ?? pt(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(Ee, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(n, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(t, {
								renderEmptyState: () => Y("shell:dataTable.empty"),
								children: Ce.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(r, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => je.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(i, { children: pt(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(i, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(x, {
						label: Y("follow:creatorAliases.pendingTable"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: F.items.length,
						pagination: I,
						onChange: A,
						scrollTarget: N
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: Me.onKeyDown,
				children: [
					Me.menu,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(P, { children: Y("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: se.items.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(C, {
								label: Y("follow:creatorAliases.saved"),
								sorting: k,
								options: [{
									id: "canonical",
									label: Y("follow:creatorAliases.displayName")
								}, {
									id: "aliases",
									label: Y("follow:creatorAliases.platformAlias")
								}],
								onChange: (e) => {
									ie(e), M((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(Te, {
								preferences: f,
								label: Y("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(ve, {
						label: Y("follow:creatorAliases.savedBulkActions"),
						visible: W.length > 0,
						count: Y("follow:creatorAliases.aliasesSelected", { count: W.length }),
						actions: [{
							action: {
								...ye,
								label: Y("follow:creatorAliases.removeSelectedCount", { count: W.length })
							},
							items: W,
							host: H,
							disabled: c || V.isPending
						}],
						children: /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: at,
							children: Y("follow:shared.clearSelection")
						})
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(S, {
						ref: oe,
						follow: !0,
						preferences: f,
						onRowClick: (e) => Oe.getRow(e)?.toggleSelected(),
						rectangleSelecting: D,
						onRectangle: V.isPending ? void 0 : (e, t) => Oe.setRowSelection({
							...t ? y : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Z.jsxs)(we, {
							"aria-label": Y("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Oe.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(a, { children: [Oe.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(n, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [se.header(e.id, String(e.column.columnDef.header)) ?? pt(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(Ee, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(n, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(t, {
								renderEmptyState: () => Y("shell:dataTable.empty"),
								children: Oe.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(r, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => Me.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(i, { children: pt(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(i, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(x, {
						label: Y("follow:creatorAliases.saved"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: se.items.length,
						pagination: ce,
						onChange: M,
						scrollTarget: oe
					})] }) : /* @__PURE__ */ (0, Z.jsx)(T, {
						size: "compact",
						icon: Ae,
						title: Y("follow:creatorAliases.emptyTitle"),
						actions: c ? void 0 : /* @__PURE__ */ (0, Z.jsx)(w, {
							target: `input[aria-label="${Y("follow:creatorAliases.displayName")}"]`,
							children: Y("follow:creatorAliases.addAlias")
						}),
						children: Y("follow:creatorAliases.emptyBody")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(Zn, {
				group: h,
				close: () => g(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var ur = en({
	rowPaginationFeature: Bt,
	rowSelectionFeature: Vt,
	rowSortingFeature: Ut,
	columnVisibilityFeature: Ye,
	columnOrderingFeature: Je,
	sortedRowModel: $e(),
	paginatedRowModel: Qe()
}), dr = () => At.invalidateQueries({
	queryKey: D,
	exact: !0
}), Q = (e) => e.name || e.url, fr = (e) => e.kind.startsWith("javdb") ? "javdb" : e.kind.startsWith("dmm") ? "dmm" : pr(e.url);
function pr(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function mr({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "rose",
		children: Y("follow:feedSources.fetchFailed")
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "lime",
		children: Y("follow:shared.ok")
	}) : /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "gray",
		children: Y("follow:feedSources.notChecked")
	}) : /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "gray",
		children: Y("follow:shared.paused")
	});
}
function hr({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-semibold text-text-secondary ${L}`,
		dangerouslySetInnerHTML: { __html: Re(Q(e), t, null, "performer") }
	});
}
var gr = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function _r(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function vr(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Xe({
		title: n ? Y("follow:feedSources.removeOne") : Y("follow:feedSources.removeMany", { count: e.length }),
		body: n ? Y("follow:feedSources.removeOneBody", { name: Q(n) }) : Y("follow:feedSources.removeManyBody"),
		confirmLabel: Y(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: t
	});
}
function yr({ readOnly: e, toast: o, selection: s }) {
	let c = un({
		queryKey: D,
		queryFn: ({ signal: e }) => J(e)
	}), u = on(), d = _n(k, ne), f = c.data, h = (0, X.useMemo)(() => f?.sources ?? [], [f]), [g, _] = (0, X.useState)(/* @__PURE__ */ new Set()), y = s?.ids ?? g, b = s?.onChange ?? _, [w, T] = (0, X.useState)(1), [E, ie] = fn(k), [ae, A] = (0, X.useState)([]), [j, M] = (0, X.useState)(""), N = (0, X.useMemo)(() => {
		let e = j.toLocaleLowerCase();
		return e ? h.filter((t) => [
			Q(t),
			t.name,
			t.page_name || "",
			t.entity_name || "",
			t.url
		].join(" ").toLocaleLowerCase().includes(e)) : h;
	}, [h, j]), P = gn(N, {
		name: {
			values: Q,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(v, { person: {
				...t,
				id: t.entity_id,
				name: e
			} }) })
		},
		kind: {
			values: (e) => qe(e, "kind_label"),
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(be, { site: fr(t) }) })
		},
		origin: {
			values: (e) => pr(e.url),
			option: (e, t) => ({ leading: /* @__PURE__ */ (0, Z.jsx)(be, { site: t ? fr(t) : e }) })
		},
		status: { values: (e) => e.enabled ? e.last_error ? Y("follow:feedSources.fetchFailed") : e.last_fetched_at ? Y("follow:shared.ok") : Y("follow:feedSources.notChecked") : Y("follow:shared.paused") },
		interval: { values: (e) => ot(e.interval_minutes) },
		fetched: {
			range: "timestamp",
			value: (e) => e.last_fetched_at ? bn(e.last_fetched_at).getTime() / 1e3 : null
		},
		fresh: {
			range: "count",
			value: (e) => e.last_new_count
		}
	}, () => T(1)), oe = Ot(P.items.length, E, w);
	(0, X.useEffect)(() => {
		T((e) => Math.min(e, oe.pages));
	}, [oe.pages]), (0, X.useEffect)(() => {
		b((e) => {
			let t = new Set(h.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [h, b]);
	let I = cn({
		mutationFn: async (e) => {
			let t = await Tt(e.ids, 4, async (t) => {
				e.action === "remove" ? await Pt(t) : await qt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let t = e.results.filter((e) => !e.ok);
			if (b(/* @__PURE__ */ new Set()), dr(), t.length) {
				let e = t[0];
				u.setError(Y("follow:feedSources.writeFailed", {
					count: t.length,
					error: e.ok ? "" : q(e.error)
				}));
			}
		},
		onError: (e) => u.setError(q(e))
	}), le = {
		receipt: o,
		failure: (e) => u.setError(q(e))
	}, ue = (e) => ({
		key: e ? "enable" : "pause",
		label: Y(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: Y(e ? "follow:feedSources.enableMany" : "follow:feedSources.pauseMany"),
			body: Y(e ? "follow:feedSources.enableManyBody" : "follow:feedSources.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => t.enabled !== e), { results: r } = await I.mutateAsync({
				ids: n.map((e) => e.id),
				action: e ? "enabled" : "paused"
			}), i = n.filter((e, t) => r[t]?.ok);
			return async () => {
				await Tt(i.map((e) => e.id), 4, (t) => qt(t, !e)), await dr();
			};
		},
		receipt: (t) => Y(e ? "follow:feedSources.enabledMany" : "follow:feedSources.pausedMany", { count: t.length })
	}), L = {
		key: "remove",
		label: Y("follow:shared.remove"),
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: Y("follow:feedSources.removeMany", { count: e.length }),
			danger: !0,
			body: Y("follow:feedSources.removeManyBody"),
			confirmLabel: Y("follow:feedSources.removeSelected")
		}),
		run: async (e) => {
			await I.mutateAsync({
				ids: e.map((e) => e.id),
				action: "remove"
			});
		},
		receipt: (e) => Y("follow:feedSources.removedMany", { count: e.length })
	}, de = (0, X.useMemo)(() => _r(h), [h]), pe = (0, X.useRef)(null), z = (0, X.useRef)({
		readOnly: e,
		shared: de,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	z.current = {
		readOnly: e,
		shared: de,
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => qt(e.id, t, n), () => void dr()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => He(t, [e.id]), () => void dr()),
		remove: (e) => void vr([e], async () => {
			await Pt(e.id), o(Y("follow:feedSources.removedOne", { name: Q(e) })), dr();
		})
	};
	let he = (0, X.useMemo)(() => {
		let e = Ze(), t = (e) => () => O[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(De, {
					table: e.table,
					label: Y("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: Q(e.row.original) })
				})
			}),
			e.accessor(Q, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = gr(e.row.original, z.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(hr, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Z.jsx)(wn, { name: t }) : null
						]
					});
				}
			}),
			e.accessor((e) => qe(e, "kind_label"), {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: Y("follow:followDetail.viewOnSite"),
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Z.jsx)(U, {
						site: fr(e.row.original),
						label: pr(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(W, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? Y("follow:feedSources.fetchFailed") : e.enabled ? Y("follow:shared.enabled") : Y("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(mr, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: ot(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Ct(e.row.original.last_fetched_at) : Y("follow:feedSources.neverFetched")
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: Y("follow:feedSources.itemCount", { count: e.getValue() })
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(Ce, {
							"aria-label": Y("follow:shared.enableNamed", { name: Q(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: z.current.readOnly,
							onChange: (t) => z.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: et,
							"aria-label": Y("follow:feedSources.fetchNamed", { name: Q(e.row.original) }),
							disabled: z.current.readOnly,
							...G(z.current.busy === `check-${e.row.original.id}`),
							onClick: () => z.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: fe,
							"aria-label": Y("follow:shared.removeNamed", { name: Q(e.row.original) }),
							disabled: z.current.readOnly,
							onClick: () => z.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), V = (0, X.useMemo)(() => Object.fromEntries([...y].map((e) => [String(e), !0])), [y]), H = hn({
		features: ur,
		data: P.items,
		columns: he,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: V,
			sorting: ae,
			pagination: {
				pageIndex: oe.page - 1,
				pageSize: E
			},
			columnOrder: d.columnOrder,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			A(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(V) : e, n = new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e)));
			n.size && s?.onActivate(), b(n);
		}
	}), ge = () => void u.run("check", (e) => He(e), () => void dr()), _e = (e) => {
		s?.onActivate(), b((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, ye = h.filter((e) => y.has(e.id)), xe = h.filter((e) => e.last_error), Se = mn((e) => h.find((t) => String(t.id) === e), (t) => {
		let n = [{
			id: "select",
			label: Y(y.has(t.id) ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: Q(t) }),
			icon: se,
			run: () => _e(t.id)
		}];
		return t.url && n.unshift({
			id: "open",
			label: Y("follow:sourceView.openSource"),
			icon: W,
			run: () => {
				window.open(t.url, "_blank", "noopener,noreferrer");
			}
		}), e || n.push({
			id: "fetch",
			label: Y("follow:feedSources.fetchNamed", { name: Q(t) }),
			icon: et,
			disabled: !!u.busy,
			run: () => z.current.fetch(t)
		}, {
			id: "enabled",
			label: Y(t.enabled ? "follow:shared.pause" : "follow:shared.enable"),
			icon: t.enabled ? me : F,
			disabled: !!u.busy,
			run: () => z.current.toggle(t, !t.enabled)
		}, {
			id: "remove",
			label: Y("follow:shared.removeNamed", { name: Q(t) }),
			icon: fe,
			danger: !0,
			run: () => z.current.remove(t)
		}), n;
	});
	return f ? /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": Y("follow:feedSources.listLabel"),
			className: ze({
				padding: "none",
				className: te
			}),
			onKeyDown: Se.onKeyDown,
			children: [
				Se.menu,
				/* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: Y("follow:feedSources.title")
						}), /* @__PURE__ */ (0, Z.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: Y("follow:feedSources.summary", {
								count: h.length,
								unread: Number(f.unread) || 0
							})
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(ce, {
								label: Y("follow:feedSources.search"),
								value: j,
								onQuery: (e) => {
									M(e), T(1);
								}
							}),
							/* @__PURE__ */ (0, Z.jsx)(l, {
								onClick: ge,
								disabled: e,
								...G(u.busy === "check"),
								children: Y("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Z.jsx)(Te, {
								preferences: d,
								label: Y("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Z.jsx)(C, {
								label: Y("follow:feedSources.title"),
								sorting: ae,
								onChange: (e) => {
									A(e), T(1);
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
									label: O[e]
								}))
							})
						]
					})]
				}),
				xe.length || u.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [xe.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:feedSources.failedTitle", { count: xe.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: xe.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: qe(e, "last_error"),
								children: Y("follow:shared.labeled", {
									label: Q(e),
									value: it(qe(e, "last_error")) || Y("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: Y("follow:feedSources.failedBody")
					}) : null, u.error ? /* @__PURE__ */ (0, Z.jsx)(ee, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)(ve, {
					visible: ye.length > 0,
					label: Y("follow:feedSources.bulkActions"),
					count: Y("follow:feedSources.selectedCount", { count: ye.length }),
					actions: [
						ue(!0),
						ue(!1),
						L
					].map((t) => ({
						action: t,
						items: ye,
						host: le,
						disabled: e || I.isPending
					})),
					children: /* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "ghost",
						size: "small",
						onClick: at,
						children: Y("follow:shared.clearSelection")
					})
				}),
				h.length ? /* @__PURE__ */ (0, Z.jsx)(S, {
					ref: pe,
					follow: !0,
					preferences: d,
					onRowClick: (e) => _e(Number(e)),
					rectangleSelecting: y.size > 0,
					onRectangle: I.isPending ? void 0 : (e, t) => H.setRowSelection({
						...t ? V : {},
						...Object.fromEntries(e.map((e) => [e, !0]))
					}),
					children: /* @__PURE__ */ (0, Z.jsxs)(we, {
						"aria-label": Y("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: ae[0] ? {
							column: ae[0].id,
							direction: ae[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => H.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(a, { children: [H.getHeaderGroups()[0].headers.map((e) => {
							let t = pt(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(n, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [P.header(e.id, O[e.id] || e.id) ?? t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(Ee, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Z.jsx)(n, {
							id: "remaining-space",
							"aria-label": Y("follow:shared.rowSpacer"),
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Z.jsx)(t, {
							renderEmptyState: () => Y("shell:dataTable.empty"),
							children: H.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(r, {
								id: e.id,
								"data-follow-selected": e.getIsSelected() || void 0,
								"data-work-context-row": e.id,
								onContextMenu: (t) => Se.onContextMenu?.(t, e.original, e.id),
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(i, { children: pt(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(i, { "data-table-space": "" })]
							}, e.id))
						})]
					})
				}) : null,
				h.length ? /* @__PURE__ */ (0, Z.jsx)(x, {
					label: Y("follow:feedSources.footerLabel"),
					total: oe.total,
					unit: Y("follow:feedSources.unit"),
					pagination: {
						pageIndex: oe.page - 1,
						pageSize: E
					},
					scrollTarget: pe,
					onChange: (e) => {
						ie(e.pageSize), T(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: re,
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:feedSources.footerSummary", {
							unread: Number(f.unread) || 0,
							enabled: h.filter((e) => e.enabled).length,
							total: h.length
						})
					})
				})
			]
		})
	}) : c.error ? /* @__PURE__ */ (0, Z.jsx)(B, {
		titleKey: "follow:feedSources.loadFailed",
		query: c
	}) : /* @__PURE__ */ (0, Z.jsx)("div", {
		role: "status",
		"aria-label": Y("follow:feedSources.loading"),
		"data-skeleton": "",
		children: /* @__PURE__ */ (0, Z.jsx)("div", {
			"aria-hidden": "true",
			inert: !0,
			dangerouslySetInnerHTML: { __html: st() }
		})
	});
}
// src/react/follow-manage/source-list.tsx
var br = en({
	rowPaginationFeature: Bt,
	rowSelectionFeature: Vt,
	rowSortingFeature: Ut,
	columnVisibilityFeature: Ye,
	columnOrderingFeature: Je,
	paginatedRowModel: Qe()
}), xr = Object.fromEntries(Object.entries(f).map(([e, t]) => [t, e])), Sr = 740;
function Cr() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Sr));
		r.observe(e), n.current = r, t(e.clientWidth < Sr);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var wr = {
	select: Y("follow:shared.select"),
	author: Y("follow:shared.creator"),
	source: Y("follow:followFeed.filterKindSource"),
	provider: Y("follow:shared.site"),
	status: Y("follow:shared.status"),
	checked: Y("follow:sourceList.colLastChecked"),
	actions: Y("follow:shared.actions")
}, Tr = Object.entries(wr).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
})), Er = "timestamp", Dr = Object.entries(wr).map(([e, t]) => ({
	id: e,
	label: t,
	range: e === "checked" ? Er : void 0
}));
function Or(e, t, n, r) {
	let i = [{
		id: "select",
		label: Y(t ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: e.label }),
		icon: St,
		run: () => n(!t)
	}];
	return e.url && i.unshift({
		id: "open",
		label: Y("follow:sourceView.openSource"),
		icon: W,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}), r.readOnly || i.push({
		id: "check",
		label: Y("follow:sourceList.checkNamed", { name: e.label }),
		icon: et,
		disabled: !e.enabled || r.busy,
		run: () => r.check([e.id])
	}, {
		id: "enabled",
		label: Y(e.enabled ? "follow:shared.pause" : "follow:shared.enable"),
		icon: e.enabled ? me : F,
		run: () => r.toggle(e, !e.enabled)
	}, {
		id: "remove",
		label: Y("follow:sourceList.unfollow"),
		icon: fe,
		danger: !0,
		run: () => r.remove(e)
	}), i;
}
function kr({ source: e, selected: t, onToggle: n, handlers: r }) {
	let i = yn(), a = () => ({
		key: e.id,
		operations: Or(e, t, n, r)
	});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		"data-rectangle-key": e.id,
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onContextMenu: (e) => i.onContextMenu(e, a()),
		onKeyDown: (e) => {
			(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && i.onKeyDown(e, a());
		},
		onClick: (e) => {
			Ke(e, e.currentTarget) && n(!t);
		},
		children: [
			i.menu,
			/* @__PURE__ */ (0, Z.jsx)(p, {
				isSelected: t,
				onChange: n,
				"aria-label": Y("follow:shared.selectNamed", { name: e.label })
			}),
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Z.jsx)(Tn, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(En, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(o, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(Dn, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, Z.jsx)(Cn, { text: qe(e, "last_error") })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ge(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(Ce, {
						"aria-label": Y("follow:shared.enableNamed", { name: e.label }),
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: et,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.label }),
							disabled: !e.enabled || r.readOnly,
							...G(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: fe,
							"aria-label": Y("follow:shared.removeNamed", { name: e.label }),
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function Ar({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: s, onToggle: c }) {
	let u = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(_t).length, p = bt([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = Gt(r, u);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Y("follow:sourceList.groupLabel", { name: t }),
		className: ze({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Sn, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Z.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Tn, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Z.jsx)(o, { children: Y("follow:sourceList.providers", { providers: p }) }),
							f ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: Y("follow:shared.failedCount", { count: f })
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: et,
						"aria-label": Y("follow:sourceList.checkGroup", { name: t }),
						disabled: !d.length || i.readOnly,
						...G(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							leadingIcon: St,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": Y(h.all ? "follow:sourceList.deselectGroup" : "follow:sourceList.selectGroup", { name: t }),
							onClick: () => s(!h.all),
							children: h.all ? Y("follow:shared.deselectAll") : Y("follow:shared.selectAll")
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: g,
							"aria-label": Y(n ? "follow:sourceList.collapseGroup" : "follow:sourceList.expandGroup", { name: t }),
							onClick: () => a(!n),
							children: Y(n ? "follow:shared.collapse" : "follow:shared.expand")
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Z.jsx)(_, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(kr, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function jr(e) {
	let { data: o, sort: s, dir: c, page: u, layout: h, pageSize: _, selected: v, readOnly: b, onSort: C, onPage: w, onLayout: ee, onPageSize: E, onSelected: D, toast: te, openFollow: ne } = e, O = (e, t) => D(/* @__PURE__ */ new Set([...t ? v : [], ...e.map(Number)])), re = dn(O, {
		selecting: e.selecting,
		start: "[data-source-divider]"
	}), k = o.sources, A = (0, X.useMemo)(() => o.author_aliases || [], [o.author_aliases]), j = o.counts || {}, [M, N] = (0, X.useState)(/* @__PURE__ */ new Set()), P = (0, X.useRef)(null), [oe, F] = Cr(), [se, I] = (0, X.useState)(""), le = (0, X.useMemo)(() => Ie(k, s, c, A), [
		k,
		s,
		c,
		A
	]), L = (0, X.useMemo)(() => tn(le, s, c, A), [
		le,
		s,
		c,
		A
	]), [de, pe] = (0, X.useState)(""), me = (0, X.useMemo)(() => {
		let e = de.toLocaleLowerCase();
		return e ? L.filter((t) => [
			t.author,
			t.source.label,
			t.source.provider_label,
			t.source.url || ""
		].join(" ").toLocaleLowerCase().includes(e)) : L;
	}, [L, de]), z = gn(me, {
		author: {
			values: (e) => e.author,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(Sn, {
				group: t.group,
				name: e,
				small: !0
			}) })
		},
		source: {
			values: (e) => e.source.label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(Tn, { provider: t.source.provider }) })
		},
		provider: {
			values: (e) => e.source.provider_label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(Tn, { provider: t.source.provider }) })
		},
		status: { values: (e) => Qt(e.source) },
		checked: {
			range: Er,
			value: (e) => e.source.last_checked_at ? bn(e.source.last_checked_at).getTime() / 1e3 : null
		}
	}, () => w(1)), B = (0, X.useMemo)(() => {
		let e = new Set(z.items.map((e) => e.source.id));
		return le.flatMap((t) => {
			let n = t.filter((t) => e.has(t.id));
			return n.length ? [{
				key: String(t[0].author_key || t[0].id),
				name: Le(t, A),
				sources: n
			}] : [];
		});
	}, [
		A,
		z.items,
		le
	]), { job: H, running: ye, outcome: be, start: U } = sn({
		queryKey: ie,
		taskKey: ae,
		queryFn: ({ signal: e }) => ct(e),
		start: (e) => Xt(e),
		onError: (e) => I(q(e)),
		onFinish: (e) => {
			Mt(), te(e.status === "failed" ? yt(e, "error") || Y("follow:followCheck.checkFailed") : Ue(e));
		}
	}), Se = (e) => {
		ye || U.isPending || (I(""), U.mutate(e));
	}, W = (e, t) => D(rn(v, [e], t)), Ae = (e, t) => D(rn(v, e, t)), je = cn({
		mutationFn: (e) => Ft(e),
		onSuccess: (e, t) => {
			tt([t]), D(rn(v, [t], !1)), te(Y("follow:sourceList.unfollowed"));
		},
		onError: (e) => I(q(e))
	}), Ne = cn({
		mutationFn: (e) => Jt(e.id, e.enabled),
		onSuccess: (e, t) => {
			kt(t.id, { enabled: t.enabled }), I("");
		},
		onError: (e) => I(q(e))
	}), Pe = (e) => void Xe({
		title: Y("follow:sourceList.unfollow"),
		body: Y("follow:sourceList.unfollowBody"),
		confirmLabel: Y("follow:sourceList.unfollow"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: () => je.mutateAsync(e.id)
	}), Fe = cn({
		mutationFn: async (e) => {
			let t = await Tt(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ft(t) : await Jt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") tt(e.done);
			else for (let t of e.done) kt(t, { enabled: e.action === "enabled" });
			D(rn(v, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			t.length ? I(Y("follow:sourceList.bulkPartialFail", {
				failed: t.length,
				total: e.ids.length,
				error: q(t[0]?.error)
			})) : I("");
		},
		onError: (e) => I(q(e))
	}), Re = cn({
		mutationFn: Et,
		onSuccess: (e) => {
			Mt(), e.failed ? I(Y("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: q(e.error)
			})) : I("");
		},
		onError: (e) => I(q(e))
	}), He = {
		receipt: te,
		failure: (e) => I(q(e))
	}, Ke = (e) => ({
		key: e ? "enable" : "pause",
		label: Y(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: Y(e ? "follow:sourceList.enableMany" : "follow:sourceList.pauseMany"),
			body: Y(e ? "follow:sourceList.enableManyBody" : "follow:sourceList.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => k.find((e) => e.id === t)?.enabled !== e), { done: r } = await Fe.mutateAsync({
				ids: n,
				action: e ? "enabled" : "paused"
			});
			return async () => {
				await Tt(r, 4, (t) => Jt(t, !e));
				for (let t of r) kt(t, { enabled: !e });
			};
		},
		receipt: (t) => Y(e ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused", { count: t.length })
	}), Je = {
		key: "delete",
		label: Y("follow:shared.delete"),
		reversal: "irreversible",
		danger: !0,
		holdToConfirm: !0,
		confirm: (e) => ({
			title: Y("follow:sourceList.deleteManyTitle", { count: e.length }),
			danger: !0,
			body: Y("follow:sourceList.deleteManyBody"),
			confirmLabel: Y("follow:sourceList.deleteSelected")
		}),
		run: async (e) => {
			await Fe.mutateAsync({
				ids: [...e],
				action: "remove"
			});
		},
		receipt: (e) => Y("follow:sourceList.bulkDeleted", { count: e.length })
	}, Ye = (e) => {
		let t = [];
		return {
			key: `mark-${e}`,
			label: Y(e === "seen" ? "follow:sourceList.markAllWatched" : "follow:sourceList.ignoreAll"),
			reversal: "undo",
			confirm: ([t]) => e === "seen" ? {
				title: Y("follow:followDetail.markSeen"),
				body: Y("follow:sourceList.markWatchedBody", { count: t })
			} : {
				title: Y("follow:sourceList.markIgnored"),
				body: Y("follow:sourceList.markIgnoredBody", { count: t }),
				recovery: Y("shell:batchFollow.ignoreRecovery")
			},
			run: async () => (t = (await Re.mutateAsync(e)).marked, async () => {
				await an(t), await Mt();
			}),
			receipt: () => Y("follow:sourceList.bulkMarked", { count: t.length })
		};
	}, Qe = (e, t) => Ne.mutate({
		id: e.id,
		enabled: t
	}), $e = (0, X.useRef)({
		check: Se,
		toggle: Qe,
		remove: Pe,
		busy: !1,
		readOnly: b
	});
	$e.current = {
		check: Se,
		toggle: Qe,
		remove: Pe,
		busy: ye || U.isPending,
		readOnly: b
	};
	let K = $e.current, rt = mn((e) => k.find((t) => String(t.id) === e), (e) => Or(e, v.has(e.id), (t) => W(e.id, t), K)), ot = (0, X.useMemo)(() => {
		let e = Ze(), t = (e) => () => wr[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(De, {
					table: e.table,
					label: Y("follow:sourceList.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: e.row.original.source.label })
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, Z.jsx)(Sn, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(En, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Cn, { text: qe(e.row.original.source, "last_error") }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Tn, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Dn, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ge(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(Ce, {
							"aria-label": Y("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: K.readOnly,
							onChange: (t) => $e.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: et,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || K.readOnly,
							...G(K.busy),
							onClick: () => $e.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: fe,
							"aria-label": Y("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: K.readOnly,
							onClick: () => $e.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [K]), st = (0, X.useMemo)(() => {
		let e = xr[s];
		return e ? [{
			id: e,
			desc: c === "desc"
		}] : [];
	}, [s, c]), lt = (0, X.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), J = h === "table", ut = _n("follow-sources", Tr), dt = Ot(J ? z.items.length : B.length, _, u), ft = hn({
		features: br,
		data: z.items,
		columns: ot,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: st,
			rowSelection: lt,
			pagination: {
				pageIndex: dt.page - 1,
				pageSize: _
			},
			columnOrder: ut.columnOrder,
			columnVisibility: ut.visibility
		},
		onColumnVisibilityChange: ut.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(st) : e)[0];
			if (!t) return;
			let n = f[t.id];
			n && C(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(lt) : e;
			D(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: dt.page - 1,
				pageSize: _
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === _ ? n.pageIndex !== t.pageIndex && w(n.pageIndex + 1) : E(n.pageSize);
		}
	}), mt = ft.getRowModel().rows, ht = J ? mt.map((e) => e.original.source.id) : B.slice(dt.start, dt.end).flatMap(({ sources: e }) => e.map((e) => e.id)), gt = Gt(v, ht), _t = [...v], vt = Ve(be), bt = k.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), xt = Be(be), St = B.length > 0 && B.every(({ key: e }) => M.has(e));
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: ze({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		onKeyDown: rt.onKeyDown,
		children: [
			rt.menu,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: oe,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: Y("follow:followManageNav.list")
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: j.new ? Y("follow:sourceList.sourceCountUnseen", {
							count: k.length,
							unseen: Number(j.new) || 0
						}) : Y("follow:sourceList.sourceCount", { count: k.length })
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(ce, {
							label: Y("follow:sourceList.search"),
							value: de,
							onQuery: (e) => {
								pe(e), w(1);
							}
						}),
						bt.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							disabled: b,
							...G(K.busy),
							onClick: () => Se(bt),
							children: Y("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							leadingIcon: et,
							disabled: b,
							"aria-label": Y("follow:sourceList.checkAll"),
							iconOnly: F,
							...G(K.busy),
							onClick: () => Se([]),
							children: Y("follow:sourceList.checkAll")
						}),
						/* @__PURE__ */ (0, Z.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": Y("follow:sourceList.layout"),
									children: [/* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ke,
										"aria-label": ue[0][1],
										"aria-pressed": !J,
										onClick: () => ee("default")
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: nt,
										"aria-label": ue[1][1],
										"aria-pressed": J,
										onClick: () => ee("table")
									})]
								}),
								J ? /* @__PURE__ */ (0, Z.jsx)(Te, {
									preferences: ut,
									label: Y("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(ge, {
										"aria-label": Y("follow:sourceList.sortLabel"),
										prefix: Y("follow:shared.sort"),
										selectedKey: s,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											C(t, he[t]);
										},
										children: V.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(_e, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: xe,
										"data-icon-state": c === "asc" ? "a" : "b",
										"aria-label": Yt(s, c),
										onClick: () => C(s, c === "asc" ? "desc" : "asc")
									})]
								}),
								J ? null : /* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "secondary",
									iconOnly: F,
									leadingIcon: g,
									"aria-expanded": !St,
									"aria-label": Y(St ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => N(St ? /* @__PURE__ */ new Set() : new Set(B.map(({ key: e }) => e))),
									children: Y(St ? "follow:shared.expandAll" : "follow:shared.collapseAll")
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					ye ? /* @__PURE__ */ (0, Z.jsx)(Oe, {
						embedded: !0,
						kind: H?.older ? Me("feed-scrape") : Me("follow-check"),
						label: yt(H) || (H?.total ? Y(H.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: H.checked || 0,
							count: H.total
						}) : Y("follow:sourceList.preparingCheck")),
						value: H?.checked,
						total: H?.total
					}) : null,
					se ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:shared.actionFailed"),
						children: se
					}) : null,
					!ye && be?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "neutral",
						title: Y("follow:followFeed.checkResults"),
						children: We(be)
					}) : null,
					vt.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:sourceList.failedTitle", { count: vt.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: vt.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: Y("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: it(e.error || "") || Y("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: Y("follow:sourceList.failedBody")
					}) : null,
					xt ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "warning",
						children: Y("follow:sourceList.evidenceGap", { error: xt })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(ve, {
				label: Y("follow:sourceList.bulkActions"),
				visible: _t.length > 0,
				count: Y("follow:sourceList.selectedCount", { count: _t.length }),
				actions: [
					Ke(!0),
					Ke(!1),
					Je
				].map((e) => ({
					action: e,
					items: _t,
					host: He,
					disabled: b || Fe.isPending
				})),
				leading: /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: b,
					...G(K.busy),
					onClick: () => Se(_t),
					children: Y("follow:sourceList.checkSelected")
				}),
				children: /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "ghost",
					size: "small",
					onClick: at,
					children: Y("follow:shared.clearSelection")
				})
			}),
			J ? /* @__PURE__ */ (0, Z.jsx)(S, {
				ref: P,
				follow: !0,
				preferences: ut,
				onRowClick: (e) => W(Number(e), !v.has(Number(e))),
				rectangleSelecting: e.selecting,
				onRectangle: O,
				children: /* @__PURE__ */ (0, Z.jsxs)(we, {
					"aria-label": Y("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: st[0] ? {
						column: st[0].id,
						direction: st[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => ft.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(a, { children: [ft.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in f, r = pt(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(n, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...ut.columnProps(e.id),
							children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? r : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [z.header(e.id, wr[e.id] || e.id) ?? r, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": n || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(m, {})
								})]
							}) : z.header(e.id, wr[e.id] || e.id) ?? r, /* @__PURE__ */ (0, Z.jsx)(Ee, {
								preferences: ut,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(n, {
						id: "remaining-space",
						"aria-label": Y("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: ut.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(t, {
						renderEmptyState: () => Y("follow:sourceList.pageEmpty"),
						children: mt.map((e) => /* @__PURE__ */ (0, Z.jsxs)(r, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							"data-work-context-row": e.original.source.id,
							onContextMenu: (t) => rt.onContextMenu?.(t, e.original.source, String(e.original.source.id)),
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(i, { children: pt(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(i, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
				/* @__PURE__ */ (0, Z.jsx)(y, {
					filters: z.values,
					columns: Dr,
					onRemove: z.clear,
					valueLabel: (e, t) => t || Y("cleanup:shared.none")
				}),
				ht.length ? /* @__PURE__ */ (0, Z.jsx)(p, {
					isSelected: gt.all,
					isIndeterminate: gt.some,
					onChange: (e) => Ae(ht, e),
					"aria-label": Y("follow:sourceList.selectPage"),
					children: Y("follow:sourceList.selectPageShort")
				}) : null,
				B.length ? null : /* @__PURE__ */ (0, Z.jsx)(T, {
					icon: d,
					title: Y("follow:sourceList.pageEmpty"),
					children: null
				}),
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-rectangle-gutter": B.length ? "" : void 0,
					className: "flex flex-col gap-3",
					...re,
					children: B.slice(dt.start, dt.end).map(({ key: e, name: t, sources: n }) => /* @__PURE__ */ (0, Z.jsx)(Ar, {
						group: n,
						name: t,
						handlers: K,
						selected: v,
						open: !M.has(e),
						onOpen: (t) => {
							let n = new Set(M);
							t ? n.delete(e) : n.add(e), N(n);
						},
						onToggleGroup: (e) => Ae(n.map((e) => e.id), e),
						onToggle: W
					}, e))
				})
			] }),
			/* @__PURE__ */ (0, Z.jsx)(x, {
				label: Y("follow:followManageNav.list"),
				total: dt.total,
				pagination: {
					pageIndex: dt.page - 1,
					pageSize: _
				},
				scrollTarget: J ? P : void 0,
				unit: Y(J ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: Y(J ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === _ ? ft.setPageIndex(e.pageIndex) : ft.setPageSize(e.pageSize);
				}
			}),
			j.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:sourceList.markSummary", {
							unwatched: Number(j.new) || 0,
							watched: Number(j.seen) || 0,
							saved: Number(j.saved) || 0,
							ignored: Number(j.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: ne,
						children: Y("follow:sourceList.seeUpdates")
					}),
					["seen", "ignored"].map((e) => {
						let t = Ye(e);
						return /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: b,
							...G(Re.isPending),
							onClick: () => void Wt(t, [Number(j.new) || 0], He).catch(He.failure),
							children: t.label
						}, e);
					})
				]
			}) : null
		]
	});
}
// node_modules/skullet/dist/index.mjs
var Mr = "skullet-reveal", Nr = "skullet-pane", Pr = "skullet-loading", Fr = "skullet-ghost", Ir = "skullet-snapshot", Lr = "skullet-layer", Rr = "skullet-rect", zr = "skullet-bar", Br = "skullet-inactive", Vr = "skullet-exiting", Hr = "skullet-covered", Ur = "skullet-own", Wr = "skullet-ignore", Gr = "skullet-block", Kr = Symbol.for("skullet.ghost"), qr = Symbol.for("skullet.uncover"), Jr = "skullet-status", Yr = "skullet-xray", Xr = "skullet-debug", Zr = "var(--skullet-base, rgb(128 128 128 / 0.2))", Qr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", $r = 320, ei = 280, ti = 1e4, ni = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, ri = [
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
], ii = [
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
], ai = ii.join(", "), oi = `
[${Mr}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Nr}] {
  display: block;
}

[${Pr}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${Br}] {
  display: none !important;
}

[${Lr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${zr}] {
  display: block;
  background-color: ${Zr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Pr}]) to ([${Ur}], [${Lr}]) {
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
  :scope :is(${ri.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${ai}, [${Hr}], [${Gr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${Zr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${ai}, [${Gr}]):not(svg *) {
      visibility: visible !important;
      background: ${Zr} !important;
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
[${Jr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${Yr}] [${Pr}] [${Fr}],
[${Yr}] [${Pr}] [${Fr}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, si = null, ci = 0, li;
function ui() {
	ci++, !si && (li ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !li && (si = document.createElement("style"), si.dataset.skullet = "true", si.textContent = oi, document.head.appendChild(si)));
}
function di() {
	ci--, !(ci > 0 || !si) && (si.remove(), si = null);
}
var fi = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", pi = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...pi });
function mi(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? pi[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var hi = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function gi({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = mi(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${hi(o)} }`), a === "system") {
		let t = mi({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${hi(t)} } }`);
	}
	return s.join("\n");
}
var _i = /* @__PURE__ */ new Map(), vi, yi = null, bi = 0;
function xi() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Si = () => vi ??= typeof window < "u" && xi(), Ci = (e) => Si() || !!e?.closest(`[${Xr}]`);
function wi(e) {
	vi = e, e ? ki() : Ai();
}
function Ti(e, t) {
	!e || !Ci(e) || (_i.set(e, {
		state: "loading",
		source: t
	}), Di());
}
function Ei(e, t) {
	!e || !Ci(e) || (_i.set(e, {
		..._i.get(e),
		state: "shown",
		moved: t
	}), Di());
}
function Di() {
	ki(), cancelAnimationFrame(bi), Mi();
}
var Oi = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function ki() {
	if (typeof document > "u") return;
	if (!yi?.isConnected) {
		yi = document.createElement("div"), yi.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = yi.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Oi}</style><div class="boxes"></div>`, document.body.append(yi);
	}
	let e = yi.shadowRoot;
	if (vi && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(Yr, e.target.checked);
		}), e.append(t);
	}
	bi ||= requestAnimationFrame(Mi);
}
function Ai() {
	yi?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(Yr), ![..._i.keys()].some((e) => Ci(e)) && (cancelAnimationFrame(bi), bi = 0, yi?.remove(), yi = null);
}
var ji = ({ state: e, source: t, moved: n }) => {
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
function Mi() {
	if (bi = 0, !yi?.shadowRoot) return;
	let e = yi.shadowRoot.querySelector(".boxes");
	for (let e of _i.keys()) e.isConnected && Ci(e) || _i.delete(e);
	let t = [..._i];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = ji(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (vi || _i.size) && (bi = requestAnimationFrame(Mi));
}
var Ni, Pi = () => Ni ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Fi = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Ii = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Li = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function Ri(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function zi(e, t, n) {
	let r = Fi(e, t), i = Ri(n, t), a = e ? Ii(e) : [], o = Ii(t), s = Ii(r).map((t, n) => Li(t, o[n]) ? i[n] : e && Li(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function Bi(e, t, n, r) {
	if (!e) return n;
	let i = Ii(e), a = Ii(t).map((t, n) => e.corners[n] > 0 && Li(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = Ri(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var Vi = (e, t) => {
	let n = Fi(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, Hi = {
	top: "ascender",
	bottom: "descender"
}, Ui = /* @__PURE__ */ new Map(), Wi = (e) => [...e.getClientRects?.() ?? []];
function Gi(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (Ui.has(t)) return Ui.get(t);
	let n = Pi(), r = null;
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
	return Ui.set(t, r), r;
}
var Ki = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, qi = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function Ji(e, t, n) {
	let r = Gi(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = qi(t, "--skullet-text-top", Object.keys(Ki), Hi.top), a = qi(t, "--skullet-text-bottom", ["baseline", "descender"], Hi.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[Ki[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var Yi = new Set(ii), Xi = new Set(ri), Zi = .4, Qi = /[,/]\s*0\)$/, $i = (e, t) => e !== "" && e !== t, ea = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], ta = (e) => ea.every((t) => $i(e[`border${t}Style`], "none") && $i(e[`border${t}Width`], "0px")), na = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, ra = (e) => $i(e, "none") && !e.split(/,(?![^(]*\))/).every(na), ia = (e) => $i(e.backgroundColor, "transparent") && !Qi.test(e.backgroundColor) || $i(e.backgroundImage, "none") || ra(e.boxShadow) || ta(e), aa = (e) => Yi.has(e.localName), oa = (e) => Xi.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), sa = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(Wi(n).filter((e) => e.width || e.height));
		} else oa(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * Zi, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, ca = (e, t) => e.hasAttribute(Gr) || aa(e) || ia(t) && sa(e) <= 1;
function la(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function ua(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * Zi;
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
function da(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = Vi(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...Ji(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of Wi(d)) f(e, r, t);
	}, m = (e, t) => {
		for (let n of e.childNodes) {
			if (n.nodeType === Node.TEXT_NODE) {
				p(n, t);
				continue;
			}
			if (n.nodeType !== Node.ELEMENT_NODE) continue;
			let e = n;
			if (e.hasAttribute(Wr) || e.hasAttribute(Ur)) continue;
			let r = getComputedStyle(e);
			if (r.display === "none") continue;
			if (ca(e, r)) {
				let n = Vi(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: Bi(t, n, la(e, r), r)
					});
				}
				aa(e) || u.add(e);
				continue;
			}
			if (oa(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? zi(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...ua(l)];
	for (let t of e.querySelectorAll(`[${Hr}]`)) u.has(t) || t.removeAttribute(Hr);
	for (let e of u) e.hasAttribute(Hr) || e.setAttribute(Hr, "");
	return [...c, ...ua(l)];
}
var fa = (e) => typeof matchMedia < "u" && matchMedia(e).matches, pa = () => typeof Element < "u" && typeof Element.prototype.animate == "function", ma = () => !pa() || fa("(prefers-reduced-motion: reduce)"), ha = () => fa("(prefers-reduced-transparency: reduce)"), ga = (e) => e.getAnimations?.() ?? [], _a = .7, va = 1280, ya = 320, ba = 2.5, xa = .45, Sa = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Ca(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Sa, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: ni[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var wa = 20, Ta = Math.sin(wa * Math.PI / 180), Ea = Math.cos(wa * Math.PI / 180), Da = Ta / Ea, Oa = Ea, ka = `${90 + wa}deg`, Aa = .85, $ = 12, ja = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Ma(e) {
	let t = e * ba, n = (t, n) => `color-mix(in srgb, ${Qr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Aa, ja(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Aa + e / $ * (1 - Aa), ja(1 - e / $)));
	return {
		width: t / Ea,
		image: `repeating-linear-gradient(${ka}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Na(e, t, n = Ca(e)) {
	for (let t of ga(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", ma() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: xa,
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
	}, { width: s, image: c } = Ma(Math.min(Math.max(o.width * .4, 80), ya)), l = a - o.left + (i.top - o.top) * Da, u = n.duration * _a / (va + ya);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Pa(e) {
	if (ma()) return null;
	let t = Ca(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * _a / (va + ya);
}
var Fa = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Ia = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function La(e, t) {
	let n = Fa(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Ca(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute(Rr, ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${Zr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Na(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Ra = 150, za = 120, Ba = 72, Va = 3, Ha = 60, Ua = 150, Wa = 400, Ga = 1.5, Ka = 1e3, qa = 1e3, Ja = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), Ya = -1 / 0, Xa = !1;
function Za() {
	if (!(Xa || typeof addEventListener > "u")) {
		Xa = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => Ya = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var Qa = /* @__PURE__ */ new WeakMap();
function $a(e, { served: t, refetch: n }) {
	Za();
	let r = Qa.get(e)?.since ?? performance.now();
	Qa.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function eo(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function to(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var no = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function ro(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${Vr}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var io = (e, t) => Math.min(Math.max(e, 0), t), ao = -1 / 0;
function oo(e, t, n, r, i) {
	let a = performance.now();
	a - ao > Ua && (ao = a);
	let o = a - ao, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of eo(e)) {
		let n = to(t, e), r = c.get(n);
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
		return t === null ? null : io(t, Ka) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => no(t.rect, e));
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
function so(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) Ja.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function co(e, t, n, r = () => {}) {
	let i = Qa.get(t);
	Qa.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - Ya < Wa,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: eo(e).length
			})
		};
	}
	let o = io(a.duration ?? 200, qa);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, Ka)
	}, !o) return { kind: "instant" };
	let s = so(a.enter, r);
	if (a.wipe) {
		let e = ro(t);
		if (e.width * e.height <= innerWidth * innerHeight * Ga) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return oo(e, t, a.order, {
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
var lo = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return io(n * .8 + r * .2, 1) * $r;
}, uo = (e) => e.bottom > 0 && e.top < innerHeight, fo = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return uo(e) ? 0 : null;
	if (!uo(t)) return null;
	let i = io(t.top / innerHeight, 1) * $r;
	return Math.max(i - r, 0) + (n ? Ha : 0);
}, po = { duration: 0 }, mo = { order: "together" }, ho = { order: lo }, go = (e) => e.input || e.waited < Ra ? po : e.refetch ? {
	order: "together",
	duration: za
} : null, _o = (e) => e.height < Ba || e.pieces <= Va ? mo : { order: fo }, vo = {
	hold: Ra,
	choose: (e) => go(e) ?? _o(e)
}, yo = new Set(ii), bo = "script, noscript, template, base, meta, link", xo = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), So = /* @__PURE__ */ new Set([
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
	Hr
]), Co = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function wo(e, t) {
	let n = Co(t.data);
	t.data = n;
	let r = e.parentElement, i = Pi();
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
function To(e) {
	for (let t of e.querySelectorAll(bo)) t.remove();
	for (let t of e.querySelectorAll("*")) if (xo.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || So.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Eo(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (yo.has(e.localName) || xo.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) wo(e, t);
	return To(n), n.innerHTML;
}
function Do(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, To(t.content), t.content;
}
var Oo = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${Oo(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), ko = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Ao(e) {
	let t = Oo(e, 2);
	return t ? `${location.pathname}|${ko(t)}` : null;
}
var jo = !1;
try {
	jo = !1;
} catch {
	jo = !1;
}
var Mo = jo, No = /* @__PURE__ */ new Set();
function Po(e, t) {
	!Mo || No.has(e) || (No.add(e), console.warn(`[skullet] ${t}`));
}
var Fo = /^(https?:|\/|data:|blob:)/;
function Io(e) {
	return typeof e == "string" ? Fo.test(e) ? "" : Co(e) : Array.isArray(e) ? e.map(Io) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Io(t)])) : e;
}
var Lo = "skullet:shapes", Ro = 2, zo = 50, Bo = 2e4, Vo = /* @__PURE__ */ new Map(), Ho = /* @__PURE__ */ new Map();
function Uo(e, t) {
	return Ho.has(e) || Ho.set(e, /* @__PURE__ */ new Set()), Ho.get(e).add(t), () => Ho.get(e)?.delete(t);
}
function Wo(e) {
	for (let t of Ho.get(e) ?? []) t();
}
function Go() {
	try {
		let e = JSON.parse(localStorage.getItem(Lo) ?? "null");
		return e?.v === Ro ? e.shapes : {};
	} catch {
		return {};
	}
}
function Ko(e) {
	try {
		localStorage.setItem(Lo, JSON.stringify({
			v: Ro,
			shapes: e
		}));
	} catch {}
}
function qo(e, t) {
	Vo.set(e, Eo(t, !1));
	let n = Eo(t, !0);
	if (n.length > Bo) return;
	let r = Go();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - zo)) delete r[e];
	Ko(r);
}
function Jo(e) {
	return Vo.get(e) ?? Go()[e] ?? null;
}
var Yo = [
	100,
	90,
	60
].map((e) => `<div ${Gr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), Xo = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Pr}]`)), Zo = /* @__PURE__ */ new WeakMap();
function Qo(e) {
	if (!e) return;
	let t = Zo.get(e);
	return Zo.delete(e), t;
}
function $o(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var es = (e) => !!e.firstElementChild || !!e.textContent?.trim(), ts = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, ui(), e[Kr] = !0, e.setAttribute(Pr, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = $o(e, Fr), this.snapshot = $o(e, Ir), this.layer = $o(e, Lr), this.hadContent = es(this.ghost);
		let n = e.closest(`[${Mr}]`);
		n && $a(n, {
			served: Xo.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[qr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${Vr}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = es(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || Xo.has(this.root), r = !!this.ghost.querySelector(`[${Ur}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Ao(this.ghost);
			n && (Wo(n), t = Jo(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Do(t)) : e === "fallback" ? (this.snapshot.innerHTML = Yo, Po(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(Br, e !== "ghost"), this.snapshot.toggleAttribute(Br, e === "ghost"), this.source = e, Ti(this.root.closest(`[${Mr}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : Xo.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		La(this.layer, da(e, this.layer));
		let t = this.root.closest(`[${Mr}]`);
		t && Zo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), di();
	}
}, ns = 250, rs = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Ao(e), this.untrack = this.key ? Uo(this.key, () => this.save()) : () => {}, (Mo || Ci(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), ns);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && qo(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Mr}]`), o = Qo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Po(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Io(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Ei(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Po(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Po(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, is = () => {}, as = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, os = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !as(e));
function ss(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(is, is), new Promise((e) => setTimeout(e, ti))]);
}
var cs = 360, ls = 2, us = 600, ds = 40, fs = ds / Oa, ps = 320, ms = 120, hs = .45, gs = (e) => e.left + e.top * Da, _s = (e) => e.width + e.height * Da, vs = (e, t) => gs(t) - fs + (_s(t) + 2 * fs) * e, ys = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function bs(e) {
	let t = e.querySelector(`:scope > [${Vr}] [${Lr}]`), n = t && Pa(t);
	if (!n) return null;
	let r = ro(e);
	if (r.width * r.height > innerWidth * innerHeight * Ga) return null;
	let i = gs(r), a = i + _s(r), o = performance.now(), s = o - ys.start;
	s <= Ua && (i - ys.origin) / ys.speed >= s && (a - ys.origin) / ys.speed - s <= us || (ys = {
		start: o,
		origin: i,
		speed: Math.max(ls / n, (a - i) / cs)
	});
	let { start: c, origin: l, speed: u } = ys;
	return {
		delay: (i - fs - l) / u - (o - c),
		duration: (a - i + 2 * fs) / u
	};
}
var xs = (e) => (t, { rect: n, reveal: r }) => {
	let i = (vs(t, r) - gs(n)) * Oa;
	return `linear-gradient(${ka}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - ja(n / $) : ja(n / $), a = -ds + 2 * ds * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Ss = "http://www.w3.org/2000/svg", Cs = null, ws = 0;
function Ts() {
	return Cs?.isConnected || (Cs = document.createElementNS(Ss, "svg"), Cs.setAttribute("aria-hidden", "true"), Cs.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Cs)), Cs;
}
var Es = (e, t) => {
	let n = document.createElementNS(Ss, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Ds = {
	mask: xs(!0),
	out: xs(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ha()) return;
		let i = gs(t), a = _s(t), o = ps / 2 / Oa, s = () => vs(r(), n) - i - ms / Oa;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Da, l = c / 2, u = t.height / 2, d = ps / 2 * Oa, f = ps / 2 * Da * Oa, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${ja(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++ws}`, _ = Es("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Es("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Es(`feFunc${e}`, {
			type: "linear",
			slope: 1 - hs,
			intercept: hs
		}));
		let y = Es("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Es("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Es("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Ts().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Da) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Os = {
	together: mo,
	sequence: ho,
	smart: vo,
	sweep: {
		hold: Ra,
		choose: (e) => {
			let t = go(e);
			if (t) return t;
			let n = bs(e.reveal);
			return n ? {
				wipe: Ds,
				...n
			} : _o(e);
		}
	}
}, ks = (e = "smart") => typeof e == "string" ? Os[e] : e, As = () => {}, js = (e) => e.finished.then(As, As), Ms = /* @__PURE__ */ new WeakMap();
function Ns(e, t = 0, n = 200, r = 0, i) {
	return ma() ? Promise.resolve() : js(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Ps = (e) => !!e.querySelector(`[${Lr}], [${Fr}], :scope > [${Ur}]`), Fs = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Is = /* @__PURE__ */ new WeakMap();
function Ls(e) {
	for (let t of Is.get(e) ?? []) t.remove();
	Is.delete(e);
}
function Rs(e, t) {
	let n = os(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Ps(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${Vr}] [${Lr}]`)].flatMap(Ia), a = Is.get(t) ?? /* @__PURE__ */ new Set();
			Is.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Fs(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(Rr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: Zr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Na(c), ss(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Ns(e), ma()) return c.remove();
						js(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function zs(e, t) {
	return ma() ? Promise.resolve() : Promise.all(eo(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Ns(e, n, t.duration, 0, t.enter);
	})).then(As);
}
function Bs(e) {
	for (let t of e.querySelectorAll(`:scope > [${Vr}]`)) {
		for (let e of ga(t)) e.finish();
		t.style.opacity = "0";
	}
}
function Vs(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${Vr}]`)) if (!Ps(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of ga(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function Hs(e, t = "smart", { initial: n = !1 } = {}) {
	let r = Us.get(e);
	return r || (r = Ws(e, t, n), Us.set(e, r)), r;
}
var Us = /* @__PURE__ */ new WeakMap();
function Ws(e, t, n) {
	let r = e.parentElement, i = ks(t);
	if (Ps(e)) {
		r && Ls(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Ms.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Ns(e, t)) : (r && Ms.delete(r), n ? Promise.resolve() : Ns(e));
	}
	if (n || !r) return Promise.resolve();
	let a = Vs(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Ms.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Ns(e, 0, t, a);
	}
	Rs(e, r);
	let o = co(e, r, i, (e) => Po(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Ms.set(r, o), o.kind === "instant" ? (Bs(r), Promise.resolve()) : o.kind === "sequence" ? zs(e, o) : o.kind === "wipe" ? rc(e, o, !0) : Ns(e, o.delay, o.duration, 0, o.enter);
}
function Gs(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function Ks(e, t = Gs(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(Vr, ""), t;
}
var qs = /* @__PURE__ */ new WeakMap();
function Js(e, t) {
	let n = e.querySelector(`:scope > [${Nr}]:not([${Vr}])`);
	if (!n) return;
	let r = qs.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && Ys(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: ei,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	qs.set(e, u), js(l).then(() => {
		qs.get(e) === u && Ys(e, u);
	});
}
function Ys(e, { overflow: t, boxSizing: n }) {
	qs.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function Xs(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of ga(e)) t.cancel();
	nc(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Ps(e) && Ls(i);
	let a = Ks(e, t), o = (t, n) => pa() ? js(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Ms.get(i), n = ma() || t?.kind === "instant";
		if (i && !n && Js(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Ps(e) ? Zs(e, t) : t?.kind === "wipe" && Ps(e) ? rc(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function Zs(e, t) {
	for (let t of e.querySelectorAll(`[${Fr}], [${Ir}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${Fr}] [${Ur}]`)].filter((e) => !e.parentElement?.closest(`[${Ur}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${Lr}]`)].flatMap(Ia), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => js(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(As);
}
var Qs = 100, $s = /* @__PURE__ */ new WeakMap();
function ec(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function tc(e, t) {
	ec(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function nc(e) {
	$s.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function rc(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? ec(e, i(t, r)) : a ? ec(e, a(t, r)) : tc(e, i(t, r));
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
			if (e - i > Qs && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), $s.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + Qs);
		$s.set(e, l), c();
	}).then((t) => {
		if (nc(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Ns(e, 0, r, t) : js(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var ic = X.createContext({}), ac = X.createContext(null), oc = () => X.useContext(ic), sc = () => X.useContext(ac), cc = () => oc().reveal;
function lc({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = gi({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && wi(n);
	}, [n]), (0, Z.jsx)(ic.Provider, {
		value: t,
		children: (0, Z.jsxs)(ac.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var uc = typeof window > "u" ? X.useEffect : X.useLayoutEffect, dc = () => X.useInsertionEffect(() => (ui(), di), []), fc = Number("19.3.1".split(".")[0]) >= 19, pc = () => {
	let { nonce: e } = oc();
	return fc ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: oi
	}) : null;
}, mc = fc ? { inert: !0 } : { inert: "" }, hc = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[Ur]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, hc(e.props.children)) : e;
}), gc = () => () => {}, _c = () => X.useSyncExternalStore(gc, () => !1, () => !0), vc = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = oc(), s = sc(), c = _c(), l = fi;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), uc(() => {
		if (!a.current) return;
		let e = new ts(a.current, {
			id: t,
			exact: n,
			refetch: r
		});
		return () => e.destroy();
	}, [
		t,
		n,
		r
	]), (0, Z.jsxs)(Z.Fragment, { children: [
		i && (0, Z.jsx)("span", {
			"skullet-status": "",
			children: i
		}),
		(0, Z.jsxs)("div", {
			ref: a,
			[Pr]: "",
			"aria-hidden": !0,
			...mc,
			children: [
				(0, Z.jsx)("div", {
					[Fr]: "",
					children: hc(e)
				}),
				(0, Z.jsx)("div", { [Ir]: "" }),
				(0, Z.jsx)("div", { [Lr]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, yc = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = cc();
	return uc(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), Hs(c.current, l, { initial: !r }).then(s), o && (e.memory = new rs(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), uc(() => {
		!i || !c.current || Xs(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Nr]: "",
		children: e
	});
}, bc = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = Gs(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function xc(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	dc();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	uc(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[Ur]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(vc, {
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
	let [y, b] = X.useState({
		id: 0,
		key: g
	}), [x, S] = X.useState([]), C = X.useRef(/* @__PURE__ */ new Map()).current, w = X.useRef(_);
	if (uc(() => {
		w.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: w.current
		};
		S((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), b({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let T = X.useRef(e.onReveal);
	uc(() => {
		T.current = e.onReveal;
	});
	let ee = y.key === "content" && y.from === "skeleton" ? () => T.current?.() : void 0, E = (e) => S((t) => t.filter((t) => t.id !== e)), D = [...x.map((e) => (0, Z.jsx)(yc, {
		id: e.id,
		registry: C,
		enter: !1,
		exiting: !0,
		onExited: () => E(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(yc, {
		id: y.id,
		registry: C,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: ee,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[Mr]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(pc, {}), (0, Z.jsx)(bc, {
			exiting: x.map((e) => e.id),
			registry: C,
			children: D
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Sc = {
	creators: [Y("follow:followOverview.creators"), Y("follow:followOverview.creatorUnit")],
	enabled: [Y("follow:followOverview.enabledSources"), ""],
	failed: [Y("follow:followCheck.checkFailed"), Y("follow:followOverview.sourceUnit")],
	updates: [Y("follow:followOverview.unwatchedUpdates"), Y("follow:followOverview.itemUnit")],
	subscriptions: [Y("follow:feedSources.footerLabel"), Y("follow:followOverview.actressUnit")],
	releases: [Y("follow:followOverview.unwatchedReleases"), Y("follow:followOverview.itemUnit")]
}, Cc = {
	duration: 0,
	delay: 0,
	hold: 150
}, wc;
function Tc() {
	return wc || (wc = new CSSStyleSheet(), wc.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), wc;
}
function Ec({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Dc({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Sc[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Tc();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: ze({
			padding: "none",
			className: "flex flex-col justify-between gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Z.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ (0, Z.jsx)("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: Y("follow:shared.notFound")
		}) : /* @__PURE__ */ (0, Z.jsx)(lc, {
			reveal: Cc,
			children: /* @__PURE__ */ (0, Z.jsx)(xc, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: Y("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(Ec, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Oc = (e) => M.some(([t]) => t === e);
function kc(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, f] = (0, X.useState)(Oc(e.tab) ? e.tab : "list"), [p, m] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, g] = (0, X.useState)(() => zt(e.sort, e.dir).sort), [_, v] = (0, X.useState)(() => zt(e.sort, e.dir).dir), [y, b] = (0, X.useState)(vt(e.layout) ? e.layout : "default"), [x, S] = (0, X.useState)(Dt(e.pageSize)), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), [ee, te] = (0, X.useState)(/* @__PURE__ */ new Set()), ne = ln(() => {
		w(/* @__PURE__ */ new Set()), te(/* @__PURE__ */ new Set());
	});
	(0, X.useEffect)(() => {
		(C.size || ee.size) && rt();
	}, [C, ee]);
	let O = un({
		queryKey: j,
		queryFn: ({ signal: e }) => ut(e)
	}), re = un({
		queryKey: A,
		queryFn: ({ signal: e }) => lt(e)
	}), k = un({
		queryKey: D,
		queryFn: ({ signal: e }) => J(e)
	}), ie = O.data || { sources: [] }, ae = re.data || {
		root: "",
		providers: []
	}, N = ie.sources;
	(0, X.useEffect)(() => {
		w((e) => {
			let t = xt(e, N);
			return t.size === e.size ? e : t;
		});
	}, [N]);
	let P = (e) => {
		let n = e.sort ?? h, r = e.dir ?? _;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === he[n] ? "" : r
		});
	}, oe = gt(N), F = N.filter(_t).length, se = N.filter((e) => e.enabled).length, I = (ae.providers || []).filter((e) => e.requirement === "required" && !K(e)).length, ce = new Set((k.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size, le = !(!O.data || !k.data || N.length || ce);
	return /* @__PURE__ */ (0, Z.jsxs)(xn, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(R, {
			tone: "warning",
			title: Y("follow:followManagePage.readOnly"),
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(E, {
					href: s,
					children: Y("follow:followManagePage.goToPrimary")
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: H,
			"aria-label": Y("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "creators",
					figure: O.data ? oe.length : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "enabled",
					figure: O.data ? se : void 0,
					total: N.length,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "failed",
					figure: O.data ? F : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "updates",
					figure: O.data ? ie.counts?.new || 0 : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "subscriptions",
					figure: k.data ? ce : void 0,
					failed: k.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Dc, {
					field: "releases",
					figure: k.data ? k.data.unread || 0 : void 0,
					failed: k.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Z.jsx)(Se, {
						group: "follow",
						label: Y("follow:followManagePage.sectionTabs"),
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: M.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							w(/* @__PURE__ */ new Set()), te(/* @__PURE__ */ new Set()), f(e), P({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [
						le ? /* @__PURE__ */ (0, Z.jsx)(T, {
							icon: d,
							title: Y("follow:sourceList.empty"),
							actions: a ? void 0 : /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								onClick: () => {
									f("add"), P({ tab: "add" });
								},
								children: Y("follow:followFeed.addFollow")
							}),
							children: Y("follow:followManagePage.emptyBody")
						}) : null,
						!le && (ce > 0 || k.isError) ? /* @__PURE__ */ (0, Z.jsx)(yr, {
							readOnly: a,
							toast: r,
							selection: {
								ids: ee,
								onChange: te,
								onActivate: () => w(/* @__PURE__ */ new Set())
							}
						}) : null,
						O.data ? N.length > 0 && /* @__PURE__ */ (0, Z.jsx)(jr, {
							data: ie,
							sort: h,
							dir: _,
							page: p,
							layout: y,
							pageSize: x,
							selected: C,
							selecting: ne,
							readOnly: a,
							toast: r,
							openFollow: i,
							onSort: (e, t) => {
								g(e), v(t), m(1), P({
									sort: e,
									dir: t,
									page: 1
								});
							},
							onPage: (e) => {
								m(e), P({ page: e });
							},
							onSelected: (e) => {
								w(e), te(/* @__PURE__ */ new Set());
							},
							onLayout: (e) => {
								b(e), m(1), n({ layout: e }), P({ page: 1 });
							},
							onPageSize: (e) => {
								S(e), m(1), n({ pageSize: e }), P({ page: 1 });
							}
						}) : O.isError ? /* @__PURE__ */ (0, Z.jsx)(R, {
							tone: "error",
							title: Y("follow:followManagePage.listFailed"),
							action: /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => void O.refetch(),
								children: Y("catalog:shared.retryNow")
							}),
							children: q(O.error)
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.listLoading"),
							"data-skeleton": "",
							children: /* @__PURE__ */ (0, Z.jsx)("div", {
								"aria-hidden": "true",
								inert: !0,
								dangerouslySetInnerHTML: { __html: ht({
									followLayout: y,
									followSort: h,
									followDir: _,
									followPageSize: x
								}) }
							})
						})
					]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						re.data && O.data ? /* @__PURE__ */ (0, Z.jsx)(Hn, {
							data: ie,
							credentials: ae,
							readOnly: a,
							toast: r
						}) : re.isError || O.isError ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [re.isError ? /* @__PURE__ */ (0, Z.jsx)(R, {
							tone: "error",
							title: Y("follow:followManagePage.credentialsFailed"),
							action: /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => void re.refetch(),
								children: Y("catalog:shared.retryNow")
							}),
							children: q(re.error)
						}) : null, O.isError ? /* @__PURE__ */ (0, Z.jsx)(R, {
							tone: "error",
							title: Y("follow:followManagePage.listFailed"),
							action: /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => void O.refetch(),
								children: Y("catalog:shared.retryNow")
							}),
							children: q(O.error)
						}) : null] }) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(Xn, {
							readOnly: a,
							toast: r,
							initialName: new URLSearchParams(location.search).get("performer") || "",
							onAdded: () => {
								k.refetch(), f("list"), P({ tab: "list" });
							}
						}),
						O.data ? /* @__PURE__ */ (0, Z.jsx)(lr, {
							groups: ie.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: ie.alias_suggestions || [],
							sources: ie.sources
						}) : null
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsx)(u, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: I ? Y("follow:followManagePage.feedSettingsPending", { count: I }) : Y("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { kc as FollowManagePage };

//# debugId=4eca726e-712b-406c-b036-405445b2b803