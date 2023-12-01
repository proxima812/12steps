# Astro 3.5.5 starter fro BLOG

```ts
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── FormattedDate.astro
│   │   ├── Link.astro
│   │   ├── PostCard.astro
│   │   ├── RelatedPosts.astro
│   │   ├── TOC
│   │   │   ├── TableOfContents.astro
│   │   │   └── TabletOfContentsHeading.astro
│   │   ├── icons
│   │   │   ├── CheckIcon.astro
│   │   │   ├── CopyIcon.astro
│   │   │   └── Toc.astro
│   │   ├── mdx
│   │   │   └── Code.astro
│   │   ├── partials
│   │   │   ├── BaseHead.astro
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   └── seo
│   │       └── SEOTags.astro
│   ├── config
│   │   └── settings.ts
│   ├── content
│   │   ├── authors
│   │   ├── categories
│   │   ├── config.ts
│   │   ├── posts
│   │   │   ├── -index.mdx
│   │   │   ├── 1.md
│   │   │   └── 2.mdx
│   │   └── tags
│   ├── env.d.ts
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── authors
│   │   │   ├── [author].astro
│   │   │   └── index.astro
│   │   ├── categories
│   │   │   ├── [category].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── posts
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   ├── rss.xml.js
│   │   └── tags
│   │       ├── [tag].astro
│   │       └── index.astro
│   ├── styles
│   │   └── global.css
│   └── utils
│       ├── getTaxonomy.ts
│       ├── libs
│       │   ├── customSlugify.ts
│       │   ├── getSinglePage.ts
│       │   ├── humanize.ts
│       │   ├── slugify.ts
│       │   └── taxonomyFilter.ts
│       └── types
│           └── HeadTags.ts
├── tailwind.config.mjs
└── tsconfig.json
```