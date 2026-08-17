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
    title: "Разбираем задачу",
    description:
      "Смотрю на цель бизнеса, аудиторию и ограничения. Фиксируем, какой результат нужен и к какому сроку.",
  },
  {
    step: "02",
    title: "Проектируем решение",
    description:
      "Собираю сценарии, экраны и логику продукта. Согласуем, как это будет работать для людей, а не «как напишем код».",
  },
  {
    step: "03",
    title: "Собираю и запускаю",
    description:
      "Делаю продукт итерациями, показываю промежуточные версии и вывожу в прод, когда решение готово к работе.",
  },
  {
    step: "04",
    title: "Передаём и сопровождаем",
    description:
      "Доступы, инструкции и поддержка на старте — чтобы команда могла пользоваться системой без меня в каждом шаге.",
  },
]

/**
 * Секция с этапами работы над решением.
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-anchor section-y border-y border-border/70 bg-secondary/40"
    >
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Процесс
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
            Как я веду проект
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Один контакт, короткие итерации, понятные точки согласования. Вы
            покупаете готовое решение, а не отчёт по часам.
          </p>
        </div>

        <ol className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-4 lg:gap-6">
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
