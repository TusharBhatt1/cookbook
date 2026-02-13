"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/lib/favorites-context";
import { X, Menu, Heart, Trash2 } from "lucide-react";

export default function Favorites() {
  const { favorites, sidebarOpen, setSidebarOpen, removeFavorite } =
    useFavorites();

  return (
    <>
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-600 bg-neutral-800/95 text-neutral-100 shadow-lg backdrop-blur-sm transition hover:bg-neutral-700 hover:text-white"
        aria-label="Open favorites"
      >
        <Menu className="h-5 w-5" />
        {favorites.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {favorites.length}
          </span>
        )}
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close favorites"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel - slides in from right (Zomato cart style) */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-neutral-700 bg-neutral-900 shadow-2xl transition-transform duration-300 ease-out sm:max-w-md ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-700 px-4 py-3">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-400" />
            <h2 className="text-lg font-semibold text-white">Favorites</h2>
            {favorites.length > 0 && (
              <span className="rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-300">
                {favorites.length}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
              <div className="rounded-full bg-neutral-800 p-4">
                <Heart className="h-8 w-8 text-neutral-500" />
              </div>
              <p className="text-sm text-neutral-400">
                No favorites yet. Add recipes from the list or recipe page.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-neutral-800 p-3">
              {favorites.map((item) => (
                <li
                  key={item.id}
                  className="group flex items-center gap-3 py-3 first:pt-0"
                >
                  <Link
                    href={`/recipe/${item.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className="flex min-w-0 flex-1 items-center gap-3 rounded-lg transition hover:bg-neutral-800/50"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-neutral-700">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-neutral-500">
                          <Heart className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <span className="truncate font-medium text-white">
                      {item.name}
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeFavorite(item.id)}
                    className="shrink-0 rounded-lg p-2 text-neutral-400 transition hover:bg-red-950/50 hover:text-red-400"
                    aria-label={`Remove ${item.name} from favorites`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}
