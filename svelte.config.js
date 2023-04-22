//import adapter from 'svelte-adapter-deno';
import adapter from '@sveltejs/adapter-vercel';
import { optimizeImports } from "carbon-preprocess-svelte";


export default {
	preprocess: [optimizeImports()],
	kit: {
        adapter: adapter({
            // see the 'Deployment configuration' section below
        })
    }
  };



//export default config;
