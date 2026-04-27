# AGENTS.md

Agent quick-reference for this Next.js blog repository.

## Commands

```bash
npm run dev       # next dev --turbopack  (always use this, not bare `next dev`)
npm run build     # next build
npm run lint      # eslint app/  (next lint was removed in Next.js 16)
```

No separate typecheck script — use `npx tsc --noEmit` directly.

## Pre-commit hooks (Husky v9 + lint-staged)

Every commit runs **two things in order**:
1. `npx lint-staged` — runs `eslint --fix` on staged `*.{js,jsx,ts,tsx,json,md,mdx,css}` files
2. `npx tsc --noEmit` — full project-wide type-check (not scoped to staged files)

A type error **anywhere** in the project blocks the commit, even if you only changed a markdown post.

## Key stale facts in CLAUDE.md (do not trust)

- CLAUDE.md says "Next.js 15" — actual installed version is `next@16.x`
- CLAUDE.md says `getAllPosts()` is in `app/lib/utils.ts` — it is actually in `app/lib/posts.ts`. `utils.ts` only exports `cn()`.

## Path alias

`@/` → `./app/`  (not the project root)

```ts
import { cn } from "@/lib/utils";       // → app/lib/utils.ts
import { getAllPosts } from "@/lib/posts"; // → app/lib/posts.ts
```

There is no alias for `posts/` (markdown files) or `public/`.

## Blog content

- Posts live in `/posts/*.md` as Markdown with gray-matter frontmatter (`title`, `description`, `date`)
- The filename (minus `.md`) becomes the URL slug: `/blog/[slug]`
- `getAllPosts()` in `app/lib/posts.ts` reads all `.md` files, sorted newest-first by date
- `getPostBySlug(slug)` reads a single post file directly (used by the slug page)
- Markdown is rendered via `unified` + `remark-parse` + `remark-rehype` + `rehype-sanitize` + `rehype-highlight` + `rehype-stringify`
- Syntax highlighting theme (`github-dark`) is imported in `app/blog/layout.tsx`

## Static export in CI only

Production builds are fully static (`output: "export"` → `./out/`), but this flag is **injected only in CI** by `actions/configure-pages`. Running `npm run build` locally produces `.next/` (server build), not `./out/`. Manually add `output: 'export'` to `next.config.ts` if you need to test the static export locally.

## CI pipeline

`.github/workflows/nextjs.yml` — deploys to GitHub Pages (`www.roccia.sh`) on push to `main`.

Jobs in order: `check` (lint + typecheck) → `build` (static export) → `deploy`.

## MermaidRenderer

`app/components/MermaidRenderer.tsx` is a `"use client"` component that post-processes `dangerouslySetInnerHTML` output. After render it finds `<code class="language-mermaid">` blocks, replaces them with `<div class="mermaid">`, and calls `mermaid.run()`. This is a DOM mutation approach, not React-native rendering.

## Misc

- Theme is managed by `next-themes` — `ThemeProvider` in `app/components/theme-provider.tsx` re-exports from `next-themes`; `layout.tsx` uses `attribute="class" defaultTheme="dark"`
- `pages/` directory exists but is empty — ignore it
- `eslint.config.mjs` uses the native flat config from `eslint-config-next` directly (no `FlatCompat` shim)
- Tailwind v4: no `tailwind.config.js` — all theme config lives in `app/globals.css` (`@theme` block). PostCSS uses `@tailwindcss/postcss`. Animations via `tw-animate-css` (imported in `globals.css`).
