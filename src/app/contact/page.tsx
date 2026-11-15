import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} about corrections, editorial questions, or feedback on Classic Original Stratego guides.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="legal-page">
      <h1>Contact</h1>
      <p>
        For factual corrections, diagram feedback, or editorial questions about
        these Classic Original guides, email{" "}
        <a href="mailto:editorial@fieldmanual.stratego.guide">
          editorial@fieldmanual.stratego.guide
        </a>
        .
      </p>
      <p>
        Please include the page URL and a short description of the issue. We
        prioritize rules accuracy over feature requests.
      </p>
      <p className="callout">{SITE.disclaimer}</p>
    </div>
  );
}
