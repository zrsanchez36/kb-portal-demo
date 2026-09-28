"use client"

import { useMemo, useState } from "react"
import { articles, type Audience } from "@/lib/articles"
import { ArticleCard } from "@/components/ArticleCard"

const TABS: { id: Audience; label: string; blurb: string }[] = [
  {
    id: "internal",
    label: "Internal",
    blurb: "Staff-only runbooks, escalation paths, and provisioning procedures.",
  },
  {
    id: "external",
    label: "External / Help Center",
    blurb: "Customer- and employee-facing self-service articles.",
  },
]

export default function Home() {
  const [tab, setTab] = useState<Audience>("internal")
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string>("all")

  const scoped = useMemo(() => articles.filter((a) => a.audience === tab), [tab])

  const categories = useMemo(
    () => Array.from(new Set(scoped.map((a) => a.category))).sort(),
    [scoped]
  )

  const filtered = useMemo(() => {
    return scoped.filter((a) => {
      const matchesCategory = category === "all" || a.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery =
        q.length === 0 ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [scoped, category, query])

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <span className="flex size-6 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold text-white">
            N
          </span>
          Northgate IT
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Knowledge Base
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          A sample knowledge base showing how the same portal can serve two very different
          readers: technicians who need a precise runbook, and end users who just want their
          problem solved. Every article here is fictional, written for demonstration.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex w-fit gap-1 rounded-lg bg-slate-100 p-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id)
                setCategory("all")
              }}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                tab === t.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-500">{TABS.find((t) => t.id === tab)?.blurb}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${tab === "internal" ? "internal runbooks" : "help articles"}...`}
          className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              category === "all"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                category === c
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 py-16 text-center text-sm text-slate-500">
          No articles match that search.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      <footer className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
        Northgate IT Knowledge Base is a fictional portfolio demo. No real organization, ticketing
        system, or user data is represented.
      </footer>
    </main>
  )
}
