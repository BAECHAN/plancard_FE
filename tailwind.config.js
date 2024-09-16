/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 폴더도 Tailwind에서 인식되게 설정
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      body: ['Noto Sans KR'],
    },
    fontSize: {
      xs: [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '21px',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      xl: ['20px', '30px'],
      '2xl': [
        '24px',
        {
          lineHeight: '36px',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      '3xl': [
        '30px', // 폰트 크기
        {
          lineHeight: '40px', // 줄 간격
          letterSpacing: '0', // 자간
          fontWeight: '700', // 폰트 두께
        },
      ],
      '4xl': [
        '36px', // 폰트 크기
        {
          lineHeight: '48px', // 줄 간격
          letterSpacing: '0', // 자간
          fontWeight: '700', // 폰트 두께
        },
      ],
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },

    backgroundColor: {
      primary: '#3578FF',
      amber: '#FFA201',
      navy: '#0C46B9',
      skyblue: '#7FCEF9',
      gray: '#808080',
      lightgray: '#D8D8D8',
      black: '#000000',
      white: '#ffffff',
    },

    colors: {
      primary: '#3578FF',
      white: '#ffffff',
      mono100: '#f1f1f1',
      mono200: '#bebebe',
      mono300: '#d6d7d9',
      mono400: '#808080',
      error: '#d01e1e',
      social: '#395997',
      black: '#000000',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
