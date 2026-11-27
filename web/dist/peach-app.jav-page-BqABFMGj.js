(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "54984a23-c4e5-4749-b8db-d0c54ca2a7e6", e._sentryDebugIdIdentifier = "sentry-dbid-54984a23-c4e5-4749-b8db-d0c54ca2a7e6");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $ea3928288112382f$export$439d29a4e110a164 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, $l as s, ActivityMotion as c, ArtSlot as l, Button as u, ButtonLink as d, Bx as f, COVER_STATE_TITLE as p, CatalogColumnFilterChips as m, CatalogPerformerTile as h, CatalogStudioTile as g, CatalogViewToggle as _, Checkbox as v, ChevronSortDown as y, Chip as b, CloudDownloadDialog as x, ColumnFilterAvatar as S, ColumnFilterPopover as C, ColumnFilterStudioAvatar as w, Combo as ee, CoverQueue as te, DISCOVERY_METADATA_KEY as T, DISCOVERY_SORTS as E, DOWNLOADS_KEY as D, DOWNLOADS_URL as O, DataTableFooter as ne, DataTableFrame as k, E3 as re, EmptyFocusButton as A, EmptyState as ie, FilterActionButton as j, FilterChoiceList as ae, FilterDropdown as oe, FilterGlassRows as se, FilterIconButton as M, FilterMenuScroll as ce, FilterTagStrip as le, FilterToolbarControls as ue, Gg as de, H7 as fe, Input as pe, JAV_CATALOG_TIERS as me, JAV_LAYOUTS as he, JAV_PAGE_BODY as N, JAV_RECOMMENDATION_GRID as ge, JAV_SELECTION_EVENT as P, JZ as _e, JavGlassSearch as ve, LibraryShortcuts as ye, LinkButton as F, M6 as be, MenuDialog as I, Note as L, ONLINE_COLUMNS as R, ONLINE_SORTS as z, ONLINE_STATUS as xe, ONLINE_TABLE_WIDTH as B, PHASES as V, Pagination as H, RELEASE_COLUMN_VISIBILITY_KEY as U, RELEASE_COLUMN_WIDTHS_KEY as W, RELEASE_PAGE_SIZES as G, RELEASE_SORTS as K, RELEASE_SORT_COLUMNS as q, SEGMENT as Se, SEGMENTED_TRACK as Ce, ScrapeSourceLabel as we, SegmentedRadioGroup as Te, Segments as Ee, Select as De, SelectItem as Oe, SelectionDock as ke, Shuffle as Ae, SiteLabel as J, SortKeys as je, SourceAvatar as Me, Table as Ne, TableColumnControls as Pe, TableColumnFilter as Fe, TableColumnRange as Ie, TableColumnResizer as Le, TableRangeFields as Re, TaskProgress as ze, WANTS_KEY as Be, WantMagnets as Ve, Wt as He, __toESM as Ue, activityKind as We, addWant as Ge, apiGet as Ke, appSettingsStore as qe, avatarInner as Je, busyProps as Ye, cachedMagnetStates as Xe, cardClass as Ze, cardRatio as Qe, catalogListSkeletonCellHtml as $e, columnRangeKinds as et, columnRangeSummary as tt, columnValueSelected as nt, composingKey as rt, controlDiscoveryMetadata as it, controlReleaseMetadata as at, coverArrived as ot, coverFetching as st, coverFetchingHtml as ct, coverReason as lt, coverStateAction as ut, coverUrl as dt, discoveryArtwork as ft, discoveryKey as pt, discoveryScore as mt, entityDisplayName as ht, entityPath as gt, entityWriting as _t, errorMessage as vt, fetchCoverNow as yt, fetchDiscoveries as bt, fetchDiscoveryMetadata as xt, fetchReleaseColumn as St, fetchReleases as Ct, fetchWants as wt, fmtDur as Tt, gridLayout as Et, hasSelectionModifier as Dt, invalidateWants as Y, javContentSkeleton as Ot, javLayout as kt, javSubscriptionPath as At, javTab as jt, javTagPlaceholdersHtml as Mt, jobText as Nt, joinList as Pt, keepPreviousData as Ft, lastSearchNote as It, leadingGraphemes as Lt, librarySuggest as Rt, logoUrl as zt, metadataInterval as Bt, onlineCatalogCardsHtml as Vt, onlineCatalogTiersHtml as Ht, onlineSorting as Ut, onlineStatus as Wt, outsideTableDateBound as Gt, pageWindow as Kt, pv as qt, qE as Jt, queryClient as Yt, readColumnFilters as Xt, recommendationScore as Zt, relayoutCovers as Qt, releaseColumnSelection as $t, releaseColumnValues as en, releaseColumns as tn, releaseDateQuery as nn, releaseFilters as rn, releaseKey as an, rememberPageSize as on, rememberedPageSize as sn, removeWants as cn, require_jsx_runtime as ln, require_react as un, resetWants as dn, resourceSourceKey as fn, restoreWants as pn, searchNote as mn, selectRange as hn, selectionSummary as gn, serverLabelList as _n, setReleaseColumn as vn, spriteGlyph as yn, storeJavLayout as bn, suppressShiftTextSelection as xn, t as X, takeJavSelection as Sn, textLang as Cn, tierPlaceholdersHtml as wn, toggleColumnValue as Tn, useAction as En, useCatalogView as Dn, useDatalistSuggest as On, useDense as kn, useEntityNames as An, useFilterScope as jn, useHorizontalScroller as Mn, useJavAddress as Nn, useQuery as Pn, useQueryClient as Fn, useRectangleSelection as In, useTablePreferences as Ln, useViewGlide as Rn, useWorkContextMenu as zn, wantName as Bn, wantsInterval as Vn, wireHorizontalScroller as Hn, withinColumnRange as Un, writeColumnFilters as Wn, writeJavQuery as Z } from "./peach-app.js";
import { JavBatchResources as Gn } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
import { ErrorLine as Kn } from "./peach-app.source-view-D-Xir163.js";
// src/react/jav/jav-selection.tsx
var Q = /* @__PURE__ */ Ue(un(), 1), $ = ln(), qn = (0, Q.createContext)(null), Jn = () => (0, Q.useContext)(qn);
function Yn(e) {
	let t = Jn();
	return In(e ? t?.selectRectangle : void 0, { selecting: !!t?.mode });
}
function Xn(e) {
	let t = Jn()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Zn({ children: e, readOnly: t, receipt: n, dock: r = !0 }) {
	let i = kn(), [a, o] = (0, Q.useState)(!1), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Map()), [l, d] = (0, Q.useState)([]), [f, p] = (0, Q.useState)(null), m = (0, Q.useRef)(null), h = (0, Q.useRef)(new URLSearchParams(location.search).get("tab") || ""), g = new Set(s.keys()), _ = gn(g, l.map((e) => e.code)), v = (0, Q.useCallback)((e) => {
		d((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), c((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), y = (0, Q.useCallback)(() => {
		o(!1), c(/* @__PURE__ */ new Map()), m.current = null;
	}, []), b = () => c((e) => {
		let t = new Map(e);
		return l.forEach((e) => _.all ? t.delete(e.code) : t.set(e.code, e)), t;
	}), x = (e, t) => {
		if (!a && !e.length) return;
		a || o(!0);
		let n = new Set(e);
		m.current = e.at(-1) ?? null, c((e) => new Map([...t ? e : [], ...l.filter((e) => n.has(e.code)).map((e) => [e.code, e])]));
	};
	(0, Q.useEffect)(() => {
		let e = (e) => {
			let t = e instanceof CustomEvent ? e.detail : void 0;
			t && t.tab !== h.current || (e.preventDefault(), a && !t?.enter ? y() : o(!0));
		};
		return window.addEventListener(P, e), () => window.removeEventListener(P, e);
	}, [a, y]), (0, Q.useEffect)(() => {
		Sn(location.search) && o(!0);
	}, []), (0, Q.useEffect)(() => (a || (c(/* @__PURE__ */ new Map()), m.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(a)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [a]), (0, Q.useEffect)(() => {
		if (!a) return;
		let e = (e) => {
			e.target.closest("input:not([type=\"checkbox\"],[type=\"radio\"]),textarea,[contenteditable]:not([contenteditable=\"false\"]),dialog,[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), c((e) => new Map([...e, ...l.map((e) => [e.code, e])]))));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		a,
		y,
		l
	]);
	let S = (e, t = !1) => {
		o(!0);
		let n = m.current;
		m.current = e.code, c((r) => {
			let i = new Set(r.keys());
			hn(i, l.map((e) => e.code), n, e.code, t);
			let a = new Map([
				...r,
				...l.map((e) => [e.code, e]),
				[e.code, e]
			]);
			return new Map([...i].map((e) => [e, a.get(e)]));
		});
	}, C = [...s.values()].filter((e) => !e.wanted && !e.asset_id), w = (() => {
		let e = /* @__PURE__ */ new Set(), t = [];
		return {
			key: "want",
			label: X("catalog:javSelection.addToWants"),
			reversal: "undo",
			confirm: (e) => ({
				title: X("catalog:javSelection.addToWants"),
				body: X("catalog:javSelection.wantConfirm", { count: e.length })
			}),
			run: async (n) => {
				try {
					for (let r of n) if (!e.has(r.code)) {
						try {
							let e = await Ge({ code: r.code });
							e?.created && t.push(e.want.id);
						} catch (t) {
							throw Error(X("catalog:javSelection.wantPartialFailed", {
								count: e.size,
								code: r.code,
								error: vt(t)
							}));
						}
						e.add(r.code), c((e) => {
							let t = new Map(e);
							return t.delete(r.code), t;
						});
					}
				} finally {
					Y();
				}
				return async () => {
					t.length && await cn(t), await Y();
				};
			},
			receipt: () => X("catalog:javSelection.wantAdded", { count: e.size })
		};
	})(), ee = { receipt: n };
	return /* @__PURE__ */ (0, $.jsxs)(qn.Provider, {
		value: {
			dense: i,
			mode: a,
			selected: g,
			toggle: S,
			visible: v,
			selectPage: b,
			selectRectangle: x,
			close: y,
			all: _.all,
			mixed: _.mixed
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-selection": "",
				"data-select-mode": a ? "" : void 0,
				className: "flex min-w-0 flex-col gap-4",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsxs)(ke, {
				visible: r && a,
				count: X("catalog:javSelection.selectedCount", { count: s.size }),
				label: X("catalog:javSelection.dockLabel"),
				actions: [{
					action: w,
					items: C,
					host: ee,
					disabled: t
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "secondary",
					disabled: !l.length,
					onClick: b,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `jav.selection.page.${_.all ? "clear" : "all"}`,
						children: _.all ? X("catalog:javSelection.deselectPage") : X("catalog:javSelection.selectPage")
					})
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "secondary",
					disabled: !s.size,
					onClick: () => p([...s.values()]),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "ghost",
					onClick: y,
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Gn, {
				items: f,
				close: () => p(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/wants/want-list.tsx
var Qn = {
	code: X("catalog:wants.originManual"),
	feed: X("catalog:entityHero.subscribeNewReleases"),
	follow: X("catalog:entityHero.following")
}, $n = [
	["all", X("catalog:shared.all")],
	["available", X("catalog:wants.hasMagnet")],
	["missing", X("catalog:wants.noMagnet")]
], er = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Qn[e.origin]
].filter(Boolean).join(" · ");
function tr({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-media-placeholder max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: X("catalog:shared.noCover")
		}), e.cover ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function nr({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: c, picked: l }) {
	let f = zn(), [p, m] = (0, Q.useState)([]), h = e.link || (!p.length && e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : ""), g = h && URL.canParse(h) ? new URL(h).hostname.replace(/^www\./, "") : "", _ = fn(e.follow_provider || g.split(".")[0] || ""), y = _ === "javdb" ? "JavDB" : _ === "javbus" ? "JavBus" : g, b = h && g && !p.some((e) => e.source === _) ? [{
		source: _,
		label: y,
		url: h
	}, ...p] : p, x = e.code && e.phase === "searching" ? It(e) : mn(e), S = b.map((e) => ({
		id: `source:${e.source}`,
		label: e.label,
		icon: He,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}));
	(e.phase === "searching" || e.phase === "given_up") && S.push({
		id: "resource",
		label: X("catalog:shared.searchTorrents"),
		icon: qt,
		run: a
	}), e.phase === "given_up" && S.push({
		id: "reset",
		label: X("catalog:wants.searchAgain"),
		icon: _e,
		disabled: t || !!n,
		run: r
	}), l && S.push({
		id: "select",
		label: X(l.on ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: fe,
		run: () => l.toggle(!l.on)
	}), S.push({
		id: "remove",
		label: X("catalog:shared.remove"),
		icon: be,
		danger: !0,
		disabled: t || !!n,
		run: i
	});
	let C = {
		key: e.id,
		operations: S
	};
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		"data-rectangle-key": e.id,
		onContextMenu: (e) => f.onContextMenu(e, C),
		onKeyDown: (e) => f.onKeyDown(e, C),
		className: Ze({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [
			f.menu,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
				children: [
					l ? /* @__PURE__ */ (0, $.jsx)(v, {
						slot: null,
						className: "mt-1 shrink-0 self-start",
						"aria-label": X("catalog:wants.selectRow", { name: Bn(e) }),
						isSelected: l.on,
						onChange: l.toggle
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(tr, { want: e }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("p", {
								className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
								children: [/* @__PURE__ */ (0, $.jsx)("b", {
									className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
									children: Bn(e)
								}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 truncate text-body-2-regular text-text-secondary",
									children: e.title
								}) : null]
							}),
							er(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: er(e)
							}) : null,
							x ? /* @__PURE__ */ (0, $.jsx)("p", {
								"data-want-note": "",
								className: "text-caption-1-regular text-text-secondary",
								children: x
							}) : null,
							e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(Kn, {
								text: e.scrape_error,
								prefix: X("catalog:wants.metadataNotFound"),
								tone: "muted"
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-want-actions": "",
								className: "mt-1 flex flex-wrap items-center gap-2",
								children: [
									b.map((e) => /* @__PURE__ */ (0, $.jsx)(d, {
										"data-button-link": "",
										variant: "secondary",
										size: "small",
										trailingIcon: He,
										href: e.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ (0, $.jsx)(we, {
											source: e.source,
											label: e.label
										})
									}, e.source)),
									e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(u, {
										variant: "secondary",
										size: "small",
										disabled: t,
										...Ye(n === `reset:${e.id}`),
										onClick: r,
										children: X("catalog:wants.searchAgain")
									}) : null,
									e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(u, {
										variant: "primary",
										size: "small",
										leadingIcon: qt,
										onClick: a,
										children: X("catalog:shared.searchTorrents")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(u, {
										variant: "danger",
										size: "small",
										leadingIcon: be,
										disabled: t,
										...Ye(n === `remove:${e.id}`),
										onClick: i,
										children: X("catalog:shared.remove")
									})
								]
							})
						]
					})
				]
			}),
			e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(Ve, {
				want: e,
				readOnly: t,
				downloads: o,
				provider: s,
				toast: c,
				onSources: m
			}) : null
		]
	});
}
function rr({ phase: e, label: t, rows: n, row: r, onRectangle: i, selecting: a }) {
	let [s, c] = (0, Q.useState)(1), [l, d] = (0, Q.useState)(20), [f, p] = (0, Q.useState)("all"), m = Xe(n), h = (e) => e.has_magnets ?? m.get(e.code || "") ?? !1, g = n.filter(h), _ = e !== "searching" || f === "all" ? n : n.filter((e) => h(e) === (f === "available")), v = In(_.length ? i : void 0, {
		selecting: a,
		start: "[data-want-items]"
	}), y = Kt(_.length, l, s);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: n.length.toLocaleString()
					})]
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(Te, {
					name: "want-magnet-filter",
					"aria-label": X("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: f,
					className: Ce,
					onChange: (e) => {
						p(e), c(1);
					},
					children: $n.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: Se,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? g.length : n.length - g.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			_.length ? null : /* @__PURE__ */ (0, $.jsx)(ie, {
				size: "compact",
				icon: Jt,
				title: X("catalog:wants.noFilterMatches"),
				actions: /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: () => {
						p("all"), c(1);
					},
					children: X("catalog:shared.viewAll")
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-rectangle-gutter": "",
				...v,
				children: /* @__PURE__ */ (0, $.jsx)("ul", {
					"data-want-items": "",
					className: "flex flex-col gap-4",
					children: _.slice(y.start, y.end).map(r)
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-want-pager": "",
				children: /* @__PURE__ */ (0, $.jsx)(ne, {
					label: t,
					total: y.total,
					pagination: {
						pageIndex: y.page - 1,
						pageSize: l
					},
					onChange: (e) => {
						d(e.pageSize), c(e.pageIndex + 1);
					},
					unit: X("catalog:wants.itemUnit")
				})
			})
		]
	});
}
function ir({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), c = En(), l = Pn({
		queryKey: Be,
		queryFn: ({ signal: e }) => wt(e),
		staleTime: 3e4,
		refetchInterval: Vn
	}), d = () => {
		let n = i.trim();
		n && !e && c.run("add", (e) => Ge({ code: n }, e), (e) => {
			t(e.created ? X("catalog:wants.added", { name: Bn(e.want) }) : X("catalog:wants.alreadyAdded", { name: Bn(e.want) })), a(""), Y();
		});
	}, f = (e) => {
		e.key === "Enter" && !rt(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		c.run(`remove:${e.id}`, (t) => cn([e.id], t), () => {
			t(X("catalog:wants.removed", { name: Bn(e) })), Y();
		});
	}, m = (e) => {
		c.run(`reset:${e.id}`, (t) => dn([e.id], t), () => {
			t(X("catalog:wants.backToSearching", { name: Bn(e) })), Y();
		});
	}, h = l.data, g = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), _ = Jn(), v = !!_?.mode, [y, b] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => {
		v || b(/* @__PURE__ */ new Set());
	}, [v]);
	let w = g.filter((e) => y.has(e.id)), ee = g.length > 0 && w.length === g.length, te = { receipt: t }, T = {
		key: "remove",
		label: X("catalog:shared.remove"),
		reversal: "undo",
		danger: !0,
		confirm: (e) => ({
			title: X("catalog:wants.removeMany"),
			body: X("catalog:wants.removeManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await cn(e.map((e) => e.id));
			return await Y(), async () => {
				await pn(t), await Y();
			};
		},
		receipt: (e) => X("catalog:wants.removedMany", { count: e.length })
	}, E = {
		key: "reset",
		label: X("catalog:wants.searchAgain"),
		reversal: "undo",
		confirm: (e) => ({
			title: X("catalog:wants.searchAgainMany"),
			body: X("catalog:wants.searchAgainManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await dn(e.map((e) => e.id));
			return await Y(), async () => {
				await pn(t), await Y();
			};
		},
		receipt: (e) => X("catalog:wants.searchAgainDone", { count: e.length })
	}, ne = w.filter((e) => e.code && (e.phase === "searching" || e.phase === "given_up")), k = Pn({
		queryKey: D,
		queryFn: ({ signal: e }) => Ke(`${O}?limit=100`, e),
		enabled: g.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), re = k.data?.providers.filter((e) => e.configured) || [], j = re[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": l.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Ze({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: X("catalog:wants.addByCode")
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, $.jsx)(pe, {
								"aria-label": X("catalog:shared.code"),
								placeholder: X("catalog:wants.codePlaceholder"),
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(u, {
							variant: "primary",
							disabled: e || !i.trim(),
							...Ye(c.busy === "add"),
							onClick: d,
							children: X("catalog:shared.add")
						})]
					}),
					c.error ? /* @__PURE__ */ (0, $.jsx)(L, {
						tone: "error",
						title: X("catalog:wants.actionFailed"),
						children: c.error
					}) : null
				]
			}),
			l.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				title: X("catalog:wants.loadFailed"),
				children: vt(l.error)
			}) : null,
			l.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: Ot("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(ze, {
				embedded: !0,
				kind: We("want-scrape"),
				label: X("catalog:wants.fetchingNew")
			}) : null,
			h?.searching ? /* @__PURE__ */ (0, $.jsx)(ze, {
				embedded: !0,
				kind: We("want-search"),
				label: X("catalog:wants.searchingResources")
			}) : null,
			k.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				title: X("catalog:wants.downloadSettingsFailed"),
				children: vt(k.error)
			}) : null,
			k.data && !re.length ? /* @__PURE__ */ (0, $.jsxs)(L, {
				tone: "neutral",
				children: [
					X("shell:downloadChannels.notConfigured"),
					X("shell:format.sentenceGap"),
					/* @__PURE__ */ (0, $.jsx)("a", {
						href: "/settings/downloads",
						children: X("shell:downloadChannels.settingsLink")
					})
				]
			}) : null,
			k.data && !k.data.available ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "neutral",
				children: X("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !g.length ? /* @__PURE__ */ (0, $.jsx)(ie, {
				size: "compact",
				icon: Jt,
				title: X(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: r,
					children: X("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(A, {
					target: `input[aria-label="${X("catalog:shared.code")}"]`,
					children: X("catalog:wants.addWork")
				}) : void 0,
				children: X(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			V.map(([n, r]) => {
				let i = g.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(rr, {
					phase: n,
					label: r,
					rows: i,
					selecting: v,
					onRectangle: _ && !c.busy ? (e, t) => b((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(nr, {
						want: n,
						readOnly: e,
						busy: c.busy,
						downloads: k.data,
						provider: j,
						toast: t,
						picked: v ? {
							on: y.has(n.id),
							toggle: (e) => b((t) => {
								let r = new Set(t);
								return e ? r.add(n.id) : r.delete(n.id), r;
							})
						} : void 0,
						onReset: () => m(n),
						onRemove: () => p(n),
						onCloudDownload: () => s({
							code: n.code || "",
							title: n.title || "",
							origin: `wishlist:${n.id}`,
							cover: n.cover || "",
							performers: n.performers || "",
							release_date: n.release_date || "",
							studio: n.studio || ""
						})
					}, n.id)
				}, n) : null;
			}),
			/* @__PURE__ */ (0, $.jsx)(x, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: j
			}),
			/* @__PURE__ */ (0, $.jsxs)(ke, {
				visible: v,
				label: X("catalog:wants.dockLabel"),
				count: X("catalog:javSelection.selectedCount", { count: w.length }),
				actions: [{
					action: T,
					items: w,
					host: te,
					disabled: e,
					done: () => b(/* @__PURE__ */ new Set())
				}, {
					action: E,
					items: w.filter((e) => e.phase === "given_up"),
					host: te,
					disabled: e,
					done: () => b(/* @__PURE__ */ new Set())
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "secondary",
					disabled: !g.length,
					onClick: () => b(ee ? /* @__PURE__ */ new Set() : new Set(g.map((e) => e.id))),
					children: X(ee ? "catalog:javSelection.deselectPage" : "catalog:wants.selectAll")
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "secondary",
					disabled: !ne.length,
					onClick: () => C(ne.map((e) => ({
						id: e.id,
						code: e.code,
						title: e.title || "",
						release_date: e.release_date || void 0
					}))),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "ghost",
					onClick: () => _?.close(),
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Gn, {
				items: S,
				close: () => C(null),
				readOnly: e,
				receipt: t
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function ar(e) {
	return e.id ? gt("performer", e.name, e.id) : e.source_url || At(e.name);
}
function or({ person: e, name: t, title: n, icon: r, onFilter: i }) {
	if (!t) return null;
	let a = e?.source_url && !e.id ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {}, o = X("catalog:entityHero.subscribeNewReleases"), s = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r ? /* @__PURE__ */ (0, $.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
	}) : null, /* @__PURE__ */ (0, $.jsx)("span", { children: t })] });
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i && e ? /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		"data-media-who": "",
		title: n,
		onClick: () => i(e),
		children: s
	}) : /* @__PURE__ */ (0, $.jsx)("a", {
		"data-media-who": "",
		href: ar(e ?? { name: t }),
		title: n,
		...a,
		children: s
	}), e?.source_url && (!e.id || i) ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: At(e.name),
		className: "inline-flex shrink-0 text-text-secondary hover:text-text-primary",
		"aria-label": `${o} · ${t}`,
		title: o,
		children: /* @__PURE__ */ (0, $.jsx)(f, {
			className: "size-4",
			"aria-hidden": !0
		})
	}) : null] });
}
function sr({ people: e, onFilter: t }) {
	if (An(), e.length < 2) return null;
	let n = X("catalog:javDiscovery.morePeople", {
		count: e.length - 1,
		total: e.length
	});
	return t ? /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-who-more": "",
		className: "shrink-0",
		children: /* @__PURE__ */ (0, $.jsx)(C, {
			id: "cast",
			label: n,
			active: !1,
			children: (n) => /* @__PURE__ */ (0, $.jsx)(I, {
				"aria-label": X("catalog:shared.performers"),
				className: "py-2 outline-none",
				children: /* @__PURE__ */ (0, $.jsx)(ce, { children: /* @__PURE__ */ (0, $.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: e.map((e) => {
						let r = ht("performer", e.name, e.id);
						return /* @__PURE__ */ (0, $.jsxs)("li", {
							className: "flex min-w-0 items-center gap-2 px-1",
							children: [
								/* @__PURE__ */ (0, $.jsx)(S, { person: e }),
								/* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 flex-1 truncate text-body-2-medium",
									title: r,
									children: r
								}),
								/* @__PURE__ */ (0, $.jsx)(u, {
									variant: "ghost",
									size: "small",
									iconOnly: !0,
									leadingIcon: s,
									"aria-label": X("catalog:javOnline.filterPerformer", { name: r }),
									onClick: () => {
										t(e), n();
									}
								}),
								e.source_url ? /* @__PURE__ */ (0, $.jsx)(d, {
									href: e.source_url,
									target: "_blank",
									rel: "noopener noreferrer",
									variant: "ghost",
									size: "small",
									iconOnly: !0,
									leadingIcon: He,
									"aria-label": X("catalog:javDiscovery.openActress", { name: r })
								}) : null,
								/* @__PURE__ */ (0, $.jsx)(d, {
									href: At(e.name),
									variant: "ghost",
									size: "small",
									iconOnly: !0,
									leadingIcon: f,
									"aria-label": `${X("catalog:entityHero.subscribeNewReleases")} · ${r}`
								})
							]
						}, e.dmm_id || e.name);
					})
				}) })
			})
		})
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-who-more": "",
		children: n
	});
}
function cr({ item: e, limit: t = 5 }) {
	An();
	let n = (e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e }))).slice(0, t).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image && !t.has_avatar ? { children: /* @__PURE__ */ (0, $.jsx)(Me, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: Je(t.name, t, null) } }, a = X("catalog:javDiscovery.openActress", { name: ht("performer", t.name, t.id) });
		return /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: ar(t),
			"aria-label": a,
			...t.source_url && !t.id ? {
				target: "_blank",
				rel: "noopener noreferrer"
			} : {},
			...i
		}, t.dmm_id || t.name);
	});
	return n.length > 1 ? /* @__PURE__ */ (0, $.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": n.length },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-context.ts
function lr(e, t) {
	let n = [
		{
			id: "open",
			label: X("catalog:mediaActions.open"),
			icon: de,
			run: () => t.navigate(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`)
		},
		{
			id: "want",
			label: X(e.asset_id ? "catalog:javWant.imported" : e.wanted ? "catalog:javWant.wanted" : "catalog:javWant.want"),
			icon: Jt,
			disabled: t.readOnly || t.wanting || !!e.wanted || !!e.asset_id,
			run: t.onWant
		},
		{
			id: "resource",
			label: X("catalog:shared.searchTorrents"),
			icon: qt,
			run: t.onResource
		}
	];
	return e.link && n.push({
		id: "source",
		label: X("catalog:shared.viewOnSite"),
		icon: He,
		run: () => {
			window.open(e.link, "_blank", "noopener,noreferrer");
		}
	}), t.selection && n.push({
		id: "select",
		label: X(t.selection.selected.has(e.code) ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: fe,
		run: () => t.selection?.toggle(e)
	}), {
		key: e.code,
		operations: n
	};
}
// src/react/jav/jav-facets.tsx
function ur(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = new Map(t(r).map((e) => [n(e), e]));
		for (let [t, n] of e) {
			let e = i.get(t);
			e ? e.count += 1 : i.set(t, {
				id: t,
				value: n,
				count: 1
			});
		}
	}
	return [...i.values()].sort((e, t) => Number(r.includes(t.id)) - Number(r.includes(e.id)) || t.count - e.count);
}
function dr({ person: e, count: t, pressed: n, onClick: r }) {
	An();
	let i = ht("performer", e.name, e.id);
	return /* @__PURE__ */ (0, $.jsx)(h, {
		name: i,
		pressed: n,
		onClick: r,
		ringHtml: Je(e.name, e, null),
		title: X("catalog:javReleases.facetCount", {
			name: i,
			count: t
		})
	});
}
function fr({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: zt(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": !0,
		children: Lt(e.name, 1)
	});
}
function pr({ studio: e, count: t, pressed: n, onClick: r, showCount: i = !0 }) {
	return /* @__PURE__ */ (0, $.jsx)(g, {
		name: e.name,
		logo: e.has_logo ? zt(e.name, "icon", e.logo_version) : void 0,
		fallback: Lt(e.name, 2),
		pressed: n,
		onClick: r,
		title: X("catalog:javReleases.facetCount", {
			name: e.name,
			count: t
		}),
		children: i ? /* @__PURE__ */ (0, $.jsx)("span", {
			"data-count-badge": "",
			children: t
		}) : null
	});
}
function mr({ name: e, studio: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"data-list-library": "",
		title: e,
		children: [/* @__PURE__ */ (0, $.jsx)(fr, { studio: t || {
			name: e,
			has_logo: !1
		} }), /* @__PURE__ */ (0, $.jsx)("span", { children: e })]
	});
}
function hr({ studio: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, $.jsx)(w, { studio: e }), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: e.name
		})]
	});
}
// src/react/jav/discovery-card.tsx
var gr = (e) => ({
	...e,
	cover: e.has_cover ? dt(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), _r = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function vr({ item: e, readOnly: t }) {
	let n = En(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(st.subscribe, st.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: X("catalog:shared.noCover")
	});
	if (a === "fetching" || st.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: ct() } });
	let o = () => {
		n.run("cover", (t) => yt(e.code, t), (t) => {
			t.has_cover ? ot(e.code, t) : i(t.message || X("catalog:javDiscovery.noOfficialCover"));
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || lt(e);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": s,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			s === "queued" ? /* @__PURE__ */ (0, $.jsx)(c, {
				kind: "clock",
				size: "card",
				still: !0
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: p[s]
			}),
			l ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(u, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: ut(s)
			})
		]
	});
}
function yr({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a = "", onTag: o, wanting: s, onWant: c, onResource: f, badge: p, onFilterPerson: m, studioFilter: h }) {
	An();
	let g = !!m, _ = Jn(), v = e.code ? _ : null, y = zn(), b = !g && c && f ? lr(e, {
		selection: v,
		readOnly: r,
		wanting: !!s,
		navigate: i,
		onWant: c,
		onResource: f
	}) : null, x = v?.selected.has(e.code), S = !g && !!_?.dense, C = e.performer_refs?.length ? Pt(e.performer_refs.map((e) => e.name)) : e.performers, w = e.performer_refs?.[0], ee = w ? ht("performer", w.name, w.id) : C.split(/[,，、;/]/)[0] || "", te = g && e.duration ? Tt(e.duration) : "", T = ft(e, t, n), E = e.asset_id ? `/assets/${e.asset_id}` : e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, D = !e.code && !!e.link, O = () => {
		D ? window.open(E, "_blank", "noopener") : i(E);
	};
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-rectangle-key": e.code || void 0,
		"data-selected": x ? "" : void 0,
		onMouseDown: xn,
		onContextMenu: b ? (e) => y.onContextMenu(e, b) : void 0,
		onKeyDown: b ? (e) => y.onKeyDown(e, b) : void 0,
		onClickCapture: (t) => {
			t.target.closest("[data-work-context-menu]") || v && (v.mode || Dt(t)) && (t.preventDefault(), t.stopPropagation(), v.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input,[role=\"dialog\"]") || O();
		},
		children: [
			y.menu,
			T ? /* @__PURE__ */ (0, $.jsxs)("a", {
				href: E,
				"aria-label": X("catalog:javDiscovery.viewDetails", { code: e.code || e.title }),
				...D ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				onClick: (e) => {
					D || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), O());
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: _r,
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					artwork: {
						kind: "cover",
						html: T
					},
					identity: ft(e, "small", n),
					relayout: (e) => Qt(e, t)
				}), te ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-duration": "",
					children: te
				}) : null]
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: _r,
				children: /* @__PURE__ */ (0, $.jsx)(vr, {
					item: e,
					readOnly: r
				})
			}),
			v?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
				"aria-pressed": !!x,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(cr, {
					item: e,
					limit: g ? 3 : void 0
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || X("catalog:javDiscovery.titleNotFound")}`,
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Cn(e.title),
									children: e.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(or, {
									person: w,
									name: ee,
									title: C,
									onFilter: m,
									icon: !0
								}),
								/* @__PURE__ */ (0, $.jsx)(sr, {
									people: e.performer_refs || [],
									onFilter: m
								}),
								e.release_date || h && e.studio_ref ? /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-facts": "",
									children: [e.release_date ? /* @__PURE__ */ (0, $.jsxs)("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ (0, $.jsx)("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
										}), e.release_date]
									}) : null, h && e.studio_ref ? /* @__PURE__ */ (0, $.jsx)("button", {
										"data-media-who": "",
										type: "button",
										"aria-pressed": h.selected,
										title: e.studio_ref.name,
										onClick: h.onPress,
										children: /* @__PURE__ */ (0, $.jsx)(hr, { studio: e.studio_ref })
									}) : null]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [p, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"data-media-tag": "",
								"aria-pressed": typeof a == "string" ? a === e : a.includes(e),
								onClick: () => o?.(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			v?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": S ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(d, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: S ? "small" : "medium",
						iconOnly: S,
						"aria-label": X("catalog:shared.viewOnSite"),
						title: X("catalog:shared.viewOnSite"),
						leadingIcon: S ? He : void 0,
						trailingIcon: S ? void 0 : He,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: S ? null : g ? /* @__PURE__ */ (0, $.jsx)(J, {
							site: "dmm",
							label: "DMM"
						}) : X("catalog:shared.viewOnSite")
					}) : null,
					c ? /* @__PURE__ */ (0, $.jsx)(u, {
						variant: "ghost",
						size: S ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...Ye(!!s),
						onClick: c,
						children: e.asset_id ? X("catalog:javWant.imported") : e.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
					}) : null,
					f ? /* @__PURE__ */ (0, $.jsx)(u, {
						variant: "secondary",
						size: S ? "small" : "medium",
						onClick: f,
						children: X("catalog:shared.searchTorrents")
					}) : null
				]
			})
		]
	});
}
// src/react/jav/jav-code-filter.tsx
function br(e) {
	return e.normalize("NFKC").toLowerCase().replace(/[\s_\-‐‑‒–—―]+/g, "");
}
function xr(e, t) {
	return br(e).includes(br(t));
}
function Sr({ value: e, onChange: t }) {
	let [n, r] = (0, Q.useState)(e), i = X("catalog:columnFilter.search", { column: X("catalog:shared.code") });
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		className: "flex flex-col gap-3 p-3",
		"data-copy-interact": "",
		onSubmit: (e) => {
			e.preventDefault(), br(n) && t(n.trim());
		},
		children: [/* @__PURE__ */ (0, $.jsx)(pe, {
			size: "small",
			label: i,
			value: n,
			onChange: r,
			maxLength: 80
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex justify-end gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(u, {
				variant: "ghost",
				size: "small",
				type: "button",
				disabled: !e,
				onClick: () => t(""),
				children: X("catalog:shared.clearFilters")
			}), /* @__PURE__ */ (0, $.jsx)(u, {
				size: "small",
				type: "submit",
				disabled: !br(n),
				children: X("follow:shared.search")
			})]
		})]
	});
}
// src/react/jav/jav-release-table.tsx
var Cr = {
	widths: W,
	visibility: U
};
function wr({ column: e, label: t, filters: n, onChange: r }) {
	let i = e === "people" ? "performer" : e === "tags" ? "tag" : "studio", a = vn(n, i, void 0);
	return /* @__PURE__ */ (0, $.jsx)(Fe, {
		id: e,
		label: t,
		values: $t(n, i),
		load: async (t, n, r) => {
			let i = await St(a, e, n, r, t);
			return {
				items: i.items.map((t) => {
					let n = e === "people" ? t : null, r = n && _t("performer", n.name, n.id);
					return {
						id: t.name,
						label: t.name,
						count: t.count,
						searchTerms: [...n?.aliases || [], ...[r?.ja, r?.zh_cn].filter((e) => !!e)],
						leading: n ? /* @__PURE__ */ (0, $.jsx)(S, { person: n }) : void 0
					};
				}),
				nextOffset: i.next_offset ?? void 0
			};
		},
		queryKey: [
			"jav-release-column",
			e,
			a.performer,
			a.studio,
			a.tag,
			a.column_filters || "",
			a.q,
			a.code || ""
		],
		onChange: (e) => r(i, e)
	});
}
function Tr({ items: a, waiting: o, filters: s, studios: c, facets: d, javImage: f, readOnly: m, navigate: h, onTag: g, onFilter: _, onRange: b, onSort: x, wanting: S, onWant: C, onResource: w, selecting: ee = !0, tableTop: te }) {
	let T = Jn(), E = zn(), D = (e) => lr(e, {
		selection: T,
		readOnly: m,
		wanting: S(e),
		navigate: h,
		onWant: () => C(e),
		onResource: () => w(e)
	}), O = Ln("jav-releases", tn, Cr), ne = O.columns.filter((e) => e.required || O.visibility[e.id] !== !1), re = Object.entries(q).find(([, e]) => e === s.sort)?.[0], A = Xt(s.column_filters), ie = new Map(c.map((e) => [e.name, e])), j = (e) => (t) => {
		t.preventDefault(), T?.mode || Dt(t) ? T?.toggle(e, t.shiftKey) : h(`/works/${encodeURIComponent(e.code)}`);
	}, ae = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = ft(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: j(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(l, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => Qt(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: lt(t) || void 0,
								children: t.cover_state ? p[t.cover_state] : X("catalog:shared.noCover")
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || X("catalog:javDiscovery.titleNotFound")}`,
							"aria-label": X("catalog:javDiscovery.viewDetails", { code: t.code }),
							onClick: j(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Cn(t.title),
									children: t.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)(cr, { item: t }),
					/* @__PURE__ */ (0, $.jsx)(or, {
						person: t.performer_refs?.[0],
						name: n
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who-more": "",
						children: X("catalog:javDiscovery.morePeople", {
							count: t.performer_refs.length - 1,
							total: t.performer_refs.length
						})
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsx)(mr, {
				name: t.studio,
				studio: t.studio_ref || ie.get(t.studio)
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": en(s, "tag").includes(e),
					onClick: () => g(e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Tt(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "ghost",
					disabled: m || t.wanted || !!t.asset_id,
					...Ye(S(t)),
					onClick: () => C(t),
					children: t.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
				}), /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "secondary",
					onClick: () => w(t),
					children: X("catalog:shared.searchTorrents")
				})]
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		onKeyDown: (e) => {
			let t = e.target.closest("[data-release-row]"), n = t && a.find((e) => String(e.id) === t.dataset.releaseId);
			n && !o && E.onKeyDown(e, D(n), t);
		},
		children: [
			E.menu,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-wrap justify-end gap-2",
				role: "toolbar",
				"aria-label": X("catalog:javReleases.toolbar"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-toolbar-actions": "",
					children: /* @__PURE__ */ (0, $.jsx)(Pe, {
						preferences: O,
						label: X("catalog:javReleases.list")
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(k, {
				ref: te,
				follow: !0,
				preferences: O,
				rectangleSelecting: !!T?.mode,
				onRectangle: ee && !o && a.length ? T?.selectRectangle : void 0,
				onRowClick: ee && !o && T?.mode ? (e) => {
					let t = a.find((t) => String(t.id) === e);
					t && T.toggle(t);
				} : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)(Ne, {
					"aria-label": X("catalog:javReleases.list"),
					size: "sm",
					sortDescriptor: re ? {
						column: re,
						direction: s.dir === "asc" ? "ascending" : "descending"
					} : void 0,
					onSortChange: (e) => {
						let t = q[String(e.column)];
						t && x(t, e.direction === "ascending" ? "asc" : "desc");
					},
					children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [
						T?.mode ? /* @__PURE__ */ (0, $.jsx)(t, {
							id: "selection",
							width: 44,
							"aria-label": X("catalog:javReleases.selectVideos"),
							children: /* @__PURE__ */ (0, $.jsx)(v, {
								slot: null,
								"aria-label": X("catalog:catalogList.selectAllOnPage"),
								isSelected: T.all,
								isIndeterminate: T.mixed,
								isDisabled: o || !a.length,
								onChange: T.selectPage
							})
						}) : null,
						ne.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
							id: e.id,
							isRowHeader: e.id === "name",
							allowsSorting: e.id in q,
							...O.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [b && (e.id === "release" || e.id === "dur" || e.id === "score") ? /* @__PURE__ */ (0, $.jsx)(Ie, {
									id: e.id,
									label: e.label,
									kind: et[e.id],
									value: A[e.id],
									rangeQuery: e.id === "release" ? nn(s) : void 0,
									onChange: (t) => b(e.id, t)
								}) : d && _ && [
									"people",
									"studio",
									"tags"
								].includes(e.id) ? /* @__PURE__ */ (0, $.jsx)(wr, {
									column: e.id,
									label: e.label,
									filters: s,
									onChange: _
								}) : e.label, e.id in q ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(y, {})
								}) : null]
							}), /* @__PURE__ */ (0, $.jsx)(Le, {
								preferences: O,
								id: e.id
							})] })
						}, e.id)),
						/* @__PURE__ */ (0, $.jsx)(t, {
							id: "remaining-space",
							"aria-label": X("catalog:catalogList.rowSpacer"),
							"data-table-space": "",
							width: O.spaceWidth,
							minWidth: 0
						})
					] }), /* @__PURE__ */ (0, $.jsx)(e, {
						renderEmptyState: () => X("catalog:javReleases.noMatches"),
						children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: `skeleton-${t}`,
							"data-list-skeleton-row": "",
							"aria-hidden": "true",
							children: [
								T?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null,
								ne.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: $e(e.id) } }) }, e.id)),
								/* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })
							]
						}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: String(e.id),
							"data-catalog-row": "",
							"data-release-row": "",
							"data-release-id": e.id,
							"data-rectangle-key": e.code,
							"data-board-selected": T?.selected.has(e.code) || void 0,
							onContextMenu: (t) => E.onContextMenu(t, D(e)),
							children: [
								T?.mode ? /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(v, {
									slot: null,
									"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
									isSelected: T.selected.has(e.code),
									onChange: () => T.toggle(e)
								}) }) : null,
								ne.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: ae(t.id, e) }, t.id)),
								/* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })
							]
						}, e.id))
					})]
				})
			})
		]
	});
}
// src/react/jav/jav-releases.tsx
var Er = `<div data-catalog-tier="performers" data-skeleton="tiers">${wn("performer")}</div><div data-catalog-tier="studios">${wn("studio")}</div>`;
function Dr({ value: e }) {
	let t = Zt(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: X("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(b, {
			color: t.color,
			children: t.label
		})
	});
}
var Or = (e) => yt(e).then((t) => (t.has_cover && ot(e, t), t.has_cover));
function kr({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let [o, s] = (0, Q.useState)(() => rn(location.search)), c = (0, Q.useSyncExternalStore)(qe().subscribe, () => sn("jav-releases", 24));
	(0, Q.useEffect)(() => {
		new URLSearchParams(location.search).has("size") || o.size === c || (s((e) => ({
			...e,
			page: 1,
			size: c
		})), Z({ page: "" }));
	}, [o.size, c]), (0, Q.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let l = (e, t) => {
		let n = vn(o, e, t);
		s(n), Z({
			[e]: "",
			column_filters: n.column_filters || "",
			page: ""
		});
	}, p = (e, t) => {
		let n = $t(o, e);
		l(e, n === void 0 ? [t] : Tn(n, t, !nt(n, t)));
	}, h = (e) => {
		s((t) => ({
			...t,
			column_filters: e,
			page: 1
		})), Z({
			column_filters: e,
			page: ""
		});
	}, g = (e, t) => h(Wn(Xt(o.column_filters), e, t)), v = (e) => {
		s((t) => ({
			...t,
			code: e,
			page: 1
		})), Z({
			code: e,
			page: ""
		});
	}, y = Xt(o.column_filters), b = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? Gt : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(Re, {
			label: t,
			kind: et[e],
			value: y[e],
			rangeQuery: e === "release" ? nn(o) : void 0,
			onChange: (t) => {
				g(e, t), n();
			}
		})
	}), x = (0, Q.useRef)(null), C = (0, Q.useRef)(null), ee = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1, r = t !== o.size;
		r && on("jav-releases", t), s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			...r && { size: String(t) }
		}), A !== "list" && x.current?.scrollIntoView({ block: "start" });
	}, E = () => {
		s((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			code: "",
			column_filters: "",
			q: "",
			page: 1
		})), Z({
			performer: "",
			studio: "",
			tag: "",
			code: "",
			column_filters: "",
			page: ""
		}), a();
	}, D = (e, t) => {
		s((n) => ({
			...n,
			sort: e,
			dir: t,
			seed: "",
			page: 1
		})), Z({
			sort: e === "release_date" ? "" : e,
			dir: t === "asc" ? "asc" : "",
			seed: "",
			page: ""
		});
	}, O = () => {
		let e = Math.random().toString(36).slice(2, 10);
		s((t) => ({
			...t,
			sort: "random",
			dir: "desc",
			seed: e,
			page: 1
		})), Z({
			sort: "random",
			dir: "",
			seed: e,
			page: ""
		});
	};
	(0, Q.useEffect)(() => {
		let e = [...x.current?.querySelectorAll("[data-catalog-tier],[data-filter-row=\"bottom\"]") || []].map((e) => Hn(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let k = qe();
	(0, Q.useSyncExternalStore)(k.subscribe, k.version, k.version);
	let re = kt(), A = Dn(), ae = Qe(Et({
		active: !0,
		home: !1,
		portrait: !1
	})), M = Pn({
		queryKey: an(o),
		queryFn: ({ signal: e }) => Ct(o, e),
		placeholderData: Ft,
		retry: !1,
		refetchOnWindowFocus: !1
	}), ce = M.data?.metadata_job, de = (0, Q.useRef)(!1);
	de.current = ce?.status === "running";
	let fe = Yt.getQueryData(T)?.metadata_job, pe = Pn({
		queryKey: T,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: ce?.status === "running" || fe?.status === "running",
		queryFn: ({ signal: e }) => xt(e),
		refetchInterval: Bt(() => de.current)
	}), N = pe.data && pe.dataUpdatedAt >= M.dataUpdatedAt ? pe.data.metadata_job : ce, P = N?.status === "running", _e = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		_e.current && !P && M.refetch(), _e.current = P;
	}, [P, M]);
	let ye = (0, Q.useRef)(""), F = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.column_filters,
		o.q,
		o.code,
		o.sort,
		o.dir,
		o.seed
	]), be = !M.isPlaceholderData && (M.data?.metadata_unread || 0) > 0 && !P;
	(0, Q.useEffect)(() => {
		be && ye.current !== F && (ye.current = F, at("start", o).then(async (e) => {
			await Yt.cancelQueries({ queryKey: T }), Yt.setQueryData(T, e);
		}).catch(() => {}));
	}, [be, F]);
	let I = En(), R = (e) => {
		I.run(String(e.id), (t) => Ge({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), Y(), M.refetch();
		});
	}, z = M.data, xe = (z?.facets.tags || []).map((e) => ({
		id: e.name,
		label: e.name,
		count: e.count,
		selected: en(o, "tag").includes(e.name)
	}));
	Xn(z?.items || []);
	let B = M.isPending, V = Yn(!B && !M.isPlaceholderData), H = !!(o.performer || o.studio || o.tag || o.column_filters || o.q || o.code), U = Math.max(1, Math.ceil((z?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!z || M.isPlaceholderData || o.page <= U || (s((e) => ({
			...e,
			page: U
		})), Z({ page: U > 1 ? String(U) : "" }));
	}, [
		z,
		M.isPlaceholderData,
		o.page,
		U
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: x,
		"aria-label": X("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": B || M.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			B ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				className: me,
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: Er }
			}) : null,
			z && (z.facets.performers.length || z.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				className: me,
				children: [z.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: z.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsx)(dr, {
						person: e,
						count: e.count,
						pressed: en(o, "performer").includes(e.name),
						onClick: () => p("performer", e.name)
					}, e.name))
				}) : null, z.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: z.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsx)(pr, {
						studio: e,
						count: e.count,
						pressed: en(o, "studio").includes(e.name),
						onClick: () => p("studio", e.name)
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(se, {
				label: X("catalog:javReleases.filtersLabel"),
				topLabel: X("catalog:catalogFilter.viewsAndTags"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: B,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: B || xe.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: B ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Mt() }
					}) : /* @__PURE__ */ (0, $.jsx)(le, {
						choices: xe,
						onSelect: (e) => p("tag", e)
					})
				}) : null,
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: B ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : H ? X("catalog:javReleases.matchedCount", {
							matched: z?.total || 0,
							count: z?.candidate_total || 0
						}) : X("catalog:countLabel.works", { count: z?.total || 0 })
					}),
					/* @__PURE__ */ (0, $.jsx)(ve, { tab: "releases" }),
					H ? /* @__PURE__ */ (0, $.jsx)(j, {
						onPress: E,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(ue, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(Ae, {
								onPress: O,
								busy: o.sort === "random" && M.isFetching
							}),
							A === "cards" ? /* @__PURE__ */ (0, $.jsx)(Ee, {
								label: X("catalog:entityFilter.javCardLayout"),
								value: re,
								options: he,
								onChange: bn
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(_, {})
						] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-release-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								choices: (z?.facets.performers || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: en(o, "performer").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: e })
								})),
								onSelect: (e) => p("performer", e),
								active: $t(o, "performer") !== void 0,
								onClear: $t(o, "performer") === void 0 ? void 0 : () => l("performer", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-release-studios",
								orderKey: "studio",
								label: X("catalog:shared.label"),
								choices: (z?.facets.studios || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: en(o, "studio").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: e })
								})),
								onSelect: (e) => p("studio", e),
								active: $t(o, "studio") !== void 0,
								onClear: $t(o, "studio") === void 0 ? void 0 : () => l("studio", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-release-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								choices: xe,
								onSelect: (e) => p("tag", e),
								active: $t(o, "tag") !== void 0,
								onClear: $t(o, "tag") === void 0 ? void 0 : () => l("tag", void 0)
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(je, {
							group: "releases",
							sorts: K.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === o.sort,
								dir: o.dir
							})),
							onSort: (e, t) => D(e, t),
							filters: {
								release_date: b("release", X("catalog:catalogList.releaseDate")),
								duration: b("dur", X("catalog:catalogList.duration")),
								source_score: b("score", X("catalog:javSort.siteRating")),
								taste: b("taste", X("catalog:javSort.taste")),
								code: {
									active: !!o.code,
									render: (e) => /* @__PURE__ */ (0, $.jsx)(Sr, {
										value: o.code || "",
										onChange: (t) => {
											v(t), e();
										}
									})
								}
							}
						})
					})
				] })
			}),
			A === "cards" && o.column_filters ? /* @__PURE__ */ (0, $.jsx)(m, {
				encoded: o.column_filters,
				columns: [...tn, {
					id: "taste",
					label: X("catalog:javSort.taste")
				}],
				onChange: h
			}) : null,
			B && A === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: Ot("discover", re) }
			}) : null,
			M.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				title: X("catalog:javReleases.failed"),
				children: vt(M.error)
			}) : null,
			P && N ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(ze, {
					kind: We("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: N.completed,
						count: N.total
					}),
					value: N.completed,
					total: N.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(te, {
				scope: X("catalog:javReleases.coverQueueScope"),
				fetchOne: Or,
				codes: (z?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? X("catalog:javReleases.coversFetched", { count: n }) : X("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), M.refetch();
				}
			}),
			!B && !M.error && !z?.items.length && (A === "cards" || !H) ? /* @__PURE__ */ (0, $.jsx)(ie, {
				icon: f,
				title: X(H ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: H ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: E,
					children: X("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(d, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: X("catalog:javReleases.addSubscription")
				}),
				children: X(H ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			I.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				children: I.error
			}) : null,
			A === "list" ? B || z?.items.length || H ? /* @__PURE__ */ (0, $.jsx)(Tr, {
				items: z?.items || [],
				waiting: B,
				filters: o,
				tableTop: C,
				selecting: !M.isPlaceholderData,
				studios: z?.facets.studios || [],
				javImage: k.value.javImage,
				readOnly: e,
				navigate: i,
				facets: z?.facets,
				onFilter: l,
				onRange: g,
				onTag: (e) => p("tag", e),
				onSort: D,
				wanting: (e) => I.busy === String(e.id),
				onWant: R,
				onResource: (e) => n(gr(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": ae },
				...V,
				children: (z?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(yr, {
					item: t,
					layout: re,
					javImage: k.value.javImage,
					readOnly: e,
					navigate: i,
					tag: en(o, "tag"),
					onTag: (e) => p("tag", e),
					wanting: I.busy === String(t.id),
					onWant: () => R(t),
					onResource: () => n(gr(t)),
					badge: o.sort === "taste" || y.taste ? /* @__PURE__ */ (0, $.jsx)(Dr, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			z ? /* @__PURE__ */ (0, $.jsx)(ne, {
				label: X("catalog:javTabs.newReleases"),
				total: z.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: ee,
				scrollTarget: A === "list" ? C : void 0,
				stickyHeader: () => x.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit"),
				pageSizes: G
			}) : null
		]
	});
}
// src/react/jav/online-catalog.tsx
var Ar = Rt(["performer"]), jr = [];
async function Mr(e, t) {
	let n = !1, r = (await Promise.all(e.items.map(async (e) => {
		if (!e.cover_url) return null;
		try {
			let n = await fetch(e.cover_url, {
				method: "HEAD",
				signal: t
			});
			if (n.ok && n.headers.get("content-type")?.startsWith("image/")) return e;
			if (n.status === 404 || n.status === 410) return null;
		} catch (e) {
			if (t.aborted) throw e;
		}
		return n = !0, null;
	}))).filter((e) => e !== null);
	return {
		...e,
		items: r,
		coverUnverified: n,
		coverOmitted: r.length < e.items.length
	};
}
function Nr() {
	let e = new URLSearchParams(location.search);
	return {
		performer: e.get("performer") || "",
		actress: e.get("actress") || "",
		date: e.get("date") || "",
		maker: e.get("maker") || "",
		genre: e.get("genre") || "",
		page: Math.max(1, Math.floor(Number(e.get("page"))) || 1)
	};
}
var Pr = ["release", "dur"], Fr = new Intl.Collator(void 0, {
	numeric: !0,
	sensitivity: "base"
});
function Ir(e, { sort: t, dir: n }) {
	if (t === "release" && n === "desc") return e;
	let r = (e) => t === "dur" ? e.duration : t === "code" ? e.code : e.date;
	return [...e].sort((e, t) => {
		let i = r(e), a = r(t);
		if (!i || !a) return Number(!i) - Number(!a);
		let o = typeof i == "number" && typeof a == "number" ? i - a : Fr.compare(String(i), String(a));
		return n === "asc" ? o : -o;
	});
}
function Lr(e) {
	return e ? e.split(",") : [];
}
function Rr({ filters: e, data: t, people: n, selected: r, go: i, close: a }) {
	let [o, s] = (0, Q.useState)(e.performer), c = On("online-performer", o, Ar), l = (t, n) => {
		i({
			...e,
			performer: t,
			actress: n,
			page: 1
		}), a();
	};
	return /* @__PURE__ */ (0, $.jsxs)(I, {
		"aria-label": X("follow:addJavFeed.actressName"),
		className: "py-3 outline-none",
		children: [/* @__PURE__ */ (0, $.jsxs)("form", {
			className: "flex flex-col gap-3 px-3",
			onSubmit: (t) => {
				t.preventDefault();
				let n = o.trim();
				l(n, n === e.performer ? e.actress : "");
			},
			"data-copy-interact": "",
			children: [
				/* @__PURE__ */ (0, $.jsx)(pe, {
					size: "small",
					label: X("follow:addJavFeed.actressName"),
					value: o,
					onChange: s,
					maxLength: 120,
					ref: c.bind
				}),
				c.list,
				t && t.performer_options.length > 1 ? /* @__PURE__ */ (0, $.jsx)(De, {
					size: "sm",
					"aria-label": X("catalog:javOnline.performerPage"),
					prefix: X("catalog:javOnline.performerPage"),
					selectedKey: t.selected_actress,
					onSelectionChange: (t) => {
						t !== null && l(e.performer, String(t));
					},
					children: t.performer_options.map((e) => /* @__PURE__ */ (0, $.jsx)(Oe, {
						id: e.id,
						children: e.name
					}, e.id))
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [e.performer || e.actress ? /* @__PURE__ */ (0, $.jsx)(u, {
						size: "small",
						variant: "ghost",
						type: "button",
						onClick: () => l("", ""),
						children: X("catalog:rangeFilter.clear")
					}) : null, /* @__PURE__ */ (0, $.jsx)(u, {
						size: "small",
						type: "submit",
						children: X("follow:shared.search")
					})]
				})
			]
		}), n.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "mt-2",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "mb-1 px-3 text-caption-1-regular text-text-secondary",
				children: X("catalog:javOnline.facetScope")
			}), /* @__PURE__ */ (0, $.jsx)(ae, {
				choices: n.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: ht("performer", t.name, t.id),
					selected: e === r,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => {
					let t = n.find((t) => t.id === e)?.value;
					t && l(e === r ? "" : t.name, e === r ? "" : e);
				}
			})]
		}) : null]
	});
}
function zr({ items: a, waiting: o, javImage: s, filters: c, sorting: u, onSort: d, onFilter: f, onStudio: p, onTag: m }) {
	let h = Lr(c.genre), g = Jn(), _ = !o && a.some((e) => e.code);
	return /* @__PURE__ */ (0, $.jsx)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "min-w-0",
		children: /* @__PURE__ */ (0, $.jsx)(k, {
			follow: !0,
			onRectangle: _ ? g?.selectRectangle : void 0,
			onRowClick: _ && g?.mode ? (e) => {
				let t = a.find((t) => t.catalogId === e);
				t?.code && g.toggle(t);
			} : void 0,
			children: /* @__PURE__ */ (0, $.jsxs)(Ne, {
				size: "sm",
				"aria-label": X("catalog:javTabs.online"),
				className: "min-w-(--online-table-width) table-fixed",
				style: { "--online-table-width": `${B + (g?.mode ? 44 : 0)}px` },
				sortDescriptor: u.sort === "code" ? void 0 : {
					column: u.sort,
					direction: u.dir === "asc" ? "ascending" : "descending"
				},
				onSortChange: (e) => d(e.column === "dur" ? "dur" : "release"),
				children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [g?.mode ? /* @__PURE__ */ (0, $.jsx)(t, {
					id: "selection",
					className: "w-11",
					"aria-label": X("catalog:javReleases.selectVideos"),
					children: /* @__PURE__ */ (0, $.jsx)(v, {
						slot: null,
						"aria-label": X("catalog:catalogList.selectAllOnPage"),
						isSelected: g.all,
						isIndeterminate: g.mixed,
						isDisabled: !_,
						onChange: g.selectPage
					})
				}) : null, R.map(([e, n, r]) => /* @__PURE__ */ (0, $.jsx)(t, {
					id: e,
					className: "w-(--online-column-width)",
					style: { "--online-column-width": `${r}px` },
					isRowHeader: e === "name",
					allowsSorting: e === "release" || e === "dur",
					children: X(n)
				}, e))] }), /* @__PURE__ */ (0, $.jsx)(e, { children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
					id: `skeleton-${t}`,
					"data-list-skeleton-row": "",
					"aria-hidden": "true",
					children: [g?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null, R.map(([e]) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: $e(e, !0) } }) }, e))]
				}, `skeleton-${t}`)) : a.map((e) => {
					let t = ft(e, "small", s), i = e.performer_refs || [], a = i[0], o = a ? ht("performer", a.name, a.id) : "", u = e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, d = e.code ? {} : {
						target: "_blank",
						rel: "noopener noreferrer"
					}, _ = !!e.code && g?.selected.has(e.code), y = (t) => {
						e.code && g?.mode && (t.preventDefault(), g.toggle(e, t.shiftKey));
					};
					return /* @__PURE__ */ (0, $.jsxs)(n, {
						id: e.catalogId,
						"data-catalog-row": "",
						"data-release-row": "",
						"data-rectangle-key": e.code || void 0,
						"data-rectangle-disabled": !e.code || void 0,
						"data-board-selected": _ || void 0,
						children: [
							g?.mode ? /* @__PURE__ */ (0, $.jsx)(r, { children: e.code ? /* @__PURE__ */ (0, $.jsx)(v, {
								slot: null,
								"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
								isSelected: !!_,
								onChange: () => g.toggle(e)
							}) : null }) : null,
							/* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
								"data-list-identity": "",
								children: [/* @__PURE__ */ (0, $.jsx)("a", {
									"data-list-open": "",
									href: u,
									onClick: y,
									tabIndex: -1,
									"aria-hidden": !0,
									...d,
									children: /* @__PURE__ */ (0, $.jsx)("span", {
										"data-list-picture": "",
										children: t ? /* @__PURE__ */ (0, $.jsx)(l, {
											artwork: {
												kind: "cover",
												html: t
											},
											relayout: (e) => Qt(e, "small")
										}) : /* @__PURE__ */ (0, $.jsx)("span", { children: X("catalog:shared.noCover") })
									})
								}), /* @__PURE__ */ (0, $.jsx)("span", {
									"data-list-text": "",
									children: /* @__PURE__ */ (0, $.jsxs)("a", {
										"data-list-work-link": "",
										href: u,
										onClick: y,
										title: e.code ? `${e.code} · ${e.title}` : e.title,
										...d,
										children: [e.code ? /* @__PURE__ */ (0, $.jsx)("span", {
											"data-list-code": "",
											className: "text-body-2-regular text-text-primary",
											children: e.code
										}) : null, /* @__PURE__ */ (0, $.jsx)("span", {
											"data-list-name": "",
											lang: Cn(e.title),
											children: e.title
										})]
									})
								})]
							}) }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: a ? /* @__PURE__ */ (0, $.jsxs)("div", {
								"data-list-people": "",
								children: [/* @__PURE__ */ (0, $.jsx)(cr, {
									item: e,
									limit: 1
								}), /* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex min-w-0 flex-1 flex-col items-start gap-1",
									children: [/* @__PURE__ */ (0, $.jsx)("div", {
										"data-list-person-line": "",
										className: "flex w-full min-w-0 items-center gap-2",
										children: /* @__PURE__ */ (0, $.jsx)(or, {
											person: a,
											name: o,
											title: o,
											onFilter: f
										})
									}), /* @__PURE__ */ (0, $.jsx)(sr, {
										people: i,
										onFilter: f
									})]
								})]
							}) : "—" }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: e.studioOption ? /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								className: "max-w-full cursor-pointer hover:underline",
								"aria-pressed": c.maker === e.studioOption.id,
								onClick: () => p(e.studioOption.id),
								children: /* @__PURE__ */ (0, $.jsx)(mr, {
									name: e.studio,
									studio: e.studioOption
								})
							}) : "—" }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: e.tagOptions.length ? /* @__PURE__ */ (0, $.jsx)("div", {
								"data-media-tags": "",
								"data-list-tags": "",
								children: e.tagOptions.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
									type: "button",
									"data-media-tag": "",
									"aria-pressed": h.includes(e.id),
									onClick: () => m(e.id),
									children: e.source_name
								}, e.id))
							}) : "—" }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [e.release_date ? /* @__PURE__ */ (0, $.jsx)("time", {
									dateTime: e.release_date,
									children: e.release_date
								}) : "—", e.preOrder ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: X("catalog:javOnline.preOrder")
								}) : null]
							}) }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: Tt(e.duration) }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(F, {
								href: e.link,
								target: "_blank",
								rel: "noopener noreferrer",
								title: e.link,
								size: "small",
								trailingIcon: He,
								children: /* @__PURE__ */ (0, $.jsx)(J, {
									site: "dmm",
									label: "DMM"
								})
							}) })
						]
					}, e.catalogId);
				}) })]
			})
		})
	});
}
function Br({ navigate: e, query: t = "" }) {
	An();
	let [n, r] = (0, Q.useState)(Nr), [i, o] = (0, Q.useState)(Ut), [s, c] = (0, Q.useState)(() => new URLSearchParams(location.search).get("code") || ""), [l, d] = (0, Q.useState)(() => {
		let { release: e, dur: t } = Xt(new URLSearchParams(location.search).get("column_filters") || void 0);
		return {
			release: e,
			dur: t
		};
	}), [f, p] = (0, Q.useState)(Wt), [m, h] = (0, Q.useState)({}), [g, v] = (0, Q.useState)(""), y = qe();
	(0, Q.useSyncExternalStore)(y.subscribe, y.version, y.version);
	let x = Dn(), S = kt(), te = Qe(Et({
		active: !0,
		home: !1,
		portrait: !1
	})), T = X("catalog:javTabs.online"), E = X("catalog:shared.performers"), D = X("catalog:shared.label"), O = X("catalog:shared.tags"), ne = X("catalog:catalogList.releaseDate"), k = Fn(), A = Pn({
		queryKey: ["jav-catalog", n],
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 3e5,
		placeholderData: Ft,
		queryFn: async ({ signal: e }) => Mr(await Ke(`/api/jav/catalog?${new URLSearchParams({
			...n,
			page: String(n.page)
		})}`, e), e)
	}), j = A.isPending || A.isPlaceholderData, ae = A.isPending;
	(0, Q.useEffect)(() => {
		let e = A.data;
		if (j || !e || e.page === n.page) return;
		let t = {
			...n,
			page: e.page
		};
		k.setQueryData(["jav-catalog", t], e), r(t), Z({ page: e.page > 1 ? String(e.page) : "" });
	}, [
		n,
		A.data,
		k,
		j
	]);
	let M = (e, t = {}) => {
		r(e), Z({
			...e,
			...t,
			page: e.page > 1 ? String(e.page) : ""
		});
	}, ce = (e, t) => {
		o({
			sort: e,
			dir: t
		}), Z({
			sort: e === "release" ? "" : e,
			dir: t === "asc" ? "asc" : ""
		});
	}, de = Mn(), fe = Mn(), pe = Mn(), N = (0, Q.useRef)(null), P = (0, Q.useRef)(null), _e = jn(f), ye = (e) => {
		p(e), Z({ status: e === "all" ? "" : e });
	}, F = !!(n.performer || n.actress), be = F ? "online-performer" : n.maker ? "online-studio" : n.genre ? "online-tags" : "", I = g || be, R = Rn(P, N, "[data-glide-anchor]", I), B = (e) => ({
		anchor: I === e,
		onPointerEnter: R.hover,
		onOpenChange: (t) => v((n) => t ? e : n === e ? "" : n)
	}), V = n.actress || (j ? "" : A.data?.selected_actress || ""), U = A.data?.items ?? jr, W = (0, Q.useMemo)(() => {
		let e = t.toLocaleLowerCase();
		return e ? U.filter((t) => [
			t.code,
			t.title,
			t.studio?.name ?? "",
			...t.people.map((e) => e.name),
			...t.tags.map((e) => e.name)
		].join(" ").toLocaleLowerCase().includes(e)) : U;
	}, [U, t]), G = Lr(n.genre), K = ur(W, (e) => e.people, (e) => e.dmm_id, [V]), q = ur(W, (e) => e.studio ? [e.studio] : [], (e) => e.id, [n.maker]), Se = ur(W, (e) => e.tags, (e) => e.id, G), Ce = Se.map(({ id: e, value: t, count: n }) => ({
		id: e,
		label: t.source_name,
		searchTerms: [t.name],
		count: n,
		selected: G.includes(e)
	})), we = K.find((e) => e.id === V)?.value, Te = we ? ht("performer", we.name, we.id) : A.data?.performer_options.find((e) => e.id === V)?.name || n.performer || V, De = q.find((e) => e.id === n.maker)?.value.name || m[`studio:${n.maker}`] || n.maker, Oe = (e) => Se.find((t) => t.id === e)?.value.source_name || m[`tag:${e}`] || e, ke = (e) => {
		let t = e.dmm_id === V;
		M({
			...n,
			performer: t ? "" : e.name,
			actress: t ? "" : e.dmm_id || "",
			page: 1
		});
	}, Ae = (e) => {
		let t = q.find((t) => t.id === e)?.value;
		t && h((n) => ({
			...n,
			[`studio:${e}`]: t.name
		})), M({
			...n,
			maker: e === n.maker ? "" : e,
			page: 1
		});
	}, J = (e) => {
		let t = G.includes(e);
		e && !t && h((t) => ({
			...t,
			[`tag:${e}`]: Oe(e)
		}));
		let r = e ? t ? G.filter((t) => t !== e) : [...G, e] : [];
		M({
			...n,
			genre: r.join(","),
			page: 1
		});
	}, Me = n.date ? { range: {
		min: n.date,
		max: n.date
	} } : l.release, Ne = (e, t) => {
		d(e);
		let n = { column_filters: Wn({ release: e.release }, "dur", e.dur) };
		t ? M(t, n) : Z(n);
	}, Pe = (e, t) => {
		let r = e === "release" && t?.range.min === t?.range.max ? String(t?.range.min || "") : "";
		Ne({
			...l,
			[e]: r ? void 0 : t
		}, e === "release" && r !== n.date ? {
			...n,
			date: r,
			page: 1
		} : void 0);
	}, Fe = (e) => {
		c(e), Z({ code: e });
	}, Ie = (e) => {
		e === "performer" ? M({
			...n,
			performer: "",
			actress: "",
			page: 1
		}) : e === "maker" ? M({
			...n,
			maker: "",
			page: 1
		}) : e === "release" || e === "dur" ? Pe(e, void 0) : e === "code" && Fe("");
	}, Le = [];
	F && Le.push({
		kind: "clear",
		key: "performer",
		label: `${E} ${Te}`
	}), n.maker && Le.push({
		kind: "clear",
		key: "maker",
		label: `${D} ${De}`
	});
	for (let e of Pr) {
		let t = e === "release" ? Me : l.dur;
		t && Le.push({
			kind: "clear",
			key: e,
			label: `${e === "release" ? ne : X("catalog:catalogList.duration")} ${tt(et[e], t.range)}`
		});
	}
	s && Le.push({
		kind: "clear",
		key: "code",
		label: `${X("catalog:shared.code")} ${s}`
	});
	for (let e of G) Le.push({
		kind: "untag",
		key: e,
		label: Oe(e)
	});
	let ze = f !== "all" || !!(s || l.dur || !n.date && l.release), Be = (0, Q.useMemo)(() => j ? [] : Ir(ze ? W.filter((e) => (f === "all" || e.pre_order === (f === "preOrder")) && (!s || xr(e.code, s)) && (n.date || !l.release || Un("date", l.release.range, e.date)) && (!l.dur || Un("duration", l.dur.range, e.duration))) : W, i).map((e, t) => ({
		id: t + 1,
		catalogId: e.id,
		code: e.code,
		title: e.title,
		performer_refs: e.people,
		performers: "",
		studio: e.studio?.name || "",
		studio_ref: e.studio || void 0,
		studioOption: e.studio,
		tagOptions: e.tags,
		tags: [...new Set(e.tags.map((e) => e.source_name))],
		duration: e.duration,
		release_date: e.date,
		link: e.url,
		cover_url: e.cover_url,
		online_cover_url: e.cover_url,
		has_cover: !1,
		wanted: !1,
		preOrder: e.pre_order
	})), [
		j,
		ze,
		W,
		f,
		s,
		n.date,
		l.release,
		l.dur,
		i
	]), Ve = (0, Q.useMemo)(() => Be.filter((e) => e.code), [Be]);
	Xn(Ve);
	let He = Yn(!j && Ve.length > 0), Ue = i.sort !== "release" || i.dir === "asc";
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": T,
		"aria-busy": j,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			ae ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: Ht() }
			}) : K.length || q.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				className: me,
				children: [K.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: de,
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: K.map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(dr, {
						person: t,
						count: n,
						pressed: e === V,
						onClick: () => ke(t)
					}, e))
				}) : null, q.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: fe,
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: q.map(({ id: e, value: t, count: r }) => /* @__PURE__ */ (0, $.jsx)(pr, {
						studio: t,
						count: r,
						pressed: e === n.maker,
						onClick: () => Ae(e),
						showCount: !1
					}, e))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(se, {
				label: X("catalog:catalogFilter.filterAndSort"),
				topLabel: X("catalog:catalogFilter.viewsAndTags"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				busy: j,
				panes: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [_e.pane, /* @__PURE__ */ (0, $.jsx)("span", {
					ref: P,
					"data-view-glide": "",
					"aria-hidden": "true"
				})] }),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: pe,
					"data-catalog-scroll": "",
					children: [_e.choices(X("catalog:javOnline.pageStatus"), xe.map(([e, t]) => ({
						key: e,
						label: X(t),
						attrs: { "data-online-status": e }
					})), ye), ae ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Mt() }
					}) : /* @__PURE__ */ (0, $.jsx)(le, {
						choices: Ce,
						onSelect: J
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-catalog-summary": "",
					children: [
						/* @__PURE__ */ (0, $.jsx)("span", {
							"data-catalog-readout": "",
							children: j ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-skeleton": "count",
								"aria-hidden": !0,
								className: "skeleton-sheen inline-block h-3.5 w-28 rounded-md"
							}) : A.data && (A.data.coverOmitted || ze) ? X("catalog:javOnline.coveredCount", {
								shown: Be.length,
								total: A.data.total
							}) : X("catalog:countLabel.works", { count: A.data?.total || 0 })
						}),
						Ue ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.localSort")
						}) : null,
						ze ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.pageFilters")
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(ve, { tab: "online" })
					]
				}), /* @__PURE__ */ (0, $.jsx)(ue, {
					tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [x === "cards" ? /* @__PURE__ */ (0, $.jsx)(Ee, {
						label: X("catalog:entityFilter.javCardLayout"),
						value: S,
						options: he,
						onChange: bn
					}) : null, /* @__PURE__ */ (0, $.jsx)(_, {})] }),
					fieldGroup: {
						ref: N,
						role: "group",
						"aria-label": X("catalog:javDiscover.filtersLabel"),
						onPointerLeave: R.leave
					},
					fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
						/* @__PURE__ */ (0, $.jsx)(C, {
							id: "online-performer",
							orderKey: "performer",
							view: B("online-performer"),
							label: E,
							active: F,
							children: (e) => /* @__PURE__ */ (0, $.jsx)(Rr, {
								filters: n,
								data: A.data,
								people: K,
								selected: V,
								go: M,
								close: e
							})
						}),
						/* @__PURE__ */ (0, $.jsx)(oe, {
							id: "online-studio",
							orderKey: "studio",
							view: B("online-studio"),
							label: D,
							active: !!n.maker,
							hint: X("catalog:javOnline.facetScope"),
							onSelect: Ae,
							onClear: n.maker ? () => Ae("") : void 0,
							choices: q.map(({ id: e, value: t, count: r }) => ({
								id: e,
								label: t.name,
								searchTerms: [t.source_name],
								count: r,
								selected: e === n.maker,
								leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)(oe, {
							id: "online-tags",
							orderKey: "tags",
							view: B("online-tags"),
							label: O,
							active: !!n.genre,
							hint: X("catalog:javOnline.facetScope"),
							onSelect: J,
							onClear: G.length ? () => J("") : void 0,
							choices: Ce
						})
					] }),
					sorts: /* @__PURE__ */ (0, $.jsx)(je, {
						group: "javOnline",
						sorts: z.map(([e, t]) => ({
							key: e,
							label: X(t),
							ariaLabel: X(t),
							pressed: i.sort === e,
							dir: i.dir
						})),
						onSort: (e, t) => ce(e, t),
						filters: {
							release: {
								active: !!Me,
								required: !0,
								shouldCloseOnInteractOutside: Gt,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Re, {
									label: ne,
									kind: "date",
									value: Me,
									rangeValues: W.map((e) => e.date),
									onChange: (t) => {
										Pe("release", t), e();
									}
								})
							},
							dur: {
								active: !!l.dur,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Re, {
									label: X("catalog:catalogList.duration"),
									kind: "duration",
									value: l.dur,
									onChange: (t) => {
										Pe("dur", t), e();
									}
								})
							},
							code: {
								active: !!s,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Sr, {
									value: s,
									onChange: (t) => {
										Fe(t), e();
									}
								})
							}
						}
					})
				})] })
			}),
			Le.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				items: Le,
				hidden: !1,
				actions: {
					toggleTag: J,
					clearFilter: Ie,
					clearAll: () => {
						c(""), d({
							release: void 0,
							dur: void 0
						}), M({
							performer: "",
							actress: "",
							maker: "",
							genre: "",
							date: "",
							page: 1
						}, {
							code: "",
							column_filters: ""
						});
					}
				}
			}) : null,
			j ? /* @__PURE__ */ (0, $.jsx)(a, {
				role: "status",
				children: X("catalog:javOnline.loading")
			}) : null,
			A.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				title: X("catalog:javOnline.failed"),
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: vt(A.error)
			}) : null,
			A.data?.coverUnverified && !j ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: X("catalog:javOnline.coverUnverified")
			}) : null,
			A.data && !j && !Be.length && !A.error && !A.data.coverUnverified ? /* @__PURE__ */ (0, $.jsx)(ie, {
				icon: re,
				title: X(W.length ? "catalog:javOnline.noPageMatches" : A.data.total ? "catalog:javOnline.noCoveredWorks" : "catalog:javOnline.noMatches"),
				actions: W.length ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: () => {
						p("all"), c(""), d({
							release: void 0,
							dur: void 0
						}), Z({
							status: "",
							code: "",
							column_filters: ""
						});
					},
					children: X("catalog:shared.clearFilters")
				}) : null,
				children: null
			}) : null,
			x === "list" && (j || Be.length > 0) ? /* @__PURE__ */ (0, $.jsx)(zr, {
				items: Be,
				waiting: j,
				javImage: y.value.javImage,
				filters: n,
				sorting: i,
				onSort: (e) => ce(e, e === i.sort && i.dir === "desc" ? "asc" : "desc"),
				onFilter: ke,
				onStudio: Ae,
				onTag: J
			}) : null,
			x === "cards" && j ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: Vt(te) }
			}) : null,
			x === "cards" && Be.length > 0 ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": te },
				...He,
				children: Be.map((t) => /* @__PURE__ */ (0, $.jsx)(yr, {
					item: t,
					layout: S,
					javImage: y.value.javImage,
					readOnly: !0,
					navigate: e,
					onFilterPerson: ke,
					tag: G.map(Oe),
					onTag: (e) => {
						let n = t.tagOptions.find((t) => t.source_name === e);
						(!e || n) && J(n?.id || "");
					},
					studioFilter: t.studioOption ? {
						selected: n.maker === t.studioOption.id,
						onPress: () => Ae(t.studioOption.id)
					} : void 0,
					badge: t.preOrder ? /* @__PURE__ */ (0, $.jsx)(b, {
						variant: "caption",
						color: "neutral",
						children: X("catalog:javOnline.preOrder")
					}) : void 0
				}, t.catalogId))
			}) : null,
			A.data && !j && A.data.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-end gap-x-4 gap-y-2",
				children: [A.data.total > A.data.pages * A.data.size ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "jav.online.pageLimit",
					className: "text-caption-1-regular text-text-secondary",
					children: X("catalog:javOnline.pageLimit", { count: A.data.pages })
				}) : null, /* @__PURE__ */ (0, $.jsx)(H, {
					label: T,
					page: A.data.page,
					pages: A.data.pages,
					onPage: (e) => M({
						...n,
						page: e
					})
				})]
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var Vr = yn("x"), Hr = yn("refresh-cw");
function Ur({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), o = Nn(), s = new URLSearchParams(o.search), c = (0, Q.useRef)("");
	o.pathname === "/jav" && jt(s.get("tab")) === e && (c.current = s.get("q") || "");
	let l = c.current, u = (e) => Z({ q: e });
	return /* @__PURE__ */ (0, $.jsx)(Zn, {
		readOnly: t,
		receipt: r,
		dock: e !== "wants",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: N,
			children: [e === "releases" ? /* @__PURE__ */ (0, $.jsx)(kr, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(Kr, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "online" ? /* @__PURE__ */ (0, $.jsx)(Br, {
				navigate: n,
				query: l.trim()
			}) : /* @__PURE__ */ (0, $.jsx)(ir, {
				readOnly: t,
				toast: r,
				query: l.trim(),
				clearQuery: () => u("")
			}), /* @__PURE__ */ (0, $.jsx)(x, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})]
		})
	}, e);
}
var Wr = {
	release: "release_date",
	dur: "duration",
	score: "source_score",
	taste: "taste_score"
};
function Gr(e) {
	return e.performer_refs?.length ? e.performer_refs.map((t) => ({
		...t,
		avatar_code: e.code
	})) : e.performers.split(/[,，、;/]/).map((e) => ({ name: e.trim() })).filter((e) => e.name);
}
function Kr({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, c] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [l, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => o.get("performer") || ""), [h, g] = (0, Q.useState)(() => o.get("code") || ""), [_, v] = (0, Q.useState)(() => o.get("studio") || ""), [y, x] = (0, Q.useState)(() => Xt(o.get("column_filters") || void 0)), [C, ee] = (0, Q.useState)(() => E.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [te, D] = (0, Q.useState)(() => o.get("dir") === "asc"), O = (e = {}) => {
		f(""), m(""), v(""), g(""), x({}), Z({
			tag: "",
			performer: "",
			studio: "",
			code: "",
			column_filters: "",
			...e
		});
	}, ne = (e) => {
		e !== s && (c(e), O({ scope: e === "external" ? "" : e }));
	}, k = (e) => {
		f(e), Z({ tag: e });
	}, A = (e) => {
		m(e), Z({ performer: e });
	}, ae = (e) => {
		v(e), Z({ studio: e });
	}, ce = (e) => {
		g(e), Z({ code: e });
	}, de = (e, t) => {
		let n = Wn(y, e, t);
		x(Xt(n)), Z({ column_filters: n });
	}, fe = (e, t) => {
		ee(e), D(t === "asc"), Z({
			sort: e === "taste" ? "" : e,
			dir: t === "asc" ? t : ""
		});
	}, pe = (0, Q.useRef)(null), me = (0, Q.useRef)(null), N = Rn(pe, me, "[aria-pressed=\"true\"]", s), P = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...P.current?.querySelectorAll("[data-catalog-scroll],[data-filter-row=\"bottom\"]") || []].map((e) => Hn(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let _e = qe();
	(0, Q.useSyncExternalStore)(_e.subscribe, _e.version, _e.version);
	let F = kt(), be = Qe(Et({
		active: !0,
		home: !1,
		portrait: !1
	})), I = te ? "asc" : "desc", R = Pn({
		queryKey: pt(s, C, I),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => bt(s, e, {
			sort: C,
			direction: I
		})
	}), z = R.data?.metadata_job, xe = (0, Q.useRef)(!1);
	xe.current = z?.status === "running";
	let B = Pn({
		queryKey: T,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => xt(e),
		refetchInterval: Bt(() => xe.current)
	}), V = B.data && B.dataUpdatedAt >= R.dataUpdatedAt ? B.data.metadata_job : z, H = (e) => e ? `${e.job_id}:${e.status}` : "", U = (0, Q.useRef)(""), W = (0, Q.useRef)(""), G = B.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = H(G), t = W.current.endsWith(":running") && G && G.status !== "running";
		W.current = e, t && e !== U.current && R.refetch();
	}, [H(G)]);
	let K = En(), q = En(), Se = async (e, t) => {
		let n = await it(e, {
			sort: C,
			direction: I,
			jobId: V?.job_id
		}, t);
		e !== "start" && await R.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await Yt.cancelQueries({ queryKey: T }), U.current = H(n.metadata_job), Yt.setQueryData(T, n);
	}, Ce = (e) => {
		q.run(e, (t) => Se(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, we = (0, Q.useRef)(!1), Te = s === "external" && V?.status !== "running" && (R.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		Te && !we.current && (we.current = !0, Se("start").catch(() => {}));
	}, [Te]);
	let De = R.data?.items || [], Oe = ur(De, (e) => e.tags || [], (e) => e, [l]).map(({ id: e, count: t }) => ({
		id: e,
		label: e,
		count: t,
		selected: l === e
	})), ke = ur(De, Gr, (e) => e.name, [p]), Ae = ur(De, (e) => e.studio_ref ? [e.studio_ref] : e.studio ? [{
		name: e.studio,
		has_logo: !1
	}] : [], (e) => e.name, [_]), J = (e) => k(l === e ? "" : e), Me = !!(r || l || p || _ || h || y.release || y.dur || y.score || y.taste), Ne = () => {
		O(), r && a();
	}, Pe = De.filter((e) => (!l || e.tags?.includes(l)) && (!h || xr(e.code, h)) && (!p || Gr(e).some((e) => e.name === p)) && (!_ || (e.studio_ref?.name || e.studio) === _) && Object.keys(Wr).every((t) => {
		let n = y[t], r = t === "taste" ? e.taste_score ?? e.score : e[Wr[t]];
		return !n || Un(et[t], n.range, r);
	}) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), Fe = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? Gt : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(Re, {
			label: t,
			kind: et[e],
			value: y[e],
			rangeValues: e === "release" ? De.map((e) => e.release_date) : void 0,
			onChange: (t) => {
				de(e, t), n();
			}
		})
	}), Ie = R.isPending;
	Xn(Pe);
	let Le = Yn(!Ie);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: P,
		"aria-label": X("catalog:shared.recommendedForYou"),
		"aria-busy": Ie,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(se, {
				label: X("catalog:javDiscover.filtersLabel"),
				topLabel: X("catalog:javDiscover.scopeLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: Ie,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				panes: /* @__PURE__ */ (0, $.jsx)("span", {
					ref: pe,
					"data-view-glide": "",
					"aria-hidden": "true"
				}),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: me,
						role: "group",
						"aria-label": X("catalog:javDiscover.scopeLabel"),
						"data-catalog-views": "",
						onPointerLeave: N.leave,
						children: [[["external", X("catalog:javDiscover.external")], ["library", X("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"data-catalog-view": e,
							"data-entity-press": "",
							"aria-pressed": s === e,
							onPointerEnter: N.hover,
							onClick: () => ne(e),
							children: t
						}, e)), Oe.length ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(le, {
						choices: Oe,
						onSelect: J
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: Ie ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : X("catalog:countLabel.works", { count: Pe.length })
					}),
					/* @__PURE__ */ (0, $.jsx)(ye, { currentHref: () => location.pathname + location.search }),
					/* @__PURE__ */ (0, $.jsx)(ve, { tab: "discover" }),
					Me ? /* @__PURE__ */ (0, $.jsx)(j, {
						onPress: Ne,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(ue, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s === "external" ? /* @__PURE__ */ (0, $.jsx)(M, {
							"data-entity-batch": "",
							"data-jav-metadata-update": "",
							label: V?.status === "running" ? X("catalog:javDiscover.stopUpdating") : X("catalog:javDiscover.updateMetadata"),
							disabled: Ie,
							"data-skeleton-action": Ie ? "" : void 0,
							busy: !!q.busy,
							icon: V?.status === "running" ? Vr : Hr,
							onPress: () => Ce(V?.status === "running" ? "stop" : "update")
						}) : null, /* @__PURE__ */ (0, $.jsx)(Ee, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: F,
							options: he,
							onChange: bn
						})] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-discover-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								active: !!p,
								choices: ke.map(({ id: e, value: t, count: n }) => ({
									id: e,
									count: n,
									label: ht("performer", t.name, t.id),
									searchTerms: [t.name],
									selected: p === e,
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
								})),
								onSelect: (e) => A(p === e ? "" : e),
								onClear: p ? () => A("") : void 0
							}),
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-discover-studios",
								orderKey: "studio",
								label: X("catalog:shared.label"),
								active: !!_,
								choices: Ae.map(({ id: e, value: t, count: n }) => ({
									id: e,
									count: n,
									label: t.name,
									selected: _ === e,
									leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
								})),
								onSelect: (e) => ae(_ === e ? "" : e),
								onClear: _ ? () => ae("") : void 0
							}),
							/* @__PURE__ */ (0, $.jsx)(oe, {
								id: "jav-discover-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								active: !!l,
								choices: Oe,
								onSelect: J,
								onClear: l ? () => k("") : void 0
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(je, {
							group: "discover",
							sorts: E.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === C,
								dir: I
							})),
							onSort: (e, t) => fe(e, t),
							filters: {
								release_date: Fe("release", X("catalog:catalogList.releaseDate")),
								duration: Fe("dur", X("catalog:catalogList.duration")),
								source_score: Fe("score", X("catalog:javSort.siteRating")),
								taste: Fe("taste", X("catalog:javSort.taste")),
								code: {
									active: !!h,
									render: (e) => /* @__PURE__ */ (0, $.jsx)(Sr, {
										value: h,
										onChange: (t) => {
											ce(t), e();
										}
									})
								}
							}
						})
					})
				] })
			}),
			Ie ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: Ot("discover", F) }
			}) : null,
			R.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				title: X("catalog:javDiscover.failed"),
				children: vt(R.error)
			}) : null,
			s === "external" && V?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(ze, {
					kind: We("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: V.completed,
						count: V.total
					}),
					value: V.completed,
					total: V.total
				})
			}) : null,
			V && V.status !== "running" && (V.status !== "complete" || V.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					...Ye(q.busy === "retry"),
					"aria-label": X("catalog:javMetadata.retry"),
					onClick: () => Ce("retry"),
					children: X("catalog:shared.retryNow")
				}),
				children: Nt(V) || X("catalog:javMetadata.progress", {
					completed: V.completed,
					count: V.total
				})
			}) : null,
			q.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				children: q.error
			}) : null,
			!Ie && !R.error && !Pe.length ? /* @__PURE__ */ (0, $.jsx)(ie, {
				icon: re,
				title: X(Me ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(d, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: X("catalog:javDiscover.viewTaste")
				}), Me ? /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "primary",
					size: "small",
					onClick: Ne,
					children: X("catalog:shared.clearFilters")
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "primary",
					size: "small",
					href: "/",
					children: X("catalog:entityPage.browseCollection")
				}) : /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "primary",
					size: "small",
					href: "/jav?tab=online",
					children: X("catalog:javTabs.online")
				})] }),
				children: X(Me ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			K.error ? /* @__PURE__ */ (0, $.jsx)(L, {
				tone: "error",
				children: K.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": be },
				...Le,
				children: Pe.map((r) => {
					let a = Zt(r.taste_score ?? r.score), o = [
						a.label,
						X("catalog:javScore.taste", { score: mt(r.taste_score ?? r.score) }),
						R.data?.ranking_method === "mmr" && r.ranking_score != null ? X("catalog:javScore.ranking", { score: mt(r.ranking_score) }) : "",
						r.source_score == null ? "" : X("catalog:javScore.siteRating", { rating: r.source_score.toFixed(1) }),
						..._n(r.reasons, r.reason_codes, r.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(yr, {
						item: r,
						layout: F,
						javImage: _e.value.javImage,
						readOnly: e,
						navigate: i,
						tag: l,
						onTag: k,
						wanting: K.busy === String(r.id),
						onWant: () => {
							K.run(String(r.id), (e) => Ge({ code: r.code }, e), () => {
								t(X("catalog:javWant.added")), Y(), R.refetch();
							});
						},
						onResource: () => n(gr(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": X("catalog:javScore.badgeLabel", {
								score: a.score,
								label: a.label
							}),
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(b, {
								color: a.color,
								children: a.label
							})
						})
					}, r.id);
				})
			})
		]
	});
}
export { Ur as JavPage };

//# debugId=54984a23-c4e5-4749-b8db-d0c54ca2a7e6