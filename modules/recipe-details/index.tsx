"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import type { RecipeDetails as RecipeDetailsType } from "@/lib/types";

export default function RecipeDetails({
  details,
}: {
  details: RecipeDetailsType | null;
}) {
  const router = useRouter();

  if (!details) {
    return (
      <main className="min-h-screen bg-neutral-50 px-4 py-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        <p className="mt-8 text-neutral-500">Recipe not found.</p>
      </main>
    );
  }

  const totalMins =
    (details.prepTimeMinutes ?? 0) + (details.cookTimeMinutes ?? 0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero image - full bleed, Zomato-style */}
      <div className="relative h-[280px] w-full overflow-hidden bg-neutral-200 sm:h-[320px]">
        {details.image ? (
          <Image
            src={details.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-sm font-medium text-neutral-800 shadow-md transition hover:bg-white"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      {/* Content card - overlaps hero slightly, Zomato-style card */}
      <div className="relative z-10 mx-4 -mt-8 max-w-2xl rounded-2xl border border-neutral-100 bg-white p-5 shadow-lg sm:mx-auto sm:p-6">
        <h1 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
          {details.name}
        </h1>

        {/* Meta strip - cuisine, difficulty, time, servings, rating */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          {details.cuisine ? (
            <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-medium text-red-700">
              {details.cuisine}
            </span>
          ) : null}
          {details.difficulty ? (
            <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-neutral-700">
              {details.difficulty}
            </span>
          ) : null}
          {totalMins > 0 ? (
            <span className="flex items-center gap-1 text-neutral-500">
              <Clock className="h-3.5 w-3.5" />
              {totalMins} min
            </span>
          ) : null}
          {details.servings != null ? (
            <span className="flex items-center gap-1 text-neutral-500">
              <Users className="h-3.5 w-3.5" />
              {details.servings} servings
            </span>
          ) : null}
          {details.rating != null ? (
            <span className="flex items-center gap-1 font-medium text-amber-600">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              {details.rating}
              {details.reviewCount != null && (
                <span className="font-normal text-neutral-400">
                  ({details.reviewCount})
                </span>
              )}
            </span>
          ) : null}
        </div>

        {/* Ingredients */}
        <section className="mt-6 border-t border-neutral-100 pt-5">
          <h2 className="text-base font-semibold text-neutral-900">
            Ingredients
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-700">
            {details.ingredients.map((item, i) => (
              <li key={`${i}-${item}`}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="mt-6 border-t border-neutral-100 pt-5">
          <h2 className="text-base font-semibold text-neutral-900">
            Instructions
          </h2>
          <ol className="mt-2 space-y-3 text-sm text-neutral-700">
            {details.instructions.map((step, i) => (
              <li key={`${i}-${step.slice(0, 20)}`} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-semibold text-red-700">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {details.tags?.length ? (
          <p className="mt-5 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
            {details.tags.join(" · ")}
          </p>
        ) : null}
      </div>
    </main>
  );
}
