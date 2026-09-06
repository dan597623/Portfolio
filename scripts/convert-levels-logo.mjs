import { chromium } from '@playwright/test';
import {readFileSync} from 'node:fs';
const b=await chromium.launch({channel:'msedge',headless:true});
try {const p=await b.newPage({viewport:{width:416,height:68},deviceScaleFactor:2});const svg=readFileSync('public/assets/levels-health/framer.svg','utf8').replace('width="155" height="25"','width="416" height="68"');await p.setContent('<style>body{margin:0;background:transparent}svg{display:block}</style>'+svg);await p.screenshot({path:'public/assets/levels-health/levels-logo.png',omitBackground:true});}finally{await b.close();}
