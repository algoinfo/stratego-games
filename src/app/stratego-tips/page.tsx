import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Tips and Tricks for Beginners";
const description =
  "Beginner Stratego checklist for Classic Original: pre-game setup checks, first-move habits, Marshal and Miner safety rules, and common mistakes—without deep tactic essays.";
const updated = "2026-11-15";
const path = "/stratego-tips";

const faqs = [
  {
    q: "Is this the same as the Strategy guide?",
    a: "No. Tips is a beginner checklist of habits you can follow every game. The Strategy guide goes deeper with full board cases for opening probes, Marshal protection, Miner timing, and endgame decisions.",
  },
  {
    q: "What should I do first as a new player?",
    a: "Use the Before you start and First ten moves checklists below. After a few games, move to the Strategy guide for longer examples.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function TipsPage() {
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
              { name: "Stratego Tips", path },
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
        intro="Use this page as a beginner operations checklist for Classic Original Stratego. It tells you what to do before and during a game. For deeper board cases and phase-by-phase analysis, open the Strategy guide after you can follow these habits consistently."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Tips" },
        ]}
        updated={updated}
        readingMinutes={7}
        toc={[
          { id: "split", label: "Tips vs Strategy" },
          { id: "before", label: "Before you start" },
          { id: "first10", label: "First ten moves" },
          { id: "checklist", label: "Every-turn checklist" },
          { id: "safety", label: "Marshal & Miner safety" },
          { id: "avoid", label: "Mistake checklist" },
          { id: "next", label: "What to read next" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={
          <figure className="diagram diagram--photo">
            <Image
              src="/images/tips-ranks-setup.jpg"
              alt="Stratego piece strength ladder next to a sample starting board setup with Flag and Bomb placement"
              width={1024}
              height={829}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
            <figcaption>
              Checklist reminder: know the ranks, protect the Marshal, keep
              Miners for Bombs, and use Scouts for information—not for every
              fight.
            </figcaption>
          </figure>
        }
        related={[
          { href: "/how-to-play-stratego", label: "How to Play" },
          { href: "/stratego-strategy", label: "Strategy Guide (deep cases)" },
          { href: "/stratego-setup", label: "Setup Boards" },
        ]}
        faqs={faqs}
      >
        <h2 id="split">Tips vs Strategy — different jobs</h2>
        <div className="compare-pair">
          <div className="compare-card compare-card--good">
            <h3>This Tips page</h3>
            <p>
              Short checklists and do/don’t habits. Fast to scan before a game.
              No long tactical essays.
            </p>
          </div>
          <div className="compare-card">
            <h3>
              <Link href="/stratego-strategy">Strategy guide</Link>
            </h3>
            <p>
              Phase-by-phase analysis with concrete board cases: probing lines,
              Marshal corridors, Miner endgames, bluffs, and trades.
            </p>
          </div>
        </div>

        <h2 id="before">Before you start — setup checklist</h2>
        <ol className="tips-checklist">
          <li>Place the Flag where approaches can be covered.</li>
          <li>Put Bombs on approach squares—not only next to the Flag for looks.</li>
          <li>Leave Scout lanes open on at least one wing.</li>
          <li>Count five Miners; do not plan to spend them all early.</li>
          <li>Do not put the Marshal on the absolute front row by default.</li>
        </ol>
        <p>
          Need pictures? See the three full boards on the{" "}
          <Link href="/stratego-setup">Setup Guide</Link>.
        </p>

        <h2 id="first10">First ten moves — beginner script</h2>
        <ol className="tips-checklist">
          <li>Open one Scout lane on an empty file or rank.</li>
          <li>Test one quiet enemy piece with a mid-rank (4–6), not the Marshal.</li>
          <li>Mark any piece that never moves as a Bomb/Flag suspect.</li>
          <li>Keep Miners behind the front until you have a Bomb clue.</li>
          <li>Stop if you are about to reveal the Marshal for no gain.</li>
        </ol>

        <h2 id="checklist">Every-turn checklist (10 seconds)</h2>
        <ul className="tips-checklist tips-checklist--boxes">
          <li>What do I already know about this square?</li>
          <li>Is this attack worth the piece I might lose?</li>
          <li>Am I using Marshal / last Miner / last Scout too early?</li>
          <li>Did I leave a Scout lane into my own Flag open?</li>
        </ul>

        <h2 id="safety">Marshal &amp; Miner safety cards</h2>
        <div className="compare-pair">
          <div className="compare-card">
            <h3>Marshal — quick rules</h3>
            <ul>
              <li>Do not chase every unknown.</li>
              <li>Let mid-ranks meet new threats first.</li>
              <li>Remember: an attacking Spy beats the Marshal.</li>
            </ul>
          </div>
          <div className="compare-card">
            <h3>Miner — quick rules</h3>
            <ul>
              <li>Save at least one Miner for late Bombs.</li>
              <li>Do not trade your last Miner for a Captain.</li>
              <li>Clear confirmed Bombs, not every guess.</li>
            </ul>
          </div>
        </div>
        <p>
          Want full examples of Marshal corridors and Miner endgames? Read those
          cases in the{" "}
          <Link href="/stratego-strategy">Strategy guide</Link>—not repeated
          here.
        </p>

        <h2 id="avoid">Mistake checklist</h2>
        <ul className="tips-checklist tips-checklist--bad">
          <li>Chasing every unknown with the Marshal.</li>
          <li>Spending all Scouts in the opening.</li>
          <li>Ignoring pieces that never move.</li>
          <li>Leaving the Flag with open neighbors and no Bombs.</li>
          <li>Using the same Flag corner every single game.</li>
        </ul>

        <h2 id="next">What to read next</h2>
        <ol>
          <li>
            <Link href="/how-to-play-stratego">How to Play</Link> — if rules
            still feel fuzzy.
          </li>
          <li>
            <Link href="/stratego-setup">Setup boards</Link> — pick a starter
            formation.
          </li>
          <li>
            <Link href="/stratego-strategy">Strategy guide</Link> — deep tactics
            after you can run this checklist without thinking.
          </li>
        </ol>
      </ArticleShell>
    </>
  );
}
