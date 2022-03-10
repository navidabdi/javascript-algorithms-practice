/*

The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

Great coding <3

*/

// My Solution 1
function power(x, y) {
  return x ** y;
}
// My Solution 2

// Test the Solution
console.log(power(1, 701270)); // 1
console.log(power(2, 2)); // 4
console.log(power(3, 5)); // 243
console.log(power(0, 0)); // 1

// One of other Solutions
function power_S2(x, y) {
  var result = 1;
  for (var i = 0; i < y; i++) {
    result = result * x;
  }
  return result;
}
// One of other Solutions
function power_S3(x, y) {
  if (x == 1) return 1;
  return y ? x * power(x, y - 1) : 1;
}
