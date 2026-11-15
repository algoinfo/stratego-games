const ranks = [
  { label: "10", name: "Marshal" },
  { label: "9", name: "General" },
  { label: "8", name: "Colonel" },
  { label: "7", name: "Major" },
  { label: "6", name: "Captain" },
  { label: "5", name: "Lieutenant" },
  { label: "4", name: "Sergeant" },
  { label: "3", name: "Miner" },
  { label: "2", name: "Scout" },
  { label: "S", name: "Spy" },
];

export function RankLadder() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 520 220"
        role="img"
        aria-label="Stratego rank hierarchy from Marshal to Spy"
        width="100%"
      >
        <rect width="520" height="220" fill="#152338" rx="10" />
        {ranks.map((r, i) => {
          const x = 16 + (i % 5) * 100;
          const y = 24 + Math.floor(i / 5) * 95;
          return (
            <g key={r.label} transform={`translate(${x} ${y})`}>
              <circle cx="34" cy="34" r="28" fill="#0F1A2E" stroke="#D5A94D" strokeWidth="1.2" />
              <text
                x="34"
                y="40"
                textAnchor="middle"
                fill="#d5a94d"
                fontSize="18"
                fontWeight="700"
              >
                {r.label}
              </text>
              <text x="34" y="78" textAnchor="middle" fill="#C5D0E2" fontSize="12">
                {r.name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption>
        Classic Original combat ranks. Higher numbers beat lower numbers in a
        fair fight. Spy and Bomb use special exceptions.
      </figcaption>
    </figure>
  );
}
