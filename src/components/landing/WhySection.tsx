const points = [
  {
    title: "Результат, не часы",
    text: "Фиксируем, какой продукт должен появиться и зачем. Дальше я отвечаю за запуск, а не за отчёт по времени.",
  },
  {
    title: "Один человек — весь цикл",
    text: "Постановка, интерфейс, код, интеграции, деплой. Не нужно собирать команду и стыковать подрядчиков: я закрываю это сам с помощью AI.",
  },
  {
    title: "AI как рычаг, не как шоу",
    text: "Нейросети ускоряют рутину и сборку. На выходе — рабочий продукт под задачу бизнеса, а не демо «посмотрите, как я промпчу».",
  },
  {
    title: "Можно развивать после релиза",
    text: "Закладываю решение так, чтобы добавлять модули и интеграции, когда бизнес вырастет, — без переписывания с нуля.",
  },
]

/**
 * Секция с аргументами, почему это соло-студия, а не почасовой подряд.
 */
export function WhySection() {
  return (
    <section id="why" className="section-anchor section-y">
      <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Подход
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
            Solo-studio, а не подрядчик «на часы»
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Я один веду проект от идеи до запуска. AI даёт скорость команды,
            ответственность остаётся на мне: вы получаете готовое решение, а не
            слоты в календаре разработчика.
          </p>
        </div>

        <ul className="flex flex-col gap-6">
          {points.map((point) => (
            <li
              key={point.title}
              className="border-l-2 border-primary/40 pl-4 sm:pl-5"
            >
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
