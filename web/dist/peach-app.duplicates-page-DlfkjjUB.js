(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4658a216-dfa2-43f5-9c70-3b0308756f2b", e._sentryDebugIdIdentifier = "sentry-dbid-4658a216-dfa2-43f5-9c70-3b0308756f2b");
	} catch {}
})();
import { Button as e, Checkbox as t, DUPLICATES_KEY as n, EmptyState as r, FilterActionButton as i, FilterGlassRows as a, FilterSearch as o, Gg as ee, H7 as te, ImageWithFallback as s, JZ as ne, KEEP_LABELS as c, KEPT_DUPLICATES_KEY as l, LOC as u, M6 as re, MEDIA_SOURCES_KEY as d, MEDIA_SOURCE_ICONS as f, Note as p, SelectAllButton as m, SelectionDock as h, SortKeys as ie, SourceLabel as ae, SourceMark as g, TRASH_KEY as _, __toESM as oe, batchOperate as v, bulkCloudPreferences as se, busyProps as ce, cardClass as y, cloudLocations as le, confirmModal as ue, coverUrl as b, duplicateVictims as de, duplicatesSkeleton as fe, enterPageSelection as pe, errorMessage as me, exitPageSelection as he, fetchDuplicates as ge, fetchKeptDuplicates as _e, fetchMediaSources as ve, fmtDur as x, fmtSize as S, groupKey as C, keepGroup as ye, keepGroups as w, mixedCloudPreferences as be, queryClient as T, qx as xe, require_jsx_runtime as E, require_react as D, runBulkAction as Se, spriteGlyph as O, t as k, useMutation as Ce, usePageSelection as we, useQuery as A, useQueueSort as Te, useRectangleSelection as Ee, useWorkContextMenu as De, victimBytes as j } from "./peach-app.js";
import { ComparisonText as M } from "./peach-app.comparison-text-CyF--PA8.js";
// src/react/components/filename-comparison.tsx
var N = /* @__PURE__ */ oe(D(), 1), P = E();
function F({ value: e, reference: t, onOpen: n }) {
	return /* @__PURE__ */ (0, P.jsx)("button", {
		type: "button",
		onClick: n,
		title: e,
		"aria-label": e,
		"data-duplicate-filename": "",
		onCopy: (t) => {
			t.clipboardData.setData("text/plain", e), t.preventDefault();
		},
		className: "min-w-0 cursor-pointer wrap-anywhere text-left text-body-regular hover:text-text-secondary",
		children: /* @__PURE__ */ (0, P.jsx)(M, {
			value: e,
			reference: t
		})
	});
}
// src/react/duplicates/duplicates-page.tsx
var I = O("play"), L = O("file-stack"), Oe = y({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), R = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", z = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", B = "font-mono text-caption-1-regular leading-5 text-text-secondary", V = () => {
	T.invalidateQueries({ queryKey: n }), T.invalidateQueries({
		queryKey: _,
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
			let n = de(t, e);
			return {
				title: k("cleanup:duplicates.moveToTrash"),
				danger: e === "all",
				body: k("cleanup:duplicates.trashBody", {
					count: n.length,
					groups: t.length,
					keep: c[e] ?? c.largest,
					size: S(j(t, n))
				})
			};
		},
		run: async (t) => (n = de(t, e), await v(n, "dispose"), V(), async () => {
			await v(n, "restore"), V();
		}),
		receipt: () => k("cleanup:duplicates.movedToTrash", { count: n.length })
	};
}
var ke = (e) => ({
	key: "keep-all",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: k("cleanup:duplicates.markKeepAll"),
		body: k("cleanup:duplicates.keepAllBody", {
			count: e.length,
			files: H(e)
		}),
		recovery: k("cleanup:duplicates.keepAllRecovery")
	}),
	run: async (e) => (await w(e, !0), V(), async () => {
		await w(e, !1), V();
	}),
	receipt: (e) => k("cleanup:duplicates.keptGroups", { count: e.length })
}), Ae = (e) => ({
	key: "unkeep",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: k("cleanup:duplicates.unkeep"),
		body: k("cleanup:duplicates.unkeepBody", { count: e.length })
	}),
	run: async (e) => (await w(e, !1), V(), async () => {
		await w(e, !0), V();
	}),
	receipt: (e) => k("cleanup:duplicates.unkeptGroups", { count: e.length })
});
function je(e) {
	return e.identical ? /* @__PURE__ */ (0, P.jsx)("span", {
		className: `${z} text-(--keep)`,
		children: k("cleanup:duplicates.sha1Match")
	}) : /* @__PURE__ */ (0, P.jsx)("span", {
		className: `${z} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? k("cleanup:duplicates.sameCodeShorter") : k("cleanup:duplicates.byDuration")
	});
}
function Me({ file: e, reference: n, openItem: r, selected: i, onSelect: a, onTrash: o, busy: ne }) {
	let c = De(), l = () => r(e.id), d = [{
		id: "open",
		label: k("catalog:mediaActions.open"),
		icon: ee,
		run: l
	}];
	a && d.push({
		id: "select",
		label: k(i ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: te,
		run: () => a(!i)
	}), o && d.push({
		id: "trash",
		label: k("cleanup:duplicates.moveToTrash"),
		icon: re,
		danger: !0,
		disabled: ne,
		run: o
	});
	let p = {
		key: e.id,
		operations: d
	}, m = u[e.location] || e.location || e.drive, h = `/thumb?id=${e.id}&c=4`;
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		"data-duplicate-file": e.id,
		"data-rectangle-key": e.id,
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		onContextMenu: (e) => c.onContextMenu(e, p),
		onKeyDown: (e) => c.onKeyDown(e, p),
		children: [
			c.menu,
			/* @__PURE__ */ (0, P.jsxs)("button", {
				type: "button",
				onClick: l,
				"aria-label": k("cleanup:duplicates.previewFile", { name: e.name }),
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-media-placeholder text-text-secondary",
				children: [/* @__PURE__ */ (0, P.jsx)(I, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ (0, P.jsx)(s, {
					src: e.has_cover ? b(e, 2) : h,
					alt: "",
					loading: "lazy",
					fallbacks: e.has_cover ? [h] : void 0,
					className: "absolute inset-0 size-full object-contain"
				})]
			}),
			/* @__PURE__ */ (0, P.jsxs)("span", {
				className: "flex min-w-0 items-start gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [a ? /* @__PURE__ */ (0, P.jsx)(t, {
					slot: null,
					"aria-label": k("cleanup:duplicates.selectFile", { name: e.name }),
					isSelected: i,
					onChange: a
				}) : null, /* @__PURE__ */ (0, P.jsxs)("span", {
					className: "flex min-w-0 flex-1 flex-wrap items-start gap-x-2 gap-y-1",
					children: [/* @__PURE__ */ (0, P.jsx)(F, {
						value: e.name,
						reference: n?.name,
						onOpen: l
					}), e.is_largest || e.is_longest || e.is_new ? /* @__PURE__ */ (0, P.jsxs)("span", {
						className: "flex max-w-full flex-wrap gap-1",
						children: [
							e.is_new ? /* @__PURE__ */ (0, P.jsx)("i", {
								className: `${R} not-italic bg-background-primary-hover text-text-primary`,
								children: k("cleanup:duplicates.newCopy")
							}) : null,
							e.is_largest ? /* @__PURE__ */ (0, P.jsx)("i", {
								className: `${R} not-italic bg-background-primary-hover text-text-secondary`,
								children: k("cleanup:duplicates.largest")
							}) : null,
							e.is_longest ? /* @__PURE__ */ (0, P.jsx)("i", {
								className: `${R} not-italic bg-(--keep)/22 text-(--keep)`,
								children: k("cleanup:duplicates.longest")
							}) : null
						]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, P.jsxs)("span", {
				className: `${B} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ (0, P.jsx)(g, { mark: f[e.location] || "database" }), /* @__PURE__ */ (0, P.jsx)("span", {
					title: m,
					className: "min-w-0 truncate",
					children: m
				})]
			}),
			/* @__PURE__ */ (0, P.jsx)("span", {
				className: B,
				children: S(e.size || 0)
			}),
			/* @__PURE__ */ (0, P.jsx)("span", {
				className: B,
				children: x(e.duration)
			}),
			/* @__PURE__ */ (0, P.jsx)("span", {
				className: `${B} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: /* @__PURE__ */ (0, P.jsx)(M, {
					value: e.path ?? "",
					reference: n?.path ?? void 0
				})
			})
		]
	});
}
function Ne({ children: e, commit: t, selecting: n }) {
	let r = Ee(t, {
		selecting: n,
		items: "[data-duplicate-file][data-rectangle-key]"
	});
	return /* @__PURE__ */ (0, P.jsx)("div", {
		...r,
		children: e
	});
}
function W({ openItem: ee, toast: s, failure: f }) {
	let g = De(), [_, oe] = (0, N.useState)("pending"), [y, b] = (0, N.useState)(""), x = A({
		queryKey: y ? [...n, y] : n,
		queryFn: ({ signal: e }) => ge(e, y),
		placeholderData: (e) => e
	}), w = A({
		queryKey: y ? [...l, y] : l,
		queryFn: ({ signal: e }) => _e(e, y),
		enabled: _ === "kept",
		placeholderData: (e) => e
	}), T = A({
		queryKey: d,
		queryFn: ({ signal: e }) => ve(e)
	}), [E, D] = (0, N.useState)(""), [O, M] = (0, N.useState)(/* @__PURE__ */ new Set()), [F, I] = (0, N.useState)(/* @__PURE__ */ new Set()), R = we(() => {
		M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set());
	}), B = Ee(E ? void 0 : (e, t) => M((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])), {
		selecting: R,
		items: "[data-duplicate-group-tools][data-rectangle-key]"
	}), H = {
		receipt: s,
		failure: (e) => f(k("cleanup:duplicates.bulkFailed"), e)
	}, W = Ce({
		mutationFn: (e) => v(e, "dispose"),
		onSuccess: (e, t) => {
			I((e) => new Set([...e].filter((e) => !t.includes(e)))), V(), s(k("cleanup:duplicates.movedToTrash", { count: t.length }), { undo: async () => {
				try {
					await v(t, "restore");
				} catch (e) {
					f(k("cleanup:duplicates.undoTrash"), e);
				} finally {
					V();
				}
			} });
		},
		onSettled: () => D("")
	}), Pe = Ce({
		mutationFn: ({ group: e, on: t }) => ye(e.files.map((e) => e.id), t),
		onSuccess: (e, { group: t, on: n }) => {
			V(), s(k(n ? "cleanup:duplicates.keptAll" : "cleanup:duplicates.unkeptOne", { code: t.code }), { undo: async () => {
				try {
					await ye(t.files.map((e) => e.id), !n);
				} catch (e) {
					f(k("cleanup:duplicates.undoKeepAll"), e);
				} finally {
					V();
				}
			} });
		},
		onError: (e) => f(k("cleanup:duplicates.markKeepAll"), e),
		onSettled: () => D("")
	}), Fe = Te("duplicates", { size: (e) => Number(e.reclaimable || 0) }), G = _ === "kept", K = G ? w.data : x.data, Ie = G ? w.error : x.error;
	if (!K) return G && w.isPending ? /* @__PURE__ */ (0, P.jsx)("div", {
		role: "status",
		"aria-label": k("shell:spinner.loading"),
		"aria-busy": "true",
		children: /* @__PURE__ */ (0, P.jsx)("div", {
			"aria-hidden": "true",
			inert: !0,
			dangerouslySetInnerHTML: { __html: fe() }
		})
	}) : /* @__PURE__ */ (0, P.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, P.jsx)(p, {
			tone: "error",
			title: k("cleanup:duplicates.loadFailed"),
			children: Ie ? me(Ie) : k("cleanup:duplicates.listUnavailable")
		})
	});
	let q = Fe.sort(K.groups ?? []), Le = Number(x.data?.kept ?? K.kept ?? 0), J = le(T.data), Y = q.filter((e) => O.has(C(e))), Re = (e) => {
		M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set()), oe(e);
	}, ze = (e, t) => {
		t && pe(), M((n) => {
			let r = new Set(n);
			return t ? r.add(C(e)) : r.delete(C(e)), r;
		});
	}, X = (e, t) => {
		E || (D(t), Se(e, q, H).catch(H.failure).finally(() => D("")));
	}, Z = ({ groups: e, keep: t, key: n }) => {
		if (W.isPending) return;
		let r = de(e, t);
		r.length && ue({
			title: k("cleanup:duplicates.moveToTrash"),
			body: k("cleanup:duplicates.trashBody", {
				count: r.length,
				groups: e.length,
				keep: c[t] ?? c.largest,
				size: S(j(e, r))
			}) + k("shell:bulkAction.canUndo"),
			confirmLabel: k("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (D(n), W.mutateAsync(r))
		});
	}, Be = (e, t) => {
		t && pe(), I((n) => {
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, Ve = (e, t, n = F) => {
		if (E) return;
		let r = e.files.filter((e) => n.has(e.id)).map((e) => e.id);
		r.length && ue({
			title: k("cleanup:duplicates.moveToTrash"),
			body: k("cleanup:duplicates.selectedTrashBody", {
				count: r.length,
				remaining: e.files.length - r.length,
				size: S(j([e], r))
			}) + k("shell:bulkAction.canUndo"),
			confirmLabel: k("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (D(t), W.mutateAsync(r))
		});
	}, Q = (e) => ce(E === e && (W.isPending || Pe.isPending)), $ = (e, t, n) => {
		Pe.isPending || W.isPending || (D(t), Pe.mutate({
			group: e,
			on: n
		}));
	}, He = /* @__PURE__ */ (0, P.jsx)(m, {
		label: k("cleanup:duplicates.selectPage"),
		picked: Y.length,
		total: q.length,
		onChange: (e) => {
			e && pe(), M(e ? new Set(q.map(C)) : /* @__PURE__ */ new Set());
		}
	}), Ue = G ? [Ae(k("cleanup:duplicates.unkeep"))] : [
		U("largest", k("cleanup:duplicates.keepLargest")),
		U("longest", k("cleanup:duplicates.keepLongest")),
		...se(Y, J).map((e) => U(e, k("cleanup:duplicates.keepStorage", { storage: u[e] || e }))),
		ke(k("cleanup:duplicates.keepAll")),
		U("all", k("cleanup:duplicates.trashGroup"))
	];
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			g.menu,
			/* @__PURE__ */ (0, P.jsx)(a, {
				label: k(G ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				topLabel: k(G ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				attrs: {
					"data-catalog-frame": "",
					"data-filter-frame": "",
					"data-duplicates-frame": ""
				},
				bottomClassName: "min-h-12",
				top: G ? /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
					q.length ? /* @__PURE__ */ (0, P.jsx)(i, {
						busy: E === "all:unkeep",
						onPress: () => X(Ae(k("cleanup:duplicates.allUnkeep")), "all:unkeep"),
						children: k("cleanup:duplicates.allUnkeep")
					}) : null,
					/* @__PURE__ */ (0, P.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, P.jsx)(i, {
						onPress: () => Re("pending"),
						children: k("cleanup:duplicates.backToPending")
					})
				] }) : /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
					q.length ? /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:largest",
							onPress: () => X(U("largest", ""), "all:largest"),
							children: k("cleanup:duplicates.allKeepLargest")
						}),
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:longest",
							onPress: () => X(U("longest", ""), "all:longest"),
							children: k("cleanup:duplicates.allKeepLongest")
						}),
						se(q, J).map((e) => /* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === `all:${e}`,
							onPress: () => X(U(e, ""), `all:${e}`),
							children: /* @__PURE__ */ (0, P.jsx)(ae, {
								source: e,
								label: k("cleanup:duplicates.allPreferStorage", { storage: u[e] || e })
							})
						}, e)),
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:keep",
							onPress: () => X(ke(""), "all:keep"),
							children: k("cleanup:duplicates.allKeepAll")
						})
					] }) : null,
					/* @__PURE__ */ (0, P.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, P.jsx)(i, {
						onPress: () => Re("kept"),
						children: k("cleanup:duplicates.viewKept", { count: Le })
					})
				] }),
				bottom: /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("span", {
					"data-catalog-summary": "",
					children: [
						/* @__PURE__ */ (0, P.jsxs)("span", {
							"data-catalog-readout": "",
							role: "status",
							children: [
								k(G ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.summaryLabel"),
								" · ",
								k("cleanup:duplicates.groupCount", { count: Number(K.total || 0) }),
								" · ",
								G ? k("cleanup:duplicates.keptDetail", { count: Number(K.files || 0) }) : k("cleanup:duplicates.summaryDetail", {
									count: Number(K.files || 0),
									size: S(K.reclaimable)
								})
							]
						}),
						/* @__PURE__ */ (0, P.jsx)(o, {
							label: k("cleanup:duplicates.search"),
							value: y,
							onQuery: (e) => {
								b(e), M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set());
							}
						}),
						q.length ? He : null
					]
				}), /* @__PURE__ */ (0, P.jsx)("span", {
					"data-entity-sorts": "",
					children: /* @__PURE__ */ (0, P.jsx)(ie, {
						sorts: Fe.sorts,
						onSort: Fe.onSort
					})
				})] })
			}),
			/* @__PURE__ */ (0, P.jsx)(h, {
				label: k("cleanup:duplicates.dockLabel"),
				visible: Y.length > 0,
				count: k("cleanup:duplicates.selectedGroups", { count: Y.length }),
				actions: Ue.map((e) => ({
					action: e,
					items: Y,
					host: H,
					done: () => M(/* @__PURE__ */ new Set())
				})),
				children: /* @__PURE__ */ (0, P.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: he,
					children: k("cleanup:duplicates.clearSelection")
				})
			}),
			W.isError ? /* @__PURE__ */ (0, P.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, P.jsx)(p, {
					tone: "error",
					title: k("cleanup:duplicates.trashFailed"),
					children: me(W.error)
				})
			}) : null,
			q.length ? /* @__PURE__ */ (0, P.jsx)("div", {
				"data-rectangle-gutter": "",
				className: "flow-root",
				...B,
				children: q.map((n, r) => {
					let i = [n], a = (e) => `${r}:${e}`, o = O.has(C(n)), s = () => {
						let e = [{
							id: "select",
							label: o ? k("catalog:mediaActions.deselect") : k("cleanup:duplicates.selectGroup", { code: n.code }),
							icon: te,
							run: () => ze(n, !o)
						}, {
							id: "keep",
							label: k(G ? "cleanup:duplicates.unkeep" : "cleanup:duplicates.keepAll"),
							icon: G ? ne : xe,
							disabled: !!E,
							run: () => $(n, a("keep"), !G)
						}];
						if (!G) {
							let t = [
								["largest", k("cleanup:duplicates.keepLargest")],
								["longest", k("cleanup:duplicates.keepLongest")],
								...be(n.files, J).map((e) => [e, k("cleanup:duplicates.keepStorage", { storage: u[e] || e })]),
								["all", k("cleanup:duplicates.trashGroup")]
							];
							for (let [n, r] of t) e.push({
								id: n,
								label: r,
								icon: n === "all" ? re : xe,
								danger: n === "all",
								disabled: !!E,
								run: () => Z({
									groups: i,
									keep: n,
									key: a(n)
								})
							});
						}
						return {
							key: C(n),
							operations: e
						};
					};
					return /* @__PURE__ */ (0, P.jsxs)("section", {
						"aria-label": n.code,
						className: Oe,
						"data-board-selected": O.has(C(n)) || void 0,
						children: [/* @__PURE__ */ (0, P.jsxs)("div", {
							"data-duplicate-group-tools": "",
							"data-rectangle-key": C(n),
							className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
							onContextMenu: (e) => g.onContextMenu(e, s()),
							onKeyDown: (e) => {
								(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && g.onKeyDown(e, s());
							},
							children: [
								/* @__PURE__ */ (0, P.jsx)(t, {
									slot: null,
									"aria-label": k("cleanup:duplicates.selectGroup", { code: n.code }),
									isSelected: O.has(C(n)),
									onChange: (e) => ze(n, e)
								}),
								/* @__PURE__ */ (0, P.jsx)("b", {
									className: "text-title-2-medium text-text-primary",
									children: n.code
								}),
								/* @__PURE__ */ (0, P.jsx)("span", {
									className: "font-mono text-caption-1-regular leading-5 text-text-primary",
									children: k("cleanup:duplicates.groupDetail", {
										count: Number(n.count || 0),
										size: S(n.reclaimable)
									})
								}),
								je(n),
								n.new_files ? /* @__PURE__ */ (0, P.jsx)("span", {
									className: `${z} text-text-primary`,
									children: k("cleanup:duplicates.newFiles", { count: n.new_files })
								}) : null,
								n.cross_drive ? /* @__PURE__ */ (0, P.jsx)("span", {
									className: `${z} text-text-secondary`,
									children: k("cleanup:duplicates.crossDrive", { drives: n.drives.join(" ") })
								}) : null,
								/* @__PURE__ */ (0, P.jsx)("span", {
									className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
									children: G ? /* @__PURE__ */ (0, P.jsx)(e, {
										variant: "secondary",
										size: "small",
										...Q(a("unkeep")),
										onClick: () => $(n, a("unkeep"), !1),
										children: k("cleanup:duplicates.unkeep")
									}) : /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "danger",
											size: "small",
											...Q(a("files")),
											disabled: E !== "" || !n.files.some((e) => F.has(e.id)),
											onClick: () => Ve(n, a("files")),
											children: k("cleanup:duplicates.trashSelectedFiles", { count: n.files.filter((e) => F.has(e.id)).length })
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...Q(a("largest")),
											onClick: () => Z({
												groups: i,
												keep: "largest",
												key: a("largest")
											}),
											children: k("cleanup:duplicates.keepLargest")
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...Q(a("longest")),
											onClick: () => Z({
												groups: i,
												keep: "longest",
												key: a("longest")
											}),
											children: k("cleanup:duplicates.keepLongest")
										}),
										be(n.files, J).map((t) => /* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...Q(a(t)),
											onClick: () => Z({
												groups: i,
												keep: t,
												key: a(t)
											}),
											children: /* @__PURE__ */ (0, P.jsx)(ae, {
												source: t,
												label: k("cleanup:duplicates.keepStorage", { storage: u[t] || t })
											})
										}, t)),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...Q(a("keep")),
											onClick: () => $(n, a("keep"), !0),
											children: k("cleanup:duplicates.keepAll")
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "danger",
											size: "small",
											...Q(a("all")),
											onClick: () => Z({
												groups: i,
												keep: "all",
												key: a("all")
											}),
											children: k("cleanup:duplicates.trashGroup")
										})
									] })
								})
							]
						}), /* @__PURE__ */ (0, P.jsx)(Ne, {
							selecting: R,
							commit: !E && !G ? (e, t) => I((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
							children: n.files.map((e) => /* @__PURE__ */ (0, P.jsx)(Me, {
								file: e,
								reference: n.files.find((t) => t.id !== e.id),
								openItem: ee,
								selected: F.has(e.id),
								onSelect: G ? void 0 : (t) => Be(e.id, t),
								busy: !!E,
								onTrash: G ? void 0 : () => Ve(n, a("files"), /* @__PURE__ */ new Set([e.id]))
							}, e.id))
						})]
					}, C(n));
				})
			}) : y ? /* @__PURE__ */ (0, P.jsx)(r, {
				icon: L,
				title: k("cleanup:duplicates.noMatches"),
				actions: /* @__PURE__ */ (0, P.jsx)(e, {
					size: "small",
					onClick: () => b(""),
					children: k("catalog:shared.clearFilters")
				}),
				children: null
			}) : G ? /* @__PURE__ */ (0, P.jsx)(r, {
				icon: L,
				title: k("cleanup:duplicates.keptEmptyTitle"),
				children: k("cleanup:duplicates.keptEmptyBody")
			}) : /* @__PURE__ */ (0, P.jsx)(r, {
				icon: L,
				title: k("cleanup:duplicates.emptyTitle"),
				children: k("cleanup:duplicates.emptyBody")
			}),
			q.length > 0 && K.total > q.length ? /* @__PURE__ */ (0, P.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: k("cleanup:duplicates.topGroups", {
					shown: q.length.toLocaleString(),
					count: Number(K.total)
				})
			}) : null
		]
	});
}
export { W as DuplicatesPage };

//# debugId=4658a216-dfa2-43f5-9c70-3b0308756f2b