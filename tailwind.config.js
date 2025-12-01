/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Yellowish/Mustard)
        cream: {
          DEFAULT: '#fef3c7',
          dark: '#fde68a',
          light: '#fffbeb',
        },
        golden: {
          DEFAULT: '#d97706',
          dark: '#b45309', // Hover
          light: '#f59e0b', // Brighter
        },
        
        // Semantic Colors (Dark Theme)
        'dark-bg': '#0a0a0a',
        'dark-surface': '#111111',
        'dark-elevated': '#1a1a1a',
        'dark-hover': '#262626',
        'dark-border': '#262626',
        
        // Text Colors
        'text-primary': '#f5f5f5',
        'text-secondary': '#d4d4d4',
        'text-tertiary': '#a3a3a3',
        'text-muted': '#737373',

        // YouTube Brand Colors
        youtube: {
          red: '#ff0000',
          dark: '#0f0f0f',
          light: '#f9f9f9',
          medium: '#606060',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
