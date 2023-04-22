import adapter from 'svelte-adapter-deno';import { optimizeImports } from "carbon-preprocess-svelte";


export default {
	preprocess: [optimizeImports()],
	kit: {
        adapter: adapter({
            // see the 'Deployment configuration' section below
        })
    }
  };



//export default config;
