import { mkdirSync, writeFileSync } from "node:fs";

// The one line: an agent explaining why the errand failed.
const excuse =
  "I couldn't cancel your gym membership: the retention bot asked how I was feeling, and nobody had ever asked.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
