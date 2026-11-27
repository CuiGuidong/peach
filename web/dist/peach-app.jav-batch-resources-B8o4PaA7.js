(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70a76237-b666-43fd-89e8-bf6c827fb76d", e._sentryDebugIdIdentifier = "sentry-dbid-70a76237-b666-43fd-89e8-bf6c827fb76d");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, Button as t, DOWNLOADS_KEY as n, DOWNLOADS_URL as r, ModalFrame as i, P7 as a, QueryErrorNote as o, WantMagnets as s, apiGet as c, require_jsx_runtime as l, t as u, useQuery as d } from "./peach-app.js";
// src/react/jav/jav-batch-resources.tsx
var f = l();
function p({ items: l, close: p, readOnly: m, receipt: h }) {
	let g = d({
		queryKey: n,
		queryFn: ({ signal: e }) => c(`${r}?limit=50`, e),
		enabled: !!l
	}), _ = g.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ (0, f.jsxs)(i, {
		isOpen: !!l,
		onOpenChange: (e) => {
			e || p();
		},
		width: "collections",
		children: [/* @__PURE__ */ (0, f.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-separator-border bg-background-full px-5 py-4",
			children: [/* @__PURE__ */ (0, f.jsxs)(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ (0, f.jsx)("span", {
						"data-copy-key": "jav.resources.title",
						children: u("catalog:javBatch.title")
					}),
					" · ",
					u("catalog:countLabel.works", { count: l?.length || 0 })
				]
			}), /* @__PURE__ */ (0, f.jsx)(t, {
				iconOnly: !0,
				variant: "ghost",
				leadingIcon: a,
				"aria-label": u("catalog:javBatch.close"),
				onClick: p
			})]
		}), /* @__PURE__ */ (0, f.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-6 p-5",
			children: [g.error ? /* @__PURE__ */ (0, f.jsx)(o, {
				titleKey: "manage:cloudDownloadDialog.settingsLoadFailed",
				query: g
			}) : null, l?.map((e) => /* @__PURE__ */ (0, f.jsxs)("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, f.jsx)("h3", {
						className: "text-headline-medium text-text-primary",
						children: e.code
					}),
					e.title ? /* @__PURE__ */ (0, f.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.title
					}) : null,
					/* @__PURE__ */ (0, f.jsx)(s, {
						want: {
							id: e.id,
							code: e.code,
							title: e.title,
							release_date: e.release_date || null
						},
						queryUrl: `/api/jav/resources?code=${encodeURIComponent(e.code)}`,
						eager: !0,
						readOnly: m,
						downloads: g.data,
						provider: _,
						toast: h
					})
				]
			}, e.code))]
		})]
	});
}
export { p as JavBatchResources };

//# debugId=70a76237-b666-43fd-89e8-bf6c827fb76d