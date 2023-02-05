import { vitePreprocess } from "@astrojs/svelte";
import preprocess from "@threlte/preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";
import { preprocessThrelte } from "@threlte/preprocess";

export default {
  preprocess: seqPreprocessor([
    vitePreprocess(),
    preprocess(),
    preprocessThrelte(),
  ]),
};
