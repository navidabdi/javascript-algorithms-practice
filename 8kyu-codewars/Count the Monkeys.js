/*

Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]

*/

// My Solution
function monkeyCount(n) {
  let countArr = [];

  for (let i = 1; i <= n; i++) {
    countArr.push(i);
  }
  return countArr;
}
// One of other Solutions
function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}
// One of other Solutions
function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));

  return arr;
}
// One of other Solutions
function monkeyCount(n) {
  return [...Array(n + 1).keys()].slice(1);
}
// One of other Solutions

// One of other Solutions
