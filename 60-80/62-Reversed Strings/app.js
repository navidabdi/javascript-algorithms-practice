/*

Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
FUNDAMENTALSSTRINGS

*/

// My Solution 1
const solution = (str) => {
  strArr = str.split('');
  let newArr = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    newArr += strArr[i];
  }
  return newArr;
};

// My Solution 2
// Test the Solution
console.log(solution('world')); //  dlrow

// One of other Solutions
function solution_S2(str) {
  return str.split('').reverse().join('');
}
// One of other Solutions
const solution_S3 = (s) => [...s].reverse().join('');
