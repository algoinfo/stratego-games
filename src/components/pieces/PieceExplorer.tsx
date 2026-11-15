"use client";

import Link from "next/link";
import { useState } from "react";
import { ORIGINAL_PIECES, type PieceDef } from "@/content/pieces";

export function PieceExplorer() {
  const [activeId, setActiveId] = useState(ORIGINAL_PIECES[0].id);
  const active =
    ORIGINAL_PIECES.find((p) => p.id === activeId) ?? ORIGINAL_PIECES[0];

  return (
    <div className="px">
      <div className="px__chart" role="list" aria-label="Piece ranking chart">
        {ORIGINAL_PIECES.map((p) => (
          <button
            key={p.id}
            type="button"
            role="listitem"
            className={`px__chip ${activeId === p.id ? "is-active" : ""} ${
              !p.movable ? "is-immobile" : ""
            }`}
            onClick={() => setActiveId(p.id)}
            aria-pressed={activeId === p.id}
          >
            <span className="px__rank">{p.rankLabel}</span>
            <span className="px__name">{p.name}</span>
            <span className="px__qty">×{p.quantity}</span>
          </button>
        ))}
      </div>

      <aside className="px__panel" aria-live="polite">
        <div className="px__panel-head">
          <span className="px__badge">{active.rankLabel}</span>
          <div>
            <h3>
              {active.name}
              {!active.movable ? " · Immobile" : ""}
            </h3>
            <p className="px__meta">
              Quantity {active.quantity} · {active.movement}
            </p>
          </div>
        </div>

        <dl className="px__facts">
          <div>
            <dt>Role</dt>
            <dd>{active.role}</dd>
          </div>
          <div>
            <dt>Summary</dt>
            <dd>{active.summary}</dd>
          </div>
          {active.special && (
            <div>
              <dt>Special</dt>
              <dd>{active.special}</dd>
            </div>
          )}
          <div>
            <dt>Strategic usage</dt>
            <dd>{active.usage}</dd>
          </div>
        </dl>

        <div className="px__links">
          {active.guideHref ? (
            <Link href={active.guideHref} className="btn btn--primary">
              Open {active.name} guide
            </Link>
          ) : null}
          <Link href="/stratego-ranks" className="btn btn--ghost">
            Rank combat chart
          </Link>
          <Link href="/stratego-setup" className="btn btn--ghost">
            Setup explorer
          </Link>
        </div>

        <PieceNeighbors
          active={active}
          onSelect={(id) => setActiveId(id)}
        />
      </aside>
    </div>
  );
}

function PieceNeighbors({
  active,
  onSelect,
}: {
  active: PieceDef;
  onSelect: (id: string) => void;
}) {
  const idx = ORIGINAL_PIECES.findIndex((p) => p.id === active.id);
  const prev = idx > 0 ? ORIGINAL_PIECES[idx - 1] : null;
  const next =
    idx < ORIGINAL_PIECES.length - 1 ? ORIGINAL_PIECES[idx + 1] : null;

  return (
    <div className="px__neighbors">
      {prev ? (
        <button type="button" onClick={() => onSelect(prev.id)}>
          ← {prev.rankLabel} {prev.name}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button type="button" onClick={() => onSelect(next.id)}>
          {next.rankLabel} {next.name} →
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
