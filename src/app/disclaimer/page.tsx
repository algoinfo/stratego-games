import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Trademark and content disclaimer for ${SITE.name}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="legal-page">
      <h1>Disclaimer</h1>
      <p>{SITE.disclaimer}</p>
      <p>
        All guide text and diagrams on this site are original educational
        content about Classic Original Stratego.
      </p>
      <p>
        Gameplay outcomes depend on opponents, house rules, and edition
        differences. Strategy articles share practical ideas, not guarantees.
      </p>
    </div>
  );
}
