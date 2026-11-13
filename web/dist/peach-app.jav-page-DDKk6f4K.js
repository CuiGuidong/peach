(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d2850108-54b6-4ee2-ad57-1bd680000de7", e._sentryDebugIdIdentifier = "sentry-dbid-d2850108-54b6-4ee2-ad57-1bd680000de7");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ArtSlot as s, Button as c, ButtonLink as l, Bx as u, COVER_STATE_TITLE as d, CatalogViewToggle as f, Checkbox as p, ChevronSortDown as m, Chip as h, CloudDownloadDialog as g, CoverQueue as _, DISCOVERY_METADATA_KEY as v, DISCOVERY_SORTS as y, DOWNLOADS_KEY as b, DOWNLOADS_URL as x, DataTableFooter as S, DataTableFrame as C, E3 as w, EmptyFocusButton as T, EmptyState as E, FilterGlassRows as ee, FilterIconButton as D, FilterPill as te, GlassPill as ne, Help as O, IndexSearch as k, Input as re, JAV_LAYOUTS as ie, JAV_RECOMMENDATION_GRID as ae, JAV_SELECTION_EVENT as A, JavHeader as j, LibraryShortcuts as M, M6 as N, ModalFrame as oe, Note as P, P7 as F, PHASES as I, RELEASE_COLUMN_VISIBILITY_KEY as L, RELEASE_COLUMN_WIDTHS_KEY as se, RELEASE_PAGE_SIZES as ce, RELEASE_SORTS as R, RELEASE_SORT_COLUMNS as z, SEGMENT as B, SEGMENTED_TRACK as V, SegmentedRadioGroup as H, Segments as le, SelectionDock as ue, Shuffle as de, SortKeys as fe, SourceAvatar as pe, Table as me, TableColumnControls as U, TableColumnResizer as W, TaskProgress as he, WANTS_KEY as ge, WantMagnets as _e, Wt as ve, __toESM as ye, addWant as be, apiGet as xe, appSettingsStore as Se, avatarInner as Ce, busyProps as G, cachedMagnetStates as we, cardClass as Te, cardRatio as Ee, catalogListSkeletonCellHtml as De, composingKey as Oe, controlDiscoveryMetadata as ke, controlReleaseMetadata as Ae, coverArrived as je, coverFetching as Me, coverFetchingHtml as Ne, coverReason as Pe, coverStateAction as Fe, coverUrl as Ie, discoveryArtwork as Le, discoveryKey as Re, discoveryScore as ze, entityDisplayName as Be, entityFaceImg as Ve, entityPath as He, errorMessage as K, esc as Ue, facePos as We, fetchCoverNow as Ge, fetchDiscoveries as Ke, fetchDiscoveryMetadata as qe, fetchReleases as Je, fetchWants as Ye, firstGrapheme as Xe, fmtDur as Ze, gridLayout as Qe, invalidateWants as q, javContentSkeleton as $e, javLayout as et, javTagSkeleton as tt, jobText as nt, joinList as rt, keepPreviousData as it, leadingGraphemes as at, logoUrl as ot, metadataInterval as st, pageWindow as ct, qE as lt, queryClient as ut, recommendationScore as dt, relayoutCovers as ft, releaseColumns as pt, releaseFilters as mt, releaseKey as ht, removeWants as gt, require_jsx_runtime as _t, require_react as vt, resetWants as yt, searchNote as bt, selectRange as xt, selectionSummary as St, serverLabelList as Ct, spriteGlyph as wt, storeJavLayout as Tt, suppressShiftTextSelection as Et, t as J, textLang as Dt, tierPlaceholdersHtml as Ot, useAction as Y, useCatalogView as kt, useEntityNames as At, useQuery as X, useTablePreferences as jt, wantName as Mt, wireHorizontalScroller as Nt, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as Pt } from "./peach-app.source-view--K6uWAMi.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ ye(vt(), 1), $ = _t(), Ft = {
	code: J("catalog:wants.originManual"),
	feed: J("catalog:entityHero.subscribeNewReleases"),
	follow: J("catalog:entityHero.following")
}, It = [
	["all", J("catalog:shared.all")],
	["available", J("catalog:wants.hasMagnet")],
	["missing", J("catalog:wants.noMagnet")]
], Lt = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Ft[e.origin]
].filter(Boolean).join(" · ");
function Rt({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: J("catalog:shared.noCover")
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
function zt({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: Te({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(Rt, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, $.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: Mt(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					Lt(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Lt(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: bt(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(Pt, {
						text: e.scrape_error,
						prefix: J("catalog:wants.metadataNotFound"),
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(l, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: ve,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: J("catalog:wants.sourcePage")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								leadingIcon: N,
								disabled: t,
								...G(n === `remove:${e.id}`),
								onClick: i,
								children: J("catalog:shared.remove")
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...G(n === `reset:${e.id}`),
								onClick: r,
								children: J("catalog:wants.searchAgain")
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: J("catalog:shared.searchTorrents")
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(_e, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: s,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Bt({ phase: e, label: t, rows: n, row: r }) {
	let [i, a] = (0, Q.useState)(1), [s, l] = (0, Q.useState)(20), [u, d] = (0, Q.useState)("all"), f = we(n), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = n.filter(p), h = e !== "searching" || u === "all" ? n : n.filter((e) => p(e) === (u === "available")), g = ct(h.length, s, i);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(H, {
					name: "want-magnet-filter",
					"aria-label": J("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: u,
					className: V,
					onChange: (e) => {
						d(e), a(1);
					},
					children: It.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: B,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? m.length : n.length - m.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			h.length ? null : /* @__PURE__ */ (0, $.jsx)(E, {
				size: "compact",
				icon: lt,
				title: J("catalog:wants.noFilterMatches"),
				actions: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: () => {
						d("all"), a(1);
					},
					children: J("catalog:shared.viewAll")
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: h.slice(g.start, g.end).map(r)
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-want-pager": "",
				children: /* @__PURE__ */ (0, $.jsx)(S, {
					label: t,
					total: g.total,
					pagination: {
						pageIndex: g.page - 1,
						pageSize: s
					},
					onChange: (e) => {
						l(e.pageSize), a(e.pageIndex + 1);
					},
					unit: J("catalog:wants.itemUnit")
				})
			})
		]
	});
}
function Vt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), l = Y(), u = X({
		queryKey: ge,
		queryFn: ({ signal: e }) => Ye(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => be({ code: n }, e), (e) => {
			t(e.created ? J("catalog:wants.added", { name: Mt(e.want) }) : J("catalog:wants.alreadyAdded", { name: Mt(e.want) })), a(""), q();
		});
	}, f = (e) => {
		e.key === "Enter" && !Oe(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => gt([e.id], t), () => {
			t(J("catalog:wants.removed", { name: Mt(e) })), q();
		});
	}, m = (e) => {
		l.run(`reset:${e.id}`, (t) => yt([e.id], t), () => {
			t(J("catalog:wants.backToSearching", { name: Mt(e) })), q();
		});
	}, h = u.data, _ = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), v = X({
		queryKey: b,
		queryFn: ({ signal: e }) => xe(`${x}?limit=100`, e),
		enabled: _.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), y = v.data?.providers.filter((e) => e.configured) || [], S = y[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Te({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: J("catalog:wants.addByCode")
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, $.jsx)(re, {
								"aria-label": J("catalog:shared.code"),
								placeholder: J("catalog:wants.codePlaceholder"),
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(c, {
							variant: "primary",
							disabled: e || !i.trim(),
							...G(l.busy === "add"),
							onClick: d,
							children: J("catalog:shared.add")
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(P, {
						tone: "error",
						title: J("catalog:wants.actionFailed"),
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:wants.loadFailed"),
				children: K(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: $e("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(O, {
				role: "status",
				children: J("catalog:wants.fetchingNew")
			}) : null,
			v.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:wants.downloadSettingsFailed"),
				children: K(v.error)
			}) : null,
			v.data && !y.length ? /* @__PURE__ */ (0, $.jsxs)(P, {
				tone: "neutral",
				children: [
					J("shell:downloadChannels.notConfigured"),
					J("shell:format.sentenceGap"),
					/* @__PURE__ */ (0, $.jsx)("a", {
						href: "/settings/downloads",
						children: J("shell:downloadChannels.settingsLink")
					})
				]
			}) : null,
			v.data && !v.data.available ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "neutral",
				children: J("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !_.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				size: "compact",
				icon: lt,
				title: J(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: r,
					children: J("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(T, {
					target: `input[aria-label="${J("catalog:shared.code")}"]`,
					children: J("catalog:wants.addWork")
				}) : void 0,
				children: J(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			I.map(([n, r]) => {
				let i = _.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Bt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(zt, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: v.data,
						provider: S,
						toast: t,
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
			/* @__PURE__ */ (0, $.jsx)(g, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: S
			})
		]
	});
}
// src/react/jav/jav-batch-resources.tsx
function Ht({ items: t, close: n, readOnly: r, receipt: i }) {
	let a = X({
		queryKey: b,
		queryFn: ({ signal: e }) => xe(`${x}?limit=50`, e),
		enabled: !!t
	}), o = a.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)(oe, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || n();
		},
		width: "collections",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-separator-border bg-background-full px-5 py-4",
			children: [/* @__PURE__ */ (0, $.jsxs)(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": "jav.resources.title",
						children: J("catalog:javBatch.title")
					}),
					" · ",
					J("catalog:countLabel.works", { count: t?.length || 0 })
				]
			}), /* @__PURE__ */ (0, $.jsx)(c, {
				iconOnly: !0,
				variant: "ghost",
				leadingIcon: F,
				"aria-label": J("catalog:javBatch.close"),
				onClick: n
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-6 p-5",
			children: [a.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: J("catalog:javBatch.downloadSettingsFailed", { error: K(a.error) })
			}) : null, t?.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-headline-medium text-text-primary",
						children: e.code
					}),
					e.title ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.title
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(_e, {
						want: {
							id: e.id,
							code: e.code,
							title: e.title,
							release_date: e.release_date || null
						},
						queryUrl: `/api/jav/resources?code=${encodeURIComponent(e.code)}`,
						eager: !0,
						readOnly: r,
						downloads: a.data,
						provider: o,
						toast: i
					})
				]
			}, e.code))]
		})]
	});
}
// src/react/jav/jav-selection.tsx
function Ut(e) {
	let t = new MutationObserver(e);
	return t.observe(document.body, {
		attributes: !0,
		attributeFilter: ["data-density"]
	}), () => t.disconnect();
}
var Wt = () => document.body.dataset.density === "dense", Gt = (0, Q.createContext)(null), Kt = () => (0, Q.useContext)(Gt);
function qt(e) {
	let t = Kt()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Jt({ children: e, readOnly: t, receipt: n }) {
	let r = (0, Q.useSyncExternalStore)(Ut, Wt, () => !1), [i, a] = (0, Q.useState)(!1), [o, s] = (0, Q.useState)(/* @__PURE__ */ new Map()), [l, u] = (0, Q.useState)([]), [d, f] = (0, Q.useState)(null), p = (0, Q.useRef)(null), m = Y(), h = new Set(o.keys()), g = St(h, l.map((e) => e.code)), _ = (0, Q.useCallback)((e) => {
		u((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), s((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), v = m.cancel, y = (0, Q.useCallback)(() => {
		v(), a(!1), s(/* @__PURE__ */ new Map()), p.current = null;
	}, [v]), b = () => s((e) => {
		let t = new Map(e);
		return l.forEach((e) => g.all ? t.delete(e.code) : t.set(e.code, e)), t;
	});
	(0, Q.useEffect)(() => {
		let e = () => {
			i ? y() : a(!0);
		};
		return window.addEventListener(A, e), () => window.removeEventListener(A, e);
	}, [i, y]), (0, Q.useEffect)(() => (i || (s(/* @__PURE__ */ new Map()), p.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(i)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [i]), (0, Q.useEffect)(() => {
		if (!i) return;
		let e = (e) => {
			e.target.closest("input,textarea,[contenteditable]:not([contenteditable=\"false\"]),[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), s((e) => new Map([...e, ...l.map((e) => [e.code, e])]))));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		i,
		y,
		l
	]);
	let x = (e, t = !1) => {
		a(!0);
		let n = p.current;
		p.current = e.code, s((r) => {
			let i = new Set(r.keys());
			xt(i, l.map((e) => e.code), n, e.code, t);
			let a = new Map([
				...r,
				...l.map((e) => [e.code, e]),
				[e.code, e]
			]);
			return new Map([...i].map((e) => [e, a.get(e)]));
		});
	}, S = [...o.values()].filter((e) => !e.wanted && !e.asset_id), C = () => {
		m.run("want", async (e) => {
			let t = 0;
			try {
				for (let n of S) {
					e.throwIfAborted();
					try {
						await be({ code: n.code }, e);
					} catch (e) {
						throw Error(J("catalog:javSelection.wantPartialFailed", {
							count: t,
							code: n.code,
							error: K(e)
						}));
					}
					e.throwIfAborted(), t++, s((e) => {
						let t = new Map(e);
						return t.delete(n.code), t;
					});
				}
				return t;
			} finally {
				q();
			}
		}, (e) => n(J("catalog:javSelection.wantAdded", { count: e })));
	};
	return /* @__PURE__ */ (0, $.jsxs)(Gt.Provider, {
		value: {
			dense: r,
			mode: i,
			selected: h,
			toggle: x,
			visible: _,
			selectPage: b,
			all: g.all,
			mixed: g.mixed
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-selection": "",
				"data-select-mode": i ? "" : void 0,
				className: "flex min-w-0 flex-col gap-4",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsxs)(ue, {
				visible: i,
				count: J("catalog:javSelection.selectedCount", { count: o.size }),
				label: J("catalog:javSelection.dockLabel"),
				children: [
					m.error ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						className: "w-full px-2 text-caption-1-regular text-text-error-primary",
						children: m.error
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !l.length || !!m.busy,
						onClick: b,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `jav.selection.page.${g.all ? "clear" : "all"}`,
							children: g.all ? J("catalog:javSelection.deselectPage") : J("catalog:javSelection.selectPage")
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: t || !S.length,
						...G(m.busy === "want"),
						onClick: C,
						children: J("catalog:javSelection.addToWants")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !o.size || !!m.busy,
						onClick: () => f([...o.values()]),
						children: J("catalog:shared.searchTorrents")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "ghost",
						onClick: y,
						children: J("catalog:javSelection.exit")
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(Ht, {
				items: d,
				close: () => f(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Yt({ item: e }) {
	At();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(pe, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: Ce(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: He("performer", t.name, t.id),
			"aria-label": J("catalog:javDiscovery.openActress", { name: Be("performer", t.name, t.id) }),
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: Be("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ (0, $.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-card.tsx
var Xt = (e) => ({
	...e,
	cover: e.has_cover ? Ie(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Zt = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Qt({ item: e, readOnly: t }) {
	let n = Y(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(Me.subscribe, Me.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: J("catalog:shared.noCover")
	});
	if (a === "fetching" || Me.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Ne() } });
	let o = () => {
		n.run("cover", (t) => Ge(e.code, t), (t) => {
			t.has_cover ? je(e.code, t) : i(t.message || J("catalog:javDiscovery.noOfficialCover"));
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || Pe(e);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": s,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: d[s]
			}),
			l ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(c, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: Fe(s)
			})
		]
	});
}
function $t({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: o, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = Kt(), h = m?.selected.has(e.code), g = !!m?.dense, _ = e.performer_refs?.length ? rt(e.performer_refs.map((e) => e.name)) : e.performers, v = Le(e, t, n), y = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-selected": h ? "" : void 0,
		onMouseDown: Et,
		onClickCapture: (t) => {
			m && (m.mode || t.shiftKey || t.ctrlKey || t.metaKey) && (t.preventDefault(), t.stopPropagation(), m.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input") || i(y);
		},
		children: [
			v ? /* @__PURE__ */ (0, $.jsx)("a", {
				href: y,
				"aria-label": J("catalog:javDiscovery.viewDetails", { code: e.code }),
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(y));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Zt,
				children: /* @__PURE__ */ (0, $.jsx)(s, {
					artwork: {
						kind: "cover",
						html: v
					},
					identity: Le(e, "small", n),
					relayout: (e) => ft(e, t)
				})
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Zt,
				children: /* @__PURE__ */ (0, $.jsx)(Qt, {
					item: e,
					readOnly: r
				})
			}),
			m?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": J("catalog:javDiscovery.select", { code: e.code }),
				"aria-pressed": !!h,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Yt, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || J("catalog:javDiscovery.titleNotFound")}`,
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Dt(e.title),
									children: e.title
								}) : J("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: He("performer", e.performer_refs[0].name),
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || _ })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-who-more": "",
									children: J("catalog:javDiscovery.morePeople", {
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
								"aria-pressed": a === e,
								onClick: () => o(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			m?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": g ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(l, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: g ? "small" : "medium",
						iconOnly: g,
						"aria-label": J("catalog:shared.viewOnSite"),
						title: J("catalog:shared.viewOnSite"),
						leadingIcon: g ? ve : void 0,
						trailingIcon: g ? void 0 : ve,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: g ? null : J("catalog:shared.viewOnSite")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "ghost",
						size: g ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...G(u),
						onClick: d,
						children: e.asset_id ? J("catalog:javWant.imported") : e.wanted ? J("catalog:javWant.wanted") : J("catalog:javWant.want")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "secondary",
						size: g ? "small" : "medium",
						onClick: f,
						children: J("catalog:shared.searchTorrents")
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var en = {
	widths: se,
	visibility: L
};
function tn({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: ot(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: at(e?.name || "", 1)
	});
}
function nn({ items: e, waiting: o, filters: l, studios: u, javImage: f, readOnly: h, navigate: g, onTag: _, onSort: v, wanting: y, onWant: b, onResource: x }) {
	let S = Kt(), w = jt("jav-releases", pt, en), T = pt.filter((e) => e.required || w.visibility[e.id] !== !1), E = Object.entries(z).find(([, e]) => e === l.sort)?.[0], ee = new Map(u.map((e) => [e.name, e])), D = (e) => (t) => {
		t.preventDefault(), S?.mode || t.shiftKey || t.ctrlKey || t.metaKey ? S?.toggle(e, t.shiftKey) : g(`/works/${encodeURIComponent(e.code)}`);
	}, te = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Le(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: D(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(s, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => ft(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: Pe(t) || void 0,
								children: t.cover_state ? d[t.cover_state] : J("catalog:shared.noCover")
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || J("catalog:javDiscovery.titleNotFound")}`,
							"aria-label": J("catalog:javDiscovery.viewDetails", { code: t.code }),
							onClick: D(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Dt(t.title),
									children: t.title
								}) : J("catalog:javDiscovery.titleNotFound")
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)(Yt, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: He("performer", n),
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}) : /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who-more": "",
						children: J("catalog:javDiscovery.morePeople", {
							count: t.performer_refs.length - 1,
							total: t.performer_refs.length
						})
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ (0, $.jsx)(tn, { studio: ee.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => _(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Ze(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					disabled: h || t.wanted || !!t.asset_id,
					...G(y(t)),
					onClick: () => b(t),
					children: t.wanted ? J("catalog:javWant.wanted") : J("catalog:javWant.want")
				}), /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					onClick: () => x(t),
					children: J("catalog:shared.searchTorrents")
				})]
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap justify-end gap-2",
			role: "toolbar",
			"aria-label": J("catalog:javReleases.toolbar"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(U, {
					preferences: w,
					label: J("catalog:javReleases.list")
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(C, {
			follow: !0,
			preferences: w,
			children: /* @__PURE__ */ (0, $.jsxs)(me, {
				"aria-label": J("catalog:javReleases.list"),
				size: "sm",
				sortDescriptor: E ? {
					column: E,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = z[String(e.column)];
					t && v(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(a, { children: [
					S?.mode ? /* @__PURE__ */ (0, $.jsx)(n, {
						id: "selection",
						width: 44,
						"aria-label": J("catalog:javReleases.selectVideos"),
						children: /* @__PURE__ */ (0, $.jsx)(p, {
							slot: null,
							"aria-label": J("catalog:catalogList.selectAllOnPage"),
							isSelected: S.all,
							isIndeterminate: S.mixed,
							isDisabled: o || !e.length,
							onChange: S.selectPage
						})
					}) : null,
					T.map((e) => /* @__PURE__ */ (0, $.jsx)(n, {
						id: e.id,
						isRowHeader: e.id === "name",
						allowsSorting: e.id in z,
						...w.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [e.label, e.id in z ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, $.jsx)(m, {})
							}) : null]
						}), /* @__PURE__ */ (0, $.jsx)(W, {
							preferences: w,
							id: e.id
						})] })
					}, e.id)),
					/* @__PURE__ */ (0, $.jsx)(n, {
						id: "remaining-space",
						"aria-label": J("catalog:catalogList.rowSpacer"),
						"data-table-space": "",
						width: w.spaceWidth,
						minWidth: 0
					})
				] }), /* @__PURE__ */ (0, $.jsx)(t, {
					renderEmptyState: () => J("catalog:javReleases.noMatches"),
					children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, {}) : null,
							T.map((e) => /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: De(e.id) } }) }, e.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, `skeleton-${t}`)) : e.map((e) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)(p, {
								slot: null,
								"aria-label": J("catalog:javDiscovery.select", { code: e.code }),
								isSelected: S.selected.has(e.code),
								onChange: () => S.toggle(e)
							}) }) : null,
							T.map((t) => /* @__PURE__ */ (0, $.jsx)(i, { children: te(t.id, e) }, t.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var rn = `<div data-catalog-tier="performers" data-skeleton="tiers">${Ot("performer")}</div><div data-catalog-tier="studios">${Ot("studio")}</div>`, an = (e) => `<span data-tier-initial>${Ue(Xe(Be("performer", e.name, e.id)))}</span>${Ve({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: We(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function on({ value: e }) {
	let t = dt(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: J("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(h, {
			color: t.color,
			children: t.label
		})
	});
}
function sn({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: ot(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : at(e.name, 2)
	});
}
var cn = (e) => Ge(e).then((t) => (t.has_cover && je(e, t), t.has_cover));
function ln({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	At();
	let [o, s] = (0, Q.useState)(() => mt(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let d = (e, t) => {
		let n = o[e] === t ? "" : t;
		s((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			size: t === 24 ? "" : String(t)
		}), p.current?.scrollIntoView({ block: "start" });
	}, h = () => {
		s((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			q: "",
			page: 1
		})), Z({
			performer: "",
			studio: "",
			tag: "",
			page: ""
		}), a();
	}, g = (e) => y(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), y = (e, t) => {
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
	}, b = () => {
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
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Nt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let x = Se();
	(0, Q.useSyncExternalStore)(x.subscribe, x.version, x.version);
	let C = et(), w = kt(), T = Ee(Qe({
		active: !0,
		home: !1,
		portrait: !1
	})), D = X({
		queryKey: ht(o),
		queryFn: ({ signal: e }) => Je(o, e),
		placeholderData: it,
		retry: !1,
		refetchOnWindowFocus: !1
	}), O = D.data?.metadata_job, k = (0, Q.useRef)(!1);
	k.current = O?.status === "running";
	let re = ut.getQueryData(v)?.metadata_job, A = X({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: O?.status === "running" || re?.status === "running",
		queryFn: ({ signal: e }) => qe(e),
		refetchInterval: st(() => k.current)
	}), j = A.data && A.dataUpdatedAt >= D.dataUpdatedAt ? A.data.metadata_job : O, M = j?.status === "running", N = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		N.current && !M && D.refetch(), N.current = M;
	}, [M, D]);
	let oe = (0, Q.useRef)(""), F = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.q,
		o.sort,
		o.dir,
		o.seed
	]), I = !D.isPlaceholderData && (D.data?.metadata_unread || 0) > 0 && !M;
	(0, Q.useEffect)(() => {
		I && oe.current !== F && (oe.current = F, Ae("start", o).then(async (e) => {
			await ut.cancelQueries({ queryKey: v }), ut.setQueryData(v, e);
		}).catch(() => {}));
	}, [I, F]);
	let L = Y(), se = (e) => {
		L.run(String(e.id), (t) => be({ code: e.code }, t), () => {
			t(J("catalog:javWant.added")), q(), D.refetch();
		});
	}, z = D.data;
	qt(z?.items || []);
	let B = D.isPending, V = !!(o.performer || o.studio || o.tag || o.q), H = Math.max(1, Math.ceil((z?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!z || D.isPlaceholderData || o.page <= H || (s((e) => ({
			...e,
			page: H
		})), Z({ page: H > 1 ? String(H) : "" }));
	}, [
		z,
		D.isPlaceholderData,
		o.page,
		H
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": J("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": B || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			B ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: rn }
			}) : null,
			z && (z.facets.performers.length || z.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [z.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": J("catalog:javReleases.filterByActress"),
					children: z.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: J("catalog:javReleases.facetCount", {
							name: Be("performer", e.name, e.id),
							count: e.count
						}),
						onClick: () => d("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: an(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: Be("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, z.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": J("catalog:javReleases.filterByLabel"),
					children: z.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: J("catalog:javReleases.facetCount", {
							name: e.name,
							count: e.count
						}),
						onClick: () => d("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(sn, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(ee, {
				label: J("catalog:javReleases.filtersLabel"),
				topLabel: J("catalog:javReleases.tagsLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: B,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: B ? { __html: tt() } : void 0,
						children: B ? null : z?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(te, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => d("tag", e.name),
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
						children: B ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : V ? J("catalog:javReleases.matchedCount", {
							matched: z?.total || 0,
							count: z?.candidate_total || 0
						}) : J("catalog:countLabel.works", { count: z?.total || 0 })
					}),
					V ? /* @__PURE__ */ (0, $.jsx)(ne, {
						onPress: h,
						children: J("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(de, {
								onPress: b,
								busy: o.sort === "random" && D.isFetching
							}),
							w === "cards" ? /* @__PURE__ */ (0, $.jsx)(le, {
								label: J("catalog:entityFilter.javCardLayout"),
								value: C,
								options: ie,
								onChange: Tt
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(f, {}),
							/* @__PURE__ */ (0, $.jsx)(fe, {
								sorts: R.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === o.sort,
									dir: o.dir
								})),
								onSort: (e) => g(e)
							})
						]
					})
				] })
			}),
			B && w === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: $e("discover", C) }
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:javReleases.failed"),
				children: K(D.error)
			}) : null,
			M && j ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(he, {
					label: J("catalog:javMetadata.loadingProgress", {
						completed: j.completed,
						count: j.total
					}),
					value: j.completed,
					total: j.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(_, {
				scope: J("catalog:javReleases.coverQueueScope"),
				fetchOne: cn,
				codes: (z?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? J("catalog:javReleases.coversFetched", { count: n }) : J("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), D.refetch();
				}
			}),
			!B && !D.error && !z?.items.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				icon: u,
				title: J(V ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: V ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: h,
					children: J("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: J("catalog:javReleases.addSubscription")
				}),
				children: J(V ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			L.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: L.error
			}) : null,
			w === "list" ? B || z?.items.length ? /* @__PURE__ */ (0, $.jsx)(nn, {
				items: z?.items || [],
				waiting: B,
				filters: o,
				studios: z?.facets.studios || [],
				javImage: x.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => d("tag", e || o.tag),
				onSort: y,
				wanting: (e) => L.busy === String(e.id),
				onWant: se,
				onResource: (e) => n(Xt(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ae,
				style: { "--card-ratio": T },
				children: (z?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)($t, {
					item: t,
					layout: C,
					javImage: x.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => d("tag", e || o.tag),
					wanting: L.busy === String(t.id),
					onWant: () => se(t),
					onResource: () => n(Xt(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(on, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			z ? /* @__PURE__ */ (0, $.jsx)(S, {
				label: J("catalog:javTabs.newReleases"),
				total: z.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: m,
				unit: J("catalog:catalogList.footerUnit"),
				pageUnit: J("catalog:catalogList.footerPageUnit"),
				pageSizes: ce
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var un = wt("x"), dn = wt("refresh-cw"), fn = {
	releases: J("catalog:javSearch.filterReleases"),
	discover: J("catalog:javSearch.filterRecommended"),
	wants: J("catalog:javSearch.filterWants")
};
function pn({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsx)(Jt, {
		readOnly: t,
		receipt: r,
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: /* @__PURE__ */ (0, $.jsx)(k, {
						label: fn[e] || J("catalog:javDiscover.filter"),
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ (0, $.jsx)(ln, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(mn, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : /* @__PURE__ */ (0, $.jsx)(Vt, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ (0, $.jsx)(g, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
function mn({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => y.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [g, _] = (0, Q.useState)(() => o.get("dir") === "asc"), b = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, x = (e) => {
		f(e), Z({ tag: e });
	}, S = (e) => {
		m(e), Z({ sort: e === "taste" ? "" : e });
	}, C = (e) => {
		_(e), Z({ dir: e ? "asc" : "" });
	}, T = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...T.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Nt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let O = Se();
	(0, Q.useSyncExternalStore)(O.subscribe, O.version, O.version);
	let k = et(), re = Ee(Qe({
		active: !0,
		home: !1,
		portrait: !1
	})), A = g ? "asc" : "desc", j = X({
		queryKey: Re(s, p, A),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => Ke(s, e, {
			sort: p,
			direction: A
		})
	}), N = j.data?.metadata_job, oe = (0, Q.useRef)(!1);
	oe.current = N?.status === "running";
	let F = X({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => qe(e),
		refetchInterval: st(() => oe.current)
	}), I = F.data && F.dataUpdatedAt >= j.dataUpdatedAt ? F.data.metadata_job : N, L = (e) => e ? `${e.job_id}:${e.status}` : "", se = (0, Q.useRef)(""), ce = (0, Q.useRef)(""), R = F.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = L(R), t = ce.current.endsWith(":running") && R && R.status !== "running";
		ce.current = e, t && e !== se.current && j.refetch();
	}, [L(R)]);
	let z = Y(), B = Y(), V = async (e, t) => {
		let n = await ke(e, {
			sort: p,
			direction: A,
			jobId: I?.job_id
		}, t);
		e !== "start" && await j.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await ut.cancelQueries({ queryKey: v }), se.current = L(n.metadata_job), ut.setQueryData(v, n);
	}, H = (e) => {
		B.run(e, (t) => V(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, ue = (0, Q.useRef)(!1), de = s === "external" && I?.status !== "running" && (j.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		de && !ue.current && (ue.current = !0, V("start").catch(() => {}));
	}, [de]);
	let pe = j.data?.items || [], me = [...new Set(pe.flatMap((e) => e.tags || []))], U = pe.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), W = j.isPending;
	return qt(U), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: T,
		"aria-label": J("catalog:shared.recommendedForYou"),
		"aria-busy": W,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ee, {
				label: J("catalog:javDiscover.filtersLabel"),
				topLabel: J("catalog:javDiscover.scopeLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: W,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", J("catalog:javDiscover.external")], ["library", J("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(te, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: s === e,
							onPress: () => {
								b(e), x("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: W ? { __html: tt() } : void 0,
						children: W ? null : me.map((e) => /* @__PURE__ */ (0, $.jsxs)(te, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => x(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: pe.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: W ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : J("catalog:countLabel.works", { count: U.length })
					}),
					/* @__PURE__ */ (0, $.jsx)(M, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(ne, {
						onPress: () => {
							x(""), a();
						},
						children: J("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							s === "external" ? /* @__PURE__ */ (0, $.jsx)(D, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: I?.status === "running" ? J("catalog:javDiscover.stopUpdating") : J("catalog:javDiscover.updateMetadata"),
								disabled: W,
								"data-skeleton-action": W ? "" : void 0,
								busy: !!B.busy,
								icon: I?.status === "running" ? un : dn,
								onPress: () => H(I?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(le, {
								label: J("catalog:entityFilter.javCardLayout"),
								value: k,
								options: ie,
								onChange: Tt
							}),
							/* @__PURE__ */ (0, $.jsx)(fe, {
								sorts: y.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === p,
									dir: A
								})),
								onSort: (e) => {
									e === p ? C(!g) : (S(e), C(e === "code"));
								}
							})
						]
					})
				] })
			}),
			W ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: $e("discover", k) }
			}) : null,
			j.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:javDiscover.failed"),
				children: K(j.error)
			}) : null,
			s === "external" && I?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(he, {
					label: J("catalog:javMetadata.loadingProgress", {
						completed: I.completed,
						count: I.total
					}),
					value: I.completed,
					total: I.total
				})
			}) : null,
			I && I.status !== "running" && (I.status !== "complete" || I.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "secondary",
					...G(B.busy === "retry"),
					"aria-label": J("catalog:javMetadata.retry"),
					onClick: () => H("retry"),
					children: J("catalog:shared.retryNow")
				}),
				children: nt(I) || J("catalog:javMetadata.progress", {
					completed: I.completed,
					count: I.total
				})
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: B.error
			}) : null,
			!W && !j.error && !U.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				icon: w,
				title: J(r || d ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: J("catalog:javDiscover.viewTaste")
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Z({
							q: "",
							tag: ""
						});
					},
					children: J("catalog:shared.clearFilters")
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					href: "/",
					children: J("catalog:entityPage.browseCollection")
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: J("catalog:javDiscover.findVideos")
				})] }),
				children: J(r || d ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			z.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: z.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ae,
				style: { "--card-ratio": re },
				children: U.map((r) => {
					let a = dt(r.taste_score ?? r.score), o = [
						a.label,
						J("catalog:javScore.taste", { score: ze(r.taste_score ?? r.score) }),
						j.data?.ranking_method === "mmr" && r.ranking_score != null ? J("catalog:javScore.ranking", { score: ze(r.ranking_score) }) : "",
						r.source_score == null ? "" : J("catalog:javScore.siteRating", { rating: r.source_score.toFixed(1) }),
						...Ct(r.reasons, r.reason_codes, r.reason_params)
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)($t, {
						item: r,
						layout: k,
						javImage: O.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: x,
						wanting: z.busy === String(r.id),
						onWant: () => {
							z.run(String(r.id), (e) => be({ code: r.code }, e), () => {
								t(J("catalog:javWant.added")), q(), j.refetch();
							});
						},
						onResource: () => n(Xt(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": J("catalog:javScore.badgeLabel", {
								score: a.score,
								label: a.label
							}),
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(h, {
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
export { pn as JavPage };

//# debugId=d2850108-54b6-4ee2-ad57-1bd680000de7