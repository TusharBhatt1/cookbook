"use client";

import useDebounce from "@/hooks/use-debounce";
import type { IRecipeSearch } from "@/lib/types";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RecipeSearch({ query, setQuery }: IRecipeSearch) {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(currentSearch);

  const router = useRouter();
  function handleSetQuery(value: string) {
    if (value === currentSearch && query === value) return;
    setQuery(value);
    if (value) {
      router.push(`?search=${value}`);
      return;
    }
    router.push("?");
  }

  useDebounce({ value: search, cb: handleSetQuery });

  return (
    <div className="relative flex">
      {/* Search Icon */}
      <Search
        className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500"
        aria-hidden
      />

      {/* Input */}
      <input
        id="search-recipe"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here..."
        aria-label="Search recipes"
        className="w-full rounded-xl border border-neutral-700 bg-neutral-800 py-3.5 pl-12 pr-12 text-white placeholder:text-neutral-500 transition focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
      />

      {/* Clear Button */}
      {search && (
        <button
          type="button"
          onClick={() => {
            setSearch("");
            handleSetQuery("");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
