/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          0: '#04040c',
          1: '#080812',
          2: '#0d0d1a',
          3: '#131322',
          4: '#181830',
        },
        accent: {
          cyan:   '#00e5ff',
          lime:   '#a3e635',
          violet: '#a78bfa',
          amber:  '#fbbf24',
          rose:   '#fb7185',
        },
      },
      fontSize: {
        clamp: 'clamp(40px, 5.5vw, 68px)',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '20px',
        xl: '28px',
      },
      animation: {
        blink:     'blink 1.6s ease-in-out infinite',
        'blink-cur':'blinkCur .8s step-end infinite',
        float:     'float 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: '1', boxShadow: '0 0 0 rgba(0,229,255,0)' },
          '50%':     { opacity: '0.25', boxShadow: '0 0 6px #00e5ff' },
        },
        blinkCur: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':     { transform: 'translateX(-50%) translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,1,.36,1)',
      },
    },
  },
  plugins: [],
}
