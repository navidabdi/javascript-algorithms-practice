/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// My Solution 1
function positiveSum(arr) {
  let sum = 0;
  arr.map((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}

// My Solution 2

// Test the Solution
console.log(positiveSum([1, 2, 3, 4, 5])); //  15
console.log(positiveSum([1, -2, 3, 4, 5])); //  13
console.log(positiveSum([-1, -2, -3, -4, -5])); //  0
console.log(positiveSum([])); //  0

// One of other Solutions
function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}
// One of other Solutions
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
