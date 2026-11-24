(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7b8d97df-ee98-47b8-a71c-ba92501c4b3d", e._sentryDebugIdIdentifier = "sentry-dbid-7b8d97df-ee98-47b8-a71c-ba92501c4b3d");
	} catch {}
})();
import { PillTabList as e, __toESM as t, cx as n, require_jsx_runtime as r, require_react as i, useHorizontalScroller as a } from "./peach-app.js";
// src/react/components/section-toc.css
var o = /* @__PURE__ */ t(i(), 1), s = r();
function c({ label: t, entries: r, children: i, inline: c = !1 }) {
	let l = (0, o.useRef)(null), u = a(), [d, f] = (0, o.useState)(r[0]?.id ?? ""), p = JSON.stringify(r.map((e) => e.id));
	return (0, o.useEffect)(() => {
		let e = l.current, t = 0, n = JSON.parse(p).map((e) => document.getElementById(e)).filter((t) => t !== null && e.contains(t)), r = () => {
			if (t = 0, !e.getClientRects().length) return;
			let r = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0, i = document.documentElement.scrollHeight - window.innerHeight, a = location.hash.slice(1), o = n[0]?.id ?? "", s = "";
			for (let e of n) {
				let t = (parseFloat(getComputedStyle(e).scrollMarginTop) || 0) + r, n = e.getBoundingClientRect().top;
				n <= t + 1 && (o = e.id), e.id === a && n > t && n < window.innerHeight && window.scrollY + n - t > i && (s = e.id);
			}
			s ? o = s : window.scrollY > 0 && window.scrollY >= i - 2 && (o = n.at(-1)?.id ?? o), f(o);
		}, i = () => {
			t ||= requestAnimationFrame(r);
		}, a = document.getElementById(location.hash.slice(1));
		a && e.contains(a) && e.getClientRects().length && a.scrollIntoView({ block: "start" }), r(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", i);
		let o = new ResizeObserver(i);
		return o.observe(e), () => {
			window.removeEventListener("scroll", i), window.removeEventListener("resize", i), o.disconnect(), cancelAnimationFrame(t);
		};
	}, [p]), (0, o.useEffect)(() => {
		let e = l.current?.querySelector("nav"), t = e?.querySelector("[aria-current]");
		e && t && (t.offsetTop < e.scrollTop ? e.scrollTop = t.offsetTop : t.offsetTop + t.offsetHeight > e.scrollTop + e.clientHeight && (e.scrollTop = t.offsetTop + t.offsetHeight - e.clientHeight), t.offsetLeft < e.scrollLeft ? e.scrollLeft = t.offsetLeft : t.offsetLeft + t.offsetWidth > e.scrollLeft + e.clientWidth && (e.scrollLeft = t.offsetLeft + t.offsetWidth - e.clientWidth));
	}, [d]), /* @__PURE__ */ (0, s.jsxs)("div", {
		ref: l,
		"data-section-page": c ? "inline" : "",
		children: [/* @__PURE__ */ (0, s.jsx)("nav", {
			ref: u,
			"aria-label": t,
			"data-section-toc": "",
			children: /* @__PURE__ */ (0, s.jsx)(e, {
				"data-section-toc-items": "",
				"data-pill-nav": "",
				children: r.map((e) => /* @__PURE__ */ (0, s.jsxs)("a", {
					href: `#${e.id}`,
					"data-copy-interact": "",
					onClick: (t) => {
						t.defaultPrevented || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey || f(e.id);
					},
					"aria-current": d === e.id ? "location" : void 0,
					"data-pill-selected": d === e.id ? "" : void 0,
					"data-pill-variant": "gray",
					className: n("relative z-1 flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-body-regular text-text-secondary", "outline-none hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring", d === e.id && "text-text-primary"),
					children: [e.icon, /* @__PURE__ */ (0, s.jsx)("span", { children: e.label })]
				}, e.id))
			})
		}), /* @__PURE__ */ (0, s.jsx)("div", {
			"data-toc-content": "",
			className: "flex min-w-0 flex-col gap-8",
			children: i
		})]
	});
}
export { c as SectionToc };

//# debugId=7b8d97df-ee98-47b8-a71c-ba92501c4b3d