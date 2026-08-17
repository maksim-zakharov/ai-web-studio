const points = [
  {
    title: "Продаём результат, не часы",
    text: "Фиксируем, какой продукт должен появиться и зачем. Дальше студия отвечает за запуск, а не за отчёт по времени.",
  },
  {
    title: "Сначала бизнес-задача",
    text: "Стек и инструменты вторичны. Выбираем то, что быстрее и надёжнее закрывает цель — включая AI, где это реально экономит время.",
  },
  {
    title: "Одна ответственность",
    text: "Не разделяем «дизайн отдельно, код отдельно». Берём контур целиком: сценарий, продукт, запуск и передача.",
  },
  {
    title: "Можно развивать после релиза",
    text: "Закладываем решение так, чтобы добавлять модули и интеграции, когда бизнес вырастет, — без переписывания с нуля.",
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
            Студия, а не подрядчик «на часы»
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            AI ускоряет сборку и рутину. На выходе — готовое решение для
            продаж, операций или внутренней команды, а не набор экранов на
            выбранном языке.
          </p>
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
