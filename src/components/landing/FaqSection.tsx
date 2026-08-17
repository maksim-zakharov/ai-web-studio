import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Это студия или вы работаете один?",
    answer:
      "Один. AI Web Studio — это я, соло-разработчик: с AI закрываю весь цикл сам. Вы общаетесь с одним человеком и получаете готовый продукт, а не часы и не «команду на бумаге».",
  },
  {
    question: "Зачем тогда AI в названии?",
    answer:
      "AI — это как я работаю: быстрее собираю постановку, код, интеграции и черновики интерфейса. В продукт нейросеть попадает только если реально экономит время вашей команде.",
  },
  {
    question: "Сколько длится типичный проект?",
    answer:
      "Сайт под запуск оффера — обычно 1–3 недели. Сервис или кабинет — от 4–8 недель в зависимости от объёма. Срок называю после разбора задачи.",
  },
  {
    question: "Нужно ли готовое ТЗ?",
    answer:
      "Нет. Достаточно цели и ограничений. Помогу сформулировать решение, если есть задача бизнеса, а не пачка технических требований.",
  },
]

/**
 * Секция частых вопросов.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-anchor section-y border-y border-border/70 bg-secondary/30"
    >
      <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
            Частые вопросы
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Если ответа нет — напишите мне, разберём ваш кейс точечно.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="min-h-11 py-3 text-left text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="text-base text-muted-foreground"
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
