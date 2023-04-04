/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
  safelist: [
    {
      pattern: /(bg|text|border|outline)-(violet|yellow|cyan|teal|indigo|blue|gray|amber|pink|green|sky|rose|emerald|fuchsia|lime|purple)-(500|800)/,
      variants: ['hover', 'focus', 'disabled', 'active'],
    },
  ],
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: colors.blue,
      },
      keyframes: {
        shake: {
          '0%, 40%, 80%': { transform: 'translate(0,0)' },
          '20%, 60%, 100%': { transform: 'translate(3px,0)' },
        },
      },
      animation: {
        shake: 'shake .25s ease',
      },
      aspectRatio: {
        '4/3': '4/3',
      },
    },
  },
  plugins: [],
}
