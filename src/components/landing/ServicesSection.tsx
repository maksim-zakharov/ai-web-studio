import { services } from "@/content/site"

/**
 * Карточки услуг без публичного прайса.
 */
export function ServicesSection() {
  return (
    <section id="services" className="section-anchor section-y">
      <div className="page-container">
        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Услуги
        </p>
        <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
          Что можно сделать
        </h2>

        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
          {services.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/8 bg-card/60 p-6 transition-colors hover:border-white/16 sm:p-8"
            >
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
