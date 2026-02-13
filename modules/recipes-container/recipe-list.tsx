"use client";
import EmptyState from "../common/empty-state";
import ErrorState from "../common/error-state";
import RecipeListSkeleton from "./recipe-list-skeleton";
import useRecipeList from "@/hooks/use-recipe-list";
import RecipeCard from "./recipe-card";

export default function RecipeList({ query }: { query: string }) {
  const { recipes, hasQuery, hasResults, isError, showLoading } = useRecipeList(
    { query },
  );

  if (!hasQuery) {
    return <EmptyState text="Enter a search term to find recipes." />;
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
    <ul
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[70vh] overflow-auto"
      role="list"
    >
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
