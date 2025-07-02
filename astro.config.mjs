import sitemap from "@astrojs/sitemap";
import relativeLinks from "astro-relative-links";
import tailwind from "@astrojs/tailwind";
// @ts-check
import { defineConfig } from "astro/config";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "./dist",
  base: "/",
  site: "https://www.oshimoto.net/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "js/[name].js",
          chunkFileNames: "js/[name].js",
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "src/styles/_mixins" as *;
            @use "src/styles/_variables" as *;
            @use "src/styles/_sai" as *;
          `,
        },
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [
    tailwind({
      config: "./tailwind.config.cjs",
      nesting: true,
    }),
    sitemap(),
    relativeLinks(),
  ],
});
