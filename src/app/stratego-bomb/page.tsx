import type { Metadata } from "next";
import Link from "next/link";
import { BombMiner } from "@/components/diagrams/BombMiner";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Bomb Guide: Defense, Layout & Decoys";
const description =
  "Classic Original Stratego Bomb guide: approach denial, Flag screens vs decoy Bombs, when to cluster, and how Miners force your layout choices.";
const path = "/stratego-bomb";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "What removes a Bomb?",
    a: "Only a Miner removes a Bomb safely. Other attackers are destroyed by the Bomb.",
  },
  {
    q: "Should all Bombs guard the Flag?",
    a: "No. Guard critical approaches, then leave some Bombs as traps or decoys so opponents cannot map the Flag from Bomb density alone.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function BombPage() {
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
              { name: "Pieces", path: "/stratego-pieces" },
              { name: "Stratego Bomb", path },
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
        intro="Bombs do not move, so placement is the entire skill. This guide goes past “put Bombs near the Flag” into approach geometry, decoy density, and how Miner math changes after the first clear."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Bomb" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "rules", label: "Quick rules" },
          { id: "approach", label: "Approach denial" },
          { id: "decoy", label: "Decoy Bomb case" },
          { id: "cluster", label: "Cluster vs spread" },
          { id: "miner", label: "Vs Miner pressure" },
          { id: "mistakes", label: "Mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<BombMiner />}
        related={[
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-miner", label: "Miner Guide" },
          { href: "/stratego-setup", label: "Setup Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Quick rules</h2>
        <p>
          Rank B · quantity 6 · immobile. Destroys most attackers; Miners remove
          Bombs. Codex summary:{" "}
          <Link href="/stratego-pieces">Pieces</Link>.
        </p>

        <h2 id="approach">Case: Guard the square that must be entered</h2>
        <TacticCase
          title="Choke-point Bomb, not wallpaper"
          situation="Flag on a9. Attackers must pass b9 or a8. You have six Bombs and a habit of surrounding the Flag with three of them."
          moves={[
            "Put Bombs on b9 and a8 first—the squares that end the game if entered by a non-Miner.",
            "Leave a8 or b9 empty only if a strong officer can cover it after contact.",
            "Place one Bomb on an opposite corner approach that looks “Flag-like.”",
            "Keep remaining Bombs for center traps so early Scouts cannot map your nest from Bomb count alone.",
          ]}
          why="Bombs buy tempo when they sit on forced entries, not when they decorate the Flag cell."
          avoid="Three Bombs hugging the Flag while both approach files are empty."
        />

        <h2 id="decoy">Case: Decoy Bomb nest wastes a Miner pair</h2>
        <TacticCase
          title="False fortress"
          situation="Real Flag on the right. Left corner has two Bombs and a stationary Sergeant that looks like a third Bomb."
          moves={[
            "Do not over-defend the decoy after contact—let them spend Miners.",
            "If they clear both Bombs and find no Flag, your real nest still needs its approach Bombs intact.",
            "Avoid moving every piece near the real Flag the moment they start clearing the decoy.",
            "Keep real-nest pieces quiet—see Protect Your Flag for active-defense timing.",
          ]}
          why="A believable decoy costs the opponent Miners and turns. An obvious decoy teaches them where you are not."
          avoid="Making the decoy louder than the real nest every single game."
        />

        <h2 id="cluster">Cluster vs spread</h2>
        <ul>
          <li>
            <strong>Tight cluster:</strong> hard first clear, soft once Miners
            arrive—one corridor can end the game.
          </li>
          <li>
            <strong>Spread traps:</strong> more early Bomb reveals, slower Flag
            mapping, weaker single choke.
          </li>
        </ul>
        <p>
          Most durable layouts mix both: choke the Flag, sprinkle traps
          elsewhere. Compare boards on{" "}
          <Link href="/stratego-setup">Setup</Link> and{" "}
          <Link href="/best-stratego-setup">setup comparison</Link>.
        </p>

        <h2 id="miner">When Miners start clearing</h2>
        <p>
          After the first approach Bomb falls, count remaining Bombs on the
          path vs remaining enemy Miners. If they still have a pair, assume they
          can finish a two-Bomb nest—shift officers to punish the Miner escort,
          not only the Miner. Deep escort cases:{" "}
          <Link href="/stratego-miner">Miner guide</Link>.
        </p>

        <h2 id="mistakes">Mistakes</h2>
        <ul>
          <li>All six Bombs in one corner with no distant traps.</li>
          <li>Bombs on squares nobody needs to enter.</li>
          <li>Assuming Bombs replace active Flag defense forever.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
