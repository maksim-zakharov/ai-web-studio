/** Тип продукта */
export type ProductId = "webapp" | "crm" | "cabinet" | "shop" | "other"

/** Сценарий по дизайну */
export type DesignId = "fromScratch" | "hasDesign" | "devOnly"

/** Объём экранов */
export type VolumeId = "s" | "m" | "l" | "xl"

/** Функция продукта */
export type FeatureId =
  | "auth"
  | "roles"
  | "admin"
  | "payments"
  | "bot"
  | "api"
  | "notifications"
  | "reports"
  | "files"
  | "other"

/** Состояние контента */
export type ContentId = "ready" | "help" | "create"

/** Ожидание по сроку */
export type DeadlineId = "relaxed" | "normal" | "rush"

/** Вариант ответа в калькуляторе */
export interface CalculatorOption<T extends string> {
  /** Значение */
  id: T
  /** Подпись */
  label: string
}

/** Ответы калькулятора */
export interface CalculatorAnswers {
  /** Что нужно разработать */
  product?: ProductId
  /** Дизайн */
  design?: DesignId
  /** Объём */
  volume?: VolumeId
  /** Функциональность */
  features: FeatureId[]
  /** Контент */
  content?: ContentId
  /** Срок */
  deadline?: DeadlineId
}

/** Предварительная оценка */
export interface ProjectEstimate {
  /** Нижняя граница, ₽ */
  min: number
  /** Верхняя граница, ₽ */
  max: number
  /** Срок от, недели */
  weeksMin: number
  /** Срок до, недели */
  weeksMax: number
}

export const productOptions: CalculatorOption<ProductId>[] = [
  { id: "webapp", label: "Telegram WebApp" },
  { id: "crm", label: "CRM" },
  { id: "cabinet", label: "Личный кабинет" },
  { id: "shop", label: "Интернет-магазин" },
  { id: "other", label: "Другое" },
]

export const designOptions: CalculatorOption<DesignId>[] = [
  { id: "fromScratch", label: "Нужен с нуля" },
  { id: "hasDesign", label: "Есть готовый дизайн" },
  { id: "devOnly", label: "Нужна только разработка" },
]

export const volumeOptions: CalculatorOption<VolumeId>[] = [
  { id: "s", label: "до 6" },
  { id: "m", label: "7–12" },
  { id: "l", label: "13–20" },
  { id: "xl", label: "21+" },
]

export const featureOptions: CalculatorOption<FeatureId>[] = [
  { id: "auth", label: "Авторизация" },
  { id: "roles", label: "Роли и доступы" },
  { id: "admin", label: "Админка" },
  { id: "payments", label: "Платежи" },
  { id: "bot", label: "Telegram-бот" },
  { id: "api", label: "API и интеграции" },
  { id: "notifications", label: "Уведомления" },
  { id: "reports", label: "Дашборд и отчёты" },
  { id: "files", label: "Файлы" },
  { id: "other", label: "Другое" },
]

export const contentOptions: CalculatorOption<ContentId>[] = [
  { id: "ready", label: "Есть бриф и материалы" },
  { id: "help", label: "Нужна помощь со структурой" },
  { id: "create", label: "Нужно спроектировать с нуля" },
]

export const deadlineOptions: CalculatorOption<DeadlineId>[] = [
  { id: "relaxed", label: "Не срочно" },
  { id: "normal", label: "2–4 недели" },
  { id: "rush", label: "Нужно максимально быстро" },
]

const productBase: Record<ProductId, number> = {
  webapp: 320_000,
  crm: 420_000,
  cabinet: 380_000,
  shop: 400_000,
  other: 360_000,
}

const designFactor: Record<DesignId, number> = {
  fromScratch: 1,
  hasDesign: 0.84,
  devOnly: 0.74,
}

const volumeFactor: Record<VolumeId, number> = {
  s: 1,
  m: 1.18,
  l: 1.4,
  xl: 1.7,
}

const featureCost: Record<FeatureId, number> = {
  auth: 45_000,
  roles: 50_000,
  admin: 80_000,
  payments: 70_000,
  bot: 40_000,
  api: 55_000,
  notifications: 30_000,
  reports: 45_000,
  files: 35_000,
  other: 40_000,
}

const contentFactor: Record<ContentId, number> = {
  ready: 1,
  help: 1.1,
  create: 1.2,
}

const deadlineFactor: Record<DeadlineId, number> = {
  relaxed: 1,
  normal: 1.04,
  rush: 1.28,
}

const productWeeks: Record<ProductId, number> = {
  webapp: 3.5,
  crm: 5,
  cabinet: 4.5,
  shop: 5,
  other: 4,
}

const volumeWeeks: Record<VolumeId, number> = {
  s: 0,
  m: 1,
  l: 2,
  xl: 3.5,
}

/**
 * Проверяет, достаточно ли ответов для ориентира.
 */
export function isCalculatorComplete(answers: CalculatorAnswers): boolean {
  return Boolean(
    answers.product &&
      answers.design &&
      answers.volume &&
      answers.content &&
      answers.deadline
  )
}

/**
 * Считает ориентировочную стоимость и срок по составу задачи.
 */
export function estimateProject(
  answers: CalculatorAnswers
): ProjectEstimate | null {
  if (
    !answers.product ||
    !answers.design ||
    !answers.volume ||
    !answers.content ||
    !answers.deadline
  ) {
    return null
  }

  const featuresTotal = answers.features.reduce(
    (sum, feature) => sum + featureCost[feature],
    0
  )
  const midpoint =
    (productBase[answers.product] * volumeFactor[answers.volume] +
      featuresTotal) *
    designFactor[answers.design] *
    contentFactor[answers.content] *
    deadlineFactor[answers.deadline]

  let weeks =
    productWeeks[answers.product] +
    volumeWeeks[answers.volume] +
    answers.features.length * 0.25

  if (answers.deadline === "rush") {
    weeks *= 0.7
  }

  if (answers.deadline === "relaxed") {
    weeks *= 1.2
  }

  const weeksMin = Math.max(1, Math.floor(weeks * 0.8))
  const weeksMax = Math.max(weeksMin + 1, Math.ceil(weeks * 1.15))

  return {
    min: midpoint * 0.86,
    max: midpoint * 1.18,
    weeksMin,
    weeksMax,
  }
}

/**
 * Форматирует диапазон стоимости для интерфейса.
 */
export function formatMoneyRange(min: number, max: number): string {
  const low = roundTo(min, 10_000)
  const high = Math.max(low + 10_000, roundTo(max, 10_000))

  if (high >= 1_000_000) {
    return `${formatMillions(low)}–${formatMillions(high)} млн ₽`
  }

  return `${low / 1000}–${high / 1000} тыс. ₽`
}

/**
 * Форматирует диапазон срока.
 */
export function formatWeeksRange(min: number, max: number): string {
  if (min === max) {
    return `${min} ${weeksLabel(min)}`
  }

  return `${min}–${max} ${weeksLabel(max)}`
}

/**
 * Собирает текст заявки для Telegram по ответам калькулятора.
 */
export function buildCalculatorBrief(
  answers: CalculatorAnswers,
  estimate: ProjectEstimate | null
): string {
  const lines = [
    "Расчёт проекта",
    `Тип: ${labelOf(productOptions, answers.product)}`,
    `Дизайн: ${labelOf(designOptions, answers.design)}`,
    `Объём: ${labelOf(volumeOptions, answers.volume)} экранов`,
    `Функции: ${
      answers.features.length
        ? answers.features
            .map((id) => labelOf(featureOptions, id))
            .join(", ")
        : "не выбраны"
    }`,
    `Бриф: ${labelOf(contentOptions, answers.content)}`,
    `Срок: ${labelOf(deadlineOptions, answers.deadline)}`,
  ]

  if (estimate) {
    lines.push(
      `Ориентир: ${formatMoneyRange(estimate.min, estimate.max)}, ${formatWeeksRange(estimate.weeksMin, estimate.weeksMax)}`
    )
  }

  return lines.join("\n")
}

function labelOf<T extends string>(
  options: CalculatorOption<T>[],
  id: T | undefined
): string {
  if (!id) {
    return "не указано"
  }

  return options.find((option) => option.id === id)?.label ?? id
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step
}

function formatMillions(value: number): string {
  return (value / 1_000_000).toFixed(1).replace(".", ",")
}

function weeksLabel(count: number): string {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return "неделя"
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "недели"
  }

  return "недель"
}
