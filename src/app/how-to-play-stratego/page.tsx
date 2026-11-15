import type { Metadata } from "next";
import Image from "next/image";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "How to Play Stratego: Beginner Walkthrough";
const description =
  "Learn how to play Classic Original Stratego step by step: board, setup, turns, movement, attacks, and how to win.";
const path = "/how-to-play-stratego";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Who sets up first?",
    a: "Both players set up privately on their four rows before the first move. After setup, players usually alternate turns, with a predetermined first player.",
  },
  {
    q: "Can I rearrange after seeing an enemy piece?",
    a: "No. Setup is locked before play begins. Discovery happens only through movement and combat.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function HowToPlayPage() {
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
              { name: "How to Play Stratego", path },
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
        intro="New to Stratego? Follow this Classic Original walkthrough from empty board to Flag capture—no variant rules mixed in."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "How to Play" },
        ]}
        updated={updated}
        readingMinutes={10}
        toc={[
          { id: "what", label: "What you need" },
          { id: "board", label: "Know the board" },
          { id: "setup", label: "Set up your army" },
          { id: "turn", label: "Take turns" },
          { id: "move", label: "Move and attack" },
          { id: "special", label: "Remember special pieces" },
          { id: "win", label: "How you win" },
          { id: "next", label: "What to study next" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={
          <figure className="diagram diagram--photo">
            <Image
              src="/images/how-to-play-setup.png"
              alt="Blue army setup on four deployment rows with ranks and Bombs visible during arrangement"
              width={632}
              height={332}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
            <figcaption>
              Setup example: place all 40 pieces on your four rows before the
              game starts. Your opponent only sees the backs of your pieces.
            </figcaption>
          </figure>
        }
        related={[
          { href: "/stratego-rules", label: "Full Stratego Rules" },
          { href: "/stratego-setup", label: "Setup Guide" },
          { href: "/stratego-tips", label: "Beginner Tips" },
        ]}
        faqs={faqs}
      >
        <h2 id="what">1. What you need</h2>
        <p>
          Two players, a Classic Original Stratego set (or equivalent 40-piece
          armies), and agreement to use Original rules for ranks, Bombs, Scouts,
          and Spy combat.
        </p>

        <h2 id="board">2. Know the board</h2>
        <p>
          The board is ten squares by ten. Lakes in the center cannot be
          entered. You place all 40 of your pieces on the four rows on your
          side before the game starts.
        </p>

        <h2 id="setup">3. Set up your army</h2>
        <p>
          Arrange pieces privately. Put the Flag somewhere you can defend,
          surround likely approaches with Bombs, and keep Miners available for
          later. Scouts often belong where they can open lanes quickly.
        </p>
        <div className="callout">
          <strong>Tip:</strong> For your first games, use a balanced setup
          rather than an all-in aggressive front. Open the{" "}
          <a href="/stratego-setup">Setup Guide</a> to see three full 10×10
          board layouts (Defensive, Balanced, Aggressive).
        </div>

        <h2 id="turn">4. Take turns</h2>
        <p>
          Players alternate turns. On your turn, move one movable piece
          according to its movement rules. Bombs and the Flag stay put forever.
        </p>

        <h2 id="move">5. Move and attack</h2>
        <p>
          Move onto empty land to reposition. Move onto an enemy to attack.
          Reveal ranks, resolve the fight, and remove the loser (or both if
          ranks are equal).
        </p>

        <h2 id="special">6. Remember the special pieces</h2>
        <ul>
          <li>Scouts can race along open files and ranks.</li>
          <li>Miners are the only safe Bomb clearers.</li>
          <li>A Spy that attacks the Marshal wins that fight.</li>
          <li>Any piece that steps on the Flag wins the game.</li>
        </ul>

        <h2 id="win">7. How you win</h2>
        <p>
          Capture the Flag. Until then, gather information carefully—every
          attack teaches your opponent something too.
        </p>

        <h2 id="next">8. What to study next</h2>
        <p>
          After one or two practice games, read the piece reference and a setup
          guide. Then move into strategy: when to trade, when to bluff, and how
          to hunt the Flag without feeding your Marshal to a Spy.
        </p>
      </ArticleShell>
    </>
  );
}
