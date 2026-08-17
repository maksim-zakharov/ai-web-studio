import { workflowSteps } from "@/content/site"

/**
 * Объяснение AI-first как производственного преимущества.
 */
export function WorkflowSection() {
  return (
    <section id="workflow" className="section-anchor section-y">
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Как работаю
        </p>
        <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          Почему AI-first?
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Нейросети не вместо опыта. Они снимают черновую работу, а решения и
          качество остаются за мной.
        </p>

        <ol className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="font-heading text-xs tracking-[0.2em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.aiRole}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl text-base text-foreground/90 sm:text-lg">
          На практике это короче сроки, меньше переписок и больше кругов правок
          за те же деньги.
        </p>
      </div>
    </section>
  )
}
