"use strict";

const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

let j = a1*b2 - a2*b1;
let k = c1*b2 - c2*b1;
let l = a1*c2 - a2*c1;

let x1 = k/j;
let x2 = l/j;

console.log('x1 =' + x1 + '\n' + 'x2 =' + x2);
