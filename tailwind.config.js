/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./portfolio/index.html",
  "./about/index.html",
  "./contact/index.html",
  "./blog/index.html",
  "./services/index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        linen: 'rgb(254, 252, 250)',
      },
      fontFamily: {
        londrina: ['LondrinaOutline', 'system-ui', 'sans-serif'],
         ttfors: ['TTForsOutline', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}