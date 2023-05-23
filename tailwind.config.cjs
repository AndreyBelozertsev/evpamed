/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px'
      },
    },
    extend: {
      colors: {
        accent: "#22B18B",
        alpha_60: "#2B433C",
        brand: "#FECC06",
        milk: "#F6F6F6",
        onAccent: "#E0FFF7",
        primary: "#1C5445",
        textCard: "#54887A",
      }
    },
  },
  plugins: [],
}