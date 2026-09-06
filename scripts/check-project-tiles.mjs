import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const b=await chromium.launch({channel:'msedge',headless:true});
try {const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://127.0.0.1:5173/projects',{waitUntil:'networkidle'});
assert.deepEqual(await p.locator('.posts-filter .case-study__link').evaluateAll(a=>a.map(x=>x.getAttribute('href'))),['spicerhaart','xunlocked','permio','forethought','keep','levels-health'].map(x=>'/projects/'+x));
await p.locator('.posts-filter').evaluate(x=>window.scrollTo(0,x.offsetTop-90));await p.screenshot({path:'test-results/project-tiles.png'});
await p.locator('.posts-filter article').last().hover();assert.match(await p.locator('.posts-filter article').last().innerText(),/CGM data/);
await p.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
const tile=p.locator('.case-study__link[href="/projects/levels-health"]');await tile.evaluate(el=>{const s=el.closest('.swiper').swiper;s.slideTo(s.slides.length-1,0);});await tile.click();await p.waitForURL('**/projects/levels-health');
await p.setViewportSize({width:390,height:844});await p.goto('http://127.0.0.1:5173/projects',{waitUntil:'networkidle'});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);console.log('PASS: six ordered tiles, Levels hover content, homepage link, mobile width, no runtime errors');
}finally{await b.close();}
