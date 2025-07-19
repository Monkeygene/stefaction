/** @type {import('tailwindcss').Config} */
export default {
  
 content: [
    "./index.html",
    "./about/index.html",
    "./portfolio/index.html",
    "./services/index.html",
    "./contact/index.html",
    "./blog/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: 'rgb(254, 252, 250)',
      },
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [],
}
