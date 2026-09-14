/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A962',
          light: '#E8D5B0',
          dark: '#A68B4B',
        },
        dark: '#1A1A1A',
        cream: '#F7F4EF',
        muted: '#9A9A9A',
        emerald: {
          dark: '#2D5A4C',
        },
        border: '#E8E4DD',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        elevated: '0 8px 30px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}