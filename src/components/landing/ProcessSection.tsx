import { processSteps } from "@/content/site"

/**
 * Этапы от брифа до production.
 */
export function ProcessSection() {
  return (
    <section id="process" className="section-anchor section-y">
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Процесс
        </p>
        <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          От идеи до production
        </h2>

        <ol className="mt-10 divide-y divide-white/8 border-y border-white/8">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-2 py-6 sm:grid-cols-[5rem_minmax(0,0.7fr)_minmax(0,1.3fr)] sm:items-baseline sm:gap-6 sm:py-8"
            >
              <span className="font-heading text-sm tracking-[0.18em] text-muted-foreground">
                {step.n}
              </span>
              <h3 className="font-heading text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
