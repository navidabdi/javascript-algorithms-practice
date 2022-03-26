/*

Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

// My Solution 1
function accum(s) {
  let res = [];
  let srtToArr = s.split('');
  for (let i = 0; i < srtToArr.length; i++) {
    res.push(srtToArr[i].toUpperCase() + srtToArr[i].toLowerCase().repeat(i));
  }
  return res.join('-');
}
// One of other Solutions
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
// One of other Solutions
function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }
  return result.join('-');
}
