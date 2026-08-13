/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f1923',
        'navy-dark': '#0a1219',
        teal: '#4a9e8e',
        'teal-dark': '#2a7a6a',
        'teal-light': '#e6f5f2',
        light: '#f8f9fa',
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
