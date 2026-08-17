import path from "path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { prerenderHomepage } from "./prerender-homepage.plugin.ts"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

// Префикс только для деплоя на GitHub Pages (см. workflow env GITHUB_PAGES).
const isGithubPages = process.env.GITHUB_PAGES === "true"

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? "/ai-web-studio/" : "/",
  plugins: [react(), tailwindcss(), prerenderHomepage()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
})
