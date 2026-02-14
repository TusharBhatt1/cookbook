"use client";

import { Suspense, useState } from "react";
import RecipeSearch from "./recipe-search";
import RecipeList from "./recipe-list";
import AboutModal from "@/page-builders/modals/about-modal";
import { Info } from "lucide-react";

export default function RecipesContainer() {
  const [query, setQuery] = useState("");
  const [aboutOpen, setAboutOpen] = useState(false);
  const [hasClickedInfo, setHasClickedInfo] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="border-b border-neutral-800 bg-neutral-900 p-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between sm:items-center items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Discover recipes
              </h1>
              <p className="mt-1 text-neutral-400">
                Search for cuisines, dishes, or ingredients
              </p>
            </div>
            <Info
              onClick={() => {
                setAboutOpen(true);
                setHasClickedInfo(true);
              }}
              tabIndex={0}
              aria-label="Information"
              className={`cursor-pointer text-neutral-500   focus:outline-none
 hover:text-neutral-100 transition animate-${
   hasClickedInfo ? "none" : "pulse"
 }`}
            />
          </div>
          <div className="mt-3">
            {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
            <Suspense>
              <RecipeSearch query={query} setQuery={setQuery} />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <RecipeList query={query} />
      </div>

      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}
