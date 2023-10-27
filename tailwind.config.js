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
        primary: '#f5f5f5',
        secondary: '#e26972',
        accent: '#9f5f91',
        neutral: '#f5f5f5',
        text: '#572c57',
        tertiary: '#f6ea98',
      },
    },
  },
  plugins: [],
};
