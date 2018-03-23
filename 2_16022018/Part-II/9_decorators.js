"use strict";

const logged = function (f) {
  return function () {
    console.log(arguments);
    return f.apply(this, arguments);
  };
};

const q = x => x * x;

const fq = logged(q);

fq(2);
