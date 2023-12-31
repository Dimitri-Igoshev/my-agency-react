/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   'nunito': ['nunito', 'sans-serif'],
    // },
    extend: {
      colors: {
        'primary': '#F91942',
        'gray': '#191B20'
      },
    },
  },
  plugins: [],
}

