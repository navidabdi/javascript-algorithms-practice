function isPrime(number) {
  for (let i = 2; i < number; i++) {
    console.log(i);
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Best Case: number = 1 OR 2 => O(1)
// Avgare Case: number is diffrent so => O(n) => {Improved: O(sqrt(n))}
// Worst Case:  number = 27,277 => O(n) => {Improved: O(sqrt(n))}