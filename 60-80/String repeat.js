/*

String repeat

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

// My Solution 1
function repeatStr(n, s) {
  return s.repeat(n);
}
// Test the Solution

// One of other Solutions
function repeatStr(n, s) {
  var str = '';
  for (var i = 0; i < n; i++) str += s;
  return str;
}
// One of other Solutions
function repeatStr(n, s) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
  return s.repeat(n);
}
