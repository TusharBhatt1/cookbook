export const BACKEND_URL = "https://dummyjson.com";
export const STALE_TIME = 1000 * 60 * 5;
export const DEBOUNCE_THRESHOLD = 500;
export const VISIBLE_COUNT = 12;
export const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";

import {
  Code2,
  Palette,
  Database,
  Search,
  Link,
  RefreshCw,
  HardDrive,
  FolderTree,
  Layers,
  Server,
} from "lucide-react";

export const HIGHLIGHTS = [
  {
    title: "Tech stack",
    items: [
      { icon: Code2, text: "Next.js 16 (App Router)" },
      { icon: Code2, text: "React 19" },
      { icon: Code2, text: "TypeScript" },
      { icon: Palette, text: "Tailwind CSS 4" },
      { icon: Database, text: "TanStack Query (data & caching)" },
      { icon: Code2, text: "Lucide React (icons)" },
    ],
  },
  {
    title: "Optimizations",
    items: [
      {
        icon: Search,
        text: "Debounced search — fewer API calls, smoother typing",
      },
      {
        icon: Link,
        text: "URL-driven state — shareable links, predictable state",
      },
      {
        icon: RefreshCw,
        text: "TanStack Query — caching, deduplication, background refetch",
      },
      {
        icon: Layers,
        text: "Progressive list rendering — only visible items when needed",
      },
      {
        icon: HardDrive,
        text: "LocalStorage favorites — persists across sessions",
      },
    ],
  },
  {
    title: "Architecture",
    items: [
      {
        icon: FolderTree,
        text: "Feature-based structure (page-builders, hooks, lib)",
      },
      { icon: Layers, text: "Context + localStorage for global favorites" },
      { icon: Server, text: "Server actions for data fetching" },
    ],
  },
];
