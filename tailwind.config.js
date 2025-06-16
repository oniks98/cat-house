/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        orange: '#f07f2e',
        grey: '#2c2c2c',
        black: '#2f2f37',
        blueLight: '#ecf6ff',
        navy: '#d8def8',
        scarlet: '#fae8ea',
        yellow: '#fffddc',
        pink: '#ffe8f1',
        turquoise: '#e9f9f8',
        lilac: '#f2eef8',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        title: ['28px', { lineHeight: '36px', letterSpacing: '0.5px' }],
        subtitle: ['16px', { lineHeight: '20px', letterSpacing: '0.5px' }],
      },
      screens: {
        sm: '320px', // застосовується від 320px і більше
        md: '768px', // застосовується від 768px і більше
        xl: '1440px', // застосовується від 1440px і більше
      },
    },
  },
  plugins: [],
};
