import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';

mkdirSync('test-results', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
  await page.locator('.case-study__link[href="/projects/spicerhaart"]').click();
  await page.waitForURL('**/projects/spicerhaart');
  await page.waitForLoadState('networkidle');
  assert.match(await page.locator('h1').textContent(), /Spicerhaart:/);
  assert.equal(await page.locator('.post-index nav a').count(), 7);
  await page.screenshot({ path: 'test-results/spicerhaart-desktop.png' });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await page.locator('.post-index a[href="#results"]').click();
  await page.waitForFunction(() => document.querySelector('.post-index a[href="#results"]').getAttribute('aria-current') === 'location');
  assert.equal(await page.locator('.post-index a[aria-current]').count(), 1);
  const carousel = page.locator('.case-studies-block .swiper');
  const before = await carousel.evaluate(el => el.swiper.activeIndex);
  await page.locator('.case-studies-block .swiper-button-next').click();
  await page.waitForFunction(index => document.querySelector('.case-studies-block .swiper').swiper.activeIndex > index, before);
  await page.locator('.theme-toggle-btn').click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:5173/projects/spicerhaart', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'test-results/spicerhaart-mobile.png' });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await page.locator('.menu-toggle-btn').click();
  assert.equal(await page.locator('body').evaluate(el => el.classList.contains('nav-opened')), true);
  await page.keyboard.press('Escape');
  // Load every case-study image, including images below the fold.
  await page.locator('main img').evaluateAll(images => images.forEach(image => image.loading = 'eager'));
  await page.waitForFunction(() => [...document.querySelectorAll('main img')].every(image => image.complete));
  const missing = await page.locator('main img').evaluateAll(images => images.filter(image => !image.naturalWidth).map(image => image.src));
  assert.deepEqual(missing, []);
  assert.deepEqual(errors, []);
  console.log('PASS: homepage link, direct route, seven contents links, related carousel, theme, mobile menu, responsive widths, and all images; no browser errors.');
} finally {
  await browser.close();
}

