"use strict";
// two methods for call IIFE (Immediately Invoked Function Expression)

(x => x * x)(10);

(f => f(2))(x => x * x);
