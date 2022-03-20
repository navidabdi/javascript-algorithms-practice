/*

Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

FUNDAMENTALSARITHMETICMATHEMATICSALGORITHMSNUMBERSARRAYSLISTSDATA STRUCTURES

*/

// My Solution 1
function squareSum(numbers) {
  let res = 0;
  numbers.map((num) => {
    res += num ** 2;
  });
  return res;
}

// One of other Solutions
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
// One of other Solutions
function squareSum(numbers) {
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
