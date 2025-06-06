/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-secondary': '#1a1a1a',
        'dark-accent': '#2a2a2a',
        'blue-accent': '#3b82f6',
        'purple-accent': '#8b5cf6',
      },
    },
  },
  plugins: [],
} 