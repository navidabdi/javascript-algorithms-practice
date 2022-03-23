/*

Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// My Solution 1
const getCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  let strToArr = str.split('');

  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strToArr[i] === vowels[j]) vowelsCount++;
    }
  }

  return vowelsCount;
};
// One of other Solutions
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
// One of other Solutions
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
// One of other Solutions
function getCount(str) {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length;
}
