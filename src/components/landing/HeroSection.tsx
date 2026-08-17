import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { telegramUrl } from "@/lib/social"

/**
 * Hero-секция: бренд, оффер и визуальный якорь на весь первый экран.
 */
export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="animate-mesh absolute inset-0 -z-20 bg-[length:140%_140%] bg-[radial-gradient(ellipse_at_16%_8%,#3390ec55_0%,transparent_46%),radial-gradient(ellipse_at_88%_12%,#2b527866_0%,transparent_42%),radial-gradient(ellipse_at_72%_92%,#2aabee33_0%,transparent_50%),linear-gradient(165deg,#0e1621,#0b121a)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden opacity-[0.2] sm:block [background-image:linear-gradient(to_right,#6ab3f326_1px,transparent_1px),linear-gradient(to_bottom,#6ab3f326_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_75%)]"
      />

      <div className="page-container grid min-h-[calc(100svh-3.5rem)] grid-cols-1 items-center gap-8 py-10 sm:min-h-[calc(100svh-4rem)] sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-heading text-[clamp(2rem,8vw,4.5rem)] font-semibold tracking-tight text-foreground">
            AI Web Studio
          </p>
          <p className="animate-fade-up mt-3 text-sm font-medium tracking-wide text-primary uppercase">
            AI solo-studio
          </p>
          <h1 className="animate-fade-up-delay mt-3 font-heading text-[clamp(1.375rem,4.5vw,2.25rem)] font-medium text-balance text-foreground/90">
            Один человек. Весь цикл. Готовый продукт.
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 md:text-lg">
            Я соло-разработчик: с AI закрываю постановку, дизайн, код,
            интеграции и запуск. Вы покупаете работающее решение для бизнеса —
            не часы и не команду на аутсорсе.
          </p>
          <div className="animate-fade-up-delay-2 mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="h-11 w-full px-4 sm:w-auto">
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                Обсудить решение
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full px-4 sm:w-auto"
            >
              <a href="#services">Какие задачи закрываю</a>
            </Button>
          </div>
        </div>

        <div
          aria-hidden
          className="relative mx-auto h-44 w-full max-w-md sm:h-56 md:h-72 lg:h-[min(28rem,62vh)] lg:max-w-none"
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

/**
 * Абстрактный макет продукта как визуальный якорь hero.
 */
function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-[#17212b]/90 shadow-[0_40px_90px_-36px_#3390ec66] backdrop-blur-sm sm:rounded-[1.5rem] lg:inset-[6%_0_6%_8%]">
        <div className="flex h-9 items-center gap-2 border-b border-border px-3 sm:h-10 sm:px-4">
          <span className="size-2.5 rounded-full bg-primary/40" />
          <span className="size-2.5 rounded-full bg-accent-foreground/20" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 h-2 w-20 rounded-full bg-muted sm:ml-3 sm:w-28" />
        </div>
        <div className="grid h-[calc(100%-2.25rem)] grid-cols-[0.85fr_1.15fr] gap-2 p-3 sm:h-[calc(100%-2.5rem)] sm:gap-3 sm:p-4">
          <div className="flex flex-col gap-2">
            <div className="h-6 rounded-lg bg-primary/15 sm:h-8" />
            <div className="h-6 rounded-lg bg-muted sm:h-8" />
            <div className="hidden h-8 rounded-lg bg-muted sm:block" />
            <div className="mt-auto h-14 rounded-xl bg-[linear-gradient(145deg,#3390ec,#2b5278)] sm:h-20" />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="h-16 rounded-xl border border-border bg-background/80 sm:h-24" />
            <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-xl bg-muted" />
              <div className="rounded-xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
