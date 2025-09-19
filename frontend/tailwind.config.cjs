/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./frontend/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['Aeonik Pro', 'sans-serif'],
      },
      colors: {
      lunestBlue: '#010135',
      accessBlue: '#0308AC',
      reserveBtn: '#000CDFB2',
  
    },
    // fontFamily: {
    //     custom: ['"AeonikPro"', 'sans-serif'],
    //   },
    },
  },
  plugins: [],
}