# 佛山 PVC 电线电缆料厂家官网

本站为「佛山市三水湘发顺塑料有限公司」官方网站，位于广东佛山三水区，是 PVC 电线电缆料生产厂家。

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成
- 部署：Cloudflare Pages（构建命令 `npm run build`，输出目录 `dist`）

## 本地开发

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:4321
npm run build    # 静态构建，输出到 dist/
npm run preview  # 预览构建结果
```

## 目录结构

```
src/
  layouts/      # 全局布局（含站点级 JSON-LD、Organization、LocalBusiness、WebSite 结构化数据）
  components/   # 公共组件（Header / Footer / SectionTitle / ProductCard / ProductDetail）
  pages/        # 路由页面（含中文与 /en 英文双版本）
  styles/       # 全局样式（设计系统：色彩 / 字号 / 阴影 / 动效）
public/
  images/       # 工厂图、生产图、二维码
  llms.txt      # AI / LLM 站点结构化说明（中文）
  en/llms.txt   # AI / LLM 站点结构化说明（英文）
  robots.txt    # 搜索引擎 + AI 爬虫指引
  sitemap.xml   # 站点地图（含中英双语 + hreflang）
```

## 设计语言

- 主色：深钢墨绿 `#0f3a32` + 工业橙铜点缀 `#e3632a`
- 强调：清晰层级、留白、卡片质感、AI GEO 友好的语义化结构
- 字体：PingFang SC / Microsoft YaHei / 系统字体栈
- 暗色 CTA、玻璃拟态导航、渐变光晕、可访问性 (a11y) 焦点态

## AI GEO / SEO 优化

本站面向 AI 生成式引擎 (ChatGPT、Claude、Perplexity、Gemini 等) 做了以下优化：

- **结构化数据 (JSON-LD)**：Organization / LocalBusiness / WebSite / ItemList (Product) / FAQPage / HowTo / ContactPage / BreadcrumbList
- **双语文档**：`llms.txt` 与 `en/llms.txt` 完整声明站点信息、产品目录、FAQ、询价清单
- **hreflang**：中英页面通过 `<link rel="alternate" hreflang>` 互相指向
- **canonical**：每页有独立 canonical URL
- **Open Graph + Twitter Card**：完整社交分享元数据
- **BreadcrumbList**：次级页面有面包屑导航与对应 JSON-LD
- **语义化 HTML**：使用 `<article>` / `<section>` / `<nav>` / `<details>` 等语义标签
- **可访问性 (a11y)**：`aria-label` / `aria-current` / `prefers-reduced-motion` / 焦点态

## 联系方式

- 电话 / 微信：13450853338
- 地址：广东佛山三水区
- 业务时间：周一至周六 8:00 - 18:00