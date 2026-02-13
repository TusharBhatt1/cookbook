import getRecipes from "@/server-actions/queries/get-recipes";
import type { Recipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "@/constant";
import { useEffect, useRef, useState } from "react";

export default function useRecipeList({ query }: { query: string }) {
  const triggerRef = useRef<HTMLParagraphElement>(null);

  const [visibleCount, setVisibleCount] = useState(10);

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["recipes", trimmedQuery],
    queryFn: () => getRecipes(trimmedQuery),
    enabled: hasQuery,
    staleTime: STALE_TIME,
  });

  const recipes = (data?.recipes ?? []) as Recipe[];
  const hasResults = recipes.length > 0;
  const showLoading = isLoading || (isFetching && hasQuery);

  useEffect(() => {
    if (!triggerRef.current) return;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        await new Promise((res) => setTimeout(() => res(null), 2000));
        setVisibleCount((p) =>
          p + 10 > recipes.length ? recipes.length : p + 10,
        );
      }
    });
    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [recipes.length]);
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
