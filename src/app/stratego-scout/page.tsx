import type { Metadata } from "next";
import { ScoutPath } from "@/components/diagrams/ScoutPath";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Scout Guide: Movement, Recon & Risks";
const description =
  "Master the Classic Original Stratego Scout: long-range movement, reconnaissance patterns, attack risks, and common mistakes.";
const updated = "2026-11-15";
const path = "/stratego-scout";

const faqs = [
  {
    q: "Can a Scout jump over pieces?",
    a: "No. Scout movement requires a clear path of empty squares along a row or file, stopping before lakes or occupied squares—unless attacking into an enemy.",
  },
  {
    q: "Should Scouts attack unknown pieces?",
    a: "Sometimes. Attacking reveals information but often loses the Scout. Prefer attacks when the target is likely a Flag, Bomb you need to confirm, or low piece.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function ScoutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({ title, description, path, updated }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Stratego Scout", path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <ArticleShell
        title={title}
        intro="The Scout (rank 2) is Original Stratego's long-range sensor. Eight Scouts per army make mobility a resource—spend them with purpose."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Scout" },
        ]}
        updated={updated}
        readingMinutes={9}
        toc={[
          { id: "rules", label: "Rules recap" },
          { id: "usage", label: "Practical usage" },
          { id: "advantages", label: "Advantages" },
          { id: "risks", label: "Risks" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<ScoutPath />}
        related={[
          { href: "/stratego-miner", label: "Miner Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Rules recap</h2>
        <p>
          In Classic Original, Scouts may move any number of open squares
          orthogonally in a straight line, or attack an enemy after traveling
          that open path. They lose to almost every combat piece in a fair
          fight.
        </p>

        <h2 id="usage">Practical usage</h2>
        <ul>
          <li>Open files early to map immobile candidates.</li>
          <li>Save a few Scouts for late Flag-corridor checks.</li>
          <li>Use short Scout moves to bluff as higher ranks.</li>
        </ul>

        <h2 id="advantages">Advantages</h2>
        <p>
          Speed, quantity, and low opportunity cost on many probes. Scouts turn
          empty board geometry into intelligence.
        </p>

        <h2 id="risks">Risks</h2>
        <p>
          Bombs erase Scouts instantly. Revealing a Scout also teaches the
          opponent that a lane is soft. Overusing Scouts can leave you without
          late-game eyes.
        </p>

        <h2 id="mistakes">Common mistakes</h2>
        <ul>
          <li>Charging every unknown piece on sight.</li>
          <li>Blocking your own Scout lanes with cluttered mid-ranks.</li>
          <li>Never bluffing short Scout steps.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
