export default async function getRecipeDetails(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/$${id}`);
    const data = await res.json();
    return data;
  } catch (error) {}
}
