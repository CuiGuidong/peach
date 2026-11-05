(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5e769aa1-45b3-4f0f-a3ba-87cfcfcca44b", e._sentryDebugIdIdentifier = "sentry-dbid-5e769aa1-45b3-4f0f-a3ba-87cfcfcca44b");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, ArtSlot as o, Button as s, ButtonLink as c, Bx as l, CatalogViewToggle as u, ChevronSortDown as d, Chip as f, CloudDownloadDialog as p, DISCOVERY_SORTS as m, DOWNLOADS_KEY as h, DOWNLOADS_URL as g, DataTableFrame as _, E3 as v, EmptyFocusButton as y, EmptyState as b, FilterGlassRows as x, FilterIconButton as S, FilterPill as C, GlassPill as w, Help as T, IndexSearch as E, Input as ee, JAV_LAYOUTS as te, JAV_RECOMMENDATION_GRID as ne, JavHeader as D, LibraryShortcuts as O, M6 as k, Note as A, PHASES as j, Pagination as M, RELEASE_COLUMN_VISIBILITY_KEY as N, RELEASE_COLUMN_WIDTHS_KEY as P, RELEASE_SORTS as F, RELEASE_SORT_COLUMNS as I, SEGMENT as L, SEGMENTED_TRACK as R, SegmentedRadioGroup as z, Segments as re, Shuffle as B, SortKeys as ie, SourceAvatar as V, Table as ae, TableColumnControls as H, TableColumnResizer as oe, TaskProgress as se, WANTS_KEY as U, WantMagnets as W, Wt as ce, __toESM as le, addWant as ue, apiGet as de, appSettingsStore as fe, avatarInner as pe, busyProps as G, cachedMagnetStates as me, cardClass as he, cardRatio as ge, catalogListSkeletonCellHtml as _e, composingKey as ve, coverUrl as ye, discoveryArtwork as be, discoveryKey as xe, discoveryScore as Se, entityDisplayName as K, entityFaceImg as Ce, entityPath as we, errorMessage as q, facePos as Te, fetchDiscoveries as Ee, fetchReleases as De, fetchWants as Oe, fmtDur as ke, gridLayout as Ae, invalidateWants as J, javContentSkeleton as je, javLayout as Me, javTagSkeleton as Ne, keepPreviousData as Pe, logoUrl as Fe, pageWindow as Ie, qE as Le, recommendationScore as Re, relayoutCovers as ze, releaseColumns as Be, releaseFilters as Ve, releaseKey as He, removeWants as Ue, require_jsx_runtime as We, require_react as Ge, resetWants as Ke, searchNote as qe, spriteGlyph as Je, storeJavLayout as Ye, textLang as Xe, tierPlaceholdersHtml as Ze, useAction as Y, useCatalogView as Qe, useEntityNames as $e, useQuery as et, useTablePreferences as tt, wantName as X, wireHorizontalScroller as nt, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as rt } from "./peach-app.source-view-Cr-fzNHo.js";
import "./peach-app.source-list-BPZPYgyw.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ le(Ge(), 1), $ = We(), it = {
	code: "Added manually",
	feed: "Subscribe to new releases",
	follow: "Follows"
}, at = [
	["all", "All"],
	["available", "Has magnet link"],
	["missing", "No magnet link"]
], ot = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	it[e.origin]
].filter(Boolean).join(" · ");
function st({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "No cover"
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
function ct({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: l, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: he({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(st, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, $.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: X(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					ot(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: ot(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: qe(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(rt, {
						text: e.scrape_error,
						prefix: "Details unfetched: ",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(c, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: ce,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Source page"
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								leadingIcon: k,
								disabled: t,
								...G(n === `remove:${e.id}`),
								onClick: i,
								children: "Remove"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...G(n === `reset:${e.id}`),
								onClick: r,
								children: "Look up again"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: "Find resources"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(W, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function lt({ phase: e, label: t, rows: n, row: r }) {
	let [i, o] = (0, Q.useState)(1), [c, l] = (0, Q.useState)("all"), u = me(n), d = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, f = n.filter(d), p = e !== "searching" || c === "all" ? n : n.filter((e) => d(e) === (c === "available")), m = Ie(p.length, 20, i);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [
						t,
						" ",
						/* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-body-2-regular tabular-nums text-text-secondary",
							children: n.length.toLocaleString()
						})
					]
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(z, {
					name: "want-magnet-filter",
					"aria-label": "To-find magnet filter",
					orientation: "horizontal",
					value: c,
					className: R,
					onChange: (e) => {
						l(e), o(1);
					},
					children: at.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(a, {
						value: e,
						"aria-label": t,
						className: L,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? f.length : n.length - f.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			p.length ? null : /* @__PURE__ */ (0, $.jsx)(b, {
				size: "compact",
				icon: Le,
				title: "No matching videos yet",
				actions: /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: () => {
						l("all"), o(1);
					},
					children: "View all"
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: p.slice(m.start, m.end).map(r)
			}),
			m.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(m.start + 1).toLocaleString()}–${m.end.toLocaleString()} / ${m.total.toLocaleString()} items`
				}), /* @__PURE__ */ (0, $.jsx)(M, {
					label: `${t} pagination`,
					page: m.page,
					pages: m.pages,
					onPage: o
				})]
			}) : null
		]
	});
}
function ut({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, c] = (0, Q.useState)(null), l = Y(), u = et({
		queryKey: U,
		queryFn: ({ signal: e }) => Oe(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => ue({ code: n }, e), (e) => {
			t(e.created ? `Added to wants: ${X(e.want)}` : `${X(e.want)} is already in wants`), a(""), J();
		});
	}, f = (e) => {
		e.key === "Enter" && !ve(e.nativeEvent) && (e.preventDefault(), d());
	}, m = (e) => {
		l.run(`remove:${e.id}`, (t) => Ue([e.id], t), () => {
			t(`Removed: ${X(e)}`), J();
		});
	}, _ = (e) => {
		l.run(`reset:${e.id}`, (t) => Ke([e.id], t), () => {
			t(`${X(e)} back to the wanted list`), J();
		});
	}, v = u.data, x = (v?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), S = et({
		queryKey: h,
		queryFn: ({ signal: e }) => de(`${g}?limit=100`, e),
		enabled: x.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), C = S.data?.providers.filter((e) => e.configured) || [], w = C[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: he({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "Add by code"
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, $.jsx)(ee, {
								"aria-label": "Code",
								placeholder: "Enter a code, e.g. SSIS-950",
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(s, {
							variant: "primary",
							disabled: e || !i.trim(),
							...G(l.busy === "add"),
							onClick: d,
							children: "Add"
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(A, {
						tone: "error",
						title: "This run did not finish",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				title: "Reading the want list failed",
				children: q(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "'Loading wants'",
				dangerouslySetInnerHTML: { __html: je("wants") }
			}) : null,
			v?.scraping ? /* @__PURE__ */ (0, $.jsx)(T, {
				role: "status",
				children: "Fetching details and covers for the codes just added."
			}) : null,
			S.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				title: "Download configuration not fetched",
				children: q(S.error)
			}) : null,
			S.data && !C.length ? /* @__PURE__ */ (0, $.jsxs)(A, {
				tone: "neutral",
				children: ["No download channel configured yet.", /* @__PURE__ */ (0, $.jsx)("a", {
					href: "/settings/library?section=Download%20channels",
					children: "Download channel settings"
				})]
			}) : null,
			S.data && !S.data.available ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "neutral",
				children: "Cloud download is only available on devices allowed to modify the database."
			}) : null,
			v && !x.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				size: "compact",
				icon: Le,
				title: n ? "No matching videos" : "No wanted videos yet",
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: r,
					children: "Clear the search"
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(y, {
					target: "input[aria-label=\"Code\"]",
					children: "Add videos"
				}) : void 0,
				children: n ? "Try another code, performer or title." : "Enter a code to add videos you want."
			}) : null,
			j.map(([n, r]) => {
				let i = x.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(lt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(ct, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: S.data,
						provider: w,
						toast: t,
						onReset: () => _(n),
						onRemove: () => m(n),
						onCloudDownload: () => c({
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
			/* @__PURE__ */ (0, $.jsx)(p, {
				prefill: o,
				close: () => c(null),
				receipt: t,
				provider: w
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function dt({ item: e }) {
	$e();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(V, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: pe(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: we("performer", t.name, t.id),
			"aria-label": `Open performer page: ${K("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: K("performer", t.name),
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
var ft = (e) => ({
	...e,
	cover: e.has_cover ? ye(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
});
function pt({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: l, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, h = be(e, t, n), g = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		onClick: (e) => {
			e.target.closest("a,button,input") || i(g);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: g,
				"aria-label": `View ${e.code} details`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(g));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
				children: h ? /* @__PURE__ */ (0, $.jsx)(o, {
					artwork: {
						kind: "cover",
						html: h
					},
					identity: be(e, "small", n),
					relayout: (e) => ze(e, t)
				}) : /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-nopic": "",
					children: "No cover"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(dt, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || "Title unavailable"}`,
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Xe(e.title),
									children: e.title
								}) : "Title not fetched"
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: we("performer", e.performer_refs[0].name),
									title: m,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: m,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || m })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who-more": "",
									children: [
										"and ",
										e.performer_refs.length,
										" people"
									]
								}) : null,
								e.release_date ? /* @__PURE__ */ (0, $.jsxs)("time", {
									"data-media-release": "",
									dateTime: e.release_date,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
									}), e.release_date]
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
								onClick: () => l(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(c, {
						"data-button-link": "",
						variant: "secondary",
						trailingIcon: ce,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Video sources"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(s, {
						variant: "ghost",
						disabled: r || e.wanted || !!e.asset_id,
						...G(u),
						onClick: d,
						children: e.asset_id ? "In library" : e.wanted ? "Added to wants" : "Want"
					}),
					/* @__PURE__ */ (0, $.jsx)(s, {
						variant: "secondary",
						onClick: f,
						children: "Find resources"
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var mt = {
	widths: P,
	visibility: N
};
function ht({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: Fe(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true"
	});
}
function gt({ items: a, waiting: c, filters: l, studios: u, javImage: f, readOnly: p, navigate: m, onTag: h, onSort: g, wanting: v, onWant: y, onResource: b }) {
	let x = tt("jav-releases", Be, mt), S = Be.filter((e) => e.required || x.visibility[e.id] !== !1), C = Object.entries(I).find(([, e]) => e === l.sort)?.[0], w = new Map(u.map((e) => [e.name, e])), T = (e) => (t) => {
		t.preventDefault(), m(`/works/${encodeURIComponent(e.code)}`);
	}, E = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = be(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: T(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(o, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => ze(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", { children: "No cover" })
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "Title unavailable"}`,
							"aria-label": `View ${t.code} details`,
							onClick: T(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Xe(t.title),
									children: t.title
								}) : "Title not fetched"
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)(dt, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: we("performer", n),
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}) : /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsxs)("span", {
						"data-media-who-more": "",
						children: [
							"and ",
							t.performer_refs.length,
							" people"
						]
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ (0, $.jsx)(ht, { studio: w.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => h(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return ke(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "ghost",
					disabled: p || t.wanted || !!t.asset_id,
					...G(v(t)),
					onClick: () => y(t),
					children: t.wanted ? "Wanted" : "Want"
				}), /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "secondary",
					onClick: () => b(t),
					children: "Find resources"
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
			"aria-label": "New work list toolbar",
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					preferences: x,
					label: "New work list"
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(_, {
			follow: !0,
			preferences: x,
			children: /* @__PURE__ */ (0, $.jsxs)(ae, {
				"aria-label": "New work list",
				size: "sm",
				sortDescriptor: C ? {
					column: C,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = I[String(e.column)];
					t && g(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [S.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
					id: e.id,
					isRowHeader: e.id === "name",
					allowsSorting: e.id in I,
					...x.columnProps(e.id),
					children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex items-center gap-0.5",
						children: [e.label, e.id in I ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-sort-indicator": !0,
							"data-direction": t || void 0,
							children: /* @__PURE__ */ (0, $.jsx)(d, {})
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(oe, {
						preferences: x,
						id: e.id
					})] })
				}, e.id)), /* @__PURE__ */ (0, $.jsx)(t, {
					id: "remaining-space",
					"aria-label": "Row empty space",
					"data-table-space": "",
					width: x.spaceWidth,
					minWidth: 0
				})] }), /* @__PURE__ */ (0, $.jsx)(e, {
					renderEmptyState: () => "No new works match the filter",
					children: c ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [S.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: _e(e.id) } }) }, e.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [S.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: E(t.id, e) }, t.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var _t = `<div data-catalog-tier="performers" data-skeleton="tiers">${Ze("performer")}</div><div data-catalog-tier="studios">${Ze("studio")}</div>`, vt = (e) => Ce({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Te(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
});
function yt({ value: e }) {
	let t = Re(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: `Taste ${t.score}`,
		children: /* @__PURE__ */ (0, $.jsx)(f, {
			color: t.color,
			children: t.label
		})
	});
}
function bt({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: Fe(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : null
	});
}
function xt({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	$e();
	let [o, d] = (0, Q.useState)(() => Ve(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (d((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let f = (e, t) => {
		let n = o[e] === t ? "" : t;
		d((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = (e) => {
		d((t) => ({
			...t,
			page: e
		})), Z({ page: e > 1 ? String(e) : "" }), p.current?.scrollIntoView({ block: "start" });
	}, h = () => {
		d((e) => ({
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
	}, g = (e) => _(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), _ = (e, t) => {
		d((n) => ({
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
	}, v = () => {
		let e = Math.random().toString(36).slice(2, 10);
		d((t) => ({
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
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => nt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let y = fe();
	(0, Q.useSyncExternalStore)(y.subscribe, y.version, y.version);
	let S = Me(), T = Qe(), E = ge(Ae({
		active: !0,
		home: !1,
		portrait: !1
	})), ee = (0, Q.useRef)(""), D = et({
		queryKey: He(o),
		queryFn: ({ signal: e }) => De(o, e, ee.current),
		placeholderData: Pe,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), O = D.data?.metadata_job, k = O?.status === "running", j = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		O?.job_id && (ee.current = O.job_id);
	}, [O?.job_id]), (0, Q.useEffect)(() => {
		j.current && !k && D.refetch(), j.current = k;
	}, [k, D]);
	let N = Y(), P = (e) => {
		N.run(String(e.id), (t) => ue({ code: e.code }, t), () => {
			t("Added to wants"), J(), D.refetch();
		});
	}, I = D.data, L = D.isPending, R = !!(o.performer || o.studio || o.tag || o.q), z = Math.max(1, Math.ceil((I?.total || 0) / 24));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": "Subscribe to new releases",
		"aria-busy": L || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			L ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: _t }
			}) : null,
			I && (I.facets.performers.length || I.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [I.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "Filter by performer",
					children: I.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: `${K("performer", e.name, e.id)} · ${e.count} titles`,
						onClick: () => f("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: vt(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: K("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, I.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "Filter by studio",
					children: I.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} works`,
						onClick: () => f("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(bt, { studio: e }),
							e.name,
							" ",
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(x, {
				label: "New work filter",
				topLabel: "New work tag",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: L,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: L ? { __html: Ne() } : void 0,
						children: L ? null : I?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(C, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => f("tag", e.name),
							children: [
								e.name,
								" ",
								/* @__PURE__ */ (0, $.jsx)("span", {
									"data-count-badge": "",
									children: e.count
								})
							]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: L ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : R ? `${I?.total || 0} / ${I?.candidate_total || 0} works` : `${I?.total || 0} works`
					}),
					R ? /* @__PURE__ */ (0, $.jsx)(w, {
						onPress: h,
						children: "Clear filters"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(B, {
								onPress: v,
								busy: o.sort === "random" && D.isFetching
							}),
							T === "cards" ? /* @__PURE__ */ (0, $.jsx)(re, {
								label: "JAV card layout",
								value: S,
								options: te,
								onChange: Ye
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(u, {}),
							/* @__PURE__ */ (0, $.jsx)(ie, {
								sorts: F.map(([e, t, n]) => ({
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
			L && T === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "Loading new works",
				dangerouslySetInnerHTML: { __html: je("discover", S) }
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				title: "New work unavailable",
				children: q(D.error)
			}) : null,
			k && O ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(se, {
					label: `Reading video details · ${O.completed} / ${O.total}`,
					value: O.completed,
					total: O.total
				})
			}) : null,
			!L && !D.error && !I?.items.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				icon: l,
				title: R ? "No new works match the filter" : "No new works not yet indexed",
				actions: R ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: h,
					children: "Clear filters"
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "Add subscription"
				}),
				children: R ? "Clear filters to view all new releases." : "After following a performer or studio, new works not yet indexed appear here."
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				children: N.error
			}) : null,
			T === "list" ? L || I?.items.length ? /* @__PURE__ */ (0, $.jsx)(gt, {
				items: I?.items || [],
				waiting: L,
				filters: o,
				studios: I?.facets.studios || [],
				javImage: y.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => f("tag", e || o.tag),
				onSort: _,
				wanting: (e) => N.busy === String(e.id),
				onWant: P,
				onResource: (e) => n(ft(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": E },
				children: (I?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(pt, {
					item: t,
					layout: S,
					javImage: y.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => f("tag", e || o.tag),
					wanting: N.busy === String(t.id),
					onWant: () => P(t),
					onResource: () => n(ft(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(yt, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(M, {
					page: o.page,
					pages: z,
					onPage: m,
					label: "New Releases pagination"
				})
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var St = Je("x"), Ct = Je("refresh-cw"), wt = {
	releases: "Filter new works",
	discover: "Filter recommendations",
	wants: "Filter wants"
};
function Tt({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, $.jsx)(D, {
				tab: e,
				navigate: n,
				find: () => a({}),
				search: /* @__PURE__ */ (0, $.jsx)(E, {
					label: wt[e] || "Filters",
					value: o,
					onQuery: c
				})
			}),
			e === "releases" ? /* @__PURE__ */ (0, $.jsx)(xt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(Et, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : /* @__PURE__ */ (0, $.jsx)(ut, {
				readOnly: t,
				toast: r,
				query: o.trim(),
				clearQuery: () => c("")
			}),
			/* @__PURE__ */ (0, $.jsx)(p, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})
		]
	});
}
function Et({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [l, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, p] = (0, Q.useState)(() => o.get("tag") || ""), [h, g] = (0, Q.useState)(() => m.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [_, y] = (0, Q.useState)(() => o.get("dir") === "asc"), T = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, E = (e) => {
		p(e), Z({ tag: e });
	}, ee = (e) => {
		g(e), Z({ sort: e === "taste" ? "" : e });
	}, D = (e) => {
		y(e), Z({ dir: e ? "asc" : "" });
	}, k = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...k.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => nt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let j = fe();
	(0, Q.useSyncExternalStore)(j.subscribe, j.version, j.version);
	let M = Me(), N = ge(Ae({
		active: !0,
		home: !1,
		portrait: !1
	})), P = (0, Q.useRef)({}), F = (0, Q.useRef)(!1), I = (0, Q.useRef)(!1), L = _ ? "asc" : "desc", R = et({
		queryKey: xe(l, h, L),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = F.current, n = I.current;
			return F.current = !1, I.current = !1, Ee(l, e, {
				sort: h,
				direction: L,
				jobId: t ? void 0 : P.current[l],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), z = R.data?.metadata_job;
	(0, Q.useEffect)(() => {
		z?.job_id && (P.current[l] = z.job_id);
	}, [l, z?.job_id]);
	let B = Y(), V = Y(), ae = (e) => {
		V.run(e, async () => (I.current = e === "stop", F.current = e !== "stop", R.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, H = R.data?.items || [], oe = [...new Set(H.flatMap((e) => e.tags || []))], U = H.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), W = R.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: k,
		"aria-label": "Recommended for you",
		"aria-busy": W,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(x, {
				label: "Discover filters and sorting",
				topLabel: "Discover scope and tags",
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
						children: [[["external", "Out-of-library discoveries"], ["library", "Library explore"]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(C, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: l === e,
							onPress: () => {
								T(e), E("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: W ? { __html: Ne() } : void 0,
						children: W ? null : oe.map((e) => /* @__PURE__ */ (0, $.jsxs)(C, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => E(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: H.filter((t) => t.tags?.includes(e)).length
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
						}) : `${U.length} videos`
					}),
					/* @__PURE__ */ (0, $.jsx)(O, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(w, {
						onPress: () => {
							E(""), a();
						},
						children: "Clear filters"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							l === "external" ? /* @__PURE__ */ (0, $.jsx)(S, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: z?.status === "running" ? "Stop reading" : "Update details",
								disabled: W,
								"data-skeleton-action": W ? "" : void 0,
								busy: !!V.busy,
								icon: z?.status === "running" ? St : Ct,
								onPress: () => ae(z?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(re, {
								label: "JAV card layout",
								value: M,
								options: te,
								onChange: Ye
							}),
							/* @__PURE__ */ (0, $.jsx)(ie, {
								sorts: m.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === h,
									dir: L
								})),
								onSort: (e) => {
									e === h ? D(!_) : (ee(e), D(e === "code"));
								}
							})
						]
					})
				] })
			}),
			W ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "Loading recommendations",
				dangerouslySetInnerHTML: { __html: je("discover", M) }
			}) : null,
			R.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				title: "Recommendations not fetched",
				children: q(R.error)
			}) : null,
			l === "external" && z?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(se, {
					label: `Reading video details · ${z.completed} / ${z.total}`,
					value: z.completed,
					total: z.total
				})
			}) : null,
			z && z.status !== "running" && (z.status !== "complete" || z.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "secondary",
					...G(V.busy === "retry"),
					"aria-label": "Retry reading video details",
					onClick: () => ae("retry"),
					children: "Retry now"
				}),
				children: z.message || `Video profiles ${z.completed} / ${z.total} videos`
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				children: V.error
			}) : null,
			!W && !R.error && !U.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				icon: v,
				title: r || d ? "No matching recommendations" : "No videos matching your taste yet",
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "View taste"
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), p(""), Z({
							q: "",
							tag: ""
						});
					},
					children: "Clear filters"
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "Browse library"
				})] }),
				children: r || d ? "Clear filters to see other videos." : l === "library" ? "After watching or marking videos, you can explore rarely watched parts of the library." : "You can search codes, or refresh follow sources."
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(A, {
				tone: "error",
				children: B.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": N },
				children: U.map((r) => {
					let a = Re(r.taste_score ?? r.score), o = [
						a.label,
						`Taste ${Se(r.taste_score ?? r.score)}`,
						R.data?.ranking_method === "mmr" && r.ranking_score != null ? `Ranking ${Se(r.ranking_score)}` : "",
						r.source_score == null ? "" : `Source rating ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(pt, {
						item: r,
						layout: M,
						javImage: j.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: E,
						wanting: B.busy === String(r.id),
						onWant: () => {
							B.run(String(r.id), (e) => ue({ code: r.code }, e), () => {
								t("Added to wants"), J(), R.refetch();
							});
						},
						onResource: () => n(ft(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `Recommendation score ${a.score}, ${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(f, {
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
export { Tt as JavPage };

//# debugId=5e769aa1-45b3-4f0f-a3ba-87cfcfcca44b