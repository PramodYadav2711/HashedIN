/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      clipPath: {
        'doctor-polygon': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
};
