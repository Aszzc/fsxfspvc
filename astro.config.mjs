import { defineConfig } from 'astro/config';

// 静态站点，输出到 dist/，与 Cloudflare Pages 设置一致
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
});