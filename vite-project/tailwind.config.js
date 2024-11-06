/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        inter: ['Inter'], 
      },
      colors: {
        'darkBlue': '#1E6F9F',
        'lightBlue' : '#4EA8DE',
        'gray500' : '#262626',
        'gray700' : '#0D0D0D',
        'gray100' : "#F2F2F2",
        'gray400' : "#333333",
        'gray600' : "#191919",
        'purple' : "#8284FA",
        'gray300' : "#808080"
        
      }
    }
  },
  plugins: [],
}
