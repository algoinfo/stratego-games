import type { Metadata } from "next";
import Image from "next/image";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const title = "Stratego Strategy Guide: Opening to Endgame";
const description =
  "Classic Original Stratego strategy: opening plans, midgame trades, bluffing, information management, and endgame Flag hunting.";
const updated = "2026-11-15";
const path = "/stratego-strategy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function StrategyPage() {
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
              { name: "Stratego Strategy", path },
            ]),
          ),
        }}
      />
      <ArticleShell
        title={title}
        intro="Strategy in Stratego is information warfare wrapped in combat. This Classic Original guide organizes ideas by phase: opening, midgame, endgame, and risk."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Strategy" },
        ]}
        updated={updated}
        readingMinutes={14}
        toc={[
          { id: "opening", label: "Opening" },
          { id: "midgame", label: "Midgame" },
          { id: "endgame", label: "Endgame" },
          { id: "bluffing", label: "Bluffing" },
          { id: "info", label: "Information management" },
          { id: "trades", label: "Piece trading" },
          { id: "risk", label: "Risk management" },
        ]}
        hero={
          <figure className="diagram diagram--photo">
            <Image
              src="/images/strategy-command-table.jpg"
              alt="Stratego armies facing off on a command table with maps and military planning tools"
              width={1000}
              height={800}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
            <figcaption>
              Strategy is planning under uncertainty: every revealed piece and
              every quiet square updates the picture of the board.
            </figcaption>
          </figure>
        }
        related={[
          { href: "/stratego-tips", label: "Tips & Tricks" },
          { href: "/best-stratego-setup", label: "Setup Comparison" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
        ]}
      >
        <h2 id="opening">Opening</h2>
        <p>
          Early turns should buy safe information. Use Scouts on open lanes,
          probe with mid-ranks, and avoid revealing the Marshal without a plan.
          Note which enemy pieces refuse to move—immobile candidates matter.
        </p>

        <h2 id="midgame">Midgame</h2>
        <p>
          Convert discoveries into territorial pressure. Clear known Bombs with
          Miners, trade when the exchange improves your Flag hunt, and keep at
          least one elite ready to punish overextensions.
        </p>

        <h2 id="endgame">Endgame</h2>
        <p>
          When few movable pieces remain, Flag geography dominates. Preserve
          Miners, track remaining Bombs, and avoid giving free Scout paths into
          your last defensive squares.
        </p>

        <h2 id="bluffing">Bluffing</h2>
        <p>
          Bluffs work because pieces look identical until revealed. A stationary
          mid-rank can mimic a Bomb. A Scout that stops after one step can look
          like a higher officer. Do not bluff so often that patterns become
          readable.
        </p>

        <h2 id="info">Information management</h2>
        <p>
          Every attack is a trade of knowledge. Ask whether the revelation is
          worth the piece. Write mental notes: confirmed Bombs, likely Spy
          corridors, and pieces that behaved like Scouts.
        </p>

        <h2 id="trades">Piece trading</h2>
        <p>
          Equal trades can favor the player closer to cracking the Flag. Trading
          your last Miner for a Captain is often a disaster. Trading Scouts for
          Scouts is usually fine if it clarifies a lane.
        </p>

        <h2 id="risk">Risk management</h2>
        <p>
          The Marshal is powerful and fragile against the Spy. High-rank
          aggression without Spy awareness is a common losing pattern. Prefer
          forcing the opponent to move first into contested squares when the
          unknown piece could be catastrophic.
        </p>
      </ArticleShell>
    </>
  );
}
