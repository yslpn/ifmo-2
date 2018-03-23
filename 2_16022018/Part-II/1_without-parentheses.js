"use strict";
// call function without parentheses

function sayHi() {
  console.log("Hi!");
};

let say = {
    set Bye (toWho) {
      console.log("Bye!");
    }
};

sayHi``;
new sayHi;
say.Bye = "toMe";
