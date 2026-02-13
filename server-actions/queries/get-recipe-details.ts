import type { RecipeDetails } from "@/lib/types";
import { BACKEND_URL } from "@/constant";

export default async function getRecipeDetails(
  id: string,
): Promise<RecipeDetails | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/recipes/${id}`);
    if (!res.ok) return null;
    const data = (await res.json()) as RecipeDetails;
    return data;
  } catch {
    return null;
  }
}
