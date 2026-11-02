# Peach — English Translation Status

Status as of 2026-11-02, HEAD `a968e14` on `master` (upstream base `960333a`).

The application UI has been translated from Chinese to English across the frontend,
the shell page, and the backend strings that reach the screen. This file is the
status record; `translation/README.md` documents the update-survival tooling and
`translation/WORK_LOG.md` is the session log from the parallel GLM run.

## What is translated

| Surface | Notes |
| --- | --- |
| `frontend/src/**` (TS/TSX/CSS data strings) | Buttons, settings, navigation, aria-labels, receipts, toasts, empty states, error notes |
| `web/index.html` (shell) | `<title>`, skip link, top-bar buttons, search placeholder, brand heading, sidebar toggle |
| Task center | `TASK_LABELS` registry in `src/peach/task_runs.py` (all 33 task kinds), stage/step labels, progress lines |
| Library processing pipeline | Stage vocabulary in `library_processing.py`, phase matching in `processing_control.py`, estimate labels in `web_library_processing.py` |
| Update page & runtime info | Version/channel strings, migration notice, uninstall notice (`release_updates.py`, `web_entry.py`, `data_storage.py`, `desktop_uninstall.py`) |
| Source health & diagnostics | `library_diagnostics.py` reason vocabulary and group labels |
| Organize | Preset labels/examples, skip reasons, template field names (`organize.py`, `organize_templates.py`) |
| Tray menu & misc services | `tray.py` menu labels, `jobs.py` status labels, `web_resource_sync.py` progress |
| Terminology | Sidebar/route/index labels say **Performers**; per-item `performerLabel` keeps its JAV ('Performers') vs creator ('Artists') split by design |
| Timezone | Activity heatmaps bucket and label in the machine's local offset (was hardcoded HKT / `UTC+08:00`) |

Commits: `ec089b2` (frontend bulk, 16k+ units), `9511ddc`, `9ef7126`, `ac87650`,
`a968e14` (review leftovers), `d9c5cd1`/`eb6b0cd` (timezone), plus `fef63be`
(functional: torrent-name code extraction, small-file scan filter) and dist
rebuilds `bdc2245`, `eb6b0cd`.

## Intentionally kept in the original language

- **Content, not chrome**: Japanese performer names (葵つかさ, 三上悠亜…), movie
  titles, label/brand names (蜜桃, 舞ワイフ), and tag vocabulary data
  (`genre_taxonomy.py`). Translating them would break fixture ↔ data consistency.
- **Data-value lookup keys**: `EDITION_TONE` in `item-detail.ts` keys on server
  edition strings (`無碼破解`, `有码`) — the keys must match the data.
- **Icon glyph**: the JAV sprite icon (`#i-jav`) renders the kanji 番 as its
  designed glyph; it is iconography, not UI copy.
- **Developer docs**: source comments, docstrings, CSS comments, `web/css/*`
  comments, and the Chinese-language docs (`README.zh-CN.md`, AGENTS.md,
  CONTRIBUTING.md) follow the repo's writing convention and are not UI.

## Verification

```powershell
# frontend
cd frontend && npx tsc --noEmit -p tsconfig.json   # clean
npx vitest run                                     # see numbers below

# backend
python -m py_compile src/peach/<changed files>
.venv\Scripts\python.exe -X utf8 -m unittest tests.test_taste_history   # sample
```

Last full frontend run: **1,543 passed / 453 failed** (205 files).
Typecheck clean; backend compiles; the touched Python modules' focused tests pass.

## Remaining work: test reconciliation (453 failures, 102 files)

These are wording desyncs — the shipped English differs slightly from what each
test asserts (spacing, capitalization, phrasing). Not logic bugs. Reconcile
file-by-file: read the assertion, update the expectation to the shipped English,
or fix the src when the composition is genuinely wrong (pattern: space-after-colon,
label+count spacing, 万→K scaling, fullwidth punctuation).

Biggest clusters:

| File | Failed |
| --- | --- |
| `test/react/follow-manage.test.tsx` | 48 |
| `test/react/data-cleanup.test.tsx` | 21 |
| `test/react/setup-page.test.tsx` | 17 |
| `test/react/avatar-picker.test.tsx` | 16 |
| `test/react/media-settings.test.tsx` | 12 |
| `test/react/immerse.test.tsx` | 8 |
| `test/react/follow-alias.test.tsx` | 8 |
| `test/react/review.test.tsx` | 9 |

A full per-failure report with expected/received pairs is in the session output;
reproduce with `npx vitest run > vitest-failures.txt` inside `frontend/`.

## Broader leftover surfaces (next passes)

1. **Backend API messages** — error/problem strings emitted by `web_*.py`,
   scraping and follow-up modules still contain Chinese that surfaces in issue
   lists and toasts. Same class as the task-label work: translate the emitter,
   keep machine keys intact, update the asserting tests.
2. **`web/integrations/peach-jav.user.js`** — userscript UI strings.
3. **`frontend/src/react/*.css` and `web/css/*.css` comments** — dev-facing,
   low priority.
4. **Backend docstrings/comments** — dev-facing, follow repo convention, skip.

## Update survival

After pulling upstream:

```bash
python translation/update.py      # extract → match memory → sweep-apply → delta.json → parse scan
# translate delta.json entries, save as translation/delta-translated.json
python translation/scripts/merge_delta.py
python translation/update.py      # re-run to apply
```

`translation/memory.json` holds the 16k+ pair memory; `delta.json`/`units.json`/
`parse-errors.txt` are gitignored generated artifacts. New UI strings added
upstream land in the delta and only those need translating.

## Housekeeping

- `meb_extract.py` at the repo root is an unrelated personal script (Meb ebook
  extractor) — untracked, not part of Peach, safe to move out of the repo.
- Repo contract: tests must pass before delivery; do not commit while the
  reconciliation clusters above are red.
