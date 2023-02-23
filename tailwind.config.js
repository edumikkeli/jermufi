/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        100: '100% 100%',
      },
      spacing: {
        '1/3': '33% 33%',
      }
    }
  },
  plugins: [],
}