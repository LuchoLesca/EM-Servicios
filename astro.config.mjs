// @ts-check
// https://astro.build/config
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
