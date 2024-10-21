/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to specify where Tailwind should look for class names
  ],
  theme: {
    extend: {
      colors:{
        customRed:'#F54748',
        textColor: '#2E2E2E',
        lightColor: '#616161',
        customWhite: '#F7F7F7',
        customYellow: '#FFECC9',
      },
    },
  },
  plugins: [],
}