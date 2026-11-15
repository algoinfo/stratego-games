/**
 * Single source of truth for sitemap lastmod + article "Updated" dates.
 * Bump a route's lastModified only when that page's content actually changes.
 */
export type SiteRoute = {
  path: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "/",
    lastModified: "2026-11-15",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/stratego-rules",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/how-to-play-stratego",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-pieces",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-ranks",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-setup",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/best-stratego-setup",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-strategy",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-tips",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-scout",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-miner",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-marshal",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-spy",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/stratego-bomb",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/protect-your-flag",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/about",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/contact",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/editorial-policy",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/privacy",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/terms",
    lastModified: "2026-11-15",
    changeFrequency: "monthly",
    priority: 0.4,
  },
];

export function routeUpdated(path: string): string {
  const route = SITE_ROUTES.find((r) => r.path === path);
  if (!route) {
    throw new Error(`[routes] missing lastModified for ${path}`);
  }
  return route.lastModified;
}
