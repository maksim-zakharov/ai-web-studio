import { useState } from "react"
import type { FormEvent } from "react"
import { CheckIcon, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { linkedInUrl, telegramHandle, telegramUrl } from "@/lib/social"

/**
 * Секция контакта с простой формой заявки (пока без бэкенда).
 */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="section-anchor section-y pb-[max(3.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="page-container grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Контакты
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
            Расскажите о задаче бизнеса
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Коротко опишите, какой результат нужен. Вернусь с вопросами и
            предложением по решению — без обязательств и технических анкет.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Ответ обычно в течение 1 рабочего дня.</p>
            <p>
              Telegram:{" "}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {telegramHandle}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                maksim-zakharov
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card/80 p-4 sm:p-5 md:p-6"
        >
          {submitted ? (
            <div className="flex min-h-64 flex-col items-start justify-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckIcon />
              </div>
              <h3 className="font-heading text-xl font-semibold">
                Заявка принята
              </h3>
              <p className="text-muted-foreground">
                Пока форма демо без отправки на сервер. Напишите напрямую в
                Telegram{" "}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {telegramHandle}
                </a>
                .
              </p>
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
                <FieldLabel htmlFor="contact">Telegram или email</FieldLabel>
                <Input
                  id="contact"
                  name="contact"
                  placeholder="@username или you@mail.com"
                  className="min-h-11"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Задача бизнеса</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Какой результат нужен, для кого, сроки"
                  rows={5}
                  required
                />
                <FieldDescription>
                  Чем яснее цель бизнеса — тем точнее предложу решение.
                </FieldDescription>
              </Field>
              <Button
                type="submit"
                size="lg"
                className="h-11 w-full px-4 sm:w-auto"
              >
                Отправить
                <SendIcon data-icon="inline-end" />
              </Button>
            </FieldGroup>
          )}
        </form>
      </div>
    </section>
  )
}
