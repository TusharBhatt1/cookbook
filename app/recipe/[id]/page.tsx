import type { Metadata } from "next";
import RecipeDetails from "@/page-builders/recipe-details";
import getRecipeDetails from "@/server-actions/queries/get-recipe-details";
import { cache } from "react";

const getRecipe = cache(async (id: string) => {
  return await getRecipeDetails(id);
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const details = await getRecipe(id);
  if (!details) {
    return { title: "Recipe not found" };
  }
  const description = [
    details.cuisine,
    details.difficulty,
    details.servings && `${details.servings} servings`,
  ]
    .filter(Boolean)
    .join(" · ");
  return {
    title: details.name,
    description: description || undefined,
    openGraph: {
      title: details.name,
      description: description || undefined,
      images: details.image ? [details.image] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const details = await getRecipe(id);
  return <RecipeDetails details={details} />;
}
