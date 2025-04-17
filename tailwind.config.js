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
        'footer-bg': "url('/images/footer-bg.jpg')",
        'offer-1': "url('/images/offer/1-mobile.jpg')",
        'offer-2': "url('/images/offer/2.jpg')",
        'offer-3': "url('/images/offer/3.jpg')",
        'special-1':"url('/images/special/1.jpg')",
        'special-2':"url('/images/special/2.jpg')",
        'special-3':"url('/images/special/3.jpg')",
        'comfort-1':"url('/images/comfort/1.jpg')",
        'comfort-2':"url('/images/comfort/2.jpg')",
        'comfort-3':"url('/images/comfort/3.jpg')",
        'active-1':"url('/images/active/1.jpg')",
        'active-2':"url('/images/active/2.jpg')",
        'active-3':"url('/images/active/3.jpg')",
        'safe-1': "url('/images/safe/1.jpg')",
        'safe-2': "url('/images/safe/2.jpg')",
        'safe-3': "url('/images/safe/3.jpg')",
        'fake-1': "url('/images/fake/1.jpg')",
        'fake-2': "url('/images/fake/2.jpg')",
        'fake-3': "url('/images/fake/3.jpg')",
        'fake-4': "url('/images/fake/4.jpg')",
        'fake-5': "url('/images/fake/5.jpg')",
        'fake-6': "url('/images/fake/6.jpg')",
        'form-submit' : "url('/images/from-complete.jpg')"
      }
    },
    screens: {
      'xxs':'375px',
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      '2xl': '1536px',
      '3xl': '1700px'
    },
  },
  plugins: [],
}

