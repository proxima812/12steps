import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config/settings";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  compressHTML: true,
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    react(),
    markdoc(),
    keystatic(),
    partytown(
      partytown({
        // Example: Add dataLayer.push as a forwarding-event.
        config: {
          forward: ["dataLayer.push"],
        },
      }),
    ),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  output: "hybrid",
});
