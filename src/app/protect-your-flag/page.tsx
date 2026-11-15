import type { Metadata } from "next";
import Link from "next/link";
import { FormationDiagram } from "@/components/diagrams/FormationDiagram";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "How to Protect Your Flag in Stratego";
const description =
  "Deep Classic Original Stratego Flag defense: approach control cases, Bomb screens, decoy nests, Scout-lane plugs, and leaks that give the Flag away.";
const path = "/protect-your-flag";
const updated = routeUpdated(path);

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
        intro="Flag protection is geography plus discipline. This page is not a piece glossary—it walks concrete defense cases: which squares matter, how decoys waste Miners, and how not to advertise the nest when Scouts arrive."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-setup", label: "Setup" },
          { label: "Protect Your Flag" },
        ]}
        updated={updated}
        readingMinutes={12}
        toc={[
          { id: "goal", label: "Defense goals" },
          { id: "approach", label: "Approach case" },
          { id: "decoy", label: "Decoy nest case" },
          { id: "scout", label: "Scout-lane plug" },
          { id: "active", label: "Active defense" },
          { id: "mistakes", label: "Common leaks" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<FormationDiagram style="defensive" showLegend={false} />}
        related={[
          { href: "/stratego-bomb", label: "Bomb Guide" },
          { href: "/stratego-miner", label: "Miner Guide" },
          { href: "/stratego-setup", label: "Setup Guide" },
          { href: "/best-stratego-setup", label: "Setup Comparison" },
        ]}
        faqs={faqs}
      >
        <h2 id="goal">Defense goals</h2>
        <p>
          Force attackers through costly squares, delay Miner access, and keep
          the Flag location ambiguous. Rules and army counts live on{" "}
          <Link href="/stratego-pieces">Pieces</Link>; here we train habits.
        </p>

        <h2 id="approach">Case: Defend the entry, not the wallpaper</h2>
        <TacticCase
          title="Two-square choke"
          situation="Flag on a10. Attackers need a9 or b10. You placed Bombs on a10’s diagonal neighbors that nobody must step on."
          moves={[
            "Move Bomb priority onto a9 and b10—the forced entries.",
            "Park a mid-rank one square off the choke so a Scout cannot free-check both approaches in one turn.",
            "If one Bomb falls, treat the remaining approach as critical: escort killers onto that file.",
            "Do not reshuffle every nearby piece the moment contact starts.",
          ]}
          why="The Flag cell is not the win condition for the attacker until they can enter an adjacent approach. Bombs belong on those squares."
          avoid="Surrounding the Flag while leaving both corridors empty."
        />

        <h2 id="decoy">Case: Quiet real nest, loud false nest</h2>
        <TacticCase
          title="Opposite-corner decoy"
          situation="Real Flag right-back. Left-back has two Bombs and a never-moved Sergeant. Opponent starts clearing left with Miners."
          moves={[
            "Let them clear—do not “help” by sending elites to save a decoy.",
            "Keep real-nest officers still unless a Scout is already on your approach.",
            "After they find no Flag, expect a fast pivot; pre-position one mid-rank toward the real choke without racing every piece.",
            "If they still have two Miners, assume your two approach Bombs can fall—plan officer punishment, not hope.",
          ]}
          why="Decoys buy turns only if the real nest stays quieter than the fake one."
          avoid="Panicking and moving the entire Flag zone the moment the decoy is touched."
        />

        <h2 id="scout">Case: Plug the Scout lane before the Flag check</h2>
        <TacticCase
          title="Open file into the nest"
          situation="File a is empty from a5 to a9. Enemy Scout sits on a4. Your Flag is on a10 with Bomb on a9."
          moves={[
            "Step a mid-rank onto a6 or a7 before the Scout races—break the long path.",
            "If the Scout already reached a8, do not move the Bomb; punish with an adjacent officer if safe.",
            "Save your own Scouts to see whether they are probing Flag or mapping Bombs elsewhere.",
            "If the lane stays open, assume a Flag check is coming within a few turns.",
          ]}
          why="Scouts win Flag races on empty files. Closing the lane is Flag defense, not optional tidying."
          avoid="Ignoring empty files because “Bombs are already next to the Flag.”"
        />

        <h2 id="active">Active defense after contact</h2>
        <ul>
          <li>Reposition mid-ranks to plug Scout lanes.</li>
          <li>Keep an officer ready to punish Flag-hunting Scouts that miss a Bomb.</li>
          <li>
            Track enemy Miner count—see{" "}
            <Link href="/stratego-miner">Miner guide</Link> and{" "}
            <Link href="/stratego-bomb">Bomb guide</Link>.
          </li>
        </ul>

        <h2 id="mistakes">Common leaks</h2>
        <ul>
          <li>Flag on an edge with two open approaches and no Bombs.</li>
          <li>All Bombs clustered so one cleared corridor ends the game.</li>
          <li>Overreacting and moving every nearby piece, advertising the zone.</li>
          <li>Never changing Flag habits across matches.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
