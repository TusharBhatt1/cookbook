"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IFavoriteItem, IFavoritesContext } from "./types";
import useLocalStorage from "@/hooks/use-local-storage";

const FavoritesContext = createContext<IFavoritesContext | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data: favoritesInLocalStorage, setData: setFavoritesToLocalStorage } =
    useLocalStorage({
      key: "favorites",
      initialValue: favorites,
    });

  const addFavorite = useCallback(
    (item: IFavoriteItem) => {
      setFavorites((prev) => {
        let updatedFavorites;
        if (prev.some((f) => f.id === item.id)) updatedFavorites = prev;
        else updatedFavorites = [...prev, item];
        setFavoritesToLocalStorage(updatedFavorites);
        return updatedFavorites;
      });
    },
    [setFavoritesToLocalStorage],
  );

  useEffect(() => {
    setFavorites(favoritesInLocalStorage);
  }, [favoritesInLocalStorage]);

  const removeFavorite = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const updatedFavorites = prev.filter((f) => f.id !== id);
        setFavoritesToLocalStorage(updatedFavorites);
        return updatedFavorites;
      });
    },
    [setFavoritesToLocalStorage],
  );

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (item: IFavoriteItem) => {
      if (isFavorite(item.id)) {
        removeFavorite(item.id);
      } else {
        addFavorite(item);
        setSidebarOpen(true);
      }
    },
    [isFavorite, addFavorite, removeFavorite],
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        sidebarOpen,
        setSidebarOpen,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
