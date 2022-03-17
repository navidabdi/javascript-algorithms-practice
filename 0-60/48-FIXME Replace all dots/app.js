/*

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

*/

// My Solution 1
var replaceDots = function (str) {
  return str.replace(/\./g, '-');
};
// My Solution 2

// Test the Solution
console.log(replaceDots('one.two.three')); // one-two-three

// One of other Solutions
var replaceDots = function (str) {
  return str.replace(/[.]/g, '-');
};
// One of other Solutions
var replaceDots = (s) => s.split('.').join('-');
