/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				noto: 'Noto Sans JP',
			},
			boxShadow: {
				all: '0 0 12px 0 rgb(0,0,0,0.2)',
				shortcut: '0px -2px 12px rgba(0, 0, 0, 0.2)',
			},
			colors: {
				primary: '#EC6843',
				secondary: '#4387EC',
				graph: {
					primary: '#F39D85',
					secondary: '#85B1F3',
				},
				data: '#873A24',
				table: {
					title: '#061E43',
					header: '#D0DBEB',
				},
				text: {
					main: '#333333',
					sub: '#555555',
					graph: '#888888',
				},
				background: {
					orange: '#FAF2E6',
					gray: '#EEEEEE',
				},
				error: '#EC4343',
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		darkTheme: 'light',
	},
};
