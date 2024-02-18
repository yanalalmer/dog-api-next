import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      desktopL: '1536px',
      // => @media(min-width: 1536px)
      desktop: '1280px',
      // => @media(min-width: 1280px)
      laptop: '1024px',
      // => @media(min-width: 1024px)
      tabletL: '768px',
      // => @media(min-width: 768px)
      tablet: '640px',
      // => @media(min-width: 640px)
      mobile: '390px',
      // => @media(min-width: 390px)
    },
    extend: {
      colors: {
        black: '#27282C',
        white: '#fff',
        pink: '#A60844',
        orange: '#FFBE41',
        purple: '#6960C6',
        green: '#65DE95',
        grey: '#EEEEEE',
        blue: '#2563EB',
      },
      maxHeight: {
        116: '29rem',
        /*464px*/
        125: '31.25rem',
        /*500px*/
        140: '35rem',
        /*560px*/
        150: '37.5rem',
        /*600px*/
        190: '47.5rem',
        /*760px*/
      },
      height: {
        116: '29rem',
        /*464px*/
        125: '31.25rem',
        /*500px*/
        140: '35rem',
        /*560px*/
        150: '37.5rem',
        /*600px*/
        200: '50rem',
        /*800px*/
        250: '62.5rem',
        /*800px*/
      },
      minHeight: {
        18: '4.5rem',
        /*72*/
        33: '8.125rem',
        /*132px*/
        62: '15.5rem',
        /*248px*/
        96: '24rem',
        /*384px*/
        150: '37.5rem',
        /*600px*/
      },
      margin: {
        '-100%': '-100%',
      },
    },
  },
  plugins: [],
};
export default config;
