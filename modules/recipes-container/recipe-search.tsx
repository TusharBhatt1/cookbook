import { IRecipeSearch } from "@/lib/types";

export default function RecipeSearch({ query, setQuery }: IRecipeSearch) {
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
