import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00361a',
          container: '#1a4d2e',
          forest: '#2d6b42',
        },
        gold: {
          DEFAULT: '#d4af37',
          dark: '#b8860b',
          secondary: '#735c00',
        },
        henna: '#8b4513',
        tertiary: '#4f2100',
        ivory: '#faf8f2',
        cream: '#f5f0e8',
        surface: {
          DEFAULT: '#fbf9f3',
          bright: '#fbf9f3',
          low: '#f5f3ee',
          container: '#f0eee8',
          high: '#eae8e2',
          highest: '#e4e2dd',
          dim: '#dcdad4',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Noto Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00361a 0%, #1a4d2e 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37, #b8860b)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'organic': '0 4px 24px rgba(27, 28, 25, 0.08)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'green': '0 4px 20px rgba(26, 77, 46, 0.2)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
