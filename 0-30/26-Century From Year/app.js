/*

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

// My Solution 1
const century = (year) => {
  return year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1);
};
// My Solution 2

// Test the Solution
console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20

// One of other Solutions
const century_S2 = (year) => Math.ceil(year / 100);
// One of other Solutions
function century_S3(year) {
  return ((year + 99) / 100) | 0;
}
