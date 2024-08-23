/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        cursor: {
          'fancy': 'url(./images/middle-finger-cursor.png), pointer',
        }
      },
    },
    plugins: [],
  }