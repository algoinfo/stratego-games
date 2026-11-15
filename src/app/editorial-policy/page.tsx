import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `How ${SITE.name} writes Classic Original Stratego guides.`,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="legal-page">
      <h1>Editorial Policy</h1>
      <h2>Scope</h2>
      <p>
        Content focuses on Classic Original Stratego. Variant editions such as
        Duel or Infiltrator are not mixed into Original articles.
      </p>
      <h2>What we publish</h2>
      <ul>
        <li>
          <strong>Rules:</strong> movement, combat, piece counts, and winning
          conditions for Classic Original play.
        </li>
        <li>
          <strong>Setup & strategy:</strong> practical patterns for Flag
          protection, probing, trading, and endgame decisions.
        </li>
        <li>
          <strong>Diagrams:</strong> original board and formation illustrations
          that support each guide.
        </li>
      </ul>
      <h2>Accuracy</h2>
      <p>
        We do not invent tournaments, rankings, or player statistics. When
        editions differ, Original pages stay focused on Classic Original.
      </p>
      <p className="callout">{SITE.disclaimer}</p>
    </div>
  );
}
