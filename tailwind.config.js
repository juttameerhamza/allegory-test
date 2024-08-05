import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neutral-0': '#FFFFFF',
        'neutral-1': '#F7F7F8',
        'neutral-2': '#E9EAEC',
        'neutral-4': '#C8CAD0',
        'neutral-5': '#BABDC5',
        'neutral-6': '#9EA2AD',
        'neutral-8': '#717684',
        'neutral-12': '#1F2228',
        'neutral-13': '#14151A',
        'primary-7': '#2348ED',
        'primary-8': '#1B35DA',
        destructive: '#DF1C41'
      },
      fontFamily: {
        'instrument-sans': ['Instrument Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        1: '0px 1px 1px 0px #00000008, 0px 2px 2px 0px #00000008, 0px 5px 3px 0px #00000005, 0px 8px 3px 0px #00000000, 0px 13px 4px 0px #00000000',
        2: '0px 1px 2px 0px rgba(228, 229, 231, 0.24)'
      },
      backgroundImage: {
        'gradient-img':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),radial-gradient(79.22% 50.1% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(105.2% 58.99% at 50% 50%, rgba(239, 244, 255, 0.15) 0%, rgba(35, 72, 237, 0.15) 100%), var(--bg-image)'
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [tailwindcssAnimate]
};
