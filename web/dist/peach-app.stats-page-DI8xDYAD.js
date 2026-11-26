(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ac40e57-c8fc-478c-959c-3065e5c7fe15", e._sentryDebugIdIdentifier = "sentry-dbid-1ac40e57-c8fc-478c-959c-3065e5c7fe15");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as r, AnimatedItems as i, ButtonLink as a, CHART_CARD as o, CHART_COLORS as s, Cell as c, ChartBackground as l, ChartContainer as u, ChartEmpty as d, ChartLegend as f, ChartLegendContent as p, ChartTip as m, ChartTooltip as h, ChartTooltipContent as g, DataLabelColorsContextProvider as _, DataLabelThemeContextProvider as v, DefaultZIndexes as y, EmptyState as b, EntryFillDefinitions as x, FillObjectDefinition as S, LOC as C, LabelListFromLabelProp as w, Layer as T, LoadingIndicator as E, MEDIA_SOURCE_ICONS as D, NR as ee, Note as O, PolarLabelListContextProvider as te, Progress as k, RegisterGraphicalItemId as A, SEGMENT as j, SEGMENTED_TRACK as ne, STATS_KEY as re, STAT_STRIP as ie, Sector as M, SegmentedTabList as ae, SetPolarGraphicalItem as oe, SetPolarLegendPayload as se, SetTooltipEntrySettings as ce, Shape as le, SourceMark as ue, StatCard as de, StatusLabel as fe, Xc as pe, Xt as me, ZIndexLayer as he, _8 as ge, __toESM as _e, adaptEventsOfChild as ve, arrayTooltipSearcher as ye, bandRows as be, cardClass as xe, clsx as N, codedText as Se, combineAllBarPositions as Ce, combineBarPosition as we, combineBarSizeList as Te, combineStackedData as Ee, createSelector as P, errorMessage as De, fetchStats as Oe, findAllByType as ke, fmtCount as F, fmtSize as I, getActiveStyleOverrides as Ae, getBandSizeOfAxis as L, getBaseValueOfBar as je, getCateCoordinateOfBar as Me, getColorsCount as Ne, getEntryColor as Pe, getEntryFillId as Fe, getEntryFillObject as Ie, getEntryShapeColors as Le, getEntryStyleOverrides as Re, getFillUrl as ze, getNormalizedStackId as Be, getSeriesFillId as Ve, getTooltipNameProp as He, getValueByDataKey as Ue, getZIndexFromUnknown as We, hasEntryFillObjects as Ge, interpolate as Ke, isCategoricalAxis as qe, isNullish as Je, known as Ye, lengthRows as Xe, mM as Ze, matchAppend as Qe, mathSign as $e, mediumRows as et, noop as tt, omit as nt, omitEntrySvgProps as rt, percentText as it, playedFor as at, playedItemUrl as ot, radialArc as st, radialBarSize as ct, radialCeiling as lt, radialSlices as ut, reachedShare as dt, readEntryFill as ft, replayRows as pt, require_jsx_runtime as mt, require_react as ht, resolveDefaultProps as gt, selectActiveTooltipIndex as _t, selectAngleAxis as vt, selectBarCategoryGap as yt, selectBarGap as bt, selectChartDataAndAlwaysIgnoreIndexes as xt, selectChartDataWithIndexes as St, selectChartLayout as R, selectPolarViewBox as Ct, selectRadiusAxis as wt, selectRootBarSize as Tt, selectRootMaxBarSize as Et, settingsPath as Dt, sliceConfig as Ot, sliceKey as kt, splitFill as At, statCardClass as jt, svgPropertiesNoEvents as Mt, svgPropertiesNoEventsFromUnknown as Nt, t as z, truncateByDomain as Pt, uo as Ft, useAnimationCallbacks as It, useAppSelector as Lt, useBackwardsCompatibleTheme as Rt, useEffectiveDataKey as zt, useGraphicalItemIdentity as Bt, useGraphicalItemThemeFill as Vt, useMouseClickItemDispatch as Ht, useMouseEnterItemDispatch as Ut, useMouseLeaveItemDispatch as Wt, usePolarChartLayout as Gt, useQuery as Kt, useSeriesLabelThemeResolver as qt, useThemedActiveStyles as Jt, useUnthemedColors as Yt, watchNote as Xt, watchedShare as Zt, withEntryFillColor as Qt } from "./peach-app.js";
import { ActivityHeat as $t, BarCard as B, ExpandableRanking as en, PolarAngleAxis as tn, selectPolarAxisScale as nn, selectPolarAxisTicks as rn, selectPolarGraphicalItemAxisTicks as an } from "./peach-app.expandable-ranking-CzoOKZxj.js";
import { ConnectionStatus as on } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as sn } from "./peach-app.page-QAncjzM1.js";
import { PolarChart as cn, defaultPolarChartProps as ln, selectPolarStackGroups as un, selectUnfilteredPolarItems as dn } from "./peach-app.PolarChart-CeCYLBHr.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var V = /* @__PURE__ */ _e(ht()), fn = ["option"];
function pn(e, t) {
	if (e == null) return {};
	var n, r, i = mn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function mn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var hn = M;
function gn(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function _n(e) {
	var t = e.option, n = pn(e, fn);
	return /*#__PURE__*/ V.createElement(le, {
		option: t,
		DefaultShape: hn,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function vn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function H(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? vn(Object(n), !0).forEach(function(t) {
			yn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function yn(e, t, n) {
	return (t = bn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bn(e) {
	var t = xn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var U = P([(e, t) => wt(e, t), (e, t) => nn(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), Sn = (e, t) => an(e, "radiusAxis", t, !1), W = P([(e, t, n) => vt(e, n), (e, t, n) => nn(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), Cn = (e, t, n) => rn(e, "angleAxis", n, !1), wn = P([dn, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), Tn = P([
	R,
	U,
	Sn,
	W,
	Cn
], (e, t, n, r, i) => qe(e, "radiusAxis") ? L(t, n, !1) : L(r, i, !1)), En = P([
	W,
	U,
	R
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return je({ numericAxis: r });
}), Dn = (e, t, n, r, i) => i, On = (e, t, n, r, i) => n, kn = (e, t, n, r, i) => t, An = (e, t, n, r, i) => r.maxBarSize, jn = (e) => e.type === "radialBar", Mn = P([
	R,
	dn,
	On,
	kn
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(jn)), Nn = P([
	Mn,
	Tt,
	() => void 0
], Te), Pn = P([
	R,
	Et,
	W,
	Cn,
	U,
	Sn,
	An
], (e, t, n, r, i, a, o) => {
	var s = Je(o) ? t : o;
	return e === "centric" ? L(n, r, !0) ?? s ?? 0 : L(i, a, !0) ?? s ?? 0;
}), Fn = P([
	Nn,
	Et,
	bt,
	yt,
	Pn,
	Tn,
	An
], Ce), In = P([Fn, wn], we), Ln = P([(e, t, n) => R(e) === "centric" ? un(e, "radiusAxis", t) : un(e, "angleAxis", n), wn], Ee), Rn = P([
	W,
	Cn,
	U,
	Sn,
	St,
	wn,
	Tn,
	R,
	En,
	Ct,
	Dn,
	In,
	Ln
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minAngle, v = a.minPointSize, y = l.cx, b = l.cy, x = l.startAngle, S = l.endAngle;
	return sr({
		angleAxis: e,
		angleAxisTicks: t,
		bandSize: o,
		baseValue: c,
		cells: u,
		cx: y,
		cy: b,
		dataKey: g,
		dataStartIndex: m,
		displayedData: p.slice(m, h + 1),
		endAngle: S,
		layout: s,
		minAngle: _,
		minPointSize: v,
		pos: d,
		radiusAxis: n,
		radiusAxisTicks: r,
		stackedData: f,
		stackedDomain: f ? (s === "centric" ? n : e).scale.domain() : null,
		startAngle: x
	});
}), zn = P([xt, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		payload: e
	}));
}), Bn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id",
	"unthemedColors",
	"themedActiveStyles",
	"fillObject"
], Vn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Hn = ["value", "background"];
function G() {
	return G = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, G.apply(null, arguments);
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
function K(e) {
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
var Yn = [];
function Xn(e) {
	var t = e.showLabels, n = e.sectors, r = e.fill, i = e.stroke, a = e.unthemedColors, o = e.children, s = V.useMemo(() => ({
		hasFilledShapes: !0,
		getShapeColors: (e) => Le(n[e], r, i, a)
	}), [
		n,
		r,
		i,
		a
	]), c = n.map((e) => ({
		value: e.value,
		payload: e.payload,
		parentViewBox: void 0,
		clockWise: !1,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	}));
	return /*#__PURE__*/ V.createElement(te, { value: t ? c : void 0 }, /*#__PURE__*/ V.createElement(_, { value: s }, o));
}
function Zn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = n.unthemedColors, f = n.themedActiveStyles, p = n.fillObject, m = qn(n, Bn), h = Mt(m), g = p == null ? h : K(K({}, h), {}, { fill: ze(Ve(u)) }), _ = Lt(_t), v = n.onMouseEnter, b = n.onClick, x = n.onMouseLeave, S = qn(n, Vn), C = Ut(v, n.dataKey, u), T = Wt(x), E = Ht(b, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ V.createElement(Xn, {
		showLabels: r,
		sectors: t,
		fill: m.fill,
		stroke: m.stroke,
		unthemedColors: d
	}, t.map((e, t) => {
		var n = !!(c && _ === String(t)), r = C(e, t), p = T(e, t), h = E(e, t), v = K(K(K(K(K(K(K({}, g), {}, { cornerRadius: gn(l) }, Re(e, d)), e), ft(e.payload).fillObject == null ? void 0 : { fill: ze(Fe(u, t)) }), n ? Ae(c, f, e) : void 0), ve(S, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: p,
			onClick: h,
			className: N("recharts-radial-bar-sector", e.className),
			forceCornerRadius: m.forceCornerRadius,
			cornerIsExternal: m.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ V.createElement(he, {
			zIndex: y.activeBar,
			key: `sector-${t}`
		}, /*#__PURE__*/ V.createElement(_n, v)) : /*#__PURE__*/ V.createElement(_n, G({ key: `sector-${t}` }, v));
	}), /*#__PURE__*/ V.createElement(w, { label: n.label }), n.children);
}
var Qn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [K(K({}, e.next), {}, {
	startAngle: Ke(e.prev.startAngle, e.next.startAngle, t),
	endAngle: Ke(e.prev.endAngle, e.next.endAngle, t)
})] : [K(K({}, e.next), {}, { endAngle: Ke(e.next.startAngle, e.next.endAngle, t) })]);
function $n(e) {
	var t = e.props, n = e.previousSectorsRef, r = t.sectors, a = t.isAnimationActive, o = t.animationBegin, s = t.animationDuration, c = t.animationEasing, l = t.onAnimationStart, u = t.onAnimationEnd, d = It(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = Gt();
	return h == null ? null : /*#__PURE__*/ V.createElement(i, {
		animationInput: t,
		animationIdPrefix: "recharts-radialbar-",
		items: r,
		previousItemsRef: n,
		isAnimationActive: a,
		animationBegin: o,
		animationDuration: s,
		animationEasing: c,
		onAnimationStart: p,
		onAnimationEnd: m,
		animationInterpolateFn: t.animationInterpolateFn,
		animationMatchBy: t.animationMatchBy,
		layout: h
	}, (e, n, r) => /*#__PURE__*/ V.createElement(Zn, {
		sectors: e,
		allOtherRadialBarProps: t,
		showLabels: !f,
		animationElapsedTime: n,
		isAnimating: f || n < 1,
		isEntrance: r
	}));
}
function er(e) {
	var t = (0, V.useRef)(null);
	return /*#__PURE__*/ V.createElement($n, {
		props: e,
		previousSectorsRef: t
	});
}
function tr(e) {
	var t = e.legendType, n = e.fill, r = e.stroke, i = e.unthemedColors, a = e.fillObject, o = e.children, s = V.useMemo(() => ke(o, c), [o]), l = Lt((e) => zn(e, t))?.map((e, t) => {
		var o = K(K({}, e.payload), s[t]?.props);
		return K(K({}, e), {}, {
			color: Pe(o, n, r, i),
			fill: Ie(o, a)
		});
	});
	return /*#__PURE__*/ V.createElement(se, { legendPayload: l ?? [] });
}
var nr = /*#__PURE__*/ V.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = e.unthemedColors, f = {
		dataDefinedOnItem: n,
		getPosition: tt,
		getEntryColor: (e) => Pe(e, s, r, d),
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: He(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ V.createElement(ce, { tooltipEntrySettings: f });
}), rr = { fill: "#eee" };
function ir(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = n.cornerRadius, i = n.background, a = Nt(i), o = Rt((e) => e.barBackground, a ?? {}, rr);
	return t == null ? null : /*#__PURE__*/ V.createElement(he, { zIndex: We(i, y.barBackground) }, t.map((e, t) => {
		e.value;
		var s = e.background, c = qn(e, Hn);
		if (!s) return null;
		var l = K(K(K(K(K(K({ cornerRadius: gn(r) }, rt(c)), o), s), a), ve(n, e, t)), {}, {
			index: t,
			className: N("recharts-radial-bar-background-sector", a?.className == null ? void 0 : String(a.className)),
			option: /*#__PURE__*/ V.isValidElement(i) || typeof i == "function" ? i : s,
			isActive: !1
		});
		return /*#__PURE__*/ V.createElement(_n, G({ key: `background-${c.cx}-${c.cy}-${c.innerRadius}-${c.outerRadius}-${c.startAngle}-${c.endAngle}-${t}` }, l));
	}));
}
var ar = class extends V.PureComponent {
	renderBackground(e) {
		return /*#__PURE__*/ V.createElement(ir, {
			sectors: e,
			allOtherRadialBarProps: this.props
		});
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background, a = e.fillObject, o = e.id, s = e.fill, c = e.stroke, l = e.unthemedColors;
		if (t) return null;
		var u = N("recharts-area", r), d = Ge(n.map((e) => e.payload));
		return /*#__PURE__*/ V.createElement(he, { zIndex: this.props.zIndex }, /*#__PURE__*/ V.createElement(T, { className: u }, (a != null || d) && /*#__PURE__*/ V.createElement("defs", null, a != null && /*#__PURE__*/ V.createElement(S, {
			id: Ve(o),
			fillObject: a,
			color: s
		}), d && /*#__PURE__*/ V.createElement(x, {
			id: o,
			entries: n.map((e, t) => ({
				index: t,
				payload: e.payload,
				color: Le(e.payload, s, c, l).fill
			}))
		})), i && /*#__PURE__*/ V.createElement(T, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ V.createElement(T, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ V.createElement(er, this.props))));
	}
};
function or(e) {
	var t = V.useMemo(() => ke(e.children, c), [e.children]), n = V.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minAngle: e.minAngle,
		minPointSize: e.minPointSize,
		stackId: Be(e.stackId),
		maxBarSize: e.maxBarSize,
		barSize: e.barSize,
		type: "radialBar",
		angleAxisId: e.angleAxisId,
		radiusAxisId: e.radiusAxisId
	}), [
		e.id,
		e.dataKey,
		e.minAngle,
		e.minPointSize,
		e.stackId,
		e.maxBarSize,
		e.barSize,
		e.angleAxisId,
		e.radiusAxisId
	]), r = Lt((r) => Rn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? Yn;
	return /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(nr, {
		dataKey: e.dataKey,
		sectors: r,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id,
		unthemedColors: e.unthemedColors
	}), /*#__PURE__*/ V.createElement(ar, G({}, e, { sectors: r })));
}
var q = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Qe,
	animationInterpolateFn: Qn,
	background: !1,
	cornerIsExternal: !1,
	cornerRadius: 0,
	forceCornerRadius: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minAngle: 0,
	minPointSize: 0,
	radiusAxisId: 0,
	shape: hn,
	zIndex: y.bar
};
function sr(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minAngle, m = e.minPointSize, h = e.cx, g = e.cy, _ = e.angleAxisTicks, v = e.cells, y = e.startAngle, b = e.endAngle;
	return _ == null || l == null ? Yn : (t ?? []).map((e, t) => {
		var x = typeof e == "object" && e ? nt(e, ["id"]) : e, S, C, w, T, E, D;
		if (n ? S = Pt(n[r + t], i) : (S = Ue(e, a), Array.isArray(S) || (S = [o, S])), s === "radial") {
			T = f.scale.map(S[0]) ?? y;
			var ee = f.scale.map(S[1]);
			if (E = ee ?? T, C = Me({
				axis: c,
				ticks: l,
				bandSize: u,
				offset: d.offset,
				entry: e,
				index: t
			}), C != null && E != null && T != null) {
				w = C + d.size;
				var O = E - T;
				if (ee != null && Math.abs(m) > 0 && Math.abs(O) < Math.abs(m)) {
					var te = $e(O || m) * (Math.abs(m) - Math.abs(O));
					E += te, O = E - T;
				}
				if (Math.abs(p) > 0 && O !== 0 && Math.abs(O) < Math.abs(p)) {
					var k = $e(O) * (Math.abs(p) - Math.abs(O));
					E += k;
				}
				D = { background: {
					cx: h,
					cy: g,
					innerRadius: C,
					outerRadius: w,
					startAngle: y,
					endAngle: b
				} };
			}
		} else if (C = c.scale.map(S[0]), w = c.scale.map(S[1]), T = Me({
			axis: f,
			ticks: _,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), C != null && w != null && T != null) {
			E = T + d.size;
			var A = w - C;
			if (Math.abs(m) > 0 && Math.abs(A) < Math.abs(m)) {
				var j = $e(A || m) * (Math.abs(m) - Math.abs(A));
				w += j;
			}
		}
		return Qt(K(K(K({}, x), D), {}, {
			payload: e,
			value: n ? S : S[1],
			cx: h,
			cy: g,
			innerRadius: C,
			outerRadius: w,
			startAngle: T,
			endAngle: E
		}, v && v[t] && v[t].props), e);
	});
}
function cr(e) {
	var t = At(e.fill), n = t.color, r = t.fillObject, i = K(K({}, e), {}, { fill: n }), a = zt({
		dataKey: i.dataKey,
		angleAxisId: i.angleAxisId ?? q.angleAxisId,
		radiusAxisId: i.radiusAxisId ?? q.radiusAxisId
	}), o = Bt(a, i), s = Vt(a, i), c = r ?? s, l = qt(o), u = Yt(i), d = Jt(o, i), f = Rt(o, i, void 0), p = gt(K(K({}, i), {}, { dataKey: a }), q), m = i.fill ?? f?.fill, h = i.stroke ?? f?.stroke, g = i.strokeWidth ?? f?.strokeWidth, _ = i.strokeOpacity ?? f?.strokeOpacity, y = i.strokeDasharray ?? f?.strokeDasharray, b = i.fillOpacity ?? f?.fillOpacity, x = {};
	return m !== void 0 && (x.fill = m), h !== void 0 && (x.stroke = h), g !== void 0 && (x.strokeWidth = g), _ !== void 0 && (x.strokeOpacity = _), y !== void 0 && (x.strokeDasharray = y), b !== void 0 && (x.fillOpacity = b), /*#__PURE__*/ V.createElement(A, {
		id: p.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(oe, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: p.dataKey,
		hide: p.hide ?? q.hide,
		angleAxisId: p.angleAxisId ?? q.angleAxisId,
		radiusAxisId: p.radiusAxisId ?? q.radiusAxisId,
		stackId: Be(p.stackId),
		barSize: p.barSize,
		minAngle: p.minAngle,
		minPointSize: p.minPointSize,
		maxBarSize: p.maxBarSize
	}), /*#__PURE__*/ V.createElement(tr, {
		legendType: p.legendType,
		fill: x.fill,
		stroke: x.stroke,
		unthemedColors: u,
		fillObject: c
	}, p.children), /*#__PURE__*/ V.createElement(v, { value: l }, /*#__PURE__*/ V.createElement(or, G({}, p, x, {
		id: e,
		fillObject: c,
		unthemedColors: u,
		themedActiveStyles: d
	})))));
}
cr.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function lr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ur(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? lr(Object(n), !0).forEach(function(t) {
			dr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function dr(e, t, n) {
	return (t = fr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function fr(e) {
	var t = pr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function pr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var mr = ["axis", "item"], hr = ur(ur({}, ln), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), gr = /*#__PURE__*/ (0, V.forwardRef)((e, t) => {
	var n = gt(e, hr);
	return /*#__PURE__*/ V.createElement(cn, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: mr,
		tooltipPayloadSearcher: ye,
		categoricalChartProps: n,
		ref: t
	});
}), J = mt(), _r = "30%", vr = "100%", yr = 5, br = 14, xr = 5, Sr = 1500, Cr = (0, V.createContext)(null);
function wr() {
	let e = (0, V.use)(Cr);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function Y({ config: e, data: t, nameKey: n, children: r, className: i, chartProps: a, variant: o = "full", max: s, innerRadius: c = _r, outerRadius: d = vr, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: h }) {
	let g = (0, V.useId)().replace(/:/g, ""), [_, v] = (0, V.useState)(f), y = jr(m), b = Or(o), x = (0, V.useCallback)((e, t) => {
		v(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), S = (0, V.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${g}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		g
	]), C = (0, V.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: g,
		isLoading: m,
		selectedBar: _,
		selectBar: x
	}), [
		e,
		n,
		g,
		m,
		_,
		x
	]);
	return /* @__PURE__ */ (0, J.jsx)(Cr, {
		value: C,
		children: /* @__PURE__ */ (0, J.jsxs)(u, {
			className: i,
			config: e,
			children: [/* @__PURE__ */ (0, J.jsx)(E, { isLoading: m }), /* @__PURE__ */ (0, J.jsxs)(gr, {
				id: g,
				data: m ? y : S,
				innerRadius: c,
				outerRadius: d,
				startAngle: b.startAngle,
				endAngle: b.endAngle,
				cx: b.cx,
				cy: b.cy,
				...a,
				children: [
					s != null && s > 0 && /* @__PURE__ */ (0, J.jsx)(tn, {
						type: "number",
						domain: [0, s],
						tick: !1,
						axisLine: !1
					}),
					h && /* @__PURE__ */ (0, J.jsx)(l, { variant: h }),
					r,
					m && /* @__PURE__ */ (0, J.jsx)(Mr, {}),
					/* @__PURE__ */ (0, J.jsx)("defs", { children: /* @__PURE__ */ (0, J.jsx)(kr, {
						config: e,
						chartId: g
					}) })
				]
			})]
		})
	});
}
function Tr({ dataKey: e, cornerRadius: t = yr, barSize: n = br, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = wr();
	return s ? null : /* @__PURE__ */ (0, J.jsx)(cr, {
		dataKey: e,
		cornerRadius: t,
		barSize: n,
		background: r,
		className: "drop-shadow-sm",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: (t, n) => {
			if (!i) return;
			let r = t, a = r?.[o] ?? String(n), s = Number(r?.[e] ?? 0);
			l(c === a ? null : a, s);
		},
		shape: (e) => {
			let t = e[o], n = c === null || c === t;
			return /* @__PURE__ */ (0, J.jsx)(M, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function Er({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = wr();
	return i ? null : /* @__PURE__ */ (0, J.jsx)(h, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, J.jsx)(g, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function Dr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: s } = wr();
	return a ? null : /* @__PURE__ */ (0, J.jsx)(f, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, J.jsx)(p, {
			selected: o,
			onSelectChange: s,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function Or(e) {
	switch (e) {
		case "semi": return {
			startAngle: 180,
			endAngle: 0,
			cx: "50%",
			cy: "70%"
		};
		default: return {
			startAngle: 90,
			endAngle: -270,
			cx: "50%",
			cy: "50%"
		};
	}
}
var kr = ({ config: e, chartId: t }) => /* @__PURE__ */ (0, J.jsx)(J.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = Ne(n);
	return /* @__PURE__ */ (0, J.jsx)("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, J.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, J.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function Ar() {
	return Array.from({ length: xr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function jr(e) {
	let [t, n] = (0, V.useState)(0);
	return (0, V.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, Sr);
		return () => clearInterval(t);
	}, [e]), (0, V.useMemo)(() => Ar(), [t]);
}
var Mr = () => /* @__PURE__ */ (0, J.jsx)(cr, {
	dataKey: "value",
	cornerRadius: yr,
	barSize: br,
	background: !0,
	isAnimationActive: !0,
	animationDuration: Sr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ (0, J.jsx)(M, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
Y.RadialBar = Tr, Y.Tooltip = Er, Y.Legend = Dr;
// src/react/stats/radial-card.tsx
var Nr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], Pr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function Fr({ title: e, rows: t, empty: n, unit: r = (e) => z("manage:radialCard.videoUnit", { count: e }) }) {
	let [i, a] = (0, V.useState)(-1), [s, c] = (0, V.useState)(-1), l = ut(t);
	if (!l.length) return /* @__PURE__ */ (0, J.jsx)(d, {
		title: e,
		children: n
	});
	let u = s >= 0 ? s : i, f = l.reduce((e, t) => e + t.value, 0), p = l[u], h = (e) => a((t) => t === e ? -1 : e), g = lt(l.map((e) => e.value)), _ = l.map((e, t) => ({
		slice: kt(t),
		count: e.value,
		arc: st(e.value, g)
	}));
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		className: o,
		children: [
			/* @__PURE__ */ (0, J.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, J.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, J.jsxs)("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [p?.mark ? /* @__PURE__ */ (0, J.jsx)(ue, { mark: p.mark }) : null, p ? p.name : e]
					}), /* @__PURE__ */ (0, J.jsx)("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (p ? p.value : f).toLocaleString()
					})]
				}), /* @__PURE__ */ (0, J.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: r(p ? p.value : f)
				})]
			}),
			/* @__PURE__ */ (0, J.jsx)("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => c(-1),
				children: /* @__PURE__ */ (0, J.jsxs)(Y, {
					data: _,
					nameKey: "slice",
					config: Ot(l.map((e) => e.name)),
					max: g,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ (0, J.jsx)(Y.RadialBar, {
						dataKey: "arc",
						barSize: ct(l.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ (0, J.jsx)(M, {
								...e,
								opacity: u >= 0 && u !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => h(t),
							onMouseEnter: (e, t) => c(t)
						}
					}), /* @__PURE__ */ (0, J.jsx)(m, {
						nameKey: "slice",
						valueKey: "count",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ (0, J.jsx)("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: l.map((e, t) => /* @__PURE__ */ (0, J.jsxs)("button", {
					type: "button",
					"aria-pressed": i === t,
					onClick: () => h(t),
					onPointerEnter: () => c(t),
					onPointerLeave: () => c(-1),
					onFocus: () => c(t),
					onBlur: () => c(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${Pr[t % 6]}`,
					children: [
						/* @__PURE__ */ (0, J.jsxs)("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ (0, J.jsx)("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${Nr[t % 6]}`
							}), /* @__PURE__ */ (0, J.jsxs)("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ (0, J.jsx)(ue, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ (0, J.jsx)("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ (0, J.jsx)("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: I(e.bytes)
						})
					]
				}, kt(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var Ir = Dt("library"), Lr = 10, Rr = s[5], zr = s[4], Br = `${xe()} flex flex-col gap-4`, Vr = (e) => z("manage:radialCard.videoUnit", { count: e }), Hr = (e) => z("manage:stats.viewingUnit", { count: e }), X = z("manage:stats.noVideoHint"), Ur = z("manage:stats.noTagHint"), Wr = z("manage:stats.noWatchHint"), Gr = z("manage:stats.noTagSourceHint"), Kr = z("manage:stats.noVolumeHint"), qr = z("manage:stats.noLibraryHint"), Jr = z("manage:stats.noLengthHint"), Yr = z("manage:stats.noQualityHint"), Xr = z("manage:stats.noPlayTimeHint"), Zr = z("manage:stats.noReplayHint"), Qr = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, J.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, J.jsx)("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: F(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, J.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, J.jsx)("span", { children: e }), /* @__PURE__ */ (0, J.jsxs)("b", {
				className: "tabular-nums",
				children: [F(t), Ye(t) ? /* @__PURE__ */ (0, J.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: it(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ (0, J.jsx)(k, {
			meter: !0,
			label: z("manage:shared.termProgress", {
				term: e,
				value: F(t),
				total: n.toLocaleString()
			}),
			value: Ye(t) ? Qr(t, r) : 0,
			max: r
		})]
	});
}
function $r({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ (0, J.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, J.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, J.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function ei({ headline: e, children: t }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: `${Br} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ (0, J.jsx)("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function ti({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, J.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, J.jsx)(Fr, {
				title: z("manage:stats.cloudAndLocal"),
				empty: X,
				rows: e.by_loc.map((e) => ({
					name: C[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: D[e.k] || "database"
				}))
			}), /* @__PURE__ */ (0, J.jsx)(Fr, {
				title: z("manage:shared.library"),
				empty: qr,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: D[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, J.jsx)(B, {
					title: z("manage:shared.duration"),
					unit: Vr,
					series: z("manage:processingTraffic.sourceVideos"),
					color: Rr,
					rows: Xe(e.by_length),
					empty: Jr
				}),
				/* @__PURE__ */ (0, J.jsx)(B, {
					title: z("manage:shared.quality"),
					unit: Vr,
					series: z("manage:processingTraffic.sourceVideos"),
					color: Rr,
					rows: be(e.by_quality),
					empty: Yr
				}),
				/* @__PURE__ */ (0, J.jsx)(B, {
					title: z("manage:stats.fileTypes"),
					unit: (e) => z("manage:stats.itemsUnit", { count: e }),
					series: z("manage:stats.itemsSeries"),
					color: Rr,
					layout: "horizontal",
					rows: et(e.by_medium),
					empty: X
				})
			]
		})]
	}) : /* @__PURE__ */ (0, J.jsx)(b, {
		icon: ee,
		title: z("manage:stats.noVideosTitle"),
		actions: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(a, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: z("manage:stats.newFollow")
		}), /* @__PURE__ */ (0, J.jsx)(a, {
			variant: "primary",
			href: Ir,
			size: "small",
			children: z("manage:shared.addMedia")
		})] }),
		children: X
	});
}
function ni({ data: e }) {
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)($t, {
		activity: e.play_activity,
		title: z("manage:stats.playTimes"),
		dailyTitle: z("manage:stats.dailyPlays"),
		words: {
			unit: Hr,
			series: z("manage:shared.video"),
			cell: (e) => z("manage:stats.viewingCell", { count: e })
		},
		tone: 5,
		empty: Xr
	}), /* @__PURE__ */ (0, J.jsx)(B, {
		title: z("manage:stats.plays"),
		unit: Hr,
		series: z("manage:shared.video"),
		color: zr,
		rows: pt(e.replays),
		empty: Zr
	})] });
}
function ri({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: z("manage:stats.hasCreator"),
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: z("manage:stats.hasCode"),
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: z("manage:stats.hasLabel"),
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: z("manage:stats.framesExtracted"),
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: z("manage:stats.durationProbed"),
				value: e.duration,
				total: t
			})
		]
	});
}
function ii({ volume: e }) {
	let t = e.total, n = e.used ?? 0, r = Se(e, "label");
	return /* @__PURE__ */ (0, J.jsxs)("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, J.jsxs)("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ (0, J.jsx)("h3", {
					className: "min-w-0 break-words",
					children: r
				}), t == null ? e.online ? /* @__PURE__ */ (0, J.jsx)(fe, { children: z("manage:stats.capacityNotFound") }) : /* @__PURE__ */ (0, J.jsx)(on, { online: !1 }) : /* @__PURE__ */ (0, J.jsxs)("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [I(n), /* @__PURE__ */ (0, J.jsx)("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: it(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ (0, J.jsx)(k, {
				meter: !0,
				label: z("manage:stats.volumeUsage", { volume: r }),
				value: Qr(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ (0, J.jsxs)("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ (0, J.jsx)("span", {
					className: "min-w-0 break-words",
					children: e.root ?? z("manage:stats.notMapped")
				}), t == null ? null : /* @__PURE__ */ (0, J.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: z("manage:stats.volumeFreeTotal", {
						free: I(e.free ?? 0),
						total: I(t)
					})
				})]
			})
		]
	});
}
function ai({ volumes: e }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ (0, J.jsx)(ii, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ (0, J.jsx)(b, {
		icon: pe,
		title: z("manage:stats.noStorageTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(a, {
			variant: "primary",
			href: Ir,
			size: "small",
			children: z("manage:shared.addMedia")
		}),
		children: Kr
	});
}
function oi({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)(en, {
		previewCount: Lr,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ (0, J.jsx)("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ (0, J.jsxs)("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ (0, J.jsx)("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ (0, J.jsx)("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ (0, J.jsx)("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ (0, J.jsx)(b, {
		icon: Ze,
		title: z("manage:stats.noContentTagsTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(a, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: z(r ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Ur
	});
}
function si({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = Zt(e);
			return /* @__PURE__ */ (0, J.jsxs)("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, J.jsxs)("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ (0, J.jsx)("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ (0, J.jsx)("a", {
							href: ot(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ (0, J.jsxs)("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ (0, J.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ (0, J.jsx)("span", { children: Xt(e) })]
					})]
				}), /* @__PURE__ */ (0, J.jsxs)("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ (0, J.jsx)(k, {
						meter: !0,
						label: z("manage:stats.watchedShare", { percent: t.toFixed(0) }),
						value: t
					}), /* @__PURE__ */ (0, J.jsx)("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: z("manage:stats.watchedReached", {
							watched: t.toFixed(0),
							reached: dt(e).toFixed(0)
						})
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ (0, J.jsx)(b, {
		icon: Ft,
		title: z("manage:stats.noWatchHistoryTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(a, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: z(t ? "manage:shared.browseCollection" : "manage:shared.addMedia")
		}),
		children: Wr
	});
}
function ci({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ (0, J.jsxs)("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, J.jsxs)("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, J.jsx)("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ (0, J.jsxs)("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ (0, J.jsx)("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: Vr(e.assets)
						})]
					})]
				}),
				/* @__PURE__ */ (0, J.jsx)(k, {
					meter: !0,
					label: z("manage:stats.tagSourceCoverage", { source: e.k }),
					value: Qr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ (0, J.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: z("manage:stats.tagsCount", { count: e.n })
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ (0, J.jsx)(b, {
		icon: Ze,
		title: z("manage:stats.noTagSourcesTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(a, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: z(t ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Gr
	});
}
function $({ id: e, label: n, figure: r, detail: i, icon: a, accent: o }) {
	return /* @__PURE__ */ (0, J.jsx)(t, {
		id: e,
		className: jt({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ (0, J.jsx)(de, {
			label: n,
			icon: a,
			accent: o,
			figure: r,
			footer: i
		})
	});
}
function li(i) {
	let a = Kt({
		queryKey: re,
		queryFn: ({ signal: e }) => Oe(e)
	}), o = a.data;
	if (!o) return /* @__PURE__ */ (0, J.jsx)(sn, { children: /* @__PURE__ */ (0, J.jsx)(O, {
		tone: "error",
		title: z("manage:stats.loadFailedTitle"),
		children: a.error ? De(a.error) : z("manage:stats.loadFailedHint")
	}) });
	let s = o.consumption, c = o.storage_summary, l = o.by_loc.reduce((e, t) => e + t.videos, 0), u = o.by_loc.reduce((e, t) => e + t.bytes, 0), d = Ye(o.tag_cov) ? it(o.tag_cov, o.attribution.videos) : z("manage:shared.notFound"), f = `${F(o.tag_cov)} / ${o.attribution.videos.toLocaleString()}`, p = l > 0 || o.top_tags.length > 0 || o.recent.length > 0 || o.tag_source.length > 0;
	return /* @__PURE__ */ (0, J.jsxs)(sn, { children: [/* @__PURE__ */ (0, J.jsxs)(n, {
		defaultSelectedKey: "inventory",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, J.jsxs)(r, {
				"aria-label": z("manage:stats.viewsLabel"),
				className: ie,
				children: [
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "inventory",
						label: z("manage:statsSkeleton.collection"),
						icon: ge,
						accent: 0,
						figure: l.toLocaleString(),
						detail: I(u)
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "viewing",
						label: z("manage:shared.watched"),
						icon: me,
						accent: 1,
						figure: F(s.played),
						detail: at(s.play_seconds)
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "coverage",
						label: z("manage:statsSkeleton.contentTags"),
						icon: Ze,
						accent: 2,
						figure: d,
						detail: f
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "storage",
						label: z("manage:statsSkeleton.spaceUsed"),
						icon: pe,
						accent: 3,
						figure: z("manage:stats.volumeCount", { count: c.online }),
						detail: c.measured ? z("manage:stats.usedSize", { size: I(c.used) }) : z("manage:stats.capacityNotFound")
					})
				]
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "inventory",
				children: /* @__PURE__ */ (0, J.jsx)(ti, {
					data: o,
					...i
				})
			}),
			/* @__PURE__ */ (0, J.jsxs)(e, {
				id: "viewing",
				className: "flex flex-col gap-5",
				children: [/* @__PURE__ */ (0, J.jsx)(ei, {
					headline: /* @__PURE__ */ (0, J.jsx)($r, {
						term: z("manage:stats.watchedTerm"),
						figure: F(s.played),
						unit: z("manage:stats.videosWithPlays", { count: s.played ?? 0 })
					}),
					children: /* @__PURE__ */ (0, J.jsxs)("div", {
						className: "inline-grid w-full gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.watchedInCollection"),
								value: s.library_played
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.watchedOnline"),
								value: s.online_played
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.climaxCount"),
								value: s.o_total
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.skimmed"),
								value: s.skimmed
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:shared.like"),
								value: s.liked
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.disliked"),
								value: s.dislike
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:stats.seenIt"),
								value: s.seen
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: z("manage:managePages.trash"),
								value: s.trash
							})
						]
					})
				}), /* @__PURE__ */ (0, J.jsx)(ni, { data: o })]
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "coverage",
				children: /* @__PURE__ */ (0, J.jsx)(ei, {
					headline: /* @__PURE__ */ (0, J.jsx)($r, {
						term: z("manage:stats.contentTagCoverage"),
						figure: d,
						unit: f
					}),
					children: /* @__PURE__ */ (0, J.jsx)(ri, { attribution: o.attribution })
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "storage",
				children: /* @__PURE__ */ (0, J.jsx)(ei, {
					headline: /* @__PURE__ */ (0, J.jsx)($r, {
						term: z("manage:statsSkeleton.spaceUsed"),
						figure: c.measured.toLocaleString(),
						unit: z("manage:stats.volumesMeasured", { count: c.measured })
					}),
					children: /* @__PURE__ */ (0, J.jsx)(ai, {
						volumes: o.storage_volumes,
						...i
					})
				})
			})
		]
	}), p ? /* @__PURE__ */ (0, J.jsxs)(n, {
		defaultSelectedKey: "tags",
		className: `${xe({ padding: "none" })} flex flex-col`,
		children: [
			/* @__PURE__ */ (0, J.jsx)("div", {
				className: "px-4 pt-3",
				children: /* @__PURE__ */ (0, J.jsxs)(ae, {
					"aria-label": z("manage:stats.breakdownsLabel"),
					className: ne,
					children: [
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "tags",
							className: j,
							children: z("manage:statsSkeleton.contentTags")
						}),
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "recent",
							className: j,
							children: z("manage:stats.recentlyWatched")
						}),
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "sources",
							className: j,
							children: z("manage:stats.tagSources")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "tags",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(oi, {
					tags: o.top_tags,
					hasMedia: l > 0,
					...i
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "recent",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(si, {
					rows: o.recent,
					hasMedia: l > 0
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "sources",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(ci, {
					sources: o.tag_source,
					videos: o.attribution.videos
				})
			})
		]
	}) : null] });
}
export { li as StatsPage };

//# debugId=1ac40e57-c8fc-478c-959c-3065e5c7fe15