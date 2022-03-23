/*

Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

// My Solution 1
const squareDigits = (num) => {
  return Number(
    num
      .toString()
      .split('')
      .map((elem) => elem ** 2)
      .join('')
  );
};
// One of other Solutions
function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join('')
  );
}
// One of other Solutions
function squareDigits(num) {
  var array = num
    .toString()
    .split('')
    .map(function (int) {
      var i = parseInt(int);
      return i * i;
    });

  return parseInt(array.join(''));
}
