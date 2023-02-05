/**
 * Using strict mode to avoid arguments aliasing
 */

function strictF(a) {
  'use strict'
  arguments[0] = 1000;
  console.log(a === 1000);
}

function noStrictF(a) {
  arguments[0] = 1000;
  console.log(a === 1000);
}

strictF(1); // false
noStrictF(1); // true

/**
 * Behavior of function context (the value of the this keyword) if invoke a function as function using strict mode and nonstrict mode
 */
function ninja() {
  return this; // In nonstrict mode 'this' will be the global context (the window object)
}
ninja();

let samurai = function() {
  'use strict'
  return this; // In strict mode 'this' will be undefined
}
samurai()