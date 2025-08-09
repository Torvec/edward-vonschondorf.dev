// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://edward-vonschondorf.dev",
  vite: {
    // @ts-expect-error - Temporary workaround for Tailwind CSS Vite plugin type incompatibility
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
});
