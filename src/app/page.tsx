import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SetupExplorer } from "@/components/setup/SetupExplorer";
import { ORIGINAL_PIECES } from "@/content/pieces";
import { SITE } from "@/content/site";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE.name} — Rules, Setup & Strategy`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const categories = [
  {
    href: "/stratego-rules",
    title: "Rules & Basics",
    body: "Objective, board, movement, combat, and winning conditions for Classic Original.",
    mark: "01",
  },
  {
    href: "/stratego-pieces",
    title: "Piece Guide",
    body: "All 12 piece types, quantities, roles, and special abilities in one reference.",
    mark: "02",
  },
  {
    href: "/stratego-setup",
    title: "Setup Guides",
    body: "Flag protection, Bomb screens, Scout lanes, and interactive formations.",
    mark: "03",
  },
  {
    href: "/stratego-strategy",
    title: "Strategy Guides",
    body: "Opening plans, midgame trades, bluffing, and endgame Flag hunts.",
    mark: "04",
  },
];

const startHere = [
  {
    href: "/how-to-play-stratego",
    title: "How to Play Stratego",
    body: "A beginner walkthrough from setup to victory.",
    step: "1",
  },
  {
    href: "/stratego-rules",
    title: "Stratego Rules Explained",
    body: "Clear Classic Original rules with diagrams and exceptions.",
    step: "2",
  },
  {
    href: "/stratego-pieces",
    title: "Piece Reference",
    body: "Click every rank to learn roles, movement, and usage.",
    step: "3",
  },
  {
    href: "/stratego-tips",
    title: "Beginner Tips Checklist",
    body: "Pre-game and every-turn checklists—then go deeper in Strategy.",
    step: "4",
  },
];

const featured = [
  {
    href: "/best-stratego-setup",
    title: "Best Stratego Setup Approaches",
    body: "Compare defensive, balanced, and aggressive formations.",
  },
  {
    href: "/protect-your-flag",
    title: "How to Protect Your Flag",
    body: "Bomb nests, decoy corners, and collapsing-wing decisions.",
  },
  {
    href: "/stratego-scout",
    title: "Scout Strategy Guide",
    body: "Map Bombs, bait elites, and avoid empty sacrifices.",
  },
  {
    href: "/stratego-miner",
    title: "Miner Strategy Guide",
    body: "Keep Miners alive for the late Bomb line.",
  },
  {
    href: "/stratego-marshal",
    title: "Marshal Strategy Guide",
    body: "Screen unknowns, close Spy corridors, time elite entry.",
  },
  {
    href: "/stratego-spy",
    title: "Spy Strategy Guide",
    body: "Ambush paths and bait patterns to defeat the Marshal.",
  },
  {
    href: "/stratego-bomb",
    title: "Bomb Strategy Guide",
    body: "Approach denial, decoy nests, and Miner-aware layouts.",
  },
];

const topics = [
  { title: "Opening Strategy", href: "/stratego-strategy#opening" },
  { title: "Defensive Strategy", href: "/protect-your-flag" },
  { title: "Offensive Strategy", href: "/best-stratego-setup" },
  { title: "Information Gathering", href: "/stratego-scout" },
  { title: "Endgame Strategy", href: "/stratego-strategy#endgame" },
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
        <Image
          src="/images/hero-stratego-board.jpg"
          alt="Classic Stratego board with red and blue turret pieces mid-battle around the central lakes"
          fill
          priority
          sizes="100vw"
          className="home-hero__media"
        />
        <div className="home-hero__shade" aria-hidden="true" />
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__brand">{SITE.name}</p>
            <h1>Master the Art of Stratego</h1>
            <p className="home-hero__lead">
              {SITE.name} teaches Classic Original Stratego from the ground up:
              clear rules, every piece explained, smarter setups, and practical
              strategy you can use at the table.
            </p>
            <div className="home-hero__actions">
              <Link href="/how-to-play-stratego" className="btn btn--primary">
                Start Learning
              </Link>
              <Link href="/stratego-rules" className="btn btn--ghost">
                Learn the Rules
              </Link>
              <Link href="/stratego-strategy" className="btn btn--ghost">
                Explore Strategies
              </Link>
            </div>
            <ol className="home-hero__path" aria-label="Learning path">
              <li>
                <Link href="/stratego-rules">Rules</Link>
              </li>
              <li aria-hidden="true">→</li>
              <li>
                <Link href="/stratego-pieces">Pieces</Link>
              </li>
              <li aria-hidden="true">→</li>
              <li>
                <Link href="/stratego-setup">Setup</Link>
              </li>
              <li aria-hidden="true">→</li>
              <li>
                <Link href="/stratego-strategy">Strategy</Link>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Learning Categories</h2>
        <p className="home-section__lead">
          Follow the path from rules to pieces, then setup craft and strategy.
        </p>
        <div className="card-grid">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="cat-card cat-card--visual">
              <span className="cat-card__mark">{c.mark}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section home-section--start">
        <div className="start-banner">
          <div>
            <p className="start-banner__eyebrow">For beginners</p>
            <h2>Start Here</h2>
            <p className="home-section__lead">
              New to Stratego? Complete these four pages in order before deep
              strategy guides.
            </p>
          </div>
          <Link href="/how-to-play-stratego" className="btn btn--primary">
            Begin How to Play
          </Link>
        </div>
        <div className="start-grid">
          {startHere.map((c) => (
            <Link key={c.href} href={c.href} className="start-card start-card--step">
              <span className="start-card__step">Step {c.step}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Interactive Setup Preview</h2>
        <p className="home-section__lead">
          Switch Defensive, Balanced, and Aggressive Classic Original layouts.
          Click pieces to inspect ranks—full explorer on the setup page.
        </p>
        <SetupExplorer compact initial="balanced" />
      </section>

      <section className="home-section">
        <h2>Featured Strategy Guides</h2>
        <p className="home-section__lead">
          After rules and pieces, move into decisions you will face at the table.
        </p>
        <div className="feature-grid">
          {featured.map((c) => (
            <Link key={c.href} href={c.href} className="feature-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Link>
          ))}
        </div>
        <p className="home-path-cta">
          Ready for the full framework?{" "}
          <Link href="/stratego-strategy">Open the Strategy Guide →</Link>
        </p>
      </section>

      <section className="home-section">
        <h2>Piece Overview</h2>
        <p className="home-section__lead">
          Classic Original uses 12 piece types and 40 pieces per army.{" "}
          <Link href="/stratego-pieces">Open the interactive reference</Link>.
        </p>
        <div className="piece-strip">
          {ORIGINAL_PIECES.map((p) => (
            <Link
              key={p.id}
              href="/stratego-pieces"
              className="piece-chip piece-chip--link"
            >
              <strong>
                {p.rankLabel} {p.name}
              </strong>
              <span>×{p.quantity}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>Strategy Topics</h2>
        <p className="home-section__lead">
          Jump into a decision layer, then return to the full strategy guide.
        </p>
        <div className="topic-grid">
          {topics.map((t) => (
            <Link key={t.title} href={t.href} className="topic-card">
              <h3>{t.title}</h3>
              <p>Continue reading →</p>
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
