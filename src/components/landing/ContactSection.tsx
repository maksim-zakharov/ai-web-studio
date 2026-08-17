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
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1fr] md:px-6 lg:gap-16">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Контакты
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Расскажите о задаче
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Коротко опишите, что нужно сделать. Вернёмся с вопросами и оценкой
            формата — без обязательств и длинных анкет.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Ответ обычно в течение 1 рабочего дня.</p>
            <p>
              Или напишите напрямую:{" "}
              <a
                href="mailto:hello@ai-web-studio.ru"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                hello@ai-web-studio.ru
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card/80 p-5 md:p-6"
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
                Пока это демо-форма без отправки на сервер. Подключим почту или
                Telegram, когда будет готов канал.
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
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact">Telegram или email</FieldLabel>
                <Input
                  id="contact"
                  name="contact"
                  placeholder="@username или you@mail.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Задача</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Что нужно сделать, сроки, ссылки на референсы"
                  rows={5}
                  required
                />
                <FieldDescription>
                  Чем конкретнее — тем точнее оценка.
                </FieldDescription>
              </Field>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
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
