import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const b=await chromium.launch({channel:'msedge',headless:true});
try {const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
assert.deepEqual(await p.locator('.industry-carousel h3').allTextContents(),['FinTech','Edtech','Retail','Healthcare','Real Estate','Logistic','Recruitment','Manufacturing']);
await p.locator('.industry-carousel').scrollIntoViewIfNeeded();await p.locator('.industry-carousel .swiper-button-next').click();await p.waitForFunction(()=>document.querySelector('.industry-carousel .swiper').swiper.activeIndex===1);await p.screenshot({path:'test-results/industry-slides.png'});
await p.setViewportSize({width:390,height:844});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);console.log('PASS eight industries, next arrow, responsive width');}finally{await b.close();}
