import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import type { CasePreviewId } from "@/content/site"

interface BrowserFrameProps {
  /** Подпись в «адресной строке» */
  title: string
  /** Содержимое макета */
  children: ReactNode
  /** Дополнительные классы рамки */
  className?: string
}

/**
 * Рамка браузера для превью интерфейсов.
 */
export function BrowserFrame({
  title,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-3 py-2">
        <span className="size-1.5 rounded-full bg-white/20 sm:size-2" />
        <span className="size-1.5 rounded-full bg-white/12 sm:size-2" />
        <span className="size-1.5 rounded-full bg-white/12 sm:size-2" />
        <span className="ml-1 truncate text-[10px] tracking-wide text-white/35 sm:ml-2 sm:text-[11px]">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}

interface CasePreviewProps {
  /** Вариант макета */
  preview: CasePreviewId
  /** Подпись для скринридеров */
  label: string
}

/**
 * CSS-макет интерфейса кейса без растровых изображений.
 */
export function CasePreview({ preview, label }: CasePreviewProps) {
  return (
    <div
      className="aspect-[16/10] w-full overflow-hidden"
      role="img"
      aria-label={label}
    >
      {preview === "sberads" && <SberAdsMock />}
      {preview === "market" && <MarketMock />}
      {preview === "wb" && <PortalMock />}
      {preview === "saas" && <SaasMock />}
      {preview === "webapp" && <WebAppMock />}
      {preview === "shop" && <ShopMock />}
    </div>
  )
}

function SberAdsMock() {
  return (
    <div className="grid h-full grid-cols-[0.72fr_1.28fr] bg-[#0a0a0c]">
      <div className="flex flex-col gap-2 border-r border-white/6 p-3 sm:p-4">
        <div className="h-2 w-16 rounded-full bg-white/80" />
        <div className="mt-2 h-7 rounded-md bg-white/8" />
        <div className="h-7 rounded-md bg-white/[0.04]" />
        <div className="h-7 rounded-md bg-white/[0.04]" />
        <div className="mt-auto h-10 rounded-lg bg-white" />
      </div>
      <div className="flex flex-col gap-3 p-3 sm:p-4">
        <div className="flex gap-2">
          <div className="h-12 flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2">
            <div className="h-1.5 w-10 rounded-full bg-white/25" />
            <div className="mt-2 h-3 w-12 rounded-full bg-white/80" />
          </div>
          <div className="h-12 flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2">
            <div className="h-1.5 w-10 rounded-full bg-white/25" />
            <div className="mt-2 h-3 w-8 rounded-full bg-white/80" />
          </div>
        </div>
        <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.02] p-2">
          <div className="mb-2 h-1.5 w-20 rounded-full bg-white/20" />
          <div className="mb-2 flex flex-col gap-1.5">
            <div className="h-6 rounded bg-white/[0.05]" />
            <div className="h-6 rounded bg-white/[0.04]" />
            <div className="h-6 rounded bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketMock() {
  return (
    <div className="flex h-full flex-col bg-[#0b0d10]">
      <div className="flex items-center justify-between border-b border-white/6 px-4 py-2.5">
        <div className="h-2 w-24 rounded-full bg-white/70" />
        <div className="h-6 w-20 rounded-md bg-white" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-px bg-white/6">
        {["Кампании", "Статус", "Эффект"].map((col) => (
          <div key={col} className="bg-[#0b0d10] px-3 py-2">
            <p className="text-[9px] tracking-wide text-white/35 uppercase">
              {col}
            </p>
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-[#0b0d10] px-3 py-2.5">
            <div
              className="h-2 rounded-full bg-white/15"
              style={{ width: `${40 + (index % 3) * 18}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function PortalMock() {
  return (
    <div className="grid h-full grid-cols-[1fr_1.4fr] bg-[#0c0c0e]">
      <div className="border-r border-white/6 p-4">
        <div className="h-8 w-8 rounded-full bg-white/80" />
        <div className="mt-4 flex flex-col gap-2">
          <div className="h-2 w-20 rounded-full bg-white/50" />
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <div className="h-2 w-24 rounded-full bg-white/20" />
          <div className="h-2 w-14 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="grid grid-rows-2 gap-3 p-3 sm:p-4">
        <div className="rounded-lg bg-white/[0.04] p-3">
          <div className="h-2 w-28 rounded-full bg-white/40" />
          <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
          <div className="mt-1.5 h-2 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/[0.04]" />
          <div className="rounded-lg bg-white/[0.07]" />
        </div>
      </div>
    </div>
  )
}

function WebAppMock() {
  return (
    <div className="flex h-full justify-center bg-[#0e1621] p-3">
      <div className="flex h-full w-[58%] max-w-[14rem] flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#17212b]">
        <div className="flex items-center justify-between px-3 py-2.5">
          <div className="h-2 w-16 rounded-full bg-white/70" />
          <div className="size-5 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-1 flex-col gap-2 px-3 pb-3">
          <div className="h-16 rounded-xl bg-white/8" />
          <div className="h-8 rounded-lg bg-white/6" />
          <div className="h-8 rounded-lg bg-white/6" />
          <div className="mt-auto h-9 rounded-lg bg-[#3390ec]" />
        </div>
      </div>
    </div>
  )
}

function ShopMock() {
  return (
    <div className="flex h-full flex-col bg-[#0c0c0e]">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="h-2 w-24 rounded-full bg-white/70" />
        <div className="h-6 w-14 rounded-md bg-white" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2 px-3 pb-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white/[0.04]"
          >
            <div className="h-1/2 bg-white/10" />
            <div className="flex flex-col gap-1.5 p-2">
              <div className="h-1.5 w-10 rounded-full bg-white/50" />
              <div className="h-1.5 w-8 rounded-full bg-white/80" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SaasMock() {
  return (
    <div className="flex h-full bg-[#09090b]">
      <div className="w-1/4 border-r border-white/8 p-3">
        <div className="h-2 w-12 rounded-full bg-white/70" />
        <div className="mt-4 flex flex-col gap-2">
          <div className="h-5 rounded bg-white/10" />
          <div className="h-5 rounded bg-white/[0.04]" />
          <div className="h-5 rounded bg-white/[0.04]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg border border-white/8 bg-white/[0.03]" />
          <div className="h-14 rounded-lg border border-white/8 bg-white/[0.03]" />
          <div className="h-14 rounded-lg border border-white/8 bg-white/[0.03]" />
        </div>
        <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.02]" />
      </div>
    </div>
  )
}
