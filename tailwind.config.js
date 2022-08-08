/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
