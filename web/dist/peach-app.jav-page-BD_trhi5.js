(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d1e16799-8a19-49ed-941d-e95168b7bf33", e._sentryDebugIdIdentifier = "sentry-dbid-d1e16799-8a19-49ed-941d-e95168b7bf33");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $ea3928288112382f$export$439d29a4e110a164 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ActivityMotion as s, ArtSlot as c, Button as l, ButtonLink as u, Bx as d, COVER_STATE_TITLE as f, CastPopover as p, CatalogColumnFilterChips as m, CatalogDisplayControls as h, CatalogPerformerTile as g, CatalogStudioTile as _, Checkbox as v, ChevronSortDown as y, Chip as b, CloudDownloadDialog as x, ColumnFilterAvatar as S, ColumnFilterPopover as C, ColumnFilterStudioAvatar as w, Combo as ee, CoverQueue as T, DISCOVERY_METADATA_KEY as E, DISCOVERY_SORTS as te, DISCOVERY_TABLE_ID as ne, DISCOVERY_TABLE_KEYS as D, DOWNLOADS_KEY as O, DOWNLOADS_URL as k, DataTableFooter as re, DataTableFrame as A, E3 as ie, EmptyFocusButton as j, EmptyState as ae, FilterActionButton as oe, FilterChoiceList as se, FilterDropdown as ce, FilterGlassRows as le, FilterIconButton as M, FilterTagStrip as ue, FilterToolbarControls as de, Gg as fe, H7 as pe, ImageWithFallback as me, Input as N, JAV_CATALOG_TIERS as he, JAV_LAYOUTS as ge, JAV_PAGE_BODY as _e, JAV_RECOMMENDATION_GRID as ve, JAV_SELECTION_EVENT as ye, JAV_TAG_STRIP_SKELETON as be, JZ as xe, JavGlassSearch as Se, LibraryShortcuts as Ce, LinkButton as we, ListCredits as Te, M6 as Ee, MenuDialog as De, Note as Oe, ONLINE_SORTS as P, ONLINE_STATUS as ke, ONLINE_TABLE_ID as F, ONLINE_TABLE_KEYS as I, PHASES as L, Pagination as Ae, PerformerCredit as R, QueryErrorNote as z, RELEASE_COLUMN_VISIBILITY_KEY as B, RELEASE_COLUMN_WIDTHS_KEY as V, RELEASE_PAGE_SIZES as je, RELEASE_SORTS as Me, RELEASE_SORT_COLUMNS as Ne, SEGMENT as H, SEGMENTED_TRACK as Pe, ScrapeSourceLabel as Fe, SegmentedRadioGroup as Ie, Segments as Le, Select as Re, SelectItem as ze, SelectionDock as U, Shuffle as Be, SiteLabel as Ve, SortKeys as He, SourceAvatar as W, Table as Ue, TableColumnControls as We, TableColumnFilter as G, TableColumnRange as Ge, TableColumnResizer as Ke, TableRangeFields as qe, TableToolbar as Je, TaskProgress as Ye, WANTS_KEY as Xe, WantMagnets as Ze, Wt as K, __toESM as Qe, activityKind as $e, addWant as et, apiGet as tt, appSettingsStore as nt, avatarInner as q, busyProps as rt, cachedMagnetStates as it, cardClass as at, cardRatio as ot, castPersonName as J, catalogListSkeletonCellHtml as Y, columnOrderingFeature as st, columnRangeKinds as ct, columnRangeSummary as lt, columnValueSelected as ut, columnVisibilityFeature as dt, composingKey as ft, controlDiscoveryMetadata as pt, controlReleaseMetadata as mt, coverArrived as ht, coverFetching as gt, coverFetchingHtml as _t, coverReason as vt, coverStateAction as yt, coverUrl as bt, createColumnHelper as xt, discoveryArtwork as St, discoveryCast as Ct, discoveryColumns as wt, discoveryKey as Tt, discoveryOrder as Et, discoveryScore as Dt, dmmPerformerName as Ot, entityDisplayName as kt, entityPath as At, entityWriting as jt, errorMessage as Mt, fetchCoverNow as Nt, fetchDiscoveries as Pt, fetchDiscoveryMetadata as Ft, fetchReleaseColumn as It, fetchReleases as Lt, fetchWants as Rt, flexRender as zt, fmtDur as Bt, gridLayout as Vt, hasSelectionModifier as Ht, invalidateWants as Ut, javContentSkeleton as Wt, javFacetTiersHtml as Gt, javLayout as Kt, javSubscriptionPath as qt, javTab as Jt, javTagPlaceholdersHtml as Yt, jobText as Xt, joinList as Zt, keepPreviousData as Qt, lastSearchNote as $t, leadingGraphemes as en, librarySuggest as tn, logoUrl as nn, metadataInterval as rn, onlineCatalogCardsHtml as an, onlineColumns as on, onlineSorting as sn, onlineStatus as cn, outsideTableDateBound as ln, pageWindow as un, performerProfileHref as dn, pv as fn, qE as pn, queryClient as mn, readColumnFilters as hn, recommendationScore as gn, relayoutCovers as _n, releaseColumnSelection as vn, releaseColumnValues as yn, releaseColumns as bn, releaseDateQuery as xn, releaseFilters as Sn, releaseKey as Cn, rememberPageSize as wn, rememberedPageSize as Tn, remoteCoverUrl as En, removeWants as Dn, require_jsx_runtime as On, require_react as kn, resetWants as An, resourceSourceKey as jn, restoreWants as Mn, rowSelectionFeature as Nn, rowSortingFeature as Pn, searchNote as Fn, selectRange as In, selectionSummary as Ln, serverLabelList as Rn, setReleaseColumn as zn, spriteGlyph as Bn, storeJavLayout as Vn, suppressShiftTextSelection as Hn, t as X, tableFeatures as Un, takeJavSelection as Wn, textLang as Gn, tierPlaceholdersHtml as Kn, toggleColumnValue as qn, useAction as Jn, useCatalogView as Yn, useDatalistSuggest as Xn, useDense as Zn, useEntityNames as Qn, useFilterScope as $n, useHorizontalScroller as er, useJavAddress as tr, useQuery as nr, useQueryClient as rr, useRectangleSelection as ir, useRememberedPagination as ar, useTable as or, useTablePreferences as sr, useViewGlide as cr, useWorkContextMenu as lr, wantName as ur, wantsInterval as dr, wireHorizontalScroller as fr, withinColumnRange as pr, writeColumnFilters as mr, writeJavQuery as Z, xs as hr } from "./peach-app.js";
import { JavBatchResources as gr } from "./peach-app.jav-batch-resources-R5lmdx3J.js";
import { ErrorLine as _r } from "./peach-app.source-view-CqeSCcU2.js";
// src/react/jav/jav-selection.tsx
var Q = /* @__PURE__ */ Qe(kn(), 1), $ = On();
function vr(e) {
	return {
		id: e.id,
		code: e.code,
		title: e.title,
		performers: e.performers,
		performerRefs: e.performer_refs,
		studio: e.studio,
		release_date: e.release_date,
		cover: e.has_cover ? bt(e, 2) : e.online_cover_url || (e.cover_url ? En(e) : void 0)
	};
}
var yr = (0, Q.createContext)(null), br = () => (0, Q.useContext)(yr);
function xr(e) {
	let t = br();
	return ir(e ? t?.selectRectangle : void 0, { selecting: !!t?.mode });
}
function Sr(e) {
	let t = br()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Cr({ children: e, readOnly: t, receipt: n, dock: r = !0 }) {
	let i = Zn(), [a, o] = (0, Q.useState)(!1), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Map()), [u, d] = (0, Q.useState)([]), [f, p] = (0, Q.useState)(null), m = (0, Q.useRef)(null), h = (0, Q.useRef)(new URLSearchParams(location.search).get("tab") || ""), g = new Set(s.keys()), _ = Ln(g, u.map((e) => e.code)), v = (0, Q.useCallback)((e) => {
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
		return window.addEventListener(ye, e), () => window.removeEventListener(ye, e);
	}, [a, y]), (0, Q.useEffect)(() => {
		Wn(location.search) && o(!0);
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
			In(i, u.map((e) => e.code), n, e.code, t);
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
							let e = await et({ code: r.code });
							e?.created && t.push(e.want.id);
						} catch (t) {
							throw Error(X("catalog:javSelection.wantPartialFailed", {
								count: e.size,
								code: r.code,
								error: Mt(t)
							}));
						}
						e.add(r.code), c((e) => {
							let t = new Map(e);
							return t.delete(r.code), t;
						});
					}
				} finally {
					Ut();
				}
				return async () => {
					t.length && await Dn(t), await Ut();
				};
			},
			receipt: () => X("catalog:javSelection.wantAdded", { count: e.size })
		};
	})(), ee = { receipt: n };
	return /* @__PURE__ */ (0, $.jsxs)(yr.Provider, {
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
			/* @__PURE__ */ (0, $.jsxs)(U, {
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
					onClick: () => p([...s.values()].map(vr)),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					onClick: y,
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(gr, {
				items: f,
				close: () => p(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/wants/want-list.tsx
var wr = {
	code: X("catalog:wants.originManual"),
	feed: X("catalog:entityHero.subscribeNewReleases"),
	follow: X("catalog:entityHero.following")
}, Tr = [
	["all", X("catalog:shared.all")],
	["available", X("catalog:wants.hasMagnet")],
	["missing", X("catalog:wants.noMagnet")]
], Er = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	wr[e.origin]
].filter(Boolean).join(" · ");
function Dr({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-media-placeholder max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: X("catalog:shared.noCover")
		}), e.cover ? /* @__PURE__ */ (0, $.jsx)(me, {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function Or({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: c, picked: d }) {
	let f = lr(), [p, m] = (0, Q.useState)([]), h = e.link || (!p.length && e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : ""), g = h && URL.canParse(h) ? new URL(h).hostname.replace(/^www\./, "") : "", _ = jn(e.follow_provider || g.split(".")[0] || ""), y = _ === "javdb" ? "JavDB" : _ === "javbus" ? "JavBus" : g, b = h && g && !p.some((e) => e.source === _) ? [{
		source: _,
		label: y,
		url: h
	}, ...p] : p, x = e.code && e.phase === "searching" ? $t(e) : Fn(e), S = b.map((e) => ({
		id: `source:${e.source}`,
		label: e.label,
		icon: K,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}));
	(e.phase === "searching" || e.phase === "given_up") && S.push({
		id: "resource",
		label: X("catalog:shared.searchTorrents"),
		icon: fn,
		run: a
	}), e.phase === "given_up" && S.push({
		id: "reset",
		label: X("catalog:wants.searchAgain"),
		icon: xe,
		disabled: t || !!n,
		run: r
	}), d && S.push({
		id: "select",
		label: X(d.on ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: pe,
		run: () => d.toggle(!d.on)
	}), S.push({
		id: "remove",
		label: X("catalog:shared.remove"),
		icon: Ee,
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
		className: at({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [
			f.menu,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
				children: [
					d ? /* @__PURE__ */ (0, $.jsx)(v, {
						slot: null,
						className: "mt-1 shrink-0 self-start",
						"aria-label": X("catalog:wants.selectRow", { name: ur(e) }),
						isSelected: d.on,
						onChange: d.toggle
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(Dr, { want: e }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("p", {
								className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
								children: [/* @__PURE__ */ (0, $.jsx)("b", {
									className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
									children: ur(e)
								}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 truncate text-body-2-regular text-text-secondary",
									children: e.title
								}) : null]
							}),
							Er(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: Er(e)
							}) : null,
							x ? /* @__PURE__ */ (0, $.jsx)("p", {
								"data-want-note": "",
								className: "text-caption-1-regular text-text-secondary",
								children: x
							}) : null,
							e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(_r, {
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
										trailingIcon: K,
										href: e.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ (0, $.jsx)(Fe, {
											source: e.source,
											label: e.label
										})
									}, e.source)),
									e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(l, {
										variant: "secondary",
										size: "small",
										disabled: t,
										...rt(n === `reset:${e.id}`),
										onClick: r,
										children: X("catalog:wants.searchAgain")
									}) : null,
									e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(l, {
										variant: "primary",
										size: "small",
										leadingIcon: fn,
										onClick: a,
										children: X("catalog:shared.searchTorrents")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(l, {
										variant: "danger",
										size: "small",
										leadingIcon: Ee,
										disabled: t,
										...rt(n === `remove:${e.id}`),
										onClick: i,
										children: X("catalog:shared.remove")
									})
								]
							})
						]
					})
				]
			}),
			e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(Ze, {
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
function kr({ phase: e, label: t, rows: n, row: r, onRectangle: i, selecting: a }) {
	let [s, c] = (0, Q.useState)(1), [u, d] = (0, Q.useState)(20), [f, p] = (0, Q.useState)("all"), m = it(n), h = (e) => e.has_magnets ?? m.get(e.code || "") ?? !1, g = n.filter(h), _ = e !== "searching" || f === "all" ? n : n.filter((e) => h(e) === (f === "available")), v = ir(_.length ? i : void 0, {
		selecting: a,
		start: "[data-want-items]"
	}), y = un(_.length, u, s);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(Ie, {
					name: "want-magnet-filter",
					"aria-label": X("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: f,
					className: Pe,
					onChange: (e) => {
						p(e), c(1);
					},
					children: Tr.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: H,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? g.length : n.length - g.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			_.length ? null : /* @__PURE__ */ (0, $.jsx)(ae, {
				size: "compact",
				icon: pn,
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
				children: /* @__PURE__ */ (0, $.jsx)(re, {
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
function Ar({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), c = Jn(), u = nr({
		queryKey: Xe,
		queryFn: ({ signal: e }) => Rt(e),
		staleTime: 3e4,
		refetchInterval: dr
	}), d = () => {
		let n = i.trim();
		n && !e && c.run("add", (e) => et({ code: n }, e), (e) => {
			t(e.created ? X("catalog:wants.added", { name: ur(e.want) }) : X("catalog:wants.alreadyAdded", { name: ur(e.want) })), a(""), Ut();
		});
	}, f = (e) => {
		e.key === "Enter" && !ft(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		c.run(`remove:${e.id}`, (t) => Dn([e.id], t), () => {
			t(X("catalog:wants.removed", { name: ur(e) })), Ut();
		});
	}, m = (e) => {
		c.run(`reset:${e.id}`, (t) => An([e.id], t), () => {
			t(X("catalog:wants.backToSearching", { name: ur(e) })), Ut();
		});
	}, h = u.data, g = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), _ = br(), v = !!_?.mode, [y, b] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Q.useState)(null);
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
			let { previous: t } = await Dn(e.map((e) => e.id));
			return await Ut(), async () => {
				await Mn(t), await Ut();
			};
		},
		receipt: (e) => X("catalog:wants.removedMany", { count: e.length })
	}, te = {
		key: "reset",
		label: X("catalog:wants.searchAgain"),
		reversal: "undo",
		confirm: (e) => ({
			title: X("catalog:wants.searchAgainMany"),
			body: X("catalog:wants.searchAgainManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await An(e.map((e) => e.id));
			return await Ut(), async () => {
				await Mn(t), await Ut();
			};
		},
		receipt: (e) => X("catalog:wants.searchAgainDone", { count: e.length })
	}, ne = w.filter((e) => e.code && (e.phase === "searching" || e.phase === "given_up")), D = nr({
		queryKey: O,
		queryFn: ({ signal: e }) => tt(`${k}?limit=100`, e),
		enabled: g.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), re = D.data?.providers.filter((e) => e.configured) || [], A = re[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: at({
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
							children: /* @__PURE__ */ (0, $.jsx)(N, {
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
							...rt(c.busy === "add"),
							onClick: d,
							children: X("catalog:shared.add")
						})]
					}),
					c.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
						tone: "error",
						title: X("catalog:wants.actionFailed"),
						children: c.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				titleKey: "catalog:wants.loadFailed",
				query: u
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: Wt("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(Ye, {
				embedded: !0,
				kind: $e("want-scrape"),
				label: X("catalog:wants.fetchingNew")
			}) : null,
			h?.searching ? /* @__PURE__ */ (0, $.jsx)(Ye, {
				embedded: !0,
				kind: $e("want-search"),
				label: X("catalog:wants.searchingResources")
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				titleKey: "catalog:wants.downloadSettingsFailed",
				query: D
			}) : null,
			D.data && !re.length ? /* @__PURE__ */ (0, $.jsxs)(Oe, {
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
			D.data && !D.data.available ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "neutral",
				children: X("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !g.length ? /* @__PURE__ */ (0, $.jsx)(ae, {
				size: "compact",
				icon: pn,
				title: X(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					onClick: r,
					children: X("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(j, {
					target: `input[aria-label="${X("catalog:shared.code")}"]`,
					children: X("catalog:wants.addWork")
				}) : void 0,
				children: X(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			L.map(([n, r]) => {
				let i = g.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(kr, {
					phase: n,
					label: r,
					rows: i,
					selecting: v,
					onRectangle: _ && !c.busy ? (e, t) => b((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(Or, {
						want: n,
						readOnly: e,
						busy: c.busy,
						downloads: D.data,
						provider: A,
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
				provider: A
			}),
			/* @__PURE__ */ (0, $.jsxs)(U, {
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
					action: te,
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
					disabled: !ne.length,
					onClick: () => C(ne.map(({ id: e, code: t, title: n, cover: r, performers: i, studio: a, release_date: o }) => ({
						id: e,
						code: t,
						title: n || "",
						cover: r,
						performers: i,
						studio: a,
						release_date: o
					}))),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					onClick: () => _?.close(),
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(gr, {
				items: S,
				close: () => C(null),
				readOnly: e,
				receipt: t
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function jr(e) {
	return dn(e) || qt(e.source_name || e.name);
}
function Mr({ person: e, name: t, title: n, icon: r, onFilter: i }) {
	if (!t) return null;
	let a = X("catalog:entityHero.subscribeNewReleases");
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(R, {
		name: t,
		title: n,
		href: jr(e ?? { name: t }),
		icon: r,
		external: !!e?.source_url && !e.id,
		onFilter: i && e ? () => i(e) : void 0
	}), e?.source_url && (!e.id || i) ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: qt(e.source_name || e.name),
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
function Nr({ item: e, limit: t = 5 }) {
	Qn();
	let n = Ct(e.performer_refs, e.performers).slice(0, t).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image && !t.has_avatar ? { children: /* @__PURE__ */ (0, $.jsx)(W, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: q(t.name, t, null) } }, a = X("catalog:javDiscovery.openActress", { name: J(t) });
		return /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: jr(t),
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
function Pr(e, t) {
	let n = [
		{
			id: "open",
			label: X("catalog:mediaActions.open"),
			icon: fe,
			run: () => t.navigate(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`)
		},
		{
			id: "want",
			label: X(e.asset_id ? "catalog:javWant.imported" : e.wanted ? "catalog:javWant.wanted" : "catalog:javWant.want"),
			icon: pn,
			disabled: t.readOnly || t.wanting || !!e.wanted || !!e.asset_id,
			run: t.onWant
		},
		{
			id: "resource",
			label: X("catalog:shared.searchTorrents"),
			icon: fn,
			run: t.onResource
		}
	];
	return e.link && n.push({
		id: "source",
		label: X("catalog:shared.viewOnSite"),
		icon: K,
		run: () => {
			window.open(e.link, "_blank", "noopener,noreferrer");
		}
	}), t.selection && n.push({
		id: "select",
		label: X(t.selection.selected.has(e.code) ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: pe,
		run: () => t.selection?.toggle(e)
	}), {
		key: e.code,
		operations: n
	};
}
// src/react/jav/jav-facets.tsx
function Fr(e, t, n, r) {
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
function Ir({ person: e, count: t, pressed: n, onClick: r }) {
	Qn();
	let i = J(e);
	return /* @__PURE__ */ (0, $.jsx)(g, {
		name: i,
		pressed: n,
		onClick: r,
		ringHtml: q(e.name, e, null),
		title: X("catalog:javReleases.facetCount", {
			name: i,
			count: t
		})
	});
}
function Lr({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: nn(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": !0,
		children: en(e.name, 1)
	});
}
function Rr({ studio: e, count: t, pressed: n, onClick: r, showCount: i = !0 }) {
	return /* @__PURE__ */ (0, $.jsx)(_, {
		name: e.name,
		logo: e.has_logo ? nn(e.name, "icon", e.logo_version) : void 0,
		fallback: en(e.name, 2),
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
function zr({ name: e, studio: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"data-list-library": "",
		title: e,
		children: [/* @__PURE__ */ (0, $.jsx)(Lr, { studio: t || {
			name: e,
			has_logo: !1
		} }), /* @__PURE__ */ (0, $.jsx)("span", { children: e })]
	});
}
function Br({ studio: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, $.jsx)(w, { studio: e }), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: e.name
		})]
	});
}
function Vr({ studio: e }) {
	if (!e.entity_id) return null;
	let t = X("catalog:libraryAssistant.openLibrary");
	return /* @__PURE__ */ (0, $.jsx)(u, {
		href: At("studio", e.name, e.entity_id),
		variant: "ghost",
		size: "small",
		iconOnly: !0,
		leadingIcon: hr,
		"aria-label": `${t} · ${e.name}`,
		title: t
	});
}
// src/react/jav/discovery-card.tsx
var Hr = (e) => ({
	...e,
	cover: e.has_cover ? bt(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Ur = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Wr({ item: e, readOnly: t }) {
	let n = Jn(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(gt.subscribe, gt.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: X("catalog:shared.noCover")
	});
	if (a === "fetching" || gt.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: _t() } });
	let o = () => {
		n.run("cover", (t) => Nt(e.code, t), (t) => {
			t.has_cover ? ht(e.code, t) : i(t.message || X("catalog:javDiscovery.noOfficialCover"));
		});
	}, c = r || n.error ? "missing" : a, u = n.error || r || vt(e);
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
				children: yt(c)
			})
		]
	});
}
function Gr({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a = "", onTag: o, wanting: s, onWant: d, onResource: f, badge: m, onFilterPerson: h, studioFilter: g }) {
	Qn();
	let _ = !!h, v = br(), y = e.code ? v : null, b = lr(), x = !_ && d && f ? Pr(e, {
		selection: y,
		readOnly: r,
		wanting: !!s,
		navigate: i,
		onWant: d,
		onResource: f
	}) : null, S = y?.selected.has(e.code), C = !_ && !!v?.dense, w = Ct(e.performer_refs, e.performers), ee = Zt(w.map(J)), T = w[0], E = T ? J(T) : "", te = _ && e.duration ? Bt(e.duration) : "", ne = St(e, t, n), D = e.asset_id ? `/assets/${e.asset_id}` : e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, O = !e.code && !!e.link, k = () => {
		O ? window.open(D, "_blank", "noopener") : i(D);
	}, re = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
		" ",
		e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
			lang: Gn(e.title),
			children: e.title
		}) : X("catalog:javDiscovery.titleNotFound")
	] }), A = {
		href: D,
		...O ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		onClick: (e) => {
			O || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0 || (e.preventDefault(), k());
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-rectangle-key": e.code || void 0,
		"data-selected": S ? "" : void 0,
		onMouseDown: Hn,
		onContextMenu: x ? (e) => b.onContextMenu(e, x) : void 0,
		onKeyDown: x ? (e) => b.onKeyDown(e, x) : void 0,
		onClickCapture: (t) => {
			t.target.closest("[data-work-context-menu], [data-cast-popover]") || y && (y.mode || Ht(t)) && (t.preventDefault(), t.stopPropagation(), y.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input,[role=\"dialog\"]") || k();
		},
		children: [
			b.menu,
			ne ? /* @__PURE__ */ (0, $.jsxs)("a", {
				...A,
				"data-work-card-link": "",
				tabIndex: -1,
				"aria-label": X("catalog:javDiscovery.viewDetails", { code: e.code || e.title }),
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Ur,
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					artwork: {
						kind: "cover",
						html: ne
					},
					identity: St(e, "small", n),
					relayout: (e) => _n(e, t)
				}), te ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-duration": "",
					children: te
				}) : null]
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Ur,
				children: /* @__PURE__ */ (0, $.jsx)(Wr, {
					item: e,
					readOnly: r
				})
			}),
			y?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				tabIndex: -1,
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
				children: [/* @__PURE__ */ (0, $.jsx)(Nr, {
					item: e,
					limit: _ ? 3 : void 0
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsx)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || X("catalog:javDiscovery.titleNotFound")}`,
							children: y?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								className: "text-start focus-visible:outline-border-focus-ring",
								"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
								"aria-pressed": !!S,
								children: re
							}) : /* @__PURE__ */ (0, $.jsx)("a", {
								...A,
								"data-work-card-link": "",
								className: "no-underline focus-visible:outline-border-focus-ring",
								children: re
							})
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(Mr, {
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
									}) : null, g && e.studio_ref ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("button", {
										"data-media-who": "",
										"data-inline-action": "",
										type: "button",
										"aria-pressed": g.selected,
										title: e.studio_ref.name,
										onClick: g.onPress,
										children: /* @__PURE__ */ (0, $.jsx)(Br, { studio: e.studio_ref })
									}), /* @__PURE__ */ (0, $.jsx)(Vr, { studio: {
										name: e.studio_ref.name,
										entity_id: g.entityId
									} })] }) : null]
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
						leadingIcon: C ? K : void 0,
						trailingIcon: C ? void 0 : K,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: C ? null : _ ? /* @__PURE__ */ (0, $.jsx)(Ve, {
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
						...rt(!!s),
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
function Kr(e) {
	return e.normalize("NFKC").toLowerCase().replace(/[\s_\-‐‑‒–—―]+/g, "");
}
function qr(e, t) {
	return Kr(e).includes(Kr(t));
}
function Jr({ value: e, onChange: t }) {
	let [n, r] = (0, Q.useState)(e), i = X("catalog:columnFilter.search", { column: X("catalog:shared.code") });
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		className: "flex flex-col gap-3 p-3",
		"data-copy-interact": "",
		onSubmit: (e) => {
			e.preventDefault(), Kr(n) && t(n.trim());
		},
		children: [/* @__PURE__ */ (0, $.jsx)(N, {
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
				disabled: !Kr(n),
				children: X("follow:shared.search")
			})]
		})]
	});
}
// src/react/jav/jav-release-table.tsx
var Yr = {
	widths: V,
	visibility: B
}, Xr = {
	...Ne,
	taste: "taste"
};
function Zr({ column: e, label: t, filters: n, onChange: r }) {
	let i = e === "people" ? "performer" : e === "tags" ? "tag" : "studio", a = zn(n, i, void 0);
	return /* @__PURE__ */ (0, $.jsx)(G, {
		id: e,
		label: t,
		values: vn(n, i),
		load: async (t, n, r) => {
			let i = await It(a, e, n, r, t);
			return {
				items: i.items.map((t) => {
					let n = e === "people" ? t : null, r = n && jt("performer", n.name, n.id);
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
function Qr({ items: a, waiting: o, filters: s, discovery: u, studios: d = [], facets: m, javImage: h, readOnly: g, navigate: _, onTag: b, onFilter: x, onRange: S, onSort: C, wanting: w, onWant: ee, onResource: T, selecting: E = !0, tableTop: te }) {
	let O = br(), k = lr(), re = (e) => Pr(e, {
		selection: O,
		readOnly: g,
		wanting: w(e),
		navigate: _,
		onWant: () => ee(e),
		onResource: () => T(e)
	}), ie = sr(u ? ne : "jav-releases", u ? wt : bn, u ? D : Yr), j = ie.columns.filter((e) => e.required || ie.visibility[e.id] !== !1), ae = u ? Xr : Ne, oe = Object.entries(ae).find(([, e]) => e === (u?.sort ?? s?.sort))?.[0], se = u?.dir ?? s?.dir, ce = hn(s?.column_filters), le = s ? yn(s, "tag") : u?.tag ? [u.tag] : [], M = X(u ? "catalog:javTabs.discover" : "catalog:javReleases.list"), ue = new Map(d.map((e) => [e.name, e])), de = (e) => (t) => {
		t.preventDefault(), O?.mode || Ht(t) ? O?.toggle(e, t.shiftKey) : _(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`);
	}, fe = (e, t) => {
		switch (e) {
			case "name": {
				let e = St(t, "small", h);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: de(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(c, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => _n(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: vt(t) || void 0,
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
							onClick: de(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Gn(t.title),
									children: t.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						})
					})]
				});
			}
			case "people": {
				let e = Ct(t.performer_refs, t.performers), n = e[0];
				return n ? /* @__PURE__ */ (0, $.jsx)(Te, {
					avatar: /* @__PURE__ */ (0, $.jsx)(Nr, { item: t }),
					cast: /* @__PURE__ */ (0, $.jsx)(p, {
						people: e,
						total: t.performer_total,
						assetId: t.asset_id ?? void 0,
						code: t.code,
						subscribe: !0
					}),
					children: /* @__PURE__ */ (0, $.jsx)(Mr, {
						person: n,
						name: J(n),
						title: n.name
					})
				}) : "—";
			}
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsx)(zr, {
				name: t.studio,
				studio: t.studio_ref || ue.get(t.studio)
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": le.includes(e),
					onClick: () => b(e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Bt(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "taste": return Dt(t.taste_score ?? t.score);
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					variant: "ghost",
					disabled: g || t.wanted || !!t.asset_id,
					...rt(w(t)),
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
			n && !o && k.onKeyDown(e, re(n), t);
		},
		children: [
			k.menu,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-wrap justify-end gap-2",
				role: "group",
				"aria-label": u ? M : X("catalog:javReleases.toolbar"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-toolbar-actions": "",
					children: /* @__PURE__ */ (0, $.jsx)(We, {
						preferences: ie,
						label: M
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(A, {
				ref: te,
				follow: !0,
				preferences: ie,
				rectangleSelecting: !!O?.mode,
				onRectangle: E && !o && a.length ? O?.selectRectangle : void 0,
				onRowClick: E && !o && O?.mode ? (e) => {
					let t = a.find((t) => String(t.id) === e);
					t && O.toggle(t);
				} : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)(Ue, {
					"aria-label": M,
					size: "sm",
					sortDescriptor: oe ? {
						column: oe,
						direction: se === "asc" ? "ascending" : "descending"
					} : void 0,
					onSortChange: (e) => {
						let t = ae[String(e.column)];
						t && C(t, e.direction === "ascending" ? "asc" : "desc");
					},
					children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [
						O?.mode ? /* @__PURE__ */ (0, $.jsx)(t, {
							id: "selection",
							width: 44,
							"aria-label": X("catalog:javReleases.selectVideos"),
							children: /* @__PURE__ */ (0, $.jsx)(v, {
								slot: null,
								"aria-label": X("catalog:catalogList.selectAllOnPage"),
								isSelected: O.all,
								isIndeterminate: O.mixed,
								isDisabled: o || !a.length,
								onChange: O.selectPage
							})
						}) : null,
						j.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
							id: e.id,
							isRowHeader: e.id === "name",
							allowsSorting: e.id in ae,
							...ie.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [u?.headers[e.id] ?? (s && S && (e.id === "release" || e.id === "dur" || e.id === "score") ? /* @__PURE__ */ (0, $.jsx)(Ge, {
									id: e.id,
									label: e.label,
									kind: ct[e.id],
									value: ce[e.id],
									rangeQuery: e.id === "release" ? xn(s) : void 0,
									onChange: (t) => S(e.id, t)
								}) : s && m && x && [
									"people",
									"studio",
									"tags"
								].includes(e.id) ? /* @__PURE__ */ (0, $.jsx)(Zr, {
									column: e.id,
									label: e.label,
									filters: s,
									onChange: x
								}) : e.label), e.id in ae ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(y, {})
								}) : null]
							}), /* @__PURE__ */ (0, $.jsx)(Ke, {
								preferences: ie,
								id: e.id
							})] })
						}, e.id)),
						/* @__PURE__ */ (0, $.jsx)(t, {
							id: "remaining-space",
							"aria-label": X("catalog:catalogList.rowSpacer"),
							"data-table-space": "",
							width: ie.spaceWidth,
							minWidth: 0
						})
					] }), /* @__PURE__ */ (0, $.jsx)(e, {
						renderEmptyState: () => X("catalog:javReleases.noMatches"),
						children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: `skeleton-${t}`,
							"data-list-skeleton-row": "",
							"aria-hidden": "true",
							children: [
								O?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null,
								j.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Y(e.id) } }) }, e.id)),
								/* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })
							]
						}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: String(e.id),
							"data-catalog-row": "",
							"data-release-row": "",
							"data-release-id": e.id,
							"data-rectangle-key": e.code,
							"data-board-selected": O?.selected.has(e.code) || void 0,
							onContextMenu: (t) => k.onContextMenu(t, re(e)),
							children: [
								O?.mode ? /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(v, {
									slot: null,
									"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
									isSelected: O.selected.has(e.code),
									onChange: () => O.toggle(e)
								}) }) : null,
								j.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: fe(t.id, e) }, t.id)),
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
var $r = `<div data-catalog-tier="performers" data-skeleton="tiers">${Kn("performer")}</div><div data-catalog-tier="studios">${Kn("studio")}</div>`;
function ei({ value: e }) {
	let t = gn(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: X("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(b, {
			color: t.color,
			children: t.label
		})
	});
}
var ti = (e) => Nt(e).then((t) => (t.has_cover && ht(e, t), t.has_cover));
function ni({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let [o, s] = (0, Q.useState)(() => Sn(location.search)), c = (0, Q.useSyncExternalStore)(nt().subscribe, () => Tn("jav-releases", 24));
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
		let n = zn(o, e, t);
		s(n), Z({
			[e]: "",
			column_filters: n.column_filters || "",
			page: ""
		});
	}, p = (e, t) => {
		let n = vn(o, e);
		f(e, n === void 0 ? [t] : qn(n, t, !ut(n, t)));
	}, g = (e) => {
		s((t) => ({
			...t,
			column_filters: e,
			page: 1
		})), Z({
			column_filters: e,
			page: ""
		});
	}, _ = (e, t) => g(mr(hn(o.column_filters), e, t)), v = (e) => {
		s((t) => ({
			...t,
			code: e,
			page: 1
		})), Z({
			code: e,
			page: ""
		});
	}, y = hn(o.column_filters), b = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? ln : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(qe, {
			label: t,
			kind: ct[e],
			value: y[e],
			rangeQuery: e === "release" ? xn(o) : void 0,
			onChange: (t) => {
				_(e, t), n();
			}
		})
	}), x = (0, Q.useRef)(null), C = (0, Q.useRef)(null), ee = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1, r = t !== o.size;
		r && wn("jav-releases", t), s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			...r && { size: String(t) }
		}), A !== "list" && x.current?.scrollIntoView({ block: "start" });
	}, te = () => {
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
	}, ne = (e, t) => {
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
	}, D = () => {
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
		let e = [...x.current?.querySelectorAll("[data-catalog-tier],[data-filter-row=\"bottom\"]") || []].map((e) => fr(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let O = nt();
	(0, Q.useSyncExternalStore)(O.subscribe, O.version, O.version);
	let k = Kt(), A = Yn(), ie = ot(Vt({
		active: !0,
		home: !1,
		portrait: !1
	})), j = nr({
		queryKey: Cn(o),
		queryFn: ({ signal: e }) => Lt(o, e),
		placeholderData: Qt,
		retry: !1,
		refetchOnWindowFocus: !1
	}), se = j.data?.metadata_job, M = (0, Q.useRef)(!1);
	M.current = se?.status === "running";
	let fe = mn.getQueryData(E)?.metadata_job, pe = nr({
		queryKey: E,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: se?.status === "running" || fe?.status === "running",
		queryFn: ({ signal: e }) => Ft(e),
		refetchInterval: rn(() => M.current)
	}), me = pe.data && pe.dataUpdatedAt >= j.dataUpdatedAt ? pe.data.metadata_job : se, N = me?.status === "running", _e = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		_e.current && !N && j.refetch(), _e.current = N;
	}, [N, j]);
	let ye = (0, Q.useRef)(""), xe = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.column_filters,
		o.q,
		o.code,
		o.sort,
		o.dir,
		o.seed
	]), Ce = !j.isPlaceholderData && (j.data?.metadata_unread || 0) > 0 && !N, we = Jn(), Te = () => void we.run("start", async (e) => {
		let t = await mt("start", o, "", e);
		return await mn.cancelQueries({ queryKey: E }), t;
	}, (e) => mn.setQueryData(E, e));
	(0, Q.useEffect)(() => {
		Ce && !we.busy && ye.current !== xe && (ye.current = xe, Te());
	}, [
		Ce,
		xe,
		we.busy
	]);
	let Ee = Jn(), De = (e) => {
		Ee.run(String(e.id), (t) => et({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), Ut(), j.refetch();
		});
	}, P = j.data, ke = (P?.facets.tags || []).map((e) => ({
		id: e.name,
		label: e.name,
		count: e.count,
		selected: yn(o, "tag").includes(e.name)
	}));
	Sr(P?.items || []);
	let F = j.isPending, I = F || j.isPlaceholderData, L = I || N && !ke.length, Ae = P ? void 0 : j.error, R = xr(!F && !j.isPlaceholderData), B = !!(o.performer || o.studio || o.tag || o.column_filters || o.q || o.code), V = Math.max(1, Math.ceil((P?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!P || j.isPlaceholderData || o.page <= V || (s((e) => ({
			...e,
			page: V
		})), Z({ page: V > 1 ? String(V) : "" }));
	}, [
		P,
		j.isPlaceholderData,
		o.page,
		V
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: x,
		"aria-label": X("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": F || j.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			F ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				className: he,
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: $r }
			}) : null,
			P && (P.facets.performers.length || P.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				className: he,
				children: [P.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: P.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsx)(Ir, {
						person: e,
						count: e.count,
						pressed: yn(o, "performer").includes(e.name),
						onClick: () => p("performer", e.name)
					}, e.name))
				}) : null, P.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: P.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsx)(Rr, {
						studio: e,
						count: e.count,
						pressed: yn(o, "studio").includes(e.name),
						onClick: () => p("studio", e.name)
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(le, {
				label: X("catalog:javReleases.filtersLabel"),
				topLabel: X("catalog:catalogFilter.viewsAndTags"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: F,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: L || ke.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: L ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-skeleton": be,
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Yt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ue, {
						choices: ke,
						onSelect: (e) => p("tag", e)
					})
				}) : null,
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: F ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : B ? X("catalog:javReleases.matchedCount", {
							matched: P?.total || 0,
							count: P?.candidate_total || 0
						}) : X("catalog:countLabel.works", { count: P?.total || 0 })
					}),
					/* @__PURE__ */ (0, $.jsx)(Se, { tab: "releases" }),
					B ? /* @__PURE__ */ (0, $.jsx)(oe, {
						onPress: te,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(de, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Be, {
							onPress: D,
							busy: o.sort === "random" && j.isFetching
						}), /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Le, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: k,
							options: ge,
							onChange: Vn
						}) })] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(ce, {
								id: "jav-release-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								pending: I,
								error: Ae,
								withAvatar: !0,
								choices: (P?.facets.performers || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: yn(o, "performer").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: e })
								})),
								onSelect: (e) => p("performer", e),
								active: vn(o, "performer") !== void 0,
								onClear: vn(o, "performer") === void 0 ? void 0 : () => f("performer", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ce, {
								id: "jav-release-studios",
								orderKey: "studio",
								label: X("catalog:shared.label"),
								pending: I,
								error: Ae,
								withAvatar: !0,
								choices: (P?.facets.studios || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: yn(o, "studio").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: e })
								})),
								onSelect: (e) => p("studio", e),
								active: vn(o, "studio") !== void 0,
								onClear: vn(o, "studio") === void 0 ? void 0 : () => f("studio", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ce, {
								id: "jav-release-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								pending: L,
								error: Ae,
								choices: ke,
								onSelect: (e) => p("tag", e),
								active: vn(o, "tag") !== void 0,
								onClear: vn(o, "tag") === void 0 ? void 0 : () => f("tag", void 0)
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(He, {
							group: "releases",
							sorts: Me.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === o.sort,
								dir: o.dir
							})),
							onSort: (e, t) => ne(e, t),
							filters: {
								release_date: b("release", X("catalog:catalogList.releaseDate")),
								duration: b("dur", X("catalog:catalogList.duration")),
								source_score: b("score", X("catalog:javSort.siteRating")),
								taste: b("taste", X("catalog:javSort.taste")),
								code: {
									active: !!o.code,
									render: (e) => /* @__PURE__ */ (0, $.jsx)(Jr, {
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
				columns: [...bn, {
					id: "taste",
					label: X("catalog:javSort.taste")
				}],
				onChange: g
			}) : null,
			F && A === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: Wt("discover", k) }
			}) : null,
			j.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				titleKey: "catalog:javReleases.failed",
				query: j
			}) : null,
			Ce && we.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				title: /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "catalog.javMetadata.requestFailed",
					children: X("catalog:javMetadata.requestFailed")
				}),
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: !!we.busy,
					onClick: Te,
					children: X("catalog:shared.retryNow")
				}),
				children: we.error
			}) : null,
			N && me ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(Ye, {
					kind: $e("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: me.completed,
						count: me.total
					}),
					value: me.completed,
					total: me.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(T, {
				scope: X("catalog:javReleases.coverQueueScope"),
				fetchOne: ti,
				codes: (P?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? X("catalog:javReleases.coversFetched", { count: n }) : X("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), j.refetch();
				}
			}),
			!F && !j.error && !P?.items.length && (A === "cards" || !B) ? /* @__PURE__ */ (0, $.jsx)(ae, {
				icon: d,
				title: X(B ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: B ? /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					onClick: te,
					children: X("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: X("catalog:javReleases.addSubscription")
				}),
				children: X(B ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			Ee.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				children: Ee.error
			}) : null,
			A === "list" ? F || P?.items.length || B ? /* @__PURE__ */ (0, $.jsx)(Qr, {
				items: P?.items || [],
				waiting: F,
				filters: o,
				tableTop: C,
				selecting: !j.isPlaceholderData,
				studios: P?.facets.studios || [],
				javImage: O.value.javImage,
				readOnly: e,
				navigate: i,
				facets: P?.facets,
				onFilter: f,
				onRange: _,
				onTag: (e) => p("tag", e),
				onSort: ne,
				wanting: (e) => Ee.busy === String(e.id),
				onWant: De,
				onResource: (e) => n(Hr(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ve,
				style: { "--card-ratio": ie },
				...R,
				children: (P?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Gr, {
					item: t,
					layout: k,
					javImage: O.value.javImage,
					readOnly: e,
					navigate: i,
					tag: yn(o, "tag"),
					onTag: (e) => p("tag", e),
					wanting: Ee.busy === String(t.id),
					onWant: () => De(t),
					onResource: () => n(Hr(t)),
					badge: o.sort === "taste" || y.taste ? /* @__PURE__ */ (0, $.jsx)(ei, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			P ? /* @__PURE__ */ (0, $.jsx)(re, {
				label: X("catalog:javTabs.newReleases"),
				total: P.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: ee,
				scrollTarget: A === "list" ? C : void 0,
				stickyHeader: () => x.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit"),
				pageSizes: je
			}) : null
		]
	});
}
// src/react/jav/online-catalog-table.tsx
var ri = Un({
	rowSortingFeature: Pn,
	rowSelectionFeature: Nn,
	columnVisibilityFeature: dt,
	columnOrderingFeature: st
}), ii = [{
	id: "select",
	label: X("catalog:javReleases.selectVideos"),
	width: 44,
	min: 44,
	max: 44,
	required: !0
}, ...on], ai = X("catalog:javTabs.online");
function oi({ items: a, waiting: o, javImage: s, maker: l, genres: u, sorting: d, headers: f, empty: m, onSort: h, onFilter: g, onStudio: _, onTag: b }) {
	let x = br(), S = !!x?.mode, C = !o && a.some((e) => e.code), w = sr(F, ii, I), ee = (0, Q.useMemo)(() => {
		let e = xt();
		return e.columns(ii.map((t) => e.accessor((e) => {
			switch (t.id) {
				case "release": return e.release_date;
				case "dur": return e.duration;
				case "code": return e.code;
				default: return;
			}
		}, {
			id: t.id,
			header: t.label,
			enableSorting: P.some(([e]) => e === t.id)
		})));
	}, []), T = or({
		features: ri,
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
			}], [n] = typeof e == "function" ? e(t) : e, r = P.find(([e]) => e === n?.id)?.[0];
			r && n && h(r, n.desc ? "desc" : "asc");
		}
	}), E = T.getHeaderGroups()[0].headers, te = (e, t) => {
		switch (e) {
			case "select": return t.code ? /* @__PURE__ */ (0, $.jsx)(v, {
				slot: null,
				"aria-label": X("catalog:javDiscovery.select", { code: t.code }),
				isSelected: x?.selected.has(t.code),
				onChange: () => x?.toggle(t)
			}) : null;
			case "name": {
				let e = St(t, "small", s), n = t.code ? `/works/${encodeURIComponent(t.code)}` : t.link, r = t.code ? {} : {
					target: "_blank",
					rel: "noopener noreferrer"
				}, i = (e) => {
					t.code && x && (S || Ht(e)) && (e.preventDefault(), x.toggle(t, e.shiftKey));
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
								relayout: (e) => _n(e, "small")
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
								lang: Gn(t.title),
								children: t.title
							})]
						})
					})]
				});
			}
			case "people": {
				let e = Ct(t.performer_refs, t.performers), n = e[0];
				if (!n) return "—";
				let r = J(n);
				return /* @__PURE__ */ (0, $.jsx)(Te, {
					avatar: /* @__PURE__ */ (0, $.jsx)(Nr, { item: t }),
					cast: /* @__PURE__ */ (0, $.jsx)(p, {
						people: e,
						code: t.code,
						subscribe: !0,
						onFilter: g
					}),
					children: /* @__PURE__ */ (0, $.jsx)(Mr, {
						person: n,
						name: r,
						title: n.name,
						onFilter: g
					})
				});
			}
			case "studio": {
				let e = t.studioOption;
				return e ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-inline-action": "",
						className: "min-w-0 max-w-full cursor-pointer",
						"aria-pressed": l === e.id,
						onClick: () => _(e.id),
						children: /* @__PURE__ */ (0, $.jsx)(zr, {
							name: t.studio,
							studio: e
						})
					}), /* @__PURE__ */ (0, $.jsx)(Vr, { studio: e })]
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
					children: e.name
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
			case "dur": return Bt(t.duration) || "—";
			case "code": return t.code || "—";
			default: return /* @__PURE__ */ (0, $.jsx)(we, {
				href: t.link,
				target: "_blank",
				rel: "noopener noreferrer",
				title: t.link,
				size: "small",
				trailingIcon: K,
				children: /* @__PURE__ */ (0, $.jsx)(Ve, {
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
		children: [/* @__PURE__ */ (0, $.jsx)(Je, {
			className: "flex flex-wrap justify-end gap-2",
			label: X("shell:dataTable.toolbar", { label: ai }),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(We, {
					preferences: w,
					label: ai
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(A, {
			follow: !0,
			preferences: w,
			rectangleSelecting: S,
			onRectangle: C ? x?.selectRectangle : void 0,
			onRowClick: C && x ? (e, t) => {
				if (!S && !Ht(t)) return;
				let n = T.getRow(e)?.original;
				n?.code && x.toggle(n, t.shiftKey);
			} : void 0,
			children: /* @__PURE__ */ (0, $.jsxs)(Ue, {
				size: "sm",
				"aria-label": ai,
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
							children: [f[n] ?? zt(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, $.jsx)(y, {})
							}) : null]
						}), /* @__PURE__ */ (0, $.jsx)(Ke, {
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
						children: [E.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: e.id === "select" ? null : /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Y(e.id, !0) } }) }, e.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, t)) : T.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: e.id,
						"data-catalog-row": "",
						"data-release-row": "",
						"data-rectangle-key": e.original.code || void 0,
						"data-rectangle-disabled": !e.original.code || void 0,
						"data-board-selected": e.getIsSelected() || void 0,
						children: [e.getVisibleCells().map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: te(t.column.id, e.original) }, t.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/online-catalog.tsx
var si = tn(["performer"]), ci = [];
async function li(e, t) {
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
function ui() {
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
var di = ["release", "dur"], fi = new Intl.Collator(void 0, {
	numeric: !0,
	sensitivity: "base"
});
function pi(e, { sort: t, dir: n }) {
	if (t === "release" && n === "desc") return e;
	let r = (e) => t === "dur" ? e.duration : t === "code" ? e.code : e.date;
	return [...e].sort((e, t) => {
		let i = r(e), a = r(t);
		if (!i || !a) return Number(!i) - Number(!a);
		let o = typeof i == "number" && typeof a == "number" ? i - a : fi.compare(String(i), String(a));
		return n === "asc" ? o : -o;
	});
}
function mi(e) {
	return e ? e.split(",") : [];
}
function hi(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = n.get(r.name);
		(!e || !t.includes(e.id) && t.includes(r.id)) && n.set(r.name, r);
	}
	return [...n.values()];
}
function gi({ filters: e, data: t, people: n, selected: r, personLabel: i, pending: a, error: o, go: s, close: c }) {
	let [u, d] = (0, Q.useState)(i), f = Xn("online-performer", u, si), p = (t, n) => {
		s({
			...e,
			performer: t,
			actress: n,
			page: 1
		}), c();
	};
	return /* @__PURE__ */ (0, $.jsxs)(De, {
		"aria-label": X("follow:addJavFeed.actressName"),
		className: "py-3 outline-none",
		children: [/* @__PURE__ */ (0, $.jsxs)("form", {
			className: "flex flex-col gap-3 px-3",
			onSubmit: (t) => {
				t.preventDefault();
				let n = u.trim();
				n === i ? p(e.performer, r) : p(n, "");
			},
			"data-copy-interact": "",
			children: [
				/* @__PURE__ */ (0, $.jsx)(N, {
					size: "small",
					label: X("follow:addJavFeed.actressName"),
					value: u,
					onChange: d,
					maxLength: 120,
					ref: f.bind
				}),
				f.list,
				!a && t && t.performer_options.length > 1 ? /* @__PURE__ */ (0, $.jsx)(Re, {
					size: "sm",
					"aria-label": X("catalog:javOnline.performerPage"),
					prefix: X("catalog:javOnline.performerPage"),
					selectedKey: t.selected_actress,
					onSelectionChange: (t) => {
						t !== null && p(e.performer, String(t));
					},
					children: t.performer_options.map((e) => /* @__PURE__ */ (0, $.jsx)(ze, {
						id: e.id,
						children: J({
							...e,
							id: e.entity_id,
							dmm_id: e.id
						})
					}, e.id))
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [e.performer || e.actress ? /* @__PURE__ */ (0, $.jsx)(l, {
						size: "small",
						variant: "ghost",
						type: "button",
						onClick: () => p("", ""),
						children: X("catalog:rangeFilter.clear")
					}) : null, /* @__PURE__ */ (0, $.jsx)(l, {
						size: "small",
						type: "submit",
						children: X("follow:shared.search")
					})]
				})
			]
		}), a || n.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "mt-2",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "mb-1 px-3 text-caption-1-regular text-text-secondary",
				children: X("catalog:javOnline.facetScope")
			}), /* @__PURE__ */ (0, $.jsx)(se, {
				pending: a,
				withAvatar: !0,
				choices: n.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: J(t),
					searchTerms: [
						t.name,
						t.source_name || "",
						t.source_zh_cn || ""
					],
					selected: e === r,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => {
					let t = n.find((t) => t.id === e)?.value;
					t && p(e === r ? "" : t.source_name || t.name, e === r ? "" : e);
				}
			})]
		}) : o ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-3 pt-2",
			children: /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				children: Mt(o)
			})
		}) : null]
	});
}
function _i({ navigate: e, query: t = "" }) {
	let n = Qn(), [r, i] = (0, Q.useState)(ui), [o, s] = (0, Q.useState)(sn), [c, u] = (0, Q.useState)(() => new URLSearchParams(location.search).get("code") || ""), [d, f] = (0, Q.useState)(() => {
		let { release: e, dur: t } = hn(new URLSearchParams(location.search).get("column_filters") || void 0);
		return {
			release: e,
			dur: t
		};
	}), [p, m] = (0, Q.useState)(cn), [g, _] = (0, Q.useState)({}), [v, y] = (0, Q.useState)(""), x = nt();
	(0, Q.useSyncExternalStore)(x.subscribe, x.version, x.version);
	let S = Yn(), T = Kt(), E = ot(Vt({
		active: !0,
		home: !1,
		portrait: !1
	})), te = X("catalog:javTabs.online"), ne = X("catalog:shared.performers"), D = X("catalog:shared.label"), O = X("catalog:shared.tags"), k = X("catalog:catalogList.releaseDate"), re = rr(), A = nr({
		queryKey: ["jav-catalog", r],
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 3e5,
		placeholderData: Qt,
		queryFn: async ({ signal: e }) => li(await tt(`/api/jav/catalog?${new URLSearchParams({
			...r,
			page: String(r.page)
		})}`, e), e)
	}), j = A.isPending || A.isPlaceholderData, oe = A.isPending, se = A.data ? void 0 : A.error;
	(0, Q.useEffect)(() => {
		let e = A.data;
		if (j || !e || e.page === r.page) return;
		let t = {
			...r,
			page: e.page
		};
		re.setQueryData(["jav-catalog", t], e), i(t), Z({ page: e.page > 1 ? String(e.page) : "" });
	}, [
		r,
		A.data,
		re,
		j
	]);
	let M = (e, t = {}) => {
		i(e), Z({
			...e,
			...t,
			page: e.page > 1 ? String(e.page) : ""
		});
	}, fe = (e, t) => {
		s({
			sort: e,
			dir: t
		}), Z({
			sort: e === "release" ? "" : e,
			dir: t === "asc" ? "asc" : ""
		});
	}, pe = er(), me = er(), N = er(), _e = (0, Q.useRef)(null), ye = (0, Q.useRef)(null), xe = $n(p), Ce = (e) => {
		m(e), Z({ status: e === "all" ? "" : e });
	}, we = !!(r.performer || r.actress), Te = we ? "online-performer" : r.maker ? "online-studio" : r.genre ? "online-tags" : "", Ee = v || Te, De = cr(ye, _e, "[data-glide-anchor]", Ee), F = (e) => ({
		anchor: Ee === e,
		onPointerEnter: De.hover,
		onOpenChange: (t) => y((n) => t ? e : n === e ? "" : n)
	}), I = r.actress || (j ? "" : A.data?.selected_actress || ""), L = A.data?.items ?? ci, R = (0, Q.useMemo)(() => {
		let e = t.toLocaleLowerCase();
		return e ? L.filter((t) => [
			t.code,
			t.title,
			t.studio?.name,
			t.studio?.source_name,
			...t.people.flatMap((e) => [
				e.name,
				e.source_name,
				e.source_zh_cn,
				J(e)
			]),
			...t.tags.flatMap((e) => [e.name, e.source_name])
		].join(" ").toLocaleLowerCase().includes(e)) : L;
	}, [
		L,
		t,
		n
	]), z = mi(r.genre), B = Fr(R, (e) => e.people, (e) => e.dmm_id, [I]), V = Fr(R, (e) => e.studio ? [e.studio] : [], (e) => e.id, [r.maker]), je = Fr(R, (e) => e.tags, (e) => e.id, z), Me = /* @__PURE__ */ new Map();
	for (let { value: e } of je) Me.set(e.name, (Me.get(e.name) || 0) + 1);
	let Ne = je.map(({ id: e, value: t, count: n }) => ({
		id: e,
		label: t.name,
		searchTerms: [t.source_name],
		count: n,
		selected: z.includes(e),
		content: (Me.get(t.name) || 0) > 1 && t.source_name !== t.name ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [t.name, /* @__PURE__ */ (0, $.jsx)("span", {
			className: "ml-2 text-caption-1-regular text-text-secondary",
			children: t.source_name
		})] }) : void 0
	})), H = new Set(hi(je.map(({ value: e }) => e), z).map((e) => e.id)), Pe = Ne.filter((e) => H.has(e.id)), Fe = B.find((e) => e.id === I)?.value, Ie = A.data?.performer_options.find((e) => e.id === I), Re = Fe ? J(Fe) : Ie ? J({
		...Ie,
		id: Ie.entity_id,
		dmm_id: Ie.id
	}) : Ot(r.performer || I), ze = V.find((e) => e.id === r.maker)?.value.name || g[`studio:${r.maker}`] || r.maker, U = (e) => je.find((t) => t.id === e)?.value.name || g[`tag:${e}`] || e, Be = (e) => {
		let t = e.dmm_id === I;
		M({
			...r,
			performer: t ? "" : e.source_name || e.name,
			actress: t ? "" : e.dmm_id || "",
			page: 1
		});
	}, Ve = (e) => {
		let t = V.find((t) => t.id === e)?.value;
		t && _((n) => ({
			...n,
			[`studio:${e}`]: t.name
		})), M({
			...r,
			maker: e === r.maker ? "" : e,
			page: 1
		});
	}, W = (e) => {
		let t = z.includes(e);
		e && !t && _((t) => ({
			...t,
			[`tag:${e}`]: U(e)
		}));
		let n = e ? t ? z.filter((t) => t !== e) : [...z, e] : [];
		M({
			...r,
			genre: n.join(","),
			page: 1
		});
	}, Ue = r.date ? { range: {
		min: r.date,
		max: r.date
	} } : d.release, We = (e, t) => {
		f(e);
		let n = { column_filters: mr({ release: e.release }, "dur", e.dur) };
		t ? M(t, n) : Z(n);
	}, G = (e, t) => {
		let n = e === "release" && t?.range.min === t?.range.max ? String(t?.range.min || "") : "";
		We({
			...d,
			[e]: n ? void 0 : t
		}, e === "release" && n !== r.date ? {
			...r,
			date: n,
			page: 1
		} : void 0);
	}, Ke = (e) => {
		u(e), Z({ code: e });
	}, Je = (e, t) => /* @__PURE__ */ (0, $.jsx)(C, {
		id: e,
		orderKey: "performer",
		label: ne,
		active: we,
		toolbar: t,
		view: t ? F(e) : void 0,
		children: (e) => /* @__PURE__ */ (0, $.jsx)(gi, {
			filters: r,
			data: A.data,
			people: B,
			selected: I,
			personLabel: Re,
			pending: j,
			error: se,
			go: M,
			close: e
		})
	}), Ye = (e, t) => /* @__PURE__ */ (0, $.jsx)(ce, {
		id: e,
		orderKey: "studio",
		toolbar: t,
		view: t ? F(e) : void 0,
		label: D,
		active: !!r.maker,
		hint: X("catalog:javOnline.facetScope"),
		onSelect: Ve,
		onClear: r.maker ? () => Ve("") : void 0,
		pending: j,
		error: se,
		withAvatar: !0,
		choices: V.map(({ id: e, value: t, count: n }) => ({
			id: e,
			label: t.name,
			searchTerms: [t.source_name],
			count: n,
			selected: e === r.maker,
			leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
		}))
	}), Xe = (e, t) => /* @__PURE__ */ (0, $.jsx)(ce, {
		id: e,
		orderKey: "tags",
		toolbar: t,
		view: t ? F(e) : void 0,
		label: O,
		active: !!r.genre,
		hint: X("catalog:javOnline.facetScope"),
		onSelect: W,
		onClear: z.length ? () => W("") : void 0,
		pending: j,
		error: se,
		choices: Ne
	}), Ze = (e) => {
		e === "performer" ? M({
			...r,
			performer: "",
			actress: "",
			page: 1
		}) : e === "maker" ? M({
			...r,
			maker: "",
			page: 1
		}) : e === "release" || e === "dur" ? G(e, void 0) : e === "code" && Ke("");
	}, K = [];
	we && K.push({
		kind: "clear",
		key: "performer",
		label: `${ne} ${Re}`
	}), r.maker && K.push({
		kind: "clear",
		key: "maker",
		label: `${D} ${ze}`
	});
	for (let e of di) {
		let t = e === "release" ? Ue : d.dur;
		t && K.push({
			kind: "clear",
			key: e,
			label: `${e === "release" ? k : X("catalog:catalogList.duration")} ${lt(ct[e], t.range)}`
		});
	}
	c && K.push({
		kind: "clear",
		key: "code",
		label: `${X("catalog:shared.code")} ${c}`
	});
	for (let e of z) K.push({
		kind: "untag",
		key: e,
		label: U(e)
	});
	let Qe = p !== "all" || !!(c || d.dur || !r.date && d.release), $e = (0, Q.useMemo)(() => j ? [] : pi(Qe ? R.filter((e) => (p === "all" || e.pre_order === (p === "preOrder")) && (!c || qr(e.code, c)) && (r.date || !d.release || pr("date", d.release.range, e.date)) && (!d.dur || pr("duration", d.dur.range, e.duration))) : R, o).map((e, t) => {
		let n = hi(e.tags, mi(r.genre));
		return {
			id: t + 1,
			catalogId: e.id,
			code: e.code,
			title: e.title,
			performer_refs: e.people,
			performers: "",
			studio: e.studio?.name || "",
			studio_ref: e.studio || void 0,
			studioOption: e.studio,
			tagOptions: n,
			tags: n.map((e) => e.name),
			duration: e.duration,
			release_date: e.date,
			link: e.url,
			cover_url: e.cover_url,
			online_cover_url: e.cover_url,
			has_cover: !1,
			wanted: !1,
			preOrder: e.pre_order
		};
	}), [
		j,
		Qe,
		R,
		p,
		c,
		r.date,
		r.genre,
		d.release,
		d.dur,
		o
	]), et = (0, Q.useMemo)(() => $e.filter((e) => e.code), [$e]);
	Sr(et);
	let q = xr(!j && et.length > 0), rt = o.sort !== "release" || o.dir === "asc", it = S === "list" && (j || !!A.data), at = A.data && !j && !$e.length && !A.error && !A.data.coverUnverified ? /* @__PURE__ */ (0, $.jsx)(ae, {
		icon: ie,
		title: X(R.length ? "catalog:javOnline.noPageMatches" : A.data.total ? "catalog:javOnline.noCoveredWorks" : "catalog:javOnline.noMatches"),
		actions: R.length ? /* @__PURE__ */ (0, $.jsx)(l, {
			size: "small",
			onClick: () => {
				m("all"), u(""), f({
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
		"aria-label": te,
		"aria-busy": j,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			oe ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: Gt() }
			}) : B.length || V.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				className: he,
				children: [B.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: pe,
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: B.map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(Ir, {
						person: t,
						count: n,
						pressed: e === I,
						onClick: () => Be(t)
					}, e))
				}) : null, V.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: me,
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: V.map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(Rr, {
						studio: t,
						count: n,
						pressed: e === r.maker,
						onClick: () => Ve(e),
						showCount: !1
					}, e))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(le, {
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
				panes: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [xe.pane, /* @__PURE__ */ (0, $.jsx)("span", {
					ref: ye,
					"data-view-glide": "",
					"aria-hidden": "true"
				})] }),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: N,
					"data-catalog-scroll": "",
					children: [xe.choices(X("catalog:javOnline.pageStatus"), ke.map(([e, t]) => ({
						key: e,
						label: X(t),
						attrs: { "data-online-status": e }
					})), Ce), oe ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-skeleton": be,
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Yt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ue, {
						choices: Pe,
						onSelect: W
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
							}) : A.data && (A.data.coverOmitted || Qe) ? X("catalog:javOnline.coveredCount", {
								shown: $e.length,
								total: A.data.total
							}) : X("catalog:countLabel.works", { count: A.data?.total || 0 })
						}),
						rt ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.localSort")
						}) : null,
						Qe ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.pageFilters")
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(Se, { tab: "online" })
					]
				}), /* @__PURE__ */ (0, $.jsx)(de, {
					tools: /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Le, {
						label: X("catalog:entityFilter.javCardLayout"),
						value: T,
						options: ge,
						onChange: Vn
					}) }) }),
					fieldGroup: {
						ref: _e,
						role: "group",
						"aria-label": X("catalog:javDiscover.filtersLabel"),
						onPointerLeave: De.leave
					},
					fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
						Je("online-performer", !0),
						Ye("online-studio", !0),
						Xe("online-tags", !0)
					] }),
					sorts: /* @__PURE__ */ (0, $.jsx)(He, {
						group: "javOnline",
						sorts: P.map(([e, t]) => ({
							key: e,
							label: X(t),
							ariaLabel: X(t),
							pressed: o.sort === e,
							dir: o.dir
						})),
						onSort: (e, t) => fe(e, t),
						filters: {
							release: {
								active: !!Ue,
								required: !0,
								shouldCloseOnInteractOutside: ln,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(qe, {
									label: k,
									kind: "date",
									value: Ue,
									rangeValues: R.map((e) => e.date),
									onChange: (t) => {
										G("release", t), e();
									}
								})
							},
							dur: {
								active: !!d.dur,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(qe, {
									label: X("catalog:catalogList.duration"),
									kind: "duration",
									value: d.dur,
									onChange: (t) => {
										G("dur", t), e();
									}
								})
							},
							code: {
								active: !!c,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Jr, {
									value: c,
									onChange: (t) => {
										Ke(t), e();
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
					toggleTag: W,
					clearFilter: Ze,
					clearAll: () => {
						u(""), f({
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
			A.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				title: X("catalog:javOnline.failed"),
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: Mt(A.error)
			}) : null,
			A.data?.coverUnverified && !j ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: X("catalog:javOnline.coverUnverified")
			}) : null,
			it ? /* @__PURE__ */ (0, $.jsx)(oi, {
				items: $e,
				waiting: j,
				javImage: x.value.javImage,
				empty: at,
				maker: r.maker,
				genres: z,
				sorting: o,
				onSort: fe,
				headers: {
					people: Je("online-column-performer", !1),
					studio: Ye("online-column-studio", !1),
					tags: Xe("online-column-tags", !1),
					release: /* @__PURE__ */ (0, $.jsx)(Ge, {
						id: "online-column-release",
						label: k,
						kind: "date",
						value: Ue,
						rangeValues: R.map((e) => e.date),
						onChange: (e) => G("release", e)
					}),
					dur: /* @__PURE__ */ (0, $.jsx)(Ge, {
						id: "online-column-duration",
						label: X("catalog:catalogList.duration"),
						kind: "duration",
						value: d.dur,
						onChange: (e) => G("dur", e)
					}),
					code: /* @__PURE__ */ (0, $.jsx)(C, {
						id: "online-column-code",
						label: X("catalog:shared.code"),
						active: !!c,
						children: (e) => /* @__PURE__ */ (0, $.jsx)(Jr, {
							value: c,
							onChange: (t) => {
								Ke(t), e();
							}
						})
					})
				},
				onFilter: Be,
				onStudio: Ve,
				onTag: W
			}) : at,
			S === "cards" && j ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: an(E) }
			}) : null,
			S === "cards" && $e.length > 0 ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ve,
				style: { "--card-ratio": E },
				...q,
				children: $e.map((t) => /* @__PURE__ */ (0, $.jsx)(Gr, {
					item: t,
					layout: T,
					javImage: x.value.javImage,
					readOnly: !0,
					navigate: e,
					onFilterPerson: Be,
					tag: z.map(U),
					onTag: (e) => {
						let n = t.tagOptions.find((t) => t.name === e);
						(!e || n) && W(n?.id || "");
					},
					studioFilter: t.studioOption ? {
						selected: r.maker === t.studioOption.id,
						onPress: () => Ve(t.studioOption.id),
						entityId: t.studioOption.entity_id
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
				}) : null, /* @__PURE__ */ (0, $.jsx)(Ae, {
					label: te,
					page: A.data.page,
					pages: A.data.pages,
					onPage: (e) => M({
						...r,
						page: e
					})
				})]
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var vi = Bn("x"), yi = Bn("refresh-cw");
function bi({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), o = tr(), s = new URLSearchParams(o.search), c = (0, Q.useRef)("");
	o.pathname === "/jav" && Jt(s.get("tab")) === e && (c.current = s.get("q") || "");
	let l = c.current, u = (e) => Z({ q: e });
	return /* @__PURE__ */ (0, $.jsx)(Cr, {
		readOnly: t,
		receipt: r,
		dock: e !== "wants",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: _e,
			children: [e === "releases" ? /* @__PURE__ */ (0, $.jsx)(ni, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(wi, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: l.trim(),
				navigate: n,
				clearText: () => u("")
			}) : e === "online" ? /* @__PURE__ */ (0, $.jsx)(_i, {
				navigate: n,
				query: l.trim()
			}) : /* @__PURE__ */ (0, $.jsx)(Ar, {
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
var xi = {
	release: "release_date",
	dur: "duration",
	score: "source_score",
	taste: "taste_score"
}, Si = 24;
function Ci(e) {
	return Ct(e.performer_refs, e.performers).map((t) => ({
		...t,
		avatar_code: e.code
	}));
}
function wi({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, c] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => o.get("performer") || ""), [g, _] = (0, Q.useState)(() => o.get("code") || ""), [v, y] = (0, Q.useState)(() => o.get("studio") || ""), [x, ee] = (0, Q.useState)(() => hn(o.get("column_filters") || void 0)), [T, D] = (0, Q.useState)(() => Et(o).sort), [O, k] = (0, Q.useState)(() => Et(o).direction === "asc"), A = (e = {}) => {
		f(""), m(""), y(""), _(""), ee({}), Z({
			tag: "",
			performer: "",
			studio: "",
			code: "",
			column_filters: "",
			...e
		});
	}, j = (e) => {
		e !== s && (c(e), A({ scope: e === "external" ? "" : e }));
	}, se = (e) => {
		f(e), Z({ tag: e });
	}, fe = (e) => {
		m(e), Z({ performer: e });
	}, pe = (e) => {
		y(e), Z({ studio: e });
	}, me = (e) => {
		_(e), Z({ code: e });
	}, N = (e, t) => {
		let n = mr(x, e, t);
		ee(hn(n)), Z({ column_filters: n });
	}, _e = (e, t) => {
		D(e), k(t === "asc"), Z({
			sort: e === "taste" ? "" : e,
			dir: t === "asc" ? t : ""
		});
	}, ye = (0, Q.useRef)(null), xe = (0, Q.useRef)(null), we = er(), Te = er(), Ee = cr(ye, xe, "[aria-pressed=\"true\"]", s), De = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...De.current?.querySelectorAll("[data-catalog-scroll],[data-filter-row=\"bottom\"]") || []].map((e) => fr(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let P = nt();
	(0, Q.useSyncExternalStore)(P.subscribe, P.version, P.version);
	let ke = Kt(), F = Yn(), I = (0, Q.useRef)(null), [L, Ae] = ar(ne), R = ot(Vt({
		active: !0,
		home: !1,
		portrait: !1
	})), B = O ? "asc" : "desc", V = nr({
		queryKey: Tt(s, T, B),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => Pt(s, e, {
			sort: T,
			direction: B
		})
	}), je = V.data?.metadata_job, Me = (0, Q.useRef)(!1);
	Me.current = je?.status === "running";
	let Ne = nr({
		queryKey: E,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => Ft(e),
		refetchInterval: rn(() => Me.current)
	}), H = Ne.data && Ne.dataUpdatedAt >= V.dataUpdatedAt ? Ne.data.metadata_job : je, Pe = (e) => e ? `${e.job_id}:${e.status}` : "", Fe = (0, Q.useRef)(""), Ie = (0, Q.useRef)(""), Re = Ne.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = Pe(Re), t = Ie.current.endsWith(":running") && Re && Re.status !== "running";
		Ie.current = e, t && e !== Fe.current && V.refetch();
	}, [Pe(Re)]);
	let ze = Jn(), U = Jn(), Be = (0, Q.useRef)("start"), Ve = async (e, t) => {
		let n = await pt(e, {
			sort: T,
			direction: B,
			jobId: H?.job_id
		}, t);
		e !== "start" && await V.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await mn.cancelQueries({ queryKey: E }), Fe.current = Pe(n.metadata_job), mn.setQueryData(E, n);
	}, W = (e) => {
		U.busy || (Be.current = e, U.run(e, (t) => Ve(e === "start" ? "start" : e === "stop" ? "cancel" : "refresh", t), () => {}));
	}, Ue = (0, Q.useRef)(!1), We = s === "external" && H?.status !== "running" && (V.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		We && !Ue.current && (Ue.current = !0, W("start"));
	}, [We]);
	let G = V.data?.items || [], Ge = Fr(G, (e) => e.tags || [], (e) => e, [d]).map(({ id: e, count: t }) => ({
		id: e,
		label: e,
		count: t,
		selected: d === e
	})), Ke = Fr(G, Ci, (e) => e.name, [p]), Je = Fr(G, (e) => e.studio_ref ? [e.studio_ref] : e.studio ? [{
		name: e.studio,
		has_logo: !1
	}] : [], (e) => e.name, [v]), Xe = (e) => se(d === e ? "" : e), Ze = (e) => fe(p === e ? "" : e), K = (e) => pe(v === e ? "" : e), Qe = !!(r || d || p || v || g || x.release || x.dur || x.score || x.taste), tt = () => {
		A(), r && a();
	}, q = G.filter((e) => (!d || e.tags?.includes(d)) && (!g || qr(e.code, g)) && (!p || Ci(e).some((e) => e.name === p)) && (!v || (e.studio_ref?.name || e.studio) === v) && Object.keys(xi).every((t) => {
		let n = x[t], r = t === "taste" ? e.taste_score ?? e.score : e[xi[t]];
		return !n || pr(ct[t], n.range, r);
	}) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), it = (e, t) => ({
		active: !!x[e],
		shouldCloseOnInteractOutside: e === "release" ? ln : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(qe, {
			label: t,
			kind: ct[e],
			value: x[e],
			rangeValues: e === "release" ? G.map((e) => e.release_date) : void 0,
			onChange: (t) => {
				N(e, t), n();
			}
		})
	}), at = (e, t) => {
		let n = it(e, t);
		return /* @__PURE__ */ (0, $.jsx)(C, {
			id: `discover-column-${e}`,
			label: t,
			active: n.active,
			shouldCloseOnInteractOutside: n.shouldCloseOnInteractOutside,
			children: n.render
		});
	}, J = (e) => /* @__PURE__ */ (0, $.jsx)(Jr, {
		value: g,
		onChange: (t) => {
			me(t), e();
		}
	}), Y = V.isPending, st = Y || s === "external" && !Ge.length && H?.status === "running", lt = V.data ? void 0 : V.error, ut = (e) => {
		let t = e ? "jav-discover" : "discover-column";
		return {
			people: /* @__PURE__ */ (0, $.jsx)(ce, {
				id: `${t}-performers`,
				orderKey: "performer",
				toolbar: e,
				label: X("catalog:shared.performers"),
				active: !!p,
				pending: Y,
				error: lt,
				withAvatar: !0,
				choices: Ke.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: kt("performer", t.name, t.id),
					searchTerms: [t.name],
					selected: p === e,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => fe(p === e ? "" : e),
				onClear: p ? () => fe("") : void 0
			}),
			studio: /* @__PURE__ */ (0, $.jsx)(ce, {
				id: `${t}-studios`,
				orderKey: "studio",
				toolbar: e,
				label: X("catalog:shared.label"),
				active: !!v,
				pending: Y,
				error: lt,
				withAvatar: !0,
				choices: Je.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: t.name,
					selected: v === e,
					leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: t })
				})),
				onSelect: (e) => pe(v === e ? "" : e),
				onClear: v ? () => pe("") : void 0
			}),
			tags: /* @__PURE__ */ (0, $.jsx)(ce, {
				id: `${t}-tags`,
				orderKey: "tags",
				toolbar: e,
				label: X("catalog:shared.tags"),
				active: !!d,
				pending: st,
				error: lt,
				choices: Ge,
				onSelect: Xe,
				onClear: d ? () => se("") : void 0
			})
		};
	}, dt = ut(!0), ft = (e) => {
		ze.run(String(e.id), (t) => et({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), Ut(), V.refetch();
		});
	}, mt = Math.max(0, Math.ceil(q.length / L.pageSize) - 1), ht = Math.min(L.pageIndex, mt), gt = ht * L.pageSize, _t = F === "list" ? q.slice(gt, gt + L.pageSize) : q;
	Sr(_t);
	let vt = xr(!Y);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: De,
		"aria-label": X("catalog:shared.recommendedForYou"),
		"aria-busy": Y,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			Y ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: Gt() }
			}) : Ke.length || Je.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-discover-tiers": "",
				className: he,
				children: [Ke.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: we,
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: Ke.slice(0, Si).map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(Ir, {
						person: t,
						count: n,
						pressed: p === e,
						onClick: () => Ze(e)
					}, e))
				}) : null, Je.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: Te,
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: Je.slice(0, Si).map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(Rr, {
						studio: t,
						count: n,
						pressed: v === e,
						onClick: () => K(e)
					}, e))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(le, {
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
					ref: ye,
					"data-view-glide": "",
					"aria-hidden": "true"
				}),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: xe,
						role: "group",
						"aria-label": X("catalog:javDiscover.scopeLabel"),
						"data-catalog-views": "",
						onPointerLeave: Ee.leave,
						children: [[["external", X("catalog:javDiscover.external")], ["library", X("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"data-catalog-view": e,
							"data-entity-press": "",
							"aria-pressed": s === e,
							onPointerEnter: Ee.hover,
							onClick: () => j(e),
							children: t
						}, e)), st || Ge.length ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						}) : null]
					}), st ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-skeleton": be,
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Yt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ue, {
						choices: Ge,
						onSelect: Xe
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
						}), /* @__PURE__ */ (0, $.jsx)(Ce, { currentHref: () => location.pathname + location.search })]
					}),
					/* @__PURE__ */ (0, $.jsx)(Se, { tab: "discover" }),
					Qe ? /* @__PURE__ */ (0, $.jsx)(oe, {
						onPress: tt,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(de, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s === "external" ? /* @__PURE__ */ (0, $.jsx)(M, {
							"data-entity-batch": "",
							"data-jav-metadata-update": "",
							label: H?.status === "running" ? X("catalog:javDiscover.stopUpdating") : X("catalog:javDiscover.updateMetadata"),
							disabled: Y,
							"data-skeleton-action": Y ? "" : void 0,
							busy: !!U.busy,
							icon: H?.status === "running" ? vi : yi,
							onPress: () => W(H?.status === "running" ? "stop" : "update")
						}) : null, /* @__PURE__ */ (0, $.jsx)(h, { cardLayout: /* @__PURE__ */ (0, $.jsx)(Le, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: ke,
							options: ge,
							onChange: Vn
						}) })] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							dt.people,
							dt.studio,
							dt.tags
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(He, {
							group: "discover",
							sorts: te.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === T,
								dir: B
							})),
							onSort: (e, t) => _e(e, t),
							filters: {
								release_date: it("release", X("catalog:catalogList.releaseDate")),
								duration: it("dur", X("catalog:catalogList.duration")),
								source_score: it("score", X("catalog:javSort.siteRating")),
								taste: it("taste", X("catalog:javSort.taste")),
								code: {
									active: !!g,
									render: J
								}
							}
						})
					})
				] })
			}),
			Y && F === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: Wt("discover", ke) }
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				titleKey: "catalog:javDiscover.failed",
				query: V
			}) : null,
			s === "external" && H?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(Ye, {
					kind: $e("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: H.completed,
						count: H.total
					}),
					value: H.completed,
					total: H.total
				})
			}) : null,
			H && H.status !== "running" && (H.status !== "complete" || H.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					...rt(U.busy === "retry"),
					"aria-label": X("catalog:javMetadata.retry"),
					onClick: () => W("retry"),
					children: X("catalog:shared.retryNow")
				}),
				children: Xt(H) || X("catalog:javMetadata.progress", {
					completed: H.completed,
					count: H.total
				})
			}) : null,
			s === "external" && U.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				title: /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "catalog.javMetadata.requestFailed",
					children: X("catalog:javMetadata.requestFailed")
				}),
				action: /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: !!U.busy,
					onClick: () => W(Be.current),
					children: X("catalog:shared.retryNow")
				}),
				children: U.error
			}) : null,
			!Y && !V.error && !q.length ? /* @__PURE__ */ (0, $.jsx)(ae, {
				icon: ie,
				title: X(Qe ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: X("catalog:javDiscover.viewTaste")
				}), Qe ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					onClick: tt,
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
				children: X(Qe ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			ze.error ? /* @__PURE__ */ (0, $.jsx)(Oe, {
				tone: "error",
				children: ze.error
			}) : null,
			F === "list" ? Y || q.length > 0 ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Qr, {
				items: _t,
				waiting: Y,
				tableTop: I,
				discovery: {
					sort: T,
					dir: B,
					tag: d,
					headers: {
						...ut(!1),
						release: at("release", X("catalog:catalogList.releaseDate")),
						dur: at("dur", X("catalog:catalogList.duration")),
						score: at("score", X("catalog:javSort.siteRating")),
						taste: at("taste", X("catalog:javSort.taste")),
						code: /* @__PURE__ */ (0, $.jsx)(C, {
							id: "discover-column-code",
							label: X("catalog:shared.code"),
							active: !!g,
							children: J
						})
					}
				},
				javImage: P.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: Xe,
				onSort: (e, t) => {
					e !== "random" && _e(e, t);
				},
				wanting: (e) => ze.busy === String(e.id),
				onWant: ft,
				onResource: (e) => n(Hr(e))
			}), Y ? null : /* @__PURE__ */ (0, $.jsx)(re, {
				label: X("catalog:javTabs.discover"),
				total: q.length,
				pagination: {
					pageIndex: ht,
					pageSize: L.pageSize
				},
				onChange: Ae,
				scrollTarget: I,
				stickyHeader: () => De.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit")
			})] }) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ve,
				style: { "--card-ratio": R },
				...vt,
				children: q.map((t) => {
					let r = gn(t.taste_score ?? t.score), a = [
						r.label,
						X("catalog:javScore.taste", { score: Dt(t.taste_score ?? t.score) }),
						V.data?.ranking_method === "mmr" && t.ranking_score != null ? X("catalog:javScore.ranking", { score: Dt(t.ranking_score) }) : "",
						t.source_score == null ? "" : X("catalog:javScore.siteRating", { rating: t.source_score.toFixed(1) }),
						...Rn(t.reasons, t.reason_codes, t.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Gr, {
						item: t,
						layout: ke,
						javImage: P.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: se,
						wanting: ze.busy === String(t.id),
						onWant: () => ft(t),
						onResource: () => n(Hr(t)),
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
export { bi as JavPage };

//# debugId=d1e16799-8a19-49ed-941d-e95168b7bf33