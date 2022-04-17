// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}",'
  ],
  theme: {
    extend: {
      colors:{
        ...colors,
        gray:{
          ...colors.gray,
          text: '#53565A'
        },
        primary:{
          text:{
            DEFAULT: '#53565A'
          },
          DEFAULT: '#C20808',
          dark: '#7B0506',
          bg:{
            DEFAULT: '#FFFFFF',
            secondary: '#F3F4F6',
            hoverCards: '#686769'
          }
        }
      },
      boxShadow: {
        'cards': '0 1px 4px 0 rgb(177 179 179 / 30%)',
      }
    },
  },
  plugins: [
    '@tailwindcss/line-clamp'
  ],
}