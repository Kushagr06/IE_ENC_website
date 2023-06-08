/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        background:'#2C2A4A',
        textcol:'#DABFFF',
        primary:'#907AD6',
        secondary:'#4F518C',
        highlight:'#77DDEE',
      },
      backgroundImage:{
        'backpattern':"url('/src/assets/background.png')"
      }
    },
    fontFamily:{
      'custom': ['Ubuntu', 'K2D'],
    },
  },
  plugins: [],
}