/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Manrope', 'sans-serif'],
      },
      colors: {
        backGround: 'rgb(32,38,50)',
        boxColor: 'rgb(49,58,73)',
      },
      boxShadow: {
        'boxShadow': '0px 0px 10px 10px rgb(44,95,80)',
      },
    },
  },
  plugins: [],
}

