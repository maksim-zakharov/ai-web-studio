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

const companies = ["Тинькофф", "Сбер", "Яндекс.Маркет", "Wildberries", "МТС"]

const highlights: CaseHighlight[] = [
  {
    company: "Сбер · SberAds",
    solution: "Рекламный кабинет с нуля",
    result:
      "За 4 месяца запустил рабочий MVP: интерфейс, интеграции с шестью сервисами и кабинет, которым можно пользоваться в бою.",
  },
  {
    company: "Яндекс.Маркет",
    solution: "CRM для маркетологов",
    result:
      "Сократил время на рутину: одна функция экономила команде ~132 человеко-часа в месяц, первая загрузка стала в 4 раза быстрее.",
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
      "Запускал сложные контуры с нуля: от сценариев для пользователей до интеграций и сопровождения релиза.",
  },
]

/**
 * Секция кейсов студии на основе опыта в крупных компаниях.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-anchor section-y border-y border-border/70 bg-secondary/30"
    >
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Кейсы
            </p>
            <h2 className="mt-3 font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold text-balance">
              Решения, которые уже работали в крупном бизнесе
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Я запускал цифровые продукты в Тинькофф, Сбере, Яндексе и
              Wildberries. Этот опыт — про результат для бизнеса. Сейчас тот же
              подход, только соло: я плюс AI вместо большой команды.
            </p>

            <p className="mt-8 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Компании
            </p>
            <p className="mt-3 font-heading text-base font-medium text-foreground/90 sm:text-lg md:text-xl">
              {companies.join(" · ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <ul className="flex flex-col gap-6 sm:gap-8">
            {highlights.map((item) => (
              <li
                key={item.company}
                className="border-l-2 border-primary/40 pl-4 sm:pl-5"
              >
                <p className="text-sm text-primary">{item.solution}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold sm:text-xl">
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
