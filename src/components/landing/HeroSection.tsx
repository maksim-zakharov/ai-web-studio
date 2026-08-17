import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Hero-секция: бренд, оффер и визуальный якорь на весь первый экран.
 */
export function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <div
        aria-hidden
        className="animate-mesh absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_20%,oklch(0.88_0.07_175)_0%,transparent_45%),radial-gradient(ellipse_at_80%_10%,oklch(0.9_0.08_85)_0%,transparent_40%),radial-gradient(ellipse_at_70%_80%,oklch(0.9_0.04_200)_0%,transparent_50%),linear-gradient(165deg,oklch(0.97_0.015_95),oklch(0.94_0.02_100))] bg-[length:140%_140%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,oklch(0.35_0.04_165/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.35_0.04_165/0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] [background-size:48px_48px] opacity-[0.35]"
      />

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-end gap-10 px-4 pt-28 pb-16 md:justify-center md:gap-14 md:px-6 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <p className="animate-fade-up font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            AI Web Studio
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-2xl font-heading text-2xl font-medium text-balance text-foreground/90 sm:text-3xl md:text-4xl">
            Веб-продукты под ключ — от идеи до запуска
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Делаем сайты, сервисы и личные кабинеты, которые закрывают задачу
            бизнеса: понятный UX, чистая архитектура и сопровождение после
            релиза.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                Обсудить задачу
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">Что делаем</a>
            </Button>
          </div>
        </div>

        <div
          aria-hidden
          className="animate-float pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[42%] md:top-1/2 md:right-0 md:left-auto md:h-[70%] md:w-[48%] md:-translate-y-1/2"
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
    <div className="relative mx-auto h-full w-full max-w-xl md:max-w-none">
      <div className="absolute inset-[8%] rounded-[1.5rem] border border-foreground/10 bg-card/70 shadow-[0_40px_80px_-40px_oklch(0.3_0.05_165/0.45)] backdrop-blur-sm md:inset-[10%_8%_10%_0]">
        <div className="flex h-10 items-center gap-2 border-b border-border px-4">
          <span className="size-2.5 rounded-full bg-primary/40" />
          <span className="size-2.5 rounded-full bg-accent-foreground/20" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 h-2 w-28 rounded-full bg-muted" />
        </div>
        <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.9fr_1.4fr] gap-3 p-4">
          <div className="flex flex-col gap-2">
            <div className="h-8 rounded-lg bg-primary/15" />
            <div className="h-8 rounded-lg bg-muted" />
            <div className="h-8 rounded-lg bg-muted" />
            <div className="mt-auto h-20 rounded-xl bg-[linear-gradient(145deg,oklch(0.7_0.08_175),oklch(0.85_0.08_85))]" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-24 rounded-xl border border-border bg-background/80" />
            <div className="grid flex-1 grid-cols-2 gap-3">
              <div className="rounded-xl bg-muted" />
              <div className="rounded-xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
