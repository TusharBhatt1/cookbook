"use client";
import RecipeSearch from "./recipe-search";
import RecipeList from "./recipe-list";
import { useState } from "react";

export default function RecipesContainer() {
  const [query, setQuery] = useState("");
  return (
    <>
      <RecipeSearch query={query} setQuery={setQuery} />
      <RecipeList query={query} />
    </>
  );
}
