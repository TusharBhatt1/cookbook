export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 px-6 py-12 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50">
      <p className="text-neutral-600 dark:text-neutral-400">{text}</p>
    </div>
  );
}
