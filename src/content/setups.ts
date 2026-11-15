export type SetupStyle = "defensive" | "balanced" | "aggressive";

export type RankToken =
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
  | "F";

export type SetupDef = {
  id: SetupStyle;
  title: string;
  label: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  bestWhen: string;
  /** Rows 6–9, left→right, front→back — exactly 40 Classic Original pieces */
  army: RankToken[];
};

export const RANK_META: Record<
  RankToken,
  { name: string; pieceId: string }
> = {
  "10": { name: "Marshal", pieceId: "marshal" },
  "9": { name: "General", pieceId: "general" },
  "8": { name: "Colonel", pieceId: "colonel" },
  "7": { name: "Major", pieceId: "major" },
  "6": { name: "Captain", pieceId: "captain" },
  "5": { name: "Lieutenant", pieceId: "lieutenant" },
  "4": { name: "Sergeant", pieceId: "sergeant" },
  "3": { name: "Miner", pieceId: "miner" },
  "2": { name: "Scout", pieceId: "scout" },
  S: { name: "Spy", pieceId: "spy" },
  B: { name: "Bomb", pieceId: "bomb" },
  F: { name: "Flag", pieceId: "flag" },
};

export const EXPECTED_COUNTS: Record<RankToken, number> = {
  "10": 1,
  "9": 1,
  "8": 2,
  "7": 3,
  "6": 4,
  "5": 4,
  "4": 4,
  "3": 5,
  "2": 8,
  S: 1,
  B: 6,
  F: 1,
};

/** Lake cells on a 10×10 board (row,col) */
export const LAKE_CELLS = new Set([
  "4,2",
  "4,3",
  "5,2",
  "5,3",
  "4,6",
  "4,7",
  "5,6",
  "5,7",
]);

export const SETUPS: Record<SetupStyle, SetupDef> = {
  defensive: {
    id: "defensive",
    title: "Corner Fort",
    label: "Defensive",
    summary:
      "Flag nested in a Bomb-screened back corner. Elites sit mid-rear while Scouts and Miners wait for safer probes.",
    strengths: [
      "Harder early Flag captures",
      "Punishes reckless Scout rushes",
      "Buys time to gather information",
    ],
    weaknesses: [
      "Can concede board control",
      "Miners may arrive late to enemy Bombs",
      "Predictable if you always corner-Flag",
    ],
    bestWhen: "You prefer attrition and reading before committing elites.",
    army: [
      "2", "4", "6", "2", "5", "5", "2", "6", "3", "2",
      "7", "3", "8", "4", "6", "3", "8", "7", "3", "5",
      "5", "6", "B", "7", "9", "10", "4", "B", "S", "4",
      "3", "B", "F", "B", "B", "2", "B", "2", "2", "2",
    ],
  },
  balanced: {
    id: "balanced",
    title: "Twin Shore",
    label: "Balanced",
    summary:
      "Flag mid-back behind a Bomb pocket. Scouts on both wings, Miners reserved, Marshal and General ready for either lake lane.",
    strengths: [
      "Adapts to early discoveries",
      "Keeps Scout lanes open",
      "Avoids overcommitment",
    ],
    weaknesses: [
      "Neither max defense nor max pressure",
      "Needs active midgame decisions",
      "Flag pocket still needs Miner patience",
    ],
    bestWhen: "You are still learning opponent patterns or want a flexible default.",
    army: [
      "2", "2", "5", "6", "4", "4", "6", "5", "2", "2",
      "3", "7", "8", "6", "2", "2", "6", "8", "7", "3",
      "4", "5", "B", "9", "B", "10", "B", "7", "5", "4",
      "2", "3", "B", "3", "F", "B", "S", "3", "B", "2",
    ],
  },
  aggressive: {
    id: "aggressive",
    title: "Forward Blitz",
    label: "Aggressive",
    summary:
      "Colonels and Majors push early contact. Marshal and Spy sit ready for fights, with a thinner Flag Bomb line.",
    strengths: [
      "Forces early answers",
      "Seizes space and information",
      "Strong versus passive setups",
    ],
    weaknesses: [
      "Thinner Flag defense",
      "Higher Spy and Bomb risk for forward elites",
      "Mistimed rushes can gift the board",
    ],
    bestWhen: "You convert early pressure before a counter-raid reaches your Flag.",
    army: [
      "2", "8", "7", "6", "2", "2", "6", "7", "8", "2",
      "5", "9", "10", "5", "2", "4", "5", "S", "6", "5",
      "4", "3", "B", "7", "3", "B", "4", "3", "3", "4",
      "2", "2", "B", "B", "F", "B", "B", "2", "3", "6",
    ],
  },
};

export const SETUP_ORDER: SetupStyle[] = [
  "defensive",
  "balanced",
  "aggressive",
];

export function countArmy(army: RankToken[]): Record<string, number> {
  const c: Record<string, number> = {};
  for (const p of army) c[p] = (c[p] ?? 0) + 1;
  return c;
}

export function isValidClassicArmy(army: RankToken[]): boolean {
  if (army.length !== 40) return false;
  const c = countArmy(army);
  return (Object.keys(EXPECTED_COUNTS) as RankToken[]).every(
    (k) => c[k] === EXPECTED_COUNTS[k],
  );
}
