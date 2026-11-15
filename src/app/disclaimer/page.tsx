import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Unofficial fan-guide disclaimer for Field Manual Stratego. Not affiliated with official Stratego trademark owners.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="legal-page">
      <h1>Disclaimer</h1>
      <p>{SITE.disclaimer}</p>
      <p>
        Stratego is a trademark of its respective owners. All guide content,
        original diagrams, and editorial commentary on this site are provided
        for educational discussion of the classic board game.
      </p>
      <p>
        Gameplay outcomes depend on opponents, house rules, and edition-specific
        differences. Strategy articles are recommendations, not guarantees.
      </p>
    </div>
  );
}
