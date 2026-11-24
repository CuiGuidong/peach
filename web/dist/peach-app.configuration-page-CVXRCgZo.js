(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a05f7a59-f3a5-4cfe-a28e-c5ec05fb4746", e._sentryDebugIdIdentifier = "sentry-dbid-a05f7a59-f3a5-4cfe-a28e-c5ec05fb4746");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as t, $542a13ca2fa5b484$export$5b6b19405a83ff9d as n, $72abaeab4d80592f$export$78efe591171d7d45 as r, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as i, $ea3928288112382f$export$439d29a4e110a164 as a, $f2ff30fde7b014be$export$3ddf2d174ce01153 as o, $fe21c36db05242bb$export$a98f0dcb43a68a25 as s, $fe21c36db05242bb$export$d7b12c4107be0d61 as c, ACCENTS as l, ActivityStatus as u, ApiError as d, Button as f, ButtonLink as p, CLOUD_LOCATIONS as m, CLOUD_PROXY_HELP as h, CONFIGURATION_KEY as g, CONFIGURATION_SECTIONS as _, CONFIGURATION_URL as v, CREDENTIAL_STATE as y, Checkbox as b, Chip as x, CommandSteps as S, Disclosure as C, EDITION_TONE as w, ENTRY_LINKS_HELP as T, ENTRY_LINKS_HINT as E, EmptyState as ee, ErrorText as D, Eu as O, ExternalLink as k, FOLLOW_CREDENTIALS_KEY as te, FOLLOW_INITIAL_RANGE_OPTIONS as A, Fact as j, FactList as M, FieldLabel as ne, Footer as N, Help as P, HintText as re, Input as F, L1 as ie, LIBRARY_FOLDER_HELP as ae, LIBRARY_PROCESSING_KEY as oe, Label as se, LinkButton as ce, M6 as le, MEDIA_PROCESSING_KEY as ue, MEDIA_PROCESSING_URL as de, MEDIA_SOURCE_ICONS as fe, MENU_POPOVER_SURFACE as pe, NavigationOrderRows as me, Note as I, PICK_FOLDER_URL as he, POLICY_COLUMNS as ge, POLICY_COVER_NOTE as _e, POLICY_MATRIX as ve, POLICY_SUMMARY as ye, PathLine as be, ProcessingMode as xe, Progress as Se, RELEASE_NOTICE_EVENT as Ce, REPAIR_CENTER_PATH as we, Rows as L, SCHEDULES as Te, SCRAPING_KEY as Ee, SCRAPING_SETTINGS_URL as De, SEGMENT as Oe, SEGMENTED_TRACK as ke, SETTINGS_KEY as Ae, SETTINGS_URL as je, Section as R, SectionSkeleton as Me, SegmentedRadioGroup as Ne, Select as Pe, Select$1 as z, SelectItem as B, SettingsCard as Fe, SettingsRow as V, SiteLabel as Ie, SortableBoardTabs as Le, SourceLabel as Re, SourceMark as ze, Stack as H, StatusLabel as Be, Switch as Ve, THUMBNAIL_JOBS_KEY as He, TaskCenterLink as Ue, TaskProgress as We, TextField as Ge, TextFieldContext as Ke, Uz as qe, __toESM as Je, _p as Ye, activityKind as Xe, animate as Ze, apiGet as U, apiSend as W, appSettingsStore as Qe, bodyFieldErrors as $e, boundedPreference as et, busyProps as G, cardClass as tt, checkClientUpdates as nt, cloudProxySkeleton as rt, clsx as it, cn as at, codedText as K, confirmModal as ot, credentialDone as st, credentialsSkeleton as ct, cx as lt, d6 as ut, devicesSkeleton as dt, editionName as ft, errorMessage as q, fetchConfiguration as pt, fetchCredentials as mt, fetchLibraryProcessing as ht, fetchMediaProcessing as gt, fetchSettings as _t, fetchSources as vt, fetchThumbnailJobs as yt, fmtSize as bt, i2 as xt, indexersSkeleton as St, interfaceLanguage as Ct, javBrowserSkeleton as wt, jobText as Tt, joinList as Et, l1 as Dt, ledgerBackupsSkeleton as Ot, localizedFact as kt, momentText as At, motion as jt, overlayHost as Mt, peachHistory$1 as Nt, pickServerFolder as Pt, pollUntil as Ft, previewLibraryColor as It, processingActive as Lt, providerIcon as Rt, queryClient as zt, randomId as Bt, rememberShape as Vt, require_jsx_runtime as Ht, require_react as Ut, restartEffectText as Wt, saveCredential as Gt, schedulePollInterval as Kt, sectionTitle as qt, serverLabel as Jt, serverLabelList as Yt, serverText as Xt, settingsPath as Zt, shellNavigate as Qt, sortCx as $t, sourceDefaultCost as en, stageText as tn, t as J, translateWithNodes as nn, useAction as Y, useClientUpdates as rn, useLibraryTints as an, useMutation as on, useOrderedLibraries as sn, useQuery as X, useQueryClient as cn, useReducedMotion as ln, useRunSchedule as un, useSaveSchedule as dn, useSaveSettings as fn, useSaveThumbnailMode as pn, we as mn, z3 as hn } from "./peach-app.js";
import { SectionToc as gn } from "./peach-app.section-toc-hXoSYkI6.js";
import { useCheckReceipt as _n } from "./peach-app.use-check-receipt-CVw_ZYdx.js";
import { ConnectionStatus as vn } from "./peach-app.connection-status-BrXhLGSm.js";
import { CodeBlock as yn } from "./peach-app.code-block-CXu10nIP.js";
import { AnimatedItems as bn, Cell as xn, ChartBackground as Sn, ChartContainer as Cn, ChartLegend as wn, ChartLegendContent as Tn, ChartTip as En, ChartTooltip as Dn, ChartTooltipContent as On, Curve as kn, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as An, DATA_ITEM_INDEX_ATTRIBUTE_NAME as jn, DataLabelColorsContextProvider as Mn, DataLabelThemeContextProvider as Nn, DefaultZIndexes as Pn, EvilBarChart as Fn, FillObjectDefinition as In, LabelList as Ln, LabelListFromLabelProp as Rn, Layer as zn, LoadingIndicator as Bn, PolarChart as Vn, PolarLabelContextProvider as Hn, PolarLabelListContextProvider as Un, RegisterGraphicalItemId as Wn, Sector as Gn, SetPolarGraphicalItem as Kn, SetPolarLegendPayload as qn, SetTooltipEntrySettings as Jn, Shape as Yn, TIP_SWATCH as Xn, Text as Zn, ZIndexLayer as Qn, adaptEventsOfChild as $n, applyLabelTheme as er, arrayTooltipSearcher as tr, createSelector as nr, defaultPolarChartProps as rr, filledShapeLabelColors as ir, findAllByType as ar, get as or, getActiveStyleOverrides as sr, getClassNameFromUnknown as cr, getColorGraphicalItems as lr, getColorsCount as ur, getEntryFillId as dr, getFillUrl as fr, getIndexedEntryFillObject as pr, getMaxRadius as mr, getOwnStyles as hr, getPercentValue as gr, getTooltipNameProp as _r, getValueByDataKey as vr, hasOwnColors as yr, interpolate as br, isDataAttribute as xr, isNumber as Sr, isSvgElementPropKey as Cr, matchAppend as wr, mathSign as Tr, polarToCartesian as Er, readEntryFill as Dr, resolveDefaultProps as Or, selectActiveTooltipDataKey as kr, selectActiveTooltipGraphicalItemId as Ar, selectActiveTooltipIndex as jr, selectChartDataAndAlwaysIgnoreIndexes as Mr, selectChartOffsetInternal as Nr, selectUnfilteredPolarItems as Pr, splitFill as Fr, svgPropertiesNoEvents as Ir, svgPropertiesNoEventsFromUnknown as Lr, tone as Rr, useAnimationCallbacks as zr, useAppSelector as Br, useBackwardsCompatibleTheme as Vr, useDataLabelThemeResolver as Hr, useIndexedLabelThemeResolver as Ur, useMouseClickItemDispatch as Wr, useMouseEnterItemDispatch as Gr, useMouseLeaveItemDispatch as Kr, usePolarChartLayout as qr, useThemeFillObjects as Jr, withoutColors as Yr } from "./peach-app.chart-tip-CyWu_RZ8.js";
import { FolderField as Xr, FolderFieldLine as Zr, FolderRow as Qr, MEDIA_SOURCES as $r, MediaReadPolicy as ei, MediaReadPolicyHelp as ti, SourceSelect as ni, isCloudSource as ri, sourceMark as ii, useFolderRows as ai } from "./peach-app.folder-rows-C3hhF_90.js";
import { BrowserIcon as oi, browserIconId as si } from "./peach-app.browser-icon-N9Od-bAf.js";
import { SourceIcon as ci } from "./peach-app.source-view-CDbKpFus.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ Je(Ut(), 1), li = "flex flex-col gap-6";
function ui(e) {
	return e ? {
		className: e.active ? `${li} ui-board-group-active` : li,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	} : { className: li };
}
// src/react/settings/configuration-contents.tsx
var Q = Ht();
function di({ entries: e }) {
	let t = e.filter((e) => !!e);
	return t.length ? /* @__PURE__ */ (0, Q.jsx)(gn, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: t,
		children: t.map(({ id: e, content: t }) => /* @__PURE__ */ (0, Q.jsx)("div", {
			id: e,
			className: "flex min-w-0 flex-col gap-6",
			children: t
		}, e))
	}) : null;
}
// src/react/settings/userscript-probe.ts
function fi() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = Bt(), n = !1, r = e.current, a, o = () => {
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
function pi(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function mi({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = fi(), { checked: o } = _n(), s = (0, Z.useRef)(0), c = typeof i == "object", l = c && !pi(i.version, t.minimum_version), u = c && !pi(i.version, t.version), d = i === "checking" ? "progress" : i === "missing" ? "neutral" : l || u || !i.paired ? "warning" : "success", p = i === "checking" ? J("settings:userscriptStatus.checking") : i === "missing" ? J("settings:mediaLibraries.dependencyMissing") : l ? J("settings:userscriptStatus.updateRequired") : u ? J("settings:userscriptStatus.updateAvailable") : i.paired ? J("settings:userscriptStatus.connected") : J("settings:userscriptStatus.unpaired");
	(0, Z.useEffect)(() => {
		i !== "checking" && s.current !== r && (s.current = r, o(J("settings:userscriptStatus.checkResult", { result: p })));
	}, [
		r,
		o,
		p,
		i
	]);
	let m = i === "checking" ? "checking" : i === "missing" ? "missing" : l ? "required" : u ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("iframe", {
		ref: n,
		title: J("settings:userscriptStatus.probeFrame"),
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: tt({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: J("settings:userscriptStatus.title")
				}), /* @__PURE__ */ (0, Q.jsx)(vn, {
					tone: d,
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.${m}.status`,
						children: p
					})
				})]
			}),
			c ? /* @__PURE__ */ (0, Q.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: [J("settings:userscriptStatus.installedVersion"), i.version]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:userscriptStatus.addFromBrowser")
				}), /* @__PURE__ */ (0, Q.jsx)(Be, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: J(e ? "settings:shared.enabled" : "settings:shared.notEnabled")
					})
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				"data-copy-key": `userscript.${m}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? J("settings:userscriptStatus.checkingHelp") : i === "missing" ? J("settings:userscriptStatus.missingHelp") : l ? J("settings:userscriptStatus.updateRequiredHelp", { version: t.minimum_version }) : u ? J("settings:userscriptStatus.updateAvailableHelp", { version: t.version }) : i.paired ? J(e ? "settings:userscriptStatus.readyHelp" : "settings:userscriptStatus.addingDisabledHelp") : J("settings:userscriptStatus.pairHelp")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || l || u ? /* @__PURE__ */ (0, Q.jsx)(k, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: J(l || u ? "settings:userscriptStatus.update" : "settings:userscriptStatus.install")
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, Q.jsx)(k, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: J("settings:userscriptStatus.permissionGuide")
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(f, {
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
var hi = "/api/configuration/jav-browser";
function gi({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => U(hi, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, Q.jsx)(D, { children: q(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, Q.jsx)(Me, {
		label: J("settings:browserAdd.loading"),
		html: wt
	}) : n.data ? /* @__PURE__ */ (0, Q.jsx)(_i, {
		initial: n.data,
		receipt: e
	}) : null;
}
function _i({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		Vt("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
		c.run(e, (t) => W(hi, {
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
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "browser",
		title: J("settings:javBrowser.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(mi, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ne, { children: J("settings:browserAdd.channel") }), /* @__PURE__ */ (0, Q.jsx)(z, {
						"aria-label": J("settings:browserAdd.channel"),
						selectedKey: i || null,
						placeholder: J("settings:browserAdd.noChannels"),
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, Q.jsx)(Re, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				d ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:browserAdd.needsCloudDrive") }),
				n.problems?.map((e) => /* @__PURE__ */ (0, Q.jsx)(P, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:browserAdd.channelUnavailable") }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:browserAdd.wantOnNoMatch"),
					description: J("settings:browserAdd.wantOnNoMatchHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:browserAdd.wantOnNoMatch"),
						isSelected: n.want_on_no_match,
						isDisabled: !!c.busy || !n.enabled,
						onChange: u
					})
				}) }),
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:browserAdd.peachUrl"),
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					/* @__PURE__ */ (0, Q.jsx)(F, {
						label: J("settings:browserAdd.token"),
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(f, {
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
					/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:browserAdd.pairingHelp") })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: c.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(N, { children: [n.enabled ? /* @__PURE__ */ (0, Q.jsx)(f, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: J("settings:javBrowser.disable")
		}) : null, /* @__PURE__ */ (0, Q.jsx)(f, {
			type: "button",
			disabled: !n.available || !d || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...G(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? J("settings:javBrowser.updateChannelToken") : J("settings:javBrowser.enable")
		})] })]
	});
}
// src/react/settings/local-download-settings.tsx
var vi = "/api/configuration/downloads/qbittorrent/check", yi = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? Jt(r.code, t, r.params) : t;
}).filter((e) => e.includes("qBittorrent")), bi = (e) => e.problems.map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? Jt(r.code, t, r.params) : t;
});
function xi({ state: e, settle: t, receipt: n }) {
	let { checked: r, checkFailed: i } = _n(), a = J("settings:connectionCheck.action", { service: "qBittorrent" }), o = e.qbittorrent ?? {
		address: "",
		save_path: "",
		media_root: "",
		username: "",
		password_set: !1
	}, s = e.local_roots ?? [], [c, l] = (0, Z.useState)(o.address), [u, d] = (0, Z.useState)(o.save_path), [p, m] = (0, Z.useState)(o.media_root), [h, g] = (0, Z.useState)(o.username), [_, v] = (0, Z.useState)(""), [y, x] = (0, Z.useState)(!1), [S, C] = (0, Z.useState)(null), [w, T] = (0, Z.useState)(""), E = Y();
	(0, Z.useEffect)(() => {
		l(o.address), d(o.save_path), m(o.media_root), g(o.username);
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
		qbittorrent_username: h,
		qbittorrent_password: _,
		clear_qbittorrent_password: y
	}, O = () => {
		E.run("check", (e) => W(vi, ee, "POST", e), (e) => {
			C(e), !u.trim() && e.save_path && d(e.save_path), T(""), e.ok ? r(J("settings:connectionCheck.passed", { service: "qBittorrent" })) : i(a, bi(e)[0] || J("settings:connectionCheck.details"));
		}, (e) => {
			let t = q(e);
			T(t), i(a, t);
		});
	}, k = (e) => {
		e.preventDefault(), E.run("save", (e) => W("/api/configuration/downloads", ee, "POST", e), (e) => {
			let { report: r, qbittorrent_report: i, ...a } = e;
			t(a), v(""), x(!1), C(i || null), T(""), n(J("settings:localDownload.saved"));
		}, (e) => T(q(e)));
	}, te = yi(e);
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:localDownload.title"),
		onSubmit: k,
		children: [
			te.length ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("settings:localDownload.needsAttention"),
				children: te.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
				/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:localDownload.help") }),
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:localDownload.address"),
					placeholder: J("settings:localDownload.addressPlaceholder"),
					autoComplete: "off",
					maxLength: 200,
					value: c,
					isDisabled: !e.available,
					onChange: l
				}),
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:localDownload.username"),
					autoComplete: "username",
					maxLength: 200,
					value: h,
					isDisabled: !e.available,
					onChange: g
				}),
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:localDownload.password"),
					type: "password",
					autoComplete: "current-password",
					maxLength: 400,
					placeholder: o.password_set ? J("settings:shared.savedLeaveBlank") : J("settings:localDownload.passwordPlaceholder"),
					value: _,
					isDisabled: !e.available,
					onChange: v
				}),
				o.password_set ? /* @__PURE__ */ (0, Q.jsx)(b, {
					isSelected: y,
					isDisabled: !e.available,
					onChange: x,
					children: J("settings:localDownload.clearPassword")
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:localDownload.savePath"),
					placeholder: J("settings:localDownload.savePathPlaceholder"),
					autoComplete: "off",
					maxLength: 500,
					value: u,
					isDisabled: !e.available,
					hint: J("settings:localDownload.savePathHint"),
					onChange: d
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(ne, { children: J("settings:localDownload.mediaRoot") }),
						s.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
							"aria-label": J("settings:localDownload.mediaRoot"),
							selectedKey: p || null,
							isDisabled: !e.available,
							placeholder: J("settings:localDownload.mediaRootPlaceholder"),
							onSelectionChange: (e) => m(e === null ? "" : String(e)),
							children: s.map((e) => /* @__PURE__ */ (0, Q.jsxs)(B, {
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
						}) : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:localDownload.noLocalRoots", { section: J("navigation:configurationSections.library") }) }),
						/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:localDownload.mediaRootHelp") })
					]
				}),
				w ? /* @__PURE__ */ (0, Q.jsx)(D, { children: w }) : null
			] }),
			S ? /* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
					/* @__PURE__ */ (0, Q.jsx)(j, {
						term: J("settings:localDownload.version"),
						children: S.version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, Q.jsx)(j, {
						term: "WebAPI",
						children: S.webapi_version || J("settings:shared.notFound")
					}),
					/* @__PURE__ */ (0, Q.jsx)(j, {
						term: J("settings:localDownload.savePath"),
						children: S.save_path || J("settings:shared.notSet")
					}),
					/* @__PURE__ */ (0, Q.jsx)(j, {
						term: J("settings:localDownload.mediaRoot"),
						children: S.media_root || J("settings:shared.notSet")
					})
				] }), S.problems.length ? /* @__PURE__ */ (0, Q.jsx)(I, {
					tone: "error",
					title: J("settings:localDownload.checkFailed"),
					children: bi(S).join("\n")
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(N, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, Q.jsx)(f, {
					type: "button",
					variant: "secondary",
					disabled: !e.available || !!E.busy,
					...G(E.busy === "check"),
					onClick: O,
					children: J("settings:cloudDownload.testConnection")
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					type: "submit",
					disabled: !e.available || !!E.busy,
					...G(E.busy === "save"),
					children: J("settings:shared.saveSettings")
				})]
			})
		]
	});
}
// src/react/settings/download-settings.tsx
var Si = "/api/configuration/downloads", Ci = "/api/configuration/downloads/check", wi = "/api/configuration/downloads/folder", Ti = "/api/configuration/downloads/pikpak/login", Ei = "/api/configuration/downloads/pikpak/logout", Di = "/api/configuration/downloads/pikpak/browser-login", Oi = 2e3, ki = 9e5, Ai = Rt("pikpak"), ji = (e) => (e.problems ?? []).map((t, n) => {
	let r = e.problem_codes?.[n];
	return r?.code ? Jt(r.code, t, r.params) : t;
}), Mi = (e) => e.missing.map((t, n) => Jt(e.missing_codes?.[n] ?? "", t));
function Ni({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...ui(n),
		children: [r, e ? /* @__PURE__ */ (0, Q.jsx)(Pi, {
			initial: e,
			receipt: t,
			active: n?.active
		}) : null]
	});
}
function Pi({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		i((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let s = r.media_sources ?? [], c = s.includes("pikpak"), l = s.some((e) => m.includes(e)), u = c && (r.pikpak.logged_in || !!a.trim());
	return /* @__PURE__ */ (0, Q.jsx)(di, { entries: [
		l && {
			id: "downloads-cloud",
			label: J("settings:cloudDownload.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(Fi, {
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
			content: /* @__PURE__ */ (0, Q.jsx)(Bi, {
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
			content: /* @__PURE__ */ (0, Q.jsx)(xi, {
				state: r,
				settle: i,
				receipt: t
			})
		},
		{
			id: "downloads-browser",
			label: J("settings:javBrowser.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(gi, {
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
function Fi({ state: e, settle: t, receipt: n, pikpakAccount: r, active: i }) {
	let { checked: a, checkFailed: o } = _n(), s = J("settings:connectionCheck.action", { service: "CloudDrive2" }), [c, l] = (0, Z.useState)(e.config), [d, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(String(e.config.wait_hours)), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)(""), [b, x] = (0, Z.useState)(Ri), [S, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(!1), E = Y(), ee = (0, Z.useRef)(!1), O = e.media_sources ?? [], k = O.includes("115"), te = O.includes("pikpak"), A = (e) => c.targets[e] ?? "", j = (e, t) => l({
		...c,
		targets: {
			...c.targets,
			[e]: t
		}
	}), M = k && !(!b.target || b.target.exists || A("115") !== b.target.path), re = (e, t, n = "") => {
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
		E.run("auto", (e) => U(Ci, e), (e) => re(e, t), (e) => C(q(e)));
	}, [i]), /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "download",
		title: J("settings:cloudDownload.title"),
		onSubmit: (e) => {
			if (e.preventDefault(), M) {
				T(!0);
				return;
			}
			let i = !A("115").trim(), a = {
				...c,
				wait_hours: m,
				token: d,
				pikpak_account: r
			};
			E.run("save", (e) => W(Si, a, "POST", e), (e) => {
				let { report: r, ...a } = e;
				t(a), l(a.config), h(String(a.config.wait_hours)), p(""), r ? re(r, {
					address: !a.config.clouddrive_address,
					target: i,
					root: !a.config.pikpak_root
				}, a.config.targets[115] ?? "") : (_(null), y(""), x(Ri), T(!1), C("")), n(J("settings:shared.settingsSaved"));
			}, (e) => C(q(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("settings:cloudDownload.needsAttention"),
				children: ji(e).join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
				/* @__PURE__ */ (0, Q.jsx)(F, {
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
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:cloudDownload.apiToken"),
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? J("settings:shared.savedLeaveBlank") : J("settings:cloudDownload.tokenPlaceholder"),
					hint: J("settings:cloudDownload.apiTokenHelp"),
					value: d,
					isDisabled: !e.available,
					onChange: p
				}),
				k ? /* @__PURE__ */ (0, Q.jsx)(F, {
					label: /* @__PURE__ */ (0, Q.jsx)(Re, {
						source: "115",
						label: J("settings:cloudDownload.target115")
					}),
					placeholder: J("settings:cloudDownload.targetPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: M,
					hint: J(M ? w ? "settings:cloudDownload.createOrPick" : "settings:cloudDownload.directoryMissing" : "settings:cloudDownload.target115Help"),
					value: A("115"),
					isDisabled: !e.available,
					onChange: (e) => j("115", e)
				}) : null,
				te ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(F, {
					label: /* @__PURE__ */ (0, Q.jsx)(Re, {
						source: "pikpak",
						label: J("settings:cloudDownload.targetPikpak")
					}),
					placeholder: J("settings:cloudDownload.pikpakPathPlaceholder"),
					autoComplete: "off",
					maxLength: 300,
					hint: J("settings:cloudDownload.targetPikpakHelp"),
					value: A("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => j("pikpak", e)
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ne, { children: /* @__PURE__ */ (0, Q.jsx)(Re, {
						source: "pikpak",
						label: J("settings:cloudDownload.pikpakRootDirectory")
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(z, {
						"aria-label": J("settings:cloudDownload.pikpakRootDirectory"),
						selectedKey: c.pikpak_root || null,
						isDisabled: !e.available || !r,
						placeholder: J("settings:cloudDownload.rootPlaceholder"),
						onSelectionChange: (e) => l({
							...c,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
							id: e,
							children: e
						}, e))
					}), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudDownload.pikpakRootDirectoryHelp") })] }) : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudDownload.addPikpakMount") })]
				})] }) : null,
				/* @__PURE__ */ (0, Q.jsx)(F, {
					label: J("settings:cloudDownload.maxWait"),
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: J("settings:cloudDownload.waitHint", { max: e.max_wait_hours }),
					value: m,
					isDisabled: !e.available,
					onChange: h
				}),
				/* @__PURE__ */ (0, Q.jsx)(Li, {
					values: c.edition_preferences ?? [],
					disabled: !e.available,
					onChange: (e) => l((t) => ({
						...t,
						edition_preferences: e
					}))
				})
			] }),
			E.busy === "auto" ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(u, {
					kind: "radar",
					label: J("settings:cloudDownload.checking")
				})
			}) : null,
			g ? /* @__PURE__ */ (0, Q.jsx)(zi, {
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
					E.run("folder", (e) => W(wi, t, "POST", e), (t) => {
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
			S || E.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: S || E.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(N, {
				status: e.available ? void 0 : J("settings:cloudDownload.primaryOnly"),
				children: [/* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !c.clouddrive_address.trim(),
							target: !A("115").trim(),
							root: !c.pikpak_root
						}, t = {
							clouddrive_address: c.clouddrive_address,
							token: d,
							target: A("115"),
							pikpak_root: c.pikpak_root,
							pikpak_account: r
						};
						E.run("check", (e) => W(Ci, t, "POST", e), (t) => {
							re(t, e), t.ok ? a(J("settings:connectionCheck.passed", { service: "CloudDrive2" })) : o(s, ji(t)[0] || J("settings:connectionCheck.details"));
						}, (e) => {
							let t = q(e);
							C(t), o(s, t);
						});
					},
					disabled: !e.available,
					...G(E.busy === "check"),
					children: J("settings:cloudDownload.testConnection")
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					type: "submit",
					disabled: !e.available,
					...G(E.busy === "save"),
					children: J("settings:shared.saveSettings")
				})]
			})
		]
	});
}
var Ii = Object.keys(w);
function Li({ values: e, disabled: t, onChange: n }) {
	let r = J("settings:cloudDownload.editionPreferences"), i = [...e, ...Ii.filter((t) => !e.includes(t))], a = Object.fromEntries(Ii.map((e) => [e, ft(e)])), o = {
		label: r,
		keys: i,
		defaults: Ii,
		commit: n
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2",
		role: "group",
		"aria-label": r,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, Q.jsx)(ne, { children: r }), /* @__PURE__ */ (0, Q.jsx)(P, { children: J(e.length ? "settings:cloudDownload.editionPreferencesHelp" : "settings:cloudDownload.editionPreferencesDefault") })]
			}),
			/* @__PURE__ */ (0, Q.jsx)(me, {
				order: o,
				labels: a,
				fixed: t ? i : [],
				reset: !1,
				render: (e) => /* @__PURE__ */ (0, Q.jsx)("small", {
					className: `javedition ${w[e]}`,
					children: a[e]
				})
			}),
			e.length ? /* @__PURE__ */ (0, Q.jsx)(f, {
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
var Ri = {
	target: null,
	root: "",
	saved: !1
};
function zi({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, Q.jsxs)(H, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, Q.jsxs)(M, { children: [
			t ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:cloudDownload.cloudDriveUrl"),
				children: J("settings:cloudDownload.detectedAddress", { address: t })
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Re, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: n.saved ? J("settings:cloudDownload.filledSaved", { path: a.path }) : J("settings:cloudDownload.filledPending", { path: a.path })
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Re, {
					source: "115",
					label: J("settings:cloudDownload.target115")
				}),
				children: [J("settings:cloudDownload.pathMissing", { path: a.path }), r ? /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...G(i),
					children: J("settings:cloudDownload.createDirectory")
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Re, {
					source: "pikpak",
					label: J("settings:cloudDownload.pikpakRoot")
				}),
				children: J("settings:cloudDownload.filledPending", { path: n.root })
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:cloudDownload.offlinePermissions"),
				children: e.missing.length ? Mi(e).map((e) => /* @__PURE__ */ (0, Q.jsx)(x, {
					variant: "caption",
					color: "yellow",
					children: J("settings:cloudDownload.missingPermission", { permission: e })
				}, e)) : /* @__PURE__ */ (0, Q.jsx)(x, {
					variant: "caption",
					color: "lime",
					children: J("settings:cloudDownload.permissionsComplete")
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:cloudDownload.targetDirectory"),
				children: e.folder.can_offline ? J("settings:cloudDownload.offlineSupported", { path: e.folder.path }) : J("settings:cloudDownload.offlineUnsupported", { path: e.folder.path })
			}) : null,
			e.quota ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Re, {
					source: "115",
					label: J("settings:cloudDownload.quota115")
				}),
				children: J("settings:cloudDownload.quotaLeft", {
					count: e.quota.left,
					total: e.quota.total
				})
			}) : null
		] }) : null, ji(e).map((e) => /* @__PURE__ */ (0, Q.jsx)(D, { children: e }, e))]
	});
}
function Bi({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, d] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(""), _ = Y(), v = e.pikpak, y = e.pikpak_browser, x = y.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!x) return;
		let e = new AbortController();
		return Ft({
			signal: e.signal,
			everyMs: Oi,
			limitMs: ki,
			read: (e) => U(Di, e),
			apply: (e) => {
				t(e), e.pikpak_browser.state === "done" ? n(J("settings:pikpakAccount.signedInReceipt")) : e.pikpak_browser.state !== "waiting" && g(Tt(e.pikpak_browser));
			},
			done: (e) => e.pikpak_browser.state !== "waiting",
			failed: (e) => m(q(e))
		}), () => e.abort();
	}, [x]);
	let S = () => {
		g(""), _.run("browser", (e) => W(Di, {}, "POST", e), (e) => {
			t(e), m("");
		}, (e) => m(q(e)));
	}, C = () => {
		_.run("cancel", (e) => W(`${Di}/cancel`, {}, "POST", e), (e) => {
			t(e), m(""), g(Tt(e.pikpak_browser));
		}, (e) => m(q(e)));
	}, w = (e) => {
		if (e.preventDefault(), v.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		_.run("login", (e) => W(Ti, i, "POST", e), (e) => {
			t(e.settings), m(""), e.ok ? (d(""), o(""), n(J("settings:pikpakAccount.signedInReceipt"))) : d(e.captcha_url ?? "");
		}, (e) => m(q(e)));
	}, T = () => {
		_.run("logout", (e) => W(Ei, {}, "POST", e), (e) => {
			t(e), m(""), n(J("settings:pikpakAccount.signedOutReceipt"));
		}, (e) => m(q(e)));
	}, E = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(F, {
			label: J("settings:shared.account"),
			placeholder: J("settings:pikpakAccount.usernamePlaceholder"),
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, Q.jsx)(F, {
			label: J("settings:shared.password"),
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, Q.jsx)(b, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: J("settings:pikpakAccount.rememberPassword")
		}),
		l ? /* @__PURE__ */ (0, Q.jsx)(I, {
			tone: "warning",
			title: J("settings:pikpakAccount.captchaTitle"),
			extra: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: l,
					children: J("settings:pikpakAccount.openCaptcha")
				})
			}),
			children: J("settings:pikpakAccount.captchaHelp")
		}) : null
	] }), ee = /* @__PURE__ */ (0, Q.jsx)(f, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || x,
		...G(_.busy === "login"),
		children: J("settings:shared.signIn")
	}), O = y.state === "timeout" || y.state === "failed";
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "pikpak",
		title: J("settings:pikpakAccount.title"),
		icon: /* @__PURE__ */ (0, Q.jsx)(Ai, {}),
		onSubmit: w,
		aside: /* @__PURE__ */ (0, Q.jsx)(Be, {
			tone: v.logged_in ? "success" : x ? "progress" : O ? "error" : "neutral",
			children: v.logged_in ? J("settings:pikpakAccount.signedIn") : J(x ? "settings:pikpakAccount.waiting" : O ? "settings:pikpakAccount.incomplete" : "settings:pikpakAccount.notSignedIn")
		}),
		children: [
			v.logged_in ? /* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:shared.account"),
				children: v.username || J("settings:pikpakAccount.signedIn")
			}), v.method === "browser" ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:pikpakAccount.method"),
				children: J("settings:pikpakAccount.browserMethod")
			}) : /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:shared.password"),
				children: v.remember ? J("settings:pikpakAccount.passwordSaved") : J("settings:pikpakAccount.passwordNotSaved")
			})] }) : /* @__PURE__ */ (0, Q.jsxs)(H, { children: [h ? O ? /* @__PURE__ */ (0, Q.jsx)(D, { children: h }) : /* @__PURE__ */ (0, Q.jsx)(P, {
				role: "status",
				children: h
			}) : null, E] }),
			p || _.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: p || _.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, {
				status: !v.logged_in && x ? /* @__PURE__ */ (0, Q.jsx)(u, {
					kind: "clock",
					label: Tt(y) || J("settings:pikpakAccount.waitingBrowser")
				}) : null,
				children: v.logged_in ? /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: T,
					disabled: !e.available,
					...G(_.busy === "logout"),
					children: J("settings:shared.signOut")
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [y.available ? x ? /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					type: "button",
					onClick: C,
					...G(_.busy === "cancel"),
					children: J("settings:shared.cancel")
				}) : /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					type: "button",
					onClick: S,
					disabled: !e.available,
					...G(_.busy === "browser"),
					children: J("settings:pikpakAccount.browserSignIn")
				}) : null, ee] })
			})
		]
	});
}
// src/react/settings/general-settings.tsx
var Vi = "/api/configuration/startup";
function Hi({ active: e, initial: t, receipt: n }) {
	let r = X({
		queryKey: ["configuration", "startup"],
		queryFn: ({ signal: e }) => U(Vi, e),
		enabled: e,
		initialData: t
	});
	return r.data ? /* @__PURE__ */ (0, Q.jsx)(Ui, {
		startup: r.data,
		receipt: n
	}) : e ? /* @__PURE__ */ (0, Q.jsx)(R, {
		guide: "startup",
		title: J("settings:startup.title"),
		children: r.isError ? /* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(D, { children: q(r.error) }), /* @__PURE__ */ (0, Q.jsx)(f, {
			variant: "secondary",
			onClick: () => void r.refetch(),
			children: J("settings:shared.reload")
		})] }) : /* @__PURE__ */ (0, Q.jsx)("div", {
			role: "status",
			"aria-busy": "true",
			className: "px-4 py-3",
			children: /* @__PURE__ */ (0, Q.jsx)("span", { className: "block h-4 w-36 rounded-md bg-background-tertiary-default" })
		})
	}) : null;
}
function Ui({ startup: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message, u = K(e, "desktop_message"), d = K(e, "message");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "startup",
		title: J("settings:startup.title"),
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => W(Vi, {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t(J("settings:shared.settingsSaved")));
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(L, { children: [
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:startup.launchAtStartup"),
					description: J("settings:startup.launchAtStartupHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:startup.launchAtStartup"),
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:startup.trayOnly"),
					description: J("settings:startup.trayOnlyHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:startup.trayOnly"),
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:startup.desktopShortcut"),
					description: u || void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:startup.desktopShortcut"),
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			d || c.error ? /* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [d ? /* @__PURE__ */ (0, Q.jsx)(P, { children: d }) : null, c.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				disabled: !e.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/settings/ledger-backup-settings.tsx
var Wi = "/api/configuration/ledger-backups", Gi = 1500, Ki = 36e5, qi = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString(Ct);
function Ji(e) {
	return [e.source === "manual" ? J("settings:databaseBackups.manual") : J("settings:databaseBackups.automatic", { purpose: Jt(`ledgerBackup.purpose.${e.purpose_code}`, e.purpose) }), bt(e.bytes)].join(" · ");
}
function Yi({ job: e, task: t, label: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(We, {
			embedded: !0,
			kind: Xe(t, e.stage_code),
			label: [n, tn(e)].filter(Boolean).join(" · "),
			value: e.done || 0,
			total: e.total
		}), /* @__PURE__ */ (0, Q.jsx)(Ue, {})]
	});
}
function Xi({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(""), a = Y(), o = t?.backup.status === "running", s = t?.restore.status === "running", c = o || s, l = (0, Z.useRef)({
		backup: !1,
		restore: !1
	});
	if ((0, Z.useEffect)(() => {
		let e = new AbortController();
		return U(Wi, e.signal).then(n, (t) => {
			e.signal.aborted || i(String(t?.message || t));
		}), () => e.abort();
	}, []), (0, Z.useEffect)(() => {
		if (!c) return;
		let e = new AbortController();
		return Ft({
			signal: e.signal,
			everyMs: Gi,
			limitMs: Ki,
			read: (e) => U(Wi, e),
			apply: n,
			done: (e) => e.backup.status !== "running" && e.restore.status !== "running"
		}), () => e.abort();
	}, [c]), (0, Z.useEffect)(() => {
		if (t) for (let n of ["backup", "restore"]) {
			let r = t[n];
			r.status === "running" ? l.current[n] = !0 : l.current[n] && (l.current[n] = !1, r.status === "complete" && e(n === "backup" ? J("settings:databaseBackups.backedUp", { name: r.name }) : J("settings:databaseBackups.restored", { name: r.saved })));
		}
	}, [t]), !t && !r) return /* @__PURE__ */ (0, Q.jsx)(Me, {
		label: J("settings:databaseBackups.loading"),
		html: Ot
	});
	if (!t) return /* @__PURE__ */ (0, Q.jsx)(R, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: r }) })
	});
	let u = () => void a.run("backup", (e) => W(`${Wi}/backup`, {}, "POST", e), n), d = (e) => void ot({
		title: J("settings:databaseBackups.restoreTitle"),
		danger: !0,
		body: J("settings:databaseBackups.restoreBody", {
			time: qi(e),
			details: Ji(e)
		}),
		confirmLabel: J("settings:databaseBackups.replaceCurrent"),
		onConfirm: async () => {
			l.current.restore = !0, n(await W(`${Wi}/restore`, {
				id: e.id,
				confirm: !0
			}));
		}
	}), p = [t.backup, t.restore].find((e) => e.status === "failed"), m = t.last_restore, h = o ? J("settings:databaseBackups.backingUp") : s ? J("settings:databaseBackups.restoring") : t.backups.length ? J("settings:databaseBackups.count", { count: t.backups.length }) : J("settings:databaseBackups.empty");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: J("settings:databaseBackups.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
				/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:databaseBackups.help") }),
				t.writer ? null : /* @__PURE__ */ (0, Q.jsxs)(P, { children: [J("settings:databaseBackups.notPrimary"), K(t, "writer_reason")] }),
				o ? /* @__PURE__ */ (0, Q.jsx)(Yi, {
					job: t.backup,
					task: "ledger-backup",
					label: J("settings:databaseBackups.backupProgress")
				}) : null,
				s ? /* @__PURE__ */ (0, Q.jsx)(Yi, {
					job: t.restore,
					task: "ledger-restore",
					label: J("settings:databaseBackups.restoreProgress")
				}) : null,
				p ? /* @__PURE__ */ (0, Q.jsx)(D, { children: Tt(p, "error") || J("settings:databaseBackups.jobIncomplete") }) : null,
				m ? m.outcome === "kept" || m.outcome === "completed" ? /* @__PURE__ */ (0, Q.jsx)(P, { children: K(m, "message") }) : /* @__PURE__ */ (0, Q.jsx)(D, { children: K(m, "message") }) : null,
				a.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: a.error }) : null
			] }),
			t.backups.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "border-t border-separator-border",
				"data-ledger-backups": "",
				children: /* @__PURE__ */ (0, Q.jsx)(L, { children: t.backups.map((e) => /* @__PURE__ */ (0, Q.jsx)(V, {
					label: qi(e),
					description: Ji(e),
					children: /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						disabled: !t.writer || c,
						onClick: () => d(e),
						children: J("settings:databaseBackups.restore")
					})
				}, e.id)) })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, {
				status: /* @__PURE__ */ (0, Q.jsx)("p", { children: h }),
				children: /* @__PURE__ */ (0, Q.jsx)(f, {
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
var Zi = 3e3, Qi = 9e5;
async function $i(e, t, n) {
	let r = "";
	return await Ft({
		read: n.read || ((e) => U("/api/client-updates", e)),
		apply: (t) => {
			let n = t.runtime?.version;
			n && n !== e && (r = n);
		},
		done: () => !!r,
		signal: t,
		everyMs: Zi,
		limitMs: Math.max(1, n.limitMs),
		pause: n.pause
	}), t.aborted ? null : r ? {
		state: "done",
		version: r
	} : { state: "timeout" };
}
function ea(e) {
	let [t, n] = (0, Z.useState)({ state: "idle" }), r = Y(), i = (0, Z.useRef)(0);
	return (0, Z.useEffect)(() => {
		if (t.state !== "updating") return;
		let r = new AbortController();
		return $i(e, r.signal, { limitMs: Qi - (Date.now() - i.current) }).then((e) => {
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
function ta({ job: e }) {
	return e.state === "updating" ? /* @__PURE__ */ (0, Q.jsx)(We, {
		embedded: !0,
		kind: "clock",
		label: J("settings:dockerUpdate.updating")
	}) : e.state === "done" ? /* @__PURE__ */ (0, Q.jsx)(P, {
		role: "status",
		children: J("settings:dockerUpdate.done", { version: e.version })
	}) : e.state === "timeout" ? /* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(D, { children: J("settings:dockerUpdate.timeout") }), /* @__PURE__ */ (0, Q.jsx)(S, {
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
var na = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), ra = [
	65,
	75,
	90
], ia = 7, aa = "https://github.com/peach-mitao/peach/releases", oa = /((?:[\w.-]+\/[\w.-]+)?#\d+)/;
function sa(e) {
	let [t, n] = e.split("#");
	return `https://github.com/${t || "peach-mitao/peach"}/issues/${n}`;
}
function ca({ text: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: e.split("`").map((e, t) => t % 2 ? /* @__PURE__ */ (0, Q.jsx)("code", { children: e }, t) : e.split(oa).map((e, n) => n % 2 ? /* @__PURE__ */ (0, Q.jsx)("a", {
		href: sa(e),
		target: "_blank",
		rel: "noopener noreferrer",
		className: "text-accent-600 hover:underline",
		children: e
	}, `${t}-${n}`) : e)) });
}
function la({ notes: e }) {
	let t = Ct === "zh-CN" ? "zh-CN" : "en";
	return /* @__PURE__ */ (0, Q.jsx)(C, {
		summary: J("settings:releaseUpdates.changelogTitle", { versions: Et(e.map((e) => e.version)) }),
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-col gap-5 pt-3",
			children: e.map((e) => /* @__PURE__ */ (0, Q.jsxs)("section", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
						className: "text-body-2-medium text-text-primary",
						children: e.version
					}), /* @__PURE__ */ (0, Q.jsx)(k, {
						href: e.url,
						children: J("settings:releaseUpdates.releasePage")
					})]
				}), /* @__PURE__ */ (0, Q.jsx)("ul", {
					className: "flex list-disc flex-col gap-1 ps-5 text-body-2-regular text-text-primary",
					children: e[t].map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("li", { children: [e.title ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-medium",
						children: J("settings:releaseUpdates.highlightTitle", { title: e.title })
					}) : null, /* @__PURE__ */ (0, Q.jsx)(ca, { text: e.text })] }, t))
				})]
			}, e.version))
		})
	});
}
function ua({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), { snapshot: o, failures: s } = rn(), c = (0, Z.useRef)(o), l = Y(), { checked: u, checkFailed: d } = _n(), m = (0, Z.useRef)(!1), h = (0, Z.useRef)(!0), g = na.has(i.state), _ = ea(e.current_version), v = n.state === "available" && !!n.one_click?.available, y = _.job.state === "updating", b = n.installation_code === "standalone", x = () => void ot({
		title: J("settings:releaseUpdates.oneClickUpdate"),
		body: J("settings:releaseUpdates.dockerUpdateBody", { version: n.latest_version || "" }),
		confirmLabel: J("settings:releaseUpdates.startUpdate"),
		cancelLabel: J("settings:shared.cancel"),
		onConfirm: _.run
	});
	(0, Z.useEffect)(() => (h.current = !0, () => {
		h.current = !1;
	}), []);
	let C = async () => {
		let e = await W("/api/configuration/update-restart", {});
		h.current && a(e), nt();
	}, w = () => void ot({
		title: J("settings:releaseUpdates.updateReady"),
		body: J("settings:releaseUpdates.installAfterRestart", { version: i.version || "" }),
		confirmLabel: J("settings:releaseUpdates.restartNow"),
		cancelLabel: J("settings:shared.later"),
		onConfirm: C
	});
	(0, Z.useEffect)(() => {
		i.state !== "ready" || m.current || (m.current = !0, w());
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
		g || (m.current = !1, l.run("download", (e) => W("/api/configuration/update", {}, "POST", e), (e) => {
			a(e), nt();
		}));
	}, E = () => void l.run("check", (e) => U("/api/configuration/updates", e), (e) => {
		r(e);
		let t = Xt(e);
		e.state === "error" ? d(J("settings:releaseUpdates.check"), t) : u(t || J("settings:releaseUpdates.checkDone"));
	}, (t) => {
		let n = q(t);
		r({
			...e,
			state: "error"
		}), l.setError(n), d(J("settings:releaseUpdates.check"), n);
	}), ee = s >= ia ? J("settings:releaseUpdates.connectionLost") : "", O = l.error || ee || _.error, te = Xt(n), A = n.installation_code === "standalone" && (n.state === "available" || i.state !== "idle") ? n.package_kind : void 0, ne = A === "update" ? J("settings:releaseUpdates.updatePackageHelp") : A === "full" ? J("settings:releaseUpdates.includesMediaTools") : A === "installer" ? J("settings:releaseUpdates.installerHelp") : "", re = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "releaseUpdates",
		guide: "updates",
		title: J("settings:releaseUpdates.check"),
		aside: /* @__PURE__ */ (0, Q.jsx)(Be, {
			tone: O || n.state === "error" || i.state === "error" || _.job.state === "timeout" ? "error" : g || y ? "progress" : _.job.state === "done" ? "success" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: O || n.state === "error" || i.state === "error" ? J("settings:releaseUpdates.checkIncomplete") : _.job.state === "timeout" ? J("settings:releaseUpdates.updateIncomplete") : g ? J("settings:releaseUpdates.preparing") : y ? J("settings:releaseUpdates.updating") : _.job.state === "done" ? J("settings:releaseUpdates.updated") : i.state === "ready" ? J("settings:releaseUpdates.readyToInstall") : n.state === "available" ? J("settings:releaseUpdates.updateAvailable") : n.state === "unchecked" ? J("settings:releaseUpdates.notChecked") : J("settings:releaseUpdates.checkDone")
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:releaseUpdates.currentVersion"),
					children: _.job.state === "done" ? _.job.version : n.current_version
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:releaseUpdates.installation"),
					children: Jt(`release.installation.${n.installation_code}`, n.installation)
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:releaseUpdates.channel"),
					children: Jt(`release.channel.${n.channel_code}`, n.channel)
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:releaseUpdates.latestVersion"),
					children: n.latest_version || J("settings:shared.notFound")
				}),
				A ? /* @__PURE__ */ (0, Q.jsxs)(j, {
					term: J("settings:releaseUpdates.package"),
					children: [J(A === "update" ? "settings:releaseUpdates.appUpdatePackage" : A === "installer" ? "settings:releaseUpdates.macosDiskImage" : "settings:releaseUpdates.appAndTools"), n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			ne ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: ne }) }) : null,
			n.state === "unchecked" && !n.checked_at && !O && i.state === "idle" ? null : /* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:releaseUpdates.checkedAt", { time: (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString(Ct) }) }) : null,
					_.job.state === "done" ? null : n.state === "available" && !O ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(I, {
						tone: "info",
						title: J("settings:releaseUpdates.updateAvailable"),
						children: te
					}), n.notes?.length ? /* @__PURE__ */ (0, Q.jsx)(la, { notes: n.notes }) : null] }) : O || n.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(D, { children: O || te }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, Q.jsx)(P, {
						role: "status",
						children: te
					}),
					n.state === "available" && !O && !v && _.job.state === "idle" && n.steps?.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(S, {
						label: J("settings:releaseUpdates.updateOnHost"),
						steps: n.steps.map((e) => ({
							...e,
							text: Jt(`release.dockerStep.${e.id}`, e.text)
						}))
					}), /* @__PURE__ */ (0, Q.jsx)(P, { children: (n.one_click?.reason ? K(n.one_click, "reason") : "") || J("settings:releaseUpdates.watchtowerHint") })] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(ta, { job: _.job }),
					i.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(D, { children: Tt(i) }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Se, {
								label: J("settings:releaseUpdates.progressLabel"),
								value: i.progress,
								stops: ra
							}),
							/* @__PURE__ */ (0, Q.jsxs)(P, { children: [
								J("settings:releaseUpdates.progressSteps"),
								" ",
								Tt(i)
							] }),
							/* @__PURE__ */ (0, Q.jsx)(P, { children: re })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(N, {
				status: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: "https://peach.video/#download",
							children: J("settings:shared.officialSite")
						}),
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: n.release_url || aa,
							children: J("settings:releaseUpdates.releasePage")
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "ghost",
						onClick: () => document.dispatchEvent(new Event(Ce)),
						children: J("settings:releaseUpdates.whatsNew")
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: i.state === "ready" || v || n.state === "available" && b ? "secondary" : "primary",
						disabled: g || y,
						onClick: E,
						...G(l.busy === "check"),
						children: J("settings:releaseUpdates.check")
					}),
					_.job.state === "done" ? /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "primary",
						onClick: () => window.location.reload(),
						children: J("settings:releaseUpdates.refreshPage")
					}) : v ? /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "primary",
						onClick: x,
						...G(y || _.busy),
						children: J("settings:releaseUpdates.oneClickUpdate")
					}) : null,
					n.state === "available" && n.in_app_update && i.state !== "ready" ? /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "primary",
						onClick: T,
						...G(g || l.busy === "download"),
						children: J("settings:releaseUpdates.downloadAndInstall")
					}) : n.state === "available" && b && n.asset_url ? /* @__PURE__ */ (0, Q.jsx)(p, {
						variant: "primary",
						href: n.asset_url,
						children: J("settings:releaseUpdates.downloadNewVersion")
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, Q.jsx)(f, {
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
var da = "/api/configuration/retention", fa = ["retention-settings"], pa = [
	2,
	5,
	10,
	20
], ma = [
	30,
	90,
	183,
	365
], ha = (e) => e === 183 ? J("settings:retention.halfYear") : e === 365 ? J("settings:retention.oneYear") : J("settings:retention.days", { count: e });
function ga({ receipt: e }) {
	let t = X({
		queryKey: fa,
		queryFn: ({ signal: e }) => U(da, e)
	}), n = Y(), r = !t.data || !!n.busy, i = (t) => void n.run("save", (e) => W(da, t, "POST", e), (t) => {
		zt.setQueryData(fa, t), e(J("settings:shared.settingsSaved"));
	}), a = n.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:retention.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(L, { children: [/* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:retention.backups"),
			description: J("settings:retention.backupsHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "backupKeepSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:retention.backups"),
					selectedKey: String(t.data?.backup_keep ?? 5),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ backup_keep: Number(e) });
					},
					children: pa.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: String(e),
						children: J("settings:retention.copies", { count: e })
					}, e))
				})
			})
		}), /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:retention.logs"),
			description: J("settings:retention.logsHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "logDaysSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:retention.logs"),
					selectedKey: String(t.data?.log_days ?? 183),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ log_days: Number(e) });
					},
					children: ma.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: String(e),
						children: ha(e)
					}, e))
				})
			})
		})] }), a ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: a })
		}) : null]
	});
}
// src/react/settings/library-sharing-settings.tsx
function _a({ value: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ul", {
		className: "list-disc space-y-2 pl-5",
		children: Yt(e.fields, e.field_codes).map((e) => /* @__PURE__ */ (0, Q.jsx)("li", { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: e }) }, e))
	}), /* @__PURE__ */ (0, Q.jsx)(P, { children: K(e, "notice") })] });
}
function va({ value: e }) {
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
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		e.consent_state === "needs-consent" ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(Be, {
					tone: "warning",
					children: J("settings:librarySharing.needsConsent")
				})
			}), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.fieldsChanged") })]
		}) : null,
		t ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:librarySharing.participation"),
				children: /* @__PURE__ */ (0, Q.jsx)(Be, {
					"aria-label": J("settings:librarySharing.participation"),
					tone: t.pending_state ? "progress" : r[t.status] || "neutral",
					children: t.pending_state ? t.pending_state === "disabled" ? J("settings:librarySharing.pendingOff") : J("settings:librarySharing.pendingOn") : n[t.status] || J("settings:librarySharing.resultUnknown")
				})
			}) }), e.last_sent_at ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.lastSentAt", { date: new Date(e.last_sent_at).toLocaleDateString(Ct) }) }) : null]
		}) : null,
		e.enabled && e.last_attempt?.snapshot_id ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:librarySharing.snapshot"),
					children: /* @__PURE__ */ (0, Q.jsx)(Be, {
						tone: r[e.last_attempt.status || ""] || "neutral",
						children: n[e.last_attempt.status || ""] || J("settings:librarySharing.waitingData")
					})
				}), /* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:librarySharing.snapshotId"),
					children: e.last_attempt.snapshot_id
				})] }),
				e.last_attempt.raw_bytes !== void 0 && e.last_attempt.compressed_bytes !== void 0 ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.snapshotSizes", {
					raw: (e.last_attempt.raw_bytes / 1024).toFixed(1),
					compressed: (e.last_attempt.compressed_bytes / 1024).toFixed(1)
				}) }) : null,
				e.last_attempt.status === "accepted" ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.acceptedHelp") }) : null
			]
		}) : null,
		e.enabled && e.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(Be, {
					tone: e.last_attempt.attempted ? "error" : "warning",
					children: e.last_attempt.attempted ? J("settings:librarySharing.uploadFailed") : J("settings:librarySharing.retryPending")
				})
			}), /* @__PURE__ */ (0, Q.jsx)(D, { children: e.last_attempt.attempted ? J("settings:librarySharing.failedThisWeek") : J("settings:librarySharing.incomplete") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(Be, { children: J("settings:librarySharing.waitingData") })
			}), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.waitingDataHelp") })]
		}) : null,
		e.enabled && e.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(Be, {
					tone: "warning",
					children: J("settings:librarySharing.resultUnknown")
				})
			}), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.resultUnknownHelp") })]
		}) : null
	] });
}
function ya({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.snapshotSizes", {
			raw: (e.bytes / 1024).toFixed(1),
			compressed: (e.compressed_bytes / 1024).toFixed(1)
		}) }),
		/* @__PURE__ */ (0, Q.jsx)(yn, {
			code: t,
			language: "json",
			label: J("settings:librarySharing.previewLabel"),
			maxCharacters: 24e3
		}),
		t.length > 24e3 ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.truncated") }) : null
	] });
}
// src/react/settings/seed-sharing-details.tsx
function ba() {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)("ul", {
			className: "list-disc space-y-2 pl-5",
			children: [
				"works",
				"entities",
				"decisions",
				"images",
				"sources"
			].map((e) => /* @__PURE__ */ (0, Q.jsx)("li", { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J(`settings:seedSharing.${e}`) }) }, e))
		}),
		/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.excluded") }),
		/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.independent") }),
		/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.notice") })
	] });
}
function xa({ value: e }) {
	let t = e.last_attempt.status;
	return /* @__PURE__ */ (0, Q.jsxs)(H, {
		divided: !0,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(Be, {
				className: "self-start",
				tone: t === "failed" ? "error" : t === "accepted" ? "success" : "neutral",
				children: J(t ? `settings:seedSharing.status.${t}` : "settings:librarySharing.notSent")
			}),
			t === "accepted" ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.acceptedHelp") }) : null,
			e.name_candidates && Object.values(e.name_candidates).some(Boolean) ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.names", { ...e.name_candidates }) }) : null
		]
	});
}
function Sa({ preview: e }) {
	let t = JSON.stringify(e.data, null, 2);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(yn, {
		code: t,
		language: "json",
		label: J("settings:seedSharing.previewData"),
		maxCharacters: 24e3
	}), t.length > 24e3 ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.truncated") }) : null] });
}
// src/react/settings/sharing-choice.tsx
function Ca({ label: e, description: t, selected: n, available: r, disabled: i, busy: a = !1, onChange: o }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
		label: e,
		description: t,
		children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
			"aria-label": e,
			isSelected: n,
			isDisabled: i,
			onChange: o,
			...G(a)
		})
	}) }), r === !1 ? /* @__PURE__ */ (0, Q.jsx)(H, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)(Be, {
			className: "self-start",
			children: J("settings:librarySharing.unavailable")
		})
	}) : null] });
}
// src/react/settings/community-sharing-settings.tsx
var wa = "/api/configuration/community-sharing", Ta = ["community-sharing"];
async function Ea(e) {
	let t = await U(wa, e);
	if (!t?.library || !t.metadata) throw Error(J("settings:communitySharing.readFailed"));
	return t;
}
function Da(e) {
	let t = JSON.stringify({
		library: e.library.data,
		public_metadata: e.metadata.data
	}, null, 2), n = URL.createObjectURL(new Blob([t], { type: "application/json" })), r = document.createElement("a");
	r.href = n, r.download = "peach-community-sharing-preview.json", r.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3);
}
function Oa({ title: e, children: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("p", {
			className: "text-body-semibold text-text-primary",
			children: e
		}), t]
	});
}
function ka({ active: e, receipt: t }) {
	let n = cn(), r = X({
		queryKey: Ta,
		enabled: e,
		queryFn: ({ signal: e }) => Ea(e)
	}), [i, a] = (0, Z.useState)(null), o = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		i && o.current?.focus();
	}, [i]);
	let s = Y(), c = r.data, l = c?.library.enabled === !0, u = c?.metadata.enabled === !0, d = l && u, p = c ? c.library.available && c.metadata.available : void 0, m = l !== u, h = c?.library.participation, g = !!(c && (c.library.consent_state === "needs-consent" || c.library.last_sent_at || c.library.last_attempt?.status || h?.pending_state || h?.status && h.status !== "not-attempted" || c.metadata.last_attempt.status || Object.values(c.metadata.name_candidates ?? {}).some(Boolean))), _ = (e) => n.setQueryData(Ta, e), v = () => void s.run("refresh", Ea, _), y = () => void s.run("preview", async (e) => {
		let [t, n] = await Promise.all([U("/api/configuration/library-sharing/preview", e), U("/api/configuration/seed-sharing/preview", e)]);
		return {
			library: t,
			metadata: n
		};
	}, a), b = (e) => void s.run("save", (t) => W(wa, {
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
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(Ca, {
			label: J("settings:communitySharing.enable"),
			description: J("settings:communitySharing.description"),
			selected: l || u,
			available: p,
			disabled: !c,
			busy: !!s.busy,
			onChange: (e) => e ? y() : b(!1)
		}),
		m ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(Be, {
				className: "self-start",
				tone: "warning",
				children: J(l ? "settings:communitySharing.onlyStudy" : "settings:communitySharing.onlyMetadata")
			})
		}) : null,
		c && i ? /* @__PURE__ */ (0, Q.jsx)("section", {
			"aria-labelledby": "community-sharing-preview",
			children: /* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("h4", {
						id: "community-sharing-preview",
						ref: o,
						tabIndex: -1,
						className: "text-body-semibold text-text-primary",
						children: J("settings:communitySharing.previewTitle")
					}),
					/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.previewSummary", {
						count: i.library.data.library.length,
						uncoded: i.library.data.coverage.uncoded_items,
						size: (i.library.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:seedSharing.summary", {
						count: i.metadata.data.claims.length,
						omitted: i.metadata.data.omitted,
						size: (i.metadata.bytes / 1024).toFixed(1)
					}) }),
					/* @__PURE__ */ (0, Q.jsx)(C, {
						summary: J("settings:communitySharing.previewDetails"),
						children: /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex min-w-0 flex-col gap-6",
							children: [/* @__PURE__ */ (0, Q.jsxs)(Oa, {
								title: J("settings:communitySharing.study"),
								children: [/* @__PURE__ */ (0, Q.jsx)(_a, { value: c.library }), /* @__PURE__ */ (0, Q.jsx)(ya, { preview: i.library })]
							}), /* @__PURE__ */ (0, Q.jsxs)(Oa, {
								title: J("settings:seedSharing.title"),
								children: [/* @__PURE__ */ (0, Q.jsx)(ba, {}), /* @__PURE__ */ (0, Q.jsx)(Sa, { preview: i.metadata })]
							})]
						})
					})
				]
			})
		}) : null,
		c?.failed?.length || r.isError || s.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: s.error || (c?.failed?.length ? J("settings:communitySharing.saveFailed") : J("settings:communitySharing.readFailed")) })
		}) : null,
		c && !i && g ? /* @__PURE__ */ (0, Q.jsx)("div", {
			id: "seedSharing",
			children: /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)(C, {
					summary: J("settings:communitySharing.deliveryStatus"),
					children: [/* @__PURE__ */ (0, Q.jsx)(Oa, {
						title: J("settings:communitySharing.study"),
						children: /* @__PURE__ */ (0, Q.jsx)(va, { value: c.library })
					}), /* @__PURE__ */ (0, Q.jsx)(Oa, {
						title: J("settings:seedSharing.title"),
						children: /* @__PURE__ */ (0, Q.jsx)(xa, { value: c.metadata })
					})]
				})
			})
		}) : null,
		/* @__PURE__ */ (0, Q.jsx)(N, {
			status: c && !i && !g ? /* @__PURE__ */ (0, Q.jsx)("span", {
				id: "seedSharing",
				children: /* @__PURE__ */ (0, Q.jsx)(Be, {
					"aria-label": J("settings:communitySharing.deliveryStatus"),
					children: J("settings:librarySharing.notSent")
				})
			}) : void 0,
			children: i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: () => a(null),
					children: J("settings:shared.cancel")
				}),
				/* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: () => Da(i),
					children: J("settings:librarySharing.downloadPreview")
				}),
				d ? null : /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "primary",
					disabled: !p,
					onClick: () => b(!0),
					...G(s.busy === "save"),
					children: J("settings:communitySharing.agree")
				})
			] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [g || l || u || r.isError ? /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				onClick: v,
				...G(s.busy === "refresh"),
				children: J("settings:communitySharing.refresh")
			}) : null, /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				disabled: !c,
				onClick: y,
				...G(s.busy === "preview"),
				children: J(m ? "settings:communitySharing.complete" : "settings:communitySharing.preview")
			})] })
		})
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function Aa({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, Q.jsx)(Ca, {
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
function ja({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y(), a = Object.values(n.delivery ?? {}).flatMap((e) => e.last_sent_at ? [Date.parse(e.last_sent_at)] : []).filter(Number.isFinite), o = a.length ? Math.max(...a) : null;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(Aa, {
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
		/* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsxs)(C, {
				summary: J("settings:diagnosticsReporting.fieldsAndRules"),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(P, { children: Jt(n.field_codes?.usage ?? "", n.fields.usage) }),
					/* @__PURE__ */ (0, Q.jsx)(P, { children: Jt(n.field_codes?.errors ?? "", n.fields.errors) }),
					/* @__PURE__ */ (0, Q.jsx)(P, { children: K(n, "notice") })
				]
			}), o === null ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:librarySharing.lastSentAt", { date: new Date(o).toLocaleDateString(Ct) }) })]
		}),
		i.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: i.error })
		}) : null
	] });
}
// src/react/components/animated-number.tsx
var Ma = .6;
function Na({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
	let r = ln(), [i, a] = (0, Z.useState)(e), o = (0, Z.useRef)(e);
	return (0, Z.useEffect)(() => {
		if (r || o.current === e) {
			o.current = e, a(e);
			return;
		}
		let t = Ze(o.current, e, {
			duration: Ma,
			ease: "easeOut",
			onUpdate: (e) => {
				o.current = e, a(e);
			}
		});
		return () => t.stop();
	}, [e, r]), /* @__PURE__ */ (0, Q.jsx)("span", {
		className: n ? `tabular-nums ${n}` : "tabular-nums",
		children: t(i)
	});
}
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function Pa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Fa(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Pa(Object(n), !0).forEach(function(t) {
			Ia(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ia(e, t, n) {
	return (t = La(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function La(e) {
	var t = Ra(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ra(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var za = nr([Pr, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), Ba = [], Va = (e, t, n) => n?.length === 0 ? Ba : n, Ha = nr([
	Mr,
	za,
	Va
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => Fa(Fa({}, t.presentationProps), e.props))), i != null) return i;
	}
}), Ua = nr([
	Ha,
	za,
	Va
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = vr(e, t.nameKey, t.name), o = Dr(n == null || (i = n[r]) == null ? void 0 : i.props).color ?? Dr(e).color ?? t.fill;
		return {
			value: _r(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), Wa = nr([
	Ha,
	za,
	Va,
	Nr
], (e, t, n, r) => {
	if (t != null && e != null) return Co({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), Ga = ["key"], Ka = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], qa = [
	"id",
	"graphicalItems",
	"explicitStyleProps",
	"pieFillObject"
], Ja = ["id"];
function Ya() {
	return Ya = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ya.apply(null, arguments);
}
function Xa(e, t) {
	if (e == null) return {};
	var n, r, i = Za(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Za(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Qa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qa(Object(n), !0).forEach(function(t) {
			$a(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $a(e, t, n) {
	return (t = eo(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function eo(e) {
	var t = to(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function to(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var no = /* @__PURE__ */ new Set([
	"cx",
	"cy",
	"r",
	"name"
]);
function ro(e) {
	var t = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (n === "id" || xr(n) || (!Cr(n) || no.has(n)) && (t[n] = e[n]));
	return t;
}
var io = Gn;
function ao(e, t, n, r) {
	var i = n[t % n.length];
	if (i != null) {
		var a = typeof e == "object" && e ? $($({}, e), {}, { fill: Dr(e).color }) : {}, o = $($({}, hr(r)), hr(a)), s = yr(a) || yr(r);
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
function oo(e) {
	return e.fill && e.fill !== "none" ? e.fill : e.stroke;
}
function so(e, t, n, r) {
	var i = ao(e.payload, t, n, r);
	return i == null ? e : $($($({}, e), i), {}, { tooltipPayload: e.tooltipPayload?.map((e) => $($({}, e), {}, {
		color: oo(i),
		fill: i.fill
	})) });
}
function co(e) {
	var t = (0, Z.useMemo)(() => ar(e.children, xn), [e.children]), n = Jr(), r = Br((n) => Ua(n, e.id, t));
	if (r == null) return null;
	var i = r.map((r, i) => {
		var a, o = $($({}, r.payload), t == null || (a = t[i]) == null ? void 0 : a.props), s = pr(o, i, e.pieFillObject, n, yr(e.explicitStyleProps)), c = ao(o, i, e.graphicalItems, e.explicitStyleProps);
		return c == null ? s == null ? r : $($({}, r), {}, { fill: s }) : $($({}, r), {}, {
			color: oo(c),
			fill: s
		});
	});
	return /*#__PURE__*/ Z.createElement(qn, { legendPayload: i });
}
function lo(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var uo = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = lo(f), m = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return p == null || t == null ? t : t.map((e) => $($({}, e), {}, {
				color: p,
				fill: p
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: _r(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(Jn, { tooltipEntrySettings: m });
}), fo = (e, t) => e > t ? "start" : e < t ? "end" : "middle", po = (e, t, n) => gr(typeof t == "function" ? t(e) : t, n, n * .8), mo = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = e.maxRadius ?? mr(a, o);
	return {
		cx: i + gr(e.cx, a, a / 2),
		cy: r + gr(e.cy, o, o / 2),
		innerRadius: gr(e.innerRadius, s, 0),
		outerRadius: po(n, e.outerRadius, s),
		maxRadius: e.maxRadius ?? Math.sqrt(a * a + o * o) / 2
	};
}, ho = (e, t) => Tr(t - e) * Math.min(Math.abs(t - e), 360), go = (e, t) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = it("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = Xa(t, Ga);
	return /*#__PURE__*/ Z.createElement(kn, Ya({}, r, {
		type: "linear",
		className: n
	}));
}, _o = (e, t, n, r) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var i = n;
	if (typeof e == "function" && (i = e(t), /*#__PURE__*/ Z.isValidElement(i))) return i;
	var a = it("recharts-pie-label-text", cr(e));
	return /*#__PURE__*/ Z.createElement(Zn, Ya({}, t, {
		alignmentBaseline: "middle",
		className: a,
		background: r
	}), i);
};
function vo(e) {
	if (!(typeof e != "object" || !e || /*#__PURE__*/ Z.isValidElement(e) || "position" in e)) return e;
}
function yo(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = Hr(), a = n.label, o = n.labelLine, s = n.dataKey;
	if (!r || !a || !t) return null;
	var c = Ir(n), l = Lr(a), u = vo(a), d = Lr(o), f = typeof a == "object" && "offsetRadius" in a && typeof a.offsetRadius == "number" && a.offsetRadius || 20, p = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = Er(e.cx, e.cy, e.outerRadius + f, n), p = ro(e), m = $($($($({}, c), p), {}, {
			fill: e.fill,
			stroke: "none"
		}, l), {}, {
			index: t,
			textAnchor: fo(r.x, e.cx)
		}, r), h = er(i?.(t), {
			fill: u?.fill,
			style: u?.style ?? m.style,
			background: u?.background
		}, m.fill), g = $($({}, m), h), _ = $($($($({}, c), p), {}, {
			fill: "none",
			stroke: e.fill
		}, d), {}, {
			index: t,
			points: [Er(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(Qn, {
			zIndex: Pn.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ Z.createElement(zn, null, o && go(o, _), _o(a, g, vr(e.payload, s, e.value), h.background)));
	});
	return /*#__PURE__*/ Z.createElement(zn, { className: "recharts-pie-labels" }, p);
}
function bo(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(Rn, { label: i }) : /*#__PURE__*/ Z.createElement(yo, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function xo(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, u = e.indexedActiveStyles, d = Br(jr), f = Br(kr), p = Br(Ar), m = i.onMouseEnter, h = i.onClick, g = i.onMouseLeave, _ = Xa(i, Ka), v = Gr(m, i.dataKey, o), y = Kr(g), b = Wr(h, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, m) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var h = p == null || p === o, g = String(m) === d && (f == null || i.dataKey === f) && h, x = d ? r : null, S, C = !1;
		g && n ? S = n === !0 ? a : n : x == null ? S = a : (S = x, C = !0);
		var w = $($({}, e), {}, {
			fill: i.sectorPaintFills?.[m] ?? e.fill,
			stroke: e.stroke,
			tabIndex: -1,
			index: m,
			isActive: g,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[jn]: m,
			[An]: o
		}), T = g && !C ? sr(S === io || S, u[m % u.length], e.payload) : void 0, E = T == null ? w : $($({}, w), T);
		return /*#__PURE__*/ Z.createElement(zn, Ya({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${m}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, $n(_, e, m), {
			onMouseEnter: v(e, m),
			onMouseLeave: y(e, m),
			onClick: b(e, m)
		}), /*#__PURE__*/ Z.createElement(Yn, {
			option: S,
			DefaultShape: io,
			shapeProps: E
		}));
	}));
}
function So(e) {
	return Sr(e) && e !== 0;
}
function Co(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = ho(o, s), p = Math.abs(f), m = n.filter((e) => So(vr(e, c, 0))).length, h = m <= 1 ? 0 : t.paddingAngle ?? 0, g = n.findIndex((e) => So(vr(e, c, 0))), _ = (p >= 360 ? m : m - 1) * h, v = n.reduce((e, t) => {
		var n = vr(t, c, 0);
		return e + (Sr(n) ? n : 0);
	}, 0), y = d > 0 && v > 0 && n.some((e) => {
		var t = vr(e, c, 0), n = (Sr(t) ? t : 0) / v;
		return So(t) && n * p < d;
	}) ? d : 0, b = p - m * y - _, x;
	if (v > 0) {
		var S;
		x = n.map((e, n) => {
			var s = vr(e, c, 0), d = vr(e, l, n), p = mo(t, i, e), m = (Sr(s) ? s : 0) / v, _, x = $($({}, e), r && r[n] && r[n].props), C = $({}, x);
			delete C.id;
			var w = Dr(x), T = w.color ?? t.fill, E = n > 0 && n === g, ee = So(s) && !E;
			_ = n ? S.endAngle + Tr(f) * h * +!!ee : o;
			var D = _ + Tr(f) * ((So(s) ? y : 0) + m * b), O = (_ + D) / 2, k = (p.innerRadius + p.outerRadius) / 2, te = [{
				name: d,
				value: s,
				payload: x,
				dataKey: c,
				type: u,
				color: T,
				fill: T,
				graphicalItemId: t.id
			}], A = Er(p.cx, p.cy, k, O);
			return S = $($($($($({}, t.presentationProps), {}, {
				percent: m,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: te,
				midAngle: O,
				middleRadius: k,
				tooltipPosition: A
			}, C), w.fillObject == null ? void 0 : { fill: T }), p), {}, {
				value: s,
				dataKey: c,
				startAngle: _,
				endAngle: D,
				payload: x,
				paddingAngle: ee ? Tr(f) * h : 0
			}), S;
		});
	}
	return x;
}
function wo(e) {
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
	return /*#__PURE__*/ Z.createElement(Un, { value: t ? i : void 0 }, r);
}
var To = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			if (e.status === "matched") {
				var a = r > 0 ? br(or(e.prev, "paddingAngle", 0), or(e.next, "paddingAngle", 0), t) : 0, o = br(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = r > 0 ? or(e.next, "paddingAngle", 0) : 0, l = br(0, e.next.endAngle - e.next.startAngle, t), u = $($({}, e.next), {}, {
					startAngle: i + c,
					endAngle: i + l + c
				});
				n.push(u), i = u.endAngle;
			}
		}
	}), n;
};
function Eo(e) {
	var t = e.props, n = e.previousSectorsRef, r = e.id, i = e.graphicalItems, a = e.indexedActiveStyles, o = t.sectors, s = t.activeShape, c = t.inactiveShape, l = t.animationInterpolateFn, u = Ur(i), d = zr(t.onAnimationStart, t.onAnimationEnd), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = qr();
	if (h == null) return null;
	var g = o[0];
	return /*#__PURE__*/ Z.createElement(Nn, { value: u }, /*#__PURE__*/ Z.createElement(Mn, { value: ir }, /*#__PURE__*/ Z.createElement(wo, {
		showLabels: !f,
		sectors: o
	}, /*#__PURE__*/ Z.createElement(bn, {
		animationInput: t,
		animationIdPrefix: "recharts-pie-",
		items: o,
		previousItemsRef: n,
		isAnimationActive: t.isAnimationActive,
		animationBegin: t.animationBegin,
		animationDuration: t.animationDuration,
		animationEasing: t.animationEasing,
		onAnimationStart: p,
		onAnimationEnd: m,
		animationInterpolateFn: l,
		animationMatchBy: t.animationMatchBy,
		layout: h
	}, (e, n, i) => /*#__PURE__*/ Z.createElement(zn, null, /*#__PURE__*/ Z.createElement(xo, {
		sectors: e,
		activeShape: s,
		inactiveShape: c,
		allOtherPieProps: t,
		shape: t.shape,
		id: r,
		indexedActiveStyles: a,
		animationElapsedTime: n,
		isAnimating: f || n < 1,
		isEntrance: i
	}))), /*#__PURE__*/ Z.createElement(bo, {
		showLabels: !f,
		sectors: o,
		props: t
	}), /*#__PURE__*/ Z.createElement(Hn, {
		cx: g?.cx ?? 0,
		cy: g?.cy ?? 0,
		innerRadius: g?.innerRadius ?? 0,
		outerRadius: g?.outerRadius ?? 0,
		startAngle: t.startAngle,
		endAngle: t.endAngle,
		clockWise: !1
	}, t.children))));
}
var Do = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: To,
	animationMatchBy: wr,
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
	shape: io,
	startAngle: 0,
	stroke: "#fff",
	zIndex: Pn.area
};
function Oo(e) {
	var t = e.id, n = e.graphicalItems, r = e.explicitStyleProps, i = e.pieFillObject, a = Xa(e, qa), o = e.hide, s = e.className, c = e.rootTabIndex, l = Jr(), u = (0, Z.useMemo)(() => ar(e.children, xn), [e.children]), d = yr(r), f = (0, Z.useMemo)(() => n.map((e) => d ? Yr(e.active) : e.active), [n, d]), p = Br((e) => Wa(e, t, u)), m = (0, Z.useRef)(null), h = it("recharts-pie", s);
	if (o || p == null) return m.current = null, /*#__PURE__*/ Z.createElement(zn, {
		tabIndex: c,
		className: h
	});
	var g = p.map((e, t) => so(e, t, n, r)), _ = g.map((e, t) => pr(e.payload, t, i, l, d)), v = _.map((e, n) => e == null ? void 0 : fr(dr(t, n))), y = n.length > 0;
	return /*#__PURE__*/ Z.createElement(Qn, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(uo, {
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
	}), /*#__PURE__*/ Z.createElement(zn, {
		tabIndex: c,
		className: h
	}, _.some((e) => e != null) && /*#__PURE__*/ Z.createElement("defs", null, _.map((e, n) => e == null ? null : /*#__PURE__*/ Z.createElement(In, {
		key: n,
		id: dr(t, n),
		fillObject: e,
		color: g[n]?.fill
	}))), /*#__PURE__*/ Z.createElement(Eo, {
		props: $($({}, a), {}, {
			sectors: g,
			sectorPaintFills: v
		}),
		previousSectorsRef: m,
		id: t,
		graphicalItems: n,
		indexedActiveStyles: f
	})));
}
function ko(e) {
	var t = Fr(e.fill), n = t.color, r = t.fillObject, i = $($({}, e), {}, { fill: n }), a = Or(i, Do), o = Vr((e) => ({ graphicalItems: e.graphicalItems }), {}, void 0), s = {
		fill: i.fill,
		fillOpacity: i.fillOpacity,
		stroke: i.stroke,
		strokeOpacity: i.strokeOpacity,
		strokeWidth: i.strokeWidth,
		strokeDasharray: i.strokeDasharray
	}, c = a.id, l = Xa(a, Ja), u = Ir(l);
	return /*#__PURE__*/ Z.createElement(Wn, {
		id: c,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(Kn, {
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
	}), /*#__PURE__*/ Z.createElement(co, Ya({}, l, {
		id: e,
		graphicalItems: lr(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	})), /*#__PURE__*/ Z.createElement(Oo, Ya({}, l, {
		id: e,
		graphicalItems: lr(o?.graphicalItems) ?? [],
		explicitStyleProps: s,
		pieFillObject: r
	}))));
}
var Ao = ko;
Ao.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function jo(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Mo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? jo(Object(n), !0).forEach(function(t) {
			No(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jo(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function No(e, t, n) {
	return (t = Po(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Po(e) {
	var t = Fo(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Fo(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Io = ["item"], Lo = Mo(Mo({}, rr), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), Ro = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = Or(e, Lo);
	return /*#__PURE__*/ Z.createElement(Vn, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: Io,
		tooltipPayloadSearcher: tr,
		categoricalChartProps: n,
		ref: t
	});
}), zo = 5, Bo = 2e3, Vo = 0, Ho = "80%", Uo = 0, Wo = 0, Go = 0, Ko = 360, qo = [], Jo = (0, Z.createContext)(null);
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
	return /* @__PURE__ */ (0, Q.jsx)(Jo, {
		value: p,
		children: /* @__PURE__ */ (0, Q.jsxs)(Cn, {
			className: a,
			config: e,
			children: [/* @__PURE__ */ (0, Q.jsx)(Bn, { isLoading: l }), /* @__PURE__ */ (0, Q.jsx)(Ro, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...o,
				children: i
			})]
		})
	});
}
function Zo({ variant: e = "gradient", innerRadius: t = Vo, outerRadius: n = Ho, cornerRadius: r = Uo, paddingAngle: i = Wo, startAngle: a = Go, endAngle: o = Ko, isClickable: s = !1, glowingSectors: c = qo, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Yo(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, Q.jsx)(Ao, {
		data: as,
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
		shape: (e) => /* @__PURE__ */ (0, Q.jsx)(os, { ...e })
	});
	let y = ns(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Ao, {
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
			return /* @__PURE__ */ (0, Q.jsx)(Gn, {
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
	}), /* @__PURE__ */ (0, Q.jsxs)("defs", { children: [/* @__PURE__ */ (0, Q.jsx)(rs, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, Q.jsx)(is, {
		id: v,
		glowingSectors: c
	})] })] });
}
var Qo = () => null;
function $o({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Yo();
	return r ? null : /* @__PURE__ */ (0, Q.jsx)(Dn, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, Q.jsx)(On, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function es({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, selectedSector: a, selectSector: o } = Yo();
	return /* @__PURE__ */ (0, Q.jsx)(wn, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Q.jsx)(Tn, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function ts({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, Q.jsx)(Sn, { variant: e });
}
var ns = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== Qo) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, Q.jsx)(Ln, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, rs = ({ id: e, config: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = ur(n);
	return /* @__PURE__ */ (0, Q.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Q.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), is = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, Q.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, Q.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, Q.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, Q.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), as = Array.from({ length: zo }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / zo
})), os = (e) => {
	let { index: t = 0, ...n } = e, r = t / zo * (Bo / 1e3);
	return /* @__PURE__ */ (0, Q.jsx)(jt.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: Bo / 1e3,
			delay: r,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, Q.jsx)(Gn, {
			...n,
			fill: "currentColor"
		})
	});
};
Xo.Pie = Zo, Xo.Label = Qo, Xo.Tooltip = $o, Xo.Legend = es, Xo.Background = ts;
// src/react/settings/storage-charts.tsx
var ss = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	follow_snapshots: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	project_archives: "var(--color-chart-9)"
}, cs = "var(--color-text-tertiary)", ls = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	follow_snapshots: "bg-chart-7",
	records: "bg-chart-8",
	project_archives: "bg-chart-9"
}, us = (e) => bt(e);
function ds(e) {
	let t = e.filter((e) => ss[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: ss[e.key]
	})), n = e.filter((e) => !ss[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: J("settings:storageCharts.rest"),
		bytes: n,
		color: cs
	}] : t;
}
function fs({ storage: e }) {
	let t = e.usage, n = ds(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
		label: e.label,
		colors: Rr(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": J("settings:storageCharts.categoryShare", { size: us(t.total_bytes) }),
			children: [/* @__PURE__ */ (0, Q.jsxs)(Xo, {
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, Q.jsx)(Xo.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, Q.jsx)(En, {
					nameKey: "slice",
					hideLabel: !0,
					format: us
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, Q.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: us(t.total_bytes)
				}), /* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: J("settings:storageCharts.fileCount", { count: t.total_files })
				})]
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": J("settings:storageCharts.legend"),
				children: n.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `${Xn} ${ls[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: us(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, Q.jsx)(ps, { storage: e })]
		})]
	});
}
function ps({ storage: e }) {
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: J("settings:storageCharts.peachData"),
			colors: Rr("var(--color-border-focus-ring)")
		},
		others: {
			label: J("settings:storageCharts.otherFiles"),
			colors: Rr(cs)
		},
		free: {
			label: J("settings:storageCharts.free"),
			colors: Rr("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: J("settings:storageCharts.diskSummary", {
				total: us(e.total_bytes),
				systemDrive: e.system_drive ? J("settings:storageCharts.systemDrive") : "",
				share: ((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? J("settings:storageCharts.underTenthPercent") : `${n.toFixed(+(n < 10))}%`;
				})(t),
				free: us(n)
			})
		}), /* @__PURE__ */ (0, Q.jsxs)(Fn, {
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
				/* @__PURE__ */ (0, Q.jsx)(Fn.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, Q.jsx)(Fn.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, Q.jsx)(Fn.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, Q.jsx)(Fn.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, Q.jsx)(Fn.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, Q.jsx)(En, {
					hideLabel: !0,
					format: us
				})
			]
		})]
	});
}
// src/react/components/configuration-fields.tsx
function ms({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
	let l = `${e}-label`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(se, {
				id: l,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)(Ne, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: ke,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: o,
				children: i.map((e) => /* @__PURE__ */ (0, Q.jsx)(c, {
					value: e.value,
					className: Oe,
					children: e.label
				}, e.value))
			}),
			s
		]
	});
}
function hs({ prefix: e, suffix: t, unit: n, fieldClassName: r, ...i }) {
	let a = () => /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": n ? !0 : void 0,
		className: lt("shrink-0 text-body-regular text-text-secondary", n ? "w-10" : "pr-1"),
		children: n ? /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "absolute inset-y-0 right-0 flex items-center border-l border-border-button-default px-2",
			children: n
		}) : t
	});
	return /* @__PURE__ */ (0, Q.jsx)(F, {
		...i,
		fieldClassName: r,
		leadingAddon: e ? /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: n || t ? a : void 0
	});
}
// src/react/settings/storage-budget-settings.tsx
var gs = [
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
], _s = (e) => Yt(e.reasons, e.reason_codes?.map((e) => e?.code ?? null), e.reason_codes?.map((e) => e?.params ?? null));
function vs({ initial: e, after: t, receipt: n }) {
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
	return r ? /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "storageBudgetSettings",
		title: J("settings:storageLimits.title"),
		onSubmit: (e) => {
			e.preventDefault(), a.run("save", (e) => W("/api/configuration/storage/policy", r, "POST", e), (e) => {
				s(""), t(e), n(J("settings:storageLimits.saved"));
			});
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(L, { children: [/* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:storageLimits.enable"),
				description: J("settings:storageLimits.enableHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
					"aria-label": J("settings:storageLimits.enable"),
					isSelected: r.enabled,
					isDisabled: !!a.busy,
					onChange: (e) => c("enabled", e)
				})
			}), r.enabled ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [gs.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(V, {
				label: t,
				description: n,
				children: /* @__PURE__ */ (0, Q.jsx)(hs, {
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
			}, e)), /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:storageLimits.autoClean"),
				description: J("settings:storageLimits.autoCleanHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
					"aria-label": J("settings:storageLimits.autoClean"),
					isSelected: r.auto_clean,
					isDisabled: !!a.busy,
					onChange: (e) => c("auto_clean", e)
				})
			})] }) : null] }),
			r.enabled ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(F, {
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
			r.enabled && r.external_cache_path ? /* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:storageLimits.externalCacheLimit"),
				description: J("settings:storageLimits.externalCacheLimitHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(hs, {
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
			/* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [
					r.enabled ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:storageLimits.limitsHelp") }) : null,
					r.enabled && l?.paused ? /* @__PURE__ */ (0, Q.jsx)(D, { children: J("settings:storageLimits.pausedWithReasons", { reasons: _s(l).join(J("shell:format.semicolonSeparator")) }) }) : null,
					a.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: a.error }) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				...G(a.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	}) : /* @__PURE__ */ (0, Q.jsx)(R, {
		title: J("settings:storageLimits.title"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: a.error || J("settings:storageLimits.loadFailed") }) })
	});
}
// src/react/settings/storage-settings.tsx
var ys = "/api/configuration/storage", bs = 1500, xs = 36e5, Ss = 864e5, Cs = (e) => e instanceof d && $e(e.body)?.target || q(e);
function ws(e) {
	if (e.free_bytes === null || e.total_bytes === null) return J("settings:shared.notFound");
	let t = J("settings:storageSpace.diskFreeOfTotal", {
		free: bt(e.free_bytes),
		total: bt(e.total_bytes)
	});
	return e.system_drive ? J("settings:storageSpace.systemDriveSuffix", { summary: t }) : t;
}
var Ts = (e) => e.cleanable && e.reclaimable > 0, Es = (e) => ({
	...e,
	label: Jt(`storage.category.${e.key}.label`, e.label),
	description: Jt(`storage.category.${e.key}.description`, e.description),
	note: Jt(`storage.category.${e.key}.note`, e.note)
}), Ds = (e) => [K(e, "message"), ...(e.notes ?? []).map((t, n) => Jt(e.note_codes?.[n]?.code ?? "", t, e.note_codes?.[n]?.params))], Os = (e) => ({
	text: K(e, "text"),
	command: K(e, "command")
});
function ks({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = {
		files: /* @__PURE__ */ (0, Q.jsx)(Na, { value: t }),
		size: /* @__PURE__ */ (0, Q.jsx)(Na, {
			value: e.bytes || 0,
			format: bt
		})
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Se, {
			label: J("settings:storageSpace.measureProgress"),
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, Q.jsx)(P, { children: nn("settings:storageSpace.measuringOfLast", {
			count: t,
			expected: n
		}, r) })] }) : /* @__PURE__ */ (0, Q.jsx)(u, {
			kind: "radar",
			label: J("settings:storageSpace.measuringLabel")
		}), n ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: nn("settings:storageSpace.measuring", { count: t }, r) })]
	});
}
var As = /* @__PURE__ */ new Set([
	"follow_snapshots",
	"source_snapshots",
	"project_archives"
]);
function js({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = Ts(e), a = e.key === "follow_snapshots", o = a || e.key === "project_archives", s = e.cleanable ? e.reclaimable > 0 ? J("settings:storageSpace.afterCleanup", { effect: e.note }) : J("settings:storageSpace.nothingToClean") : o ? e.note : J("settings:storageSpace.cannotClean", { reason: e.note });
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			e.cleanable ? /* @__PURE__ */ (0, Q.jsx)(b, {
				"aria-label": J("settings:storageSpace.cleanCategory", { category: e.label }),
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}) : /* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: "w-4 shrink-0"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${ls[e.key] || "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": `storage.category.${e.key}.label`,
							children: e.label
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.description`,
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						"data-copy-key": `storage.category.${e.key}.${e.cleanable && !i ? "empty" : "note"}`,
						className: "text-caption-1-regular text-text-tertiary",
						children: s
					}),
					a ? /* @__PURE__ */ (0, Q.jsx)(ce, {
						href: `${we}#repair-item-follow-evidence`,
						size: "xs",
						trailingIcon: xt,
						className: "mt-1 self-start whitespace-normal",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": "storageSpace.reviewFollowSnapshots",
							children: J("settings:storageSpace.reviewFollowSnapshots")
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, Q.jsx)(Na, {
					value: e.bytes,
					format: bt,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: [
						J("settings:storageSpace.canFree"),
						" ",
						bt(e.reclaimable)
					]
				}) : null]
			})
		]
	});
}
function Ms({ initial: e, receipt: t, active: n = !0 }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = Y(), u = r.job.state !== "idle", d = (0, Z.useRef)(u), p = (0, Z.useRef)(!1);
	(0, Z.useEffect)(() => {
		n && !p.current && (p.current = !0, e.usage || e.job.state !== "idle" || document.body.classList.contains("peach-guiding") || l.run("measure", (e) => W(`${ys}/measure`, {}, "POST", e), i));
	}, [
		n,
		e,
		l.run
	]), (0, Z.useEffect)(() => {
		if (!u) return;
		let e = new AbortController();
		return Ft({
			signal: e.signal,
			everyMs: bs,
			limitMs: xs,
			read: (e) => U(ys, e),
			apply: i,
			done: (e) => e.job.state === "idle"
		}), () => e.abort();
	}, [u]), (0, Z.useEffect)(() => {
		u ? d.current = !0 : d.current && (d.current = !1, c(/* @__PURE__ */ new Set()), r.job.error || t(K(r.job, "message") || J("settings:storageSpace.measured")));
	}, [u]);
	let m = () => void l.run("measure", (e) => W(`${ys}/measure`, {}, "POST", e), i), h = r.usage && {
		...r.usage,
		categories: r.usage.categories.map(Es)
	}, g = h?.categories.filter(Ts) ?? [], _ = g.filter((e) => s.has(e.key)), v = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		ot({
			title: t,
			body: J("settings:storageSpace.cleanBody", {
				size: bt(n),
				items: Et(e.map((e) => J("settings:storageSpace.cleanItem", {
					label: e.label,
					size: bt(e.reclaimable),
					effect: e.note
				})))
			}),
			confirmLabel: J("settings:storageSpace.cleanSize", { size: bt(n) }),
			holdToConfirm: !0,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => i(await W(`${ys}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, y = () => void l.run("relocate", async (e) => {
		let t = await Pt(r.data_root, (t) => W(he, t, "POST", e), "data");
		if (!t) return;
		let n = r.usage ? bt(r.usage.total_bytes) : "";
		await ot({
			title: J("settings:storageSpace.moveDataDirectory"),
			body: J("settings:storageSpace.moveConfirm", {
				size: n,
				from: r.data_root,
				to: t
			}),
			confirmLabel: J("settings:storageSpace.moveDataDirectory"),
			onConfirm: async () => {
				try {
					o(Xt(await W(`${ys}/relocate`, { target: t })));
				} catch (e) {
					throw Error(Cs(e));
				}
			}
		});
	}, () => void 0), b = r.relocation.last, x = b && (b.state === "error" || (b.notes?.length ?? 0) > 0 || Date.now() - b.finished_at * 1e3 < Ss), C = h?.categories.find((e) => e.key === r.job.category)?.label, w = a || (r.job.state === "cleaning" ? J("settings:storageSpace.cleaningCategory", { category: C || "" }) : r.job.state === "measuring" ? J("settings:storageSpace.measuringStatus") : _.length ? J("settings:storageSpace.selectedSummary", {
		count: _.length,
		size: bt(_.reduce((e, t) => e + t.reclaimable, 0))
	}) : h ? J("settings:storageSpace.measuredAt", { time: (/* @__PURE__ */ new Date(h.measured_at * 1e3)).toLocaleString(Ct) }) : ""), T = u || !!a, E = (e) => (t) => c((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "storageSettings",
		guide: "storage",
		title: J("settings:diskUsage.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:shared.dataDirectory"),
				children: /* @__PURE__ */ (0, Q.jsx)(be, {
					path: r.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, Q.jsx)(j, {
				term: J("settings:diskUsage.disk"),
				children: ws(r)
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [
					r.job.state === "measuring" ? /* @__PURE__ */ (0, Q.jsx)(ks, { job: r.job }) : null,
					h?.capacity_error ? /* @__PURE__ */ (0, Q.jsxs)(D, { children: [J("settings:storageSpace.capacityIncomplete"), h.capacity_error] }) : null,
					h?.allocated_bytes == null ? null : /* @__PURE__ */ (0, Q.jsxs)(P, { children: [
						J("settings:storageSpace.allocatedOnDisk"),
						" ",
						bt(h.allocated_bytes)
					] }),
					h ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-storage-result": "",
						className: tt({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, Q.jsx)(fs, { storage: h ? {
								...r,
								usage: h
							} : r })
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-col pl-4",
							children: h.categories.filter((e) => e.files > 0 || !As.has(e.key)).map((e) => /* @__PURE__ */ (0, Q.jsx)(js, {
								category: e,
								selected: s.has(e.key),
								disabled: T,
								onToggle: E(e.key)
							}, e.key))
						})]
					}) : r.job.state === "measuring" ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:diskUsage.emptyHelp") }),
					r.relocation.available ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: K(r.relocation, "message") }),
					!r.relocation.available && r.relocation.steps?.length ? /* @__PURE__ */ (0, Q.jsx)(S, {
						label: J("settings:storageSpace.moveOnHost"),
						steps: r.relocation.steps.map(Os)
					}) : null,
					r.job.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: K(r.job, "message") }) : null,
					l.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: l.error }) : null,
					x && b ? b.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(D, { children: Ds(b).join(J("shell:format.semicolonSeparator")) }) : /* @__PURE__ */ (0, Q.jsx)(P, { children: Ds(b).join(J("shell:format.semicolonSeparator")) }) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(N, {
				status: w ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: a ? "status" : void 0,
					children: w
				}) : null,
				children: [
					h ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						disabled: T || !_.length,
						...G(r.job.state === "cleaning" && _.length > 0),
						onClick: () => v(_, J("settings:storageSpace.cleanSelectedTitle")),
						children: J("settings:storageSpace.cleanSelected")
					}), /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						disabled: T || !g.length,
						onClick: () => v(g, J("settings:storageSpace.cleanAllTitle")),
						children: J("settings:storageSpace.cleanAll")
					})] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						disabled: T || !r.relocation.available || !h,
						onClick: y,
						...G(l.busy === "relocate"),
						children: J("settings:diskUsage.changeLocation")
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						disabled: !!a || r.job.state === "cleaning",
						onClick: m,
						...G(l.busy === "measure" || r.job.state === "measuring"),
						children: J(h ? "settings:diskUsage.measureAgain" : "settings:diskUsage.measure")
					})
				]
			})
		]
	}), r.budget ? /* @__PURE__ */ (0, Q.jsx)(vs, {
		initial: r.budget,
		after: i,
		receipt: t
	}) : null] });
}
// src/react/settings/upgrade-repairs.tsx
var Ns = {
	pending: J("settings:upgradeRepairs.pending"),
	running: J("settings:upgradeRepairs.repairing"),
	failed: J("settings:repairCenter.needsRetry"),
	deferred: J("settings:repairCenter.deferred"),
	review: J("settings:upgradeRepairs.needsReview"),
	complete: J("settings:shared.completed"),
	unavailable: J("settings:upgradeRepairs.unavailable")
}, Ps = (e) => nn("settings:upgradeRepairs.itemCount", { count: e }, { value: /* @__PURE__ */ (0, Q.jsx)(Na, { value: e }) });
function Fs({ lastCapacityCheckPassed: e = !1 } = {}) {
	let { snapshot: t } = rn(), [n, r] = (0, Z.useState)(null), i = Y();
	(0, Z.useEffect)(() => r(null), [t]);
	let a = n ?? t?.repairs, o = a?.state || "pending", s = a?.message_code === "labels.upgradeRepairs.mediaPaused" && e, c = a?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, l = a?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, u = a?.items.reduce((e, t) => e + (t.deferred || 0), 0) || 0, d = a?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "upgradeRepairs",
		title: J("settings:upgradeRepairs.title"),
		aside: /* @__PURE__ */ (0, Q.jsx)(Be, {
			tone: o === "failed" ? "error" : o === "running" ? "progress" : o === "review" ? "warning" : o === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${o}.status`,
				children: Ns[o] || J("settings:shared.notFound")
			}, o)
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:upgradeRepairs.toDo"),
					children: /* @__PURE__ */ (0, Q.jsx)("span", { children: Ps(c) })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:shared.failed"),
					children: /* @__PURE__ */ (0, Q.jsx)("span", { children: Ps(l) })
				}),
				u ? /* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:upgradeRepairs.deferred"),
					children: /* @__PURE__ */ (0, Q.jsx)("span", { children: Ps(u) })
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: J("settings:upgradeRepairs.toReview"),
					children: /* @__PURE__ */ (0, Q.jsx)("span", { children: Ps(d) })
				})
			] }),
			s && !i.error ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:upgradeRepairs.capacityReady") }) }) : a?.message || i.error ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: i.error || K(a, "message") }) }) : null,
			o === "running" ? /* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:upgradeRepairs.runningHelp") }), /* @__PURE__ */ (0, Q.jsx)(Ue, {})] }) : null,
			o === "deferred" ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:upgradeRepairs.deferredHelp") }) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(N, {
				status: d ? /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "/api/configuration/upgrade-repairs/review",
					children: J("settings:upgradeRepairs.downloadReviewLog")
				}) : null,
				children: [/* @__PURE__ */ (0, Q.jsx)(ce, {
					href: we,
					size: "small",
					trailingIcon: xt,
					children: J("settings:upgradeRepairs.repairCenterLink")
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					size: "small",
					variant: "secondary",
					disabled: !a?.available || o === "running" || !!i.busy || !l && o !== "failed",
					onClick: () => void i.run("retry", (e) => W("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						r(e), nt();
					}),
					children: J("settings:upgradeRepairs.retryFailed")
				})]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var Is = [
	["6", J("settings:automaticUpdates.every6Hours")],
	["24", J("settings:automaticUpdates.daily")],
	["168", J("settings:automaticUpdates.weekly")]
];
function Ls({ entry: e, children: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: e.id,
		"aria-labelledby": `${e.id}-title`,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
			id: `${e.id}-title`,
			className: "px-3 text-title-3-medium text-text-primary",
			children: /* @__PURE__ */ (0, Q.jsx)("span", { children: e.label })
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex min-w-0 flex-col gap-6",
			children: t
		})]
	});
}
function Rs({ data: e, receipt: t, reopenTutorial: n, active: r }) {
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
	return /* @__PURE__ */ (0, Q.jsxs)(gn, {
		inline: !0,
		label: J("settings:configurationPage.contents"),
		entries: c,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(Ls, {
				entry: i,
				children: [
					e.updates ? /* @__PURE__ */ (0, Q.jsx)(ua, {
						initial: e.updates,
						initialJob: e.update_job
					}) : null,
					e.automatic_updates ? /* @__PURE__ */ (0, Q.jsx)(Bs, {
						initial: e.automatic_updates,
						receipt: t
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(Fs, { lastCapacityCheckPassed: e.storage?.budget?.last_check?.paused === !1 })
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(Ls, {
				entry: a,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(Hi, {
						active: r,
						initial: e.startup,
						receipt: t
					}),
					e.storage ? /* @__PURE__ */ (0, Q.jsx)(Ms, {
						initial: e.storage,
						receipt: t,
						active: r
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(Vs, {
						facts: e.facts,
						receipt: t
					}),
					/* @__PURE__ */ (0, Q.jsx)(zs, {
						receipt: t,
						reopenTutorial: n
					})
				]
			}),
			e.storage ? /* @__PURE__ */ (0, Q.jsxs)(Ls, {
				entry: o,
				children: [/* @__PURE__ */ (0, Q.jsx)(Xi, { receipt: t }), /* @__PURE__ */ (0, Q.jsx)(ga, { receipt: t })]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(Ls, {
				entry: s,
				children: [e.remote_reporting ? /* @__PURE__ */ (0, Q.jsx)(R, {
					guide: "diagnostics-reporting",
					title: J("settings:dataSharing.diagnosticsTitle"),
					children: /* @__PURE__ */ (0, Q.jsx)(ja, {
						initial: e.remote_reporting,
						receipt: t
					})
				}) : null, /* @__PURE__ */ (0, Q.jsx)(R, {
					id: "librarySharing",
					guide: "reporting",
					title: J("settings:dataSharing.communityTitle"),
					children: /* @__PURE__ */ (0, Q.jsx)(ka, {
						active: r,
						receipt: t
					})
				})]
			}),
			e.uninstall ? /* @__PURE__ */ (0, Q.jsx)(Hs, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function zs({ reopenTutorial: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		"aria-label": J("settings:tour.guidedTour"),
		className: "w-full",
		children: /* @__PURE__ */ (0, Q.jsx)(Fe, { children: /* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:tour.guidedTour"),
			description: J("settings:tour.reopenDescription"),
			children: /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				onClick: () => void e(),
				children: J("settings:tour.reopen")
			})
		}) }) })
	});
}
function Bs({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error ? K(e, "error") : e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => W("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t(J("settings:shared.settingsSaved")));
	}, c = e.available ? e.download_available ? J("settings:automaticUpdates.confirmInstall") : void 0 : J("settings:automaticUpdates.needsTray");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "automaticUpdates",
		guide: "automatic-updates",
		title: J("settings:autoUpdate.title"),
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(L, { children: [
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:autoUpdate.autoCheck"),
					description: J("settings:autoUpdate.autoCheckHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:autoUpdate.autoCheck"),
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:autoUpdate.autoDownload"),
					description: J("settings:autoUpdate.autoDownloadHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:autoUpdate.autoDownload"),
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:autoUpdate.frequency"),
					description: c,
					children: /* @__PURE__ */ (0, Q.jsx)(z, {
						"aria-label": J("settings:autoUpdate.frequency"),
						selectedKey: String(i),
						isDisabled: !e.available || n === "off",
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: Is.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				disabled: !e.available,
				...G(o.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
function Vs({ facts: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(null), i = n ?? e, a = Y(), o = (e) => void a.run(e, (t) => W("/api/configuration/media-tools", { tool: e }, "POST", t), (e) => {
		r(e.facts.map(kt)), t(Xt(e) || e.message);
	});
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "facts",
		title: J("settings:runtimeInfo.title"),
		children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: i.map(({ term: e, value: t, install_tool: n, download_url: r, download_label: i }) => /* @__PURE__ */ (0, Q.jsx)(j, {
			term: e,
			children: n ? /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "min-w-0",
					children: t
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					size: "small",
					className: "shrink-0",
					onClick: () => o(n),
					...G(a.busy === n),
					children: J("settings:shared.install")
				})]
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [t, r ? /* @__PURE__ */ (0, Q.jsx)(k, {
				href: r,
				children: i
			}) : null] })
		}, e)) }), a.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: a.error }) : null]
	});
}
function Hs({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void ot({
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
			a(Xt(e) || e.message);
		}
	}), s = i || K(e, "message"), c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "uninstallPeach",
		guide: "uninstall",
		title: J("settings:uninstall.title"),
		children: [
			e.available ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:uninstall.help") }) }) : null,
			/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:uninstall.full"),
				description: J("settings:uninstall.fullHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
					"aria-label": J("settings:uninstall.full"),
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(C, {
					summary: J("settings:shared.dataDirectory"),
					children: c.map((e) => /* @__PURE__ */ (0, Q.jsx)(be, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(N, {
				status: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, Q.jsx)(f, {
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
var Us = 8e3, Ws = [
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
], Gs = [
	["cache", J("settings:cloudDriveGuide.cacheLimit")],
	["read", J("settings:cloudDriveGuide.readLength")],
	["task", J("settings:cloudDriveGuide.concurrentVideos")]
];
function Ks() {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)(C, {
			summary: J("settings:cloudDriveGuide.title"),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(P, { children: [J("settings:cloudDriveGuide.mountFirst"), /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "https://www.clouddrive2.com/help.html",
					children: J("settings:cloudDriveGuide.mountHelp")
				})] }),
				/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudDriveGuide.cacheHelp") }),
				/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudDriveGuide.writeAccess") }),
				/* @__PURE__ */ (0, Q.jsx)("ul", {
					"aria-label": J("settings:cloudDriveGuide.tiersLabel"),
					className: "flex flex-col gap-2",
					children: Ws.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, Q.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: Gs.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Q.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, Q.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("li", { children: J("settings:cloudDriveGuide.cacheSettingsTip") }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: J("settings:cloudDriveGuide.readLengthTip") }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: J("settings:cloudDriveGuide.cacheTypesTip") })
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(P, { children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: J("settings:cloudDriveGuide.fullGuide")
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var qs = "/api/configuration/cloud-proxies", Js = [
	["direct", J("settings:cloudProxy.direct")],
	["system", J("settings:shared.followSystem")],
	["http", J("settings:cloudProxy.http")],
	["socks5", J("settings:cloudProxy.socks5")]
];
function Ys({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), { checked: d, checkFailed: p } = _n(), m = (e) => {
		o.current.size || u.run("refresh", (e) => U(qs, e), (t) => {
			a.current.clear(), n(t), i(!1), e && d(J("settings:cloudProxy.refreshed"));
		}, (t) => {
			let n = t instanceof Error ? t.message : J("settings:cloudProxy.loadFailed");
			i(!1), u.setError(n), e && p(J("settings:cloudProxy.title"), n);
		});
	};
	return l.current = () => m(!1), (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		Vt("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, Q.jsx)(Me, {
		label: J("settings:cloudProxy.loading"),
		html: rt
	}) : /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "cloud-proxy",
		title: J("settings:cloudProxy.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: h }), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, Q.jsxs)(I, {
					tone: "error",
					title: J("settings:cloudProxy.readFailedTitle"),
					children: [
						u.error,
						" ",
						/* @__PURE__ */ (0, Q.jsx)(ce, {
							href: "/settings/downloads",
							size: "small",
							children: J("settings:cloudProxy.downloadSettingsLink")
						})
					]
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, Q.jsxs)(P, { children: [
					J("settings:cloudProxy.notConfigured"),
					" ",
					/* @__PURE__ */ (0, Q.jsx)(ce, {
						href: "/settings/downloads",
						size: "small",
						children: J("settings:cloudProxy.downloadSettingsLink")
					})
				] }) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudProxy.noLibraries") }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ne, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: ii(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudProxy.unmatched") })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, Q.jsx)(Xs, {
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
		})] }), /* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
			variant: "secondary",
			disabled: s,
			onClick: () => m(!0),
			...G(u.busy === "refresh"),
			children: J("settings:shared.reload")
		}) })]
	});
}
function Xs({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = Et(a.libraries?.map((e) => e.name) ?? []) || a.name, u = Y(), d = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": J("settings:cloudProxy.accountForm", { name: l }),
		onSubmit: (e) => {
			e.preventDefault(), i(!0), u.run("save", (e) => W(qs, {
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
			/* @__PURE__ */ (0, Q.jsx)(ne, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: ii(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(P, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, Q.jsx)(Zs, {
				label: J("settings:cloudProxy.dataProxy"),
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("data", e)
			}),
			/* @__PURE__ */ (0, Q.jsx)(Zs, {
				label: J("settings:cloudProxy.apiProxy"),
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:cloudProxy.needsWritePermission") }),
			u.error ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, Q.jsx)(f, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...G(u.busy === "save"),
					children: J("settings:shared.saveSettings")
				})
			})
		]
	});
}
function Zs({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ne, { children: e }),
			/* @__PURE__ */ (0, Q.jsxs)(z, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, Q.jsx)(B, {
					id: "unknown",
					children: J("settings:cloudProxy.unknownType")
				}) : null, Js.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)(F, {
					className: "min-w-40 flex-1",
					label: J("settings:cloudProxy.host", { label: e }),
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, Q.jsx)(F, {
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
			}), /* @__PURE__ */ (0, Q.jsxs)(C, {
				summary: J("settings:cloudProxy.authentication"),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(F, {
						label: J("settings:cloudProxy.username", { label: e }),
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(F, {
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
					t.password_set ? /* @__PURE__ */ (0, Q.jsx)(b, {
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
// src/react/boardui/components/base/textarea/textarea.tsx
var Qs = $t({
	field: "relative flex w-full flex-col rounded-2lg bg-background-tertiary-default text-foreground-icon-tertiary ring-2 ring-inset ring-transparent transition-[background-color,box-shadow,color] duration-[var(--input-transition-ms)] ease",
	fieldSize: {
		medium: "p-2",
		small: "px-1.5 py-2"
	},
	textarea: "block w-full min-w-0 bg-transparent border-0 outline-none m-0 p-0 px-1 font-sans text-body-regular text-text-primary placeholder:text-text-tertiary focus:placeholder:text-text-primary disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed aria-invalid:placeholder:text-text-error-placeholder",
	resize: {
		none: "resize-none",
		vertical: "resize-y"
	},
	footer: "flex w-full items-start justify-between gap-3",
	count: "ms-auto shrink-0 pt-px text-caption-1-medium text-text-tertiary tabular-nums"
}), $s = 20;
function ec({ size: e, rows: n = 3, autoResize: r = !1, maxRows: a, resize: o = "vertical", fieldClassName: s, className: c, ref: l, groupRef: u, onInput: d, ...f }) {
	let p = (0, Z.useContext)(Ke), m = e ?? p.size ?? "medium", h = (0, Z.useRef)(null), g = (e) => {
		h.current = e, typeof l == "function" ? l(e) : l && (l.current = e);
	}, _ = () => {
		let e = h.current;
		if (!e) return;
		if (!r) {
			e.style.height = "", e.style.maxHeight = "", e.style.overflowY = "";
			return;
		}
		let t = parseFloat(window.getComputedStyle(e).lineHeight) || $s, i = a ? a * t : Infinity;
		e.style.height = "0px";
		let o = Math.max(e.scrollHeight, n * t);
		e.style.height = `${Math.min(o, i)}px`, e.style.maxHeight = a ? `${i}px` : "", e.style.overflowY = o > i ? "auto" : "hidden";
	};
	return (0, Z.useLayoutEffect)(_), /* @__PURE__ */ (0, Q.jsx)(t, {
		ref: u,
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => lt(Qs.field, Qs.fieldSize[m], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", p.fieldClassName, s),
		children: /* @__PURE__ */ (0, Q.jsx)(i, {
			ref: g,
			rows: n,
			...f,
			onInput: (e) => {
				_(), d?.(e);
			},
			className: lt(Qs.textarea, Qs.resize[r ? "none" : o], p.inputClassName, c)
		})
	});
}
ec.displayName = "TextareaBase";
function tc({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
	let [v, y] = (0, Z.useState)(() => (h ?? "").length), b = m === void 0 ? v : m.length;
	return /* @__PURE__ */ (0, Q.jsx)(Ge, {
		..._,
		value: m,
		defaultValue: h,
		onChange: (e) => {
			l && m === void 0 && y(e.length), g?.(e);
		},
		className: p,
		"aria-label": _["aria-label"] ?? (!e && typeof r == "string" ? r : void 0),
		children: ({ isRequired: p, isInvalid: m }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			e && /* @__PURE__ */ (0, Q.jsx)(se, {
				isRequired: p,
				isInvalid: m,
				tooltip: n,
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)(ec, {
				ref: d,
				groupRef: f,
				placeholder: r,
				rows: i,
				autoResize: a,
				maxRows: o,
				resize: s,
				maxLength: c,
				fieldClassName: u
			}),
			(t || l) && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: Qs.footer,
				children: [t && /* @__PURE__ */ (0, Q.jsx)(re, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: lt(Qs.count, m && "text-text-error-primary"),
					children: c ? `${b}/${c}` : b
				})]
			})
		] })
	});
}
tc.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var nc = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function rc({ receipt: e }) {
	let t = X({
		queryKey: Ae,
		queryFn: ({ signal: e }) => _t(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "codes",
		title: J("settings:codePatterns.title"),
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => W(je, { codePatterns: n }, "POST", e), (t) => {
				zt.setQueryData(Ae, t), r(null), e(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:codePatterns.help") }), /* @__PURE__ */ (0, Q.jsx)(tc, {
			id: "codePatternSetting",
			"aria-label": J("settings:codePatterns.title"),
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: nc,
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/service-preferences.tsx
var ic = [
	["off", J("settings:timelineThumbnails.off")],
	["precise", J("settings:timelineThumbnails.precise")],
	["coarse", J("settings:timelineThumbnails.coarse")]
], ac = [
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
function oc({ receipt: e }) {
	let t = X({
		queryKey: Ae,
		queryFn: ({ signal: e }) => _t(e)
	}), n = fn(), r = n.error || t.error, i = !t.data || n.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:taskSpeed.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(L, { children: [/* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:taskSpeed.defaultSpeed"),
			description: J("settings:taskSpeed.defaultSpeedHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)(xe, {
				value: t.data?.taskSpeedMode || "standard",
				busy: i,
				onChange: (t) => n.mutate({ taskSpeedMode: t }, { onSuccess: () => e(J("settings:taskSpeed.saved")) })
			})
		}), ac.map((r) => /* @__PURE__ */ (0, Q.jsx)(V, {
			label: r.label(),
			description: r.help(),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: `${r.key}Setting`,
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": r.label(),
					selectedKey: String(t.data?.[r.key] ?? r.fallback),
					isDisabled: i,
					onSelectionChange: (t) => {
						t !== null && n.mutate({ [r.key]: Number(t) }, { onSuccess: () => e(J("settings:sourceBudget.saved")) });
					},
					children: r.choices.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: String(e),
						children: r.option(e)
					}, e))
				})
			})
		}, r.key))] }), r ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(r) })
		}) : null]
	});
}
function sc({ epoch: e = 0, disabled: t = !1 }) {
	let n = X({
		queryKey: He,
		queryFn: ({ signal: e }) => yt(e),
		refetchOnMount: "always"
	}), r = pn(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:videoPreviews.timeline"),
			description: J("settings:videoPreviews.timelineHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:timelineThumbnails.interval"),
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
					children: ic.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, Q.jsxs)(H, {
			divided: !0,
			children: [r.isPending ? /* @__PURE__ */ (0, Q.jsx)(We, {
				embedded: !0,
				kind: "gather",
				label: J("settings:shared.saving")
			}) : /* @__PURE__ */ (0, Q.jsx)(We, {
				embedded: !0,
				kind: Xe("timeline-thumbnails"),
				label: J("settings:timelineThumbnails.generating")
			}), r.isPending ? null : /* @__PURE__ */ (0, Q.jsx)(Ue, {})]
		}) : null,
		o ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(o) })
		}) : null
	] });
}
function cc({ receipt: e }) {
	let t = Qe();
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: Ae,
		queryFn: ({ signal: e }) => _t(e),
		refetchOnMount: "always"
	}), r = fn(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "follow-options",
		title: J("settings:followFetch.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(L, { children: [
			/* @__PURE__ */ (0, Q.jsx)(uc, { kind: "follow" }),
			/* @__PURE__ */ (0, Q.jsx)(uc, { kind: "feed" }),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:followFetch.initialRange"),
				description: J("settings:followFetch.initialRangeHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "followInitialDaysSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, Q.jsx)(z, {
						"aria-label": J("settings:followFetch.initialRange"),
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e(J("settings:followSchedule.initialRangeSaved"));
							} });
						},
						children: A.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:followFetch.avatarRefresh"),
				description: J("settings:followFetch.avatarRefreshHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.avatarRefresh")
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:followFetch.faviconRefresh"),
				description: J("settings:followFetch.faviconRefreshHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0",
					children: J("settings:followSchedule.faviconRefresh")
				})
			})
		] }), a ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(a) })
		}) : null]
	});
}
var lc = {
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
function uc({ kind: e }) {
	let t = lc[e], { key: n, fetch: r, fallback: i } = Te[e], a = X({
		queryKey: n,
		queryFn: ({ signal: e }) => r(e),
		refetchOnMount: "always",
		refetchInterval: Kt
	}), o = dn(e), s = a.data, c = `peach.number.${t.id}`, l = (0, Z.useRef)(et(Number(localStorage.getItem(c)), 15, 10080, i)), [u, d] = (0, Z.useState)(String(i)), [f, p] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		s?.enabled && (l.current = s.interval_minutes, d(String(s.interval_minutes)));
	}, [s]);
	let m = !s?.available || a.isFetching || o.isPending, h = () => {
		let e = Number(u);
		!Number.isInteger(e) || e < 15 || e > 10080 ? p(!0) : (p(!1), s?.enabled && !m && e !== s.interval_minutes && (l.current = e, localStorage.setItem(c, String(e)), o.mutate(e)));
	}, g = o.error || a.error, _ = s && !s.available ? J("settings:followSchedule.primaryOnly") : t.help();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(V, {
			label: t.label(),
			description: _,
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				id: t.id,
				className: "flex min-h-9 shrink-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(Ve, {
					"aria-label": t.label(),
					isSelected: s?.enabled === !0,
					isDisabled: m,
					onChange: (e) => {
						localStorage.setItem(c, String(l.current)), o.mutate(e ? l.current : 0);
					}
				}), s?.enabled ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(F, {
						type: "number",
						inputMode: "numeric",
						name: t.name,
						autoComplete: "off",
						"aria-label": t.input(),
						className: "w-21 sm:w-24",
						value: u,
						onChange: (e) => {
							d(e), p(!1);
						},
						onBlur: h,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), h());
						},
						isDisabled: m,
						isInvalid: f
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: J("settings:numberSetting.unitMinutes")
					})]
				}) : null]
			})
		}),
		f ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: J("settings:followSchedule.invalidInterval") }) }) : null,
		o.isPending || s?.running ? /* @__PURE__ */ (0, Q.jsx)(H, { children: o.isPending ? /* @__PURE__ */ (0, Q.jsx)(We, {
			embedded: !0,
			kind: "gather",
			label: J("settings:shared.saving")
		}) : /* @__PURE__ */ (0, Q.jsx)(We, {
			embedded: !0,
			kind: Xe(t.activity),
			label: t.running()
		}) }) : null,
		/* @__PURE__ */ (0, Q.jsx)(dc, {
			kind: e,
			status: s,
			title: t.failure()
		}),
		g ? /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(g) }) }) : null
	] });
}
function dc({ kind: e, status: t, title: n }) {
	let r = un(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = At(t.next_run_at), o = [i > 1 ? J("settings:followSchedule.consecutiveFailures", { count: i }) : "", a ? J("settings:followSchedule.nextRun", { time: a }) : ""].filter(Boolean).join(J("shell:format.clauseSeparator")), s = [
		t.last_error,
		o,
		r.error ? J("settings:followSchedule.retryFailed", { error: q(r.error) }) : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(I, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, Q.jsx)(f, {
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
function fc({ receipt: e }) {
	let t = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => gt(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "preview",
		title: J("settings:videoPreviews.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:videoPreviews.generate"),
				description: J("settings:videoPreviews.generateHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
					"aria-label": J("settings:videoPreviews.generate"),
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => W(de, { metadata_only: !t }, "POST", e), (t) => {
						zt.setQueryData(ue, t), zt.invalidateQueries({ queryKey: He }), zt.invalidateQueries({ queryKey: oe }), e(t.metadata_only ? J("settings:videoPreview.turnedOff") : J("settings:videoPreview.turnedOn"));
					})
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(sc, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
			/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:videoPreviews.decoder"),
				description: J("settings:videoPreviews.decoderHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(z, {
						"aria-label": J("settings:videoPreviews.decoder"),
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i || !!t.data?.metadata_only,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => W(de, { preview_acceleration: String(t) }, "POST", e), (t) => {
								zt.setQueryData(ue, t), e(J("settings:videoPreview.decodingSaved"));
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(B, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, Q.jsx)(B, {
							id: "software",
							children: J("settings:videoPreview.softwareDecoding")
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(We, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: r })
			}) : null
		]
	});
}
var pc = [
	0,
	1080,
	720,
	480
];
function mc({ receipt: e }) {
	let t = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => gt(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "transcode",
		title: J("settings:transcoding.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(L, { children: [/* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:transcoding.mode"),
				description: J("settings:transcoding.modeHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(z, {
						"aria-label": J("settings:transcoding.mode"),
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => W(de, { playback_acceleration: String(t) }, "POST", e), (t) => {
								zt.setQueryData(ue, t), e(J("settings:playbackTranscode.saved"));
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(B, {
							id: "auto",
							children: J("settings:videoProcessing.autoHardwareFirst")
						}), /* @__PURE__ */ (0, Q.jsx)(B, {
							id: "software",
							children: J("settings:playbackTranscode.software")
						})]
					})
				})
			}), /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:transcoding.quality"),
				description: J("settings:transcoding.qualityHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "playbackQualitySetting",
					children: /* @__PURE__ */ (0, Q.jsx)(z, {
						"aria-label": J("settings:transcoding.quality"),
						selectedKey: String(t.data?.playback_max_height ?? 0),
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_max_height", (e) => W(de, { playback_max_height: Number(t) }, "POST", e), (t) => {
								zt.setQueryData(ue, t), e(J("settings:playbackTranscode.qualitySaved"));
							});
						},
						children: pc.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
							id: String(e),
							children: e ? J("settings:transcoding.qualityHeight", { height: e }) : J("settings:transcoding.original")
						}, e))
					})
				})
			})] }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(We, {
					embedded: !0,
					kind: "gather",
					label: J("settings:shared.saving")
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: r })
			}) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var hc = [
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
function gc(e) {
	let t = e === "local" ? "" : fe[e];
	return t ? [t, J("settings:libraryIcons.auto")] : ["hard-drive", J("settings:libraryIcons.default")];
}
var _c = "auto";
function vc({ value: t, label: r, kind: i = "local", onChange: a }) {
	let l = (0, Z.useRef)(null), [u, d] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)(t), [h, g] = gc(i);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(f, {
		ref: l,
		variant: "secondary",
		className: "self-start",
		"aria-label": r,
		"aria-haspopup": "dialog",
		"aria-expanded": u,
		onClick: () => {
			m(t), d(!0);
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: t || h }), ((e) => e && hc.find(([t]) => t === e)?.[1] || g)(t)]
		})
	}), /* @__PURE__ */ (0, Q.jsx)(n, {
		triggerRef: l,
		isOpen: u,
		onOpenChange: d,
		placement: "bottom start",
		offset: 4,
		className: pe,
		children: /* @__PURE__ */ (0, Q.jsxs)(o, {
			"aria-label": J("settings:libraryIcons.dialogLabel", { label: r }),
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(e, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: J("settings:libraryIcons.title")
				}),
				/* @__PURE__ */ (0, Q.jsx)(s, {
					"aria-label": J("settings:libraryIcons.choices"),
					value: p || _c,
					onChange: (e) => m(e === _c ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: hc.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(c, {
						value: e || _c,
						"aria-label": e ? t : g,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, Q.jsx)(ze, { mark: e || h })
					}, e || _c))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						onClick: () => d(!1),
						children: J("settings:shared.cancel")
					}), /* @__PURE__ */ (0, Q.jsx)(f, {
						disabled: p === t,
						onClick: () => {
							a(p), d(!1);
						},
						children: J("settings:shared.apply")
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var yc = [
	["probe", J("settings:libraryPolicy.stepProbe")],
	["metadata", J("settings:libraryPolicy.stepMetadata")],
	["cover", J("settings:libraryPolicy.stepCovers")],
	["people", J("settings:libraryPolicy.stepAvatars")],
	["preview", J("settings:libraryPolicy.stepContactSheet")]
], bc = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], xc = [
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
function Sc() {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: ye }), /* @__PURE__ */ (0, Q.jsxs)(C, {
			summary: J("settings:libraryPolicy.compare"),
			children: [/* @__PURE__ */ (0, Q.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, Q.jsx)("thead", { children: /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, Q.jsx)(a, { children: J("settings:libraryPolicy.step") })
				}), ge.map((e) => /* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, Q.jsx)("tbody", { children: ve.map(([e, ...t]) => /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.included"),
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": J("settings:libraryPolicy.notIncluded"),
						children: "—"
					}) : e
				}, ge[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, Q.jsx)(P, { children: _e })]
		})]
	});
}
function Cc({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Pe, {
		"data-guide-target": "library-policy",
		className: "w-full",
		"aria-label": J("settings:libraryPolicy.modeLabel", { name: e }),
		selectedKey: t,
		prefix: J("settings:libraryPolicy.mode"),
		renderValue: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate",
			children: xc.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: xc.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(B, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: t }), /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function wc({ name: e, value: t, onChange: n, previewsOff: r = !1 }) {
	return /* @__PURE__ */ (0, Q.jsxs)(C, {
		defaultOpen: !0,
		summary: J("settings:libraryPolicy.stepsSummary", {
			name: e,
			selected: t.length,
			total: yc.length
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": J("settings:libraryPolicy.stepsLabel", { name: e }),
			children: yc.map(([e, i]) => /* @__PURE__ */ (0, Q.jsx)(b, {
				isSelected: t.includes(e),
				isDisabled: r && e === "preview",
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: i
			}, e))
		}), r ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:libraryPolicy.previewsOff") }) : null]
	});
}
function Tc({ id: e, name: t, value: i, onChange: a }) {
	let s = (0, Z.useRef)(null), [c, u] = (0, Z.useState)(!1), d = l.find(([e]) => e === i)?.[1] || J("settings:libraryColor.none"), f = (t) => {
		a(t), It(e, t), u(!1);
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
		ref: s,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": c,
		"aria-label": J("settings:libraryColor.triggerLabel", {
			name: t || J("settings:mediaLibraries.untitled"),
			color: d
		}),
		title: d,
		onClick: () => u(!0),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: J("settings:libraryColor.label")
			}),
			i ? /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": i
			}) : /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: d })
		]
	}), /* @__PURE__ */ (0, Q.jsx)(r, {
		getContainer: () => Mt(s.current),
		children: /* @__PURE__ */ (0, Q.jsx)(n, {
			triggerRef: s,
			isOpen: c,
			onOpenChange: u,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: pe,
			children: /* @__PURE__ */ (0, Q.jsxs)(o, {
				"aria-label": J("settings:libraryColor.dialogLabel", { name: t || J("settings:mediaLibraries.untitled") }),
				className: "outline-none",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: J("settings:libraryColor.choose")
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !i,
						title: J("settings:libraryColor.none"),
						"aria-label": J("settings:libraryColor.none"),
						onClick: () => f(""),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), l.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === i,
						title: t,
						"aria-label": t,
						onClick: () => f(e),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
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
var Ec = "/api/configuration/push-discovery", Dc = "/api/configuration/push-discovery/secret";
function Oc({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, d] = (0, Z.useState)(e), p = (e, n) => {
		r(e), d(e), a(e.prefixes), s(""), t(n);
	}, m = (e, t) => a((n) => n.map((n, r) => r === e ? {
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
		c.run("save", (e) => W(Ec, t, "POST", e), (e) => p(e, J("settings:shared.settingsSaved")), (e) => s(q(e)));
	}, g = () => {
		c.run("secret", (e) => W(Dc, {}, "POST", e), (e) => p(e, J("settings:pushDiscovery.secretRotated")), (e) => s(q(e)));
	}, _ = [
		J("settings:pushDiscovery.ingestedCount", { count: u.queue.ingested }),
		u.queue.failed ? J("settings:pushDiscovery.failedCount", { count: u.queue.failed }) : "",
		u.queue.pending ? J("settings:pushDiscovery.pendingCount", { count: u.queue.pending }) : ""
	].filter(Boolean).join(J("shell:format.clauseSeparator")), v = u.local_running ? J("settings:pushDiscovery.monitoring", { paths: Et(u.local_roots) }) : (u.local_message ? K(u, "local_message") : "") || J("settings:pushDiscovery.notRunningDetail");
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "pushDiscovery",
		guide: "discovery",
		title: J("settings:fileDiscovery.title"),
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: J("settings:pushDiscovery.localMonitoring")
				}), /* @__PURE__ */ (0, Q.jsx)(Be, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? J("settings:shared.notEnabled") : u.local_running ? J("settings:shared.running") : J("settings:pushDiscovery.notRunning")
				})]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(L, { children: [
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:fileDiscovery.autoImport"),
					description: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: J("settings:fileDiscovery.autoImportHelp") }), u.enabled ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "block",
						children: _
					}) : null] }),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:fileDiscovery.autoImport"),
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:fileDiscovery.monitorLocal"),
					description: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: J("settings:fileDiscovery.monitorLocalHelp") }), u.enabled && u.watch_local ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "block",
						children: v
					}) : null] }),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:fileDiscovery.monitorLocal"),
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:fileDiscovery.cloudNotify"),
					description: J("settings:fileDiscovery.cloudNotifyHelp"),
					children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
						"aria-label": J("settings:fileDiscovery.cloudNotify"),
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, Q.jsx)(V, {
					label: J("settings:fileDiscovery.webhookConfig"),
					description: u.config_toml ? J("settings:pushDiscovery.webhookHelp") : u.origin ? J("settings:pushDiscovery.noSecret") : J("settings:pushDiscovery.needsLanUrl")
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(I, {
					tone: "error",
					title: J("settings:pushDiscovery.lastImportFailed"),
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, Q.jsxs)(C, {
						summary: J("settings:fileDiscovery.viewConfig"),
						children: [/* @__PURE__ */ (0, Q.jsx)(yn, {
							code: u.config_toml,
							language: "toml",
							label: J("settings:pushDiscovery.configLabel"),
							bounded: !1,
							copyLabel: J("settings:pushDiscovery.copyConfig"),
							onCopy: () => t(J("settings:pushDiscovery.configCopied"))
						}), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:pushDiscovery.invalidPasteHelp") })]
					})
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(ne, { children: J("settings:pushDiscovery.cloudPrefixes") }),
						/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:pushDiscovery.cloudPrefixesHelp") }),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							role: "group",
							"aria-label": J("settings:pushDiscovery.cloudPrefixes"),
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(F, {
										className: "min-w-0 flex-1",
										"aria-label": J("settings:pushDiscovery.prefixLabel", { index: t + 1 }),
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => m(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Pe, {
										"aria-label": J("settings:pushDiscovery.prefixRootLabel", { index: t + 1 }),
										prefix: J("settings:pushDiscovery.mapsTo"),
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && m(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, Q.jsx)(f, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: le,
										"aria-label": J("settings:pushDiscovery.removeRow"),
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(f, {
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
			o || c.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(N, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				onClick: g,
				disabled: !n.available,
				...G(c.busy === "secret"),
				children: J("settings:fileDiscovery.rotateSecret")
			}) : null, /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				disabled: !n.available,
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
async function kc(e) {
	let t;
	try {
		t = await ht();
	} catch {
		return !0;
	}
	if (!Lt(t)) return !0;
	let { confirmed: n } = await ot({
		title: J("settings:mediaLibraries.processingRunning"),
		body: Wt(t, e),
		confirmLabel: J("settings:mediaLibraries.saveAnyway")
	});
	return n;
}
var Ac = (e) => $r.find(([t]) => t === e)?.[1] ?? e, jc = [...$r, ["smb", J("settings:mediaLibraries.smbShare")]], Mc = (e) => e.library_icon || gc(e.transport === "smb" ? "smb" : e.location)[0], Nc = async (e) => Pt(e, (e) => W(he, e)), Pc = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), Fc = (e) => e.library_stages ? bc.filter((t) => e.library_stages.split(",").includes(t)) : [], Ic = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: Bt(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function Lc(e) {
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
		library_id: e.library_id || Bt(),
		cost: e.cost ?? en(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => Ic(e));
}
var Rc = (e) => !(e instanceof d) || e.status !== 400 ? null : $e(e.body) ?? null;
function zc({ data: e, receipt: t }) {
	let n = !e.section_errors?.media_sources && !e.section_errors?.library_count, r = !!e.media_sources?.some((e) => ri(e.location));
	return (0, Z.useEffect)(() => {
		if (n && e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of Lc(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			Vt("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		n && t && Vt("discovery", {
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
	]), /* @__PURE__ */ (0, Q.jsx)(di, { entries: [
		n && {
			id: "library-folders",
			label: J("settings:libraryFolders.title"),
			content: e.editable ? /* @__PURE__ */ (0, Q.jsx)(Bc, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "neutral",
				title: J("settings:mediaLibraries.readOnly"),
				children: e.notice
			})
		},
		n && !e.editable && !!e.media_sources && {
			id: "library-mounts",
			label: J("settings:mountStatus.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(Hc, { data: e })
		},
		n && r && {
			id: "library-cloud-proxy",
			label: J("settings:cloudProxy.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(Ys, { receipt: t })
		},
		n && e.push_discovery && {
			id: "library-discovery",
			label: J("settings:fileDiscovery.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(Oc, {
				initial: e.push_discovery,
				receipt: t
			})
		},
		{
			id: "library-code-patterns",
			label: J("settings:codePatterns.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(rc, { receipt: t })
		},
		{
			id: "library-video-previews",
			label: J("settings:videoPreviews.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(fc, { receipt: t })
		},
		{
			id: "library-transcoding",
			label: J("settings:transcoding.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(mc, { receipt: t })
		},
		{
			id: "library-task-speed",
			label: J("settings:taskSpeed.title"),
			content: /* @__PURE__ */ (0, Q.jsx)(oc, { receipt: t })
		}
	] });
}
function Bc({ data: e, receipt: t }) {
	let { checked: n, checkFailed: r } = _n(), { rows: i, edit: a, add: o, remove: s, errors: c, setErrors: l, picking: u, pick: d, inputRef: p } = ai({
		initial: () => Lc(e),
		blank: () => Ic(),
		pickFolder: Nc,
		describe: q
	}), [m, h] = (0, Z.useState)(!1), g = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => gt(e)
	}, zt).data?.metadata_only === !0, [_, y] = (0, Z.useState)(!1), [x, S] = (0, Z.useState)(""), [C, w] = (0, Z.useState)({}), [T, E] = (0, Z.useState)(null), ee = (0, Z.useRef)(e.revision), D = (0, Z.useRef)(!1), O = Y();
	an();
	let te = (e, t) => {
		i.forEach((n, r) => {
			n.library_id === i[e].library_id && a(r, t);
		});
	}, A = sn([...i.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], (e) => e.library_id), [j, M] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!j) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(j)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), M(null);
	}, [j]);
	let ne = (e, t) => {
		let n = i.find((e) => e.library_id === t);
		if (n) {
			a(e, Pc(n));
			return;
		}
		let r = Bt();
		a(e, {
			library_id: r,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), M(r);
	};
	(0, Z.useEffect)(() => {
		if (!T) return;
		let e = setTimeout(() => location.assign(T.url), Us);
		return () => clearTimeout(e);
	}, [T]);
	let re = (e) => {
		e.preventDefault();
		let t = i.findIndex((e) => !e.cost);
		if (t >= 0) {
			y(!0);
			let n = e.currentTarget;
			requestAnimationFrame(() => n.querySelector(`[data-media-read-policy="${t}"] button`)?.focus());
		} else O.busy || D.current || (S(""), D.current = !0, kc(m).then((e) => {
			D.current = !1, e && ie();
		}));
	}, ie = () => {
		O.run("save", (t) => W(v, {
			revision: ee.current,
			media_dirs: i.map((e) => e.path),
			...e.media_sources ? { media_sources: i } : {},
			port: String(e.port),
			scan_now: m
		}, "POST", t), (e) => {
			ee.current = e.revision, l([]), t(J("settings:shared.settingsSaved")), E(e);
		}, (e) => {
			let t = Rc(e);
			l(t?.media_dirs ?? []), (!t || t.port) && S(t?.port || q(e));
		});
	};
	if (T) return /* @__PURE__ */ (0, Q.jsx)(R, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsxs)(I, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [
				J("settings:mediaLibraries.restartingRedirect"),
				/* @__PURE__ */ (0, Q.jsx)(ce, {
					href: T.url,
					size: "small",
					children: J("settings:mediaLibraries.goToCollection")
				}),
				J("shell:format.period")
			]
		}) })
	});
	let oe = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), se = i.some((e) => ri(e.location)), le = se ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "media",
		title: J("settings:libraryFolders.title"),
		onSubmit: re,
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
			/* @__PURE__ */ (0, Q.jsx)(Sc, {}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				role: "group",
				"aria-label": J("settings:libraryFolders.title"),
				className: "flex flex-col gap-4",
				children: A.map((e) => {
					let t = i.findIndex((t) => t.library_id === e.library_id), l = i.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), m = e.library_policy, h = e.library || J("settings:mediaLibraries.untitled");
					return /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: tt({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(vc, {
										label: J("settings:mediaLibraries.iconLabel", { name: h }),
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => te(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(F, {
										className: "w-full",
										"aria-label": J("settings:mediaLibraries.nameLabel", { name: h }),
										maxLength: 80,
										placeholder: J("settings:mediaLibraries.namePlaceholder"),
										value: e.library,
										onChange: (e) => te(t, { library: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Tc, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => te(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Cc, {
										name: h,
										value: m,
										onChange: (n) => te(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || bc.join(",") : ""
										})
									})
								]
							}),
							m === "custom" ? /* @__PURE__ */ (0, Q.jsx)(wc, {
								name: h,
								value: Fc(e),
								previewsOff: g,
								onChange: (e) => te(t, { library_stages: bc.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": J("settings:mediaLibraries.directoriesLabel", { name: h }),
								children: [l.map(({ row: t, index: o }) => /* @__PURE__ */ (0, Q.jsxs)(Qr, {
									label: J("settings:mediaLibraries.directoryLabel", { index: o + 1 }),
									path: t.path,
									onPath: (e) => a(o, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: c[o],
									inputRef: p(o),
									picking: u === o,
									onPick: () => void d(o),
									onRemove: i.length > 1 ? () => s(o) : void 0,
									status: oe(t) ? /* @__PURE__ */ (0, Q.jsx)(Vc, { online: oe(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, Q.jsxs)(Zr, { children: [
										/* @__PURE__ */ (0, Q.jsx)(ni, {
											index: o,
											value: t.transport === "smb" ? "smb" : t.location,
											options: jc,
											onChange: (e) => {
												let n = e === "smb";
												a(o, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), w((e) => {
													let t = { ...e };
													return delete t[o], t;
												});
											}
										}),
										/* @__PURE__ */ (0, Q.jsx)(ei, {
											index: o,
											cost: t.cost,
											onChange: (e) => a(o, { cost: e }),
											error: _ && !t.cost ? J("settings:mediaLibraries.readPolicyRequired") : void 0
										}),
										t.root_id && !oe(t) ? /* @__PURE__ */ (0, Q.jsx)(Xr, {
											label: J("settings:mediaLibraries.changeType"),
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, Q.jsxs)(z, {
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
												children: [/* @__PURE__ */ (0, Q.jsx)(B, {
													id: "relocate",
													children: J("settings:mediaLibraries.relocate")
												}), /* @__PURE__ */ (0, Q.jsx)(B, {
													id: "add",
													children: J("settings:mediaLibraries.addAnother")
												})]
											})
										}) : null,
										A.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(Xr, {
											label: J("settings:mediaLibraries.moveTo"),
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, Q.jsxs)(z, {
												className: "w-full",
												"aria-label": J("settings:mediaLibraries.moveToLabel", { index: o + 1 }),
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, Q.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: Mc(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
														className: "truncate",
														children: h
													})]
												}),
												onSelectionChange: (e) => {
													e && ne(o, String(e));
												},
												children: [A.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
													id: e.library_id,
													textValue: e.library || J("settings:mediaLibraries.untitled"),
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: Mc(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
															className: "truncate",
															children: e.library || J("settings:mediaLibraries.untitled")
														})]
													})
												}, e.library_id)), l.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(B, {
													id: "new",
													textValue: J("settings:mediaLibraries.newLibrary"),
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: J("settings:mediaLibraries.newLibrary") })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, Q.jsxs)(Zr, { children: [/* @__PURE__ */ (0, Q.jsx)(Xr, {
												label: J("settings:smbShare.account"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(F, {
													"aria-label": J("settings:smbShare.accountLabel", { index: o + 1 }),
													value: t.smb_username || "",
													autoComplete: "off",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, Q.jsx)(Xr, {
												label: J("settings:smbShare.password"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(F, {
													"aria-label": J("settings:smbShare.passwordLabel", { index: o + 1 }),
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? J("settings:smbShare.keepPassword") : "",
													isDisabled: t.smb_clear,
													onChange: (e) => a(o, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, Q.jsx)(b, {
												isSelected: t.smb_encrypt || !1,
												isDisabled: t.smb_clear,
												onChange: (e) => a(o, { smb_encrypt: e }),
												children: J("settings:smbShare.requireEncryption")
											}),
											/* @__PURE__ */ (0, Q.jsx)(b, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => a(o, { smb_clear: e }),
												children: J("settings:smbShare.removeAccount")
											}),
											/* @__PURE__ */ (0, Q.jsx)(f, {
												className: "self-start",
												variant: "secondary",
												...G(O.busy === `smb-${o}`),
												onClick: () => void O.run(`smb-${o}`, (e) => W("/api/configuration/smb/test", t, "POST", e), (e) => {
													let t = J("settings:smbShare.readable");
													w((n) => ({
														...n,
														[o]: {
															message: t,
															directories: e.directories
														}
													})), n(t);
												}, (e) => {
													let t = q(e);
													w((e) => ({
														...e,
														[o]: {
															message: t,
															directories: []
														}
													})), r(J("settings:connectionCheck.action", { service: "SMB" }), t);
												}),
												children: J("settings:smbShare.testConnection")
											}),
											C[o] ? /* @__PURE__ */ (0, Q.jsx)(P, { children: C[o].message }) : null,
											C[o]?.directories.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
												"aria-label": J("settings:smbShare.subdirectoryLabel", { index: o + 1 }),
												placeholder: J("settings:smbShare.openSubdirectory"),
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (a(o, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), w((e) => ({
														...e,
														[o]: {
															message: J("settings:smbShare.testSubdirectory"),
															directories: []
														}
													})));
												},
												children: C[o].directories.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:smbShare.help") })
										]
									}) : null]
								}, o)), /* @__PURE__ */ (0, Q.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, Q.jsx)(f, {
										variant: "secondary",
										"aria-label": J("settings:mediaLibraries.addDirectoryLabel", { name: h }),
										onClick: () => {
											o(), a(i.length, {
												...Pc(e),
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
			/* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				className: "self-start",
				onClick: o,
				children: J("settings:mediaLibraries.addLibrary")
			}),
			/* @__PURE__ */ (0, Q.jsx)(P, { children: ae }),
			se ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ti, {}), /* @__PURE__ */ (0, Q.jsx)(Ks, {})] }) : null,
			le.map((e) => /* @__PURE__ */ (0, Q.jsxs)(P, { children: [
				J("settings:mediaLibraries.dependencyMissingName", { name: e.name }),
				J("shell:format.sentenceGap"),
				/* @__PURE__ */ (0, Q.jsxs)(k, {
					href: e.download_url,
					children: [
						J("settings:shared.download"),
						" ",
						e.name
					]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, Q.jsx)(b, {
				isSelected: m,
				onChange: h,
				children: J("settings:mediaLibraries.scanAfterSave")
			}),
			x ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: x
			}) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(N, {
			status: J("settings:libraryFolders.restartNotice"),
			children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				...G(O.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		})]
	});
}
function Vc({ online: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(vn, { online: e });
}
function Hc({ data: e }) {
	let t = e.media_sources, n = Y(), { checked: r, checkFailed: i } = _n();
	return t ? /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "mounts",
		title: J("settings:mountStatus.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(M, { children: t.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ze, { mark: ii(e.location) }), Ac(e.location)] }),
				children: [e.path || J("settings:mountStatus.notConfigured"), /* @__PURE__ */ (0, Q.jsx)(Vc, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => pt(e), (e) => {
					zt.setQueryData(g, e), !e.section_errors?.media_sources && e.media_sources ? r(J("settings:mountStatus.refreshed")) : i(J("settings:mountStatus.refresh"), e.section_errors?.media_sources?.message || J("settings:shared.notFound"));
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
function Uc({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(F, {
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
	}), /* @__PURE__ */ (0, Q.jsx)(F, {
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
var Wc = {
	legacy: J("settings:accessPassword.legacyHelp"),
	locked: J("settings:accessPassword.lockedHelp"),
	password: J("settings:accessPassword.passwordHelp")
};
function Gc({ initial: e, receipt: t, devices: n, after: r, onSaved: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(!1), [_, v] = (0, Z.useState)({}), y = (0, Z.useRef)(null), x = Y(), S = (e) => {
		e.preventDefault();
		let n = {};
		a.mode === "password" && !s && (n.current_password = J("settings:accessPassword.enterCurrent")), h || ((l.length < 8 || l.length > 256) && (n.password = J("settings:accessPassword.lengthError")), l !== p && (n.confirmation = J("settings:accessPassword.mismatch"))), v(n), Object.keys(n).length ? requestAnimationFrame(() => y.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : x.run("save", (e) => W("/api/configuration/access", {
			revision: a.revision,
			action: h ? "disable" : "set",
			confirm_disable: h,
			current_password: s,
			password: h ? "" : l,
			confirmation: h ? "" : p
		}, "POST", e), (e) => {
			o(e), c(""), u(""), m(""), g(!1), v({}), i?.(e), t(e.mode === "open" ? J("settings:accessPassword.turnedOff") : J("settings:shared.settingsSaved"));
		}, (e) => {
			let t = e instanceof d ? e.body : null, n = $e(t) || $e(t?.detail);
			n ? v(n) : x.setError(q(e));
		});
	}, C = Wc[a.mode], w = a.mode !== "locked";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsxs)(R, {
			guide: "access",
			title: J("settings:accessPassword.title"),
			onSubmit: S,
			children: [/* @__PURE__ */ (0, Q.jsx)("div", {
				ref: y,
				children: /* @__PURE__ */ (0, Q.jsxs)(H, { children: [
					C ? /* @__PURE__ */ (0, Q.jsx)(P, { children: C }) : null,
					a.mode === "open" ? /* @__PURE__ */ (0, Q.jsx)(I, {
						tone: "warning",
						title: J("settings:accessPassword.notSet"),
						children: J("settings:accessPassword.openWarning")
					}) : null,
					a.mode === "password" || a.mode === "legacy" ? /* @__PURE__ */ (0, Q.jsx)(b, {
						isSelected: h,
						onChange: g,
						children: J("settings:accessPassword.turnOff")
					}) : null,
					a.mode === "password" ? /* @__PURE__ */ (0, Q.jsx)(F, {
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
					w && !h ? /* @__PURE__ */ (0, Q.jsx)(Uc, {
						label: a.mode === "password" ? J("settings:accessPassword.new") : J("settings:accessPassword.set"),
						password: l,
						confirmation: p,
						onPassword: u,
						onConfirmation: m,
						passwordError: _.password,
						confirmationError: _.confirmation,
						passwordHint: J("settings:accessPassword.newHelp")
					}) : null,
					h ? /* @__PURE__ */ (0, Q.jsx)(I, {
						tone: "warning",
						title: J("settings:accessPassword.scope"),
						children: J("settings:accessPassword.disableWarning")
					}) : null,
					x.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: x.error }) : null
				] })
			}), w ? /* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				...G(x.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) }) : null]
		}),
		n && (a.mode === "password" || a.mode === "legacy") ? n(a) : null,
		r ? r(a) : null
	] });
}
// src/react/settings/api-token-settings.tsx
var Kc = "/api/configuration/access/token/rotate";
function qc(e, t) {
	let n = J("settings:accessToken.scriptsInvalidated"), r = J(e === "legacy" ? "settings:accessToken.rotateEffectLegacy" : e === "open" ? "settings:accessToken.rotateEffectOpen" : "settings:accessToken.rotateEffectPassword", { scripts: n });
	return t ? J("settings:accessToken.rotateEffectPaired", { sentence: r }) : r;
}
function Jc({ initial: e, mode: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(null), s = Y(), c = cn();
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:accessToken.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
			/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:accessToken.help") }),
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(F, {
							className: "min-w-0 flex-1",
							label: J("settings:accessToken.newToken"),
							value: a.token,
							isReadOnly: !0,
							autoComplete: "off"
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							"aria-label": J("settings:accessToken.copyNew"),
							onClick: () => void s.run("copy", () => navigator.clipboard.writeText(a.token), () => n(J("settings:accessToken.copied"))),
							children: J("settings:accessToken.copy")
						})]
					}),
					s.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
						role: "status",
						children: J("settings:accessToken.copyFailed")
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(I, {
						tone: "info",
						title: J("settings:accessToken.shownOnce"),
						children: J("settings:accessToken.shownOnceHelp")
					})
				]
			}) : null,
			a?.relogin ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "warning",
				title: J("settings:accessToken.reloginTitle"),
				children: J("settings:accessToken.reloginHelp")
			}) : null,
			r.rotatable ? null : /* @__PURE__ */ (0, Q.jsx)(P, { children: r.reason })
		] }), r.rotatable ? /* @__PURE__ */ (0, Q.jsx)(N, {
			status: J("settings:accessToken.immediate"),
			children: /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				onClick: () => void ot({
					title: J("settings:accessToken.rotateTitle"),
					body: qc(t, r.paired),
					confirmLabel: J("settings:accessToken.rotate"),
					onConfirm: async () => {
						let e = await W(Kc, {});
						i(e), o(e), e.mode === "legacy" && c.invalidateQueries({ queryKey: ["access-sessions"] }), n(e.signed_out ? J("settings:accessToken.rotatedSignedOut", { count: e.signed_out }) : J("settings:accessToken.rotated"));
					}
				}),
				children: J("settings:accessToken.rotate")
			})
		}) : null]
	});
}
// src/react/settings/certificate-trust.tsx
function Yc({ rows: e, label: t }) {
	let n = e.length + 8, r = e.flatMap((e, t) => [...e].flatMap((e, n) => e === "1" ? [`M${n + 4} ${t + 4}h1v1h-1z`] : [])).join("");
	return /* @__PURE__ */ (0, Q.jsx)("svg", {
		role: "img",
		"aria-label": t,
		viewBox: `0 0 ${n} ${n}`,
		shapeRendering: "crispEdges",
		className: "size-40 shrink-0 rounded-lg bg-white text-black",
		children: /* @__PURE__ */ (0, Q.jsx)("path", {
			d: r,
			fill: "currentColor"
		})
	});
}
var Xc = [
	[J("settings:certificateTrust.iosDevices"), J("settings:certificateTrust.iosSteps")],
	["Android", J("settings:certificateTrust.androidSteps")],
	[J("settings:certificateTrust.computer"), J("settings:certificateTrust.computerSteps")]
];
function Zc({ initial: e }) {
	let t = X({
		queryKey: ["ca-certificate"],
		initialData: e,
		queryFn: ({ signal: e }) => U("/api/configuration/certificate", e),
		staleTime: Infinity,
		refetchInterval: Math.max(60, e.expires_in - 60) * 1e3
	}).data, n = t.fingerprint.split(":"), r = [
		0,
		8,
		16,
		24
	].map((e) => n.slice(e, e + 8).join(":"));
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:certificateTrust.title"),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:certificateTrust.help") }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-start gap-4",
				children: [/* @__PURE__ */ (0, Q.jsx)(Yc, {
					rows: t.qr,
					label: J("settings:certificateTrust.qrLabel")
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-1 basis-64 flex-col gap-2",
					children: [/* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
						term: J("settings:certificateTrust.fingerprint"),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "flex max-w-sm flex-wrap justify-end gap-x-2 font-mono text-caption-1-regular",
							children: r.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "whitespace-nowrap",
								children: e
							}, t))
						})
					}), /* @__PURE__ */ (0, Q.jsx)(j, {
						term: J("settings:certificateTrust.validUntil"),
						children: t.not_after
					})] }), /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:certificateTrust.qrHelp") })]
				})]
			})] }),
			/* @__PURE__ */ (0, Q.jsx)(L, { children: Xc.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(V, {
				label: e,
				description: t
			}, e)) }),
			/* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:certificateTrust.verifyHelp") })
			}),
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(p, {
				href: t.download,
				download: "peach-local-ca.crt",
				leadingIcon: mn,
				children: J("settings:certificateTrust.download")
			}) })
		]
	});
}
// src/react/settings/device-sessions.tsx
var Qc = "/api/configuration/access/sessions", $c = (e) => e.device || J("settings:deviceSessions.unknownBrowser"), el = {
	glyph: ie,
	brand: "apple"
}, tl = {
	glyph: Dt,
	brand: "android"
}, nl = {
	iPhone: {
		platform: el,
		terminal: Ye
	},
	iPad: {
		platform: el,
		terminal: O
	},
	Android: {
		platform: tl,
		terminal: Ye
	},
	"Android tablet": {
		platform: tl,
		terminal: O,
		label: () => J("settings:deviceSessions.androidTablet")
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: hn
	},
	Windows: {
		platform: {
			glyph: qe,
			brand: "windows"
		},
		terminal: hn
	},
	macOS: {
		platform: el,
		terminal: hn
	},
	Linux: { terminal: hn }
}, rl = "inline size-4 -mt-0.5 mr-1 align-middle";
function il({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, Q.jsx)(oi, {
		name: e.browser,
		className: rl
	});
	let { glyph: t, brand: n } = e;
	return /* @__PURE__ */ (0, Q.jsx)(t, {
		"aria-hidden": !0,
		"data-platform-mark": n,
		className: rl
	});
}
function al({ row: e }) {
	if (!e.device) return $c(e);
	let t = e.device.split(" · "), n = nl[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? nl[n].platform : void 0;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [si(r) ? /* @__PURE__ */ (0, Q.jsx)(oi, {
			name: r,
			className: rl
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i ? /* @__PURE__ */ (0, Q.jsx)(il, { platform: i }) : null, nl[n].label?.() ?? n] }) : null
	] });
}
function ol({ row: e }) {
	let t = nl[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? ut;
	return /* @__PURE__ */ (0, Q.jsx)(t, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
function sl({ row: e, children: t }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, Q.jsx)(ol, { row: e }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, Q.jsx)(al, { row: e })
				}), /* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ul(e)
				})]
			})]
		}), t]
	});
}
function cl(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? J("settings:deviceSessions.justNow") : n < 3600 ? J("settings:deviceSessions.minutesAgo", { count: Math.floor(n / 60) }) : n < 86400 ? J("settings:deviceSessions.hoursAgo", { count: Math.floor(n / 3600) }) : n < 2592e3 ? J("settings:deviceSessions.daysAgo", { count: Math.floor(n / 86400) }) : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString(Ct);
}
function ll(e) {
	return e.network === "loopback" ? J("settings:deviceSessions.loopback") : e.network ? e.remote ? J("settings:deviceSessions.viaRemoteAccess", { network: e.network }) : e.network : "";
}
var ul = (e) => [J("settings:deviceSessions.lastActive", { time: cl(e.last_seen) }), ll(e)].filter(Boolean).join(" · ");
function dl({ revision: e, receipt: t }) {
	let n = X({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => U(Qc, e)
	});
	return n.error ? /* @__PURE__ */ (0, Q.jsx)(R, {
		title: J("settings:signedInDevices.title"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(n.error) }) })
	}) : n.isFetching || !n.data ? /* @__PURE__ */ (0, Q.jsx)(Me, {
		label: J("settings:deviceSessions.loading"),
		html: dt
	}) : /* @__PURE__ */ (0, Q.jsx)(fl, {
		initial: n.data,
		receipt: t
	});
}
function fl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e);
	(0, Z.useEffect)(() => r(e), [e]);
	let i = n.sessions.filter((e) => !e.current);
	(0, Z.useEffect)(() => {
		Vt("devices", {
			rows: Math.min(n.sessions.length, 8),
			manageable: n.manageable && i.length > 0
		});
	}, [n, i.length]);
	let a = (e) => void ot({
		title: J("settings:deviceSessions.revokeTitle"),
		body: J("settings:deviceSessions.revokeBody", {
			device: $c(e),
			details: ul(e)
		}),
		confirmLabel: J("settings:deviceSessions.revokeConfirm"),
		onConfirm: async () => {
			r(await W(`${Qc}/revoke`, {
				revision: n.revision,
				id: e.id
			})), t(J("settings:deviceSessions.revoked"));
		}
	});
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:signedInDevices.title"),
		children: [
			n.sessions.length ? /* @__PURE__ */ (0, Q.jsx)(L, { children: n.sessions.map((e) => /* @__PURE__ */ (0, Q.jsx)(sl, {
				row: e,
				children: e.current ? /* @__PURE__ */ (0, Q.jsx)(x, {
					color: "blue",
					variant: "caption",
					children: J("settings:deviceSessions.thisDevice")
				}) : n.manageable ? /* @__PURE__ */ (0, Q.jsx)(f, {
					size: "small",
					variant: "secondary",
					"aria-label": J("settings:deviceSessions.revokeDevice", { device: $c(e) }),
					onClick: () => a(e),
					children: J("settings:deviceSessions.revoke")
				}) : null
			}, e.id)) }) : /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:deviceSessions.empty") }) }),
			!n.manageable && i.length ? /* @__PURE__ */ (0, Q.jsx)(H, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:deviceSessions.serverOnly") })
			}) : null,
			n.manageable && i.length ? /* @__PURE__ */ (0, Q.jsx)(N, {
				status: J("settings:signedInDevices.passwordChangeNotice"),
				children: /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: () => void ot({
						title: J("settings:deviceSessions.revokeOthersTitle"),
						body: J("settings:deviceSessions.revokeOthersBody", { count: i.length }),
						confirmLabel: J("settings:deviceSessions.revokeConfirm"),
						onConfirm: async () => {
							let e = await W(`${Qc}/revoke`, {
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
var pl = [{
	value: "0.0.0.0",
	label: J("settings:accessAddress.lanDevices")
}, {
	value: "127.0.0.1",
	label: J("settings:accessAddress.thisComputerOnly")
}];
function ml({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, p] = (0, Z.useState)({}), [m, h] = (0, Z.useState)(null), g = Y();
	return (0, Z.useEffect)(() => {
		if (!m) return;
		let e = setTimeout(() => location.assign(m.url), Us);
		return () => clearTimeout(e);
	}, [m]), m ? /* @__PURE__ */ (0, Q.jsx)(R, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsxs)(I, {
			tone: "success",
			title: J("settings:shared.configSaved"),
			children: [J("settings:accessAddress.restarting"), /* @__PURE__ */ (0, Q.jsx)(ce, {
				href: m.url,
				size: "small",
				children: J("settings:accessAddress.backToNetwork")
			})]
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "port",
		title: J("settings:accessUrls.title"),
		onSubmit: r ? (r) => {
			r.preventDefault(), p({}), g.run("save", (t) => W(v, {
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
				let t = e instanceof d && e.status === 400 ? $e(e.body) : null;
				t && (t.port || t.host || t.mdns_name) ? p(t) : g.setError(q(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
			n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(hl, {
				label: J("settings:accessAddress.localUrl"),
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)(hl, {
					label: J("settings:accessAddress.phoneUrl"),
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, Q.jsx)(hl, {
					label: J("settings:accessAddress.alternateIp"),
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(P, { children: [J("settings:accessAddress.sameWifi"), n.ip_url && n.lan_url ? J("settings:accessAddress.tryIp") : ""] })
			] }) : /* @__PURE__ */ (0, Q.jsx)(P, { children: n.scope === "local" ? J("settings:accessAddress.localOnly") : J("settings:accessAddress.lanUnavailable") })] }) : null,
			r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ms, {
				id: "configHost",
				label: J("settings:accessAddress.whoCanConnect"),
				value: i,
				onChange: a,
				options: pl,
				isDisabled: !!g.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, Q.jsx)(D, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, Q.jsx)(hs, {
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
			}) : null] }) : null, /* @__PURE__ */ (0, Q.jsx)(hs, {
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
			})] }) : /* @__PURE__ */ (0, Q.jsx)(P, { children: e.notice || J("settings:accessAddress.managedByStartup") }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("settings:accessAddress.phoneUrlAfterRestart") }) : null,
			g.error ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("settings:shared.notSaved"),
				children: g.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, Q.jsx)(N, {
			status: J("settings:accessUrls.restartNotice"),
			children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				...G(g.busy === "save"),
				children: J("settings:shared.saveSettings")
			})
		}) : null]
	});
}
function hl({ label: e, value: t, receipt: n }) {
	let r = Y();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(F, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, Q.jsx)(f, {
				variant: "secondary",
				"aria-label": J("settings:accessAddress.copyLabel", { label: e }),
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n(J("settings:accessAddress.copied"))),
				children: J("settings:accessAddress.copyUrl")
			})]
		}), r.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
			role: "status",
			children: J("settings:accessAddress.copyFailed")
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var gl = [
	["environment", J("settings:peachProxy.environment")],
	["direct", J("settings:cloudProxy.direct")],
	["proxy", J("settings:shared.custom")]
];
function _l({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(z, {
		"aria-label": n ? void 0 : J("settings:peachProxy.mode"),
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: gl.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
			id: e,
			children: t
		}, e))
	});
}
function vl({ id: e, value: t, onChange: n, saved: r = !1, required: i, error: a }) {
	return /* @__PURE__ */ (0, Q.jsx)(F, {
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
var yl = 2e3, bl = 3e5, xl = [["quick", J("settings:cloudflareTunnel.quick")], ["named", J("settings:cloudflareTunnel.named")]], Sl = {
	quick: J("settings:remoteAccess.quickHelp"),
	named: J("settings:remoteAccess.namedHelp")
};
function Cl({ revision: e, initial: t, receipt: n, blocked: r = !1 }) {
	let [i, a] = (0, Z.useState)(t);
	(0, Z.useEffect)(() => {
		r && a((e) => e.state === "stopped" ? e : {
			...e,
			enabled: !1,
			state: "stopped",
			url: ""
		});
	}, [r]);
	let [o, s] = (0, Z.useState)(e), [l, u] = (0, Z.useState)(t.mode), [p, m] = (0, Z.useState)(t.hostname), [h, _] = (0, Z.useState)(""), [v, y] = (0, Z.useState)({}), b = Y(), x = i.state === "starting" || i.state === "running", S = i.named_available && l === "named";
	(0, Z.useEffect)(() => {
		if (i.state !== "starting") return;
		let e = new AbortController();
		return Ft({
			signal: e.signal,
			everyMs: yl,
			limitMs: bl,
			read: (e) => pt(e),
			apply: (e) => {
				e.tunnel && (zt.setQueryData(g, e), a(e.tunnel), s(e.revision));
			},
			done: (e) => !!e.tunnel && e.tunnel.state !== "starting"
		}), () => e.abort();
	}, [i.state]);
	let C = (e, t, n) => {
		y({}), b.run(e, (e) => W("/api/configuration/tunnel", {
			revision: o,
			enabled: t,
			mode: l,
			hostname: p,
			token: h
		}, "POST", e), (e) => {
			a(e), s(e.revision), u(e.mode), m(e.hostname), _(""), n(e);
		}, (e) => {
			let t = e instanceof d ? e.body : null, n = $e(t) || $e(t?.detail);
			n ? y(n) : b.setError(q(e));
		});
	};
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		id: "tunnel",
		guide: "tunnel",
		title: J("settings:remoteAccess.title"),
		onSubmit: (e) => {
			e.preventDefault(), C("save", x, () => n(J("settings:shared.settingsSaved")));
		},
		aside: /* @__PURE__ */ (0, Q.jsx)(Be, {
			tone: i.error ? "error" : x ? "progress" : "neutral",
			children: i.error ? J("settings:cloudflareTunnel.connectionFailed") : i.state === "running" ? J("settings:shared.running") : i.state === "starting" ? J("settings:cloudflareTunnel.connectingStatus") : J("settings:shared.stopped")
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
			i.named_available ? /* @__PURE__ */ (0, Q.jsx)(Ne, {
				"aria-label": J("settings:cloudflareTunnel.modeLabel"),
				value: l,
				isDisabled: x || r,
				onChange: (e) => u(e),
				className: ke,
				children: xl.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(c, {
					value: e,
					className: Oe,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(P, { children: Sl[S ? "named" : "quick"] }),
			S ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(F, {
				id: "tunnel-hostname",
				label: J("settings:remoteAccess.hostname"),
				autoComplete: "off",
				maxLength: 253,
				value: p,
				onChange: m,
				isDisabled: x || r,
				validationBehavior: "aria",
				isInvalid: !!v.hostname,
				hint: v.hostname || J("settings:remoteAccess.hostnameHelp")
			}), /* @__PURE__ */ (0, Q.jsx)(F, {
				id: "tunnel-token",
				type: "password",
				label: J("settings:remoteAccess.tunnelToken"),
				autoComplete: "off",
				maxLength: 2048,
				value: h,
				onChange: _,
				isDisabled: x || r,
				validationBehavior: "aria",
				hint: i.token_set ? J("settings:cloudflareTunnel.tokenSaved") : J("settings:cloudflareTunnel.tokenHint")
			})] }) : null,
			i.available ? null : /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "warning",
				title: J("settings:cloudflareTunnel.binaryMissing"),
				children: J("settings:cloudflareTunnel.binaryMissingHelp")
			}),
			i.state === "running" && i.url ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "info",
				title: J("settings:cloudflareTunnel.publicUrl"),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: i.url,
					children: i.url
				})
			}) : null,
			i.state === "starting" ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "info",
				title: J("settings:cloudflareTunnel.connectingTitle"),
				children: J("settings:cloudflareTunnel.connectingHelp")
			}) : null,
			i.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: K(i, "error") }) : null,
			b.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: b.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsxs)(N, { children: [/* @__PURE__ */ (0, Q.jsx)(f, {
			variant: i.named_available ? "secondary" : "primary",
			onClick: () => C("toggle", !x, (e) => n(e.enabled ? J("settings:cloudflareTunnel.started") : J("settings:cloudflareTunnel.stopped"))),
			...G(b.busy === "toggle"),
			disabled: r && !x,
			children: J(x ? "settings:cloudflareTunnel.stop" : "settings:remoteAccess.start")
		}), i.named_available ? /* @__PURE__ */ (0, Q.jsx)(f, {
			type: "submit",
			...G(b.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) : null] })]
	});
}
// src/react/settings/network-settings.tsx
function wl({ data: e, receipt: t, panel: n, issues: r }) {
	let [i, a] = (0, Z.useState)(e.access?.mode), o = i === "open" || i === "locked";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...ui(n),
		children: [r, /* @__PURE__ */ (0, Q.jsx)(di, { entries: [
			(!!e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources) && {
				id: "network-addresses",
				label: J("settings:accessUrls.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(ml, {
					data: e,
					receipt: t
				})
			},
			e.access && {
				id: "network-access",
				label: J("settings:accessPassword.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Gc, {
					initial: e.access,
					receipt: t,
					onSaved: (e) => a(e.mode),
					devices: (e) => /* @__PURE__ */ (0, Q.jsx)(dl, {
						revision: e.revision,
						receipt: t
					}),
					after: e.api_token ? (n) => /* @__PURE__ */ (0, Q.jsx)(Jc, {
						initial: e.api_token,
						mode: n.mode,
						receipt: t
					}) : void 0
				})
			},
			e.certificate && {
				id: "network-certificate",
				label: J("settings:certificateTrust.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Zc, { initial: e.certificate })
			},
			e.tunnel && {
				id: "network-tunnel",
				label: J("settings:remoteAccess.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Cl, {
					revision: e.revision,
					initial: e.tunnel,
					receipt: t,
					blocked: o
				})
			},
			e.peach_proxy && {
				id: "peachProxy",
				label: J("settings:peachProxy.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Tl, {
					initial: e.peach_proxy,
					receipt: t
				})
			}
		] })]
	});
}
function Tl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
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
			/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
				label: J("settings:peachProxy.mode"),
				description: J("settings:peachProxy.modeHelp"),
				children: /* @__PURE__ */ (0, Q.jsx)(_l, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, Q.jsxs)(H, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, Q.jsx)(vl, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, Q.jsx)(I, {
						tone: "warning",
						title: J("settings:peachProxy.chooseMode"),
						children: J("settings:peachProxy.modeConflict")
					}) : null,
					c.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
				type: "submit",
				...G(c.busy === "save"),
				children: J("settings:shared.saveSettings")
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var El = J("follow:sourceCredentials.clearBody"), Dl = J("follow:sourceCredentials.worldReadable");
function Ol(e, t) {
	return (e.shared_fields || []).includes(t) ? J("follow:sourceCredentials.fromSharedHint") : e.fields.includes(t) ? J("follow:sourceCredentials.savedHint") : J("follow:sourceCredentials.notSet");
}
function kl({ row: e }) {
	if (st(e)) return /* @__PURE__ */ (0, Q.jsx)(x, {
		variant: "caption",
		color: "lime",
		children: J("follow:sourceCredentials.configured")
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, Q.jsx)(x, {
		variant: "caption",
		color: t,
		children: y[e.requirement] || ""
	});
}
function Al({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)({}), [a, o] = (0, Z.useState)(""), s = st(e), c = on({
		mutationFn: (t) => Gt(e.provider, t),
		onSuccess: (e, t) => {
			e.note ? o(Jt(e.note_code ?? "", e.note)) : (o(""), i({}), zt.invalidateQueries({
				queryKey: te,
				exact: !0
			}), n(Object.keys(t).length ? J("follow:sourceCredentials.saved") : J("follow:sourceCredentials.cleared")));
		},
		onError: (e) => o(q(e))
	}), l = () => {
		let e = Object.fromEntries(Object.entries(r).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? c.mutate(e) : o(J("follow:sourceCredentials.nothingEntered"));
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(P, { children: [K(e, "why"), e.where ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [" ", /* @__PURE__ */ (0, Q.jsx)(k, {
				href: e.where,
				children: J("follow:sourceCredentials.getCredentials")
			})] }) : null] }),
			e.howto ? /* @__PURE__ */ (0, Q.jsx)(P, { children: K(e, "howto") }) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, Q.jsx)(F, {
					type: "password",
					label: n,
					placeholder: Ol(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t,
					value: r[n] || "",
					onChange: (e) => i({
						...r,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [s ? /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "danger",
					disabled: t,
					...G(c.isPending),
					onClick: () => void ot({
						title: J("follow:sourceCredentials.clearTitle"),
						body: El,
						confirmLabel: J("follow:sourceCredentials.clearTitle"),
						danger: !0,
						holdToConfirm: !0,
						onConfirm: () => c.mutateAsync({})
					}),
					children: J("follow:shared.clear")
				}) : null, /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "primary",
					disabled: t,
					...G(c.isPending),
					onClick: l,
					children: J("follow:shared.saveSettings")
				})]
			}),
			a ? /* @__PURE__ */ (0, Q.jsx)(D, { children: a }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, Q.jsx)(P, { children: J("follow:sourceCredentials.sharedFieldsHint", {
				count: e.shared_fields.length,
				fields: Et(e.shared_fields)
			}) }) : null,
			e.path ? /* @__PURE__ */ (0, Q.jsx)(C, {
				summary: J("follow:sourceCredentials.credentialsFile"),
				children: /* @__PURE__ */ (0, Q.jsx)(be, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: n
				})
			}) : null
		]
	});
}
function jl({ row: e, readOnly: t, toast: n }) {
	let r = /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, Q.jsx)(ci, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, Q.jsx)(kl, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(x, {
				variant: "caption",
				color: "rose",
				children: J("follow:sourceCredentials.missingField", { field: e })
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [r, e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsx)(P, { children: K(e, "why") }) : null]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)(C, {
				summary: st(e) ? J("follow:sourceCredentials.editCredentials") : J("follow:sourceCredentials.enterCredentials"),
				defaultOpen: e.requirement === "required" && !st(e),
				children: /* @__PURE__ */ (0, Q.jsx)(Al, {
					row: e,
					readOnly: t,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, Q.jsx)(I, {
				tone: "error",
				title: J("follow:sourceCredentials.permissionsTooOpen"),
				children: Dl
			}) : null
		]
	});
}
function Ml({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !st(e));
	if ((0, Z.useEffect)(() => {
		Vt("credentials", { done: i.filter(st).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, Q.jsx)(ee, {
		size: "compact",
		icon: at,
		title: J("follow:sourceCredentials.emptyTitle"),
		children: J("follow:sourceCredentials.emptyHint")
	});
	let o = a.length ? /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: J("follow:sourceCredentials.pendingCount", { count: a.length })
	}) : null, s = /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: [
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
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: tt({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(jl, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, Q.jsx)(R, {
		guide: "credentials",
		title: J("follow:sourceCredentials.sectionTitle"),
		aside: o || void 0,
		children: /* @__PURE__ */ (0, Q.jsx)(H, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: tt({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: J("follow:sourceCredentials.sectionTitle")
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
function Nl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "entry-links",
		title: J("settings:entryLinks.title"),
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => W("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t(J("settings:shared.settingsSaved"));
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [
			/* @__PURE__ */ (0, Q.jsx)(P, { children: T }),
			n.map((e) => /* @__PURE__ */ (0, Q.jsx)(F, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, Q.jsx)(Ie, {
					site: e.key,
					label: J("settings:entryLinks.siteAddress", { site: e.label })
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: E
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var Pl = "/api/configuration/indexers";
function Fl({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => U(Pl, e),
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: q(t.error) }) : t.isFetching ? /* @__PURE__ */ (0, Q.jsx)(Me, {
		label: J("settings:indexers.loading"),
		html: St
	}) : t.data ? /* @__PURE__ */ (0, Q.jsx)(Rl, {
		initial: t.data,
		receipt: e
	}) : null;
}
function Il(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function Ll({ row: e, index: t }) {
	let n = [
		e.url ? Il(e.url) : J("settings:indexers.noUrl"),
		e.enabled ? J("settings:shared.enabled") : J("settings:shared.disabled"),
		e.api_key_set && !e.clear_api_key ? J("settings:indexers.apiKeySaved") : e.api_key ? J("settings:indexers.apiKeyUnsaved") : J("settings:indexers.noApiKey")
	];
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || J("settings:indexers.defaultName", { index: t + 1 })
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
function Rl({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		Vt("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		guide: "indexers",
		title: J("settings:indexers.title"),
		onSubmit: (e) => {
			e.preventDefault(), i.run("save", (e) => W(Pl, { indexers: n }, "POST", e), (e) => {
				r(e.indexers), t(J("settings:indexers.saved"));
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(H, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(C, {
				summary: J("settings:indexers.connectHelp"),
				children: /* @__PURE__ */ (0, Q.jsxs)(P, { children: [
					J("settings:indexers.helpText"),
					" ",
					/* @__PURE__ */ (0, Q.jsx)(k, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: J("settings:indexers.setupGuide")
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(C, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, Q.jsx)(Ll, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(F, {
								label: J("settings:shared.name"),
								"aria-label": J("settings:indexers.nameLabel", { index: t + 1 }),
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(F, {
								label: J("settings:indexers.torznabUrl"),
								"aria-label": J("settings:indexers.torznabUrlLabel", { index: t + 1 }),
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: J("settings:indexers.urlPlaceholder"),
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(F, {
								label: "API key",
								"aria-label": J("settings:indexers.apiKeyLabel", { index: t + 1 }),
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? J("settings:shared.savedLeaveBlank") : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(b, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: J("settings:shared.enable")
									}),
									e.api_key_set ? /* @__PURE__ */ (0, Q.jsx)(b, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: J("settings:indexers.clearApiKey")
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(f, {
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
		}), i.error ? /* @__PURE__ */ (0, Q.jsx)(D, { children: i.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(N, { children: [/* @__PURE__ */ (0, Q.jsx)(f, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: Bt(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: J("settings:indexers.add")
		}), /* @__PURE__ */ (0, Q.jsx)(f, {
			type: "submit",
			...G(i.busy === "save"),
			children: J("settings:shared.saveSettings")
		})] })]
	});
}
// src/react/settings/scraping-browser-settings.tsx
var zl = ["window", "headless"], Bl = (e) => J(e === "headless" ? "settings:scrapingBrowser.headless" : "settings:scrapingBrowser.window");
function Vl({ receipt: e }) {
	let t = X({
		queryKey: Ee,
		queryFn: ({ signal: e }) => vt(e),
		refetchOnMount: "always"
	}), n = on({
		mutationFn: (e) => W(De, { browser_mode: e }),
		onSuccess: (t) => {
			zt.setQueryData(Ee, (e) => e && {
				...e,
				browser_mode: t.browser_mode
			}), e(J("settings:shared.settingsSaved"));
		}
	}, zt), r = n.error || t.error;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:scrapingBrowser.title"),
		children: [/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:scrapingBrowser.mode"),
			description: J("settings:scrapingBrowser.modeHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "scrapingBrowserModeSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:scrapingBrowser.mode"),
					selectedKey: t.data?.browser_mode ?? "window",
					isDisabled: !t.data || n.isPending,
					onSelectionChange: (e) => {
						e !== null && n.mutate(String(e));
					},
					children: zl.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: e,
						children: Bl(e)
					}, e))
				})
			})
		}) }), r ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/want-search-settings.tsx
var Hl = [
	1,
	3,
	7,
	14,
	30
], Ul = [
	1,
	3,
	5,
	10,
	0
], Wl = (e) => e === 1 ? J("settings:wantSearch.daily") : J("settings:wantSearch.everyDays", { count: e }), Gl = (e) => e === 0 ? J("settings:wantSearch.never") : J("settings:wantSearch.attempts", { count: e });
function Kl({ receipt: e }) {
	let t = X({
		queryKey: Ae,
		queryFn: ({ signal: e }) => _t(e),
		refetchOnMount: "always"
	}), n = fn("want-search"), r = !t.data || n.isPending, i = (t) => n.mutate(t, { onSuccess: () => e(J("settings:shared.settingsSaved")) }), a = n.error || t.error;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:wantSearch.title"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(L, { children: [/* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:wantSearch.interval"),
			description: J("settings:wantSearch.intervalHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "wantStaleSearchDaysSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:wantSearch.interval"),
					selectedKey: String(t.data?.wantStaleSearchDays ?? 7),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleSearchDays: Number(e) });
					},
					children: Hl.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: String(e),
						children: Wl(e)
					}, e))
				})
			})
		}), /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:wantSearch.giveUp"),
			description: J("settings:wantSearch.giveUpHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "wantStaleAttemptLimitSetting",
				className: "shrink-0",
				children: /* @__PURE__ */ (0, Q.jsx)(z, {
					"aria-label": J("settings:wantSearch.giveUp"),
					selectedKey: String(t.data?.wantStaleAttemptLimit ?? 3),
					isDisabled: r,
					onSelectionChange: (e) => {
						e !== null && i({ wantStaleAttemptLimit: Number(e) });
					},
					children: Ul.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
						id: String(e),
						children: Gl(e)
					}, e))
				})
			})
		})] }), a ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(a) })
		}) : null]
	});
}
// src/react/settings/cover-fallback-settings.tsx
function ql({ receipt: e }) {
	let t = X({
		queryKey: Ae,
		queryFn: ({ signal: e }) => _t(e),
		refetchOnMount: "always"
	}), n = fn("cover-fallback"), r = n.error || t.error;
	return /* @__PURE__ */ (0, Q.jsxs)(R, {
		title: J("settings:coverFallback.title"),
		children: [/* @__PURE__ */ (0, Q.jsx)(L, { children: /* @__PURE__ */ (0, Q.jsx)(V, {
			label: J("settings:coverFallback.javdb"),
			description: J("settings:coverFallback.javdbHelp"),
			children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
				"aria-label": J("settings:coverFallback.javdb"),
				isSelected: t.data?.javdbCoverFallback === !0,
				isDisabled: !t.data || n.isPending,
				onChange: (t) => n.mutate({ javdbCoverFallback: t }, { onSuccess: () => e(J("settings:shared.settingsSaved")) })
			})
		}) }), r ? /* @__PURE__ */ (0, Q.jsx)(H, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(D, { children: q(r) })
		}) : null]
	});
}
// src/react/settings/source-settings.tsx
function Jl({ data: e, receipt: t, panel: n, issues: r }) {
	let i = X({
		queryKey: te,
		queryFn: ({ signal: e }) => mt(e),
		enabled: n?.active !== !1,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...ui(n),
		children: [r, /* @__PURE__ */ (0, Q.jsx)(di, { entries: [
			{
				id: "sources-credentials",
				label: J("follow:sourceCredentials.sectionTitle"),
				content: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					"data-guide-target": "sources",
					children: /* @__PURE__ */ (0, Q.jsx)(p, {
						href: "/sources",
						variant: "secondary",
						children: J("settings:sourceSettings.sourcesLink")
					})
				}), i.data ? /* @__PURE__ */ (0, Q.jsx)(Ml, {
					data: i.data,
					readOnly: !!e.ledger_read_only,
					toast: t,
					embedded: !0
				}) : i.error ? /* @__PURE__ */ (0, Q.jsx)(I, {
					tone: "error",
					title: J("settings:sourceSettings.credentialsFailed"),
					children: q(i.error)
				}) : n?.active === !1 ? null : /* @__PURE__ */ (0, Q.jsx)(Me, {
					label: J("settings:sourceSettings.loadingCredentials"),
					html: ct
				})] })
			},
			{
				id: "sources-follow-fetch",
				label: J("settings:followFetch.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(cc, { receipt: t })
			},
			{
				id: "sources-scraping-browser",
				label: J("settings:scrapingBrowser.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Vl, { receipt: t })
			},
			{
				id: "sources-covers",
				label: J("settings:coverFallback.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(ql, { receipt: t })
			},
			e.entry_links && {
				id: "sources-entry-links",
				label: J("settings:entryLinks.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Nl, {
					initial: e.entry_links,
					receipt: t
				})
			},
			{
				id: "sources-indexers",
				label: J("settings:indexers.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Fl, { receipt: t })
			},
			{
				id: "sources-want-search",
				label: J("settings:wantSearch.title"),
				content: /* @__PURE__ */ (0, Q.jsx)(Kl, { receipt: t })
			}
		] })]
	});
}
// src/react/settings/configuration-shape.ts
function Yl(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => m.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available,
		localDownload: !0
	};
}
function Xl(e) {
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
function Zl(e) {
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
function Ql({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X({
		queryKey: g,
		queryFn: ({ signal: e }) => pt(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, Q.jsx)(tu, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, Q.jsx)(I, {
			tone: "error",
			title: J("settings:configurationPage.loadFailedTitle"),
			children: i.error ? q(i.error) : J("settings:configurationPage.loadFailed")
		})
	});
}
function $l({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, Q.jsx)(I, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, Q.jsx)(f, {
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
var eu = 0;
function tu({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++eu}`), [c, l] = (0, Z.useState)(r), u = (0, Z.useRef)(null), d = (0, Z.useRef)(null), f = (0, Z.useRef)(c);
	(0, Z.useEffect)(() => {
		l(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Yl(e);
		t && Vt("downloads", t), Vt("network", Xl(e)), Vt("maintenance", Zl(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		let e = d.current, t = u.current, n = () => t.style.setProperty("--settings-nav-height", `${e.offsetHeight}px`);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), () => r.disconnect();
	}, []), (0, Z.useLayoutEffect)(() => {
		if (f.current === c) return;
		f.current = c;
		let e = u.current?.querySelector(".ui-board-local-nav"), t = u.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [c]);
	let p = (e) => {
		l(e), Qt(Zt(e), {
			replace: !0,
			state: Nt.navigation.location.state
		});
	}, [m, h] = (0, Z.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => h(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let g = {
		data: e,
		receipt: t
	}, v = (t) => /* @__PURE__ */ (0, Q.jsx)($l, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), y = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], b = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || y.some((t) => e.section_errors?.[t])), x = e.downloads, S = [
		{
			id: "library",
			title: _.library,
			body: (e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...ui(e),
				children: [v([
					"media_sources",
					"library_count",
					"mount_dependencies"
				]), /* @__PURE__ */ (0, Q.jsx)(zc, { ...g })]
			})
		},
		{
			id: "sources",
			title: _.subscriptions,
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Jl, {
				...g,
				panel: e,
				issues: v(["entry_links"])
			})
		},
		...x || e.section_errors?.downloads ? [{
			id: "downloads",
			title: _.downloads,
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Ni, {
				initial: x,
				receipt: t,
				panel: e,
				issues: v(["downloads"])
			})
		}] : [],
		...b ? [{
			id: "network",
			title: _.network,
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(wl, {
				...g,
				panel: e,
				issues: v(y)
			})
		}] : [],
		{
			id: "maintenance",
			title: _.maintenance,
			body: (e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...ui(e),
				children: [v([
					"startup",
					"uninstall",
					"storage",
					"remote_reporting",
					"library_sharing",
					"updates",
					"update_job",
					"automatic_updates",
					"facts"
				]), /* @__PURE__ */ (0, Q.jsx)(Rs, {
					...g,
					active: e.active,
					reopenTutorial: n
				})]
			})
		},
		{
			id: "diagnostics",
			title: _.diagnostics,
			body: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
				...ui(e),
				children: e.active ? i : null
			})
		}
	], C = Math.max(0, S.findIndex((e) => e.title === qt(c)));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: u,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: d,
			className: "ui-board-local-nav",
			"data-section-nav": "",
			children: /* @__PURE__ */ (0, Q.jsx)(Le, {
				group: "configuration",
				label: J("settings:configurationPage.sectionsLabel"),
				value: S[C].id,
				tabs: S.map(({ id: e, title: t }) => ({
					value: e,
					label: t
				})),
				sectionItems: !0,
				panelPrefix: s,
				orientation: m ? "horizontal" : "vertical",
				className: "",
				onChange: (e) => p(S.find((t) => t.id === e).title)
			})
		}), S.map(({ id: e, title: t, body: n }, r) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
			className: "ui-configgroup",
			children: t
		}), n({
			index: r,
			id: `${s}-panel-${e}`,
			labelledBy: `${s}-tab-${e}`,
			active: r === C
		})] }, t))]
	});
}
export { Ql as ConfigurationPage };

//# debugId=a05f7a59-f3a5-4cfe-a28e-c5ec05fb4746