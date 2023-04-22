import adapter from 'svelte-adapter-deno';import { optimizeImports } from "carbon-preprocess-svelte";


export default {
	preprocess: [optimizeImports()],
	kit: {
		adapter: adapter()
	  }
  };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};



//export default config;
