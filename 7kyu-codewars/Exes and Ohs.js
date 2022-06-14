// Exes and Ohs

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My Solution
function XO(str) {
  const strToArr = str.toLowerCase().split('');
  return (
    strToArr.filter((s) => s === 'x').length ===
    strToArr.filter((s) => s === 'o').length
  );
}

// Some of the other solutions
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = (str) => {
  str = str.toLowerCase().split('');
  return (
    str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
  );
};

function XO(str) {
  return (
    str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
  );
}

function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'x') sum++;
    if (str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}
