(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7abfbe72-4ff1-4193-95e6-49a493cc67ab", e._sentryDebugIdIdentifier = "sentry-dbid-7abfbe72-4ff1-4193-95e6-49a493cc67ab");
	} catch {}
})();
import { Button as e, Checkbox as t, DUPLICATES_KEY as n, EmptyState as r, FilterActionButton as i, FilterGlassRows as a, Gg as o, H7 as ee, JZ as te, KEEP_LABELS as s, KEPT_DUPLICATES_KEY as c, LOC as l, M6 as ne, MEDIA_SOURCES_KEY as u, MEDIA_SOURCE_ICONS as d, Note as f, SelectAllButton as p, SelectionDock as m, SortKeys as h, SourceLabel as re, SourceMark as g, TRASH_KEY as _, __toESM as v, batchOperate as y, bulkCloudPreferences as ie, busyProps as ae, cardClass as oe, cloudLocations as se, confirmModal as ce, coverUrl as b, duplicateVictims as x, enterPageSelection as S, errorMessage as le, exitPageSelection as ue, fetchDuplicates as de, fetchKeptDuplicates as fe, fetchMediaSources as pe, fmtDur as C, fmtSize as w, groupKey as T, keepGroup as me, keepGroups as E, middleTruncateCut as D, mixedCloudPreferences as he, queryClient as O, qx as ge, require_jsx_runtime as k, require_react as A, runBulkAction as _e, spriteGlyph as j, t as M, useMutation as ve, usePageSelection as ye, useQuery as N, useQueueSort as be, useRectangleSelection as xe, useWorkContextMenu as Se, victimBytes as P } from "./peach-app.js";
import { ComparisonText as F } from "./peach-app.comparison-text-d2N41j2E.js";
// src/react/components/filename-comparison.tsx
var I = /* @__PURE__ */ v(A(), 1), L = k();
function R({ value: e, reference: t, onOpen: n }) {
	let r = (0, I.useRef)(null), [i, a] = (0, I.useState)(null);
	return (0, I.useLayoutEffect)(() => {
		let t = r.current;
		if (!t) return;
		let n = !0, i = () => {
			if (!n) return;
			let r = D(t, e);
			a((e) => e?.start === r?.start && e?.end === r?.end ? e : r);
		};
		i();
		let o = typeof ResizeObserver > "u" ? null : new ResizeObserver(i);
		return o?.observe(t), t.parentElement && o?.observe(t.parentElement), document.fonts?.ready.then(i), () => {
			n = !1, o?.disconnect();
		};
	}, [e]), /* @__PURE__ */ (0, L.jsx)("button", {
		ref: r,
		type: "button",
		onClick: n,
		title: e,
		"aria-label": e,
		"data-middle-truncate": "",
		"data-middle-truncate-within": "",
		"data-middle-truncate-managed": "",
		onCopy: (t) => {
			t.clipboardData.setData("text/plain", e), t.preventDefault();
		},
		className: "min-w-0 shrink cursor-pointer truncate text-left text-body-regular hover:text-text-secondary",
		children: /* @__PURE__ */ (0, L.jsx)(F, {
			value: e,
			reference: t,
			cut: i
		})
	});
}
// src/react/duplicates/duplicates-page.tsx
var Ce = j("play"), we = j("file-stack"), Te = oe({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), z = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", B = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", V = "font-mono text-caption-1-regular leading-5 text-text-secondary", H = () => {
	O.invalidateQueries({ queryKey: n }), O.invalidateQueries({
		queryKey: _,
		exact: !0
	});
}, U = (e) => e.reduce((e, t) => e + t.files.length, 0);
function W(e, t) {
	let n = [];
	return {
		key: `keep-${e}`,
		label: t,
		reversal: "undo",
		danger: e === "all",
		holdToConfirm: !0,
		confirm: (t) => {
			let n = x(t, e);
			return {
				title: M("cleanup:duplicates.moveToTrash"),
				danger: e === "all",
				body: M("cleanup:duplicates.trashBody", {
					count: n.length,
					groups: t.length,
					keep: s[e] ?? s.largest,
					size: w(P(t, n))
				})
			};
		},
		run: async (t) => (n = x(t, e), await y(n, "dispose"), H(), async () => {
			await y(n, "restore"), H();
		}),
		receipt: () => M("cleanup:duplicates.movedToTrash", { count: n.length })
	};
}
var Ee = (e) => ({
	key: "keep-all",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: M("cleanup:duplicates.markKeepAll"),
		body: M("cleanup:duplicates.keepAllBody", {
			count: e.length,
			files: U(e)
		}),
		recovery: M("cleanup:duplicates.keepAllRecovery")
	}),
	run: async (e) => (await E(e, !0), H(), async () => {
		await E(e, !1), H();
	}),
	receipt: (e) => M("cleanup:duplicates.keptGroups", { count: e.length })
}), De = (e) => ({
	key: "unkeep",
	label: e,
	reversal: "undo",
	confirm: (e) => ({
		title: M("cleanup:duplicates.unkeep"),
		body: M("cleanup:duplicates.unkeepBody", { count: e.length })
	}),
	run: async (e) => (await E(e, !1), H(), async () => {
		await E(e, !0), H();
	}),
	receipt: (e) => M("cleanup:duplicates.unkeptGroups", { count: e.length })
});
function Oe(e) {
	return e.identical ? /* @__PURE__ */ (0, L.jsx)("span", {
		className: `${B} text-(--keep)`,
		children: M("cleanup:duplicates.sha1Match")
	}) : /* @__PURE__ */ (0, L.jsx)("span", {
		className: `${B} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? M("cleanup:duplicates.sameCodeShorter") : M("cleanup:duplicates.byDuration")
	});
}
function ke({ file: e, reference: n, openItem: r, selected: i, onSelect: a, onTrash: te, busy: s }) {
	let c = Se(), u = () => r(e.id), f = [{
		id: "open",
		label: M("catalog:mediaActions.open"),
		icon: o,
		run: u
	}];
	a && f.push({
		id: "select",
		label: M(i ? "catalog:mediaActions.deselect" : "catalog:mediaActions.select"),
		icon: ee,
		run: () => a(!i)
	}), te && f.push({
		id: "trash",
		label: M("cleanup:duplicates.moveToTrash"),
		icon: ne,
		danger: !0,
		disabled: s,
		run: te
	});
	let p = {
		key: e.id,
		operations: f
	}, m = l[e.location] || e.location || e.drive, h = `/thumb?id=${e.id}&c=4`;
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		"data-duplicate-file": e.id,
		"data-rectangle-key": e.id,
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		onContextMenu: (e) => c.onContextMenu(e, p),
		onKeyDown: (e) => c.onKeyDown(e, p),
		children: [
			c.menu,
			/* @__PURE__ */ (0, L.jsxs)("button", {
				type: "button",
				onClick: u,
				"aria-label": M("cleanup:duplicates.previewFile", { name: e.name }),
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-media-placeholder text-text-secondary",
				children: [/* @__PURE__ */ (0, L.jsx)(Ce, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ (0, L.jsx)("img", {
					src: e.has_cover ? b(e, 2) : h,
					alt: "",
					loading: "lazy",
					"data-drop": "self",
					"data-fallbacks": e.has_cover ? h : void 0,
					className: "absolute inset-0 size-full object-contain"
				}, e.cover_version || h)]
			}),
			/* @__PURE__ */ (0, L.jsxs)("span", {
				className: "flex min-w-0 items-center gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [
					a ? /* @__PURE__ */ (0, L.jsx)(t, {
						slot: null,
						"aria-label": M("cleanup:duplicates.selectFile", { name: e.name }),
						isSelected: i,
						onChange: a
					}) : null,
					/* @__PURE__ */ (0, L.jsx)(R, {
						value: e.name,
						reference: n?.name,
						onOpen: u
					}),
					e.is_largest || e.is_longest || e.is_new ? /* @__PURE__ */ (0, L.jsxs)("span", {
						className: "flex flex-none gap-1",
						children: [
							e.is_new ? /* @__PURE__ */ (0, L.jsx)("i", {
								className: `${z} not-italic bg-background-primary-hover text-text-primary`,
								children: M("cleanup:duplicates.newCopy")
							}) : null,
							e.is_largest ? /* @__PURE__ */ (0, L.jsx)("i", {
								className: `${z} not-italic bg-background-primary-hover text-text-secondary`,
								children: M("cleanup:duplicates.largest")
							}) : null,
							e.is_longest ? /* @__PURE__ */ (0, L.jsx)("i", {
								className: `${z} not-italic bg-(--keep)/22 text-(--keep)`,
								children: M("cleanup:duplicates.longest")
							}) : null
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, L.jsxs)("span", {
				className: `${V} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ (0, L.jsx)(g, { mark: d[e.location] || "database" }), /* @__PURE__ */ (0, L.jsx)("span", {
					title: m,
					className: "min-w-0 truncate",
					children: m
				})]
			}),
			/* @__PURE__ */ (0, L.jsx)("span", {
				className: V,
				children: w(e.size || 0)
			}),
			/* @__PURE__ */ (0, L.jsx)("span", {
				className: V,
				children: C(e.duration)
			}),
			/* @__PURE__ */ (0, L.jsx)("span", {
				className: `${V} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: /* @__PURE__ */ (0, L.jsx)(F, {
					value: e.path ?? "",
					reference: n?.path ?? void 0
				})
			})
		]
	});
}
function Ae({ children: e, commit: t }) {
	let n = xe(t, "[data-duplicate-file][data-rectangle-key]");
	return /* @__PURE__ */ (0, L.jsx)("div", {
		...n,
		children: e
	});
}
function G({ openItem: o, toast: d, failure: g }) {
	let _ = Se(), [v, oe] = (0, I.useState)("pending"), b = N({
		queryKey: n,
		queryFn: ({ signal: e }) => de(e)
	}), C = N({
		queryKey: c,
		queryFn: ({ signal: e }) => fe(e),
		enabled: v === "kept"
	}), E = N({
		queryKey: u,
		queryFn: ({ signal: e }) => pe(e)
	}), [D, O] = (0, I.useState)(""), [k, A] = (0, I.useState)(/* @__PURE__ */ new Set()), [j, F] = (0, I.useState)(/* @__PURE__ */ new Set()), R = ye(() => {
		A(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Set());
	}), Ce = xe(R && !D ? (e, t) => A((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e])) : void 0, "[data-duplicate-group-tools][data-rectangle-key]"), z = {
		receipt: d,
		failure: (e) => g(M("cleanup:duplicates.bulkFailed"), e)
	}, V = ve({
		mutationFn: (e) => y(e, "dispose"),
		onSuccess: (e, t) => {
			F((e) => new Set([...e].filter((e) => !t.includes(e)))), H(), d(M("cleanup:duplicates.movedToTrash", { count: t.length }), { undo: async () => {
				try {
					await y(t, "restore");
				} catch (e) {
					g(M("cleanup:duplicates.undoTrash"), e);
				} finally {
					H();
				}
			} });
		},
		onSettled: () => O("")
	}), U = ve({
		mutationFn: ({ group: e, on: t }) => me(e.files.map((e) => e.id), t),
		onSuccess: (e, { group: t, on: n }) => {
			H(), d(M(n ? "cleanup:duplicates.keptAll" : "cleanup:duplicates.unkeptOne", { code: t.code }), { undo: async () => {
				try {
					await me(t.files.map((e) => e.id), !n);
				} catch (e) {
					g(M("cleanup:duplicates.undoKeepAll"), e);
				} finally {
					H();
				}
			} });
		},
		onError: (e) => g(M("cleanup:duplicates.markKeepAll"), e),
		onSettled: () => O("")
	}), G = be("duplicates", { size: (e) => Number(e.reclaimable || 0) }), K = v === "kept", q = K ? C.data : b.data, je = K ? C.error : b.error;
	if (!q) return K && C.isPending ? /* @__PURE__ */ (0, L.jsx)("div", { className: "mx-auto w-full max-w-board" }) : /* @__PURE__ */ (0, L.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, L.jsx)(f, {
			tone: "error",
			title: M("cleanup:duplicates.loadFailed"),
			children: je ? le(je) : M("cleanup:duplicates.listUnavailable")
		})
	});
	let J = G.sort(q.groups ?? []), Me = Number(b.data?.kept ?? q.kept ?? 0), Y = se(E.data), X = J.filter((e) => k.has(T(e))), Ne = (e) => {
		A(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Set()), oe(e);
	}, Pe = (e, t) => {
		t && S(), A((n) => {
			let r = new Set(n);
			return t ? r.add(T(e)) : r.delete(T(e)), r;
		});
	}, Z = (e, t) => {
		D || (O(t), _e(e, J, z).catch(z.failure).finally(() => O("")));
	}, Q = ({ groups: e, keep: t, key: n }) => {
		if (V.isPending) return;
		let r = x(e, t);
		r.length && ce({
			title: M("cleanup:duplicates.moveToTrash"),
			body: M("cleanup:duplicates.trashBody", {
				count: r.length,
				groups: e.length,
				keep: s[t] ?? s.largest,
				size: w(P(e, r))
			}) + M("shell:bulkAction.canUndo"),
			confirmLabel: M("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (O(n), V.mutateAsync(r))
		});
	}, Fe = (e, t) => {
		t && S(), F((n) => {
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, Ie = (e, t, n = j) => {
		if (D) return;
		let r = e.files.filter((e) => n.has(e.id)).map((e) => e.id);
		r.length && ce({
			title: M("cleanup:duplicates.moveToTrash"),
			body: M("cleanup:duplicates.selectedTrashBody", {
				count: r.length,
				remaining: e.files.length - r.length,
				size: w(P([e], r))
			}) + M("shell:bulkAction.canUndo"),
			confirmLabel: M("cleanup:duplicates.moveToTrash"),
			holdToConfirm: !0,
			onConfirm: () => (O(t), V.mutateAsync(r))
		});
	}, $ = (e) => ae(D === e && (V.isPending || U.isPending)), Le = (e, t, n) => {
		U.isPending || V.isPending || (O(t), U.mutate({
			group: e,
			on: n
		}));
	}, Re = /* @__PURE__ */ (0, L.jsx)(p, {
		label: M("cleanup:duplicates.selectPage"),
		picked: X.length,
		total: J.length,
		onChange: (e) => {
			e && S(), A(e ? new Set(J.map(T)) : /* @__PURE__ */ new Set());
		}
	}), ze = K ? [De(M("cleanup:duplicates.unkeep"))] : [
		W("largest", M("cleanup:duplicates.keepLargest")),
		W("longest", M("cleanup:duplicates.keepLongest")),
		...ie(X, Y).map((e) => W(e, M("cleanup:duplicates.keepStorage", { storage: l[e] || e }))),
		Ee(M("cleanup:duplicates.keepAll")),
		W("all", M("cleanup:duplicates.trashGroup"))
	];
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		...Ce,
		children: [
			_.menu,
			/* @__PURE__ */ (0, L.jsx)(a, {
				label: M(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				topLabel: M(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.bulkKeep"),
				attrs: {
					"data-catalog-frame": "",
					"data-filter-frame": "",
					"data-duplicates-frame": ""
				},
				bottomClassName: "min-h-12",
				top: K ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
					J.length ? /* @__PURE__ */ (0, L.jsx)(i, {
						busy: D === "all:unkeep",
						onPress: () => Z(De(M("cleanup:duplicates.allUnkeep")), "all:unkeep"),
						children: M("cleanup:duplicates.allUnkeep")
					}) : null,
					/* @__PURE__ */ (0, L.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, L.jsx)(i, {
						onPress: () => Ne("pending"),
						children: M("cleanup:duplicates.backToPending")
					})
				] }) : /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
					J.length ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
						/* @__PURE__ */ (0, L.jsx)(i, {
							busy: D === "all:largest",
							onPress: () => Z(W("largest", ""), "all:largest"),
							children: M("cleanup:duplicates.allKeepLargest")
						}),
						/* @__PURE__ */ (0, L.jsx)(i, {
							busy: D === "all:longest",
							onPress: () => Z(W("longest", ""), "all:longest"),
							children: M("cleanup:duplicates.allKeepLongest")
						}),
						ie(J, Y).map((e) => /* @__PURE__ */ (0, L.jsx)(i, {
							busy: D === `all:${e}`,
							onPress: () => Z(W(e, ""), `all:${e}`),
							children: /* @__PURE__ */ (0, L.jsx)(re, {
								source: e,
								label: M("cleanup:duplicates.allPreferStorage", { storage: l[e] || e })
							})
						}, e)),
						/* @__PURE__ */ (0, L.jsx)(i, {
							busy: D === "all:keep",
							onPress: () => Z(Ee(""), "all:keep"),
							children: M("cleanup:duplicates.allKeepAll")
						})
					] }) : null,
					/* @__PURE__ */ (0, L.jsx)("span", { className: "ml-auto" }),
					/* @__PURE__ */ (0, L.jsx)(i, {
						onPress: () => Ne("kept"),
						children: M("cleanup:duplicates.viewKept", { count: Me })
					})
				] }),
				bottom: /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsxs)("span", {
					"data-catalog-summary": "",
					children: [/* @__PURE__ */ (0, L.jsxs)("span", {
						"data-catalog-readout": "",
						role: "status",
						children: [
							M(K ? "cleanup:duplicates.keptLabel" : "cleanup:duplicates.summaryLabel"),
							" · ",
							M("cleanup:duplicates.groupCount", { count: Number(q.total || 0) }),
							" · ",
							K ? M("cleanup:duplicates.keptDetail", { count: Number(q.files || 0) }) : M("cleanup:duplicates.summaryDetail", {
								count: Number(q.files || 0),
								size: w(q.reclaimable)
							})
						]
					}), J.length ? Re : null]
				}), /* @__PURE__ */ (0, L.jsx)("span", {
					"data-entity-sorts": "",
					children: /* @__PURE__ */ (0, L.jsx)(h, {
						sorts: G.sorts,
						onSort: G.onSort
					})
				})] })
			}),
			/* @__PURE__ */ (0, L.jsx)(m, {
				label: M("cleanup:duplicates.dockLabel"),
				visible: X.length > 0,
				count: M("cleanup:duplicates.selectedGroups", { count: X.length }),
				actions: ze.map((e) => ({
					action: e,
					items: X,
					host: z,
					done: () => A(/* @__PURE__ */ new Set())
				})),
				children: /* @__PURE__ */ (0, L.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: ue,
					children: M("cleanup:duplicates.clearSelection")
				})
			}),
			V.isError ? /* @__PURE__ */ (0, L.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, L.jsx)(f, {
					tone: "error",
					title: M("cleanup:duplicates.trashFailed"),
					children: le(V.error)
				})
			}) : null,
			J.length ? J.map((n, r) => {
				let i = [n], a = (e) => `${r}:${e}`, s = k.has(T(n)), c = () => {
					let e = [{
						id: "select",
						label: s ? M("catalog:mediaActions.deselect") : M("cleanup:duplicates.selectGroup", { code: n.code }),
						icon: ee,
						run: () => Pe(n, !s)
					}, {
						id: "keep",
						label: M(K ? "cleanup:duplicates.unkeep" : "cleanup:duplicates.keepAll"),
						icon: K ? te : ge,
						disabled: !!D,
						run: () => Le(n, a("keep"), !K)
					}];
					if (!K) {
						let t = [
							["largest", M("cleanup:duplicates.keepLargest")],
							["longest", M("cleanup:duplicates.keepLongest")],
							...he(n.files, Y).map((e) => [e, M("cleanup:duplicates.keepStorage", { storage: l[e] || e })]),
							["all", M("cleanup:duplicates.trashGroup")]
						];
						for (let [n, r] of t) e.push({
							id: n,
							label: r,
							icon: n === "all" ? ne : ge,
							danger: n === "all",
							disabled: !!D,
							run: () => Q({
								groups: i,
								keep: n,
								key: a(n)
							})
						});
					}
					return {
						key: T(n),
						operations: e
					};
				};
				return /* @__PURE__ */ (0, L.jsxs)("section", {
					"aria-label": n.code,
					className: Te,
					"data-board-selected": k.has(T(n)) || void 0,
					children: [/* @__PURE__ */ (0, L.jsxs)("div", {
						"data-duplicate-group-tools": "",
						"data-rectangle-key": T(n),
						className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
						onContextMenu: (e) => _.onContextMenu(e, c()),
						onKeyDown: (e) => {
							(e.key === "ContextMenu" || e.shiftKey && e.key === "F10") && _.onKeyDown(e, c());
						},
						children: [
							/* @__PURE__ */ (0, L.jsx)(t, {
								slot: null,
								"aria-label": M("cleanup:duplicates.selectGroup", { code: n.code }),
								isSelected: k.has(T(n)),
								onChange: (e) => Pe(n, e)
							}),
							/* @__PURE__ */ (0, L.jsx)("b", {
								className: "text-title-2-medium text-text-primary",
								children: n.code
							}),
							/* @__PURE__ */ (0, L.jsx)("span", {
								className: "font-mono text-caption-1-regular leading-5 text-text-primary",
								children: M("cleanup:duplicates.groupDetail", {
									count: Number(n.count || 0),
									size: w(n.reclaimable)
								})
							}),
							Oe(n),
							n.new_files ? /* @__PURE__ */ (0, L.jsx)("span", {
								className: `${B} text-text-primary`,
								children: M("cleanup:duplicates.newFiles", { count: n.new_files })
							}) : null,
							n.cross_drive ? /* @__PURE__ */ (0, L.jsx)("span", {
								className: `${B} text-text-secondary`,
								children: M("cleanup:duplicates.crossDrive", { drives: n.drives.join(" ") })
							}) : null,
							/* @__PURE__ */ (0, L.jsx)("span", {
								className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
								children: K ? /* @__PURE__ */ (0, L.jsx)(e, {
									variant: "secondary",
									size: "small",
									...$(a("unkeep")),
									onClick: () => Le(n, a("unkeep"), !1),
									children: M("cleanup:duplicates.unkeep")
								}) : /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
									/* @__PURE__ */ (0, L.jsx)(e, {
										variant: "danger",
										size: "small",
										...$(a("files")),
										disabled: D !== "" || !n.files.some((e) => j.has(e.id)),
										onClick: () => Ie(n, a("files")),
										children: M("cleanup:duplicates.trashSelectedFiles", { count: n.files.filter((e) => j.has(e.id)).length })
									}),
									/* @__PURE__ */ (0, L.jsx)(e, {
										variant: "secondary",
										size: "small",
										...$(a("largest")),
										onClick: () => Q({
											groups: i,
											keep: "largest",
											key: a("largest")
										}),
										children: M("cleanup:duplicates.keepLargest")
									}),
									/* @__PURE__ */ (0, L.jsx)(e, {
										variant: "secondary",
										size: "small",
										...$(a("longest")),
										onClick: () => Q({
											groups: i,
											keep: "longest",
											key: a("longest")
										}),
										children: M("cleanup:duplicates.keepLongest")
									}),
									he(n.files, Y).map((t) => /* @__PURE__ */ (0, L.jsx)(e, {
										variant: "secondary",
										size: "small",
										...$(a(t)),
										onClick: () => Q({
											groups: i,
											keep: t,
											key: a(t)
										}),
										children: /* @__PURE__ */ (0, L.jsx)(re, {
											source: t,
											label: M("cleanup:duplicates.keepStorage", { storage: l[t] || t })
										})
									}, t)),
									/* @__PURE__ */ (0, L.jsx)(e, {
										variant: "secondary",
										size: "small",
										...$(a("keep")),
										onClick: () => Le(n, a("keep"), !0),
										children: M("cleanup:duplicates.keepAll")
									}),
									/* @__PURE__ */ (0, L.jsx)(e, {
										variant: "danger",
										size: "small",
										...$(a("all")),
										onClick: () => Q({
											groups: i,
											keep: "all",
											key: a("all")
										}),
										children: M("cleanup:duplicates.trashGroup")
									})
								] })
							})
						]
					}), /* @__PURE__ */ (0, L.jsx)(Ae, {
						commit: R && !D && !K ? (e, t) => F((n) => /* @__PURE__ */ new Set([...t ? n : [], ...e.map(Number)])) : void 0,
						children: n.files.map((e) => /* @__PURE__ */ (0, L.jsx)(ke, {
							file: e,
							reference: n.files.find((t) => t.id !== e.id),
							openItem: o,
							selected: j.has(e.id),
							onSelect: K ? void 0 : (t) => Fe(e.id, t),
							busy: !!D,
							onTrash: K ? void 0 : () => Ie(n, a("files"), /* @__PURE__ */ new Set([e.id]))
						}, e.id))
					})]
				}, T(n));
			}) : K ? /* @__PURE__ */ (0, L.jsx)(r, {
				icon: we,
				title: M("cleanup:duplicates.keptEmptyTitle"),
				children: M("cleanup:duplicates.keptEmptyBody")
			}) : /* @__PURE__ */ (0, L.jsx)(r, {
				icon: we,
				title: M("cleanup:duplicates.emptyTitle"),
				children: M("cleanup:duplicates.emptyBody")
			}),
			J.length > 0 && q.total > J.length ? /* @__PURE__ */ (0, L.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: M("cleanup:duplicates.topGroups", {
					shown: J.length.toLocaleString(),
					count: Number(q.total)
				})
			}) : null
		]
	});
}
export { G as DuplicatesPage };

//# debugId=7abfbe72-4ff1-4193-95e6-49a493cc67ab