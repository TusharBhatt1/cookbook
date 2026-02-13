export default async function getRecipeDetails(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/recipes?q=${id}`);
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {}
}
