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
        myPurple: "#db07d1",
        myPink: "#f2056f",
        myBlue: "#61dafb",
      },
      fontFamily: {
        nunito: 'var(--nunito)',
      },
    },
  },
  plugins: [],
}
export default config
