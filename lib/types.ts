export interface IRecipeSearch {
  query: string;
  setQuery: (value: string) => void;
}

export interface IRecipe {
  id: number;
  name: string;
  image?: string;
  cuisine?: string;
  difficulty?: string;
  rating?: number;
}

export interface IRecipeDetails {
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

export interface IFavoriteItem {
  id: string;
  name: string;
  image?: string;
}

export interface IFavoritesContext {
  favorites: IFavoriteItem[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  addFavorite: (item: IFavoriteItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: IFavoriteItem) => void;
}
