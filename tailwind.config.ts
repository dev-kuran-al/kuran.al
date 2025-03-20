import type { Config } from 'tailwindcss';

export default {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				arabic: ['"Traditional Arabic"', 'Scheherazade', '"Times New Roman"', 'serif'],
				hand: ['"Handlee"', 'Scheherazade', '"cursive"', 'serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
