import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import alias from "@rollup/plugin-alias";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const projectRootDir = resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    alias(),
  ],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
});
