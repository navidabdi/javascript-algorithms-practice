/*

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

*/

// My Solution 1
function contamination(text, char) {
  if (text == '' || char == '') return '';
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(char);
  }
  return res.join('');
}
// My Solution 2

// Test the Solution
console.log(contamination('abc', 'z')); // zzz
console.log(contamination('_3ebzgh4', '&')); // &&&&&&&&

// One of other Solutions
function contamination_S2(text, char) {
  return char.repeat(text.length);
}
// One of other Solutions
function contamination_S3(text, char) {
  return text.replace(/./g, char);
}
