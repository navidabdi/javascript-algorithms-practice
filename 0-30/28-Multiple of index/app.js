/*

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] => [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

// My Solution 1
function multipleOfIndex(array) {
  let res = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) res.push(array[i]);
  }
  return res;
}
// My Solution 2

// Test the Solution
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])); // [-1, 10]
console.log(multipleOfIndex([11, -11])); // [-11]
console.log(
  multipleOfIndex([
    -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92,
    68,
  ])
); // [-85, 72, 0, 68]

// One of other Solutions
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
// One of other Solutions
let multipleOfIndex = (a) => a.filter((n, i) => n % i === 0);
