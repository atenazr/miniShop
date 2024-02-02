/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
export default  <Partial<Config>>{
  content: ["./src/**/*.{vue,js,ts,scss}"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  theme: {
    extend: {
      colors: {
        'dark-gray': '#686868',
        'light-gray': '#919191',
        'secondary-gray':'#a8a8a8',
      }
    }
  },
  plugins: [],
}

