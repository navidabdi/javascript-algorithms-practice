/*

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

*/
let test = [0, 1, 2, 3, 45];

// My Solution 1
const toCsvText = (array) => {
  return array.join('\n');
};
// My Solution 2

// Test the Solution
console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
); //  '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
console.log(); //

// One of other Solutions
function toCsvText_S2(array) {
  let list = '';
  let k;
  let n = array.length;

  for (let arr of array) {
    k = arr.length;
    for (let a of arr) {
      list += a;
      k--;
      if (k > 0) list += ',';
    }
    n--;
    if (n > 0) list += '\n';
  }
  return list;
}
// One of other Solutions
function toCsvText_S3(array) {
  let res = '';
  for (let i in array) {
    res += array[i] + '\n';
  }
  return res.trim();
}
