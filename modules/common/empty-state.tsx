export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-neutral-700 bg-neutral-800/60 px-6 py-14 text-center">
      <p className="text-neutral-400">{text}</p>
    </div>
  );
}
