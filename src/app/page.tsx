import type { Metadata } from "next";
import Link from "next/link";
import { HeroBoard } from "@/components/diagrams/HeroBoard";
import { ORIGINAL_PIECES } from "@/content/pieces";
import { SITE } from "@/content/site";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE.name} — Stratego Rules, Setup & Strategy`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const categories = [
  {
    href: "/stratego-rules",
    title: "Rules & Basics",
    body: "Objective, board, movement, combat, and winning conditions for Classic Original.",
  },
  {
    href: "/stratego-pieces",
    title: "Piece Guide",
    body: "All 12 piece types, quantities, roles, and special abilities in one reference.",
  },
  {
    href: "/stratego-setup",
    title: "Setup Guides",
    body: "Flag protection, Bomb screens, Scout lanes, and formation patterns.",
  },
  {
    href: "/stratego-strategy",
    title: "Strategy Guides",
    body: "Opening plans, midgame trades, bluffing, and endgame Flag hunts.",
  },
];

const startHere = [
  {
    href: "/how-to-play-stratego",
    title: "How to Play Stratego",
    body: "A beginner walkthrough from setup to victory.",
  },
  {
    href: "/stratego-rules",
    title: "Stratego Rules Explained",
    body: "Clear Classic Original rules with diagrams and exceptions.",
  },
  {
    href: "/stratego-ranks",
    title: "Stratego Piece Rankings",
    body: "Rank order, fair fights, and special combat cases.",
  },
  {
    href: "/stratego-tips",
    title: "Beginner Tips and Tricks",
    body: "Practical habits that reduce early blunders.",
  },
];

const featured = [
  {
    href: "/best-stratego-setup",
    title: "Best Stratego Setup Approaches",
    body: "Compare defensive, balanced, and aggressive formations without false “best setup” claims.",
  },
  {
    href: "/protect-your-flag",
    title: "How to Protect Your Flag",
    body: "Bomb nests, decoy corners, and when to abandon a collapsing wing.",
  },
  {
    href: "/stratego-scout",
    title: "Scout Strategy Guide",
    body: "Use Scouts to map Bombs, bait elites, and avoid empty sacrifices.",
  },
  {
    href: "/stratego-miner",
    title: "Miner Strategy Guide",
    body: "Keep Miners alive for the late-game Bomb line that guards the Flag.",
  },
];

const topics = [
  "Opening Strategy",
  "Defensive Strategy",
  "Offensive Strategy",
  "Information Gathering",
  "Endgame Strategy",
];

const faqs = [
  {
    q: "What edition do these guides cover?",
    a: "Classic Original Stratego with 40 pieces per army. Duel and Infiltrator variants use different configurations and are not mixed into these pages.",
  },
  {
    q: "How do you win Stratego?",
    a: "Capture the opponent’s Flag. Some table groups also end when a player has no movable pieces left; always confirm house rules before play.",
  },
  {
    q: "Can a Spy beat the Marshal?",
    a: "Yes—only if the Spy attacks the Marshal. If the Marshal attacks the Spy, the Spy loses.",
  },
  {
    q: "Who can remove Bombs?",
    a: "Only Miners. Any other piece that attacks a Bomb is removed.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <section className="home-hero">
        <div className="home-hero__inner">
          <div>
            <p className="home-hero__eyebrow">Unofficial strategy encyclopedia</p>
            <h1>Master the Art of Stratego</h1>
            <p className="home-hero__lead">
              Learn the rules, discover winning strategies, and build smarter
              setups for Classic Original Stratego.
            </p>
            <div className="home-hero__actions">
              <Link href="/stratego-rules" className="btn btn--primary">
                Learn the Rules
              </Link>
              <Link href="/stratego-strategy" className="btn btn--ghost">
                Explore Strategies
              </Link>
            </div>
          </div>
          <HeroBoard />
        </div>
      </section>

      <section className="home-section">
        <h2>Learning Categories</h2>
        <p className="home-section__lead">
          Start with rules, then deepen piece knowledge, setup craft, and
          practical strategy.
        </p>
        <div className="card-grid">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="cat-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Start Here</h2>
        <p className="home-section__lead">
          Four essential pages for new players and returning veterans.
        </p>
        <div className="start-grid">
          {startHere.map((c) => (
            <Link key={c.href} href={c.href} className="start-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Featured Strategy Guides</h2>
        <p className="home-section__lead">
          Editorial guides focused on decisions you will actually face at the
          table.
        </p>
        <div className="feature-grid">
          {featured.map((c) => (
            <Link key={c.href} href={c.href} className="feature-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Piece Overview</h2>
        <p className="home-section__lead">
          Classic Original uses 12 piece types and 40 pieces per army.
        </p>
        <div className="piece-strip">
          {ORIGINAL_PIECES.map((p) => (
            <div key={p.id} className="piece-chip">
              <strong>
                {p.rankLabel} {p.name}
              </strong>
              <span>×{p.quantity}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Strategy Topics</h2>
        <p className="home-section__lead">
          Explore the major decision layers of a full match.
        </p>
        <div className="topic-grid">
          {topics.map((t) => (
            <Link
              key={t}
              href="/stratego-strategy"
              className="topic-card"
            >
              <h3>{t}</h3>
              <p>See the full strategy framework.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>FAQ</h2>
        <p className="home-section__lead">
          Quick answers before you dig into the long-form guides.
        </p>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
