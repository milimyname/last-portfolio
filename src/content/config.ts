// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const diaryCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    author: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  diaries: diaryCollection,
};
