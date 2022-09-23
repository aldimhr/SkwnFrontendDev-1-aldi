/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './sections/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        plusJkt: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'highlight-product': "url('/static/images/highlighted-product.png')",
      },
    },
  },
  plugins: [],
};
