module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'navTitle' : '#011f4b',
        'navTitleTwo' : '#1e1f26',
        'headerTitle' : '#6f7c85 ',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
