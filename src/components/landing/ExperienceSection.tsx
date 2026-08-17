import { Button } from "@/components/ui/button"
import { linkedInUrl } from "@/lib/social"

interface CaseHighlight {
  /** Компания или контекст */
  company: string
  /** Тип решения */
  solution: string
  /** Бизнес-результат */
  result: string
}

const companies = [
  "Тинькофф",
  "Сбер",
  "Яндекс.Маркет",
  "Wildberries",
  "МТС",
]

const highlights: CaseHighlight[] = [
  {
    company: "Сбер · SberAds",
    solution: "Рекламный кабинет с нуля",
    result:
      "За 4 месяца запустили рабочий MVP: интерфейс, интеграции с шестью сервисами и кабинет, которым можно пользоваться в бою.",
  },
  {
    company: "Яндекс.Маркет",
    solution: "CRM для маркетологов",
    result:
      "Сократили время на рутину: одна функция экономила команде ~132 человеко-часа в месяц, первая загрузка стала в 4 раза быстрее.",
  },
  {
    company: "Wildberries",
    solution: "Корпоративный портал",
    result:
      "Система для 7 000+ сотрудников каждый день и 20 000 посещений: справки, вакансии, учёт рабочего времени и внутренние сервисы.",
  },
  {
    company: "РТ Лабс · МТС · Smart Valley",
    solution: "Продукты и внутренние системы",
    result:
      "Запускали сложные контуры с нуля: от сценариев для пользователей до интеграций и сопровождения релиза.",
  },
]

/**
 * Секция кейсов студии на основе опыта в крупных компаниях.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border/70 bg-secondary/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Кейсы
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
              Решения, которые уже работали в крупном бизнесе
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Основатель студии запускал цифровые продукты в командах Тинькофф,
              Сбера, Яндекса и Wildberries. Этот опыт — про результат для
              бизнеса, а не про стек.
            </p>

            <p className="mt-8 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Компании
            </p>
            <p className="mt-3 font-heading text-lg font-medium text-foreground/90 md:text-xl">
              {companies.join(" · ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  LinkedIn основателя
                </a>
              </Button>
            </div>
          </div>

          <ul className="flex flex-col gap-8">
            {highlights.map((item) => (
              <li
                key={item.company}
                className="border-l-2 border-primary/40 pl-5"
              >
                <p className="text-sm text-primary">{item.solution}</p>
                <h3 className="mt-1 font-heading text-xl font-semibold">
                  {item.company}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.result}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
