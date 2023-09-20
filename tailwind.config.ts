import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        DEFAULT: '#57ADDE',
        light: '#8ECAEC',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      red: {
        DEFAULT: '#D41515',
      },
      black: {
        DEFAULT: '#000000',
      },
      grey: {
        DEFAULT: '#505250',
      }
    },
    borderRadius: {
      DEFAULT: '5px',
      tag: '12px'
    }
  },
  plugins: [],
}
export default config
