# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 blog application with App Router, TypeScript, and Markdown-based content management.

## Development Commands

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Blog Content System

Blog posts are stored as Markdown files in the `/posts` directory with frontmatter metadata:

```markdown
---
title: "Post Title"
description: "Post description"
date: "2026-03-16"
---

Content here...
```

The `getAllPosts()` function in `app/lib/utils.ts` reads all `.md` files from `/posts`, parses frontmatter with gray-matter, and returns an array of post objects with `slug`, `title`, `description`, `date`, and `content`.

### Routing Structure

- `/` - Homepage (app/page.tsx)
- `/blog` - Blog list page (app/blog/page.tsx) - displays BlogPostTeaser components
- `/blog/[slug]` - Individual blog post (app/blog/[slug]/page.tsx)
  - Uses `generateStaticParams()` for static generation
  - Processes markdown content with remark and remark-html
  - Renders with `dangerouslySetInnerHTML` and Tailwind typography classes

### Path Aliases

The `@/` alias maps to `./app/` (configured in tsconfig.json). Use `@/lib/utils` instead of relative paths when importing from the app directory.

### Styling System

Tailwind CSS with a custom HSL-based color system using CSS variables:
- Primary color: `#3ecf8e` (emerald green)
- Dark mode enabled via class strategy
- Custom typography plugin for markdown rendering (prose classes)
- CSS variables defined in `app/globals.css` for theme colors (--background, --foreground, --primary, etc.)

### Component Organization

- `app/components/ui/` - Reusable UI components (Radix UI-based: button, card, navigation-menu, etc.)
- `app/components/` - Feature-specific components (navigation, footer, chart)
- `app/blog/components/` - Blog-specific components (Post teaser component)

Use the `cn()` utility from `app/lib/utils.ts` for conditional className merging with Tailwind.

## Adding New Blog Posts

Create a `.md` file in `/posts` directory with required frontmatter fields. The filename (without `.md`) becomes the URL slug. Posts are automatically discovered by `getAllPosts()` at build time.

## Git Hooks

Pre-commit hook runs `npm run lint` via Husky. Ensure code passes linting before committing.
