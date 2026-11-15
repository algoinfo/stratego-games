import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${SITE.name}, an unofficial Classic Original Stratego educational guide.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <h1>Terms of Use</h1>
      <p>
        By using {SITE.name}, you agree to treat the site as an unofficial
        educational resource. Content is provided as-is for learning Classic
        Original Stratego.
      </p>
      <h2>No official affiliation</h2>
      <p>{SITE.disclaimer}</p>
      <h2>Intellectual property</h2>
      <p>
        Original text and diagrams on this site are provided for personal
        learning. Do not present this material as official publisher content.
      </p>
      <h2>Limitation</h2>
      <p>
        We are not liable for gameplay losses, disputed house rules, or
        differences between Stratego editions. Confirm rules with your physical
        set when playing.
      </p>
    </div>
  );
}
