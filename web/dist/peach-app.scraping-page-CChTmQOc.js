(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3c2af1c-3a22-43ab-b6d2-a1c4b176728a", e._sentryDebugIdIdentifier = "sentry-dbid-c3c2af1c-3a22-43ab-b6d2-a1c4b176728a");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, CHECK_ALL_KEY as a, COVER_JOB_KEY as o, CUSTOM_SOURCES_KEY as s, CUSTOM_SOURCES_URL as c, Checkbox as l, Disclosure as u, ErrorText as d, ExternalLink as f, Fact as p, FactList as m, FieldLabel as h, Footer as g, Help as _, Input as v, IssueRow as y, LinkButton as ee, Note as b, PillTabList as x, Rows as te, SCRAPING_CHECK_ALL_URL as ne, SCRAPING_CHECK_URL as re, SCRAPING_COVER_URL as ie, SCRAPING_KEY as S, SCRAPING_SETTINGS_URL as ae, SEGMENT as oe, SEGMENTED_TRACK as se, Section as C, SegmentedRadioGroup as ce, Select$1 as le, SelectField as w, SelectItem as ue, SettingsCard as de, SettingsRow as fe, SiteMark as T, Stack as E, StatusLabel as D, TaskProgress as O, __toESM as k, activityKind as A, apiSend as j, busyProps as M, checkText as pe, codedText as N, composingKey as P, confirmModal as F, cx as I, errorMessage as L, esc as me, fetchAmaneBridge as R, fetchCheckAllJob as z, fetchCoverJob as B, fetchCustomSources as V, fetchSources as H, i2 as he, interfaceLanguage as ge, jobText as U, joinList as W, momentText as _e, partsLabel as ve, queryClient as G, require_jsx_runtime as ye, require_react as be, serverLabel as xe, spinnerHtml as Se, t as K, useAction as Ce, useBackgroundJob as q, useHorizontalScroller as we, useMutation as J, useQuery as Te } from "./peach-app.js";
import { ConnectionStatus as Ee } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as De } from "./peach-app.page-QAncjzM1.js";
import { CodeBlock as Oe } from "./peach-app.code-block-CXu10nIP.js";
// src/react/components/section-toc.css
var Y = /* @__PURE__ */ k(be(), 1), X = ye();
function ke({ label: e, entries: t, children: n }) {
	let r = (0, Y.useRef)(null), i = we(), [a, o] = (0, Y.useState)(t[0]?.id ?? ""), s = JSON.stringify(t.map((e) => e.id));
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
					className: I("relative z-1 flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-body-regular text-text-secondary", "outline-none hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring", a === e.id && "text-text-primary"),
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
var Ae = [
	["code", K("manage:shared.code")],
	["title", K("manage:shared.title")],
	["studio", K("manage:customSources.fieldStudio")],
	["series", K("manage:shared.series")],
	["release_date", K("manage:shared.releaseDate")],
	["performers", K("manage:customSources.fieldPerformers")],
	["tags", K("manage:customSources.fieldTags")]
], je = [
	["censored", K("manage:customSources.typeCensored")],
	["amateur", K("manage:customSources.typeAmateur")],
	["uncensored", K("manage:shared.uncensored")],
	["fc2", "FC2"],
	["kmib", K("manage:customSources.typeKoreanMib")],
	["other", K("manage:shared.other")],
	["unsure", K("manage:customSources.typeUnverifiedCode")],
	["unknown", K("manage:shared.unknown")]
], Me = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function Ne({ receipt: e }) {
	let [t, n] = (0, Y.useState)(null), r = Te({
		queryKey: s,
		queryFn: ({ signal: e }) => V(e)
	}), a = Ce(), o = (e) => G.setQueryData(s, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), u = /* @__PURE__ */ (0, X.jsx)(i, {
		variant: "secondary",
		onClick: () => n(Me()),
		children: K("manage:customSources.addSource")
	});
	return /* @__PURE__ */ (0, X.jsxs)(C, {
		id: "custom-sources",
		title: K("manage:customSources.title"),
		children: [
			l ? /* @__PURE__ */ (0, X.jsxs)(E, { children: [
				r.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": K("manage:customSources.loading")
				}) : null,
				r.error ? /* @__PURE__ */ (0, X.jsx)(d, { children: L(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ (0, X.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ (0, X.jsx)(D, {
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
							...M(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => j(c, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								o(n), e(t.enabled ? K("manage:customSources.sourceDisabled") : K("manage:customSources.sourceEnabled"));
							}),
							children: t.enabled ? K("manage:customSources.disable") : K("manage:customSources.enable")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "danger",
							onClick: () => F({
								title: K("manage:customSources.deleteTitle"),
								body: K("manage:customSources.deleteBody", { name: me(t.name) }),
								confirmLabel: K("manage:customSources.deleteConfirm"),
								danger: !0,
								holdToConfirm: !0,
								onConfirm: async () => {
									o(await j(c, {
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
			t ? null : l ? /* @__PURE__ */ (0, X.jsx)(g, { children: u }) : /* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex justify-end",
				children: u
			}) }),
			t ? /* @__PURE__ */ (0, X.jsx)(Pe, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					o(t), n(null), e(K("manage:customSources.saved"));
				}
			}, t.id || "new") : null
		]
	});
}
function Pe({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, Y.useState)(e), [o, s] = (0, Y.useState)(""), [u, f] = (0, Y.useState)(""), p = (0, Y.useRef)(0), m = Ce(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ (0, X.jsxs)("form", {
		"aria-label": K("manage:customSources.formLabel"),
		"aria-busy": m.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), m.run("save", (e) => j(c, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, X.jsxs)(E, { children: [
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
				children: [/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:customSources.network") }), /* @__PURE__ */ (0, X.jsx)(w, {
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
				children: [/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:customSources.codeFormat") }), /* @__PURE__ */ (0, X.jsx)(w, {
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
			Ae.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(v, {
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
				children: je.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(l, {
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
						t === p.current && m.setError(L(e));
					});
				}
			}),
			m.busy === "preview" ? /* @__PURE__ */ (0, X.jsxs)(_, {
				role: "status",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { dangerouslySetInnerHTML: { __html: Se(K("manage:customSources.testing")) } }), K("manage:customSources.testing")]
			}) : null,
			u ? /* @__PURE__ */ (0, X.jsx)(Oe, {
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
			...M(m.busy === "save"),
			children: K("manage:customSources.saveSource")
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var Z = [["peach", K("manage:customSources.peachProxy")], ["direct", K("manage:sourceSettings.direct")]];
function Fe(e) {
	return Z.some(([t]) => t === e) || !e ? [...Z] : [...Z, [e, e]];
}
function Ie(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var Le = [["paste", K("manage:sourceSettings.pasteCookie")], ["file", K("manage:sourceSettings.uploadFile")]];
function Re() {
	return /* @__PURE__ */ (0, X.jsx)(T, { source: "github" });
}
function ze({ source: t, toast: n, open: r, onOpenChange: a }) {
	let [o, s] = (0, Y.useState)(t.network), [c, l] = (0, Y.useState)(""), [p, m] = (0, Y.useState)(""), [_, y] = (0, Y.useState)(""), [x, ne] = (0, Y.useState)(Le[0][0]), [ie, C] = (0, Y.useState)(""), [w, O] = (0, Y.useState)(""), k = (0, Y.useRef)(null);
	function A() {
		l(""), m(""), y(""), C(""), O(""), k.current && (k.current.value = "");
	}
	let P = J({
		mutationFn: (e) => j(ae, {
			source: t.source,
			network: o,
			cookie: c,
			cookies_text: _,
			revoke: e,
			...p ? { api_key: p } : {}
		}),
		onSuccess: (e, r) => {
			G.setQueryData(S, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), A(), n(K(r ? t.accepts_api_key ? "manage:sourceSettings.apiKeyRemoved" : "manage:sourceSettings.cookieRevoked" : "manage:sourceSettings.saved"));
		}
	}), F = J({ mutationFn: () => j(re, { source: t.source }) }), I = P.isPending || F.isPending, me = (e) => {
		e.preventDefault(), I || (F.reset(), P.mutate(!1));
	}, R = () => {
		I || (F.reset(), P.mutate(!0));
	}, z = () => {
		I || (P.reset(), F.mutate());
	};
	async function B(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (y(""), O(""), !n) C("");
		else if (n.size > 262144) t.value = "", C(""), O(K("manage:sourceSettings.cookieTooLarge"));
		else try {
			let e = await n.text();
			y(e), C(n.name);
		} catch {
			O(K("manage:sourceSettings.cookieFileUnread"));
		}
	}
	let V = w || (P.error ? L(P.error) : "") || (F.error ? L(F.error) : ""), H = F.data?.results ?? [], U = o === "peach" || t.accepts_cookie || t.accepts_api_key || t.browser || !!V || H.length > 0, W = N(t, "label"), _e = /* @__PURE__ */ (0, X.jsxs)("form", {
		"aria-label": W,
		noValidate: !0,
		onSubmit: me,
		className: "min-w-0 wrap-anywhere",
		children: [
			t.login ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex pb-2 pr-3",
				children: /* @__PURE__ */ (0, X.jsx)(f, {
					href: t.login,
					children: Ie(t.login)
				})
			}) : null,
			/* @__PURE__ */ (0, X.jsx)(te, { children: /* @__PURE__ */ (0, X.jsx)(fe, {
				label: K("manage:sourceSettings.connectionMode"),
				children: /* @__PURE__ */ (0, X.jsx)(le, {
					"aria-label": K("manage:sourceSettings.connectionMode"),
					className: "w-44 min-w-0",
					selectedKey: o,
					onSelectionChange: (e) => {
						e !== null && s(String(e));
					},
					children: Fe(o).map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(ue, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, X.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, X.jsx)(D, {
						tone: "warning",
						children: K("manage:sourceSettings.coolingDown")
					}), /* @__PURE__ */ (0, X.jsx)("span", { children: K("manage:sourceSettings.retryAfter", { time: (/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString(ge) }) })]
				})
			}) : null,
			U ? /* @__PURE__ */ (0, X.jsxs)(E, {
				divided: !0,
				children: [
					o === "peach" ? /* @__PURE__ */ (0, X.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, X.jsx)(ee, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: he,
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
							children: /* @__PURE__ */ (0, X.jsx)(D, {
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
							value: p,
							onChange: m
						})
					] }) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
						/* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, X.jsx)("span", {
								className: "self-start",
								children: /* @__PURE__ */ (0, X.jsx)(D, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? K("manage:sourceSettings.cookieSaved") : K("manage:sourceSettings.cookieNotSet")
								})
							}), /* @__PURE__ */ (0, X.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? K("manage:sourceSettings.signInUnverified") : K("manage:sourceSettings.provideCookieHint")
							})]
						}),
						/* @__PURE__ */ (0, X.jsx)(ce, {
							"aria-label": K("manage:sourceSettings.cookieMethod"),
							value: x,
							onChange: (e) => {
								ne(e), A();
							},
							className: se,
							children: Le.map(([t, n]) => /* @__PURE__ */ (0, X.jsx)(e, {
								value: t,
								className: oe,
								children: n
							}, t))
						}),
						x === "paste" ? /* @__PURE__ */ (0, X.jsx)(v, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: c,
							onChange: l
						}) : /* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, X.jsx)(h, { children: K("manage:sourceSettings.cookieFileLabel") }),
								/* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, X.jsx)(i, {
										variant: "secondary",
										onClick: () => k.current?.click(),
										children: K("manage:sourceSettings.chooseFile")
									}), /* @__PURE__ */ (0, X.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: ie || K("manage:sourceSettings.noFileChosen")
									})]
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: k,
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
								children: [/* @__PURE__ */ (0, X.jsx)(Ee, {
									tone: n,
									children: r
								}), /* @__PURE__ */ (0, X.jsx)("span", { children: pe(e, N(t, "label")) })]
							})
						}, e.label);
					})
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)(g, { children: [
				t.api_key_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: R,
					...M(I),
					children: K("manage:sourceSettings.removeApiKey")
				}) : null,
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: R,
					...M(I),
					children: K("manage:sourceSettings.revokeCookie")
				}) : null,
				/* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: z,
					...M(I),
					children: K("manage:sourceSettings.testConnection")
				}),
				/* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					...M(I),
					children: K("manage:shared.save")
				})
			] })
		]
	});
	return /* @__PURE__ */ (0, X.jsx)("div", {
		id: `source-${t.source}`,
		children: /* @__PURE__ */ (0, X.jsx)(de, {
			className: "[&>details>summary]:pr-3",
			children: /* @__PURE__ */ (0, X.jsx)(u, {
				isOpen: r,
				onOpenChange: a,
				trailing: !0,
				contentClassName: "pt-0",
				summary: /* @__PURE__ */ (0, X.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2 py-3 pr-2 text-body-medium text-text-primary",
					children: [/* @__PURE__ */ (0, X.jsx)(T, { source: t.source }), /* @__PURE__ */ (0, X.jsx)("span", { children: W })]
				}),
				children: _e
			})
		})
	});
}
var Be = {
	ok: "success",
	auth: "warning",
	http: "error",
	cooldown: "warning",
	network: "error",
	skipped: "neutral"
}, Q = [
	"ok",
	"auth",
	"cooldown",
	"http",
	"network",
	"skipped"
];
function Ve(e, t) {
	let n = N(e, "label");
	return t.target === "cdn" ? K("manage:connectionCheck.hdImages", { source: n }) : n;
}
function He({ toast: e }) {
	let { job: t, running: n, start: r, query: o } = q({
		queryKey: a,
		queryFn: ({ signal: e }) => z(e),
		start: () => j(ne, {}),
		onFinish: (t) => {
			G.invalidateQueries({
				queryKey: S,
				exact: !0
			}), t.status === "complete" && e(t.failed ? K("manage:connectionCheck.doneWithFailures", { count: t.failed }) : K("manage:connectionCheck.doneAllReachable"));
		}
	}), s = (e) => {
		e.preventDefault(), !o.data || n || r.isPending || r.mutate();
	}, c = (t?.results ?? []).flatMap((e) => e.results.map((t) => ({
		source: e.source,
		name: Ve(e, t),
		check: t
	}))), l = (e, t) => /* @__PURE__ */ (0, X.jsxs)("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, X.jsx)(T, { source: e }), t]
	}), d = c.filter(({ check: e }) => e.outcome === "ok"), f = c.filter(({ check: e }) => e.outcome !== "ok").sort((e, t) => Q.indexOf(e.check.outcome) - Q.indexOf(t.check.outcome)), h = r.error ? L(r.error) : o.error ? L(o.error) : t?.status === "failed" ? U(t, "error") || K("manage:connectionCheck.notFinished") : "", v = t?.status === "complete" && t.completed_at ? [_e((/* @__PURE__ */ new Date(t.completed_at * 1e3)).toISOString()), t.elapsed_s === void 0 ? "" : K("manage:connectionCheck.elapsed", { seconds: t.elapsed_s.toFixed(1) })].filter(Boolean).join(" · ") : "";
	return /* @__PURE__ */ (0, X.jsxs)(C, {
		id: "check-all",
		title: K("manage:connectionCheck.title"),
		onSubmit: s,
		children: [/* @__PURE__ */ (0, X.jsxs)(E, { children: [
			o.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
				role: "status",
				"aria-label": K("manage:connectionCheck.loadingStatus"),
				"data-skeleton": "",
				className: "skeleton-sheen h-6 rounded-md"
			}) : null,
			/* @__PURE__ */ (0, X.jsx)(_, { children: K("manage:connectionCheck.help") }),
			n ? /* @__PURE__ */ (0, X.jsx)(O, {
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
				children: Q.map((e) => {
					let t = c.filter(({ check: t }) => t.outcome === e).length;
					return t ? /* @__PURE__ */ (0, X.jsxs)(D, {
						tone: Be[e],
						children: [
							N(c.find(({ check: t }) => t.outcome === e)?.check, "outcome_label"),
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
						children: [/* @__PURE__ */ (0, X.jsx)(D, {
							tone: Be[n.outcome],
							children: N(n, "outcome_label")
						}), n.message ? /* @__PURE__ */ (0, X.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: N(n, "message")
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
				...M(n || r.isPending),
				children: K("manage:connectionCheck.checkAll")
			})
		})]
	});
}
var Ue = (e) => xe(e.result_code ?? "", e.result ?? "", e.result_params), We = (e) => ve(e.error_parts, U(e, "error"));
function Ge({ toast: e }) {
	let [t, n] = (0, Y.useState)(""), { running: r, outcome: a, start: s, query: c } = q({
		queryKey: o,
		queryFn: ({ signal: e }) => B(e),
		start: () => j(ie, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(Ue(t) || K("manage:hdCover.fetched"));
		}
	}), l = (e) => {
		e.preventDefault(), c.data && !r && !s.isPending && t.trim() && s.mutate();
	}, u = s.error ? L(s.error) : c.error ? L(c.error) : a?.status === "failed" ? We(a) || K("manage:hdCover.notFound") : "";
	return /* @__PURE__ */ (0, X.jsx)(C, {
		id: "hd-cover",
		title: K("manage:hdCover.title"),
		onSubmit: l,
		children: /* @__PURE__ */ (0, X.jsxs)(E, { children: [
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
					...M(r || s.isPending),
					children: K("manage:hdCover.fetchCover")
				})]
			}),
			r ? /* @__PURE__ */ (0, X.jsx)(O, {
				embedded: !0,
				kind: A("scraping-cover"),
				label: K("manage:hdCover.fetching")
			}) : null,
			u ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "error",
				children: u
			}) : null,
			a?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "success",
				children: Ue(a) || K("manage:hdCover.fetched")
			}) : null
		] })
	});
}
function Ke({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = q({
		queryKey: n,
		queryFn: ({ signal: e }) => R(e),
		start: () => j(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(N(t, "result") || K("manage:amaneRuntime.rebuilt"));
		}
	}), l = J({ mutationFn: () => j(t, {}) }), d = a.data;
	if (!d) return a.error ? /* @__PURE__ */ (0, X.jsx)(C, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)(b, {
			tone: "error",
			children: L(a.error)
		}) })
	}) : null;
	let h = o || c.isPending || l.isPending, v = c.error ? L(c.error) : l.error ? L(l.error) : s?.status === "failed" ? U(s, "error") || K("manage:amaneRuntime.rebuildNotFinished") : "";
	return /* @__PURE__ */ (0, X.jsxs)(C, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, X.jsx)(f, {
			href: d.repository,
			leadingIcon: Re,
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
					children: l.data ? N(l.data, "latest") : K("manage:amaneRuntime.notChecked")
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
			/* @__PURE__ */ (0, X.jsxs)(E, {
				divided: !0,
				children: [
					d.sites.length ? /* @__PURE__ */ (0, X.jsx)(u, {
						summary: K("manage:amaneRuntime.showSites"),
						children: /* @__PURE__ */ (0, X.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: W(d.sites.map((e) => N(e, "label")))
						})
					}) : null,
					d.problem ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: d.problem
					}) : /* @__PURE__ */ (0, X.jsx)(_, { children: K("manage:amaneRuntime.help", {
						license: d.license,
						version: d.version
					}) }),
					o ? /* @__PURE__ */ (0, X.jsx)(O, {
						embedded: !0,
						kind: A("amane-bridge"),
						label: K("manage:amaneRuntime.rebuilding")
					}) : null,
					v ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: v
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "success",
						children: N(s, "result") || K("manage:amaneRuntime.rebuilt")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, X.jsxs)(g, { children: [/* @__PURE__ */ (0, X.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					h || l.mutate();
				},
				...M(l.isPending),
				children: K("manage:amaneRuntime.checkUpstream")
			}), /* @__PURE__ */ (0, X.jsx)(i, {
				disabled: !!d.problem,
				onClick: () => {
					h || c.mutate();
				},
				...M(o || c.isPending),
				children: d.installed ? K("manage:amaneRuntime.reinstall") : K("manage:amaneRuntime.install")
			})] })
		]
	});
}
var qe = [
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
function $({ id: e, title: t, children: n }) {
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		id: e,
		"aria-label": t,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, X.jsx)("h3", {
			className: "px-3 text-title-3-medium text-text-primary",
			children: /* @__PURE__ */ (0, X.jsx)("span", { children: t })
		}), n]
	});
}
function Je({ toast: e }) {
	let t = Te({
		queryKey: S,
		queryFn: ({ signal: e }) => H(e)
	}), [n, r] = (0, Y.useState)(() => /* @__PURE__ */ new Set([location.hash.slice(1)])), i = (0, Y.useCallback)((e, t) => {
		e.startsWith("source-") && !e.startsWith("source-group-") && r((n) => {
			if (n.has(e) === t) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []);
	(0, Y.useEffect)(() => {
		let e = () => i(location.hash.slice(1), !0);
		return window.addEventListener("hashchange", e), () => window.removeEventListener("hashchange", e);
	}, [i]);
	let a = t.data;
	if (!a) return /* @__PURE__ */ (0, X.jsx)(De, { children: /* @__PURE__ */ (0, X.jsx)(b, {
		tone: "error",
		title: K("manage:scrapingSources.loadFailedTitle"),
		children: t.error ? L(t.error) : K("manage:scrapingSources.loadFailed")
	}) });
	let o = qe.map(({ id: e, sources: t }) => ({
		id: `source-group-${e}`,
		title: K(`manage:scrapingSources.groups.${e}`),
		sources: t.flatMap((e) => {
			let t = a.sources.find((t) => t.source === e);
			return t ? [t] : [];
		})
	})), s = new Set(o.flatMap((e) => e.sources.map((e) => e.source))), c = a.sources.filter((e) => !s.has(e.source));
	c.length && o.push({
		id: "source-group-other",
		title: K("manage:scrapingSources.groups.other"),
		sources: c
	});
	let l = o.filter((e) => e.sources.length), u = K("manage:scrapingSources.groups.tools");
	return /* @__PURE__ */ (0, X.jsxs)(De, { children: [/* @__PURE__ */ (0, X.jsx)("p", {
		className: "text-body-2-regular text-text-secondary",
		children: K("manage:scrapingSources.proxyHint")
	}), /* @__PURE__ */ (0, X.jsxs)(ke, {
		label: K("manage:scrapingSources.contents"),
		entries: [...l.map((e) => ({
			id: e.id,
			label: e.title
		})), {
			id: "source-tools",
			label: u
		}],
		children: [l.map((t) => /* @__PURE__ */ (0, X.jsx)($, {
			id: t.id,
			title: t.title,
			children: /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-col gap-2",
				children: t.sources.map((t) => /* @__PURE__ */ (0, X.jsx)(ze, {
					source: t,
					toast: e,
					open: n.has(`source-${t.source}`),
					onOpenChange: (e) => i(`source-${t.source}`, e)
				}, t.source))
			})
		}, t.id)), /* @__PURE__ */ (0, X.jsx)($, {
			id: "source-tools",
			title: u,
			children: /* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, X.jsx)(He, { toast: e }),
					/* @__PURE__ */ (0, X.jsx)(Ge, { toast: e }),
					/* @__PURE__ */ (0, X.jsx)(Ne, { receipt: e }),
					/* @__PURE__ */ (0, X.jsx)("div", {
						id: "source-amane",
						children: /* @__PURE__ */ (0, X.jsx)(Ke, { toast: e })
					})
				]
			})
		})]
	})] });
}
export { Je as ScrapingPage, Ie as linkHost, Fe as networkOptions };

//# debugId=c3c2af1c-3a22-43ab-b6d2-a1c4b176728a