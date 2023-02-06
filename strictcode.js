/**
 * Using strict mode to avoid arguments aliasing
 */
function strictF(a) {
  'use strict'
  arguments[0] = 'Changed';
  console.log(a === 'Changed');
}

function notStrictF(a) {
  arguments[0] = 'Changed';
  console.log(a === 'Changed');
}

strictF('Hi'); // false
notStrictF('H'); // true

/**
 * Behavior of function context (the value of the this keyword) if invoke a function as function using strict mode and nonstrict mode
 */
function toReturnNonstrictThis() {
  return this; // In nonstrict mode 'this' will be the global context (the window object)
}

function toReturnStrictThis() {
  'use strict'
  return this; // In strict mode 'this' will be undefined
}
toReturnNonstrictThis();
toReturnStrictThis();

/**
 * Behavior of var declaration
 */
function varWithoutDecl() {
  'use strict'
  globalsVar = 'Global'; //ReferenceError: globalVar is not defined
}

function varWithoutDecl2() {
  globalsVar = 'Global';
}

varWithoutDecl();
varWithoutDecl2();
