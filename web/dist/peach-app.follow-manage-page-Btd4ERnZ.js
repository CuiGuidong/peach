(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "acd0ab68-fd54-47e4-9bc7-be69e8972219", e._sentryDebugIdIdentifier = "sentry-dbid-acd0ab68-fd54-47e4-9bc7-be69e8972219");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, ApiError as h, Button as g, ButtonLink as ee, Bx as _, Checkbox as v, ChevronSortDown as te, Chip as y, DataTableFooter as ne, DataTableFrame as b, DataTableSort as re, EmptyFocusButton as x, EmptyState as S, ErrorText as C, ExternalLink as w, FEEDS_KEY as T, FOLLOW_CREDENTIALS_KEY as E, FOLLOW_MANAGE_KEY as D, FOLLOW_MANAGE_NAV as O, FOLLOW_RESOLVE_KEY as k, FieldLabel as A, Help as j, Input as M, LoadingDots as N, M6 as P, MENU_ITEM as F, MENU_ITEM_INTERACTIVE as I, MENU_POPOVER_SURFACE as L, ModalFrame as R, Note as z, P7 as B, SORT_DEFAULT_DIR as V, STAT_STRIP_SIX as H, SelectionDock as U, SelectionPopover as W, SiteLabel as ie, Switch as ae, Table as oe, TableColumnControls as se, TableColumnResizer as ce, TableSelectionHeader as le, TagManager as G, TaskProgress as ue, Wt as de, Xf as fe, __toESM as pe, addAlias as me, addSource as he, avatarInner as K, busyProps as q, cardClass as ge, checkFeeds as _e, columnVisibilityFeature as ve, confirmModal as ye, createColumnHelper as be, credentialDone as xe, cx as J, dZ as Se, errorHeadline as Y, errorMessage as X, feedIntervalText as Ce, fetchCredentials as we, fetchFeeds as Te, fetchFollow as Ee, fetchResolveJob as De, fetchSuggestions as Oe, flexRender as ke, followFeedByName as Ae, followSuggestKey as je, groupByAuthor as Me, isBroken as Ne, isLayout as Pe, keepSelected as Fe, localTime as Ie, lookupFeedActor as Le, mapLimit as Re, pageSizeOf as ze, pageWindow as Be, pv as Ve, queryClient as He, reloadFollowManage as Ue, removeAlias as We, removeFeed as Ge, renameAliasGroup as Ke, require_jsx_runtime as qe, require_react as Je, resolveFollowSort as Ye, rowPaginationFeature as Xe, rowSelectionFeature as Ze, rowSortingFeature as Qe, setFeedEnabled as $e, startCheck as et, startResolve as tt, tableFeatures as nt, useAction as rt, useBackgroundJob as it, useMutation as at, useQuery as ot, useTable as st, useTablePreferences as ct } from "./peach-app.js";
import { Page as lt } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as ut } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as dt } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as ft, SourceIcon as pt } from "./peach-app.source-view-Cr-fzNHo.js";
import { SourceList as mt } from "./peach-app.source-list-BPZPYgyw.js";
// src/react/follow-manage/add-source.tsx
var Z = /* @__PURE__ */ pe(Je(), 1), Q = qe(), ht = J(F, I, "text-body-2-medium"), gt = "Paste a source link, or type a creator name or id…", _t = "Add a creator follow", vt = "Searching (the first name lookup downloads the creator index and may take tens of seconds)", yt = "Identifying", bt = "The in-site lookup found no source", xt = "/settings/subscriptions", St = (e, t) => `${e}:${t.url}`;
function Ct({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Z.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, Q.jsxs)(i, {
		ref: t,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": "Source suggestions",
		className: J(L, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Q.jsx)(N, { label: "Searching suggestions" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Q.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? J(ht, "bg-background-secondary-default") : ht,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
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
		})] }, `${e.group}-${e.value}`))]
	});
}
function wt({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "All sources" : `${i}/${r.length} sources`;
	return /* @__PURE__ */ (0, Q.jsx)(W, {
		label: "Source filter",
		triggerLabel: a,
		leadingIcon: m,
		empty: "'No sources available yet'",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(pt, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "Select all",
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "Deselect all",
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: "Credential setup",
				href: xt
			}
		]
	});
}
function Tt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(z, {
		tone: "error",
		title: e.line,
		children: e.error || "Lookup failed"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: ge({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = St(t, e);
				return /* @__PURE__ */ (0, Q.jsx)(v, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(pt, { provider: e.provider }),
							/* @__PURE__ */ (0, Q.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Q.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "Already followed" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Q.jsx)(j, { children: bt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Q.jsx)(w, {
					href: e.url,
					children: `${e.label}: ${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Q.jsx)(j, { children: o.map(([e, t]) => `${e}: ${t}`).join("; ") }) : null
		]
	});
}
function Et({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(!1), [m, h] = (0, Z.useState)(null), [ee, _] = (0, Z.useState)(-1), v = (0, Z.useRef)(null), te = (0, Z.useRef)(null), [y, ne] = (0, Z.useState)(/* @__PURE__ */ new Set()), [b, re] = (0, Z.useState)(/* @__PURE__ */ new Set()), [x, S] = (0, Z.useState)(""), [C, w] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let T = ot({
		queryKey: je(u),
		queryFn: ({ signal: e }) => Oe(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), E = (0, Z.useMemo)(() => (T.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [T.data]), { job: D, running: O, outcome: j, start: N, dismiss: P } = it({
		queryKey: k,
		queryFn: ({ signal: e }) => De(e),
		start: (e) => tt([e]),
		onStarted: () => re(/* @__PURE__ */ new Set()),
		onError: (e) => S(X(e)),
		onFinish: (e) => {
			e.status === "failed" && S(e.error || "Lookup failed");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || O || N.isPending || (S(""), _(-1), l(t), a(t), d(""), h(t), N.mutate(t));
	}, I = T.isFetching, L = f && !o && m !== i && (E.length > 0 || I), R = () => {
		_(-1), h(i);
	}, B = (e) => {
		if (!(o || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229)) {
			if (e.key === "Escape" && L) R();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!E.length) return;
				if (e.preventDefault(), !L) {
					h(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				_((e) => {
					let n = e + t;
					return n < 0 ? E.length - 1 : n >= E.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(E[ee]?.value || i));
		}
	}, V = j?.results || [], H = V.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !y.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: St(t, e)
	})).filter((e) => !b.has(e.key))), U = at({
		mutationFn: async (e) => {
			let t = [], n = [];
			w(0);
			for (let r of e) {
				try {
					let e = await he(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}: ${X(e)}`);
				}
				w((e) => e + 1);
			}
			if (n.length) try {
				await et(n);
			} catch (e) {
				t.push(X(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Ue(), e.failures.length ? S(e.failures.join("; ")) : (S(""), P(), r(`Added ${e.sources.length} follow sources`));
		},
		onError: (e) => S(X(e))
	}), W = e.suggestions || [], ie = !c.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": _t,
		className: ge({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: _t
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: v,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !te.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "Source link, name, or id",
							placeholder: gt,
							value: i,
							leadingIcon: Ve,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), _(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: B
						}), L ? /* @__PURE__ */ (0, Q.jsx)(Ct, {
							field: v,
							menu: te,
							options: E,
							active: ee,
							busy: I,
							onPick: F,
							onClose: R
						}) : null]
					}),
					/* @__PURE__ */ (0, Q.jsx)(wt, {
						credentials: t,
						hidden: y,
						onHidden: ne
					}),
					/* @__PURE__ */ (0, Q.jsx)(g, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(O || N.isPending),
						onClick: () => F(i),
						children: "Find"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [O || N.isPending ? /* @__PURE__ */ (0, Q.jsx)(ue, {
					embedded: !0,
					label: D?.message || (D?.total ? `Searching: ${D.checked || 0}/${D.total}` : ie ? vt : yt),
					value: D?.checked,
					total: D?.total
				}) : null, x ? /* @__PURE__ */ (0, Q.jsx)(z, {
					tone: "error",
					title: "This run did not finish",
					children: x
				}) : null]
			}),
			V.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(A, { children: "Lookup results" }),
					V.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(Tt, {
						row: e,
						at: t,
						hidden: y,
						unpicked: b,
						onPick: (e, t) => {
							let n = new Set(b);
							t ? n.delete(e) : n.add(e), re(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(g, {
								variant: "secondary",
								size: "small",
								onClick: () => P(),
								children: "Off"
							}),
							/* @__PURE__ */ (0, Q.jsx)(g, {
								variant: "primary",
								size: "small",
								disabled: n || !H.length,
								...q(U.isPending),
								onClick: () => U.mutate(H),
								children: `Add selected (${H.length})`
							}),
							U.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `Adding… ${C}/${H.length}`
							}) : null
						]
					})
				]
			}) : null,
			W.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "Guess you like"
				}), W.map((e) => /* @__PURE__ */ (0, Q.jsx)(g, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `Appeared ${e.visits} times in browsing history${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => F(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Dt = "Enter a performer name to find her performer page on JavDB", Ot = "Add JAV subscription";
function kt(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `The selected cards belong to different people in the database: ${[...n.values()].join(", ")}. Merge them first, then follow`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `It will file under "${r}"`,
		blocked: !1
	} : e.known ? {
		text: `It will be filed under "${e.known.name}" in the database`,
		blocked: !1
	} : {
		text: `"${e.q}" is not in the database yet; a new person will be created`,
		blocked: !1
	};
}
function At({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(v, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join(", ")
					}),
					e.record ? /* @__PURE__ */ (0, Q.jsx)(y, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Q.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `Already filed under "${e.held_by.name}"`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function jt({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Z.useState)(""), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = rt(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => Le(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => Ae(a.q, [...s], e), (e) => {
			t(e.created ? `Created "${e.entity_name}" and subscribed to her new releases` : `Subscribed to new releases of "${e.entity_name}"`), i(""), f(), n();
		});
	}, m = a ? kt(a, s) : null;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Ot,
		className: ge({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Ot
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Q.jsx)(M, {
						"aria-label": "Performer name",
						placeholder: Dt,
						value: r,
						leadingIcon: Ve,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Q.jsx)(g, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: u,
					children: "Find"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
				tone: "error",
				title: "This run did not finish",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(A, { children: "Performer card on JavDB" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(At, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Q.jsx)(j, { children: "That name returned nothing on JavDB." }),
					a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(j, {
						role: "status",
						children: s.size ? m.text : "Check her performer card; if both the censored and uncensored records are her, check both."
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							onClick: f,
							children: "Off"
						}), a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "primary",
							size: "small",
							disabled: e || !s.size || m.blocked,
							...q(l.busy === "follow"),
							onClick: p,
							children: `Add subscriptions (${s.size})`
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function Mt({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(R, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "Edit the canonical name",
		children: e ? /* @__PURE__ */ (0, Q.jsx)(Nt, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Nt({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Z.useState)(e.canonical_name), o = rt();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => Ke(e.canonical_key, i.trim(), t), () => {
				Ue(), n(`Changed the canonical name to ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "Edit the canonical name"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["Current name:", e.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, {
				"aria-label": "Canonical name",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "Pick an existing alias" }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(g, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "The original name is kept as an alias; linked profiles and video credits update together."
			}),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(g, {
					variant: "secondary",
					onClick: t,
					children: "Cancel"
				}), /* @__PURE__ */ (0, Q.jsx)(g, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...q(!!o.busy),
					children: "Edit the canonical name"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Pt = (e) => `The alias "${e}" will be removed and its source restored to a standalone creator group.`, Ft = nt({
	rowSelectionFeature: Ze,
	rowSortingFeature: Qe,
	rowPaginationFeature: Xe,
	columnVisibilityFeature: ve,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), It = Ft, Lt = {
	id: "select",
	label: "Select",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Rt = {
	id: "canonical",
	label: "Canonical name",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, zt = [
	Lt,
	Rt,
	{
		id: "alias",
		label: "Platform alias",
		width: 240
	},
	{
		id: "evidence",
		label: "Basis",
		width: 320
	},
	{
		id: "actions",
		label: "Actions",
		width: 112
	}
], Bt = [
	Lt,
	Rt,
	{
		id: "aliases",
		label: "Platform alias",
		width: 400
	},
	{
		id: "actions",
		label: "Actions",
		width: 184,
		min: 168
	}
], Vt = (e) => e.alias;
function Ht(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Ut({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(ft, {
			group: Ht(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Wt({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = ct("alias-suggestions", zt), f = ct("alias-saved", Bt), [p, m] = (0, Z.useState)(null), [ee, _] = (0, Z.useState)({}), [y, w] = (0, Z.useState)({}), T = n(() => _({})), E = n(() => w({})), [D, O] = (0, Z.useState)([]), [k, j] = (0, Z.useState)([]), [N, P] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [F, I] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), L = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(t.length / N.pageSize) - 1))
	}, R = {
		...F,
		pageIndex: Math.min(F.pageIndex, Math.max(0, Math.ceil(e.length / F.pageSize) - 1))
	}, [z, V] = (0, Z.useState)(""), [H, W] = (0, Z.useState)(""), [ie, ae] = (0, Z.useState)(""), G = at({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await me(n.canonical, n.alias);
				} catch (n) {
					t && Ue();
					let r = e.length - t;
					throw new h(`${X(n)} (${r} group${r === 1 ? "" : "s"} left unmerged)`, 200);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			V(""), _({}), Ue(), u(`Merged ${e.done} creator alias groups`);
		},
		onError: (e) => V(X(e))
	}), ue = at({
		mutationFn: (e) => me(e.canonical, e.alias),
		onSuccess: () => {
			V(""), W(""), ae(""), Ue(), u("Creator aliases saved");
		},
		onError: (e) => V(X(e))
	}), de = at({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await We(e), n += 1;
			} catch (e) {
				throw Error(`${X(e)} (removed ${n} aliases, ${t.length - n} left unremoved)`);
			} finally {
				Ue();
			}
		},
		onSuccess: () => {
			V(""), w({}), u("Removed the creator alias");
		},
		onError: (e) => V(X(e))
	}), pe = (e, t) => {
		e.length && ye({
			title: t ? "Merge all creator aliases" : "Merge selected creator aliases",
			body: `Will merge the following ${e.length} creator groups: ${e.map((e) => `"${e.alias}" into "${e.canonical}"`).join("; ")}.`,
			confirmLabel: t ? "Merge all aliases" : "Merge selected aliases",
			onConfirm: () => G.mutateAsync(e)
		});
	}, he = (e) => void ye({
		title: "Remove creator alias",
		body: Pt(e),
		confirmLabel: "Remove creator alias",
		onConfirm: () => de.mutateAsync(e)
	}), K = (0, Z.useRef)({
		sources: r,
		readOnly: i,
		merging: G.isPending,
		removing: de.isPending,
		merge: pe,
		remove: he,
		rename: m
	});
	K.current = {
		sources: r,
		readOnly: i,
		merging: G.isPending,
		removing: de.isPending,
		merge: pe,
		remove: he,
		rename: m
	};
	let _e = (0, Z.useMemo)(() => {
		let e = be();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e.table,
					label: "Select all pending-merge aliases"
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `Choose alias ${e.row.original.alias} to merge into ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "Canonical name",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ut, {
					sources: K.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "Platform alias",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "Basis",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "Actions",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(g, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					...q(K.current.merging),
					onClick: () => K.current.merge([e.row.original], !1),
					children: "Merge"
				})
			})
		]);
	}, []), ve = (0, Z.useMemo)(() => {
		let e = be();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e,
					label: "Select all saved aliases"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					"aria-label": `Select saved alias ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "Canonical name",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ut, {
					sources: K.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "Platform alias",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: B,
							"aria-label": `Remove alias ${e.name}`,
							disabled: K.current.readOnly,
							...q(K.current.removing),
							onClick: () => K.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "Actions",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(g, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					"aria-label": `Edit the canonical name of ${e.original.canonical_name}`,
					onClick: () => K.current.rename(e.original),
					children: "Edit the canonical name"
				})
			})
		]);
	}, []), xe = st({
		features: Ft,
		data: t,
		columns: _e,
		getRowId: Vt,
		state: {
			rowSelection: ee,
			sorting: D,
			pagination: L,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			T(), _(e);
		},
		onSortingChange: (e) => {
			O(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P,
		enableRowSelection: !0
	}), J = st({
		features: It,
		data: e,
		columns: ve,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
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
	}), Se = xe.getSelectedRowModel().rows.map((e) => e.original), Y = J.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Ce = q(G.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: ge({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "Creator aliases"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "Add an alias manually" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "Canonical name",
							placeholder: "The name shown consistently across Peach",
							value: H,
							onChange: W,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "Platform alias",
							placeholder: "Platform alias",
							value: ie,
							onChange: ae,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "primary",
							disabled: i || !H.trim() || !ie.trim(),
							...q(ue.isPending),
							onClick: () => ue.mutate({
								canonical: H.trim(),
								alias: ie.trim()
							}),
							children: "Save alias"
						})
					]
				})]
			}),
			z ? /* @__PURE__ */ (0, Q.jsx)(C, { children: z }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "Pending merge" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} groups`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(g, {
									variant: "primary",
									size: "small",
									disabled: i,
									...Ce,
									onClick: () => pe(t, !0),
									children: `Merge all (${t.length})`
								}),
								/* @__PURE__ */ (0, Q.jsx)(re, {
									label: "Creator aliases pending merge",
									sorting: D,
									options: [
										{
											id: "canonical",
											label: "Canonical name"
										},
										{
											id: "alias",
											label: "Platform alias"
										},
										{
											id: "evidence",
											label: "Basis"
										}
									],
									onChange: (e) => {
										O(e), P((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(se, {
									preferences: d,
									label: "Creator aliases pending merge"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(U, {
						label: "Pending-merge alias bulk actions",
						visible: Se.length > 0,
						count: `${Se.length} groups selected`,
						children: [/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Ce,
							onClick: () => pe(Se, !1),
							children: `Merge selected (${Se.length})`
						}), /* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "ghost",
							size: "small",
							onClick: () => _({}),
							children: "Clear selection"
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(b, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => xe.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
							"aria-label": "Creator aliases pending merge",
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => xe.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [xe.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [ke(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "Row empty space",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: xe.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: ke(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(ne, {
						label: "Creator aliases pending merge",
						unit: "groups",
						total: t.length,
						pagination: L,
						onChange: P
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "Saved aliases" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} groups`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(re, {
								label: "Saved creator aliases",
								sorting: k,
								options: [{
									id: "canonical",
									label: "Canonical name"
								}, {
									id: "aliases",
									label: "Platform alias"
								}],
								onChange: (e) => {
									j(e), I((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(se, {
								preferences: f,
								label: "Saved creator aliases"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(U, {
						label: "Saved alias bulk actions",
						visible: Y.length > 0,
						count: `Selected ${Y.length} aliases`,
						children: [/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...q(de.isPending),
							onClick: () => void ye({
								title: "Remove selected creator aliases",
								body: `Will remove the following ${Y.length} aliases, restoring their sources as separate creator groups.`,
								items: Y,
								confirmLabel: "Remove selected aliases",
								onConfirm: () => de.mutateAsync(Y)
							}),
							children: `Remove selected aliases (${Y.length})`
						}), /* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: "Clear selection"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(b, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => J.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
							"aria-label": "Saved creator aliases",
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => J.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [J.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [ke(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "Row empty space",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: J.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: ke(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(ne, {
						label: "Saved creator aliases",
						unit: "groups",
						total: e.length,
						pagination: R,
						onChange: I
					})] }) : /* @__PURE__ */ (0, Q.jsx)(S, {
						size: "compact",
						icon: fe,
						title: "No saved creator aliases yet",
						actions: i ? void 0 : /* @__PURE__ */ (0, Q.jsx)(x, {
							target: "input[aria-label=\"Canonical name\"]",
							children: "Add alias"
						}),
						children: "Fill in the unified name plus the names this creator uses on other platforms."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Mt, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Gt = nt({
	rowPaginationFeature: Xe,
	rowSelectionFeature: Ze,
	rowSortingFeature: Qe,
	columnVisibilityFeature: ve,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Kt = {
	select: "Select",
	name: "Name",
	kind: "Kind",
	origin: "Source",
	status: "State",
	interval: "Frequency",
	fetched: "Last fetch",
	fresh: "Last additions",
	actions: "Actions"
}, qt = /* @__PURE__ */ new Set(["actions"]), Jt = Object.entries(Kt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Yt = () => He.invalidateQueries({
	queryKey: T,
	exact: !0
}), $ = (e) => e.name || e.url;
function Xt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Zt({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(y, {
		variant: "caption",
		color: "rose",
		children: "Fetch failed"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(y, {
		variant: "caption",
		color: "lime",
		children: "Normal"
	}) : /* @__PURE__ */ (0, Q.jsx)(y, {
		variant: "caption",
		color: "gray",
		children: "Unchecked"
	}) : /* @__PURE__ */ (0, Q.jsx)(y, {
		variant: "caption",
		color: "gray",
		children: "Paused"
	});
}
function Qt({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${ut}`,
		dangerouslySetInnerHTML: { __html: K($(e), t, null, "performer") }
	});
}
var $t = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function en(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function tn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return ye({
		title: n ? "Remove feed" : `Remove ${e.length} follow sources`,
		body: n ? `Will remove the feed "${$(n)}"; its new releases will no longer be pulled, and new releases already fetched are kept.` : "The selected sources will be removed and their new releases will no longer be fetched; new releases already fetched are kept.",
		confirmLabel: n ? "Remove feed" : "Remove selected feeds",
		danger: !0,
		onConfirm: t
	});
}
function nn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = ot({
		queryKey: T,
		queryFn: ({ signal: e }) => Te(e)
	}), u = rt(), d = ct("jav-feeds", Jt), f = i.data, m = (0, Z.useMemo)(() => f?.sources ?? [], [f]), [h, ee] = (0, Z.useState)(/* @__PURE__ */ new Set()), y = r?.ids ?? h, x = r?.onChange ?? ee, [w, E] = (0, Z.useState)(1), [D, O] = (0, Z.useState)(20), [k, A] = (0, Z.useState)([]), M = Be(m.length, D, w);
	(0, Z.useEffect)(() => {
		E((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Z.useEffect)(() => {
		x((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, x]);
	let N = at({
		mutationFn: async (e) => {
			let t = await Re(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ge(t) : await $e(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (x(/* @__PURE__ */ new Set()), Yt(), e.action === "remove" && r && t(`Removed ${r} follow sources`), n.length) {
				let e = n[0];
				u.setError(`${n.length} not written: ${e.ok ? "" : X(e.error)}`);
			}
		},
		onError: (e) => u.setError(X(e))
	}), F = (0, Z.useMemo)(() => en(m), [m]), I = (0, Z.useRef)({
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
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => $e(e.id, t, n), () => void Yt()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => _e(t, [e.id]), () => void Yt()),
		remove: (e) => void tn([e], async () => {
			await Ge(e.id), t(`Removed the follow source "${$(e)}"`), Yt();
		})
	};
	let L = (0, Z.useMemo)(() => {
		let e = be(), t = (e) => () => Kt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e.table,
					label: "Select all feeds on this page",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `Select ${$(e.row.original)}`
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = $t(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Qt, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: `On-site this page files under "${t}"`,
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
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
					title: "Open the source page",
					className: "text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(ie, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : Xt(e.getValue()),
						label: Xt(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(de, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "Fetch failed" : e.enabled ? "Enabled" : "Paused", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Zt, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ce(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Ie(e.row.original.last_fetched_at) : "Never fetched"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} items`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(ae, {
							"aria-label": `Enable ${$(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Se,
							"aria-label": `Fetch ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							...q(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": `Remove ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), R = (0, Z.useMemo)(() => Object.fromEntries([...y].map((e) => [String(e), !0])), [y]), B = st({
		features: Gt,
		data: m,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: R,
			sorting: k,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			A(e), E(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(R) : e;
			x(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
		tone: "error",
		title: "The follow source will not open",
		children: X(i.error)
	}) : /* @__PURE__ */ (0, Q.jsx)(j, { children: "Reading feed." });
	let V = () => void u.run("check", (e) => _e(e), () => void Yt()), H = (e) => {
		r?.onActivate(), x((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, W = m.filter((e) => y.has(e.id)), G = m.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": "JAV subscription list",
			className: ge({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV feed"
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${m.length.toLocaleString()} feeds - ${(Number(f.unread) || 0).toLocaleString()} unread`
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(g, {
								onClick: V,
								disabled: e,
								...q(u.busy === "check"),
								children: "Fetch now"
							}),
							/* @__PURE__ */ (0, Q.jsx)(se, {
								preferences: d,
								label: "JAV feed"
							}),
							/* @__PURE__ */ (0, Q.jsx)(re, {
								label: "JAV feed",
								sorting: k,
								onChange: (e) => {
									A(e), E(1);
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
									label: Kt[e]
								}))
							})
						]
					})]
				}),
				G.length || u.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [G.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "error",
						title: `${G.length.toLocaleString()} ${G.length === 1 ? "feed" : "feeds"} failed to fetch`,
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: G.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}: ${Y(e.last_error || "") || "reason not stated"}`
							}, e.id))
						}),
						children: "These feeds fetched no new entries this round."
					}) : null, u.error ? /* @__PURE__ */ (0, Q.jsx)(C, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(U, {
					visible: W.length > 0,
					label: "Feed bulk actions",
					count: `Selected ${W.length} ${W.length === 1 ? "follow source" : "follow sources"}`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => N.mutate({
								ids: W.map((e) => e.id),
								action: "enabled"
							}),
							children: "Enabled"
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => N.mutate({
								ids: W.map((e) => e.id),
								action: "paused"
							}),
							children: "Paused"
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "danger",
							size: "small",
							disabled: e,
							...q(N.isPending),
							onClick: () => void tn(W, () => N.mutateAsync({
								ids: W.map((e) => e.id),
								action: "remove"
							})),
							children: "Remove"
						}),
						/* @__PURE__ */ (0, Q.jsx)(g, {
							variant: "ghost",
							size: "small",
							onClick: () => x(/* @__PURE__ */ new Set()),
							children: "Clear selection"
						})
					]
				}),
				m.length ? /* @__PURE__ */ (0, Q.jsx)(b, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => H(Number(e)),
					children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
						"aria-label": "JAV feed",
						size: "sm",
						sortDescriptor: k[0] ? {
							column: k[0].id,
							direction: k[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => B.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [B.getHeaderGroups()[0].headers.map((e) => {
							let t = ke(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [qt.has(e.column.id) ? /* @__PURE__ */ (0, Q.jsx)(p, { children: t }) : /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(o, {
							id: "remaining-space",
							"aria-label": "Row empty space",
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: B.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: ke(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Q.jsx)(S, {
					icon: _,
					title: "No follow sources yet",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Q.jsx)(g, {
						variant: "secondary",
						onClick: n,
						children: "Add subscription"
					}),
					children: "Add by performer name under Add follow, or click Subscribe to new releases on a person page."
				}),
				m.length ? /* @__PURE__ */ (0, Q.jsx)(ne, {
					label: "JAV subscriptions",
					total: M.total,
					unit: "follow sources",
					pagination: {
						pageIndex: M.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						O(e.pageSize), E(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `Unwatched ${(Number(f.unread) || 0).toLocaleString()} · Enabled ${m.filter((e) => e.enabled).length.toLocaleString()} / ${m.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var rn = (e) => O.some(([t]) => t === e);
function an({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: ge({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: `${e} `
		}), /* @__PURE__ */ (0, Q.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function on(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Z.useState)(rn(e.tab) ? e.tab : "list"), [p, m] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, g] = (0, Z.useState)(() => Ye(e.sort, e.dir).sort), [_, v] = (0, Z.useState)(() => Ye(e.sort, e.dir).dir), [te, y] = (0, Z.useState)(Pe(e.layout) ? e.layout : "default"), [ne, b] = (0, Z.useState)(ze(e.pageSize)), [re, x] = (0, Z.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Z.useState)(/* @__PURE__ */ new Set()), k = ot({
		queryKey: D,
		queryFn: ({ signal: e }) => Ee(e)
	}), A = ot({
		queryKey: E,
		queryFn: ({ signal: e }) => we(e)
	}), j = ot({
		queryKey: T,
		queryFn: ({ signal: e }) => Te(e)
	}), M = k.data || { sources: [] }, N = A.data || {
		root: "",
		providers: []
	}, P = M.sources;
	(0, Z.useEffect)(() => {
		x((e) => {
			let t = Fe(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let n = e.sort ?? h, r = e.dir ?? _;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === V[n] ? "" : r
		});
	}, I = Me(P), L = P.filter(Ne).length, R = P.filter((e) => e.enabled).length, B = (N.providers || []).filter((e) => e.requirement === "required" && !xe(e)).length, U = new Set((j.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Q.jsxs)(lt, { children: [
		a ? /* @__PURE__ */ (0, Q.jsx)(z, {
			tone: "warning",
			title: "This machine is browse-only",
			extra: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					href: s,
					children: "Go to the writer instance to manage follows"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: H,
			"aria-label": "Follow overview",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "Follow creator",
					figure: I.length,
					unit: "people"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "Enable the source",
					figure: R,
					unit: `/ ${P.length}`
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "Check failed",
					figure: L,
					unit: "sources"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "Unwatched updates",
					figure: M.counts?.new || 0,
					unit: "items"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "JAV subscriptions",
					figure: U,
					unit: "people"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: "Unwatched new releases",
					figure: j.data?.unread || 0,
					unit: "items"
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				rn(t) && (x(/* @__PURE__ */ new Set()), C(/* @__PURE__ */ new Set()), l(t), F({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(dt, {
					"aria-label": "Follow management area",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: O.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(d, {
						id: e,
						"data-pill-selected": c === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Q.jsx)(nn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						selection: {
							ids: S,
							onChange: C,
							onActivate: () => x(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, Q.jsx)(mt, {
						data: M,
						sort: h,
						dir: _,
						page: p,
						layout: te,
						pageSize: ne,
						selected: re,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
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
							x(e), C(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							y(e), m(1), n({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), m(1), n({ pageSize: e }), F({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(Et, {
							data: M,
							credentials: N,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, Q.jsx)(jt, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								j.refetch(), l("list"), F({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, Q.jsx)(Wt, {
							groups: M.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: M.alias_suggestions || [],
							sources: M.sources
						})
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Q.jsx)(G, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(ee, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["Sources and subscription settings", B ? ` (${B})` : ""]
		}) })
	] });
}
export { on as FollowManagePage };

//# debugId=acd0ab68-fd54-47e4-9bc7-be69e8972219