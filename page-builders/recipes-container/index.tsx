"use client";

import { Suspense, useState } from "react";
import RecipeSearch from "./recipe-search";
import RecipeList from "./recipe-list";

export default function RecipesContainer() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="border-b border-neutral-800 bg-neutral-900 px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Discover recipes
              </h1>
              <p className="mt-1 text-neutral-400">
                Search for cuisines, dishes, or ingredients
              </p>
            </div>
            <a
              href="https://tusharbhatt.vercel.app"
              className="font-light underline text-neutral-400 hover:text-neutral-500"
            >
              Crafted by Tushar Bhatt
            </a>
          </div>
          <div className="mt-5">
            {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
            <Suspense>
              <RecipeSearch query={query} setQuery={setQuery} />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <RecipeList query={query} />
      </div>
    </div>
  );
}
