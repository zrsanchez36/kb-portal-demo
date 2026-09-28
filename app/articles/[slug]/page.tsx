import Link from "next/link"
import { notFound } from "next/navigation"
import { articles, getArticle, getRelated } from "@/lib/articles"
import { AudienceBadge } from "@/components/AudienceBadge"
import { ArticleBody } from "@/components/ArticleBody"
import { formatDate } from "@/components/ArticleCard"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = getRelated(article)

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <div>
        <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700">
          ← Back to Knowledge Base
        </Link>
      </div>

      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-4 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2">
            <AudienceBadge audience={article.audience} />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {article.category}
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {article.title}
          </h1>
          <p className="text-sm leading-6 text-slate-600">{article.summary}</p>
          <dl className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
            <div className="flex gap-1.5">
              <dt className="font-medium text-slate-600">Owner:</dt>
              <dd>{article.owner}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-medium text-slate-600">Last reviewed:</dt>
              <dd>{formatDate(article.lastReviewed)}</dd>
            </div>
          </dl>
        </header>

        <ArticleBody blocks={article.body} />

        <div className="flex flex-wrap gap-2 pt-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <div className="border-t border-slate-100 pt-6">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">Related articles</h2>
          <ul className="flex flex-col gap-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/articles/${r.slug}`}
                  className="text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}
