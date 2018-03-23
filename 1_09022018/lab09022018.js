"use strict";
// Задание I, Часть A

const age = 19;
const restricted = (age === 18) ? 'notsure' : ( age > 18 ) ? 'yes' : 'no'  ;
console.log(restricted);

// Часть B

const whatIs = undefined;
const whatType =
(whatIs !== whatIs) ? 'NaN' :
(whatIs === undefined) ? '=undefined' :
(whatIs === false) ? '=false' :
(whatIs === true) ? '=true' :
(whatIs === 0) ? '=0' :
(whatIs === '') ? '=""' :
(whatIs === null) ? '=null' : 'else';

console.log(whatType);

// Задание II
// Ответ:
console.log(+!(![]) + +!(![])); // => 2

// Задание III
// Ответ: node --print-bytecode lab09022018.js
