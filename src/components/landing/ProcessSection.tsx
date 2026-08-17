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
      "Смотрим на цель бизнеса, аудиторию и ограничения. Фиксируем, какой результат нужен и к какому сроку.",
  },
  {
    step: "02",
    title: "Проектируем решение",
    description:
      "Собираем сценарии, экраны и логику продукта. Согласовываем, как это будет работать для людей, а не «как напишем код».",
  },
  {
    step: "03",
    title: "Собираем и запускаем",
    description:
      "Делаем продукт итерациями, показываем промежуточные версии и выводим в прод, когда решение готово к работе.",
  },
  {
    step: "04",
    title: "Передаём и сопровождаем",
    description:
      "Доступы, инструкции и поддержка на старте — чтобы команда могла пользоваться системой без нас в каждом шаге.",
  },
]

/**
 * Секция с этапами работы над решением.
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
            Как студия ведёт проект
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Прозрачные этапы и понятные точки согласования. Вы покупаете готовое
            решение, а не процесс «набросаем часы».
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
