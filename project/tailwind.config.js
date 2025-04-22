/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A5C9CA',         // pastel teal
        'primary-light': '#D3E0DC', // lighter teal
        secondary: '#F7D6E0',       // soft pink
        accent: '#F9F3DF',          // cream
        muted: '#B4C6A6',           // muted green
        dark: '#3D5A80',            // muted blue
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
