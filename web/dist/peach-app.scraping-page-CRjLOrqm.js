(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "975ee64d-7349-4efc-b8bf-8cd6116231ff", e._sentryDebugIdIdentifier = "sentry-dbid-975ee64d-7349-4efc-b8bf-8cd6116231ff");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, CHECK_ALL_KEY as a, COVER_JOB_KEY as o, CUSTOM_SOURCES_KEY as s, CUSTOM_SOURCES_URL as c, Checkbox as l, Disclosure as u, ErrorText as d, ExternalLink as f, Fact as p, FactList as m, FieldLabel as h, Footer as g, Help as _, Input as v, IssueRow as y, LinkButton as ee, Note as b, PillTabList as x, Rows as te, SCRAPING_CHECK_ALL_URL as S, SCRAPING_CHECK_URL as ne, SCRAPING_COVER_URL as C, SCRAPING_KEY as w, SCRAPING_SETTINGS_URL as re, SEGMENT as ie, SEGMENTED_TRACK as ae, Section as T, SegmentedRadioGroup as oe, Select$1 as se, SelectField as E, SelectItem as ce, SettingsRow as le, SiteMark as D, Stack as O, StatusLabel as k, TaskProgress as A, __toESM as j, activityKind as M, apiSend as N, busyProps as P, checkText as ue, codedText as F, composingKey as I, confirmModal as de, cx as L, errorMessage as R, esc as z, fetchAmaneBridge as B, fetchCheckAllJob as V, fetchCoverJob as H, fetchCustomSources as U, fetchSources as fe, i2 as pe, interfaceLanguage as me, jobText as W, joinList as he, momentText as ge, partsLabel as _e, queryClient as G, require_jsx_runtime as ve, require_react as ye, serverLabel as be, spinnerHtml as xe, t as K, useAction as Se, useBackgroundJob as q, useHorizontalScroller as Ce, useMutation as J, useQuery as we } from "./peach-app.js";
import { ConnectionStatus as Te } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as Ee } from "./peach-app.page-QAncjzM1.js";
import { CodeBlock as De } from "./peach-app.code-block-CXu10nIP.js";
// src/react/components/section-toc.css
var Y = /* @__PURE__ */ j(ye(), 1), X = ve();
function Oe({ label: e, entries: t, children: n }) {
	let r = (0, Y.useRef)(null), i = Ce(), [a, o] = (0, Y.useState)(t[0]?.id ?? ""), s = JSON.stringify(t.map((e) => e.id));
	return (0, Y.useEffect)(() => {
		let e = 0, t = JSON.parse(s).map((e) => document.getElementById(e)).filter((e) => !!e), n = () => {
			e = 0;
			let n = t[0]?.id ?? "";
			for (let e of t) {
				let t = parseFloat(getComputedStyle(e).scrollMarginTop) + parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
				e.getBoundingClientRect().top <= t + 1 && (n = e.id);
			}
			window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2 && (n = t.at(-1)?.id ?? n), o(n);
		}, i = () => {
			e ||= requestAnimationFrame(n);
		}, a = document.getElementById(location.hash.slice(1));
		a && r.current?.contains(a) && a.scrollIntoView({ block: "start" }), n(), window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", i);
		let c = new ResizeObserver(i);
		return c.observe(r.current), () => {
			window.removeEventListener("scroll", i), window.removeEventListener("resize", i), c.disconnect(), cancelAnimationFrame(e);
		};
	}, [s]), (0, Y.useEffect)(() => {
		let e = r.current?.querySelector("nav"), t = e?.querySelector("[aria-current]");
		e && t && (t.offsetTop < e.scrollTop ? e.scrollTop = t.offsetTop : t.offsetTop + t.offsetHeight > e.scrollTop + e.clientHeight && (e.scrollTop = t.offsetTop + t.offsetHeight - e.clientHeight), t.offsetLeft < e.scrollLeft ? e.scrollLeft = t.offsetLeft : t.offsetLeft + t.offsetWidth > e.scrollLeft + e.clientWidth && (e.scrollLeft = t.offsetLeft + t.offsetWidth - e.clientWidth));
	}, [a]), /* @__PURE__ */ (0, X.jsxs)("div", {
		ref: r,
		"data-section-page": "",
		children: [/* @__PURE__ */ (0, X.jsx)("nav", {
			ref: i,
			"aria-label": e,
			"data-section-toc": "",
			children: /* @__PURE__ */ (0, X.jsx)(x, {
				"data-section-toc-items": "",
				"data-pill-nav": "",
				children: t.map((e) => /* @__PURE__ */ (0, X.jsxs)("a", {
					href: `#${e.id}`,
					"aria-current": a === e.id ? "location" : void 0,
					"data-pill-selected": a === e.id ? "" : void 0,
					"data-pill-variant": "gray",
					className: L("relative z-1 flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-body-regular text-text-secondary", "outline-none hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring", a === e.id && "text-text-primary"),
					children: [e.icon, /* @__PURE__ */ (0, X.jsx)("span", { children: e.label })]
				}, e.id))
			})
		}), /* @__PURE__ */ (0, X.jsx)("div", {
			"data-toc-content": "",
			className: "flex min-w-0 flex-col gap-8",
			children: n
		})]
	});
}
// src/react/scraping/custom-sources.tsx
var ke = [
	["code", K("manage:shared.code")],
	["title", K("manage:shared.title")],
	["studio", K("manage:customSources.fieldStudio")],
	["series", K("manage:shared.series")],
	["release_date", K("manage:shared.releaseDate")],
	["performers", K("manage:customSources.fieldPerformers")],
	["tags", K("manage:customSources.fieldTags")]
], Ae = [
	["censored", K("manage:customSources.typeCensored")],
	["amateur", K("manage:customSources.typeAmateur")],
	["uncensored", K("manage:shared.uncensored")],
	["fc2", "FC2"],
	["kmib", K("manage:customSources.typeKoreanMib")],
	["other", K("manage:shared.other")],
	["unsure", K("manage:customSources.typeUnverifiedCode")],
	["unknown", K("manage:shared.unknown")]
], je = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function Me({ receipt: e }) {
	let [t, n] = (0, Y.useState)(null), r = we({
		queryKey: s,
		queryFn: ({ signal: e }) => U(e)
	}), a = Se(), o = (e) => G.setQueryData(s, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), u = /* @__PURE__ */ (0, X.jsx)(i, {
		variant: "secondary",
		onClick: () => n(je()),
		children: K("manage:customSources.addSource")
	});
	return /* @__PURE__ */ (0, X.jsxs)(T, {
		id: "custom-sources",
		title: K("manage:customSources.title"),
		children: [
			l ? /* @__PURE__ */ (0, X.jsxs)(O, { children: [
				r.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": K("manage:customSources.loading")
				}) : null,
				r.error ? /* @__PURE__ */ (0, X.jsx)(d, { children: R(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ (0, X.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ (0, X.jsx)(k, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? K("manage:customSources.enabled") : K("manage:customSources.disabled")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: K("manage:shared.edit")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "secondary",
							...P(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => N(c, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								o(n), e(t.enabled ? K("manage:customSources.sourceDisabled") : K("manage:customSources.sourceEnabled"));
							}),
							children: t.enabled ? K("manage:customSources.disable") : K("manage:customSources.enable")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "danger",
							onClick: () => de({
								title: K("manage:customSources.deleteTitle"),
								body: K("manage:customSources.deleteBody", { name: z(t.name) }),
								confirmLabel: K("manage:customSources.deleteConfirm"),
								danger: !0,
								holdToConfirm: !0,
								onConfirm: async () => {
									o(await N(c, {
										action: "delete",
										id: t.id
									})), n(null), e(K("manage:customSources.deleted"));
								}
							}),
							children: K("manage:shared.delete")
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ (0, X.jsx)(d, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ (0, X.jsx)(g, { children: u }) : /* @__PURE__ */ (0, X.jsx)(O, { children: /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex justify-end",
				children: u
			}) }),
			t ? /* @__PURE__ */ (0, X.jsx)(Ne, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					o(t), n(null), e(K("manage:customSources.saved"));
				}
			}, t.id || "new") : null
		]
	});
}
function Ne({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, Y.useState)(e), [o, s] = (0, Y.useState)(""), [u, f] = (0, Y.useState)(""), p = (0, Y.useRef)(0), m = Se(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ (0, X.jsxs)("form", {
		"aria-label": K("manage:customSources.formLabel"),
		"aria-busy": m.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), m.run("save", (e) => N(c, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, X.jsxs)(O, { children: [
			/* @__PURE__ */ (0, X.jsx)(v, {
				label: K("manage:customSources.name"),
				value: r.name,
				maxLength: 80,
				onChange: (e) => y({ name: e })
			}),
			/* @__PURE__ */ (0, X.jsx)(v, {
				label: K("manage:customSources.endpoint"),
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => y({ endpoint: e })
			}),
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:customSources.network") }), /* @__PURE__ */ (0, X.jsx)(E, {
					id: "custom-source-network",
					label: K("manage:customSources.network"),
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", K("manage:processingTraffic.connectionDirect")], ["peach_proxy", K("manage:customSources.peachProxy")]],
					onPick: (e) => y({ network: e })
				})]
			}),
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:customSources.codeFormat") }), /* @__PURE__ */ (0, X.jsx)(E, {
					id: "custom-source-code-format",
					label: K("manage:customSources.codeFormat"),
					epoch: 0,
					value: r.code_format || "original",
					options: [
						["original", K("manage:customSources.codeAsIs")],
						["lowercase", K("manage:customSources.codeLowercase")],
						["compact", K("manage:customSources.codeNoHyphens")],
						["underscore", K("manage:customSources.codeUnderscores")]
					],
					onPick: (e) => y({ code_format: e })
				})]
			}),
			/* @__PURE__ */ (0, X.jsx)(_, { children: K("manage:customSources.help") }),
			ke.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(v, {
				label: K("manage:customSources.fieldPath", { field: t }),
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], y({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": K("manage:customSources.contentTypes"),
				children: Ae.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(l, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => y({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ (0, X.jsx)(l, {
				isSelected: r.enabled,
				onChange: (e) => y({ enabled: e }),
				children: K("manage:customSources.enableSource")
			}),
			/* @__PURE__ */ (0, X.jsx)(v, {
				label: K("manage:customSources.testCode"),
				value: o,
				onChange: (e) => {
					p.current++, s(e), f("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || I(e.nativeEvent)) return;
					e.preventDefault();
					let t = p.current;
					m.run("preview", (e) => N(c, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && f(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && m.setError(R(e));
					});
				}
			}),
			m.busy === "preview" ? /* @__PURE__ */ (0, X.jsxs)(_, {
				role: "status",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { dangerouslySetInnerHTML: { __html: xe(K("manage:customSources.testing")) } }), K("manage:customSources.testing")]
			}) : null,
			u ? /* @__PURE__ */ (0, X.jsx)(De, {
				code: u,
				language: "json",
				label: K("manage:customSources.response")
			}) : null,
			m.error ? /* @__PURE__ */ (0, X.jsx)(d, { children: m.error }) : null
		] }), /* @__PURE__ */ (0, X.jsxs)(g, { children: [/* @__PURE__ */ (0, X.jsx)(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: K("manage:shared.cancel")
		}), /* @__PURE__ */ (0, X.jsx)(i, {
			type: "submit",
			...P(m.busy === "save"),
			children: K("manage:customSources.saveSource")
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var Z = [["peach", K("manage:customSources.peachProxy")], ["direct", K("manage:sourceSettings.direct")]];
function Pe(e) {
	return Z.some(([t]) => t === e) || !e ? [...Z] : [...Z, [e, e]];
}
function Fe(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var Q = [["paste", K("manage:sourceSettings.pasteCookie")], ["file", K("manage:sourceSettings.uploadFile")]];
function Ie() {
	return /* @__PURE__ */ (0, X.jsx)(D, { source: "github" });
}
function Le({ source: t, toast: n }) {
	let [r, a] = (0, Y.useState)(t.network), [o, s] = (0, Y.useState)(""), [c, l] = (0, Y.useState)(""), [u, p] = (0, Y.useState)(""), [m, _] = (0, Y.useState)(Q[0][0]), [y, x] = (0, Y.useState)(""), [S, C] = (0, Y.useState)(""), E = (0, Y.useRef)(null);
	function A() {
		s(""), l(""), p(""), x(""), C(""), E.current && (E.current.value = "");
	}
	let j = J({
		mutationFn: (e) => N(re, {
			source: t.source,
			network: r,
			cookie: o,
			cookies_text: u,
			revoke: e,
			...c ? { api_key: c } : {}
		}),
		onSuccess: (e, r) => {
			G.setQueryData(w, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), A(), n(K(r ? t.accepts_api_key ? "manage:sourceSettings.apiKeyRemoved" : "manage:sourceSettings.cookieRevoked" : "manage:sourceSettings.saved"));
		}
	}), M = J({ mutationFn: () => N(ne, { source: t.source }) }), I = j.isPending || M.isPending, de = (e) => {
		e.preventDefault(), I || (M.reset(), j.mutate(!1));
	}, L = () => {
		I || (M.reset(), j.mutate(!0));
	}, z = () => {
		I || (j.reset(), M.mutate());
	};
	async function B(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (p(""), C(""), !n) x("");
		else if (n.size > 262144) t.value = "", x(""), C(K("manage:sourceSettings.cookieTooLarge"));
		else try {
			let e = await n.text();
			p(e), x(n.name);
		} catch {
			C(K("manage:sourceSettings.cookieFileUnread"));
		}
	}
	let V = S || (j.error ? R(j.error) : "") || (M.error ? R(M.error) : ""), H = M.data?.results ?? [], U = r === "peach" || t.accepts_cookie || t.accepts_api_key || t.browser || !!V || H.length > 0;
	return /* @__PURE__ */ (0, X.jsxs)(T, {
		id: `source-${t.source}`,
		title: F(t, "label"),
		onSubmit: de,
		aside: /* @__PURE__ */ (0, X.jsxs)("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, X.jsx)(D, { source: t.source }), t.login ? /* @__PURE__ */ (0, X.jsx)(f, {
				href: t.login,
				children: Fe(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ (0, X.jsx)(te, { children: /* @__PURE__ */ (0, X.jsx)(le, {
				label: K("manage:sourceSettings.connectionMode"),
				children: /* @__PURE__ */ (0, X.jsx)(se, {
					"aria-label": K("manage:sourceSettings.connectionMode"),
					className: "w-44 min-w-0",
					selectedKey: r,
					onSelectionChange: (e) => {
						e !== null && a(String(e));
					},
					children: Pe(r).map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(ce, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, X.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, X.jsx)(k, {
						tone: "warning",
						children: K("manage:sourceSettings.coolingDown")
					}), /* @__PURE__ */ (0, X.jsx)("span", { children: K("manage:sourceSettings.retryAfter", { time: (/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString(me) }) })]
				})
			}) : null,
			U ? /* @__PURE__ */ (0, X.jsxs)(O, {
				divided: !0,
				children: [
					r === "peach" ? /* @__PURE__ */ (0, X.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, X.jsx)(ee, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: pe,
							children: K("manage:sourceSettings.setUpProxy")
						})
					}) : null,
					t.browser ? /* @__PURE__ */ (0, X.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: K("manage:sourceSettings.browserVerification")
					}) : null,
					t.accepts_api_key ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
						/* @__PURE__ */ (0, X.jsx)("span", {
							className: "self-start",
							children: /* @__PURE__ */ (0, X.jsx)(k, {
								tone: t.api_key_saved ? "success" : "neutral",
								children: K(t.api_key_saved ? "manage:sourceSettings.apiKeySaved" : "manage:sourceSettings.apiKeyNotSet")
							})
						}),
						/* @__PURE__ */ (0, X.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							"data-copy-key": `source-settings.${t.source}.hint`,
							children: K(t.source === "theporndb" ? "manage:sourceSettings.thePornDbHint" : "manage:sourceSettings.stashDbHint")
						}),
						/* @__PURE__ */ (0, X.jsx)(v, {
							type: "password",
							label: K("manage:sourceSettings.apiKey"),
							autoComplete: "off",
							value: c,
							onChange: l
						})
					] }) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
						/* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, X.jsx)("span", {
								className: "self-start",
								children: /* @__PURE__ */ (0, X.jsx)(k, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? K("manage:sourceSettings.cookieSaved") : K("manage:sourceSettings.cookieNotSet")
								})
							}), /* @__PURE__ */ (0, X.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? K("manage:sourceSettings.signInUnverified") : K("manage:sourceSettings.provideCookieHint")
							})]
						}),
						/* @__PURE__ */ (0, X.jsx)(oe, {
							"aria-label": K("manage:sourceSettings.cookieMethod"),
							value: m,
							onChange: (e) => {
								_(e), A();
							},
							className: ae,
							children: Q.map(([t, n]) => /* @__PURE__ */ (0, X.jsx)(e, {
								value: t,
								className: ie,
								children: n
							}, t))
						}),
						m === "paste" ? /* @__PURE__ */ (0, X.jsx)(v, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: o,
							onChange: s
						}) : /* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:sourceSettings.cookieFileLabel") }),
								/* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, X.jsx)(i, {
										variant: "secondary",
										onClick: () => E.current?.click(),
										children: K("manage:sourceSettings.chooseFile")
									}), /* @__PURE__ */ (0, X.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: y || K("manage:sourceSettings.noFileChosen")
									})]
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: E,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										B(e);
									}
								})
							]
						})
					] }) : null,
					V ? /* @__PURE__ */ (0, X.jsx)(d, { children: V }) : null,
					H.map((e) => {
						let n = e.kind === "unchecked" ? "neutral" : e.ok ? "success" : "error", r = e.kind === "unchecked" ? K("manage:sourceSettings.unchecked") : e.ok ? K("manage:sourceSettings.reachable") : K("manage:sourceSettings.connectionFailed");
						return /* @__PURE__ */ (0, X.jsx)(b, {
							tone: n,
							children: /* @__PURE__ */ (0, X.jsxs)("span", {
								className: "flex flex-col items-start gap-1",
								children: [/* @__PURE__ */ (0, X.jsx)(Te, {
									tone: n,
									children: r
								}), /* @__PURE__ */ (0, X.jsx)("span", { children: ue(e, F(t, "label")) })]
							})
						}, e.label);
					})
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)(g, { children: [
				t.api_key_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: L,
					...P(I),
					children: K("manage:sourceSettings.removeApiKey")
				}) : null,
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: L,
					...P(I),
					children: K("manage:sourceSettings.revokeCookie")
				}) : null,
				/* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: z,
					...P(I),
					children: K("manage:sourceSettings.testConnection")
				}),
				/* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					...P(I),
					children: K("manage:shared.save")
				})
			] })
		]
	});
}
var Re = {
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
function ze(e, t) {
	let n = F(e, "label");
	return t.target === "cdn" ? K("manage:connectionCheck.hdImages", { source: n }) : n;
}
function Be({ toast: e }) {
	let { job: t, running: n, start: r, query: o } = q({
		queryKey: a,
		queryFn: ({ signal: e }) => V(e),
		start: () => N(S, {}),
		onFinish: (t) => {
			G.invalidateQueries({
				queryKey: w,
				exact: !0
			}), t.status === "complete" && e(t.failed ? K("manage:connectionCheck.doneWithFailures", { count: t.failed }) : K("manage:connectionCheck.doneAllReachable"));
		}
	}), s = (e) => {
		e.preventDefault(), !o.data || n || r.isPending || r.mutate();
	}, c = (t?.results ?? []).flatMap((e) => e.results.map((t) => ({
		source: e.source,
		name: ze(e, t),
		check: t
	}))), l = (e, t) => /* @__PURE__ */ (0, X.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, X.jsx)(D, { source: e }), t]
	}), d = c.filter(({ check: e }) => e.outcome === "ok"), f = c.filter(({ check: e }) => e.outcome !== "ok").sort((e, t) => $.indexOf(e.check.outcome) - $.indexOf(t.check.outcome)), h = r.error ? R(r.error) : o.error ? R(o.error) : t?.status === "failed" ? W(t, "error") || K("manage:connectionCheck.notFinished") : "", v = t?.status === "complete" && t.completed_at ? [ge((/* @__PURE__ */ new Date(t.completed_at * 1e3)).toISOString()), t.elapsed_s === void 0 ? "" : K("manage:connectionCheck.elapsed", { seconds: t.elapsed_s.toFixed(1) })].filter(Boolean).join(" · ") : "";
	return /* @__PURE__ */ (0, X.jsxs)(T, {
		id: "check-all",
		title: K("manage:connectionCheck.title"),
		onSubmit: s,
		children: [/* @__PURE__ */ (0, X.jsxs)(O, { children: [
			o.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
				role: "status",
				"aria-label": K("manage:connectionCheck.loadingStatus"),
				"data-skeleton": "",
				className: "skeleton-sheen h-6 rounded-md"
			}) : null,
			/* @__PURE__ */ (0, X.jsx)(_, { children: K("manage:connectionCheck.help") }),
			n ? /* @__PURE__ */ (0, X.jsx)(A, {
				embedded: !0,
				kind: "radar",
				value: t?.checked ?? 0,
				total: t?.total ?? 0,
				label: K("manage:connectionCheck.checkedCount", {
					checked: t?.checked ?? 0,
					count: t?.total ?? 0
				})
			}) : null,
			h ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "error",
				children: h
			}) : null,
			c.length ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: $.map((e) => {
					let t = c.filter(({ check: t }) => t.outcome === e).length;
					return t ? /* @__PURE__ */ (0, X.jsxs)(k, {
						tone: Re[e],
						children: [
							F(c.find(({ check: t }) => t.outcome === e)?.check, "outcome_label"),
							" ",
							t
						]
					}, e) : null;
				})
			}) : null,
			f.length ? /* @__PURE__ */ (0, X.jsx)("ul", {
				className: "flex min-w-0 flex-col",
				children: f.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ (0, X.jsx)(y, {
					title: l(e, t),
					children: /* @__PURE__ */ (0, X.jsxs)("span", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, X.jsx)(k, {
							tone: Re[n.outcome],
							children: F(n, "outcome_label")
						}), n.message ? /* @__PURE__ */ (0, X.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: F(n, "message")
						}) : null]
					})
				}, t))
			}) : null,
			d.length ? /* @__PURE__ */ (0, X.jsx)(u, {
				summary: K("manage:connectionCheck.reachableCount", { count: d.length }),
				children: /* @__PURE__ */ (0, X.jsx)(m, { children: d.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ (0, X.jsx)(p, {
					term: l(e, t),
					children: [n.width ? `${n.width} × ${n.height}` : "", n.elapsed_s === void 0 ? "" : K("manage:connectionCheck.seconds", { seconds: n.elapsed_s.toFixed(2) })].filter(Boolean).join(" · ")
				}, t)) })
			}) : null
		] }), /* @__PURE__ */ (0, X.jsx)(g, {
			status: v ? K("manage:connectionCheck.lastChecked", { time: v }) : void 0,
			children: /* @__PURE__ */ (0, X.jsx)(i, {
				type: "submit",
				disabled: !o.data,
				...P(n || r.isPending),
				children: K("manage:connectionCheck.checkAll")
			})
		})]
	});
}
var Ve = (e) => be(e.result_code ?? "", e.result ?? "", e.result_params), He = (e) => _e(e.error_parts, W(e, "error"));
function Ue({ toast: e }) {
	let [t, n] = (0, Y.useState)(""), { running: r, outcome: a, start: s, query: c } = q({
		queryKey: o,
		queryFn: ({ signal: e }) => H(e),
		start: () => N(C, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(Ve(t) || K("manage:hdCover.fetched"));
		}
	}), l = (e) => {
		e.preventDefault(), c.data && !r && !s.isPending && t.trim() && s.mutate();
	}, u = s.error ? R(s.error) : c.error ? R(c.error) : a?.status === "failed" ? He(a) || K("manage:hdCover.notFound") : "";
	return /* @__PURE__ */ (0, X.jsx)(T, {
		id: "hd-cover",
		title: K("manage:hdCover.title"),
		onSubmit: l,
		children: /* @__PURE__ */ (0, X.jsxs)(O, { children: [
			c.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
				role: "status",
				"aria-label": K("manage:hdCover.loadingStatus"),
				"data-skeleton": "",
				className: "skeleton-sheen h-6 rounded-md"
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, X.jsx)(v, {
						"aria-label": K("manage:hdCover.codeLabel"),
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: K("manage:hdCover.codePlaceholder")
					})
				}), /* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					disabled: !c.data || !t.trim(),
					...P(r || s.isPending),
					children: K("manage:hdCover.fetchCover")
				})]
			}),
			r ? /* @__PURE__ */ (0, X.jsx)(A, {
				embedded: !0,
				kind: M("scraping-cover"),
				label: K("manage:hdCover.fetching")
			}) : null,
			u ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "error",
				children: u
			}) : null,
			a?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "success",
				children: Ve(a) || K("manage:hdCover.fetched")
			}) : null
		] })
	});
}
function We({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = q({
		queryKey: n,
		queryFn: ({ signal: e }) => B(e),
		start: () => N(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(F(t, "result") || K("manage:amaneRuntime.rebuilt"));
		}
	}), l = J({ mutationFn: () => N(t, {}) }), d = a.data;
	if (!d) return a.error ? /* @__PURE__ */ (0, X.jsx)(T, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, X.jsx)(O, { children: /* @__PURE__ */ (0, X.jsx)(b, {
			tone: "error",
			children: R(a.error)
		}) })
	}) : null;
	let h = o || c.isPending || l.isPending, v = c.error ? R(c.error) : l.error ? R(l.error) : s?.status === "failed" ? W(s, "error") || K("manage:amaneRuntime.rebuildNotFinished") : "";
	return /* @__PURE__ */ (0, X.jsxs)(T, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, X.jsx)(f, {
			href: d.repository,
			leadingIcon: Ie,
			children: d.repository
		}),
		children: [
			/* @__PURE__ */ (0, X.jsxs)(m, { children: [
				/* @__PURE__ */ (0, X.jsx)(p, {
					term: K("manage:amaneRuntime.installedVersion"),
					children: d.installed_version || K("manage:amaneRuntime.notInstalled")
				}),
				/* @__PURE__ */ (0, X.jsx)(p, {
					term: K("manage:amaneRuntime.latestVersion"),
					children: l.data ? F(l.data, "latest") : K("manage:amaneRuntime.notChecked")
				}),
				/* @__PURE__ */ (0, X.jsx)(p, {
					term: K("manage:amaneRuntime.runtime"),
					children: d.installed ? K("manage:amaneRuntime.installed") : K("manage:amaneRuntime.notInstalled")
				}),
				/* @__PURE__ */ (0, X.jsx)(p, {
					term: K("manage:amaneRuntime.builtInSites"),
					children: K("manage:amaneRuntime.siteCount", { count: d.sites.length })
				})
			] }),
			/* @__PURE__ */ (0, X.jsxs)(O, {
				divided: !0,
				children: [
					d.sites.length ? /* @__PURE__ */ (0, X.jsx)(u, {
						summary: K("manage:amaneRuntime.showSites"),
						children: /* @__PURE__ */ (0, X.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: he(d.sites.map((e) => F(e, "label")))
						})
					}) : null,
					d.problem ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: d.problem
					}) : /* @__PURE__ */ (0, X.jsx)(_, { children: K("manage:amaneRuntime.help", {
						license: d.license,
						version: d.version
					}) }),
					o ? /* @__PURE__ */ (0, X.jsx)(A, {
						embedded: !0,
						kind: M("amane-bridge"),
						label: K("manage:amaneRuntime.rebuilding")
					}) : null,
					v ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: v
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "success",
						children: F(s, "result") || K("manage:amaneRuntime.rebuilt")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, X.jsxs)(g, { children: [/* @__PURE__ */ (0, X.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					h || l.mutate();
				},
				...P(l.isPending),
				children: K("manage:amaneRuntime.checkUpstream")
			}), /* @__PURE__ */ (0, X.jsx)(i, {
				disabled: !!d.problem,
				onClick: () => {
					h || c.mutate();
				},
				...P(o || c.isPending),
				children: d.installed ? K("manage:amaneRuntime.reinstall") : K("manage:amaneRuntime.install")
			})] })
		]
	});
}
function Ge({ toast: e }) {
	let t = we({
		queryKey: w,
		queryFn: ({ signal: e }) => fe(e)
	}), n = t.data;
	return n ? /* @__PURE__ */ (0, X.jsxs)(Ee, { children: [/* @__PURE__ */ (0, X.jsx)("p", {
		className: "text-body-2-regular text-text-secondary",
		children: K("manage:scrapingSources.proxyHint")
	}), /* @__PURE__ */ (0, X.jsxs)(Oe, {
		label: K("manage:scrapingSources.contents"),
		entries: [
			{
				id: "check-all",
				label: K("manage:connectionCheck.title")
			},
			{
				id: "hd-cover",
				label: K("manage:hdCover.title")
			},
			{
				id: "custom-sources",
				label: K("manage:customSources.title")
			},
			...(n.sources || []).map((e) => ({
				id: `source-${e.source}`,
				label: F(e, "label"),
				icon: e.source === "makers" ? void 0 : /* @__PURE__ */ (0, X.jsx)(D, { source: e.source })
			})),
			{
				id: "source-amane",
				label: "amane"
			}
		],
		children: [
			/* @__PURE__ */ (0, X.jsx)(Be, { toast: e }),
			/* @__PURE__ */ (0, X.jsx)(Ue, { toast: e }),
			/* @__PURE__ */ (0, X.jsx)(Me, { receipt: e }),
			(n.sources || []).map((t) => /* @__PURE__ */ (0, X.jsx)(Le, {
				source: t,
				toast: e
			}, t.source)),
			/* @__PURE__ */ (0, X.jsx)("div", {
				id: "source-amane",
				children: /* @__PURE__ */ (0, X.jsx)(We, { toast: e })
			})
		]
	})] }) : /* @__PURE__ */ (0, X.jsx)(Ee, { children: /* @__PURE__ */ (0, X.jsx)(b, {
		tone: "error",
		title: K("manage:scrapingSources.loadFailedTitle"),
		children: t.error ? R(t.error) : K("manage:scrapingSources.loadFailed")
	}) });
}
export { Ge as ScrapingPage, Fe as linkHost, Pe as networkOptions };

//# debugId=975ee64d-7349-4efc-b8bf-8cd6116231ff