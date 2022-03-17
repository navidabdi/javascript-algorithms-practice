/*

Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)

*/

// My Solution 1
const unusualFive = () => ['f', 'i', 'v', 'e', '!'].length;
// My Solution 2

// Test the Solution
console.log(unusualFive()); //  5

// One of other Solutions
const unusualFive_S2 = () =>
  Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));
// One of other Solutions
function unusualFive_S3() {
  return ~(~(~false ^ ((true << true) << true) ^ ~false) ^ true);
}
