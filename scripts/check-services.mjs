import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const b=await chromium.launch({channel:'msedge',headless:true});
try {const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});assert.equal(await p.locator('.service-card').count(),9);assert.equal(await p.locator('.service-card a, .service-card button').count(),0);
for(const width of [1440,390]){await p.setViewportSize({width,height:1000});assert.deepEqual(await p.locator('.service-card__title, .service-card__excerpt').evaluateAll(els=>els.filter(e=>e.scrollHeight>e.clientHeight+1).map(e=>e.textContent)),[]);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);}
console.log('PASS: nine non-navigating service cards; complete text at desktop and mobile widths.');}finally{await b.close();}
