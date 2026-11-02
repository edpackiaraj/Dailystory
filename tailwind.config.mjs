/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFCF7',
          100: '#FFF8EC', // Primary Light Background
          200: '#F4ECD8', // Sepia Background
          300: '#EEDFC8', // Subtle Light Border
          400: '#DCC8AC',
          500: '#B89F7D',
          600: '#968370',
          700: '#6B5644', // Secondary Text
          800: '#4A3725',
          900: '#3B2A1A', // Primary Text (Deep Espresso Ink)
        },
        midnight: {
          50: '#F3EBDD', // Night Mode Primary Text
          100: '#C8BFAF', // Night Mode Secondary Text
          200: '#8C86A0', // Night Mode Muted Text
          700: '#383659', // Night Mode Border
          800: '#2E2D4D', // Night Mode Elevated Card
          900: '#25243E', // Night Mode Card Surface
          950: '#1B1A2E', // Primary Night Background
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Primary Brand Amber
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e', // Accent Storybook Teal
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Baloo 2"', 'Georgia', 'serif'],
        sans: ['"Noto Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Arima"', '"Noto Sans"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Noto Sans"', 'sans-serif'],
        chinese: ['"Noto Sans SC"', '"Noto Sans"', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Noto Sans"', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', '"Noto Sans"', 'sans-serif'],
        malayalam: ['"Noto Sans Malayalam"', '"Noto Sans"', 'sans-serif'],
        dyslexic: ['"OpenDyslexic"', 'Comic Sans MS', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch', // Optimal reading column width (65–75ch)
      },
    },
  },
  plugins: [],
};
