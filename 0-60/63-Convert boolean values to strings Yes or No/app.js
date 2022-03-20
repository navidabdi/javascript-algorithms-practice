/*

Convert boolean values to strings 'Yes' or 'No'.


Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.



*/

// My Solution 1
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
// My Solution 2
// Test the Solution
console.log(boolToWord(true)); // Yes

// One of other Solutions
function boolToWord(bool) {
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}
// One of other Solutions
