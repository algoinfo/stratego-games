export const SITE = {
  name: "Stratego Game Wiki",
  shortName: "Stratego Game Wiki",
  tagline: "An independent Stratego strategy wiki",
  logoSubline: "Unofficial Classic Original wiki",
  description:
    "Learn classic Original Stratego rules, piece roles, setups, and strategy with clear diagrams and practical examples.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stratego-games.online",
  locale: "en_US",
  disclaimer:
    "Stratego Game Wiki is an unofficial fan-made educational guide. It is not affiliated with, endorsed by, or connected to the owners of the Stratego trademark or any official publisher.",
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

export const REFERENCES = [
  {
    label: "Official Stratego Original instructions (Jumbo / Hasbro editions)",
    note: "Primary source for classic Original piece counts, movement, and combat resolution.",
    href: "https://www.ultraboardgames.com/stratego/game-rules.php",
  },
  {
    label: "Stratego (board game) — rules overview",
    note: "Cross-check for Flag capture, Bomb/Miner interaction, Scout movement, and Spy vs Marshal in Original play.",
    href: "https://en.wikipedia.org/wiki/Stratego",
  },
];
