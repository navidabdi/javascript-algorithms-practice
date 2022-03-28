/*

Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// My Solution 1
function findOdd(a) {
  let count = {};
  a.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });

  return Number(
    Object.keys(count).find(
      (key) => count[key] === Object.values(count).find((i) => i % 2 !== 0)
    )
  );
}
// One of other Solutions
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// One of other Solutions
function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}
// One of other Solutions
function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
// One of other Solutions
function findOdd(A) {
  return A.reduce(function (c, v) {
    return c ^ v;
  }, 0);
}
// One of other Solutions
function findOdd(arr) {
  var result,
    num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}
// One of other Solutions
function findOdd(A) {
  for (var i = 0; i < A.length; i++) {
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if (
      A.filter(function (item) {
        return item == A[i];
      }).length %
        2 !=
      0
    ) {
      return A[i];
    }
  }
  return 0;
}
