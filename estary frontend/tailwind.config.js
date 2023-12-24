/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'mainscreenSize': '1440px'
      },
      colors:{
        'primaryText': '#000929',
        'secondaryText': '#F0F8FF',

      },
      borderColor:{
        'primaryBorder': '#E6E6FA'
      },
      backgroundColor: {
        'mainBg': '#000929',
        'primaryBg': '#F0F8FF',
        'btnColor': '#7B68EE'
      }
    },
  },
  plugins: [],
}

