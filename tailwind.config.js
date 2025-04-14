/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-preview': "url('/images/preview.jpg')",
        'footer-bg': "url('/images/footer-bg.jpg')"
      }
    },
  },
  plugins: [],
}

