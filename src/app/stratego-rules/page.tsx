import type { Metadata } from "next";
import Image from "next/image";
import { BombMiner } from "@/components/diagrams/BombMiner";
import { RankLadder } from "@/components/diagrams/RankLadder";
import { ScoutPath } from "@/components/diagrams/ScoutPath";
import { SpyMarshal } from "@/components/diagrams/SpyMarshal";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Rules Explained (Classic Original)";
const description =
  "Clear Classic Original Stratego rules: board layout, 40-piece armies, movement, Scout travel, Bombs, Spy vs Marshal, and Flag capture.";
const updated = "2026-11-15";
const path = "/stratego-rules";

const faqs = [
  {
    q: "What happens when two equal ranks attack?",
    a: "Both pieces are removed. Equal-rank collisions are mutual destruction in Classic Original combat.",
  },
  {
    q: "Can Bombs move?",
    a: "No. Bombs and the Flag are immobile for the entire game.",
  },
  {
    q: "Do Scouts jump over pieces?",
    a: "No. Scouts move through empty land squares only and stop before blocked paths.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function StrategoRulesPage() {
  const toc = [
    { id: "objective", label: "Objective" },
    { id: "board", label: "Board layout" },
    { id: "army", label: "Army composition" },
    { id: "ranks", label: "Ranks" },
    { id: "movement", label: "Movement" },
    { id: "scout", label: "Scout movement" },
    { id: "attacks", label: "Attacks" },
    { id: "bombs", label: "Bombs and Miners" },
    { id: "spy", label: "Spy and Marshal" },
    { id: "flag", label: "Flag capture" },
    { id: "winning", label: "Winning conditions" },
    { id: "faq", label: "FAQ" },
  ];

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
              { name: "Stratego Rules", path },
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
        intro="This page explains Classic Original Stratego rules only. Other editions and variants can differ—do not mix Duel or Infiltrator piece sets into this framework."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Stratego Rules" },
        ]}
        updated={updated}
        readingMinutes={12}
        toc={toc}
        hero={
          <figure className="diagram diagram--photo">
            <Image
              src="/images/rules-board-setup.jpg"
              alt="Classic Original Stratego starting setup: red army ranks revealed, blue army hidden, lakes in the center, piece counts on both sides"
              width={1024}
              height={781}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
            <figcaption>
              Starting position example: each side deploys 40 pieces on four
              rows. Your ranks stay hidden from the opponent until combat
              reveals them.
            </figcaption>
          </figure>
        }
        related={[
          { href: "/how-to-play-stratego", label: "How to Play Stratego" },
          { href: "/stratego-pieces", label: "Stratego Pieces Reference" },
          { href: "/stratego-ranks", label: "Stratego Piece Rankings" },
        ]}
        faqs={faqs}
      >
        <h2 id="objective">Objective</h2>
        <p>
          Capture the opponent’s Flag. The Flag is immobile and hidden among
          the army until discovered through combat or forced reveals at the
          table.
        </p>

        <h2 id="board">Board layout</h2>
        <p>
          The board is a 10×10 grid. Two 2×2 lake areas in the center are
          impassable. Each player deploys on the four rows nearest their side.
        </p>

        <h2 id="army">Classic Original piece count</h2>
        <p>
          Each army has 40 pieces: Marshal (1), General (1), Colonels (2),
          Majors (3), Captains (4), Lieutenants (4), Sergeants (4), Miners (5),
          Scouts (8), Spy (1), Bombs (6), Flag (1).
        </p>

        <h2 id="ranks">Piece ranks</h2>
        <p>
          In a standard fight, the higher rank wins and the lower rank is
          removed. Equal ranks destroy each other. Bombs, the Flag, and the Spy
          introduce exceptions covered below.
        </p>
        <RankLadder />

        <h2 id="movement">Movement</h2>
        <p>
          Most movable pieces move one square orthogonally per turn onto empty
          land. Pieces cannot enter lakes, leave the board, or occupy squares
          held by friendly pieces.
        </p>
        <p>Bombs and the Flag never move.</p>

        <h2 id="scout">Scout movement</h2>
        <p>
          Scouts may move any number of squares in a straight orthogonal line
          through empty land squares. They may end the move by attacking an
          enemy on the final square of that line path according to normal attack
          rules.
        </p>
        <ScoutPath />

        <h2 id="attacks">Attacks</h2>
        <p>
          To attack, move onto a square occupied by an enemy piece. Both ranks
          are revealed for the clash. The winner remains on the square (or both
          leave if equal ranks collide), except where special Bomb/Spy rules
          apply.
        </p>
        <div className="compare-pair">
          <div className="compare-card compare-card--good">
            <h3>Better attack habit</h3>
            <p>
              Probe unknowns with mid-ranks or Scouts first so your Marshal is
              not the piece that discovers a Bomb or a Spy.
            </p>
          </div>
          <div className="compare-card compare-card--bad">
            <h3>Riskier attack habit</h3>
            <p>
              Sending the Marshal into every unknown square turns one Spy or
              Bomb into a game-changing loss.
            </p>
          </div>
        </div>

        <h2 id="bombs">Bombs and Miners</h2>
        <p>
          Bombs are immobile traps. If any piece except a Miner attacks a Bomb,
          the attacker is removed and the Bomb stays. If a Miner attacks a Bomb,
          the Bomb is removed and the Miner survives.
        </p>
        <BombMiner />

        <h2 id="spy">Spy and Marshal interaction</h2>
        <p>
          The Spy is the weakest combat piece in open fights, but if the Spy
          attacks the Marshal, the Spy wins. If the Marshal attacks the Spy, the
          Marshal wins. Direction of attack is the entire difference.
        </p>
        <SpyMarshal />

        <h2 id="flag">Flag capture</h2>
        <p>
          Any enemy piece that moves onto the Flag captures it and wins the
          game. The Flag cannot move or attack.
        </p>

        <h2 id="winning">Winning conditions</h2>
        <ul>
          <li>Primary win: capture the opponent’s Flag.</li>
          <li>
            Some groups also end the game when a player has no remaining movable
            pieces. Confirm this house rule before play; Classic Original table
            practice can vary on rare terminal cases.
          </li>
        </ul>
      </ArticleShell>
    </>
  );
}
