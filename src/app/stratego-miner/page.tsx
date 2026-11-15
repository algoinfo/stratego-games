import type { Metadata } from "next";
import { BombMiner } from "@/components/diagrams/BombMiner";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Miner Guide: Clearing Bombs Safely";
const description =
  "Learn how to use Classic Original Stratego Miners: Bomb clearing, timing, protection, and when not to spend them.";
const updated = "2026-11-15";
const path = "/stratego-miner";

const faqs = [
  {
    q: "Can any piece remove a Bomb?",
    a: "Only Miners remove Bombs safely. Other attackers that strike a Bomb are eliminated according to Classic Original combat rules.",
  },
  {
    q: "How many Miners should I keep for the endgame?",
    a: "Try to keep at least one or two Miners until Flag approaches are identified. Exact numbers depend on remaining Bombs.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function MinerPage() {
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
              { name: "Stratego Miner", path },
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
        intro="Miners (rank 3) are the only Classic Original pieces that defeat Bombs. Five Miners must last long enough to open the Flag screen."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Miner" },
        ]}
        updated={updated}
        readingMinutes={8}
        toc={[
          { id: "rules", label: "Rules recap" },
          { id: "usage", label: "Practical usage" },
          { id: "advantages", label: "Advantages" },
          { id: "risks", label: "Risks" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<BombMiner />}
        related={[
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-scout", label: "Scout Guide" },
          { href: "/stratego-setup", label: "Setup Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Rules recap</h2>
        <p>
          Miners move one square orthogonally like most ranks. In combat they
          are weak against officers but uniquely defeat Bombs. After clearing a
          Bomb, the Miner occupies that square.
        </p>

        <h2 id="usage">Practical usage</h2>
        <ul>
          <li>Confirm Bomb suspects with Scouts or sacrificial probes when needed.</li>
          <li>Escort Miners toward Flag pockets once approaches are known.</li>
          <li>Avoid early Miner-versus-Captain trades unless the board demands it.</li>
        </ul>

        <h2 id="advantages">Advantages</h2>
        <p>
          Without Miners, dense Bomb screens can stall forever. Preserved Miners
          convert information into Flag access.
        </p>

        <h2 id="risks">Risks</h2>
        <p>
          Rank 3 loses to Sergeants and above. Opponents may bait Miners into
          officer traps near fake Flag zones.
        </p>

        <h2 id="mistakes">Common mistakes</h2>
        <ul>
          <li>Spending all five Miners in the opening.</li>
          <li>Sending unescorted Miners into unknown clusters.</li>
          <li>Ignoring remaining Bomb counts in the endgame.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
