/*
 
Task
Given a number N, determine if the sum of N consecutive numbers is odd or even.

If the sum is definitely an odd number, return Odd.
If the sum is definitely an even number, return Even.
If the sum can be either odd or even ( depending on which first number you choose ), return Either.
Examples
Odd_or_Even(1) should return Either, because the sum can be odd or even.
Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
Note
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";
is Preloaded.


 */

// My Solution 1
function oddOrEven(n) {
  let odd = [];
  let even = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  if (even.length === odd.length && even.length % 2 === 0) return 'Even';
  if (even.length !== odd.length) return 'Either';

  return 'Odd';
}
// My Solution 2

// Test the Solution
console.log(oddOrEven(1)); //  EITHER
console.log(oddOrEven(6)); //  ODD
console.log(oddOrEven(8)); //  EVEN

// One of other Solutions
function oddOrEven(n) {
  return n % 2 ? EITHER : (n / 2) % 2 ? ODD : EVEN;
}
// One of other Solutions
const oddOrEven = ($) => ($ % 2 ? EITHER : ($ / 2) % 2 ? ODD : EVEN);
// One of other Solutions
function oddOrEven(n) {
  const ODD = 'Odd';
  const EVEN = 'Even';
  const EITHER = 'Either';
  let number = n / 2;
  if (n / 2 !== Math.round(n / 2)) {
    return EITHER;
  } else if (number % 2 === 0) {
    return EVEN;
  } else if (number % 2 === 1) {
    return ODD;
  }
}
