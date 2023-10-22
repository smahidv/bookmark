/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3056D3',
        dark: '#1A202C',
        bodyColor: '#4A5568',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

