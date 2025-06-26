import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";


import alpinejs from "@astrojs/alpinejs";


import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    optimize: true,
  }), alpinejs()],

  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "it"
    },
  },

  

  vite: {
    server: {
      hmr: true,
    },
  },

  renderers: [],

  build: {
    fallback: 'index.html', 
  },

  adapter: netlify(),
});