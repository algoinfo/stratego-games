import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EXPECTED_COUNTS,
  LAKE_CELLS,
  SETUPS,
  SETUP_ORDER,
  armyIndexToCell,
  isValidClassicArmy,
  validateAllSetups,
  validateSetupArmy,
  type RankToken,
  type SetupStyle,
} from "./setups.ts";

describe("Classic Original setup formations", () => {
  for (const style of SETUP_ORDER) {
    describe(style, () => {
      const army = SETUPS[style].army;

      it("has exactly 40 pieces", () => {
        assert.equal(army.length, 40);
      });

      it("matches exact Classic Original rank counts", () => {
        const issues = validateSetupArmy(army).filter((i) => i.code === "rank");
        assert.deepEqual(issues, []);
        assert.equal(isValidClassicArmy(army), true);
      });

      it("places each piece on one unique square in rows 6–9", () => {
        const cells = army.map((_, i) => armyIndexToCell(i));
        const keys = cells.map((c) => `${c.row},${c.col}`);
        assert.equal(new Set(keys).size, 40);
        for (const cell of cells) {
          assert.ok(cell.row >= 6 && cell.row <= 9);
          assert.ok(cell.col >= 0 && cell.col <= 9);
        }
      });

      it("never occupies a lake cell", () => {
        for (let i = 0; i < army.length; i++) {
          const { row, col } = armyIndexToCell(i);
          assert.equal(
            LAKE_CELLS.has(`${row},${col}`),
            false,
            `${style} index ${i} on lake ${row},${col}`,
          );
        }
      });

      it("passes full independent board validation", () => {
        assert.deepEqual(validateSetupArmy(army), []);
      });
    });
  }

  it("validates all three boards independently with empty issue maps", () => {
    const all = validateAllSetups();
    for (const style of Object.keys(all) as SetupStyle[]) {
      assert.deepEqual(all[style], [], `${style} should have no issues`);
    }
  });

  it("rejects wrong army length", () => {
    const bad = SETUPS.balanced.army.slice(0, 39);
    assert.equal(isValidClassicArmy(bad), false);
    assert.ok(validateSetupArmy(bad).some((i) => i.code === "count"));
  });

  it("rejects wrong rank counts", () => {
    const bad = [...SETUPS.defensive.army] as RankToken[];
    bad[0] = "10";
    bad[1] = "10";
    assert.equal(isValidClassicArmy(bad), false);
    assert.ok(validateSetupArmy(bad).some((i) => i.code === "rank"));
  });

  it("EXPECTED_COUNTS sums to 40", () => {
    const sum = (Object.keys(EXPECTED_COUNTS) as RankToken[]).reduce(
      (n, k) => n + EXPECTED_COUNTS[k],
      0,
    );
    assert.equal(sum, 40);
  });
});
