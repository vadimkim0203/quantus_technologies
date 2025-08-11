const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        ...blackA,
        ...mauve,
        ...violet,
        ...indigo,
        ...purple,
      },
    },
  },
  plugins: [],
};