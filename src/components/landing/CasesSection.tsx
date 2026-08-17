import { ArrowUpRightIcon } from "lucide-react"

import { BrowserFrame, CasePreview } from "@/components/landing/CasePreview"
import { Button } from "@/components/ui/button"
import { conceptCases, productCases, type CaseItem } from "@/content/site"

/**
 * Реальные продукты и демонстрационные концепты.
 */
export function CasesSection() {
  return (
    <section
      id="cases"
      className="section-anchor section-y border-y border-white/8"
    >
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Кейсы
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          Продукты, которые уже работали в бизнесе
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Эти системы я запускал внутри Тинькофф, Сбера, Яндекс.Маркета и
          Wildberries — не как внешнее агентство. Публичных демо нет: это
          внутренние продукты компаний.
        </p>

        <ul className="mt-10 flex flex-col gap-8 lg:gap-12">
          {productCases.map((item) => (
            <li key={item.id}>
              <CaseCard item={item} featured />
            </li>
          ))}
        </ul>

        <h3 className="mt-20 font-heading text-[clamp(1.35rem,3vw,1.85rem)] font-semibold">
          Концепты
        </h3>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Демонстрация подхода к разным нишам. Это не клиентские проекты.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {conceptCases.map((item) => (
            <li key={item.id}>
              <CaseCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

interface CaseCardProps {
  /** Данные кейса */
  item: CaseItem
  /** Крупная карточка для реальных продуктов */
  featured?: boolean
}

/**
 * Карточка кейса. Ссылка «Открыть проект» только если есть публичный URL.
 */
function CaseCard({ item, featured = false }: CaseCardProps) {
  const isConcept = item.kind === "concept"

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/8 bg-card/40 transition-colors hover:border-white/16">
      <BrowserFrame
        title={item.title}
        className="rounded-none border-0 shadow-none"
      >
        <CasePreview
          preview={item.preview}
          label={`Превью интерфейса: ${item.title}`}
        />
      </BrowserFrame>

      <div className={featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}>
        {isConcept ? (
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Концепт — создан для демонстрации подхода
          </p>
        ) : (
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Продукт внутри компании
          </p>
        )}
        <h3 className="mt-2 font-heading text-xl font-semibold sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
          {item.description}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.work}
        </p>
        <p className="mt-4 text-xs text-muted-foreground/80">{item.stack}</p>
        {item.url ? (
          <Button asChild variant="outline" className="mt-5 h-11">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Открыть проект
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        ) : null}
      </div>
    </article>
  )
}
