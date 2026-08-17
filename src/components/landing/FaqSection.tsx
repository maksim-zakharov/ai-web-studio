import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/content/site"

/**
 * Частые вопросы с ответами в DOM для индексации.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-anchor section-y border-y border-white/8"
    >
      <div className="page-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.6rem,4vw,2.5rem)] font-semibold">
            Вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="min-h-11 py-4 text-left text-base sm:text-lg">
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
