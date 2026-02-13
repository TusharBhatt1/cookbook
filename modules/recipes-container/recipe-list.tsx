"use client";

import Image from "next/image";
import getRecipeDetails from "@/server-actions/queries/get-recipe-details";
import type { Recipe } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import EmptyState from "../common/empty-state";
import ErrorState from "../common/error-state";
import RecipeListSkeleton from "./recipe-list-skeleton";
import { STALE_TIME } from "@/constant";

export default function RecipeList({ query }: { query: string }) {
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

  if (!hasQuery) {
    return <EmptyState text={"Enter a search term to find recipes."} />;
  }

  if (showLoading) {
    return <RecipeListSkeleton />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (!hasResults) {
    return <EmptyState text={"No recipes found. Try a different search."} />;
  }

  return (
    <ul
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-h-[80vh] overflow-auto"
      role="list"
    >
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link
            href={`/recipes/${recipe.id}`}
            className="group flex gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-neutral-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:shadow-neutral-900/50"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
              {recipe.image ? (
                <Image
                  src={recipe.image}
                  alt=""
                  width={64}
                  height={64}
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <span className="block truncate font-medium text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-200">
                {recipe.name}
              </span>
              {recipe.cuisine && (
                <span className="mt-0.5 block truncate text-sm text-neutral-500 dark:text-neutral-400">
                  {recipe.cuisine}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
