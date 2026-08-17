interface ProcessStep {
  /** Номер шага */
  step: string
  /** Название этапа */
  title: string
  /** Описание этапа */
  description: string
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Бриф и оценка",
    description:
      "Разбираем цель, аудиторию и ограничения. Фиксируем объём, сроки и формат работы.",
  },
  {
    step: "02",
    title: "Дизайн и прототип",
    description:
      "Собираем структуру экранов и визуальный язык. Согласовываем ключевые сценарии до кода.",
  },
  {
    step: "03",
    title: "Разработка",
    description:
      "Делаем фронт, бэкенд и интеграции итерациями. Показываем промежуточные сборки.",
  },
  {
    step: "04",
    title: "Запуск и передача",
    description:
      "Деплой, доступы, документация и поддержка на старте — чтобы продукт жил без сюрпризов.",
  },
]

/**
 * Секция с этапами работы над проектом.
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-y border-border/70 bg-secondary/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Процесс
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Как обычно идёт проект
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Прозрачные этапы и понятные точки согласования — без «чёрного ящика»
            на месяцы.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((item) => (
            <li key={item.step} className="flex flex-col gap-3">
              <span className="font-heading text-sm font-semibold tracking-[0.2em] text-primary">
                {item.step}
              </span>
              <h3 className="font-heading text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
