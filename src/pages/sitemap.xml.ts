import { dailyUpdates } from '../data/updates';
import { products } from '../data/products';

const site = 'https://xfspvc.com';
const pages = [
  ['/', '/en/'], ['/products/', '/en/products/'],
  ['/manufacturing/', '/en/manufacturing/'], ['/knowledge/', '/en/knowledge/'],
  ['/updates/', '/en/updates/'], ['/contact/', '/en/contact/'],
  ['/about/', '/en/about/'], ['/jobs/', '/en/jobs/'],
  ['/tools/inquiry/', '/en/tools/inquiry/'],
  ...products.zh.map((item) => [`/products/${item.slug}/`, `/en/products/${item.slug}/`]),
];
const articles = dailyUpdates.map((item) => ({
  zh: `/updates/${item.slug}/`, en: `/en/updates/${item.slug}/`, published: item.date,
}));
const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function renderUrl(path: string, zh: string, en: string, lastmod?: string) {
  return `  <url>
    <loc>${escapeXml(site + path)}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(site + zh)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(site + en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(site + zh)}" />
  </url>`;
}

export function GET() {
  const urls = [
    ...pages.flatMap(([zh, en]) => [renderUrl(zh, zh, en), renderUrl(en, zh, en)]),
    ...articles.flatMap(({ zh, en, published }) => [renderUrl(zh, zh, en, published), renderUrl(en, zh, en, published)]),
  ];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
