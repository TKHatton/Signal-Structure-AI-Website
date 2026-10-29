import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Night Signal palette (chosen 2026-10-29). Token names are kept from the
      // old navy/copper/stone palette so every page picks up the new colors
      // without touching each class name.
      colors: {
        navy: {
          DEFAULT: '#161A3F', // Night
          light: '#262C66',
          dark: '#0E1130',
        },
        copper: {
          DEFAULT: '#5C6B12', // Firefly Deep: readable accent on light backgrounds
          light: '#6E8016',
          dark: '#48540D',
        },
        stone: {
          DEFAULT: '#EEF0FA', // Mist
          dark: '#DFE2F2',
        },
        warmgray: {
          DEFAULT: '#5E6278',
          light: '#9A9DB3',
        },
        firefly: '#D8F07A', // the glow, used on dark backgrounds
        dusk: '#9BA2D6',
        status: {
          green: '#2D8A5E',
          red: '#C4423C',
          amber: '#D4920B',
        },
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
        '96': '24rem',    // 384px
        '120': '30rem',   // 480px
      },
      boxShadow: {
        'card': '0 4px 12px rgba(22, 26, 63, 0.08)',
        'card-hover': '0 8px 24px rgba(22, 26, 63, 0.12)',
        'button': '0 2px 8px rgba(92, 107, 18, 0.2)',
        'button-hover': '0 4px 12px rgba(92, 107, 18, 0.3)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '800px',
        'narrow': '680px',
      },
    },
  },
  plugins: [],
}

export default config
