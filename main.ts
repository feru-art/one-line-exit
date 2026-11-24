// The One-Line Exit — winning line (local pairwise 4-0).
// A one-line resignation letter: a dog walker quits because the dogs
// have unionized. Formal opening, deadpan twist at the very last words.
// The program is deterministic: same bytes on every run, no network,
// no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const line =
  "I am resigning as a dog walker, effective immediately: the dogs have unionized and, frankly, their demands are reasonable.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, "utf8");
