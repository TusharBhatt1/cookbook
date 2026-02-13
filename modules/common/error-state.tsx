export default function ErrorState({ text }: { text?: string }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50/80 px-6 py-12 text-center shadow-sm dark:border-red-900/30 dark:bg-red-950/20">
      <p className="text-red-700 dark:text-red-300">
        {text ?? " Something went wrong. Please try again."}
      </p>
    </div>
  );
}
