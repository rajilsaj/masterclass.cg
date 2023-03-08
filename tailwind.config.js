/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme : {
    extend : {
      backgroundImage: { 
        'bgt': "url('/src/assets/images/cami_pic.png')"
       },
      fontFamily : {
        custom : ["Ardela", "sans-serif"]
      },
      colors : {
        'cami-red': '#D93240',
        'cami-red-black': '#D93240',
        'cami-yellow-light': '#F2E422',
        'cami-yellow-black': '#A69F3C', 
        'cami-background': '#f0f2ed',
        'cami-background-dark': '#f1f3ed',
      }
    }
  },
  plugins: [],
}
