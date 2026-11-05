/* The preview block above the progress bar: pointing at any second shows that second's frame and time. Shared by detail, mini window, and immersive.
 *
 * It only recognizes "host element + progress ratio", not events: Video.js's progress bar and the immersive self-drawn one each convert their pointer to a ratio
 * and hand it in. If timeline capture has laid out a contact sheet, take the frame from it; if it can't and a snapshot exists, fall back to the nine cells of the nine-grid; otherwise just report the time.
 * This only reads already-laid-out images; `/timeline` doesn't sample on the fly, and `/poster` only crops cells from existing snapshots, not from the video. */
import { api, fmtClock } from '@peach/legacy/core';

import { timelineFrame, type TimelineSheets } from './timeline';

export interface SeekPreviewItem {
  id?: number | string;
  width?: number | null;
  height?: number | null;
  /* There is a nine-grid snapshot (same criterion as card hover); without one, do not fall back to the nine-grid, so each cell doesn't hit 404. */
  has_thumb?: unknown;
}

/** Which contact print and which cell a frame lands on; `rows` is this print's own row count. */
export interface SheetTile { page: number; slot: number; columns: number; rows: number }

/* The upper limit of page-based preheating for own touch frames: a two-hour video at one frame per 10 seconds is 8 frames; anything longer is fetched on demand. */
export const PRELOAD_PAGES = 12;

export function sheetTile(seconds: number, sheet: TimelineSheets): SheetTile | null {
  const index = timelineFrame(seconds, sheet);
  if (index === null) return null;
  const columns = sheet.columns || 10, per = columns * (sheet.rows || 10);
  const page = Math.floor(index / per);
  // The last image usually has fewer than 10 rows, so its row count is back-computed from its own frames: laying out by full rows would drop cells onto blank space outside the image.
  return { page, slot: index % per, columns, rows: Math.ceil(Math.min(per, sheet.frames - page * per) / columns) };
}

/* Preview center point: follows the pointer, but the whole block stays within the progress bar, leaving inset on both ends. When it doesn't fit, it's centered. */
export function previewCenter(pointer: number, track: number, width: number, inset = 0): number {
  if (width + inset * 2 >= track) return track / 2;
  return Math.min(track - inset - width / 2, Math.max(inset + width / 2, pointer));
}

/* Only preheat Peach's own touch frames: the page count is countable. External sources' s is a frame number, one image per frame, possibly hundreds, fetched on demand. */
export function preloadPages(sheet: TimelineSheets | null | undefined): number {
  if (!sheet || (sheet.source || 'peach') !== 'peach' || sheet.cues?.length || !(sheet.interval > 0) || sheet.frames <= 0) return 0;
  const pages = Math.ceil(sheet.frames / ((sheet.columns || 10) * (sheet.rows || 10)));
  return pages <= PRELOAD_PAGES ? pages : 0;
}

export interface SeekPreview {
  /** The pointer entered the progress bar or a drag began: only then does it warm up the full-video contact prints; playing without touching the progress bar downloads nothing extra. */
  prime(): void;
  /** `ratio` is the progress ratio; `duration` is the total seconds of the video. */
  show(ratio: number, duration: number): void;
  hide(): void;
  dispose(): void;
}

/* inset: the distance the preview keeps from both ends when the progress bar is flush against the viewport edge (immersive); Video.js's progress bar is already inset on its own. */
export function createSeekPreview(host: HTMLElement, item: SeekPreviewItem | null,
  options: { thumbnail?: boolean; inset?: number } = {}): SeekPreview {
  const hasThumbnail = !!item?.id && options.thumbnail !== false;
  const preview = document.createElement('div');
  preview.className = 'vjs-peach-seek-preview'; preview.dataset.playerSeekPreview = ''; preview.hidden = true;
  preview.innerHTML = `${hasThumbnail ? '<i class="vjs-peach-seek-frame" hidden><img alt=""></i>' : ''}<span class="mono">0:00</span>`;
  host.append(preview);
  const frame = preview.querySelector<HTMLElement>('.vjs-peach-seek-frame');
  const image = preview.querySelector('img'), label = preview.querySelector('span')!;
  const id = encodeURIComponent(String(item?.id ?? ''));
  const aspect = (width: number, height: number) => { frame?.style.setProperty('--seek-aspect', String(width / height)) };
  if (item?.width && item.height) aspect(item.width, item.height);
  let sheets: TimelineSheets | null = null, shown = '', indexedImage = false, cell = -1, primed = false, disposed = false;
  /* If one cell of the 3×3 grid can't load, the snapshot is likely gone: all nine share the same source, so don't retry them one by one. */
  let posterless = item?.has_thumb !== true;
  const warm: HTMLImageElement[] = [];
  const sheetSource = (sheet: TimelineSheets, page: number) =>
    `/timeline?id=${id}&s=${page}&source=${encodeURIComponent(sheet.source || 'peach')}`;
  const preload = () => {
    if (!primed || !sheets) return;
    for (const sheet of [sheets, sheets.fallback]) {
      for (let page = 0; page < preloadPages(sheet); page++) {
        const source = sheetSource(sheet!, page);
        if (warm.some((img) => img.dataset.source === source)) continue;
        const img = new Image(); img.decoding = 'async'; img.dataset.source = source; img.src = source;
        warm.push(img);
      }
    }
  };
  if (frame) {
    (api(`/api/timeline?id=${id}`) as Promise<TimelineSheets | null>).then((meta) => {
      if (disposed || !meta || !(meta.frames > 0) || !(meta.interval > 0 || meta.cues?.length)) return;
      sheets = meta; preload();
    }).catch(() => {});
  }
  const showSheetFrame = (seconds: number, sheet: TimelineSheets) => {
    const tile = sheetTile(seconds, sheet);
    if (!tile || !frame || !image) return false;
    indexedImage = !!sheet.cues;
    // External frame-by-frame images are framed by their own aspect ratio (see `onload`); returning to the mosaic resets the viewfinder to the source ratio.
    if (!indexedImage && item?.width && item.height) aspect(item.width, item.height);
    const source = sheetSource(sheet, tile.page);
    if (source !== shown) { shown = source; image.src = source }
    frame.hidden = false;
    // The framing box follows the stream's aspect and the image fills its cell: with both ratios equal, `fill` neither crops nor stretches.
    image.style.objectFit = 'fill';
    image.style.width = `${tile.columns * 100}%`; image.style.height = `${tile.rows * 100}%`;
    image.style.left = `${-(tile.slot % tile.columns) * 100}%`; image.style.top = `${-Math.floor(tile.slot / tile.columns) * 100}%`;
    return true;
  };
  const showPoster = (ratio: number) => {
    if (!frame || !image) return;
    if (posterless) { frame.hidden = true; return }
    const next = Math.min(8, Math.floor(ratio * 9));
    if (next === cell && shown === `poster:${next}`) return;
    cell = next; frame.hidden = false; image.removeAttribute('style');
    indexedImage = false; shown = `poster:${next}`;
    image.src = `/poster?id=${id}&c=${next}`;
  };
  if (image && frame) {
    image.onerror = () => {
      if (shown.startsWith('poster:')) posterless = true;
      frame.hidden = true; sheets = indexedImage ? sheets?.fallback || null : null; shown = ''; cell = -1;
    };
    image.onload = () => { if (indexedImage && image.naturalWidth && image.naturalHeight) aspect(image.naturalWidth, image.naturalHeight) };
  }
  return {
    prime() { if (!primed) { primed = true; preload() } },
    show(ratio, duration) {
      if (!duration || disposed) return;
      const clamped = Math.min(1, Math.max(0, ratio)), seconds = duration * clamped;
      label.textContent = fmtClock(seconds);
      if (frame && !(sheets && showSheetFrame(seconds, sheets)) && !(sheets?.fallback && showSheetFrame(seconds, sheets.fallback))) {
        showPoster(clamped);
      }
      preview.hidden = false;
      // The width is clamped to the measured value after it's shown: the box width is set by styles from the source aspect ratio and viewport, so don't compute a separate set here.
      const track = host.getBoundingClientRect().width;
      preview.style.left = `${previewCenter(clamped * track, track, preview.offsetWidth, options.inset)}px`;
    },
    hide() { preview.hidden = true },
    dispose() { disposed = true; warm.length = 0; preview.remove() },
  };
}
