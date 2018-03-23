"use strict";

const arr = ["a", "b", "c"];

console.log(arr.length);
console.log(arr.length = 2);
console.log(arr[2]);
console.log(arr.length = 4);
console.log(arr[2]);
console.log(arr);

let a = 1;
let b = 7;

[a, b] = [b, a];

let colors = ["green", "black", "white"];

const [firstColor, secColor] = colors;

console.log(firstColor);

console.log(secColor);

const [,, thirdColor] = colors;

console.log(thirdColor);

// Упражнение https://kodaktor.ru/arrform
const AR = [[1, 3, 5], [2, 4, 6]];

let even2 = AR[1][0]; // не то
const [,[,even3]] = AR; // ответ

console.log(even3);

console.log(Math.max([1, 44, 5]));
console.log(Math.max(1, 44, 5));

console.log([1, 2, 3, 4].reduce( (x,y) => x + y));

const summer = (...z) => z.reduce( (x,y) => x + y);

console.log(summer);

console.log(Array.from( {length: 5}, (v, i) =>  ++i));
console.log(Array.from( {length: 5}, (v, i) =>  ++v));
// console.log(Array.from( {length: 5}, (v, i) =>  ++i).reduce( ));
