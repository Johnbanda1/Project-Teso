/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A0F35', // Deeper dragon-scale purple
          dark: '#0D0721',    // Darker shade
          light: '#2A1855'    // Lighter shade
        },
        secondary: {
          DEFAULT: '#C41E3A', // Dragon-fire red
          dark: '#A01830',    // Darker red
          light: '#E82E4A'    // Lighter red
        },
        accent: {
          DEFAULT: '#FFD700', // Dragon-gold
          dark: '#DAA520'     // Darker gold
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'flame': 'flame 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        flame: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      }
    },
  },
  plugins: [],
};