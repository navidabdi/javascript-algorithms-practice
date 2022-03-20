/*

Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.

FUNDAMENTALSSTRINGSARRAYS

*/

// My Solution 1
function noSpace(x) {
  return x.split(' ').join('');
}

// One of other Solutions
function noSpace(x) {
  return x.replace(/\s/g, '');
}
// One of other Solutions
const noSpace = (x) => x.replace(/ /g, '');
