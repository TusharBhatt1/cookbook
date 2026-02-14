import { BANNER_IMAGE } from "@/constant";
import Image from "next/image";

export default function SearchBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800">
      <div className="relative aspect-21/9 min-h-[200px] w-full sm:aspect-3/1 sm:min-h-[220px]">
        <Image
          src={BANNER_IMAGE}
          alt="Fresh ingredients and cooking"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, 1200px"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-neutral-900/95 via-neutral-900/50 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400/90">
            Recipe Finder
          </p>
          <h2 className="mt-2 max-w-lg text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Search for recipes
          </h2>
          <p className="mt-2 max-w-md text-base text-neutral-300 sm:text-lg">
            Try cuisines, dishes, or ingredients — we’ll find something
            delicious.
          </p>
        </div>
      </div>
    </div>
  );
}
