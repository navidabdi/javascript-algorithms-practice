/*

Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// My Solution
function find_average(array) {
  if (array.length === 0) return 0;
  return array.reduce((result, current) => result + current, 0) / array.length;
}
// One of other Solutions
function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}
// One of other Solutions
function find_average(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
// One of other Solutions
function find_average(array) {
  return (Math.min(...array) + Math.max(...array)) / 2;
}
// One of other Solutions

// One of other Solutions
