import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

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
				light: '#dbdbdb',
			},
			cyan: {
				DEFAULT: '#5c9ead',
				light: '#83bcc9',
			}
		},
		borderRadius: {
			DEFAULT: '5px',
			tag: '12px'
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
						DEFAULT: '#5c9ead',
					}
				}
			}
		}
	})],
}
export default config
