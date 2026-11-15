import type { Metadata } from "next";
import Link from "next/link";
import { BombMiner } from "@/components/diagrams/BombMiner";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Miner Guide: Clearing Bombs Safely";
const description =
  "Deep Classic Original Stratego Miner guide: how to clear Bombs, escort Miners to Flag pockets, refuse bad trades, and keep bomb-clearing power for the endgame.";
const path = "/stratego-miner";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Can any piece remove a Bomb?",
    a: "Only Miners remove Bombs safely in Classic Original.",
  },
  {
    q: "How many Miners should I keep for the endgame?",
    a: "Aim for at least one or two until Flag approaches are identified. Exact needs track remaining Bombs.",
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
              { name: "Pieces", path: "/stratego-pieces" },
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
        intro="Beyond the piece table: how to actually clear Bombs in Classic Original games—confirmation, escort routes, endgame math, and the trades that permanently strand you outside a Flag nest."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Miner" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "rules", label: "Quick rules" },
          { id: "confirm", label: "Confirm then clear" },
          { id: "escort", label: "Escort case" },
          { id: "trade", label: "Refuse bad trades" },
          { id: "endgame", label: "Endgame Bomb math" },
          { id: "mistakes", label: "Mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<BombMiner />}
        related={[
          { href: "/stratego-bomb", label: "Bomb Guide" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-scout", label: "Scout Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Quick rules</h2>
        <p>
          Rank 3 · quantity 5. One-square moves. Defeats Bombs; loses to most
          officers. Reference:{" "}
          <Link href="/stratego-pieces">Pieces codex</Link>.
        </p>

        <h2 id="confirm">Case: Confirm then clear</h2>
        <TacticCase
          title="Bomb on the Flag approach"
          situation="Scout died on c8—Bomb confirmed. Flag is likely behind c9. You have three Miners left and an enemy Major lurking on b7."
          moves={[
            "Do not race a naked Miner onto c8 while b7 can capture it for free.",
            "Use a Sergeant/Captain to contest b7 or force the Major to declare.",
            "Only then step the Miner onto c8, clear the Bomb, and occupy c8.",
            "Pause before the next Bomb if the opponent can recapture the Miner with tempo.",
          ]}
          why="Miners clear Bombs; they do not win fights with Majors. Escort first, clear second."
          avoid="Opening with Miner rushes into unknown clusters “just in case.”"
        />

        <h2 id="escort">Case: Two-Bomb corner needs two Miners</h2>
        <TacticCase
          title="Preserve a pair"
          situation="Opponent Flag nest has Bombs on b9 and c8. You have exactly two Miners and one Lieutenant remaining."
          moves={[
            "Clear b9 first if that opens the safer approach.",
            "Keep the second Miner off the board edge until the first clear succeeds.",
            "If the Lieutenant must die to stop a Scout from sniping a Miner, that trade is usually correct.",
            "Step on the Flag only after both approach Bombs are gone.",
          ]}
          why="One Miner vs two approach Bombs often fails. Pair preservation is the whole endgame plan."
          avoid="Trading your second Miner for a Captain earlier in the midgame for “board control.”"
        />

        <h2 id="trade">Case: Refuse Miner-for-Captain</h2>
        <TacticCase
          title="Last Miner hanging"
          situation="Enemy Captain attacks your last Miner. Two Flag Bombs still stand."
          moves={[
            "Slide the Miner away if a safe square exists.",
            "If capture is forced, recapture only when it does not open your own Flag to a Scout.",
            "Accept a worse piece trade elsewhere rather than living with zero Miners.",
          ]}
          why="Captains are replaceable; last Miners are Flag keys."
          avoid="Calling it a “fair exchange” while Bombs still lock the win."
        />

        <h2 id="endgame">Endgame Bomb math</h2>
        <p>
          Count: enemy Bombs remaining vs your Miners remaining. If Bombs &gt;
          Miners on the critical approach, you need blunders, decoys, or a Flag
          that was never as guarded as it looked. Pair with{" "}
          <Link href="/stratego-bomb">Bomb placement patterns</Link>.
        </p>

        <h2 id="mistakes">Mistakes</h2>
        <ul>
          <li>All five Miners spent before any Flag clue exists.</li>
          <li>Unescorted Miners walking into officer ambushes.</li>
          <li>Clearing decorative Bombs far from the Flag first.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
