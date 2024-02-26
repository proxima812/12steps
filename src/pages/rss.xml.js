import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/config/settings";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/materials/${post.slug}/`,
    })),
  });
}
