/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js, css}', './*.html' ],
  safelist: [
    {
      pattern: /^bg-/,
      variants: [ 'checked' ]
    }
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
