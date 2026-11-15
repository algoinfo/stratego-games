import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="g-footer">
      <div className="g-footer__inner">
        <div className="g-footer__brand">
          <p className="g-footer__brand-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-mark.svg"
              alt=""
              width={28}
              height={28}
              className="g-logo__mark"
            />
            <strong>{SITE.name}</strong>
          </p>
          <p>{SITE.tagline}</p>
        </div>
        <div className="g-footer__links">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <p className="g-footer__disclaimer">{SITE.disclaimer}</p>
        <p className="g-footer__disclaimer">
          © 2026 {SITE.name}. Classic Original rules focus.
        </p>
      </div>
    </footer>
  );
}
