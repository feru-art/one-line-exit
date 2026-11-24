// The One-Line Exit — make.fun entry (program/v1).
// Writes one single-line resignation note to /output/entry.txt.
// The line is a fixed, hand-written line: deterministic, no network,
// no randomness, no clock. Stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line from the local V1–V5 head-to-head (4-0): the resignation
// framing lands because the dogs' unionization is both the joke and the
// reason, so the punchline needs no extra setup.
const LINE =
  "I am resigning as a dog walker, effective immediately: the dogs have unionized and, frankly, their demands are reasonable.";

const MAX_CHARS = 140;

function isValidGate(text: string): boolean {
  const chars = [...text];
  return chars.length >= 1 && chars.length <= MAX_CHARS && text.trim().length > 0;
}

if (!isValidGate(LINE)) {
  throw new Error(
    `line fails the gate: ${[...LINE].length} characters (must be 1-${MAX_CHARS})`,
  );
}

// The sandbox exposes the output directory as /output; the kit maps it to
// MAKEFUN_OUTPUT_DIR for local runs. Fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
