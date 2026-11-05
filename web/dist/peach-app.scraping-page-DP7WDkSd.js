(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06e95a49-8d2b-4c03-923e-084da377f40f", e._sentryDebugIdIdentifier = "sentry-dbid-06e95a49-8d2b-4c03-923e-084da377f40f");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, COVER_JOB_KEY as a, CUSTOM_SOURCES_KEY as o, CUSTOM_SOURCES_URL as s, Checkbox as c, Disclosure as l, ErrorText as u, ExternalLink as d, Fact as f, FactList as p, FieldLabel as m, Footer as h, Help as g, Input as _, LinkButton as v, LoadingDots as y, Note as b, Rows as ee, SCRAPING_CHECK_URL as te, SCRAPING_COVER_URL as x, SCRAPING_KEY as S, SCRAPING_SETTINGS_URL as ne, SEGMENT as re, SEGMENTED_TRACK as ie, Section as C, SegmentedRadioGroup as ae, Select$1 as oe, SelectField as w, SelectItem as se, SettingsRow as ce, Stack as T, StatusLabel as E, __toESM as D, apiSend as O, busyProps as k, checkText as le, composingKey as A, confirmModal as j, errorMessage as M, esc as N, fetchAmaneBridge as P, fetchCoverJob as F, fetchCustomSources as I, fetchSources as L, i2 as ue, queryClient as R, require_jsx_runtime as z, require_react as B, spinnerHtml as V, useAction as H, useBackgroundJob as U, useMutation as W, useQuery as G } from "./peach-app.js";
import { CodeBlock as de } from "./peach-app.code-block-6TfoDGLR.js";
import { Page as K } from "./peach-app.page-QAncjzM1.js";
import { SiteMark as q } from "./peach-app.site-mark-D_VlIyJz.js";
import { ConnectionStatus as fe } from "./peach-app.connection-status-B0tSnjj0.js";
// src/react/scraping/custom-sources.tsx
var J = /* @__PURE__ */ D(B(), 1), Y = z(), pe = [
	["code", "Code"],
	["title", "Title"],
	["studio", "Labels"],
	["series", "Series"],
	["release_date", "Release date"],
	["performers", "Cast (text array)"],
	["tags", "Tags (text array)"]
], me = [
	["censored", "Censored"],
	["amateur", "Amateur"],
	["uncensored", "Uncensored"],
	["fc2", "FC2"],
	["kmib", "Korean MIB"],
	["other", "Other"],
	["unsure", "Codes to verify"],
	["unknown", "Unknown"]
], he = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function ge({ receipt: e }) {
	let [t, n] = (0, J.useState)(null), r = G({
		queryKey: o,
		queryFn: ({ signal: e }) => I(e)
	}), a = H(), c = (e) => R.setQueryData(o, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), d = /* @__PURE__ */ (0, Y.jsx)(i, {
		variant: "secondary",
		onClick: () => n(he()),
		children: "Add source"
	});
	return /* @__PURE__ */ (0, Y.jsxs)(C, {
		title: "Custom metadata source",
		children: [
			l ? /* @__PURE__ */ (0, Y.jsxs)(T, { children: [
				r.isPending ? /* @__PURE__ */ (0, Y.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": "Read custom sources"
				}) : null,
				r.error ? /* @__PURE__ */ (0, Y.jsx)(u, { children: M(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ (0, Y.jsx)(E, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? "Enabled" : "Disabled"
						}),
						/* @__PURE__ */ (0, Y.jsx)(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: "Edit"
						}),
						/* @__PURE__ */ (0, Y.jsx)(i, {
							variant: "secondary",
							...k(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => O(s, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								c(n), e(t.enabled ? "Source disabled" : "Source enabled");
							}),
							children: t.enabled ? "Disabled" : "Enabled"
						}),
						/* @__PURE__ */ (0, Y.jsx)(i, {
							variant: "danger",
							onClick: () => j({
								title: "Delete custom sources",
								body: `After deleting "${N(t.name)}", harvesting will no longer query this source.`,
								confirmLabel: "Delete source",
								danger: !0,
								onConfirm: async () => {
									c(await O(s, {
										action: "delete",
										id: t.id
									})), n(null), e("Source deleted");
								}
							}),
							children: "Delete"
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ (0, Y.jsx)(u, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ (0, Y.jsx)(h, { children: d }) : /* @__PURE__ */ (0, Y.jsx)(T, { children: /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex justify-end",
				children: d
			}) }),
			t ? /* @__PURE__ */ (0, Y.jsx)(_e, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					c(t), n(null), e("Source saved");
				}
			}, t.id || "new") : null
		]
	});
}
function _e({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, J.useState)(e), [o, l] = (0, J.useState)(""), [d, f] = (0, J.useState)(""), p = (0, J.useRef)(0), v = H(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ (0, Y.jsxs)("form", {
		"aria-label": "Metadata source configuration",
		"aria-busy": v.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), v.run("save", (e) => O(s, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, Y.jsxs)(T, { children: [
			/* @__PURE__ */ (0, Y.jsx)(_, {
				label: "Source name",
				value: r.name,
				maxLength: 80,
				onChange: (e) => y({ name: e })
			}),
			/* @__PURE__ */ (0, Y.jsx)(_, {
				label: "JSON API endpoint",
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => y({ endpoint: e })
			}),
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Y.jsx)(m, { children: "Source connection method" }), /* @__PURE__ */ (0, Y.jsx)(w, {
					id: "custom-source-network",
					label: "Source connection method",
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", "Direct"], ["peach_proxy", "Peach proxy"]],
					onPick: (e) => y({ network: e })
				})]
			}),
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Y.jsx)(m, { children: "API code format" }), /* @__PURE__ */ (0, Y.jsx)(w, {
					id: "custom-source-code-format",
					label: "API code format",
					epoch: 0,
					value: r.code_format || "original",
					options: [
						["original", "As-is"],
						["lowercase", "Lowercase"],
						["compact", "Strip hyphens"],
						["underscore", "Hyphens to underscores"]
					],
					onPick: (e) => y({ code_format: e })
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)(g, { children: "Fill in the public JSON endpoint and response field paths, e.g. data.title. The code field verifies video identity." }),
			pe.map(([e, t]) => /* @__PURE__ */ (0, Y.jsx)(_, {
				label: `${t} field path`,
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], y({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": "Applicable content kinds",
				children: me.map(([e, t]) => /* @__PURE__ */ (0, Y.jsx)(c, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => y({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ (0, Y.jsx)(c, {
				isSelected: r.enabled,
				onChange: (e) => y({ enabled: e }),
				children: "Enable the source"
			}),
			/* @__PURE__ */ (0, Y.jsx)(_, {
				label: "Probe a code (Enter to search)",
				value: o,
				onChange: (e) => {
					p.current++, l(e), f("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || A(e.nativeEvent)) return;
					e.preventDefault();
					let t = p.current;
					v.run("preview", (e) => O(s, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && f(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && v.setError(M(e));
					});
				}
			}),
			v.busy === "preview" ? /* @__PURE__ */ (0, Y.jsxs)(g, {
				role: "status",
				children: [/* @__PURE__ */ (0, Y.jsx)("span", { dangerouslySetInnerHTML: { __html: V("Probing the source") } }), "Probing the source"]
			}) : null,
			d ? /* @__PURE__ */ (0, Y.jsx)(de, {
				code: d,
				language: "json",
				label: "Metadata API response"
			}) : null,
			v.error ? /* @__PURE__ */ (0, Y.jsx)(u, { children: v.error }) : null
		] }), /* @__PURE__ */ (0, Y.jsxs)(h, { children: [/* @__PURE__ */ (0, Y.jsx)(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: "Cancel"
		}), /* @__PURE__ */ (0, Y.jsx)(i, {
			type: "submit",
			...k(v.busy === "save"),
			children: "Save source"
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var X = [["peach", "Peach proxy"], ["direct", "Direct connection"]];
function Z(e) {
	return X.some(([t]) => t === e) || !e ? [...X] : [...X, [e, e]];
}
function Q(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var $ = [["paste", "Paste cookies"], ["file", "Import file"]];
function ve() {
	return /* @__PURE__ */ (0, Y.jsx)(q, { source: "github" });
}
function ye({ source: t, toast: n }) {
	let [r, a] = (0, J.useState)(t.network), [o, s] = (0, J.useState)(""), [c, l] = (0, J.useState)(""), [f, p] = (0, J.useState)($[0][0]), [g, y] = (0, J.useState)(""), [x, w] = (0, J.useState)(""), D = (0, J.useRef)(null);
	function A() {
		s(""), l(""), y(""), w(""), D.current && (D.current.value = "");
	}
	let j = W({
		mutationFn: (e) => O(ne, {
			source: t.source,
			network: r,
			cookie: o,
			cookies_text: c,
			revoke: e
		}),
		onSuccess: (e, t) => {
			R.setQueryData(S, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), A(), n(t ? "Cookies revoked" : "Source settings saved");
		}
	}), N = W({ mutationFn: () => O(te, { source: t.source }) }), P = j.isPending || N.isPending, F = (e) => {
		e.preventDefault(), !P && (N.reset(), j.mutate(!1));
	}, I = () => {
		P || (N.reset(), j.mutate(!0));
	}, L = () => {
		P || (j.reset(), N.mutate());
	};
	async function z(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (l(""), w(""), !n) y("");
		else if (n.size > 262144) t.value = "", y(""), w("The cookie text exceeds 256 KiB");
		else try {
			let e = await n.text();
			l(e), y(n.name);
		} catch {
			w("The cookie file was not read; choose it again");
		}
	}
	let B = x || (j.error ? M(j.error) : "") || (N.error ? M(N.error) : ""), V = N.data?.results ?? [], H = r === "peach" || t.accepts_cookie || t.browser || !!B || V.length > 0;
	return /* @__PURE__ */ (0, Y.jsxs)(C, {
		title: t.label,
		onSubmit: F,
		aside: /* @__PURE__ */ (0, Y.jsxs)("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, Y.jsx)(q, { source: t.source }), t.login ? /* @__PURE__ */ (0, Y.jsx)(d, {
				href: t.login,
				children: Q(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ (0, Y.jsx)(ee, { children: /* @__PURE__ */ (0, Y.jsx)(ce, {
				label: "Connection method",
				children: /* @__PURE__ */ (0, Y.jsx)(oe, {
					"aria-label": "Connection method",
					className: "w-44 min-w-0",
					selectedKey: r,
					onSelectionChange: (e) => {
						e !== null && a(String(e));
					},
					children: Z(r).map(([e, t]) => /* @__PURE__ */ (0, Y.jsx)(se, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, Y.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, Y.jsx)(E, {
						tone: "warning",
						children: "Cooling down"
					}), /* @__PURE__ */ (0, Y.jsxs)("span", { children: [
						"Under ",
						(/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString("zh-CN"),
						" then retry."
					] })]
				})
			}) : null,
			H ? /* @__PURE__ */ (0, Y.jsxs)(T, {
				divided: !0,
				children: [
					r === "peach" ? /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, Y.jsx)(v, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: ue,
							children: "Configure Peach proxy"
						})
					}) : null,
					t.browser ? /* @__PURE__ */ (0, Y.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: "Human verification is completed automatically by the local browser; a window pops up when a click is needed. No cookies are needed on this machine."
					}) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
						/* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, Y.jsx)("span", {
								className: "self-start",
								children: /* @__PURE__ */ (0, Y.jsx)(E, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? "Cookies saved" : "Cookies not configured"
								})
							}), /* @__PURE__ */ (0, Y.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? "Login validity pending verification." : "When login is required, provide a Cookie using any one of these methods."
							})]
						}),
						/* @__PURE__ */ (0, Y.jsx)(ae, {
							"aria-label": "How to provide cookies (choose one)",
							value: f,
							onChange: (e) => {
								p(e), A();
							},
							className: ie,
							children: $.map(([t, n]) => /* @__PURE__ */ (0, Y.jsx)(e, {
								value: t,
								className: re,
								children: n
							}, t))
						}),
						f === "paste" ? /* @__PURE__ */ (0, Y.jsx)(_, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: o,
							onChange: s
						}) : /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(m, { children: "Netscape Cookie file (.txt)" }),
								/* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, Y.jsx)(i, {
										variant: "secondary",
										onClick: () => D.current?.click(),
										children: "Choose file"
									}), /* @__PURE__ */ (0, Y.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: g || "No file selected"
									})]
								}),
								/* @__PURE__ */ (0, Y.jsx)("input", {
									ref: D,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										z(e);
									}
								})
							]
						})
					] }) : null,
					B ? /* @__PURE__ */ (0, Y.jsx)(u, { children: B }) : null,
					V.map((e) => /* @__PURE__ */ (0, Y.jsx)(b, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Y.jsx)(fe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? "Accessible" : "Connection failed"
							}), /* @__PURE__ */ (0, Y.jsx)("span", { children: le(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ (0, Y.jsxs)(h, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					onClick: I,
					...k(P),
					children: "Revoke Cookie"
				}) : null,
				/* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					onClick: L,
					...k(P),
					children: "Check connection"
				}),
				/* @__PURE__ */ (0, Y.jsx)(i, {
					type: "submit",
					...k(P),
					children: "Save"
				})
			] })
		]
	});
}
function be({ toast: e }) {
	let [t, n] = (0, J.useState)(""), { running: r, outcome: o, start: s } = U({
		queryKey: a,
		queryFn: ({ signal: e }) => F(e),
		start: () => O(x, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "Cover scraping finished");
		}
	}), c = (e) => {
		e.preventDefault(), !(r || s.isPending || !t.trim()) && s.mutate();
	}, l = s.error ? M(s.error) : o?.status === "failed" ? o.error || "Scrape not fetched" : "";
	return /* @__PURE__ */ (0, Y.jsx)(C, {
		title: "HD cover",
		onSubmit: c,
		children: /* @__PURE__ */ (0, Y.jsxs)(T, { children: [
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, Y.jsx)(_, {
						"aria-label": "Library code",
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: "Enter a library code, e.g. ABW-232"
					})
				}), /* @__PURE__ */ (0, Y.jsx)(i, {
					type: "submit",
					disabled: !t.trim(),
					...k(r || s.isPending),
					children: "Scrape cover"
				})]
			}),
			r ? /* @__PURE__ */ (0, Y.jsx)(y, { label: "Scraping covers" }) : null,
			l ? /* @__PURE__ */ (0, Y.jsx)(b, {
				tone: "error",
				children: l
			}) : null,
			o?.status === "complete" ? /* @__PURE__ */ (0, Y.jsx)(b, {
				tone: "success",
				children: o.result || "Cover scraping finished"
			}) : null
		] })
	});
}
function xe({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = U({
		queryKey: n,
		queryFn: ({ signal: e }) => P(e),
		start: () => O(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "The amane bridge was rebuilt");
		}
	}), u = W({ mutationFn: () => O(t, {}) }), m = a.data;
	if (!m) return a.error ? /* @__PURE__ */ (0, Y.jsx)(C, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, Y.jsx)(T, { children: /* @__PURE__ */ (0, Y.jsx)(b, {
			tone: "error",
			children: M(a.error)
		}) })
	}) : null;
	let _ = o || c.isPending || u.isPending, v = c.error ? M(c.error) : u.error ? M(u.error) : s?.status === "failed" ? s.error || "Rebuild unfinished" : "";
	return /* @__PURE__ */ (0, Y.jsxs)(C, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, Y.jsx)(d, {
			href: m.repository,
			leadingIcon: ve,
			children: m.repository
		}),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)(p, { children: [
				/* @__PURE__ */ (0, Y.jsx)(f, {
					term: "Installed version",
					children: m.installed_version || "Not installed"
				}),
				/* @__PURE__ */ (0, Y.jsx)(f, {
					term: "Latest upstream version",
					children: u.data?.latest ?? "Not checked yet"
				}),
				/* @__PURE__ */ (0, Y.jsx)(f, {
					term: "Runtime environment",
					children: m.installed ? "Installed" : "Not installed"
				}),
				/* @__PURE__ */ (0, Y.jsxs)(f, {
					term: "Built-in sites",
					children: [m.sites.length.toLocaleString(), " items"]
				})
			] }),
			/* @__PURE__ */ (0, Y.jsxs)(T, {
				divided: !0,
				children: [
					m.sites.length ? /* @__PURE__ */ (0, Y.jsx)(l, {
						summary: "View built-in sites",
						children: /* @__PURE__ */ (0, Y.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: m.sites.map((e) => e.label).join(", ")
						})
					}) : null,
					m.problem ? /* @__PURE__ */ (0, Y.jsx)(b, {
						tone: "error",
						children: m.problem
					}) : /* @__PURE__ */ (0, Y.jsxs)(g, { children: [
						"amane (",
						m.license,
						") provides resolution for these built-in sites. The first time one is needed, Peach automatically prepares the pinned ",
						m.version,
						" version; used directly when the installer already ships a working environment. Manual installs also use this version and do not auto-upgrade with upstream."
					] }),
					o ? /* @__PURE__ */ (0, Y.jsx)(y, { label: "Rebuilding the runtime environment" }) : null,
					v ? /* @__PURE__ */ (0, Y.jsx)(b, {
						tone: "error",
						children: v
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ (0, Y.jsx)(b, {
						tone: "success",
						children: s.result || "The amane bridge was rebuilt"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Y.jsxs)(h, { children: [/* @__PURE__ */ (0, Y.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					_ || u.mutate();
				},
				...k(u.isPending),
				children: "Check upstream version"
			}), /* @__PURE__ */ (0, Y.jsx)(i, {
				disabled: !!m.problem,
				onClick: () => {
					_ || c.mutate();
				},
				...k(o || c.isPending),
				children: m.installed ? "Reinstall" : "Install"
			})] })
		]
	});
}
function Se({ toast: e }) {
	let t = G({
		queryKey: S,
		queryFn: ({ signal: e }) => L(e)
	}), n = t.data;
	return n ? /* @__PURE__ */ (0, Y.jsxs)(K, { children: [
		/* @__PURE__ */ (0, Y.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: "HD images may need the proxy to download; check the connection first."
		}),
		/* @__PURE__ */ (0, Y.jsx)(be, { toast: e }),
		/* @__PURE__ */ (0, Y.jsx)(ge, { receipt: e }),
		(n.sources || []).map((t) => /* @__PURE__ */ (0, Y.jsx)(ye, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ (0, Y.jsx)(xe, { toast: e })
	] }) : /* @__PURE__ */ (0, Y.jsx)(K, { children: /* @__PURE__ */ (0, Y.jsx)(b, {
		tone: "error",
		title: "Reading scrape sources failed",
		children: t.error ? M(t.error) : "Reading scrape sources failed"
	}) });
}
export { Se as ScrapingPage, Q as linkHost, Z as networkOptions };

//# debugId=06e95a49-8d2b-4c03-923e-084da377f40f