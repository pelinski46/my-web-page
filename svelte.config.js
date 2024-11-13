import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			fallback: 'index.html'
		  }),
		paths: {
			// Set the base path for GitHub Pages
			base: dev ? '' : '/my-web-page', // replace 'your-repo-name' with your actual GitHub repository name
		},
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path, referrer, message }) => {
			  console.warn('Error prerendering', path, 'referenced from', referrer);
			}
		  }
	}
};

export default config;
