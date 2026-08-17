import { useMemo, useState, type ReactNode } from "react"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  buildCalculatorBrief,
  contentOptions,
  deadlineOptions,
  designOptions,
  estimateProject,
  featureOptions,
  formatMoneyRange,
  formatWeeksRange,
  isCalculatorComplete,
  productOptions,
  volumeOptions,
  type CalculatorAnswers,
  type FeatureId,
} from "@/lib/estimate"
import { telegramHandle, telegramUrl } from "@/lib/social"
import { cn } from "@/lib/utils"

const initialAnswers: CalculatorAnswers = {
  features: [],
}

/**
 * Калькулятор ориентировочной стоимости по составу задачи.
 */
export function CalculatorSection() {
  const [answers, setAnswers] = useState<CalculatorAnswers>(initialAnswers)
  const estimate = useMemo(() => estimateProject(answers), [answers])
  const complete = isCalculatorComplete(answers)

  const sendToTelegram = () => {
    const brief = buildCalculatorBrief(answers, estimate)
    void navigator.clipboard?.writeText(brief).catch(() => undefined)
    window.open(telegramUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="calculate"
      className="section-anchor section-y border-y border-white/8 bg-white/[0.02]"
    >
      <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Оценка
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-balance">
            Прикиньте стоимость
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Цена зависит от того, что именно нужно, сколько экранов и какие
            функции. Отметьте пункты — будет вилка, не прайс-лист.
          </p>

          <form
            className="mt-10 flex flex-col gap-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <ChoiceGroup legend="Что нужно сделать?">
              {productOptions.map((option) => (
                <Choice
                  key={option.id}
                  name="product"
                  checked={answers.product === option.id}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      product: option.id,
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Дизайн">
              {designOptions.map((option) => (
                <Choice
                  key={option.id}
                  name="design"
                  checked={answers.design === option.id}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      design: option.id,
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Количество экранов">
              {volumeOptions.map((option) => (
                <Choice
                  key={option.id}
                  name="volume"
                  checked={answers.volume === option.id}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      volume: option.id,
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Что ещё нужно" hint="Можно несколько">
              {featureOptions.map((option) => (
                <Choice
                  key={option.id}
                  type="checkbox"
                  name="features"
                  checked={answers.features.includes(option.id)}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      features: toggleFeature(current.features, option.id),
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Что уже есть">
              {contentOptions.map((option) => (
                <Choice
                  key={option.id}
                  name="content"
                  checked={answers.content === option.id}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      content: option.id,
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Срок">
              {deadlineOptions.map((option) => (
                <Choice
                  key={option.id}
                  name="deadline"
                  checked={answers.deadline === option.id}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      deadline: option.id,
                    }))
                  }
                >
                  {option.label}
                </Choice>
              ))}
            </ChoiceGroup>
          </form>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-white/10 bg-background p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold">
              Ориентир
            </h3>
            <div aria-live="polite" className="mt-5">
              {complete && estimate ? (
                <>
                  <p className="font-heading text-[1.65rem] tracking-tight sm:text-3xl">
                    {formatMoneyRange(estimate.min, estimate.max)}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Срок:{" "}
                    {formatWeeksRange(estimate.weeksMin, estimate.weeksMax)}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Это вилка, не договор. Точную сумму скажу, когда разберём
                    задачу. Почасовки нет.
                  </p>
                  <Button
                    type="button"
                    className="mt-6 h-11 w-full px-4 sm:w-auto"
                    onClick={sendToTelegram}
                  >
                    Отправить расчёт в Telegram
                    <ArrowRightIcon data-icon="inline-end" />
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Текст скопируется. Вставьте его в чат {telegramHandle}.
                  </p>
                </>
              ) : (
                <p className="text-lg text-muted-foreground">
                  Отметьте пункты слева — посчитаю вилку
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

interface ChoiceGroupProps {
  /** Заголовок группы */
  legend: string
  /** Подсказка */
  hint?: string
  /** Варианты */
  children: ReactNode
}

/**
 * Группа вариантов ответа.
 */
function ChoiceGroup({ legend, hint, children }: ChoiceGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-heading text-base font-semibold sm:text-lg">
        {legend}
      </legend>
      {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  )
}

interface ChoiceProps {
  /** Имя поля */
  name: string
  /** Выбран ли вариант */
  checked: boolean
  /** Обработчик выбора */
  onChange: () => void
  /** Подпись */
  children: ReactNode
  /** Тип поля */
  type?: "radio" | "checkbox"
}

/**
 * Кнопка-вариант для калькулятора.
 */
function Choice({
  name,
  checked,
  onChange,
  children,
  type = "radio",
}: ChoiceProps) {
  return (
    <label
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors",
        checked
          ? "border-foreground bg-foreground text-background"
          : "border-white/12 text-foreground hover:border-white/30"
      )}
    >
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {children}
    </label>
  )
}

/**
 * Включает или выключает функцию в списке.
 */
function toggleFeature(features: FeatureId[], id: FeatureId): FeatureId[] {
  if (features.includes(id)) {
    return features.filter((feature) => feature !== id)
  }

  return [...features, id]
}
