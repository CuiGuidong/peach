(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "60b99bc5-45a4-44d5-b1da-521845e457e8", e._sentryDebugIdIdentifier = "sentry-dbid-60b99bc5-45a4-44d5-b1da-521845e457e8");
	} catch {}
})();
import { Button as e, CardTags as t, CatalogViewToggle as n, CloudDownloadDialog as r, EmptyState as i, FilterGlassRows as a, Gg as o, H7 as s, Icon as c, LOC as l, ListLibrary as u, Note as d, OA as f, QUALITY_GOALS_KEY as p, QueueFilterChips as m, QueueIdentity as h, QueuePicture as g, QueueTable as _, SelectAllButton as v, SelectionDock as y, SortKeys as b, __toESM as x, enterPageSelection as S, errorMessage as C, exitPageSelection as ee, fetchQualityGoals as w, fmtDur as T, fmtSize as E, previewUrl as D, providerIcon as O, pv as k, queueContentSkeletonHtml as te, require_jsx_runtime as A, require_react as j, t as M, useCatalogView as ne, useDense as N, useLibraryTints as P, usePageSelection as re, useQuery as ie, useQueueSort as ae, useRectangleSelection as oe, useWorkContextMenu as F } from "./peach-app.js";
import { Page as I } from "./peach-app.page-QAncjzM1.js";
import { JavBatchResources as se } from "./peach-app.jav-batch-resources-B1BkGgyg.js";
// src/react/quality-goals/quality-goals-page.tsx
var L = /* @__PURE__ */ x(j(), 1), R = A(), z = (e) => (e || "").split(/\s*\/\s*/).map((e) => e.trim()).filter(Boolean);
function B(e, t) {
	return {
		code: e.code,
		title: t,
		origin: `asset:${e.id}`,
		searchReason: e.reason || "",
		duration: e.duration,
		cover: D(e)
	};
}
function V(e, t, n, r, i) {
	let a = [{
		id: "open",
		label: M("manage:hdUpgrades.viewEditions"),
		icon: o,
		run: n
	}, {
		id: "select",
		label: M(t ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: s,
		run: i
	}];
	return e.code && a.splice(1, 0, {
		id: "search",
		label: M("manage:resourceSearch.searchTorrents"),
		icon: k,
		run: r
	}), a;
}
function ce({ item: n, openItem: r, searchResources: i, javTitleHtml: a, javDisplayName: o, srcBadge: s, picked: d, onPick: f, selecting: p }) {
	let m = F(), h = N(), [g, _] = (0, L.useState)(!1), v = () => r(n.id), y = o(n), b = () => i(B(n, y)), x = {
		key: n.id,
		operations: V(n, d, v, b, () => f(!d))
	}, S = P(), C = n.library_id && S.get(n.library_id)?.color ? n.library_id : void 0;
	return /* @__PURE__ */ (0, R.jsxs)("article", {
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
			e.target.closest("[data-work-context-menu]") || (p || e.shiftKey || e.ctrlKey || e.metaKey) && (e.preventDefault(), e.stopPropagation(), f(!d));
		},
		children: [
			m.menu,
			/* @__PURE__ */ (0, R.jsxs)("button", {
				type: "button",
				"data-media-pic": "",
				onClick: v,
				"aria-label": M("manage:hdUpgrades.openVideo", { title: y }),
				style: { "--card-ratio": "1.7777777777777777" },
				children: [
					g ? /* @__PURE__ */ (0, R.jsx)("span", {
						"data-media-nopic": "",
						children: M("manage:hdUpgrades.noPreview")
					}) : /* @__PURE__ */ (0, R.jsx)("span", {
						"data-media-art": "thumb",
						children: /* @__PURE__ */ (0, R.jsx)("img", {
							className: "absolute inset-0 size-full object-contain",
							src: D(n),
							alt: "",
							loading: "lazy",
							"data-goal-cover": "",
							onError: () => _(!0)
						})
					}),
					/* @__PURE__ */ (0, R.jsx)("span", {
						"data-media-badge": "",
						dangerouslySetInnerHTML: { __html: s(n.location, n.cost) }
					}),
					Number(n.duration) > 0 ? /* @__PURE__ */ (0, R.jsx)("span", {
						"data-media-duration": "",
						children: T(n.duration)
					}) : null,
					/* @__PURE__ */ (0, R.jsx)("span", {
						"data-media-check": "",
						children: /* @__PURE__ */ (0, R.jsx)(c, { name: "check" })
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				"data-media-meta": "",
				children: /* @__PURE__ */ (0, R.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, R.jsx)("button", {
							type: "button",
							"data-media-title": "",
							onClick: v,
							title: y,
							dangerouslySetInnerHTML: { __html: a(n) }
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							"data-media-byline": "",
							children: [/* @__PURE__ */ (0, R.jsx)("span", {
								"data-media-who": "",
								children: n.library_id ? /* @__PURE__ */ (0, R.jsx)(u, { item: n }) : l[n.location] ?? n.location
							}), /* @__PURE__ */ (0, R.jsx)("span", {
								"data-media-facts": "",
								children: /* @__PURE__ */ (0, R.jsxs)("span", {
									"data-media-size": "",
									children: [/* @__PURE__ */ (0, R.jsx)(c, { name: "hard-drive" }), Number(n.size) > 0 ? E(Number(n.size)) : M("manage:hdUpgrades.unknownSize")]
								})
							})]
						}),
						/* @__PURE__ */ (0, R.jsx)(t, {
							tags: z(n.reason),
							label: (e) => e,
							readOnly: !0,
							title: n.reason || void 0
						})
					]
				})
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				"data-jav-actions": "",
				className: "flex flex-wrap gap-2",
				children: [n.code ? /* @__PURE__ */ (0, R.jsx)(e, {
					variant: "secondary",
					size: h ? "small" : "medium",
					onClick: b,
					children: M("manage:resourceSearch.searchTorrents")
				}) : null, /* @__PURE__ */ (0, R.jsx)(e, {
					variant: "secondary",
					size: h ? "small" : "medium",
					onClick: v,
					children: M("manage:hdUpgrades.viewEditions")
				})]
			})
		]
	});
}
function H({ toast: t, ...o }) {
	let [s, c] = (0, L.useState)(null), [x, k] = (0, L.useState)(/* @__PURE__ */ new Map()), A = re(() => k(/* @__PURE__ */ new Map())), [j, N] = (0, L.useState)(null), P = ne(), [F, H] = (0, L.useState)({}), U = JSON.stringify(F), W = U !== "{}", G = ie({
		queryKey: W ? [...p, U] : p,
		queryFn: ({ signal: e }) => w(e, W ? F : void 0),
		placeholderData: (e) => e
	}), K = ae("quality-goals", {
		size: (e) => Number(e.size || 0),
		dur: (e) => Number(e.duration || 0),
		new: (e) => e.id
	}), q = G.data, J = K.sort(q?.items || []), Y = (e, t) => {
		let n = new Set(e);
		k((e) => new Map([...t ? e : [], ...J.filter((e) => n.has(e.id)).map((e) => [e.id, e])]));
	}, le = oe(A && !G.isFetching && !G.isError ? (e, t) => Y(e.map(Number), t) : void 0);
	if (G.isPending) return /* @__PURE__ */ (0, R.jsx)(I, { children: /* @__PURE__ */ (0, R.jsx)("div", { dangerouslySetInnerHTML: { __html: te("quality-goals", M("shell:spinner.loading"), ["w-20", "w-24"]) } }) });
	if (!q) return /* @__PURE__ */ (0, R.jsx)(I, { children: /* @__PURE__ */ (0, R.jsx)(d, {
		tone: "error",
		title: M("manage:hdUpgrades.loadFailed"),
		children: G.error ? C(G.error) : M("manage:hdUpgrades.notFound")
	}) });
	if (!J.length && P !== "list" && !W) return /* @__PURE__ */ (0, R.jsx)(I, { children: /* @__PURE__ */ (0, R.jsx)(i, {
		icon: f,
		title: M("manage:hdUpgrades.emptyTitle"),
		children: M("manage:hdUpgrades.emptyBody")
	}) });
	let X = [...x.values()], Z = X.filter((e) => e.code), Q = (e) => {
		G.isFetching || G.isError || (e && S(), k((t) => {
			let n = new Map(t);
			for (let t of J) e ? n.set(t.id, t) : n.delete(t.id);
			return n;
		}));
	}, $ = (e, t) => {
		t && S(), k((n) => {
			let r = new Map(n), i = J.find((t) => t.id === e);
			return t && i ? r.set(e, i) : r.delete(e), r;
		});
	};
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		"data-quality-goals": "",
		className: "mx-auto w-full max-w-board",
		children: [
			/* @__PURE__ */ (0, R.jsx)(a, {
				label: M("manage:hdUpgrades.summaryLabel"),
				topLabel: M("manage:hdUpgrades.summaryLabel"),
				top: null,
				attrs: {
					"data-catalog-frame": "",
					"data-filter-frame": ""
				},
				bottomClassName: "min-h-12",
				bottom: /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("span", {
					"data-catalog-summary": "",
					children: [/* @__PURE__ */ (0, R.jsxs)("span", {
						"data-catalog-readout": "",
						role: "status",
						children: [
							M("manage:hdUpgrades.summaryLabel"),
							" · ",
							M("manage:hdUpgrades.videoCount", { count: Number(q.total || 0) })
						]
					}), /* @__PURE__ */ (0, R.jsx)(v, {
						label: M("manage:hdUpgrades.selectAll"),
						picked: J.filter((e) => x.has(e.id)).length,
						total: J.length,
						onChange: Q
					})]
				}), /* @__PURE__ */ (0, R.jsxs)("span", {
					"data-entity-sorts": "",
					children: [/* @__PURE__ */ (0, R.jsx)(n, {}), /* @__PURE__ */ (0, R.jsx)(b, {
						sorts: K.sorts,
						onSort: K.onSort
					})]
				})] })
			}),
			P === "cards" && W ? /* @__PURE__ */ (0, R.jsx)("div", {
				className: "mb-4",
				children: /* @__PURE__ */ (0, R.jsx)(m, {
					table: "quality-goals",
					filters: F,
					onChange: H,
					valueLabel: (e, t) => e === "source" ? l[t] ?? t : t
				})
			}) : null,
			P === "list" ? /* @__PURE__ */ (0, R.jsx)(_, {
				table: "quality-goals",
				label: M("manage:hdUpgrades.summaryLabel"),
				items: J,
				selected: new Set(x.keys()),
				selecting: A,
				contextOperations: (e) => V(e, x.has(e.id), () => o.openItem(e.id), () => c(B(e, o.javDisplayName(e))), () => $(e.id, !x.has(e.id))),
				busy: G.isFetching,
				filters: {
					values: F,
					facets: q.column_facets ?? {},
					onChange: H
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
							let t = O(e);
							return {
								label: l[e] || e,
								leading: /* @__PURE__ */ (0, R.jsx)(t, {})
							};
						}
					},
					reason: {
						values: (e) => z(e.reason),
						option: (e) => ({ label: e === "none" ? M("cleanup:shared.none") : e })
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
				rowLabel: (e) => M("manage:hdUpgrades.selectVideo", { title: o.javDisplayName(e) }),
				onPick: (e, t) => $(e.id, t),
				onPickAll: Q,
				onRectangle: Y,
				cells: {
					name: (e) => /* @__PURE__ */ (0, R.jsx)(h, {
						name: o.javDisplayName(e),
						onOpen: () => o.openItem(e.id),
						picture: /* @__PURE__ */ (0, R.jsx)(g, {
							src: D(e),
							glyph: "film"
						})
					}),
					library: (e) => /* @__PURE__ */ (0, R.jsx)(u, { item: e }),
					source: (e) => /* @__PURE__ */ (0, R.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, R.jsx)("span", {
							className: "contents",
							dangerouslySetInnerHTML: { __html: o.srcBadge(e.location, e.cost) }
						}), l[e.location] ?? e.location]
					}),
					dur: (e) => T(e.duration) || "—",
					size: (e) => Number(e.size) > 0 ? E(Number(e.size)) : "—",
					reason: (e) => e.reason || "—",
					actions: (t) => /* @__PURE__ */ (0, R.jsxs)("span", {
						className: "flex gap-2",
						children: [t.code ? /* @__PURE__ */ (0, R.jsx)(e, {
							variant: "secondary",
							size: "small",
							onClick: () => c(B(t, o.javDisplayName(t))),
							children: M("manage:resourceSearch.searchTorrents")
						}) : null, /* @__PURE__ */ (0, R.jsx)(e, {
							variant: "secondary",
							size: "small",
							onClick: () => o.openItem(t.id),
							children: M("manage:hdUpgrades.viewEditions")
						})]
					})
				}
			}) : J.length ? /* @__PURE__ */ (0, R.jsx)("div", {
				"data-media-grid": "",
				"data-select-mode": A ? "" : void 0,
				...le,
				children: J.map((e) => /* @__PURE__ */ (0, R.jsx)(ce, {
					item: e,
					...o,
					searchResources: c,
					picked: x.has(e.id),
					onPick: (t) => $(e.id, t),
					selecting: A
				}, e.id))
			}) : /* @__PURE__ */ (0, R.jsx)(i, {
				icon: f,
				title: M("shell:dataTable.empty"),
				children: null
			}),
			/* @__PURE__ */ (0, R.jsxs)(y, {
				visible: X.length > 0,
				label: M("manage:hdUpgrades.dockLabel"),
				count: M("manage:hdUpgrades.selectedCount", { count: X.length }),
				actions: [],
				children: [/* @__PURE__ */ (0, R.jsx)(e, {
					size: "small",
					variant: "secondary",
					disabled: !Z.length,
					onClick: () => N(Z.map((e) => ({
						id: e.id,
						code: e.code,
						title: o.javDisplayName(e),
						release_date: void 0
					}))),
					children: M("manage:resourceSearch.searchTorrents")
				}), /* @__PURE__ */ (0, R.jsx)(e, {
					size: "small",
					variant: "ghost",
					onClick: ee,
					children: M("manage:hdUpgrades.clearSelection")
				})]
			}),
			/* @__PURE__ */ (0, R.jsx)(se, {
				items: j,
				close: () => N(null),
				readOnly: !1,
				receipt: t
			}),
			G.isError ? /* @__PURE__ */ (0, R.jsx)(d, {
				tone: "error",
				children: C(G.error)
			}) : null,
			Number(q.total || 0) > J.length ? /* @__PURE__ */ (0, R.jsx)("p", {
				className: "mt-6 text-center text-caption-1-regular text-text-secondary",
				children: M("manage:hdUpgrades.showingFirst", {
					shown: J.length.toLocaleString(),
					count: Number(q.total)
				})
			}) : null,
			/* @__PURE__ */ (0, R.jsx)(r, {
				prefill: s,
				close: () => c(null),
				receipt: t
			})
		]
	});
}
export { H as QualityGoalsPage };

//# debugId=60b99bc5-45a4-44d5-b1da-521845e457e8