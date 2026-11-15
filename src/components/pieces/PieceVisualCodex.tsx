import Link from "next/link";
import { ORIGINAL_PIECES, type PieceDef } from "@/content/pieces";

const SPECIAL_IDS = ["marshal", "spy", "miner", "scout"] as const;

function PieceTile({
  piece,
  size = 72,
}: {
  piece: PieceDef;
  size?: number;
}) {
  const isBomb = piece.id === "bomb";
  const isFlag = piece.id === "flag";
  const isSpy = piece.id === "spy";
  const isMarshal = piece.id === "marshal";
  const fill = isFlag
    ? "#D5A94D"
    : isBomb
      ? "#8B3A3A"
      : isSpy
        ? "#3D5A40"
        : isMarshal
          ? "#0F1A2E"
          : "#172B4D";
  const stroke = isFlag || isBomb ? "#0D1626" : "#D5A94D";
  const text = isFlag ? "#111F36" : "#F5F6F4";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      role="img"
      aria-label={`${piece.name} rank ${piece.rankLabel}`}
    >
      <rect
        x="4"
        y="8"
        width="64"
        height="56"
        rx="6"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      {/* crenellation */}
      <path
        d="M12 8 V2 H20 V8 M28 8 V2 H36 V8 M44 8 V2 H52 V8 M60 8 V2 H64 V8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <text
        x="36"
        y="44"
        textAnchor="middle"
        fontSize={piece.rankLabel.length > 1 ? "20" : "24"}
        fontWeight="700"
        fill={text}
        fontFamily="DM Sans, system-ui, sans-serif"
      >
        {piece.rankLabel}
      </text>
    </svg>
  );
}

function SpecialCard({ piece }: { piece: PieceDef }) {
  return (
    <article className="piece-codex__special">
      <div className="piece-codex__special-art">
        <PieceTile piece={piece} size={88} />
      </div>
      <div className="piece-codex__special-body">
        <p className="piece-codex__eyebrow">Special piece</p>
        <h3>
          {piece.rankLabel} {piece.name}
          <span> ×{piece.quantity}</span>
        </h3>
        <p>{piece.summary}</p>
        {piece.special && (
          <p className="piece-codex__special-rule">
            <strong>Special:</strong> {piece.special}
          </p>
        )}
        <p>
          <strong>How to use:</strong> {piece.usage}
        </p>
        {piece.guideHref && (
          <p>
            <Link href={piece.guideHref}>Open {piece.name} guide →</Link>
          </p>
        )}
        {!piece.guideHref && piece.id === "marshal" && (
          <p>
            <Link href="/stratego-strategy#risk">
              See Marshal risk cases →
            </Link>
          </p>
        )}
        {!piece.guideHref && piece.id === "spy" && (
          <p>
            <Link href="/stratego-ranks">See Spy vs Marshal rules →</Link>
          </p>
        )}
      </div>
    </article>
  );
}

/** Server-rendered visual codex — featured specials + full 12-piece gallery */
export function PieceVisualCodex() {
  const specials = SPECIAL_IDS.map(
    (id) => ORIGINAL_PIECES.find((p) => p.id === id)!,
  );
  const others = ORIGINAL_PIECES.filter(
    (p) => !SPECIAL_IDS.includes(p.id as (typeof SPECIAL_IDS)[number]),
  );

  return (
    <div className="piece-codex">
      <div className="piece-codex__featured">
        {specials.map((p) => (
          <SpecialCard key={p.id} piece={p} />
        ))}
      </div>

      <h3 className="piece-codex__gallery-title">Full army visual gallery</h3>
      <p className="piece-codex__gallery-lead">
        All 12 Classic Original types. Special pieces above; remaining ranks and
        immobiles below.
      </p>
      <ul className="piece-codex__gallery">
        {ORIGINAL_PIECES.map((p) => {
          const featured = SPECIAL_IDS.includes(
            p.id as (typeof SPECIAL_IDS)[number],
          );
          return (
            <li
              key={p.id}
              className={`piece-codex__card ${featured ? "is-featured" : ""}`}
            >
              <PieceTile piece={p} size={64} />
              <strong>
                {p.rankLabel} {p.name}
              </strong>
              <span>×{p.quantity}</span>
              <span className="piece-codex__move">{p.movement}</span>
              {featured && (
                <span className="piece-codex__tag">Special</span>
              )}
            </li>
          );
        })}
      </ul>

      <p className="piece-codex__note">
        Officers not featured above ({others.map((p) => p.name).join(", ")},
        Bomb, Flag) still matter every game—see the interactive chart and table
        for full quantities and roles.
      </p>
    </div>
  );
}
