(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28101c00-63ea-48c4-8259-ad7b7aca60b6", e._sentryDebugIdIdentifier = "sentry-dbid-28101c00-63ea-48c4-8259-ad7b7aca60b6");
	} catch {}
})();
import { MotionConfigContext as e, WithPromise as t, __commonJSMin as n, __exportAll as r, __toESM as i, asNumber as a, calcGeneratorVelocity as o, cancelFrame as s, cardClass as c, clsx as l, collectMotionValues as u, cx as d, frame as f, interpolate as p, isMotionValue as m, max as h, min as g, motion as _, motionValue as v, require_jsx_runtime as y, require_react as b, require_react_dom as x, require_with_selector as S, resolveStartTime as C, spring as w, time as T, useConstant as E, useIsomorphicLayoutEffect as D, useReducedMotion as O } from "./peach-app.js";
// node_modules/motion-dom/dist/es/utils/transform.mjs
function k(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = p(i, a, o);
	return t ? s(r) : s;
}
// node_modules/motion-dom/dist/es/animation/FollowAnimation.mjs
var A = /* @__PURE__ */ new Set(), j = ({ timestamp: e }) => {
	A.forEach((t) => t.tick(e));
}, M = class extends t {
	constructor(e) {
		super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = !1, this.hasNextTarget = !1, this.nextTarget = 0, this.stop = () => {
			this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.factory = e.type, this.generator = this.factory(e);
		let { driver: t } = e;
		t && (this.driver = t((e) => this.tick(e))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (A.size || f.update(j, !0), A.add(this));
	}
	setTarget(e, t) {
		this.nextTarget = e, this.nextVelocity = t, this.hasNextTarget = !0;
	}
	retarget(e, t) {
		let { options: n, generator: r } = this;
		n.keyframes = e, n.velocity = t, this.startTime = this.now(), this.currentTime = 0, r.retarget ? r.retarget(e, t) : this.generator = this.factory(n);
	}
	tick(e) {
		let { options: t, hasNextTarget: n } = this, { delay: r = 0, onUpdate: i, onPlay: a } = t;
		this.started || (this.startTime = C(this.startTime, e));
		let o = Math.round(e - this.startTime) - r, s = this.currentTime = Math.max(0, o), c = this.generator.next(s), l = o < 0 ? t.keyframes[0] : c.value;
		if (n) {
			this.hasNextTarget = !1;
			let { keyframes: e } = t;
			e[0] = l, e[1] = this.nextTarget, this.retarget(e, this.nextVelocity ?? this.getGeneratorVelocity());
		}
		(n || !this.started) && (this.started = !0, a?.()), this.state === "running" && (i?.(l), c.done && o >= 0 && !n && !this.hasNextTarget && this.state === "running" && (this.notifyFinished(), this.teardown(), this.state = "finished", t.onComplete?.()));
	}
	getGeneratorVelocity() {
		return o(this.generator, this.currentTime, this.options.velocity);
	}
	now() {
		return this.driver ? this.driver.now() : T.now();
	}
	teardown() {
		this.state = "idle", this.driver ? this.driver.stop() : (A.delete(this), A.size || s(j));
	}
};
// node_modules/motion-dom/dist/es/value/utils/follow.mjs
function N(e, t, n) {
	let r = e.get(), i = null, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = (e) => o(s ? e + s : e), l = () => e.events.animationStart?.notify(), u = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	};
	if (e.attach((t, r) => {
		o = r;
		let s = a(t);
		if (i?.state === "running") {
			i.setTarget(s, n.velocity);
			return;
		}
		let d = a(e.get()), f = i ? i.getGeneratorVelocity() : e.getVelocity();
		if (u(), d === s) return;
		let p = i = new M({
			keyframes: [d, s],
			velocity: f,
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: c,
			onPlay: l
		});
		e.animation = p, p.then(() => {
			i === p && (i = null, e.animation = void 0, e.events.animationComplete?.notify());
		});
	}, u), m(t)) {
		let r = n.skipInitialAnimation === !0, i = (t) => {
			r ? (r = !1, e.jump(P(t, s), !1)) : e.set(P(t, s));
		}, o = t.on("change", i), c = t.get();
		a(c) - a(e.get()) && i(c);
		let l = e.on("destroy", o);
		return () => {
			o(), l(), u();
		};
	}
	return u;
}
function P(e, t) {
	return t ? e + t : e;
}
// node_modules/motion-dom/dist/es/value/spring-value.mjs
function ee(e, t, n) {
	return N(e, t, {
		...n,
		type: w
	});
}
// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var F = /* @__PURE__ */ i(b(), 1);
function te(e, t, n) {
	(0, F.useInsertionEffect)(() => e.on(t, n), [
		e,
		t,
		n
	]);
}
// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function ne(t) {
	let n = E(() => v(t)), { isStatic: r } = (0, F.useContext)(e);
	if (r) {
		let [, e] = (0, F.useState)(t);
		(0, F.useEffect)(() => n.on("change", e), []);
	}
	return n;
}
// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function re(e, t) {
	let n = ne(t()), r = () => n.set(t());
	return r(), D(() => {
		let t = () => f.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return r(), () => {
			n.forEach((e) => e()), s(r);
		};
	}), n;
}
// node_modules/framer-motion/dist/es/value/use-computed.mjs
function ie(e) {
	u.current = [], e();
	let t = re(u.current, e);
	return u.current = void 0, t;
}
// node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function ae(t, n, r) {
	let { isStatic: i } = (0, F.useContext)(e), a = () => m(t) ? t.get() : t;
	if (i) return ie(a);
	let o = ne(a());
	return (0, F.useInsertionEffect)(() => r(o, t, n), [o, JSON.stringify(n)]), o;
}
// node_modules/framer-motion/dist/es/value/use-spring.mjs
function oe(e, t = {}) {
	return ae(e, t, ee);
}
// node_modules/framer-motion/dist/es/value/use-transform.mjs
function se(e, t, n, r) {
	if (typeof e == "function") return ie(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return le(e, t, n, r);
	let i = typeof t == "function" ? t : k(t, n, r), a = Array.isArray(e) ? ce(e, i) : ce([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	if (o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && !r?.mixer) {
		let e = r?.ease;
		a.accelerate = {
			...o,
			times: [
				0,
				...t,
				1
			],
			keyframes: [
				n[0],
				...n,
				n[n.length - 1]
			],
			isTransformed: !0,
			...e ? { ease: Array.isArray(e) ? [e[0], ...e] : e } : {}
		};
	}
	return a;
}
function ce(e, t) {
	let n = E(() => []);
	return re(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function le(e, t, n, r) {
	let i = E(() => Object.keys(n)), a = E(() => ({}));
	for (let o of i) a[o] = se(e, t, n[o], r);
	return a;
}
// node_modules/d3-array/src/ascending.js
function ue(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
// node_modules/d3-array/src/bisector.js
function de(e) {
	let t = e, n = e;
	e.length === 1 && (t = (t, n) => e(t) - n, n = fe(e));
	function r(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) < 0 ? r = a + 1 : i = a;
		}
		return r;
	}
	function i(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) > 0 ? i = a : r = a + 1;
		}
		return r;
	}
	function a(e, n, i, a) {
		i ??= 0, a ??= e.length;
		let o = r(e, n, i, a - 1);
		return o > i && t(e[o - 1], n) > -t(e[o], n) ? o - 1 : o;
	}
	return {
		left: r,
		center: a,
		right: i
	};
}
function fe(e) {
	return (t, n) => ue(e(t), n);
}
// node_modules/d3-array/src/number.js
function pe(e) {
	return e === null ? NaN : +e;
}
function* me(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
// node_modules/d3-array/src/bisect.js
var he = de(ue), ge = he.right;
he.left, de(pe).center;
// node_modules/internmap/src/index.js
var _e = class extends Map {
	constructor(e, t = xe) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(ve(this, e));
	}
	has(e) {
		return super.has(ve(this, e));
	}
	set(e, t) {
		return super.set(ye(this, e), t);
	}
	delete(e) {
		return super.delete(be(this, e));
	}
};
function ve({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function ye({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function be({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function xe(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
// node_modules/d3-array/src/ticks.js
var Se = Math.sqrt(50), Ce = Math.sqrt(10), we = Math.sqrt(2);
function Te(e, t, n) {
	var r, i = -1, a, o, s;
	if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
	if ((r = t < e) && (a = e, e = t, t = a), (s = Ee(e, t, n)) === 0 || !isFinite(s)) return [];
	if (s > 0) {
		let n = Math.round(e / s), r = Math.round(t / s);
		for (n * s < e && ++n, r * s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) * s;
	} else {
		s = -s;
		let n = Math.round(e * s), r = Math.round(t * s);
		for (n / s < e && ++n, r / s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) / s;
	}
	return r && o.reverse(), o;
}
function Ee(e, t, n) {
	var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / 10 ** i;
	return i >= 0 ? (a >= Se ? 10 : a >= Ce ? 5 : a >= we ? 2 : 1) * 10 ** i : -(10 ** -i) / (a >= Se ? 10 : a >= Ce ? 5 : a >= we ? 2 : 1);
}
function De(e, t, n) {
	var r = Math.abs(t - e) / Math.max(0, n), i = 10 ** Math.floor(Math.log(r) / Math.LN10), a = r / i;
	return a >= Se ? i *= 10 : a >= Ce ? i *= 5 : a >= we && (i *= 2), t < e ? -i : i;
}
// node_modules/d3-array/src/quickselect.js
function Oe(e, t, n = 0, r = e.length - 1, i = ue) {
	for (; r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1);
			Oe(e, t, Math.max(n, Math.floor(t - o * c / a + l)), Math.min(r, Math.floor(t + (a - o) * c / a + l)), i);
		}
		let a = e[t], o = n, s = r;
		for (ke(e, n, t), i(e[r], a) > 0 && ke(e, n, r); o < s;) {
			for (ke(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? ke(e, n, s) : (++s, ke(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function ke(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
// node_modules/d3-array/src/quantile.js
function Ae(e, t, n) {
	if (e = Float64Array.from(me(e, n)), r = e.length) {
		if ((t = +t) <= 0 || r < 2) return g(e);
		if (t >= 1) return h(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = h(Oe(e, a).subarray(0, a + 1));
		return o + (g(e.subarray(a + 1)) - o) * (i - a);
	}
}
function je(e, t, n = pe) {
	if (r = e.length) {
		if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
// node_modules/d3-array/src/range.js
function Me(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
// node_modules/recharts/es6/util/excludeEventProps.js
var Ne = /* @__PURE__ */ i(x()), Pe = /* @__PURE__ */ "dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture".split(".");
function Fe(e) {
	return typeof e == "string" && Pe.includes(e);
}
// node_modules/recharts/es6/util/svgPropertiesNoEvents.js
var Ie = /* @__PURE__ */ new Set(/* @__PURE__ */ "aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle".split("."));
function Le(e) {
	return typeof e == "string" && Ie.has(e);
}
function Re(e) {
	return typeof e == "string" && e.startsWith("data-");
}
function ze(e) {
	if (typeof e != "object" || !e) return {};
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (Le(n) || Re(n)) && (t[n] = e[n]);
	return t;
}
function Be(e) {
	if (e == null) return null;
	if (/*#__PURE__*/ (0, F.isValidElement)(e) && typeof e.props == "object" && e.props !== null) {
		var t = e.props;
		return ze(t);
	}
	return typeof e == "object" && !Array.isArray(e) ? ze(e) : null;
}
// node_modules/recharts/es6/util/svgPropertiesAndEvents.js
function Ve(e) {
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (Le(n) || Re(n) || Fe(n)) && (t[n] = e[n]);
	return t;
}
function He(e) {
	return e == null ? null : /*#__PURE__*/ (0, F.isValidElement)(e) ? Ve(e.props) : typeof e == "object" && !Array.isArray(e) ? Ve(e) : null;
}
// node_modules/recharts/es6/container/Surface.js
var Ue = [
	"children",
	"width",
	"height",
	"viewBox",
	"className",
	"style",
	"title",
	"desc"
];
function We() {
	return We = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, We.apply(null, arguments);
}
function Ge(e, t) {
	if (e == null) return {};
	var n, r, i = Ke(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ke(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var qe = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.children, r = e.width, i = e.height, a = e.viewBox, o = e.className, s = e.style, c = e.title, u = e.desc, d = Ge(e, Ue), f = a || {
		width: r,
		height: i,
		x: 0,
		y: 0
	}, p = l("recharts-surface", o);
	return /*#__PURE__*/ F.createElement("svg", We({}, Ve(d), {
		className: p,
		width: r,
		height: i,
		style: s,
		viewBox: `${f.x} ${f.y} ${f.width} ${f.height}`,
		ref: t
	}), /*#__PURE__*/ F.createElement("title", null, c), /*#__PURE__*/ F.createElement("desc", null, u), n);
}), Je = S(), Ye = ["children", "className"];
function Xe() {
	return Xe = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Xe.apply(null, arguments);
}
function Ze(e, t) {
	if (e == null) return {};
	var n, r, i = Qe(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Qe(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var $e = /*#__PURE__*/ F.forwardRef((e, t) => {
	var n = e.children, r = e.className, i = Ze(e, Ye), a = l("recharts-layer", r);
	return /*#__PURE__*/ F.createElement("g", Xe({ className: a }, Ve(i), { ref: t }), n);
});
// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function et(e) {
	return e === "__proto__";
}
// node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
var tt = /\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;
function nt(e) {
	switch (typeof e) {
		case "number":
		case "symbol": return !1;
		case "string": return e === "" || e.startsWith(".") || e.endsWith(".") ? !1 : tt.test(e);
		default: return !1;
	}
}
// node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function rt(e) {
	return typeof e == "string" || typeof e == "symbol" ? e : Object.is(e?.valueOf?.(), -0) ? "-0" : String(e);
}
// node_modules/es-toolkit/dist/compat/predicate/isSymbol.mjs
function it(e) {
	return typeof e == "symbol" || e instanceof Symbol;
}
// node_modules/es-toolkit/dist/compat/util/toString.mjs
function at(e) {
	return e == null ? "" : ot(e);
}
function ot(e) {
	if (typeof e == "string") return e;
	if (Array.isArray(e)) return e.map(ot).join(",");
	if (it(e)) return e.toString();
	let t = e + "";
	return t === "0" && Object.is(Number(e), -0) ? "-0" : t;
}
// node_modules/es-toolkit/dist/compat/util/toPath.mjs
function st(e) {
	if (Array.isArray(e)) return e.map(rt);
	if (typeof e == "symbol") return [e];
	e = at(e);
	let t = [], n = e.length;
	if (n === 0) return t;
	let r = 0, i = "", a = "", o = !1, s = !1, c = /^-?\d+(?:\.\d+)?$/;
	for (e.charCodeAt(0) === 46 && t.push(""); r < n;) {
		let l = e[r];
		if (a) l === "\\" && r + 1 < n ? (r++, i += e[r]) : l === a ? a = "" : i += l;
		else if (o) {
			if (l === "\"" || l === "'") a = l, s = !0;
			else if (l === "]") {
				if (o = !1, !s && i.includes(".") && !c.test(i)) {
					let e = i.split(".");
					for (let n = 0; n < e.length; n++) e[n] !== "" && t.push(e[n]);
				} else t.push(i);
				i = "";
			} else i += l;
		} else if (l === "[") o = !0, s = !1, i &&= (t.push(i), "");
		else if (l === ".") {
			i &&= (t.push(i), "");
			let n = e[r + 1];
			(n === void 0 || n === ".") && t.push("");
		} else i += l;
		r++;
	}
	return i && t.push(i), t;
}
// node_modules/es-toolkit/dist/compat/object/get.mjs
function ct(e, t, n) {
	if (e == null) return n;
	switch (typeof t) {
		case "string": {
			if (et(t)) return n;
			let r = e[t];
			return r === void 0 ? nt(t) && !Object.hasOwn(e, t) ? ct(e, st(t), n) : n : r;
		}
		case "number":
		case "symbol": {
			typeof t == "number" && (t = rt(t));
			let r = e[t];
			return r === void 0 ? n : r;
		}
		default: {
			if (Array.isArray(t)) return lt(e, t, n);
			if (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t), et(t)) return n;
			let r = e[t];
			return r === void 0 ? n : r;
		}
	}
}
function lt(e, t, n) {
	if (t.length === 0) return n;
	let r = e;
	for (let e = 0; e < t.length; e++) {
		if (r == null || et(t[e])) return n;
		r = r[t[e]];
	}
	return r === void 0 ? n : r;
}
// node_modules/recharts/es6/util/round.js
var ut = 4;
function dt(e) {
	var t = 10 ** (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut), n = Math.round(e * t) / t;
	return Object.is(n, -0) ? 0 : n;
}
function ft(e) {
	var t = [...arguments].slice(1);
	return e.reduce((e, n, r) => {
		var i = t[r - 1];
		return typeof i == "string" ? e + i + n : i === void 0 ? e + n : e + dt(i) + n;
	}, "");
}
// node_modules/recharts/es6/util/DataUtils.js
var pt = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, mt = (e) => typeof e == "number" && e != +e, ht = (e) => typeof e == "string" && e.length > 1 && e.indexOf("%") === e.length - 1, I = (e) => (typeof e == "number" || e instanceof Number) && !mt(e), gt = (e) => I(e) || typeof e == "string", _t = 0, vt = (e) => {
	var t = ++_t;
	return `${e || ""}${t}`;
}, yt = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
	if (!I(e) && typeof e != "string") return n;
	var i;
	if (ht(e)) {
		if (t == null) return n;
		var a = e.indexOf("%");
		i = t * parseFloat(e.slice(0, a)) / 100;
	} else i = +e;
	return mt(i) && (i = n), r && t != null && i > t && (i = t), i;
}, bt = (e) => {
	if (!Array.isArray(e)) return !1;
	for (var t = e.length, n = /* @__PURE__ */ new Set(), r = 0; r < t; r++) {
		var i = String(e[r]);
		if (n.has(i)) return !0;
		n.add(i);
	}
	return !1;
};
function L(e, t, n) {
	return I(e) && I(t) ? dt(e + n * (t - e)) : t;
}
function xt(e, t, n) {
	if (e && e.length) return e.find((e) => e && (typeof t == "function" ? t(e) : ct(e, t)) === n);
}
var R = (e) => e == null, St = (e) => R(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
function Ct(e) {
	return e != null;
}
function wt() {}
// node_modules/recharts/es6/cartesian/cartesianViewBoxToTrapezoid.js
function Tt(e) {
	if (e) return {
		x: e.x,
		y: e.y,
		upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
		lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
		width: e.width,
		height: e.height
	};
}
// node_modules/recharts/es6/cartesian/getCartesianPosition.js
function Et(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Dt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Et(Object(n), !0).forEach(function(t) {
			Ot(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ot(e, t, n) {
	return (t = kt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kt(e) {
	var t = At(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function At(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var jt = (e) => {
	var t = e.viewBox, n = e.position, r = e.offset, i = r === void 0 ? 0 : r, a = e.parentViewBox, o = e.clamp, s = Tt(t), c = s.x, l = s.y, u = s.height, d = s.upperWidth, f = s.lowerWidth, p = c, m = c + (d - f) / 2, h = (p + m) / 2, g = (d + f) / 2, _ = p + d / 2, v = u >= 0 ? 1 : -1, y = v * i, b = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end", S = d >= 0 ? 1 : -1, C = S * i, w = S > 0 ? "end" : "start", T = S > 0 ? "start" : "end", E = a;
	if (n === "top") {
		var D = {
			x: p + d / 2,
			y: l - y,
			horizontalAnchor: "middle",
			verticalAnchor: b
		};
		return o && E && (D.height = Math.max(l - E.y, 0), D.width = d), D;
	}
	if (n === "bottom") {
		var O = {
			x: m + f / 2,
			y: l + u + y,
			horizontalAnchor: "middle",
			verticalAnchor: x
		};
		return o && E && (O.height = Math.max(E.y + E.height - (l + u), 0), O.width = f), O;
	}
	if (n === "left") {
		var k = {
			x: h - C,
			y: l + u / 2,
			horizontalAnchor: w,
			verticalAnchor: "middle"
		};
		return o && E && (k.width = Math.max(k.x - E.x, 0), k.height = u), k;
	}
	if (n === "right") {
		var A = {
			x: h + g + C,
			y: l + u / 2,
			horizontalAnchor: T,
			verticalAnchor: "middle"
		};
		return o && E && (A.width = Math.max(E.x + E.width - A.x, 0), A.height = u), A;
	}
	var j = o && E ? {
		width: g,
		height: u
	} : {};
	return n === "insideLeft" ? Dt({
		x: h + C,
		y: l + u / 2,
		horizontalAnchor: T,
		verticalAnchor: "middle"
	}, j) : n === "insideRight" ? Dt({
		x: h + g - C,
		y: l + u / 2,
		horizontalAnchor: w,
		verticalAnchor: "middle"
	}, j) : n === "insideTop" ? Dt({
		x: p + d / 2,
		y: l + y,
		horizontalAnchor: "middle",
		verticalAnchor: x
	}, j) : n === "insideBottom" ? Dt({
		x: m + f / 2,
		y: l + u - y,
		horizontalAnchor: "middle",
		verticalAnchor: b
	}, j) : n === "insideTopLeft" ? Dt({
		x: p + C,
		y: l + y,
		horizontalAnchor: T,
		verticalAnchor: x
	}, j) : n === "insideTopRight" ? Dt({
		x: p + d - C,
		y: l + y,
		horizontalAnchor: w,
		verticalAnchor: x
	}, j) : n === "insideBottomLeft" ? Dt({
		x: m + C,
		y: l + u - y,
		horizontalAnchor: T,
		verticalAnchor: b
	}, j) : n === "insideBottomRight" ? Dt({
		x: m + f - C,
		y: l + u - y,
		horizontalAnchor: w,
		verticalAnchor: b
	}, j) : n && typeof n == "object" && (I(n.x) || ht(n.x)) && (I(n.y) || ht(n.y)) ? Dt({
		x: c + yt(n.x, g),
		y: l + yt(n.y, u),
		horizontalAnchor: "end",
		verticalAnchor: "end"
	}, j) : Dt({
		x: _,
		y: l + u / 2,
		horizontalAnchor: "middle",
		verticalAnchor: "middle"
	}, j);
}, Mt = [
	"top",
	"left",
	"right",
	"bottom"
];
function Nt(e) {
	return e == null ? !1 : typeof e == "object" || Mt.some((t) => t === e);
}
// node_modules/recharts/es6/context/legendPortalContext.js
var Pt = /*#__PURE__*/ (0, F.createContext)(null), Ft = () => (0, F.useContext)(Pt);
// node_modules/victory-vendor/node_modules/d3-shape/src/constant.js
function z(e) {
	return function() {
		return e;
	};
}
// node_modules/victory-vendor/node_modules/d3-shape/src/math.js
var It = Math.cos, Lt = Math.sin, Rt = Math.sqrt, zt = Math.PI;
zt / 2;
var Bt = 2 * zt, Vt = Math.PI, Ht = 2 * Vt, Ut = 1e-6, Wt = Ht - Ut;
function Gt(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Kt(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return Gt;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var qt = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Gt : Kt(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > Ut) {
			if (!(Math.abs(u * s - c * l) > Ut) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
			else {
				let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((Vt - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
				Math.abs(y - 1) > Ut && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
			}
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Ut || Math.abs(this._y1 - l) > Ut) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Ht + Ht), d > Wt ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > Ut && this._append`A${n},${n},0,${+(d >= Vt)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
qt.prototype;
// node_modules/victory-vendor/node_modules/d3-shape/src/path.js
function Jt(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new qt(t);
}
Array.prototype.slice;
function Yt(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/linear.js
function Xt(e) {
	this._context = e;
}
Xt.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function Zt(e) {
	return new Xt(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/point.js
function Qt(e) {
	return e[0];
}
function $t(e) {
	return e[1];
}
// node_modules/victory-vendor/node_modules/d3-shape/src/line.js
function en(e, t) {
	var n = z(!0), r = null, i = Zt, a = null, o = Jt(s);
	e = typeof e == "function" ? e : e === void 0 ? Qt : z(e), t = typeof t == "function" ? t : t === void 0 ? $t : z(t);
	function s(s) {
		var c, l = (s = Yt(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : z(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : z(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : z(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/area.js
function tn(e, t, n) {
	var r = null, i = z(!0), a = null, o = Zt, s = null, c = Jt(l);
	e = typeof e == "function" ? e : e === void 0 ? Qt : z(+e), t = typeof t == "function" ? t : z(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? $t : z(+n);
	function l(l) {
		var u, d, f, p = (l = Yt(l)).length, m, h = !1, g, _ = Array(p), v = Array(p);
		for (a ?? (s = o(g = c())), u = 0; u <= p; ++u) {
			if (!(u < p && i(m = l[u], u, l)) === h) {
				if (h = !h) d = u, s.areaStart(), s.lineStart();
				else {
					for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f) s.point(_[f], v[f]);
					s.lineEnd(), s.areaEnd();
				}
			}
			h && (_[u] = +e(m, u, l), v[u] = +t(m, u, l), s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
		}
		if (g) return s = null, g + "" || null;
	}
	function u() {
		return en().defined(i).curve(o).context(a);
	}
	return l.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : z(+t), r = null, l) : e;
	}, l.x0 = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : z(+t), l) : e;
	}, l.x1 = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : z(+e), l) : r;
	}, l.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : z(+e), n = null, l) : t;
	}, l.y0 = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : z(+e), l) : t;
	}, l.y1 = function(e) {
		return arguments.length ? (n = e == null ? null : typeof e == "function" ? e : z(+e), l) : n;
	}, l.lineX0 = l.lineY0 = function() {
		return u().x(e).y(t);
	}, l.lineY1 = function() {
		return u().x(e).y(n);
	}, l.lineX1 = function() {
		return u().x(r).y(t);
	}, l.defined = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : z(!!e), l) : i;
	}, l.curve = function(e) {
		return arguments.length ? (o = e, a != null && (s = o(a)), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (e == null ? a = s = null : s = o(a = e), l) : a;
	}, l;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/bump.js
var nn = class {
	constructor(e, t) {
		this._context = e, this._x = t;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
		}
		this._x0 = e, this._y0 = t;
	}
};
function rn(e) {
	return new nn(e, !0);
}
function an(e) {
	return new nn(e, !1);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/symbol/circle.js
var on = { draw(e, t) {
	let n = Rt(t / zt);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, Bt);
} }, sn = { draw(e, t) {
	let n = Rt(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, cn = Rt(1 / 3), ln = cn * 2, un = { draw(e, t) {
	let n = Rt(t / ln), r = n * cn;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, dn = { draw(e, t) {
	let n = Rt(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, fn = .8908130915292852, pn = Lt(zt / 10) / Lt(7 * zt / 10), mn = Lt(Bt / 10) * pn, hn = -It(Bt / 10) * pn, gn = { draw(e, t) {
	let n = Rt(t * fn), r = mn * n, i = hn * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = Bt * t / 5, o = It(a), s = Lt(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, _n = Rt(3), vn = { draw(e, t) {
	let n = -Rt(t / (_n * 3));
	e.moveTo(0, n * 2), e.lineTo(-_n * n, -n), e.lineTo(_n * n, -n), e.closePath();
} }, yn = -.5, bn = Rt(3) / 2, xn = 1 / Rt(12), Sn = (xn / 2 + 1) * 3, Cn = { draw(e, t) {
	let n = Rt(t / Sn), r = n / 2, i = n * xn, a = r, o = n * xn + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(yn * r - bn * i, bn * r + yn * i), e.lineTo(yn * a - bn * o, bn * a + yn * o), e.lineTo(yn * s - bn * c, bn * s + yn * c), e.lineTo(yn * r + bn * i, yn * i - bn * r), e.lineTo(yn * a + bn * o, yn * o - bn * a), e.lineTo(yn * s + bn * c, yn * c - bn * s), e.closePath();
} };
// node_modules/victory-vendor/node_modules/d3-shape/src/symbol.js
function wn(e, t) {
	let n = null, r = Jt(i);
	e = typeof e == "function" ? e : z(e || on), t = typeof t == "function" ? t : z(t === void 0 ? 64 : +t);
	function i() {
		let i;
		if (n ||= i = r(), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), i) return n = null, i + "" || null;
	}
	return i.type = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : z(t), i) : e;
	}, i.size = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : z(+e), i) : t;
	}, i.context = function(e) {
		return arguments.length ? (n = e ?? null, i) : n;
	}, i;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/noop.js
function Tn() {}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basis.js
function En(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function Dn(e) {
	this._context = e;
}
Dn.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: En(this, this._x1, this._y1);
			case 2: this._context.lineTo(this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default: En(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function On(e) {
	return new Dn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basisClosed.js
function kn(e) {
	this._context = e;
}
kn.prototype = {
	areaStart: Tn,
	areaEnd: Tn,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3: this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x2 = e, this._y2 = t;
				break;
			case 1:
				this._point = 2, this._x3 = e, this._y3 = t;
				break;
			case 2:
				this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
				break;
			default: En(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function An(e) {
	return new kn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/basisOpen.js
function jn(e) {
	this._context = e;
}
jn.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
				this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
				break;
			case 3: this._point = 4;
			default: En(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Mn(e) {
	return new jn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/linearClosed.js
function Nn(e) {
	this._context = e;
}
Nn.prototype = {
	areaStart: Tn,
	areaEnd: Tn,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(e, t) {
		e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
	}
};
function Pn(e) {
	return new Nn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/monotone.js
function Fn(e) {
	return e < 0 ? -1 : 1;
}
function In(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (Fn(a) + Fn(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function Ln(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Rn(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function zn(e) {
	this._context = e;
}
zn.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3: Rn(this, this._t0, Ln(this, this._t0));
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		var n = NaN;
		if (e = +e, t = +t, e !== this._x1 || t !== this._y1) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, Rn(this, Ln(this, n = In(this, e, t)), n);
					break;
				default: Rn(this, this._t0, n = In(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Bn(e) {
	this._context = new Vn(e);
}
(Bn.prototype = Object.create(zn.prototype)).point = function(e, t) {
	zn.prototype.point.call(this, t, e);
};
function Vn(e) {
	this._context = e;
}
Vn.prototype = {
	moveTo: function(e, t) {
		this._context.moveTo(t, e);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(e, t) {
		this._context.lineTo(t, e);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._context.bezierCurveTo(t, e, r, n, a, i);
	}
};
function Hn(e) {
	return new zn(e);
}
function Un(e) {
	return new Bn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/natural.js
function Wn(e) {
	this._context = e;
}
Wn.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length;
		if (n) {
			if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2) this._context.lineTo(e[1], t[1]);
			else for (var r = Gn(e), i = Gn(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		}
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function Gn(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function Kn(e) {
	return new Wn(e);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/curve/step.js
function qn(e, t) {
	this._context = e, this._t = t;
}
qn.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
			else {
				var n = this._x * (1 - this._t) + e * this._t;
				this._context.lineTo(n, this._y), this._context.lineTo(n, t);
			}
		}
		this._x = e, this._y = t;
	}
};
function Jn(e) {
	return new qn(e, .5);
}
function Yn(e) {
	return new qn(e, 0);
}
function Xn(e) {
	return new qn(e, 1);
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/none.js
function Zn(e, t) {
	if ((o = e.length) > 1) for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n) for (i = a, a = e[t[n]], r = 0; r < s; ++r) a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
// node_modules/victory-vendor/node_modules/d3-shape/src/order/none.js
function Qn(e) {
	for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
	return n;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/stack.js
function $n(e, t) {
	return e[t];
}
function er(e) {
	let t = [];
	return t.key = e, t;
}
function tr() {
	var e = z([]), t = Qn, n = Zn, r = $n;
	function i(i) {
		var a = Array.from(e.apply(this, arguments), er), o, s = a.length, c = -1, l;
		for (let e of i) for (o = 0, ++c; o < s; ++o) (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
		for (o = 0, l = Yt(t(a)); o < s; ++o) a[l[o]].index = o;
		return n(a, l), a;
	}
	return i.keys = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : z(Array.from(t)), i) : e;
	}, i.value = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : z(+e), i) : r;
	}, i.order = function(e) {
		return arguments.length ? (t = e == null ? Qn : typeof e == "function" ? e : z(Array.from(e)), i) : t;
	}, i.offset = function(e) {
		return arguments.length ? (n = e ?? Zn, i) : n;
	}, i;
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/expand.js
function nr(e, t) {
	if ((r = e.length) > 0) {
		for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
			for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
			if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
		}
		Zn(e, t);
	}
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/silhouette.js
function rr(e, t) {
	if ((i = e.length) > 0) {
		for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
			for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
			r[n][1] += r[n][0] = -s / 2;
		}
		Zn(e, t);
	}
}
// node_modules/victory-vendor/node_modules/d3-shape/src/offset/wiggle.js
function ir(e, t) {
	if ((o = e.length) > 0 && (a = (i = e[t[0]]).length) > 0) {
		for (var n = 0, r = 1, i, a, o; r < a; ++r) {
			for (var s = 0, c = 0, l = 0; s < o; ++s) {
				for (var u = e[t[s]], d = u[r][1] || 0, f = (d - (u[r - 1][1] || 0)) / 2, p = 0; p < s; ++p) {
					var m = e[t[p]], h = m[r][1] || 0, g = m[r - 1][1] || 0;
					f += h - g;
				}
				c += d, l += f * d;
			}
			i[r - 1][1] += i[r - 1][0] = n, c && (n -= l / c);
		}
		i[r - 1][1] += i[r - 1][0] = n, Zn(e, t);
	}
}
function ar(e, t) {
	return ur(e) || lr(e, t) || sr(e, t) || or();
}
function or() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sr(e, t) {
	if (e) {
		if (typeof e == "string") return cr(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cr(e, t) : void 0;
	}
}
function cr(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function lr(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function ur(e) {
	if (Array.isArray(e)) return e;
}
var dr = F.useId ?? (() => ar(F.useState(() => vt("uid-")), 1)[0]);
// node_modules/recharts/es6/util/useUniqueId.js
function fr(e, t) {
	var n = dr();
	return t || (e ? `${e}-${n}` : n);
}
// node_modules/recharts/es6/theme/RechartsThemeContext.js
var pr = /*#__PURE__*/ (0, F.createContext)(void 0);
pr.Provider;
var mr = () => (0, F.useContext)(pr);
// node_modules/recharts/es6/theme/pageBackground.js
function hr(e) {
	if (e != null) {
		if (e.pageBackground != null) return e.pageBackground;
		var t = e.chart?.backgroundColor;
		return typeof t == "string" ? t : void 0;
	}
}
// node_modules/recharts/es6/theme/themeFill.js
var gr = ["fill", "active"];
function _r(e, t) {
	if (e == null) return {};
	var n, r, i = vr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function vr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function yr(e) {
	return typeof e == "object" && e ? e : void 0;
}
function br(e) {
	return yr(e)?.color ?? (typeof e == "string" ? e : void 0);
}
function xr(e) {
	return yr(e.fill) == null && yr(e.active?.fill) == null;
}
var Sr = /* @__PURE__ */ new WeakMap();
function Cr(e) {
	if (e != null) {
		if (xr(e)) return e;
		var t = Sr.get(e);
		if (t != null) return t;
		var n = e.fill, r = e.active, i = _r(e, gr), a = br(n);
		return a != null && (i.fill = a), r != null && (i.active = Cr(r)), Sr.set(e, i), i;
	}
}
var wr = /* @__PURE__ */ new WeakMap();
function Tr(e) {
	if (e != null) {
		var t = wr.get(e);
		if (t != null) return t;
		var n = e.map((e) => Cr(e));
		return wr.set(e, n), n;
	}
}
function Er(e) {
	var t = mr();
	return t == null ? void 0 : yr(e(t)?.fill);
}
// node_modules/recharts/es6/fill/fillDefinitions.js
function Dr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Or(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Dr(Object(n), !0).forEach(function(t) {
			kr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function kr(e, t, n) {
	return (t = Ar(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ar(e) {
	var t = jr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function jr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Mr(e) {
	return `url(#${e})`;
}
function Nr(e) {
	return e == null || typeof e == "string" ? {
		color: e,
		fillObject: void 0
	} : {
		color: e.color,
		fillObject: e
	};
}
function Pr(e) {
	return `${e}-fill`;
}
function Fr(e) {
	var t = e.id, n = e.fillObject, r = e.color, i = e.bounds, a = n.definition;
	return /*#__PURE__*/ F.createElement(a, {
		id: t,
		color: r,
		bounds: i
	});
}
var Ir = /* @__PURE__ */ new WeakMap();
function Lr(e) {
	return typeof e == "function" || typeof e == "object" && !!e && "$$typeof" in e;
}
function Rr(e) {
	if (typeof e != "object" || !e || !("fill" in e)) return {
		color: void 0,
		fillObject: void 0
	};
	var t = e.fill;
	if (typeof t == "string") return {
		color: t,
		fillObject: void 0
	};
	if (typeof t != "object" || !t) return {
		color: void 0,
		fillObject: void 0
	};
	var n = Ir.get(t);
	if (n != null) return {
		color: n.color,
		fillObject: n
	};
	var r = "definition" in t ? t.definition : void 0;
	if (!Lr(r)) return {
		color: void 0,
		fillObject: void 0
	};
	var i = "color" in t && typeof t.color == "string" ? t.color : void 0, a = {
		color: i,
		definition: r
	};
	return Ir.set(t, a), {
		color: i,
		fillObject: a
	};
}
function zr(e, t) {
	return `${e}-fill-${t}`;
}
function Br(e, t) {
	var n = Rr(t), r = n.color;
	if (n.fillObject == null) return e;
	if (r != null) return Or(Or({}, e), {}, { fill: r });
	var i = Or({}, e);
	return Reflect.deleteProperty(i, "fill"), i;
}
function Vr(e) {
	var t = e.id, n = e.entries;
	return /*#__PURE__*/ F.createElement(F.Fragment, null, n.map((e) => {
		var n = e.index, r = e.payload, i = e.color, a = Rr(r).fillObject;
		return a == null ? null : /*#__PURE__*/ F.createElement(Fr, {
			key: n,
			id: zr(t, n),
			fillObject: a,
			color: i
		});
	}));
}
function Hr(e) {
	return e.some((e) => Rr(e).fillObject != null);
}
function Ur(e, t) {
	var n = Rr(e), r = n.color;
	return n.fillObject ?? (r == null ? t : void 0);
}
function Wr(e, t, n, r, i) {
	var a = Rr(e), o = a.color, s = a.fillObject;
	if (s != null) return s;
	if (o == null) {
		if (n != null) return n;
		if (!(r.length === 0 || i)) return r[t % r.length];
	}
}
function Gr() {
	var e = mr()?.graphicalItems;
	return (0, F.useMemo)(() => (e ?? []).map((e) => yr(e.fill)), [e]);
}
function Kr(e, t, n, r) {
	var i = fr(n), a = Nr(e), o = a.color, s = a.fillObject, c = o ?? t;
	if (s == null) return {
		paint: c,
		color: c,
		definition: null,
		renderDefinition: () => null
	};
	var l = (e) => /*#__PURE__*/ F.createElement(Fr, {
		id: i,
		fillObject: s,
		color: c,
		bounds: e
	});
	return {
		paint: Mr(i),
		color: c,
		definition: l(r),
		renderDefinition: l
	};
}
function qr(e, t) {
	var n = fr(t), r = (e ?? []).map((e, t) => typeof e == "string" ? e : Mr(`${n}-${t}`));
	return e == null || e.every((e) => typeof e == "string") ? {
		paints: r,
		definitions: null
	} : {
		paints: r,
		definitions: e.map((e, t) => {
			var r = Nr(e), i = r.color, a = r.fillObject;
			return a == null ? null : /*#__PURE__*/ F.createElement(Fr, {
				key: t,
				id: `${n}-${t}`,
				fillObject: a,
				color: i
			});
		})
	};
}
function Jr(e, t) {
	if (typeof e == "number" && typeof t == "number" && e > 0 && t > 0) return {
		width: e,
		height: t
	};
}
function Yr(e) {
	var t = e.fill, n = e.bounds, r = e.children, i = fr("recharts-shape-fill");
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement(Fr, {
		id: i,
		fillObject: t,
		color: t.color,
		bounds: n
	})), r(Mr(i)));
}
// node_modules/recharts/es6/shape/Symbols.js
var Xr = [
	"type",
	"size",
	"sizeType"
];
function Zr() {
	return Zr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Zr.apply(null, arguments);
}
function Qr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $r(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qr(Object(n), !0).forEach(function(t) {
			ei(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ei(e, t, n) {
	return (t = ti(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ti(e) {
	var t = ni(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ni(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ri(e, t) {
	if (e == null) return {};
	var n, r, i = ii(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ii(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var ai = {
	symbolCircle: on,
	symbolCross: sn,
	symbolDiamond: un,
	symbolSquare: dn,
	symbolStar: gn,
	symbolTriangle: vn,
	symbolWye: Cn
}, oi = Math.PI / 180, si = (e) => ai[`symbol${St(e)}`] || on, ci = (e, t, n) => {
	if (t === "area") return e;
	switch (n) {
		case "cross": return 5 * e * e / 9;
		case "diamond": return .5 * e * e / Math.sqrt(3);
		case "square": return e * e;
		case "star":
			var r = 18 * oi;
			return 1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2);
		case "triangle": return Math.sqrt(3) * e * e / 4;
		case "wye": return (21 - 10 * Math.sqrt(3)) * e * e / 8;
		default: return Math.PI * e * e / 4;
	}
};
function li(e, t, n) {
	var r = 0, i = (e) => {
		r = Math.max(r, Math.abs(e));
	}, a = {
		moveTo: i,
		lineTo: i,
		closePath: () => {},
		arc: (e, t, n) => i(Math.abs(e) + n),
		bezierCurveTo: (e, t, n, r, a) => i(a),
		quadraticCurveTo: (e, t, n) => i(n),
		arcTo: (e, t, n) => i(n),
		rect: (e, t, n) => {
			i(e), i(e + n);
		},
		ellipse: (e, t, n) => i(Math.abs(e) + n)
	};
	return si(e).draw(a, ci(t, n, e)), r;
}
var ui = (e, t) => {
	ai[`symbol${St(e)}`] = t;
}, di = (e) => {
	var t = e.type, n = t === void 0 ? "circle" : t, r = e.size, i = r === void 0 ? 64 : r, a = e.sizeType, o = a === void 0 ? "area" : a, s = $r($r({}, ri(e, Xr)), {}, {
		type: n,
		size: i,
		sizeType: o
	}), c = "circle";
	typeof n == "string" && (c = n);
	var u = () => {
		var e = si(c), t = wn().type(e).size(ci(i, o, c))();
		if (t !== null) return t;
	}, d = s.className, f = s.cx, p = s.cy, m = Ve(s);
	return I(f) && I(p) && I(i) ? /*#__PURE__*/ F.createElement("path", Zr({}, m, {
		className: l("recharts-symbols", d),
		transform: `translate(${f}, ${p})`,
		d: u()
	})) : null;
};
function fi(e, t) {
	var n = e ?? 64, r = t === "diameter" ? n : Math.sqrt(n);
	return Jr(r, r);
}
var pi = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ F.createElement(Yr, {
		fill: t,
		bounds: fi(e.size, e.sizeType)
	}, (t) => /*#__PURE__*/ F.createElement(di, Zr({}, e, { fill: t }))) : /*#__PURE__*/ F.createElement(di, Zr({}, e, { fill: t }));
};
pi.registerSymbol = ui;
// node_modules/recharts/es6/util/types.js
var mi = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, hi = (e, t) => {
	if (!e || typeof e == "function" || typeof e == "boolean") return null;
	var n = e;
	if (/*#__PURE__*/ (0, F.isValidElement)(e) && (n = e.props), typeof n != "object" && typeof n != "function") return null;
	var r = {};
	return Object.keys(n).forEach((e) => {
		Fe(e) && typeof n[e] == "function" && (r[e] = t || ((t) => n[e](n, t)));
	}), r;
}, gi = (e, t, n) => (r) => (e(t, n, r), null), _i = (e, t, n) => {
	if (e === null || typeof e != "object" && typeof e != "function") return null;
	var r = null;
	return Object.keys(e).forEach((i) => {
		var a = e[i];
		Fe(i) && typeof a == "function" && (r ||= {}, r[i] = gi(a, t, n));
	}), r;
};
// node_modules/recharts/es6/util/resolveDefaultProps.js
function vi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function yi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? vi(Object(n), !0).forEach(function(t) {
			bi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function bi(e, t, n) {
	return (t = xi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xi(e) {
	var t = Si(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Si(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ci(e, t) {
	var n = yi({}, e), r = t;
	return Object.keys(t).reduce((e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e), n);
}
function wi(e, t) {
	var n = yi({}, e);
	return Object.keys(t).forEach((e) => {
		var r = t[e];
		n[e] === void 0 && r !== void 0 && (n[e] = r);
	}), n;
}
// node_modules/recharts/es6/theme/useBackwardsCompatibleTheme.js
var Ti = (e, t, n) => {
	var r = mr();
	if (r == null) return n == null ? t : wi(t, n);
	var i = e(r);
	return i == null ? t : wi(t, i);
}, Ei = ["color"];
function Di(e, t) {
	if (e == null) return {};
	var n, r, i = Oi(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Oi(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ki(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ai(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ki(Object(n), !0).forEach(function(t) {
			ji(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ki(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ji(e, t, n) {
	return (t = Mi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Mi(e) {
	var t = Ni(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ni(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Pi() {
	return Pi = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Pi.apply(null, arguments);
}
var Fi = 32, Ii = {
	width: Fi,
	height: Fi
}, Li = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	layout: "horizontal",
	verticalAlign: "middle",
	labelStyle: {}
};
function Ri(e) {
	if (typeof e == "object" && e && "strokeDasharray" in e && e.strokeDasharray != null) return String(e.strokeDasharray);
}
var zi = 20, Bi = 3;
function Vi(e, t, n) {
	var r = e.fill, i = e.stroke;
	if (!t.inactive) return {
		fill: r,
		stroke: i
	};
	var a = (e) => e != null && e !== "none";
	return {
		fill: a(r) && (r === t.color || r === i) ? n : r,
		stroke: a(i) ? n : i
	};
}
function Hi(e) {
	var t = e.dot, n = e.color, r = e.dotColors, i = Fi / 2, a = t.symbol, o = li(a, zi, "diameter");
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-legend-icon" }, /*#__PURE__*/ F.createElement("path", {
		strokeWidth: 4,
		fill: "none",
		stroke: n,
		d: `M0,${i}H${i - o}M${i + o},${i}H${Fi}`
	}), /*#__PURE__*/ F.createElement(pi, {
		type: a,
		cx: i,
		cy: i,
		size: zi,
		sizeType: "diameter",
		fill: r.fill ?? "none",
		stroke: r.stroke ?? n,
		strokeWidth: Bi,
		strokeLinejoin: "round"
	}));
}
function Ui(e) {
	var t = e.dot, n = e.color, r = e.dotColors, i = Fi / 2, a = r.stroke != null && r.stroke !== "none", o = a ? {
		stroke: r.stroke,
		strokeWidth: Bi,
		strokeLinejoin: "round"
	} : {};
	return /*#__PURE__*/ F.createElement(pi, Pi({ fill: r.fill ?? n }, o, {
		cx: i,
		cy: i,
		size: a ? Fi - Bi : Fi,
		sizeType: "diameter",
		type: t.symbol
	}));
}
function Wi(e) {
	var t = e.data, n = e.iconType, r = e.inactiveColor, i = Fi / 2, a = Fi / 6, o = Fi / 3, s = t.inactive ? r : t.color, c = n ?? t.type, l = fr("recharts-legend-fill"), u = t.inactive ? void 0 : t.fill;
	if (c === "none") return null;
	var d = s, f = null;
	if (u != null) {
		var p = u.definition;
		d = Mr(l), f = /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement(p, {
			id: l,
			color: s,
			bounds: Ii
		}));
	}
	if (c === "plainline") return /*#__PURE__*/ F.createElement("line", {
		strokeWidth: 4,
		fill: "none",
		stroke: s,
		strokeDasharray: Ri(t.payload),
		x1: 0,
		y1: i,
		x2: Fi,
		y2: i,
		className: "recharts-legend-icon"
	});
	var m = t.dot == null ? void 0 : Vi(t.dot, t, r);
	if (c === "line" && t.dot != null && m != null) return /*#__PURE__*/ F.createElement(Hi, {
		dot: t.dot,
		color: s,
		dotColors: m
	});
	if (c === "line") return /*#__PURE__*/ F.createElement("path", {
		strokeWidth: 4,
		fill: "none",
		stroke: s,
		d: `M0,${i}h${o}
            A${a},${a},0,1,1,${2 * o},${i}
            H${Fi}M${2 * o},${i}
            A${a},${a},0,1,1,${o},${i}`,
		className: "recharts-legend-icon"
	});
	if (c === "rect") return /*#__PURE__*/ F.createElement(F.Fragment, null, f, /*#__PURE__*/ F.createElement("path", {
		stroke: "none",
		fill: d,
		d: `M0,${Fi / 8}h${Fi}v${Fi * 3 / 4}h${-Fi}z`,
		className: "recharts-legend-icon"
	}));
	if (/*#__PURE__*/ F.isValidElement(t.legendIcon)) {
		var h = Ai({}, t);
		return delete h.legendIcon, delete h.fill, /*#__PURE__*/ F.cloneElement(t.legendIcon, h);
	}
	return t.dot != null && m != null && c === t.dot.symbol ? /*#__PURE__*/ F.createElement(Ui, {
		dot: t.dot,
		color: s,
		dotColors: m
	}) : /*#__PURE__*/ F.createElement(F.Fragment, null, f, /*#__PURE__*/ F.createElement(pi, {
		fill: d,
		cx: i,
		cy: i,
		size: Fi,
		sizeType: "diameter",
		type: c
	}));
}
function Gi(e) {
	var t = e.payload, n = e.iconSize, r = e.layout, i = e.formatter, a = e.inactiveColor, o = e.iconType, s = e.labelStyle, c = e.typographyColor, u = {
		x: 0,
		y: 0,
		width: Fi,
		height: Fi
	}, d = {
		display: r === "horizontal" ? "inline-block" : "block",
		marginRight: 10,
		whiteSpace: "nowrap"
	}, f = {
		display: "inline-block",
		verticalAlign: "middle",
		marginRight: 4
	};
	return t.map((t, r) => {
		var p = t.formatter || i, m = l({
			"recharts-legend-item": !0,
			[`legend-item-${r}`]: !0,
			inactive: t.inactive
		});
		if (t.type === "none") return null;
		var h = typeof s == "object" ? Ai({}, s) : {};
		h.color = t.inactive ? a : h.color ?? t.color ?? c, h.whiteSpace ??= "normal", h.overflowWrap ??= "break-word";
		var g = p ? p(t.value, t, r) : t.value;
		return /*#__PURE__*/ F.createElement("li", Pi({
			className: m,
			style: d,
			key: `legend-item-${r}`
		}, _i(e, t, r)), /*#__PURE__*/ F.createElement(qe, {
			width: n,
			height: n,
			viewBox: u,
			style: f,
			"aria-label": t.value == null ? "legend icon" : `${t.value} legend icon`
		}, /*#__PURE__*/ F.createElement(Wi, {
			data: t,
			iconType: o,
			inactiveColor: a
		})), /*#__PURE__*/ F.createElement("span", {
			className: "recharts-legend-item-text",
			style: h
		}, g));
	});
}
var Ki = (e) => {
	var t, n = Ti((e) => ({
		typography: e.typography,
		legend: e.legend
	}), {}, void 0), r = Ci(e, Li), i = r.payload, a = r.layout, o = r.align, s = n?.typography ?? {}, c = s.color, l = Di(s, Ei);
	if (!i || !i.length) return null;
	var u = {
		padding: 0,
		margin: 0,
		textAlign: a === "horizontal" ? o : "left"
	};
	return /*#__PURE__*/ F.createElement("ul", {
		className: "recharts-default-legend",
		style: u
	}, /*#__PURE__*/ F.createElement(Gi, Pi({}, r, {
		labelStyle: Ai(Ai(Ai({}, l), n == null || (t = n.legend) == null ? void 0 : t.labelStyle), r.labelStyle),
		payload: i,
		typographyColor: c
	})));
};
// node_modules/es-toolkit/dist/array/uniqBy.mjs
function qi(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = t(i, r, e);
		n.has(a) || n.set(a, i);
	}
	return Array.from(n.values());
}
// node_modules/es-toolkit/dist/function/ary.mjs
function Ji(e, t) {
	return function(...n) {
		return e.apply(this, n.slice(0, t));
	};
}
// node_modules/es-toolkit/dist/function/identity.mjs
function Yi(e) {
	return e;
}
// node_modules/es-toolkit/dist/predicate/isLength.mjs
function Xi(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
// node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function Zi(e) {
	return e != null && typeof e != "function" && Xi(e.length);
}
// node_modules/es-toolkit/dist/compat/object/property.mjs
function Qi(e) {
	return function(t) {
		return ct(t, e);
	};
}
// node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function $i(e) {
	return e == null || typeof e != "object" && typeof e != "function";
}
// node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function ea(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
// node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function ta(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
// node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function na(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
// node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var ra = "[object RegExp]", ia = "[object String]", aa = "[object Number]", oa = "[object Boolean]", sa = "[object Arguments]", ca = "[object Symbol]", la = "[object Date]", ua = "[object Map]", da = "[object Set]", fa = "[object Array]", pa = "[object Function]", ma = "[object ArrayBuffer]", ha = "[object Object]", ga = "[object Error]", _a = "[object DataView]", va = "[object Uint8Array]", ya = "[object Uint8ClampedArray]", ba = "[object Uint16Array]", xa = "[object Uint32Array]", Sa = "[object BigUint64Array]", Ca = "[object Int8Array]", wa = "[object Int16Array]", Ta = "[object Int32Array]", Ea = "[object BigInt64Array]", Da = "[object Float32Array]", Oa = "[object Float64Array]", ka = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
	return this;
})();
// node_modules/es-toolkit/dist/predicate/isBuffer.mjs
function Aa(e) {
	return ka.Buffer !== void 0 && ka.Buffer.isBuffer(e);
}
// node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function ja(e, t) {
	return Ma(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function Ma(e, t, n, r = /* @__PURE__ */ new Map(), i = void 0) {
	let a = i?.(e, t, n, r);
	if (a !== void 0) return a;
	if ($i(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Ma(e[a], a, n, r, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		r.set(e, t);
		for (let [a, o] of e) t.set(a, Ma(o, a, n, r, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		r.set(e, t);
		for (let a of e) t.add(Ma(a, void 0, n, r, i));
		return t;
	}
	if (Aa(e)) return e.subarray();
	if (ea(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Ma(e[a], a, n, r, i);
		return t;
	}
	if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (typeof File < "u" && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (typeof Blob < "u" && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (e instanceof Error) {
		let t = structuredClone(e);
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, Na(t, e, n, r, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	if (typeof e == "object" && Pa(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), Na(t, e, n, r, i), t;
	}
	return e;
}
function Na(e, t, n = e, r, i) {
	let a = [...Object.keys(t), ...ta(t)];
	for (let o = 0; o < a.length; o++) {
		let s = a[o], c = Object.getOwnPropertyDescriptor(e, s);
		(c == null || c.writable) && (e[s] = Ma(t[s], s, n, r, i));
	}
}
function Pa(e) {
	switch (na(e)) {
		case sa:
		case fa:
		case ma:
		case _a:
		case oa:
		case la:
		case Da:
		case Oa:
		case Ca:
		case wa:
		case Ta:
		case ua:
		case aa:
		case ha:
		case ra:
		case da:
		case ia:
		case ca:
		case va:
		case ya:
		case ba:
		case xa: return !0;
		default: return !1;
	}
}
// node_modules/es-toolkit/dist/object/cloneDeep.mjs
function Fa(e) {
	return Ma(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
// node_modules/es-toolkit/dist/compat/util/eq.mjs
function Ia(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
// node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function La(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
// node_modules/es-toolkit/dist/compat/predicate/isMatchWith.mjs
function Ra(e, t, n) {
	return typeof n == "function" ? za(e, t, function e(t, r, i, a, o, s) {
		let c = n(t, r, i, a, o, s);
		return c === void 0 ? za(t, r, e, s, !1) : !!c;
	}, /* @__PURE__ */ new Map(), !0) : Ra(e, t, () => void 0);
}
function za(e, t, n, r, i = !1) {
	if (t === e) return !0;
	switch (typeof t) {
		case "object": return Ba(e, t, n, r, i);
		case "function": return Object.keys(t).length > 0 ? za(e, { ...t }, n, r, i) : Ia(e, t);
		default: return La(e) && i ? typeof t != "string" || t === "" : Ia(e, t);
	}
}
function Ba(e, t, n, r, i = !1) {
	if (t == null) return !0;
	if (Array.isArray(t)) return Ha(e, t, n, r);
	if (t instanceof Map) return Va(e, t, n, r);
	if (t instanceof Set) return Ua(e, t, n, r);
	let a = Object.keys(t);
	if (e == null) return i && a.length === 0;
	if (i) $i(e) && (e = Object(e));
	else {
		let t = na(e);
		if (t !== "[object Object]" && t !== "[object Arguments]") return !1;
	}
	if (a.length === 0) return !0;
	if (r?.has(t)) return r.get(t) === e;
	r?.set(t, e);
	try {
		for (let i = 0; i < a.length; i++) {
			let o = a[i];
			if (!(o in e) || t[o] === void 0 && e[o] !== void 0 || t[o] === null && e[o] !== null || !n(e[o], t[o], o, e, t, r)) return !1;
		}
		return !0;
	} finally {
		r?.delete(t);
	}
}
function Va(e, t, n, r) {
	if (t.size === 0) return !0;
	if (!(e instanceof Map)) return !1;
	for (let [i, a] of t.entries()) if (n(e.get(i), a, i, e, t, r) === !1) return !1;
	return !0;
}
function Ha(e, t, n, r) {
	if (t.length === 0) return !0;
	if (!Array.isArray(e)) return !1;
	let i = /* @__PURE__ */ new Set();
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = !1;
		for (let c = 0; c < e.length; c++) {
			if (i.has(c)) continue;
			let l = e[c], u = !1;
			if (n(l, o, a, e, t, r) && (u = !0), u) {
				i.add(c), s = !0;
				break;
			}
		}
		if (!s) return !1;
	}
	return !0;
}
function Ua(e, t, n, r) {
	return t.size === 0 || e instanceof Set && Ha([...e], [...t], n, r);
}
// node_modules/es-toolkit/dist/compat/predicate/isMatch.mjs
function Wa(e, t) {
	return Ra(e, t, () => void 0);
}
// node_modules/es-toolkit/dist/compat/predicate/matches.mjs
function Ga(e) {
	return e = Fa(e), (t) => Wa(t, e);
}
// node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
function Ka(e, t) {
	return ja(e, (n, r, i, a) => {
		let o = t?.(n, r, i, a);
		if (o !== void 0) return o;
		if (typeof e == "object") {
			if (na(e) === "[object Object]" && typeof e.constructor != "function") {
				let t = {};
				return a.set(e, t), Na(t, e, i, a), t;
			}
			switch (Object.prototype.toString.call(e)) {
				case aa:
				case ia:
				case oa: {
					let t = new e.constructor(e?.valueOf());
					return Na(t, e), t;
				}
				case sa: {
					let t = {};
					return Na(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
				}
				default: return;
			}
		}
	});
}
// node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function qa(e) {
	return Ka(e);
}
// node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var Ja = /^(?:0|[1-9]\d*)$/;
function Ya(e, t = 2 ** 53 - 1) {
	switch (typeof e) {
		case "number": return Number.isInteger(e) && e >= 0 && e < t;
		case "symbol": return !1;
		case "string": return Ja.test(e);
	}
}
// node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function Xa(e) {
	return typeof e == "object" && !!e && na(e) === "[object Arguments]";
}
// node_modules/es-toolkit/dist/compat/object/has.mjs
function Za(e, t) {
	let n;
	if (n = Array.isArray(t) ? t : typeof t == "string" && nt(t) && !(t in Object(e)) ? st(t) : [t], n.length === 0) return !1;
	let r = e;
	for (let e = 0; e < n.length; e++) {
		let t = rt(n[e]);
		if ((r == null || !Object.hasOwn(r, t)) && !((Array.isArray(r) || Xa(r)) && Ya(t) && Number(t) < r.length)) return !1;
		r = r[t];
	}
	return !0;
}
// node_modules/es-toolkit/dist/compat/predicate/matchesProperty.mjs
function Qa(e, t) {
	switch (typeof e) {
		case "object":
			Object.is(e?.valueOf(), -0) && (e = "-0");
			break;
		case "number": e = rt(e);
	}
	return t = qa(t), function(n) {
		let r = ct(n, e);
		return r === void 0 ? Za(n, e) : t === void 0 ? r === void 0 : Wa(r, t);
	};
}
// node_modules/es-toolkit/dist/compat/util/iteratee.mjs
function $a(e) {
	if (e == null) return Yi;
	switch (typeof e) {
		case "function": return e;
		case "object": return Array.isArray(e) && e.length === 2 ? Qa(e[0], e[1]) : Ga(e);
		default: return Qi(e);
	}
}
// node_modules/es-toolkit/dist/compat/_internal/normalizeZero.mjs
function eo(e) {
	return e === 0 ? 0 : e;
}
// node_modules/es-toolkit/dist/compat/array/uniqBy.mjs
function to(e, t = Yi) {
	return Zi(e) ? qi(Array.from(e), Ji($a(t), 1)).map(eo) : [];
}
// node_modules/recharts/es6/util/payload/getUniqPayload.js
function no(e, t, n) {
	return t === !0 ? to(e, n) : typeof t == "function" ? to(e, t) : e;
}
// node_modules/recharts/es6/state/RechartsReduxContext.js
var ro = /*#__PURE__*/ (0, F.createContext)(null), io = (e) => e, B = () => {
	var e = (0, F.useContext)(ro);
	return e ? e.store.dispatch : io;
}, ao = () => {}, oo = () => ao, so = (e, t) => e === t;
function V(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : so, n = (0, F.useContext)(ro), r = (0, F.useMemo)(() => n ? (t) => {
		if (t != null) return e(t);
	} : ao, [n, e]);
	return (0, Je.useSyncExternalStoreWithSelector)(n ? n.subscription.addNestedSub : oo, n ? n.store.getState : ao, n ? n.store.getState : ao, r, t);
}
// node_modules/reselect/dist/reselect.mjs
function co(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function lo(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var uo = (e) => Array.isArray(e) ? e : [e];
function fo(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return lo(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function po(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var mo = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, ho = typeof WeakRef > "u" ? mo : WeakRef, go = 0, _o = 1;
function vo() {
	return {
		s: go,
		v: void 0,
		o: null,
		p: null
	};
}
function yo(e) {
	return e instanceof ho ? e.deref() : e;
}
function bo(e, t = {}) {
	let n = vo(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = vo(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = vo(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === _o) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = yo(i);
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? /* @__PURE__ */ new ho(c) : c;
		}
		return s.s = _o, s.v = c, c;
	}
	return o.clearCache = () => {
		n = vo(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function xo(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), co(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = bo, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = uo(c), f = uo(u), p = fo(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let e = po(p, arguments);
			return i = m.apply(null, e), i;
		}, ...f);
		return Object.assign(h, {
			resultFunc: o,
			memoizedResultFunc: m,
			dependencies: p,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var H = /* @__PURE__ */ xo(bo);
// node_modules/es-toolkit/dist/array/flatten.mjs
function So(e, t = 1) {
	let n = [], r = Math.floor(t), i = (e, t) => {
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
		}
	};
	return i(e, 0), n;
}
// node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs
function Co(e, t, n) {
	return La(n) && (typeof t == "number" && Zi(n) && Ya(t) && t < n.length || typeof t == "string" && t in n) ? Ia(n[t], e) : !1;
}
// node_modules/es-toolkit/dist/compat/_internal/compareValues.mjs
function wo(e) {
	return typeof e == "symbol" ? 1 : e === null ? 2 : e === void 0 ? 3 : e === e ? 0 : 4;
}
var To = (e, t, n) => {
	if (e !== t) {
		let r = wo(e), i = wo(t);
		if (r === i && r === 0) {
			if (e < t) return n === "desc" ? 1 : -1;
			if (e > t) return n === "desc" ? -1 : 1;
		}
		return n === "desc" ? i - r : r - i;
	}
	return 0;
}, Eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Do = /^\w*$/;
function Oo(e, t) {
	return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || it(e) ? !0 : typeof e == "string" && (Do.test(e) || !Eo.test(e)) || t != null && Object.hasOwn(t, e);
}
// node_modules/es-toolkit/dist/compat/array/orderBy.mjs
function ko(e, t, n, r) {
	if (e == null) return [];
	n = r ? void 0 : n, Array.isArray(e) || (e = Zi(e) ? Array.from(e) : Object.values(e)), Array.isArray(t) || (t = t == null ? [null] : [t]), t.length === 0 && (t = [null]), Array.isArray(n) || (n = n == null ? [] : [n]), n = n.map((e) => String(e));
	let i = (e, t) => {
		let n = e, r = 0;
		for (; r < t.length && n != null; ++r) n = n[t[r]];
		return r > 0 && r === t.length ? n : void 0;
	}, a = (e, t) => {
		if (e == null) return t;
		if (t != null) return typeof e == "object" && "key" in e ? Object.hasOwn(t, e.key) ? t[e.key] : i(t, e.path) : typeof e == "function" ? e(t) : Array.isArray(e) ? i(t, e) : t[e];
	}, o = t.map((e) => (Array.isArray(e) && e.length === 1 && (e = e[0]), e == null || typeof e == "function" || Array.isArray(e) || Oo(e) ? e : {
		key: e,
		path: st(e)
	}));
	return e.map((e) => ({
		original: e,
		criteria: o.map((t) => a(t, e))
	})).slice().sort((e, t) => {
		for (let r = 0; r < o.length; r++) {
			let i = To(e.criteria[r], t.criteria[r], n[r]);
			if (i !== 0) return i;
		}
		return 0;
	}).map((e) => e.original);
}
// node_modules/es-toolkit/dist/compat/array/sortBy.mjs
function Ao(e, ...t) {
	let n = t.length;
	return n > 1 && Co(e, t[0], t[1]) ? t = [] : n > 2 && Co(t[0], t[1], t[2]) && (t = [t[0]]), ko(e, So(t), ["asc"]);
}
// node_modules/recharts/es6/state/selectors/legendSelectors.js
var jo = (e) => e.legend.settings, Mo = (e) => e.legend.size, No = H([(e) => e.legend.payload, jo], (e, t) => {
	var n = t.itemSorter, r = e.flat(1);
	return n ? Ao(r, n) : r;
});
// node_modules/recharts/es6/context/legendPayloadContext.js
function Po() {
	return V(No);
}
// node_modules/recharts/es6/util/useElementOffset.js
function Fo(e, t) {
	return Bo(e) || zo(e, t) || Lo(e, t) || Io();
}
function Io() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Lo(e, t) {
	if (e) {
		if (typeof e == "string") return Ro(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ro(e, t) : void 0;
	}
}
function Ro(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function zo(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Bo(e) {
	if (Array.isArray(e)) return e;
}
var Vo = 1;
function Ho(e, t) {
	return Math.abs(e.height - t.height) > Vo || Math.abs(e.width - t.width) > Vo;
}
function Uo(e) {
	var t = e.getBoundingClientRect();
	return {
		height: t.height,
		left: t.left,
		top: t.top,
		width: t.width
	};
}
function Wo() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = Fo((0, F.useState)({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	}), 2), n = t[0], r = t[1], i = (0, F.useRef)(null), a = (0, F.useRef)(null), o = (0, F.useRef)(n), s = (0, F.useCallback)(() => {
		var e = a.current;
		if (e != null) {
			var t = Uo(e);
			Ho(t, o.current) && (o.current = t, r(t));
		}
	}, []), c = (0, F.useCallback)((e) => {
		var t;
		if (a.current = e, (t = i.current) == null || t.disconnect(), i.current = null, e != null && (s(), typeof ResizeObserver < "u")) {
			var n = new ResizeObserver(s);
			n.observe(e), i.current = n;
		}
	}, [s]);
	return (0, F.useEffect)(s, [s, ...e]), [n, c];
}
// node_modules/redux/dist/redux.mjs
function Go(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ko = typeof Symbol == "function" && Symbol.observable || "@@observable", qo = () => Math.random().toString(36).substring(7).split("").join("."), Jo = {
	INIT: `@@redux/INIT${/* @__PURE__ */ qo()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ qo()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${qo()}`
};
function Yo(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Xo(e, t, n) {
	if (typeof e != "function") throw Error(Go(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(Go(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(Go(1));
		return n(Xo)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(Go(3));
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(Go(4));
		if (c) throw Error(Go(5));
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(Go(6));
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!Yo(e)) throw Error(Go(7));
		if (e.type === void 0) throw Error(Go(8));
		if (typeof e.type != "string") throw Error(Go(17));
		if (c) throw Error(Go(9));
		try {
			c = !0, i = r(i, e);
		} finally {
			c = !1;
		}
		return (a = o).forEach((e) => {
			e();
		}), e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(Go(10));
		r = e, f({ type: Jo.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(Go(11));
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[Ko]() {
				return this;
			}
		};
	}
	return f({ type: Jo.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[Ko]: m
	};
}
function Zo(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: Jo.INIT }) === void 0) throw Error(Go(12));
		if (n(void 0, { type: Jo.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(Go(13));
	});
}
function Qo(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		Zo(n);
	} catch (e) {
		i = e;
	}
	return function(e = {}, t) {
		if (i) throw i;
		let a = !1, o = {};
		for (let i = 0; i < r.length; i++) {
			let s = r[i], c = n[s], l = e[s], u = c(l, t);
			if (u === void 0) throw t && t.type, Error(Go(14));
			o[s] = u, a ||= u !== l;
		}
		return a ||= r.length !== Object.keys(e).length, a ? o : e;
	};
}
function $o(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function es(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(Go(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = $o(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function ts(e) {
	return Yo(e) && "type" in e && typeof e.type == "string";
}
// node_modules/immer/dist/immer.mjs
var ns = Symbol.for("immer-nothing"), rs = Symbol.for("immer-draftable"), is = Symbol.for("immer-state");
function as(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var os = Object, ss = os.getPrototypeOf, cs = "constructor", ls = "prototype", us = "configurable", ds = "enumerable", fs = "writable", ps = "value", ms = (e) => !!e && !!e[is];
function hs(e) {
	return e ? vs(e) || Ts(e) || !!e[rs] || !!e[cs]?.[rs] || Es(e) || Ds(e) : !1;
}
var gs = os[ls][cs].toString(), _s = /* @__PURE__ */ new WeakMap();
function vs(e) {
	if (!e || !Os(e)) return !1;
	let t = ss(e);
	if (t === null || t === os[ls]) return !0;
	let n = os.hasOwnProperty.call(t, cs) && t[cs];
	if (n === Object) return !0;
	if (!ks(n)) return !1;
	let r = _s.get(n);
	return r === void 0 && (r = Function.toString.call(n), _s.set(n, r)), r === gs;
}
function ys(e, t, n = !0) {
	bs(e) === 0 ? (n ? Reflect.ownKeys(e) : os.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function bs(e) {
	let t = e[is];
	return t ? t.type_ : Ts(e) ? 1 : Es(e) ? 2 : Ds(e) ? 3 : 0;
}
var xs = (e, t, n = bs(e)) => n === 2 ? e.has(t) : os[ls].hasOwnProperty.call(e, t), Ss = (e, t, n = bs(e)) => n === 2 ? e.get(t) : e[t], Cs = (e, t, n, r = bs(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function ws(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Ts = Array.isArray, Es = (e) => e instanceof Map, Ds = (e) => e instanceof Set, Os = (e) => typeof e == "object", ks = (e) => typeof e == "function", As = (e) => typeof e == "boolean";
function js(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var Ms = (e) => e.copy_ || e.base_, Ns = (e) => e.modified_ ? e.copy_ : e.base_;
function Ps(e, t) {
	if (Es(e)) return new Map(e);
	if (Ds(e)) return new Set(e);
	if (Ts(e)) return Array[ls].slice.call(e);
	let n = vs(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = os.getOwnPropertyDescriptors(e);
		delete t[is];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[fs] === !1 && (a[fs] = !0, a[us] = !0), (a.get || a.set) && (t[i] = {
				[us]: !0,
				[fs]: !0,
				[ds]: a[ds],
				[ps]: e[i]
			});
		}
		return os.create(ss(e), t);
	}
	{
		let t = ss(e);
		if (t !== null && n) return { ...e };
		let r = os.create(t);
		return os.assign(r, e);
	}
}
function Fs(e, t = !1) {
	return Rs(e) || ms(e) || !hs(e) || (bs(e) > 1 && os.defineProperties(e, {
		set: Ls,
		add: Ls,
		clear: Ls,
		delete: Ls
	}), os.freeze(e), t && ys(e, (e, t) => {
		Fs(t, !0);
	}, !1)), e;
}
function Is() {
	as(2);
}
var Ls = { [ps]: Is };
function Rs(e) {
	return e === null || !Os(e) || os.isFrozen(e);
}
var zs = "MapSet", Bs = "Patches", Vs = "ArrayMethods", Hs = {};
function Us(e) {
	let t = Hs[e];
	return t || as(0, e), t;
}
var Ws = (e) => !!Hs[e], Gs, Ks = () => Gs, qs = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: Ws(zs) ? Us(zs) : void 0,
	arrayMethodsPlugin_: Ws(Vs) ? Us(Vs) : void 0
});
function Js(e, t) {
	t && (e.patchPlugin_ = Us(Bs), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ys(e) {
	Xs(e), e.drafts_.forEach(Qs), e.drafts_ = null;
}
function Xs(e) {
	e === Gs && (Gs = e.parent_);
}
var Zs = (e) => Gs = qs(Gs, e);
function Qs(e) {
	let t = e[is];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function $s(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[is].modified_ && (Ys(t), as(4)), hs(e) && (e = ec(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[is].base_, e, t);
	} else e = ec(t, n);
	return tc(t, e, !0), Ys(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === ns ? void 0 : e;
}
function ec(e, t) {
	if (Rs(t)) return t;
	let n = t[is];
	if (!n) return lc(t, e.handledSet_, e);
	if (!rc(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		sc(n, e);
	}
	return n.copy_;
}
function tc(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Fs(t, n);
}
function nc(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var rc = (e, t) => e.scope_ === t, ic = [];
function ac(e, t, n, r) {
	let i = Ms(e), a = e.type_;
	if (r !== void 0 && Ss(i, r, a) === t) {
		Cs(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		ys(i, (e, n) => {
			if (ms(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? ic;
	for (let e of o) Cs(i, e, n, a);
}
function oc(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !rc(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = Ns(i);
		ac(e, i.draft_ ?? i, a, n), sc(i, r);
	});
}
function sc(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		nc(e);
	}
}
function cc(e, t, n) {
	let { scope_: r } = e;
	if (ms(n)) {
		let i = n[is];
		rc(i, r) && i.callbacks_.push(function() {
			vc(e), ac(e, n, Ns(i), t);
		});
	} else hs(n) && e.callbacks_.push(function() {
		let i = Ms(e);
		e.type_ === 3 ? i.has(n) && lc(n, r.handledSet_, r) : Ss(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && lc(Ss(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function lc(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || ms(e) || t.has(e) || !hs(e) || Rs(e) || (t.add(e), ys(e, (r, i) => {
		if (ms(i)) {
			let t = i[is];
			rc(t, n) && (Cs(e, r, Ns(t), e.type_), nc(t));
		} else hs(i) && lc(i, t, n);
	})), e;
}
function uc(e, t) {
	let n = Ts(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : Ks(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = dc;
	n && (i = [r], a = fc);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var dc = {
	get(e, t) {
		if (t === is) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = Ms(e);
		if (!xs(i, t, e.type_)) return hc(e, i, t);
		let a = i[t];
		if (e.finalized_ || !hs(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && js(t)) return a;
		if (a === pc(e.base_, t) || mc(e, t, a)) {
			vc(e);
			let n = e.type_ === 1 ? +t : t, r = bc(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in Ms(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(Ms(e));
	},
	set(e, t, n) {
		let r = gc(Ms(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = pc(Ms(e), t), i = r?.[is];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.delete(t), !0;
			if (ws(n, r) && (n !== void 0 || xs(e.base_, t, e.type_))) return !0;
			vc(e), _c(e);
		}
		return e.copy_[t] === n && (n !== void 0 || xs(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), cc(e, t, n)), !0;
	},
	deleteProperty(e, t) {
		return vc(e), pc(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), _c(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = Ms(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[fs]: !0,
			[us]: e.type_ !== 1 || t !== "length",
			[ds]: r[ds],
			[ps]: n[t]
		};
	},
	defineProperty() {
		as(11);
	},
	getPrototypeOf(e) {
		return ss(e.base_);
	},
	setPrototypeOf() {
		as(12);
	}
}, fc = {};
for (let e in dc) {
	let t = dc[e];
	fc[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
fc.deleteProperty = function(e, t) {
	return fc.set.call(this, e, t, void 0);
}, fc.set = function(e, t, n) {
	return dc.set.call(this, e[0], t, n, e[0]);
};
function pc(e, t) {
	let n = e[is];
	return (n ? Ms(n) : e)[t];
}
function mc(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || e.assigned_?.get(t) || !hs(n) || n[is] ? !1 : e.baseRefs_.has(n);
}
function hc(e, t, n) {
	let r = gc(t, n);
	return r ? ps in r ? r[ps] : r.get?.call(e.draft_) : void 0;
}
function gc(e, t) {
	if (!(t in e)) return;
	let n = ss(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = ss(n);
	}
}
function _c(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && _c(e.parent_));
}
function vc(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), Ps(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var yc = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (ks(e) && !ks(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			ks(t) || as(6), n !== void 0 && !ks(n) && as(7);
			let r;
			if (hs(e)) {
				let i = Zs(this), a = bc(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? Ys(i) : Xs(i);
				}
				return Js(i, n), $s(r, i);
			}
			if (!e || !Os(e)) {
				if (r = t(e), r === void 0 && (r = e), r === ns && (r = void 0), this.autoFreeze_ && Fs(r, !0), n) {
					let t = [], i = [];
					Us(Bs).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			}
			as(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (ks(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, As(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), As(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), As(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		hs(e) || as(8), ms(e) && (e = xc(e));
		let t = Zs(this), n = bc(t, e, void 0);
		return n[is].isManual_ = !0, Xs(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[is];
		n && n.isManual_ || as(9);
		let { scope_: r } = n;
		return Js(r, t), $s(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = Us(Bs).applyPatches_;
		return ms(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function bc(e, t, n, r) {
	let [i, a] = Es(t) ? Us(zs).proxyMap_(t, n) : Ds(t) ? Us(zs).proxySet_(t, n) : uc(t, n);
	return (n?.scope_ ?? Ks()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? oc(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function xc(e) {
	return ms(e) || as(10, e), Sc(e);
}
function Sc(e) {
	if (!hs(e) || Rs(e)) return e;
	let t = e[is], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = Ps(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = Ps(e, !0);
	return ys(n, (e, t) => {
		Cs(n, e, Sc(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from;
var Cc = new yc().produce, U = (e) => e;
// node_modules/redux-thunk/dist/redux-thunk.mjs
function wc(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var Tc = wc(), Ec = wc, Dc = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? $o : $o.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function Oc(e, t) {
	function n(...n) {
		if (t) {
			let r = t(...n);
			if (!r) throw Error(Ll(0));
			return {
				type: e,
				payload: r.payload,
				..."meta" in r && { meta: r.meta },
				..."error" in r && { error: r.error }
			};
		}
		return {
			type: e,
			payload: n[0]
		};
	}
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => ts(t) && t.type === e, n;
}
var kc = class e extends Array {
	constructor(...t) {
		super(...t), Object.setPrototypeOf(this, e.prototype);
	}
	static get [Symbol.species]() {
		return e;
	}
	concat(...e) {
		return super.concat.apply(this, e);
	}
	prepend(...t) {
		return t.length === 1 && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this));
	}
};
function Ac(e) {
	return hs(e) ? Cc(e, () => {}) : e;
}
function jc(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Mc(e) {
	return typeof e == "boolean";
}
var Nc = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new kc();
	return t && (Mc(t) ? a.push(Tc) : a.push(Ec(t.extraArgument))), a;
}, Pc = "RTK_autoBatch", Fc = () => (e) => ({
	payload: e,
	meta: { [Pc]: !0 }
}), Ic = (e) => (t) => {
	setTimeout(t, e);
}, Lc = (e, t) => (n) => {
	let r = !1, i = () => {
		r || (r = !0, cancelAnimationFrame(a), clearTimeout(o), n());
	}, a = e(i), o = setTimeout(i, t);
}, Rc = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? Lc(window.requestAnimationFrame, 100) : Ic(10) : e.type === "callback" ? e.queueNotification : Ic(e.timeout), l = () => {
		o = !1, a && (a = !1, s.forEach((e) => e()));
	};
	return Object.assign({}, r, {
		subscribe(e) {
			let t = r.subscribe(() => i && e());
			return s.add(e), () => {
				t(), s.delete(e);
			};
		},
		dispatch(e) {
			try {
				return i = !e?.meta?.[Pc], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, zc = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new kc(e);
	return n && r.push(Rc(typeof n == "object" ? n : void 0)), r;
};
function Bc(e) {
	let t = Nc(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (Yo(n)) c = Qo(n);
	else throw Error(Ll(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = $o;
	i && (u = Dc({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = zc(es(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return Xo(c, o, p);
}
function Vc(e) {
	let t = {}, n = [], r, i = {
		addCase(e, n) {
			let r = typeof e == "string" ? e : e.type;
			if (!r) throw Error(Ll(28));
			if (r in t) throw Error(Ll(29));
			return t[r] = n, i;
		},
		addAsyncThunk(e, r) {
			return r.pending && (t[e.pending.type] = r.pending), r.rejected && (t[e.rejected.type] = r.rejected), r.fulfilled && (t[e.fulfilled.type] = r.fulfilled), r.settled && n.push({
				matcher: e.settled,
				reducer: r.settled
			}), i;
		},
		addMatcher(e, t) {
			return n.push({
				matcher: e,
				reducer: t
			}), i;
		},
		addDefaultCase(e) {
			return r = e, i;
		}
	};
	return e(i), [
		t,
		n,
		r
	];
}
function Hc(e) {
	return typeof e == "function";
}
function Uc(e, t) {
	let [n, r, i] = Vc(t), a;
	if (Hc(e)) a = () => Ac(e());
	else {
		let t = Ac(e);
		a = () => t;
	}
	function o(e = a(), t) {
		let o = [n[t.type], ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e)];
		return o.filter((e) => !!e).length === 0 && (o = [i]), o.reduce((e, n) => {
			if (n) {
				if (ms(e)) {
					let r = n(e, t);
					return r === void 0 ? e : r;
				}
				if (hs(e)) return Cc(e, (e) => n(e, t));
				{
					let r = n(e, t);
					if (r === void 0) {
						if (e === null) return e;
						throw Error("A case reducer on a non-draftable value must not return undefined");
					}
					return r;
				}
			}
			return e;
		}, e);
	}
	return o.getInitialState = a, o;
}
var Wc = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Gc = (e = 21) => {
	let t = "", n = e;
	for (; n--;) t += Wc[Math.random() * 64 | 0];
	return t;
}, Kc = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function qc(e, t) {
	return `${e}/${t}`;
}
function Jc({ creators: e } = {}) {
	let t = e?.asyncThunk?.[Kc];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(Ll(11));
		let i = (typeof e.reducers == "function" ? e.reducers(Zc()) : e.reducers) || {}, a = Object.keys(i), o = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		}, s = {
			addCase(e, t) {
				let n = typeof e == "string" ? e : e.type;
				if (!n) throw Error(Ll(12));
				if (n in o.sliceCaseReducersByType) throw Error(Ll(13));
				return o.sliceCaseReducersByType[n] = t, s;
			},
			addMatcher(e, t) {
				return o.sliceMatchers.push({
					matcher: e,
					reducer: t
				}), s;
			},
			exposeAction(e, t) {
				return o.actionCreators[e] = t, s;
			},
			exposeCaseReducer(e, t) {
				return o.sliceCaseReducersByName[e] = t, s;
			}
		};
		a.forEach((r) => {
			let a = i[r], o = {
				reducerName: r,
				type: qc(n, r),
				createNotation: typeof e.reducers == "function"
			};
			$c(a) ? tl(o, a, s, t) : Qc(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? Vc(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return Uc(e.initialState, (e) => {
				for (let t in i) e.addCase(t, i[t]);
				for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
				for (let t of n) e.addMatcher(t.matcher, t.reducer);
				r && e.addDefaultCase(r);
			});
		}
		let l = (e) => e, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f;
		function p(e, t) {
			return f ||= c(), f(e, t);
		}
		function m() {
			return f ||= c(), f.getInitialState();
		}
		function h(t, n = !1) {
			function r(e) {
				let i = e[t];
				return i === void 0 && n && (i = jc(d, r, m)), i;
			}
			function i(t = l) {
				return jc(jc(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = Yc(a, t, () => jc(d, t, m), n);
					return r;
				});
			}
			return {
				reducerPath: t,
				getSelectors: i,
				get selectors() {
					return i(r);
				},
				selectSlice: r
			};
		}
		let g = {
			name: n,
			reducer: p,
			actions: o.actionCreators,
			caseReducers: o.sliceCaseReducersByName,
			getInitialState: m,
			...h(r),
			injectInto(e, { reducerPath: t, ...n } = {}) {
				let i = t ?? r;
				return e.inject({
					reducerPath: i,
					reducer: p
				}, n), {
					...g,
					...h(i, !0)
				};
			}
		};
		return g;
	};
}
function Yc(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var Xc = /* @__PURE__ */ Jc();
function Zc() {
	function e(e, t) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator: e,
			...t
		};
	}
	return e.withTypes = () => e, {
		reducer(e) {
			return Object.assign({ [e.name](...t) {
				return e(...t);
			} }[e.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(e, t) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare: e,
				reducer: t
			};
		},
		asyncThunk: e
	};
}
function Qc({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !el(r)) throw Error(Ll(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? Oc(e, o) : Oc(e));
}
function $c(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function el(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function tl({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(Ll(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || nl,
		pending: s || nl,
		rejected: c || nl,
		settled: l || nl
	});
}
function nl() {}
var rl = "task", il = "listener", al = "completed", ol = "cancelled", sl = `task-${ol}`, cl = `task-${al}`, ll = `${il}-${ol}`, ul = `${il}-${al}`, dl = class {
	constructor(e) {
		this.code = e, this.message = `${rl} ${ol} (reason: ${e})`;
	}
	code;
	name = "TaskAbortError";
	message;
}, fl = (e, t) => {
	if (typeof e != "function") throw TypeError(Ll(32));
}, pl = () => {}, ml = (e, t = pl) => (e.catch(t), e), hl = (e, t) => (e.addEventListener("abort", t, { once: !0 }), () => e.removeEventListener("abort", t)), gl = (e) => {
	if (e.aborted) throw new dl(e.reason);
};
function _l(e, t) {
	let n = pl;
	return new Promise((r, i) => {
		let a = () => i(new dl(e.reason));
		e.aborted ? a() : (n = hl(e, a), t.finally(() => n()).then(r, i));
	}).finally(() => {
		n = pl;
	});
}
var vl = async (e, t) => {
	try {
		return await Promise.resolve(), {
			status: "ok",
			value: await e()
		};
	} catch (e) {
		return {
			status: e instanceof dl ? "cancelled" : "rejected",
			error: e
		};
	} finally {
		t?.();
	}
}, yl = (e) => (t) => ml(_l(e, t).then((t) => (gl(e), t))), bl = (e) => {
	let t = yl(e);
	return (e) => t(new Promise((t) => setTimeout(t, e)));
}, { assign: xl } = Object, Sl = {}, Cl = "listenerMiddleware", wl = (e, t) => {
	let n = (t) => hl(e, () => t.abort(e.reason));
	return (r, i) => {
		fl(r, "taskExecutor");
		let a = new AbortController();
		n(a);
		let o = vl(async () => {
			gl(e), gl(a.signal);
			let t = await r({
				pause: yl(a.signal),
				delay: bl(a.signal),
				signal: a.signal
			});
			return gl(a.signal), t;
		}, () => a.abort(cl));
		return i?.autoJoin && t.push(o.catch(pl)), {
			result: yl(e)(o),
			cancel() {
				a.abort(sl);
			}
		};
	};
}, Tl = (e, t) => {
	let n = async (n, r) => {
		gl(t);
		let i = () => {}, a = [new Promise((t, r) => {
			let a = e({
				predicate: n,
				effect: (e, n) => {
					n.unsubscribe(), t([
						e,
						n.getState(),
						n.getOriginalState()
					]);
				}
			});
			i = () => {
				a(), r();
			};
		})];
		r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
		try {
			let e = await _l(t, Promise.race(a));
			return gl(t), e;
		} finally {
			i();
		}
	};
	return ((e, t) => ml(n(e, t)));
}, El = (e) => {
	let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
	if (t) i = Oc(t).match;
	else if (n) t = n.type, i = n.match;
	else if (r) i = r;
	else if (!i) throw Error(Ll(21));
	return fl(a, "options.listener"), {
		predicate: i,
		type: t,
		effect: a
	};
}, Dl = /* @__PURE__ */ xl((e) => {
	let { type: t, predicate: n, effect: r } = El(e);
	return {
		id: Gc(),
		effect: r,
		type: t,
		predicate: n,
		pending: /* @__PURE__ */ new Set(),
		unsubscribe: () => {
			throw Error(Ll(22));
		}
	};
}, { withTypes: () => Dl }), Ol = (e, t) => {
	let { type: n, effect: r, predicate: i } = El(t);
	return Array.from(e.values()).find((e) => (typeof n == "string" ? e.type === n : e.predicate === i) && e.effect === r);
}, kl = (e) => {
	e.pending.forEach((e) => {
		e.abort(ll);
	});
}, Al = (e, t) => () => {
	for (let e of t.keys()) kl(e);
	e.clear();
}, jl = (e, t, n) => {
	try {
		e(t, n);
	} catch (e) {
		setTimeout(() => {
			throw e;
		}, 0);
	}
}, Ml = /* @__PURE__ */ xl(/* @__PURE__ */ Oc(`${Cl}/add`), { withTypes: () => Ml }), Nl = /* @__PURE__ */ Oc(`${Cl}/removeAll`), Pl = /* @__PURE__ */ xl(/* @__PURE__ */ Oc(`${Cl}/remove`), { withTypes: () => Pl }), Fl = (...e) => {
	console.error(`${Cl}/error`, ...e);
}, Il = (e = {}) => {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = (e) => {
		let t = n.get(e) ?? 0;
		n.set(e, t + 1);
	}, i = (e) => {
		let t = n.get(e) ?? 1;
		t === 1 ? n.delete(e) : n.set(e, t - 1);
	}, { extra: a, onError: o = Fl } = e;
	fl(o, "onError");
	let s = (e) => (e.unsubscribe = () => t.delete(e.id), t.set(e.id, e), (t) => {
		e.unsubscribe(), t?.cancelActive && kl(e);
	}), c = ((e) => {
		let n = Ol(t, e) ?? Dl(e);
		return s(n);
	});
	xl(c, { withTypes: () => c });
	let l = (e) => {
		let n = Ol(t, e);
		return n && (n.unsubscribe(), e.cancelActive && kl(n)), !!n;
	};
	xl(l, { withTypes: () => l });
	let u = async (e, n, s, l) => {
		let u = new AbortController(), d = Tl(c, u.signal), f = [];
		try {
			e.pending.add(u), r(e), await Promise.resolve(e.effect(n, xl({}, s, {
				getOriginalState: l,
				condition: (e, t) => d(e, t).then(Boolean),
				take: d,
				delay: bl(u.signal),
				pause: yl(u.signal),
				extra: a,
				signal: u.signal,
				fork: wl(u.signal, f),
				unsubscribe: e.unsubscribe,
				subscribe: () => {
					t.set(e.id, e);
				},
				cancelActiveListeners: () => {
					e.pending.forEach((e, t, n) => {
						e !== u && (e.abort(ll), n.delete(e));
					});
				},
				cancel: () => {
					u.abort(ll), e.pending.delete(u);
				},
				throwIfCancelled: () => {
					gl(u.signal);
				}
			})));
		} catch (e) {
			e instanceof dl || jl(o, e, { raisedBy: "effect" });
		} finally {
			await Promise.all(f), u.abort(ul), i(e), e.pending.delete(u);
		}
	}, d = Al(t, n);
	return {
		middleware: (e) => (n) => (r) => {
			if (!ts(r)) return n(r);
			if (Ml.match(r)) return c(r.payload);
			if (Nl.match(r)) {
				d();
				return;
			}
			if (Pl.match(r)) return l(r.payload);
			let i = e.getState(), a = () => {
				if (i === Sl) throw Error(Ll(23));
				return i;
			}, s;
			try {
				if (s = n(r), t.size > 0) {
					let n = e.getState(), s = Array.from(t.values());
					for (let t of s) {
						let s = !1;
						try {
							s = t.predicate(r, n, i);
						} catch (e) {
							s = !1, jl(o, e, { raisedBy: "predicate" });
						}
						s && u(t, r, e, a);
					}
				}
			} finally {
				i = Sl;
			}
			return s;
		},
		startListening: c,
		stopListening: l,
		clearListeners: d
	};
};
function Ll(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
// node_modules/recharts/es6/state/layoutSlice.js
var Rl = Xc({
	name: "chartLayout",
	initialState: {
		layoutType: "horizontal",
		width: 0,
		height: 0,
		margin: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		scale: 1
	},
	reducers: {
		setLayout(e, t) {
			e.layoutType = t.payload;
		},
		setChartSize(e, t) {
			e.width = t.payload.width, e.height = t.payload.height;
		},
		setMargin(e, t) {
			e.margin.top = t.payload.top ?? 0, e.margin.right = t.payload.right ?? 0, e.margin.bottom = t.payload.bottom ?? 0, e.margin.left = t.payload.left ?? 0;
		},
		setScale(e, t) {
			e.scale = t.payload;
		}
	}
}), zl = Rl.actions, Bl = zl.setMargin, Vl = zl.setLayout, Hl = zl.setChartSize, Ul = zl.setScale, Wl = Rl.reducer;
// node_modules/recharts/es6/util/getSliced.js
function Gl(e, t, n) {
	return Array.isArray(e) ? e.slice(t, n + 1) : e;
}
// node_modules/recharts/es6/util/isWellBehavedNumber.js
function W(e) {
	return Number.isFinite(e);
}
function Kl(e) {
	return typeof e == "number" && e > 0 && Number.isFinite(e);
}
// node_modules/recharts/es6/util/ChartUtils.js
var ql = ["ignoreDataEntryColors"];
function Jl(e, t) {
	if (e == null) return {};
	var n, r, i = Yl(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Yl(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Xl(e, t) {
	return tu(e) || eu(e, t) || Ql(e, t) || Zl();
}
function Zl() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ql(e, t) {
	if (e) {
		if (typeof e == "string") return $l(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $l(e, t) : void 0;
	}
}
function $l(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function eu(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function tu(e) {
	if (Array.isArray(e)) return e;
}
function nu(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ru(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nu(Object(n), !0).forEach(function(t) {
			iu(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nu(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function iu(e, t, n) {
	return (t = au(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function au(e) {
	var t = ou(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ou(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function G(e, t, n) {
	if (R(e) || R(t)) return n;
	if (gt(t)) return ct(e, t, n);
	if (typeof t == "function") {
		var r = t(e);
		return r === void 0 ? n : r;
	}
	return n;
}
var su = (e, t, n) => {
	if (t && n) {
		var r = n.width, i = n.height, a = t.align, o = t.verticalAlign, s = t.layout, c = t.position, l = t.offset, u = l === void 0 ? 0 : l;
		if (c != null) {
			if (Nt(c)) {
				if (c === "top" && I(e.top)) return ru(ru({}, e), {}, { top: e.top + (i || 0) + u });
				if (c === "bottom" && I(e.bottom)) return ru(ru({}, e), {}, { bottom: e.bottom + (i || 0) + u });
				if (c === "left" && I(e.left)) return ru(ru({}, e), {}, { left: e.left + (r || 0) + u });
				if (c === "right" && I(e.right)) return ru(ru({}, e), {}, { right: e.right + (r || 0) + u });
			}
			return e;
		}
		if ((s === "vertical" || s === "horizontal" && o === "middle") && a !== "center" && I(e[a])) return ru(ru({}, e), {}, { [a]: e[a] + (r || 0) });
		if ((s === "horizontal" || s === "vertical" && a === "center") && o !== "middle" && I(e[o])) return ru(ru({}, e), {}, { [o]: e[o] + (i || 0) });
	}
	return e;
}, cu = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", lu = (e, t, n, r) => {
	if (r) return e.map((e) => e.coordinate);
	var i, a, o = e.map((e) => (e.coordinate === t && (i = !0), e.coordinate === n && (a = !0), e.coordinate));
	return i || o.push(t), a || o.push(n), o;
}, uu = (e, t, n) => {
	if (!e) return null;
	var r = e.duplicateDomain, i = e.type, a = e.range, o = e.scale, s = e.realScaleType, c = e.isCategorical, l = e.categoricalDomain, u = e.tickCount, d = e.ticks, f = e.niceTicks, p = e.axisType;
	if (!o) return null;
	var m = s === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, h = (t || n) && i === "category" && o.bandwidth ? o.bandwidth() / m : 0;
	return p === "angleAxis" && a && a.length >= 2 && (h = a[0] > a[1] ? 2 * h : 0), t && (d || f) ? (d || f || []).map((e, t) => {
		var n = r ? r.indexOf(e) : e, i = o.map(n);
		return W(i) ? {
			coordinate: i + h,
			value: e,
			offset: h,
			index: t
		} : null;
	}).filter(Ct) : c && l ? l.map((e, t) => {
		var n = o.map(e);
		return W(n) ? {
			coordinate: n + h,
			value: e,
			index: t,
			offset: h
		} : null;
	}).filter(Ct) : o.ticks && !n && u != null ? o.ticks(u).map((e, t) => {
		var n = o.map(e);
		return W(n) ? {
			coordinate: n + h,
			value: e,
			index: t,
			offset: h
		} : null;
	}).filter(Ct) : o.domain().map((e, t) => {
		var n = o.map(e);
		return W(n) ? {
			coordinate: n + h,
			value: r ? r[e] : e,
			index: t,
			offset: h
		} : null;
	}).filter(Ct);
}, du = (e, t) => {
	if (!t || t.length !== 2 || !I(t[0]) || !I(t[1])) return e;
	var n = Math.min(t[0], t[1]), r = Math.max(t[0], t[1]), i = [e[0], e[1]];
	return (!I(e[0]) || e[0] < n) && (i[0] = n), (!I(e[1]) || e[1] > r) && (i[1] = r), i[0] > r && (i[0] = r), i[1] < n && (i[1] = n), i;
}, fu = {
	sign: (e) => {
		var t = e.length;
		if (!(t <= 0)) {
			var n = e[0]?.length;
			if (!(n == null || n <= 0)) for (var r = 0; r < n; ++r) for (var i = 0, a = 0, o = 0; o < t; ++o) {
				var s = e[o]?.[r];
				if (s != null) {
					var c = s[1], l = s[0], u = mt(c) ? l : c;
					u >= 0 ? (s[0] = i, i += u, s[1] = i) : (s[0] = a, a += u, s[1] = a);
				}
			}
		}
	},
	expand: nr,
	none: Zn,
	silhouette: rr,
	wiggle: ir,
	positive: (e) => {
		var t = e.length;
		if (!(t <= 0)) {
			var n = e[0]?.length;
			if (!(n == null || n <= 0)) for (var r = 0; r < n; ++r) for (var i = 0, a = 0; a < t; ++a) {
				var o = e[a]?.[r];
				if (o != null) {
					var s = mt(o[1]) ? o[0] : o[1];
					s >= 0 ? (o[0] = i, i += s, o[1] = i) : (o[0] = 0, o[1] = 0);
				}
			}
		}
	}
}, pu = (e, t, n) => {
	var r = fu[n] ?? Zn, i = tr().keys(t).value((e, t) => Number(G(e, t, 0))).order(Qn).offset(r)(e);
	return i.forEach((n, r) => {
		n.forEach((n, i) => {
			var a = G(e[i], t[r], 0);
			Array.isArray(a) && a.length === 2 && I(a[0]) && I(a[1]) && (n[0] = a[0], n[1] = a[1]);
		});
	}), i;
};
function mu(e) {
	return e == null ? void 0 : String(e);
}
function hu(e, t, n, r) {
	var i = t?.[r];
	if (R(e)) return i;
	var a = G(n, e);
	return i?.value === a ? i : t && xt(t, "value", a);
}
function gu(e) {
	var t = e.axis, n = e.ticks, r = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
	if (t.type === "category") {
		var s = hu(t.dataKey, n, i, a);
		return s ? s.coordinate + r / 2 : null;
	}
	var c = G(i, R(o) ? t.dataKey : o), l = t.scale.map(c);
	return I(l) ? l : null;
}
var _u = (e) => {
	var t = e.axis, n = e.ticks, r = e.offset, i = e.bandSize, a = e.entry, o = e.index;
	if (t.type === "category") {
		var s = hu(t.dataKey, n, a, o);
		return s ? s.coordinate + r : null;
	}
	var c = G(a, t.dataKey, t.scale.domain()[o]);
	if (R(c)) return null;
	var l = t.scale.map(c);
	return I(l) ? l - i / 2 + r : null;
}, vu = (e) => {
	var t = e.numericAxis, n = t.scale.domain();
	if (t.type === "number") {
		var r = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
		return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
	}
	return n[0];
}, yu = (e) => {
	var t = Infinity, n = -Infinity;
	for (var r of e.flat(2)) I(r) && (t = Math.min(t, r), n = Math.max(n, r));
	return [t, n];
}, bu = (e) => [e[0] === Infinity ? 0 : e[0], e[1] === -Infinity ? 0 : e[1]], xu = (e, t, n) => {
	if (e != null && Object.keys(e).length !== 0) return bu(Object.keys(e).reduce((r, i) => {
		var a = e[i];
		if (!a) return r;
		var o = a.stackedData.reduce((e, r) => {
			var i = yu(Gl(r, t, n));
			return !W(i[0]) || !W(i[1]) ? e : [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
		}, [Infinity, -Infinity]);
		return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
	}, [Infinity, -Infinity]));
}, Su = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Cu = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wu = (e, t, n) => {
	if (e && e.scale && e.scale.bandwidth) {
		var r = e.scale.bandwidth();
		if (!n || r > 0) return r;
	}
	if (e && t && t.length >= 2) {
		for (var i = Ao(t, (e) => e.coordinate), a = [], o = 0, s = 1, c = i.length; s < c; s++) {
			var l = (i[s]?.coordinate || 0) - (i[s - 1]?.coordinate || 0);
			a.push(l), o = Math.max(l, o);
		}
		var u = o * 1e-4, d = Infinity;
		for (var f of a) f > u && (d = Math.min(f, d));
		return d === Infinity ? 0 : d;
	}
	var p = t?.length === 1 ? t[0] : void 0;
	if (n && e?.scale != null && p != null) {
		var m = Xl(e.scale.range(), 2), h = m[0], g = h === void 0 ? 0 : h, _ = m[1], v = _ === void 0 ? 0 : _, y = p.coordinate, b = 2 * Math.min(Math.abs(y - g), Math.abs(v - y));
		if (b > 0) return b;
	}
	return n ? void 0 : 0;
};
function Tu(e) {
	var t = e.tooltipEntrySettings, n = e.dataKey, r = e.payload, i = e.value, a = e.name;
	return t.ignoreDataEntryColors, ru(ru({}, Jl(t, ql)), {}, {
		dataKey: n,
		payload: r,
		value: i,
		name: a
	});
}
function Eu(e, t) {
	if (e != null) return String(e);
	if (typeof t == "string") return t;
}
var Du = (e, t) => {
	if (t === "horizontal") return e.relativeX;
	if (t === "vertical") return e.relativeY;
}, Ou = (e, t) => t === "centric" ? e.angle : e.radius, ku = (e) => e.layout.width, Au = (e) => e.layout.height, ju = (e) => e.layout.margin, Mu = H((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), Nu = H((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), Pu = "data-recharts-item-index", Fu = "data-recharts-item-id";
// node_modules/recharts/es6/state/selectors/selectChartOffsetInternal.js
function Iu(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Lu(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Iu(Object(n), !0).forEach(function(t) {
			Ru(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iu(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ru(e, t, n) {
	return (t = zu(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function zu(e) {
	var t = Bu(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Bu(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Vu = (e) => e.brush.height;
function Hu(e) {
	return Nu(e).reduce((e, t) => t.orientation === "left" && !t.mirror && !t.hide ? e + (typeof t.width == "number" ? t.width : 60) : e, 0);
}
function Uu(e) {
	return Nu(e).reduce((e, t) => t.orientation === "right" && !t.mirror && !t.hide ? e + (typeof t.width == "number" ? t.width : 60) : e, 0);
}
function Wu(e) {
	return Mu(e).reduce((e, t) => t.orientation === "top" && !t.mirror && !t.hide ? e + (typeof t.height == "number" ? t.height : 30) : e, 0);
}
function Gu(e) {
	return Mu(e).reduce((e, t) => t.orientation === "bottom" && !t.mirror && !t.hide ? e + (typeof t.height == "number" ? t.height : 30) : e, 0);
}
var Ku = H([
	ku,
	Au,
	ju,
	Vu,
	Hu,
	Uu,
	Wu,
	Gu,
	jo,
	Mo
], (e, t, n, r, i, a, o, s, c, l) => {
	var u = {
		left: (n.left || 0) + i,
		right: (n.right || 0) + a
	}, d = Lu(Lu({}, {
		top: (n.top || 0) + o,
		bottom: (n.bottom || 0) + s
	}), u), f = d.bottom;
	d.bottom += r, d = su(d, c, l);
	var p = e - d.left - d.right, m = t - d.top - d.bottom;
	return Lu(Lu({ brushBottom: f }, d), {}, {
		width: Math.max(p, 0),
		height: Math.max(m, 0)
	});
}), qu = H(Ku, (e) => ({
	x: e.left,
	y: e.top,
	width: e.width,
	height: e.height
})), Ju = H(ku, Au, (e, t) => ({
	x: 0,
	y: 0,
	width: e,
	height: t
})), Yu = /*#__PURE__*/ (0, F.createContext)(null), Xu = () => (0, F.useContext)(Yu) != null, Zu = (e) => e.brush, Qu = H([
	Zu,
	Ku,
	ju
], (e, t, n) => ({
	height: e.height,
	x: I(e.x) ? e.x : t.left,
	y: I(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
	width: I(e.width) ? e.width : t.width
}));
// node_modules/es-toolkit/dist/function/debounce.mjs
function $u(e, t, { signal: n, edges: r } = {}) {
	let i, a = null, o = r != null && r.includes("leading"), s = r == null || r.includes("trailing"), c = () => {
		a !== null && (e.apply(i, a), i = void 0, a = null);
	}, l = () => {
		s && c(), p();
	}, u = null, d = () => {
		u != null && clearTimeout(u), u = setTimeout(() => {
			u = null, l();
		}, t);
	}, f = () => {
		u !== null && (clearTimeout(u), u = null);
	}, p = () => {
		f(), i = void 0, a = null;
	}, m = () => {
		c();
	}, h = function(...e) {
		if (n?.aborted) return;
		i = this, a = e;
		let t = u == null;
		d(), o && t && c();
	};
	return h.schedule = d, h.cancel = p, h.flush = m, n?.addEventListener("abort", p, { once: !0 }), h;
}
// node_modules/es-toolkit/dist/compat/function/debounce.mjs
function ed(e, t = 0, n = {}) {
	typeof n != "object" && (n = {});
	let { leading: r = !1, trailing: i = !0, maxWait: a } = n, o = [, ,];
	r && (o[0] = "leading"), i && (o[1] = "trailing");
	let s, c = null, l = $u(function(...t) {
		s = e.apply(this, t), c = null;
	}, t, { edges: o }), u = function(...t) {
		return a != null && (c === null && (c = Date.now()), Date.now() - c >= a) ? ((r || i) && (s = e.apply(this, t)), c = Date.now(), l.cancel(), l.schedule(), s) : (l.apply(this, t), s);
	};
	return u.cancel = l.cancel, u.flush = () => (l.flush(), s), u;
}
// node_modules/es-toolkit/dist/compat/function/throttle.mjs
function td(e, t = 0, n = {}) {
	let { leading: r = !0, trailing: i = !0 } = n;
	return ed(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
// node_modules/recharts/es6/util/LogUtils.js
var nd = function(e, t) {
	var n = [...arguments].slice(2);
	if (typeof console < "u" && console.warn && (t === void 0 && console.warn("LogUtils requires an error message argument"), !e)) {
		if (t === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var r = 0;
			console.warn(t.replace(/%s/g, () => n[r++]));
		}
	}
}, rd = {
	width: "100%",
	height: "100%",
	debounce: 0,
	minWidth: 0,
	initialDimension: {
		width: -1,
		height: -1
	}
}, id = (e, t, n) => {
	var r = n.width, i = r === void 0 ? rd.width : r, a = n.height, o = a === void 0 ? rd.height : a, s = n.aspect, c = n.maxHeight, l = ht(i) ? e : Number(i), u = ht(o) ? t : Number(o);
	return s && s > 0 && (l ? u = l / s : u && (l = u * s), c && u != null && u > c && (u = c)), {
		calculatedWidth: l,
		calculatedHeight: u
	};
}, ad = {
	width: 0,
	height: 0,
	overflow: "visible"
}, od = {
	width: 0,
	overflowX: "visible"
}, sd = {
	height: 0,
	overflowY: "visible"
}, cd = {}, ld = (e) => {
	var t = e.width, n = e.height, r = ht(t), i = ht(n);
	return r && i ? ad : r ? od : i ? sd : cd;
};
function ud(e) {
	var t = e.width, n = e.height, r = e.aspect, i = t, a = n;
	return i === void 0 && a === void 0 ? (i = rd.width, a = rd.height) : i === void 0 ? i = r && r > 0 ? void 0 : rd.width : a === void 0 && (a = r && r > 0 ? void 0 : rd.height), {
		width: i,
		height: a
	};
}
// node_modules/recharts/es6/component/ResponsiveContainer.js
var dd = [
	"aspect",
	"initialDimension",
	"width",
	"height",
	"minWidth",
	"minHeight",
	"maxHeight",
	"children",
	"debounce",
	"id",
	"className",
	"onResize",
	"style"
];
function fd() {
	return fd = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, fd.apply(null, arguments);
}
function pd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function md(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pd(Object(n), !0).forEach(function(t) {
			hd(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pd(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function hd(e, t, n) {
	return (t = gd(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gd(e) {
	var t = _d(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _d(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function vd(e, t) {
	return Cd(e) || Sd(e, t) || bd(e, t) || yd();
}
function yd() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function bd(e, t) {
	if (e) {
		if (typeof e == "string") return xd(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xd(e, t) : void 0;
	}
}
function xd(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Sd(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Cd(e) {
	if (Array.isArray(e)) return e;
}
function wd(e, t) {
	if (e == null) return {};
	var n, r, i = Td(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Td(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Ed = /*#__PURE__*/ (0, F.createContext)(rd.initialDimension);
function Dd(e) {
	return Kl(e.width) && Kl(e.height);
}
function Od(e) {
	var t = e.children, n = e.width, r = e.height, i = (0, F.useMemo)(() => ({
		width: n,
		height: r
	}), [n, r]);
	return Dd(i) ? /*#__PURE__*/ F.createElement(Ed.Provider, { value: i }, t) : null;
}
var kd = () => (0, F.useContext)(Ed), Ad = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.aspect, r = e.initialDimension, i = r === void 0 ? rd.initialDimension : r, a = e.width, o = e.height, s = e.minWidth, c = s === void 0 ? rd.minWidth : s, u = e.minHeight, d = e.maxHeight, f = e.children, p = e.debounce, m = p === void 0 ? rd.debounce : p, h = e.id, g = e.className, _ = e.onResize, v = e.style, y = v === void 0 ? {} : v, b = wd(e, dd), x = (0, F.useRef)(null), S = (0, F.useRef)();
	S.current = _, (0, F.useImperativeHandle)(t, () => x.current);
	var C = vd((0, F.useState)({
		containerWidth: i.width,
		containerHeight: i.height
	}), 2), w = C[0], T = C[1], E = (0, F.useCallback)((e, t) => {
		T((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []);
	(0, F.useEffect)(() => {
		if (x.current == null || typeof ResizeObserver > "u") return wt;
		var e = (e) => {
			var t, n = e[0];
			if (n != null) {
				var r = n.contentRect, i = r.width, a = r.height;
				E(i, a), (t = S.current) == null || t.call(S, i, a);
			}
		};
		m > 0 && (e = td(e, m, {
			trailing: !0,
			leading: !1
		}));
		var t = new ResizeObserver(e), n = x.current.getBoundingClientRect(), r = n.width, i = n.height;
		return E(r, i), t.observe(x.current), () => {
			t.disconnect();
		};
	}, [E, m]);
	var D = w.containerWidth, O = w.containerHeight;
	nd(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
	var k = id(D, O, {
		width: a,
		height: o,
		aspect: n,
		maxHeight: d
	}), A = k.calculatedWidth, j = k.calculatedHeight;
	return nd(D < 0 || O < 0 || A != null && A > 0 || j != null && j > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", A, j, a, o, c, u, n), /*#__PURE__*/ F.createElement("div", fd({
		id: h ? `${h}` : void 0,
		className: l("recharts-responsive-container", g),
		style: md(md({}, y), {}, {
			width: a,
			height: o,
			minWidth: c,
			minHeight: u,
			maxHeight: d
		}),
		ref: x
	}, b), /*#__PURE__*/ F.createElement("div", { style: ld({
		width: a,
		height: o
	}) }, /*#__PURE__*/ F.createElement(Od, {
		width: A,
		height: j
	}, f)));
}), jd = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = kd();
	if (Kl(n.width) && Kl(n.height)) return e.children;
	var r = ud({
		width: e.width,
		height: e.height,
		aspect: e.aspect
	}), i = r.width, a = r.height, o = id(void 0, void 0, {
		width: i,
		height: a,
		aspect: e.aspect,
		maxHeight: e.maxHeight
	}), s = o.calculatedWidth, c = o.calculatedHeight;
	return I(s) && I(c) ? /*#__PURE__*/ F.createElement(Od, {
		width: s,
		height: c
	}, e.children) : /*#__PURE__*/ F.createElement(Ad, fd({}, e, {
		width: i,
		height: a,
		ref: t
	}));
}), Md = () => {
	var e = Xu(), t = V(qu), n = V(Qu), r = V(Zu)?.padding;
	return !e || !n || !r ? t : {
		width: n.width - r.left - r.right,
		height: n.height - r.top - r.bottom,
		x: r.left,
		y: r.top
	};
}, Nd = {
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: 0,
	height: 0,
	brushBottom: 0
}, Pd = () => V(Ku) ?? Nd, Fd = () => V(ku), Id = () => V(Au), Ld = () => V((e) => e.layout.margin), K = (e) => e.layout.layoutType, Rd = () => V(K), zd = () => {
	var e = Rd();
	if (e === "horizontal" || e === "vertical") return e;
}, Bd = (e) => {
	var t = e.layout.layoutType;
	if (t === "centric" || t === "radial") return t;
}, Vd = () => V(Bd), Hd = () => Rd() !== void 0, Ud = (e) => {
	var t = B(), n = Xu(), r = e.width, i = e.height, a = kd(), o = r, s = i;
	return a && (o = a.width > 0 ? a.width : r, s = a.height > 0 ? a.height : i), (0, F.useEffect)(() => {
		!n && Kl(o) && Kl(s) && t(Hl({
			width: o,
			height: s
		}));
	}, [
		t,
		n,
		o,
		s
	]), null;
}, Wd = Xc({
	name: "legend",
	initialState: {
		settings: {
			layout: "horizontal",
			align: "center",
			verticalAlign: "bottom",
			itemSorter: "value",
			position: void 0,
			offset: 0
		},
		size: {
			width: 0,
			height: 0
		},
		payload: []
	},
	reducers: {
		setLegendSize(e, t) {
			e.size.width = t.payload.width, e.size.height = t.payload.height;
		},
		setLegendSettings(e, t) {
			e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter, e.settings.position = t.payload.position, e.settings.offset = t.payload.offset;
		},
		addLegendPayload: {
			reducer(e, t) {
				e.payload.push(U(t.payload));
			},
			prepare: Fc()
		},
		replaceLegendPayload: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = xc(e).payload.indexOf(U(r));
				a > -1 && (e.payload[a] = U(i));
			},
			prepare: Fc()
		},
		removeLegendPayload: {
			reducer(e, t) {
				var n = xc(e).payload.indexOf(U(t.payload));
				n > -1 && e.payload.splice(n, 1);
			},
			prepare: Fc()
		}
	}
}), Gd = Wd.actions, Kd = Gd.setLegendSize, qd = Gd.setLegendSettings, Jd = Gd.addLegendPayload, Yd = Gd.replaceLegendPayload, Xd = Gd.removeLegendPayload, Zd = Wd.reducer, Qd = /* @__PURE__ */ n(((e) => {
	var t = b();
	t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue;
}));
(/* @__PURE__ */ n(((e, t) => {
	t.exports = Qd();
})))();
function $d(e) {
	e();
}
function ef() {
	let e = null, t = null;
	return {
		clear() {
			e = null, t = null;
		},
		notify() {
			$d(() => {
				let t = e;
				for (; t;) t.callback(), t = t.next;
			});
		},
		get() {
			let t = [], n = e;
			for (; n;) t.push(n), n = n.next;
			return t;
		},
		subscribe(n) {
			let r = !0, i = t = {
				callback: n,
				next: null,
				prev: t
			};
			return i.prev ? i.prev.next = i : e = i, function() {
				r && e !== null && (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
			};
		}
	};
}
var tf = {
	notify() {},
	get: () => []
};
function nf(e, t) {
	let n, r = tf, i = 0, a = !1;
	function o(e) {
		u();
		let t = r.subscribe(e), n = !1;
		return () => {
			n || (n = !0, t(), d());
		};
	}
	function s() {
		r.notify();
	}
	function c() {
		m.onStateChange && m.onStateChange();
	}
	function l() {
		return a;
	}
	function u() {
		i++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = ef());
	}
	function d() {
		i--, n && i === 0 && (n(), n = void 0, r.clear(), r = tf);
	}
	function f() {
		a || (a = !0, u());
	}
	function p() {
		a && (a = !1, d());
	}
	let m = {
		addNestedSub: o,
		notifyNestedSubs: s,
		handleChangeWrapper: c,
		isSubscribed: l,
		trySubscribe: f,
		tryUnsubscribe: p,
		getListeners: () => r
	};
	return m;
}
var rf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, af = typeof navigator < "u" && navigator.product === "ReactNative", of = rf || af ? F.useLayoutEffect : F.useEffect;
function sf(e, t) {
	return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function cf(e, t) {
	if (sf(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !sf(e[n[r]], t[n[r]])) return !1;
	return !0;
}
var lf = /* @__PURE__ */ Symbol.for("react-redux-context"), uf = typeof globalThis < "u" ? globalThis : {};
function df() {
	if (!F.createContext) return {};
	let e = uf[lf] ??= /* @__PURE__ */ new Map(), t = e.get(F.createContext);
	return t || (t = F.createContext(null), e.set(F.createContext, t)), t;
}
var ff = /* @__PURE__ */ df();
function pf(e) {
	let { children: t, context: n, serverState: r, store: i } = e, a = F.useMemo(() => {
		let e = nf(i);
		return {
			store: i,
			subscription: e,
			getServerState: r ? () => r : void 0
		};
	}, [i, r]), o = F.useMemo(() => i.getState(), [i]);
	of(() => {
		let { subscription: e } = a;
		return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), o !== i.getState() && e.notifyNestedSubs(), () => {
			e.tryUnsubscribe(), e.onStateChange = void 0;
		};
	}, [a, o]);
	let s = n || ff;
	return /* @__PURE__ */ F.createElement(s.Provider, { value: a }, t);
}
var mf = pf, hf = /* @__PURE__ */ new Set([
	"axisLine",
	"tickLine",
	"activeBar",
	"activeDot",
	"activeLabel",
	"activeShape",
	"allowEscapeViewBox",
	"background",
	"cursor",
	"dot",
	"label",
	"line",
	"margin",
	"padding",
	"position",
	"shape",
	"style",
	"tick",
	"wrapperStyle",
	"radius",
	"throttledEvents"
]);
function gf(e, t) {
	return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function _f(e, t) {
	for (var n of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])) if (hf.has(n)) {
		if (e[n] == null && t[n] == null) continue;
		if (!cf(e[n], t[n])) return !1;
	} else if (!gf(e[n], t[n])) return !1;
	return !0;
}
var vf = 1e-6;
function yf(e, t) {
	return e === t ? !0 : e == null || t == null ? !1 : Number.isNaN(e) && Number.isNaN(t) ? !0 : Math.abs(e - t) < vf;
}
function bf(e, t) {
	return typeof e == "number" && typeof t == "number" ? yf(e, t) : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : Object.is(e, t);
}
function xf(e, t) {
	return e === t ? !0 : e == null || t == null || e.length !== t.length ? !1 : e.every((e, n) => bf(e, t[n]));
}
function Sf(e, t) {
	return e === t ? !0 : e == null || t == null ? !1 : xf(e.domain(), t.domain()) && xf(e.range(), t.range()) && yf(e.bandwidth?.call(e), t.bandwidth?.call(t));
}
function Cf(e, t) {
	return e == null || e.length !== t.length ? !1 : e.every((e, n) => {
		var r = t[n];
		return r != null && e.value === r.value && yf(e.coordinate, r.coordinate) && yf(e.offset, r.offset) && e.index === r.index;
	});
}
// node_modules/recharts/es6/state/selectors/selectLegendArea.js
var wf = H([
	ku,
	Au,
	ju
], (e, t, n) => ({
	x: n.left || 0,
	y: n.top || 0,
	width: Math.max(e - (n.left || 0) - (n.right || 0), 0),
	height: Math.max(t - (n.top || 0) - (n.bottom || 0), 0)
}));
// node_modules/recharts/es6/cartesian/cartesianPositionToCSSTranslate.js
function Tf(e, t) {
	return e === "start" && t === "start" ? "" : `translate(${e === "inherit" ? "0" : {
		start: "0",
		middle: "-50%",
		end: "-100%"
	}[e]}, ${{
		start: "0",
		middle: "-50%",
		end: "-100%"
	}[t] ?? "0"})`;
}
// node_modules/recharts/es6/component/Legend.js
var Ef = ["contextPayload"];
function Df() {
	return Df = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Df.apply(null, arguments);
}
function Of(e, t) {
	return Nf(e) || Mf(e, t) || Af(e, t) || kf();
}
function kf() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Af(e, t) {
	if (e) {
		if (typeof e == "string") return jf(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jf(e, t) : void 0;
	}
}
function jf(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Mf(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Nf(e) {
	if (Array.isArray(e)) return e;
}
function Pf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ff(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Pf(Object(n), !0).forEach(function(t) {
			If(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pf(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function If(e, t, n) {
	return (t = Lf(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Lf(e) {
	var t = Rf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Rf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function zf(e, t) {
	if (e == null) return {};
	var n, r, i = Bf(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Bf(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Vf(e) {
	return e.value;
}
function Hf(e) {
	var t = e.contextPayload, n = zf(e, Ef), r = no(t, e.payloadUniqBy, Vf), i = Ff(Ff({}, n), {}, { payload: r });
	return /*#__PURE__*/ F.isValidElement(e.content) ? /*#__PURE__*/ F.cloneElement(e.content, i) : typeof e.content == "function" ? /*#__PURE__*/ F.createElement(e.content, i) : /*#__PURE__*/ F.createElement(Ki, i);
}
function Uf(e) {
	return e === "left" || e === "right" || e === "insideLeft" || e === "insideRight" ? "vertical" : "horizontal";
}
function Wf(e, t) {
	return t == null ? null : Nt(t) ? wf(e) : qu(e);
}
function Gf(e, t, n) {
	return e === "top" ? { top: n.height + t } : e === "bottom" ? { top: -n.height - t } : e === "left" ? { left: n.width + t } : e === "right" ? { left: -n.width - t } : {};
}
function Kf(e, t, n, r, i, a) {
	var o = t.layout, s = t.align, c = t.verticalAlign, l, u;
	return e && (e.left !== void 0 && e.left !== null || e.right !== void 0 && e.right !== null) || (l = s === "center" && o === "vertical" ? { left: ((r || 0) - a.width) / 2 } : s === "right" ? { right: n && n.right || 0 } : { left: n && n.left || 0 }), e && (e.top !== void 0 && e.top !== null || e.bottom !== void 0 && e.bottom !== null) || (u = c === "middle" ? { top: ((i || 0) - a.height) / 2 } : c === "bottom" ? { bottom: n && n.bottom || 0 } : { top: n && n.top || 0 }), Ff(Ff({}, l), u);
}
function qf(e) {
	var t = e.align, n = e.layout, r = e.verticalAlign, i = e.itemSorter, a = e.position, o = e.offset, s = B();
	return (0, F.useLayoutEffect)(() => {
		s(qd({
			align: t,
			layout: n,
			verticalAlign: r,
			itemSorter: i,
			position: a,
			offset: o
		}));
	}, [
		s,
		t,
		n,
		r,
		i,
		a,
		o
	]), null;
}
function Jf(e) {
	var t = e.width, n = e.height, r = B();
	return (0, F.useLayoutEffect)(() => {
		r(Kd({
			width: t,
			height: n
		}));
	}, [
		r,
		t,
		n
	]), (0, F.useLayoutEffect)(() => () => {
		r(Kd({
			width: 0,
			height: 0
		}));
	}, [r]), null;
}
function Yf(e, t, n, r) {
	return e === "vertical" && t != null ? { height: t } : e === "horizontal" ? { width: n || r } : null;
}
var Xf = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	itemSorter: "value",
	labelStyle: {},
	layout: "auto",
	verticalAlign: "bottom",
	offset: 0
};
function Zf(e) {
	var t, n, r, i, a = Ti((e) => ({ legend: e.legend }), {}, void 0), o = e.wrapperStyle == null && (a == null || (t = a.legend) == null ? void 0 : t.wrapperStyle) == null ? void 0 : Ff(Ff({}, a == null || (n = a.legend) == null ? void 0 : n.wrapperStyle), e.wrapperStyle), s = Ci(Ff(Ff({}, e), {}, {
		wrapperStyle: o,
		position: e.position ?? (a == null || (r = a.legend) == null ? void 0 : r.position),
		offset: e.offset ?? (a == null || (i = a.legend) == null ? void 0 : i.offset)
	}), Xf), c = e.layout && e.layout !== "auto" ? e.layout : Uf(s.position), l = Po(), u = Ft(), d = Ld(), f = V((e) => Wf(e, s.position)), p = s.width, m = s.height, h = s.wrapperStyle, g = s.portal, _ = g == null && (s.position == null || Nt(s.position)), v = Of(Wo([l]), 2), y = v[0], b = v[1], x = Fd(), S = Id();
	if (x == null || S == null || s.position != null && f == null) return null;
	var C = Yf(c, m, p, x - (d?.left || 0) - (d?.right || 0)), w = s.position == null ? null : jt({
		viewBox: f ?? {
			x: 0,
			y: 0,
			width: x,
			height: S
		},
		position: s.position,
		offset: s.offset ?? 0
	}), T = Gf(s.position, s.offset ?? 0, y), E = c === "vertical" ? (f?.width ?? 0) / 2 : f?.width ?? 0, D = c === "horizontal" ? (f?.height ?? 0) / 2 : f?.height ?? 0, O = w ? {
		width: "max-content",
		height: "max-content",
		maxWidth: E,
		maxHeight: D,
		overflowY: "auto",
		top: w.y + (T.top ?? 0),
		left: w.x + (T.left ?? 0),
		transform: Tf(w.horizontalAnchor, w.verticalAnchor)
	} : Kf(h, s, d, x, S, y), k = g ? h : Ff(Ff({
		position: "absolute",
		width: C?.width || p || "auto",
		height: C?.height || m || "auto"
	}, O), h), A = g ?? u;
	if (A == null || l == null) return null;
	var j = /*#__PURE__*/ F.createElement("div", {
		className: "recharts-legend-wrapper",
		style: k,
		ref: b
	}, /*#__PURE__*/ F.createElement(qf, {
		layout: c,
		align: s.align,
		verticalAlign: s.verticalAlign,
		itemSorter: s.itemSorter,
		position: s.position,
		offset: s.offset
	}), _ && /*#__PURE__*/ F.createElement(Jf, y), /*#__PURE__*/ F.createElement(Hf, Df({}, s, { layout: c }, C, {
		margin: d,
		chartWidth: x,
		chartHeight: S,
		contextPayload: l
	})));
	return /*#__PURE__*/ (0, Ne.createPortal)(j, A);
}
var Qf = /*#__PURE__*/ F.memo(Zf, _f);
Qf.displayName = "Legend";
// node_modules/recharts/es6/component/DefaultTooltipContent.js
function $f() {
	return $f = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $f.apply(null, arguments);
}
function ep(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tp(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ep(Object(n), !0).forEach(function(t) {
			np(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ep(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function np(e, t, n) {
	return (t = rp(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function rp(e) {
	var t = ip(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ip(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ap(e, t) {
	return up(e) || lp(e, t) || sp(e, t) || op();
}
function op() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sp(e, t) {
	if (e) {
		if (typeof e == "string") return cp(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cp(e, t) : void 0;
	}
}
function cp(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function lp(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function up(e) {
	if (Array.isArray(e)) return e;
}
function dp(e) {
	return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var fp = {
	contentStyle: {
		margin: 0,
		padding: 10,
		backgroundColor: "#fff",
		border: "1px solid #ccc",
		whiteSpace: "nowrap"
	},
	itemStyle: {
		display: "block",
		paddingTop: 4,
		paddingBottom: 4,
		color: "#000"
	},
	labelStyle: { margin: 0 }
}, pp = {
	separator: " : ",
	accessibilityLayer: !1
};
function mp(e, t) {
	return t == null ? e : Ao(e, t);
}
var hp = (e) => {
	var t = Ti((e) => ({
		typography: e.typography,
		tooltip: e.tooltip
	}), {}, { tooltip: fp }), n = e.separator, r = n === void 0 ? pp.separator : n, i = e.contentStyle, a = e.itemStyle, o = e.labelStyle, s = e.payload, c = e.formatter, u = e.itemSorter, d = e.wrapperClassName, f = e.labelClassName, p = e.label, m = e.labelFormatter, h = e.accessibilityLayer, g = h === void 0 ? pp.accessibilityLayer : h, _ = t?.tooltip ?? {}, v = t?.typography ?? {}, y = _.contentStyle ?? {}, b = _.itemStyle ?? {}, x = _.labelStyle ?? {}, S = () => {
		if (s && s.length) {
			var e = {
				padding: 0,
				margin: 0
			}, t = mp(s, u).map((e, t) => {
				if (!e || e.type === "none") return null;
				var n = e.formatter || c || dp, i = e.value, o = e.name, l = i, u = o;
				if (n) {
					var d = n(i, o, e, t, s);
					if (Array.isArray(d)) {
						var f = ap(d, 2);
						l = f[0], u = f[1];
					} else if (d != null) l = d;
					else return null;
				}
				var p = tp(tp(tp(tp({}, v), b), e.color ? { color: e.color } : {}), a);
				return /*#__PURE__*/ F.createElement("li", {
					className: "recharts-tooltip-item",
					key: `tooltip-item-${t}`,
					style: p
				}, gt(u) ? /*#__PURE__*/ F.createElement("span", { className: "recharts-tooltip-item-name" }, u) : null, gt(u) ? /*#__PURE__*/ F.createElement("span", { className: "recharts-tooltip-item-separator" }, r) : null, /*#__PURE__*/ F.createElement("span", { className: "recharts-tooltip-item-value" }, l), /*#__PURE__*/ F.createElement("span", { className: "recharts-tooltip-item-unit" }, e.unit || ""));
			});
			return /*#__PURE__*/ F.createElement("ul", {
				className: "recharts-tooltip-item-list",
				style: e
			}, t);
		}
		return null;
	}, C = tp(tp(tp({}, v), y), i), w = tp(tp(tp({}, v), x), o), T = !R(p), E = T ? p : "", D = l("recharts-default-tooltip", d), O = l("recharts-tooltip-label", f);
	T && m && s != null && (E = m(p, s));
	var k = g ? {
		role: "status",
		"aria-live": "assertive"
	} : {};
	return /*#__PURE__*/ F.createElement("div", $f({
		className: D,
		style: C
	}, k), /*#__PURE__*/ F.createElement("p", {
		className: O,
		style: w
	}, /*#__PURE__*/ F.isValidElement(E) ? E : `${E}`), S());
}, gp = "recharts-tooltip-wrapper", _p = { visibility: "hidden" };
function vp(e) {
	var t = e.coordinate, n = e.translateX, r = e.translateY;
	return l(gp, {
		[`${gp}-right`]: I(n) && t && I(t.x) && n >= t.x,
		[`${gp}-left`]: I(n) && t && I(t.x) && n < t.x,
		[`${gp}-bottom`]: I(r) && t && I(t.y) && r >= t.y,
		[`${gp}-top`]: I(r) && t && I(t.y) && r < t.y
	});
}
function yp(e) {
	var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, i = e.offset, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
	if (a && I(a[r])) return a[r];
	var u = n[r] - s - (i > 0 ? i : 0), d = n[r] + i;
	if (t[r]) return o[r] ? u : d;
	var f = c[r];
	return f == null ? 0 : o[r] ? Math.max(u < f ? d : u, f) : l == null ? 0 : d + s > f + l ? Math.max(u, f) : Math.max(d, f);
}
function bp(e) {
	var t = e.translateX, n = e.translateY;
	return { transform: e.useTranslate3d ? `translate3d(${t}px, ${n}px, 0)` : `translate(${t}px, ${n}px)` };
}
function xp(e) {
	var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTop, i = e.offsetLeft, a = e.position, o = e.reverseDirection, s = e.tooltipBox, c = e.useTranslate3d, l = e.viewBox, u, d, f;
	return s && s.height > 0 && s.width > 0 && n ? (d = yp({
		allowEscapeViewBox: t,
		coordinate: n,
		key: "x",
		offset: i,
		position: a,
		reverseDirection: o,
		tooltipDimension: s.width,
		viewBox: l,
		viewBoxDimension: l.width
	}), f = yp({
		allowEscapeViewBox: t,
		coordinate: n,
		key: "y",
		offset: r,
		position: a,
		reverseDirection: o,
		tooltipDimension: s.height,
		viewBox: l,
		viewBoxDimension: l.height
	}), u = bp({
		translateX: d,
		translateY: f,
		useTranslate3d: c
	})) : u = _p, {
		cssProperties: u,
		cssClasses: vp({
			translateX: d,
			translateY: f,
			coordinate: n
		})
	};
}
var Sp = {
	devToolsEnabled: !0,
	isSsr: !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
};
// node_modules/recharts/es6/util/usePrefersReducedMotion.js
function Cp(e, t) {
	return Op(e) || Dp(e, t) || Tp(e, t) || wp();
}
function wp() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Tp(e, t) {
	if (e) {
		if (typeof e == "string") return Ep(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ep(e, t) : void 0;
	}
}
function Ep(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Dp(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Op(e) {
	if (Array.isArray(e)) return e;
}
function kp() {
	var e = Cp((0, F.useState)(() => Sp.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches), 2), t = e[0], n = e[1];
	return (0, F.useEffect)(() => {
		if (window.matchMedia) {
			var e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => {
				n(e.matches);
			};
			return e.addEventListener("change", t), () => {
				e.removeEventListener("change", t);
			};
		}
	}, []), t;
}
// node_modules/recharts/es6/component/TooltipBoundingBox.js
function Ap(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function jp(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ap(Object(n), !0).forEach(function(t) {
			Mp(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ap(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Mp(e, t, n) {
	return (t = Np(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Np(e) {
	var t = Pp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Pp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Fp(e, t) {
	return Bp(e) || zp(e, t) || Lp(e, t) || Ip();
}
function Ip() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Lp(e, t) {
	if (e) {
		if (typeof e == "string") return Rp(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rp(e, t) : void 0;
	}
}
function Rp(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function zp(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Bp(e) {
	if (Array.isArray(e)) return e;
}
function Vp(e) {
	if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active) {
		var t = typeof e.animationEasing == "string" ? e.animationEasing : "ease";
		return `transform ${e.animationDuration}ms ${t}`;
	}
}
function Hp(e) {
	return e != null && e.width > 0 && e.height > 0;
}
function Up(e) {
	var t = kp(), n = Fp(F.useState(() => ({
		dismissed: !1,
		dismissedAtCoordinate: {
			x: 0,
			y: 0
		}
	})), 2), r = n[0], i = n[1];
	F.useEffect(() => {
		var t = (t) => {
			t.key === "Escape" && i({
				dismissed: !0,
				dismissedAtCoordinate: {
					x: e.coordinate?.x ?? 0,
					y: e.coordinate?.y ?? 0
				}
			});
		};
		return document.addEventListener("keydown", t), () => {
			document.removeEventListener("keydown", t);
		};
	}, [e.coordinate?.x, e.coordinate?.y]), r.dismissed && ((e.coordinate?.x ?? 0) !== r.dismissedAtCoordinate.x || (e.coordinate?.y ?? 0) !== r.dismissedAtCoordinate.y) && i(jp(jp({}, r), {}, { dismissed: !1 }));
	var a = Fp(F.useState(null), 2), o = a[0], s = a[1];
	Hp(e.lastBoundingBox) && e.lastBoundingBox !== o && s(e.lastBoundingBox);
	var c = Hp(e.lastBoundingBox) ? e.lastBoundingBox : o, l = xp({
		allowEscapeViewBox: e.allowEscapeViewBox,
		coordinate: e.coordinate,
		offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
		offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
		position: e.position,
		reverseDirection: e.reverseDirection,
		tooltipBox: c,
		useTranslate3d: e.useTranslate3d,
		viewBox: e.viewBox
	}), u = l.cssClasses, d = l.cssProperties, f = jp(jp({}, e.hasPortalFromProps ? {} : jp(jp({ transition: Vp({
		prefersReducedMotion: t,
		isAnimationActive: e.isAnimationActive,
		active: e.active,
		animationDuration: e.animationDuration,
		animationEasing: e.animationEasing
	}) }, d), {}, {
		pointerEvents: "none",
		position: "absolute",
		top: 0,
		left: 0
	})), {}, { visibility: !r.dismissed && e.active && e.hasPayload ? "visible" : "hidden" }, e.wrapperStyle);
	return /*#__PURE__*/ F.createElement("div", {
		xmlns: "http://www.w3.org/1999/xhtml",
		tabIndex: -1,
		className: u,
		style: f,
		ref: e.innerRef
	}, e.children);
}
var Wp = /*#__PURE__*/ F.memo(Up), Gp = () => V((e) => e.rootProps.accessibilityLayer) ?? !0;
// node_modules/recharts/es6/shape/Curve.js
function Kp() {
	return Kp = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Kp.apply(null, arguments);
}
function qp(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Jp(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qp(Object(n), !0).forEach(function(t) {
			Yp(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Yp(e, t, n) {
	return (t = Xp(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Xp(e) {
	var t = Zp(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Zp(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Qp = {
	curveBasisClosed: An,
	curveBasisOpen: Mn,
	curveBasis: On,
	curveBumpX: rn,
	curveBumpY: an,
	curveLinearClosed: Pn,
	curveLinear: Zt,
	curveMonotoneX: Hn,
	curveMonotoneY: Un,
	curveNatural: Kn,
	curveStep: Jn,
	curveStepAfter: Xn,
	curveStepBefore: Yn
}, $p = (e) => W(e.x) && W(e.y), em = (e) => e.base != null && $p(e.base) && $p(e), tm = (e) => e.x, nm = (e) => e.y, rm = (e, t) => {
	if (typeof e == "function") return e;
	var n = `curve${St(e)}`;
	if ((n === "curveMonotone" || n === "curveBump") && t) {
		var r = Qp[`${n}${t === "vertical" ? "Y" : "X"}`];
		if (r) return r;
	}
	return Qp[n] || Zt;
}, im = {
	connectNulls: !1,
	type: "linear"
}, am = (e) => {
	var t = e.type, n = t === void 0 ? im.type : t, r = e.points, i = r === void 0 ? [] : r, a = e.baseLine, o = e.layout, s = e.connectNulls, c = s === void 0 ? im.connectNulls : s, l = rm(n, o);
	if (Array.isArray(a)) {
		var u, d = i.map((e, t) => Jp(Jp({}, e), {}, { base: a[t] }));
		return u = o === "vertical" ? tn().y(nm).x1(tm).x0((e) => e.base.x) : tn().x(tm).y1(nm).y0((e) => e.base.y), u.defined(em).curve(l)(c ? d.filter(em) : d);
	}
	var f = c ? i.filter($p) : i;
	return (o === "vertical" && I(a) ? tn().y(nm).x1(tm).x0(a) : I(a) ? tn().x(tm).y1(nm).y0(a) : en().x(tm).y(nm)).defined($p).curve(l)(f);
}, om = (e) => {
	var t = e.className, n = e.points, r = e.path, i = e.pathRef, a = Rd();
	if ((!n || !n.length) && !r) return null;
	var o = {
		type: e.type,
		points: e.points,
		baseLine: e.baseLine,
		layout: e.layout || a,
		connectNulls: e.connectNulls
	}, s = n && n.length ? am(o) : r;
	return /*#__PURE__*/ F.createElement("path", Kp({}, ze(e), hi(e), {
		className: l("recharts-curve", t),
		d: s === null ? void 0 : s,
		ref: i
	}));
}, sm = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ F.createElement(Yr, { fill: t }, (t) => /*#__PURE__*/ F.createElement(om, Kp({}, e, { fill: t }))) : /*#__PURE__*/ F.createElement(om, Kp({}, e, { fill: t }));
}, cm = [
	"x",
	"y",
	"top",
	"left",
	"width",
	"height",
	"className"
];
function lm() {
	return lm = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, lm.apply(null, arguments);
}
function um(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function dm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? um(Object(n), !0).forEach(function(t) {
			fm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : um(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function fm(e, t, n) {
	return (t = pm(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pm(e) {
	var t = mm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hm(e, t) {
	if (e == null) return {};
	var n, r, i = gm(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function gm(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var _m = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`, vm = (e) => {
	var t = e.x, n = t === void 0 ? 0 : t, r = e.y, i = r === void 0 ? 0 : r, a = e.top, o = a === void 0 ? 0 : a, s = e.left, c = s === void 0 ? 0 : s, u = e.width, d = u === void 0 ? 0 : u, f = e.height, p = f === void 0 ? 0 : f, m = e.className, h = hm(e, cm), g = dm({
		x: n,
		y: i,
		top: o,
		left: c,
		width: d,
		height: p
	}, h);
	return !I(n) || !I(i) || !I(d) || !I(p) || !I(o) || !I(c) ? null : /*#__PURE__*/ F.createElement("path", lm({}, Ve(g), {
		className: l("recharts-cross", m),
		d: _m(n, i, d, p, o, c)
	}));
};
// node_modules/recharts/es6/util/cursor/getCursorRectangle.js
function ym(e, t, n, r) {
	var i = r / 2;
	return {
		x: e === "horizontal" ? t.x - i : n.left + .5,
		y: e === "horizontal" ? n.top + .5 : t.y - i,
		width: e === "horizontal" ? r : n.width - 1,
		height: e === "horizontal" ? n.height - 1 : r
	};
}
var bm = (e, t) => [
	0,
	3 * e,
	3 * t - 6 * e,
	3 * e - 3 * t + 1
], xm = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t), Sm = (e, t) => (n) => xm(bm(e, t), n), Cm = (e, t) => (n) => xm([...bm(e, t).map((e, t) => e * t).slice(1), 0], n), wm = (e) => {
	var t, n = e.split("(");
	if (n.length !== 2 || n[0] !== "cubic-bezier") return null;
	var r = (t = n[1]) == null || (t = t.split(")")[0]) == null ? void 0 : t.split(",");
	if (r == null || r.length !== 4) return null;
	var i = r.map((e) => parseFloat(e));
	return [
		i[0],
		i[1],
		i[2],
		i[3]
	];
}, Tm = function() {
	var e = [...arguments];
	if (e.length === 1) switch (e[0]) {
		case "linear": return [
			0,
			0,
			1,
			1
		];
		case "ease": return [
			.25,
			.1,
			.25,
			1
		];
		case "ease-in": return [
			.42,
			0,
			1,
			1
		];
		case "ease-out": return [
			0,
			0,
			.58,
			1
		];
		case "ease-in-out": return [
			.42,
			0,
			.58,
			1
		];
		default:
			var t = wm(e[0]);
			if (t) return t;
	}
	return e.length === 4 ? e : [
		0,
		0,
		1,
		1
	];
}, Em = (e, t, n, r) => {
	var i = Sm(e, n), a = Sm(t, r), o = Cm(e, n), s = (e) => e > 1 ? 1 : e < 0 ? 0 : e, c = (e) => {
		for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
			var c = i(n) - t, l = o(n);
			if (Math.abs(c - t) < 1e-4 || l < 1e-4) return a(n);
			n = s(n - c / l);
		}
		return a(n);
	};
	return c.isStepper = !1, c;
}, Dm = function() {
	return Em(...Tm(...arguments));
}, Om = function() {
	for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.stiff, n = t === void 0 ? 100 : t, r = e.damping, i = r === void 0 ? 8 : r, a = e.dt, o = a === void 0 ? 16.67 : a, s = 1, c = [0], l = 0, u = 0, d = 1e4, f = 0; f < d;) {
		var p = -(l - s) * n, m = u * i;
		if (u += (p - m) * o / 1e3, l += u * o / 1e3, c.push(l), Math.abs(l - s) < 1e-4 && Math.abs(u) < 1e-4) break;
		f++;
	}
	c[c.length - 1] = s;
	var h = c.length - 1;
	return (e) => {
		if (e <= 0) return 0;
		if (e >= 1) return s;
		var t = e * h, n = Math.floor(t), r = t - n;
		return (c[n] ?? 0) + ((c[n + 1] ?? 0) - (c[n] ?? 0)) * r;
	};
}, km = (e) => {
	if (typeof e == "string") switch (e) {
		case "ease":
		case "ease-in-out":
		case "ease-out":
		case "ease-in":
		case "linear": return Dm(e);
		case "spring": return Om();
		default: if (e.split("(")[0] === "cubic-bezier") return Dm(e);
	}
	return typeof e == "function" ? e : null;
}, Am = /*#__PURE__*/ (0, F.createContext)((e, t, n) => {
	var r, i = (a) => {
		var o = t.tick(a);
		if (t.getState() === "active") {
			if (n(t.getInterpolated()), t.getProgress() === 1) {
				t.complete(), r = void 0;
				return;
			}
			r = e.setTimeout(i, o);
		} else r = e.setTimeout(i, o);
	};
	return r = e.setTimeout(i, 0), () => r?.();
});
Am.Provider;
function jm(e) {
	var t = (0, F.useContext)(Am);
	return (0, F.useMemo)(() => e ?? t, [e, t]);
}
// node_modules/recharts/es6/animation/AnimationHandle.js
function Mm(e, t, n) {
	return (t = Nm(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Nm(e) {
	var t = Pm(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Pm(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Fm = "init", Im = "pending", Lm = "active", Rm = "completed";
function zm(e) {
	return Math.max(0, e);
}
var Bm = class {
	getAnimationStartedTime() {
		return this.animationStartedTime;
	}
	getBeginStartedTime() {
		return this.beginStartedTime;
	}
	constructor(e) {
		var t;
		Mm(this, "state", Fm), this.animationId = e.animationId, this.onAnimationEnd = e.onAnimationEnd, this.animationDuration = zm(e.animationDuration), this.animationBegin = zm(e.animationBegin), this.progress = 0, this.from = e.from, this.to = e.to, this.easing = e.easing, (t = e.onAnimationStart) == null || t.call(e);
	}
	getState() {
		return this.state;
	}
	getEasing() {
		return this.easing;
	}
	getAnimationDuration() {
		return this.animationDuration;
	}
	tick(e) {
		if (this.getState() === Fm) return this.state = Im, this.beginStartedTime = e, this.animationBegin;
		if (this.getState() === Im) {
			if (this.beginStartedTime == null) throw Error();
			var t = e - this.beginStartedTime;
			return t >= this.animationBegin ? (this.state = Lm, this.animationStartedTime = e, this.nextAnimationUpdate(0)) : zm(this.animationBegin - t);
		}
		if (this.getState() === Lm) {
			if (this.animationStartedTime == null) throw Error();
			var n = e - this.animationStartedTime;
			return this.setProgress(n / this.animationDuration), this.nextAnimationUpdate(n);
		}
		return 0;
	}
	setProgress(e) {
		this.progress = Math.min(1, Math.max(0, e));
	}
	getProgress() {
		return this.progress;
	}
	complete() {
		if (this.progress = 1, this.state === "active") {
			var e;
			(e = this.onAnimationEnd) == null || e.call(this);
		}
		this.state = Rm;
	}
	getFrom() {
		return this.from;
	}
	getTo() {
		return this.to;
	}
	getAnimationId() {
		return this.animationId;
	}
	getAnimationBegin() {
		return this.animationBegin;
	}
}, Vm = class extends Bm {
	nextAnimationUpdate() {
		return 0;
	}
	getInterpolated() {
		return this.easing(L(this.getFrom(), this.getTo(), this.getProgress()));
	}
}, Hm = class {
	setTimeout(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), r = null, i = (a) => {
			a - n >= t ? e(a) : r = requestAnimationFrame(i);
		};
		return r = requestAnimationFrame(i), () => {
			r != null && cancelAnimationFrame(r);
		};
	}
};
// node_modules/recharts/es6/animation/JavascriptAnimate.js
function Um(e, t) {
	return Jm(e) || qm(e, t) || Gm(e, t) || Wm();
}
function Wm() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Gm(e, t) {
	if (e) {
		if (typeof e == "string") return Km(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Km(e, t) : void 0;
	}
}
function Km(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qm(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Jm(e) {
	if (Array.isArray(e)) return e;
}
var Ym = {
	begin: 0,
	duration: 1e3,
	easing: "ease",
	isActive: !0,
	canBegin: !0,
	onAnimationEnd: () => {},
	onAnimationStart: () => {}
}, Xm = 0, Zm = 1;
function Qm(e) {
	var t = Ci(e, Ym), n = t.animationId, r = t.isActive, i = t.canBegin, a = t.duration, o = t.easing, s = t.begin, c = t.onAnimationEnd, l = t.onAnimationStart, u = t.children, d = kp(), f = r === "auto" ? !Sp.isSsr && !d : r, p = jm(t.animationController), m = Um((0, F.useState)(f ? Xm : Zm), 2), h = m[0], g = m[1];
	return (0, F.useEffect)(() => {
		f || g(Zm);
	}, [f]), (0, F.useEffect)(() => {
		var e = km(o);
		return !f || !i || e == null ? wt : p(new Hm(), new Vm({
			animationId: n,
			easing: e,
			animationDuration: a,
			animationBegin: s,
			onAnimationStart: l,
			onAnimationEnd: c,
			from: Xm,
			to: Zm
		}), g);
	}, [
		p,
		n,
		f,
		i,
		a,
		o,
		s,
		l,
		c
	]), u(Number(h));
}
// node_modules/recharts/es6/util/useAnimationId.js
function $m(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", n = (0, F.useRef)(vt(t)), r = (0, F.useRef)(e);
	return r.current !== e && (n.current = vt(t), r.current = e), n.current;
}
// node_modules/recharts/es6/animation/util.js
var eh = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`), th = (e, t, n) => e.map((e) => `${eh(e)} ${t}ms ${n}`).join(","), nh = ["radius"], rh = ["radius"], ih, ah, oh, sh, ch, lh, uh, dh, fh, ph;
function mh(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hh(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mh(Object(n), !0).forEach(function(t) {
			gh(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mh(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gh(e, t, n) {
	return (t = _h(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _h(e) {
	var t = vh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function vh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function yh() {
	return yh = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, yh.apply(null, arguments);
}
function bh(e, t) {
	if (e == null) return {};
	var n, r, i = xh(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function xh(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Sh(e, t) {
	return Dh(e) || Eh(e, t) || wh(e, t) || Ch();
}
function Ch() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function wh(e, t) {
	if (e) {
		if (typeof e == "string") return Th(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Th(e, t) : void 0;
	}
}
function Th(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Eh(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Dh(e) {
	if (Array.isArray(e)) return e;
}
function Oh(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var kh = (e, t, n, r, i) => {
	var a = dt(n), o = dt(r), s = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), c = o >= 0 ? 1 : -1, l = a >= 0 ? 1 : -1, u = +(o >= 0 && a >= 0 || o < 0 && a < 0), d;
	if (s > 0 && Array.isArray(i)) {
		for (var f = [
			0,
			0,
			0,
			0
		], p = 0, m = 4; p < m; p++) {
			var h = i[p] ?? 0;
			f[p] = h > s ? s : h;
		}
		d = ft(ih ||= Oh([
			"M",
			",",
			""
		]), e, t + c * f[0]), f[0] > 0 && (d += ft(ah ||= Oh([
			"A ",
			",",
			",0,0,",
			",",
			",",
			""
		]), f[0], f[0], u, e + l * f[0], t)), d += ft(oh ||= Oh([
			"L ",
			",",
			""
		]), e + n - l * f[1], t), f[1] > 0 && (d += ft(sh ||= Oh([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[1], f[1], u, e + n, t + c * f[1])), d += ft(ch ||= Oh([
			"L ",
			",",
			""
		]), e + n, t + r - c * f[2]), f[2] > 0 && (d += ft(lh ||= Oh([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[2], f[2], u, e + n - l * f[2], t + r)), d += ft(uh ||= Oh([
			"L ",
			",",
			""
		]), e + l * f[3], t + r), f[3] > 0 && (d += ft(dh ||= Oh([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		]), f[3], f[3], u, e, t + r - c * f[3])), d += "Z";
	} else if (s > 0 && i === +i && i > 0) {
		var g = Math.min(s, i);
		d = ft(fh ||= Oh(/* @__PURE__ */ "M .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,.\n            L .,.\n            A .,.,0,0,.,.,. Z".split(".")), e, t + c * g, g, g, u, e + l * g, t, e + n - l * g, t, g, g, u, e + n, t + c * g, e + n, t + r - c * g, g, g, u, e + n - l * g, t + r, e + l * g, t + r, g, g, u, e, t + r - c * g);
	} else d = ft(ph ||= Oh([
		"M ",
		",",
		" h ",
		" v ",
		" h ",
		" Z"
	]), e, t, n, r, -n);
	return d;
}, Ah = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	radius: 0,
	isAnimationActive: !1,
	isUpdateAnimationActive: !1,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
}, jh = (e) => {
	var t = Ci(e, Ah), n = (0, F.useRef)(null), r = Sh((0, F.useState)(-1), 2), i = r[0], a = r[1];
	(0, F.useEffect)(() => {
		if (n.current && n.current.getTotalLength) try {
			var e = n.current.getTotalLength();
			e && a(e);
		} catch {}
	}, []);
	var o = t.x, s = t.y, c = t.width, u = t.height, d = t.radius, f = t.className, p = t.animationEasing, m = t.animationDuration, h = t.animationBegin, g = t.isAnimationActive, _ = t.isUpdateAnimationActive, v = (0, F.useRef)(c), y = (0, F.useRef)(u), b = (0, F.useRef)(o), x = (0, F.useRef)(s), S = $m((0, F.useMemo)(() => ({
		x: o,
		y: s,
		width: c,
		height: u,
		radius: d
	}), [
		o,
		s,
		c,
		u,
		d
	]), "rectangle-"), C = Sh((0, F.useState)(0), 2)[1], w = (0, F.useCallback)(() => {
		C((e) => e + 1);
	}, []);
	if (o !== +o || s !== +s || c !== +c || u !== +u) return null;
	var T = c === 0 || u === 0, E = v.current !== 0 && y.current !== 0;
	if (T && !(_ && E)) return null;
	var D = l("recharts-rectangle", f);
	if (!_) {
		var O = Ve(t);
		O.radius;
		var k = bh(O, nh);
		return /*#__PURE__*/ F.createElement("path", yh({}, k, {
			x: dt(o),
			y: dt(s),
			width: dt(c),
			height: dt(u),
			radius: typeof d == "number" ? d : void 0,
			className: D,
			d: kh(o, s, c, u, d)
		}));
	}
	var A = v.current, j = y.current, M = b.current, N = x.current, P = `0px ${i === -1 ? 1 : i}px`, ee = `${i}px ${i}px`, te = th(["strokeDasharray"], m, typeof p == "string" ? p : Ah.animationEasing);
	return /*#__PURE__*/ F.createElement(Qm, {
		animationId: S,
		key: S,
		canBegin: i > 0,
		duration: m,
		easing: p,
		isActive: _,
		begin: h,
		onAnimationEnd: T ? w : void 0
	}, (e) => {
		var r = L(A, c, e), i = L(j, u, e), a = L(M, o, e), l = L(N, s, e);
		n.current && (v.current = r, y.current = i, b.current = a, x.current = l);
		var f = g ? e > 0 ? {
			transition: te,
			strokeDasharray: ee
		} : { strokeDasharray: P } : { strokeDasharray: ee }, p = Ve(t);
		p.radius;
		var m = bh(p, rh);
		return /*#__PURE__*/ F.createElement("path", yh({}, m, {
			radius: typeof d == "number" ? d : void 0,
			className: D,
			d: kh(a, l, r, i, d),
			ref: n,
			style: hh(hh({}, f), t.style)
		}));
	});
}, Mh = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ F.createElement(Yr, {
		fill: t,
		bounds: Jr(Math.abs(e.width ?? 0), Math.abs(e.height ?? 0))
	}, (t) => /*#__PURE__*/ F.createElement(jh, yh({}, e, { fill: t }))) : /*#__PURE__*/ F.createElement(jh, yh({}, e, { fill: t }));
};
// node_modules/recharts/es6/util/PolarUtils.js
function Nh(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ph(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Nh(Object(n), !0).forEach(function(t) {
			Fh(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nh(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Fh(e, t, n) {
	return (t = Ih(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ih(e) {
	var t = Lh(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Lh(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Rh = Math.PI / 180, zh = (e) => e * Math.PI / 180, Bh = (e) => e * 180 / Math.PI, Vh = (e, t, n, r) => ({
	x: e + Math.cos(-Rh * r) * n,
	y: t + Math.sin(-Rh * r) * n
}), Hh = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: 0,
		height: 0,
		brushBottom: 0
	};
	return Math.min(Math.abs(e - (n.left || 0) - (n.right || 0)), Math.abs(t - (n.top || 0) - (n.bottom || 0))) / 2;
}, Uh = (e, t) => {
	var n = e.x, r = e.y, i = t.x, a = t.y;
	return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
}, Wh = (e, t) => {
	var n = e.x, r = e.y, i = t.cx, a = t.cy, o = Uh({
		x: n,
		y: r
	}, {
		x: i,
		y: a
	});
	if (o <= 0) return {
		radius: o,
		angle: 0
	};
	var s = (n - i) / o, c = Math.acos(s);
	return r > a && (c = 2 * Math.PI - c), {
		radius: o,
		angle: Bh(c),
		angleInRadian: c
	};
}, Gh = (e) => {
	var t = e.startAngle, n = e.endAngle, r = Math.floor(t / 360), i = Math.floor(n / 360), a = Math.min(r, i);
	return {
		startAngle: t - a * 360,
		endAngle: n - a * 360
	};
}, Kh = (e, t) => {
	var n = t.startAngle, r = t.endAngle, i = Math.floor(n / 360), a = Math.floor(r / 360);
	return e + Math.min(i, a) * 360;
}, qh = (e, t) => {
	var n = e.relativeX, r = e.relativeY, i = Wh({
		x: n,
		y: r
	}, t), a = i.radius, o = i.angle, s = t.innerRadius, c = t.outerRadius;
	if (a < s || a > c || a === 0) return null;
	var l = Gh(t), u = l.startAngle, d = l.endAngle, f = o, p;
	if (u <= d) {
		for (; f > d;) f -= 360;
		for (; f < u;) f += 360;
		p = f >= u && f <= d;
	} else {
		for (; f > u;) f -= 360;
		for (; f < d;) f += 360;
		p = f >= d && f <= u;
	}
	return p ? Ph(Ph({}, t), {}, {
		radius: a,
		angle: Kh(f, t)
	}) : null;
};
// node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js
function Jh(e) {
	var t = e.cx, n = e.cy, r = e.radius, i = e.startAngle, a = e.endAngle;
	return {
		points: [Vh(t, n, r, i), Vh(t, n, r, a)],
		cx: t,
		cy: n,
		radius: r,
		startAngle: i,
		endAngle: a
	};
}
// node_modules/recharts/es6/shape/Sector.js
var Yh, Xh, Zh, Qh, $h, eg, tg;
function ng() {
	return ng = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ng.apply(null, arguments);
}
function rg(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var ig = (e, t) => pt(t - e) * Math.min(Math.abs(t - e), 359.999), ag = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.angle, a = e.sign, o = e.isExternal, s = e.cornerRadius, c = e.cornerIsExternal, l = s * (o ? 1 : -1) + r, u = Math.asin(s / l) / Rh, d = c ? i : i + a * u, f = Vh(t, n, l, d), p = Vh(t, n, r, d), m = c ? i - a * u : i;
	return {
		center: f,
		circleTangency: p,
		lineTangency: Vh(t, n, l * Math.cos(u * Rh), m),
		theta: u
	};
}, og = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.startAngle, o = e.endAngle, s = ig(a, o), c = a + s, l = Vh(t, n, i, a), u = Vh(t, n, i, c), d = ft(Yh ||= rg([
		"M ",
		",",
		"\n    A ",
		",",
		",0,\n    ",
		",",
		",\n    ",
		",",
		"\n  "
	]), l.x, l.y, i, i, +(Math.abs(s) > 180), +(a > c), u.x, u.y);
	if (r > 0) {
		var f = Vh(t, n, r, a), p = Vh(t, n, r, c);
		d += ft(Xh ||= rg([
			"L ",
			",",
			"\n            A ",
			",",
			",0,\n            ",
			",",
			",\n            ",
			",",
			" Z"
		]), p.x, p.y, r, r, +(Math.abs(s) > 180), +(a <= c), f.x, f.y);
	} else d += ft(Zh ||= rg([
		"L ",
		",",
		" Z"
	]), t, n);
	return d;
}, sg = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.cornerRadius, o = e.forceCornerRadius, s = e.cornerIsExternal, c = e.startAngle, l = e.endAngle, u = pt(l - c), d = Math.abs(c - l), f = !o && !s && d < 180, p = Math.sin(d / 2 * Rh), m = f ? Math.min(a, i * p / (1 + p)) : a, h = f ? Math.min(a, r * p / (1 - p)) : a, g = ag({
		cx: t,
		cy: n,
		radius: i,
		angle: c,
		sign: u,
		cornerRadius: m,
		cornerIsExternal: s
	}), _ = g.circleTangency, v = g.lineTangency, y = g.theta, b = ag({
		cx: t,
		cy: n,
		radius: i,
		angle: l,
		sign: -u,
		cornerRadius: m,
		cornerIsExternal: s
	}), x = b.circleTangency, S = b.lineTangency, C = b.theta, w = s ? Math.abs(c - l) : Math.abs(c - l) - y - C;
	if (w < 0 && o) return ft(Qh ||= rg([
		"M ",
		",",
		"\n      a",
		",",
		",0,0,1,",
		",0\n      a",
		",",
		",0,0,1,",
		",0\n    "
	]), v.x, v.y, a, a, a * 2, a, a, -a * 2);
	var T = ft($h ||= rg([
		"M ",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n    A",
		",",
		",0,",
		",",
		",",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n  "
	]), v.x, v.y, m, m, +(u < 0), _.x, _.y, i, i, +(w > 180), +(u < 0), x.x, x.y, m, m, +(u < 0), S.x, S.y);
	if (r > 0) {
		var E = ag({
			cx: t,
			cy: n,
			radius: r,
			angle: c,
			sign: u,
			isExternal: !0,
			cornerRadius: h,
			cornerIsExternal: s
		}), D = E.circleTangency, O = E.lineTangency, k = E.theta, A = ag({
			cx: t,
			cy: n,
			radius: r,
			angle: l,
			sign: -u,
			isExternal: !0,
			cornerRadius: h,
			cornerIsExternal: s
		}), j = A.circleTangency, M = A.lineTangency, N = A.theta, P = s ? Math.abs(c - l) : Math.abs(c - l) - k - N;
		if (P < 0 && a === 0) return `${T}L${t},${n}Z`;
		T += ft(eg ||= rg([
			"L",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"\n      A",
			",",
			",0,",
			",",
			",",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"Z"
		]), M.x, M.y, h, h, +(u < 0), j.x, j.y, r, r, +(P > 180), +(u > 0), D.x, D.y, h, h, +(u < 0), O.x, O.y);
	} else T += ft(tg ||= rg([
		"L",
		",",
		"Z"
	]), t, n);
	return T;
}, cg = {
	cx: 0,
	cy: 0,
	innerRadius: 0,
	outerRadius: 0,
	startAngle: 0,
	endAngle: 0,
	cornerRadius: 0,
	forceCornerRadius: !1,
	cornerIsExternal: !1
}, lg = (e) => {
	var t = Ci(e, cg), n = t.cx, r = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, d = t.endAngle, f = t.className;
	if (a < i || u === d) return null;
	var p = l("recharts-sector", f), m = a - i, h = yt(o, m, 0, !0), g = h > 0 && Math.abs(u - d) < 360 ? sg({
		cx: n,
		cy: r,
		innerRadius: i,
		outerRadius: a,
		cornerRadius: Math.min(h, m / 2),
		forceCornerRadius: s,
		cornerIsExternal: c,
		startAngle: u,
		endAngle: d
	}) : og({
		cx: n,
		cy: r,
		innerRadius: i,
		outerRadius: a,
		startAngle: u,
		endAngle: d
	});
	return /*#__PURE__*/ F.createElement("path", ng({}, Ve(t), {
		className: p,
		d: g
	}));
}, ug = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ F.createElement(Yr, { fill: t }, (t) => /*#__PURE__*/ F.createElement(lg, ng({}, e, { fill: t }))) : /*#__PURE__*/ F.createElement(lg, ng({}, e, { fill: t }));
};
// node_modules/recharts/es6/util/cursor/getCursorPoints.js
function dg(e, t, n) {
	if (e === "horizontal") return [{
		x: t.x,
		y: n.top
	}, {
		x: t.x,
		y: n.top + n.height
	}];
	if (e === "vertical") return [{
		x: n.left,
		y: t.y
	}, {
		x: n.left + n.width,
		y: t.y
	}];
	if (mi(t)) {
		if (e === "centric") {
			var r = t.cx, i = t.cy, a = t.innerRadius, o = t.outerRadius, s = t.angle, c = Vh(r, i, a, s), l = Vh(r, i, o, s);
			return [{
				x: c.x,
				y: c.y
			}, {
				x: l.x,
				y: l.y
			}];
		}
		return Jh(t);
	}
}
// node_modules/es-toolkit/dist/compat/util/toNumber.mjs
function fg(e) {
	return it(e) ? NaN : Number(e);
}
// node_modules/es-toolkit/dist/compat/util/toFinite.mjs
function pg(e) {
	return e ? (e = fg(e), e === Infinity || e === -Infinity ? (e < 0 ? -1 : 1) * Number.MAX_VALUE : e === e ? e : 0) : e === 0 ? e : 0;
}
// node_modules/es-toolkit/dist/compat/math/range.mjs
function mg(e, t, n) {
	n && typeof n != "number" && Co(e, t, n) && (t = n = void 0), e = pg(e), t === void 0 ? (t = e, e = 0) : t = pg(t), n = n === void 0 ? e < t ? 1 : -1 : pg(n);
	let r = Math.max(Math.ceil((t - e) / (n || 1)), 0), i = Array(r);
	for (let t = 0; t < r; t++) i[t] = e, e += n;
	return i;
}
// node_modules/recharts/es6/state/selectors/dataSelectors.js
var hg = (e) => e.chartData, gg = H([(e) => e.chartData.chartData, (e) => e.chartData.computedData], (e, t) => ({
	chartData: e,
	computedData: t,
	dataEndIndex: e == null ? 0 : e.length - 1,
	dataStartIndex: 0
})), _g = (e, t, n, r) => r ? gg(e) : hg(e), vg = (e, t, n) => n ? gg(e) : hg(e), yg = H([_g], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
}), bg = H([gg], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
}), xg = H([hg], (e) => {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null ? [] : t.slice(n, r + 1);
});
// node_modules/recharts/es6/util/isDomainSpecifiedByUser.js
function Sg(e, t) {
	return Dg(e) || Eg(e, t) || wg(e, t) || Cg();
}
function Cg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function wg(e, t) {
	if (e) {
		if (typeof e == "string") return Tg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tg(e, t) : void 0;
	}
}
function Tg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Eg(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Dg(e) {
	if (Array.isArray(e)) return e;
}
function Og(e) {
	if (Array.isArray(e) && e.length === 2) {
		var t = Sg(e, 2), n = t[0], r = t[1];
		if (W(n) && W(r)) return !0;
	}
	return !1;
}
function kg(e, t, n) {
	return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Ag(e, t) {
	if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
		var n = Sg(e, 2), r = n[0], i = n[1], a, o;
		if (W(r)) a = r;
		else if (typeof r == "function") return;
		if (W(i)) o = i;
		else if (typeof i == "function") return;
		var s = [a, o];
		if (Og(s)) return s;
	}
}
function jg(e, t, n) {
	if (n || t != null) {
		if (typeof e == "function" && t != null) try {
			var r = e(t, n);
			if (Og(r)) return kg(r, t, n);
		} catch {}
		if (Array.isArray(e) && e.length === 2) {
			var i = Sg(e, 2), a = i[0], o = i[1], s, c;
			if (a === "auto") t != null && (s = Math.min(...t));
			else if (I(a)) s = a;
			else if (typeof a == "function") try {
				t != null && (s = a(t?.[0]));
			} catch {}
			else if (typeof a == "string" && Su.test(a)) {
				var l = Su.exec(a);
				if (l == null || l[1] == null || t == null) s = void 0;
				else {
					var u = +l[1];
					s = t[0] - u;
				}
			} else s = t?.[0];
			if (o === "auto") t != null && (c = Math.max(...t));
			else if (I(o)) c = o;
			else if (typeof o == "function") try {
				t != null && (c = o(t?.[1]));
			} catch {}
			else if (typeof o == "string" && Cu.test(o)) {
				var d = Cu.exec(o);
				if (d == null || d[1] == null || t == null) c = void 0;
				else {
					var f = +d[1];
					c = t[1] + f;
				}
			} else c = t?.[1];
			var p = [s, c];
			if (Og(p)) return t == null ? p : kg(p, t, n);
		}
	}
}
// node_modules/recharts/es6/state/chartDataSlice.js
var Mg = {
	chartData: void 0,
	computedData: void 0,
	dataStartIndex: 0,
	dataEndIndex: 0
};
function Ng(e) {
	var t = e.chartData, n = e.dataStartIndex, r = e.dataEndIndex;
	return t == null || t.length === 0 ? [0, Infinity] : [n, r];
}
var Pg = Xc({
	name: "chartData",
	initialState: Mg,
	reducers: {
		setChartData(e, t) {
			e.chartData = U(t.payload), t.payload == null ? (e.dataStartIndex = 0, e.dataEndIndex = 0) : (t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1), t.payload.length > 0 && (e.dataStartIndex = Math.min(Math.max(e.dataStartIndex, 0), t.payload.length - 1)));
		},
		setComputedData(e, t) {
			e.computedData = t.payload;
		},
		setDataStartEndIndexes(e, t) {
			var n = t.payload, r = n.startIndex, i = n.endIndex, a = e.chartData != null && e.chartData.length > 0 ? e.chartData.length - 1 : void 0, o = (e) => a == null ? e : Math.min(Math.max(e, 0), a);
			r != null && (e.dataStartIndex = o(r)), i != null && (e.dataEndIndex = o(i));
		}
	}
}), Fg = Pg.actions, Ig = Fg.setChartData, Lg = Fg.setDataStartEndIndexes;
Fg.setComputedData;
var Rg = Pg.reducer, q = /* @__PURE__ */ i((/* @__PURE__ */ n(((e, t, n) => {
	(function(e) {
		var n = 1e9, r = {
			precision: 20,
			rounding: 4,
			toExpNeg: -7,
			toExpPos: 21,
			LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
		}, i = !0, a = "[DecimalError] ", o = a + "Invalid argument: ", s = a + "Exponent out of range: ", c = Math.floor, l = Math.pow, u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, d, f = 1e7, p = 7, m = 9007199254740991, h = c(m / p), g = {};
		g.absoluteValue = g.abs = function() {
			var e = new this.constructor(this);
			return e.s &&= 1, e;
		}, g.comparedTo = g.cmp = function(e) {
			var t, n, r, i, a = this;
			if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
			if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
			for (r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i; t < n; ++t) if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
			return r === i ? 0 : r > i ^ a.s < 0 ? 1 : -1;
		}, g.decimalPlaces = g.dp = function() {
			var e = this, t = e.d.length - 1, n = (t - e.e) * p;
			if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) n--;
			return n < 0 ? 0 : n;
		}, g.dividedBy = g.div = function(e) {
			return b(this, new this.constructor(e));
		}, g.dividedToIntegerBy = g.idiv = function(e) {
			var t = this, n = t.constructor;
			return D(b(t, new n(e), 0, 1), n.precision);
		}, g.equals = g.eq = function(e) {
			return !this.cmp(e);
		}, g.exponent = function() {
			return S(this);
		}, g.greaterThan = g.gt = function(e) {
			return this.cmp(e) > 0;
		}, g.greaterThanOrEqualTo = g.gte = function(e) {
			return this.cmp(e) >= 0;
		}, g.isInteger = g.isint = function() {
			return this.e > this.d.length - 2;
		}, g.isNegative = g.isneg = function() {
			return this.s < 0;
		}, g.isPositive = g.ispos = function() {
			return this.s > 0;
		}, g.isZero = function() {
			return this.s === 0;
		}, g.lessThan = g.lt = function(e) {
			return this.cmp(e) < 0;
		}, g.lessThanOrEqualTo = g.lte = function(e) {
			return this.cmp(e) < 1;
		}, g.logarithm = g.log = function(e) {
			var t, n = this, r = n.constructor, o = r.precision, s = o + 5;
			if (e === void 0) e = new r(10);
			else if (e = new r(e), e.s < 1 || e.eq(d)) throw Error(a + "NaN");
			if (n.s < 1) throw Error(a + (n.s ? "NaN" : "-Infinity"));
			return n.eq(d) ? new r(0) : (i = !1, t = b(T(n, s), T(e, s), s), i = !0, D(t, o));
		}, g.minus = g.sub = function(e) {
			var t = this;
			return e = new t.constructor(e), t.s == e.s ? O(t, e) : _(t, (e.s = -e.s, e));
		}, g.modulo = g.mod = function(e) {
			var t, n = this, r = n.constructor, o = r.precision;
			if (e = new r(e), !e.s) throw Error(a + "NaN");
			return n.s ? (i = !1, t = b(n, e, 0, 1).times(e), i = !0, n.minus(t)) : D(new r(n), o);
		}, g.naturalExponential = g.exp = function() {
			return x(this);
		}, g.naturalLogarithm = g.ln = function() {
			return T(this);
		}, g.negated = g.neg = function() {
			var e = new this.constructor(this);
			return e.s = -e.s || 0, e;
		}, g.plus = g.add = function(e) {
			var t = this;
			return e = new t.constructor(e), t.s == e.s ? _(t, e) : O(t, (e.s = -e.s, e));
		}, g.precision = g.sd = function(e) {
			var t, n, r, i = this;
			if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(o + e);
			if (t = S(i) + 1, r = i.d.length - 1, n = r * p + 1, r = i.d[r], r) {
				for (; r % 10 == 0; r /= 10) n--;
				for (r = i.d[0]; r >= 10; r /= 10) n++;
			}
			return e && t > n ? t : n;
		}, g.squareRoot = g.sqrt = function() {
			var e, t, n, r, o, s, l, u = this, d = u.constructor;
			if (u.s < 1) {
				if (!u.s) return new d(0);
				throw Error(a + "NaN");
			}
			for (e = S(u), i = !1, o = Math.sqrt(+u), o == 0 || o == 1 / 0 ? (t = y(u.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), r = new d(t)) : r = new d(o.toString()), n = d.precision, o = l = n + 3;;) if (s = r, r = s.plus(b(u, s, l + 2)).times(.5), y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l)) {
				if (t = t.slice(l - 3, l + 1), o == l && t == "4999") {
					if (D(s, n + 1, 0), s.times(s).eq(u)) {
						r = s;
						break;
					}
				} else if (t != "9999") break;
				l += 4;
			}
			return i = !0, D(r, n);
		}, g.times = g.mul = function(e) {
			var t, n, r, a, o, s, c, l, u, d = this, p = d.constructor, m = d.d, h = (e = new p(e)).d;
			if (!d.s || !e.s) return new p(0);
			for (e.s *= d.s, n = d.e + e.e, l = m.length, u = h.length, l < u && (o = m, m = h, h = o, s = l, l = u, u = s), o = [], s = l + u, r = s; r--;) o.push(0);
			for (r = u; --r >= 0;) {
				for (t = 0, a = l + r; a > r;) c = o[a] + h[r] * m[a - r - 1] + t, o[a--] = c % f | 0, t = c / f | 0;
				o[a] = (o[a] + t) % f | 0;
			}
			for (; !o[--s];) o.pop();
			return t ? ++n : o.shift(), e.d = o, e.e = n, i ? D(e, p.precision) : e;
		}, g.toDecimalPlaces = g.todp = function(e, t) {
			var r = this, i = r.constructor;
			return r = new i(r), e === void 0 ? r : (v(e, 0, n), t === void 0 ? t = i.rounding : v(t, 0, 8), D(r, e + S(r) + 1, t));
		}, g.toExponential = function(e, t) {
			var r, i = this, a = i.constructor;
			return e === void 0 ? r = k(i, !0) : (v(e, 0, n), t === void 0 ? t = a.rounding : v(t, 0, 8), i = D(new a(i), e + 1, t), r = k(i, !0, e + 1)), r;
		}, g.toFixed = function(e, t) {
			var r, i, a = this, o = a.constructor;
			return e === void 0 ? k(a) : (v(e, 0, n), t === void 0 ? t = o.rounding : v(t, 0, 8), i = D(new o(a), e + S(a) + 1, t), r = k(i.abs(), !1, e + S(i) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
		}, g.toInteger = g.toint = function() {
			var e = this, t = e.constructor;
			return D(new t(e), S(e) + 1, t.rounding);
		}, g.toNumber = function() {
			return +this;
		}, g.toPower = g.pow = function(e) {
			var t, n, r, o, s, l, u = this, f = u.constructor, h = 12, g = +(e = new f(e));
			if (!e.s) return new f(d);
			if (u = new f(u), !u.s) {
				if (e.s < 1) throw Error(a + "Infinity");
				return u;
			}
			if (u.eq(d)) return u;
			if (r = f.precision, e.eq(d)) return D(u, r);
			if (t = e.e, n = e.d.length - 1, l = t >= n, s = u.s, !l) {
				if (s < 0) throw Error(a + "NaN");
			} else if ((n = g < 0 ? -g : g) <= m) {
				for (o = new f(d), t = Math.ceil(r / p + 4), i = !1; n % 2 && (o = o.times(u), A(o.d, t)), n = c(n / 2), n !== 0;) u = u.times(u), A(u.d, t);
				return i = !0, e.s < 0 ? new f(d).div(o) : D(o, r);
			}
			return s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1, u.s = 1, i = !1, o = e.times(T(u, r + h)), i = !0, o = x(o), o.s = s, o;
		}, g.toPrecision = function(e, t) {
			var r, i, a = this, o = a.constructor;
			return e === void 0 ? (r = S(a), i = k(a, r <= o.toExpNeg || r >= o.toExpPos)) : (v(e, 1, n), t === void 0 ? t = o.rounding : v(t, 0, 8), a = D(new o(a), e, t), r = S(a), i = k(a, e <= r || r <= o.toExpNeg, e)), i;
		}, g.toSignificantDigits = g.tosd = function(e, t) {
			var r = this, i = r.constructor;
			return e === void 0 ? (e = i.precision, t = i.rounding) : (v(e, 1, n), t === void 0 ? t = i.rounding : v(t, 0, 8)), D(new i(r), e, t);
		}, g.toString = g.valueOf = g.val = g.toJSON = function() {
			var e = this, t = S(e), n = e.constructor;
			return k(e, t <= n.toExpNeg || t >= n.toExpPos);
		};
		function _(e, t) {
			var n, r, a, o, s, c, l, u, d = e.constructor, m = d.precision;
			if (!e.s || !t.s) return t.s || (t = new d(e)), i ? D(t, m) : t;
			if (l = e.d, u = t.d, s = e.e, a = t.e, l = l.slice(), o = s - a, o) {
				for (o < 0 ? (r = l, o = -o, c = u.length) : (r = u, a = s, c = l.length), s = Math.ceil(m / p), c = s > c ? s + 1 : c + 1, o > c && (o = c, r.length = 1), r.reverse(); o--;) r.push(0);
				r.reverse();
			}
			for (c = l.length, o = u.length, c - o < 0 && (o = c, r = u, u = l, l = r), n = 0; o;) n = (l[--o] = l[o] + u[o] + n) / f | 0, l[o] %= f;
			for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0;) l.pop();
			return t.d = l, t.e = a, i ? D(t, m) : t;
		}
		function v(e, t, n) {
			if (e !== ~~e || e < t || e > n) throw Error(o + e);
		}
		function y(e) {
			var t, n, r, i = e.length - 1, a = "", o = e[0];
			if (i > 0) {
				for (a += o, t = 1; t < i; t++) r = e[t] + "", n = p - r.length, n && (a += w(n)), a += r;
				o = e[t], r = o + "", n = p - r.length, n && (a += w(n));
			} else if (o === 0) return "0";
			for (; o % 10 == 0;) o /= 10;
			return a + o;
		}
		var b = (function() {
			function e(e, t) {
				var n, r = 0, i = e.length;
				for (e = e.slice(); i--;) n = e[i] * t + r, e[i] = n % f | 0, r = n / f | 0;
				return r && e.unshift(r), e;
			}
			function t(e, t, n, r) {
				var i, a;
				if (n != r) a = n > r ? 1 : -1;
				else for (i = a = 0; i < n; i++) if (e[i] != t[i]) {
					a = e[i] > t[i] ? 1 : -1;
					break;
				}
				return a;
			}
			function n(e, t, n) {
				for (var r = 0; n--;) e[n] -= r, r = +(e[n] < t[n]), e[n] = r * f + e[n] - t[n];
				for (; !e[0] && e.length > 1;) e.shift();
			}
			return function(r, i, o, s) {
				var c, l, u, d, m, h, g, _, v, y, b, x, C, w, T, E, O, k, A = r.constructor, j = r.s == i.s ? 1 : -1, M = r.d, N = i.d;
				if (!r.s) return new A(r);
				if (!i.s) throw Error(a + "Division by zero");
				for (l = r.e - i.e, O = N.length, T = M.length, g = new A(j), _ = g.d = [], u = 0; N[u] == (M[u] || 0);) ++u;
				if (N[u] > (M[u] || 0) && --l, x = o == null ? o = A.precision : s ? o + (S(r) - S(i)) + 1 : o, x < 0) return new A(0);
				if (x = x / p + 2 | 0, u = 0, O == 1) for (d = 0, N = N[0], x++; (u < T || d) && x--; u++) C = d * f + (M[u] || 0), _[u] = C / N | 0, d = C % N | 0;
				else {
					for (d = f / (N[0] + 1) | 0, d > 1 && (N = e(N, d), M = e(M, d), O = N.length, T = M.length), w = O, v = M.slice(0, O), y = v.length; y < O;) v[y++] = 0;
					k = N.slice(), k.unshift(0), E = N[0], N[1] >= f / 2 && ++E;
					do
						d = 0, c = t(N, v, O, y), c < 0 ? (b = v[0], O != y && (b = b * f + (v[1] || 0)), d = b / E | 0, d > 1 ? (d >= f && (d = f - 1), m = e(N, d), h = m.length, y = v.length, c = t(m, v, h, y), c == 1 && (d--, n(m, O < h ? k : N, h))) : (d == 0 && (c = d = 1), m = N.slice()), h = m.length, h < y && m.unshift(0), n(v, m, y), c == -1 && (y = v.length, c = t(N, v, O, y), c < 1 && (d++, n(v, O < y ? k : N, y))), y = v.length) : c === 0 && (d++, v = [0]), _[u++] = d, c && v[0] ? v[y++] = M[w] || 0 : (v = [M[w]], y = 1);
					while ((w++ < T || v[0] !== void 0) && x--);
				}
				return _[0] || _.shift(), g.e = l, D(g, s ? o + S(g) + 1 : o);
			};
		})();
		function x(e, t) {
			var n, r, a, o, c, u, f = 0, p = 0, m = e.constructor, h = m.precision;
			if (S(e) > 16) throw Error(s + S(e));
			if (!e.s) return new m(d);
			for (t == null ? (i = !1, u = h) : u = t, c = new m(.03125); e.abs().gte(.1);) e = e.times(c), p += 5;
			for (r = Math.log(l(2, p)) / Math.LN10 * 2 + 5 | 0, u += r, n = a = o = new m(d), m.precision = u;;) {
				if (a = D(a.times(e), u), n = n.times(++f), c = o.plus(b(a, n, u)), y(c.d).slice(0, u) === y(o.d).slice(0, u)) {
					for (; p--;) o = D(o.times(o), u);
					return m.precision = h, t == null ? (i = !0, D(o, h)) : o;
				}
				o = c;
			}
		}
		function S(e) {
			for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
			return t;
		}
		function C(e, t, n) {
			if (t > e.LN10.sd()) throw i = !0, n && (e.precision = n), Error(a + "LN10 precision limit exceeded");
			return D(new e(e.LN10), t);
		}
		function w(e) {
			for (var t = ""; e--;) t += "0";
			return t;
		}
		function T(e, t) {
			var n, r, o, s, c, l, u, f, p, m = 1, h = 10, g = e, _ = g.d, v = g.constructor, x = v.precision;
			if (g.s < 1) throw Error(a + (g.s ? "NaN" : "-Infinity"));
			if (g.eq(d)) return new v(0);
			if (t == null ? (i = !1, f = x) : f = t, g.eq(10)) return t ?? (i = !0), C(v, f);
			if (f += h, v.precision = f, n = y(_), r = n.charAt(0), s = S(g), Math.abs(s) < 0x5543df729c000) {
				for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) g = g.times(e), n = y(g.d), r = n.charAt(0), m++;
				s = S(g), r > 1 ? (g = new v("0." + n), s++) : g = new v(r + "." + n.slice(1));
			} else return u = C(v, f + 2, x).times(s + ""), g = T(new v(r + "." + n.slice(1)), f - h).plus(u), v.precision = x, t == null ? (i = !0, D(g, x)) : g;
			for (l = c = g = b(g.minus(d), g.plus(d), f), p = D(g.times(g), f), o = 3;;) {
				if (c = D(c.times(p), f), u = l.plus(b(c, new v(o), f)), y(u.d).slice(0, f) === y(l.d).slice(0, f)) return l = l.times(2), s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ""))), l = b(l, new v(m), f), v.precision = x, t == null ? (i = !0, D(l, x)) : l;
				l = u, o += 2;
			}
		}
		function E(e, t) {
			var n, r, a;
			for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48;) ++r;
			for (a = t.length; t.charCodeAt(a - 1) === 48;) --a;
			if (t = t.slice(r, a), t) {
				if (a -= r, n = n - r - 1, e.e = c(n / p), e.d = [], r = (n + 1) % p, n < 0 && (r += p), r < a) {
					for (r && e.d.push(+t.slice(0, r)), a -= p; r < a;) e.d.push(+t.slice(r, r += p));
					t = t.slice(r), r = p - t.length;
				} else r -= a;
				for (; r--;) t += "0";
				if (e.d.push(+t), i && (e.e > h || e.e < -h)) throw Error(s + n);
			} else e.s = 0, e.e = 0, e.d = [0];
			return e;
		}
		function D(e, t, n) {
			var r, a, o, u, d, m, g, _, v = e.d;
			for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
			if (r = t - u, r < 0) r += p, a = t, g = v[_ = 0];
			else {
				if (_ = Math.ceil((r + 1) / p), o = v.length, _ >= o) return e;
				for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
				r %= p, a = r - p + u;
			}
			if (n !== void 0 && (o = l(10, u - a - 1), d = g / o % 10 | 0, m = t < 0 || v[_ + 1] !== void 0 || g % o, m = n < 4 ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (n == 4 || m || n == 6 && (r > 0 ? a > 0 ? g / l(10, u - a) : 0 : v[_ - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !v[0]) return m ? (o = S(e), v.length = 1, t = t - o - 1, v[0] = l(10, (p - t % p) % p), e.e = c(-t / p) || 0) : (v.length = 1, v[0] = e.e = e.s = 0), e;
			if (r == 0 ? (v.length = _, o = 1, _--) : (v.length = _ + 1, o = l(10, p - r), v[_] = a > 0 ? (g / l(10, u - a) % l(10, a) | 0) * o : 0), m) for (;;) if (_ == 0) {
				(v[0] += o) == f && (v[0] = 1, ++e.e);
				break;
			} else {
				if (v[_] += o, v[_] != f) break;
				v[_--] = 0, o = 1;
			}
			for (r = v.length; v[--r] === 0;) v.pop();
			if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
			return e;
		}
		function O(e, t) {
			var n, r, a, o, s, c, l, u, d, m, h = e.constructor, g = h.precision;
			if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new h(e), i ? D(t, g) : t;
			if (l = e.d, m = t.d, r = t.e, u = e.e, l = l.slice(), s = u - r, s) {
				for (d = s < 0, d ? (n = l, s = -s, c = m.length) : (n = m, r = u, c = l.length), a = Math.max(Math.ceil(g / p), c) + 2, s > a && (s = a, n.length = 1), n.reverse(), a = s; a--;) n.push(0);
				n.reverse();
			} else {
				for (a = l.length, c = m.length, d = a < c, d && (c = a), a = 0; a < c; a++) if (l[a] != m[a]) {
					d = l[a] < m[a];
					break;
				}
				s = 0;
			}
			for (d && (n = l, l = m, m = n, t.s = -t.s), c = l.length, a = m.length - c; a > 0; --a) l[c++] = 0;
			for (a = m.length; a > s;) {
				if (l[--a] < m[a]) {
					for (o = a; o && l[--o] === 0;) l[o] = f - 1;
					--l[o], l[a] += f;
				}
				l[a] -= m[a];
			}
			for (; l[--c] === 0;) l.pop();
			for (; l[0] === 0; l.shift()) --r;
			return l[0] ? (t.d = l, t.e = r, i ? D(t, g) : t) : new h(0);
		}
		function k(e, t, n) {
			var r, i = S(e), a = y(e.d), o = a.length;
			return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + w(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + w(-i - 1) + a, n && (r = n - o) > 0 && (a += w(r))) : i >= o ? (a += w(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + w(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += w(r))), e.s < 0 ? "-" + a : a;
		}
		function A(e, t) {
			if (e.length > t) return e.length = t, !0;
		}
		function j(e) {
			var t, n, r;
			function i(e) {
				var t = this;
				if (!(t instanceof i)) return new i(e);
				if (t.constructor = i, e instanceof i) t.s = e.s, t.e = e.e, t.d = (e = e.d) ? e.slice() : e;
				else {
					if (typeof e == "number") {
						if (e * 0 != 0) throw Error(o + e);
						if (e > 0) t.s = 1;
						else if (e < 0) e = -e, t.s = -1;
						else {
							t.s = 0, t.e = 0, t.d = [0];
							return;
						}
						if (e === ~~e && e < 1e7) {
							t.e = 0, t.d = [e];
							return;
						}
						return E(t, e.toString());
					}
					if (typeof e != "string") throw Error(o + e);
					if (e.charCodeAt(0) === 45 ? (e = e.slice(1), t.s = -1) : t.s = 1, u.test(e)) E(t, e);
					else throw Error(o + e);
				}
			}
			if (i.prototype = g, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = j, i.config = i.set = M, e === void 0 && (e = {}), e) for (r = [
				"precision",
				"rounding",
				"toExpNeg",
				"toExpPos",
				"LN10"
			], t = 0; t < r.length;) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
			return i.config(e), i;
		}
		function M(e) {
			if (!e || typeof e != "object") throw Error(a + "Object expected");
			var t, r, i, s = [
				"precision",
				1,
				n,
				"rounding",
				0,
				8,
				"toExpNeg",
				-1 / 0,
				0,
				"toExpPos",
				0,
				1 / 0
			];
			for (t = 0; t < s.length; t += 3) if ((i = e[r = s[t]]) !== void 0) {
				if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
				else throw Error(o + r + ": " + i);
			}
			if ((i = e[r = "LN10"]) !== void 0) {
				if (i == Math.LN10) this[r] = new this(i);
				else throw Error(o + r + ": " + i);
			}
			return this;
		}
		r = j(r), r.default = r.Decimal = r, d = new r(1), typeof define == "function" && define.amd ? define(function() {
			return r;
		}) : t !== void 0 && t.exports ? t.exports = r : (e ||= typeof self < "u" && self && self.self == self ? self : Function("return this")(), e.Decimal = r);
	})(n);
})))());
function zg(e) {
	return e === 0 ? 1 : Math.floor(new q.default(e).abs().log(10).toNumber()) + 1;
}
function Bg(e, t, n) {
	for (var r = new q.default(e), i = 0, a = []; r.lt(t) && i < 1e5;) {
		a.push(r.toNumber());
		var o = r.add(n);
		if (!o.gt(r)) break;
		r = o, i++;
	}
	return a;
}
// node_modules/recharts/es6/util/scale/getNiceTickValues.js
function Vg(e, t) {
	return Kg(e) || Gg(e, t) || Ug(e, t) || Hg();
}
function Hg() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ug(e, t) {
	if (e) {
		if (typeof e == "string") return Wg(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wg(e, t) : void 0;
	}
}
function Wg(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Gg(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Kg(e) {
	if (Array.isArray(e)) return e;
}
var qg = (e) => {
	var t = Vg(e, 2), n = t[0], r = t[1], i = n, a = r;
	return n > r && (i = r, a = n), [i, a];
}, Jg = (e, t, n) => {
	if (e.lte(0)) return new q.default(0);
	var r = zg(e.toNumber()), i = new q.default(10).pow(r), a = e.div(i), o = r === 1 ? .1 : .05, s = new q.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
	return t ? new q.default(s.toNumber()) : new q.default(Math.ceil(s.toNumber()));
}, Yg = (e, t, n) => {
	if (e.lte(0)) return new q.default(0);
	var r = [
		1,
		2,
		2.5,
		5
	], i = e.toNumber(), a = Math.floor(new q.default(i).abs().log(10).toNumber()), o = new q.default(10).pow(a), s = e.div(o).toNumber(), c = r.findIndex((e) => e >= s - 1e-10);
	if (c === -1 && (o = o.mul(10), c = 0), c += n, c >= r.length) {
		var l = Math.floor(c / r.length);
		c %= r.length, o = o.mul(new q.default(10).pow(l));
	}
	var u = r[c] ?? 1, d = new q.default(u).mul(o);
	return t ? d : new q.default(Math.ceil(d.toNumber()));
}, Xg = (e, t, n) => {
	var r = new q.default(1), i = new q.default(e);
	if (!i.isint() && n) {
		var a = Math.abs(e);
		a < 1 ? (r = new q.default(10).pow(zg(e) - 1), i = new q.default(Math.floor(i.div(r).toNumber())).mul(r)) : a > 1 && (i = new q.default(Math.floor(e)));
	} else e === 0 ? i = new q.default(Math.floor((t - 1) / 2)) : n || (i = new q.default(Math.floor(e)));
	for (var o = Math.floor((t - 1) / 2), s = [], c = 0; c < t; c++) s.push(i.add(new q.default(c - o).mul(r)).toNumber());
	return s;
}, Zg = function(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Jg;
	if (!Number.isFinite((t - e) / (n - 1))) return {
		step: new q.default(0),
		tickMin: new q.default(0),
		tickMax: new q.default(0)
	};
	var o = e < 0 && t > 0 ? Math.max(n, 3) : n, s = a(new q.default(t).sub(e).div(o - 1), r, i), c;
	e <= 0 && t >= 0 ? c = new q.default(0) : (c = new q.default(e).add(t).div(2), c = c.sub(new q.default(c).mod(s)));
	var l = Math.ceil(c.sub(e).div(s).toNumber()), u = Math.ceil(new q.default(t).sub(c).div(s).toNumber()), d = l + u + 1;
	return d > o ? Zg(e, t, o, r, i + 1, a) : (d < o && (u = t > 0 ? u + (o - d) : u, l = t > 0 ? l : l + (o - d)), {
		step: s,
		tickMin: c.sub(new q.default(l).mul(s)),
		tickMax: c.add(new q.default(u).mul(s))
	});
}, Qg = function(e) {
	var t = Vg(e, 2), n = t[0], r = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", s = Math.max(i, 2), c = Vg(qg([n, r]), 2), l = c[0], u = c[1];
	if (l === -Infinity || u === Infinity) {
		var d = u === Infinity ? [l, ...Array(s - 1).fill(Infinity)] : [...Array(s - 1).fill(-Infinity), u];
		return n > r ? d.reverse() : d;
	}
	if (l === u) return Xg(l, i, a);
	var f = Zg(l, u, s, a, 0, o === "snap125" ? Yg : Jg), p = f.step, m = f.tickMin, h = f.tickMax, g = Bg(m, h.add(new q.default(.1).mul(p)), p);
	return n > r ? g.reverse() : g;
}, $g = function(e, t) {
	var n = Vg(e, 2), r = n[0], i = n[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", s = Vg(qg([r, i]), 2), c = s[0], l = s[1];
	if (c === -Infinity || l === Infinity) return [r, i];
	if (c === l) return [c];
	var u = o === "snap125" ? Yg : Jg, d = Math.max(t, 2), f = u(new q.default(l).sub(c).div(d - 1), a, 0), p = [...Bg(new q.default(c), new q.default(l), f), l];
	if (a === !1) {
		p = p.map((e) => Math.round(e));
		var m = p.length - 1;
		m > 0 && p[m] === p[m - 1] && (p = p.slice(0, m));
	}
	return r > i ? p.reverse() : p;
}, e_ = (e) => e.rootProps.maxBarSize, t_ = (e) => e.rootProps.barGap, n_ = (e) => e.rootProps.barCategoryGap, r_ = (e) => e.rootProps.barSize, i_ = (e) => e.rootProps.stackOffset, a_ = (e) => e.rootProps.reverseStackOrder, o_ = (e) => e.options.chartName, s_ = (e) => e.rootProps.syncId, c_ = (e) => e.rootProps.syncMethod, l_ = (e) => e.options.eventEmitter, u_ = (e) => e.rootProps.baseValue, J = {
	grid: -100,
	barBackground: -50,
	area: 100,
	cursorRectangle: 200,
	bar: 300,
	line: 400,
	axis: 500,
	scatter: 600,
	activeBar: 1e3,
	cursorLine: 1100,
	activeDot: 1200,
	labelBackground: 1900,
	label: 2e3
}, d_ = {
	allowDecimals: !1,
	allowDuplicatedCategory: !0,
	allowDataOverflow: !1,
	angle: 0,
	angleAxisId: 0,
	axisLine: !0,
	axisLineType: "polygon",
	cx: 0,
	cy: 0,
	hide: !1,
	includeHidden: !1,
	label: !1,
	niceTicks: "auto",
	orientation: "outer",
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickLine: !0,
	tickSize: 8,
	type: "auto",
	zIndex: J.axis
}, f_ = {
	allowDataOverflow: !1,
	allowDecimals: !1,
	allowDuplicatedCategory: !0,
	angle: 0,
	axisLine: !0,
	includeHidden: !1,
	hide: !1,
	niceTicks: "auto",
	label: !1,
	orientation: "right",
	radiusAxisId: 0,
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickCount: 5,
	tickLine: !0,
	type: "auto",
	zIndex: J.axis
}, p_ = (e, t) => {
	if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
};
// node_modules/recharts/es6/util/getAxisTypeBasedOnLayout.js
function m_(e, t, n) {
	if (n !== "auto") return n;
	if (e != null) return cu(e, t) ? "category" : "number";
}
// node_modules/recharts/es6/state/selectors/polarAxisSelectors.js
function h_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function g_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? h_(Object(n), !0).forEach(function(t) {
			__(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function __(e, t, n) {
	return (t = v_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function v_(e) {
	var t = y_(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function y_(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var b_ = {
	allowDataOverflow: d_.allowDataOverflow,
	allowDecimals: d_.allowDecimals,
	allowDuplicatedCategory: !1,
	dataKey: void 0,
	domain: void 0,
	id: d_.angleAxisId,
	includeHidden: !1,
	name: void 0,
	reversed: d_.reversed,
	scale: d_.scale,
	tick: d_.tick,
	tickCount: void 0,
	ticks: void 0,
	type: d_.type,
	unit: void 0,
	niceTicks: "auto"
}, x_ = {
	allowDataOverflow: f_.allowDataOverflow,
	allowDecimals: f_.allowDecimals,
	allowDuplicatedCategory: f_.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: f_.radiusAxisId,
	includeHidden: f_.includeHidden,
	name: void 0,
	reversed: f_.reversed,
	scale: f_.scale,
	tick: f_.tick,
	tickCount: f_.tickCount,
	ticks: void 0,
	type: f_.type,
	unit: void 0,
	niceTicks: "auto"
}, S_ = H([(e, t) => {
	if (t != null) return e.polarAxis.angleAxis[t];
}, Bd], (e, t) => {
	if (e != null) return e;
	var n = m_(t, "angleAxis", b_.type) ?? "category";
	return g_(g_({}, b_), {}, { type: n });
}), C_ = H([(e, t) => e.polarAxis.radiusAxis[t], Bd], (e, t) => {
	if (e != null) return e;
	var n = m_(t, "radiusAxis", x_.type) ?? "category";
	return g_(g_({}, x_), {}, { type: n });
}), w_ = (e) => e.polarOptions, T_ = H([
	ku,
	Au,
	Ku
], Hh), E_ = H([w_, T_], (e, t) => {
	if (e != null) return yt(e.innerRadius, t, 0);
}), D_ = H([w_, T_], (e, t) => {
	if (e != null) return yt(e.outerRadius, t, t * .8);
}), O_ = H([w_], (e) => e == null ? [0, 0] : [e.startAngle, e.endAngle]), k_ = H([S_, O_], p_), A_ = H([
	T_,
	E_,
	D_
], (e, t, n) => {
	if (e != null && t != null && n != null) return [t, n];
}), j_ = H([C_, A_], p_), M_ = H([
	K,
	w_,
	E_,
	D_,
	ku,
	Au
], (e, t, n, r, i, a) => {
	if (!(e !== "centric" && e !== "radial" || t == null || n == null || r == null)) {
		var o = t.cx, s = t.cy, c = t.startAngle, l = t.endAngle;
		return {
			cx: yt(o, i, i / 2),
			cy: yt(s, a, a / 2),
			innerRadius: n,
			outerRadius: r,
			startAngle: c,
			endAngle: l,
			clockWise: !1
		};
	}
}), Y = (e, t) => t, N_ = (e, t, n) => n;
// node_modules/recharts/es6/util/stacks/getStackSeriesIdentifier.js
function P_(e) {
	return e?.id;
}
// node_modules/recharts/es6/state/selectors/combiners/combineDisplayedStackedData.js
function F_(e, t, n) {
	var r = t.chartData, i = r === void 0 ? [] : r, a = n.allowDuplicatedCategory, o = n.dataKey, s = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		var t = e.data ?? i;
		if (t != null && t.length !== 0) {
			var n = P_(e);
			t.forEach((t, r) => {
				var i = o == null || a ? r : String(G(t, o, null)), c = G(t, e.dataKey, 0), l = s.get(i) ?? {};
				Object.assign(l, { [n]: c }), s.set(i, l);
			});
		}
	}), Array.from(s.values());
}
// node_modules/recharts/es6/state/types/StackedGraphicalItem.js
function I_(e) {
	return "stackId" in e && e.stackId != null && e.dataKey != null;
}
function L_(e) {
	return "type" in e && (e.type === "area" || e.type === "bar" || e.type === "radialBar") && I_(e);
}
// node_modules/recharts/es6/state/selectors/numberDomainEqualityCheck.js
var R_ = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
// node_modules/recharts/es6/state/selectors/arrayEqualityCheck.js
function z_(e, t) {
	return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function B_(e, t) {
	if (e.length === t.length) {
		for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}
	return !1;
}
// node_modules/recharts/es6/state/selectors/selectTooltipAxisType.js
var V_ = (e) => {
	var t = K(e);
	return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
};
// node_modules/recharts/es6/state/cartesianAxisSlice.js
function H_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U_(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? H_(Object(n), !0).forEach(function(t) {
			W_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function W_(e, t, n) {
	return (t = G_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function G_(e) {
	var t = K_(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function K_(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var q_ = Xc({
	name: "cartesianAxis",
	initialState: {
		xAxis: {},
		yAxis: {},
		zAxis: {}
	},
	reducers: {
		addXAxis: {
			reducer(e, t) {
				e.xAxis[t.payload.id] = U(t.payload);
			},
			prepare: Fc()
		},
		replaceXAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.xAxis[r.id] !== void 0 && (r.id !== i.id && delete e.xAxis[r.id], e.xAxis[i.id] = U(i));
			},
			prepare: Fc()
		},
		removeXAxis: {
			reducer(e, t) {
				delete e.xAxis[t.payload.id];
			},
			prepare: Fc()
		},
		addYAxis: {
			reducer(e, t) {
				e.yAxis[t.payload.id] = U(t.payload);
			},
			prepare: Fc()
		},
		replaceYAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.yAxis[r.id] !== void 0 && (r.id !== i.id && delete e.yAxis[r.id], e.yAxis[i.id] = U(i));
			},
			prepare: Fc()
		},
		removeYAxis: {
			reducer(e, t) {
				delete e.yAxis[t.payload.id];
			},
			prepare: Fc()
		},
		addZAxis: {
			reducer(e, t) {
				e.zAxis[t.payload.id] = U(t.payload);
			},
			prepare: Fc()
		},
		replaceZAxis: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next;
				e.zAxis[r.id] !== void 0 && (r.id !== i.id && delete e.zAxis[r.id], e.zAxis[i.id] = U(i));
			},
			prepare: Fc()
		},
		removeZAxis: {
			reducer(e, t) {
				delete e.zAxis[t.payload.id];
			},
			prepare: Fc()
		},
		updateYAxisWidth(e, t) {
			var n = t.payload, r = n.id, i = n.width, a = e.yAxis[r];
			if (a) {
				var o = a.widthHistory || [];
				if (o.length === 3 && o[0] === o[2] && i === o[1] && i !== a.width && Math.abs(i - (o[0] ?? 0)) <= 1) return;
				var s = [...o, i].slice(-3);
				e.yAxis[r] = U_(U_({}, a), {}, {
					width: i,
					widthHistory: s
				});
			}
		},
		updateXAxisHeight(e, t) {
			var n = t.payload, r = n.id, i = n.height, a = e.xAxis[r];
			if (a) {
				var o = a.heightHistory || [];
				if (o.length === 3 && o[0] === o[2] && i === o[1] && i !== a.height && Math.abs(i - (o[0] ?? 0)) <= 1) return;
				var s = [...o, i].slice(-3);
				e.xAxis[r] = U_(U_({}, a), {}, {
					height: i,
					heightHistory: s
				});
			}
		}
	}
}), J_ = q_.actions, Y_ = J_.addXAxis, X_ = J_.replaceXAxis, Z_ = J_.removeXAxis, Q_ = J_.addYAxis, $_ = J_.replaceYAxis, ev = J_.removeYAxis;
J_.addZAxis, J_.replaceZAxis, J_.removeZAxis;
var tv = J_.updateYAxisWidth, nv = J_.updateXAxisHeight, rv = q_.reducer;
// node_modules/recharts/es6/state/selectors/graphicalItemSelectors.js
function iv(e, t) {
	return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.xAxisId ?? 0;
}
function av(e, t) {
	return e.graphicalItems.cartesianItems.find((e) => e.id === t)?.yAxisId ?? 0;
}
var ov = H([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]);
// node_modules/recharts/es6/state/selectors/effectiveDataKeySelectors.js
function sv(e, t) {
	return e === "horizontal" && t === "yAxis" || e === "vertical" && t === "xAxis" || e === "centric" && t === "radiusAxis" || e === "radial" && t === "angleAxis";
}
function cv(e, t, n, r) {
	return sv(n, r) ? e ?? t : t ?? e;
}
function lv(e, t, n) {
	var r = n.cartesianAxis, i = n.polarAxis;
	switch (t) {
		case "horizontal": return e.yAxisId == null ? void 0 : r.yAxis[e.yAxisId]?.dataKey;
		case "vertical": return e.xAxisId == null ? void 0 : r.xAxis[e.xAxisId]?.dataKey;
		case "centric": return e.radiusAxisId == null ? void 0 : i.radiusAxis[e.radiusAxisId]?.dataKey;
		case "radial": return e.angleAxisId == null ? void 0 : i.angleAxis[e.angleAxisId]?.dataKey;
		default: return;
	}
}
function uv(e, t) {
	return t.dataKey ?? lv(t, K(e), e);
}
var dv = H([
	ov,
	K,
	(e) => e.cartesianAxis,
	(e) => e.polarAxis
], (e, t, n, r) => e.map((e) => e.dataKey ?? lv(e, t, {
	cartesianAxis: n,
	polarAxis: r
})).filter(Ct)), fv = (e) => e.tooltip.settings.axisId;
// node_modules/recharts/es6/util/scale/RechartsScale.js
function pv(e) {
	if (e != null) {
		var t = e.ticks, n = e.bandwidth, r = e.range(), i = [Math.min(...r), Math.max(...r)];
		return {
			domain: () => e.domain(),
			range: function(e) {
				function t() {
					return e.apply(this, arguments);
				}
				return t.toString = function() {
					return e.toString();
				}, t;
			}(() => i),
			rangeMin: () => i[0],
			rangeMax: () => i[1],
			isInRange(e) {
				var t = i[0], n = i[1];
				return t <= n ? e >= t && e <= n : e >= n && e <= t;
			},
			bandwidth: n ? () => n.call(e) : void 0,
			ticks: t ? (n) => t.call(e, n) : void 0,
			map: (t, n) => {
				var r = e(t);
				if (r != null) {
					if (e.bandwidth && n != null && n.position) {
						var i = e.bandwidth();
						switch (n.position) {
							case "middle":
								r += i / 2;
								break;
							case "end": r += i;
						}
					}
					return r;
				}
			}
		};
	}
}
// node_modules/recharts/es6/util/zoom/viewport.js
function mv(e, t) {
	return yv(e) || vv(e, t) || gv(e, t) || hv();
}
function hv() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function gv(e, t) {
	if (e) {
		if (typeof e == "string") return _v(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _v(e, t) : void 0;
	}
}
function _v(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function vv(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function yv(e) {
	if (Array.isArray(e)) return e;
}
var bv = {
	startRatio: 0,
	endRatio: 1
}, xv = 1e-4, Sv = 1e-9;
function Cv(e) {
	return Number.isNaN(e) || e < 0 ? 0 : e > 1 ? 1 : e;
}
function wv(e) {
	return e.endRatio - e.startRatio;
}
function Tv(e) {
	return e.startRatio <= Sv && e.endRatio >= 1 - Sv;
}
function Ev(e, t) {
	return Math.abs(e.startRatio - t.startRatio) < 1e-6 && Math.abs(e.endRatio - t.endRatio) < 1e-6;
}
function Dv(e) {
	var t = Cv(e.startRatio), n = Cv(e.endRatio);
	if (n < t) {
		var r = [n, t];
		t = r[0], n = r[1];
	}
	if (n - t < 1e-4) {
		var i = (t + n) / 2;
		t = Math.max(0, i - xv / 2), n = Math.min(1, t + xv), t = Math.max(0, n - xv);
	}
	return {
		startRatio: t,
		endRatio: n
	};
}
function Ov(e, t) {
	var n = wv(t);
	if (Tv(t) || n <= 0) return [e[0], e[1]];
	var r = mv(e, 2), i = r[0], a = (r[1] - i) / n, o = i - t.startRatio * a;
	return [o, o + a];
}
// node_modules/recharts/es6/state/selectors/combiners/combineCheckedDomain.js
var kv = (e, t) => {
	if (t != null) switch (e) {
		case "linear":
			if (!Og(t)) {
				for (var n, r, i = 0; i < t.length; i++) {
					var a = t[i];
					W(a) && ((n === void 0 || a < n) && (n = a), (r === void 0 || a > r) && (r = a));
				}
				return n !== void 0 && r !== void 0 ? [n, r] : void 0;
			}
			return t;
		default: return t;
	}
};
// node_modules/d3-scale/src/init.js
function Av(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function jv(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
// node_modules/d3-scale/src/ordinal.js
var Mv = Symbol("implicit");
function Nv() {
	var e = new _e(), t = [], n = [], r = Mv;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Mv) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new _e();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Nv(t, n).unknown(r);
	}, Av.apply(i, arguments), i;
}
// node_modules/d3-scale/src/band.js
function Pv() {
	var e = Nv().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = Me(e).map(function(e) {
			return f + a * e;
		});
		return n(d ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? ([r, i] = e, r = +r, i = +i, d()) : [r, i];
	}, e.rangeRound = function(e) {
		return [r, i] = e, r = +r, i = +i, s = !0, d();
	}, e.bandwidth = function() {
		return o;
	}, e.step = function() {
		return a;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.min(1, l = +e), d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.min(1, e), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = +e, d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.copy = function() {
		return Pv(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, Av.apply(d(), arguments);
}
function Fv(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Fv(t());
	}, e;
}
function Iv() {
	return Fv(Pv.apply(null, arguments).paddingInner(1));
}
// node_modules/d3-color/src/define.js
function Lv(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Rv(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
// node_modules/d3-color/src/color.js
function zv() {}
var Bv = .7, Vv = 1 / Bv, Hv = "\\s*([+-]?\\d+)\\s*", Uv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gv = /^#([0-9a-f]{3,8})$/, Kv = RegExp(`^rgb\\(${Hv},${Hv},${Hv}\\)$`), qv = RegExp(`^rgb\\(${Wv},${Wv},${Wv}\\)$`), Jv = RegExp(`^rgba\\(${Hv},${Hv},${Hv},${Uv}\\)$`), Yv = RegExp(`^rgba\\(${Wv},${Wv},${Wv},${Uv}\\)$`), Xv = RegExp(`^hsl\\(${Uv},${Wv},${Wv}\\)$`), Zv = RegExp(`^hsla\\(${Uv},${Wv},${Wv},${Uv}\\)$`), Qv = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Lv(zv, ry, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: $v,
	formatHex: $v,
	formatHex8: ey,
	formatHsl: ty,
	formatRgb: ny,
	toString: ny
});
function $v() {
	return this.rgb().formatHex();
}
function ey() {
	return this.rgb().formatHex8();
}
function ty() {
	return gy(this).formatHsl();
}
function ny() {
	return this.rgb().formatRgb();
}
function ry(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Gv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? iy(t) : n === 3 ? new cy(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ay(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ay(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Kv.exec(e)) ? new cy(t[1], t[2], t[3], 1) : (t = qv.exec(e)) ? new cy(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Jv.exec(e)) ? ay(t[1], t[2], t[3], t[4]) : (t = Yv.exec(e)) ? ay(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xv.exec(e)) ? hy(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zv.exec(e)) ? hy(t[1], t[2] / 100, t[3] / 100, t[4]) : Qv.hasOwnProperty(e) ? iy(Qv[e]) : e === "transparent" ? new cy(NaN, NaN, NaN, 0) : null;
}
function iy(e) {
	return new cy(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ay(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new cy(e, t, n, r);
}
function oy(e) {
	return e instanceof zv || (e = ry(e)), e ? (e = e.rgb(), new cy(e.r, e.g, e.b, e.opacity)) : new cy();
}
function sy(e, t, n, r) {
	return arguments.length === 1 ? oy(e) : new cy(e, t, n, r ?? 1);
}
function cy(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Lv(cy, sy, Rv(zv, {
	brighter(e) {
		return e = e == null ? Vv : Vv ** +e, new cy(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Bv : Bv ** +e, new cy(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new cy(py(this.r), py(this.g), py(this.b), fy(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: ly,
	formatHex: ly,
	formatHex8: uy,
	formatRgb: dy,
	toString: dy
}));
function ly() {
	return `#${my(this.r)}${my(this.g)}${my(this.b)}`;
}
function uy() {
	return `#${my(this.r)}${my(this.g)}${my(this.b)}${my((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function dy() {
	let e = fy(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${py(this.r)}, ${py(this.g)}, ${py(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function fy(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function py(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function my(e) {
	return e = py(e), (e < 16 ? "0" : "") + e.toString(16);
}
function hy(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new vy(e, t, n, r);
}
function gy(e) {
	if (e instanceof vy) return new vy(e.h, e.s, e.l, e.opacity);
	if (e instanceof zv || (e = ry(e)), !e) return new vy();
	if (e instanceof vy) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new vy(o, s, c, e.opacity);
}
function _y(e, t, n, r) {
	return arguments.length === 1 ? gy(e) : new vy(e, t, n, r ?? 1);
}
function vy(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Lv(vy, _y, Rv(zv, {
	brighter(e) {
		return e = e == null ? Vv : Vv ** +e, new vy(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Bv : Bv ** +e, new vy(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new cy(xy(e >= 240 ? e - 240 : e + 120, i, r), xy(e, i, r), xy(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new vy(yy(this.h), by(this.s), by(this.l), fy(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = fy(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${yy(this.h)}, ${by(this.s) * 100}%, ${by(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function yy(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function by(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function xy(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
// node_modules/d3-interpolate/src/constant.js
var Sy = (e) => () => e;
// node_modules/d3-interpolate/src/color.js
function Cy(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function wy(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Ty(e) {
	return (e = +e) == 1 ? Ey : function(t, n) {
		return n - t ? wy(t, n, e) : Sy(isNaN(t) ? n : t);
	};
}
function Ey(e, t) {
	var n = t - e;
	return n ? Cy(e, n) : Sy(isNaN(e) ? t : e);
}
// node_modules/d3-interpolate/src/rgb.js
var Dy = (function e(t) {
	var n = Ty(t);
	function r(e, t) {
		var r = n((e = sy(e)).r, (t = sy(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Ey(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
// node_modules/d3-interpolate/src/numberArray.js
function Oy(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function ky(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
// node_modules/d3-interpolate/src/array.js
function Ay(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = zy(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
// node_modules/d3-interpolate/src/date.js
function jy(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
// node_modules/d3-interpolate/src/number.js
function My(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
// node_modules/d3-interpolate/src/object.js
function Ny(e, t) {
	var n = {}, r = {}, i;
	for (i in typeof e == "object" && e || (e = {}), typeof t == "object" && t || (t = {}), t) i in e ? n[i] = zy(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
// node_modules/d3-interpolate/src/string.js
var Py = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fy = new RegExp(Py.source, "g");
function Iy(e) {
	return function() {
		return e;
	};
}
function Ly(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ry(e, t) {
	var n = Py.lastIndex = Fy.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Py.exec(e)) && (i = Fy.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: My(r, i)
	})), n = Fy.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ly(c[0].x) : Iy(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
// node_modules/d3-interpolate/src/value.js
function zy(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Sy(t) : (n === "number" ? My : n === "string" ? (r = ry(t)) ? (t = r, Dy) : Ry : t instanceof ry ? Dy : t instanceof Date ? jy : ky(t) ? Oy : Array.isArray(t) ? Ay : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ny : My)(e, t);
}
// node_modules/d3-interpolate/src/round.js
function By(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
// node_modules/d3-interpolate/src/piecewise.js
function Vy(e, t) {
	t === void 0 && (t = e, e = zy);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
// node_modules/d3-scale/src/constant.js
function Hy(e) {
	return function() {
		return e;
	};
}
// node_modules/d3-scale/src/number.js
function Uy(e) {
	return +e;
}
// node_modules/d3-scale/src/continuous.js
var Wy = [0, 1];
function Gy(e) {
	return e;
}
function Ky(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Hy(isNaN(t) ? NaN : .5);
}
function qy(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Jy(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Ky(i, r), a = n(o, a)) : (r = Ky(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Yy(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Ky(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = ge(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Xy(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Zy() {
	var e = Wy, t = Wy, n = zy, r, i, a, o = Gy, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== Gy && (o = qy(e[0], e[n - 1])), s = n > 2 ? Yy : Jy, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), My))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Uy), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = By, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : Gy, u()) : o !== Gy;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Qy() {
	return Zy()(Gy, Gy);
}
// node_modules/d3-format/src/formatDecimal.js
function $y(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function eb(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
// node_modules/d3-format/src/exponent.js
function tb(e) {
	return e = eb(Math.abs(e)), e ? e[1] : NaN;
}
// node_modules/d3-format/src/formatGroup.js
function nb(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
// node_modules/d3-format/src/formatNumerals.js
function rb(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
// node_modules/d3-format/src/formatSpecifier.js
var ib = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ab(e) {
	if (!(t = ib.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new ob({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
ab.prototype = ob.prototype;
function ob(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ob.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
// node_modules/d3-format/src/formatTrim.js
function sb(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
// node_modules/d3-format/src/formatPrefixAuto.js
var cb;
function lb(e, t) {
	var n = eb(e, t);
	if (!n) return cb = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (cb = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + eb(e, Math.max(0, t + a - 1))[0];
}
// node_modules/d3-format/src/formatRounded.js
function ub(e, t) {
	var n = eb(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
// node_modules/d3-format/src/formatTypes.js
var db = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: $y,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ub(e * 100, t),
	r: ub,
	s: lb,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
// node_modules/d3-format/src/identity.js
function fb(e) {
	return e;
}
// node_modules/d3-format/src/locale.js
var pb = Array.prototype.map, mb = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function hb(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? fb : nb(pb.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? fb : rb(pb.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = ab(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : db[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = db[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = sb(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && cb !== void 0 ? mb[8 + cb / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < h ? Array(h - T + 1).join(u) : "";
			switch (g && m && (e = t(E + e, E.length ? h - r.length : Infinity), E = ""), d) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default: e = E + n + e + r;
			}
			return a(e);
		}
		return w.toString = function() {
			return e + "";
		}, w;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(tb(t) / 3))) * 3, r = 10 ** -n, i = l((e = ab(e), e.type = "f", e), { suffix: mb[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
// node_modules/d3-format/src/defaultLocale.js
var gb, _b, vb;
yb({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function yb(e) {
	return gb = hb(e), _b = gb.format, vb = gb.formatPrefix, gb;
}
// node_modules/d3-format/src/precisionFixed.js
function bb(e) {
	return Math.max(0, -tb(Math.abs(e)));
}
// node_modules/d3-format/src/precisionPrefix.js
function xb(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(tb(t) / 3))) * 3 - tb(Math.abs(e)));
}
// node_modules/d3-format/src/precisionRound.js
function Sb(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, tb(t) - tb(e)) + 1;
}
// node_modules/d3-scale/src/tickFormat.js
function Cb(e, t, n, r) {
	var i = De(e, t, n), a;
	switch (r = ab(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = xb(i, o)) && (r.precision = a), vb(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Sb(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = bb(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return _b(r);
}
// node_modules/d3-scale/src/linear.js
function wb(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Te(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Cb(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Ee(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Tb() {
	var e = Qy();
	return e.copy = function() {
		return Xy(e, Tb());
	}, Av.apply(e, arguments), wb(e);
}
// node_modules/d3-scale/src/identity.js
function Eb(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Uy), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Eb(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Uy) : [0, 1], wb(n);
}
// node_modules/d3-scale/src/nice.js
function Db(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
// node_modules/d3-scale/src/log.js
function Ob(e) {
	return Math.log(e);
}
function kb(e) {
	return Math.exp(e);
}
function Ab(e) {
	return -Math.log(-e);
}
function jb(e) {
	return -Math.exp(-e);
}
function Mb(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Nb(e) {
	return e === 10 ? Mb : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Pb(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Fb(e) {
	return (t, n) => -e(-t, n);
}
function Ib(e) {
	let t = e(Ob, kb), n = t.domain, r = 10, i, a;
	function o() {
		return i = Pb(r), a = Nb(r), n()[0] < 0 ? (i = Fb(i), a = Fb(a), e(Ab, jb)) : e(Ob, kb), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = Te(o, s, p));
		} else m = Te(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = ab(n)).precision == null && (n.trim = !0), n = _b(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Db(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Lb() {
	let e = Ib(Zy()).domain([1, 10]);
	return e.copy = () => Xy(e, Lb()).base(e.base()), Av.apply(e, arguments), e;
}
// node_modules/d3-scale/src/symlog.js
function Rb(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function zb(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Bb(e) {
	var t = 1, n = e(Rb(t), zb(t));
	return n.constant = function(n) {
		return arguments.length ? e(Rb(t = +n), zb(t)) : t;
	}, wb(n);
}
function Vb() {
	var e = Bb(Zy());
	return e.copy = function() {
		return Xy(e, Vb()).constant(e.constant());
	}, Av.apply(e, arguments);
}
// node_modules/d3-scale/src/pow.js
function Hb(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function Ub(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Wb(e) {
	return e < 0 ? -e * e : e * e;
}
function Gb(e) {
	var t = e(Gy, Gy), n = 1;
	function r() {
		return n === 1 ? e(Gy, Gy) : n === .5 ? e(Ub, Wb) : e(Hb(n), Hb(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, wb(t);
}
function Kb() {
	var e = Gb(Zy());
	return e.copy = function() {
		return Xy(e, Kb()).exponent(e.exponent());
	}, Av.apply(e, arguments), e;
}
function qb() {
	return Kb.apply(null, arguments).exponent(.5);
}
// node_modules/d3-scale/src/radial.js
function Jb(e) {
	return Math.sign(e) * e * e;
}
function Yb(e) {
	return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Xb() {
	var e = Qy(), t = [0, 1], n = !1, r;
	function i(t) {
		var i = Yb(e(t));
		return isNaN(i) ? r : n ? Math.round(i) : i;
	}
	return i.invert = function(t) {
		return e.invert(Jb(t));
	}, i.domain = function(t) {
		return arguments.length ? (e.domain(t), i) : e.domain();
	}, i.range = function(n) {
		return arguments.length ? (e.range((t = Array.from(n, Uy)).map(Jb)), i) : t.slice();
	}, i.rangeRound = function(e) {
		return i.range(e).round(!0);
	}, i.round = function(e) {
		return arguments.length ? (n = !!e, i) : n;
	}, i.clamp = function(t) {
		return arguments.length ? (e.clamp(t), i) : e.clamp();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Xb(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
	}, Av.apply(i, arguments), wb(i);
}
// node_modules/d3-scale/src/quantile.js
function Zb() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = je(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[ge(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(ue), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return Zb().domain(e).range(t).unknown(r);
	}, Av.apply(a, arguments);
}
// node_modules/d3-scale/src/quantize.js
function Qb() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[ge(r, e, 0, n)] : a;
	}
	function s() {
		var i = -1;
		for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
		return o;
	}
	return o.domain = function(n) {
		return arguments.length ? ([e, t] = n, e = +e, t = +t, s()) : [e, t];
	}, o.range = function(e) {
		return arguments.length ? (n = (i = Array.from(e)).length - 1, s()) : i.slice();
	}, o.invertExtent = function(a) {
		var o = i.indexOf(a);
		return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
	}, o.unknown = function(e) {
		return arguments.length && (a = e), o;
	}, o.thresholds = function() {
		return r.slice();
	}, o.copy = function() {
		return Qb().domain([e, t]).range(i).unknown(a);
	}, Av.apply(wb(o), arguments);
}
// node_modules/d3-scale/src/threshold.js
function $b() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[ge(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return $b().domain(e).range(t).unknown(n);
	}, Av.apply(i, arguments);
}
// node_modules/d3-time/src/interval.js
var ex = /* @__PURE__ */ new Date(), tx = /* @__PURE__ */ new Date();
function nx(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => nx((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) {
			if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
			else for (; --r >= 0;) for (; t(e, 1), !n(e););
		}
	}), n && (i.count = (t, r) => (ex.setTime(+t), tx.setTime(+r), e(ex), e(tx), Math.floor(n(ex, tx))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
// node_modules/d3-time/src/millisecond.js
var rx = nx(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
rx.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? nx((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : rx), rx.range;
// node_modules/d3-time/src/duration.js
var ix = 1e3, ax = ix * 60, ox = ax * 60, sx = ox * 24, cx = sx * 7, lx = sx * 30, ux = sx * 365, dx = nx((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * ix);
}, (e, t) => (t - e) / ix, (e) => e.getUTCSeconds());
dx.range;
// node_modules/d3-time/src/minute.js
var fx = nx((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * ix);
}, (e, t) => {
	e.setTime(+e + t * ax);
}, (e, t) => (t - e) / ax, (e) => e.getMinutes());
fx.range;
var px = nx((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * ax);
}, (e, t) => (t - e) / ax, (e) => e.getUTCMinutes());
px.range;
// node_modules/d3-time/src/hour.js
var mx = nx((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * ix - e.getMinutes() * ax);
}, (e, t) => {
	e.setTime(+e + t * ox);
}, (e, t) => (t - e) / ox, (e) => e.getHours());
mx.range;
var hx = nx((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * ox);
}, (e, t) => (t - e) / ox, (e) => e.getUTCHours());
hx.range;
// node_modules/d3-time/src/day.js
var gx = nx((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ax) / sx, (e) => e.getDate() - 1);
gx.range;
var _x = nx((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sx, (e) => e.getUTCDate() - 1);
_x.range;
var vx = nx((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sx, (e) => Math.floor(e / sx));
vx.range;
// node_modules/d3-time/src/week.js
function yx(e) {
	return nx((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ax) / cx);
}
var bx = yx(0), xx = yx(1), Sx = yx(2), Cx = yx(3), wx = yx(4), Tx = yx(5), Ex = yx(6);
bx.range, xx.range, Sx.range, Cx.range, wx.range, Tx.range, Ex.range;
function Dx(e) {
	return nx((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / cx);
}
var Ox = Dx(0), kx = Dx(1), Ax = Dx(2), jx = Dx(3), Mx = Dx(4), Nx = Dx(5), Px = Dx(6);
Ox.range, kx.range, Ax.range, jx.range, Mx.range, Nx.range, Px.range;
// node_modules/d3-time/src/month.js
var Fx = nx((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Fx.range;
var Ix = nx((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ix.range;
// node_modules/d3-time/src/year.js
var Lx = nx((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Lx.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : nx((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), Lx.range;
var Rx = nx((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Rx.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : nx((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), Rx.range;
// node_modules/d3-time/src/ticks.js
function zx(e, t, n, r, i, a) {
	let o = [
		[
			dx,
			1,
			ix
		],
		[
			dx,
			5,
			5 * ix
		],
		[
			dx,
			15,
			15 * ix
		],
		[
			dx,
			30,
			30 * ix
		],
		[
			a,
			1,
			ax
		],
		[
			a,
			5,
			5 * ax
		],
		[
			a,
			15,
			15 * ax
		],
		[
			a,
			30,
			30 * ax
		],
		[
			i,
			1,
			ox
		],
		[
			i,
			3,
			3 * ox
		],
		[
			i,
			6,
			6 * ox
		],
		[
			i,
			12,
			12 * ox
		],
		[
			r,
			1,
			sx
		],
		[
			r,
			2,
			2 * sx
		],
		[
			n,
			1,
			cx
		],
		[
			t,
			1,
			lx
		],
		[
			t,
			3,
			3 * lx
		],
		[
			e,
			1,
			ux
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = de(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(De(t / ux, n / ux, r));
		if (a === 0) return rx.every(Math.max(De(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [Bx, Vx] = zx(Rx, Ix, Ox, vx, hx, px), [Hx, Ux] = zx(Lx, Fx, bx, gx, mx, fx);
// node_modules/d3-time-format/src/locale.js
function Wx(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Gx(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Kx(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function qx(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = $x(i), u = eS(i), d = $x(a), f = eS(a), p = $x(o), m = eS(o), h = $x(s), g = eS(s), _ = $x(c), v = eS(c), y = {
		a: N,
		A: P,
		b: ee,
		B: F,
		c: null,
		d: xS,
		e: xS,
		f: ES,
		g: LS,
		G: zS,
		H: SS,
		I: CS,
		j: wS,
		L: TS,
		m: DS,
		M: OS,
		p: te,
		q: ne,
		Q: cC,
		s: lC,
		S: kS,
		u: AS,
		U: jS,
		V: NS,
		w: PS,
		W: FS,
		x: null,
		X: null,
		y: IS,
		Y: RS,
		Z: BS,
		"%": sC
	}, b = {
		a: re,
		A: ie,
		b: ae,
		B: oe,
		c: null,
		d: VS,
		e: VS,
		f: KS,
		g: rC,
		G: aC,
		H: HS,
		I: US,
		j: WS,
		L: GS,
		m: qS,
		M: JS,
		p: se,
		q: ce,
		Q: cC,
		s: lC,
		S: YS,
		u: XS,
		U: ZS,
		V: $S,
		w: eC,
		W: tC,
		x: null,
		X: null,
		y: nC,
		Y: iC,
		Z: oC,
		"%": sC
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: dS,
		e: dS,
		f: _S,
		g: sS,
		G: oS,
		H: pS,
		I: pS,
		j: fS,
		L: gS,
		m: uS,
		M: mS,
		p: T,
		q: lS,
		Q: yS,
		s: bS,
		S: hS,
		u: nS,
		U: rS,
		V: iS,
		w: tS,
		W: aS,
		x: j,
		X: M,
		y: sS,
		Y: oS,
		Z: cS,
		"%": vS
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = Jx[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = Kx(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Gx(Kx(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? kx.ceil(a) : kx(a), a = _x.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Wx(Kx(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? xx.ceil(a) : xx(a), a = gx.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? Gx(Kx(r.y, 0, 1)).getUTCDay() : Wx(Kx(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Gx(r)) : Wx(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in Jx ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function T(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function E(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function D(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, n, r) {
		return w(e, t, n, r);
	}
	function j(e, t, r) {
		return w(e, n, t, r);
	}
	function M(e, t, n) {
		return w(e, r, t, n);
	}
	function N(e) {
		return o[e.getDay()];
	}
	function P(e) {
		return a[e.getDay()];
	}
	function ee(e) {
		return c[e.getMonth()];
	}
	function F(e) {
		return s[e.getMonth()];
	}
	function te(e) {
		return i[+(e.getHours() >= 12)];
	}
	function ne(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function re(e) {
		return o[e.getUTCDay()];
	}
	function ie(e) {
		return a[e.getUTCDay()];
	}
	function ae(e) {
		return c[e.getUTCMonth()];
	}
	function oe(e) {
		return s[e.getUTCMonth()];
	}
	function se(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function ce(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = S(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = C(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = S(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = C(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var Jx = {
	"-": "",
	_: " ",
	0: "0"
}, Yx = /^\s*\d+/, Xx = /^%/, Zx = /[\\^$*+?|[\]().{}]/g;
function X(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Qx(e) {
	return e.replace(Zx, "\\$&");
}
function $x(e) {
	return RegExp("^(?:" + e.map(Qx).join("|") + ")", "i");
}
function eS(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function tS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function nS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function rS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function iS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function aS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function oS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function sS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function cS(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function lS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function uS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function dS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function fS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function pS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function mS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function hS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function gS(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function _S(e, t, n) {
	var r = Yx.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function vS(e, t, n) {
	var r = Xx.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function yS(e, t, n) {
	var r = Yx.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function bS(e, t, n) {
	var r = Yx.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function xS(e, t) {
	return X(e.getDate(), t, 2);
}
function SS(e, t) {
	return X(e.getHours(), t, 2);
}
function CS(e, t) {
	return X(e.getHours() % 12 || 12, t, 2);
}
function wS(e, t) {
	return X(1 + gx.count(Lx(e), e), t, 3);
}
function TS(e, t) {
	return X(e.getMilliseconds(), t, 3);
}
function ES(e, t) {
	return TS(e, t) + "000";
}
function DS(e, t) {
	return X(e.getMonth() + 1, t, 2);
}
function OS(e, t) {
	return X(e.getMinutes(), t, 2);
}
function kS(e, t) {
	return X(e.getSeconds(), t, 2);
}
function AS(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function jS(e, t) {
	return X(bx.count(Lx(e) - 1, e), t, 2);
}
function MS(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? wx(e) : wx.ceil(e);
}
function NS(e, t) {
	return e = MS(e), X(wx.count(Lx(e), e) + (Lx(e).getDay() === 4), t, 2);
}
function PS(e) {
	return e.getDay();
}
function FS(e, t) {
	return X(xx.count(Lx(e) - 1, e), t, 2);
}
function IS(e, t) {
	return X(e.getFullYear() % 100, t, 2);
}
function LS(e, t) {
	return e = MS(e), X(e.getFullYear() % 100, t, 2);
}
function RS(e, t) {
	return X(e.getFullYear() % 1e4, t, 4);
}
function zS(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? wx(e) : wx.ceil(e), X(e.getFullYear() % 1e4, t, 4);
}
function BS(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + X(t / 60 | 0, "0", 2) + X(t % 60, "0", 2);
}
function VS(e, t) {
	return X(e.getUTCDate(), t, 2);
}
function HS(e, t) {
	return X(e.getUTCHours(), t, 2);
}
function US(e, t) {
	return X(e.getUTCHours() % 12 || 12, t, 2);
}
function WS(e, t) {
	return X(1 + _x.count(Rx(e), e), t, 3);
}
function GS(e, t) {
	return X(e.getUTCMilliseconds(), t, 3);
}
function KS(e, t) {
	return GS(e, t) + "000";
}
function qS(e, t) {
	return X(e.getUTCMonth() + 1, t, 2);
}
function JS(e, t) {
	return X(e.getUTCMinutes(), t, 2);
}
function YS(e, t) {
	return X(e.getUTCSeconds(), t, 2);
}
function XS(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function ZS(e, t) {
	return X(Ox.count(Rx(e) - 1, e), t, 2);
}
function QS(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Mx(e) : Mx.ceil(e);
}
function $S(e, t) {
	return e = QS(e), X(Mx.count(Rx(e), e) + (Rx(e).getUTCDay() === 4), t, 2);
}
function eC(e) {
	return e.getUTCDay();
}
function tC(e, t) {
	return X(kx.count(Rx(e) - 1, e), t, 2);
}
function nC(e, t) {
	return X(e.getUTCFullYear() % 100, t, 2);
}
function rC(e, t) {
	return e = QS(e), X(e.getUTCFullYear() % 100, t, 2);
}
function iC(e, t) {
	return X(e.getUTCFullYear() % 1e4, t, 4);
}
function aC(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Mx(e) : Mx.ceil(e), X(e.getUTCFullYear() % 1e4, t, 4);
}
function oC() {
	return "+0000";
}
function sC() {
	return "%";
}
function cC(e) {
	return +e;
}
function lC(e) {
	return Math.floor(e / 1e3);
}
// node_modules/d3-time-format/src/defaultLocale.js
var uC, dC, fC;
pC({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function pC(e) {
	return uC = qx(e), dC = uC.format, uC.parse, fC = uC.utcFormat, uC.utcParse, uC;
}
// node_modules/d3-scale/src/time.js
function mC(e) {
	return new Date(e);
}
function hC(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function gC(e, t, n, r, i, a, o, s, c, l) {
	var u = Qy(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, hC)) : f().map(mC);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return e && typeof e.range == "function" || (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Db(n, e)) : u;
	}, u.copy = function() {
		return Xy(u, gC(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function _C() {
	return Av.apply(gC(Hx, Ux, Lx, Fx, bx, gx, mx, fx, dx, dC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
// node_modules/d3-scale/src/utcTime.js
function vC() {
	return Av.apply(gC(Bx, Vx, Rx, Ix, Ox, _x, hx, px, dx, fC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
// node_modules/d3-scale/src/sequential.js
function yC() {
	var e = 0, t = 1, n, r, i, a, o = Gy, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(zy), l.rangeRound = u(By), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function bC(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function xC() {
	var e = wb(yC()(Gy));
	return e.copy = function() {
		return bC(e, xC());
	}, jv.apply(e, arguments);
}
function SC() {
	var e = Ib(yC()).domain([1, 10]);
	return e.copy = function() {
		return bC(e, SC()).base(e.base());
	}, jv.apply(e, arguments);
}
function CC() {
	var e = Bb(yC());
	return e.copy = function() {
		return bC(e, CC()).constant(e.constant());
	}, jv.apply(e, arguments);
}
function wC() {
	var e = Gb(yC());
	return e.copy = function() {
		return bC(e, wC()).exponent(e.exponent());
	}, jv.apply(e, arguments);
}
function TC() {
	return wC.apply(null, arguments).exponent(.5);
}
// node_modules/d3-scale/src/sequentialQuantile.js
function EC() {
	var e = [], t = Gy;
	function n(n) {
		if (n != null && !isNaN(n = +n)) return t((ge(e, n, 1) - 1) / (e.length - 1));
	}
	return n.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(ue), n;
	}, n.interpolator = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.range = function() {
		return e.map((n, r) => t(r / (e.length - 1)));
	}, n.quantiles = function(t) {
		return Array.from({ length: t + 1 }, (n, r) => Ae(e, r / t));
	}, n.copy = function() {
		return EC(t).domain(e);
	}, jv.apply(n, arguments);
}
// node_modules/d3-scale/src/diverging.js
function DC() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = Gy, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = Vy(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(zy), p.rangeRound = m(By), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function OC() {
	var e = wb(DC()(Gy));
	return e.copy = function() {
		return bC(e, OC());
	}, jv.apply(e, arguments);
}
function kC() {
	var e = Ib(DC()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return bC(e, kC()).base(e.base());
	}, jv.apply(e, arguments);
}
function AC() {
	var e = Bb(DC());
	return e.copy = function() {
		return bC(e, AC()).constant(e.constant());
	}, jv.apply(e, arguments);
}
function jC() {
	var e = Gb(DC());
	return e.copy = function() {
		return bC(e, jC()).exponent(e.exponent());
	}, jv.apply(e, arguments);
}
function MC() {
	return jC.apply(null, arguments).exponent(.5);
}
// node_modules/victory-vendor/es/d3-scale.js
var NC = /* @__PURE__ */ r({
	scaleBand: () => Pv,
	scaleDiverging: () => OC,
	scaleDivergingLog: () => kC,
	scaleDivergingPow: () => jC,
	scaleDivergingSqrt: () => MC,
	scaleDivergingSymlog: () => AC,
	scaleIdentity: () => Eb,
	scaleImplicit: () => Mv,
	scaleLinear: () => Tb,
	scaleLog: () => Lb,
	scaleOrdinal: () => Nv,
	scalePoint: () => Iv,
	scalePow: () => Kb,
	scaleQuantile: () => Zb,
	scaleQuantize: () => Qb,
	scaleRadial: () => Xb,
	scaleSequential: () => xC,
	scaleSequentialLog: () => SC,
	scaleSequentialPow: () => wC,
	scaleSequentialQuantile: () => EC,
	scaleSequentialSqrt: () => TC,
	scaleSequentialSymlog: () => CC,
	scaleSqrt: () => qb,
	scaleSymlog: () => Vb,
	scaleThreshold: () => $b,
	scaleTime: () => _C,
	scaleUtc: () => vC,
	tickFormat: () => Cb
});
// node_modules/recharts/es6/state/selectors/combiners/combineConfiguredScale.js
function PC(e) {
	var t = NC;
	if (e in t && typeof t[e] == "function") return t[e]();
	var n = `scale${St(e)}`;
	if (n in t && typeof t[n] == "function") return t[n]();
}
function FC(e, t, n) {
	if (typeof e == "function") return e.copy().domain(t).range(n);
	if (e != null) {
		var r = PC(e);
		if (r != null) return r.domain(t).range(n), r;
	}
}
function IC(e, t, n, r) {
	if (n != null && r != null) return typeof e.scale == "function" ? FC(e.scale, n, r) : FC(t, n, r);
}
// node_modules/recharts/es6/state/selectors/combiners/combineRealScaleType.js
function LC(e) {
	return `scale${St(e)}`;
}
function RC(e) {
	return LC(e) in NC;
}
var zC = (e, t, n) => {
	if (e != null) {
		var r = e.scale, i = e.type;
		if (r === "auto") return i === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
		if (typeof r == "string") return RC(r) ? r : "point";
	}
};
// node_modules/recharts/es6/util/scale/createCategoricalInverse.js
function BC(e, t) {
	for (var n = 0, r = e.length, i = e[0] < e[e.length - 1]; n < r;) {
		var a = Math.floor((n + r) / 2);
		(i ? e[a] < t : e[a] > t) ? n = a + 1 : r = a;
	}
	return n;
}
function VC(e, t) {
	if (e) {
		var n = t ?? e.domain(), r = n.map((t) => e(t) ?? 0), i = e.range();
		if (!(n.length === 0 || i.length < 2)) return (e) => {
			var t = BC(r, e);
			if (t <= 0) return n[0];
			if (t >= n.length) return n[n.length - 1];
			var i = r[t - 1] ?? 0, a = r[t] ?? 0;
			return Math.abs(e - i) <= Math.abs(e - a) ? n[t - 1] : n[t];
		};
	}
}
// node_modules/recharts/es6/state/selectors/combiners/combineInverseScaleFunction.js
function HC(e) {
	if (e != null) return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : VC(e, void 0);
}
// node_modules/recharts/es6/state/selectors/axisSelectors.js
function UC(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function WC(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? UC(Object(n), !0).forEach(function(t) {
			GC(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : UC(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function GC(e, t, n) {
	return (t = KC(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function KC(e) {
	var t = qC(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qC(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function JC(e, t) {
	return $C(e) || QC(e, t) || XC(e, t) || YC();
}
function YC() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function XC(e, t) {
	if (e) {
		if (typeof e == "string") return ZC(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ZC(e, t) : void 0;
	}
}
function ZC(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function QC(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function $C(e) {
	if (Array.isArray(e)) return e;
}
var ew = [0, "auto"], tw = {
	allowDataOverflow: !1,
	allowDecimals: !0,
	allowDuplicatedCategory: !0,
	angle: 0,
	dataKey: void 0,
	domain: void 0,
	height: 30,
	hide: !0,
	id: 0,
	includeHidden: !1,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: !1,
	name: void 0,
	orientation: "bottom",
	padding: {
		left: 0,
		right: 0
	},
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "category",
	unit: void 0,
	niceTicks: "auto"
}, nw = (e, t) => e.cartesianAxis.xAxis[t], rw = (e, t) => nw(e, t) ?? tw, iw = {
	allowDataOverflow: !1,
	allowDecimals: !0,
	allowDuplicatedCategory: !0,
	angle: 0,
	dataKey: void 0,
	domain: ew,
	hide: !0,
	id: 0,
	includeHidden: !1,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: !1,
	name: void 0,
	orientation: "left",
	padding: {
		top: 0,
		bottom: 0
	},
	reversed: !1,
	scale: "auto",
	tick: !0,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "number",
	unit: void 0,
	niceTicks: "auto",
	width: 60
}, aw = (e, t) => e.cartesianAxis.yAxis[t], ow = (e, t) => aw(e, t) ?? iw, sw = {
	domain: [0, "auto"],
	includeHidden: !1,
	reversed: !1,
	allowDataOverflow: !1,
	allowDuplicatedCategory: !1,
	dataKey: void 0,
	id: 0,
	name: "",
	range: [64, 64],
	scale: "auto",
	type: "number",
	unit: ""
}, cw = (e, t) => e.cartesianAxis.zAxis[t] ?? sw, lw = (e, t, n) => {
	switch (t) {
		case "xAxis": return rw(e, n);
		case "yAxis": return ow(e, n);
		case "zAxis": return cw(e, n);
		case "angleAxis": return S_(e, n);
		case "radiusAxis": return C_(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, uw = (e, t, n) => {
	switch (t) {
		case "xAxis": return rw(e, n);
		case "yAxis": return ow(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, dw = (e, t, n) => {
	switch (t) {
		case "xAxis": return rw(e, n);
		case "yAxis": return ow(e, n);
		case "angleAxis": return S_(e, n);
		case "radiusAxis": return C_(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, fw = (e) => e.graphicalItems.cartesianItems.some((e) => e.type === "bar") || e.graphicalItems.polarItems.some((e) => e.type === "radialBar");
function pw(e, t) {
	return (n) => {
		switch (e) {
			case "xAxis": return "xAxisId" in n && n.xAxisId === t;
			case "yAxis": return "yAxisId" in n && n.yAxisId === t;
			case "zAxis": return "zAxisId" in n && n.zAxisId === t;
			case "angleAxis": return "angleAxisId" in n && n.angleAxisId === t;
			case "radiusAxis": return "radiusAxisId" in n && n.radiusAxisId === t;
			default: return !1;
		}
	};
}
var mw = (e) => e.graphicalItems.cartesianItems, hw = H([Y, N_], pw), gw = (e, t, n) => e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide), _w = H([
	mw,
	lw,
	hw
], gw, { memoizeOptions: { resultEqualityCheck: z_ } }), vw = H([_w], (e) => e.filter(L_)), yw = (e) => e.filter((e) => !("stackId" in e) || e.stackId === void 0), bw = H([_w], yw), xw = (e) => e.map((e) => e.data).filter(Boolean).flat(1), Sw = H([_w], (e) => e.some((e) => !e.data)), Cw = H([_w], xw, { memoizeOptions: { resultEqualityCheck: z_ } }), ww = (e, t) => {
	var n = t.chartData, r = n === void 0 ? [] : n, i = t.dataStartIndex, a = t.dataEndIndex;
	return e.length > 0 ? e : r.slice(i, a + 1);
}, Tw = H([Cw, _g], ww), Ew = (e, t, n, r, i) => {
	if (sv(r, i) && n.some((e) => e.dataKey != null)) {
		var a = new Set(n.map((e) => e.dataKey ?? t?.dataKey));
		return Array.from(a).flatMap((t) => e.map((e) => ({ value: G(e, t) })));
	}
	return t?.dataKey == null ? n.length > 0 ? n.map((e) => e.dataKey).flatMap((t) => e.map((e) => ({ value: G(e, t) }))) : e.map((e) => ({ value: e })) : e.map((e) => ({ value: G(e, t.dataKey) }));
}, Dw = (e, t, n, r, i, a, o, s) => {
	var c = r.chartData, l = c === void 0 ? [] : c, u = r.dataStartIndex, d = r.dataEndIndex, f = Ew(e, t, n, o, s);
	return i && t?.dataKey != null && a.length > 0 ? [...l.slice(u, d + 1).map((e) => ({ value: G(e, t.dataKey) })).filter((e) => e.value != null), ...f] : f;
}, Ow = H([
	Tw,
	lw,
	_w,
	_g,
	Sw,
	Cw,
	K,
	Y
], Dw);
function kw(e) {
	if (gt(e) || e instanceof Date) {
		var t = Number(e);
		if (W(t)) return t;
	}
}
function Aw(e) {
	if (Array.isArray(e)) {
		var t = [kw(e[0]), kw(e[1])];
		return Og(t) ? t : void 0;
	}
	var n = kw(e);
	if (n != null) return [n, n];
}
function jw(e) {
	return e.map(kw).filter(Ct);
}
function Mw(e, t) {
	var n = kw(e), r = kw(t);
	return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
}
var Nw = H([Ow], (e) => e?.map((e) => e.value).sort(Mw));
function Pw(e, t) {
	switch (e) {
		case "xAxis": return t.direction === "x";
		case "yAxis": return t.direction === "y";
		default: return !1;
	}
}
function Fw(e, t, n) {
	if (!n || !n.length) return [];
	var r = kw(t);
	if (r == null && Array.isArray(t)) {
		var i = jw(t);
		i.length > 0 && (r = Math.max(...i));
	}
	return r == null ? [] : jw(n.flatMap((t) => {
		var n = G(e, t.dataKey), i, a;
		if (Array.isArray(n)) {
			var o = JC(n, 2);
			i = o[0], a = o[1];
		} else i = a = n;
		var s = kw(i), c = kw(a);
		if (s != null && c != null) return [r - s, r + c];
	}));
}
var Iw = (e) => dw(e, V_(e), fv(e)), Lw = H([Iw], (e) => e?.dataKey), Rw = H([
	vw,
	_g,
	Iw
], F_), zw = (e, t, n, r) => {
	var i = t.reduce((e, t) => {
		if (t.stackId == null) return e;
		var n = e[t.stackId];
		return n ??= [], n.push(t), e[t.stackId] = n, e;
	}, {});
	return Object.fromEntries(Object.entries(i).map((t) => {
		var i = JC(t, 2), a = i[0], o = i[1], s = r ? [...o].reverse() : o;
		return [a, {
			stackedData: pu(e, s.map(P_), n),
			graphicalItems: s
		}];
	}));
}, Bw = H([
	Rw,
	vw,
	i_,
	a_
], zw), Vw = (e) => e.errorBars;
function Hw(e, t, n, r, i) {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex, c = JC(e ?? [Infinity, -Infinity], 2), l = c[0], u = c[1];
	return Object.values(t ?? {}).forEach((e) => {
		var t = e.stackedData;
		e.graphicalItems.forEach((e, n) => {
			var c, d = r[e.id]?.filter((e) => Pw(i, e));
			d != null && d.length && ((c = e.data) != null && c.length ? e.data : a?.slice(o, s + 1))?.forEach((e, r) => {
				var i = t[n]?.[r + o];
				Fw(e, i?.[1], d).forEach((e) => {
					l = Math.min(l, e), u = Math.max(u, e);
				});
			});
		});
	}), W(l) && W(u) ? [l, u] : void 0;
}
var Uw = (e, t, n, r, i) => {
	if (r == null && n !== "zAxis") {
		var a = JC(Ng(t), 2), o = a[0], s = a[1];
		return Hw(xu(e, o, s), e, t, i, n);
	}
}, Ww = H([lw], (e) => e.allowDataOverflow), Gw = (e) => {
	if (e == null || !("domain" in e)) return ew;
	if (e.domain != null) return e.domain;
	if ("ticks" in e && e.ticks != null) {
		if (e.type === "number") {
			var t = jw(e.ticks);
			return [Math.min(...t), Math.max(...t)];
		}
		if (e.type === "category") return e.ticks.map(String);
	}
	return e?.domain ?? ew;
}, Kw = H([lw], Gw), qw = H([Kw, Ww], Ag), Jw = H([
	Bw,
	hg,
	Y,
	qw,
	Vw
], Uw, { memoizeOptions: { resultEqualityCheck: R_ } }), Yw = (e, t, n) => e.flatMap((e) => t[e.id]).filter(Boolean).filter((e) => Pw(n, e)), Xw = function() {
	var e = [...arguments].filter(Boolean);
	if (e.length !== 0) {
		var t = e.flat();
		return [Math.min(...t), Math.max(...t)];
	}
}, Zw = (e, t, n, r, i, a, o) => {
	var s, c;
	if (n.length > 0 && n.forEach((e) => {
		var n = e.data ?? a ?? [], l = cv(e.dataKey, t.dataKey, o, i), u = r[e.id]?.filter((e) => Pw(i, e));
		n.forEach((e) => {
			var t = G(e, l), n = Fw(e, t, u);
			if (n.length >= 2) {
				var r = Math.min(...n), i = Math.max(...n);
				(s == null || r < s) && (s = r), (c == null || i > c) && (c = i);
			}
			var a = Aw(t);
			a != null && (s = s == null ? a[0] : Math.min(s, a[0]), c = c == null ? a[1] : Math.max(c, a[1]));
		});
	}), t?.dataKey != null && n.length === 0 && e.forEach((e) => {
		var n = Aw(G(e, t.dataKey));
		n != null && (s = s == null ? n[0] : Math.min(s, n[0]), c = c == null ? n[1] : Math.max(c, n[1]));
	}), W(s) && W(c)) return [s, c];
}, Qw = H([
	Tw,
	lw,
	bw,
	Vw,
	Y,
	yg,
	K
], Zw, { memoizeOptions: { resultEqualityCheck: R_ } });
function $w(e) {
	var t = e.value;
	if (gt(t) || t instanceof Date) return t;
}
var eT = (e, t, n) => {
	var r = e.map($w).filter((e) => e != null);
	return n && (t.dataKey == null || t.allowDuplicatedCategory && bt(r)) ? mg(0, e.length) : t.allowDuplicatedCategory ? r : Array.from(new Set(r));
}, tT = (e) => e.referenceElements.dots, nT = (e, t, n) => e.filter((e) => e.ifOverflow === "extendDomain").filter((e) => t === "xAxis" ? e.xAxisId === n : e.yAxisId === n), rT = H([
	tT,
	Y,
	N_
], nT), iT = (e) => e.referenceElements.areas, aT = H([
	iT,
	Y,
	N_
], nT), oT = (e) => e.referenceElements.lines, sT = H([
	oT,
	Y,
	N_
], nT), cT = (e, t) => {
	if (e != null) {
		var n = jw(e.map((e) => t === "xAxis" ? e.x : e.y));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, lT = H(rT, Y, cT), uT = (e, t) => {
	if (e != null) {
		var n = jw(e.flatMap((e) => [t === "xAxis" ? e.x1 : e.y1, t === "xAxis" ? e.x2 : e.y2]));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, dT = H([aT, Y], uT);
function fT(e) {
	if (e.x != null) return jw([e.x]);
	var t = e.segment?.map((e) => e.x);
	return t == null || t.length === 0 ? [] : jw(t);
}
function pT(e) {
	if (e.y != null) return jw([e.y]);
	var t = e.segment?.map((e) => e.y);
	return t == null || t.length === 0 ? [] : jw(t);
}
var mT = (e, t) => {
	if (e != null) {
		var n = e.flatMap((e) => t === "xAxis" ? fT(e) : pT(e));
		if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
	}
}, hT = H(lT, H([sT, Y], mT), dT, (e, t, n) => Xw(e, n, t)), gT = (e, t, n, r, i, a, o, s, c) => {
	if (n != null) return n;
	var l = o === "vertical" && s === "xAxis" || o === "horizontal" && s === "yAxis" || o === "radial" && s === "angleAxis" || o === "centric" && s === "radiusAxis" ? Xw(r, a, i) : Xw(a, i), u = jg(t, l, e.allowDataOverflow);
	return u == null && e.allowDataOverflow && l == null && c != null ? c : u;
}, _T = H([
	lw,
	Kw,
	qw,
	Jw,
	Qw,
	hT,
	K,
	Y,
	H([lw], (e) => {
		if (e != null && e.type === "number" && "ticks" in e && e.ticks != null) {
			var t = jw(e.ticks);
			if (t.length !== 0) return [Math.min(...t), Math.max(...t)];
		}
	}, { memoizeOptions: { resultEqualityCheck: R_ } })
], gT, { memoizeOptions: { resultEqualityCheck: R_ } }), vT = [0, 1], yT = (e, t, n, r, i, a, o) => {
	if (e != null && n != null && n.length !== 0 || o !== void 0) {
		var s = e.dataKey, c = e.type, l = cu(t, a);
		return l && s == null ? mg(0, n?.length ?? 0) : c === "category" ? eT(r, e, l) : i === "expand" && !l ? vT : o;
	}
}, bT = (e, t, n) => t.some((e) => n(e) && L_(e)) ? e : "none", xT = H([
	lw,
	K,
	Tw,
	Ow,
	H([
		i_,
		mw,
		hw
	], bT),
	Y,
	_T
], yT), ST = H([
	lw,
	fw,
	o_
], zC), CT = (e, t, n) => {
	var r = t.niceTicks;
	if (r !== "none") {
		var i = Gw(t), a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
		if ((r === "snap125" || r === "adaptive") && t != null && t.tickCount && Og(e)) {
			if (a) return Qg(e, t.tickCount, t.allowDecimals, r);
			if (t.type === "number") return $g(e, t.tickCount, t.allowDecimals, r);
		}
		if (r === "auto" && n === "linear" && t != null && t.tickCount) {
			if (a && Og(e)) return Qg(e, t.tickCount, t.allowDecimals, "adaptive");
			if (t.type === "number" && Og(e)) return $g(e, t.tickCount, t.allowDecimals, "adaptive");
		}
	}
}, wT = H([
	xT,
	dw,
	ST
], CT), TT = (e, t, n, r) => {
	if (r !== "angleAxis" && e?.type === "number" && Og(t) && Array.isArray(n) && n.length > 0) {
		var i = t[0], a = n[0] ?? 0, o = t[1], s = n[n.length - 1] ?? 0;
		return [Math.min(i, a), Math.max(o, s)];
	}
	return t;
}, ET = H([
	lw,
	xT,
	wT,
	Y
], TT), DT = H(H(Ow, lw, (e, t) => {
	if (t && t.type === "number") {
		var n = Infinity, r = Array.from(jw(e.map((e) => e.value))).sort((e, t) => e - t), i = r[0], a = r[r.length - 1];
		if (i == null || a == null) return Infinity;
		var o = a - i;
		if (o === 0) return Infinity;
		for (var s = 0; s < r.length - 1; s++) {
			var c = r[s], l = r[s + 1];
			if (c != null && l != null) {
				var u = l - c;
				n = Math.min(n, u);
			}
		}
		return n / o;
	}
}), K, n_, Ku, (e, t, n, r, i) => i, (e, t, n, r, i) => {
	if (!W(e)) return 0;
	var a = t === "vertical" ? r.height : r.width;
	if (i === "gap") return e * a / 2;
	if (i === "no-gap") {
		var o = yt(n, e * a), s = e * a / 2;
		return s - o - (s - o) / a * o;
	}
	return 0;
}), OT = (e, t, n) => {
	var r = rw(e, t);
	return r == null || typeof r.padding != "string" ? 0 : DT(e, "xAxis", t, n, r.padding);
}, kT = (e, t, n) => {
	var r = ow(e, t);
	return r == null || typeof r.padding != "string" ? 0 : DT(e, "yAxis", t, n, r.padding);
}, AT = H(rw, OT, (e, t) => {
	if (e == null) return {
		left: 0,
		right: 0
	};
	var n = e.padding;
	return typeof n == "string" ? {
		left: t,
		right: t
	} : {
		left: (n.left ?? 0) + t,
		right: (n.right ?? 0) + t
	};
}), jT = H(ow, kT, (e, t) => {
	if (e == null) return {
		top: 0,
		bottom: 0
	};
	var n = e.padding;
	return typeof n == "string" ? {
		top: t,
		bottom: t
	} : {
		top: (n.top ?? 0) + t,
		bottom: (n.bottom ?? 0) + t
	};
}), MT = H([
	Ku,
	AT,
	Qu,
	Zu,
	(e, t, n) => n
], (e, t, n, r, i) => {
	var a = r.padding;
	return i ? [a.left, n.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), NT = H([
	Ku,
	K,
	jT,
	Qu,
	Zu,
	(e, t, n) => n
], (e, t, n, r, i, a) => {
	var o = i.padding;
	return a ? [r.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - n.bottom, e.top + n.top] : [e.top + n.top, e.top + e.height - n.bottom];
}), PT = (e, t, n, r) => {
	switch (t) {
		case "xAxis": return MT(e, n, r);
		case "yAxis": return NT(e, n, r);
		case "zAxis": return cw(e, n)?.range;
		case "angleAxis": return O_(e);
		case "radiusAxis": return A_(e, n);
		default: return;
	}
}, FT = H([lw, PT], p_), IT = H([ST, ET], kv), LT = (e, t) => t === "xAxis" ? e.zoom.x : t === "yAxis" ? e.zoom.y : bv, RT = H([
	lw,
	ST,
	IT,
	H([
		FT,
		LT,
		(e, t, n, r) => r
	], (e, t, n) => e == null || n || Tv(t) ? e : Ov(e, t))
], IC), zT = (e, t, n, r) => {
	if (n != null && n.dataKey != null) {
		var i = n.type, a = n.scale;
		if (cu(e, r) && (i === "number" || a !== "auto")) return t.map((e) => e.value);
	}
}, BT = H([
	K,
	Ow,
	dw,
	Y
], zT), VT = H([RT], pv);
H([RT], HC), H([RT, Nw], VC), H([
	_w,
	Vw,
	Y
], Yw);
function HT(e, t) {
	return e.id < t.id ? -1 : +(e.id > t.id);
}
var UT = (e, t) => t, WT = (e, t, n) => n, GT = H(Mu, UT, WT, (e, t, n) => e.filter((e) => e.orientation === t).filter((e) => e.mirror === n).sort(HT)), KT = H(Nu, UT, WT, (e, t, n) => e.filter((e) => e.orientation === t).filter((e) => e.mirror === n).sort(HT)), qT = (e, t) => {
	var n = typeof t.height == "number" ? t.height : 30;
	return {
		width: e.width,
		height: n
	};
}, JT = (e, t) => ({
	width: typeof t.width == "number" ? t.width : 60,
	height: e.height
}), YT = H(Ku, rw, qT), XT = (e, t, n) => {
	switch (t) {
		case "top": return e.top;
		case "bottom": return n - e.bottom;
		default: return 0;
	}
}, ZT = (e, t, n) => {
	switch (t) {
		case "left": return e.left;
		case "right": return n - e.right;
		default: return 0;
	}
}, QT = H(Au, Ku, GT, UT, WT, (e, t, n, r, i) => {
	var a = {}, o;
	return n.forEach((n) => {
		var s = qT(t, n);
		o ??= XT(t, r, e);
		var c = r === "top" && !i || r === "bottom" && i;
		a[n.id] = o - Number(c) * s.height, o += (c ? -1 : 1) * s.height;
	}), a;
}), $T = H(ku, Ku, KT, UT, WT, (e, t, n, r, i) => {
	var a = {}, o;
	return n.forEach((n) => {
		var s = JT(t, n);
		o ??= ZT(t, r, e);
		var c = r === "left" && !i || r === "right" && i;
		a[n.id] = o - Number(c) * s.width, o += (c ? -1 : 1) * s.width;
	}), a;
}), eE = H([
	Ku,
	rw,
	(e, t) => {
		var n = rw(e, t);
		if (n != null) return QT(e, n.orientation, n.mirror);
	},
	(e, t) => t
], (e, t, n, r) => {
	if (t != null) {
		var i = n?.[r];
		return i == null ? {
			x: e.left,
			y: 0
		} : {
			x: e.left,
			y: i
		};
	}
}), tE = H([
	Ku,
	ow,
	(e, t) => {
		var n = ow(e, t);
		if (n != null) return $T(e, n.orientation, n.mirror);
	},
	(e, t) => t
], (e, t, n, r) => {
	if (t != null) {
		var i = n?.[r];
		return i == null ? {
			x: 0,
			y: e.top
		} : {
			x: i,
			y: e.top
		};
	}
}), nE = H(Ku, ow, (e, t) => ({
	width: typeof t.width == "number" ? t.width : 60,
	height: e.height
})), rE = (e, t, n) => {
	switch (t) {
		case "xAxis": return YT(e, n).width;
		case "yAxis": return nE(e, n).height;
		default: return;
	}
}, iE = (e, t, n, r) => {
	if (n != null) {
		var i = n.allowDuplicatedCategory, a = n.type, o = n.dataKey, s = cu(e, r), c = t.map((e) => e.value), l = c.filter((e) => e != null);
		if (o && s && a === "category" && i && bt(l)) return c;
	}
}, aE = H([
	K,
	Ow,
	lw,
	Y
], iE), oE = H([
	K,
	uw,
	ST,
	VT,
	aE,
	BT,
	PT,
	wT,
	Y
], (e, t, n, r, i, a, o, s, c) => {
	if (t != null) {
		var l = cu(e, c);
		return {
			angle: t.angle,
			interval: t.interval,
			minTickGap: t.minTickGap,
			orientation: t.orientation,
			tick: t.tick,
			tickCount: t.tickCount,
			tickFormatter: t.tickFormatter,
			ticks: t.ticks,
			type: t.type,
			unit: t.unit,
			axisType: c,
			categoricalDomain: a,
			duplicateDomain: i,
			isCategorical: l,
			niceTicks: s,
			range: o,
			realScaleType: n,
			scale: r
		};
	}
}), sE = (e, t, n, r, i, a, o, s, c) => {
	if (t != null && r != null) {
		var l = cu(e, c), u = t.type, d = t.ticks, f = t.tickCount, p = n === "scaleBand" && typeof r.bandwidth == "function" ? r.bandwidth() / 2 : 2, m = u === "category" && r.bandwidth ? r.bandwidth() / p : 0;
		c === "angleAxis" && a != null && a.length >= 2 && (m = a[0] > a[1] ? 2 * m : 0);
		var h = d || i;
		return h ? h.map((e, t) => {
			var n = o ? o.indexOf(e) : e, i = r.map(n);
			return W(i) ? {
				index: t,
				coordinate: i + m,
				value: e,
				offset: m
			} : null;
		}).filter(Ct) : l && s ? s.map((e, t) => {
			var n = r.map(e);
			return W(n) ? {
				coordinate: n + m,
				value: e,
				index: t,
				offset: m
			} : null;
		}).filter(Ct) : r.ticks ? r.ticks(f).map((e, t) => {
			var n = r.map(e);
			return W(n) ? {
				coordinate: n + m,
				value: e,
				index: t,
				offset: m
			} : null;
		}).filter(Ct) : r.domain().map((e, t) => {
			var n = r.map(e);
			return W(n) ? {
				coordinate: n + m,
				value: o ? o[e] : e,
				index: t,
				offset: m
			} : null;
		}).filter(Ct);
	}
}, cE = H([
	H([
		K,
		dw,
		ST,
		VT,
		wT,
		PT,
		aE,
		BT,
		Y
	], sE),
	PT,
	LT
], (e, t, n) => {
	if (e == null || t == null || Tv(n)) return e;
	var r = Math.min(t[0], t[1]) - .5, i = Math.max(t[0], t[1]) + .5;
	return e.filter((e) => e.coordinate >= r && e.coordinate <= i);
}), lE = (e, t, n, r, i, a, o) => {
	if (t != null && n != null && r != null && r[0] !== r[1]) {
		var s = cu(e, o), c = t.tickCount, l = 0;
		return l = o === "angleAxis" && r?.length >= 2 ? pt(r[0] - r[1]) * 2 * l : l, s && a ? a.map((e, t) => {
			var r = n.map(e);
			return W(r) ? {
				coordinate: r + l,
				value: e,
				index: t,
				offset: l
			} : null;
		}).filter(Ct) : n.ticks ? n.ticks(c).map((e, t) => {
			var r = n.map(e);
			return W(r) ? {
				coordinate: r + l,
				value: e,
				index: t,
				offset: l
			} : null;
		}).filter(Ct) : n.domain().map((e, t) => {
			var r = n.map(e);
			return W(r) ? {
				coordinate: r + l,
				value: i ? i[e] : e,
				index: t,
				offset: l
			} : null;
		}).filter(Ct);
	}
}, uE = H([
	K,
	dw,
	VT,
	PT,
	aE,
	BT,
	Y
], lE), dE = H(lw, VT, (e, t) => {
	if (e != null && t != null) return WC(WC({}, e), {}, { scale: t });
});
H((e, t, n) => cw(e, n), H([H([
	lw,
	ST,
	xT,
	FT
], IC)], pv), (e, t) => {
	if (e != null && t != null) return WC(WC({}, e), {}, { scale: t });
});
var fE = H([
	K,
	Mu,
	Nu
], (e, t, n) => {
	switch (e) {
		case "horizontal": return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
		case "vertical": return n.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
		case "centric":
		case "radial": return "left-to-right";
		default: return;
	}
});
H([(e, t, n) => e.renderedTicks[t]?.[n]], (e) => {
	if (e && e.length !== 0) return (t) => {
		var n = Infinity, r = e[0];
		for (var i of e) {
			var a = Math.abs(i.coordinate - t);
			a < n && (n = a, r = i);
		}
		return r?.value;
	};
});
// node_modules/recharts/es6/state/selectors/selectTooltipEventType.js
var pE = (e) => e.options.defaultTooltipEventType, mE = (e) => e.options.validateTooltipEventTypes;
function hE(e, t, n) {
	if (e == null) return t;
	var r = e ? "axis" : "item";
	return n == null ? t : n.includes(r) ? r : t;
}
function gE(e, t) {
	return hE(t, pE(e), mE(e));
}
function _E(e) {
	return V((t) => gE(t, e));
}
// node_modules/recharts/es6/state/selectors/combiners/combineActiveLabel.js
var vE = (e, t) => {
	var n, r = Number(t);
	if (!(mt(r) || t == null)) return r >= 0 ? e == null || (n = e[r]) == null ? void 0 : n.value : void 0;
}, yE = (e) => e.tooltip.settings, bE = {
	active: !1,
	index: null,
	dataKey: void 0,
	graphicalItemId: void 0,
	coordinate: void 0
}, xE = Xc({
	name: "tooltip",
	initialState: {
		itemInteraction: {
			click: bE,
			hover: bE
		},
		axisInteraction: {
			click: bE,
			hover: bE
		},
		keyboardInteraction: bE,
		syncInteraction: {
			active: !1,
			index: null,
			dataKey: void 0,
			label: void 0,
			coordinate: void 0,
			sourceViewBox: void 0,
			graphicalItemId: void 0
		},
		tooltipItemPayloads: [],
		settings: {
			shared: void 0,
			trigger: "hover",
			axisId: 0,
			active: !1,
			defaultIndex: void 0
		}
	},
	reducers: {
		addTooltipEntrySettings: {
			reducer(e, t) {
				e.tooltipItemPayloads.push(U(t.payload));
			},
			prepare: Fc()
		},
		replaceTooltipEntrySettings: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = xc(e).tooltipItemPayloads.indexOf(U(r));
				a > -1 && (e.tooltipItemPayloads[a] = U(i));
			},
			prepare: Fc()
		},
		removeTooltipEntrySettings: {
			reducer(e, t) {
				var n = xc(e).tooltipItemPayloads.indexOf(U(t.payload));
				n > -1 && e.tooltipItemPayloads.splice(n, 1);
			},
			prepare: Fc()
		},
		setTooltipSettingsState(e, t) {
			e.settings = t.payload;
		},
		setActiveMouseOverItemIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
		},
		mouseLeaveChart(e) {
			e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
		},
		mouseLeaveItem(e) {
			e.itemInteraction.hover.active = !1;
		},
		setActiveClickItemIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
		},
		setMouseOverAxisIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
		},
		setMouseClickAxisIndex(e, t) {
			e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
		},
		setSyncInteraction(e, t) {
			e.syncInteraction = t.payload;
		},
		setKeyboardInteraction(e, t) {
			e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
		}
	}
}), SE = xE.actions, CE = SE.addTooltipEntrySettings, wE = SE.replaceTooltipEntrySettings, TE = SE.removeTooltipEntrySettings, EE = SE.setTooltipSettingsState, DE = SE.setActiveMouseOverItemIndex, OE = SE.mouseLeaveItem, kE = SE.mouseLeaveChart, AE = SE.setActiveClickItemIndex, jE = SE.setMouseOverAxisIndex, ME = SE.setMouseClickAxisIndex, NE = SE.setSyncInteraction, PE = SE.setKeyboardInteraction, FE = xE.reducer;
// node_modules/recharts/es6/state/selectors/combiners/combineTooltipInteractionState.js
function IE(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function LE(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? IE(Object(n), !0).forEach(function(t) {
			RE(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IE(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function RE(e, t, n) {
	return (t = zE(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function zE(e) {
	var t = BE(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function BE(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function VE(e, t, n) {
	return t === "axis" ? n === "click" ? e.axisInteraction.click : e.axisInteraction.hover : n === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function HE(e) {
	return e.index != null;
}
var UE = (e, t, n, r) => {
	if (t == null) return bE;
	var i = VE(e, t, n);
	if (i == null) return bE;
	if (i.active) return i;
	if (e.keyboardInteraction.active) return e.keyboardInteraction;
	if (e.syncInteraction.active && e.syncInteraction.index != null) return e.syncInteraction;
	var a = e.settings.active === !0;
	if (HE(i)) {
		if (a) return LE(LE({}, i), {}, { active: !0 });
	} else if (r != null) return {
		active: !0,
		coordinate: void 0,
		dataKey: void 0,
		index: r,
		graphicalItemId: void 0
	};
	return LE(LE({}, bE), {}, { coordinate: i.coordinate });
};
// node_modules/recharts/es6/state/selectors/combiners/combineActiveTooltipIndex.js
function WE(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (e instanceof Date) {
		var t = e.valueOf();
		return Number.isFinite(t) ? t : void 0;
	}
	var n = Number(e);
	return Number.isFinite(n) ? n : void 0;
}
function GE(e, t) {
	var n = WE(e), r = t[0], i = t[1];
	return n !== void 0 && n >= Math.min(r, i) && n <= Math.max(r, i);
}
function KE(e, t, n) {
	if (n == null || t == null) return !0;
	var r = G(e, t);
	return r == null || !Og(n) || GE(r, n);
}
var qE = (e, t, n, r) => {
	var i = e?.index;
	if (i == null) return null;
	var a = Number(i);
	if (!W(a)) return i;
	var o = 0, s = Infinity;
	t.length > 0 && (s = t.length - 1);
	var c = Math.max(o, Math.min(a, s)), l = t[c];
	return l == null || KE(l, n, r) ? String(c) : null;
};
// node_modules/recharts/es6/state/selectors/combiners/combineCoordinateForDefaultIndex.js
function JE(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function YE(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? JE(Object(n), !0).forEach(function(t) {
			XE(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : JE(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function XE(e, t, n) {
	return (t = ZE(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ZE(e) {
	var t = QE(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function QE(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var $E = (e, t, n, r, i, a, o, s) => {
	if (a != null) {
		var c = o[0]?.getPosition(a);
		if (c != null) return c;
		var l = i?.[Number(a)];
		if (l) switch (n) {
			case "horizontal": return {
				x: l.coordinate,
				y: (r.top + t) / 2
			};
			case "radial":
				if (s) {
					var u = s.cx, d = s.cy, f = s.innerRadius, p = s.outerRadius, m = s.startAngle, h = s.endAngle, g = l.coordinate, _ = (m + h) / 2;
					return YE(YE({}, Vh(u, d, p, _)), {}, {
						cx: u,
						cy: d,
						radius: g,
						angle: _,
						startAngle: m,
						endAngle: h,
						innerRadius: f,
						outerRadius: p,
						clockWise: !1
					});
				}
				return {
					x: (r.left + e) / 2,
					y: l.coordinate
				};
			case "centric":
				if (s == null) return;
				var v = s.cx, y = s.cy, b = s.outerRadius, x = l.coordinate;
				return YE(YE(YE({}, s), Vh(v, y, b, x)), {}, {
					angle: x,
					radius: b
				});
			default: return {
				x: (r.left + e) / 2,
				y: l.coordinate
			};
		}
	}
}, eD = (e) => !Tv(e.zoom.x) || !Tv(e.zoom.y), tD = (e, t, n, r) => {
	if (t === "axis") return e.tooltipItemPayloads;
	if (e.tooltipItemPayloads.length === 0) return [];
	var i = n === "hover" ? e.itemInteraction.hover.graphicalItemId : e.itemInteraction.click.graphicalItemId;
	if (e.syncInteraction.active && i == null) return e.tooltipItemPayloads;
	if (i == null && (r != null || e.keyboardInteraction.active)) {
		var a = e.tooltipItemPayloads[0];
		return a == null ? [] : [a];
	}
	return e.tooltipItemPayloads.filter((e) => e.settings?.graphicalItemId === i);
}, nD = (e) => e.options.tooltipPayloadSearcher, rD = (e) => e.tooltip;
// node_modules/recharts/es6/state/selectors/combiners/combineTooltipPayload.js
function iD(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function aD(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? iD(Object(n), !0).forEach(function(t) {
			oD(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iD(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function oD(e, t, n) {
	return (t = sD(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sD(e) {
	var t = cD(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cD(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function lD(e, t) {
	return mD(e) || pD(e, t) || dD(e, t) || uD();
}
function uD() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function dD(e, t) {
	if (e) {
		if (typeof e == "string") return fD(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fD(e, t) : void 0;
	}
}
function fD(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function pD(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function mD(e) {
	if (Array.isArray(e)) return e;
}
function hD(e) {
	if (typeof e == "string" || typeof e == "number") return e;
}
function gD(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
}
function _D(e) {
	if (typeof e == "string" || typeof e == "number") return e;
	if (typeof e == "function") return (t) => e(t);
}
function vD(e) {
	if (typeof e == "string") return e;
}
function yD(e) {
	if (typeof e == "object" && e) return {
		name: "name" in e ? hD(e.name) : void 0,
		unit: "unit" in e ? gD(e.unit) : void 0,
		dataKey: "dataKey" in e ? _D(e.dataKey) : void 0,
		payload: "payload" in e ? e.payload : void 0,
		color: "color" in e ? vD(e.color) : void 0,
		fill: Rr(e).color,
		stroke: "stroke" in e ? vD(e.stroke) : void 0
	};
}
function bD(e, t) {
	return e ?? t;
}
var xD = (e, t, n, r, i, a, o) => {
	if (t != null && a != null) {
		var s = n.chartData, c = n.computedData, l = lD(Ng(n), 2), u = l[0], d = l[1], f = s == null ? void 0 : Gl(s, u, d);
		return e.reduce((e, n) => {
			var s = n.dataDefinedOnItem, l = n.settings, u = n.getEntryColor, d = bD(s, f), p = l?.dataKey ?? r, m = l?.nameKey, h = r && Array.isArray(d) && !Array.isArray(d[0]) && o === "axis" ? xt(d, r, i) : a(d, t, c, m);
			if (Array.isArray(h)) h.forEach((t) => {
				var n = yD(t), r = n?.name, i = n?.dataKey, a = n?.payload, o = aD(aD({}, l), {}, {
					name: r,
					unit: n?.unit,
					color: n?.color ?? l.color,
					fill: n?.fill ?? l.fill,
					stroke: n?.stroke ?? l.stroke
				});
				e.push(Tu({
					tooltipEntrySettings: o,
					dataKey: i,
					payload: a,
					value: G(a, i),
					name: r == null ? void 0 : String(r)
				}));
			});
			else {
				var g = l.ignoreDataEntryColors ? void 0 : yD(h), _ = u == null ? g?.color ?? g?.fill ?? g?.stroke : u(h), v = aD(aD({}, l), {}, {
					color: _ ?? l.color,
					fill: g?.fill ?? l.fill,
					stroke: g?.stroke ?? l.stroke
				});
				e.push(Tu({
					tooltipEntrySettings: v,
					dataKey: p,
					payload: h,
					value: G(h, p),
					name: G(h, m) ?? l?.name
				}));
			}
			return e;
		}, []);
	}
}, SD = {
	FunnelChart: "independent",
	PieChart: "uniform",
	RadarChart: "uniform",
	RadialBarChart: "uniform",
	Sankey: "independent",
	Sunburst: "uniform",
	Treemap: "independent"
};
function CD(e) {
	return (e.startRatio + e.endRatio) / 2;
}
function wD(e, t) {
	var n = Math.max(Math.min(t, 1), 0);
	if (!Number.isFinite(n) || n <= 0) return Dv(e);
	var r = CD(e);
	return Dv({
		startRatio: r - n / 2,
		endRatio: r + n / 2
	});
}
function TD(e) {
	var t = wv(e.x), n = wv(e.y), r = Math.min(t, n);
	return !Number.isFinite(r) || r >= 1 ? {
		x: bv,
		y: bv
	} : {
		x: wD(e.x, r),
		y: wD(e.y, r)
	};
}
function ED(e, t) {
	var n = e == null ? void 0 : SD[e];
	if (n != null) return n === "uniform" ? TD(t) : t;
}
function DD(e, t) {
	if (e.width <= 0 || e.height <= 0 || Tv(t.x) && Tv(t.y)) return null;
	var n = 1 / wv(t.x), r = 1 / wv(t.y), i = -e.x - t.x.startRatio * e.width, a = -e.y - t.y.startRatio * e.height;
	return `translate(${e.x} ${e.y}) scale(${n} ${r}) translate(${i} ${a})`;
}
function OD(e, t, n) {
	if (e != null) {
		if (DD(t, n) == null) return e;
		var r = 1 / wv(n.x), i = 1 / wv(n.y);
		return {
			x: t.x + (e.x - t.x - n.x.startRatio * t.width) * r,
			y: t.y + (e.y - t.y - n.y.startRatio * t.height) * i
		};
	}
}
function kD(e, t, n, r) {
	var i = ED(n, r);
	return i == null ? e : OD(e, t, i);
}
// node_modules/recharts/es6/state/selectors/tooltipSelectors.js
var AD = H([
	Iw,
	fw,
	o_
], zC), jD = H([
	ov,
	Iw,
	H([V_, fv], pw)
], gw, { memoizeOptions: { resultEqualityCheck: z_ } }), MD = H([jD], (e) => e.filter(L_)), ND = H([jD], xw, { memoizeOptions: { resultEqualityCheck: z_ } }), PD = H([jD], (e) => e.some((e) => !e.data)), FD = H([ND, hg], ww), ID = H([
	MD,
	hg,
	Iw
], F_), LD = H([
	FD,
	Iw,
	jD,
	hg,
	PD,
	ND,
	K,
	V_
], Dw), RD = H([Iw], Gw), zD = H([RD, H([Iw], (e) => e.allowDataOverflow)], Ag), BD = H([
	H([
		ID,
		H([jD], (e) => e.filter(L_)),
		i_,
		a_
	], zw),
	hg,
	V_,
	zD,
	Vw
], Uw), VD = H([
	FD,
	Iw,
	H([jD], yw),
	Vw,
	V_,
	xg,
	K
], Zw, { memoizeOptions: { resultEqualityCheck: R_ } }), HD = H([H([
	tT,
	V_,
	fv
], nT), V_], cT), UD = H([H([
	iT,
	V_,
	fv
], nT), V_], uT), WD = H([
	Iw,
	K,
	FD,
	LD,
	i_,
	V_,
	H([
		Iw,
		RD,
		zD,
		BD,
		VD,
		H([
			HD,
			H([H([
				oT,
				V_,
				fv
			], nT), V_], mT),
			UD
		], Xw),
		K,
		V_
	], gT)
], yT), GD = H([
	Iw,
	WD,
	H([
		WD,
		Iw,
		AD
	], CT),
	V_
], TT), KD = H([Iw, (e) => PT(e, V_(e), fv(e), !1)], p_), qD = H([H([
	Iw,
	AD,
	GD,
	H([
		KD,
		V_,
		(e) => e.zoom
	], (e, t, n) => {
		if (e == null) return e;
		var r = bv;
		return t === "xAxis" ? r = n.x : t === "yAxis" && (r = n.y), Tv(r) ? e : Ov(e, r);
	})
], IC)], pv), JD = H([
	K,
	Iw,
	AD,
	qD,
	KD,
	H([
		K,
		LD,
		Iw,
		V_
	], iE),
	H([
		K,
		LD,
		Iw,
		V_
	], zT),
	V_
], (e, t, n, r, i, a, o, s) => {
	if (t) {
		var c = t.type, l = cu(e, s);
		if (r) {
			var u = n === "scaleBand" && r.bandwidth ? r.bandwidth() / 2 : 2, d = c === "category" && r.bandwidth ? r.bandwidth() / u : 0;
			return s === "angleAxis" && i != null && i?.length >= 2 && (d = i[0] > i[1] ? 2 * d : 0), l && o ? o.map((e, t) => {
				var n = r.map(e);
				return W(n) ? {
					coordinate: n + d,
					value: e,
					index: t,
					offset: d
				} : null;
			}).filter(Ct) : r.domain().map((e, t) => {
				var n = r.map(e);
				return W(n) ? {
					coordinate: n + d,
					value: a ? a[e] : e,
					index: t,
					offset: d
				} : null;
			}).filter(Ct);
		}
	}
}), YD = H([
	pE,
	mE,
	yE
], (e, t, n) => hE(n.shared, e, t)), XD = (e) => e.tooltip.settings.trigger, ZD = (e) => e.tooltip.settings.defaultIndex, QD = H([
	rD,
	YD,
	XD,
	ZD
], UE), $D = H([
	QD,
	FD,
	Lw,
	WD
], qE), eO = H([JD, $D], vE), tO = H([QD], (e) => {
	if (e) return e.dataKey;
}), nO = H([QD], (e) => {
	if (e) return e.graphicalItemId;
}), rO = H([
	rD,
	YD,
	XD,
	ZD
], tD), iO = H([
	H([
		QD,
		H([
			ku,
			Au,
			K,
			Ku,
			JD,
			ZD,
			rO,
			M_
		], $E),
		H([
			ku,
			Au,
			K,
			Ku,
			JD,
			$D,
			rO,
			M_
		], (e, t, n, r, i, a, o, s) => $E(e, t, n, r, i, a ?? void 0, o, s)),
		K,
		eD
	], (e, t, n, r, i) => {
		var a = e?.coordinate;
		return i && n != null ? a != null && (r === "horizontal" || r === "vertical") ? r === "horizontal" ? {
			x: n.x,
			y: a.y
		} : {
			x: a.x,
			y: n.y
		} : n : a || t;
	}),
	o_,
	Ku,
	(e) => e.zoom
], (e, t, n, r) => e == null || n == null ? e : kD(e, {
	x: n.left,
	y: n.top,
	width: n.width,
	height: n.height
}, t, r)), aO = H([QD], (e) => e?.active ?? !1), oO = H([H([
	rO,
	$D,
	hg,
	Lw,
	eO,
	nD,
	YD
], xD)], (e) => {
	if (e != null) {
		var t = e.map((e) => e.payload).filter((e) => e != null);
		return Array.from(new Set(t));
	}
});
// node_modules/recharts/es6/context/useTooltipAxis.js
function sO(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function cO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? sO(Object(n), !0).forEach(function(t) {
			lO(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sO(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function lO(e, t, n) {
	return (t = uO(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function uO(e) {
	var t = dO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function dO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var fO = () => V(Iw), pO = () => {
	var e = fO(), t = V(JD), n = V(qD);
	return wu(!e || !n ? void 0 : cO(cO({}, e), {}, { scale: n }), t);
};
// node_modules/recharts/es6/util/getActiveCoordinate.js
function mO(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mO(Object(n), !0).forEach(function(t) {
			gO(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mO(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gO(e, t, n) {
	return (t = _O(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _O(e) {
	var t = vO(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function vO(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var yO = (e, t, n, r) => {
	var i = t.find((e) => e && e.index === n);
	if (i) {
		if (e === "horizontal") return {
			x: i.coordinate,
			y: r.relativeY
		};
		if (e === "vertical") return {
			x: r.relativeX,
			y: i.coordinate
		};
	}
	return {
		x: 0,
		y: 0
	};
}, bO = (e, t, n, r) => {
	var i = t.find((e) => e && e.index === n);
	if (i) {
		if (e === "centric") {
			var a = i.coordinate, o = r.radius;
			return hO(hO(hO({}, r), Vh(r.cx, r.cy, o, a)), {}, {
				angle: a,
				radius: o
			});
		}
		var s = i.coordinate, c = r.angle;
		return hO(hO(hO({}, r), Vh(r.cx, r.cy, s, c)), {}, {
			angle: c,
			radius: s
		});
	}
	return {
		angle: 0,
		clockWise: !1,
		cx: 0,
		cy: 0,
		endAngle: 0,
		innerRadius: 0,
		outerRadius: 0,
		radius: 0,
		startAngle: 0,
		x: 0,
		y: 0
	};
};
function xO(e, t) {
	var n = e.relativeX, r = e.relativeY;
	return n >= t.left && n <= t.left + t.width && r >= t.top && r <= t.top + t.height;
}
var SO = (e, t, n, r, i) => {
	var a = t?.length ?? 0;
	if (a <= 1 || e == null) return 0;
	if (r === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var o = i[1] - i[0], s = (t, n, r) => [
		e,
		e + o,
		e - o
	].some((e) => (r ? e >= t : e > t) && e <= n), c = 0; c < a; c++) {
		var l = c > 0 ? n[c - 1]?.coordinate : n[a - 1]?.coordinate, u = n[c]?.coordinate, d = c >= a - 1 ? n[0]?.coordinate : n[c + 1]?.coordinate, f = void 0;
		if (l != null && u != null && d != null) {
			if (pt(u - l) !== pt(d - u)) {
				var p = [];
				if (pt(d - u) === pt(i[1] - i[0])) {
					f = d;
					var m = u + i[1] - i[0];
					p[0] = Math.min(m, (m + l) / 2), p[1] = Math.max(m, (m + l) / 2);
				} else {
					f = l;
					var h = d + i[1] - i[0];
					p[0] = Math.min(u, (h + u) / 2), p[1] = Math.max(u, (h + u) / 2);
				}
				var g = [Math.min(u, (f + u) / 2), Math.max(u, (f + u) / 2)];
				if (s(g[0], g[1], !1) || s(p[0], p[1], !0)) return n[c]?.index;
			} else {
				var _ = Math.min(l, d), v = Math.max(l, d);
				if (s((_ + u) / 2, (v + u) / 2, !1)) return n[c]?.index;
			}
		}
	}
	else if (t) for (var y = 0; y < a; y++) {
		var b = t[y];
		if (b != null) {
			var x = t[y + 1], S = t[y - 1];
			if (y === 0 && x != null && e <= (b.coordinate + x.coordinate) / 2 || y === a - 1 && S != null && e > (b.coordinate + S.coordinate) / 2 || y > 0 && y < a - 1 && S != null && x != null && e > (b.coordinate + S.coordinate) / 2 && e <= (b.coordinate + x.coordinate) / 2) return b.index;
		}
	}
	return -1;
}, CO = () => V(o_), wO = (e, t) => t, TO = (e, t, n) => n, EO = (e, t, n, r) => r, DO = H(JD, (e) => Ao(e, (e) => e.coordinate)), OO = H([
	rD,
	wO,
	TO,
	EO
], UE), kO = H([
	OO,
	FD,
	Lw,
	WD
], qE), AO = (e, t, n) => {
	if (t != null) {
		var r = rD(e);
		return t === "axis" ? n === "hover" ? r.axisInteraction.hover.dataKey : r.axisInteraction.click.dataKey : n === "hover" ? r.itemInteraction.hover.dataKey : r.itemInteraction.click.dataKey;
	}
}, jO = H([
	rD,
	wO,
	TO,
	EO
], tD), MO = H([
	ku,
	Au,
	K,
	Ku,
	JD,
	EO,
	jO,
	M_
], $E), NO = H([OO, MO], (e, t) => e.coordinate ?? t), PO = H([JD, kO], vE), FO = H([
	jO,
	kO,
	hg,
	Lw,
	PO,
	nD,
	wO
], xD), IO = H([OO, kO], (e, t) => ({
	isActive: e.active && t != null,
	activeIndex: t
})), LO = (e, t, n, r, i, a, o) => {
	if (e && n && r && i && xO(e, o)) {
		var s = SO(Du(e, t), a, i, n, r), c = yO(t, i, s, e);
		return {
			activeIndex: String(s),
			activeCoordinate: c
		};
	}
}, RO = (e, t, n, r, i, a, o) => {
	if (e && r && i && a && n) {
		var s = qh(e, n);
		if (s) {
			var c = SO(Ou(s, t), o, a, r, i), l = bO(t, a, c, s);
			return {
				activeIndex: String(c),
				activeCoordinate: l
			};
		}
	}
}, zO = (e, t, n, r, i, a, o, s) => {
	if (e && t && r && i && a) return t === "horizontal" || t === "vertical" ? LO(e, t, r, i, a, o, s) : RO(e, t, n, r, i, a, o);
}, BO = H([
	H([Ku], (e) => ({
		top: e.top,
		bottom: e.bottom,
		left: e.left,
		right: e.right
	})),
	ku,
	Au
], (e, t, n) => {
	if (e && t != null && n != null) return {
		x: e.left,
		y: e.top,
		width: Math.max(0, t - e.left - e.right),
		height: Math.max(0, n - e.top - e.bottom)
	};
}), VO = () => V(BO), HO = () => V(oO);
// node_modules/recharts/es6/container/ClipPathProvider.js
function UO(e, t) {
	return JO(e) || qO(e, t) || GO(e, t) || WO();
}
function WO() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function GO(e, t) {
	if (e) {
		if (typeof e == "string") return KO(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? KO(e, t) : void 0;
	}
}
function KO(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function qO(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function JO(e) {
	if (Array.isArray(e)) return e;
}
var YO = /*#__PURE__*/ (0, F.createContext)(void 0), XO = (e) => {
	var t = e.children, n = UO((0, F.useState)(`${vt("recharts")}-clip`), 1)[0], r = VO();
	if (r == null) return null;
	var i = r.x, a = r.y, o = r.width, s = r.height;
	return /*#__PURE__*/ F.createElement(YO.Provider, { value: n }, /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement("clipPath", { id: n }, /*#__PURE__*/ F.createElement("rect", {
		x: i,
		y: a,
		height: s,
		width: o
	}))), t);
}, ZO = () => (0, F.useContext)(YO), QO = H((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, n) => n, (e, t, n) => {
	if (t != null) {
		var r = e[t];
		if (r != null) return n ? r.panoramaElement : r.element;
	}
}), $O = H((e) => e.zIndex.zIndexMap, (e) => {
	var t = Object.keys(e).map((e) => parseInt(e, 10)).concat(Object.values(J));
	return Array.from(new Set(t)).sort((e, t) => e - t);
}, { memoizeOptions: { resultEqualityCheck: B_ } });
// node_modules/recharts/es6/state/zIndexSlice.js
function ek(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ek(Object(n), !0).forEach(function(t) {
			nk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ek(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function nk(e, t, n) {
	return (t = rk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function rk(e) {
	var t = ik(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ik(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ak = { zIndexMap: Object.values(J).reduce((e, t) => tk(tk({}, e), {}, { [t]: {
	element: void 0,
	panoramaElement: void 0,
	consumers: 0
} }), {}) }, ok = new Set(Object.values(J));
function sk(e) {
	return ok.has(e);
}
var ck = Xc({
	name: "zIndex",
	initialState: ak,
	reducers: {
		registerZIndexPortal: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] ? e.zIndexMap[n].consumers += 1 : e.zIndexMap[n] = {
					consumers: 1,
					element: void 0,
					panoramaElement: void 0
				};
			},
			prepare: Fc()
		},
		unregisterZIndexPortal: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] && (--e.zIndexMap[n].consumers, e.zIndexMap[n].consumers <= 0 && !sk(n) && delete e.zIndexMap[n]);
			},
			prepare: Fc()
		},
		registerZIndexPortalElement: {
			reducer: (e, t) => {
				var n = t.payload, r = n.zIndex, i = n.element, a = n.isPanorama;
				e.zIndexMap[r] ? a ? e.zIndexMap[r].panoramaElement = U(i) : e.zIndexMap[r].element = U(i) : e.zIndexMap[r] = {
					consumers: 0,
					element: a ? void 0 : U(i),
					panoramaElement: a ? U(i) : void 0
				};
			},
			prepare: Fc()
		},
		unregisterZIndexPortalElement: {
			reducer: (e, t) => {
				var n = t.payload.zIndex;
				e.zIndexMap[n] && (t.payload.isPanorama ? e.zIndexMap[n].panoramaElement = void 0 : e.zIndexMap[n].element = void 0);
			},
			prepare: Fc()
		}
	}
}), lk = ck.actions, uk = lk.registerZIndexPortal, dk = lk.unregisterZIndexPortal, fk = lk.registerZIndexPortalElement, pk = lk.unregisterZIndexPortalElement, mk = ck.reducer;
// node_modules/recharts/es6/zIndex/ZIndexLayer.js
function hk(e) {
	var t = e.zIndex, n = e.children, r = Hd() && t !== void 0 && t !== 0, i = Xu(), a = (0, F.useRef)(void 0), o = (0, F.useRef)(/* @__PURE__ */ new Set()), s = B(), c = V((e) => QO(e, t, i));
	if ((0, F.useLayoutEffect)(() => {
		if (!r) {
			var e = o.current;
			e.forEach((e) => {
				s(dk({ zIndex: e }));
			}), e.clear(), a.current = void 0;
		} else if (o.current.has(t) || (s(uk({ zIndex: t })), o.current.add(t)), c) {
			a.current = c;
			var n = o.current;
			n.forEach((e) => {
				e !== t && (s(dk({ zIndex: e })), n.delete(e));
			});
		}
	}, [
		s,
		t,
		r,
		c
	]), (0, F.useLayoutEffect)(() => {
		var e = o.current;
		return () => {
			e.forEach((e) => {
				s(dk({ zIndex: e }));
			}), e.clear();
		};
	}, [s]), !r) return n;
	var l = c ?? a.current;
	return l ? /*#__PURE__*/ (0, Ne.createPortal)(n, l) : null;
}
// node_modules/recharts/es6/component/Cursor.js
function gk() {
	return gk = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, gk.apply(null, arguments);
}
function _k(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function vk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _k(Object(n), !0).forEach(function(t) {
			yk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _k(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function yk(e, t, n) {
	return (t = bk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bk(e) {
	var t = xk(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xk(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Sk = {
	stroke: "#ccc",
	fill: "#ccc"
};
function Ck(e) {
	var t = e.cursor, n = e.cursorComp, r = e.cursorProps;
	return /*#__PURE__*/ (0, F.isValidElement)(t) ? /*#__PURE__*/ (0, F.cloneElement)(t, r) : /*#__PURE__*/ (0, F.createElement)(n, r);
}
function wk(e) {
	var t = e.coordinate, n = e.payload, r = e.index, i = e.offset, a = e.tooltipAxisBandSize, o = e.layout, s = e.cursor, c = e.tooltipEventType, u = e.chartName, d = Be(s) ?? {}, f = mr(), p = Ti((e) => {
		if (!/*#__PURE__*/ (0, F.isValidElement)(s)) return u === "ScatterChart" ? Cr(e.cursor) : e.cursor;
	}, d, Sk), m = f == null ? p : {}, h = f?.cursor != null && !/*#__PURE__*/ (0, F.isValidElement)(s) ? p : {}, g = ZO(), _ = V(eD) ?? !1, v = t, y = n, b = r;
	if (!s || !v || u !== "ScatterChart" && c !== "axis") return null;
	var x, S, C;
	if (u === "ScatterChart") x = v, S = vm, C = J.cursorLine;
	else if (u === "BarChart") x = ym(o, v, i, a), S = Mh, C = J.cursorRectangle;
	else if (o === "radial" && mi(v)) {
		var w = Jh(v), T = w.cx, E = w.cy, D = w.radius;
		x = {
			cx: T,
			cy: E,
			startAngle: w.startAngle,
			endAngle: w.endAngle,
			innerRadius: D,
			outerRadius: D
		}, S = ug, C = J.cursorLine;
	} else x = { points: dg(o, v, i) }, S = sm, C = J.cursorLine;
	var O = typeof s == "object" && "className" in s ? s.className : void 0, k = vk(vk(vk(vk(vk(vk({}, m), {}, { pointerEvents: "none" }, i), x), d), h), {}, {
		payload: y,
		payloadIndex: b,
		className: l("recharts-tooltip-cursor", O)
	}), A = /*#__PURE__*/ F.createElement(Ck, {
		cursor: s,
		cursorComp: S,
		cursorProps: k
	});
	return /*#__PURE__*/ F.createElement(hk, { zIndex: e.zIndex ?? C }, _ && g ? /*#__PURE__*/ F.createElement("g", { clipPath: `url(#${g})` }, A) : A);
}
function Tk(e) {
	var t = pO(), n = Pd(), r = Rd(), i = CO();
	return t == null || n == null || r == null || i == null ? null : /*#__PURE__*/ F.createElement(wk, gk({}, e, {
		offset: n,
		layout: r,
		tooltipAxisBandSize: t,
		chartName: i
	}));
}
// node_modules/recharts/es6/context/tooltipPortalContext.js
var Ek = /*#__PURE__*/ (0, F.createContext)(null), Dk = () => (0, F.useContext)(Ek), Ok = (/* @__PURE__ */ i((/* @__PURE__ */ n(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
})))(), 1)).default, kk = new Ok(), Ak = "recharts.syncEvent.tooltip", jk = "recharts.syncEvent.brush", Mk = (e, t) => {
	if (t && Array.isArray(e)) {
		var n = Number.parseInt(t, 10);
		if (!mt(n)) return e[n];
	}
}, Nk = Xc({
	name: "options",
	initialState: {
		chartName: "",
		tooltipPayloadSearcher: () => void 0,
		eventEmitter: void 0,
		defaultTooltipEventType: "axis"
	},
	reducers: { createEventEmitter: (e) => {
		e.eventEmitter ??= Symbol("rechartsEventEmitter");
	} }
}), Pk = Nk.reducer, Fk = Nk.actions.createEventEmitter;
// node_modules/recharts/es6/synchronisation/syncSelectors.js
function Ik(e) {
	return e.tooltip.syncInteraction;
}
// node_modules/recharts/es6/synchronisation/useChartSynchronisation.js
var Lk = ["x", "y"];
function Rk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function zk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Rk(Object(n), !0).forEach(function(t) {
			Bk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Bk(e, t, n) {
	return (t = Vk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Vk(e) {
	var t = Hk(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Hk(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Uk(e, t) {
	if (e == null) return {};
	var n, r, i = Wk(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Wk(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Gk() {
	var e = V(s_), t = V(l_), n = B(), r = V(c_), i = V(JD), a = Rd(), o = Md(), s = V((e) => e.rootProps.className);
	(0, F.useEffect)(() => {
		if (e == null) return wt;
		var s = (s, c, l) => {
			if (t !== l && e === s) {
				if (c.payload.active === !1) n(NE({
					active: !1,
					coordinate: void 0,
					dataKey: void 0,
					index: null,
					label: void 0,
					sourceViewBox: void 0,
					graphicalItemId: void 0
				}));
				else if (r === "index") {
					var u;
					if (o && c != null && (u = c.payload) != null && u.coordinate && c.payload.sourceViewBox) {
						var d = c.payload.coordinate, f = d.x, p = d.y, m = Uk(d, Lk), h = c.payload.sourceViewBox, g = h.x, _ = h.y, v = h.width, y = h.height, b = zk(zk({}, m), {}, {
							x: o.x + (v ? (f - g) / v : 0) * o.width,
							y: o.y + (y ? (p - _) / y : 0) * o.height
						}), x = i?.find((e) => String(e.index) === String(c.payload.index));
						x != null && (a === "horizontal" ? b.x = x.coordinate : a === "vertical" && (b.y = x.coordinate)), n(zk(zk({}, c), {}, { payload: zk(zk({}, c.payload), {}, { coordinate: b }) }));
					} else n(c);
				} else if (i != null) {
					var S;
					typeof r == "function" ? S = i[r(i, {
						activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
						isTooltipActive: c.payload.active,
						activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index),
						activeLabel: c.payload.label,
						activeDataKey: c.payload.dataKey,
						activeCoordinate: c.payload.coordinate
					})] : r === "value" && (S = i.find((e) => String(e.value) === c.payload.label));
					var C = c.payload.coordinate;
					if (C == null || o == null) n(NE({
						active: !1,
						coordinate: void 0,
						dataKey: void 0,
						index: null,
						label: void 0,
						sourceViewBox: void 0,
						graphicalItemId: void 0
					}));
					else if (S == null) n(NE({
						active: !1,
						coordinate: void 0,
						dataKey: void 0,
						index: null,
						label: void 0,
						sourceViewBox: c.payload.sourceViewBox,
						graphicalItemId: void 0
					}));
					else {
						var w = C.x, T = C.y, E = Math.min(w, o.x + o.width), D = Math.min(T, o.y + o.height), O = {
							x: a === "horizontal" ? S.coordinate : E,
							y: a === "horizontal" ? D : S.coordinate
						};
						n(NE({
							active: c.payload.active,
							coordinate: O,
							dataKey: c.payload.dataKey,
							index: String(S.index),
							label: c.payload.label,
							sourceViewBox: c.payload.sourceViewBox,
							graphicalItemId: c.payload.graphicalItemId
						}));
					}
				}
			}
		};
		return kk.on(Ak, s), () => {
			kk.off(Ak, s);
		};
	}, [
		s,
		n,
		t,
		e,
		r,
		i,
		a,
		o
	]);
}
function Kk() {
	var e = V(s_), t = V(l_), n = B();
	(0, F.useEffect)(() => {
		if (e == null) return wt;
		var r = (r, i, a) => {
			t !== a && e === r && n(Lg(i));
		};
		return kk.on(jk, r), () => {
			kk.off(jk, r);
		};
	}, [
		n,
		t,
		e
	]);
}
function qk() {
	var e = B();
	(0, F.useEffect)(() => {
		e(Fk());
	}, [e]), Gk(), Kk();
}
function Jk(e, t, n, r, i, a) {
	var o = V((n) => AO(n, e, t)), s = V(nO), c = V(l_), l = V(s_), u = V(c_), d = V(Ik)?.sourceViewBox != null, f = Md(), p = (0, F.useRef)(!1);
	(0, F.useEffect)(() => l == null || c == null ? wt : () => {
		p.current && (p.current = !1, kk.emit(Ak, l, NE({
			active: !1,
			coordinate: void 0,
			dataKey: void 0,
			index: null,
			label: void 0,
			sourceViewBox: void 0,
			graphicalItemId: void 0
		}), c));
	}, [l, c]), (0, F.useEffect)(() => {
		if (d) p.current = !1;
		else if (l != null && c != null) {
			var e = NE({
				active: a,
				coordinate: n,
				dataKey: o,
				index: i,
				label: typeof r == "number" ? String(r) : r,
				sourceViewBox: f,
				graphicalItemId: s
			});
			p.current = a, kk.emit(Ak, l, e, c);
		}
	}, [
		d,
		n,
		o,
		s,
		i,
		r,
		c,
		l,
		u,
		a,
		f
	]);
}
// node_modules/recharts/es6/component/Tooltip.js
function Yk(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Xk(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Yk(Object(n), !0).forEach(function(t) {
			Zk(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yk(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Zk(e, t, n) {
	return (t = Qk(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Qk(e) {
	var t = $k(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function $k(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function eA(e, t) {
	return aA(e) || iA(e, t) || nA(e, t) || tA();
}
function tA() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function nA(e, t) {
	if (e) {
		if (typeof e == "string") return rA(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rA(e, t) : void 0;
	}
}
function rA(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function iA(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function aA(e) {
	if (Array.isArray(e)) return e;
}
function oA(e) {
	return e.dataKey;
}
function sA(e, t) {
	return /*#__PURE__*/ F.isValidElement(e) ? /*#__PURE__*/ F.cloneElement(e, t) : typeof e == "function" ? /*#__PURE__*/ F.createElement(e, t) : /*#__PURE__*/ F.createElement(hp, t);
}
var cA = [], lA = {
	allowEscapeViewBox: {
		x: !1,
		y: !1
	},
	animationDuration: 400,
	animationEasing: "ease",
	axisId: 0,
	contentStyle: {},
	cursor: !0,
	filterNull: !0,
	includeHidden: !1,
	isAnimationActive: "auto",
	itemSorter: "name",
	itemStyle: {},
	labelStyle: {},
	offset: 10,
	reverseDirection: {
		x: !1,
		y: !1
	},
	separator: " : ",
	trigger: "hover",
	useTranslate3d: !1,
	wrapperStyle: {}
};
function uA(e) {
	var t = Ci(e, lA), n = t.active, r = t.allowEscapeViewBox, i = t.animationDuration, a = t.animationEasing, o = t.content, s = t.filterNull, c = t.isAnimationActive, l = t.offset, u = t.payloadUniqBy, d = t.position, f = t.reverseDirection, p = t.useTranslate3d, m = t.wrapperStyle, h = t.cursor, g = t.shared, _ = t.trigger, v = t.defaultIndex, y = t.portal, b = t.axisId, x = B(), S = typeof v == "number" ? String(v) : v;
	(0, F.useEffect)(() => {
		x(EE({
			shared: g,
			trigger: _,
			axisId: b,
			active: n,
			defaultIndex: S
		}));
	}, [
		x,
		g,
		_,
		b,
		n,
		S
	]);
	var C = Md(), w = Gp(), T = _E(g), E = V((e) => IO(e, T, _, S)) ?? {}, D = E.activeIndex, O = E.isActive, k = V((e) => FO(e, T, _, S)), A = V((e) => PO(e, T, _, S)), j = V((e) => NO(e, T, _, S)), M = k, N = Dk(), P = n ?? O ?? !1, ee = eA(Wo([M, P]), 2), te = ee[0], ne = ee[1], re = T === "axis" ? A : void 0;
	Jk(T, _, j, re, D, P);
	var ie = y ?? N;
	if (ie == null || C == null || T == null) return null;
	var ae = M ?? cA;
	P || (ae = cA), s && ae.length && (ae = no(ae.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)), u, oA));
	var oe = ae.length > 0, se = Xk(Xk({}, t), {}, {
		payload: ae,
		label: re,
		active: P,
		activeIndex: D,
		coordinate: j,
		accessibilityLayer: w
	}), ce = /*#__PURE__*/ F.createElement(Wp, {
		allowEscapeViewBox: r,
		animationDuration: i,
		animationEasing: a,
		isAnimationActive: c,
		active: P,
		coordinate: j,
		hasPayload: oe,
		offset: l,
		position: d,
		reverseDirection: f,
		useTranslate3d: p,
		viewBox: C,
		wrapperStyle: m,
		lastBoundingBox: te,
		innerRef: ne,
		hasPortalFromProps: !!y
	}, sA(o, se));
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ (0, Ne.createPortal)(ce, ie), P && /*#__PURE__*/ F.createElement(Tk, {
		cursor: h,
		tooltipEventType: T,
		coordinate: j,
		payload: ae,
		index: D
	}));
}
// node_modules/recharts/es6/component/Cell.js
var dA = (e) => null;
dA.displayName = "Cell";
// node_modules/recharts/es6/util/LRUCache.js
function fA(e, t, n) {
	return (t = pA(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pA(e) {
	var t = mA(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mA(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var hA = class {
	constructor(e) {
		fA(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = e;
	}
	get(e) {
		if (this.cache.has(e)) {
			var t = this.cache.get(e);
			return this.cache.delete(e), this.cache.set(e, t), t;
		}
	}
	set(e, t) {
		if (this.cache.has(e)) this.cache.delete(e);
		else if (this.cache.size >= this.maxSize) {
			var n = this.cache.keys().next();
			n.done || this.cache.delete(n.value);
		}
		this.cache.set(e, t);
	}
	clear() {
		this.cache.clear();
	}
	size() {
		return this.cache.size;
	}
};
// node_modules/recharts/es6/util/DOMUtils.js
function gA(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _A(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? gA(Object(n), !0).forEach(function(t) {
			vA(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gA(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function vA(e, t, n) {
	return (t = yA(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function yA(e) {
	var t = bA(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function bA(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var xA = _A({}, {
	cacheSize: 2e3,
	enableCache: !0
}), SA = new hA(xA.cacheSize), CA = {
	position: "absolute",
	top: "-20000px",
	left: 0,
	padding: 0,
	margin: 0,
	border: "none",
	whiteSpace: "pre"
}, wA = "recharts_measurement_span";
function TA(e, t) {
	return `${e}|${t.fontSize || ""}|${t.fontFamily || ""}|${t.fontWeight || ""}|${t.fontStyle || ""}|${t.letterSpacing || ""}|${t.textTransform || ""}`;
}
var EA = (e, t) => {
	try {
		var n = document.getElementById(wA);
		n || (n = document.createElement("span"), n.setAttribute("id", wA), n.setAttribute("aria-hidden", "true"), document.body.appendChild(n)), Object.assign(n.style, CA, t), n.textContent = `${e}`;
		var r = n.getBoundingClientRect();
		return {
			width: r.width,
			height: r.height
		};
	} catch {
		return {
			width: 0,
			height: 0
		};
	}
}, DA = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (e == null || Sp.isSsr) return {
		width: 0,
		height: 0
	};
	if (!xA.enableCache) return EA(e, t);
	var n = TA(e, t), r = SA.get(n);
	if (r) return r;
	var i = EA(e, t);
	return SA.set(n, i), i;
}, OA;
function kA(e, t) {
	return PA(e) || NA(e, t) || jA(e, t) || AA();
}
function AA() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function jA(e, t) {
	if (e) {
		if (typeof e == "string") return MA(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? MA(e, t) : void 0;
	}
}
function MA(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function NA(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function PA(e) {
	if (Array.isArray(e)) return e;
}
function FA(e, t, n) {
	return (t = IA(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function IA(e) {
	var t = LA(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function LA(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var RA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, zA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, BA = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, VA = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, HA = {
	cm: 96 / 2.54,
	mm: 96 / 25.4,
	pt: 96 / 72,
	pc: 16,
	in: 96,
	Q: 96 / 101.6,
	px: 1
}, UA = [
	"cm",
	"mm",
	"pt",
	"pc",
	"in",
	"Q",
	"px"
];
function WA(e) {
	return UA.includes(e);
}
var GA = "NaN";
function KA(e, t) {
	return e * HA[t];
}
var qA = class e {
	static parse(t) {
		var n = kA(VA.exec(t) ?? [], 3), r = n[1], i = n[2];
		return r == null ? e.NaN : new e(parseFloat(r), i ?? "");
	}
	constructor(e, t) {
		this.num = e, this.unit = t, this.num = e, this.unit = t, mt(e) && (this.unit = ""), t !== "" && !BA.test(t) && (this.num = NaN, this.unit = ""), WA(t) && (this.num = KA(e, t), this.unit = "px");
	}
	add(t) {
		return this.unit === t.unit ? new e(this.num + t.num, this.unit) : new e(NaN, "");
	}
	subtract(t) {
		return this.unit === t.unit ? new e(this.num - t.num, this.unit) : new e(NaN, "");
	}
	multiply(t) {
		return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new e(NaN, "") : new e(this.num * t.num, this.unit || t.unit);
	}
	divide(t) {
		return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new e(NaN, "") : new e(this.num / t.num, this.unit || t.unit);
	}
	toString() {
		return `${this.num}${this.unit}`;
	}
	isNaN() {
		return mt(this.num);
	}
};
OA = qA, FA(qA, "NaN", new OA(NaN, ""));
function JA(e) {
	if (e == null || e.includes(GA)) return GA;
	for (var t = e; t.includes("*") || t.includes("/");) {
		var n = kA(RA.exec(t) ?? [], 4), r = n[1], i = n[2], a = n[3], o = qA.parse(r ?? ""), s = qA.parse(a ?? ""), c = i === "*" ? o.multiply(s) : o.divide(s);
		if (c.isNaN()) return GA;
		t = t.replace(RA, c.toString());
	}
	for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t);) {
		var l = kA(zA.exec(t) ?? [], 4), u = l[1], d = l[2], f = l[3], p = qA.parse(u ?? ""), m = qA.parse(f ?? ""), h = d === "+" ? p.add(m) : p.subtract(m);
		if (h.isNaN()) return GA;
		t = t.replace(zA, h.toString());
	}
	return t;
}
var YA = /\(([^()]*)\)/;
function XA(e) {
	for (var t = e, n, r = function() {
		var e = kA(n, 2)[1], r = JA(e);
		t = t.replace(YA, () => r);
	}; (n = YA.exec(t)) != null;) r();
	return t;
}
var ZA = 1e3;
function QA(e) {
	if (e.length > ZA) return GA;
	var t = e.replace(/\s+/g, "");
	return t = XA(t), t = JA(t), t;
}
function $A(e) {
	try {
		return QA(e);
	} catch {
		return GA;
	}
}
function ej(e) {
	var t = $A(e.slice(5, -1));
	return t === GA ? "" : t;
}
// node_modules/recharts/es6/theme/cssStylesToSvgStyles.js
function tj(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function nj(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? tj(Object(n), !0).forEach(function(t) {
			rj(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tj(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function rj(e, t, n) {
	return (t = ij(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ij(e) {
	var t = aj(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function aj(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function oj(e) {
	return e.fill != null || e.color == null ? e : nj(nj({}, e), {}, { fill: e.color });
}
// node_modules/recharts/es6/zIndex/labelBackgroundZIndex.js
var sj = /*#__PURE__*/ (0, F.createContext)(void 0), cj = sj.Provider;
function lj() {
	return (0, F.useContext)(sj);
}
var uj = J.label - J.labelBackground;
function dj(e, t) {
	var n = typeof t == "object" ? t.zIndex : void 0;
	if (e == null || e === 0) return n;
	var r = n ?? e - uj;
	return r === 0 ? -1 : r;
}
// node_modules/recharts/es6/component/Text.js
var fj = [
	"x",
	"y",
	"lineHeight",
	"capHeight",
	"scaleToFit",
	"textAnchor",
	"verticalAnchor",
	"style",
	"textPath",
	"background",
	"halo"
], pj = [
	"angle",
	"dx",
	"dy",
	"className",
	"breakAll"
], mj = ["startOffset"], hj = ["padding", "className"], gj = [
	"fillOpacity",
	"stroke",
	"strokeOpacity",
	"strokeWidth"
];
function _j() {
	return _j = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _j.apply(null, arguments);
}
function vj(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function yj(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? vj(Object(n), !0).forEach(function(t) {
			bj(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vj(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function bj(e, t, n) {
	return (t = xj(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xj(e) {
	var t = Sj(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Sj(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Cj(e, t) {
	if (e == null) return {};
	var n, r, i = wj(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function wj(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Tj(e, t) {
	return Aj(e) || kj(e, t) || Dj(e, t) || Ej();
}
function Ej() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Dj(e, t) {
	if (e) {
		if (typeof e == "string") return Oj(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oj(e, t) : void 0;
	}
}
function Oj(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function kj(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Aj(e) {
	if (Array.isArray(e)) return e;
}
var jj = /[ \f\n\r\t\v\u2028\u2029]+/, Mj, Nj = () => {
	var e = typeof Intl > "u" ? void 0 : Intl.Segmenter;
	return typeof e == "function" ? (Mj === void 0 && (Mj = new e(void 0, { granularity: "grapheme" })), Mj) : null;
}, Pj = (e) => {
	var t = Nj();
	return t == null ? Array.from(e) : Array.from(t.segment(e), (e) => e.segment);
}, Fj = (e) => {
	var t = e.children, n = e.breakAll, r = e.style;
	try {
		var i = [];
		return R(t) || (i = n ? Pj(t.toString()) : t.toString().split(jj)), {
			wordsWithComputedWidth: i.map((e) => ({
				word: e,
				width: DA(e, r).width
			})),
			spaceWidth: n ? 0 : DA("\xA0", r).width
		};
	} catch {
		return null;
	}
};
function Ij(e) {
	return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function Lj(e) {
	return R(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var Rj = (e, t, n, r) => e.reduce((e, i) => {
	var a = i.word, o = i.width, s = e[e.length - 1];
	if (s && o != null && (t == null || r || s.width + o + n < Number(t))) s.words.push(a), s.width += o + n;
	else {
		var c = {
			words: [a],
			width: o
		};
		e.push(c);
	}
	return e;
}, []), zj = (e) => e.reduce((e, t) => e.width > t.width ? e : t), Bj = "…", Vj = (e, t, n, r, i, a, o, s) => {
	var c = Fj({
		breakAll: n,
		style: r,
		children: e.slice(0, t).join("") + Bj
	});
	if (!c) return [!1, []];
	var l = Rj(c.wordsWithComputedWidth, a, o, s);
	return [l.length > i || zj(l).width > Number(a), l];
}, Hj = (e, t, n, r, i) => {
	var a = e.maxLines, o = e.children, s = e.style, c = e.breakAll, l = I(a), u = Rj(t, r, n, i);
	if (!l || i || u.length === 0 || !(u.length > a || zj(u).width > Number(r))) return u;
	for (var d = Pj(String(o)), f = 0, p = d.length - 1, m; f <= p;) {
		var h = Math.floor((f + p) / 2), g = Tj(Vj(d, h, c, s, a, r, n, i), 2), _ = g[0], v = g[1];
		_ ? p = h - 1 : (m = v, f = h + 1);
	}
	return m || u;
}, Uj = (e) => [{
	words: R(e) ? [] : e.toString().split(jj),
	width: void 0
}], Wj = (e) => {
	var t = e.width, n = e.scaleToFit, r = e.children, i = e.style, a = e.breakAll, o = e.maxLines;
	if ((t || n) && !Sp.isSsr) {
		var s, c, l = Fj({
			breakAll: a,
			children: r,
			style: i
		});
		if (l) {
			var u = l.wordsWithComputedWidth, d = l.spaceWidth;
			s = u, c = d;
		} else return Uj(r);
		return Hj({
			breakAll: a,
			children: r,
			maxLines: o,
			style: i
		}, s, c, t, !!n);
	}
	return Uj(r);
}, Gj = { fill: "#808080" }, Kj = { fill: "#fff" }, qj = {
	x: 4,
	y: 2
}, Jj = 4;
function Yj(e) {
	var t = hr(e);
	return typeof t == "string" ? { fill: t } : void 0;
}
var Xj = { stroke: "#fff" }, Zj = 3, Qj = "round";
function $j(e) {
	var t = hr(e);
	return typeof t == "string" ? { stroke: t } : void 0;
}
function eM(e) {
	return I(e) ? {
		x: e,
		y: e
	} : {
		x: e?.x ?? qj.x,
		y: e?.y ?? qj.y
	};
}
function tM(e, t) {
	if (e.width <= 0 || e.height <= 0) return null;
	var n = eM(t), r = n.x, i = n.y;
	return {
		x: e.x - r,
		y: e.y - i,
		width: e.width + 2 * r,
		height: e.height + 2 * i
	};
}
function nM(e, t, n) {
	var r = e.pathLength, i = e.textLength, a = e.textHeight, o = e.startOffset;
	if (r <= 0 || i <= 0 || a <= 0) return null;
	var s = eM(t), c = s.x, l = s.y, u = 0;
	n === "middle" ? u = i / 2 : n === "end" && (u = i);
	var d = o - u - c, f = o - u + i + c, p = Math.max(0, Math.min(r, d)), m = Math.max(0, Math.min(r, f));
	return m <= p ? null : {
		start: p,
		length: m - p,
		strokeWidth: a + 2 * l
	};
}
function rM(e, t) {
	return e != null && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function iM(e, t) {
	return e != null && e.pathLength === t.pathLength && e.textLength === t.textLength && e.textHeight === t.textHeight && e.startOffset === t.startOffset;
}
function aM(e, t, n) {
	var r = e.startOffset?.baseVal.value;
	if (W(r)) return r;
	if (I(t)) return t;
	if (typeof t == "string") {
		var i = Number.parseFloat(t);
		if (Number.isFinite(i)) return t.trim().endsWith("%") ? i / 100 * n : i;
	}
	return 0;
}
function oM(e, t) {
	var n = Number.parseFloat(window.getComputedStyle(e).fontSize);
	return Number.isFinite(n) && n > 0 ? n : t.getBBox().height;
}
function sM(e) {
	if (e == null) return 1;
	var t = I(e) ? e : Number.parseFloat(e);
	return Number.isFinite(t) ? Math.max(0, t) : 1;
}
function cM(e) {
	if (e === !0) return {};
	if (e != null && e !== !1) return e;
}
function lM(e) {
	if (e === !0) return {};
	if (e != null && e !== !1) return e;
}
var uM = {
	angle: 0,
	breakAll: !1,
	capHeight: "0.71em",
	lineHeight: "1em",
	scaleToFit: !1,
	textAnchor: "start",
	verticalAnchor: "end",
	x: 0,
	y: 0
}, dM = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = Ti((e) => e.typography, { fill: e.fill }, Gj), r = Ci(e, uM), i = dr(), a = r.x, o = r.y, s = r.lineHeight, c = r.capHeight, u = r.scaleToFit, d = r.textAnchor, f = r.verticalAnchor, p = r.style, m = r.textPath, h = r.background, g = r.halo, _ = Cj(r, fj), v = _.angle, y = _.dx, b = _.dy, x = _.className, S = _.breakAll, C = Cj(_, pj), w = C.startOffset, T = Cj(C, mj), E = C.width, D = Number(a) + (I(y) ? y : 0), O = Number(o) + (I(b) ? b : 0), k = (0, F.useMemo)(() => oj(yj(yj({}, n), p)), [p, n]), A = (0, F.useMemo)(() => Wj({
		breakAll: _.breakAll,
		children: _.children,
		maxLines: _.maxLines,
		scaleToFit: u,
		style: k,
		width: _.width
	}), [
		_.breakAll,
		_.children,
		_.maxLines,
		u,
		k,
		_.width
	]), j = (0, F.useMemo)(() => {
		var e = [], t = A[0];
		if (u && t != null) {
			var n = t.width;
			e.push(`scale(${I(E) && I(n) ? E / n : 1})`);
		}
		return v && m == null && e.push(`rotate(${v}, ${D}, ${O})`), e;
	}, [
		u,
		A,
		E,
		v,
		D,
		O,
		m
	]), M = (0, F.useMemo)(() => {
		var e = v && m != null ? `rotate(${v}deg)` : void 0;
		return yj(yj({}, e == null ? {} : {
			transform: e,
			transformOrigin: "center",
			transformBox: "fill-box"
		}), k);
	}, [
		k,
		v,
		m
	]), N = lM(g), P = Ti($j, { stroke: N?.stroke }, Xj), ee = N == null ? void 0 : {
		stroke: P.stroke,
		strokeWidth: N.strokeWidth ?? Zj,
		strokeLinejoin: N.strokeLinejoin ?? Qj,
		strokeOpacity: N.strokeOpacity,
		paintOrder: "stroke fill"
	}, te = cM(h), ne = Ti(Yj, { fill: te?.fill }, Kj), re = lj(), ie = re == null ? void 0 : dj(re, h), ae = (0, F.useRef)(null), oe = (0, F.useRef)(null), se = (0, F.useRef)(null), ce = (0, F.useCallback)((e) => {
		ae.current = e, typeof t == "function" ? t(e) : t != null && (t.current = e);
	}, [t]), le = Tj((0, F.useState)(null), 2), ue = le[0], de = le[1], fe = Tj((0, F.useState)(null), 2), pe = fe[0], me = fe[1], he = te != null;
	if ((0, F.useLayoutEffect)(() => {
		var e = ae.current;
		if (he && e != null && typeof e.getBBox == "function") try {
			if (m != null) {
				var t = oe.current, n = se.current;
				if (t == null || n == null || typeof t.getComputedTextLength != "function" || typeof n.getTotalLength != "function") return;
				var r = n.getTotalLength(), i = {
					pathLength: r,
					textLength: t.getComputedTextLength(),
					textHeight: oM(t, e),
					startOffset: aM(t, w, r)
				};
				iM(pe, i) || me(i);
				return;
			}
			var a = e.getBBox(), o = {
				x: a.x,
				y: a.y,
				width: a.width,
				height: a.height
			};
			rM(ue, o) || de(o);
		} catch {}
	}), !gt(a) || !gt(o) || A.length === 0 || !W(D) || !W(O)) return null;
	var ge;
	switch (f) {
		case "start":
			ge = ej(`calc(${c})`);
			break;
		case "middle":
			ge = ej(`calc(${(A.length - 1) / 2} * -${s} + (${c} / 2))`);
			break;
		default: ge = ej(`calc(${A.length - 1} * -${s})`);
	}
	var _e = j.length > 0 ? j.join(" ") : void 0, ve = /*#__PURE__*/ F.createElement("text", _j({ transform: _e }, Ve(T), ee, {
		style: M,
		ref: ce,
		x: D,
		y: O,
		className: l("recharts-text", x),
		textAnchor: d
	}), m == null ? A.map((e, t) => {
		var n = e.words.join(S ? "" : " ");
		return /*#__PURE__*/ F.createElement("tspan", {
			x: D,
			dy: t === 0 ? ge : s,
			key: `${n}-${t}`
		}, n);
	}) : /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement("path", {
		ref: se,
		id: i,
		d: m
	})), /*#__PURE__*/ F.createElement("textPath", {
		ref: oe,
		xlinkHref: `#${i}`,
		startOffset: w
	}, _.children)));
	if (te == null) return ve;
	var ye = te.padding, be = te.className, xe = Cj(te, hj), Se = (e) => ie == null ? e : /*#__PURE__*/ F.createElement(hk, { zIndex: ie }, e);
	if (m != null) {
		var Ce = xe.fillOpacity, we = xe.stroke, Te = xe.strokeOpacity, Ee = xe.strokeWidth, De = Cj(xe, gj), Oe = pe == null ? null : nM(pe, ye, d), ke = sM(Ee), Ae = we != null && we !== "none" && ke > 0, je = Oe != null && pe != null && /*#__PURE__*/ F.createElement(F.Fragment, null, Ae && /*#__PURE__*/ F.createElement("path", _j({}, Ve(De), {
			pointerEvents: De.pointerEvents ?? M.pointerEvents ?? _.pointerEvents,
			d: m,
			fill: "none",
			stroke: we,
			strokeOpacity: Te,
			strokeWidth: Oe.strokeWidth + 2 * ke,
			strokeLinecap: "round",
			strokeDasharray: `${Oe.length}px ${pe.pathLength}px`,
			strokeDashoffset: `${-Oe.start}px`,
			className: l("recharts-text-background", "recharts-text-path-background-outline", be)
		})), /*#__PURE__*/ F.createElement("path", _j({}, Ve(De), {
			pointerEvents: De.pointerEvents ?? M.pointerEvents ?? _.pointerEvents,
			d: m,
			fill: "none",
			stroke: ne.fill,
			strokeOpacity: Ce,
			strokeWidth: Oe.strokeWidth,
			strokeLinecap: "round",
			strokeDasharray: `${Oe.length}px ${pe.pathLength}px`,
			strokeDashoffset: `${-Oe.start}px`,
			className: l("recharts-text-background", "recharts-text-path-background", be)
		})));
		return /*#__PURE__*/ F.createElement("g", { className: "recharts-text-with-background" }, Se(je), ve);
	}
	var Me = ue == null ? null : tM(ue, ye), Ne = Me != null && /*#__PURE__*/ F.createElement("rect", _j({ rx: Jj }, Ve(xe), {
		pointerEvents: xe.pointerEvents ?? M.pointerEvents ?? _.pointerEvents,
		fill: ne.fill,
		className: l("recharts-text-background", be),
		transform: _e,
		x: Me.x,
		y: Me.y,
		width: Me.width,
		height: Me.height
	}));
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-text-with-background" }, Se(Ne), ve);
});
dM.displayName = "Text";
// node_modules/recharts/es6/polar/isOutsidePolarPosition.js
var fM = [
	"outside",
	"end",
	"center",
	"centerTop",
	"centerBottom"
];
function pM(e) {
	return fM.some((t) => t === e);
}
// node_modules/recharts/es6/theme/labelTheme.js
var mM = ["fill", "color"];
function hM(e, t) {
	if (e == null) return {};
	var n, r, i = gM(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function gM(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function _M(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function vM(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _M(Object(n), !0).forEach(function(t) {
			yM(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _M(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function yM(e, t, n) {
	return (t = bM(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function bM(e) {
	var t = xM(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function xM(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function SM(e, t) {
	if (e === !1) return !1;
	if (e == null) return t;
	var n = typeof t == "object" ? t : void 0;
	return e === !0 ? n ?? !0 : n == null ? e : vM(vM({}, n), e);
}
function CM(e) {
	if (e == null) return {
		fill: void 0,
		style: void 0
	};
	var t = e.fill, n = e.color, r = hM(e, mM), i = t ?? n;
	return {
		fill: typeof i == "string" ? i : void 0,
		style: r
	};
}
function wM(e, t, n) {
	var r = CM(e?.style), i = r.fill, a = r.style;
	return {
		fill: t.fill ?? i ?? n,
		style: a == null ? t.style : vM(vM({}, a), t.style),
		background: SM(t.background, e?.background)
	};
}
function TM(e) {
	return e != null && e !== "none" && e !== "transparent";
}
var EM = /*#__PURE__*/ (0, F.createContext)(void 0), DM = EM.Provider;
function OM() {
	return (0, F.useContext)(EM);
}
var kM = { hasFilledShapes: !0 };
function AM(e) {
	return (0, F.useMemo)(() => ({
		hasFilledShapes: !1,
		getShapeColors: () => ({ stroke: e })
	}), [e]);
}
function jM(e) {
	var t = e.position, n = e.isPolar, r = e.hasFilledShapes, i = e.shapeColors, a = e.pageBackground, o = e.hasOwnBackground;
	if (!(typeof t == "object" && t)) {
		var s = i.fill, c = i.stroke, l = n ? pM(t) : Nt(t);
		return r && TM(s) && !l && !o ? a : TM(s) ? s : TM(c) ? c : void 0;
	}
}
var MM = /*#__PURE__*/ (0, F.createContext)(!1), NM = MM.Provider;
function PM() {
	var e = mr();
	if (!(0, F.useContext)(MM)) return e?.label;
}
var FM = /*#__PURE__*/ (0, F.createContext)(void 0), IM = FM.Provider;
function LM() {
	return (0, F.useContext)(FM);
}
function RM(e) {
	var t = mr(), n = t == null ? void 0 : e(t)?.label;
	return (0, F.useMemo)(() => n == null ? void 0 : () => n, [n]);
}
function zM(e) {
	return (0, F.useMemo)(() => {
		if (e != null && e.length !== 0) return (t) => e[t % e.length]?.label;
	}, [e]);
}
// node_modules/recharts/es6/component/Label.js
var BM = ["textAnchor", "startOffset"], VM = [
	"labelRef",
	"background",
	"halo"
], HM = ["content"];
function UM(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function WM(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? UM(Object(n), !0).forEach(function(t) {
			GM(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : UM(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function GM(e, t, n) {
	return (t = KM(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function KM(e) {
	var t = qM(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qM(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function JM() {
	return JM = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, JM.apply(null, arguments);
}
function YM(e, t) {
	if (e == null) return {};
	var n, r, i = XM(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function XM(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var ZM = /*#__PURE__*/ (0, F.createContext)(null), QM = (e) => {
	var t = e.x, n = e.y, r = e.upperWidth, i = e.lowerWidth, a = e.width, o = e.height, s = e.children, c = (0, F.useMemo)(() => ({
		x: t,
		y: n,
		upperWidth: r,
		lowerWidth: i,
		width: a,
		height: o
	}), [
		t,
		n,
		r,
		i,
		a,
		o
	]);
	return /*#__PURE__*/ F.createElement(ZM.Provider, { value: c }, s);
}, $M = () => {
	var e = (0, F.useContext)(ZM), t = Md();
	return e || (t ? Tt(t) : void 0);
}, eN = /*#__PURE__*/ (0, F.createContext)(null), tN = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.startAngle, o = e.endAngle, s = e.clockWise, c = e.children, l = (0, F.useMemo)(() => ({
		cx: t,
		cy: n,
		innerRadius: r,
		outerRadius: i,
		startAngle: a,
		endAngle: o,
		clockWise: s
	}), [
		t,
		n,
		r,
		i,
		a,
		o,
		s
	]);
	return /*#__PURE__*/ F.createElement(eN.Provider, { value: l }, c);
}, nN = () => {
	var e = (0, F.useContext)(eN), t = V(M_);
	return e || t;
}, rN = (e) => {
	var t = e.value, n = e.formatter, r = R(e.children) ? t : e.children;
	return typeof n == "function" ? n(r) : r;
}, iN = (e) => e != null && typeof e == "function", aN = (e, t) => pt(t - e) * Math.min(Math.abs(t - e), 360), oN = (e, t, n, r, i, a) => {
	var o = e.offset, s = e.className, c = e.background, u = i.cx, d = i.cy, f = i.innerRadius, p = i.outerRadius, m = i.startAngle, h = i.endAngle, g = i.clockWise, _ = (f + p) / 2, v = aN(m, h), y = v >= 0 ? 1 : -1, b, x;
	switch (t) {
		case "insideStart":
			b = m + y * o, x = g;
			break;
		case "insideEnd":
			b = h - y * o, x = !g;
			break;
		case "end":
			b = h + y * o, x = g;
			break;
		default: throw Error(`Unsupported position ${t}`);
	}
	x = v <= 0 ? x : !x;
	var S = c != null && c !== !1 ? eM(typeof c == "object" ? c.padding : void 0).x : 0, C = x ? 1 : -1, w = r.textAnchor, T = r.startOffset, E = YM(r, BM), D = T == null || I(T) ? S : 0, O = _ > 0 ? D / _ * (180 / Math.PI) : 0, k = b - C * O, A = Vh(u, d, _, k), j = Vh(u, d, _, k + C * 359), M = `M${A.x},${A.y}
    A${_},${_},0,1,${+!x},
    ${j.x},${j.y}`, N = I(T) ? T + D : T ?? (D || void 0);
	return /*#__PURE__*/ F.createElement(dM, JM({}, E, {
		dominantBaseline: "central",
		className: l("recharts-radial-bar-label", s),
		textAnchor: Ij(w) ? w : void 0,
		textPath: M,
		startOffset: N,
		background: c,
		halo: a
	}), n);
}, sN = (e, t, n) => {
	var r = e.cx, i = e.cy, a = e.innerRadius, o = e.outerRadius, s = (e.startAngle + e.endAngle) / 2;
	if (n === "outside") {
		var c = Vh(r, i, o + t, s), l = c.x;
		return {
			x: l,
			y: c.y,
			textAnchor: l >= r ? "start" : "end",
			verticalAnchor: "middle"
		};
	}
	if (n === "center") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
	if (n === "centerTop") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "start"
	};
	if (n === "centerBottom") return {
		x: r,
		y: i,
		textAnchor: "middle",
		verticalAnchor: "end"
	};
	var u = Vh(r, i, (a + o) / 2, s);
	return {
		x: u.x,
		y: u.y,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
}, cN = (e) => e != null && "cx" in e && I(e.cx), lN = {
	angle: 0,
	offset: 5,
	zIndex: J.label,
	position: "middle",
	textBreakAll: !1
};
function uN(e) {
	if (!cN(e)) return e;
	var t = e.cx, n = e.cy, r = e.outerRadius, i = r * 2;
	return {
		x: t - r,
		y: n - r,
		width: i,
		upperWidth: i,
		lowerWidth: i,
		height: i
	};
}
function dN(e) {
	var t = PM(), n = Ci(t == null ? e : WM(WM({}, e), wM(t, e)), lN), r = n.viewBox, i = n.parentViewBox, a = n.position, o = n.value, s = n.children, c = n.content, u = n.className, d = u === void 0 ? "" : u, f = n.textBreakAll, p = n.labelRef, m = nN(), h = (0, F.useContext)(eN), g = $M(), _ = lj(), v = n.zIndex === 0 ? _ ?? n.zIndex : n.zIndex, y = dj(v, n.background), b = r == null ? a === "center" ? h ?? g : m ?? g : cN(r) ? r : Tt(r), x, S, C = uN(b);
	if (!b || R(o) && R(s) && !/*#__PURE__*/ (0, F.isValidElement)(c) && typeof c != "function") return null;
	var w = cN(b) && (a === "insideStart" || a === "insideEnd" || a === "end");
	if (cN(b)) w || (S = sN(b, n.offset, n.position));
	else if (C) {
		var T = jt({
			viewBox: C,
			position: a,
			offset: n.offset,
			parentViewBox: cN(i) ? void 0 : i,
			clamp: !0
		});
		S = WM(WM({
			x: T.x,
			y: T.y,
			textAnchor: T.horizontalAnchor,
			verticalAnchor: T.verticalAnchor
		}, T.width === void 0 ? {} : { width: T.width }), T.height === void 0 ? {} : { height: T.height });
	}
	var E = WM(WM(WM(WM({}, S?.x === void 0 ? {} : { x: S.x }), S?.y === void 0 ? {} : { y: S.y }), n), {}, { viewBox: b });
	if (/*#__PURE__*/ (0, F.isValidElement)(c)) {
		E.labelRef, E.background, E.halo;
		var D = YM(E, VM);
		return /*#__PURE__*/ (0, F.cloneElement)(c, D);
	}
	if (typeof c == "function") {
		E.content;
		var O = YM(E, HM);
		if (x = /*#__PURE__*/ (0, F.createElement)(c, O), /*#__PURE__*/ (0, F.isValidElement)(x)) return x;
	} else x = rN(n);
	var k = Ve(n);
	return w && cN(b) ? oN(n, a, x, k, b, n.halo) : S == null ? null : /*#__PURE__*/ F.createElement(F.Fragment, null, n.background && /*#__PURE__*/ F.createElement(hk, { zIndex: y }), /*#__PURE__*/ F.createElement(hk, { zIndex: n.zIndex }, /*#__PURE__*/ F.createElement(cj, { value: v }, /*#__PURE__*/ F.createElement(dM, JM({
		ref: p,
		className: l("recharts-label", d)
	}, k, S, {
		textAnchor: Ij(k.textAnchor) ? k.textAnchor : S.textAnchor,
		breakAll: f,
		background: n.background,
		halo: n.halo
	}), x))));
}
dN.displayName = "Label";
var fN = (e, t, n) => {
	if (!e && e !== 0) return null;
	var r = {
		viewBox: t,
		labelRef: n
	};
	return e === !0 ? /*#__PURE__*/ F.createElement(dN, JM({ key: "label-implicit" }, r)) : gt(e) ? /*#__PURE__*/ F.createElement(dN, JM({
		key: "label-implicit",
		value: e
	}, r)) : /*#__PURE__*/ (0, F.isValidElement)(e) ? e.type === dN ? /*#__PURE__*/ (0, F.cloneElement)(e, WM({ key: "label-implicit" }, r)) : /*#__PURE__*/ F.createElement(dN, JM({
		key: "label-implicit",
		content: e
	}, r)) : iN(e) ? /*#__PURE__*/ F.createElement(dN, JM({
		key: "label-implicit",
		content: e
	}, r)) : e && typeof e == "object" ? /*#__PURE__*/ F.createElement(dN, JM({}, e, { key: "label-implicit" }, r)) : null;
};
function pN(e) {
	var t = e.label, n = e.labelRef;
	return fN(t, $M(), n) || null;
}
function mN(e) {
	var t = e.label;
	return fN(t, nN()) || null;
}
// node_modules/recharts/es6/cartesian/GraphicalItemClipPath.js
function hN(e, t) {
	var n = V((t) => rw(t, e)), r = V((e) => ow(e, t)), i = V((e) => !Tv(e.zoom.x)) ?? !1, a = V((e) => !Tv(e.zoom.y)) ?? !1, o = (n?.allowDataOverflow ?? tw.allowDataOverflow) || i, s = (r?.allowDataOverflow ?? iw.allowDataOverflow) || a;
	return {
		needClip: o || s,
		needClipX: o,
		needClipY: s
	};
}
function gN(e, t) {
	var n = VO(), r = hN(e, t), i = r.needClipX, a = r.needClipY, o = r.needClip, s = V((t) => MT(t, e, !1)), c = V((e) => NT(e, t, !1));
	if (o && n) {
		var l = n.x, u = n.y, d = n.width, f = n.height;
		return {
			x: i && s ? Math.min(s[0], s[1]) : l - d / 2,
			y: a && c ? Math.min(c[0], c[1]) : u - f / 2,
			width: i && s ? Math.abs(s[1] - s[0]) : d * 2,
			height: a && c ? Math.abs(c[1] - c[0]) : f * 2,
			isXClipped: i && s != null,
			isYClipped: a && c != null
		};
	}
}
function _N(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.clipPathId, i = gN(t, n);
	return i == null ? null : /*#__PURE__*/ F.createElement("clipPath", { id: `clipPath-${r}` }, /*#__PURE__*/ F.createElement("rect", {
		x: i.x,
		y: i.y,
		width: i.width,
		height: i.height
	}));
}
// node_modules/recharts/es6/component/LabelList.js
var vN = ["valueAccessor"], yN = [
	"dataKey",
	"clockWise",
	"id",
	"textBreakAll",
	"zIndex"
];
function bN() {
	return bN = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, bN.apply(null, arguments);
}
function xN(e, t) {
	if (e == null) return {};
	var n, r, i = SN(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function SN(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var CN = (e) => {
	var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
	if (Lj(t)) return t;
}, wN = /*#__PURE__*/ (0, F.createContext)(void 0), TN = wN.Provider, EN = /*#__PURE__*/ (0, F.createContext)(void 0), DN = EN.Provider, ON = /*#__PURE__*/ (0, F.createContext)(void 0);
function kN(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.children, i = gN(t, n);
	return /*#__PURE__*/ F.createElement(ON.Provider, { value: i }, r);
}
function AN(e, t, n, r) {
	var i = n + r;
	return t === 0 ? e >= n && e <= i : Math.max(e, e + t) > n && Math.min(e, e + t) < i;
}
function jN(e, t) {
	return e == null || t == null ? !1 : t.isXClipped && !AN(e.x, e.width, t.x, t.width) || t.isYClipped && !AN(e.y, e.height, t.y, t.height);
}
function MN() {
	var e = (0, F.useContext)(wN);
	return typeof e == "function" ? e() : e;
}
function NN() {
	return (0, F.useContext)(EN);
}
function PN(e) {
	var t = e.valueAccessor, n = t === void 0 ? CN : t, r = xN(e, vN), i = r.dataKey;
	r.clockWise;
	var a = r.id, o = r.textBreakAll, s = r.zIndex, c = xN(r, yN), l = MN(), u = NN(), d = (0, F.useContext)(ON), f = LM(), p = mr(), m = OM(), h = p == null ? void 0 : m, g = hr(p), _ = l || u, v = s ?? J.label, y = dj(v, c.background);
	return !_ || !_.length ? null : /*#__PURE__*/ F.createElement(F.Fragment, null, c.background && /*#__PURE__*/ F.createElement(hk, { zIndex: y }), /*#__PURE__*/ F.createElement(hk, { zIndex: v }, /*#__PURE__*/ F.createElement(NM, { value: !0 }, /*#__PURE__*/ F.createElement(cj, { value: v }, /*#__PURE__*/ F.createElement($e, { className: "recharts-label-list" }, _.map((e, t) => {
		if (jN(l?.[t], d)) return null;
		var s = e.originalDataIndex ?? t, u = R(i) ? n(e, s) : G(e.payload, i), p = R(a) ? {} : { id: `${a}-${s}` }, m = f?.(t), _ = SM(r.background, m?.background), v = wM(m, r, h == null ? e.fill : jM({
			position: c.position,
			isPolar: cN(e.viewBox),
			hasFilledShapes: h.hasFilledShapes,
			shapeColors: h.getShapeColors?.call(h, t) ?? { fill: e.fill },
			pageBackground: g,
			hasOwnBackground: !!_ || !!c.halo
		}));
		return /*#__PURE__*/ F.createElement(dN, bN({ key: `label-${s}` }, Ve(e), c, p, {
			fill: v.fill,
			style: v.style,
			background: v.background,
			parentViewBox: e.parentViewBox,
			value: u,
			textBreakAll: o,
			viewBox: e.viewBox,
			index: s,
			zIndex: 0
		}));
	}))))));
}
PN.displayName = "LabelList";
function FN(e) {
	return typeof e == "object" && !!e && !/*#__PURE__*/ F.isValidElement(e);
}
function IN(e) {
	var t = e.label, n = e.pointerEvents;
	return t ? t === !0 ? /*#__PURE__*/ F.createElement(PN, {
		key: "labelList-implicit",
		pointerEvents: n
	}) : /*#__PURE__*/ F.isValidElement(t) || iN(t) ? /*#__PURE__*/ F.createElement(PN, {
		key: "labelList-implicit",
		content: t,
		pointerEvents: n
	}) : FN(t) ? /*#__PURE__*/ F.createElement(PN, bN({ key: "labelList-implicit" }, t, {
		type: String(t.type),
		pointerEvents: t.pointerEvents ?? n
	})) : null : null;
}
// node_modules/recharts/es6/shape/Dot.js
function LN() {
	return LN = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, LN.apply(null, arguments);
}
var RN = (e) => {
	var t = e.cx, n = e.cy, r = e.r, i = e.className, a = l("recharts-dot", i);
	return I(t) && I(n) && I(r) ? /*#__PURE__*/ F.createElement("circle", LN({}, ze(e), hi(e), {
		className: a,
		cx: t,
		cy: n,
		r
	})) : null;
}, zN = (e) => {
	var t = e.fill;
	return typeof t == "object" && t ? /*#__PURE__*/ F.createElement(Yr, {
		fill: t,
		bounds: Jr(2 * Number(e.r), 2 * Number(e.r))
	}, (t) => /*#__PURE__*/ F.createElement(RN, LN({}, e, { fill: t }))) : /*#__PURE__*/ F.createElement(RN, LN({}, e, { fill: t }));
}, BN = (e) => e.graphicalItems.polarItems, VN = H([Y, N_], pw), HN = H([
	BN,
	lw,
	VN
], gw), UN = H([H([HN], xw), gg], ww), WN = H([
	UN,
	lw,
	HN,
	K,
	Y
], Ew);
H([
	UN,
	lw,
	HN,
	K,
	Y
], (e, t, n, r, i) => n.length > 0 ? e.flatMap((e) => n.flatMap((n) => ({
	value: G(e, cv(n.dataKey, t.dataKey, r, i)),
	errorDomain: []
}))).filter(Boolean) : t?.dataKey == null ? e.map((e) => ({
	value: e,
	errorDomain: []
})) : e.map((e) => ({
	value: G(e, t.dataKey),
	errorDomain: []
})));
var GN = () => void 0, KN = H([HN], (e) => e.filter(L_)), qN = H([
	H([
		KN,
		gg,
		Iw
	], F_),
	KN,
	i_,
	a_
], zw), JN = H([
	lw,
	Kw,
	qw,
	H([
		qN,
		hg,
		Y,
		qw,
		Vw
	], Uw, { memoizeOptions: { resultEqualityCheck: R_ } }),
	H([
		UN,
		lw,
		HN,
		Vw,
		Y,
		bg,
		K
	], Zw),
	GN,
	K,
	Y
], gT), YN = H([
	lw,
	K,
	UN,
	WN,
	H([
		i_,
		BN,
		VN
	], bT),
	Y,
	JN
], yT), XN = H([
	YN,
	dw,
	ST
], CT), ZN = H([ST, H([
	lw,
	YN,
	XN,
	Y
], TT)], kv), QN = Xc({
	name: "polarAxis",
	initialState: {
		radiusAxis: {},
		angleAxis: {}
	},
	reducers: {
		addRadiusAxis(e, t) {
			e.radiusAxis[t.payload.id] = U(t.payload);
		},
		removeRadiusAxis(e, t) {
			delete e.radiusAxis[t.payload.id];
		},
		addAngleAxis(e, t) {
			e.angleAxis[t.payload.id] = U(t.payload);
		},
		removeAngleAxis(e, t) {
			delete e.angleAxis[t.payload.id];
		}
	}
}), $N = QN.actions, eP = $N.addRadiusAxis, tP = $N.removeRadiusAxis, nP = $N.addAngleAxis, rP = $N.removeAngleAxis, iP = QN.reducer;
// node_modules/recharts/es6/util/getClassNameFromUnknown.js
function aP(e) {
	return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
// node_modules/react-is/cjs/react-is.production.js
var oP = /* @__PURE__ */ n(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition");
	function m(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u:
					case p: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d: return e;
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.isFragment = function(e) {
		return m(e) === r;
	};
})), sP = (/* @__PURE__ */ n(((e, t) => {
	t.exports = oP();
})))(), cP = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", lP = null, uP = null, dP = (e) => {
	if (e === lP && Array.isArray(uP)) return uP;
	var t = [];
	return F.Children.forEach(e, (e) => {
		R(e) || ((0, sP.isFragment)(e) ? t = t.concat(dP(e.props.children)) : t.push(e));
	}), uP = t, lP = e, t;
};
function fP(e, t) {
	var n = [], r = [];
	return r = Array.isArray(t) ? t.map((e) => cP(e)) : [cP(t)], dP(e).forEach((e) => {
		var t = ct(e, "type.displayName") || ct(e, "type.name");
		t && r.indexOf(t) !== -1 && n.push(e);
	}), n;
}
var pP = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0;
// node_modules/recharts/es6/util/ActiveShapeUtils.js
function mP(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hP(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mP(Object(n), !0).forEach(function(t) {
			gP(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mP(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function gP(e, t, n) {
	return (t = _P(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _P(e) {
	var t = vP(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function vP(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function yP(e, t) {
	return hP(hP({}, t), e);
}
function bP(e) {
	return /*#__PURE__*/ (0, F.isValidElement)(e) ? e.props : e;
}
function xP(e, t) {
	return /*#__PURE__*/ (0, F.cloneElement)(e, yP(bP(e), t));
}
function SP(e) {
	if ("index" in e) {
		var t = e.index;
		return typeof t == "number" || typeof t == "string" ? t : void 0;
	}
}
function CP(e) {
	return "isActive" in e && e.isActive === !0;
}
function wP(e) {
	var t = e.option, n = e.DefaultShape, r = e.shapeProps, i = e.activeClassName, a = i === void 0 ? "recharts-active-shape" : i, o = e.inActiveClassName, s = o === void 0 ? "recharts-shape" : o, c = SP(r), l = /*#__PURE__*/ (0, F.isValidElement)(t) ? xP(t, r) : t === n ? /*#__PURE__*/ F.createElement(n, r) : typeof t == "function" ? t(r, c) : typeof t == "object" ? /*#__PURE__*/ F.createElement(n, yP(t, r)) : /*#__PURE__*/ F.createElement(n, r);
	return CP(r) ? /*#__PURE__*/ F.createElement($e, { className: a }, l) : /*#__PURE__*/ F.createElement($e, { className: s }, l);
}
// node_modules/recharts/es6/context/tooltipContext.js
var TP = (e, t, n) => {
	var r = B();
	return (i, a) => (o) => {
		e?.(i, a, o), r(DE({
			activeIndex: String(a),
			activeDataKey: t,
			activeCoordinate: i.tooltipPosition,
			activeGraphicalItemId: n
		}));
	};
}, EP = (e) => {
	var t = B();
	return (n, r) => (i) => {
		e?.(n, r, i), t(OE());
	};
}, DP = (e, t, n) => {
	var r = B();
	return (i, a) => (o) => {
		e?.(i, a, o), r(AE({
			activeIndex: String(a),
			activeDataKey: t,
			activeCoordinate: i.tooltipPosition,
			activeGraphicalItemId: n
		}));
	};
};
// node_modules/recharts/es6/state/SetTooltipEntrySettings.js
function OP(e) {
	var t = e.tooltipEntrySettings, n = B(), r = Xu(), i = (0, F.useRef)(null);
	return (0, F.useLayoutEffect)(() => {
		r || (i.current === null ? n(CE(t)) : i.current !== t && n(wE({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		t,
		n,
		r
	]), (0, F.useLayoutEffect)(() => () => {
		i.current &&= (n(TE(i.current)), null);
	}, [n]), null;
}
// node_modules/recharts/es6/state/SetLegendPayload.js
function kP(e) {
	var t = e.legendPayload, n = B(), r = Xu(), i = (0, F.useRef)(null);
	return (0, F.useLayoutEffect)(() => {
		r || (i.current === null ? n(Jd(t)) : i.current !== t && n(Yd({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		n,
		r,
		t
	]), (0, F.useLayoutEffect)(() => () => {
		i.current &&= (n(Xd(i.current)), null);
	}, [n]), null;
}
function AP(e) {
	var t = e.legendPayload, n = B(), r = V(K), i = (0, F.useRef)(null);
	return (0, F.useLayoutEffect)(() => {
		(r === "centric" || r === "radial") && (i.current === null ? n(Jd(t)) : i.current !== t && n(Yd({
			prev: i.current,
			next: t
		})), i.current = t);
	}, [
		n,
		r,
		t
	]), (0, F.useLayoutEffect)(() => () => {
		i.current &&= (n(Xd(i.current)), null);
	}, [n]), null;
}
// node_modules/recharts/es6/animation/matchBy.js
function jP(e, t) {
	return IP(e) || FP(e, t) || NP(e, t) || MP();
}
function MP() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function NP(e, t) {
	if (e) {
		if (typeof e == "string") return PP(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? PP(e, t) : void 0;
	}
}
function PP(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function FP(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function IP(e) {
	if (Array.isArray(e)) return e;
}
var LP = "index", RP = "append";
function zP(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r = [];
	for (var i of n) r.push({
		status: "removed",
		prev: i
	});
	for (var a = 0; a < t.length; a++) {
		var o = e[a], s = t[a];
		o == null ? r.push({
			status: "added",
			next: s
		}) : r.push({
			status: "matched",
			prev: o,
			next: s
		});
	}
	return r;
}
function BP(e, t) {
	var n = e.length / t.length;
	return zP(t.map((t, r) => e[Math.floor(r * n)]), t);
}
function VP(e, t) {
	return zP(t.map((t, n) => e[n]), t);
}
function HP(e, t) {
	for (var n = /* @__PURE__ */ new Map(), r = 0; r < e.length; r++) {
		var i = e[r];
		if (i != null) {
			var a = t(i, r);
			a != null && !n.has(a) && n.set(a, i);
		}
	}
	return n;
}
function UP(e, t, n) {
	var r = HP(e, n), i = /* @__PURE__ */ new Set(), a = t.map((e, t) => {
		var a = n(e, t);
		if (a != null) {
			var o = r.get(a);
			if (o !== void 0) return i.add(a), o;
		}
	}), o = [];
	for (var s of r) {
		var c = jP(s, 2), l = c[0], u = c[1];
		i.has(l) || o.push(u);
	}
	return zP(a, t, o);
}
function WP(e, t, n) {
	return t == null ? null : e == null ? t.map((e) => ({
		status: "added",
		next: e
	})) : n === "index" ? BP(e, t) : n === "append" ? VP(e, t) : UP(e, t, n);
}
// node_modules/recharts/es6/animation/useAnimationStartSnapshot.js
function GP(e, t) {
	var n = (0, F.useRef)(e), r = (0, F.useRef)(t.current), i = (0, F.useRef)(!0);
	n.current !== e && (n.current = e, r.current = t.current, i.current = !1);
	var a = (0, F.useCallback)(function(e, n) {
		var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
		n === 0 ? i.current = !0 : (n === 1 && (r.current = e), n > 0 && i.current && a && (t.current = e));
	}, [t]);
	return {
		startValue: r.current,
		syncStepValue: a
	};
}
// node_modules/recharts/es6/animation/AnimatedItems.js
function KP(e, t) {
	return ZP(e) || XP(e, t) || JP(e, t) || qP();
}
function qP() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function JP(e, t) {
	if (e) {
		if (typeof e == "string") return YP(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? YP(e, t) : void 0;
	}
}
function YP(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function XP(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function ZP(e) {
	if (Array.isArray(e)) return e;
}
function QP(e, t) {
	var n = KP((0, F.useState)(!1), 2), r = n[0], i = n[1];
	return {
		isAnimating: r,
		handleAnimationStart: (0, F.useCallback)(() => {
			typeof e == "function" && e(), i(!0);
		}, [e]),
		handleAnimationEnd: (0, F.useCallback)(() => {
			typeof t == "function" && t(), i(!1);
		}, [t])
	};
}
function $P(e) {
	var t = e.animationInput, n = e.animationIdPrefix, r = e.items, i = e.previousItemsRef, a = e.isAnimationActive, o = e.animationBegin, s = e.animationDuration, c = e.animationEasing, l = e.onAnimationStart, u = e.onAnimationEnd, d = e.animationInterpolateFn, f = e.animationMatchBy, p = e.shouldUpdatePreviousRef, m = e.children, h = e.layout, g = $m(t, n), _ = GP(g, i), v = _.startValue ?? null, y = WP(v, r, f ?? LP);
	return /*#__PURE__*/ F.createElement(Qm, {
		animationId: g,
		begin: o,
		duration: s,
		isActive: a,
		easing: c,
		onAnimationEnd: u,
		onAnimationStart: l,
		key: g
	}, (e) => {
		var t = v == null, n = r == null ? r : d(y, e, h), i = p ? p(e) : e > 0;
		return _.syncStepValue(n, e, i), n == null ? null : m(n, e, t);
	});
}
// node_modules/recharts/es6/context/RegisterGraphicalItemId.js
var eF = /*#__PURE__*/ (0, F.createContext)(void 0), tF = (e) => {
	var t = e.id, n = e.type, r = e.children, i = fr(`recharts-${n}`, t);
	return /*#__PURE__*/ F.createElement(eF.Provider, { value: i }, r(i));
}, nF = Xc({
	name: "graphicalItems",
	initialState: {
		cartesianItems: [],
		polarItems: []
	},
	reducers: {
		addCartesianGraphicalItem: {
			reducer(e, t) {
				e.cartesianItems.push(U(t.payload));
			},
			prepare: Fc()
		},
		replaceCartesianGraphicalItem: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = xc(e).cartesianItems.indexOf(U(r));
				a > -1 && (e.cartesianItems[a] = U(i));
			},
			prepare: Fc()
		},
		removeCartesianGraphicalItem: {
			reducer(e, t) {
				var n = xc(e).cartesianItems.indexOf(U(t.payload));
				n > -1 && e.cartesianItems.splice(n, 1);
			},
			prepare: Fc()
		},
		addPolarGraphicalItem: {
			reducer(e, t) {
				e.polarItems.push(U(t.payload));
			},
			prepare: Fc()
		},
		removePolarGraphicalItem: {
			reducer(e, t) {
				var n = xc(e).polarItems.indexOf(U(t.payload));
				n > -1 && e.polarItems.splice(n, 1);
			},
			prepare: Fc()
		},
		replacePolarGraphicalItem: {
			reducer(e, t) {
				var n = t.payload, r = n.prev, i = n.next, a = xc(e).polarItems.indexOf(U(r));
				a > -1 && (e.polarItems[a] = U(i));
			},
			prepare: Fc()
		}
	}
}), rF = nF.actions, iF = rF.addCartesianGraphicalItem, aF = rF.replaceCartesianGraphicalItem, oF = rF.removeCartesianGraphicalItem, sF = rF.addPolarGraphicalItem, cF = rF.removePolarGraphicalItem, lF = rF.replacePolarGraphicalItem, uF = nF.reducer, dF = /*#__PURE__*/ (0, F.memo)((e) => {
	var t = B(), n = (0, F.useRef)(null);
	return (0, F.useLayoutEffect)(() => {
		n.current === null ? t(iF(e)) : n.current !== e && t(aF({
			prev: n.current,
			next: e
		})), n.current = e;
	}, [t, e]), (0, F.useLayoutEffect)(() => () => {
		n.current &&= (t(oF(n.current)), null);
	}, [t]), null;
}), fF = /*#__PURE__*/ (0, F.memo)((e) => {
	var t = B(), n = (0, F.useRef)(null);
	return (0, F.useLayoutEffect)(() => {
		n.current === null ? t(sF(e)) : n.current !== e && t(lF({
			prev: n.current,
			next: e
		})), n.current = e;
	}, [t, e]), (0, F.useLayoutEffect)(() => () => {
		n.current &&= (t(cF(n.current)), null);
	}, [t]), null;
}), pF = ["fill", "stroke"], mF = [
	"id",
	"ref",
	"key"
], hF = ["fill"];
function gF(e, t) {
	return xF(e) || bF(e, t) || vF(e, t) || _F();
}
function _F() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function vF(e, t) {
	if (e) {
		if (typeof e == "string") return yF(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yF(e, t) : void 0;
	}
}
function yF(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function bF(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function xF(e) {
	if (Array.isArray(e)) return e;
}
function SF(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function CF(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? SF(Object(n), !0).forEach(function(t) {
			wF(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : SF(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wF(e, t, n) {
	return (t = TF(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function TF(e) {
	var t = EF(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function EF(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function DF(e, t) {
	if (e == null) return {};
	var n, r, i = OF(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function OF(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function kF(e) {
	return typeof e != "object" || !e ? !1 : Rr(e).color != null || Reflect.get(e, "stroke") != null;
}
var AF = /* @__PURE__ */ new WeakMap();
function jF(e) {
	if (e != null) {
		var t = AF.get(e);
		if (t != null) return t;
		e.fill, e.stroke;
		var n = DF(e, pF);
		return AF.set(e, n), n;
	}
}
function MF(e) {
	var t = {};
	if (e == null) return t;
	var n = Rr(e).color;
	return n != null && (t.fill = n), e.fillOpacity != null && (t.fillOpacity = e.fillOpacity), e.stroke != null && (t.stroke = e.stroke), e.strokeOpacity != null && (t.strokeOpacity = e.strokeOpacity), e.strokeWidth != null && (t.strokeWidth = e.strokeWidth), e.strokeDasharray != null && (t.strokeDasharray = e.strokeDasharray), t;
}
function NF(e) {
	return {
		fill: e.fill,
		stroke: e.stroke
	};
}
function PF(e) {
	var t = mr() != null, n = e.fill, r = e.stroke;
	return (0, F.useMemo)(() => t ? NF({
		fill: n,
		stroke: r
	}) : void 0, [
		t,
		n,
		r
	]);
}
function FF(e, t) {
	if (t != null && kF(e)) return t;
}
function IF(e) {
	var t = Be(e) ?? {};
	t.id, t.ref, t.key;
	var n = DF(t, mF);
	if (n.fill != null && typeof n.fill != "string") {
		n.fill;
		var r = DF(n, hF), i = Rr(e).color;
		return i == null ? r : CF(CF({}, r), {}, { fill: i });
	}
	return n;
}
function LF(e, t) {
	if (typeof e == "object" && e) {
		if (t === "fill") return Rr(e).color;
		var n = Reflect.get(e, t);
		return typeof n == "string" ? n : void 0;
	}
}
function RF(e, t, n, r) {
	var i = FF(e, r) ?? {
		fill: t,
		stroke: n
	}, a = typeof e == "object" && e && "style" in e ? e.style : void 0;
	return {
		fill: LF(a, "fill") ?? LF(e, "fill") ?? i.fill,
		stroke: LF(a, "stroke") ?? LF(e, "stroke") ?? i.stroke
	};
}
function zF(e, t, n, r) {
	var i = RF(e, t, n, r);
	return i.fill ?? i.stroke;
}
function BF(e) {
	return Object.fromEntries(Object.entries(e).filter((e) => {
		var t = gF(e, 1)[0];
		return t === "name" || !Le(t) && !Re(t);
	}));
}
// node_modules/recharts/es6/theme/activeStyles.js
function VF(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function HF(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? VF(Object(n), !0).forEach(function(t) {
			UF(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VF(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function UF(e, t, n) {
	return (t = WF(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function WF(e) {
	var t = GF(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function GF(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function KF(e, t) {
	if (e == null || typeof t != "object" || !t) return e;
	var n = t.fillOpacity, r = t.strokeOpacity, i = t.strokeWidth, a = t.strokeDasharray, o = kF(t) ? jF(e) : e;
	if (n == null && r == null && i == null && a == null) return Object.keys(o).length > 0 ? o : void 0;
	var s = HF({}, o);
	return n != null && delete s.fillOpacity, r != null && delete s.strokeOpacity, i != null && delete s.strokeWidth, a != null && delete s.strokeDasharray, Object.keys(s).length > 0 ? s : void 0;
}
function qF(e, t) {
	var n = mr(), r = n == null ? void 0 : e(n)?.active;
	return kF(t) ? jF(r) : r;
}
function JF(e, t, n) {
	var r = kF(n) ? jF(t) : t;
	if (e === !0 || typeof e == "string") return r;
	if (typeof e == "object" && e && !/*#__PURE__*/ (0, F.isValidElement)(e)) return KF(r, e);
}
// node_modules/recharts/es6/shape/DotSymbol.js
var YF = [
	"type",
	"cx",
	"cy",
	"r",
	"className"
];
function XF() {
	return XF = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, XF.apply(null, arguments);
}
function ZF(e, t) {
	if (e == null) return {};
	var n, r, i = QF(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function QF(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function $F(e) {
	if (typeof e == "string") return e;
	if (typeof e == "object" && e && !/*#__PURE__*/ (0, F.isValidElement)(e) && typeof e.symbol == "string") return e.symbol;
}
function eI(e, t) {
	if (typeof e == "object" && e && !/*#__PURE__*/ (0, F.isValidElement)(e)) {
		var n = e[t];
		return typeof n == "string" ? n : void 0;
	}
}
function tI(e) {
	return e === !0 || typeof e == "object" && !!e && !/*#__PURE__*/ (0, F.isValidElement)(e) && e.symbol == null;
}
function nI(e, t, n) {
	var r = $F(e) ?? (n && tI(e) ? "circle" : void 0);
	if (r != null && e != null) return {
		symbol: r,
		fill: eI(e, "fill") ?? t.fill,
		stroke: eI(e, "stroke") ?? t.stroke
	};
}
function rI(e, t) {
	return t && !e ? "plainline" : void 0;
}
function iI(e) {
	var t = e.type, n = e.cx, r = e.cy, i = e.r, a = e.className, o = ZF(e, YF);
	return /*#__PURE__*/ F.createElement(pi, XF({}, ze(o), hi(e), {
		className: l("recharts-dot", a),
		type: t,
		cx: n,
		cy: r,
		size: 2 * Number(i),
		sizeType: "diameter"
	}));
}
// node_modules/recharts/es6/component/Dots.js
var aI = ["points"];
function oI(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sI(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? oI(Object(n), !0).forEach(function(t) {
			cI(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oI(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cI(e, t, n) {
	return (t = lI(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lI(e) {
	var t = uI(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function uI(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dI() {
	return dI = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, dI.apply(null, arguments);
}
function fI(e, t) {
	if (e == null) return {};
	var n, r, i = pI(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function pI(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function mI(e) {
	var t = e.option, n = e.dotProps, r = e.className;
	if (/*#__PURE__*/ (0, F.isValidElement)(t)) return /*#__PURE__*/ (0, F.cloneElement)(t, n);
	if (typeof t == "function") return t(n);
	var i = n ?? {};
	i.points;
	var a = fI(i, aI), o = l(r, typeof t == "object" ? t.className : void 0), s = $F(t);
	return s == null ? /*#__PURE__*/ F.createElement(zN, dI({}, a, { className: o })) : /*#__PURE__*/ F.createElement(iI, dI({}, a, {
		type: s,
		className: o
	}));
}
function hI(e, t) {
	return e == null ? !1 : t ? !0 : e.length === 1;
}
function gI(e) {
	var t = e.points, n = e.dot, r = e.className, i = e.dotClassName, a = e.dataKey, o = e.baseProps, s = e.unthemedColors, c = e.needClip, u = e.clipPathId, d = e.zIndex, f = d === void 0 ? J.scatter : d;
	if (!hI(t, n)) return null;
	var p = pP(n), m = He(n), h = t.map((e, r) => {
		var c = IF(e.payload), u = sI(sI(sI(sI(sI({ r: 3 }, o), FF(e.payload, s)), {}, { fillOpacity: 1 }, m), c), {}, {
			index: r,
			cx: e.x ?? void 0,
			cy: e.y ?? void 0,
			dataKey: a,
			value: e.value,
			payload: e.payload,
			points: t
		}), d = typeof c.className == "string" ? c.className : void 0;
		return /*#__PURE__*/ F.createElement(mI, {
			key: `dot-${r}`,
			option: n,
			dotProps: u,
			className: l(i, d)
		});
	}), g = {};
	return c && u != null && (g.clipPath = `url(#clipPath-${p ? "" : "dots-"}${u})`), /*#__PURE__*/ F.createElement(hk, { zIndex: f }, /*#__PURE__*/ F.createElement($e, dI({ className: r }, g), h));
}
// node_modules/recharts/es6/component/ActivePoints.js
function _I() {
	return _I = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _I.apply(null, arguments);
}
function vI(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function yI(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? vI(Object(n), !0).forEach(function(t) {
			bI(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vI(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function bI(e, t, n) {
	return (t = xI(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xI(e) {
	var t = SI(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function SI(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var CI = (e) => {
	var t = e.point, n = e.childIndex, r = e.mainColor, i = e.activeDot, a = e.themedActiveStyles, o = e.dataKey, s = e.clipPath;
	if (i === !1 || t.x == null || t.y == null) return null;
	var c = MF(t.payload), l = yI(yI(yI({}, yI(yI({
		index: n,
		dataKey: o,
		cx: t.x,
		cy: t.y,
		r: 4,
		fill: c.fill ?? r ?? "none",
		strokeWidth: 2,
		stroke: "#fff"
	}, JF(i, a, t.payload)), {}, {
		payload: t.payload,
		value: t.value
	})), Be(i)), hi(i)), u, d = $F(i);
	return u = /*#__PURE__*/ (0, F.isValidElement)(i) ? /*#__PURE__*/ (0, F.cloneElement)(i, l) : typeof i == "function" ? i(l) : d == null ? /*#__PURE__*/ F.createElement(zN, l) : /*#__PURE__*/ F.createElement(iI, _I({}, l, { type: d })), /*#__PURE__*/ F.createElement($e, {
		className: "recharts-active-dot",
		clipPath: s
	}, u);
};
function wI(e) {
	var t = e.points, n = e.mainColor, r = e.activeDot, i = e.themedActiveStyles, a = e.itemDataKey, o = e.clipPath, s = e.zIndex, c = s === void 0 ? J.activeDot : s, l = V($D), u = HO();
	if (r === !1 || t == null || u == null || u.length === 0) return null;
	var d = t.find((e) => u.includes(e.payload));
	return R(d) ? null : /*#__PURE__*/ F.createElement(hk, { zIndex: c }, /*#__PURE__*/ F.createElement(CI, {
		point: d,
		childIndex: Number(l),
		mainColor: n,
		dataKey: a,
		activeDot: r,
		themedActiveStyles: i,
		clipPath: o
	}));
}
// node_modules/recharts/es6/theme/graphicalItemIdentity.js
function TI(e, t, n) {
	if (n <= 0) return 0;
	var r = [...t, e.dataKey].map(String);
	return Array.from(new Set(r)).sort().indexOf(String(e.dataKey)) % n;
}
// node_modules/recharts/es6/theme/useGraphicalItemIdentity.js
var EI = [], DI = () => EI;
function OI(e) {
	var t = V(mr() == null ? DI : dv) ?? EI;
	return (0, F.useCallback)((n) => {
		if (e != null) return n.graphicalItems[TI({ dataKey: e }, t, n.graphicalItems.length)];
	}, [e, t]);
}
function kI(e, t) {
	var n = OI(e), r = kF(t);
	return (0, F.useCallback)((e) => {
		var t = Cr(n(e));
		return r ? jF(t) : t;
	}, [n, r]);
}
function AI(e, t) {
	var n = mr(), r = OI(e);
	if (!(n == null || kF(t))) return yr(r(n)?.fill);
}
// node_modules/recharts/es6/util/useEffectiveDataKey.js
function jI(e) {
	var t = e.dataKey, n = e.xAxisId, r = e.yAxisId, i = e.angleAxisId, a = e.radiusAxisId;
	return V((e) => uv(e, {
		dataKey: t,
		xAxisId: n,
		yAxisId: r,
		angleAxisId: i,
		radiusAxisId: a
	})) ?? t;
}
// node_modules/es-toolkit/dist/compat/predicate/isPlainObject.mjs
function MI(e) {
	if (typeof e != "object" || !e) return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	if (Object.prototype.toString.call(e) !== "[object Object]") {
		let t = e[Symbol.toStringTag];
		return t == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${t}]`;
	}
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
// node_modules/es-toolkit/dist/compat/predicate/isArray.mjs
function NI(e) {
	return Array.isArray(e);
}
// node_modules/es-toolkit/dist/compat/array/flattenDepth.mjs
function PI(e, t = 1) {
	if (!Zi(e)) return [];
	let n = [], r = Math.floor(t), i = (e, t) => {
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			FI(o) && t < r ? i(o, t + 1) : n.push(o);
		}
	};
	return i(Array.from(e), 0), n;
}
function FI(e) {
	return NI(e) || Xa(e) || !!(e && e[Symbol.isConcatSpreadable]);
}
// node_modules/es-toolkit/dist/compat/array/flatten.mjs
function II(e) {
	return PI(e, 1);
}
// node_modules/es-toolkit/dist/compat/object/unset.mjs
function LI(e, t) {
	if (e == null) return !0;
	switch (typeof t) {
		case "symbol":
		case "number":
		case "object":
			if (Array.isArray(t)) return RI(e, t);
			if (typeof t == "number" ? t = rt(t) : typeof t == "object" && (t = Object.is(t?.valueOf(), -0) ? "-0" : String(t)), et(t)) return !1;
			if (e?.[t] === void 0) return !0;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
		case "string":
			if (e?.[t] === void 0 && nt(t) && !Object.hasOwn(e, t)) return RI(e, st(t));
			if (et(t)) return !1;
			try {
				return delete e[t], !0;
			} catch {
				return !1;
			}
	}
}
function RI(e, t) {
	let n = t.length === 1 ? e : ct(e, t.slice(0, -1)), r = t[t.length - 1];
	if (n?.[r] === void 0) return !0;
	if (et(r)) return !1;
	try {
		return delete n[r], !0;
	} catch {
		return !1;
	}
}
// node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function zI(e) {
	let t = e?.constructor;
	return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
// node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function BI(e) {
	return ea(e);
}
// node_modules/es-toolkit/dist/compat/util/toInteger.mjs
function VI(e) {
	let t = pg(e), n = t % 1;
	return n ? t - n : t;
}
// node_modules/es-toolkit/dist/compat/util/times.mjs
function HI(e, t) {
	if (e = VI(e), e < 1 || !Number.isSafeInteger(e)) return [];
	let n = Array(e);
	for (let r = 0; r < e; r++) n[r] = typeof t == "function" ? t(r) : r;
	return n;
}
// node_modules/es-toolkit/dist/compat/object/keysIn.mjs
function UI(e) {
	if (e == null) return [];
	switch (typeof e) {
		case "object":
		case "function": return Zi(e) ? KI(e) : zI(e) ? GI(e) : WI(e);
		default: return WI(Object(e));
	}
}
function WI(e) {
	let t = [];
	for (let n in e) t.push(n);
	return t;
}
function GI(e) {
	return WI(e).filter((e) => e !== "constructor");
}
function KI(e) {
	let t = HI(e.length, (e) => `${e}`), n = new Set(t);
	Aa(e) && (n.add("offset"), n.add("parent")), BI(e) && (n.add("buffer"), n.add("byteLength"), n.add("byteOffset"));
	let r = WI(e).filter((e) => !n.has(e));
	return Array.isArray(e) ? [...t, ...r] : [...t.filter((t) => Object.hasOwn(e, t)), ...r];
}
// node_modules/es-toolkit/dist/compat/_internal/getSymbolsIn.mjs
function qI(e) {
	let t = [];
	for (; e;) t.push(...ta(e)), e = Object.getPrototypeOf(e);
	return t;
}
// node_modules/es-toolkit/dist/compat/object/omit.mjs
function JI(e, ...t) {
	if (e == null) return {};
	t = II(t);
	let n = YI(e, t);
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		switch (typeof r) {
			case "object":
				if (Array.isArray(r)) LI(n, r);
				else {
					let e = Array.from(r);
					for (let t = 0; t < e.length; t++) LI(n, e[t]);
				}
				break;
			case "string":
			case "symbol":
			case "number": LI(n, r);
		}
	}
	return n;
}
function YI(e, t) {
	return t.some((e) => Array.isArray(e) || nt(e)) ? ZI(e) : XI(e);
}
function XI(e) {
	let t = {}, n = [...UI(e), ...qI(e)];
	for (let r = 0; r < n.length; r++) {
		let i = n[r];
		t[i] = e[i];
	}
	return t;
}
function ZI(e) {
	let t = {}, n = [...UI(e), ...qI(e)];
	for (let r = 0; r < n.length; r++) {
		let i = n[r];
		t[i] = Ka(e[i], (e) => {
			if (!MI(e)) return e;
		});
	}
	return t;
}
// node_modules/recharts/es6/state/selectors/combiners/combineBarSizeList.js
function QI(e, t) {
	return rL(e) || nL(e, t) || eL(e, t) || $I();
}
function $I() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function eL(e, t) {
	if (e) {
		if (typeof e == "string") return tL(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tL(e, t) : void 0;
	}
}
function tL(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function nL(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function rL(e) {
	if (Array.isArray(e)) return e;
}
var iL = (e, t, n) => {
	var r = n ?? e;
	if (!R(r)) return yt(r, t, 0);
}, aL = (e, t, n) => {
	var r = {}, i = e.filter(I_), a = e.filter((e) => e.stackId == null), o = i.reduce((e, t) => {
		var n = e[t.stackId];
		return n ??= [], n.push(t), e[t.stackId] = n, e;
	}, r), s = Object.entries(o).map((e) => {
		var r = QI(e, 2), i = r[0], a = r[1];
		return {
			stackId: i,
			dataKeys: a.map((e) => e.dataKey),
			barSize: iL(t, n, a[0]?.barSize)
		};
	}), c = a.map((e) => ({
		stackId: void 0,
		dataKeys: [e.dataKey].filter((e) => e != null),
		barSize: iL(t, n, e.barSize)
	}));
	return [...s, ...c];
};
// node_modules/recharts/es6/state/selectors/combiners/combineAllBarPositions.js
function oL(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function sL(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? oL(Object(n), !0).forEach(function(t) {
			cL(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oL(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function cL(e, t, n) {
	return (t = lL(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function lL(e) {
	var t = uL(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function uL(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function dL(e, t, n, r, i) {
	var a = r.length;
	if (!(a < 1)) {
		var o = yt(e, n, 0, !0), s, c = [];
		if (W(r[0]?.barSize)) {
			var l = !1, u = n / a, d = r.reduce((e, t) => e + (t.barSize || 0), 0);
			d += (a - 1) * o, d >= n && (d -= (a - 1) * o, o = 0), d >= n && u > 0 && (l = !0, u *= .9, d = a * u);
			var f = {
				offset: Math.round((n - d) / 2) - o,
				size: 0
			};
			s = r.reduce((e, t) => {
				var n = {
					stackId: t.stackId,
					dataKeys: t.dataKeys,
					position: {
						offset: f.offset + f.size + o,
						size: l ? u : t.barSize ?? 0
					}
				}, r = [...e, n];
				return f = n.position, r;
			}, c);
		} else {
			var p = yt(t, n, 0, !0);
			n - 2 * p - (a - 1) * o <= 0 && (o = 0);
			var m = (n - 2 * p - (a - 1) * o) / a;
			m > 1 && (m = Math.round(m));
			var h = W(i) ? Math.min(m, i) : m;
			s = r.reduce((e, t, n) => [...e, {
				stackId: t.stackId,
				dataKeys: t.dataKeys,
				position: {
					offset: p + a * (m - h) / 2 + (h + o) * n,
					size: h
				}
			}], c);
		}
		return s;
	}
}
var fL = (e, t, n, r, i, a, o) => {
	var s = R(o) ? t : o, c = dL(n, r, i === a ? a : i, e, s);
	return i !== a && c != null && (c = c.map((e) => sL(sL({}, e), {}, { position: sL(sL({}, e.position), {}, { offset: e.position.offset - i / 2 }) }))), c;
}, pL = (e, t) => {
	var n = P_(t);
	if (e && n != null && t != null) {
		var r = t.stackId;
		if (r != null) {
			var i = e[r];
			if (i) {
				var a = i.stackedData;
				if (a) return a.find((e) => e.key === n);
			}
		}
	}
}, mL = (e, t) => {
	if (e != null && t != null) {
		var n = e.find((e) => e.stackId === t.stackId && t.dataKey != null && e.dataKeys.includes(t.dataKey));
		if (n != null) return n.position;
	}
};
// node_modules/recharts/es6/zIndex/getZIndexFromUnknown.js
function hL(e, t) {
	return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && W(e.zIndex) ? e.zIndex : t;
}
// node_modules/recharts/es6/context/chartDataContext.js
var gL = (e) => {
	var t = e.chartData, n = B(), r = Xu();
	return (0, F.useEffect)(() => r ? () => {} : (n(Ig(t)), () => {
		n(Ig(void 0));
	}), [
		t,
		n,
		r
	]), null;
}, _L = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
}, vL = Xc({
	name: "brush",
	initialState: _L,
	reducers: { setBrushSettings(e, t) {
		return t.payload == null ? _L : t.payload;
	} }
});
vL.actions.setBrushSettings;
var yL = vL.reducer, bL = (e, t) => {
	var n = e.x, r = e.y, i = t.x, a = t.y;
	return {
		x: Math.min(n, i),
		y: Math.min(r, a),
		width: Math.abs(i - n),
		height: Math.abs(a - r)
	};
}, xL = (e) => {
	var t = e.x1, n = e.y1, r = e.x2, i = e.y2;
	return bL({
		x: t,
		y: n
	}, {
		x: r,
		y: i
	});
};
function SL(e) {
	return (e % 180 + 180) % 180;
}
var CL = function(e) {
	var t = e.width, n = e.height, r = SL(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) * Math.PI / 180, i = Math.atan(n / t), a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
	return Math.abs(a);
}, wL = Xc({
	name: "referenceElements",
	initialState: {
		dots: [],
		areas: [],
		lines: []
	},
	reducers: {
		addDot: (e, t) => {
			e.dots.push(t.payload);
		},
		removeDot: (e, t) => {
			var n = xc(e).dots.findIndex((e) => e === t.payload);
			n !== -1 && e.dots.splice(n, 1);
		},
		addArea: (e, t) => {
			e.areas.push(t.payload);
		},
		removeArea: (e, t) => {
			var n = xc(e).areas.findIndex((e) => e === t.payload);
			n !== -1 && e.areas.splice(n, 1);
		},
		addLine: (e, t) => {
			e.lines.push(U(t.payload));
		},
		removeLine: (e, t) => {
			var n = xc(e).lines.findIndex((e) => e === t.payload);
			n !== -1 && e.lines.splice(n, 1);
		}
	}
}), TL = wL.actions;
TL.addDot, TL.removeDot, TL.addArea, TL.removeArea;
var EL = TL.addLine, DL = TL.removeLine, OL = wL.reducer, kL = class {
	constructor(e) {
		var t = e.x, n = e.y;
		this.xAxisScale = t, this.yAxisScale = n;
	}
	map(e, t) {
		var n = t.position;
		return {
			x: this.xAxisScale.map(e.x, { position: n }) ?? 0,
			y: this.yAxisScale.map(e.y, { position: n }) ?? 0
		};
	}
	mapWithFallback(e, t) {
		var n = t.position, r = t.fallback, i = r === "rangeMin" ? this.yAxisScale.rangeMin() : r === "rangeMax" ? this.yAxisScale.rangeMax() : 0, a = r === "rangeMin" ? this.xAxisScale.rangeMin() : r === "rangeMax" ? this.xAxisScale.rangeMax() : 0;
		return {
			x: this.xAxisScale.map(e.x, { position: n }) ?? a,
			y: this.yAxisScale.map(e.y, { position: n }) ?? i
		};
	}
	isInRange(e) {
		var t = e.x, n = e.y, r = t == null || this.xAxisScale.isInRange(t), i = n == null || this.yAxisScale.isInRange(n);
		return r && i;
	}
};
// node_modules/recharts/es6/cartesian/ReferenceLine.js
function AL(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function jL(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? AL(Object(n), !0).forEach(function(t) {
			ML(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : AL(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ML(e, t, n) {
	return (t = NL(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function NL(e) {
	var t = PL(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function PL(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function FL() {
	return FL = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, FL.apply(null, arguments);
}
var IL = (e, t) => {
	var n;
	if (/*#__PURE__*/ F.isValidElement(e)) n = /*#__PURE__*/ F.cloneElement(e, t);
	else if (typeof e == "function") n = e(t);
	else {
		if (!W(t.x1) || !W(t.y1) || !W(t.x2) || !W(t.y2)) return null;
		n = /*#__PURE__*/ F.createElement("line", FL({}, t, { className: "recharts-reference-line-line" }));
	}
	return n;
}, LL = (e, t, n, r, i, a) => {
	var o = a.x, s = a.width, c = i.map(e, { position: n });
	if (!W(c) || t === "discard" && !i.isInRange(c)) return null;
	var l = [{
		x: o + s,
		y: c
	}, {
		x: o,
		y: c
	}];
	return r === "left" ? l.reverse() : l;
}, RL = (e, t, n, r, i, a) => {
	var o = a.y, s = a.height, c = i.map(e, { position: n });
	if (!W(c) || t === "discard" && !i.isInRange(c)) return null;
	var l = [{
		x: c,
		y: o + s
	}, {
		x: c,
		y: o
	}];
	return r === "top" ? l.reverse() : l;
}, zL = (e, t, n, r) => {
	var i = [r.mapWithFallback(e[0], {
		position: n,
		fallback: "rangeMin"
	}), r.mapWithFallback(e[1], {
		position: n,
		fallback: "rangeMax"
	})];
	return t === "discard" && i.some((e) => !r.isInRange(e)) ? null : i;
}, BL = (e, t, n, r, i, a, o) => {
	var s = o.x, c = o.y, l = o.segment, u = o.ifOverflow, d = gt(s);
	return gt(c) ? LL(c, u, r, a, t, n) : d ? RL(s, u, r, i, e, n) : l != null && l.length === 2 ? zL(l, u, r, new kL({
		x: e,
		y: t
	})) : null;
};
function VL(e) {
	var t = B();
	return (0, F.useEffect)(() => (t(EL(e)), () => {
		t(DL(e));
	})), null;
}
function HL(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.shape, i = e.className, a = e.ifOverflow, o = Xu(), s = ZO(), c = V((e) => rw(e, t)), u = V((e) => ow(e, n)), d = V((e) => VT(e, "xAxis", t, o)), f = V((e) => VT(e, "yAxis", n, o)), p = Md();
	if (!s || !p || c == null || u == null || d == null || f == null) return null;
	var m = BL(d, f, p, e.position, c.orientation, u.orientation, e);
	if (!m) return null;
	var h = m[0], g = m[1];
	if (h == null || g == null) return null;
	var _ = h.x, v = h.y, y = g.x, b = g.y, x = jL(jL({ clipPath: a === "hidden" ? `url(#${s})` : void 0 }, Ve(e)), {}, {
		x1: _,
		y1: v,
		x2: y,
		y2: b
	}), S = xL({
		x1: _,
		y1: v,
		x2: y,
		y2: b
	});
	return /*#__PURE__*/ F.createElement(hk, { zIndex: e.zIndex }, /*#__PURE__*/ F.createElement($e, { className: l("recharts-reference-line", i) }, IL(r, x), /*#__PURE__*/ F.createElement(QM, FL({}, S, {
		lowerWidth: S.width,
		upperWidth: S.width
	}), /*#__PURE__*/ F.createElement(pN, { label: e.label }), e.children)));
}
var UL = {
	ifOverflow: "discard",
	xAxisId: 0,
	yAxisId: 0,
	label: !1,
	position: "middle",
	zIndex: J.line
}, WL = {
	fill: "none",
	stroke: "#ccc",
	fillOpacity: 1,
	strokeWidth: 1
};
function GL(e) {
	var t = Ti((e) => Cr(e.reference), e, WL), n = Ci(jL(jL({}, e), t), UL);
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(VL, {
		yAxisId: n.yAxisId,
		xAxisId: n.xAxisId,
		ifOverflow: n.ifOverflow,
		x: n.x,
		y: n.y,
		segment: n.segment
	}), /*#__PURE__*/ F.createElement(HL, n));
}
GL.displayName = "ReferenceLine";
// node_modules/es-toolkit/dist/function/noop.mjs
function KL() {}
// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function qL(e) {
	if (!e || typeof e != "object") return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null ? !1 : Object.prototype.toString.call(e) === "[object Object]";
}
// node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function JL(e, t, n) {
	return YL(e, t, void 0, void 0, void 0, void 0, n);
}
function YL(e, t, n, r, i, a, o) {
	let s = o(e, t, n, r, i, a);
	if (s !== void 0) return s;
	if (typeof e == typeof t) switch (typeof e) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return e === t;
		case "number": return e === t || Object.is(e, t);
		case "function": return e === t;
		case "object": return XL(e, t, a, o);
	}
	return XL(e, t, a, o);
}
function XL(e, t, n, r) {
	if (Object.is(e, t)) return !0;
	let i = na(e), a = na(t);
	if (i === "[object Arguments]" && (i = ha), a === "[object Arguments]" && (a = ha), i !== a) return !1;
	switch (i) {
		case ia: return e.toString() === t.toString();
		case aa: return Ia(e.valueOf(), t.valueOf());
		case oa:
		case la:
		case ca: return Object.is(e.valueOf(), t.valueOf());
		case ra: return e.source === t.source && e.flags === t.flags;
		case pa: return e === t;
	}
	n ??= /* @__PURE__ */ new Map();
	let o = n.get(e), s = n.get(t);
	if (o != null && s != null) return o === t;
	n.set(e, t), n.set(t, e);
	try {
		switch (i) {
			case ua:
				if (e.size !== t.size) return !1;
				for (let [i, a] of e.entries()) if (!t.has(i) || !YL(a, t.get(i), i, e, t, n, r)) return !1;
				return !0;
			case da: {
				if (e.size !== t.size) return !1;
				let i = Array.from(e.values()), a = Array.from(t.values());
				for (let o = 0; o < i.length; o++) {
					let s = i[o], c = a.findIndex((i) => YL(s, i, void 0, e, t, n, r));
					if (c === -1) return !1;
					a.splice(c, 1);
				}
				return !0;
			}
			case fa:
			case va:
			case ya:
			case ba:
			case xa:
			case Sa:
			case Ca:
			case wa:
			case Ta:
			case Ea:
			case Da:
			case Oa:
				if (Aa(e) !== Aa(t) || e.length !== t.length) return !1;
				for (let i = 0; i < e.length; i++) if (!YL(e[i], t[i], i, e, t, n, r)) return !1;
				return !0;
			case ma: return e.byteLength === t.byteLength && XL(new Uint8Array(e), new Uint8Array(t), n, r);
			case _a: return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : XL(new Uint8Array(e), new Uint8Array(t), n, r);
			case ga: return e.name === t.name && e.message === t.message;
			case ha: {
				if (!(XL(e.constructor, t.constructor, n, r) || qL(e) && qL(t))) return !1;
				let i = [...Object.keys(e), ...ta(e)], a = [...Object.keys(t), ...ta(t)];
				if (i.length !== a.length) return !1;
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = e[o];
					if (!Object.hasOwn(t, o)) return !1;
					let c = t[o];
					if (!YL(s, c, o, e, t, n, r)) return !1;
				}
				return !0;
			}
			default: return !1;
		}
	} finally {
		n.delete(e), n.delete(t);
	}
}
// node_modules/es-toolkit/dist/predicate/isEqual.mjs
function ZL(e, t) {
	return JL(e, t, KL);
}
// node_modules/recharts/es6/util/getEveryNth.js
function QL(e, t) {
	if (t < 1) return [];
	if (t === 1) return e;
	for (var n = [], r = 0; r < e.length; r += t) {
		var i = e[r];
		i !== void 0 && n.push(i);
	}
	return n;
}
// node_modules/recharts/es6/util/TickUtils.js
function $L(e, t, n) {
	return CL({
		width: e.width + t.width,
		height: e.height + t.height
	}, n);
}
function eR(e, t, n) {
	var r = n === "width", i = e.x, a = e.y, o = e.width, s = e.height;
	return t === 1 ? {
		start: r ? i : a,
		end: r ? i + o : a + s
	} : {
		start: r ? i + o : a + s,
		end: r ? i : a
	};
}
function tR(e, t, n, r, i) {
	if (e * t < e * r || e * t > e * i) return !1;
	var a = n();
	return e * (t - e * a / 2 - r) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function nR(e, t) {
	return QL(e, t + 1);
}
// node_modules/recharts/es6/cartesian/getEquidistantTicks.js
function rR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function iR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rR(Object(n), !0).forEach(function(t) {
			aR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function aR(e, t, n) {
	return (t = oR(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function oR(e) {
	var t = sR(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function sR(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function cR(e, t, n, r, i) {
	for (var a = (r || []).slice(), o = t.start, s = t.end, c = 0, l = 1, u = o, d, f = function() {
		var t = r?.[c];
		if (t === void 0) {
			var a = QL(r, l), f = a[0];
			return d == null || f == null ? { v: a } : { v: [iR(iR({}, f), {}, { tickCoord: d }), ...a.slice(1)] };
		}
		var p = c, m, h = () => (m === void 0 && (m = n(t, p)), m), g = t.coordinate;
		if (c === 0) {
			var _ = e * (g - e * h() / 2 - u);
			_ < 0 && (g -= _ * e, d = g);
		}
		var v = c === 0 || tR(e, g, h, u, s);
		v || (c = 0, u = o, l += 1), v && (u = g + e * (h() / 2 + i), c += l);
	}, p; l <= a.length;) if (p = f(), p) return p.v;
	return [];
}
function lR(e, t, n, r, i) {
	var a = (r || []).slice().length;
	if (a === 0) return [];
	for (var o = t.start, s = t.end, c = 1; c <= a; c++) {
		for (var l = (a - 1) % c, u = o, d = !0, f = void 0, p = function() {
			var t = r[h];
			if (t == null) return 0;
			var o = h, c, p = () => (c === void 0 && (c = n(t, o)), c), m = t.coordinate;
			if (h === a - 1) {
				var g = e * (m + e * p() / 2 - s);
				g > 0 && (m -= g * e), f = m;
			}
			var _ = h === l || tR(e, m, p, u, s);
			if (!_) return d = !1, 1;
			_ && (u = m + e * (p() / 2 + i));
		}, m, h = l; h < a && (m = p(), m === 0 || m !== 1); h += c);
		if (d) {
			for (var g = [], _ = l; _ < a; _ += c) {
				var v = r[_];
				v != null && g.push(_ === a - 1 && f != null ? iR(iR({}, v), {}, { tickCoord: f }) : v);
			}
			return g;
		}
	}
	return [];
}
// node_modules/recharts/es6/cartesian/getTicks.js
function uR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function dR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? uR(Object(n), !0).forEach(function(t) {
			fR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function fR(e, t, n) {
	return (t = pR(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pR(e) {
	var t = mR(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mR(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hR(e, t, n, r, i) {
	for (var a = (r || []).slice(), o = a.length, s = t.start, c = t.end, l = function(t) {
		var r = a[t];
		if (r == null) return 1;
		var l = r, u, d = () => (u === void 0 && (u = n(r, t)), u);
		if (t === o - 1) {
			var f = e * (l.coordinate + e * d() / 2 - c);
			a[t] = l = dR(dR({}, l), {}, { tickCoord: f > 0 ? l.coordinate - f * e : l.coordinate });
		} else a[t] = l = dR(dR({}, l), {}, { tickCoord: l.coordinate });
		l.tickCoord != null && tR(e, l.tickCoord, d, s, c) && (c = l.tickCoord - e * (d() / 2 + i), a[t] = dR(dR({}, l), {}, { isShow: !0 }));
	}, u = o - 1; u >= 0; u--) if (l(u)) continue;
	return a;
}
function gR(e, t, n, r, i, a) {
	var o = (r || []).slice(), s = o.length, c = t.start, l = t.end;
	if (a) {
		var u = r[s - 1];
		if (u != null) {
			var d = n(u, s - 1), f = e * (u.coordinate + e * d / 2 - l);
			o[s - 1] = u = dR(dR({}, u), {}, { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate }), u.tickCoord != null && tR(e, u.tickCoord, () => d, c, l) && (l = u.tickCoord - e * (d / 2 + i), o[s - 1] = dR(dR({}, u), {}, { isShow: !0 }));
		}
	}
	for (var p = a ? s - 1 : s, m = function(t) {
		var r = o[t];
		if (r == null) return 1;
		var a = r, s, u = () => (s === void 0 && (s = n(r, t)), s);
		if (t === 0) {
			var d = e * (a.coordinate - e * u() / 2 - c);
			o[t] = a = dR(dR({}, a), {}, { tickCoord: d < 0 ? a.coordinate - d * e : a.coordinate });
		} else o[t] = a = dR(dR({}, a), {}, { tickCoord: a.coordinate });
		a.tickCoord != null && tR(e, a.tickCoord, u, c, l) && (c = a.tickCoord + e * (u() / 2 + i), o[t] = dR(dR({}, a), {}, { isShow: !0 }));
	}, h = 0; h < p; h++) if (m(h)) continue;
	return o;
}
function _R(e, t, n) {
	var r = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, c = e.interval, l = e.tickFormatter, u = e.unit, d = e.angle;
	if (!i || !i.length || !r) return [];
	if (I(c) || Sp.isSsr) return nR(i, I(c) ? c : 0) ?? [];
	var f = [], p = s === "top" || s === "bottom" ? "width" : "height", m = u && p === "width" ? DA(u, {
		fontSize: t,
		letterSpacing: n
	}) : {
		width: 0,
		height: 0
	}, h = (e, r) => {
		var i = typeof l == "function" ? l(e.value, r) : e.value;
		return p === "width" ? $L(DA(i, {
			fontSize: t,
			letterSpacing: n
		}), m, d) : DA(i, {
			fontSize: t,
			letterSpacing: n
		})[p];
	}, g = i[0], _ = i[1], v = i.length >= 2 && g != null && _ != null ? pt(_.coordinate - g.coordinate) : 1, y = eR(a, v, p);
	return c === "equidistantPreserveStart" ? cR(v, y, h, i, o) : c === "equidistantPreserveEnd" ? lR(v, y, h, i, o) : (f = c === "preserveStart" || c === "preserveStartEnd" ? gR(v, y, h, i, o, c === "preserveStartEnd") : hR(v, y, h, i, o), f.filter((e) => e.isShow));
}
// node_modules/recharts/es6/util/YAxisUtils.js
var vR = (e) => {
	var t = e.ticks, n = e.label, r = e.labelGapWithTick, i = r === void 0 ? 5 : r, a = e.tickSize, o = a === void 0 ? 0 : a, s = e.tickMargin, c = s === void 0 ? 0 : s, l = 0;
	if (t) {
		Array.from(t).forEach((e) => {
			if (e) {
				var t = e.getBoundingClientRect();
				t.width > l && (l = t.width);
			}
		});
		var u = n ? n.getBoundingClientRect().width : 0, d = o + c, f = l + d + u + (n ? i : 0);
		return Math.round(f);
	}
	return 0;
}, yR = (e) => {
	var t = e.ticks, n = e.label, r = e.labelGapWithTick, i = r === void 0 ? 5 : r, a = e.tickSize, o = a === void 0 ? 0 : a, s = e.tickMargin, c = s === void 0 ? 0 : s, l = 0;
	if (t) {
		Array.from(t).forEach((e) => {
			if (e) {
				var t = e.getBoundingClientRect();
				t.height > l && (l = t.height);
			}
		});
		var u = n ? n.getBoundingClientRect().height : 0, d = o + c, f = l + d + u + (n ? i : 0);
		return Math.round(f);
	}
	return 0;
}, bR = Xc({
	name: "renderedTicks",
	initialState: {
		xAxis: {},
		yAxis: {}
	},
	reducers: {
		setRenderedTicks: (e, t) => {
			var n = t.payload, r = n.axisType, i = n.axisId, a = n.ticks;
			Cf(e[r][i], a) || (e[r][i] = U(a));
		},
		removeRenderedTicks: (e, t) => {
			var n = t.payload, r = n.axisType, i = n.axisId;
			delete e[r][i];
		}
	}
}), xR = bR.actions, SR = xR.setRenderedTicks, CR = xR.removeRenderedTicks, wR = bR.reducer, TR = [
	"axisLine",
	"width",
	"height",
	"className",
	"hide",
	"ticks",
	"axisType",
	"axisId"
];
function ER(e, t) {
	return jR(e) || AR(e, t) || OR(e, t) || DR();
}
function DR() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function OR(e, t) {
	if (e) {
		if (typeof e == "string") return kR(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kR(e, t) : void 0;
	}
}
function kR(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function AR(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function jR(e) {
	if (Array.isArray(e)) return e;
}
function MR(e, t) {
	if (e == null) return {};
	var n, r, i = NR(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function NR(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function PR() {
	return PR = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, PR.apply(null, arguments);
}
function FR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? FR(Object(n), !0).forEach(function(t) {
			IR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : FR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function IR(e, t, n) {
	return (t = LR(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function LR(e) {
	var t = RR(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function RR(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var zR = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	viewBox: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	orientation: "bottom",
	ticks: [],
	tickLine: !0,
	axisLine: !0,
	tick: !0,
	mirror: !1,
	minTickGap: 5,
	tickSize: 6,
	tickMargin: 2,
	interval: "preserveEnd",
	zIndex: J.axis
}, BR = { stroke: "#666" }, VR = {};
function HR(e) {
	var t = e.x, n = e.y, r = e.width, i = e.height, a = e.orientation, o = e.mirror, s = e.axisLine, c = e.otherSvgProps;
	if (!s) return null;
	var u = Z(Z(Z({}, c), ze(s)), {}, { fill: "none" });
	if (a === "top" || a === "bottom") {
		var d = +(a === "top" && !o || a === "bottom" && o);
		u = Z(Z({}, u), {}, {
			x1: t,
			y1: n + d * i,
			x2: t + r,
			y2: n + d * i
		});
	} else {
		var f = +(a === "left" && !o || a === "right" && o);
		u = Z(Z({}, u), {}, {
			x1: t + f * r,
			y1: n,
			x2: t + f * r,
			y2: n + i
		});
	}
	return /*#__PURE__*/ F.createElement("line", PR({}, u, { className: l("recharts-cartesian-axis-line", ct(s, "className")) }));
}
function UR(e, t, n, r, i, a, o, s, c) {
	var l, u, d, f, p, m, h = s ? -1 : 1, g = e.tickSize || o, _ = I(e.tickCoord) ? e.tickCoord : e.coordinate;
	switch (a) {
		case "top":
			l = u = e.coordinate, f = n + +!s * i, d = f - h * g, m = d - h * c, p = _;
			break;
		case "left":
			d = f = e.coordinate, u = t + +!s * r, l = u - h * g, p = l - h * c, m = _;
			break;
		case "right":
			d = f = e.coordinate, u = t + +s * r, l = u + h * g, p = l + h * c, m = _;
			break;
		default: l = u = e.coordinate, f = n + +s * i, d = f + h * g, m = d + h * c, p = _;
	}
	return {
		line: {
			x1: l,
			y1: d,
			x2: u,
			y2: f
		},
		tick: {
			x: p,
			y: m
		}
	};
}
function WR(e, t) {
	switch (e) {
		case "left": return t ? "start" : "end";
		case "right": return t ? "end" : "start";
		default: return "middle";
	}
}
function GR(e, t) {
	switch (e) {
		case "left":
		case "right": return "middle";
		case "top": return t ? "start" : "end";
		default: return t ? "end" : "start";
	}
}
function KR(e) {
	var t = e.option, n = e.tickProps, r = e.value, i, a = l(n.className, "recharts-cartesian-axis-tick-value");
	if (/*#__PURE__*/ F.isValidElement(t)) i = /*#__PURE__*/ F.cloneElement(t, Z(Z({}, n), {}, { className: a }));
	else if (typeof t == "function") i = t(Z(Z({}, n), {}, { className: a }));
	else {
		var o = "recharts-cartesian-axis-tick-value";
		typeof t != "boolean" && (o = l(o, aP(t))), i = /*#__PURE__*/ F.createElement(dM, PR({}, n, { className: o }), r);
	}
	return i;
}
function qR(e) {
	var t = e.ticks, n = e.axisType, r = e.axisId, i = B(), a = (0, F.useRef)(null);
	return (0, F.useEffect)(() => {
		if (r != null && n != null) {
			var e = t.map((e) => ({
				value: e.value,
				coordinate: e.coordinate,
				offset: e.offset,
				index: e.index
			})), o = a.current;
			o != null && o.axisId === r && o.axisType === n && ZL(o.ticks, e) || (a.current = {
				ticks: e,
				axisId: r,
				axisType: n
			}, i(SR({
				ticks: e,
				axisId: r,
				axisType: n
			})));
		}
	}, [
		i,
		t,
		r,
		n
	]), (0, F.useEffect)(() => r == null || n == null ? wt : () => {
		a.current = null, i(CR({
			axisId: r,
			axisType: n
		}));
	}, [
		i,
		r,
		n
	]), null;
}
var JR = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.axisId, r = e.axisType, i = e.events, a = e.fontSize, o = e.getTicksConfig, s = e.height, c = e.letterSpacing, u = e.mirror, d = e.orientation, f = e.padding, p = e.stroke, m = e.strokeDasharray, h = e.strokeOpacity, g = e.strokeWidth, _ = e.style, v = e.tick, y = e.tickFormatter, b = e.tickLine, x = e.tickMargin, S = e.tickSize, C = e.tickTextProps, w = e.ticks, T = w === void 0 ? [] : w, E = e.unit, D = e.width, O = e.x, k = e.y, A = _R(Z(Z({}, o), {}, { ticks: T }), a, c), j = ze(o), M = Be(v), N = Ij(j.textAnchor) ? j.textAnchor : WR(d, u), P = GR(d, u), ee = {};
	typeof b == "object" && (ee = b);
	var te = Z(Z({}, j), {}, {
		stroke: p,
		strokeWidth: g,
		strokeOpacity: h,
		strokeDasharray: m,
		fill: "none"
	}, ee), ne = A.map((e) => Z({ entry: e }, UR(e, O, k, D, s, d, S, u, x))), re = ne.map((e) => {
		var t = e.entry, n = e.line;
		return /*#__PURE__*/ F.createElement($e, {
			className: "recharts-cartesian-axis-tick",
			key: `tick-${t.value}-${t.coordinate}-${t.tickCoord}`
		}, b && /*#__PURE__*/ F.createElement("line", PR({}, te, n, { className: l("recharts-cartesian-axis-tick-line", ct(b, "className")) })));
	}), ie = ne.map((e, t) => {
		var n = e.entry, r = e.tick, a = Z(Z({}, Z(Z(Z(Z({ verticalAnchor: P }, j), {}, {
			textAnchor: N,
			stroke: "none",
			fill: p
		}, r), {}, {
			index: t,
			payload: n,
			visibleTicksCount: A.length,
			tickFormatter: y,
			padding: f
		}, C), {}, { angle: C?.angle ?? j.angle ?? 0 })), M);
		return /*#__PURE__*/ F.createElement($e, PR({
			className: "recharts-cartesian-axis-tick-label",
			key: `tick-label-${n.value}-${n.coordinate}-${n.tickCoord}`
		}, _i(i, n, t)), v && /*#__PURE__*/ F.createElement(KR, {
			option: v,
			tickProps: a,
			value: `${typeof y == "function" ? y(n.value, t) : n.value}${E || ""}`
		}));
	});
	return /*#__PURE__*/ F.createElement("g", { className: `recharts-cartesian-axis-ticks recharts-${r}-ticks` }, /*#__PURE__*/ F.createElement(qR, {
		ticks: A,
		axisId: n,
		axisType: r
	}), ie.length > 0 && /*#__PURE__*/ F.createElement(hk, { zIndex: J.label }, /*#__PURE__*/ F.createElement("g", {
		className: `recharts-cartesian-axis-tick-labels recharts-${r}-tick-labels`,
		ref: t,
		style: _
	}, ie)), re.length > 0 && /*#__PURE__*/ F.createElement("g", { className: `recharts-cartesian-axis-tick-lines recharts-${r}-tick-lines` }, re));
}), YR = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.axisLine, r = e.width, i = e.height, a = e.className, o = e.hide, s = e.ticks, c = e.axisType, u = e.axisId, d = MR(e, TR), f = ER((0, F.useState)(""), 2), p = f[0], m = f[1], h = ER((0, F.useState)(""), 2), g = h[0], _ = h[1], v = (0, F.useRef)(null);
	(0, F.useImperativeHandle)(t, () => ({
		getCalculatedWidth: () => vR({
			ticks: v.current,
			label: e.labelRef?.current,
			labelGapWithTick: 5,
			tickSize: e.tickSize,
			tickMargin: e.tickMargin
		}),
		getCalculatedHeight: () => yR({
			ticks: v.current,
			label: e.labelRef?.current,
			labelGapWithTick: 5,
			tickSize: e.tickSize,
			tickMargin: e.tickMargin
		})
	}));
	var y = (0, F.useCallback)((e) => {
		if (e) {
			var t = e.getElementsByClassName("recharts-cartesian-axis-tick-value");
			v.current = t;
			var n = t[0];
			if (n) {
				var r = window.getComputedStyle(n), i = r.fontSize, a = r.letterSpacing;
				(i !== p || a !== g) && (m(i), _(a));
			}
		}
	}, [p, g]), b = Ti((e) => e.axis, e, BR), x = Ti((e) => e.typography, VR, VR);
	return o || r != null && r <= 0 || i != null && i <= 0 ? null : /*#__PURE__*/ F.createElement(hk, { zIndex: e.zIndex }, /*#__PURE__*/ F.createElement($e, { className: l("recharts-cartesian-axis", a) }, /*#__PURE__*/ F.createElement(HR, {
		x: e.x,
		y: e.y,
		width: r,
		height: i,
		orientation: e.orientation,
		mirror: e.mirror,
		axisLine: n,
		otherSvgProps: Z(Z({}, ze(e)), {}, {
			stroke: b.stroke,
			strokeWidth: b.strokeWidth,
			strokeOpacity: b.strokeOpacity,
			strokeDasharray: b.strokeDasharray
		})
	}), /*#__PURE__*/ F.createElement(JR, {
		axisId: u,
		axisType: c,
		events: d,
		fontSize: p,
		getTicksConfig: e,
		height: e.height,
		letterSpacing: g,
		mirror: e.mirror,
		orientation: e.orientation,
		padding: e.padding,
		ref: y,
		stroke: b.stroke,
		strokeDasharray: b.strokeDasharray,
		strokeOpacity: b.strokeOpacity,
		strokeWidth: b.strokeWidth,
		style: Z(Z({}, x), e.style),
		tick: e.tick,
		tickFormatter: e.tickFormatter,
		tickLine: e.tickLine,
		tickMargin: e.tickMargin,
		tickSize: e.tickSize,
		tickTextProps: e.tickTextProps,
		ticks: s,
		unit: e.unit,
		width: e.width,
		x: e.x,
		y: e.y
	}), /*#__PURE__*/ F.createElement(QM, {
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		lowerWidth: e.width,
		upperWidth: e.width
	}, /*#__PURE__*/ F.createElement(pN, {
		label: e.label,
		labelRef: e.labelRef
	}), e.children)));
}), XR = /*#__PURE__*/ F.forwardRef((e, t) => {
	var n = Ci(e, zR);
	return /*#__PURE__*/ F.createElement(YR, PR({}, n, { ref: t }));
});
XR.displayName = "CartesianAxis";
// node_modules/recharts/es6/cartesian/CartesianGrid.js
var ZR = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], QR = ["offset"], $R = ["xAxisId", "yAxisId"], ez = ["xAxisId", "yAxisId"];
function tz(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function nz(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? tz(Object(n), !0).forEach(function(t) {
			rz(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tz(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function rz(e, t, n) {
	return (t = iz(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function iz(e) {
	var t = az(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function az(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function oz() {
	return oz = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, oz.apply(null, arguments);
}
function sz(e, t) {
	if (e == null) return {};
	var n, r, i = cz(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function cz(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var lz = (e) => {
	var t = e.fill;
	if (!t || t === "none") return null;
	var n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.ry;
	return /*#__PURE__*/ F.createElement("rect", {
		x: r,
		y: i,
		ry: s,
		width: a,
		height: o,
		stroke: "none",
		fill: t,
		fillOpacity: n,
		className: "recharts-cartesian-grid-bg"
	});
};
function uz(e) {
	var t = e.option, n = e.lineItemProps, r;
	if (/*#__PURE__*/ F.isValidElement(t)) r = /*#__PURE__*/ F.cloneElement(t, n);
	else if (typeof t == "function") r = t(n);
	else {
		var i = n.x1, a = n.y1, o = n.x2, s = n.y2, c = n.key, l = ze(sz(n, ZR)) ?? {};
		l.offset;
		var u = sz(l, QR), d = Array.isArray(u.strokeDasharray) ? u.strokeDasharray.join(",") : u.strokeDasharray;
		r = /*#__PURE__*/ F.createElement("line", oz({}, u, {
			strokeDasharray: d,
			x1: i,
			y1: a,
			x2: o,
			y2: s,
			fill: "none",
			key: c
		}));
	}
	return r;
}
function dz(e) {
	var t = e.x, n = e.width, r = e.horizontal, i = r === void 0 || r, a = e.horizontalPoints;
	if (!i || !a || !a.length) return null;
	e.xAxisId, e.yAxisId;
	var o = sz(e, $R), s = a.map((e, r) => {
		var a = nz(nz({}, o), {}, {
			x1: t,
			y1: e,
			x2: t + n,
			y2: e,
			key: `line-${r}`,
			index: r
		});
		return /*#__PURE__*/ F.createElement(uz, {
			key: `line-${r}`,
			option: i,
			lineItemProps: a
		});
	});
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, s);
}
function fz(e) {
	var t = e.y, n = e.height, r = e.vertical, i = r === void 0 || r, a = e.verticalPoints;
	if (!i || !a || !a.length) return null;
	e.xAxisId, e.yAxisId;
	var o = sz(e, ez), s = a.map((e, r) => {
		var a = nz(nz({}, o), {}, {
			x1: e,
			y1: t,
			x2: e,
			y2: t + n,
			key: `line-${r}`,
			index: r
		});
		return /*#__PURE__*/ F.createElement(uz, {
			option: i,
			lineItemProps: a,
			key: `line-${r}`
		});
	});
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-cartesian-grid-vertical" }, s);
}
function pz(e) {
	var t = e.horizontalFill, n = e.fillOpacity, r = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal;
	if (!(c === void 0 || c) || !t || !t.length || s == null) return null;
	var l = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
	i !== l[0] && l.unshift(0);
	var u = l.map((e, s) => {
		var c = l[s + 1], u = c == null ? i + o - e : c - e;
		if (u <= 0) return null;
		var d = s % t.length;
		return /*#__PURE__*/ F.createElement("rect", {
			key: `react-${s}`,
			y: e,
			x: r,
			height: u,
			width: a,
			stroke: "none",
			fill: t[d],
			fillOpacity: n,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u);
}
function mz(e) {
	var t = e.vertical, n = t === void 0 || t, r = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, c = e.height, l = e.verticalPoints;
	if (!n || !r || !r.length) return null;
	var u = l.map((e) => Math.round(e + a - a)).sort((e, t) => e - t);
	a !== u[0] && u.unshift(0);
	var d = u.map((e, t) => {
		var n = u[t + 1], l = n == null ? a + s - e : n - e;
		if (l <= 0) return null;
		var d = t % r.length;
		return /*#__PURE__*/ F.createElement("rect", {
			key: `react-${t}`,
			x: e,
			y: o,
			width: l,
			height: c,
			stroke: "none",
			fill: r[d],
			fillOpacity: i,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /*#__PURE__*/ F.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, d);
}
function hz(e) {
	return typeof e != "object" || !e || /*#__PURE__*/ F.isValidElement(e) ? {} : {
		fontSize: "fontSize" in e && e.fontSize != null ? `${e.fontSize}`.replace(/^(\d+(\.\d+)?)$/, "$1px") : void 0,
		letterSpacing: "letterSpacing" in e && e.letterSpacing != null ? String(e.letterSpacing) : void 0
	};
}
var gz = (e, t) => {
	var n = e.xAxis, r = e.width, i = e.height, a = e.offset, o = hz(n?.tick), s = o.fontSize, c = o.letterSpacing;
	return lu(_R(nz(nz(nz({}, zR), n), {}, {
		ticks: uu(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	}), s, c), a.left, a.left + a.width, t);
}, _z = (e, t) => {
	var n = e.yAxis, r = e.width, i = e.height, a = e.offset, o = hz(n?.tick), s = o.fontSize, c = o.letterSpacing;
	return lu(_R(nz(nz(nz({}, zR), n), {}, {
		ticks: uu(n, !0),
		viewBox: {
			x: 0,
			y: 0,
			width: r,
			height: i
		}
	}), s, c), a.top, a.top + a.height, t);
};
function vz(e, t, n) {
	return e === t || n != null && Sf(e, t);
}
function yz(e, t) {
	return e === t ? !0 : e == null || t == null ? !1 : e.angle === t.angle && e.axisType === t.axisType && e.interval === t.interval && e.isCategorical === t.isCategorical && e.minTickGap === t.minTickGap && e.orientation === t.orientation && e.realScaleType === t.realScaleType && e.tick === t.tick && e.tickCount === t.tickCount && e.tickFormatter === t.tickFormatter && e.type === t.type && e.unit === t.unit && xf(e.categoricalDomain, t.categoricalDomain) && xf(e.duplicateDomain, t.duplicateDomain) && xf(e.niceTicks, t.niceTicks) && xf(e.range, t.range) && xf(e.ticks, t.ticks) && vz(e.scale, t.scale, e.realScaleType);
}
var bz = {
	horizontal: !0,
	vertical: !0,
	horizontalPoints: [],
	verticalPoints: [],
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0,
	syncWithTicks: !1,
	zIndex: J.grid
}, xz = {
	fill: "none",
	stroke: "#ccc"
};
function Sz(e) {
	var t = Fd(), n = Id(), r = Pd(), i = qr(e.horizontalFill, "recharts-cartesian-grid-horizontal-fill"), a = qr(e.verticalFill, "recharts-cartesian-grid-vertical-fill"), o = nz(nz({}, e), {}, {
		fill: Nr(e.fill).color,
		horizontalFill: e.horizontalFill == null ? void 0 : i.paints,
		verticalFill: e.verticalFill == null ? void 0 : a.paints
	}), s = nz(nz({}, Ci(o, bz)), {}, {
		x: I(o.x) ? o.x : r.left,
		y: I(o.y) ? o.y : r.top,
		width: I(o.width) ? o.width : r.width,
		height: I(o.height) ? o.height : r.height
	}), c = s.xAxisId, l = s.yAxisId, u = s.x, d = s.y, f = s.width, p = s.height, m = s.syncWithTicks, h = s.horizontalValues, g = s.verticalValues, _ = Xu(), v = V(eD), y = ZO(), b = F.useCallback((e) => oE(e, "xAxis", c, _), [_, c]), x = F.useCallback((e) => oE(e, "yAxis", l, _), [_, l]), S = V(b, yz), C = V(x, yz), w = Ti((e) => Cr(e.grid), s, xz), T = Er((e) => e.grid), E = Kr(e.fill ?? T, w.fill, "recharts-cartesian-grid-fill");
	if (!Kl(f) || !Kl(p) || !I(u) || !I(d)) return null;
	var D = s.verticalCoordinatesGenerator || gz, O = s.horizontalCoordinatesGenerator || _z, k = s.horizontalPoints, A = s.verticalPoints;
	if ((!k || !k.length) && typeof O == "function") {
		var j = h && h.length, M = O({
			yAxis: C ? nz(nz({}, C), {}, { ticks: j ? h : C.ticks }) : void 0,
			width: t ?? f,
			height: n ?? p,
			offset: r
		}, j ? !0 : m);
		nd(Array.isArray(M), `horizontalCoordinatesGenerator should return Array but instead it returned [${typeof M}]`), Array.isArray(M) && (k = M);
	}
	if ((!A || !A.length) && typeof D == "function") {
		var N = g && g.length, P = D({
			xAxis: S ? nz(nz({}, S), {}, { ticks: N ? g : S.ticks }) : void 0,
			width: t ?? f,
			height: n ?? p,
			offset: r
		}, N ? !0 : m);
		nd(Array.isArray(P), `verticalCoordinatesGenerator should return Array but instead it returned [${typeof P}]`), Array.isArray(P) && (A = P);
	}
	return v && (k = k?.filter((e) => e >= d - .5 && e <= d + p + .5), A = A?.filter((e) => e >= u - .5 && e <= u + f + .5)), /*#__PURE__*/ F.createElement(hk, { zIndex: s.zIndex }, /*#__PURE__*/ F.createElement("g", {
		className: "recharts-cartesian-grid",
		clipPath: v && y != null ? `url(#${y})` : void 0
	}, (E.definition != null || i.definitions != null || a.definitions != null) && /*#__PURE__*/ F.createElement("defs", null, E.definition, i.definitions, a.definitions), /*#__PURE__*/ F.createElement(lz, {
		fill: E.paint,
		fillOpacity: w.fillOpacity,
		x: s.x,
		y: s.y,
		width: s.width,
		height: s.height,
		ry: s.ry
	}), /*#__PURE__*/ F.createElement(pz, oz({}, s, { horizontalPoints: k })), /*#__PURE__*/ F.createElement(mz, oz({}, s, { verticalPoints: A })), /*#__PURE__*/ F.createElement(dz, oz({}, s, w, {
		offset: r,
		horizontalPoints: k,
		xAxis: S,
		yAxis: C
	})), /*#__PURE__*/ F.createElement(fz, oz({}, s, w, {
		offset: r,
		verticalPoints: A,
		xAxis: S,
		yAxis: C
	}))));
}
Sz.displayName = "CartesianGrid";
// node_modules/es-toolkit/dist/function/once.mjs
function Cz(e) {
	let t = !1, n;
	return function(...r) {
		return t || (t = !0, n = e(...r)), n;
	};
}
// node_modules/recharts/es6/cartesian/LineDrawShape.js
var wz = [
	"animationElapsedTime",
	"isAnimating",
	"isEntrance",
	"visibleLength",
	"strokeDasharray",
	"connectNulls"
];
function Tz() {
	return Tz = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Tz.apply(null, arguments);
}
function Ez(e, t) {
	if (e == null) return {};
	var n, r, i = Dz(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Dz(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Oz(e) {
	try {
		return e && e.getTotalLength && e.getTotalLength() || 0;
	} catch {
		return 0;
	}
}
function kz(e, t) {
	return `${t}px ${e}px`;
}
function Az(e) {
	return e.length % 2 == 0 ? e : [...e, ...e];
}
function jz(e, t) {
	for (var n = [], r = 0; r < t; ++r) n.push(...e);
	return n;
}
function Mz(e, t, n) {
	var r = Az(n), i = r.reduce((e, t) => e + t, 0);
	if (!i) return kz(t, e);
	for (var a = Math.floor(e / i), o = e % i, s = [], c = 0, l = 0; c < r.length; l += (u = r[c]) ?? 0, ++c) {
		var u, d = r[c];
		if (d != null && l + d > o) {
			s = [...r.slice(0, c), o - l];
			break;
		}
	}
	var f = s.length % 2 == 0 ? [0, t] : [t];
	return [
		...jz(r, a),
		...s,
		...f
	].map((e) => `${e}px`).join(", ");
}
function Nz(e, t, n) {
	return e ? Mz(n, t, `${e}`.split(/[,\s]+/gim).map((e) => parseFloat(e))) : kz(t, n);
}
function Pz(e) {
	e.animationElapsedTime, e.isAnimating, e.isEntrance;
	var t = e.visibleLength, n = e.strokeDasharray, r = e.connectNulls, i = Ez(e, wz), a = r ?? !1, o;
	if (t != null) {
		var s = i.pathRef;
		o = Nz(n, Oz(s?.current ?? null), t);
	} else n != null && (o = String(n));
	return /*#__PURE__*/ F.createElement(sm, Tz({}, i, {
		connectNulls: a,
		strokeDasharray: o
	}));
}
// node_modules/recharts/es6/cartesian/useAnimatedLineLength.js
function Fz(e) {
	var t = (0, F.useRef)(0), n = (0, F.useRef)(0), r = (0, F.useRef)(!1), i = (0, F.useRef)(e);
	return i.current !== e && (t.current = n.current, i.current = e), (0, F.useCallback)((e, i) => {
		if (r.current) return null;
		var a = Math.min(dt(t.current + e * i), i);
		return e > 0 && i > 0 && (n.current = Math.max(n.current, a), a >= i) ? (r.current = !0, null) : a;
	}, []);
}
// node_modules/recharts/es6/state/errorBarSlice.js
var Iz = Xc({
	name: "errorBars",
	initialState: {},
	reducers: {
		addErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.errorBar;
			e[r] || (e[r] = []), e[r].push(i);
		},
		replaceErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.prev, a = n.next;
			e[r] && (e[r] = e[r].map((e) => e.dataKey === i.dataKey && e.direction === i.direction ? a : e));
		},
		removeErrorBar: (e, t) => {
			var n = t.payload, r = n.itemId, i = n.errorBar;
			e[r] && (e[r] = e[r].filter((e) => e.dataKey !== i.dataKey || e.direction !== i.direction));
		}
	}
}), Lz = Iz.actions;
Lz.addErrorBar, Lz.replaceErrorBar, Lz.removeErrorBar;
var Rz = Iz.reducer, zz = ["children"];
function Bz(e, t) {
	if (e == null) return {};
	var n, r, i = Vz(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Vz(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Hz = /*#__PURE__*/ (0, F.createContext)({
	data: [],
	xAxisId: "xAxis-0",
	yAxisId: "yAxis-0",
	dataPointFormatter: () => ({
		x: 0,
		y: 0,
		value: 0
	}),
	errorBarOffset: 0,
	clipPath: void 0
});
function Uz(e) {
	var t = e.children, n = Bz(e, zz);
	return /*#__PURE__*/ F.createElement(Hz.Provider, { value: n }, t);
}
// node_modules/recharts/es6/state/selectors/lineSelectors.js
var Wz = (e, t, n, r) => dE(e, "xAxis", t, r), Gz = (e, t, n, r) => uE(e, "xAxis", t, r), Kz = (e, t, n, r) => dE(e, "yAxis", n, r), qz = (e, t, n, r) => uE(e, "yAxis", n, r), Jz = H([
	K,
	Wz,
	Kz,
	Gz,
	qz
], (e, t, n, r, i) => cu(e, "xAxis") ? wu(t, r, !1) : wu(n, i, !1)), Yz = (e, t, n, r, i) => i;
function Xz(e) {
	return e.type === "line";
}
var Zz = H([
	K,
	Wz,
	Kz,
	Gz,
	qz,
	H([mw, Yz], (e, t) => e.filter(Xz).find((e) => e.id === t)),
	Jz,
	_g
], (e, t, n, r, i, a, o, s) => {
	var c = s.chartData, l = s.dataStartIndex, u = s.dataEndIndex;
	if (!(a == null || t == null || n == null || r == null || i == null || r.length === 0 || i.length === 0 || o == null || e !== "horizontal" && e !== "vertical")) {
		var d = a.dataKey, f = a.data, p = f != null && f.length > 0 ? f : c?.slice(l, u + 1);
		if (p != null) return EB({
			layout: e,
			xAxis: t,
			yAxis: n,
			xAxisTicks: r,
			yAxisTicks: i,
			dataKey: d,
			bandSize: o,
			displayedData: p
		});
	}
});
// node_modules/recharts/es6/util/getRadiusAndStrokeWidthFromDot.js
function Qz(e) {
	var t = Be(e), n = 3, r = 2;
	if (t != null) {
		var i = t.r, a = t.strokeWidth, o = Number(i), s = Number(a);
		return (Number.isNaN(o) || o < 0) && (o = n), (Number.isNaN(s) || s < 0) && (s = r), {
			r: o,
			strokeWidth: s
		};
	}
	return {
		r: n,
		strokeWidth: r
	};
}
// node_modules/recharts/es6/cartesian/Line.js
var $z = ["id"], eB = [
	"type",
	"layout",
	"connectNulls",
	"needClip",
	"shape",
	"strokeDasharray"
], tB = [
	"activeDot",
	"animateNewValues",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"hide",
	"isAnimationActive",
	"label",
	"legendType",
	"xAxisId",
	"yAxisId",
	"id"
];
function nB() {
	return nB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, nB.apply(null, arguments);
}
function rB(e, t) {
	if (e == null) return {};
	var n, r, i = iB(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function iB(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function aB(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function oB(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? aB(Object(n), !0).forEach(function(t) {
			sB(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aB(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function sB(e, t, n) {
	return (t = cB(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function cB(e) {
	var t = lB(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function lB(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function uB(e) {
	try {
		return e && e.getTotalLength && e.getTotalLength() || 0;
	} catch {
		return 0;
	}
}
function dB(e) {
	var t = 0, n = 0;
	for (var r of e) r.status === "matched" && r.prev.x != null && r.next.x != null && (t += r.next.x - r.prev.x, n++);
	return n > 0 ? t / n : 0;
}
var fB = (e, t) => {
	if (e == null) return [];
	if (t === 1) return e.flatMap((e) => e.status === "removed" ? [] : [e.next]);
	var n = dB(e), r = [];
	for (var i of e) if (i.status === "matched") r.push(oB(oB({}, i.next), {}, {
		x: L(i.prev.x, i.next.x, t),
		y: L(i.prev.y, i.next.y, t)
	}));
	else if (i.status === "added") {
		if (i.next.x != null) {
			var a = i.next.x - n;
			r.push(oB(oB({}, i.next), {}, {
				x: L(a, i.next.x, t),
				y: i.next.y
			}));
		} else r.push(i.next);
	} else if (i.status === "removed" && i.prev.x != null) {
		var o = i.prev.x + n;
		r.push(oB(oB({}, i.prev), {}, {
			x: L(i.prev.x, o, t),
			y: i.prev.y
		}));
	}
	return r;
}, pB = {
	fill: "#fff",
	stroke: "#3182bd",
	strokeWidth: 1
}, mB = {
	activeDot: !0,
	animateNewValues: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: fB,
	animationMatchBy: LP,
	connectNulls: !1,
	dot: !0,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "line",
	shape: Pz,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: J.line,
	type: "linear"
};
function hB(e, t) {
	return e && e !== "none" ? e : t;
}
var gB = (e, t, n) => {
	var r = e.dataKey, i = e.name, a = e.stroke, o = e.fill, s = e.legendType, c = e.hide, l = e.dot;
	return [{
		inactive: c,
		dataKey: r,
		type: s,
		dot: nI(l, {
			fill: t ?? o,
			stroke: a
		}, n),
		color: a,
		value: Eu(i, r),
		payload: e
	}];
}, _B = /*#__PURE__*/ F.memo((e) => {
	var t = e.dataKey, n = e.data, r = e.stroke, i = e.strokeWidth, a = e.fill, o = e.name, s = e.hide, c = e.unit, l = e.formatter, u = e.tooltipType, d = e.id, f = {
		dataDefinedOnItem: n,
		getPosition: wt,
		settings: {
			stroke: r,
			strokeWidth: i,
			fill: a,
			dataKey: t,
			nameKey: void 0,
			name: Eu(o, t),
			hide: s,
			type: u,
			color: r,
			unit: c,
			formatter: l,
			graphicalItemId: d,
			ignoreDataEntryColors: !0
		}
	};
	return /*#__PURE__*/ F.createElement(OP, { tooltipEntrySettings: f });
});
function vB(e) {
	var t = e.clipPathId, n = e.points, r = e.props, i = r.dot, a = r.dataKey, o = r.dotFill, s = r.needClip, c = r.unthemedColors;
	r.id;
	var l = ze(rB(r, $z));
	return /*#__PURE__*/ F.createElement(gI, {
		points: n,
		dot: i,
		className: "recharts-line-dots",
		dotClassName: "recharts-line-dot",
		dataKey: a,
		baseProps: oB(oB({}, l), {}, { fill: o ?? l.fill }),
		unthemedColors: c,
		needClip: s,
		clipPathId: t
	});
}
function yB(e) {
	var t = e.showLabels, n = e.children, r = e.points, i = (0, F.useMemo)(() => Cz(() => r?.map((e) => {
		var t = {
			x: e.x ?? 0,
			y: e.y ?? 0,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return oB(oB({}, t), {}, {
			value: e.value,
			payload: e.payload,
			viewBox: t,
			parentViewBox: void 0,
			fill: void 0
		});
	})), [r]);
	return /*#__PURE__*/ F.createElement(TN, { value: t ? i : void 0 }, n);
}
function bB(e) {
	var t = e.clipPathId, n = e.pathRef, r = e.points, i = e.props, a = e.animationElapsedTime, o = e.isAnimating, s = e.isEntrance, c = e.visibleLength, l = i.type, u = i.layout, d = i.connectNulls, f = i.needClip, p = i.shape, m = i.strokeDasharray, h = oB(oB({}, Ve(rB(i, eB))), {}, {
		fill: "none",
		className: "recharts-line-curve",
		clipPath: f ? `url(#clipPath-${t})` : void 0,
		points: r,
		type: l,
		layout: u,
		connectNulls: d,
		strokeDasharray: m ?? i.strokeDasharray,
		pathRef: n,
		animationElapsedTime: a,
		isAnimating: o,
		isEntrance: i.animateNewValues ? s : !1,
		visibleLength: c
	});
	return /*#__PURE__*/ F.createElement(F.Fragment, null, r?.length > 1 && /*#__PURE__*/ F.createElement(wP, {
		option: p,
		DefaultShape: mB.shape,
		shapeProps: h
	}), /*#__PURE__*/ F.createElement(vB, {
		points: r,
		clipPathId: t,
		props: i
	}));
}
function xB(e) {
	var t = e.clipPathId, n = e.props, r = e.pathRef, i = e.previousPointsRef, a = n.points, o = n.isAnimationActive, s = n.animationBegin, c = n.animationDuration, l = n.animationEasing, u = n.animationMatchBy, d = n.animationInterpolateFn, f = n.layout, p = uB(r.current), m = QP(n.onAnimationStart, n.onAnimationEnd), h = m.isAnimating, g = m.handleAnimationStart, _ = m.handleAnimationEnd, v = !h, y = Fz(a), b = (0, F.useCallback)((e) => e > 0 && p > 0, [p]);
	return /*#__PURE__*/ F.createElement(yB, {
		points: a,
		showLabels: v
	}, n.children, /*#__PURE__*/ F.createElement($P, {
		animationInput: a,
		animationIdPrefix: "recharts-line-",
		items: a,
		previousItemsRef: i,
		isAnimationActive: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		onAnimationStart: g,
		onAnimationEnd: _,
		animationInterpolateFn: d,
		animationMatchBy: u,
		shouldUpdatePreviousRef: b,
		layout: f
	}, (e, i, a) => {
		var o = h || i < 1, s = o ? y(i, p) : null;
		return /*#__PURE__*/ F.createElement(bB, {
			props: n,
			points: e,
			clipPathId: t,
			pathRef: r,
			animationElapsedTime: i,
			isAnimating: o,
			isEntrance: a,
			visibleLength: s
		});
	}), /*#__PURE__*/ F.createElement(IN, { label: n.label }));
}
function SB(e) {
	var t = e.clipPathId, n = e.props, r = (0, F.useRef)(null), i = (0, F.useRef)(null);
	return /*#__PURE__*/ F.createElement(xB, {
		props: n,
		clipPathId: t,
		previousPointsRef: r,
		pathRef: i
	});
}
var CB = (e, t) => ({
	x: e.x ?? void 0,
	y: e.y ?? void 0,
	value: e.value,
	errorVal: G(e.payload, t)
}), wB = class extends F.Component {
	render() {
		var e = this.props, t = e.hide, n = e.dot, r = e.points, i = e.className, a = e.xAxisId, o = e.yAxisId, s = e.top, c = e.left, u = e.width, d = e.height, f = e.id, p = e.needClip, m = e.zIndex;
		if (t) return null;
		var h = l("recharts-line", i), g = f, _ = Qz(n), v = _.r, y = _.strokeWidth, b = pP(n), x = v * 2 + y, S = p ? `url(#clipPath-${b ? "" : "dots-"}${g})` : void 0;
		return /*#__PURE__*/ F.createElement(hk, { zIndex: m }, /*#__PURE__*/ F.createElement($e, { className: h }, p && /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement(_N, {
			clipPathId: g,
			xAxisId: a,
			yAxisId: o
		}), !b && /*#__PURE__*/ F.createElement("clipPath", { id: `clipPath-dots-${g}` }, /*#__PURE__*/ F.createElement("rect", {
			x: c - x / 2,
			y: s - x / 2,
			width: u + x,
			height: d + x
		}))), /*#__PURE__*/ F.createElement(Uz, {
			xAxisId: a,
			yAxisId: o,
			data: r,
			dataPointFormatter: CB,
			errorBarOffset: 0,
			clipPath: p ? `url(#clipPath-${g})` : void 0
		}, /*#__PURE__*/ F.createElement(kN, {
			xAxisId: a,
			yAxisId: o
		}, /*#__PURE__*/ F.createElement(SB, {
			props: this.props,
			clipPathId: g
		})))), /*#__PURE__*/ F.createElement(wI, {
			activeDot: this.props.activeDot,
			points: r,
			mainColor: this.props.stroke,
			itemDataKey: this.props.dataKey,
			clipPath: S,
			themedActiveStyles: this.props.themedActiveStyles
		}));
	}
};
function TB(e) {
	var t = Ci(e, mB), n = t.activeDot, r = t.animateNewValues, i = t.animationBegin, a = t.animationDuration, o = t.animationEasing, s = t.connectNulls, c = t.dot, l = t.hide, u = t.isAnimationActive, d = t.label, f = t.legendType, p = t.xAxisId, m = t.yAxisId, h = t.id, g = rB(t, tB), _ = hN(p, m).needClip, v = VO(), y = Rd(), b = Xu(), x = V((e) => Zz(e, p, m, b, h));
	if (y !== "horizontal" && y !== "vertical" || x == null || v == null) return null;
	var S = v.height, C = v.width, w = v.x, T = v.y;
	return /*#__PURE__*/ F.createElement(wB, nB({}, g, {
		id: h,
		connectNulls: s,
		dot: c,
		activeDot: n,
		animateNewValues: r,
		animationBegin: i,
		animationDuration: a,
		animationEasing: o,
		isAnimationActive: u,
		hide: l,
		label: d,
		legendType: f,
		xAxisId: p,
		yAxisId: m,
		points: x,
		layout: y,
		height: S,
		width: C,
		left: w,
		top: T,
		needClip: _
	}));
}
function EB(e) {
	var t = e.layout, n = e.xAxis, r = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize;
	return e.displayedData.map((e, c) => {
		var l = G(e, o);
		if (t === "horizontal") return {
			x: gu({
				axis: n,
				ticks: i,
				bandSize: s,
				entry: e,
				index: c
			}),
			y: (R(l) ? null : r.scale.map(l)) ?? null,
			value: l,
			payload: e
		};
		var u = R(l) ? null : n.scale.map(l), d = gu({
			axis: r,
			ticks: a,
			bandSize: s,
			entry: e,
			index: c
		});
		return {
			x: u ?? null,
			y: d,
			value: l,
			payload: e
		};
	}).filter(Boolean);
}
function DB(e) {
	var t = e.fill, n = oB(oB({}, e), {}, { fill: typeof t == "object" && t ? t.color : t }), r = mr(), i = jI({
		dataKey: n.dataKey,
		xAxisId: n.xAxisId ?? mB.xAxisId,
		yAxisId: n.yAxisId ?? mB.yAxisId
	}), a = kI(i, n), o = RM(a), s = Ti(a, n, pB), c = s?.strokeDasharray, l = PF(n), u = qF(a, n), d = Ci(oB(oB({}, n), {}, {
		dataKey: i,
		activeDot: n.activeDot,
		legendType: n.legendType ?? rI(n.dot ?? mB.dot, r != null),
		fill: n.fill ?? s?.fill,
		fillOpacity: n.fillOpacity ?? s?.fillOpacity,
		stroke: n.stroke ?? s?.stroke,
		strokeOpacity: n.strokeOpacity ?? s?.strokeOpacity,
		strokeWidth: n.strokeWidth ?? s?.strokeWidth,
		strokeDasharray: n.strokeDasharray ?? (Array.isArray(c) ? c.join(",") : c)
	}), mB), f = n.fill ?? (r == null ? d.fill : hB(d.stroke, s?.fill)), p = Xu(), m = AM(d.stroke);
	return /*#__PURE__*/ F.createElement(tF, {
		id: d.id,
		type: "line"
	}, (e) => /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(kP, { legendPayload: gB(d, f, r != null) }), /*#__PURE__*/ F.createElement(_B, {
		dataKey: d.dataKey,
		data: d.data,
		stroke: d.stroke,
		strokeWidth: d.strokeWidth,
		fill: d.fill,
		name: d.name,
		hide: d.hide,
		unit: d.unit,
		formatter: d.formatter,
		tooltipType: d.tooltipType,
		id: e
	}), /*#__PURE__*/ F.createElement(dF, {
		type: "line",
		id: e,
		data: d.data,
		xAxisId: d.xAxisId,
		yAxisId: d.yAxisId,
		zAxisId: 0,
		dataKey: d.dataKey,
		hide: d.hide,
		isPanorama: p
	}), /*#__PURE__*/ F.createElement(IM, { value: o }, /*#__PURE__*/ F.createElement(DM, { value: m }, /*#__PURE__*/ F.createElement(TB, nB({}, d, {
		id: e,
		dotFill: f,
		unthemedColors: l,
		themedActiveStyles: u
	}))))));
}
var OB = /*#__PURE__*/ F.memo(DB, _f);
OB.displayName = "Line";
// node_modules/recharts/es6/state/selectors/areaSelectors.js
var kB = (e, t, n) => dE(e, "xAxis", iv(e, t), n), AB = (e, t, n) => uE(e, "xAxis", iv(e, t), n), jB = (e, t, n) => dE(e, "yAxis", av(e, t), n), MB = (e, t, n) => uE(e, "yAxis", av(e, t), n), NB = H([
	K,
	kB,
	jB,
	AB,
	MB
], (e, t, n, r, i) => cu(e, "xAxis") ? wu(t, r, !1) : wu(n, i, !1)), PB = H([mw, (e, t) => t], (e, t) => e.filter((e) => e.type === "area").find((e) => e.id === t)), FB = (e) => cu(K(e), "xAxis") ? "yAxis" : "xAxis", IB = (e, t) => FB(e) === "yAxis" ? av(e, t) : iv(e, t), LB = (e, t, n) => Bw(e, FB(e), IB(e, t), n), RB = H([
	K,
	kB,
	jB,
	AB,
	MB,
	H([PB, LB], (e, t) => {
		if (e != null && t != null) {
			var n = e.stackId, r = P_(e);
			if (n != null && r != null) {
				var i = (t[n]?.stackedData)?.find((e) => e.key === r);
				if (i != null) return i.map((e) => [e[0], e[1]]);
			}
		}
	}),
	vg,
	NB,
	PB,
	u_,
	H([PB, LB], (e, t) => {
		if (e != null && e.stackId != null && t != null) {
			var n = t[e.stackId];
			if (n != null) return n.graphicalItems.map((e) => e.dataKey).filter(Ct);
		}
	})
], (e, t, n, r, i, a, o, s, c, l, u) => {
	var d = o.chartData, f = o.dataStartIndex, p = o.dataEndIndex;
	if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || n == null || r == null || i == null || r.length === 0 || i.length === 0 || s == null)) {
		var m = c.data, h = m && m.length > 0 ? m : d?.slice(f, p + 1);
		if (h != null) return xV({
			layout: e,
			xAxis: t,
			yAxis: n,
			xAxisTicks: r,
			yAxisTicks: i,
			dataStartIndex: f,
			areaSettings: c,
			stackedData: a,
			displayedData: h,
			chartBaseValue: l,
			bandSize: s,
			stackDataKeys: u
		});
	}
}), zB = [
	"animationElapsedTime",
	"isAnimating",
	"isEntrance",
	"layout",
	"isRange",
	"stroke",
	"connectNulls"
], BB = ["id", "baseLine"];
function VB() {
	return VB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, VB.apply(null, arguments);
}
function HB(e, t) {
	if (e == null) return {};
	var n, r, i = UB(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function UB(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var WB = [];
function GB(e) {
	var t = e.alpha, n = e.baseLine, r = e.points, i = e.strokeWidth, a = r[0]?.x, o = r[r.length - 1]?.x;
	if (!W(a) || !W(o)) return null;
	var s = t * Math.abs(a - o), c = Math.max(...r.map((e) => e.y || 0));
	return I(n) ? c = Math.max(n, c) : n && Array.isArray(n) && n.length && (c = Math.max(...n.map((e) => e.y || 0), c)), I(c) ? /*#__PURE__*/ F.createElement("rect", {
		x: a < o ? a : a - s,
		y: 0,
		width: s,
		height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1))
	}) : null;
}
function KB(e) {
	var t = e.alpha, n = e.baseLine, r = e.points, i = e.strokeWidth, a = r[0]?.y, o = r[r.length - 1]?.y;
	if (!W(a) || !W(o)) return null;
	var s = t * Math.abs(a - o), c = Math.max(...r.map((e) => e.x || 0));
	return I(n) ? c = Math.max(n, c) : n && Array.isArray(n) && n.length && (c = Math.max(...n.map((e) => e.x || 0), c)), I(c) ? /*#__PURE__*/ F.createElement("rect", {
		x: 0,
		y: a < o ? a : a - s,
		width: c + (i ? parseInt(`${i}`, 10) : 1),
		height: Math.floor(s)
	}) : null;
}
function qB(e) {
	var t = e.alpha, n = e.layout, r = e.points, i = e.baseLine, a = e.strokeWidth;
	return n === "vertical" ? /*#__PURE__*/ F.createElement(KB, {
		alpha: t,
		points: r,
		baseLine: i,
		strokeWidth: a
	}) : /*#__PURE__*/ F.createElement(GB, {
		alpha: t,
		points: r,
		baseLine: i,
		strokeWidth: a
	});
}
function JB(e) {
	var t = e.animationElapsedTime, n = t === void 0 ? 1 : t, r = e.isAnimating, i = r !== void 0 && r, a = e.isEntrance, o = a !== void 0 && a, s = e.layout, c = e.isRange, l = e.stroke, u = e.connectNulls, d = HB(e, zB), f = s === "vertical" ? "vertical" : "horizontal", p = u ?? !1, m = dr(), h = d.id, g = d.baseLine, _ = ze(HB(d, BB)), v = /*#__PURE__*/ F.createElement(sm, VB({}, d, {
		id: h,
		baseLine: g,
		connectNulls: p,
		stroke: "none",
		className: "recharts-area-area",
		layout: f
	})), y = l !== "none" && /*#__PURE__*/ F.createElement(sm, VB({}, _, {
		className: "recharts-area-curve",
		layout: f,
		type: d.type,
		connectNulls: p,
		fill: "none",
		stroke: l,
		points: d.points
	})), b = l !== "none" && c && Array.isArray(g) && /*#__PURE__*/ F.createElement(sm, VB({}, _, {
		className: "recharts-area-curve",
		layout: f,
		type: d.type,
		connectNulls: p,
		fill: "none",
		stroke: l,
		points: g
	}));
	return o && (i || n < 1) ? /*#__PURE__*/ F.createElement($e, null, /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement("clipPath", { id: m }, /*#__PURE__*/ F.createElement(qB, {
		alpha: n,
		points: d.points ?? WB,
		baseLine: g,
		layout: f,
		strokeWidth: d.strokeWidth
	}))), /*#__PURE__*/ F.createElement($e, { clipPath: `url(#${m})` }, v, y, b)) : /*#__PURE__*/ F.createElement(F.Fragment, null, v, y, b);
}
// node_modules/recharts/es6/cartesian/Area.js
var YB = [
	"needClip",
	"dot",
	"dataKey",
	"dotFill",
	"unthemedColors"
], XB = ["id"], ZB = [
	"activeDot",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"fill",
	"fillOpacity",
	"hide",
	"isAnimationActive",
	"legendType",
	"stroke",
	"xAxisId",
	"yAxisId"
];
function QB() {
	return QB = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, QB.apply(null, arguments);
}
function $B(e, t) {
	if (e == null) return {};
	var n, r, i = eV(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function eV(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function tV(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function nV(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? tV(Object(n), !0).forEach(function(t) {
			rV(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tV(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function rV(e, t, n) {
	return (t = iV(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function iV(e) {
	var t = aV(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function aV(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var oV = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "matched" ? [nV(nV({}, e.next), {}, {
	x: L(e.prev.x, e.next.x, t),
	y: L(e.prev.y, e.next.y, t)
})] : e.status === "added" ? [e.next] : []), sV = {
	fill: "#3182bd",
	fillOpacity: .6,
	stroke: "#3182bd",
	strokeWidth: 1
}, cV = {
	activeDot: !0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: LP,
	animationInterpolateFn: oV,
	connectNulls: !1,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	legendType: "line",
	type: "linear",
	label: !1,
	shape: JB,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: J.area
};
function lV(e, t) {
	return e && e !== "none" ? e : t;
}
var uV = (e, t, n, r) => {
	var i = e.dataKey, a = e.name, o = e.stroke, s = e.fill, c = e.legendType, l = e.hide, u = e.dot;
	return [{
		inactive: l,
		dataKey: i,
		type: c,
		dot: nI(u, {
			fill: t ?? s,
			stroke: o
		}, n),
		color: lV(o, s),
		fill: r,
		value: Eu(a, i),
		payload: e
	}];
}, dV = /*#__PURE__*/ F.memo((e) => {
	var t = e.dataKey, n = e.data, r = e.stroke, i = e.strokeWidth, a = e.fill, o = e.name, s = e.hide, c = e.unit, l = e.formatter, u = e.tooltipType, d = e.id, f = {
		dataDefinedOnItem: n,
		getPosition: wt,
		settings: {
			stroke: r,
			strokeWidth: i,
			fill: a,
			dataKey: t,
			nameKey: void 0,
			name: Eu(o, t),
			hide: s,
			type: u,
			color: lV(r, a),
			unit: c,
			formatter: l,
			graphicalItemId: d,
			ignoreDataEntryColors: !0
		}
	};
	return /*#__PURE__*/ F.createElement(OP, { tooltipEntrySettings: f });
});
function fV(e) {
	var t = e.clipPathId, n = e.points, r = e.props, i = r.needClip, a = r.dot, o = r.dataKey, s = r.dotFill, c = r.unthemedColors, l = ze($B(r, YB));
	return /*#__PURE__*/ F.createElement(gI, {
		points: n,
		dot: a,
		className: "recharts-area-dots",
		dotClassName: "recharts-area-dot",
		dataKey: o,
		baseProps: nV(nV({}, l), {}, { fill: s ?? l.fill }),
		unthemedColors: c,
		needClip: i,
		clipPathId: t
	});
}
function pV(e) {
	var t = e.showLabels, n = e.children, r = e.points, i = (0, F.useMemo)(() => Cz(() => r.map((e) => {
		var t = {
			x: e.x ?? 0,
			y: e.y ?? 0,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return nV(nV({}, t), {}, {
			value: e.value,
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	})), [r]);
	return /*#__PURE__*/ F.createElement(TN, { value: t ? i : void 0 }, n);
}
function mV(e) {
	var t = e.points, n = e.baseLine, r = e.needClip, i = e.clipPathId, a = e.props, o = e.animationElapsedTime, s = e.isAnimating, c = e.isEntrance, l = a.layout, u = a.type, d = a.stroke, f = a.connectNulls, p = a.isRange, m = a.shape, h = a.id, g = $B(a, XB), _ = Ve(g), v = nV(nV({}, _), {}, {
		fill: a.fillObject == null ? _.fill : Mr(Pr(h)),
		id: h,
		points: t,
		connectNulls: f,
		type: u,
		baseLine: n,
		layout: l,
		stroke: d,
		isRange: p,
		animationElapsedTime: o,
		isAnimating: s,
		isEntrance: c
	});
	return /*#__PURE__*/ F.createElement(F.Fragment, null, t?.length > 1 && /*#__PURE__*/ F.createElement($e, { clipPath: r ? `url(#clipPath-${i})` : void 0 }, /*#__PURE__*/ F.createElement(wP, {
		option: m,
		DefaultShape: cV.shape,
		shapeProps: v
	})), /*#__PURE__*/ F.createElement(fV, {
		points: t,
		props: g,
		clipPathId: i
	}));
}
function hV(e, t, n) {
	return I(e) ? L(I(t) ? t : void 0, e, n) : R(e) || mt(e) ? L(I(t) ? t : void 0, 0, n) : e;
}
function gV(e) {
	var t = e.needClip, n = e.clipPathId, r = e.props, i = e.previousPointsRef, a = e.previousBaselineRef, o = r.points, s = r.baseLine, c = r.isAnimationActive, l = r.animationBegin, u = r.animationDuration, d = r.animationEasing, f = r.animationMatchBy, p = r.animationInterpolateFn, m = (0, F.useMemo)(() => ({
		points: o,
		baseLine: s
	}), [o, s]), h = GP(m, a), g = zd(), _ = QP(r.onAnimationStart, r.onAnimationEnd), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = h.startValue;
	if (g == null) return null;
	var S = Array.isArray(s) && Array.isArray(x) ? WP(x, s, f) : Array.isArray(s) ? WP(null, s, f) : null;
	return /*#__PURE__*/ F.createElement($P, {
		animationInput: m,
		animationIdPrefix: "recharts-area-",
		items: o,
		previousItemsRef: i,
		isAnimationActive: c,
		animationBegin: l,
		animationDuration: u,
		animationEasing: d,
		onAnimationStart: y,
		onAnimationEnd: b,
		animationInterpolateFn: p,
		animationMatchBy: f,
		layout: g
	}, (e, i, a) => {
		var c = i === 1 ? s : Array.isArray(s) ? p(S, i, g) : a ? s : hV(s, x, i);
		return h.syncStepValue(c, i), /*#__PURE__*/ F.createElement(pV, {
			showLabels: !v,
			points: o
		}, r.children, /*#__PURE__*/ F.createElement(mV, {
			points: e,
			baseLine: c,
			needClip: t,
			clipPathId: n,
			props: r,
			animationElapsedTime: i,
			isAnimating: v || i < 1,
			isEntrance: a
		}), /*#__PURE__*/ F.createElement(IN, { label: r.label }));
	});
}
function _V(e) {
	var t = e.needClip, n = e.clipPathId, r = e.props, i = (0, F.useRef)(null), a = (0, F.useRef)();
	return /*#__PURE__*/ F.createElement(gV, {
		needClip: t,
		clipPathId: n,
		props: r,
		previousPointsRef: i,
		previousBaselineRef: a
	});
}
var vV = class extends F.PureComponent {
	render() {
		var e = this.props, t = e.hide, n = e.dot, r = e.points, i = e.className, a = e.top, o = e.left, s = e.needClip, c = e.xAxisId, u = e.yAxisId, d = e.width, f = e.height, p = e.id, m = e.baseLine, h = e.zIndex;
		if (t) return null;
		var g = l("recharts-area", i), _ = p, v = Qz(n), y = v.r, b = v.strokeWidth, x = pP(n), S = y * 2 + b, C = s ? `url(#clipPath-${x ? "" : "dots-"}${_})` : void 0, w = this.props, T = w.fillObject, E = w.fill;
		return /*#__PURE__*/ F.createElement(hk, { zIndex: h }, /*#__PURE__*/ F.createElement($e, { className: g }, T != null && /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement(Fr, {
			id: Pr(p),
			fillObject: T,
			color: E
		})), s && /*#__PURE__*/ F.createElement("defs", null, /*#__PURE__*/ F.createElement(_N, {
			clipPathId: _,
			xAxisId: c,
			yAxisId: u
		}), !x && /*#__PURE__*/ F.createElement("clipPath", { id: `clipPath-dots-${_}` }, /*#__PURE__*/ F.createElement("rect", {
			x: o - S / 2,
			y: a - S / 2,
			width: d + S,
			height: f + S
		}))), /*#__PURE__*/ F.createElement(kN, {
			xAxisId: c,
			yAxisId: u
		}, /*#__PURE__*/ F.createElement(_V, {
			needClip: s,
			clipPathId: _,
			props: this.props
		}))), /*#__PURE__*/ F.createElement(wI, {
			points: r,
			mainColor: lV(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: C,
			themedActiveStyles: this.props.themedActiveStyles
		}), this.props.isRange && Array.isArray(m) && /*#__PURE__*/ F.createElement(wI, {
			points: m,
			mainColor: lV(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: C,
			themedActiveStyles: this.props.themedActiveStyles
		}));
	}
};
function yV(e) {
	var t = e.activeDot, n = e.animationBegin, r = e.animationDuration, i = e.animationEasing, a = e.connectNulls, o = e.dot, s = e.fill, c = e.fillOpacity, l = e.hide, u = e.isAnimationActive, d = e.legendType, f = e.stroke, p = e.xAxisId, m = e.yAxisId, h = $B(e, ZB), g = Rd(), _ = CO(), v = hN(p, m).needClip, y = Xu(), b = V((t) => RB(t, e.id, y)) ?? {}, x = b.points, S = b.isRange, C = b.baseLine, w = VO();
	if (g !== "horizontal" && g !== "vertical" || w == null || _ !== "AreaChart" && _ !== "ComposedChart") return null;
	var T = w.height, E = w.width, D = w.x, O = w.y;
	return !x || !x.length ? null : /*#__PURE__*/ F.createElement(vV, QB({}, h, {
		activeDot: t,
		animationBegin: n,
		animationDuration: r,
		animationEasing: i,
		baseLine: C,
		connectNulls: a,
		dot: o,
		fill: s,
		fillOpacity: c,
		height: T,
		hide: l,
		layout: g,
		isAnimationActive: u,
		isRange: S,
		legendType: d,
		needClip: v,
		points: x,
		stroke: f,
		width: E,
		left: D,
		top: O,
		xAxisId: p,
		yAxisId: m
	}));
}
var bV = (e, t, n, r, i) => {
	var a = n ?? t;
	if (I(a)) return a;
	var o = e === "horizontal" ? i : r, s = o.scale.domain();
	if (o.type === "number") {
		var c = Math.max(s[0], s[1]), l = Math.min(s[0], s[1]);
		return a === "dataMin" ? l : a === "dataMax" || c < 0 ? c : Math.max(Math.min(s[0], s[1]), 0);
	}
	return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0];
};
function xV(e) {
	var t = e.areaSettings, n = t.connectNulls, r = t.baseValue, i = t.dataKey, a = e.stackedData, o = e.layout, s = e.chartBaseValue, c = e.xAxis, l = e.yAxis, u = e.displayedData, d = e.dataStartIndex, f = e.xAxisTicks, p = e.yAxisTicks, m = e.bandSize, h = e.stackDataKeys, g = a && a.length, _ = bV(o, s, r, c, l), v = o === "horizontal", y = !1, b = u.map((e, t) => {
		var r;
		if (g) r = a[d + t];
		else {
			var o = G(e, i);
			Array.isArray(o) ? (r = o, y = !0) : r = [_, o];
		}
		var s = r?.[1] ?? null, u = G(e, i), b = g && u == null && h != null && h.length > 0 && h.every((t) => G(e, t) == null), x = s == null || g && !n && u == null || b;
		return v ? {
			x: gu({
				axis: c,
				ticks: f,
				bandSize: m,
				entry: e,
				index: t
			}),
			y: x ? null : l.scale.map(s) ?? null,
			value: r,
			payload: e
		} : {
			x: x ? null : c.scale.map(s) ?? null,
			y: gu({
				axis: l,
				ticks: p,
				bandSize: m,
				entry: e,
				index: t
			}),
			value: r,
			payload: e
		};
	});
	return {
		points: b,
		baseLine: (g || y ? b.map((e) => {
			var t = Array.isArray(e.value) ? e.value[0] : null;
			return v ? {
				x: e.x,
				y: t != null && e.y != null ? l.scale.map(t) ?? null : null,
				payload: e.payload
			} : {
				x: t == null ? null : c.scale.map(t) ?? null,
				y: e.y,
				payload: e.payload
			};
		}) : v ? l.scale.map(_) : c.scale.map(_)) ?? 0,
		isRange: y
	};
}
function SV(e) {
	var t = Nr(e.fill), n = t.color, r = t.fillObject, i = nV(nV({}, e), {}, { fill: n }), a = mr(), o = jI({
		dataKey: i.dataKey,
		xAxisId: i.xAxisId ?? cV.xAxisId,
		yAxisId: i.yAxisId ?? cV.yAxisId
	}), s = kI(o, i), c = AI(o, i), l = r ?? c, u = RM(s), d = Ti(s, i, sV), f = PF(i), p = qF(s, i), m = Ci(nV(nV(nV({}, i), d), {}, {
		dataKey: o,
		activeDot: i.activeDot,
		legendType: i.legendType ?? rI(i.dot ?? cV.dot, a != null)
	}), cV), h = i.fill ?? (a == null ? m.fill : lV(m.stroke, d?.fill)), g = Xu(), _ = AM(lV(m.stroke, m.fill));
	return /*#__PURE__*/ F.createElement(tF, {
		id: m.id,
		type: "area"
	}, (e) => /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(kP, { legendPayload: uV(m, h, a != null, l) }), /*#__PURE__*/ F.createElement(dV, {
		dataKey: m.dataKey,
		data: m.data,
		stroke: m.stroke,
		strokeWidth: m.strokeWidth,
		fill: m.fill,
		name: m.name,
		hide: m.hide,
		unit: m.unit,
		formatter: m.formatter,
		tooltipType: m.tooltipType,
		id: e
	}), /*#__PURE__*/ F.createElement(dF, {
		type: "area",
		id: e,
		data: m.data,
		dataKey: m.dataKey,
		xAxisId: m.xAxisId,
		yAxisId: m.yAxisId,
		zAxisId: 0,
		stackId: mu(m.stackId),
		hide: m.hide,
		barSize: void 0,
		baseValue: m.baseValue,
		isPanorama: g,
		connectNulls: m.connectNulls
	}), /*#__PURE__*/ F.createElement(IM, { value: u }, /*#__PURE__*/ F.createElement(DM, { value: _ }, /*#__PURE__*/ F.createElement(yV, QB({}, m, {
		id: e,
		dotFill: h,
		fillObject: l,
		unthemedColors: f,
		themedActiveStyles: p
	}))))));
}
var CV = /*#__PURE__*/ F.memo(SV, _f);
CV.displayName = "Area";
// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var wV = "Invariant failed";
function TV(e, t) {
	if (!e) throw Error(wV);
}
// node_modules/recharts/es6/util/BarUtils.js
var EV = ["option"];
function DV(e, t) {
	if (e == null) return {};
	var n, r, i = OV(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function OV(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var kV = Mh;
function AV(e) {
	var t = e.option, n = DV(e, EV);
	return /*#__PURE__*/ F.createElement(wP, {
		option: t,
		DefaultShape: kV,
		shapeProps: n,
		activeClassName: "recharts-active-bar",
		inActiveClassName: "recharts-inactive-bar"
	});
}
var jV = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return (n, r) => {
		if (I(e)) return e;
		var i = I(n) || R(n);
		return i ? e(n, r) : (!i && TV(!1, `minPointSize callback function received a value with type of ${typeof n}. Currently only numbers or null/undefined are supported.`), t);
	};
}, MV = (e, t, n) => n, NV = H([mw, (e, t) => t], (e, t) => e.filter((e) => e.type === "bar").find((e) => e.id === t)), PV = H([NV], (e) => e?.maxBarSize), FV = (e, t, n, r) => r, IV = H([
	K,
	mw,
	iv,
	av,
	MV
], (e, t, n, r, i) => t.filter((t) => e === "horizontal" ? t.xAxisId === n : t.yAxisId === r).filter((e) => e.isPanorama === i).filter((e) => e.hide === !1).filter((e) => e.type === "bar")), LV = (e, t, n) => {
	var r = K(e), i = iv(e, t), a = av(e, t);
	if (i != null && a != null) return r === "horizontal" ? Bw(e, "yAxis", a, n) : Bw(e, "xAxis", i, n);
}, RV = H([
	IV,
	r_,
	(e, t) => {
		var n = K(e), r = iv(e, t), i = av(e, t);
		if (r != null && i != null) return n === "horizontal" ? rE(e, "xAxis", r) : rE(e, "yAxis", i);
	}
], aL), zV = (e, t, n) => {
	var r = NV(e, t);
	if (r == null) return 0;
	var i = iv(e, t), a = av(e, t);
	if (i == null || a == null) return 0;
	var o = K(e), s = e_(e), c = r.maxBarSize, l = R(c) ? s : c, u, d;
	return o === "horizontal" ? (u = dE(e, "xAxis", i, n), d = uE(e, "xAxis", i, n)) : (u = dE(e, "yAxis", a, n), d = uE(e, "yAxis", a, n)), wu(u, d, !0) ?? l ?? 0;
}, BV = (e, t, n) => {
	var r = K(e), i = iv(e, t), a = av(e, t);
	if (i != null && a != null) {
		var o, s;
		return r === "horizontal" ? (o = dE(e, "xAxis", i, n), s = uE(e, "xAxis", i, n)) : (o = dE(e, "yAxis", a, n), s = uE(e, "yAxis", a, n)), wu(o, s);
	}
}, VV = H([
	RV,
	e_,
	t_,
	n_,
	zV,
	BV,
	PV
], fL), HV = (e, t, n) => {
	var r = iv(e, t);
	if (r != null) return dE(e, "xAxis", r, n);
}, UV = (e, t, n) => {
	var r = av(e, t);
	if (r != null) return dE(e, "yAxis", r, n);
}, WV = H([
	Ku,
	Ju,
	HV,
	UV,
	(e, t, n) => {
		var r = iv(e, t);
		if (r != null) return uE(e, "xAxis", r, n);
	},
	(e, t, n) => {
		var r = av(e, t);
		if (r != null) return uE(e, "yAxis", r, n);
	},
	H([VV, NV], mL),
	K,
	vg,
	BV,
	H([LV, NV], pL),
	H([
		LV,
		NV,
		K,
		HV,
		UV
	], (e, t, n, r, i) => {
		if (e != null && t?.stackId != null) {
			var a = e[t.stackId];
			if (a != null) {
				var o = n === "horizontal" ? i : r;
				if (o?.scale != null) {
					var s = a.stackedData, c = a.graphicalItems, l = c.findIndex((e) => e.id === t.id);
					if (!(l <= 0)) {
						for (var u = [], d = function() {
							var e = s[f], t = c[f];
							if (e == null || t == null || t.type !== "bar") return 1;
							var r = t.minPointSize;
							e.forEach((e, t) => {
								if (e != null) {
									var i = o.scale.map(e[0]), a = o.scale.map(e[1]);
									if (i != null && a != null) {
										var s = n === "horizontal" ? i - a : a - i, c = jV(r, 0)(e[1], t);
										if (Math.abs(c) > 0 && Math.abs(s) < Math.abs(c)) {
											var l = pt(s || c) * (Math.abs(c) - Math.abs(s));
											u[t] = (u[t] ?? 0) + l;
										}
									}
								}
							});
						}, f = 0; f < l; f++) if (d()) continue;
						return u;
					}
				}
			}
		}
	}),
	NV,
	FV
], (e, t, n, r, i, a, o, s, c, l, u, d, f, p) => {
	var m = c.chartData, h = c.dataStartIndex, g = c.dataEndIndex;
	if (!(f == null || o == null || t == null || s !== "horizontal" && s !== "vertical" || n == null || r == null || i == null || a == null || l == null)) {
		var _ = f.data, v = _ != null && _.length > 0 ? _ : m?.slice(h, g + 1);
		if (v != null) return IH({
			layout: s,
			barSettings: f,
			pos: o,
			parentViewBox: t,
			bandSize: l,
			xAxis: n,
			yAxis: r,
			xAxisTicks: i,
			yAxisTicks: a,
			stackedData: u,
			stackedMinPointSizeShift: d,
			displayedData: v,
			offset: e,
			cells: p,
			dataStartIndex: h
		});
	}
}), GV = [];
function KV(e, t) {
	return e === t || e.length === t.length && e.every((e, n) => {
		var r = t[n];
		return r != null && e.type === r.type && _f(e.props, r.props);
	});
}
function qV(e) {
	var t = (0, F.useRef)(GV), n = fP(e, dA), r = n.length === 0 ? GV : n;
	return KV(t.current, r) ? t.current : (t.current = r, r);
}
// node_modules/recharts/es6/cartesian/BarStack.js
var JV = ["index"];
function YV() {
	return YV = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, YV.apply(null, arguments);
}
function XV(e, t) {
	if (e == null) return {};
	var n, r, i = ZV(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ZV(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var QV = /*#__PURE__*/ (0, F.createContext)(void 0), $V = (e) => {
	var t = (0, F.useContext)(QV);
	if (t != null) return t.stackId;
	if (e != null) return mu(e);
}, eH = (e, t) => `recharts-bar-stack-clip-path-${e}-${t}`, tH = (e) => {
	var t = (0, F.useContext)(QV);
	if (t != null) {
		var n = t.stackId;
		return `url(#${eH(n, e)})`;
	}
}, nH = (e) => {
	var t = e.index, n = XV(e, JV), r = tH(t);
	return /*#__PURE__*/ F.createElement($e, YV({
		className: "recharts-bar-stack-layer",
		clipPath: r
	}, n));
}, rH = [
	"onMouseEnter",
	"onMouseLeave",
	"onClick"
], iH = [
	"value",
	"background",
	"tooltipPosition"
], aH = ["id"], oH = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
function sH(e, t) {
	return fH(e) || dH(e, t) || lH(e, t) || cH();
}
function cH() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function lH(e, t) {
	if (e) {
		if (typeof e == "string") return uH(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? uH(e, t) : void 0;
	}
}
function uH(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function dH(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function fH(e) {
	if (Array.isArray(e)) return e;
}
function pH() {
	return pH = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, pH.apply(null, arguments);
}
function mH(e, t) {
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
		t % 2 ? mH(Object(n), !0).forEach(function(t) {
			hH(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mH(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function hH(e, t, n) {
	return (t = gH(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function gH(e) {
	var t = _H(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function _H(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function vH(e, t) {
	if (e == null) return {};
	var n, r, i = yH(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function yH(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var bH = (e, t) => {
	var n = e.dataKey, r = e.name, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: n,
		type: a,
		color: i,
		fill: t,
		value: Eu(r, n),
		payload: e
	}];
}, xH = /*#__PURE__*/ F.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.unit, c = e.formatter, l = e.tooltipType, u = e.id, d = e.unthemedColors, f = {
		dataDefinedOnItem: void 0,
		getPosition: wt,
		getEntryColor: (e) => zF(e, i, n, d),
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			dataKey: t,
			nameKey: void 0,
			name: Eu(a, t),
			hide: o,
			type: l,
			color: i,
			unit: s,
			formatter: c,
			graphicalItemId: u
		}
	};
	return /*#__PURE__*/ F.createElement(OP, { tooltipEntrySettings: f });
}), SH = { fill: "#eee" };
function CH(e) {
	var t = V($D), n = e.data, r = e.dataKey, i = e.background, a = e.allOtherBarProps, o = Be(i), s = Ti((e) => e.barBackground, o ?? {}, SH), c = a.onMouseEnter, l = a.onMouseLeave, u = a.onClick, d = vH(a, rH), f = TP(c, r, a.id), p = EP(l), m = DP(u, r, a.id);
	return !i || n == null ? null : /*#__PURE__*/ F.createElement(hk, { zIndex: hL(i, J.barBackground) }, n.map((e, n) => {
		e.value;
		var a = e.background;
		e.tooltipPosition;
		var c = vH(e, iH);
		if (!a) return null;
		var l = f(e, e.originalDataIndex), u = p(e, e.originalDataIndex), h = m(e, e.originalDataIndex), g = Q(Q(Q(Q(Q(Q({
			option: i,
			isActive: String(e.originalDataIndex) === t
		}, BF(c)), s), a), o), _i(d, e, e.originalDataIndex)), {}, {
			onMouseEnter: l,
			onMouseLeave: u,
			onClick: h,
			dataKey: r,
			index: n,
			className: "recharts-bar-background-rectangle"
		});
		return /*#__PURE__*/ F.createElement(AV, pH({ key: `background-bar-${n}` }, g));
	}));
}
function wH(e) {
	var t = e.showLabels, n = e.children, r = e.rects, i = e.fill, a = e.stroke, o = e.unthemedColors, s = F.useMemo(() => ({
		hasFilledShapes: !0,
		getShapeColors: (e) => {
			var t;
			return RF(r == null || (t = r[e]) == null ? void 0 : t.payload, i, a, o);
		}
	}), [
		r,
		i,
		a,
		o
	]), c = r?.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: e.width,
			lowerWidth: e.width,
			upperWidth: e.width,
			height: e.height
		};
		return Q(Q({}, t), {}, {
			value: e.value,
			payload: e.payload,
			parentViewBox: e.parentViewBox,
			viewBox: t,
			fill: e.fill,
			originalDataIndex: e.originalDataIndex
		});
	});
	return /*#__PURE__*/ F.createElement(TN, { value: t ? c : void 0 }, /*#__PURE__*/ F.createElement(DM, { value: s }, n));
}
function TH(e) {
	var t = e.shape, n = e.activeBar, r = e.baseProps, i = e.entryStyleOverrides, a = e.themedActiveStyles, o = e.entry, s = e.index, c = e.dataKey, l = V($D), u = V(tO), d = n && String(o.originalDataIndex) === l && (u == null || c === u), f = l != null && (String(o.originalDataIndex) !== l || u != null && c !== u), p = sH((0, F.useState)(!1), 2), m = p[0], h = p[1], g = sH((0, F.useState)(!1), 2), _ = g[0], v = g[1];
	(0, F.useEffect)(() => {
		var e;
		return d ? (h(!0), e = requestAnimationFrame(() => {
			v(!0);
		})) : (v(!1), f && h(!1)), () => {
			cancelAnimationFrame(e);
		};
	}, [d, f]);
	var y = (0, F.useCallback)(() => {
		d || h(!1);
	}, [d]), b = d && _, x = d || m, S = d ? n === !0 ? t : n : t, C = b ? JF(S === kV || S, a, o) : void 0, w = /*#__PURE__*/ F.createElement(AV, pH({}, r, { name: r.name == null ? void 0 : String(r.name) }, i, o, C, {
		isActive: b,
		option: S,
		index: s,
		dataKey: c,
		animationElapsedTime: e.animationElapsedTime,
		isAnimating: e.isAnimating,
		isEntrance: e.isEntrance,
		onTransitionEnd: y
	}));
	return x ? /*#__PURE__*/ F.createElement(hk, { zIndex: J.activeBar }, /*#__PURE__*/ F.createElement(nH, { index: o.originalDataIndex }, w)) : w;
}
function EH(e) {
	var t = e.shape, n = e.baseProps, r = e.entryStyleOverrides, i = e.entry, a = e.index, o = e.dataKey;
	return /*#__PURE__*/ F.createElement(AV, pH({}, n, { name: n.name == null ? void 0 : String(n.name) }, r, i, {
		isActive: !1,
		option: t,
		index: a,
		dataKey: o,
		animationElapsedTime: e.animationElapsedTime,
		isAnimating: e.isAnimating,
		isEntrance: e.isEntrance
	}));
}
function DH(e) {
	var t = e.data, n = e.props, r = e.animationElapsedTime, i = e.isAnimating, a = e.isEntrance, o = ze(n) ?? {}, s = o.id, c = vH(o, aH), l = n.shape, u = n.dataKey, d = n.activeBar, f = n.unthemedColors, p = n.themedActiveStyles, m = n.paintFill, h = m == null ? c : Q(Q({}, c), {}, { fill: m }), g = n.onMouseEnter, _ = n.onClick, v = n.onMouseLeave, y = vH(n, oH), b = TP(g, u, s), x = EP(v), S = DP(_, u, s);
	return t ? /*#__PURE__*/ F.createElement(F.Fragment, null, t.map((e, t) => {
		var n = Rr(e.payload).fillObject == null ? e : Q(Q({}, e), {}, { fill: Mr(zr(s, e.originalDataIndex)) });
		return /*#__PURE__*/ F.createElement(nH, pH({
			index: e.originalDataIndex,
			key: `rectangle-${t}`,
			className: "recharts-bar-rectangle"
		}, _i(y, e, e.originalDataIndex), {
			onMouseEnter: b(e, e.originalDataIndex),
			onMouseLeave: x(e, e.originalDataIndex),
			onClick: S(e, e.originalDataIndex)
		}), d ? /*#__PURE__*/ F.createElement(TH, {
			shape: l,
			activeBar: d,
			baseProps: h,
			entryStyleOverrides: FF(e, f),
			themedActiveStyles: p,
			entry: n,
			index: t,
			dataKey: u,
			animationElapsedTime: r,
			isAnimating: i,
			isEntrance: a
		}) : /*#__PURE__*/ F.createElement(EH, {
			shape: l,
			baseProps: h,
			entryStyleOverrides: FF(e, f),
			entry: n,
			index: t,
			dataKey: u,
			animationElapsedTime: r,
			isAnimating: i,
			isEntrance: a
		}));
	})) : null;
}
var OH = (e, t, n) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => {
	if (e.status === "removed") return n === "horizontal" ? [Q(Q({}, e.prev), {}, {
		height: L(e.prev.height, 0, t),
		y: L(e.prev.y, e.prev.y + e.prev.height, t)
	})] : [Q(Q({}, e.prev), {}, { width: L(e.prev.width, 0, t) })];
	if (e.status === "matched") return [Q(Q({}, e.next), {}, {
		x: L(e.prev.x, e.next.x, t),
		y: L(e.prev.y, e.next.y, t),
		width: L(e.prev.width, e.next.width, t),
		height: L(e.prev.height, e.next.height, t)
	})];
	var r = e.next;
	return n === "horizontal" ? [Q(Q({}, r), {}, {
		height: L(0, r.height, t),
		y: L(r.stackedBarStart, r.y, t)
	})] : [Q(Q({}, r), {}, {
		width: L(0, r.width, t),
		x: L(r.stackedBarStart, r.x, t)
	})];
});
function kH(e) {
	var t = e.props, n = e.previousRectanglesRef, r = t.data, i = t.isAnimationActive, a = t.animationBegin, o = t.animationDuration, s = t.animationEasing, c = t.animationInterpolateFn, l = t.layout, u = QP(t.onAnimationStart, t.onAnimationEnd), d = u.isAnimating, f = u.handleAnimationStart, p = u.handleAnimationEnd;
	return /*#__PURE__*/ F.createElement(wH, {
		showLabels: !d,
		rects: r,
		fill: t.fill,
		stroke: t.stroke,
		unthemedColors: t.unthemedColors
	}, /*#__PURE__*/ F.createElement($P, {
		animationInput: r,
		animationIdPrefix: "recharts-bar-",
		items: r,
		previousItemsRef: n,
		isAnimationActive: i,
		animationBegin: a,
		animationDuration: o,
		animationEasing: s,
		onAnimationStart: f,
		onAnimationEnd: p,
		animationInterpolateFn: c,
		animationMatchBy: t.animationMatchBy,
		layout: l
	}, (e, n, r) => /*#__PURE__*/ F.createElement($e, null, /*#__PURE__*/ F.createElement(DH, {
		props: t,
		data: e,
		animationElapsedTime: n,
		isAnimating: d || n < 1,
		isEntrance: r
	}))), /*#__PURE__*/ F.createElement(IN, { label: t.label }), t.children);
}
function AH(e) {
	var t = (0, F.useRef)(null);
	return /*#__PURE__*/ F.createElement(kH, {
		previousRectanglesRef: t,
		props: e
	});
}
var jH = 0, MH = (e, t) => {
	var n = Array.isArray(e.value) ? e.value[1] : e.value;
	return {
		x: e.x,
		y: e.y,
		value: n,
		errorVal: G(e, t)
	};
}, NH = class extends F.PureComponent {
	render() {
		var e = this.props, t = e.hide, n = e.data, r = e.dataKey, i = e.className, a = e.xAxisId, o = e.yAxisId, s = e.needClip, c = e.background, u = e.id, d = e.fillObject, f = e.fill, p = e.stroke, m = e.unthemedColors;
		if (t || n == null) return null;
		var h = l("recharts-bar", i), g = u, _ = Hr(n.map((e) => e.payload));
		return /*#__PURE__*/ F.createElement($e, {
			className: h,
			id: u
		}, (s || d != null || _) && /*#__PURE__*/ F.createElement("defs", null, s && /*#__PURE__*/ F.createElement(_N, {
			clipPathId: g,
			xAxisId: a,
			yAxisId: o
		}), d != null && /*#__PURE__*/ F.createElement(Fr, {
			id: Pr(u),
			fillObject: d,
			color: f
		}), _ && /*#__PURE__*/ F.createElement(Vr, {
			id: u,
			entries: n.map((e) => ({
				index: e.originalDataIndex,
				payload: e.payload,
				color: RF(e.payload, f, p, m).fill
			}))
		})), /*#__PURE__*/ F.createElement($e, {
			className: "recharts-bar-rectangles",
			clipPath: s ? `url(#clipPath-${g})` : void 0
		}, /*#__PURE__*/ F.createElement(CH, {
			data: n,
			dataKey: r,
			background: c,
			allOtherBarProps: this.props
		}), /*#__PURE__*/ F.createElement(kN, {
			xAxisId: a,
			yAxisId: o
		}, /*#__PURE__*/ F.createElement(AH, this.props))));
	}
}, PH = {
	activeBar: !1,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "ease",
	animationInterpolateFn: OH,
	animationMatchBy: RP,
	background: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: jH,
	shape: kV,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: J.bar
};
function FH(e) {
	var t = e.xAxisId, n = e.yAxisId, r = e.hide, i = e.legendType, a = e.minPointSize, o = e.activeBar, s = e.animationBegin, c = e.animationDuration, l = e.animationEasing, u = e.isAnimationActive, d = hN(t, n).needClip, f = Rd(), p = Xu(), m = qV(e.children), h = V((t) => WV(t, e.id, p, m));
	if (f !== "vertical" && f !== "horizontal") return null;
	var g, _ = h?.[0];
	return g = _ == null || _.height == null || _.width == null ? 0 : f === "vertical" ? _.height / 2 : _.width / 2, /*#__PURE__*/ F.createElement(Uz, {
		xAxisId: t,
		yAxisId: n,
		data: h,
		dataPointFormatter: MH,
		errorBarOffset: g,
		clipPath: d ? `url(#clipPath-${e.id})` : void 0
	}, /*#__PURE__*/ F.createElement(NH, pH({}, e, {
		layout: f,
		needClip: d,
		data: h,
		xAxisId: t,
		yAxisId: n,
		hide: r,
		legendType: i,
		minPointSize: a,
		activeBar: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		isAnimationActive: u
	})));
}
function IH(e) {
	var t = e.layout, n = e.barSettings, r = n.dataKey, i = n.minPointSize, a = n.hasCustomShape, o = e.pos, s = e.bandSize, c = e.xAxis, l = e.yAxis, u = e.xAxisTicks, d = e.yAxisTicks, f = e.stackedData, p = e.stackedMinPointSizeShift, m = e.displayedData, h = e.offset, g = e.cells, _ = e.parentViewBox, v = e.dataStartIndex, y = t === "horizontal" ? l : c, b = f ? y.scale.domain() : null, x = vu({ numericAxis: y }), S = y.scale.map(x);
	return m.map((e, n) => {
		var m, y, C, w, T, E;
		if (f) {
			var D = f[n + v];
			if (D == null) return null;
			m = du(D, b);
		} else m = G(e, r), Array.isArray(m) || (m = [x, m]);
		var O = jV(i, jH)(m[1], n);
		if (t === "horizontal") {
			var k = l.scale.map(m[0]), A = l.scale.map(m[1]);
			if (k == null || A == null) return null;
			y = _u({
				axis: c,
				ticks: u,
				bandSize: s,
				offset: o.offset,
				entry: e,
				index: n
			}), C = A ?? k ?? void 0, w = o.size;
			var j = k - A;
			if (T = mt(j) ? 0 : j, E = {
				x: y,
				y: h.top,
				width: w,
				height: h.height
			}, f && C != null && (C -= p?.[n + v] ?? 0), Math.abs(O) > 0 && Math.abs(T) < Math.abs(O)) {
				var M = pt(T || O) * (Math.abs(O) - Math.abs(T));
				C -= M, T += M;
			}
		} else {
			var N = c.scale.map(m[0]), P = c.scale.map(m[1]);
			if (N == null || P == null) return null;
			if (y = N, C = _u({
				axis: l,
				ticks: d,
				bandSize: s,
				offset: o.offset,
				entry: e,
				index: n
			}), w = P - N, T = o.size, E = {
				x: h.left,
				y: C,
				width: h.width,
				height: T
			}, f && (y += p?.[n + v] ?? 0), Math.abs(O) > 0 && Math.abs(w) < Math.abs(O)) {
				var ee = pt(w || O) * (Math.abs(O) - Math.abs(w));
				w += ee;
			}
		}
		return y == null || C == null || w == null || T == null || !a && (w === 0 || T === 0) ? null : Br(Q(Q({}, typeof e == "object" && e ? JI(e, ["id"]) : e), {}, {
			stackedBarStart: S,
			x: y,
			y: C,
			width: w,
			height: T,
			value: f ? m : m[1],
			payload: e,
			background: E,
			tooltipPosition: {
				x: y + w / 2,
				y: C + T / 2
			},
			parentViewBox: _,
			originalDataIndex: n
		}, g && g[n] && g[n].props), e);
	}).filter(Boolean);
}
function LH(e) {
	var t = Nr(e.fill), n = t.color, r = t.fillObject, i = Q(Q({}, e), {}, { fill: n }), a = jI({
		dataKey: i.dataKey,
		xAxisId: i.xAxisId ?? PH.xAxisId,
		yAxisId: i.yAxisId ?? PH.yAxisId
	}), o = kI(a, i), s = AI(a, i), c = r ?? s, l = RM(o), u = PF(i), d = qF(o, i), f = Ti(o, i, void 0), p = Ci(Q(Q({}, i), {}, { dataKey: a }), PH), m = $V(p.stackId), h = Xu(), g = i.fill ?? f?.fill, _ = i.stroke ?? f?.stroke, v = i.strokeWidth ?? f?.strokeWidth, y = i.strokeOpacity ?? f?.strokeOpacity, b = i.strokeDasharray ?? f?.strokeDasharray, x = i.fillOpacity ?? f?.fillOpacity, S = {};
	return g !== void 0 && (S.fill = g), _ !== void 0 && (S.stroke = _), v !== void 0 && (S.strokeWidth = v), y !== void 0 && (S.strokeOpacity = y), b !== void 0 && (S.strokeDasharray = b), x !== void 0 && (S.fillOpacity = x), /*#__PURE__*/ F.createElement(tF, {
		id: p.id,
		type: "bar"
	}, (e) => /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(kP, { legendPayload: bH(Q(Q({}, p), S), c) }), /*#__PURE__*/ F.createElement(xH, {
		dataKey: p.dataKey,
		stroke: S.stroke ?? p.stroke,
		strokeWidth: S.strokeWidth ?? p.strokeWidth,
		fill: S.fill ?? p.fill,
		name: p.name,
		hide: p.hide,
		unit: p.unit,
		formatter: p.formatter,
		tooltipType: p.tooltipType,
		id: e,
		unthemedColors: u
	}), /*#__PURE__*/ F.createElement(dF, {
		type: "bar",
		id: e,
		data: p.data,
		xAxisId: p.xAxisId,
		yAxisId: p.yAxisId,
		zAxisId: 0,
		dataKey: p.dataKey,
		stackId: m,
		hide: p.hide,
		barSize: p.barSize,
		minPointSize: p.minPointSize,
		maxBarSize: p.maxBarSize,
		isPanorama: h,
		hasCustomShape: p.shape != null && p.shape !== kV,
		strokeWidth: S.strokeWidth ?? p.strokeWidth
	}), /*#__PURE__*/ F.createElement(hk, { zIndex: p.zIndex }, /*#__PURE__*/ F.createElement(IM, { value: l }, /*#__PURE__*/ F.createElement(FH, pH({}, p, S, {
		id: e,
		unthemedColors: u,
		themedActiveStyles: d,
		fillObject: c,
		paintFill: c == null ? void 0 : Mr(Pr(e))
	}))))));
}
var RH = /*#__PURE__*/ F.memo(LH, _f);
RH.displayName = "Bar";
// node_modules/recharts/es6/util/axisPropsAreEqual.js
var zH = ["domain", "range"], BH = ["domain", "range"];
function VH(e, t) {
	if (e == null) return {};
	var n, r, i = HH(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function HH(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function UH(e, t) {
	return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function WH(e, t) {
	if (e === t) return !0;
	var n = e.domain, r = e.range, i = VH(e, zH), a = t.domain, o = t.range, s = VH(t, BH);
	return !UH(n, a) || !UH(r, o) ? !1 : _f(i, s);
}
// node_modules/recharts/es6/cartesian/XAxis.js
var GH = ["type"], KH = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], qH = ["id", "scale"];
function JH() {
	return JH = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, JH.apply(null, arguments);
}
function YH(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function XH(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? YH(Object(n), !0).forEach(function(t) {
			ZH(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : YH(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ZH(e, t, n) {
	return (t = QH(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function QH(e) {
	var t = $H(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function $H(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function eU(e, t) {
	if (e == null) return {};
	var n, r, i = tU(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function tU(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function nU(e) {
	var t = B(), n = (0, F.useRef)(null), r = zd(), i = e.type, a = eU(e, GH), o = m_(r, "xAxis", i), s = (0, F.useMemo)(() => {
		if (o != null) return XH(XH({}, a), {}, { type: o });
	}, [a, o]);
	return (0, F.useLayoutEffect)(() => {
		s != null && (n.current === null ? t(Y_(s)) : n.current !== s && t(X_({
			prev: n.current,
			next: s
		})), n.current = s);
	}, [s, t]), (0, F.useLayoutEffect)(() => () => {
		n.current &&= (t(Z_(n.current)), null);
	}, [t]), null;
}
var rU = (e) => {
	var t = e.xAxisId, n = e.className, r = e.height, i = e.label, a = (0, F.useRef)(null), o = (0, F.useRef)(null), s = V(Ju), c = Xu(), u = B(), d = "xAxis", f = V((e) => cE(e, d, t, c)), p = V((e) => YT(e, t)), m = V((e) => eE(e, t)), h = V((e) => nw(e, t)), g = V((e) => {
		var t;
		return !((t = e.chartData.chartData) != null && t.length);
	});
	if ((0, F.useLayoutEffect)(() => {
		g === !1 && r === "auto" && u(nv({
			id: t,
			height: 30
		}));
	}, [
		g,
		r,
		u,
		t
	]), (0, F.useLayoutEffect)(() => {
		if (!(r !== "auto" || !p || iN(i) || /*#__PURE__*/ (0, F.isValidElement)(i) || h == null)) {
			var e = a.current;
			if (e) {
				var n = e.getCalculatedHeight();
				Math.round(p.height) !== Math.round(n) && u(nv({
					id: t,
					height: n
				}));
			}
		}
	}, [
		f,
		p,
		u,
		i,
		t,
		r,
		h
	]), p == null || m == null || h == null) return null;
	e.dangerouslySetInnerHTML, e.ticks, e.scale;
	var _ = eU(e, KH);
	h.id, h.scale;
	var v = eU(h, qH);
	return /*#__PURE__*/ F.createElement(XR, JH({}, _, v, {
		ref: a,
		labelRef: o,
		x: m.x,
		y: m.y,
		width: p.width,
		height: p.height,
		className: l(`recharts-${d} ${d}`, n),
		viewBox: s,
		ticks: f,
		axisType: d,
		axisId: t
	}));
}, iU = {
	allowDataOverflow: tw.allowDataOverflow,
	allowDecimals: tw.allowDecimals,
	allowDuplicatedCategory: tw.allowDuplicatedCategory,
	angle: tw.angle,
	axisLine: zR.axisLine,
	height: tw.height,
	hide: !1,
	includeHidden: tw.includeHidden,
	interval: tw.interval,
	label: !1,
	minTickGap: tw.minTickGap,
	mirror: tw.mirror,
	orientation: tw.orientation,
	padding: tw.padding,
	reversed: tw.reversed,
	scale: tw.scale,
	tick: tw.tick,
	tickCount: tw.tickCount,
	tickLine: zR.tickLine,
	tickSize: zR.tickSize,
	type: tw.type,
	niceTicks: tw.niceTicks,
	xAxisId: 0
}, aU = /*#__PURE__*/ F.memo((e) => {
	var t = Ci(e, iU);
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(nU, {
		allowDataOverflow: t.allowDataOverflow,
		allowDecimals: t.allowDecimals,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		angle: t.angle,
		dataKey: t.dataKey,
		domain: t.domain,
		height: t.height,
		hide: t.hide,
		id: t.xAxisId,
		includeHidden: t.includeHidden,
		interval: t.interval,
		minTickGap: t.minTickGap,
		mirror: t.mirror,
		name: t.name,
		orientation: t.orientation,
		padding: t.padding,
		reversed: t.reversed,
		scale: t.scale,
		tick: t.tick,
		tickCount: t.tickCount,
		tickFormatter: t.tickFormatter,
		ticks: t.ticks,
		type: t.type,
		unit: t.unit,
		niceTicks: t.niceTicks
	}), /*#__PURE__*/ F.createElement(rU, t));
}, WH);
aU.displayName = "XAxis";
// node_modules/recharts/es6/cartesian/YAxis.js
var oU = ["type"], sU = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], cU = ["id", "scale"];
function lU() {
	return lU = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, lU.apply(null, arguments);
}
function uU(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function dU(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? uU(Object(n), !0).forEach(function(t) {
			fU(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uU(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function fU(e, t, n) {
	return (t = pU(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pU(e) {
	var t = mU(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function mU(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hU(e, t) {
	if (e == null) return {};
	var n, r, i = gU(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function gU(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function _U(e) {
	var t = B(), n = (0, F.useRef)(null), r = zd(), i = e.type, a = hU(e, oU), o = m_(r, "yAxis", i), s = (0, F.useMemo)(() => {
		if (o != null) return dU(dU({}, a), {}, { type: o });
	}, [o, a]);
	return (0, F.useLayoutEffect)(() => {
		s != null && (n.current === null ? t(Q_(s)) : n.current !== s && t($_({
			prev: n.current,
			next: s
		})), n.current = s);
	}, [s, t]), (0, F.useLayoutEffect)(() => () => {
		n.current &&= (t(ev(n.current)), null);
	}, [t]), null;
}
function vU(e) {
	var t = e.yAxisId, n = e.className, r = e.width, i = e.label, a = (0, F.useRef)(null), o = (0, F.useRef)(null), s = V(Ju), c = Xu(), u = B(), d = "yAxis", f = V((e) => nE(e, t)), p = V((e) => tE(e, t)), m = V((e) => cE(e, d, t, c)), h = V((e) => aw(e, t)), g = V((e) => {
		var t;
		return !((t = e.chartData.chartData) != null && t.length);
	}), _ = (0, F.useCallback)(() => u(tv({
		id: t,
		width: 60
	})), [u, t]), v = (0, F.useRef)(_);
	if (v.current = _, (0, F.useLayoutEffect)(() => {
		g === !1 && r === "auto" && v.current();
	}, [
		g,
		r,
		_
	]), (0, F.useLayoutEffect)(() => {
		if (!(r !== "auto" || !f || iN(i) || /*#__PURE__*/ (0, F.isValidElement)(i) || h == null)) {
			var e = a.current;
			if (e) {
				var n = e.getCalculatedWidth();
				Math.round(f.width) !== Math.round(n) && u(tv({
					id: t,
					width: n
				}));
			}
		}
	}, [
		m,
		f,
		u,
		i,
		t,
		r,
		h
	]), f == null || p == null || h == null) return null;
	e.dangerouslySetInnerHTML, e.ticks, e.scale;
	var y = hU(e, sU);
	h.id, h.scale;
	var b = hU(h, cU);
	return /*#__PURE__*/ F.createElement(XR, lU({}, y, b, {
		ref: a,
		labelRef: o,
		x: p.x,
		y: p.y,
		tickTextProps: r === "auto" ? { width: void 0 } : { width: r },
		width: f.width,
		height: f.height,
		className: l(`recharts-${d} ${d}`, n),
		viewBox: s,
		ticks: m,
		axisType: d,
		axisId: t
	}));
}
var yU = {
	allowDataOverflow: iw.allowDataOverflow,
	allowDecimals: iw.allowDecimals,
	allowDuplicatedCategory: iw.allowDuplicatedCategory,
	angle: iw.angle,
	axisLine: zR.axisLine,
	hide: !1,
	includeHidden: iw.includeHidden,
	interval: iw.interval,
	label: !1,
	minTickGap: iw.minTickGap,
	mirror: iw.mirror,
	orientation: iw.orientation,
	padding: iw.padding,
	reversed: iw.reversed,
	scale: iw.scale,
	tick: iw.tick,
	tickCount: iw.tickCount,
	tickLine: zR.tickLine,
	tickSize: zR.tickSize,
	type: iw.type,
	niceTicks: iw.niceTicks,
	width: iw.width,
	yAxisId: 0
}, bU = /*#__PURE__*/ F.memo((e) => {
	var t = Ci(e, yU);
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(_U, {
		interval: t.interval,
		id: t.yAxisId,
		scale: t.scale,
		type: t.type,
		domain: t.domain,
		allowDataOverflow: t.allowDataOverflow,
		dataKey: t.dataKey,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		padding: t.padding,
		includeHidden: t.includeHidden,
		reversed: t.reversed,
		ticks: t.ticks,
		width: t.width,
		orientation: t.orientation,
		mirror: t.mirror,
		hide: t.hide,
		unit: t.unit,
		name: t.name,
		angle: t.angle,
		minTickGap: t.minTickGap,
		tick: t.tick,
		tickFormatter: t.tickFormatter,
		niceTicks: t.niceTicks
	}), /*#__PURE__*/ F.createElement(vU, t));
}, WH);
bU.displayName = "YAxis";
var xU = H([
	(e, t) => t,
	K,
	M_,
	V_,
	KD,
	JD,
	DO,
	Ku
], zO);
// node_modules/recharts/es6/util/getRelativeCoordinate.js
function SU(e) {
	return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function CU(e) {
	var t = e.currentTarget.getBoundingClientRect(), n, r;
	if (SU(e)) {
		var i = e.currentTarget.getBBox();
		n = i.width > 0 ? t.width / i.width : 1, r = i.height > 0 ? t.height / i.height : 1;
	} else {
		var a = e.currentTarget;
		n = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1, r = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1;
	}
	var o = (e, i) => ({
		relativeX: Math.round((e - t.left) / n),
		relativeY: Math.round((i - t.top) / r)
	});
	return "touches" in e ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY)) : o(e.clientX, e.clientY);
}
// node_modules/recharts/es6/state/mouseEventsMiddleware.js
var wU = Oc("mouseClick"), TU = Il();
TU.startListening({
	actionCreator: wU,
	effect: (e, t) => {
		var n = e.payload, r = xU(t.getState(), CU(n));
		r?.activeIndex != null && t.dispatch(ME({
			activeIndex: r.activeIndex,
			activeDataKey: void 0,
			activeCoordinate: r.activeCoordinate
		}));
	}
});
var EU = Oc("mouseMove");
function DU() {
	var e = Il(), t = null, n = null, r = null;
	return e.startListening({
		actionCreator: kE,
		effect: () => {
			t !== null && (cancelAnimationFrame(t), t = null), n !== null && (clearTimeout(n), n = null), r = null;
		}
	}), e.startListening({
		actionCreator: EU,
		effect: (e, i) => {
			var a = e.payload, o = i.getState().eventSettings, s = o.throttleDelay, c = o.throttledEvents, l = c === "all" || c?.includes("mousemove");
			t !== null && (cancelAnimationFrame(t), t = null), n === null || typeof s == "number" && l || (clearTimeout(n), n = null), r = CU(a);
			var u = () => {
				var e = i.getState(), a = gE(e, e.tooltip.settings.shared);
				if (!r) t = null, n = null;
				else {
					if (a === "axis") {
						var o = xU(e, r);
						o?.activeIndex == null ? i.dispatch(kE()) : i.dispatch(jE({
							activeIndex: o.activeIndex,
							activeDataKey: void 0,
							activeCoordinate: o.activeCoordinate
						}));
					}
					t = null, n = null;
				}
			};
			l ? s === "raf" ? t = requestAnimationFrame(u) : typeof s == "number" && n === null && (n = setTimeout(u, s)) : u();
		}
	}), e;
}
// node_modules/recharts/es6/state/reduxDevtoolsJsonStringifyReplacer.js
function OU(e, t) {
	return t instanceof HTMLElement ? `HTMLElement <${t.tagName} class="${t.className}">` : t === window ? "global.window" : e === "children" && typeof t == "object" && t ? "<<CHILDREN>>" : t;
}
// node_modules/recharts/es6/state/rootPropsSlice.js
var kU = {
	accessibilityLayer: !0,
	barCategoryGap: "10%",
	barGap: 4,
	barSize: void 0,
	className: void 0,
	maxBarSize: void 0,
	stackOffset: "none",
	syncId: void 0,
	syncMethod: "index",
	baseValue: void 0,
	reverseStackOrder: !1
}, AU = Xc({
	name: "rootProps",
	initialState: kU,
	reducers: { updateOptions: (e, t) => {
		e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = t.payload.barGap ?? kU.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
	} }
}), jU = AU.reducer, MU = AU.actions.updateOptions, NU = Xc({
	name: "polarOptions",
	initialState: null,
	reducers: { updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e) }
}), PU = NU.actions.updatePolarOptions, FU = NU.reducer, IU = Oc("keyDown"), LU = Oc("focus"), RU = Oc("blur"), zU = Il(), BU = null, VU = null, HU = null;
zU.startListening({
	actionCreator: IU,
	effect: (e, t) => {
		HU = e.payload, BU !== null && (cancelAnimationFrame(BU), BU = null);
		var n = t.getState().eventSettings, r = n.throttleDelay, i = n.throttledEvents, a = i === "all" || i.includes("keydown");
		VU === null || typeof r == "number" && a || (clearTimeout(VU), VU = null);
		var o = () => {
			try {
				var e = t.getState();
				if (e.rootProps.accessibilityLayer === !1) return;
				var n = e.tooltip.keyboardInteraction, r = HU;
				if (r !== "ArrowRight" && r !== "ArrowLeft" && r !== "Enter") return;
				var i = qE(n, FD(e), Lw(e), WD(e)), a = i == null ? -1 : Number(i), o = !Number.isFinite(a) || a < 0, s = JD(e), c = FD(e), l = gE(e, e.tooltip.settings.shared);
				if (r === "Enter") {
					if (o) return;
					var u = MO(e, l, "hover", String(n.index));
					t.dispatch(PE({
						active: !n.active,
						activeIndex: n.index,
						activeCoordinate: u
					}));
					return;
				}
				var d = fE(e) === "left-to-right" ? 1 : -1, f = r === "ArrowRight" ? 1 : -1, p;
				if (o) {
					var m = Lw(e), h = WD(e), g = f * d, _ = (e) => ({
						active: !1,
						index: String(e),
						dataKey: void 0,
						graphicalItemId: void 0,
						coordinate: void 0
					});
					if (p = -1, g > 0) {
						for (var v = 0; v < c.length; v++) if (qE(_(v), c, m, h) != null) {
							p = v;
							break;
						}
					} else for (var y = c.length - 1; y >= 0; y--) if (qE(_(y), c, m, h) != null) {
						p = y;
						break;
					}
					if (p < 0) return;
				} else {
					p = a + f * d;
					var b = s?.length || c.length;
					if (b === 0 || p >= b || p < 0) return;
				}
				var x = MO(e, l, "hover", String(p));
				t.dispatch(PE({
					active: !0,
					activeIndex: p.toString(),
					activeCoordinate: x
				}));
			} finally {
				BU = null, VU = null;
			}
		};
		a ? r === "raf" ? BU = requestAnimationFrame(o) : typeof r == "number" && VU === null && (o(), HU = null, VU = setTimeout(() => {
			HU ? o() : (VU = null, BU = null);
		}, r)) : o();
	}
}), zU.startListening({
	actionCreator: LU,
	effect: (e, t) => {
		var n = t.getState();
		if (n.rootProps.accessibilityLayer !== !1) {
			var r = n.tooltip.keyboardInteraction;
			if (!r.active && r.index == null) {
				var i = "0", a = MO(n, gE(n, n.tooltip.settings.shared), "hover", String(i));
				t.dispatch(PE({
					active: !0,
					activeIndex: i,
					activeCoordinate: a
				}));
			}
		}
	}
}), zU.startListening({
	actionCreator: RU,
	effect: (e, t) => {
		var n = t.getState();
		if (n.rootProps.accessibilityLayer !== !1) {
			var r = n.tooltip.keyboardInteraction;
			r.active && t.dispatch(PE({
				active: !1,
				activeIndex: r.index,
				activeCoordinate: r.coordinate
			}));
		}
	}
});
// node_modules/recharts/es6/util/createEventProxy.js
function UU(e) {
	e.persist();
	var t = e.currentTarget;
	return new Proxy(e, { get: (e, n) => {
		if (n === "currentTarget") return t;
		var r = Reflect.get(e, n);
		return typeof r == "function" ? r.bind(e) : r;
	} });
}
// node_modules/recharts/es6/state/externalEventsMiddleware.js
var WU = Oc("externalEvent");
function GU() {
	var e = Il(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	return e.startListening({
		actionCreator: WU,
		effect: (e, i) => {
			var a = e.payload, o = a.handler, s = a.reactEvent;
			if (o != null) {
				var c = s.type, l = UU(s);
				r.set(c, {
					handler: o,
					reactEvent: l
				});
				var u = t.get(c);
				u !== void 0 && (cancelAnimationFrame(u), t.delete(c));
				var d = i.getState().eventSettings, f = d.throttleDelay, p = d.throttledEvents, m = p === "all" || p?.includes(c), h = n.get(c);
				h === void 0 || typeof f == "number" && m || (clearTimeout(h), n.delete(c));
				var g = () => {
					var e = r.get(c);
					try {
						if (!e) return;
						var a = e.handler, o = e.reactEvent, s = i.getState(), l = {
							activeCoordinate: iO(s),
							activeDataKey: tO(s),
							activeIndex: $D(s),
							activeLabel: eO(s),
							activeTooltipIndex: $D(s),
							isTooltipActive: aO(s)
						};
						a && a(l, o);
					} finally {
						t.delete(c), n.delete(c), r.delete(c);
					}
				};
				if (!m) g();
				else if (f === "raf") {
					var _ = requestAnimationFrame(g);
					t.set(c, _);
				} else if (typeof f == "number") {
					if (!n.has(c)) {
						g();
						var v = setTimeout(g, f);
						n.set(c, v);
					}
				} else g();
			}
		}
	}), e;
}
var KU = H([
	H([rD], (e) => e.tooltipItemPayloads),
	(e, t) => t,
	(e, t, n) => n
], (e, t, n) => {
	if (t != null) {
		var r = e.find((e) => e.settings.graphicalItemId === n);
		if (r != null) {
			var i = r.getPosition;
			if (i != null) return i(t);
		}
	}
}), qU = Oc("touchMove");
function JU() {
	var e = Il(), t = null, n = null, r = null, i = null;
	return e.startListening({
		actionCreator: qU,
		effect: (e, a) => {
			var o = e.payload;
			if (o.touches != null && o.touches.length !== 0) {
				i = UU(o);
				var s = a.getState().eventSettings, c = s.throttleDelay, l = s.throttledEvents, u = l === "all" || l.includes("touchmove");
				t !== null && (cancelAnimationFrame(t), t = null), n === null || typeof c == "number" && u || (clearTimeout(n), n = null), r = Array.from(o.touches).map((e) => CU({
					clientX: e.clientX,
					clientY: e.clientY,
					currentTarget: o.currentTarget
				}));
				var d = () => {
					try {
						if (i == null) return;
						var e = a.getState(), o = gE(e, e.tooltip.settings.shared);
						if (o === "axis") {
							var s = r?.[0];
							if (s == null) return;
							var c = xU(e, s);
							c?.activeIndex != null && a.dispatch(jE({
								activeIndex: c.activeIndex,
								activeDataKey: void 0,
								activeCoordinate: c.activeCoordinate
							}));
						} else if (o === "item") {
							var l = i.touches[0];
							if (document.elementFromPoint == null || l == null) return;
							var u = document.elementFromPoint(l.clientX, l.clientY);
							if (!u || !u.getAttribute) return;
							var d = u.getAttribute(Pu), f = u.getAttribute("data-recharts-item-id") ?? void 0, p = jD(e).find((e) => e.id === f);
							if (d == null || p == null || f == null) return;
							var m = p.dataKey, h = KU(e, d, f);
							a.dispatch(DE({
								activeDataKey: m,
								activeIndex: d,
								activeCoordinate: h,
								activeGraphicalItemId: f
							}));
						}
					} finally {
						t = null, n = null;
					}
				};
				u ? c === "raf" ? t = requestAnimationFrame(d) : typeof c == "number" && n === null && (d(), i = null, n = setTimeout(() => {
					i ? d() : (n = null, t = null);
				}, c)) : d();
			}
		}
	}), e;
}
// node_modules/recharts/es6/state/eventSettingsSlice.js
var YU = {
	throttleDelay: "raf",
	throttledEvents: [
		"mousemove",
		"touchmove",
		"pointermove",
		"scroll",
		"wheel"
	]
}, XU = Xc({
	name: "eventSettings",
	initialState: YU,
	reducers: { setEventSettings: (e, t) => {
		t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = U(t.payload.throttledEvents));
	} }
}), ZU = XU.actions.setEventSettings, QU = XU.reducer, $U = Xc({
	name: "zoom",
	initialState: {
		x: bv,
		y: bv
	},
	reducers: {
		setAxisViewport(e, t) {
			var n = t.payload, r = n.dimension, i = n.viewport, a = Dv(i);
			Ev(e[r], a) || (e[r] = a);
		},
		setZoom(e, t) {
			var n = Dv(t.payload.x), r = Dv(t.payload.y);
			Ev(e.x, n) || (e.x = n), Ev(e.y, r) || (e.y = r);
		},
		resetZoom(e) {
			Ev(e.x, bv) || (e.x = bv), Ev(e.y, bv) || (e.y = bv);
		}
	}
}), eW = $U.actions;
eW.setAxisViewport, eW.setZoom, eW.resetZoom;
var tW = $U.reducer, nW = Xc({
	name: "zoomSettings",
	initialState: {
		limits: null,
		axis: null
	},
	reducers: {
		setZoomLimits(e, t) {
			var n = t.payload;
			(e.limits?.minZoom !== n?.minZoom || e.limits?.maxZoom !== n?.maxZoom) && (e.limits = n);
		},
		setZoomAxis(e, t) {
			e.axis = t.payload;
		}
	}
}), rW = nW.actions;
rW.setZoomAxis, rW.setZoomLimits;
var iW = nW.reducer, aW = Qo({
	brush: yL,
	cartesianAxis: rv,
	chartData: Rg,
	errorBars: Rz,
	eventSettings: QU,
	graphicalItems: uF,
	layout: Wl,
	legend: Zd,
	options: Pk,
	polarAxis: iP,
	polarOptions: FU,
	referenceElements: OL,
	renderedTicks: wR,
	rootProps: jU,
	tooltip: FE,
	zIndex: mk,
	zoom: tW,
	zoomSettings: iW
});
function oW(e) {
	typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(e) : setTimeout(e, 10);
}
var sW = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
	return Bc({
		reducer: aW,
		preloadedState: e,
		middleware: (e) => e({
			serializableCheck: !1,
			immutableCheck: ![
				"commonjs",
				"es6",
				"production"
			].includes("es6")
		}).concat([
			TU.middleware,
			DU().middleware,
			zU.middleware,
			GU().middleware,
			JU().middleware
		]),
		enhancers: (e) => {
			var t = e;
			return typeof e == "function" && (t = e()), t.concat(Rc({
				type: "callback",
				queueNotification: oW
			}));
		},
		devTools: Sp.devToolsEnabled && {
			serialize: { replacer: OU },
			name: `recharts-${t}`
		}
	});
};
// node_modules/recharts/es6/state/RechartsStoreProvider.js
function cW(e) {
	var t = e.preloadedState, n = e.children, r = e.reduxStoreName, i = Xu(), a = (0, F.useRef)(null);
	if (i) return n;
	a.current ??= sW(t, r);
	var o = ro;
	return /*#__PURE__*/ F.createElement(mf, {
		context: o,
		store: a.current
	}, n);
}
// node_modules/recharts/es6/state/ReportMainChartProps.js
function lW(e) {
	var t = e.layout, n = e.margin, r = B(), i = Xu();
	return (0, F.useEffect)(() => {
		i || (r(Vl(t)), r(Bl(n)));
	}, [
		r,
		i,
		t,
		n
	]), null;
}
var uW = /*#__PURE__*/ (0, F.memo)(lW, _f);
// node_modules/recharts/es6/state/ReportChartProps.js
function dW(e) {
	var t = B();
	return (0, F.useEffect)(() => {
		t(MU(e));
	}, [t, e]), null;
}
var fW = /*#__PURE__*/ (0, F.memo)((e) => {
	var t = B();
	return (0, F.useEffect)(() => {
		t(ZU(e));
	}, [t, e]), null;
}, _f);
// node_modules/recharts/es6/zIndex/ZIndexPortal.js
function pW(e) {
	var t = e.zIndex, n = e.isPanorama, r = (0, F.useRef)(null), i = B();
	return (0, F.useLayoutEffect)(() => (r.current && i(fk({
		zIndex: t,
		element: r.current,
		isPanorama: n
	})), () => {
		i(pk({
			zIndex: t,
			isPanorama: n
		}));
	}), [
		i,
		t,
		n
	]), /*#__PURE__*/ F.createElement("g", {
		ref: r,
		tabIndex: -1,
		style: { outline: "none" },
		className: `recharts-zIndex-layer_${t}`
	});
}
function mW(e) {
	var t = e.children, n = e.isPanorama, r = V($O);
	if (!r || r.length === 0) return t;
	var i = r.filter((e) => e < 0), a = r.filter((e) => e > 0);
	return /*#__PURE__*/ F.createElement(F.Fragment, null, i.map((e) => /*#__PURE__*/ F.createElement(pW, {
		key: e,
		zIndex: e,
		isPanorama: n
	})), t, a.map((e) => /*#__PURE__*/ F.createElement(pW, {
		key: e,
		zIndex: e,
		isPanorama: n
	})));
}
// node_modules/recharts/es6/container/RootSurface.js
var hW = ["children"];
function gW(e, t) {
	if (e == null) return {};
	var n, r, i = _W(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function _W(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function vW() {
	return vW = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, vW.apply(null, arguments);
}
var yW = {
	width: "100%",
	height: "100%",
	display: "block"
}, bW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = Fd(), r = Id(), i = Gp();
	if (!Kl(n) || !Kl(r)) return null;
	var a = e.children, o = e.otherAttributes, s = e.title, c = e.desc, l, u;
	return o != null && (l = typeof o.tabIndex == "number" ? o.tabIndex : i ? 0 : void 0, u = typeof o.role == "string" ? o.role : i ? "application" : void 0), /*#__PURE__*/ F.createElement(qe, vW({}, o, {
		title: s,
		desc: c,
		role: u,
		tabIndex: l,
		width: n,
		height: r,
		style: yW,
		ref: t
	}), a);
}), xW = (e) => {
	var t = e.children, n = V(Qu);
	if (!n) return null;
	var r = n.width, i = n.height, a = n.y, o = n.x;
	return /*#__PURE__*/ F.createElement(qe, {
		width: r,
		height: i,
		x: o,
		y: a
	}, t);
}, SW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.children, r = gW(e, hW);
	return Xu() ? /*#__PURE__*/ F.createElement(xW, null, /*#__PURE__*/ F.createElement(mW, { isPanorama: !0 }, n)) : /*#__PURE__*/ F.createElement(bW, vW({ ref: t }, r), /*#__PURE__*/ F.createElement(mW, { isPanorama: !1 }, n));
});
// node_modules/recharts/es6/util/useReportScale.js
function CW(e, t) {
	return OW(e) || DW(e, t) || TW(e, t) || wW();
}
function wW() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function TW(e, t) {
	if (e) {
		if (typeof e == "string") return EW(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? EW(e, t) : void 0;
	}
}
function EW(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function DW(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function OW(e) {
	if (Array.isArray(e)) return e;
}
function kW() {
	var e = B(), t = CW((0, F.useState)(null), 2), n = t[0], r = t[1];
	return (0, F.useEffect)(() => {
		if (n != null) {
			var t = n.getBoundingClientRect().width / n.offsetWidth;
			W(t) && e(Ul(t));
		}
	}, [n, e]), r;
}
// node_modules/recharts/es6/chart/RechartsWrapper.js
function AW(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function jW(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? AW(Object(n), !0).forEach(function(t) {
			MW(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : AW(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function MW(e, t, n) {
	return (t = NW(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function NW(e) {
	var t = PW(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function PW(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function FW() {
	return FW = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, FW.apply(null, arguments);
}
function IW(e, t) {
	return VW(e) || BW(e, t) || RW(e, t) || LW();
}
function LW() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function RW(e, t) {
	if (e) {
		if (typeof e == "string") return zW(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zW(e, t) : void 0;
	}
}
function zW(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function BW(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function VW(e) {
	if (Array.isArray(e)) return e;
}
var HW = () => (qk(), null);
function UW(e) {
	if (typeof e == "number") return e;
	if (typeof e == "string") {
		var t = parseFloat(e);
		if (!Number.isNaN(t)) return t;
	}
	return 0;
}
var WW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = (0, F.useRef)(null), r = IW((0, F.useState)({
		containerWidth: UW(e.style?.width),
		containerHeight: UW(e.style?.height)
	}), 2), i = r[0], a = r[1], o = (0, F.useCallback)((e, t) => {
		a((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []), s = (0, F.useCallback)((e) => {
		if (typeof t == "function" && t(e), n.current != null && (n.current.disconnect(), n.current = null), e != null && typeof ResizeObserver < "u") {
			var r = e.getBoundingClientRect(), i = r.width, a = r.height;
			o(i, a);
			var s = new ResizeObserver((e) => {
				var t = e[0];
				if (t != null) {
					var n = t.contentRect, r = n.width, i = n.height;
					o(r, i);
				}
			});
			s.observe(e), n.current = s;
		}
	}, [t, o]);
	return (0, F.useEffect)(() => () => {
		n.current?.disconnect();
	}, [o]), /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(Ud, {
		width: i.containerWidth,
		height: i.containerHeight
	}), /*#__PURE__*/ F.createElement("div", FW({ ref: s }, e)));
}), GW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.width, r = e.height, i = IW((0, F.useState)({
		containerWidth: UW(n),
		containerHeight: UW(r)
	}), 2), a = i[0], o = i[1], s = (0, F.useCallback)((e, t) => {
		o((n) => {
			var r = Math.round(e), i = Math.round(t);
			return n.containerWidth === r && n.containerHeight === i ? n : {
				containerWidth: r,
				containerHeight: i
			};
		});
	}, []), c = (0, F.useCallback)((e) => {
		if (typeof t == "function" && t(e), e != null) {
			var n = e.getBoundingClientRect(), r = n.width, i = n.height;
			s(r, i);
		}
	}, [t, s]);
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(Ud, {
		width: a.containerWidth,
		height: a.containerHeight
	}), /*#__PURE__*/ F.createElement("div", FW({ ref: c }, e)));
});
function KW(e) {
	return e instanceof Element && e.matches("svg.recharts-surface");
}
var qW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.width, r = e.height;
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(Ud, {
		width: n,
		height: r
	}), /*#__PURE__*/ F.createElement("div", FW({ ref: t }, e)));
}), JW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.width, r = e.height;
	return typeof n == "string" || typeof r == "string" ? /*#__PURE__*/ F.createElement(GW, FW({}, e, { ref: t })) : typeof n == "number" && typeof r == "number" ? /*#__PURE__*/ F.createElement(qW, FW({}, e, {
		width: n,
		height: r,
		ref: t
	})) : /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(Ud, {
		width: n,
		height: r
	}), /*#__PURE__*/ F.createElement("div", FW({ ref: t }, e)));
});
function YW(e) {
	return e ? WW : JW;
}
var XW = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n, r, i = e.children, a = e.className, o = e.height, s = e.onClick, c = e.onContextMenu, u = e.onDoubleClick, d = e.onMouseDown, f = e.onMouseEnter, p = e.onMouseLeave, m = e.onMouseMove, h = e.onMouseUp, g = e.onTouchEnd, _ = e.onTouchMove, v = e.onTouchStart, y = e.style, b = e.width, x = e.responsive, S = e.dispatchTouchEvents, C = S === void 0 || S, w = (0, F.useRef)(null), T = B(), E = V((e) => e.rootProps.accessibilityLayer !== !1), D = IW((0, F.useState)(null), 2), O = D[0], k = D[1], A = IW((0, F.useState)(null), 2), j = A[0], M = A[1], N = kW(), P = mr(), ee = kd(), te = ee?.width > 0 ? ee.width : b, ne = ee?.height > 0 ? ee.height : o, re = (0, F.useCallback)((e) => {
		N(e), typeof t == "function" && t(e), e != null && (k(e), M(e), w.current = e);
	}, [
		N,
		t,
		k,
		M
	]), ie = (0, F.useCallback)((e) => {
		T(wU(e)), T(WU({
			handler: s,
			reactEvent: e
		}));
	}, [T, s]), ae = (0, F.useCallback)((e) => {
		T(EU(e)), T(WU({
			handler: f,
			reactEvent: e
		}));
	}, [T, f]), oe = (0, F.useCallback)((e) => {
		T(kE()), T(WU({
			handler: p,
			reactEvent: e
		}));
	}, [T, p]), se = (0, F.useCallback)((e) => {
		T(EU(e)), T(WU({
			handler: m,
			reactEvent: e
		}));
	}, [T, m]), ce = (0, F.useCallback)(() => {
		T(LU());
	}, [T]), le = (0, F.useCallback)(() => {
		T(RU());
	}, [T]), ue = (0, F.useCallback)((e) => {
		E && KW(e.target) && (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Enter") && e.preventDefault(), T(IU(e.key));
	}, [T, E]), de = (0, F.useCallback)((e) => {
		T(WU({
			handler: c,
			reactEvent: e
		}));
	}, [T, c]), fe = (0, F.useCallback)((e) => {
		T(WU({
			handler: u,
			reactEvent: e
		}));
	}, [T, u]), pe = (0, F.useCallback)((e) => {
		T(WU({
			handler: d,
			reactEvent: e
		}));
	}, [T, d]), me = (0, F.useCallback)((e) => {
		T(WU({
			handler: h,
			reactEvent: e
		}));
	}, [T, h]), he = (0, F.useCallback)((e) => {
		T(WU({
			handler: v,
			reactEvent: e
		}));
	}, [T, v]), ge = (0, F.useCallback)((e) => {
		C && T(qU(e)), T(WU({
			handler: _,
			reactEvent: e
		}));
	}, [
		T,
		C,
		_
	]), _e = (0, F.useCallback)((e) => {
		T(WU({
			handler: g,
			reactEvent: e
		}));
	}, [T, g]), ve = YW(x);
	return /*#__PURE__*/ F.createElement(Ek.Provider, { value: O }, /*#__PURE__*/ F.createElement(Pt.Provider, { value: j }, /*#__PURE__*/ F.createElement(ve, {
		width: te ?? y?.width ?? (P == null || (n = P.chart) == null ? void 0 : n.width),
		height: ne ?? y?.height ?? (P == null || (r = P.chart) == null ? void 0 : r.height),
		className: l("recharts-wrapper", a),
		style: jW(jW(jW(jW({
			position: "relative",
			cursor: "default"
		}, P?.chart), te == null ? {} : { width: te }), ne == null ? {} : { height: ne }), y),
		onClick: ie,
		onContextMenu: de,
		onDoubleClick: fe,
		onFocus: ce,
		onBlur: le,
		onKeyDown: ue,
		onMouseDown: pe,
		onMouseEnter: ae,
		onMouseLeave: oe,
		onMouseMove: se,
		onMouseUp: me,
		onTouchEnd: _e,
		onTouchMove: ge,
		onTouchStart: he,
		ref: re
	}, /*#__PURE__*/ F.createElement(HW, null), i)));
}), ZW = [
	"width",
	"height",
	"responsive",
	"children",
	"className",
	"style",
	"compact",
	"title",
	"desc"
];
function QW(e, t) {
	if (e == null) return {};
	var n, r, i = $W(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function $W(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var eG = /*#__PURE__*/ (0, F.forwardRef)((e, t) => {
	var n = e.width, r = e.height, i = e.responsive, a = e.children, o = e.className, s = e.style, c = e.compact, l = e.title, u = e.desc, d = ze(QW(e, ZW));
	return c ? /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(Ud, {
		width: n,
		height: r
	}), /*#__PURE__*/ F.createElement(SW, {
		otherAttributes: d,
		title: l,
		desc: u
	}, a)) : /*#__PURE__*/ F.createElement(XW, {
		className: o,
		style: s,
		width: n,
		height: r,
		responsive: i ?? !1,
		onClick: e.onClick,
		onMouseLeave: e.onMouseLeave,
		onMouseEnter: e.onMouseEnter,
		onMouseMove: e.onMouseMove,
		onMouseDown: e.onMouseDown,
		onMouseUp: e.onMouseUp,
		onContextMenu: e.onContextMenu,
		onDoubleClick: e.onDoubleClick,
		onTouchStart: e.onTouchStart,
		onTouchMove: e.onTouchMove,
		onTouchEnd: e.onTouchEnd
	}, /*#__PURE__*/ F.createElement(SW, {
		otherAttributes: d,
		title: l,
		desc: u,
		ref: t
	}, /*#__PURE__*/ F.createElement(XO, null, a)));
});
// node_modules/recharts/es6/chart/CartesianChart.js
function tG() {
	return tG = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, tG.apply(null, arguments);
}
function nG(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rG(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nG(Object(n), !0).forEach(function(t) {
			iG(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nG(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function iG(e, t, n) {
	return (t = aG(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function aG(e) {
	var t = oG(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function oG(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var sG = rG({
	accessibilityLayer: !0,
	barCategoryGap: "10%",
	barGap: 4,
	layout: "horizontal",
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	responsive: !1,
	reverseStackOrder: !1,
	stackOffset: "none",
	syncMethod: "index"
}, YU), cG = /*#__PURE__*/ (0, F.forwardRef)(function(e, t) {
	var n = Ci(e.categoricalChartProps, sG), r = e.chartName, i = e.defaultTooltipEventType, a = e.validateTooltipEventTypes, o = e.tooltipPayloadSearcher, s = e.categoricalChartProps, c = {
		chartName: r,
		defaultTooltipEventType: i,
		validateTooltipEventTypes: a,
		tooltipPayloadSearcher: o,
		eventEmitter: void 0
	};
	return /*#__PURE__*/ F.createElement(cW, {
		preloadedState: { options: c },
		reduxStoreName: s.id ?? r
	}, /*#__PURE__*/ F.createElement(gL, { chartData: s.data }), /*#__PURE__*/ F.createElement(uW, {
		layout: n.layout,
		margin: n.margin
	}), /*#__PURE__*/ F.createElement(fW, {
		throttleDelay: n.throttleDelay,
		throttledEvents: n.throttledEvents
	}), /*#__PURE__*/ F.createElement(dW, {
		baseValue: n.baseValue,
		accessibilityLayer: n.accessibilityLayer,
		barCategoryGap: n.barCategoryGap,
		maxBarSize: n.maxBarSize,
		stackOffset: n.stackOffset,
		barGap: n.barGap,
		barSize: n.barSize,
		syncId: n.syncId,
		syncMethod: n.syncMethod,
		className: n.className,
		reverseStackOrder: n.reverseStackOrder
	}), /*#__PURE__*/ F.createElement(eG, tG({}, n, { ref: t })));
}), lG = ["axis"], uG = /*#__PURE__*/ (0, F.forwardRef)((e, t) => /*#__PURE__*/ F.createElement(cG, {
	chartName: "LineChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: lG,
	tooltipPayloadSearcher: Mk,
	categoricalChartProps: e,
	ref: t
})), dG = ["axis", "item"], fG = /*#__PURE__*/ (0, F.forwardRef)((e, t) => /*#__PURE__*/ F.createElement(cG, {
	chartName: "BarChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: dG,
	tooltipPayloadSearcher: Mk,
	categoricalChartProps: e,
	ref: t
}));
// node_modules/recharts/es6/state/ReportPolarOptions.js
function pG(e) {
	var t = B();
	return (0, F.useEffect)(() => {
		t(PU(e));
	}, [t, e]), null;
}
// node_modules/recharts/es6/chart/PolarChart.js
var mG = ["layout"];
function hG() {
	return hG = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, hG.apply(null, arguments);
}
function gG(e, t) {
	if (e == null) return {};
	var n, r, i = _G(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function _G(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function vG(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function yG(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? vG(Object(n), !0).forEach(function(t) {
			bG(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vG(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function bG(e, t, n) {
	return (t = xG(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xG(e) {
	var t = SG(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function SG(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var CG = yG({
	accessibilityLayer: !0,
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: !1,
	syncMethod: "index",
	layout: "radial",
	responsive: !1,
	cx: "50%",
	cy: "50%",
	innerRadius: 0,
	outerRadius: "80%"
}, YU), wG = /*#__PURE__*/ (0, F.forwardRef)(function(e, t) {
	var n = Ci(e.categoricalChartProps, CG), r = n.layout, i = gG(n, mG), a = e.chartName, o = {
		chartName: a,
		defaultTooltipEventType: e.defaultTooltipEventType,
		validateTooltipEventTypes: e.validateTooltipEventTypes,
		tooltipPayloadSearcher: e.tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /*#__PURE__*/ F.createElement(cW, {
		preloadedState: { options: o },
		reduxStoreName: n.id ?? a
	}, /*#__PURE__*/ F.createElement(gL, { chartData: n.data }), /*#__PURE__*/ F.createElement(uW, {
		layout: r,
		margin: n.margin
	}), /*#__PURE__*/ F.createElement(fW, {
		throttleDelay: n.throttleDelay,
		throttledEvents: n.throttledEvents
	}), /*#__PURE__*/ F.createElement(dW, {
		baseValue: void 0,
		accessibilityLayer: n.accessibilityLayer,
		barCategoryGap: n.barCategoryGap,
		maxBarSize: n.maxBarSize,
		stackOffset: n.stackOffset,
		barGap: n.barGap,
		barSize: n.barSize,
		syncId: n.syncId,
		syncMethod: n.syncMethod,
		className: n.className,
		reverseStackOrder: n.reverseStackOrder
	}), /*#__PURE__*/ F.createElement(pG, {
		cx: n.cx,
		cy: n.cy,
		startAngle: n.startAngle,
		endAngle: n.endAngle,
		innerRadius: n.innerRadius,
		outerRadius: n.outerRadius
	}), /*#__PURE__*/ F.createElement(eG, hG({}, i, { ref: t })));
}), TG = ["axis"], EG = /*#__PURE__*/ (0, F.forwardRef)((e, t) => /*#__PURE__*/ F.createElement(cG, {
	chartName: "AreaChart",
	defaultTooltipEventType: "axis",
	validateTooltipEventTypes: TG,
	tooltipPayloadSearcher: Mk,
	categoricalChartProps: e,
	ref: t
}));
// src/react/charts/cn.ts
function DG(...e) {
	return d(l(e));
}
// src/react/evilcharts/registry/ui/recharts-chart.tsx
var $ = y(), OG = {
	light: "",
	dark: ".dark"
}, kG = Object.keys(OG);
function AG(e) {
	for (let [t, n] of Object.entries(e)) if (n.colors && !kG.some((e) => n.colors?.[e] !== void 0)) throw Error(`[EvilCharts] Invalid chart config for "${t}": colors object must have at least one theme key (${kG.join(", ")}). Received empty object or invalid keys.`);
}
var jG = F.createContext(null);
function MG() {
	let e = F.useContext(jG);
	if (!e) throw Error("useChart must be used within a <ChartContainer />");
	return e;
}
function NG({ id: e, config: t, initialDimension: n = {
	width: 320,
	height: 200
}, className: r, children: i, footer: a, ...o }) {
	let s = F.useId(), c = `chart-${e ?? s.replace(/:/g, "")}`;
	return AG(t), /* @__PURE__ */ (0, $.jsx)(jG.Provider, {
		value: { config: t },
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			"data-slot": "chart",
			"data-chart": c,
			className: DG("min-h-0 w-full flex-1", "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border relative flex flex-col justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", !a && "aspect-video", r),
			...o,
			children: [
				/* @__PURE__ */ (0, $.jsx)(IG, {
					id: c,
					config: t
				}),
				/* @__PURE__ */ (0, $.jsx)(jd, {
					className: "min-h-0 w-full flex-1",
					initialDimension: n,
					children: i
				}),
				a
			]
		})
	});
}
function PG({ isLoading: e }) {
	return e ? /* @__PURE__ */ (0, $.jsx)("div", {
		className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "text-primary bg-background flex items-center justify-center gap-2 rounded-md border px-2 py-0.5 text-sm",
			children: [/* @__PURE__ */ (0, $.jsx)("div", { className: "border-border border-t-primary h-3 w-3 animate-spin rounded-full border" }), /* @__PURE__ */ (0, $.jsx)("span", { children: "Loading" })]
		})
	}) : null;
}
function FG(e, t) {
	let n = e.length;
	if (n >= t) return e.slice(0, t);
	let r = [], i = Math.floor(t / n), a = t % n;
	for (let t = 0; t < n; t++) {
		let o = i + +(t >= n - a);
		for (let n = 0; n < o; n++) r.push(e[t]);
	}
	return r;
}
var IG = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.colors);
	if (!n.length) return null;
	let r = (e) => n.flatMap(([t, n]) => {
		let r = n.colors?.[e];
		return !r || !Array.isArray(r) || r.length === 0 ? [] : FG(r, RG(n)).map((e, n) => `  --color-${t}-${n}: ${e};`);
	}).filter(Boolean).join("\n"), i = Object.entries(OG).map(([t, n]) => `${n} [data-chart=${e}] {\n${r(t)}\n}`).join("\n");
	return /* @__PURE__ */ (0, $.jsx)("style", { dangerouslySetInnerHTML: { __html: i } });
};
function LG(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
function RG(e) {
	if (!e.colors) return 1;
	let t = kG.map((t) => e.colors?.[t]?.length ?? 0);
	return Math.max(...t, 1);
}
var zG = (e = 10, t = 0, n = 70) => {
	let r = n - t;
	return Array.from({ length: e }, () => ({ loading: Math.floor(Math.random() * r) + t }));
}, BG = {
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl"
}, VG = {
	default: "bg-background",
	"frosted-glass": "bg-background/70 backdrop-blur-sm"
};
function HG({ active: e, payload: t, className: n, indicator: r = "dot", hideLabel: i = !1, hideIndicator: a = !1, label: o, labelFormatter: s, labelClassName: c, formatter: l, nameKey: u, labelKey: d, selected: f, roundness: p = "lg", variant: m = "default" }) {
	let { config: h } = MG(), g = F.useMemo(() => {
		if (i || !t?.length) return null;
		let [e] = t, n = `${d ?? e?.dataKey ?? e?.name ?? "value"}`, r = LG(h, e, n), a = !d && typeof o == "string" ? h[o]?.label ?? o : r?.label;
		return s ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: DG("font-medium", c),
			children: s(a, t)
		}) : a ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: DG("font-medium", c),
			children: a
		}) : null;
	}, [
		o,
		s,
		t,
		i,
		c,
		h,
		d
	]);
	if (!e || !t?.length) return /* @__PURE__ */ (0, $.jsx)("span", { className: "p-4" });
	let _ = t.length === 1 && r !== "dot";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: DG("border-border/50 grid min-w-32 items-start gap-1.5 border px-2.5 py-1.5 text-xs shadow-xl", BG[p], VG[m], n),
		children: [_ ? null : g, /* @__PURE__ */ (0, $.jsx)("div", {
			className: "grid gap-1.5",
			children: t.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${(u && e.payload ? e.payload[u] : void 0) ?? e.name ?? e.dataKey ?? "value"}`, i = LG(h, e, n), o = i ? RG(i) : 1;
				return /* @__PURE__ */ (0, $.jsx)("div", {
					className: DG("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", r === "dot" && "items-center", f != null && f !== e.dataKey && "opacity-30"),
					children: l && e?.value !== void 0 && e.name ? l(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i?.icon ? /* @__PURE__ */ (0, $.jsx)(i.icon, {}) : !a && /* @__PURE__ */ (0, $.jsx)("div", {
						className: DG("shrink-0 rounded-[2px]", {
							"h-2.5 w-2.5": r === "dot",
							"w-1": r === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent!": r === "dashed",
							"my-0.5": _ && r === "dashed"
						}),
						style: UG(n, o)
					}), /* @__PURE__ */ (0, $.jsxs)("div", {
						className: DG("flex flex-1 justify-between gap-4 leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ (0, $.jsxs)("div", {
							className: "grid gap-1.5",
							children: [_ ? g : null, /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-muted-foreground",
								children: i?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-foreground font-mono font-medium tabular-nums",
							children: typeof e.value == "number" ? e.value.toLocaleString() : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
function UG(e, t) {
	return t <= 1 ? { background: `var(--color-${e}-0)` } : { background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})` };
}
var WG = ({ animationDuration: e = 200, ...t }) => /* @__PURE__ */ (0, $.jsx)(uA, {
	animationDuration: e,
	...t
});
// src/react/evilcharts/registry/ui/recharts-legend.tsx
function GG({ className: e, hideIcon: t = !1, nameKey: n, payload: r, verticalAlign: i, align: a = "right", selected: o, onSelectChange: s, isClickable: c, variant: l = "rounded-square" }) {
	let { config: u } = MG();
	return r?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
		className: DG("flex items-center gap-4 select-none", a === "left" && "justify-start", a === "center" && "justify-center", a === "right" && "justify-end", i === "top" ? "pb-4" : "pt-4", e),
		children: r.filter((e) => e.type !== "none").map((e) => {
			let r = `${(n && e.payload ? e.payload[n] : void 0) ?? e.value ?? e.dataKey ?? "value"}`, i = LG(u, e, r), a = o === null || o === r, d = i ? RG(i) : 1;
			return /* @__PURE__ */ (0, $.jsxs)("div", {
				className: DG("[&>svg]:text-muted-foreground flex items-center gap-1.5 transition-opacity [&>svg]:h-3 [&>svg]:w-3", !a && "opacity-30", c && "cursor-pointer"),
				onClick: () => {
					c && s?.(o === r ? null : r);
				},
				children: [i?.icon && !t ? /* @__PURE__ */ (0, $.jsx)(i.icon, {}) : /* @__PURE__ */ (0, $.jsx)(KG, {
					variant: l,
					dataKey: r,
					colorsCount: d
				}), i?.label]
			}, r);
		})
	}) : null;
}
function KG({ variant: e, dataKey: t, colorsCount: n }) {
	let r = qG(t, n), i = JG(t, n);
	switch (e) {
		case "square": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-2 w-2 shrink-0",
			style: r
		});
		case "circle": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-2 w-2 shrink-0 rounded-full",
			style: r
		});
		case "circle-outline": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-2.5 w-2.5 shrink-0 rounded-full p-[1.5px]",
			style: i
		});
		case "vertical-bar": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-3 w-1 shrink-0 rounded-[2px]",
			style: r
		});
		case "horizontal-bar": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-1 w-3 shrink-0 rounded-[2px]",
			style: r
		});
		case "rounded-square-outline": return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-2.5 w-2.5 shrink-0 rounded-[3px] p-[1.5px]",
			style: i
		});
		default: return /* @__PURE__ */ (0, $.jsx)("div", {
			className: "h-2 w-2 shrink-0 rounded-[2px]",
			style: r
		});
	}
}
function qG(e, t) {
	return t <= 1 ? { backgroundColor: `var(--color-${e}-0)` } : { background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})` };
}
function JG(e, t) {
	let n = {
		WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
		WebkitMaskComposite: "xor",
		mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
		maskComposite: "exclude"
	};
	return t <= 1 ? {
		backgroundColor: `var(--color-${e}-0)`,
		...n
	} : {
		background: `linear-gradient(to right, ${Array.from({ length: t }, (n, r) => `var(--color-${e}-${r}) ${r / (t - 1) * 100}%`).join(", ")})`,
		...n
	};
}
var YG = Qf, XG = () => null, ZG = {
	stiffness: 300,
	damping: 35,
	mass: .8
};
function QG({ range: e, totalPoints: t, containerRef: n, commit: r }) {
	let i = F.useRef(null), [a, o] = F.useState(!1), s = (0, F.useCallback)((e) => !n.current || t <= 1 ? 0 : Math.round(e / n.current.getBoundingClientRect().width * (t - 1)), [t, n]), c = (0, F.useCallback)((t, n) => {
		t.preventDefault(), t.target.setPointerCapture(t.pointerId), i.current = {
			type: n,
			originX: t.clientX,
			originRange: { ...e }
		}, o(!0);
	}, [e]), l = (0, F.useCallback)((e) => {
		let n = i.current;
		if (!n) return;
		let a = s(e.clientX - n.originX), { type: o, originRange: c } = n;
		if (o === "left") r({
			startIndex: c.startIndex + a,
			endIndex: c.endIndex
		}, "left");
		else if (o === "right") r({
			startIndex: c.startIndex,
			endIndex: c.endIndex + a
		}, "right");
		else {
			let e = c.endIndex - c.startIndex, n = c.startIndex + a, i = n + e;
			n < 0 && (n = 0, i = e), i > t - 1 && (i = t - 1, n = Math.max(0, i - e)), r({
				startIndex: n,
				endIndex: i
			}, "middle");
		}
	}, [
		s,
		t,
		r
	]), u = (0, F.useCallback)((e) => {
		e.target.releasePointerCapture(e.pointerId), i.current = null, o(!1);
	}, []);
	return {
		isDragging: a,
		bind: (0, F.useCallback)((e) => ({
			onPointerDown: (t) => c(t, e),
			onPointerMove: l,
			onPointerUp: u
		}), [
			c,
			l,
			u
		])
	};
}
function $G({ data: e, chartConfig: t, dataKeys: n, xDataKey: r, variant: i = "area", height: a = 56, className: o, stacked: s = !1, strokeVariant: c = "solid", connectNulls: l = !1, barRadius: u, startIndex: d, endIndex: f, defaultStartIndex: p = 0, defaultEndIndex: m, onChange: h, formatLabel: g, curveType: v = "monotone", minSpan: y = 2, showLabels: b = !0, skipStyle: x = !1 }) {
	let S = F.useRef(null), C = F.useMemo(() => n ?? Object.keys(t), [n, t]), w = e.length, T = F.useId().replace(/:/g, ""), E = d !== void 0 && f !== void 0, [D, O] = F.useState(() => ({
		startIndex: Math.max(0, Math.min(p, w - 1)),
		endIndex: Math.max(0, Math.min(m ?? w - 1, w - 1))
	})), k = F.useRef(D);
	(0, F.useEffect)(() => {
		E || O((e) => {
			let t = {
				startIndex: Math.min(e.startIndex, Math.max(0, w - 1)),
				endIndex: Math.min(e.endIndex, Math.max(0, w - 1))
			};
			return k.current = t, t;
		});
	}, [w, E]);
	let A = (0, F.useCallback)((e, t) => {
		let { startIndex: n, endIndex: r } = e, i = Math.max(0, w - 1);
		if (n = Math.max(0, Math.min(n, i)), r = Math.max(0, Math.min(r, i)), t === "left") {
			let e = Math.max(0, r - y);
			return n = Math.min(n, e), {
				startIndex: n,
				endIndex: r
			};
		}
		if (t === "right") {
			let e = Math.min(i, n + y);
			return r = Math.max(r, e), {
				startIndex: n,
				endIndex: r
			};
		}
		return r - n < y && (r = Math.min(n + y, i), r - n < y && (n = Math.max(0, r - y))), {
			startIndex: n,
			endIndex: r
		};
	}, [w, y]), { isDragging: j, bind: M } = QG({
		range: D,
		totalPoints: w,
		containerRef: S,
		commit: (0, F.useCallback)((e, t) => {
			let n = A(e, t), r = k.current;
			(r.startIndex !== n.startIndex || r.endIndex !== n.endIndex) && (k.current = n, O(n), F.startTransition(() => {
				h?.(n);
			}));
		}, [A, h])
	}), N = D;
	(0, F.useEffect)(() => {
		if (E && !j) {
			let e = {
				startIndex: d,
				endIndex: f
			};
			O(e), k.current = e;
		}
	}, [
		E,
		d,
		f,
		j
	]);
	let P = w > 1 ? N.startIndex / (w - 1) * 100 : 0, ee = w > 1 ? N.endIndex / (w - 1) * 100 : 100, re = ne(P), ie = ne(ee);
	re.get() !== P && re.set(P), ie.get() !== ee && ie.set(ee);
	let ae = oe(re, ZG), ce = oe(ie, ZG), le = se(ae, (e) => `${e}%`), ue = se(ce, (e) => `${e}%`), de = se(ae, (e) => `${e}%`), fe = se(ce, (e) => `${Math.max(0, 100 - e)}%`), pe = ne(`${Math.max(0, ee - P)}%`), me = (0, F.useCallback)(() => {
		pe.set(`${Math.max(0, ce.get() - ae.get())}%`);
	}, [
		ae,
		ce,
		pe
	]);
	te(ae, "change", me), te(ce, "change", me);
	let he = (0, F.useCallback)((t) => {
		if (!r) return String(t);
		let n = e[t]?.[r];
		return g ? g(n, t) : String(n ?? t);
	}, [
		e,
		r,
		g
	]);
	return w === 0 ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
		ref: S,
		"data-chart": x ? void 0 : T,
		className: DG("group relative select-none", o),
		style: { height: a },
		children: [
			!x && /* @__PURE__ */ (0, $.jsx)(IG, {
				id: T,
				config: t
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "absolute inset-0 overflow-hidden rounded-md",
				children: /* @__PURE__ */ (0, $.jsx)(tK, {
					data: e,
					keys: C,
					chartConfig: t,
					variant: i,
					curveType: v,
					chartId: T,
					stacked: s,
					strokeVariant: c === "animated-dashed" ? "dashed" : c,
					connectNulls: l,
					barRadius: u
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(_.div, {
				className: "bg-background/70 pointer-events-none absolute inset-y-0 left-0 rounded-l-md backdrop-blur-[2px]",
				style: { width: de }
			}),
			/* @__PURE__ */ (0, $.jsx)(_.div, {
				className: "bg-background/70 pointer-events-none absolute inset-y-0 right-0 rounded-r-md backdrop-blur-[2px]",
				style: { width: fe }
			}),
			/* @__PURE__ */ (0, $.jsx)(_.div, {
				className: "absolute inset-y-0 cursor-grab touch-none rounded-sm border active:cursor-grabbing",
				style: {
					left: le,
					width: pe
				},
				...M("middle")
			}),
			/* @__PURE__ */ (0, $.jsx)(eK, {
				side: "left",
				position: le,
				label: b ? he(N.startIndex) : void 0,
				bind: M("left")
			}),
			/* @__PURE__ */ (0, $.jsx)(eK, {
				side: "right",
				position: ue,
				label: b ? he(N.endIndex) : void 0,
				bind: M("right")
			})
		]
	});
}
function eK({ side: e, position: t, label: n, bind: r }) {
	let i = e === "left";
	return /* @__PURE__ */ (0, $.jsxs)(_.div, {
		className: "absolute inset-y-0 z-10",
		style: { left: t },
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: DG("group absolute inset-y-0 flex w-3 cursor-ew-resize touch-none items-center justify-center after:absolute after:inset-y-0 after:-left-4 after:w-11 after:content-['']", i ? "" : "-translate-x-full"),
			...r,
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				className: DG("bg-muted-foreground group-hover:bg-foreground relative flex h-4 w-1.5 items-center justify-center rounded-md transition-colors", i ? "-left-[5.5px]" : "-right-[5.5px]"),
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-[2px]",
					children: [
						/* @__PURE__ */ (0, $.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" }),
						/* @__PURE__ */ (0, $.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" }),
						/* @__PURE__ */ (0, $.jsx)("div", { className: "bg-background/70 h-[2px] w-[2px] rounded-full" })
					]
				})
			})
		}), n && /* @__PURE__ */ (0, $.jsx)("div", {
			className: DG("bg-foreground text-background pointer-events-none absolute -bottom-3 -translate-y-1/2 rounded-[3px] px-1 py-px text-[8px] leading-tight font-medium whitespace-nowrap opacity-0 group-hover:opacity-100", i ? "left-1.5" : "right-1.5"),
			children: n
		})]
	});
}
function tK({ data: e, keys: t, chartConfig: n, variant: r, curveType: i, chartId: a, stacked: o, strokeVariant: s = "solid", connectNulls: c = !1, barRadius: l }) {
	let u = F.useMemo(() => Object.entries(n).filter(([e]) => t.includes(e)).map(([e, t]) => ({
		dataKey: e,
		colorsCount: RG(t)
	})), [n, t]), d = s === "dashed" || s === "animated-dashed" ? "4 4" : void 0, f = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [r === "area" && /* @__PURE__ */ (0, $.jsxs)("linearGradient", {
		id: `${a}-zm-vertical-fade`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "0%",
			stopColor: "white",
			stopOpacity: .15
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "100%",
			stopColor: "white",
			stopOpacity: 0
		})]
	}), u.map(({ dataKey: e, colorsCount: t }) => {
		let n = t === 1 ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: t }, (n, r) => /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: `${r / (t - 1) * 100}%`,
			stopColor: `var(--color-${e}-${r}, var(--color-${e}-0))`
		}, r));
		return /* @__PURE__ */ (0, $.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("linearGradient", {
			id: `${a}-zm-${e}`,
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "1",
			children: n
		}), r === "area" && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("mask", {
			id: `${a}-zm-fill-mask-${e}`,
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${a}-zm-vertical-fade)`
			})
		}), /* @__PURE__ */ (0, $.jsx)("pattern", {
			id: `${a}-zm-fill-${e}`,
			patternUnits: "userSpaceOnUse",
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${a}-zm-${e})`,
				mask: `url(#${a}-zm-fill-mask-${e})`
			})
		})] })] }, e);
	})] });
	if (r === "line") return /* @__PURE__ */ (0, $.jsx)(jd, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsxs)(uG, {
			data: e,
			margin: {
				top: 4,
				right: 0,
				bottom: 0,
				left: 0
			},
			children: [/* @__PURE__ */ (0, $.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, $.jsx)(OB, {
				type: i,
				dataKey: e,
				stroke: `url(#${a}-zm-${e})`,
				strokeWidth: 1,
				strokeOpacity: .5,
				strokeDasharray: d,
				connectNulls: c,
				dot: !1,
				activeDot: !1,
				isAnimationActive: !1
			}, e))]
		})
	});
	if (r === "bar") {
		let n = l ?? 3;
		return /* @__PURE__ */ (0, $.jsx)(jd, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, $.jsxs)(fG, {
				data: e,
				margin: {
					top: 2,
					right: 0,
					bottom: 0,
					left: 0
				},
				barGap: 2,
				barSize: 14,
				children: [/* @__PURE__ */ (0, $.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, $.jsx)(RH, {
					dataKey: e,
					fill: `url(#${a}-zm-${e})`,
					fillOpacity: .35,
					stackId: o ? "zm-stack" : void 0,
					isAnimationActive: !1,
					radius: [
						n,
						n,
						n,
						n
					]
				}, e))]
			})
		});
	}
	return /* @__PURE__ */ (0, $.jsx)(jd, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsxs)(EG, {
			data: e,
			margin: {
				top: 4,
				right: 0,
				bottom: 0,
				left: 0
			},
			children: [/* @__PURE__ */ (0, $.jsx)("defs", { children: f }), t.map((e) => /* @__PURE__ */ (0, $.jsx)(CV, {
				type: i,
				dataKey: e,
				stroke: `url(#${a}-zm-${e})`,
				fill: `url(#${a}-zm-fill-${e})`,
				strokeWidth: 1,
				strokeOpacity: .5,
				strokeDasharray: d,
				connectNulls: c,
				fillOpacity: 1,
				stackId: o ? "zm-stack" : void 0,
				dot: !1,
				activeDot: !1,
				isAnimationActive: !1
			}, e))]
		})
	});
}
function nK({ data: e, defaultStartIndex: t = 0, defaultEndIndex: n }) {
	let [r, i] = F.useState({
		startIndex: t,
		endIndex: n ?? Math.max(0, e.length - 1)
	}), a = F.useDeferredValue(r);
	return (0, F.useEffect)(() => {
		i({
			startIndex: 0,
			endIndex: Math.max(0, e.length - 1)
		});
	}, [e.length]), {
		range: r,
		visibleData: F.useMemo(() => e.slice(a.startIndex, a.endIndex + 1), [
			e,
			a.startIndex,
			a.endIndex
		]),
		brushProps: {
			startIndex: r.startIndex,
			endIndex: r.endIndex,
			onChange: i
		}
	};
}
var rK = {
	dots: ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("circle", {
			className: "text-border dark:text-border",
			cx: "2",
			cy: "2",
			r: "1",
			fill: "currentColor"
		})
	}),
	grid: ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M 20 0 L 0 0 0 20",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	plus: ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "16",
		height: "16",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M 8 4 L 8 12 M 4 8 L 12 8",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5",
			strokeLinecap: "round"
		})
	}),
	bubbles: ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "100",
		height: "100",
		patternUnits: "userSpaceOnUse",
		patternTransform: "scale(0.6667)",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z",
			fill: "currentColor",
			fillOpacity: "0.4",
			fillRule: "evenodd"
		})
	}),
	"cross-hatch": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "20",
		height: "20",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border/60 dark:text-border/50",
			d: "M 0 0 L 20 20 M 20 0 L 0 20",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	"diagonal-lines": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "6",
		height: "6",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(45)",
		children: /* @__PURE__ */ (0, $.jsx)("line", {
			className: "text-border dark:text-border",
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "6",
			stroke: "currentColor",
			strokeWidth: "0.5"
		})
	}),
	"falling-triangles": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "18",
		height: "36",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z",
			transform: "scale(0.5)",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"4-pointed-star": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "16",
		height: "16",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("polygon", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			points: "5 3 8 4 5 5 4 8 3 5 0 4 3 3 4 0 5 3",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"tiny-checkers": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "8",
		height: "8",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			d: "M0 0h4v4H0V0zm4 4h4v4H4V4z",
			fill: "currentColor",
			fillOpacity: "0.2"
		})
	}),
	"overlapping-circles": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "40",
		height: "40",
		patternUnits: "userSpaceOnUse",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			fillRule: "evenodd",
			d: "M25 25c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5zM5 5c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5c0 2.762-2.238 5-5 5S0 12.762 0 10s2.238-5 5-5zm5 4c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm20 20c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	}),
	"wiggle-lines": ({ id: e }) => /* @__PURE__ */ (0, $.jsx)("pattern", {
		id: e,
		x: "0",
		y: "0",
		width: "52",
		height: "26",
		patternUnits: "userSpaceOnUse",
		patternTransform: "scale(0.6)",
		children: /* @__PURE__ */ (0, $.jsx)("path", {
			className: "text-border dark:text-border",
			d: "M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	})
};
function iK({ variant: e }) {
	let t = (0, F.useId)().replace(/:/g, ""), n = `${t}-bg-${e}`, r = `${t}-bg-edge-fade`, i = `${t}-bg-blur`, a = rK[e];
	return /* @__PURE__ */ (0, $.jsxs)(hk, {
		zIndex: -1,
		children: [/* @__PURE__ */ (0, $.jsxs)("defs", { children: [
			/* @__PURE__ */ (0, $.jsx)(a, { id: n }),
			/* @__PURE__ */ (0, $.jsx)("filter", {
				id: i,
				children: /* @__PURE__ */ (0, $.jsx)("feGaussianBlur", { stdDeviation: "25" })
			}),
			/* @__PURE__ */ (0, $.jsx)("mask", {
				id: r,
				maskUnits: "userSpaceOnUse",
				children: /* @__PURE__ */ (0, $.jsx)("rect", {
					x: "8%",
					y: "20%",
					width: "85%",
					height: "60%",
					fill: "white",
					filter: `url(#${i})`
				})
			})
		] }), /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${n})`,
			mask: `url(#${r})`
		})]
	});
}
// src/react/evilcharts/registry/charts/recharts-bar-chart.tsx
var aK = 2, oK = "loading", sK = 2e3, cK = "evil-stacked", lK = .5, uK = .05, dK = [
	0,
	.7,
	.5,
	1
], fK = (0, F.createContext)(null);
function pK() {
	let e = (0, F.use)(fK);
	if (!e) throw Error("Bar chart parts (<Bar />, <XAxis />, …) must be used within <EvilBarChart />");
	return e;
}
function mK({ config: e, data: t, children: n, className: r, chartProps: i, stackType: a = "default", layout: o = "vertical", barRadius: s = aK, animationType: c = "left-to-right", barGap: l, barCategoryGap: u, backgroundVariant: d, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, loadingBars: h, xDataKey: g }) {
	let _ = (0, F.useId)().replace(/:/g, ""), [v] = (0, F.useState)(() => Date.now()), [y, b] = (0, F.useState)(f), [x, S] = (0, F.useState)(!1), { loadingData: C, onShimmerExit: w } = PK(m, h), { visibleData: T, brushProps: E } = nK({ data: t }), D = (0, F.useMemo)(() => {
		let e = F.Children.toArray(n), t = e.find((e) => (0, F.isValidElement)(e) && e.type === XG), r = (0, F.isValidElement)(t) ? t.props : {};
		return {
			slot: {
				present: (0, F.isValidElement)(t),
				height: r.height,
				formatLabel: r.formatLabel,
				onChange: r.onChange
			},
			chartChildren: e.filter((e) => !((0, F.isValidElement)(e) && e.type === XG))
		};
	}, [n]), O = D.slot.present, k = a === "stacked" || a === "percent", A = o === "horizontal", j = O && !m ? T : t, M = (0, F.useCallback)((e) => {
		b(e), p?.(e);
	}, [p]), N = (0, F.useMemo)(() => ({
		config: e,
		isStacked: k,
		isHorizontal: A,
		isLoading: m,
		barRadius: s,
		animationType: c,
		introStartedAt: v,
		dataLength: j.length,
		selectedDataKey: y,
		selectDataKey: M,
		isMouseInChart: x
	}), [
		e,
		k,
		A,
		m,
		s,
		c,
		v,
		j.length,
		y,
		M,
		x
	]);
	return /* @__PURE__ */ (0, $.jsx)(fK, {
		value: N,
		children: /* @__PURE__ */ (0, $.jsxs)(NG, {
			className: r,
			config: e,
			footer: O && !m && /* @__PURE__ */ (0, $.jsx)($G, {
				data: t,
				chartConfig: e,
				xDataKey: g,
				variant: "bar",
				barRadius: s,
				height: D.slot.height,
				formatLabel: D.slot.formatLabel,
				stacked: k,
				skipStyle: !0,
				className: "mt-1",
				...E,
				onChange: (e) => {
					E.onChange(e), D.slot.onChange?.(e);
				}
			}),
			children: [/* @__PURE__ */ (0, $.jsx)(PG, { isLoading: m }), /* @__PURE__ */ (0, $.jsxs)(fG, {
				id: _,
				accessibilityLayer: !0,
				layout: A ? "vertical" : "horizontal",
				data: m ? C : j,
				barGap: l,
				barCategoryGap: u,
				stackOffset: a === "percent" ? "expand" : void 0,
				onMouseEnter: () => S(!0),
				onMouseLeave: () => S(!1),
				...i,
				children: [
					d && /* @__PURE__ */ (0, $.jsx)(iK, { variant: d }),
					/* @__PURE__ */ (0, $.jsx)(GL, { color: "white" }),
					D.chartChildren,
					m && /* @__PURE__ */ (0, $.jsx)(FK, {
						chartId: _,
						onShimmerExit: w
					})
				]
			})]
		})
	});
}
function hK({ dataKey: e, variant: t = "default", radius: n, animationType: r, isClickable: i = !1, enableHoverHighlight: a = !1, glowing: o = !1, bufferBar: s = !1, barProps: c }) {
	let { config: l, isStacked: u, isHorizontal: d, isLoading: f, barRadius: p, animationType: m, introStartedAt: h, dataLength: g, selectedDataKey: _, selectDataKey: v, isMouseInChart: y } = pK(), b = (0, F.useId)().replace(/:/g, ""), x = O();
	if (f) return null;
	let S = n ?? p, C = _ === e, w = x ? "none" : r ?? m, T = {
		id: b,
		dataKey: e,
		variant: t,
		barRadius: S,
		glowing: o,
		bufferBar: s,
		isClickable: i,
		enableHoverHighlight: a,
		isMouseInChart: y,
		isHorizontal: d,
		introStartedAt: h,
		selectedDataKey: _,
		dataLength: g,
		onClick: () => {
			i && v(C ? null : e);
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(RH, {
		dataKey: e,
		stackId: u ? cK : void 0,
		fill: `url(#${b}-colors-${e})`,
		radius: S,
		isAnimationActive: !1,
		style: i || a ? { cursor: "pointer" } : void 0,
		shape: (e) => /* @__PURE__ */ (0, $.jsx)(xK, {
			...e,
			...T,
			animationType: w
		}),
		activeBar: (e) => /* @__PURE__ */ (0, $.jsx)(xK, {
			...e,
			...T,
			animationType: "none"
		}),
		...c
	}), /* @__PURE__ */ (0, $.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, $.jsx)(TK, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "hatched" && /* @__PURE__ */ (0, $.jsx)(EK, {
			id: b,
			dataKey: e
		}),
		t === "duotone" && /* @__PURE__ */ (0, $.jsx)(OK, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "duotone-reverse" && /* @__PURE__ */ (0, $.jsx)(kK, {
			id: b,
			dataKey: e,
			config: l
		}),
		t === "gradient" && /* @__PURE__ */ (0, $.jsx)(AK, {
			id: b,
			dataKey: e
		}),
		t === "stripped" && /* @__PURE__ */ (0, $.jsx)(jK, {
			id: b,
			dataKey: e
		}),
		s && /* @__PURE__ */ (0, $.jsx)(DK, {
			id: b,
			dataKey: e
		}),
		o && /* @__PURE__ */ (0, $.jsx)(MK, {
			id: b,
			dataKey: e
		})
	] })] });
}
function gK({ tickLine: e = !1, axisLine: t = !1, tickMargin: n = 8, minTickGap: r = 8, type: i, ...a }) {
	let { isLoading: o, isHorizontal: s } = pK();
	return o ? null : /* @__PURE__ */ (0, $.jsx)(aU, {
		tickLine: e,
		axisLine: t,
		tickMargin: n,
		minTickGap: r,
		type: i ?? (s ? "number" : "category"),
		...a
	});
}
function _K({ tickLine: e = !1, axisLine: t = !1, tickMargin: n = 8, minTickGap: r = 8, width: i = "auto", type: a, ...o }) {
	let { isLoading: s, isHorizontal: c } = pK();
	return s ? null : /* @__PURE__ */ (0, $.jsx)(bU, {
		tickLine: e,
		axisLine: t,
		tickMargin: n,
		minTickGap: r,
		width: i,
		type: a ?? (c ? "category" : "number"),
		...o
	});
}
function vK({ strokeDasharray: e = "3 3", vertical: t, horizontal: n, ...r }) {
	let { isHorizontal: i } = pK();
	return /* @__PURE__ */ (0, $.jsx)(Sz, {
		strokeDasharray: e,
		vertical: t ?? i,
		horizontal: n ?? !i,
		...r
	});
}
function yK({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = pK();
	return r ? null : /* @__PURE__ */ (0, $.jsx)(WG, {
		cursor: !1,
		defaultIndex: n,
		content: /* @__PURE__ */ (0, $.jsx)(HG, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function bK({ variant: e, align: t = "right", verticalAlign: n = "top", isClickable: r = !1 }) {
	let { selectedDataKey: i, selectDataKey: a } = pK();
	return /* @__PURE__ */ (0, $.jsx)(YG, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, $.jsx)(GG, {
			selected: i,
			onSelectChange: a,
			isClickable: r,
			variant: e
		})
	});
}
var xK = (e) => {
	let { x: t = 0, y: n = 0, width: r = 0, height: i = 0, id: a, dataKey: o, variant: s, barRadius: c, glowing: l, bufferBar: u, isClickable: d, enableHoverHighlight: f, isMouseInChart: p, isHorizontal: m = !1, animationType: h = "none", introStartedAt: g = 0, selectedDataKey: v, isActive: y, dataLength: b = 0, onClick: x } = e, S = typeof e.index == "number" ? e.index : -1, C = u && b > 0 && S === b - 1, w = s === "stripped", T = SK(h, S, b, m, g), E = C ? `url(#${a}-buffer-hatched-${o})` : CK(s, a, o), D = l ? `url(#${a}-bar-glow-${o})` : void 0, O = wK({
		isClickable: d,
		selectedDataKey: v,
		dataKey: o,
		enableHoverHighlight: f,
		isMouseInChart: p,
		isActive: y
	}), k = d || f ? { cursor: "pointer" } : void 0, A = w ? [
		c,
		c,
		0,
		0
	] : c, j = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Mh, {
		x: t,
		y: n,
		width: r,
		opacity: O,
		height: Math.max(0, i - 3),
		radius: A,
		fill: E,
		filter: D,
		stroke: C ? `url(#${a}-colors-${o})` : void 0,
		strokeWidth: C ? 1 : void 0
	}), w && /* @__PURE__ */ (0, $.jsx)(Mh, {
		x: t,
		y: n - 4,
		width: r,
		height: 2,
		radius: 1,
		fill: `url(#${a}-colors-${o})`
	})] });
	return /* @__PURE__ */ (0, $.jsxs)("g", {
		style: k,
		onClick: x,
		children: [/* @__PURE__ */ (0, $.jsx)(Mh, {
			...e,
			fill: "transparent"
		}), T ? /* @__PURE__ */ (0, $.jsx)(_.g, {
			initial: T.initial,
			animate: T.animate,
			transition: T.transition,
			style: T.style,
			children: j
		}) : j]
	});
}, SK = (e, t, n, r, i) => {
	if (e === "none" || t < 0 || n <= 0) return null;
	let a = n - 1, o = a / 2, s;
	switch (e) {
		case "right-to-left":
			s = a - t;
			break;
		case "center-out":
			s = Math.abs(t - o);
			break;
		case "edges-in":
			s = o - Math.abs(t - o);
			break;
		default: s = t;
	}
	let c = s * uK * 1e3, l = lK * 1e3, u = c + l, d = Date.now() - i;
	if (d >= u) return null;
	let f = d <= c ? 0 : (d - c) / l, p = {
		duration: (u - Math.max(d, c)) / 1e3,
		ease: dK,
		delay: Math.max(0, c - d) / 1e3
	};
	return r ? {
		initial: { scaleX: f },
		animate: { scaleX: 1 },
		transition: p,
		style: { originX: 0 }
	} : {
		initial: { scaleY: f },
		animate: { scaleY: 1 },
		transition: p,
		style: { originY: 1 }
	};
}, CK = (e, t, n) => {
	switch (e) {
		case "hatched": return `url(#${t}-hatched-${n})`;
		case "duotone": return `url(#${t}-duotone-${n})`;
		case "duotone-reverse": return `url(#${t}-duotone-reverse-${n})`;
		case "gradient": return `url(#${t}-gradient-${n})`;
		case "stripped": return `url(#${t}-stripped-${n})`;
		default: return `url(#${t}-colors-${n})`;
	}
}, wK = ({ isClickable: e, selectedDataKey: t, dataKey: n, enableHoverHighlight: r, isMouseInChart: i, isActive: a }) => {
	let o = e && t !== null ? t === null || t === n ? 1 : .15 : 1;
	return r && i ? a ? o : o * .3 : o;
}, TK = ({ id: e, dataKey: t, config: n }) => {
	let r = RG(n[t] ?? {});
	return /* @__PURE__ */ (0, $.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "0",
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
	});
}, EK = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
	/* @__PURE__ */ (0, $.jsxs)("pattern", {
		id: `${e}-hatched-mask-pattern`,
		x: "0",
		y: "0",
		width: "5",
		height: "5",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(-45)",
		children: [/* @__PURE__ */ (0, $.jsx)("rect", {
			width: "5",
			height: "5",
			fill: "white",
			fillOpacity: .3
		}), /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "1.5",
			height: "5",
			fill: "white",
			fillOpacity: 1
		})]
	}),
	/* @__PURE__ */ (0, $.jsx)("mask", {
		id: `${e}-hatched-mask-${t}`,
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-hatched-mask-pattern)`
		})
	}),
	/* @__PURE__ */ (0, $.jsx)("pattern", {
		id: `${e}-hatched-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-hatched-mask-${t})`
		})
	})
] }), DK = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
	/* @__PURE__ */ (0, $.jsxs)("pattern", {
		id: `${e}-buffer-hatched-mask-pattern`,
		x: "0",
		y: "0",
		width: "5",
		height: "5",
		patternUnits: "userSpaceOnUse",
		patternTransform: "rotate(-45)",
		children: [/* @__PURE__ */ (0, $.jsx)("rect", {
			width: "5",
			height: "5",
			fill: "black",
			fillOpacity: 0
		}), /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "1",
			height: "5",
			fill: "white",
			fillOpacity: 1
		})]
	}),
	/* @__PURE__ */ (0, $.jsx)("mask", {
		id: `${e}-buffer-hatched-mask-${t}`,
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-buffer-hatched-mask-pattern)`
		})
	}),
	/* @__PURE__ */ (0, $.jsx)("pattern", {
		id: `${e}-buffer-hatched-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-buffer-hatched-mask-${t})`
		})
	})
] }), OK = ({ id: e, dataKey: t, config: n }) => {
	let r = RG(n[t] ?? {});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)("linearGradient", {
			id: `${e}-duotone-mask-gradient-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: [/* @__PURE__ */ (0, $.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: .4
			}), /* @__PURE__ */ (0, $.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: 1
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("linearGradient", {
			id: `${e}-duotone-colors-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "0",
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
		}),
		/* @__PURE__ */ (0, $.jsx)("mask", {
			id: `${e}-duotone-mask-${t}`,
			maskContentUnits: "objectBoundingBox",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-mask-gradient-${t})`
			})
		}),
		/* @__PURE__ */ (0, $.jsx)("pattern", {
			id: `${e}-duotone-${t}`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			width: "1",
			height: "1",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-colors-${t})`,
				mask: `url(#${e}-duotone-mask-${t})`
			})
		})
	] });
}, kK = ({ id: e, dataKey: t, config: n }) => {
	let r = RG(n[t] ?? {});
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)("linearGradient", {
			id: `${e}-duotone-reverse-mask-gradient-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: [/* @__PURE__ */ (0, $.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: 1
			}), /* @__PURE__ */ (0, $.jsx)("stop", {
				offset: "50%",
				stopColor: "white",
				stopOpacity: .4
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("linearGradient", {
			id: `${e}-duotone-reverse-colors-${t}`,
			gradientUnits: "objectBoundingBox",
			x1: "0",
			y1: "0",
			x2: "0",
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
		}),
		/* @__PURE__ */ (0, $.jsx)("mask", {
			id: `${e}-duotone-reverse-mask-${t}`,
			maskContentUnits: "objectBoundingBox",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-reverse-mask-gradient-${t})`
			})
		}),
		/* @__PURE__ */ (0, $.jsx)("pattern", {
			id: `${e}-duotone-reverse-${t}`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			width: "1",
			height: "1",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				x: "0",
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-duotone-reverse-colors-${t})`,
				mask: `url(#${e}-duotone-reverse-mask-${t})`
			})
		})
	] });
}, AK = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
	/* @__PURE__ */ (0, $.jsxs)("linearGradient", {
		id: `${e}-gradient-mask-gradient`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "20%",
			stopColor: "white",
			stopOpacity: 1
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "90%",
			stopColor: "white",
			stopOpacity: 0
		})]
	}),
	/* @__PURE__ */ (0, $.jsx)("mask", {
		id: `${e}-gradient-mask-${t}`,
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-gradient-mask-gradient)`
		})
	}),
	/* @__PURE__ */ (0, $.jsx)("pattern", {
		id: `${e}-gradient-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-gradient-mask-${t})`
		})
	})
] }), jK = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
	/* @__PURE__ */ (0, $.jsxs)("linearGradient", {
		id: `${e}-stripped-mask-gradient`,
		x1: "0",
		y1: "0",
		x2: "0",
		y2: "1",
		children: [/* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "0%",
			stopColor: "white",
			stopOpacity: .2
		}), /* @__PURE__ */ (0, $.jsx)("stop", {
			offset: "100%",
			stopColor: "white",
			stopOpacity: .2
		})]
	}),
	/* @__PURE__ */ (0, $.jsx)("mask", {
		id: `${e}-stripped-mask-${t}`,
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-stripped-mask-gradient)`
		})
	}),
	/* @__PURE__ */ (0, $.jsx)("pattern", {
		id: `${e}-stripped-${t}`,
		patternUnits: "userSpaceOnUse",
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, $.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: `url(#${e}-colors-${t})`,
			mask: `url(#${e}-stripped-mask-${t})`
		})
	})
] }), MK = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, $.jsxs)("filter", {
	id: `${e}-bar-glow-${t}`,
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
			values: "1 0 0 0 0\n                0 1 0 0 0\n                0 0 1 0 0\n                0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, $.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, $.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}), NK = (e = 17, t = .05, n = .9) => Array.from({ length: e }, (r, i) => {
	let a = i / (e - 1), o = t + Math.sin(a * Math.PI) ** 2 * (n - t);
	return {
		offset: `${(a * 100).toFixed(0)}%`,
		opacity: Number(o.toFixed(3))
	};
});
function PK(e, t = 12) {
	let [n, r] = (0, F.useState)(!1), i = (0, F.useCallback)(() => {
		e && r((e) => !e);
	}, [e]);
	return {
		loadingData: (0, F.useMemo)(() => zG(t, 20, 80), [t, n]),
		onShimmerExit: i
	};
}
var FK = ({ chartId: e, onShimmerExit: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(RH, {
	dataKey: oK,
	fill: "currentColor",
	fillOpacity: .15,
	radius: aK,
	isAnimationActive: !1,
	legendType: "none",
	style: { mask: `url(#${e}-loading-mask)` }
}), /* @__PURE__ */ (0, $.jsx)("defs", { children: /* @__PURE__ */ (0, $.jsx)(IK, {
	chartId: e,
	onShimmerExit: t
}) })] }), IK = ({ chartId: e, onShimmerExit: t }) => {
	let n = NK(), r = (0, F.useRef)(-1);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)("linearGradient", {
			id: `${e}-loading-mask-gradient`,
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: n.map(({ offset: e, opacity: t }) => /* @__PURE__ */ (0, $.jsx)("stop", {
				offset: e,
				stopColor: "white",
				stopOpacity: t
			}, e))
		}),
		/* @__PURE__ */ (0, $.jsx)("pattern", {
			id: `${e}-loading-mask-pattern`,
			patternUnits: "objectBoundingBox",
			patternContentUnits: "objectBoundingBox",
			patternTransform: "rotate(25)",
			width: 3,
			height: "1",
			x: "0",
			y: "0",
			children: /* @__PURE__ */ (0, $.jsx)(_.rect, {
				y: "0",
				width: "1",
				height: "1",
				fill: `url(#${e}-loading-mask-gradient)`,
				initial: { x: -1 },
				animate: { x: 2 },
				transition: {
					duration: sK / 1e3,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop"
				},
				onUpdate: (e) => {
					let n = typeof e.x == "number" ? e.x : -1, i = r.current;
					n >= 1 && i < 1 && t(), r.current = n;
				}
			})
		}),
		/* @__PURE__ */ (0, $.jsx)("mask", {
			id: `${e}-loading-mask`,
			maskUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ (0, $.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: `url(#${e}-loading-mask-pattern)`
			})
		})
	] });
};
mK.Bar = hK, mK.XAxis = gK, mK.YAxis = _K, mK.Grid = vK, mK.Tooltip = yK, mK.Legend = bK, mK.Brush = XG;
// src/react/charts/chart-card.tsx
var LK = `${c({ radius: "chart" })} flex flex-col gap-4 max-sm:p-4`;
function RK({ title: e, children: t }) {
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		className: LK,
		"aria-label": e,
		children: [/* @__PURE__ */ (0, $.jsx)("h3", {
			className: "text-title-2-medium text-text-primary",
			children: e
		}), /* @__PURE__ */ (0, $.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: t
		})]
	});
}
var zK = (e) => (e.codePointAt(0) ?? 0) > 11903 ? 13 : 7, BK = (e) => [...new Intl.Segmenter(void 0, { granularity: "grapheme" }).segment(e)].map((e) => e.segment), VK;
function HK(e) {
	if (VK === void 0) try {
		VK = document.createElement("canvas").getContext("2d"), VK && (VK.font = `12px ${getComputedStyle(document.body).fontFamily || "sans-serif"}`);
	} catch {
		VK = null;
	}
	return VK ? VK.measureText(e).width : null;
}
var UK = (e) => HK(e) ?? BK(e).reduce((e, t) => e + zK(t), 0);
function WK(e, t) {
	if (UK(e) <= t) return e;
	let n = BK(e), r = 0;
	for (; r < n.length && UK(`${n.slice(0, r + 1).join("")}…`) <= t;) r += 1;
	return `${n.slice(0, r).join("")}…`;
}
var GK = (e, t = 104) => Math.min(t, Math.max(24, ...e.map(UK)) + 12);
function KK(e) {
	let { along: t, payload: n, width: r = 0, visibleTicksCount: i = 1, ...a } = e, o = String(n?.value ?? ""), s = t === "x" ? r / Math.max(1, i) - 2 : r - 8;
	return /* @__PURE__ */ (0, $.jsxs)("g", { children: [/* @__PURE__ */ (0, $.jsx)("title", { children: o }), /* @__PURE__ */ (0, $.jsx)(dM, {
		...a,
		children: WK(o, s)
	})] });
}
function qK({ title: e, figure: t, note: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("header", {
		className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-col gap-1",
			children: [/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: e
			}), /* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			})]
		}), /* @__PURE__ */ (0, $.jsx)("small", {
			className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
			children: n
		})]
	});
}
var JK = [
	"var(--color-chart-1)",
	"var(--color-chart-2)",
	"var(--color-chart-3)",
	"var(--color-chart-4)",
	"var(--color-chart-5)",
	"var(--color-chart-6)"
], YK = (e) => ({ light: [e] }), XK = (e) => `s${e}`;
function ZK(e) {
	return Object.fromEntries(e.map((e, t) => [XK(t), {
		label: e,
		colors: YK(JK[t % JK.length])
	}]));
}
// src/react/charts/chart-tip.tsx
var QK = "flex min-w-32 flex-col gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl";
function $K({ swatch: e, name: t, value: n, format: r = (e) => e.toLocaleString() }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex w-full items-center gap-2",
		children: [e, /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-1 items-center justify-between gap-4 leading-none",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-muted-foreground",
				children: t
			}), /* @__PURE__ */ (0, $.jsx)("span", {
				className: "font-mono font-medium tabular-nums text-foreground",
				children: r(n)
			})]
		})]
	});
}
var eq = "size-2.5 shrink-0 rounded-xs";
function tq({ active: e, payload: t, label: n, nameKey: r, valueKey: i, hideLabel: a, format: o }) {
	let { config: s } = MG(), c = (t ?? []).filter((e) => e.type !== "none");
	if (!e || !c.length) return /* @__PURE__ */ (0, $.jsx)("span", { className: "p-4" });
	let l = a || typeof n != "string" ? null : s[n]?.label ?? n;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: QK,
		children: [l ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: "font-medium text-foreground",
			children: l
		}) : null, c.map((e, t) => {
			let n = e.payload ?? {}, a = `${(r ? n[r] : void 0) ?? e.name ?? e.dataKey ?? "value"}`, c = LG(s, e, a), l = i ? n[i] : e.value;
			return /* @__PURE__ */ (0, $.jsx)($K, {
				name: c?.label ?? e.name,
				value: Number(l ?? 0),
				format: o,
				swatch: /* @__PURE__ */ (0, $.jsx)("i", {
					className: eq,
					style: { background: `var(--color-${a}-0)` }
				})
			}, a + t);
		})]
	});
}
function nq({ nameKey: e, valueKey: t, hideLabel: n, format: r }) {
	return /* @__PURE__ */ (0, $.jsx)(WG, {
		cursor: !1,
		content: /* @__PURE__ */ (0, $.jsx)(tq, {
			nameKey: e,
			valueKey: t,
			hideLabel: n,
			format: r
		})
	});
}
export { wI as ActivePoints, $P as AnimatedItems, LK as CHART_CARD, JK as CHART_COLORS, TN as CartesianLabelListContextProvider, KK as CategoryTick, dA as Cell, iK as ChartBackground, NG as ChartContainer, RK as ChartEmpty, qK as ChartHead, YG as ChartLegend, GG as ChartLegendContent, nq as ChartTip, WG as ChartTooltip, HG as ChartTooltipContent, sm as Curve, Fu as DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, Pu as DATA_ITEM_INDEX_ATTRIBUTE_NAME, DM as DataLabelColorsContextProvider, IM as DataLabelThemeContextProvider, J as DefaultZIndexes, zN as Dot, gI as Dots, Vr as EntryFillDefinitions, mK as EvilBarChart, Fr as FillObjectDefinition, Yr as FillObjectPaint, PN as LabelList, IN as LabelListFromLabelProp, $e as Layer, PG as LoadingIndicator, wG as PolarChart, tN as PolarLabelContextProvider, mN as PolarLabelFromLabelProp, DN as PolarLabelListContextProvider, tF as RegisterGraphicalItemId, ug as Sector, fF as SetPolarGraphicalItem, AP as SetPolarLegendPayload, OP as SetTooltipEntrySettings, wP as Shape, QK as TIP_SURFACE, eq as TIP_SWATCH, dM as Text, $K as TipRow, hk as ZIndexLayer, _i as adaptEventsOfChild, nP as addAngleAxis, eP as addRadiusAxis, wM as applyLabelTheme, Mk as arrayTooltipSearcher, GK as categoryAxisWidth, DG as cn, fL as combineAllBarPositions, sE as combineAxisTicks, mL as combineBarPosition, aL as combineBarSizeList, zT as combineCategoricalDomain, IC as combineConfiguredScale, lE as combineGraphicalItemTicks, pL as combineStackedData, H as createSelector, d_ as defaultPolarAngleAxisProps, CG as defaultPolarChartProps, f_ as defaultPolarRadiusAxisProps, zh as degreeToRadian, kM as filledShapeLabelColors, fP as findAllByType, WK as fitLabel, ct as get, JF as getActiveStyleOverrides, m_ as getAxisTypeBasedOnLayout, wu as getBandSizeOfAxis, vu as getBaseValueOfBar, _u as getCateCoordinateOfBar, aP as getClassNameFromUnknown, Tr as getColorGraphicalItems, RG as getColorsCount, $F as getDotSymbol, zF as getEntryColor, zr as getEntryFillId, Ur as getEntryFillObject, RF as getEntryShapeColors, FF as getEntryStyleOverrides, Mr as getFillUrl, Wr as getIndexedEntryFillObject, nI as getLegendPayloadDot, Hh as getMaxRadius, mu as getNormalizedStackId, MF as getOwnStyles, yt as getPercentValue, Pr as getSeriesFillId, Eu as getTooltipNameProp, G as getValueByDataKey, hL as getZIndexFromUnknown, Hr as hasEntryFillObjects, kF as hasOwnColors, Yi as identity, L as interpolate, Zi as isArrayLike, cu as isCategoricalAxis, Re as isDataAttribute, R as isNullish, I as isNumber, Le as isSvgElementPropKey, $a as iteratee, WP as matchAnimationItems, RP as matchAppend, LP as matchByIndex, pt as mathSign, wt as noop, JI as omit, BF as omitEntrySvgProps, Y as pickAxisType, Vh as polarToCartesian, Rr as readEntryFill, pv as rechartsScaleFactory, rP as removeAngleAxis, tP as removeRadiusAxis, Ci as resolveDefaultProps, ft as roundTemplateLiteral, tO as selectActiveTooltipDataKey, nO as selectActiveTooltipGraphicalItemId, $D as selectActiveTooltipIndex, S_ as selectAngleAxis, k_ as selectAngleAxisRangeWithReversed, n_ as selectBarCategoryGap, t_ as selectBarGap, gg as selectChartDataAndAlwaysIgnoreIndexes, hg as selectChartDataWithIndexes, K as selectChartLayout, Ku as selectChartOffsetInternal, aE as selectDuplicateDomain, WN as selectPolarAppliedValues, ZN as selectPolarAxisCheckedDomain, XN as selectPolarNiceTicks, qN as selectPolarStackGroups, M_ as selectPolarViewBox, C_ as selectRadiusAxis, j_ as selectRadiusAxisRangeWithReversed, ST as selectRealScaleType, dw as selectRenderableAxisSettings, r_ as selectRootBarSize, e_ as selectRootMaxBarSize, BN as selectUnfilteredPolarItems, ZK as sliceConfig, XK as sliceKey, Nr as splitFill, Ve as svgPropertiesAndEvents, ze as svgPropertiesNoEvents, Be as svgPropertiesNoEventsFromUnknown, YK as tone, du as truncateByDomain, QP as useAnimationCallbacks, GP as useAnimationStartSnapshot, B as useAppDispatch, V as useAppSelector, Ti as useBackwardsCompatibleTheme, LM as useDataLabelThemeResolver, jI as useEffectiveDataKey, Kr as useFillPaint, kI as useGraphicalItemIdentity, AI as useGraphicalItemThemeFill, zM as useIndexedLabelThemeResolver, Xu as useIsPanorama, DP as useMouseClickItemDispatch, TP as useMouseEnterItemDispatch, EP as useMouseLeaveItemDispatch, Vd as usePolarChartLayout, mr as useRechartsTheme, AM as useSeriesDataLabelColors, RM as useSeriesLabelThemeResolver, Er as useThemeFillObject, Gr as useThemeFillObjects, qF as useThemedActiveStyles, PF as useUnthemedColors, Br as withEntryFillColor, Cr as withFillColor, jF as withoutColors };

//# debugId=28101c00-63ea-48c4-8259-ad7b7aca60b6