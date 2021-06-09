const regexgen = require('regexgen');

let regexgen1 = regexgen(
  `
---
layout: default
title:  10.lerna init.md
parent: lerna
nav_order: 16
---
`
) // => /foo(?:zap?|ba[rz])/

console.log(`regexgen1:`, regexgen1)
