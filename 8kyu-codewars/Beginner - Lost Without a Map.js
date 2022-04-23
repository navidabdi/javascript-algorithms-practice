/*

Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

// My Solution
function maps(x) {
  return x.map((num) => num * 2);
}
// One of other Solutions
maps = (x) => x.map((e) => e * 2);
// One of other Solutions
const multiply = (x) => (y) => x * y;
const maps = (x) => x.map(multiply(2));
// One of other Solutions

// One of other Solutions

// One of other Solutions
