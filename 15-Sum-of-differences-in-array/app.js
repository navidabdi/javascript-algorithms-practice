/*

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

*/

// My Solution
const sumOfDifferences = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
};

// Test the Solution
console.log(sumOfDifferences([1, 2, 10])); // => [10 , 2 , 1] => (10 - 2) + (2 - 1) = 9
console.log(sumOfDifferences([-3, -2, -1]));

// One of other Solutions
function sumOfDifferences_S2(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// One of other Solutions
const sumOfDifferences_S3 = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
