import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/stratego-rules",
  "/how-to-play-stratego",
  "/stratego-pieces",
  "/stratego-ranks",
  "/stratego-setup",
  "/best-stratego-setup",
  "/stratego-strategy",
  "/stratego-tips",
  "/stratego-scout",
  "/stratego-miner",
  "/protect-your-flag",
  "/about",
  "/contact",
  "/editorial-policy",
  "/disclaimer",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: "2026-11-15",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/stratego") || path === "/how-to-play-stratego" || path === "/best-stratego-setup" || path === "/protect-your-flag" ? 0.8 : 0.4,
  }));
}
