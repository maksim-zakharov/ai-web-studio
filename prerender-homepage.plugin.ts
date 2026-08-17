import fs from "node:fs"
import path from "node:path"
import { createServer, type Plugin, type ResolvedConfig } from "vite"

/**
 * После клиентской сборки пререндерит главную страницу в dist/index.html.
 * В dev-режиме плагин не участвует — остаётся обычный SPA.
 */
export function prerenderHomepage(): Plugin {
  let config: ResolvedConfig

  return {
    name: "prerender-homepage",
    apply: "build",
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    async closeBundle() {
      if (config.build.ssr) {
        return
      }

      const indexPath = path.resolve(
        config.root,
        config.build.outDir,
        "index.html"
      )

      if (!fs.existsSync(indexPath)) {
        throw new Error(`Не найден ${indexPath} для пререндера`)
      }

      const server = await createServer({
        configFile: config.configFile,
        mode: config.mode,
        appType: "custom",
        server: {
          middlewareMode: true,
          hmr: false,
        },
      })

      try {
        const { render } = (await server.ssrLoadModule(
          "/src/entry-server.tsx"
        )) as { render: () => string }
        const appHtml = render()
        const template = fs.readFileSync(indexPath, "utf-8")
        const marker = "<!--app-html-->"

        if (!template.includes(marker)) {
          throw new Error("В index.html нет маркера <!--app-html-->")
        }

        const html = template.replace(marker, () => appHtml)
        fs.writeFileSync(indexPath, html)
        config.logger.info("Главная страница пререндерена в статический HTML")
      } finally {
        await server.close()
      }
    },
  }
}
