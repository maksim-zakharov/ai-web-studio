import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { prices } from "@/content/site"
import { telegramUrl } from "@/lib/social"

/**
 * Блок фиксированных цен.
 */
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-anchor section-y border-y border-white/8 bg-white/[0.02]"
    >
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Цены
        </p>
        <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          Фиксированная стоимость
        </h2>

        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {prices.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/8 bg-background p-6 sm:p-8"
            >
              <h3 className="font-heading text-lg font-semibold sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-6 font-heading text-[1.65rem] tracking-tight sm:text-3xl">
                {item.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Точная стоимость определяется после короткого брифа. Почасовая
          разработка не используется.
        </p>

        <Button asChild className="mt-8 h-11 px-5">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
            Получить оценку проекта
            <ArrowRightIcon data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </section>
  )
}
