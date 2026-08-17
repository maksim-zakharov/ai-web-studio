/**
 * Короткое честное bio без выдуманных должностей.
 */
export function AboutSection() {
  return (
    <section id="about" className="section-anchor section-y">
      <div className="page-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Профиль
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold">
            Обо мне
          </h2>
        </div>
        <div className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Я Максим Захаров, senior/lead frontend-разработчик. Около 10 лет
            занимаюсь коммерческой разработкой. Работал над продуктами в
            Тинькофф, Сбере, Яндекс.Маркете и Wildberries и руководил
            frontend-разработкой.
          </p>
          <p className="mt-5">
            Сейчас использую AI-first workflow, чтобы самостоятельно закрывать
            большую часть цикла создания веб-продукта — от структуры и
            интерфейса до production.
          </p>
        </div>
      </div>
    </section>
  )
}
