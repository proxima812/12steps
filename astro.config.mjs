import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import compress from "astro-compress";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { SITE_URL } from "./src/config/settings";
import { manifest } from "./src/utils/manifest";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  // experimental: {
  //   clientPrerender: true,
  //   contentCollectionCache: true,
  //   optimizeHoistedScript: true,
  // },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("keystatic"),
    }),
    mdx(),
    react(),
    markdoc(),
    keystatic(),
    icon(),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    compress(),
    metaTags(),
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: "hybrid",
});
