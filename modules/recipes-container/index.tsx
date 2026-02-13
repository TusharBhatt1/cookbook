"use client";

import { useState } from "react";
import RecipeSearch from "./recipe-search";
import RecipeList from "./recipe-list";

export default function RecipesContainer() {
  const [query, setQuery] = useState("");

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
      <RecipeSearch query={query} setQuery={setQuery} />
      <RecipeList query={query} />
    </div>
  );
}
