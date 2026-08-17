import { ArrowRightIcon } from "lucide-react"

import { BrowserFrame, CasePreview } from "@/components/landing/CasePreview"
import { Button } from "@/components/ui/button"

/**
 * Первый экран: оффер, CTA и превью интерфейсов.
 */
export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_42%)]"
      />

      <div className="page-container grid items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="animate-fade-up text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Москва · AI-first · под ключ
          </p>
          <h1 className="animate-fade-up-delay mt-4 font-heading text-[clamp(1.85rem,6.2vw,3.65rem)] leading-[1.08] font-semibold text-balance">
            Telegram WebApp, CRM, кабинеты и магазины
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Проектирую, разрабатываю и запускаю сам. Не лендинги и не «сайт
            компании» — рабочие продукты: мини-приложения в Telegram, CRM,
            кабинеты и интернет-магазины. AI-first подход позволяет работать
            быстрее студии — без агентской наценки.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="h-11 w-full px-5 sm:w-auto">
              <a href="#calculate">
                Рассчитать стоимость
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 w-full px-5 sm:w-auto"
            >
              <a href="#cases">Посмотреть работы</a>
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-up-delay relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden
        >
          <div className="lg:hidden">
            <BrowserFrame title="app.telegram.org">
              <CasePreview
                preview="webapp"
                label="Макет Telegram WebApp"
              />
            </BrowserFrame>
          </div>
          <div className="relative hidden h-[28rem] lg:block">
            <BrowserFrame
              title="product.app/dashboard"
              className="absolute top-0 right-0 w-[88%] rotate-[2deg]"
            >
              <CasePreview preview="saas" label="Макет личного кабинета" />
            </BrowserFrame>
            <BrowserFrame
              title="crm.app/deals"
              className="absolute bottom-8 left-0 w-[78%] -rotate-[3deg]"
            >
              <CasePreview preview="market" label="Макет CRM" />
            </BrowserFrame>
            <BrowserFrame
              title="app.telegram.org"
              className="absolute right-[6%] bottom-0 w-[72%] rotate-[1deg]"
            >
              <CasePreview preview="webapp" label="Макет Telegram WebApp" />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
