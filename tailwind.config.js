/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme : {
    extend : {
      fontFamily : {
        custom : ["Ardela", "sans-serif"]
      },
      colors : {
        'cami-red': '#D93240',
        'cami-red-black': '#D93240',
        'cami-yellow-light': '#F2E422',
        'cami-yellow-black': '#A69F3C', 
      }
    }
  },
  plugins: [],
}
