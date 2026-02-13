import { BACKEND_URL } from "@/constant";

export default async function getRecipes(query: string) {
  try {
    const res = await fetch(`${BACKEND_URL}/recipes?q=${query}`);
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {}
}
