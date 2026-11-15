export function BombMiner() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 420 170" role="img" aria-label="Miner attacking a Bomb and removing it" width="100%">
        <rect width="420" height="170" fill="#eef2f8" rx="10" />
        <circle cx="110" cy="78" r="34" fill="#172b4d" />
        <text x="110" y="84" textAnchor="middle" fill="#d5a94d" fontSize="20" fontWeight="700">
          3
        </text>
        <text x="110" y="130" textAnchor="middle" fill="#263247" fontSize="13">
          Miner attacks
        </text>
        <text x="210" y="84" textAnchor="middle" fill="#d5a94d" fontSize="22" fontWeight="700">
          →
        </text>
        <circle cx="310" cy="78" r="34" fill="#9b3b3b" />
        <text x="310" y="84" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700">
          B
        </text>
        <text x="310" y="130" textAnchor="middle" fill="#263247" fontSize="13">
          Bomb removed
        </text>
        <text x="30" y="28" fill="#788397" fontSize="12">
          Any other attacker is destroyed by the Bomb. Only the Miner succeeds.
        </text>
      </svg>
      <figcaption>
        Bomb and Miner interaction in Classic Original: Miners defuse Bombs;
        other ranks lose when they attack a Bomb.
      </figcaption>
    </figure>
  );
}
