import type { Metadata } from "next";
import { FormationDiagram } from "@/components/diagrams/FormationDiagram";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Best Stratego Setup: Defensive, Balanced & Aggressive";
const description =
  "Compare three Classic Original Stratego setups—defensive, balanced, and aggressive—with strengths, weaknesses, and when to use each.";
const updated = "2026-11-15";
const path = "/best-stratego-setup";

const faqs = [
  {
    q: "Is there one best Stratego setup?",
    a: "No. The best setup depends on your style, your opponent's habits, and how comfortable you are managing information. Treat every formation as a tradeoff.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function BestSetupPage() {
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
              { name: "Best Stratego Setup", path },
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
        intro="There is no universally best Classic Original formation. This editorial comparison weighs three strategic approaches so you can pick a plan—not a mythic unbeatable layout."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/stratego-setup", label: "Setup" },
          { label: "Best Setup" },
        ]}
        updated={updated}
        readingMinutes={11}
        toc={[
          { id: "defensive", label: "Defensive" },
          { id: "balanced", label: "Balanced" },
          { id: "aggressive", label: "Aggressive" },
          { id: "choose", label: "How to choose" },
          { id: "faq", label: "FAQ" },
        ]}
        related={[
          { href: "/stratego-setup", label: "Setup Fundamentals" },
          { href: "/protect-your-flag", label: "Protect Your Flag" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="defensive">Defensive approach</h2>
        <FormationDiagram style="defensive" />
        <p>
          <strong>Strengths:</strong> Harder early Flag captures; punishes
          reckless Scouts; buys time for information.
        </p>
        <p>
          <strong>Weaknesses:</strong> Can concede board control; Miners may
          arrive late to enemy Bombs; predictable if always corner-Flagged.
        </p>
        <p>
          <strong>Best when:</strong> You prefer attrition and reading before
          committing elites.
        </p>

        <h2 id="balanced">Balanced approach</h2>
        <FormationDiagram style="balanced" />
        <p>
          <strong>Strengths:</strong> Adapts to early discoveries; keeps Scout
          lanes open; avoids overcommitment.
        </p>
        <p>
          <strong>Weaknesses:</strong> Neither max defense nor max pressure;
          requires active midgame decisions.
        </p>
        <p>
          <strong>Best when:</strong> You are still learning opponent patterns
          or playing unfamiliar styles.
        </p>

        <h2 id="aggressive">Aggressive approach</h2>
        <FormationDiagram style="aggressive" />
        <p>
          <strong>Strengths:</strong> Forces early answers; can seize
          information and space; strong vs passive setups.
        </p>
        <p>
          <strong>Weaknesses:</strong> Thin Flag defense; higher Spy and Bomb
          risk for forward elites.
        </p>
        <p>
          <strong>Best when:</strong> You read well under pressure and can
          convert early advantages before a counter-raid.
        </p>

        <h2 id="choose">How to choose</h2>
        <p>
          Rotate approaches across sessions. If opponents always Miner-rush your
          favorite corner, shift Flag geography. If they turtle, lean aggressive
          Scouts and Captains. Setup should change with evidence—not superstition.
        </p>
      </ArticleShell>
    </>
  );
}
