/** tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}