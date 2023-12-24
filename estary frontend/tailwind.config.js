/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      maxWidth:{
        'mainscreenSize': '1440px'
      },
      colors:{
        'primaryBtnColor': '#F0F8FF',
        'primaryText': '#000929',
        'secondaryText': '#F0F8FF'
      },
      backgroundColor: {
        'mainBg': '#000929',
        'primaryBg': '#F0F8FF'
      }
    },
  },
  plugins: [],
}

