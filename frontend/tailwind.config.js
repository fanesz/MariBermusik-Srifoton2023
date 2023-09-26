/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'navbar_color': '#fed7aa',
    },
    extend: {
      width:{
        'dropdown_navbar': '93vw',
      }
    },
  },
  plugins: [],
});