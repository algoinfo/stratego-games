export type FormationStyle = "defensive" | "balanced" | "aggressive";

type Piece =
  | "10"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2"
  | "S"
  | "B"
  | "F"
  | ""
  | "H"; // hidden opponent back

type Formation = {
  title: string;
  subtitle: string;
  alt: string;
  caption: string;
  /** Bottom army rows 6–9, left→right, front→back — exactly 40 pieces */
  army: Piece[];
};

/**
 * Three original Classic Original deployments.
 * Each army totals 40 pieces: 1×10, 1×9, 2×8, 3×7, 4×6, 4×5, 4×4, 5×3, 8×2, 1×S, 6×B, 1×F.
 */
export const FORMATIONS: Record<FormationStyle, Formation> = {
  defensive: {
    title: "Corner Fort",
    subtitle: "Defensive",
    alt: "Defensive Stratego setup with Flag in a Bomb-screened back corner",
    caption:
      "Original defensive diagram: Flag nested at the back-left corner, Bombs on every approach, elites held mid-rear, Scouts and Miners kept for later probes.",
    army: [
      "2", "4", "6", "2", "5", "5", "2", "6", "3", "2",
      "7", "3", "8", "4", "6", "3", "8", "7", "3", "5",
      "5", "6", "B", "7", "9", "10", "4", "B", "S", "4",
      "3", "B", "F", "B", "B", "2", "B", "2", "2", "2",
    ],
  },
  balanced: {
    title: "Twin Shore",
    subtitle: "Balanced",
    alt: "Balanced Stratego setup with split wings and a mid-back Flag pocket",
    caption:
      "Original balanced diagram: Flag mid-back behind a Bomb pocket, Scouts on both wings, Miners reserved, Marshal and General ready to answer either lake lane.",
    army: [
      "2", "2", "5", "6", "4", "4", "6", "5", "2", "2",
      "3", "7", "8", "6", "2", "2", "6", "8", "7", "3",
      "4", "5", "B", "9", "B", "10", "B", "7", "5", "4",
      "2", "3", "B", "3", "F", "B", "S", "3", "B", "2",
    ],
  },
  aggressive: {
    title: "Forward Blitz",
    subtitle: "Aggressive",
    alt: "Aggressive Stratego setup with officers and Scouts pushed toward the front",
    caption:
      "Original aggressive diagram: Colonels and Majors on the front, Marshal and Spy ready for early contact, thinner Flag Bomb line that trades safety for board pressure.",
    army: [
      "2", "8", "7", "6", "2", "2", "6", "7", "8", "2",
      "5", "9", "10", "5", "2", "4", "5", "S", "6", "5",
      "4", "3", "B", "7", "3", "B", "4", "3", "3", "4",
      "2", "2", "B", "B", "F", "B", "B", "2", "3", "6",
    ],
  },
};

const LEGEND: { id: Piece; label: string; qty: number }[] = [
  { id: "10", label: "Marshal", qty: 1 },
  { id: "9", label: "General", qty: 1 },
  { id: "8", label: "Colonel", qty: 2 },
  { id: "7", label: "Major", qty: 3 },
  { id: "6", label: "Captain", qty: 4 },
  { id: "5", label: "Lieutenant", qty: 4 },
  { id: "4", label: "Sergeant", qty: 4 },
  { id: "3", label: "Miner", qty: 5 },
  { id: "2", label: "Scout", qty: 8 },
  { id: "S", label: "Spy", qty: 1 },
  { id: "B", label: "Bomb", qty: 6 },
  { id: "F", label: "Flag", qty: 1 },
];

const LAKES = new Set([
  "4,2",
  "4,3",
  "5,2",
  "5,3",
  "4,6",
  "4,7",
  "5,6",
  "5,7",
]);

const COLS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function pieceFill(p: Piece): string {
  if (p === "F") return "#D5A94D";
  if (p === "B") return "#8B3A3A";
  if (p === "S") return "#3D5A80";
  if (p === "10" || p === "9") return "#111F36";
  if (p === "H") return "#5B6F8F";
  return "#172B4D";
}

function pieceText(p: Piece): string {
  if (p === "F") return "#111F36";
  return "#F5F6F4";
}

function PieceTile({
  x,
  y,
  size,
  piece,
  rx = 3,
}: {
  x: number;
  y: number;
  size: number;
  piece: Piece;
  rx?: number;
}) {
  if (piece === "H") {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={size}
          height={size}
          rx={rx}
          fill="#6B7F9E"
          stroke="#41536F"
          strokeWidth="0.8"
        />
        <rect
          x={x + 4}
          y={y + 4}
          width={size - 8}
          height={size - 8}
          rx={2}
          fill="#556887"
          opacity="0.85"
        />
        <path
          d={`M${x + 7} ${y + size / 2} h${size - 14}`}
          stroke="#8FA0BA"
          strokeWidth="1.2"
          opacity="0.5"
        />
      </g>
    );
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        rx={rx}
        fill={pieceFill(piece)}
        stroke="#0D1626"
        strokeWidth="0.7"
      />
      <text
        x={x + size / 2}
        y={y + size / 2 + 4.2}
        textAnchor="middle"
        fontSize={piece === "10" ? 11 : 12}
        fontWeight="700"
        fontFamily="DM Sans, system-ui, sans-serif"
        fill={pieceText(piece)}
      >
        {piece}
      </text>
    </g>
  );
}

export function FormationDiagram({
  style,
  caption,
  showLegend = true,
}: {
  style: FormationStyle;
  caption?: string;
  showLegend?: boolean;
}) {
  const data = FORMATIONS[style];
  const cell = 32;
  const boardPad = 28;
  const legendW = showLegend ? 118 : 0;
  const boardInner = 10 * cell;
  const boardW = boardPad * 2 + boardInner;
  const boardH = boardPad * 2 + boardInner + 8;
  const w = boardW + legendW + (showLegend ? 16 : 0);
  const h = boardH + 36;

  const hiddenTop: Piece[] = Array.from({ length: 40 }, () => "H");

  return (
    <figure className="diagram diagram--formation">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={data.alt}
        width="100%"
      >
        <rect width={w} height={h} rx="12" fill="#F5F6F4" />
        <rect
          x="1"
          y="1"
          width={w - 2}
          height={h - 2}
          rx="11"
          fill="none"
          stroke="#D5A94D"
          strokeWidth="1.2"
          opacity="0.55"
        />

        <text
          x={boardPad}
          y={18}
          fontSize="13"
          fontWeight="700"
          fontFamily="DM Sans, system-ui, sans-serif"
          fill="#111F36"
        >
          {data.subtitle}: {data.title}
        </text>
        <text
          x={boardPad}
          y={32}
          fontSize="9"
          fontFamily="DM Sans, system-ui, sans-serif"
          fill="#788397"
        >
          Classic Original · 40-piece deployment · original diagram
        </text>

        {/* Board frame */}
        <rect
          x={boardPad - 6}
          y={boardPad + 10}
          width={boardInner + 12}
          height={boardInner + 12}
          rx="6"
          fill="#E8ECF2"
          stroke="#172B4D"
          strokeWidth="1.5"
        />

        {Array.from({ length: 10 }, (_, r) =>
          Array.from({ length: 10 }, (_, c) => {
            const x = boardPad + c * cell;
            const y = boardPad + 16 + r * cell;
            const lake = LAKES.has(`${r},${c}`);
            const checker = (r + c) % 2 === 0;

            if (lake) {
              return (
                <g key={`${r}-${c}`}>
                  <rect
                    x={x}
                    y={y}
                    width={cell - 1}
                    height={cell - 1}
                    fill="#7BA3C4"
                  />
                  <rect
                    x={x + 3}
                    y={y + 3}
                    width={cell - 7}
                    height={cell - 7}
                    fill="#9BBDD8"
                    opacity="0.45"
                    rx="2"
                  />
                </g>
              );
            }

            return (
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width={cell - 1}
                height={cell - 1}
                fill={checker ? "#F7F8F6" : "#DFE5EF"}
                stroke="#C5CEDD"
                strokeWidth="0.5"
              />
            );
          }),
        )}

        {/* Opponent hidden army — rows 0–3 */}
        {hiddenTop.map((p, i) => {
          const r = Math.floor(i / 10);
          const c = i % 10;
          return (
            <PieceTile
              key={`h-${i}`}
              x={boardPad + c * cell + 2}
              y={boardPad + 16 + r * cell + 2}
              size={cell - 5}
              piece={p}
            />
          );
        })}

        {/* Own revealed army — rows 6–9 */}
        {data.army.map((p, i) => {
          const r = 6 + Math.floor(i / 10);
          const c = i % 10;
          return (
            <PieceTile
              key={`a-${i}`}
              x={boardPad + c * cell + 2}
              y={boardPad + 16 + r * cell + 2}
              size={cell - 5}
              piece={p}
            />
          );
        })}

        {/* Column labels */}
        {COLS.map((label, c) => (
          <text
            key={`col-${label}`}
            x={boardPad + c * cell + cell / 2 - 0.5}
            y={boardPad + 16 + boardInner + 14}
            textAnchor="middle"
            fontSize="9"
            fill="#788397"
            fontFamily="DM Sans, system-ui, sans-serif"
          >
            {label}
          </text>
        ))}

        {/* Row labels */}
        {Array.from({ length: 10 }, (_, r) => (
          <text
            key={`row-${r}`}
            x={boardPad - 10}
            y={boardPad + 16 + r * cell + cell / 2 + 3}
            textAnchor="middle"
            fontSize="9"
            fill="#788397"
            fontFamily="DM Sans, system-ui, sans-serif"
          >
            {r}
          </text>
        ))}

        {/* Side legend */}
        {showLegend && (
          <g transform={`translate(${boardW + 8}, ${boardPad + 8})`}>
            <text
              x="0"
              y="0"
              fontSize="10"
              fontWeight="700"
              fill="#111F36"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              Army key
            </text>
            {LEGEND.map((item, i) => (
              <g key={item.id} transform={`translate(0, ${16 + i * 22})`}>
                <PieceTile x={0} y={0} size={16} piece={item.id} rx={2} />
                <text
                  x={22}
                  y={12}
                  fontSize="10"
                  fill="#263247"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  {item.id} · ×{item.qty}
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>
      <figcaption>{caption ?? data.caption}</figcaption>
    </figure>
  );
}

/** Show all three original deployments in one section */
export function FormationGallery() {
  return (
    <div className="formation-gallery">
      {(Object.keys(FORMATIONS) as FormationStyle[]).map((style) => (
        <FormationDiagram key={style} style={style} />
      ))}
    </div>
  );
}
