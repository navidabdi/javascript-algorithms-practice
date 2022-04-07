/*

Moving Zeros To The End


Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

// My Solution 1
function moveZeros(arr) {
  return [...arr.filter((ar) => ar !== 0), arr.filter((ar) => ar === 0)].flat(
    2
  );
}
// My Solution 2
var moveZeros_s2 = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
// One of other Solutions
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
// One of other Solutions
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};
// One of other Solutions
var moveZeros = function (arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};
// One of other Solutions
var moveZeros = function (arr) {
  let result = arr.filter((c) => c !== 0);
  let count = arr.length - result.length;

  return result.concat(Array(count).fill(0));
};
// One of other Solutions
var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};
