import type { Metadata } from "next";
import Link from "next/link";
import { SpyMarshal } from "@/components/diagrams/SpyMarshal";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Spy Guide: How the Spy Beats the Marshal";
const description =
  "Classic Original Stratego Spy guide: attack-only Marshal kill, corridor ambushes, baiting 10 forward, and when the Spy should stay hidden.";
const path = "/stratego-spy";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Does the Spy always beat the Marshal?",
    a: "Only when the Spy attacks the Marshal. If the Marshal attacks the Spy first, the Spy loses.",
  },
  {
    q: "Can the Spy beat other pieces?",
    a: "No. Against almost every other piece, the Spy loses in combat. Its special rule is Marshal-only.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function SpyPage() {
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
              { name: "Stratego Spy", path },
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
        intro="The Spy is not a scout and not a mid-rank fighter. This page is about the one job that matters: getting an attack on the Marshal without dying to everything else first."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Spy" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "rules", label: "Quick rules" },
          { id: "ambush", label: "Corridor ambush" },
          { id: "bait", label: "Bait the Marshal" },
          { id: "hide", label: "When to hide" },
          { id: "setup", label: "Setup habits" },
          { id: "mistakes", label: "Mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<SpyMarshal />}
        related={[
          { href: "/stratego-marshal", label: "Marshal Guide" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
          { href: "/stratego-ranks", label: "Ranks" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Quick rules</h2>
        <p>
          Rank S · quantity 1. Weakest fair fighter. If the Spy attacks the
          Marshal, the Spy wins. If almost anything attacks the Spy first, the
          Spy dies. Full table:{" "}
          <Link href="/stratego-pieces">Pieces codex</Link>.
        </p>

        <h2 id="ambush">Case: Corridor ambush on a committed Marshal</h2>
        <TacticCase
          title="Side-door attack"
          situation="Enemy Marshal is pushing down file e after winning two fights. Your Spy sits on g7 with a clear path to e7 if the e-file mid-ranks vacate."
          moves={[
            "Do not sprint the Spy early—wait until the Marshal is two squares deep and focused forward.",
            "Use a mid-rank or Scout elsewhere to pull attention off the g-file.",
            "Slide Spy to f7, then onto the Marshal’s adjacent square, then attack.",
            "If a Captain appears on the corridor, abort—Spies do not fight Captains.",
          ]}
          why="The Spy wins only by attacking. Geometry and timing beat raw courage."
          avoid="Running the Spy into the open the moment you suspect where the Marshal is."
        />

        <h2 id="bait">Case: Bait the Marshal into your Spy</h2>
        <TacticCase
          title="Soft piece as magnet"
          situation="You want the Marshal to step onto d5. Your Spy is ready on c6. An unknown low piece sits on d6."
          moves={[
            "Leave a replaceable piece on d5 that looks tempting but not like a Bomb.",
            "Do not reveal the Spy by moving it until the Marshal commits adjacent.",
            "If a General or Colonel takes the bait instead, do not spend the Spy—walk away.",
            "Attack only when the adjacent piece is confirmed or strongly inferred as 10.",
          ]}
          why="Wrong targets waste the only Marshal-killer. Patience beats false positives."
          avoid="Spy-attacking every strong-looking officer “just in case.”"
        />

        <h2 id="hide">When the Spy should stay hidden</h2>
        <ul>
          <li>Opponent’s Marshal is still undeployed and Spy paths are watched.</li>
          <li>You already forced the Marshal into Bomb risk—let Bombs do work.</li>
          <li>Your Flag is under Scout pressure; losing Spy for nothing helps nobody.</li>
        </ul>
        <p>
          Protecting your own 10 against enemy Spies:{" "}
          <Link href="/stratego-marshal">Marshal guide</Link>.
        </p>

        <h2 id="setup">Setup habits</h2>
        <p>
          Place the Spy where a future Marshal corridor is likely—often one or
          two rows behind the front, not on the back rank forever. See{" "}
          <Link href="/stratego-setup">setup boards</Link> for placement
          examples without copying a single fixed Spy square.
        </p>

        <h2 id="mistakes">Mistakes</h2>
        <ul>
          <li>Using the Spy as a Scout or early probe.</li>
          <li>Leaving Spy on a file Scouts can snipe for free information.</li>
          <li>Attacking a “probably Marshal” that is actually a Bomb or Colonel.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
