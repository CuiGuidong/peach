(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd5cb2ec-366f-4026-a1a4-98b80923077b", e._sentryDebugIdIdentifier = "sentry-dbid-bd5cb2ec-366f-4026-a1a4-98b80923077b");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, CHECK_ALL_KEY as a, COVER_JOB_KEY as o, CUSTOM_SOURCES_KEY as s, CUSTOM_SOURCES_URL as c, Checkbox as l, Disclosure as u, ErrorText as d, ExternalLink as f, Fact as p, FactList as m, FieldLabel as h, Footer as g, Help as _, Input as v, IssueRow as y, JAVDB_BROWSER_LOGIN_URL as ee, LinkButton as te, Note as b, Rows as ne, SCRAPING_CHECK_ALL_URL as re, SCRAPING_CHECK_URL as ie, SCRAPING_COVER_URL as x, SCRAPING_KEY as S, SCRAPING_SETTINGS_URL as ae, SEGMENT as oe, SEGMENTED_TRACK as se, Section as C, SegmentedRadioGroup as ce, Select$1 as le, SelectField as w, SelectItem as ue, SettingsCard as de, SettingsRow as fe, SiteMark as T, Stack as E, StatusLabel as D, TaskProgress as O, __toESM as k, activityKind as A, apiSend as j, busyProps as M, checkText as pe, codedText as N, composingKey as P, confirmModal as F, errorMessage as I, esc as L, fetchAmaneBridge as R, fetchCheckAllJob as z, fetchCoverJob as B, fetchCustomSources as V, fetchSources as H, i2 as me, interfaceLanguage as he, jobText as U, joinList as W, momentText as ge, partsLabel as _e, queryClient as ve, require_jsx_runtime as G, require_react as ye, serverLabel as K, spinnerHtml as be, t as q, useAction as J, useBackgroundJob as Y, useMutation as X, useQuery as xe } from "./peach-app.js";
import { ActionSpinner as Se } from "./peach-app.action-spinner-DMcPV-3U.js";
import { ConnectionStatus as Ce } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as we } from "./peach-app.page-QAncjzM1.js";
import { SectionToc as Te } from "./peach-app.section-toc-hXoSYkI6.js";
import { SourceBrowserLoginButton as Ee, SourceBrowserLoginStatus as De, sourceBrowserLoginUrl as Oe, useSourceBrowserLogin as ke } from "./peach-app.source-browser-login-x7L-xBDi.js";
import { CodeBlock as Ae } from "./peach-app.code-block-BdQewVJ0.js";
// src/react/scraping/custom-sources.tsx
var Z = /* @__PURE__ */ k(ye(), 1), Q = G(), je = [
	["code", q("manage:shared.code")],
	["title", q("manage:shared.title")],
	["studio", q("manage:customSources.fieldStudio")],
	["series", q("manage:shared.series")],
	["release_date", q("manage:shared.releaseDate")],
	["performers", q("manage:customSources.fieldPerformers")],
	["tags", q("manage:customSources.fieldTags")]
], Me = [
	["censored", q("manage:customSources.typeCensored")],
	["amateur", q("manage:customSources.typeAmateur")],
	["uncensored", q("manage:shared.uncensored")],
	["fc2", "FC2"],
	["kmib", q("manage:customSources.typeKoreanMib")],
	["other", q("manage:shared.other")],
	["unsure", q("manage:customSources.typeUnverifiedCode")],
	["unknown", q("manage:shared.unknown")]
], Ne = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function Pe({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), r = xe({
		queryKey: s,
		queryFn: ({ signal: e }) => V(e)
	}), a = J(), o = (e) => ve.setQueryData(s, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), u = /* @__PURE__ */ (0, Q.jsx)(i, {
		variant: "secondary",
		onClick: () => n(Ne()),
		children: q("manage:customSources.addSource")
	});
	return /* @__PURE__ */ (0, Q.jsxs)(C, {
		id: "custom-sources",
		title: q("manage:customSources.title"),
		children: [
			l ? /* @__PURE__ */ (0, Q.jsxs)(E, { children: [
				r.isPending ? /* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": q("manage:customSources.loading")
				}) : null,
				r.error ? /* @__PURE__ */ (0, Q.jsx)(d, { children: I(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ (0, Q.jsx)(D, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? q("manage:customSources.enabled") : q("manage:customSources.disabled")
						}),
						/* @__PURE__ */ (0, Q.jsx)(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: q("manage:shared.edit")
						}),
						/* @__PURE__ */ (0, Q.jsx)(i, {
							variant: "secondary",
							...M(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => j(c, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								o(n), e(t.enabled ? q("manage:customSources.sourceDisabled") : q("manage:customSources.sourceEnabled"));
							}),
							children: t.enabled ? q("manage:customSources.disable") : q("manage:customSources.enable")
						}),
						/* @__PURE__ */ (0, Q.jsx)(i, {
							variant: "danger",
							onClick: () => F({
								title: q("manage:customSources.deleteTitle"),
								body: q("manage:customSources.deleteBody", { name: L(t.name) }),
								confirmLabel: q("manage:customSources.deleteConfirm"),
								danger: !0,
								holdToConfirm: !0,
								onConfirm: async () => {
									o(await j(c, {
										action: "delete",
										id: t.id
									})), n(null), e(q("manage:customSources.deleted"));
								}
							}),
							children: q("manage:shared.delete")
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ (0, Q.jsx)(d, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ (0, Q.jsx)(g, { children: u }) : /* @__PURE__ */ (0, Q.jsx)(E, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex justify-end",
				children: u
			}) }),
			t ? /* @__PURE__ */ (0, Q.jsx)(Fe, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					o(t), n(null), e(q("manage:customSources.saved"));
				}
			}, t.id || "new") : null
		]
	});
}
function Fe({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, Z.useState)(e), [o, s] = (0, Z.useState)(""), [u, f] = (0, Z.useState)(""), p = (0, Z.useRef)(0), m = J(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": q("manage:customSources.formLabel"),
		"aria-busy": m.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), m.run("save", (e) => j(c, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(E, { children: [
			/* @__PURE__ */ (0, Q.jsx)(v, {
				label: q("manage:customSources.name"),
				value: r.name,
				maxLength: 80,
				onChange: (e) => y({ name: e })
			}),
			/* @__PURE__ */ (0, Q.jsx)(v, {
				label: q("manage:customSources.endpoint"),
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => y({ endpoint: e })
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(h, { children: q("manage:customSources.network") }), /* @__PURE__ */ (0, Q.jsx)(w, {
					id: "custom-source-network",
					label: q("manage:customSources.network"),
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", q("manage:processingTraffic.connectionDirect")], ["peach_proxy", q("manage:customSources.peachProxy")]],
					onPick: (e) => y({ network: e })
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(h, { children: q("manage:customSources.codeFormat") }), /* @__PURE__ */ (0, Q.jsx)(w, {
					id: "custom-source-code-format",
					label: q("manage:customSources.codeFormat"),
					epoch: 0,
					value: r.code_format || "original",
					options: [
						["original", q("manage:customSources.codeAsIs")],
						["lowercase", q("manage:customSources.codeLowercase")],
						["compact", q("manage:customSources.codeNoHyphens")],
						["underscore", q("manage:customSources.codeUnderscores")]
					],
					onPick: (e) => y({ code_format: e })
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)(_, { children: q("manage:customSources.help") }),
			je.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(v, {
				label: q("manage:customSources.fieldPath", { field: t }),
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], y({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": q("manage:customSources.contentTypes"),
				children: Me.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(l, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => y({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ (0, Q.jsx)(l, {
				isSelected: r.enabled,
				onChange: (e) => y({ enabled: e }),
				children: q("manage:customSources.enableSource")
			}),
			/* @__PURE__ */ (0, Q.jsx)(v, {
				label: q("manage:customSources.testCode"),
				value: o,
				onChange: (e) => {
					p.current++, s(e), f("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || P(e.nativeEvent)) return;
					e.preventDefault();
					let t = p.current;
					m.run("preview", (e) => j(c, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && f(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && m.setError(I(e));
					});
				}
			}),
			m.busy === "preview" ? /* @__PURE__ */ (0, Q.jsxs)(_, {
				role: "status",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { dangerouslySetInnerHTML: { __html: be(q("manage:customSources.testing")) } }), q("manage:customSources.testing")]
			}) : null,
			u ? /* @__PURE__ */ (0, Q.jsx)(Ae, {
				code: u,
				language: "json",
				label: q("manage:customSources.response")
			}) : null,
			m.error ? /* @__PURE__ */ (0, Q.jsx)(d, { children: m.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsxs)(g, { children: [/* @__PURE__ */ (0, Q.jsx)(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: q("manage:shared.cancel")
		}), /* @__PURE__ */ (0, Q.jsx)(i, {
			type: "submit",
			...M(m.busy === "save"),
			children: q("manage:customSources.saveSource")
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var Ie = [["peach", q("manage:customSources.peachProxy")], ["direct", q("manage:sourceSettings.direct")]];
function Le(e) {
	return Ie.some(([t]) => t === e) || !e ? [...Ie] : [...Ie, [e, e]];
}
function Re(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var ze = [["paste", q("manage:sourceSettings.pasteCookie")], ["file", q("manage:sourceSettings.uploadFile")]], Be = [S];
function Ve() {
	return /* @__PURE__ */ (0, Q.jsx)(T, { source: "github" });
}
function He({ source: t, toast: n, open: r, onOpenChange: a }) {
	let o = t.source === "javdb", s = o || t.browser_login === !0, [c, l] = (0, Z.useState)(t.network), [p, m] = (0, Z.useState)(""), [_, y] = (0, Z.useState)(""), [re, x] = (0, Z.useState)(""), [C, w] = (0, Z.useState)(ze[0][0]), [O, k] = (0, Z.useState)(""), [A, P] = (0, Z.useState)(""), F = (0, Z.useRef)(null);
	function L() {
		m(""), y(""), x(""), k(""), P(""), F.current && (F.current.value = "");
	}
	let R = X({
		mutationFn: (e) => j(ae, {
			source: t.source,
			network: c,
			cookie: p,
			cookies_text: re,
			revoke: e,
			..._ ? { api_key: _ } : {}
		}),
		onSuccess: (e, r) => {
			ve.setQueryData(S, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), L(), n(q(r ? t.accepts_api_key ? "manage:sourceSettings.apiKeyRemoved" : "manage:sourceSettings.cookieRevoked" : "manage:sourceSettings.saved"));
		}
	}), z = X({ mutationFn: () => j(ie, {
		source: t.source,
		lookup: !0
	}) }), B = X({ mutationFn: () => j(ie, {
		source: t.source,
		verify_session: !0
	}) }), V = ke(o ? ee : Oe(t.source), s && r, Be), H = R.isPending || z.isPending || B.isPending || V.busy, U = (e) => {
		e.preventDefault(), H || (z.reset(), B.reset(), R.mutate(!1));
	}, W = () => {
		H || (z.reset(), B.reset(), R.mutate(!0));
	}, ge = () => {
		H || (R.reset(), z.mutate());
	};
	async function _e(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (x(""), P(""), !n) k("");
		else if (n.size > 262144) t.value = "", k(""), P(q("manage:sourceSettings.cookieTooLarge"));
		else try {
			let e = await n.text();
			x(e), k(n.name);
		} catch {
			P(q("manage:sourceSettings.cookieFileUnread"));
		}
	}
	let G = A || (R.error ? I(R.error) : "") || (z.error ? I(z.error) : "") || (B.error ? I(B.error) : "") || V.error, ye = z.data?.results ?? [], K = B.data?.results[0], be = c === "peach" || t.accepts_cookie || t.accepts_api_key || t.browser || !!G || ye.length > 0, J = N(t, "label"), Y = /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": J,
		noValidate: !0,
		onSubmit: U,
		className: "min-w-0 wrap-anywhere",
		children: [
			t.login ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex pb-2 pr-3",
				children: /* @__PURE__ */ (0, Q.jsx)(f, {
					href: o ? new URL("/login", t.login).href : t.login,
					children: o ? q("manage:sourceSettings.javdbSignIn") : Re(t.login)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(ne, { children: /* @__PURE__ */ (0, Q.jsx)(fe, {
				label: q("manage:sourceSettings.connectionMode"),
				children: /* @__PURE__ */ (0, Q.jsx)(le, {
					"aria-label": q("manage:sourceSettings.connectionMode"),
					className: "w-44 min-w-0",
					selectedKey: c,
					onSelectionChange: (e) => {
						e !== null && l(String(e));
					},
					children: Le(c).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(ue, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(D, {
						tone: "warning",
						children: q("manage:sourceSettings.coolingDown")
					}), /* @__PURE__ */ (0, Q.jsx)("span", { children: q("manage:sourceSettings.retryAfter", { time: (/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString(he) }) })]
				})
			}) : null,
			be ? /* @__PURE__ */ (0, Q.jsxs)(E, {
				divided: !0,
				children: [
					c === "peach" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, Q.jsx)(te, {
							href: "/settings/network#peachProxy",
							size: "small",
							trailingIcon: me,
							children: q("manage:sourceSettings.setUpProxy")
						})
					}) : null,
					t.browser ? /* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: q("manage:sourceSettings.browserVerification")
					}) : null,
					t.accepts_api_key ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "self-start",
							children: /* @__PURE__ */ (0, Q.jsx)(D, {
								tone: t.api_key_saved ? "success" : "neutral",
								children: q(t.api_key_saved ? "manage:sourceSettings.apiKeySaved" : "manage:sourceSettings.apiKeyNotSet")
							})
						}),
						/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							"data-copy-key": `source-settings.${t.source}.hint`,
							children: q(t.source === "theporndb" ? "manage:sourceSettings.thePornDbHint" : "manage:sourceSettings.stashDbHint")
						}),
						/* @__PURE__ */ (0, Q.jsx)(v, {
							type: "password",
							label: q("manage:sourceSettings.apiKey"),
							autoComplete: "off",
							value: _,
							onChange: y
						})
					] }) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
						/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("span", {
									className: "self-start",
									children: /* @__PURE__ */ (0, Q.jsx)(D, {
										tone: t.cookie_saved ? "success" : "neutral",
										children: t.cookie_saved ? q("manage:sourceSettings.cookieSaved") : q("manage:sourceSettings.cookieNotSet")
									})
								}),
								/* @__PURE__ */ (0, Q.jsx)("p", {
									className: "text-body-2-regular text-text-secondary",
									children: q(o ? "manage:sourceSettings.javdbSessionHint" : t.cookie_saved ? "manage:sourceSettings.signInUnverified" : "manage:sourceSettings.provideCookieHint")
								}),
								s ? /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, Q.jsx)(Ee, {
										login: V,
										disabled: H,
										onStart: B.reset
									}), o ? /* @__PURE__ */ (0, Q.jsx)(i, {
										variant: "secondary",
										...M(H),
										onClick: () => {
											H || (R.reset(), B.mutate());
										},
										children: q("manage:sourceSettings.testJavdbSession")
									}) : null]
								}) : null,
								/* @__PURE__ */ (0, Q.jsx)(De, {
									login: V,
									saved: t.cookie_saved
								}),
								K ? /* @__PURE__ */ (0, Q.jsx)(b, {
									tone: K.ok ? "success" : K.kind === "unchecked" ? "neutral" : "warning",
									children: pe(K, J)
								}) : null
							]
						}),
						/* @__PURE__ */ (0, Q.jsx)(ce, {
							"aria-label": q("manage:sourceSettings.cookieMethod"),
							value: C,
							onChange: (e) => {
								w(e), L();
							},
							className: se,
							children: ze.map(([t, n]) => /* @__PURE__ */ (0, Q.jsx)(e, {
								value: t,
								className: oe,
								children: n
							}, t))
						}),
						C === "paste" ? /* @__PURE__ */ (0, Q.jsx)(v, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: p,
							onChange: m
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(h, { children: q("manage:sourceSettings.cookieFileLabel") }),
								/* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, Q.jsx)(i, {
										variant: "secondary",
										onClick: () => F.current?.click(),
										children: q("manage:sourceSettings.chooseFile")
									}), /* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: O || q("manage:sourceSettings.noFileChosen")
									})]
								}),
								/* @__PURE__ */ (0, Q.jsx)("input", {
									ref: F,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										_e(e);
									}
								})
							]
						})
					] }) : null,
					G ? /* @__PURE__ */ (0, Q.jsx)(d, { children: G }) : null,
					ye.map((e) => {
						let n = e.kind === "unchecked" ? "neutral" : e.ok ? "success" : "error", r = e.target === "lookup" ? q(e.ok ? "manage:sourceSettings.sampleMatched" : "manage:sourceSettings.sampleFailed") : e.kind === "unchecked" ? q("manage:sourceSettings.unchecked") : e.ok ? q("manage:sourceSettings.reachable") : q("manage:sourceSettings.connectionFailed");
						return /* @__PURE__ */ (0, Q.jsx)(b, {
							tone: n,
							children: /* @__PURE__ */ (0, Q.jsxs)("span", {
								className: "flex flex-col items-start gap-1",
								children: [/* @__PURE__ */ (0, Q.jsx)(Ce, {
									tone: n,
									children: r
								}), /* @__PURE__ */ (0, Q.jsx)("span", { children: pe(e, N(t, "label")) })]
							})
						}, e.label);
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(g, { children: [
				t.api_key_saved ? /* @__PURE__ */ (0, Q.jsx)(i, {
					variant: "secondary",
					onClick: W,
					...M(H),
					children: q("manage:sourceSettings.removeApiKey")
				}) : null,
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, Q.jsx)(i, {
					variant: "secondary",
					onClick: W,
					...M(H),
					children: q("manage:sourceSettings.revokeCookie")
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(i, {
					variant: "secondary",
					onClick: ge,
					...M(H),
					children: q("manage:sourceSettings.testConnection")
				}),
				/* @__PURE__ */ (0, Q.jsx)(i, {
					type: "submit",
					...M(H),
					children: q("manage:shared.save")
				})
			] })
		]
	});
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		id: `source-${t.source}`,
		className: "[&_summary]:pr-3",
		children: /* @__PURE__ */ (0, Q.jsx)(de, { children: /* @__PURE__ */ (0, Q.jsx)(u, {
			isOpen: r,
			onOpenChange: a,
			trailing: !0,
			contentClassName: "pt-0",
			summary: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-2 py-3 pr-2 text-body-medium text-text-primary",
				children: [/* @__PURE__ */ (0, Q.jsx)(T, { source: t.source }), /* @__PURE__ */ (0, Q.jsx)("span", { children: J })]
			}),
			children: Y
		}) })
	});
}
var Ue = {
	ok: "success",
	auth: "warning",
	http: "error",
	cooldown: "warning",
	network: "error",
	skipped: "neutral"
}, $ = [
	"ok",
	"auth",
	"cooldown",
	"http",
	"network",
	"skipped"
];
function We(e, t) {
	let n = N(e, "label");
	return t.target === "cdn" ? q("manage:connectionCheck.hdImages", { source: n }) : n;
}
function Ge({ toast: e }) {
	let { job: t, running: n, start: r, query: o } = Y({
		queryKey: a,
		queryFn: ({ signal: e }) => z(e),
		start: () => j(re, {}),
		onFinish: (t) => {
			ve.invalidateQueries({
				queryKey: S,
				exact: !0
			}), t.status === "complete" && e(t.failed ? q("manage:connectionCheck.doneWithFailures", { count: t.failed }) : q("manage:connectionCheck.doneAllReachable"));
		}
	}), s = (e) => {
		e.preventDefault(), !o.data || n || r.isPending || r.mutate();
	}, c = (t?.results ?? []).flatMap((e) => e.results.map((t) => ({
		source: e.source,
		name: We(e, t),
		check: t
	}))), l = (e, t) => /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, Q.jsx)(T, { source: e }), t]
	}), d = c.filter(({ check: e }) => e.outcome === "ok"), f = c.filter(({ check: e }) => e.outcome !== "ok").sort((e, t) => $.indexOf(e.check.outcome) - $.indexOf(t.check.outcome)), h = r.error ? I(r.error) : o.error ? I(o.error) : t?.status === "failed" ? U(t, "error") || q("manage:connectionCheck.notFinished") : "", v = t?.status === "complete" && t.completed_at ? [ge((/* @__PURE__ */ new Date(t.completed_at * 1e3)).toISOString()), t.elapsed_s === void 0 ? "" : q("manage:connectionCheck.elapsed", { seconds: t.elapsed_s.toFixed(1) })].filter(Boolean).join(" · ") : "";
	return /* @__PURE__ */ (0, Q.jsxs)(C, {
		id: "check-all",
		title: q("manage:connectionCheck.title"),
		onSubmit: s,
		children: [/* @__PURE__ */ (0, Q.jsxs)(E, { children: [
			o.isPending ? /* @__PURE__ */ (0, Q.jsx)("div", {
				role: "status",
				"aria-label": q("manage:connectionCheck.loadingStatus"),
				"data-skeleton": "",
				className: "skeleton-sheen h-6 rounded-md"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(_, { children: q("manage:connectionCheck.help") }),
			n ? /* @__PURE__ */ (0, Q.jsx)(O, {
				embedded: !0,
				kind: "radar",
				value: t?.checked ?? 0,
				total: t?.total ?? 0,
				label: q("manage:connectionCheck.checkedCount", {
					checked: t?.checked ?? 0,
					count: t?.total ?? 0
				})
			}) : null,
			h ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				children: h
			}) : null,
			c.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: $.map((e) => {
					let t = c.filter(({ check: t }) => t.outcome === e).length;
					return t ? /* @__PURE__ */ (0, Q.jsxs)(D, {
						tone: Ue[e],
						children: [
							N(c.find(({ check: t }) => t.outcome === e)?.check, "outcome_label"),
							" ",
							t
						]
					}, e) : null;
				})
			}) : null,
			f.length ? /* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex min-w-0 flex-col",
				children: f.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ (0, Q.jsx)(y, {
					title: l(e, t),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(D, {
							tone: Ue[n.outcome],
							children: N(n, "outcome_label")
						}), n.message ? /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: N(n, "message")
						}) : null]
					})
				}, t))
			}) : null,
			d.length ? /* @__PURE__ */ (0, Q.jsx)(u, {
				summary: q("manage:connectionCheck.reachableCount", { count: d.length }),
				children: /* @__PURE__ */ (0, Q.jsx)(m, { children: d.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ (0, Q.jsx)(p, {
					term: l(e, t),
					children: [n.width ? `${n.width} × ${n.height}` : "", n.elapsed_s === void 0 ? "" : q("manage:connectionCheck.seconds", { seconds: n.elapsed_s.toFixed(2) })].filter(Boolean).join(" · ")
				}, t)) })
			}) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(g, {
			status: v ? q("manage:connectionCheck.lastChecked", { time: v }) : void 0,
			children: /* @__PURE__ */ (0, Q.jsx)(i, {
				type: "submit",
				disabled: !o.data,
				...M(n || r.isPending),
				children: q("manage:connectionCheck.checkAll")
			})
		})]
	});
}
var Ke = (e) => K(e.result_code ?? "", e.result ?? "", e.result_params), qe = (e) => _e(e.error_parts, U(e, "error"));
function Je({ toast: e }) {
	let [t, n] = (0, Z.useState)(""), { running: r, outcome: a, start: s, query: c } = Y({
		queryKey: o,
		queryFn: ({ signal: e }) => B(e),
		start: () => j(x, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(Ke(t) || q("manage:hdCover.fetched"));
		}
	}), l = (e) => {
		e.preventDefault(), c.data && !r && !s.isPending && t.trim() && s.mutate();
	}, u = s.isPending || s.isError ? null : a, d = s.error ? I(s.error) : c.error ? I(c.error) : u?.status === "failed" ? qe(u) || q("manage:hdCover.notFound") : "";
	return /* @__PURE__ */ (0, Q.jsx)(C, {
		id: "hd-cover",
		title: q("manage:hdCover.title"),
		onSubmit: l,
		children: /* @__PURE__ */ (0, Q.jsxs)(E, { children: [
			c.isPending ? /* @__PURE__ */ (0, Q.jsx)("div", {
				role: "status",
				"aria-label": q("manage:hdCover.loadingStatus"),
				"data-skeleton": "",
				className: "skeleton-sheen h-6 rounded-md"
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, Q.jsx)(v, {
						"aria-label": q("manage:hdCover.codeLabel"),
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: q("manage:hdCover.codePlaceholder")
					})
				}), /* @__PURE__ */ (0, Q.jsx)(i, {
					type: "submit",
					disabled: !c.data || !t.trim(),
					leadingIcon: s.isPending ? Se : void 0,
					...M(r || s.isPending),
					children: q("manage:hdCover.fetchCover")
				})]
			}),
			r ? /* @__PURE__ */ (0, Q.jsx)(O, {
				embedded: !0,
				kind: A("scraping-cover"),
				label: q("manage:hdCover.fetching")
			}) : null,
			d ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				children: d
			}) : null,
			u?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "success",
				children: Ke(u) || q("manage:hdCover.fetched")
			}) : null
		] })
	});
}
function Ye({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = Y({
		queryKey: n,
		queryFn: ({ signal: e }) => R(e),
		start: () => j(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(N(t, "result") || q("manage:amaneRuntime.rebuilt"));
		}
	}), l = X({ mutationFn: () => j(t, {}) }), d = a.data;
	if (!d) return a.error ? /* @__PURE__ */ (0, Q.jsx)(C, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, Q.jsx)(E, { children: /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: "error",
			children: I(a.error)
		}) })
	}) : null;
	let h = o || c.isPending || l.isPending, v = c.isPending || c.isError ? null : s, y = c.error ? I(c.error) : l.error ? I(l.error) : v?.status === "failed" ? U(v, "error") || q("manage:amaneRuntime.rebuildNotFinished") : "";
	return /* @__PURE__ */ (0, Q.jsxs)(C, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, Q.jsx)(f, {
			href: d.repository,
			leadingIcon: Ve,
			children: d.repository
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(m, { children: [
				/* @__PURE__ */ (0, Q.jsx)(p, {
					term: q("manage:amaneRuntime.installedVersion"),
					children: d.installed_version || q("manage:amaneRuntime.notInstalled")
				}),
				/* @__PURE__ */ (0, Q.jsx)(p, {
					term: q("manage:amaneRuntime.latestVersion"),
					children: l.data ? N(l.data, "latest") : q("manage:amaneRuntime.notChecked")
				}),
				/* @__PURE__ */ (0, Q.jsx)(p, {
					term: q("manage:amaneRuntime.runtime"),
					children: d.installed ? q("manage:amaneRuntime.installed") : q("manage:amaneRuntime.notInstalled")
				}),
				/* @__PURE__ */ (0, Q.jsx)(p, {
					term: q("manage:amaneRuntime.builtInSites"),
					children: q("manage:amaneRuntime.siteCount", { count: d.sites.length })
				})
			] }),
			/* @__PURE__ */ (0, Q.jsxs)(E, {
				divided: !0,
				children: [
					d.sites.length ? /* @__PURE__ */ (0, Q.jsx)(u, {
						summary: q("manage:amaneRuntime.showSites"),
						children: /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: W(d.sites.map((e) => N(e, "label")))
						})
					}) : null,
					d.problem ? /* @__PURE__ */ (0, Q.jsx)(b, {
						tone: "error",
						children: d.problem
					}) : /* @__PURE__ */ (0, Q.jsx)(_, { children: q("manage:amaneRuntime.help", {
						license: d.license,
						version: d.version
					}) }),
					o ? /* @__PURE__ */ (0, Q.jsx)(O, {
						embedded: !0,
						kind: A("amane-bridge"),
						label: q("manage:amaneRuntime.rebuilding")
					}) : null,
					y ? /* @__PURE__ */ (0, Q.jsx)(b, {
						tone: "error",
						children: y
					}) : null,
					v?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(b, {
						tone: "success",
						children: N(v, "result") || q("manage:amaneRuntime.rebuilt")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(g, { children: [/* @__PURE__ */ (0, Q.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					h || l.mutate();
				},
				...M(l.isPending),
				children: q("manage:amaneRuntime.checkUpstream")
			}), /* @__PURE__ */ (0, Q.jsx)(i, {
				disabled: !!d.problem,
				onClick: () => {
					h || c.mutate();
				},
				leadingIcon: c.isPending ? Se : void 0,
				...M(o || c.isPending),
				children: d.installed ? q("manage:amaneRuntime.reinstall") : q("manage:amaneRuntime.install")
			})] })
		]
	});
}
var Xe = [
	{
		id: "western",
		sources: [
			"stashdb",
			"theporndb",
			"vixen-network"
		]
	},
	{
		id: "japanese",
		sources: [
			"r18dev",
			"dmm",
			"prestige",
			"mgstage",
			"faleno",
			"dahlia",
			"makers",
			"1pondo",
			"javdb",
			"javbus",
			"airav",
			"avsox",
			"avbase",
			"freejavbt"
		]
	},
	{
		id: "fc2",
		sources: [
			"fc2",
			"fc2cmadb",
			"fc2ppvdb",
			"fc2club",
			"javten",
			"javarchive"
		]
	},
	{
		id: "people",
		sources: [
			"avwikidb",
			"minnano-av",
			"instagram"
		]
	},
	{
		id: "resources",
		sources: ["manko", "sukebei"]
	}
];
function Ze({ id: e, title: t, children: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: e,
		"aria-label": t,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
			className: "px-3 text-title-3-medium text-text-primary",
			children: /* @__PURE__ */ (0, Q.jsx)("span", { children: t })
		}), n]
	});
}
function Qe({ toast: e }) {
	let t = xe({
		queryKey: S,
		queryFn: ({ signal: e }) => H(e)
	}), [n, r] = (0, Z.useState)(() => /* @__PURE__ */ new Set([location.hash.slice(1)])), i = (0, Z.useCallback)((e, t) => {
		e.startsWith("source-") && !e.startsWith("source-group-") && r((n) => {
			if (n.has(e) === t) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []);
	(0, Z.useEffect)(() => {
		let e = () => i(location.hash.slice(1), !0);
		return window.addEventListener("hashchange", e), () => window.removeEventListener("hashchange", e);
	}, [i]);
	let a = t.data;
	if (!a) return /* @__PURE__ */ (0, Q.jsx)(we, { children: /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: q("manage:scrapingSources.loadFailedTitle"),
		children: t.error ? I(t.error) : q("manage:scrapingSources.loadFailed")
	}) });
	let o = Xe.map(({ id: e, sources: t }) => ({
		id: `source-group-${e}`,
		title: q(`manage:scrapingSources.groups.${e}`),
		sources: t.flatMap((e) => {
			let t = a.sources.find((t) => t.source === e);
			return t ? [t] : [];
		})
	})), s = new Set(o.flatMap((e) => e.sources.map((e) => e.source))), c = a.sources.filter((e) => !s.has(e.source));
	c.length && o.push({
		id: "source-group-other",
		title: q("manage:scrapingSources.groups.other"),
		sources: c
	});
	let l = o.filter((e) => e.sources.length), u = q("manage:scrapingSources.groups.tools");
	return /* @__PURE__ */ (0, Q.jsxs)(we, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-body-2-regular text-text-secondary",
		children: q("manage:scrapingSources.proxyHint")
	}), /* @__PURE__ */ (0, Q.jsxs)(Te, {
		label: q("manage:scrapingSources.contents"),
		entries: [...l.map((e) => ({
			id: e.id,
			label: e.title
		})), {
			id: "source-tools",
			label: u
		}],
		children: [l.map((t) => /* @__PURE__ */ (0, Q.jsx)(Ze, {
			id: t.id,
			title: t.title,
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex flex-col gap-2",
				children: t.sources.map((t) => /* @__PURE__ */ (0, Q.jsx)(He, {
					source: t,
					toast: e,
					open: n.has(`source-${t.source}`),
					onOpenChange: (e) => i(`source-${t.source}`, e)
				}, t.source))
			})
		}, t.id)), /* @__PURE__ */ (0, Q.jsx)(Ze, {
			id: "source-tools",
			title: u,
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(Ge, { toast: e }),
					/* @__PURE__ */ (0, Q.jsx)(Je, { toast: e }),
					/* @__PURE__ */ (0, Q.jsx)(Pe, { receipt: e }),
					/* @__PURE__ */ (0, Q.jsx)("div", {
						id: "source-amane",
						children: /* @__PURE__ */ (0, Q.jsx)(Ye, { toast: e })
					})
				]
			})
		})]
	})] });
}
export { Qe as ScrapingPage, Re as linkHost, Le as networkOptions };

//# debugId=bd5cb2ec-366f-4026-a1a4-98b80923077b