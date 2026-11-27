(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "67bd4f80-6b10-4a8a-9155-f5dd5039a0a2", e._sentryDebugIdIdentifier = "sentry-dbid-67bd4f80-6b10-4a8a-9155-f5dd5039a0a2");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $ea3928288112382f$export$439d29a4e110a164 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ActivityMotion as s, ArtSlot as c, Button as l, ButtonLink as u, Bx as d, COVER_STATE_TITLE as f, CastPopover as p, CatalogColumnFilterChips as m, CatalogDisplayControls as h, CatalogPerformerTile as g, CatalogStudioTile as _, Checkbox as v, ChevronSortDown as y, Chip as b, CloudDownloadDialog as x, ColumnFilterAvatar as S, ColumnFilterPopover as C, ColumnFilterStudioAvatar as w, Combo as ee, CoverQueue as T, DISCOVERY_METADATA_KEY as E, DISCOVERY_SORTS as D, DISCOVERY_TABLE_ID as te, DISCOVERY_TABLE_KEYS as O, DOWNLOADS_KEY as k, DOWNLOADS_URL as A, DataTableFooter as j, DataTableFrame as M, E3 as ne, EmptyFocusButton as N, EmptyState as re, FilterActionButton as P, FilterChoiceList as ie, FilterDropdown as ae, FilterGlassRows as oe, FilterIconButton as se, FilterTagStrip as ce, FilterToolbarControls as le, Gg as ue, H7 as de, ImageWithFallback as fe, Input as F, JAV_CATALOG_TIERS as pe, JAV_LAYOUTS as me, JAV_PAGE_BODY as he, JAV_RECOMMENDATION_GRID as ge, JAV_SELECTION_EVENT as _e, JZ as ve, JavGlassSearch as ye, LibraryShortcuts as be, LinkButton as xe, ListCredits as Se, M6 as I, MenuDialog as L, Note as R, ONLINE_SORTS as z, ONLINE_STATUS as Ce, ONLINE_TABLE_ID as B, ONLINE_TABLE_KEYS as V, PHASES as H, Pagination as U, PerformerCredit as we, RELEASE_COLUMN_VISIBILITY_KEY as Te, RELEASE_COLUMN_WIDTHS_KEY as Ee, RELEASE_PAGE_SIZES as W, RELEASE_SORTS as De, RELEASE_SORT_COLUMNS as Oe, SEGMENT as ke, SEGMENTED_TRACK as Ae, ScrapeSourceLabel as je, SegmentedRadioGroup as G, Segments as Me, Select as Ne, SelectItem as Pe, SelectionDock as Fe, Shuffle as Ie, SiteLabel as Le, SortKeys as Re, SourceAvatar as ze, Table as Be, TableColumnControls as Ve, TableColumnFilter as He, TableColumnRange as Ue, TableColumnResizer as K, TableRangeFields as We, TableToolbar as q, TaskProgress as J, WANTS_KEY as Ge, WantMagnets as Ke, Wt as qe, __toESM as Je, activityKind as Ye, addWant as Xe, apiGet as Ze, appSettingsStore as Qe, avatarInner as $e, busyProps as et, cachedMagnetStates as Y, cardClass as tt, cardRatio as nt, castPersonName as rt, catalogListSkeletonCellHtml as it, columnOrderingFeature as at, columnRangeKinds as ot, columnRangeSummary as st, columnValueSelected as ct, columnVisibilityFeature as lt, composingKey as ut, controlDiscoveryMetadata as dt, controlReleaseMetadata as ft, coverArrived as pt, coverFetching as mt, coverFetchingHtml as ht, coverReason as gt, coverStateAction as _t, coverUrl as vt, createColumnHelper as yt, discoveryArtwork as bt, discoveryCast as xt, discoveryColumns as St, discoveryKey as Ct, discoveryScore as wt, dmmPerformerName as Tt, entityDisplayName as Et, entityWriting as Dt, errorMessage as Ot, fetchCoverNow as kt, fetchDiscoveries as At, fetchDiscoveryMetadata as jt, fetchReleaseColumn as Mt, fetchReleases as Nt, fetchWants as Pt, flexRender as Ft, fmtDur as It, gridLayout as Lt, hasSelectionModifier as Rt, invalidateWants as zt, javContentSkeleton as Bt, javLayout as Vt, javSubscriptionPath as Ht, javTab as Ut, javTagPlaceholdersHtml as Wt, jobText as Gt, joinList as Kt, keepPreviousData as qt, lastSearchNote as Jt, leadingGraphemes as Yt, librarySuggest as Xt, logoUrl as Zt, metadataInterval as Qt, onlineCatalogCardsHtml as $t, onlineCatalogTiersHtml as en, onlineColumns as tn, onlineSorting as nn, onlineStatus as rn, outsideTableDateBound as an, pageWindow as on, performerProfileHref as sn, pv as cn, qE as ln, queryClient as un, readColumnFilters as dn, recommendationScore as fn, relayoutCovers as pn, releaseColumnSelection as mn, releaseColumnValues as hn, releaseColumns as gn, releaseDateQuery as _n, releaseFilters as vn, releaseKey as yn, rememberPageSize as bn, rememberedPageSize as xn, removeWants as Sn, require_jsx_runtime as Cn, require_react as wn, resetWants as Tn, resourceSourceKey as En, restoreWants as Dn, rowSelectionFeature as On, rowSortingFeature as kn, searchNote as An, selectRange as jn, selectionSummary as Mn, serverLabelList as Nn, setReleaseColumn as Pn, spriteGlyph as Fn, storeJavLayout as In, suppressShiftTextSelection as Ln, t as X, tableFeatures as Rn, takeJavSelection as zn, textLang as Bn, tierPlaceholdersHtml as Vn, toggleColumnValue as Hn, useAction as Un, useCatalogView as Wn, useDatalistSuggest as Gn, useDense as Kn, useEntityNames as qn, useFilterScope as Jn, useHorizontalScroller as Yn, useJavAddress as Xn, useQuery as Zn, useQueryClient as Qn, useRectangleSelection as $n, useRememberedPagination as er, useTable as tr, useTablePreferences as nr, useViewGlide as rr, useWorkContextMenu as ir, wantName as ar, wantsInterval as or, wireHorizontalScroller as sr, withinColumnRange as cr, writeColumnFilters as lr, writeJavQuery as Z } from "./peach-app.js";
import { JavBatchResources as ur } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
import { ErrorLine as dr } from "./peach-app.source-view-CqeSCcU2.js";
// src/react/jav/jav-selection.tsx
var Q = /* @__PURE__ */ Je(wn(), 1), $ = Cn(), fr = (0, Q.createContext)(null), pr = () => (0, Q.useContext)(fr);
function mr(e) {
	let t = pr();
	return $n(e ? t?.selectRectangle : void 0, { selecting: !!t?.mode });
}
function hr(e) {
	let t = pr()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function gr({ children: e, readOnly: t, receipt: n, dock: r = !0 }) {
	let i = Kn(), [a, o] = (0, Q.useState)(!1), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Map()), [u, d] = (0, Q.useState)([]), [f, p] = (0, Q.useState)(null), m = (0, Q.useRef)(null), h = (0, Q.useRef)(new URLSearchParams(location.search).get("tab") || ""), g = new Set(s.keys()), _ = Mn(g, u.map((e) => e.code)), v = (0, Q.useCallback)((e) => {
		d((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), c((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), y = (0, Q.useCallback)(() => {
		o(!1), c(/* @__PURE__ */ new Map()), m.current = null;
	}, []), b = () => c((e) => {
		let t = new Map(e);
		return u.forEach((e) => _.all ? t.delete(e.code) : t.set(e.code, e)), t;
	}), x = (e, t) => {
		if (!a && !e.length) return;
		a || o(!0);
		let n = new Set(e);
		m.current = e.at(-1) ?? null, c((e) => new Map([...t ? e : [], ...u.filter((e) => n.has(e.code)).map((e) => [e.code, e])]));
	};
	(0, Q.useEffect)(() => {
		let e = (e) => {
			let t = e instanceof CustomEvent ? e.detail : void 0;
			t && t.tab !== h.current || (e.preventDefault(), a && !t?.enter ? y() : o(!0));
		};
		return window.addEventListener(_e, e), () => window.removeEventListener(_e, e);
	}, [a, y]), (0, Q.useEffect)(() => {
		zn(location.search) && o(!0);
	}, []), (0, Q.useEffect)(() => (a || (c(/* @__PURE__ */ new Map()), m.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(a)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [a]), (0, Q.useEffect)(() => {
		if (!a) return;
		let e = (e) => {
			e.target.closest("input:not([type=\"checkbox\"],[type=\"radio\"]),textarea,[contenteditable]:not([contenteditable=\"false\"]),dialog,[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), c((e) => new Map([...e, ...u.map((e) => [e.code, e])]))));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		a,
		y,
		u
	]);
	let S = (e, t = !1) => {
		o(!0);
		let n = m.current;
		m.current = e.code, c((r) => {
			let i = new Set(r.keys());
			jn(i, u.map((e) => e.code), n, e.code, t);
			let a = new Map([
				...r,
				...u.map((e) => [e.code, e]),
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
							let e = await Xe({ code: r.code });
							e?.created && t.push(e.want.id);
						} catch (t) {
							throw Error(X("catalog:javSelection.wantPartialFailed", {
								count: e.size,
								code: r.code,
								error: Ot(t)
							}));
						}
						e.add(r.code), c((e) => {
							let t = new Map(e);
							return t.delete(r.code), t;
						});
					}
				} finally {
					zt();
				}
				return async () => {
					t.length && await Sn(t), await zt();
				};
			},
			receipt: () => X("catalog:javSelection.wantAdded", { count: e.size })
		};
	})(), ee = { receipt: n };
	return /* @__PURE__ */ (0, $.jsxs)(fr.Provider, {
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
			/* @__PURE__ */ (0, $.jsxs)(Fe, {
				visible: r && a,
				count: X("catalog:javSelection.selectedCount", { count: s.size }),
				label: X("catalog:javSelection.dockLabel"),
				actions: [{
					action: w,
					items: C,
					host: ee,
					disabled: t
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "secondary",
					disabled: !u.length,
					onClick: b,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `jav.selection.page.${_.all ? "clear" : "all"}`,
						children: _.all ? X("catalog:javSelection.deselectPage") : X("catalog:javSelection.selectPage")
					})
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "secondary",
					disabled: !s.size,
					onClick: () => p([...s.values()]),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					onClick: y,
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(ur, {
				items: f,
				close: () => p(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/wants/want-list.tsx
var _r = {
	code: X("catalog:wants.originManual"),
	feed: X("catalog:entityHero.subscribeNewReleases"),
	follow: X("catalog:entityHero.following")
}, vr = [
	["all", X("catalog:shared.all")],
	["available", X("catalog:wants.hasMagnet")],
	["missing", X("catalog:wants.noMagnet")]
], yr = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	_r[e.origin]
].filter(Boolean).join(" · ");
function br({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-media-placeholder max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: X("catalog:shared.noCover")
		}), e.cover ? /* @__PURE__ */ (0, $.jsx)(fe, {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function xr({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: c, picked: d }) {
	let f = ir(), [p, m] = (0, Q.useState)([]), h = e.link || (!p.length && e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : ""), g = h && URL.canParse(h) ? new URL(h).hostname.replace(/^www\./, "") : "", _ = En(e.follow_provider || g.split(".")[0] || ""), y = _ === "javdb" ? "JavDB" : _ === "javbus" ? "JavBus" : g, b = h && g && !p.some((e) => e.source === _) ? [{
		source: _,
		label: y,
		url: h
	}, ...p] : p, x = e.code && e.phase === "searching" ? Jt(e) : An(e), S = b.map((e) => ({
		id: `source:${e.source}`,
		label: e.label,
		icon: qe,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}));
	(e.phase === "searching" || e.phase === "given_up") && S.push({
		id: "resource",
		label: X("catalog:shared.searchTorrents"),
		icon: cn,
		run: a
	}), e.phase === "given_up" && S.push({
		id: "reset",
		label: X("catalog:wants.searchAgain"),
		icon: ve,
		disabled: t || !!n,
		run: r
	}), d && S.push({
		id: "select",
		label: X(d.on ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: de,
		run: () => d.toggle(!d.on)
	}), S.push({
		id: "remove",
		label: X("catalog:shared.remove"),
		icon: I,
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
		className: tt({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [
			f.menu,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
				children: [
					d ? /* @__PURE__ */ (0, $.jsx)(v, {
						slot: null,
						className: "mt-1 shrink-0 self-start",
						"aria-label": X("catalog:wants.selectRow", { name: ar(e) }),
						isSelected: d.on,
						onChange: d.toggle
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(br, { want: e }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("p", {
								className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
								children: [/* @__PURE__ */ (0, $.jsx)("b", {
									className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
									children: ar(e)
								}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 truncate text-body-2-regular text-text-secondary",
									children: e.title
								}) : null]
							}),
							yr(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: yr(e)
							}) : null,
							x ? /* @__PURE__ */ (0, $.jsx)("p", {
								"data-want-note": "",
								className: "text-caption-1-regular text-text-secondary",
								children: x
							}) : null,
							e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(dr, {
								text: e.scrape_error,
								prefix: X("catalog:wants.metadataNotFound"),
								tone: "muted"
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-want-actions": "",
								className: "mt-1 flex flex-wrap items-center gap-2",
								children: [
									b.map((e) => /* @__PURE__ */ (0, $.jsx)(u, {
										"data-button-link": "",
										variant: "secondary",
										size: "small",
										trailingIcon: qe,
										href: e.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ (0, $.jsx)(je, {
											source: e.source,
											label: e.label
										})
									}, e.source)),
									e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(l, {
										variant: "secondary",
										size: "small",
										disabled: t,
										...et(n === `reset:${e.id}`),
										onClick: r,
										children: X("catalog:wants.searchAgain")
									}) : null,
									e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(l, {
										variant: "primary",
										size: "small",
										leadingIcon: cn,
										onClick: a,
										children: X("catalog:shared.searchTorrents")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(l, {
										variant: "danger",
										size: "small",
										leadingIcon: I,
										disabled: t,
										...et(n === `remove:${e.id}`),
										onClick: i,
										children: X("catalog:shared.remove")
									})
								]
							})
						]
					})
				]
			}),
			e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(Ke, {
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
function Sr({ phase: e, label: t, rows: n, row: r, onRectangle: i, selecting: a }) {
	let [s, c] = (0, Q.useState)(1), [u, d] = (0, Q.useState)(20), [f, p] = (0, Q.useState)("all"), m = Y(n), h = (e) => e.has_magnets ?? m.get(e.code || "") ?? !1, g = n.filter(h), _ = e !== "searching" || f === "all" ? n : n.filter((e) => h(e) === (f === "available")), v = $n(_.length ? i : void 0, {
		selecting: a,
		start: "[data-want-items]"
	}), y = on(_.length, u, s);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(G, {
					name: "want-magnet-filter",
					"aria-label": X("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: f,
					className: Ae,
					onChange: (e) => {
						p(e), c(1);
					},
					children: vr.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: ke,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? g.length : n.length - g.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			_.length ? null : /* @__PURE__ */ (0, $.jsx)(re, {
				size: "compact",
				icon: ln,
				title: X("catalog:wants.noFilterMatches"),
				actions: /* @__PURE__ */ (0, $.jsx)(l, {
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
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					label: t,
					total: y.total,
					pagination: {
						pageIndex: y.page - 1,
						pageSize: u
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
function Cr({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), c = Un(), u = Zn({
		queryKey: Ge,
		queryFn: ({ signal: e }) => Pt(e),
		staleTime: 3e4,
		refetchInterval: or
	}), d = () => {
		let n = i.trim();
		n && !e && c.run("add", (e) => Xe({ code: n }, e), (e) => {
			t(e.created ? X("catalog:wants.added", { name: ar(e.want) }) : X("catalog:wants.alreadyAdded", { name: ar(e.want) })), a(""), zt();
		});
	}, f = (e) => {
		e.key === "Enter" && !ut(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		c.run(`remove:${e.id}`, (t) => Sn([e.id], t), () => {
			t(X("catalog:wants.removed", { name: ar(e) })), zt();
		});
	}, m = (e) => {
		c.run(`reset:${e.id}`, (t) => Tn([e.id], t), () => {
			t(X("catalog:wants.backToSearching", { name: ar(e) })), zt();
		});
	}, h = u.data, g = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), _ = pr(), v = !!_?.mode, [y, b] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => {
		v || b(/* @__PURE__ */ new Set());
	}, [v]);
	let w = g.filter((e) => y.has(e.id)), ee = g.length > 0 && w.length === g.length, T = { receipt: t }, E = {
		key: "remove",
		label: X("catalog:shared.remove"),
		reversal: "undo",
		danger: !0,
		confirm: (e) => ({
			title: X("catalog:wants.removeMany"),
			body: X("catalog:wants.removeManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await Sn(e.map((e) => e.id));
			return await zt(), async () => {
				await Dn(t), await zt();
			};
		},
		receipt: (e) => X("catalog:wants.removedMany", { count: e.length })
	}, D = {
		key: "reset",
		label: X("catalog:wants.searchAgain"),
		reversal: "undo",
		confirm: (e) => ({
			title: X("catalog:wants.searchAgainMany"),
			body: X("catalog:wants.searchAgainManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await Tn(e.map((e) => e.id));
			return await zt(), async () => {
				await Dn(t), await zt();
			};
		},
		receipt: (e) => X("catalog:wants.searchAgainDone", { count: e.length })
	}, te = w.filter((e) => e.code && (e.phase === "searching" || e.phase === "given_up")), O = Zn({
		queryKey: k,
		queryFn: ({ signal: e }) => Ze(`${A}?limit=100`, e),
		enabled: g.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), j = O.data?.providers.filter((e) => e.configured) || [], M = j[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: tt({
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
							children: /* @__PURE__ */ (0, $.jsx)(F, {
								"aria-label": X("catalog:shared.code"),
								placeholder: X("catalog:wants.codePlaceholder"),
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(l, {
							variant: "primary",
							disabled: e || !i.trim(),
							...et(c.busy === "add"),
							onClick: d,
							children: X("catalog:shared.add")
						})]
					}),
					c.error ? /* @__PURE__ */ (0, $.jsx)(R, {
						tone: "error",
						title: X("catalog:wants.actionFailed"),
						children: c.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: X("catalog:wants.loadFailed"),
				children: Ot(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: Bt("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(J, {
				embedded: !0,
				kind: Ye("want-scrape"),
				label: X("catalog:wants.fetchingNew")
			}) : null,
			h?.searching ? /* @__PURE__ */ (0, $.jsx)(J, {
				embedded: !0,
				kind: Ye("want-search"),
				label: X("catalog:wants.searchingResources")
			}) : null,
			O.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: X("catalog:wants.downloadSettingsFailed"),
				children: Ot(O.error)
			}) : null,
			O.data && !j.length ? /* @__PURE__ */ (0, $.jsxs)(R, {
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
			O.data && !O.data.available ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "neutral",
				children: X("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !g.length ? /* @__PURE__ */ (0, $.jsx)(re, {
				size: "compact",
				icon: ln,
				title: X(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					onClick: r,
					children: X("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(N, {
					target: `input[aria-label="${X("catalog:shared.code")}"]`,
					children: X("catalog:wants.addWork")
				}) : void 0,
				children: X(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			H.map(([n, r]) => {
				let i = g.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Sr, {
					phase: n,
					label: r,
					rows: i,
					selecting: v,
					onRectangle: _ && !c.busy ? (e, t) => b((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(xr, {
						want: n,
						readOnly: e,
						busy: c.busy,
						downloads: O.data,
						provider: M,
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
				provider: M
			}),
			/* @__PURE__ */ (0, $.jsxs)(Fe, {
				visible: v,
				label: X("catalog:wants.dockLabel"),
				count: X("catalog:javSelection.selectedCount", { count: w.length }),
				actions: [{
					action: E,
					items: w,
					host: T,
					disabled: e,
					done: () => b(/* @__PURE__ */ new Set())
				}, {
					action: D,
					items: w.filter((e) => e.phase === "given_up"),
					host: T,
					disabled: e,
					done: () => b(/* @__PURE__ */ new Set())
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "secondary",
					disabled: !g.length,
					onClick: () => b(ee ? /* @__PURE__ */ new Set() : new Set(g.map((e) => e.id))),
					children: X(ee ? "catalog:javSelection.deselectPage" : "catalog:wants.selectAll")
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "secondary",
					disabled: !te.length,
					onClick: () => C(te.map((e) => ({
						id: e.id,
						code: e.code,
						title: e.title || "",
						release_date: e.release_date || void 0
					}))),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					onClick: () => _?.close(),
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(ur, {
				items: S,
				close: () => C(null),
				readOnly: e,
				receipt: t
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function wr(e) {
	return sn(e) || Ht(e.name);
}
function Tr({ person: e, name: t, title: n, icon: r, onFilter: i }) {
	if (!t) return null;
	let a = X("catalog:entityHero.subscribeNewReleases");
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(we, {
		name: t,
		title: n,
		href: wr(e ?? { name: t }),
		icon: r,
		external: !!e?.source_url && !e.id,
		onFilter: i && e ? () => i(e) : void 0
	}), e?.source_url && (!e.id || i) ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: Ht(e.name),
		"data-media-credit-action": "",
		"data-inline-action": "",
		className: "inline-flex shrink-0",
		"aria-label": `${a} · ${t}`,
		title: a,
		children: /* @__PURE__ */ (0, $.jsx)(d, {
			className: "size-4",
			"aria-hidden": !0
		})
	}) : null] });
}
function Er({ item: e, limit: t = 5 }) {
	qn();
	let n = xt(e.performer_refs, e.performers).slice(0, t).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image && !t.has_avatar ? { children: /* @__PURE__ */ (0, $.jsx)(ze, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: $e(t.name, t, null) } }, a = X("catalog:javDiscovery.openActress", { name: rt(t) });
		return /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: wr(t),
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
function Dr(e, t) {
	let n = [
		{
			id: "open",
			label: X("catalog:mediaActions.open"),
			icon: ue,
			run: () => t.navigate(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`)
		},
		{
			id: "want",
			label: X(e.asset_id ? "catalog:javWant.imported" : e.wanted ? "catalog:javWant.wanted" : "catalog:javWant.want"),
			icon: ln,
			disabled: t.readOnly || t.wanting || !!e.wanted || !!e.asset_id,
			run: t.onWant
		},
		{
			id: "resource",
			label: X("catalog:shared.searchTorrents"),
			icon: cn,
			run: t.onResource
		}
	];
	return e.link && n.push({
		id: "source",
		label: X("catalog:shared.viewOnSite"),
		icon: qe,
		run: () => {
			window.open(e.link, "_blank", "noopener,noreferrer");
		}
	}), t.selection && n.push({
		id: "select",
		label: X(t.selection.selected.has(e.code) ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: de,
		run: () => t.selection?.toggle(e)
	}), {
		key: e.code,
		operations: n
	};
}
// src/react/jav/jav-facets.tsx
function Or(e, t, n, r) {
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
function kr({ person: e, count: t, pressed: n, onClick: r }) {
	qn();
	let i = rt(e);
	return /* @__PURE__ */ (0, $.jsx)(g, {
		name: i,
		pressed: n,
		onClick: r,
		ringHtml: $e(e.name, e, null),
		title: X("catalog:javReleases.facetCount", {
			name: i,
			count: t
		})
	});
}
function Ar({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: Zt(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": !0,
		children: Yt(e.name, 1)
	});
}
function jr({ studio: e, count: t, pressed: n, onClick: r, showCount: i = !0 }) {
	return /* @__PURE__ */ (0, $.jsx)(_, {
		name: e.name,
		logo: e.has_logo ? Zt(e.name, "icon", e.logo_version) : void 0,
		fallback: Yt(e.name, 2),
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
function Mr({ name: e, studio: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"data-list-library": "",
		title: e,
		children: [/* @__PURE__ */ (0, $.jsx)(Ar, { studio: t || {
			name: e,
			has_logo: !1
		} }), /* @__PURE__ */ (0, $.jsx)("span", { children: e })]
	});
}
function Nr({ studio: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, $.jsx)(w, { studio: e }), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: e.name
		})]
	});
}
// src/react/jav/discovery-card.tsx
var Pr = (e) => ({
	...e,
	cover: e.has_cover ? vt(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Fr = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Ir({ item: e, readOnly: t }) {
	let n = Un(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(mt.subscribe, mt.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: X("catalog:shared.noCover")
	});
	if (a === "fetching" || mt.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: ht() } });
	let o = () => {
		n.run("cover", (t) => kt(e.code, t), (t) => {
			t.has_cover ? pt(e.code, t) : i(t.message || X("catalog:javDiscovery.noOfficialCover"));
		});
	}, c = r || n.error ? "missing" : a, u = n.error || r || gt(e);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": c,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			c === "queued" ? /* @__PURE__ */ (0, $.jsx)(s, {
				kind: "clock",
				size: "card",
				still: !0
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: f[c]
			}),
			u ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: u,
				children: u
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(l, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: _t(c)
			})
		]
	});
}
function Lr({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a = "", onTag: o, wanting: s, onWant: d, onResource: f, badge: m, onFilterPerson: h, studioFilter: g }) {
	qn();
	let _ = !!h, v = pr(), y = e.code ? v : null, b = ir(), x = !_ && d && f ? Dr(e, {
		selection: y,
		readOnly: r,
		wanting: !!s,
		navigate: i,
		onWant: d,
		onResource: f
	}) : null, S = y?.selected.has(e.code), C = !_ && !!v?.dense, w = xt(e.performer_refs, e.performers), ee = Kt(w.map((e) => e.name)), T = w[0], E = T ? rt(T) : "", D = _ && e.duration ? It(e.duration) : "", te = bt(e, t, n), O = e.asset_id ? `/assets/${e.asset_id}` : e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, k = !e.code && !!e.link, A = () => {
		k ? window.open(O, "_blank", "noopener") : i(O);
	};
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-rectangle-key": e.code || void 0,
		"data-selected": S ? "" : void 0,
		onMouseDown: Ln,
		onContextMenu: x ? (e) => b.onContextMenu(e, x) : void 0,
		onKeyDown: x ? (e) => b.onKeyDown(e, x) : void 0,
		onClickCapture: (t) => {
			t.target.closest("[data-work-context-menu], [data-cast-popover]") || y && (y.mode || Rt(t)) && (t.preventDefault(), t.stopPropagation(), y.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input,[role=\"dialog\"]") || A();
		},
		children: [
			b.menu,
			te ? /* @__PURE__ */ (0, $.jsxs)("a", {
				href: O,
				"aria-label": X("catalog:javDiscovery.viewDetails", { code: e.code || e.title }),
				...k ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				onClick: (e) => {
					k || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), A());
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Fr,
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					artwork: {
						kind: "cover",
						html: te
					},
					identity: bt(e, "small", n),
					relayout: (e) => pn(e, t)
				}), D ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-duration": "",
					children: D
				}) : null]
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Fr,
				children: /* @__PURE__ */ (0, $.jsx)(Ir, {
					item: e,
					readOnly: r
				})
			}),
			y?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
				"aria-pressed": !!S,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Er, {
					item: e,
					limit: _ ? 3 : void 0
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
									lang: Bn(e.title),
									children: e.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(Tr, {
									person: T,
									name: E,
									title: ee,
									onFilter: h,
									icon: !0
								}),
								/* @__PURE__ */ (0, $.jsx)(p, {
									people: w,
									total: e.performer_total,
									assetId: e.asset_id ?? void 0,
									code: e.code,
									subscribe: !0,
									onFilter: h
								}),
								e.release_date || g && e.studio_ref ? /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-facts": "",
									children: [e.release_date ? /* @__PURE__ */ (0, $.jsxs)("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ (0, $.jsx)("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
										}), e.release_date]
									}) : null, g && e.studio_ref ? /* @__PURE__ */ (0, $.jsx)("button", {
										"data-media-who": "",
										"data-inline-action": "",
										type: "button",
										"aria-pressed": g.selected,
										title: e.studio_ref.name,
										onClick: g.onPress,
										children: /* @__PURE__ */ (0, $.jsx)(Nr, { studio: e.studio_ref })
									}) : null]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [m, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
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
			y?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": C ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(u, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: C ? "small" : "medium",
						iconOnly: C,
						"aria-label": X("catalog:shared.viewOnSite"),
						title: X("catalog:shared.viewOnSite"),
						leadingIcon: C ? qe : void 0,
						trailingIcon: C ? void 0 : qe,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: C ? null : _ ? /* @__PURE__ */ (0, $.jsx)(Le, {
							site: "dmm",
							label: "DMM"
						}) : /* @__PURE__ */ (0, $.jsx)("span", {
							"data-external-link-label": "",
							children: X("catalog:shared.viewOnSite")
						})
					}) : null,
					d ? /* @__PURE__ */ (0, $.jsx)(l, {
						variant: "ghost",
						size: C ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...et(!!s),
						onClick: d,
						children: e.asset_id ? X("catalog:javWant.imported") : e.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
					}) : null,
					f ? /* @__PURE__ */ (0, $.jsx)(l, {
						variant: "secondary",
						size: C ? "small" : "medium",
						onClick: f,
						children: X("catalog:shared.searchTorrents")
					}) : null
				]
			})
		]
	});
}
// src/react/jav/jav-code-filter.tsx
function Rr(e) {
	return e.normalize("NFKC").toLowerCase().replace(/[\s_\-‐‑‒–—―]+/g, "");
}
function zr(e, t) {
	return Rr(e).includes(Rr(t));
}
function Br({ value: e, onChange: t }) {
	let [n, r] = (0, Q.useState)(e), i = X("catalog:columnFilter.search", { column: X("catalog:shared.code") });
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		className: "flex flex-col gap-3 p-3",
		"data-copy-interact": "",
		onSubmit: (e) => {
			e.preventDefault(), Rr(n) && t(n.trim());
		},
		children: [/* @__PURE__ */ (0, $.jsx)(F, {
			size: "small",
			label: i,
			value: n,
			onChange: r,
			maxLength: 80
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex justify-end gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(l, {
				variant: "ghost",
				size: "small",
				type: "button",
				disabled: !e,
				onClick: () => t(""),
				children: X("catalog:shared.clearFilters")
			}), /* @__PURE__ */ (0, $.jsx)(l, {
				size: "small",
				type: "submit",
				disabled: !Rr(n),
				children: X("follow:shared.search")
			})]
		})]
	});
}
// src/react/jav/jav-release-table.tsx
var Vr = {
	widths: Ee,
	visibility: Te
}, Hr = {
	...Oe,
	taste: "taste"
};
function Ur({ column: e, label: t, filters: n, onChange: r }) {
	let i = e === "people" ? "performer" : e === "tags" ? "tag" : "studio", a = Pn(n, i, void 0);
	return /* @__PURE__ */ (0, $.jsx)(He, {
		id: e,
		label: t,
		values: mn(n, i),
		load: async (t, n, r) => {
			let i = await Mt(a, e, n, r, t);
			return {
				items: i.items.map((t) => {
					let n = e === "people" ? t : null, r = n && Dt("performer", n.name, n.id);
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
function Wr({ items: a, waiting: o, filters: s, discovery: u, studios: d = [], facets: m, javImage: h, readOnly: g, navigate: _, onTag: b, onFilter: x, onRange: S, onSort: C, wanting: w, onWant: ee, onResource: T, selecting: E = !0, tableTop: D }) {
	let k = pr(), A = ir(), j = (e) => Dr(e, {
		selection: k,
		readOnly: g,
		wanting: w(e),
		navigate: _,
		onWant: () => ee(e),
		onResource: () => T(e)
	}), ne = nr(u ? te : "jav-releases", u ? St : gn, u ? O : Vr), N = ne.columns.filter((e) => e.required || ne.visibility[e.id] !== !1), re = u ? Hr : Oe, P = Object.entries(re).find(([, e]) => e === (u?.sort ?? s?.sort))?.[0], ie = u?.dir ?? s?.dir, ae = dn(s?.column_filters), oe = s ? hn(s, "tag") : u?.tag ? [u.tag] : [], se = X(u ? "catalog:javTabs.discover" : "catalog:javReleases.list"), ce = new Map(d.map((e) => [e.name, e])), le = (e) => (t) => {
		t.preventDefault(), k?.mode || Rt(t) ? k?.toggle(e, t.shiftKey) : _(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`);
	}, ue = (e, t) => {
		switch (e) {
			case "name": {
				let e = bt(t, "small", h);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: le(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(c, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => pn(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: gt(t) || void 0,
								children: t.cover_state ? f[t.cover_state] : X("catalog:shared.noCover")
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || X("catalog:javDiscovery.titleNotFound")}`,
							"aria-label": X("catalog:javDiscovery.viewDetails", { code: t.code }),
							onClick: le(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Bn(t.title),
									children: t.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						})
					})]
				});
			}
			case "people": {
				let e = xt(t.performer_refs, t.performers), n = e[0];
				return n ? /* @__PURE__ */ (0, $.jsx)(Se, {
					avatar: /* @__PURE__ */ (0, $.jsx)(Er, { item: t }),
					cast: /* @__PURE__ */ (0, $.jsx)(p, {
						people: e,
						total: t.performer_total,
						assetId: t.asset_id ?? void 0,
						code: t.code,
						subscribe: !0
					}),
					children: /* @__PURE__ */ (0, $.jsx)(Tr, {
						person: n,
						name: rt(n),
						title: n.name
					})
				}) : "—";
			}
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsx)(Mr, {
				name: t.studio,
				studio: t.studio_ref || ce.get(t.studio)
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": oe.includes(e),
					onClick: () => b(e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return It(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "taste": return wt(t.taste_score ?? t.score);
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					disabled: g || t.wanted || !!t.asset_id,
					...et(w(t)),
					onClick: () => ee(t),
					children: t.asset_id ? X("catalog:javWant.imported") : t.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
				}), /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "secondary",
					onClick: () => T(t),
					children: X("catalog:shared.searchTorrents")
				})]
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-table": "",
		"data-catalog-view-mode": "list",
		"data-release-table": "",
		"data-discover-table": u ? "" : void 0,
		className: "flex min-w-0 flex-col gap-4",
		onKeyDown: (e) => {
			let t = e.target.closest("[data-release-row]"), n = t && a.find((e) => String(e.id) === t.dataset.releaseId);
			n && !o && A.onKeyDown(e, j(n), t);
		},
		children: [
			A.menu,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-wrap justify-end gap-2",
				role: "toolbar",
				"aria-label": u ? se : X("catalog:javReleases.toolbar"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-toolbar-actions": "",
					children: /* @__PURE__ */ (0, $.jsx)(Ve, {
						preferences: ne,
						label: se
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(M, {
				ref: D,
				follow: !0,
				preferences: ne,
				rectangleSelecting: !!k?.mode,
				onRectangle: E && !o && a.length ? k?.selectRectangle : void 0,
				onRowClick: E && !o && k?.mode ? (e) => {
					let t = a.find((t) => String(t.id) === e);
					t && k.toggle(t);
				} : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)(Be, {
					"aria-label": se,
					size: "sm",
					sortDescriptor: P ? {
						column: P,
						direction: ie === "asc" ? "ascending" : "descending"
					} : void 0,
					onSortChange: (e) => {
						let t = re[String(e.column)];
						t && C(t, e.direction === "ascending" ? "asc" : "desc");
					},
					children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [
						k?.mode ? /* @__PURE__ */ (0, $.jsx)(t, {
							id: "selection",
							width: 44,
							"aria-label": X("catalog:javReleases.selectVideos"),
							children: /* @__PURE__ */ (0, $.jsx)(v, {
								slot: null,
								"aria-label": X("catalog:catalogList.selectAllOnPage"),
								isSelected: k.all,
								isIndeterminate: k.mixed,
								isDisabled: o || !a.length,
								onChange: k.selectPage
							})
						}) : null,
						N.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
							id: e.id,
							isRowHeader: e.id === "name",
							allowsSorting: e.id in re,
							...ne.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [u?.headers[e.id] ?? (s && S && (e.id === "release" || e.id === "dur" || e.id === "score") ? /* @__PURE__ */ (0, $.jsx)(Ue, {
									id: e.id,
									label: e.label,
									kind: ot[e.id],
									value: ae[e.id],
									rangeQuery: e.id === "release" ? _n(s) : void 0,
									onChange: (t) => S(e.id, t)
								}) : s && m && x && [
									"people",
									"studio",
									"tags"
								].includes(e.id) ? /* @__PURE__ */ (0, $.jsx)(Ur, {
									column: e.id,
									label: e.label,
									filters: s,
									onChange: x
								}) : e.label), e.id in re ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(y, {})
								}) : null]
							}), /* @__PURE__ */ (0, $.jsx)(K, {
								preferences: ne,
								id: e.id
							})] })
						}, e.id)),
						/* @__PURE__ */ (0, $.jsx)(t, {
							id: "remaining-space",
							"aria-label": X("catalog:catalogList.rowSpacer"),
							"data-table-space": "",
							width: ne.spaceWidth,
							minWidth: 0
						})
					] }), /* @__PURE__ */ (0, $.jsx)(e, {
						renderEmptyState: () => X("catalog:javReleases.noMatches"),
						children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: `skeleton-${t}`,
							"data-list-skeleton-row": "",
							"aria-hidden": "true",
							children: [
								k?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null,
								N.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: it(e.id) } }) }, e.id)),
								/* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })
							]
						}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: String(e.id),
							"data-catalog-row": "",
							"data-release-row": "",
							"data-release-id": e.id,
							"data-rectangle-key": e.code,
							"data-board-selected": k?.selected.has(e.code) || void 0,
							onContextMenu: (t) => A.onContextMenu(t, j(e)),
							children: [
								k?.mode ? /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(v, {
									slot: null,
									"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
									isSelected: k.selected.has(e.code),
									onChange: () => k.toggle(e)
								}) }) : null,
								N.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: ue(t.id, e) }, t.id)),
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
var Gr = `<div data-catalog-tier="performers" data-skeleton="tiers">${Vn("performer")}</div><div data-catalog-tier="studios">${Vn("studio")}</div>`;
function Kr({ value: e }) {
	let t = fn(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: X("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(b, {
			color: t.color,
			children: t.label
		})
	});
}
var qr = (e) => kt(e).then((t) => (t.has_cover && pt(e, t), t.has_cover));
function Jr({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let [o, s] = (0, Q.useState)(() => vn(location.search)), c = (0, Q.useSyncExternalStore)(Qe().subscribe, () => xn("jav-releases", 24));
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
	let f = (e, t) => {
		let n = Pn(o, e, t);
		s(n), Z({
			[e]: "",
			column_filters: n.column_filters || "",
			page: ""
		});
	}, p = (e, t) => {
		let n = mn(o, e);
		f(e, n === void 0 ? [t] : Hn(n, t, !ct(n, t)));
	}, g = (e) => {
		s((t) => ({
			...t,
			column_filters: e,
			page: 1
		})), Z({
			column_filters: e,
			page: ""
		});
	}, _ = (e, t) => g(lr(dn(o.column_filters), e, t)), v = (e) => {
		s((t) => ({
			...t,
			code: e,
			page: 1
		})), Z({
			code: e,
			page: ""
		});
	}, y = dn(o.column_filters), b = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? an : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(We, {
			label: t,
			kind: ot[e],
			value: y[e],
			rangeQuery: e === "release" ? _n(o) : void 0,
			onChange: (t) => {
				_(e, t), n();
			}
		})
	}), x = (0, Q.useRef)(null), C = (0, Q.useRef)(null), ee = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1, r = t !== o.size;
		r && bn("jav-releases", t), s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			...r && { size: String(t) }
		}), M !== "list" && x.current?.scrollIntoView({ block: "start" });
	}, D = () => {
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
	}, te = (e, t) => {
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
		let e = [...x.current?.querySelectorAll("[data-catalog-tier],[data-filter-row=\"bottom\"]") || []].map((e) => sr(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let k = Qe();
	(0, Q.useSyncExternalStore)(k.subscribe, k.version, k.version);
	let A = Vt(), M = Wn(), ne = nt(Lt({
		active: !0,
		home: !1,
		portrait: !1
	})), N = Zn({
		queryKey: yn(o),
		queryFn: ({ signal: e }) => Nt(o, e),
		placeholderData: qt,
		retry: !1,
		refetchOnWindowFocus: !1
	}), ie = N.data?.metadata_job, se = (0, Q.useRef)(!1);
	se.current = ie?.status === "running";
	let ue = un.getQueryData(E)?.metadata_job, de = Zn({
		queryKey: E,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: ie?.status === "running" || ue?.status === "running",
		queryFn: ({ signal: e }) => jt(e),
		refetchInterval: Qt(() => se.current)
	}), fe = de.data && de.dataUpdatedAt >= N.dataUpdatedAt ? de.data.metadata_job : ie, F = fe?.status === "running", he = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		he.current && !F && N.refetch(), he.current = F;
	}, [F, N]);
	let _e = (0, Q.useRef)(""), ve = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.column_filters,
		o.q,
		o.code,
		o.sort,
		o.dir,
		o.seed
	]), be = !N.isPlaceholderData && (N.data?.metadata_unread || 0) > 0 && !F;
	(0, Q.useEffect)(() => {
		be && _e.current !== ve && (_e.current = ve, ft("start", o).then(async (e) => {
			await un.cancelQueries({ queryKey: E }), un.setQueryData(E, e);
		}).catch(() => {}));
	}, [be, ve]);
	let xe = Un(), Se = (e) => {
		xe.run(String(e.id), (t) => Xe({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), zt(), N.refetch();
		});
	}, I = N.data, L = (I?.facets.tags || []).map((e) => ({
		id: e.name,
		label: e.name,
		count: e.count,
		selected: hn(o, "tag").includes(e.name)
	}));
	hr(I?.items || []);
	let z = N.isPending, Ce = mr(!z && !N.isPlaceholderData), B = !!(o.performer || o.studio || o.tag || o.column_filters || o.q || o.code), V = Math.max(1, Math.ceil((I?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!I || N.isPlaceholderData || o.page <= V || (s((e) => ({
			...e,
			page: V
		})), Z({ page: V > 1 ? String(V) : "" }));
	}, [
		I,
		N.isPlaceholderData,
		o.page,
		V
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: x,
		"aria-label": X("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": z || N.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			z ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				className: pe,
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: Gr }
			}) : null,
			I && (I.facets.performers.length || I.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				className: pe,
				children: [I.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: I.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsx)(kr, {
						person: e,
						count: e.count,
						pressed: hn(o, "performer").includes(e.name),
						onClick: () => p("performer", e.name)
					}, e.name))
				}) : null, I.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: I.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsx)(jr, {
						studio: e,
						count: e.count,
						pressed: hn(o, "studio").includes(e.name),
						onClick: () => p("studio", e.name)
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(oe, {
				label: X("catalog:javReleases.filtersLabel"),
				topLabel: X("catalog:catalogFilter.viewsAndTags"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: z,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: z || L.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: z ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Wt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ce, {
						choices: L,
						onSelect: (e) => p("tag", e)
					})
				}) : null,
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: z ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : B ? X("catalog:javReleases.matchedCount", {
							matched: I?.total || 0,
							count: I?.candidate_total || 0
						}) : X("catalog:countLabel.works", { count: I?.total || 0 })
					}),
					/* @__PURE__ */ (0, $.jsx)(ye, { tab: "releases" }),
					B ? /* @__PURE__ */ (0, $.jsx)(P, {
						onPress: D,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(le, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Ie, {
							onPress: O,
							busy: o.sort === "random" && N.isFetching
						}), /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Me, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: A,
							options: me,
							onChange: In
						}) })] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								choices: (I?.facets.performers || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: hn(o, "performer").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: e })
								})),
								onSelect: (e) => p("performer", e),
								active: mn(o, "performer") !== void 0,
								onClear: mn(o, "performer") === void 0 ? void 0 : () => f("performer", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-studios",
								orderKey: "studio",
								label: X("catalog:shared.label"),
								choices: (I?.facets.studios || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: hn(o, "studio").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: e })
								})),
								onSelect: (e) => p("studio", e),
								active: mn(o, "studio") !== void 0,
								onClear: mn(o, "studio") === void 0 ? void 0 : () => f("studio", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								choices: L,
								onSelect: (e) => p("tag", e),
								active: mn(o, "tag") !== void 0,
								onClear: mn(o, "tag") === void 0 ? void 0 : () => f("tag", void 0)
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(Re, {
							group: "releases",
							sorts: De.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === o.sort,
								dir: o.dir
							})),
							onSort: (e, t) => te(e, t),
							filters: {
								release_date: b("release", X("catalog:catalogList.releaseDate")),
								duration: b("dur", X("catalog:catalogList.duration")),
								source_score: b("score", X("catalog:javSort.siteRating")),
								taste: b("taste", X("catalog:javSort.taste")),
								code: {
									active: !!o.code,
									render: (e) => /* @__PURE__ */ (0, $.jsx)(Br, {
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
			M === "cards" && o.column_filters ? /* @__PURE__ */ (0, $.jsx)(m, {
				encoded: o.column_filters,
				columns: [...gn, {
					id: "taste",
					label: X("catalog:javSort.taste")
				}],
				onChange: g
			}) : null,
			z && M === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: Bt("discover", A) }
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: X("catalog:javReleases.failed"),
				children: Ot(N.error)
			}) : null,
			F && fe ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(J, {
					kind: Ye("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: fe.completed,
						count: fe.total
					}),
					value: fe.completed,
					total: fe.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(T, {
				scope: X("catalog:javReleases.coverQueueScope"),
				fetchOne: qr,
				codes: (I?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? X("catalog:javReleases.coversFetched", { count: n }) : X("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), N.refetch();
				}
			}),
			!z && !N.error && !I?.items.length && (M === "cards" || !B) ? /* @__PURE__ */ (0, $.jsx)(re, {
				icon: d,
				title: X(B ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: B ? /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					onClick: D,
					children: X("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: X("catalog:javReleases.addSubscription")
				}),
				children: X(B ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			xe.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				children: xe.error
			}) : null,
			M === "list" ? z || I?.items.length || B ? /* @__PURE__ */ (0, $.jsx)(Wr, {
				items: I?.items || [],
				waiting: z,
				filters: o,
				tableTop: C,
				selecting: !N.isPlaceholderData,
				studios: I?.facets.studios || [],
				javImage: k.value.javImage,
				readOnly: e,
				navigate: i,
				facets: I?.facets,
				onFilter: f,
				onRange: _,
				onTag: (e) => p("tag", e),
				onSort: te,
				wanting: (e) => xe.busy === String(e.id),
				onWant: Se,
				onResource: (e) => n(Pr(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": ne },
				...Ce,
				children: (I?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Lr, {
					item: t,
					layout: A,
					javImage: k.value.javImage,
					readOnly: e,
					navigate: i,
					tag: hn(o, "tag"),
					onTag: (e) => p("tag", e),
					wanting: xe.busy === String(t.id),
					onWant: () => Se(t),
					onResource: () => n(Pr(t)),
					badge: o.sort === "taste" || y.taste ? /* @__PURE__ */ (0, $.jsx)(Kr, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			I ? /* @__PURE__ */ (0, $.jsx)(j, {
				label: X("catalog:javTabs.newReleases"),
				total: I.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: ee,
				scrollTarget: M === "list" ? C : void 0,
				stickyHeader: () => x.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit"),
				pageSizes: W
			}) : null
		]
	});
}
// src/react/jav/online-catalog-table.tsx
var Yr = Rn({
	rowSortingFeature: kn,
	rowSelectionFeature: On,
	columnVisibilityFeature: lt,
	columnOrderingFeature: at
}), Xr = [{
	id: "select",
	label: X("catalog:javReleases.selectVideos"),
	width: 44,
	min: 44,
	max: 44,
	required: !0
}, ...tn], Zr = X("catalog:javTabs.online");
function Qr({ items: a, waiting: o, javImage: s, maker: l, genres: u, sorting: d, headers: f, empty: m, onSort: h, onFilter: g, onStudio: _, onTag: b }) {
	let x = pr(), S = !!x?.mode, C = !o && a.some((e) => e.code), w = nr(B, Xr, V), ee = (0, Q.useMemo)(() => {
		let e = yt();
		return e.columns(Xr.map((t) => e.accessor((e) => {
			switch (t.id) {
				case "release": return e.release_date;
				case "dur": return e.duration;
				case "code": return e.code;
				default: return;
			}
		}, {
			id: t.id,
			header: t.label,
			enableSorting: z.some(([e]) => e === t.id)
		})));
	}, []), T = tr({
		features: Yr,
		columns: ee,
		data: a,
		getRowId: (e) => e.catalogId,
		manualSorting: !0,
		state: {
			sorting: [{
				id: d.sort,
				desc: d.dir === "desc"
			}],
			rowSelection: Object.fromEntries(a.filter((e) => e.code && x?.selected.has(e.code)).map((e) => [e.catalogId, !0])),
			columnOrder: w.columnOrder,
			columnVisibility: {
				...w.visibility,
				select: S
			}
		},
		onSortingChange: (e) => {
			let t = [{
				id: d.sort,
				desc: d.dir === "desc"
			}], [n] = typeof e == "function" ? e(t) : e, r = z.find(([e]) => e === n?.id)?.[0];
			r && n && h(r, n.desc ? "desc" : "asc");
		}
	}), E = T.getHeaderGroups()[0].headers, D = (e, t) => {
		switch (e) {
			case "select": return t.code ? /* @__PURE__ */ (0, $.jsx)(v, {
				slot: null,
				"aria-label": X("catalog:javDiscovery.select", { code: t.code }),
				isSelected: x?.selected.has(t.code),
				onChange: () => x?.toggle(t)
			}) : null;
			case "name": {
				let e = bt(t, "small", s), n = t.code ? `/works/${encodeURIComponent(t.code)}` : t.link, r = t.code ? {} : {
					target: "_blank",
					rel: "noopener noreferrer"
				}, i = (e) => {
					t.code && x && (S || Rt(e)) && (e.preventDefault(), x.toggle(t, e.shiftKey));
				};
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("a", {
						"data-list-open": "",
						href: n,
						onClick: i,
						tabIndex: -1,
						"aria-hidden": !0,
						...r,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(c, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => pn(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", { children: X("catalog:shared.noCover") })
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("a", {
							"data-list-work-link": "",
							href: n,
							onClick: i,
							title: t.code ? `${t.code} · ${t.title}` : t.title,
							...r,
							children: [t.code ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-list-code": "",
								className: "text-body-2-regular text-text-primary",
								children: t.code
							}) : null, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-list-name": "",
								"data-external-link-label": t.code ? void 0 : "",
								lang: Bn(t.title),
								children: t.title
							})]
						})
					})]
				});
			}
			case "people": {
				let e = xt(t.performer_refs, t.performers), n = e[0];
				if (!n) return "—";
				let r = rt(n);
				return /* @__PURE__ */ (0, $.jsx)(Se, {
					avatar: /* @__PURE__ */ (0, $.jsx)(Er, { item: t }),
					cast: /* @__PURE__ */ (0, $.jsx)(p, {
						people: e,
						code: t.code,
						subscribe: !0,
						onFilter: g
					}),
					children: /* @__PURE__ */ (0, $.jsx)(Tr, {
						person: n,
						name: r,
						title: n.name,
						onFilter: g
					})
				});
			}
			case "studio": {
				let e = t.studioOption;
				return e ? /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-inline-action": "",
					className: "max-w-full cursor-pointer",
					"aria-pressed": l === e.id,
					onClick: () => _(e.id),
					children: /* @__PURE__ */ (0, $.jsx)(Mr, {
						name: t.studio,
						studio: e
					})
				}) : "—";
			}
			case "tags": return t.tagOptions.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tagOptions.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": u.includes(e.id),
					onClick: () => b(e.id),
					children: e.source_name
				}, e.id))
			}) : "—";
			case "release": return /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [t.release_date ? /* @__PURE__ */ (0, $.jsx)("time", {
					dateTime: t.release_date,
					children: t.release_date
				}) : "—", t.preOrder ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: X("catalog:javOnline.preOrder")
				}) : null]
			});
			case "dur": return It(t.duration) || "—";
			case "code": return t.code || "—";
			default: return /* @__PURE__ */ (0, $.jsx)(xe, {
				href: t.link,
				target: "_blank",
				rel: "noopener noreferrer",
				title: t.link,
				size: "small",
				trailingIcon: qe,
				children: /* @__PURE__ */ (0, $.jsx)(Le, {
					site: "dmm",
					label: "DMM"
				})
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-view-mode": "list",
		"data-catalog-table": "",
		"data-release-table": "",
		"data-online-catalog-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(q, {
			className: "flex flex-wrap justify-end gap-2",
			label: X("shell:dataTable.toolbar", { label: Zr }),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(Ve, {
					preferences: w,
					label: Zr
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(M, {
			follow: !0,
			preferences: w,
			rectangleSelecting: S,
			onRectangle: C ? x?.selectRectangle : void 0,
			onRowClick: C && x ? (e, t) => {
				if (!S && !Rt(t)) return;
				let n = T.getRow(e)?.original;
				n?.code && x.toggle(n, t.shiftKey);
			} : void 0,
			children: /* @__PURE__ */ (0, $.jsxs)(Be, {
				size: "sm",
				"aria-label": Zr,
				sortDescriptor: {
					column: d.sort,
					direction: d.dir === "asc" ? "ascending" : "descending"
				},
				onSortChange: (e) => T.setSorting([{
					id: String(e.column),
					desc: e.direction === "descending"
				}]),
				children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [E.map((e) => {
					let n = e.id;
					return n === "select" ? /* @__PURE__ */ (0, $.jsx)(t, {
						id: n,
						"aria-label": X("catalog:javReleases.selectVideos"),
						...w.columnProps(n),
						children: /* @__PURE__ */ (0, $.jsx)(v, {
							slot: null,
							"aria-label": X("catalog:catalogList.selectAllOnPage"),
							isSelected: x?.all,
							isIndeterminate: x?.mixed,
							isDisabled: !C,
							onChange: x?.selectPage
						})
					}, n) : /* @__PURE__ */ (0, $.jsx)(t, {
						id: n,
						isRowHeader: n === "name",
						allowsSorting: e.column.getCanSort(),
						...w.columnProps(n),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [f[n] ?? Ft(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, $.jsx)(y, {})
							}) : null]
						}), /* @__PURE__ */ (0, $.jsx)(K, {
							preferences: w,
							id: n
						})] })
					}, n);
				}), /* @__PURE__ */ (0, $.jsx)(t, {
					id: "remaining-space",
					"aria-label": X("catalog:catalogList.rowSpacer"),
					"data-table-space": "",
					width: w.spaceWidth,
					minWidth: 0
				})] }), /* @__PURE__ */ (0, $.jsx)(e, {
					renderEmptyState: () => m,
					children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [E.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: e.id === "select" ? null : /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: it(e.id, !0) } }) }, e.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, t)) : T.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: e.id,
						"data-catalog-row": "",
						"data-release-row": "",
						"data-rectangle-key": e.original.code || void 0,
						"data-rectangle-disabled": !e.original.code || void 0,
						"data-board-selected": e.getIsSelected() || void 0,
						children: [e.getVisibleCells().map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: D(t.column.id, e.original) }, t.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/online-catalog.tsx
var $r = Xt(["performer"]), ei = [];
async function ti(e, t) {
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
function ni() {
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
var ri = ["release", "dur"], ii = new Intl.Collator(void 0, {
	numeric: !0,
	sensitivity: "base"
});
function ai(e, { sort: t, dir: n }) {
	if (t === "release" && n === "desc") return e;
	let r = (e) => t === "dur" ? e.duration : t === "code" ? e.code : e.date;
	return [...e].sort((e, t) => {
		let i = r(e), a = r(t);
		if (!i || !a) return Number(!i) - Number(!a);
		let o = typeof i == "number" && typeof a == "number" ? i - a : ii.compare(String(i), String(a));
		return n === "asc" ? o : -o;
	});
}
function oi(e) {
	return e ? e.split(",") : [];
}
function si({ filters: e, data: t, people: n, selected: r, go: i, close: a }) {
	let [o, s] = (0, Q.useState)(e.performer), c = Gn("online-performer", o, $r), u = (t, n) => {
		i({
			...e,
			performer: t,
			actress: n,
			page: 1
		}), a();
	};
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		"aria-label": X("follow:addJavFeed.actressName"),
		className: "py-3 outline-none",
		children: [/* @__PURE__ */ (0, $.jsxs)("form", {
			className: "flex flex-col gap-3 px-3",
			onSubmit: (t) => {
				t.preventDefault();
				let n = o.trim();
				u(n, n === e.performer ? e.actress : "");
			},
			"data-copy-interact": "",
			children: [
				/* @__PURE__ */ (0, $.jsx)(F, {
					size: "small",
					label: X("follow:addJavFeed.actressName"),
					value: o,
					onChange: s,
					maxLength: 120,
					ref: c.bind
				}),
				c.list,
				t && t.performer_options.length > 1 ? /* @__PURE__ */ (0, $.jsx)(Ne, {
					size: "sm",
					"aria-label": X("catalog:javOnline.performerPage"),
					prefix: X("catalog:javOnline.performerPage"),
					selectedKey: t.selected_actress,
					onSelectionChange: (t) => {
						t !== null && u(e.performer, String(t));
					},
					children: t.performer_options.map((e) => /* @__PURE__ */ (0, $.jsx)(Pe, {
						id: e.id,
						children: Tt(e.name)
					}, e.id))
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [e.performer || e.actress ? /* @__PURE__ */ (0, $.jsx)(l, {
						size: "small",
						variant: "ghost",
						type: "button",
						onClick: () => u("", ""),
						children: X("catalog:rangeFilter.clear")
					}) : null, /* @__PURE__ */ (0, $.jsx)(l, {
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
			}), /* @__PURE__ */ (0, $.jsx)(ie, {
				choices: n.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: rt(t),
					searchTerms: [t.name],
					selected: e === r,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => {
					let t = n.find((t) => t.id === e)?.value;
					t && u(e === r ? "" : t.name, e === r ? "" : e);
				}
			})]
		}) : null]
	});
}
function ci({ navigate: e, query: t = "" }) {
	qn();
	let [n, r] = (0, Q.useState)(ni), [i, o] = (0, Q.useState)(nn), [s, c] = (0, Q.useState)(() => new URLSearchParams(location.search).get("code") || ""), [u, d] = (0, Q.useState)(() => {
		let { release: e, dur: t } = dn(new URLSearchParams(location.search).get("column_filters") || void 0);
		return {
			release: e,
			dur: t
		};
	}), [f, p] = (0, Q.useState)(rn), [m, g] = (0, Q.useState)({}), [_, v] = (0, Q.useState)(""), y = Qe();
	(0, Q.useSyncExternalStore)(y.subscribe, y.version, y.version);
	let x = Wn(), S = Vt(), T = nt(Lt({
		active: !0,
		home: !1,
		portrait: !1
	})), E = X("catalog:javTabs.online"), D = X("catalog:shared.performers"), te = X("catalog:shared.label"), O = X("catalog:shared.tags"), k = X("catalog:catalogList.releaseDate"), A = Qn(), j = Zn({
		queryKey: ["jav-catalog", n],
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 3e5,
		placeholderData: qt,
		queryFn: async ({ signal: e }) => ti(await Ze(`/api/jav/catalog?${new URLSearchParams({
			...n,
			page: String(n.page)
		})}`, e), e)
	}), M = j.isPending || j.isPlaceholderData, N = j.isPending;
	(0, Q.useEffect)(() => {
		let e = j.data;
		if (M || !e || e.page === n.page) return;
		let t = {
			...n,
			page: e.page
		};
		A.setQueryData(["jav-catalog", t], e), r(t), Z({ page: e.page > 1 ? String(e.page) : "" });
	}, [
		n,
		j.data,
		A,
		M
	]);
	let P = (e, t = {}) => {
		r(e), Z({
			...e,
			...t,
			page: e.page > 1 ? String(e.page) : ""
		});
	}, ie = (e, t) => {
		o({
			sort: e,
			dir: t
		}), Z({
			sort: e === "release" ? "" : e,
			dir: t === "asc" ? "asc" : ""
		});
	}, se = Yn(), ue = Yn(), de = Yn(), fe = (0, Q.useRef)(null), F = (0, Q.useRef)(null), he = Jn(f), _e = (e) => {
		p(e), Z({ status: e === "all" ? "" : e });
	}, ve = !!(n.performer || n.actress), be = ve ? "online-performer" : n.maker ? "online-studio" : n.genre ? "online-tags" : "", xe = _ || be, Se = rr(F, fe, "[data-glide-anchor]", xe), I = (e) => ({
		anchor: xe === e,
		onPointerEnter: Se.hover,
		onOpenChange: (t) => v((n) => t ? e : n === e ? "" : n)
	}), L = n.actress || (M ? "" : j.data?.selected_actress || ""), B = j.data?.items ?? ei, V = (0, Q.useMemo)(() => {
		let e = t.toLocaleLowerCase();
		return e ? B.filter((t) => [
			t.code,
			t.title,
			t.studio?.name ?? "",
			...t.people.map((e) => e.name),
			...t.tags.map((e) => e.name)
		].join(" ").toLocaleLowerCase().includes(e)) : B;
	}, [B, t]), H = oi(n.genre), we = Or(V, (e) => e.people, (e) => e.dmm_id, [L]), Te = Or(V, (e) => e.studio ? [e.studio] : [], (e) => e.id, [n.maker]), Ee = Or(V, (e) => e.tags, (e) => e.id, H), W = Ee.map(({ id: e, value: t, count: n }) => ({
		id: e,
		label: t.source_name,
		searchTerms: [t.name],
		count: n,
		selected: H.includes(e)
	})), De = we.find((e) => e.id === L)?.value, Oe = De ? rt(De) : Tt(j.data?.performer_options.find((e) => e.id === L)?.name || n.performer || L), ke = Te.find((e) => e.id === n.maker)?.value.name || m[`studio:${n.maker}`] || n.maker, Ae = (e) => Ee.find((t) => t.id === e)?.value.source_name || m[`tag:${e}`] || e, je = (e) => {
		let t = e.dmm_id === L;
		P({
			...n,
			performer: t ? "" : e.name,
			actress: t ? "" : e.dmm_id || "",
			page: 1
		});
	}, G = (e) => {
		let t = Te.find((t) => t.id === e)?.value;
		t && g((n) => ({
			...n,
			[`studio:${e}`]: t.name
		})), P({
			...n,
			maker: e === n.maker ? "" : e,
			page: 1
		});
	}, Ne = (e) => {
		let t = H.includes(e);
		e && !t && g((t) => ({
			...t,
			[`tag:${e}`]: Ae(e)
		}));
		let r = e ? t ? H.filter((t) => t !== e) : [...H, e] : [];
		P({
			...n,
			genre: r.join(","),
			page: 1
		});
	}, Pe = n.date ? { range: {
		min: n.date,
		max: n.date
	} } : u.release, Fe = (e, t) => {
		d(e);
		let n = { column_filters: lr({ release: e.release }, "dur", e.dur) };
		t ? P(t, n) : Z(n);
	}, Ie = (e, t) => {
		let r = e === "release" && t?.range.min === t?.range.max ? String(t?.range.min || "") : "";
		Fe({
			...u,
			[e]: r ? void 0 : t
		}, e === "release" && r !== n.date ? {
			...n,
			date: r,
			page: 1
		} : void 0);
	}, Le = (e) => {
		c(e), Z({ code: e });
	}, ze = (e, t) => /* @__PURE__ */ (0, $.jsx)(C, {
		id: e,
		orderKey: "performer",
		label: D,
		active: ve,
		toolbar: t,
		view: t ? I(e) : void 0,
		children: (e) => /* @__PURE__ */ (0, $.jsx)(si, {
			filters: n,
			data: j.data,
			people: we,
			selected: L,
			go: P,
			close: e
		})
	}), Be = (e, t) => /* @__PURE__ */ (0, $.jsx)(ae, {
		id: e,
		orderKey: "studio",
		toolbar: t,
		view: t ? I(e) : void 0,
		label: te,
		active: !!n.maker,
		hint: X("catalog:javOnline.facetScope"),
		onSelect: G,
		onClear: n.maker ? () => G("") : void 0,
		choices: Te.map(({ id: e, value: t, count: r }) => ({
			id: e,
			label: t.name,
			searchTerms: [t.source_name],
			count: r,
			selected: e === n.maker,
			leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
		}))
	}), Ve = (e, t) => /* @__PURE__ */ (0, $.jsx)(ae, {
		id: e,
		orderKey: "tags",
		toolbar: t,
		view: t ? I(e) : void 0,
		label: O,
		active: !!n.genre,
		hint: X("catalog:javOnline.facetScope"),
		onSelect: Ne,
		onClear: H.length ? () => Ne("") : void 0,
		choices: W
	}), He = (e) => {
		e === "performer" ? P({
			...n,
			performer: "",
			actress: "",
			page: 1
		}) : e === "maker" ? P({
			...n,
			maker: "",
			page: 1
		}) : e === "release" || e === "dur" ? Ie(e, void 0) : e === "code" && Le("");
	}, K = [];
	ve && K.push({
		kind: "clear",
		key: "performer",
		label: `${D} ${Oe}`
	}), n.maker && K.push({
		kind: "clear",
		key: "maker",
		label: `${te} ${ke}`
	});
	for (let e of ri) {
		let t = e === "release" ? Pe : u.dur;
		t && K.push({
			kind: "clear",
			key: e,
			label: `${e === "release" ? k : X("catalog:catalogList.duration")} ${st(ot[e], t.range)}`
		});
	}
	s && K.push({
		kind: "clear",
		key: "code",
		label: `${X("catalog:shared.code")} ${s}`
	});
	for (let e of H) K.push({
		kind: "untag",
		key: e,
		label: Ae(e)
	});
	let q = f !== "all" || !!(s || u.dur || !n.date && u.release), J = (0, Q.useMemo)(() => M ? [] : ai(q ? V.filter((e) => (f === "all" || e.pre_order === (f === "preOrder")) && (!s || zr(e.code, s)) && (n.date || !u.release || cr("date", u.release.range, e.date)) && (!u.dur || cr("duration", u.dur.range, e.duration))) : V, i).map((e, t) => ({
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
		M,
		q,
		V,
		f,
		s,
		n.date,
		u.release,
		u.dur,
		i
	]), Ge = (0, Q.useMemo)(() => J.filter((e) => e.code), [J]);
	hr(Ge);
	let Ke = mr(!M && Ge.length > 0), qe = i.sort !== "release" || i.dir === "asc", Je = x === "list" && (M || !!j.data), Ye = j.data && !M && !J.length && !j.error && !j.data.coverUnverified ? /* @__PURE__ */ (0, $.jsx)(re, {
		icon: ne,
		title: X(V.length ? "catalog:javOnline.noPageMatches" : j.data.total ? "catalog:javOnline.noCoveredWorks" : "catalog:javOnline.noMatches"),
		actions: V.length ? /* @__PURE__ */ (0, $.jsx)(l, {
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
	}) : null;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": E,
		"aria-busy": M,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			N ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: en() }
			}) : we.length || Te.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				className: pe,
				children: [we.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: se,
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: we.map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(kr, {
						person: t,
						count: n,
						pressed: e === L,
						onClick: () => je(t)
					}, e))
				}) : null, Te.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: ue,
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: Te.map(({ id: e, value: t, count: r }) => /* @__PURE__ */ (0, $.jsx)(jr, {
						studio: t,
						count: r,
						pressed: e === n.maker,
						onClick: () => G(e),
						showCount: !1
					}, e))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(oe, {
				label: X("catalog:catalogFilter.filterAndSort"),
				topLabel: X("catalog:catalogFilter.viewsAndTags"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				busy: M,
				panes: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [he.pane, /* @__PURE__ */ (0, $.jsx)("span", {
					ref: F,
					"data-view-glide": "",
					"aria-hidden": "true"
				})] }),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: de,
					"data-catalog-scroll": "",
					children: [he.choices(X("catalog:javOnline.pageStatus"), Ce.map(([e, t]) => ({
						key: e,
						label: X(t),
						attrs: { "data-online-status": e }
					})), _e), N ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Wt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ce, {
						choices: W,
						onSelect: Ne
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-catalog-summary": "",
					children: [
						/* @__PURE__ */ (0, $.jsx)("span", {
							"data-catalog-readout": "",
							children: M ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-skeleton": "count",
								"aria-hidden": !0,
								className: "skeleton-sheen inline-block h-3.5 w-28 rounded-md"
							}) : j.data && (j.data.coverOmitted || q) ? X("catalog:javOnline.coveredCount", {
								shown: J.length,
								total: j.data.total
							}) : X("catalog:countLabel.works", { count: j.data?.total || 0 })
						}),
						qe ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.localSort")
						}) : null,
						q ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.pageFilters")
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(ye, { tab: "online" })
					]
				}), /* @__PURE__ */ (0, $.jsx)(le, {
					tools: /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Me, {
						label: X("catalog:entityFilter.javCardLayout"),
						value: S,
						options: me,
						onChange: In
					}) }) }),
					fieldGroup: {
						ref: fe,
						role: "group",
						"aria-label": X("catalog:javDiscover.filtersLabel"),
						onPointerLeave: Se.leave
					},
					fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
						ze("online-performer", !0),
						Be("online-studio", !0),
						Ve("online-tags", !0)
					] }),
					sorts: /* @__PURE__ */ (0, $.jsx)(Re, {
						group: "javOnline",
						sorts: z.map(([e, t]) => ({
							key: e,
							label: X(t),
							ariaLabel: X(t),
							pressed: i.sort === e,
							dir: i.dir
						})),
						onSort: (e, t) => ie(e, t),
						filters: {
							release: {
								active: !!Pe,
								required: !0,
								shouldCloseOnInteractOutside: an,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(We, {
									label: k,
									kind: "date",
									value: Pe,
									rangeValues: V.map((e) => e.date),
									onChange: (t) => {
										Ie("release", t), e();
									}
								})
							},
							dur: {
								active: !!u.dur,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(We, {
									label: X("catalog:catalogList.duration"),
									kind: "duration",
									value: u.dur,
									onChange: (t) => {
										Ie("dur", t), e();
									}
								})
							},
							code: {
								active: !!s,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Br, {
									value: s,
									onChange: (t) => {
										Le(t), e();
									}
								})
							}
						}
					})
				})] })
			}),
			K.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				items: K,
				hidden: !1,
				actions: {
					toggleTag: Ne,
					clearFilter: He,
					clearAll: () => {
						c(""), d({
							release: void 0,
							dur: void 0
						}), P({
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
			M ? /* @__PURE__ */ (0, $.jsx)(a, {
				role: "status",
				children: X("catalog:javOnline.loading")
			}) : null,
			j.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: X("catalog:javOnline.failed"),
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					onClick: () => void j.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: Ot(j.error)
			}) : null,
			j.data?.coverUnverified && !M ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					onClick: () => void j.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: X("catalog:javOnline.coverUnverified")
			}) : null,
			Je ? /* @__PURE__ */ (0, $.jsx)(Qr, {
				items: J,
				waiting: M,
				javImage: y.value.javImage,
				empty: Ye,
				maker: n.maker,
				genres: H,
				sorting: i,
				onSort: ie,
				headers: {
					people: ze("online-column-performer", !1),
					studio: Be("online-column-studio", !1),
					tags: Ve("online-column-tags", !1),
					release: /* @__PURE__ */ (0, $.jsx)(Ue, {
						id: "online-column-release",
						label: k,
						kind: "date",
						value: Pe,
						rangeValues: V.map((e) => e.date),
						onChange: (e) => Ie("release", e)
					}),
					dur: /* @__PURE__ */ (0, $.jsx)(Ue, {
						id: "online-column-duration",
						label: X("catalog:catalogList.duration"),
						kind: "duration",
						value: u.dur,
						onChange: (e) => Ie("dur", e)
					}),
					code: /* @__PURE__ */ (0, $.jsx)(C, {
						id: "online-column-code",
						label: X("catalog:shared.code"),
						active: !!s,
						children: (e) => /* @__PURE__ */ (0, $.jsx)(Br, {
							value: s,
							onChange: (t) => {
								Le(t), e();
							}
						})
					})
				},
				onFilter: je,
				onStudio: G,
				onTag: Ne
			}) : Ye,
			x === "cards" && M ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: $t(T) }
			}) : null,
			x === "cards" && J.length > 0 ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": T },
				...Ke,
				children: J.map((t) => /* @__PURE__ */ (0, $.jsx)(Lr, {
					item: t,
					layout: S,
					javImage: y.value.javImage,
					readOnly: !0,
					navigate: e,
					onFilterPerson: je,
					tag: H.map(Ae),
					onTag: (e) => {
						let n = t.tagOptions.find((t) => t.source_name === e);
						(!e || n) && Ne(n?.id || "");
					},
					studioFilter: t.studioOption ? {
						selected: n.maker === t.studioOption.id,
						onPress: () => G(t.studioOption.id)
					} : void 0,
					badge: t.preOrder ? /* @__PURE__ */ (0, $.jsx)(b, {
						variant: "caption",
						color: "neutral",
						children: X("catalog:javOnline.preOrder")
					}) : void 0
				}, t.catalogId))
			}) : null,
			j.data && !M && j.data.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-end gap-x-4 gap-y-2",
				children: [j.data.total > j.data.pages * j.data.size ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "jav.online.pageLimit",
					className: "text-caption-1-regular text-text-secondary",
					children: X("catalog:javOnline.pageLimit", { count: j.data.pages })
				}) : null, /* @__PURE__ */ (0, $.jsx)(U, {
					label: E,
					page: j.data.page,
					pages: j.data.pages,
					onPage: (e) => P({
						...n,
						page: e
					})
				})]
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var li = Fn("x"), ui = Fn("refresh-cw");
function di({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), o = Xn(), s = new URLSearchParams(o.search), c = (0, Q.useRef)("");
	o.pathname === "/jav" && Ut(s.get("tab")) === e && (c.current = s.get("q") || "");
	let l = c.current, u = (e) => Z({ q: e });
	return /* @__PURE__ */ (0, $.jsx)(gr, {
		readOnly: t,
		receipt: r,
		dock: e !== "wants",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: he,
			children: [e === "releases" ? /* @__PURE__ */ (0, $.jsx)(Jr, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(mi, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "online" ? /* @__PURE__ */ (0, $.jsx)(ci, {
				navigate: n,
				query: l.trim()
			}) : /* @__PURE__ */ (0, $.jsx)(Cr, {
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
var fi = {
	release: "release_date",
	dur: "duration",
	score: "source_score",
	taste: "taste_score"
};
function pi(e) {
	return e.performer_refs?.length ? e.performer_refs.map((t) => ({
		...t,
		avatar_code: e.code
	})) : e.performers.split(/[,，、;/]/).map((e) => ({ name: e.trim() })).filter((e) => e.name);
}
function mi({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, c] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => o.get("performer") || ""), [g, _] = (0, Q.useState)(() => o.get("code") || ""), [v, y] = (0, Q.useState)(() => o.get("studio") || ""), [x, ee] = (0, Q.useState)(() => dn(o.get("column_filters") || void 0)), [T, O] = (0, Q.useState)(() => D.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [k, A] = (0, Q.useState)(() => o.get("dir") === "asc"), M = (e = {}) => {
		f(""), m(""), y(""), _(""), ee({}), Z({
			tag: "",
			performer: "",
			studio: "",
			code: "",
			column_filters: "",
			...e
		});
	}, N = (e) => {
		e !== s && (c(e), M({ scope: e === "external" ? "" : e }));
	}, ie = (e) => {
		f(e), Z({ tag: e });
	}, ue = (e) => {
		m(e), Z({ performer: e });
	}, de = (e) => {
		y(e), Z({ studio: e });
	}, fe = (e) => {
		_(e), Z({ code: e });
	}, F = (e, t) => {
		let n = lr(x, e, t);
		ee(dn(n)), Z({ column_filters: n });
	}, pe = (e, t) => {
		O(e), A(t === "asc"), Z({
			sort: e === "taste" ? "" : e,
			dir: t === "asc" ? t : ""
		});
	}, he = (0, Q.useRef)(null), _e = (0, Q.useRef)(null), ve = rr(he, _e, "[aria-pressed=\"true\"]", s), xe = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...xe.current?.querySelectorAll("[data-catalog-scroll],[data-filter-row=\"bottom\"]") || []].map((e) => sr(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let Se = Qe();
	(0, Q.useSyncExternalStore)(Se.subscribe, Se.version, Se.version);
	let I = Vt(), L = Wn(), z = (0, Q.useRef)(null), [Ce, B] = er(te), V = nt(Lt({
		active: !0,
		home: !1,
		portrait: !1
	})), H = k ? "asc" : "desc", U = Zn({
		queryKey: Ct(s, T, H),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => At(s, e, {
			sort: T,
			direction: H
		})
	}), we = U.data?.metadata_job, Te = (0, Q.useRef)(!1);
	Te.current = we?.status === "running";
	let Ee = Zn({
		queryKey: E,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => jt(e),
		refetchInterval: Qt(() => Te.current)
	}), W = Ee.data && Ee.dataUpdatedAt >= U.dataUpdatedAt ? Ee.data.metadata_job : we, De = (e) => e ? `${e.job_id}:${e.status}` : "", Oe = (0, Q.useRef)(""), ke = (0, Q.useRef)(""), Ae = Ee.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = De(Ae), t = ke.current.endsWith(":running") && Ae && Ae.status !== "running";
		ke.current = e, t && e !== Oe.current && U.refetch();
	}, [De(Ae)]);
	let je = Un(), G = Un(), Ne = async (e, t) => {
		let n = await dt(e, {
			sort: T,
			direction: H,
			jobId: W?.job_id
		}, t);
		e !== "start" && await U.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await un.cancelQueries({ queryKey: E }), Oe.current = De(n.metadata_job), un.setQueryData(E, n);
	}, Pe = (e) => {
		G.run(e, (t) => Ne(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, Fe = (0, Q.useRef)(!1), Ie = s === "external" && W?.status !== "running" && (U.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		Ie && !Fe.current && (Fe.current = !0, Ne("start").catch(() => {}));
	}, [Ie]);
	let Le = U.data?.items || [], ze = Or(Le, (e) => e.tags || [], (e) => e, [d]).map(({ id: e, count: t }) => ({
		id: e,
		label: e,
		count: t,
		selected: d === e
	})), Be = Or(Le, pi, (e) => e.name, [p]), Ve = Or(Le, (e) => e.studio_ref ? [e.studio_ref] : e.studio ? [{
		name: e.studio,
		has_logo: !1
	}] : [], (e) => e.name, [v]), He = (e) => ie(d === e ? "" : e), Ue = !!(r || d || p || v || g || x.release || x.dur || x.score || x.taste), K = () => {
		M(), r && a();
	}, q = Le.filter((e) => (!d || e.tags?.includes(d)) && (!g || zr(e.code, g)) && (!p || pi(e).some((e) => e.name === p)) && (!v || (e.studio_ref?.name || e.studio) === v) && Object.keys(fi).every((t) => {
		let n = x[t], r = t === "taste" ? e.taste_score ?? e.score : e[fi[t]];
		return !n || cr(ot[t], n.range, r);
	}) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), Ge = (e, t) => ({
		active: !!x[e],
		shouldCloseOnInteractOutside: e === "release" ? an : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(We, {
			label: t,
			kind: ot[e],
			value: x[e],
			rangeValues: e === "release" ? Le.map((e) => e.release_date) : void 0,
			onChange: (t) => {
				F(e, t), n();
			}
		})
	}), Ke = (e, t) => {
		let n = Ge(e, t);
		return /* @__PURE__ */ (0, $.jsx)(C, {
			id: `discover-column-${e}`,
			label: t,
			active: n.active,
			shouldCloseOnInteractOutside: n.shouldCloseOnInteractOutside,
			children: n.render
		});
	}, qe = (e) => /* @__PURE__ */ (0, $.jsx)(Br, {
		value: g,
		onChange: (t) => {
			fe(t), e();
		}
	}), Je = (e) => {
		let t = e ? "jav-discover" : "discover-column";
		return {
			people: /* @__PURE__ */ (0, $.jsx)(ae, {
				id: `${t}-performers`,
				orderKey: "performer",
				toolbar: e,
				label: X("catalog:shared.performers"),
				active: !!p,
				choices: Be.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: Et("performer", t.name, t.id),
					searchTerms: [t.name],
					selected: p === e,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => ue(p === e ? "" : e),
				onClear: p ? () => ue("") : void 0
			}),
			studio: /* @__PURE__ */ (0, $.jsx)(ae, {
				id: `${t}-studios`,
				orderKey: "studio",
				toolbar: e,
				label: X("catalog:shared.label"),
				active: !!v,
				choices: Ve.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: t.name,
					selected: v === e,
					leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
				})),
				onSelect: (e) => de(v === e ? "" : e),
				onClear: v ? () => de("") : void 0
			}),
			tags: /* @__PURE__ */ (0, $.jsx)(ae, {
				id: `${t}-tags`,
				orderKey: "tags",
				toolbar: e,
				label: X("catalog:shared.tags"),
				active: !!d,
				choices: ze,
				onSelect: He,
				onClear: d ? () => ie("") : void 0
			})
		};
	}, Ze = Je(!0), $e = (e) => {
		je.run(String(e.id), (t) => Xe({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), zt(), U.refetch();
		});
	}, Y = U.isPending, tt = Math.max(0, Math.ceil(q.length / Ce.pageSize) - 1), rt = Math.min(Ce.pageIndex, tt), it = rt * Ce.pageSize, at = L === "list" ? q.slice(it, it + Ce.pageSize) : q;
	hr(at);
	let st = mr(!Y);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: xe,
		"aria-label": X("catalog:shared.recommendedForYou"),
		"aria-busy": Y,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(oe, {
				label: X("catalog:javDiscover.filtersLabel"),
				topLabel: X("catalog:javDiscover.scopeLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: Y,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				panes: /* @__PURE__ */ (0, $.jsx)("span", {
					ref: he,
					"data-view-glide": "",
					"aria-hidden": "true"
				}),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: _e,
						role: "group",
						"aria-label": X("catalog:javDiscover.scopeLabel"),
						"data-catalog-views": "",
						onPointerLeave: ve.leave,
						children: [[["external", X("catalog:javDiscover.external")], ["library", X("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"data-catalog-view": e,
							"data-entity-press": "",
							"aria-pressed": s === e,
							onPointerEnter: ve.hover,
							onClick: () => N(e),
							children: t
						}, e)), ze.length ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(ce, {
						choices: ze,
						onSelect: He
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-catalog-summary": "",
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-catalog-readout": "",
							children: Y ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-skeleton": "count",
								"aria-hidden": !0,
								className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
							}) : X("catalog:countLabel.works", { count: q.length })
						}), /* @__PURE__ */ (0, $.jsx)(be, { currentHref: () => location.pathname + location.search })]
					}),
					/* @__PURE__ */ (0, $.jsx)(ye, { tab: "discover" }),
					Ue ? /* @__PURE__ */ (0, $.jsx)(P, {
						onPress: K,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(le, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s === "external" ? /* @__PURE__ */ (0, $.jsx)(se, {
							"data-entity-batch": "",
							"data-jav-metadata-update": "",
							label: W?.status === "running" ? X("catalog:javDiscover.stopUpdating") : X("catalog:javDiscover.updateMetadata"),
							disabled: Y,
							"data-skeleton-action": Y ? "" : void 0,
							busy: !!G.busy,
							icon: W?.status === "running" ? li : ui,
							onPress: () => Pe(W?.status === "running" ? "stop" : "update")
						}) : null, /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Me, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: I,
							options: me,
							onChange: In
						}) })] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							Ze.people,
							Ze.studio,
							Ze.tags
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(Re, {
							group: "discover",
							sorts: D.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === T,
								dir: H
							})),
							onSort: (e, t) => pe(e, t),
							filters: {
								release_date: Ge("release", X("catalog:catalogList.releaseDate")),
								duration: Ge("dur", X("catalog:catalogList.duration")),
								source_score: Ge("score", X("catalog:javSort.siteRating")),
								taste: Ge("taste", X("catalog:javSort.taste")),
								code: {
									active: !!g,
									render: qe
								}
							}
						})
					})
				] })
			}),
			Y && L === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: Bt("discover", I) }
			}) : null,
			U.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				title: X("catalog:javDiscover.failed"),
				children: Ot(U.error)
			}) : null,
			s === "external" && W?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(J, {
					kind: Ye("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: W.completed,
						count: W.total
					}),
					value: W.completed,
					total: W.total
				})
			}) : null,
			W && W.status !== "running" && (W.status !== "complete" || W.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					...et(G.busy === "retry"),
					"aria-label": X("catalog:javMetadata.retry"),
					onClick: () => Pe("retry"),
					children: X("catalog:shared.retryNow")
				}),
				children: Gt(W) || X("catalog:javMetadata.progress", {
					completed: W.completed,
					count: W.total
				})
			}) : null,
			G.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				children: G.error
			}) : null,
			!Y && !U.error && !q.length ? /* @__PURE__ */ (0, $.jsx)(re, {
				icon: ne,
				title: X(Ue ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: X("catalog:javDiscover.viewTaste")
				}), Ue ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					onClick: K,
					children: X("catalog:shared.clearFilters")
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "primary",
					size: "small",
					href: "/",
					children: X("catalog:entityPage.browseCollection")
				}) : /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "primary",
					size: "small",
					href: "/jav?tab=online",
					children: X("catalog:javTabs.online")
				})] }),
				children: X(Ue ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			je.error ? /* @__PURE__ */ (0, $.jsx)(R, {
				tone: "error",
				children: je.error
			}) : null,
			L === "list" ? Y || q.length > 0 ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Wr, {
				items: at,
				waiting: Y,
				tableTop: z,
				discovery: {
					sort: T,
					dir: H,
					tag: d,
					headers: {
						...Je(!1),
						release: Ke("release", X("catalog:catalogList.releaseDate")),
						dur: Ke("dur", X("catalog:catalogList.duration")),
						score: Ke("score", X("catalog:javSort.siteRating")),
						taste: Ke("taste", X("catalog:javSort.taste")),
						code: /* @__PURE__ */ (0, $.jsx)(C, {
							id: "discover-column-code",
							label: X("catalog:shared.code"),
							active: !!g,
							children: qe
						})
					}
				},
				javImage: Se.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: He,
				onSort: (e, t) => {
					e !== "random" && pe(e, t);
				},
				wanting: (e) => je.busy === String(e.id),
				onWant: $e,
				onResource: (e) => n(Pr(e))
			}), Y ? null : /* @__PURE__ */ (0, $.jsx)(j, {
				label: X("catalog:javTabs.discover"),
				total: q.length,
				pagination: {
					pageIndex: rt,
					pageSize: Ce.pageSize
				},
				onChange: B,
				scrollTarget: z,
				stickyHeader: () => xe.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit")
			})] }) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ge,
				style: { "--card-ratio": V },
				...st,
				children: q.map((t) => {
					let r = fn(t.taste_score ?? t.score), a = [
						r.label,
						X("catalog:javScore.taste", { score: wt(t.taste_score ?? t.score) }),
						U.data?.ranking_method === "mmr" && t.ranking_score != null ? X("catalog:javScore.ranking", { score: wt(t.ranking_score) }) : "",
						t.source_score == null ? "" : X("catalog:javScore.siteRating", { rating: t.source_score.toFixed(1) }),
						...Nn(t.reasons, t.reason_codes, t.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Lr, {
						item: t,
						layout: I,
						javImage: Se.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: ie,
						wanting: je.busy === String(t.id),
						onWant: () => $e(t),
						onResource: () => n(Pr(t)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: a,
							"aria-label": X("catalog:javScore.badgeLabel", {
								score: r.score,
								label: r.label
							}),
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(b, {
								color: r.color,
								children: r.label
							})
						})
					}, t.id);
				})
			})
		]
	});
}
export { di as JavPage };

//# debugId=67bd4f80-6b10-4a8a-9155-f5dd5039a0a2