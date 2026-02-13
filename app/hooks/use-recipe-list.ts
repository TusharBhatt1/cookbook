import getRecipeDetails from "@/server-actions/queries/get-recipe-details";
import type { Recipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "@/constant";

export default function useRecipeList({ query }: { query: string }) {
  const trimmed = query.trim();
  const hasQuery = trimmed.length > 0;

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["recipes", trimmed],
    queryFn: () => getRecipeDetails(trimmed),
    enabled: hasQuery,
    staleTime: STALE_TIME,
  });

  const recipes = (data?.recipes ?? []) as Recipe[];
  const hasResults = recipes.length > 0;
  const showLoading = isLoading || (isFetching && hasQuery);
  return {
    recipes,
    isError,
    hasQuery,
    hasResults,
    showLoading,
  };
}
