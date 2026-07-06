import { dailyUpdates } from '../data/updates';

const site = 'https://xfspvc.com';

const corePages = [
  { path: '/', enPath: '/en/', lastmod: '2026-07-06', changefreq: 'weekly', priority: '1.0' },
  { path: '/products/', enPath: '/en/products/', lastmod: '2026-07-06', changefreq: 'weekly', priority: '0.9' },
  { path: '/manufacturing/', enPath: '/en/manufacturing/', lastmod: '2026-07-06', changefreq: 'monthly', priority: '0.8' },
  { path: '/knowledge/', enPath: '/en/knowledge/', lastmod: '2026-07-06', changefreq: 'monthly', priority: '0.8' },
  { path: '/updates/', enPath: '/en/updates/', lastmod: dailyUpdates[0]?.date ?? '2026-07-06', changefreq: 'daily', priority: '0.8' },
  { path: '/contact/', enPath: '/en/contact/', lastmod: '2026-07-06', changefreq: 'monthly', priority: '0.7' },
];

const updatePages = dailyUpdates.map((item) => ({
  path: `/updates/${item.slug}/`,
  enPath: `/en/updates/${item.slug}/`,
  lastmod: item.date,
  changefreq: 'monthly',
  priority: '0.7',
}));

function absolute(path: string) {
  return `${site}${path}`;
}

function renderUrl(loc: string, zhHref: string, enHref: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${absolute(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${absolute(zhHref)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${absolute(enHref)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(zhHref)}" />
  </url>`;
}

export function GET() {
  const pairedPages = [...corePages, ...updatePages];
  const urls = pairedPages.flatMap((page) => [
    renderUrl(page.path, page.path, page.enPath, page.lastmod, page.changefreq, page.priority),
    renderUrl(page.enPath, page.path, page.enPath, page.lastmod, page.changefreq, page.priority),
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
