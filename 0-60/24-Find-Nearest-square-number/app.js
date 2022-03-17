/*

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

*/

// My Solution 1
const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;
// My Solution 2

// Test the Solution
console.log(nearestSq(1)); // 1
console.log(nearestSq(2)); // 1
console.log(nearestSq(10)); // 9
console.log(nearestSq(111)); // 121
console.log(nearestSq(9999)); // 10000

// One of other Solutions
function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2;
}
// One of other Solutions How Complicated :)
function nearestSq(n) {
  let higherNum = n + 1;
  while (Math.sqrt(higherNum) % 1 !== 0) {
    higherNum++;
  }
  let lowerNum = n - 1;
  while (Math.sqrt(lowerNum) % 1 !== 0) {
    lowerNum--;
  }
  if (n === 1) {
    return n;
  } else if (higherNum - n < n - lowerNum) {
    return higherNum;
  } else {
    return lowerNum;
  }
}
