"use client";

import { DEBOUNCE_THRESHOLD } from "@/constant";
import { IRecipeSearch } from "@/lib/types";
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
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search recipes..."
        aria-label="Search recipes"
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 pr-10 text-neutral-900 placeholder:text-neutral-400 shadow-sm transition-[box-shadow,border-color] duration-200 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-0 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-neutral-500 dark:focus:ring-neutral-700 dark:hover:border-neutral-600"
      />

      <Search className="absolute right-4 top-3" />
    </div>
  );
}
