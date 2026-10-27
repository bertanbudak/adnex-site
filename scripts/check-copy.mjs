// Copy grep from BRIEF.md on the built HTML: no em or en dashes, no exclamation marks in visible text,
// no comma before "and", "AdCrypt" with a capital C, "Gram" not "TON". Run after npm run build.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith('.html')) files.push(path);
  }
};
walk('dist');

const rules = [
  { name: 'em or en dash', re: /[–—]/g },
  { name: 'exclamation mark in visible text', re: /!(?!--)/g, visibleOnly: true },
  { name: 'comma before "and"', re: /,\s+and\b/g },
  { name: '"Adcrypt" or "ADCRYPT" (should be AdCrypt)', re: /\b(Adcrypt|ADCRYPT)\b/g },
  { name: '"TON" (should be Gram)', re: /\bTON\b/g },
];

const stripMarkup = (html) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<!doctype[^>]*>/gi, '')
    .replace(/<[^>]+>/g, ' ');

let failures = 0;
for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const visible = stripMarkup(raw);
  for (const rule of rules) {
    const haystack = rule.visibleOnly ? visible : raw;
    const hits = [...haystack.matchAll(rule.re)];
    for (const hit of hits) {
      failures += 1;
      const snippet = haystack.slice(Math.max(0, hit.index - 40), hit.index + 40).replace(/\s+/g, ' ');
      console.log(`FAIL ${file}: ${rule.name}: ...${snippet}...`);
    }
  }
}
console.log(failures === 0 ? `copy check passed on ${files.length} file(s)` : `${failures} copy issue(s)`);
process.exitCode = failures === 0 ? 0 : 1;
