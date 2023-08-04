/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "contained-btn": "0 4px 0 #848862",
        "outline-btn": "0 3px 0 #d1d5db",
        "contained-btn-active": "0 0px 0 #848862",
        "outline-btn-active": "0 0px 0 #d1d5db",
      },
      colors: {
        greeness: {
          300: "#C0CE98",
          400: "#B5C686",
          500: "#A8BC71",
          700: "#738740",
          800: "#848862",
        },
      },
    },
  },
  plugins: [],
};
