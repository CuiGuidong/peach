(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0d691b84-0c4a-4e6b-8d8c-d5e0343c28fa", e._sentryDebugIdIdentifier = "sentry-dbid-0d691b84-0c4a-4e6b-8d8c-d5e0343c28fa");
	} catch {}
})();
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as e, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as t, $b4f18e3395fe64d7$export$3e41faf802a29e71 as n, $b4f18e3395fe64d7$export$b2539bed5023c21c as r, Button as i, ButtonLink as a, Disclosure as o, E3 as s, EmptyState as c, FLOW_LABEL_X as l, FLOW_VIEWBOX as u, Gg as d, Input as f, M6 as p, MENU_ITEM as m, MENU_ITEM_INTERACTIVE as h, MENU_POPOVER_SURFACE as g, MenuDialog as _, Note as v, OV as y, Progress as b, Rf as x, SEGMENT as ee, SEGMENTED_TRACK as te, STAT_STRIP as ne, SegmentedTabList as re, Select$1 as ie, SelectItem as ae, StatCard as S, TASTE_REFRESH_KEY as oe, TASTE_REFRESH_TASK as se, TASTE_WINDOWS as ce, TaskProgress as le, Wt as C, Xt as ue, _8 as w, __toESM as de, aB as fe, avatarInner as pe, busyProps as T, cB as me, cardClass as E, clsx as D, codedText as O, configureTasteBrowser as k, confirmModal as A, cx as j, errorMessage as M, f1 as he, fetchTaste as ge, fetchTasteJob as _e, firstGrapheme as ve, flowGraph as ye, flowLabel as be, fmtSize as xe, g4 as Se, historySpan as Ce, importTasteExport as we, jobText as Te, joinList as Ee, keepPreviousData as De, mM as Oe, pv as ke, queryClient as N, r2 as Ae, radarRows as je, rankDetail as Me, rankShares as Ne, removeTasteSource as Pe, require_jsx_runtime as Fe, require_react as Ie, serverLabel as Le, serverLabelList as Re, siteMarkUrl as ze, startTasteRefresh as Be, statCardClass as Ve, t as P, tasteDate as He, tasteDimensions as Ue, tasteHours as We, tasteKey as F, tasteRefetchInterval as Ge, tasteTime as Ke, topScores as qe, uo as Je, useBackgroundJob as Ye, useMutation as Xe, useQuery as Ze } from "./peach-app.js";
import { ActivityHeat as Qe, BAR_DOMAIN as $e, ExpandableRanking as et, PolarAngleAxis as tt, Polygon as nt, barLabel as rt, selectPolarAxisScale as it, selectPolarAxisTicks as I } from "./peach-app.expandable-ranking-msnIi2GJ.js";
import { LEGACY_AVATAR_IMG as at } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { Page as ot } from "./peach-app.page-QAncjzM1.js";
import { ActivePoints as st, AnimatedItems as ct, CHART_CARD as lt, CHART_COLORS as ut, CartesianLabelListContextProvider as dt, CategoryTick as ft, ChartBackground as pt, ChartContainer as mt, ChartHead as ht, ChartLegend as gt, ChartLegendContent as _t, ChartTip as vt, ChartTooltip as yt, ChartTooltipContent as bt, DefaultZIndexes as xt, Dots as St, EvilBarChart as Ct, LabelListFromLabelProp as wt, Layer as L, LoadingIndicator as Tt, PolarChart as Et, PolarLabelContextProvider as Dt, PolarLabelFromLabelProp as Ot, RegisterGraphicalItemId as kt, SetPolarGraphicalItem as At, SetPolarLegendPayload as jt, SetTooltipEntrySettings as Mt, Text as Nt, ZIndexLayer as Pt, adaptEventsOfChild as Ft, addRadiusAxis as It, arrayTooltipSearcher as Lt, categoryAxisWidth as Rt, cn as zt, createSelector as R, defaultPolarChartProps as Bt, defaultPolarRadiusAxisProps as Vt, fitLabel as Ht, getAxisTypeBasedOnLayout as Ut, getBandSizeOfAxis as Wt, getClassNameFromUnknown as Gt, getColorsCount as Kt, getTooltipNameProp as qt, getValueByDataKey as Jt, identity as Yt, interpolate as Xt, isArrayLike as Zt, isCategoricalAxis as Qt, isNullish as $t, iteratee as en, matchAnimationItems as tn, matchByIndex as nn, noop as rn, polarToCartesian as z, removeRadiusAxis as an, resolveDefaultProps as B, selectAngleAxis as on, selectChartDataAndAlwaysIgnoreIndexes as sn, selectChartLayout as cn, selectPolarViewBox as ln, selectRadiusAxis as un, selectUnfilteredPolarItems as dn, svgPropertiesAndEvents as fn, svgPropertiesNoEvents as V, svgPropertiesNoEventsFromUnknown as pn, tone as mn, useAnimationCallbacks as hn, useAnimationStartSnapshot as gn, useAppDispatch as _n, useAppSelector as H, useIsPanorama as vn, usePolarChartLayout as yn } from "./peach-app.chart-tip-CRxYp6KT.js";
import { BrowserIcon as bn } from "./peach-app.browser-icon-N9Od-bAf.js";
var xn = R([(e, t) => I(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), Sn = R([(e, t) => I(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), U = /* @__PURE__ */ de(Ie()), Cn = [
	"gridType",
	"radialLines",
	"angleAxisId",
	"radiusAxisId",
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"polarAngles",
	"polarRadius",
	"zIndex"
];
function wn(e, t) {
	if (e == null) return {};
	var n, r, i = Tn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Tn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(null, arguments);
}
function En(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function G(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? En(Object(n), !0).forEach(function(t) {
			Dn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : En(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Dn(e, t, n) {
	return (t = On(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function On(e) {
	var t = kn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var An = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = z(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, jn = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = G({}, V(e));
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = z(t, n, r, e), o = z(t, n, i, e);
		return /*#__PURE__*/ U.createElement("line", W({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Mn = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = G({}, V(e));
	return /*#__PURE__*/ U.createElement("circle", W({}, i, {
		className: D("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, Nn = (e) => {
	var t = e.radius, n = G({}, V(e));
	return /*#__PURE__*/ U.createElement("path", W({}, n, {
		className: D("recharts-polar-grid-concentric-polygon", e.className),
		d: An(t, e.cx, e.cy, e.polarAngles)
	}));
}, Pn = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ U.createElement(Mn, W({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ U.createElement(Nn, W({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ U.createElement(Mn, W({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ U.createElement(Nn, W({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, Fn = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: xt.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, In = (e) => {
	var t = B(e, Fn), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = wn(t, Cn), m = H(ln), h = H((e) => xn(e, i)), g = H((e) => Sn(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = G({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ U.createElement(Pt, { zIndex: y.zIndex }, /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ U.createElement(Pn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ U.createElement(jn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
In.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function Ln(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function Rn(e, t = Yt) {
	if (e == null) return;
	let n = Ln(e);
	if (n.length === 0) return;
	let r = en(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function zn(e, t = Yt) {
	if (e == null) return;
	let n = Ln(e);
	if (n.length === 0) return;
	let r = en(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var Bn = ["type"], Vn = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], Hn = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function Un(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Un(Object(n), !0).forEach(function(t) {
			Wn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Wn(e, t, n) {
	return (t = Gn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Gn(e) {
	var t = Kn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Kn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function qn(e, t) {
	if (e == null) return {};
	var n, r, i = Jn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Jn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Yn = "radiusAxis";
function Xn(e) {
	var t = _n(), n = yn(), r = (0, U.useMemo)(() => {
		var t = e.type, r = qn(e, Bn), i = Ut(n, "radiusAxis", t);
		if (i != null) return q(q({}, r), {}, { type: i });
	}, [e, n]);
	return (0, U.useEffect)(() => r == null ? rn : (t(It(r)), () => {
		t(an(r));
	}), [t, r]), null;
}
var Zn = (e, t, n, r) => {
	var i = e.coordinate;
	return z(n, r, i, t);
}, Qn = (e) => {
	var t;
	switch (e) {
		case "left":
			t = "end";
			break;
		case "right":
			t = "start";
			break;
		default: t = "middle";
	}
	return t;
}, $n = (e, t, n, r) => {
	var i = Rn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: zn(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, er = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = qn(e, Vn), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = z(n, r, s[0], i), l = z(n, r, s[1], i), u = q(q(q({}, V(o)), {}, { fill: "none" }, V(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ U.createElement("line", K({ className: "recharts-polar-radius-axis-line" }, u));
}, tr = (e, t, n) => /*#__PURE__*/ U.isValidElement(e) ? /*#__PURE__*/ U.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ U.createElement(Nt, K({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), nr = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = qn(e, Hn), s = Qn(e.orientation), c = V(o), l = pn(a), u = t.map((t, o) => {
		var u = Zn(t, e.angle, e.cx, e.cy), d = q(q(q(q({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ U.createElement(L, K({
			className: D("recharts-polar-radius-axis-tick", Gt(a)),
			key: `tick-${t.coordinate}`
		}, Ft(e, t, o)), tr(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ U.createElement(L, { className: "recharts-polar-radius-axis-ticks" }, u);
}, rr = (e) => {
	var t = e.radiusAxisId, n = H(ln), r = H((e) => it(e, "radiusAxis", t)), i = H((e) => I(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = q(q({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ U.createElement(Pt, { zIndex: a.zIndex }, /*#__PURE__*/ U.createElement(L, { className: D("recharts-polar-radius-axis", Yn, a.className) }, s && er(a, i), o && nr(a, i), /*#__PURE__*/ U.createElement(Dt, $n(a.angle, a.cx, a.cy, i), /*#__PURE__*/ U.createElement(Ot, { label: a.label }), a.children)));
};
function ir(e) {
	var t = B(e, Vt);
	return /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(Xn, {
		domain: t.domain,
		id: t.radiusAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDataOverflow: t.allowDataOverflow,
		reversed: t.reversed,
		includeHidden: t.includeHidden,
		allowDecimals: t.allowDecimals,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tickCount: t.tickCount,
		tick: t.tick
	}), /*#__PURE__*/ U.createElement(rr, t));
}
ir.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function ar(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function or(e) {
	if (Zt(e) && e.length !== 0) return ar(Ln(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function sr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function cr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? sr(Object(n), !0).forEach(function(t) {
			lr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function lr(e, t, n) {
	return (t = ur(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ur(e) {
	var t = dr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function dr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var fr = (e, t) => it(e, "radiusAxis", t), pr = R([fr], (e) => {
	if (e != null) return { scale: e };
}), mr = R([un, fr], (e, t) => {
	if (e != null && t != null) return cr(cr({}, e), {}, { scale: t });
}), hr = (e, t, n, r) => I(e, "radiusAxis", t, r), gr = (e, t, n) => on(e, n), _r = (e, t, n) => it(e, "angleAxis", n), vr = R([gr, _r], (e, t) => {
	if (e != null && t != null) return cr(cr({}, e), {}, { scale: t });
}), yr = (e, t, n, r) => I(e, "angleAxis", n, r), br = R([
	gr,
	_r,
	ln
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), xr = (e, t, n, r, i) => i, Sr = R([
	cn,
	mr,
	hr,
	vr,
	yr
], (e, t, n, r, i) => Qt(e, "radiusAxis") ? Wt(t, n, !1) : Wt(r, i, !1)), Cr = R([dn, xr], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), wr = R([
	pr,
	br,
	sn,
	Cr,
	Sr
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return Ir({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), Tr = ["id"];
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(null, arguments);
}
function Er(e, t) {
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
		t % 2 ? Er(Object(n), !0).forEach(function(t) {
			Dr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Er(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Dr(e, t, n) {
	return (t = Or(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Or(e) {
	var t = kr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ar(e, t) {
	if (e == null) return {};
	var n, r, i = jr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function jr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Mr(e, t) {
	return e && e !== "none" ? e : t;
}
var Nr = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: Mr(r, i),
		value: qt(n, t),
		payload: e
	}];
}, Pr = /*#__PURE__*/ U.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: rn,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: qt(a, t),
			hide: o,
			type: s,
			color: Mr(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ U.createElement(Mt, { tooltipEntrySettings: l });
});
function Fr(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = Ar(n, Tr), o = V(a);
	return /*#__PURE__*/ U.createElement(St, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function Ir(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = Jt(e, n.dataKey, r), d = Jt(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? or(d) : d, m = $t(p) ? 0 : t.scale.map(p) ?? 0;
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(Y(Y({}, z(o, s, m, f)), {}, {
			name: a,
			value: d,
			cx: o,
			cy: s,
			radius: m,
			angle: f,
			payload: e
		}));
	});
	var d = [];
	return c && l.forEach((e) => {
		if (Array.isArray(e.value)) {
			var n = e.value[0], r = $t(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(Y(Y({}, e), {}, { radius: r }, z(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Lr(e) {
	var t = e.showLabels, n = e.points, r = e.children, i = n.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return Y(Y({}, t), {}, {
			value: e.value ?? "",
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ U.createElement(dt, { value: t ? i : void 0 }, r);
}
function Rr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ U.isValidElement(i) ? /*#__PURE__*/ U.cloneElement(i, Y(Y({}, r), {}, { points: t })) : typeof i == "function" ? i(Y(Y({}, r), {}, { points: t })) : /*#__PURE__*/ U.createElement(nt, J({}, fn(r), {
		onMouseEnter: (e) => {
			var t = r.onMouseEnter;
			t && t(r, e);
		},
		onMouseLeave: (e) => {
			var t = r.onMouseLeave;
			t && t(r, e);
		},
		points: t,
		baseLinePoints: a ? n : void 0,
		connectNulls: o
	}));
	return /*#__PURE__*/ U.createElement(L, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ U.createElement(Fr, {
		props: r,
		points: t
	}));
}
var zr = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [Y(Y({}, e.next), {}, {
	x: Xt(e.prev.x, e.next.x, t),
	y: Xt(e.prev.y, e.next.y, t)
})] : [Y(Y({}, e.next), {}, {
	x: Xt(e.next.cx, e.next.x, t),
	y: Xt(e.next.cy, e.next.y, t)
})]);
function Br(e) {
	var t = e.props, n = e.previousPointsRef, r = e.previousBaseLinePointsRef, i = t.points, a = t.baseLinePoints, o = t.isAnimationActive, s = t.animationBegin, c = t.animationDuration, l = t.animationEasing, u = t.animationMatchBy, d = t.animationInterpolateFn, f = t.onAnimationStart, p = t.onAnimationEnd, m = gn(t, r), h = m.startValue, g = tn(h ?? null, a, u), _ = hn(f, p), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = yn();
	return x == null ? null : /*#__PURE__*/ U.createElement(Lr, {
		showLabels: !v,
		points: i
	}, /*#__PURE__*/ U.createElement(ct, {
		animationInput: t,
		animationIdPrefix: "recharts-radar-",
		items: i,
		previousItemsRef: n,
		isAnimationActive: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		onAnimationStart: y,
		onAnimationEnd: b,
		animationInterpolateFn: d,
		animationMatchBy: u,
		layout: x
	}, (e, n) => {
		var r = n === 1 ? a : d(g, n, x);
		return m.syncStepValue(r, n), /*#__PURE__*/ U.createElement(Rr, {
			points: e,
			baseLinePoints: r,
			props: t
		});
	}), /*#__PURE__*/ U.createElement(wt, { label: t.label }), t.children);
}
function Vr(e) {
	var t = (0, U.useRef)(void 0), n = (0, U.useRef)(void 0);
	return /*#__PURE__*/ U.createElement(Br, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var Hr = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: nn,
	animationInterpolateFn: zr,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: xt.area
};
function Ur(e) {
	var t = e.hide, n = e.className, r = e.points;
	if (t) return null;
	var i = D("recharts-radar", n);
	return /*#__PURE__*/ U.createElement(Pt, { zIndex: e.zIndex }, /*#__PURE__*/ U.createElement(L, { className: i }, /*#__PURE__*/ U.createElement(Vr, e)), /*#__PURE__*/ U.createElement(st, {
		points: r,
		mainColor: Mr(e.stroke, e.fill),
		itemDataKey: e.dataKey,
		activeDot: e.activeDot
	}));
}
function Wr(e) {
	var t = vn(), n = H((n) => wr(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ U.createElement(Ur, J({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Gr(e) {
	var t = B(e, Hr);
	return /*#__PURE__*/ U.createElement(kt, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(At, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ U.createElement(jt, { legendPayload: Nr(t) }), /*#__PURE__*/ U.createElement(Pr, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ U.createElement(Wr, J({}, t, { id: e }))));
}
Gr.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function Kr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function qr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Kr(Object(n), !0).forEach(function(t) {
			Jr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Jr(e, t, n) {
	return (t = Yr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Yr(e) {
	var t = Xr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Xr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Zr = ["axis"], Qr = qr(qr({}, Bt), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), $r = /*#__PURE__*/ (0, U.forwardRef)((e, t) => {
	var n = B(e, Qr);
	return /*#__PURE__*/ U.createElement(Et, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Zr,
		tooltipPayloadSearcher: Lt,
		categoricalChartProps: n,
		ref: t
	});
}), X = Fe(), ei = U.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = U.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ (0, X.jsx)(ni, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ (0, X.jsx)(ri, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ (0, X.jsx)(ti, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), ti = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: a,
	mask: o ? `url(#${o})` : void 0,
	children: [/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
		id: `dot-clip-${n}`,
		children: /* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3
		})
	}) }), /* @__PURE__ */ (0, X.jsx)("rect", {
		x: "0",
		y: t - 3,
		width: "100%",
		height: 6,
		fill: i,
		fillOpacity: r,
		clipPath: `url(#dot-clip-${n})`
	})]
}));
ti.displayName = "DefaultDot";
var ni = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: zt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6
			})
		}) }),
		/* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 6,
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, X.jsx)("rect", {
			x: "0",
			y: t - (6 - 5 / 2),
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-inner-${n})`
		}),
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-inner-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6 - 5 / 2
			})
		}) })
	]
}));
ni.displayName = "PrimaryBorderDot";
var ri = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: zt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 3.5
			})
		}) }),
		/* @__PURE__ */ (0, X.jsx)("rect", {
			x: "0",
			y: t - 3 - 1 / 2,
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-${n})`
		}),
		/* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3 - 1 / 2,
			fill: "currentColor"
		})
	]
}));
ri.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var ii = 1, ai = .3, oi = 6, si = 1500, ci = "value", li = (0, U.createContext)(null);
function Z() {
	let e = (0, U.use)(li);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Q({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: o = null, onSelectionChange: s, isLoading: c = !1, loadingPoints: l }) {
	let u = (0, U.useId)().replace(/:/g, ""), [d, f] = (0, U.useState)(o), p = Ti(c, l), m = (0, U.useCallback)((e) => {
		f(e), s?.(e);
	}, [s]), h = (0, U.useMemo)(() => ({
		config: e,
		isLoading: c,
		selectedDataKey: d,
		selectDataKey: m
	}), [
		e,
		c,
		d,
		m
	]);
	return /* @__PURE__ */ (0, X.jsx)(li, {
		value: h,
		children: /* @__PURE__ */ (0, X.jsxs)(mt, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ (0, X.jsx)(Tt, { isLoading: c }), /* @__PURE__ */ (0, X.jsxs)($r, {
				id: u,
				data: c ? p : t,
				...i,
				children: [
					a && /* @__PURE__ */ (0, X.jsx)(pt, { variant: a }),
					n,
					c && /* @__PURE__ */ (0, X.jsx)(Ei, {})
				]
			})]
		})
	});
}
function ui({ dataKey: e, variant: t = "filled", fillOpacity: n = ai, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = Z(), d = (0, U.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = vi(a, d, e, p.dot);
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(Gr, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: ii,
		fill: m ? `url(#${d}-radar-fill-${e})` : "none",
		fillOpacity: m ? n * p.fill : 0,
		dot: h,
		activeDot: g,
		filter: r ? `url(#${d}-radar-glow-${e})` : void 0,
		className: "transition-opacity duration-200",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: () => {
			i && u(l === e ? null : e);
		},
		...o
	}), /* @__PURE__ */ (0, X.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, X.jsx)(bi, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ (0, X.jsx)(xi, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ (0, X.jsx)(Si, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ (0, X.jsx)(Ci, {
			id: d,
			dataKey: e
		})
	] })] });
}
var di = () => null, fi = () => null;
function pi({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ (0, X.jsx)(In, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function mi({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = Z();
	return r ? null : /* @__PURE__ */ (0, X.jsx)(tt, {
		tick: e,
		tickLine: t,
		...n
	});
}
function hi({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = Z();
	return i ? null : /* @__PURE__ */ (0, X.jsx)(ir, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function gi({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = Z();
	return r ? null : /* @__PURE__ */ (0, X.jsx)(yt, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, X.jsx)(bt, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function _i({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = Z();
	return i ? null : /* @__PURE__ */ (0, X.jsx)(gt, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, X.jsx)(_t, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var vi = (e, t, n, r) => {
	let i = !1, a = !1;
	return U.Children.forEach(e, (e) => {
		if ((0, U.isValidElement)(e)) {
			if (e.type === di) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ (0, X.jsx)(ei, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === fi) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ (0, X.jsx)(ei, {
					type: i,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
		}
	}), {
		dot: i,
		activeDot: a
	};
}, yi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("stop", {
	offset: "0%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[0]
}), /* @__PURE__ */ (0, X.jsx)("stop", {
	offset: "100%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[n.length - 1]
})] }) : /* @__PURE__ */ (0, X.jsx)(X.Fragment, { children: Array.from({ length: t }, (r, i) => {
	let a = `${i / (t - 1) * 100}%`;
	return /* @__PURE__ */ (0, X.jsx)("stop", {
		offset: a,
		stopColor: `var(--color-${e}-${i}, var(--color-${e}-0))`,
		stopOpacity: n?.[i]
	}, a);
}) }), bi = ({ id: e, dataKey: t, config: n }) => {
	let r = Kt(n[t] ?? {});
	return /* @__PURE__ */ (0, X.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ (0, X.jsx)(yi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, xi = ({ id: e, dataKey: t, config: n }) => {
	let r = Kt(n[t] ?? {});
	return /* @__PURE__ */ (0, X.jsx)("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ (0, X.jsx)(yi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, Si = ({ id: e, dataKey: t, config: n }) => {
	let r = Kt(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ (0, X.jsx)("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ (0, X.jsx)(yi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, Ci = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, X.jsxs)("filter", {
	id: `${e}-radar-glow-${t}`,
	x: "-50%",
	y: "-50%",
	width: "200%",
	height: "200%",
	children: [
		/* @__PURE__ */ (0, X.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "4",
			result: "blur"
		}),
		/* @__PURE__ */ (0, X.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, X.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, X.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, X.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}), wi = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[ci]: 30 + Math.random() * 70
}));
function Ti(e, t = oi) {
	let [n, r] = (0, U.useState)(0);
	return (0, U.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, si);
		return () => clearInterval(t);
	}, [e]), (0, U.useMemo)(() => wi(t), [t, n]);
}
var Ei = () => /* @__PURE__ */ (0, X.jsx)(Gr, {
	dataKey: ci,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: si,
	animationEasing: "ease-in-out"
});
Q.Radar = ui, Q.Dot = di, Q.ActiveDot = fi, Q.PolarGrid = pi, Q.PolarAngleAxis = mi, Q.PolarRadiusAxis = hi, Q.Tooltip = gi, Q.Legend = _i;
// src/react/taste/charts.tsx
function Di(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ (0, X.jsxs)("g", { children: [/* @__PURE__ */ (0, X.jsx)("title", { children: o }), /* @__PURE__ */ (0, X.jsx)(Nt, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: Ht(o, c - 4)
	})] });
}
var Oi = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], ki = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], Ai = { value: {
	label: P("manage:tasteCharts.tagOccurrences"),
	colors: mn(ut[3])
} }, ji = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], Mi = 26, Ni = { radius: Ai.value }, Pi = (e, t) => Math.sqrt(e / t);
function Fi({ rows: e, label: t }) {
	let n = je(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: Pi(e.value, r)
	}));
	return /* @__PURE__ */ (0, X.jsx)("div", {
		role: "img",
		"aria-label": P("manage:tasteCharts.radarSummary", {
			label: t,
			items: Ee(i.map((e) => e.name))
		}),
		children: /* @__PURE__ */ (0, X.jsxs)(Q, {
			data: i,
			config: Ni,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ (0, X.jsx)(Q.PolarGrid, {}),
				/* @__PURE__ */ (0, X.jsx)(Q.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ (0, X.jsx)(Di, {})
				}),
				/* @__PURE__ */ (0, X.jsx)(Q.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ (0, X.jsx)(Q.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ (0, X.jsx)(vt, { valueKey: "value" })
			]
		})
	});
}
function Ii({ rows: e, label: t }) {
	let n = qe(e, 8);
	return n.length ? /* @__PURE__ */ (0, X.jsx)("section", {
		"aria-label": t,
		className: `flex grow flex-col ${ji[n.length]}`,
		children: /* @__PURE__ */ (0, X.jsxs)(Ct, {
			data: n,
			config: Ai,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: Mi,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ (0, X.jsx)(Ct.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, X.jsx)(ft, { along: "y" }),
					width: Rt(n.map((e) => e.name))
				}),
				/* @__PURE__ */ (0, X.jsx)(Ct.XAxis, {
					hide: !0,
					domain: $e
				}),
				/* @__PURE__ */ (0, X.jsx)(Ct.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: rt("right")
					}
				}),
				/* @__PURE__ */ (0, X.jsx)(vt, {})
			]
		})
	}) : null;
}
function Li({ flows: e }) {
	let [t, n] = (0, U.useState)(null), r = ye(e);
	if (!r) return null;
	let i = t?.node ?? null, a = (e, n) => t ? i === null ? t.label === n : e.source === i || e.target === i : !0;
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: lt,
		children: [
			/* @__PURE__ */ (0, X.jsx)(ht, {
				title: P("manage:tasteCharts.creatorLeadSources"),
				figure: (t ? t.value : r.total).toLocaleString(),
				note: t ? t.label : P("manage:tasteCharts.leadsUnit", { count: r.total })
			}),
			/* @__PURE__ */ (0, X.jsx)("ol", {
				"aria-label": P("manage:tasteCharts.sitesAndCreatorLeads"),
				className: "flex flex-col sm:hidden",
				children: [...r.links].sort((e, t) => t.value - e.value).map((e) => /* @__PURE__ */ (0, X.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 border-b border-separator-border py-2 text-body-2-regular text-text-primary last:border-b-0",
					children: [/* @__PURE__ */ (0, X.jsx)("span", {
						className: "min-w-0 wrap-anywhere",
						children: e.label
					}), /* @__PURE__ */ (0, X.jsx)("b", {
						className: "shrink-0 tabular-nums",
						children: e.value.toLocaleString()
					})]
				}, e.key))
			}),
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "min-w-0 max-sm:hidden",
				children: /* @__PURE__ */ (0, X.jsxs)("svg", {
					viewBox: `0 0 ${u.width} ${r.height}`,
					fill: "none",
					role: "img",
					"aria-label": P("manage:tasteCharts.sitesAndCreatorLeads"),
					className: "block h-auto w-full",
					onPointerLeave: () => n(null),
					children: [/* @__PURE__ */ (0, X.jsx)("g", { children: r.links.map((e) => /* @__PURE__ */ (0, X.jsx)("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": P("manage:tasteCharts.leadCount", {
							name: e.label,
							count: e.value
						}),
						fillOpacity: 0,
						strokeOpacity: a(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${Oi[e.color]}`,
						onPointerEnter: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onFocus: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onBlur: () => n(null)
					}, e.key)) }), /* @__PURE__ */ (0, X.jsx)("g", { children: r.nodes.map((e) => /* @__PURE__ */ (0, X.jsxs)("g", {
						tabIndex: 0,
						role: "img",
						"aria-label": P("manage:tasteCharts.leadCount", {
							name: e.name,
							count: e.value
						}),
						className: "outline-none focus-visible:opacity-100",
						onPointerEnter: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onFocus: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onBlur: () => n(null),
						children: [/* @__PURE__ */ (0, X.jsx)("rect", {
							x: e.x,
							y: e.y,
							width: 10,
							height: e.height,
							rx: 5,
							className: e.side === "source" ? ki[e.color] : "fill-text-secondary"
						}), /* @__PURE__ */ (0, X.jsxs)("text", {
							x: l[e.side],
							y: e.y + e.height / 2,
							textAnchor: e.side === "source" ? "end" : "start",
							dominantBaseline: "middle",
							className: "fill-text-secondary text-caption-1-regular",
							children: [be(e.name), /* @__PURE__ */ (0, X.jsx)("tspan", {
								x: l[e.side],
								dy: 15,
								children: e.side === "source" ? e.value.toLocaleString() : `${e.share.toFixed(1)}%`
							})]
						})]
					}, e.id)) })]
				})
			}),
			/* @__PURE__ */ (0, X.jsxs)("footer", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary max-sm:hidden",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { children: P("manage:tasteCharts.sourceSites") }), /* @__PURE__ */ (0, X.jsx)("span", { children: P("manage:tasteCharts.creatorsLeadShare") })]
			})
		]
	});
}
// src/react/taste/browser-sources.tsx
var Ri = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function zi({ browsers: e, sources: t, range: n, children: r }) {
	let [a, o] = (0, U.useState)(!1), [s, c] = (0, U.useState)(""), [l, u] = (0, U.useState)(""), m = Xe({
		mutationFn: (e) => k(e, n),
		onSuccess: (e) => {
			N.setQueryData(F(n), e.dashboard), o(!1), c(""), u("");
		}
	});
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: `${E()} flex flex-col gap-4`,
		"aria-label": P("manage:tasteSources.dataSources"),
		children: [
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, X.jsx)("h3", {
					className: "text-title-2-medium text-text-primary",
					children: P("manage:tasteSources.dataSources")
				}), /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: () => o(!0),
					disabled: a,
					children: P("manage:tasteSources.addBrowser")
				})]
			}),
			m.error ? /* @__PURE__ */ (0, X.jsx)(v, {
				tone: "error",
				children: M(m.error)
			}) : null,
			a ? /* @__PURE__ */ (0, X.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault(), m.isPending || m.mutate({
						operation: "add",
						name: s,
						path: l
					});
				},
				children: [
					/* @__PURE__ */ (0, X.jsx)(f, {
						label: P("manage:tasteSources.browserName"),
						value: s,
						onChange: c,
						maxLength: 80,
						isRequired: !0,
						isDisabled: m.isPending
					}),
					/* @__PURE__ */ (0, X.jsx)(f, {
						label: P("manage:tasteSources.profilePath"),
						value: l,
						onChange: u,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: m.isPending,
						hint: P("manage:tasteSources.profilePathHint")
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "ghost",
							disabled: m.isPending,
							onClick: () => {
								o(!1), m.reset();
							},
							children: P("manage:shared.cancel")
						}), /* @__PURE__ */ (0, X.jsx)(i, {
							type: "submit",
							variant: "secondary",
							disabled: !s.trim() || !l.trim(),
							...T(m.isPending),
							children: P("manage:shared.add")
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "inline-grid w-full min-w-0 gap-2 sm:grid-cols-2",
				children: [r, e.map((e) => {
					let n = t.filter((t) => e.source_keys?.includes(t.source_key)), r = n.reduce((e, t) => e + (t.visits || 0), 0), a = n.reduce((e, t) => e + (t.bookmarks || 0), 0);
					return /* @__PURE__ */ (0, X.jsxs)("div", {
						"data-taste-source": "browser",
						className: Ri,
						children: [
							/* @__PURE__ */ (0, X.jsx)("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ (0, X.jsx)(bn, { name: e.name })
							}),
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: "flex min-w-0 grow flex-col gap-0.5",
								children: [
									/* @__PURE__ */ (0, X.jsx)("b", {
										className: "text-body-2-medium break-words text-text-primary",
										children: e.name
									}),
									/* @__PURE__ */ (0, X.jsx)("span", {
										className: "break-all text-caption-1-regular text-text-secondary",
										children: e.path
									}),
									/* @__PURE__ */ (0, X.jsx)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: e.enabled ? e.available ? P("manage:tasteSources.profileCount", { count: e.profiles }) : P("manage:tasteSources.profileUnavailable") : P("manage:tasteSources.readingStopped")
									}),
									n.length ? /* @__PURE__ */ (0, X.jsxs)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											P("manage:tasteSources.historyCount", { count: r }),
											" · ",
											P("manage:tasteSources.bookmarkCount", { count: a })
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("span", {
								className: "flex shrink-0 gap-1",
								children: [/* @__PURE__ */ (0, X.jsx)(i, {
									variant: "secondary",
									size: "small",
									...T(m.isPending),
									iconOnly: !0,
									leadingIcon: e.enabled ? y : d,
									"aria-label": `${e.enabled ? P("manage:tasteSources.stopReading") : P("manage:customSources.enable")} ${e.name}`,
									onClick: () => {
										e.enabled ? A({
											title: P("manage:tasteSources.stopReadingTitle", { browser: e.name }),
											body: P("manage:tasteSources.stopReadingBody"),
											confirmLabel: P("manage:tasteSources.stopReading"),
											onConfirm: () => m.mutateAsync({
												operation: "disable",
												id: e.id
											})
										}) : m.mutate({
											operation: "enable",
											id: e.id
										});
									}
								}), /* @__PURE__ */ (0, X.jsx)(i, {
									variant: "secondary",
									size: "small",
									iconOnly: !0,
									leadingIcon: p,
									...T(m.isPending),
									"aria-label": P("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
									onClick: () => {
										A({
											title: P("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
											body: P("manage:tasteSources.deleteBrowserBody"),
											confirmLabel: P("manage:tasteSources.deleteBrowser"),
											danger: !0,
											onConfirm: () => m.mutateAsync({
												operation: "delete_browser",
												id: e.id
											})
										});
									}
								})]
							})
						]
					}, e.id);
				})]
			})
		]
	});
}
// src/react/taste/taste-page.tsx
var Bi = 10, Vi = j(m, h, "text-body-2-medium"), Hi = `${E()} flex flex-col gap-4`, Ui = "rounded-xl bg-background-primary-default p-3", Wi = P("manage:taste.readHistoryTooltip"), Gi = P("manage:taste.noSourceHint"), Ki = P("manage:taste.noLeadHint"), qi = P("manage:taste.noCategoryHint"), Ji = P("manage:taste.gapHint"), Yi = P("manage:taste.noBrowserTagHint"), Xi = P("manage:taste.noBrowserCreatorHint"), Zi = P("manage:taste.noDomainHint"), Qi = P("manage:taste.noPeachTagHint"), $i = P("manage:taste.noPeachCreatorHint"), ea = P("manage:taste.noPeachActressHint"), ta = P("manage:taste.guideLocal"), na = P("manage:taste.guideRemote"), ra = P("manage:taste.guideRefresh"), ia = P("manage:taste.removeSourceBody"), aa = "peach-taste-guide-dismissed", oa = "\0", sa = (e, t) => {
	let [n = "", r = ""] = e.split(oa);
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		n,
		t,
		r
	] });
}, ca = (0, U.createContext)(/* @__PURE__ */ (0, X.jsx)(a, {
	size: "small",
	href: "/",
	children: P("manage:shared.browseCollection")
}));
function la() {
	return (0, U.useContext)(ca);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ (0, X.jsx)("div", {
		className: Ve(),
		children: /* @__PURE__ */ (0, X.jsx)(S, {
			label: t,
			icon: e,
			accent: a,
			figure: n,
			footer: /* @__PURE__ */ (0, X.jsx)("span", {
				className: "block min-w-0 truncate",
				title: i || r,
				children: r ?? ""
			})
		})
	});
}
function ua({ name: e, domain: t }) {
	return /* @__PURE__ */ (0, X.jsxs)("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [ve(e).toUpperCase(), /* @__PURE__ */ (0, X.jsx)("img", {
			src: ze({ domain: t }),
			alt: "",
			loading: "lazy",
			width: 20,
			height: 20,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute size-5 object-contain"
		})]
	});
}
function da({ html: e }) {
	return /* @__PURE__ */ (0, X.jsx)("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${at}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function fa({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ (0, X.jsx)(c, {
		size: "compact",
		icon: ke,
		title: P("manage:taste.notEnoughData"),
		actions: /* @__PURE__ */ (0, X.jsx)(la, {}),
		children: r
	});
	let a = Ne(e);
	return /* @__PURE__ */ (0, X.jsx)(et, {
		previewCount: Bi,
		className: "inline-grid w-full gap-x-7 gap-y-2 sm:grid-cols-2",
		children: e.map((e, r) => {
			let o = !!t && !!e.peach_items, s = String(e.source_domain || ""), c = /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
				/* @__PURE__ */ (0, X.jsx)("svg", {
					viewBox: "0 0 100 1",
					preserveAspectRatio: "none",
					"aria-hidden": !0,
					className: "absolute inset-0 -z-10 size-full overflow-hidden rounded-lg opacity-15",
					children: /* @__PURE__ */ (0, X.jsx)("rect", {
						width: a[r],
						height: 1,
						className: "fill-chart-4"
					})
				}),
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
					children: r + 1
				}),
				n === "domain" ? /* @__PURE__ */ (0, X.jsx)(ua, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ (0, X.jsx)(ua, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ (0, X.jsx)(da, { html: pe(e.name, e.entity_id ? {
					id: e.entity_id,
					has_image: !!e.has_image,
					image_version: e.image_version,
					avatar_focus: e.avatar_focus,
					avatar_stand_in: e.avatar_stand_in
				} : null, e.has_avatar ? e.representative_asset_id ?? null : null, n === "creator" ? "creator" : t || "performer") }) : null,
				/* @__PURE__ */ (0, X.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, X.jsx)("b", {
						className: "min-w-0 text-body-medium break-words text-text-primary",
						children: e.name
					}), /* @__PURE__ */ (0, X.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: Me(e)
					})]
				}),
				o ? /* @__PURE__ */ (0, X.jsx)(Ae, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-text-tertiary"
				}) : null
			] }), l = "relative isolate flex min-h-11 w-full min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left";
			return /* @__PURE__ */ (0, X.jsx)("li", {
				className: "min-w-0",
				children: o ? /* @__PURE__ */ (0, X.jsx)("button", {
					type: "button",
					onClick: () => i(t, e.name),
					className: `${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: c
				}) : /* @__PURE__ */ (0, X.jsx)("div", {
					className: l,
					children: c
				})
			}, `${e.name}:${r}`);
		})
	});
}
function pa({ label: e, panels: i, onSignal: a }) {
	return /* @__PURE__ */ (0, X.jsxs)(r, {
		className: `${E({ padding: "none" })} flex flex-col`,
		children: [/* @__PURE__ */ (0, X.jsx)("div", {
			className: "px-4 pt-3",
			children: /* @__PURE__ */ (0, X.jsx)(re, {
				"aria-label": e,
				className: te,
				children: i.map((e) => /* @__PURE__ */ (0, X.jsx)(n, {
					id: e.id,
					className: ee,
					children: e.name
				}, e.id))
			})
		}), i.map((e) => /* @__PURE__ */ (0, X.jsx)(t, {
			id: e.id,
			className: "px-4 pt-3.5 pb-4",
			children: /* @__PURE__ */ (0, X.jsx)(fa, {
				...e.props,
				onSignal: a
			})
		}, e.id))]
	});
}
function ma({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, o = [...(r.explore || []).map((e) => ({
		key: `tag:${e.tag}`,
		title: O(e, "title"),
		detail: O(e, "detail"),
		act: () => t("tag", e.tag)
	})), ...(r.next_steps || []).map((e) => ({
		key: `route:${e.route}`,
		title: O(e, "title"),
		detail: O(e, "detail"),
		act: () => n(e.route)
	}))];
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: Hi,
		"aria-label": P("manage:taste.summary"),
		children: [
			/* @__PURE__ */ (0, X.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, X.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: P("manage:taste.summary")
					}),
					/* @__PURE__ */ (0, X.jsx)("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: O(r, "headline")
					}),
					/* @__PURE__ */ (0, X.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ (0, X.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: O(i, "label") || P("manage:taste.stillLearning")
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ (0, X.jsxs)("div", {
					className: `flex min-w-0 flex-col gap-1 ${Ui}`,
					children: [/* @__PURE__ */ (0, X.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: O(e, "label")
					}), /* @__PURE__ */ (0, X.jsx)("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: O(e, "text")
					})]
				}, e.label))
			}) : null,
			o.length ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-col gap-2",
				children: o.map((e) => /* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${Ui} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ (0, X.jsxs)("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ (0, X.jsx)("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ (0, X.jsx)("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ (0, X.jsx)(Ae, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ (0, X.jsx)(c, {
				size: "compact",
				icon: ke,
				title: P("manage:taste.nothingToExplore"),
				actions: /* @__PURE__ */ (0, X.jsx)(a, {
					size: "small",
					href: "/",
					children: P("manage:shared.browseCollection")
				}),
				children: Ki
			})
		]
	});
}
function ha({ onboarding: e, done: t }) {
	let [n, r] = (0, U.useState)(() => {
		try {
			return localStorage.getItem(aa) === "1";
		} catch {
			return !1;
		}
	});
	return t || n ? null : /* @__PURE__ */ (0, X.jsx)("div", {
		className: E({
			padding: "none",
			className: "p-4"
		}),
		children: /* @__PURE__ */ (0, X.jsxs)(o, {
			summary: P("manage:taste.importGuide"),
			defaultOpen: e,
			children: [
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ta
				}),
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: na
				}),
				/* @__PURE__ */ (0, X.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ (0, X.jsx)("li", { children: sa(P("manage:taste.guideChrome", { link: oa }), /* @__PURE__ */ (0, X.jsxs)("a", {
						href: "https://takeout.google.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-text-primary underline-offset-4 hover:underline",
						children: ["Google Takeout", /* @__PURE__ */ (0, X.jsx)(C, {
							"aria-hidden": !0,
							className: "size-(--icon-inline) shrink-0"
						})]
					})) }), /* @__PURE__ */ (0, X.jsx)("li", { children: sa(P("manage:taste.guideOther", { link: oa }), /* @__PURE__ */ (0, X.jsxs)("a", {
						href: "https://github.com/purarue/browserexport",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-text-primary underline-offset-4 hover:underline",
						children: ["browserexport", /* @__PURE__ */ (0, X.jsx)(C, {
							"aria-hidden": !0,
							className: "size-(--icon-inline) shrink-0"
						})]
					})) })]
				}),
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ra
				}),
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "self-start",
					children: /* @__PURE__ */ (0, X.jsx)(i, {
						variant: "secondary",
						size: "small",
						onClick: () => {
							try {
								localStorage.setItem(aa, "1");
							} catch {}
							r(!0);
						},
						children: P("manage:shared.skip")
					})
				})
			]
		})
	});
}
function ga({ busy: t, onRefresh: n, onImport: r, onImportBookmarks: a }) {
	let o = (0, U.useRef)(null), [c, l] = (0, U.useState)(!1), u = (e) => {
		l(!1), e();
	};
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsxs)("span", {
		"data-guide-target": "history-import",
		"data-button-group": !0,
		"data-split-button": !0,
		"data-variant": "primary",
		children: [/* @__PURE__ */ (0, X.jsx)(i, {
			leadingIcon: s,
			title: Wi,
			onClick: n,
			...T(t),
			children: P("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, X.jsx)(i, {
			ref: o,
			iconOnly: !0,
			leadingIcon: he,
			"aria-label": P("manage:taste.moreHistoryOptions"),
			"aria-haspopup": "dialog",
			"aria-expanded": c,
			...T(t),
			onClick: () => {
				t || l(!0);
			}
		})]
	}), /* @__PURE__ */ (0, X.jsx)(e, {
		triggerRef: o,
		isOpen: c,
		onOpenChange: l,
		placement: "bottom end",
		offset: 4,
		className: g,
		children: /* @__PURE__ */ (0, X.jsxs)(_, {
			"aria-label": P("manage:taste.moreHistoryOptions"),
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: Vi,
					onClick: () => u(n),
					children: [/* @__PURE__ */ (0, X.jsx)(s, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.readBrowserHistory")]
				}),
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: Vi,
					onClick: () => u(r),
					children: [/* @__PURE__ */ (0, X.jsx)(x, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.importHistoryFile")]
				}),
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: Vi,
					onClick: () => u(a),
					children: [/* @__PURE__ */ (0, X.jsx)(Se, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.importBookmarksFile")]
				})
			]
		})
	})] });
}
function _a({ sources: e, browsers: t, window: n, toast: r, emptyActions: a }) {
	let o = Xe({
		mutationFn: (e) => Pe(e, n),
		onSuccess: (e) => {
			N.setQueryData(F(n), e.dashboard), r(P("manage:taste.sourceRemoved"));
		}
	});
	return /* @__PURE__ */ (0, X.jsxs)(zi, {
		browsers: t,
		sources: e,
		range: n,
		children: [o.error ? /* @__PURE__ */ (0, X.jsx)("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ (0, X.jsx)(v, {
				tone: "error",
				children: M(o.error)
			})
		}) : null, e.length ? /* @__PURE__ */ (0, X.jsx)(X.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ (0, X.jsxs)("div", {
			"data-taste-source": "import",
			className: Ri,
			children: [
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
					children: e.browser === "browserexport" ? /* @__PURE__ */ (0, X.jsx)(x, {
						"aria-hidden": !0,
						className: "size-4"
					}) : /* @__PURE__ */ (0, X.jsx)(w, {
						"aria-hidden": !0,
						className: "size-4"
					})
				}),
				/* @__PURE__ */ (0, X.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, X.jsx)("b", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.profile
					}), /* @__PURE__ */ (0, X.jsx)("small", {
						className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
						children: P(e.bookmarks ? "manage:taste.importedBookmarks" : "manage:taste.importedHistory", {
							host: e.host,
							count: Number(e.visits || e.bookmarks || 0)
						})
					})]
				}),
				/* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					size: "small",
					"aria-label": P("manage:taste.removeSourceLabel", { source: e.profile }),
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: p,
					...T(o.isPending),
					onClick: () => {
						o.isPending || A({
							title: P("manage:taste.removeSource"),
							body: ia,
							confirmLabel: P("manage:taste.removeSource"),
							onConfirm: () => o.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ (0, X.jsx)(c, {
			size: "compact",
			icon: w,
			title: P("manage:taste.noSourcesTitle"),
			actions: a,
			children: Gi
		})]
	});
}
function va(e) {
	let { onSignal: o, navigate: s, toast: l, onboarding: u } = e, [d, f] = (0, U.useState)("all"), [p, m] = (0, U.useState)("browser"), h = (0, U.useRef)(null), g = (0, U.useRef)(null), _ = Ze({
		queryKey: F(d),
		queryFn: ({ signal: e }) => ge(d, e),
		placeholderData: De,
		refetchInterval: Ge
	}), { job: y, running: b, outcome: x, start: S } = Ye({
		queryKey: oe,
		queryFn: ({ signal: e }) => _e(e),
		start: () => Be(d),
		taskKey: se,
		onFinish: (e) => {
			e.status !== "failed" && (N.invalidateQueries({ queryKey: ["taste"] }), l(e.warnings?.length ? P("manage:taste.partialHistory") : P("manage:taste.analysisUpdated")));
		}
	}), C = Xe({
		mutationFn: (e) => ge(e, void 0, !0),
		onSuccess: (e, t) => {
			N.setQueryData(F(t), e);
		}
	}), w = Xe({
		mutationFn: (e) => we(e),
		onSuccess: (e) => {
			N.setQueryData(F("all"), e.dashboard), f("all"), l(P("manage:taste.dataImported"));
		}
	}), de = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !w.isPending && (w.reset(), w.mutate(t));
	}, pe = () => {
		b || S.isPending || (S.reset(), S.mutate());
	}, E = _.data;
	if (!E) return /* @__PURE__ */ (0, X.jsx)(ot, { children: /* @__PURE__ */ (0, X.jsx)(v, {
		tone: "error",
		title: P("manage:taste.loadFailedTitle"),
		children: _.error ? M(_.error) : P("manage:taste.loadFailedBody")
	}) });
	let D = E.summary || {}, O = E.coverage || {}, k = E.rankings || {}, A = E.storage || {}, j = Ue(k.browser_categories || []), he = je(j).length > 0, ve = E.gaps || [], ye = O.tagged || 0, be = O.identified || 0, Ee = S.error ? M(S.error) : w.error ? M(w.error) : C.error ? M(C.error) : x?.status === "failed" ? Te(x, "error") || P("manage:taste.readNotFound") : "", Ae = /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ (0, X.jsx)(i, {
			variant: "secondary",
			...T(b || S.isPending || w.isPending),
			onClick: pe,
			children: P("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, X.jsx)(i, {
			variant: "secondary",
			...T(w.isPending),
			onClick: () => h.current?.click(),
			children: P("manage:taste.importHistoryFile")
		})]
	});
	return /* @__PURE__ */ (0, X.jsx)(ot, { children: /* @__PURE__ */ (0, X.jsxs)(ca, {
		value: d === "all" ? p === "peach" ? /* @__PURE__ */ (0, X.jsx)(a, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: P("manage:shared.browseCollection")
		}) : Ae : /* @__PURE__ */ (0, X.jsx)(i, {
			size: "small",
			variant: "secondary",
			onClick: () => f("all"),
			children: P("manage:taste.viewAllTime")
		}),
		children: [
			/* @__PURE__ */ (0, X.jsxs)(r, {
				selectedKey: p,
				onSelectionChange: (e) => m(String(e)),
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, X.jsxs)(re, {
							"aria-label": P("manage:taste.evidenceLabel"),
							className: te,
							children: [/* @__PURE__ */ (0, X.jsx)(n, {
								id: "peach",
								className: ee,
								children: P("manage:taste.peachActivity")
							}), /* @__PURE__ */ (0, X.jsx)(n, {
								id: "browser",
								className: ee,
								children: P("manage:taste.browserHistory")
							})]
						}), /* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, X.jsx)(ie, {
									"aria-label": P("manage:taste.rangeLabel"),
									selectedKey: d,
									onSelectionChange: (e) => {
										e !== null && f(String(e));
									},
									children: ce.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(ae, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ (0, X.jsx)(ga, {
									busy: b || S.isPending || w.isPending,
									onRefresh: pe,
									onImport: () => h.current?.click(),
									onImportBookmarks: () => g.current?.click()
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: h,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: de
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: g,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									"data-bookmark-import": !0,
									onChange: de
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, X.jsx)(ha, {
						onboarding: u,
						done: !!(D.history_sources || E.updated_at)
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							b ? /* @__PURE__ */ (0, X.jsx)(le, {
								label: Te(y, "message") || P("manage:taste.refreshing"),
								value: y?.checked,
								total: y?.total
							}) : null,
							w.isPending ? /* @__PURE__ */ (0, X.jsx)(le, { label: P("manage:taste.importing") }) : null,
							E.stale && E.error ? /* @__PURE__ */ (0, X.jsx)(v, {
								tone: "error",
								action: /* @__PURE__ */ (0, X.jsx)(i, {
									variant: "secondary",
									size: "small",
									...T(C.isPending),
									onClick: () => C.mutate(d),
									children: P("manage:shared.retryNow")
								}),
								children: P("manage:taste.updateFailedStale", {
									time: Ke(E.computed_at),
									error: Le(E.message_code ?? "", E.error, E.message_params)
								})
							}) : E.stale ? /* @__PURE__ */ (0, X.jsx)(le, { label: P("manage:taste.updatingStale", { time: Ke(E.computed_at) }) }) : null,
							Ee ? /* @__PURE__ */ (0, X.jsx)(v, {
								tone: "error",
								children: Ee
							}) : null,
							x?.warnings?.length ? /* @__PURE__ */ (0, X.jsx)(v, {
								tone: "warning",
								children: Re(x.warnings, x.warning_codes, x.warning_params).join(P("shell:format.semicolonSeparator"))
							}) : null
						]
					}),
					/* @__PURE__ */ (0, X.jsxs)(t, {
						id: "browser",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: ne,
								children: [
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 0,
										icon: Je,
										term: P("manage:tasteSkeleton.browsingHistory"),
										figure: Number(D.history_visits || 0).toLocaleString(),
										detail: Ce(D),
										detailTitle: `${He(D.range_start)}—${He(D.range_end)}`
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 1,
										icon: Oe,
										term: P("manage:tasteSkeleton.tasteDimensions"),
										figure: j.length.toLocaleString(),
										detail: j[0]?.name || P("manage:taste.noTopDimension")
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 2,
										icon: ke,
										term: P("manage:tasteSkeleton.browsingLeads"),
										figure: ve.length.toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 3,
										icon: Se,
										term: P("manage:taste.bookmarks"),
										figure: Number(D.bookmarks || 0).toLocaleString(),
										detail: P("manage:taste.privateExports", {
											count: Number(A.exports || 0),
											size: xe(A.bytes || 0)
										})
									})
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("section", {
								className: he ? `${Hi} md:flex-row md:gap-6` : Hi,
								"aria-label": P("manage:taste.browsingProfile"),
								children: [/* @__PURE__ */ (0, X.jsxs)("div", {
									className: he ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: P("manage:taste.browsingProfile")
										}),
										he ? /* @__PURE__ */ (0, X.jsx)(Fi, {
											rows: j,
											label: P("manage:taste.topDimensions")
										}) : null,
										/* @__PURE__ */ (0, X.jsx)("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: E.updated_at ? P("manage:taste.updatedAt", { date: He(E.updated_at) }) : P("manage:taste.historyNotFetched")
										})
									]
								}), /* @__PURE__ */ (0, X.jsx)("div", {
									className: "flex min-w-0 grow flex-col",
									children: j.length ? /* @__PURE__ */ (0, X.jsx)(Ii, {
										rows: j,
										label: P("manage:taste.dimensionRanking")
									}) : /* @__PURE__ */ (0, X.jsx)(c, {
										size: "compact",
										icon: ke,
										title: P("manage:taste.noDimensions"),
										actions: /* @__PURE__ */ (0, X.jsx)(la, {}),
										children: qi
									})
								})]
							}),
							/* @__PURE__ */ (0, X.jsx)(Qe, {
								activity: E.activity,
								title: P("manage:taste.browsingActivity"),
								dailyTitle: P("manage:taste.dailyActivity"),
								words: {
									unit: (e) => P("manage:taste.siteVisitsUnit", { count: e }),
									series: P("manage:taste.visitsSeries"),
									cell: (e) => P("manage:taste.visitsCell", { count: e })
								},
								tone: 4,
								empty: P("manage:taste.noVisitsHint")
							}),
							/* @__PURE__ */ (0, X.jsx)(Li, { flows: E.creator_flows }),
							/* @__PURE__ */ (0, X.jsx)(pa, {
								label: P("manage:taste.browserDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: P("manage:shared.tags"),
										props: {
											rows: k.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: Yi
										}
									},
									{
										id: "creators",
										name: P("manage:shared.creators"),
										props: {
											rows: k.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Xi
										}
									},
									{
										id: "performers",
										name: P("manage:shared.actresses"),
										props: {
											rows: k.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: P("manage:taste.noActressHistory")
										}
									},
									{
										id: "domains",
										name: P("manage:taste.topSites"),
										props: {
											rows: k.domains || [],
											kind: "",
											visual: "domain",
											empty: Zi
										}
									},
									{
										id: "gaps",
										name: P("manage:tasteSkeleton.browsingLeads"),
										props: {
											rows: ve,
											kind: "",
											visual: "none",
											empty: Ji
										}
									}
								]
							})
						]
					}),
					/* @__PURE__ */ (0, X.jsxs)(t, {
						id: "peach",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: ne,
								children: [
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 0,
										icon: ue,
										term: P("manage:taste.watchedInPeach"),
										figure: Number(D.peach_items || 0).toLocaleString(),
										detail: We(D.peach_seconds || 0)
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 1,
										icon: fe,
										term: P("manage:shared.like"),
										figure: Number(D.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 2,
										icon: me,
										term: P("manage:taste.disliked"),
										figure: Number(D.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 3,
										icon: Oe,
										term: P("manage:taste.tagged"),
										figure: ye.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("section", {
								className: `${Hi} md:flex-row md:gap-6`,
								"aria-label": P("manage:taste.peachViewing"),
								children: [/* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: P("manage:taste.peachViewing")
										}),
										/* @__PURE__ */ (0, X.jsx)("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(D.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-body-2-regular text-text-secondary",
											children: P("manage:taste.watchedOrRatedUnit", { count: Number(D.peach_items || 0) })
										})
									]
								}), /* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ (0, X.jsx)(ya, {
										term: P("manage:taste.tagged"),
										value: ye,
										rest: O.untagged || 0
									}), /* @__PURE__ */ (0, X.jsx)(ya, {
										term: P("manage:taste.identified"),
										value: be,
										rest: O.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ (0, X.jsx)(pa, {
								label: P("manage:taste.peachDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: P("manage:shared.tags"),
										props: {
											rows: k.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: Qi
										}
									},
									{
										id: "creators",
										name: P("manage:shared.creators"),
										props: {
											rows: k.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: $i
										}
									},
									{
										id: "performers",
										name: P("manage:shared.actresses"),
										props: {
											rows: k.peach_performers || [],
											kind: "performer",
											visual: "entity",
											empty: ea
										}
									}
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, X.jsx)(ma, {
				data: E,
				onSignal: o,
				navigate: s
			}),
			/* @__PURE__ */ (0, X.jsx)(_a, {
				sources: E.sources || [],
				browsers: E.browsers || [],
				window: d,
				toast: l,
				emptyActions: Ae
			})
		]
	}) });
}
function ya({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, X.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, X.jsx)("span", { children: e }), /* @__PURE__ */ (0, X.jsxs)("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ (0, X.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: P("manage:taste.remainingCount", { count: n })
				})]
			})]
		}), /* @__PURE__ */ (0, X.jsx)(b, {
			meter: !0,
			label: P("manage:shared.termProgress", {
				term: e,
				value: t.toLocaleString(),
				total: r.toLocaleString()
			}),
			value: t,
			max: r
		})]
	});
}
export { aa as TASTE_GUIDE_KEY, va as TastePage };

//# debugId=0d691b84-0c4a-4e6b-8d8c-d5e0343c28fa