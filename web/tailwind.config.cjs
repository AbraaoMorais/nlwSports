/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['inter', 'sans-serif']
    },
    extend: {
      colors:{
        
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(0deg, rgba(2,0,60,1) 0%, rgba(2,2,47,1) 9%, rgba(0,212,255,0) 100%);' 
      },
    }
  },
  plugins: [],
}
