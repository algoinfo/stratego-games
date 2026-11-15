export function SpyMarshal() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 420 170"
        role="img"
        aria-label="Spy attacking Marshal and winning"
        width="100%"
      >
        <rect width="420" height="170" fill="#152338" rx="10" />
        <circle cx="110" cy="78" r="34" fill="#3d5a40" stroke="#D5A94D" strokeWidth="1.2" />
        <text
          x="110"
          y="84"
          textAnchor="middle"
          fill="#fff"
          fontSize="18"
          fontWeight="700"
        >
          S
        </text>
        <text x="110" y="130" textAnchor="middle" fill="#C5D0E2" fontSize="13">
          Spy attacks
        </text>
        <text
          x="210"
          y="84"
          textAnchor="middle"
          fill="#d5a94d"
          fontSize="22"
          fontWeight="700"
        >
          →
        </text>
        <circle cx="310" cy="78" r="34" fill="#0F1A2E" stroke="#D5A94D" strokeWidth="1.2" />
        <text
          x="310"
          y="84"
          textAnchor="middle"
          fill="#d5a94d"
          fontSize="18"
          fontWeight="700"
        >
          10
        </text>
        <text x="310" y="130" textAnchor="middle" fill="#C5D0E2" fontSize="13">
          Marshal falls
        </text>
        <text x="30" y="28" fill="#8B9BB3" fontSize="12">
          Direction matters: the Spy must be the attacker. If the Marshal
          strikes first, the Spy loses.
        </text>
      </svg>
      <figcaption>
        Spy versus Marshal: only an attacking Spy defeats the Marshal. This is a
        one-way exception to normal rank order.
      </figcaption>
    </figure>
  );
}
