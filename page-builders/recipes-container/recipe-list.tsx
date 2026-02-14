"use client";
import EmptyState from "../(common)/empty-state";
import ErrorState from "../(common)/error-state";
import RecipeListSkeleton from "./recipe-list-skeleton";
import useRecipeList from "@/page-builders/(hooks)/use-recipe-list";
import RecipeCard from "./recipe-card";
import SearchBanner from "./search-banner";
import { Loader2 } from "lucide-react";

export default function RecipeList({ query }: { query: string }) {
  const {
    recipes,
    hasQuery,
    hasResults,
    isError,
    showLoading,
    triggerRef,
    visibleCount,
  } = useRecipeList({ query });

  if (!hasQuery) {
    return <SearchBanner />;
  }

  if (showLoading) {
    return <RecipeListSkeleton />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (!hasResults) {
    return <EmptyState text="No recipes found. Try a different search." />;
  }

  return (
    <div className="max-h-[70vh]  overflow-auto">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {recipes.slice(0, visibleCount).map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
      <p
        className="text-center pt-7 text-neutral-600 flex justify-center items-center"
        ref={triggerRef}
      >
        {visibleCount === recipes.length ? (
          "Results end here."
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </p>
    </div>
  );
}
