/*

Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// My Solution
function countPositivesSumNegatives(input) {
  let countPosetives = 0;
  let sumNegatives = [];
  if (input === null || input.length === 0) return [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPosetives++;
    } else if (input[i] < 0) {
      sumNegatives.push(input[i]);
    }
  }
  return [countPosetives, sumNegatives.reduce((acc, res) => acc + res)];
}
// One of other Solutions
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
// One of other Solutions
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
// One of other Solutions
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}
// One of other Solutions
function countPositivesSumNegatives(input) {
  return input && input.length
    ? input.reduce(
        function (p, c, i, s) {
          c <= 0 ? (p[1] += c) : (p[0] += 1);
          return p;
        },
        [0, 0]
      )
    : [];
}
// One of other Solutions
function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0,
    count = 0;
  input.forEach(function (el) {
    if (el > 0) count++;
    else sum += el;
  });
  return [count, sum];
}
