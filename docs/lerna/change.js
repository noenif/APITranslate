const  fs = require('fs');
const process = require('process')
let res =fs.readdirSync('./',{encoding:'utf-8'})

let  DirName =  __dirname.split('\\')[__dirname.split('\\').length-1]
let  reg=  /[\n \x2D\.016:_ad-fil-prt-vy]/;
//处理每个文件
for (let i = 0; i < res.length; i++) {
let splitarry = res[i].split('.');
let  length = splitarry.length;
  let buffer = fs.readFileSync('./'+res[i],{encoding:'utf-8'})

  let prefix =  `---
layout: default
title: ${splitarry[1].replace(/ +/,'_')}
parent: ${DirName}
nav_order: ${splitarry[0]}
---
  `
  let  match =buffer.includes('---')
  if (!match){
    let content =prefix +buffer;
    fs.writeFileSync('./'+res[i],content)
  }
}
//处理目录文件

let every = res.every((item)=>{
  let splitarry = item.split('.');
  splitarry[1] === DirName
})
let catlogCOntent = `---
layout: default
title: ${DirName}
nav_order: 3
has_children: true
permalink: /docs/${DirName}
---

# ${DirName}
`
if (!every) fs.writeFileSync('./'+DirName+'.md',catlogCOntent)
