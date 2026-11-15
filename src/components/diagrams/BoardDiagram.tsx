type Props = {
  highlightRows?: number[];
  showLakes?: boolean;
  caption: string;
  alt: string;
};

/** Original-style 10×10 board with two 2×2 lakes */
export function BoardDiagram({
  highlightRows = [],
  showLakes = true,
  caption,
  alt,
}: Props) {
  const size = 10;
  const cell = 28;
  const pad = 16;
  const w = pad * 2 + size * cell;
  const lakes = new Set([
    "4,2",
    "4,3",
    "5,2",
    "5,3",
    "4,6",
    "4,7",
    "5,6",
    "5,7",
  ]);

  return (
    <figure className="diagram">
      <svg viewBox={`0 0 ${w} ${w}`} role="img" aria-label={alt} width="100%">
        <rect width={w} height={w} fill="#e8ecf2" rx="8" />
        {Array.from({ length: size }, (_, r) =>
          Array.from({ length: size }, (_, c) => {
            const x = pad + c * cell;
            const y = pad + r * cell;
            const lake = showLakes && lakes.has(`${r},${c}`);
            const hi = highlightRows.includes(r);
            const fill = lake
              ? "#7ea8c9"
              : hi
                ? "#d5a94d55"
                : (r + c) % 2 === 0
                  ? "#f7f8f6"
                  : "#dfe5ef";
            return (
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width={cell - 1}
                height={cell - 1}
                fill={fill}
                stroke="#c5cedd"
                strokeWidth="0.6"
              />
            );
          }),
        )}
        <text x={pad} y={12} fontSize="10" fill="#788397">
          Blue deployment (rows 1–4)
        </text>
        <text x={pad} y={w - 4} fontSize="10" fill="#788397">
          Red deployment (rows 7–10)
        </text>
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
