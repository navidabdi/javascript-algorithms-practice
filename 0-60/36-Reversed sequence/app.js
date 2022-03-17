/*

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

// My Solution 1
const reverseSeq = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) result = [i, ...result];
  return result;
};
// My Solution 2

// Test the Solution
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

// One of other Solutions
const reverseSeq_S2 = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
// One of other Solutions
const reverseSeq_S3 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
