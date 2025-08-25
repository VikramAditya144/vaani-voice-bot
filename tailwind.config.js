/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'cursive': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}