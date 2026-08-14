#!/usr/bin/env node
/**
 * CLI Watcher for DOMlings (Rustlings Node/JSDOM edition)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\x1b[36m%s\x1b[0m', '==================================================');
console.log('\x1b[33m%s\x1b[0m', '  🦀 DOMlings CLI Runner (Rustlings JS DOM)       ');
console.log('\x1b[36m%s\x1b[0m', '==================================================');
console.log('\nPara iniciar o app interativo web: npm run dev\n');
