"use strict";
// ССЫЛОЧНЫЕ ТИПЫ ДАННЫХ arrays
// ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ string

const First = "Yaroslav";
const Second = "Slepukhin";

const person = [First, Second, "Igorevich"];

person.forEach( (el, i) => console.log(i+100, el) ); // предпочтительный способ

for (let i = 0; i < person.length; ++i) {
  console.log(i);
}

for (let el in person) { // для массивов и для объектов
  console.log("000" + el);
}

for (let el of person) { // только к массивам
  console.log(el+"!");
}

console.log(typeof person); // ненадёжно для проверки
console.log(typeof Second);

console.log(person.constructor.name); // определение через конструктов
console.log(person instanceof Array); // проверка на тип
