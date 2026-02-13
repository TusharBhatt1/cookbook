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
  rating?: number;
}

export interface RecipeDetails {
  id: number;
  name: string;
  image?: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  difficulty?: string;
  cuisine?: string;
  caloriesPerServing?: number;
  tags?: string[];
  rating?: number;
  reviewCount?: number;
  mealType?: string[];
}
