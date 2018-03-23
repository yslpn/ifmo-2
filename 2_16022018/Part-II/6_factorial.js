"use strict";

const my_function = n => (n === 1) ? 1 : my_function(n - 1) * n;

console.log(my_function(7));  // 5040
