/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        customDark: '#1c1c1f',
        customblue: '#3238f2',
        red: {
          200: '#FEB2B2', // Light red
        },
        purple: {
          200: '#E9D8FD', // Light purple
        },
        yellow: {
          200: '#FEFCBF', // Light yellow
        },
      },
      gradientColorStops: theme => ({
        'red-200': theme('colors.red.200'),
        'purple-200': theme('colors.purple.200'),
        'yellow-200': theme('colors.yellow.200'),
      }),

    },
  },
  plugins: [],
  corePlugins: {
    // enable arbitrary values for transformations
    transform: true,
  },
}

