export function ScoutPath() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 420 180"
        role="img"
        aria-label="Scout moving along a straight open file"
        width="100%"
      >
        <rect width="420" height="180" fill="#152338" rx="10" />
        {Array.from({ length: 8 }, (_, i) => (
          <rect
            key={i}
            x={30 + i * 44}
            y={70}
            width="40"
            height="40"
            fill={i === 0 || i === 7 ? "#0F1A2E" : "#1A2A44"}
            stroke="#243552"
          />
        ))}
        <circle cx="50" cy="90" r="12" fill="#d5a94d" />
        <text
          x="50"
          y="94"
          textAnchor="middle"
          fontSize="11"
          fill="#111f36"
          fontWeight="700"
        >
          2
        </text>
        <path
          d="M72 90 H330"
          stroke="#d5a94d"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#d5a94d" />
          </marker>
        </defs>
        <text x="30" y="40" fill="#E8EEF8" fontSize="13">
          Scout may travel any number of open squares in a straight line
        </text>
        <text x="30" y="150" fill="#8B9BB3" fontSize="12">
          Movement stops before friendly pieces, lakes, or board edges.
        </text>
      </svg>
      <figcaption>
        Scout special movement: unlimited orthogonal steps through empty land
        squares, then optional attack onto an adjacent enemy.
      </figcaption>
    </figure>
  );
}
