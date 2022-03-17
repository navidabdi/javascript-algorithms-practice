/*

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

// My Solution 1
const countSheep = (num) => {
  if (num === 0) return '';
  let sheeps = '';
  for (let i = 1; i < num + 1; i++) {
    sheeps += `${i} sheep...`;
  }

  return sheeps;
};
// My Solution 2

// Test the Solution
console.log(countSheep(0)); //
console.log(countSheep(1)); //
console.log(countSheep(2)); //
console.log(countSheep(3)); //

// One of other Solutions
countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;
// One of other Solutions
const countSheep = (length) =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('');
