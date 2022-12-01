/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "website-bg": "#ffffff",
        "secondary-bg": "#EEEAF4",
        "primary": "#3C3562",
        "secondary": "#8f9ea5"
      }
    },
  },
  plugins: [],
}
