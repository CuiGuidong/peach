/* Data contract and folding for the sources and credentials page. The endpoints are each declared exactly once here in `frontend/src`
 * (`tests/test_frontend_build.py` watches for it).
 *
 * Source config, cover jobs, the amane bridge, and custom sources each get their own cache; background jobs read status on their own rhythm,
 * and do not refetch source config being edited. */
import { apiGet } from '../../api';
import { queryClient } from '../query';
import { CUSTOM_SOURCES_KEY, fetchCustomSources } from './custom-source-data';

export const SCRAPING_URL = '/api/scraping';
export const SCRAPING_SETTINGS_URL = '/api/scraping/settings';
export const SCRAPING_CHECK_URL = '/api/scraping/check';
export const SCRAPING_COVER_URL = '/api/scraping/cover';
export const AMANE_BRIDGE_URL = '/api/scraping/amane-bridge';
export const AMANE_BRIDGE_CHECK_URL = '/api/scraping/amane-bridge/check';
export const AMANE_BRIDGE_REBUILD_URL = '/api/scraping/amane-bridge/rebuild';

/** The source list shares this one key. */
export const SCRAPING_KEY = ['scraping'] as const;
/** Status of the background task that fetches covers. */
export const COVER_JOB_KEY = ['scraping', 'cover'] as const;
/** Facts about the amane bridge and the rebuild task's state (`q_scraping_amane_bridge`). */
export const AMANE_BRIDGE_KEY = ['scraping', 'amane-bridge'] as const;

/** A scraping source. Fields follow `q_scraping` (`src/peach/web_scraping.py`). */
export interface Source {
  source: string;
  label: string;
  login: string;
  accepts_cookie: boolean;
  network: string;
  cookie_saved: boolean;
  /** On this machine, requests for this source are sent by the local browser and verification is passed by it directly (ADR-0065); when true, no Cookie is needed. */
  browser: boolean;
  cooldown_until?: number | null;
}

export interface ScrapingData {
  sources: Source[];
}

/** One result item from a connection check: the source page, plus the HD image URL some sources also have. */
export interface Check {
  label: string;
  ok: boolean;
  status?: number;
  message?: string;
  width?: number;
  height?: number;
  reason?: string;
  elapsed_s?: number;
  checked_at?: number;
}

/** Snapshot of the cover-fetching background job (`scraping_cover_job`). `status` is `idle|running|complete|failed`. */
export interface CoverJob {
  status: string;
  job_id?: string;
  result?: string;
  error?: string;
  width?: number;
  height?: number;
}

/** The amane bridge's card (ADR-0043). `revision` is the amane sha pinned in the manifest, `version` the version of the
 *  locked entry; `installed` is whether the venv has an interpreter; `sites` are the sites the bridge opens to the source
 *  chain. `job` is the rebuild job's snapshot with `status` like `CoverJob`. When the install package lacks the bridge's
 *  manifest or scripts, `bundled` is false, `problem` says why, and `revision` and `version` are empty. */
export interface AmaneBridge {
  repository: string;
  license: string;
  bundled: boolean;
  problem: string;
  revision: string;
  version: string;
  installed: boolean;
  installed_version: string;
  python: string;
  sites: { source: string; label: string }[];
  job: CoverJob;
}

/** The size cap for Netscape cookie files. Anything larger is probably not a cookie file, so it gets rejected up front. */
export const COOKIE_TEXT_LIMIT = 256 * 1024;

export const fetchSources = (signal?: AbortSignal) => apiGet<ScrapingData>(SCRAPING_URL, signal);
export const fetchCoverJob = (signal?: AbortSignal) => apiGet<CoverJob>(SCRAPING_COVER_URL, signal);
export const fetchAmaneBridge = (signal?: AbortSignal) => apiGet<AmaneBridge>(AMANE_BRIDGE_URL, signal);

/** First-screen sources and task snapshot are fetched concurrently, and the same cache is handed to each page section.
 *
 * Cover-scraping status counts as first screen too; the page must know on arrival whether a run is in progress to keep up with its progress, and the amane bridge
 * card likewise, since a rebuild may be running in the background. On abort `fetchQuery` throws `AbortError` back to the mounter, which
 * gives up on this attempt. */
export async function prefetchScraping(signal: AbortSignal): Promise<void> {
  await Promise.all([
    queryClient.fetchQuery({ queryKey: SCRAPING_KEY, queryFn: () => fetchSources(signal) }),
    queryClient.fetchQuery({ queryKey: COVER_JOB_KEY, queryFn: () => fetchCoverJob(signal) }),
    queryClient.fetchQuery({ queryKey: AMANE_BRIDGE_KEY, queryFn: () => fetchAmaneBridge(signal) }),
    queryClient.fetchQuery({ queryKey: CUSTOM_SOURCES_KEY, queryFn: () => fetchCustomSources(signal) }),
  ]);
}

/** One check result stated as one sentence: what it checked, whether it connected, how big the image is, what the server added.
 *
 * `label` in a result is what that hop queried; with a single hop it is the source page itself and the sentence need not repeat it. */
export function checkText(check: Check, sourceLabel: string): string {
  return `${sourceLabel}${check.label === 'source page' ? '' : ' HD images'}`
    + `: ${check.ok ? 'reachable' : 'unreachable'}`
    + (check.width ? ` · ${check.width} × ${check.height}` : '')
    + (check.elapsed_s !== undefined ? ` · ${check.elapsed_s.toFixed(2)} sec` : '')
    + (check.message ? `. ${check.message}` : '');
}
