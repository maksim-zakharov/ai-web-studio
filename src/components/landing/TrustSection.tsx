import { trustItems } from "@/content/site"

/**
 * Короткий блок доверия под hero.
 */
export function TrustSection() {
  return (
    <section aria-label="Факты" className="border-y border-white/8">
      <div className="page-container">
        <ul className="grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {trustItems.map((item) => (
            <li
              key={item}
              className="px-0 py-5 text-sm leading-snug text-muted-foreground sm:px-5 sm:py-8 lg:px-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
