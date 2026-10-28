/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        bedtime: {
          bg: '#0a0d18',
          card: '#12172a',
          border: '#1e293b',
          text: '#cbd5e1',
          accent: '#93c5fd',
          glow: 'rgba(147, 197, 253, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Noto Sans"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Noto Sans"', 'sans-serif'],
        chinese: ['"Noto Sans SC"', '"Noto Sans"', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Noto Sans"', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', '"Noto Sans"', 'sans-serif'],
        malayalam: ['"Noto Sans Malayalam"', '"Noto Sans"', 'sans-serif'],
        dyslexic: ['"OpenDyslexic"', 'Comic Sans MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
