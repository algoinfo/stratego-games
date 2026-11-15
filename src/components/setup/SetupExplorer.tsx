"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ORIGINAL_PIECES } from "@/content/pieces";
import {
  LAKE_CELLS,
  RANK_META,
  SETUPS,
  SETUP_ORDER,
  type RankToken,
  type SetupStyle,
  isValidClassicArmy,
} from "@/content/setups";

type Selected = { index: number; token: RankToken } | null;

const COLS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function pieceByToken(token: RankToken) {
  const meta = RANK_META[token];
  return ORIGINAL_PIECES.find((p) => p.id === meta.pieceId);
}

export function SetupExplorer({
  compact = false,
  initial = "balanced",
}: {
  compact?: boolean;
  initial?: SetupStyle;
}) {
  const [style, setStyle] = useState<SetupStyle>(initial);
  const [selected, setSelected] = useState<Selected>(null);
  const [compare, setCompare] = useState(false);

  const setup = SETUPS[style];
  const valid = useMemo(() => isValidClassicArmy(setup.army), [setup.army]);

  function selectCell(armyIndex: number, token: RankToken) {
    setSelected((prev) =>
      prev?.index === armyIndex ? null : { index: armyIndex, token },
    );
  }

  function reset() {
    setStyle(initial);
    setSelected(null);
    setCompare(false);
  }

  const selectedPiece = selected ? pieceByToken(selected.token) : null;
  const selectedCoord = selected
    ? `${COLS[selected.index % 10]}${6 + Math.floor(selected.index / 10)}`
    : null;

  return (
    <div className={`sx ${compact ? "sx--compact" : ""}`}>
      <div className="sx__toolbar" role="tablist" aria-label="Setup layouts">
        {SETUP_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={style === id}
            className={`sx__tab ${style === id ? "is-active" : ""}`}
            onClick={() => {
              setStyle(id);
              setSelected(null);
            }}
          >
            {SETUPS[id].label}
          </button>
        ))}
        <div className="sx__actions">
          <button type="button" className="sx__btn" onClick={reset}>
            Reset
          </button>
          <button
            type="button"
            className={`sx__btn ${compare ? "is-active" : ""}`}
            onClick={() => setCompare((v) => !v)}
          >
            Compare
          </button>
        </div>
      </div>

      <div className="sx__grid">
        <div className="sx__board-wrap">
          <div
            className="sx__board"
            role="grid"
            aria-label={`${setup.label} setup board`}
          >
            {Array.from({ length: 100 }, (_, i) => {
              const r = Math.floor(i / 10);
              const c = i % 10;
              const lake = LAKE_CELLS.has(`${r},${c}`);
              const inArmy = r >= 6;
              const armyIndex = inArmy ? (r - 6) * 10 + c : -1;
              const token = inArmy ? setup.army[armyIndex] : null;
              const isSel = selected?.index === armyIndex;
              const isHidden = r <= 3;

              return (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  role="gridcell"
                  disabled={lake || !token}
                  className={[
                    "sx__cell",
                    lake ? "is-lake" : "",
                    isHidden ? "is-hidden" : "",
                    token ? "has-piece" : "",
                    isSel ? "is-selected" : "",
                    token === "F" ? "is-flag" : "",
                    token === "B" ? "is-bomb" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={
                    lake
                      ? `Lake ${COLS[c]}${r}`
                      : token
                        ? `${RANK_META[token].name} at ${COLS[c]}${r}`
                        : isHidden
                          ? `Opponent square ${COLS[c]}${r}`
                          : `Empty ${COLS[c]}${r}`
                  }
                  onClick={() => {
                    if (token && armyIndex >= 0) selectCell(armyIndex, token);
                  }}
                >
                  {lake ? (
                    <span className="sx__lake-mark" aria-hidden="true" />
                  ) : isHidden ? (
                    <span className="sx__back" aria-hidden="true" />
                  ) : token ? (
                    <span className="sx__token" data-rank={token}>
                      {token}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <p className="sx__board-note">
            {valid
              ? "Classic Original army · 40 pieces · click a piece for details"
              : "Invalid piece count — check layout data"}
          </p>
        </div>

        <aside className="sx__panel">
          <h3>
            {setup.label}: {setup.title}
          </h3>
          <p>{setup.summary}</p>

          {selectedPiece && selected ? (
            <div className="sx__detail">
              <h4>
                {selectedPiece.rankLabel} {selectedPiece.name}
                {selectedCoord ? ` · ${selectedCoord}` : ""}
              </h4>
              <p>{selectedPiece.summary}</p>
              {selectedPiece.special && (
                <p className="sx__special">{selectedPiece.special}</p>
              )}
            </div>
          ) : (
            <div className="sx__detail sx__detail--muted">
              <h4>Select a piece</h4>
              <p>
                Click any square in your four deployment rows to see its name,
                rank, and role in this layout.
              </p>
            </div>
          )}

          {!compare && (
            <>
              <h4>Strengths</h4>
              <ul>
                {setup.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <h4>Weaknesses</h4>
              <ul>
                {setup.weaknesses.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="sx__when">
                <strong>Best when:</strong> {setup.bestWhen}
              </p>
            </>
          )}

          {compare && (
            <div className="sx__compare">
              {SETUP_ORDER.map((id) => {
                const s = SETUPS[id];
                return (
                  <div
                    key={id}
                    className={`sx__compare-card ${style === id ? "is-active" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setStyle(id);
                        setSelected(null);
                      }}
                    >
                      {s.label}
                    </button>
                    <p>{s.summary}</p>
                    <p>
                      <strong>+</strong> {s.strengths[0]}
                    </p>
                    <p>
                      <strong>−</strong> {s.weaknesses[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {!compact && (
            <p className="sx__more">
              Deeper comparison:{" "}
              <Link href="/best-stratego-setup">Best Stratego Setup</Link>
            </p>
          )}
          {compact && (
            <p className="sx__more">
              <Link href="/stratego-setup">Open full Setup Explorer →</Link>
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
