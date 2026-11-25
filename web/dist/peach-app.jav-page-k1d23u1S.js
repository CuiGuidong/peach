(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1acd89b5-bd9b-4aaa-b740-b0db011064ab", e._sentryDebugIdIdentifier = "sentry-dbid-1acd89b5-bd9b-4aaa-b740-b0db011064ab");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $ea3928288112382f$export$439d29a4e110a164 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, $l as s, ActivityMotion as c, ArtSlot as l, Button as u, ButtonLink as d, Bx as f, COVER_STATE_TITLE as p, CatalogColumnFilterChips as m, CatalogPerformerTile as h, CatalogStudioTile as g, CatalogViewToggle as _, Checkbox as v, ChevronSortDown as y, Chip as b, CloudDownloadDialog as x, ColumnFilterAvatar as S, ColumnFilterPopover as C, ColumnFilterStudioAvatar as w, Combo as ee, CoverQueue as te, DISCOVERY_METADATA_KEY as T, DISCOVERY_SORTS as E, DOWNLOADS_KEY as D, DOWNLOADS_URL as O, DataTableFooter as k, DataTableFrame as A, E3 as ne, EmptyFocusButton as j, EmptyState as re, FilterActionButton as ie, FilterChoiceList as M, FilterDropdown as ae, FilterGlassRows as oe, FilterIconButton as N, FilterMenuScroll as se, FilterTagStrip as ce, FilterToolbarControls as le, Gg as ue, H7 as de, IndexSearch as fe, Input as P, JAV_LAYOUTS as pe, JAV_RECOMMENDATION_GRID as me, JAV_SELECTION_EVENT as F, JZ as he, JavHeader as I, LibraryShortcuts as ge, LinkButton as _e, M6 as L, MenuDialog as R, Note as z, ONLINE_COLUMNS as B, ONLINE_SORTS as ve, ONLINE_STATUS as V, ONLINE_TABLE_WIDTH as H, PHASES as U, Pagination as ye, RELEASE_COLUMN_VISIBILITY_KEY as be, RELEASE_COLUMN_WIDTHS_KEY as xe, RELEASE_PAGE_SIZES as Se, RELEASE_SORTS as Ce, RELEASE_SORT_COLUMNS as W, SEGMENT as we, SEGMENTED_TRACK as Te, ScrapeSourceLabel as Ee, SegmentedRadioGroup as De, Segments as Oe, Select as G, SelectItem as K, SelectionDock as ke, Shuffle as Ae, SiteLabel as je, SortKeys as Me, SourceAvatar as Ne, Table as Pe, TableColumnControls as q, TableColumnFilter as Fe, TableColumnRange as J, TableColumnResizer as Ie, TableRangeFields as Le, TaskProgress as Re, WANTS_KEY as ze, WantMagnets as Be, Wt as Ve, __toESM as He, activityKind as Ue, addWant as We, apiGet as Ge, appSettingsStore as Ke, avatarInner as qe, busyProps as Je, cachedMagnetStates as Ye, cardClass as Xe, cardRatio as Ze, catalogListSkeletonCellHtml as Qe, columnRangeKinds as $e, columnRangeSummary as et, columnValueSelected as tt, composingKey as nt, controlDiscoveryMetadata as rt, controlReleaseMetadata as it, coverArrived as at, coverFetching as ot, coverFetchingHtml as st, coverReason as ct, coverStateAction as lt, coverUrl as ut, discoveryArtwork as dt, discoveryKey as ft, discoveryScore as pt, entityDisplayName as mt, entityPath as ht, entityWriting as gt, errorMessage as _t, fetchCoverNow as vt, fetchDiscoveries as yt, fetchDiscoveryMetadata as bt, fetchReleaseColumn as xt, fetchReleases as St, fetchWants as Ct, fmtDur as wt, gridLayout as Tt, hasSelectionModifier as Et, invalidateWants as Y, javContentSkeleton as Dt, javLayout as Ot, javSubscriptionPath as kt, jobText as At, joinList as jt, keepPreviousData as Mt, lastSearchNote as Nt, leadingGraphemes as Pt, logoUrl as Ft, metadataInterval as It, onlineCatalogCardsHtml as Lt, onlineCatalogTagPlaceholdersHtml as Rt, onlineCatalogTiersHtml as zt, onlineSorting as Bt, onlineStatus as Vt, outsideTableDateBound as Ht, pageWindow as Ut, pv as Wt, qE as Gt, queryClient as Kt, readColumnFilters as qt, recommendationScore as Jt, relayoutCovers as Yt, releaseColumnSelection as Xt, releaseColumnValues as Zt, releaseColumns as Qt, releaseDateQuery as $t, releaseFilters as en, releaseKey as tn, rememberPageSize as nn, rememberedPageSize as rn, removeWants as an, require_jsx_runtime as on, require_react as sn, resetWants as cn, resourceSourceKey as ln, restoreWants as un, searchNote as dn, selectRange as fn, selectionSummary as pn, serverLabelList as mn, setReleaseColumn as hn, spriteGlyph as gn, storeJavLayout as _n, suppressShiftTextSelection as vn, t as X, takeJavSelection as yn, textLang as bn, tierPlaceholdersHtml as xn, toggleColumnValue as Sn, useAction as Cn, useCatalogView as wn, useDense as Tn, useEntityNames as En, useFilterScope as Dn, useHorizontalScroller as On, useQuery as kn, useQueryClient as An, useRectangleSelection as jn, useTablePreferences as Mn, useViewGlide as Nn, useWorkContextMenu as Pn, wantName as Fn, wantsInterval as In, wireHorizontalScroller as Ln, withinColumnRange as Rn, writeColumnFilters as zn, writeJavQuery as Z } from "./peach-app.js";
import { JavBatchResources as Bn } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
import { ErrorLine as Vn } from "./peach-app.source-view-D-Xir163.js";
// src/react/jav/jav-selection.tsx
var Q = /* @__PURE__ */ He(sn(), 1), $ = on(), Hn = (0, Q.createContext)(null), Un = () => (0, Q.useContext)(Hn);
function Wn(e) {
	let t = Un();
	return jn(e ? t?.selectRectangle : void 0, { selecting: !!t?.mode });
}
function Gn(e) {
	let t = Un()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Kn({ children: e, readOnly: t, receipt: n, dock: r = !0 }) {
	let i = Tn(), [a, o] = (0, Q.useState)(!1), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Map()), [l, d] = (0, Q.useState)([]), [f, p] = (0, Q.useState)(null), m = (0, Q.useRef)(null), h = (0, Q.useRef)(new URLSearchParams(location.search).get("tab") || ""), g = new Set(s.keys()), _ = pn(g, l.map((e) => e.code)), v = (0, Q.useCallback)((e) => {
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
		return window.addEventListener(F, e), () => window.removeEventListener(F, e);
	}, [a, y]), (0, Q.useEffect)(() => {
		yn(location.search) && o(!0);
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
			fn(i, l.map((e) => e.code), n, e.code, t);
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
							let e = await We({ code: r.code });
							e?.created && t.push(e.want.id);
						} catch (t) {
							throw Error(X("catalog:javSelection.wantPartialFailed", {
								count: e.size,
								code: r.code,
								error: _t(t)
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
					t.length && await an(t), await Y();
				};
			},
			receipt: () => X("catalog:javSelection.wantAdded", { count: e.size })
		};
	})(), ee = { receipt: n };
	return /* @__PURE__ */ (0, $.jsxs)(Hn.Provider, {
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
			/* @__PURE__ */ (0, $.jsx)(Bn, {
				items: f,
				close: () => p(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/wants/want-list.tsx
var qn = {
	code: X("catalog:wants.originManual"),
	feed: X("catalog:entityHero.subscribeNewReleases"),
	follow: X("catalog:entityHero.following")
}, Jn = [
	["all", X("catalog:shared.all")],
	["available", X("catalog:wants.hasMagnet")],
	["missing", X("catalog:wants.noMagnet")]
], Yn = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	qn[e.origin]
].filter(Boolean).join(" · ");
function Xn({ want: e }) {
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
function Zn({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: c, picked: l }) {
	let f = Pn(), [p, m] = (0, Q.useState)([]), h = e.link || (!p.length && e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : ""), g = h && URL.canParse(h) ? new URL(h).hostname.replace(/^www\./, "") : "", _ = ln(e.follow_provider || g.split(".")[0] || ""), y = _ === "javdb" ? "JavDB" : _ === "javbus" ? "JavBus" : g, b = h && g && !p.some((e) => e.source === _) ? [{
		source: _,
		label: y,
		url: h
	}, ...p] : p, x = e.code && e.phase === "searching" ? Nt(e) : dn(e), S = b.map((e) => ({
		id: `source:${e.source}`,
		label: e.label,
		icon: Ve,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}));
	(e.phase === "searching" || e.phase === "given_up") && S.push({
		id: "resource",
		label: X("catalog:shared.searchTorrents"),
		icon: Wt,
		run: a
	}), e.phase === "given_up" && S.push({
		id: "reset",
		label: X("catalog:wants.searchAgain"),
		icon: he,
		disabled: t || !!n,
		run: r
	}), l && S.push({
		id: "select",
		label: X(l.on ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: de,
		run: () => l.toggle(!l.on)
	}), S.push({
		id: "remove",
		label: X("catalog:shared.remove"),
		icon: L,
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
		className: Xe({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [
			f.menu,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
				children: [
					l ? /* @__PURE__ */ (0, $.jsx)(v, {
						slot: null,
						className: "mt-1 shrink-0 self-start",
						"aria-label": X("catalog:wants.selectRow", { name: Fn(e) }),
						isSelected: l.on,
						onChange: l.toggle
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(Xn, { want: e }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("p", {
								className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
								children: [/* @__PURE__ */ (0, $.jsx)("b", {
									className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
									children: Fn(e)
								}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 truncate text-body-2-regular text-text-secondary",
									children: e.title
								}) : null]
							}),
							Yn(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: Yn(e)
							}) : null,
							x ? /* @__PURE__ */ (0, $.jsx)("p", {
								"data-want-note": "",
								className: "text-caption-1-regular text-text-secondary",
								children: x
							}) : null,
							e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(Vn, {
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
										trailingIcon: Ve,
										href: e.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ (0, $.jsx)(Ee, {
											source: e.source,
											label: e.label
										})
									}, e.source)),
									e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(u, {
										variant: "secondary",
										size: "small",
										disabled: t,
										...Je(n === `reset:${e.id}`),
										onClick: r,
										children: X("catalog:wants.searchAgain")
									}) : null,
									e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(u, {
										variant: "primary",
										size: "small",
										leadingIcon: Wt,
										onClick: a,
										children: X("catalog:shared.searchTorrents")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(u, {
										variant: "danger",
										size: "small",
										leadingIcon: L,
										disabled: t,
										...Je(n === `remove:${e.id}`),
										onClick: i,
										children: X("catalog:shared.remove")
									})
								]
							})
						]
					})
				]
			}),
			e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(Be, {
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
function Qn({ phase: e, label: t, rows: n, row: r, onRectangle: i, selecting: a }) {
	let [s, c] = (0, Q.useState)(1), [l, d] = (0, Q.useState)(20), [f, p] = (0, Q.useState)("all"), m = Ye(n), h = (e) => e.has_magnets ?? m.get(e.code || "") ?? !1, g = n.filter(h), _ = e !== "searching" || f === "all" ? n : n.filter((e) => h(e) === (f === "available")), v = jn(_.length ? i : void 0, {
		selecting: a,
		start: "[data-want-items]"
	}), y = Ut(_.length, l, s);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(De, {
					name: "want-magnet-filter",
					"aria-label": X("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: f,
					className: Te,
					onChange: (e) => {
						p(e), c(1);
					},
					children: Jn.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: we,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? g.length : n.length - g.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			_.length ? null : /* @__PURE__ */ (0, $.jsx)(re, {
				size: "compact",
				icon: Gt,
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
				children: /* @__PURE__ */ (0, $.jsx)(k, {
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
function $n({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), c = Cn(), l = kn({
		queryKey: ze,
		queryFn: ({ signal: e }) => Ct(e),
		staleTime: 3e4,
		refetchInterval: In
	}), d = () => {
		let n = i.trim();
		n && !e && c.run("add", (e) => We({ code: n }, e), (e) => {
			t(e.created ? X("catalog:wants.added", { name: Fn(e.want) }) : X("catalog:wants.alreadyAdded", { name: Fn(e.want) })), a(""), Y();
		});
	}, f = (e) => {
		e.key === "Enter" && !nt(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		c.run(`remove:${e.id}`, (t) => an([e.id], t), () => {
			t(X("catalog:wants.removed", { name: Fn(e) })), Y();
		});
	}, m = (e) => {
		c.run(`reset:${e.id}`, (t) => cn([e.id], t), () => {
			t(X("catalog:wants.backToSearching", { name: Fn(e) })), Y();
		});
	}, h = l.data, g = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), _ = Un(), v = !!_?.mode, [y, b] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Q.useState)(null);
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
			let { previous: t } = await an(e.map((e) => e.id));
			return await Y(), async () => {
				await un(t), await Y();
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
			let { previous: t } = await cn(e.map((e) => e.id));
			return await Y(), async () => {
				await un(t), await Y();
			};
		},
		receipt: (e) => X("catalog:wants.searchAgainDone", { count: e.length })
	}, k = w.filter((e) => e.code && (e.phase === "searching" || e.phase === "given_up")), A = kn({
		queryKey: D,
		queryFn: ({ signal: e }) => Ge(`${O}?limit=100`, e),
		enabled: g.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), ne = A.data?.providers.filter((e) => e.configured) || [], ie = ne[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": l.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Xe({
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
							children: /* @__PURE__ */ (0, $.jsx)(P, {
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
							...Je(c.busy === "add"),
							onClick: d,
							children: X("catalog:shared.add")
						})]
					}),
					c.error ? /* @__PURE__ */ (0, $.jsx)(z, {
						tone: "error",
						title: X("catalog:wants.actionFailed"),
						children: c.error
					}) : null
				]
			}),
			l.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				title: X("catalog:wants.loadFailed"),
				children: _t(l.error)
			}) : null,
			l.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: Dt("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(Re, {
				embedded: !0,
				kind: Ue("want-scrape"),
				label: X("catalog:wants.fetchingNew")
			}) : null,
			h?.searching ? /* @__PURE__ */ (0, $.jsx)(Re, {
				embedded: !0,
				kind: Ue("want-search"),
				label: X("catalog:wants.searchingResources")
			}) : null,
			A.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				title: X("catalog:wants.downloadSettingsFailed"),
				children: _t(A.error)
			}) : null,
			A.data && !ne.length ? /* @__PURE__ */ (0, $.jsxs)(z, {
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
			A.data && !A.data.available ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "neutral",
				children: X("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !g.length ? /* @__PURE__ */ (0, $.jsx)(re, {
				size: "compact",
				icon: Gt,
				title: X(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: r,
					children: X("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(j, {
					target: `input[aria-label="${X("catalog:shared.code")}"]`,
					children: X("catalog:wants.addWork")
				}) : void 0,
				children: X(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			U.map(([n, r]) => {
				let i = g.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Qn, {
					phase: n,
					label: r,
					rows: i,
					selecting: v,
					onRectangle: _ && !c.busy ? (e, t) => b((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(Zn, {
						want: n,
						readOnly: e,
						busy: c.busy,
						downloads: A.data,
						provider: ie,
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
				provider: ie
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
					disabled: !k.length,
					onClick: () => C(k.map((e) => ({
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
			/* @__PURE__ */ (0, $.jsx)(Bn, {
				items: S,
				close: () => C(null),
				readOnly: e,
				receipt: t
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function er(e) {
	return e.id ? ht("performer", e.name, e.id) : e.source_url || kt(e.name);
}
function tr({ person: e, name: t, title: n, icon: r, onFilter: i }) {
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
		href: er(e ?? { name: t }),
		title: n,
		...a,
		children: s
	}), e?.source_url && (!e.id || i) ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: kt(e.name),
		className: "inline-flex shrink-0 text-text-secondary hover:text-text-primary",
		"aria-label": `${o} · ${t}`,
		title: o,
		children: /* @__PURE__ */ (0, $.jsx)(f, {
			className: "size-4",
			"aria-hidden": !0
		})
	}) : null] });
}
function nr({ people: e, onFilter: t }) {
	if (En(), e.length < 2) return null;
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
			children: (n) => /* @__PURE__ */ (0, $.jsx)(R, {
				"aria-label": X("catalog:shared.performers"),
				className: "py-2 outline-none",
				children: /* @__PURE__ */ (0, $.jsx)(se, { children: /* @__PURE__ */ (0, $.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: e.map((e) => {
						let r = mt("performer", e.name, e.id);
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
									leadingIcon: Ve,
									"aria-label": X("catalog:javDiscovery.openActress", { name: r })
								}) : null,
								/* @__PURE__ */ (0, $.jsx)(d, {
									href: kt(e.name),
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
function rr({ item: e, limit: t = 5 }) {
	En();
	let n = (e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e }))).slice(0, t).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image && !t.has_avatar ? { children: /* @__PURE__ */ (0, $.jsx)(Ne, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: qe(t.name, t, null) } }, a = X("catalog:javDiscovery.openActress", { name: mt("performer", t.name, t.id) });
		return /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: er(t),
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
function ir(e, t) {
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
			icon: Gt,
			disabled: t.readOnly || t.wanting || !!e.wanted || !!e.asset_id,
			run: t.onWant
		},
		{
			id: "resource",
			label: X("catalog:shared.searchTorrents"),
			icon: Wt,
			run: t.onResource
		}
	];
	return e.link && n.push({
		id: "source",
		label: X("catalog:shared.viewOnSite"),
		icon: Ve,
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
function ar(e, t, n, r) {
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
function or({ person: e, count: t, pressed: n, onClick: r }) {
	En();
	let i = mt("performer", e.name, e.id);
	return /* @__PURE__ */ (0, $.jsx)(h, {
		name: i,
		pressed: n,
		onClick: r,
		ringHtml: qe(e.name, e, null),
		title: X("catalog:javReleases.facetCount", {
			name: i,
			count: t
		})
	});
}
function sr({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: Ft(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": !0,
		children: Pt(e.name, 1)
	});
}
function cr({ studio: e, count: t, pressed: n, onClick: r, showCount: i = !0 }) {
	return /* @__PURE__ */ (0, $.jsx)(g, {
		name: e.name,
		logo: e.has_logo ? Ft(e.name, "icon", e.logo_version) : void 0,
		fallback: Pt(e.name, 2),
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
function lr({ name: e, studio: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		"data-list-library": "",
		title: e,
		children: [/* @__PURE__ */ (0, $.jsx)(sr, { studio: t || {
			name: e,
			has_logo: !1
		} }), /* @__PURE__ */ (0, $.jsx)("span", { children: e })]
	});
}
function ur({ studio: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, $.jsx)(w, { studio: e }), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: e.name
		})]
	});
}
// src/react/jav/discovery-card.tsx
var dr = (e) => ({
	...e,
	cover: e.has_cover ? ut(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), fr = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function pr({ item: e, readOnly: t }) {
	let n = Cn(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(ot.subscribe, ot.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: X("catalog:shared.noCover")
	});
	if (a === "fetching" || ot.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: st() } });
	let o = () => {
		n.run("cover", (t) => vt(e.code, t), (t) => {
			t.has_cover ? at(e.code, t) : i(t.message || X("catalog:javDiscovery.noOfficialCover"));
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || ct(e);
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
				children: lt(s)
			})
		]
	});
}
function mr({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a = "", onTag: o, wanting: s, onWant: c, onResource: f, badge: p, onFilterPerson: m, studioFilter: h }) {
	En();
	let g = !!m, _ = Un(), v = e.code ? _ : null, y = Pn(), b = !g && c && f ? ir(e, {
		selection: v,
		readOnly: r,
		wanting: !!s,
		navigate: i,
		onWant: c,
		onResource: f
	}) : null, x = v?.selected.has(e.code), S = !g && !!_?.dense, C = e.performer_refs?.length ? jt(e.performer_refs.map((e) => e.name)) : e.performers, w = e.performer_refs?.[0], ee = w ? mt("performer", w.name, w.id) : C.split(/[,，、;/]/)[0] || "", te = g && e.duration ? wt(e.duration) : "", T = dt(e, t, n), E = e.asset_id ? `/assets/${e.asset_id}` : e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, D = !e.code && !!e.link, O = () => {
		D ? window.open(E, "_blank", "noopener") : i(E);
	};
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-rectangle-key": e.code || void 0,
		"data-selected": x ? "" : void 0,
		onMouseDown: vn,
		onContextMenu: b ? (e) => y.onContextMenu(e, b) : void 0,
		onKeyDown: b ? (e) => y.onKeyDown(e, b) : void 0,
		onClickCapture: (t) => {
			t.target.closest("[data-work-context-menu]") || v && (v.mode || Et(t)) && (t.preventDefault(), t.stopPropagation(), v.toggle(e, t.shiftKey));
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
				className: fr,
				children: [/* @__PURE__ */ (0, $.jsx)(l, {
					artwork: {
						kind: "cover",
						html: T
					},
					identity: dt(e, "small", n),
					relayout: (e) => Yt(e, t)
				}), te ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-duration": "",
					children: te
				}) : null]
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: fr,
				children: /* @__PURE__ */ (0, $.jsx)(pr, {
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
				children: [/* @__PURE__ */ (0, $.jsx)(rr, {
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
									lang: bn(e.title),
									children: e.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(tr, {
									person: w,
									name: ee,
									title: C,
									onFilter: m,
									icon: !0
								}),
								/* @__PURE__ */ (0, $.jsx)(nr, {
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
										children: /* @__PURE__ */ (0, $.jsx)(ur, { studio: e.studio_ref })
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
						leadingIcon: S ? Ve : void 0,
						trailingIcon: S ? void 0 : Ve,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: S ? null : g ? /* @__PURE__ */ (0, $.jsx)(je, {
							site: "dmm",
							label: "DMM"
						}) : X("catalog:shared.viewOnSite")
					}) : null,
					c ? /* @__PURE__ */ (0, $.jsx)(u, {
						variant: "ghost",
						size: S ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...Je(!!s),
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
function hr(e) {
	return e.normalize("NFKC").toLowerCase().replace(/[\s_\-‐‑‒–—―]+/g, "");
}
function gr(e, t) {
	return hr(e).includes(hr(t));
}
function _r({ value: e, onChange: t }) {
	let [n, r] = (0, Q.useState)(e), i = X("catalog:columnFilter.search", { column: X("catalog:shared.code") });
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		className: "flex flex-col gap-3 p-3",
		"data-copy-interact": "",
		onSubmit: (e) => {
			e.preventDefault(), hr(n) && t(n.trim());
		},
		children: [/* @__PURE__ */ (0, $.jsx)(P, {
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
				disabled: !hr(n),
				children: X("follow:shared.search")
			})]
		})]
	});
}
// src/react/jav/jav-release-table.tsx
var vr = {
	widths: xe,
	visibility: be
};
function yr({ column: e, label: t, filters: n, onChange: r }) {
	let i = e === "people" ? "performer" : e === "tags" ? "tag" : "studio", a = hn(n, i, void 0);
	return /* @__PURE__ */ (0, $.jsx)(Fe, {
		id: e,
		label: t,
		values: Xt(n, i),
		load: async (t, n, r) => {
			let i = await xt(a, e, n, r, t);
			return {
				items: i.items.map((t) => {
					let n = e === "people" ? t : null, r = n && gt("performer", n.name, n.id);
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
function br({ items: a, waiting: o, filters: s, studios: c, facets: d, javImage: f, readOnly: m, navigate: h, onTag: g, onFilter: _, onRange: b, onSort: x, wanting: S, onWant: C, onResource: w, selecting: ee = !0, tableTop: te }) {
	let T = Un(), E = Pn(), D = (e) => ir(e, {
		selection: T,
		readOnly: m,
		wanting: S(e),
		navigate: h,
		onWant: () => C(e),
		onResource: () => w(e)
	}), O = Mn("jav-releases", Qt, vr), k = O.columns.filter((e) => e.required || O.visibility[e.id] !== !1), ne = Object.entries(W).find(([, e]) => e === s.sort)?.[0], j = qt(s.column_filters), re = new Map(c.map((e) => [e.name, e])), ie = (e) => (t) => {
		t.preventDefault(), T?.mode || Et(t) ? T?.toggle(e, t.shiftKey) : h(`/works/${encodeURIComponent(e.code)}`);
	}, M = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = dt(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: ie(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(l, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => Yt(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: ct(t) || void 0,
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
							onClick: ie(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: bn(t.title),
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
					/* @__PURE__ */ (0, $.jsx)(rr, { item: t }),
					/* @__PURE__ */ (0, $.jsx)(tr, {
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
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsx)(lr, {
				name: t.studio,
				studio: t.studio_ref || re.get(t.studio)
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": Zt(s, "tag").includes(e),
					onClick: () => g(e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return wt(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					variant: "ghost",
					disabled: m || t.wanted || !!t.asset_id,
					...Je(S(t)),
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
					children: /* @__PURE__ */ (0, $.jsx)(q, {
						preferences: O,
						label: X("catalog:javReleases.list")
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(A, {
				ref: te,
				follow: !0,
				preferences: O,
				rectangleSelecting: !!T?.mode,
				onRectangle: ee && !o && a.length ? T?.selectRectangle : void 0,
				onRowClick: ee && !o && T?.mode ? (e) => {
					let t = a.find((t) => String(t.id) === e);
					t && T.toggle(t);
				} : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)(Pe, {
					"aria-label": X("catalog:javReleases.list"),
					size: "sm",
					sortDescriptor: ne ? {
						column: ne,
						direction: s.dir === "asc" ? "ascending" : "descending"
					} : void 0,
					onSortChange: (e) => {
						let t = W[String(e.column)];
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
						k.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
							id: e.id,
							isRowHeader: e.id === "name",
							allowsSorting: e.id in W,
							...O.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [b && (e.id === "release" || e.id === "dur" || e.id === "score") ? /* @__PURE__ */ (0, $.jsx)(J, {
									id: e.id,
									label: e.label,
									kind: $e[e.id],
									value: j[e.id],
									rangeQuery: e.id === "release" ? $t(s) : void 0,
									onChange: (t) => b(e.id, t)
								}) : d && _ && [
									"people",
									"studio",
									"tags"
								].includes(e.id) ? /* @__PURE__ */ (0, $.jsx)(yr, {
									column: e.id,
									label: e.label,
									filters: s,
									onChange: _
								}) : e.label, e.id in W ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(y, {})
								}) : null]
							}), /* @__PURE__ */ (0, $.jsx)(Ie, {
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
								k.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Qe(e.id) } }) }, e.id)),
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
								k.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: M(t.id, e) }, t.id)),
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
var xr = `<div data-catalog-tier="performers" data-skeleton="tiers">${xn("performer")}</div><div data-catalog-tier="studios">${xn("studio")}</div>`;
function Sr({ value: e }) {
	let t = Jt(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: X("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(b, {
			color: t.color,
			children: t.label
		})
	});
}
var Cr = (e) => vt(e).then((t) => (t.has_cover && at(e, t), t.has_cover));
function wr({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let [o, s] = (0, Q.useState)(() => en(location.search)), c = (0, Q.useSyncExternalStore)(Ke().subscribe, () => rn("jav-releases", 24));
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
		let n = hn(o, e, t);
		s(n), Z({
			[e]: "",
			column_filters: n.column_filters || "",
			page: ""
		});
	}, p = (e, t) => {
		let n = Xt(o, e);
		l(e, n === void 0 ? [t] : Sn(n, t, !tt(n, t)));
	}, h = (e) => {
		s((t) => ({
			...t,
			column_filters: e,
			page: 1
		})), Z({
			column_filters: e,
			page: ""
		});
	}, g = (e, t) => h(zn(qt(o.column_filters), e, t)), v = (e) => {
		s((t) => ({
			...t,
			code: e,
			page: 1
		})), Z({
			code: e,
			page: ""
		});
	}, y = qt(o.column_filters), b = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? Ht : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(Le, {
			label: t,
			kind: $e[e],
			value: y[e],
			rangeQuery: e === "release" ? $t(o) : void 0,
			onChange: (t) => {
				g(e, t), n();
			}
		})
	}), x = (0, Q.useRef)(null), C = (0, Q.useRef)(null), ee = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1, r = t !== o.size;
		r && nn("jav-releases", t), s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			...r && { size: String(t) }
		}), j !== "list" && x.current?.scrollIntoView({ block: "start" });
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
		let e = [...x.current?.querySelectorAll("[data-catalog-tier],[data-filter-row=\"bottom\"]") || []].map((e) => Ln(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let A = Ke();
	(0, Q.useSyncExternalStore)(A.subscribe, A.version, A.version);
	let ne = Ot(), j = wn(), M = Ze(Tt({
		active: !0,
		home: !1,
		portrait: !1
	})), N = kn({
		queryKey: tn(o),
		queryFn: ({ signal: e }) => St(o, e),
		placeholderData: Mt,
		retry: !1,
		refetchOnWindowFocus: !1
	}), se = N.data?.metadata_job, ue = (0, Q.useRef)(!1);
	ue.current = se?.status === "running";
	let de = Kt.getQueryData(T)?.metadata_job, fe = kn({
		queryKey: T,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: se?.status === "running" || de?.status === "running",
		queryFn: ({ signal: e }) => bt(e),
		refetchInterval: It(() => ue.current)
	}), P = fe.data && fe.dataUpdatedAt >= N.dataUpdatedAt ? fe.data.metadata_job : se, F = P?.status === "running", he = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		he.current && !F && N.refetch(), he.current = F;
	}, [F, N]);
	let I = (0, Q.useRef)(""), ge = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.column_filters,
		o.q,
		o.code,
		o.sort,
		o.dir,
		o.seed
	]), _e = !N.isPlaceholderData && (N.data?.metadata_unread || 0) > 0 && !F;
	(0, Q.useEffect)(() => {
		_e && I.current !== ge && (I.current = ge, it("start", o).then(async (e) => {
			await Kt.cancelQueries({ queryKey: T }), Kt.setQueryData(T, e);
		}).catch(() => {}));
	}, [_e, ge]);
	let L = Cn(), R = (e) => {
		L.run(String(e.id), (t) => We({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), Y(), N.refetch();
		});
	}, B = N.data, ve = (B?.facets.tags || []).map((e) => ({
		id: e.name,
		label: e.name,
		count: e.count,
		selected: Zt(o, "tag").includes(e.name)
	}));
	Gn(B?.items || []);
	let V = N.isPending, H = Wn(!V && !N.isPlaceholderData), U = !!(o.performer || o.studio || o.tag || o.column_filters || o.q || o.code), ye = Math.max(1, Math.ceil((B?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!B || N.isPlaceholderData || o.page <= ye || (s((e) => ({
			...e,
			page: ye
		})), Z({ page: ye > 1 ? String(ye) : "" }));
	}, [
		B,
		N.isPlaceholderData,
		o.page,
		ye
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: x,
		"aria-label": X("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": V || N.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			V ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: xr }
			}) : null,
			B && (B.facets.performers.length || B.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [B.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: B.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsx)(or, {
						person: e,
						count: e.count,
						pressed: Zt(o, "performer").includes(e.name),
						onClick: () => p("performer", e.name)
					}, e.name))
				}) : null, B.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: B.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsx)(cr, {
						studio: e,
						count: e.count,
						pressed: Zt(o, "studio").includes(e.name),
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
				busy: V,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [
						/* @__PURE__ */ (0, $.jsx)(_, {}),
						ve.length ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(ce, {
							choices: ve,
							onSelect: (e) => p("tag", e)
						})
					]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: V ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : U ? X("catalog:javReleases.matchedCount", {
							matched: B?.total || 0,
							count: B?.candidate_total || 0
						}) : X("catalog:countLabel.works", { count: B?.total || 0 })
					}),
					U ? /* @__PURE__ */ (0, $.jsx)(ie, {
						onPress: E,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(le, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Ae, {
							onPress: O,
							busy: o.sort === "random" && N.isFetching
						}), j === "cards" ? /* @__PURE__ */ (0, $.jsx)(Oe, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: ne,
							options: pe,
							onChange: _n
						}) : null] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								choices: (B?.facets.performers || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: Zt(o, "performer").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: e })
								})),
								onSelect: (e) => p("performer", e),
								active: Xt(o, "performer") !== void 0,
								onClear: Xt(o, "performer") === void 0 ? void 0 : () => l("performer", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-studios",
								orderKey: "studio",
								label: X("catalog:shared.label"),
								choices: (B?.facets.studios || []).map((e) => ({
									id: e.name,
									label: e.name,
									count: e.count,
									selected: Zt(o, "studio").includes(e.name),
									leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: e })
								})),
								onSelect: (e) => p("studio", e),
								active: Xt(o, "studio") !== void 0,
								onClear: Xt(o, "studio") === void 0 ? void 0 : () => l("studio", void 0)
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-release-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								choices: ve,
								onSelect: (e) => p("tag", e),
								active: Xt(o, "tag") !== void 0,
								onClear: Xt(o, "tag") === void 0 ? void 0 : () => l("tag", void 0)
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(Me, {
							group: "releases",
							sorts: Ce.map(([e, t, n]) => ({
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
									render: (e) => /* @__PURE__ */ (0, $.jsx)(_r, {
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
			j === "cards" && o.column_filters ? /* @__PURE__ */ (0, $.jsx)(m, {
				encoded: o.column_filters,
				columns: [...Qt, {
					id: "taste",
					label: X("catalog:javSort.taste")
				}],
				onChange: h
			}) : null,
			V && j === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: Dt("discover", ne) }
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				title: X("catalog:javReleases.failed"),
				children: _t(N.error)
			}) : null,
			F && P ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(Re, {
					kind: Ue("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: P.completed,
						count: P.total
					}),
					value: P.completed,
					total: P.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(te, {
				scope: X("catalog:javReleases.coverQueueScope"),
				fetchOne: Cr,
				codes: (B?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? X("catalog:javReleases.coversFetched", { count: n }) : X("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), N.refetch();
				}
			}),
			!V && !N.error && !B?.items.length && (j === "cards" || !U) ? /* @__PURE__ */ (0, $.jsx)(re, {
				icon: f,
				title: X(U ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: U ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: E,
					children: X("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(d, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: X("catalog:javReleases.addSubscription")
				}),
				children: X(U ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			L.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				children: L.error
			}) : null,
			j === "list" ? V || B?.items.length || U ? /* @__PURE__ */ (0, $.jsx)(br, {
				items: B?.items || [],
				waiting: V,
				filters: o,
				tableTop: C,
				selecting: !N.isPlaceholderData,
				studios: B?.facets.studios || [],
				javImage: A.value.javImage,
				readOnly: e,
				navigate: i,
				facets: B?.facets,
				onFilter: l,
				onRange: g,
				onTag: (e) => p("tag", e),
				onSort: D,
				wanting: (e) => L.busy === String(e.id),
				onWant: R,
				onResource: (e) => n(dr(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: me,
				style: { "--card-ratio": M },
				...H,
				children: (B?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(mr, {
					item: t,
					layout: ne,
					javImage: A.value.javImage,
					readOnly: e,
					navigate: i,
					tag: Zt(o, "tag"),
					onTag: (e) => p("tag", e),
					wanting: L.busy === String(t.id),
					onWant: () => R(t),
					onResource: () => n(dr(t)),
					badge: o.sort === "taste" || y.taste ? /* @__PURE__ */ (0, $.jsx)(Sr, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			B ? /* @__PURE__ */ (0, $.jsx)(k, {
				label: X("catalog:javTabs.newReleases"),
				total: B.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: ee,
				scrollTarget: j === "list" ? C : void 0,
				stickyHeader: () => x.current?.querySelector("[data-filter-frame]") ?? null,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit"),
				pageSizes: Se
			}) : null
		]
	});
}
// src/react/jav/online-catalog.tsx
var Tr = [];
async function Er(e, t) {
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
function Dr() {
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
var Or = ["release", "dur"], kr = new Intl.Collator(void 0, {
	numeric: !0,
	sensitivity: "base"
});
function Ar(e, { sort: t, dir: n }) {
	if (t === "release" && n === "desc") return e;
	let r = (e) => t === "dur" ? e.duration : t === "code" ? e.code : e.date;
	return [...e].sort((e, t) => {
		let i = r(e), a = r(t);
		if (!i || !a) return Number(!i) - Number(!a);
		let o = typeof i == "number" && typeof a == "number" ? i - a : kr.compare(String(i), String(a));
		return n === "asc" ? o : -o;
	});
}
function jr(e) {
	return e ? e.split(",") : [];
}
function Mr({ filters: e, data: t, people: n, selected: r, go: i, close: a }) {
	let [o, s] = (0, Q.useState)(e.performer), c = (t, n) => {
		i({
			...e,
			performer: t,
			actress: n,
			page: 1
		}), a();
	};
	return /* @__PURE__ */ (0, $.jsxs)(R, {
		"aria-label": X("follow:addJavFeed.actressName"),
		className: "py-3 outline-none",
		children: [/* @__PURE__ */ (0, $.jsxs)("form", {
			className: "flex flex-col gap-3 px-3",
			onSubmit: (t) => {
				t.preventDefault();
				let n = o.trim();
				c(n, n === e.performer ? e.actress : "");
			},
			"data-copy-interact": "",
			children: [
				/* @__PURE__ */ (0, $.jsx)(P, {
					size: "small",
					label: X("follow:addJavFeed.actressName"),
					value: o,
					onChange: s,
					maxLength: 120
				}),
				t && t.performer_options.length > 1 ? /* @__PURE__ */ (0, $.jsx)(G, {
					size: "sm",
					"aria-label": X("catalog:javOnline.performerPage"),
					prefix: X("catalog:javOnline.performerPage"),
					selectedKey: t.selected_actress,
					onSelectionChange: (t) => {
						t !== null && c(e.performer, String(t));
					},
					children: t.performer_options.map((e) => /* @__PURE__ */ (0, $.jsx)(K, {
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
						onClick: () => c("", ""),
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
			}), /* @__PURE__ */ (0, $.jsx)(M, {
				choices: n.map(({ id: e, value: t, count: n }) => ({
					id: e,
					count: n,
					label: mt("performer", t.name, t.id),
					selected: e === r,
					leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
				})),
				onSelect: (e) => {
					let t = n.find((t) => t.id === e)?.value;
					t && c(e === r ? "" : t.name, e === r ? "" : e);
				}
			})]
		}) : null]
	});
}
function Nr({ items: a, waiting: o, javImage: s, filters: c, sorting: u, onSort: d, onFilter: f, onStudio: p, onTag: m }) {
	let h = jr(c.genre), g = Un(), _ = !o && a.some((e) => e.code);
	return /* @__PURE__ */ (0, $.jsx)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "min-w-0",
		children: /* @__PURE__ */ (0, $.jsx)(A, {
			follow: !0,
			onRectangle: _ ? g?.selectRectangle : void 0,
			onRowClick: _ && g?.mode ? (e) => {
				let t = a.find((t) => t.catalogId === e);
				t?.code && g.toggle(t);
			} : void 0,
			children: /* @__PURE__ */ (0, $.jsxs)(Pe, {
				size: "sm",
				"aria-label": X("catalog:javTabs.online"),
				className: "min-w-(--online-table-width) table-fixed",
				style: { "--online-table-width": `${H + (g?.mode ? 44 : 0)}px` },
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
				}) : null, B.map(([e, n, r]) => /* @__PURE__ */ (0, $.jsx)(t, {
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
					children: [g?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null, B.map(([e]) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Qe(e, !0) } }) }, e))]
				}, `skeleton-${t}`)) : a.map((e) => {
					let t = dt(e, "small", s), i = e.performer_refs || [], a = i[0], o = a ? mt("performer", a.name, a.id) : "", u = e.code ? `/works/${encodeURIComponent(e.code)}` : e.link, d = e.code ? {} : {
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
											relayout: (e) => Yt(e, "small")
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
											lang: bn(e.title),
											children: e.title
										})]
									})
								})]
							}) }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: a ? /* @__PURE__ */ (0, $.jsxs)("div", {
								"data-list-people": "",
								children: [/* @__PURE__ */ (0, $.jsx)(rr, {
									item: e,
									limit: 1
								}), /* @__PURE__ */ (0, $.jsxs)("div", {
									className: "flex min-w-0 flex-1 flex-col items-start gap-1",
									children: [/* @__PURE__ */ (0, $.jsx)("div", {
										"data-list-person-line": "",
										className: "flex w-full min-w-0 items-center gap-2",
										children: /* @__PURE__ */ (0, $.jsx)(tr, {
											person: a,
											name: o,
											title: o,
											onFilter: f
										})
									}), /* @__PURE__ */ (0, $.jsx)(nr, {
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
								children: /* @__PURE__ */ (0, $.jsx)(lr, {
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
							/* @__PURE__ */ (0, $.jsx)(r, { children: wt(e.duration) }),
							/* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(_e, {
								href: e.link,
								target: "_blank",
								rel: "noopener noreferrer",
								title: e.link,
								size: "small",
								trailingIcon: Ve,
								children: /* @__PURE__ */ (0, $.jsx)(je, {
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
function Pr({ navigate: e }) {
	En();
	let [t, n] = (0, Q.useState)(Dr), [r, i] = (0, Q.useState)(Bt), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("code") || ""), [c, l] = (0, Q.useState)(() => {
		let { release: e, dur: t } = qt(new URLSearchParams(location.search).get("column_filters") || void 0);
		return {
			release: e,
			dur: t
		};
	}), [d, f] = (0, Q.useState)(Vt), [p, m] = (0, Q.useState)({}), [h, g] = (0, Q.useState)(""), v = Ke();
	(0, Q.useSyncExternalStore)(v.subscribe, v.version, v.version);
	let y = wn(), x = Ot(), S = Ze(Tt({
		active: !0,
		home: !1,
		portrait: !1
	})), te = X("catalog:javTabs.online"), T = X("catalog:shared.performers"), E = X("catalog:shared.label"), D = X("catalog:shared.tags"), O = X("catalog:catalogList.releaseDate"), k = An(), A = kn({
		queryKey: ["jav-catalog", t],
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 3e5,
		placeholderData: Mt,
		queryFn: async ({ signal: e }) => Er(await Ge(`/api/jav/catalog?${new URLSearchParams({
			...t,
			page: String(t.page)
		})}`, e), e)
	}), j = A.isPending || A.isPlaceholderData, ie = A.isPending;
	(0, Q.useEffect)(() => {
		let e = A.data;
		if (j || !e || e.page === t.page) return;
		let r = {
			...t,
			page: e.page
		};
		k.setQueryData(["jav-catalog", r], e), n(r), Z({ page: e.page > 1 ? String(e.page) : "" });
	}, [
		t,
		A.data,
		k,
		j
	]);
	let M = (e, t = {}) => {
		n(e), Z({
			...e,
			...t,
			page: e.page > 1 ? String(e.page) : ""
		});
	}, N = (e, t) => {
		i({
			sort: e,
			dir: t
		}), Z({
			sort: e === "release" ? "" : e,
			dir: t === "asc" ? "asc" : ""
		});
	}, se = On(), ue = On(), de = On(), fe = (0, Q.useRef)(null), P = (0, Q.useRef)(null), F = Dn(d), he = (e) => {
		f(e), Z({ status: e === "all" ? "" : e });
	}, I = !!(t.performer || t.actress), ge = I ? "online-performer" : t.maker ? "online-studio" : t.genre ? "online-tags" : "", _e = h || ge, L = Nn(P, fe, "[data-glide-anchor]", _e), R = (e) => ({
		anchor: _e === e,
		onPointerEnter: L.hover,
		onOpenChange: (t) => g((n) => t ? e : n === e ? "" : n)
	}), B = t.actress || (j ? "" : A.data?.selected_actress || ""), H = A.data?.items ?? Tr, U = jr(t.genre), be = ar(H, (e) => e.people, (e) => e.dmm_id, [B]), xe = ar(H, (e) => e.studio ? [e.studio] : [], (e) => e.id, [t.maker]), Se = ar(H, (e) => e.tags, (e) => e.id, U), Ce = Se.map(({ id: e, value: t, count: n }) => ({
		id: e,
		label: t.source_name,
		searchTerms: [t.name],
		count: n,
		selected: U.includes(e)
	})), W = be.find((e) => e.id === B)?.value, we = W ? mt("performer", W.name, W.id) : A.data?.performer_options.find((e) => e.id === B)?.name || t.performer || B, Te = xe.find((e) => e.id === t.maker)?.value.name || p[`studio:${t.maker}`] || t.maker, Ee = (e) => Se.find((t) => t.id === e)?.value.source_name || p[`tag:${e}`] || e, De = (e) => {
		let n = e.dmm_id === B;
		M({
			...t,
			performer: n ? "" : e.name,
			actress: n ? "" : e.dmm_id || "",
			page: 1
		});
	}, G = (e) => {
		let n = xe.find((t) => t.id === e)?.value;
		n && m((t) => ({
			...t,
			[`studio:${e}`]: n.name
		})), M({
			...t,
			maker: e === t.maker ? "" : e,
			page: 1
		});
	}, K = (e) => {
		let n = U.includes(e);
		e && !n && m((t) => ({
			...t,
			[`tag:${e}`]: Ee(e)
		}));
		let r = e ? n ? U.filter((t) => t !== e) : [...U, e] : [];
		M({
			...t,
			genre: r.join(","),
			page: 1
		});
	}, ke = t.date ? { range: {
		min: t.date,
		max: t.date
	} } : c.release, Ae = (e, t) => {
		l(e);
		let n = { column_filters: zn({ release: e.release }, "dur", e.dur) };
		t ? M(t, n) : Z(n);
	}, je = (e, n) => {
		let r = e === "release" && n?.range.min === n?.range.max ? String(n?.range.min || "") : "";
		Ae({
			...c,
			[e]: r ? void 0 : n
		}, e === "release" && r !== t.date ? {
			...t,
			date: r,
			page: 1
		} : void 0);
	}, Ne = (e) => {
		s(e), Z({ code: e });
	}, Pe = (e) => {
		e === "performer" ? M({
			...t,
			performer: "",
			actress: "",
			page: 1
		}) : e === "maker" ? M({
			...t,
			maker: "",
			page: 1
		}) : e === "release" || e === "dur" ? je(e, void 0) : e === "code" && Ne("");
	}, q = [];
	I && q.push({
		kind: "clear",
		key: "performer",
		label: `${T} ${we}`
	}), t.maker && q.push({
		kind: "clear",
		key: "maker",
		label: `${E} ${Te}`
	});
	for (let e of Or) {
		let t = e === "release" ? ke : c.dur;
		t && q.push({
			kind: "clear",
			key: e,
			label: `${e === "release" ? O : X("catalog:catalogList.duration")} ${et($e[e], t.range)}`
		});
	}
	o && q.push({
		kind: "clear",
		key: "code",
		label: `${X("catalog:shared.code")} ${o}`
	});
	for (let e of U) q.push({
		kind: "untag",
		key: e,
		label: Ee(e)
	});
	let Fe = d !== "all" || !!(o || c.dur || !t.date && c.release), J = (0, Q.useMemo)(() => j ? [] : Ar(Fe ? H.filter((e) => (d === "all" || e.pre_order === (d === "preOrder")) && (!o || gr(e.code, o)) && (t.date || !c.release || Rn("date", c.release.range, e.date)) && (!c.dur || Rn("duration", c.dur.range, e.duration))) : H, r).map((e, t) => ({
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
		Fe,
		H,
		d,
		o,
		t.date,
		c.release,
		c.dur,
		r
	]), Ie = (0, Q.useMemo)(() => J.filter((e) => e.code), [J]);
	Gn(Ie);
	let Re = Wn(!j && Ie.length > 0), ze = r.sort !== "release" || r.dir === "asc";
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": te,
		"aria-busy": j,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			ie ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: zt() }
			}) : be.length || xe.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				className: "-mx-4 -mb-4",
				children: [be.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: se,
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: be.map(({ id: e, value: t, count: n }) => /* @__PURE__ */ (0, $.jsx)(or, {
						person: t,
						count: n,
						pressed: e === B,
						onClick: () => De(t)
					}, e))
				}) : null, xe.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					ref: ue,
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: xe.map(({ id: e, value: n, count: r }) => /* @__PURE__ */ (0, $.jsx)(cr, {
						studio: n,
						count: r,
						pressed: e === t.maker,
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
				busy: j,
				panes: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [F.pane, /* @__PURE__ */ (0, $.jsx)("span", {
					ref: P,
					"data-view-glide": "",
					"aria-hidden": "true"
				})] }),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					ref: de,
					"data-catalog-scroll": "",
					children: [F.choices(X("catalog:javOnline.pageStatus"), V.map(([e, t]) => ({
						key: e,
						label: X(t),
						attrs: { "data-online-status": e }
					})), he), ie ? /* @__PURE__ */ (0, $.jsx)("div", {
						"data-filter-tag-strip": "",
						"data-loading": "",
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: Rt() }
					}) : /* @__PURE__ */ (0, $.jsx)(ce, {
						choices: Ce,
						onSelect: K
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
							}) : A.data && (A.data.coverOmitted || Fe) ? X("catalog:javOnline.coveredCount", {
								shown: J.length,
								total: A.data.total
							}) : X("catalog:countLabel.works", { count: A.data?.total || 0 })
						}),
						ze ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.localSort")
						}) : null,
						Fe ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "whitespace-nowrap text-caption-1-regular text-text-secondary",
							children: X("catalog:javOnline.pageFilters")
						}) : null
					]
				}), /* @__PURE__ */ (0, $.jsx)(le, {
					tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y === "cards" ? /* @__PURE__ */ (0, $.jsx)(Oe, {
						label: X("catalog:entityFilter.javCardLayout"),
						value: x,
						options: pe,
						onChange: _n
					}) : null, /* @__PURE__ */ (0, $.jsx)(_, {})] }),
					fieldGroup: {
						ref: fe,
						role: "group",
						"aria-label": X("catalog:javDiscover.filtersLabel"),
						onPointerLeave: L.leave
					},
					fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
						/* @__PURE__ */ (0, $.jsx)(C, {
							id: "online-performer",
							orderKey: "performer",
							view: R("online-performer"),
							label: T,
							active: I,
							children: (e) => /* @__PURE__ */ (0, $.jsx)(Mr, {
								filters: t,
								data: A.data,
								people: be,
								selected: B,
								go: M,
								close: e
							})
						}),
						/* @__PURE__ */ (0, $.jsx)(ae, {
							id: "online-studio",
							orderKey: "studio",
							view: R("online-studio"),
							label: E,
							active: !!t.maker,
							hint: X("catalog:javOnline.facetScope"),
							onSelect: G,
							onClear: t.maker ? () => G("") : void 0,
							choices: xe.map(({ id: e, value: n, count: r }) => ({
								id: e,
								label: n.name,
								searchTerms: [n.source_name],
								count: r,
								selected: e === t.maker,
								leading: /* @__PURE__ */ (0, $.jsx)(w, { studio: n })
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)(ae, {
							id: "online-tags",
							orderKey: "tags",
							view: R("online-tags"),
							label: D,
							active: !!t.genre,
							hint: X("catalog:javOnline.facetScope"),
							onSelect: K,
							onClear: U.length ? () => K("") : void 0,
							choices: Ce
						})
					] }),
					sorts: /* @__PURE__ */ (0, $.jsx)(Me, {
						group: "javOnline",
						sorts: ve.map(([e, t]) => ({
							key: e,
							label: X(t),
							ariaLabel: X(t),
							pressed: r.sort === e,
							dir: r.dir
						})),
						onSort: (e, t) => N(e, t),
						filters: {
							release: {
								active: !!ke,
								required: !0,
								shouldCloseOnInteractOutside: Ht,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Le, {
									label: O,
									kind: "date",
									value: ke,
									rangeValues: H.map((e) => e.date),
									onChange: (t) => {
										je("release", t), e();
									}
								})
							},
							dur: {
								active: !!c.dur,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(Le, {
									label: X("catalog:catalogList.duration"),
									kind: "duration",
									value: c.dur,
									onChange: (t) => {
										je("dur", t), e();
									}
								})
							},
							code: {
								active: !!o,
								render: (e) => /* @__PURE__ */ (0, $.jsx)(_r, {
									value: o,
									onChange: (t) => {
										Ne(t), e();
									}
								})
							}
						}
					})
				})] })
			}),
			q.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				items: q,
				hidden: !1,
				actions: {
					toggleTag: K,
					clearFilter: Pe,
					clearAll: () => {
						s(""), l({
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
			A.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				title: X("catalog:javOnline.failed"),
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: _t(A.error)
			}) : null,
			A.data?.coverUnverified && !j ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					onClick: () => void A.refetch(),
					children: X("catalog:shared.retryNow")
				}),
				children: X("catalog:javOnline.coverUnverified")
			}) : null,
			A.data && !j && !J.length && !A.error && !A.data.coverUnverified ? /* @__PURE__ */ (0, $.jsx)(re, {
				icon: ne,
				title: X(H.length ? "catalog:javOnline.noPageMatches" : A.data.total ? "catalog:javOnline.noCoveredWorks" : "catalog:javOnline.noMatches"),
				actions: H.length ? /* @__PURE__ */ (0, $.jsx)(u, {
					size: "small",
					onClick: () => {
						f("all"), s(""), l({
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
			y === "list" && (j || J.length > 0) ? /* @__PURE__ */ (0, $.jsx)(Nr, {
				items: J,
				waiting: j,
				javImage: v.value.javImage,
				filters: t,
				sorting: r,
				onSort: (e) => N(e, e === r.sort && r.dir === "desc" ? "asc" : "desc"),
				onFilter: De,
				onStudio: G,
				onTag: K
			}) : null,
			y === "cards" && j ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "contents",
				dangerouslySetInnerHTML: { __html: Lt(S) }
			}) : null,
			y === "cards" && J.length > 0 ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: me,
				style: { "--card-ratio": S },
				...Re,
				children: J.map((n) => /* @__PURE__ */ (0, $.jsx)(mr, {
					item: n,
					layout: x,
					javImage: v.value.javImage,
					readOnly: !0,
					navigate: e,
					onFilterPerson: De,
					tag: U.map(Ee),
					onTag: (e) => {
						let t = n.tagOptions.find((t) => t.source_name === e);
						(!e || t) && K(t?.id || "");
					},
					studioFilter: n.studioOption ? {
						selected: t.maker === n.studioOption.id,
						onPress: () => G(n.studioOption.id)
					} : void 0,
					badge: n.preOrder ? /* @__PURE__ */ (0, $.jsx)(b, {
						variant: "caption",
						color: "neutral",
						children: X("catalog:javOnline.preOrder")
					}) : void 0
				}, n.catalogId))
			}) : null,
			A.data && !j && A.data.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-end gap-x-4 gap-y-2",
				children: [A.data.total > A.data.pages * A.data.size ? /* @__PURE__ */ (0, $.jsx)("span", {
					"data-copy-key": "jav.online.pageLimit",
					className: "text-caption-1-regular text-text-secondary",
					children: X("catalog:javOnline.pageLimit", { count: A.data.pages })
				}) : null, /* @__PURE__ */ (0, $.jsx)(ye, {
					label: te,
					page: A.data.page,
					pages: A.data.pages,
					onPage: (e) => M({
						...t,
						page: e
					})
				})]
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var Fr = gn("x"), Ir = gn("refresh-cw"), Lr = {
	releases: X("catalog:javSearch.filterReleases"),
	discover: X("catalog:javSearch.filterRecommended"),
	wants: X("catalog:javSearch.filterWants")
};
function Rr({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsx)(Kn, {
		readOnly: t,
		receipt: r,
		dock: e !== "wants",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(I, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: e === "online" ? void 0 : /* @__PURE__ */ (0, $.jsx)(fe, {
						label: Lr[e] || X("catalog:javDiscover.filter"),
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ (0, $.jsx)(wr, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(Vr, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "online" ? /* @__PURE__ */ (0, $.jsx)(Pr, { navigate: n }) : /* @__PURE__ */ (0, $.jsx)($n, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ (0, $.jsx)(x, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
var zr = {
	release: "release_date",
	dur: "duration",
	score: "source_score",
	taste: "taste_score"
};
function Br(e) {
	return e.performer_refs?.length ? e.performer_refs.map((t) => ({
		...t,
		avatar_code: e.code
	})) : e.performers.split(/[,，、;/]/).map((e) => ({ name: e.trim() })).filter((e) => e.name);
}
function Vr({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, c] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [l, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => o.get("performer") || ""), [h, g] = (0, Q.useState)(() => o.get("code") || ""), [_, v] = (0, Q.useState)(() => o.get("studio") || ""), [y, x] = (0, Q.useState)(() => qt(o.get("column_filters") || void 0)), [C, ee] = (0, Q.useState)(() => E.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [te, D] = (0, Q.useState)(() => o.get("dir") === "asc"), O = (e = {}) => {
		f(""), m(""), v(""), g(""), x({}), Z({
			tag: "",
			performer: "",
			studio: "",
			code: "",
			column_filters: "",
			...e
		});
	}, k = (e) => {
		e !== s && (c(e), O({ scope: e === "external" ? "" : e }));
	}, A = (e) => {
		f(e), Z({ tag: e });
	}, j = (e) => {
		m(e), Z({ performer: e });
	}, M = (e) => {
		v(e), Z({ studio: e });
	}, se = (e) => {
		g(e), Z({ code: e });
	}, ue = (e, t) => {
		let n = zn(y, e, t);
		x(qt(n)), Z({ column_filters: n });
	}, de = (e, t) => {
		ee(e), D(t === "asc"), Z({
			sort: e === "taste" ? "" : e,
			dir: t === "asc" ? t : ""
		});
	}, fe = (0, Q.useRef)(null), P = (0, Q.useRef)(null), F = Nn(fe, P, "[aria-pressed=\"true\"]", s), he = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...he.current?.querySelectorAll("[data-catalog-scroll],[data-filter-row=\"bottom\"]") || []].map((e) => Ln(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let I = Ke();
	(0, Q.useSyncExternalStore)(I.subscribe, I.version, I.version);
	let _e = Ot(), L = Ze(Tt({
		active: !0,
		home: !1,
		portrait: !1
	})), R = te ? "asc" : "desc", B = kn({
		queryKey: ft(s, C, R),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => yt(s, e, {
			sort: C,
			direction: R
		})
	}), ve = B.data?.metadata_job, V = (0, Q.useRef)(!1);
	V.current = ve?.status === "running";
	let H = kn({
		queryKey: T,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => bt(e),
		refetchInterval: It(() => V.current)
	}), U = H.data && H.dataUpdatedAt >= B.dataUpdatedAt ? H.data.metadata_job : ve, ye = (e) => e ? `${e.job_id}:${e.status}` : "", be = (0, Q.useRef)(""), xe = (0, Q.useRef)(""), Se = H.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = ye(Se), t = xe.current.endsWith(":running") && Se && Se.status !== "running";
		xe.current = e, t && e !== be.current && B.refetch();
	}, [ye(Se)]);
	let Ce = Cn(), W = Cn(), we = async (e, t) => {
		let n = await rt(e, {
			sort: C,
			direction: R,
			jobId: U?.job_id
		}, t);
		e !== "start" && await B.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await Kt.cancelQueries({ queryKey: T }), be.current = ye(n.metadata_job), Kt.setQueryData(T, n);
	}, Te = (e) => {
		W.run(e, (t) => we(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, Ee = (0, Q.useRef)(!1), De = s === "external" && U?.status !== "running" && (B.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		De && !Ee.current && (Ee.current = !0, we("start").catch(() => {}));
	}, [De]);
	let G = B.data?.items || [], K = ar(G, (e) => e.tags || [], (e) => e, [l]).map(({ id: e, count: t }) => ({
		id: e,
		label: e,
		count: t,
		selected: l === e
	})), ke = ar(G, Br, (e) => e.name, [p]), Ae = ar(G, (e) => e.studio_ref ? [e.studio_ref] : e.studio ? [{
		name: e.studio,
		has_logo: !1
	}] : [], (e) => e.name, [_]), je = (e) => A(l === e ? "" : e), Ne = !!(r || l || p || _ || h || y.release || y.dur || y.score || y.taste), Pe = () => {
		O(), r && a();
	}, q = G.filter((e) => (!l || e.tags?.includes(l)) && (!h || gr(e.code, h)) && (!p || Br(e).some((e) => e.name === p)) && (!_ || (e.studio_ref?.name || e.studio) === _) && Object.keys(zr).every((t) => {
		let n = y[t], r = t === "taste" ? e.taste_score ?? e.score : e[zr[t]];
		return !n || Rn($e[t], n.range, r);
	}) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), Fe = (e, t) => ({
		active: !!y[e],
		shouldCloseOnInteractOutside: e === "release" ? Ht : void 0,
		render: (n) => /* @__PURE__ */ (0, $.jsx)(Le, {
			label: t,
			kind: $e[e],
			value: y[e],
			rangeValues: e === "release" ? G.map((e) => e.release_date) : void 0,
			onChange: (t) => {
				ue(e, t), n();
			}
		})
	}), J = B.isPending;
	Gn(q);
	let Ie = Wn(!J);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: he,
		"aria-label": X("catalog:shared.recommendedForYou"),
		"aria-busy": J,
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
				busy: J,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				panes: /* @__PURE__ */ (0, $.jsx)("span", {
					ref: fe,
					"data-view-glide": "",
					"aria-hidden": "true"
				}),
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: P,
						role: "group",
						"aria-label": X("catalog:javDiscover.scopeLabel"),
						"data-catalog-views": "",
						onPointerLeave: F.leave,
						children: [[["external", X("catalog:javDiscover.external")], ["library", X("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
							type: "button",
							"data-catalog-view": e,
							"data-entity-press": "",
							"aria-pressed": s === e,
							onPointerEnter: F.hover,
							onClick: () => k(e),
							children: t
						}, e)), K.length ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(ce, {
						choices: K,
						onSelect: je
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: J ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : X("catalog:countLabel.works", { count: q.length })
					}),
					/* @__PURE__ */ (0, $.jsx)(ge, { currentHref: () => location.pathname + location.search }),
					Ne ? /* @__PURE__ */ (0, $.jsx)(ie, {
						onPress: Pe,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(le, {
						tools: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [s === "external" ? /* @__PURE__ */ (0, $.jsx)(N, {
							"data-entity-batch": "",
							"data-jav-metadata-update": "",
							label: U?.status === "running" ? X("catalog:javDiscover.stopUpdating") : X("catalog:javDiscover.updateMetadata"),
							disabled: J,
							"data-skeleton-action": J ? "" : void 0,
							busy: !!W.busy,
							icon: U?.status === "running" ? Fr : Ir,
							onPress: () => Te(U?.status === "running" ? "stop" : "update")
						}) : null, /* @__PURE__ */ (0, $.jsx)(Oe, {
							label: X("catalog:entityFilter.javCardLayout"),
							value: _e,
							options: pe,
							onChange: _n
						})] }),
						fields: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-discover-performers",
								orderKey: "performer",
								label: X("catalog:shared.performers"),
								active: !!p,
								choices: ke.map(({ id: e, value: t, count: n }) => ({
									id: e,
									count: n,
									label: mt("performer", t.name, t.id),
									searchTerms: [t.name],
									selected: p === e,
									leading: /* @__PURE__ */ (0, $.jsx)(S, { person: t })
								})),
								onSelect: (e) => j(p === e ? "" : e),
								onClear: p ? () => j("") : void 0
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
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
								onSelect: (e) => M(_ === e ? "" : e),
								onClear: _ ? () => M("") : void 0
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								id: "jav-discover-tags",
								orderKey: "tags",
								label: X("catalog:shared.tags"),
								active: !!l,
								choices: K,
								onSelect: je,
								onClear: l ? () => A("") : void 0
							})
						] }),
						sorts: /* @__PURE__ */ (0, $.jsx)(Me, {
							group: "discover",
							sorts: E.map(([e, t, n]) => ({
								key: e,
								label: t,
								ariaLabel: n,
								pressed: e === C,
								dir: R
							})),
							onSort: (e, t) => de(e, t),
							filters: {
								release_date: Fe("release", X("catalog:catalogList.releaseDate")),
								duration: Fe("dur", X("catalog:catalogList.duration")),
								source_score: Fe("score", X("catalog:javSort.siteRating")),
								taste: Fe("taste", X("catalog:javSort.taste")),
								code: {
									active: !!h,
									render: (e) => /* @__PURE__ */ (0, $.jsx)(_r, {
										value: h,
										onChange: (t) => {
											se(t), e();
										}
									})
								}
							}
						})
					})
				] })
			}),
			J ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: Dt("discover", _e) }
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				title: X("catalog:javDiscover.failed"),
				children: _t(B.error)
			}) : null,
			s === "external" && U?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(Re, {
					kind: Ue("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: U.completed,
						count: U.total
					}),
					value: U.completed,
					total: U.total
				})
			}) : null,
			U && U.status !== "running" && (U.status !== "complete" || U.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "secondary",
					...Je(W.busy === "retry"),
					"aria-label": X("catalog:javMetadata.retry"),
					onClick: () => Te("retry"),
					children: X("catalog:shared.retryNow")
				}),
				children: At(U) || X("catalog:javMetadata.progress", {
					completed: U.completed,
					count: U.total
				})
			}) : null,
			W.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				children: W.error
			}) : null,
			!J && !B.error && !q.length ? /* @__PURE__ */ (0, $.jsx)(re, {
				icon: ne,
				title: X(Ne ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(d, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: X("catalog:javDiscover.viewTaste")
				}), Ne ? /* @__PURE__ */ (0, $.jsx)(u, {
					variant: "primary",
					size: "small",
					onClick: Pe,
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
				children: X(Ne ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			Ce.error ? /* @__PURE__ */ (0, $.jsx)(z, {
				tone: "error",
				children: Ce.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: me,
				style: { "--card-ratio": L },
				...Ie,
				children: q.map((r) => {
					let a = Jt(r.taste_score ?? r.score), o = [
						a.label,
						X("catalog:javScore.taste", { score: pt(r.taste_score ?? r.score) }),
						B.data?.ranking_method === "mmr" && r.ranking_score != null ? X("catalog:javScore.ranking", { score: pt(r.ranking_score) }) : "",
						r.source_score == null ? "" : X("catalog:javScore.siteRating", { rating: r.source_score.toFixed(1) }),
						...mn(r.reasons, r.reason_codes, r.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(mr, {
						item: r,
						layout: _e,
						javImage: I.value.javImage,
						readOnly: e,
						navigate: i,
						tag: l,
						onTag: A,
						wanting: Ce.busy === String(r.id),
						onWant: () => {
							Ce.run(String(r.id), (e) => We({ code: r.code }, e), () => {
								t(X("catalog:javWant.added")), Y(), B.refetch();
							});
						},
						onResource: () => n(dr(r)),
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
export { Rr as JavPage };

//# debugId=1acd89b5-bd9b-4aaa-b740-b0db011064ab