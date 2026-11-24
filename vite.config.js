import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Copy the ffmpeg.wasm core and caption font into public/ so the site is fully self-hosted.
const root = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(root, 'public/ffmpeg'), { recursive: true });
for (const f of ['ffmpeg-core.js', 'ffmpeg-core.wasm'])
  cpSync(join(root, `node_modules/@ffmpeg/core/dist/esm/${f}`), join(root, `public/ffmpeg/${f}`));
cpSync(join(root, 'node_modules/dejavu-fonts-ttf/ttf/DejaVuSans-Bold.ttf'), join(root, 'public/font.ttf'));

export default {
  optimizeDeps: { exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'] },
  worker: { format: 'es' },
  build: { target: 'es2022' },
};
