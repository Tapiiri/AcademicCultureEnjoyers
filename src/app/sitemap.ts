import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://academiccultureenjoyers.org';
  const routes = [
    '',
    '/events',
    '/events/thomastag-2025',
    ...(process.env.NEXT_PUBLIC_HIDE_MEMBERSHIP === 'true' ? [] : ['/join']),
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return routes;
}
