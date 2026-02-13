"use client";

import { Recipe } from "@/lib/types";
import { useFavorites } from "@/lib/favorites-context";
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(String(recipe.id));

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id: String(recipe.id),
      name: recipe.name,
      image: recipe.image,
    });
  };

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 shadow-lg transition hover:border-neutral-600 hover:shadow-xl"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-neutral-700">
        {recipe.image ? (
          <Image
            src={recipe.image}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-500">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        )}
        <button
          type="button"
          onClick={handleFavoriteClick}
          className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 hover:scale-110"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-4 w-4 ${favorited ? "fill-red-500 text-red-500" : ""}`}
          />
        </button>
        {recipe.rating != null && (
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-amber-400 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-amber-400" />
            {recipe.rating}
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="block font-semibold text-white group-hover:text-red-400 transition-colors">
          {recipe.name}
        </span>
        {recipe.cuisine && (
          <span className="mt-0.5 block text-sm text-neutral-400">
            {recipe.cuisine}
          </span>
        )}
        {recipe.difficulty && (
          <span className="mt-1 inline-block rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
            {recipe.difficulty}
          </span>
        )}
      </div>
    </Link>
  );
}
