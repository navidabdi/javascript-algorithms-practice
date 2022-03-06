/*

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

// My Solution 1
function arrayPlusArray(arr1, arr2) {
  let res = 0;
  arr1.map((num_1) => (res += num_1));
  arr2.map((num_2) => (res += num_2));
  return res;
}
// My Solution 2

// Test the Solution
console.log(arrayPlusArray_S1([1, 2, 3], [4, 5, 6])); // 21

// One of other Solutions
function arrayPlusArray_S1(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
// One of other Solutions
