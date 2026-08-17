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
    <section id="services" className="section-anchor section-y">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Решения
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
            Что получает бизнес
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Беру задачу целиком и отдаю готовый результат: от формулировки цели
            до запуска. Стек подбираю под продукт — его не нужно выбирать
            заранее.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12">
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
                  <CardTitle className="text-lg sm:text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
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
