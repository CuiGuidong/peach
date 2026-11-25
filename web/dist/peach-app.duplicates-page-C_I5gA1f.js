(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "76338479-ea85-497f-afa8-2a0570f5f462", e._sentryDebugIdIdentifier = "sentry-dbid-76338479-ea85-497f-afa8-2a0570f5f462");
	} catch {}
})();
import { Button as e, Checkbox as t, DUPLICATES_KEY as n, EmptyState as r, FilterActionButton as i, FilterGlassRows as a, Gg as ee, H7 as te, JZ as ne, KEEP_LABELS as o, KEPT_DUPLICATES_KEY as s, LOC as c, M6 as re, MEDIA_SOURCES_KEY as l, MEDIA_SOURCE_ICONS as u, Note as d, SelectAllButton as f, SelectionDock as p, SortKeys as m, SourceLabel as ie, SourceMark as h, TRASH_KEY as g, __toESM as _, batchOperate as v, bulkCloudPreferences as ae, busyProps as oe, cardClass as se, cloudLocations as ce, confirmModal as le, coverUrl as y, duplicateVictims as b, enterPageSelection as x, errorMessage as ue, exitPageSelection as de, fetchDuplicates as fe, fetchKeptDuplicates as pe, fetchMediaSources as me, fmtDur as S, fmtSize as C, groupKey as w, keepGroup as he, keepGroups as T, mixedCloudPreferences as ge, queryClient as E, qx as _e, require_jsx_runtime as D, require_react as O, runBulkAction as ve, spriteGlyph as k, t as A, useMutation as ye, usePageSelection as be, useQuery as j, useQueueSort as xe, useRectangleSelection as Se, useWorkContextMenu as Ce, victimBytes as M } from "./peach-app.js";
import { ComparisonText as N } from "./peach-app.comparison-text-DmxgbX8f.js";
// src/react/components/filename-comparison.tsx
var P = /* @__PURE__ */ _(O(), 1), F = D();
function I({ value: e, reference: t, onOpen: n }) {
	return /* @__PURE__ */ (0, F.jsx)("button", {
		type: "button",
		onClick: n,
		title: e,
		"aria-label": e,
		"data-duplicate-filename": "",
		onCopy: (t) => {
			t.clipboardData.setData("text/plain", e), t.preventDefault();
		},
		className: "min-w-0 cursor-pointer wrap-anywhere text-left text-body-regular hover:text-text-secondary",
		children: /* @__PURE__ */ (0, F.jsx)(N, {
			value: e,
			reference: t
		})
	});
}
// src/react/duplicates/duplicates-page.tsx
var L = k("play"), we = k("file-stack"), Te = se({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), R = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", z = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", B = "font-mono text-caption-1-regular leading-5 text-text-secondary", V = () => {
	E.invalidateQueries({ queryKey: n }), E.invalidateQueries({
		queryKey: g,
		exact: !0
	});
}, H = (e) => e.reduce((e, t) => e + t.files.length, 0);
function U(e, t) {
	let n = [];
	return {
		key: `keep-${e}`,
		label: t,
		reversal: "undo",
		danger: e === "all",
		holdToConfirm: !0,
		confirm: (t) => {
			let n = b(t, e);
			return {
				title: A("cleanup:duplicates.moveToTrash"),
				danger: e === "all",
				body: A("cleanup:duplicates.trashBody", {
					count: n.length,
					groups: t.length,
					keep: o[e] ?? o.largest,
					size: C(M(t, n))
				})
			};
		},
		run: async (t) => (n = b(t, e), await v(n, "dispose"), V(), async () => {
			await v(n, "restore"), V();
		}),
		receipt: () => A("cleanup:duplicates.movedToTrash", { count: n.length })
	};
}
var Ee = (e) => ({
	key: "keep-all",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: A("cleanup:duplicates.markKeepAll"),
		body: A("cleanup:duplicates.keepAllBody", {
			count: e.length,
			files: H(e)
		}),
		recovery: A("cleanup:duplicates.keepAllRecovery")
	}),
	run: async (e) => (await T(e, !0), V(), async () => {
		await T(e, !1), V();
	}),
	receipt: (e) => A("cleanup:duplicates.keptGroups", { count: e.length })
}), De = (e) => ({
	key: "unkeep",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: A("cleanup:duplicates.unkeep"),
		body: A("cleanup:duplicates.unkeepBody", { count: e.length })
	}),
	run: async (e) => (await T(e, !1), V(), async () => {
		await T(e, !0), V();
	}),
	receipt: (e) => A("cleanup:duplicates.unkeptGroups", { count: e.length })
});
function Oe(e) {
	return e.identical ? /* @__PURE__ */ (0, F.jsx)("span", {
		className: `${z} text-(--keep)`,
		children: A("cleanup:duplicates.sha1Match")
	}) : /* @__PURE__ */ (0, F.jsx)("span", {
		className: `${z} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? A("cleanup:duplicates.sameCodeShorter") : A("cleanup:duplicates.byDuration")
	});
}
function ke({ file: e, reference: n, openItem: r, selected: i, onSelect: a, onTrash: ne, busy: o }) {
	let s = Ce(), l = () => r(e.id), d = [{
		id: "open",
		label: A("catalog:mediaActions.open"),
		icon: ee,
		run: l
	}];
	a && d.push({
		id: "select",
		label: A(i ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: te,
		run: () => a(!i)
	}), ne && d.push({
		id: "trash",
		label: A("cleanup:duplicates.moveToTrash"),
		icon: re,
		danger: !0,
		disabled: o,
		run: ne
	});
	let f = {
		key: e.id,
		operations: d
	}, p = c[e.location] || e.location || e.drive, m = `/thumb?id=${e.id}&c=4`;
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		"data-duplicate-file": e.id,
		"data-rectangle-key": e.id,
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		onContextMenu: (e) => s.onContextMenu(e, f),
		onKeyDown: (e) => s.onKeyDown(e, f),
		children: [
			s.menu,
			/* @__PURE__ */ (0, F.jsxs)("button", {
				type: "button",
				onClick: l,
				"aria-label": A("cleanup:duplicates.previewFile", { name: e.name }),
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-media-placeholder text-text-secondary",
				children: [/* @__PURE__ */ (0, F.jsx)(L, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ (0, F.jsx)("img", {
					src: e.has_cover ? y(e, 2) : m,
					alt: "",
					loading: "lazy",
					"data-drop": "self",
					"data-fallbacks": e.has_cover ? m : void 0,
					className: "absolute inset-0 size-full object-contain"
				}, e.cover_version || m)]
			}),
			/* @__PURE__ */ (0, F.jsxs)("span", {
				className: "flex min-w-0 items-start gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [a ? /* @__PURE__ */ (0, F.jsx)(t, {
					slot: null,
					"aria-label": A("cleanup:duplicates.selectFile", { name: e.name }),
					isSelected: i,
					onChange: a
				}) : null, /* @__PURE__ */ (0, F.jsxs)("span", {
					className: "flex min-w-0 flex-1 flex-wrap items-start gap-x-2 gap-y-1",
					children: [/* @__PURE__ */ (0, F.jsx)(I, {
						value: e.name,
						reference: n?.name,
						onOpen: l
					}), e.is_largest || e.is_longest || e.is_new ? /* @__PURE__ */ (0, F.jsxs)("span", {
						className: "flex max-w-full flex-wrap gap-1",
						children: [
							e.is_new ? /* @__PURE__ */ (0, F.jsx)("i", {
								className: `${R} not-italic bg-background-primary-hover text-text-primary`,
								children: A("cleanup:duplicates.newCopy")
							}) : null,
							e.is_largest ? /* @__PURE__ */ (0, F.jsx)("i", {
								className: `${R} not-italic bg-background-primary-hover text-text-secondary`,
								children: A("cleanup:duplicates.largest")
							}) : null,
							e.is_longest ? /* @__PURE__ */ (0, F.jsx)("i", {
								className: `${R} not-italic bg-(--keep)/22 text-(--keep)`,
								children: A("cleanup:duplicates.longest")
							}) : null
						]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)("span", {
				className: `${B} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ (0, F.jsx)(h, { mark: u[e.location] || "database" }), /* @__PURE__ */ (0, F.jsx)("span", {
					title: p,
					className: "min-w-0 truncate",
					children: p
				})]
			}),
			/* @__PURE__ */ (0, F.jsx)("span", {
				className: B,
				children: C(e.size || 0)
			}),
			/* @__PURE__ */ (0, F.jsx)("span", {
				className: B,
				children: S(e.duration)
			}),
			/* @__PURE__ */ (0, F.jsx)("span", {
				className: `${B} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: /* @__PURE__ */ (0, F.jsx)(N, {
					value: e.path ?? "",
					reference: n?.path ?? void 0
				})
			})
		]
	});
}
function Ae({ children: e, commit: t, selecting: n }) {
	let r = Se(t, {
		selecting: n,
		items: "[data-duplicate-file][data-rectangle-key]"
	});
	return /* @__PURE__ */ (0, F.jsx)("div", {
		...r,
		children: e
	});
}
function W({ openItem: ee, toast: u, failure: h }) {
	let g = Ce(), [_, se] = (0, P.useState)("pending"), y = j({
		queryKey: n,
		queryFn: ({ signal: e }) => fe(e)
	}), S = j({
		queryKey: s,
		queryFn: ({ signal: e }) => pe(e),
		enabled: _ === "kept"
	}), T = j({
		queryKey: l,
		queryFn: ({ signal: e }) => me(e)
	}), [E, D] = (0, P.useState)(""), [O, k] = (0, P.useState)(/* @__PURE__ */ new Set()), [N, I] = (0, P.useState)(/* @__PURE__ */ new Set()), L = be(() => {
		k(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set());
	}), R = Se(E ? void 0 : (e, t) => k((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])), {
		selecting: L,
		items: "[data-duplicate-group-tools][data-rectangle-key]"
	}), B = {
		receipt: u,
		failure: (e) => h(A("cleanup:duplicates.bulkFailed"), e)
	}, H = ye({
		mutationFn: (e) => v(e, "dispose"),
		onSuccess: (e, t) => {
			I((e) => new Set([...e].filter((e) => !t.includes(e)))), V(), u(A("cleanup:duplicates.movedToTrash", { count: t.length }), { undo: async () => {
				try {
					await v(t, "restore");
				} catch (e) {
					h(A("cleanup:duplicates.undoTrash"), e);
				} finally {
					V();
				}
			} });
		},
		onSettled: () => D("")
	}), W = ye({
		mutationFn: ({ group: e, on: t }) => he(e.files.map((e) => e.id), t),
		onSuccess: (e, { group: t, on: n }) => {
			V(), u(A(n ? "cleanup:duplicates.keptAll" : "cleanup:duplicates.unkeptOne", { code: t.code }), { undo: async () => {
				try {
					await he(t.files.map((e) => e.id), !n);
				} catch (e) {
					h(A("cleanup:duplicates.undoKeepAll"), e);
				} finally {
					V();
				}
			} });
		},
		onError: (e) => h(A("cleanup:duplicates.markKeepAll"), e),
		onSettled: () => D("")
	}), G = xe("duplicates", { size: (e) => Number(e.reclaimable || 0) }), K = _ === "kept", q = K ? S.data : y.data, je = K ? S.error : y.error;
	if (!q) return K && S.isPending ? /* @__PURE__ */ (0, F.jsx)("div", { className: "mx-auto w-full max-w-board" }) : /* @__PURE__ */ (0, F.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, F.jsx)(d, {
			tone: "error",
			title: A("cleanup:duplicates.loadFailed"),
			children: je ? ue(je) : A("cleanup:duplicates.listUnavailable")
		})
	});
	let J = G.sort(q.groups ?? []), Me = Number(y.data?.kept ?? q.kept ?? 0), Y = ce(T.data), X = J.filter((e) => O.has(w(e))), Ne = (e) => {
		k(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set()), se(e);
	}, Pe = (e, t) => {
		t && x(), k((n) => {
			let r = new Set(n);
			return t ? r.add(w(e)) : r.delete(w(e)), r;
		});
	}, Z = (e, t) => {
		E || (D(t), ve(e, J, B).catch(B.failure).finally(() => D("")));
	}, Q = ({ groups: e, keep: t, key: n }) => {
		if (H.isPending) return;
		let r = b(e, t);
		r.length && le({
			title: A("cleanup:duplicates.moveToTrash"),
			body: A("cleanup:duplicates.trashBody", {
				count: r.length,
				groups: e.length,
				keep: o[t] ?? o.largest,
				size: C(M(e, r))
			}) + A("shell:bulkAction.canUndo"),
			confirmLabel: A("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (D(n), H.mutateAsync(r))
		});
	}, Fe = (e, t) => {
		t && x(), I((n) => {
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, Ie = (e, t, n = N) => {
		if (E) return;
		let r = e.files.filter((e) => n.has(e.id)).map((e) => e.id);
		r.length && le({
			title: A("cleanup:duplicates.moveToTrash"),
			body: A("cleanup:duplicates.selectedTrashBody", {
				count: r.length,
				remaining: e.files.length - r.length,
				size: C(M([e], r))
			}) + A("shell:bulkAction.canUndo"),
			confirmLabel: A("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (D(t), H.mutateAsync(r))
		});
	}, $ = (e) => oe(E === e && (H.isPending || W.isPending)), Le = (e, t, n) => {
		W.isPending || H.isPending || (D(t), W.mutate({
			group: e,
			on: n
		}));
	}, Re = /* @__PURE__ */ (0, F.jsx)(f, {
		label: A("cleanup:duplicates.selectPage"),
		picked: X.length,
		total: J.length,
		onChange: (e) => {
			e && x(), k(e ? new Set(J.map(w)) : /* @__PURE__ */ new Set());
		}
	}), ze = K ? [De(A("cleanup:duplicates.unkeep"))] : [
		U("largest", A("cleanup:duplicates.keepLargest")),
		U("longest", A("cleanup:duplicates.keepLongest")),
		...ae(X, Y).map((e) => U(e, A("cleanup:duplicates.keepStorage", { storage: c[e] || e }))),
		Ee(A("cleanup:duplicates.keepAll")),
		U("all", A("cleanup:duplicates.trashGroup"))
	];
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			g.menu,
			/* @__PURE__ */ (0, F.jsx)(a, {
				label: A(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				topLabel: A(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				attrs: {
					"data-catalog-frame": "",
					"data-filter-frame": "",
					"data-duplicates-frame": ""
				},
				bottomClassName: "min-h-12",
				top: K ? /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
					J.length ? /* @__PURE__ */ (0, F.jsx)(i, {
						busy: E === "all:unkeep",
						onPress: () => Z(De(A("cleanup:duplicates.allUnkeep")), "all:unkeep"),
						children: A("cleanup:duplicates.allUnkeep")
					}) : null,
					/* @__PURE__ */ (0, F.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, F.jsx)(i, {
						onPress: () => Ne("pending"),
						children: A("cleanup:duplicates.backToPending")
					})
				] }) : /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
					J.length ? /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
						/* @__PURE__ */ (0, F.jsx)(i, {
							busy: E === "all:largest",
							onPress: () => Z(U("largest", ""), "all:largest"),
							children: A("cleanup:duplicates.allKeepLargest")
						}),
						/* @__PURE__ */ (0, F.jsx)(i, {
							busy: E === "all:longest",
							onPress: () => Z(U("longest", ""), "all:longest"),
							children: A("cleanup:duplicates.allKeepLongest")
						}),
						ae(J, Y).map((e) => /* @__PURE__ */ (0, F.jsx)(i, {
							busy: E === `all:${e}`,
							onPress: () => Z(U(e, ""), `all:${e}`),
							children: /* @__PURE__ */ (0, F.jsx)(ie, {
								source: e,
								label: A("cleanup:duplicates.allPreferStorage", { storage: c[e] || e })
							})
						}, e)),
						/* @__PURE__ */ (0, F.jsx)(i, {
							busy: E === "all:keep",
							onPress: () => Z(Ee(""), "all:keep"),
							children: A("cleanup:duplicates.allKeepAll")
						})
					] }) : null,
					/* @__PURE__ */ (0, F.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, F.jsx)(i, {
						onPress: () => Ne("kept"),
						children: A("cleanup:duplicates.viewKept", { count: Me })
					})
				] }),
				bottom: /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsxs)("span", {
					"data-catalog-summary": "",
					children: [/* @__PURE__ */ (0, F.jsxs)("span", {
						"data-catalog-readout": "",
						role: "status",
						children: [
							A(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.summaryLabel"),
							" · ",
							A("cleanup:duplicates.groupCount", { count: Number(q.total || 0) }),
							" · ",
							K ? A("cleanup:duplicates.keptDetail", { count: Number(q.files || 0) }) : A("cleanup:duplicates.summaryDetail", {
								count: Number(q.files || 0),
								size: C(q.reclaimable)
							})
						]
					}), J.length ? Re : null]
				}), /* @__PURE__ */ (0, F.jsx)("span", {
					"data-entity-sorts": "",
					children: /* @__PURE__ */ (0, F.jsx)(m, {
						sorts: G.sorts,
						onSort: G.onSort
					})
				})] })
			}),
			/* @__PURE__ */ (0, F.jsx)(p, {
				label: A("cleanup:duplicates.dockLabel"),
				visible: X.length > 0,
				count: A("cleanup:duplicates.selectedGroups", { count: X.length }),
				actions: ze.map((e) => ({
					action: e,
					items: X,
					host: B,
					done: () => k(/* @__PURE__ */ new Set())
				})),
				children: /* @__PURE__ */ (0, F.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: de,
					children: A("cleanup:duplicates.clearSelection")
				})
			}),
			H.isError ? /* @__PURE__ */ (0, F.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, F.jsx)(d, {
					tone: "error",
					title: A("cleanup:duplicates.trashFailed"),
					children: ue(H.error)
				})
			}) : null,
			J.length ? /* @__PURE__ */ (0, F.jsx)("div", {
				"data-rectangle-gutter": "",
				className: "flow-root",
				...R,
				children: J.map((n, r) => {
					let i = [n], a = (e) => `${r}:${e}`, o = O.has(w(n)), s = () => {
						let e = [{
							id: "select",
							label: o ? A("catalog:mediaActions.deselect") : A("cleanup:duplicates.selectGroup", { code: n.code }),
							icon: te,
							run: () => Pe(n, !o)
						}, {
							id: "keep",
							label: A(K ? "cleanup:duplicates.unkeep" : "cleanup:duplicates.keepAll"),
							icon: K ? ne : _e,
							disabled: !!E,
							run: () => Le(n, a("keep"), !K)
						}];
						if (!K) {
							let t = [
								["largest", A("cleanup:duplicates.keepLargest")],
								["longest", A("cleanup:duplicates.keepLongest")],
								...ge(n.files, Y).map((e) => [e, A("cleanup:duplicates.keepStorage", { storage: c[e] || e })]),
								["all", A("cleanup:duplicates.trashGroup")]
							];
							for (let [n, r] of t) e.push({
								id: n,
								label: r,
								icon: n === "all" ? re : _e,
								danger: n === "all",
								disabled: !!E,
								run: () => Q({
									groups: i,
									keep: n,
									key: a(n)
								})
							});
						}
						return {
							key: w(n),
							operations: e
						};
					};
					return /* @__PURE__ */ (0, F.jsxs)("section", {
						"aria-label": n.code,
						className: Te,
						"data-board-selected": O.has(w(n)) || void 0,
						children: [/* @__PURE__ */ (0, F.jsxs)("div", {
							"data-duplicate-group-tools": "",
							"data-rectangle-key": w(n),
							className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
							onContextMenu: (e) => g.onContextMenu(e, s()),
							onKeyDown: (e) => {
								(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && g.onKeyDown(e, s());
							},
							children: [
								/* @__PURE__ */ (0, F.jsx)(t, {
									slot: null,
									"aria-label": A("cleanup:duplicates.selectGroup", { code: n.code }),
									isSelected: O.has(w(n)),
									onChange: (e) => Pe(n, e)
								}),
								/* @__PURE__ */ (0, F.jsx)("b", {
									className: "text-title-2-medium text-text-primary",
									children: n.code
								}),
								/* @__PURE__ */ (0, F.jsx)("span", {
									className: "font-mono text-caption-1-regular leading-5 text-text-primary",
									children: A("cleanup:duplicates.groupDetail", {
										count: Number(n.count || 0),
										size: C(n.reclaimable)
									})
								}),
								Oe(n),
								n.new_files ? /* @__PURE__ */ (0, F.jsx)("span", {
									className: `${z} text-text-primary`,
									children: A("cleanup:duplicates.newFiles", { count: n.new_files })
								}) : null,
								n.cross_drive ? /* @__PURE__ */ (0, F.jsx)("span", {
									className: `${z} text-text-secondary`,
									children: A("cleanup:duplicates.crossDrive", { drives: n.drives.join(" ") })
								}) : null,
								/* @__PURE__ */ (0, F.jsx)("span", {
									className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
									children: K ? /* @__PURE__ */ (0, F.jsx)(e, {
										variant: "secondary",
										size: "small",
										...$(a("unkeep")),
										onClick: () => Le(n, a("unkeep"), !1),
										children: A("cleanup:duplicates.unkeep")
									}) : /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
										/* @__PURE__ */ (0, F.jsx)(e, {
											variant: "danger",
											size: "small",
											...$(a("files")),
											disabled: E !== "" || !n.files.some((e) => N.has(e.id)),
											onClick: () => Ie(n, a("files")),
											children: A("cleanup:duplicates.trashSelectedFiles", { count: n.files.filter((e) => N.has(e.id)).length })
										}),
										/* @__PURE__ */ (0, F.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("largest")),
											onClick: () => Q({
												groups: i,
												keep: "largest",
												key: a("largest")
											}),
											children: A("cleanup:duplicates.keepLargest")
										}),
										/* @__PURE__ */ (0, F.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("longest")),
											onClick: () => Q({
												groups: i,
												keep: "longest",
												key: a("longest")
											}),
											children: A("cleanup:duplicates.keepLongest")
										}),
										ge(n.files, Y).map((t) => /* @__PURE__ */ (0, F.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a(t)),
											onClick: () => Q({
												groups: i,
												keep: t,
												key: a(t)
											}),
											children: /* @__PURE__ */ (0, F.jsx)(ie, {
												source: t,
												label: A("cleanup:duplicates.keepStorage", { storage: c[t] || t })
											})
										}, t)),
										/* @__PURE__ */ (0, F.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("keep")),
											onClick: () => Le(n, a("keep"), !0),
											children: A("cleanup:duplicates.keepAll")
										}),
										/* @__PURE__ */ (0, F.jsx)(e, {
											variant: "danger",
											size: "small",
											...$(a("all")),
											onClick: () => Q({
												groups: i,
												keep: "all",
												key: a("all")
											}),
											children: A("cleanup:duplicates.trashGroup")
										})
									] })
								})
							]
						}), /* @__PURE__ */ (0, F.jsx)(Ae, {
							selecting: L,
							commit: !E && !K ? (e, t) => I((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
							children: n.files.map((e) => /* @__PURE__ */ (0, F.jsx)(ke, {
								file: e,
								reference: n.files.find((t) => t.id !== e.id),
								openItem: ee,
								selected: N.has(e.id),
								onSelect: K ? void 0 : (t) => Fe(e.id, t),
								busy: !!E,
								onTrash: K ? void 0 : () => Ie(n, a("files"), /* @__PURE__ */ new Set([e.id]))
							}, e.id))
						})]
					}, w(n));
				})
			}) : K ? /* @__PURE__ */ (0, F.jsx)(r, {
				icon: we,
				title: A("cleanup:duplicates.keptEmptyTitle"),
				children: A("cleanup:duplicates.keptEmptyBody")
			}) : /* @__PURE__ */ (0, F.jsx)(r, {
				icon: we,
				title: A("cleanup:duplicates.emptyTitle"),
				children: A("cleanup:duplicates.emptyBody")
			}),
			J.length > 0 && q.total > J.length ? /* @__PURE__ */ (0, F.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: A("cleanup:duplicates.topGroups", {
					shown: J.length.toLocaleString(),
					count: Number(q.total)
				})
			}) : null
		]
	});
}
export { W as DuplicatesPage };

//# debugId=76338479-ea85-497f-afa8-2a0570f5f462