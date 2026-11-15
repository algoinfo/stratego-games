import type { Metadata } from "next";
import Link from "next/link";
import { SpyMarshal } from "@/components/diagrams/SpyMarshal";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Marshal Guide: Protect Your Strongest Piece";
const description =
  "Classic Original Stratego Marshal guide: how to protect rank 10, avoid Spy ambushes, time elite entry, and stop using the Marshal as a Scout.";
const path = "/stratego-marshal";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "What beats the Marshal?",
    a: "A Bomb removes almost any attacker including the Marshal. An attacking Spy also defeats the Marshal. In fair fights against other officers, the Marshal wins.",
  },
  {
    q: "Should the Marshal lead the attack?",
    a: "Rarely. Mid-ranks should meet unknowns first. The Marshal cleans up known fights once Spy and Bomb risk drop.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function MarshalPage() {
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
              { name: "Stratego Marshal", path },
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
        intro="The Marshal (10) wins fair fights—and still loses games when used like a Scout. This guide is about protection patterns: who meets unknowns first, when the Marshal enters, and how Spy corridors end careless advances."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-pieces", label: "Pieces" },
          { label: "Marshal" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "rules", label: "Quick rules" },
          { id: "screen", label: "Screening case" },
          { id: "spy", label: "Spy corridor case" },
          { id: "timing", label: "When to enter" },
          { id: "setup", label: "Setup placement" },
          { id: "mistakes", label: "Mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<SpyMarshal />}
        related={[
          { href: "/stratego-spy", label: "Spy Guide" },
          { href: "/stratego-bomb", label: "Bomb Guide" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
          { href: "/stratego-pieces", label: "All Pieces" },
        ]}
        faqs={faqs}
      >
        <h2 id="rules">Quick rules</h2>
        <p>
          Rank 10 · quantity 1. Strongest fair-fight officer. Dies to Bombs and
          to an attacking Spy. Full stats:{" "}
          <Link href="/stratego-pieces">Pieces codex</Link>.
        </p>

        <h2 id="screen">Case: Mid-rank screen before Marshal contact</h2>
        <TacticCase
          title="Unknown on the center file"
          situation="Unknown enemy on e5. Your Marshal sits on e8. You have a Captain on d6 and no Spy information yet."
          moves={[
            "Advance the Captain toward e5—do not move the Marshal first.",
            "If the unknown flees, follow with mid-ranks; keep Marshal two squares back.",
            "If the Captain dies to a high officer, update minimum strength before considering Marshal entry.",
            "Only then decide whether the Marshal should take the square.",
          ]}
          why="Screens force declarations. The Marshal should arrive as cleanup, not as the probe."
          avoid="Marshal walks onto every unknown because “10 always wins.”"
        />

        <h2 id="spy">Case: Close the Spy corridor</h2>
        <TacticCase
          title="Flank path into the Marshal"
          situation="Your Marshal is fighting on the left. A quiet enemy piece has a clear path along rank 7 toward your Marshal’s rear."
          moves={[
            "Place a mid-rank on the corridor square before the next Marshal advance.",
            "Do not chase forward if that leaves the rear file empty.",
            "If the quiet piece starts sprinting, treat Scout/Spy possibilities differently—Scouts race; Spies often creep.",
            "Reassess before the next Marshal push—see the Spy guide for ambush patterns.",
          ]}
          why="Spies need a path. Blocking corridors matters more than winning one extra square with the Marshal."
          avoid="Leaving the Marshal’s back open while celebrating a front-line win."
        />

        <h2 id="timing">When the Marshal should enter</h2>
        <ul>
          <li>After a Bomb on the approach is confirmed or cleared.</li>
          <li>After mid-ranks have narrowed the unknown’s minimum rank.</li>
          <li>When the opponent’s Spy is revealed, captured, or path-blocked.</li>
        </ul>
        <p>
          Deeper Spy timing: <Link href="/stratego-spy">Spy guide</Link>. Bomb
          risk: <Link href="/stratego-bomb">Bomb guide</Link>.
        </p>

        <h2 id="setup">Setup placement habits</h2>
        <p>
          Keep the Marshal responsive but not on the front row by default. Many
          balanced setups hold 10 one row back—see{" "}
          <Link href="/stratego-setup">setup boards</Link>.
        </p>

        <h2 id="mistakes">Mistakes</h2>
        <ul>
          <li>Using the Marshal as your primary Scout.</li>
          <li>Ignoring Spy-path geometry after a center breakthrough.</li>
          <li>Parking 10 forever so the General does all the work for no reason.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
