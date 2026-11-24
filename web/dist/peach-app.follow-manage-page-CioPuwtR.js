(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "acb6cbd0-6558-415d-b3e6-c4a9324a9a0b", e._sentryDebugIdIdentifier = "sentry-dbid-acb6cbd0-6558-415d-b3e6-c4a9324a9a0b");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, ActivityStatus as l, Button as u, ButtonLink as d, Bx as f, COLUMN_SORT as p, Checkbox as m, ChevronSortDown as h, Chip as g, CollapseChevron as _, CollapseRegion as v, ColumnFilterAvatar as y, ColumnFilterChips as b, Ct as x, DataTableFooter as S, DataTableFrame as C, DataTableSort as w, EmptyFocusButton as T, EmptyState as E, ErrorText as ee, ExternalLink as D, FEEDS_KEY as te, FOLLOW_CHECK_KEY as O, FOLLOW_CHECK_TASK as k, FOLLOW_CREDENTIALS_KEY as ne, FOLLOW_MANAGE_KEY as re, FOLLOW_MANAGE_NAV as A, FOLLOW_RESOLVE_KEY as ie, FieldLabel as j, Gg as M, H7 as N, Help as P, Input as F, LAYOUTS as I, LEGACY_AVATAR_IMG as L, M6 as ae, MENU_ITEM as oe, MENU_ITEM_INTERACTIVE as R, MENU_POPOVER_SURFACE as z, ModalFrame as B, Note as V, OV as se, P7 as H, SORT_DEFAULT_DIR as ce, SORT_OPTIONS as le, STAT_STRIP_SIX as U, Select as ue, SelectItem as de, SelectionDock as fe, SelectionPopover as W, SiteIcon as pe, SiteLabel as me, SortDirectionIcon as he, SortableBoardTabs as ge, Switch as G, Table as _e, TableColumnControls as ve, TableColumnResizer as ye, TableSelectionHeader as be, TaskProgress as xe, Un as Se, Wt as K, Xf as Ce, __toESM as we, activityKind as Te, addAlias as Ee, addSource as De, authorGroups as Oe, authorName as ke, avatarInner as Ae, busyProps as q, cardClass as je, checkEvidenceGap as Me, checkFailures as Ne, checkFeeds as Pe, checkReceipt as Fe, checkSummary as Ie, checkedText as Le, clickedBlank as Re, codedText as ze, columnVisibilityFeature as Be, composingKey as Ve, confirmModal as He, createColumnHelper as Ue, credentialDone as We, cx as Ge, dZ as Ke, dropSources as qe, du as Je, enterPageSelection as Ye, errorHeadline as Xe, errorMessage as J, exitPageSelection as Ze, feedIntervalText as Qe, fetchCheckJob as $e, fetchCredentials as et, fetchFeeds as tt, fetchFollow as nt, fetchResolveJob as rt, fetchSuggestions as it, flexRender as at, followFeedByName as ot, followFeedEntity as st, followSuggestKey as ct, groupByAuthor as lt, isBroken as ut, isLayout as dt, jobText as ft, joinList as pt, keepSelected as mt, l7 as ht, localTime as gt, lookupFeedActor as _t, mapLimit as vt, markAllPending as yt, pageSizeOf as bt, pageWindow as xt, patchSource as St, pv as Ct, queryClient as wt, quoted as Tt, reloadFollowManage as Et, removeAlias as Dt, removeFeed as Ot, removeSource as kt, renameAliasGroup as At, require_jsx_runtime as jt, require_react as Mt, resolveFollowSort as Nt, rowPaginationFeature as Pt, rowSelectionFeature as Ft, rowSelectionOperation as It, rowSortingFeature as Lt, runBulkAction as Rt, selectionState as zt, serverLabel as Bt, setFeedEnabled as Vt, setSourceEnabled as Ht, skeletonHtml as Ut, sortLabel as Wt, startCheck as Gt, startResolve as Kt, statusText as qt, t as Y, tableFeatures as Jt, tableRows as Yt, th as Xt, toggleGroup as Zt, unmarkItems as Qt, useAction as $t, useBackgroundJob as en, useMutation as tn, usePageSelection as nn, useQuery as rn, useRectangleSelection as an, useRowWorkContext as on, useTable as sn, useTableFilters as cn, useTablePreferences as ln, useWorkContextMenu as un, utcDate as dn } from "./peach-app.js";
import { Page as fn } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as pn, ErrorLine as mn, SourceIcon as hn, SourceLink as gn, StatusBadge as _n } from "./peach-app.source-view-CDbKpFus.js";
import { createPaginatedRowModel as vn, createSortedRowModel as yn, useTableSelection as bn } from "./peach-app.use-table-selection-CnuGRvGn.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ we(Mt(), 1), Z = jt(), xn = Ge(oe, R, "text-body-2-medium"), Sn = Y("follow:addCreatorSource.placeholder"), Cn = Y("follow:addCreatorSource.title"), wn = Y("follow:addCreatorSource.searchingByName"), Tn = Y("follow:addCreatorSource.recognizing"), En = Y("follow:addCreatorSource.noSourceFound"), Dn = "/settings/subscriptions", On = (e, t) => `${e}:${t.url}`;
function kn({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
	return (0, X.useEffect)(() => {
		n.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [n, i]), /* @__PURE__ */ (0, Z.jsxs)(t, {
		ref: n,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": Y("follow:addCreatorSource.suggestions"),
		className: Ge(z, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(l, {
				kind: "radar",
				label: Y("follow:addCreatorSource.findingSuggestions")
			})
		}) : null, r.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? Ge(xn, "bg-background-secondary-default") : xn,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function An({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? Y("follow:addCreatorSource.allSources") : Y("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Z.jsx)(W, {
		label: Y("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: c,
		empty: Y("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(hn, { provider: e.provider }), e.provider_label]
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
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: Y("follow:addCreatorSource.credentialSettings"),
				href: Dn
			}
		]
	});
}
function jn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(V, {
		tone: "error",
		title: e.line,
		children: ft(e, "error") || Y("follow:addCreatorSource.searchFailed")
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: je({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = On(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(m, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(hn, { provider: e.provider }),
							/* @__PURE__ */ (0, Z.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Z.jsx)("span", {
								className: "min-w-0 break-words",
								children: ze(e, "label")
							}),
							/* @__PURE__ */ (0, Z.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? Y("follow:addCreatorSource.alreadyFollowing") : ze(e, "evidence")
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Z.jsx)(P, { children: En }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: ze(e, "evidence")
				}), /* @__PURE__ */ (0, Z.jsx)(D, {
					href: e.url,
					children: Y("follow:shared.labeled", {
						label: ze(e, "label"),
						value: e.query
					})
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Z.jsx)(P, { children: pt(o.map(([t, n]) => Y("follow:shared.labeled", {
				label: t,
				value: Bt(e.failure_codes?.[t]?.code ?? "", n, e.failure_codes?.[t]?.params)
			}))) }) : null
		]
	});
}
function Mn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, l] = (0, X.useState)(""), [d, f] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [x, S] = (0, X.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), [T, E] = (0, X.useState)(""), [ee, D] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let te = rn({
		queryKey: ct(d),
		queryFn: ({ signal: e }) => it(d, e),
		enabled: d.length > 0 && p && !o && h !== i
	}), O = (0, X.useMemo)(() => (te.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: Bt(t.matched_code ?? "", t.matched || ""),
		n: t.n || 0,
		group: Bt(e.label_code ?? "", e.label)
	}))), [te.data]), { job: k, running: ne, outcome: re, start: A, dismiss: M } = en({
		queryKey: ie,
		queryFn: ({ signal: e }) => rt(e),
		start: (e) => Kt([e]),
		onStarted: () => w(/* @__PURE__ */ new Set()),
		onError: (e) => E(J(e)),
		onFinish: (e) => {
			e.status === "failed" && E(ft(e, "error") || Y("follow:addCreatorSource.searchFailed"));
		}
	}), N = (e) => {
		let t = e.trim();
		!t || n || o || ne || A.isPending || (E(""), v(-1), l(t), a(t), f(""), g(t), A.mutate(t));
	}, P = te.isFetching, I = p && !o && h !== i && (O.length > 0 || P), L = () => {
		v(-1), g(i);
	}, ae = (e) => {
		if (!(o || Ve(e.nativeEvent))) {
			if (e.key === "Escape" && I) L();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!O.length) return;
				if (e.preventDefault(), !I) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? O.length - 1 : n >= O.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), N(O[_]?.value || i));
		}
	}, oe = re?.results || [], R = oe.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !x.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: On(t, e)
	})).filter((e) => !C.has(e.key))), z = tn({
		mutationFn: async (e) => {
			let t = [], n = [];
			D(0);
			for (let r of e) {
				try {
					let e = await De(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(Y("follow:shared.labeled", {
						label: r.candidate.label,
						value: J(e)
					}));
				}
				D((e) => e + 1);
			}
			if (n.length) try {
				await Gt(n);
			} catch (e) {
				t.push(J(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Et(), e.failures.length ? E(pt(e.failures)) : (E(""), M(), r(Y("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => E(J(e))
	}), B = e.suggestions || [], se = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Cn,
		className: je({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Cn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !b.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": Y("follow:addCreatorSource.inputLabel"),
							placeholder: Sn,
							value: i,
							leadingIcon: Ct,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: ae
						}), I ? /* @__PURE__ */ (0, Z.jsx)(kn, {
							field: y,
							menu: b,
							options: O,
							active: _,
							busy: P,
							onPick: N,
							onClose: L
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(An, {
						credentials: t,
						hidden: x,
						onHidden: S
					}),
					/* @__PURE__ */ (0, Z.jsx)(u, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(ne || A.isPending),
						onClick: () => N(i),
						children: Y("follow:shared.search")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [ne || A.isPending ? /* @__PURE__ */ (0, Z.jsx)(xe, {
					embedded: !0,
					kind: Te("follow-resolve"),
					label: ft(k) || (k?.total ? Y("follow:addCreatorSource.searchProgress", {
						checked: k.checked || 0,
						count: k.total
					}) : se ? wn : Tn),
					value: k?.checked,
					total: k?.total
				}) : null, T ? /* @__PURE__ */ (0, Z.jsx)(V, {
					tone: "error",
					title: Y("follow:addJavFeed.notCompleted"),
					children: T
				}) : null]
			}),
			oe.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:addCreatorSource.results") }),
					oe.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(jn, {
						row: e,
						at: t,
						hidden: x,
						unpicked: C,
						onPick: (e, t) => {
							let n = new Set(C);
							t ? n.delete(e) : n.add(e), w(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(u, {
								variant: "secondary",
								size: "small",
								onClick: () => M(),
								children: Y("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Z.jsx)(u, {
								variant: "primary",
								size: "small",
								disabled: n || !R.length,
								...q(z.isPending),
								onClick: () => z.mutate(R),
								children: Y("follow:addCreatorSource.addSelected", { count: R.length })
							}),
							z.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:addCreatorSource.addingProgress", {
									added: ee,
									count: R.length
								})
							}) : null
						]
					})
				]
			}) : null,
			B.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: Y("follow:addCreatorSource.suggested")
				}), B.map((e) => /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? Y("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : Y("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => N(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Nn = Y("follow:addJavFeed.placeholder"), Pn = Y("follow:addJavFeed.title");
function Fn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: Y("follow:addJavFeed.cardsSplitAcrossPeople", { names: pt([...n.values()]) }),
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
function In({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(m, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: pt(e.names)
					}),
					e.record ? /* @__PURE__ */ (0, Z.jsx)(g, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Z.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("follow:addJavFeed.alreadyUnder", { name: e.held_by.name })
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Z.jsx)(D, {
			href: e.url,
			children: e.id
		})]
	});
}
function Ln({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), l = $t(), d = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => _t(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !Ve(e.nativeEvent) && (e.preventDefault(), d());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, m = () => {
		a && l.run("follow", (e) => ot(a.q, [...s], e), (e) => {
			t(e.created ? Y("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : Y("follow:addJavFeed.subscribed", { name: e.entity_name })), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && l.run("known", (t) => st(e.id, t), () => {
			t(Y("follow:addJavFeed.subscribed", { name: e.name })), i(""), p(), n();
		});
	}, g = a ? Fn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Pn,
		className: je({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Pn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(F, {
						"aria-label": Y("follow:addJavFeed.actressName"),
						placeholder: Nn,
						value: r,
						leadingIcon: Ct,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: f
					})
				}), /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: d,
					children: Y("follow:shared.search")
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
				tone: "error",
				title: Y("follow:addJavFeed.notCompleted"),
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "warning",
						title: Y("follow:addJavFeed.javdbSearchFailed"),
						children: Bt(a.unavailable_code ?? "", a.unavailable, a.unavailable_params)
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:addJavFeed.javdbCards") }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(In, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(P, { children: a.unavailable ? Y("follow:addJavFeed.noCardsThisTime") : Y("follow:addJavFeed.noJavdbMatch") }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(P, {
						role: "status",
						children: s.size ? g.text : Y("follow:addJavFeed.pickCardsHint")
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(P, {
						role: "status",
						children: _.following ? Y("follow:addJavFeed.alreadySubscribed", { name: _.name }) : Y("follow:addJavFeed.canSubscribeDirectly", { name: _.name })
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(u, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: Y("follow:shared.close")
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(u, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...q(l.busy === "follow"),
								onClick: m,
								children: Y("follow:addJavFeed.subscribePicked", { count: s.size })
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(u, {
								variant: "primary",
								size: "small",
								disabled: e,
								...q(l.busy === "known"),
								onClick: h,
								children: Y("follow:addJavFeed.subscribeTo", { name: _.name })
							}) : null
						]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function Rn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(B, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: Y("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Z.jsx)(zn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function zn({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = $t();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => At(t.canonical_key, i.trim(), e), () => {
				Et(), r(Y("follow:creatorAliases.renamed", { name: i.trim() })), n();
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
			/* @__PURE__ */ (0, Z.jsx)(F, {
				"aria-label": Y("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ (0, Z.jsx)(u, {
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
			o.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "secondary",
					onClick: n,
					children: Y("follow:shared.cancel")
				}), /* @__PURE__ */ (0, Z.jsx)(u, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...q(!!o.busy),
					children: Y("follow:creatorAliases.rename")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Bn = (e) => Y("follow:creatorAliases.removeBody", { alias: e }), Vn = Jt({
	rowSelectionFeature: Ft,
	rowSortingFeature: Lt,
	rowPaginationFeature: Pt,
	columnVisibilityFeature: Be,
	sortedRowModel: yn(),
	paginatedRowModel: vn()
}), Hn = Vn, Un = {
	id: "select",
	label: Y("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Wn = {
	id: "canonical",
	label: Y("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Gn = [
	Un,
	Wn,
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
], Kn = [
	Un,
	Wn,
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
], qn = (e) => e.alias;
function Jn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Yn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(pn, {
			group: Jn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Xn({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: l }) {
	let d = ln("alias-suggestions", Gn), f = ln("alias-saved", Kn), [p, g] = (0, X.useState)(null), [_, v] = (0, X.useState)({}), [y, b] = (0, X.useState)({}), D = nn(() => {
		v({}), b({});
	});
	(0, X.useEffect)(() => {
		(Object.values(_).some(Boolean) || Object.values(y).some(Boolean)) && Ye();
	}, [_, y]);
	let te = bn(() => v({})), O = bn(() => b({})), [k, ne] = (0, X.useState)([]), [re, A] = (0, X.useState)([]), [ie, M] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [N, P] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = cn(t, {
		canonical: {
			values: (e) => e.canonical,
			option: (e) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(pn, {
				group: Jn(s, e),
				name: e,
				small: !0
			}) })
		},
		alias: {
			values: (e) => e.alias,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(pn, {
				group: Jn(s, t?.canonical ?? e),
				name: e,
				small: !0
			}) })
		},
		evidence: { values: (e) => Bt(e.evidence_code ?? "", e.evidence, e.evidence_params) }
	}, () => M((e) => ({
		...e,
		pageIndex: 0
	}))), L = cn(e, {
		canonical: {
			values: (e) => e.canonical_name,
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(pn, {
				group: Jn(s, e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		},
		aliases: {
			values: (e) => e.aliases.map((e) => e.name),
			option: (e, t) => ({ leading: () => /* @__PURE__ */ (0, Z.jsx)(pn, {
				group: Jn(s, t?.canonical_name ?? e, t?.canonical_key),
				name: e,
				small: !0
			}) })
		}
	}, () => P((e) => ({
		...e,
		pageIndex: 0
	}))), oe = {
		...ie,
		pageIndex: Math.min(ie.pageIndex, Math.max(0, Math.ceil(I.items.length / ie.pageSize) - 1))
	}, R = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(L.items.length / N.pageSize) - 1))
	}, [z, B] = (0, X.useState)(""), [V, se] = (0, X.useState)(""), [ce, le] = (0, X.useState)(""), U = tn({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await Ee(n.canonical, n.alias);
				} catch (n) {
					throw t && Et(), Error(Y("follow:creatorAliases.mergePartialError", {
						error: J(n),
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
			B(""), v({}), Et();
		},
		onError: (e) => B(J(e))
	}), ue = tn({
		mutationFn: (e) => Ee(e.canonical, e.alias),
		onSuccess: () => {
			B(""), se(""), le(""), Et(), l(Y("follow:creatorAliases.saved"));
		},
		onError: (e) => B(J(e))
	}), de = tn({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await Dt(e), n += 1;
			} catch (e) {
				throw Error(Y("follow:creatorAliases.removePartialError", {
					error: J(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				Et();
			}
		},
		onSuccess: (e, t) => {
			B(""), b({}), typeof t == "string" && l(Y("follow:creatorAliases.removed"));
		},
		onError: (e) => B(J(e))
	}), W = {
		receipt: l,
		failure: (e) => B(J(e))
	}, pe = (e, t) => ({
		key: e ? "merge-all" : "merge",
		reversal: "undo",
		label: Y(e ? "follow:creatorAliases.mergeAllCount" : "follow:creatorAliases.mergeSelectedCount", { count: t }),
		confirm: (t) => ({
			title: Y(e ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: Y("follow:creatorAliases.mergeBody", {
				count: t.length,
				pairs: pt(t.map((e) => Y("follow:creatorAliases.mergePair", {
					alias: Tt(e.alias),
					canonical: Tt(e.canonical)
				})))
			}),
			confirmLabel: Y(e ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm")
		}),
		run: async (e) => {
			let { done: t } = await U.mutateAsync([...e]);
			return async () => {
				for (let n of e.slice(0, t)) await Dt(n.alias);
				await Et();
			};
		},
		receipt: (e) => Y("follow:creatorAliases.merged", { count: e.length })
	}), me = (e, t) => {
		e.length && Rt(pe(t, e.length), e, W).catch(W.failure);
	}, he = {
		key: "remove",
		reversal: "undo",
		label: Y("follow:creatorAliases.removeSelectedCount", { count: 0 }),
		confirm: (e) => ({
			title: Y("follow:creatorAliases.removeSelectedTitle"),
			body: Y("follow:creatorAliases.removeSelectedBody", { count: e.length }),
			items: e.map((e) => e.name),
			confirmLabel: Y("follow:creatorAliases.removeSelectedConfirm")
		}),
		run: async (e) => (await de.mutateAsync(e.map((e) => e.name)), async () => {
			for (let t of e) await Ee(t.canonical, t.name);
			await Et();
		}),
		receipt: () => Y("follow:creatorAliases.removed")
	}, ge = (e) => void He({
		title: Y("follow:creatorAliases.removeTitle"),
		body: Bn(e),
		confirmLabel: Y("follow:creatorAliases.removeTitle"),
		onConfirm: () => de.mutateAsync(e)
	}), G = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: U.isPending,
		removing: de.isPending,
		merge: me,
		remove: ge,
		rename: g
	});
	G.current = {
		sources: s,
		readOnly: c,
		merging: U.isPending,
		removing: de.isPending,
		merge: me,
		remove: ge,
		rename: g
	};
	let xe = (0, X.useMemo)(() => {
		let e = Ue();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(be, {
					table: e.table,
					label: Y("follow:creatorAliases.selectAllPending")
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(m, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Yn, {
					sources: G.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: Y("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Bt(e.evidence_code ?? "", e.evidence, e.evidence_params), {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					...q(G.current.merging),
					onClick: () => G.current.merge([e.row.original], !1),
					children: Y("follow:shared.merge")
				})
			})
		]);
	}, []), Se = (0, X.useMemo)(() => {
		let e = Ue();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(be, {
					table: e,
					label: Y("follow:creatorAliases.selectAllSaved")
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(m, {
					slot: null,
					"aria-label": Y("follow:creatorAliases.selectSavedRow", { name: e.original.canonical_name }),
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: Y("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Yn, {
					sources: G.current.sources,
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
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: H,
							"aria-label": Y("follow:creatorAliases.removeAliasNamed", { name: e.name }),
							disabled: G.current.readOnly,
							...q(G.current.removing),
							onClick: () => G.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: Y("follow:shared.actions"),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					"aria-label": Y("follow:creatorAliases.renameRowLabel", { name: e.original.canonical_name }),
					onClick: () => G.current.rename(e.original),
					children: Y("follow:creatorAliases.rename")
				})
			})
		]);
	}, []), K = sn({
		features: Vn,
		data: I.items,
		columns: xe,
		getRowId: qn,
		state: {
			rowSelection: _,
			sorting: k,
			pagination: oe,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			te(), v(e);
		},
		onSortingChange: (e) => {
			ne(e), M((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: M,
		enableRowSelection: !0
	}), we = sn({
		features: Hn,
		data: L.items,
		columns: Se,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
			sorting: re,
			pagination: R,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			O(), b(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			A(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P
	}), Te = t.filter((e) => _[qn(e)]), De = e.filter((e) => y[e.canonical_key]).flatMap((e) => e.aliases.map((t) => ({
		name: t.name,
		canonical: e.canonical_name
	}))), Oe = on((e) => t.find((t) => qn(t) === e), (e) => {
		let t = K.getRow(qn(e));
		return [It(t.getIsSelected(), () => t.toggleSelected()), {
			id: "merge",
			label: Y("follow:shared.merge"),
			icon: Xt,
			disabled: c || U.isPending,
			run: () => me([e], !1)
		}];
	}), ke = on((t) => e.find((e) => e.canonical_key === t), (e) => {
		let t = we.getRow(e.canonical_key), n = e.aliases.map((t) => ({
			name: t.name,
			canonical: e.canonical_name
		}));
		return [
			{
				id: "rename",
				label: Y("follow:creatorAliases.rename"),
				icon: x,
				disabled: c,
				run: () => g(e)
			},
			It(t.getIsSelected(), () => t.toggleSelected()),
			{
				id: "remove",
				label: Y("follow:creatorAliases.removeRowAliases", { count: n.length }),
				icon: ae,
				danger: !0,
				disabled: c || de.isPending || !n.length,
				run: async () => {
					await Rt(he, n, W);
				}
			}
		];
	}), Ae = q(U.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: je({
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
				children: [/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": Y("follow:creatorAliases.displayName"),
							placeholder: Y("follow:creatorAliases.displayNamePlaceholder"),
							value: V,
							onChange: se,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": Y("follow:creatorAliases.platformAlias"),
							placeholder: Y("follow:creatorAliases.platformAlias"),
							value: ce,
							onChange: le,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "primary",
							disabled: c || !V.trim() || !ce.trim(),
							...q(ue.isPending),
							onClick: () => ue.mutate({
								canonical: V.trim(),
								alias: ce.trim()
							}),
							children: Y("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			z ? /* @__PURE__ */ (0, Z.jsx)(ee, { children: z }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: Oe.onKeyDown,
				children: [
					Oe.menu,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: I.items.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(u, {
									variant: "primary",
									size: "small",
									disabled: c,
									...Ae,
									onClick: () => me(I.items, !0),
									children: Y("follow:creatorAliases.mergeAllCount", { count: I.items.length })
								}),
								/* @__PURE__ */ (0, Z.jsx)(w, {
									label: Y("follow:creatorAliases.pendingTable"),
									sorting: k,
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
										ne(e), M((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(ve, {
									preferences: d,
									label: Y("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(fe, {
						label: Y("follow:creatorAliases.pendingBulkActions"),
						visible: Te.length > 0,
						count: Y("follow:creatorAliases.groupsSelected", { count: Te.length }),
						actions: [{
							action: pe(!1, Te.length),
							items: Te,
							host: W,
							disabled: c || U.isPending
						}],
						children: /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "ghost",
							size: "small",
							onClick: Ze,
							children: Y("follow:shared.clearSelection")
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(C, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => K.getRow(e)?.toggleSelected(),
						rectangleSelecting: D,
						onRectangle: (e, t) => K.setRowSelection({
							...t ? _ : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Z.jsxs)(_e, {
							"aria-label": Y("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => K.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [K.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [I.header(e.id, String(e.column.columnDef.header)) ?? at(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(ye, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
								renderEmptyState: () => Y("shell:dataTable.empty"),
								children: K.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => Oe.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: at(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(S, {
						label: Y("follow:creatorAliases.pendingTable"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: I.items.length,
						pagination: oe,
						onChange: M
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				onKeyDown: ke.onKeyDown,
				children: [
					ke.menu,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: L.items.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(w, {
								label: Y("follow:creatorAliases.saved"),
								sorting: re,
								options: [{
									id: "canonical",
									label: Y("follow:creatorAliases.displayName")
								}, {
									id: "aliases",
									label: Y("follow:creatorAliases.platformAlias")
								}],
								onChange: (e) => {
									A(e), P((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(ve, {
								preferences: f,
								label: Y("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(fe, {
						label: Y("follow:creatorAliases.savedBulkActions"),
						visible: De.length > 0,
						count: Y("follow:creatorAliases.aliasesSelected", { count: De.length }),
						actions: [{
							action: {
								...he,
								label: Y("follow:creatorAliases.removeSelectedCount", { count: De.length })
							},
							items: De,
							host: W,
							disabled: c || de.isPending
						}],
						children: /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "ghost",
							size: "small",
							onClick: Ze,
							children: Y("follow:shared.clearSelection")
						})
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(C, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => we.getRow(e)?.toggleSelected(),
						rectangleSelecting: D,
						onRectangle: (e, t) => we.setRowSelection({
							...t ? y : {},
							...Object.fromEntries(e.map((e) => [e, !0]))
						}),
						children: /* @__PURE__ */ (0, Z.jsxs)(_e, {
							"aria-label": Y("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: re[0] ? {
								column: re[0].id,
								direction: re[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => we.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [we.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [L.header(e.id, String(e.column.columnDef.header)) ?? at(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(ye, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
								renderEmptyState: () => Y("shell:dataTable.empty"),
								children: we.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
									id: e.id,
									"data-board-selected": e.getIsSelected() || void 0,
									"data-work-context-row": e.id,
									onContextMenu: (t) => ke.onContextMenu?.(t, e.original, e.id),
									children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: at(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
								}, e.id))
							})]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(S, {
						label: Y("follow:creatorAliases.saved"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: L.items.length,
						pagination: R,
						onChange: P
					})] }) : /* @__PURE__ */ (0, Z.jsx)(E, {
						size: "compact",
						icon: Ce,
						title: Y("follow:creatorAliases.emptyTitle"),
						actions: c ? void 0 : /* @__PURE__ */ (0, Z.jsx)(T, {
							target: `input[aria-label="${Y("follow:creatorAliases.displayName")}"]`,
							children: Y("follow:creatorAliases.addAlias")
						}),
						children: Y("follow:creatorAliases.emptyBody")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(Rn, {
				group: p,
				close: () => g(null),
				receipt: l
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Zn = Jt({
	rowPaginationFeature: Pt,
	rowSelectionFeature: Ft,
	rowSortingFeature: Lt,
	columnVisibilityFeature: Be,
	sortedRowModel: yn(),
	paginatedRowModel: vn()
}), Qn = {
	select: Y("follow:shared.select"),
	name: Y("follow:shared.name"),
	kind: Y("follow:shared.type"),
	origin: Y("follow:followFeed.filterKindSource"),
	status: Y("follow:shared.status"),
	interval: Y("follow:feedSources.colInterval"),
	fetched: Y("follow:feedSources.colLastFetched"),
	fresh: Y("follow:feedSources.colLastAdded"),
	actions: Y("follow:shared.actions")
}, $n = Object.entries(Qn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), er = () => wt.invalidateQueries({
	queryKey: te,
	exact: !0
}), Q = (e) => e.name || e.url, tr = (e) => e.kind.startsWith("javdb") ? "javdb" : e.kind.startsWith("dmm") ? "dmm" : nr(e.url);
function nr(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function rr({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Z.jsx)(g, {
		variant: "caption",
		color: "rose",
		children: Y("follow:feedSources.fetchFailed")
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Z.jsx)(g, {
		variant: "caption",
		color: "lime",
		children: Y("follow:shared.ok")
	}) : /* @__PURE__ */ (0, Z.jsx)(g, {
		variant: "caption",
		color: "gray",
		children: Y("follow:feedSources.notChecked")
	}) : /* @__PURE__ */ (0, Z.jsx)(g, {
		variant: "caption",
		color: "gray",
		children: Y("follow:shared.paused")
	});
}
function ir({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-media-placeholder text-caption-1-semibold text-text-secondary ${L}`,
		dangerouslySetInnerHTML: { __html: Ae(Q(e), t, null, "performer") }
	});
}
var ar = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function or(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function sr(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return He({
		title: n ? Y("follow:feedSources.removeOne") : Y("follow:feedSources.removeMany", { count: e.length }),
		body: n ? Y("follow:feedSources.removeOneBody", { name: Q(n) }) : Y("follow:feedSources.removeManyBody"),
		confirmLabel: Y(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: t
	});
}
function cr({ readOnly: e, toast: t, onAdd: s, selection: c, selecting: l }) {
	let d = rn({
		queryKey: te,
		queryFn: ({ signal: e }) => tt(e)
	}), p = $t(), g = ln("jav-feeds", $n), _ = d.data, v = (0, X.useMemo)(() => _?.sources ?? [], [_]), [b, x] = (0, X.useState)(/* @__PURE__ */ new Set()), T = c?.ids ?? b, D = c?.onChange ?? x, [O, k] = (0, X.useState)(1), [ne, re] = (0, X.useState)(20), [A, ie] = (0, X.useState)([]), j = cn(v, {
		name: {
			values: Q,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(y, { person: {
				...t,
				id: t.entity_id,
				name: e
			} }) })
		},
		kind: {
			values: (e) => ze(e, "kind_label"),
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(pe, { site: tr(t) }) })
		},
		origin: {
			values: (e) => nr(e.url),
			option: (e, t) => ({ leading: /* @__PURE__ */ (0, Z.jsx)(pe, { site: t ? tr(t) : e }) })
		},
		status: { values: (e) => e.enabled ? e.last_error ? Y("follow:feedSources.fetchFailed") : e.last_fetched_at ? Y("follow:shared.ok") : Y("follow:feedSources.notChecked") : Y("follow:shared.paused") },
		interval: { values: (e) => Qe(e.interval_minutes) },
		fetched: {
			range: "timestamp",
			value: (e) => e.last_fetched_at ? dn(e.last_fetched_at).getTime() / 1e3 : null
		},
		fresh: {
			range: "count",
			value: (e) => e.last_new_count
		}
	}, () => k(1)), P = xt(j.items.length, ne, O);
	(0, X.useEffect)(() => {
		k((e) => Math.min(e, P.pages));
	}, [P.pages]), (0, X.useEffect)(() => {
		D((e) => {
			let t = new Set(v.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [v, D]);
	let F = tn({
		mutationFn: async (e) => {
			let t = await vt(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ot(t) : await Vt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let t = e.results.filter((e) => !e.ok);
			if (D(/* @__PURE__ */ new Set()), er(), t.length) {
				let e = t[0];
				p.setError(Y("follow:feedSources.writeFailed", {
					count: t.length,
					error: e.ok ? "" : J(e.error)
				}));
			}
		},
		onError: (e) => p.setError(J(e))
	}), I = {
		receipt: t,
		failure: (e) => p.setError(J(e))
	}, L = (e) => ({
		key: e ? "enable" : "pause",
		label: Y(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: Y(e ? "follow:feedSources.enableMany" : "follow:feedSources.pauseMany"),
			body: Y(e ? "follow:feedSources.enableManyBody" : "follow:feedSources.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => t.enabled !== e), { results: r } = await F.mutateAsync({
				ids: n.map((e) => e.id),
				action: e ? "enabled" : "paused"
			}), i = n.filter((e, t) => r[t]?.ok);
			return async () => {
				await vt(i.map((e) => e.id), 4, (t) => Vt(t, !e)), await er();
			};
		},
		receipt: (t) => Y(e ? "follow:feedSources.enabledMany" : "follow:feedSources.pausedMany", { count: t.length })
	}), oe = {
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
			await F.mutateAsync({
				ids: e.map((e) => e.id),
				action: "remove"
			});
		},
		receipt: (e) => Y("follow:feedSources.removedMany", { count: e.length })
	}, R = (0, X.useMemo)(() => or(v), [v]), z = (0, X.useRef)({
		readOnly: e,
		shared: R,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	z.current = {
		readOnly: e,
		shared: R,
		busy: p.busy,
		toggle: (e, t) => void p.run(`enabled-${e.id}`, (n) => Vt(e.id, t, n), () => void er()),
		fetch: (e) => void p.run(`check-${e.id}`, (t) => Pe(t, [e.id]), () => void er()),
		remove: (e) => void sr([e], async () => {
			await Ot(e.id), t(Y("follow:feedSources.removedOne", { name: Q(e) })), er();
		})
	};
	let B = (0, X.useMemo)(() => {
		let e = Ue(), t = (e) => () => Qn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(be, {
					table: e.table,
					label: Y("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(m, {
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
					let t = ar(e.row.original, z.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(ir, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: Y("follow:feedSources.aliasTitle", { alias: t }),
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => ze(e, "kind_label"), {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(me, {
						site: tr(e.row.original),
						label: nr(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(K, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? Y("follow:feedSources.fetchFailed") : e.enabled ? Y("follow:shared.enabled") : Y("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(rr, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: Qe(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? gt(e.row.original.last_fetched_at) : Y("follow:feedSources.neverFetched")
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
						/* @__PURE__ */ (0, Z.jsx)(G, {
							"aria-label": Y("follow:shared.enableNamed", { name: Q(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: z.current.readOnly,
							onChange: (t) => z.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ke,
							"aria-label": Y("follow:feedSources.fetchNamed", { name: Q(e.row.original) }),
							disabled: z.current.readOnly,
							...q(z.current.busy === `check-${e.row.original.id}`),
							onClick: () => z.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ae,
							"aria-label": Y("follow:shared.removeNamed", { name: Q(e.row.original) }),
							disabled: z.current.readOnly,
							onClick: () => z.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), H = (0, X.useMemo)(() => Object.fromEntries([...T].map((e) => [String(e), !0])), [T]), ce = sn({
		features: Zn,
		data: j.items,
		columns: B,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: H,
			sorting: A,
			pagination: {
				pageIndex: P.page - 1,
				pageSize: ne
			},
			columnVisibility: g.visibility
		},
		onColumnVisibilityChange: g.change,
		onSortingChange: (e) => {
			ie(e), k(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			c?.onActivate();
			let t = typeof e == "function" ? e(H) : e;
			D(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	}), le = () => void p.run("check", (e) => Pe(e), () => void er()), U = (e) => {
		c?.onActivate(), D((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, ue = v.filter((e) => T.has(e.id)), de = v.filter((e) => e.last_error), W = on((e) => v.find((t) => String(t.id) === e), (t) => {
		let n = [{
			id: "select",
			label: Y(T.has(t.id) ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: Q(t) }),
			icon: N,
			run: () => U(t.id)
		}];
		return t.url && n.unshift({
			id: "open",
			label: Y("follow:sourceView.openSource"),
			icon: K,
			run: () => {
				window.open(t.url, "_blank", "noopener,noreferrer");
			}
		}), e || n.push({
			id: "fetch",
			label: Y("follow:feedSources.fetchNamed", { name: Q(t) }),
			icon: Ke,
			disabled: !!p.busy,
			run: () => z.current.fetch(t)
		}, {
			id: "enabled",
			label: Y(t.enabled ? "follow:shared.pause" : "follow:shared.enable"),
			icon: t.enabled ? se : M,
			disabled: !!p.busy,
			run: () => z.current.toggle(t, !t.enabled)
		}, {
			id: "remove",
			label: Y("follow:shared.removeNamed", { name: Q(t) }),
			icon: ae,
			danger: !0,
			run: () => z.current.remove(t)
		}), n;
	});
	return _ ? /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": Y("follow:feedSources.listLabel"),
			className: je({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			onKeyDown: W.onKeyDown,
			children: [
				W.menu,
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
								count: v.length,
								unread: Number(_.unread) || 0
							})
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(u, {
								onClick: le,
								disabled: e,
								...q(p.busy === "check"),
								children: Y("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Z.jsx)(ve, {
								preferences: g,
								label: Y("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Z.jsx)(w, {
								label: Y("follow:feedSources.title"),
								sorting: A,
								onChange: (e) => {
									ie(e), k(1);
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
									label: Qn[e]
								}))
							})
						]
					})]
				}),
				de.length || p.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [de.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: Y("follow:feedSources.failedTitle", { count: de.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: de.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: ze(e, "last_error"),
								children: Y("follow:shared.labeled", {
									label: Q(e),
									value: Xe(ze(e, "last_error")) || Y("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: Y("follow:feedSources.failedBody")
					}) : null, p.error ? /* @__PURE__ */ (0, Z.jsx)(ee, { children: p.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)(fe, {
					visible: ue.length > 0,
					label: Y("follow:feedSources.bulkActions"),
					count: Y("follow:feedSources.selectedCount", { count: ue.length }),
					actions: [
						L(!0),
						L(!1),
						oe
					].map((t) => ({
						action: t,
						items: ue,
						host: I,
						disabled: e || F.isPending
					})),
					children: /* @__PURE__ */ (0, Z.jsx)(u, {
						variant: "ghost",
						size: "small",
						onClick: Ze,
						children: Y("follow:shared.clearSelection")
					})
				}),
				v.length ? /* @__PURE__ */ (0, Z.jsx)(C, {
					follow: !0,
					preferences: g,
					onRowClick: (e) => U(Number(e)),
					rectangleSelecting: l,
					onRectangle: (e, t) => ce.setRowSelection({
						...t ? H : {},
						...Object.fromEntries(e.map((e) => [e, !0]))
					}),
					children: /* @__PURE__ */ (0, Z.jsxs)(_e, {
						"aria-label": Y("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: A[0] ? {
							column: A[0].id,
							direction: A[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => ce.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [ce.getHeaderGroups()[0].headers.map((e) => {
							let t = at(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...g.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [j.header(e.id, Qn[e.id] || e.id) ?? t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(h, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(ye, {
									preferences: g,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Z.jsx)(r, {
							id: "remaining-space",
							"aria-label": Y("follow:shared.rowSpacer"),
							"data-table-space": "",
							width: g.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
							renderEmptyState: () => Y("shell:dataTable.empty"),
							children: ce.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-follow-selected": e.getIsSelected() || void 0,
								"data-work-context-row": e.id,
								onContextMenu: (t) => W.onContextMenu?.(t, e.original, e.id),
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: at(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id))
						})]
					})
				}) : /* @__PURE__ */ (0, Z.jsx)(E, {
					icon: f,
					title: Y("follow:feedSources.empty"),
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Z.jsx)(u, {
						variant: "secondary",
						onClick: s,
						children: Y("follow:feedSources.add")
					}),
					children: Y("follow:feedSources.emptyHint")
				}),
				v.length ? /* @__PURE__ */ (0, Z.jsx)(S, {
					label: Y("follow:feedSources.footerLabel"),
					total: P.total,
					unit: Y("follow:feedSources.unit"),
					pagination: {
						pageIndex: P.page - 1,
						pageSize: ne
					},
					onChange: (e) => {
						re(e.pageSize), k(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:feedSources.footerSummary", {
							unread: Number(_.unread) || 0,
							enabled: v.filter((e) => e.enabled).length,
							total: v.length
						})
					})
				})
			]
		})
	}) : d.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
		tone: "error",
		title: Y("follow:feedSources.loadFailed"),
		children: J(d.error)
	}) : /* @__PURE__ */ (0, Z.jsx)("div", { dangerouslySetInnerHTML: { __html: Ut(Y("follow:feedSources.loading"), { fill: !1 }) } });
}
// src/react/follow-manage/source-list.tsx
var lr = Jt({
	rowPaginationFeature: Pt,
	rowSelectionFeature: Ft,
	rowSortingFeature: Lt,
	columnVisibilityFeature: Be,
	paginatedRowModel: vn()
}), ur = Object.fromEntries(Object.entries(p).map(([e, t]) => [t, e])), dr = 740;
function fr() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < dr));
		r.observe(e), n.current = r, t(e.clientWidth < dr);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var pr = {
	select: Y("follow:shared.select"),
	author: Y("follow:shared.creator"),
	source: Y("follow:followFeed.filterKindSource"),
	provider: Y("follow:shared.site"),
	status: Y("follow:shared.status"),
	checked: Y("follow:sourceList.colLastChecked"),
	actions: Y("follow:shared.actions")
}, mr = Object.entries(pr).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
})), hr = "timestamp", gr = Object.entries(pr).map(([e, t]) => ({
	id: e,
	label: t,
	range: e === "checked" ? hr : void 0
}));
function _r(e, t, n, r) {
	let i = [{
		id: "select",
		label: Y(t ? "follow:shared.clearSelection" : "follow:shared.selectNamed", { name: e.label }),
		icon: ht,
		run: () => n(!t)
	}];
	return e.url && i.unshift({
		id: "open",
		label: Y("follow:sourceView.openSource"),
		icon: K,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}), r.readOnly || i.push({
		id: "check",
		label: Y("follow:sourceList.checkNamed", { name: e.label }),
		icon: Ke,
		disabled: !e.enabled || r.busy,
		run: () => r.check([e.id])
	}, {
		id: "enabled",
		label: Y(e.enabled ? "follow:shared.pause" : "follow:shared.enable"),
		icon: e.enabled ? se : M,
		run: () => r.toggle(e, !e.enabled)
	}, {
		id: "remove",
		label: Y("follow:sourceList.unfollow"),
		icon: ae,
		danger: !0,
		run: () => r.remove(e)
	}), i;
}
function vr({ source: e, selected: t, onToggle: n, handlers: r }) {
	let i = un(), a = () => ({
		key: e.id,
		operations: _r(e, t, n, r)
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
			Re(e, e.currentTarget) && n(!t);
		},
		children: [
			i.menu,
			/* @__PURE__ */ (0, Z.jsx)(m, {
				isSelected: t,
				onChange: n,
				"aria-label": Y("follow:shared.selectNamed", { name: e.label })
			}),
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Z.jsx)(hn, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(gn, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(s, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(_n, { source: e }),
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
						children: /* @__PURE__ */ (0, Z.jsx)(mn, { text: ze(e, "last_error") })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Le(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(G, {
						"aria-label": Y("follow:shared.enableNamed", { name: e.label }),
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ke,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.label }),
							disabled: !e.enabled || r.readOnly,
							...q(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ae,
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
function yr({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let l = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(ut).length, p = pt([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = zt(r, l);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Y("follow:sourceList.groupLabel", { name: t }),
		className: je({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(pn, {
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
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(hn, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Z.jsx)(s, { children: Y("follow:sourceList.providers", { providers: p }) }),
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
					children: [/* @__PURE__ */ (0, Z.jsx)(u, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Ke,
						"aria-label": Y("follow:sourceList.checkGroup", { name: t }),
						disabled: !d.length || i.readOnly,
						...q(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							leadingIcon: ht,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": Y(h.all ? "follow:sourceList.deselectGroup" : "follow:sourceList.selectGroup", { name: t }),
							onClick: () => o(!h.all),
							children: h.all ? Y("follow:shared.deselectAll") : Y("follow:shared.selectAll")
						}), /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: _,
							"aria-label": Y(n ? "follow:sourceList.collapseGroup" : "follow:sourceList.expandGroup", { name: t }),
							onClick: () => a(!n),
							children: Y(n ? "follow:shared.collapse" : "follow:shared.expand")
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Z.jsx)(v, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(vr, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function br(e) {
	let { data: t, sort: s, dir: c, page: l, layout: d, pageSize: g, selected: v, readOnly: y, onSort: x, onPage: w, onLayout: T, onPageSize: ee, onSelected: D, toast: te, openFollow: ne, onAdd: re } = e, A = (e, t) => D(/* @__PURE__ */ new Set([...t ? v : [], ...e.map(Number)])), ie = an(A, {
		selecting: e.selecting,
		start: "[data-source-divider]"
	}), j = t.sources, M = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), N = t.counts || {}, [P, F] = (0, X.useState)(/* @__PURE__ */ new Set()), [L, oe] = fr(), [R, z] = (0, X.useState)(""), B = (0, X.useMemo)(() => Oe(j, s, c, M), [
		j,
		s,
		c,
		M
	]), se = (0, X.useMemo)(() => Yt(B, s, c, M), [
		B,
		s,
		c,
		M
	]), H = cn(se, {
		author: {
			values: (e) => e.author,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(pn, {
				group: t.group,
				name: e,
				small: !0
			}) })
		},
		source: {
			values: (e) => e.source.label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(hn, { provider: t.source.provider }) })
		},
		provider: {
			values: (e) => e.source.provider_label,
			option: (e, t) => ({ leading: t && /* @__PURE__ */ (0, Z.jsx)(hn, { provider: t.source.provider }) })
		},
		status: { values: (e) => qt(e.source) },
		checked: {
			range: hr,
			value: (e) => e.source.last_checked_at ? dn(e.source.last_checked_at).getTime() / 1e3 : null
		}
	}, () => w(1)), U = (0, X.useMemo)(() => {
		let e = new Set(H.items.map((e) => e.source.id));
		return B.flatMap((t) => {
			let n = t.filter((t) => e.has(t.id));
			return n.length ? [{
				key: String(t[0].author_key || t[0].id),
				name: ke(t, M),
				sources: n
			}] : [];
		});
	}, [
		M,
		H.items,
		B
	]), { job: W, running: pe, outcome: me, start: ge } = en({
		queryKey: O,
		taskKey: k,
		queryFn: ({ signal: e }) => $e(e),
		start: (e) => Gt(e),
		onError: (e) => z(J(e)),
		onFinish: (e) => {
			Et(), te(e.status === "failed" ? ft(e, "error") || Y("follow:followCheck.checkFailed") : Fe(e));
		}
	}), K = (e) => {
		pe || ge.isPending || (z(""), ge.mutate(e));
	}, Ce = (e, t) => D(Zt(v, [e], t)), we = (e, t) => D(Zt(v, e, t)), Ee = tn({
		mutationFn: (e) => kt(e),
		onSuccess: (e, t) => {
			qe([t]), D(Zt(v, [t], !1)), te(Y("follow:sourceList.unfollowed"));
		},
		onError: (e) => z(J(e))
	}), De = tn({
		mutationFn: (e) => Ht(e.id, e.enabled),
		onSuccess: (e, t) => {
			St(t.id, { enabled: t.enabled }), z("");
		},
		onError: (e) => z(J(e))
	}), Ae = (e) => void He({
		title: Y("follow:sourceList.unfollow"),
		body: Y("follow:sourceList.unfollowBody"),
		confirmLabel: Y("follow:sourceList.unfollow"),
		danger: !0,
		holdToConfirm: !0,
		onConfirm: () => Ee.mutateAsync(e.id)
	}), Pe = tn({
		mutationFn: async (e) => {
			let t = await vt(e.ids, 4, async (t) => {
				e.action === "remove" ? await kt(t) : await Ht(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") qe(e.done);
			else for (let t of e.done) St(t, { enabled: e.action === "enabled" });
			D(Zt(v, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			t.length ? z(Y("follow:sourceList.bulkPartialFail", {
				failed: t.length,
				total: e.ids.length,
				error: J(t[0]?.error)
			})) : z("");
		},
		onError: (e) => z(J(e))
	}), Re = tn({
		mutationFn: yt,
		onSuccess: (e) => {
			Et(), e.failed ? z(Y("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: J(e.error)
			})) : z("");
		},
		onError: (e) => z(J(e))
	}), Be = {
		receipt: te,
		failure: (e) => z(J(e))
	}, Ve = (e) => ({
		key: e ? "enable" : "pause",
		label: Y(e ? "follow:shared.enable" : "follow:shared.pause"),
		reversal: "undo",
		confirm: (t) => ({
			title: Y(e ? "follow:sourceList.enableMany" : "follow:sourceList.pauseMany"),
			body: Y(e ? "follow:sourceList.enableManyBody" : "follow:sourceList.pauseManyBody", { count: t.length })
		}),
		run: async (t) => {
			let n = t.filter((t) => j.find((e) => e.id === t)?.enabled !== e), { done: r } = await Pe.mutateAsync({
				ids: n,
				action: e ? "enabled" : "paused"
			});
			return async () => {
				await vt(r, 4, (t) => Ht(t, !e));
				for (let t of r) St(t, { enabled: !e });
			};
		},
		receipt: (t) => Y(e ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused", { count: t.length })
	}), We = {
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
			await Pe.mutateAsync({
				ids: [...e],
				action: "remove"
			});
		},
		receipt: (e) => Y("follow:sourceList.bulkDeleted", { count: e.length })
	}, Ge = (e) => {
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
				await Qt(t), await Et();
			}),
			receipt: () => Y("follow:sourceList.bulkMarked", { count: t.length })
		};
	}, Ye = (e, t) => De.mutate({
		id: e.id,
		enabled: t
	}), Qe = (0, X.useRef)({
		check: K,
		toggle: Ye,
		remove: Ae,
		busy: !1,
		readOnly: y
	});
	Qe.current = {
		check: K,
		toggle: Ye,
		remove: Ae,
		busy: pe || ge.isPending,
		readOnly: y
	};
	let et = Qe.current, tt = on((e) => j.find((t) => String(t.id) === e), (e) => _r(e, v.has(e.id), (t) => Ce(e.id, t), et)), nt = (0, X.useMemo)(() => {
		let e = Ue(), t = (e) => () => pr[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(be, {
					table: e.table,
					label: Y("follow:sourceList.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(m, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(pn, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(gn, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(mn, { text: ze(e.row.original.source, "last_error") }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(hn, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(_n, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Le(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(G, {
							"aria-label": Y("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: et.readOnly,
							onChange: (t) => Qe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ke,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || et.readOnly,
							...q(et.busy),
							onClick: () => Qe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ae,
							"aria-label": Y("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: et.readOnly,
							onClick: () => Qe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [et]), rt = (0, X.useMemo)(() => {
		let e = ur[s];
		return e ? [{
			id: e,
			desc: c === "desc"
		}] : [];
	}, [s, c]), it = (0, X.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), ot = d === "table", st = ln("follow-sources", mr), ct = xt(ot ? H.items.length : U.length, g, l), lt = sn({
		features: lr,
		data: H.items,
		columns: nt,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: rt,
			rowSelection: it,
			pagination: {
				pageIndex: ct.page - 1,
				pageSize: g
			},
			columnVisibility: st.visibility
		},
		onColumnVisibilityChange: st.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(rt) : e)[0];
			if (!t) return;
			let n = p[t.id];
			n && x(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(it) : e;
			D(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: ct.page - 1,
				pageSize: g
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === g ? n.pageIndex !== t.pageIndex && w(n.pageIndex + 1) : ee(n.pageSize);
		}
	}), ut = lt.getRowModel().rows, dt = ot ? ut.map((e) => e.original.source.id) : U.slice(ct.start, ct.end).flatMap(({ sources: e }) => e.map((e) => e.id)), pt = zt(v, dt), mt = [...v], ht = Ne(me), gt = j.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), _t = Me(me), bt = U.length > 0 && U.every(({ key: e }) => P.has(e));
	return j.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: je({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		onKeyDown: tt.onKeyDown,
		children: [
			tt.menu,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: L,
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
						children: N.new ? Y("follow:sourceList.sourceCountUnseen", {
							count: j.length,
							unseen: Number(N.new) || 0
						}) : Y("follow:sourceList.sourceCount", { count: j.length })
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						gt.length ? /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							disabled: y,
							...q(et.busy),
							onClick: () => K(gt),
							children: Y("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "primary",
							leadingIcon: Ke,
							disabled: y,
							"aria-label": Y("follow:sourceList.checkAll"),
							iconOnly: oe,
							...q(et.busy),
							onClick: () => K([]),
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
									children: [/* @__PURE__ */ (0, Z.jsx)(u, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Se,
										"aria-label": I[0][1],
										"aria-pressed": !ot,
										onClick: () => T("default")
									}), /* @__PURE__ */ (0, Z.jsx)(u, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Je,
										"aria-label": I[1][1],
										"aria-pressed": ot,
										onClick: () => T("table")
									})]
								}),
								ot ? /* @__PURE__ */ (0, Z.jsx)(ve, {
									preferences: st,
									label: Y("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(ue, {
										"aria-label": Y("follow:sourceList.sortLabel"),
										prefix: Y("follow:shared.sort"),
										selectedKey: s,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											x(t, ce[t]);
										},
										children: le.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(de, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(u, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: he,
										"data-icon-state": c === "asc" ? "a" : "b",
										"aria-label": Wt(s, c),
										onClick: () => x(s, c === "asc" ? "desc" : "asc")
									})]
								}),
								ot ? null : /* @__PURE__ */ (0, Z.jsx)(u, {
									variant: "secondary",
									iconOnly: oe,
									leadingIcon: _,
									"aria-expanded": !bt,
									"aria-label": Y(bt ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => F(bt ? /* @__PURE__ */ new Set() : new Set(U.map(({ key: e }) => e))),
									children: Y(bt ? "follow:shared.expandAll" : "follow:shared.collapseAll")
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
					pe ? /* @__PURE__ */ (0, Z.jsx)(xe, {
						embedded: !0,
						kind: W?.older ? Te("feed-scrape") : Te("follow-check"),
						label: ft(W) || (W?.total ? Y(W.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: W.checked || 0,
							count: W.total
						}) : Y("follow:sourceList.preparingCheck")),
						value: W?.checked,
						total: W?.total
					}) : null,
					R ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: Y("follow:shared.actionFailed"),
						children: R
					}) : null,
					!pe && me?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "neutral",
						title: Y("follow:followFeed.checkResults"),
						children: Ie(me)
					}) : null,
					ht.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: Y("follow:sourceList.failedTitle", { count: ht.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: ht.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: Y("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: Xe(e.error || "") || Y("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: Y("follow:sourceList.failedBody")
					}) : null,
					_t ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "warning",
						children: Y("follow:sourceList.evidenceGap", { error: _t })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(fe, {
				label: Y("follow:sourceList.bulkActions"),
				visible: mt.length > 0,
				count: Y("follow:sourceList.selectedCount", { count: mt.length }),
				actions: [
					Ve(!0),
					Ve(!1),
					We
				].map((e) => ({
					action: e,
					items: mt,
					host: Be,
					disabled: y || Pe.isPending
				})),
				leading: /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "secondary",
					size: "small",
					disabled: y,
					...q(et.busy),
					onClick: () => K(mt),
					children: Y("follow:sourceList.checkSelected")
				}),
				children: /* @__PURE__ */ (0, Z.jsx)(u, {
					variant: "ghost",
					size: "small",
					onClick: Ze,
					children: Y("follow:shared.clearSelection")
				})
			}),
			ot ? /* @__PURE__ */ (0, Z.jsx)(C, {
				follow: !0,
				preferences: st,
				onRowClick: (e) => Ce(Number(e), !v.has(Number(e))),
				rectangleSelecting: e.selecting,
				onRectangle: A,
				children: /* @__PURE__ */ (0, Z.jsxs)(_e, {
					"aria-label": Y("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: rt[0] ? {
						column: rt[0].id,
						direction: rt[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => lt.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [lt.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in p, n = at(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...st.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [H.header(e.id, pr[e.id] || e.id) ?? n, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(h, {})
								})]
							}) : H.header(e.id, pr[e.id] || e.id) ?? n, /* @__PURE__ */ (0, Z.jsx)(ye, {
								preferences: st,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(r, {
						id: "remaining-space",
						"aria-label": Y("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: st.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
						renderEmptyState: () => Y("follow:sourceList.pageEmpty"),
						children: ut.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							"data-work-context-row": e.original.source.id,
							onContextMenu: (t) => tt.onContextMenu?.(t, e.original.source, String(e.original.source.id)),
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: at(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
				/* @__PURE__ */ (0, Z.jsx)(b, {
					filters: H.values,
					columns: gr,
					onRemove: H.clear,
					valueLabel: (e, t) => t || Y("cleanup:shared.none")
				}),
				dt.length ? /* @__PURE__ */ (0, Z.jsx)(m, {
					isSelected: pt.all,
					isIndeterminate: pt.some,
					onChange: (e) => we(dt, e),
					"aria-label": Y("follow:sourceList.selectPage"),
					children: Y("follow:sourceList.selectPageShort")
				}) : null,
				U.length ? null : /* @__PURE__ */ (0, Z.jsx)(E, {
					icon: f,
					title: Y("follow:sourceList.pageEmpty"),
					children: null
				}),
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-rectangle-gutter": U.length ? "" : void 0,
					className: "flex flex-col gap-3",
					...ie,
					children: U.slice(ct.start, ct.end).map(({ key: e, name: t, sources: n }) => /* @__PURE__ */ (0, Z.jsx)(yr, {
						group: n,
						name: t,
						handlers: et,
						selected: v,
						open: !P.has(e),
						onOpen: (t) => {
							let n = new Set(P);
							t ? n.delete(e) : n.add(e), F(n);
						},
						onToggleGroup: (e) => we(n.map((e) => e.id), e),
						onToggle: Ce
					}, e))
				})
			] }),
			/* @__PURE__ */ (0, Z.jsx)(S, {
				label: Y("follow:followManageNav.list"),
				total: ct.total,
				pagination: {
					pageIndex: ct.page - 1,
					pageSize: g
				},
				unit: Y(ot ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: Y(ot ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === g ? lt.setPageIndex(e.pageIndex) : lt.setPageSize(e.pageSize);
				}
			}),
			N.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:sourceList.markSummary", {
							unwatched: Number(N.new) || 0,
							watched: Number(N.seen) || 0,
							saved: Number(N.saved) || 0,
							ignored: Number(N.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(u, {
						variant: "secondary",
						size: "small",
						onClick: ne,
						children: Y("follow:sourceList.seeUpdates")
					}),
					["seen", "ignored"].map((e) => {
						let t = Ge(e);
						return /* @__PURE__ */ (0, Z.jsx)(u, {
							variant: "secondary",
							size: "small",
							disabled: y,
							...q(Re.isPending),
							onClick: () => void Rt(t, [Number(N.new) || 0], Be).catch(Be.failure),
							children: t.label
						}, e);
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Z.jsx)(E, {
		icon: f,
		title: Y("follow:sourceList.empty"),
		actions: /* @__PURE__ */ (0, Z.jsx)(u, {
			variant: "primary",
			size: "small",
			onClick: re,
			children: Y("follow:followFeed.addFollow")
		}),
		children: Y("follow:sourceList.emptyHint")
	});
}
// node_modules/skullet/dist/index.mjs
var xr = "skullet-reveal", Sr = "skullet-pane", Cr = "skullet-loading", wr = "skullet-ghost", Tr = "skullet-snapshot", Er = "skullet-layer", Dr = "skullet-rect", Or = "skullet-bar", kr = "skullet-inactive", Ar = "skullet-exiting", jr = "skullet-covered", Mr = "skullet-own", Nr = "skullet-block", Pr = Symbol.for("skullet.ghost"), Fr = Symbol.for("skullet.uncover"), Ir = "skullet-status", Lr = "skullet-xray", Rr = "var(--skullet-base, rgb(128 128 128 / 0.2))", zr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", Br = 280, Vr = 1e4, Hr = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, Ur = [
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
], Wr = [
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
], Gr = Wr.join(", "), Kr = `
[${xr}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Sr}] {
  display: block;
}

[${Cr}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${kr}] {
  display: none !important;
}

[${Er}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${Or}] {
  display: block;
  background-color: ${Rr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Cr}]) to ([${Mr}], [${Er}]) {
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
  :scope :is(${Ur.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${Gr}, [${jr}], [${Nr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${Rr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${Gr}, [${Nr}]):not(svg *) {
      visibility: visible !important;
      background: ${Rr} !important;
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
[${Ir}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${Lr}] [${Cr}] [${wr}],
[${Lr}] [${Cr}] [${wr}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, qr = null, Jr = 0, Yr;
function Xr() {
	Jr++, !qr && (Yr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !Yr && (qr = document.createElement("style"), qr.dataset.skullet = "true", qr.textContent = Kr, document.head.appendChild(qr)));
}
function Zr() {
	Jr--, !(Jr > 0 || !qr) && (qr.remove(), qr = null);
}
var Qr = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", $r = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...$r });
function ei(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? $r[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var ti = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function ni({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = ei(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${ti(o)} }`), a === "system") {
		let t = ei({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${ti(t)} } }`);
	}
	return s.join("\n");
}
var ri = /* @__PURE__ */ new Map(), ii, ai = null, oi = 0;
function si() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var ci = () => ii ??= typeof window < "u" && si(), li = (e) => ci() || !!e?.closest("[skullet-debug]");
function ui(e) {
	ii = e, e ? hi() : gi();
}
function di(e, t) {
	!e || !li(e) || (ri.set(e, {
		state: "loading",
		source: t
	}), pi());
}
function fi(e, t) {
	!e || !li(e) || (ri.set(e, {
		...ri.get(e),
		state: "shown",
		moved: t
	}), pi());
}
function pi() {
	hi(), cancelAnimationFrame(oi), vi();
}
var mi = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function hi() {
	if (typeof document > "u") return;
	if (!ai?.isConnected) {
		ai = document.createElement("div"), ai.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = ai.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${mi}</style><div class="boxes"></div>`, document.body.append(ai);
	}
	let e = ai.shadowRoot;
	if (ii && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(Lr, e.target.checked);
		}), e.append(t);
	}
	oi ||= requestAnimationFrame(vi);
}
function gi() {
	ai?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(Lr), ![...ri.keys()].some((e) => li(e)) && (cancelAnimationFrame(oi), oi = 0, ai?.remove(), ai = null);
}
var _i = ({ state: e, source: t, moved: n }) => {
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
function vi() {
	if (oi = 0, !ai?.shadowRoot) return;
	let e = ai.shadowRoot.querySelector(".boxes");
	for (let e of ri.keys()) e.isConnected && li(e) || ri.delete(e);
	let t = [...ri];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = _i(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (ii || ri.size) && (oi = requestAnimationFrame(vi));
}
var yi, bi = () => yi ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), xi = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Si = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Ci = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function wi(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function Ti(e, t, n) {
	let r = xi(e, t), i = wi(n, t), a = e ? Si(e) : [], o = Si(t), s = Si(r).map((t, n) => Ci(t, o[n]) ? i[n] : e && Ci(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function Ei(e, t, n, r) {
	if (!e) return n;
	let i = Si(e), a = Si(t).map((t, n) => e.corners[n] > 0 && Ci(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = wi(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var Di = (e, t) => {
	let n = xi(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, Oi = {
	top: "ascender",
	bottom: "descender"
}, ki = /* @__PURE__ */ new Map(), Ai = (e) => [...e.getClientRects?.() ?? []];
function ji(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ki.has(t)) return ki.get(t);
	let n = bi(), r = null;
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
	return ki.set(t, r), r;
}
var Mi = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, Ni = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function Pi(e, t, n) {
	let r = ji(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = Ni(t, "--skullet-text-top", Object.keys(Mi), Oi.top), a = Ni(t, "--skullet-text-bottom", ["baseline", "descender"], Oi.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[Mi[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var Fi = new Set(Wr), Ii = new Set(Ur), Li = .4, Ri = /[,/]\s*0\)$/, zi = (e, t) => e !== "" && e !== t, Bi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], Vi = (e) => Bi.every((t) => zi(e[`border${t}Style`], "none") && zi(e[`border${t}Width`], "0px")), Hi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, Ui = (e) => zi(e, "none") && !e.split(/,(?![^(]*\))/).every(Hi), Wi = (e) => zi(e.backgroundColor, "transparent") && !Ri.test(e.backgroundColor) || zi(e.backgroundImage, "none") || Ui(e.boxShadow) || Vi(e), Gi = (e) => Fi.has(e.localName), Ki = (e) => Ii.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), qi = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(Ai(n).filter((e) => e.width || e.height));
		} else Ki(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * Li, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, Ji = (e, t) => e.hasAttribute("skullet-block") || Gi(e) || Wi(t) && qi(e) <= 1;
function Yi(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function Xi(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * Li;
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
function Zi(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = Di(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...Pi(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of Ai(d)) f(e, r, t);
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
			if (Ji(e, r)) {
				let n = Di(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: Ei(t, n, Yi(e, r), r)
					});
				}
				Gi(e) || u.add(e);
				continue;
			}
			if (Ki(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? Ti(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...Xi(l)];
	for (let t of e.querySelectorAll(`[${jr}]`)) u.has(t) || t.removeAttribute(jr);
	for (let e of u) e.hasAttribute(jr) || e.setAttribute(jr, "");
	return [...c, ...Xi(l)];
}
var Qi = (e) => typeof matchMedia < "u" && matchMedia(e).matches, $i = () => typeof Element < "u" && typeof Element.prototype.animate == "function", ea = () => !$i() || Qi("(prefers-reduced-motion: reduce)"), ta = () => Qi("(prefers-reduced-transparency: reduce)"), na = (e) => e.getAnimations?.() ?? [], ra = .7, ia = 1280, aa = 320, oa = 2.5, sa = .45, ca = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function la(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", ca, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: Hr[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var ua = 20, da = Math.sin(ua * Math.PI / 180), fa = Math.cos(ua * Math.PI / 180), pa = da / fa, ma = fa, ha = `${90 + ua}deg`, ga = .85, $ = 12, _a = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function va(e) {
	let t = e * oa, n = (t, n) => `color-mix(in srgb, ${zr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * ga, _a(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(ga + e / $ * (1 - ga), _a(1 - e / $)));
	return {
		width: t / fa,
		image: `repeating-linear-gradient(${ha}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function ya(e, t, n = la(e)) {
	for (let t of na(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", ea() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: sa,
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
	}, { width: s, image: c } = va(Math.min(Math.max(o.width * .4, 80), aa)), l = a - o.left + (i.top - o.top) * pa, u = n.duration * ra / (ia + aa);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function ba(e) {
	if (ea()) return null;
	let t = la(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * ra / (ia + aa);
}
var xa = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Sa = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Ca(e, t) {
	let n = xa(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = la(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${Rr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, ya(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var wa = 120, Ta = 72, Ea = 3, Da = 60, Oa = 150, ka = 400, Aa = 1.5, ja = 1e3, Ma = 1e3, Na = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), Pa = -1 / 0, Fa = !1;
function Ia() {
	if (!(Fa || typeof addEventListener > "u")) {
		Fa = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => Pa = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var La = /* @__PURE__ */ new WeakMap();
function Ra(e, { served: t, refetch: n }) {
	Ia();
	let r = La.get(e)?.since ?? performance.now();
	La.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function za(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function Ba(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var Va = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function Ha(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${Ar}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var Ua = (e, t) => Math.min(Math.max(e, 0), t), Wa = -1 / 0;
function Ga(e, t, n, r, i) {
	let a = performance.now();
	a - Wa > Oa && (Wa = a);
	let o = a - Wa, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of za(e)) {
		let n = Ba(t, e), r = c.get(n);
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
		return t === null ? null : Ua(t, ja) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => Va(t.rect, e));
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
function Ka(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) Na.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function qa(e, t, n, r = () => {}) {
	let i = La.get(t);
	La.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - Pa < ka,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: za(e).length
			})
		};
	}
	let o = Ua(a.duration ?? 200, Ma);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, ja)
	}, !o) return { kind: "instant" };
	let s = Ka(a.enter, r);
	if (a.wipe) {
		let e = Ha(t);
		if (e.width * e.height <= innerWidth * innerHeight * Aa) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return Ga(e, t, a.order, {
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
var Ja = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return Ua(n * .8 + r * .2, 1) * 320;
}, Ya = (e) => e.bottom > 0 && e.top < innerHeight, Xa = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return Ya(e) ? 0 : null;
	if (!Ya(t)) return null;
	let i = Ua(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? Da : 0);
}, Za = { duration: 0 }, Qa = { order: "together" }, $a = { order: Ja }, eo = (e) => e.input || e.waited < 150 ? Za : e.refetch ? {
	order: "together",
	duration: wa
} : null, to = (e) => e.height < Ta || e.pieces <= Ea ? Qa : { order: Xa }, no = {
	hold: 150,
	choose: (e) => eo(e) ?? to(e)
}, ro = new Set(Wr), io = "script, noscript, template, base, meta, link", ao = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), oo = /* @__PURE__ */ new Set([
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
	jr
]), so = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function co(e, t) {
	let n = so(t.data);
	t.data = n;
	let r = e.parentElement, i = bi();
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
function lo(e) {
	for (let t of e.querySelectorAll(io)) t.remove();
	for (let t of e.querySelectorAll("*")) if (ao.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || oo.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function uo(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (ro.has(e.localName) || ao.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) co(e, t);
	return lo(n), n.innerHTML;
}
function fo(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, lo(t.content), t.content;
}
var po = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${po(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), mo = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function ho(e) {
	let t = po(e, 2);
	return t ? `${location.pathname}|${mo(t)}` : null;
}
var go = !1;
try {
	go = !1;
} catch {
	go = !1;
}
var _o = go, vo = /* @__PURE__ */ new Set();
function yo(e, t) {
	!_o || vo.has(e) || (vo.add(e), console.warn(`[skullet] ${t}`));
}
var bo = /^(https?:|\/|data:|blob:)/;
function xo(e) {
	return typeof e == "string" ? bo.test(e) ? "" : so(e) : Array.isArray(e) ? e.map(xo) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, xo(t)])) : e;
}
var So = "skullet:shapes", Co = 2, wo = 50, To = 2e4, Eo = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new Map();
function Oo(e, t) {
	return Do.has(e) || Do.set(e, /* @__PURE__ */ new Set()), Do.get(e).add(t), () => Do.get(e)?.delete(t);
}
function ko(e) {
	for (let t of Do.get(e) ?? []) t();
}
function Ao() {
	try {
		let e = JSON.parse(localStorage.getItem(So) ?? "null");
		return e?.v === Co ? e.shapes : {};
	} catch {
		return {};
	}
}
function jo(e) {
	try {
		localStorage.setItem(So, JSON.stringify({
			v: Co,
			shapes: e
		}));
	} catch {}
}
function Mo(e, t) {
	Eo.set(e, uo(t, !1));
	let n = uo(t, !0);
	if (n.length > To) return;
	let r = Ao();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - wo)) delete r[e];
	jo(r);
}
function No(e) {
	return Eo.get(e) ?? Ao()[e] ?? null;
}
var Po = [
	100,
	90,
	60
].map((e) => `<div ${Nr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), Fo = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Cr}]`)), Io = /* @__PURE__ */ new WeakMap();
function Lo(e) {
	if (!e) return;
	let t = Io.get(e);
	return Io.delete(e), t;
}
function Ro(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var zo = (e) => !!e.firstElementChild || !!e.textContent?.trim(), Bo = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Xr(), e[Pr] = !0, e.setAttribute(Cr, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = Ro(e, wr), this.snapshot = Ro(e, Tr), this.layer = Ro(e, Er), this.hadContent = zo(this.ghost);
		let n = e.closest(`[${xr}]`);
		n && Ra(n, {
			served: Fo.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[Fr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${Ar}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = zo(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || Fo.has(this.root), r = !!this.ghost.querySelector(`[${Mr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? ho(this.ghost);
			n && (ko(n), t = No(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(fo(t)) : e === "fallback" ? (this.snapshot.innerHTML = Po, yo(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(kr, e !== "ghost"), this.snapshot.toggleAttribute(kr, e === "ghost"), this.source = e, di(this.root.closest(`[${xr}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : Fo.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Ca(this.layer, Zi(e, this.layer));
		let t = this.root.closest(`[${xr}]`);
		t && Io.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Zr();
	}
}, Vo = 250, Ho = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? ho(e), this.untrack = this.key ? Oo(this.key, () => this.save()) : () => {}, (_o || li(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), Vo);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && Mo(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${xr}]`), o = Lo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && yo(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(xo(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (fi(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? yo(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : yo(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, Uo = () => {}, Wo = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, Go = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !Wo(e));
function Ko(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(Uo, Uo), new Promise((e) => setTimeout(e, Vr))]);
}
var qo = 360, Jo = 2, Yo = 600, Xo = 40, Zo = Xo / ma, Qo = 320, $o = 120, es = .45, ts = (e) => e.left + e.top * pa, ns = (e) => e.width + e.height * pa, rs = (e, t) => ts(t) - Zo + (ns(t) + 2 * Zo) * e, is = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function as(e) {
	let t = e.querySelector(`:scope > [${Ar}] [${Er}]`), n = t && ba(t);
	if (!n) return null;
	let r = Ha(e);
	if (r.width * r.height > innerWidth * innerHeight * Aa) return null;
	let i = ts(r), a = i + ns(r), o = performance.now(), s = o - is.start;
	s <= Oa && (i - is.origin) / is.speed >= s && (a - is.origin) / is.speed - s <= Yo || (is = {
		start: o,
		origin: i,
		speed: Math.max(Jo / n, (a - i) / qo)
	});
	let { start: c, origin: l, speed: u } = is;
	return {
		delay: (i - Zo - l) / u - (o - c),
		duration: (a - i + 2 * Zo) / u
	};
}
var os = (e) => (t, { rect: n, reveal: r }) => {
	let i = (rs(t, r) - ts(n)) * ma;
	return `linear-gradient(${ha}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - _a(n / $) : _a(n / $), a = -Xo + 2 * Xo * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, ss = "http://www.w3.org/2000/svg", cs = null, ls = 0;
function us() {
	return cs?.isConnected || (cs = document.createElementNS(ss, "svg"), cs.setAttribute("aria-hidden", "true"), cs.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(cs)), cs;
}
var ds = (e, t) => {
	let n = document.createElementNS(ss, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, fs = {
	mask: os(!0),
	out: os(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ta()) return;
		let i = ts(t), a = ns(t), o = Qo / 2 / ma, s = () => rs(r(), n) - i - $o / ma;
		if (s() - o > a) return;
		let c = 2 * o + t.height * pa, l = c / 2, u = t.height / 2, d = Qo / 2 * ma, f = Qo / 2 * pa * ma, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${_a(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++ls}`, _ = ds("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = ds("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(ds(`feFunc${e}`, {
			type: "linear",
			slope: 1 - es,
			intercept: es
		}));
		let y = ds("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, ds("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), ds("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), us().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * pa) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, ps = {
	together: Qa,
	sequence: $a,
	smart: no,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = eo(e);
			if (t) return t;
			let n = as(e.reveal);
			return n ? {
				wipe: fs,
				...n
			} : to(e);
		}
	}
}, ms = (e = "smart") => typeof e == "string" ? ps[e] : e, hs = () => {}, gs = (e) => e.finished.then(hs, hs), _s = /* @__PURE__ */ new WeakMap();
function vs(e, t = 0, n = 200, r = 0, i) {
	return ea() ? Promise.resolve() : gs(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var ys = (e) => !!e.querySelector(`[${Er}], [${wr}], :scope > [${Mr}]`), bs = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, xs = /* @__PURE__ */ new WeakMap();
function Ss(e) {
	for (let t of xs.get(e) ?? []) t.remove();
	xs.delete(e);
}
function Cs(e, t) {
	let n = Go(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && ys(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${Ar}] [${Er}]`)].flatMap(Sa), a = xs.get(t) ?? /* @__PURE__ */ new Set();
			xs.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => bs(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(Dr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: Rr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), ya(c), Ko(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", vs(e), ea()) return c.remove();
						gs(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function ws(e, t) {
	return ea() ? Promise.resolve() : Promise.all(za(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return vs(e, n, t.duration, 0, t.enter);
	})).then(hs);
}
function Ts(e) {
	for (let t of e.querySelectorAll(`:scope > [${Ar}]`)) {
		for (let e of na(t)) e.finish();
		t.style.opacity = "0";
	}
}
function Es(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${Ar}]`)) if (!ys(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of na(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function Ds(e, t = "smart", { initial: n = !1 } = {}) {
	let r = Os.get(e);
	return r || (r = ks(e, t, n), Os.set(e, r)), r;
}
var Os = /* @__PURE__ */ new WeakMap();
function ks(e, t, n) {
	let r = e.parentElement, i = ms(t);
	if (ys(e)) {
		r && Ss(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && _s.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : vs(e, t)) : (r && _s.delete(r), n ? Promise.resolve() : vs(e));
	}
	if (n || !r) return Promise.resolve();
	let a = Es(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return _s.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), vs(e, 0, t, a);
	}
	Cs(e, r);
	let o = qa(e, r, i, (e) => yo(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return _s.set(r, o), o.kind === "instant" ? (Ts(r), Promise.resolve()) : o.kind === "sequence" ? ws(e, o) : o.kind === "wipe" ? Hs(e, o, !0) : vs(e, o.delay, o.duration, 0, o.enter);
}
function As(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function js(e, t = As(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(Ar, ""), t;
}
var Ms = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
	let n = e.querySelector(`:scope > [${Sr}]:not([${Ar}])`);
	if (!n) return;
	let r = Ms.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && Ps(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: Br,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	Ms.set(e, u), gs(l).then(() => {
		Ms.get(e) === u && Ps(e, u);
	});
}
function Ps(e, { overflow: t, boxSizing: n }) {
	Ms.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function Fs(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of na(e)) t.cancel();
	Vs(e), e.style.filter = "";
	let i = e.parentElement;
	i && !ys(e) && Ss(i);
	let a = js(e, t), o = (t, n) => $i() ? gs(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && _s.get(i), n = ea() || t?.kind === "instant";
		if (i && !n && Ns(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && ys(e) ? Is(e, t) : t?.kind === "wipe" && ys(e) ? Hs(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function Is(e, t) {
	for (let t of e.querySelectorAll(`[${wr}], [${Tr}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${wr}] [${Mr}]`)].filter((e) => !e.parentElement?.closest(`[${Mr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${Er}]`)].flatMap(Sa), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => gs(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(hs);
}
var Ls = 100, Rs = /* @__PURE__ */ new WeakMap();
function zs(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function Bs(e, t) {
	zs(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function Vs(e) {
	Rs.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function Hs(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? zs(e, i(t, r)) : a ? zs(e, a(t, r)) : Bs(e, i(t, r));
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
			if (e - i > Ls && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), Rs.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + Ls);
		Rs.set(e, l), c();
	}).then((t) => {
		if (Vs(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? vs(e, 0, r, t) : gs(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var Us = X.createContext({}), Ws = X.createContext(null), Gs = () => X.useContext(Us), Ks = () => X.useContext(Ws), qs = () => Gs().reveal;
function Js({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = ni({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && ui(n);
	}, [n]), (0, Z.jsx)(Us.Provider, {
		value: t,
		children: (0, Z.jsxs)(Ws.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var Ys = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Xs = () => X.useInsertionEffect(() => (Xr(), Zr), []), Zs = Number("19.3.1".split(".")[0]) >= 19, Qs = () => {
	let { nonce: e } = Gs();
	return Zs ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: Kr
	}) : null;
}, $s = Zs ? { inert: !0 } : { inert: "" }, ec = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[Mr]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, ec(e.props.children)) : e;
}), tc = () => () => {}, nc = () => X.useSyncExternalStore(tc, () => !1, () => !0), rc = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = Gs(), s = Ks(), c = nc(), l = Qr;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), Ys(() => {
		if (!a.current) return;
		let e = new Bo(a.current, {
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
			[Cr]: "",
			"aria-hidden": !0,
			...$s,
			children: [
				(0, Z.jsx)("div", {
					[wr]: "",
					children: ec(e)
				}),
				(0, Z.jsx)("div", { [Tr]: "" }),
				(0, Z.jsx)("div", { [Er]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, ic = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = qs();
	return Ys(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), Ds(c.current, l, { initial: !r }).then(s), o && (e.memory = new Ho(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), Ys(() => {
		!i || !c.current || Fs(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Sr]: "",
		children: e
	});
}, ac = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = As(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function oc(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	Xs();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	Ys(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[Mr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(rc, {
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
	if (Ys(() => {
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
	Ys(() => {
		T.current = e.onReveal;
	});
	let E = y.key === "content" && y.from === "skeleton" ? () => T.current?.() : void 0, ee = (e) => S((t) => t.filter((t) => t.id !== e)), D = [...x.map((e) => (0, Z.jsx)(ic, {
		id: e.id,
		registry: C,
		enter: !1,
		exiting: !0,
		onExited: () => ee(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(ic, {
		id: y.id,
		registry: C,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: E,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[xr]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Qs, {}), (0, Z.jsx)(ac, {
			exiting: x.map((e) => e.id),
			registry: C,
			children: D
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var sc = {
	creators: [Y("follow:followOverview.creators"), Y("follow:followOverview.creatorUnit")],
	enabled: [Y("follow:followOverview.enabledSources"), ""],
	failed: [Y("follow:followCheck.checkFailed"), Y("follow:followOverview.sourceUnit")],
	updates: [Y("follow:followOverview.unwatchedUpdates"), Y("follow:followOverview.itemUnit")],
	subscriptions: [Y("follow:feedSources.footerLabel"), Y("follow:followOverview.actressUnit")],
	releases: [Y("follow:followOverview.unwatchedReleases"), Y("follow:followOverview.itemUnit")]
}, cc = {
	duration: 0,
	delay: 0,
	hold: 150
}, lc;
function uc() {
	return lc || (lc = new CSSStyleSheet(), lc.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), lc;
}
function dc({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function fc({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = sc[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = uc();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: je({
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
		}) : /* @__PURE__ */ (0, Z.jsx)(Js, {
			reveal: cc,
			children: /* @__PURE__ */ (0, Z.jsx)(oc, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: Y("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(dc, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var pc = (e) => A.some(([t]) => t === e);
function mc(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(pc(e.tab) ? e.tab : "list"), [u, f] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [p, m] = (0, X.useState)(() => Nt(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => Nt(e.sort, e.dir).dir), [_, v] = (0, X.useState)(dt(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(bt(e.pageSize)), [x, S] = (0, X.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), T = nn(() => {
		S(/* @__PURE__ */ new Set()), w(/* @__PURE__ */ new Set());
	});
	(0, X.useEffect)(() => {
		(x.size || C.size) && Ye();
	}, [x, C]);
	let E = rn({
		queryKey: re,
		queryFn: ({ signal: e }) => nt(e)
	}), ee = rn({
		queryKey: ne,
		queryFn: ({ signal: e }) => et(e)
	}), O = rn({
		queryKey: te,
		queryFn: ({ signal: e }) => tt(e)
	}), k = E.data || { sources: [] }, ie = ee.data || {
		root: "",
		providers: []
	}, j = k.sources;
	(0, X.useEffect)(() => {
		S((e) => {
			let t = mt(e, j);
			return t.size === e.size ? e : t;
		});
	}, [j]);
	let M = (e) => {
		let n = e.sort ?? p, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? u,
			sort: n === "checked" ? "" : n,
			dir: r === ce[n] ? "" : r
		});
	}, N = lt(j), P = j.filter(ut).length, F = j.filter((e) => e.enabled).length, I = (ie.providers || []).filter((e) => e.requirement === "required" && !We(e)).length, L = new Set((O.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(fn, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(V, {
			tone: "warning",
			title: Y("follow:followManagePage.readOnly"),
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(D, {
					href: s,
					children: Y("follow:followManagePage.goToPrimary")
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: U,
			"aria-label": Y("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "creators",
					figure: E.data ? N.length : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "enabled",
					figure: E.data ? F : void 0,
					total: j.length,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "failed",
					figure: E.data ? P : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "updates",
					figure: E.data ? k.counts?.new || 0 : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "subscriptions",
					figure: O.data ? L : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(fc, {
					field: "releases",
					figure: O.data ? O.data.unread || 0 : void 0,
					failed: O.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Z.jsx)(ge, {
						group: "follow",
						label: Y("follow:followManagePage.sectionTabs"),
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
							S(/* @__PURE__ */ new Set()), w(/* @__PURE__ */ new Set()), l(e), M({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(cr, {
						readOnly: a,
						toast: r,
						selecting: T,
						onAdd: () => {
							l("add"), M({ tab: "add" });
						},
						selection: {
							ids: C,
							onChange: w,
							onActivate: () => S(/* @__PURE__ */ new Set())
						}
					}), E.data ? /* @__PURE__ */ (0, Z.jsx)(br, {
						data: k,
						sort: p,
						dir: h,
						page: u,
						layout: _,
						pageSize: y,
						selected: x,
						selecting: T,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), M({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), f(1), M({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							f(e), M({ page: e });
						},
						onSelected: (e) => {
							S(e), w(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), f(1), n({ layout: e }), M({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), f(1), n({ pageSize: e }), M({ page: 1 });
						}
					}) : E.isError ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						children: Y("follow:followManagePage.listFailed")
					}) : /* @__PURE__ */ (0, Z.jsx)("div", {
						role: "status",
						"aria-label": Y("follow:followManagePage.listLoading"),
						"data-skeleton": "",
						className: "skeleton-sheen h-32 rounded-lg"
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						ee.data && E.data ? /* @__PURE__ */ (0, Z.jsx)(Mn, {
							data: k,
							credentials: ie,
							readOnly: a,
							toast: r
						}) : ee.isError || E.isError ? /* @__PURE__ */ (0, Z.jsx)(V, {
							tone: "error",
							children: Y("follow:followManagePage.credentialsFailed")
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(Ln, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								O.refetch(), l("list"), M({ tab: "list" });
							}
						}),
						E.data ? /* @__PURE__ */ (0, Z.jsx)(Xn, {
							groups: k.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: k.alias_suggestions || [],
							sources: k.sources
						}) : null
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsx)(d, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: I ? Y("follow:followManagePage.feedSettingsPending", { count: I }) : Y("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { mc as FollowManagePage };

//# debugId=acb6cbd0-6558-415d-b3e6-c4a9324a9a0b