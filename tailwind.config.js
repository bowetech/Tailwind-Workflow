const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      './src/**/*.php',
      './template-parts/**/*.php',
      './*.php',
      './inc/**/*.php',
      './inc/*.php',
      './src/**/*.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'yellowtail': ['Yellowtail', 'sans-serif'],
      'robototall': ['"Roboto Condensed"', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}