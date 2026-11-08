/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-blush': '#F8BBD0',
        'baby-pink': '#FCE4EC',
        'warm-cream': '#FFF7ED',
        'ivory': '#FFFFF7',
        'peach': '#FFD6BA',
        'dusty-rose': '#D9889B',
        'lavender-mist': '#E9D5FF',
        'cocoa': '#4A2C2A',
        'rosewood': '#7A3E4D',
        'gold-soft': '#F4C95D',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Nunito Sans', 'sans-serif'],
        signature: ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
