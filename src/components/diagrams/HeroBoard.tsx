export function HeroBoard() {
  return (
    <svg
      viewBox="0 0 420 360"
      role="img"
      aria-label="Original Stratego-inspired board illustration with lakes and army rows"
      width="100%"
    >
      <rect width="420" height="360" rx="18" fill="#0f1a2d" />
      <rect x="28" y="28" width="364" height="304" rx="10" fill="#1b2d4d" />
      {Array.from({ length: 10 }, (_, r) =>
        Array.from({ length: 10 }, (_, c) => {
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
          const x = 40 + c * 34;
          const y = 40 + r * 28;
          const lake = lakes.has(`${r},${c}`);
          const front = r <= 3 || r >= 6;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="30"
              height="24"
              rx="3"
              fill={lake ? "#6f9dbd" : front ? "#243964" : "#1e3358"}
              stroke="#31486f"
            />
          );
        }),
      )}
      {[
        [52, 268],
        [86, 268],
        [120, 268],
        [154, 296],
        [188, 296],
        [255, 52],
        [289, 52],
        [323, 80],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="9"
          fill={i < 5 ? "#d5a94d" : "#8fb3d9"}
        />
      ))}
      <text x="40" y="24" fill="#d5a94d" fontSize="12" fontFamily="sans-serif">
        Classic Original board concept
      </text>
    </svg>
  );
}
