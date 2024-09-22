import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				main: 'calc(100vh)',
			},
			minHeight: {
				content: 'calc(100vh - 200px)',
			},
			transitionProperty: {
				height: 'height',
			},
			colors: {
				layout: {
					primary: '#111827',
					secondary: '#e5e7eb',
				},
				navbar: {
					primary: '#94a3b8',
					secondary: '#94a3b8',
					active: '#7e22ce',
				},
				menubar: {
					primary: '#CBD5E1',
					active: '#7e22ce',
				},
				card: {
					primary: '#CBD5E1',
				},
			},
		},
	},
	plugins: [],
};
export default config;
