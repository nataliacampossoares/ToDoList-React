/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkBlue': '#1E6F9F',
      'lightBlue' : '#4EA8DE',
      'gray500' : '#262626',
      'gray700' : '#0D0D0D',
    }
  },
  plugins: [],
}