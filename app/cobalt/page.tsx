"use client";

import { useCobaltApps } from "@/lib/cobalt-provider";

export default function CobaltPage() {
  const { data, isLoading, error, refetch, isFetching } = useCobaltApps();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Hello Refold</h1>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          onClick={() => refetch()}
          disabled={isLoading || isFetching}
        >
          {isFetching ? "Loading..." : "Fetch apps"}
        </button>
        <p className="text-sm text-neutral-600">Calls `/api/cobalt/apps`</p>
      </div>

      {error ? (
        <pre className="mt-4 whitespace-pre-wrap rounded-md bg-red-50 p-4 text-sm text-red-800">
          {(error as Error).message}
        </pre>
      ) : null}

      {data ? (
        <pre className="mt-4 overflow-auto rounded-md bg-neutral-50 p-4 text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : null}
    </main>
  );
}
