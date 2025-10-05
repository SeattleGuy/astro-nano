import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import matomo from 'astro-matomo';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jcvieth.com",
  integrations: [
    mdx(), 
    sitemap(),
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: "https://bits.jcvieth.com/",
      setCookieDomain: "*.jcvieth.com",
      trackerUrl: "js/", // defaults to matomo.php
      srcUrl: "js/", // defaults to matomo.js
      siteId: 1,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
      viewTransition: {
        contentElement: "main"
      }
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});