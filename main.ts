import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am resigning as a dog walker, effective immediately: the dogs have unionized and, frankly, their demands are reasonable.";

const codePointCount = [...LINE].length;
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line with no line breaks");
}
if (LINE.trim().length === 0 || codePointCount < 1 || codePointCount > 140) {
  throw new Error(
    `entry line must be 1-140 characters, got ${codePointCount}`
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
