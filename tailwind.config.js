/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        warning: '#facc15',
        gray:'#6b7280',
        darker:'#374151',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}

