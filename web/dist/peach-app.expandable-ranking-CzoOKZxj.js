(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fc55e145-3027-4f69-9961-e685e98be2c9", e._sentryDebugIdIdentifier = "sentry-dbid-fc55e145-3027-4f69-9961-e685e98be2c9");
	} catch {}
})();
import { selectPolarAppliedValues as e, selectPolarAxisCheckedDomain as t, selectPolarNiceTicks as n } from "./peach-app.PolarChart-CeCYLBHr.js";
import { CHART_CARD as r, CategoryTick as i, ChartEmpty as a, ChartHead as o, ChartTip as s, Dot as c, EvilBarChart as l, FillObjectPaint as u, Layer as d, TIP_SURFACE as f, TIP_SWATCH as p, Text as m, TipRow as h, ZIndexLayer as ee, __toESM as g, adaptEventsOfChild as _, addAngleAxis as v, categoryAxisWidth as y, clsx as b, combineAxisTicks as x, combineCategoricalDomain as S, combineConfiguredScale as C, combineGraphicalItemTicks as w, createSelector as T, defaultPolarAngleAxisProps as te, degreeToRadian as E, f1 as ne, getAxisTypeBasedOnLayout as re, getClassNameFromUnknown as ie, interfaceLanguage as ae, noop as oe, pickAxisType as D, polarToCartesian as O, rechartsScaleFactory as se, removeAngleAxis as ce, require_jsx_runtime as le, require_react as ue, resolveDefaultProps as de, roundTemplateLiteral as fe, selectAngleAxis as k, selectAngleAxisRangeWithReversed as pe, selectChartLayout as A, selectDuplicateDomain as j, selectPolarViewBox as me, selectRadiusAxis as he, selectRadiusAxisRangeWithReversed as ge, selectRealScaleType as _e, selectRenderableAxisSettings as ve, svgPropertiesAndEvents as M, svgPropertiesNoEvents as N, svgPropertiesNoEventsFromUnknown as ye, t as P, tone as be, useAppDispatch as xe, useAppSelector as F, useIsPanorama as Se, usePolarChartLayout as Ce, useRechartsTheme as we } from "./peach-app.js";
// node_modules/recharts/es6/shape/Polygon.js
var I = /* @__PURE__ */ g(ue()), Te = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
], Ee;
function L() {
	return L = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, L.apply(null, arguments);
}
function De(e, t) {
	if (e == null) return {};
	var n, r, i = Oe(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Oe(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ke(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var R = (e) => e != null && e.x === +e.x && e.y === +e.y, Ae = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	e.forEach((e) => {
		var n = t[t.length - 1];
		R(e) ? n && n.push(e) : n && n.length > 0 && t.push([]);
	});
	var n = e[0], r = t[t.length - 1];
	R(n) && r && r.push(n);
	var i = t[t.length - 1];
	return i && i.length <= 0 && (t = t.slice(0, -1)), t;
}, z = (e, t) => {
	var n = Ae(e);
	t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
	var r = n.map((e) => e.reduce((e, t, n) => fe(Ee ||= ke([
		"",
		"",
		"",
		",",
		""
	]), e, n === 0 ? "M" : "L", t.x, t.y), "")).join("");
	return n.length === 1 ? `${r}Z` : r;
}, je = (e, t, n) => {
	var r = z(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${z(Array.from(t).reverse(), n).slice(1)}`;
}, B = (e) => {
	var t = e.points, n = e.className, r = e.baseLinePoints, i = e.connectNulls, a = De(e, Te);
	if (!t || !t.length) return null;
	var o = b("recharts-polygon", n);
	if (r && r.length) {
		var s = a.stroke && a.stroke !== "none", c = je(t, r, i);
		return /*#__PURE__*/ I.createElement("g", { className: o }, /*#__PURE__*/ I.createElement("path", L({}, M(a), {
			fill: c.slice(-1) === "Z" ? a.fill : "none",
			stroke: "none",
			d: c
		})), s ? /*#__PURE__*/ I.createElement("path", L({}, M(a), {
			fill: "none",
			d: z(t, i)
		})) : null, s ? /*#__PURE__*/ I.createElement("path", L({}, M(a), {
			fill: "none",
			d: z(r, i)
		})) : null);
	}
	var l = z(t, i);
	return /*#__PURE__*/ I.createElement("path", L({}, M(a), {
		fill: l.slice(-1) === "Z" ? a.fill : "none",
		className: o,
		d: l
	}));
}, V = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ I.createElement(u, { fill: t }, (t) => /*#__PURE__*/ I.createElement(B, L({}, e, { fill: t }))) : /*#__PURE__*/ I.createElement(B, L({}, e, { fill: t }));
}, H = (e, t, n) => {
	switch (t) {
		case "angleAxis": return k(e, n);
		case "radiusAxis": return he(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, U = (e, t, n) => {
	switch (t) {
		case "angleAxis": return pe(e, n);
		case "radiusAxis": return ge(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Me = T([
	H,
	_e,
	t,
	U
], C), W = T([Me], se), G = T([
	A,
	e,
	ve,
	D
], S), K = T([
	A,
	H,
	_e,
	W,
	n,
	U,
	j,
	G,
	D
], x), q = T([K], (e) => {
	if (e) {
		var t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var n = (e.coordinate + 360) % 360;
			t.has(n) || t.set(n, e);
		}), Array.from(t.values());
	}
}), Ne = T([
	A,
	H,
	W,
	U,
	j,
	G,
	D
], w), Pe = ["children", "type"], Fe = ["ref"];
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(null, arguments);
}
function Ie(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ie(Object(n), !0).forEach(function(t) {
			Le(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Le(e, t, n) {
	return (t = Re(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Re(e) {
	var t = ze(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ze(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Be(e, t) {
	if (e == null) return {};
	var n, r, i = Ve(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ve(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var He = 1e-5, Ue = Math.cos(E(45)), We = "angleAxis";
function Ge(e) {
	var t = xe(), n = Ce(), r = (0, I.useMemo)(() => {
		e.children;
		var t = e.type, r = Be(e, Pe), i = re(n, "angleAxis", t);
		if (i != null) return Y(Y({}, r), {}, { type: i });
	}, [e, n]), i = r === F((e) => k(e, r?.id));
	return (0, I.useEffect)(() => r == null ? oe : (t(v(r)), () => {
		t(ce(r));
	}), [t, r]), i ? e.children : null;
}
var Ke = (e, t) => {
	var n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = O(n, r, i, e.coordinate), c = O(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
	return {
		x1: s.x,
		y1: s.y,
		x2: c.x,
		y2: c.y
	};
}, qe = (e, t) => {
	var n = Math.cos(E(-e.coordinate));
	return n > He ? t === "outer" ? "start" : "end" : n < -He ? t === "outer" ? "end" : "start" : "middle";
}, Je = (e) => {
	var t = Math.cos(E(-e.coordinate)), n = Math.sin(E(-e.coordinate));
	return Math.abs(t) <= Ue ? n > 0 ? "start" : "end" : "middle";
}, Ye = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.axisLineType, a = e.axisLine, o = e.ticks;
	if (!a) return null;
	var s = Y(Y({}, N(e)), {}, { fill: "none" }, N(a));
	if (i === "circle") return /*#__PURE__*/ I.createElement(c, J({ className: "recharts-polar-angle-axis-line" }, s, {
		cx: t,
		cy: n,
		r
	}));
	var l = o.map((e) => O(t, n, r, e.coordinate));
	return /*#__PURE__*/ I.createElement(V, J({ className: "recharts-polar-angle-axis-line" }, s, { points: l }));
}, Xe = (e) => {
	var t = e.tick, n = e.tickProps, r = e.value;
	return t ? /*#__PURE__*/ I.isValidElement(t) ? /*#__PURE__*/ I.cloneElement(t, n) : typeof t == "function" ? t(n) : /*#__PURE__*/ I.createElement(m, J({}, n, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, Ze = (e) => {
	var t = e.tick, n = e.tickLine, r = e.tickFormatter, i = e.stroke, a = e.ticks, o = N(e);
	o.ref;
	var s = Be(o, Fe), c = ye(t), l = Y(Y({}, s), {}, { fill: "none" }, N(n)), u = a.map((a, o) => {
		var u = Ke(a, e), f = qe(a, e.orientation), p = Je(a), m = Y(Y(Y({}, s), {}, {
			textAnchor: f,
			verticalAnchor: p,
			stroke: "none",
			fill: i
		}, c), {}, {
			index: o,
			payload: a,
			x: u.x2,
			y: u.y2
		});
		return /*#__PURE__*/ I.createElement(d, J({
			className: b("recharts-polar-angle-axis-tick", ie(t)),
			key: `tick-${a.coordinate}`
		}, _(e, a, o)), n && /*#__PURE__*/ I.createElement("line", J({ className: "recharts-polar-angle-axis-tick-line" }, l, u)), /*#__PURE__*/ I.createElement(Xe, {
			tick: t,
			tickProps: m,
			value: r ? r(a.value, o) : a.value
		}));
	});
	return /*#__PURE__*/ I.createElement(d, { className: "recharts-polar-angle-axis-ticks" }, u);
}, Qe = (e) => {
	var t = e.angleAxisId, n = F(me), r = F((e) => W(e, "angleAxis", t)), i = Se(), a = F((e) => q(e, "angleAxis", t, i)), o = we();
	if (n == null || !a || !a.length || r == null) return null;
	var s = Y(Y(Y({}, e), {}, { scale: r }, n), {}, {
		radius: n.outerRadius,
		ticks: a
	});
	return /*#__PURE__*/ I.createElement(ee, { zIndex: s.zIndex }, /*#__PURE__*/ I.createElement(d, { className: b("recharts-polar-angle-axis", We, s.className) }, /*#__PURE__*/ I.createElement(Ye, J({}, o?.axis, s)), /*#__PURE__*/ I.createElement(Ze, J({}, o?.axis, s))));
};
function $e(e) {
	var t = de(e, te);
	return /*#__PURE__*/ I.createElement(Ge, {
		id: t.angleAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: !1,
		allowDataOverflow: !1,
		reversed: t.reversed,
		includeHidden: !1,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tick: t.tick,
		domain: t.domain
	}, /*#__PURE__*/ I.createElement(Qe, t));
}
$e.displayName = "PolarAngleAxis";
// src/react/charts/bar-card.tsx
var X = le(), Z = [0, (e) => e * 1.2], et = new Intl.NumberFormat(ae, {
	notation: "compact",
	maximumSignificantDigits: 3
});
function tt(e) {
	return Math.abs(e) >= 1e5 ? et.format(e) : e.toLocaleString();
}
var nt = (e) => ({
	position: e,
	className: "fill-text-secondary",
	formatter: (e) => tt(Number(e))
});
function rt({ title: e, unit: t, series: n, rows: c, color: u, empty: d, layout: f = "vertical" }) {
	let p = c.filter((e) => Number.isFinite(e.value) && e.value >= 0).map((e) => ({
		name: e.name,
		value: e.value
	})), m = p.reduce((e, t) => e + t.value, 0);
	if (!m) return /* @__PURE__ */ (0, X.jsx)(a, {
		title: e,
		children: d
	});
	let h = f === "horizontal";
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: r,
		"aria-label": e,
		children: [/* @__PURE__ */ (0, X.jsx)(o, {
			title: e,
			figure: m.toLocaleString(),
			note: t(m)
		}), /* @__PURE__ */ (0, X.jsxs)(l, {
			data: p,
			config: { value: {
				label: n,
				colors: be(u)
			} },
			layout: f,
			barRadius: 4,
			chartProps: h ? { margin: {
				top: 5,
				right: 56,
				bottom: 5,
				left: 5
			} } : void 0,
			className: h ? "aspect-auto h-64 flex-none text-text-secondary" : "aspect-auto h-56 flex-none text-text-secondary",
			children: [
				/* @__PURE__ */ (0, X.jsx)(l.Grid, {}),
				h ? /* @__PURE__ */ (0, X.jsx)(l.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, X.jsx)(i, { along: "y" }),
					width: y(p.map((e) => e.name))
				}) : /* @__PURE__ */ (0, X.jsx)(l.XAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, X.jsx)(i, { along: "x" })
				}),
				h ? /* @__PURE__ */ (0, X.jsx)(l.XAxis, {
					hide: !0,
					domain: Z
				}) : /* @__PURE__ */ (0, X.jsx)(l.YAxis, {
					hide: !0,
					domain: Z
				}),
				/* @__PURE__ */ (0, X.jsx)(l.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: nt(h ? "right" : "top")
					}
				}),
				/* @__PURE__ */ (0, X.jsx)(s, {})
			]
		})]
	});
}
// src/react/charts/heat.ts
var it = [
	P("manage:heatChart.monday"),
	P("manage:heatChart.tuesday"),
	P("manage:heatChart.wednesday"),
	P("manage:heatChart.thursday"),
	P("manage:heatChart.friday"),
	P("manage:heatChart.saturday"),
	P("manage:heatChart.sunday")
], at = (e, t) => e ? Math.max(.12, e / t) : 0;
function ot(e) {
	let t = Array.from({ length: 7 }, () => Array(24).fill(0));
	for (let n of e?.hours || []) {
		let { weekday: e, hour: r, count: i } = n;
		!Number.isInteger(e) || e < 0 || e > 6 || !Number.isInteger(r) || r < 0 || r > 23 || !Number.isFinite(i) || i < 0 || (t[e][r] = (t[e][r] || 0) + i);
	}
	let n = t.flat(), r = Math.max(1, ...n);
	return {
		cells: t.flatMap((e, t) => e.map((e, n) => ({
			key: `${t}-${n}`,
			label: `${it[t]} ${n}:00`,
			count: e,
			share: at(e, r)
		}))),
		total: n.reduce((e, t) => e + t, 0)
	};
}
function st(e) {
	let t = (e?.days || []).filter((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date) && Number.isFinite(e.count) && e.count >= 0).slice().sort((e, t) => e.date.localeCompare(t.date)), n = {
		cells: [],
		total: 0,
		start: "",
		end: ""
	};
	if (!t.length) return n;
	let r = /* @__PURE__ */ new Date(`${t.at(-1).date}T00:00:00Z`), i = new Date(r);
	i.setUTCDate(i.getUTCDate() - 90);
	let a = new Map(t.map((e) => [e.date, e.count])), o = Math.max(1, ...t.map((e) => e.count)), s = Array.from({ length: 91 }, (e, t) => {
		let n = new Date(i);
		n.setUTCDate(i.getUTCDate() + t);
		let r = n.toISOString().slice(0, 10), s = a.get(r) || 0;
		return {
			key: r,
			label: r,
			count: s,
			share: at(s, o)
		};
	});
	return {
		cells: s,
		total: s.reduce((e, t) => e + t.count, 0),
		start: i.toISOString().slice(0, 10),
		end: t.at(-1).date
	};
}
// src/react/charts/heat-card.tsx
var Q = 14, $ = 17, ct = {
	4: {
		fill: "fill-chart-4",
		dot: "bg-chart-4"
	},
	5: {
		fill: "fill-chart-5",
		dot: "bg-chart-5"
	}
}, lt = {
	start: "translate-x-0",
	center: "-translate-x-1/2",
	end: "-translate-x-full"
};
function ut({ cell: e, series: t, tone: n, left: r, top: i, anchor: a }) {
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		"aria-hidden": !0,
		style: {
			left: `${r}%`,
			top: `${i}%`
		},
		className: `pointer-events-none absolute z-10 -mt-2 -translate-y-full ${f} ${lt[a]}`,
		children: [/* @__PURE__ */ (0, X.jsx)("div", {
			className: "font-medium text-foreground",
			children: e.label
		}), /* @__PURE__ */ (0, X.jsx)(h, {
			name: t,
			value: e.count,
			swatch: /* @__PURE__ */ (0, X.jsx)("i", { className: `${p} ${ct[n].dot}` })
		})]
	});
}
function dt({ title: e, words: t, cells: n, total: i, columns: a, rows: s, axis: c, footer: l, tone: u }) {
	let [d, f] = (0, I.useState)(-1), [p, m] = (0, I.useState)(0), h = (0, I.useRef)(null), ee = p < n.length ? p : 0, g = c ? 30 : 0, _ = c ? 18 : 0, v = g + a * $, y = _ + s * $, b = (e) => ({
		x: g + e % a * $,
		y: _ + Math.floor(e / a) * $
	}), x = n[d], S = x ? b(d) : null, C = S ? (S.x + Q / 2) / v : 0, w = C < .1 ? "start" : C > .9 ? "end" : "center", T = S ? {
		start: S.x,
		center: S.x + Q / 2,
		end: S.x + Q
	}[w] : 0, te = (e, t) => {
		let r = t - t % a, i = {
			ArrowLeft: t - 1,
			ArrowRight: t + 1,
			ArrowUp: t - a,
			ArrowDown: t + a,
			Home: r,
			End: Math.min(r + a, n.length) - 1
		}[e.key];
		i !== void 0 && (e.preventDefault(), i < 0 || i >= n.length || (m(i), h.current?.querySelector(`rect[data-cell="${i}"]`)?.focus()));
	};
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: r,
		children: [
			/* @__PURE__ */ (0, X.jsx)(o, {
				title: e,
				figure: (x ? x.count : i).toLocaleString(),
				note: x ? x.label : t.unit(i)
			}),
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, X.jsx)("div", {
					className: "min-w-0 overflow-x-auto",
					children: /* @__PURE__ */ (0, X.jsxs)("svg", {
						ref: h,
						role: "img",
						"aria-label": e,
						onPointerLeave: () => f(-1),
						viewBox: `0 0 ${v} ${y}`,
						className: c ? "block h-auto min-w-80 w-full" : "block h-auto w-full",
						children: [c, n.map((e, n) => {
							let { x: r, y: i } = b(n);
							return /* @__PURE__ */ (0, X.jsx)("rect", {
								"data-cell": n,
								tabIndex: n === ee ? 0 : -1,
								role: "img",
								"aria-label": `${e.label}${P("shell:format.clauseSeparator")}${t.cell(e.count)}`,
								x: r,
								y: i,
								width: Q,
								height: Q,
								rx: 3,
								fillOpacity: e.share || 1,
								opacity: d >= 0 && d !== n ? .4 : 1,
								className: e.share ? `outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring ${ct[u].fill}` : "fill-chart-track outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring",
								onPointerEnter: () => f(n),
								onFocus: () => {
									f(n), m(n);
								},
								onBlur: () => f(-1),
								onKeyDown: (e) => te(e, n)
							}, e.key);
						})]
					})
				}), x && S ? /* @__PURE__ */ (0, X.jsx)(ut, {
					cell: x,
					series: t.series,
					tone: u,
					anchor: w,
					left: T / v * 100,
					top: S.y / y * 100
				}) : null]
			}),
			/* @__PURE__ */ (0, X.jsx)("footer", {
				className: "flex flex-wrap justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: l
			})
		]
	});
}
var ft = /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [it.map((e, t) => /* @__PURE__ */ (0, X.jsx)("text", {
	x: 0,
	y: 18 + t * $ + 7,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: e
}, e)), Array.from({ length: 24 }, (e, t) => t % 2 ? null : /* @__PURE__ */ (0, X.jsx)("text", {
	x: 30 + t * $,
	y: 8,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: t
}, t))] });
function pt({ activity: e, title: t, dailyTitle: n, words: r, tone: i, empty: o }) {
	let s = ot(e), c = st(e);
	return c.cells.length ? /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "inline-grid w-full items-start gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, X.jsx)(dt, {
			title: t,
			words: r,
			tone: i,
			cells: s.cells,
			total: s.total,
			columns: 24,
			rows: 7,
			axis: ft,
			footer: /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("span", { children: P("manage:charts.dayByHour") }), /* @__PURE__ */ (0, X.jsx)("span", { children: e?.timezone || "UTC+08:00" })] })
		}), /* @__PURE__ */ (0, X.jsx)(dt, {
			title: n,
			words: r,
			tone: i,
			cells: c.cells,
			total: c.total,
			columns: 13,
			rows: 7,
			footer: /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("span", { children: c.start }), /* @__PURE__ */ (0, X.jsx)("span", { children: c.end })] })
		})]
	}) : /* @__PURE__ */ (0, X.jsx)(a, {
		title: t,
		children: o
	});
}
// src/react/components/expandable-ranking.tsx
function mt({ children: e, className: t = "", previewCount: n = 10 }) {
	let r = (0, I.useId)(), i = (0, I.useRef)(null), [a, o] = (0, I.useState)(!1), [s, c] = (0, I.useState)(!1), l = I.Children.toArray(e), u = l.length > n;
	(0, I.useLayoutEffect)(() => {
		let e = i.current;
		if (!e || !u) return;
		let t = () => {
			let t = e.children[Math.min(n, e.children.length) - 1];
			t && e.offsetWidth && (e.style.setProperty("--ranking-collapsed-height", `${t.offsetTop - e.offsetTop + t.offsetHeight}px`), e.style.setProperty("--ranking-expanded-height", `${e.scrollHeight}px`));
		};
		t();
		let r = new ResizeObserver(t);
		return r.observe(e), () => r.disconnect();
	}, [
		u,
		n,
		l.length
	]);
	let d = l.map((e, t) => !(0, I.isValidElement)(e) || t < n ? e : (0, I.cloneElement)(e, { inert: !a || void 0 }));
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		"data-expandable-ranking": !0,
		"data-expandable": u || void 0,
		"data-expanded": a || void 0,
		"data-animating": s || void 0,
		children: [/* @__PURE__ */ (0, X.jsx)("ol", {
			id: r,
			ref: i,
			"data-expandable-ranking-list": !0,
			className: t,
			onTransitionEnd: (e) => {
				e.target === i.current && e.propertyName === "max-height" && c(!1);
			},
			children: d
		}), u ? /* @__PURE__ */ (0, X.jsx)("button", {
			type: "button",
			"data-ranking-toggle": !0,
			"aria-controls": r,
			"aria-expanded": a,
			"aria-label": P(a ? "shell:expandableRanking.collapse" : "shell:expandableRanking.expand"),
			onClick: () => {
				c(!0), o((e) => !e);
			},
			children: /* @__PURE__ */ (0, X.jsx)(ne, { "aria-hidden": !0 })
		}) : null]
	});
}
export { pt as ActivityHeat, Z as BAR_DOMAIN, rt as BarCard, mt as ExpandableRanking, $e as PolarAngleAxis, V as Polygon, nt as barLabel, q as selectPolarAngleAxisTicks, W as selectPolarAxisScale, K as selectPolarAxisTicks, Ne as selectPolarGraphicalItemAxisTicks };

//# debugId=fc55e145-3027-4f69-9961-e685e98be2c9