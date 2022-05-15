/*

Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

// My Solution
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
// One of other Solutions
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
// One of other Solutions
function removeExclamationMarks(s) {
  var arr = s.split('');
  arr = arr.filter(function (e) {
    return e !== '!';
  });
  return arr.join('');
}
// One of other Solutions
const removeExclamationMarks = (s) => {
  return s
    .split('')
    .filter((letter) => letter !== '!')
    .join('');
};
// One of other Solutions
let removeExclamationMarks = (s) => s.split`!`.join``;
// One of other Solutions
function removeExclamationMarks(s) {
  var result = '';
  var arrStr = s.split('');
  for (var i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == '!') {
      arrStr[i] = '';
    }
  }
  for (var j = 0; j < arrStr.length; j++) {
    result += arrStr[j];
  }
  return result;
}
