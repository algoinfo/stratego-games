"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="g-header">
      <div className="g-header__inner">
        <Link href="/" className="g-logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand-mark.svg"
            alt=""
            width={28}
            height={28}
            className="g-logo__mark"
          />
          <strong>{SITE.shortName}</strong>
        </Link>
        <nav className="g-nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/how-to-play-stratego" className="g-header__cta">
          Start Here
        </Link>
        <button
          type="button"
          className="g-menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`g-mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/how-to-play-stratego" onClick={() => setOpen(false)}>
          Start Here
        </Link>
      </nav>
    </header>
  );
}
