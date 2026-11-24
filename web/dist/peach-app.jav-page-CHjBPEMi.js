(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "30a1151e-432c-49c7-9b84-12bdd93d01f7", e._sentryDebugIdIdentifier = "sentry-dbid-30a1151e-432c-49c7-9b84-12bdd93d01f7");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, ActivityMotion as o, ArtSlot as s, Button as c, ButtonLink as l, Bx as u, COVER_STATE_TITLE as d, CatalogColumnFilterChips as f, CatalogViewToggle as p, Checkbox as m, ChevronSortDown as h, Chip as g, CloudDownloadDialog as _, ColumnFilterAvatar as v, CoverQueue as y, DISCOVERY_METADATA_KEY as b, DISCOVERY_SORTS as x, DOWNLOADS_KEY as S, DOWNLOADS_URL as C, DataTableFooter as w, DataTableFrame as T, E3 as E, EmptyFocusButton as D, EmptyState as O, FilterActionButton as k, FilterGlassRows as A, FilterIconButton as j, FilterPill as M, Gg as ee, H7 as N, IndexSearch as P, Input as F, JAV_LAYOUTS as te, JAV_RECOMMENDATION_GRID as ne, JAV_SELECTION_EVENT as re, JZ as I, JavHeader as L, LibraryShortcuts as R, M6 as z, Note as B, PHASES as ie, RELEASE_COLUMN_VISIBILITY_KEY as V, RELEASE_COLUMN_WIDTHS_KEY as H, RELEASE_PAGE_SIZES as ae, RELEASE_SORTS as oe, RELEASE_SORT_COLUMNS as U, SEGMENT as se, SEGMENTED_TRACK as W, ScrapeSourceLabel as G, SegmentedRadioGroup as ce, Segments as le, SelectionDock as K, Shuffle as ue, SortKeys as de, SourceAvatar as q, Table as fe, TableColumnControls as pe, TableColumnFilter as me, TableColumnRange as he, TableColumnResizer as ge, TaskProgress as _e, WANTS_KEY as ve, WantMagnets as ye, Wt as be, __toESM as xe, activityKind as Se, addWant as Ce, apiGet as we, appSettingsStore as Te, avatarInner as Ee, busyProps as J, cachedMagnetStates as De, cardClass as Oe, cardRatio as ke, catalogListSkeletonCellHtml as Ae, columnRangeKinds as je, columnValueSelected as Me, composingKey as Ne, controlDiscoveryMetadata as Pe, controlReleaseMetadata as Fe, coverArrived as Ie, coverFetching as Le, coverFetchingHtml as Re, coverReason as ze, coverStateAction as Be, coverUrl as Ve, discoveryArtwork as He, discoveryKey as Ue, discoveryScore as We, entityDisplayName as Ge, entityFaceImg as Ke, entityPath as qe, entityWriting as Je, errorMessage as Ye, esc as Xe, facePos as Ze, fetchCoverNow as Qe, fetchDiscoveries as $e, fetchDiscoveryMetadata as et, fetchReleaseColumn as tt, fetchReleases as nt, fetchWants as rt, firstGrapheme as it, fmtDur as at, gridLayout as ot, hasSelectionModifier as st, invalidateWants as Y, javContentSkeleton as ct, javLayout as lt, javTagSkeleton as ut, jobText as dt, joinList as ft, keepPreviousData as pt, lastSearchNote as mt, leadingGraphemes as ht, logoUrl as gt, metadataInterval as _t, pageWindow as vt, pv as yt, qE as bt, queryClient as xt, readColumnFilters as St, recommendationScore as Ct, relayoutCovers as wt, releaseColumnSelection as Tt, releaseColumnValues as Et, releaseColumns as Dt, releaseDateQuery as Ot, releaseFilters as kt, releaseKey as At, removeWants as jt, require_jsx_runtime as Mt, require_react as Nt, resetWants as Pt, resourceSourceKey as Ft, restoreWants as It, searchNote as Lt, selectRange as Rt, selectionSummary as zt, serverLabelList as Bt, setReleaseColumn as Vt, spriteGlyph as Ht, storeJavLayout as Ut, suppressShiftTextSelection as Wt, t as X, takeJavSelection as Gt, textLang as Kt, tierPlaceholdersHtml as qt, toggleColumnValue as Jt, useAction as Yt, useCatalogView as Xt, useDense as Zt, useEntityNames as Qt, useQuery as $t, useRectangleSelection as en, useTablePreferences as tn, useWorkContextMenu as nn, wantName as rn, wantsInterval as an, wireHorizontalScroller as on, writeColumnFilters as sn, writeJavQuery as Z } from "./peach-app.js";
import { JavBatchResources as cn } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
import { ErrorLine as ln } from "./peach-app.source-view-CDbKpFus.js";
// src/react/jav/jav-selection.tsx
var Q = /* @__PURE__ */ xe(Nt(), 1), $ = Mt(), un = (0, Q.createContext)(null), dn = () => (0, Q.useContext)(un);
function fn(e) {
	let t = dn();
	return en(e ? t?.selectRectangle : void 0, { selecting: !!t?.mode });
}
function pn(e) {
	let t = dn()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function mn({ children: e, readOnly: t, receipt: n, dock: r = !0 }) {
	let i = Zt(), [a, o] = (0, Q.useState)(!1), [s, l] = (0, Q.useState)(/* @__PURE__ */ new Map()), [u, d] = (0, Q.useState)([]), [f, p] = (0, Q.useState)(null), m = (0, Q.useRef)(null), h = (0, Q.useRef)(new URLSearchParams(location.search).get("tab") || ""), g = new Set(s.keys()), _ = zt(g, u.map((e) => e.code)), v = (0, Q.useCallback)((e) => {
		d((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), l((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), y = (0, Q.useCallback)(() => {
		o(!1), l(/* @__PURE__ */ new Map()), m.current = null;
	}, []), b = () => l((e) => {
		let t = new Map(e);
		return u.forEach((e) => _.all ? t.delete(e.code) : t.set(e.code, e)), t;
	}), x = (e, t) => {
		let n = new Set(e);
		m.current = e.at(-1) ?? null, l((e) => new Map([...t ? e : [], ...u.filter((e) => n.has(e.code)).map((e) => [e.code, e])]));
	};
	(0, Q.useEffect)(() => {
		let e = (e) => {
			let t = e instanceof CustomEvent ? e.detail : void 0;
			t && t.tab !== h.current || (e.preventDefault(), a && !t?.enter ? y() : o(!0));
		};
		return window.addEventListener(re, e), () => window.removeEventListener(re, e);
	}, [a, y]), (0, Q.useEffect)(() => {
		Gt(location.search) && o(!0);
	}, []), (0, Q.useEffect)(() => (a || (l(/* @__PURE__ */ new Map()), m.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(a)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [a]), (0, Q.useEffect)(() => {
		if (!a) return;
		let e = (e) => {
			e.target.closest("input,textarea,[contenteditable]:not([contenteditable=\"false\"]),dialog,[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), l((e) => new Map([...e, ...u.map((e) => [e.code, e])]))));
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
		m.current = e.code, l((r) => {
			let i = new Set(r.keys());
			Rt(i, u.map((e) => e.code), n, e.code, t);
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
							let e = await Ce({ code: r.code });
							e?.created && t.push(e.want.id);
						} catch (t) {
							throw Error(X("catalog:javSelection.wantPartialFailed", {
								count: e.size,
								code: r.code,
								error: Ye(t)
							}));
						}
						e.add(r.code), l((e) => {
							let t = new Map(e);
							return t.delete(r.code), t;
						});
					}
				} finally {
					Y();
				}
				return async () => {
					t.length && await jt(t), await Y();
				};
			},
			receipt: () => X("catalog:javSelection.wantAdded", { count: e.size })
		};
	})(), T = { receipt: n };
	return /* @__PURE__ */ (0, $.jsxs)(un.Provider, {
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
			/* @__PURE__ */ (0, $.jsxs)(K, {
				visible: r && a,
				count: X("catalog:javSelection.selectedCount", { count: s.size }),
				label: X("catalog:javSelection.dockLabel"),
				actions: [{
					action: w,
					items: C,
					host: T,
					disabled: t
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					disabled: !u.length,
					onClick: b,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `jav.selection.page.${_.all ? "clear" : "all"}`,
						children: _.all ? X("catalog:javSelection.deselectPage") : X("catalog:javSelection.selectPage")
					})
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					disabled: !s.size,
					onClick: () => p([...s.values()]),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					onClick: y,
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(cn, {
				items: f,
				close: () => p(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/wants/want-list.tsx
var hn = {
	code: X("catalog:wants.originManual"),
	feed: X("catalog:entityHero.subscribeNewReleases"),
	follow: X("catalog:entityHero.following")
}, gn = [
	["all", X("catalog:shared.all")],
	["available", X("catalog:wants.hasMagnet")],
	["missing", X("catalog:wants.noMagnet")]
], _n = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	hn[e.origin]
].filter(Boolean).join(" · ");
function vn({ want: e }) {
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
function yn({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: u, picked: d }) {
	let f = nn(), [p, h] = (0, Q.useState)([]), g = e.link || (!p.length && e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : ""), _ = g && URL.canParse(g) ? new URL(g).hostname.replace(/^www\./, "") : "", v = Ft(e.follow_provider || _.split(".")[0] || ""), y = v === "javdb" ? "JavDB" : v === "javbus" ? "JavBus" : _, b = g && _ && !p.some((e) => e.source === v) ? [{
		source: v,
		label: y,
		url: g
	}, ...p] : p, x = e.code && e.phase === "searching" ? mt(e) : Lt(e), S = b.map((e) => ({
		id: `source:${e.source}`,
		label: e.label,
		icon: be,
		run: () => {
			window.open(e.url, "_blank", "noopener,noreferrer");
		}
	}));
	(e.phase === "searching" || e.phase === "given_up") && S.push({
		id: "resource",
		label: X("catalog:shared.searchTorrents"),
		icon: yt,
		run: a
	}), e.phase === "given_up" && S.push({
		id: "reset",
		label: X("catalog:wants.searchAgain"),
		icon: I,
		disabled: t || !!n,
		run: r
	}), d && S.push({
		id: "select",
		label: X(d.on ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: N,
		run: () => d.toggle(!d.on)
	}), S.push({
		id: "remove",
		label: X("catalog:shared.remove"),
		icon: z,
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
		className: Oe({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [
			f.menu,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
				children: [
					d ? /* @__PURE__ */ (0, $.jsx)(m, {
						slot: null,
						className: "mt-1 shrink-0 self-start",
						"aria-label": X("catalog:wants.selectRow", { name: rn(e) }),
						isSelected: d.on,
						onChange: d.toggle
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(vn, { want: e }),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, $.jsxs)("p", {
								className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
								children: [/* @__PURE__ */ (0, $.jsx)("b", {
									className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
									children: rn(e)
								}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									className: "min-w-0 truncate text-body-2-regular text-text-secondary",
									children: e.title
								}) : null]
							}),
							_n(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: _n(e)
							}) : null,
							x ? /* @__PURE__ */ (0, $.jsx)("p", {
								"data-want-note": "",
								className: "text-caption-1-regular text-text-secondary",
								children: x
							}) : null,
							e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(ln, {
								text: e.scrape_error,
								prefix: X("catalog:wants.metadataNotFound"),
								tone: "muted"
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-want-actions": "",
								className: "mt-1 flex flex-wrap items-center gap-2",
								children: [
									b.map((e) => /* @__PURE__ */ (0, $.jsx)(l, {
										"data-button-link": "",
										variant: "secondary",
										size: "small",
										trailingIcon: be,
										href: e.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: /* @__PURE__ */ (0, $.jsx)(G, {
											source: e.source,
											label: e.label
										})
									}, e.source)),
									e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
										variant: "secondary",
										size: "small",
										disabled: t,
										...J(n === `reset:${e.id}`),
										onClick: r,
										children: X("catalog:wants.searchAgain")
									}) : null,
									e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
										variant: "primary",
										size: "small",
										leadingIcon: yt,
										onClick: a,
										children: X("catalog:shared.searchTorrents")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(c, {
										variant: "danger",
										size: "small",
										leadingIcon: z,
										disabled: t,
										...J(n === `remove:${e.id}`),
										onClick: i,
										children: X("catalog:shared.remove")
									})
								]
							})
						]
					})
				]
			}),
			e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(ye, {
				want: e,
				readOnly: t,
				downloads: o,
				provider: s,
				toast: u,
				onSources: h
			}) : null
		]
	});
}
function bn({ phase: e, label: t, rows: n, row: r, onRectangle: i, selecting: o }) {
	let [s, l] = (0, Q.useState)(1), [u, d] = (0, Q.useState)(20), [f, p] = (0, Q.useState)("all"), m = De(n), h = (e) => e.has_magnets ?? m.get(e.code || "") ?? !1, g = n.filter(h), _ = e !== "searching" || f === "all" ? n : n.filter((e) => h(e) === (f === "available")), v = en(_.length ? i : void 0, {
		selecting: o,
		start: "[data-want-items]"
	}), y = vt(_.length, u, s);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(ce, {
					name: "want-magnet-filter",
					"aria-label": X("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: f,
					className: W,
					onChange: (e) => {
						p(e), l(1);
					},
					children: gn.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(a, {
						value: e,
						"aria-label": t,
						className: se,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? g.length : n.length - g.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			_.length ? null : /* @__PURE__ */ (0, $.jsx)(O, {
				size: "compact",
				icon: bt,
				title: X("catalog:wants.noFilterMatches"),
				actions: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: () => {
						p("all"), l(1);
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
				children: /* @__PURE__ */ (0, $.jsx)(w, {
					label: t,
					total: y.total,
					pagination: {
						pageIndex: y.page - 1,
						pageSize: u
					},
					onChange: (e) => {
						d(e.pageSize), l(e.pageIndex + 1);
					},
					unit: X("catalog:wants.itemUnit")
				})
			})
		]
	});
}
function xn({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), l = Yt(), u = $t({
		queryKey: ve,
		queryFn: ({ signal: e }) => rt(e),
		staleTime: 3e4,
		refetchInterval: an
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => Ce({ code: n }, e), (e) => {
			t(e.created ? X("catalog:wants.added", { name: rn(e.want) }) : X("catalog:wants.alreadyAdded", { name: rn(e.want) })), a(""), Y();
		});
	}, f = (e) => {
		e.key === "Enter" && !Ne(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => jt([e.id], t), () => {
			t(X("catalog:wants.removed", { name: rn(e) })), Y();
		});
	}, m = (e) => {
		l.run(`reset:${e.id}`, (t) => Pt([e.id], t), () => {
			t(X("catalog:wants.backToSearching", { name: rn(e) })), Y();
		});
	}, h = u.data, g = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), v = dn(), y = !!v?.mode, [b, x] = (0, Q.useState)(/* @__PURE__ */ new Set()), [w, T] = (0, Q.useState)(null);
	(0, Q.useEffect)(() => {
		y || x(/* @__PURE__ */ new Set());
	}, [y]);
	let E = g.filter((e) => b.has(e.id)), k = g.length > 0 && E.length === g.length, A = { receipt: t }, j = {
		key: "remove",
		label: X("catalog:shared.remove"),
		reversal: "undo",
		danger: !0,
		confirm: (e) => ({
			title: X("catalog:wants.removeMany"),
			body: X("catalog:wants.removeManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await jt(e.map((e) => e.id));
			return await Y(), async () => {
				await It(t), await Y();
			};
		},
		receipt: (e) => X("catalog:wants.removedMany", { count: e.length })
	}, M = {
		key: "reset",
		label: X("catalog:wants.searchAgain"),
		reversal: "undo",
		confirm: (e) => ({
			title: X("catalog:wants.searchAgainMany"),
			body: X("catalog:wants.searchAgainManyBody", { count: e.length })
		}),
		run: async (e) => {
			let { previous: t } = await Pt(e.map((e) => e.id));
			return await Y(), async () => {
				await It(t), await Y();
			};
		},
		receipt: (e) => X("catalog:wants.searchAgainDone", { count: e.length })
	}, ee = E.filter((e) => e.code && (e.phase === "searching" || e.phase === "given_up")), N = $t({
		queryKey: S,
		queryFn: ({ signal: e }) => we(`${C}?limit=100`, e),
		enabled: g.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), P = N.data?.providers.filter((e) => e.configured) || [], te = P[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Oe({
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
						}), /* @__PURE__ */ (0, $.jsx)(c, {
							variant: "primary",
							disabled: e || !i.trim(),
							...J(l.busy === "add"),
							onClick: d,
							children: X("catalog:shared.add")
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(B, {
						tone: "error",
						title: X("catalog:wants.actionFailed"),
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				title: X("catalog:wants.loadFailed"),
				children: Ye(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: ct("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(_e, {
				embedded: !0,
				kind: Se("want-scrape"),
				label: X("catalog:wants.fetchingNew")
			}) : null,
			h?.searching ? /* @__PURE__ */ (0, $.jsx)(_e, {
				embedded: !0,
				kind: Se("want-search"),
				label: X("catalog:wants.searchingResources")
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				title: X("catalog:wants.downloadSettingsFailed"),
				children: Ye(N.error)
			}) : null,
			N.data && !P.length ? /* @__PURE__ */ (0, $.jsxs)(B, {
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
			N.data && !N.data.available ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "neutral",
				children: X("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !g.length ? /* @__PURE__ */ (0, $.jsx)(O, {
				size: "compact",
				icon: bt,
				title: X(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: r,
					children: X("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(D, {
					target: `input[aria-label="${X("catalog:shared.code")}"]`,
					children: X("catalog:wants.addWork")
				}) : void 0,
				children: X(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			ie.map(([n, r]) => {
				let i = g.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(bn, {
					phase: n,
					label: r,
					rows: i,
					selecting: y,
					onRectangle: v && !l.busy ? (e, t) => x((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(yn, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: N.data,
						provider: te,
						toast: t,
						picked: y ? {
							on: b.has(n.id),
							toggle: (e) => x((t) => {
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
			/* @__PURE__ */ (0, $.jsx)(_, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: te
			}),
			/* @__PURE__ */ (0, $.jsxs)(K, {
				visible: y,
				label: X("catalog:wants.dockLabel"),
				count: X("catalog:javSelection.selectedCount", { count: E.length }),
				actions: [{
					action: j,
					items: E,
					host: A,
					disabled: e,
					done: () => x(/* @__PURE__ */ new Set())
				}, {
					action: M,
					items: E.filter((e) => e.phase === "given_up"),
					host: A,
					disabled: e,
					done: () => x(/* @__PURE__ */ new Set())
				}],
				leading: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					disabled: !g.length,
					onClick: () => x(k ? /* @__PURE__ */ new Set() : new Set(g.map((e) => e.id))),
					children: X(k ? "catalog:javSelection.deselectPage" : "catalog:wants.selectAll")
				}),
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					disabled: !ee.length,
					onClick: () => T(ee.map((e) => ({
						id: e.id,
						code: e.code,
						title: e.title || "",
						release_date: e.release_date || void 0
					}))),
					children: X("catalog:shared.searchTorrents")
				}), /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					onClick: () => v?.close(),
					children: X("catalog:javSelection.exit")
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(cn, {
				items: w,
				close: () => T(null),
				readOnly: e,
				receipt: t
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Sn({ item: e }) {
	Qt();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image && !t.has_avatar ? { children: /* @__PURE__ */ (0, $.jsx)(q, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: Ee(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: qe("performer", t.name, t.id),
			"aria-label": X("catalog:javDiscovery.openActress", { name: Ge("performer", t.name, t.id) }),
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: Ge("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ (0, $.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-context.ts
function Cn(e, t) {
	let n = [
		{
			id: "open",
			label: X("catalog:mediaActions.open"),
			icon: ee,
			run: () => t.navigate(e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`)
		},
		{
			id: "want",
			label: X(e.asset_id ? "catalog:javWant.imported" : e.wanted ? "catalog:javWant.wanted" : "catalog:javWant.want"),
			icon: bt,
			disabled: t.readOnly || t.wanting || !!e.wanted || !!e.asset_id,
			run: t.onWant
		},
		{
			id: "resource",
			label: X("catalog:shared.searchTorrents"),
			icon: yt,
			run: t.onResource
		}
	];
	return e.link && n.push({
		id: "source",
		label: X("catalog:shared.viewOnSite"),
		icon: be,
		run: () => {
			window.open(e.link, "_blank", "noopener,noreferrer");
		}
	}), t.selection && n.push({
		id: "select",
		label: X(t.selection.selected.has(e.code) ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: N,
		run: () => t.selection?.toggle(e)
	}), {
		key: e.code,
		operations: n
	};
}
// src/react/jav/discovery-card.tsx
var wn = (e) => ({
	...e,
	cover: e.has_cover ? Ve(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Tn = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function En({ item: e, readOnly: t }) {
	let n = Yt(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(Le.subscribe, Le.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: X("catalog:shared.noCover")
	});
	if (a === "fetching" || Le.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Re() } });
	let s = () => {
		n.run("cover", (t) => Qe(e.code, t), (t) => {
			t.has_cover ? Ie(e.code, t) : i(t.message || X("catalog:javDiscovery.noOfficialCover"));
		});
	}, l = r || n.error ? "missing" : a, u = n.error || r || ze(e);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": l,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			l === "queued" ? /* @__PURE__ */ (0, $.jsx)(o, {
				kind: "clock",
				size: "card",
				still: !0
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: d[l]
			}),
			u ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: u,
				children: u
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(c, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: s,
				children: Be(l)
			})
		]
	});
}
function Dn({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: o, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = dn(), h = nn(), g = Cn(e, {
		selection: m,
		readOnly: r,
		wanting: u,
		navigate: i,
		onWant: d,
		onResource: f
	}), _ = m?.selected.has(e.code), v = !!m?.dense, y = e.performer_refs?.length ? ft(e.performer_refs.map((e) => e.name)) : e.performers, b = He(e, t, n), x = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-rectangle-key": e.code,
		"data-selected": _ ? "" : void 0,
		onMouseDown: Wt,
		onContextMenu: (e) => h.onContextMenu(e, g),
		onKeyDown: (e) => h.onKeyDown(e, g),
		onClickCapture: (t) => {
			t.target.closest("[data-work-context-menu]") || m && (m.mode || st(t)) && (t.preventDefault(), t.stopPropagation(), m.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input") || i(x);
		},
		children: [
			h.menu,
			b ? /* @__PURE__ */ (0, $.jsx)("a", {
				href: x,
				"aria-label": X("catalog:javDiscovery.viewDetails", { code: e.code }),
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(x));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Tn,
				children: /* @__PURE__ */ (0, $.jsx)(s, {
					artwork: {
						kind: "cover",
						html: b
					},
					identity: He(e, "small", n),
					relayout: (e) => wt(e, t)
				})
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Tn,
				children: /* @__PURE__ */ (0, $.jsx)(En, {
					item: e,
					readOnly: r
				})
			}),
			m?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
				"aria-pressed": !!_,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Sn, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
									lang: Kt(e.title),
									children: e.title
								}) : X("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: qe("performer", e.performer_refs[0].name),
									title: y,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: y,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || y })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-who-more": "",
									children: X("catalog:javDiscovery.morePeople", {
										count: e.performer_refs.length - 1,
										total: e.performer_refs.length
									})
								}) : null,
								e.release_date ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-facts": "",
									children: /* @__PURE__ */ (0, $.jsxs)("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ (0, $.jsx)("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
										}), e.release_date]
									})
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
								onClick: () => o(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			m?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": v ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(l, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: v ? "small" : "medium",
						iconOnly: v,
						"aria-label": X("catalog:shared.viewOnSite"),
						title: X("catalog:shared.viewOnSite"),
						leadingIcon: v ? be : void 0,
						trailingIcon: v ? void 0 : be,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: v ? null : X("catalog:shared.viewOnSite")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "ghost",
						size: v ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...J(u),
						onClick: d,
						children: e.asset_id ? X("catalog:javWant.imported") : e.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "secondary",
						size: v ? "small" : "medium",
						onClick: f,
						children: X("catalog:shared.searchTorrents")
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var On = {
	widths: H,
	visibility: V
};
function kn({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: gt(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: ht(e?.name || "", 1)
	});
}
function An({ column: e, label: t, filters: n, onChange: r }) {
	let i = e === "people" ? "performer" : e === "tags" ? "tag" : "studio", a = Vt(n, i, void 0);
	return /* @__PURE__ */ (0, $.jsx)(me, {
		id: e,
		label: t,
		values: Tt(n, i),
		load: async (t, n, r) => {
			let i = await tt(a, e, n, r, t);
			return {
				items: i.items.map((t) => {
					let n = e === "people" ? t : null, r = n && Je("performer", n.name, n.id);
					return {
						id: t.name,
						label: t.name,
						count: t.count,
						searchTerms: [...n?.aliases || [], ...[r?.ja, r?.zh_cn].filter((e) => !!e)],
						leading: n ? /* @__PURE__ */ (0, $.jsx)(v, { person: n }) : void 0
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
			a.q
		],
		onChange: (e) => r(i, e)
	});
}
function jn({ items: a, waiting: o, filters: l, studios: u, facets: f, javImage: p, readOnly: g, navigate: _, onTag: v, onFilter: y, onRange: b, onSort: x, wanting: S, onWant: C, onResource: w, selecting: E = !0 }) {
	let D = dn(), O = nn(), k = (e) => Cn(e, {
		selection: D,
		readOnly: g,
		wanting: S(e),
		navigate: _,
		onWant: () => C(e),
		onResource: () => w(e)
	}), A = tn("jav-releases", Dt, On), j = Dt.filter((e) => e.required || A.visibility[e.id] !== !1), M = Object.entries(U).find(([, e]) => e === l.sort)?.[0], ee = St(l.column_filters), N = new Map(u.map((e) => [e.name, e])), P = (e) => (t) => {
		t.preventDefault(), D?.mode || st(t) ? D?.toggle(e, t.shiftKey) : _(`/works/${encodeURIComponent(e.code)}`);
	}, F = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = He(t, "small", p);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: P(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(s, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => wt(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: ze(t) || void 0,
								children: t.cover_state ? d[t.cover_state] : X("catalog:shared.noCover")
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || X("catalog:javDiscovery.titleNotFound")}`,
							"aria-label": X("catalog:javDiscovery.viewDetails", { code: t.code }),
							onClick: P(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Kt(t.title),
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
					/* @__PURE__ */ (0, $.jsx)(Sn, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: qe("performer", n),
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}) : /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
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
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ (0, $.jsx)(kn, { studio: t.studio_ref || N.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": Et(l, "tag").includes(e),
					onClick: () => v(e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return at(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					disabled: g || t.wanted || !!t.asset_id,
					...J(S(t)),
					onClick: () => C(t),
					children: t.wanted ? X("catalog:javWant.wanted") : X("catalog:javWant.want")
				}), /* @__PURE__ */ (0, $.jsx)(c, {
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
			n && !o && O.onKeyDown(e, k(n), t);
		},
		children: [
			O.menu,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-wrap justify-end gap-2",
				role: "toolbar",
				"aria-label": X("catalog:javReleases.toolbar"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-toolbar-actions": "",
					children: /* @__PURE__ */ (0, $.jsx)(pe, {
						preferences: A,
						label: X("catalog:javReleases.list")
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(T, {
				follow: !0,
				preferences: A,
				rectangleSelecting: !!D?.mode,
				onRectangle: E && !o ? D?.selectRectangle : void 0,
				onRowClick: E && !o && D?.mode ? (e) => {
					let t = a.find((t) => String(t.id) === e);
					t && D.toggle(t);
				} : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)(fe, {
					"aria-label": X("catalog:javReleases.list"),
					size: "sm",
					sortDescriptor: M ? {
						column: M,
						direction: l.dir === "asc" ? "ascending" : "descending"
					} : void 0,
					onSortChange: (e) => {
						let t = U[String(e.column)];
						t && x(t, e.direction === "ascending" ? "asc" : "desc");
					},
					children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [
						D?.mode ? /* @__PURE__ */ (0, $.jsx)(t, {
							id: "selection",
							width: 44,
							"aria-label": X("catalog:javReleases.selectVideos"),
							children: /* @__PURE__ */ (0, $.jsx)(m, {
								slot: null,
								"aria-label": X("catalog:catalogList.selectAllOnPage"),
								isSelected: D.all,
								isIndeterminate: D.mixed,
								isDisabled: o || !a.length,
								onChange: D.selectPage
							})
						}) : null,
						j.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
							id: e.id,
							isRowHeader: e.id === "name",
							allowsSorting: e.id in U,
							...A.columnProps(e.id),
							children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [b && (e.id === "release" || e.id === "dur" || e.id === "score") ? /* @__PURE__ */ (0, $.jsx)(he, {
									id: e.id,
									label: e.label,
									kind: je[e.id],
									value: ee[e.id],
									rangeQuery: e.id === "release" ? Ot(l) : void 0,
									onChange: (t) => b(e.id, t)
								}) : f && y && [
									"people",
									"studio",
									"tags"
								].includes(e.id) ? /* @__PURE__ */ (0, $.jsx)(An, {
									column: e.id,
									label: e.label,
									filters: l,
									onChange: y
								}) : e.label, e.id in U ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": t || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(h, {})
								}) : null]
							}), /* @__PURE__ */ (0, $.jsx)(ge, {
								preferences: A,
								id: e.id
							})] })
						}, e.id)),
						/* @__PURE__ */ (0, $.jsx)(t, {
							id: "remaining-space",
							"aria-label": X("catalog:catalogList.rowSpacer"),
							"data-table-space": "",
							width: A.spaceWidth,
							minWidth: 0
						})
					] }), /* @__PURE__ */ (0, $.jsx)(e, {
						renderEmptyState: () => X("catalog:javReleases.noMatches"),
						children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: `skeleton-${t}`,
							"data-list-skeleton-row": "",
							"aria-hidden": "true",
							children: [
								D?.mode ? /* @__PURE__ */ (0, $.jsx)(r, {}) : null,
								j.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Ae(e.id) } }) }, e.id)),
								/* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })
							]
						}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
							id: String(e.id),
							"data-catalog-row": "",
							"data-release-row": "",
							"data-release-id": e.id,
							"data-rectangle-key": e.code,
							"data-board-selected": D?.selected.has(e.code) || void 0,
							onContextMenu: (t) => O.onContextMenu(t, k(e)),
							children: [
								D?.mode ? /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)(m, {
									slot: null,
									"aria-label": X("catalog:javDiscovery.select", { code: e.code }),
									isSelected: D.selected.has(e.code),
									onChange: () => D.toggle(e)
								}) }) : null,
								j.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: F(t.id, e) }, t.id)),
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
var Mn = `<div data-catalog-tier="performers" data-skeleton="tiers">${qt("performer")}</div><div data-catalog-tier="studios">${qt("studio")}</div>`, Nn = (e) => `<span data-tier-initial>${Xe(it(Ge("performer", e.name, e.id)))}</span>${Ke({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Ze(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function Pn({ value: e }) {
	let t = Ct(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: X("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(g, {
			color: t.color,
			children: t.label
		})
	});
}
function Fn({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: gt(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : ht(e.name, 2)
	});
}
var In = (e) => Qe(e).then((t) => (t.has_cover && Ie(e, t), t.has_cover));
function Ln({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	Qt();
	let [o, s] = (0, Q.useState)(() => kt(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let d = (e, t) => {
		let n = Vt(o, e, t);
		s(n), Z({
			[e]: "",
			column_filters: n.column_filters || "",
			page: ""
		});
	}, m = (e, t) => {
		let n = Tt(o, e);
		d(e, n === void 0 ? [t] : Jt(n, t, !Me(n, t)));
	}, h = (e) => {
		s((t) => ({
			...t,
			column_filters: e,
			page: 1
		})), Z({
			column_filters: e,
			page: ""
		});
	}, g = (e, t) => h(sn(St(o.column_filters), e, t)), _ = (0, Q.useRef)(null), v = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			size: t === 24 ? "" : String(t)
		}), _.current?.scrollIntoView({ block: "start" });
	}, x = () => {
		s((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			column_filters: "",
			q: "",
			page: 1
		})), Z({
			performer: "",
			studio: "",
			tag: "",
			column_filters: "",
			page: ""
		}), a();
	}, S = (e) => C(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), C = (e, t) => {
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
	}, T = () => {
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
		let e = [..._.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => on(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let E = Te();
	(0, Q.useSyncExternalStore)(E.subscribe, E.version, E.version);
	let D = lt(), j = Xt(), ee = ke(ot({
		active: !0,
		home: !1,
		portrait: !1
	})), N = $t({
		queryKey: At(o),
		queryFn: ({ signal: e }) => nt(o, e),
		placeholderData: pt,
		retry: !1,
		refetchOnWindowFocus: !1
	}), P = N.data?.metadata_job, F = (0, Q.useRef)(!1);
	F.current = P?.status === "running";
	let re = xt.getQueryData(b)?.metadata_job, I = $t({
		queryKey: b,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: P?.status === "running" || re?.status === "running",
		queryFn: ({ signal: e }) => et(e),
		refetchInterval: _t(() => F.current)
	}), L = I.data && I.dataUpdatedAt >= N.dataUpdatedAt ? I.data.metadata_job : P, R = L?.status === "running", z = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		z.current && !R && N.refetch(), z.current = R;
	}, [R, N]);
	let ie = (0, Q.useRef)(""), V = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.column_filters,
		o.q,
		o.sort,
		o.dir,
		o.seed
	]), H = !N.isPlaceholderData && (N.data?.metadata_unread || 0) > 0 && !R;
	(0, Q.useEffect)(() => {
		H && ie.current !== V && (ie.current = V, Fe("start", o).then(async (e) => {
			await xt.cancelQueries({ queryKey: b }), xt.setQueryData(b, e);
		}).catch(() => {}));
	}, [H, V]);
	let U = Yt(), se = (e) => {
		U.run(String(e.id), (t) => Ce({ code: e.code }, t), () => {
			t(X("catalog:javWant.added")), Y(), N.refetch();
		});
	}, W = N.data;
	pn(W?.items || []);
	let G = N.isPending, ce = fn(!G && !N.isPlaceholderData), K = !!(o.performer || o.studio || o.tag || o.column_filters || o.q), q = Math.max(1, Math.ceil((W?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!W || N.isPlaceholderData || o.page <= q || (s((e) => ({
			...e,
			page: q
		})), Z({ page: q > 1 ? String(q) : "" }));
	}, [
		W,
		N.isPlaceholderData,
		o.page,
		q
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: _,
		"aria-label": X("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": G || N.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			G ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: Mn }
			}) : null,
			W && (W.facets.performers.length || W.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [W.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByActress"),
					children: W.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": Et(o, "performer").includes(e.name),
						title: X("catalog:javReleases.facetCount", {
							name: Ge("performer", e.name, e.id),
							count: e.count
						}),
						onClick: () => m("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: Nn(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: Ge("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, W.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": X("catalog:javReleases.filterByLabel"),
					children: W.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": Et(o, "studio").includes(e.name),
						title: X("catalog:javReleases.facetCount", {
							name: e.name,
							count: e.count
						}),
						onClick: () => m("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(Fn, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, {
				label: X("catalog:javReleases.filtersLabel"),
				topLabel: X("catalog:javReleases.tagsLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: G,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: G ? { __html: ut() } : void 0,
						children: G ? null : W?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(M, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: Et(o, "tag").includes(e.name),
							onPress: () => m("tag", e.name),
							children: [e.name, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: G ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : K ? X("catalog:javReleases.matchedCount", {
							matched: W?.total || 0,
							count: W?.candidate_total || 0
						}) : X("catalog:countLabel.works", { count: W?.total || 0 })
					}),
					K ? /* @__PURE__ */ (0, $.jsx)(k, {
						onPress: x,
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(ue, {
								onPress: T,
								busy: o.sort === "random" && N.isFetching
							}),
							j === "cards" ? /* @__PURE__ */ (0, $.jsx)(le, {
								label: X("catalog:entityFilter.javCardLayout"),
								value: D,
								options: te,
								onChange: Ut
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(p, {}),
							/* @__PURE__ */ (0, $.jsx)(de, {
								group: "releases",
								sorts: oe.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === o.sort,
									dir: o.dir
								})),
								onSort: (e) => S(e)
							})
						]
					})
				] })
			}),
			j === "cards" && o.column_filters ? /* @__PURE__ */ (0, $.jsx)(f, {
				encoded: o.column_filters,
				columns: Dt,
				onChange: h
			}) : null,
			G && j === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: ct("discover", D) }
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				title: X("catalog:javReleases.failed"),
				children: Ye(N.error)
			}) : null,
			R && L ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					kind: Se("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: L.completed,
						count: L.total
					}),
					value: L.completed,
					total: L.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(y, {
				scope: X("catalog:javReleases.coverQueueScope"),
				fetchOne: In,
				codes: (W?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? X("catalog:javReleases.coversFetched", { count: n }) : X("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), N.refetch();
				}
			}),
			!G && !N.error && !W?.items.length && (j === "cards" || !K) ? /* @__PURE__ */ (0, $.jsx)(O, {
				icon: u,
				title: X(K ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: K ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: x,
					children: X("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: X("catalog:javReleases.addSubscription")
				}),
				children: X(K ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			U.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				children: U.error
			}) : null,
			j === "list" ? G || W?.items.length || K ? /* @__PURE__ */ (0, $.jsx)(jn, {
				items: W?.items || [],
				waiting: G,
				filters: o,
				selecting: !N.isPlaceholderData,
				studios: W?.facets.studios || [],
				javImage: E.value.javImage,
				readOnly: e,
				navigate: i,
				facets: W?.facets,
				onFilter: d,
				onRange: g,
				onTag: (e) => m("tag", e),
				onSort: C,
				wanting: (e) => U.busy === String(e.id),
				onWant: se,
				onResource: (e) => n(wn(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": ee },
				...ce,
				children: (W?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Dn, {
					item: t,
					layout: D,
					javImage: E.value.javImage,
					readOnly: e,
					navigate: i,
					tag: Et(o, "tag"),
					onTag: (e) => m("tag", e),
					wanting: U.busy === String(t.id),
					onWant: () => se(t),
					onResource: () => n(wn(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(Pn, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			W ? /* @__PURE__ */ (0, $.jsx)(w, {
				label: X("catalog:javTabs.newReleases"),
				total: W.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: v,
				unit: X("catalog:catalogList.footerUnit"),
				pageUnit: X("catalog:catalogList.footerPageUnit"),
				pageSizes: ae
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var Rn = Ht("x"), zn = Ht("refresh-cw"), Bn = {
	releases: X("catalog:javSearch.filterReleases"),
	discover: X("catalog:javSearch.filterRecommended"),
	wants: X("catalog:javSearch.filterWants")
};
function Vn({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsx)(mn, {
		readOnly: t,
		receipt: r,
		dock: e !== "wants",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(L, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: /* @__PURE__ */ (0, $.jsx)(P, {
						label: Bn[e] || X("catalog:javDiscover.filter"),
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ (0, $.jsx)(Ln, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(Hn, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : /* @__PURE__ */ (0, $.jsx)(xn, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ (0, $.jsx)(_, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
function Hn({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => x.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [h, _] = (0, Q.useState)(() => o.get("dir") === "asc"), v = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, y = (e) => {
		f(e), Z({ tag: e });
	}, S = (e) => {
		m(e), Z({ sort: e === "taste" ? "" : e });
	}, C = (e) => {
		_(e), Z({ dir: e ? "asc" : "" });
	}, w = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...w.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => on(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let T = Te();
	(0, Q.useSyncExternalStore)(T.subscribe, T.version, T.version);
	let D = lt(), ee = ke(ot({
		active: !0,
		home: !1,
		portrait: !1
	})), N = h ? "asc" : "desc", P = $t({
		queryKey: Ue(s, p, N),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => $e(s, e, {
			sort: p,
			direction: N
		})
	}), F = P.data?.metadata_job, re = (0, Q.useRef)(!1);
	re.current = F?.status === "running";
	let I = $t({
		queryKey: b,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => et(e),
		refetchInterval: _t(() => re.current)
	}), L = I.data && I.dataUpdatedAt >= P.dataUpdatedAt ? I.data.metadata_job : F, z = (e) => e ? `${e.job_id}:${e.status}` : "", ie = (0, Q.useRef)(""), V = (0, Q.useRef)(""), H = I.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = z(H), t = V.current.endsWith(":running") && H && H.status !== "running";
		V.current = e, t && e !== ie.current && P.refetch();
	}, [z(H)]);
	let ae = Yt(), oe = Yt(), U = async (e, t) => {
		let n = await Pe(e, {
			sort: p,
			direction: N,
			jobId: L?.job_id
		}, t);
		e !== "start" && await P.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await xt.cancelQueries({ queryKey: b }), ie.current = z(n.metadata_job), xt.setQueryData(b, n);
	}, se = (e) => {
		oe.run(e, (t) => U(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, W = (0, Q.useRef)(!1), G = s === "external" && L?.status !== "running" && (P.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		G && !W.current && (W.current = !0, U("start").catch(() => {}));
	}, [G]);
	let ce = P.data?.items || [], K = [...new Set(ce.flatMap((e) => e.tags || []))], ue = ce.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), q = P.isPending;
	pn(ue);
	let fe = fn(!q);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: w,
		"aria-label": X("catalog:shared.recommendedForYou"),
		"aria-busy": q,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(A, {
				label: X("catalog:javDiscover.filtersLabel"),
				topLabel: X("catalog:javDiscover.scopeLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: q,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", X("catalog:javDiscover.external")], ["library", X("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(M, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: s === e,
							onPress: () => {
								v(e), y("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: q ? { __html: ut() } : void 0,
						children: q ? null : K.map((e) => /* @__PURE__ */ (0, $.jsxs)(M, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => y(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: ce.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: q ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : X("catalog:countLabel.works", { count: ue.length })
					}),
					/* @__PURE__ */ (0, $.jsx)(R, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(k, {
						onPress: () => {
							y(""), a();
						},
						children: X("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							s === "external" ? /* @__PURE__ */ (0, $.jsx)(j, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: L?.status === "running" ? X("catalog:javDiscover.stopUpdating") : X("catalog:javDiscover.updateMetadata"),
								disabled: q,
								"data-skeleton-action": q ? "" : void 0,
								busy: !!oe.busy,
								icon: L?.status === "running" ? Rn : zn,
								onPress: () => se(L?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(le, {
								label: X("catalog:entityFilter.javCardLayout"),
								value: D,
								options: te,
								onChange: Ut
							}),
							/* @__PURE__ */ (0, $.jsx)(de, {
								group: "discover",
								sorts: x.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === p,
									dir: N
								})),
								onSort: (e) => {
									e === p ? C(!h) : (S(e), C(e === "code"));
								}
							})
						]
					})
				] })
			}),
			q ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": X("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: ct("discover", D) }
			}) : null,
			P.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				title: X("catalog:javDiscover.failed"),
				children: Ye(P.error)
			}) : null,
			s === "external" && L?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					kind: Se("jav-discovery-metadata"),
					label: X("catalog:javMetadata.loadingProgress", {
						completed: L.completed,
						count: L.total
					}),
					value: L.completed,
					total: L.total
				})
			}) : null,
			L && L.status !== "running" && (L.status !== "complete" || L.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "secondary",
					...J(oe.busy === "retry"),
					"aria-label": X("catalog:javMetadata.retry"),
					onClick: () => se("retry"),
					children: X("catalog:shared.retryNow")
				}),
				children: dt(L) || X("catalog:javMetadata.progress", {
					completed: L.completed,
					count: L.total
				})
			}) : null,
			oe.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				children: oe.error
			}) : null,
			!q && !P.error && !ue.length ? /* @__PURE__ */ (0, $.jsx)(O, {
				icon: E,
				title: X(r || d ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: X("catalog:javDiscover.viewTaste")
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Z({
							q: "",
							tag: ""
						});
					},
					children: X("catalog:shared.clearFilters")
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					href: "/",
					children: X("catalog:entityPage.browseCollection")
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: X("catalog:javDiscover.findVideos")
				})] }),
				children: X(r || d ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			ae.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				tone: "error",
				children: ae.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": ee },
				...fe,
				children: ue.map((r) => {
					let a = Ct(r.taste_score ?? r.score), o = [
						a.label,
						X("catalog:javScore.taste", { score: We(r.taste_score ?? r.score) }),
						P.data?.ranking_method === "mmr" && r.ranking_score != null ? X("catalog:javScore.ranking", { score: We(r.ranking_score) }) : "",
						r.source_score == null ? "" : X("catalog:javScore.siteRating", { rating: r.source_score.toFixed(1) }),
						...Bt(r.reasons, r.reason_codes, r.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Dn, {
						item: r,
						layout: D,
						javImage: T.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: y,
						wanting: ae.busy === String(r.id),
						onWant: () => {
							ae.run(String(r.id), (e) => Ce({ code: r.code }, e), () => {
								t(X("catalog:javWant.added")), Y(), P.refetch();
							});
						},
						onResource: () => n(wn(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": X("catalog:javScore.badgeLabel", {
								score: a.score,
								label: a.label
							}),
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(g, {
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
export { Vn as JavPage };

//# debugId=30a1151e-432c-49c7-9b84-12bdd93d01f7