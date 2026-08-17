import {
  BotIcon,
  PanelsTopLeftIcon,
  StoreIcon,
  WorkflowIcon,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ServiceItem {
  /** Заголовок решения */
  title: string
  /** Бизнес-результат */
  description: string
  /** Иконка */
  icon: typeof StoreIcon
}

const services: ServiceItem[] = [
  {
    title: "Сайты, которые продают",
    description:
      "Лендинги и маркетинговые сайты под оффер: понятный сценарий, заявки, аналитика и связка с CRM.",
    icon: StoreIcon,
  },
  {
    title: "Кабинеты и сервисы",
    description:
      "Личные кабинеты, админки и внутренние инструменты — чтобы команда и клиенты работали в одном месте.",
    icon: PanelsTopLeftIcon,
  },
  {
    title: "Автоматизация процессов",
    description:
      "Связываем оплату, CRM, Telegram, таблицы и внешние сервисы в один рабочий контур без ручной рутины.",
    icon: WorkflowIcon,
  },
  {
    title: "AI внутри продукта",
    description:
      "Ассистенты, разбор заявок, поиск по базе знаний и сценарии, которые экономят время сотрудников.",
    icon: BotIcon,
  },
]

/**
 * Секция решений, которые студия продаёт бизнесу.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Решения
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Что получает бизнес
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Берём задачу целиком и отдаём готовый результат: от формулировки
            цели до запуска. Технологии подбираем под продукт, а не наоборот.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                className="border-border/80 bg-card/80 transition-colors hover:bg-card"
              >
                <CardHeader className="gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
