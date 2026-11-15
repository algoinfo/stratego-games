import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How Stratego Game Wiki separates official Classic Original rules from strategic recommendations and opinions.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="legal-page">
      <h1>Editorial Policy</h1>
      <h2>Scope</h2>
      <p>
        Initial content covers Classic Original Stratego only. Variant editions
        such as Duel or Infiltrator are not mixed into Original articles.
      </p>
      <h2>Rules vs recommendations</h2>
      <ul>
        <li>
          <strong>Official rules:</strong> movement, combat, piece counts, and
          winning conditions drawn from Classic Original instructions.
        </li>
        <li>
          <strong>Strategic recommendations:</strong> setup patterns, probing
          habits, and risk tradeoffs labeled as editorial advice.
        </li>
        <li>
          <strong>Opinions:</strong> comparative judgments (for example, which
          formation fits a style) that are not presented as mandatory rules.
        </li>
      </ul>
      <h2>Accuracy</h2>
      <p>
        We do not invent rules, tournaments, rankings, or player statistics.
        When editions disagree, Original pages state the Classic Original rule
        and note that other editions may differ.
      </p>
      <p className="callout">{SITE.disclaimer}</p>
    </div>
  );
}
