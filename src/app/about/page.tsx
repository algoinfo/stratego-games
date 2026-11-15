import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name}: original Classic Original Stratego rules, setup, and strategy guides.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="legal-page">
      <h1>About {SITE.name}</h1>
      <p>
        {SITE.name} is an original educational website for players who want to
        learn Classic Original Stratego rules, piece roles, setups, and
        strategy. It is a content guide—not a playable game client.
      </p>
      <p>
        Guides, diagrams, and explanations on this site are written for clear
        learning: rules first, then practical setup and strategy.
      </p>
      <p className="callout">{SITE.disclaimer}</p>
      <p>
        Start with <Link href="/how-to-play-stratego">How to Play</Link> or the{" "}
        <Link href="/stratego-rules">Rules</Link> guide.
      </p>
    </div>
  );
}
