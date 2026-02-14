"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AlertCircle className="h-12 w-12 text-red-300 mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-neutral-100 mb-2">
          Something went wrong
        </h1>
        <p className="text-neutral-400 mb-6">
          We couldn’t load this page. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 rounded-lg bg-red-200 text-neutral-900 font-medium hover:bg-red-300 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
