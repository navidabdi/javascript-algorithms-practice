/*

MakeUpperCase

Write a function which converts the input string to uppercase.

*/

// My Solution
function makeUpperCase(str) {
  return str.toUpperCase();
}
// One of other Solutions
function makeUpperCase(str) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    const chr =
      charCode >= 97 && charCode <= 122
        ? String.fromCharCode(charCode - 32)
        : str[i];

    output += chr;
  }

  return output;
}
// One of other Solutions
function makeUpperCase(str) {
  return str.replace(/[a-z]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 32)
  );
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
