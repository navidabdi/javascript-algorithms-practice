/*

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!

*/

// My Solution 1
function oddCount_S1(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}
// My Solution 2
const oddCount = (n) => Math.floor(n / 2);
// Test the Solution
console.log(oddCount(15)); //  7
console.log(oddCount(15023)); //  7511

// One of other Solutions
function oddCount(n) {
  return Math.trunc(n / 2);
}
// One of other Solutions
function oddCount(n) {
  let odd = Math.round((n - 1) / 2);
  return odd;
}
