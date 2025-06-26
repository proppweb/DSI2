export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
			},
			mode: 'jit',
			fontFamily: {
				'NM-Medium': ['NeueMontreal-Medium'],
				'NM-Book': ['NeueMontreal-Book'],
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			  },
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
				  '0%': { transform: 'translateX(100%)' },
				  '100%': { transform: 'translateX(0%)' },
				},
			  },
			  colors: {
				blu: '#0200FF',
			  }
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {

				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},

				".no-scrollbar": {
					"-ms-overflow-style": "none", 
					"scrollbar-width": "none", 

				},
			};
			addUtilities(newUtilities);
		},
	],
};
