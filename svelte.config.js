import { vitePreprocess } from "@astrojs/svelte";
import seqPreprocessor from "svelte-sequential-preprocessor";
import { preprocessThrelte } from "@threlte/preprocess";

const config = {
  preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()]),
};

export default config;
