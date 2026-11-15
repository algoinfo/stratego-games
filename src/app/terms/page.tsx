import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <h1>Terms of Use</h1>
      <p>
        By using {SITE.name}, you agree to use the site as an educational
        resource. Content is provided as-is for learning Classic Original
        Stratego.
      </p>
      <h2>Trademark</h2>
      <p>{SITE.disclaimer}</p>
      <h2>Content</h2>
      <p>
        Guide text and diagrams on this site are original materials for personal
        learning.
      </p>
      <h2>Limitation</h2>
      <p>
        We are not liable for gameplay losses, disputed house rules, or
        differences between Stratego editions.
      </p>
    </div>
  );
}
