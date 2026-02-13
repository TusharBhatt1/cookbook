export interface IRecipeSearch {
  query: string;
  setQuery: (value: string) => void;
}

export interface Recipe {
  id: number;
  name: string;
  image?: string;
  cuisine?: string;
  difficulty?: string;
}
