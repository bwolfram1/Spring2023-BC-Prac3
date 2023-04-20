import adapter from '@sveltejs/adapter-auto';
import { optimizeImports } from "carbon-preprocess-svelte";

export default {
	preprocess: [optimizeImports()],
  };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

//export default config;
