import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"

import "./index.css"
import { AppTree } from "@/app-tree.tsx"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Не найден корневой элемент #root")
}

const app = (
  <StrictMode>
    <AppTree />
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
