import { defineConfig } from 'astro/config';

// 静态站点，输出到 dist/，与 Cloudflare Pages 设置一致
// i18n 配置：中文为默认（无前缀），英文使用 /en/ 前缀
export default defineConfig({
  site: 'https://xfspvc.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  server: {
    host: true,
  },
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});