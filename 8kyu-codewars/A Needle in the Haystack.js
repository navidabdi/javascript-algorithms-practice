/*

A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")

*/

// My Solution
function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') return `found the needle at position ${i}`;
  }
}
// One of other Solutions
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
// One of other Solutions
function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;
  }
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
