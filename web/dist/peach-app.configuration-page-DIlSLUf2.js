(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "602a2745-88f5-46a0-bd74-af9d0425c1b2", e._sentryDebugIdIdentifier = "sentry-dbid-602a2745-88f5-46a0-bd74-af9d0425c1b2");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $72abaeab4d80592f$export$78efe591171d7d45 as n, $ea3928288112382f$export$439d29a4e110a164 as r, $f2ff30fde7b014be$export$3ddf2d174ce01153 as i, $fe21c36db05242bb$export$a98f0dcb43a68a25 as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ACCENTS as s, AILibrarySettings as c, ActionSpinner as l, ActivityStatus as u, AnimatedItems as d, AnimatedNumber as f, ApiError as p, Button as m, ButtonLink as h, CLOUD_LOCATIONS as g, CLOUD_PROXY_HELP as _, CONFIGURATION_KEY as v, CONFIGURATION_SECTIONS as y, CONFIGURATION_URL as b, CREDENTIAL_STATE as x, Cell as S, ChartBackground as C, ChartContainer as w, ChartLegend as T, ChartLegendContent as E, ChartTip as ee, ChartTooltip as D, ChartTooltipContent as te, Checkbox as O, Chip as k, CommandSteps as ne, Curve as re, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as ie, DATA_ITEM_INDEX_ATTRIBUTE_NAME as ae, DataLabelColorsContextProvider as oe, DataLabelThemeContextProvider as se, DefaultZIndexes as ce, Disclosure as le, EDITION_TONE as ue, ENTRY_LINKS_HELP as de, ENTRY_LINKS_HINT as fe, EmptyState as pe, ErrorText as A, Eu as me, EvilBarChart as he, ExternalLink as ge, FOLLOW_CREDENTIALS_KEY as _e, FOLLOW_CREDENTIALS_KEY$1 as ve, FOLLOW_INITIAL_RANGE_OPTIONS as ye, Fact as j, FactList as be, FieldLabel as xe, FillObjectDefinition as Se, Footer as M, Help as N, Input as P, L1 as Ce, LIBRARY_FOLDER_HELP as we, LIBRARY_PROCESSING_KEY as Te, Label as Ee, LabelList as De, LabelListFromLabelProp as Oe, Layer as ke, LinkButton as Ae, LoadingIndicator as je, M6 as Me, MEDIA_PROCESSING_KEY as Ne, MEDIA_PROCESSING_URL as Pe, MEDIA_SOURCE_ICONS as Fe, MENU_POPOVER_SURFACE as Ie, NavigationOrderRows as Le, Note as F, PICK_FOLDER_URL as Re, POLICY_COLUMNS as ze, POLICY_COVER_NOTE as Be, POLICY_MATRIX as Ve, POLICY_SUMMARY as He, PathLine as Ue, PolarLabelContextProvider as We, PolarLabelListContextProvider as Ge, ProcessingMode as Ke, Progress as qe, QueryErrorNote as Je, RELEASE_NOTICE_EVENT as Ye, REPAIR_CENTER_PATH as Xe, RegisterGraphicalItemId as Ze, Rows as I, SCHEDULES as Qe, SCRAPING_KEY as $e, SCRAPING_SETTINGS_URL as et, SEGMENT as tt, SEGMENTED_TRACK as nt, SETTINGS_KEY as rt, SETTINGS_URL as it, Section as L, SectionSkeleton as at, SectionToc as ot, Sector as st, SegmentedRadioGroup as ct, Select as lt, Select$1 as R, SelectItem as z, SetPolarGraphicalItem as ut, SetPolarLegendPayload as dt, SetTooltipEntrySettings as ft, SettingsCard as pt, SettingsRow as B, Shape as mt, SiteLabel as ht, SortableBoardTabs as gt, SourceLabel as _t, SourceMark as vt, Stack as V, StatusLabel as H, Switch as yt, THUMBNAIL_JOBS_KEY as bt, TIP_SWATCH as xt, TaskCenterLink as St, TaskProgress as Ct, Text as wt, Textarea as Tt, Uz as Et, ZIndexLayer as Dt, __toESM as Ot, _p as kt, activityKind as At, adaptEventsOfChild as jt, apiGet as U, apiSend as W, appSettingsStore as Mt, applyLabelTheme as Nt, arrayTooltipSearcher as Pt, bodyFieldErrors as Ft, boundedPreference as It, busyProps as G, cardClass as Lt, checkClientUpdates as Rt, cloudProxySkeleton as zt, clsx as Bt, cn$1 as Vt, codedText as K, configurationDescriptionKey as Ht, confirmModal as Ut, createSelector as Wt, credentialDone as Gt, credentialsSkeleton as Kt, cx as qt, d6 as Jt, devicesSkeleton as Yt, editionName as Xt, errorMessage as q, fetchConfiguration as Zt, fetchCredentials as Qt, fetchLibraryProcessing as $t, fetchMediaProcessing as en, fetchSettings as tn, fetchSources as nn, fetchThumbnailJobs as rn, filledShapeLabelColors as an, findAllByType as on, fmtSize as sn, get as cn, getActiveStyleOverrides as ln, getClassNameFromUnknown as un, getColorGraphicalItems as dn, getColorsCount as fn, getEntryFillId as pn, getFillUrl as mn, getIndexedEntryFillObject as hn, getMaxRadius as gn, getOwnStyles as _n, getPercentValue as vn, getTooltipNameProp as yn, getValueByDataKey as bn, hasOwnColors as xn, i2 as Sn, indexersSkeleton as Cn, interfaceLanguage as wn, interpolate as Tn, isDataAttribute as En, isNumber as Dn, isSvgElementPropKey as On, javBrowserSkeleton as kn, jobText as An, joinList as jn, l1 as Mn, ledgerBackupsSkeleton as Nn, localizedFact as Pn, matchAppend as Fn, mathSign as In, momentText as Ln, motion as Rn, overlayHost as zn, peachHistory$1 as Bn, pickServerFolder as Vn, polarToCartesian as Hn, pollUntil as Un, previewLibraryColor as Wn, processingActive as Gn, providerIcon as Kn, queryClient as qn, randomId as Jn, readEntryFill as Yn, rememberShape as Xn, require_jsx_runtime as Zn, require_react as Qn, resolveDefaultProps as $n, restartEffectText as er, saveCredential as tr, schedulePollInterval as nr, sectionTitle as rr, selectActiveTooltipDataKey as ir, selectActiveTooltipGraphicalItemId as ar, selectActiveTooltipIndex as or, selectChartDataAndAlwaysIgnoreIndexes as sr, selectChartOffsetInternal as cr, serverLabel as lr, serverLabelList as ur, serverText as dr, settingsPath as fr, shellNavigate as pr, sourceDefaultCost as mr, spinnerHtml as hr, splitFill as gr, stageText as _r, svgPropertiesNoEvents as vr, svgPropertiesNoEventsFromUnknown as yr, t as J, tone as br, translateWithNodes as xr, useAction as Y, useAnimationCallbacks as Sr, useAppSelector as Cr, useBackwardsCompatibleTheme as wr, useClientUpdates as Tr, useDataLabelThemeResolver as Er, useIndexedLabelThemeResolver as Dr, useLibraryTints as Or, useMouseClickItemDispatch as kr, useMouseEnterItemDispatch as Ar, useMouseLeaveItemDispatch as jr, useMutation as Mr, useOrderedLibraries as Nr, usePolarChartLayout as Pr, useQuery as X, useQueryClient as Fr, useRunSchedule as Ir, useSaveSchedule as Lr, useSaveSettings as Rr, useSaveThumbnailMode as zr, useThemeFillObjects as Br, we as Vr, withoutColors as Hr, z3 as Ur } from "./peach-app.js";
import { useCheckReceipt as Wr } from "./peach-app.use-check-receipt-CVw_ZYdx.js";
import { ConnectionStatus as Gr } from "./peach-app.connection-status-BrXhLGSm.js";
import { CodeBlock as Kr } from "./peach-app.code-block-BdQewVJ0.js";
import { PolarChart as qr, defaultPolarChartProps as Jr, selectUnfilteredPolarItems as Yr } from "./peach-app.PolarChart-CeCYLBHr.js";
import { FolderField as Xr, FolderFieldLine as Zr, FolderRow as Qr, MEDIA_SOURCES as $r, MediaReadPolicy as ei, MediaReadPolicyHelp as ti, SourceSelect as ni, isCloudSource as ri, sourceMark as ii, useFolderRows as ai } from "./peach-app.folder-rows-C3hhF_90.js";
import { BrowserIcon as oi, browserIconId as si } from "./peach-app.browser-icon-N9Od-bAf.js";
import { SourceBrowserLoginButton as ci, SourceBrowserLoginStatus as li, sourceBrowserLoginUrl as ui, useSourceBrowserLogin as di } from "./peach-app.source-browser-login-x7L-xBDi.js";
import { SourceIcon as fi } from "./peach-app.source-view-CqeSCcU2.js";
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function pi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function mi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pi(Object(n), !0).forEach(function(t) {
			hi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function hi(e, t, n) {
	return (t = gi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gi(e) {
	var t = _i(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _i(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var vi = Wt([Yr, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), yi = [], bi = (e, t, n) => n?.length === 0 ? yi : n, xi = Wt([
	sr,
	vi,
	bi
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => mi(mi({}, t.presentationProps), e.props))), i != null) return i;
	}
}), Si = Wt([
	xi,
	vi,
	bi
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = bn(e, t.nameKey, t.name), o = Yn(n == null || (i = n[r]) == null ? void 0 : i.props).color ?? Yn(e).color ?? t.fill;
		return {
			value: yn(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), Ci = Wt([
	xi,
	vi,
	bi,
	cr
], (e, t, n, r) => {
	if (t != null && e != null) return ta({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), Z = /* @__PURE__ */ Ot(Qn()), wi = ["key"], Ti = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Ei = [
	"id",
	"graphicalItems",
	"explicitStyleProps",
	"pieFillObject"
], Di = ["id"];
function Oi() {
	return Oi = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Oi.apply(null, arguments);
}
function ki(e, t) {
	if (e == null) return {};
	var n, r, i = Ai(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ai(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ji(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ji(Object(n), !0).forEach(function(t) {
			Mi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ji(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Mi(e, t, n) {
	return (t = Ni(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ni(e) {
	var t = Pi(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Pi(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Fi = /* @__PURE__ */ new Set([
	"cx",
	"cy",
	"r",
	"name"
]);
function Ii(e) {
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (n === "id" || En(n) || (!On(n) || Fi.has(n)) && (t[n] = e[n]));
	return t;
}
var Li = st;
function Ri(e, t, n, r) {
	var i = n[t % n.length];
	if (i != null) {
		var a = typeof e == "object" && e ? Q(Q({}, e), {}, { fill: Yn(e).color }) : {}, o = Q(Q({}, _n(r)), _n(a)), s = xn(a) || xn(r);
		return {
			fill: s ? o.fill : i.fill,
			fillOpacity: o.fillOpacity ?? i.fillOpacity,
			stroke: s ? o.stroke : i.stroke,
			strokeOpacity: o.strokeOpacity ?? i.strokeOpacity,
			strokeWidth: o.strokeWidth ?? i.strokeWidth,
			strokeDasharray: o.strokeDasharray ?? i.strokeDasharray
		};
	}
}
function zi(e) {
	return e.fill && e.fill !== "none" ? e.fill : e.stroke;
}
function Bi(e, t, n, r) {
	var i = Ri(e.payload, t, n, r);
	return i == null ? e : Q(Q(Q({}, e), i), {}, { tooltipPayload: e.tooltipPayload?.map((e) => Q(Q({}, e), {}, {
		color: zi(i),
		fill: i.fill
	})) });
}
function Vi(e) {
	var t = (0, Z.useMemo)(() => on(e.children, S), [e.children]), n = Br(), r = Cr((n) => Si(n, e.id, t));
	if (r == null) return null;
	var i = r.map((r, i) => {
		var a, o = Q(Q({}, r.payload), t == null || (a = t[i]) == null ? void 0 : a.props), s = hn(o, i, e.pieFillObject, n, xn(e.explicitStyleProps)), c = Ri(o, i, e.graphicalItems, e.explicitStyleProps);
		return c == null ? s == null ? r : Q(Q({}, r), {}, { fill: s }) : Q(Q({}, r), {}, {
			color: zi(c),
			fill: s
		});
	});
	return /*#__PURE__*/ Z.createElement(dt, { legendPayload: i });
}
function Hi(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var Ui = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = Hi(e.activeShape), p = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return f == null || t == null ? t : t.map((e) => Q(Q({}, e), {}, {
				color: f,
				fill: f
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: yn(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(ft, { tooltipEntrySettings: p });
}), Wi = (e, t) => e > t ? "start" : e < t ? "end" : "middle", Gi = (e, t, n) => vn(typeof t == "function" ? t(e) : t, n, n * .8), Ki = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = e.maxRadius ?? gn(a, o);
	return {
		cx: i + vn(e.cx, a, a / 2),
		cy: r + vn(e.cy, o, o / 2),
		innerRadius: vn(e.innerRadius, s, 0),
		outerRadius: Gi(n, e.outerRadius, s),
		maxRadius: e.maxRadius ?? Math.sqrt(a * a + o * o) / 2
	};
}, qi = (e, t) => In(t - e) * Math.min(Math.abs(t - e), 360), Ji = (e, t) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = Bt("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = ki(t, wi);
	return /*#__PURE__*/ Z.createElement(re, Oi({}, r, {
		type: "linear",
		className: n
	}));
}, Yi = (e, t, n, r) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var i = n;
	if (typeof e == "function" && (i = e(t), /*#__PURE__*/ Z.isValidElement(i))) return i;
	var a = Bt("recharts-pie-label-text", un(e));
	return /*#__PURE__*/ Z.createElement(wt, Oi({}, t, {
		alignmentBaseline: "middle",
		className: a,
		background: r
	}), i);
};
function Xi(e) {
	if (!(typeof e != "object" || !e || /*#__PURE__*/ Z.isValidElement(e) || "position" in e)) return e;
}
function Zi(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = Er(), a = n.label, o = n.labelLine, s = n.dataKey;
	if (!r || !a || !t) return null;
	var c = vr(n), l = yr(a), u = Xi(a), d = yr(o), f = typeof a == "object" && "offsetRadius" in a && typeof a.offsetRadius == "number" && a.offsetRadius || 20, p = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = Hn(e.cx, e.cy, e.outerRadius + f, n), p = Ii(e), m = Q(Q(Q(Q({}, c), p), {}, {
			fill: e.fill,
			stroke: "none"
		}, l), {}, {
			index: t,
			textAnchor: Wi(r.x, e.cx)
		}, r), h = Nt(i?.(t), {
			fill: u?.fill,
			style: u?.style ?? m.style,
			background: u?.background
		}, m.fill), g = Q(Q({}, m), h), _ = Q(Q(Q(Q({}, c), p), {}, {
			fill: "none",
			stroke: e.fill
		}, d), {}, {
			index: t,
			points: [Hn(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(Dt, {
			zIndex: ce.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ Z.createElement(ke, null, o && Ji(o, _), Yi(a, g, bn(e.payload, s, e.value), h.background)));
	});
	return /*#__PURE__*/ Z.createElement(ke, { className: "recharts-pie-labels" }, p);
}
function Qi(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(Oe, { label: i }) : /*#__PURE__*/ Z.createElement(Zi, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function $i(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, u = e.indexedActiveStyles, d = Cr(or), f = Cr(ir), p = Cr(ar), m = i.onMouseEnter, h = i.onClick, g = i.onMouseLeave, _ = ki(i, Ti), v = Ar(m, i.dataKey, o), y = jr(g), b = kr(h, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, m) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var h = p == null || p === o, g = String(m) === d && (f == null || i.dataKey === f) && h, x = d ? r : null, S, C = !1;
		g && n ? S = n === !0 ? a : n : x == null ? S = a : (S = x, C = !0);
		var w = Q(Q({}, e), {}, {
			fill: i.sectorPaintFills?.[m] ?? e.fill,
			stroke: e.stroke,
			tabIndex: -1,
			index: m,
			isActive: g,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[ae]: m,
			[ie]: o
		}), T = g && !C ? ln(S === Li || S, u[m % u.length], e.payload) : void 0, E = T == null ? w : Q(Q({}, w), T);
		return /*#__PURE__*/ Z.createElement(ke, Oi({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${m}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, jt(_, e, m), {
			onMouseEnter: v(e, m),
			onMouseLeave: y(e, m),
			onClick: b(e, m)
		}), /*#__PURE__*/ Z.createElement(mt, {
			option: S,
			DefaultShape: Li,
			shapeProps: E
		}));
	}));
}
function ea(e) {
	return Dn(e) && e !== 0;
}
function ta(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = qi(o, s), p = Math.abs(f), m = n.filter((e) => ea(bn(e, c, 0))).length, h = m <= 1 ? 0 : t.paddingAngle ?? 0, g = n.findIndex((e) => ea(bn(e, c, 0))), _ = (p >= 360 ? m : m - 1) * h, v = n.reduce((e, t) => {
		var n = bn(t, c, 0);
		return e + (Dn(n) ? n : 0);
	}, 0), y = d > 0 && v > 0 && n.some((e) => {
		var t = bn(e, c, 0), n = (Dn(t) ? t : 0) / v;
		return ea(t) && n * p < d;
	}) ? d : 0, b = p - m * y - _, x;
	if (v > 0) {
		var S;
		x = n.map((e, n) => {
			var s = bn(e, c, 0), d = bn(e, l, n), p = Ki(t, i, e), m = (Dn(s) ? s : 0) / v, _, x = Q(Q({}, e), r && r[n] && r[n].props), C = Q({}, x);
			delete C.id;
			var w = Yn(x), T = w.color ?? t.fill, E = n > 0 && n === g, ee = ea(s) && !E;
			_ = n ? S.endAngle + In(f) * h * +!!ee : o;
			var D = _ + In(f) * ((ea(s) ? y : 0) + m * b), te = (_ + D) / 2, O = (p.innerRadius + p.outerRadius) / 2, k = [{
				name: d,
				value: s,
				payload: x,
				dataKey: c,
				type: u,
				color: T,
				fill: T,
				graphicalItemId: t.id
			}], ne = Hn(p.cx, p.cy, O, te);
			return S = Q(Q(Q(Q(Q({}, t.presentationProps), {}, {
				percent: m,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: k,
				midAngle: te,
				middleRadius: O,
				tooltipPosition: ne
			}, C), w.fillObject == null ? void 0 : { fill: T }), p), {}, {
				value: s,
				dataKey: c,
				startAngle: _,
				endAngle: D,
				payload: x,
				paddingAngle: ee ? In(f) * h : 0
			}), S;
		});
	}
	return x;
}
function na(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, Z.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
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
	})), [n, t]);
	return /*#__PURE__*/ Z.createElement(Ge, { value: t ? i : void 0 }, r);
}
var ra = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			if (e.status === "matched") {
				var a = r > 0 ? Tn(cn(e.prev, "paddingAngle", 0), cn(e.next, "paddingAngle", 0), t) : 0, o = Tn(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = Q(Q({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = r > 0 ? cn(e.next, "paddingAngle", 0) : 0, l = Tn(0, e.next.endAngle - e.next.startAngle, t), u = Q(Q({}, e.next), {}, {
					startAngle: i + c,
					endAngle: i + l + c
				});
				n.push(u), i = u.endAngle;
			}
		}
	}), n;
};
function ia(e) {
	var t = e.props, n = e.previousSectorsRef, r = e.id, i = e.graphicalItems, a = e.indexedActiveStyles, o = t.sectors, s = t.activeShape, c = t.inactiveShape, l = t.animationInterpolateFn, u = Dr(i), f = Sr(t.onAnimationStart, t.onAnimationEnd), p = f.isAnimating, m = f.handleAnimationStart, h = f.handleAnimationEnd, g = Pr();
	if (g == null) return null;
	var _ = o[0];
	return /*#__PURE__*/ Z.createElement(se, { value: u }, /*#__PURE__*/ Z.createElement(oe, { value: an }, /*#__PURE__*/ Z.createElement(na, {
		showLabels: !p,
		sectors: o
	}, /*#__PURE__*/ Z.createElement(d, {
		animationInput: t,
		animationIdPrefix: "recharts-pie-",
		items: o,
		previousItemsRef: n,
		isAnimationActive: t.isAnimationActive,
		animationBegin: t.animationBegin,
		animationDuration: t.animationDuration,
		animationEasing: t.animationEasing,
		onAnimationStart: m,
		onAnimationEnd: h,
		animationInterpolateFn: l,
		animationMatchBy: t.animationMatchBy,
		layout: g
	}, (e, n, i) => /*#__PURE__*/ Z.createElement(ke, null, /*#__PURE__*/ Z.createElement($i, {
		sectors: e,
		activeShape: s,
		inactiveShape: c,
		allOtherPieProps: t,
		shape: t.shape,
		id: r,
		indexedActiveStyles: a,
		animationElapsedTime: n,
		isAnimating: p || n < 1,
		isEntrance: i
	}))), /*#__PURE__*/ Z.createElement(Qi, {
		showLabels: !p,
		sectors: o,
		props: t
	}), /*#__PURE__*/ Z.createElement(We, {
		cx: _?.cx ?? 0,
		cy: _?.cy ?? 0,
		innerRadius: _?.innerRadius ?? 0,
		outerRadius: _?.outerRadius ?? 0,
		startAngle: t.startAngle,
		endAngle: t.endAngle,
		clockWise: !1
	}, t.children))));
}
var aa = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: ra,
	animationMatchBy: Fn,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: Li,
	startAngle: 0,
	stroke: "#fff",
	zIndex: ce.area
};
function oa(e) {
	var t = e.id, n = e.graphicalItems, r = e.explicitStyleProps, i = e.pieFillObject, a = ki(e, Ei), o = e.hide, s = e.className, c = e.rootTabIndex, l = Br(), u = (0, Z.useMemo)(() => on(e.children, S), [e.children]), d = xn(r), f = (0, Z.useMemo)(() => n.map((e) => d ? Hr(e.active) : e.active), [n, d]), p = Cr((e) => Ci(e, t, u)), m = (0, Z.useRef)(null), h = Bt("recharts-pie", s);
	if (o || p == null) return m.current = null, /*#__PURE__*/ Z.createElement(ke, {
		tabIndex: c,
		className: h
	});
	var g = p.map((e, t) => Bi(e, t, n, r)), _ = g.map((e, t) => hn(e.payload, t, i, l, d)), v = _.map((e, n) => e == null ? void 0 : mn(pn(t, n))), y = n.length > 0;
	return /*#__PURE__*/ Z.createElement(Dt, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(Ui, {
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: g,
		stroke: y ? r.stroke : e.stroke,
		strokeWidth: y ? r.strokeWidth : e.strokeWidth,
		fill: y ? r.fill : e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: t,
		activeShape: e.activeShape
	}), /*#__PURE__*/ Z.createElement(ke, {
		tabIndex: c,
		className: h
	}, _.some((e) => e != null) && /*#__PURE__*/ Z.createElement("defs", null, _.map((e, n) => e == null ? null : /*#__PURE__*/ Z.createElement(Se, {
		key: n,
		id: pn(t, n),
		fillObject: e,
		color: g[n]?.fill
	}))), /*#__PURE__*/ Z.createElement(ia, {
		props: Q(Q({}, a), {}, {
			sectors: g,
			sectorPaintFills: v
		}),
		previousSectorsRef: m,
		id: t,
		graphicalItems: n,
		indexedActiveStyles: f
	})));
}
function sa(e) {
	var t = gr(e.fill), n = t.color, r = t.fillObject, i = Q(Q({}, e), {}, { fill: n }), a = $n(i, aa), o = wr((e) => ({ graphicalItems: e.graphicalItems }), {}, void 0), s = {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		stroke: i.stroke,
		strokeOpacity: i.strokeOpacity,
		strokeWidth: i.strokeWidth,
		strokeDasharray: i.strokeDasharray
	}, c = a.id, l = ki(a, Di), u = vr(l);
	return /*#__PURE__*/ Z.createElement(Ze, {
		id: c,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(ut, {
		type: "pie",
		id: e,
		data: l.data,
		dataKey: l.dataKey,
		hide: l.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: l.name,
		nameKey: l.nameKey,
		tooltipType: l.tooltipType,
		legendType: l.legendType,
		fill: l.fill,
		cx: l.cx,
		cy: l.cy,
		startAngle: l.startAngle,
		endAngle: l.endAngle,
		paddingAngle: l.paddingAngle,
		minAngle: l.minAngle,
		innerRadius: l.innerRadius,
		outerRadius: l.outerRadius,
		cornerRadius: l.cornerRadius,
		presentationProps: u,
		maxRadius: a.maxRadius
	}), /*#__PURE__*/ Z.createElement(Vi, Oi({}, l, {
		id: e,
		graphicalItems: dn(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	})), /*#__PURE__*/ Z.createElement(oa, Oi({}, l, {
		id: e,
		graphicalItems: dn(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	}))));
}
var ca = sa;
ca.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function la(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ua(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? la(Object(n), !0).forEach(function(t) {
			da(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : la(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function da(e, t, n) {
	return (t = fa(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function fa(e) {
	var t = pa(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function pa(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ma = ["item"], ha = ua(ua({}, Jr), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), ga = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = $n(e, ha);
	return /*#__PURE__*/ Z.createElement(qr, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: ma,
		tooltipPayloadSearcher: Pt,
		categoricalChartProps: n,
		ref: t
	});
}), $ = Zn();
function _a({ entries: e }) {
	let t = e.filter((e) => !!e);
	return t.length ? /* @__PURE__ */ (0, $.jsx)(ot, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: t,
		children: t.map(({ id: e, content: t }) => /* @__PURE__ */ (0, $.jsx)("div", {
			id: e,
			className: "flex min-w-0 flex-col gap-6",
			children: t
		}, e))
	}) : null;
}
// src/react/settings/userscript-probe.ts
function va() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = Jn(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
function ya(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function ba({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = va(), { checked: o } = Wr(), s = (0, Z.useRef)(0), c = typeof i == "object", l = c && !ya(i.version, t.minimum_version), u = c && !ya(i.version, t.version), d = i === "checking" ? "progress" : i === "missing" ? "neutral" : l || u || !i.paired ? "warning" : "success", f = i === "checking" ? J("settings:userscriptStatus.checking") : i === "missing" ? J("settings:mediaLibraries.dependencyMissing") : l ? J("settings:userscriptStatus.updateRequired") : u ? J("settings:userscriptStatus.updateAvailable") : i.paired ? J("settings:userscriptStatus.connected") : J("settings:userscriptStatus.unpaired");
	(0, Z.useEffect)(() => {
		i !== "checking" && s.current !== r && (s.current = r, o(J("settings:userscriptStatus.checkResult", { result: f })));
	}, [
		r,
		o,
		f,
		i
	]);
	let p = i === "checking" ? "checking" : i === "missing" ? "missing" : l ? "required" : u ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("iframe", {
		ref: n,
		title: J("settings:userscriptStatus.probeFrame"),
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Lt({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: J("settings:userscriptStatus.title")
				}), /* @__PURE__ */ (0, $.jsx)(Gr, {
					tone: d,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.${p}.status`,
						children: f
					})
				})]
			}),
			c ? /* @__PURE__ */ (0, $.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: [J("settings:userscriptStatus.installedVersion"), i.version]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:userscriptStatus.addFromBrowser")
				}), /* @__PURE__ */ (0, $.jsx)(H, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: J(e ? "settings:shared.enabled" : "settings:shared.notEnabled")
					})
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				"data-copy-key": `userscript.${p}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? J("settings:userscriptStatus.checkingHelp") : i === "missing" ? J("settings:userscriptStatus.missingHelp") : l ? J("settings:userscriptStatus.updateRequiredHelp", { version: t.minimum_version }) : u ? J("settings:userscriptStatus.updateAvailableHelp", { version: t.version }) : i.paired ? J(e ? "settings:userscriptStatus.readyHelp" : "settings:userscriptStatus.addingDisabledHelp") : J("settings:userscriptStatus.pairHelp")
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || l || u ? /* @__PURE__ */ (0, $.jsx)(ge, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: J(l || u ? "settings:userscriptStatus.update" : "settings:userscriptStatus.install")
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, $.jsx)(ge, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: J("settings:userscriptStatus.permissionGuide")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						type: "button",
						...G(i === "checking"),
						onClick: a,
						children: J("settings:userscriptStatus.checkAgain")
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var xa = "/api/configuration/jav-browser";
function Sa({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => U(xa, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, $.jsx)(Je, {
		titleKey: "settings:browserAdd.loadFailed",
		query: n
	}) : n.isFetching && !n.data ? /* @__PURE__ */ (0, $.jsx)(at, {
		label: J("settings:browserAdd.loading"),
		html: kn
	}) : n.data ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n.error ? /* @__PURE__ */ (0, $.jsx)(Je, {
		titleKey: "settings:browserAdd.loadFailed",
		query: n
	}) : null, /* @__PURE__ */ (0, $.jsx)(Ca, {
		initial: n.data,
		receipt: e
	})] }) : null;
}
function Ca({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		Xn("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
		c.run(e, (t) => W(xa, {
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(J(e === "disable" ? "settings:browserAdd.turnedOff" : "settings:browserAdd.tokenIssued"));
		});
	}, u = (e) => {
		c.busy || (r((t) => ({
			...t,
			want_on_no_match: e
		})), c.run("want", (t) => W("/api/settings", { javBrowserWantOnNoMatch: e }, "POST", t), () => t(J("settings:shared.settingsSaved")), (t) => {
			r((t) => ({
				...t,
				want_on_no_match: !e
			})), c.setError(q(t));
		}));
	}, d = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "browser",
		title: J("settings:javBrowser.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, $.jsx)(ba, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(xe, { children: J("settings:browserAdd.channel") }), /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:browserAdd.channel"),
						selectedKey: i || null,
						placeholder: J("settings:browserAdd.noChannels"),
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, $.jsx)(_t, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				d ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.needsCloudDrive") }), /* @__PURE__ */ (0, $.jsx)(h, {
						href: "/settings/downloads",
						variant: "secondary",
						size: "small",
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": "shell.downloadChannels.settingsLink",
							children: J("shell:downloadChannels.settingsLink")
						})
					})]
				}),
				n.problems?.map((e) => /* @__PURE__ */ (0, $.jsx)(N, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.channelUnavailable") }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:browserAdd.wantOnNoMatch"),
					description: J("settings:browserAdd.wantOnNoMatchHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:browserAdd.wantOnNoMatch"),
						isSelected: n.want_on_no_match,
						isDisabled: !!c.busy || !n.enabled,
						onChange: u
					})
				}) }),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:browserAdd.peachUrl"),
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:browserAdd.token"),
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t(J("settings:browserAdd.pairingCopied")));
						},
						...G(c.busy === "copy"),
						children: J("settings:browserAdd.copyPairing")
					}) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:browserAdd.pairingHelp") })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [n.enabled ? /* @__PURE__ */ (0, $.jsx)(m, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: J("settings:javBrowser.disable")
		}) : null, /* @__PURE__ */ (0, $.jsx)(m, {
			type: "button",
			disabled: !n.available || !d || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...G(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? J("settings:javBrowser.updateChannelToken") : J("settings:javBrowser.enable")
		})] })]
	});
}
// src/react/settings/local-download-settings.tsx
var wa = "/api/configuration/downloads/qbittorrent/check", Ta = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? lr(r.code, t, r.params) : t;
}).filter((e) => e.includes("qBittorrent")), Ea = (e) => e.problems.map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? lr(r.code, t, r.params) : t;
});
function Da({ state: e, settle: t, receipt: n }) {
	let { checked: r, checkFailed: i } = Wr(), a = J("settings:connectionCheck.action", { service: "qBittorrent" }), o = e.qbittorrent ?? {
		address: "",
		save_path: "",
		media_root: "",
		username: "",
		password_set: !1
	}, s = e.local_roots ?? [], [c, l] = (0, Z.useState)(o.address), [u, d] = (0, Z.useState)(o.save_path), f = (0, Z.useRef)(0), [p, h] = (0, Z.useState)(o.media_root), [g, _] = (0, Z.useState)(o.username), [v, y] = (0, Z.useState)(""), [b, x] = (0, Z.useState)(!1), [S, C] = (0, Z.useState)(null), [w, T] = (0, Z.useState)(""), E = Y();
	(0, Z.useEffect)(() => {
		l(o.address), f.current++, d(o.save_path), h(o.media_root), _(o.username);
	}, [
		o.address,
		o.save_path,
		o.media_root,
		o.username
	]);
	let ee = {
		...e.config,
		qbittorrent_address: c,
		qbittorrent_save_path: u,
		qbittorrent_media_root: p,
		qbittorrent_username: g,
		qbittorrent_password: v,
		clear_qbittorrent_password: b
	}, D = () => {
		let e = f.current;
		E.run("check", (e) => W(wa, ee, "POST", e), (t) => {
			C(t), e === f.current && !u.trim() && t.save_path && d(t.save_path), T(""), t.ok ? r(J("settings:connectionCheck.passed", { service: "qBittorrent" })) : i(a, Ea(t)[0] || J("settings:connectionCheck.details"));
		}, (e) => {
			let t = q(e);
			T(t), i(a, t);
		});
	}, te = (e) => {
		e.preventDefault(), E.run("save", (e) => W("/api/configuration/downloads", ee, "POST", e), (e) => {
			let { report: r, qbittorrent_report: i, ...a } = e;
			t(a), y(""), x(!1), C(i || null), T(""), n(J("settings:localDownload.saved"));
		}, (e) => T(q(e)));
	}, k = Ta(e);
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:localDownload.title"),
		onSubmit: te,
		children: [
			k.length ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:localDownload.needsAttention"),
				children: k.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.help") }),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.address"),
					placeholder: J("settings:localDownload.addressPlaceholder"),
					autoComplete: "off",
					maxLength: 200,
					value: c,
					isDisabled: !e.available,
					onChange: l
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.username"),
					autoComplete: "username",
					maxLength: 200,
					value: g,
					isDisabled: !e.available,
					onChange: _
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.password"),
					type: "password",
					autoComplete: "current-password",
					maxLength: 400,
					placeholder: o.password_set ? J("settings:shared.savedLeaveBlank") : J("settings:localDownload.passwordPlaceholder"),
					value: v,
					isDisabled: !e.available,
					onChange: y
				}),
				o.password_set ? /* @__PURE__ */ (0, $.jsx)(O, {
					isSelected: b,
					isDisabled: !e.available,
					onChange: x,
					children: J("settings:localDownload.clearPassword")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:localDownload.savePath"),
					placeholder: J("settings:localDownload.savePathPlaceholder"),
					autoComplete: "off",
					maxLength: 500,
					value: u,
					isDisabled: !e.available,
					hint: J("settings:localDownload.savePathHint"),
					onChange: (e) => {
						f.current++, d(e);
					}
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(xe, { children: J("settings:localDownload.mediaRoot") }),
						s.length ? /* @__PURE__ */ (0, $.jsx)(R, {
							"aria-label": J("settings:localDownload.mediaRoot"),
							selectedKey: p || null,
							isDisabled: !e.available,
							placeholder: J("settings:localDownload.mediaRootPlaceholder"),
							onSelectionChange: (e) => h(e === null ? "" : String(e)),
							children: s.map((e) => /* @__PURE__ */ (0, $.jsxs)(z, {
								id: e.root,
								textValue: J("shell:format.withNote", {
									text: e.label,
									note: e.root
								}),
								children: [
									e.label,
									" · ",
									e.root
								]
							}, e.root))
						}) : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.noLocalRoots", { section: J("navigation:configurationSections.library") }) }),
						/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:localDownload.mediaRootHelp") })
					]
				}),
				w ? /* @__PURE__ */ (0, $.jsx)(A, { children: w }) : null
			] }),
			S ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [/* @__PURE__ */ (0, $.jsxs)(be, { children: [
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.version"),
						children: S.version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: "WebAPI",
						children: S.webapi_version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.savePath"),
						children: S.save_path || J("settings:shared.notSet")
					}),
					/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:localDownload.mediaRoot"),
						children: S.media_root || J("settings:shared.notSet")
					})
				] }), S.problems.length ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:localDownload.checkFailed"),
					children: Ea(S).join("\n")
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, $.jsxs)(m, {
					type: "button",
					variant: "secondary",
					disabled: !e.available || E.busy === "save",
					...G(E.busy === "check"),
					onClick: D,
					children: [E.busy === "check" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: hr() }
					}) : null, J("settings:cloudDownload.testConnection")]
				}), /* @__PURE__ */ (0, $.jsxs)(m, {
					type: "submit",
					disabled: !e.available || E.busy === "check",
					...G(E.busy === "save"),
					children: [E.busy === "save" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": !0,
						dangerouslySetInnerHTML: { __html: hr() }
					}) : null, J("settings:shared.saveSettings")]
				})]
			})
		]
	});
}
// src/react/settings/download-settings.tsx
var Oa = "/api/configuration/downloads", ka = "/api/configuration/downloads/check", Aa = "/api/configuration/downloads/folder", ja = "/api/configuration/downloads/pikpak/login", Ma = "/api/configuration/downloads/pikpak/logout", Na = "/api/configuration/downloads/pikpak/browser-login", Pa = 2e3, Fa = 9e5, Ia = Kn("pikpak"), La = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? lr(r.code, t, r.params) : t;
}), Ra = (e) => e.missing.map((t, n) => lr(e.missing_codes?.[n] ?? "", t));
function za({ initial: e, receipt: t, active: n, issues: r }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r, e ? /* @__PURE__ */ (0, $.jsx)(Ba, {
		initial: e,
		receipt: t,
		active: n
	}) : null] });
}
function Ba({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		i((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let s = r.media_sources ?? [], c = s.includes("pikpak"), l = s.some((e) => g.includes(e)), u = c && (r.pikpak.logged_in || !!a.trim());
	return /* @__PURE__ */ (0, $.jsx)(_a, { entries: [
		l && {
			id: "downloads-cloud",
			label: J("settings:cloudDownload.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Va, {
				state: r,
				settle: i,
				receipt: t,
				pikpakAccount: u,
				active: n
			})
		},
		c && {
			id: "downloads-pikpak",
			label: J("settings:pikpakAccount.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Ka, {
				state: r,
				settle: i,
				receipt: t,
				username: a,
				setUsername: o
			})
		},
		{
			id: "downloads-local",
			label: J("settings:localDownload.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Da, {
				state: r,
				settle: i,
				receipt: t
			})
		},
		{
			id: "downloads-browser",
			label: J("settings:javBrowser.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Sa, {
				receipt: t,
				refreshKey: JSON.stringify([
					r.media_sources,
					r.config,
					r.token_set,
					r.pikpak.logged_in,
					r.qbittorrent,
					r.local_roots
				])
			})
		}
	] });
}
function Va({ state: e, settle: t, receipt: n, pikpakAccount: r, active: i }) {
	let { checked: a, checkFailed: o } = Wr(), s = J("settings:connectionCheck.action", { service: "CloudDrive2" }), [c, l] = (0, Z.useState)(e.config), [d, f] = (0, Z.useState)(""), [p, h] = (0, Z.useState)(String(e.config.wait_hours)), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)(""), [b, x] = (0, Z.useState)(Wa), [S, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(!1), E = Y(), ee = (0, Z.useRef)(!1), D = e.media_sources ?? [], te = D.includes("115"), O = D.includes("pikpak"), k = (e) => c.targets[e] ?? "", ne = (e, t) => l({
		...c,
		targets: {
			...c.targets,
			[e]: t
		}
	}), re = te && !(!b.target || b.target.exists || k("115") !== b.target.path), ie = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), a = t.root ? e.suggested_pikpak_root : "";
		l((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: a || n.pikpak_root
		})), _(e), y(t.address ? e.address : ""), x({
			target: r,
			root: a,
			saved: i
		}), T(!1), C("");
	};
	return (0, Z.useEffect)(() => {
		if (!i || ee.current || (ee.current = !0, !e.available || !e.config.clouddrive_address || !e.token_set)) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		E.run("auto", (e) => U(ka, e), (e) => ie(e, t), (e) => C(q(e)));
	}, [i]), /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "download",
		title: J("settings:cloudDownload.title"),
		onSubmit: (e) => {
			if (e.preventDefault(), re) {
				T(!0);
				return;
			}
			let i = !k("115").trim(), a = {
				...c,
				wait_hours: p,
				token: d,
				pikpak_account: r
			};
			E.run("save", (e) => W(Oa, a, "POST", e), (e) => {
				let { report: r, ...a } = e;
				t(a), l(a.config), h(String(a.config.wait_hours)), f(""), r ? ie(r, {
					address: !a.config.clouddrive_address,
					target: i,
					root: !a.config.pikpak_root
				}, a.config.targets[115] ?? "") : (_(null), y(""), x(Wa), T(!1), C("")), n(J("settings:shared.settingsSaved"));
			}, (e) => C(q(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:cloudDownload.needsAttention"),
				children: La(e).join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.cloudDriveUrl"),
					placeholder: J("settings:cloudDownload.addressPlaceholder"),
					autoComplete: "off",
					maxLength: 200,
					hint: J("settings:cloudDownload.cloudDriveUrlHelp"),
					value: c.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => l({
						...c,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.apiToken"),
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? J("settings:shared.savedLeaveBlank") : J("settings:cloudDownload.tokenPlaceholder"),
					hint: J("settings:cloudDownload.apiTokenHelp"),
					value: d,
					isDisabled: !e.available,
					onChange: f
				}),
				te ? /* @__PURE__ */ (0, $.jsx)(P, {
					label: /* @__PURE__ */ (0, $.jsx)(_t, {
						source: "115",
						label: J("settings:cloudDownload.target115")
					}),
					placeholder: J("settings:cloudDownload.targetPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: re,
					hint: J(re ? w ? "settings:cloudDownload.createOrPick" : "settings:cloudDownload.directoryMissing" : "settings:cloudDownload.target115Help"),
					value: k("115"),
					isDisabled: !e.available,
					onChange: (e) => ne("115", e)
				}) : null,
				O ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
					label: /* @__PURE__ */ (0, $.jsx)(_t, {
						source: "pikpak",
						label: J("settings:cloudDownload.targetPikpak")
					}),
					placeholder: J("settings:cloudDownload.pikpakPathPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					hint: J("settings:cloudDownload.targetPikpakHelp"),
					value: k("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => ne("pikpak", e)
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(xe, { children: /* @__PURE__ */ (0, $.jsx)(_t, {
						source: "pikpak",
						label: J("settings:cloudDownload.pikpakRootDirectory")
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:cloudDownload.pikpakRootDirectory"),
						selectedKey: c.pikpak_root || null,
						isDisabled: !e.available || !r,
						placeholder: J("settings:cloudDownload.rootPlaceholder"),
						onSelectionChange: (e) => l({
							...c,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: e
						}, e))
					}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDownload.pikpakRootDirectoryHelp") })] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDownload.addPikpakMount") })]
				})] }) : null,
				/* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:cloudDownload.maxWait"),
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: J("settings:cloudDownload.waitHint", { max: e.max_wait_hours }),
					value: p,
					isDisabled: !e.available,
					onChange: h
				}),
				/* @__PURE__ */ (0, $.jsx)(Ua, {
					values: c.edition_preferences ?? [],
					disabled: !e.available,
					onChange: (e) => l((t) => ({
						...t,
						edition_preferences: e
					}))
				})
			] }),
			E.busy === "auto" ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(u, {
					kind: "radar",
					label: J("settings:cloudDownload.checking")
				})
			}) : null,
			g ? /* @__PURE__ */ (0, $.jsx)(Ga, {
				report: g,
				detected: v,
				suggested: b,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: c.clouddrive_address,
						token: d,
						path: e,
						pikpak_root: c.pikpak_root,
						pikpak_account: r
					};
					E.run("folder", (e) => W(Aa, t, "POST", e), (t) => {
						_(t), x((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), T(!1), C(""), n(J("settings:cloudDownload.directoryCreated"));
					}, (e) => C(q(e)));
				} : void 0,
				creating: E.busy === "folder"
			}) : null,
			S || E.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: S || E.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !c.clouddrive_address.trim(),
							target: !k("115").trim(),
							root: !c.pikpak_root
						}, t = {
							clouddrive_address: c.clouddrive_address,
							token: d,
							target: k("115"),
							pikpak_root: c.pikpak_root,
							pikpak_account: r
						};
						E.run("check", (e) => W(ka, t, "POST", e), (t) => {
							ie(t, e), t.ok ? a(J("settings:connectionCheck.passed", { service: "CloudDrive2" })) : o(s, La(t)[0] || J("settings:connectionCheck.details"));
						}, (e) => {
							let t = q(e);
							C(t), o(s, t);
						});
					},
					disabled: !e.available,
					...G(E.busy === "check"),
					children: J("settings:cloudDownload.testConnection")
				}), /* @__PURE__ */ (0, $.jsx)(m, {
					type: "submit",
					disabled: !e.available,
					...G(E.busy === "save"),
					children: J("settings:shared.saveSettings")
				})]
			})
		]
	});
}
var Ha = Object.keys(ue);
function Ua({ values: e, disabled: t, onChange: n }) {
	let r = J("settings:cloudDownload.editionPreferences"), i = [...e, ...Ha.filter((t) => !e.includes(t))], a = Object.fromEntries(Ha.map((e) => [e, Xt(e)])), o = {
		label: r,
		keys: i,
		defaults: Ha,
		commit: n
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2",
		role: "group",
		"aria-label": r,
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, $.jsx)(xe, { children: r }), /* @__PURE__ */ (0, $.jsx)(N, { children: J(e.length ? "settings:cloudDownload.editionPreferencesHelp" : "settings:cloudDownload.editionPreferencesDefault") })]
			}),
			/* @__PURE__ */ (0, $.jsx)(Le, {
				order: o,
				labels: a,
				fixed: t ? i : [],
				reset: !1,
				render: (e) => /* @__PURE__ */ (0, $.jsx)("small", {
					className: `javedition ${ue[e]}`,
					children: a[e]
				})
			}),
			e.length ? /* @__PURE__ */ (0, $.jsx)(m, {
				type: "button",
				variant: "secondary",
				size: "small",
				className: "self-start",
				disabled: t,
				onClick: () => n([]),
				children: J("settings:cloudDownload.resetEditionPreferences")
			}) : null
		]
	});
}
var Wa = {
	target: null,
	root: "",
	saved: !1
};
function Ga({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, $.jsxs)(V, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, $.jsxs)(be, { children: [
			t ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.cloudDriveUrl"),
				children: J("settings:cloudDownload.detectedAddress", { address: t })
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(_t, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: n.saved ? J("settings:cloudDownload.filledSaved", { path: a.path }) : J("settings:cloudDownload.filledPending", { path: a.path })
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, $.jsxs)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(_t, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: [J("settings:cloudDownload.pathMissing", { path: a.path }), r ? /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...G(i),
					children: J("settings:cloudDownload.createDirectory")
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(_t, {
					source: "pikpak",
					label: J("settings:cloudDownload.pikpakRoot")
				}),
				children: J("settings:cloudDownload.filledPending", { path: n.root })
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.offlinePermissions"),
				children: e.missing.length ? Ra(e).map((e) => /* @__PURE__ */ (0, $.jsx)(k, {
					variant: "caption",
					color: "yellow",
					children: J("settings:cloudDownload.missingPermission", { permission: e })
				}, e)) : /* @__PURE__ */ (0, $.jsx)(k, {
					variant: "caption",
					color: "lime",
					children: J("settings:cloudDownload.permissionsComplete")
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:cloudDownload.targetDirectory"),
				children: e.folder.can_offline ? J("settings:cloudDownload.offlineSupported", { path: e.folder.path }) : J("settings:cloudDownload.offlineUnsupported", { path: e.folder.path })
			}) : null,
			e.quota ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: /* @__PURE__ */ (0, $.jsx)(_t, {
					source: "115",
					label: J("settings:cloudDownload.quota115")
				}),
				children: J("settings:cloudDownload.quotaLeft", {
					count: e.quota.left,
					total: e.quota.total
				})
			}) : null
		] }) : null, La(e).map((e) => /* @__PURE__ */ (0, $.jsx)(A, { children: e }, e))]
	});
}
function Ka({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, d] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(""), _ = Y(), v = e.pikpak, y = e.pikpak_browser, b = y.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!b) return;
		let e = new AbortController();
		return Un({
			signal: e.signal,
			everyMs: Pa,
			limitMs: Fa,
			read: (e) => U(Na, e),
			apply: (e) => {
				t(e), e.pikpak_browser.state === "done" ? n(J("settings:pikpakAccount.signedInReceipt")) : e.pikpak_browser.state !== "waiting" && g(An(e.pikpak_browser));
			},
			done: (e) => e.pikpak_browser.state !== "waiting",
			failed: (e) => p(q(e))
		}), () => e.abort();
	}, [b]);
	let x = () => {
		g(""), _.run("browser", (e) => W(Na, {}, "POST", e), (e) => {
			t(e), p("");
		}, (e) => p(q(e)));
	}, S = () => {
		_.run("cancel", (e) => W(`${Na}/cancel`, {}, "POST", e), (e) => {
			t(e), p(""), g(An(e.pikpak_browser));
		}, (e) => p(q(e)));
	}, C = (e) => {
		if (e.preventDefault(), v.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		_.run("login", (e) => W(ja, i, "POST", e), (e) => {
			t(e.settings), p(""), e.ok ? (d(""), o(""), n(J("settings:pikpakAccount.signedInReceipt"))) : d(e.captcha_url ?? "");
		}, (e) => p(q(e)));
	}, w = () => {
		_.run("logout", (e) => W(Ma, {}, "POST", e), (e) => {
			t(e), p(""), n(J("settings:pikpakAccount.signedOutReceipt"));
		}, (e) => p(q(e)));
	}, T = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(P, {
			label: J("settings:shared.account"),
			placeholder: J("settings:pikpakAccount.usernamePlaceholder"),
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, $.jsx)(P, {
			label: J("settings:shared.password"),
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, $.jsx)(O, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: J("settings:pikpakAccount.rememberPassword")
		}),
		l ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "warning",
			title: J("settings:pikpakAccount.captchaTitle"),
			extra: /* @__PURE__ */ (0, $.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(ge, {
					href: l,
					children: J("settings:pikpakAccount.openCaptcha")
				})
			}),
			children: J("settings:pikpakAccount.captchaHelp")
		}) : null
	] }), E = /* @__PURE__ */ (0, $.jsx)(m, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || b,
		...G(_.busy === "login"),
		children: J("settings:shared.signIn")
	}), ee = y.state === "timeout" || y.state === "failed";
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "pikpak",
		title: J("settings:pikpakAccount.title"),
		icon: /* @__PURE__ */ (0, $.jsx)(Ia, {}),
		onSubmit: C,
		aside: /* @__PURE__ */ (0, $.jsx)(H, {
			tone: v.logged_in ? "success" : b ? "progress" : ee ? "error" : "neutral",
			children: v.logged_in ? J("settings:pikpakAccount.signedIn") : J(b ? "settings:pikpakAccount.waiting" : ee ? "settings:pikpakAccount.incomplete" : "settings:pikpakAccount.notSignedIn")
		}),
		children: [
			v.logged_in ? /* @__PURE__ */ (0, $.jsxs)(be, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.account"),
				children: v.username || J("settings:pikpakAccount.signedIn")
			}), v.method === "browser" ? /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:pikpakAccount.method"),
				children: J("settings:pikpakAccount.browserMethod")
			}) : /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.password"),
				children: v.remember ? J("settings:pikpakAccount.passwordSaved") : J("settings:pikpakAccount.passwordNotSaved")
			})] }) : /* @__PURE__ */ (0, $.jsxs)(V, { children: [h ? ee ? /* @__PURE__ */ (0, $.jsx)(A, { children: h }) : /* @__PURE__ */ (0, $.jsx)(N, {
				role: "status",
				children: h
			}) : null, T] }),
			f || _.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: f || _.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: !v.logged_in && b ? /* @__PURE__ */ (0, $.jsx)(u, {
					kind: "clock",
					label: An(y) || J("settings:pikpakAccount.waitingBrowser")
				}) : null,
				children: v.logged_in ? /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					onClick: w,
					disabled: !e.available,
					...G(_.busy === "logout"),
					children: J("settings:shared.signOut")
				}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y.available ? b ? /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					type: "button",
					onClick: S,
					...G(_.busy === "cancel"),
					children: J("settings:shared.cancel")
				}) : /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					type: "button",
					onClick: x,
					disabled: !e.available,
					...G(_.busy === "browser"),
					children: J("settings:pikpakAccount.browserSignIn")
				}) : null, E] })
			})
		]
	});
}
// src/react/settings/general-settings.tsx
var qa = "/api/configuration/startup";
function Ja({ active: e, initial: t, receipt: n }) {
	let r = X({
		queryKey: ["configuration", "startup"],
		queryFn: ({ signal: e }) => U(qa, e),
		enabled: e,
		initialData: t
	});
	return r.data ? /* @__PURE__ */ (0, $.jsx)(Ya, {
		startup: r.data,
		receipt: n
	}) : e ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "startup",
		title: J("settings:startup.title"),
		children: r.isError ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			action: /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				size: "small",
				...G(r.isFetching),
				onClick: () => void r.refetch(),
				children: J("settings:shared.reload")
			}),
			children: q(r.error)
		}) : /* @__PURE__ */ (0, $.jsx)("div", {
			role: "status",
			"aria-busy": "true",
			className: "px-4 py-3",
			children: /* @__PURE__ */ (0, $.jsx)("span", { className: "block h-4 w-36 rounded-md bg-background-tertiary-default" })
		})
	}) : null;
}
function Ya({ startup: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message, u = K(e, "desktop_message"), d = K(e, "message");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "startup",
		title: J("settings:startup.title"),
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => W(qa, {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t(J("settings:shared.settingsSaved")));
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.launchAtStartup"),
					description: J("settings:startup.launchAtStartupHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:startup.launchAtStartup"),
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.trayOnly"),
					description: J("settings:startup.trayOnlyHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:startup.trayOnly"),
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:startup.desktopShortcut"),
					description: u || void 0,
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:startup.desktopShortcut"),
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			d || c.error ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [d ? /* @__PURE__ */ (0, $.jsx)(N, { children: d }) : null, c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				disabled: !e.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/settings/ledger-backup-settings.tsx
var Xa = "/api/configuration/ledger-backups", Za = 1500, Qa = 36e5, $a = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString(wn);
function eo(e) {
	return [e.source === "manual" ? J("settings:databaseBackups.manual") : J("settings:databaseBackups.automatic", { purpose: lr(`ledgerBackup.purpose.${e.purpose_code}`, e.purpose) }), sn(e.bytes)].join(" · ");
}
function to({ job: e, task: t, label: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(Ct, {
			embedded: !0,
			kind: At(t, e.stage_code),
			label: [n, _r(e)].filter(Boolean).join(" · "),
			value: e.done || 0,
			total: e.total
		}), /* @__PURE__ */ (0, $.jsx)(St, {})]
	});
}
function no({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(""), a = Y(), o = t?.backup.status === "running", s = t?.restore.status === "running", c = o || s, l = (0, Z.useRef)({
		backup: !1,
		restore: !1
	});
	if ((0, Z.useEffect)(() => {
		let e = new AbortController();
		return U(Xa, e.signal).then(n, (t) => {
			e.signal.aborted || i(String(t?.message || t));
		}), () => e.abort();
	}, []), (0, Z.useEffect)(() => {
		if (!c) return;
		let e = new AbortController();
		return Un({
			signal: e.signal,
			everyMs: Za,
			limitMs: Qa,
			read: (e) => U(Xa, e),
			apply: n,
			done: (e) => e.backup.status !== "running" && e.restore.status !== "running"
		}), () => e.abort();
	}, [c]), (0, Z.useEffect)(() => {
		if (t) for (let n of ["backup", "restore"]) {
			let r = t[n];
			r.status === "running" ? l.current[n] = !0 : l.current[n] && (l.current[n] = !1, r.status === "complete" && e(n === "backup" ? J("settings:databaseBackups.backedUp", { name: r.name }) : J("settings:databaseBackups.restored", { name: r.saved })));
		}
	}, [t]), !t && !r) return /* @__PURE__ */ (0, $.jsx)(at, {
		label: J("settings:databaseBackups.loading"),
		html: Nn
	});
	if (!t) return /* @__PURE__ */ (0, $.jsx)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: r }) })
	});
	let u = () => void a.run("backup", (e) => W(`${Xa}/backup`, {}, "POST", e), n), d = (e) => void Ut({
		title: J("settings:databaseBackups.restoreTitle"),
		danger: !0,
		body: J("settings:databaseBackups.restoreBody", {
			time: $a(e),
			details: eo(e)
		}),
		confirmLabel: J("settings:databaseBackups.replaceCurrent"),
		onConfirm: async () => {
			l.current.restore = !0, n(await W(`${Xa}/restore`, {
				id: e.id,
				confirm: !0
			}));
		}
	}), f = [t.backup, t.restore].find((e) => e.status === "failed"), p = t.last_restore, h = o ? J("settings:databaseBackups.backingUp") : s ? J("settings:databaseBackups.restoring") : t.backups.length ? J("settings:databaseBackups.count", { count: t.backups.length }) : J("settings:databaseBackups.empty");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:databaseBackups.help") }),
				t.writer ? null : /* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:databaseBackups.notPrimary"), K(t, "writer_reason")] }),
				o ? /* @__PURE__ */ (0, $.jsx)(to, {
					job: t.backup,
					task: "ledger-backup",
					label: J("settings:databaseBackups.backupProgress")
				}) : null,
				s ? /* @__PURE__ */ (0, $.jsx)(to, {
					job: t.restore,
					task: "ledger-restore",
					label: J("settings:databaseBackups.restoreProgress")
				}) : null,
				f ? /* @__PURE__ */ (0, $.jsx)(A, { children: An(f, "error") || J("settings:databaseBackups.jobIncomplete") }) : null,
				p ? p.outcome === "kept" || p.outcome === "completed" ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(p, "message") }) : /* @__PURE__ */ (0, $.jsx)(A, { children: K(p, "message") }) : null,
				a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null
			] }),
			t.backups.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "border-t border-separator-border",
				"data-ledger-backups": "",
				children: /* @__PURE__ */ (0, $.jsx)(I, { children: t.backups.map((e) => /* @__PURE__ */ (0, $.jsx)(B, {
					label: $a(e),
					description: eo(e),
					children: /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						disabled: !t.writer || c,
						onClick: () => d(e),
						children: J("settings:databaseBackups.restore")
					})
				}, e.id)) })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: /* @__PURE__ */ (0, $.jsx)("p", { children: h }),
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					disabled: c,
					onClick: u,
					...G(a.busy === "backup" || o),
					children: J("settings:databaseBackups.backUpNow")
				})
			})
		]
	});
}
// src/react/settings/docker-update.tsx
var ro = 3e3, io = 9e5;
async function ao(e, t, n) {
	let r = "";
	return await Un({
		read: n.read || ((e) => U("/api/client-updates", e)),
		apply: (t) => {
			let n = t.runtime?.version;
			n && n !== e && (r = n);
		},
		done: () => !!r,
		signal: t,
		everyMs: ro,
		limitMs: Math.max(1, n.limitMs),
		pause: n.pause
	}), t.aborted ? null : r ? {
		state: "done",
		version: r
	} : { state: "timeout" };
}
function oo(e) {
	let [t, n] = (0, Z.useState)({ state: "idle" }), r = Y(), i = (0, Z.useRef)(0);
	return (0, Z.useEffect)(() => {
		if (t.state !== "updating") return;
		let r = new AbortController();
		return ao(e, r.signal, { limitMs: io - (Date.now() - i.current) }).then((e) => {
			e && n(e);
		}), () => r.abort();
	}, [t.state, e]), {
		job: t,
		run: () => r.run("docker-update", (e) => W("/api/configuration/docker-update", {}, "POST", e), () => {
			i.current = Date.now(), n({ state: "updating" });
		}),
		busy: r.busy === "docker-update",
		error: r.error
	};
}
function so({ job: e }) {
	return e.state === "updating" ? /* @__PURE__ */ (0, $.jsx)(Ct, {
		embedded: !0,
		kind: "clock",
		label: J("settings:dockerUpdate.updating")
	}) : e.state === "done" ? /* @__PURE__ */ (0, $.jsx)(N, {
		role: "status",
		children: J("settings:dockerUpdate.done", { version: e.version })
	}) : e.state === "timeout" ? /* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:dockerUpdate.timeout") }), /* @__PURE__ */ (0, $.jsx)(ne, {
		label: J("settings:dockerUpdate.logsLabel"),
		steps: [{
			text: J("settings:dockerUpdate.watchtowerLog"),
			command: "docker compose logs watchtower"
		}, {
			text: J("settings:dockerUpdate.peachLog"),
			command: "docker compose logs peach"
		}]
	})] }) : null;
}
// src/react/settings/release-updates.tsx
var co = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), lo = [
	65,
	75,
	90
], uo = 7, fo = "https://github.com/peach-mitao/peach/releases", po = /((?:[\w.-]+\/[\w.-]+)?#\d+)/;
function mo(e) {
	let [t, n] = e.split("#");
	return `https://github.com/${t || "peach-mitao/peach"}/issues/${n}`;
}
function ho({ text: e }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: e.split("`").map((e, t) => t % 2 ? /* @__PURE__ */ (0, $.jsx)("code", { children: e }, t) : e.split(po).map((e, n) => n % 2 ? /* @__PURE__ */ (0, $.jsx)("a", {
		href: mo(e),
		target: "_blank",
		rel: "noopener noreferrer",
		className: "text-accent-600 hover:underline",
		children: e
	}, `${t}-${n}`) : e)) });
}
function go({ notes: e }) {
	let t = wn === "zh-CN" ? "zh-CN" : "en";
	return /* @__PURE__ */ (0, $.jsx)(le, {
		summary: J("settings:releaseUpdates.changelogTitle", { versions: jn(e.map((e) => e.version)) }),
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-col gap-5 pt-3",
			children: e.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-body-2-medium text-text-primary",
						children: e.version
					}), /* @__PURE__ */ (0, $.jsx)(ge, {
						href: e.url,
						children: J("settings:releaseUpdates.releasePage")
					})]
				}), /* @__PURE__ */ (0, $.jsx)("ul", {
					className: "flex list-disc flex-col gap-1 ps-5 text-body-2-regular text-text-primary",
					children: e[t].map((e, t) => /* @__PURE__ */ (0, $.jsxs)("li", { children: [e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-medium",
						children: J("settings:releaseUpdates.highlightTitle", { title: e.title })
					}) : null, /* @__PURE__ */ (0, $.jsx)(ho, { text: e.text })] }, t))
				})]
			}, e.version))
		})
	});
}
function _o({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), { snapshot: o, failures: s } = Tr(), c = (0, Z.useRef)(o), l = Y(), { checked: u, checkFailed: d } = Wr(), p = (0, Z.useRef)(!1), g = (0, Z.useRef)(!0), _ = co.has(i.state), v = oo(e.current_version), y = n.state === "available" && !!n.one_click?.available, b = v.job.state === "updating", x = n.installation_code === "standalone", S = () => void Ut({
		title: J("settings:releaseUpdates.oneClickUpdate"),
		body: J("settings:releaseUpdates.dockerUpdateBody", { version: n.latest_version || "" }),
		confirmLabel: J("settings:releaseUpdates.startUpdate"),
		cancelLabel: J("settings:shared.cancel"),
		onConfirm: v.run
	});
	(0, Z.useEffect)(() => (g.current = !0, () => {
		g.current = !1;
	}), []);
	let C = async () => {
		let e = await W("/api/configuration/update-restart", {});
		g.current && a(e), Rt();
	}, w = () => void Ut({
		title: J("settings:releaseUpdates.updateReady"),
		body: J("settings:releaseUpdates.installAfterRestart", { version: i.version || "" }),
		confirmLabel: J("settings:releaseUpdates.restartNow"),
		cancelLabel: J("settings:shared.later"),
		onConfirm: C
	});
	(0, Z.useEffect)(() => {
		i.state !== "ready" || p.current || (p.current = !0, w());
	}, [i.state]), (0, Z.useEffect)(() => {
		if (!o || o === c.current) return;
		let e = o.update_job;
		a(e), o.release.checked_at && r(o.release), e.state === "complete" && r((t) => ({
			...t,
			current_version: e.version || t.current_version,
			state: "current",
			message: J("settings:releaseUpdates.latestTestBuild")
		}));
	}, [o]);
	let T = () => {
		_ || (p.current = !1, l.run("download", (e) => W("/api/configuration/update", {}, "POST", e), (e) => {
			a(e), Rt();
		}));
	}, E = () => void l.run("check", (e) => U("/api/configuration/updates", e), (e) => {
		r(e);
		let t = dr(e);
		e.state === "error" ? d(J("settings:releaseUpdates.check"), t) : u(t || J("settings:releaseUpdates.checkDone"));
	}, (t) => {
		let n = q(t);
		r({
			...e,
			state: "error"
		}), l.setError(n), d(J("settings:releaseUpdates.check"), n);
	}), ee = s >= uo ? J("settings:releaseUpdates.connectionLost") : "", D = l.error || ee || v.error, te = dr(n), O = n.installation_code === "standalone" && (n.state === "available" || i.state !== "idle") ? n.package_kind : void 0, k = O === "update" ? J("settings:releaseUpdates.updatePackageHelp") : O === "full" ? J("settings:releaseUpdates.includesMediaTools") : O === "installer" ? J("settings:releaseUpdates.installerHelp") : "", re = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "releaseUpdates",
		guide: "updates",
		title: J("settings:releaseUpdates.check"),
		aside: /* @__PURE__ */ (0, $.jsx)(H, {
			tone: D || n.state === "error" || i.state === "error" || v.job.state === "timeout" ? "error" : _ || b ? "progress" : v.job.state === "done" ? "success" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: D || n.state === "error" || i.state === "error" ? J("settings:releaseUpdates.checkIncomplete") : v.job.state === "timeout" ? J("settings:releaseUpdates.updateIncomplete") : _ ? J("settings:releaseUpdates.preparing") : b ? J("settings:releaseUpdates.updating") : v.job.state === "done" ? J("settings:releaseUpdates.updated") : i.state === "ready" ? J("settings:releaseUpdates.readyToInstall") : n.state === "available" ? J("settings:releaseUpdates.updateAvailable") : n.state === "unchecked" ? J("settings:releaseUpdates.notChecked") : J("settings:releaseUpdates.checkDone")
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(be, { children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.currentVersion"),
					children: v.job.state === "done" ? v.job.version : n.current_version
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.installation"),
					children: lr(`release.installation.${n.installation_code}`, n.installation)
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.channel"),
					children: lr(`release.channel.${n.channel_code}`, n.channel)
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:releaseUpdates.latestVersion"),
					children: n.latest_version || J("settings:shared.notFound")
				}),
				O ? /* @__PURE__ */ (0, $.jsxs)(j, {
					term: J("settings:releaseUpdates.package"),
					children: [J(O === "update" ? "settings:releaseUpdates.appUpdatePackage" : O === "installer" ? "settings:releaseUpdates.macosDiskImage" : "settings:releaseUpdates.appAndTools"), n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			k ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: k }) }) : null,
			n.state === "unchecked" && !n.checked_at && !D && i.state === "idle" ? null : /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:releaseUpdates.checkedAt", { time: (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString(wn) }) }) : null,
					v.job.state === "done" ? null : n.state === "available" && !D ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(F, {
						tone: "info",
						title: J("settings:releaseUpdates.updateAvailable"),
						children: te
					}), n.notes?.length ? /* @__PURE__ */ (0, $.jsx)(go, { notes: n.notes }) : null] }) : D || n.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: D || te }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, $.jsx)(N, {
						role: "status",
						children: te
					}),
					n.state === "available" && !D && !y && v.job.state === "idle" && n.steps?.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ne, {
						label: J("settings:releaseUpdates.updateOnHost"),
						steps: n.steps.map((e) => ({
							...e,
							text: lr(`release.dockerStep.${e.id}`, e.text)
						}))
					}), /* @__PURE__ */ (0, $.jsx)(N, { children: (n.one_click?.reason ? K(n.one_click, "reason") : "") || J("settings:releaseUpdates.watchtowerHint") })] }) : null,
					/* @__PURE__ */ (0, $.jsx)(so, { job: v.job }),
					i.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: An(i) }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, $.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(qe, {
								label: J("settings:releaseUpdates.progressLabel"),
								value: i.progress,
								stops: lo
							}),
							/* @__PURE__ */ (0, $.jsxs)(N, { children: [
								J("settings:releaseUpdates.progressSteps"),
								" ",
								An(i)
							] }),
							/* @__PURE__ */ (0, $.jsx)(N, { children: /* @__PURE__ */ (0, $.jsx)(f, { value: re }) })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(ge, {
							href: "https://peach.video/#download",
							children: J("settings:shared.officialSite")
						}),
						/* @__PURE__ */ (0, $.jsx)(ge, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, $.jsx)(ge, {
							href: n.release_url || fo,
							children: J("settings:releaseUpdates.releasePage")
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)(m, {
						variant: "ghost",
						onClick: () => document.dispatchEvent(new Event(Ye)),
						children: J("settings:releaseUpdates.whatsNew")
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						variant: i.state === "ready" || y || n.state === "available" && x ? "secondary" : "primary",
						disabled: _ || b,
						onClick: E,
						...G(l.busy === "check"),
						children: J("settings:releaseUpdates.check")
					}),
					v.job.state === "done" ? /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "primary",
						onClick: () => window.location.reload(),
						children: J("settings:releaseUpdates.refreshPage")
					}) : y ? /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "primary",
						onClick: S,
						...G(b || v.busy),
						children: J("settings:releaseUpdates.oneClickUpdate")
					}) : null,
					n.state === "available" && n.in_app_update && i.state !== "ready" ? /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "primary",
						onClick: T,
						...G(_ || l.busy === "download"),
						children: J("settings:releaseUpdates.downloadAndInstall")
					}) : n.state === "available" && x && n.asset_url ? /* @__PURE__ */ (0, $.jsx)(h, {
						variant: "primary",
						href: n.asset_url,
						children: J("settings:releaseUpdates.downloadNewVersion")
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "primary",
						onClick: w,
						children: J("settings:releaseUpdates.restartToInstall")
					}) : null
				]
			})
		]
	});
}
// src/react/settings/retention-settings.tsx
var vo = "/api/configuration/retention", yo = ["retention-settings"], bo = [
	2,
	5,
	10,
	20
], xo = [
	30,
	90,
	183,
	365
], So = (e) => e === 183 ? J("settings:retention.halfYear") : e === 365 ? J("settings:retention.oneYear") : J("settings:retention.days", { count: e });
function Co({ receipt: e }) {
	let t = X({
		queryKey: yo,
		queryFn: ({ signal: e }) => U(vo, e)
	}), n = Y(), r = !t.data || !!n.busy, i = (t) => void n.run("save", (e) => W(vo, t, "POST", e), (t) => {
		qn.setQueryData(yo, t), e(J("settings:shared.settingsSaved"));
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:retention.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:retention.backups"),
				description: J("settings:retention.backupsHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "backupKeepSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:retention.backups"),
						selectedKey: String(t.data?.backup_keep ?? 5),
						isDisabled: r,
						onSelectionChange: (e) => {
							e !== null && i({ backup_keep: Number(e) });
						},
						children: bo.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: String(e),
							children: J("settings:retention.copies", { count: e })
						}, e))
					})
				})
			}), /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:retention.logs"),
				description: J("settings:retention.logsHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "logDaysSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:retention.logs"),
						selectedKey: String(t.data?.log_days ?? 183),
						isDisabled: r,
						onSelectionChange: (e) => {
							e !== null && i({ log_days: Number(e) });
						},
						children: xo.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: String(e),
							children: So(e)
						}, e))
					})
				})
			})] }),
			t.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(Je, {
					titleKey: "settings:retention.loadFailed",
					query: t
				})
			}) : null,
			n.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: n.error })
			}) : null
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
function wo({ value: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ul", {
		className: "list-disc space-y-2 pl-5",
		children: ur(e.fields, e.field_codes).map((e) => /* @__PURE__ */ (0, $.jsx)("li", { children: /* @__PURE__ */ (0, $.jsx)(N, { children: e }) }, e))
	}), /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "notice") })] });
}
function To({ value: e }) {
	let t = e.participation, n = {
		"not-attempted": J("settings:librarySharing.notSent"),
		queued: J("settings:librarySharing.waiting"),
		accepted: J("settings:librarySharing.sent"),
		failed: J("settings:librarySharing.sendFailed"),
		unknown: J("settings:librarySharing.resultUnknown"),
		blocked: J("settings:librarySharing.blocked")
	}, r = {
		queued: "progress",
		accepted: "success",
		failed: "error",
		unknown: "warning",
		blocked: "warning"
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		e.consent_state === "needs-consent" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					tone: "warning",
					children: J("settings:librarySharing.needsConsent")
				})
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.fieldsChanged") })]
		}) : null,
		t ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)(be, { children: /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:librarySharing.participation"),
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:librarySharing.participation"),
					tone: t.pending_state ? "progress" : r[t.status] || "neutral",
					children: t.pending_state ? t.pending_state === "disabled" ? J("settings:librarySharing.pendingOff") : J("settings:librarySharing.pendingOn") : n[t.status] || J("settings:librarySharing.resultUnknown")
				})
			}) }), e.last_sent_at ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.lastSentAt", { date: new Date(e.last_sent_at).toLocaleDateString(wn) }) }) : null]
		}) : null,
		e.enabled && e.last_attempt?.snapshot_id ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, $.jsxs)(be, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:librarySharing.snapshot"),
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						tone: r[e.last_attempt.status || ""] || "neutral",
						children: n[e.last_attempt.status || ""] || J("settings:librarySharing.waitingData")
					})
				}), /* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:librarySharing.snapshotId"),
					children: e.last_attempt.snapshot_id
				})] }),
				e.last_attempt.raw_bytes !== void 0 && e.last_attempt.compressed_bytes !== void 0 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.snapshotSizes", {
					raw: (e.last_attempt.raw_bytes / 1024).toFixed(1),
					compressed: (e.last_attempt.compressed_bytes / 1024).toFixed(1)
				}) }) : null,
				e.last_attempt.status === "accepted" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.acceptedHelp") }) : null
			]
		}) : null,
		e.enabled && e.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					tone: e.last_attempt.attempted ? "error" : "warning",
					children: e.last_attempt.attempted ? J("settings:librarySharing.uploadFailed") : J("settings:librarySharing.retryPending")
				})
			}), /* @__PURE__ */ (0, $.jsx)(A, { children: e.last_attempt.attempted ? J("settings:librarySharing.failedThisWeek") : J("settings:librarySharing.incomplete") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(H, { children: J("settings:librarySharing.waitingData") })
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.waitingDataHelp") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					tone: "warning",
					children: J("settings:librarySharing.resultUnknown")
				})
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.resultUnknownHelp") })]
		}) : null
	] });
}
function Eo({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.snapshotSizes", {
			raw: (e.bytes / 1024).toFixed(1),
			compressed: (e.compressed_bytes / 1024).toFixed(1)
		}) }),
		/* @__PURE__ */ (0, $.jsx)(Kr, {
			code: t,
			language: "json",
			label: J("settings:librarySharing.previewLabel"),
			maxCharacters: 24e3
		}),
		t.length > 24e3 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.truncated") }) : null
	] });
}
// src/react/settings/seed-sharing-details.tsx
function Do() {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)("ul", {
			className: "list-disc space-y-2 pl-5",
			children: [
				"works",
				"entities",
				"decisions",
				"images",
				"sources"
			].map((e) => /* @__PURE__ */ (0, $.jsx)("li", { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J(`settings:seedSharing.${e}`) }) }, e))
		}),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.excluded") }),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.independent") }),
		/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.notice") })
	] });
}
function Oo({ value: e }) {
	let t = e.last_attempt.status;
	return /* @__PURE__ */ (0, $.jsxs)(V, {
		divided: !0,
		children: [
			/* @__PURE__ */ (0, $.jsx)(H, {
				className: "self-start",
				tone: t === "failed" ? "error" : t === "accepted" ? "success" : "neutral",
				children: J(t ? `settings:seedSharing.status.${t}` : "settings:librarySharing.notSent")
			}),
			t === "accepted" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.acceptedHelp") }) : null,
			e.name_candidates && Object.values(e.name_candidates).some(Boolean) ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.names", { ...e.name_candidates }) }) : null
		]
	});
}
function ko({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Kr, {
		code: t,
		language: "json",
		label: J("settings:seedSharing.previewData"),
		maxCharacters: 24e3
	}), t.length > 24e3 ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.truncated") }) : null] });
}
// src/react/settings/sharing-choice.tsx
function Ao({ label: e, description: t, selected: n, available: r, disabled: i, busy: a = !1, onChange: o }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
		label: e,
		description: t,
		children: /* @__PURE__ */ (0, $.jsx)(yt, {
			"aria-label": e,
			isSelected: n,
			isDisabled: i,
			onChange: o,
			...G(a)
		})
	}) }), r === !1 ? /* @__PURE__ */ (0, $.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, $.jsx)(H, {
			className: "self-start",
			children: J("settings:librarySharing.unavailable")
		})
	}) : null] });
}
// src/react/settings/community-sharing-settings.tsx
var jo = "/api/configuration/community-sharing", Mo = ["community-sharing"];
async function No(e) {
	let t = await U(jo, e);
	if (!t?.library || !t.metadata) throw Error(J("settings:communitySharing.readFailed"));
	return t;
}
function Po(e) {
	let t = JSON.stringify({
		library: e.library.data,
		public_metadata: e.metadata.data
	}, null, 2), n = URL.createObjectURL(new Blob([t], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = "peach-community-sharing-preview.json", r.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3);
}
function Fo({ title: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-semibold text-text-primary",
			children: e
		}), t]
	});
}
function Io({ active: e, receipt: t }) {
	let n = Fr(), r = X({
		queryKey: Mo,
		enabled: e,
		queryFn: ({ signal: e }) => No(e)
	}), [i, a] = (0, Z.useState)(null), o = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		i && o.current?.focus();
	}, [i]);
	let s = Y(), c = r.data, l = c?.library.enabled === !0, u = c?.metadata.enabled === !0, d = l && u, f = c ? c.library.available && c.metadata.available : void 0, p = l !== u, h = c?.library.participation, g = !!(c && (c.library.consent_state === "needs-consent" || c.library.last_sent_at || c.library.last_attempt?.status || h?.pending_state || h?.status && h.status !== "not-attempted" || c.metadata.last_attempt.status || Object.values(c.metadata.name_candidates ?? {}).some(Boolean))), _ = (e) => n.setQueryData(Mo, e), v = () => void s.run("refresh", No, _), y = () => void s.run("preview", async (e) => {
		let [t, n] = await Promise.all([U("/api/configuration/library-sharing/preview", e), U("/api/configuration/seed-sharing/preview", e)]);
		return {
			library: t,
			metadata: n
		};
	}, a), b = (e) => void s.run("save", (t) => W(jo, {
		enabled: e,
		...e && i ? {
			consent: !0,
			library: {
				token: i.library.token,
				schema: i.library.schema
			},
			metadata: {
				token: i.metadata.token,
				schema: i.metadata.schema
			}
		} : {}
	}, "POST", t), (e) => {
		_(e), a(null), e.failed?.length || t(J("settings:communitySharing.saved"));
	}, (e) => {
		s.setError(q(e)), r.refetch();
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(Ao, {
			label: J("settings:communitySharing.enable"),
			description: J("settings:communitySharing.description"),
			selected: l || u,
			available: f,
			disabled: !c,
			busy: !!s.busy,
			onChange: (e) => e ? y() : b(!1)
		}),
		p ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(H, {
				className: "self-start",
				tone: "warning",
				children: J(l ? "settings:communitySharing.onlyStudy" : "settings:communitySharing.onlyMetadata")
			})
		}) : null,
		c && i ? /* @__PURE__ */ (0, $.jsx)("section", {
			"aria-labelledby": "community-sharing-preview",
			children: /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					/* @__PURE__ */ (0, $.jsx)("h4", {
						id: "community-sharing-preview",
						ref: o,
						tabIndex: -1,
						className: "text-body-semibold text-text-primary",
						children: J("settings:communitySharing.previewTitle")
					}),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.previewSummary", {
						count: i.library.data.library.length,
						uncoded: i.library.data.coverage.uncoded_items,
						size: (i.library.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:seedSharing.summary", {
						count: i.metadata.data.claims.length,
						omitted: i.metadata.data.omitted,
						size: (i.metadata.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, $.jsx)(le, {
						summary: J("settings:communitySharing.previewDetails"),
						children: /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 flex-col gap-6",
							children: [/* @__PURE__ */ (0, $.jsxs)(Fo, {
								title: J("settings:communitySharing.study"),
								children: [/* @__PURE__ */ (0, $.jsx)(wo, { value: c.library }), /* @__PURE__ */ (0, $.jsx)(Eo, { preview: i.library })]
							}), /* @__PURE__ */ (0, $.jsxs)(Fo, {
								title: J("settings:seedSharing.title"),
								children: [/* @__PURE__ */ (0, $.jsx)(Do, {}), /* @__PURE__ */ (0, $.jsx)(ko, { preview: i.metadata })]
							})]
						})
					})
				]
			})
		}) : null,
		c?.failed?.length || r.isError || s.error ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: s.error || (c?.failed?.length ? J("settings:communitySharing.saveFailed") : J("settings:communitySharing.readFailed")) })
		}) : null,
		c && !i && g ? /* @__PURE__ */ (0, $.jsx)("div", {
			id: "seedSharing",
			children: /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsxs)(le, {
					summary: J("settings:communitySharing.deliveryStatus"),
					children: [/* @__PURE__ */ (0, $.jsx)(Fo, {
						title: J("settings:communitySharing.study"),
						children: /* @__PURE__ */ (0, $.jsx)(To, { value: c.library })
					}), /* @__PURE__ */ (0, $.jsx)(Fo, {
						title: J("settings:seedSharing.title"),
						children: /* @__PURE__ */ (0, $.jsx)(Oo, { value: c.metadata })
					})]
				})
			})
		}) : null,
		/* @__PURE__ */ (0, $.jsx)(M, {
			status: c && !i && !g ? /* @__PURE__ */ (0, $.jsx)("span", {
				id: "seedSharing",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": J("settings:communitySharing.deliveryStatus"),
					children: J("settings:librarySharing.notSent")
				})
			}) : void 0,
			children: i ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					onClick: () => a(null),
					children: J("settings:shared.cancel")
				}),
				/* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					onClick: () => Po(i),
					children: J("settings:librarySharing.downloadPreview")
				}),
				d ? null : /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "primary",
					disabled: !f,
					onClick: () => b(!0),
					...G(s.busy === "save"),
					children: J("settings:communitySharing.agree")
				})
			] }) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g || l || u || r.isError ? /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				onClick: v,
				...G(s.busy === "refresh"),
				children: J("settings:communitySharing.refresh")
			}) : null, /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				disabled: !c,
				onClick: y,
				...G(s.busy === "preview"),
				children: J(p ? "settings:communitySharing.complete" : "settings:communitySharing.preview")
			})] })
		})
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function Lo({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, $.jsx)(Ao, {
		label: J("settings:dataSharing.reportErrors"),
		description: J("settings:dataSharing.reportErrorsHelp"),
		selected: e.usage && e.errors,
		available: e.available,
		busy: n,
		onChange: (n) => t({
			...e,
			usage: n,
			errors: n
		})
	});
}
function Ro({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y(), a = Object.values(n.delivery ?? {}).flatMap((e) => e.last_sent_at ? [Date.parse(e.last_sent_at)] : []).filter(Number.isFinite), o = a.length ? Math.max(...a) : null;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(Lo, {
			value: n,
			busy: i.busy === "save",
			onChange: (e) => {
				i.run("save", (t) => W("/api/configuration/remote-reporting", {
					usage: e.usage,
					errors: e.errors
				}, "POST", t), (e) => {
					r(e), t(J("settings:diagnosticsReporting.saved"));
				});
			}
		}),
		/* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsxs)(le, {
				summary: J("settings:diagnosticsReporting.fieldsAndRules"),
				children: [
					/* @__PURE__ */ (0, $.jsx)(N, { children: lr(n.field_codes?.usage ?? "", n.fields.usage) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: lr(n.field_codes?.errors ?? "", n.fields.errors) }),
					/* @__PURE__ */ (0, $.jsx)(N, { children: K(n, "notice") })
				]
			}), o === null ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:librarySharing.lastSentAt", { date: new Date(o).toLocaleDateString(wn) }) })]
		}),
		i.error ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: i.error })
		}) : null
	] });
}
// src/react/evilcharts/registry/charts/recharts-pie-chart.tsx
var zo = 5, Bo = 2e3, Vo = 0, Ho = "80%", Uo = 0, Wo = 0, Go = 0, Ko = 360, qo = [], Jo = (0, Z.createContext)(null);
function Yo() {
	let e = (0, Z.use)(Jo);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function Xo({ config: e, data: t, dataKey: n, nameKey: r, children: i, className: a, chartProps: o, defaultSelectedSector: s = null, onSelectionChange: c, isLoading: l = !1 }) {
	let [u, d] = (0, Z.useState)(s), f = (0, Z.useCallback)((e) => {
		if (d(e), e === null) {
			c?.(null);
			return;
		}
		let i = t.find((t) => t[r] === e);
		i && c?.({
			dataKey: e,
			value: i[n]
		});
	}, [
		t,
		n,
		r,
		c
	]), p = (0, Z.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: r,
		isLoading: l,
		selectedSector: u,
		selectSector: f
	}), [
		e,
		t,
		n,
		r,
		l,
		u,
		f
	]);
	return /* @__PURE__ */ (0, $.jsx)(Jo, {
		value: p,
		children: /* @__PURE__ */ (0, $.jsxs)(w, {
			className: a,
			config: e,
			children: [/* @__PURE__ */ (0, $.jsx)(je, { isLoading: l }), /* @__PURE__ */ (0, $.jsx)(ga, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...o,
				children: i
			})]
		})
	});
}
var Zo = () => null, Qo = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== Zo) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, $.jsx)(De, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, $o = ({ id: e, config: t }) => /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = fn(n);
	return /* @__PURE__ */ (0, $.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, $.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), es = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, $.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, $.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, $.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, $.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), ts = Array.from({ length: zo }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / zo
})), ns = (e) => {
	let { index: t = 0, ...n } = e, r = t / zo * (Bo / 1e3);
	return /* @__PURE__ */ (0, $.jsx)(Rn.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: Bo / 1e3,
			delay: r,
			repeat: 1e400,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, $.jsx)(st, {
			...n,
			fill: "currentColor"
		})
	});
};
Xo.Pie = function({ variant: e = "gradient", innerRadius: t = Vo, outerRadius: n = Ho, cornerRadius: r = Uo, paddingAngle: i = Wo, startAngle: a = Go, endAngle: o = Ko, isClickable: s = !1, glowingSectors: c = qo, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Yo(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, $.jsx)(ca, {
		data: ts,
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
		shape: (e) => /* @__PURE__ */ (0, $.jsx)(ns, { ...e })
	});
	let y = Qo(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ca, {
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, $.jsx)(st, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
	}), /* @__PURE__ */ (0, $.jsxs)("defs", { children: [/* @__PURE__ */ (0, $.jsx)($o, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, $.jsx)(es, {
		id: v,
		glowingSectors: c
	})] })] });
}, Xo.Label = Zo, Xo.Tooltip = function({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Yo();
	return r ? null : /* @__PURE__ */ (0, $.jsx)(D, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, $.jsx)(te, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}, Xo.Legend = function({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, selectedSector: a, selectSector: o } = Yo();
	return /* @__PURE__ */ (0, $.jsx)(T, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, $.jsx)(E, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}, Xo.Background = function({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, $.jsx)(C, { variant: e });
};
// src/react/settings/storage-charts.tsx
var rs = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	follow_snapshots: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	project_archives: "var(--color-chart-9)"
}, is = "var(--color-text-tertiary)", as = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	follow_snapshots: "bg-chart-7",
	records: "bg-chart-8",
	project_archives: "bg-chart-9"
}, os = (e) => sn(e);
function ss(e) {
	let t = e.filter((e) => rs[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: rs[e.key]
	})), n = e.filter((e) => !rs[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: J("settings:storageCharts.rest"),
		bytes: n,
		color: is
	}] : t;
}
function cs({ storage: e }) {
	let t = e.usage, n = ss(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
		label: e.label,
		colors: br(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": J("settings:storageCharts.categoryShare", { size: os(t.total_bytes) }),
			children: [/* @__PURE__ */ (0, $.jsxs)(Xo, {
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, $.jsx)(Xo.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, $.jsx)(ee, {
					nameKey: "slice",
					hideLabel: !0,
					format: os
				})]
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, $.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: os(t.total_bytes)
				}), /* @__PURE__ */ (0, $.jsx)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: J("settings:storageCharts.fileCount", { count: t.total_files })
				})]
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": J("settings:storageCharts.legend"),
				children: n.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, $.jsx)("i", {
							"aria-hidden": !0,
							className: `${xt} ${as[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, $.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: os(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, $.jsx)(ls, { storage: e })]
		})]
	});
}
function ls({ storage: e }) {
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: J("settings:storageCharts.peachData"),
			colors: br("var(--color-border-focus-ring)")
		},
		others: {
			label: J("settings:storageCharts.otherFiles"),
			colors: br(is)
		},
		free: {
			label: J("settings:storageCharts.free"),
			colors: br("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: J("settings:storageCharts.diskSummary", {
				total: os(e.total_bytes),
				systemDrive: e.system_drive ? J("settings:storageCharts.systemDrive") : "",
				share: ((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? J("settings:storageCharts.underTenthPercent") : `${n.toFixed(+(n < 10))}%`;
				})(t),
				free: os(n)
			})
		}), /* @__PURE__ */ (0, $.jsxs)(he, {
			data: [{
				disk: J("settings:libraryIcons.hardDrive"),
				peach: t,
				others: r,
				free: n
			}],
			config: i,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, $.jsx)(he.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, $.jsx)(he.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, $.jsx)(he.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, $.jsx)(he.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, $.jsx)(he.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, $.jsx)(ee, {
					hideLabel: !0,
					format: os
				})
			]
		})]
	});
}
// src/react/components/configuration-fields.tsx
function us({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: s, children: c }) {
	let l = `${e}-label`;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Ee, {
				id: l,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, $.jsx)(ct, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: nt,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: s,
				children: i.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
					value: e.value,
					className: tt,
					children: e.label
				}, e.value))
			}),
			c
		]
	});
}
function ds({ prefix: e, suffix: t, unit: n, fieldClassName: r, ...i }) {
	let a = () => /* @__PURE__ */ (0, $.jsx)("span", {
		"aria-hidden": n ? !0 : void 0,
		className: qt("shrink-0 text-body-regular text-text-secondary", n ? "w-10" : "pr-1"),
		children: n ? /* @__PURE__ */ (0, $.jsx)("span", {
			className: "absolute inset-y-0 right-0 flex items-center border-l border-border-button-default px-2",
			children: n
		}) : t
	});
	return /* @__PURE__ */ (0, $.jsx)(P, {
		...i,
		fieldClassName: r,
		leadingAddon: e ? /* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: n || t ? a : void 0
	});
}
// src/react/settings/storage-budget-settings.tsx
var fs = [
	[
		"minimum_free_gib",
		J("settings:storageLimits.reservedSpace"),
		J("settings:storageLimits.reservedSpaceHelp")
	],
	[
		"data_max_gib",
		J("settings:storageLimits.dataLimit"),
		J("settings:storageLimits.dataLimitHelp")
	],
	[
		"cache_max_gib",
		J("settings:storageLimits.cacheLimit"),
		J("settings:storageLimits.cacheLimitHelp")
	]
], ps = (e) => ur(e.reasons, e.reason_codes?.map((e) => e?.code ?? null), e.reason_codes?.map((e) => e?.params ?? null));
function ms({ initial: e, after: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e.policy), a = Y(K(e, "error")), [o, s] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		if (!r?.enabled || e.policy?.external_cache_path) return;
		let t = new AbortController();
		return s(J("settings:storageLimits.readingCloudDrive")), U("/api/configuration/storage/external-cache", t.signal).then((e) => {
			if (t.signal.aborted) return;
			let n = e.path;
			n ? (i((e) => e && !e.external_cache_path ? {
				...e,
				external_cache_path: n
			} : e), s(J("settings:storageLimits.cacheDetected"))) : s(J("settings:storageLimits.cloudDriveMissing"));
		}).catch((e) => {
			t.signal.aborted || s(J("settings:storageLimits.cacheReadFailed", { error: q(e) }));
		}), () => t.abort();
	}, [r?.enabled, e.policy?.external_cache_path]);
	let c = (e, t) => i((n) => n && {
		...n,
		[e]: t
	}), l = e.last_check;
	return r ? /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "storageBudgetSettings",
		title: J("settings:storageLimits.title"),
		onSubmit: (e) => {
			e.preventDefault(), a.run("save", (e) => W("/api/configuration/storage/policy", r, "POST", e), (e) => {
				s(""), t(e), n(J("settings:storageLimits.saved"));
			});
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.enable"),
				description: J("settings:storageLimits.enableHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(yt, {
					"aria-label": J("settings:storageLimits.enable"),
					isSelected: r.enabled,
					isDisabled: !!a.busy,
					onChange: (e) => c("enabled", e)
				})
			}), r.enabled ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [fs.map(([e, t, n]) => /* @__PURE__ */ (0, $.jsx)(B, {
				label: t,
				description: n,
				children: /* @__PURE__ */ (0, $.jsx)(ds, {
					"aria-label": J("settings:storageLimits.limitGib", { label: t }),
					unit: "GiB",
					inputMode: "numeric",
					pattern: "[0-9]*",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: J(e === "minimum_free_gib" ? "settings:shared.auto" : "settings:shared.noLimit"),
					value: r[e] ? String(r[e]) : "",
					onChange: (t) => c(e, Number(t)),
					isDisabled: !!a.busy
				})
			}, e)), /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.autoClean"),
				description: J("settings:storageLimits.autoCleanHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(yt, {
					"aria-label": J("settings:storageLimits.autoClean"),
					isSelected: r.auto_clean,
					isDisabled: !!a.busy,
					onChange: (e) => c("auto_clean", e)
				})
			})] }) : null] }),
			r.enabled ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(P, {
					label: J("settings:storageLimits.externalCache"),
					hint: o || J("settings:storageLimits.externalCacheHelp"),
					value: r.external_cache_path,
					size: "small",
					className: "w-full",
					placeholder: J("settings:shared.notSet"),
					onChange: (e) => c("external_cache_path", e),
					isDisabled: !!a.busy
				})
			}) : null,
			r.enabled && r.external_cache_path ? /* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:storageLimits.externalCacheLimit"),
				description: J("settings:storageLimits.externalCacheLimitHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(ds, {
					"aria-label": J("settings:storageLimits.externalCacheLimitGib"),
					unit: "GiB",
					size: "small",
					className: "w-32 shrink-0",
					placeholder: J("settings:shared.noLimit"),
					inputMode: "numeric",
					pattern: "[0-9]*",
					value: r.external_cache_max_gib ? String(r.external_cache_max_gib) : "",
					onChange: (e) => c("external_cache_max_gib", Number(e)),
					isDisabled: !!a.busy
				})
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					r.enabled ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:storageLimits.limitsHelp") }) : null,
					r.enabled && l?.paused ? /* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:storageLimits.pausedWithReasons", { reasons: ps(l).join(J("shell:format.semicolonSeparator")) }) }) : null,
					a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				...G(a.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	}) : /* @__PURE__ */ (0, $.jsx)(L, {
		title: J("settings:storageLimits.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: a.error || J("settings:storageLimits.loadFailed") }) })
	});
}
// src/react/settings/storage-settings.tsx
var hs = "/api/configuration/storage", gs = 1500, _s = 36e5, vs = 864e5, ys = (e) => e instanceof p && Ft(e.body)?.target || q(e);
function bs(e) {
	if (e.free_bytes === null || e.total_bytes === null) return J("settings:shared.notFound");
	let t = J("settings:storageSpace.diskFreeOfTotal", {
		free: sn(e.free_bytes),
		total: sn(e.total_bytes)
	});
	return e.system_drive ? J("settings:storageSpace.systemDriveSuffix", { summary: t }) : t;
}
var xs = (e) => e.cleanable && e.reclaimable > 0, Ss = (e) => ({
	...e,
	label: lr(`storage.category.${e.key}.label`, e.label),
	description: lr(`storage.category.${e.key}.description`, e.description),
	note: lr(`storage.category.${e.key}.note`, e.note)
}), Cs = (e) => [K(e, "message"), ...(e.notes ?? []).map((t, n) => lr(e.note_codes?.[n]?.code ?? "", t, e.note_codes?.[n]?.params))], ws = (e) => ({
	text: K(e, "text"),
	command: K(e, "command")
});
function Ts({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = {
		files: /* @__PURE__ */ (0, $.jsx)(f, { value: t }),
		size: /* @__PURE__ */ (0, $.jsx)(f, {
			value: e.bytes || 0,
			format: sn
		})
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(qe, {
			label: J("settings:storageSpace.measureProgress"),
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, $.jsx)(N, { children: xr("settings:storageSpace.measuringOfLast", {
			count: t,
			expected: n
		}, r) })] }) : /* @__PURE__ */ (0, $.jsx)(u, {
			kind: "radar",
			label: J("settings:storageSpace.measuringLabel")
		}), n ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: xr("settings:storageSpace.measuring", { count: t }, r) })]
	});
}
var Es = /* @__PURE__ */ new Set([
	"follow_snapshots",
	"source_snapshots",
	"project_archives"
]);
function Ds({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = xs(e), a = e.key === "follow_snapshots", o = a || e.key === "project_archives", s = e.cleanable ? e.reclaimable > 0 ? J("settings:storageSpace.afterCleanup", { effect: e.note }) : J("settings:storageSpace.nothingToClean") : o ? e.note : J("settings:storageSpace.cannotClean", { reason: e.note });
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			e.cleanable ? /* @__PURE__ */ (0, $.jsx)(O, {
				"aria-label": J("settings:storageSpace.cleanCategory", { category: e.label }),
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: "w-4 shrink-0"
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, $.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${as[e.key] || "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `storage.category.${e.key}.label`,
							children: e.label
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.description`,
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.${e.cleanable && !i ? "empty" : "note"}`,
						className: "text-caption-1-regular text-text-tertiary",
						children: s
					}),
					a ? /* @__PURE__ */ (0, $.jsx)(Ae, {
						href: `${Xe}#repair-item-follow-evidence`,
						size: "xs",
						trailingIcon: Sn,
						className: "mt-1 self-start whitespace-normal",
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": "storageSpace.reviewFollowSnapshots",
							children: J("settings:storageSpace.reviewFollowSnapshots")
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, $.jsx)(f, {
					value: e.bytes,
					format: sn,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: [
						J("settings:storageSpace.canFree"),
						" ",
						sn(e.reclaimable)
					]
				}) : null]
			})
		]
	});
}
function Os({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = Y(), u = r.job.state !== "idle", d = (0, Z.useRef)(u), f = (0, Z.useRef)(!1);
	(0, Z.useEffect)(() => {
		n && !f.current && (f.current = !0, e.usage || e.job.state !== "idle" || document.body.classList.contains("peach-guiding") || l.run("measure", (e) => W(`${hs}/measure`, {}, "POST", e), i));
	}, [
		n,
		e,
		l.run
	]), (0, Z.useEffect)(() => {
		if (!u) return;
		let e = new AbortController();
		return Un({
			signal: e.signal,
			everyMs: gs,
			limitMs: _s,
			read: (e) => U(hs, e),
			apply: i,
			done: (e) => e.job.state === "idle"
		}), () => e.abort();
	}, [u]), (0, Z.useEffect)(() => {
		u ? d.current = !0 : d.current && (d.current = !1, c(/* @__PURE__ */ new Set()), r.job.error || t(K(r.job, "message") || J("settings:storageSpace.measured")));
	}, [u]);
	let p = () => void l.run("measure", (e) => W(`${hs}/measure`, {}, "POST", e), i), h = r.usage && {
		...r.usage,
		categories: r.usage.categories.map(Ss)
	}, g = h?.categories.filter(xs) ?? [], _ = g.filter((e) => s.has(e.key)), v = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		Ut({
			title: t,
			body: J("settings:storageSpace.cleanBody", {
				size: sn(n),
				items: jn(e.map((e) => J("settings:storageSpace.cleanItem", {
					label: e.label,
					size: sn(e.reclaimable),
					effect: e.note
				})))
			}),
			confirmLabel: J("settings:storageSpace.cleanSize", { size: sn(n) }),
			holdToConfirm: !0,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => i(await W(`${hs}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, y = () => void l.run("relocate", async (e) => {
		let t = await Vn(r.data_root, (t) => W(Re, t, "POST", e), "data");
		if (!t) return;
		let n = r.usage ? sn(r.usage.total_bytes) : "";
		await Ut({
			title: J("settings:storageSpace.moveDataDirectory"),
			body: J("settings:storageSpace.moveConfirm", {
				size: n,
				from: r.data_root,
				to: t
			}),
			confirmLabel: J("settings:storageSpace.moveDataDirectory"),
			onConfirm: async () => {
				try {
					o(dr(await W(`${hs}/relocate`, { target: t })));
				} catch (e) {
					throw Error(ys(e));
				}
			}
		});
	}, () => void 0), b = r.relocation.last, x = b && (b.state === "error" || (b.notes?.length ?? 0) > 0 || Date.now() - b.finished_at * 1e3 < vs), S = h?.categories.find((e) => e.key === r.job.category)?.label, C = a || (r.job.state === "cleaning" ? J("settings:storageSpace.cleaningCategory", { category: S || "" }) : r.job.state === "measuring" ? J("settings:storageSpace.measuringStatus") : _.length ? J("settings:storageSpace.selectedSummary", {
		count: _.length,
		size: sn(_.reduce((e, t) => e + t.reclaimable, 0))
	}) : h ? J("settings:storageSpace.measuredAt", { time: (/* @__PURE__ */ new Date(h.measured_at * 1e3)).toLocaleString(wn) }) : ""), w = u || !!a, T = (e) => (t) => c((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)(L, {
		id: "storageSettings",
		guide: "storage",
		title: J("settings:diskUsage.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(be, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:shared.dataDirectory"),
				children: /* @__PURE__ */ (0, $.jsx)(Ue, {
					path: r.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, $.jsx)(j, {
				term: J("settings:diskUsage.disk"),
				children: bs(r)
			})] }),
			/* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					r.job.state === "measuring" ? /* @__PURE__ */ (0, $.jsx)(Ts, { job: r.job }) : null,
					h?.capacity_error ? /* @__PURE__ */ (0, $.jsxs)(A, { children: [J("settings:storageSpace.capacityIncomplete"), h.capacity_error] }) : null,
					h?.allocated_bytes == null ? null : /* @__PURE__ */ (0, $.jsxs)(N, { children: [
						J("settings:storageSpace.allocatedOnDisk"),
						" ",
						sn(h.allocated_bytes)
					] }),
					h ? /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-storage-result": "",
						className: Lt({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, $.jsx)(cs, { storage: h ? {
								...r,
								usage: h
							} : r })
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-col pl-4",
							children: h.categories.filter((e) => e.files > 0 || !Es.has(e.key)).map((e) => /* @__PURE__ */ (0, $.jsx)(Ds, {
								category: e,
								selected: s.has(e.key),
								disabled: w,
								onToggle: T(e.key)
							}, e.key))
						})]
					}) : r.job.state === "measuring" ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:diskUsage.emptyHelp") }),
					r.relocation.available ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: K(r.relocation, "message") }),
					!r.relocation.available && r.relocation.steps?.length ? /* @__PURE__ */ (0, $.jsx)(ne, {
						label: J("settings:storageSpace.moveOnHost"),
						steps: r.relocation.steps.map(ws)
					}) : null,
					r.job.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: K(r.job, "message") }) : null,
					l.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: l.error }) : null,
					x && b ? b.state === "error" ? /* @__PURE__ */ (0, $.jsx)(A, { children: Cs(b).join(J("shell:format.semicolonSeparator")) }) : /* @__PURE__ */ (0, $.jsx)(N, { children: Cs(b).join(J("shell:format.semicolonSeparator")) }) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: C ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: a ? "status" : void 0,
					children: C
				}) : null,
				children: [
					h ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						disabled: w || !_.length,
						...G(r.job.state === "cleaning" && _.length > 0),
						onClick: () => v(_, J("settings:storageSpace.cleanSelectedTitle")),
						children: J("settings:storageSpace.cleanSelected")
					}), /* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						disabled: w || !g.length,
						onClick: () => v(g, J("settings:storageSpace.cleanAllTitle")),
						children: J("settings:storageSpace.cleanAll")
					})] }) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						disabled: w || !r.relocation.available || !h,
						onClick: y,
						...G(l.busy === "relocate"),
						children: J("settings:diskUsage.changeLocation")
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						disabled: !!a || r.job.state === "cleaning",
						onClick: p,
						...G(l.busy === "measure" || r.job.state === "measuring"),
						children: J(h ? "settings:diskUsage.measureAgain" : "settings:diskUsage.measure")
					})
				]
			})
		]
	}), r.budget ? /* @__PURE__ */ (0, $.jsx)(ms, {
		initial: r.budget,
		after: i,
		receipt: t
	}) : null] });
}
// src/react/settings/upgrade-repairs.tsx
var ks = {
	pending: J("settings:upgradeRepairs.pending"),
	running: J("settings:upgradeRepairs.repairing"),
	failed: J("settings:repairCenter.needsRetry"),
	deferred: J("settings:repairCenter.deferred"),
	review: J("settings:upgradeRepairs.needsReview"),
	complete: J("settings:shared.completed"),
	unavailable: J("settings:upgradeRepairs.unavailable")
}, As = (e) => xr("settings:upgradeRepairs.itemCount", { count: e }, { value: /* @__PURE__ */ (0, $.jsx)(f, { value: e }) });
function js({ lastCapacityCheckPassed: e = !1 } = {}) {
	let { snapshot: t } = Tr(), [n, r] = (0, Z.useState)(null), i = Y();
	(0, Z.useEffect)(() => r(null), [t]);
	let a = n ?? t?.repairs, o = a?.state || "pending", s = a?.message_code === "labels.upgradeRepairs.mediaPaused" && e, c = a?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, l = a?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, u = a?.items.reduce((e, t) => e + (t.deferred || 0), 0) || 0, d = a?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "upgradeRepairs",
		title: J("settings:upgradeRepairs.title"),
		aside: /* @__PURE__ */ (0, $.jsx)(H, {
			tone: o === "failed" ? "error" : o === "running" ? "progress" : o === "review" ? "warning" : o === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${o}.status`,
				children: ks[o] || J("settings:shared.notFound")
			}, o)
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(be, { children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.toDo"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: As(c) })
				}),
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:shared.failed"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: As(l) })
				}),
				u ? /* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.deferred"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: As(u) })
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(j, {
					term: J("settings:upgradeRepairs.toReview"),
					children: /* @__PURE__ */ (0, $.jsx)("span", { children: As(d) })
				})
			] }),
			s && !i.error ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.capacityReady") }) }) : a?.message || i.error ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: i.error || K(a, "message") }) }) : null,
			o === "running" ? /* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.runningHelp") }), /* @__PURE__ */ (0, $.jsx)(St, {})] }) : null,
			o === "deferred" ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:upgradeRepairs.deferredHelp") }) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, {
				status: d ? /* @__PURE__ */ (0, $.jsx)(ge, {
					href: "/api/configuration/upgrade-repairs/review",
					children: J("settings:upgradeRepairs.downloadReviewLog")
				}) : null,
				children: [/* @__PURE__ */ (0, $.jsx)(Ae, {
					href: Xe,
					size: "small",
					trailingIcon: Sn,
					children: J("settings:upgradeRepairs.repairCenterLink")
				}), /* @__PURE__ */ (0, $.jsx)(m, {
					size: "small",
					variant: "secondary",
					disabled: !a?.available || o === "running" || !!i.busy || !l && o !== "failed",
					onClick: () => void i.run("retry", (e) => W("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						r(e), Rt();
					}),
					children: J("settings:upgradeRepairs.retryFailed")
				})]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var Ms = [
	["6", J("settings:automaticUpdates.every6Hours")],
	["24", J("settings:automaticUpdates.daily")],
	["168", J("settings:automaticUpdates.weekly")]
];
function Ns({ entry: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: e.id,
		"aria-labelledby": `${e.id}-title`,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("h3", {
			id: `${e.id}-title`,
			className: "px-3 text-title-3-medium text-text-primary",
			children: /* @__PURE__ */ (0, $.jsx)("span", { children: e.label })
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex min-w-0 flex-col gap-6",
			children: t
		})]
	});
}
function Ps({ data: e, receipt: t, reopenTutorial: n, active: r }) {
	let i = {
		id: "maintenance-updates",
		label: J("settings:maintenanceGroups.updates")
	}, a = {
		id: "maintenance-runtime",
		label: J("settings:maintenanceGroups.runtime")
	}, o = {
		id: "maintenance-backups",
		label: J("settings:maintenanceGroups.backups")
	}, s = {
		id: "maintenance-privacy",
		label: J("settings:maintenanceGroups.privacy")
	}, c = [
		i,
		a,
		...e.storage ? [o] : [],
		s,
		...e.uninstall ? [{
			id: "uninstallPeach",
			label: J("settings:uninstall.title")
		}] : []
	];
	return /* @__PURE__ */ (0, $.jsxs)(ot, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: c,
		children: [
			/* @__PURE__ */ (0, $.jsxs)(Ns, {
				entry: i,
				children: [
					e.updates ? /* @__PURE__ */ (0, $.jsx)(_o, {
						initial: e.updates,
						initialJob: e.update_job
					}) : null,
					e.automatic_updates ? /* @__PURE__ */ (0, $.jsx)(Is, {
						initial: e.automatic_updates,
						receipt: t
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(js, { lastCapacityCheckPassed: e.storage?.budget?.last_check?.paused === !1 })
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(Ns, {
				entry: a,
				children: [
					/* @__PURE__ */ (0, $.jsx)(Ja, {
						active: r,
						initial: e.startup,
						receipt: t
					}),
					e.storage ? /* @__PURE__ */ (0, $.jsx)(Os, {
						initial: e.storage,
						receipt: t,
						active: r
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(Ls, {
						facts: e.facts,
						receipt: t
					}),
					/* @__PURE__ */ (0, $.jsx)(Fs, {
						receipt: t,
						reopenTutorial: n
					})
				]
			}),
			e.storage ? /* @__PURE__ */ (0, $.jsxs)(Ns, {
				entry: o,
				children: [/* @__PURE__ */ (0, $.jsx)(no, { receipt: t }), /* @__PURE__ */ (0, $.jsx)(Co, { receipt: t })]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(Ns, {
				entry: s,
				children: [e.remote_reporting ? /* @__PURE__ */ (0, $.jsx)(L, {
					guide: "diagnostics-reporting",
					title: J("settings:dataSharing.diagnosticsTitle"),
					children: /* @__PURE__ */ (0, $.jsx)(Ro, {
						initial: e.remote_reporting,
						receipt: t
					})
				}) : null, /* @__PURE__ */ (0, $.jsx)(L, {
					id: "librarySharing",
					guide: "reporting",
					title: J("settings:dataSharing.communityTitle"),
					children: /* @__PURE__ */ (0, $.jsx)(Io, {
						active: r,
						receipt: t
					})
				})]
			}),
			e.uninstall ? /* @__PURE__ */ (0, $.jsx)(Rs, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function Fs({ reopenTutorial: e }) {
	return /* @__PURE__ */ (0, $.jsx)("section", {
		"aria-label": J("settings:tour.guidedTour"),
		className: "w-full",
		children: /* @__PURE__ */ (0, $.jsx)(pt, { children: /* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:tour.guidedTour"),
			description: J("settings:tour.reopenDescription"),
			children: /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				onClick: () => void e(),
				children: J("settings:tour.reopen")
			})
		}) }) })
	});
}
function Is({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error ? K(e, "error") : e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => W("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t(J("settings:shared.settingsSaved")));
	}, c = e.available ? e.download_available ? J("settings:automaticUpdates.confirmInstall") : void 0 : J("settings:automaticUpdates.needsTray");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "automaticUpdates",
		guide: "automatic-updates",
		title: J("settings:autoUpdate.title"),
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.autoCheck"),
					description: J("settings:autoUpdate.autoCheckHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:autoUpdate.autoCheck"),
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.autoDownload"),
					description: J("settings:autoUpdate.autoDownloadHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:autoUpdate.autoDownload"),
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:autoUpdate.frequency"),
					description: c,
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:autoUpdate.frequency"),
						selectedKey: String(i),
						isDisabled: !e.available || n === "off",
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: Ms.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				disabled: !e.available,
				...G(o.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
function Ls({ facts: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(null), i = n ?? e, a = Y(), o = (e) => void a.run(e, (t) => W("/api/configuration/media-tools", { tool: e }, "POST", t), (e) => {
		r(e.facts.map(Pn)), t(dr(e) || e.message);
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "facts",
		title: J("settings:runtimeInfo.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(be, { children: i.map(({ term: e, value: t, install_tool: n, download_url: r, download_label: i }) => /* @__PURE__ */ (0, $.jsx)(j, {
			term: e,
			children: n ? /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0",
					children: t
				}), /* @__PURE__ */ (0, $.jsx)(m, {
					size: "small",
					className: "shrink-0",
					onClick: () => o(n),
					...G(a.busy === n),
					children: J("settings:shared.install")
				})]
			}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [t, r ? /* @__PURE__ */ (0, $.jsx)(ge, {
				href: r,
				children: i
			}) : null] })
		}, e)) }), a.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: a.error }) : null]
	});
}
function Rs({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void Ut({
		title: J("settings:uninstall.title"),
		holdToConfirm: !0,
		danger: !0,
		body: J(n ? "settings:uninstall.confirmFull" : "settings:uninstall.confirmAppOnly"),
		confirmLabel: J("settings:uninstall.title"),
		onConfirm: async () => {
			let e = await W("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "uninstall-peach"
			});
			a(dr(e) || e.message);
		}
	}), s = i || K(e, "message"), c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "uninstallPeach",
		guide: "uninstall",
		title: J("settings:uninstall.title"),
		children: [
			e.available ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:uninstall.help") }) }) : null,
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:uninstall.full"),
				description: J("settings:uninstall.fullHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(yt, {
					"aria-label": J("settings:uninstall.full"),
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(le, {
					summary: J("settings:shared.dataDirectory"),
					children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(Ue, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(M, {
				status: s ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: J("settings:uninstall.title")
				})
			})
		]
	});
}
// src/react/restart-redirect.ts
var zs = 8e3, Bs = [
	{
		name: J("settings:cloudDriveGuide.tierHdd"),
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksOne")
	},
	{
		name: J("settings:cloudDriveGuide.tierSata"),
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksOneToTwo")
	},
	{
		name: J("settings:cloudDriveGuide.tierNvme"),
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: J("settings:cloudDriveGuide.tasksTwoPlus")
	}
], Vs = [
	["cache", J("settings:cloudDriveGuide.cacheLimit")],
	["read", J("settings:cloudDriveGuide.readLength")],
	["task", J("settings:cloudDriveGuide.concurrentVideos")]
];
function Hs() {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, $.jsxs)(le, {
			summary: J("settings:cloudDriveGuide.title"),
			children: [
				/* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:cloudDriveGuide.mountFirst"), /* @__PURE__ */ (0, $.jsx)(ge, {
					href: "https://www.clouddrive2.com/help.html",
					children: J("settings:cloudDriveGuide.mountHelp")
				})] }),
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDriveGuide.cacheHelp") }),
				/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudDriveGuide.writeAccess") }),
				/* @__PURE__ */ (0, $.jsx)("ul", {
					"aria-label": J("settings:cloudDriveGuide.tiersLabel"),
					className: "flex flex-col gap-2",
					children: Bs.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, $.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: Vs.map(([t, n]) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, $.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, $.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, $.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.cacheSettingsTip") }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.readLengthTip") }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: J("settings:cloudDriveGuide.cacheTypesTip") })
					]
				}),
				/* @__PURE__ */ (0, $.jsx)(N, { children: /* @__PURE__ */ (0, $.jsx)(ge, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: J("settings:cloudDriveGuide.fullGuide")
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var Us = "/api/configuration/cloud-proxies", Ws = [
	["direct", J("settings:cloudProxy.direct")],
	["system", J("settings:shared.followSystem")],
	["http", J("settings:cloudProxy.http")],
	["socks5", J("settings:cloudProxy.socks5")]
];
function Gs({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), { checked: d, checkFailed: f } = Wr(), p = (e) => {
		o.current.size || u.run("refresh", (e) => U(Us, e), (t) => {
			a.current.clear(), n(t), i(!1), e && d(J("settings:cloudProxy.refreshed"));
		}, (t) => {
			let n = t instanceof Error ? t.message : J("settings:cloudProxy.loadFailed");
			i(!1), u.setError(n), e && f(J("settings:cloudProxy.title"), n);
		});
	};
	return l.current = () => p(!1), (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		Xn("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, $.jsx)(at, {
		label: J("settings:cloudProxy.loading"),
		html: zt
	}) : /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "cloud-proxy",
		title: J("settings:cloudProxy.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: _ }), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:cloudProxy.readFailedTitle"),
					action: /* @__PURE__ */ (0, $.jsx)(Ae, {
						href: "/settings/downloads",
						size: "small",
						children: J("settings:cloudProxy.downloadSettingsLink")
					}),
					children: u.error
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "neutral",
					action: /* @__PURE__ */ (0, $.jsx)(Ae, {
						href: "/settings/downloads",
						size: "small",
						children: J("settings:cloudProxy.downloadSettingsLink")
					}),
					children: J("settings:cloudProxy.notConfigured")
				}) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.noLibraries") }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(xe, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: ii(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.unmatched") })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, $.jsx)(Ks, {
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
			variant: "secondary",
			disabled: s,
			onClick: () => p(!0),
			...G(u.busy === "refresh"),
			children: J("settings:shared.reload")
		}) })]
	});
}
function Ks({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = jn(a.libraries?.map((e) => e.name) ?? []) || a.name, u = Y(), d = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		"aria-label": J("settings:cloudProxy.accountForm", { name: l }),
		onSubmit: (e) => {
			e.preventDefault(), i(!0), u.run("save", (e) => W(Us, {
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t(J("settings:cloudProxy.saved"));
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(xe, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: ii(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(N, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, $.jsx)(qs, {
				label: J("settings:cloudProxy.dataProxy"),
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("data", e)
			}),
			/* @__PURE__ */ (0, $.jsx)(qs, {
				label: J("settings:cloudProxy.apiProxy"),
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:cloudProxy.needsWritePermission") }),
			u.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...G(u.busy === "save"),
					children: J("settings:shared.saveSettings")
				})
			})
		]
	});
}
function qs({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)(xe, { children: e }),
			/* @__PURE__ */ (0, $.jsxs)(R, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, $.jsx)(z, {
					id: "unknown",
					children: J("settings:cloudProxy.unknownType")
				}) : null, Ws.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)(P, {
					className: "min-w-40 flex-1",
					label: J("settings:cloudProxy.host", { label: e }),
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, $.jsx)(P, {
					className: "w-full sm:w-28",
					label: J("settings:cloudProxy.port", { label: e }),
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, $.jsxs)(le, {
				summary: J("settings:cloudProxy.authentication"),
				children: [
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:cloudProxy.username", { label: e }),
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(P, {
						label: J("settings:cloudProxy.password", { label: e }),
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? J("settings:shared.savedLeaveBlank") : J("settings:shared.optional"),
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, $.jsx)(O, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: J("settings:cloudProxy.clearPassword")
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/code-pattern-settings.tsx
var Js = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function Ys({ receipt: e }) {
	let t = X({
		queryKey: rt,
		queryFn: ({ signal: e }) => tn(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "codes",
		title: J("settings:codePatterns.title"),
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => W(it, { codePatterns: n }, "POST", e), (t) => {
				qn.setQueryData(rt, t), r(null), e(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:codePatterns.help") }), /* @__PURE__ */ (0, $.jsx)(Tt, {
			id: "codePatternSetting",
			"aria-label": J("settings:codePatterns.title"),
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: Js,
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/service-preferences.tsx
var Xs = [
	["off", J("settings:timelineThumbnails.off")],
	["precise", J("settings:timelineThumbnails.precise")],
	["coarse", J("settings:timelineThumbnails.coarse")]
], Zs = [
	{
		key: "sourceBudgetRequests",
		fallback: 6e3,
		choices: [
			1500,
			3e3,
			6e3,
			12e3,
			24e3,
			48e3
		],
		label: () => J("settings:sourceBudget.requests"),
		help: () => J("settings:sourceBudget.requestsHelp"),
		option: (e) => J("settings:sourceBudget.requestCount", { count: e })
	},
	{
		key: "sourceBudgetHours",
		fallback: 4,
		choices: [
			1,
			2,
			4,
			8,
			12,
			24
		],
		label: () => J("settings:sourceBudget.hours"),
		help: () => void 0,
		option: (e) => J("settings:sourceBudget.hourCount", { count: e })
	},
	{
		key: "sourceBudgetGigabytes",
		fallback: 1,
		choices: [
			1,
			2,
			4,
			8,
			16
		],
		label: () => J("settings:sourceBudget.gigabytes"),
		help: () => void 0,
		option: (e) => J("settings:sourceBudget.gigabyteCount", { count: e })
	}
];
function Qs({ receipt: e }) {
	let t = X({
		queryKey: rt,
		queryFn: ({ signal: e }) => tn(e)
	}), n = Rr(), r = n.error || t.error, i = !t.data || n.isPending;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:taskSpeed.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:taskSpeed.defaultSpeed"),
			description: J("settings:taskSpeed.defaultSpeedHelp"),
			children: /* @__PURE__ */ (0, $.jsx)(Ke, {
				value: t.data?.taskSpeedMode || "standard",
				busy: i,
				onChange: (t) => n.mutate({ taskSpeedMode: t }, { onSuccess: () => e(J("settings:taskSpeed.saved")) })
			})
		}), Zs.map((r) => /* @__PURE__ */ (0, $.jsx)(B, {
			label: r.label(),
			description: r.help(),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: `${r.key}Setting`,
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": r.label(),
					selectedKey: String(t.data?.[r.key] ?? r.fallback),
					isDisabled: i,
					onSelectionChange: (t) => {
						t !== null && n.mutate({ [r.key]: Number(t) }, { onSuccess: () => e(J("settings:sourceBudget.saved")) });
					},
					children: r.choices.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: r.option(e)
					}, e))
				})
			})
		}, r.key))] }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
function $s({ epoch: e = 0, disabled: t = !1 }) {
	let n = X({
		queryKey: bt,
		queryFn: ({ signal: e }) => rn(e),
		refetchOnMount: "always"
	}), r = zr(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:videoPreviews.timeline"),
			description: J("settings:videoPreviews.timelineHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:timelineThumbnails.interval"),
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
					children: Xs.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, $.jsxs)(V, {
			divided: !0,
			children: [r.isPending ? /* @__PURE__ */ (0, $.jsx)(Ct, {
				embedded: !0,
				kind: "gather",
				label: J("settings:shared.saving")
			}) : /* @__PURE__ */ (0, $.jsx)(Ct, {
				embedded: !0,
				kind: At("timeline-thumbnails"),
				label: J("settings:timelineThumbnails.generating")
			}), r.isPending ? null : /* @__PURE__ */ (0, $.jsx)(St, {})]
		}) : null,
		o ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(o) })
		}) : null
	] });
}
function ec({ receipt: e }) {
	let t = Mt();
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: rt,
		queryFn: ({ signal: e }) => tn(e),
		refetchOnMount: "always"
	}), r = Rr(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "follow-options",
		title: J("settings:followFetch.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [
			/* @__PURE__ */ (0, $.jsx)(nc, { kind: "follow" }),
			/* @__PURE__ */ (0, $.jsx)(nc, { kind: "feed" }),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.initialRange"),
				description: J("settings:followFetch.initialRangeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "followInitialDaysSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:followFetch.initialRange"),
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e(J("settings:followSchedule.initialRangeSaved"));
							} });
						},
						children: ye.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.avatarRefresh"),
				description: J("settings:followFetch.avatarRefreshHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.avatarRefresh")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:followFetch.faviconRefresh"),
				description: J("settings:followFetch.faviconRefreshHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.faviconRefresh")
				})
			})
		] }), a ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(a) })
		}) : null]
	});
}
var tc = {
	follow: {
		id: "followScheduleSetting",
		label: () => J("settings:followFetch.autoCheck"),
		help: () => J("settings:followSchedule.autoCheckHelp"),
		input: () => J("settings:followSchedule.autoCheckInterval"),
		name: "follow-interval",
		running: () => J("settings:followSchedule.checking"),
		activity: "follow-check",
		failure: () => J("settings:followSchedule.lastCheckFailed")
	},
	feed: {
		id: "feedScheduleSetting",
		label: () => J("settings:followFetch.feedSchedule"),
		help: () => J("settings:followSchedule.feedScheduleHelp"),
		input: () => J("settings:followSchedule.feedScheduleInterval"),
		name: "feed-interval",
		running: () => J("settings:followSchedule.fetchingFeeds"),
		activity: "feed-check",
		failure: () => J("settings:followSchedule.lastFetchFailed")
	}
};
function nc({ kind: e }) {
	let t = tc[e], { key: n, fetch: r, fallback: i } = Qe[e], a = X({
		queryKey: n,
		queryFn: ({ signal: e }) => r(e),
		refetchOnMount: "always",
		refetchInterval: nr
	}), o = Lr(e), s = a.data, c = `peach.number.${t.id}`, u = (0, Z.useRef)(It(Number(localStorage.getItem(c)), 15, 10080, i)), [d, f] = (0, Z.useState)("switch"), [p, m] = (0, Z.useState)(String(i)), [h, g] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		s?.enabled && (u.current = s.interval_minutes, m(String(s.interval_minutes)));
	}, [s]);
	let _ = !s?.available || a.isFetching || o.isPending, v = () => {
		let e = Number(p);
		!Number.isInteger(e) || e < 15 || e > 10080 ? g(!0) : (g(!1), s?.enabled && !_ && e !== s.interval_minutes && (u.current = e, localStorage.setItem(c, String(e)), f("interval"), o.mutate(e)));
	}, y = o.error || a.error, b = o.isPending ? /* @__PURE__ */ (0, $.jsxs)("span", {
		role: "status",
		className: "flex items-center gap-1 text-body-2-regular text-text-secondary",
		children: [/* @__PURE__ */ (0, $.jsx)(l, { className: "size-4" }), J("settings:shared.saving")]
	}) : null, x = s && !s.available ? J("settings:followSchedule.primaryOnly") : t.help();
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(B, {
			label: t.label(),
			description: x,
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				id: t.id,
				className: "flex min-h-9 shrink-0 flex-wrap items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": t.label(),
						isSelected: s?.enabled === !0,
						isDisabled: !s?.available,
						"aria-disabled": _ || void 0,
						"aria-busy": o.isPending && d === "switch" || void 0,
						onChange: (e) => {
							_ || (localStorage.setItem(c, String(u.current)), f("switch"), o.mutate(e ? u.current : 0));
						}
					}),
					d === "switch" ? b : null,
					s?.enabled ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(P, {
							type: "number",
							inputMode: "numeric",
							name: t.name,
							autoComplete: "off",
							"aria-label": t.input(),
							className: "w-21 sm:w-24",
							value: p,
							onChange: (e) => {
								m(e), g(!1);
							},
							onBlur: v,
							onKeyDown: (e) => {
								e.key === "Enter" && (e.preventDefault(), v());
							},
							isDisabled: !s.available,
							isReadOnly: a.isFetching || o.isPending,
							isInvalid: h,
							"aria-busy": o.isPending && d === "interval" || void 0
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: J("settings:numberSetting.unitMinutes")
						})]
					}) : null,
					d === "interval" ? b : null
				]
			})
		}),
		h ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: J("settings:followSchedule.invalidInterval") }) }) : null,
		s?.running ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(Ct, {
			embedded: !0,
			kind: At(t.activity),
			label: t.running()
		}) }) : null,
		/* @__PURE__ */ (0, $.jsx)(rc, {
			kind: e,
			status: s,
			title: t.failure()
		}),
		y ? /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(y) }) }) : null
	] });
}
function rc({ kind: e, status: t, title: n }) {
	let r = Ir(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = Ln(t.next_run_at), o = [i > 1 ? J("settings:followSchedule.consecutiveFailures", { count: i }) : "", a ? J("settings:followSchedule.nextRun", { time: a }) : ""].filter(Boolean).join(J("shell:format.clauseSeparator")), s = [
		t.last_error,
		o,
		r.error ? J("settings:followSchedule.retryFailed", { error: q(r.error) }) : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(F, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, $.jsx)(m, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...G(r.isPending),
			onClick: () => r.mutate(),
			children: J("settings:shared.retryNow")
		}),
		children: s
	}) });
}
// src/react/settings/media-processing-settings.tsx
function ic({ receipt: e }) {
	let t = X({
		queryKey: Ne,
		queryFn: ({ signal: e }) => en(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "preview",
		title: J("settings:videoPreviews.title"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:videoPreviews.generate"),
				description: J("settings:videoPreviews.generateHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(yt, {
					"aria-label": J("settings:videoPreviews.generate"),
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => W(Pe, { metadata_only: !t }, "POST", e), (t) => {
						qn.setQueryData(Ne, t), qn.invalidateQueries({ queryKey: bt }), qn.invalidateQueries({ queryKey: Te }), e(t.metadata_only ? J("settings:videoPreview.turnedOff") : J("settings:videoPreview.turnedOn"));
					})
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)($s, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:videoPreviews.decoder"),
				description: J("settings:videoPreviews.decoderHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(R, {
						"aria-label": J("settings:videoPreviews.decoder"),
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i || !!t.data?.metadata_only,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => W(Pe, { preview_acceleration: String(t) }, "POST", e), (t) => {
								qn.setQueryData(Ne, t), e(J("settings:videoPreview.decodingSaved"));
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(z, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, $.jsx)(z, {
							id: "software",
							children: J("settings:videoPreview.softwareDecoding")
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(Ct, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: r })
			}) : null
		]
	});
}
var ac = [
	0,
	1080,
	720,
	480
];
function oc({ receipt: e }) {
	let t = X({
		queryKey: Ne,
		queryFn: ({ signal: e }) => en(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "transcode",
		title: J("settings:transcoding.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:transcoding.mode"),
				description: J("settings:transcoding.modeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(R, {
						"aria-label": J("settings:transcoding.mode"),
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => W(Pe, { playback_acceleration: String(t) }, "POST", e), (t) => {
								qn.setQueryData(Ne, t), e(J("settings:playbackTranscode.saved"));
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(z, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, $.jsx)(z, {
							id: "software",
							children: J("settings:playbackTranscode.software")
						})]
					})
				})
			}), /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:transcoding.quality"),
				description: J("settings:transcoding.qualityHelp"),
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "playbackQualitySetting",
					children: /* @__PURE__ */ (0, $.jsx)(R, {
						"aria-label": J("settings:transcoding.quality"),
						selectedKey: String(t.data?.playback_max_height ?? 0),
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_max_height", (e) => W(Pe, { playback_max_height: Number(t) }, "POST", e), (t) => {
								qn.setQueryData(Ne, t), e(J("settings:playbackTranscode.qualitySaved"));
							});
						},
						children: ac.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
							id: String(e),
							children: e ? J("settings:transcoding.qualityHeight", { height: e }) : J("settings:transcoding.original")
						}, e))
					})
				})
			})] }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(Ct, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: r })
			}) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var sc = [
	["", J("settings:libraryIcons.auto")],
	["hard-drive", J("settings:libraryIcons.hardDrive")],
	["database", J("settings:libraryIcons.database")],
	["heart", J("settings:libraryIcons.crush")],
	["heart-hand", J("settings:libraryIcons.intimate")],
	["flame", J("settings:libraryIcons.passion")],
	["cherry", J("settings:libraryIcons.cherry")],
	["lollipop", J("settings:libraryIcons.sweetie")],
	["candy", J("settings:libraryIcons.candy")],
	["banana", J("settings:libraryIcons.banana")],
	["droplets", J("settings:libraryIcons.wet")],
	["venus", J("settings:libraryIcons.female")],
	["mars", J("settings:libraryIcons.male")],
	["venus-and-mars", J("settings:libraryIcons.couple")],
	["gem", J("settings:libraryIcons.featured")],
	["crown", J("settings:libraryIcons.queen")],
	["ribbon", J("settings:libraryIcons.ribbon")],
	["shirt", J("settings:libraryIcons.uniform")],
	["graduation-cap", J("settings:libraryIcons.student")],
	["stethoscope", J("settings:libraryIcons.nurse")],
	["glasses", J("settings:libraryIcons.glasses")],
	["footprints", J("settings:libraryIcons.footprints")],
	["hand", J("settings:libraryIcons.hands")],
	["flower", J("settings:libraryIcons.flower")],
	["venetian-mask", J("settings:libraryIcons.cosplay")],
	["rabbit", J("settings:libraryIcons.bunnyGirl")],
	["paw-print", J("settings:libraryIcons.animalEars")],
	["dumbbell", J("settings:libraryIcons.fitness")],
	["bed-double", J("settings:libraryIcons.bedroom")],
	["bath", J("settings:libraryIcons.bathroom")],
	["key-round", J("settings:libraryIcons.private")],
	["wine", J("settings:libraryIcons.tipsy")],
	["cigarette", J("settings:libraryIcons.smoking")],
	["moon", J("settings:libraryIcons.night")],
	["sparkles", J("settings:libraryIcons.fantasy")],
	["camera", J("settings:libraryIcons.photoShoot")],
	["video", J("settings:libraryIcons.videos")],
	["film", J("settings:libraryIcons.movies")],
	["image", J("settings:libraryIcons.imageSets")],
	["gamepad-2", J("settings:libraryIcons.games")],
	["star", J("settings:libraryIcons.favorites")],
	["tags", J("settings:libraryIcons.topics")]
];
function cc(e) {
	let t = e === "local" ? "" : Fe[e];
	return t ? [t, J("settings:libraryIcons.auto")] : ["hard-drive", J("settings:libraryIcons.default")];
}
var lc = "auto";
function uc({ value: n, label: r, kind: s = "local", onChange: c }) {
	let l = (0, Z.useRef)(null), [u, d] = (0, Z.useState)(!1), [f, p] = (0, Z.useState)(n), [h, g] = cc(s);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
		ref: l,
		variant: "secondary",
		className: "self-start",
		"aria-label": r,
		"aria-haspopup": "dialog",
		"aria-expanded": u,
		onClick: () => {
			p(n), d(!0);
		},
		children: /* @__PURE__ */ (0, $.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: n || h }), ((e) => e && sc.find(([t]) => t === e)?.[1] || g)(n)]
		})
	}), /* @__PURE__ */ (0, $.jsx)(t, {
		triggerRef: l,
		isOpen: u,
		onOpenChange: d,
		placement: "bottom start",
		offset: 4,
		className: Ie,
		children: /* @__PURE__ */ (0, $.jsxs)(i, {
			"aria-label": J("settings:libraryIcons.dialogLabel", { label: r }),
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, $.jsx)(e, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: J("settings:libraryIcons.title")
				}),
				/* @__PURE__ */ (0, $.jsx)(a, {
					"aria-label": J("settings:libraryIcons.choices"),
					value: f || lc,
					onChange: (e) => p(e === lc ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: sc.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(o, {
						value: e || lc,
						"aria-label": e ? t : g,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, $.jsx)(vt, { mark: e || h })
					}, e || lc))
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, $.jsx)(m, {
						variant: "secondary",
						onClick: () => d(!1),
						children: J("settings:shared.cancel")
					}), /* @__PURE__ */ (0, $.jsx)(m, {
						disabled: f === n,
						onClick: () => {
							c(f), d(!1);
						},
						children: J("settings:shared.apply")
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var dc = [
	["probe", J("settings:libraryPolicy.stepProbe")],
	["metadata", J("settings:libraryPolicy.stepMetadata")],
	["cover", J("settings:libraryPolicy.stepCovers")],
	["people", J("settings:libraryPolicy.stepAvatars")],
	["preview", J("settings:libraryPolicy.stepContactSheet")]
], fc = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], pc = [
	[
		"auto",
		J("settings:libraryPolicy.auto"),
		J("settings:libraryPolicy.autoHint")
	],
	[
		"local",
		J("settings:libraryPolicy.localOnly"),
		J("settings:libraryPolicy.localHint")
	],
	[
		"custom",
		J("settings:shared.custom"),
		J("settings:libraryPolicy.customHint")
	]
];
function mc() {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, $.jsx)(N, { children: He }), /* @__PURE__ */ (0, $.jsxs)(le, {
			summary: J("settings:libraryPolicy.compare"),
			children: [/* @__PURE__ */ (0, $.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, $.jsx)("thead", { children: /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, $.jsx)(r, { children: J("settings:libraryPolicy.step") })
				}), ze.map((e) => /* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, $.jsx)("tbody", { children: Ve.map(([e, ...t]) => /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, $.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.included"),
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.notIncluded"),
						children: "—"
					}) : e
				}, ze[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, $.jsx)(N, { children: Be })]
		})]
	});
}
function hc({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, $.jsx)(lt, {
		"data-guide-target": "library-policy",
		className: "w-full",
		"aria-label": J("settings:libraryPolicy.modeLabel", { name: e }),
		selectedKey: t,
		prefix: J("settings:libraryPolicy.mode"),
		renderValue: /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: pc.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: pc.map(([e, t, n]) => /* @__PURE__ */ (0, $.jsx)(z, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, $.jsx)("span", { children: t }), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function gc({ name: e, value: t, onChange: n, previewsOff: r = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)(le, {
		defaultOpen: !0,
		summary: J("settings:libraryPolicy.stepsSummary", {
			name: e,
			selected: t.length,
			total: dc.length
		}),
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": J("settings:libraryPolicy.stepsLabel", { name: e }),
			children: dc.map(([e, i]) => /* @__PURE__ */ (0, $.jsx)(O, {
				isSelected: t.includes(e),
				isDisabled: r && e === "preview",
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: i
			}, e))
		}), r ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:libraryPolicy.previewsOff") }) : null]
	});
}
function _c({ id: e, name: r, value: a, onChange: o }) {
	let c = (0, Z.useRef)(null), [l, u] = (0, Z.useState)(!1), d = s.find(([e]) => e === a)?.[1] || J("settings:libraryColor.none"), f = (t) => {
		o(t), Wn(e, t), u(!1);
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("button", {
		ref: c,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": l,
		"aria-label": J("settings:libraryColor.triggerLabel", {
			name: r || J("settings:mediaLibraries.untitled"),
			color: d
		}),
		title: d,
		onClick: () => u(!0),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: J("settings:libraryColor.label")
			}),
			a ? /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": a
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)("span", { children: d })
		]
	}), /* @__PURE__ */ (0, $.jsx)(n, {
		getContainer: () => zn(c.current),
		children: /* @__PURE__ */ (0, $.jsx)(t, {
			triggerRef: c,
			isOpen: l,
			onOpenChange: u,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: Ie,
			children: /* @__PURE__ */ (0, $.jsxs)(i, {
				"aria-label": J("settings:libraryColor.dialogLabel", { name: r || J("settings:mediaLibraries.untitled") }),
				className: "outline-none",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: J("settings:libraryColor.choose")
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !a,
						title: J("settings:libraryColor.none"),
						"aria-label": J("settings:libraryColor.none"),
						onClick: () => f(""),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), s.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === a,
						title: t,
						"aria-label": t,
						onClick: () => f(e),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var vc = "/api/configuration/push-discovery", yc = "/api/configuration/push-discovery/secret";
function bc({ label: e, help: t, status: n, children: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-primary",
				children: e
			}), /* @__PURE__ */ (0, $.jsxs)(N, { children: [/* @__PURE__ */ (0, $.jsx)("span", { children: t }), n ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block",
				children: n
			}) : null] })]
		}), r]
	});
}
function xc({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, d] = (0, Z.useState)(e), f = (e, n) => {
		r(e), d(e), a(e.prefixes), s(""), t(n);
	}, p = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), h = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
		c.run("save", (e) => W(vc, t, "POST", e), (e) => f(e, J("settings:shared.settingsSaved")), (e) => s(q(e)));
	}, g = () => {
		c.run("secret", (e) => W(yc, {}, "POST", e), (e) => f(e, J("settings:pushDiscovery.secretRotated")), (e) => s(q(e)));
	}, _ = [
		J("settings:pushDiscovery.ingestedCount", { count: u.queue.ingested }),
		u.queue.failed ? J("settings:pushDiscovery.failedCount", { count: u.queue.failed }) : "",
		u.queue.pending ? J("settings:pushDiscovery.pendingCount", { count: u.queue.pending }) : ""
	].filter(Boolean).join(J("shell:format.clauseSeparator")), v = u.local_running ? J("settings:pushDiscovery.monitoring", { paths: jn(u.local_roots) }) : (u.local_message ? K(u, "local_message") : "") || J("settings:pushDiscovery.notRunningDetail");
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "pushDiscovery",
		guide: "discovery",
		title: J("settings:fileDiscovery.title"),
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:pushDiscovery.localMonitoring")
				}), /* @__PURE__ */ (0, $.jsx)(H, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? J("settings:shared.notEnabled") : u.local_running ? J("settings:shared.running") : J("settings:pushDiscovery.notRunning")
				})]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(I, { children: [
				/* @__PURE__ */ (0, $.jsx)(bc, {
					label: J("settings:fileDiscovery.autoImport"),
					help: J("settings:fileDiscovery.autoImportHelp"),
					status: u.enabled ? _ : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:fileDiscovery.autoImport"),
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(bc, {
					label: J("settings:fileDiscovery.monitorLocal"),
					help: J("settings:fileDiscovery.monitorLocalHelp"),
					status: u.enabled && u.watch_local ? v : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:fileDiscovery.monitorLocal"),
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:fileDiscovery.cloudNotify"),
					description: J("settings:fileDiscovery.cloudNotifyHelp"),
					children: /* @__PURE__ */ (0, $.jsx)(yt, {
						"aria-label": J("settings:fileDiscovery.cloudNotify"),
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, $.jsx)(B, {
					label: J("settings:fileDiscovery.webhookConfig"),
					description: u.config_toml ? J("settings:pushDiscovery.webhookHelp") : u.origin ? J("settings:pushDiscovery.noSecret") : J("settings:pushDiscovery.needsLanUrl")
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: J("settings:pushDiscovery.lastImportFailed"),
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, $.jsxs)(le, {
						summary: J("settings:fileDiscovery.viewConfig"),
						children: [/* @__PURE__ */ (0, $.jsx)(Kr, {
							code: u.config_toml,
							language: "toml",
							label: J("settings:pushDiscovery.configLabel"),
							bounded: !1,
							copyLabel: J("settings:pushDiscovery.copyConfig"),
							onCopy: () => t(J("settings:pushDiscovery.configCopied"))
						}), /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:pushDiscovery.invalidPasteHelp") })]
					})
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(xe, { children: J("settings:pushDiscovery.cloudPrefixes") }),
						/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:pushDiscovery.cloudPrefixesHelp") }),
						/* @__PURE__ */ (0, $.jsx)("div", {
							role: "group",
							"aria-label": J("settings:pushDiscovery.cloudPrefixes"),
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(P, {
										className: "min-w-0 flex-1",
										"aria-label": J("settings:pushDiscovery.prefixLabel", { index: t + 1 }),
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => p(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(lt, {
										"aria-label": J("settings:pushDiscovery.prefixRootLabel", { index: t + 1 }),
										prefix: J("settings:pushDiscovery.mapsTo"),
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && p(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, $.jsx)(m, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: Me,
										"aria-label": J("settings:pushDiscovery.removeRow"),
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(m, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: l[0] ?? ""
							}]),
							children: J("settings:pushDiscovery.addPrefix")
						}) })
					]
				})
			}),
			o || c.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(M, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				onClick: g,
				disabled: !n.available,
				...G(c.busy === "secret"),
				children: J("settings:fileDiscovery.rotateSecret")
			}) : null, /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				disabled: !n.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
async function Sc(e) {
	let t;
	try {
		t = await $t();
	} catch {
		return !0;
	}
	if (!Gn(t)) return !0;
	let { confirmed: n } = await Ut({
		title: J("settings:mediaLibraries.processingRunning"),
		body: er(t, e),
		confirmLabel: J("settings:mediaLibraries.saveAnyway")
	});
	return n;
}
var Cc = (e) => $r.find(([t]) => t === e)?.[1] ?? e, wc = [...$r, ["smb", J("settings:mediaLibraries.smbShare")]], Tc = (e) => e.library_icon || cc(e.transport === "smb" ? "smb" : e.location)[0], Ec = async (e) => Vn(e, (e) => W(Re, e)), Dc = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), Oc = (e) => e.library_stages ? fc.filter((t) => e.library_stages.split(",").includes(t)) : [], kc = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: Jn(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function Ac(e) {
	let t = e.media_sources?.filter((e) => $r.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || Jn(),
		cost: e.cost ?? mr(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => kc(e));
}
var jc = (e) => !(e instanceof p) || e.status !== 400 ? null : Ft(e.body) ?? null;
function Mc({ data: e, receipt: t }) {
	let n = !e.section_errors?.media_sources && !e.section_errors?.library_count, r = !!e.media_sources?.some((e) => ri(e.location));
	return (0, Z.useEffect)(() => {
		if (n && e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of Ac(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			Xn("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		n && t && Xn("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [
		e,
		r,
		n
	]), /* @__PURE__ */ (0, $.jsx)(_a, { entries: [
		n && {
			id: "library-folders",
			label: J("settings:libraryFolders.title"),
			content: e.editable ? /* @__PURE__ */ (0, $.jsx)(Nc, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "neutral",
				title: J("settings:mediaLibraries.readOnly"),
				children: e.notice
			})
		},
		n && !e.editable && !!e.media_sources && {
			id: "library-mounts",
			label: J("settings:mountStatus.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Fc, { data: e })
		},
		n && r && {
			id: "library-cloud-proxy",
			label: J("settings:cloudProxy.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Gs, { receipt: t })
		},
		n && e.push_discovery && {
			id: "library-discovery",
			label: J("settings:fileDiscovery.title"),
			content: /* @__PURE__ */ (0, $.jsx)(xc, {
				initial: e.push_discovery,
				receipt: t
			})
		},
		{
			id: "library-code-patterns",
			label: J("settings:codePatterns.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Ys, { receipt: t })
		},
		{
			id: "library-video-previews",
			label: J("settings:videoPreviews.title"),
			content: /* @__PURE__ */ (0, $.jsx)(ic, { receipt: t })
		},
		{
			id: "library-transcoding",
			label: J("settings:transcoding.title"),
			content: /* @__PURE__ */ (0, $.jsx)(oc, { receipt: t })
		},
		{
			id: "library-task-speed",
			label: J("settings:taskSpeed.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Qs, { receipt: t })
		}
	] });
}
function Nc({ data: e, receipt: t }) {
	let { checked: n, checkFailed: r } = Wr(), { rows: i, edit: a, add: o, remove: s, errors: c, setErrors: l, picking: u, pick: d, inputRef: f } = ai({
		initial: () => Ac(e),
		blank: () => kc(),
		pickFolder: Ec,
		describe: q
	}), [p, h] = (0, Z.useState)(!1), g = X({
		queryKey: Ne,
		queryFn: ({ signal: e }) => en(e)
	}, qn).data?.metadata_only === !0, [_, v] = (0, Z.useState)(!1), [y, x] = (0, Z.useState)(""), [S, C] = (0, Z.useState)({}), [w, T] = (0, Z.useState)(null), E = (0, Z.useRef)(e.revision), ee = (0, Z.useRef)(!1), D = Y();
	Or();
	let te = (e, t) => {
		i.forEach((n, r) => {
			n.library_id === i[e].library_id && a(r, t);
		});
	}, k = Nr([...i.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], (e) => e.library_id), [ne, re] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!ne) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(ne)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), re(null);
	}, [ne]);
	let ie = (e, t) => {
		let n = i.find((e) => e.library_id === t);
		if (n) {
			a(e, Dc(n));
			return;
		}
		let r = Jn();
		a(e, {
			library_id: r,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), re(r);
	};
	(0, Z.useEffect)(() => {
		if (!w) return;
		let e = setTimeout(() => location.assign(w.url), zs);
		return () => clearTimeout(e);
	}, [w]);
	let ae = (e) => {
		e.preventDefault();
		let t = i.findIndex((e) => !e.cost);
		if (t >= 0) {
			v(!0);
			let n = e.currentTarget;
			requestAnimationFrame(() => n.querySelector(`[data-media-read-policy="${t}"] button`)?.focus());
		} else D.busy || ee.current || (x(""), ee.current = !0, Sc(p).then((e) => {
			ee.current = !1, e && oe();
		}));
	}, oe = () => {
		D.run("save", (t) => W(b, {
			revision: E.current,
			media_dirs: i.map((e) => e.path),
			...e.media_sources ? { media_sources: i } : {},
			port: String(e.port),
			scan_now: p
		}, "POST", t), (e) => {
			E.current = e.revision, l([]), t(J("settings:shared.settingsSaved")), T(e);
		}, (e) => {
			let t = jc(e);
			l(t?.media_dirs ?? []), (!t || t.port) && x(t?.port || q(e));
		});
	};
	if (w) return /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)(F, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [
				J("settings:mediaLibraries.restartingRedirect"),
				/* @__PURE__ */ (0, $.jsx)(Ae, {
					href: w.url,
					size: "small",
					children: J("settings:mediaLibraries.goToCollection")
				}),
				J("shell:format.period")
			]
		}) })
	});
	let se = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), ce = i.some((e) => ri(e.location)), le = ce ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		onSubmit: ae,
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(mc, {}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				role: "group",
				"aria-label": J("settings:libraryFolders.title"),
				className: "flex flex-col gap-4",
				children: k.map((e) => {
					let t = i.findIndex((t) => t.library_id === e.library_id), l = i.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), p = e.library_policy, h = e.library || J("settings:mediaLibraries.untitled");
					return /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Lt({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, $.jsx)(uc, {
										label: J("settings:mediaLibraries.iconLabel", { name: h }),
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => te(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(P, {
										className: "w-full",
										"aria-label": J("settings:mediaLibraries.nameLabel", { name: h }),
										maxLength: 80,
										placeholder: J("settings:mediaLibraries.namePlaceholder"),
										value: e.library,
										onChange: (e) => te(t, { library: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(_c, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => te(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(hc, {
										name: h,
										value: p,
										onChange: (n) => te(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || fc.join(",") : ""
										})
									})
								]
							}),
							p === "custom" ? /* @__PURE__ */ (0, $.jsx)(gc, {
								name: h,
								value: Oc(e),
								previewsOff: g,
								onChange: (e) => te(t, { library_stages: fc.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": J("settings:mediaLibraries.directoriesLabel", { name: h }),
								children: [l.map(({ row: t, index: o }) => /* @__PURE__ */ (0, $.jsxs)(Qr, {
									label: J("settings:mediaLibraries.directoryLabel", { index: o + 1 }),
									path: t.path,
									onPath: (e) => a(o, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: c[o],
									inputRef: f(o),
									picking: u === o,
									onPick: () => void d(o),
									onRemove: i.length > 1 ? () => s(o) : void 0,
									status: se(t) ? /* @__PURE__ */ (0, $.jsx)(Pc, { online: se(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, $.jsxs)(Zr, { children: [
										/* @__PURE__ */ (0, $.jsx)(ni, {
											index: o,
											value: t.transport === "smb" ? "smb" : t.location,
											options: wc,
											onChange: (e) => {
												let n = e === "smb";
												a(o, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), C((e) => {
													let t = { ...e };
													return delete t[o], t;
												});
											}
										}),
										/* @__PURE__ */ (0, $.jsx)(ei, {
											index: o,
											cost: t.cost,
											onChange: (e) => a(o, { cost: e }),
											error: _ && !t.cost ? J("settings:mediaLibraries.readPolicyRequired") : void 0
										}),
										t.root_id && !se(t) ? /* @__PURE__ */ (0, $.jsx)(Xr, {
											label: J("settings:mediaLibraries.changeType"),
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, $.jsxs)(R, {
												className: "w-full",
												"aria-label": J("settings:mediaLibraries.changeTypeLabel", { index: o + 1 }),
												placeholder: J("settings:mediaLibraries.changeTypePlaceholder"),
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? a(o, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : a(o, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, $.jsx)(z, {
													id: "relocate",
													children: J("settings:mediaLibraries.relocate")
												}), /* @__PURE__ */ (0, $.jsx)(z, {
													id: "add",
													children: J("settings:mediaLibraries.addAnother")
												})]
											})
										}) : null,
										k.length > 1 ? /* @__PURE__ */ (0, $.jsx)(Xr, {
											label: J("settings:mediaLibraries.moveTo"),
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, $.jsxs)(R, {
												className: "w-full",
												"aria-label": J("settings:mediaLibraries.moveToLabel", { index: o + 1 }),
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, $.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: Tc(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
														className: "truncate",
														children: h
													})]
												}),
												onSelectionChange: (e) => {
													e && ie(o, String(e));
												},
												children: [k.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
													id: e.library_id,
													textValue: e.library || J("settings:mediaLibraries.untitled"),
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: Tc(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
															className: "truncate",
															children: e.library || J("settings:mediaLibraries.untitled")
														})]
													})
												}, e.library_id)), l.length > 1 ? /* @__PURE__ */ (0, $.jsx)(z, {
													id: "new",
													textValue: J("settings:mediaLibraries.newLibrary"),
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: "plus" }), /* @__PURE__ */ (0, $.jsx)("span", { children: J("settings:mediaLibraries.newLibrary") })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, $.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, $.jsxs)(Zr, { children: [/* @__PURE__ */ (0, $.jsx)(Xr, {
												label: J("settings:smbShare.account"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(P, {
													"aria-label": J("settings:smbShare.accountLabel", { index: o + 1 }),
													value: t.smb_username || "",
													autoComplete: "off",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, $.jsx)(Xr, {
												label: J("settings:smbShare.password"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(P, {
													"aria-label": J("settings:smbShare.passwordLabel", { index: o + 1 }),
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? J("settings:smbShare.keepPassword") : "",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, $.jsx)(O, {
												isSelected: t.smb_encrypt || !1,
												isDisabled: t.smb_clear,
												onChange: (e) => a(o, { smb_encrypt: e }),
												children: J("settings:smbShare.requireEncryption")
											}),
											/* @__PURE__ */ (0, $.jsx)(O, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => a(o, { smb_clear: e }),
												children: J("settings:smbShare.removeAccount")
											}),
											/* @__PURE__ */ (0, $.jsx)(m, {
												className: "self-start",
												variant: "secondary",
												...G(D.busy === `smb-${o}`),
												onClick: () => void D.run(`smb-${o}`, (e) => W("/api/configuration/smb/test", t, "POST", e), (e) => {
													let t = J("settings:smbShare.readable");
													C((n) => ({
														...n,
														[o]: {
															message: t,
															directories: e.directories
														}
													})), n(t);
												}, (e) => {
													let t = q(e);
													C((e) => ({
														...e,
														[o]: {
															message: t,
															directories: []
														}
													})), r(J("settings:connectionCheck.action", { service: "SMB" }), t);
												}),
												children: J("settings:smbShare.testConnection")
											}),
											S[o] ? /* @__PURE__ */ (0, $.jsx)(N, { children: S[o].message }) : null,
											S[o]?.directories.length ? /* @__PURE__ */ (0, $.jsx)(R, {
												"aria-label": J("settings:smbShare.subdirectoryLabel", { index: o + 1 }),
												placeholder: J("settings:smbShare.openSubdirectory"),
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (a(o, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), C((e) => ({
														...e,
														[o]: {
															message: J("settings:smbShare.testSubdirectory"),
															directories: []
														}
													})));
												},
												children: S[o].directories.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:smbShare.help") })
										]
									}) : null]
								}, o)), /* @__PURE__ */ (0, $.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, $.jsx)(m, {
										variant: "secondary",
										"aria-label": J("settings:mediaLibraries.addDirectoryLabel", { name: h }),
										onClick: () => {
											o(), a(i.length, {
												...Dc(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: J("settings:mediaLibraries.addDirectory")
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				className: "self-start",
				onClick: o,
				children: J("settings:mediaLibraries.addLibrary")
			}),
			/* @__PURE__ */ (0, $.jsx)(N, { children: we }),
			ce ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(ti, {}), /* @__PURE__ */ (0, $.jsx)(Hs, {})] }) : null,
			le.map((e) => /* @__PURE__ */ (0, $.jsxs)(N, { children: [
				J("settings:mediaLibraries.dependencyMissingName", { name: e.name }),
				J("shell:format.sentenceGap"),
				/* @__PURE__ */ (0, $.jsxs)(ge, {
					href: e.download_url,
					children: [
						J("settings:shared.download"),
						" ",
						e.name
					]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, $.jsx)(O, {
				isSelected: p,
				onChange: h,
				children: J("settings:mediaLibraries.scanAfterSave")
			}),
			y ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: y
			}) : null
		] }), /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:libraryFolders.restartNotice"),
			children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				...G(D.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		})]
	});
}
function Pc({ online: e }) {
	return /* @__PURE__ */ (0, $.jsx)(Gr, { online: e });
}
function Fc({ data: e }) {
	let t = e.media_sources, n = Y(), { checked: r, checkFailed: i } = Wr();
	return t ? /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "mounts",
		title: J("settings:mountStatus.title"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(be, { children: t.map((e, t) => /* @__PURE__ */ (0, $.jsxs)(j, {
				term: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(vt, { mark: ii(e.location) }), Cc(e.location)] }),
				children: [e.path || J("settings:mountStatus.notConfigured"), /* @__PURE__ */ (0, $.jsx)(Pc, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(A, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => Zt(e), (e) => {
					qn.setQueryData(v, e), !e.section_errors?.media_sources && e.media_sources ? r(J("settings:mountStatus.refreshed")) : i(J("settings:mountStatus.refresh"), e.section_errors?.media_sources?.message || J("settings:shared.notFound"));
				}, (e) => {
					let t = q(e);
					n.setError(t), i(J("settings:mountStatus.refresh"), t);
				}),
				...G(n.busy === "refresh"),
				children: J("settings:mountStatus.refresh")
			}) })
		]
	}) : null;
}
// src/react/settings/password-pair.tsx
function Ic({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, $.jsx)(P, {
		id: "access-confirm",
		type: "password",
		label: J("settings:accessPassword.confirm"),
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
var Lc = {
	legacy: J("settings:accessPassword.legacyHelp"),
	locked: J("settings:accessPassword.lockedHelp"),
	password: J("settings:accessPassword.passwordHelp")
};
function Rc({ initial: e, receipt: t, devices: n, after: r, onSaved: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(!1), [_, v] = (0, Z.useState)({}), y = (0, Z.useRef)(null), b = Y(), x = (e) => {
		e.preventDefault();
		let n = {};
		a.mode === "password" && !s && (n.current_password = J("settings:accessPassword.enterCurrent")), h || ((l.length < 8 || l.length > 256) && (n.password = J("settings:accessPassword.lengthError")), l !== d && (n.confirmation = J("settings:accessPassword.mismatch"))), v(n), Object.keys(n).length ? requestAnimationFrame(() => y.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : b.run("save", (e) => W("/api/configuration/access", {
			revision: a.revision,
			action: h ? "disable" : "set",
			confirm_disable: h,
			current_password: s,
			password: h ? "" : l,
			confirmation: h ? "" : d
		}, "POST", e), (e) => {
			o(e), c(""), u(""), f(""), g(!1), v({}), i?.(e), t(e.mode === "open" ? J("settings:accessPassword.turnedOff") : J("settings:shared.settingsSaved"));
		}, (e) => {
			let t = e instanceof p ? e.body : null, n = Ft(t) || Ft(t?.detail);
			n ? v(n) : b.setError(q(e));
		});
	}, S = Lc[a.mode], C = a.mode !== "locked";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)(L, {
			guide: "access",
			title: J("settings:accessPassword.title"),
			onSubmit: x,
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				ref: y,
				children: /* @__PURE__ */ (0, $.jsxs)(V, { children: [
					S ? /* @__PURE__ */ (0, $.jsx)(N, { children: S }) : null,
					a.mode === "open" ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:accessPassword.notSet"),
						children: J("settings:accessPassword.openWarning")
					}) : null,
					a.mode === "password" || a.mode === "legacy" ? /* @__PURE__ */ (0, $.jsx)(O, {
						isSelected: h,
						onChange: g,
						children: J("settings:accessPassword.turnOff")
					}) : null,
					a.mode === "password" ? /* @__PURE__ */ (0, $.jsx)(P, {
						id: "access-current",
						type: "password",
						label: J("settings:accessPassword.current"),
						autoComplete: "current-password",
						maxLength: 256,
						value: s,
						onChange: c,
						isRequired: !0,
						validationBehavior: "aria",
						isInvalid: !!_.current_password,
						hint: _.current_password
					}) : null,
					C && !h ? /* @__PURE__ */ (0, $.jsx)(Ic, {
						label: a.mode === "password" ? J("settings:accessPassword.new") : J("settings:accessPassword.set"),
						password: l,
						confirmation: d,
						onPassword: u,
						onConfirmation: f,
						passwordError: _.password,
						confirmationError: _.confirmation,
						passwordHint: J("settings:accessPassword.newHelp")
					}) : null,
					h ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:accessPassword.scope"),
						children: J("settings:accessPassword.disableWarning")
					}) : null,
					b.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: b.error }) : null
				] })
			}), C ? /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				...G(b.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) }) : null]
		}),
		n && (a.mode === "password" || a.mode === "legacy") ? n(a) : null,
		r ? r(a) : null
	] });
}
// src/react/settings/api-token-settings.tsx
var zc = "/api/configuration/access/token/rotate";
function Bc(e, t) {
	let n = J("settings:accessToken.scriptsInvalidated"), r = J(e === "legacy" ? "settings:accessToken.rotateEffectLegacy" : e === "open" ? "settings:accessToken.rotateEffectOpen" : "settings:accessToken.rotateEffectPassword", { scripts: n });
	return t ? J("settings:accessToken.rotateEffectPaired", { sentence: r }) : r;
}
function Vc({ initial: e, mode: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(null), s = Y(), c = Fr();
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:accessToken.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:accessToken.help") }),
			a ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(P, {
							className: "min-w-0 flex-1",
							label: J("settings:accessToken.newToken"),
							value: a.token,
							isReadOnly: !0,
							autoComplete: "off"
						}), /* @__PURE__ */ (0, $.jsx)(m, {
							variant: "secondary",
							"aria-label": J("settings:accessToken.copyNew"),
							onClick: () => void s.run("copy", () => navigator.clipboard.writeText(a.token), () => n(J("settings:accessToken.copied"))),
							children: J("settings:accessToken.copy")
						})]
					}),
					s.error ? /* @__PURE__ */ (0, $.jsx)(N, {
						role: "status",
						children: J("settings:accessToken.copyFailed")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(F, {
						tone: "info",
						title: J("settings:accessToken.shownOnce"),
						children: J("settings:accessToken.shownOnceHelp")
					})
				]
			}) : null,
			a?.relogin ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "warning",
				title: J("settings:accessToken.reloginTitle"),
				children: J("settings:accessToken.reloginHelp")
			}) : null,
			r.rotatable ? null : /* @__PURE__ */ (0, $.jsx)(N, { children: r.reason })
		] }), r.rotatable ? /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:accessToken.immediate"),
			children: /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				onClick: () => void Ut({
					title: J("settings:accessToken.rotateTitle"),
					body: Bc(t, r.paired),
					confirmLabel: J("settings:accessToken.rotate"),
					onConfirm: async () => {
						let e = await W(zc, {});
						i(e), o(e), e.mode === "legacy" && c.invalidateQueries({ queryKey: ["access-sessions"] }), n(e.signed_out ? J("settings:accessToken.rotatedSignedOut", { count: e.signed_out }) : J("settings:accessToken.rotated"));
					}
				}),
				children: J("settings:accessToken.rotate")
			})
		}) : null]
	});
}
// src/react/settings/certificate-trust.tsx
function Hc({ rows: e, label: t }) {
	let n = e.length + 8, r = e.flatMap((e, t) => [...e].flatMap((e, n) => e === "1" ? [`M${n + 4} ${t + 4}h1v1h-1z`] : [])).join("");
	return /* @__PURE__ */ (0, $.jsx)("svg", {
		role: "img",
		"aria-label": t,
		viewBox: `0 0 ${n} ${n}`,
		shapeRendering: "crispEdges",
		className: "size-40 shrink-0 rounded-lg bg-white text-black",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			d: r,
			fill: "currentColor"
		})
	});
}
var Uc = [
	[J("settings:certificateTrust.iosDevices"), J("settings:certificateTrust.iosSteps")],
	["Android", J("settings:certificateTrust.androidSteps")],
	[J("settings:certificateTrust.computer"), J("settings:certificateTrust.computerSteps")]
];
function Wc({ initial: e }) {
	let t = Math.max(60, e.expires_in - 60) * 1e3, n = X({
		queryKey: ["ca-certificate"],
		initialData: e,
		queryFn: ({ signal: e }) => U("/api/configuration/certificate", e),
		staleTime: t,
		refetchInterval: t,
		refetchOnMount: !0,
		refetchOnWindowFocus: !0
	}), r = n.data, i = n.isError, a = r.fingerprint.split(":"), o = [
		0,
		8,
		16,
		24
	].map((e) => a.slice(e, e + 8).join(":"));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:certificateTrust.title"),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.help") }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-start gap-4",
				children: [i ? /* @__PURE__ */ (0, $.jsx)(F, {
					tone: "error",
					title: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": "settings.certificateTrust.qrRefreshFailed",
						children: J("settings:certificateTrust.qrRefreshFailed")
					}),
					action: /* @__PURE__ */ (0, $.jsx)(m, {
						size: "small",
						variant: "secondary",
						disabled: n.isFetching,
						onClick: () => void n.refetch(),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": "settings.certificateTrust.qrRetry",
							children: J("settings:certificateTrust.qrRetry")
						})
					}),
					children: q(n.error)
				}) : n.isStale ? /* @__PURE__ */ (0, $.jsx)(N, {
					role: "status",
					children: J("settings:certificateTrust.qrRefreshing")
				}) : /* @__PURE__ */ (0, $.jsx)(Hc, {
					rows: r.qr,
					label: J("settings:certificateTrust.qrLabel")
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-1 basis-64 flex-col gap-2",
					children: [/* @__PURE__ */ (0, $.jsxs)(be, { children: [/* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:certificateTrust.fingerprint"),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							className: "flex max-w-sm flex-wrap justify-end gap-x-2 font-mono text-caption-1-regular",
							children: o.map((e, t) => /* @__PURE__ */ (0, $.jsx)("span", {
								className: "whitespace-nowrap",
								children: e
							}, t))
						})
					}), /* @__PURE__ */ (0, $.jsx)(j, {
						term: J("settings:certificateTrust.validUntil"),
						children: r.not_after
					})] }), !i && !n.isStale ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.qrHelp") }) : null]
				})]
			})] }),
			/* @__PURE__ */ (0, $.jsx)(I, { children: Uc.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(B, {
				label: e,
				description: t
			}, e)) }),
			/* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:certificateTrust.verifyHelp") })
			}),
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(h, {
				href: r.download,
				download: "peach-local-ca.crt",
				leadingIcon: Vr,
				children: J("settings:certificateTrust.download")
			}) })
		]
	});
}
// src/react/settings/device-sessions.tsx
var Gc = "/api/configuration/access/sessions", Kc = (e) => e.device || J("settings:deviceSessions.unknownBrowser"), qc = {
	glyph: Ce,
	brand: "apple"
}, Jc = {
	glyph: Mn,
	brand: "android"
}, Yc = {
	iPhone: {
		platform: qc,
		terminal: kt
	},
	iPad: {
		platform: qc,
		terminal: me
	},
	Android: {
		platform: Jc,
		terminal: kt
	},
	"Android tablet": {
		platform: Jc,
		terminal: me,
		label: () => J("settings:deviceSessions.androidTablet")
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: Ur
	},
	Windows: {
		platform: {
			glyph: Et,
			brand: "windows"
		},
		terminal: Ur
	},
	macOS: {
		platform: qc,
		terminal: Ur
	},
	Linux: { terminal: Ur }
}, Xc = "inline size-4 -mt-0.5 mr-1 align-middle";
function Zc({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, $.jsx)(oi, {
		name: e.browser,
		className: Xc
	});
	let { glyph: t, brand: n } = e;
	return /* @__PURE__ */ (0, $.jsx)(t, {
		"aria-hidden": !0,
		"data-platform-mark": n,
		className: Xc
	});
}
function Qc({ row: e }) {
	if (!e.device) return Kc(e);
	let t = e.device.split(" · "), n = Yc[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? Yc[n].platform : void 0;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		r ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [si(r) ? /* @__PURE__ */ (0, $.jsx)(oi, {
			name: r,
			className: Xc
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i ? /* @__PURE__ */ (0, $.jsx)(Zc, { platform: i }) : null, Yc[n].label?.() ?? n] }) : null
	] });
}
function $c({ row: e }) {
	let t = Yc[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? Jt;
	return /* @__PURE__ */ (0, $.jsx)(t, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
function el({ row: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)($c, { row: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, $.jsx)(Qc, { row: e })
				}), /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: rl(e)
				})]
			})]
		}), t]
	});
}
function tl(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? J("settings:deviceSessions.justNow") : n < 3600 ? J("settings:deviceSessions.minutesAgo", { count: Math.floor(n / 60) }) : n < 86400 ? J("settings:deviceSessions.hoursAgo", { count: Math.floor(n / 3600) }) : n < 2592e3 ? J("settings:deviceSessions.daysAgo", { count: Math.floor(n / 86400) }) : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString(wn);
}
function nl(e) {
	return e.network === "loopback" ? J("settings:deviceSessions.loopback") : e.network ? e.remote ? J("settings:deviceSessions.viaRemoteAccess", { network: e.network }) : e.network : "";
}
var rl = (e) => [J("settings:deviceSessions.lastActive", { time: tl(e.last_seen) }), nl(e)].filter(Boolean).join(" · ");
function il({ revision: e, receipt: t }) {
	let n = X({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => U(Gc, e)
	});
	return n.error ? /* @__PURE__ */ (0, $.jsx)(L, {
		title: J("settings:signedInDevices.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(Je, {
			titleKey: "settings:deviceSessions.loadFailed",
			query: n
		}) })
	}) : n.isFetching || !n.data ? /* @__PURE__ */ (0, $.jsx)(at, {
		label: J("settings:deviceSessions.loading"),
		html: Yt
	}) : /* @__PURE__ */ (0, $.jsx)(al, {
		initial: n.data,
		receipt: t
	});
}
function al({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e);
	(0, Z.useEffect)(() => r(e), [e]);
	let i = n.sessions.filter((e) => !e.current);
	(0, Z.useEffect)(() => {
		Xn("devices", {
			rows: Math.min(n.sessions.length, 8),
			manageable: n.manageable && i.length > 0
		});
	}, [n, i.length]);
	let a = (e) => void Ut({
		title: J("settings:deviceSessions.revokeTitle"),
		body: J("settings:deviceSessions.revokeBody", {
			device: Kc(e),
			details: rl(e)
		}),
		confirmLabel: J("settings:deviceSessions.revokeConfirm"),
		onConfirm: async () => {
			r(await W(`${Gc}/revoke`, {
				revision: n.revision,
				id: e.id
			})), t(J("settings:deviceSessions.revoked"));
		}
	});
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:signedInDevices.title"),
		children: [
			n.sessions.length ? /* @__PURE__ */ (0, $.jsx)(I, { children: n.sessions.map((e) => /* @__PURE__ */ (0, $.jsx)(el, {
				row: e,
				children: e.current ? /* @__PURE__ */ (0, $.jsx)(k, {
					color: "blue",
					variant: "caption",
					children: J("settings:deviceSessions.thisDevice")
				}) : n.manageable ? /* @__PURE__ */ (0, $.jsx)(m, {
					size: "small",
					variant: "secondary",
					"aria-label": J("settings:deviceSessions.revokeDevice", { device: Kc(e) }),
					onClick: () => a(e),
					children: J("settings:deviceSessions.revoke")
				}) : null
			}, e.id)) }) : /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:deviceSessions.empty") }) }),
			!n.manageable && i.length ? /* @__PURE__ */ (0, $.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:deviceSessions.serverOnly") })
			}) : null,
			n.manageable && i.length ? /* @__PURE__ */ (0, $.jsx)(M, {
				status: J("settings:signedInDevices.passwordChangeNotice"),
				children: /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "secondary",
					onClick: () => void Ut({
						title: J("settings:deviceSessions.revokeOthersTitle"),
						body: J("settings:deviceSessions.revokeOthersBody", { count: i.length }),
						confirmLabel: J("settings:deviceSessions.revokeConfirm"),
						onConfirm: async () => {
							let e = await W(`${Gc}/revoke`, {
								revision: n.revision,
								scope: "others"
							});
							r(e), t(J("settings:deviceSessions.revokedCount", { count: e.removed }));
						}
					}),
					children: J("settings:signedInDevices.revokeOthers")
				})
			}) : null
		]
	});
}
// src/react/settings/port-settings.tsx
var ol = [{
	value: "0.0.0.0",
	label: J("settings:accessAddress.lanDevices")
}, {
	value: "127.0.0.1",
	label: J("settings:accessAddress.thisComputerOnly")
}];
function sl({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, d] = (0, Z.useState)({}), [f, h] = (0, Z.useState)(null), g = Y();
	return (0, Z.useEffect)(() => {
		if (!f) return;
		let e = setTimeout(() => location.assign(f.url), zs);
		return () => clearTimeout(e);
	}, [f]), f ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsxs)(F, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [J("settings:accessAddress.restarting"), /* @__PURE__ */ (0, $.jsx)(Ae, {
				href: f.url,
				size: "small",
				children: J("settings:accessAddress.backToNetwork")
			})]
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		onSubmit: r ? (r) => {
			r.preventDefault(), d({}), g.run("save", (t) => W(b, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: c,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				h({ url: new URL("/settings/network", e.url).href }), t(J("settings:shared.settingsSaved"));
			}, (e) => {
				let t = e instanceof p && e.status === 400 ? Ft(e.body) : null;
				t && (t.port || t.host || t.mdns_name) ? d(t) : g.setError(q(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(cl, {
				label: J("settings:accessAddress.localUrl"),
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(cl, {
					label: J("settings:accessAddress.phoneUrl"),
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, $.jsx)(cl, {
					label: J("settings:accessAddress.alternateIp"),
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)(N, { children: [J("settings:accessAddress.sameWifi"), n.ip_url && n.lan_url ? J("settings:accessAddress.tryIp") : ""] })
			] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: n.scope === "local" ? J("settings:accessAddress.localOnly") : J("settings:accessAddress.lanUnavailable") })] }) : null,
			r ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(us, {
				id: "configHost",
				label: J("settings:accessAddress.whoCanConnect"),
				value: i,
				onChange: a,
				options: ol,
				isDisabled: !!g.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, $.jsx)(A, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, $.jsx)(ds, {
				id: "configMdnsName",
				label: J("settings:accessUrls.lanUrl"),
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!g.busy,
				validationBehavior: "aria",
				isInvalid: !!u.mdns_name,
				hint: u.mdns_name || void 0
			}) : null] }) : null, /* @__PURE__ */ (0, $.jsx)(ds, {
				id: "configPort",
				label: J("settings:accessUrls.port"),
				prefix: "localhost:",
				inputMode: "numeric",
				value: c,
				onChange: l,
				isDisabled: !!g.busy,
				validationBehavior: "aria",
				isInvalid: !!u.port,
				hint: u.port
			})] }) : /* @__PURE__ */ (0, $.jsx)(N, { children: e.notice || J("settings:accessAddress.managedByStartup") }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("settings:accessAddress.phoneUrlAfterRestart") }) : null,
			g.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: g.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, $.jsx)(M, {
			status: J("settings:accessUrls.restartNotice"),
			children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				...G(g.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		}) : null]
	});
}
function cl({ label: e, value: t, receipt: n }) {
	let r = Y();
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(P, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				"aria-label": J("settings:accessAddress.copyLabel", { label: e }),
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n(J("settings:accessAddress.copied"))),
				children: J("settings:accessAddress.copyUrl")
			})]
		}), r.error ? /* @__PURE__ */ (0, $.jsx)(N, {
			role: "status",
			children: J("settings:accessAddress.copyFailed")
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var ll = [
	["environment", J("settings:peachProxy.environment")],
	["direct", J("settings:cloudProxy.direct")],
	["proxy", J("settings:shared.custom")]
];
function ul({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, $.jsx)(R, {
		"aria-label": n ? void 0 : J("settings:peachProxy.mode"),
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: ll.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(z, {
			id: e,
			children: t
		}, e))
	});
}
function dl({ id: e, value: t, onChange: n, saved: r = !1, required: i, error: a }) {
	return /* @__PURE__ */ (0, $.jsx)(P, {
		id: e,
		type: "password",
		label: J("settings:peachProxy.url"),
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? J("settings:peachProxy.savedPlaceholder") : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isRequired: i,
		isInvalid: !!a,
		hint: a
	});
}
// src/react/settings/tunnel-settings.tsx
var fl = 2e3, pl = 3e5, ml = [["quick", J("settings:cloudflareTunnel.quick")], ["named", J("settings:cloudflareTunnel.named")]], hl = {
	quick: J("settings:remoteAccess.quickHelp"),
	named: J("settings:remoteAccess.namedHelp")
};
function gl({ revision: e, initial: t, receipt: n, blocked: r = !1 }) {
	let [i, a] = (0, Z.useState)(t);
	(0, Z.useEffect)(() => {
		r && a((e) => e.state === "stopped" ? e : {
			...e,
			enabled: !1,
			state: "stopped",
			url: ""
		});
	}, [r]);
	let [s, c] = (0, Z.useState)(e), [l, u] = (0, Z.useState)(t.mode), [d, f] = (0, Z.useState)(t.hostname), [h, g] = (0, Z.useState)(""), [_, y] = (0, Z.useState)({}), b = Y(), x = i.state === "starting" || i.state === "running", S = i.named_available && l === "named";
	(0, Z.useEffect)(() => {
		if (i.state !== "starting") return;
		let e = new AbortController();
		return Un({
			signal: e.signal,
			everyMs: fl,
			limitMs: pl,
			read: (e) => Zt(e),
			apply: (e) => {
				e.tunnel && (qn.setQueryData(v, e), a(e.tunnel), c(e.revision));
			},
			done: (e) => !!e.tunnel && e.tunnel.state !== "starting"
		}), () => e.abort();
	}, [i.state]);
	let C = (e, t, n) => {
		y({}), b.run(e, (e) => W("/api/configuration/tunnel", {
			revision: s,
			enabled: t,
			mode: l,
			hostname: d,
			token: h
		}, "POST", e), (e) => {
			a(e), c(e.revision), u(e.mode), f(e.hostname), g(""), n(e);
		}, (e) => {
			let t = e instanceof p ? e.body : null, n = Ft(t) || Ft(t?.detail);
			n ? y(n) : b.setError(q(e));
		});
	};
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		id: "tunnel",
		guide: "tunnel",
		title: J("settings:remoteAccess.title"),
		onSubmit: (e) => {
			e.preventDefault(), C("save", x, () => n(J("settings:shared.settingsSaved")));
		},
		aside: /* @__PURE__ */ (0, $.jsx)(H, {
			tone: i.error ? "error" : x ? "progress" : "neutral",
			children: i.error ? J("settings:cloudflareTunnel.connectionFailed") : i.state === "running" ? J("settings:shared.running") : i.state === "starting" ? J("settings:cloudflareTunnel.connectingStatus") : J("settings:shared.stopped")
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			i.named_available ? /* @__PURE__ */ (0, $.jsx)(ct, {
				"aria-label": J("settings:cloudflareTunnel.modeLabel"),
				value: l,
				isDisabled: x || r,
				onChange: (e) => u(e),
				className: nt,
				children: ml.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(o, {
					value: e,
					className: tt,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(N, { children: hl[S ? "named" : "quick"] }),
			S ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, {
				id: "tunnel-hostname",
				label: J("settings:remoteAccess.hostname"),
				autoComplete: "off",
				maxLength: 253,
				value: d,
				onChange: f,
				isDisabled: x || r,
				validationBehavior: "aria",
				isInvalid: !!_.hostname,
				hint: _.hostname || J("settings:remoteAccess.hostnameHelp")
			}), /* @__PURE__ */ (0, $.jsx)(P, {
				id: "tunnel-token",
				type: "password",
				label: J("settings:remoteAccess.tunnelToken"),
				autoComplete: "off",
				maxLength: 2048,
				value: h,
				onChange: g,
				isDisabled: x || r,
				validationBehavior: "aria",
				hint: i.token_set ? J("settings:cloudflareTunnel.tokenSaved") : J("settings:cloudflareTunnel.tokenHint")
			})] }) : null,
			i.available ? null : /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "warning",
				title: J("settings:cloudflareTunnel.binaryMissing"),
				children: J("settings:cloudflareTunnel.binaryMissingHelp")
			}),
			i.state === "running" && i.url ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "info",
				title: J("settings:cloudflareTunnel.publicUrl"),
				children: /* @__PURE__ */ (0, $.jsx)(ge, {
					href: i.url,
					children: i.url
				})
			}) : null,
			i.state === "starting" ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "info",
				title: J("settings:cloudflareTunnel.connectingTitle"),
				children: J("settings:cloudflareTunnel.connectingHelp")
			}) : null,
			i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: K(i, "error") }) : null,
			b.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: b.error }) : null
		] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
			variant: i.named_available ? "secondary" : "primary",
			onClick: () => C("toggle", !x, (e) => n(e.enabled ? J("settings:cloudflareTunnel.started") : J("settings:cloudflareTunnel.stopped"))),
			...G(b.busy === "toggle"),
			disabled: r && !x,
			children: J(x ? "settings:cloudflareTunnel.stop" : "settings:remoteAccess.start")
		}), i.named_available ? /* @__PURE__ */ (0, $.jsx)(m, {
			type: "submit",
			...G(b.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) : null] })]
	});
}
// src/react/settings/network-settings.tsx
function _l({ data: e, receipt: t, issues: n }) {
	let [r, i] = (0, Z.useState)(e.access?.mode), a = r === "open" || r === "locked";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n, /* @__PURE__ */ (0, $.jsx)(_a, { entries: [
		(!!e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources) && {
			id: "network-addresses",
			label: J("settings:accessUrls.title"),
			content: /* @__PURE__ */ (0, $.jsx)(sl, {
				data: e,
				receipt: t
			})
		},
		e.access && {
			id: "network-access",
			label: J("settings:accessPassword.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Rc, {
				initial: e.access,
				receipt: t,
				onSaved: (e) => i(e.mode),
				devices: (e) => /* @__PURE__ */ (0, $.jsx)(il, {
					revision: e.revision,
					receipt: t
				}),
				after: e.api_token ? (n) => /* @__PURE__ */ (0, $.jsx)(Vc, {
					initial: e.api_token,
					mode: n.mode,
					receipt: t
				}) : void 0
			})
		},
		e.certificate && {
			id: "network-certificate",
			label: J("settings:certificateTrust.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Wc, { initial: e.certificate })
		},
		e.tunnel && {
			id: "network-tunnel",
			label: J("settings:remoteAccess.title"),
			content: /* @__PURE__ */ (0, $.jsx)(gl, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t,
				blocked: a
			})
		},
		e.peach_proxy && {
			id: "peachProxy",
			label: J("settings:peachProxy.title"),
			content: /* @__PURE__ */ (0, $.jsx)(vl, {
				initial: e.peach_proxy,
				receipt: t
			})
		}
	] })] });
}
function vl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "proxy",
		title: J("settings:peachProxy.title"),
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => W("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t(J("settings:shared.settingsSaved"));
			});
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
				label: J("settings:peachProxy.mode"),
				description: J("settings:peachProxy.modeHelp"),
				children: /* @__PURE__ */ (0, $.jsx)(ul, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, $.jsxs)(V, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, $.jsx)(dl, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "warning",
						title: J("settings:peachProxy.chooseMode"),
						children: J("settings:peachProxy.modeConflict")
					}) : null,
					c.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
				type: "submit",
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var yl = J("follow:sourceCredentials.clearBody"), bl = J("follow:sourceCredentials.worldReadable"), xl = [ve, _e];
function Sl(e, t) {
	return (e.shared_fields || []).includes(t) ? J("follow:sourceCredentials.fromSharedHint") : e.fields.includes(t) ? J("follow:sourceCredentials.savedHint") : J("follow:sourceCredentials.notSet");
}
function Cl({ row: e }) {
	if (Gt(e)) return /* @__PURE__ */ (0, $.jsx)(k, {
		variant: "caption",
		color: "lime",
		children: J("follow:sourceCredentials.configured")
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, $.jsx)(k, {
		variant: "caption",
		color: t,
		children: x[e.requirement] || ""
	});
}
function wl({ row: e, readOnly: t, open: n, toast: r }) {
	let [i, a] = (0, Z.useState)({}), [o, s] = (0, Z.useState)(""), c = Gt(e), l = e.browser_login === !0 && !t, u = di(ui(e.provider), l && n, xl), d = Mr({
		mutationFn: (t) => tr(e.provider, t),
		onSuccess: (e, t) => {
			if (e.note) s(lr(e.note_code ?? "", e.note));
			else {
				s(""), a({});
				for (let e of xl) qn.invalidateQueries({
					queryKey: e,
					exact: !0
				});
				r(Object.keys(t).length ? J("follow:sourceCredentials.saved") : J("follow:sourceCredentials.cleared"));
			}
		},
		onError: (e) => s(q(e))
	}), f = () => {
		if (u.busy) return;
		let e = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? d.mutate(e) : s(J("follow:sourceCredentials.nothingEntered"));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsxs)(N, { children: [K(e, "why"), e.where ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [" ", /* @__PURE__ */ (0, $.jsx)(ge, {
				href: e.where,
				children: J("follow:sourceCredentials.getCredentials")
			})] }) : null] }),
			l ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(ci, {
					login: u,
					disabled: d.isPending,
					onStart: () => s("")
				})
			}), /* @__PURE__ */ (0, $.jsx)(li, {
				login: u,
				saved: c
			})] }) : null,
			e.howto ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "howto") }) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, $.jsx)(P, {
					type: "password",
					label: n,
					placeholder: Sl(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t || u.busy,
					value: i[n] || "",
					onChange: (e) => a({
						...i,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "danger",
					disabled: t,
					...G(d.isPending || u.busy),
					onClick: () => void Ut({
						title: J("follow:sourceCredentials.clearTitle"),
						body: yl,
						confirmLabel: J("follow:sourceCredentials.clearTitle"),
						danger: !0,
						holdToConfirm: !0,
						onConfirm: () => d.mutateAsync({})
					}),
					children: J("follow:shared.clear")
				}) : null, /* @__PURE__ */ (0, $.jsx)(m, {
					variant: "primary",
					disabled: t,
					...G(d.isPending || u.busy),
					onClick: f,
					children: J("follow:shared.saveSettings")
				})]
			}),
			o || u.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: o || u.error }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, $.jsx)(N, { children: J("follow:sourceCredentials.sharedFieldsHint", {
				count: e.shared_fields.length,
				fields: jn(e.shared_fields)
			}) }) : null,
			e.path ? /* @__PURE__ */ (0, $.jsx)(le, {
				summary: J("follow:sourceCredentials.credentialsFile"),
				children: /* @__PURE__ */ (0, $.jsx)(Ue, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: r
				})
			}) : null
		]
	});
}
function Tl({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)(e.requirement === "required" && !Gt(e)), a = /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(fi, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, $.jsx)(Cl, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, $.jsx)(k, {
				variant: "caption",
				color: "rose",
				children: J("follow:sourceCredentials.missingField", { field: e })
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [a, e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsx)(N, { children: K(e, "why") }) : null]
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-credential-provider": e.provider,
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			a,
			/* @__PURE__ */ (0, $.jsx)(le, {
				summary: Gt(e) ? J("follow:sourceCredentials.editCredentials") : J("follow:sourceCredentials.enterCredentials"),
				isOpen: r,
				onOpenChange: i,
				children: /* @__PURE__ */ (0, $.jsx)(wl, {
					row: e,
					readOnly: t,
					open: r,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: J("follow:sourceCredentials.permissionsTooOpen"),
				children: bl
			}) : null
		]
	});
}
function El({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !Gt(e));
	if ((0, Z.useEffect)(() => {
		Xn("credentials", { done: i.filter(Gt).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, $.jsx)(pe, {
		size: "compact",
		icon: Vt,
		title: J("follow:sourceCredentials.emptyTitle"),
		children: J("follow:sourceCredentials.emptyHint")
	});
	let o = a.length ? /* @__PURE__ */ (0, $.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: J("follow:sourceCredentials.pendingCount", { count: a.length })
	}) : null, s = /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: [
		{
			title: J("follow:sourceCredentials.groupSupported"),
			rows: i.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: J("follow:sourceCredentials.groupNotNeeded"),
			rows: i.filter((e) => e.requirement === "none")
		},
		{
			title: J("follow:sourceCredentials.groupUnsupported"),
			rows: i.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: Lt({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Tl, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, $.jsx)(L, {
		guide: "credentials",
		title: J("follow:sourceCredentials.sectionTitle"),
		aside: o || void 0,
		children: /* @__PURE__ */ (0, $.jsx)(V, { children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Lt({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: J("follow:sourceCredentials.sectionTitle")
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
function Dl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "entry-links",
		title: J("settings:entryLinks.title"),
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => W("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [
			/* @__PURE__ */ (0, $.jsx)(N, { children: de }),
			n.map((e) => /* @__PURE__ */ (0, $.jsx)(P, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, $.jsx)(ht, {
					site: e.key,
					label: J("settings:entryLinks.siteAddress", { site: e.label })
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: fe
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, $.jsx)(M, { children: /* @__PURE__ */ (0, $.jsx)(m, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var Ol = "/api/configuration/indexers";
function kl({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => U(Ol, e),
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, $.jsx)(Je, {
		titleKey: "settings:indexers.loadFailed",
		query: t
	}) : t.isFetching ? /* @__PURE__ */ (0, $.jsx)(at, {
		label: J("settings:indexers.loading"),
		html: Cn
	}) : t.data ? /* @__PURE__ */ (0, $.jsx)(Ml, {
		initial: t.data,
		receipt: e
	}) : null;
}
function Al(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function jl({ row: e, index: t }) {
	let n = [
		e.url ? Al(e.url) : J("settings:indexers.noUrl"),
		e.enabled ? J("settings:shared.enabled") : J("settings:shared.disabled"),
		e.api_key_set && !e.clear_api_key ? J("settings:indexers.apiKeySaved") : e.api_key ? J("settings:indexers.apiKeyUnsaved") : J("settings:indexers.noApiKey")
	];
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || J("settings:indexers.defaultName", { index: t + 1 })
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
function Ml({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		Xn("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		guide: "indexers",
		title: J("settings:indexers.title"),
		onSubmit: (e) => {
			e.preventDefault(), i.run("save", (e) => W(Ol, { indexers: n }, "POST", e), (e) => {
				r(e.indexers), t(J("settings:indexers.saved"));
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(V, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(le, {
				summary: J("settings:indexers.connectHelp"),
				children: /* @__PURE__ */ (0, $.jsxs)(N, { children: [
					J("settings:indexers.helpText"),
					" ",
					/* @__PURE__ */ (0, $.jsx)(ge, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: J("settings:indexers.setupGuide")
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(le, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, $.jsx)(jl, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: J("settings:shared.name"),
								"aria-label": J("settings:indexers.nameLabel", { index: t + 1 }),
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: J("settings:indexers.torznabUrl"),
								"aria-label": J("settings:indexers.torznabUrlLabel", { index: t + 1 }),
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: J("settings:indexers.urlPlaceholder"),
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(P, {
								label: "API key",
								"aria-label": J("settings:indexers.apiKeyLabel", { index: t + 1 }),
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? J("settings:shared.savedLeaveBlank") : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(O, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: J("settings:shared.enable")
									}),
									e.api_key_set ? /* @__PURE__ */ (0, $.jsx)(O, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: J("settings:indexers.clearApiKey")
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(m, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!i.busy,
										"aria-label": J("settings:indexers.removeLabel", { index: t + 1 }),
										onClick: () => r(n.filter((t) => t.key !== e.key)),
										children: J("settings:shared.remove")
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), i.error ? /* @__PURE__ */ (0, $.jsx)(A, { children: i.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(M, { children: [/* @__PURE__ */ (0, $.jsx)(m, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: Jn(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: J("settings:indexers.add")
		}), /* @__PURE__ */ (0, $.jsx)(m, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		})] })]
	});
}
// src/react/settings/scraping-browser-settings.tsx
var Nl = ["window", "headless"], Pl = (e) => J(e === "headless" ? "settings:scrapingBrowser.headless" : "settings:scrapingBrowser.window");
function Fl({ receipt: e }) {
	let t = X({
		queryKey: $e,
		queryFn: ({ signal: e }) => nn(e),
		refetchOnMount: "always"
	}), n = Mr({
		mutationFn: (e) => W(et, { browser_mode: e }),
		onSuccess: (t) => {
			qn.setQueryData($e, (e) => e && {
				...e,
				browser_mode: t.browser_mode
			}), e(J("settings:shared.settingsSaved"));
		}
	}, qn), r = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:scrapingBrowser.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:scrapingBrowser.mode"),
			description: J("settings:scrapingBrowser.modeHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "scrapingBrowserModeSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:scrapingBrowser.mode"),
					selectedKey: t.data?.browser_mode ?? "window",
					isDisabled: !t.data || n.isPending,
					onSelectionChange: (e) => {
						e !== null && n.mutate(String(e));
					},
					children: Nl.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: e,
						children: Pl(e)
					}, e))
				})
			})
		}) }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/want-search-settings.tsx
var Il = [
	1,
	3,
	7,
	14,
	30
], Ll = [
	1,
	3,
	5,
	10,
	0
], Rl = (e) => e === 1 ? J("settings:wantSearch.daily") : J("settings:wantSearch.everyDays", { count: e }), zl = (e) => e === 0 ? J("settings:wantSearch.never") : J("settings:wantSearch.attempts", { count: e });
function Bl({ receipt: e }) {
	let t = X({
		queryKey: rt,
		queryFn: ({ signal: e }) => tn(e),
		refetchOnMount: "always"
	}), n = Rr("want-search"), r = !t.data || n.isPending, i = (t) => n.mutate(t, { onSuccess: () => e(J("settings:shared.settingsSaved")) }), a = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:wantSearch.title"),
		children: [/* @__PURE__ */ (0, $.jsxs)(I, { children: [/* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:wantSearch.interval"),
			description: J("settings:wantSearch.intervalHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "wantStaleSearchDaysSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:wantSearch.interval"),
					selectedKey: String(t.data?.wantStaleSearchDays ?? 7),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleSearchDays: Number(e) });
					},
					children: Il.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: Rl(e)
					}, e))
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:wantSearch.giveUp"),
			description: J("settings:wantSearch.giveUpHelp"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "wantStaleAttemptLimitSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, $.jsx)(R, {
					"aria-label": J("settings:wantSearch.giveUp"),
					selectedKey: String(t.data?.wantStaleAttemptLimit ?? 3),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleAttemptLimit: Number(e) });
					},
					children: Ll.map((e) => /* @__PURE__ */ (0, $.jsx)(z, {
						id: String(e),
						children: zl(e)
					}, e))
				})
			})
		})] }), a ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(a) })
		}) : null]
	});
}
// src/react/settings/cover-fallback-settings.tsx
function Vl({ receipt: e }) {
	let t = X({
		queryKey: rt,
		queryFn: ({ signal: e }) => tn(e),
		refetchOnMount: "always"
	}), n = Rr("cover-fallback"), r = n.error || t.error;
	return /* @__PURE__ */ (0, $.jsxs)(L, {
		title: J("settings:coverFallback.title"),
		children: [/* @__PURE__ */ (0, $.jsx)(I, { children: /* @__PURE__ */ (0, $.jsx)(B, {
			label: J("settings:coverFallback.javdb"),
			description: J("settings:coverFallback.javdbHelp"),
			children: /* @__PURE__ */ (0, $.jsx)(yt, {
				"aria-label": J("settings:coverFallback.javdb"),
				isSelected: t.data?.javdbCoverFallback === !0,
				isDisabled: !t.data || n.isPending,
				onChange: (t) => n.mutate({ javdbCoverFallback: t }, { onSuccess: () => e(J("settings:shared.settingsSaved")) })
			})
		}) }), r ? /* @__PURE__ */ (0, $.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(A, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/source-settings.tsx
function Hl({ data: e, receipt: t, active: n, issues: r }) {
	let i = X({
		queryKey: ve,
		queryFn: ({ signal: e }) => Qt(e),
		enabled: n,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r, /* @__PURE__ */ (0, $.jsx)(_a, { entries: [
		{
			id: "sources-credentials",
			label: J("follow:sourceCredentials.sectionTitle"),
			content: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
				"data-guide-target": "sources",
				children: /* @__PURE__ */ (0, $.jsx)(h, {
					href: "/sources",
					variant: "secondary",
					children: J("settings:sourceSettings.sourcesLink")
				})
			}), i.data ? /* @__PURE__ */ (0, $.jsx)(El, {
				data: i.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : i.error ? /* @__PURE__ */ (0, $.jsx)(Je, {
				titleKey: "settings:sourceSettings.credentialsFailed",
				query: i
			}) : n ? /* @__PURE__ */ (0, $.jsx)(at, {
				label: J("settings:sourceSettings.loadingCredentials"),
				html: Kt
			}) : null] })
		},
		{
			id: "sources-follow-fetch",
			label: J("settings:followFetch.title"),
			content: /* @__PURE__ */ (0, $.jsx)(ec, { receipt: t })
		},
		{
			id: "sources-scraping-browser",
			label: J("settings:scrapingBrowser.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Fl, { receipt: t })
		},
		{
			id: "sources-covers",
			label: J("settings:coverFallback.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Vl, { receipt: t })
		},
		e.entry_links && {
			id: "sources-entry-links",
			label: J("settings:entryLinks.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Dl, {
				initial: e.entry_links,
				receipt: t
			})
		},
		{
			id: "sources-indexers",
			label: J("settings:indexers.title"),
			content: /* @__PURE__ */ (0, $.jsx)(kl, { receipt: t })
		},
		{
			id: "sources-want-search",
			label: J("settings:wantSearch.title"),
			content: /* @__PURE__ */ (0, $.jsx)(Bl, { receipt: t })
		}
	] })] });
}
// src/react/settings/configuration-panel.ts
var Ul = "flex flex-col gap-6";
function Wl(e) {
	return {
		className: e.active ? `${Ul} ui-board-group-active` : Ul,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	};
}
// src/react/settings/configuration-shape.ts
function Gl(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => g.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available,
		localDownload: !0
	};
}
function Kl(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function ql(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storage: !!o,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function Jl({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X({
		queryKey: v,
		queryFn: ({ signal: e }) => Zt(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, $.jsx)(Ql, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, $.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			title: J("settings:configurationPage.loadFailedTitle"),
			children: i.error ? q(i.error) : J("settings:configurationPage.loadFailed")
		})
	});
}
function Yl({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, $.jsx)(F, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, $.jsx)(m, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...G(r),
				children: J("settings:shared.reload")
			}),
			children: i.message
		}, t) : null;
	}) });
}
var Xl = "(max-width:1100px)", Zl = 0;
function Ql({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++Zl}`), [l, u] = (0, Z.useState)(r), d = (0, Z.useRef)(null), f = (0, Z.useRef)(null), p = (0, Z.useRef)(l);
	(0, Z.useEffect)(() => {
		u(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Gl(e);
		t && Xn("downloads", t), Xn("network", Kl(e)), Xn("maintenance", ql(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		let e = f.current, t = d.current, n = () => t.style.setProperty("--settings-nav-height", `${e.offsetHeight}px`);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), () => r.disconnect();
	}, []), (0, Z.useLayoutEffect)(() => {
		if (p.current === l) return;
		p.current = l;
		let e = d.current?.querySelector(".ui-board-local-nav"), t = d.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia(Xl).matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [l]);
	let m = (e) => {
		u(e), pr(fr(e), {
			replace: !0,
			state: Bn.navigation.location.state
		});
	}, [h, g] = (0, Z.useState)(() => matchMedia(Xl).matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia(Xl), t = () => g(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let _ = {
		data: e,
		receipt: t
	}, v = (t) => /* @__PURE__ */ (0, $.jsx)(Yl, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), b = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], x = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || b.some((t) => e.section_errors?.[t])), S = e.downloads, C = [
		{
			id: "library",
			title: y.library,
			body: () => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [v([
				"media_sources",
				"library_count",
				"mount_dependencies"
			]), /* @__PURE__ */ (0, $.jsx)(Mc, { ..._ })] })
		},
		{
			id: "sources",
			title: y.subscriptions,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Hl, {
				..._,
				active: e,
				issues: v(["entry_links"])
			})
		},
		{
			id: "ai",
			title: y.ai,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(c, {
				active: e,
				receipt: t
			})
		},
		...S || e.section_errors?.downloads ? [{
			id: "downloads",
			title: y.downloads,
			body: (e) => /* @__PURE__ */ (0, $.jsx)(za, {
				initial: S,
				receipt: t,
				active: e,
				issues: v(["downloads"])
			})
		}] : [],
		...x ? [{
			id: "network",
			title: y.network,
			body: () => /* @__PURE__ */ (0, $.jsx)(_l, {
				..._,
				issues: v(b)
			})
		}] : [],
		{
			id: "maintenance",
			title: y.maintenance,
			body: (e) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [v([
				"startup",
				"uninstall",
				"storage",
				"remote_reporting",
				"library_sharing",
				"updates",
				"update_job",
				"automatic_updates",
				"facts"
			]), /* @__PURE__ */ (0, $.jsx)(Ps, {
				..._,
				active: e,
				reopenTutorial: n
			})] })
		},
		{
			id: "diagnostics",
			title: y.diagnostics,
			body: (e) => e ? i : void 0
		}
	], w = Math.max(0, C.findIndex((e) => e.title === rr(l)));
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		ref: d,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			ref: f,
			className: "ui-board-local-nav",
			"data-section-nav": "",
			children: /* @__PURE__ */ (0, $.jsx)(gt, {
				group: "configuration",
				label: J("settings:configurationPage.sectionsLabel"),
				value: C[w].id,
				tabs: C.map(({ id: e, title: t }) => ({
					value: e,
					label: t
				})),
				sectionItems: !0,
				panelPrefix: s,
				orientation: h ? "horizontal" : "vertical",
				className: "",
				onChange: (e) => m(C.find((t) => t.id === e).title)
			})
		}), C.map(({ id: e, title: t, body: n }, r) => {
			let i = {
				index: r,
				id: `${s}-panel-${e}`,
				labelledBy: `${s}-tab-${e}`,
				active: r === w
			}, a = Ht(e);
			return /* @__PURE__ */ (0, $.jsxs)("div", {
				...Wl(i),
				children: [/* @__PURE__ */ (0, $.jsxs)("header", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)("h2", {
						className: "text-title-2-medium text-text-primary",
						"data-copy-key": `navigation.configurationSections.${e === "sources" ? "feeds" : e}`,
						children: t
					}), /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary select-text",
						"data-copy-key": "settings." + a,
						children: J("settings:" + a)
					})]
				}), n(i.active)]
			}, e);
		})]
	});
}
export { Jl as ConfigurationPage };

//# debugId=602a2745-88f5-46a0-bd74-af9d0425c1b2