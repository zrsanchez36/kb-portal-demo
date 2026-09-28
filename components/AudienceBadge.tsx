import type { Audience } from "@/lib/articles"

export function AudienceBadge({ audience }: { audience: Audience }) {
  const isInternal = audience === "internal"
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        isInternal
          ? "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200"
          : "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${isInternal ? "bg-indigo-500" : "bg-teal-500"}`}
      />
      {isInternal ? "Internal" : "External"}
    </span>
  )
}
