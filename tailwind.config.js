module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
     textColor: {
       'brand': '#F7941E'
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'brand': '#F7941E'
     }),
     height: {
      brand: '700px'
     },
     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'brand': '#F7941E'
      
     })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
