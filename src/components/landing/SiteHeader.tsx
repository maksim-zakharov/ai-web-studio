import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { telegramUrl } from "@/lib/social"

const navItems = [
  { href: "#services", label: "Решения" },
  { href: "#process", label: "Процесс" },
  { href: "#experience", label: "Кейсы" },
  { href: "#why", label: "Подход" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
]

/**
 * Шапка сайта с навигацией по секциям лендинга.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="page-container flex h-14 items-center justify-between sm:h-16 lg:h-16">
        <a
          href="#top"
          className="font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl"
        >
          AI Web Studio
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              Обсудить решение
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-11 lg:hidden"
              aria-label="Открыть меню"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(100%,20rem)] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <SheetHeader>
              <SheetTitle>AI Web Studio</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center text-base text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <Button asChild className="mt-3 min-h-11">
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  Обсудить решение
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
