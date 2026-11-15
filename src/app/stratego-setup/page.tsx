import type { Metadata } from "next";
import { FormationDiagram } from "@/components/diagrams/FormationDiagram";
import { SetupExplorer } from "@/components/setup/SetupExplorer";
import { StaticSetupGallery } from "@/components/setup/StaticSetupBoard";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Setup Guide: Flag, Bombs & Formations";
const description =
  "Learn Classic Original Stratego setup with three real 10×10 board layouts—Defensive, Balanced, and Aggressive—plus Flag, Bomb, Scout, and Miner placement tips.";
const path = "/stratego-setup";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Should the Flag always be in a corner?",
    a: "Corners are common and often strong, but predictable corners invite focused Bomb-clearing. Mix Flag locations across games.",
  },
  {
    q: "How many Bombs should guard the Flag?",
    a: "There is no fixed rule. Many players dedicate two to four Bombs to Flag approaches and keep the rest for front or mid traps.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function SetupPage() {
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
              { name: "Stratego Setup", path },
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
        intro="Setup is half the game. Below are three complete Classic Original 10×10 boards (Defensive, Balanced, Aggressive), then placement principles and an interactive explorer."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Setup" },
        ]}
        updated={updated}
        readingMinutes={14}
        toc={[
          { id: "boards", label: "Three board layouts" },
          { id: "diagrams", label: "Formation diagrams" },
          { id: "explorer", label: "Interactive explorer" },
          { id: "flag", label: "Flag placement" },
          { id: "bombs", label: "Bomb positioning" },
          { id: "high", label: "High-rank positioning" },
          { id: "scouts", label: "Scout distribution" },
          { id: "miners", label: "Miner positioning" },
          { id: "examples", label: "Good vs risky habits" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "faq", label: "FAQ" },
        ]}
        related={[
          { href: "/best-stratego-setup", label: "Best Setup Comparison" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="boards">Three 10×10 setup boards</h2>
        <p>
          Each board shows the full Classic Original army (40 pieces) on your
          four deployment rows, with lakes in the center and the opponent side
          hidden. Piece ranks are printed on every square.
        </p>
        <StaticSetupGallery />

        <h2 id="diagrams">Formation diagrams</h2>
        <p>
          The same three armies as focused deployment charts (your four rows
          only):
        </p>
        <FormationDiagram style="defensive" />
        <FormationDiagram style="balanced" />
        <FormationDiagram style="aggressive" />

        <h2 id="explorer">Interactive setup explorer</h2>
        <p>
          Switch layouts, click any piece for its name and role, and use Compare
          to weigh strengths and weaknesses.
        </p>
        <SetupExplorer />

        <h2 id="flag">Flag placement</h2>
        <p>
          The Flag must sit on one of your four setup rows. Strong placements
          usually have limited approach squares that Bombs and mid-ranks can
          cover. Extremely obvious corners can be fine against casual play and
          fragile against experienced Miners.
        </p>

        <h2 id="bombs">Bomb positioning</h2>
        <p>
          Bombs are immobile tripwires. Place them on squares enemies must
          enter to reach the Flag, or on tempting front-line squares that punish
          reckless Scouts. Leaving every Bomb glued to the Flag wastes their
          deterrent value elsewhere.
        </p>

        <h2 id="high">High-rank positioning</h2>
        <p>
          Marshal and General should be ready to respond, not stranded behind
          dead Bombs. Many players keep one elite near each wing or hold the
          Marshal slightly back until the Spy threat is better understood.
        </p>

        <h2 id="scouts">Scout distribution</h2>
        <p>
          Spread Scouts so open files and ranks become reconnaissance tools.
          Stacking all eight Scouts in one corner wastes their mobility.
        </p>

        <h2 id="miners">Miner positioning</h2>
        <p>
          Keep Miners alive into the midgame. Front-loading every Miner into
          suicide probes can leave you unable to clear Flag Bombs later.
        </p>

        <h2 id="examples">Good vs risky habits</h2>
        <div className="compare-pair">
          <div className="compare-card compare-card--good">
            <h3>Better</h3>
            <p>
              Flag with Bombs on approach squares, Scouts on both wings, and at
              least two Miners held for the late Flag screen.
            </p>
          </div>
          <div className="compare-card compare-card--bad">
            <h3>Riskier</h3>
            <p>
              Flag on an open edge with no Bombs nearby, Marshal on the front
              row, and all Miners spent in the first ten moves.
            </p>
          </div>
        </div>

        <h2 id="mistakes">Common mistakes</h2>
        <ul>
          <li>Flag with zero Bomb coverage on obvious approach squares.</li>
          <li>All Bombs in one cluster that a single Miner corridor can open.</li>
          <li>Marshal parked on the front row from move one.</li>
          <li>No Scouts with clear lanes after the first few trades.</li>
          <li>Miners spent early against unknown mid-ranks.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
