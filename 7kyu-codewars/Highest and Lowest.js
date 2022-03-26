/*

Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

// My Solution 1
function highAndLow(numbers) {
  res = numbers.split(' ').sort(function (a, b) {
    return a - b;
  });

  return `${res[res.length - 1]} ${res[0]}`;
}
// One of other Solutions
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
// One of other Solutions
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
