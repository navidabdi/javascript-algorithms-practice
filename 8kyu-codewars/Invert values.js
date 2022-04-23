/*

Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

// My Solution
function invert(array) {
  return array.map((num) => (num >= 0 ? -num : Math.abs(num)));
}
// One of other Solutions
function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}
// One of other Solutions
const invert = (array) => array.map((num) => -num);
// One of other Solutions
function invert(array) {
  return array.map((i) => 0 - i);
}
// One of other Solutions
function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}
// One of other Solutions
function invert(array) {
  return array.map((n) => n && -n);
}
