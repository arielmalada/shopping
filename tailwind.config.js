/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: colors.slate[100],
      secondary: colors.teal[700],
      accent: colors.purple[300]
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
})
