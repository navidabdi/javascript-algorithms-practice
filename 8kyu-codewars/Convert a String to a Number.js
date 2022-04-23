/*

Convert a String to a Number!

Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/

// My Solution
var stringToNumber = function (str) {
  return +str;
};
// One of other Solutions
var stringToNumber = function (str) {
  return parseInt(str);
};
// One of other Solutions
const stringToNumber = (str) => Number(str);
// One of other Solutions
var stringToNumber = Number;
// One of other Solutions
var stringToNumber = function (str) {
  return parseInt(str, 10);
};
// One of other Solutions
stringToNumber = (s) => +s;
