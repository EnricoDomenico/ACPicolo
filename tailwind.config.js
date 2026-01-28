/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cinzel', 'serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      colors: {
        charcoal: {
          900: '#1a1a1a',
          800: '#2a2a2a',
        },
        grey: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
        },
      },
    },
  },
  plugins: [],
}
