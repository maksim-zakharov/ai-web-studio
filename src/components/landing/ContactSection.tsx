import { useState } from "react"
import type { FormEvent } from "react"
import { ArrowRightIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { budgetOptions } from "@/content/site"
import { telegramHandle, telegramUrl } from "@/lib/social"

/**
 * Финальный CTA и форма заявки.
 */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      `Имя: ${String(data.get("name") ?? "")}`,
      `Контакт: ${String(data.get("contact") ?? "")}`,
      `Задача: ${String(data.get("task") ?? "")}`,
      `Бюджет: ${String(data.get("budget") ?? "")}`,
      `Комментарий: ${String(data.get("comment") ?? "")}`,
    ]
    const text = lines.join("\n")

    void navigator.clipboard?.writeText(text).catch(() => undefined)
    window.open(telegramUrl, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  return (
    <section
      id="contacts"
      className="section-anchor section-y pb-[max(4rem,env(safe-area-inset-bottom))]"
    >
      <div className="page-container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <h2 className="font-heading text-[clamp(1.85rem,5vw,3.25rem)] font-semibold text-balance">
            Есть задача? Давайте обсудим.
          </h2>
          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            Расскажите, что нужно сделать. Я оценю задачу, предложу подход и
            ориентировочную стоимость.
          </p>
          <Button asChild className="mt-8 h-11 px-5">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              Обсудить проект
              <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/8 bg-card/50 p-5 sm:p-7"
        >
          {submitted ? (
            <div className="flex min-h-80 flex-col items-start justify-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                <CheckIcon />
              </div>
              <h3 className="font-heading text-xl font-semibold">
                Текст заявки скопирован
              </h3>
              <p className="text-muted-foreground">
                Откройте Telegram {telegramHandle} и отправьте сообщение. Если
                чат не открылся — напишите напрямую.
              </p>
              <Button asChild className="mt-2 h-11">
                <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                  Открыть Telegram
                </a>
              </Button>
            </div>
          ) : (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Имя</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Как к вам обращаться"
                  className="min-h-11"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact">Telegram / телефон</FieldLabel>
                <Input
                  id="contact"
                  name="contact"
                  placeholder="@username или +7…"
                  className="min-h-11"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="task">Что нужно сделать?</FieldLabel>
                <Input
                  id="task"
                  name="task"
                  placeholder="Лендинг, сайт компании, MVP…"
                  className="min-h-11"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="budget">Примерный бюджет</FieldLabel>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
                >
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field>
                <FieldLabel htmlFor="comment">Комментарий</FieldLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Сроки, ссылки, ограничения"
                  rows={4}
                />
              </Field>
              <Button type="submit" className="h-11 w-full px-4 sm:w-auto">
                Отправить
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </FieldGroup>
          )}
        </form>
      </div>
    </section>
  )
}
