import {
  LAKE_CELLS,
  RANK_META,
  SETUPS,
  type SetupStyle,
} from "@/content/setups";

const COLS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

/**
 * Server-rendered 10×10 HTML board so crawlers and no-JS users see real layouts.
 */
export function StaticSetupBoard({ style }: { style: SetupStyle }) {
  const setup = SETUPS[style];

  return (
    <figure className="static-board">
      <figcaption className="static-board__title">
        <strong>
          {setup.label}: {setup.title}
        </strong>
        <span>{setup.summary}</span>
      </figcaption>

      <div
        className="static-board__grid"
        role="img"
        aria-label={`10 by 10 Stratego board showing the ${setup.label} ${setup.title} deployment with lakes in the center and 40 Classic Original pieces on rows 6 through 9`}
      >
        {Array.from({ length: 100 }, (_, i) => {
          const r = Math.floor(i / 10);
          const c = i % 10;
          const lake = LAKE_CELLS.has(`${r},${c}`);
          const inArmy = r >= 6;
          const token = inArmy ? setup.army[(r - 6) * 10 + c] : null;
          const hidden = r <= 3;

          let label = "·";
          let cls = "static-board__cell";
          if (lake) {
            label = "≈";
            cls += " is-lake";
          } else if (hidden) {
            label = "■";
            cls += " is-hidden";
          } else if (token) {
            label = token;
            cls += " has-piece";
            if (token === "F") cls += " is-flag";
            if (token === "B") cls += " is-bomb";
          } else {
            cls += " is-empty";
          }

          return (
            <div
              key={`${r}-${c}`}
              className={cls}
              title={
                lake
                  ? `Lake ${COLS[c]}${r}`
                  : token
                    ? `${RANK_META[token].name} (${token}) at ${COLS[c]}${r}`
                    : hidden
                      ? `Hidden opponent ${COLS[c]}${r}`
                      : `${COLS[c]}${r}`
              }
            >
              {label}
            </div>
          );
        })}
      </div>

      {/* Explicit text layout for crawlers / accessibility */}
      <div className="static-board__rows">
        <p>
          <strong>Your army (rows 6–9, left→right):</strong>
        </p>
        {[0, 1, 2, 3].map((row) => {
          const slice = setup.army.slice(row * 10, row * 10 + 10);
          return (
            <p key={row}>
              Row {6 + row}:{" "}
              {slice
                .map((t, i) => `${COLS[i]}${6 + row}=${RANK_META[t].name}(${t})`)
                .join(", ")}
            </p>
          );
        })}
      </div>

      <ul className="static-board__points">
        <li>
          <strong>Strengths:</strong> {setup.strengths.join("; ")}
        </li>
        <li>
          <strong>Weaknesses:</strong> {setup.weaknesses.join("; ")}
        </li>
        <li>
          <strong>Best when:</strong> {setup.bestWhen}
        </li>
      </ul>
    </figure>
  );
}

export function StaticSetupGallery() {
  return (
    <div className="static-board-gallery">
      <StaticSetupBoard style="defensive" />
      <StaticSetupBoard style="balanced" />
      <StaticSetupBoard style="aggressive" />
    </div>
  );
}
