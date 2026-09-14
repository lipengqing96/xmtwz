/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        deep: '#050814',
        'deep-card': '#0d1321',
        'deep-border': '#1e2a42',
        indigo: { 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5' },
        violet: { 400: '#a78bfa', 500: '#8b5cf6' },
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
