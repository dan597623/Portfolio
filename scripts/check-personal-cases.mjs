import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const slugs=['my-tutor','alvarez-and-marsal','imagine-ai','spicerhaart','xunlocked','permio','forethought','keep','silibrain','levels-health'];
 for(const slug of slugs){await page.goto('http://127.0.0.1:5173/projects/'+slug,{waitUntil:'networkidle'});assert.equal(await page.locator('.personal-header').count(),1);assert.equal(await page.locator('.personal-footer').count(),1);assert.ok((await page.locator('h1').textContent()).length>0);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);}
 for(const [label,selector] of [['About me','#about-me'],['Experience','.personal-experience'],['Services','.services-filter-block'],['Industries','.industry-carousel'],['Contact me','#contact']]){
 await page.goto('http://127.0.0.1:5173/projects/levels-health',{waitUntil:'networkidle'});await page.locator('.personal-header').getByRole('button',{name:label,exact:true}).click();await page.waitForURL('http://127.0.0.1:5173/');await page.waitForFunction(sel=>{const r=document.querySelector(sel)?.getBoundingClientRect();return r&&r.top>=0&&r.top<200;},selector);assert.equal(new URL(page.url()).hash,'');}
 await page.locator('.personal-header').getByRole('button',{name:'Projects',exact:true}).click();await page.waitForURL('**/projects');
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5173/projects/xunlocked',{waitUntil:'networkidle'});await page.locator('.personal-header__toggle').click();await page.locator('.personal-header__nav').getByRole('button',{name:'About me',exact:true}).click();await page.waitForURL('http://127.0.0.1:5173/');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);console.log('PASS all ten detail pages, shared layout, homepage section navigation, Projects destination, mobile navigation, no runtime errors.');
}finally{await browser.close();}
