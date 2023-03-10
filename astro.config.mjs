import { remarkReadingTime } from "./src/lib/readingTime.mjs";
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark"
    },
    remarkPlugins: [remarkToc, remarkReadingTime],
    remarkRehype: {
      footnoteLabel: "Footnotes"
    },
    gfm: true,
    drafts: true
  }), svelte(), image()],
  output: "server",
  adapter: vercel()
});