# AGENTS.md — Wang Zhai Personal Blog (Astro)

## Project Identity

Personal blog for Wang Zhai (王翟) — Tsinghua physics sophomore + National Level 2 chess athlete.
Design language: **Swiss Grid × Chess** — pure black/white, chess piece iconography, checkerboard patterns.
Live at `wangzhai.pages.dev` (Cloudflare Pages, static output).

## Architecture

```
my-blog/                    ← Astro 5.x project (git repo root)
├── src/
│   ├── components/         ← 7 Astro components (no framework — pure .astro)
│   ├── content/blog/       ← Markdown posts (3 posts, zh-only source)
│   ├── i18n/               ← Route-based i18n (translations.ts + utils.ts)
│   ├── layouts/            ← Single BaseLayout.astro
│   ├── pages/              ← zh at root, en/ mirror — ALL pages duplicated
│   └── styles/             ← Single global.css (CSS custom properties)
├── public/                 ← Static assets (favicon only)
├── DESIGN.md               ← 412-line design spec (source of truth for all UI decisions)
└── CHANGELOG.md            ← 10 development phases documented
```

## Critical Conventions

### i18n (Route-Based)
- `/` = Chinese (default), `/en/` = English
- Translation dict: `src/i18n/translations.ts` — flat key-value, type `Lang = 'zh' | 'en'`
- Helper: `t(lang, key)` from `src/i18n/utils.ts` — returns string, falls back to zh
- `getLangPrefix(lang)` → `''` for zh, `'/en'` for en
- `getAlternateUrl(path)` → swaps between zh/en versions
- **Every page** in `src/pages/` has a mirror in `src/pages/en/`. Both hardcode their `lang` const.
- Blog titles/descriptions: zh fields required, `title_en`/`description_en` optional in frontmatter

### Components
- All `.astro` — zero React/Vue/Svelte. Keep it that way.
- Every component accepts `lang?: Lang` prop (defaults to `defaultLang = 'zh'`)
- Scoped `<style>` blocks per component. Use `:global()` only for content-rendered HTML (prose, KaTeX)
- Chess piece unicode icons for categories: `♜` physics, `♞` chess, `♝` essay, `♚` nav marker
- `categoryIcons` map duplicated in BlogSection, blog/index, blog/[...slug] — keep in sync manually

### Styling System
- CSS custom properties in `global.css` `:root` — spacing (`--space-xs` through `--space-2xl`), fonts, colors
- Theme: `[data-theme="light"]` / `[data-theme="dark"]` on `<html>`, stored in `localStorage`
- Fonts: Inter (body), Noto Sans SC (CJK), JetBrains Mono (code) — loaded via Google Fonts CDN
- KaTeX CSS loaded via CDN in BaseLayout `<head>`
- **Checkerboard pattern**: `nth-child(4n+1)/(4n+4)` white, `(4n+2)/(4n+3)` dark — 2-col grid. 1-col mobile uses odd/even.
- Hover effect: invert square color (white↔dark)
- No utility framework (no Tailwind). Utility classes limited to `.text-center`, `.font-bold`, `.font-black`, `.container`

### Content Schema
```ts
// src/content.config.ts
schema: z.object({
  title: z.string(),           // Required (zh)
  title_en: z.string().optional(),
  date: z.date(),
  category: z.enum(["物理笔记", "国际象棋", "随笔"]),
  description: z.string(),     // Required (zh)
  description_en: z.string().optional(),
})
```
- Loader uses `glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" })`
- Posts sorted by `date` descending everywhere
- Blog post slugs = filename (via `post.id`)

### Animations
- Scroll entrance: `.animate-on-scroll` → `.visible` via IntersectionObserver in BaseLayout
- Chess piece drop: `.animate-drop` with `--stagger` CSS var for delay
- Knight L-move: `.animate-knight` with stagger
- Theme toggle: `.theme-transitioning` → 3D `rotateY` board flip (600ms), theme swaps at 300ms midpoint
- `prefers-reduced-motion: reduce` fully respected — all animations disabled

### Layout
- Fixed sidebar (240px left) with king logo `♚`, nav links, lang switch, theme toggle
- Mobile: sidebar slides in from left, hamburger menu top-right
- `main-content` has `margin-left: 240px` (desktop), `padding-top: 60px` (mobile)

### Giscus Comments
- Repo: `wz66216/wz66216.github.io`, Category: Announcements
- Mapping: `pathname`, theme synced via `postMessage` on MutationObserver
- Present on individual blog post pages only

## Deployment
- Cloudflare Pages (static adapter implicit — `output: 'static'` in astro.config)
- Site URLs: `wangzhai.pages.dev`, `thu-wangzhai.pages.dev`
- No CI/CD config files — deploys via Cloudflare dashboard git integration
- Build command: `npm run build` → `astro build`

## Anti-Patterns (DO NOT)
- Do NOT add React/Vue/Svelte components — this is pure Astro
- Do NOT use Tailwind or any utility CSS framework
- Do NOT use `@ts-ignore` or `as any`
- Do NOT use SSR or server endpoints — static output only
- Do NOT change the i18n approach to middleware-based or cookie-based
- Do NOT add new fonts beyond Inter/Noto Sans SC/JetBrains Mono
- Do NOT break the checkerboard nth-child pattern without updating all 3 locations (BlogSection, blog/index, blog/[...slug])
- Do NOT hardcode colors — always use CSS custom properties from `global.css`

## Known Issues
- `categoryIcons` map is duplicated in 3 files — future refactor candidate
- Duplicate `DESIGN.md` and `CHANGELOG.md` at outer `网站搭建/` directory (stale copies)
- `nul` file at outer root (Windows reserved name — delete candidate)
- No linter, formatter, or test framework configured
- No `<meta og:*>` or structured data for SEO
- En blog post pages show zh titles (no `title_en` fallback in `[...slug].astro` and `en/blog/[...slug].astro`)

## Adding a New Blog Post
1. Create `src/content/blog/your-slug.md` with required frontmatter (title, date, category, description)
2. Optionally add `title_en`, `description_en` for English display
3. Post auto-appears on both zh and en blog listings (sorted by date)
4. No manual route registration needed — catch-all `[...slug].astro` handles it

## Adding a New Page
1. Create `src/pages/your-page.astro` (zh version, `const lang = 'zh'`)
2. Create `src/pages/en/your-page.astro` (en version, `const lang = 'en'`)
3. Add nav entry in `Sidebar.astro` → `navItems` array
4. Add translation keys in `src/i18n/translations.ts`
