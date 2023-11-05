/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bla: '#0c0f0a',
        gray: '#e8e8e8',
        wine: '#800020'
      },
      textColor: {
        bla: '#0c0f0a',
        gray: '#e8e8e8',
        wine: '#800020'
      }
    },
  },
  plugins: [],
}