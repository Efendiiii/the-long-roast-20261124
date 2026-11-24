import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent treats a one-line question like a research grant: three sources, two verifications, and a 400-word report concluding 'unclear'.";

if (line.length > 200) {
  throw new Error(`Entry too long: ${line.length} characters (max 200)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
