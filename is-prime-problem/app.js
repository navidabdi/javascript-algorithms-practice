// Every solution that comes to my mind
function isPowerOfTwo(number) {
  if (number < 1) return false;

  let dividedNum = number;
  while (dividedNum !== 1) {
    if (dividedNum % 2 !== 0) return false;

    dividedNum = dividedNum / 2;
  }
  return true;
}

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(1024));

// Best Case:
// Avgare Case:
// Worst Case:
