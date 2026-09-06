import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
try {
 const p=await browser.newPage({viewport:{width:1440,height:1000}});
 const slugs=['my-tutor','alvarez-and-marsal','imagine-ai','spicerhaart','xunlocked','permio','forethought','keep','levels-health','silibrain'];
 const errors=[];p.on('pageerror',e=>errors.push(e.message));
 for(const slug of slugs){
  await p.goto('http://127.0.0.1:5173/projects/'+slug,{waitUntil:'networkidle'});
  const cards=p.locator('.case-studies-block .case-study');
  assert.equal(await cards.count(),slug==='silibrain'?9:8);
  assert.equal(await p.locator('.case-studies-block a').count(),0);
  const titles=await cards.locator('.case-study__title').allTextContents();
  const names={'my-tutor':'MyTutor','alvarez-and-marsal':'A&M','imagine-ai':'Imagine','spicerhaart':'Spicerhaart','xunlocked':'xUnlocked','permio':'Permio','forethought':'Forethought','keep':'Keep','levels-health':'Levels Health','silibrain':'Silibrain'};
  assert.ok(!titles.some(t=>t.toLowerCase().includes(names[slug].toLowerCase())),slug);
 }
 await p.locator('.case-studies-block').scrollIntoViewIfNeeded();await p.locator('.case-studies-block .swiper-button-next').click();await p.waitForFunction(()=>document.querySelector('.case-studies-block .swiper').swiper.activeIndex>0);
 await p.setViewportSize({width:390,height:844});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 console.log('PASS: all ten related carousels, current project excluded, non-clickable cards, working next arrow, mobile width.');
} finally {await browser.close();}
