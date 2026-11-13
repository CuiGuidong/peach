(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bbb2a66f-9c83-421a-99d5-279c8feb4986", e._sentryDebugIdIdentifier = "sentry-dbid-bbb2a66f-9c83-421a-99d5-279c8feb4986");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, Button as l, ButtonLink as u, Bx as d, COLUMN_SORT as f, Checkbox as p, ChevronSortDown as m, Chip as h, CollapseChevron as g, CollapseRegion as _, DataTableFooter as v, DataTableFrame as y, DataTableSort as b, EmptyFocusButton as x, EmptyState as ee, ErrorText as S, ExternalLink as C, FEEDS_KEY as te, FOLLOW_CHECK_KEY as w, FOLLOW_CHECK_TASK as T, FOLLOW_CREDENTIALS_KEY as E, FOLLOW_MANAGE_KEY as D, FOLLOW_MANAGE_NAV as O, FOLLOW_RESOLVE_KEY as k, FieldLabel as A, Help as j, Input as M, LAYOUTS as N, LoadingDots as P, M6 as F, MENU_ITEM as I, MENU_ITEM_INTERACTIVE as L, MENU_POPOVER_SURFACE as R, ModalFrame as ne, Note as z, P7 as re, SORT_DEFAULT_DIR as ie, SORT_OPTIONS as ae, STAT_STRIP_SIX as B, Select as V, SelectItem as H, SelectionDock as oe, SelectionPopover as U, SiteLabel as W, SortDirectionIcon as se, SortableBoardTabs as ce, Switch as G, Table as le, TableColumnControls as ue, TableColumnResizer as de, TableSelectionHeader as fe, TagManager as pe, TaskProgress as me, Un as he, Wt as ge, Xf as _e, __toESM as ve, addAlias as ye, addSource as be, authorGroups as xe, authorName as Se, avatarInner as Ce, busyProps as K, cardClass as we, checkEvidenceGap as Te, checkFailures as Ee, checkFeeds as De, checkReceipt as Oe, checkSummary as ke, checkedText as Ae, clickedBlank as je, codedText as Me, columnVisibilityFeature as Ne, composingKey as Pe, confirmModal as Fe, createColumnHelper as Ie, credentialDone as Le, cx as Re, dZ as ze, dropSources as Be, du as Ve, errorHeadline as He, errorMessage as q, feedIntervalText as Ue, fetchCheckJob as We, fetchCredentials as Ge, fetchFeeds as Ke, fetchFollow as qe, fetchResolveJob as Je, fetchSuggestions as Ye, flexRender as Xe, followFeedByName as Ze, followFeedEntity as Qe, followSuggestKey as $e, groupByAuthor as et, isBroken as tt, isLayout as nt, jobText as rt, joinList as J, keepSelected as it, l7 as at, localTime as ot, lookupFeedActor as st, mapLimit as ct, markAllPending as lt, pageSizeOf as ut, pageWindow as dt, patchSource as ft, pv as pt, queryClient as mt, quoted as ht, reloadFollowManage as gt, removeAlias as _t, removeFeed as vt, removeSource as yt, renameAliasGroup as bt, require_jsx_runtime as xt, require_react as St, resolveFollowSort as Ct, rowPaginationFeature as wt, rowSelectionFeature as Tt, rowSortingFeature as Et, selectionState as Dt, serverLabel as Ot, setFeedEnabled as kt, setSourceEnabled as At, sortLabel as jt, startCheck as Mt, startResolve as Nt, t as Y, tableFeatures as Pt, tableRows as Ft, toggleGroup as It, useAction as Lt, useBackgroundJob as Rt, useMutation as zt, useQuery as Bt, useTable as Vt, useTablePreferences as Ht } from "./peach-app.js";
import { Page as Ut } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as Wt, ErrorLine as Gt, SourceIcon as Kt, SourceLink as qt, StatusBadge as Jt } from "./peach-app.source-view--K6uWAMi.js";
import { createPaginatedRowModel as Yt, createSortedRowModel as Xt, useTableSelection as Zt } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { LEGACY_AVATAR_IMG as Qt } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ ve(St(), 1), Z = xt(), $t = Re(I, L, "text-body-2-medium"), en = Y("follow:addCreatorSource.placeholder"), tn = Y("follow:addCreatorSource.title"), nn = Y("follow:addCreatorSource.searchingByName"), rn = Y("follow:addCreatorSource.recognizing"), an = Y("follow:addCreatorSource.noSourceFound"), on = "/settings/subscriptions", sn = (e, t) => `${e}:${t.url}`;
function cn({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
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
		className: Re(R, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(P, { label: Y("follow:addCreatorSource.findingSuggestions") })
		}) : null, r.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? Re($t, "bg-background-secondary-default") : $t,
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
function ln({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? Y("follow:addCreatorSource.allSources") : Y("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Z.jsx)(U, {
		label: Y("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: c,
		empty: Y("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(Kt, { provider: e.provider }), e.provider_label]
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
				href: on
			}
		]
	});
}
function un({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(z, {
		tone: "error",
		title: e.line,
		children: rt(e, "error") || Y("follow:addCreatorSource.searchFailed")
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
				let n = sn(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(p, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Kt, { provider: e.provider }),
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
			}) : /* @__PURE__ */ (0, Z.jsx)(j, { children: an }),
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
			o.length ? /* @__PURE__ */ (0, Z.jsx)(j, { children: J(o.map(([t, n]) => Y("follow:shared.labeled", {
				label: t,
				value: Ot(e.failure_codes?.[t]?.code ?? "", n, e.failure_codes?.[t]?.params)
			}))) }) : null
		]
	});
}
function dn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, u] = (0, X.useState)(""), [d, f] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, X.useState)(/* @__PURE__ */ new Set()), [te, w] = (0, X.useState)(""), [T, E] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let D = Bt({
		queryKey: $e(d),
		queryFn: ({ signal: e }) => Ye(d, e),
		enabled: d.length > 0 && p && !o && h !== i
	}), O = (0, X.useMemo)(() => (D.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: Ot(t.matched_code ?? "", t.matched || ""),
		n: t.n || 0,
		group: Ot(e.label_code ?? "", e.label)
	}))), [D.data]), { job: j, running: N, outcome: P, start: F, dismiss: I } = Rt({
		queryKey: k,
		queryFn: ({ signal: e }) => Je(e),
		start: (e) => Nt([e]),
		onStarted: () => C(/* @__PURE__ */ new Set()),
		onError: (e) => w(q(e)),
		onFinish: (e) => {
			e.status === "failed" && w(rt(e, "error") || Y("follow:addCreatorSource.searchFailed"));
		}
	}), L = (e) => {
		let t = e.trim();
		!t || n || o || N || F.isPending || (w(""), v(-1), u(t), a(t), f(""), g(t), F.mutate(t));
	}, R = D.isFetching, ne = p && !o && h !== i && (O.length > 0 || R), re = () => {
		v(-1), g(i);
	}, ie = (e) => {
		if (!(o || Pe(e.nativeEvent))) {
			if (e.key === "Escape" && ne) re();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!O.length) return;
				if (e.preventDefault(), !ne) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? O.length - 1 : n >= O.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), L(O[_]?.value || i));
		}
	}, ae = P?.results || [], B = ae.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !x.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: sn(t, e)
	})).filter((e) => !S.has(e.key))), V = zt({
		mutationFn: async (e) => {
			let t = [], n = [];
			E(0);
			for (let r of e) {
				try {
					let e = await be(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(Y("follow:shared.labeled", {
						label: r.candidate.label,
						value: q(e)
					}));
				}
				E((e) => e + 1);
			}
			if (n.length) try {
				await Mt(n);
			} catch (e) {
				t.push(q(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			gt(), e.failures.length ? w(J(e.failures)) : (w(""), I(), r(Y("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => w(q(e))
	}), H = e.suggestions || [], oe = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": tn,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: tn
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
						children: [/* @__PURE__ */ (0, Z.jsx)(M, {
							"aria-label": Y("follow:addCreatorSource.inputLabel"),
							placeholder: en,
							value: i,
							leadingIcon: pt,
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
						}), ne ? /* @__PURE__ */ (0, Z.jsx)(cn, {
							field: y,
							menu: b,
							options: O,
							active: _,
							busy: R,
							onPick: L,
							onClose: re
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(ln, {
						credentials: t,
						hidden: x,
						onHidden: ee
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "primary",
						disabled: n || !i.trim(),
						...K(N || F.isPending),
						onClick: () => L(i),
						children: Y("follow:shared.search")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [N || F.isPending ? /* @__PURE__ */ (0, Z.jsx)(me, {
					embedded: !0,
					label: rt(j) || (j?.total ? Y("follow:addCreatorSource.searchProgress", {
						checked: j.checked || 0,
						count: j.total
					}) : oe ? nn : rn),
					value: j?.checked,
					total: j?.total
				}) : null, te ? /* @__PURE__ */ (0, Z.jsx)(z, {
					tone: "error",
					title: Y("follow:addJavFeed.notCompleted"),
					children: te
				}) : null]
			}),
			ae.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:addCreatorSource.results") }),
					ae.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(un, {
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
								onClick: () => I(),
								children: Y("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: n || !B.length,
								...K(V.isPending),
								onClick: () => V.mutate(B),
								children: Y("follow:addCreatorSource.addSelected", { count: B.length })
							}),
							V.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:addCreatorSource.addingProgress", {
									added: T,
									count: B.length
								})
							}) : null
						]
					})
				]
			}) : null,
			H.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: Y("follow:addCreatorSource.suggested")
				}), H.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? Y("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : Y("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => L(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var fn = Y("follow:addJavFeed.placeholder"), pn = Y("follow:addJavFeed.title");
function mn(e, t) {
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
function hn({ card: e, picked: t, onPick: n }) {
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
function gn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), u = Lt(), d = () => {
		let t = r.trim();
		t && !e && u.run("lookup", (e) => st(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !Pe(e.nativeEvent) && (e.preventDefault(), d());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), u.setError("");
	}, m = () => {
		a && u.run("follow", (e) => Ze(a.q, [...s], e), (e) => {
			t(e.created ? Y("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : Y("follow:addJavFeed.subscribed", { name: e.entity_name })), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && u.run("known", (t) => Qe(e.id, t), () => {
			t(Y("follow:addJavFeed.subscribed", { name: e.name })), i(""), p(), n();
		});
	}, g = a ? mn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": pn,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: pn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(M, {
						"aria-label": Y("follow:addJavFeed.actressName"),
						placeholder: fn,
						value: r,
						leadingIcon: pt,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: f
					})
				}), /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "primary",
					disabled: e || !r.trim(),
					...K(u.busy === "lookup"),
					onClick: d,
					children: Y("follow:shared.search")
				})]
			}),
			u.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
				tone: "error",
				title: Y("follow:addJavFeed.notCompleted"),
				children: u.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "warning",
						title: Y("follow:addJavFeed.javdbSearchFailed"),
						children: Ot(a.unavailable_code ?? "", a.unavailable, a.unavailable_params)
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:addJavFeed.javdbCards") }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(hn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(j, { children: a.unavailable ? Y("follow:addJavFeed.noCardsThisTime") : Y("follow:addJavFeed.noJavdbMatch") }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(j, {
						role: "status",
						children: s.size ? g.text : Y("follow:addJavFeed.pickCardsHint")
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(j, {
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
								...K(u.busy === "follow"),
								onClick: m,
								children: Y("follow:addJavFeed.subscribePicked", { count: s.size })
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: e,
								...K(u.busy === "known"),
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
function _n({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(ne, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: Y("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Z.jsx)(vn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function vn({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = Lt();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => bt(t.canonical_key, i.trim(), e), () => {
				gt(), r(Y("follow:creatorAliases.renamed", { name: i.trim() })), n();
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
			/* @__PURE__ */ (0, Z.jsx)(M, {
				"aria-label": Y("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Z.jsx)("div", {
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
			o.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
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
					...K(!!o.busy),
					children: Y("follow:creatorAliases.rename")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var yn = (e) => Y("follow:creatorAliases.removeBody", { alias: e }), bn = Pt({
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	rowPaginationFeature: wt,
	columnVisibilityFeature: Ne,
	sortedRowModel: Xt(),
	paginatedRowModel: Yt()
}), xn = bn, Sn = {
	id: "select",
	label: Y("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Cn = {
	id: "canonical",
	label: Y("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, wn = [
	Sn,
	Cn,
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
], Tn = [
	Sn,
	Cn,
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
], En = (e) => e.alias;
function Dn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function On({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Wt, {
			group: Dn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function kn({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: u }) {
	let d = Ht("alias-suggestions", wn), f = Ht("alias-saved", Tn), [h, g] = (0, X.useState)(null), [_, C] = (0, X.useState)({}), [te, w] = (0, X.useState)({}), T = Zt(() => C({})), E = Zt(() => w({})), [D, O] = (0, X.useState)([]), [k, j] = (0, X.useState)([]), [N, P] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [F, I] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), L = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(t.length / N.pageSize) - 1))
	}, R = {
		...F,
		pageIndex: Math.min(F.pageIndex, Math.max(0, Math.ceil(e.length / F.pageSize) - 1))
	}, [ne, z] = (0, X.useState)(""), [ie, ae] = (0, X.useState)(""), [B, V] = (0, X.useState)(""), H = zt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await ye(n.canonical, n.alias);
				} catch (n) {
					throw t && gt(), Error(Y("follow:creatorAliases.mergePartialError", {
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
		onSuccess: (e) => {
			z(""), C({}), gt(), u(Y("follow:creatorAliases.merged", { count: e.done }));
		},
		onError: (e) => z(q(e))
	}), U = zt({
		mutationFn: (e) => ye(e.canonical, e.alias),
		onSuccess: () => {
			z(""), ae(""), V(""), gt(), u(Y("follow:creatorAliases.saved"));
		},
		onError: (e) => z(q(e))
	}), W = zt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await _t(e), n += 1;
			} catch (e) {
				throw Error(Y("follow:creatorAliases.removePartialError", {
					error: q(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				gt();
			}
		},
		onSuccess: () => {
			z(""), w({}), u(Y("follow:creatorAliases.removed"));
		},
		onError: (e) => z(q(e))
	}), se = (e, t) => {
		e.length && Fe({
			title: Y(t ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: Y("follow:creatorAliases.mergeBody", {
				count: e.length,
				pairs: J(e.map((e) => Y("follow:creatorAliases.mergePair", {
					alias: ht(e.alias),
					canonical: ht(e.canonical)
				})))
			}),
			confirmLabel: Y(t ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm"),
			onConfirm: () => H.mutateAsync(e)
		});
	}, ce = (e) => void Fe({
		title: Y("follow:creatorAliases.removeTitle"),
		body: yn(e),
		confirmLabel: Y("follow:creatorAliases.removeTitle"),
		onConfirm: () => W.mutateAsync(e)
	}), G = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: H.isPending,
		removing: W.isPending,
		merge: se,
		remove: ce,
		rename: g
	});
	G.current = {
		sources: s,
		readOnly: c,
		merging: H.isPending,
		removing: W.isPending,
		merge: se,
		remove: ce,
		rename: g
	};
	let pe = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(fe, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(On, {
					sources: G.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: Y("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Ot(e.evidence_code ?? "", e.evidence, e.evidence_params), {
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
					disabled: G.current.readOnly,
					...K(G.current.merging),
					onClick: () => G.current.merge([e.row.original], !1),
					children: Y("follow:shared.merge")
				})
			})
		]);
	}, []), me = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(fe, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(On, {
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
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: re,
							"aria-label": Y("follow:creatorAliases.removeAliasNamed", { name: e.name }),
							disabled: G.current.readOnly,
							...K(G.current.removing),
							onClick: () => G.current.remove(e.name)
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
					disabled: G.current.readOnly,
					"aria-label": Y("follow:creatorAliases.renameRowLabel", { name: e.original.canonical_name }),
					onClick: () => G.current.rename(e.original),
					children: Y("follow:creatorAliases.rename")
				})
			})
		]);
	}, []), he = Vt({
		features: bn,
		data: t,
		columns: pe,
		getRowId: En,
		state: {
			rowSelection: _,
			sorting: D,
			pagination: L,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			T(), C(e);
		},
		onSortingChange: (e) => {
			O(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P,
		enableRowSelection: !0
	}), ge = Vt({
		features: xn,
		data: e,
		columns: me,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: te,
			sorting: k,
			pagination: R,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			E(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			j(e), I((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: I
	}), ve = he.getSelectedRowModel().rows.map((e) => e.original), be = ge.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), xe = K(H.isPending);
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
				children: [/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(M, {
							"aria-label": Y("follow:creatorAliases.displayName"),
							placeholder: Y("follow:creatorAliases.displayNamePlaceholder"),
							value: ie,
							onChange: ae,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(M, {
							"aria-label": Y("follow:creatorAliases.platformAlias"),
							placeholder: Y("follow:creatorAliases.platformAlias"),
							value: B,
							onChange: V,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							disabled: c || !ie.trim() || !B.trim(),
							...K(U.isPending),
							onClick: () => U.mutate({
								canonical: ie.trim(),
								alias: B.trim()
							}),
							children: Y("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			ne ? /* @__PURE__ */ (0, Z.jsx)(S, { children: ne }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Z.jsx)("span", {
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
									...xe,
									onClick: () => se(t, !0),
									children: Y("follow:creatorAliases.mergeAllCount", { count: t.length })
								}),
								/* @__PURE__ */ (0, Z.jsx)(b, {
									label: Y("follow:creatorAliases.pendingTable"),
									sorting: D,
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
										O(e), P((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(ue, {
									preferences: d,
									label: Y("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: Y("follow:creatorAliases.pendingBulkActions"),
						visible: ve.length > 0,
						count: Y("follow:creatorAliases.groupsSelected", { count: ve.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...xe,
							onClick: () => se(ve, !1),
							children: Y("follow:creatorAliases.mergeSelectedCount", { count: ve.length })
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
						onRowClick: (e) => he.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(le, {
							"aria-label": Y("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => he.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [he.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: he.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.pendingTable"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: t.length,
						pagination: L,
						onChange: P
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
							children: [/* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Z.jsx)("span", {
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
									j(e), I((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(ue, {
								preferences: f,
								label: Y("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: Y("follow:creatorAliases.savedBulkActions"),
						visible: be.length > 0,
						count: Y("follow:creatorAliases.aliasesSelected", { count: be.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...K(W.isPending),
							onClick: () => void Fe({
								title: Y("follow:creatorAliases.removeSelectedTitle"),
								body: Y("follow:creatorAliases.removeSelectedBody", { count: be.length }),
								items: be,
								confirmLabel: Y("follow:creatorAliases.removeSelectedConfirm"),
								onConfirm: () => W.mutateAsync(be)
							}),
							children: Y("follow:creatorAliases.removeSelectedCount", { count: be.length })
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
						onRowClick: (e) => ge.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(le, {
							"aria-label": Y("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ge.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [ge.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: ge.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.saved"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: e.length,
						pagination: R,
						onChange: I
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
			/* @__PURE__ */ (0, Z.jsx)(_n, {
				group: h,
				close: () => g(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var An = Pt({
	rowPaginationFeature: wt,
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	columnVisibilityFeature: Ne,
	sortedRowModel: Xt(),
	paginatedRowModel: Yt()
}), jn = {
	select: Y("follow:shared.select"),
	name: Y("follow:shared.name"),
	kind: Y("follow:shared.type"),
	origin: Y("follow:followFeed.filterKindSource"),
	status: Y("follow:shared.status"),
	interval: Y("follow:feedSources.colInterval"),
	fetched: Y("follow:feedSources.colLastFetched"),
	fresh: Y("follow:feedSources.colLastAdded"),
	actions: Y("follow:shared.actions")
}, Mn = /* @__PURE__ */ new Set(["actions"]), Nn = Object.entries(jn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Pn = () => mt.invalidateQueries({
	queryKey: te,
	exact: !0
}), Fn = (e) => e.name || e.url;
function In(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Ln({ source: e }) {
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
function Rn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Qt}`,
		dangerouslySetInnerHTML: { __html: Ce(Fn(e), t, null, "performer") }
	});
}
var zn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Bn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Vn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Fe({
		title: n ? Y("follow:feedSources.removeOne") : Y("follow:feedSources.removeMany", { count: e.length }),
		body: n ? Y("follow:feedSources.removeOneBody", { name: Fn(n) }) : Y("follow:feedSources.removeManyBody"),
		confirmLabel: Y(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		onConfirm: t
	});
}
function Hn({ readOnly: e, toast: t, onAdd: c, selection: u }) {
	let f = Bt({
		queryKey: te,
		queryFn: ({ signal: e }) => Ke(e)
	}), h = Lt(), g = Ht("jav-feeds", Nn), _ = f.data, x = (0, X.useMemo)(() => _?.sources ?? [], [_]), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), T = u?.ids ?? C, E = u?.onChange ?? w, [D, O] = (0, X.useState)(1), [k, A] = (0, X.useState)(20), [M, N] = (0, X.useState)([]), P = dt(x.length, k, D);
	(0, X.useEffect)(() => {
		O((e) => Math.min(e, P.pages));
	}, [P.pages]), (0, X.useEffect)(() => {
		E((e) => {
			let t = new Set(x.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [x, E]);
	let I = zt({
		mutationFn: async (e) => {
			let t = await ct(e.ids, 4, async (t) => {
				e.action === "remove" ? await vt(t) : await kt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (E(/* @__PURE__ */ new Set()), Pn(), e.action === "remove" && r && t(Y("follow:feedSources.removedMany", { count: r })), n.length) {
				let e = n[0];
				h.setError(Y("follow:feedSources.writeFailed", {
					count: n.length,
					error: e.ok ? "" : q(e.error)
				}));
			}
		},
		onError: (e) => h.setError(q(e))
	}), L = (0, X.useMemo)(() => Bn(x), [x]), R = (0, X.useRef)({
		readOnly: e,
		shared: L,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	R.current = {
		readOnly: e,
		shared: L,
		busy: h.busy,
		toggle: (e, t) => void h.run(`enabled-${e.id}`, (n) => kt(e.id, t, n), () => void Pn()),
		fetch: (e) => void h.run(`check-${e.id}`, (t) => De(t, [e.id]), () => void Pn()),
		remove: (e) => void Vn([e], async () => {
			await vt(e.id), t(Y("follow:feedSources.removedOne", { name: Fn(e) })), Pn();
		})
	};
	let ne = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => jn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(fe, {
					table: e.table,
					label: Y("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: Fn(e.row.original) })
				})
			}),
			e.accessor(Fn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = zn(e.row.original, R.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Rn, { source: e.row.original }),
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
					children: [/* @__PURE__ */ (0, Z.jsx)(W, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : In(e.getValue()),
						label: In(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(ge, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? Y("follow:feedSources.fetchFailed") : e.enabled ? Y("follow:shared.enabled") : Y("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Ln, { source: e.row.original })
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
					children: e.row.original.last_fetched_at ? ot(e.row.original.last_fetched_at) : Y("follow:feedSources.neverFetched")
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
							"aria-label": Y("follow:shared.enableNamed", { name: Fn(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: R.current.readOnly,
							onChange: (t) => R.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": Y("follow:feedSources.fetchNamed", { name: Fn(e.row.original) }),
							disabled: R.current.readOnly,
							...K(R.current.busy === `check-${e.row.original.id}`),
							onClick: () => R.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
							"aria-label": Y("follow:shared.removeNamed", { name: Fn(e.row.original) }),
							disabled: R.current.readOnly,
							onClick: () => R.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), re = (0, X.useMemo)(() => Object.fromEntries([...T].map((e) => [String(e), !0])), [T]), ie = Vt({
		features: An,
		data: x,
		columns: ne,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: re,
			sorting: M,
			pagination: {
				pageIndex: P.page - 1,
				pageSize: k
			},
			columnVisibility: g.visibility
		},
		onColumnVisibilityChange: g.change,
		onSortingChange: (e) => {
			N(e), O(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			u?.onActivate();
			let t = typeof e == "function" ? e(re) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!_) return f.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
		tone: "error",
		title: Y("follow:feedSources.loadFailed"),
		children: q(f.error)
	}) : /* @__PURE__ */ (0, Z.jsx)(j, { children: Y("follow:feedSources.loading") });
	let ae = () => void h.run("check", (e) => De(e), () => void Pn()), B = (e) => {
		u?.onActivate(), E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, V = x.filter((e) => T.has(e.id)), H = x.filter((e) => e.last_error);
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
								...K(h.busy === "check"),
								children: Y("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Z.jsx)(ue, {
								preferences: g,
								label: Y("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Z.jsx)(b, {
								label: Y("follow:feedSources.title"),
								sorting: M,
								onChange: (e) => {
									N(e), O(1);
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
									label: jn[e]
								}))
							})
						]
					})]
				}),
				H.length || h.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [H.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:feedSources.failedTitle", { count: H.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: H.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: Me(e, "last_error"),
								children: Y("follow:shared.labeled", {
									label: Fn(e),
									value: He(Me(e, "last_error")) || Y("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: Y("follow:feedSources.failedBody")
					}) : null, h.error ? /* @__PURE__ */ (0, Z.jsx)(S, { children: h.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsxs)(oe, {
					visible: V.length > 0,
					label: Y("follow:feedSources.bulkActions"),
					count: Y("follow:feedSources.selectedCount", { count: V.length }),
					children: [
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => I.mutate({
								ids: V.map((e) => e.id),
								action: "enabled"
							}),
							children: Y("follow:shared.enable")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => I.mutate({
								ids: V.map((e) => e.id),
								action: "paused"
							}),
							children: Y("follow:shared.pause")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "danger",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => void Vn(V, () => I.mutateAsync({
								ids: V.map((e) => e.id),
								action: "remove"
							})),
							children: Y("follow:shared.remove")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => E(/* @__PURE__ */ new Set()),
							children: Y("follow:shared.clearSelection")
						})
					]
				}),
				x.length ? /* @__PURE__ */ (0, Z.jsx)(y, {
					follow: !0,
					preferences: g,
					onRowClick: (e) => B(Number(e)),
					children: /* @__PURE__ */ (0, Z.jsxs)(le, {
						"aria-label": Y("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: M[0] ? {
							column: M[0].id,
							direction: M[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => ie.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [ie.getHeaderGroups()[0].headers.map((e) => {
							let t = Xe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...g.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [Mn.has(e.column.id) ? /* @__PURE__ */ (0, Z.jsx)(s, { children: t }) : /* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(de, {
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
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
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
						pageSize: k
					},
					onChange: (e) => {
						A(e.pageSize), O(e.pageIndex + 1);
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
var Un = Pt({
	rowPaginationFeature: wt,
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	columnVisibilityFeature: Ne,
	paginatedRowModel: Yt()
}), Wn = Object.fromEntries(Object.entries(f).map(([e, t]) => [t, e])), Gn = 740;
function Kn() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Gn));
		r.observe(e), n.current = r, t(e.clientWidth < Gn);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var qn = {
	select: Y("follow:shared.select"),
	author: Y("follow:shared.creator"),
	source: Y("follow:followFeed.filterKindSource"),
	provider: Y("follow:shared.site"),
	status: Y("follow:shared.status"),
	checked: Y("follow:sourceList.colLastChecked"),
	actions: Y("follow:shared.actions")
}, Jn = Object.entries(qn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Yn({ source: e, selected: t, onToggle: n, handlers: r }) {
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
					children: /* @__PURE__ */ (0, Z.jsx)(Kt, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(qt, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(s, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(Jt, { source: e }),
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
						children: /* @__PURE__ */ (0, Z.jsx)(Gt, { text: Me(e, "last_error") })
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
					/* @__PURE__ */ (0, Z.jsx)(G, {
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
							...K(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
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
function Xn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let u = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(tt).length, p = J([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = Dt(r, u);
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
				/* @__PURE__ */ (0, Z.jsx)(Wt, {
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
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Kt, { provider: e.provider }, e.id)),
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
						...K(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							leadingIcon: at,
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
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Yn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function Zn(e) {
	let { data: t, sort: c, dir: u, page: h, layout: _, pageSize: b, selected: x, readOnly: S, onSort: C, onPage: te, onLayout: E, onPageSize: D, onSelected: O, toast: k, openFollow: A, onAdd: j } = e, M = t.sources, P = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), I = t.counts || {}, [L, R] = (0, X.useState)(/* @__PURE__ */ new Set()), [ne, re] = Kn(), [B, U] = (0, X.useState)(""), W = (0, X.useMemo)(() => xe(M, c, u, P), [
		M,
		c,
		u,
		P
	]), ce = (0, X.useMemo)(() => Ft(W, c, u, P), [
		W,
		c,
		u,
		P
	]), { job: pe, running: ge, outcome: _e, start: ve } = Rt({
		queryKey: w,
		taskKey: T,
		queryFn: ({ signal: e }) => We(e),
		start: (e) => Mt(e),
		onError: (e) => U(q(e)),
		onFinish: (e) => {
			gt(), k(e.status === "failed" ? rt(e, "error") || Y("follow:followCheck.checkFailed") : Oe(e));
		}
	}), ye = (e) => {
		ge || ve.isPending || (U(""), ve.mutate(e));
	}, be = (e, t) => O(It(x, [e], t)), Ce = (e, t) => O(It(x, e, t)), De = zt({
		mutationFn: (e) => yt(e),
		onSuccess: (e, t) => {
			Be([t]), O(It(x, [t], !1)), k(Y("follow:sourceList.unfollowed"));
		},
		onError: (e) => U(q(e))
	}), je = zt({
		mutationFn: (e) => At(e.id, e.enabled),
		onSuccess: (e, t) => {
			ft(t.id, { enabled: t.enabled }), U("");
		},
		onError: (e) => U(q(e))
	}), Ne = (e) => void Fe({
		title: Y("follow:sourceList.unfollow"),
		body: Y("follow:sourceList.unfollowBody"),
		confirmLabel: Y("follow:sourceList.unfollow"),
		danger: !0,
		onConfirm: () => De.mutateAsync(e.id)
	}), Pe = zt({
		mutationFn: async (e) => {
			let t = await ct(e.ids, 4, async (t) => {
				e.action === "remove" ? await yt(t) : await At(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Be(e.done);
			else for (let t of e.done) ft(t, { enabled: e.action === "enabled" });
			O(It(x, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				U(Y("follow:sourceList.bulkPartialFail", {
					failed: t.length,
					total: e.ids.length,
					error: q(t[0]?.error)
				}));
				return;
			}
			U("");
			let n = e.action === "remove" ? "follow:sourceList.bulkDeleted" : e.action === "enabled" ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused";
			k(Y(n, { count: e.done.length }));
		},
		onError: (e) => U(q(e))
	}), Le = zt({
		mutationFn: lt,
		onSuccess: (e) => {
			gt(), e.failed ? U(Y("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: q(e.error)
			})) : (U(""), k(Y("follow:sourceList.bulkMarked", { count: e.total })));
		},
		onError: (e) => U(q(e))
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
		busy: ge || ve.isPending,
		readOnly: S
	};
	let Ge = Ue.current, Ke = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => qn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(fe, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(Wt, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(qt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Gt, { text: Me(e.row.original.source, "last_error") }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Kt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Jt, { source: e.row.original.source })
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
						/* @__PURE__ */ (0, Z.jsx)(G, {
							"aria-label": Y("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: Ge.readOnly,
							onChange: (t) => Ue.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || Ge.readOnly,
							...K(Ge.busy),
							onClick: () => Ue.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
							"aria-label": Y("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: Ge.readOnly,
							onClick: () => Ue.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [Ge]), qe = (0, X.useMemo)(() => {
		let e = Wn[c];
		return e ? [{
			id: e,
			desc: u === "desc"
		}] : [];
	}, [c, u]), Je = (0, X.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), Ye = _ === "table", Ze = Ht("follow-sources", Jn), Qe = dt(Ye ? ce.length : W.length, b, h), $e = Vt({
		features: Un,
		data: ce,
		columns: Ke,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: qe,
			rowSelection: Je,
			pagination: {
				pageIndex: Qe.page - 1,
				pageSize: b
			},
			columnVisibility: Ze.visibility
		},
		onColumnVisibilityChange: Ze.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(qe) : e)[0];
			if (!t) return;
			let n = f[t.id];
			n && C(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Je) : e;
			O(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Qe.page - 1,
				pageSize: b
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === b ? n.pageIndex !== t.pageIndex && te(n.pageIndex + 1) : D(n.pageSize);
		}
	}), et = $e.getRowModel().rows, tt = Ye ? et.map((e) => e.original.source.id) : W.slice(Qe.start, Qe.end).flatMap((e) => e.map((e) => e.id)), nt = Dt(x, tt), J = [...x], it = Ee(_e), at = M.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), ot = Te(_e), st = W.length > 0 && L.size >= W.length;
	return M.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: ne,
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
						children: I.new ? Y("follow:sourceList.sourceCountUnseen", {
							count: M.length,
							unseen: Number(I.new) || 0
						}) : Y("follow:sourceList.sourceCount", { count: M.length })
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						at.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							disabled: S,
							...K(Ge.busy),
							onClick: () => ye(at),
							children: Y("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							leadingIcon: ze,
							disabled: S,
							"aria-label": Y("follow:sourceList.checkAll"),
							iconOnly: re,
							...K(Ge.busy),
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
										leadingIcon: he,
										"aria-label": N[0][1],
										"aria-pressed": !Ye,
										onClick: () => E("default")
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ve,
										"aria-label": N[1][1],
										"aria-pressed": Ye,
										onClick: () => E("table")
									})]
								}),
								Ye ? /* @__PURE__ */ (0, Z.jsx)(ue, {
									preferences: Ze,
									label: Y("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(V, {
										"aria-label": Y("follow:sourceList.sortLabel"),
										prefix: Y("follow:shared.sort"),
										selectedKey: c,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											C(t, ie[t]);
										},
										children: ae.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(H, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: se,
										"data-icon-state": u === "asc" ? "a" : "b",
										"aria-label": jt(c, u),
										onClick: () => C(c, u === "asc" ? "desc" : "asc")
									})]
								}),
								Ye ? null : /* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "secondary",
									iconOnly: re,
									leadingIcon: g,
									"aria-expanded": !st,
									"aria-label": Y(st ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => R(st ? /* @__PURE__ */ new Set() : new Set(W.map((e) => String(e[0].author_key || e[0].id)))),
									children: Y(st ? "follow:shared.expandAll" : "follow:shared.collapseAll")
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
					ge ? /* @__PURE__ */ (0, Z.jsx)(me, {
						embedded: !0,
						label: rt(pe) || (pe?.total ? Y(pe.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: pe.checked || 0,
							count: pe.total
						}) : Y("follow:sourceList.preparingCheck")),
						value: pe?.checked,
						total: pe?.total
					}) : null,
					B ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:shared.actionFailed"),
						children: B
					}) : null,
					!ge && _e?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "neutral",
						title: Y("follow:followFeed.checkResults"),
						children: ke(_e)
					}) : null,
					it.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:sourceList.failedTitle", { count: it.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: it.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: Y("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: He(e.error || "") || Y("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: Y("follow:sourceList.failedBody")
					}) : null,
					ot ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "warning",
						children: Y("follow:sourceList.evidenceGap", { error: ot })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(oe, {
				label: Y("follow:sourceList.bulkActions"),
				visible: J.length > 0,
				count: Y("follow:sourceList.selectedCount", { count: J.length }),
				children: [
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...K(Ge.busy),
						onClick: () => ye(J),
						children: Y("follow:sourceList.checkSelected")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...K(Pe.isPending),
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
						...K(Pe.isPending),
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
						...K(Pe.isPending),
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
						onClick: () => O(/* @__PURE__ */ new Set()),
						children: Y("follow:shared.clearSelection")
					})
				]
			}),
			Ye ? /* @__PURE__ */ (0, Z.jsx)(y, {
				follow: !0,
				preferences: Ze,
				onRowClick: (e) => be(Number(e), !x.has(Number(e))),
				children: /* @__PURE__ */ (0, Z.jsxs)(le, {
					"aria-label": Y("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: qe[0] ? {
						column: qe[0].id,
						direction: qe[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => $e.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [$e.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in f, n = Xe(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ze.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(m, {})
								})]
							}) : /* @__PURE__ */ (0, Z.jsx)(s, { children: n }), /* @__PURE__ */ (0, Z.jsx)(de, {
								preferences: Ze,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(r, {
						id: "remaining-space",
						"aria-label": Y("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: Ze.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
						renderEmptyState: () => Y("follow:sourceList.pageEmpty"),
						children: et.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(p, {
				isSelected: nt.all,
				isIndeterminate: nt.some,
				onChange: (e) => Ce(tt, e),
				"aria-label": Y("follow:sourceList.selectPage"),
				children: Y("follow:sourceList.selectPageShort")
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col gap-3",
				children: W.slice(Qe.start, Qe.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Z.jsx)(Xn, {
						group: e,
						name: Se(e, P),
						handlers: Ge,
						selected: x,
						open: !L.has(t),
						onOpen: (e) => {
							let n = new Set(L);
							e ? n.delete(t) : n.add(t), R(n);
						},
						onToggleGroup: (t) => Ce(e.map((e) => e.id), t),
						onToggle: be
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Z.jsx)(v, {
				label: Y("follow:followManageNav.list"),
				total: Qe.total,
				pagination: {
					pageIndex: Qe.page - 1,
					pageSize: b
				},
				unit: Y(Ye ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: Y(Ye ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === b ? $e.setPageIndex(e.pageIndex) : $e.setPageSize(e.pageSize);
				}
			}),
			I.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:sourceList.markSummary", {
							unwatched: Number(I.new) || 0,
							watched: Number(I.seen) || 0,
							saved: Number(I.saved) || 0,
							ignored: Number(I.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: A,
						children: Y("follow:sourceList.seeUpdates")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...K(Le.isPending),
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
						...K(Le.isPending),
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
			onClick: j,
			children: Y("follow:followFeed.addFollow")
		}),
		children: Y("follow:sourceList.emptyHint")
	});
}
// node_modules/skullet/dist/index.mjs
var Qn = "skullet-reveal", $n = "skullet-pane", er = "skullet-loading", tr = "skullet-ghost", nr = "skullet-snapshot", rr = "skullet-layer", ir = "skullet-rect", ar = "skullet-bar", or = "skullet-inactive", sr = "skullet-exiting", cr = "skullet-covered", lr = "skullet-own", ur = "skullet-block", dr = Symbol.for("skullet.ghost"), fr = Symbol.for("skullet.uncover"), pr = "skullet-status", mr = "skullet-xray", hr = "var(--skullet-base, rgb(128 128 128 / 0.2))", gr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", _r = 280, vr = 1e4, yr = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, br = [
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
], xr = [
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
], Sr = xr.join(", "), Cr = `
[${Qn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${$n}] {
  display: block;
}

[${er}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${or}] {
  display: none !important;
}

[${rr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${ar}] {
  display: block;
  background-color: ${hr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${er}]) to ([${lr}], [${rr}]) {
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
  :scope :is(${br.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${Sr}, [${cr}], [${ur}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${hr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${Sr}, [${ur}]):not(svg *) {
      visibility: visible !important;
      background: ${hr} !important;
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
[${pr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${mr}] [${er}] [${tr}],
[${mr}] [${er}] [${tr}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, wr = null, Tr = 0, Er;
function Dr() {
	Tr++, !wr && (Er ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !Er && (wr = document.createElement("style"), wr.dataset.skullet = "true", wr.textContent = Cr, document.head.appendChild(wr)));
}
function Or() {
	Tr--, !(Tr > 0 || !wr) && (wr.remove(), wr = null);
}
var kr = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", Ar = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...Ar });
function jr(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? Ar[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var Mr = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function Nr({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = jr(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${Mr(o)} }`), a === "system") {
		let t = jr({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${Mr(t)} } }`);
	}
	return s.join("\n");
}
var Pr = /* @__PURE__ */ new Map(), Fr, Q = null, Ir = 0;
function Lr() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Rr = () => Fr ??= typeof window < "u" && Lr(), zr = (e) => Rr() || !!e?.closest("[skullet-debug]");
function Br(e) {
	Fr = e, e ? Gr() : Kr();
}
function Vr(e, t) {
	!e || !zr(e) || (Pr.set(e, {
		state: "loading",
		source: t
	}), Ur());
}
function Hr(e, t) {
	!e || !zr(e) || (Pr.set(e, {
		...Pr.get(e),
		state: "shown",
		moved: t
	}), Ur());
}
function Ur() {
	Gr(), cancelAnimationFrame(Ir), Jr();
}
var Wr = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Gr() {
	if (typeof document > "u") return;
	if (!Q?.isConnected) {
		Q = document.createElement("div"), Q.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Q.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Wr}</style><div class="boxes"></div>`, document.body.append(Q);
	}
	let e = Q.shadowRoot;
	if (Fr && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(mr, e.target.checked);
		}), e.append(t);
	}
	Ir ||= requestAnimationFrame(Jr);
}
function Kr() {
	Q?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(mr), ![...Pr.keys()].some((e) => zr(e)) && (cancelAnimationFrame(Ir), Ir = 0, Q?.remove(), Q = null);
}
var qr = ({ state: e, source: t, moved: n }) => {
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
function Jr() {
	if (Ir = 0, !Q?.shadowRoot) return;
	let e = Q.shadowRoot.querySelector(".boxes");
	for (let e of Pr.keys()) e.isConnected && zr(e) || Pr.delete(e);
	let t = [...Pr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = qr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Fr || Pr.size) && (Ir = requestAnimationFrame(Jr));
}
var Yr, Xr = () => Yr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Zr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Qr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], $r = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function ei(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function ti(e, t, n) {
	let r = Zr(e, t), i = ei(n, t), a = e ? Qr(e) : [], o = Qr(t), s = Qr(r).map((t, n) => $r(t, o[n]) ? i[n] : e && $r(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function ni(e, t, n, r) {
	if (!e) return n;
	let i = Qr(e), a = Qr(t).map((t, n) => e.corners[n] > 0 && $r(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = ei(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var ri = (e, t) => {
	let n = Zr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, ii = {
	top: "ascender",
	bottom: "descender"
}, ai = /* @__PURE__ */ new Map(), oi = (e) => [...e.getClientRects?.() ?? []];
function si(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ai.has(t)) return ai.get(t);
	let n = Xr(), r = null;
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
	return ai.set(t, r), r;
}
var ci = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, li = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function ui(e, t, n) {
	let r = si(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = li(t, "--skullet-text-top", Object.keys(ci), ii.top), a = li(t, "--skullet-text-bottom", ["baseline", "descender"], ii.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[ci[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var di = new Set(xr), fi = new Set(br), pi = .4, mi = /[,/]\s*0\)$/, hi = (e, t) => e !== "" && e !== t, gi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], _i = (e) => gi.every((t) => hi(e[`border${t}Style`], "none") && hi(e[`border${t}Width`], "0px")), vi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, yi = (e) => hi(e, "none") && !e.split(/,(?![^(]*\))/).every(vi), bi = (e) => hi(e.backgroundColor, "transparent") && !mi.test(e.backgroundColor) || hi(e.backgroundImage, "none") || yi(e.boxShadow) || _i(e), xi = (e) => di.has(e.localName), Si = (e) => fi.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), Ci = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(oi(n).filter((e) => e.width || e.height));
		} else Si(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * pi, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, wi = (e, t) => e.hasAttribute("skullet-block") || xi(e) || bi(t) && Ci(e) <= 1;
function Ti(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function Ei(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * pi;
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
function Di(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = ri(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...ui(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of oi(d)) f(e, r, t);
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
			if (wi(e, r)) {
				let n = ri(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: ni(t, n, Ti(e, r), r)
					});
				}
				xi(e) || u.add(e);
				continue;
			}
			if (Si(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? ti(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...Ei(l)];
	for (let t of e.querySelectorAll(`[${cr}]`)) u.has(t) || t.removeAttribute(cr);
	for (let e of u) e.hasAttribute(cr) || e.setAttribute(cr, "");
	return [...c, ...Ei(l)];
}
var Oi = (e) => typeof matchMedia < "u" && matchMedia(e).matches, ki = () => typeof Element < "u" && typeof Element.prototype.animate == "function", Ai = () => !ki() || Oi("(prefers-reduced-motion: reduce)"), ji = () => Oi("(prefers-reduced-transparency: reduce)"), Mi = (e) => e.getAnimations?.() ?? [], Ni = .7, Pi = 1280, Fi = 320, Ii = 2.5, Li = .45, Ri = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function zi(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Ri, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: yr[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Bi = 20, Vi = Math.sin(Bi * Math.PI / 180), Hi = Math.cos(Bi * Math.PI / 180), Ui = Vi / Hi, Wi = Hi, Gi = `${90 + Bi}deg`, Ki = .85, $ = 12, qi = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Ji(e) {
	let t = e * Ii, n = (t, n) => `color-mix(in srgb, ${gr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Ki, qi(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Ki + e / $ * (1 - Ki), qi(1 - e / $)));
	return {
		width: t / Hi,
		image: `repeating-linear-gradient(${Gi}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Yi(e, t, n = zi(e)) {
	for (let t of Mi(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", Ai() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: Li,
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
	}, { width: s, image: c } = Ji(Math.min(Math.max(o.width * .4, 80), Fi)), l = a - o.left + (i.top - o.top) * Ui, u = n.duration * Ni / (Pi + Fi);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Xi(e) {
	if (Ai()) return null;
	let t = zi(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * Ni / (Pi + Fi);
}
var Zi = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Qi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function $i(e, t) {
	let n = Zi(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = zi(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${hr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Yi(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var ea = 120, ta = 72, na = 3, ra = 60, ia = 150, aa = 400, oa = 1.5, sa = 1e3, ca = 1e3, la = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), ua = -1 / 0, da = !1;
function fa() {
	if (!(da || typeof addEventListener > "u")) {
		da = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => ua = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var pa = /* @__PURE__ */ new WeakMap();
function ma(e, { served: t, refetch: n }) {
	fa();
	let r = pa.get(e)?.since ?? performance.now();
	pa.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function ha(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function ga(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var _a = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function va(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${sr}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var ya = (e, t) => Math.min(Math.max(e, 0), t), ba = -1 / 0;
function xa(e, t, n, r, i) {
	let a = performance.now();
	a - ba > ia && (ba = a);
	let o = a - ba, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of ha(e)) {
		let n = ga(t, e), r = c.get(n);
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
		return t === null ? null : ya(t, sa) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => _a(t.rect, e));
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
function Sa(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) la.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function Ca(e, t, n, r = () => {}) {
	let i = pa.get(t);
	pa.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - ua < aa,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: ha(e).length
			})
		};
	}
	let o = ya(a.duration ?? 200, ca);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, sa)
	}, !o) return { kind: "instant" };
	let s = Sa(a.enter, r);
	if (a.wipe) {
		let e = va(t);
		if (e.width * e.height <= innerWidth * innerHeight * oa) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return xa(e, t, a.order, {
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
var wa = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return ya(n * .8 + r * .2, 1) * 320;
}, Ta = (e) => e.bottom > 0 && e.top < innerHeight, Ea = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return Ta(e) ? 0 : null;
	if (!Ta(t)) return null;
	let i = ya(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? ra : 0);
}, Da = { duration: 0 }, Oa = { order: "together" }, ka = { order: wa }, Aa = (e) => e.input || e.waited < 150 ? Da : e.refetch ? {
	order: "together",
	duration: ea
} : null, ja = (e) => e.height < ta || e.pieces <= na ? Oa : { order: Ea }, Ma = {
	hold: 150,
	choose: (e) => Aa(e) ?? ja(e)
}, Na = new Set(xr), Pa = "script, noscript, template, base, meta, link", Fa = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Ia = /* @__PURE__ */ new Set([
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
	cr
]), La = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function Ra(e, t) {
	let n = La(t.data);
	t.data = n;
	let r = e.parentElement, i = Xr();
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
function za(e) {
	for (let t of e.querySelectorAll(Pa)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Fa.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Ia.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Ba(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (Na.has(e.localName) || Fa.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) Ra(e, t);
	return za(n), n.innerHTML;
}
function Va(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, za(t.content), t.content;
}
var Ha = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${Ha(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Ua = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Wa(e) {
	let t = Ha(e, 2);
	return t ? `${location.pathname}|${Ua(t)}` : null;
}
var Ga = !1;
try {
	Ga = !1;
} catch {
	Ga = !1;
}
var Ka = Ga, qa = /* @__PURE__ */ new Set();
function Ja(e, t) {
	!Ka || qa.has(e) || (qa.add(e), console.warn(`[skullet] ${t}`));
}
var Ya = /^(https?:|\/|data:|blob:)/;
function Xa(e) {
	return typeof e == "string" ? Ya.test(e) ? "" : La(e) : Array.isArray(e) ? e.map(Xa) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Xa(t)])) : e;
}
var Za = "skullet:shapes", Qa = 2, $a = 50, eo = 2e4, to = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map();
function ro(e, t) {
	return no.has(e) || no.set(e, /* @__PURE__ */ new Set()), no.get(e).add(t), () => no.get(e)?.delete(t);
}
function io(e) {
	for (let t of no.get(e) ?? []) t();
}
function ao() {
	try {
		let e = JSON.parse(localStorage.getItem(Za) ?? "null");
		return e?.v === Qa ? e.shapes : {};
	} catch {
		return {};
	}
}
function oo(e) {
	try {
		localStorage.setItem(Za, JSON.stringify({
			v: Qa,
			shapes: e
		}));
	} catch {}
}
function so(e, t) {
	to.set(e, Ba(t, !1));
	let n = Ba(t, !0);
	if (n.length > eo) return;
	let r = ao();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - $a)) delete r[e];
	oo(r);
}
function co(e) {
	return to.get(e) ?? ao()[e] ?? null;
}
var lo = [
	100,
	90,
	60
].map((e) => `<div ${ur} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), uo = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${er}]`)), fo = /* @__PURE__ */ new WeakMap();
function po(e) {
	if (!e) return;
	let t = fo.get(e);
	return fo.delete(e), t;
}
function mo(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var ho = (e) => !!e.firstElementChild || !!e.textContent?.trim(), go = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Dr(), e[dr] = !0, e.setAttribute(er, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = mo(e, tr), this.snapshot = mo(e, nr), this.layer = mo(e, rr), this.hadContent = ho(this.ghost);
		let n = e.closest(`[${Qn}]`);
		n && ma(n, {
			served: uo.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[fr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${sr}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = ho(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || uo.has(this.root), r = !!this.ghost.querySelector(`[${lr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Wa(this.ghost);
			n && (io(n), t = co(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Va(t)) : e === "fallback" ? (this.snapshot.innerHTML = lo, Ja(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(or, e !== "ghost"), this.snapshot.toggleAttribute(or, e === "ghost"), this.source = e, Vr(this.root.closest(`[${Qn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : uo.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		$i(this.layer, Di(e, this.layer));
		let t = this.root.closest(`[${Qn}]`);
		t && fo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Or();
	}
}, _o = 250, vo = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Wa(e), this.untrack = this.key ? ro(this.key, () => this.save()) : () => {}, (Ka || zr(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), _o);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && so(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Qn}]`), o = po(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Ja(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Xa(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Hr(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Ja(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Ja(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, yo = () => {}, bo = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, xo = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !bo(e));
function So(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(yo, yo), new Promise((e) => setTimeout(e, vr))]);
}
var Co = 360, wo = 2, To = 600, Eo = 40, Do = Eo / Wi, Oo = 320, ko = 120, Ao = .45, jo = (e) => e.left + e.top * Ui, Mo = (e) => e.width + e.height * Ui, No = (e, t) => jo(t) - Do + (Mo(t) + 2 * Do) * e, Po = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function Fo(e) {
	let t = e.querySelector(`:scope > [${sr}] [${rr}]`), n = t && Xi(t);
	if (!n) return null;
	let r = va(e);
	if (r.width * r.height > innerWidth * innerHeight * oa) return null;
	let i = jo(r), a = i + Mo(r), o = performance.now(), s = o - Po.start;
	s <= ia && (i - Po.origin) / Po.speed >= s && (a - Po.origin) / Po.speed - s <= To || (Po = {
		start: o,
		origin: i,
		speed: Math.max(wo / n, (a - i) / Co)
	});
	let { start: c, origin: l, speed: u } = Po;
	return {
		delay: (i - Do - l) / u - (o - c),
		duration: (a - i + 2 * Do) / u
	};
}
var Io = (e) => (t, { rect: n, reveal: r }) => {
	let i = (No(t, r) - jo(n)) * Wi;
	return `linear-gradient(${Gi}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - qi(n / $) : qi(n / $), a = -Eo + 2 * Eo * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Lo = "http://www.w3.org/2000/svg", Ro = null, zo = 0;
function Bo() {
	return Ro?.isConnected || (Ro = document.createElementNS(Lo, "svg"), Ro.setAttribute("aria-hidden", "true"), Ro.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Ro)), Ro;
}
var Vo = (e, t) => {
	let n = document.createElementNS(Lo, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Ho = {
	mask: Io(!0),
	out: Io(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ji()) return;
		let i = jo(t), a = Mo(t), o = Oo / 2 / Wi, s = () => No(r(), n) - i - ko / Wi;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Ui, l = c / 2, u = t.height / 2, d = Oo / 2 * Wi, f = Oo / 2 * Ui * Wi, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${qi(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++zo}`, _ = Vo("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Vo("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Vo(`feFunc${e}`, {
			type: "linear",
			slope: 1 - Ao,
			intercept: Ao
		}));
		let y = Vo("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Vo("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Vo("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Bo().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Ui) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Uo = {
	together: Oa,
	sequence: ka,
	smart: Ma,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = Aa(e);
			if (t) return t;
			let n = Fo(e.reveal);
			return n ? {
				wipe: Ho,
				...n
			} : ja(e);
		}
	}
}, Wo = (e = "smart") => typeof e == "string" ? Uo[e] : e, Go = () => {}, Ko = (e) => e.finished.then(Go, Go), qo = /* @__PURE__ */ new WeakMap();
function Jo(e, t = 0, n = 200, r = 0, i) {
	return Ai() ? Promise.resolve() : Ko(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Yo = (e) => !!e.querySelector(`[${rr}], [${tr}], :scope > [${lr}]`), Xo = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Zo = /* @__PURE__ */ new WeakMap();
function Qo(e) {
	for (let t of Zo.get(e) ?? []) t.remove();
	Zo.delete(e);
}
function $o(e, t) {
	let n = xo(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Yo(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${sr}] [${rr}]`)].flatMap(Qi), a = Zo.get(t) ?? /* @__PURE__ */ new Set();
			Zo.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Xo(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(ir, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: hr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Yi(c), So(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Jo(e), Ai()) return c.remove();
						Ko(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function es(e, t) {
	return Ai() ? Promise.resolve() : Promise.all(ha(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Jo(e, n, t.duration, 0, t.enter);
	})).then(Go);
}
function ts(e) {
	for (let t of e.querySelectorAll(`:scope > [${sr}]`)) {
		for (let e of Mi(t)) e.finish();
		t.style.opacity = "0";
	}
}
function ns(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${sr}]`)) if (!Yo(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of Mi(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function rs(e, t = "smart", { initial: n = !1 } = {}) {
	let r = is.get(e);
	return r || (r = as(e, t, n), is.set(e, r)), r;
}
var is = /* @__PURE__ */ new WeakMap();
function as(e, t, n) {
	let r = e.parentElement, i = Wo(t);
	if (Yo(e)) {
		r && Qo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && qo.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Jo(e, t)) : (r && qo.delete(r), n ? Promise.resolve() : Jo(e));
	}
	if (n || !r) return Promise.resolve();
	let a = ns(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return qo.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Jo(e, 0, t, a);
	}
	$o(e, r);
	let o = Ca(e, r, i, (e) => Ja(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return qo.set(r, o), o.kind === "instant" ? (ts(r), Promise.resolve()) : o.kind === "sequence" ? es(e, o) : o.kind === "wipe" ? vs(e, o, !0) : Jo(e, o.delay, o.duration, 0, o.enter);
}
function os(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function ss(e, t = os(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(sr, ""), t;
}
var cs = /* @__PURE__ */ new WeakMap();
function ls(e, t) {
	let n = e.querySelector(`:scope > [${$n}]:not([${sr}])`);
	if (!n) return;
	let r = cs.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && us(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: _r,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	cs.set(e, u), Ko(l).then(() => {
		cs.get(e) === u && us(e, u);
	});
}
function us(e, { overflow: t, boxSizing: n }) {
	cs.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function ds(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of Mi(e)) t.cancel();
	_s(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Yo(e) && Qo(i);
	let a = ss(e, t), o = (t, n) => ki() ? Ko(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && qo.get(i), n = Ai() || t?.kind === "instant";
		if (i && !n && ls(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Yo(e) ? fs(e, t) : t?.kind === "wipe" && Yo(e) ? vs(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function fs(e, t) {
	for (let t of e.querySelectorAll(`[${tr}], [${nr}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${tr}] [${lr}]`)].filter((e) => !e.parentElement?.closest(`[${lr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${rr}]`)].flatMap(Qi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Ko(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Go);
}
var ps = 100, ms = /* @__PURE__ */ new WeakMap();
function hs(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function gs(e, t) {
	hs(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function _s(e) {
	ms.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function vs(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? hs(e, i(t, r)) : a ? hs(e, a(t, r)) : gs(e, i(t, r));
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
			if (e - i > ps && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), ms.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + ps);
		ms.set(e, l), c();
	}).then((t) => {
		if (_s(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Jo(e, 0, r, t) : Ko(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var ys = X.createContext({}), bs = X.createContext(null), xs = () => X.useContext(ys), Ss = () => X.useContext(bs), Cs = () => xs().reveal;
function ws({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = Nr({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && Br(n);
	}, [n]), (0, Z.jsx)(ys.Provider, {
		value: t,
		children: (0, Z.jsxs)(bs.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var Ts = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Es = () => X.useInsertionEffect(() => (Dr(), Or), []), Ds = Number("19.3.1".split(".")[0]) >= 19, Os = () => {
	let { nonce: e } = xs();
	return Ds ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: Cr
	}) : null;
}, ks = Ds ? { inert: !0 } : { inert: "" }, As = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[lr]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, As(e.props.children)) : e;
}), js = () => () => {}, Ms = () => X.useSyncExternalStore(js, () => !1, () => !0), Ns = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = xs(), s = Ss(), c = Ms(), l = kr;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), Ts(() => {
		if (!a.current) return;
		let e = new go(a.current, {
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
			[er]: "",
			"aria-hidden": !0,
			...ks,
			children: [
				(0, Z.jsx)("div", {
					[tr]: "",
					children: As(e)
				}),
				(0, Z.jsx)("div", { [nr]: "" }),
				(0, Z.jsx)("div", { [rr]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, Ps = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = Cs();
	return Ts(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), rs(c.current, l, { initial: !r }).then(s), o && (e.memory = new vo(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), Ts(() => {
		!i || !c.current || ds(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[$n]: "",
		children: e
	});
}, Fs = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = os(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Is(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	Es();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	Ts(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[lr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(Ns, {
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
	if (Ts(() => {
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
	Ts(() => {
		te.current = e.onReveal;
	});
	let w = y.key === "content" && y.from === "skeleton" ? () => te.current?.() : void 0, T = (e) => ee((t) => t.filter((t) => t.id !== e)), E = [...x.map((e) => (0, Z.jsx)(Ps, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => T(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(Ps, {
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
		[Qn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Os, {}), (0, Z.jsx)(Fs, {
			exiting: x.map((e) => e.id),
			registry: S,
			children: E
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Ls = {
	creators: [Y("follow:followOverview.creators"), Y("follow:followOverview.creatorUnit")],
	enabled: [Y("follow:followOverview.enabledSources"), ""],
	failed: [Y("follow:followCheck.checkFailed"), Y("follow:followOverview.sourceUnit")],
	updates: [Y("follow:followOverview.unwatchedUpdates"), Y("follow:followOverview.itemUnit")],
	subscriptions: [Y("follow:feedSources.footerLabel"), Y("follow:followOverview.actressUnit")],
	releases: [Y("follow:followOverview.unwatchedReleases"), Y("follow:followOverview.itemUnit")]
}, Rs = {
	duration: 0,
	delay: 0,
	hold: 150
}, zs;
function Bs() {
	return zs || (zs = new CSSStyleSheet(), zs.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), zs;
}
function Vs({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Hs({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Ls[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Bs();
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
		}) : /* @__PURE__ */ (0, Z.jsx)(ws, {
			reveal: Rs,
			children: /* @__PURE__ */ (0, Z.jsx)(Is, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: Y("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(Vs, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Us = (e) => O.some(([t]) => t === e);
function Ws(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Us(e.tab) ? e.tab : "list"), [d, f] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [p, m] = (0, X.useState)(() => Ct(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => Ct(e.sort, e.dir).dir), [_, v] = (0, X.useState)(nt(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(ut(e.pageSize)), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, w] = (0, X.useState)(/* @__PURE__ */ new Set()), T = Bt({
		queryKey: D,
		queryFn: ({ signal: e }) => qe(e)
	}), k = Bt({
		queryKey: E,
		queryFn: ({ signal: e }) => Ge(e)
	}), A = Bt({
		queryKey: te,
		queryFn: ({ signal: e }) => Ke(e)
	}), j = T.data || { sources: [] }, M = k.data || {
		root: "",
		providers: []
	}, N = j.sources;
	(0, X.useEffect)(() => {
		ee((e) => {
			let t = it(e, N);
			return t.size === e.size ? e : t;
		});
	}, [N]);
	let P = (e) => {
		let n = e.sort ?? p, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? d,
			sort: n === "checked" ? "" : n,
			dir: r === ie[n] ? "" : r
		});
	}, F = et(N), I = N.filter(tt).length, L = N.filter((e) => e.enabled).length, R = (M.providers || []).filter((e) => e.requirement === "required" && !Le(e)).length, ne = new Set((A.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(Ut, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(z, {
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
			className: B,
			"aria-label": Y("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "creators",
					figure: T.data ? F.length : void 0,
					failed: T.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "enabled",
					figure: T.data ? L : void 0,
					total: N.length,
					failed: T.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "failed",
					figure: T.data ? I : void 0,
					failed: T.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "updates",
					figure: T.data ? j.counts?.new || 0 : void 0,
					failed: T.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "subscriptions",
					figure: A.data ? ne : void 0,
					failed: A.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Hs, {
					field: "releases",
					figure: A.data ? A.data.unread || 0 : void 0,
					failed: A.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Z.jsx)(ce, {
						group: "follow",
						label: Y("follow:followManagePage.sectionTabs"),
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: O.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							ee(/* @__PURE__ */ new Set()), w(/* @__PURE__ */ new Set()), l(e), P({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(Hn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), P({ tab: "add" });
						},
						selection: {
							ids: S,
							onChange: w,
							onActivate: () => ee(/* @__PURE__ */ new Set())
						}
					}), T.data ? /* @__PURE__ */ (0, Z.jsx)(Zn, {
						data: j,
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
							l("add"), P({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), f(1), P({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							f(e), P({ page: e });
						},
						onSelected: (e) => {
							ee(e), w(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), f(1), n({ layout: e }), P({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), f(1), n({ pageSize: e }), P({ page: 1 });
						}
					}) : T.isError ? /* @__PURE__ */ (0, Z.jsx)(z, {
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
						k.data && T.data ? /* @__PURE__ */ (0, Z.jsx)(dn, {
							data: j,
							credentials: M,
							readOnly: a,
							toast: r
						}) : k.isError || T.isError ? /* @__PURE__ */ (0, Z.jsx)(z, {
							tone: "error",
							children: Y("follow:followManagePage.credentialsFailed")
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(gn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								A.refetch(), l("list"), P({ tab: "list" });
							}
						}),
						T.data ? /* @__PURE__ */ (0, Z.jsx)(kn, {
							groups: j.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: j.alias_suggestions || [],
							sources: j.sources
						}) : null
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, Z.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Z.jsx)(pe, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsx)(u, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: R ? Y("follow:followManagePage.feedSettingsPending", { count: R }) : Y("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { Ws as FollowManagePage };

//# debugId=bbb2a66f-9c83-421a-99d5-279c8feb4986