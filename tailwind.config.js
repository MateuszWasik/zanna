const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeOut: 'fadeOut 4s linear forwards',
        fadeIn: 'fadeIn 2s linear forwards',
        slideFromTop: 'slideFromTop 750ms linear',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0, visibility: 'hidden', width: 'inherit', height: 'inherit' },
          '50%': { opacity: 1, visibility: 'visible' },
          '100%': { opacity: 0, visibility: 'hidden', width: 'inherit', height: '10px' },
        },
        fadeIn: {
          '0%': { opacity: 0, visibility: 'hidden' },
          '100%': { opacity: 1, visibility: 'visible' },
        },
        dropdownFadeIn: {
          '0%': { opacity: 0, visibility: 'hidden' },
          '50%': { opacity: 1, visibility: 'visible' },
          '100%': { opacity: 0, visibility: 'hidden' },
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
