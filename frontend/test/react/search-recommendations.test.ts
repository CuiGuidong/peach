import { describe, expect, it, vi } from 'vitest';
import { searchRecommendations } from '../../src/react/search/recommendations';

describe('Search image recommendations', () => {
  it('Different video sources keep their own detail addresses, and follow avatars and bylines use the actual uploader', async () => {
    const source = { id: 8, author_key: 'name:author', label: 'Author', ref: 'Author', provider: 'pixiv',
      entity_id: 20, entity_name: 'Author', official_avatar_url: '/avatar-fixture' };
    const request = vi.fn(async (url: string) => {
      if (url.startsWith('/api/items')) return { items: [{ id: 11, name: 'Local video' }] };
      if (url.startsWith('/api/jav/')) return { items: [{ id: 12, asset_id: 12, code: 'ABW-101',
        performer_refs: [{ id: 15, name: 'Performers', has_image: true }] }] };
      if (url.startsWith('/api/feeds/')) return { items: [{ id: 12, code: 'ABW-102', cover_url: '/release-cover' }] };
      if (url.startsWith('/api/follow/authors')) return { items: [{ k: 'Author', key: source.author_key, entity_id: 20 }] };
      return { sources: [source], groups: [{
        primary: { id: 12, source_id: 8, title: 'Followed videos', thumb_url: '/post-cover', media_kind: 'video', status: 'saved' },
        variants: [{ id: 13, source_id: 8, title: 'Image videos', status: 'seen', media_kind: 'image',
          media_items: [{ index: 2, media_kind: 'image', thumb_url: '/photo-cover' }] }], duplicates: [],
      }] };
    });
    const groups = await searchRecommendations(request);
    const entry = (kind: string) => groups.find(group => group.kind === kind)!.items[0]!;
    expect(entry('asset').id).toBe(11);
    expect(entry('jav').href).toBe('/assets/12');
    expect(entry('release').href).toBe('/works/ABW-102');
    expect(entry('release').card?.sourceWork).toBe(true);
    expect(entry('post').href).toBe('/posts/12');
    expect(entry('post').who).toBe('Author');
    expect(entry('post').card?.thumb_url).toBe('/post-cover');
    expect(entry('photo').href).toBe('/posts/13');
    expect(entry('photo').mediaIndex).toBe(2);
    expect(entry('photo').followMedia).toBe('images');
    expect(entry('photo').card?.thumb_url).toBe('/photo-cover');
    expect(entry('author').href).toBe('/creators/20');
    expect(entry('author').avatarHtml).toContain('/avatar-fixture');
    expect(entry('performer').entity_id).toBe(15);
    expect(request.mock.calls.every(([url]) => !url.includes('scope=external'))).toBe(true);
    expect(request.mock.calls.filter(([url]) => url.startsWith('/api/follow?')).every(([url]) => !url.includes('status='))).toBe(true);
  });

  it('One kind of read failure never loses the other recommendations; authors without an entity enter their own follows filter', async () => {
    const groups = await searchRecommendations(async url => {
      if (url.startsWith('/api/jav/')) throw new Error('Offline');
      if (url.startsWith('/api/follow/authors')) return { items: [{ k: 'Author', key: 'name:作者' }] };
      return { items: [{ id: 11, name: 'Local video' }] };
    });
    expect(groups.find(group => group.kind === 'asset')!.items).toHaveLength(1);
    expect(groups.find(group => group.kind === 'jav')!.items).toEqual([]);
    expect(groups.find(group => group.kind === 'author')!.items[0]!.href).toBe('/follow?author=name%3A%E4%BD%9C%E8%80%85');
    expect(groups.find(group => group.kind === 'release')!.items).toEqual([]);
    expect(groups.find(group => group.kind === 'performer')!.action).toBe('Subscribe to new releases');
  });
});
