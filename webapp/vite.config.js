import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/static/",
  build: {
    manifest: true,
    outDir: resolve('./dist'), // Important later!
    assetsDir: "",
    rollupOptions: {
      input: {
        tailwind: resolve('./src/style.css'),
      },
    },
  }
})