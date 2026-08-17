import { renderToString } from "react-dom/server"
import { StrictMode } from "react"

import { AppTree } from "@/app-tree.tsx"

/**
 * Рендерит главную страницу в HTML для статической сборки.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <AppTree />
    </StrictMode>
  )
}
