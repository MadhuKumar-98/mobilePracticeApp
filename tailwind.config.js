/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik300: ['Rubik_300'],
        rubik400: ['Rubik_400'],
        rubik500: ['Rubik_500'],
        rubik600: ['Rubik_600'],
        rubik700: ['Rubik_700'],
      }
    },
  },
  plugins: [],
}

