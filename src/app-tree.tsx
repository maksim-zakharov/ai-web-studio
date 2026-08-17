import App from "@/App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

/**
 * Общее дерево приложения для клиента и пререндера.
 */
export function AppTree() {
  return (
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  )
}
