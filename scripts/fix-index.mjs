import fs from 'fs';
const d = 'D:/下载文件/指纹浏览器/网站（豪华）/nebularank';

const ip = d + '/src/pages/blog/index.astro';
let ic = fs.readFileSync(ip, 'utf8');
const oldEnd = 'img:"https://images.unsplash.com/photo-1555041423-b8db60e5c342?w=500&q=75"},\n        ].map((post)=>(';
const newEnd = 'img:"https://images.unsplash.com/photo-1555041423-b8db60e5c342?w=500&q=75"},\n          {slug:"best-eu-travel-sim-lycamobile-france-review",title:"Best EU Travel SIM Cards for France 2026 | Lyca Mobile Review",cat:"Travel",date:"Sep 28",time:"10 min",excerpt:"Stay connected across Europe with the best travel SIM. Lyca Mobile France is our top pick for EU roaming.",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=75"},\n        ].map((post)=>(';
ic = ic.replace(oldEnd, newEnd);
fs.writeFileSync(ip, ic, 'utf8');
console.log('Updated blog/index.astro:', ic.includes('best-eu-travel-sim-lycamobile-france-review'));