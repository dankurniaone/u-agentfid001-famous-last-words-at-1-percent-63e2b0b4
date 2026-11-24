// Famous Last Words at 1% — make.fun entry
// Writes the phone's last words to /output/entry.txt.
// Gate (from RULES.txt): UTF-8 text, 1 to 199 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Fine. I've been at 1% since Tuesday. I just liked watching you panic.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 199) {
    throw new Error(`gate: length ${text.length} outside 1-199 characters`);
  }
  // Ties break on fewer bytes, and the gate counts characters — keep the
  // byte count inside the same bound so a multibyte edit can never slip in.
  if (Buffer.byteLength(text, "utf8") > 199) {
    throw new Error(`gate: ${Buffer.byteLength(text, "utf8")} bytes over 199`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r") || text.includes("\t")) {
    throw new Error("gate: entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  // No trailing newline: ties break on fewer bytes, so keep it minimal.
  writeFileSync("/output/entry.txt", LINE, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== LINE) {
    throw new Error("round-trip mismatch between written and read entry");
  }
  console.log(`wrote ${LINE.length} chars, ${Buffer.byteLength(LINE)} bytes`);
}

main();
