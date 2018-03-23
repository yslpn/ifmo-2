"use strict";

let degree = (x, y) => Math.pow(x, y);
let degreePI = degree.bind(null, Math.PI);
let degreeE = degree.bind(null, Math.E);

console.log(degree(2, 3));
console.log(degreePI(2));
console.log(degreeE(2));

let mulCurry = x => y => Math.pow(x, y);
const mC1 = mulCurry(2);
const mC2 = mulCurry(2);

console.log(mC1(3));
console.log(mC2(4));
