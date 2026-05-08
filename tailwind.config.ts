import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          light: '#2D5A3D',
          dark: '#0F3D2E',
        },
        cream: '#FAF7F2',
        sage: '#F4F1EA',
        ink: '#1A1A1A',
        inkLight: '#4A4A4A',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
