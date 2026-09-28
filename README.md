# Northgate IT Knowledge Base

A sample knowledge base portal that shows internal runbooks and external self-service
articles in one place, switchable by tab. Everything on the site is fictional, written to
demonstrate how a knowledge base gets structured and maintained, not to represent any real
organization.

## Why this exists

A knowledge base is one of the clearest signals of how a service desk actually runs, and it's
usually invisible from the outside since real KBs sit behind a login. This is a small, working
example of the two kinds of KB content I write day to day, side by side:

- **Internal runbooks** written for technicians: escalation tiers, verification steps before a
  privileged reset, provisioning checklists. These need to be precise enough that two different
  people follow them the same way under pressure.
- **External help articles** written for end users: plain language, numbered steps, no jargon,
  and a clear escalation path when self-service isn't enough.
- **A consistent template throughout** — every article has an owner and a last-reviewed date,
  because a knowledge base that isn't maintained on a cadence quietly turns into a liability.

## Features

- Internal / External tab split, each with its own tone and article set
- Search and category filtering scoped to the active tab
- Article detail pages with owner, last-reviewed date, tags, and related articles
- Fully static — no backend, no data collection, nothing but the Next.js build itself

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Typed article data in `lib/articles.ts` — no CMS, no database |

## Project structure

```
app/
  page.tsx                Home: tabs, search, category filter
  articles/[slug]/page.tsx Article detail page
components/
  ArticleCard.tsx          Article summary card
  ArticleBody.tsx          Renders an article's content blocks
  AudienceBadge.tsx        Internal / External badge
lib/
  articles.ts              All article content and types
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content note

"Northgate IT" is a fictional department name. Every article, procedure, and system referenced
on this site was invented for this demo — no real company, tool, or ticketing system is
represented, and no real data of any kind is used.
