"use client";

import { useState } from "react";
import RecipeSearch from "./recipe-search";
import RecipeList from "./recipe-list";

export default function RecipesContainer() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero - Zomato-style header + search */}
      <header className="border-b border-neutral-800 bg-neutral-900 px-4 pb-6 pt-6 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Discover recipes
          </h1>
          <p className="mt-1 text-neutral-400">
            Search for cuisines, dishes, or ingredients
          </p>
          <div className="mt-5">
            <RecipeSearch query={query} setQuery={setQuery} />
          </div>
        </div>
      </header>

      {/* Results */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <RecipeList query={query} />
      </div>
    </div>
  );
}
