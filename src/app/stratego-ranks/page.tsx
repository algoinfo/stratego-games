import type { Metadata } from "next";
import { RankLadder } from "@/components/diagrams/RankLadder";
import { SpyMarshal } from "@/components/diagrams/SpyMarshal";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { routeUpdated } from "@/content/routes";

const title = "Stratego Piece Rankings & Combat Chart";
const description =
  "Understand Stratego Original rank order, equal-rank collisions, and the Spy vs Marshal and Bomb exceptions.";
const path = "/stratego-ranks";
const updated = routeUpdated(path);

const faqs = [
  {
    q: "Is the Spy rank 1?",
    a: "The Spy is the lowest combat piece in ordinary fights. Its only promotion is the special attack on the Marshal.",
  },
  {
    q: "Do Bombs have a rank number?",
    a: "Bombs are not ranked like officers. They use a special combat rule against attackers.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function RanksPage() {
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
              { name: "Stratego Ranks", path },
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
        intro="Rank order is the backbone of Stratego combat. Learn the default ladder first, then memorize the two famous exceptions."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Ranks" },
        ]}
        updated={updated}
        readingMinutes={7}
        toc={[
          { id: "ladder", label: "Rank ladder" },
          { id: "fair", label: "Fair fights" },
          { id: "exceptions", label: "Exceptions" },
          { id: "practice", label: "Practical reading" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={<RankLadder />}
        related={[
          { href: "/stratego-pieces", label: "Pieces Reference" },
          { href: "/stratego-rules", label: "Rules Explained" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="ladder">The Classic Original ladder</h2>
        <p>
          From strongest to weakest in ordinary combat: Marshal (10), General
          (9), Colonel (8), Major (7), Captain (6), Lieutenant (5), Sergeant
          (4), Miner (3), Scout (2), Spy (S).
        </p>

        <h2 id="fair">Fair fights</h2>
        <ul>
          <li>Higher rank removes lower rank.</li>
          <li>Equal ranks are both removed.</li>
          <li>The winner occupies the contested square.</li>
        </ul>

        <h2 id="exceptions">Critical exceptions</h2>
        <h3>Bombs</h3>
        <p>
          Immobile Bombs destroy almost every attacker. Only Miners remove Bombs
          safely.
        </p>
        <h3>Spy vs Marshal</h3>
        <SpyMarshal />

        <h2 id="practice">Practical reading of unknown pieces</h2>
        <p>
          When an unknown piece refuses to chase or sits still for many turns,
          consider Bomb or Flag possibilities. When a piece sprints across open
          files, prioritize Scout hypotheses. Ranking guesses should stay
          probabilistic—overconfidence is how Marshals die to Spies.
        </p>
      </ArticleShell>
    </>
  );
}
