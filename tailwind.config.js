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
        primary: '#474747',
        secondary: '#000',
        // accent: '#ff6b6b',
        light: '#92cd86',
        dark: '#1a5d1a',
        other: '#30343f'
      },
    },
  },
  plugins: [],
};
