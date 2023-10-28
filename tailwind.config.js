/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B2021',
        secondary: '#30343F',
        accent: '#89023E',
        light: '#FFD9DA',
        other: '#30343F'
      },
    },
  },
  plugins: [],
};
