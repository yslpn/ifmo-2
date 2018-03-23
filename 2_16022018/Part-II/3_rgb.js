"use strict";
// return RGB color
function getRandomRGB() {
    return Math.round(Math.random()*255);
};

let rgb = (red, green, blue) => {
  if (red === undefined) {red = getRandomRGB();}
  if (green === undefined) {green = getRandomRGB();}
  if (blue === undefined) {blue = getRandomRGB();}
  return "rgb(" + red + ", " + green + ", " + blue + ")";
};

console.log(rgb(0, 134, 255));
console.log(rgb(1, 56));
console.log(rgb());
