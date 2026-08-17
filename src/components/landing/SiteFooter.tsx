import { githubUrl, telegramUrl } from "@/lib/social"

/**
 * Подвал сайта.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8">
      <div className="page-container flex flex-col gap-8 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-heading text-lg font-semibold">Максим Захаров</p>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-first web development
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Москва · удалённо
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Telegram
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground">© {year}</p>
      </div>
    </footer>
  )
}
