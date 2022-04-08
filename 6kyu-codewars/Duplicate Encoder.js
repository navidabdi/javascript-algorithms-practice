/*

Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

// My Solution
function duplicateEncode(word) {
  let chars = [...word.toLowerCase()];
  let duplicateList = chars.filter(
    (char, index, chars) => chars.indexOf(char) !== index
  );
  let duplicateSet = new Set(duplicateList);
  let uniqueDuplicateList = [...duplicateSet];
  let resultString = '';
  for (let i = 0, n = chars.length; i < n; ++i) {
    if (uniqueDuplicateList.includes(chars[i])) {
      resultString += ')';
    } else {
      resultString += '(';
    }
  }
  return resultString;
}
// One of other Solutions
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
// One of other Solutions
function duplicateEncode(word) {
  var unique = '';
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    } else {
      unique += ')';
    }
  }
  return unique;
}
// One of other Solutions
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'
  );
}
// One of other Solutions
function duplicateEncode(word) {
  var letters = word.toLowerCase().split('');
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j;
      })
        ? ')'
        : '(';
    })
    .join('');
}
// One of other Solutions
function countCharacters(chars) {
  return chars.reduce(function (memo, char) {
    memo[char] = memo[char] ? memo[char] + 1 : 1;
    return memo;
  }, {});
}

function duplicateEncode(word) {
  const chars = word.split('').map((ch) => ch.toLowerCase());
  const charsCount = countCharacters(chars);
  return chars.map((ch) => (charsCount[ch] > 1 ? ')' : '(')).join('');
}
