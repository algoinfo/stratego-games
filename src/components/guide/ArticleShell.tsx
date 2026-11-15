import Link from "next/link";
import type { ReactNode } from "react";

export type TocItem = { id: string; label: string };

type Props = {
  title: string;
  intro: string;
  crumbs: { href?: string; label: string }[];
  updated: string;
  readingMinutes: number;
  toc: TocItem[];
  hero?: ReactNode;
  children: ReactNode;
  related: { href: string; label: string }[];
  faqs?: { q: string; a: string }[];
  references?: { label: string; note: string; href?: string }[];
};

export function ArticleShell({
  title,
  intro,
  crumbs,
  updated,
  readingMinutes,
  toc,
  hero,
  children,
  related,
  faqs,
  references,
}: Props) {
  return (
    <div className="article-wrap">
      <article className="article-main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`}>
              {i > 0 && " / "}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>

        <h1>{title}</h1>
        <p className="article-intro">{intro}</p>
        <div className="article-meta">
          <span>Updated {updated}</span>
          <span>{readingMinutes} min read</span>
          <span>Classic Original focus</span>
        </div>

        {hero && <div className="article-hero-fig">{hero}</div>}

        <details className="toc-mobile">
          <summary>On this page</summary>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </details>

        <div className="prose">{children}</div>

        {faqs && faqs.length > 0 && (
          <section id="faq">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {references && references.length > 0 && (
          <aside className="refs">
            <h2>References</h2>
            <ul>
              {references.map((r) => (
                <li key={r.label}>
                  {r.href ? (
                    <a href={r.href} rel="noopener noreferrer" target="_blank">
                      <strong>{r.label}</strong>
                    </a>
                  ) : (
                    <strong>{r.label}</strong>
                  )}{" "}
                  — {r.note}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <aside className="related">
          <h2>Related guides</h2>
          <ul>
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <aside className="toc-desktop" aria-label="Table of contents">
        <h2>On this page</h2>
        <ol>
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`}>{t.label}</a>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
