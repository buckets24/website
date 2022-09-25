/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#D9303D',
				light: "#FFFFFF",
				dark: '#000000',
				bgoverlay: 'rgba(0,0,0, 0.8)',
				boxDark: 'rgb(17,17,17)',
				boxDarkHover: 'rgb(34,34,34)'
			},
			fontFamily: {
				'primary': ['Teko'],
				'secondary': ['Mulish']
			}
		},
	},
	plugins: [],
}
