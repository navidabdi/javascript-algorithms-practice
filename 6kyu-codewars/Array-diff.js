/*

Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

// My Solution
function arrayDiff(arrA, arrB) {
  let res = [];
  if (arrB.length === 0) return arrA;

  arrA.map((arA) => {
    let check = false;
    arrB.forEach((arB) => {
      if (arA === arB) check = true;
    });
    if (!check) res = [...res, arA];
  });

  return res;
}
// One of other Solutions
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
// One of other Solutions
function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
// One of other Solutions
function array_diff(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
// One of other Solutions
function array_diff(a, b) {
  return a.filter(function (v) {
    return b.indexOf(v) === -1;
  });
}
// One of other Solutions
function array_diff(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}
