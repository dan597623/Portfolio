import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const b=await chromium.launch({channel:'msedge',headless:true});
try {const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
assert.equal((await p.locator('.personal-about__text').textContent()).length,1600);assert.equal(await p.locator('.personal-experience__item').count(),5);
await p.screenshot({path:'test-results/personal-hero.png'});await p.locator('.personal-hero a[href="#about-me"]').click();assert.equal(new URL(p.url()).hash,'#about-me');await p.locator('.personal-about').screenshot({path:'test-results/personal-about.png'});
await p.locator('.personal-hero a[href="#contact"]').click();assert.equal(new URL(p.url()).hash,'#contact');
await p.setViewportSize({width:390,height:844});await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:'test-results/personal-mobile.png'});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(await p.locator('.personal-hero img, .personal-about img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)),[]);assert.deepEqual(errors,[]);console.log('PASS: personal sections, 1600 characters, five roles, buttons, images, mobile width');}finally{await b.close();}
