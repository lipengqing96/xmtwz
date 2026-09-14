/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A962',
        'gold-light': '#E8D5B0',
        dark: '#1A1A1A',
        cream: '#F7F4EF',
        muted: '#9A9A9A',
        'text-muted': '#6B6B6B',
        emeraldDark: '#2D5A4C',
        border: '#E8E4DD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
