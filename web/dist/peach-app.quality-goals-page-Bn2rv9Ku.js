(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7c5acf0-ab1b-4769-badc-9c9982b7d3b1", e._sentryDebugIdIdentifier = "sentry-dbid-d7c5acf0-ab1b-4769-badc-9c9982b7d3b1");
	} catch {}
})();
import { Button as e, CardTags as t, CatalogViewToggle as n, CloudDownloadDialog as r, EmptyState as i, FilterGlassRows as a, Gg as o, H7 as s, Icon as c, LOC as l, ListLibrary as u, Note as d, OA as f, QUALITY_GOALS_KEY as p, QueueFilterChips as m, QueueIdentity as h, QueuePicture as g, QueueTable as _, SelectAllButton as v, SelectionDock as y, SortKeys as b, __toESM as x, enterPageSelection as S, errorMessage as C, exitPageSelection as ee, fetchQualityGoals as te, fmtDur as w, fmtSize as T, hasSelectionModifier as E, previewUrl as D, providerIcon as ne, pv as O, queueContentSkeletonHtml as re, require_jsx_runtime as k, require_react as A, t as j, useCatalogView as ie, useDense as M, useLibraryTints as N, usePageSelection as ae, useQuery as oe, useQueueSort as P, useRectangleSelection as F, useWorkContextMenu as I } from "./peach-app.js";
import { Page as L } from "./peach-app.page-QAncjzM1.js";
import { JavBatchResources as se } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
// src/react/quality-goals/quality-goals-page.tsx
var R = /* @__PURE__ */ x(A(), 1), z = k(), B = (e) => (e || "").split(/\s*\/\s*/).map((e) => e.trim()).filter(Boolean);
function V(e, t) {
	return {
		code: e.code,
		title: t,
		origin: `asset:${e.id}`,
		searchReason: e.reason || "",
		duration: e.duration,
		cover: D(e)
	};
}
function H(e, t, n, r, i) {
	let a = [{
		id: "open",
		label: j("manage:hdUpgrades.viewEditions"),
		icon: o,
		run: n
	}, {
		id: "select",
		label: j(t ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: s,
		run: i
	}];
	return e.code && a.splice(1, 0, {
		id: "search",
		label: j("manage:resourceSearch.searchTorrents"),
		icon: O,
		run: r
	}), a;
}
function ce({ item: n, openItem: r, searchResources: i, javTitleHtml: a, javDisplayName: o, srcBadge: s, picked: d, onPick: f, selecting: p }) {
	let m = I(), h = M(), [g, _] = (0, R.useState)(!1), v = () => r(n.id), y = o(n), b = () => i(V(n, y)), x = {
		key: n.id,
		operations: H(n, d, v, b, () => f(!d))
	}, S = N(), C = n.library_id && S.get(n.library_id)?.color ? n.library_id : void 0;
	return /* @__PURE__ */ (0, z.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-queue-card": "",
		"data-goal-id": n.id,
		"data-rectangle-key": n.id,
		"data-library": C,
		"data-selected": d ? "" : void 0,
		onContextMenu: (e) => m.onContextMenu(e, x),
		onKeyDown: (e) => m.onKeyDown(e, x),
		onClickCapture: (e) => {
			e.target.closest("[data-work-context-menu]") || (p || E(e)) && (e.preventDefault(), e.stopPropagation(), f(!d));
		},
		children: [
			m.menu,
			/* @__PURE__ */ (0, z.jsxs)("button", {
				type: "button",
				"data-media-pic": "",
				onClick: v,
				"aria-label": j("manage:hdUpgrades.openVideo", { title: y }),
				style: { "--card-ratio": "1.7777777777777777" },
				children: [
					g ? /* @__PURE__ */ (0, z.jsx)("span", {
						"data-media-nopic": "",
						children: j("manage:hdUpgrades.noPreview")
					}) : /* @__PURE__ */ (0, z.jsx)("span", {
						"data-media-art": "thumb",
						children: /* @__PURE__ */ (0, z.jsx)("img", {
							className: "absolute inset-0 size-full object-contain",
							src: D(n),
							alt: "",
							loading: "lazy",
							"data-goal-cover": "",
							onError: () => _(!0)
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("span", {
						"data-media-badge": "",
						dangerouslySetInnerHTML: { __html: s(n.location, n.cost) }
					}),
					Number(n.duration) > 0 ? /* @__PURE__ */ (0, z.jsx)("span", {
						"data-media-duration": "",
						children: w(n.duration)
					}) : null,
					/* @__PURE__ */ (0, z.jsx)("span", {
						"data-media-check": "",
						children: /* @__PURE__ */ (0, z.jsx)(c, { name: "check" })
					})
				]
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				"data-media-meta": "",
				children: /* @__PURE__ */ (0, z.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, z.jsx)("button", {
							type: "button",
							"data-media-title": "",
							onClick: v,
							title: y,
							dangerouslySetInnerHTML: { __html: a(n) }
						}),
						/* @__PURE__ */ (0, z.jsxs)("div", {
							"data-media-byline": "",
							children: [/* @__PURE__ */ (0, z.jsx)("span", {
								"data-media-who": "",
								children: n.library_id ? /* @__PURE__ */ (0, z.jsx)(u, { item: n }) : l[n.location] ?? n.location
							}), /* @__PURE__ */ (0, z.jsx)("span", {
								"data-media-facts": "",
								children: /* @__PURE__ */ (0, z.jsxs)("span", {
									"data-media-size": "",
									children: [/* @__PURE__ */ (0, z.jsx)(c, { name: "hard-drive" }), Number(n.size) > 0 ? T(Number(n.size)) : j("manage:hdUpgrades.unknownSize")]
								})
							})]
						}),
						/* @__PURE__ */ (0, z.jsx)(t, {
							tags: B(n.reason),
							label: (e) => e,
							readOnly: !0,
							title: n.reason || void 0
						})
					]
				})
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				"data-jav-actions": "",
				className: "flex flex-wrap gap-2",
				children: [n.code ? /* @__PURE__ */ (0, z.jsx)(e, {
					variant: "secondary",
					size: h ? "small" : "medium",
					onClick: b,
					children: j("manage:resourceSearch.searchTorrents")
				}) : null, /* @__PURE__ */ (0, z.jsx)(e, {
					variant: "secondary",
					size: h ? "small" : "medium",
					onClick: v,
					children: j("manage:hdUpgrades.viewEditions")
				})]
			})
		]
	});
}
function U({ toast: t, ...o }) {
	let [s, c] = (0, R.useState)(null), [x, E] = (0, R.useState)(/* @__PURE__ */ new Map()), O = ae(() => E(/* @__PURE__ */ new Map())), [k, A] = (0, R.useState)(null), M = ie(), [N, I] = (0, R.useState)({}), U = JSON.stringify(N), W = U !== "{}", G = oe({
		queryKey: W ? [...p, U] : p,
		queryFn: ({ signal: e }) => te(e, W ? N : void 0),
		placeholderData: (e) => e
	}), K = P("quality-goals", {
		size: (e) => Number(e.size || 0),
		dur: (e) => Number(e.duration || 0),
		new: (e) => e.id
	}), q = G.data, J = K.sort(q?.items || []), Y = (e, t) => {
		let n = new Set(e);
		E((e) => new Map([...t ? e : [], ...J.filter((e) => n.has(e.id)).map((e) => [e.id, e])]));
	}, le = F(!G.isFetching && !G.isError ? (e, t) => Y(e.map(Number), t) : void 0, { selecting: O });
	if (G.isPending) return /* @__PURE__ */ (0, z.jsx)(L, { children: /* @__PURE__ */ (0, z.jsx)("div", { dangerouslySetInnerHTML: { __html: re("quality-goals", j("shell:spinner.loading"), ["w-20", "w-24"]) } }) });
	if (!q) return /* @__PURE__ */ (0, z.jsx)(L, { children: /* @__PURE__ */ (0, z.jsx)(d, {
		tone: "error",
		title: j("manage:hdUpgrades.loadFailed"),
		children: G.error ? C(G.error) : j("manage:hdUpgrades.notFound")
	}) });
	if (!J.length && M !== "list" && !W) return /* @__PURE__ */ (0, z.jsx)(L, { children: /* @__PURE__ */ (0, z.jsx)(i, {
		icon: f,
		title: j("manage:hdUpgrades.emptyTitle"),
		children: j("manage:hdUpgrades.emptyBody")
	}) });
	let X = [...x.values()], Z = X.filter((e) => e.code), Q = (e) => {
		G.isFetching || G.isError || (e && S(), E((t) => {
			let n = new Map(t);
			for (let t of J) e ? n.set(t.id, t) : n.delete(t.id);
			return n;
		}));
	}, $ = (e, t) => {
		t && S(), E((n) => {
			let r = new Map(n), i = J.find((t) => t.id === e);
			return t && i ? r.set(e, i) : r.delete(e), r;
		});
	};
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		"data-quality-goals": "",
		className: "mx-auto w-full max-w-board",
		children: [
			/* @__PURE__ */ (0, z.jsx)(a, {
				label: j("manage:hdUpgrades.summaryLabel"),
				topLabel: j("manage:hdUpgrades.summaryLabel"),
				top: null,
				attrs: {
					"data-catalog-frame": "",
					"data-filter-frame": ""
				},
				bottomClassName: "min-h-12",
				bottom: /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)("span", {
					"data-catalog-summary": "",
					children: [/* @__PURE__ */ (0, z.jsxs)("span", {
						"data-catalog-readout": "",
						role: "status",
						children: [
							j("manage:hdUpgrades.summaryLabel"),
							" · ",
							j("manage:hdUpgrades.videoCount", { count: Number(q.total || 0) })
						]
					}), /* @__PURE__ */ (0, z.jsx)(v, {
						label: j("manage:hdUpgrades.selectAll"),
						picked: J.filter((e) => x.has(e.id)).length,
						total: J.length,
						onChange: Q
					})]
				}), /* @__PURE__ */ (0, z.jsxs)("span", {
					"data-entity-sorts": "",
					children: [/* @__PURE__ */ (0, z.jsx)(n, {}), /* @__PURE__ */ (0, z.jsx)(b, {
						sorts: K.sorts,
						onSort: K.onSort
					})]
				})] })
			}),
			M === "cards" && W ? /* @__PURE__ */ (0, z.jsx)("div", {
				className: "mb-4",
				children: /* @__PURE__ */ (0, z.jsx)(m, {
					table: "quality-goals",
					filters: N,
					onChange: I,
					valueLabel: (e, t) => e === "source" ? l[t] ?? t : t
				})
			}) : null,
			M === "list" ? /* @__PURE__ */ (0, z.jsx)(_, {
				table: "quality-goals",
				label: j("manage:hdUpgrades.summaryLabel"),
				items: J,
				selected: new Set(x.keys()),
				selecting: O,
				contextOperations: (e) => H(e, x.has(e.id), () => o.openItem(e.id), () => c(V(e, o.javDisplayName(e))), () => $(e.id, !x.has(e.id))),
				busy: G.isFetching,
				filters: {
					values: N,
					facets: q.column_facets ?? {},
					onChange: I
				},
				filterColumns: {
					size: {
						range: "size",
						value: (e) => e.size
					},
					dur: {
						range: "duration",
						value: (e) => e.duration || null
					},
					source: {
						values: (e) => e.location,
						option: (e) => {
							let t = ne(e);
							return {
								label: l[e] || e,
								leading: /* @__PURE__ */ (0, z.jsx)(t, {})
							};
						}
					},
					reason: {
						values: (e) => B(e.reason),
						option: (e) => ({ label: e === "none" ? j("cleanup:shared.none") : e })
					}
				},
				sort: {
					options: K.sorts.map(({ key: e, label: t }) => ({
						id: e,
						label: t
					})),
					sorting: K.sorting,
					onChange: K.setSorting
				},
				rowLabel: (e) => j("manage:hdUpgrades.selectVideo", { title: o.javDisplayName(e) }),
				onPick: (e, t) => $(e.id, t),
				onPickAll: Q,
				onRectangle: Y,
				cells: {
					name: (e) => /* @__PURE__ */ (0, z.jsx)(h, {
						name: o.javDisplayName(e),
						onOpen: () => o.openItem(e.id),
						picture: /* @__PURE__ */ (0, z.jsx)(g, {
							src: D(e),
							glyph: "film"
						})
					}),
					library: (e) => /* @__PURE__ */ (0, z.jsx)(u, { item: e }),
					source: (e) => /* @__PURE__ */ (0, z.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, z.jsx)("span", {
							className: "contents",
							dangerouslySetInnerHTML: { __html: o.srcBadge(e.location, e.cost) }
						}), l[e.location] ?? e.location]
					}),
					dur: (e) => w(e.duration) || "—",
					size: (e) => Number(e.size) > 0 ? T(Number(e.size)) : "—",
					reason: (e) => e.reason || "—",
					actions: (t) => /* @__PURE__ */ (0, z.jsxs)("span", {
						className: "flex gap-2",
						children: [t.code ? /* @__PURE__ */ (0, z.jsx)(e, {
							variant: "secondary",
							size: "small",
							onClick: () => c(V(t, o.javDisplayName(t))),
							children: j("manage:resourceSearch.searchTorrents")
						}) : null, /* @__PURE__ */ (0, z.jsx)(e, {
							variant: "secondary",
							size: "small",
							onClick: () => o.openItem(t.id),
							children: j("manage:hdUpgrades.viewEditions")
						})]
					})
				}
			}) : J.length ? /* @__PURE__ */ (0, z.jsx)("div", {
				"data-media-grid": "",
				"data-select-mode": O ? "" : void 0,
				...le,
				children: J.map((e) => /* @__PURE__ */ (0, z.jsx)(ce, {
					item: e,
					...o,
					searchResources: c,
					picked: x.has(e.id),
					onPick: (t) => $(e.id, t),
					selecting: O
				}, e.id))
			}) : /* @__PURE__ */ (0, z.jsx)(i, {
				icon: f,
				title: j("shell:dataTable.empty"),
				children: null
			}),
			/* @__PURE__ */ (0, z.jsxs)(y, {
				visible: X.length > 0,
				label: j("manage:hdUpgrades.dockLabel"),
				count: j("manage:hdUpgrades.selectedCount", { count: X.length }),
				actions: [],
				children: [/* @__PURE__ */ (0, z.jsx)(e, {
					size: "small",
					variant: "secondary",
					disabled: !Z.length,
					onClick: () => A(Z.map((e) => ({
						id: e.id,
						code: e.code,
						title: o.javDisplayName(e),
						release_date: void 0
					}))),
					children: j("manage:resourceSearch.searchTorrents")
				}), /* @__PURE__ */ (0, z.jsx)(e, {
					size: "small",
					variant: "ghost",
					onClick: ee,
					children: j("manage:hdUpgrades.clearSelection")
				})]
			}),
			/* @__PURE__ */ (0, z.jsx)(se, {
				items: k,
				close: () => A(null),
				readOnly: !1,
				receipt: t
			}),
			G.isError ? /* @__PURE__ */ (0, z.jsx)(d, {
				tone: "error",
				children: C(G.error)
			}) : null,
			Number(q.total || 0) > J.length ? /* @__PURE__ */ (0, z.jsx)("p", {
				className: "mt-6 text-center text-caption-1-regular text-text-secondary",
				children: j("manage:hdUpgrades.showingFirst", {
					shown: J.length.toLocaleString(),
					count: Number(q.total)
				})
			}) : null,
			/* @__PURE__ */ (0, z.jsx)(r, {
				prefill: s,
				close: () => c(null),
				receipt: t
			})
		]
	});
}
export { U as QualityGoalsPage };

//# debugId=d7c5acf0-ab1b-4769-badc-9c9982b7d3b1