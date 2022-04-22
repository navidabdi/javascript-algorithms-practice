/*

Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// My Solution
function abbrevName(name) {
  const nameArr = name.toUpperCase().split(' ');
  return `${nameArr[0][0]}.${nameArr[1][0]}`;
}
// One of other Solutions
function abbrevName(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}
// One of other Solutions
function abbrevName(name) {
  return name
    .split(' ')
    .map((x) => x.substr(0, 1).toUpperCase())
    .join('.');
}
// One of other Solutions
const abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();
// One of other Solutions
var abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();
// One of other Solutions
