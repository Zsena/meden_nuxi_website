const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"BeVietnamPro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "grad-btn-base": "#4d84f3",
        "grad-btn-secondary": "#0341BE",
        "primary-blue": "#2094c5",
        "secondary-blue": "#4D84F3", //gradient color blue base 
        "blue-light": "#6A96EE",
        "blue-dark": "#0243C8",
        "blue-darker": "#0341BE", //gradient color blue secondary
        "gray-dark": "#98A0B1",
        "gray-light": "#8A93A6",
        "gray-lighter": "#B1B7C4", //gradient color gray base 
        "gray-base": "#8C95A7", //gradient color gray secondary
        "purple": "#9388E4", //gradient color purple base
        "purple-dark": "#5145AE", //gradient color purple secondary
        "red-dark": "#AF052F",
        "orange": "#FA9F06",
        "black": "#313846", //gradient color black base
        "black-darker": "#06080B", //gradient color black secondary
        "black-base": "#1A212F",
      },
    },
  },
  plugins: [],
};
