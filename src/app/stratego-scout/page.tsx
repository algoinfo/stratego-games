import type { Metadata } from "next";
import Link from "next/link";
import { ScoutPath } from "@/components/diagrams/ScoutPath";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Scout Guide: Movement, Recon & Risks";
const description =
  "Deep Classic Original Stratego Scout guide: long-range recon cases, when to attack, when to bluff short steps, and how to keep late-game Scout eyes.";
const path = "/stratego-scout";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Can a Scout jump over pieces or lakes?",
    a: "No. A Scout needs a clear path of empty land squares along one straight orthogonal line. It cannot jump pieces or cross lakes.",
  },
  {
    q: "Does a long Scout move reveal its identity?",
    a: "Yes. A multi-square Scout sprint shows Scout behavior. One-square steps can stay ambiguous longer.",
  },
  {
    q: "Should Scouts attack unknown pieces?",
    a: "Only when the information is worth a Scout. Prefer lane mapping first; attack to confirm Bombs, Flags, or soft pieces.",
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
              { name: "Pieces", path: "/stratego-pieces" },
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
        intro="This page goes beyond the piece table: concrete Scout recon patterns for Classic Original play—how to map files, confirm Bombs without wasting the whole pack, and keep Scouts alive for the Flag hunt."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Scout" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "rules", label: "Quick rules" },
          { id: "recon", label: "Recon case" },
          { id: "bomb", label: "Bomb confirm case" },
          { id: "bluff", label: "Short-step bluff" },
          { id: "reserve", label: "Late Scout reserve" },
          { id: "mistakes", label: "Mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<ScoutPath />}
        related={[
          { href: "/stratego-miner", label: "Miner Guide" },
          { href: "/stratego-bomb", label: "Bomb Guide" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Quick rules</h2>
        <p>
          Rank 2 · quantity 8. A Scout moves any number of clear squares in one
          straight orthogonal line. It cannot jump over pieces or cross lakes. In
          Classic Original, it may attack at the end of that clear straight-line
          move. A multi-square Scout move reveals Scout identity. Loses to almost
          every combat piece. Full reference:{" "}
          <Link href="/stratego-pieces">Pieces codex</Link>.
        </p>

        <h2 id="recon">Case: Map a silent wing without dying</h2>
        <TacticCase
          title="Empty-file sweep"
          situation="File a is empty from a9 to a4. An unknown sits on a3 and has not moved. You still have six Scouts; Marshal and Miners are uncommitted."
          moves={[
            "Sprint a Scout from a9 to a4 (stop short of the unknown).",
            "Wait one turn. If a3 stays still, label it immobile-suspect.",
            "Do not attack a3 with a second Scout yet—save that for when Flag geography matters.",
            "Open a second file (e.g. j) the same way so you are not tunnel-visioned on one wing.",
          ]}
          why="Stopping short converts geometry into information without paying a Scout into a likely Bomb."
          avoid="Ramming every front-row unknown on sight until you have zero late Scouts."
        />

        <h2 id="bomb">Case: Confirm a Bomb for the Miner</h2>
        <TacticCase
          title="Scout dies with purpose"
          situation="You need to know if d3 is a Bomb before sending a Miner. Mid-ranks are busy elsewhere. You can afford one Scout."
          moves={[
            "Clear the d-file path with prior moves so the Scout can reach d4.",
            "Attack d3 with the Scout at the end of a clear straight-line move.",
            "If the Scout dies and the Bomb remains, mark d3=Bomb and route a Miner later under escort.",
            "A Scout that attacks a Bomb is always removed. Only a Miner can defeat and remove a Bomb. A successful Scout attack therefore confirms that the target was not a Bomb.",
          ]}
          why="A planned Scout sacrifice that unlocks a Miner path is cheaper than guessing with officers. Scout-vs-Bomb never clears the Bomb."
          avoid="Confirming every Bomb with Scouts when a quiet immobile piece is not on a Flag approach."
        />

        <h2 id="bluff">Case: One-square Scout officer bluff</h2>
        <TacticCase
          title="Sell a fake 6/7"
          situation="You want pressure on file b without revealing a Captain. Only a Scout is free on b9."
          moves={[
            "Move Scout b9→b8 (one step only).",
            "Leave it idle while you fight on the opposite wing.",
            "If challenged by a low piece, accept the reveal; if ignored, sprint later for real recon.",
          ]}
          why="Short steps create officer ambiguity; full-file sprints announce Scout immediately."
          avoid="Bluffing every Scout the same way—patterns get read."
        />

        <h2 id="reserve">Late Scout reserve</h2>
        <p>
          Keep 1–2 Scouts unused until Bombs near the Flag are known. Late Scouts
          find the last open approach after Miners clear the first Bomb. See also{" "}
          <Link href="/stratego-miner">Miner timing</Link> and{" "}
          <Link href="/protect-your-flag">Flag defense</Link>.
        </p>

        <h2 id="mistakes">Mistakes</h2>
        <ul>
          <li>Zero Scouts left when the Flag pocket finally opens.</li>
          <li>Blocking your own Scout files with cluttered mid-ranks.</li>
          <li>Using Scouts as default attackers against unknown officers.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
