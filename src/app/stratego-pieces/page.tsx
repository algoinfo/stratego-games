import type { Metadata } from "next";
import Link from "next/link";
import { PieceExplorer } from "@/components/pieces/PieceExplorer";
import { PieceVisualCodex } from "@/components/pieces/PieceVisualCodex";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { ORIGINAL_PIECES, TOTAL_PIECES } from "@/content/pieces";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const title = "Stratego Pieces Guide: Roles, Quantities & Abilities";
const description =
  "Classic Original Stratego piece visual codex: all 12 types with gallery focus on Marshal, Spy, Miner, and Scout, plus quantities, abilities, and interactive chart.";
const updated = "2026-11-15";
const path = "/stratego-pieces";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function PiecesPage() {
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
              { name: "Stratego Pieces", path },
            ]),
          ),
        }}
      />
      <ArticleShell
        title={title}
        intro={`Classic Original fields ${TOTAL_PIECES} pieces per army across 12 types. Start with the visual codex—especially Marshal, Spy, Miner, and Scout—then use the interactive chart and full reference table.`}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Pieces" },
        ]}
        updated={updated}
        readingMinutes={12}
        toc={[
          { id: "codex", label: "Visual codex" },
          { id: "specials", label: "Four special pieces" },
          { id: "explorer", label: "Interactive chart" },
          { id: "table", label: "Reference table" },
          { id: "roles", label: "Role notes" },
          { id: "links", label: "Deep guides" },
        ]}
        related={[
          { href: "/stratego-ranks", label: "Piece Rankings" },
          { href: "/stratego-scout", label: "Scout Guide" },
          { href: "/stratego-miner", label: "Miner Guide" },
        ]}
      >
        <h2 id="codex">Piece visual codex</h2>
        <p>
          Original tile-style icons for every Classic Original rank. The four
          special pieces that change how you play are featured first.
        </p>

        <h2 id="specials">Marshal, Spy, Miner &amp; Scout</h2>
        <p>
          These four create most of Stratego’s asymmetric decisions: who wins
          fair fights, who deletes the Marshal, who clears Bombs, and who maps
          the board at speed.
        </p>
        <PieceVisualCodex />

        <h2 id="explorer">Interactive piece ranking chart</h2>
        <p>
          Select a piece to open its detail panel. Special pieces link to deeper
          guides where available.
        </p>
        <PieceExplorer />

        <h2 id="table">Classic Original reference table</h2>
        <table>
          <thead>
            <tr>
              <th>Piece</th>
              <th>Rank</th>
              <th>Qty</th>
              <th>Movement</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {ORIGINAL_PIECES.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.rankLabel}</td>
                <td>{p.quantity}</td>
                <td>{p.movement}</td>
                <td>{p.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="roles">Role notes by tier</h2>
        <h3>Elite officers (10–8)</h3>
        <p>
          Marshal, General, and Colonels decide major fights. Preserve them
          until you know where enemy Bombs and the Spy are likely hiding.
        </p>
        <h3>Mid ranks (7–4)</h3>
        <p>
          Majors through Sergeants do the everyday work: probing, trading, and
          holding lanes without exposing your best pieces.
        </p>
        <h3>Support ranks (3–1) and immobiles</h3>
        <p>
          Miners and Scouts create options. The Spy creates a Marshal threat.
          Bombs and the Flag shape defensive geography.
        </p>

        <h2 id="links">Deep guides</h2>
        <p>
          Continue with the{" "}
          <Link href="/stratego-scout">Scout</Link>,{" "}
          <Link href="/stratego-miner">Miner</Link>, and{" "}
          <Link href="/protect-your-flag">Flag protection</Link> guides, then
          practice layouts in the{" "}
          <Link href="/stratego-setup">Setup Explorer</Link>.
        </p>
      </ArticleShell>
    </>
  );
}
