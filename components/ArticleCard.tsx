import Link from "next/link"
import type { Article } from "@/lib/articles"
import { AudienceBadge } from "./AudienceBadge"

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {article.category}
        </span>
        <AudienceBadge audience={article.audience} />
      </div>
      <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-700">
        {article.title}
      </h3>
      <p className="text-sm text-slate-600 line-clamp-2">{article.summary}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
        <span>{article.owner}</span>
        <span>Reviewed {formatDate(article.lastReviewed)}</span>
      </div>
    </Link>
  )
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
