"use client";

import useDebounce from "@/hooks/use-debounce";
import type { IRecipeSearch } from "@/lib/types";
import { Search } from "lucide-react";
import { useState } from "react";

export default function RecipeSearch({ query, setQuery }: IRecipeSearch) {
  const [search, setSearch] = useState(query);
  function handleSetQuery(value: string) {
    setQuery(value);
  }
  useDebounce({ value: search, cb: handleSetQuery });

  return (
    <div className="relative flex">
      <Search
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
        aria-hidden
      />
      <input
        id="search-recipe"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for pizza, pasta, Indian..."
        aria-label="Search recipes"
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 py-3.5 pl-12 pr-4 text-white placeholder:text-neutral-500 transition focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
      />
    </div>
  );
}
