// Return a minimum value of an array
function minVal(array) {
  array.sort();
  return array[0];
}

// Check a number if is even or odd
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(26));
console.log(minVal([890, 25, 85, 69, 302, 2]));
