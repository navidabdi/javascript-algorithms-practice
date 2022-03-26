/*

Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

// My Solution 1
function descendingOrder(n) {
  numStr = '' + n;
  let res = numStr.split('').sort(function (a, b) {
    return b - a;
  });
  return +res.join('');
}
// One of other Solutions
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}
// One of other Solutions
function descendingOrder(n) {
  return +(n + '')
    .split('')
    .sort(function (a, b) {
      return b - a;
    })
    .join('');
}
