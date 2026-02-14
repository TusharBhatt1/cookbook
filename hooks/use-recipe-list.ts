import getRecipes from "@/server-actions/queries/get-recipes";
import type { IRecipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME, VISIBLE_COUNT } from "@/constant";
import { useEffect, useRef, useState } from "react";
import useVirtualizer from "./use-virtualizer";

export default function useRecipeList({ query }: { query: string }) {
  const hasSearchedAndScrolled = useRef(false);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT);

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
    hasSearchedAndScrolled.current = true;
    setVisibleCount((p) =>
      p + VISIBLE_COUNT > recipes.length ? recipes.length : p + VISIBLE_COUNT,
    );
  }

  useEffect(() => {
    if (isFetching) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleCount(VISIBLE_COUNT);
    }
  }, [isFetching]);

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
