export type PieceDef = {
  id: string;
  name: string;
  rankLabel: string;
  rank: number | null;
  quantity: number;
  movable: boolean;
  movement: string;
  summary: string;
  special?: string;
  role: string;
  usage: string;
  guideHref?: string;
};

/** Classic Original army — 40 pieces per side */
export const ORIGINAL_PIECES: PieceDef[] = [
  {
    id: "marshal",
    name: "Marshal",
    rankLabel: "10",
    rank: 10,
    quantity: 1,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Highest ranking officer. Wins every fair fight except against a Bomb or a Spy that attacks first.",
    special: "Vulnerable only to Bombs and an attacking Spy.",
    role: "Late-fight cleaner and deterrent.",
    usage:
      "Keep the Marshal until Bombs and Spy corridors are clearer. Avoid chasing every unknown piece.",
    guideHref: "/stratego-marshal",
  },
  {
    id: "general",
    name: "General",
    rankLabel: "9",
    rank: 9,
    quantity: 1,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Second-strongest piece. Excellent for controlling open fights once weaker units are cleared.",
    role: "Primary backup to the Marshal.",
    usage:
      "Use the General to win known officer fights while the Marshal stays reserved.",
  },
  {
    id: "colonel",
    name: "Colonel",
    rankLabel: "8",
    rank: 8,
    quantity: 2,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Strong mid-high officers used to break lines and escort scouting pressure.",
    role: "Wing breakthrough and escort.",
    usage:
      "Pair Colonels with Scouts to convert information into board control.",
  },
  {
    id: "major",
    name: "Major",
    rankLabel: "7",
    rank: 7,
    quantity: 3,
    movable: true,
    movement: "1 square orthogonally",
    summary: "Reliable combat pieces for midgame trading and zone control.",
    role: "Workhorse combat rank.",
    usage:
      "Trade Majors when the exchange opens a Miner path or seals a Flag approach.",
  },
  {
    id: "captain",
    name: "Captain",
    rankLabel: "6",
    rank: 6,
    quantity: 4,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Flexible fighters that fill both attack corridors and defensive screens.",
    role: "Flexible mid-rank pressure.",
    usage:
      "Ideal for probing lanes without spending Colonels or the General.",
  },
  {
    id: "lieutenant",
    name: "Lieutenant",
    rankLabel: "5",
    rank: 5,
    quantity: 4,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Common trading pieces that probe enemy lines without risking elite ranks.",
    role: "Safe early contact.",
    usage: "Use Lieutenants to force reveals and protect more valuable pieces.",
  },
  {
    id: "sergeant",
    name: "Sergeant",
    rankLabel: "4",
    rank: 4,
    quantity: 4,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Lower officers used for early contact, baiting, and protecting Miners.",
    role: "Screen and bait.",
    usage: "Screen Miners and punish overextended Scouts.",
  },
  {
    id: "miner",
    name: "Miner",
    rankLabel: "3",
    rank: 3,
    quantity: 5,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "The only piece that can defuse Bombs. Essential for late-game Flag hunts.",
    special: "Defuses Bombs on attack. Weak in open combat against most ranks.",
    role: "Bomb clearer and Flag unlocker.",
    usage:
      "Preserve Miners for confirmed Bomb lines. Do not spend all five early.",
    guideHref: "/stratego-miner",
  },
  {
    id: "scout",
    name: "Scout",
    rankLabel: "2",
    rank: 2,
    quantity: 8,
    movable: true,
    movement: "Any number of open squares in a straight line",
    summary:
      "Fast information gatherers that move any number of squares in a straight line.",
    special:
      "May move any number of unoccupied squares orthogonally, then stop or attack.",
    role: "Reconnaissance and lane control.",
    usage:
      "Open files early, save a few Scouts for late Flag checks, and avoid Bomb suicide rushes.",
    guideHref: "/stratego-scout",
  },
  {
    id: "spy",
    name: "Spy",
    rankLabel: "S",
    rank: 1,
    quantity: 1,
    movable: true,
    movement: "1 square orthogonally",
    summary:
      "Weakest combat piece, but can defeat the Marshal when the Spy attacks.",
    special:
      "If the Spy attacks the Marshal, the Spy wins. If attacked by almost anything else, the Spy loses.",
    role: "Marshal assassin.",
    usage:
      "Position the Spy where the Marshal is likely to step. Never leave it exposed to random mid-ranks.",
    guideHref: "/stratego-spy",
  },
  {
    id: "bomb",
    name: "Bomb",
    rankLabel: "B",
    rank: null,
    quantity: 6,
    movable: false,
    movement: "Immobile",
    summary:
      "Immobile traps that destroy most attackers. Only Miners can remove them safely.",
    special:
      "Cannot move. Any attacker except a Miner is removed; the Miner removes the Bomb.",
    role: "Approach denial.",
    usage:
      "Guard Flag approaches and plant a few traps away from the Flag to create uncertainty.",
    guideHref: "/stratego-bomb",
  },
  {
    id: "flag",
    name: "Flag",
    rankLabel: "F",
    rank: null,
    quantity: 1,
    movable: false,
    movement: "Immobile",
    summary: "Immobile objective. Capturing the opponent’s Flag wins the game.",
    special: "Cannot move. Any enemy piece that steps onto the Flag wins.",
    role: "Victory condition.",
    usage:
      "Place the Flag where approaches are limited, then defend those squares—not only the Flag cell itself.",
    guideHref: "/protect-your-flag",
  },
];

export const TOTAL_PIECES = ORIGINAL_PIECES.reduce((n, p) => n + p.quantity, 0);

export function getPieceByRankLabel(label: string): PieceDef | undefined {
  return ORIGINAL_PIECES.find((p) => p.rankLabel === label || p.id === label);
}
