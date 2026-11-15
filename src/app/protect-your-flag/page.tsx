import type { Metadata } from "next";
import { FormationDiagram } from "@/components/diagrams/FormationDiagram";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "How to Protect Your Flag in Stratego";
const description =
  "Defensive Classic Original Stratego Flag tactics: Bomb screens, approach control, decoys, and mistakes that leak the Flag.";
const updated = "2026-11-15";
const path = "/protect-your-flag";

const faqs = [
  {
    q: "Do Bombs have to touch the Flag?",
    a: "No. Bombs should control approach squares. Adjacent placement is common but not required by the rules.",
  },
  {
    q: "Can the Flag move?",
    a: "No. In Classic Original, the Flag is immobile for the entire game.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function ProtectFlagPage() {
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
              { name: "Protect Your Flag", path },
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
        intro="Winning starts with not losing the Flag early. This guide focuses on Classic Original defensive geography and habits that slow down Flag hunters."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-setup", label: "Setup" },
          { label: "Protect Your Flag" },
        ]}
        updated={updated}
        readingMinutes={10}
        toc={[
          { id: "goal", label: "Defense goals" },
          { id: "screen", label: "Bomb screens" },
          { id: "decoys", label: "Decoys & misdirection" },
          { id: "active", label: "Active defense" },
          { id: "mistakes", label: "Common leaks" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<FormationDiagram style="defensive" showLegend={false} />}
        related={[
          { href: "/stratego-setup", label: "Setup Guide" },
          { href: "/best-stratego-setup", label: "Setup Comparison" },
          { href: "/stratego-miner", label: "Miner Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="goal">Defense goals</h2>
        <p>
          Force attackers through costly squares, delay Miner access, and keep
          the Flag location ambiguous for as long as possible.
        </p>

        <h2 id="screen">Bomb screens</h2>
        <p>
          Place Bombs on squares that must be entered to reach the Flag, not
          only on decorative neighbors. Mix a few Bombs elsewhere so opponents
          cannot assume every Bomb marks the prize.
        </p>

        <h2 id="decoys">Decoys and misdirection</h2>
        <p>
          A heavily guarded empty corner can waste enemy Miners. Stationary
          mid-ranks can look like Bombs. Use these ideas sparingly—obvious
          decoys teach experienced players where the real Flag is not.
        </p>

        <h2 id="active">Active defense</h2>
        <p>
          Defense is not only setup. Reposition mid-ranks to plug Scout lanes,
          and keep an officer ready to punish Flag-hunting Scouts that survive a
          Bomb miss.
        </p>

        <h2 id="mistakes">Common leaks</h2>
        <ul>
          <li>Flag on an edge with two open approach squares and no Bombs.</li>
          <li>All Bombs clustered so one cleared corridor ends the game.</li>
          <li>Overreacting and moving every nearby piece, advertising the zone.</li>
          <li>Never changing Flag habits across matches.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
