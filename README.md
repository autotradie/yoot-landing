# YOOT Landing + Blog

Marketing site for YOOT — software for tradies who work out of their ute.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** with YOOT brand colours
- **DM Sans** + **DM Mono** fonts
- **Markdown** blog posts
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publishing a blog post

1. Create a `.md` file in `content/blog/`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "One-sentence description for SEO and social sharing."
date: "2026-03-15"
keywords: ["keyword one", "keyword two"]
---
```

3. Write the post content in markdown below the frontmatter
4. Push to `main` — Vercel deploys automatically
5. The post appears at `/blog/your-file-name`

## Email capture

The early access form is a placeholder. Replace the form in `src/components/EmailCapture.tsx` with your ConvertKit (Kit) embed code.

## Routes

| Route | Status | Purpose |
|-------|--------|---------|
| `/` | Live | Landing page |
| `/blog` | Live | Blog index |
| `/blog/[slug]` | Live | Individual posts |
| `/resources` | Placeholder | Future resource pages |
| `/compare` | Placeholder | Future comparison pages |
| `/guides` | Placeholder | Future guide pages |

## SEO

- Sitemap generated on build via `next-sitemap`
- Organization schema on homepage
- Article schema on each blog post
- Dynamic meta tags and OG tags per page
- Canonical URLs set automatically
