import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			spacing: {
				article: '750px'
			},
		},
		colors: {
			transparent: 'transparent',
			blue: {
				DEFAULT: '#57adde',
				light: '#8ecaec',
			},
			white: {
				DEFAULT: '#ffffff',
			},
			red: {
				DEFAULT: '#d41515',
				dark: '#a44a3f'
			},
			black: {
				DEFAULT: '#000000',
			},
			grey: {
				DEFAULT: '#51726b',
				light: {
					DEFAULT: '#898c8a',
					1: '#dbdbdb',
				}
			},
			cyan: {
				DEFAULT: '#5c9ead',
				dark: '#335860',
				light: {
					DEFAULT: '#70c0d3',
					1: '#4eedcb'
				},
			},
			teal: {
				DEFAULT: '#109191',
				dark: '#0a5757',
				light: {
					DEFAULT: '#16c4c4',
					1: '#4eeded',
					2: '#e0edf7'
				},
			},
		},
		borderRadius: {
			DEFAULT: '5px',
			'md': '10px',
			'box': '10px',
			'tag': '12px',
			'lr': '15px',
		},
		screens: {
			'xsm': '375px',
			'sm': '425px',
			'md': '768px',
			'lr': '1024px',
			'xl': '1440px',
			'2xl': '2560px'
		}
	},
	plugins: [nextui({
		layout: {
			radius: {
				small: "5px",
				medium: "10px",
				large: "15px",
			},
			spacingUnit: 3,
		},
		themes: {
			light: {
				colors: {
					foreground: 'black',
					primary: {
						foreground: 'white',
						DEFAULT: '#109191',
					},
					success: {
						foreground: 'white',
						DEFAULT: '#109191',
					},
					warning: {
						foreground: 'white',
						DEFAULT: '#a44a3f',
					}
				}
			}
		}
	})],
};
export default config;
