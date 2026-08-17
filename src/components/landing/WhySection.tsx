import { Badge } from "@/components/ui/badge"

const points = [
  {
    title: "Под ключ, а не «только вёрстка»",
    text: "Берём ответственность за результат: от постановки до деплоя и передачи.",
  },
  {
    title: "Стек под задачу",
    text: "React, TypeScript, NestJS и интеграции — выбираем то, что реально нужно продукту.",
  },
  {
    title: "Коммуникация без воды",
    text: "Короткие статусы, демо по спринтам и понятные решения, когда есть развилки.",
  },
  {
    title: "Готовность к росту",
    text: "Закладываем архитектуру так, чтобы потом можно было добавлять модули без переписывания с нуля.",
  },
]

/**
 * Секция с аргументами, почему стоит работать со студией.
 */
export function WhySection() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.1fr] md:px-6 lg:gap-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Подход
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Делаем продукт, который можно запускать и развивать
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Фокус не на красивых слайдах, а на рабочем релизе: сроки, качество и
            понятная зона ответственности.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">NestJS</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="secondary">Интеграции</Badge>
          </div>
        </div>

        <ul className="flex flex-col gap-6">
          {points.map((point) => (
            <li key={point.title} className="border-l-2 border-primary/40 pl-5">
              <h3 className="font-heading text-lg font-semibold">
                {point.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
