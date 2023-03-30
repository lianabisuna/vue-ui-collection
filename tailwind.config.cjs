/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
      {
        pattern: /(bg|text|border|outline)-(blue|amber|pink|green|sky|rose|emerald|fuchsia|lime|purple)-(500)/,
        variants: ['hover', 'focus', 'disabled', 'active'],
      },
    ],
  },
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
    },
  },
  plugins: [],
}
