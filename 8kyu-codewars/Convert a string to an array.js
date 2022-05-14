/*

Convert a string to an array

Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

// My Solution
function stringToArray(string) {
  return string.split(' ');
}
// One of other Solutions
function stringToArray(string) {
  var result = [];
  var traverse = function foo(string) {
    for (var i = 0; i < string.length; i++) {
      var chr = string.charAt(i);
      if (chr === ' ') {
        result.push(string.slice(0, i));
        foo(string.slice(i + 1));
        return;
      }
    }
    result.push(string);
  };
  traverse(string);
  return result;
}
// One of other Solutions

// One of other Solutions

// One of other Solutions

// One of other Solutions
