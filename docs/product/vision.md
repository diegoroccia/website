# website product vision

## Purpose

The website is Diego’s technical blog: a small, opinionated publishing surface for writing about platform engineering, cloud infrastructure, automation, and the trade-offs behind technical systems.

## Primary readers

Technical practitioners and engineering leaders who want concise, experience-shaped writing rather than generic documentation or marketing copy.

## Product promise

Make good technical writing easy to publish, easy to read, and durable. A Markdown file should be enough to publish a post on the next build.

## Product boundaries

- Posts live in `posts/` as Markdown with `title`, `description`, and `date` frontmatter.
- Every post in `posts/` is published; there is intentionally no draft gate.
- Mermaid diagrams are supported where they clarify an argument.
- The site is a static Next.js publication deployed to GitHub Pages.
- The ideas pipeline in Obsidian is the backlog; the repository is the publishing system.

## Success

A strong idea can move from note to published post with minimal ceremony, while the resulting site remains fast, readable, technically credible, and easy to maintain.
