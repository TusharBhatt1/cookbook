import RecipeDetails from "@/modules/recipe-details";
import getRecipeDetails from "@/server-actions/queries/get-recipe-details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const details = await getRecipeDetails(id);
  return <RecipeDetails details={details} />;
}
