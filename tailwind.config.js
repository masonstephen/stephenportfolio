/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
        bio: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#001A4D',
          gold: '#F6BE00',
          'gold-hover': '#E0A800',
          'gold-active': '#CC9500',
          blue: '#0000EE',
          'blue-hover': '#0000CC',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
          tertiary: '#999999',
          nav: '#535659',
        },
        border: {
          DEFAULT: '#DBDBDB',
          subtle: '#EFEFEF',
          input: '#ECECEC',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          alt: 'rgb(var(--surface-alt) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
          card: 'rgb(var(--surface-card) / <alpha-value>)',
          border: 'rgb(var(--surface-border) / <alpha-value>)',
        },
        error: '#FF0000',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        18: '4.5rem',
        19: '4.75rem',
        76: '19rem',
        80: '20rem',
      },
      fontSize: {
        display: ['48px', { lineHeight: '48px', letterSpacing: '-0.5px', fontWeight: '100' }],
        h2: ['38px', { lineHeight: '38px', letterSpacing: '-0.3px', fontWeight: '100' }],
        h3: ['26px', { lineHeight: '28.6px', fontWeight: '400' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['11px', { lineHeight: '16px', fontWeight: '400' }],
      },
      boxShadow: {
        raised: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        elevated: '0px 4px 16px rgba(0, 0, 0, 0.12)',
        prominent: '0px 8px 24px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
