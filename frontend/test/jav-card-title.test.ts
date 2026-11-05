import { expect, it } from 'vitest';
import { javTitleHtml } from '../src/core/jav-title';
import { textLang } from '../src/core/text-lang';

it('Confirmed edition tags and 4K sit in the title, and no quality mark is added when resolution is unavailable', () => {
  const host = document.createElement('div');
  const item = { is_jav: true, code: 'EXM-001', catalog_title: 'Example video', edition_badges: ['Chinese subs', 'Uncensored'] };
  host.innerHTML = javTitleHtml({ ...item, width: 3840, height: 2160 });
  expect([...host.querySelectorAll('.javedition')].map(node => node.textContent)).toEqual(['Chinese subs', 'Uncensored', '4K']);
  expect(host.querySelector('.ui-javtitle')?.textContent).toBe('Example video');
  for (const dimensions of [{}, { width: 1920, height: 1080 }, { width: 3840, height: 1080 }]) {
    host.innerHTML = javTitleHtml({ ...item, ...dimensions });
    expect(host.querySelector('.quality')).toBeNull();
  }
});

it('Titles with kana are marked Japanese, pure Latin ones English, and pure han titles that could be either follow the page language', () => {
  expect(textLang('新人 AV デビュー')).toBe('ja');
  expect(textLang('ｶﾀｶﾅ')).toBe('ja');
  expect(textLang('First Date')).toBe('en');
  expect(textLang('三上悠亜')).toBeUndefined();
  expect(textLang('示例作品 4K')).toBeUndefined();
  expect(textLang('')).toBeUndefined();
  const host = document.createElement('div');
  host.innerHTML = javTitleHtml({ is_jav: true, code: 'EXM-001', catalog_title: '新人デビュー' });
  expect(host.querySelector('.ui-javtitle')?.getAttribute('lang')).toBe('ja');
  host.innerHTML = javTitleHtml({ is_jav: true, code: 'EXM-001', catalog_title: '示例作品' });
  expect(host.querySelector('.ui-javtitle')?.hasAttribute('lang')).toBe(false);
});
