import type { IRecipeDetails } from "@/lib/types";
import { BACKEND_URL } from "@/constant";

export default async function getRecipeDetails(
  id: string,
): Promise<IRecipeDetails | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/recipes/${id}`);
    if (!res.ok) return null;
    const data = (await res.json()) as IRecipeDetails;
    return data;
  } catch {
    return null;
  }
}
