// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "tailwindcss";`,
        },
      },
    },
    plugins: [tailwindcss()],
  },
});
