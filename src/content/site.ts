export const SITE = {
  name: "Stratego Game Wiki",
  shortName: "Stratego Game Wiki",
  tagline: "Classic Original Stratego rules, setups, and strategy",
  description:
    "Learn classic Original Stratego rules, piece roles, setups, and strategy with clear diagrams and practical examples.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stratego-games.online",
  locale: "en_US",
  disclaimer:
    "Stratego is a trademark of its respective owners. Stratego Game Wiki is an independent educational site and is not an official product of those trademark owners.",
};

export const NAV = [
  { href: "/stratego-rules", label: "Rules" },
  { href: "/stratego-pieces", label: "Pieces" },
  { href: "/stratego-setup", label: "Setup" },
  { href: "/stratego-strategy", label: "Strategy" },
  { href: "/stratego-tips", label: "Tips" },
] as const;

export const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
