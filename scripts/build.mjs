import { copyFile, cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const files = ['index.html', 'App.tsx', 'README.md', '_headers'];
const directories = ['music'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  try {
    const info = await stat(source);
    if (info.isFile()) {
      await copyFile(source, path.join(dist, file));
    }
  } catch {
    // Optional files are skipped.
  }
}

for (const directory of directories) {
  const source = path.join(root, directory);
  try {
    const info = await stat(source);
    if (info.isDirectory()) {
      await cp(source, path.join(dist, directory), { recursive: true });
    }
  } catch {
    // Optional directories are skipped.
  }
}

const output = await readdir(dist);
console.log(`Built ${output.length} top-level item(s) to ${path.relative(root, dist)}`);
