/*

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 
to_binary(5)  should return 101 
to_binary(11)  should return 1011 
Example:

toBinary(1)   should return 1 
toBinary(5)   should return 101 
toBinary(11)  should return 1011 

*/

// My Solution 1
function toBinary(n) {
  return (n >>> 0).toString(2);
}
// My Solution 2
let toBinary_S2 = (n) => +n.toString(2);
// Test the Solution
console.log(toBinary(1)); // 1
console.log(toBinary(2)); // 10
console.log(toBinary(3)); // 11
console.log(toBinary(5)); // 101

// One of other Solutions
function largestPowerOf(n, number) {
  var p = number;
  while (p < n) {
    p *= number;
  }
  return p;
}

function toBinary_S3(n) {
  var binaryString = '';
  var power = largestPowerOf(n, 2);
  while (power >= 1) {
    if (n - power >= 0) {
      n -= power;
      binaryString += '1';
    } else {
      binaryString += '0';
    }
    power /= 2;
  }
  return parseInt(binaryString);
}
// One of other Solutions
const toBinary_S4 = (n) => Number(n.toString(2));
