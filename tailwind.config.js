/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        prixClipFix: {
          '0%': { clipPath: 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)' },
          '25%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)' },
          '50%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)' },
          '75%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)' },
        },
        placeHolderShimmer: {
          '0%': {
            backgroundPosition: '-50px 0',
          },
          '100%': {
            backgroundPosition: '50px 0',
          }
        },
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        prixClipFix: 'prixClipFix 2s linear infinite',
        placeHolderShimmer: 'placeHolderShimmer 1.5s linear infinite forwards',
      },
      gridTemplateRows: {
        'custom-1': '1.3fr 1fr',
        'custom-2': '1fr 1.5fr 2fr 1fr',
      },
      backgroundColor: {
        'custom-purple': "#7C4EE4",
        'custom-white': "#FFFFFF",
        'custom-white-2': "#F4F4F4",
      },
      backgroundImage: {
         'custom-gradient': 'linear-gradient(100deg, rgba(232, 232, 232, 1) 20%, rgba(250, 250, 250, 1) 50%, rgba(232, 232, 232, 1) 60%)',
      },
      backgroundPosition: {
        'custom-pos': '1000px 1000px',
      },
      borderColor: {
        'custom-purple': "#7C4EE4",
      },
      textColor: {
        'custom-purple': "#7C4EE4",
        'custom-white': "#FFFFFF",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        12: '3rem',
      },
      height: {
        98: '26rem',
        100: '28rem',
        102: '30rem',
        104: '32rem',
      }
    },
  },
  plugins: [],
}

