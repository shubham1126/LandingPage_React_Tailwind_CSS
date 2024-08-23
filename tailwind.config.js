/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#4CAF4F",
        bg_hero:"#F5F7FA",
        footer:"#263238",
      
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  }
  },
  plugins: [],
}