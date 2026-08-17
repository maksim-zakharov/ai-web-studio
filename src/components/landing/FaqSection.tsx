import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Сколько длится типичный проект?",
    answer:
      "Лендинг — обычно 1–3 недели. Сервис или кабинет — от 4–8 недель в зависимости от объёма и интеграций. Точные сроки даём после брифа.",
  },
  {
    question: "Можно ли начать с MVP?",
    answer:
      "Да. Часто стартуем с минимального релиза, проверяем гипотезу и наращиваем функциональность по приоритетам.",
  },
  {
    question: "Вы работаете только с готовым ТЗ?",
    answer:
      "Нет. Можем помочь сформулировать требования, если есть цель и черновое понимание задачи.",
  },
  {
    question: "Что нужно, чтобы начать?",
    answer:
      "Кратко опишите задачу, ссылки на референсы и желаемые сроки. Дальше созвонимся и предложим формат работы.",
  },
]

/**
 * Секция частых вопросов.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-y border-border/70 bg-secondary/30 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Если ответа нет — напишите в форме ниже, разберём ваш кейс точечно.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
