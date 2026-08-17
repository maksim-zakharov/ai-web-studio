import { email, emailUrl, legalCity, legalFullName, ogrnip } from "@/lib/legal"
import { githubUrl, telegramUrl } from "@/lib/social"

/**
 * Подвал сайта с реквизитами ИП.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8">
      <div className="site-footer-inner page-container flex flex-col gap-8 py-10 sm:pt-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-heading text-lg font-semibold">Максим Захаров</p>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-first: WebApp, CRM, кабинеты, магазины
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {legalCity} · удалённо
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
              href={emailUrl}
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Почта
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
        <div className="flex flex-col gap-3 border-t border-white/6 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>© {year}</p>
          <address className="not-italic">
            ИП {legalFullName}
            <br />
            ОГРНИП {ogrnip} · {legalCity}
            <br />
            <a href={emailUrl} className="hover:text-foreground">
              {email}
            </a>
          </address>
        </div>
      </div>
    </footer>
  )
}
