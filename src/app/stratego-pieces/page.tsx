import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { ORIGINAL_PIECES, TOTAL_PIECES } from "@/content/pieces";
import { REFERENCES } from "@/content/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const title = "Stratego Pieces Guide: Roles, Quantities & Abilities";
const description =
  "Complete Classic Original Stratego piece reference: all 12 types, quantities totaling 40, roles, and special abilities.";
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
        intro={`Classic Original fields ${TOTAL_PIECES} pieces per army across 12 types. Use this page as your quick reference for quantity, combat role, and special rules.`}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Pieces" },
        ]}
        updated={updated}
        readingMinutes={9}
        toc={[
          { id: "table", label: "Reference table" },
          { id: "roles", label: "Role notes" },
          { id: "specials", label: "Special pieces" },
          { id: "links", label: "Deep guides" },
        ]}
        related={[
          { href: "/stratego-ranks", label: "Piece Rankings" },
          { href: "/stratego-scout", label: "Scout Guide" },
          { href: "/stratego-miner", label: "Miner Guide" },
        ]}
        references={REFERENCES}
      >
        <h2 id="table">Classic Original reference table</h2>
        <table>
          <thead>
            <tr>
              <th>Piece</th>
              <th>Rank</th>
              <th>Qty</th>
              <th>Moves?</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {ORIGINAL_PIECES.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.rankLabel}</td>
                <td>{p.quantity}</td>
                <td>{p.movable ? "Yes" : "No"}</td>
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

        <h2 id="specials">Special pieces at a glance</h2>
        <ul>
          {ORIGINAL_PIECES.filter((p) => p.special).map((p) => (
            <li key={p.id}>
              <strong>
                {p.name} ({p.rankLabel}):
              </strong>{" "}
              {p.special}
            </li>
          ))}
        </ul>

        <h2 id="links">Deep guides</h2>
        <p>
          For practical usage patterns, continue with the{" "}
          <Link href="/stratego-scout">Scout</Link>,{" "}
          <Link href="/stratego-miner">Miner</Link>, and{" "}
          <Link href="/protect-your-flag">Flag protection</Link> guides.
        </p>
      </ArticleShell>
    </>
  );
}
