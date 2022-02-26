// Every solution that comes to my mind => O(n)
function isPowerOfTwo(number) {
  if (number < 1) return false;

  let dividedNum = number;
  while (dividedNum !== 1) {
    if (dividedNum % 2 !== 0) return false;

    dividedNum = dividedNum / 2;
  }
  return true;
}

console.log('Solution 1:');
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(1024));

// The Better way of solving this problem - Bitwise Solution => O(1)
function isPowerTwo(number) {
  return (number & (number - 1)) === 0;
}
console.log('Better Solution:');
console.log(isPowerTwo(5));
console.log(isPowerTwo(8));
console.log(isPowerTwo(2));
console.log(isPowerTwo(20));
console.log(isPowerTwo(1024));
