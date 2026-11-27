(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "68b3437d-ad8f-4223-95fe-b3a7388ad4b2", e._sentryDebugIdIdentifier = "sentry-dbid-68b3437d-ad8f-4223-95fe-b3a7388ad4b2");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as r, AnimatedItems as i, ButtonLink as a, CHART_CARD as o, CHART_COLORS as s, Cell as c, ChartBackground as l, ChartContainer as u, ChartEmpty as d, ChartLegend as f, ChartLegendContent as p, ChartTip as m, ChartTooltip as h, ChartTooltipContent as g, DataLabelColorsContextProvider as _, DataLabelThemeContextProvider as v, DefaultZIndexes as y, EmptyState as b, EntryFillDefinitions as x, FillObjectDefinition as S, LOC as C, LabelListFromLabelProp as w, Layer as T, LoadingIndicator as E, MEDIA_SOURCE_ICONS as D, NR as ee, PolarLabelListContextProvider as O, Progress as k, QueryErrorNote as A, RegisterGraphicalItemId as j, SEGMENT as M, SEGMENTED_TRACK as te, STATS_KEY as ne, STAT_STRIP as re, Sector as N, SegmentedTabList as ie, SetPolarGraphicalItem as ae, SetPolarLegendPayload as oe, SetTooltipEntrySettings as se, Shape as ce, SourceMark as le, StatCard as ue, StatusLabel as de, Xc as fe, Xt as pe, ZIndexLayer as me, _8 as he, __toESM as ge, adaptEventsOfChild as _e, arrayTooltipSearcher as ve, bandRows as ye, cardClass as be, clsx as xe, codedText as Se, combineAllBarPositions as Ce, combineBarPosition as we, combineBarSizeList as Te, combineStackedData as Ee, createSelector as P, fetchStats as De, findAllByType as Oe, fmtCount as F, fmtSize as I, getActiveStyleOverrides as ke, getBandSizeOfAxis as L, getBaseValueOfBar as Ae, getCateCoordinateOfBar as je, getColorsCount as Me, getEntryColor as Ne, getEntryFillId as Pe, getEntryFillObject as Fe, getEntryShapeColors as Ie, getEntryStyleOverrides as Le, getFillUrl as Re, getNormalizedStackId as ze, getSeriesFillId as Be, getTooltipNameProp as Ve, getValueByDataKey as He, getZIndexFromUnknown as Ue, hasEntryFillObjects as We, interpolate as Ge, isCategoricalAxis as Ke, isNullish as qe, known as Je, lengthRows as Ye, mM as R, matchAppend as Xe, mathSign as Ze, mediumRows as Qe, noop as $e, omit as et, omitEntrySvgProps as tt, percentText as nt, playedFor as rt, playedItemUrl as it, radialArc as at, radialBarSize as ot, radialCeiling as st, radialSlices as ct, reachedShare as lt, readEntryFill as ut, replayRows as dt, require_jsx_runtime as ft, require_react as pt, resolveDefaultProps as mt, selectActiveTooltipIndex as ht, selectAngleAxis as gt, selectBarCategoryGap as _t, selectBarGap as vt, selectChartDataAndAlwaysIgnoreIndexes as yt, selectChartDataWithIndexes as bt, selectChartLayout as z, selectPolarViewBox as xt, selectRadiusAxis as St, selectRootBarSize as Ct, selectRootMaxBarSize as wt, settingsPath as Tt, sliceConfig as Et, sliceKey as Dt, splitFill as Ot, statCardClass as kt, statsSkeleton as At, svgPropertiesNoEvents as jt, svgPropertiesNoEventsFromUnknown as Mt, t as B, truncateByDomain as Nt, uo as Pt, useAnimationCallbacks as Ft, useAppSelector as It, useBackwardsCompatibleTheme as Lt, useEffectiveDataKey as Rt, useGraphicalItemIdentity as zt, useGraphicalItemThemeFill as Bt, useMouseClickItemDispatch as Vt, useMouseEnterItemDispatch as Ht, useMouseLeaveItemDispatch as Ut, usePolarChartLayout as Wt, useQuery as Gt, useSeriesLabelThemeResolver as Kt, useThemedActiveStyles as qt, useUnthemedColors as Jt, watchNote as Yt, watchedShare as Xt, withEntryFillColor as Zt } from "./peach-app.js";
import { ActivityHeat as Qt, BarCard as V, ExpandableRanking as $t, PolarAngleAxis as en, selectPolarAxisScale as tn, selectPolarAxisTicks as nn, selectPolarGraphicalItemAxisTicks as rn } from "./peach-app.expandable-ranking-Bxr5Gn6r.js";
import { ConnectionStatus as an } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as on } from "./peach-app.page-QAncjzM1.js";
import { PolarChart as sn, defaultPolarChartProps as cn, selectPolarStackGroups as ln, selectUnfilteredPolarItems as un } from "./peach-app.PolarChart-CeCYLBHr.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var H = /* @__PURE__ */ ge(pt()), dn = ["option"];
function fn(e, t) {
	if (e == null) return {};
	var n, r, i = pn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function pn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var mn = N;
function hn(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function gn(e) {
	var t = e.option, n = fn(e, dn);
	return /*#__PURE__*/ H.createElement(ce, {
		option: t,
		DefaultShape: mn,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function _n(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _n(Object(n), !0).forEach(function(t) {
			vn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _n(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function vn(e, t, n) {
	return (t = yn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yn(e) {
	var t = bn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function bn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var W = P([(e, t) => St(e, t), (e, t) => tn(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), xn = (e, t) => rn(e, "radiusAxis", t, !1), G = P([(e, t, n) => gt(e, n), (e, t, n) => tn(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), Sn = (e, t, n) => nn(e, "angleAxis", n, !1), Cn = P([un, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), wn = P([
	z,
	W,
	xn,
	G,
	Sn
], (e, t, n, r, i) => Ke(e, "radiusAxis") ? L(t, n, !1) : L(r, i, !1)), Tn = P([
	G,
	W,
	z
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return Ae({ numericAxis: r });
}), En = (e, t, n, r, i) => i, Dn = (e, t, n, r, i) => n, On = (e, t, n, r, i) => t, kn = (e, t, n, r, i) => r.maxBarSize, An = (e) => e.type === "radialBar", jn = P([
	z,
	un,
	Dn,
	On
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(An)), Mn = P([
	jn,
	Ct,
	() => void 0
], Te), Nn = P([
	z,
	wt,
	G,
	Sn,
	W,
	xn,
	kn
], (e, t, n, r, i, a, o) => {
	var s = qe(o) ? t : o;
	return e === "centric" ? L(n, r, !0) ?? s ?? 0 : L(i, a, !0) ?? s ?? 0;
}), Pn = P([
	Mn,
	wt,
	vt,
	_t,
	Nn,
	wn,
	kn
], Ce), Fn = P([Pn, Cn], we), In = P([(e, t, n) => z(e) === "centric" ? ln(e, "radiusAxis", t) : ln(e, "angleAxis", n), Cn], Ee), Ln = P([
	G,
	Sn,
	W,
	xn,
	bt,
	Cn,
	wn,
	z,
	Tn,
	xt,
	En,
	Fn,
	In
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minAngle, v = a.minPointSize, y = l.cx, b = l.cy, x = l.startAngle, S = l.endAngle;
	return or({
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
}), Rn = P([yt, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		payload: e
	}));
}), zn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id",
	"unthemedColors",
	"themedActiveStyles",
	"fillObject"
], Bn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Vn = ["value", "background"];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function Hn(e, t) {
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
		t % 2 ? Hn(Object(n), !0).forEach(function(t) {
			Un(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Un(e, t, n) {
	return (t = Wn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Wn(e) {
	var t = Gn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Gn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Kn(e, t) {
	if (e == null) return {};
	var n, r, i = qn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function qn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Jn = [];
function Yn(e) {
	var t = e.showLabels, n = e.sectors, r = e.fill, i = e.stroke, a = e.unthemedColors, o = e.children, s = H.useMemo(() => ({
		hasFilledShapes: !0,
		getShapeColors: (e) => Ie(n[e], r, i, a)
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
	return /*#__PURE__*/ H.createElement(O, { value: t ? c : void 0 }, /*#__PURE__*/ H.createElement(_, { value: s }, o));
}
function Xn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = n.unthemedColors, f = n.themedActiveStyles, p = n.fillObject, m = Kn(n, zn), h = jt(m), g = p == null ? h : q(q({}, h), {}, { fill: Re(Be(u)) }), _ = It(ht), v = n.onMouseEnter, b = n.onClick, x = n.onMouseLeave, S = Kn(n, Bn), C = Ht(v, n.dataKey, u), T = Ut(x), E = Vt(b, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ H.createElement(Yn, {
		showLabels: r,
		sectors: t,
		fill: m.fill,
		stroke: m.stroke,
		unthemedColors: d
	}, t.map((e, t) => {
		var n = !!(c && _ === String(t)), r = C(e, t), p = T(e, t), h = E(e, t), v = q(q(q(q(q(q(q({}, g), {}, { cornerRadius: hn(l) }, Le(e, d)), e), ut(e.payload).fillObject == null ? void 0 : { fill: Re(Pe(u, t)) }), n ? ke(c, f, e) : void 0), _e(S, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: p,
			onClick: h,
			className: xe("recharts-radial-bar-sector", e.className),
			forceCornerRadius: m.forceCornerRadius,
			cornerIsExternal: m.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ H.createElement(me, {
			zIndex: y.activeBar,
			key: `sector-${t}`
		}, /*#__PURE__*/ H.createElement(gn, v)) : /*#__PURE__*/ H.createElement(gn, K({ key: `sector-${t}` }, v));
	}), /*#__PURE__*/ H.createElement(w, { label: n.label }), n.children);
}
var Zn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [q(q({}, e.next), {}, {
	startAngle: Ge(e.prev.startAngle, e.next.startAngle, t),
	endAngle: Ge(e.prev.endAngle, e.next.endAngle, t)
})] : [q(q({}, e.next), {}, { endAngle: Ge(e.next.startAngle, e.next.endAngle, t) })]);
function Qn(e) {
	var t = e.props, n = e.previousSectorsRef, r = t.sectors, a = t.isAnimationActive, o = t.animationBegin, s = t.animationDuration, c = t.animationEasing, l = t.onAnimationStart, u = t.onAnimationEnd, d = Ft(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = Wt();
	return h == null ? null : /*#__PURE__*/ H.createElement(i, {
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
	}, (e, n, r) => /*#__PURE__*/ H.createElement(Xn, {
		sectors: e,
		allOtherRadialBarProps: t,
		showLabels: !f,
		animationElapsedTime: n,
		isAnimating: f || n < 1,
		isEntrance: r
	}));
}
function $n(e) {
	var t = (0, H.useRef)(null);
	return /*#__PURE__*/ H.createElement(Qn, {
		props: e,
		previousSectorsRef: t
	});
}
function er(e) {
	var t = e.legendType, n = e.fill, r = e.stroke, i = e.unthemedColors, a = e.fillObject, o = e.children, s = H.useMemo(() => Oe(o, c), [o]), l = It((e) => Rn(e, t))?.map((e, t) => {
		var o = q(q({}, e.payload), s[t]?.props);
		return q(q({}, e), {}, {
			color: Ne(o, n, r, i),
			fill: Fe(o, a)
		});
	});
	return /*#__PURE__*/ H.createElement(oe, { legendPayload: l ?? [] });
}
var tr = /*#__PURE__*/ H.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = e.unthemedColors, f = {
		dataDefinedOnItem: n,
		getPosition: $e,
		getEntryColor: (e) => Ne(e, s, r, d),
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: Ve(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ H.createElement(se, { tooltipEntrySettings: f });
}), nr = { fill: "#eee" };
function rr(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = n.cornerRadius, i = n.background, a = Mt(i), o = Lt((e) => e.barBackground, a ?? {}, nr);
	return t == null ? null : /*#__PURE__*/ H.createElement(me, { zIndex: Ue(i, y.barBackground) }, t.map((e, t) => {
		e.value;
		var s = e.background, c = Kn(e, Vn);
		if (!s) return null;
		var l = q(q(q(q(q(q({ cornerRadius: hn(r) }, tt(c)), o), s), a), _e(n, e, t)), {}, {
			index: t,
			className: xe("recharts-radial-bar-background-sector", a?.className == null ? void 0 : String(a.className)),
			option: /*#__PURE__*/ H.isValidElement(i) || typeof i == "function" ? i : s,
			isActive: !1
		});
		return /*#__PURE__*/ H.createElement(gn, K({ key: `background-${c.cx}-${c.cy}-${c.innerRadius}-${c.outerRadius}-${c.startAngle}-${c.endAngle}-${t}` }, l));
	}));
}
var ir = class extends H.PureComponent {
	renderBackground(e) {
		return /*#__PURE__*/ H.createElement(rr, {
			sectors: e,
			allOtherRadialBarProps: this.props
		});
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background, a = e.fillObject, o = e.id, s = e.fill, c = e.stroke, l = e.unthemedColors;
		if (t) return null;
		var u = xe("recharts-area", r), d = We(n.map((e) => e.payload));
		return /*#__PURE__*/ H.createElement(me, { zIndex: this.props.zIndex }, /*#__PURE__*/ H.createElement(T, { className: u }, (a != null || d) && /*#__PURE__*/ H.createElement("defs", null, a != null && /*#__PURE__*/ H.createElement(S, {
			id: Be(o),
			fillObject: a,
			color: s
		}), d && /*#__PURE__*/ H.createElement(x, {
			id: o,
			entries: n.map((e, t) => ({
				index: t,
				payload: e.payload,
				color: Ie(e.payload, s, c, l).fill
			}))
		})), i && /*#__PURE__*/ H.createElement(T, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ H.createElement(T, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ H.createElement($n, this.props))));
	}
};
function ar(e) {
	var t = H.useMemo(() => Oe(e.children, c), [e.children]), n = H.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minAngle: e.minAngle,
		minPointSize: e.minPointSize,
		stackId: ze(e.stackId),
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
	]), r = It((r) => Ln(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? Jn;
	return /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(tr, {
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
	}), /*#__PURE__*/ H.createElement(ir, K({}, e, { sectors: r })));
}
var J = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Xe,
	animationInterpolateFn: Zn,
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
	shape: mn,
	zIndex: y.bar
};
function or(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minAngle, m = e.minPointSize, h = e.cx, g = e.cy, _ = e.angleAxisTicks, v = e.cells, y = e.startAngle, b = e.endAngle;
	return _ == null || l == null ? Jn : (t ?? []).map((e, t) => {
		var x = typeof e == "object" && e ? et(e, ["id"]) : e, S, C, w, T, E, D;
		if (n ? S = Nt(n[r + t], i) : (S = He(e, a), Array.isArray(S) || (S = [o, S])), s === "radial") {
			T = f.scale.map(S[0]) ?? y;
			var ee = f.scale.map(S[1]);
			if (E = ee ?? T, C = je({
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
					var k = Ze(O || m) * (Math.abs(m) - Math.abs(O));
					E += k, O = E - T;
				}
				if (Math.abs(p) > 0 && O !== 0 && Math.abs(O) < Math.abs(p)) {
					var A = Ze(O) * (Math.abs(p) - Math.abs(O));
					E += A;
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
		} else if (C = c.scale.map(S[0]), w = c.scale.map(S[1]), T = je({
			axis: f,
			ticks: _,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), C != null && w != null && T != null) {
			E = T + d.size;
			var j = w - C;
			if (Math.abs(m) > 0 && Math.abs(j) < Math.abs(m)) {
				var M = Ze(j || m) * (Math.abs(m) - Math.abs(j));
				w += M;
			}
		}
		return Zt(q(q(q({}, x), D), {}, {
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
function sr(e) {
	var t = Ot(e.fill), n = t.color, r = t.fillObject, i = q(q({}, e), {}, { fill: n }), a = Rt({
		dataKey: i.dataKey,
		angleAxisId: i.angleAxisId ?? J.angleAxisId,
		radiusAxisId: i.radiusAxisId ?? J.radiusAxisId
	}), o = zt(a, i), s = Bt(a, i), c = r ?? s, l = Kt(o), u = Jt(i), d = qt(o, i), f = Lt(o, i, void 0), p = mt(q(q({}, i), {}, { dataKey: a }), J), m = i.fill ?? f?.fill, h = i.stroke ?? f?.stroke, g = i.strokeWidth ?? f?.strokeWidth, _ = i.strokeOpacity ?? f?.strokeOpacity, y = i.strokeDasharray ?? f?.strokeDasharray, b = i.fillOpacity ?? f?.fillOpacity, x = {};
	return m !== void 0 && (x.fill = m), h !== void 0 && (x.stroke = h), g !== void 0 && (x.strokeWidth = g), _ !== void 0 && (x.strokeOpacity = _), y !== void 0 && (x.strokeDasharray = y), b !== void 0 && (x.fillOpacity = b), /*#__PURE__*/ H.createElement(j, {
		id: p.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(ae, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: p.dataKey,
		hide: p.hide ?? J.hide,
		angleAxisId: p.angleAxisId ?? J.angleAxisId,
		radiusAxisId: p.radiusAxisId ?? J.radiusAxisId,
		stackId: ze(p.stackId),
		barSize: p.barSize,
		minAngle: p.minAngle,
		minPointSize: p.minPointSize,
		maxBarSize: p.maxBarSize
	}), /*#__PURE__*/ H.createElement(er, {
		legendType: p.legendType,
		fill: x.fill,
		stroke: x.stroke,
		unthemedColors: u,
		fillObject: c
	}, p.children), /*#__PURE__*/ H.createElement(v, { value: l }, /*#__PURE__*/ H.createElement(ar, K({}, p, x, {
		id: e,
		fillObject: c,
		unthemedColors: u,
		themedActiveStyles: d
	})))));
}
sr.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function cr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function lr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? cr(Object(n), !0).forEach(function(t) {
			ur(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ur(e, t, n) {
	return (t = dr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function dr(e) {
	var t = fr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function fr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var pr = ["axis", "item"], mr = lr(lr({}, cn), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), hr = /*#__PURE__*/ (0, H.forwardRef)((e, t) => {
	var n = mt(e, mr);
	return /*#__PURE__*/ H.createElement(sn, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: pr,
		tooltipPayloadSearcher: ve,
		categoricalChartProps: n,
		ref: t
	});
}), Y = ft(), gr = "30%", _r = "100%", vr = 5, yr = 14, br = 5, xr = 1500, Sr = (0, H.createContext)(null);
function Cr() {
	let e = (0, H.use)(Sr);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function X({ config: e, data: t, nameKey: n, children: r, className: i, chartProps: a, variant: o = "full", max: s, innerRadius: c = gr, outerRadius: d = _r, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: h }) {
	let g = (0, H.useId)().replace(/:/g, ""), [_, v] = (0, H.useState)(f), y = Dr(m), b = wr(o), x = (0, H.useCallback)((e, t) => {
		v(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), S = (0, H.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${g}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		g
	]), C = (0, H.useMemo)(() => ({
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
	return /* @__PURE__ */ (0, Y.jsx)(Sr, {
		value: C,
		children: /* @__PURE__ */ (0, Y.jsxs)(u, {
			className: i,
			config: e,
			children: [/* @__PURE__ */ (0, Y.jsx)(E, { isLoading: m }), /* @__PURE__ */ (0, Y.jsxs)(hr, {
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
					s != null && s > 0 && /* @__PURE__ */ (0, Y.jsx)(en, {
						type: "number",
						domain: [0, s],
						tick: !1,
						axisLine: !1
					}),
					h && /* @__PURE__ */ (0, Y.jsx)(l, { variant: h }),
					r,
					m && /* @__PURE__ */ (0, Y.jsx)(Or, {}),
					/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)(Tr, {
						config: e,
						chartId: g
					}) })
				]
			})]
		})
	});
}
function wr(e) {
	return e === "semi" ? {
		startAngle: 180,
		endAngle: 0,
		cx: "50%",
		cy: "70%"
	} : {
		startAngle: 90,
		endAngle: -270,
		cx: "50%",
		cy: "50%"
	};
}
var Tr = ({ config: e, chartId: t }) => /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = Me(n);
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Y.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function Er() {
	return Array.from({ length: br }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function Dr(e) {
	let [t, n] = (0, H.useState)(0);
	return (0, H.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, xr);
		return () => clearInterval(t);
	}, [e]), (0, H.useMemo)(() => Er(), [t]);
}
var Or = () => /* @__PURE__ */ (0, Y.jsx)(sr, {
	dataKey: "value",
	cornerRadius: vr,
	barSize: yr,
	background: !0,
	isAnimationActive: !0,
	animationDuration: xr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ (0, Y.jsx)(N, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
X.RadialBar = function({ dataKey: e, cornerRadius: t = vr, barSize: n = yr, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = Cr();
	return s ? null : /* @__PURE__ */ (0, Y.jsx)(sr, {
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
			return /* @__PURE__ */ (0, Y.jsx)(N, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}, X.Tooltip = function({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = Cr();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(h, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, Y.jsx)(g, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}, X.Legend = function({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: s } = Cr();
	return a ? null : /* @__PURE__ */ (0, Y.jsx)(f, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Y.jsx)(p, {
			selected: o,
			onSelectChange: s,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
};
// src/react/stats/radial-card.tsx
var kr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], Ar = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function jr({ title: e, rows: t, empty: n, unit: r = (e) => B("manage:radialCard.videoUnit", { count: e }) }) {
	let [i, a] = (0, H.useState)(-1), [s, c] = (0, H.useState)(-1), l = ct(t);
	if (!l.length) return /* @__PURE__ */ (0, Y.jsx)(d, {
		title: e,
		children: n
	});
	let u = s >= 0 ? s : i, f = l.reduce((e, t) => e + t.value, 0), p = l[u], h = (e) => a((t) => t === e ? -1 : e), g = st(l.map((e) => e.value)), _ = l.map((e, t) => ({
		slice: Dt(t),
		count: e.value,
		arc: at(e.value, g)
	}));
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: o,
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Y.jsxs)("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [p?.mark ? /* @__PURE__ */ (0, Y.jsx)(le, { mark: p.mark }) : null, p ? p.name : e]
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (p ? p.value : f).toLocaleString()
					})]
				}), /* @__PURE__ */ (0, Y.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: r(p ? p.value : f)
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => c(-1),
				children: /* @__PURE__ */ (0, Y.jsxs)(X, {
					data: _,
					nameKey: "slice",
					config: Et(l.map((e) => e.name)),
					max: g,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ (0, Y.jsx)(X.RadialBar, {
						dataKey: "arc",
						barSize: ot(l.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ (0, Y.jsx)(N, {
								...e,
								opacity: u >= 0 && u !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => h(t),
							onMouseEnter: (e, t) => c(t)
						}
					}), /* @__PURE__ */ (0, Y.jsx)(m, {
						nameKey: "slice",
						valueKey: "count",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: l.map((e, t) => /* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					"aria-pressed": i === t,
					onClick: () => h(t),
					onPointerEnter: () => c(t),
					onPointerLeave: () => c(-1),
					onFocus: () => c(t),
					onBlur: () => c(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${Ar[t % 6]}`,
					children: [
						/* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ (0, Y.jsx)("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${kr[t % 6]}`
							}), /* @__PURE__ */ (0, Y.jsxs)("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ (0, Y.jsx)(le, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ (0, Y.jsx)("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: I(e.bytes)
						})
					]
				}, Dt(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var Mr = Tt("library"), Nr = 10, Pr = s[5], Fr = s[4], Ir = `${be()} flex flex-col gap-4`, Lr = (e) => B("manage:radialCard.videoUnit", { count: e }), Rr = (e) => B("manage:stats.viewingUnit", { count: e }), zr = B("manage:stats.noVideoHint"), Br = B("manage:stats.noTagHint"), Vr = B("manage:stats.noWatchHint"), Hr = B("manage:stats.noTagSourceHint"), Ur = B("manage:stats.noVolumeHint"), Wr = B("manage:stats.noLibraryHint"), Gr = B("manage:stats.noLengthHint"), Kr = B("manage:stats.noQualityHint"), qr = B("manage:stats.noPlayTimeHint"), Jr = B("manage:stats.noReplayHint"), Yr = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, Y.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Y.jsx)("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: F(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, Y.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: e }), /* @__PURE__ */ (0, Y.jsxs)("b", {
				className: "tabular-nums",
				children: [F(t), Je(t) ? /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: nt(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ (0, Y.jsx)(k, {
			meter: !0,
			label: B("manage:shared.termProgress", {
				term: e,
				value: F(t),
				total: n.toLocaleString()
			}),
			value: Je(t) ? Yr(t, r) : 0,
			max: r
		})]
	});
}
function Xr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Y.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Zr({ headline: e, children: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `${Ir} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Qr({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, Y.jsx)(jr, {
				title: B("manage:stats.cloudAndLocal"),
				empty: zr,
				rows: e.by_loc.map((e) => ({
					name: C[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: D[e.k] || "database"
				}))
			}), /* @__PURE__ */ (0, Y.jsx)(jr, {
				title: B("manage:shared.library"),
				empty: Wr,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: D[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: B("manage:shared.duration"),
					unit: Lr,
					series: B("manage:processingTraffic.sourceVideos"),
					color: Pr,
					rows: Ye(e.by_length),
					empty: Gr
				}),
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: B("manage:shared.quality"),
					unit: Lr,
					series: B("manage:processingTraffic.sourceVideos"),
					color: Pr,
					rows: ye(e.by_quality),
					empty: Kr
				}),
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: B("manage:stats.fileTypes"),
					unit: (e) => B("manage:stats.itemsUnit", { count: e }),
					series: B("manage:stats.itemsSeries"),
					color: Pr,
					layout: "horizontal",
					rows: Qe(e.by_medium),
					empty: zr
				})
			]
		})]
	}) : /* @__PURE__ */ (0, Y.jsx)(b, {
		icon: ee,
		title: B("manage:stats.noVideosTitle"),
		actions: /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: B("manage:stats.newFollow")
		}), /* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "primary",
			href: Mr,
			size: "small",
			children: B("manage:shared.addMedia")
		})] }),
		children: zr
	});
}
function $r({ data: e }) {
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(Qt, {
		activity: e.play_activity,
		title: B("manage:stats.playTimes"),
		dailyTitle: B("manage:stats.dailyPlays"),
		words: {
			unit: Rr,
			series: B("manage:shared.video"),
			cell: (e) => B("manage:stats.viewingCell", { count: e })
		},
		tone: 5,
		empty: qr
	}), /* @__PURE__ */ (0, Y.jsx)(V, {
		title: B("manage:stats.plays"),
		unit: Rr,
		series: B("manage:shared.video"),
		color: Fr,
		rows: dt(e.replays),
		empty: Jr
	})] });
}
function ei({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: B("manage:stats.hasCreator"),
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: B("manage:stats.hasCode"),
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: B("manage:stats.hasLabel"),
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: B("manage:stats.framesExtracted"),
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: B("manage:stats.durationProbed"),
				value: e.duration,
				total: t
			})
		]
	});
}
function ti({ volume: e }) {
	let t = e.total, n = e.used ?? 0, r = Se(e, "label");
	return /* @__PURE__ */ (0, Y.jsxs)("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
					className: "min-w-0 break-words",
					children: r
				}), t == null ? e.online ? /* @__PURE__ */ (0, Y.jsx)(de, { children: B("manage:stats.capacityNotFound") }) : /* @__PURE__ */ (0, Y.jsx)(an, { online: !1 }) : /* @__PURE__ */ (0, Y.jsxs)("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [I(n), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: nt(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ (0, Y.jsx)(k, {
				meter: !0,
				label: B("manage:stats.volumeUsage", { volume: r }),
				value: Yr(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ (0, Y.jsxs)("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "min-w-0 break-words",
					children: e.root ?? B("manage:stats.notMapped")
				}), t == null ? null : /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: B("manage:stats.volumeFreeTotal", {
						free: I(e.free ?? 0),
						total: I(t)
					})
				})]
			})
		]
	});
}
function ni({ volumes: e }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsx)(ti, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(b, {
		icon: fe,
		title: B("manage:stats.noStorageTitle"),
		actions: /* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "primary",
			href: Mr,
			size: "small",
			children: B("manage:shared.addMedia")
		}),
		children: Ur
	});
}
function ri({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)($t, {
		previewCount: Nr,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ (0, Y.jsx)("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ (0, Y.jsxs)("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(b, {
		icon: R,
		title: B("manage:stats.noContentTagsTitle"),
		actions: /* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: B(r ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Br
	});
}
function ii({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = Xt(e);
			return /* @__PURE__ */ (0, Y.jsxs)("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ (0, Y.jsx)("a", {
							href: it(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ (0, Y.jsxs)("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ (0, Y.jsx)("span", { children: Yt(e) })]
					})]
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ (0, Y.jsx)(k, {
						meter: !0,
						label: B("manage:stats.watchedShare", { percent: t.toFixed(0) }),
						value: t
					}), /* @__PURE__ */ (0, Y.jsx)("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: B("manage:stats.watchedReached", {
							watched: t.toFixed(0),
							reached: lt(e).toFixed(0)
						})
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ (0, Y.jsx)(b, {
		icon: Pt,
		title: B("manage:stats.noWatchHistoryTitle"),
		actions: /* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: B(t ? "manage:shared.browseCollection" : "manage:shared.addMedia")
		}),
		children: Vr
	});
}
function ai({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsxs)("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ (0, Y.jsxs)("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: Lr(e.assets)
						})]
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(k, {
					meter: !0,
					label: B("manage:stats.tagSourceCoverage", { source: e.k }),
					value: Yr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ (0, Y.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: B("manage:stats.tagsCount", { count: e.n })
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ (0, Y.jsx)(b, {
		icon: R,
		title: B("manage:stats.noTagSourcesTitle"),
		actions: /* @__PURE__ */ (0, Y.jsx)(a, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: B(t ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Hr
	});
}
function $({ id: e, label: n, figure: r, detail: i, icon: a, accent: o }) {
	return /* @__PURE__ */ (0, Y.jsx)(t, {
		id: e,
		className: kt({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ (0, Y.jsx)(ue, {
			label: n,
			icon: a,
			accent: o,
			figure: r,
			footer: i
		})
	});
}
function oi(i) {
	let a = Gt({
		queryKey: ne,
		queryFn: ({ signal: e }) => De(e)
	}), o = a.data;
	if (!o) return /* @__PURE__ */ (0, Y.jsx)(on, { children: a.isPending ? /* @__PURE__ */ (0, Y.jsx)("div", {
		"data-skeleton": "",
		dangerouslySetInnerHTML: { __html: At() }
	}) : /* @__PURE__ */ (0, Y.jsx)(A, {
		titleKey: "manage:stats.loadFailedTitle",
		query: a
	}) });
	let s = o.consumption, c = o.storage_summary, l = o.by_loc.reduce((e, t) => e + t.videos, 0), u = o.by_loc.reduce((e, t) => e + t.bytes, 0), d = Je(o.tag_cov) ? nt(o.tag_cov, o.attribution.videos) : B("manage:shared.notFound"), f = `${F(o.tag_cov)} / ${o.attribution.videos.toLocaleString()}`, p = l > 0 || o.top_tags.length > 0 || o.recent.length > 0 || o.tag_source.length > 0;
	return /* @__PURE__ */ (0, Y.jsxs)(on, { children: [
		a.error ? /* @__PURE__ */ (0, Y.jsx)(A, {
			titleKey: "manage:stats.loadFailedTitle",
			query: a
		}) : null,
		/* @__PURE__ */ (0, Y.jsxs)(n, {
			defaultSelectedKey: "inventory",
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)(r, {
					"aria-label": B("manage:stats.viewsLabel"),
					className: re,
					children: [
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "inventory",
							label: B("manage:statsSkeleton.collection"),
							icon: he,
							accent: 0,
							figure: l.toLocaleString(),
							detail: I(u)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "viewing",
							label: B("manage:shared.watched"),
							icon: pe,
							accent: 1,
							figure: F(s.played),
							detail: rt(s.play_seconds)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "coverage",
							label: B("manage:statsSkeleton.contentTags"),
							icon: R,
							accent: 2,
							figure: d,
							detail: f
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "storage",
							label: B("manage:statsSkeleton.spaceUsed"),
							icon: fe,
							accent: 3,
							figure: B("manage:stats.volumeCount", { count: c.online }),
							detail: c.measured ? B("manage:stats.usedSize", { size: I(c.used) }) : B("manage:stats.capacityNotFound")
						})
					]
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "inventory",
					children: /* @__PURE__ */ (0, Y.jsx)(Qr, {
						data: o,
						...i
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)(e, {
					id: "viewing",
					className: "flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, Y.jsx)(Zr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Xr, {
							term: B("manage:stats.watchedTerm"),
							figure: F(s.played),
							unit: B("manage:stats.videosWithPlays", { count: s.played ?? 0 })
						}),
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "inline-grid w-full gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.watchedInCollection"),
									value: s.library_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.watchedOnline"),
									value: s.online_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.climaxCount"),
									value: s.o_total
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.skimmed"),
									value: s.skimmed
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:shared.like"),
									value: s.liked
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.disliked"),
									value: s.dislike
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:stats.seenIt"),
									value: s.seen
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: B("manage:managePages.trash"),
									value: s.trash
								})
							]
						})
					}), /* @__PURE__ */ (0, Y.jsx)($r, { data: o })]
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "coverage",
					children: /* @__PURE__ */ (0, Y.jsx)(Zr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Xr, {
							term: B("manage:stats.contentTagCoverage"),
							figure: d,
							unit: f
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(ei, { attribution: o.attribution })
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "storage",
					children: /* @__PURE__ */ (0, Y.jsx)(Zr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Xr, {
							term: B("manage:statsSkeleton.spaceUsed"),
							figure: c.measured.toLocaleString(),
							unit: B("manage:stats.volumesMeasured", { count: c.measured })
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(ni, {
							volumes: o.storage_volumes,
							...i
						})
					})
				})
			]
		}),
		p ? /* @__PURE__ */ (0, Y.jsxs)(n, {
			defaultSelectedKey: "tags",
			className: `${be({ padding: "none" })} flex flex-col`,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ (0, Y.jsxs)(ie, {
						"aria-label": B("manage:stats.breakdownsLabel"),
						className: te,
						children: [
							/* @__PURE__ */ (0, Y.jsx)(t, {
								id: "tags",
								className: M,
								children: B("manage:statsSkeleton.contentTags")
							}),
							/* @__PURE__ */ (0, Y.jsx)(t, {
								id: "recent",
								className: M,
								children: B("manage:stats.recentlyWatched")
							}),
							/* @__PURE__ */ (0, Y.jsx)(t, {
								id: "sources",
								className: M,
								children: B("manage:stats.tagSources")
							})
						]
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "tags",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(ri, {
						tags: o.top_tags,
						hasMedia: l > 0,
						...i
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "recent",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(ii, {
						rows: o.recent,
						hasMedia: l > 0
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(e, {
					id: "sources",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(ai, {
						sources: o.tag_source,
						videos: o.attribution.videos
					})
				})
			]
		}) : null
	] });
}
export { oi as StatsPage };

//# debugId=68b3437d-ad8f-4223-95fe-b3a7388ad4b2