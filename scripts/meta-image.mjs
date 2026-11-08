// Regenerates the Open Graph card (docs/images/meta-image.jpg) from the page
// docs/meta-image.html: `npm run meta-image`.
import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { createServer } from 'vite';

const WIDTH = 1200;
const HEIGHT = 630;
// Captured at twice the size and scaled down, for cleaner text edges.
const SCALE = 2;
// Long enough for the fonts to load and settle.
const SETTLE_MS = 1500;
const FILE = 'docs/images/meta-image.jpg';

// A browser that is already installed, then the one Playwright downloads.
async function launch() {
  for (const channel of ['chrome', 'msedge', undefined]) {
    try {
      return await chromium.launch(channel ? { channel } : {});
    } catch {
      // Not installed: try the next one.
    }
  }

  throw new Error('No browser found. Install Chrome or Edge, or run `npx playwright install chromium`.');
}

// The project's vite.config.mjs builds the library, so the page is served without it.
const server = await createServer({ configFile: false, logLevel: 'warn', server: { port: 0 } });
await server.listen();
const baseUrl = server.resolvedUrls.local[0];
const browser = await launch();

try {
  const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: SCALE });
  const page = await context.newPage();

  await page.goto(`${baseUrl}docs/meta-image.html`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(SETTLE_MS);
  const screenshot = await page.screenshot();

  const jpeg = await page.evaluate(
    async ([png, width, height]) => {
      const image = new Image();
      image.src = `data:image/png;base64,${png}`;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(image, 0, 0, width, height);
      return canvas.toDataURL('image/jpeg', 0.95).split(',')[1];
    },
    [screenshot.toString('base64'), WIDTH, HEIGHT]
  );

  await writeFile(FILE, Buffer.from(jpeg, 'base64'));
  console.log(`Wrote ${FILE}`);
} finally {
  await browser.close();
  await server.close();
}
