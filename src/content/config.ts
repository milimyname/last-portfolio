// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const diaryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    isDraft: z.boolean(),
    publishDate: z.string().transform((str) => new Date(str)),
    description: z.string(),
    author: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  diaries: diaryCollection,
};
