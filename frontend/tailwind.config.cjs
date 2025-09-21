/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        aeonik: ["Aeonik Pro", "sans-serif"],
      },
      colors: {
        lunestBlue: "#010135",
        accessBlue: "#0308AC",
        reserveBtn: "#000CDFB2",
      },
    },
  },
  plugins: [],
};
