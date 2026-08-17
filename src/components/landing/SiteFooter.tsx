import { Separator } from "@/components/ui/separator"

/**
 * Подвал лендинга.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-secondary/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-heading text-xl font-semibold">AI Web Studio</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Заказная разработка веб-продуктов под ключ.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">
              Услуги
            </a>
            <a href="#process" className="hover:text-foreground">
              Процесс
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
            <a href="#contact" className="hover:text-foreground">
              Контакты
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
