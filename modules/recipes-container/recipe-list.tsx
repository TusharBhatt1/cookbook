import getRecipeDetails from "@/server-actions/queries/get-recipe-details";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function RecipeList({ query }: { query: string }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getRecipeDetails(query),
  });
  console.log("data:", data);
  return <div>recipe-list - ${query}</div>;
}
