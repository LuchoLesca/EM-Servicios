// @ts-check
// https://astro.build/config
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
    partytown({
      config: {
        // Add the "dataLayer.push" as a forwarding-event.
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
