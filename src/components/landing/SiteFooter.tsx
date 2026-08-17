import { Separator } from "@/components/ui/separator"
import { linkedInUrl, telegramUrl } from "@/lib/social"

/**
 * Подвал лендинга.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-secondary/20">
      <div className="page-container flex flex-col gap-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-heading text-xl font-semibold">AI Web Studio</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              AI solo-studio: один разработчик, весь цикл, готовый продукт.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a
              href="#services"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Решения
            </a>
            <a
              href="#experience"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Кейсы
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Контакты
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Telegram
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground">
          © {year} AI Web Studio. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
