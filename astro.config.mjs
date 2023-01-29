import { remarkReadingTime } from './src/lib/readingTime.mjs';

import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
      },
      remarkPlugins: [remarkToc, remarkReadingTime],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: false,
      drafts: true,
    }),
    svelte(),
  ],
});
