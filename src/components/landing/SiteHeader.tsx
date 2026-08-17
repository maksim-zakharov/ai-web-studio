import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#why", label: "Подход" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
]

/**
 * Шапка сайта с навигацией по секциям лендинга.
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          AI Web Studio
        </a>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden md:block">
          <Button asChild size="lg">
            <a href="#contact">Обсудить проект</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Открыть меню"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle>AI Web Studio</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#contact">Обсудить проект</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
