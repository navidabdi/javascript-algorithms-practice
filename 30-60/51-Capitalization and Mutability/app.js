/*

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

*/

// My Solution 1
function capitalizeWord(word) {
  let newWord = '';
  for (i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[0].toUpperCase();
    } else {
      newWord += word[i];
    }
  }

  return newWord;
}
// My Solution 2

// Test the Solution
console.log(capitalizeWord('word')); //  Word

// One of other Solutions
function capitalizeWord_S2(word) {
  return word[0].toUpperCase() + word.slice(1);
}
// One of other Solutions
const capitalizeWord_S3 = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());
