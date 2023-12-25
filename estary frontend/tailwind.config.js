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
        'textColor': '#7B68EE',
        'textSecondary': '#808080'
      },
      borderColor:{
        'primaryBorder': '#E6E6FA'
      },
      backgroundColor: {
        'mainBg': '#000929',
        'primaryBg': '#F0F8FF',
        'btnColor': '#7B68EE'
      },
      fontFamily: {
        'primaryFontFamily': 'Roboto',
        'secondaryFontFamily': 'Oswald'
      },
      screens:{
        'tablet': {"min": '768px',  'max': '992px'},
        'mobile' :{'max' : '767px'},
        'laptop' :  {'min' : '1024px', 'max': '1169px'},
        'mini' : {'min' : '320px', 'max': '480px'},
      },
    },
  },
  plugins: [],
}

