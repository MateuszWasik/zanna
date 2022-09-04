module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        fadeOut: 'fadeOut 4s linear forwards',
        fadeIn: 'fadeIn 2s linear forwards',
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
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
