import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).default(["Прочее"]),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      speechVoice: z.boolean().default(false).optional(),
      audioFile: z.string().optional(),
    }),
});

const pages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      index: z.boolean().optional(),
    }),
});

const postsBB = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      head: z.string(),
      description: z.string(),
      coverImage: image().optional(),
      // Удали позже
      img: z.string().optional(),
      id: z.string().optional(),
      poster: z.string().optional(),
    }),
});

const tags = defineCollection({
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { posts, pages, tags, postsBB };
