import { agencyPoints, soloPoints } from "@/content/site"

/**
 * Сравнение агентства и соло-модели.
 */
export function WhySection() {
  return (
    <section
      id="why"
      className="section-anchor section-y border-y border-white/8"
    >
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Подход
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          Почему не агентство?
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          В агентстве задачу гоняют по цепочке. Здесь её делает один человек —
          я.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <article className="rounded-2xl border border-white/8 bg-transparent p-6 sm:p-8">
            <h3 className="text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Агентство
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {agencyPoints.map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/20 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-sm font-medium tracking-[0.18em] text-foreground uppercase">
              Я
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {soloPoints.map((item) => (
                <li key={item} className="text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
