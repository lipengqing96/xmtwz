const fs = require('fs');
const d = 'D:/下载文件/指纹浏览器/网站（豪华）/nebularank';

const sp = d + '/src/pages/blog/[slug].astro';
let sc = fs.readFileSync(sp, 'utf8');
sc = sc.replace(
  '{ params: { slug: "top-10-best-area-rugs-living-room" } }',
  '{ params: { slug: "top-10-best-area-rugs-living-room" } },\n    { params: { slug: "best-eu-travel-sim-lycamobile-france-review" } }'
);
fs.writeFileSync(sp, sc, 'utf8');
console.log('Updated [slug].astro');

const ip = d + '/src/pages/blog/index.astro';
let ic = fs.readFileSync(ip, 'utf8');
const oldEnd = 'img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=75"}]';
const newEnd = 'img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=75"},\n          {slug:"best-eu-travel-sim-lycamobile-france-review",title:"Best EU Travel SIM Cards for France 2026 | Lyca Mobile Review",cat:"Travel",date:"Sep 28",time:"10 min",excerpt:"Stay connected across Europe with the best travel SIM. Lyca Mobile France is our top pick for EU roaming.",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=75"}]';
ic = ic.replace(oldEnd, newEnd);
fs.writeFileSync(ip, ic, 'utf8');
console.log('Updated blog/index.astro');