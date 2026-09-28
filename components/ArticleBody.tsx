import type { Block } from "@/lib/articles"

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-[15px] leading-7 text-slate-700">
                {block.text}
              </p>
            )
          case "h2":
            return (
              <h2 key={i} className="mt-2 text-lg font-semibold text-slate-900">
                {block.text}
              </h2>
            )
          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-[15px] leading-7 text-slate-700">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i} className="flex flex-col gap-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-7 text-slate-700">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )
          case "note":
            return (
              <div
                key={i}
                className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
              >
                <span className="font-semibold">Note: </span>
                {block.text}
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
