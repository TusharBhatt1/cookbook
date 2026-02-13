export default function RecipeListSkeleton() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <li
          key={i}
          className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800"
        >
          <div className="aspect-4/3 bg-neutral-700 animate-pulse" />
          <div className="space-y-2 p-4">
            <div className="h-5 w-3/4 rounded bg-neutral-700 animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-neutral-700/80 animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-neutral-700/80 animate-pulse" />
          </div>
        </li>
      ))}
    </ul>
  );
}
