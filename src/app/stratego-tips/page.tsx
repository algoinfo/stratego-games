import type { Metadata } from "next";
import Image from "next/image";
import { ArticleShell } from "@/components/guide/ArticleShell";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const title = "Stratego Tips and Tricks for Beginners";
const description =
  "Practical Classic Original Stratego tips: safer probing, Scout habits, Miner timing, Flag defense, and mistakes to avoid.";
const updated = "2026-11-15";
const path = "/stratego-tips";

const faqs = [
  {
    q: "What is the best tip for new players?",
    a: "Do not reveal your Marshal early. Probe with Scouts and mid-ranks first, then commit elites once Bombs and Spy threats are clearer.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description },
};

export default function TipsPage() {
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
              { name: "Stratego Tips", path },
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
        intro="These Classic Original tips prioritize habits that reduce free information gifts and catastrophic early losses."
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Tips" },
        ]}
        updated={updated}
        readingMinutes={8}
        toc={[
          { id: "habits", label: "Core habits" },
          { id: "scouts", label: "Scout tips" },
          { id: "miners", label: "Miner tips" },
          { id: "flag", label: "Flag tips" },
          { id: "avoid", label: "Mistakes to avoid" },
          { id: "faq", label: "FAQ" },
        ]}
        hero={
          <figure className="diagram diagram--photo">
            <Image
              src="/images/tips-ranks-setup.jpg"
              alt="Stratego piece strength ladder next to a sample starting board setup with Flag and Bomb placement"
              width={1024}
              height={829}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
            />
            <figcaption>
              Keep ranks and special exceptions in mind while you set up: Spy
              vs Marshal, Miner vs Bomb, and Scout mobility shape every tip
              below.
            </figcaption>
          </figure>
        }
        related={[
          { href: "/how-to-play-stratego", label: "How to Play" },
          { href: "/stratego-strategy", label: "Strategy Guide" },
          { href: "/stratego-scout", label: "Scout Guide" },
        ]}
        faqs={faqs}
      >
        <h2 id="habits">Core habits</h2>
        <ul>
          <li>Probe before you commit elites.</li>
          <li>Track confirmed Bombs and likely Flag zones.</li>
          <li>Keep at least one Miner for the late Flag screen.</li>
          <li>Change Flag geography between games.</li>
        </ul>

        <h2 id="scouts">Scout tips</h2>
        <p>
          Use Scouts to test empty corridors and to force revelations on pieces
          that look immobile. Do not spend every Scout in the first ten moves—
          late Scouts find Flag approaches after Bombs are known.
        </p>

        <h2 id="miners">Miner tips</h2>
        <p>
          Miners are scarce. Prefer attacking suspected Bombs only after other
          clues support the guess. Trading a Miner into a Captain is an expensive
          information purchase.
        </p>

        <h2 id="flag">Flag tips</h2>
        <p>
          Defend approach squares, not only the Flag square itself. A Flag with
          three open neighbors and no Bombs is a puzzle with an easy answer.
        </p>

        <h2 id="avoid">Mistakes to avoid</h2>
        <ul>
          <li>Chasing every unknown with the Marshal.</li>
          <li>Ignoring pieces that never move.</li>
          <li>Leaving Scouts with no open lanes after early clutter.</li>
          <li>Copying one “secret” setup forever.</li>
        </ul>
      </ArticleShell>
    </>
  );
}
