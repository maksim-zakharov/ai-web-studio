import {
  LayoutTemplateIcon,
  PanelsTopLeftIcon,
  ServerCogIcon,
  SmartphoneIcon,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ServiceItem {
  /** Заголовок услуги */
  title: string
  /** Краткое описание */
  description: string
  /** Иконка */
  icon: typeof LayoutTemplateIcon
}

const services: ServiceItem[] = [
  {
    title: "Лендинги и маркетинговые сайты",
    description:
      "Быстрый запуск оффера: структура, дизайн, анимации и интеграция с аналитикой и CRM.",
    icon: LayoutTemplateIcon,
  },
  {
    title: "Веб-сервисы и кабинеты",
    description:
      "Личные кабинеты, админки и внутренние инструменты с ролями, API и понятным UX.",
    icon: PanelsTopLeftIcon,
  },
  {
    title: "Backend и интеграции",
    description:
      "API, платежи, Telegram, биржи, CRM и внешние сервисы — связываем в один продукт.",
    icon: ServerCogIcon,
  },
  {
    title: "Адаптив и поддержка",
    description:
      "Корректная работа на мобильных, доработки после запуска и сопровождение релиза.",
    icon: SmartphoneIcon,
  },
]

/**
 * Секция услуг студии.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Услуги
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Что можно заказать
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Берём задачу целиком: от постановки до продакшена. Ниже — базовые
            направления, детали уточним на созвоне.
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
