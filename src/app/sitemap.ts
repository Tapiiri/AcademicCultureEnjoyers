import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://academiccultureenjoyers.org';
  const routes = [
    '',
    '/events',
    '/events/thomastag-2025',
    '/join',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return routes;
}
