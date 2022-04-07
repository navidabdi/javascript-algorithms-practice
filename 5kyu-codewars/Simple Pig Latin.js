/*

Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// My Solution
function pigIt(str) {
  let pigLatin = [];

  str.split(' ').map((innerStr) => {
    if (/([a-zA-Z])/.test(innerStr)) {
      pigLatin.push(innerStr.substring(1) + innerStr.charAt(0) + 'ay');
    } else {
      pigLatin.push(innerStr);
    }
  });
  return pigLatin.join(' ');
}
// One of other Solutions
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
// One of other Solutions
function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    })
    .join(' ');
}
// One of other Solutions
function pigIt(str) {
  //Code here
  return str.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
}
// One of other Solutions
function pigIt(str) {
  return str
    .split(' ')
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(' ');
}
// One of other Solutions
function pigIt(str) {
  return str
    .split(' ')
    .map(
      (word) =>
        `${word.substring(1)}${word.split('').shift()}${
          word.charCodeAt(0) > 63 ? 'ay' : ''
        }`
    )
    .join(' ');
}
