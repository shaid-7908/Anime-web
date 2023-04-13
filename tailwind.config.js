/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBackgroung:'rgba(2,0,36,1)',
        litedarkBackground:'rgba(59,55,138,1)',
        searchResult:'rgba(93,92,108,1)'
      },
      height:{
        fullHeight:'100vh',
        cardHeight:'300px',
        imgDivHeight:'80%'
      },
      width:{
        animeCardSize:'48%',
        midScreenCard:'15%',
      }
    },
  },
  plugins: [],
}

