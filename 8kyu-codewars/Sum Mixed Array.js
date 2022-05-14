/*

Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

// My Solution
function sumMix(x) {
  return x.map((num) => Number(num)).reduce((cur, res) => cur + res, 0);
}
// One of other Solutions
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
// One of other Solutions
const sumMix = (x) => x.reduce((a, b) => +b + a, 0);
// One of other Solutions
function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
// One of other Solutions
const sumMix = (arr) => arr.reduce((sum, n) => sum + +n, 0);
// One of other Solutions
function sumMix(x) {
  return x.reduce((s, x) => s + +x, 0);
}
