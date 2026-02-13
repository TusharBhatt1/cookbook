"use client";

import { DEBOUNCE_THRESHOLD } from "@/constant";
import type { IRecipeSearch } from "@/lib/types";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function RecipeSearch({ query, setQuery }: IRecipeSearch) {
  const [search, setSearch] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setQuery(search), DEBOUNCE_THRESHOLD);
    return () => clearTimeout(timer);
  }, [search, setQuery]);

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
