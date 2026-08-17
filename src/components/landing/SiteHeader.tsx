import { ArrowRightIcon, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/content/site"

/**
 * Липкая шапка с якорной навигацией и CTA.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/75 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="page-container flex h-14 items-center justify-between sm:h-16">
        <a
          href="#top"
          className="font-heading text-[0.95rem] font-semibold tracking-tight sm:text-base"
        >
          Максим Захаров
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-7"
          aria-label="Разделы страницы"
        >
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
          <Button asChild className="h-10 px-4">
            <a href="#calculate">Рассчитать стоимость</a>
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
              <SheetTitle>Максим Захаров</SheetTitle>
            </SheetHeader>
            <nav
              className="mt-4 flex flex-col gap-1 px-4"
              aria-label="Мобильное меню"
            >
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
              <SheetClose asChild>
                <Button asChild className="mt-3 h-11">
                  <a href="#calculate">
                    Рассчитать стоимость
                    <ArrowRightIcon data-icon="inline-end" />
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
