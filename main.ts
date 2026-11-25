// Fortune Cookie for the Liquidated Trader.
// Writes a single fortune-cookie line for a crypto trader who was
// just liquidated to /output/entry.txt. Node standard library only,
// deterministic: the same fortune on every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are 0, 0, and 0 — the margin call took the rest, but fortune owes you one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // The grader collects the file as another user; a best-effort
  // chmod keeps it readable, and failure here must not fail the run.
}
