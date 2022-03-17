/*

Return the type of the sum of the two arguments

*/

// My Solution 1
function typeOfSum(a, b) {
  return typeof (a + b);
}
// My Solution 2

// Test the Solution
console.log(typeOfSum(12, 1)); // number
console.log(typeOfSum('d', 1)); // string
console.log(typeOfSum(true, 1)); // number

// One of other Solutions
function typeOfSum(a, b) {
  if (typeof a === 'string' || a instanceof String) {
    return 'string';
  }
  if (typeof b === 'string' || b instanceof String) {
    return 'string';
  }
  return 'number';
}
// One of other Solutions
function typeOfSum(a, b) {
  return typeof a != 'string' && typeof b != 'string' ? 'number' : 'string';
}
