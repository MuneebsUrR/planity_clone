/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#202020',
        'custom-gray': '#5A5A5A',
      },
    },
  },
  plugins: [],
}

