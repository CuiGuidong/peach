/* 来源视频预览复用 Peach 控件；播放状态只属于当前预览。 */
import { mountPlayerQualityControl, mountPlayerSeekPreview, mountPlayerSpinner } from './controls';
import { disposePlayer } from './dispose';
import type { PlayerSource, VjsPlayer } from './types';
import { ensureVideojs } from './videojs';
import { requestErrorMessage } from '../core/request-error';
import { interfaceLanguage, t } from '../i18n';

export function mountPreviewPlayer(video: HTMLVideoElement, source: PlayerSource, failed: (reason: string) => void): () => void {
  video.controls = false;
  let released = false;
  let player: VjsPlayer | null = null;
  void ensureVideojs().then(factory => {
    if (released) return;
    player = factory(video, {
      controls: true, preload: 'metadata', autoplay: false, language: interfaceLanguage, responsive: true,
      userActions: { hotkeys: true },
      controlBar: {
        pictureInPictureToggle: true, currentTimeDisplay: false, timeDivider: false,
        durationDisplay: false, remainingTimeDisplay: false,
        progressControl: { seekBar: { mouseTimeDisplay: false, playProgressBar: { timeTooltip: false } } },
      },
    });
    const current = player;
    current.on('error', () => {
      if (released) return;
      const code = Number((current.error() as { code?: number } | null)?.code ?? video.error?.code);
      const reason = code === 2 ? 'sampleVideoNetwork' : code === 3 ? 'sampleVideoDecode'
        : code === 4 ? 'sampleVideoUnsupported' : 'sampleVideoUnknown';
      failed(t('catalog:javDetail.' + reason));
    });
    current.ready(() => {
      if (released || current.isDisposed()) return;
      mountPlayerQualityControl(current, video);
      mountPlayerSeekPreview(current, null, { thumbnail: false });
      mountPlayerSpinner(current);
    });
    current.src(source);
  }).catch(cause => { if (!released) failed(requestErrorMessage(cause)) });
  return () => {
    released = true;
    disposePlayer(player);
    if (!player) { video.pause(); video.removeAttribute('src'); video.load(); video.remove() }
  };
}
