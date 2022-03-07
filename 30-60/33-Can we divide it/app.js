/*

Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true

*/

// My Solution 1
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}
// My Solution 2

// Test the Solution
console.log(isDivideBy(-12, 2, -6)); //  true
console.log(isDivideBy(-12, 2, -5)); //  false

// One of other Solutions
function isDivideBy(number, a, b) {
  return [a, b].every((i) => number % i === 0);
}
// One of other Solutions
function isDivideBy(number, a, b) {
  let answer1 = Math.abs(number % a);
  let answer2 = Math.abs(number % b);

  if (answer1 + answer2 > 0) {
    return false;
  } else {
    return true;
  }
}
