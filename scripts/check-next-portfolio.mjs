import { chromium } from '@playwright/test';
import fs from 'node:fs';
const base = process.env.PORTFOLIO_TEST_URL || 'http://localhost:3100';
const browser = await chromium.launch({channel:'msedge',headless:true});
const page = await browser.newPage({viewport:{width:1440,height:1000}});
const cleanup = JSON.parse(fs.readFileSync('scripts/asset-cleanup-report.json','utf8'));
const candidates = new Set(cleanup.removedFiles.map(p => '/' + p.replace(/^public\//,'')));
const requestedCandidates = new Set(), errors = [], failures = [], assets = new Set();
page.on('pageerror', e => errors.push(e.message));
page.on('request', r => {const p=decodeURIComponent(new URL(r.url()).pathname);if(candidates.has(p))requestedCandidates.add(p);if(p.startsWith('/assets/'))assets.add(p);});
page.on('response', r => {if(r.status()>=400 && r.url().startsWith(base))failures.push([r.status(),r.url()]);});
const routes=['/','/projects','/contact',...['my-tutor','alvarez-and-marsal','imagine-ai','spicerhaart','xunlocked','permio','forethought','keep','silibrain','levels-health'].map(s=>'/projects/'+s)];
for(const route of routes){
 await page.goto(base+route,{waitUntil:'networkidle'});
 await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,25));}});
 await page.evaluate(()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');});
 await page.waitForTimeout(250);
 for(const theme of ['light','dark']){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await page.waitForTimeout(75);}
 console.log('Checked '+route);
}
await page.goto(base+'/',{waitUntil:'networkidle'});
await page.getByRole('button',{name:'Next testimonial',exact:true}).click();
await page.locator('.project-testimonials').scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.locator('.project-testimonials__card.is-active').screenshot({path:'test-results/updated-testimonial.png'});
if(!(await page.locator('.project-testimonials__card.is-active').innerText()).includes("Dan's support"))errors.push('Imagine testimonial not updated');
await page.setViewportSize({width:390,height:844});await page.reload({waitUntil:'networkidle'});
await page.screenshot({path:'test-results/next-mobile.png'});
const result={routes:routes.length,requestedCandidates:[...requestedCandidates],errors,failures,assets:[...assets]};
fs.writeFileSync('scripts/next-browser-report.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({routes:routes.length,requestedCandidates:[...requestedCandidates],errors,failures},null,2));
await browser.close();
if(errors.length || failures.length || requestedCandidates.size)process.exitCode=1;
