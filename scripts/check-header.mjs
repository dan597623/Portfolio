import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const b=await chromium.launch({channel:'msedge',headless:true});
try{const p=await b.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await p.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
for(const label of ['About me','Experience','Projects','Services','Industries']){await p.locator('.personal-header__nav').getByRole('button',{name:label,exact:true}).click();assert.equal(new URL(p.url()).hash,'');assert.ok(await p.evaluate(()=>scrollY>0));}
await p.setViewportSize({width:390,height:844});await p.locator('.personal-header__toggle').click();await p.locator('.personal-header__nav').getByRole('button',{name:'About me',exact:true}).click();assert.equal(await p.locator('.personal-header__toggle').getAttribute('aria-expanded'),'false');assert.equal(new URL(p.url()).hash,'');assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);console.log('PASS header navigation, unchanged URL, mobile menu and width');}finally{await b.close();}
