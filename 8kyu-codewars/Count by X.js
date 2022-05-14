/*

Count by X

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

// My Solution
function countBy(x, n) {
  let z = [];

  for (let i = 1; i < n + 1; i++) {
    z.push(i * x);
  }

  return z;
}
// One of other Solutions
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

// One of other Solutions
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
// One of other Solutions
function countBy(x, n) {
  return Array.apply(0, Array(n)).map(function (v, i) {
    return (i + 1) * x;
  });
}
// One of other Solutions
function countBy(x, n) {
  var z = [];
  while (z.length < n) z.push(x * (z.length + 1));
  return z;
}
// One of other Solutions
