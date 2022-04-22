/*

Convert number to reversed array of digits

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

*/

// My Solution
function digitize(n) {
  return n
    .toString()
    .split('')
    .map((num) => +num)
    .reverse();
}
// One of other Solutions
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
// One of other Solutions
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
