/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        title: ['28px', { lineHeight: '36px', letterSpacing: '0.5px' }],
        subtitle: ['16px', { lineHeight: '20px', letterSpacing: '0.5px' }],
      },
      screens: {
        sm: '320px',
        md: '768px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
