/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        blue: "#0000FF",
      },
      backgroundImage: {
        'background-learn': "url('./src/assets/languages.png')",
      }
    },
  },
  plugins: [],
}

