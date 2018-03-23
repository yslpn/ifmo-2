"use strict";
console.time("First timer");

setTimeout(function() {
  console.timeEnd("First timer");
  console.time("Second timer");
  setTimeout(function() {
    console.timeEnd("Second timer");
    console.time("Third timer");
    setTimeout(function() {
      console.timeEnd("Third timer");
    }, 10000);
  }, 7000);
}, 3000);
