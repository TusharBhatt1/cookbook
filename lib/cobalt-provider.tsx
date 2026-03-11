"use client";

import { useQuery } from "@tanstack/react-query";

type CobaltAppsResponse = unknown;

async function fetchCobaltApps(): Promise<CobaltAppsResponse> {
  const res = await fetch("/api/cobalt/apps", { method: "GET" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

export function useCobaltApps() {
  return useQuery({
    queryKey: ["cobalt", "apps"],
    queryFn: fetchCobaltApps,
    retry: 1,
  });
}
