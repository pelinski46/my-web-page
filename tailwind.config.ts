import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries, aspectRatio, require('daisyui')],
	daisyui: {
		themes: [
		  "light",
		  "dark",
		  "cupcake",
		  "bumblebee",
		  "emerald",
		  "corporate",
		  "synthwave",
		  "retro",
		  "cyberpunk",
		  "valentine",
		  "halloween",
		  "garden",
		  "forest",
		  "aqua",
		  "lofi",
		  "pastel",
		  "fantasy",
		  "wireframe",
		  "black",
		  "luxury",
		  "dracula",
		  "cmyk",
		  "autumn",
		  "business",
		  "acid",
		  "lemonade",
		  "night",
		  "coffee",
		  "winter",
		  "dim",
		  "nord",
		  "sunset",
		],
	  },
} satisfies Config;
