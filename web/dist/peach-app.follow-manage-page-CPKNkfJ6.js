(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e2393a7-010a-4e8b-9322-a3f12cdde8e5", e._sentryDebugIdIdentifier = "sentry-dbid-3e2393a7-010a-4e8b-9322-a3f12cdde8e5");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, Button as l, ButtonLink as u, Bx as d, COLUMN_SORT as f, Checkbox as p, ChevronSortDown as m, Chip as h, CollapseChevron as g, CollapseRegion as _, DataTableFooter as v, DataTableFrame as y, DataTableSort as b, EmptyFocusButton as x, EmptyState as ee, ErrorText as S, ExternalLink as C, FEEDS_KEY as te, FOLLOW_CHECK_KEY as w, FOLLOW_CREDENTIALS_KEY as ne, FOLLOW_MANAGE_KEY as T, FOLLOW_MANAGE_NAV as E, FOLLOW_RESOLVE_KEY as D, FieldLabel as O, Help as k, Input as A, LAYOUTS as j, LoadingDots as M, M6 as N, MENU_ITEM as P, MENU_ITEM_INTERACTIVE as F, MENU_POPOVER_SURFACE as I, ModalFrame as L, Note as R, P7 as re, SORT_DEFAULT_DIR as z, SORT_OPTIONS as ie, STAT_STRIP_SIX as ae, Select as oe, SelectItem as B, SelectionDock as se, SelectionPopover as V, SiteLabel as H, SortDirectionIcon as ce, SortableBoardTabs as le, Switch as ue, Table as de, TableColumnControls as fe, TableColumnResizer as pe, TableSelectionHeader as me, TagManager as U, TaskProgress as he, Un as ge, Wt as W, Xf as _e, __toESM as ve, addAlias as ye, addSource as be, authorGroups as xe, authorName as Se, avatarInner as Ce, busyProps as G, cardClass as we, checkEvidenceGap as Te, checkFailures as Ee, checkFeeds as De, checkReceipt as Oe, checkSummary as ke, checkedText as Ae, clickedBlank as je, codedText as Me, columnVisibilityFeature as Ne, composingKey as Pe, confirmModal as Fe, createColumnHelper as Ie, credentialDone as Le, cx as Re, dZ as ze, dropSources as Be, du as Ve, errorHeadline as He, errorMessage as K, feedIntervalText as Ue, fetchCheckJob as We, fetchCredentials as q, fetchFeeds as Ge, fetchFollow as Ke, fetchResolveJob as qe, fetchSuggestions as Je, flexRender as Ye, followFeedByName as Xe, followFeedEntity as Ze, followSuggestKey as Qe, groupByAuthor as $e, isBroken as et, isLayout as tt, jobText as nt, joinList as J, keepSelected as rt, l7 as it, localTime as at, lookupFeedActor as ot, mapLimit as st, markAllPending as ct, pageSizeOf as lt, pageWindow as ut, patchSource as dt, pv as ft, queryClient as pt, quoted as mt, reloadFollowManage as ht, removeAlias as gt, removeFeed as _t, removeSource as vt, renameAliasGroup as yt, require_jsx_runtime as bt, require_react as xt, resolveFollowSort as St, rowPaginationFeature as Ct, rowSelectionFeature as wt, rowSortingFeature as Tt, selectionState as Et, serverLabel as Dt, setFeedEnabled as Ot, setSourceEnabled as kt, sortLabel as At, startCheck as jt, startResolve as Mt, t as Y, tableFeatures as Nt, tableRows as Pt, toggleGroup as Ft, useAction as It, useBackgroundJob as Lt, useMutation as Rt, useQuery as zt, useTable as Bt, useTablePreferences as Vt } from "./peach-app.js";
import { Page as Ht } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as Ut, ErrorLine as Wt, SourceIcon as Gt, SourceLink as Kt, StatusBadge as qt } from "./peach-app.source-view--K6uWAMi.js";
import { createPaginatedRowModel as Jt, createSortedRowModel as Yt, useTableSelection as Xt } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { LEGACY_AVATAR_IMG as Zt } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ ve(xt(), 1), Z = bt(), Qt = Re(P, F, "text-body-2-medium"), $t = Y("follow:addCreatorSource.placeholder"), en = Y("follow:addCreatorSource.title"), tn = Y("follow:addCreatorSource.searchingByName"), nn = Y("follow:addCreatorSource.recognizing"), rn = Y("follow:addCreatorSource.noSourceFound"), an = "/settings/subscriptions", on = (e, t) => `${e}:${t.url}`;
function sn({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
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
		className: Re(I, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(M, { label: Y("follow:addCreatorSource.findingSuggestions") })
		}) : null, r.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? Re(Qt, "bg-background-secondary-default") : Qt,
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
function cn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? Y("follow:addCreatorSource.allSources") : Y("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Z.jsx)(V, {
		label: Y("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: c,
		empty: Y("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(Gt, { provider: e.provider }), e.provider_label]
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
				href: an
			}
		]
	});
}
function ln({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(R, {
		tone: "error",
		title: e.line,
		children: nt(e, "error") || Y("follow:addCreatorSource.searchFailed")
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: we({
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
				let n = on(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(p, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Gt, { provider: e.provider }),
							/* @__PURE__ */ (0, Z.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Z.jsx)("span", {
								className: "min-w-0 break-words",
								children: Me(e, "label")
							}),
							/* @__PURE__ */ (0, Z.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? Y("follow:addCreatorSource.alreadyFollowing") : Me(e, "evidence")
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Z.jsx)(k, { children: rn }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: Me(e, "evidence")
				}), /* @__PURE__ */ (0, Z.jsx)(C, {
					href: e.url,
					children: Y("follow:shared.labeled", {
						label: Me(e, "label"),
						value: e.query
					})
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Z.jsx)(k, { children: J(o.map(([t, n]) => Y("follow:shared.labeled", {
				label: t,
				value: Dt(e.failure_codes?.[t]?.code ?? "", n, e.failure_codes?.[t]?.params)
			}))) }) : null
		]
	});
}
function un({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, u] = (0, X.useState)(""), [d, f] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, X.useState)(/* @__PURE__ */ new Set()), [te, w] = (0, X.useState)(""), [ne, T] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let E = zt({
		queryKey: Qe(d),
		queryFn: ({ signal: e }) => Je(d, e),
		enabled: d.length > 0 && p && !o && h !== i
	}), k = (0, X.useMemo)(() => (E.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: Dt(t.matched_code ?? "", t.matched || ""),
		n: t.n || 0,
		group: Dt(e.label_code ?? "", e.label)
	}))), [E.data]), { job: j, running: M, outcome: N, start: P, dismiss: F } = Lt({
		queryKey: D,
		queryFn: ({ signal: e }) => qe(e),
		start: (e) => Mt([e]),
		onStarted: () => C(/* @__PURE__ */ new Set()),
		onError: (e) => w(K(e)),
		onFinish: (e) => {
			e.status === "failed" && w(nt(e, "error") || Y("follow:addCreatorSource.searchFailed"));
		}
	}), I = (e) => {
		let t = e.trim();
		!t || n || o || M || P.isPending || (w(""), v(-1), u(t), a(t), f(""), g(t), P.mutate(t));
	}, L = E.isFetching, re = p && !o && h !== i && (k.length > 0 || L), z = () => {
		v(-1), g(i);
	}, ie = (e) => {
		if (!(o || Pe(e.nativeEvent))) {
			if (e.key === "Escape" && re) z();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!k.length) return;
				if (e.preventDefault(), !re) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? k.length - 1 : n >= k.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), I(k[_]?.value || i));
		}
	}, ae = N?.results || [], oe = ae.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !x.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: on(t, e)
	})).filter((e) => !S.has(e.key))), B = Rt({
		mutationFn: async (e) => {
			let t = [], n = [];
			T(0);
			for (let r of e) {
				try {
					let e = await be(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(Y("follow:shared.labeled", {
						label: r.candidate.label,
						value: K(e)
					}));
				}
				T((e) => e + 1);
			}
			if (n.length) try {
				await jt(n);
			} catch (e) {
				t.push(K(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			ht(), e.failures.length ? w(J(e.failures)) : (w(""), F(), r(Y("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => w(K(e))
	}), se = e.suggestions || [], V = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": en,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: en
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
						children: [/* @__PURE__ */ (0, Z.jsx)(A, {
							"aria-label": Y("follow:addCreatorSource.inputLabel"),
							placeholder: $t,
							value: i,
							leadingIcon: ft,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: ie
						}), re ? /* @__PURE__ */ (0, Z.jsx)(sn, {
							field: y,
							menu: b,
							options: k,
							active: _,
							busy: L,
							onPick: I,
							onClose: z
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(cn, {
						credentials: t,
						hidden: x,
						onHidden: ee
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "primary",
						disabled: n || !i.trim(),
						...G(M || P.isPending),
						onClick: () => I(i),
						children: Y("follow:shared.search")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [M || P.isPending ? /* @__PURE__ */ (0, Z.jsx)(he, {
					embedded: !0,
					label: nt(j) || (j?.total ? Y("follow:addCreatorSource.searchProgress", {
						checked: j.checked || 0,
						count: j.total
					}) : V ? tn : nn),
					value: j?.checked,
					total: j?.total
				}) : null, te ? /* @__PURE__ */ (0, Z.jsx)(R, {
					tone: "error",
					title: Y("follow:addJavFeed.notCompleted"),
					children: te
				}) : null]
			}),
			ae.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:addCreatorSource.results") }),
					ae.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(ln, {
						row: e,
						at: t,
						hidden: x,
						unpicked: S,
						onPick: (e, t) => {
							let n = new Set(S);
							t ? n.delete(e) : n.add(e), C(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => F(),
								children: Y("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: n || !oe.length,
								...G(B.isPending),
								onClick: () => B.mutate(oe),
								children: Y("follow:addCreatorSource.addSelected", { count: oe.length })
							}),
							B.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:addCreatorSource.addingProgress", {
									added: ne,
									count: oe.length
								})
							}) : null
						]
					})
				]
			}) : null,
			se.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: Y("follow:addCreatorSource.suggested")
				}), se.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? Y("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : Y("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => I(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var dn = Y("follow:addJavFeed.placeholder"), fn = Y("follow:addJavFeed.title");
function pn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: Y("follow:addJavFeed.cardsSplitAcrossPeople", { names: J([...n.values()]) }),
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
function mn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(p, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: J(e.names)
					}),
					e.record ? /* @__PURE__ */ (0, Z.jsx)(h, {
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
		}), /* @__PURE__ */ (0, Z.jsx)(C, {
			href: e.url,
			children: e.id
		})]
	});
}
function hn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), u = It(), d = () => {
		let t = r.trim();
		t && !e && u.run("lookup", (e) => ot(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !Pe(e.nativeEvent) && (e.preventDefault(), d());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), u.setError("");
	}, m = () => {
		a && u.run("follow", (e) => Xe(a.q, [...s], e), (e) => {
			t(e.created ? Y("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : Y("follow:addJavFeed.subscribed", { name: e.entity_name })), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && u.run("known", (t) => Ze(e.id, t), () => {
			t(Y("follow:addJavFeed.subscribed", { name: e.name })), i(""), p(), n();
		});
	}, g = a ? pn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": fn,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: fn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(A, {
						"aria-label": Y("follow:addJavFeed.actressName"),
						placeholder: dn,
						value: r,
						leadingIcon: ft,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: f
					})
				}), /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "primary",
					disabled: e || !r.trim(),
					...G(u.busy === "lookup"),
					onClick: d,
					children: Y("follow:shared.search")
				})]
			}),
			u.error ? /* @__PURE__ */ (0, Z.jsx)(R, {
				tone: "error",
				title: Y("follow:addJavFeed.notCompleted"),
				children: u.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "warning",
						title: Y("follow:addJavFeed.javdbSearchFailed"),
						children: Dt(a.unavailable_code ?? "", a.unavailable, a.unavailable_params)
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:addJavFeed.javdbCards") }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(mn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(k, { children: a.unavailable ? Y("follow:addJavFeed.noCardsThisTime") : Y("follow:addJavFeed.noJavdbMatch") }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(k, {
						role: "status",
						children: s.size ? g.text : Y("follow:addJavFeed.pickCardsHint")
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(k, {
						role: "status",
						children: _.following ? Y("follow:addJavFeed.alreadySubscribed", { name: _.name }) : Y("follow:addJavFeed.canSubscribeDirectly", { name: _.name })
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: Y("follow:shared.close")
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...G(u.busy === "follow"),
								onClick: m,
								children: Y("follow:addJavFeed.subscribePicked", { count: s.size })
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: e,
								...G(u.busy === "known"),
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
function gn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(L, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: Y("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Z.jsx)(_n, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function _n({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = It();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => yt(t.canonical_key, i.trim(), e), () => {
				ht(), r(Y("follow:creatorAliases.renamed", { name: i.trim() })), n();
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
			/* @__PURE__ */ (0, Z.jsx)(A, {
				"aria-label": Y("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Z.jsx)("div", {
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
var vn = (e) => Y("follow:creatorAliases.removeBody", { alias: e }), yn = Nt({
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	rowPaginationFeature: Ct,
	columnVisibilityFeature: Ne,
	sortedRowModel: Yt(),
	paginatedRowModel: Jt()
}), bn = yn, xn = {
	id: "select",
	label: Y("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Sn = {
	id: "canonical",
	label: Y("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Cn = [
	xn,
	Sn,
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
], wn = [
	xn,
	Sn,
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
], Tn = (e) => e.alias;
function En(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Dn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Ut, {
			group: En(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function On({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: u }) {
	let d = Vt("alias-suggestions", Cn), f = Vt("alias-saved", wn), [h, g] = (0, X.useState)(null), [_, C] = (0, X.useState)({}), [te, w] = (0, X.useState)({}), ne = Xt(() => C({})), T = Xt(() => w({})), [E, D] = (0, X.useState)([]), [k, j] = (0, X.useState)([]), [M, N] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, F] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(t.length / M.pageSize) - 1))
	}, L = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [R, z] = (0, X.useState)(""), [ie, ae] = (0, X.useState)(""), [oe, B] = (0, X.useState)(""), V = Rt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await ye(n.canonical, n.alias);
				} catch (n) {
					throw t && ht(), Error(Y("follow:creatorAliases.mergePartialError", {
						error: K(n),
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
		onSuccess: (e) => {
			z(""), C({}), ht(), u(Y("follow:creatorAliases.merged", { count: e.done }));
		},
		onError: (e) => z(K(e))
	}), H = Rt({
		mutationFn: (e) => ye(e.canonical, e.alias),
		onSuccess: () => {
			z(""), ae(""), B(""), ht(), u(Y("follow:creatorAliases.saved"));
		},
		onError: (e) => z(K(e))
	}), ce = Rt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await gt(e), n += 1;
			} catch (e) {
				throw Error(Y("follow:creatorAliases.removePartialError", {
					error: K(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				ht();
			}
		},
		onSuccess: () => {
			z(""), w({}), u(Y("follow:creatorAliases.removed"));
		},
		onError: (e) => z(K(e))
	}), le = (e, t) => {
		e.length && Fe({
			title: Y(t ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: Y("follow:creatorAliases.mergeBody", {
				count: e.length,
				pairs: J(e.map((e) => Y("follow:creatorAliases.mergePair", {
					alias: mt(e.alias),
					canonical: mt(e.canonical)
				})))
			}),
			confirmLabel: Y(t ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm"),
			onConfirm: () => V.mutateAsync(e)
		});
	}, ue = (e) => void Fe({
		title: Y("follow:creatorAliases.removeTitle"),
		body: vn(e),
		confirmLabel: Y("follow:creatorAliases.removeTitle"),
		onConfirm: () => ce.mutateAsync(e)
	}), U = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: V.isPending,
		removing: ce.isPending,
		merge: le,
		remove: ue,
		rename: g
	});
	U.current = {
		sources: s,
		readOnly: c,
		merging: V.isPending,
		removing: ce.isPending,
		merge: le,
		remove: ue,
		rename: g
	};
	let he = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(me, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Dn, {
					sources: U.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: Y("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Dt(e.evidence_code ?? "", e.evidence, e.evidence_params), {
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
	}, []), ge = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(me, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Dn, {
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
							leadingIcon: re,
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
	}, []), W = Bt({
		features: yn,
		data: t,
		columns: he,
		getRowId: Tn,
		state: {
			rowSelection: _,
			sorting: E,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			ne(), C(e);
		},
		onSortingChange: (e) => {
			D(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), ve = Bt({
		features: bn,
		data: e,
		columns: ge,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: te,
			sorting: k,
			pagination: L,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			T(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			j(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), be = W.getSelectedRowModel().rows.map((e) => e.original), xe = ve.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Se = G(V.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: we({
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
				children: [/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(A, {
							"aria-label": Y("follow:creatorAliases.displayName"),
							placeholder: Y("follow:creatorAliases.displayNamePlaceholder"),
							value: ie,
							onChange: ae,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(A, {
							"aria-label": Y("follow:creatorAliases.platformAlias"),
							placeholder: Y("follow:creatorAliases.platformAlias"),
							value: oe,
							onChange: B,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							disabled: c || !ie.trim() || !oe.trim(),
							...G(H.isPending),
							onClick: () => H.mutate({
								canonical: ie.trim(),
								alias: oe.trim()
							}),
							children: Y("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			R ? /* @__PURE__ */ (0, Z.jsx)(S, { children: R }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: t.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "primary",
									size: "small",
									disabled: c,
									...Se,
									onClick: () => le(t, !0),
									children: Y("follow:creatorAliases.mergeAllCount", { count: t.length })
								}),
								/* @__PURE__ */ (0, Z.jsx)(b, {
									label: Y("follow:creatorAliases.pendingTable"),
									sorting: E,
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
										D(e), N((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: d,
									label: Y("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(se, {
						label: Y("follow:creatorAliases.pendingBulkActions"),
						visible: be.length > 0,
						count: Y("follow:creatorAliases.groupsSelected", { count: be.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...Se,
							onClick: () => le(be, !1),
							children: Y("follow:creatorAliases.mergeSelectedCount", { count: be.length })
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => C({}),
							children: Y("follow:shared.clearSelection")
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(y, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => W.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(de, {
							"aria-label": Y("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: E[0] ? {
								column: E[0].id,
								direction: E[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => W.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [W.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Ye(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(pe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: W.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Ye(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.pendingTable"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: t.length,
						pagination: I,
						onChange: N
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(O, { children: Y("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: e.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(b, {
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
									j(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(fe, {
								preferences: f,
								label: Y("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(se, {
						label: Y("follow:creatorAliases.savedBulkActions"),
						visible: xe.length > 0,
						count: Y("follow:creatorAliases.aliasesSelected", { count: xe.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...G(ce.isPending),
							onClick: () => void Fe({
								title: Y("follow:creatorAliases.removeSelectedTitle"),
								body: Y("follow:creatorAliases.removeSelectedBody", { count: xe.length }),
								items: xe,
								confirmLabel: Y("follow:creatorAliases.removeSelectedConfirm"),
								onConfirm: () => ce.mutateAsync(xe)
							}),
							children: Y("follow:creatorAliases.removeSelectedCount", { count: xe.length })
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: Y("follow:shared.clearSelection")
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(y, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => ve.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(de, {
							"aria-label": Y("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ve.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [ve.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Ye(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(pe, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: ve.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Ye(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.saved"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ (0, Z.jsx)(ee, {
						size: "compact",
						icon: _e,
						title: Y("follow:creatorAliases.emptyTitle"),
						actions: c ? void 0 : /* @__PURE__ */ (0, Z.jsx)(x, {
							target: `input[aria-label="${Y("follow:creatorAliases.displayName")}"]`,
							children: Y("follow:creatorAliases.addAlias")
						}),
						children: Y("follow:creatorAliases.emptyBody")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(gn, {
				group: h,
				close: () => g(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var kn = Nt({
	rowPaginationFeature: Ct,
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	columnVisibilityFeature: Ne,
	sortedRowModel: Yt(),
	paginatedRowModel: Jt()
}), An = {
	select: Y("follow:shared.select"),
	name: Y("follow:shared.name"),
	kind: Y("follow:shared.type"),
	origin: Y("follow:followFeed.filterKindSource"),
	status: Y("follow:shared.status"),
	interval: Y("follow:feedSources.colInterval"),
	fetched: Y("follow:feedSources.colLastFetched"),
	fresh: Y("follow:feedSources.colLastAdded"),
	actions: Y("follow:shared.actions")
}, jn = /* @__PURE__ */ new Set(["actions"]), Mn = Object.entries(An).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Nn = () => pt.invalidateQueries({
	queryKey: te,
	exact: !0
}), Pn = (e) => e.name || e.url;
function Fn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function In({ source: e }) {
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
function Ln({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Zt}`,
		dangerouslySetInnerHTML: { __html: Ce(Pn(e), t, null, "performer") }
	});
}
var Rn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function zn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Bn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Fe({
		title: n ? Y("follow:feedSources.removeOne") : Y("follow:feedSources.removeMany", { count: e.length }),
		body: n ? Y("follow:feedSources.removeOneBody", { name: Pn(n) }) : Y("follow:feedSources.removeManyBody"),
		confirmLabel: Y(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		onConfirm: t
	});
}
function Vn({ readOnly: e, toast: t, onAdd: c, selection: u }) {
	let f = zt({
		queryKey: te,
		queryFn: ({ signal: e }) => Ge(e)
	}), h = It(), g = Vt("jav-feeds", Mn), _ = f.data, x = (0, X.useMemo)(() => _?.sources ?? [], [_]), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), ne = u?.ids ?? C, T = u?.onChange ?? w, [E, D] = (0, X.useState)(1), [O, A] = (0, X.useState)(20), [j, M] = (0, X.useState)([]), P = ut(x.length, O, E);
	(0, X.useEffect)(() => {
		D((e) => Math.min(e, P.pages));
	}, [P.pages]), (0, X.useEffect)(() => {
		T((e) => {
			let t = new Set(x.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [x, T]);
	let F = Rt({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await _t(t) : await Ot(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (T(/* @__PURE__ */ new Set()), Nn(), e.action === "remove" && r && t(Y("follow:feedSources.removedMany", { count: r })), n.length) {
				let e = n[0];
				h.setError(Y("follow:feedSources.writeFailed", {
					count: n.length,
					error: e.ok ? "" : K(e.error)
				}));
			}
		},
		onError: (e) => h.setError(K(e))
	}), I = (0, X.useMemo)(() => zn(x), [x]), L = (0, X.useRef)({
		readOnly: e,
		shared: I,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	L.current = {
		readOnly: e,
		shared: I,
		busy: h.busy,
		toggle: (e, t) => void h.run(`enabled-${e.id}`, (n) => Ot(e.id, t, n), () => void Nn()),
		fetch: (e) => void h.run(`check-${e.id}`, (t) => De(t, [e.id]), () => void Nn()),
		remove: (e) => void Bn([e], async () => {
			await _t(e.id), t(Y("follow:feedSources.removedOne", { name: Pn(e) })), Nn();
		})
	};
	let re = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => An[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(me, {
					table: e.table,
					label: Y("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: Pn(e.row.original) })
				})
			}),
			e.accessor(Pn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Rn(e.row.original, L.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Ln, { source: e.row.original }),
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
			e.accessor((e) => Me(e, "kind_label"), {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(H, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Fn(e.getValue()),
						label: Fn(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(W, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? Y("follow:feedSources.fetchFailed") : e.enabled ? Y("follow:shared.enabled") : Y("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(In, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ue(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? at(e.row.original.last_fetched_at) : Y("follow:feedSources.neverFetched")
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
						/* @__PURE__ */ (0, Z.jsx)(ue, {
							"aria-label": Y("follow:shared.enableNamed", { name: Pn(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: L.current.readOnly,
							onChange: (t) => L.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": Y("follow:feedSources.fetchNamed", { name: Pn(e.row.original) }),
							disabled: L.current.readOnly,
							...G(L.current.busy === `check-${e.row.original.id}`),
							onClick: () => L.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": Y("follow:shared.removeNamed", { name: Pn(e.row.original) }),
							disabled: L.current.readOnly,
							onClick: () => L.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), z = (0, X.useMemo)(() => Object.fromEntries([...ne].map((e) => [String(e), !0])), [ne]), ie = Bt({
		features: kn,
		data: x,
		columns: re,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: z,
			sorting: j,
			pagination: {
				pageIndex: P.page - 1,
				pageSize: O
			},
			columnVisibility: g.visibility
		},
		onColumnVisibilityChange: g.change,
		onSortingChange: (e) => {
			M(e), D(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			u?.onActivate();
			let t = typeof e == "function" ? e(z) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!_) return f.error ? /* @__PURE__ */ (0, Z.jsx)(R, {
		tone: "error",
		title: Y("follow:feedSources.loadFailed"),
		children: K(f.error)
	}) : /* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:feedSources.loading") });
	let ae = () => void h.run("check", (e) => De(e), () => void Nn()), oe = (e) => {
		u?.onActivate(), T((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, B = x.filter((e) => ne.has(e.id)), V = x.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": Y("follow:feedSources.listLabel"),
			className: we({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
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
								count: x.length,
								unread: Number(_.unread) || 0
							})
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								onClick: ae,
								disabled: e,
								...G(h.busy === "check"),
								children: Y("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Z.jsx)(fe, {
								preferences: g,
								label: Y("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Z.jsx)(b, {
								label: Y("follow:feedSources.title"),
								sorting: j,
								onChange: (e) => {
									M(e), D(1);
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
									label: An[e]
								}))
							})
						]
					})]
				}),
				V.length || h.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [V.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:feedSources.failedTitle", { count: V.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: V.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: Me(e, "last_error"),
								children: Y("follow:shared.labeled", {
									label: Pn(e),
									value: He(Me(e, "last_error")) || Y("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: Y("follow:feedSources.failedBody")
					}) : null, h.error ? /* @__PURE__ */ (0, Z.jsx)(S, { children: h.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsxs)(se, {
					visible: B.length > 0,
					label: Y("follow:feedSources.bulkActions"),
					count: Y("follow:feedSources.selectedCount", { count: B.length }),
					children: [
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => F.mutate({
								ids: B.map((e) => e.id),
								action: "enabled"
							}),
							children: Y("follow:shared.enable")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => F.mutate({
								ids: B.map((e) => e.id),
								action: "paused"
							}),
							children: Y("follow:shared.pause")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "danger",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => void Bn(B, () => F.mutateAsync({
								ids: B.map((e) => e.id),
								action: "remove"
							})),
							children: Y("follow:shared.remove")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => T(/* @__PURE__ */ new Set()),
							children: Y("follow:shared.clearSelection")
						})
					]
				}),
				x.length ? /* @__PURE__ */ (0, Z.jsx)(y, {
					follow: !0,
					preferences: g,
					onRowClick: (e) => oe(Number(e)),
					children: /* @__PURE__ */ (0, Z.jsxs)(de, {
						"aria-label": Y("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: j[0] ? {
							column: j[0].id,
							direction: j[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => ie.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [ie.getHeaderGroups()[0].headers.map((e) => {
							let t = Ye(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...g.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [jn.has(e.column.id) ? /* @__PURE__ */ (0, Z.jsx)(s, { children: t }) : /* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(pe, {
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
						})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: ie.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Ye(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Z.jsx)(ee, {
					icon: d,
					title: Y("follow:feedSources.empty"),
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						onClick: c,
						children: Y("follow:feedSources.add")
					}),
					children: Y("follow:feedSources.emptyHint")
				}),
				x.length ? /* @__PURE__ */ (0, Z.jsx)(v, {
					label: Y("follow:feedSources.footerLabel"),
					total: P.total,
					unit: Y("follow:feedSources.unit"),
					pagination: {
						pageIndex: P.page - 1,
						pageSize: O
					},
					onChange: (e) => {
						A(e.pageSize), D(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:feedSources.footerSummary", {
							unread: Number(_.unread) || 0,
							enabled: x.filter((e) => e.enabled).length,
							total: x.length
						})
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var Hn = Nt({
	rowPaginationFeature: Ct,
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	columnVisibilityFeature: Ne,
	paginatedRowModel: Jt()
}), Un = Object.fromEntries(Object.entries(f).map(([e, t]) => [t, e])), Wn = 740;
function Gn() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Wn));
		r.observe(e), n.current = r, t(e.clientWidth < Wn);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Kn = {
	select: Y("follow:shared.select"),
	author: Y("follow:shared.creator"),
	source: Y("follow:followFeed.filterKindSource"),
	provider: Y("follow:shared.site"),
	status: Y("follow:shared.status"),
	checked: Y("follow:sourceList.colLastChecked"),
	actions: Y("follow:shared.actions")
}, qn = Object.entries(Kn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Jn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			je(e, e.currentTarget) && n(!t);
		},
		children: [
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
					children: /* @__PURE__ */ (0, Z.jsx)(Gt, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(Kt, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(s, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(qt, { source: e }),
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
						children: /* @__PURE__ */ (0, Z.jsx)(Wt, { text: Me(e, "last_error") })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ae(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(ue, {
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
							leadingIcon: ze,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.label }),
							disabled: !e.enabled || r.readOnly,
							...G(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
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
function Yn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let u = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(et).length, p = J([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = Et(r, u);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Y("follow:sourceList.groupLabel", { name: t }),
		className: we({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Ut, {
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
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Gt, { provider: e.provider }, e.id)),
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
					children: [/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: ze,
						"aria-label": Y("follow:sourceList.checkGroup", { name: t }),
						disabled: !d.length || i.readOnly,
						...G(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							leadingIcon: it,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": Y(h.all ? "follow:sourceList.deselectGroup" : "follow:sourceList.selectGroup", { name: t }),
							onClick: () => o(!h.all),
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
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Jn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function Xn(e) {
	let { data: t, sort: c, dir: u, page: h, layout: _, pageSize: b, selected: x, readOnly: S, onSort: C, onPage: te, onLayout: ne, onPageSize: T, onSelected: E, toast: D, openFollow: O, onAdd: k } = e, A = t.sources, M = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), P = t.counts || {}, [F, I] = (0, X.useState)(/* @__PURE__ */ new Set()), [L, re] = Gn(), [ae, V] = (0, X.useState)(""), H = (0, X.useMemo)(() => xe(A, c, u, M), [
		A,
		c,
		u,
		M
	]), le = (0, X.useMemo)(() => Pt(H, c, u, M), [
		H,
		c,
		u,
		M
	]), { job: U, running: W, outcome: _e, start: ve } = Lt({
		queryKey: w,
		queryFn: ({ signal: e }) => We(e),
		start: (e) => jt(e),
		onError: (e) => V(K(e)),
		onFinish: (e) => {
			ht(), D(e.status === "failed" ? nt(e, "error") || Y("follow:followCheck.checkFailed") : Oe(e));
		}
	}), ye = (e) => {
		W || ve.isPending || (V(""), ve.mutate(e));
	}, be = (e, t) => E(Ft(x, [e], t)), Ce = (e, t) => E(Ft(x, e, t)), De = Rt({
		mutationFn: (e) => vt(e),
		onSuccess: (e, t) => {
			Be([t]), E(Ft(x, [t], !1)), D(Y("follow:sourceList.unfollowed"));
		},
		onError: (e) => V(K(e))
	}), je = Rt({
		mutationFn: (e) => kt(e.id, e.enabled),
		onSuccess: (e, t) => {
			dt(t.id, { enabled: t.enabled }), V("");
		},
		onError: (e) => V(K(e))
	}), Ne = (e) => void Fe({
		title: Y("follow:sourceList.unfollow"),
		body: Y("follow:sourceList.unfollowBody"),
		confirmLabel: Y("follow:sourceList.unfollow"),
		danger: !0,
		onConfirm: () => De.mutateAsync(e.id)
	}), Pe = Rt({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await vt(t) : await kt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Be(e.done);
			else for (let t of e.done) dt(t, { enabled: e.action === "enabled" });
			E(Ft(x, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				V(Y("follow:sourceList.bulkPartialFail", {
					failed: t.length,
					total: e.ids.length,
					error: K(t[0]?.error)
				}));
				return;
			}
			V("");
			let n = e.action === "remove" ? "follow:sourceList.bulkDeleted" : e.action === "enabled" ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused";
			D(Y(n, { count: e.done.length }));
		},
		onError: (e) => V(K(e))
	}), Le = Rt({
		mutationFn: ct,
		onSuccess: (e) => {
			ht(), e.failed ? V(Y("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: K(e.error)
			})) : (V(""), D(Y("follow:sourceList.bulkMarked", { count: e.total })));
		},
		onError: (e) => V(K(e))
	}), Re = (e, t) => je.mutate({
		id: e.id,
		enabled: t
	}), Ue = (0, X.useRef)({
		check: ye,
		toggle: Re,
		remove: Ne,
		busy: !1,
		readOnly: S
	});
	Ue.current = {
		check: ye,
		toggle: Re,
		remove: Ne,
		busy: W || ve.isPending,
		readOnly: S
	};
	let q = Ue.current, Ge = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => Kn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(me, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(Ut, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(Kt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Wt, { text: Me(e.row.original.source, "last_error") }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Gt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(qt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ae(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(ue, {
							"aria-label": Y("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: q.readOnly,
							onChange: (t) => Ue.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || q.readOnly,
							...G(q.busy),
							onClick: () => Ue.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": Y("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: q.readOnly,
							onClick: () => Ue.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [q]), Ke = (0, X.useMemo)(() => {
		let e = Un[c];
		return e ? [{
			id: e,
			desc: u === "desc"
		}] : [];
	}, [c, u]), qe = (0, X.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), Je = _ === "table", Xe = Vt("follow-sources", qn), Ze = ut(Je ? le.length : H.length, b, h), Qe = Bt({
		features: Hn,
		data: le,
		columns: Ge,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Ke,
			rowSelection: qe,
			pagination: {
				pageIndex: Ze.page - 1,
				pageSize: b
			},
			columnVisibility: Xe.visibility
		},
		onColumnVisibilityChange: Xe.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Ke) : e)[0];
			if (!t) return;
			let n = f[t.id];
			n && C(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(qe) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Ze.page - 1,
				pageSize: b
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === b ? n.pageIndex !== t.pageIndex && te(n.pageIndex + 1) : T(n.pageSize);
		}
	}), $e = Qe.getRowModel().rows, et = Je ? $e.map((e) => e.original.source.id) : H.slice(Ze.start, Ze.end).flatMap((e) => e.map((e) => e.id)), tt = Et(x, et), J = [...x], rt = Ee(_e), it = A.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), at = Te(_e), ot = H.length > 0 && F.size >= H.length;
	return A.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
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
						children: P.new ? Y("follow:sourceList.sourceCountUnseen", {
							count: A.length,
							unseen: Number(P.new) || 0
						}) : Y("follow:sourceList.sourceCount", { count: A.length })
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						it.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							disabled: S,
							...G(q.busy),
							onClick: () => ye(it),
							children: Y("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							leadingIcon: ze,
							disabled: S,
							"aria-label": Y("follow:sourceList.checkAll"),
							iconOnly: re,
							...G(q.busy),
							onClick: () => ye([]),
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
										leadingIcon: ge,
										"aria-label": j[0][1],
										"aria-pressed": !Je,
										onClick: () => ne("default")
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ve,
										"aria-label": j[1][1],
										"aria-pressed": Je,
										onClick: () => ne("table")
									})]
								}),
								Je ? /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: Xe,
									label: Y("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(oe, {
										"aria-label": Y("follow:sourceList.sortLabel"),
										prefix: Y("follow:shared.sort"),
										selectedKey: c,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											C(t, z[t]);
										},
										children: ie.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(B, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: ce,
										"data-icon-state": u === "asc" ? "a" : "b",
										"aria-label": At(c, u),
										onClick: () => C(c, u === "asc" ? "desc" : "asc")
									})]
								}),
								Je ? null : /* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "secondary",
									iconOnly: re,
									leadingIcon: g,
									"aria-expanded": !ot,
									"aria-label": Y(ot ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => I(ot ? /* @__PURE__ */ new Set() : new Set(H.map((e) => String(e[0].author_key || e[0].id)))),
									children: Y(ot ? "follow:shared.expandAll" : "follow:shared.collapseAll")
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
					W ? /* @__PURE__ */ (0, Z.jsx)(he, {
						embedded: !0,
						label: nt(U) || (U?.total ? Y(U.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: U.checked || 0,
							count: U.total
						}) : Y("follow:sourceList.preparingCheck")),
						value: U?.checked,
						total: U?.total
					}) : null,
					ae ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:shared.actionFailed"),
						children: ae
					}) : null,
					!W && _e?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "neutral",
						title: Y("follow:followFeed.checkResults"),
						children: ke(_e)
					}) : null,
					rt.length ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "error",
						title: Y("follow:sourceList.failedTitle", { count: rt.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: rt.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: Y("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: He(e.error || "") || Y("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: Y("follow:sourceList.failedBody")
					}) : null,
					at ? /* @__PURE__ */ (0, Z.jsx)(R, {
						tone: "warning",
						children: Y("follow:sourceList.evidenceGap", { error: at })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(se, {
				label: Y("follow:sourceList.bulkActions"),
				visible: J.length > 0,
				count: Y("follow:sourceList.selectedCount", { count: J.length }),
				children: [
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(q.busy),
						onClick: () => ye(J),
						children: Y("follow:sourceList.checkSelected")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Pe.isPending),
						onClick: () => Pe.mutate({
							ids: J,
							action: "enabled"
						}),
						children: Y("follow:shared.enable")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Pe.isPending),
						onClick: () => Pe.mutate({
							ids: J,
							action: "paused"
						}),
						children: Y("follow:shared.pause")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "danger",
						size: "small",
						disabled: S,
						...G(Pe.isPending),
						onClick: () => void Fe({
							title: Y("follow:sourceList.deleteManyTitle", { count: J.length }),
							body: Y("follow:sourceList.deleteManyBody"),
							confirmLabel: Y("follow:sourceList.deleteSelected"),
							danger: !0,
							onConfirm: () => Pe.mutateAsync({
								ids: J,
								action: "remove"
							})
						}),
						children: Y("follow:shared.delete")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "ghost",
						size: "small",
						onClick: () => E(/* @__PURE__ */ new Set()),
						children: Y("follow:shared.clearSelection")
					})
				]
			}),
			Je ? /* @__PURE__ */ (0, Z.jsx)(y, {
				follow: !0,
				preferences: Xe,
				onRowClick: (e) => be(Number(e), !x.has(Number(e))),
				children: /* @__PURE__ */ (0, Z.jsxs)(de, {
					"aria-label": Y("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: Ke[0] ? {
						column: Ke[0].id,
						direction: Ke[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Qe.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [Qe.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in f, n = Ye(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Xe.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(m, {})
								})]
							}) : /* @__PURE__ */ (0, Z.jsx)(s, { children: n }), /* @__PURE__ */ (0, Z.jsx)(pe, {
								preferences: Xe,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(r, {
						id: "remaining-space",
						"aria-label": Y("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: Xe.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
						renderEmptyState: () => Y("follow:sourceList.pageEmpty"),
						children: $e.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Ye(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(p, {
				isSelected: tt.all,
				isIndeterminate: tt.some,
				onChange: (e) => Ce(et, e),
				"aria-label": Y("follow:sourceList.selectPage"),
				children: Y("follow:sourceList.selectPageShort")
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col gap-3",
				children: H.slice(Ze.start, Ze.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Z.jsx)(Yn, {
						group: e,
						name: Se(e, M),
						handlers: q,
						selected: x,
						open: !F.has(t),
						onOpen: (e) => {
							let n = new Set(F);
							e ? n.delete(t) : n.add(t), I(n);
						},
						onToggleGroup: (t) => Ce(e.map((e) => e.id), t),
						onToggle: be
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Z.jsx)(v, {
				label: Y("follow:followManageNav.list"),
				total: Ze.total,
				pagination: {
					pageIndex: Ze.page - 1,
					pageSize: b
				},
				unit: Y(Je ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: Y(Je ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === b ? Qe.setPageIndex(e.pageIndex) : Qe.setPageSize(e.pageSize);
				}
			}),
			P.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:sourceList.markSummary", {
							unwatched: Number(P.new) || 0,
							watched: Number(P.seen) || 0,
							saved: Number(P.saved) || 0,
							ignored: Number(P.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: O,
						children: Y("follow:sourceList.seeUpdates")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Le.isPending),
						onClick: () => void Fe({
							title: Y("follow:followDetail.markSeen"),
							body: Y("follow:sourceList.markWatchedBody"),
							confirmLabel: Y("follow:followDetail.markSeen"),
							onConfirm: () => Le.mutateAsync("seen")
						}),
						children: Y("follow:sourceList.markAllWatched")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Le.isPending),
						onClick: () => void Fe({
							title: Y("follow:sourceList.markIgnored"),
							body: Y("follow:sourceList.markIgnoredBody"),
							confirmLabel: Y("follow:sourceList.markIgnored"),
							onConfirm: () => Le.mutateAsync("ignored")
						}),
						children: Y("follow:sourceList.ignoreAll")
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Z.jsx)(ee, {
		icon: d,
		title: Y("follow:sourceList.empty"),
		actions: /* @__PURE__ */ (0, Z.jsx)(l, {
			variant: "primary",
			size: "small",
			onClick: k,
			children: Y("follow:followFeed.addFollow")
		}),
		children: Y("follow:sourceList.emptyHint")
	});
}
// node_modules/skullet/dist/index.mjs
var Zn = "skullet-reveal", Qn = "skullet-pane", $n = "skullet-loading", er = "skullet-ghost", tr = "skullet-snapshot", nr = "skullet-layer", rr = "skullet-rect", ir = "skullet-bar", ar = "skullet-inactive", or = "skullet-exiting", sr = "skullet-covered", cr = "skullet-own", lr = "skullet-block", ur = Symbol.for("skullet.ghost"), dr = Symbol.for("skullet.uncover"), fr = "skullet-status", pr = "skullet-xray", mr = "var(--skullet-base, rgb(128 128 128 / 0.2))", hr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", gr = 280, _r = 1e4, vr = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, yr = [
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
], br = [
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
], xr = br.join(", "), Sr = `
[${Zn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Qn}] {
  display: block;
}

[${$n}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${ar}] {
  display: none !important;
}

[${nr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${ir}] {
  display: block;
  background-color: ${mr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${$n}]) to ([${cr}], [${nr}]) {
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
  :scope :is(${yr.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${xr}, [${sr}], [${lr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${mr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${xr}, [${lr}]):not(svg *) {
      visibility: visible !important;
      background: ${mr} !important;
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
[${fr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${pr}] [${$n}] [${er}],
[${pr}] [${$n}] [${er}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, Cr = null, wr = 0, Tr;
function Er() {
	wr++, !Cr && (Tr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !Tr && (Cr = document.createElement("style"), Cr.dataset.skullet = "true", Cr.textContent = Sr, document.head.appendChild(Cr)));
}
function Dr() {
	wr--, !(wr > 0 || !Cr) && (Cr.remove(), Cr = null);
}
var Or = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", kr = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...kr });
function Ar(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? kr[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var jr = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function Mr({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = Ar(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${jr(o)} }`), a === "system") {
		let t = Ar({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${jr(t)} } }`);
	}
	return s.join("\n");
}
var Nr = /* @__PURE__ */ new Map(), Pr, Q = null, Fr = 0;
function Ir() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Lr = () => Pr ??= typeof window < "u" && Ir(), Rr = (e) => Lr() || !!e?.closest("[skullet-debug]");
function zr(e) {
	Pr = e, e ? Wr() : Gr();
}
function Br(e, t) {
	!e || !Rr(e) || (Nr.set(e, {
		state: "loading",
		source: t
	}), Hr());
}
function Vr(e, t) {
	!e || !Rr(e) || (Nr.set(e, {
		...Nr.get(e),
		state: "shown",
		moved: t
	}), Hr());
}
function Hr() {
	Wr(), cancelAnimationFrame(Fr), qr();
}
var Ur = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Wr() {
	if (typeof document > "u") return;
	if (!Q?.isConnected) {
		Q = document.createElement("div"), Q.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Q.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Ur}</style><div class="boxes"></div>`, document.body.append(Q);
	}
	let e = Q.shadowRoot;
	if (Pr && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(pr, e.target.checked);
		}), e.append(t);
	}
	Fr ||= requestAnimationFrame(qr);
}
function Gr() {
	Q?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(pr), ![...Nr.keys()].some((e) => Rr(e)) && (cancelAnimationFrame(Fr), Fr = 0, Q?.remove(), Q = null);
}
var Kr = ({ state: e, source: t, moved: n }) => {
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
function qr() {
	if (Fr = 0, !Q?.shadowRoot) return;
	let e = Q.shadowRoot.querySelector(".boxes");
	for (let e of Nr.keys()) e.isConnected && Rr(e) || Nr.delete(e);
	let t = [...Nr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Kr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Pr || Nr.size) && (Fr = requestAnimationFrame(qr));
}
var Jr, Yr = () => Jr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Xr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Zr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Qr = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function $r(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function ei(e, t, n) {
	let r = Xr(e, t), i = $r(n, t), a = e ? Zr(e) : [], o = Zr(t), s = Zr(r).map((t, n) => Qr(t, o[n]) ? i[n] : e && Qr(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function ti(e, t, n, r) {
	if (!e) return n;
	let i = Zr(e), a = Zr(t).map((t, n) => e.corners[n] > 0 && Qr(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = $r(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var ni = (e, t) => {
	let n = Xr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, ri = {
	top: "ascender",
	bottom: "descender"
}, ii = /* @__PURE__ */ new Map(), ai = (e) => [...e.getClientRects?.() ?? []];
function oi(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ii.has(t)) return ii.get(t);
	let n = Yr(), r = null;
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
	return ii.set(t, r), r;
}
var si = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, ci = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function li(e, t, n) {
	let r = oi(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = ci(t, "--skullet-text-top", Object.keys(si), ri.top), a = ci(t, "--skullet-text-bottom", ["baseline", "descender"], ri.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[si[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var ui = new Set(br), di = new Set(yr), fi = .4, pi = /[,/]\s*0\)$/, mi = (e, t) => e !== "" && e !== t, hi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], gi = (e) => hi.every((t) => mi(e[`border${t}Style`], "none") && mi(e[`border${t}Width`], "0px")), _i = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, vi = (e) => mi(e, "none") && !e.split(/,(?![^(]*\))/).every(_i), yi = (e) => mi(e.backgroundColor, "transparent") && !pi.test(e.backgroundColor) || mi(e.backgroundImage, "none") || vi(e.boxShadow) || gi(e), bi = (e) => ui.has(e.localName), xi = (e) => di.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), Si = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(ai(n).filter((e) => e.width || e.height));
		} else xi(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * fi, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, Ci = (e, t) => e.hasAttribute("skullet-block") || bi(e) || yi(t) && Si(e) <= 1;
function wi(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function Ti(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * fi;
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
function Ei(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = ni(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...li(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of ai(d)) f(e, r, t);
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
			if (Ci(e, r)) {
				let n = ni(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: ti(t, n, wi(e, r), r)
					});
				}
				bi(e) || u.add(e);
				continue;
			}
			if (xi(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? ei(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...Ti(l)];
	for (let t of e.querySelectorAll(`[${sr}]`)) u.has(t) || t.removeAttribute(sr);
	for (let e of u) e.hasAttribute(sr) || e.setAttribute(sr, "");
	return [...c, ...Ti(l)];
}
var Di = (e) => typeof matchMedia < "u" && matchMedia(e).matches, Oi = () => typeof Element < "u" && typeof Element.prototype.animate == "function", ki = () => !Oi() || Di("(prefers-reduced-motion: reduce)"), Ai = () => Di("(prefers-reduced-transparency: reduce)"), ji = (e) => e.getAnimations?.() ?? [], Mi = .7, Ni = 1280, Pi = 320, Fi = 2.5, Ii = .45, Li = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Ri(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Li, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: vr[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var zi = 20, Bi = Math.sin(zi * Math.PI / 180), Vi = Math.cos(zi * Math.PI / 180), Hi = Bi / Vi, Ui = Vi, Wi = `${90 + zi}deg`, Gi = .85, $ = 12, Ki = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function qi(e) {
	let t = e * Fi, n = (t, n) => `color-mix(in srgb, ${hr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Gi, Ki(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Gi + e / $ * (1 - Gi), Ki(1 - e / $)));
	return {
		width: t / Vi,
		image: `repeating-linear-gradient(${Wi}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Ji(e, t, n = Ri(e)) {
	for (let t of ji(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", ki() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: Ii,
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
	}, { width: s, image: c } = qi(Math.min(Math.max(o.width * .4, 80), Pi)), l = a - o.left + (i.top - o.top) * Hi, u = n.duration * Mi / (Ni + Pi);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Yi(e) {
	if (ki()) return null;
	let t = Ri(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * Mi / (Ni + Pi);
}
var Xi = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Zi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Qi(e, t) {
	let n = Xi(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Ri(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${mr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Ji(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var $i = 120, ea = 72, ta = 3, na = 60, ra = 150, ia = 400, aa = 1.5, oa = 1e3, sa = 1e3, ca = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), la = -1 / 0, ua = !1;
function da() {
	if (!(ua || typeof addEventListener > "u")) {
		ua = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => la = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var fa = /* @__PURE__ */ new WeakMap();
function pa(e, { served: t, refetch: n }) {
	da();
	let r = fa.get(e)?.since ?? performance.now();
	fa.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function ma(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function ha(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var ga = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function _a(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${or}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var va = (e, t) => Math.min(Math.max(e, 0), t), ya = -1 / 0;
function ba(e, t, n, r, i) {
	let a = performance.now();
	a - ya > ra && (ya = a);
	let o = a - ya, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of ma(e)) {
		let n = ha(t, e), r = c.get(n);
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
		return t === null ? null : va(t, oa) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => ga(t.rect, e));
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
function xa(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) ca.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function Sa(e, t, n, r = () => {}) {
	let i = fa.get(t);
	fa.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - la < ia,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: ma(e).length
			})
		};
	}
	let o = va(a.duration ?? 200, sa);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, oa)
	}, !o) return { kind: "instant" };
	let s = xa(a.enter, r);
	if (a.wipe) {
		let e = _a(t);
		if (e.width * e.height <= innerWidth * innerHeight * aa) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return ba(e, t, a.order, {
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
var Ca = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return va(n * .8 + r * .2, 1) * 320;
}, wa = (e) => e.bottom > 0 && e.top < innerHeight, Ta = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return wa(e) ? 0 : null;
	if (!wa(t)) return null;
	let i = va(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? na : 0);
}, Ea = { duration: 0 }, Da = { order: "together" }, Oa = { order: Ca }, ka = (e) => e.input || e.waited < 150 ? Ea : e.refetch ? {
	order: "together",
	duration: $i
} : null, Aa = (e) => e.height < ea || e.pieces <= ta ? Da : { order: Ta }, ja = {
	hold: 150,
	choose: (e) => ka(e) ?? Aa(e)
}, Ma = new Set(br), Na = "script, noscript, template, base, meta, link", Pa = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Fa = /* @__PURE__ */ new Set([
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
	sr
]), Ia = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function La(e, t) {
	let n = Ia(t.data);
	t.data = n;
	let r = e.parentElement, i = Yr();
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
function Ra(e) {
	for (let t of e.querySelectorAll(Na)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Pa.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Fa.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function za(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (Ma.has(e.localName) || Pa.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) La(e, t);
	return Ra(n), n.innerHTML;
}
function Ba(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, Ra(t.content), t.content;
}
var Va = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${Va(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Ha = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Ua(e) {
	let t = Va(e, 2);
	return t ? `${location.pathname}|${Ha(t)}` : null;
}
var Wa = !1;
try {
	Wa = !1;
} catch {
	Wa = !1;
}
var Ga = Wa, Ka = /* @__PURE__ */ new Set();
function qa(e, t) {
	!Ga || Ka.has(e) || (Ka.add(e), console.warn(`[skullet] ${t}`));
}
var Ja = /^(https?:|\/|data:|blob:)/;
function Ya(e) {
	return typeof e == "string" ? Ja.test(e) ? "" : Ia(e) : Array.isArray(e) ? e.map(Ya) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ya(t)])) : e;
}
var Xa = "skullet:shapes", Za = 2, Qa = 50, $a = 2e4, eo = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Map();
function no(e, t) {
	return to.has(e) || to.set(e, /* @__PURE__ */ new Set()), to.get(e).add(t), () => to.get(e)?.delete(t);
}
function ro(e) {
	for (let t of to.get(e) ?? []) t();
}
function io() {
	try {
		let e = JSON.parse(localStorage.getItem(Xa) ?? "null");
		return e?.v === Za ? e.shapes : {};
	} catch {
		return {};
	}
}
function ao(e) {
	try {
		localStorage.setItem(Xa, JSON.stringify({
			v: Za,
			shapes: e
		}));
	} catch {}
}
function oo(e, t) {
	eo.set(e, za(t, !1));
	let n = za(t, !0);
	if (n.length > $a) return;
	let r = io();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Qa)) delete r[e];
	ao(r);
}
function so(e) {
	return eo.get(e) ?? io()[e] ?? null;
}
var co = [
	100,
	90,
	60
].map((e) => `<div ${lr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), lo = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${$n}]`)), uo = /* @__PURE__ */ new WeakMap();
function fo(e) {
	if (!e) return;
	let t = uo.get(e);
	return uo.delete(e), t;
}
function po(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var mo = (e) => !!e.firstElementChild || !!e.textContent?.trim(), ho = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Er(), e[ur] = !0, e.setAttribute($n, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = po(e, er), this.snapshot = po(e, tr), this.layer = po(e, nr), this.hadContent = mo(this.ghost);
		let n = e.closest(`[${Zn}]`);
		n && pa(n, {
			served: lo.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[dr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${or}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = mo(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || lo.has(this.root), r = !!this.ghost.querySelector(`[${cr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Ua(this.ghost);
			n && (ro(n), t = so(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Ba(t)) : e === "fallback" ? (this.snapshot.innerHTML = co, qa(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(ar, e !== "ghost"), this.snapshot.toggleAttribute(ar, e === "ghost"), this.source = e, Br(this.root.closest(`[${Zn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : lo.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Qi(this.layer, Ei(e, this.layer));
		let t = this.root.closest(`[${Zn}]`);
		t && uo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Dr();
	}
}, go = 250, _o = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Ua(e), this.untrack = this.key ? no(this.key, () => this.save()) : () => {}, (Ga || Rr(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), go);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && oo(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Zn}]`), o = fo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && qa(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Ya(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Vr(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? qa(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : qa(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, vo = () => {}, yo = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, bo = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !yo(e));
function xo(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(vo, vo), new Promise((e) => setTimeout(e, _r))]);
}
var So = 360, Co = 2, wo = 600, To = 40, Eo = To / Ui, Do = 320, Oo = 120, ko = .45, Ao = (e) => e.left + e.top * Hi, jo = (e) => e.width + e.height * Hi, Mo = (e, t) => Ao(t) - Eo + (jo(t) + 2 * Eo) * e, No = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function Po(e) {
	let t = e.querySelector(`:scope > [${or}] [${nr}]`), n = t && Yi(t);
	if (!n) return null;
	let r = _a(e);
	if (r.width * r.height > innerWidth * innerHeight * aa) return null;
	let i = Ao(r), a = i + jo(r), o = performance.now(), s = o - No.start;
	s <= ra && (i - No.origin) / No.speed >= s && (a - No.origin) / No.speed - s <= wo || (No = {
		start: o,
		origin: i,
		speed: Math.max(Co / n, (a - i) / So)
	});
	let { start: c, origin: l, speed: u } = No;
	return {
		delay: (i - Eo - l) / u - (o - c),
		duration: (a - i + 2 * Eo) / u
	};
}
var Fo = (e) => (t, { rect: n, reveal: r }) => {
	let i = (Mo(t, r) - Ao(n)) * Ui;
	return `linear-gradient(${Wi}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - Ki(n / $) : Ki(n / $), a = -To + 2 * To * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Io = "http://www.w3.org/2000/svg", Lo = null, Ro = 0;
function zo() {
	return Lo?.isConnected || (Lo = document.createElementNS(Io, "svg"), Lo.setAttribute("aria-hidden", "true"), Lo.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Lo)), Lo;
}
var Bo = (e, t) => {
	let n = document.createElementNS(Io, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Vo = {
	mask: Fo(!0),
	out: Fo(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (Ai()) return;
		let i = Ao(t), a = jo(t), o = Do / 2 / Ui, s = () => Mo(r(), n) - i - Oo / Ui;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Hi, l = c / 2, u = t.height / 2, d = Do / 2 * Ui, f = Do / 2 * Hi * Ui, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${Ki(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Ro}`, _ = Bo("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Bo("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Bo(`feFunc${e}`, {
			type: "linear",
			slope: 1 - ko,
			intercept: ko
		}));
		let y = Bo("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Bo("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Bo("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), zo().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Hi) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Ho = {
	together: Da,
	sequence: Oa,
	smart: ja,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = ka(e);
			if (t) return t;
			let n = Po(e.reveal);
			return n ? {
				wipe: Vo,
				...n
			} : Aa(e);
		}
	}
}, Uo = (e = "smart") => typeof e == "string" ? Ho[e] : e, Wo = () => {}, Go = (e) => e.finished.then(Wo, Wo), Ko = /* @__PURE__ */ new WeakMap();
function qo(e, t = 0, n = 200, r = 0, i) {
	return ki() ? Promise.resolve() : Go(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Jo = (e) => !!e.querySelector(`[${nr}], [${er}], :scope > [${cr}]`), Yo = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Xo = /* @__PURE__ */ new WeakMap();
function Zo(e) {
	for (let t of Xo.get(e) ?? []) t.remove();
	Xo.delete(e);
}
function Qo(e, t) {
	let n = bo(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Jo(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${or}] [${nr}]`)].flatMap(Zi), a = Xo.get(t) ?? /* @__PURE__ */ new Set();
			Xo.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Yo(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(rr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: mr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Ji(c), xo(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", qo(e), ki()) return c.remove();
						Go(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function $o(e, t) {
	return ki() ? Promise.resolve() : Promise.all(ma(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return qo(e, n, t.duration, 0, t.enter);
	})).then(Wo);
}
function es(e) {
	for (let t of e.querySelectorAll(`:scope > [${or}]`)) {
		for (let e of ji(t)) e.finish();
		t.style.opacity = "0";
	}
}
function ts(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${or}]`)) if (!Jo(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of ji(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function ns(e, t = "smart", { initial: n = !1 } = {}) {
	let r = rs.get(e);
	return r || (r = is(e, t, n), rs.set(e, r)), r;
}
var rs = /* @__PURE__ */ new WeakMap();
function is(e, t, n) {
	let r = e.parentElement, i = Uo(t);
	if (Jo(e)) {
		r && Zo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Ko.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : qo(e, t)) : (r && Ko.delete(r), n ? Promise.resolve() : qo(e));
	}
	if (n || !r) return Promise.resolve();
	let a = ts(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Ko.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), qo(e, 0, t, a);
	}
	Qo(e, r);
	let o = Sa(e, r, i, (e) => qa(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Ko.set(r, o), o.kind === "instant" ? (es(r), Promise.resolve()) : o.kind === "sequence" ? $o(e, o) : o.kind === "wipe" ? _s(e, o, !0) : qo(e, o.delay, o.duration, 0, o.enter);
}
function as(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function os(e, t = as(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(or, ""), t;
}
var ss = /* @__PURE__ */ new WeakMap();
function cs(e, t) {
	let n = e.querySelector(`:scope > [${Qn}]:not([${or}])`);
	if (!n) return;
	let r = ss.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && ls(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: gr,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	ss.set(e, u), Go(l).then(() => {
		ss.get(e) === u && ls(e, u);
	});
}
function ls(e, { overflow: t, boxSizing: n }) {
	ss.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function us(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of ji(e)) t.cancel();
	gs(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Jo(e) && Zo(i);
	let a = os(e, t), o = (t, n) => Oi() ? Go(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Ko.get(i), n = ki() || t?.kind === "instant";
		if (i && !n && cs(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Jo(e) ? ds(e, t) : t?.kind === "wipe" && Jo(e) ? _s(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function ds(e, t) {
	for (let t of e.querySelectorAll(`[${er}], [${tr}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${er}] [${cr}]`)].filter((e) => !e.parentElement?.closest(`[${cr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${nr}]`)].flatMap(Zi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Go(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Wo);
}
var fs = 100, ps = /* @__PURE__ */ new WeakMap();
function ms(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function hs(e, t) {
	ms(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function gs(e) {
	ps.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function _s(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? ms(e, i(t, r)) : a ? ms(e, a(t, r)) : hs(e, i(t, r));
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
			if (e - i > fs && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), ps.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + fs);
		ps.set(e, l), c();
	}).then((t) => {
		if (gs(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? qo(e, 0, r, t) : Go(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var vs = X.createContext({}), ys = X.createContext(null), bs = () => X.useContext(vs), xs = () => X.useContext(ys), Ss = () => bs().reveal;
function Cs({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = Mr({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && zr(n);
	}, [n]), (0, Z.jsx)(vs.Provider, {
		value: t,
		children: (0, Z.jsxs)(ys.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var ws = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Ts = () => X.useInsertionEffect(() => (Er(), Dr), []), Es = Number("19.3.1".split(".")[0]) >= 19, Ds = () => {
	let { nonce: e } = bs();
	return Es ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: Sr
	}) : null;
}, Os = Es ? { inert: !0 } : { inert: "" }, ks = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[cr]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, ks(e.props.children)) : e;
}), As = () => () => {}, js = () => X.useSyncExternalStore(As, () => !1, () => !0), Ms = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = bs(), s = xs(), c = js(), l = Or;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), ws(() => {
		if (!a.current) return;
		let e = new ho(a.current, {
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
			[$n]: "",
			"aria-hidden": !0,
			...Os,
			children: [
				(0, Z.jsx)("div", {
					[er]: "",
					children: ks(e)
				}),
				(0, Z.jsx)("div", { [tr]: "" }),
				(0, Z.jsx)("div", { [nr]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, Ns = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = Ss();
	return ws(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), ns(c.current, l, { initial: !r }).then(s), o && (e.memory = new _o(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), ws(() => {
		!i || !c.current || us(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Qn]: "",
		children: e
	});
}, Ps = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = as(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Fs(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	Ts();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	ws(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[cr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(Ms, {
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
	}), [x, ee] = X.useState([]), S = X.useRef(/* @__PURE__ */ new Map()).current, C = X.useRef(_);
	if (ws(() => {
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
	let te = X.useRef(e.onReveal);
	ws(() => {
		te.current = e.onReveal;
	});
	let w = y.key === "content" && y.from === "skeleton" ? () => te.current?.() : void 0, ne = (e) => ee((t) => t.filter((t) => t.id !== e)), T = [...x.map((e) => (0, Z.jsx)(Ns, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => ne(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(Ns, {
		id: y.id,
		registry: S,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: w,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[Zn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Ds, {}), (0, Z.jsx)(Ps, {
			exiting: x.map((e) => e.id),
			registry: S,
			children: T
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Is = {
	creators: [Y("follow:followOverview.creators"), Y("follow:followOverview.creatorUnit")],
	enabled: [Y("follow:followOverview.enabledSources"), ""],
	failed: [Y("follow:followCheck.checkFailed"), Y("follow:followOverview.sourceUnit")],
	updates: [Y("follow:followOverview.unwatchedUpdates"), Y("follow:followOverview.itemUnit")],
	subscriptions: [Y("follow:feedSources.footerLabel"), Y("follow:followOverview.actressUnit")],
	releases: [Y("follow:followOverview.unwatchedReleases"), Y("follow:followOverview.itemUnit")]
}, Ls = {
	duration: 0,
	delay: 0,
	hold: 150
}, Rs;
function zs() {
	return Rs || (Rs = new CSSStyleSheet(), Rs.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Rs;
}
function Bs({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Vs({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Is[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = zs();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: we({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Z.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ (0, Z.jsx)("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: Y("follow:shared.notFound")
		}) : /* @__PURE__ */ (0, Z.jsx)(Cs, {
			reveal: Ls,
			children: /* @__PURE__ */ (0, Z.jsx)(Fs, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: Y("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(Bs, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Hs = (e) => E.some(([t]) => t === e);
function Us(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Hs(e.tab) ? e.tab : "list"), [d, f] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [p, m] = (0, X.useState)(() => St(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => St(e.sort, e.dir).dir), [_, v] = (0, X.useState)(tt(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(lt(e.pageSize)), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, w] = (0, X.useState)(/* @__PURE__ */ new Set()), D = zt({
		queryKey: T,
		queryFn: ({ signal: e }) => Ke(e)
	}), O = zt({
		queryKey: ne,
		queryFn: ({ signal: e }) => q(e)
	}), k = zt({
		queryKey: te,
		queryFn: ({ signal: e }) => Ge(e)
	}), A = D.data || { sources: [] }, j = O.data || {
		root: "",
		providers: []
	}, M = A.sources;
	(0, X.useEffect)(() => {
		ee((e) => {
			let t = rt(e, M);
			return t.size === e.size ? e : t;
		});
	}, [M]);
	let N = (e) => {
		let n = e.sort ?? p, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? d,
			sort: n === "checked" ? "" : n,
			dir: r === z[n] ? "" : r
		});
	}, P = $e(M), F = M.filter(et).length, I = M.filter((e) => e.enabled).length, L = (j.providers || []).filter((e) => e.requirement === "required" && !Le(e)).length, re = new Set((k.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(Ht, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(R, {
			tone: "warning",
			title: Y("follow:followManagePage.readOnly"),
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(C, {
					href: s,
					children: Y("follow:followManagePage.goToPrimary")
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: ae,
			"aria-label": Y("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
					field: "creators",
					figure: D.data ? P.length : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
					field: "enabled",
					figure: D.data ? I : void 0,
					total: M.length,
					failed: D.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
					field: "failed",
					figure: D.data ? F : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
					field: "updates",
					figure: D.data ? A.counts?.new || 0 : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
					field: "subscriptions",
					figure: k.data ? re : void 0,
					failed: k.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Vs, {
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
					children: /* @__PURE__ */ (0, Z.jsx)(le, {
						group: "follow",
						label: Y("follow:followManagePage.sectionTabs"),
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: E.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							ee(/* @__PURE__ */ new Set()), w(/* @__PURE__ */ new Set()), l(e), N({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(Vn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), N({ tab: "add" });
						},
						selection: {
							ids: S,
							onChange: w,
							onActivate: () => ee(/* @__PURE__ */ new Set())
						}
					}), D.data ? /* @__PURE__ */ (0, Z.jsx)(Xn, {
						data: A,
						sort: p,
						dir: h,
						page: d,
						layout: _,
						pageSize: y,
						selected: x,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), N({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), f(1), N({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							f(e), N({ page: e });
						},
						onSelected: (e) => {
							ee(e), w(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), f(1), n({ layout: e }), N({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), f(1), n({ pageSize: e }), N({ page: 1 });
						}
					}) : D.isError ? /* @__PURE__ */ (0, Z.jsx)(R, {
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
						O.data && D.data ? /* @__PURE__ */ (0, Z.jsx)(un, {
							data: A,
							credentials: j,
							readOnly: a,
							toast: r
						}) : O.isError || D.isError ? /* @__PURE__ */ (0, Z.jsx)(R, {
							tone: "error",
							children: Y("follow:followManagePage.credentialsFailed")
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(hn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								k.refetch(), l("list"), N({ tab: "list" });
							}
						}),
						D.data ? /* @__PURE__ */ (0, Z.jsx)(On, {
							groups: A.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: A.alias_suggestions || [],
							sources: A.sources
						}) : null
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, Z.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Z.jsx)(U, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsx)(u, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: L ? Y("follow:followManagePage.feedSettingsPending", { count: L }) : Y("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { Us as FollowManagePage };

//# debugId=3e2393a7-010a-4e8b-9322-a3f12cdde8e5