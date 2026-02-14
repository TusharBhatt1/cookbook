# Architecture

## Overview

**CookBook** is a modular recipe discovery app built with the Next.js App Router. The architecture emphasizes scalability, clear separation of concerns, and **URL-driven state** as the primary source of truth.

---

## Structure

| Directory         | Purpose                     |
| ----------------- | --------------------------- |
| `app/`            | Routing and global layout   |
| `page-builders/`  | Feature-based UI modules    |
| `hooks/`          | Reusable logic              |
| `lib/`            | Providers, types, utilities |
| `server-actions/` | Data fetching and mutations |

---

## Key Decisions

### Feature-based organization

Code is grouped by **feature** (recipes, details, favorites) rather than by file type. This makes the app easier to scale, navigate, and maintain as features grow.

### URL as source of truth

Search and other shareable state live in the URL via query params (e.g. `?search=`). This gives:

- **Shareable URLs** — Any view can be bookmarked or linked.
- **Predictable state** — No hidden client-only state for core flows.
- **Simpler data flow** — Server and client stay in sync with the URL.
- **Dynamic metadata** — SEO title and description are generated per recipe using `generateMetadata`, ensuring accurate previews and better search visibility.

### Reusable logic

Common logic is extracted into custom hooks inside the hooks/ directory to keep components clean and focused on UI.

Examples include:

- **useDebounce** — Optimizes search performance.

- **useLocalStorage** — Persists client state (e.g. favorites).

- **Encapsulated** favorite management logic — Prevents duplication and ensures consistent updates.

This improves maintainability, testability, and separation of concerns.

### Data fetching

**TanStack Query** is used for server data. It provides:

- Caching and deduplication
- Loading and error states
- Background refetching and invalidation

---

## State strategy

| State type              | Approach                 |
| ----------------------- | ------------------------ |
| Server data             | TanStack Query           |
| URL state               | `useSearchParams`        |
| Local UI                | `useState`               |
| Global (e.g. favorites) | Context + `localStorage` |

---

## Performance

- **Debounced search** — Reduces API calls and input jank.
- **Progressive list rendering** — Only render visible items where needed.
- **React `cache()` for data deduplication** — Ensures a single fetch per request lifecycle (metadata + page).

---

## Summary

The system is modular, scalable, and production-oriented while staying simple and maintainable.
