import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2B4B',
          light: '#243660',
          dark: '#131F37',
        },
        copper: {
          DEFAULT: '#C17A3A',
          light: '#D4923F',
          dark: '#A66830',
        },
        stone: {
          DEFAULT: '#F5F0EB',
          dark: '#E5E0DB',
        },
        warmgray: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
        },
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
        'card': '0 4px 12px rgba(27, 43, 75, 0.08)',
        'card-hover': '0 8px 24px rgba(27, 43, 75, 0.12)',
        'button': '0 2px 8px rgba(193, 122, 58, 0.2)',
        'button-hover': '0 4px 12px rgba(193, 122, 58, 0.3)',
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
