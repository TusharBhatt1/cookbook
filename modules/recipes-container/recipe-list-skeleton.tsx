export default function RecipeListSkeleton() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
      {Array.from({ length: 15 }).map((_, i) => (
        <li
          key={i}
          className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="h-16 w-16 shrink-0 rounded-lg bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
          </div>
        </li>
      ))}
    </ul>
  );
}
