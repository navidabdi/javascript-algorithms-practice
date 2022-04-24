/*

Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

// My Solution
function fakeBin(x) {
  return x
    .split('')
    .map((num) => (num < 5 ? 0 : 1))
    .join('');
}
// One of other Solutions
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}
// One of other Solutions
function fakeBin(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  return newStr;
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
