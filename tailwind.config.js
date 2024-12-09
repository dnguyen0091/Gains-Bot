/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      width:
      {
          'customBox': '45rem',
      },
      height:
      {
          'customBox': '60rem',
      },
      colors:
      {
        'darkerGrey': '#333333',
        'darkGrey': '#3C4043',
        'blue': '1A73E8',
        'lightGrey': '#AAAAAA',
        'white': '#FFFFFF',
        'darkGrey2':'#1E1E1E',
      }
    },
  },
  plugins: [],
}

