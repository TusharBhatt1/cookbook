export default function ErrorState({ text }: { text?: string }) {
  return (
    <div className="rounded-2xl border border-red-900/50 bg-red-950/20 px-6 py-14 text-center">
      <p className="text-red-300">
        {text ?? "Something went wrong. Please try again."}
      </p>
    </div>
  );
}
