import type { Metadata } from "next";
import { FormationGallery } from "@/components/diagrams/FormationDiagram";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { REFERENCES } from "@/content/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Setup Guide: Flag, Bombs & Formations";
const description =
  "Learn Classic Original Stratego setup: Flag placement, Bomb screens, Scout and Miner distribution, and common formation mistakes.";
const updated = "2026-11-15";
const path = "/stratego-setup";

const faqs = [
  {
    q: "Should the Flag always be in a corner?",
    a: "Corners are common and often strong, but predictable corners invite focused Bomb-clearing. Mix Flag locations across games.",
  },
  {
    q: "How many Bombs should guard the Flag?",
    a: "There is no fixed rule. Many players dedicate two to four Bombs to Flag approaches and keep the rest for front or mid traps.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function SetupPage() {
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
              { name: "Stratego Setup", path },
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
        intro="Setup is half the game. This Classic Original guide covers Flag geography, Bomb screens, officer placement, and formation patterns—recommendations, not mandatory rules."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Setup" },
        ]}
        updated={updated}
        readingMinutes={12}
        toc={[
          { id: "flag", label: "Flag placement" },
          { id: "bombs", label: "Bomb positioning" },
          { id: "high", label: "High-rank positioning" },
          { id: "scouts", label: "Scout distribution" },
          { id: "miners", label: "Miner positioning" },
          { id: "forms", label: "Three formations" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        related={[
          { href: "/best-stratego-setup", label: "Best Setup Comparison" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
        ]}
        faqs={faqs}
        references={REFERENCES}
      >
        <h2 id="flag">Flag placement</h2>
        <p>
          The Flag must sit on one of your four setup rows. Strong placements
          usually have limited approach squares that Bombs and mid-ranks can
          cover. Extremely obvious corners can be fine against casual play and
          fragile against experienced Miners.
        </p>

        <h2 id="bombs">Bomb positioning</h2>
        <p>
          Bombs are immobile tripwires. Place them on squares enemies must
          enter to reach the Flag, or on tempting front-line squares that punish
          reckless Scouts. Leaving every Bomb glued to the Flag wastes their
          deterrent value elsewhere.
        </p>

        <h2 id="high">High-rank positioning</h2>
        <p>
          Marshal and General should be ready to respond, not stranded behind
          dead Bombs. Many players keep one elite near each wing or hold the
          Marshal slightly back until the Spy threat is better understood.
        </p>

        <h2 id="scouts">Scout distribution</h2>
        <p>
          Spread Scouts so open files and ranks become reconnaissance tools.
          Stacking all eight Scouts in one corner wastes their mobility.
        </p>

        <h2 id="miners">Miner positioning</h2>
        <p>
          Keep Miners alive into the midgame. Front-loading every Miner into
          suicide probes can leave you unable to clear Flag Bombs later.
        </p>

        <h2 id="forms">Three original formation diagrams</h2>
        <p>
          These editorial diagrams use legal Classic Original armies (40 pieces).
          They are teaching examples—not official publisher layouts. Full
          comparison of strengths and weaknesses is on the{" "}
          <a href="/best-stratego-setup">best setup</a> page.
        </p>
        <FormationGallery />

        <h2 id="mistakes">Common mistakes</h2>
        <ul>
          <li>Flag with zero Bomb coverage on obvious approach squares.</li>
          <li>All Bombs in one cluster that a single Miner corridor can open.</li>
          <li>Marshal parked on the front row from move one.</li>
          <li>No Scouts with clear lanes after the first few trades.</li>
          <li>Miners spent early against unknown mid-ranks.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
