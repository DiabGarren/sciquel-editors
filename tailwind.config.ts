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
			blue: {
				DEFAULT: '#57adde',
				light: '#8ecaec',
			},
			white: {
				DEFAULT: '#ffffff',
			},
			red: {
				DEFAULT: '#d41515',
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
				},
			},
			teal: {
				DEFAULT: '#109191',
				dark: '#0a5757',
				light: '#16c4c4'
			}
		},
		borderRadius: {
			DEFAULT: '5px',
			tag: '12px',
			lr: '15px',
			md: '10px'
		},
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
						DEFAULT: '#ff0000',
					}
				}
			}
		}
	})],
};
export default config;
