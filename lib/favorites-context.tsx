"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { IFavoriteItem, IFavoritesContext } from "./types";

const FavoritesContext = createContext<IFavoritesContext | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const addFavorite = useCallback((item: IFavoriteItem) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === item.id)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  }, []);

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
