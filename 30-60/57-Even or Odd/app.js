/*

Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

// My Solution 1
const even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

// My Solution 2

// Test the Solution
console.log(even_or_odd(2)); //  Even
console.log(even_or_odd(7)); //  Odd

// One of other Solutions
var even_or_odd_S2 = (n) => (n & 1 ? 'Odd' : 'Even');
// One of other Solutions
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even';
  }
  return 'Odd';
}
