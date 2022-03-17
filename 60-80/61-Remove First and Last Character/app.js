/*

Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

FUNDAMENTALSBASIC LANGUAGE FEATURESSTRINGS

*/

// My Solution 1
const removeChar = (str) => {
  strArr = str.split('');
  strArr.pop();
  strArr.shift();
  return strArr.join('');
};

// My Solution 2
// Test the Solution
console.log(removeChar('eloquent')); //  loquen

// One of other Solutions
function removeChar(str) {
  return str.slice(1, -1);
}
// One of other Solutions
function removeChar(str) {
  return str.substring(1, str.length - 1);
}
