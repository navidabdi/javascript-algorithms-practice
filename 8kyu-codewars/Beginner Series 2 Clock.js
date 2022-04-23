/*

Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/

// My Solution
function past(h, m, s) {
  const hoursToMilliSecond = h * 60 * 60000;
  const minateToMilliSecond = m * 60000;
  const secondToMilliSecond = s * 1000;

  return hoursToMilliSecond + minateToMilliSecond + secondToMilliSecond;
}
// One of other Solutions
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
// One of other Solutions
const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);
// One of other Solutions
function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);

  return Math.round(setTime - midnight);
}
// One of other Solutions

// One of other Solutions
