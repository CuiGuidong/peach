(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "53aaea82-e50f-4fbb-8a05-d96bf1c453de", e._sentryDebugIdIdentifier = "sentry-dbid-53aaea82-e50f-4fbb-8a05-d96bf1c453de");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, CloseButton as t, DOWNLOADS_KEY as n, DOWNLOADS_URL as r, ImageWithFallback as i, ModalFrame as a, QueryErrorNote as o, WantMagnets as s, apiGet as c, entityDisplayName as l, joinList as u, require_jsx_runtime as d, t as f, useEntityNames as p, useQuery as m } from "./peach-app.js";
// src/react/jav/jav-batch-resources.tsx
var h = d();
function g({ item: e }) {
	p();
	let t = e.performerRefs?.length ? u(e.performerRefs.map((e) => l("performer", e.name, e.id))) : e.performers, n = e.studio ? l("studio", e.studio) : "";
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "flex min-w-0 items-start gap-3 sm:gap-4",
		children: [/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "relative flex aspect-card-cover w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-media-placeholder sm:w-32",
			children: [/* @__PURE__ */ (0, h.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: f("catalog:shared.noCover")
			}), e.cover ? /* @__PURE__ */ (0, h.jsx)(i, {
				src: e.cover,
				alt: "",
				loading: "lazy",
				referrerPolicy: "no-referrer",
				className: "absolute inset-0 size-full object-cover"
			}) : null]
		}), /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-1",
			children: [
				/* @__PURE__ */ (0, h.jsx)("h3", {
					className: "text-headline-medium text-text-primary wrap-anywhere",
					children: e.code
				}),
				e.title ? /* @__PURE__ */ (0, h.jsx)("p", {
					className: "line-clamp-2 text-body-2-regular text-text-primary",
					title: e.title,
					children: e.title
				}) : null,
				t ? /* @__PURE__ */ (0, h.jsx)("p", {
					className: "text-body-2-medium text-text-primary wrap-anywhere",
					children: t
				}) : null,
				n || e.release_date ? /* @__PURE__ */ (0, h.jsx)("p", {
					className: "text-caption-1-regular text-text-secondary wrap-anywhere",
					children: [n, e.release_date].filter(Boolean).join(" · ")
				}) : null
			]
		})]
	});
}
function _({ items: i, close: l, readOnly: u, receipt: d }) {
	let p = m({
		queryKey: n,
		queryFn: ({ signal: e }) => c(`${r}?limit=50`, e),
		enabled: !!i
	}), _ = p.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ (0, h.jsxs)(a, {
		isOpen: !!i,
		onOpenChange: (e) => {
			e || l();
		},
		width: "collections",
		children: [/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 bg-background-full px-5 pt-4 pb-3",
			children: [/* @__PURE__ */ (0, h.jsxs)(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ (0, h.jsx)("span", {
						"data-copy-key": "jav.resources.title",
						children: f("catalog:javBatch.title")
					}),
					" · ",
					f("catalog:countLabel.works", { count: i?.length || 0 })
				]
			}), /* @__PURE__ */ (0, h.jsx)(t, {
				size: "sm",
				"aria-label": f("catalog:javBatch.close"),
				onClick: l
			})]
		}), /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4 px-3 pb-5 sm:px-5",
			children: [p.error ? /* @__PURE__ */ (0, h.jsx)(o, {
				titleKey: "manage:cloudDownloadDialog.settingsLoadFailed",
				query: p
			}) : null, i?.map((e) => /* @__PURE__ */ (0, h.jsxs)("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-4 rounded-2xl bg-background-secondary-default p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, h.jsx)(g, { item: e }), /* @__PURE__ */ (0, h.jsx)(s, {
					want: {
						id: e.id,
						code: e.code,
						title: e.title,
						release_date: e.release_date || null
					},
					queryUrl: `/api/jav/resources?code=${encodeURIComponent(e.code)}`,
					eager: !0,
					compact: !0,
					readOnly: u,
					downloads: p.data,
					provider: _,
					toast: d
				})]
			}, e.id + ":" + e.code))]
		})]
	});
}
export { _ as JavBatchResources };

//# debugId=53aaea82-e50f-4fbb-8a05-d96bf1c453de