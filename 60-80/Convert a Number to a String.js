/*

Convert a Number to a String!
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"

*/

// My Solution 1
function numberToString(num) {
  return num.toString();
}
// Test the Solution

// One of other Solutions
function numberToString_S2(num) {
  return String(num);
}
// One of other Solutions
const numberToString_S3 = (num) => `${num}`;
