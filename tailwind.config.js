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
        primary: '#4A55A2',
        secondary: '#7895CB',
        accent: '#A0BFE0',
        light: '#C5DFF8',
      },
    },
  },
  plugins: [],
};
