import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

//export default defineConfig({
//	plugins: [sveltekit()]
//});

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],
	ssr: {
		noExternal:
			process.env.NODE_ENV === 'production'
				? ['@carbon/charts', 'carbon-components']
				: [],
	},
};

