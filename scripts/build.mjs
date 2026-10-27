// Copies src/ and public/assets/ into dist/. The page is served at /adcrypt/, so src/adcrypt/ becomes dist/adcrypt/
// and public/assets/ lands at dist/adcrypt/assets/. src/404.html goes to the output root.
import { cpSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
cpSync('src', 'dist', { recursive: true });
cpSync('public/assets', 'dist/adcrypt/assets', { recursive: true });
console.log('built dist/ (serve /adcrypt/ from dist/)');
