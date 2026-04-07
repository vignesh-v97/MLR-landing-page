/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
      },
      height: {
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
      },
      colors: {
        'text-heading': '#002937',
        'text-body': '#6B7280',
        'primary-tint': '#DEEBF7',
        'primary-icon': '#4F78AB',
        secondary: {
          DEFAULT: '#F47A20',
          50: '#FDE2CF',
          100: '#FCD7BC',
          200: '#FAC095',
          300: '#F8A86E',
          400: '#F69147',
          500: '#F47A20',
          600: '#D25F0A',
          700: '#9C4708',
          800: '#672E05',
          900: '#311602',
        },
        primary: {
          DEFAULT: '#00597A',
          50: '#77DAFF',
          200: '#23C4FF',
          300: '#00ABEA',
          400: '#0082B2',
          500: '#00597A',
          600: '#004E6B',
          700: '#00435B',
          800: '#00384C',
          900: '#002C3D',
        },
        neutral: {
          100: '#ffffff',
          200: '#ebebeb',
          300: '#f3f3f3',
          400: '#a0a0a0',
          800: '#181818',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
