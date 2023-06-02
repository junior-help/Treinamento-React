/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors:{
        'cyan': {
          500: '#00B8EB'
        }
      }
    },
  },
  plugins: [],
}