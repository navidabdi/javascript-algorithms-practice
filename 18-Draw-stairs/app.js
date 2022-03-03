/*

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

*/

// My Solution 1
function drawStairs(n) {
  let result = '';
  let space = '';
  if (n === 1) return 'I';
  for (let i = 0; i < n - 1; i++) {
    space += ' ';
    result += 'I\n' + space;
  }
  return result + 'I';
}
// My Solution 2

// Test the Solution
console.log(drawStairs(1)); //
console.log(drawStairs(3)); //
console.log(drawStairs(7)); //

// One of other Solutions
const drawStairs_S2 = (n) =>
  [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
// One of other Solutions
function drawStairs_S3(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }

  return result.join('\n');
}
