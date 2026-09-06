import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({channel:'msedge',headless:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/projects',{waitUntil:'networkidle'});
 assert.equal(await page.locator('.posts-filter__tag').count(),0);
 assert.equal(await page.locator('.posts-filter article').count(),6);
 await page.locator('main img').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));
 await page.waitForFunction(()=>[...document.querySelectorAll('main img')].every(i=>i.complete));
 console.log('missing',await page.locator('main img').evaluateAll(imgs=>imgs.filter(i=>!i.naturalWidth).map(i=>i.src)));
 await page.locator('.posts-filter').scrollIntoViewIfNeeded();
 await page.screenshot({path:'test-results/projects-desktop.png'});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.setViewportSize({width:390,height:844});
 await page.screenshot({path:'test-results/projects-mobile.png'});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 assert.deepEqual(errors,[]);console.log('PASS projects');
} finally {await browser.close();}


