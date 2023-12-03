import { ImageResponse } from "@vercel/og";
import { getCollection, type CollectionEntry } from "astro:content";
import fs from "fs";
import path from "path";

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<"posts"> };
}



export async function GET({ props }: Props) {
  const { post } = props;

  // using custom font files
  const Onest = fs.readFileSync(path.resolve("./Inter.ttf"));
  // const DmSansReqular = fs.readFileSync(
  //   path.resolve("./Inter-Bold.otf"),
  // );

  // post cover with Image is pretty tricky for dev and build phase
  const postCover = fs.readFileSync(
    process.env.NODE_ENV === "development"
      ? path.resolve(
          post.data.heroImage.src.replace(/\?.*/, "").replace("/@fs", ""),
        )
      : path.resolve(post.data.heroImage.src.replace("/", "dist/")),
  );

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            // using tailwind
            tw: "w-[200px] h-[200px] flex rounded-3xl overflow-hidden",
            children: [
              {
                type: "img",
                props: {
                  src: postCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    fontFamily: "Onest",
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-blue-600 text-3xl",
                  style: {
                    fontFamily: "Onest",
                  },
                  children: "Dzmitry Kozhukh",
                },
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px",
                  },
                  children: "|",
                },
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Blog",
                },
              },
            ],
          },
        },
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        background: "#f7f8e8",
        fontFamily: "Onest",
      },
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Onest",
        data: Onest.buffer,
        style: "normal",
      },
    ],
  });
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection("posts");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
