import getRecipes from "@/server-actions/queries/get-recipes";
import type { IRecipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "@/constant";
import { useState } from "react";
import useVirtualizer from "./use-virtualizer";

export default function useRecipeList({ query }: { query: string }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["recipes", trimmedQuery],
    queryFn: () => getRecipes(trimmedQuery),
    enabled: hasQuery,
    staleTime: STALE_TIME,
  });

  const recipes = (data?.recipes ?? []) as IRecipe[];
  const hasResults = recipes.length > 0;
  const showLoading = isLoading || (isFetching && hasQuery);

  function updateVisibleCount() {
    setVisibleCount((p) => (p + 12 > recipes.length ? recipes.length : p + 12));
  }

  const { triggerRef } = useVirtualizer(updateVisibleCount);

  return {
    recipes,
    isError,
    hasQuery,
    hasResults,
    showLoading,
    triggerRef,
    visibleCount,
  };
}
