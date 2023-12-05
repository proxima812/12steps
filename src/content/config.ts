import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65),
      description: z.string().max(165),
      tags: z.array(z.string()).default(["Прочее"]).optional(),
      // authors: z.array(z.string()).default(["Пользователь"]),
      // categories: z.array(z.string()).default(["Другое"]),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
    }),
});

const tags = defineCollection({
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { posts, tags };
