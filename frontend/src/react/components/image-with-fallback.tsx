import { useState, type ComponentPropsWithoutRef } from 'react';

type ImageProps = Omit<ComponentPropsWithoutRef<'img'>, 'src' | 'onError'>;

/** React 保留图片节点的所有权，候选用尽后由组件显示外层占位。 */
export function ImageWithFallback({ src, fallbacks = [], ...props }: ImageProps & { src: string; fallbacks?: readonly string[] }) {
  const sources = [src, ...fallbacks].filter(Boolean);
  return <ImageAttempts key={JSON.stringify(sources)} sources={sources} {...props} />;
}

function ImageAttempts({ sources, ...props }: ImageProps & { sources: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const src = sources[index];
  return src ? <img key={index} {...props} src={src} onError={() => setIndex(index + 1)} /> : null;
}
