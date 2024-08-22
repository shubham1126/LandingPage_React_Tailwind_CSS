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