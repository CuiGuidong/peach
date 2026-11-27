(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "abda3904-3910-4d9a-8b32-3874b5199644", e._sentryDebugIdIdentifier = "sentry-dbid-abda3904-3910-4d9a-8b32-3874b5199644");
	} catch {}
})();
import { Button as e, Checkbox as t, DUPLICATES_KEY as n, EmptyState as r, FilterActionButton as i, FilterGlassRows as a, FilterSearch as o, Gg as ee, H7 as te, ImageWithFallback as s, JZ as ne, KEEP_LABELS as c, KEPT_DUPLICATES_KEY as l, LOC as u, M6 as re, MEDIA_SOURCES_KEY as d, MEDIA_SOURCE_ICONS as f, Note as p, QueryErrorNote as m, SelectAllButton as ie, SelectionDock as ae, SortKeys as oe, SourceLabel as se, SourceMark as h, TRASH_KEY as ce, __toESM as le, batchOperate as g, bulkCloudPreferences as ue, busyProps as de, cardClass as _, cloudLocations as fe, confirmModal as pe, coverUrl as v, duplicateVictims as y, duplicatesSkeleton as me, enterPageSelection as b, errorMessage as he, exitPageSelection as ge, fetchDuplicates as _e, fetchKeptDuplicates as ve, fetchMediaSources as ye, fmtDur as x, fmtSize as S, groupKey as C, keepGroup as be, keepGroups as w, mixedCloudPreferences as xe, queryClient as T, qx as Se, require_jsx_runtime as E, require_react as D, runBulkAction as Ce, spriteGlyph as O, t as k, useMutation as we, usePageSelection as Te, useQuery as A, useQueueSort as Ee, useRectangleSelection as De, useWorkContextMenu as Oe, victimBytes as j } from "./peach-app.js";
import { ComparisonText as M } from "./peach-app.comparison-text-CyF--PA8.js";
// src/react/components/filename-comparison.tsx
var N = /* @__PURE__ */ le(D(), 1), P = E();
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
var I = O("play"), L = O("file-stack"), ke = _({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), R = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", z = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", B = "font-mono text-caption-1-regular leading-5 text-text-secondary", V = () => {
	T.invalidateQueries({ queryKey: n }), T.invalidateQueries({
		queryKey: ce,
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
			let n = y(t, e);
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
		run: async (t) => (n = y(t, e), await g(n, "dispose"), V(), async () => {
			await g(n, "restore"), V();
		}),
		receipt: () => k("cleanup:duplicates.movedToTrash", { count: n.length })
	};
}
var Ae = (e) => ({
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
}), je = (e) => ({
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
function Me(e) {
	return e.identical ? /* @__PURE__ */ (0, P.jsx)("span", {
		className: `${z} text-(--keep)`,
		children: k("cleanup:duplicates.sha1Match")
	}) : /* @__PURE__ */ (0, P.jsx)("span", {
		className: `${z} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? k("cleanup:duplicates.sameCodeShorter") : k("cleanup:duplicates.byDuration")
	});
}
function Ne({ file: e, reference: n, openItem: r, selected: i, onSelect: a, onTrash: o, busy: ne }) {
	let c = Oe(), l = () => r(e.id), d = [{
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
	}, m = u[e.location] || e.location || e.drive, ie = `/thumb?id=${e.id}&c=4`;
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
					src: e.has_cover ? v(e, 2) : ie,
					alt: "",
					loading: "lazy",
					fallbacks: e.has_cover ? [ie] : void 0,
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
				children: [/* @__PURE__ */ (0, P.jsx)(h, { mark: f[e.location] || "database" }), /* @__PURE__ */ (0, P.jsx)("span", {
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
function Pe({ children: e, commit: t, selecting: n }) {
	let r = De(t, {
		selecting: n,
		items: "[data-duplicate-file][data-rectangle-key]"
	});
	return /* @__PURE__ */ (0, P.jsx)("div", {
		...r,
		children: e
	});
}
function W({ openItem: ee, toast: s, failure: f }) {
	let h = Oe(), [ce, le] = (0, N.useState)("pending"), [_, v] = (0, N.useState)(""), x = A({
		queryKey: _ ? [...n, _] : n,
		queryFn: ({ signal: e }) => _e(e, _),
		placeholderData: (e) => e
	}), w = A({
		queryKey: _ ? [...l, _] : l,
		queryFn: ({ signal: e }) => ve(e, _),
		enabled: ce === "kept",
		placeholderData: (e) => e
	}), T = A({
		queryKey: d,
		queryFn: ({ signal: e }) => ye(e)
	}), [E, D] = (0, N.useState)(""), [O, M] = (0, N.useState)(/* @__PURE__ */ new Set()), [F, I] = (0, N.useState)(/* @__PURE__ */ new Set()), R = Te(() => {
		M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set());
	}), B = De(E ? void 0 : (e, t) => M((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])), {
		selecting: R,
		items: "[data-duplicate-group-tools][data-rectangle-key]"
	}), H = {
		receipt: s,
		failure: (e) => f(k("cleanup:duplicates.bulkFailed"), e)
	}, W = we({
		mutationFn: (e) => g(e, "dispose"),
		onSuccess: (e, t) => {
			I((e) => new Set([...e].filter((e) => !t.includes(e)))), V(), s(k("cleanup:duplicates.movedToTrash", { count: t.length }), { undo: async () => {
				try {
					await g(t, "restore");
				} catch (e) {
					f(k("cleanup:duplicates.undoTrash"), e);
				} finally {
					V();
				}
			} });
		},
		onSettled: () => D("")
	}), Fe = we({
		mutationFn: ({ group: e, on: t }) => be(e.files.map((e) => e.id), t),
		onSuccess: (e, { group: t, on: n }) => {
			V(), s(k(n ? "cleanup:duplicates.keptAll" : "cleanup:duplicates.unkeptOne", { code: t.code }), { undo: async () => {
				try {
					await be(t.files.map((e) => e.id), !n);
				} catch (e) {
					f(k("cleanup:duplicates.undoKeepAll"), e);
				} finally {
					V();
				}
			} });
		},
		onError: (e) => f(k("cleanup:duplicates.markKeepAll"), e),
		onSettled: () => D("")
	}), Ie = Ee("duplicates", { size: (e) => Number(e.reclaimable || 0) }), G = ce === "kept", K = G ? w : x, q = K.data;
	if (!q) return K.isPending ? /* @__PURE__ */ (0, P.jsx)("div", {
		role: "status",
		"aria-label": k("shell:spinner.loading"),
		"aria-busy": "true",
		children: /* @__PURE__ */ (0, P.jsx)("div", {
			"aria-hidden": "true",
			inert: !0,
			dangerouslySetInnerHTML: { __html: me() }
		})
	}) : /* @__PURE__ */ (0, P.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, P.jsx)(m, {
			titleKey: "cleanup:duplicates.loadFailed",
			query: K
		})
	});
	let J = Ie.sort(q.groups ?? []), Le = Number(x.data?.kept ?? q.kept ?? 0), Y = fe(T.data), X = J.filter((e) => O.has(C(e))), Re = (e) => {
		M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set()), le(e);
	}, ze = (e, t) => {
		t && b(), M((n) => {
			let r = new Set(n);
			return t ? r.add(C(e)) : r.delete(C(e)), r;
		});
	}, Z = (e, t) => {
		E || (D(t), Ce(e, J, H).catch(H.failure).finally(() => D("")));
	}, Q = ({ groups: e, keep: t, key: n }) => {
		if (W.isPending) return;
		let r = y(e, t);
		r.length && pe({
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
		t && b(), I((n) => {
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, Ve = (e, t, n = F) => {
		if (E) return;
		let r = e.files.filter((e) => n.has(e.id)).map((e) => e.id);
		r.length && pe({
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
	}, $ = (e) => de(E === e && (W.isPending || Fe.isPending)), He = (e, t, n) => {
		Fe.isPending || W.isPending || (D(t), Fe.mutate({
			group: e,
			on: n
		}));
	}, Ue = /* @__PURE__ */ (0, P.jsx)(ie, {
		label: k("cleanup:duplicates.selectPage"),
		picked: X.length,
		total: J.length,
		onChange: (e) => {
			e && b(), M(e ? new Set(J.map(C)) : /* @__PURE__ */ new Set());
		}
	}), We = G ? [je(k("cleanup:duplicates.unkeep"))] : [
		U("largest", k("cleanup:duplicates.keepLargest")),
		U("longest", k("cleanup:duplicates.keepLongest")),
		...ue(X, Y).map((e) => U(e, k("cleanup:duplicates.keepStorage", { storage: u[e] || e }))),
		Ae(k("cleanup:duplicates.keepAll")),
		U("all", k("cleanup:duplicates.trashGroup"))
	];
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			h.menu,
			K.error ? /* @__PURE__ */ (0, P.jsx)(m, {
				titleKey: "cleanup:duplicates.loadFailed",
				query: K
			}) : null,
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
					J.length ? /* @__PURE__ */ (0, P.jsx)(i, {
						busy: E === "all:unkeep",
						onPress: () => Z(je(k("cleanup:duplicates.allUnkeep")), "all:unkeep"),
						children: k("cleanup:duplicates.allUnkeep")
					}) : null,
					/* @__PURE__ */ (0, P.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, P.jsx)(i, {
						onPress: () => Re("pending"),
						children: k("cleanup:duplicates.backToPending")
					})
				] }) : /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
					J.length ? /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:largest",
							onPress: () => Z(U("largest", ""), "all:largest"),
							children: k("cleanup:duplicates.allKeepLargest")
						}),
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:longest",
							onPress: () => Z(U("longest", ""), "all:longest"),
							children: k("cleanup:duplicates.allKeepLongest")
						}),
						ue(J, Y).map((e) => /* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === `all:${e}`,
							onPress: () => Z(U(e, ""), `all:${e}`),
							children: /* @__PURE__ */ (0, P.jsx)(se, {
								source: e,
								label: k("cleanup:duplicates.allPreferStorage", { storage: u[e] || e })
							})
						}, e)),
						/* @__PURE__ */ (0, P.jsx)(i, {
							busy: E === "all:keep",
							onPress: () => Z(Ae(""), "all:keep"),
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
								k("cleanup:duplicates.groupCount", { count: Number(q.total || 0) }),
								" · ",
								G ? k("cleanup:duplicates.keptDetail", { count: Number(q.files || 0) }) : k("cleanup:duplicates.summaryDetail", {
									count: Number(q.files || 0),
									size: S(q.reclaimable)
								})
							]
						}),
						/* @__PURE__ */ (0, P.jsx)(o, {
							label: k("cleanup:duplicates.search"),
							value: _,
							onQuery: (e) => {
								v(e), M(/* @__PURE__ */ new Set()), I(/* @__PURE__ */ new Set());
							}
						}),
						J.length ? Ue : null
					]
				}), /* @__PURE__ */ (0, P.jsx)("span", {
					"data-entity-sorts": "",
					children: /* @__PURE__ */ (0, P.jsx)(oe, {
						sorts: Ie.sorts,
						onSort: Ie.onSort
					})
				})] })
			}),
			/* @__PURE__ */ (0, P.jsx)(ae, {
				label: k("cleanup:duplicates.dockLabel"),
				visible: X.length > 0,
				count: k("cleanup:duplicates.selectedGroups", { count: X.length }),
				actions: We.map((e) => ({
					action: e,
					items: X,
					host: H,
					done: () => M(/* @__PURE__ */ new Set())
				})),
				children: /* @__PURE__ */ (0, P.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: ge,
					children: k("cleanup:duplicates.clearSelection")
				})
			}),
			W.isError ? /* @__PURE__ */ (0, P.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, P.jsx)(p, {
					tone: "error",
					title: k("cleanup:duplicates.trashFailed"),
					children: he(W.error)
				})
			}) : null,
			J.length ? /* @__PURE__ */ (0, P.jsx)("div", {
				"data-rectangle-gutter": "",
				className: "flow-root",
				...B,
				children: J.map((n, r) => {
					let i = [n], a = (e) => `${r}:${e}`, o = O.has(C(n)), s = () => {
						let e = [{
							id: "select",
							label: o ? k("catalog:mediaActions.deselect") : k("cleanup:duplicates.selectGroup", { code: n.code }),
							icon: te,
							run: () => ze(n, !o)
						}, {
							id: "keep",
							label: k(G ? "cleanup:duplicates.unkeep" : "cleanup:duplicates.keepAll"),
							icon: G ? ne : Se,
							disabled: !!E,
							run: () => He(n, a("keep"), !G)
						}];
						if (!G) {
							let t = [
								["largest", k("cleanup:duplicates.keepLargest")],
								["longest", k("cleanup:duplicates.keepLongest")],
								...xe(n.files, Y).map((e) => [e, k("cleanup:duplicates.keepStorage", { storage: u[e] || e })]),
								["all", k("cleanup:duplicates.trashGroup")]
							];
							for (let [n, r] of t) e.push({
								id: n,
								label: r,
								icon: n === "all" ? re : Se,
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
							key: C(n),
							operations: e
						};
					};
					return /* @__PURE__ */ (0, P.jsxs)("section", {
						"aria-label": n.code,
						className: ke,
						"data-board-selected": O.has(C(n)) || void 0,
						children: [/* @__PURE__ */ (0, P.jsxs)("div", {
							"data-duplicate-group-tools": "",
							"data-rectangle-key": C(n),
							className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
							onContextMenu: (e) => h.onContextMenu(e, s()),
							onKeyDown: (e) => {
								(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && h.onKeyDown(e, s());
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
								Me(n),
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
										...$(a("unkeep")),
										onClick: () => He(n, a("unkeep"), !1),
										children: k("cleanup:duplicates.unkeep")
									}) : /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "danger",
											size: "small",
											...$(a("files")),
											disabled: E !== "" || !n.files.some((e) => F.has(e.id)),
											onClick: () => Ve(n, a("files")),
											children: k("cleanup:duplicates.trashSelectedFiles", { count: n.files.filter((e) => F.has(e.id)).length })
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("largest")),
											onClick: () => Q({
												groups: i,
												keep: "largest",
												key: a("largest")
											}),
											children: k("cleanup:duplicates.keepLargest")
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("longest")),
											onClick: () => Q({
												groups: i,
												keep: "longest",
												key: a("longest")
											}),
											children: k("cleanup:duplicates.keepLongest")
										}),
										xe(n.files, Y).map((t) => /* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a(t)),
											onClick: () => Q({
												groups: i,
												keep: t,
												key: a(t)
											}),
											children: /* @__PURE__ */ (0, P.jsx)(se, {
												source: t,
												label: k("cleanup:duplicates.keepStorage", { storage: u[t] || t })
											})
										}, t)),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "secondary",
											size: "small",
											...$(a("keep")),
											onClick: () => He(n, a("keep"), !0),
											children: k("cleanup:duplicates.keepAll")
										}),
										/* @__PURE__ */ (0, P.jsx)(e, {
											variant: "danger",
											size: "small",
											...$(a("all")),
											onClick: () => Q({
												groups: i,
												keep: "all",
												key: a("all")
											}),
											children: k("cleanup:duplicates.trashGroup")
										})
									] })
								})
							]
						}), /* @__PURE__ */ (0, P.jsx)(Pe, {
							selecting: R,
							commit: !E && !G ? (e, t) => I((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
							children: n.files.map((e) => /* @__PURE__ */ (0, P.jsx)(Ne, {
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
			}) : _ ? /* @__PURE__ */ (0, P.jsx)(r, {
				icon: L,
				title: k("cleanup:duplicates.noMatches"),
				actions: /* @__PURE__ */ (0, P.jsx)(e, {
					size: "small",
					onClick: () => v(""),
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
			J.length > 0 && q.total > J.length ? /* @__PURE__ */ (0, P.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: k("cleanup:duplicates.topGroups", {
					shown: J.length.toLocaleString(),
					count: Number(q.total)
				})
			}) : null
		]
	});
}
export { W as DuplicatesPage };

//# debugId=abda3904-3910-4d9a-8b32-3874b5199644