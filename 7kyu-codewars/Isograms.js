/*

Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

// My Solution
function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .filter((e, i, a) => a.indexOf(e) !== i).length === 0
  );
}
// One of other Solutions
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
// One of other Solutions
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
// One of other Solutions
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}
// One of other Solutions
function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
// One of other Solutions
function isIsogram(str) {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');

  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function (value, index, self) {
    return self.indexOf(value) === index;
  };

  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}
