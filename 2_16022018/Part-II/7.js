"use strict";

const my_function = (x, y) => (y === 0) ? x : my_function(++x, --y);

console.log(my_function(2,4));
