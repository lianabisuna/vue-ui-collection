/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
        night: '#0F0F0F',
        jet: '#2D2E2E',
        snow: '#FBFBFB',
      },
      fontFamily: {
        'narrow': 'Encode Sans Condensed, sans-serif',
      },
      backgroundImage: {
        'profile': 'url(/src/assets/sejeong.jfif)',
      },
    },
  },
  plugins: [],
}
