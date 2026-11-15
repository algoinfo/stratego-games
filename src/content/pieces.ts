export type PieceDef = {
  id: string;
  name: string;
  rankLabel: string;
  rank: number | null;
  quantity: number;
  movable: boolean;
  summary: string;
  special?: string;
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
    summary: "Highest ranking officer. Wins every fair fight except against a Bomb or a Spy that attacks first.",
    special: "Vulnerable only to Bombs and an attacking Spy.",
  },
  {
    id: "general",
    name: "General",
    rankLabel: "9",
    rank: 9,
    quantity: 1,
    movable: true,
    summary: "Second-strongest piece. Excellent for controlling open fights once weaker units are cleared.",
  },
  {
    id: "colonel",
    name: "Colonel",
    rankLabel: "8",
    rank: 8,
    quantity: 2,
    movable: true,
    summary: "Strong mid-high officers used to break lines and escort scouting pressure.",
  },
  {
    id: "major",
    name: "Major",
    rankLabel: "7",
    rank: 7,
    quantity: 3,
    movable: true,
    summary: "Reliable combat pieces for midgame trading and zone control.",
  },
  {
    id: "captain",
    name: "Captain",
    rankLabel: "6",
    rank: 6,
    quantity: 4,
    movable: true,
    summary: "Flexible fighters that fill both attack corridors and defensive screens.",
  },
  {
    id: "lieutenant",
    name: "Lieutenant",
    rankLabel: "5",
    rank: 5,
    quantity: 4,
    movable: true,
    summary: "Common trading pieces that probe enemy lines without risking elite ranks.",
  },
  {
    id: "sergeant",
    name: "Sergeant",
    rankLabel: "4",
    rank: 4,
    quantity: 4,
    movable: true,
    summary: "Lower officers used for early contact, baiting, and protecting Miners.",
  },
  {
    id: "miner",
    name: "Miner",
    rankLabel: "3",
    rank: 3,
    quantity: 5,
    movable: true,
    summary: "The only piece that can defuse Bombs. Essential for late-game Flag hunts.",
    special: "Defuses Bombs on attack. Weak in open combat against most ranks.",
  },
  {
    id: "scout",
    name: "Scout",
    rankLabel: "2",
    rank: 2,
    quantity: 8,
    movable: true,
    summary: "Fast information gatherers that move any number of squares in a straight line.",
    special: "May move any number of unoccupied squares orthogonally, then stop or attack.",
  },
  {
    id: "spy",
    name: "Spy",
    rankLabel: "S / 1",
    rank: 1,
    quantity: 1,
    movable: true,
    summary: "Weakest combat piece, but can defeat the Marshal when the Spy attacks.",
    special: "If the Spy attacks the Marshal, the Spy wins. If attacked by almost anything else, the Spy loses.",
  },
  {
    id: "bomb",
    name: "Bomb",
    rankLabel: "B",
    rank: null,
    quantity: 6,
    movable: false,
    summary: "Immobile traps that destroy most attackers. Only Miners can remove them safely.",
    special: "Cannot move. Any attacker except a Miner is removed; the Miner removes the Bomb.",
  },
  {
    id: "flag",
    name: "Flag",
    rankLabel: "F",
    rank: null,
    quantity: 1,
    movable: false,
    summary: "Immobile objective. Capturing the opponent’s Flag wins the game.",
    special: "Cannot move. Any enemy piece that steps onto the Flag wins.",
  },
];

export const TOTAL_PIECES = ORIGINAL_PIECES.reduce((n, p) => n + p.quantity, 0);
