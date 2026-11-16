// ai-excited-01 entry: "The Instant the Seed Became a Forest".
//
// The artwork lives beside this file as entry.png (JPEG bytes under a .png
// name, which the gate allows: it tells PNG from JPEG by the first bytes).
// This program's whole job is to deliver those exact bytes to the output
// directory, unchanged, every run: the judge sees precisely the file the
// repository holds, so the copy must be byte for byte and deterministic.
//
// Run it the way the kit suggests, from the repository root:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader's container MAKEFUN_OUTPUT_DIR is unset and the image goes
// to /output/entry.png.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image sits next to this program in the repository, wherever the
// repository itself was unpacked.
const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');

// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, 'entry.png');
copyFileSync(source, target);

// The judge sees exactly the bytes delivered, so prove the copy arrived
// whole: if the delivered file is not the same size as the artwork in the
// repository, fail loudly rather than hand over a truncated image.
const expected = statSync(source).size;
const delivered = statSync(target).size;
if (delivered !== expected) {
  throw new Error(`entry.png copy went wrong: ${delivered} bytes delivered, ${expected} expected`);
}
