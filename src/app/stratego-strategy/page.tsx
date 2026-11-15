import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TacticCase } from "@/components/guide/TacticCase";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Strategy Guide: Opening to Endgame";
const description =
  "Classic Original Stratego strategy with concrete cases: opening probes, Marshal protection, Miner preservation, midgame trades, bluffing, and endgame Flag hunts.";
const path = "/stratego-strategy";
const updated = routeUpdated(path);

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
        intro="This is the deep-tactics guide: phase analysis and concrete board cases for Classic Original play. If you want a short beginner checklist instead, start with Tips—then return here for opening probes, Marshal protection, Miner endgames, bluffs, and trades."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Strategy" },
        ]}
        updated={updated}
        readingMinutes={18}
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
          { href: "/stratego-tips", label: "Beginner Tips Checklist" },
          { href: "/stratego-setup", label: "Setup Boards" },
          { href: "/stratego-miner", label: "Miner Guide" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
        ]}
      >
        <p className="callout">
          <strong>Reading path:</strong> New players should finish the{" "}
          <Link href="/stratego-tips">Tips checklist</Link> first. This Strategy
          page assumes you already know not to burn the Marshal and last Miner
          casually—and then shows longer examples of how that looks on the board.
        </p>

        <h2 id="opening">Opening — probe without burning elites</h2>
        <p>
          Early turns should buy safe information. Use Scouts on open lanes,
          probe with mid-ranks, and avoid revealing the Marshal without a plan.
          Note which enemy pieces refuse to move—immobile candidates matter.
        </p>
        <TacticCase
          title="Case: Opening probe on a quiet file"
          situation="You face an unknown piece on the opponent’s front row at c3. Your Marshal sits on f8, three Miners are still behind your second row, and file c is otherwise empty."
          moves={[
            "Move a Scout from c9 up file c to the square in front of the unknown (stop one short if you only want a lane test).",
            "If the unknown never moves for several turns, mark it as a Bomb/Flag suspect—do not attack it with the Marshal.",
            "Next, advance a Lieutenant (5) or Sergeant (4) from an adjacent file to force a reveal if you need certainty.",
            "Keep all Miners off this fight unless the piece is already confirmed as a Bomb.",
          ]}
          why="Scouts and mid-ranks purchase information cheaply. The Marshal stays hidden, so a Spy or Bomb cannot delete your strongest piece on move eight."
          avoid="Charging the unknown with the Marshal, or spending two Miners on unverified front-row squares."
        />
        <div className="compare-pair">
          <div className="compare-card compare-card--good">
            <h3>Good opening</h3>
            <p>
              Open one Scout lane, test a quiet piece with a Lieutenant, and
              keep Miners behind the front until Bombs are more likely.
            </p>
          </div>
          <div className="compare-card compare-card--bad">
            <h3>Weak opening</h3>
            <p>
              Reveal the Marshal early, spend every Scout in the first ten
              moves, and leave no Miner for the Flag screen.
            </p>
          </div>
        </div>
        <p>
          Practice starting layouts on the{" "}
          <Link href="/stratego-setup">Setup Guide boards</Link> before
          committing to a style.
        </p>

        <h2 id="midgame">Midgame — convert info, protect the Marshal</h2>
        <p>
          Convert discoveries into territorial pressure. Clear known Bombs with
          Miners, trade when the exchange improves your Flag hunt, and keep at
          least one elite ready to punish overextensions.
        </p>
        <TacticCase
          title="Case: Protect the Marshal after a Scout dies to a Bomb"
          situation="Your Scout attacked g3 and died—Bomb confirmed. The opponent then advances an unknown piece toward your center. Your Marshal is on e7; your Spy is still unrevealed on the right wing."
          moves={[
            "Do not chase the advancing unknown with the Marshal.",
            "Slide a Major (7) or Captain (6) onto the contested file to meet the unknown first.",
            "If the unknown proves to be a high officer, only then decide whether the Marshal should enter—after checking Spy-threat corridors.",
            "Send one Miner toward g3 only after the approach is screened, so the Miner is not ambushed on the way.",
          ]}
          why="The Marshal’s job midgame is selective cleanup, not first contact. Mid-ranks absorb Spy risk; Miners arrive after the Bomb square is secured."
          avoid="Using the Marshal as a Scout, or walking a lone Miner onto g3 while enemy Scouts still control the lane."
        />

        <h2 id="endgame">Endgame — Miners decide Flag access</h2>
        <p>
          When few movable pieces remain, Flag geography dominates. Preserve
          Miners, track remaining Bombs, and avoid giving free Scout paths into
          your last defensive squares.
        </p>
        <TacticCase
          title="Case: Keep two Miners for a corner Flag nest"
          situation="You have identified the Flag zone as the opponent’s back-left corner. Two Bombs still guard approaches. You have three movable pieces left including two Miners and one Captain. The opponent has a Scout and a Major."
          moves={[
            "Use the Captain to block the enemy Scout’s open file into your own Flag—not to attack random Bombs.",
            "Advance Miners only along the cleared corridor toward the confirmed Bomb squares.",
            "Clear one Bomb, pause if the enemy Major can capture the second Miner for free, then clear the second Bomb when the path is safe.",
            "Step onto the Flag only after both approach Bombs are gone.",
          ]}
          why="Endgames are won by surviving Miners, not by heroic Captains. One preserved Miner often equals the game; zero Miners against two Bombs often equals a drawish stall or a loss."
          avoid="Trading your last Miner for the enemy Major just to “simplify,” leaving the Flag permanently locked."
        />

        <h2 id="bluffing">Bluffing — sell a fake Bomb, hide a real Scout</h2>
        <p>
          Bluffs work because pieces look identical until revealed. A stationary
          mid-rank can mimic a Bomb. A Scout that stops after one step can look
          like a higher officer. Do not bluff so often that patterns become
          readable.
        </p>
        <TacticCase
          title="Case: One-step Scout bluff on the flank"
          situation="File a is open. You want the opponent to think a high officer holds a5, but you only have a Scout available there. Your Marshal is safely elsewhere."
          moves={[
            "Move the Scout from a9 to a8 (one square only)—do not sprint the full file yet.",
            "Leave it idle for a turn while you fight on the opposite wing.",
            "If the opponent refuses to challenge a5/a8 with mid-ranks, later sprint the Scout for a real recon pass.",
            "Never place the Marshal behind that bluff square as “backup” until Spy risk is lower.",
          ]}
          why="Short Scout steps create officer ambiguity. Revealing the Scout only when you need the lane keeps the Marshal’s identity separate from the bluff."
          avoid="Sprinting every Scout on sight—opponents stop believing your slow pieces are officers."
        />

        <h2 id="info">Information management — log before you spend</h2>
        <p>
          Every attack is a trade of knowledge. Ask whether the revelation is
          worth the piece. Write mental notes: confirmed Bombs, likely Spy
          corridors, and pieces that behaved like Scouts.
        </p>
        <TacticCase
          title="Case: Three-note information sheet"
          situation="After twelve turns you know: Bomb on d3 (Scout died), a piece that raced from h2 to h8 (Scout behavior), and a piece that sat still on b9 for the whole opening (Bomb/Flag suspect)."
          moves={[
            "Write three labels: d3=Bomb, h-file runner=Scout, b9=immobile suspect.",
            "Plan Miner path toward d3 only if that Bomb blocks a Flag approach you care about.",
            "Do not send the Marshal onto the h-file runner’s neighborhood—Scouts rarely deserve Marshal attention.",
            "Probe b9 later with a mid-rank or Miner, never as your first Marshal fight.",
          ]}
          why="Information compounds. Players who attack without a note sheet re-discover the same Bomb with a better piece."
          avoid="Treating every unknown as equal urgency—Scout-like movers and silent corner pieces are different problems."
        />

        <h2 id="trades">Piece trading — never sell the last Miner cheap</h2>
        <p>
          Equal trades can favor the player closer to cracking the Flag. Trading
          your last Miner for a Captain is often a disaster. Trading Scouts for
          Scouts is usually fine if it clarifies a lane.
        </p>
        <TacticCase
          title="Case: Refuse a Miner-for-Captain trade"
          situation="An enemy Captain attacks your Miner on e5. You still have only one Miner left. Two enemy Bombs near the suspected Flag are still standing. You also have a Sergeant adjacent that can recapture."
          moves={[
            "Do not leave the Miner hanging if you can slide it away for free.",
            "If the Captain captures the Miner, recapture with the Sergeant only if that does not open a Scout lane into your Flag.",
            "Accept losing a Sergeant more readily than losing the last Miner.",
            "Re-route your Flag hunt: without Miners, you need the opponent to waste Bombs or blunder the Flag into the open.",
          ]}
          why="Captains are replaceable mid-ranks; last Miners are Flag keys. Classic Original math favors Bomb-clearing capacity over equal-looking exchanges."
          avoid="“Fair trade” thinking that ignores Bomb count remaining."
        />

        <h2 id="risk">Risk management — Marshal vs Spy corridors</h2>
        <p>
          The Marshal is powerful and fragile against the Spy. High-rank
          aggression without Spy awareness is a common losing pattern. Prefer
          forcing the opponent to move first into contested squares when the
          unknown piece could be catastrophic.
        </p>
        <TacticCase
          title="Case: Force the unknown to declare before the Marshal enters"
          situation="An unknown enemy piece sits on d5. You want that square for a Flag approach. Your Marshal is on d7; your Spy is on i8. You have a Captain on c6."
          moves={[
            "Advance the Captain to threaten d5 instead of the Marshal.",
            "If the unknown flees, follow with mid-ranks and keep the Marshal two squares back.",
            "If the unknown stands and wins against the Captain, mark its minimum strength—and still do not auto-send the Marshal if a Spy-path from the flank is open.",
            "Only commit the Marshal when the Spy is accounted for or the fight is forced on a square you control.",
          ]}
          why="Making the opponent spend the Spy (or reveal it) before Marshal contact removes the one-way exception that ends games instantly."
          avoid="Marching Marshal → unknown on principle because “10 always wins”—it does not, if the Spy attacks first."
        />
        <p>
          For piece-level detail, continue with the{" "}
          <Link href="/stratego-miner">Miner guide</Link>,{" "}
          <Link href="/stratego-scout">Scout guide</Link>, and{" "}
          <Link href="/protect-your-flag">Flag defense</Link> pages.
        </p>
      </ArticleShell>
    </>
  );
}
