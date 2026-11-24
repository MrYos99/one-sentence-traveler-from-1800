// One Sentence for a Traveler from 1800 — make.fun entry.
//
// The entry is a single sentence (152 characters) that explains the modern
// internet to someone arriving from the year 1800, using only things such a
// person already knows: libraries, post offices, streets, letters, blinking.
// No word in it was coined after 1800. The program writes it to
// /output/entry.txt, where the sealed scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Think of every library and post office on earth joined by a single street, so any word you write can reach any soul alive in the time it takes to blink.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
console.log(`wrote ${SENTENCE.length} characters to ${join(outDir, "entry.txt")}`);
